import { useCallback, useEffect, useMemo, useState } from 'react';

import { useRoute } from '@react-navigation/core';
import BigNumber from 'bignumber.js';
import { useIntl } from 'react-intl';

import type { IPageNavigationProp } from '@onekeyhq/components';
import {
  Alert,
  Empty,
  Image,
  ListView,
  Page,
  SizableText,
  Skeleton,
  Stack,
  XStack,
  YStack,
  useMedia,
  useSafeAreaInsets,
} from '@onekeyhq/components';
import backgroundApiProxy from '@onekeyhq/kit/src/background/instance/backgroundApiProxy';
import { AccountSelectorProviderMirror } from '@onekeyhq/kit/src/components/AccountSelector';
import { ListItem } from '@onekeyhq/kit/src/components/ListItem';
import type { ITokenListItemProps } from '@onekeyhq/kit/src/components/TokenListItem';
import { TokenListItem } from '@onekeyhq/kit/src/components/TokenListItem';
import useAppNavigation from '@onekeyhq/kit/src/hooks/useAppNavigation';
import { useDebounce } from '@onekeyhq/kit/src/hooks/useDebounce';
import { useAccountSelectorActions } from '@onekeyhq/kit/src/states/jotai/contexts/accountSelector';
import {
  useSwapActions,
  useSwapNetworksAtom,
  useSwapSelectFromTokenAtom,
  useSwapSelectToTokenAtom,
} from '@onekeyhq/kit/src/states/jotai/contexts/swap';
import { useSettingsPersistAtom } from '@onekeyhq/kit-bg/src/states/jotai/atoms';
import { ETranslations } from '@onekeyhq/shared/src/locale';
import type { IFuseResult } from '@onekeyhq/shared/src/modules3rdParty/fuse';
import platformEnv from '@onekeyhq/shared/src/platformEnv';
import type { IModalSwapParamList } from '@onekeyhq/shared/src/routes/swap';
import { EModalSwapRoutes } from '@onekeyhq/shared/src/routes/swap';
import accountUtils from '@onekeyhq/shared/src/utils/accountUtils';
import { EAccountSelectorSceneName } from '@onekeyhq/shared/types';
import {
  swapNetworksCommonCount,
  swapNetworksCommonCountMD,
} from '@onekeyhq/shared/types/swap/SwapProvider.constants';
import {
  ESwapDirectionType,
  ETokenRiskLevel,
  type ISwapNetwork,
  type ISwapToken,
} from '@onekeyhq/shared/types/swap/types';

import useConfigurableChainSelector from '../../../ChainSelector/hooks/useChainSelector';
import NetworkToggleGroup from '../../components/SwapNetworkToggleGroup';
import { useSwapAddressInfo } from '../../hooks/useSwapAccount';
import { useSwapTokenList } from '../../hooks/useSwapTokens';
import { SwapProviderMirror } from '../SwapProviderMirror';

import type { RouteProp } from '@react-navigation/core';

