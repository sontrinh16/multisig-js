import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface DataActiveQuote {
    id: number;
    market: string;
    duration: number;
    durationName: string;
    provider: Uint8Array;
    modified: Long;
    canModify: Long;
    backing: DecCoin;
    ask: DecCoin;
    bid: DecCoin;
    quantity: DecCoin;
    spot: DecCoin;
}
export declare const DataActiveQuote: {
    encode(message: DataActiveQuote, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DataActiveQuote;
    fromJSON(object: any): DataActiveQuote;
    toJSON(message: DataActiveQuote): unknown;
    fromPartial(object: DeepPartial<DataActiveQuote>): DataActiveQuote;
};
