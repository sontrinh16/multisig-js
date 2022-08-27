import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Status } from "../../types/v1/status";
import { Session } from "./session";
import { Params } from "./params";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface QuerySessionsRequest {
    pagination: PageRequest;
}
export interface QuerySessionsForAddressRequest {
    address: string;
    status: Status;
    pagination: PageRequest;
}
export interface QuerySessionRequest {
    id: Long;
}
export interface QueryParamsRequest {
}
export interface QuerySessionsResponse {
    sessions: Session[];
    pagination: PageResponse;
}
export interface QuerySessionsForAddressResponse {
    sessions: Session[];
    pagination: PageResponse;
}
export interface QuerySessionResponse {
    session: Session;
}
export interface QueryParamsResponse {
    params: Params;
}
export declare const QuerySessionsRequest: {
    encode(message: QuerySessionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySessionsRequest;
    fromJSON(object: any): QuerySessionsRequest;
    toJSON(message: QuerySessionsRequest): unknown;
    fromPartial(object: DeepPartial<QuerySessionsRequest>): QuerySessionsRequest;
};
export declare const QuerySessionsForAddressRequest: {
    encode(message: QuerySessionsForAddressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySessionsForAddressRequest;
    fromJSON(object: any): QuerySessionsForAddressRequest;
    toJSON(message: QuerySessionsForAddressRequest): unknown;
    fromPartial(object: DeepPartial<QuerySessionsForAddressRequest>): QuerySessionsForAddressRequest;
};
export declare const QuerySessionRequest: {
    encode(message: QuerySessionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySessionRequest;
    fromJSON(object: any): QuerySessionRequest;
    toJSON(message: QuerySessionRequest): unknown;
    fromPartial(object: DeepPartial<QuerySessionRequest>): QuerySessionRequest;
};
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QuerySessionsResponse: {
    encode(message: QuerySessionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySessionsResponse;
    fromJSON(object: any): QuerySessionsResponse;
    toJSON(message: QuerySessionsResponse): unknown;
    fromPartial(object: DeepPartial<QuerySessionsResponse>): QuerySessionsResponse;
};
export declare const QuerySessionsForAddressResponse: {
    encode(message: QuerySessionsForAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySessionsForAddressResponse;
    fromJSON(object: any): QuerySessionsForAddressResponse;
    toJSON(message: QuerySessionsForAddressResponse): unknown;
    fromPartial(object: DeepPartial<QuerySessionsForAddressResponse>): QuerySessionsForAddressResponse;
};
export declare const QuerySessionResponse: {
    encode(message: QuerySessionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySessionResponse;
    fromJSON(object: any): QuerySessionResponse;
    toJSON(message: QuerySessionResponse): unknown;
    fromPartial(object: DeepPartial<QuerySessionResponse>): QuerySessionResponse;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
