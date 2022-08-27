import { Any } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** MsgCreateReport represents the message to be used to create a report */
export interface MsgCreateReport {
    /** Id of the subspace for which the report should be stored */
    subspaceId: Long;
    /** Id of the reason this report has been created for */
    reasonsIds: number[];
    /** (optional) Message attached to this report */
    message: string;
    /** Address of the reporter */
    reporter: string;
    /** Target of the report */
    target: Any;
}
/** MsgCreateReportResponse represents the Msg/CreateReport response type */
export interface MsgCreateReportResponse {
    /** Id of the newly created report */
    reportId: Long;
    /** Time in which the report was created */
    creationDate: Date;
}
/** MsgDeleteReport represents the message to be used when deleting a report */
export interface MsgDeleteReport {
    /** Id of the subspace that contains the report to be deleted */
    subspaceId: Long;
    /** Id of the report to be deleted */
    reportId: Long;
    /** Address of the user deleting the report */
    signer: string;
}
/** MsgDeleteReportResponse represents the Msg/DeleteReport response type */
export interface MsgDeleteReportResponse {
}
/**
 * MsgSupportStandardReason represents the message to be used when wanting to
 * support one reason from the module params
 */
export interface MsgSupportStandardReason {
    /** Id of the subspace for which to support the reason */
    subspaceId: Long;
    /** Id of the reason that should be supported */
    standardReasonId: number;
    /** Address of the user signing the message */
    signer: string;
}
/**
 * MsgSupportStandardReasonResponse represents the Msg/SupportStandardReason
 * response type
 */
export interface MsgSupportStandardReasonResponse {
    /** Id of the newly added reason */
    reasonsIds: number;
}
/**
 * MsgAddReason represents the message to be used when adding a new supported
 * reason
 */
export interface MsgAddReason {
    /** Id of the subspace for which to add the reason */
    subspaceId: Long;
    /** Title of the reason */
    title: string;
    /** (optional) Extended description of the reason and the cases it applies to */
    description: string;
    /** Address of the user adding the supported reason */
    signer: string;
}
/** MsgAddReasonResponse represents the Msg/AddReason response type */
export interface MsgAddReasonResponse {
    /** Id of the newly supported reason */
    reasonId: number;
}
/**
 * MsgRemoveReason represents the message to be used when removing an exiting
 * reporting reason
 */
export interface MsgRemoveReason {
    /** Id of the subspace from which to remove the reason */
    subspaceId: Long;
    /** Id of the reason to be deleted */
    reasonId: number;
    /** Address of the user adding the supported reason */
    signer: string;
}
/** MsgRemoveReasonResponse represents the Msg/RemoveReason response type */
export interface MsgRemoveReasonResponse {
}
export declare const MsgCreateReport: {
    encode(message: MsgCreateReport, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateReport;
    fromJSON(object: any): MsgCreateReport;
    toJSON(message: MsgCreateReport): unknown;
    fromPartial(object: DeepPartial<MsgCreateReport>): MsgCreateReport;
};
export declare const MsgCreateReportResponse: {
    encode(message: MsgCreateReportResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateReportResponse;
    fromJSON(object: any): MsgCreateReportResponse;
    toJSON(message: MsgCreateReportResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateReportResponse>): MsgCreateReportResponse;
};
export declare const MsgDeleteReport: {
    encode(message: MsgDeleteReport, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteReport;
    fromJSON(object: any): MsgDeleteReport;
    toJSON(message: MsgDeleteReport): unknown;
    fromPartial(object: DeepPartial<MsgDeleteReport>): MsgDeleteReport;
};
export declare const MsgDeleteReportResponse: {
    encode(_: MsgDeleteReportResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteReportResponse;
    fromJSON(_: any): MsgDeleteReportResponse;
    toJSON(_: MsgDeleteReportResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteReportResponse>): MsgDeleteReportResponse;
};
export declare const MsgSupportStandardReason: {
    encode(message: MsgSupportStandardReason, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSupportStandardReason;
    fromJSON(object: any): MsgSupportStandardReason;
    toJSON(message: MsgSupportStandardReason): unknown;
    fromPartial(object: DeepPartial<MsgSupportStandardReason>): MsgSupportStandardReason;
};
export declare const MsgSupportStandardReasonResponse: {
    encode(message: MsgSupportStandardReasonResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSupportStandardReasonResponse;
    fromJSON(object: any): MsgSupportStandardReasonResponse;
    toJSON(message: MsgSupportStandardReasonResponse): unknown;
    fromPartial(object: DeepPartial<MsgSupportStandardReasonResponse>): MsgSupportStandardReasonResponse;
};
export declare const MsgAddReason: {
    encode(message: MsgAddReason, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddReason;
    fromJSON(object: any): MsgAddReason;
    toJSON(message: MsgAddReason): unknown;
    fromPartial(object: DeepPartial<MsgAddReason>): MsgAddReason;
};
export declare const MsgAddReasonResponse: {
    encode(message: MsgAddReasonResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddReasonResponse;
    fromJSON(object: any): MsgAddReasonResponse;
    toJSON(message: MsgAddReasonResponse): unknown;
    fromPartial(object: DeepPartial<MsgAddReasonResponse>): MsgAddReasonResponse;
};
export declare const MsgRemoveReason: {
    encode(message: MsgRemoveReason, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveReason;
    fromJSON(object: any): MsgRemoveReason;
    toJSON(message: MsgRemoveReason): unknown;
    fromPartial(object: DeepPartial<MsgRemoveReason>): MsgRemoveReason;
};
export declare const MsgRemoveReasonResponse: {
    encode(_: MsgRemoveReasonResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveReasonResponse;
    fromJSON(_: any): MsgRemoveReasonResponse;
    toJSON(_: MsgRemoveReasonResponse): unknown;
    fromPartial(_: DeepPartial<MsgRemoveReasonResponse>): MsgRemoveReasonResponse;
};
