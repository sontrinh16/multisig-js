import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** MediaType defines MIME media types to be used with a ContentHash.Raw hash. */
export declare enum MediaType {
    /** MEDIA_TYPE_UNSPECIFIED - MEDIA_TYPE_UNSPECIFIED can be used for raw binary data */
    MEDIA_TYPE_UNSPECIFIED = 0,
    /** MEDIA_TYPE_TEXT_PLAIN - plain text */
    MEDIA_TYPE_TEXT_PLAIN = 1,
    /** MEDIA_TYPE_JSON - JSON */
    MEDIA_TYPE_JSON = 2,
    /** MEDIA_TYPE_CSV - CSV */
    MEDIA_TYPE_CSV = 3,
    /** MEDIA_TYPE_XML - XML */
    MEDIA_TYPE_XML = 4,
    /** MEDIA_TYPE_PDF - PDF */
    MEDIA_TYPE_PDF = 5,
    /** MEDIA_TYPE_TIFF - TIIF */
    MEDIA_TYPE_TIFF = 16,
    /** MEDIA_TYPE_JPG - JPG */
    MEDIA_TYPE_JPG = 17,
    /** MEDIA_TYPE_PNG - PNG */
    MEDIA_TYPE_PNG = 18,
    /** MEDIA_TYPE_SVG - SVG */
    MEDIA_TYPE_SVG = 19,
    /** MEDIA_TYPE_WEBP - WEBP */
    MEDIA_TYPE_WEBP = 20,
    /** MEDIA_TYPE_AVIF - AVIF */
    MEDIA_TYPE_AVIF = 21,
    /** MEDIA_TYPE_GIF - GIF */
    MEDIA_TYPE_GIF = 22,
    /** MEDIA_TYPE_APNG - APNG */
    MEDIA_TYPE_APNG = 23,
    /** MEDIA_TYPE_MPEG - MPEG */
    MEDIA_TYPE_MPEG = 32,
    /** MEDIA_TYPE_MP4 - MP4 */
    MEDIA_TYPE_MP4 = 33,
    /** MEDIA_TYPE_WEBM - WEBM */
    MEDIA_TYPE_WEBM = 34,
    /** MEDIA_TYPE_OGG - OGG */
    MEDIA_TYPE_OGG = 35,
    UNRECOGNIZED = -1
}
export declare function mediaTypeFromJSON(object: any): MediaType;
export declare function mediaTypeToJSON(object: MediaType): string;
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
/** ContentHash specifies a hash based content identifier for a piece of data */
export interface ContentHash {
    /**
     * Raw specifies "raw" data which does not specify a deterministic,
     * canonical encoding. Users of these hashes MUST maintain a copy of the
     * hashed data which is preserved bit by bit. All other content encodings
     * specify a deterministic, canonical encoding allowing implementations to
     * choose from a variety of alternative formats for transport and encoding
     * while maintaining the guarantee that the canonical hash will not change.
     * The media type for "raw" data is defined by the MediaType enum.
     */
    raw?: ContentHash_Raw;
    /**
     * Graph specifies graph data that conforms to the RDF data model.
     * The canonicalization algorithm used for an RDF graph is specified by
     * GraphCanonicalizationAlgorithm.
     */
    graph?: ContentHash_Graph;
}
/** Raw is the content hash type used for raw data */
export interface ContentHash_Raw {
    /**
     * hash represents the hash of the data based on the specified
     * digest_algorithm
     */
    hash: Uint8Array;
    /** digest_algorithm represents the hash digest algorithm. */
    digestAlgorithm: DigestAlgorithm;
    /** media_type represents the MediaType for raw data. */
    mediaType: MediaType;
}
/** Graph is the content hash type used for RDF graph data */
export interface ContentHash_Graph {
    /**
     * hash represents the hash of the data based on the specified
     * digest_algorithm
     */
    hash: Uint8Array;
    /** digest_algorithm represents the hash digest algorithm. */
    digestAlgorithm: DigestAlgorithm;
    /**
     * graph_canonicalization_algorithm represents the RDF graph
     * canonicalization algorithm.
     */
    canonicalizationAlgorithm: GraphCanonicalizationAlgorithm;
    /** merkle_tree is the merkle tree type used for the graph hash, if any */
    merkleTree: GraphMerkleTree;
}
/** Content is a wrapper for content stored on-chain */
export interface Content {
    /** raw_data is the oneof field for raw data */
    rawData?: Uint8Array;
}
/** SignerEntry is a signer entry wrapping a signer address and timestamp */
export interface SignerEntry {
    /** signer is the address of the signer */
    signer: string;
    /** timestamp is the time at which the data was signed */
    timestamp: Date;
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
export declare const Content: {
    encode(message: Content, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Content;
    fromJSON(object: any): Content;
    toJSON(message: Content): unknown;
    fromPartial(object: DeepPartial<Content>): Content;
};
export declare const SignerEntry: {
    encode(message: SignerEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignerEntry;
    fromJSON(object: any): SignerEntry;
    toJSON(message: SignerEntry): unknown;
    fromPartial(object: DeepPartial<SignerEntry>): SignerEntry;
};
