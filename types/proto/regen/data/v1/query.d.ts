import { ContentHash, DigestAlgorithm, RawMediaType, GraphCanonicalizationAlgorithm, GraphMerkleTree, ContentEntry } from "./types";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** QueryByIRIRequest is the Query/ByIRI request type. */
export interface QueryByIRIRequest {
    /** iri is the IRI for the anchored data. */
    iri: string;
}
/** QueryByIRIResponse is the Query/ByHash response type. */
export interface QueryByIRIResponse {
    /** entry is the ContentEntry for the anchored data. */
    entry: ContentEntry;
}
/** QueryByHashRequest is the Query/ByHash request type. */
export interface QueryByHashRequest {
    /** content_hash is the ContentHash for the anchored data. */
    contentHash: ContentHash;
}
/** QueryByHashResponse is the Query/ByHash response type. */
export interface QueryByHashResponse {
    /** entry is the ContentEntry for the anchored data. */
    entry: ContentEntry;
}
/** QueryByAttestorRequest is the Query/ByAttestor request type. */
export interface QueryByAttestorRequest {
    /** attestor is the address of the attestor. */
    attestor: string;
    /** pagination is the PageRequest to use for pagination. */
    pagination: PageRequest;
}
/** QueryByAttestorResponse is the Query/ByAttestor response type. */
export interface QueryByAttestorResponse {
    /** entries are the ContentEntries attested to by the attestor. */
    entries: ContentEntry[];
    /** pagination is the pagination PageResponse. */
    pagination: PageResponse;
}
/** QueryIRIByHashRequest is the Query/IRIByHash request type. */
export interface QueryIRIByHashRequest {
    /** content_hash is the ContentHash for the anchored data. */
    contentHash: ContentHash;
}
/** QueryIRIByHashResponse is the Query/IRIByHash response type. */
export interface QueryIRIByHashResponse {
    /** iri is the IRI for the content hash. */
    iri: string;
}
/** QueryIRIByRawHashRequest is the Query/IRIByRawHash request type. */
export interface QueryIRIByRawHashRequest {
    /**
     * hash represents the hash of the data based on the digest_algorithm and must
     * be encoded as a base64 string. When hash is provided as a URL parameter,
     * all instances of "+" should also be replaced with "%2b".
     */
    hash: string;
    /** digest_algorithm represents the hash digest algorithm. */
    digestAlgorithm: DigestAlgorithm;
    /** media_type represents the media type for raw data. */
    mediaType: RawMediaType;
}
/** QueryIRIByRawHashResponse is the Query/IRIByRawHash response type. */
export interface QueryIRIByRawHashResponse {
    /** iri is the IRI for the content hash. */
    iri: string;
}
/** QueryIRIByGraphHashRequest is the Query/IRIByGraphHash request type. */
export interface QueryIRIByGraphHashRequest {
    /**
     * hash represents the hash of the data based on the digest_algorithm and must
     * be encoded as a base64 string. When hash is provided as a URL parameter,
     * all instances of "+" should also be replaced with "%2b".
     */
    hash: string;
    /** digest_algorithm represents the hash digest algorithm. */
    digestAlgorithm: DigestAlgorithm;
    /**
     * graph_canonicalization_algorithm represents the RDF graph
     * canonicalization algorithm.
     */
    canonicalizationAlgorithm: GraphCanonicalizationAlgorithm;
    /** merkle_tree is the merkle tree type used for the graph hash, if any. */
    merkleTree: GraphMerkleTree;
}
/** QueryIRIByGraphHashResponse is the Query/IRIByGraphHash response type. */
export interface QueryIRIByGraphHashResponse {
    /** iri is the IRI for the content hash. */
    iri: string;
}
/** QueryHashByIRIRequest is the Query/HashByIRI request type. */
export interface QueryHashByIRIRequest {
    /** iri is the IRI for the content hash. */
    iri: string;
}
/** QueryHashByIRIResponse is the Query/HashByIRI response type. */
export interface QueryHashByIRIResponse {
    /** content_hash is the ContentHash for the IRI. */
    contentHash: ContentHash;
}
/** QueryAttestorsByIRIRequest is the Query/AttestorsByIRI request type. */
export interface QueryAttestorsByIRIRequest {
    /** iri is the IRI for the anchored data. */
    iri: string;
    /** pagination is the PageRequest to use for pagination. */
    pagination: PageRequest;
}
/** QueryAttestorsByIRIResponse is the Query/AttestorsByIRI response type. */
export interface QueryAttestorsByIRIResponse {
    /** attestors are the addresses of the attestors. */
    attestors: string[];
    /** pagination is the pagination PageResponse. */
    pagination: PageResponse;
}
/** QueryAttestorsByHashRequest is the Query/AttestorsByHash request type. */
export interface QueryAttestorsByHashRequest {
    /** content_hash is the ContentHash for the anchored data. */
    contentHash: ContentHash;
    /** pagination is the PageRequest to use for pagination. */
    pagination: PageRequest;
}
/** QueryAttestorsByHashResponse is the Query/AttestorsByHash response type. */
export interface QueryAttestorsByHashResponse {
    /** attestors are the addresses of the attestors. */
    attestors: string[];
    /** pagination is the pagination PageResponse. */
    pagination: PageResponse;
}
/** QueryResolversByIRIRequest is the Query/ResolversByIRI request type. */
export interface QueryResolversByIRIRequest {
    /** iri is the IRI for the anchored data. */
    iri: string;
    /** pagination is the PageRequest to use for pagination. */
    pagination: PageRequest;
}
/** QueryResolversByIRIResponse is the Query/ResolversByIRI response type. */
export interface QueryResolversByIRIResponse {
    /**
     * resolver_urls are the resolver URLs that have been registered for the
     * anchored data.
     */
    resolverUrls: string[];
    /** pagination is the PageResponse to use for pagination. */
    pagination: PageResponse;
}
/** QueryResolversByHashRequest is the Query/ResolversByHash request type. */
export interface QueryResolversByHashRequest {
    /** content_hash is the ContentHash for the anchored data. */
    contentHash: ContentHash;
    /** pagination is the PageRequest to use for pagination. */
    pagination: PageRequest;
}
/** QueryResolversByHashResponse is the Query/ResolversByHash response type. */
export interface QueryResolversByHashResponse {
    /**
     * resolver_urls are the resolver URLs that have been registered for the
     * anchored data.
     */
    resolverUrls: string[];
    /** pagination is the PageResponse to use for pagination. */
    pagination: PageResponse;
}
/** QueryResolverInfoRequest is the Query/ResolverInfo request type. */
export interface QueryResolverInfoRequest {
    /** url is the resolver URL that has been registered. */
    url: string;
}
/** QueryResolverInfoResponse is the Query/ResolverInfo response type. */
export interface QueryResolverInfoResponse {
    /** id is the id of the resolver which can be used in Msg/RegisterResolver. */
    id: Long;
    /** manager is the bech32 account address of the resolver manager. */
    manager: string;
}
export declare const QueryByIRIRequest: {
    encode(message: QueryByIRIRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryByIRIRequest;
    fromJSON(object: any): QueryByIRIRequest;
    toJSON(message: QueryByIRIRequest): unknown;
    fromPartial(object: DeepPartial<QueryByIRIRequest>): QueryByIRIRequest;
};
export declare const QueryByIRIResponse: {
    encode(message: QueryByIRIResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryByIRIResponse;
    fromJSON(object: any): QueryByIRIResponse;
    toJSON(message: QueryByIRIResponse): unknown;
    fromPartial(object: DeepPartial<QueryByIRIResponse>): QueryByIRIResponse;
};
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
export declare const QueryByAttestorRequest: {
    encode(message: QueryByAttestorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryByAttestorRequest;
    fromJSON(object: any): QueryByAttestorRequest;
    toJSON(message: QueryByAttestorRequest): unknown;
    fromPartial(object: DeepPartial<QueryByAttestorRequest>): QueryByAttestorRequest;
};
export declare const QueryByAttestorResponse: {
    encode(message: QueryByAttestorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryByAttestorResponse;
    fromJSON(object: any): QueryByAttestorResponse;
    toJSON(message: QueryByAttestorResponse): unknown;
    fromPartial(object: DeepPartial<QueryByAttestorResponse>): QueryByAttestorResponse;
};
export declare const QueryIRIByHashRequest: {
    encode(message: QueryIRIByHashRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIRIByHashRequest;
    fromJSON(object: any): QueryIRIByHashRequest;
    toJSON(message: QueryIRIByHashRequest): unknown;
    fromPartial(object: DeepPartial<QueryIRIByHashRequest>): QueryIRIByHashRequest;
};
export declare const QueryIRIByHashResponse: {
    encode(message: QueryIRIByHashResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIRIByHashResponse;
    fromJSON(object: any): QueryIRIByHashResponse;
    toJSON(message: QueryIRIByHashResponse): unknown;
    fromPartial(object: DeepPartial<QueryIRIByHashResponse>): QueryIRIByHashResponse;
};
export declare const QueryIRIByRawHashRequest: {
    encode(message: QueryIRIByRawHashRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIRIByRawHashRequest;
    fromJSON(object: any): QueryIRIByRawHashRequest;
    toJSON(message: QueryIRIByRawHashRequest): unknown;
    fromPartial(object: DeepPartial<QueryIRIByRawHashRequest>): QueryIRIByRawHashRequest;
};
export declare const QueryIRIByRawHashResponse: {
    encode(message: QueryIRIByRawHashResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIRIByRawHashResponse;
    fromJSON(object: any): QueryIRIByRawHashResponse;
    toJSON(message: QueryIRIByRawHashResponse): unknown;
    fromPartial(object: DeepPartial<QueryIRIByRawHashResponse>): QueryIRIByRawHashResponse;
};
export declare const QueryIRIByGraphHashRequest: {
    encode(message: QueryIRIByGraphHashRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIRIByGraphHashRequest;
    fromJSON(object: any): QueryIRIByGraphHashRequest;
    toJSON(message: QueryIRIByGraphHashRequest): unknown;
    fromPartial(object: DeepPartial<QueryIRIByGraphHashRequest>): QueryIRIByGraphHashRequest;
};
export declare const QueryIRIByGraphHashResponse: {
    encode(message: QueryIRIByGraphHashResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIRIByGraphHashResponse;
    fromJSON(object: any): QueryIRIByGraphHashResponse;
    toJSON(message: QueryIRIByGraphHashResponse): unknown;
    fromPartial(object: DeepPartial<QueryIRIByGraphHashResponse>): QueryIRIByGraphHashResponse;
};
export declare const QueryHashByIRIRequest: {
    encode(message: QueryHashByIRIRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryHashByIRIRequest;
    fromJSON(object: any): QueryHashByIRIRequest;
    toJSON(message: QueryHashByIRIRequest): unknown;
    fromPartial(object: DeepPartial<QueryHashByIRIRequest>): QueryHashByIRIRequest;
};
export declare const QueryHashByIRIResponse: {
    encode(message: QueryHashByIRIResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryHashByIRIResponse;
    fromJSON(object: any): QueryHashByIRIResponse;
    toJSON(message: QueryHashByIRIResponse): unknown;
    fromPartial(object: DeepPartial<QueryHashByIRIResponse>): QueryHashByIRIResponse;
};
export declare const QueryAttestorsByIRIRequest: {
    encode(message: QueryAttestorsByIRIRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAttestorsByIRIRequest;
    fromJSON(object: any): QueryAttestorsByIRIRequest;
    toJSON(message: QueryAttestorsByIRIRequest): unknown;
    fromPartial(object: DeepPartial<QueryAttestorsByIRIRequest>): QueryAttestorsByIRIRequest;
};
export declare const QueryAttestorsByIRIResponse: {
    encode(message: QueryAttestorsByIRIResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAttestorsByIRIResponse;
    fromJSON(object: any): QueryAttestorsByIRIResponse;
    toJSON(message: QueryAttestorsByIRIResponse): unknown;
    fromPartial(object: DeepPartial<QueryAttestorsByIRIResponse>): QueryAttestorsByIRIResponse;
};
export declare const QueryAttestorsByHashRequest: {
    encode(message: QueryAttestorsByHashRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAttestorsByHashRequest;
    fromJSON(object: any): QueryAttestorsByHashRequest;
    toJSON(message: QueryAttestorsByHashRequest): unknown;
    fromPartial(object: DeepPartial<QueryAttestorsByHashRequest>): QueryAttestorsByHashRequest;
};
export declare const QueryAttestorsByHashResponse: {
    encode(message: QueryAttestorsByHashResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAttestorsByHashResponse;
    fromJSON(object: any): QueryAttestorsByHashResponse;
    toJSON(message: QueryAttestorsByHashResponse): unknown;
    fromPartial(object: DeepPartial<QueryAttestorsByHashResponse>): QueryAttestorsByHashResponse;
};
export declare const QueryResolversByIRIRequest: {
    encode(message: QueryResolversByIRIRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryResolversByIRIRequest;
    fromJSON(object: any): QueryResolversByIRIRequest;
    toJSON(message: QueryResolversByIRIRequest): unknown;
    fromPartial(object: DeepPartial<QueryResolversByIRIRequest>): QueryResolversByIRIRequest;
};
export declare const QueryResolversByIRIResponse: {
    encode(message: QueryResolversByIRIResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryResolversByIRIResponse;
    fromJSON(object: any): QueryResolversByIRIResponse;
    toJSON(message: QueryResolversByIRIResponse): unknown;
    fromPartial(object: DeepPartial<QueryResolversByIRIResponse>): QueryResolversByIRIResponse;
};
export declare const QueryResolversByHashRequest: {
    encode(message: QueryResolversByHashRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryResolversByHashRequest;
    fromJSON(object: any): QueryResolversByHashRequest;
    toJSON(message: QueryResolversByHashRequest): unknown;
    fromPartial(object: DeepPartial<QueryResolversByHashRequest>): QueryResolversByHashRequest;
};
export declare const QueryResolversByHashResponse: {
    encode(message: QueryResolversByHashResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryResolversByHashResponse;
    fromJSON(object: any): QueryResolversByHashResponse;
    toJSON(message: QueryResolversByHashResponse): unknown;
    fromPartial(object: DeepPartial<QueryResolversByHashResponse>): QueryResolversByHashResponse;
};
export declare const QueryResolverInfoRequest: {
    encode(message: QueryResolverInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryResolverInfoRequest;
    fromJSON(object: any): QueryResolverInfoRequest;
    toJSON(message: QueryResolverInfoRequest): unknown;
    fromPartial(object: DeepPartial<QueryResolverInfoRequest>): QueryResolverInfoRequest;
};
export declare const QueryResolverInfoResponse: {
    encode(message: QueryResolverInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryResolverInfoResponse;
    fromJSON(object: any): QueryResolverInfoResponse;
    toJSON(message: QueryResolverInfoResponse): unknown;
    fromPartial(object: DeepPartial<QueryResolverInfoResponse>): QueryResolverInfoResponse;
};
