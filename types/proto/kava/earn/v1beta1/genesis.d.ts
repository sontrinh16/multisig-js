import { Params } from "./params";
import { VaultRecord, VaultShareRecord } from "./vault";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** GenesisState defines the earn module's genesis state. */
export interface GenesisState {
    /** params defines all the paramaters related to earn */
    params: Params;
    /** vault_records defines the available vaults */
    vaultRecords: VaultRecord[];
    /** share_records defines the owned shares of each vault */
    vaultShareRecords: VaultShareRecord[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
