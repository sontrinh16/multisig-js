import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface Swap {
    txHash: Uint8Array;
    receiver: string;
    amount: Coin;
}
export declare const Swap: {
    encode(message: Swap, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Swap;
    fromJSON(object: any): Swap;
    toJSON(message: Swap): unknown;
    fromPartial(object: DeepPartial<Swap>): Swap;
};
