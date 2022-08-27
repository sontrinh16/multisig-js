import { Params } from "./params";
import { Pool } from "./pool";
import { LiquidityProvider } from "./types";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/**
 * GenesisState - all clp state that must be provided at genesis
 * TODO: Add parameters to Genesis state ,such as minimum liquidity required to
 * create a pool
 */
export interface GenesisState {
    params: Params;
    addressWhitelist: string[];
    poolList: Pool[];
    liquidityProviders: LiquidityProvider[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
