import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateClass, MsgCreateProject, MsgCreateBatch, MsgMintBatchCredits, MsgSealBatch, MsgSend, MsgRetire, MsgCancel, MsgUpdateClassAdmin, MsgUpdateClassIssuers, MsgUpdateClassMetadata, MsgUpdateProjectAdmin, MsgUpdateProjectMetadata } from "./tx";
export interface AminoMsgCreateClass extends AminoMsg {
    type: "/regen.ecocredit.v1.MsgCreateClass";
    value: {
        admin: string;
        issuers: string[];
        metadata: string;
        credit_type_abbrev: string;
        fee: {
            denom: string;
            amount: string;
        };
    };
}
export interface AminoMsgCreateProject extends AminoMsg {
    type: "/regen.ecocredit.v1.MsgCreateProject";
    value: {
        issuer: string;
        class_id: string;
        metadata: string;
        jurisdiction: string;
        reference_id: string;
    };
}
export interface AminoMsgCreateBatch extends AminoMsg {
    type: "/regen.ecocredit.v1.MsgCreateBatch";
    value: {
        issuer: string;
        project_id: string;
        issuance: {
            recipient: string;
            tradable_amount: string;
            retired_amount: string;
            retirement_jurisdiction: string;
        }[];
        metadata: string;
        start_date: {
            seconds: string;
            nanos: number;
        };
        end_date: {
            seconds: string;
            nanos: number;
        };
        open: boolean;
        origin_tx: {
            typ: string;
            id: string;
        };
        note: string;
    };
}
export interface AminoMsgMintBatchCredits extends AminoMsg {
    type: "/regen.ecocredit.v1.MsgMintBatchCredits";
    value: {
        issuer: string;
        batch_denom: string;
        issuance: {
            recipient: string;
            tradable_amount: string;
            retired_amount: string;
            retirement_jurisdiction: string;
        }[];
        origin_tx: {
            typ: string;
            id: string;
        };
        note: string;
    };
}
export interface AminoMsgSealBatch extends AminoMsg {
    type: "/regen.ecocredit.v1.MsgSealBatch";
    value: {
        issuer: string;
        batch_denom: string;
    };
}
export interface AminoMsgSend extends AminoMsg {
    type: "/regen.ecocredit.v1.MsgSend";
    value: {
        sender: string;
        recipient: string;
        credits: {
            batch_denom: string;
            tradable_amount: string;
            retired_amount: string;
            retirement_jurisdiction: string;
        }[];
    };
}
export interface AminoMsgRetire extends AminoMsg {
    type: "/regen.ecocredit.v1.MsgRetire";
    value: {
        holder: string;
        credits: {
            batch_denom: string;
            amount: string;
        }[];
        jurisdiction: string;
    };
}
export interface AminoMsgCancel extends AminoMsg {
    type: "/regen.ecocredit.v1.MsgCancel";
    value: {
        holder: string;
        credits: {
            batch_denom: string;
            amount: string;
        }[];
    };
}
export interface AminoMsgUpdateClassAdmin extends AminoMsg {
    type: "/regen.ecocredit.v1.MsgUpdateClassAdmin";
    value: {
        admin: string;
        class_id: string;
        new_admin: string;
    };
}
export interface AminoMsgUpdateClassIssuers extends AminoMsg {
    type: "/regen.ecocredit.v1.MsgUpdateClassIssuers";
    value: {
        admin: string;
        class_id: string;
        add_issuers: string[];
        remove_issuers: string[];
    };
}
export interface AminoMsgUpdateClassMetadata extends AminoMsg {
    type: "/regen.ecocredit.v1.MsgUpdateClassMetadata";
    value: {
        admin: string;
        class_id: string;
        metadata: string;
    };
}
export interface AminoMsgUpdateProjectAdmin extends AminoMsg {
    type: "/regen.ecocredit.v1.MsgUpdateProjectAdmin";
    value: {
        admin: string;
        new_admin: string;
        project_id: string;
    };
}
export interface AminoMsgUpdateProjectMetadata extends AminoMsg {
    type: "/regen.ecocredit.v1.MsgUpdateProjectMetadata";
    value: {
        admin: string;
        new_metadata: string;
        project_id: string;
    };
}
export declare const AminoConverter: {
    "/regen.ecocredit.v1.MsgCreateClass": {
        aminoType: string;
        toAmino: ({ admin, issuers, metadata, creditTypeAbbrev, fee }: MsgCreateClass) => AminoMsgCreateClass["value"];
        fromAmino: ({ admin, issuers, metadata, credit_type_abbrev, fee }: AminoMsgCreateClass["value"]) => MsgCreateClass;
    };
    "/regen.ecocredit.v1.MsgCreateProject": {
        aminoType: string;
        toAmino: ({ issuer, classId, metadata, jurisdiction, referenceId }: MsgCreateProject) => AminoMsgCreateProject["value"];
        fromAmino: ({ issuer, class_id, metadata, jurisdiction, reference_id }: AminoMsgCreateProject["value"]) => MsgCreateProject;
    };
    "/regen.ecocredit.v1.MsgCreateBatch": {
        aminoType: string;
        toAmino: ({ issuer, projectId, issuance, metadata, startDate, endDate, open, originTx, note }: MsgCreateBatch) => AminoMsgCreateBatch["value"];
        fromAmino: ({ issuer, project_id, issuance, metadata, start_date, end_date, open, origin_tx, note }: AminoMsgCreateBatch["value"]) => MsgCreateBatch;
    };
    "/regen.ecocredit.v1.MsgMintBatchCredits": {
        aminoType: string;
        toAmino: ({ issuer, batchDenom, issuance, originTx, note }: MsgMintBatchCredits) => AminoMsgMintBatchCredits["value"];
        fromAmino: ({ issuer, batch_denom, issuance, origin_tx, note }: AminoMsgMintBatchCredits["value"]) => MsgMintBatchCredits;
    };
    "/regen.ecocredit.v1.MsgSealBatch": {
        aminoType: string;
        toAmino: ({ issuer, batchDenom }: MsgSealBatch) => AminoMsgSealBatch["value"];
        fromAmino: ({ issuer, batch_denom }: AminoMsgSealBatch["value"]) => MsgSealBatch;
    };
    "/regen.ecocredit.v1.MsgSend": {
        aminoType: string;
        toAmino: ({ sender, recipient, credits }: MsgSend) => AminoMsgSend["value"];
        fromAmino: ({ sender, recipient, credits }: AminoMsgSend["value"]) => MsgSend;
    };
    "/regen.ecocredit.v1.MsgRetire": {
        aminoType: string;
        toAmino: ({ holder, credits, jurisdiction }: MsgRetire) => AminoMsgRetire["value"];
        fromAmino: ({ holder, credits, jurisdiction }: AminoMsgRetire["value"]) => MsgRetire;
    };
    "/regen.ecocredit.v1.MsgCancel": {
        aminoType: string;
        toAmino: ({ holder, credits }: MsgCancel) => AminoMsgCancel["value"];
        fromAmino: ({ holder, credits }: AminoMsgCancel["value"]) => MsgCancel;
    };
    "/regen.ecocredit.v1.MsgUpdateClassAdmin": {
        aminoType: string;
        toAmino: ({ admin, classId, newAdmin }: MsgUpdateClassAdmin) => AminoMsgUpdateClassAdmin["value"];
        fromAmino: ({ admin, class_id, new_admin }: AminoMsgUpdateClassAdmin["value"]) => MsgUpdateClassAdmin;
    };
    "/regen.ecocredit.v1.MsgUpdateClassIssuers": {
        aminoType: string;
        toAmino: ({ admin, classId, addIssuers, removeIssuers }: MsgUpdateClassIssuers) => AminoMsgUpdateClassIssuers["value"];
        fromAmino: ({ admin, class_id, add_issuers, remove_issuers }: AminoMsgUpdateClassIssuers["value"]) => MsgUpdateClassIssuers;
    };
    "/regen.ecocredit.v1.MsgUpdateClassMetadata": {
        aminoType: string;
        toAmino: ({ admin, classId, metadata }: MsgUpdateClassMetadata) => AminoMsgUpdateClassMetadata["value"];
        fromAmino: ({ admin, class_id, metadata }: AminoMsgUpdateClassMetadata["value"]) => MsgUpdateClassMetadata;
    };
    "/regen.ecocredit.v1.MsgUpdateProjectAdmin": {
        aminoType: string;
        toAmino: ({ admin, newAdmin, projectId }: MsgUpdateProjectAdmin) => AminoMsgUpdateProjectAdmin["value"];
        fromAmino: ({ admin, new_admin, project_id }: AminoMsgUpdateProjectAdmin["value"]) => MsgUpdateProjectAdmin;
    };
    "/regen.ecocredit.v1.MsgUpdateProjectMetadata": {
        aminoType: string;
        toAmino: ({ admin, newMetadata, projectId }: MsgUpdateProjectMetadata) => AminoMsgUpdateProjectMetadata["value"];
        fromAmino: ({ admin, new_metadata, project_id }: AminoMsgUpdateProjectMetadata["value"]) => MsgUpdateProjectMetadata;
    };
};
