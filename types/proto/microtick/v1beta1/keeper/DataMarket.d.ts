import { OrderedList } from "./OrderedList";
import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface DataOrderBook {
    name: string;
    callAsks: OrderedList;
    callBids: OrderedList;
    putAsks: OrderedList;
    putBids: OrderedList;
    sumBacking: DecCoin;
    sumWeight: DecCoin;
}
export interface DataMarket {
    market: string;
    description: string;
    consensus: DecCoin;
    orderBooks: DataOrderBook[];
    totalBacking: DecCoin;
    totalSpots: string;
    totalWeight: DecCoin;
    quotes: OrderedList;
}
export declare const DataOrderBook: {
    encode(message: DataOrderBook, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DataOrderBook;
    fromJSON(object: any): DataOrderBook;
    toJSON(message: DataOrderBook): unknown;
    fromPartial(object: DeepPartial<DataOrderBook>): DataOrderBook;
};
export declare const DataMarket: {
    encode(message: DataMarket, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DataMarket;
    fromJSON(object: any): DataMarket;
    toJSON(message: DataMarket): unknown;
    fromPartial(object: DeepPartial<DataMarket>): DataMarket;
};
