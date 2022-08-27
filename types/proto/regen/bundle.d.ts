import * as _545 from "./data/v1/events";
import * as _546 from "./data/v1/query";
import * as _547 from "./data/v1/state";
import * as _548 from "./data/v1/tx";
import * as _549 from "./data/v1/types";
import * as _550 from "./data/v1alpha2/events";
import * as _551 from "./data/v1alpha2/genesis";
import * as _552 from "./data/v1alpha2/query";
import * as _553 from "./data/v1alpha2/tx";
import * as _554 from "./data/v1alpha2/types";
import * as _555 from "./ecocredit/basket/v1/events";
import * as _556 from "./ecocredit/basket/v1/query";
import * as _557 from "./ecocredit/basket/v1/state";
import * as _558 from "./ecocredit/basket/v1/tx";
import * as _559 from "./ecocredit/basket/v1/types";
import * as _560 from "./ecocredit/marketplace/v1/events";
import * as _561 from "./ecocredit/marketplace/v1/query";
import * as _562 from "./ecocredit/marketplace/v1/state";
import * as _563 from "./ecocredit/marketplace/v1/tx";
import * as _564 from "./ecocredit/marketplace/v1/types";
import * as _565 from "./ecocredit/orderbook/v1alpha1/memory";
import * as _566 from "./ecocredit/v1/events";
import * as _567 from "./ecocredit/v1/query";
import * as _568 from "./ecocredit/v1/state";
import * as _569 from "./ecocredit/v1/tx";
import * as _570 from "./ecocredit/v1/types";
import * as _571 from "./ecocredit/v1alpha1/events";
import * as _572 from "./ecocredit/v1alpha1/genesis";
import * as _573 from "./ecocredit/v1alpha1/query";
import * as _574 from "./ecocredit/v1alpha1/tx";
import * as _575 from "./ecocredit/v1alpha1/types";
import * as _576 from "./group/v1alpha1/events";
import * as _577 from "./group/v1alpha1/genesis";
import * as _578 from "./group/v1alpha1/query";
import * as _579 from "./group/v1alpha1/tx";
import * as _580 from "./group/v1alpha1/types";
export declare namespace regen {
    namespace data {
        const v1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    anchor(value: _548.MsgAnchor): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    attest(value: _548.MsgAttest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    defineResolver(value: _548.MsgDefineResolver): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    registerResolver(value: _548.MsgRegisterResolver): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    anchor(value: _548.MsgAnchor): {
                        typeUrl: string;
                        value: _548.MsgAnchor;
                    };
                    attest(value: _548.MsgAttest): {
                        typeUrl: string;
                        value: _548.MsgAttest;
                    };
                    defineResolver(value: _548.MsgDefineResolver): {
                        typeUrl: string;
                        value: _548.MsgDefineResolver;
                    };
                    registerResolver(value: _548.MsgRegisterResolver): {
                        typeUrl: string;
                        value: _548.MsgRegisterResolver;
                    };
                };
                toJSON: {
                    anchor(value: _548.MsgAnchor): {
                        typeUrl: string;
                        value: unknown;
                    };
                    attest(value: _548.MsgAttest): {
                        typeUrl: string;
                        value: unknown;
                    };
                    defineResolver(value: _548.MsgDefineResolver): {
                        typeUrl: string;
                        value: unknown;
                    };
                    registerResolver(value: _548.MsgRegisterResolver): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    anchor(value: any): {
                        typeUrl: string;
                        value: _548.MsgAnchor;
                    };
                    attest(value: any): {
                        typeUrl: string;
                        value: _548.MsgAttest;
                    };
                    defineResolver(value: any): {
                        typeUrl: string;
                        value: _548.MsgDefineResolver;
                    };
                    registerResolver(value: any): {
                        typeUrl: string;
                        value: _548.MsgRegisterResolver;
                    };
                };
                fromPartial: {
                    anchor(value: _548.MsgAnchor): {
                        typeUrl: string;
                        value: _548.MsgAnchor;
                    };
                    attest(value: _548.MsgAttest): {
                        typeUrl: string;
                        value: _548.MsgAttest;
                    };
                    defineResolver(value: _548.MsgDefineResolver): {
                        typeUrl: string;
                        value: _548.MsgDefineResolver;
                    };
                    registerResolver(value: _548.MsgRegisterResolver): {
                        typeUrl: string;
                        value: _548.MsgRegisterResolver;
                    };
                };
            };
            AminoConverter: {
                "/regen.data.v1.MsgAnchor": {
                    aminoType: string;
                    toAmino: ({ sender, contentHash }: _548.MsgAnchor) => {
                        sender: string;
                        content_hash: {
                            raw: {
                                hash: Uint8Array;
                                digest_algorithm: number;
                                media_type: number;
                            };
                            graph: {
                                hash: Uint8Array;
                                digest_algorithm: number;
                                canonicalization_algorithm: number;
                                merkle_tree: number;
                            };
                        };
                    };
                    fromAmino: ({ sender, content_hash }: {
                        sender: string;
                        content_hash: {
                            raw: {
                                hash: Uint8Array;
                                digest_algorithm: number;
                                media_type: number;
                            };
                            graph: {
                                hash: Uint8Array;
                                digest_algorithm: number;
                                canonicalization_algorithm: number;
                                merkle_tree: number;
                            };
                        };
                    }) => _548.MsgAnchor;
                };
                "/regen.data.v1.MsgAttest": {
                    aminoType: string;
                    toAmino: ({ attestor, contentHashes }: _548.MsgAttest) => {
                        attestor: string;
                        content_hashes: {
                            hash: Uint8Array;
                            digest_algorithm: number;
                            canonicalization_algorithm: number;
                            merkle_tree: number;
                        }[];
                    };
                    fromAmino: ({ attestor, content_hashes }: {
                        attestor: string;
                        content_hashes: {
                            hash: Uint8Array;
                            digest_algorithm: number;
                            canonicalization_algorithm: number;
                            merkle_tree: number;
                        }[];
                    }) => _548.MsgAttest;
                };
                "/regen.data.v1.MsgDefineResolver": {
                    aminoType: string;
                    toAmino: ({ manager, resolverUrl }: _548.MsgDefineResolver) => {
                        manager: string;
                        resolver_url: string;
                    };
                    fromAmino: ({ manager, resolver_url }: {
                        manager: string;
                        resolver_url: string;
                    }) => _548.MsgDefineResolver;
                };
                "/regen.data.v1.MsgRegisterResolver": {
                    aminoType: string;
                    toAmino: ({ manager, resolverId, contentHashes }: _548.MsgRegisterResolver) => {
                        manager: string;
                        resolver_id: string;
                        content_hashes: {
                            raw: {
                                hash: Uint8Array;
                                digest_algorithm: number;
                                media_type: number;
                            };
                            graph: {
                                hash: Uint8Array;
                                digest_algorithm: number;
                                canonicalization_algorithm: number;
                                merkle_tree: number;
                            };
                        }[];
                    };
                    fromAmino: ({ manager, resolver_id, content_hashes }: {
                        manager: string;
                        resolver_id: string;
                        content_hashes: {
                            raw: {
                                hash: Uint8Array;
                                digest_algorithm: number;
                                media_type: number;
                            };
                            graph: {
                                hash: Uint8Array;
                                digest_algorithm: number;
                                canonicalization_algorithm: number;
                                merkle_tree: number;
                            };
                        }[];
                    }) => _548.MsgRegisterResolver;
                };
            };
            digestAlgorithmFromJSON(object: any): _549.DigestAlgorithm;
            digestAlgorithmToJSON(object: _549.DigestAlgorithm): string;
            rawMediaTypeFromJSON(object: any): _549.RawMediaType;
            rawMediaTypeToJSON(object: _549.RawMediaType): string;
            graphCanonicalizationAlgorithmFromJSON(object: any): _549.GraphCanonicalizationAlgorithm;
            graphCanonicalizationAlgorithmToJSON(object: _549.GraphCanonicalizationAlgorithm): string;
            graphMerkleTreeFromJSON(object: any): _549.GraphMerkleTree;
            graphMerkleTreeToJSON(object: _549.GraphMerkleTree): string;
            DigestAlgorithm: typeof _549.DigestAlgorithm;
            RawMediaType: typeof _549.RawMediaType;
            GraphCanonicalizationAlgorithm: typeof _549.GraphCanonicalizationAlgorithm;
            GraphMerkleTree: typeof _549.GraphMerkleTree;
            ContentHash: {
                encode(message: _549.ContentHash, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _549.ContentHash;
                fromJSON(object: any): _549.ContentHash;
                toJSON(message: _549.ContentHash): unknown;
                fromPartial(object: {
                    raw?: {
                        hash?: Uint8Array;
                        digestAlgorithm?: _549.DigestAlgorithm;
                        mediaType?: _549.RawMediaType;
                    };
                    graph?: {
                        hash?: Uint8Array;
                        digestAlgorithm?: _549.DigestAlgorithm;
                        canonicalizationAlgorithm?: _549.GraphCanonicalizationAlgorithm;
                        merkleTree?: _549.GraphMerkleTree;
                    };
                }): _549.ContentHash;
            };
            ContentHash_Raw: {
                encode(message: _549.ContentHash_Raw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _549.ContentHash_Raw;
                fromJSON(object: any): _549.ContentHash_Raw;
                toJSON(message: _549.ContentHash_Raw): unknown;
                fromPartial(object: {
                    hash?: Uint8Array;
                    digestAlgorithm?: _549.DigestAlgorithm;
                    mediaType?: _549.RawMediaType;
                }): _549.ContentHash_Raw;
            };
            ContentHash_Graph: {
                encode(message: _549.ContentHash_Graph, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _549.ContentHash_Graph;
                fromJSON(object: any): _549.ContentHash_Graph;
                toJSON(message: _549.ContentHash_Graph): unknown;
                fromPartial(object: {
                    hash?: Uint8Array;
                    digestAlgorithm?: _549.DigestAlgorithm;
                    canonicalizationAlgorithm?: _549.GraphCanonicalizationAlgorithm;
                    merkleTree?: _549.GraphMerkleTree;
                }): _549.ContentHash_Graph;
            };
            ContentEntry: {
                encode(message: _549.ContentEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _549.ContentEntry;
                fromJSON(object: any): _549.ContentEntry;
                toJSON(message: _549.ContentEntry): unknown;
                fromPartial(object: {
                    contentHash?: {
                        raw?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _549.DigestAlgorithm;
                            mediaType?: _549.RawMediaType;
                        };
                        graph?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _549.DigestAlgorithm;
                            canonicalizationAlgorithm?: _549.GraphCanonicalizationAlgorithm;
                            merkleTree?: _549.GraphMerkleTree;
                        };
                    };
                    iri?: string;
                    timestamp?: Date;
                }): _549.ContentEntry;
            };
            AttestorEntry: {
                encode(message: _549.AttestorEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _549.AttestorEntry;
                fromJSON(object: any): _549.AttestorEntry;
                toJSON(message: _549.AttestorEntry): unknown;
                fromPartial(object: {
                    iri?: string;
                    attestor?: string;
                    timestamp?: Date;
                }): _549.AttestorEntry;
            };
            ContentHashes: {
                encode(message: _549.ContentHashes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _549.ContentHashes;
                fromJSON(object: any): _549.ContentHashes;
                toJSON(message: _549.ContentHashes): unknown;
                fromPartial(object: {
                    contentHashes?: {
                        raw?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _549.DigestAlgorithm;
                            mediaType?: _549.RawMediaType;
                        };
                        graph?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _549.DigestAlgorithm;
                            canonicalizationAlgorithm?: _549.GraphCanonicalizationAlgorithm;
                            merkleTree?: _549.GraphMerkleTree;
                        };
                    }[];
                }): _549.ContentHashes;
            };
            MsgAnchor: {
                encode(message: _548.MsgAnchor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _548.MsgAnchor;
                fromJSON(object: any): _548.MsgAnchor;
                toJSON(message: _548.MsgAnchor): unknown;
                fromPartial(object: {
                    sender?: string;
                    contentHash?: {
                        raw?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _549.DigestAlgorithm;
                            mediaType?: _549.RawMediaType;
                        };
                        graph?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _549.DigestAlgorithm;
                            canonicalizationAlgorithm?: _549.GraphCanonicalizationAlgorithm;
                            merkleTree?: _549.GraphMerkleTree;
                        };
                    };
                }): _548.MsgAnchor;
            };
            MsgAnchorResponse: {
                encode(message: _548.MsgAnchorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _548.MsgAnchorResponse;
                fromJSON(object: any): _548.MsgAnchorResponse;
                toJSON(message: _548.MsgAnchorResponse): unknown;
                fromPartial(object: {
                    iri?: string;
                    timestamp?: Date;
                }): _548.MsgAnchorResponse;
            };
            MsgAttest: {
                encode(message: _548.MsgAttest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _548.MsgAttest;
                fromJSON(object: any): _548.MsgAttest;
                toJSON(message: _548.MsgAttest): unknown;
                fromPartial(object: {
                    attestor?: string;
                    contentHashes?: {
                        hash?: Uint8Array;
                        digestAlgorithm?: _549.DigestAlgorithm;
                        canonicalizationAlgorithm?: _549.GraphCanonicalizationAlgorithm;
                        merkleTree?: _549.GraphMerkleTree;
                    }[];
                }): _548.MsgAttest;
            };
            MsgAttestResponse: {
                encode(message: _548.MsgAttestResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _548.MsgAttestResponse;
                fromJSON(object: any): _548.MsgAttestResponse;
                toJSON(message: _548.MsgAttestResponse): unknown;
                fromPartial(object: {
                    newEntries?: {
                        iri?: string;
                        attestor?: string;
                        timestamp?: Date;
                    }[];
                }): _548.MsgAttestResponse;
            };
            MsgDefineResolver: {
                encode(message: _548.MsgDefineResolver, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _548.MsgDefineResolver;
                fromJSON(object: any): _548.MsgDefineResolver;
                toJSON(message: _548.MsgDefineResolver): unknown;
                fromPartial(object: {
                    manager?: string;
                    resolverUrl?: string;
                }): _548.MsgDefineResolver;
            };
            MsgDefineResolverResponse: {
                encode(message: _548.MsgDefineResolverResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _548.MsgDefineResolverResponse;
                fromJSON(object: any): _548.MsgDefineResolverResponse;
                toJSON(message: _548.MsgDefineResolverResponse): unknown;
                fromPartial(object: {
                    resolverId?: any;
                }): _548.MsgDefineResolverResponse;
            };
            MsgRegisterResolver: {
                encode(message: _548.MsgRegisterResolver, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _548.MsgRegisterResolver;
                fromJSON(object: any): _548.MsgRegisterResolver;
                toJSON(message: _548.MsgRegisterResolver): unknown;
                fromPartial(object: {
                    manager?: string;
                    resolverId?: any;
                    contentHashes?: {
                        raw?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _549.DigestAlgorithm;
                            mediaType?: _549.RawMediaType;
                        };
                        graph?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _549.DigestAlgorithm;
                            canonicalizationAlgorithm?: _549.GraphCanonicalizationAlgorithm;
                            merkleTree?: _549.GraphMerkleTree;
                        };
                    }[];
                }): _548.MsgRegisterResolver;
            };
            MsgRegisterResolverResponse: {
                encode(_: _548.MsgRegisterResolverResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _548.MsgRegisterResolverResponse;
                fromJSON(_: any): _548.MsgRegisterResolverResponse;
                toJSON(_: _548.MsgRegisterResolverResponse): unknown;
                fromPartial(_: {}): _548.MsgRegisterResolverResponse;
            };
            DataID: {
                encode(message: _547.DataID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _547.DataID;
                fromJSON(object: any): _547.DataID;
                toJSON(message: _547.DataID): unknown;
                fromPartial(object: {
                    id?: Uint8Array;
                    iri?: string;
                }): _547.DataID;
            };
            DataAnchor: {
                encode(message: _547.DataAnchor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _547.DataAnchor;
                fromJSON(object: any): _547.DataAnchor;
                toJSON(message: _547.DataAnchor): unknown;
                fromPartial(object: {
                    id?: Uint8Array;
                    timestamp?: Date;
                }): _547.DataAnchor;
            };
            DataAttestor: {
                encode(message: _547.DataAttestor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _547.DataAttestor;
                fromJSON(object: any): _547.DataAttestor;
                toJSON(message: _547.DataAttestor): unknown;
                fromPartial(object: {
                    id?: Uint8Array;
                    attestor?: Uint8Array;
                    timestamp?: Date;
                }): _547.DataAttestor;
            };
            ResolverInfo: {
                encode(message: _547.ResolverInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _547.ResolverInfo;
                fromJSON(object: any): _547.ResolverInfo;
                toJSON(message: _547.ResolverInfo): unknown;
                fromPartial(object: {
                    id?: any;
                    url?: string;
                    manager?: Uint8Array;
                }): _547.ResolverInfo;
            };
            DataResolver: {
                encode(message: _547.DataResolver, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _547.DataResolver;
                fromJSON(object: any): _547.DataResolver;
                toJSON(message: _547.DataResolver): unknown;
                fromPartial(object: {
                    id?: Uint8Array;
                    resolverId?: any;
                }): _547.DataResolver;
            };
            QueryByIRIRequest: {
                encode(message: _546.QueryByIRIRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _546.QueryByIRIRequest;
                fromJSON(object: any): _546.QueryByIRIRequest;
                toJSON(message: _546.QueryByIRIRequest): unknown;
                fromPartial(object: {
                    iri?: string;
                }): _546.QueryByIRIRequest;
            };
            QueryByIRIResponse: {
                encode(message: _546.QueryByIRIResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _546.QueryByIRIResponse;
                fromJSON(object: any): _546.QueryByIRIResponse;
                toJSON(message: _546.QueryByIRIResponse): unknown;
                fromPartial(object: {
                    entry?: {
                        contentHash?: {
                            raw?: {
                                hash?: Uint8Array;
                                digestAlgorithm?: _549.DigestAlgorithm;
                                mediaType?: _549.RawMediaType;
                            };
                            graph?: {
                                hash?: Uint8Array;
                                digestAlgorithm?: _549.DigestAlgorithm;
                                canonicalizationAlgorithm?: _549.GraphCanonicalizationAlgorithm;
                                merkleTree?: _549.GraphMerkleTree;
                            };
                        };
                        iri?: string;
                        timestamp?: Date;
                    };
                }): _546.QueryByIRIResponse;
            };
            QueryByHashRequest: {
                encode(message: _546.QueryByHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _546.QueryByHashRequest;
                fromJSON(object: any): _546.QueryByHashRequest;
                toJSON(message: _546.QueryByHashRequest): unknown;
                fromPartial(object: {
                    contentHash?: {
                        raw?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _549.DigestAlgorithm;
                            mediaType?: _549.RawMediaType;
                        };
                        graph?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _549.DigestAlgorithm;
                            canonicalizationAlgorithm?: _549.GraphCanonicalizationAlgorithm;
                            merkleTree?: _549.GraphMerkleTree;
                        };
                    };
                }): _546.QueryByHashRequest;
            };
            QueryByHashResponse: {
                encode(message: _546.QueryByHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _546.QueryByHashResponse;
                fromJSON(object: any): _546.QueryByHashResponse;
                toJSON(message: _546.QueryByHashResponse): unknown;
                fromPartial(object: {
                    entry?: {
                        contentHash?: {
                            raw?: {
                                hash?: Uint8Array;
                                digestAlgorithm?: _549.DigestAlgorithm;
                                mediaType?: _549.RawMediaType;
                            };
                            graph?: {
                                hash?: Uint8Array;
                                digestAlgorithm?: _549.DigestAlgorithm;
                                canonicalizationAlgorithm?: _549.GraphCanonicalizationAlgorithm;
                                merkleTree?: _549.GraphMerkleTree;
                            };
                        };
                        iri?: string;
                        timestamp?: Date;
                    };
                }): _546.QueryByHashResponse;
            };
            QueryByAttestorRequest: {
                encode(message: _546.QueryByAttestorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _546.QueryByAttestorRequest;
                fromJSON(object: any): _546.QueryByAttestorRequest;
                toJSON(message: _546.QueryByAttestorRequest): unknown;
                fromPartial(object: {
                    attestor?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _546.QueryByAttestorRequest;
            };
            QueryByAttestorResponse: {
                encode(message: _546.QueryByAttestorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _546.QueryByAttestorResponse;
                fromJSON(object: any): _546.QueryByAttestorResponse;
                toJSON(message: _546.QueryByAttestorResponse): unknown;
                fromPartial(object: {
                    entries?: {
                        contentHash?: {
                            raw?: {
                                hash?: Uint8Array;
                                digestAlgorithm?: _549.DigestAlgorithm;
                                mediaType?: _549.RawMediaType;
                            };
                            graph?: {
                                hash?: Uint8Array;
                                digestAlgorithm?: _549.DigestAlgorithm;
                                canonicalizationAlgorithm?: _549.GraphCanonicalizationAlgorithm;
                                merkleTree?: _549.GraphMerkleTree;
                            };
                        };
                        iri?: string;
                        timestamp?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _546.QueryByAttestorResponse;
            };
            QueryIRIByHashRequest: {
                encode(message: _546.QueryIRIByHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _546.QueryIRIByHashRequest;
                fromJSON(object: any): _546.QueryIRIByHashRequest;
                toJSON(message: _546.QueryIRIByHashRequest): unknown;
                fromPartial(object: {
                    contentHash?: {
                        raw?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _549.DigestAlgorithm;
                            mediaType?: _549.RawMediaType;
                        };
                        graph?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _549.DigestAlgorithm;
                            canonicalizationAlgorithm?: _549.GraphCanonicalizationAlgorithm;
                            merkleTree?: _549.GraphMerkleTree;
                        };
                    };
                }): _546.QueryIRIByHashRequest;
            };
            QueryIRIByHashResponse: {
                encode(message: _546.QueryIRIByHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _546.QueryIRIByHashResponse;
                fromJSON(object: any): _546.QueryIRIByHashResponse;
                toJSON(message: _546.QueryIRIByHashResponse): unknown;
                fromPartial(object: {
                    iri?: string;
                }): _546.QueryIRIByHashResponse;
            };
            QueryIRIByRawHashRequest: {
                encode(message: _546.QueryIRIByRawHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _546.QueryIRIByRawHashRequest;
                fromJSON(object: any): _546.QueryIRIByRawHashRequest;
                toJSON(message: _546.QueryIRIByRawHashRequest): unknown;
                fromPartial(object: {
                    hash?: string;
                    digestAlgorithm?: _549.DigestAlgorithm;
                    mediaType?: _549.RawMediaType;
                }): _546.QueryIRIByRawHashRequest;
            };
            QueryIRIByRawHashResponse: {
                encode(message: _546.QueryIRIByRawHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _546.QueryIRIByRawHashResponse;
                fromJSON(object: any): _546.QueryIRIByRawHashResponse;
                toJSON(message: _546.QueryIRIByRawHashResponse): unknown;
                fromPartial(object: {
                    iri?: string;
                }): _546.QueryIRIByRawHashResponse;
            };
            QueryIRIByGraphHashRequest: {
                encode(message: _546.QueryIRIByGraphHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _546.QueryIRIByGraphHashRequest;
                fromJSON(object: any): _546.QueryIRIByGraphHashRequest;
                toJSON(message: _546.QueryIRIByGraphHashRequest): unknown;
                fromPartial(object: {
                    hash?: string;
                    digestAlgorithm?: _549.DigestAlgorithm;
                    canonicalizationAlgorithm?: _549.GraphCanonicalizationAlgorithm;
                    merkleTree?: _549.GraphMerkleTree;
                }): _546.QueryIRIByGraphHashRequest;
            };
            QueryIRIByGraphHashResponse: {
                encode(message: _546.QueryIRIByGraphHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _546.QueryIRIByGraphHashResponse;
                fromJSON(object: any): _546.QueryIRIByGraphHashResponse;
                toJSON(message: _546.QueryIRIByGraphHashResponse): unknown;
                fromPartial(object: {
                    iri?: string;
                }): _546.QueryIRIByGraphHashResponse;
            };
            QueryHashByIRIRequest: {
                encode(message: _546.QueryHashByIRIRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _546.QueryHashByIRIRequest;
                fromJSON(object: any): _546.QueryHashByIRIRequest;
                toJSON(message: _546.QueryHashByIRIRequest): unknown;
                fromPartial(object: {
                    iri?: string;
                }): _546.QueryHashByIRIRequest;
            };
            QueryHashByIRIResponse: {
                encode(message: _546.QueryHashByIRIResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _546.QueryHashByIRIResponse;
                fromJSON(object: any): _546.QueryHashByIRIResponse;
                toJSON(message: _546.QueryHashByIRIResponse): unknown;
                fromPartial(object: {
                    contentHash?: {
                        raw?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _549.DigestAlgorithm;
                            mediaType?: _549.RawMediaType;
                        };
                        graph?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _549.DigestAlgorithm;
                            canonicalizationAlgorithm?: _549.GraphCanonicalizationAlgorithm;
                            merkleTree?: _549.GraphMerkleTree;
                        };
                    };
                }): _546.QueryHashByIRIResponse;
            };
            QueryAttestorsByIRIRequest: {
                encode(message: _546.QueryAttestorsByIRIRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _546.QueryAttestorsByIRIRequest;
                fromJSON(object: any): _546.QueryAttestorsByIRIRequest;
                toJSON(message: _546.QueryAttestorsByIRIRequest): unknown;
                fromPartial(object: {
                    iri?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _546.QueryAttestorsByIRIRequest;
            };
            QueryAttestorsByIRIResponse: {
                encode(message: _546.QueryAttestorsByIRIResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _546.QueryAttestorsByIRIResponse;
                fromJSON(object: any): _546.QueryAttestorsByIRIResponse;
                toJSON(message: _546.QueryAttestorsByIRIResponse): unknown;
                fromPartial(object: {
                    attestors?: string[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _546.QueryAttestorsByIRIResponse;
            };
            QueryAttestorsByHashRequest: {
                encode(message: _546.QueryAttestorsByHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _546.QueryAttestorsByHashRequest;
                fromJSON(object: any): _546.QueryAttestorsByHashRequest;
                toJSON(message: _546.QueryAttestorsByHashRequest): unknown;
                fromPartial(object: {
                    contentHash?: {
                        raw?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _549.DigestAlgorithm;
                            mediaType?: _549.RawMediaType;
                        };
                        graph?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _549.DigestAlgorithm;
                            canonicalizationAlgorithm?: _549.GraphCanonicalizationAlgorithm;
                            merkleTree?: _549.GraphMerkleTree;
                        };
                    };
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _546.QueryAttestorsByHashRequest;
            };
            QueryAttestorsByHashResponse: {
                encode(message: _546.QueryAttestorsByHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _546.QueryAttestorsByHashResponse;
                fromJSON(object: any): _546.QueryAttestorsByHashResponse;
                toJSON(message: _546.QueryAttestorsByHashResponse): unknown;
                fromPartial(object: {
                    attestors?: string[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _546.QueryAttestorsByHashResponse;
            };
            QueryResolversByIRIRequest: {
                encode(message: _546.QueryResolversByIRIRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _546.QueryResolversByIRIRequest;
                fromJSON(object: any): _546.QueryResolversByIRIRequest;
                toJSON(message: _546.QueryResolversByIRIRequest): unknown;
                fromPartial(object: {
                    iri?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _546.QueryResolversByIRIRequest;
            };
            QueryResolversByIRIResponse: {
                encode(message: _546.QueryResolversByIRIResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _546.QueryResolversByIRIResponse;
                fromJSON(object: any): _546.QueryResolversByIRIResponse;
                toJSON(message: _546.QueryResolversByIRIResponse): unknown;
                fromPartial(object: {
                    resolverUrls?: string[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _546.QueryResolversByIRIResponse;
            };
            QueryResolversByHashRequest: {
                encode(message: _546.QueryResolversByHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _546.QueryResolversByHashRequest;
                fromJSON(object: any): _546.QueryResolversByHashRequest;
                toJSON(message: _546.QueryResolversByHashRequest): unknown;
                fromPartial(object: {
                    contentHash?: {
                        raw?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _549.DigestAlgorithm;
                            mediaType?: _549.RawMediaType;
                        };
                        graph?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _549.DigestAlgorithm;
                            canonicalizationAlgorithm?: _549.GraphCanonicalizationAlgorithm;
                            merkleTree?: _549.GraphMerkleTree;
                        };
                    };
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _546.QueryResolversByHashRequest;
            };
            QueryResolversByHashResponse: {
                encode(message: _546.QueryResolversByHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _546.QueryResolversByHashResponse;
                fromJSON(object: any): _546.QueryResolversByHashResponse;
                toJSON(message: _546.QueryResolversByHashResponse): unknown;
                fromPartial(object: {
                    resolverUrls?: string[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _546.QueryResolversByHashResponse;
            };
            QueryResolverInfoRequest: {
                encode(message: _546.QueryResolverInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _546.QueryResolverInfoRequest;
                fromJSON(object: any): _546.QueryResolverInfoRequest;
                toJSON(message: _546.QueryResolverInfoRequest): unknown;
                fromPartial(object: {
                    url?: string;
                }): _546.QueryResolverInfoRequest;
            };
            QueryResolverInfoResponse: {
                encode(message: _546.QueryResolverInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _546.QueryResolverInfoResponse;
                fromJSON(object: any): _546.QueryResolverInfoResponse;
                toJSON(message: _546.QueryResolverInfoResponse): unknown;
                fromPartial(object: {
                    id?: any;
                    manager?: string;
                }): _546.QueryResolverInfoResponse;
            };
            EventAnchor: {
                encode(message: _545.EventAnchor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _545.EventAnchor;
                fromJSON(object: any): _545.EventAnchor;
                toJSON(message: _545.EventAnchor): unknown;
                fromPartial(object: {
                    iri?: string;
                }): _545.EventAnchor;
            };
            EventAttest: {
                encode(message: _545.EventAttest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _545.EventAttest;
                fromJSON(object: any): _545.EventAttest;
                toJSON(message: _545.EventAttest): unknown;
                fromPartial(object: {
                    iri?: string;
                    attestor?: string;
                }): _545.EventAttest;
            };
            EventDefineResolver: {
                encode(message: _545.EventDefineResolver, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _545.EventDefineResolver;
                fromJSON(object: any): _545.EventDefineResolver;
                toJSON(message: _545.EventDefineResolver): unknown;
                fromPartial(object: {
                    id?: any;
                }): _545.EventDefineResolver;
            };
            EventRegisterResolver: {
                encode(message: _545.EventRegisterResolver, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _545.EventRegisterResolver;
                fromJSON(object: any): _545.EventRegisterResolver;
                toJSON(message: _545.EventRegisterResolver): unknown;
                fromPartial(object: {
                    id?: any;
                    iri?: string;
                }): _545.EventRegisterResolver;
            };
        };
        const v1alpha2: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    anchorData(value: _553.MsgAnchorData): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    signData(value: _553.MsgSignData): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    storeRawData(value: _553.MsgStoreRawData): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    anchorData(value: _553.MsgAnchorData): {
                        typeUrl: string;
                        value: _553.MsgAnchorData;
                    };
                    signData(value: _553.MsgSignData): {
                        typeUrl: string;
                        value: _553.MsgSignData;
                    };
                    storeRawData(value: _553.MsgStoreRawData): {
                        typeUrl: string;
                        value: _553.MsgStoreRawData;
                    };
                };
                toJSON: {
                    anchorData(value: _553.MsgAnchorData): {
                        typeUrl: string;
                        value: unknown;
                    };
                    signData(value: _553.MsgSignData): {
                        typeUrl: string;
                        value: unknown;
                    };
                    storeRawData(value: _553.MsgStoreRawData): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    anchorData(value: any): {
                        typeUrl: string;
                        value: _553.MsgAnchorData;
                    };
                    signData(value: any): {
                        typeUrl: string;
                        value: _553.MsgSignData;
                    };
                    storeRawData(value: any): {
                        typeUrl: string;
                        value: _553.MsgStoreRawData;
                    };
                };
                fromPartial: {
                    anchorData(value: _553.MsgAnchorData): {
                        typeUrl: string;
                        value: _553.MsgAnchorData;
                    };
                    signData(value: _553.MsgSignData): {
                        typeUrl: string;
                        value: _553.MsgSignData;
                    };
                    storeRawData(value: _553.MsgStoreRawData): {
                        typeUrl: string;
                        value: _553.MsgStoreRawData;
                    };
                };
            };
            AminoConverter: {
                "/regen.data.v1alpha2.MsgAnchorData": {
                    aminoType: string;
                    toAmino: ({ sender, hash }: _553.MsgAnchorData) => {
                        sender: string;
                        hash: {
                            raw: {
                                hash: Uint8Array;
                                digest_algorithm: number;
                                media_type: number;
                            };
                            graph: {
                                hash: Uint8Array;
                                digest_algorithm: number;
                                canonicalization_algorithm: number;
                                merkle_tree: number;
                            };
                        };
                    };
                    fromAmino: ({ sender, hash }: {
                        sender: string;
                        hash: {
                            raw: {
                                hash: Uint8Array;
                                digest_algorithm: number;
                                media_type: number;
                            };
                            graph: {
                                hash: Uint8Array;
                                digest_algorithm: number;
                                canonicalization_algorithm: number;
                                merkle_tree: number;
                            };
                        };
                    }) => _553.MsgAnchorData;
                };
                "/regen.data.v1alpha2.MsgSignData": {
                    aminoType: string;
                    toAmino: ({ signers, hash }: _553.MsgSignData) => {
                        signers: string[];
                        hash: {
                            hash: Uint8Array;
                            digest_algorithm: number;
                            canonicalization_algorithm: number;
                            merkle_tree: number;
                        };
                    };
                    fromAmino: ({ signers, hash }: {
                        signers: string[];
                        hash: {
                            hash: Uint8Array;
                            digest_algorithm: number;
                            canonicalization_algorithm: number;
                            merkle_tree: number;
                        };
                    }) => _553.MsgSignData;
                };
                "/regen.data.v1alpha2.MsgStoreRawData": {
                    aminoType: string;
                    toAmino: ({ sender, contentHash, content }: _553.MsgStoreRawData) => {
                        sender: string;
                        content_hash: {
                            hash: Uint8Array;
                            digest_algorithm: number;
                            media_type: number;
                        };
                        content: Uint8Array;
                    };
                    fromAmino: ({ sender, content_hash, content }: {
                        sender: string;
                        content_hash: {
                            hash: Uint8Array;
                            digest_algorithm: number;
                            media_type: number;
                        };
                        content: Uint8Array;
                    }) => _553.MsgStoreRawData;
                };
            };
            mediaTypeFromJSON(object: any): _554.MediaType;
            mediaTypeToJSON(object: _554.MediaType): string;
            graphCanonicalizationAlgorithmFromJSON(object: any): _554.GraphCanonicalizationAlgorithm;
            graphCanonicalizationAlgorithmToJSON(object: _554.GraphCanonicalizationAlgorithm): string;
            graphMerkleTreeFromJSON(object: any): _554.GraphMerkleTree;
            graphMerkleTreeToJSON(object: _554.GraphMerkleTree): string;
            digestAlgorithmFromJSON(object: any): _554.DigestAlgorithm;
            digestAlgorithmToJSON(object: _554.DigestAlgorithm): string;
            MediaType: typeof _554.MediaType;
            GraphCanonicalizationAlgorithm: typeof _554.GraphCanonicalizationAlgorithm;
            GraphMerkleTree: typeof _554.GraphMerkleTree;
            DigestAlgorithm: typeof _554.DigestAlgorithm;
            ContentHash: {
                encode(message: _554.ContentHash, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _554.ContentHash;
                fromJSON(object: any): _554.ContentHash;
                toJSON(message: _554.ContentHash): unknown;
                fromPartial(object: {
                    raw?: {
                        hash?: Uint8Array;
                        digestAlgorithm?: _554.DigestAlgorithm;
                        mediaType?: _554.MediaType;
                    };
                    graph?: {
                        hash?: Uint8Array;
                        digestAlgorithm?: _554.DigestAlgorithm;
                        canonicalizationAlgorithm?: _554.GraphCanonicalizationAlgorithm;
                        merkleTree?: _554.GraphMerkleTree;
                    };
                }): _554.ContentHash;
            };
            ContentHash_Raw: {
                encode(message: _554.ContentHash_Raw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _554.ContentHash_Raw;
                fromJSON(object: any): _554.ContentHash_Raw;
                toJSON(message: _554.ContentHash_Raw): unknown;
                fromPartial(object: {
                    hash?: Uint8Array;
                    digestAlgorithm?: _554.DigestAlgorithm;
                    mediaType?: _554.MediaType;
                }): _554.ContentHash_Raw;
            };
            ContentHash_Graph: {
                encode(message: _554.ContentHash_Graph, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _554.ContentHash_Graph;
                fromJSON(object: any): _554.ContentHash_Graph;
                toJSON(message: _554.ContentHash_Graph): unknown;
                fromPartial(object: {
                    hash?: Uint8Array;
                    digestAlgorithm?: _554.DigestAlgorithm;
                    canonicalizationAlgorithm?: _554.GraphCanonicalizationAlgorithm;
                    merkleTree?: _554.GraphMerkleTree;
                }): _554.ContentHash_Graph;
            };
            Content: {
                encode(message: _554.Content, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _554.Content;
                fromJSON(object: any): _554.Content;
                toJSON(message: _554.Content): unknown;
                fromPartial(object: {
                    rawData?: Uint8Array;
                }): _554.Content;
            };
            SignerEntry: {
                encode(message: _554.SignerEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _554.SignerEntry;
                fromJSON(object: any): _554.SignerEntry;
                toJSON(message: _554.SignerEntry): unknown;
                fromPartial(object: {
                    signer?: string;
                    timestamp?: Date;
                }): _554.SignerEntry;
            };
            MsgAnchorData: {
                encode(message: _553.MsgAnchorData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _553.MsgAnchorData;
                fromJSON(object: any): _553.MsgAnchorData;
                toJSON(message: _553.MsgAnchorData): unknown;
                fromPartial(object: {
                    sender?: string;
                    hash?: {
                        raw?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _554.DigestAlgorithm;
                            mediaType?: _554.MediaType;
                        };
                        graph?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _554.DigestAlgorithm;
                            canonicalizationAlgorithm?: _554.GraphCanonicalizationAlgorithm;
                            merkleTree?: _554.GraphMerkleTree;
                        };
                    };
                }): _553.MsgAnchorData;
            };
            MsgAnchorDataResponse: {
                encode(message: _553.MsgAnchorDataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _553.MsgAnchorDataResponse;
                fromJSON(object: any): _553.MsgAnchorDataResponse;
                toJSON(message: _553.MsgAnchorDataResponse): unknown;
                fromPartial(object: {
                    timestamp?: Date;
                }): _553.MsgAnchorDataResponse;
            };
            MsgSignData: {
                encode(message: _553.MsgSignData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _553.MsgSignData;
                fromJSON(object: any): _553.MsgSignData;
                toJSON(message: _553.MsgSignData): unknown;
                fromPartial(object: {
                    signers?: string[];
                    hash?: {
                        hash?: Uint8Array;
                        digestAlgorithm?: _554.DigestAlgorithm;
                        canonicalizationAlgorithm?: _554.GraphCanonicalizationAlgorithm;
                        merkleTree?: _554.GraphMerkleTree;
                    };
                }): _553.MsgSignData;
            };
            MsgSignDataResponse: {
                encode(_: _553.MsgSignDataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _553.MsgSignDataResponse;
                fromJSON(_: any): _553.MsgSignDataResponse;
                toJSON(_: _553.MsgSignDataResponse): unknown;
                fromPartial(_: {}): _553.MsgSignDataResponse;
            };
            MsgStoreRawData: {
                encode(message: _553.MsgStoreRawData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _553.MsgStoreRawData;
                fromJSON(object: any): _553.MsgStoreRawData;
                toJSON(message: _553.MsgStoreRawData): unknown;
                fromPartial(object: {
                    sender?: string;
                    contentHash?: {
                        hash?: Uint8Array;
                        digestAlgorithm?: _554.DigestAlgorithm;
                        mediaType?: _554.MediaType;
                    };
                    content?: Uint8Array;
                }): _553.MsgStoreRawData;
            };
            MsgStoreRawDataResponse: {
                encode(_: _553.MsgStoreRawDataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _553.MsgStoreRawDataResponse;
                fromJSON(_: any): _553.MsgStoreRawDataResponse;
                toJSON(_: _553.MsgStoreRawDataResponse): unknown;
                fromPartial(_: {}): _553.MsgStoreRawDataResponse;
            };
            QueryByHashRequest: {
                encode(message: _552.QueryByHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _552.QueryByHashRequest;
                fromJSON(object: any): _552.QueryByHashRequest;
                toJSON(message: _552.QueryByHashRequest): unknown;
                fromPartial(object: {
                    hash?: {
                        raw?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _554.DigestAlgorithm;
                            mediaType?: _554.MediaType;
                        };
                        graph?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _554.DigestAlgorithm;
                            canonicalizationAlgorithm?: _554.GraphCanonicalizationAlgorithm;
                            merkleTree?: _554.GraphMerkleTree;
                        };
                    };
                }): _552.QueryByHashRequest;
            };
            QueryByHashResponse: {
                encode(message: _552.QueryByHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _552.QueryByHashResponse;
                fromJSON(object: any): _552.QueryByHashResponse;
                toJSON(message: _552.QueryByHashResponse): unknown;
                fromPartial(object: {
                    entry?: {
                        hash?: {
                            raw?: {
                                hash?: Uint8Array;
                                digestAlgorithm?: _554.DigestAlgorithm;
                                mediaType?: _554.MediaType;
                            };
                            graph?: {
                                hash?: Uint8Array;
                                digestAlgorithm?: _554.DigestAlgorithm;
                                canonicalizationAlgorithm?: _554.GraphCanonicalizationAlgorithm;
                                merkleTree?: _554.GraphMerkleTree;
                            };
                        };
                        iri?: string;
                        timestamp?: Date;
                        signers?: {
                            signer?: string;
                            timestamp?: Date;
                        }[];
                        content?: {
                            rawData?: Uint8Array;
                        };
                    };
                }): _552.QueryByHashResponse;
            };
            QueryBySignerRequest: {
                encode(message: _552.QueryBySignerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _552.QueryBySignerRequest;
                fromJSON(object: any): _552.QueryBySignerRequest;
                toJSON(message: _552.QueryBySignerRequest): unknown;
                fromPartial(object: {
                    signer?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _552.QueryBySignerRequest;
            };
            QueryBySignerResponse: {
                encode(message: _552.QueryBySignerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _552.QueryBySignerResponse;
                fromJSON(object: any): _552.QueryBySignerResponse;
                toJSON(message: _552.QueryBySignerResponse): unknown;
                fromPartial(object: {
                    entries?: {
                        hash?: {
                            raw?: {
                                hash?: Uint8Array;
                                digestAlgorithm?: _554.DigestAlgorithm;
                                mediaType?: _554.MediaType;
                            };
                            graph?: {
                                hash?: Uint8Array;
                                digestAlgorithm?: _554.DigestAlgorithm;
                                canonicalizationAlgorithm?: _554.GraphCanonicalizationAlgorithm;
                                merkleTree?: _554.GraphMerkleTree;
                            };
                        };
                        iri?: string;
                        timestamp?: Date;
                        signers?: {
                            signer?: string;
                            timestamp?: Date;
                        }[];
                        content?: {
                            rawData?: Uint8Array;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _552.QueryBySignerResponse;
            };
            ContentEntry: {
                encode(message: _552.ContentEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _552.ContentEntry;
                fromJSON(object: any): _552.ContentEntry;
                toJSON(message: _552.ContentEntry): unknown;
                fromPartial(object: {
                    hash?: {
                        raw?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _554.DigestAlgorithm;
                            mediaType?: _554.MediaType;
                        };
                        graph?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _554.DigestAlgorithm;
                            canonicalizationAlgorithm?: _554.GraphCanonicalizationAlgorithm;
                            merkleTree?: _554.GraphMerkleTree;
                        };
                    };
                    iri?: string;
                    timestamp?: Date;
                    signers?: {
                        signer?: string;
                        timestamp?: Date;
                    }[];
                    content?: {
                        rawData?: Uint8Array;
                    };
                }): _552.ContentEntry;
            };
            GenesisState: {
                encode(message: _551.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _551.GenesisState;
                fromJSON(object: any): _551.GenesisState;
                toJSON(message: _551.GenesisState): unknown;
                fromPartial(object: {
                    entries?: {
                        hash?: {
                            raw?: {
                                hash?: Uint8Array;
                                digestAlgorithm?: _554.DigestAlgorithm;
                                mediaType?: _554.MediaType;
                            };
                            graph?: {
                                hash?: Uint8Array;
                                digestAlgorithm?: _554.DigestAlgorithm;
                                canonicalizationAlgorithm?: _554.GraphCanonicalizationAlgorithm;
                                merkleTree?: _554.GraphMerkleTree;
                            };
                        };
                        timestamp?: Date;
                        signers?: {
                            signer?: string;
                            timestamp?: Date;
                        }[];
                        content?: {
                            rawData?: Uint8Array;
                        };
                    }[];
                }): _551.GenesisState;
            };
            GenesisContentEntry: {
                encode(message: _551.GenesisContentEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _551.GenesisContentEntry;
                fromJSON(object: any): _551.GenesisContentEntry;
                toJSON(message: _551.GenesisContentEntry): unknown;
                fromPartial(object: {
                    hash?: {
                        raw?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _554.DigestAlgorithm;
                            mediaType?: _554.MediaType;
                        };
                        graph?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _554.DigestAlgorithm;
                            canonicalizationAlgorithm?: _554.GraphCanonicalizationAlgorithm;
                            merkleTree?: _554.GraphMerkleTree;
                        };
                    };
                    timestamp?: Date;
                    signers?: {
                        signer?: string;
                        timestamp?: Date;
                    }[];
                    content?: {
                        rawData?: Uint8Array;
                    };
                }): _551.GenesisContentEntry;
            };
            EventAnchorData: {
                encode(message: _550.EventAnchorData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _550.EventAnchorData;
                fromJSON(object: any): _550.EventAnchorData;
                toJSON(message: _550.EventAnchorData): unknown;
                fromPartial(object: {
                    iri?: string;
                }): _550.EventAnchorData;
            };
            EventSignData: {
                encode(message: _550.EventSignData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _550.EventSignData;
                fromJSON(object: any): _550.EventSignData;
                toJSON(message: _550.EventSignData): unknown;
                fromPartial(object: {
                    iri?: string;
                    signers?: string[];
                }): _550.EventSignData;
            };
            EventStoreRawData: {
                encode(message: _550.EventStoreRawData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _550.EventStoreRawData;
                fromJSON(object: any): _550.EventStoreRawData;
                toJSON(message: _550.EventStoreRawData): unknown;
                fromPartial(object: {
                    iri?: string;
                }): _550.EventStoreRawData;
            };
        };
    }
    namespace ecocredit {
        namespace basket {
            const v1: {
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        create(value: _558.MsgCreate): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        put(value: _558.MsgPut): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        take(value: _558.MsgTake): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        create(value: _558.MsgCreate): {
                            typeUrl: string;
                            value: _558.MsgCreate;
                        };
                        put(value: _558.MsgPut): {
                            typeUrl: string;
                            value: _558.MsgPut;
                        };
                        take(value: _558.MsgTake): {
                            typeUrl: string;
                            value: _558.MsgTake;
                        };
                    };
                    toJSON: {
                        create(value: _558.MsgCreate): {
                            typeUrl: string;
                            value: unknown;
                        };
                        put(value: _558.MsgPut): {
                            typeUrl: string;
                            value: unknown;
                        };
                        take(value: _558.MsgTake): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        create(value: any): {
                            typeUrl: string;
                            value: _558.MsgCreate;
                        };
                        put(value: any): {
                            typeUrl: string;
                            value: _558.MsgPut;
                        };
                        take(value: any): {
                            typeUrl: string;
                            value: _558.MsgTake;
                        };
                    };
                    fromPartial: {
                        create(value: _558.MsgCreate): {
                            typeUrl: string;
                            value: _558.MsgCreate;
                        };
                        put(value: _558.MsgPut): {
                            typeUrl: string;
                            value: _558.MsgPut;
                        };
                        take(value: _558.MsgTake): {
                            typeUrl: string;
                            value: _558.MsgTake;
                        };
                    };
                };
                AminoConverter: {
                    "/regen.ecocredit.basket.v1.MsgCreate": {
                        aminoType: string;
                        toAmino: ({ curator, name, description, exponent, disableAutoRetire, creditTypeAbbrev, allowedClasses, dateCriteria, fee }: _558.MsgCreate) => {
                            curator: string;
                            name: string;
                            description: string;
                            exponent: number;
                            disable_auto_retire: boolean;
                            credit_type_abbrev: string;
                            allowed_classes: string[];
                            date_criteria: {
                                min_start_date: {
                                    seconds: string;
                                    nanos: number;
                                };
                                start_date_window: string;
                                years_in_the_past: number;
                            };
                            fee: {
                                denom: string;
                                amount: string;
                            }[];
                        };
                        fromAmino: ({ curator, name, description, exponent, disable_auto_retire, credit_type_abbrev, allowed_classes, date_criteria, fee }: {
                            curator: string;
                            name: string;
                            description: string;
                            exponent: number;
                            disable_auto_retire: boolean;
                            credit_type_abbrev: string;
                            allowed_classes: string[];
                            date_criteria: {
                                min_start_date: {
                                    seconds: string;
                                    nanos: number;
                                };
                                start_date_window: string;
                                years_in_the_past: number;
                            };
                            fee: {
                                denom: string;
                                amount: string;
                            }[];
                        }) => _558.MsgCreate;
                    };
                    "/regen.ecocredit.basket.v1.MsgPut": {
                        aminoType: string;
                        toAmino: ({ owner, basketDenom, credits }: _558.MsgPut) => {
                            owner: string;
                            basket_denom: string;
                            credits: {
                                batch_denom: string;
                                amount: string;
                            }[];
                        };
                        fromAmino: ({ owner, basket_denom, credits }: {
                            owner: string;
                            basket_denom: string;
                            credits: {
                                batch_denom: string;
                                amount: string;
                            }[];
                        }) => _558.MsgPut;
                    };
                    "/regen.ecocredit.basket.v1.MsgTake": {
                        aminoType: string;
                        toAmino: ({ owner, basketDenom, amount, retirementJurisdiction, retireOnTake }: _558.MsgTake) => {
                            owner: string;
                            basket_denom: string;
                            amount: string;
                            retirement_jurisdiction: string;
                            retire_on_take: boolean;
                        };
                        fromAmino: ({ owner, basket_denom, amount, retirement_jurisdiction, retire_on_take }: {
                            owner: string;
                            basket_denom: string;
                            amount: string;
                            retirement_jurisdiction: string;
                            retire_on_take: boolean;
                        }) => _558.MsgTake;
                    };
                };
                BasketCredit: {
                    encode(message: _559.BasketCredit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _559.BasketCredit;
                    fromJSON(object: any): _559.BasketCredit;
                    toJSON(message: _559.BasketCredit): unknown;
                    fromPartial(object: {
                        batchDenom?: string;
                        amount?: string;
                    }): _559.BasketCredit;
                };
                DateCriteria: {
                    encode(message: _559.DateCriteria, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _559.DateCriteria;
                    fromJSON(object: any): _559.DateCriteria;
                    toJSON(message: _559.DateCriteria): unknown;
                    fromPartial(object: {
                        minStartDate?: Date;
                        startDateWindow?: string;
                        yearsInThePast?: number;
                    }): _559.DateCriteria;
                };
                MsgCreate: {
                    encode(message: _558.MsgCreate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _558.MsgCreate;
                    fromJSON(object: any): _558.MsgCreate;
                    toJSON(message: _558.MsgCreate): unknown;
                    fromPartial(object: {
                        curator?: string;
                        name?: string;
                        description?: string;
                        exponent?: number;
                        disableAutoRetire?: boolean;
                        creditTypeAbbrev?: string;
                        allowedClasses?: string[];
                        dateCriteria?: {
                            minStartDate?: Date;
                            startDateWindow?: string;
                            yearsInThePast?: number;
                        };
                        fee?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }): _558.MsgCreate;
                };
                MsgCreateResponse: {
                    encode(message: _558.MsgCreateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _558.MsgCreateResponse;
                    fromJSON(object: any): _558.MsgCreateResponse;
                    toJSON(message: _558.MsgCreateResponse): unknown;
                    fromPartial(object: {
                        basketDenom?: string;
                    }): _558.MsgCreateResponse;
                };
                MsgPut: {
                    encode(message: _558.MsgPut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _558.MsgPut;
                    fromJSON(object: any): _558.MsgPut;
                    toJSON(message: _558.MsgPut): unknown;
                    fromPartial(object: {
                        owner?: string;
                        basketDenom?: string;
                        credits?: {
                            batchDenom?: string;
                            amount?: string;
                        }[];
                    }): _558.MsgPut;
                };
                MsgPutResponse: {
                    encode(message: _558.MsgPutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _558.MsgPutResponse;
                    fromJSON(object: any): _558.MsgPutResponse;
                    toJSON(message: _558.MsgPutResponse): unknown;
                    fromPartial(object: {
                        amountReceived?: string;
                    }): _558.MsgPutResponse;
                };
                MsgTake: {
                    encode(message: _558.MsgTake, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _558.MsgTake;
                    fromJSON(object: any): _558.MsgTake;
                    toJSON(message: _558.MsgTake): unknown;
                    fromPartial(object: {
                        owner?: string;
                        basketDenom?: string;
                        amount?: string;
                        retirementJurisdiction?: string;
                        retireOnTake?: boolean;
                    }): _558.MsgTake;
                };
                MsgTakeResponse: {
                    encode(message: _558.MsgTakeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _558.MsgTakeResponse;
                    fromJSON(object: any): _558.MsgTakeResponse;
                    toJSON(message: _558.MsgTakeResponse): unknown;
                    fromPartial(object: {
                        credits?: {
                            batchDenom?: string;
                            amount?: string;
                        }[];
                    }): _558.MsgTakeResponse;
                };
                Basket: {
                    encode(message: _557.Basket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _557.Basket;
                    fromJSON(object: any): _557.Basket;
                    toJSON(message: _557.Basket): unknown;
                    fromPartial(object: {
                        id?: any;
                        basketDenom?: string;
                        name?: string;
                        disableAutoRetire?: boolean;
                        creditTypeAbbrev?: string;
                        dateCriteria?: {
                            minStartDate?: Date;
                            startDateWindow?: string;
                            yearsInThePast?: number;
                        };
                        exponent?: number;
                        curator?: Uint8Array;
                    }): _557.Basket;
                };
                BasketClass: {
                    encode(message: _557.BasketClass, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _557.BasketClass;
                    fromJSON(object: any): _557.BasketClass;
                    toJSON(message: _557.BasketClass): unknown;
                    fromPartial(object: {
                        basketId?: any;
                        classId?: string;
                    }): _557.BasketClass;
                };
                BasketBalance: {
                    encode(message: _557.BasketBalance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _557.BasketBalance;
                    fromJSON(object: any): _557.BasketBalance;
                    toJSON(message: _557.BasketBalance): unknown;
                    fromPartial(object: {
                        basketId?: any;
                        batchDenom?: string;
                        balance?: string;
                        batchStartDate?: Date;
                    }): _557.BasketBalance;
                };
                QueryBasketRequest: {
                    encode(message: _556.QueryBasketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.QueryBasketRequest;
                    fromJSON(object: any): _556.QueryBasketRequest;
                    toJSON(message: _556.QueryBasketRequest): unknown;
                    fromPartial(object: {
                        basketDenom?: string;
                    }): _556.QueryBasketRequest;
                };
                QueryBasketResponse: {
                    encode(message: _556.QueryBasketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.QueryBasketResponse;
                    fromJSON(object: any): _556.QueryBasketResponse;
                    toJSON(message: _556.QueryBasketResponse): unknown;
                    fromPartial(object: {
                        basket?: {
                            id?: any;
                            basketDenom?: string;
                            name?: string;
                            disableAutoRetire?: boolean;
                            creditTypeAbbrev?: string;
                            dateCriteria?: {
                                minStartDate?: Date;
                                startDateWindow?: string;
                                yearsInThePast?: number;
                            };
                            exponent?: number;
                            curator?: Uint8Array;
                        };
                        classes?: string[];
                        basketInfo?: {
                            basketDenom?: string;
                            name?: string;
                            disableAutoRetire?: boolean;
                            creditTypeAbbrev?: string;
                            dateCriteria?: {
                                minStartDate?: Date;
                                startDateWindow?: string;
                                yearsInThePast?: number;
                            };
                            exponent?: number;
                            curator?: string;
                        };
                    }): _556.QueryBasketResponse;
                };
                QueryBasketsRequest: {
                    encode(message: _556.QueryBasketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.QueryBasketsRequest;
                    fromJSON(object: any): _556.QueryBasketsRequest;
                    toJSON(message: _556.QueryBasketsRequest): unknown;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _556.QueryBasketsRequest;
                };
                QueryBasketsResponse: {
                    encode(message: _556.QueryBasketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.QueryBasketsResponse;
                    fromJSON(object: any): _556.QueryBasketsResponse;
                    toJSON(message: _556.QueryBasketsResponse): unknown;
                    fromPartial(object: {
                        baskets?: {
                            id?: any;
                            basketDenom?: string;
                            name?: string;
                            disableAutoRetire?: boolean;
                            creditTypeAbbrev?: string;
                            dateCriteria?: {
                                minStartDate?: Date;
                                startDateWindow?: string;
                                yearsInThePast?: number;
                            };
                            exponent?: number;
                            curator?: Uint8Array;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                        basketsInfo?: {
                            basketDenom?: string;
                            name?: string;
                            disableAutoRetire?: boolean;
                            creditTypeAbbrev?: string;
                            dateCriteria?: {
                                minStartDate?: Date;
                                startDateWindow?: string;
                                yearsInThePast?: number;
                            };
                            exponent?: number;
                            curator?: string;
                        }[];
                    }): _556.QueryBasketsResponse;
                };
                QueryBasketBalancesRequest: {
                    encode(message: _556.QueryBasketBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.QueryBasketBalancesRequest;
                    fromJSON(object: any): _556.QueryBasketBalancesRequest;
                    toJSON(message: _556.QueryBasketBalancesRequest): unknown;
                    fromPartial(object: {
                        basketDenom?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _556.QueryBasketBalancesRequest;
                };
                QueryBasketBalancesResponse: {
                    encode(message: _556.QueryBasketBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.QueryBasketBalancesResponse;
                    fromJSON(object: any): _556.QueryBasketBalancesResponse;
                    toJSON(message: _556.QueryBasketBalancesResponse): unknown;
                    fromPartial(object: {
                        balances?: {
                            basketId?: any;
                            batchDenom?: string;
                            balance?: string;
                            batchStartDate?: Date;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                        balancesInfo?: {
                            batchDenom?: string;
                            balance?: string;
                        }[];
                    }): _556.QueryBasketBalancesResponse;
                };
                QueryBasketBalanceRequest: {
                    encode(message: _556.QueryBasketBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.QueryBasketBalanceRequest;
                    fromJSON(object: any): _556.QueryBasketBalanceRequest;
                    toJSON(message: _556.QueryBasketBalanceRequest): unknown;
                    fromPartial(object: {
                        basketDenom?: string;
                        batchDenom?: string;
                    }): _556.QueryBasketBalanceRequest;
                };
                QueryBasketBalanceResponse: {
                    encode(message: _556.QueryBasketBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.QueryBasketBalanceResponse;
                    fromJSON(object: any): _556.QueryBasketBalanceResponse;
                    toJSON(message: _556.QueryBasketBalanceResponse): unknown;
                    fromPartial(object: {
                        balance?: string;
                    }): _556.QueryBasketBalanceResponse;
                };
                BasketInfo: {
                    encode(message: _556.BasketInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.BasketInfo;
                    fromJSON(object: any): _556.BasketInfo;
                    toJSON(message: _556.BasketInfo): unknown;
                    fromPartial(object: {
                        basketDenom?: string;
                        name?: string;
                        disableAutoRetire?: boolean;
                        creditTypeAbbrev?: string;
                        dateCriteria?: {
                            minStartDate?: Date;
                            startDateWindow?: string;
                            yearsInThePast?: number;
                        };
                        exponent?: number;
                        curator?: string;
                    }): _556.BasketInfo;
                };
                BasketBalanceInfo: {
                    encode(message: _556.BasketBalanceInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.BasketBalanceInfo;
                    fromJSON(object: any): _556.BasketBalanceInfo;
                    toJSON(message: _556.BasketBalanceInfo): unknown;
                    fromPartial(object: {
                        batchDenom?: string;
                        balance?: string;
                    }): _556.BasketBalanceInfo;
                };
                EventCreate: {
                    encode(message: _555.EventCreate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _555.EventCreate;
                    fromJSON(object: any): _555.EventCreate;
                    toJSON(message: _555.EventCreate): unknown;
                    fromPartial(object: {
                        basketDenom?: string;
                        curator?: string;
                    }): _555.EventCreate;
                };
                EventPut: {
                    encode(message: _555.EventPut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _555.EventPut;
                    fromJSON(object: any): _555.EventPut;
                    toJSON(message: _555.EventPut): unknown;
                    fromPartial(object: {
                        owner?: string;
                        basketDenom?: string;
                        credits?: {
                            batchDenom?: string;
                            amount?: string;
                        }[];
                        amount?: string;
                    }): _555.EventPut;
                };
                EventTake: {
                    encode(message: _555.EventTake, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _555.EventTake;
                    fromJSON(object: any): _555.EventTake;
                    toJSON(message: _555.EventTake): unknown;
                    fromPartial(object: {
                        owner?: string;
                        basketDenom?: string;
                        credits?: {
                            batchDenom?: string;
                            amount?: string;
                        }[];
                        amount?: string;
                    }): _555.EventTake;
                };
            };
        }
        namespace marketplace {
            const v1: {
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        sell(value: _563.MsgSell): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateSellOrders(value: _563.MsgUpdateSellOrders): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        cancelSellOrder(value: _563.MsgCancelSellOrder): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        buyDirect(value: _563.MsgBuyDirect): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        sell(value: _563.MsgSell): {
                            typeUrl: string;
                            value: _563.MsgSell;
                        };
                        updateSellOrders(value: _563.MsgUpdateSellOrders): {
                            typeUrl: string;
                            value: _563.MsgUpdateSellOrders;
                        };
                        cancelSellOrder(value: _563.MsgCancelSellOrder): {
                            typeUrl: string;
                            value: _563.MsgCancelSellOrder;
                        };
                        buyDirect(value: _563.MsgBuyDirect): {
                            typeUrl: string;
                            value: _563.MsgBuyDirect;
                        };
                    };
                    toJSON: {
                        sell(value: _563.MsgSell): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateSellOrders(value: _563.MsgUpdateSellOrders): {
                            typeUrl: string;
                            value: unknown;
                        };
                        cancelSellOrder(value: _563.MsgCancelSellOrder): {
                            typeUrl: string;
                            value: unknown;
                        };
                        buyDirect(value: _563.MsgBuyDirect): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        sell(value: any): {
                            typeUrl: string;
                            value: _563.MsgSell;
                        };
                        updateSellOrders(value: any): {
                            typeUrl: string;
                            value: _563.MsgUpdateSellOrders;
                        };
                        cancelSellOrder(value: any): {
                            typeUrl: string;
                            value: _563.MsgCancelSellOrder;
                        };
                        buyDirect(value: any): {
                            typeUrl: string;
                            value: _563.MsgBuyDirect;
                        };
                    };
                    fromPartial: {
                        sell(value: _563.MsgSell): {
                            typeUrl: string;
                            value: _563.MsgSell;
                        };
                        updateSellOrders(value: _563.MsgUpdateSellOrders): {
                            typeUrl: string;
                            value: _563.MsgUpdateSellOrders;
                        };
                        cancelSellOrder(value: _563.MsgCancelSellOrder): {
                            typeUrl: string;
                            value: _563.MsgCancelSellOrder;
                        };
                        buyDirect(value: _563.MsgBuyDirect): {
                            typeUrl: string;
                            value: _563.MsgBuyDirect;
                        };
                    };
                };
                AminoConverter: {
                    "/regen.ecocredit.marketplace.v1.MsgSell": {
                        aminoType: string;
                        toAmino: ({ owner, orders }: _563.MsgSell) => {
                            owner: string;
                            orders: {
                                batch_denom: string;
                                quantity: string;
                                ask_price: {
                                    denom: string;
                                    amount: string;
                                };
                                disable_auto_retire: boolean;
                                expiration: {
                                    seconds: string;
                                    nanos: number;
                                };
                            }[];
                        };
                        fromAmino: ({ owner, orders }: {
                            owner: string;
                            orders: {
                                batch_denom: string;
                                quantity: string;
                                ask_price: {
                                    denom: string;
                                    amount: string;
                                };
                                disable_auto_retire: boolean;
                                expiration: {
                                    seconds: string;
                                    nanos: number;
                                };
                            }[];
                        }) => _563.MsgSell;
                    };
                    "/regen.ecocredit.marketplace.v1.MsgUpdateSellOrders": {
                        aminoType: string;
                        toAmino: ({ owner, updates }: _563.MsgUpdateSellOrders) => {
                            owner: string;
                            updates: {
                                sell_order_id: string;
                                new_quantity: string;
                                new_ask_price: {
                                    denom: string;
                                    amount: string;
                                };
                                disable_auto_retire: boolean;
                                new_expiration: {
                                    seconds: string;
                                    nanos: number;
                                };
                            }[];
                        };
                        fromAmino: ({ owner, updates }: {
                            owner: string;
                            updates: {
                                sell_order_id: string;
                                new_quantity: string;
                                new_ask_price: {
                                    denom: string;
                                    amount: string;
                                };
                                disable_auto_retire: boolean;
                                new_expiration: {
                                    seconds: string;
                                    nanos: number;
                                };
                            }[];
                        }) => _563.MsgUpdateSellOrders;
                    };
                    "/regen.ecocredit.marketplace.v1.MsgCancelSellOrder": {
                        aminoType: string;
                        toAmino: ({ seller, sellOrderId }: _563.MsgCancelSellOrder) => {
                            seller: string;
                            sell_order_id: string;
                        };
                        fromAmino: ({ seller, sell_order_id }: {
                            seller: string;
                            sell_order_id: string;
                        }) => _563.MsgCancelSellOrder;
                    };
                    "/regen.ecocredit.marketplace.v1.MsgBuyDirect": {
                        aminoType: string;
                        toAmino: ({ buyer, orders }: _563.MsgBuyDirect) => {
                            buyer: string;
                            orders: {
                                batch_denom: string;
                                quantity: string;
                                ask_price: {
                                    denom: string;
                                    amount: string;
                                };
                                disable_auto_retire: boolean;
                                expiration: {
                                    seconds: string;
                                    nanos: number;
                                };
                            }[];
                        };
                        fromAmino: ({ buyer, orders }: {
                            buyer: string;
                            orders: {
                                batch_denom: string;
                                quantity: string;
                                ask_price: {
                                    denom: string;
                                    amount: string;
                                };
                                disable_auto_retire: boolean;
                                expiration: {
                                    seconds: string;
                                    nanos: number;
                                };
                            }[];
                        }) => _563.MsgBuyDirect;
                    };
                };
                AllowDenomProposal: {
                    encode(message: _564.AllowDenomProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _564.AllowDenomProposal;
                    fromJSON(object: any): _564.AllowDenomProposal;
                    toJSON(message: _564.AllowDenomProposal): unknown;
                    fromPartial(object: {
                        title?: string;
                        description?: string;
                        denom?: {
                            bankDenom?: string;
                            displayDenom?: string;
                            exponent?: number;
                        };
                    }): _564.AllowDenomProposal;
                };
                MsgSell: {
                    encode(message: _563.MsgSell, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _563.MsgSell;
                    fromJSON(object: any): _563.MsgSell;
                    toJSON(message: _563.MsgSell): unknown;
                    fromPartial(object: {
                        owner?: string;
                        orders?: {
                            batchDenom?: string;
                            quantity?: string;
                            askPrice?: {
                                denom?: string;
                                amount?: string;
                            };
                            disableAutoRetire?: boolean;
                            expiration?: Date;
                        }[];
                    }): _563.MsgSell;
                };
                MsgSell_Order: {
                    encode(message: _563.MsgSell_Order, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _563.MsgSell_Order;
                    fromJSON(object: any): _563.MsgSell_Order;
                    toJSON(message: _563.MsgSell_Order): unknown;
                    fromPartial(object: {
                        batchDenom?: string;
                        quantity?: string;
                        askPrice?: {
                            denom?: string;
                            amount?: string;
                        };
                        disableAutoRetire?: boolean;
                        expiration?: Date;
                    }): _563.MsgSell_Order;
                };
                MsgSellResponse: {
                    encode(message: _563.MsgSellResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _563.MsgSellResponse;
                    fromJSON(object: any): _563.MsgSellResponse;
                    toJSON(message: _563.MsgSellResponse): unknown;
                    fromPartial(object: {
                        sellOrderIds?: any[];
                    }): _563.MsgSellResponse;
                };
                MsgUpdateSellOrders: {
                    encode(message: _563.MsgUpdateSellOrders, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _563.MsgUpdateSellOrders;
                    fromJSON(object: any): _563.MsgUpdateSellOrders;
                    toJSON(message: _563.MsgUpdateSellOrders): unknown;
                    fromPartial(object: {
                        owner?: string;
                        updates?: {
                            sellOrderId?: any;
                            newQuantity?: string;
                            newAskPrice?: {
                                denom?: string;
                                amount?: string;
                            };
                            disableAutoRetire?: boolean;
                            newExpiration?: Date;
                        }[];
                    }): _563.MsgUpdateSellOrders;
                };
                MsgUpdateSellOrders_Update: {
                    encode(message: _563.MsgUpdateSellOrders_Update, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _563.MsgUpdateSellOrders_Update;
                    fromJSON(object: any): _563.MsgUpdateSellOrders_Update;
                    toJSON(message: _563.MsgUpdateSellOrders_Update): unknown;
                    fromPartial(object: {
                        sellOrderId?: any;
                        newQuantity?: string;
                        newAskPrice?: {
                            denom?: string;
                            amount?: string;
                        };
                        disableAutoRetire?: boolean;
                        newExpiration?: Date;
                    }): _563.MsgUpdateSellOrders_Update;
                };
                MsgUpdateSellOrdersResponse: {
                    encode(_: _563.MsgUpdateSellOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _563.MsgUpdateSellOrdersResponse;
                    fromJSON(_: any): _563.MsgUpdateSellOrdersResponse;
                    toJSON(_: _563.MsgUpdateSellOrdersResponse): unknown;
                    fromPartial(_: {}): _563.MsgUpdateSellOrdersResponse;
                };
                MsgCancelSellOrder: {
                    encode(message: _563.MsgCancelSellOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _563.MsgCancelSellOrder;
                    fromJSON(object: any): _563.MsgCancelSellOrder;
                    toJSON(message: _563.MsgCancelSellOrder): unknown;
                    fromPartial(object: {
                        seller?: string;
                        sellOrderId?: any;
                    }): _563.MsgCancelSellOrder;
                };
                MsgCancelSellOrderResponse: {
                    encode(_: _563.MsgCancelSellOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _563.MsgCancelSellOrderResponse;
                    fromJSON(_: any): _563.MsgCancelSellOrderResponse;
                    toJSON(_: _563.MsgCancelSellOrderResponse): unknown;
                    fromPartial(_: {}): _563.MsgCancelSellOrderResponse;
                };
                MsgBuyDirect: {
                    encode(message: _563.MsgBuyDirect, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _563.MsgBuyDirect;
                    fromJSON(object: any): _563.MsgBuyDirect;
                    toJSON(message: _563.MsgBuyDirect): unknown;
                    fromPartial(object: {
                        buyer?: string;
                        orders?: {
                            sellOrderId?: any;
                            quantity?: string;
                            bidPrice?: {
                                denom?: string;
                                amount?: string;
                            };
                            disableAutoRetire?: boolean;
                            retirementJurisdiction?: string;
                        }[];
                    }): _563.MsgBuyDirect;
                };
                MsgBuyDirect_Order: {
                    encode(message: _563.MsgBuyDirect_Order, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _563.MsgBuyDirect_Order;
                    fromJSON(object: any): _563.MsgBuyDirect_Order;
                    toJSON(message: _563.MsgBuyDirect_Order): unknown;
                    fromPartial(object: {
                        sellOrderId?: any;
                        quantity?: string;
                        bidPrice?: {
                            denom?: string;
                            amount?: string;
                        };
                        disableAutoRetire?: boolean;
                        retirementJurisdiction?: string;
                    }): _563.MsgBuyDirect_Order;
                };
                MsgBuyDirectResponse: {
                    encode(_: _563.MsgBuyDirectResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _563.MsgBuyDirectResponse;
                    fromJSON(_: any): _563.MsgBuyDirectResponse;
                    toJSON(_: _563.MsgBuyDirectResponse): unknown;
                    fromPartial(_: {}): _563.MsgBuyDirectResponse;
                };
                SellOrder: {
                    encode(message: _562.SellOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _562.SellOrder;
                    fromJSON(object: any): _562.SellOrder;
                    toJSON(message: _562.SellOrder): unknown;
                    fromPartial(object: {
                        id?: any;
                        seller?: Uint8Array;
                        batchId?: any;
                        quantity?: string;
                        marketId?: any;
                        askPrice?: string;
                        disableAutoRetire?: boolean;
                        expiration?: Date;
                        maker?: boolean;
                    }): _562.SellOrder;
                };
                AllowedDenom: {
                    encode(message: _562.AllowedDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _562.AllowedDenom;
                    fromJSON(object: any): _562.AllowedDenom;
                    toJSON(message: _562.AllowedDenom): unknown;
                    fromPartial(object: {
                        bankDenom?: string;
                        displayDenom?: string;
                        exponent?: number;
                    }): _562.AllowedDenom;
                };
                Market: {
                    encode(message: _562.Market, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _562.Market;
                    fromJSON(object: any): _562.Market;
                    toJSON(message: _562.Market): unknown;
                    fromPartial(object: {
                        id?: any;
                        creditType?: string;
                        bankDenom?: string;
                        precisionModifier?: number;
                    }): _562.Market;
                };
                QuerySellOrderRequest: {
                    encode(message: _561.QuerySellOrderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _561.QuerySellOrderRequest;
                    fromJSON(object: any): _561.QuerySellOrderRequest;
                    toJSON(message: _561.QuerySellOrderRequest): unknown;
                    fromPartial(object: {
                        sellOrderId?: any;
                    }): _561.QuerySellOrderRequest;
                };
                QuerySellOrderResponse: {
                    encode(message: _561.QuerySellOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _561.QuerySellOrderResponse;
                    fromJSON(object: any): _561.QuerySellOrderResponse;
                    toJSON(message: _561.QuerySellOrderResponse): unknown;
                    fromPartial(object: {
                        sellOrder?: {
                            id?: any;
                            seller?: string;
                            batchDenom?: string;
                            quantity?: string;
                            askDenom?: string;
                            askPrice?: string;
                            disableAutoRetire?: boolean;
                            expiration?: Date;
                        };
                    }): _561.QuerySellOrderResponse;
                };
                QuerySellOrdersRequest: {
                    encode(message: _561.QuerySellOrdersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _561.QuerySellOrdersRequest;
                    fromJSON(object: any): _561.QuerySellOrdersRequest;
                    toJSON(message: _561.QuerySellOrdersRequest): unknown;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _561.QuerySellOrdersRequest;
                };
                QuerySellOrdersResponse: {
                    encode(message: _561.QuerySellOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _561.QuerySellOrdersResponse;
                    fromJSON(object: any): _561.QuerySellOrdersResponse;
                    toJSON(message: _561.QuerySellOrdersResponse): unknown;
                    fromPartial(object: {
                        sellOrders?: {
                            id?: any;
                            seller?: string;
                            batchDenom?: string;
                            quantity?: string;
                            askDenom?: string;
                            askPrice?: string;
                            disableAutoRetire?: boolean;
                            expiration?: Date;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                    }): _561.QuerySellOrdersResponse;
                };
                QuerySellOrdersByBatchDenomRequest: {
                    encode(message: _561.QuerySellOrdersByBatchDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _561.QuerySellOrdersByBatchDenomRequest;
                    fromJSON(object: any): _561.QuerySellOrdersByBatchDenomRequest;
                    toJSON(message: _561.QuerySellOrdersByBatchDenomRequest): unknown;
                    fromPartial(object: {
                        batchDenom?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _561.QuerySellOrdersByBatchDenomRequest;
                };
                QuerySellOrdersByBatchDenomResponse: {
                    encode(message: _561.QuerySellOrdersByBatchDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _561.QuerySellOrdersByBatchDenomResponse;
                    fromJSON(object: any): _561.QuerySellOrdersByBatchDenomResponse;
                    toJSON(message: _561.QuerySellOrdersByBatchDenomResponse): unknown;
                    fromPartial(object: {
                        sellOrders?: {
                            id?: any;
                            seller?: string;
                            batchDenom?: string;
                            quantity?: string;
                            askDenom?: string;
                            askPrice?: string;
                            disableAutoRetire?: boolean;
                            expiration?: Date;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                    }): _561.QuerySellOrdersByBatchDenomResponse;
                };
                QuerySellOrdersByAddressRequest: {
                    encode(message: _561.QuerySellOrdersByAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _561.QuerySellOrdersByAddressRequest;
                    fromJSON(object: any): _561.QuerySellOrdersByAddressRequest;
                    toJSON(message: _561.QuerySellOrdersByAddressRequest): unknown;
                    fromPartial(object: {
                        address?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _561.QuerySellOrdersByAddressRequest;
                };
                QuerySellOrdersByAddressResponse: {
                    encode(message: _561.QuerySellOrdersByAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _561.QuerySellOrdersByAddressResponse;
                    fromJSON(object: any): _561.QuerySellOrdersByAddressResponse;
                    toJSON(message: _561.QuerySellOrdersByAddressResponse): unknown;
                    fromPartial(object: {
                        sellOrders?: {
                            id?: any;
                            seller?: string;
                            batchDenom?: string;
                            quantity?: string;
                            askDenom?: string;
                            askPrice?: string;
                            disableAutoRetire?: boolean;
                            expiration?: Date;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                    }): _561.QuerySellOrdersByAddressResponse;
                };
                QueryAllowedDenomsRequest: {
                    encode(message: _561.QueryAllowedDenomsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _561.QueryAllowedDenomsRequest;
                    fromJSON(object: any): _561.QueryAllowedDenomsRequest;
                    toJSON(message: _561.QueryAllowedDenomsRequest): unknown;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _561.QueryAllowedDenomsRequest;
                };
                QueryAllowedDenomsResponse: {
                    encode(message: _561.QueryAllowedDenomsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _561.QueryAllowedDenomsResponse;
                    fromJSON(object: any): _561.QueryAllowedDenomsResponse;
                    toJSON(message: _561.QueryAllowedDenomsResponse): unknown;
                    fromPartial(object: {
                        allowedDenoms?: {
                            bankDenom?: string;
                            displayDenom?: string;
                            exponent?: number;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                    }): _561.QueryAllowedDenomsResponse;
                };
                SellOrderInfo: {
                    encode(message: _561.SellOrderInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _561.SellOrderInfo;
                    fromJSON(object: any): _561.SellOrderInfo;
                    toJSON(message: _561.SellOrderInfo): unknown;
                    fromPartial(object: {
                        id?: any;
                        seller?: string;
                        batchDenom?: string;
                        quantity?: string;
                        askDenom?: string;
                        askPrice?: string;
                        disableAutoRetire?: boolean;
                        expiration?: Date;
                    }): _561.SellOrderInfo;
                };
                EventSell: {
                    encode(message: _560.EventSell, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _560.EventSell;
                    fromJSON(object: any): _560.EventSell;
                    toJSON(message: _560.EventSell): unknown;
                    fromPartial(object: {
                        orderId?: any;
                    }): _560.EventSell;
                };
                EventUpdateSellOrder: {
                    encode(message: _560.EventUpdateSellOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _560.EventUpdateSellOrder;
                    fromJSON(object: any): _560.EventUpdateSellOrder;
                    toJSON(message: _560.EventUpdateSellOrder): unknown;
                    fromPartial(object: {
                        orderId?: any;
                    }): _560.EventUpdateSellOrder;
                };
                EventAllowDenom: {
                    encode(message: _560.EventAllowDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _560.EventAllowDenom;
                    fromJSON(object: any): _560.EventAllowDenom;
                    toJSON(message: _560.EventAllowDenom): unknown;
                    fromPartial(object: {
                        denom?: string;
                    }): _560.EventAllowDenom;
                };
            };
        }
        namespace orderbook {
            const v1alpha1: {
                BuyOrderSellOrderMatch: {
                    encode(message: _565.BuyOrderSellOrderMatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _565.BuyOrderSellOrderMatch;
                    fromJSON(object: any): _565.BuyOrderSellOrderMatch;
                    toJSON(message: _565.BuyOrderSellOrderMatch): unknown;
                    fromPartial(object: {
                        marketId?: any;
                        buyOrderId?: any;
                        sellOrderId?: any;
                        bidPriceComplement?: number;
                        askPrice?: number;
                    }): _565.BuyOrderSellOrderMatch;
                };
                BuyOrderClassSelector: {
                    encode(message: _565.BuyOrderClassSelector, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _565.BuyOrderClassSelector;
                    fromJSON(object: any): _565.BuyOrderClassSelector;
                    toJSON(message: _565.BuyOrderClassSelector): unknown;
                    fromPartial(object: {
                        buyOrderId?: any;
                        classId?: any;
                        projectLocation?: string;
                        minStartDate?: Date;
                        maxEndDate?: Date;
                    }): _565.BuyOrderClassSelector;
                };
                BuyOrderProjectSelector: {
                    encode(message: _565.BuyOrderProjectSelector, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _565.BuyOrderProjectSelector;
                    fromJSON(object: any): _565.BuyOrderProjectSelector;
                    toJSON(message: _565.BuyOrderProjectSelector): unknown;
                    fromPartial(object: {
                        buyOrderId?: any;
                        projectId?: any;
                        minStartDate?: Date;
                        maxEndDate?: Date;
                    }): _565.BuyOrderProjectSelector;
                };
                BuyOrderBatchSelector: {
                    encode(message: _565.BuyOrderBatchSelector, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _565.BuyOrderBatchSelector;
                    fromJSON(object: any): _565.BuyOrderBatchSelector;
                    toJSON(message: _565.BuyOrderBatchSelector): unknown;
                    fromPartial(object: {
                        buyOrderId?: any;
                        batchId?: any;
                    }): _565.BuyOrderBatchSelector;
                };
            };
        }
        const v1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createClass(value: _569.MsgCreateClass): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createProject(value: _569.MsgCreateProject): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createBatch(value: _569.MsgCreateBatch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mintBatchCredits(value: _569.MsgMintBatchCredits): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    sealBatch(value: _569.MsgSealBatch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    send(value: _569.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    retire(value: _569.MsgRetire): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancel(value: _569.MsgCancel): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassAdmin(value: _569.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassIssuers(value: _569.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassMetadata(value: _569.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateProjectAdmin(value: _569.MsgUpdateProjectAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateProjectMetadata(value: _569.MsgUpdateProjectMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createClass(value: _569.MsgCreateClass): {
                        typeUrl: string;
                        value: _569.MsgCreateClass;
                    };
                    createProject(value: _569.MsgCreateProject): {
                        typeUrl: string;
                        value: _569.MsgCreateProject;
                    };
                    createBatch(value: _569.MsgCreateBatch): {
                        typeUrl: string;
                        value: _569.MsgCreateBatch;
                    };
                    mintBatchCredits(value: _569.MsgMintBatchCredits): {
                        typeUrl: string;
                        value: _569.MsgMintBatchCredits;
                    };
                    sealBatch(value: _569.MsgSealBatch): {
                        typeUrl: string;
                        value: _569.MsgSealBatch;
                    };
                    send(value: _569.MsgSend): {
                        typeUrl: string;
                        value: _569.MsgSend;
                    };
                    retire(value: _569.MsgRetire): {
                        typeUrl: string;
                        value: _569.MsgRetire;
                    };
                    cancel(value: _569.MsgCancel): {
                        typeUrl: string;
                        value: _569.MsgCancel;
                    };
                    updateClassAdmin(value: _569.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: _569.MsgUpdateClassAdmin;
                    };
                    updateClassIssuers(value: _569.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: _569.MsgUpdateClassIssuers;
                    };
                    updateClassMetadata(value: _569.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: _569.MsgUpdateClassMetadata;
                    };
                    updateProjectAdmin(value: _569.MsgUpdateProjectAdmin): {
                        typeUrl: string;
                        value: _569.MsgUpdateProjectAdmin;
                    };
                    updateProjectMetadata(value: _569.MsgUpdateProjectMetadata): {
                        typeUrl: string;
                        value: _569.MsgUpdateProjectMetadata;
                    };
                };
                toJSON: {
                    createClass(value: _569.MsgCreateClass): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createProject(value: _569.MsgCreateProject): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createBatch(value: _569.MsgCreateBatch): {
                        typeUrl: string;
                        value: unknown;
                    };
                    mintBatchCredits(value: _569.MsgMintBatchCredits): {
                        typeUrl: string;
                        value: unknown;
                    };
                    sealBatch(value: _569.MsgSealBatch): {
                        typeUrl: string;
                        value: unknown;
                    };
                    send(value: _569.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    retire(value: _569.MsgRetire): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancel(value: _569.MsgCancel): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateClassAdmin(value: _569.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateClassIssuers(value: _569.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateClassMetadata(value: _569.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateProjectAdmin(value: _569.MsgUpdateProjectAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateProjectMetadata(value: _569.MsgUpdateProjectMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createClass(value: any): {
                        typeUrl: string;
                        value: _569.MsgCreateClass;
                    };
                    createProject(value: any): {
                        typeUrl: string;
                        value: _569.MsgCreateProject;
                    };
                    createBatch(value: any): {
                        typeUrl: string;
                        value: _569.MsgCreateBatch;
                    };
                    mintBatchCredits(value: any): {
                        typeUrl: string;
                        value: _569.MsgMintBatchCredits;
                    };
                    sealBatch(value: any): {
                        typeUrl: string;
                        value: _569.MsgSealBatch;
                    };
                    send(value: any): {
                        typeUrl: string;
                        value: _569.MsgSend;
                    };
                    retire(value: any): {
                        typeUrl: string;
                        value: _569.MsgRetire;
                    };
                    cancel(value: any): {
                        typeUrl: string;
                        value: _569.MsgCancel;
                    };
                    updateClassAdmin(value: any): {
                        typeUrl: string;
                        value: _569.MsgUpdateClassAdmin;
                    };
                    updateClassIssuers(value: any): {
                        typeUrl: string;
                        value: _569.MsgUpdateClassIssuers;
                    };
                    updateClassMetadata(value: any): {
                        typeUrl: string;
                        value: _569.MsgUpdateClassMetadata;
                    };
                    updateProjectAdmin(value: any): {
                        typeUrl: string;
                        value: _569.MsgUpdateProjectAdmin;
                    };
                    updateProjectMetadata(value: any): {
                        typeUrl: string;
                        value: _569.MsgUpdateProjectMetadata;
                    };
                };
                fromPartial: {
                    createClass(value: _569.MsgCreateClass): {
                        typeUrl: string;
                        value: _569.MsgCreateClass;
                    };
                    createProject(value: _569.MsgCreateProject): {
                        typeUrl: string;
                        value: _569.MsgCreateProject;
                    };
                    createBatch(value: _569.MsgCreateBatch): {
                        typeUrl: string;
                        value: _569.MsgCreateBatch;
                    };
                    mintBatchCredits(value: _569.MsgMintBatchCredits): {
                        typeUrl: string;
                        value: _569.MsgMintBatchCredits;
                    };
                    sealBatch(value: _569.MsgSealBatch): {
                        typeUrl: string;
                        value: _569.MsgSealBatch;
                    };
                    send(value: _569.MsgSend): {
                        typeUrl: string;
                        value: _569.MsgSend;
                    };
                    retire(value: _569.MsgRetire): {
                        typeUrl: string;
                        value: _569.MsgRetire;
                    };
                    cancel(value: _569.MsgCancel): {
                        typeUrl: string;
                        value: _569.MsgCancel;
                    };
                    updateClassAdmin(value: _569.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: _569.MsgUpdateClassAdmin;
                    };
                    updateClassIssuers(value: _569.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: _569.MsgUpdateClassIssuers;
                    };
                    updateClassMetadata(value: _569.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: _569.MsgUpdateClassMetadata;
                    };
                    updateProjectAdmin(value: _569.MsgUpdateProjectAdmin): {
                        typeUrl: string;
                        value: _569.MsgUpdateProjectAdmin;
                    };
                    updateProjectMetadata(value: _569.MsgUpdateProjectMetadata): {
                        typeUrl: string;
                        value: _569.MsgUpdateProjectMetadata;
                    };
                };
            };
            AminoConverter: {
                "/regen.ecocredit.v1.MsgCreateClass": {
                    aminoType: string;
                    toAmino: ({ admin, issuers, metadata, creditTypeAbbrev, fee }: _569.MsgCreateClass) => {
                        admin: string;
                        issuers: string[];
                        metadata: string;
                        credit_type_abbrev: string;
                        fee: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ admin, issuers, metadata, credit_type_abbrev, fee }: {
                        admin: string;
                        issuers: string[];
                        metadata: string;
                        credit_type_abbrev: string;
                        fee: {
                            denom: string;
                            amount: string;
                        };
                    }) => _569.MsgCreateClass;
                };
                "/regen.ecocredit.v1.MsgCreateProject": {
                    aminoType: string;
                    toAmino: ({ issuer, classId, metadata, jurisdiction, referenceId }: _569.MsgCreateProject) => {
                        issuer: string;
                        class_id: string;
                        metadata: string;
                        jurisdiction: string;
                        reference_id: string;
                    };
                    fromAmino: ({ issuer, class_id, metadata, jurisdiction, reference_id }: {
                        issuer: string;
                        class_id: string;
                        metadata: string;
                        jurisdiction: string;
                        reference_id: string;
                    }) => _569.MsgCreateProject;
                };
                "/regen.ecocredit.v1.MsgCreateBatch": {
                    aminoType: string;
                    toAmino: ({ issuer, projectId, issuance, metadata, startDate, endDate, open, originTx, note }: _569.MsgCreateBatch) => {
                        issuer: string;
                        project_id: string;
                        issuance: {
                            recipient: string;
                            tradable_amount: string;
                            retired_amount: string;
                            retirement_jurisdiction: string;
                        }[];
                        metadata: string;
                        start_date: {
                            seconds: string;
                            nanos: number;
                        };
                        end_date: {
                            seconds: string;
                            nanos: number;
                        };
                        open: boolean;
                        origin_tx: {
                            typ: string;
                            id: string;
                        };
                        note: string;
                    };
                    fromAmino: ({ issuer, project_id, issuance, metadata, start_date, end_date, open, origin_tx, note }: {
                        issuer: string;
                        project_id: string;
                        issuance: {
                            recipient: string;
                            tradable_amount: string;
                            retired_amount: string;
                            retirement_jurisdiction: string;
                        }[];
                        metadata: string;
                        start_date: {
                            seconds: string;
                            nanos: number;
                        };
                        end_date: {
                            seconds: string;
                            nanos: number;
                        };
                        open: boolean;
                        origin_tx: {
                            typ: string;
                            id: string;
                        };
                        note: string;
                    }) => _569.MsgCreateBatch;
                };
                "/regen.ecocredit.v1.MsgMintBatchCredits": {
                    aminoType: string;
                    toAmino: ({ issuer, batchDenom, issuance, originTx, note }: _569.MsgMintBatchCredits) => {
                        issuer: string;
                        batch_denom: string;
                        issuance: {
                            recipient: string;
                            tradable_amount: string;
                            retired_amount: string;
                            retirement_jurisdiction: string;
                        }[];
                        origin_tx: {
                            typ: string;
                            id: string;
                        };
                        note: string;
                    };
                    fromAmino: ({ issuer, batch_denom, issuance, origin_tx, note }: {
                        issuer: string;
                        batch_denom: string;
                        issuance: {
                            recipient: string;
                            tradable_amount: string;
                            retired_amount: string;
                            retirement_jurisdiction: string;
                        }[];
                        origin_tx: {
                            typ: string;
                            id: string;
                        };
                        note: string;
                    }) => _569.MsgMintBatchCredits;
                };
                "/regen.ecocredit.v1.MsgSealBatch": {
                    aminoType: string;
                    toAmino: ({ issuer, batchDenom }: _569.MsgSealBatch) => {
                        issuer: string;
                        batch_denom: string;
                    };
                    fromAmino: ({ issuer, batch_denom }: {
                        issuer: string;
                        batch_denom: string;
                    }) => _569.MsgSealBatch;
                };
                "/regen.ecocredit.v1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ sender, recipient, credits }: _569.MsgSend) => {
                        sender: string;
                        recipient: string;
                        credits: {
                            batch_denom: string;
                            tradable_amount: string;
                            retired_amount: string;
                            retirement_jurisdiction: string;
                        }[];
                    };
                    fromAmino: ({ sender, recipient, credits }: {
                        sender: string;
                        recipient: string;
                        credits: {
                            batch_denom: string;
                            tradable_amount: string;
                            retired_amount: string;
                            retirement_jurisdiction: string;
                        }[];
                    }) => _569.MsgSend;
                };
                "/regen.ecocredit.v1.MsgRetire": {
                    aminoType: string;
                    toAmino: ({ holder, credits, jurisdiction }: _569.MsgRetire) => {
                        holder: string;
                        credits: {
                            batch_denom: string;
                            amount: string;
                        }[];
                        jurisdiction: string;
                    };
                    fromAmino: ({ holder, credits, jurisdiction }: {
                        holder: string;
                        credits: {
                            batch_denom: string;
                            amount: string;
                        }[];
                        jurisdiction: string;
                    }) => _569.MsgRetire;
                };
                "/regen.ecocredit.v1.MsgCancel": {
                    aminoType: string;
                    toAmino: ({ holder, credits }: _569.MsgCancel) => {
                        holder: string;
                        credits: {
                            batch_denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ holder, credits }: {
                        holder: string;
                        credits: {
                            batch_denom: string;
                            amount: string;
                        }[];
                    }) => _569.MsgCancel;
                };
                "/regen.ecocredit.v1.MsgUpdateClassAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, classId, newAdmin }: _569.MsgUpdateClassAdmin) => {
                        admin: string;
                        class_id: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, class_id, new_admin }: {
                        admin: string;
                        class_id: string;
                        new_admin: string;
                    }) => _569.MsgUpdateClassAdmin;
                };
                "/regen.ecocredit.v1.MsgUpdateClassIssuers": {
                    aminoType: string;
                    toAmino: ({ admin, classId, addIssuers, removeIssuers }: _569.MsgUpdateClassIssuers) => {
                        admin: string;
                        class_id: string;
                        add_issuers: string[];
                        remove_issuers: string[];
                    };
                    fromAmino: ({ admin, class_id, add_issuers, remove_issuers }: {
                        admin: string;
                        class_id: string;
                        add_issuers: string[];
                        remove_issuers: string[];
                    }) => _569.MsgUpdateClassIssuers;
                };
                "/regen.ecocredit.v1.MsgUpdateClassMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, classId, metadata }: _569.MsgUpdateClassMetadata) => {
                        admin: string;
                        class_id: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, class_id, metadata }: {
                        admin: string;
                        class_id: string;
                        metadata: string;
                    }) => _569.MsgUpdateClassMetadata;
                };
                "/regen.ecocredit.v1.MsgUpdateProjectAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, newAdmin, projectId }: _569.MsgUpdateProjectAdmin) => {
                        admin: string;
                        new_admin: string;
                        project_id: string;
                    };
                    fromAmino: ({ admin, new_admin, project_id }: {
                        admin: string;
                        new_admin: string;
                        project_id: string;
                    }) => _569.MsgUpdateProjectAdmin;
                };
                "/regen.ecocredit.v1.MsgUpdateProjectMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, newMetadata, projectId }: _569.MsgUpdateProjectMetadata) => {
                        admin: string;
                        new_metadata: string;
                        project_id: string;
                    };
                    fromAmino: ({ admin, new_metadata, project_id }: {
                        admin: string;
                        new_metadata: string;
                        project_id: string;
                    }) => _569.MsgUpdateProjectMetadata;
                };
            };
            Params: {
                encode(message: _570.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _570.Params;
                fromJSON(object: any): _570.Params;
                toJSON(message: _570.Params): unknown;
                fromPartial(object: {
                    creditClassFee?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    basketFee?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    allowedClassCreators?: string[];
                    allowlistEnabled?: boolean;
                }): _570.Params;
            };
            OriginTx: {
                encode(message: _570.OriginTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _570.OriginTx;
                fromJSON(object: any): _570.OriginTx;
                toJSON(message: _570.OriginTx): unknown;
                fromPartial(object: {
                    typ?: string;
                    id?: string;
                }): _570.OriginTx;
            };
            CreditTypeProposal: {
                encode(message: _570.CreditTypeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _570.CreditTypeProposal;
                fromJSON(object: any): _570.CreditTypeProposal;
                toJSON(message: _570.CreditTypeProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    creditType?: {
                        abbreviation?: string;
                        name?: string;
                        unit?: string;
                        precision?: number;
                    };
                }): _570.CreditTypeProposal;
            };
            MsgCreateClass: {
                encode(message: _569.MsgCreateClass, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _569.MsgCreateClass;
                fromJSON(object: any): _569.MsgCreateClass;
                toJSON(message: _569.MsgCreateClass): unknown;
                fromPartial(object: {
                    admin?: string;
                    issuers?: string[];
                    metadata?: string;
                    creditTypeAbbrev?: string;
                    fee?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _569.MsgCreateClass;
            };
            MsgCreateClassResponse: {
                encode(message: _569.MsgCreateClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _569.MsgCreateClassResponse;
                fromJSON(object: any): _569.MsgCreateClassResponse;
                toJSON(message: _569.MsgCreateClassResponse): unknown;
                fromPartial(object: {
                    classId?: string;
                }): _569.MsgCreateClassResponse;
            };
            MsgCreateProject: {
                encode(message: _569.MsgCreateProject, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _569.MsgCreateProject;
                fromJSON(object: any): _569.MsgCreateProject;
                toJSON(message: _569.MsgCreateProject): unknown;
                fromPartial(object: {
                    issuer?: string;
                    classId?: string;
                    metadata?: string;
                    jurisdiction?: string;
                    referenceId?: string;
                }): _569.MsgCreateProject;
            };
            MsgCreateProjectResponse: {
                encode(message: _569.MsgCreateProjectResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _569.MsgCreateProjectResponse;
                fromJSON(object: any): _569.MsgCreateProjectResponse;
                toJSON(message: _569.MsgCreateProjectResponse): unknown;
                fromPartial(object: {
                    projectId?: string;
                }): _569.MsgCreateProjectResponse;
            };
            MsgCreateBatch: {
                encode(message: _569.MsgCreateBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _569.MsgCreateBatch;
                fromJSON(object: any): _569.MsgCreateBatch;
                toJSON(message: _569.MsgCreateBatch): unknown;
                fromPartial(object: {
                    issuer?: string;
                    projectId?: string;
                    issuance?: {
                        recipient?: string;
                        tradableAmount?: string;
                        retiredAmount?: string;
                        retirementJurisdiction?: string;
                    }[];
                    metadata?: string;
                    startDate?: Date;
                    endDate?: Date;
                    open?: boolean;
                    originTx?: {
                        typ?: string;
                        id?: string;
                    };
                    note?: string;
                }): _569.MsgCreateBatch;
            };
            BatchIssuance: {
                encode(message: _569.BatchIssuance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _569.BatchIssuance;
                fromJSON(object: any): _569.BatchIssuance;
                toJSON(message: _569.BatchIssuance): unknown;
                fromPartial(object: {
                    recipient?: string;
                    tradableAmount?: string;
                    retiredAmount?: string;
                    retirementJurisdiction?: string;
                }): _569.BatchIssuance;
            };
            MsgCreateBatchResponse: {
                encode(message: _569.MsgCreateBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _569.MsgCreateBatchResponse;
                fromJSON(object: any): _569.MsgCreateBatchResponse;
                toJSON(message: _569.MsgCreateBatchResponse): unknown;
                fromPartial(object: {
                    batchDenom?: string;
                }): _569.MsgCreateBatchResponse;
            };
            MsgMintBatchCredits: {
                encode(message: _569.MsgMintBatchCredits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _569.MsgMintBatchCredits;
                fromJSON(object: any): _569.MsgMintBatchCredits;
                toJSON(message: _569.MsgMintBatchCredits): unknown;
                fromPartial(object: {
                    issuer?: string;
                    batchDenom?: string;
                    issuance?: {
                        recipient?: string;
                        tradableAmount?: string;
                        retiredAmount?: string;
                        retirementJurisdiction?: string;
                    }[];
                    originTx?: {
                        typ?: string;
                        id?: string;
                    };
                    note?: string;
                }): _569.MsgMintBatchCredits;
            };
            MsgSealBatch: {
                encode(message: _569.MsgSealBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _569.MsgSealBatch;
                fromJSON(object: any): _569.MsgSealBatch;
                toJSON(message: _569.MsgSealBatch): unknown;
                fromPartial(object: {
                    issuer?: string;
                    batchDenom?: string;
                }): _569.MsgSealBatch;
            };
            MsgMintBatchCreditsResponse: {
                encode(_: _569.MsgMintBatchCreditsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _569.MsgMintBatchCreditsResponse;
                fromJSON(_: any): _569.MsgMintBatchCreditsResponse;
                toJSON(_: _569.MsgMintBatchCreditsResponse): unknown;
                fromPartial(_: {}): _569.MsgMintBatchCreditsResponse;
            };
            MsgSealBatchResponse: {
                encode(_: _569.MsgSealBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _569.MsgSealBatchResponse;
                fromJSON(_: any): _569.MsgSealBatchResponse;
                toJSON(_: _569.MsgSealBatchResponse): unknown;
                fromPartial(_: {}): _569.MsgSealBatchResponse;
            };
            MsgSend: {
                encode(message: _569.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _569.MsgSend;
                fromJSON(object: any): _569.MsgSend;
                toJSON(message: _569.MsgSend): unknown;
                fromPartial(object: {
                    sender?: string;
                    recipient?: string;
                    credits?: {
                        batchDenom?: string;
                        tradableAmount?: string;
                        retiredAmount?: string;
                        retirementJurisdiction?: string;
                    }[];
                }): _569.MsgSend;
            };
            MsgSend_SendCredits: {
                encode(message: _569.MsgSend_SendCredits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _569.MsgSend_SendCredits;
                fromJSON(object: any): _569.MsgSend_SendCredits;
                toJSON(message: _569.MsgSend_SendCredits): unknown;
                fromPartial(object: {
                    batchDenom?: string;
                    tradableAmount?: string;
                    retiredAmount?: string;
                    retirementJurisdiction?: string;
                }): _569.MsgSend_SendCredits;
            };
            MsgSendResponse: {
                encode(_: _569.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _569.MsgSendResponse;
                fromJSON(_: any): _569.MsgSendResponse;
                toJSON(_: _569.MsgSendResponse): unknown;
                fromPartial(_: {}): _569.MsgSendResponse;
            };
            MsgRetire: {
                encode(message: _569.MsgRetire, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _569.MsgRetire;
                fromJSON(object: any): _569.MsgRetire;
                toJSON(message: _569.MsgRetire): unknown;
                fromPartial(object: {
                    holder?: string;
                    credits?: {
                        batchDenom?: string;
                        amount?: string;
                    }[];
                    jurisdiction?: string;
                }): _569.MsgRetire;
            };
            MsgRetire_RetireCredits: {
                encode(message: _569.MsgRetire_RetireCredits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _569.MsgRetire_RetireCredits;
                fromJSON(object: any): _569.MsgRetire_RetireCredits;
                toJSON(message: _569.MsgRetire_RetireCredits): unknown;
                fromPartial(object: {
                    batchDenom?: string;
                    amount?: string;
                }): _569.MsgRetire_RetireCredits;
            };
            MsgRetireResponse: {
                encode(_: _569.MsgRetireResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _569.MsgRetireResponse;
                fromJSON(_: any): _569.MsgRetireResponse;
                toJSON(_: _569.MsgRetireResponse): unknown;
                fromPartial(_: {}): _569.MsgRetireResponse;
            };
            MsgCancel: {
                encode(message: _569.MsgCancel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _569.MsgCancel;
                fromJSON(object: any): _569.MsgCancel;
                toJSON(message: _569.MsgCancel): unknown;
                fromPartial(object: {
                    holder?: string;
                    credits?: {
                        batchDenom?: string;
                        amount?: string;
                    }[];
                }): _569.MsgCancel;
            };
            MsgCancel_CancelCredits: {
                encode(message: _569.MsgCancel_CancelCredits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _569.MsgCancel_CancelCredits;
                fromJSON(object: any): _569.MsgCancel_CancelCredits;
                toJSON(message: _569.MsgCancel_CancelCredits): unknown;
                fromPartial(object: {
                    batchDenom?: string;
                    amount?: string;
                }): _569.MsgCancel_CancelCredits;
            };
            MsgCancelResponse: {
                encode(_: _569.MsgCancelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _569.MsgCancelResponse;
                fromJSON(_: any): _569.MsgCancelResponse;
                toJSON(_: _569.MsgCancelResponse): unknown;
                fromPartial(_: {}): _569.MsgCancelResponse;
            };
            MsgUpdateClassAdmin: {
                encode(message: _569.MsgUpdateClassAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _569.MsgUpdateClassAdmin;
                fromJSON(object: any): _569.MsgUpdateClassAdmin;
                toJSON(message: _569.MsgUpdateClassAdmin): unknown;
                fromPartial(object: {
                    admin?: string;
                    classId?: string;
                    newAdmin?: string;
                }): _569.MsgUpdateClassAdmin;
            };
            MsgUpdateClassAdminResponse: {
                encode(_: _569.MsgUpdateClassAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _569.MsgUpdateClassAdminResponse;
                fromJSON(_: any): _569.MsgUpdateClassAdminResponse;
                toJSON(_: _569.MsgUpdateClassAdminResponse): unknown;
                fromPartial(_: {}): _569.MsgUpdateClassAdminResponse;
            };
            MsgUpdateClassIssuers: {
                encode(message: _569.MsgUpdateClassIssuers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _569.MsgUpdateClassIssuers;
                fromJSON(object: any): _569.MsgUpdateClassIssuers;
                toJSON(message: _569.MsgUpdateClassIssuers): unknown;
                fromPartial(object: {
                    admin?: string;
                    classId?: string;
                    addIssuers?: string[];
                    removeIssuers?: string[];
                }): _569.MsgUpdateClassIssuers;
            };
            MsgUpdateClassIssuersResponse: {
                encode(_: _569.MsgUpdateClassIssuersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _569.MsgUpdateClassIssuersResponse;
                fromJSON(_: any): _569.MsgUpdateClassIssuersResponse;
                toJSON(_: _569.MsgUpdateClassIssuersResponse): unknown;
                fromPartial(_: {}): _569.MsgUpdateClassIssuersResponse;
            };
            MsgUpdateClassMetadata: {
                encode(message: _569.MsgUpdateClassMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _569.MsgUpdateClassMetadata;
                fromJSON(object: any): _569.MsgUpdateClassMetadata;
                toJSON(message: _569.MsgUpdateClassMetadata): unknown;
                fromPartial(object: {
                    admin?: string;
                    classId?: string;
                    metadata?: string;
                }): _569.MsgUpdateClassMetadata;
            };
            MsgUpdateClassMetadataResponse: {
                encode(_: _569.MsgUpdateClassMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _569.MsgUpdateClassMetadataResponse;
                fromJSON(_: any): _569.MsgUpdateClassMetadataResponse;
                toJSON(_: _569.MsgUpdateClassMetadataResponse): unknown;
                fromPartial(_: {}): _569.MsgUpdateClassMetadataResponse;
            };
            MsgUpdateProjectAdmin: {
                encode(message: _569.MsgUpdateProjectAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _569.MsgUpdateProjectAdmin;
                fromJSON(object: any): _569.MsgUpdateProjectAdmin;
                toJSON(message: _569.MsgUpdateProjectAdmin): unknown;
                fromPartial(object: {
                    admin?: string;
                    newAdmin?: string;
                    projectId?: string;
                }): _569.MsgUpdateProjectAdmin;
            };
            MsgUpdateProjectAdminResponse: {
                encode(_: _569.MsgUpdateProjectAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _569.MsgUpdateProjectAdminResponse;
                fromJSON(_: any): _569.MsgUpdateProjectAdminResponse;
                toJSON(_: _569.MsgUpdateProjectAdminResponse): unknown;
                fromPartial(_: {}): _569.MsgUpdateProjectAdminResponse;
            };
            MsgUpdateProjectMetadata: {
                encode(message: _569.MsgUpdateProjectMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _569.MsgUpdateProjectMetadata;
                fromJSON(object: any): _569.MsgUpdateProjectMetadata;
                toJSON(message: _569.MsgUpdateProjectMetadata): unknown;
                fromPartial(object: {
                    admin?: string;
                    newMetadata?: string;
                    projectId?: string;
                }): _569.MsgUpdateProjectMetadata;
            };
            MsgUpdateProjectMetadataResponse: {
                encode(_: _569.MsgUpdateProjectMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _569.MsgUpdateProjectMetadataResponse;
                fromJSON(_: any): _569.MsgUpdateProjectMetadataResponse;
                toJSON(_: _569.MsgUpdateProjectMetadataResponse): unknown;
                fromPartial(_: {}): _569.MsgUpdateProjectMetadataResponse;
            };
            CreditType: {
                encode(message: _568.CreditType, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _568.CreditType;
                fromJSON(object: any): _568.CreditType;
                toJSON(message: _568.CreditType): unknown;
                fromPartial(object: {
                    abbreviation?: string;
                    name?: string;
                    unit?: string;
                    precision?: number;
                }): _568.CreditType;
            };
            Class: {
                encode(message: _568.Class, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _568.Class;
                fromJSON(object: any): _568.Class;
                toJSON(message: _568.Class): unknown;
                fromPartial(object: {
                    key?: any;
                    id?: string;
                    admin?: Uint8Array;
                    metadata?: string;
                    creditTypeAbbrev?: string;
                }): _568.Class;
            };
            ClassIssuer: {
                encode(message: _568.ClassIssuer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _568.ClassIssuer;
                fromJSON(object: any): _568.ClassIssuer;
                toJSON(message: _568.ClassIssuer): unknown;
                fromPartial(object: {
                    classKey?: any;
                    issuer?: Uint8Array;
                }): _568.ClassIssuer;
            };
            Project: {
                encode(message: _568.Project, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _568.Project;
                fromJSON(object: any): _568.Project;
                toJSON(message: _568.Project): unknown;
                fromPartial(object: {
                    key?: any;
                    id?: string;
                    admin?: Uint8Array;
                    classKey?: any;
                    jurisdiction?: string;
                    metadata?: string;
                    referenceId?: string;
                }): _568.Project;
            };
            Batch: {
                encode(message: _568.Batch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _568.Batch;
                fromJSON(object: any): _568.Batch;
                toJSON(message: _568.Batch): unknown;
                fromPartial(object: {
                    key?: any;
                    issuer?: Uint8Array;
                    projectKey?: any;
                    denom?: string;
                    metadata?: string;
                    startDate?: Date;
                    endDate?: Date;
                    issuanceDate?: Date;
                    open?: boolean;
                }): _568.Batch;
            };
            ClassSequence: {
                encode(message: _568.ClassSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _568.ClassSequence;
                fromJSON(object: any): _568.ClassSequence;
                toJSON(message: _568.ClassSequence): unknown;
                fromPartial(object: {
                    creditTypeAbbrev?: string;
                    nextSequence?: any;
                }): _568.ClassSequence;
            };
            ProjectSequence: {
                encode(message: _568.ProjectSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _568.ProjectSequence;
                fromJSON(object: any): _568.ProjectSequence;
                toJSON(message: _568.ProjectSequence): unknown;
                fromPartial(object: {
                    classKey?: any;
                    nextSequence?: any;
                }): _568.ProjectSequence;
            };
            BatchSequence: {
                encode(message: _568.BatchSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _568.BatchSequence;
                fromJSON(object: any): _568.BatchSequence;
                toJSON(message: _568.BatchSequence): unknown;
                fromPartial(object: {
                    projectKey?: any;
                    nextSequence?: any;
                }): _568.BatchSequence;
            };
            BatchBalance: {
                encode(message: _568.BatchBalance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _568.BatchBalance;
                fromJSON(object: any): _568.BatchBalance;
                toJSON(message: _568.BatchBalance): unknown;
                fromPartial(object: {
                    batchKey?: any;
                    address?: Uint8Array;
                    tradable?: string;
                    retired?: string;
                    escrowed?: string;
                }): _568.BatchBalance;
            };
            BatchSupply: {
                encode(message: _568.BatchSupply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _568.BatchSupply;
                fromJSON(object: any): _568.BatchSupply;
                toJSON(message: _568.BatchSupply): unknown;
                fromPartial(object: {
                    batchKey?: any;
                    tradableAmount?: string;
                    retiredAmount?: string;
                    cancelledAmount?: string;
                }): _568.BatchSupply;
            };
            BatchOrigTx: {
                encode(message: _568.BatchOrigTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _568.BatchOrigTx;
                fromJSON(object: any): _568.BatchOrigTx;
                toJSON(message: _568.BatchOrigTx): unknown;
                fromPartial(object: {
                    txId?: string;
                    typ?: string;
                    note?: string;
                    batchDenom?: string;
                }): _568.BatchOrigTx;
            };
            QueryClassesRequest: {
                encode(message: _567.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _567.QueryClassesRequest;
                fromJSON(object: any): _567.QueryClassesRequest;
                toJSON(message: _567.QueryClassesRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _567.QueryClassesRequest;
            };
            QueryClassesResponse: {
                encode(message: _567.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _567.QueryClassesResponse;
                fromJSON(object: any): _567.QueryClassesResponse;
                toJSON(message: _567.QueryClassesResponse): unknown;
                fromPartial(object: {
                    classes?: {
                        id?: string;
                        admin?: string;
                        metadata?: string;
                        creditTypeAbbrev?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _567.QueryClassesResponse;
            };
            QueryClassesByAdminRequest: {
                encode(message: _567.QueryClassesByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _567.QueryClassesByAdminRequest;
                fromJSON(object: any): _567.QueryClassesByAdminRequest;
                toJSON(message: _567.QueryClassesByAdminRequest): unknown;
                fromPartial(object: {
                    admin?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _567.QueryClassesByAdminRequest;
            };
            QueryClassesByAdminResponse: {
                encode(message: _567.QueryClassesByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _567.QueryClassesByAdminResponse;
                fromJSON(object: any): _567.QueryClassesByAdminResponse;
                toJSON(message: _567.QueryClassesByAdminResponse): unknown;
                fromPartial(object: {
                    classes?: {
                        id?: string;
                        admin?: string;
                        metadata?: string;
                        creditTypeAbbrev?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _567.QueryClassesByAdminResponse;
            };
            QueryClassRequest: {
                encode(message: _567.QueryClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _567.QueryClassRequest;
                fromJSON(object: any): _567.QueryClassRequest;
                toJSON(message: _567.QueryClassRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                }): _567.QueryClassRequest;
            };
            QueryClassResponse: {
                encode(message: _567.QueryClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _567.QueryClassResponse;
                fromJSON(object: any): _567.QueryClassResponse;
                toJSON(message: _567.QueryClassResponse): unknown;
                fromPartial(object: {
                    class?: {
                        id?: string;
                        admin?: string;
                        metadata?: string;
                        creditTypeAbbrev?: string;
                    };
                }): _567.QueryClassResponse;
            };
            QueryClassIssuersRequest: {
                encode(message: _567.QueryClassIssuersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _567.QueryClassIssuersRequest;
                fromJSON(object: any): _567.QueryClassIssuersRequest;
                toJSON(message: _567.QueryClassIssuersRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _567.QueryClassIssuersRequest;
            };
            QueryClassIssuersResponse: {
                encode(message: _567.QueryClassIssuersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _567.QueryClassIssuersResponse;
                fromJSON(object: any): _567.QueryClassIssuersResponse;
                toJSON(message: _567.QueryClassIssuersResponse): unknown;
                fromPartial(object: {
                    issuers?: string[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _567.QueryClassIssuersResponse;
            };
            QueryProjectsRequest: {
                encode(message: _567.QueryProjectsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _567.QueryProjectsRequest;
                fromJSON(object: any): _567.QueryProjectsRequest;
                toJSON(message: _567.QueryProjectsRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _567.QueryProjectsRequest;
            };
            QueryProjectsResponse: {
                encode(message: _567.QueryProjectsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _567.QueryProjectsResponse;
                fromJSON(object: any): _567.QueryProjectsResponse;
                toJSON(message: _567.QueryProjectsResponse): unknown;
                fromPartial(object: {
                    projects?: {
                        id?: string;
                        admin?: string;
                        classId?: string;
                        jurisdiction?: string;
                        metadata?: string;
                        referenceId?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _567.QueryProjectsResponse;
            };
            QueryProjectsByReferenceIdRequest: {
                encode(message: _567.QueryProjectsByReferenceIdRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _567.QueryProjectsByReferenceIdRequest;
                fromJSON(object: any): _567.QueryProjectsByReferenceIdRequest;
                toJSON(message: _567.QueryProjectsByReferenceIdRequest): unknown;
                fromPartial(object: {
                    referenceId?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _567.QueryProjectsByReferenceIdRequest;
            };
            QueryProjectsByReferenceIdResponse: {
                encode(message: _567.QueryProjectsByReferenceIdResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _567.QueryProjectsByReferenceIdResponse;
                fromJSON(object: any): _567.QueryProjectsByReferenceIdResponse;
                toJSON(message: _567.QueryProjectsByReferenceIdResponse): unknown;
                fromPartial(object: {
                    projects?: {
                        id?: string;
                        admin?: string;
                        classId?: string;
                        jurisdiction?: string;
                        metadata?: string;
                        referenceId?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _567.QueryProjectsByReferenceIdResponse;
            };
            QueryProjectRequest: {
                encode(message: _567.QueryProjectRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _567.QueryProjectRequest;
                fromJSON(object: any): _567.QueryProjectRequest;
                toJSON(message: _567.QueryProjectRequest): unknown;
                fromPartial(object: {
                    projectId?: string;
                }): _567.QueryProjectRequest;
            };
            QueryProjectResponse: {
                encode(message: _567.QueryProjectResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _567.QueryProjectResponse;
                fromJSON(object: any): _567.QueryProjectResponse;
                toJSON(message: _567.QueryProjectResponse): unknown;
                fromPartial(object: {
                    project?: {
                        id?: string;
                        admin?: string;
                        classId?: string;
                        jurisdiction?: string;
                        metadata?: string;
                        referenceId?: string;
                    };
                }): _567.QueryProjectResponse;
            };
            QueryBatchesRequest: {
                encode(message: _567.QueryBatchesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _567.QueryBatchesRequest;
                fromJSON(object: any): _567.QueryBatchesRequest;
                toJSON(message: _567.QueryBatchesRequest): unknown;
                fromPartial(object: {
                    projectId?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _567.QueryBatchesRequest;
            };
            QueryBatchesResponse: {
                encode(message: _567.QueryBatchesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _567.QueryBatchesResponse;
                fromJSON(object: any): _567.QueryBatchesResponse;
                toJSON(message: _567.QueryBatchesResponse): unknown;
                fromPartial(object: {
                    batches?: {
                        issuer?: string;
                        projectId?: string;
                        denom?: string;
                        metadata?: string;
                        startDate?: Date;
                        endDate?: Date;
                        issuanceDate?: Date;
                        open?: boolean;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _567.QueryBatchesResponse;
            };
            QueryBatchesByIssuerRequest: {
                encode(message: _567.QueryBatchesByIssuerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _567.QueryBatchesByIssuerRequest;
                fromJSON(object: any): _567.QueryBatchesByIssuerRequest;
                toJSON(message: _567.QueryBatchesByIssuerRequest): unknown;
                fromPartial(object: {
                    issuer?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _567.QueryBatchesByIssuerRequest;
            };
            QueryBatchesByIssuerResponse: {
                encode(message: _567.QueryBatchesByIssuerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _567.QueryBatchesByIssuerResponse;
                fromJSON(object: any): _567.QueryBatchesByIssuerResponse;
                toJSON(message: _567.QueryBatchesByIssuerResponse): unknown;
                fromPartial(object: {
                    batches?: {
                        issuer?: string;
                        projectId?: string;
                        denom?: string;
                        metadata?: string;
                        startDate?: Date;
                        endDate?: Date;
                        issuanceDate?: Date;
                        open?: boolean;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _567.QueryBatchesByIssuerResponse;
            };
            QueryBatchesByClassRequest: {
                encode(message: _567.QueryBatchesByClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _567.QueryBatchesByClassRequest;
                fromJSON(object: any): _567.QueryBatchesByClassRequest;
                toJSON(message: _567.QueryBatchesByClassRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _567.QueryBatchesByClassRequest;
            };
            QueryBatchesByClassResponse: {
                encode(message: _567.QueryBatchesByClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _567.QueryBatchesByClassResponse;
                fromJSON(object: any): _567.QueryBatchesByClassResponse;
                toJSON(message: _567.QueryBatchesByClassResponse): unknown;
                fromPartial(object: {
                    batches?: {
                        issuer?: string;
                        projectId?: string;
                        denom?: string;
                        metadata?: string;
                        startDate?: Date;
                        endDate?: Date;
                        issuanceDate?: Date;
                        open?: boolean;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _567.QueryBatchesByClassResponse;
            };
            QueryBatchRequest: {
                encode(message: _567.QueryBatchRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _567.QueryBatchRequest;
                fromJSON(object: any): _567.QueryBatchRequest;
                toJSON(message: _567.QueryBatchRequest): unknown;
                fromPartial(object: {
                    batchDenom?: string;
                }): _567.QueryBatchRequest;
            };
            QueryBatchResponse: {
                encode(message: _567.QueryBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _567.QueryBatchResponse;
                fromJSON(object: any): _567.QueryBatchResponse;
                toJSON(message: _567.QueryBatchResponse): unknown;
                fromPartial(object: {
                    batch?: {
                        issuer?: string;
                        projectId?: string;
                        denom?: string;
                        metadata?: string;
                        startDate?: Date;
                        endDate?: Date;
                        issuanceDate?: Date;
                        open?: boolean;
                    };
                }): _567.QueryBatchResponse;
            };
            QueryBalanceRequest: {
                encode(message: _567.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _567.QueryBalanceRequest;
                fromJSON(object: any): _567.QueryBalanceRequest;
                toJSON(message: _567.QueryBalanceRequest): unknown;
                fromPartial(object: {
                    account?: string;
                    batchDenom?: string;
                }): _567.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _567.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _567.QueryBalanceResponse;
                fromJSON(object: any): _567.QueryBalanceResponse;
                toJSON(message: _567.QueryBalanceResponse): unknown;
                fromPartial(object: {
                    balance?: {
                        address?: string;
                        batchDenom?: string;
                        tradable?: string;
                        retired?: string;
                        escrowed?: string;
                    };
                }): _567.QueryBalanceResponse;
            };
            QueryBalancesRequest: {
                encode(message: _567.QueryBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _567.QueryBalancesRequest;
                fromJSON(object: any): _567.QueryBalancesRequest;
                toJSON(message: _567.QueryBalancesRequest): unknown;
                fromPartial(object: {
                    account?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _567.QueryBalancesRequest;
            };
            QueryBalancesResponse: {
                encode(message: _567.QueryBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _567.QueryBalancesResponse;
                fromJSON(object: any): _567.QueryBalancesResponse;
                toJSON(message: _567.QueryBalancesResponse): unknown;
                fromPartial(object: {
                    balances?: {
                        address?: string;
                        batchDenom?: string;
                        tradable?: string;
                        retired?: string;
                        escrowed?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _567.QueryBalancesResponse;
            };
            QuerySupplyRequest: {
                encode(message: _567.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _567.QuerySupplyRequest;
                fromJSON(object: any): _567.QuerySupplyRequest;
                toJSON(message: _567.QuerySupplyRequest): unknown;
                fromPartial(object: {
                    batchDenom?: string;
                }): _567.QuerySupplyRequest;
            };
            QuerySupplyResponse: {
                encode(message: _567.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _567.QuerySupplyResponse;
                fromJSON(object: any): _567.QuerySupplyResponse;
                toJSON(message: _567.QuerySupplyResponse): unknown;
                fromPartial(object: {
                    tradableSupply?: string;
                    retiredSupply?: string;
                    cancelledAmount?: string;
                }): _567.QuerySupplyResponse;
            };
            QueryCreditTypesRequest: {
                encode(_: _567.QueryCreditTypesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _567.QueryCreditTypesRequest;
                fromJSON(_: any): _567.QueryCreditTypesRequest;
                toJSON(_: _567.QueryCreditTypesRequest): unknown;
                fromPartial(_: {}): _567.QueryCreditTypesRequest;
            };
            QueryCreditTypesResponse: {
                encode(message: _567.QueryCreditTypesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _567.QueryCreditTypesResponse;
                fromJSON(object: any): _567.QueryCreditTypesResponse;
                toJSON(message: _567.QueryCreditTypesResponse): unknown;
                fromPartial(object: {
                    creditTypes?: {
                        abbreviation?: string;
                        name?: string;
                        unit?: string;
                        precision?: number;
                    }[];
                }): _567.QueryCreditTypesResponse;
            };
            QueryParamsRequest: {
                encode(_: _567.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _567.QueryParamsRequest;
                fromJSON(_: any): _567.QueryParamsRequest;
                toJSON(_: _567.QueryParamsRequest): unknown;
                fromPartial(_: {}): _567.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _567.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _567.QueryParamsResponse;
                fromJSON(object: any): _567.QueryParamsResponse;
                toJSON(message: _567.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        creditClassFee?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        basketFee?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        allowedClassCreators?: string[];
                        allowlistEnabled?: boolean;
                    };
                }): _567.QueryParamsResponse;
            };
            ClassInfo: {
                encode(message: _567.ClassInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _567.ClassInfo;
                fromJSON(object: any): _567.ClassInfo;
                toJSON(message: _567.ClassInfo): unknown;
                fromPartial(object: {
                    id?: string;
                    admin?: string;
                    metadata?: string;
                    creditTypeAbbrev?: string;
                }): _567.ClassInfo;
            };
            ProjectInfo: {
                encode(message: _567.ProjectInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _567.ProjectInfo;
                fromJSON(object: any): _567.ProjectInfo;
                toJSON(message: _567.ProjectInfo): unknown;
                fromPartial(object: {
                    id?: string;
                    admin?: string;
                    classId?: string;
                    jurisdiction?: string;
                    metadata?: string;
                    referenceId?: string;
                }): _567.ProjectInfo;
            };
            BatchInfo: {
                encode(message: _567.BatchInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _567.BatchInfo;
                fromJSON(object: any): _567.BatchInfo;
                toJSON(message: _567.BatchInfo): unknown;
                fromPartial(object: {
                    issuer?: string;
                    projectId?: string;
                    denom?: string;
                    metadata?: string;
                    startDate?: Date;
                    endDate?: Date;
                    issuanceDate?: Date;
                    open?: boolean;
                }): _567.BatchInfo;
            };
            BatchBalanceInfo: {
                encode(message: _567.BatchBalanceInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _567.BatchBalanceInfo;
                fromJSON(object: any): _567.BatchBalanceInfo;
                toJSON(message: _567.BatchBalanceInfo): unknown;
                fromPartial(object: {
                    address?: string;
                    batchDenom?: string;
                    tradable?: string;
                    retired?: string;
                    escrowed?: string;
                }): _567.BatchBalanceInfo;
            };
            EventCreateClass: {
                encode(message: _566.EventCreateClass, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _566.EventCreateClass;
                fromJSON(object: any): _566.EventCreateClass;
                toJSON(message: _566.EventCreateClass): unknown;
                fromPartial(object: {
                    classId?: string;
                }): _566.EventCreateClass;
            };
            EventCreateProject: {
                encode(message: _566.EventCreateProject, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _566.EventCreateProject;
                fromJSON(object: any): _566.EventCreateProject;
                toJSON(message: _566.EventCreateProject): unknown;
                fromPartial(object: {
                    projectId?: string;
                }): _566.EventCreateProject;
            };
            EventCreateBatch: {
                encode(message: _566.EventCreateBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _566.EventCreateBatch;
                fromJSON(object: any): _566.EventCreateBatch;
                toJSON(message: _566.EventCreateBatch): unknown;
                fromPartial(object: {
                    batchDenom?: string;
                }): _566.EventCreateBatch;
            };
            EventMint: {
                encode(message: _566.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _566.EventMint;
                fromJSON(object: any): _566.EventMint;
                toJSON(message: _566.EventMint): unknown;
                fromPartial(object: {
                    batchDenom?: string;
                    originTx?: {
                        typ?: string;
                        id?: string;
                    };
                }): _566.EventMint;
            };
            EventTransfer: {
                encode(message: _566.EventTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _566.EventTransfer;
                fromJSON(object: any): _566.EventTransfer;
                toJSON(message: _566.EventTransfer): unknown;
                fromPartial(object: {
                    sender?: string;
                    recipient?: string;
                    batchDenom?: string;
                    tradableAmount?: string;
                    retiredAmount?: string;
                }): _566.EventTransfer;
            };
            EventRetire: {
                encode(message: _566.EventRetire, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _566.EventRetire;
                fromJSON(object: any): _566.EventRetire;
                toJSON(message: _566.EventRetire): unknown;
                fromPartial(object: {
                    owner?: string;
                    batchDenom?: string;
                    amount?: string;
                    jurisdiction?: string;
                }): _566.EventRetire;
            };
            EventCancel: {
                encode(message: _566.EventCancel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _566.EventCancel;
                fromJSON(object: any): _566.EventCancel;
                toJSON(message: _566.EventCancel): unknown;
                fromPartial(object: {
                    owner?: string;
                    batchDenom?: string;
                    amount?: string;
                }): _566.EventCancel;
            };
            EventUpdateClassAdmin: {
                encode(message: _566.EventUpdateClassAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _566.EventUpdateClassAdmin;
                fromJSON(object: any): _566.EventUpdateClassAdmin;
                toJSON(message: _566.EventUpdateClassAdmin): unknown;
                fromPartial(object: {
                    classId?: string;
                }): _566.EventUpdateClassAdmin;
            };
            EventUpdateClassIssuers: {
                encode(message: _566.EventUpdateClassIssuers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _566.EventUpdateClassIssuers;
                fromJSON(object: any): _566.EventUpdateClassIssuers;
                toJSON(message: _566.EventUpdateClassIssuers): unknown;
                fromPartial(object: {
                    classId?: string;
                }): _566.EventUpdateClassIssuers;
            };
            EventUpdateClassMetadata: {
                encode(message: _566.EventUpdateClassMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _566.EventUpdateClassMetadata;
                fromJSON(object: any): _566.EventUpdateClassMetadata;
                toJSON(message: _566.EventUpdateClassMetadata): unknown;
                fromPartial(object: {
                    classId?: string;
                }): _566.EventUpdateClassMetadata;
            };
            EventUpdateProjectAdmin: {
                encode(message: _566.EventUpdateProjectAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _566.EventUpdateProjectAdmin;
                fromJSON(object: any): _566.EventUpdateProjectAdmin;
                toJSON(message: _566.EventUpdateProjectAdmin): unknown;
                fromPartial(object: {
                    projectId?: string;
                }): _566.EventUpdateProjectAdmin;
            };
            EventUpdateProjectMetadata: {
                encode(message: _566.EventUpdateProjectMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _566.EventUpdateProjectMetadata;
                fromJSON(object: any): _566.EventUpdateProjectMetadata;
                toJSON(message: _566.EventUpdateProjectMetadata): unknown;
                fromPartial(object: {
                    projectId?: string;
                }): _566.EventUpdateProjectMetadata;
            };
            EventSealBatch: {
                encode(message: _566.EventSealBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _566.EventSealBatch;
                fromJSON(object: any): _566.EventSealBatch;
                toJSON(message: _566.EventSealBatch): unknown;
                fromPartial(object: {
                    batchDenom?: string;
                }): _566.EventSealBatch;
            };
            EventAddCreditType: {
                encode(message: _566.EventAddCreditType, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _566.EventAddCreditType;
                fromJSON(object: any): _566.EventAddCreditType;
                toJSON(message: _566.EventAddCreditType): unknown;
                fromPartial(object: {
                    abbreviation?: string;
                }): _566.EventAddCreditType;
            };
        };
        const v1alpha1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createClass(value: _574.MsgCreateClass): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createBatch(value: _574.MsgCreateBatch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    send(value: _574.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    retire(value: _574.MsgRetire): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancel(value: _574.MsgCancel): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassAdmin(value: _574.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassIssuers(value: _574.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassMetadata(value: _574.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createClass(value: _574.MsgCreateClass): {
                        typeUrl: string;
                        value: _574.MsgCreateClass;
                    };
                    createBatch(value: _574.MsgCreateBatch): {
                        typeUrl: string;
                        value: _574.MsgCreateBatch;
                    };
                    send(value: _574.MsgSend): {
                        typeUrl: string;
                        value: _574.MsgSend;
                    };
                    retire(value: _574.MsgRetire): {
                        typeUrl: string;
                        value: _574.MsgRetire;
                    };
                    cancel(value: _574.MsgCancel): {
                        typeUrl: string;
                        value: _574.MsgCancel;
                    };
                    updateClassAdmin(value: _574.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: _574.MsgUpdateClassAdmin;
                    };
                    updateClassIssuers(value: _574.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: _574.MsgUpdateClassIssuers;
                    };
                    updateClassMetadata(value: _574.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: _574.MsgUpdateClassMetadata;
                    };
                };
                toJSON: {
                    createClass(value: _574.MsgCreateClass): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createBatch(value: _574.MsgCreateBatch): {
                        typeUrl: string;
                        value: unknown;
                    };
                    send(value: _574.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    retire(value: _574.MsgRetire): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancel(value: _574.MsgCancel): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateClassAdmin(value: _574.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateClassIssuers(value: _574.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateClassMetadata(value: _574.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createClass(value: any): {
                        typeUrl: string;
                        value: _574.MsgCreateClass;
                    };
                    createBatch(value: any): {
                        typeUrl: string;
                        value: _574.MsgCreateBatch;
                    };
                    send(value: any): {
                        typeUrl: string;
                        value: _574.MsgSend;
                    };
                    retire(value: any): {
                        typeUrl: string;
                        value: _574.MsgRetire;
                    };
                    cancel(value: any): {
                        typeUrl: string;
                        value: _574.MsgCancel;
                    };
                    updateClassAdmin(value: any): {
                        typeUrl: string;
                        value: _574.MsgUpdateClassAdmin;
                    };
                    updateClassIssuers(value: any): {
                        typeUrl: string;
                        value: _574.MsgUpdateClassIssuers;
                    };
                    updateClassMetadata(value: any): {
                        typeUrl: string;
                        value: _574.MsgUpdateClassMetadata;
                    };
                };
                fromPartial: {
                    createClass(value: _574.MsgCreateClass): {
                        typeUrl: string;
                        value: _574.MsgCreateClass;
                    };
                    createBatch(value: _574.MsgCreateBatch): {
                        typeUrl: string;
                        value: _574.MsgCreateBatch;
                    };
                    send(value: _574.MsgSend): {
                        typeUrl: string;
                        value: _574.MsgSend;
                    };
                    retire(value: _574.MsgRetire): {
                        typeUrl: string;
                        value: _574.MsgRetire;
                    };
                    cancel(value: _574.MsgCancel): {
                        typeUrl: string;
                        value: _574.MsgCancel;
                    };
                    updateClassAdmin(value: _574.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: _574.MsgUpdateClassAdmin;
                    };
                    updateClassIssuers(value: _574.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: _574.MsgUpdateClassIssuers;
                    };
                    updateClassMetadata(value: _574.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: _574.MsgUpdateClassMetadata;
                    };
                };
            };
            AminoConverter: {
                "/regen.ecocredit.v1alpha1.MsgCreateClass": {
                    aminoType: string;
                    toAmino: ({ admin, issuers, metadata, creditTypeName }: _574.MsgCreateClass) => {
                        admin: string;
                        issuers: string[];
                        metadata: Uint8Array;
                        credit_type_name: string;
                    };
                    fromAmino: ({ admin, issuers, metadata, credit_type_name }: {
                        admin: string;
                        issuers: string[];
                        metadata: Uint8Array;
                        credit_type_name: string;
                    }) => _574.MsgCreateClass;
                };
                "/regen.ecocredit.v1alpha1.MsgCreateBatch": {
                    aminoType: string;
                    toAmino: ({ issuer, classId, issuance, metadata, startDate, endDate, projectLocation }: _574.MsgCreateBatch) => {
                        issuer: string;
                        class_id: string;
                        issuance: {
                            recipient: string;
                            tradable_amount: string;
                            retired_amount: string;
                            retirement_location: string;
                        }[];
                        metadata: Uint8Array;
                        start_date: {
                            seconds: string;
                            nanos: number;
                        };
                        end_date: {
                            seconds: string;
                            nanos: number;
                        };
                        project_location: string;
                    };
                    fromAmino: ({ issuer, class_id, issuance, metadata, start_date, end_date, project_location }: {
                        issuer: string;
                        class_id: string;
                        issuance: {
                            recipient: string;
                            tradable_amount: string;
                            retired_amount: string;
                            retirement_location: string;
                        }[];
                        metadata: Uint8Array;
                        start_date: {
                            seconds: string;
                            nanos: number;
                        };
                        end_date: {
                            seconds: string;
                            nanos: number;
                        };
                        project_location: string;
                    }) => _574.MsgCreateBatch;
                };
                "/regen.ecocredit.v1alpha1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ sender, recipient, credits }: _574.MsgSend) => {
                        sender: string;
                        recipient: string;
                        credits: {
                            batch_denom: string;
                            tradable_amount: string;
                            retired_amount: string;
                            retirement_location: string;
                        }[];
                    };
                    fromAmino: ({ sender, recipient, credits }: {
                        sender: string;
                        recipient: string;
                        credits: {
                            batch_denom: string;
                            tradable_amount: string;
                            retired_amount: string;
                            retirement_location: string;
                        }[];
                    }) => _574.MsgSend;
                };
                "/regen.ecocredit.v1alpha1.MsgRetire": {
                    aminoType: string;
                    toAmino: ({ holder, credits, location }: _574.MsgRetire) => {
                        holder: string;
                        credits: {
                            batch_denom: string;
                            amount: string;
                        }[];
                        location: string;
                    };
                    fromAmino: ({ holder, credits, location }: {
                        holder: string;
                        credits: {
                            batch_denom: string;
                            amount: string;
                        }[];
                        location: string;
                    }) => _574.MsgRetire;
                };
                "/regen.ecocredit.v1alpha1.MsgCancel": {
                    aminoType: string;
                    toAmino: ({ holder, credits }: _574.MsgCancel) => {
                        holder: string;
                        credits: {
                            batch_denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ holder, credits }: {
                        holder: string;
                        credits: {
                            batch_denom: string;
                            amount: string;
                        }[];
                    }) => _574.MsgCancel;
                };
                "/regen.ecocredit.v1alpha1.MsgUpdateClassAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, classId, newAdmin }: _574.MsgUpdateClassAdmin) => {
                        admin: string;
                        class_id: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, class_id, new_admin }: {
                        admin: string;
                        class_id: string;
                        new_admin: string;
                    }) => _574.MsgUpdateClassAdmin;
                };
                "/regen.ecocredit.v1alpha1.MsgUpdateClassIssuers": {
                    aminoType: string;
                    toAmino: ({ admin, classId, issuers }: _574.MsgUpdateClassIssuers) => {
                        admin: string;
                        class_id: string;
                        issuers: string[];
                    };
                    fromAmino: ({ admin, class_id, issuers }: {
                        admin: string;
                        class_id: string;
                        issuers: string[];
                    }) => _574.MsgUpdateClassIssuers;
                };
                "/regen.ecocredit.v1alpha1.MsgUpdateClassMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, classId, metadata }: _574.MsgUpdateClassMetadata) => {
                        admin: string;
                        class_id: string;
                        metadata: Uint8Array;
                    };
                    fromAmino: ({ admin, class_id, metadata }: {
                        admin: string;
                        class_id: string;
                        metadata: Uint8Array;
                    }) => _574.MsgUpdateClassMetadata;
                };
            };
            ClassInfo: {
                encode(message: _575.ClassInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _575.ClassInfo;
                fromJSON(object: any): _575.ClassInfo;
                toJSON(message: _575.ClassInfo): unknown;
                fromPartial(object: {
                    classId?: string;
                    admin?: string;
                    issuers?: string[];
                    metadata?: Uint8Array;
                    creditType?: {
                        name?: string;
                        abbreviation?: string;
                        unit?: string;
                        precision?: number;
                    };
                    numBatches?: any;
                }): _575.ClassInfo;
            };
            BatchInfo: {
                encode(message: _575.BatchInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _575.BatchInfo;
                fromJSON(object: any): _575.BatchInfo;
                toJSON(message: _575.BatchInfo): unknown;
                fromPartial(object: {
                    classId?: string;
                    batchDenom?: string;
                    issuer?: string;
                    totalAmount?: string;
                    metadata?: Uint8Array;
                    amountCancelled?: string;
                    startDate?: Date;
                    endDate?: Date;
                    projectLocation?: string;
                }): _575.BatchInfo;
            };
            Params: {
                encode(message: _575.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _575.Params;
                fromJSON(object: any): _575.Params;
                toJSON(message: _575.Params): unknown;
                fromPartial(object: {
                    creditClassFee?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    allowedClassCreators?: string[];
                    allowlistEnabled?: boolean;
                    creditTypes?: {
                        name?: string;
                        abbreviation?: string;
                        unit?: string;
                        precision?: number;
                    }[];
                    basketCreationFee?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _575.Params;
            };
            CreditType: {
                encode(message: _575.CreditType, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _575.CreditType;
                fromJSON(object: any): _575.CreditType;
                toJSON(message: _575.CreditType): unknown;
                fromPartial(object: {
                    name?: string;
                    abbreviation?: string;
                    unit?: string;
                    precision?: number;
                }): _575.CreditType;
            };
            CreditTypeSeq: {
                encode(message: _575.CreditTypeSeq, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _575.CreditTypeSeq;
                fromJSON(object: any): _575.CreditTypeSeq;
                toJSON(message: _575.CreditTypeSeq): unknown;
                fromPartial(object: {
                    abbreviation?: string;
                    seqNumber?: any;
                }): _575.CreditTypeSeq;
            };
            MsgCreateClass: {
                encode(message: _574.MsgCreateClass, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _574.MsgCreateClass;
                fromJSON(object: any): _574.MsgCreateClass;
                toJSON(message: _574.MsgCreateClass): unknown;
                fromPartial(object: {
                    admin?: string;
                    issuers?: string[];
                    metadata?: Uint8Array;
                    creditTypeName?: string;
                }): _574.MsgCreateClass;
            };
            MsgCreateClassResponse: {
                encode(message: _574.MsgCreateClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _574.MsgCreateClassResponse;
                fromJSON(object: any): _574.MsgCreateClassResponse;
                toJSON(message: _574.MsgCreateClassResponse): unknown;
                fromPartial(object: {
                    classId?: string;
                }): _574.MsgCreateClassResponse;
            };
            MsgCreateBatch: {
                encode(message: _574.MsgCreateBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _574.MsgCreateBatch;
                fromJSON(object: any): _574.MsgCreateBatch;
                toJSON(message: _574.MsgCreateBatch): unknown;
                fromPartial(object: {
                    issuer?: string;
                    classId?: string;
                    issuance?: {
                        recipient?: string;
                        tradableAmount?: string;
                        retiredAmount?: string;
                        retirementLocation?: string;
                    }[];
                    metadata?: Uint8Array;
                    startDate?: Date;
                    endDate?: Date;
                    projectLocation?: string;
                }): _574.MsgCreateBatch;
            };
            MsgCreateBatch_BatchIssuance: {
                encode(message: _574.MsgCreateBatch_BatchIssuance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _574.MsgCreateBatch_BatchIssuance;
                fromJSON(object: any): _574.MsgCreateBatch_BatchIssuance;
                toJSON(message: _574.MsgCreateBatch_BatchIssuance): unknown;
                fromPartial(object: {
                    recipient?: string;
                    tradableAmount?: string;
                    retiredAmount?: string;
                    retirementLocation?: string;
                }): _574.MsgCreateBatch_BatchIssuance;
            };
            MsgCreateBatchResponse: {
                encode(message: _574.MsgCreateBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _574.MsgCreateBatchResponse;
                fromJSON(object: any): _574.MsgCreateBatchResponse;
                toJSON(message: _574.MsgCreateBatchResponse): unknown;
                fromPartial(object: {
                    batchDenom?: string;
                }): _574.MsgCreateBatchResponse;
            };
            MsgSend: {
                encode(message: _574.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _574.MsgSend;
                fromJSON(object: any): _574.MsgSend;
                toJSON(message: _574.MsgSend): unknown;
                fromPartial(object: {
                    sender?: string;
                    recipient?: string;
                    credits?: {
                        batchDenom?: string;
                        tradableAmount?: string;
                        retiredAmount?: string;
                        retirementLocation?: string;
                    }[];
                }): _574.MsgSend;
            };
            MsgSend_SendCredits: {
                encode(message: _574.MsgSend_SendCredits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _574.MsgSend_SendCredits;
                fromJSON(object: any): _574.MsgSend_SendCredits;
                toJSON(message: _574.MsgSend_SendCredits): unknown;
                fromPartial(object: {
                    batchDenom?: string;
                    tradableAmount?: string;
                    retiredAmount?: string;
                    retirementLocation?: string;
                }): _574.MsgSend_SendCredits;
            };
            MsgSendResponse: {
                encode(_: _574.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _574.MsgSendResponse;
                fromJSON(_: any): _574.MsgSendResponse;
                toJSON(_: _574.MsgSendResponse): unknown;
                fromPartial(_: {}): _574.MsgSendResponse;
            };
            MsgRetire: {
                encode(message: _574.MsgRetire, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _574.MsgRetire;
                fromJSON(object: any): _574.MsgRetire;
                toJSON(message: _574.MsgRetire): unknown;
                fromPartial(object: {
                    holder?: string;
                    credits?: {
                        batchDenom?: string;
                        amount?: string;
                    }[];
                    location?: string;
                }): _574.MsgRetire;
            };
            MsgRetire_RetireCredits: {
                encode(message: _574.MsgRetire_RetireCredits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _574.MsgRetire_RetireCredits;
                fromJSON(object: any): _574.MsgRetire_RetireCredits;
                toJSON(message: _574.MsgRetire_RetireCredits): unknown;
                fromPartial(object: {
                    batchDenom?: string;
                    amount?: string;
                }): _574.MsgRetire_RetireCredits;
            };
            MsgRetireResponse: {
                encode(_: _574.MsgRetireResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _574.MsgRetireResponse;
                fromJSON(_: any): _574.MsgRetireResponse;
                toJSON(_: _574.MsgRetireResponse): unknown;
                fromPartial(_: {}): _574.MsgRetireResponse;
            };
            MsgCancel: {
                encode(message: _574.MsgCancel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _574.MsgCancel;
                fromJSON(object: any): _574.MsgCancel;
                toJSON(message: _574.MsgCancel): unknown;
                fromPartial(object: {
                    holder?: string;
                    credits?: {
                        batchDenom?: string;
                        amount?: string;
                    }[];
                }): _574.MsgCancel;
            };
            MsgCancel_CancelCredits: {
                encode(message: _574.MsgCancel_CancelCredits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _574.MsgCancel_CancelCredits;
                fromJSON(object: any): _574.MsgCancel_CancelCredits;
                toJSON(message: _574.MsgCancel_CancelCredits): unknown;
                fromPartial(object: {
                    batchDenom?: string;
                    amount?: string;
                }): _574.MsgCancel_CancelCredits;
            };
            MsgCancelResponse: {
                encode(_: _574.MsgCancelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _574.MsgCancelResponse;
                fromJSON(_: any): _574.MsgCancelResponse;
                toJSON(_: _574.MsgCancelResponse): unknown;
                fromPartial(_: {}): _574.MsgCancelResponse;
            };
            MsgUpdateClassAdmin: {
                encode(message: _574.MsgUpdateClassAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _574.MsgUpdateClassAdmin;
                fromJSON(object: any): _574.MsgUpdateClassAdmin;
                toJSON(message: _574.MsgUpdateClassAdmin): unknown;
                fromPartial(object: {
                    admin?: string;
                    classId?: string;
                    newAdmin?: string;
                }): _574.MsgUpdateClassAdmin;
            };
            MsgUpdateClassAdminResponse: {
                encode(_: _574.MsgUpdateClassAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _574.MsgUpdateClassAdminResponse;
                fromJSON(_: any): _574.MsgUpdateClassAdminResponse;
                toJSON(_: _574.MsgUpdateClassAdminResponse): unknown;
                fromPartial(_: {}): _574.MsgUpdateClassAdminResponse;
            };
            MsgUpdateClassIssuers: {
                encode(message: _574.MsgUpdateClassIssuers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _574.MsgUpdateClassIssuers;
                fromJSON(object: any): _574.MsgUpdateClassIssuers;
                toJSON(message: _574.MsgUpdateClassIssuers): unknown;
                fromPartial(object: {
                    admin?: string;
                    classId?: string;
                    issuers?: string[];
                }): _574.MsgUpdateClassIssuers;
            };
            MsgUpdateClassIssuersResponse: {
                encode(_: _574.MsgUpdateClassIssuersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _574.MsgUpdateClassIssuersResponse;
                fromJSON(_: any): _574.MsgUpdateClassIssuersResponse;
                toJSON(_: _574.MsgUpdateClassIssuersResponse): unknown;
                fromPartial(_: {}): _574.MsgUpdateClassIssuersResponse;
            };
            MsgUpdateClassMetadata: {
                encode(message: _574.MsgUpdateClassMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _574.MsgUpdateClassMetadata;
                fromJSON(object: any): _574.MsgUpdateClassMetadata;
                toJSON(message: _574.MsgUpdateClassMetadata): unknown;
                fromPartial(object: {
                    admin?: string;
                    classId?: string;
                    metadata?: Uint8Array;
                }): _574.MsgUpdateClassMetadata;
            };
            MsgUpdateClassMetadataResponse: {
                encode(_: _574.MsgUpdateClassMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _574.MsgUpdateClassMetadataResponse;
                fromJSON(_: any): _574.MsgUpdateClassMetadataResponse;
                toJSON(_: _574.MsgUpdateClassMetadataResponse): unknown;
                fromPartial(_: {}): _574.MsgUpdateClassMetadataResponse;
            };
            QueryParamsRequest: {
                encode(_: _573.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _573.QueryParamsRequest;
                fromJSON(_: any): _573.QueryParamsRequest;
                toJSON(_: _573.QueryParamsRequest): unknown;
                fromPartial(_: {}): _573.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _573.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _573.QueryParamsResponse;
                fromJSON(object: any): _573.QueryParamsResponse;
                toJSON(message: _573.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        creditClassFee?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        allowedClassCreators?: string[];
                        allowlistEnabled?: boolean;
                        creditTypes?: {
                            name?: string;
                            abbreviation?: string;
                            unit?: string;
                            precision?: number;
                        }[];
                        basketCreationFee?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _573.QueryParamsResponse;
            };
            QueryClassesRequest: {
                encode(message: _573.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _573.QueryClassesRequest;
                fromJSON(object: any): _573.QueryClassesRequest;
                toJSON(message: _573.QueryClassesRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _573.QueryClassesRequest;
            };
            QueryClassesResponse: {
                encode(message: _573.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _573.QueryClassesResponse;
                fromJSON(object: any): _573.QueryClassesResponse;
                toJSON(message: _573.QueryClassesResponse): unknown;
                fromPartial(object: {
                    classes?: {
                        classId?: string;
                        admin?: string;
                        issuers?: string[];
                        metadata?: Uint8Array;
                        creditType?: {
                            name?: string;
                            abbreviation?: string;
                            unit?: string;
                            precision?: number;
                        };
                        numBatches?: any;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _573.QueryClassesResponse;
            };
            QueryClassInfoRequest: {
                encode(message: _573.QueryClassInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _573.QueryClassInfoRequest;
                fromJSON(object: any): _573.QueryClassInfoRequest;
                toJSON(message: _573.QueryClassInfoRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                }): _573.QueryClassInfoRequest;
            };
            QueryClassInfoResponse: {
                encode(message: _573.QueryClassInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _573.QueryClassInfoResponse;
                fromJSON(object: any): _573.QueryClassInfoResponse;
                toJSON(message: _573.QueryClassInfoResponse): unknown;
                fromPartial(object: {
                    info?: {
                        classId?: string;
                        admin?: string;
                        issuers?: string[];
                        metadata?: Uint8Array;
                        creditType?: {
                            name?: string;
                            abbreviation?: string;
                            unit?: string;
                            precision?: number;
                        };
                        numBatches?: any;
                    };
                }): _573.QueryClassInfoResponse;
            };
            QueryBatchesRequest: {
                encode(message: _573.QueryBatchesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _573.QueryBatchesRequest;
                fromJSON(object: any): _573.QueryBatchesRequest;
                toJSON(message: _573.QueryBatchesRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _573.QueryBatchesRequest;
            };
            QueryBatchesResponse: {
                encode(message: _573.QueryBatchesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _573.QueryBatchesResponse;
                fromJSON(object: any): _573.QueryBatchesResponse;
                toJSON(message: _573.QueryBatchesResponse): unknown;
                fromPartial(object: {
                    batches?: {
                        classId?: string;
                        batchDenom?: string;
                        issuer?: string;
                        totalAmount?: string;
                        metadata?: Uint8Array;
                        amountCancelled?: string;
                        startDate?: Date;
                        endDate?: Date;
                        projectLocation?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _573.QueryBatchesResponse;
            };
            QueryBatchInfoRequest: {
                encode(message: _573.QueryBatchInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _573.QueryBatchInfoRequest;
                fromJSON(object: any): _573.QueryBatchInfoRequest;
                toJSON(message: _573.QueryBatchInfoRequest): unknown;
                fromPartial(object: {
                    batchDenom?: string;
                }): _573.QueryBatchInfoRequest;
            };
            QueryBatchInfoResponse: {
                encode(message: _573.QueryBatchInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _573.QueryBatchInfoResponse;
                fromJSON(object: any): _573.QueryBatchInfoResponse;
                toJSON(message: _573.QueryBatchInfoResponse): unknown;
                fromPartial(object: {
                    info?: {
                        classId?: string;
                        batchDenom?: string;
                        issuer?: string;
                        totalAmount?: string;
                        metadata?: Uint8Array;
                        amountCancelled?: string;
                        startDate?: Date;
                        endDate?: Date;
                        projectLocation?: string;
                    };
                }): _573.QueryBatchInfoResponse;
            };
            QueryBalanceRequest: {
                encode(message: _573.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _573.QueryBalanceRequest;
                fromJSON(object: any): _573.QueryBalanceRequest;
                toJSON(message: _573.QueryBalanceRequest): unknown;
                fromPartial(object: {
                    account?: string;
                    batchDenom?: string;
                }): _573.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _573.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _573.QueryBalanceResponse;
                fromJSON(object: any): _573.QueryBalanceResponse;
                toJSON(message: _573.QueryBalanceResponse): unknown;
                fromPartial(object: {
                    tradableAmount?: string;
                    retiredAmount?: string;
                }): _573.QueryBalanceResponse;
            };
            QuerySupplyRequest: {
                encode(message: _573.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _573.QuerySupplyRequest;
                fromJSON(object: any): _573.QuerySupplyRequest;
                toJSON(message: _573.QuerySupplyRequest): unknown;
                fromPartial(object: {
                    batchDenom?: string;
                }): _573.QuerySupplyRequest;
            };
            QuerySupplyResponse: {
                encode(message: _573.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _573.QuerySupplyResponse;
                fromJSON(object: any): _573.QuerySupplyResponse;
                toJSON(message: _573.QuerySupplyResponse): unknown;
                fromPartial(object: {
                    tradableSupply?: string;
                    retiredSupply?: string;
                }): _573.QuerySupplyResponse;
            };
            QueryCreditTypesRequest: {
                encode(_: _573.QueryCreditTypesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _573.QueryCreditTypesRequest;
                fromJSON(_: any): _573.QueryCreditTypesRequest;
                toJSON(_: _573.QueryCreditTypesRequest): unknown;
                fromPartial(_: {}): _573.QueryCreditTypesRequest;
            };
            QueryCreditTypesResponse: {
                encode(message: _573.QueryCreditTypesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _573.QueryCreditTypesResponse;
                fromJSON(object: any): _573.QueryCreditTypesResponse;
                toJSON(message: _573.QueryCreditTypesResponse): unknown;
                fromPartial(object: {
                    creditTypes?: {
                        name?: string;
                        abbreviation?: string;
                        unit?: string;
                        precision?: number;
                    }[];
                }): _573.QueryCreditTypesResponse;
            };
            GenesisState: {
                encode(message: _572.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _572.GenesisState;
                fromJSON(object: any): _572.GenesisState;
                toJSON(message: _572.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        creditClassFee?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        allowedClassCreators?: string[];
                        allowlistEnabled?: boolean;
                        creditTypes?: {
                            name?: string;
                            abbreviation?: string;
                            unit?: string;
                            precision?: number;
                        }[];
                        basketCreationFee?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                    classInfo?: {
                        classId?: string;
                        admin?: string;
                        issuers?: string[];
                        metadata?: Uint8Array;
                        creditType?: {
                            name?: string;
                            abbreviation?: string;
                            unit?: string;
                            precision?: number;
                        };
                        numBatches?: any;
                    }[];
                    batchInfo?: {
                        classId?: string;
                        batchDenom?: string;
                        issuer?: string;
                        totalAmount?: string;
                        metadata?: Uint8Array;
                        amountCancelled?: string;
                        startDate?: Date;
                        endDate?: Date;
                        projectLocation?: string;
                    }[];
                    sequences?: {
                        abbreviation?: string;
                        seqNumber?: any;
                    }[];
                    balances?: {
                        address?: string;
                        batchDenom?: string;
                        tradableBalance?: string;
                        retiredBalance?: string;
                    }[];
                    supplies?: {
                        batchDenom?: string;
                        tradableSupply?: string;
                        retiredSupply?: string;
                    }[];
                }): _572.GenesisState;
            };
            Balance: {
                encode(message: _572.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _572.Balance;
                fromJSON(object: any): _572.Balance;
                toJSON(message: _572.Balance): unknown;
                fromPartial(object: {
                    address?: string;
                    batchDenom?: string;
                    tradableBalance?: string;
                    retiredBalance?: string;
                }): _572.Balance;
            };
            Supply: {
                encode(message: _572.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _572.Supply;
                fromJSON(object: any): _572.Supply;
                toJSON(message: _572.Supply): unknown;
                fromPartial(object: {
                    batchDenom?: string;
                    tradableSupply?: string;
                    retiredSupply?: string;
                }): _572.Supply;
            };
            EventCreateClass: {
                encode(message: _571.EventCreateClass, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _571.EventCreateClass;
                fromJSON(object: any): _571.EventCreateClass;
                toJSON(message: _571.EventCreateClass): unknown;
                fromPartial(object: {
                    classId?: string;
                    admin?: string;
                }): _571.EventCreateClass;
            };
            EventCreateBatch: {
                encode(message: _571.EventCreateBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _571.EventCreateBatch;
                fromJSON(object: any): _571.EventCreateBatch;
                toJSON(message: _571.EventCreateBatch): unknown;
                fromPartial(object: {
                    classId?: string;
                    batchDenom?: string;
                    issuer?: string;
                    totalAmount?: string;
                    startDate?: string;
                    endDate?: string;
                    projectLocation?: string;
                }): _571.EventCreateBatch;
            };
            EventReceive: {
                encode(message: _571.EventReceive, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _571.EventReceive;
                fromJSON(object: any): _571.EventReceive;
                toJSON(message: _571.EventReceive): unknown;
                fromPartial(object: {
                    sender?: string;
                    recipient?: string;
                    batchDenom?: string;
                    tradableAmount?: string;
                    retiredAmount?: string;
                    basketDenom?: string;
                }): _571.EventReceive;
            };
            EventRetire: {
                encode(message: _571.EventRetire, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _571.EventRetire;
                fromJSON(object: any): _571.EventRetire;
                toJSON(message: _571.EventRetire): unknown;
                fromPartial(object: {
                    retirer?: string;
                    batchDenom?: string;
                    amount?: string;
                    location?: string;
                }): _571.EventRetire;
            };
            EventCancel: {
                encode(message: _571.EventCancel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _571.EventCancel;
                fromJSON(object: any): _571.EventCancel;
                toJSON(message: _571.EventCancel): unknown;
                fromPartial(object: {
                    canceller?: string;
                    batchDenom?: string;
                    amount?: string;
                }): _571.EventCancel;
            };
        };
    }
    namespace group {
        const v1alpha1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _579.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _579.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _579.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _579.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupAccount(value: _579.MsgCreateGroupAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAccountAdmin(value: _579.MsgUpdateGroupAccountAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAccountDecisionPolicy(value: _579.MsgUpdateGroupAccountDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAccountMetadata(value: _579.MsgUpdateGroupAccountMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createProposal(value: _579.MsgCreateProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _579.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _579.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _579.MsgCreateGroup): {
                        typeUrl: string;
                        value: _579.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _579.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _579.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _579.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _579.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _579.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _579.MsgUpdateGroupMetadata;
                    };
                    createGroupAccount(value: _579.MsgCreateGroupAccount): {
                        typeUrl: string;
                        value: _579.MsgCreateGroupAccount;
                    };
                    updateGroupAccountAdmin(value: _579.MsgUpdateGroupAccountAdmin): {
                        typeUrl: string;
                        value: _579.MsgUpdateGroupAccountAdmin;
                    };
                    updateGroupAccountDecisionPolicy(value: _579.MsgUpdateGroupAccountDecisionPolicy): {
                        typeUrl: string;
                        value: _579.MsgUpdateGroupAccountDecisionPolicy;
                    };
                    updateGroupAccountMetadata(value: _579.MsgUpdateGroupAccountMetadata): {
                        typeUrl: string;
                        value: _579.MsgUpdateGroupAccountMetadata;
                    };
                    createProposal(value: _579.MsgCreateProposal): {
                        typeUrl: string;
                        value: _579.MsgCreateProposal;
                    };
                    vote(value: _579.MsgVote): {
                        typeUrl: string;
                        value: _579.MsgVote;
                    };
                    exec(value: _579.MsgExec): {
                        typeUrl: string;
                        value: _579.MsgExec;
                    };
                };
                toJSON: {
                    createGroup(value: _579.MsgCreateGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupMembers(value: _579.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupAdmin(value: _579.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupMetadata(value: _579.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createGroupAccount(value: _579.MsgCreateGroupAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupAccountAdmin(value: _579.MsgUpdateGroupAccountAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupAccountDecisionPolicy(value: _579.MsgUpdateGroupAccountDecisionPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupAccountMetadata(value: _579.MsgUpdateGroupAccountMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createProposal(value: _579.MsgCreateProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _579.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exec(value: _579.MsgExec): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _579.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _579.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _579.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _579.MsgUpdateGroupMetadata;
                    };
                    createGroupAccount(value: any): {
                        typeUrl: string;
                        value: _579.MsgCreateGroupAccount;
                    };
                    updateGroupAccountAdmin(value: any): {
                        typeUrl: string;
                        value: _579.MsgUpdateGroupAccountAdmin;
                    };
                    updateGroupAccountDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _579.MsgUpdateGroupAccountDecisionPolicy;
                    };
                    updateGroupAccountMetadata(value: any): {
                        typeUrl: string;
                        value: _579.MsgUpdateGroupAccountMetadata;
                    };
                    createProposal(value: any): {
                        typeUrl: string;
                        value: _579.MsgCreateProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _579.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _579.MsgExec;
                    };
                };
                fromPartial: {
                    createGroup(value: _579.MsgCreateGroup): {
                        typeUrl: string;
                        value: _579.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _579.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _579.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _579.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _579.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _579.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _579.MsgUpdateGroupMetadata;
                    };
                    createGroupAccount(value: _579.MsgCreateGroupAccount): {
                        typeUrl: string;
                        value: _579.MsgCreateGroupAccount;
                    };
                    updateGroupAccountAdmin(value: _579.MsgUpdateGroupAccountAdmin): {
                        typeUrl: string;
                        value: _579.MsgUpdateGroupAccountAdmin;
                    };
                    updateGroupAccountDecisionPolicy(value: _579.MsgUpdateGroupAccountDecisionPolicy): {
                        typeUrl: string;
                        value: _579.MsgUpdateGroupAccountDecisionPolicy;
                    };
                    updateGroupAccountMetadata(value: _579.MsgUpdateGroupAccountMetadata): {
                        typeUrl: string;
                        value: _579.MsgUpdateGroupAccountMetadata;
                    };
                    createProposal(value: _579.MsgCreateProposal): {
                        typeUrl: string;
                        value: _579.MsgCreateProposal;
                    };
                    vote(value: _579.MsgVote): {
                        typeUrl: string;
                        value: _579.MsgVote;
                    };
                    exec(value: _579.MsgExec): {
                        typeUrl: string;
                        value: _579.MsgExec;
                    };
                };
            };
            AminoConverter: {
                "/regen.group.v1alpha1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: ({ admin, members, metadata }: _579.MsgCreateGroup) => {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: Uint8Array;
                        }[];
                        metadata: Uint8Array;
                    };
                    fromAmino: ({ admin, members, metadata }: {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: Uint8Array;
                        }[];
                        metadata: Uint8Array;
                    }) => _579.MsgCreateGroup;
                };
                "/regen.group.v1alpha1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, memberUpdates }: _579.MsgUpdateGroupMembers) => {
                        admin: string;
                        group_id: string;
                        member_updates: {
                            address: string;
                            weight: string;
                            metadata: Uint8Array;
                        }[];
                    };
                    fromAmino: ({ admin, group_id, member_updates }: {
                        admin: string;
                        group_id: string;
                        member_updates: {
                            address: string;
                            weight: string;
                            metadata: Uint8Array;
                        }[];
                    }) => _579.MsgUpdateGroupMembers;
                };
                "/regen.group.v1alpha1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, newAdmin }: _579.MsgUpdateGroupAdmin) => {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, group_id, new_admin }: {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    }) => _579.MsgUpdateGroupAdmin;
                };
                "/regen.group.v1alpha1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata }: _579.MsgUpdateGroupMetadata) => {
                        admin: string;
                        group_id: string;
                        metadata: Uint8Array;
                    };
                    fromAmino: ({ admin, group_id, metadata }: {
                        admin: string;
                        group_id: string;
                        metadata: Uint8Array;
                    }) => _579.MsgUpdateGroupMetadata;
                };
                "/regen.group.v1alpha1.MsgCreateGroupAccount": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata, decisionPolicy }: _579.MsgCreateGroupAccount) => {
                        admin: string;
                        group_id: string;
                        metadata: Uint8Array;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ admin, group_id, metadata, decision_policy }: {
                        admin: string;
                        group_id: string;
                        metadata: Uint8Array;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _579.MsgCreateGroupAccount;
                };
                "/regen.group.v1alpha1.MsgUpdateGroupAccountAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, address, newAdmin }: _579.MsgUpdateGroupAccountAdmin) => {
                        admin: string;
                        address: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, address, new_admin }: {
                        admin: string;
                        address: string;
                        new_admin: string;
                    }) => _579.MsgUpdateGroupAccountAdmin;
                };
                "/regen.group.v1alpha1.MsgUpdateGroupAccountDecisionPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, address, decisionPolicy }: _579.MsgUpdateGroupAccountDecisionPolicy) => {
                        admin: string;
                        address: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ admin, address, decision_policy }: {
                        admin: string;
                        address: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _579.MsgUpdateGroupAccountDecisionPolicy;
                };
                "/regen.group.v1alpha1.MsgUpdateGroupAccountMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, address, metadata }: _579.MsgUpdateGroupAccountMetadata) => {
                        admin: string;
                        address: string;
                        metadata: Uint8Array;
                    };
                    fromAmino: ({ admin, address, metadata }: {
                        admin: string;
                        address: string;
                        metadata: Uint8Array;
                    }) => _579.MsgUpdateGroupAccountMetadata;
                };
                "/regen.group.v1alpha1.MsgCreateProposal": {
                    aminoType: string;
                    toAmino: ({ address, proposers, metadata, msgs, exec }: _579.MsgCreateProposal) => {
                        address: string;
                        proposers: string[];
                        metadata: Uint8Array;
                        msgs: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        exec: number;
                    };
                    fromAmino: ({ address, proposers, metadata, msgs, exec }: {
                        address: string;
                        proposers: string[];
                        metadata: Uint8Array;
                        msgs: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        exec: number;
                    }) => _579.MsgCreateProposal;
                };
                "/regen.group.v1alpha1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, choice, metadata, exec }: _579.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        choice: number;
                        metadata: Uint8Array;
                        exec: number;
                    };
                    fromAmino: ({ proposal_id, voter, choice, metadata, exec }: {
                        proposal_id: string;
                        voter: string;
                        choice: number;
                        metadata: Uint8Array;
                        exec: number;
                    }) => _579.MsgVote;
                };
                "/regen.group.v1alpha1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ proposalId, signer }: _579.MsgExec) => {
                        proposal_id: string;
                        signer: string;
                    };
                    fromAmino: ({ proposal_id, signer }: {
                        proposal_id: string;
                        signer: string;
                    }) => _579.MsgExec;
                };
            };
            choiceFromJSON(object: any): _580.Choice;
            choiceToJSON(object: _580.Choice): string;
            proposal_StatusFromJSON(object: any): _580.Proposal_Status;
            proposal_StatusToJSON(object: _580.Proposal_Status): string;
            proposal_ResultFromJSON(object: any): _580.Proposal_Result;
            proposal_ResultToJSON(object: _580.Proposal_Result): string;
            proposal_ExecutorResultFromJSON(object: any): _580.Proposal_ExecutorResult;
            proposal_ExecutorResultToJSON(object: _580.Proposal_ExecutorResult): string;
            Choice: typeof _580.Choice;
            Proposal_Status: typeof _580.Proposal_Status;
            Proposal_Result: typeof _580.Proposal_Result;
            Proposal_ExecutorResult: typeof _580.Proposal_ExecutorResult;
            Member: {
                encode(message: _580.Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _580.Member;
                fromJSON(object: any): _580.Member;
                toJSON(message: _580.Member): unknown;
                fromPartial(object: {
                    address?: string;
                    weight?: string;
                    metadata?: Uint8Array;
                }): _580.Member;
            };
            Members: {
                encode(message: _580.Members, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _580.Members;
                fromJSON(object: any): _580.Members;
                toJSON(message: _580.Members): unknown;
                fromPartial(object: {
                    members?: {
                        address?: string;
                        weight?: string;
                        metadata?: Uint8Array;
                    }[];
                }): _580.Members;
            };
            ThresholdDecisionPolicy: {
                encode(message: _580.ThresholdDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _580.ThresholdDecisionPolicy;
                fromJSON(object: any): _580.ThresholdDecisionPolicy;
                toJSON(message: _580.ThresholdDecisionPolicy): unknown;
                fromPartial(object: {
                    threshold?: string;
                    timeout?: string;
                }): _580.ThresholdDecisionPolicy;
            };
            GroupInfo: {
                encode(message: _580.GroupInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _580.GroupInfo;
                fromJSON(object: any): _580.GroupInfo;
                toJSON(message: _580.GroupInfo): unknown;
                fromPartial(object: {
                    groupId?: any;
                    admin?: string;
                    metadata?: Uint8Array;
                    version?: any;
                    totalWeight?: string;
                }): _580.GroupInfo;
            };
            GroupMember: {
                encode(message: _580.GroupMember, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _580.GroupMember;
                fromJSON(object: any): _580.GroupMember;
                toJSON(message: _580.GroupMember): unknown;
                fromPartial(object: {
                    groupId?: any;
                    member?: {
                        address?: string;
                        weight?: string;
                        metadata?: Uint8Array;
                    };
                }): _580.GroupMember;
            };
            GroupAccountInfo: {
                encode(message: _580.GroupAccountInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _580.GroupAccountInfo;
                fromJSON(object: any): _580.GroupAccountInfo;
                toJSON(message: _580.GroupAccountInfo): unknown;
                fromPartial(object: {
                    address?: string;
                    groupId?: any;
                    admin?: string;
                    metadata?: Uint8Array;
                    version?: any;
                    decisionPolicy?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    derivationKey?: Uint8Array;
                }): _580.GroupAccountInfo;
            };
            Proposal: {
                encode(message: _580.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _580.Proposal;
                fromJSON(object: any): _580.Proposal;
                toJSON(message: _580.Proposal): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    address?: string;
                    metadata?: Uint8Array;
                    proposers?: string[];
                    submittedAt?: Date;
                    groupVersion?: any;
                    groupAccountVersion?: any;
                    status?: _580.Proposal_Status;
                    result?: _580.Proposal_Result;
                    voteState?: {
                        yesCount?: string;
                        noCount?: string;
                        abstainCount?: string;
                        vetoCount?: string;
                    };
                    timeout?: Date;
                    executorResult?: _580.Proposal_ExecutorResult;
                    msgs?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _580.Proposal;
            };
            Tally: {
                encode(message: _580.Tally, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _580.Tally;
                fromJSON(object: any): _580.Tally;
                toJSON(message: _580.Tally): unknown;
                fromPartial(object: {
                    yesCount?: string;
                    noCount?: string;
                    abstainCount?: string;
                    vetoCount?: string;
                }): _580.Tally;
            };
            Vote: {
                encode(message: _580.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _580.Vote;
                fromJSON(object: any): _580.Vote;
                toJSON(message: _580.Vote): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    choice?: _580.Choice;
                    metadata?: Uint8Array;
                    submittedAt?: Date;
                }): _580.Vote;
            };
            execFromJSON(object: any): _579.Exec;
            execToJSON(object: _579.Exec): string;
            Exec: typeof _579.Exec;
            MsgCreateGroup: {
                encode(message: _579.MsgCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _579.MsgCreateGroup;
                fromJSON(object: any): _579.MsgCreateGroup;
                toJSON(message: _579.MsgCreateGroup): unknown;
                fromPartial(object: {
                    admin?: string;
                    members?: {
                        address?: string;
                        weight?: string;
                        metadata?: Uint8Array;
                    }[];
                    metadata?: Uint8Array;
                }): _579.MsgCreateGroup;
            };
            MsgCreateGroupResponse: {
                encode(message: _579.MsgCreateGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _579.MsgCreateGroupResponse;
                fromJSON(object: any): _579.MsgCreateGroupResponse;
                toJSON(message: _579.MsgCreateGroupResponse): unknown;
                fromPartial(object: {
                    groupId?: any;
                }): _579.MsgCreateGroupResponse;
            };
            MsgUpdateGroupMembers: {
                encode(message: _579.MsgUpdateGroupMembers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _579.MsgUpdateGroupMembers;
                fromJSON(object: any): _579.MsgUpdateGroupMembers;
                toJSON(message: _579.MsgUpdateGroupMembers): unknown;
                fromPartial(object: {
                    admin?: string;
                    groupId?: any;
                    memberUpdates?: {
                        address?: string;
                        weight?: string;
                        metadata?: Uint8Array;
                    }[];
                }): _579.MsgUpdateGroupMembers;
            };
            MsgUpdateGroupMembersResponse: {
                encode(_: _579.MsgUpdateGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _579.MsgUpdateGroupMembersResponse;
                fromJSON(_: any): _579.MsgUpdateGroupMembersResponse;
                toJSON(_: _579.MsgUpdateGroupMembersResponse): unknown;
                fromPartial(_: {}): _579.MsgUpdateGroupMembersResponse;
            };
            MsgUpdateGroupAdmin: {
                encode(message: _579.MsgUpdateGroupAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _579.MsgUpdateGroupAdmin;
                fromJSON(object: any): _579.MsgUpdateGroupAdmin;
                toJSON(message: _579.MsgUpdateGroupAdmin): unknown;
                fromPartial(object: {
                    admin?: string;
                    groupId?: any;
                    newAdmin?: string;
                }): _579.MsgUpdateGroupAdmin;
            };
            MsgUpdateGroupAdminResponse: {
                encode(_: _579.MsgUpdateGroupAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _579.MsgUpdateGroupAdminResponse;
                fromJSON(_: any): _579.MsgUpdateGroupAdminResponse;
                toJSON(_: _579.MsgUpdateGroupAdminResponse): unknown;
                fromPartial(_: {}): _579.MsgUpdateGroupAdminResponse;
            };
            MsgUpdateGroupMetadata: {
                encode(message: _579.MsgUpdateGroupMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _579.MsgUpdateGroupMetadata;
                fromJSON(object: any): _579.MsgUpdateGroupMetadata;
                toJSON(message: _579.MsgUpdateGroupMetadata): unknown;
                fromPartial(object: {
                    admin?: string;
                    groupId?: any;
                    metadata?: Uint8Array;
                }): _579.MsgUpdateGroupMetadata;
            };
            MsgUpdateGroupMetadataResponse: {
                encode(_: _579.MsgUpdateGroupMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _579.MsgUpdateGroupMetadataResponse;
                fromJSON(_: any): _579.MsgUpdateGroupMetadataResponse;
                toJSON(_: _579.MsgUpdateGroupMetadataResponse): unknown;
                fromPartial(_: {}): _579.MsgUpdateGroupMetadataResponse;
            };
            MsgCreateGroupAccount: {
                encode(message: _579.MsgCreateGroupAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _579.MsgCreateGroupAccount;
                fromJSON(object: any): _579.MsgCreateGroupAccount;
                toJSON(message: _579.MsgCreateGroupAccount): unknown;
                fromPartial(object: {
                    admin?: string;
                    groupId?: any;
                    metadata?: Uint8Array;
                    decisionPolicy?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _579.MsgCreateGroupAccount;
            };
            MsgCreateGroupAccountResponse: {
                encode(message: _579.MsgCreateGroupAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _579.MsgCreateGroupAccountResponse;
                fromJSON(object: any): _579.MsgCreateGroupAccountResponse;
                toJSON(message: _579.MsgCreateGroupAccountResponse): unknown;
                fromPartial(object: {
                    address?: string;
                }): _579.MsgCreateGroupAccountResponse;
            };
            MsgUpdateGroupAccountAdmin: {
                encode(message: _579.MsgUpdateGroupAccountAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _579.MsgUpdateGroupAccountAdmin;
                fromJSON(object: any): _579.MsgUpdateGroupAccountAdmin;
                toJSON(message: _579.MsgUpdateGroupAccountAdmin): unknown;
                fromPartial(object: {
                    admin?: string;
                    address?: string;
                    newAdmin?: string;
                }): _579.MsgUpdateGroupAccountAdmin;
            };
            MsgUpdateGroupAccountAdminResponse: {
                encode(_: _579.MsgUpdateGroupAccountAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _579.MsgUpdateGroupAccountAdminResponse;
                fromJSON(_: any): _579.MsgUpdateGroupAccountAdminResponse;
                toJSON(_: _579.MsgUpdateGroupAccountAdminResponse): unknown;
                fromPartial(_: {}): _579.MsgUpdateGroupAccountAdminResponse;
            };
            MsgUpdateGroupAccountDecisionPolicy: {
                encode(message: _579.MsgUpdateGroupAccountDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _579.MsgUpdateGroupAccountDecisionPolicy;
                fromJSON(object: any): _579.MsgUpdateGroupAccountDecisionPolicy;
                toJSON(message: _579.MsgUpdateGroupAccountDecisionPolicy): unknown;
                fromPartial(object: {
                    admin?: string;
                    address?: string;
                    decisionPolicy?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _579.MsgUpdateGroupAccountDecisionPolicy;
            };
            MsgUpdateGroupAccountDecisionPolicyResponse: {
                encode(_: _579.MsgUpdateGroupAccountDecisionPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _579.MsgUpdateGroupAccountDecisionPolicyResponse;
                fromJSON(_: any): _579.MsgUpdateGroupAccountDecisionPolicyResponse;
                toJSON(_: _579.MsgUpdateGroupAccountDecisionPolicyResponse): unknown;
                fromPartial(_: {}): _579.MsgUpdateGroupAccountDecisionPolicyResponse;
            };
            MsgUpdateGroupAccountMetadata: {
                encode(message: _579.MsgUpdateGroupAccountMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _579.MsgUpdateGroupAccountMetadata;
                fromJSON(object: any): _579.MsgUpdateGroupAccountMetadata;
                toJSON(message: _579.MsgUpdateGroupAccountMetadata): unknown;
                fromPartial(object: {
                    admin?: string;
                    address?: string;
                    metadata?: Uint8Array;
                }): _579.MsgUpdateGroupAccountMetadata;
            };
            MsgUpdateGroupAccountMetadataResponse: {
                encode(_: _579.MsgUpdateGroupAccountMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _579.MsgUpdateGroupAccountMetadataResponse;
                fromJSON(_: any): _579.MsgUpdateGroupAccountMetadataResponse;
                toJSON(_: _579.MsgUpdateGroupAccountMetadataResponse): unknown;
                fromPartial(_: {}): _579.MsgUpdateGroupAccountMetadataResponse;
            };
            MsgCreateProposal: {
                encode(message: _579.MsgCreateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _579.MsgCreateProposal;
                fromJSON(object: any): _579.MsgCreateProposal;
                toJSON(message: _579.MsgCreateProposal): unknown;
                fromPartial(object: {
                    address?: string;
                    proposers?: string[];
                    metadata?: Uint8Array;
                    msgs?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    exec?: _579.Exec;
                }): _579.MsgCreateProposal;
            };
            MsgCreateProposalResponse: {
                encode(message: _579.MsgCreateProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _579.MsgCreateProposalResponse;
                fromJSON(object: any): _579.MsgCreateProposalResponse;
                toJSON(message: _579.MsgCreateProposalResponse): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _579.MsgCreateProposalResponse;
            };
            MsgVote: {
                encode(message: _579.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _579.MsgVote;
                fromJSON(object: any): _579.MsgVote;
                toJSON(message: _579.MsgVote): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    choice?: _580.Choice;
                    metadata?: Uint8Array;
                    exec?: _579.Exec;
                }): _579.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _579.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _579.MsgVoteResponse;
                fromJSON(_: any): _579.MsgVoteResponse;
                toJSON(_: _579.MsgVoteResponse): unknown;
                fromPartial(_: {}): _579.MsgVoteResponse;
            };
            MsgExec: {
                encode(message: _579.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _579.MsgExec;
                fromJSON(object: any): _579.MsgExec;
                toJSON(message: _579.MsgExec): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    signer?: string;
                }): _579.MsgExec;
            };
            MsgExecResponse: {
                encode(_: _579.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _579.MsgExecResponse;
                fromJSON(_: any): _579.MsgExecResponse;
                toJSON(_: _579.MsgExecResponse): unknown;
                fromPartial(_: {}): _579.MsgExecResponse;
            };
            QueryGroupInfoRequest: {
                encode(message: _578.QueryGroupInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _578.QueryGroupInfoRequest;
                fromJSON(object: any): _578.QueryGroupInfoRequest;
                toJSON(message: _578.QueryGroupInfoRequest): unknown;
                fromPartial(object: {
                    groupId?: any;
                }): _578.QueryGroupInfoRequest;
            };
            QueryGroupInfoResponse: {
                encode(message: _578.QueryGroupInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _578.QueryGroupInfoResponse;
                fromJSON(object: any): _578.QueryGroupInfoResponse;
                toJSON(message: _578.QueryGroupInfoResponse): unknown;
                fromPartial(object: {
                    info?: {
                        groupId?: any;
                        admin?: string;
                        metadata?: Uint8Array;
                        version?: any;
                        totalWeight?: string;
                    };
                }): _578.QueryGroupInfoResponse;
            };
            QueryGroupAccountInfoRequest: {
                encode(message: _578.QueryGroupAccountInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _578.QueryGroupAccountInfoRequest;
                fromJSON(object: any): _578.QueryGroupAccountInfoRequest;
                toJSON(message: _578.QueryGroupAccountInfoRequest): unknown;
                fromPartial(object: {
                    address?: string;
                }): _578.QueryGroupAccountInfoRequest;
            };
            QueryGroupAccountInfoResponse: {
                encode(message: _578.QueryGroupAccountInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _578.QueryGroupAccountInfoResponse;
                fromJSON(object: any): _578.QueryGroupAccountInfoResponse;
                toJSON(message: _578.QueryGroupAccountInfoResponse): unknown;
                fromPartial(object: {
                    info?: {
                        address?: string;
                        groupId?: any;
                        admin?: string;
                        metadata?: Uint8Array;
                        version?: any;
                        decisionPolicy?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        derivationKey?: Uint8Array;
                    };
                }): _578.QueryGroupAccountInfoResponse;
            };
            QueryGroupMembersRequest: {
                encode(message: _578.QueryGroupMembersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _578.QueryGroupMembersRequest;
                fromJSON(object: any): _578.QueryGroupMembersRequest;
                toJSON(message: _578.QueryGroupMembersRequest): unknown;
                fromPartial(object: {
                    groupId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _578.QueryGroupMembersRequest;
            };
            QueryGroupMembersResponse: {
                encode(message: _578.QueryGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _578.QueryGroupMembersResponse;
                fromJSON(object: any): _578.QueryGroupMembersResponse;
                toJSON(message: _578.QueryGroupMembersResponse): unknown;
                fromPartial(object: {
                    members?: {
                        groupId?: any;
                        member?: {
                            address?: string;
                            weight?: string;
                            metadata?: Uint8Array;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _578.QueryGroupMembersResponse;
            };
            QueryGroupsByAdminRequest: {
                encode(message: _578.QueryGroupsByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _578.QueryGroupsByAdminRequest;
                fromJSON(object: any): _578.QueryGroupsByAdminRequest;
                toJSON(message: _578.QueryGroupsByAdminRequest): unknown;
                fromPartial(object: {
                    admin?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _578.QueryGroupsByAdminRequest;
            };
            QueryGroupsByAdminResponse: {
                encode(message: _578.QueryGroupsByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _578.QueryGroupsByAdminResponse;
                fromJSON(object: any): _578.QueryGroupsByAdminResponse;
                toJSON(message: _578.QueryGroupsByAdminResponse): unknown;
                fromPartial(object: {
                    groups?: {
                        groupId?: any;
                        admin?: string;
                        metadata?: Uint8Array;
                        version?: any;
                        totalWeight?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _578.QueryGroupsByAdminResponse;
            };
            QueryGroupAccountsByGroupRequest: {
                encode(message: _578.QueryGroupAccountsByGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _578.QueryGroupAccountsByGroupRequest;
                fromJSON(object: any): _578.QueryGroupAccountsByGroupRequest;
                toJSON(message: _578.QueryGroupAccountsByGroupRequest): unknown;
                fromPartial(object: {
                    groupId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _578.QueryGroupAccountsByGroupRequest;
            };
            QueryGroupAccountsByGroupResponse: {
                encode(message: _578.QueryGroupAccountsByGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _578.QueryGroupAccountsByGroupResponse;
                fromJSON(object: any): _578.QueryGroupAccountsByGroupResponse;
                toJSON(message: _578.QueryGroupAccountsByGroupResponse): unknown;
                fromPartial(object: {
                    groupAccounts?: {
                        address?: string;
                        groupId?: any;
                        admin?: string;
                        metadata?: Uint8Array;
                        version?: any;
                        decisionPolicy?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        derivationKey?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _578.QueryGroupAccountsByGroupResponse;
            };
            QueryGroupAccountsByAdminRequest: {
                encode(message: _578.QueryGroupAccountsByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _578.QueryGroupAccountsByAdminRequest;
                fromJSON(object: any): _578.QueryGroupAccountsByAdminRequest;
                toJSON(message: _578.QueryGroupAccountsByAdminRequest): unknown;
                fromPartial(object: {
                    admin?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _578.QueryGroupAccountsByAdminRequest;
            };
            QueryGroupAccountsByAdminResponse: {
                encode(message: _578.QueryGroupAccountsByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _578.QueryGroupAccountsByAdminResponse;
                fromJSON(object: any): _578.QueryGroupAccountsByAdminResponse;
                toJSON(message: _578.QueryGroupAccountsByAdminResponse): unknown;
                fromPartial(object: {
                    groupAccounts?: {
                        address?: string;
                        groupId?: any;
                        admin?: string;
                        metadata?: Uint8Array;
                        version?: any;
                        decisionPolicy?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        derivationKey?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _578.QueryGroupAccountsByAdminResponse;
            };
            QueryProposalRequest: {
                encode(message: _578.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _578.QueryProposalRequest;
                fromJSON(object: any): _578.QueryProposalRequest;
                toJSON(message: _578.QueryProposalRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _578.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _578.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _578.QueryProposalResponse;
                fromJSON(object: any): _578.QueryProposalResponse;
                toJSON(message: _578.QueryProposalResponse): unknown;
                fromPartial(object: {
                    proposal?: {
                        proposalId?: any;
                        address?: string;
                        metadata?: Uint8Array;
                        proposers?: string[];
                        submittedAt?: Date;
                        groupVersion?: any;
                        groupAccountVersion?: any;
                        status?: _580.Proposal_Status;
                        result?: _580.Proposal_Result;
                        voteState?: {
                            yesCount?: string;
                            noCount?: string;
                            abstainCount?: string;
                            vetoCount?: string;
                        };
                        timeout?: Date;
                        executorResult?: _580.Proposal_ExecutorResult;
                        msgs?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    };
                }): _578.QueryProposalResponse;
            };
            QueryProposalsByGroupAccountRequest: {
                encode(message: _578.QueryProposalsByGroupAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _578.QueryProposalsByGroupAccountRequest;
                fromJSON(object: any): _578.QueryProposalsByGroupAccountRequest;
                toJSON(message: _578.QueryProposalsByGroupAccountRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _578.QueryProposalsByGroupAccountRequest;
            };
            QueryProposalsByGroupAccountResponse: {
                encode(message: _578.QueryProposalsByGroupAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _578.QueryProposalsByGroupAccountResponse;
                fromJSON(object: any): _578.QueryProposalsByGroupAccountResponse;
                toJSON(message: _578.QueryProposalsByGroupAccountResponse): unknown;
                fromPartial(object: {
                    proposals?: {
                        proposalId?: any;
                        address?: string;
                        metadata?: Uint8Array;
                        proposers?: string[];
                        submittedAt?: Date;
                        groupVersion?: any;
                        groupAccountVersion?: any;
                        status?: _580.Proposal_Status;
                        result?: _580.Proposal_Result;
                        voteState?: {
                            yesCount?: string;
                            noCount?: string;
                            abstainCount?: string;
                            vetoCount?: string;
                        };
                        timeout?: Date;
                        executorResult?: _580.Proposal_ExecutorResult;
                        msgs?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _578.QueryProposalsByGroupAccountResponse;
            };
            QueryVoteByProposalVoterRequest: {
                encode(message: _578.QueryVoteByProposalVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _578.QueryVoteByProposalVoterRequest;
                fromJSON(object: any): _578.QueryVoteByProposalVoterRequest;
                toJSON(message: _578.QueryVoteByProposalVoterRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                }): _578.QueryVoteByProposalVoterRequest;
            };
            QueryVoteByProposalVoterResponse: {
                encode(message: _578.QueryVoteByProposalVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _578.QueryVoteByProposalVoterResponse;
                fromJSON(object: any): _578.QueryVoteByProposalVoterResponse;
                toJSON(message: _578.QueryVoteByProposalVoterResponse): unknown;
                fromPartial(object: {
                    vote?: {
                        proposalId?: any;
                        voter?: string;
                        choice?: _580.Choice;
                        metadata?: Uint8Array;
                        submittedAt?: Date;
                    };
                }): _578.QueryVoteByProposalVoterResponse;
            };
            QueryVotesByProposalRequest: {
                encode(message: _578.QueryVotesByProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _578.QueryVotesByProposalRequest;
                fromJSON(object: any): _578.QueryVotesByProposalRequest;
                toJSON(message: _578.QueryVotesByProposalRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _578.QueryVotesByProposalRequest;
            };
            QueryVotesByProposalResponse: {
                encode(message: _578.QueryVotesByProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _578.QueryVotesByProposalResponse;
                fromJSON(object: any): _578.QueryVotesByProposalResponse;
                toJSON(message: _578.QueryVotesByProposalResponse): unknown;
                fromPartial(object: {
                    votes?: {
                        proposalId?: any;
                        voter?: string;
                        choice?: _580.Choice;
                        metadata?: Uint8Array;
                        submittedAt?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _578.QueryVotesByProposalResponse;
            };
            QueryVotesByVoterRequest: {
                encode(message: _578.QueryVotesByVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _578.QueryVotesByVoterRequest;
                fromJSON(object: any): _578.QueryVotesByVoterRequest;
                toJSON(message: _578.QueryVotesByVoterRequest): unknown;
                fromPartial(object: {
                    voter?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _578.QueryVotesByVoterRequest;
            };
            QueryVotesByVoterResponse: {
                encode(message: _578.QueryVotesByVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _578.QueryVotesByVoterResponse;
                fromJSON(object: any): _578.QueryVotesByVoterResponse;
                toJSON(message: _578.QueryVotesByVoterResponse): unknown;
                fromPartial(object: {
                    votes?: {
                        proposalId?: any;
                        voter?: string;
                        choice?: _580.Choice;
                        metadata?: Uint8Array;
                        submittedAt?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _578.QueryVotesByVoterResponse;
            };
            GenesisState: {
                encode(message: _577.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _577.GenesisState;
                fromJSON(object: any): _577.GenesisState;
                toJSON(message: _577.GenesisState): unknown;
                fromPartial(object: {
                    groupSeq?: any;
                    groups?: {
                        groupId?: any;
                        admin?: string;
                        metadata?: Uint8Array;
                        version?: any;
                        totalWeight?: string;
                    }[];
                    groupMembers?: {
                        groupId?: any;
                        member?: {
                            address?: string;
                            weight?: string;
                            metadata?: Uint8Array;
                        };
                    }[];
                    groupAccountSeq?: any;
                    groupAccounts?: {
                        address?: string;
                        groupId?: any;
                        admin?: string;
                        metadata?: Uint8Array;
                        version?: any;
                        decisionPolicy?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        derivationKey?: Uint8Array;
                    }[];
                    proposalSeq?: any;
                    proposals?: {
                        proposalId?: any;
                        address?: string;
                        metadata?: Uint8Array;
                        proposers?: string[];
                        submittedAt?: Date;
                        groupVersion?: any;
                        groupAccountVersion?: any;
                        status?: _580.Proposal_Status;
                        result?: _580.Proposal_Result;
                        voteState?: {
                            yesCount?: string;
                            noCount?: string;
                            abstainCount?: string;
                            vetoCount?: string;
                        };
                        timeout?: Date;
                        executorResult?: _580.Proposal_ExecutorResult;
                        msgs?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    }[];
                    votes?: {
                        proposalId?: any;
                        voter?: string;
                        choice?: _580.Choice;
                        metadata?: Uint8Array;
                        submittedAt?: Date;
                    }[];
                }): _577.GenesisState;
            };
            EventCreateGroup: {
                encode(message: _576.EventCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _576.EventCreateGroup;
                fromJSON(object: any): _576.EventCreateGroup;
                toJSON(message: _576.EventCreateGroup): unknown;
                fromPartial(object: {
                    groupId?: any;
                }): _576.EventCreateGroup;
            };
            EventUpdateGroup: {
                encode(message: _576.EventUpdateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _576.EventUpdateGroup;
                fromJSON(object: any): _576.EventUpdateGroup;
                toJSON(message: _576.EventUpdateGroup): unknown;
                fromPartial(object: {
                    groupId?: any;
                }): _576.EventUpdateGroup;
            };
            EventCreateGroupAccount: {
                encode(message: _576.EventCreateGroupAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _576.EventCreateGroupAccount;
                fromJSON(object: any): _576.EventCreateGroupAccount;
                toJSON(message: _576.EventCreateGroupAccount): unknown;
                fromPartial(object: {
                    address?: string;
                }): _576.EventCreateGroupAccount;
            };
            EventUpdateGroupAccount: {
                encode(message: _576.EventUpdateGroupAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _576.EventUpdateGroupAccount;
                fromJSON(object: any): _576.EventUpdateGroupAccount;
                toJSON(message: _576.EventUpdateGroupAccount): unknown;
                fromPartial(object: {
                    address?: string;
                }): _576.EventUpdateGroupAccount;
            };
            EventCreateProposal: {
                encode(message: _576.EventCreateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _576.EventCreateProposal;
                fromJSON(object: any): _576.EventCreateProposal;
                toJSON(message: _576.EventCreateProposal): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _576.EventCreateProposal;
            };
            EventVote: {
                encode(message: _576.EventVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _576.EventVote;
                fromJSON(object: any): _576.EventVote;
                toJSON(message: _576.EventVote): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _576.EventVote;
            };
            EventExec: {
                encode(message: _576.EventExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _576.EventExec;
                fromJSON(object: any): _576.EventExec;
                toJSON(message: _576.EventExec): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _576.EventExec;
            };
        };
    }
}
