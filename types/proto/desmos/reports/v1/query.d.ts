import { Any } from "../../../google/protobuf/any";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Report, Reason, Params } from "./models";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** QueryReportsResponse is the request type for Query/Reports RPC method */
export interface QueryReportsRequest {
    /** Id of the subspace to query the reports for */
    subspaceId: Long;
    /** (optional) Target to query the reports for */
    target: Any;
    /**
     * (optional) User that reported the target.
     * This is going to be used only if the target is also specified
     */
    reporter: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/** QueryReportsResponse is the response type for Query/Reports RPC method */
export interface QueryReportsResponse {
    reports: Report[];
    pagination: PageResponse;
}
/** QueryReportRequest is the request type for Query/Report RPC method */
export interface QueryReportRequest {
    /** Id of the subspace that holds the report to query for */
    subspaceId: Long;
    /** Id of the report to query for */
    reportId: Long;
}
/** QueryReportResponse is the response type for Query/Report RPC method */
export interface QueryReportResponse {
    report: Report;
}
/** QueryReasonsRequest is the request type for Query/Reasons RPC method */
export interface QueryReasonsRequest {
    /** Id of the subspace to query the supported reporting reasons for */
    subspaceId: Long;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/** QueryReasonsResponse is the response type for Query/Reasons RPC method */
export interface QueryReasonsResponse {
    reasons: Reason[];
    pagination: PageResponse;
}
/** QueryReasonRequest is the request type for Query/Reason RPC method */
export interface QueryReasonRequest {
    /** Id of the subspace that holds the reason to query for */
    subspaceId: Long;
    /** Id of the reason to query for */
    reasonId: number;
}
/** QueryReasonResponse is the response type for Query/Reason RPC method */
export interface QueryReasonResponse {
    reason: Reason;
}
/** QueryParamsRequest is the request type for Query/Params RPC method */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is the response type for Query/Params RPC method */
export interface QueryParamsResponse {
    params: Params;
}
export declare const QueryReportsRequest: {
    encode(message: QueryReportsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryReportsRequest;
    fromJSON(object: any): QueryReportsRequest;
    toJSON(message: QueryReportsRequest): unknown;
    fromPartial(object: DeepPartial<QueryReportsRequest>): QueryReportsRequest;
};
export declare const QueryReportsResponse: {
    encode(message: QueryReportsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryReportsResponse;
    fromJSON(object: any): QueryReportsResponse;
    toJSON(message: QueryReportsResponse): unknown;
    fromPartial(object: DeepPartial<QueryReportsResponse>): QueryReportsResponse;
};
export declare const QueryReportRequest: {
    encode(message: QueryReportRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryReportRequest;
    fromJSON(object: any): QueryReportRequest;
    toJSON(message: QueryReportRequest): unknown;
    fromPartial(object: DeepPartial<QueryReportRequest>): QueryReportRequest;
};
export declare const QueryReportResponse: {
    encode(message: QueryReportResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryReportResponse;
    fromJSON(object: any): QueryReportResponse;
    toJSON(message: QueryReportResponse): unknown;
    fromPartial(object: DeepPartial<QueryReportResponse>): QueryReportResponse;
};
export declare const QueryReasonsRequest: {
    encode(message: QueryReasonsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryReasonsRequest;
    fromJSON(object: any): QueryReasonsRequest;
    toJSON(message: QueryReasonsRequest): unknown;
    fromPartial(object: DeepPartial<QueryReasonsRequest>): QueryReasonsRequest;
};
export declare const QueryReasonsResponse: {
    encode(message: QueryReasonsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryReasonsResponse;
    fromJSON(object: any): QueryReasonsResponse;
    toJSON(message: QueryReasonsResponse): unknown;
    fromPartial(object: DeepPartial<QueryReasonsResponse>): QueryReasonsResponse;
};
export declare const QueryReasonRequest: {
    encode(message: QueryReasonRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryReasonRequest;
    fromJSON(object: any): QueryReasonRequest;
    toJSON(message: QueryReasonRequest): unknown;
    fromPartial(object: DeepPartial<QueryReasonRequest>): QueryReasonRequest;
};
export declare const QueryReasonResponse: {
    encode(message: QueryReasonResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryReasonResponse;
    fromJSON(object: any): QueryReasonResponse;
    toJSON(message: QueryReasonResponse): unknown;
    fromPartial(object: DeepPartial<QueryReasonResponse>): QueryReasonResponse;
};
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
