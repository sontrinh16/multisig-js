import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateRandom } from "./tx";
export interface AminoMsgCreateRandom extends AminoMsg {
    type: "/echelon.vrf.v1.MsgCreateRandom";
    value: {
        creator: string;
        multiplier: string;
    };
}
export declare const AminoConverter: {
    "/echelon.vrf.v1.MsgCreateRandom": {
        aminoType: string;
        toAmino: ({ creator, multiplier }: MsgCreateRandom) => AminoMsgCreateRandom["value"];
        fromAmino: ({ creator, multiplier }: AminoMsgCreateRandom["value"]) => MsgCreateRandom;
    };
};
