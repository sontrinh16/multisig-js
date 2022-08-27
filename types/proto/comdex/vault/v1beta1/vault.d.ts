import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface Vault {
    id: Long;
    pairId: Long;
    owner: string;
    amountIn: string;
    amountOut: string;
}
export declare const Vault: {
    encode(message: Vault, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Vault;
    fromJSON(object: any): Vault;
    toJSON(message: Vault): unknown;
    fromPartial(object: DeepPartial<Vault>): Vault;
};
