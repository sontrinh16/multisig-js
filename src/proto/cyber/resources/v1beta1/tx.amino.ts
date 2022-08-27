import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "@osmonauts/helpers";
import { MsgInvestmint } from "./tx";
export interface AminoMsgInvestmint extends AminoMsg {
  type: "/cyber.resources.v1beta1.MsgInvestmint";
  value: {
    neuron: string;
    amount: {
      denom: string;
      amount: string;
    };
    resource: string;
    length: string;
  };
}
export const AminoConverter = {
  "/cyber.resources.v1beta1.MsgInvestmint": {
    aminoType: "/cyber.resources.v1beta1.MsgInvestmint",
    toAmino: ({
      neuron,
      amount,
      resource,
      length
    }: MsgInvestmint): AminoMsgInvestmint["value"] => {
      return {
        neuron,
        amount: {
          denom: amount.denom,
          amount: Long.fromNumber(amount.amount).toString()
        },
        resource,
        length: length.toString()
      };
    },
    fromAmino: ({
      neuron,
      amount,
      resource,
      length
    }: AminoMsgInvestmint["value"]): MsgInvestmint => {
      return {
        neuron,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        },
        resource,
        length: Long.fromString(length)
      };
    }
  }
};