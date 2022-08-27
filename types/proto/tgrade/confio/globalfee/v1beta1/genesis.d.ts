import { DecCoin } from "../../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** GenesisState - initial state of module */
export interface GenesisState {
    /** Params of this module */
    params: Params;
}
/** Params defines the set of module parameters. */
export interface Params {
    /**
     * Minimum stores the minimum gas price(s) for all TX on the chain.
     * When multiple coins are defined then they are accepted alternatively.
     * The list must be sorted by denoms asc. No duplicate denoms or zero amount
     * values allowed. For more information see
     * https://docs.cosmos.network/master/modules/auth/01_concepts.html
     */
    minimumGasPrices: DecCoin[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: DeepPartial<Params>): Params;
};
