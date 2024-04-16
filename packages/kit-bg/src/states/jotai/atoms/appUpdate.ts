import {
  EAppUpdateStatus,
  type IAppUpdateInfo,
} from '@onekeyhq/shared/src/appUpdate';

import { EAtomNames } from '../atomNames';
import { globalAtom } from '../utils';

export const { target: appUpdatePersistAtom, use: useAppUpdatePersistAtom } =
  globalAtom<IAppUpdateInfo>({
    persist: true,
    name: EAtomNames.appUpdatePersistAtom,
    initialValue: {
      latestVersion: process.env.VERSION ?? '1.0.0',
      isForceUpdate: false,
      changeLog: undefined,
      updateAt: 0,
      status: EAppUpdateStatus.done,
    },
  });
