import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "@osmonauts/helpers";
import { MsgConvertCoin, MsgConvertERC20 } from "./tx";
export interface AminoMsgConvertCoin extends AminoMsg {
  type: "/echelon.erc20.v1.MsgConvertCoin";
  value: {
    coin: {
      denom: string;
      amount: string;
    };
    receiver: string;
    sender: string;
  };
}
export interface AminoMsgConvertERC20 extends AminoMsg {
  type: "/echelon.erc20.v1.MsgConvertERC20";
  value: {
    contract_address: string;
    amount: string;
    receiver: string;
    sender: string;
  };
}
export const AminoConverter = {
  "/echelon.erc20.v1.MsgConvertCoin": {
    aminoType: "/echelon.erc20.v1.MsgConvertCoin",
    toAmino: ({
      coin,
      receiver,
      sender
    }: MsgConvertCoin): AminoMsgConvertCoin["value"] => {
      return {
        coin: {
          denom: coin.denom,
          amount: Long.fromNumber(coin.amount).toString()
        },
        receiver,
        sender
      };
    },
    fromAmino: ({
      coin,
      receiver,
      sender
    }: AminoMsgConvertCoin["value"]): MsgConvertCoin => {
      return {
        coin: {
          denom: coin.denom,
          amount: coin.amount
        },
        receiver,
        sender
      };
    }
  },
  "/echelon.erc20.v1.MsgConvertERC20": {
    aminoType: "/echelon.erc20.v1.MsgConvertERC20",
    toAmino: ({
      contractAddress,
      amount,
      receiver,
      sender
    }: MsgConvertERC20): AminoMsgConvertERC20["value"] => {
      return {
        contract_address: contractAddress,
        amount,
        receiver,
        sender
      };
    },
    fromAmino: ({
      contract_address,
      amount,
      receiver,
      sender
    }: AminoMsgConvertERC20["value"]): MsgConvertERC20 => {
      return {
        contractAddress: contract_address,
        amount,
        receiver,
        sender
      };
    }
  }
};