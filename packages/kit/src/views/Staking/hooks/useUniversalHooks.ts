import { useCallback } from 'react';

import backgroundApiProxy from '@onekeyhq/kit/src/background/instance/backgroundApiProxy';
import { useSendConfirm } from '@onekeyhq/kit/src/hooks/useSendConfirm';
import { vaultFactory } from '@onekeyhq/kit-bg/src/vaults/factory';
import { type IModalSendParamList } from '@onekeyhq/shared/src/routes';
import networkUtils from '@onekeyhq/shared/src/utils/networkUtils';
import type { IStakingInfo } from '@onekeyhq/shared/types/staking';

export function useUniversalStake({
  networkId,
  accountId,
}: {
  networkId: string;
  accountId: string;
}) {
  const { navigationToSendConfirm } = useSendConfirm({ accountId, networkId });
  return useCallback(
    async ({
      amount,
      provider,
      symbol,
      stakingInfo,
      onSuccess,
      onFail,
    }: {
      amount: string;
      symbol: string;
      provider: string;
      stakingInfo?: IStakingInfo;
      onSuccess?: IModalSendParamList['SendConfirm']['onSuccess'];
      onFail?: IModalSendParamList['SendConfirm']['onFail'];
    }) => {
      const stakeTx =
        await backgroundApiProxy.serviceStaking.fetchStakeTransaction({
          amount,
          networkId,
          accountId,
          symbol,
          provider,
        });
      const vault = await vaultFactory.getVault({ networkId, accountId });
      const encodedTx = await vault.buildStakeEncodedTx(stakeTx);
      let useFeeInTx;
      let feeInfoEditable;
      if (networkUtils.isBTCNetwork(networkId)) {
        useFeeInTx = true;
        feeInfoEditable = false;
      }
      await navigationToSendConfirm({
        encodedTx,
        stakingInfo,
        onSuccess,
        onFail,
        useFeeInTx,
        feeInfoEditable,
      });
    },
    [navigationToSendConfirm, accountId, networkId],
  );
}

export function useUniversalWithdraw({
  networkId,
  accountId,
}: {
  networkId: string;
  accountId: string;
}) {
  const { navigationToSendConfirm } = useSendConfirm({ accountId, networkId });
  return useCallback(
    async ({
      amount,
      symbol,
      provider,
      stakingInfo,
      onSuccess,
      onFail,
    }: {
      amount: string;
      symbol: string;
      provider: string;
      stakingInfo?: IStakingInfo;
      onSuccess?: IModalSendParamList['SendConfirm']['onSuccess'];
      onFail?: IModalSendParamList['SendConfirm']['onFail'];
    }) => {
      const encodedTx =
        await backgroundApiProxy.serviceStaking.buildUnstakeTransaction({
          amount,
          networkId,
          accountId,
          symbol,
          provider,
        });

      await navigationToSendConfirm({
        encodedTx,
        stakingInfo,
        onSuccess,
        onFail,
      });
    },
    [accountId, networkId, navigationToSendConfirm],
  );
}
