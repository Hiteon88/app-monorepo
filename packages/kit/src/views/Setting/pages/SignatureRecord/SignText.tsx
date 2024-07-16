import { useCallback } from 'react';

import { useIntl } from 'react-intl';
import { StyleSheet } from 'react-native';

import {
  Empty,
  IconButton,
  SectionList,
  SizableText,
  Stack,
  TextArea,
  XStack,
  YStack,
  useClipboard,
} from '@onekeyhq/components';
import backgroundApiProxy from '@onekeyhq/kit/src/background/instance/backgroundApiProxy';
import { NetworkAvatar } from '@onekeyhq/kit/src/components/NetworkAvatar';
import { ETranslations } from '@onekeyhq/shared/src/locale';
import utils from '@onekeyhq/shared/src/utils/accountUtils';
import { formatTime } from '@onekeyhq/shared/src/utils/dateUtils';
import type { ISignedMessage } from '@onekeyhq/shared/types/signatureRecord';

import { useGetSignatureSections } from './hooks';

const ListEmptyComponent = () => {
  const intl = useIntl();
  return (
    <Empty
      title={intl.formatMessage({ id: ETranslations.settings_no_signed_text })}
      description={intl.formatMessage({
        id: ETranslations.settings_no_signed_text_desc,
      })}
      icon="ClockAlertOutline"
    />
  );
};

const SignTextItem = ({ item }: { item: ISignedMessage }) => {
  const { copyText } = useClipboard();
  const onPress = useCallback(
    () => copyText(item.message),
    [item.message, copyText],
  );
  return (
    <Stack px="$5" pb="$3">
      <YStack
        borderWidth={StyleSheet.hairlineWidth}
        borderRadius="$3"
        borderColor="$borderSubdued"
        overflow="hidden"
      >
        <XStack justifyContent="space-between" pt="$3" px="$3" pb="$1">
          <SizableText size="$bodyMd">
            {formatTime(new Date(item.createdAt), { hideSeconds: true })} •{' '}
            {item.title}
          </SizableText>
          <IconButton
            variant="tertiary"
            icon="Copy1Outline"
            size="small"
            onPress={onPress}
          />
        </XStack>
        <XStack justifyContent="space-between" p="$3">
          <TextArea
            maxHeight="$24"
            disabled
            editable={false}
            selectable={false}
            value={
              item.contentType === 'json'
                ? JSON.stringify(JSON.parse(item.message), null, 2)
                : item.message
            }
            backgroundColor="transparent"
            width="100%"
            borderWidth={0}
          />
        </XStack>
        <XStack p="$3" backgroundColor="$bgSubdued" alignItems="center">
          <Stack mr="$2">
            <NetworkAvatar size={16} networkId={item.networkId} />
          </Stack>
          <SizableText color="$textSubdued" size="$bodySmMedium">
            {item.network.name}
            {' • '}
            {utils.shortenAddress({ address: item.address })}
          </SizableText>
        </XStack>
      </YStack>
    </Stack>
  );
};

type ISectionListData = {
  title: string;
  data: ISignedMessage[];
};

const keyExtractor = (item: unknown) => {
  const createdAt = (item as ISignedMessage)?.createdAt;
  return String(createdAt);
};

export const SignText = () => {
  const { sections, onEndReached } = useGetSignatureSections(async (params) =>
    backgroundApiProxy.serviceSignature.getSignedMessages(params),
  );

  return (
    <SectionList
      sections={sections}
      keyExtractor={keyExtractor}
      estimatedItemSize={191}
      ItemSeparatorComponent={null}
      SectionSeparatorComponent={null}
      renderSectionHeader={({ section }) => (
        <SectionList.SectionHeader
          title={(section as ISectionListData).title}
        />
      )}
      renderItem={({ item }) => <SignTextItem item={item} />}
      ListEmptyComponent={ListEmptyComponent}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.3}
    />
  );
};