const SwapTokenSelectPage = () => {
  const navigation =
    useAppNavigation<IPageNavigationProp<IModalSwapParamList>>();
  const route =
    useRoute<
      RouteProp<IModalSwapParamList, EModalSwapRoutes.SwapTokenSelect>
    >();
  const type = useMemo(
    () => route.params?.type ?? ESwapDirectionType.FROM,
    [route.params?.type],
  );
  const intl = useIntl();
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const searchKeywordDebounce = useDebounce(searchKeyword, 500);
  const [swapNetworks] = useSwapNetworksAtom();
  const [fromToken] = useSwapSelectFromTokenAtom();
  const swapFromAddressInfo = useSwapAddressInfo(ESwapDirectionType.FROM);
  const swapToAddressInfo = useSwapAddressInfo(ESwapDirectionType.TO);
  const [toToken] = useSwapSelectToTokenAtom();
  const [settingsPersistAtom] = useSettingsPersistAtom();
  const { selectFromToken, selectToToken } = useSwapActions().current;
  const { updateSelectedAccountNetwork } = useAccountSelectorActions().current;
  const syncDefaultNetworkSelect = useCallback(() => {
    if (type === ESwapDirectionType.FROM) {
      if (fromToken?.networkId) {
        return (
          swapNetworks.find(
            (item: ISwapNetwork) => item.networkId === fromToken.networkId,
          ) ?? swapNetworks?.[0]
        );
      }
      if (swapFromAddressInfo.networkId) {
        return (
          swapNetworks.find(
            (item: ISwapNetwork) =>
              item.networkId === swapToAddressInfo.networkId,
          ) ?? swapNetworks?.[0]
        );
      }
    } else {
      if (toToken?.networkId) {
        return (
          swapNetworks.find(
            (item: ISwapNetwork) => item.networkId === toToken.networkId,
          ) ?? swapNetworks?.[0]
        );
      }
      if (swapToAddressInfo.networkId) {
        return (
          swapNetworks.find(
            (item: ISwapNetwork) =>
              item.networkId === swapToAddressInfo.networkId,
          ) ?? swapNetworks?.[0]
        );
      }

      return swapNetworks?.[0];
    }
  }, [
    fromToken?.networkId,
    swapFromAddressInfo.networkId,
    swapNetworks,
    swapToAddressInfo.networkId,
    toToken?.networkId,
    type,
  ]);
  const [currentSelectNetwork, setCurrentSelectNetwork] = useState<
    ISwapNetwork | undefined
  >(syncDefaultNetworkSelect);

  useEffect(() => {
    const accountNet =
      type === ESwapDirectionType.FROM
        ? swapFromAddressInfo.networkId
        : swapToAddressInfo.networkId;
    if (
      currentSelectNetwork?.networkId &&
      currentSelectNetwork?.networkId !== accountNet
    ) {
      void updateSelectedAccountNetwork({
        num: type === ESwapDirectionType.FROM ? 0 : 1,
        networkId: currentSelectNetwork?.networkId,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { fetchLoading, currentTokens } = useSwapTokenList(
    type,
    currentSelectNetwork?.networkId,
    searchKeywordDebounce,
  );
  const alertIndex = useMemo(
    () =>
      currentTokens.findIndex((item) => {
        const rawItem = (item as IFuseResult<ISwapToken>).item
          ? (item as IFuseResult<ISwapToken>).item
          : (item as ISwapToken);
        return !rawItem.price || new BigNumber(rawItem.price).isZero();
      }),
    [currentTokens],
  );

  const checkRiskToken = useCallback(
    async (token: ISwapToken) => {
      const isRiskLevel =
        !token.price ||
        new BigNumber(token.price).isZero() ||
        token.riskLevel === ETokenRiskLevel.SPAM ||
        token.riskLevel === ETokenRiskLevel.MALICIOUS;
      if (isRiskLevel) {
        if (!settingsPersistAtom.tokenRiskReminder) return false;
        const checkConfirmRiskToken =
          await backgroundApiProxy.serviceSetting.checkConfirmedRiskToken(
            `${token.networkId}_${token.contractAddress}`,
          );
        return !checkConfirmRiskToken;
      }
      return isRiskLevel;
    },
    [settingsPersistAtom.tokenRiskReminder],
  );

  const selectTokenHandler = useCallback(
    (token: ISwapToken) => {
      navigation.popStack();
      if (type === ESwapDirectionType.FROM) {
        void selectFromToken(token);
      } else {
        void selectToToken(token);
      }
    },
    [navigation, selectFromToken, selectToToken, type],
  );

  const onSelectToken = useCallback(
    async (item: ISwapToken) => {
      if (await checkRiskToken(item)) {
        navigation.push(EModalSwapRoutes.TokenRiskReminder, {
          storeName: route.params.storeName,
          token: item,
          onConfirm: () => {
            selectTokenHandler(item);
          },
        });
      } else {
        selectTokenHandler(item);
      }
    },
    [checkRiskToken, navigation, route.params.storeName, selectTokenHandler],
  );

  const onSelectCurrentNetwork = useCallback(
    (network: ISwapNetwork) => {
      setCurrentSelectNetwork(network);
      void updateSelectedAccountNetwork({
        num: type === ESwapDirectionType.FROM ? 0 : 1,
        networkId: network.networkId,
      });
    },
    [type, updateSelectedAccountNetwork],
  );

  const sameTokenDisabled = useCallback(
    (token: ISwapToken) => {
      if (type === ESwapDirectionType.FROM) {
        return (
          toToken?.contractAddress === token.contractAddress &&
          toToken?.networkId === token.networkId
        );
      }
      return (
        fromToken?.contractAddress === token.contractAddress &&
        fromToken?.networkId === token.networkId
      );
    },
    [
      fromToken?.contractAddress,
      fromToken?.networkId,
      toToken?.contractAddress,
      toToken?.networkId,
      type,
    ],
  );

  const { md } = useMedia();

  const renderItem = useCallback(
    ({
      item,
      index,
    }: {
      item: ISwapToken | IFuseResult<ISwapToken>;
      index: number;
    }) => {
      const rawItem = (item as IFuseResult<ISwapToken>).item
        ? (item as IFuseResult<ISwapToken>).item
        : (item as ISwapToken);
      const balanceBN = new BigNumber(rawItem.balanceParsed ?? 0);
      const fiatValueBN = new BigNumber(rawItem.fiatValue ?? 0);
      const contractAddressDisplay = md
        ? accountUtils.shortenAddress({
            address: rawItem.contractAddress,
          })
        : rawItem.contractAddress;
      const tokenItem: ITokenListItemProps = {
        isSearch: !!searchKeywordDebounce,
        tokenImageSrc: rawItem.logoURI,
        tokenName: rawItem.name,
        tokenSymbol: rawItem.symbol,
        networkImageSrc: rawItem.networkLogoURI,
        tokenContrastAddress: searchKeywordDebounce
          ? contractAddressDisplay
          : undefined,
        balance: !balanceBN.isZero() ? rawItem.balanceParsed : undefined,
        valueProps:
          rawItem.fiatValue && !fiatValueBN.isZero()
            ? {
                value: rawItem.fiatValue,
                currency: settingsPersistAtom.currencyInfo.symbol,
              }
            : undefined,
        onPress: !sameTokenDisabled(rawItem)
          ? () => onSelectToken(rawItem)
          : undefined,
        disabled: sameTokenDisabled(rawItem),
        titleMatchStr: (item as IFuseResult<ISwapToken>).matches?.find(
          (v) => v.key === 'symbol',
        ),
      };
      return (
        <>
          {alertIndex === index ? (
            <Stack pt="$3" pb="$2">
              <Alert
                fullBleed
                type="default"
                title={intl.formatMessage({
                  id: ETranslations.token_selector_unverified_token_warning,
                })}
                icon="InfoCircleOutline"
              />
            </Stack>
          ) : null}
          <TokenListItem {...tokenItem} />
        </>
      );
    },
    [
      alertIndex,
      intl,
      md,
      onSelectToken,
      sameTokenDisabled,
      searchKeywordDebounce,
      settingsPersistAtom.currencyInfo.symbol,
    ],
  );

  const networkFilterData = useMemo(() => {
    let swapNetworksCommon: ISwapNetwork[] = [];
    let swapNetworksMoreCount;
    if (swapNetworks && swapNetworks.length) {
      if (md) {
        swapNetworksCommon =
          swapNetworks.length > swapNetworksCommonCountMD
            ? swapNetworks.slice(0, swapNetworksCommonCountMD)
            : swapNetworks;
        swapNetworksMoreCount =
          swapNetworks.length - swapNetworksCommonCountMD > 0
            ? swapNetworks.length - swapNetworksCommonCountMD
            : undefined;
      } else {
        swapNetworksCommon =
          swapNetworks.length > swapNetworksCommonCount
            ? swapNetworks.slice(0, swapNetworksCommonCount)
            : swapNetworks;
        swapNetworksMoreCount =
          swapNetworks.length - swapNetworksCommonCount > 0
            ? swapNetworks.length - swapNetworksCommonCount
            : undefined;
      }
    }
    return {
      swapNetworksCommon,
      swapNetworksMoreCount,
    };
  }, [md, swapNetworks]);

  const openChainSelector = useConfigurableChainSelector();
  const { bottom } = useSafeAreaInsets();

  return (
    <Page skipLoading={platformEnv.isNativeIOS} safeAreaEnabled={false}>
      <Page.Header
        title={intl.formatMessage({ id: ETranslations.token_selector_title })}
        headerSearchBarOptions={{
          placeholder: intl.formatMessage({
            id: ETranslations.token_selector_search_placeholder,
          }),
          onChangeText: ({ nativeEvent }) => {
            const afterTrim = nativeEvent.text.trim();
            setSearchKeyword(afterTrim);
          },
        }}
      />
      <Page.Body>
        <NetworkToggleGroup
          onMoreNetwork={() => {
            openChainSelector({
              defaultNetworkId: currentSelectNetwork?.networkId,
              networkIds: swapNetworks.map((item) => item.networkId),
              grouped: false,
              onSelect: (network) => {
                if (!network) return;
                const findSwapNetwork = swapNetworks.find(
                  (net) => net.networkId === network.id,
                );
                if (!findSwapNetwork) return;
                onSelectCurrentNetwork(findSwapNetwork);
              },
            });
          }}
          networks={networkFilterData.swapNetworksCommon}
          moreNetworksCount={networkFilterData.swapNetworksMoreCount}
          selectedNetwork={currentSelectNetwork}
          onSelectNetwork={onSelectCurrentNetwork}
        />
        <XStack px="$5" py="$2">
          <SizableText size="$headingSm" pr="$2">
            {`${intl.formatMessage({
              id: ETranslations.token_selector_network,
            })}:`}
          </SizableText>
          <XStack>
            <Image height="$5" width="$5" borderRadius="$full" mr="$2">
              <Image.Source
                source={{
                  uri: currentSelectNetwork?.logoURI,
                }}
              />
            </Image>
            <SizableText size="$bodyMd">
              {currentSelectNetwork?.name ??
                currentSelectNetwork?.symbol ??
                currentSelectNetwork?.shortcode ??
                'Unknown'}
            </SizableText>
          </XStack>
        </XStack>
        {fetchLoading ? (
          Array.from({ length: 5 }).map((_, index) => (
            <ListItem key={index}>
              <Skeleton w="$10" h="$10" radius="round" />
              <YStack>
                <YStack py="$1">
                  <Skeleton h="$4" w="$32" />
                </YStack>
                <YStack py="$1">
                  <Skeleton h="$3" w="$24" />
                </YStack>
              </YStack>
            </ListItem>
          ))
        ) : (
          <YStack flex={1}>
            <ListView
              data={currentTokens}
              renderItem={renderItem}
              estimatedItemSize={60}
              ListFooterComponent={<Stack h={bottom || '$2'} />}
              ListEmptyComponent={
                <Empty
                  icon="SearchOutline"
                  title={intl.formatMessage({
                    id: ETranslations.global_no_results,
                  })}
                  description={intl.formatMessage({
                    id: ETranslations.token_no_search_results_desc,
                  })}
                />
              }
            />
          </YStack>
        )}
      </Page.Body>
    </Page>
  );
};

const SwapTokenSelectPageWithProvider = () => {
  const route =
    useRoute<
      RouteProp<IModalSwapParamList, EModalSwapRoutes.SwapTokenSelect>
    >();
  const { storeName } = route.params;
  return (
    <SwapProviderMirror storeName={storeName}>
      <SwapTokenSelectPage />
    </SwapProviderMirror>
  );
};
export default function SwapTokenSelectModal() {
  return (
    <AccountSelectorProviderMirror
      config={{
        sceneName: EAccountSelectorSceneName.swap,
      }}
      enabledNum={[0, 1]}
    >
      <SwapTokenSelectPageWithProvider />
    </AccountSelectorProviderMirror>
  );
}
