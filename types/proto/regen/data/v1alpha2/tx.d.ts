import { ContentHash, ContentHash_Graph, ContentHash_Raw } from "./types";
import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** MsgAnchorData is the Msg/AnchorData request type. */
export interface MsgAnchorData {
    /**
     * sender is the address of the sender of the transaction.
     * The sender in StoreData is not attesting to the veracity of the underlying
     * data. They can simply be a intermediary providing services.
     */
    sender: string;
    /** hash is the hash-based identifier for the anchored content. */
    hash: ContentHash;
}
/** MsgAnchorData is the Msg/AnchorData response type. */
export interface MsgAnchorDataResponse {
    /** timestamp is the timestamp of the block at which the data was anchored. */
    timestamp: Timestamp;
}
/** MsgSignData is the Msg/SignData request type. */
export interface MsgSignData {
    /**
     * signers are the addresses of the accounts signing the data.
     * By making a SignData request, the signers are attesting to the veracity
     * of the data referenced by the cid. The precise meaning of this may vary
     * depending on the underlying data.
     */
    signers: string[];
    /**
     * hash is the hash-based identifier for the anchored content. Only RDF graph
     * data can be signed as its data model is intended to specifically convey
     * semantic meaning.
     */
    hash: ContentHash_Graph;
}
/** MsgSignDataResponse is the Msg/SignData response type. */
export interface MsgSignDataResponse {
}
/** MsgStoreRawData is the Msg/StoreRawData request type. */
export interface MsgStoreRawData {
    /**
     * sender is the address of the sender of the transaction.
     * The sender in StoreData is not attesting to the veracity of the underlying
     * data. They can simply be a intermediary providing services.
     */
    sender: string;
    /** content_hash is the hash-based identifier for the anchored content. */
    contentHash: ContentHash_Raw;
    /**
     * content is the content of the raw data corresponding to the provided
     * content hash.
     */
    content: Uint8Array;
}
/** MsgStoreRawData is the Msg/StoreRawData response type. */
export interface MsgStoreRawDataResponse {
}
export declare const MsgAnchorData: {
    encode(message: MsgAnchorData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAnchorData;
    fromJSON(object: any): MsgAnchorData;
    toJSON(message: MsgAnchorData): unknown;
    fromPartial(object: DeepPartial<MsgAnchorData>): MsgAnchorData;
};
export declare const MsgAnchorDataResponse: {
    encode(message: MsgAnchorDataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAnchorDataResponse;
    fromJSON(object: any): MsgAnchorDataResponse;
    toJSON(message: MsgAnchorDataResponse): unknown;
    fromPartial(object: DeepPartial<MsgAnchorDataResponse>): MsgAnchorDataResponse;
};
export declare const MsgSignData: {
    encode(message: MsgSignData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSignData;
    fromJSON(object: any): MsgSignData;
    toJSON(message: MsgSignData): unknown;
    fromPartial(object: DeepPartial<MsgSignData>): MsgSignData;
};
export declare const MsgSignDataResponse: {
    encode(_: MsgSignDataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSignDataResponse;
    fromJSON(_: any): MsgSignDataResponse;
    toJSON(_: MsgSignDataResponse): unknown;
    fromPartial(_: DeepPartial<MsgSignDataResponse>): MsgSignDataResponse;
};
export declare const MsgStoreRawData: {
    encode(message: MsgStoreRawData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgStoreRawData;
    fromJSON(object: any): MsgStoreRawData;
    toJSON(message: MsgStoreRawData): unknown;
    fromPartial(object: DeepPartial<MsgStoreRawData>): MsgStoreRawData;
};
export declare const MsgStoreRawDataResponse: {
    encode(_: MsgStoreRawDataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgStoreRawDataResponse;
    fromJSON(_: any): MsgStoreRawDataResponse;
    toJSON(_: MsgStoreRawDataResponse): unknown;
    fromPartial(_: DeepPartial<MsgStoreRawDataResponse>): MsgStoreRawDataResponse;
};
