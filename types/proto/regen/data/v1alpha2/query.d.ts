import { ContentHash, SignerEntry, Content } from "./types";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** QueryByContentHashRequest is the Query/ByContentHash request type. */
export interface QueryByHashRequest {
    /** hash is the hash-based identifier for the anchored content. */
    hash: ContentHash;
}
/** QueryByContentHashResponse is the Query/ByContentHash response type. */
export interface QueryByHashResponse {
    /** entry is the ContentEntry */
    entry: ContentEntry;
}
/** QueryBySignerRequest is the Query/BySigner request type. */
export interface QueryBySignerRequest {
    /** signer is the address of the signer to query by. */
    signer: string;
    /** pagination is the PageRequest to use for pagination. */
    pagination: PageRequest;
}
/** QueryBySignerResponse is the Query/BySigner response type. */
export interface QueryBySignerResponse {
    /** entries is the ContentEntry's signed by the queried signer */
    entries: ContentEntry[];
    /** pagination is the pagination PageResponse. */
    pagination: PageResponse;
}
/** ContentEntry describes data referenced and possibly stored on chain */
export interface ContentEntry {
    /** hash is the content hash */
    hash: ContentHash;
    /** iri is the content IRI */
    iri: string;
    /** timestamp is the anchor Timestamp */
    timestamp: Date;
    /** signers are the signers, if any */
    signers: SignerEntry[];
    /** content is the actual content if stored on-chain */
    content: Content;
}
export declare const QueryByHashRequest: {
    encode(message: QueryByHashRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryByHashRequest;
    fromJSON(object: any): QueryByHashRequest;
    toJSON(message: QueryByHashRequest): unknown;
    fromPartial(object: DeepPartial<QueryByHashRequest>): QueryByHashRequest;
};
export declare const QueryByHashResponse: {
    encode(message: QueryByHashResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryByHashResponse;
    fromJSON(object: any): QueryByHashResponse;
    toJSON(message: QueryByHashResponse): unknown;
    fromPartial(object: DeepPartial<QueryByHashResponse>): QueryByHashResponse;
};
export declare const QueryBySignerRequest: {
    encode(message: QueryBySignerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBySignerRequest;
    fromJSON(object: any): QueryBySignerRequest;
    toJSON(message: QueryBySignerRequest): unknown;
    fromPartial(object: DeepPartial<QueryBySignerRequest>): QueryBySignerRequest;
};
export declare const QueryBySignerResponse: {
    encode(message: QueryBySignerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBySignerResponse;
    fromJSON(object: any): QueryBySignerResponse;
    toJSON(message: QueryBySignerResponse): unknown;
    fromPartial(object: DeepPartial<QueryBySignerResponse>): QueryBySignerResponse;
};
export declare const ContentEntry: {
    encode(message: ContentEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContentEntry;
    fromJSON(object: any): ContentEntry;
    toJSON(message: ContentEntry): unknown;
    fromPartial(object: DeepPartial<ContentEntry>): ContentEntry;
};
