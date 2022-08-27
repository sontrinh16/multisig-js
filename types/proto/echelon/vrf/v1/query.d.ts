import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Randomval } from "./randomval";
import { Userval } from "./userval";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface QueryGetRandomvalRequest {
    index: string;
}
export interface QueryGetRandomvalResponse {
    randomval: Randomval;
}
export interface QueryAllRandomvalRequest {
    pagination: PageRequest;
}
export interface QueryAllRandomvalResponse {
    randomval: Randomval[];
    pagination: PageResponse;
}
export interface QueryGetUservalRequest {
    index: string;
}
export interface QueryGetUservalResponse {
    userval: Userval;
}
export interface QueryAllUservalRequest {
    pagination: PageRequest;
}
export interface QueryAllUservalResponse {
    userval: Userval[];
    pagination: PageResponse;
}
export interface QueryVerifyValuesRequest {
    pubkey: string;
    message: string;
    vrv: string;
    proof: string;
}
export interface QueryVerifyValuesResponse {
    verified: string;
}
export declare const QueryGetRandomvalRequest: {
    encode(message: QueryGetRandomvalRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetRandomvalRequest;
    fromJSON(object: any): QueryGetRandomvalRequest;
    toJSON(message: QueryGetRandomvalRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetRandomvalRequest>): QueryGetRandomvalRequest;
};
export declare const QueryGetRandomvalResponse: {
    encode(message: QueryGetRandomvalResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetRandomvalResponse;
    fromJSON(object: any): QueryGetRandomvalResponse;
    toJSON(message: QueryGetRandomvalResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetRandomvalResponse>): QueryGetRandomvalResponse;
};
export declare const QueryAllRandomvalRequest: {
    encode(message: QueryAllRandomvalRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllRandomvalRequest;
    fromJSON(object: any): QueryAllRandomvalRequest;
    toJSON(message: QueryAllRandomvalRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllRandomvalRequest>): QueryAllRandomvalRequest;
};
export declare const QueryAllRandomvalResponse: {
    encode(message: QueryAllRandomvalResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllRandomvalResponse;
    fromJSON(object: any): QueryAllRandomvalResponse;
    toJSON(message: QueryAllRandomvalResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllRandomvalResponse>): QueryAllRandomvalResponse;
};
export declare const QueryGetUservalRequest: {
    encode(message: QueryGetUservalRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetUservalRequest;
    fromJSON(object: any): QueryGetUservalRequest;
    toJSON(message: QueryGetUservalRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetUservalRequest>): QueryGetUservalRequest;
};
export declare const QueryGetUservalResponse: {
    encode(message: QueryGetUservalResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetUservalResponse;
    fromJSON(object: any): QueryGetUservalResponse;
    toJSON(message: QueryGetUservalResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetUservalResponse>): QueryGetUservalResponse;
};
export declare const QueryAllUservalRequest: {
    encode(message: QueryAllUservalRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllUservalRequest;
    fromJSON(object: any): QueryAllUservalRequest;
    toJSON(message: QueryAllUservalRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllUservalRequest>): QueryAllUservalRequest;
};
export declare const QueryAllUservalResponse: {
    encode(message: QueryAllUservalResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllUservalResponse;
    fromJSON(object: any): QueryAllUservalResponse;
    toJSON(message: QueryAllUservalResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllUservalResponse>): QueryAllUservalResponse;
};
export declare const QueryVerifyValuesRequest: {
    encode(message: QueryVerifyValuesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVerifyValuesRequest;
    fromJSON(object: any): QueryVerifyValuesRequest;
    toJSON(message: QueryVerifyValuesRequest): unknown;
    fromPartial(object: DeepPartial<QueryVerifyValuesRequest>): QueryVerifyValuesRequest;
};
export declare const QueryVerifyValuesResponse: {
    encode(message: QueryVerifyValuesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVerifyValuesResponse;
    fromJSON(object: any): QueryVerifyValuesResponse;
    toJSON(message: QueryVerifyValuesResponse): unknown;
    fromPartial(object: DeepPartial<QueryVerifyValuesResponse>): QueryVerifyValuesResponse;
};
