import { Duration } from "../../../google/protobuf/duration";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** GenesisState defines the issuance module's genesis state. */
export interface GenesisState {
    /** params defines all the paramaters of the module. */
    params: Params;
    supplies: AssetSupply[];
}
/** Params defines the parameters for the issuance module. */
export interface Params {
    assets: Asset[];
}
/** Asset type for assets in the issuance module */
export interface Asset {
    owner: string;
    denom: string;
    blockedAddresses: string[];
    paused: boolean;
    blockable: boolean;
    rateLimit: RateLimit;
}
/** RateLimit parameters for rate-limiting the supply of an issued asset */
export interface RateLimit {
    active: boolean;
    limit: Uint8Array;
    timePeriod: Duration;
}
/**
 * AssetSupply contains information about an asset's rate-limited supply (the
 * total supply of the asset is tracked in the top-level supply module)
 */
export interface AssetSupply {
    currentSupply: Coin;
    timeElapsed: Duration;
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
export declare const Asset: {
    encode(message: Asset, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Asset;
    fromJSON(object: any): Asset;
    toJSON(message: Asset): unknown;
    fromPartial(object: DeepPartial<Asset>): Asset;
};
export declare const RateLimit: {
    encode(message: RateLimit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RateLimit;
    fromJSON(object: any): RateLimit;
    toJSON(message: RateLimit): unknown;
    fromPartial(object: DeepPartial<RateLimit>): RateLimit;
};
export declare const AssetSupply: {
    encode(message: AssetSupply, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AssetSupply;
    fromJSON(object: any): AssetSupply;
    toJSON(message: AssetSupply): unknown;
    fromPartial(object: DeepPartial<AssetSupply>): AssetSupply;
};
