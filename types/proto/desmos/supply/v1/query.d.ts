import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** QueryTotalRequest is the request type for Query/Total RPC method */
export interface QueryTotalRequest {
    /** coin denom to query the circulating supply for */
    denom: string;
    /**
     * divider_exponent is a factor used to power the divider used to convert the
     * supply to the desired representation
     */
    dividerExponent: Long;
}
/** QueryTotalResponse is the response type for the Query/Total RPC method */
export interface QueryTotalResponse {
    totalSupply: string;
}
/**
 * QueryCirculatingRequest is the request type for the Query/Circulating RPC
 * method
 */
export interface QueryCirculatingRequest {
    /** coin denom to query the circulating supply for */
    denom: string;
    /**
     * divider_exponent is a factor used to power the divider used to convert the
     * supply to the desired representation
     */
    dividerExponent: Long;
}
/**
 * QueryCirculatingResponse is the response type for the Query/Circulating RPC
 * method
 */
export interface QueryCirculatingResponse {
    circulatingSupply: string;
}
export declare const QueryTotalRequest: {
    encode(message: QueryTotalRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalRequest;
    fromJSON(object: any): QueryTotalRequest;
    toJSON(message: QueryTotalRequest): unknown;
    fromPartial(object: DeepPartial<QueryTotalRequest>): QueryTotalRequest;
};
export declare const QueryTotalResponse: {
    encode(message: QueryTotalResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalResponse;
    fromJSON(object: any): QueryTotalResponse;
    toJSON(message: QueryTotalResponse): unknown;
    fromPartial(object: DeepPartial<QueryTotalResponse>): QueryTotalResponse;
};
export declare const QueryCirculatingRequest: {
    encode(message: QueryCirculatingRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCirculatingRequest;
    fromJSON(object: any): QueryCirculatingRequest;
    toJSON(message: QueryCirculatingRequest): unknown;
    fromPartial(object: DeepPartial<QueryCirculatingRequest>): QueryCirculatingRequest;
};
export declare const QueryCirculatingResponse: {
    encode(message: QueryCirculatingResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCirculatingResponse;
    fromJSON(object: any): QueryCirculatingResponse;
    toJSON(message: QueryCirculatingResponse): unknown;
    fromPartial(object: DeepPartial<QueryCirculatingResponse>): QueryCirculatingResponse;
};
