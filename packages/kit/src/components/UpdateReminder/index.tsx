import type { ReactElement } from 'react';

import type {
  IButtonProps,
  IIconProps,
  IStackProps,
} from '@onekeyhq/components';
import { Button, Icon, SizableText, XStack } from '@onekeyhq/components';
import { EAppUpdateStatus } from '@onekeyhq/shared/src/appUpdate';
import type { IAppUpdateInfo } from '@onekeyhq/shared/src/appUpdate';
import platformEnv from '@onekeyhq/shared/src/platformEnv';

import { useFetchAppUpdateInfo } from './hooks';

const UPDATE_STATUS_TEXT_STYLE: Record<
  EAppUpdateStatus,
  {
    iconName: IIconProps['name'];
    iconColor: IIconProps['color'];
    renderText: (text: string) => string;
  }
> = {
  [EAppUpdateStatus.notify]: {
    iconName: 'DownloadOutline',
    iconColor: '$iconInfo',
    renderText(version: string) {
      return `Update App to ${version} is available`;
    },
  },
  [EAppUpdateStatus.downloading]: {
    iconName: 'RefreshCcwSolid',
    iconColor: '$iconInfo',
    renderText(percents: string) {
      return `Downloading Package... ${percents}%`;
    },
  },
  [EAppUpdateStatus.ready]: {
    iconName: 'DownloadOutline',
    iconColor: '$iconSuccess',
    renderText(version: string) {
      return `App ${version} Ready for Update`;
    },
  },
  [EAppUpdateStatus.failed]: {
    iconName: 'ErrorOutline',
    iconColor: '$iconCritical',
    renderText(errorMessage: string) {
      return `Update App to ${errorMessage} is available`;
    },
  },
  [EAppUpdateStatus.done]: {},
};

const testStatus = EAppUpdateStatus.notify;
function UpdateStatusText({ updateInfo }: { updateInfo: IAppUpdateInfo }) {
  const { iconName, iconColor, renderText } =
    UPDATE_STATUS_TEXT_STYLE[testStatus];
  return (
    <XStack alignItems="center" space="$2" flexShrink={1}>
      <Icon name={iconName} color={iconColor} size="$4" flexShrink={0} />
      <SizableText
        size="$bodyMdMedium"
        color="$text"
        flexShrink={1}
        numberOfLines={1}
      >
        {renderText('4.1')}
      </SizableText>
    </XStack>
  );
}

const UPDATE_ACTION_STYLE: Record<
  EAppUpdateStatus,
  {
    label: string;
    icon?: IIconProps['name'];
    prefixElement?: ReactElement;
    variant?: IButtonProps['variant'];
  }
> = {
  [EAppUpdateStatus.notify]: {
    label: 'View',
  },
  [EAppUpdateStatus.downloading]: {
    label: 'View',
  },
  [EAppUpdateStatus.ready]: {
    label: 'Restart to Update',
    icon: 'RefreshCcwSolid',
    variant: 'primary',
  },
  [EAppUpdateStatus.failed]: {
    prefixElement: (
      <XStack space="$2" justifyContent="space-between" alignItems="center">
        <SizableText size="$bodyMdMedium" color="$textSubdued">
          Download on Github
        </SizableText>
        <Icon name="ArrowTopRightOutline" size="$4.5" />
      </XStack>
    ),
    label: 'Retry',
    variant: 'primary',
  },
  [EAppUpdateStatus.done]: {},
};

function UpdateAction({ updateInfo }: { updateInfo: IAppUpdateInfo }) {
  const { icon, label, variant, prefixElement } =
    UPDATE_ACTION_STYLE[testStatus];
  return (
    <XStack space="$4" justifyContent="space-between" alignItems="center">
      {prefixElement}
      <Button size="small" icon={icon} variant={variant}>
        {label}
      </Button>
    </XStack>
  );
}

const UPDATE_REMINDER_BAR_STYLE: Record<EAppUpdateStatus, IStackProps> = {
  [EAppUpdateStatus.notify]: {
    bg: '$bgInfoSubdued',
    borderColor: '$borderInfoSubdued',
  },
  [EAppUpdateStatus.downloading]: {
    bg: '$bgInfoSubdued',
    borderColor: '$borderInfoSubdued',
  },
  [EAppUpdateStatus.ready]: {
    bg: '$bgSuccessSubdued',
    borderColor: '$borderCriticalSubdued',
  },
  [EAppUpdateStatus.failed]: {
    bg: '$bgCriticalSubdued',
    borderColor: '$borderSuccessSubdued',
  },
  [EAppUpdateStatus.done]: {
    bg: '$bgSuccessSubdued',
    borderColor: '$borderCriticalSubdued',
  },
};

function BasicUpdateReminder() {
  const style = UPDATE_REMINDER_BAR_STYLE[testStatus];
  const appUpdateInfo = useFetchAppUpdateInfo();

  return appUpdateInfo ? (
    <XStack
      px="$5"
      py="$2"
      justifyContent="space-between"
      alignItems="center"
      borderTopWidth="$px"
      borderBottomWidth="$px"
      {...style}
    >
      <UpdateStatusText updateInfo={appUpdateInfo} />
      <UpdateAction updateInfo={appUpdateInfo} />
    </XStack>
  ) : null;
}

export const UpdateReminder = platformEnv.isWeb
  ? () => null
  : BasicUpdateReminder;
