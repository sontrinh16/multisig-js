import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** DigestAlgorithm is the hash digest algorithm */
export declare enum DigestAlgorithm {
    /** DIGEST_ALGORITHM_UNSPECIFIED - unspecified and invalid */
    DIGEST_ALGORITHM_UNSPECIFIED = 0,
    /** DIGEST_ALGORITHM_BLAKE2B_256 - BLAKE2b-256 */
    DIGEST_ALGORITHM_BLAKE2B_256 = 1,
    UNRECOGNIZED = -1
}
export declare function digestAlgorithmFromJSON(object: any): DigestAlgorithm;
export declare function digestAlgorithmToJSON(object: DigestAlgorithm): string;
/** RawMediaType defines MIME media types to be used with a ContentHash.Raw hash. */
export declare enum RawMediaType {
    /** RAW_MEDIA_TYPE_UNSPECIFIED - RAW_MEDIA_TYPE_UNSPECIFIED can be used for raw binary data */
    RAW_MEDIA_TYPE_UNSPECIFIED = 0,
    /** RAW_MEDIA_TYPE_TEXT_PLAIN - plain text */
    RAW_MEDIA_TYPE_TEXT_PLAIN = 1,
    /** RAW_MEDIA_TYPE_JSON - JSON */
    RAW_MEDIA_TYPE_JSON = 2,
    /** RAW_MEDIA_TYPE_CSV - CSV */
    RAW_MEDIA_TYPE_CSV = 3,
    /** RAW_MEDIA_TYPE_XML - XML */
    RAW_MEDIA_TYPE_XML = 4,
    /** RAW_MEDIA_TYPE_PDF - PDF */
    RAW_MEDIA_TYPE_PDF = 5,
    /** RAW_MEDIA_TYPE_TIFF - TIIF */
    RAW_MEDIA_TYPE_TIFF = 16,
    /** RAW_MEDIA_TYPE_JPG - JPG */
    RAW_MEDIA_TYPE_JPG = 17,
    /** RAW_MEDIA_TYPE_PNG - PNG */
    RAW_MEDIA_TYPE_PNG = 18,
    /** RAW_MEDIA_TYPE_SVG - SVG */
    RAW_MEDIA_TYPE_SVG = 19,
    /** RAW_MEDIA_TYPE_WEBP - WEBP */
    RAW_MEDIA_TYPE_WEBP = 20,
    /** RAW_MEDIA_TYPE_AVIF - AVIF */
    RAW_MEDIA_TYPE_AVIF = 21,
    /** RAW_MEDIA_TYPE_GIF - GIF */
    RAW_MEDIA_TYPE_GIF = 22,
    /** RAW_MEDIA_TYPE_APNG - APNG */
    RAW_MEDIA_TYPE_APNG = 23,
    /** RAW_MEDIA_TYPE_MPEG - MPEG */
    RAW_MEDIA_TYPE_MPEG = 32,
    /** RAW_MEDIA_TYPE_MP4 - MP4 */
    RAW_MEDIA_TYPE_MP4 = 33,
    /** RAW_MEDIA_TYPE_WEBM - WEBM */
    RAW_MEDIA_TYPE_WEBM = 34,
    /** RAW_MEDIA_TYPE_OGG - OGG */
    RAW_MEDIA_TYPE_OGG = 35,
    UNRECOGNIZED = -1
}
export declare function rawMediaTypeFromJSON(object: any): RawMediaType;
export declare function rawMediaTypeToJSON(object: RawMediaType): string;
/** GraphCanonicalizationAlgorithm is the graph canonicalization algorithm */
export declare enum GraphCanonicalizationAlgorithm {
    /** GRAPH_CANONICALIZATION_ALGORITHM_UNSPECIFIED - unspecified and invalid */
    GRAPH_CANONICALIZATION_ALGORITHM_UNSPECIFIED = 0,
    /** GRAPH_CANONICALIZATION_ALGORITHM_URDNA2015 - URDNA2015 graph hashing */
    GRAPH_CANONICALIZATION_ALGORITHM_URDNA2015 = 1,
    UNRECOGNIZED = -1
}
export declare function graphCanonicalizationAlgorithmFromJSON(object: any): GraphCanonicalizationAlgorithm;
export declare function graphCanonicalizationAlgorithmToJSON(object: GraphCanonicalizationAlgorithm): string;
/** GraphMerkleTree is the graph merkle tree type used for hashing, if any */
export declare enum GraphMerkleTree {
    /** GRAPH_MERKLE_TREE_NONE_UNSPECIFIED - no merkle tree */
    GRAPH_MERKLE_TREE_NONE_UNSPECIFIED = 0,
    UNRECOGNIZED = -1
}
export declare function graphMerkleTreeFromJSON(object: any): GraphMerkleTree;
export declare function graphMerkleTreeToJSON(object: GraphMerkleTree): string;
/** ContentHash specifies a hash-based content identifier for a piece of data. */
export interface ContentHash {
    /**
     * Raw specifies "raw" data which does not specify a deterministic, canonical
     * encoding. Users of these hashes MUST maintain a copy of the hashed data
     * which is preserved bit by bit. All other content encodings specify a
     * deterministic, canonical encoding allowing implementations to choose from a
     * variety of alternative formats for transport and encoding while maintaining
     * the guarantee that the canonical hash will not change. The media type for
     * "raw" data is defined by the MediaType enum.
     */
    raw: ContentHash_Raw;
    /**
     * Graph specifies graph data that conforms to the RDF data model.
     * The canonicalization algorithm used for an RDF graph is specified by
     * GraphCanonicalizationAlgorithm.
     */
    graph: ContentHash_Graph;
}
/** Raw is the content hash type used for raw data. */
export interface ContentHash_Raw {
    /**
     * hash represents the hash of the data based on the specified
     * digest_algorithm.
     */
    hash: Uint8Array;
    /** digest_algorithm represents the hash digest algorithm. */
    digestAlgorithm: DigestAlgorithm;
    /** media_type represents the media type for raw data. */
    mediaType: RawMediaType;
}
/** Graph is the content hash type used for RDF graph data. */
export interface ContentHash_Graph {
    /**
     * hash represents the hash of the data based on the specified
     * digest_algorithm.
     */
    hash: Uint8Array;
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
/** ContentEntry describes data referenced and possibly stored on chain */
export interface ContentEntry {
    /** content_hash is the content hash of the anchored data. */
    contentHash: ContentHash;
    /** iri is the IRI of the anchored data. */
    iri: string;
    /** timestamp is the timestamp of the anchored data. */
    timestamp: Date;
}
/**
 * AttestorEntry is an attestor entry including the attestor, the IRI, and the
 * timestamp.
 */
export interface AttestorEntry {
    /** iri is the IRI of the data attested to. */
    iri: string;
    /**
     * attestor is the address of the account that has attested to the veracity of
     * the data.
     */
    attestor: string;
    /** timestamp is the timestamp at which the data was attested to. */
    timestamp: Date;
}
/** ContentHashes contains list of content ContentHash. */
export interface ContentHashes {
    /** data is a list of content hashes which the resolver claims to serve. */
    contentHashes: ContentHash[];
}
export declare const ContentHash: {
    encode(message: ContentHash, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContentHash;
    fromJSON(object: any): ContentHash;
    toJSON(message: ContentHash): unknown;
    fromPartial(object: DeepPartial<ContentHash>): ContentHash;
};
export declare const ContentHash_Raw: {
    encode(message: ContentHash_Raw, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContentHash_Raw;
    fromJSON(object: any): ContentHash_Raw;
    toJSON(message: ContentHash_Raw): unknown;
    fromPartial(object: DeepPartial<ContentHash_Raw>): ContentHash_Raw;
};
export declare const ContentHash_Graph: {
    encode(message: ContentHash_Graph, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContentHash_Graph;
    fromJSON(object: any): ContentHash_Graph;
    toJSON(message: ContentHash_Graph): unknown;
    fromPartial(object: DeepPartial<ContentHash_Graph>): ContentHash_Graph;
};
export declare const ContentEntry: {
    encode(message: ContentEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContentEntry;
    fromJSON(object: any): ContentEntry;
    toJSON(message: ContentEntry): unknown;
    fromPartial(object: DeepPartial<ContentEntry>): ContentEntry;
};
export declare const AttestorEntry: {
    encode(message: AttestorEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AttestorEntry;
    fromJSON(object: any): AttestorEntry;
    toJSON(message: AttestorEntry): unknown;
    fromPartial(object: DeepPartial<AttestorEntry>): AttestorEntry;
};
export declare const ContentHashes: {
    encode(message: ContentHashes, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContentHashes;
    fromJSON(object: any): ContentHashes;
    toJSON(message: ContentHashes): unknown;
    fromPartial(object: DeepPartial<ContentHashes>): ContentHashes;
};
