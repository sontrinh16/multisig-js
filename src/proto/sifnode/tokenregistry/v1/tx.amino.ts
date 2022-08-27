import { RegistryEntry, Registry, permissionFromJSON } from "./types";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "@osmonauts/helpers";
import { MsgRegister, MsgDeregister, MsgSetRegistry } from "./tx";
export interface AminoMsgRegister extends AminoMsg {
  type: "/sifnode.tokenregistry.v1.MsgRegister";
  value: {
    from: string;
    entry: {
      decimals: string;
      denom: string;
      base_denom: string;
      path: string;
      ibc_channel_id: string;
      ibc_counterparty_channel_id: string;
      display_name: string;
      display_symbol: string;
      network: string;
      address: string;
      external_symbol: string;
      transfer_limit: string;
      permissions: number[];
      unit_denom: string;
      ibc_counterparty_denom: string;
      ibc_counterparty_chain_id: string;
    };
  };
}
export interface AminoMsgDeregister extends AminoMsg {
  type: "/sifnode.tokenregistry.v1.MsgDeregister";
  value: {
    from: string;
    denom: string;
  };
}
export interface AminoMsgSetRegistry extends AminoMsg {
  type: "/sifnode.tokenregistry.v1.MsgSetRegistry";
  value: {
    from: string;
    registry: {
      entries: {
        decimals: string;
        denom: string;
        base_denom: string;
        path: string;
        ibc_channel_id: string;
        ibc_counterparty_channel_id: string;
        display_name: string;
        display_symbol: string;
        network: string;
        address: string;
        external_symbol: string;
        transfer_limit: string;
        permissions: number[];
        unit_denom: string;
        ibc_counterparty_denom: string;
        ibc_counterparty_chain_id: string;
      }[];
    };
  };
}
export const AminoConverter = {
  "/sifnode.tokenregistry.v1.MsgRegister": {
    aminoType: "/sifnode.tokenregistry.v1.MsgRegister",
    toAmino: ({
      from,
      entry
    }: MsgRegister): AminoMsgRegister["value"] => {
      return {
        from,
        entry: {
          decimals: entry.decimals.toString(),
          denom: entry.denom,
          base_denom: entry.baseDenom,
          path: entry.path,
          ibc_channel_id: entry.ibcChannelId,
          ibc_counterparty_channel_id: entry.ibcCounterpartyChannelId,
          display_name: entry.displayName,
          display_symbol: entry.displaySymbol,
          network: entry.network,
          address: entry.address,
          external_symbol: entry.externalSymbol,
          transfer_limit: entry.transferLimit,
          permissions: entry.permissions,
          unit_denom: entry.unitDenom,
          ibc_counterparty_denom: entry.ibcCounterpartyDenom,
          ibc_counterparty_chain_id: entry.ibcCounterpartyChainId
        }
      };
    },
    fromAmino: ({
      from,
      entry
    }: AminoMsgRegister["value"]): MsgRegister => {
      return {
        from,
        entry: {
          decimals: Long.fromString(entry.decimals),
          denom: entry.denom,
          baseDenom: entry.base_denom,
          path: entry.path,
          ibcChannelId: entry.ibc_channel_id,
          ibcCounterpartyChannelId: entry.ibc_counterparty_channel_id,
          displayName: entry.display_name,
          displaySymbol: entry.display_symbol,
          network: entry.network,
          address: entry.address,
          externalSymbol: entry.external_symbol,
          transferLimit: entry.transfer_limit,
          permissions: entry.permissions.map(el => permissionFromJSON(el)),
          unitDenom: entry.unit_denom,
          ibcCounterpartyDenom: entry.ibc_counterparty_denom,
          ibcCounterpartyChainId: entry.ibc_counterparty_chain_id
        }
      };
    }
  },
  "/sifnode.tokenregistry.v1.MsgDeregister": {
    aminoType: "/sifnode.tokenregistry.v1.MsgDeregister",
    toAmino: ({
      from,
      denom
    }: MsgDeregister): AminoMsgDeregister["value"] => {
      return {
        from,
        denom
      };
    },
    fromAmino: ({
      from,
      denom
    }: AminoMsgDeregister["value"]): MsgDeregister => {
      return {
        from,
        denom
      };
    }
  },
  "/sifnode.tokenregistry.v1.MsgSetRegistry": {
    aminoType: "/sifnode.tokenregistry.v1.MsgSetRegistry",
    toAmino: ({
      from,
      registry
    }: MsgSetRegistry): AminoMsgSetRegistry["value"] => {
      return {
        from,
        registry: {
          entries: registry.entries.map(el0 => ({
            decimals: el0.decimals.toString(),
            denom: el0.denom,
            base_denom: el0.baseDenom,
            path: el0.path,
            ibc_channel_id: el0.ibcChannelId,
            ibc_counterparty_channel_id: el0.ibcCounterpartyChannelId,
            display_name: el0.displayName,
            display_symbol: el0.displaySymbol,
            network: el0.network,
            address: el0.address,
            external_symbol: el0.externalSymbol,
            transfer_limit: el0.transferLimit,
            permissions: el0.permissions,
            unit_denom: el0.unitDenom,
            ibc_counterparty_denom: el0.ibcCounterpartyDenom,
            ibc_counterparty_chain_id: el0.ibcCounterpartyChainId
          }))
        }
      };
    },
    fromAmino: ({
      from,
      registry
    }: AminoMsgSetRegistry["value"]): MsgSetRegistry => {
      return {
        from,
        registry: {
          entries: registry.entries.map(el1 => ({
            decimals: Long.fromString(el1.decimals),
            denom: el1.denom,
            baseDenom: el1.base_denom,
            path: el1.path,
            ibcChannelId: el1.ibc_channel_id,
            ibcCounterpartyChannelId: el1.ibc_counterparty_channel_id,
            displayName: el1.display_name,
            displaySymbol: el1.display_symbol,
            network: el1.network,
            address: el1.address,
            externalSymbol: el1.external_symbol,
            transferLimit: el1.transfer_limit,
            permissions: el1.permissions.map(el => permissionFromJSON(el)),
            unitDenom: el1.unit_denom,
            ibcCounterpartyDenom: el1.ibc_counterparty_denom,
            ibcCounterpartyChainId: el1.ibc_counterparty_chain_id
          }))
        }
      };
    }
  }
};