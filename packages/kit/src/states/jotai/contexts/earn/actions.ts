import { useRef } from 'react';

import backgroundApiProxy from '@onekeyhq/kit/src/background/instance/backgroundApiProxy';
import { ContextJotaiActionsBase } from '@onekeyhq/kit/src/states/jotai/utils/ContextJotaiActionsBase';
import { memoFn } from '@onekeyhq/shared/src/utils/cacheUtils';
import type {
  IAvailableAsset,
  IEarnAtomData,
} from '@onekeyhq/shared/types/staking';

import { contextAtomMethod, earnAtom } from './atoms';

export const homeResettingFlags: Record<string, number> = {};

class ContextJotaiActionsMarket extends ContextJotaiActionsBase {
  syncToDb = contextAtomMethod((get, set, payload: IEarnAtomData) => {
    const atom = earnAtom();
    if (!get(atom).isMounted) {
      return;
    }
    set(atom, (prev: IEarnAtomData) => ({
      ...prev,
      ...payload,
    }));
    void backgroundApiProxy.simpleDb.earn.setRawData(payload);
  });

  updateAvailableAssets = contextAtomMethod(
    (_, set, availableAssets: IAvailableAsset[]) => {
      this.syncToDb.call(set, {
        availableAssets,
      });
    },
  );
}

const createActions = memoFn(() => new ContextJotaiActionsMarket());

export function useEarnActions() {
  const actions = createActions();
  const updateAvailableAssets = actions.updateAvailableAssets.use();

  return useRef({
    updateAvailableAssets,
  });
}
