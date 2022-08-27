import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface DataQuotedParams {
    id: number;
    final: boolean;
    premium: DecCoin;
    remainBacking: DecCoin;
    spot: DecCoin;
}
export interface DataTradeLeg {
    legId: number;
    type: boolean;
    backing: DecCoin;
    premium: DecCoin;
    cost: DecCoin;
    quantity: DecCoin;
    long: Uint8Array;
    short: Uint8Array;
    quoted: DataQuotedParams;
}
export interface DataActiveTrade {
    id: number;
    market: string;
    duration: string;
    order: string;
    taker: Uint8Array;
    quantity: DecCoin;
    legs: DataTradeLeg[];
    start: Long;
    expiration: Long;
    strike: DecCoin;
    commission: DecCoin;
    settleIncentive: DecCoin;
}
export declare const DataQuotedParams: {
    encode(message: DataQuotedParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DataQuotedParams;
    fromJSON(object: any): DataQuotedParams;
    toJSON(message: DataQuotedParams): unknown;
    fromPartial(object: DeepPartial<DataQuotedParams>): DataQuotedParams;
};
export declare const DataTradeLeg: {
    encode(message: DataTradeLeg, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DataTradeLeg;
    fromJSON(object: any): DataTradeLeg;
    toJSON(message: DataTradeLeg): unknown;
    fromPartial(object: DeepPartial<DataTradeLeg>): DataTradeLeg;
};
export declare const DataActiveTrade: {
    encode(message: DataActiveTrade, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DataActiveTrade;
    fromJSON(object: any): DataActiveTrade;
    toJSON(message: DataActiveTrade): unknown;
    fromPartial(object: DeepPartial<DataActiveTrade>): DataActiveTrade;
};
