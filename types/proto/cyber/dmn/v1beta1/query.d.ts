import { Params, Thought, ThoughtStats } from "./types";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface QueryParamsRequest {
}
export interface QueryParamsResponse {
    params: Params;
}
export interface QueryThoughtParamsRequest {
    program: string;
    name: string;
}
export interface QueryThoughtResponse {
    thought: Thought;
}
export interface QueryThoughtStatsResponse {
    thoughtStats: ThoughtStats;
}
export interface QueryThoughtsRequest {
}
export interface QueryThoughtsResponse {
    thoughts: Thought[];
}
export interface QueryThoughtsStatsRequest {
}
export interface QueryThoughtsStatsResponse {
    thoughtsStats: ThoughtStats[];
}
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
export declare const QueryThoughtParamsRequest: {
    encode(message: QueryThoughtParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryThoughtParamsRequest;
    fromJSON(object: any): QueryThoughtParamsRequest;
    toJSON(message: QueryThoughtParamsRequest): unknown;
    fromPartial(object: DeepPartial<QueryThoughtParamsRequest>): QueryThoughtParamsRequest;
};
export declare const QueryThoughtResponse: {
    encode(message: QueryThoughtResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryThoughtResponse;
    fromJSON(object: any): QueryThoughtResponse;
    toJSON(message: QueryThoughtResponse): unknown;
    fromPartial(object: DeepPartial<QueryThoughtResponse>): QueryThoughtResponse;
};
export declare const QueryThoughtStatsResponse: {
    encode(message: QueryThoughtStatsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryThoughtStatsResponse;
    fromJSON(object: any): QueryThoughtStatsResponse;
    toJSON(message: QueryThoughtStatsResponse): unknown;
    fromPartial(object: DeepPartial<QueryThoughtStatsResponse>): QueryThoughtStatsResponse;
};
export declare const QueryThoughtsRequest: {
    encode(_: QueryThoughtsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryThoughtsRequest;
    fromJSON(_: any): QueryThoughtsRequest;
    toJSON(_: QueryThoughtsRequest): unknown;
    fromPartial(_: DeepPartial<QueryThoughtsRequest>): QueryThoughtsRequest;
};
export declare const QueryThoughtsResponse: {
    encode(message: QueryThoughtsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryThoughtsResponse;
    fromJSON(object: any): QueryThoughtsResponse;
    toJSON(message: QueryThoughtsResponse): unknown;
    fromPartial(object: DeepPartial<QueryThoughtsResponse>): QueryThoughtsResponse;
};
export declare const QueryThoughtsStatsRequest: {
    encode(_: QueryThoughtsStatsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryThoughtsStatsRequest;
    fromJSON(_: any): QueryThoughtsStatsRequest;
    toJSON(_: QueryThoughtsStatsRequest): unknown;
    fromPartial(_: DeepPartial<QueryThoughtsStatsRequest>): QueryThoughtsStatsRequest;
};
export declare const QueryThoughtsStatsResponse: {
    encode(message: QueryThoughtsStatsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryThoughtsStatsResponse;
    fromJSON(object: any): QueryThoughtsStatsResponse;
    toJSON(message: QueryThoughtsStatsResponse): unknown;
    fromPartial(object: DeepPartial<QueryThoughtsStatsResponse>): QueryThoughtsStatsResponse;
};
