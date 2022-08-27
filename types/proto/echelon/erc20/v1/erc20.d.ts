import { Metadata } from "../../../cosmos/bank/v1beta1/bank";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** Owner enumerates the ownership of a ERC20 contract. */
export declare enum Owner {
    /** OWNER_UNSPECIFIED - OWNER_UNSPECIFIED defines an invalid/undefined owner. */
    OWNER_UNSPECIFIED = 0,
    /** OWNER_MODULE - OWNER_MODULE erc20 is owned by the erc20 module account. */
    OWNER_MODULE = 1,
    /** OWNER_EXTERNAL - EXTERNAL erc20 is owned by an external account. */
    OWNER_EXTERNAL = 2,
    UNRECOGNIZED = -1
}
export declare function ownerFromJSON(object: any): Owner;
export declare function ownerToJSON(object: Owner): string;
/**
 * TokenPair defines an instance that records pairing consisting of a Cosmos
 * native Coin and an ERC20 token address.
 */
export interface TokenPair {
    /** address of ERC20 contract token */
    erc20Address: string;
    /** cosmos base denomination to be mapped to */
    denom: string;
    /** shows token mapping enable status */
    enabled: boolean;
    /** ERC20 owner address ENUM (0 invalid, 1 ModuleAccount, 2 external address) */
    contractOwner: Owner;
}
/** RegisterCoinProposal is a gov Content type to register a token pair */
export interface RegisterCoinProposal {
    /** title of the proposal */
    title: string;
    /** proposal description */
    description: string;
    /** token pair of Cosmos native denom and ERC20 token address */
    metadata: Metadata;
}
/** RegisterCoinProposal is a gov Content type to register a token pair */
export interface RegisterERC20Proposal {
    /** title of the proposal */
    title: string;
    /** proposal description */
    description: string;
    /** contract address of ERC20 token */
    erc20address: string;
}
/**
 * ToggleTokenRelayProposal is a gov Content type to toggle
 * the internal relaying of a token pair.
 */
export interface ToggleTokenRelayProposal {
    /** title of the proposal */
    title: string;
    /** proposal description */
    description: string;
    /**
     * token identifier can be either the hex contract address of the ERC20 or the
     * Cosmos base denomination
     */
    token: string;
}
/**
 * UpdateTokenPairERC20Proposal is a gov Content type to update a token pair's
 * ERC20 contract address.
 */
export interface UpdateTokenPairERC20Proposal {
    /** title of the proposal */
    title: string;
    /** proposal description */
    description: string;
    /** contract address of ERC20 token */
    erc20Address: string;
    /** new address of ERC20 token contract */
    newErc20Address: string;
}
export declare const TokenPair: {
    encode(message: TokenPair, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TokenPair;
    fromJSON(object: any): TokenPair;
    toJSON(message: TokenPair): unknown;
    fromPartial(object: DeepPartial<TokenPair>): TokenPair;
};
export declare const RegisterCoinProposal: {
    encode(message: RegisterCoinProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterCoinProposal;
    fromJSON(object: any): RegisterCoinProposal;
    toJSON(message: RegisterCoinProposal): unknown;
    fromPartial(object: DeepPartial<RegisterCoinProposal>): RegisterCoinProposal;
};
export declare const RegisterERC20Proposal: {
    encode(message: RegisterERC20Proposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterERC20Proposal;
    fromJSON(object: any): RegisterERC20Proposal;
    toJSON(message: RegisterERC20Proposal): unknown;
    fromPartial(object: DeepPartial<RegisterERC20Proposal>): RegisterERC20Proposal;
};
export declare const ToggleTokenRelayProposal: {
    encode(message: ToggleTokenRelayProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ToggleTokenRelayProposal;
    fromJSON(object: any): ToggleTokenRelayProposal;
    toJSON(message: ToggleTokenRelayProposal): unknown;
    fromPartial(object: DeepPartial<ToggleTokenRelayProposal>): ToggleTokenRelayProposal;
};
export declare const UpdateTokenPairERC20Proposal: {
    encode(message: UpdateTokenPairERC20Proposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateTokenPairERC20Proposal;
    fromJSON(object: any): UpdateTokenPairERC20Proposal;
    toJSON(message: UpdateTokenPairERC20Proposal): unknown;
    fromPartial(object: DeepPartial<UpdateTokenPairERC20Proposal>): UpdateTokenPairERC20Proposal;
};
