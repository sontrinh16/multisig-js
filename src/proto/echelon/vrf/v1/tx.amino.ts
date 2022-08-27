import { AminoMsg } from "@cosmjs/amino";
import { Long } from "@osmonauts/helpers";
import { MsgCreateRandom } from "./tx";
export interface AminoMsgCreateRandom extends AminoMsg {
  type: "/echelon.vrf.v1.MsgCreateRandom";
  value: {
    creator: string;
    multiplier: string;
  };
}
export const AminoConverter = {
  "/echelon.vrf.v1.MsgCreateRandom": {
    aminoType: "/echelon.vrf.v1.MsgCreateRandom",
    toAmino: ({
      creator,
      multiplier
    }: MsgCreateRandom): AminoMsgCreateRandom["value"] => {
      return {
        creator,
        multiplier: multiplier.toString()
      };
    },
    fromAmino: ({
      creator,
      multiplier
    }: AminoMsgCreateRandom["value"]): MsgCreateRandom => {
      return {
        creator,
        multiplier: Long.fromString(multiplier)
      };
    }
  }
};