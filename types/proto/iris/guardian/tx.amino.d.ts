import { AminoMsg } from "@cosmjs/amino";
import { MsgAddSuper, MsgDeleteSuper } from "./tx";
export interface AminoMsgAddSuper extends AminoMsg {
    type: "/irishub.guardian.MsgAddSuper";
    value: {
        description: string;
        address: string;
        added_by: string;
    };
}
export interface AminoMsgDeleteSuper extends AminoMsg {
    type: "/irishub.guardian.MsgDeleteSuper";
    value: {
        address: string;
        deleted_by: string;
    };
}
export declare const AminoConverter: {
    "/irishub.guardian.MsgAddSuper": {
        aminoType: string;
        toAmino: ({ description, address, addedBy }: MsgAddSuper) => AminoMsgAddSuper["value"];
        fromAmino: ({ description, address, added_by }: AminoMsgAddSuper["value"]) => MsgAddSuper;
    };
    "/irishub.guardian.MsgDeleteSuper": {
        aminoType: string;
        toAmino: ({ address, deletedBy }: MsgDeleteSuper) => AminoMsgDeleteSuper["value"];
        fromAmino: ({ address, deleted_by }: AminoMsgDeleteSuper["value"]) => MsgDeleteSuper;
    };
};
