import { Status } from "../../types/v1/status";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Plan } from "./plan";
import { Node } from "../../node/v1/node";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface QueryPlansRequest {
    status: Status;
    pagination: PageRequest;
}
export interface QueryPlansForProviderRequest {
    address: string;
    status: Status;
    pagination: PageRequest;
}
export interface QueryPlanRequest {
    id: Long;
}
export interface QueryNodesForPlanRequest {
    id: Long;
    pagination: PageRequest;
}
export interface QueryPlansResponse {
    plans: Plan[];
    pagination: PageResponse;
}
export interface QueryPlansForProviderResponse {
    plans: Plan[];
    pagination: PageResponse;
}
export interface QueryPlanResponse {
    plan: Plan;
}
export interface QueryNodesForPlanResponse {
    nodes: Node[];
    pagination: PageResponse;
}
export declare const QueryPlansRequest: {
    encode(message: QueryPlansRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPlansRequest;
    fromJSON(object: any): QueryPlansRequest;
    toJSON(message: QueryPlansRequest): unknown;
    fromPartial(object: DeepPartial<QueryPlansRequest>): QueryPlansRequest;
};
export declare const QueryPlansForProviderRequest: {
    encode(message: QueryPlansForProviderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPlansForProviderRequest;
    fromJSON(object: any): QueryPlansForProviderRequest;
    toJSON(message: QueryPlansForProviderRequest): unknown;
    fromPartial(object: DeepPartial<QueryPlansForProviderRequest>): QueryPlansForProviderRequest;
};
export declare const QueryPlanRequest: {
    encode(message: QueryPlanRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPlanRequest;
    fromJSON(object: any): QueryPlanRequest;
    toJSON(message: QueryPlanRequest): unknown;
    fromPartial(object: DeepPartial<QueryPlanRequest>): QueryPlanRequest;
};
export declare const QueryNodesForPlanRequest: {
    encode(message: QueryNodesForPlanRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNodesForPlanRequest;
    fromJSON(object: any): QueryNodesForPlanRequest;
    toJSON(message: QueryNodesForPlanRequest): unknown;
    fromPartial(object: DeepPartial<QueryNodesForPlanRequest>): QueryNodesForPlanRequest;
};
export declare const QueryPlansResponse: {
    encode(message: QueryPlansResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPlansResponse;
    fromJSON(object: any): QueryPlansResponse;
    toJSON(message: QueryPlansResponse): unknown;
    fromPartial(object: DeepPartial<QueryPlansResponse>): QueryPlansResponse;
};
export declare const QueryPlansForProviderResponse: {
    encode(message: QueryPlansForProviderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPlansForProviderResponse;
    fromJSON(object: any): QueryPlansForProviderResponse;
    toJSON(message: QueryPlansForProviderResponse): unknown;
    fromPartial(object: DeepPartial<QueryPlansForProviderResponse>): QueryPlansForProviderResponse;
};
export declare const QueryPlanResponse: {
    encode(message: QueryPlanResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPlanResponse;
    fromJSON(object: any): QueryPlanResponse;
    toJSON(message: QueryPlanResponse): unknown;
    fromPartial(object: DeepPartial<QueryPlanResponse>): QueryPlanResponse;
};
export declare const QueryNodesForPlanResponse: {
    encode(message: QueryNodesForPlanResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNodesForPlanResponse;
    fromJSON(object: any): QueryNodesForPlanResponse;
    toJSON(message: QueryNodesForPlanResponse): unknown;
    fromPartial(object: DeepPartial<QueryNodesForPlanResponse>): QueryNodesForPlanResponse;
};
