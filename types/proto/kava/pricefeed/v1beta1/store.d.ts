import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** Params defines the parameters for the pricefeed module. */
export interface Params {
    markets: Market[];
}
/** Market defines an asset in the pricefeed. */
export interface Market {
    marketId: string;
    baseAsset: string;
    quoteAsset: string;
    oracles: Uint8Array[];
    active: boolean;
}
/** PostedPrice defines a price for market posted by a specific oracle. */
export interface PostedPrice {
    marketId: string;
    oracleAddress: Uint8Array;
    price: string;
    expiry: Timestamp;
}
/**
 * CurrentPrice defines a current price for a particular market in the pricefeed
 * module.
 */
export interface CurrentPrice {
    marketId: string;
    price: string;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: DeepPartial<Params>): Params;
};
export declare const Market: {
    encode(message: Market, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Market;
    fromJSON(object: any): Market;
    toJSON(message: Market): unknown;
    fromPartial(object: DeepPartial<Market>): Market;
};
export declare const PostedPrice: {
    encode(message: PostedPrice, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PostedPrice;
    fromJSON(object: any): PostedPrice;
    toJSON(message: PostedPrice): unknown;
    fromPartial(object: DeepPartial<PostedPrice>): PostedPrice;
};
export declare const CurrentPrice: {
    encode(message: CurrentPrice, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CurrentPrice;
    fromJSON(object: any): CurrentPrice;
    toJSON(message: CurrentPrice): unknown;
    fromPartial(object: DeepPartial<CurrentPrice>): CurrentPrice;
};
