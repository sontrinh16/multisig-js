import { Coin } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** DoubleKeyValue describes double key/value set */
export interface DoubleKeyValue {
    key: string;
    value: string;
}
/** LongKeyValue describes long key/value set */
export interface LongKeyValue {
    key: string;
    value: Long;
}
/** StringKeyValue describes string key/value set */
export interface StringKeyValue {
    key: string;
    value: string;
}
export interface Item {
    owner: string;
    cookbookId: string;
    id: string;
    nodeVersion: Long;
    doubles: DoubleKeyValue[];
    longs: LongKeyValue[];
    strings: StringKeyValue[];
    mutableStrings: StringKeyValue[];
    tradeable: boolean;
    lastUpdate: Long;
    transferFee: Coin[];
    /** The percentage of a trade sale retained by the cookbook owner. In the range (0.0, 1.0). */
    tradePercentage: string;
    createdAt: Long;
    updatedAt: Long;
    recipeId: string;
}
export interface ItemHistory {
    cookbookId: string;
    id: string;
    from: string;
    to: string;
    createdAt: Long;
}
export declare const DoubleKeyValue: {
    encode(message: DoubleKeyValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DoubleKeyValue;
    fromJSON(object: any): DoubleKeyValue;
    toJSON(message: DoubleKeyValue): unknown;
    fromPartial(object: DeepPartial<DoubleKeyValue>): DoubleKeyValue;
};
export declare const LongKeyValue: {
    encode(message: LongKeyValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LongKeyValue;
    fromJSON(object: any): LongKeyValue;
    toJSON(message: LongKeyValue): unknown;
    fromPartial(object: DeepPartial<LongKeyValue>): LongKeyValue;
};
export declare const StringKeyValue: {
    encode(message: StringKeyValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StringKeyValue;
    fromJSON(object: any): StringKeyValue;
    toJSON(message: StringKeyValue): unknown;
    fromPartial(object: DeepPartial<StringKeyValue>): StringKeyValue;
};
export declare const Item: {
    encode(message: Item, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Item;
    fromJSON(object: any): Item;
    toJSON(message: Item): unknown;
    fromPartial(object: DeepPartial<Item>): Item;
};
export declare const ItemHistory: {
    encode(message: ItemHistory, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ItemHistory;
    fromJSON(object: any): ItemHistory;
    toJSON(message: ItemHistory): unknown;
    fromPartial(object: DeepPartial<ItemHistory>): ItemHistory;
};
