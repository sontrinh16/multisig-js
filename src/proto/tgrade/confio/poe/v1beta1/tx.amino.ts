import { Description } from "../../../../cosmos/staking/v1beta1/staking";
import { Any } from "../../../../google/protobuf/any";
import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { AminoMsg, decodeBech32Pubkey, encodeBech32Pubkey } from "@cosmjs/amino";
import { fromBase64, toBase64 } from "@cosmjs/encoding";
import { Long } from "@osmonauts/helpers";
import { MsgCreateValidator, MsgUpdateValidator, MsgDelegate, MsgUndelegate } from "./tx";
export interface AminoMsgCreateValidator extends AminoMsg {
  type: "/confio.poe.v1beta1.MsgCreateValidator";
  value: {
    description: {
      moniker: string;
      identity: string;
      website: string;
      security_contact: string;
      details: string;
    };
    operator_address: string;
    pubkey: {
      type_url: string;
      value: Uint8Array;
    };
    amount: {
      denom: string;
      amount: string;
    };
    vesting_amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface AminoMsgUpdateValidator extends AminoMsg {
  type: "/confio.poe.v1beta1.MsgUpdateValidator";
  value: {
    description: {
      moniker: string;
      identity: string;
      website: string;
      security_contact: string;
      details: string;
    };
    operator_address: string;
  };
}
export interface AminoMsgDelegate extends AminoMsg {
  type: "/confio.poe.v1beta1.MsgDelegate";
  value: {
    operator_address: string;
    amount: {
      denom: string;
      amount: string;
    };
    vesting_amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface AminoMsgUndelegate extends AminoMsg {
  type: "/confio.poe.v1beta1.MsgUndelegate";
  value: {
    operator_address: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export const AminoConverter = {
  "/confio.poe.v1beta1.MsgCreateValidator": {
    aminoType: "/confio.poe.v1beta1.MsgCreateValidator",
    toAmino: ({
      description,
      operatorAddress,
      pubkey,
      amount,
      vestingAmount
    }: MsgCreateValidator): AminoMsgCreateValidator["value"] => {
      return {
        description: {
          moniker: description.moniker,
          identity: description.identity,
          website: description.website,
          security_contact: description.securityContact,
          details: description.details
        },
        operator_address: operatorAddress,
        pubkey: {
          typeUrl: "/cosmos.crypto.secp256k1.PubKey",
          value: fromBase64(decodeBech32Pubkey(pubkey).value)
        },
        amount: {
          denom: amount.denom,
          amount: Long.fromNumber(amount.amount).toString()
        },
        vesting_amount: {
          denom: vestingAmount.denom,
          amount: Long.fromNumber(vestingAmount.amount).toString()
        }
      };
    },
    fromAmino: ({
      description,
      operator_address,
      pubkey,
      amount,
      vesting_amount
    }: AminoMsgCreateValidator["value"]): MsgCreateValidator => {
      return {
        description: {
          moniker: description.moniker,
          identity: description.identity,
          website: description.website,
          securityContact: description.security_contact,
          details: description.details
        },
        operatorAddress: operator_address,
        pubkey: encodeBech32Pubkey({
          type: "tendermint/PubKeySecp256k1",
          value: toBase64(pubkey.value)
        }, "cosmos"),
        amount: {
          denom: amount.denom,
          amount: amount.amount
        },
        vestingAmount: {
          denom: vesting_amount.denom,
          amount: vesting_amount.amount
        }
      };
    }
  },
  "/confio.poe.v1beta1.MsgUpdateValidator": {
    aminoType: "/confio.poe.v1beta1.MsgUpdateValidator",
    toAmino: ({
      description,
      operatorAddress
    }: MsgUpdateValidator): AminoMsgUpdateValidator["value"] => {
      return {
        description: {
          moniker: description.moniker,
          identity: description.identity,
          website: description.website,
          security_contact: description.securityContact,
          details: description.details
        },
        operator_address: operatorAddress
      };
    },
    fromAmino: ({
      description,
      operator_address
    }: AminoMsgUpdateValidator["value"]): MsgUpdateValidator => {
      return {
        description: {
          moniker: description.moniker,
          identity: description.identity,
          website: description.website,
          securityContact: description.security_contact,
          details: description.details
        },
        operatorAddress: operator_address
      };
    }
  },
  "/confio.poe.v1beta1.MsgDelegate": {
    aminoType: "/confio.poe.v1beta1.MsgDelegate",
    toAmino: ({
      operatorAddress,
      amount,
      vestingAmount
    }: MsgDelegate): AminoMsgDelegate["value"] => {
      return {
        operator_address: operatorAddress,
        amount: {
          denom: amount.denom,
          amount: Long.fromNumber(amount.amount).toString()
        },
        vesting_amount: {
          denom: vestingAmount.denom,
          amount: Long.fromNumber(vestingAmount.amount).toString()
        }
      };
    },
    fromAmino: ({
      operator_address,
      amount,
      vesting_amount
    }: AminoMsgDelegate["value"]): MsgDelegate => {
      return {
        operatorAddress: operator_address,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        },
        vestingAmount: {
          denom: vesting_amount.denom,
          amount: vesting_amount.amount
        }
      };
    }
  },
  "/confio.poe.v1beta1.MsgUndelegate": {
    aminoType: "/confio.poe.v1beta1.MsgUndelegate",
    toAmino: ({
      operatorAddress,
      amount
    }: MsgUndelegate): AminoMsgUndelegate["value"] => {
      return {
        operator_address: operatorAddress,
        amount: {
          denom: amount.denom,
          amount: Long.fromNumber(amount.amount).toString()
        }
      };
    },
    fromAmino: ({
      operator_address,
      amount
    }: AminoMsgUndelegate["value"]): MsgUndelegate => {
      return {
        operatorAddress: operator_address,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  }
};