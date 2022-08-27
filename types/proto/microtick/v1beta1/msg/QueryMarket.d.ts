import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface QueryMarketRequest {
    market: string;
}
export interface MarketOrderBookStatus {
    name: string;
    sumBacking: DecCoin;
    sumWeight: DecCoin;
    insideAsk: DecCoin;
    insideBid: DecCoin;
    insideCallAsk: DecCoin;
    insideCallBid: DecCoin;
    insidePutAsk: DecCoin;
    insidePutBid: DecCoin;
}
export interface QueryMarketResponse {
    market: string;
    description: string;
    consensus: DecCoin;
    orderBooks: MarketOrderBookStatus[];
    totalBacking: DecCoin;
    totalWeight: DecCoin;
}
export declare const QueryMarketRequest: {
    encode(message: QueryMarketRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketRequest;
    fromJSON(object: any): QueryMarketRequest;
    toJSON(message: QueryMarketRequest): unknown;
    fromPartial(object: DeepPartial<QueryMarketRequest>): QueryMarketRequest;
};
export declare const MarketOrderBookStatus: {
    encode(message: MarketOrderBookStatus, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MarketOrderBookStatus;
    fromJSON(object: any): MarketOrderBookStatus;
    toJSON(message: MarketOrderBookStatus): unknown;
    fromPartial(object: DeepPartial<MarketOrderBookStatus>): MarketOrderBookStatus;
};
export declare const QueryMarketResponse: {
    encode(message: QueryMarketResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketResponse;
    fromJSON(object: any): QueryMarketResponse;
    toJSON(message: QueryMarketResponse): unknown;
    fromPartial(object: DeepPartial<QueryMarketResponse>): QueryMarketResponse;
};
