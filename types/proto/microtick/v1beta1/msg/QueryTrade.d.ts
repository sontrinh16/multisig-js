import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface QueryTradeRequest {
    id: number;
}
export interface ResponseQuotedParams {
    id: number;
    premium: DecCoin;
    remainBacking: string;
    spot: DecCoin;
}
export interface ResponseTradeLeg {
    legId: number;
    type: string;
    backing: DecCoin;
    premium: DecCoin;
    cost: DecCoin;
    quantity: DecCoin;
    long: Uint8Array;
    short: Uint8Array;
    quoted: ResponseQuotedParams;
    currentValue: string;
}
export interface QueryTradeResponse {
    id: number;
    market: string;
    duration: string;
    order: string;
    taker: Uint8Array;
    quantity: DecCoin;
    legs: ResponseTradeLeg[];
    start: Long;
    expiration: Long;
    strike: DecCoin;
    commission: DecCoin;
    settleIncentive: DecCoin;
    consensus: DecCoin;
    currentValue: string;
}
export declare const QueryTradeRequest: {
    encode(message: QueryTradeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTradeRequest;
    fromJSON(object: any): QueryTradeRequest;
    toJSON(message: QueryTradeRequest): unknown;
    fromPartial(object: DeepPartial<QueryTradeRequest>): QueryTradeRequest;
};
export declare const ResponseQuotedParams: {
    encode(message: ResponseQuotedParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseQuotedParams;
    fromJSON(object: any): ResponseQuotedParams;
    toJSON(message: ResponseQuotedParams): unknown;
    fromPartial(object: DeepPartial<ResponseQuotedParams>): ResponseQuotedParams;
};
export declare const ResponseTradeLeg: {
    encode(message: ResponseTradeLeg, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseTradeLeg;
    fromJSON(object: any): ResponseTradeLeg;
    toJSON(message: ResponseTradeLeg): unknown;
    fromPartial(object: DeepPartial<ResponseTradeLeg>): ResponseTradeLeg;
};
export declare const QueryTradeResponse: {
    encode(message: QueryTradeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTradeResponse;
    fromJSON(object: any): QueryTradeResponse;
    toJSON(message: QueryTradeResponse): unknown;
    fromPartial(object: DeepPartial<QueryTradeResponse>): QueryTradeResponse;
};
