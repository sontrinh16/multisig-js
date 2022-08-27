import { TokenPair } from "./erc20";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** GenesisState defines the module's genesis state. */
export interface GenesisState {
    /** module parameters */
    params: Params;
    /** registered token pairs */
    tokenPairs: TokenPair[];
}
/** Params defines the erc20 module params */
export interface Params {
    /** parameter to enable the intrarelaying of Cosmos coins <--> ERC20 tokens. */
    enableErc20: boolean;
    /**
     * parameter to enable the EVM hook to convert an ERC20 token to a Cosmos
     * Coin by transferring the Tokens through a MsgEthereumTx to the
     * ModuleAddress Ethereum address.
     */
    enableEvmHook: boolean;
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
