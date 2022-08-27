import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Params } from "./types";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface QueryParamsRequest {
}
export interface QueryParamsResponse {
    params: Params;
}
export interface QueryInvestmintRequest {
    amount: Coin;
    resource: string;
    length: Long;
}
export interface QueryInvestmintResponse {
    amount: Coin;
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
export declare const QueryInvestmintRequest: {
    encode(message: QueryInvestmintRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryInvestmintRequest;
    fromJSON(object: any): QueryInvestmintRequest;
    toJSON(message: QueryInvestmintRequest): unknown;
    fromPartial(object: DeepPartial<QueryInvestmintRequest>): QueryInvestmintRequest;
};
export declare const QueryInvestmintResponse: {
    encode(message: QueryInvestmintResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryInvestmintResponse;
    fromJSON(object: any): QueryInvestmintResponse;
    toJSON(message: QueryInvestmintResponse): unknown;
    fromPartial(object: DeepPartial<QueryInvestmintResponse>): QueryInvestmintResponse;
};
