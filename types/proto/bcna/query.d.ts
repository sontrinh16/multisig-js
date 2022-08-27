import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { Bitcannaid } from "./bitcannaid";
import { Supplychain } from "./supplychain";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params;
}
export interface QueryGetBitcannaidRequest {
    id: Long;
}
export interface QueryGetBitcannaidResponse {
    Bitcannaid: Bitcannaid;
}
export interface QueryAllBitcannaidRequest {
    pagination: PageRequest;
}
export interface QueryAllBitcannaidResponse {
    Bitcannaid: Bitcannaid[];
    pagination: PageResponse;
}
export interface QueryGetSupplychainRequest {
    id: Long;
}
export interface QueryGetSupplychainResponse {
    Supplychain: Supplychain;
}
export interface QueryAllSupplychainRequest {
    pagination: PageRequest;
}
export interface QueryAllSupplychainResponse {
    Supplychain: Supplychain[];
    pagination: PageResponse;
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
export declare const QueryGetBitcannaidRequest: {
    encode(message: QueryGetBitcannaidRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetBitcannaidRequest;
    fromJSON(object: any): QueryGetBitcannaidRequest;
    toJSON(message: QueryGetBitcannaidRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetBitcannaidRequest>): QueryGetBitcannaidRequest;
};
export declare const QueryGetBitcannaidResponse: {
    encode(message: QueryGetBitcannaidResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetBitcannaidResponse;
    fromJSON(object: any): QueryGetBitcannaidResponse;
    toJSON(message: QueryGetBitcannaidResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetBitcannaidResponse>): QueryGetBitcannaidResponse;
};
export declare const QueryAllBitcannaidRequest: {
    encode(message: QueryAllBitcannaidRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBitcannaidRequest;
    fromJSON(object: any): QueryAllBitcannaidRequest;
    toJSON(message: QueryAllBitcannaidRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllBitcannaidRequest>): QueryAllBitcannaidRequest;
};
export declare const QueryAllBitcannaidResponse: {
    encode(message: QueryAllBitcannaidResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBitcannaidResponse;
    fromJSON(object: any): QueryAllBitcannaidResponse;
    toJSON(message: QueryAllBitcannaidResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllBitcannaidResponse>): QueryAllBitcannaidResponse;
};
export declare const QueryGetSupplychainRequest: {
    encode(message: QueryGetSupplychainRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetSupplychainRequest;
    fromJSON(object: any): QueryGetSupplychainRequest;
    toJSON(message: QueryGetSupplychainRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetSupplychainRequest>): QueryGetSupplychainRequest;
};
export declare const QueryGetSupplychainResponse: {
    encode(message: QueryGetSupplychainResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetSupplychainResponse;
    fromJSON(object: any): QueryGetSupplychainResponse;
    toJSON(message: QueryGetSupplychainResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetSupplychainResponse>): QueryGetSupplychainResponse;
};
export declare const QueryAllSupplychainRequest: {
    encode(message: QueryAllSupplychainRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllSupplychainRequest;
    fromJSON(object: any): QueryAllSupplychainRequest;
    toJSON(message: QueryAllSupplychainRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllSupplychainRequest>): QueryAllSupplychainRequest;
};
export declare const QueryAllSupplychainResponse: {
    encode(message: QueryAllSupplychainResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllSupplychainResponse;
    fromJSON(object: any): QueryAllSupplychainResponse;
    toJSON(message: QueryAllSupplychainResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllSupplychainResponse>): QueryAllSupplychainResponse;
};
