import { DoubleKeyValue, LongKeyValue, StringKeyValue } from "./item";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface ItemRecord {
    id: string;
    doubles: DoubleKeyValue[];
    longs: LongKeyValue[];
    strings: StringKeyValue[];
}
export interface Execution {
    creator: string;
    id: string;
    recipeId: string;
    cookbookId: string;
    recipeVersion: string;
    nodeVersion: Long;
    blockHeight: Long;
    itemInputs: ItemRecord[];
    coinInputs: Coin[];
    coinOutputs: Coin[];
    itemOutputIds: string[];
    itemModifyOutputIds: string[];
}
export declare const ItemRecord: {
    encode(message: ItemRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ItemRecord;
    fromJSON(object: any): ItemRecord;
    toJSON(message: ItemRecord): unknown;
    fromPartial(object: DeepPartial<ItemRecord>): ItemRecord;
};
export declare const Execution: {
    encode(message: Execution, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Execution;
    fromJSON(object: any): Execution;
    toJSON(message: Execution): unknown;
    fromPartial(object: DeepPartial<Execution>): Execution;
};
