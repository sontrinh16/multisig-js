import { Params, AtomicSwap, AssetSupply } from "./bep3";
import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** GenesisState defines the pricefeed module's genesis state. */
export interface GenesisState {
    /** params defines all the paramaters of the module. */
    params: Params;
    /** atomic_swaps represents the state of stored atomic swaps */
    atomicSwaps: AtomicSwap[];
    /** supplies represents the supply information of each atomic swap */
    supplies: AssetSupply[];
    /** previous_block_time represents the time of the previous block */
    previousBlockTime: Timestamp;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
