import { OrderedList } from "./OrderedList";
import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface DataAccountStatus {
    account: Uint8Array;
    activeQuotes: OrderedList;
    activeTrades: OrderedList;
    placedQuotes: number;
    placedTrades: number;
    quoteBacking: DecCoin;
    tradeBacking: DecCoin;
    settleBacking: DecCoin;
}
export declare const DataAccountStatus: {
    encode(message: DataAccountStatus, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DataAccountStatus;
    fromJSON(object: any): DataAccountStatus;
    toJSON(message: DataAccountStatus): unknown;
    fromPartial(object: DeepPartial<DataAccountStatus>): DataAccountStatus;
};
