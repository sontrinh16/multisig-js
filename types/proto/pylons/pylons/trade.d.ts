import { CoinInput, ItemInput } from "./recipe";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface ItemRef {
    cookbookId: string;
    itemId: string;
}
export interface Trade {
    creator: string;
    id: Long;
    coinInputs: CoinInput[];
    itemInputs: ItemInput[];
    coinOutputs: Coin[];
    itemOutputs: ItemRef[];
    extraInfo: string;
    receiver: string;
    tradedItemInputs: ItemRef[];
}
export declare const ItemRef: {
    encode(message: ItemRef, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ItemRef;
    fromJSON(object: any): ItemRef;
    toJSON(message: ItemRef): unknown;
    fromPartial(object: DeepPartial<ItemRef>): ItemRef;
};
export declare const Trade: {
    encode(message: Trade, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Trade;
    fromJSON(object: any): Trade;
    toJSON(message: Trade): unknown;
    fromPartial(object: DeepPartial<Trade>): Trade;
};
