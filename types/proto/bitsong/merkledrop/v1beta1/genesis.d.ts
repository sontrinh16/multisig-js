import { Merkledrop } from "./merkledrop";
import { Params } from "./params";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface Indexes {
    merkledropId: Long;
    index: Long[];
}
export interface GenesisState {
    lastMerkledropId: Long;
    merkledrops: Merkledrop[];
    indexes: Indexes[];
    params: Params;
}
export declare const Indexes: {
    encode(message: Indexes, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Indexes;
    fromJSON(object: any): Indexes;
    toJSON(message: Indexes): unknown;
    fromPartial(object: DeepPartial<Indexes>): Indexes;
};
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
