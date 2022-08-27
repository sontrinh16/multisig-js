import { AminoMsg } from "@cosmjs/amino";
import { MsgClaim } from "./tx";
export interface AminoMsgClaim extends AminoMsg {
    type: "/passage3d.claim.v1beta1.MsgClaim";
    value: {
        sender: string;
        claim_action: string;
    };
}
export declare const AminoConverter: {
    "/passage3d.claim.v1beta1.MsgClaim": {
        aminoType: string;
        toAmino: ({ sender, claimAction }: MsgClaim) => AminoMsgClaim["value"];
        fromAmino: ({ sender, claim_action }: AminoMsgClaim["value"]) => MsgClaim;
    };
};
