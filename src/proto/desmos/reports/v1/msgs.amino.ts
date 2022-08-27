import { Any } from "../../../google/protobuf/any";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "@osmonauts/helpers";
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
export const AminoConverter = {
  "/desmos.reports.v1.MsgCreateReport": {
    aminoType: "/desmos.reports.v1.MsgCreateReport",
    toAmino: ({
      subspaceId,
      reasonsIds,
      message,
      reporter,
      target
    }: MsgCreateReport): AminoMsgCreateReport["value"] => {
      return {
        subspace_id: subspaceId.toString(),
        reasons_ids: reasonsIds,
        message,
        reporter,
        target: {
          type_url: target.typeUrl,
          value: target.value
        }
      };
    },
    fromAmino: ({
      subspace_id,
      reasons_ids,
      message,
      reporter,
      target
    }: AminoMsgCreateReport["value"]): MsgCreateReport => {
      return {
        subspaceId: Long.fromString(subspace_id),
        reasonsIds: reasons_ids,
        message,
        reporter,
        target: {
          typeUrl: target.type_url,
          value: target.value
        }
      };
    }
  },
  "/desmos.reports.v1.MsgDeleteReport": {
    aminoType: "/desmos.reports.v1.MsgDeleteReport",
    toAmino: ({
      subspaceId,
      reportId,
      signer
    }: MsgDeleteReport): AminoMsgDeleteReport["value"] => {
      return {
        subspace_id: subspaceId.toString(),
        report_id: reportId.toString(),
        signer
      };
    },
    fromAmino: ({
      subspace_id,
      report_id,
      signer
    }: AminoMsgDeleteReport["value"]): MsgDeleteReport => {
      return {
        subspaceId: Long.fromString(subspace_id),
        reportId: Long.fromString(report_id),
        signer
      };
    }
  },
  "/desmos.reports.v1.MsgSupportStandardReason": {
    aminoType: "/desmos.reports.v1.MsgSupportStandardReason",
    toAmino: ({
      subspaceId,
      standardReasonId,
      signer
    }: MsgSupportStandardReason): AminoMsgSupportStandardReason["value"] => {
      return {
        subspace_id: subspaceId.toString(),
        standard_reason_id: standardReasonId,
        signer
      };
    },
    fromAmino: ({
      subspace_id,
      standard_reason_id,
      signer
    }: AminoMsgSupportStandardReason["value"]): MsgSupportStandardReason => {
      return {
        subspaceId: Long.fromString(subspace_id),
        standardReasonId: standard_reason_id,
        signer
      };
    }
  },
  "/desmos.reports.v1.MsgAddReason": {
    aminoType: "/desmos.reports.v1.MsgAddReason",
    toAmino: ({
      subspaceId,
      title,
      description,
      signer
    }: MsgAddReason): AminoMsgAddReason["value"] => {
      return {
        subspace_id: subspaceId.toString(),
        title,
        description,
        signer
      };
    },
    fromAmino: ({
      subspace_id,
      title,
      description,
      signer
    }: AminoMsgAddReason["value"]): MsgAddReason => {
      return {
        subspaceId: Long.fromString(subspace_id),
        title,
        description,
        signer
      };
    }
  },
  "/desmos.reports.v1.MsgRemoveReason": {
    aminoType: "/desmos.reports.v1.MsgRemoveReason",
    toAmino: ({
      subspaceId,
      reasonId,
      signer
    }: MsgRemoveReason): AminoMsgRemoveReason["value"] => {
      return {
        subspace_id: subspaceId.toString(),
        reason_id: reasonId,
        signer
      };
    },
    fromAmino: ({
      subspace_id,
      reason_id,
      signer
    }: AminoMsgRemoveReason["value"]): MsgRemoveReason => {
      return {
        subspaceId: Long.fromString(subspace_id),
        reasonId: reason_id,
        signer
      };
    }
  }
};