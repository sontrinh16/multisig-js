import { Params } from "./params";
import { KeygenSession, SigningSession, Key, KeyEpoch } from "./types";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** GenesisState represents the genesis state */
export interface GenesisState {
    params: Params;
    keygenSessions: KeygenSession[];
    signingSessions: SigningSession[];
    keys: Key[];
    keyEpochs: KeyEpoch[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
