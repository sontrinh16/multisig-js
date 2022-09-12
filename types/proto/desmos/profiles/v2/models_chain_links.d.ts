import { Any } from "../../../google/protobuf/any";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { SignMode } from "../../../cosmos/tx/signing/v1beta1/signing";
import { CompactBitArray } from "../../../cosmos/crypto/multisig/v1beta1/multisig";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/**
 * ChainLink contains the data representing either an inter- or cross- chain
 * link
 */
export interface ChainLink {
    /** User defines the destination profile address to link */
    user: string;
    /**
     * Address contains the data of the external chain address to be connected
     * with the Desmos profile
     */
    address: Any;
    /** Proof contains the ownership proof of the external chain address */
    proof: Proof;
    /** ChainConfig contains the configuration of the external chain */
    chainConfig: ChainConfig;
    /** CreationTime represents the time in which the link has been created */
    creationTime: Timestamp;
}
/** ChainConfig contains the data of the chain with which the link is made. */
export interface ChainConfig {
    name: string;
}
/**
 * Proof contains all the data used to verify a signature when linking an
 * account to a profile
 */
export interface Proof {
    /**
     * PubKey represents the public key associated with the address for which to
     * prove the ownership
     */
    pubKey: Any;
    /** Signature represents the hex-encoded signature of the PlainText value */
    signature: Any;
    /**
     * PlainText represents the hex-encoded value signed in order to produce the
     * Signature
     */
    plainText: string;
}
/** Bech32Address represents a Bech32-encoded address */
export interface Bech32Address {
    /** Value represents the Bech-32 encoded address value */
    value: string;
    /** Prefix represents the HRP of the Bech32 address */
    prefix: string;
}
/** Base58Address represents a Base58-encoded address */
export interface Base58Address {
    /** Value contains the Base58-encoded address */
    value: string;
}
/**
 * HexAddress represents an Hex-encoded address
 * NOTE: Currently it only supports keccak256-uncompressed addresses
 */
export interface HexAddress {
    /** Value represents the hex address value */
    value: string;
    /**
     * Prefix represents the optional prefix used during address encoding (e.g.
     * 0x)
     */
    prefix: string;
}
/** SingleSignatureData is the signature data for a single signer */
export interface SingleSignatureData {
    /** Mode is the signing mode of the single signer */
    mode: SignMode;
    /** Signature is the raw signature bytes */
    signature: Uint8Array;
}
/** MultiSignatureData is the signature data for a multisig public key */
export interface MultiSignatureData {
    /** Bitarray specifies which keys within the multisig are signing */
    bitArray: CompactBitArray;
    /** Signatures is the signatures of the multi-signature */
    signatures: Any[];
}
export declare const ChainLink: {
    encode(message: ChainLink, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChainLink;
    fromJSON(object: any): ChainLink;
    toJSON(message: ChainLink): unknown;
    fromPartial(object: DeepPartial<ChainLink>): ChainLink;
};
export declare const ChainConfig: {
    encode(message: ChainConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChainConfig;
    fromJSON(object: any): ChainConfig;
    toJSON(message: ChainConfig): unknown;
    fromPartial(object: DeepPartial<ChainConfig>): ChainConfig;
};
export declare const Proof: {
    encode(message: Proof, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Proof;
    fromJSON(object: any): Proof;
    toJSON(message: Proof): unknown;
    fromPartial(object: DeepPartial<Proof>): Proof;
};
export declare const Bech32Address: {
    encode(message: Bech32Address, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Bech32Address;
    fromJSON(object: any): Bech32Address;
    toJSON(message: Bech32Address): unknown;
    fromPartial(object: DeepPartial<Bech32Address>): Bech32Address;
};
export declare const Base58Address: {
    encode(message: Base58Address, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Base58Address;
    fromJSON(object: any): Base58Address;
    toJSON(message: Base58Address): unknown;
    fromPartial(object: DeepPartial<Base58Address>): Base58Address;
};
export declare const HexAddress: {
    encode(message: HexAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HexAddress;
    fromJSON(object: any): HexAddress;
    toJSON(message: HexAddress): unknown;
    fromPartial(object: DeepPartial<HexAddress>): HexAddress;
};
export declare const SingleSignatureData: {
    encode(message: SingleSignatureData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SingleSignatureData;
    fromJSON(object: any): SingleSignatureData;
    toJSON(message: SingleSignatureData): unknown;
    fromPartial(object: DeepPartial<SingleSignatureData>): SingleSignatureData;
};
export declare const MultiSignatureData: {
    encode(message: MultiSignatureData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MultiSignatureData;
    fromJSON(object: any): MultiSignatureData;
    toJSON(message: MultiSignatureData): unknown;
    fromPartial(object: DeepPartial<MultiSignatureData>): MultiSignatureData;
};
