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
 * TokenPair defines an instance that records a pairing consisting of a native
 * Cosmos Coin and an ERC20 token address.
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
/**
 * RegisterCoinProposal is a gov Content type to register a token pair for a
 * native Cosmos coin.
 */
export interface RegisterCoinProposal {
    /** title of the proposal */
    title: string;
    /** proposal description */
    description: string;
    /** metadata of the native Cosmos coin */
    metadata: Metadata;
}
/**
 * RegisterERC20Proposal is a gov Content type to register a token pair for an
 * ERC20 token
 */
export interface RegisterERC20Proposal {
    /** title of the proposal */
    title: string;
    /** proposal description */
    description: string;
    /** contract address of ERC20 token */
    erc20address: string;
}
/**
 * ToggleTokenConversionProposal is a gov Content type to toggle the conversion
 * of a token pair.
 */
export interface ToggleTokenConversionProposal {
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
export declare const ToggleTokenConversionProposal: {
    encode(message: ToggleTokenConversionProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ToggleTokenConversionProposal;
    fromJSON(object: any): ToggleTokenConversionProposal;
    toJSON(message: ToggleTokenConversionProposal): unknown;
    fromPartial(object: DeepPartial<ToggleTokenConversionProposal>): ToggleTokenConversionProposal;
};
