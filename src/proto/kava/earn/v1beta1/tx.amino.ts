import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "@osmonauts/helpers";
import { MsgDeposit, MsgWithdraw } from "./tx";
export interface AminoMsgDeposit extends AminoMsg {
  type: "/kava.earn.v1beta1.MsgDeposit";
  value: {
    depositor: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface AminoMsgWithdraw extends AminoMsg {
  type: "/kava.earn.v1beta1.MsgWithdraw";
  value: {
    from: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export const AminoConverter = {
  "/kava.earn.v1beta1.MsgDeposit": {
    aminoType: "/kava.earn.v1beta1.MsgDeposit",
    toAmino: ({
      depositor,
      amount
    }: MsgDeposit): AminoMsgDeposit["value"] => {
      return {
        depositor,
        amount: {
          denom: amount.denom,
          amount: Long.fromNumber(amount.amount).toString()
        }
      };
    },
    fromAmino: ({
      depositor,
      amount
    }: AminoMsgDeposit["value"]): MsgDeposit => {
      return {
        depositor,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  },
  "/kava.earn.v1beta1.MsgWithdraw": {
    aminoType: "/kava.earn.v1beta1.MsgWithdraw",
    toAmino: ({
      from,
      amount
    }: MsgWithdraw): AminoMsgWithdraw["value"] => {
      return {
        from,
        amount: {
          denom: amount.denom,
          amount: Long.fromNumber(amount.amount).toString()
        }
      };
    },
    fromAmino: ({
      from,
      amount
    }: AminoMsgWithdraw["value"]): MsgWithdraw => {
      return {
        from,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  }
};