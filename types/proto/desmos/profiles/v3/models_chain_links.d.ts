import { Any } from "../../../google/protobuf/any";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { CompactBitArray } from "../../../cosmos/crypto/multisig/v1beta1/multisig";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** SignatureValueType specifies all the possible signature types */
export declare enum SignatureValueType {
    /**
     * SIGNATURE_VALUE_TYPE_UNSPECIFIED - SIGNATURE_VALUE_TYPE_UNSPECIFIED specifies an unknown signing mode
     * and will be rejected
     */
    SIGNATURE_VALUE_TYPE_UNSPECIFIED = 0,
    /**
     * SIGNATURE_VALUE_TYPE_RAW - SIGNATURE_VALUE_TYPE_RAW should be used when the value has been
     * signed as a raw byte array
     */
    SIGNATURE_VALUE_TYPE_RAW = 1,
    /**
     * SIGNATURE_VALUE_TYPE_COSMOS_DIRECT - SIGNATURE_VALUE_TYPE_COSMOS_DIRECT should be used when the signed
     * value has been encoded as a Protobuf transaction containing the owner
     * address inside its memo field
     */
    SIGNATURE_VALUE_TYPE_COSMOS_DIRECT = 2,
    /**
     * SIGNATURE_VALUE_TYPE_COSMOS_AMINO - SIGNATURE_VALUE_TYPE_COSMOS_AMINO should be used when the value has
     * been encoded as an Amino transaction containing the owner address inside
     * its memo field
     */
    SIGNATURE_VALUE_TYPE_COSMOS_AMINO = 3,
    /**
     * SIGNATURE_VALUE_TYPE_EVM_PERSONAL_SIGN - SIGNATURE_VALUE_TYPE_EVM_PERSONAL_SIGN should be used when the value
     * has been encoded following the EVM personal_sign specification
     */
    SIGNATURE_VALUE_TYPE_EVM_PERSONAL_SIGN = 4,
    UNRECOGNIZED = -1
}
export declare function signatureValueTypeFromJSON(object: any): SignatureValueType;
export declare function signatureValueTypeToJSON(object: SignatureValueType): string;
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
/** SingleSignature is the signature data for a single signer */
export interface SingleSignature {
    /** Type represents the type of the signature value */
    valueType: SignatureValueType;
    /** Signature is the raw signature bytes */
    signature: Uint8Array;
}
/** CosmosMultiSignature is the signature data for a multisig public key */
export interface CosmosMultiSignature {
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
export declare const SingleSignature: {
    encode(message: SingleSignature, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SingleSignature;
    fromJSON(object: any): SingleSignature;
    toJSON(message: SingleSignature): unknown;
    fromPartial(object: DeepPartial<SingleSignature>): SingleSignature;
};
export declare const CosmosMultiSignature: {
    encode(message: CosmosMultiSignature, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CosmosMultiSignature;
    fromJSON(object: any): CosmosMultiSignature;
    toJSON(message: CosmosMultiSignature): unknown;
    fromPartial(object: DeepPartial<CosmosMultiSignature>): CosmosMultiSignature;
};
