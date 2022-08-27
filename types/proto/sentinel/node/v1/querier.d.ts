import { Status } from "../../types/v1/status";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Node } from "./node";
import { Params } from "./params";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface QueryNodesRequest {
    status: Status;
    pagination: PageRequest;
}
export interface QueryNodesForProviderRequest {
    address: string;
    status: Status;
    pagination: PageRequest;
}
export interface QueryNodeRequest {
    address: string;
}
export interface QueryParamsRequest {
}
export interface QueryNodesResponse {
    nodes: Node[];
    pagination: PageResponse;
}
export interface QueryNodesForProviderResponse {
    nodes: Node[];
    pagination: PageResponse;
}
export interface QueryNodeResponse {
    node: Node;
}
export interface QueryParamsResponse {
    params: Params;
}
export declare const QueryNodesRequest: {
    encode(message: QueryNodesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNodesRequest;
    fromJSON(object: any): QueryNodesRequest;
    toJSON(message: QueryNodesRequest): unknown;
    fromPartial(object: DeepPartial<QueryNodesRequest>): QueryNodesRequest;
};
export declare const QueryNodesForProviderRequest: {
    encode(message: QueryNodesForProviderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNodesForProviderRequest;
    fromJSON(object: any): QueryNodesForProviderRequest;
    toJSON(message: QueryNodesForProviderRequest): unknown;
    fromPartial(object: DeepPartial<QueryNodesForProviderRequest>): QueryNodesForProviderRequest;
};
export declare const QueryNodeRequest: {
    encode(message: QueryNodeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNodeRequest;
    fromJSON(object: any): QueryNodeRequest;
    toJSON(message: QueryNodeRequest): unknown;
    fromPartial(object: DeepPartial<QueryNodeRequest>): QueryNodeRequest;
};
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryNodesResponse: {
    encode(message: QueryNodesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNodesResponse;
    fromJSON(object: any): QueryNodesResponse;
    toJSON(message: QueryNodesResponse): unknown;
    fromPartial(object: DeepPartial<QueryNodesResponse>): QueryNodesResponse;
};
export declare const QueryNodesForProviderResponse: {
    encode(message: QueryNodesForProviderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNodesForProviderResponse;
    fromJSON(object: any): QueryNodesForProviderResponse;
    toJSON(message: QueryNodesForProviderResponse): unknown;
    fromPartial(object: DeepPartial<QueryNodesForProviderResponse>): QueryNodesForProviderResponse;
};
export declare const QueryNodeResponse: {
    encode(message: QueryNodeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNodeResponse;
    fromJSON(object: any): QueryNodeResponse;
    toJSON(message: QueryNodeResponse): unknown;
    fromPartial(object: DeepPartial<QueryNodeResponse>): QueryNodeResponse;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
