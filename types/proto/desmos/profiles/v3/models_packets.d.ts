import { Any } from "../../../google/protobuf/any";
import { Proof, ChainConfig } from "./models_chain_links";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/**
 * LinkChainAccountPacketData defines the object that should be sent inside a
 * MsgSendPacket when wanting to link an external chain to a Desmos profile
 * using IBC
 */
export interface LinkChainAccountPacketData {
    /** SourceAddress contains the details of the external chain address */
    sourceAddress: Any;
    /** SourceProof represents the proof of ownership of the source address */
    sourceProof: Proof;
    /** SourceChainConfig contains the details of the source chain */
    sourceChainConfig: ChainConfig;
    /**
     * DestinationAddress represents the Desmos address of the profile that should
     * be linked with the external account
     */
    destinationAddress: string;
    /** DestinationProof contains the proof of ownership of the DestinationAddress */
    destinationProof: Proof;
}
/** LinkChainAccountPacketAck defines a struct for the packet acknowledgment */
export interface LinkChainAccountPacketAck {
    /**
     * SourceAddress contains the external address that has been linked properly
     * with the profile
     */
    sourceAddress: string;
}
export declare const LinkChainAccountPacketData: {
    encode(message: LinkChainAccountPacketData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LinkChainAccountPacketData;
    fromJSON(object: any): LinkChainAccountPacketData;
    toJSON(message: LinkChainAccountPacketData): unknown;
    fromPartial(object: DeepPartial<LinkChainAccountPacketData>): LinkChainAccountPacketData;
};
export declare const LinkChainAccountPacketAck: {
    encode(message: LinkChainAccountPacketAck, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LinkChainAccountPacketAck;
    fromJSON(object: any): LinkChainAccountPacketAck;
    toJSON(message: LinkChainAccountPacketAck): unknown;
    fromPartial(object: DeepPartial<LinkChainAccountPacketAck>): LinkChainAccountPacketAck;
};
