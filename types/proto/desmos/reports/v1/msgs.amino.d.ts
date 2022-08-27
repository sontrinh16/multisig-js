import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateReport, MsgDeleteReport, MsgSupportStandardReason, MsgAddReason, MsgRemoveReason } from "./msgs";
export interface AminoMsgCreateReport extends AminoMsg {
    type: "/desmos.reports.v1.MsgCreateReport";
    value: {
        subspace_id: string;
        reasons_ids: number[];
        message: string;
        reporter: string;
        target: {
            type_url: string;
            value: Uint8Array;
        };
    };
}
export interface AminoMsgDeleteReport extends AminoMsg {
    type: "/desmos.reports.v1.MsgDeleteReport";
    value: {
        subspace_id: string;
        report_id: string;
        signer: string;
    };
}
export interface AminoMsgSupportStandardReason extends AminoMsg {
    type: "/desmos.reports.v1.MsgSupportStandardReason";
    value: {
        subspace_id: string;
        standard_reason_id: number;
        signer: string;
    };
}
export interface AminoMsgAddReason extends AminoMsg {
    type: "/desmos.reports.v1.MsgAddReason";
    value: {
        subspace_id: string;
        title: string;
        description: string;
        signer: string;
    };
}
export interface AminoMsgRemoveReason extends AminoMsg {
    type: "/desmos.reports.v1.MsgRemoveReason";
    value: {
        subspace_id: string;
        reason_id: number;
        signer: string;
    };
}
export declare const AminoConverter: {
    "/desmos.reports.v1.MsgCreateReport": {
        aminoType: string;
        toAmino: ({ subspaceId, reasonsIds, message, reporter, target }: MsgCreateReport) => AminoMsgCreateReport["value"];
        fromAmino: ({ subspace_id, reasons_ids, message, reporter, target }: AminoMsgCreateReport["value"]) => MsgCreateReport;
    };
    "/desmos.reports.v1.MsgDeleteReport": {
        aminoType: string;
        toAmino: ({ subspaceId, reportId, signer }: MsgDeleteReport) => AminoMsgDeleteReport["value"];
        fromAmino: ({ subspace_id, report_id, signer }: AminoMsgDeleteReport["value"]) => MsgDeleteReport;
    };
    "/desmos.reports.v1.MsgSupportStandardReason": {
        aminoType: string;
        toAmino: ({ subspaceId, standardReasonId, signer }: MsgSupportStandardReason) => AminoMsgSupportStandardReason["value"];
        fromAmino: ({ subspace_id, standard_reason_id, signer }: AminoMsgSupportStandardReason["value"]) => MsgSupportStandardReason;
    };
    "/desmos.reports.v1.MsgAddReason": {
        aminoType: string;
        toAmino: ({ subspaceId, title, description, signer }: MsgAddReason) => AminoMsgAddReason["value"];
        fromAmino: ({ subspace_id, title, description, signer }: AminoMsgAddReason["value"]) => MsgAddReason;
    };
    "/desmos.reports.v1.MsgRemoveReason": {
        aminoType: string;
        toAmino: ({ subspaceId, reasonId, signer }: MsgRemoveReason) => AminoMsgRemoveReason["value"];
        fromAmino: ({ subspace_id, reason_id, signer }: AminoMsgRemoveReason["value"]) => MsgRemoveReason;
    };
};
