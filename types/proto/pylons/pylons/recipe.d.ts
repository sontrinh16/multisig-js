import { Coin } from "../../cosmos/base/v1beta1/coin";
import { StringKeyValue } from "./item";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** DoubleInputParam describes the bounds on an item input/output parameter of type float64 */
export interface DoubleInputParam {
    key: string;
    /** The minimum legal value of this parameter. */
    minValue: string;
    /** The maximum legal value of this parameter. */
    maxValue: string;
}
/** LongInputParam describes the bounds on an item input/output parameter of type int64 */
export interface LongInputParam {
    key: string;
    /** The minimum legal value of this parameter. */
    minValue: Long;
    /** The maximum legal value of this parameter. */
    maxValue: Long;
}
/** StringInputParam describes the bounds on an item input/output parameter of type string */
export interface StringInputParam {
    key: string;
    /** The value of the parameter */
    value: string;
}
/** ItemInput is a struct for describing an input item */
export interface ItemInput {
    id: string;
    doubles: DoubleInputParam[];
    longs: LongInputParam[];
    strings: StringInputParam[];
}
/** DoubleWeightRange describes weight range that produce double value */
export interface DoubleWeightRange {
    lower: string;
    upper: string;
    weight: Long;
}
/** DoubleParam describes the bounds on an item input/output parameter of type float64 */
export interface DoubleParam {
    key: string;
    weightRanges: DoubleWeightRange[];
    /** When program is not empty, weightRanges is ignored */
    program: string;
}
/** IntWeightRange describes weight range that produce int value */
export interface IntWeightRange {
    lower: Long;
    upper: Long;
    weight: Long;
}
/** LongParam describes the bounds on an item input/output parameter of type int64 */
export interface LongParam {
    key: string;
    weightRanges: IntWeightRange[];
    /** When program is not empty, weightRanges is ignored */
    program: string;
}
/** StringParam describes an item input/output parameter of type string */
export interface StringParam {
    key: string;
    value: string;
    /** When program is not empty, value is ignored */
    program: string;
}
/** CoinOutput models the continuum of valid outcomes for coin generation in recipes */
export interface CoinOutput {
    id: string;
    coin: Coin;
    program: string;
}
/** ItemOutput models the continuum of valid outcomes for item generation in recipes */
export interface ItemOutput {
    id: string;
    doubles: DoubleParam[];
    longs: LongParam[];
    strings: StringParam[];
    /** defines a list of mutable strings whose value can be customized by the user */
    mutableStrings: StringKeyValue[];
    transferFee: Coin[];
    /** The percentage of a trade sale retained by the cookbook owner. In the range (0.0, 1.0). */
    tradePercentage: string;
    /** quantity defines the maximum amount of these items that can be created. A 0 value indicates an infinite supply */
    quantity: Long;
    amountMinted: Long;
    tradeable: boolean;
}
/** ItemModifyOutput describes what is modified from item input */
export interface ItemModifyOutput {
    id: string;
    itemInputRef: string;
    doubles: DoubleParam[];
    longs: LongParam[];
    strings: StringParam[];
    /** defines a list of mutable strings whose value can be customized by the user */
    mutableStrings: StringKeyValue[];
    transferFee: Coin[];
    /** The percentage of a trade sale retained by the cookbook owner. In the range (0.0, 1.0). */
    tradePercentage: string;
    /** quantity defines the maximum amount of these items that can be created. A 0 value indicates an infinite supply */
    quantity: Long;
    amountMinted: Long;
    tradeable: boolean;
}
/** EntriesList is a struct to keep list of items and coins */
export interface EntriesList {
    coinOutputs: CoinOutput[];
    itemOutputs: ItemOutput[];
    itemModifyOutputs: ItemModifyOutput[];
}
/** WeightedOutputs is to make structs which is using weight to be based on */
export interface WeightedOutputs {
    entryIds: string[];
    weight: Long;
}
export interface CoinInput {
    coins: Coin[];
}
export interface Recipe {
    cookbookId: string;
    id: string;
    nodeVersion: Long;
    name: string;
    description: string;
    version: string;
    coinInputs: CoinInput[];
    itemInputs: ItemInput[];
    entries: EntriesList;
    outputs: WeightedOutputs[];
    blockInterval: Long;
    costPerBlock: Coin;
    enabled: boolean;
    extraInfo: string;
    createdAt: Long;
    updatedAt: Long;
}
export declare const DoubleInputParam: {
    encode(message: DoubleInputParam, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DoubleInputParam;
    fromJSON(object: any): DoubleInputParam;
    toJSON(message: DoubleInputParam): unknown;
    fromPartial(object: DeepPartial<DoubleInputParam>): DoubleInputParam;
};
export declare const LongInputParam: {
    encode(message: LongInputParam, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LongInputParam;
    fromJSON(object: any): LongInputParam;
    toJSON(message: LongInputParam): unknown;
    fromPartial(object: DeepPartial<LongInputParam>): LongInputParam;
};
export declare const StringInputParam: {
    encode(message: StringInputParam, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StringInputParam;
    fromJSON(object: any): StringInputParam;
    toJSON(message: StringInputParam): unknown;
    fromPartial(object: DeepPartial<StringInputParam>): StringInputParam;
};
export declare const ItemInput: {
    encode(message: ItemInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ItemInput;
    fromJSON(object: any): ItemInput;
    toJSON(message: ItemInput): unknown;
    fromPartial(object: DeepPartial<ItemInput>): ItemInput;
};
export declare const DoubleWeightRange: {
    encode(message: DoubleWeightRange, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DoubleWeightRange;
    fromJSON(object: any): DoubleWeightRange;
    toJSON(message: DoubleWeightRange): unknown;
    fromPartial(object: DeepPartial<DoubleWeightRange>): DoubleWeightRange;
};
export declare const DoubleParam: {
    encode(message: DoubleParam, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DoubleParam;
    fromJSON(object: any): DoubleParam;
    toJSON(message: DoubleParam): unknown;
    fromPartial(object: DeepPartial<DoubleParam>): DoubleParam;
};
export declare const IntWeightRange: {
    encode(message: IntWeightRange, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IntWeightRange;
    fromJSON(object: any): IntWeightRange;
    toJSON(message: IntWeightRange): unknown;
    fromPartial(object: DeepPartial<IntWeightRange>): IntWeightRange;
};
export declare const LongParam: {
    encode(message: LongParam, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LongParam;
    fromJSON(object: any): LongParam;
    toJSON(message: LongParam): unknown;
    fromPartial(object: DeepPartial<LongParam>): LongParam;
};
export declare const StringParam: {
    encode(message: StringParam, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StringParam;
    fromJSON(object: any): StringParam;
    toJSON(message: StringParam): unknown;
    fromPartial(object: DeepPartial<StringParam>): StringParam;
};
export declare const CoinOutput: {
    encode(message: CoinOutput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CoinOutput;
    fromJSON(object: any): CoinOutput;
    toJSON(message: CoinOutput): unknown;
    fromPartial(object: DeepPartial<CoinOutput>): CoinOutput;
};
export declare const ItemOutput: {
    encode(message: ItemOutput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ItemOutput;
    fromJSON(object: any): ItemOutput;
    toJSON(message: ItemOutput): unknown;
    fromPartial(object: DeepPartial<ItemOutput>): ItemOutput;
};
export declare const ItemModifyOutput: {
    encode(message: ItemModifyOutput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ItemModifyOutput;
    fromJSON(object: any): ItemModifyOutput;
    toJSON(message: ItemModifyOutput): unknown;
    fromPartial(object: DeepPartial<ItemModifyOutput>): ItemModifyOutput;
};
export declare const EntriesList: {
    encode(message: EntriesList, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EntriesList;
    fromJSON(object: any): EntriesList;
    toJSON(message: EntriesList): unknown;
    fromPartial(object: DeepPartial<EntriesList>): EntriesList;
};
export declare const WeightedOutputs: {
    encode(message: WeightedOutputs, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WeightedOutputs;
    fromJSON(object: any): WeightedOutputs;
    toJSON(message: WeightedOutputs): unknown;
    fromPartial(object: DeepPartial<WeightedOutputs>): WeightedOutputs;
};
export declare const CoinInput: {
    encode(message: CoinInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CoinInput;
    fromJSON(object: any): CoinInput;
    toJSON(message: CoinInput): unknown;
    fromPartial(object: DeepPartial<CoinInput>): CoinInput;
};
export declare const Recipe: {
    encode(message: Recipe, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Recipe;
    fromJSON(object: any): Recipe;
    toJSON(message: Recipe): unknown;
    fromPartial(object: DeepPartial<Recipe>): Recipe;
};
