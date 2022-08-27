import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** Claim type enum */
export declare enum ClaimType {
    /** CLAIM_TYPE_UNSPECIFIED - Unspecified claim type */
    CLAIM_TYPE_UNSPECIFIED = 0,
    /** CLAIM_TYPE_BURN - Burn claim type */
    CLAIM_TYPE_BURN = 1,
    /** CLAIM_TYPE_LOCK - Lock claim type */
    CLAIM_TYPE_LOCK = 2,
    UNRECOGNIZED = -1
}
export declare function claimTypeFromJSON(object: any): ClaimType;
export declare function claimTypeToJSON(object: ClaimType): string;
/**
 * EthBridgeClaim is a structure that contains all the data for a particular
 * bridge claim
 */
export interface EthBridgeClaim {
    ethereumChainId: Long;
    /** bridge_contract_address is an EthereumAddress */
    bridgeContractAddress: string;
    nonce: Long;
    symbol: string;
    /** token_contract_address is an EthereumAddress */
    tokenContractAddress: string;
    /** ethereum_sender is an EthereumAddress */
    ethereumSender: string;
    /** cosmos_receiver is an sdk.AccAddress */
    cosmosReceiver: string;
    /** validator_address is an sdk.ValAddress */
    validatorAddress: string;
    amount: string;
    claimType: ClaimType;
}
export interface PeggyTokens {
    tokens: string[];
}
/** GenesisState for ethbridge */
export interface GenesisState {
    cethReceiveAccount: string;
    peggyTokens: string[];
}
export declare const EthBridgeClaim: {
    encode(message: EthBridgeClaim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EthBridgeClaim;
    fromJSON(object: any): EthBridgeClaim;
    toJSON(message: EthBridgeClaim): unknown;
    fromPartial(object: DeepPartial<EthBridgeClaim>): EthBridgeClaim;
};
export declare const PeggyTokens: {
    encode(message: PeggyTokens, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PeggyTokens;
    fromJSON(object: any): PeggyTokens;
    toJSON(message: PeggyTokens): unknown;
    fromPartial(object: DeepPartial<PeggyTokens>): PeggyTokens;
};
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
