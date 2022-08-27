import { ClaimsRecordAddress } from "./claims";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** GenesisState define the claims module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of the module. */
    params: Params;
    /** list of claim records with the corresponding airdrop recipient */
    claimsRecords: ClaimsRecordAddress[];
}
/** Params defines the claims module's parameters. */
export interface Params {
    /** enable claiming process */
    enableClaims: boolean;
    /** timestamp of the airdrop start */
    airdropStartTime: Date;
    /** duration until decay of claimable tokens begin */
    durationUntilDecay: string;
    /** duration of the token claim decay period */
    durationOfDecay: string;
    /** denom of claimable coin */
    claimsDenom: string;
    /**
     * list of authorized channel identifiers that can perform address
     * attestations via IBC.
     */
    authorizedChannels: string[];
    /** list of channel identifiers from EVM compatible chains */
    evmChannels: string[];
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
