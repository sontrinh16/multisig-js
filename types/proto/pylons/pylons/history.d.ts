import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface History {
    address: string;
    amount: string;
    cookbookId: string;
    recipeId: string;
    createdAt: Long;
    type: string;
    txId: string;
}
export declare const History: {
    encode(message: History, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): History;
    fromJSON(object: any): History;
    toJSON(message: History): unknown;
    fromPartial(object: DeepPartial<History>): History;
};
