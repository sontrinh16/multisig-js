import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface QueryOrderBookRequest {
    market: string;
    duration: string;
    offset: number;
    limit: number;
}
export interface OrderBookQuote {
    id: number;
    premium: DecCoin;
    quantity: DecCoin;
}
export interface QueryOrderBookResponse {
    consensus: DecCoin;
    sumBacking: DecCoin;
    sumWeight: DecCoin;
    offset: number;
    limit: number;
    total: number;
    callAsks: OrderBookQuote[];
    callBids: OrderBookQuote[];
    putAsks: OrderBookQuote[];
    putBids: OrderBookQuote[];
}
export declare const QueryOrderBookRequest: {
    encode(message: QueryOrderBookRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrderBookRequest;
    fromJSON(object: any): QueryOrderBookRequest;
    toJSON(message: QueryOrderBookRequest): unknown;
    fromPartial(object: DeepPartial<QueryOrderBookRequest>): QueryOrderBookRequest;
};
export declare const OrderBookQuote: {
    encode(message: OrderBookQuote, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrderBookQuote;
    fromJSON(object: any): OrderBookQuote;
    toJSON(message: OrderBookQuote): unknown;
    fromPartial(object: DeepPartial<OrderBookQuote>): OrderBookQuote;
};
export declare const QueryOrderBookResponse: {
    encode(message: QueryOrderBookResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrderBookResponse;
    fromJSON(object: any): QueryOrderBookResponse;
    toJSON(message: QueryOrderBookResponse): unknown;
    fromPartial(object: DeepPartial<QueryOrderBookResponse>): QueryOrderBookResponse;
};
