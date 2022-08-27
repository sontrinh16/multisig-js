import { AminoMsg } from "@cosmjs/amino";
import { IscnRecord, MsgCreateIscnRecord, MsgUpdateIscnRecord, MsgChangeIscnRecordOwnership } from "./tx";
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
export const AminoConverter = {
  "/likechain.iscn.MsgCreateIscnRecord": {
    aminoType: "/likechain.iscn.MsgCreateIscnRecord",
    toAmino: ({
      from,
      record
    }: MsgCreateIscnRecord): AminoMsgCreateIscnRecord["value"] => {
      return {
        from,
        record: {
          recordNotes: record.recordNotes,
          contentFingerprints: record.contentFingerprints,
          stakeholders: record.stakeholders,
          contentMetadata: record.contentMetadata
        }
      };
    },
    fromAmino: ({
      from,
      record
    }: AminoMsgCreateIscnRecord["value"]): MsgCreateIscnRecord => {
      return {
        from,
        record: {
          recordNotes: record.recordNotes,
          contentFingerprints: record.contentFingerprints,
          stakeholders: record.stakeholders,
          contentMetadata: record.contentMetadata
        }
      };
    }
  },
  "/likechain.iscn.MsgUpdateIscnRecord": {
    aminoType: "/likechain.iscn.MsgUpdateIscnRecord",
    toAmino: ({
      from,
      iscnId,
      record
    }: MsgUpdateIscnRecord): AminoMsgUpdateIscnRecord["value"] => {
      return {
        from,
        iscn_id: iscnId,
        record: {
          recordNotes: record.recordNotes,
          contentFingerprints: record.contentFingerprints,
          stakeholders: record.stakeholders,
          contentMetadata: record.contentMetadata
        }
      };
    },
    fromAmino: ({
      from,
      iscn_id,
      record
    }: AminoMsgUpdateIscnRecord["value"]): MsgUpdateIscnRecord => {
      return {
        from,
        iscnId: iscn_id,
        record: {
          recordNotes: record.recordNotes,
          contentFingerprints: record.contentFingerprints,
          stakeholders: record.stakeholders,
          contentMetadata: record.contentMetadata
        }
      };
    }
  },
  "/likechain.iscn.MsgChangeIscnRecordOwnership": {
    aminoType: "/likechain.iscn.MsgChangeIscnRecordOwnership",
    toAmino: ({
      from,
      iscnId,
      newOwner
    }: MsgChangeIscnRecordOwnership): AminoMsgChangeIscnRecordOwnership["value"] => {
      return {
        from,
        iscn_id: iscnId,
        new_owner: newOwner
      };
    },
    fromAmino: ({
      from,
      iscn_id,
      new_owner
    }: AminoMsgChangeIscnRecordOwnership["value"]): MsgChangeIscnRecordOwnership => {
      return {
        from,
        iscnId: iscn_id,
        newOwner: new_owner
      };
    }
  }
};