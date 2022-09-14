import { Params } from "./params";
import { LegacyAminoPubKey } from "../../../cosmos/crypto/multisig/keys";
import { GovAccount } from "./types";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** GenesisState represents the genesis state */
export interface GenesisState {
    params: Params;
    governanceKey: LegacyAminoPubKey;
    govAccounts: GovAccount[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
