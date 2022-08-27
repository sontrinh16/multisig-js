import { Any } from "../../../google/protobuf/any";
import { Proof, ChainConfig } from "./models_chain_links";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** MsgLinkChainAccount represents a message to link an account to a profile. */
export interface MsgLinkChainAccount {
    /**
     * ChainAddress contains the details of the external chain address to be
     * linked
     */
    chainAddress: Any;
    /** Proof contains the proof of ownership of the external chain address */
    proof: Proof;
    /** ChainConfig contains the configuration of the external chain */
    chainConfig: ChainConfig;
    /**
     * Signer represents the Desmos address associated with the
     * profile to which link the external account
     */
    signer: string;
}
/** MsgLinkChainAccountResponse defines the Msg/LinkAccount response type. */
export interface MsgLinkChainAccountResponse {
}
/**
 * MsgUnlinkChainAccount represents a message to unlink an account from a
 * profile.
 */
export interface MsgUnlinkChainAccount {
    /** Owner represents the Desmos profile from which to remove the link */
    owner: string;
    /**
     * ChainName represents the name of the chain to which the link to remove is
     * associated
     */
    chainName: string;
    /** Target represents the external address to be removed */
    target: string;
}
/** MsgUnlinkChainAccountResponse defines the Msg/UnlinkAccount response type. */
export interface MsgUnlinkChainAccountResponse {
}
/**
 * MsgSetDefaultExternalAddress represents the message used to set a default
 * address for a specific chain
 */
export interface MsgSetDefaultExternalAddress {
    /** Name of the chain for which to set the default address */
    chainName: string;
    /** Address to be set as the default one */
    target: string;
    /** User signing the message */
    signer: string;
}
/**
 * MsgSetDefaultExternalAddressResponse represents the
 * Msg/SetDefaultExternalAddress response type
 */
export interface MsgSetDefaultExternalAddressResponse {
}
export declare const MsgLinkChainAccount: {
    encode(message: MsgLinkChainAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLinkChainAccount;
    fromJSON(object: any): MsgLinkChainAccount;
    toJSON(message: MsgLinkChainAccount): unknown;
    fromPartial(object: DeepPartial<MsgLinkChainAccount>): MsgLinkChainAccount;
};
export declare const MsgLinkChainAccountResponse: {
    encode(_: MsgLinkChainAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLinkChainAccountResponse;
    fromJSON(_: any): MsgLinkChainAccountResponse;
    toJSON(_: MsgLinkChainAccountResponse): unknown;
    fromPartial(_: DeepPartial<MsgLinkChainAccountResponse>): MsgLinkChainAccountResponse;
};
export declare const MsgUnlinkChainAccount: {
    encode(message: MsgUnlinkChainAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnlinkChainAccount;
    fromJSON(object: any): MsgUnlinkChainAccount;
    toJSON(message: MsgUnlinkChainAccount): unknown;
    fromPartial(object: DeepPartial<MsgUnlinkChainAccount>): MsgUnlinkChainAccount;
};
export declare const MsgUnlinkChainAccountResponse: {
    encode(_: MsgUnlinkChainAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnlinkChainAccountResponse;
    fromJSON(_: any): MsgUnlinkChainAccountResponse;
    toJSON(_: MsgUnlinkChainAccountResponse): unknown;
    fromPartial(_: DeepPartial<MsgUnlinkChainAccountResponse>): MsgUnlinkChainAccountResponse;
};
export declare const MsgSetDefaultExternalAddress: {
    encode(message: MsgSetDefaultExternalAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetDefaultExternalAddress;
    fromJSON(object: any): MsgSetDefaultExternalAddress;
    toJSON(message: MsgSetDefaultExternalAddress): unknown;
    fromPartial(object: DeepPartial<MsgSetDefaultExternalAddress>): MsgSetDefaultExternalAddress;
};
export declare const MsgSetDefaultExternalAddressResponse: {
    encode(_: MsgSetDefaultExternalAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetDefaultExternalAddressResponse;
    fromJSON(_: any): MsgSetDefaultExternalAddressResponse;
    toJSON(_: MsgSetDefaultExternalAddressResponse): unknown;
    fromPartial(_: DeepPartial<MsgSetDefaultExternalAddressResponse>): MsgSetDefaultExternalAddressResponse;
};
