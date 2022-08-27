import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateIscnRecord, MsgUpdateIscnRecord, MsgChangeIscnRecordOwnership } from "./tx";
export interface AminoMsgCreateIscnRecord extends AminoMsg {
    type: "/likechain.iscn.MsgCreateIscnRecord";
    value: {
        from: string;
        record: {
            recordNotes: string;
            contentFingerprints: string[];
            stakeholders: Uint8Array[];
            contentMetadata: Uint8Array;
        };
    };
}
export interface AminoMsgUpdateIscnRecord extends AminoMsg {
    type: "/likechain.iscn.MsgUpdateIscnRecord";
    value: {
        from: string;
        iscn_id: string;
        record: {
            recordNotes: string;
            contentFingerprints: string[];
            stakeholders: Uint8Array[];
            contentMetadata: Uint8Array;
        };
    };
}
export interface AminoMsgChangeIscnRecordOwnership extends AminoMsg {
    type: "/likechain.iscn.MsgChangeIscnRecordOwnership";
    value: {
        from: string;
        iscn_id: string;
        new_owner: string;
    };
}
export declare const AminoConverter: {
    "/likechain.iscn.MsgCreateIscnRecord": {
        aminoType: string;
        toAmino: ({ from, record }: MsgCreateIscnRecord) => AminoMsgCreateIscnRecord["value"];
        fromAmino: ({ from, record }: AminoMsgCreateIscnRecord["value"]) => MsgCreateIscnRecord;
    };
    "/likechain.iscn.MsgUpdateIscnRecord": {
        aminoType: string;
        toAmino: ({ from, iscnId, record }: MsgUpdateIscnRecord) => AminoMsgUpdateIscnRecord["value"];
        fromAmino: ({ from, iscn_id, record }: AminoMsgUpdateIscnRecord["value"]) => MsgUpdateIscnRecord;
    };
    "/likechain.iscn.MsgChangeIscnRecordOwnership": {
        aminoType: string;
        toAmino: ({ from, iscnId, newOwner }: MsgChangeIscnRecordOwnership) => AminoMsgChangeIscnRecordOwnership["value"];
        fromAmino: ({ from, iscn_id, new_owner }: AminoMsgChangeIscnRecordOwnership["value"]) => MsgChangeIscnRecordOwnership;
    };
};
