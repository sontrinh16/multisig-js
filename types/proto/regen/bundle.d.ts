import * as _564 from "./data/v1/events";
import * as _565 from "./data/v1/query";
import * as _566 from "./data/v1/state";
import * as _567 from "./data/v1/tx";
import * as _568 from "./data/v1/types";
import * as _569 from "./data/v1alpha2/events";
import * as _570 from "./data/v1alpha2/genesis";
import * as _571 from "./data/v1alpha2/query";
import * as _572 from "./data/v1alpha2/tx";
import * as _573 from "./data/v1alpha2/types";
import * as _574 from "./ecocredit/basket/v1/events";
import * as _575 from "./ecocredit/basket/v1/query";
import * as _576 from "./ecocredit/basket/v1/state";
import * as _577 from "./ecocredit/basket/v1/tx";
import * as _578 from "./ecocredit/basket/v1/types";
import * as _579 from "./ecocredit/marketplace/v1/events";
import * as _580 from "./ecocredit/marketplace/v1/query";
import * as _581 from "./ecocredit/marketplace/v1/state";
import * as _582 from "./ecocredit/marketplace/v1/tx";
import * as _583 from "./ecocredit/marketplace/v1/types";
import * as _584 from "./ecocredit/orderbook/v1alpha1/memory";
import * as _585 from "./ecocredit/v1/events";
import * as _586 from "./ecocredit/v1/query";
import * as _587 from "./ecocredit/v1/state";
import * as _588 from "./ecocredit/v1/tx";
import * as _589 from "./ecocredit/v1/types";
import * as _590 from "./ecocredit/v1alpha1/events";
import * as _591 from "./ecocredit/v1alpha1/genesis";
import * as _592 from "./ecocredit/v1alpha1/query";
import * as _593 from "./ecocredit/v1alpha1/tx";
import * as _594 from "./ecocredit/v1alpha1/types";
import * as _595 from "./group/v1alpha1/events";
import * as _596 from "./group/v1alpha1/genesis";
import * as _597 from "./group/v1alpha1/query";
import * as _598 from "./group/v1alpha1/tx";
import * as _599 from "./group/v1alpha1/types";
export declare namespace regen {
    namespace data {
        const v1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    anchor(value: _567.MsgAnchor): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    attest(value: _567.MsgAttest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    defineResolver(value: _567.MsgDefineResolver): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    registerResolver(value: _567.MsgRegisterResolver): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    anchor(value: _567.MsgAnchor): {
                        typeUrl: string;
                        value: _567.MsgAnchor;
                    };
                    attest(value: _567.MsgAttest): {
                        typeUrl: string;
                        value: _567.MsgAttest;
                    };
                    defineResolver(value: _567.MsgDefineResolver): {
                        typeUrl: string;
                        value: _567.MsgDefineResolver;
                    };
                    registerResolver(value: _567.MsgRegisterResolver): {
                        typeUrl: string;
                        value: _567.MsgRegisterResolver;
                    };
                };
                toJSON: {
                    anchor(value: _567.MsgAnchor): {
                        typeUrl: string;
                        value: unknown;
                    };
                    attest(value: _567.MsgAttest): {
                        typeUrl: string;
                        value: unknown;
                    };
                    defineResolver(value: _567.MsgDefineResolver): {
                        typeUrl: string;
                        value: unknown;
                    };
                    registerResolver(value: _567.MsgRegisterResolver): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    anchor(value: any): {
                        typeUrl: string;
                        value: _567.MsgAnchor;
                    };
                    attest(value: any): {
                        typeUrl: string;
                        value: _567.MsgAttest;
                    };
                    defineResolver(value: any): {
                        typeUrl: string;
                        value: _567.MsgDefineResolver;
                    };
                    registerResolver(value: any): {
                        typeUrl: string;
                        value: _567.MsgRegisterResolver;
                    };
                };
                fromPartial: {
                    anchor(value: _567.MsgAnchor): {
                        typeUrl: string;
                        value: _567.MsgAnchor;
                    };
                    attest(value: _567.MsgAttest): {
                        typeUrl: string;
                        value: _567.MsgAttest;
                    };
                    defineResolver(value: _567.MsgDefineResolver): {
                        typeUrl: string;
                        value: _567.MsgDefineResolver;
                    };
                    registerResolver(value: _567.MsgRegisterResolver): {
                        typeUrl: string;
                        value: _567.MsgRegisterResolver;
                    };
                };
            };
            AminoConverter: {
                "/regen.data.v1.MsgAnchor": {
                    aminoType: string;
                    toAmino: ({ sender, contentHash }: _567.MsgAnchor) => {
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
                    }) => _567.MsgAnchor;
                };
                "/regen.data.v1.MsgAttest": {
                    aminoType: string;
                    toAmino: ({ attestor, contentHashes }: _567.MsgAttest) => {
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
                    }) => _567.MsgAttest;
                };
                "/regen.data.v1.MsgDefineResolver": {
                    aminoType: string;
                    toAmino: ({ manager, resolverUrl }: _567.MsgDefineResolver) => {
                        manager: string;
                        resolver_url: string;
                    };
                    fromAmino: ({ manager, resolver_url }: {
                        manager: string;
                        resolver_url: string;
                    }) => _567.MsgDefineResolver;
                };
                "/regen.data.v1.MsgRegisterResolver": {
                    aminoType: string;
                    toAmino: ({ manager, resolverId, contentHashes }: _567.MsgRegisterResolver) => {
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
                    }) => _567.MsgRegisterResolver;
                };
            };
            digestAlgorithmFromJSON(object: any): _568.DigestAlgorithm;
            digestAlgorithmToJSON(object: _568.DigestAlgorithm): string;
            rawMediaTypeFromJSON(object: any): _568.RawMediaType;
            rawMediaTypeToJSON(object: _568.RawMediaType): string;
            graphCanonicalizationAlgorithmFromJSON(object: any): _568.GraphCanonicalizationAlgorithm;
            graphCanonicalizationAlgorithmToJSON(object: _568.GraphCanonicalizationAlgorithm): string;
            graphMerkleTreeFromJSON(object: any): _568.GraphMerkleTree;
            graphMerkleTreeToJSON(object: _568.GraphMerkleTree): string;
            DigestAlgorithm: typeof _568.DigestAlgorithm;
            RawMediaType: typeof _568.RawMediaType;
            GraphCanonicalizationAlgorithm: typeof _568.GraphCanonicalizationAlgorithm;
            GraphMerkleTree: typeof _568.GraphMerkleTree;
            ContentHash: {
                encode(message: _568.ContentHash, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _568.ContentHash;
                fromJSON(object: any): _568.ContentHash;
                toJSON(message: _568.ContentHash): unknown;
                fromPartial(object: {
                    raw?: {
                        hash?: Uint8Array;
                        digestAlgorithm?: _568.DigestAlgorithm;
                        mediaType?: _568.RawMediaType;
                    };
                    graph?: {
                        hash?: Uint8Array;
                        digestAlgorithm?: _568.DigestAlgorithm;
                        canonicalizationAlgorithm?: _568.GraphCanonicalizationAlgorithm;
                        merkleTree?: _568.GraphMerkleTree;
                    };
                }): _568.ContentHash;
            };
            ContentHash_Raw: {
                encode(message: _568.ContentHash_Raw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _568.ContentHash_Raw;
                fromJSON(object: any): _568.ContentHash_Raw;
                toJSON(message: _568.ContentHash_Raw): unknown;
                fromPartial(object: {
                    hash?: Uint8Array;
                    digestAlgorithm?: _568.DigestAlgorithm;
                    mediaType?: _568.RawMediaType;
                }): _568.ContentHash_Raw;
            };
            ContentHash_Graph: {
                encode(message: _568.ContentHash_Graph, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _568.ContentHash_Graph;
                fromJSON(object: any): _568.ContentHash_Graph;
                toJSON(message: _568.ContentHash_Graph): unknown;
                fromPartial(object: {
                    hash?: Uint8Array;
                    digestAlgorithm?: _568.DigestAlgorithm;
                    canonicalizationAlgorithm?: _568.GraphCanonicalizationAlgorithm;
                    merkleTree?: _568.GraphMerkleTree;
                }): _568.ContentHash_Graph;
            };
            ContentEntry: {
                encode(message: _568.ContentEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _568.ContentEntry;
                fromJSON(object: any): _568.ContentEntry;
                toJSON(message: _568.ContentEntry): unknown;
                fromPartial(object: {
                    contentHash?: {
                        raw?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _568.DigestAlgorithm;
                            mediaType?: _568.RawMediaType;
                        };
                        graph?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _568.DigestAlgorithm;
                            canonicalizationAlgorithm?: _568.GraphCanonicalizationAlgorithm;
                            merkleTree?: _568.GraphMerkleTree;
                        };
                    };
                    iri?: string;
                    timestamp?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _568.ContentEntry;
            };
            AttestorEntry: {
                encode(message: _568.AttestorEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _568.AttestorEntry;
                fromJSON(object: any): _568.AttestorEntry;
                toJSON(message: _568.AttestorEntry): unknown;
                fromPartial(object: {
                    iri?: string;
                    attestor?: string;
                    timestamp?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _568.AttestorEntry;
            };
            ContentHashes: {
                encode(message: _568.ContentHashes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _568.ContentHashes;
                fromJSON(object: any): _568.ContentHashes;
                toJSON(message: _568.ContentHashes): unknown;
                fromPartial(object: {
                    contentHashes?: {
                        raw?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _568.DigestAlgorithm;
                            mediaType?: _568.RawMediaType;
                        };
                        graph?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _568.DigestAlgorithm;
                            canonicalizationAlgorithm?: _568.GraphCanonicalizationAlgorithm;
                            merkleTree?: _568.GraphMerkleTree;
                        };
                    }[];
                }): _568.ContentHashes;
            };
            MsgAnchor: {
                encode(message: _567.MsgAnchor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _567.MsgAnchor;
                fromJSON(object: any): _567.MsgAnchor;
                toJSON(message: _567.MsgAnchor): unknown;
                fromPartial(object: {
                    sender?: string;
                    contentHash?: {
                        raw?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _568.DigestAlgorithm;
                            mediaType?: _568.RawMediaType;
                        };
                        graph?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _568.DigestAlgorithm;
                            canonicalizationAlgorithm?: _568.GraphCanonicalizationAlgorithm;
                            merkleTree?: _568.GraphMerkleTree;
                        };
                    };
                }): _567.MsgAnchor;
            };
            MsgAnchorResponse: {
                encode(message: _567.MsgAnchorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _567.MsgAnchorResponse;
                fromJSON(object: any): _567.MsgAnchorResponse;
                toJSON(message: _567.MsgAnchorResponse): unknown;
                fromPartial(object: {
                    iri?: string;
                    timestamp?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _567.MsgAnchorResponse;
            };
            MsgAttest: {
                encode(message: _567.MsgAttest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _567.MsgAttest;
                fromJSON(object: any): _567.MsgAttest;
                toJSON(message: _567.MsgAttest): unknown;
                fromPartial(object: {
                    attestor?: string;
                    contentHashes?: {
                        hash?: Uint8Array;
                        digestAlgorithm?: _568.DigestAlgorithm;
                        canonicalizationAlgorithm?: _568.GraphCanonicalizationAlgorithm;
                        merkleTree?: _568.GraphMerkleTree;
                    }[];
                }): _567.MsgAttest;
            };
            MsgAttestResponse: {
                encode(message: _567.MsgAttestResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _567.MsgAttestResponse;
                fromJSON(object: any): _567.MsgAttestResponse;
                toJSON(message: _567.MsgAttestResponse): unknown;
                fromPartial(object: {
                    newEntries?: {
                        iri?: string;
                        attestor?: string;
                        timestamp?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                }): _567.MsgAttestResponse;
            };
            MsgDefineResolver: {
                encode(message: _567.MsgDefineResolver, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _567.MsgDefineResolver;
                fromJSON(object: any): _567.MsgDefineResolver;
                toJSON(message: _567.MsgDefineResolver): unknown;
                fromPartial(object: {
                    manager?: string;
                    resolverUrl?: string;
                }): _567.MsgDefineResolver;
            };
            MsgDefineResolverResponse: {
                encode(message: _567.MsgDefineResolverResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _567.MsgDefineResolverResponse;
                fromJSON(object: any): _567.MsgDefineResolverResponse;
                toJSON(message: _567.MsgDefineResolverResponse): unknown;
                fromPartial(object: {
                    resolverId?: any;
                }): _567.MsgDefineResolverResponse;
            };
            MsgRegisterResolver: {
                encode(message: _567.MsgRegisterResolver, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _567.MsgRegisterResolver;
                fromJSON(object: any): _567.MsgRegisterResolver;
                toJSON(message: _567.MsgRegisterResolver): unknown;
                fromPartial(object: {
                    manager?: string;
                    resolverId?: any;
                    contentHashes?: {
                        raw?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _568.DigestAlgorithm;
                            mediaType?: _568.RawMediaType;
                        };
                        graph?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _568.DigestAlgorithm;
                            canonicalizationAlgorithm?: _568.GraphCanonicalizationAlgorithm;
                            merkleTree?: _568.GraphMerkleTree;
                        };
                    }[];
                }): _567.MsgRegisterResolver;
            };
            MsgRegisterResolverResponse: {
                encode(_: _567.MsgRegisterResolverResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _567.MsgRegisterResolverResponse;
                fromJSON(_: any): _567.MsgRegisterResolverResponse;
                toJSON(_: _567.MsgRegisterResolverResponse): unknown;
                fromPartial(_: {}): _567.MsgRegisterResolverResponse;
            };
            DataID: {
                encode(message: _566.DataID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _566.DataID;
                fromJSON(object: any): _566.DataID;
                toJSON(message: _566.DataID): unknown;
                fromPartial(object: {
                    id?: Uint8Array;
                    iri?: string;
                }): _566.DataID;
            };
            DataAnchor: {
                encode(message: _566.DataAnchor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _566.DataAnchor;
                fromJSON(object: any): _566.DataAnchor;
                toJSON(message: _566.DataAnchor): unknown;
                fromPartial(object: {
                    id?: Uint8Array;
                    timestamp?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _566.DataAnchor;
            };
            DataAttestor: {
                encode(message: _566.DataAttestor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _566.DataAttestor;
                fromJSON(object: any): _566.DataAttestor;
                toJSON(message: _566.DataAttestor): unknown;
                fromPartial(object: {
                    id?: Uint8Array;
                    attestor?: Uint8Array;
                    timestamp?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _566.DataAttestor;
            };
            ResolverInfo: {
                encode(message: _566.ResolverInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _566.ResolverInfo;
                fromJSON(object: any): _566.ResolverInfo;
                toJSON(message: _566.ResolverInfo): unknown;
                fromPartial(object: {
                    id?: any;
                    url?: string;
                    manager?: Uint8Array;
                }): _566.ResolverInfo;
            };
            DataResolver: {
                encode(message: _566.DataResolver, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _566.DataResolver;
                fromJSON(object: any): _566.DataResolver;
                toJSON(message: _566.DataResolver): unknown;
                fromPartial(object: {
                    id?: Uint8Array;
                    resolverId?: any;
                }): _566.DataResolver;
            };
            QueryByIRIRequest: {
                encode(message: _565.QueryByIRIRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _565.QueryByIRIRequest;
                fromJSON(object: any): _565.QueryByIRIRequest;
                toJSON(message: _565.QueryByIRIRequest): unknown;
                fromPartial(object: {
                    iri?: string;
                }): _565.QueryByIRIRequest;
            };
            QueryByIRIResponse: {
                encode(message: _565.QueryByIRIResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _565.QueryByIRIResponse;
                fromJSON(object: any): _565.QueryByIRIResponse;
                toJSON(message: _565.QueryByIRIResponse): unknown;
                fromPartial(object: {
                    entry?: {
                        contentHash?: {
                            raw?: {
                                hash?: Uint8Array;
                                digestAlgorithm?: _568.DigestAlgorithm;
                                mediaType?: _568.RawMediaType;
                            };
                            graph?: {
                                hash?: Uint8Array;
                                digestAlgorithm?: _568.DigestAlgorithm;
                                canonicalizationAlgorithm?: _568.GraphCanonicalizationAlgorithm;
                                merkleTree?: _568.GraphMerkleTree;
                            };
                        };
                        iri?: string;
                        timestamp?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                }): _565.QueryByIRIResponse;
            };
            QueryByHashRequest: {
                encode(message: _565.QueryByHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _565.QueryByHashRequest;
                fromJSON(object: any): _565.QueryByHashRequest;
                toJSON(message: _565.QueryByHashRequest): unknown;
                fromPartial(object: {
                    contentHash?: {
                        raw?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _568.DigestAlgorithm;
                            mediaType?: _568.RawMediaType;
                        };
                        graph?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _568.DigestAlgorithm;
                            canonicalizationAlgorithm?: _568.GraphCanonicalizationAlgorithm;
                            merkleTree?: _568.GraphMerkleTree;
                        };
                    };
                }): _565.QueryByHashRequest;
            };
            QueryByHashResponse: {
                encode(message: _565.QueryByHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _565.QueryByHashResponse;
                fromJSON(object: any): _565.QueryByHashResponse;
                toJSON(message: _565.QueryByHashResponse): unknown;
                fromPartial(object: {
                    entry?: {
                        contentHash?: {
                            raw?: {
                                hash?: Uint8Array;
                                digestAlgorithm?: _568.DigestAlgorithm;
                                mediaType?: _568.RawMediaType;
                            };
                            graph?: {
                                hash?: Uint8Array;
                                digestAlgorithm?: _568.DigestAlgorithm;
                                canonicalizationAlgorithm?: _568.GraphCanonicalizationAlgorithm;
                                merkleTree?: _568.GraphMerkleTree;
                            };
                        };
                        iri?: string;
                        timestamp?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                }): _565.QueryByHashResponse;
            };
            QueryByAttestorRequest: {
                encode(message: _565.QueryByAttestorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _565.QueryByAttestorRequest;
                fromJSON(object: any): _565.QueryByAttestorRequest;
                toJSON(message: _565.QueryByAttestorRequest): unknown;
                fromPartial(object: {
                    attestor?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _565.QueryByAttestorRequest;
            };
            QueryByAttestorResponse: {
                encode(message: _565.QueryByAttestorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _565.QueryByAttestorResponse;
                fromJSON(object: any): _565.QueryByAttestorResponse;
                toJSON(message: _565.QueryByAttestorResponse): unknown;
                fromPartial(object: {
                    entries?: {
                        contentHash?: {
                            raw?: {
                                hash?: Uint8Array;
                                digestAlgorithm?: _568.DigestAlgorithm;
                                mediaType?: _568.RawMediaType;
                            };
                            graph?: {
                                hash?: Uint8Array;
                                digestAlgorithm?: _568.DigestAlgorithm;
                                canonicalizationAlgorithm?: _568.GraphCanonicalizationAlgorithm;
                                merkleTree?: _568.GraphMerkleTree;
                            };
                        };
                        iri?: string;
                        timestamp?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _565.QueryByAttestorResponse;
            };
            QueryIRIByHashRequest: {
                encode(message: _565.QueryIRIByHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _565.QueryIRIByHashRequest;
                fromJSON(object: any): _565.QueryIRIByHashRequest;
                toJSON(message: _565.QueryIRIByHashRequest): unknown;
                fromPartial(object: {
                    contentHash?: {
                        raw?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _568.DigestAlgorithm;
                            mediaType?: _568.RawMediaType;
                        };
                        graph?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _568.DigestAlgorithm;
                            canonicalizationAlgorithm?: _568.GraphCanonicalizationAlgorithm;
                            merkleTree?: _568.GraphMerkleTree;
                        };
                    };
                }): _565.QueryIRIByHashRequest;
            };
            QueryIRIByHashResponse: {
                encode(message: _565.QueryIRIByHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _565.QueryIRIByHashResponse;
                fromJSON(object: any): _565.QueryIRIByHashResponse;
                toJSON(message: _565.QueryIRIByHashResponse): unknown;
                fromPartial(object: {
                    iri?: string;
                }): _565.QueryIRIByHashResponse;
            };
            QueryIRIByRawHashRequest: {
                encode(message: _565.QueryIRIByRawHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _565.QueryIRIByRawHashRequest;
                fromJSON(object: any): _565.QueryIRIByRawHashRequest;
                toJSON(message: _565.QueryIRIByRawHashRequest): unknown;
                fromPartial(object: {
                    hash?: string;
                    digestAlgorithm?: _568.DigestAlgorithm;
                    mediaType?: _568.RawMediaType;
                }): _565.QueryIRIByRawHashRequest;
            };
            QueryIRIByRawHashResponse: {
                encode(message: _565.QueryIRIByRawHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _565.QueryIRIByRawHashResponse;
                fromJSON(object: any): _565.QueryIRIByRawHashResponse;
                toJSON(message: _565.QueryIRIByRawHashResponse): unknown;
                fromPartial(object: {
                    iri?: string;
                }): _565.QueryIRIByRawHashResponse;
            };
            QueryIRIByGraphHashRequest: {
                encode(message: _565.QueryIRIByGraphHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _565.QueryIRIByGraphHashRequest;
                fromJSON(object: any): _565.QueryIRIByGraphHashRequest;
                toJSON(message: _565.QueryIRIByGraphHashRequest): unknown;
                fromPartial(object: {
                    hash?: string;
                    digestAlgorithm?: _568.DigestAlgorithm;
                    canonicalizationAlgorithm?: _568.GraphCanonicalizationAlgorithm;
                    merkleTree?: _568.GraphMerkleTree;
                }): _565.QueryIRIByGraphHashRequest;
            };
            QueryIRIByGraphHashResponse: {
                encode(message: _565.QueryIRIByGraphHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _565.QueryIRIByGraphHashResponse;
                fromJSON(object: any): _565.QueryIRIByGraphHashResponse;
                toJSON(message: _565.QueryIRIByGraphHashResponse): unknown;
                fromPartial(object: {
                    iri?: string;
                }): _565.QueryIRIByGraphHashResponse;
            };
            QueryHashByIRIRequest: {
                encode(message: _565.QueryHashByIRIRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _565.QueryHashByIRIRequest;
                fromJSON(object: any): _565.QueryHashByIRIRequest;
                toJSON(message: _565.QueryHashByIRIRequest): unknown;
                fromPartial(object: {
                    iri?: string;
                }): _565.QueryHashByIRIRequest;
            };
            QueryHashByIRIResponse: {
                encode(message: _565.QueryHashByIRIResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _565.QueryHashByIRIResponse;
                fromJSON(object: any): _565.QueryHashByIRIResponse;
                toJSON(message: _565.QueryHashByIRIResponse): unknown;
                fromPartial(object: {
                    contentHash?: {
                        raw?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _568.DigestAlgorithm;
                            mediaType?: _568.RawMediaType;
                        };
                        graph?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _568.DigestAlgorithm;
                            canonicalizationAlgorithm?: _568.GraphCanonicalizationAlgorithm;
                            merkleTree?: _568.GraphMerkleTree;
                        };
                    };
                }): _565.QueryHashByIRIResponse;
            };
            QueryAttestorsByIRIRequest: {
                encode(message: _565.QueryAttestorsByIRIRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _565.QueryAttestorsByIRIRequest;
                fromJSON(object: any): _565.QueryAttestorsByIRIRequest;
                toJSON(message: _565.QueryAttestorsByIRIRequest): unknown;
                fromPartial(object: {
                    iri?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _565.QueryAttestorsByIRIRequest;
            };
            QueryAttestorsByIRIResponse: {
                encode(message: _565.QueryAttestorsByIRIResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _565.QueryAttestorsByIRIResponse;
                fromJSON(object: any): _565.QueryAttestorsByIRIResponse;
                toJSON(message: _565.QueryAttestorsByIRIResponse): unknown;
                fromPartial(object: {
                    attestors?: string[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _565.QueryAttestorsByIRIResponse;
            };
            QueryAttestorsByHashRequest: {
                encode(message: _565.QueryAttestorsByHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _565.QueryAttestorsByHashRequest;
                fromJSON(object: any): _565.QueryAttestorsByHashRequest;
                toJSON(message: _565.QueryAttestorsByHashRequest): unknown;
                fromPartial(object: {
                    contentHash?: {
                        raw?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _568.DigestAlgorithm;
                            mediaType?: _568.RawMediaType;
                        };
                        graph?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _568.DigestAlgorithm;
                            canonicalizationAlgorithm?: _568.GraphCanonicalizationAlgorithm;
                            merkleTree?: _568.GraphMerkleTree;
                        };
                    };
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _565.QueryAttestorsByHashRequest;
            };
            QueryAttestorsByHashResponse: {
                encode(message: _565.QueryAttestorsByHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _565.QueryAttestorsByHashResponse;
                fromJSON(object: any): _565.QueryAttestorsByHashResponse;
                toJSON(message: _565.QueryAttestorsByHashResponse): unknown;
                fromPartial(object: {
                    attestors?: string[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _565.QueryAttestorsByHashResponse;
            };
            QueryResolversByIRIRequest: {
                encode(message: _565.QueryResolversByIRIRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _565.QueryResolversByIRIRequest;
                fromJSON(object: any): _565.QueryResolversByIRIRequest;
                toJSON(message: _565.QueryResolversByIRIRequest): unknown;
                fromPartial(object: {
                    iri?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _565.QueryResolversByIRIRequest;
            };
            QueryResolversByIRIResponse: {
                encode(message: _565.QueryResolversByIRIResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _565.QueryResolversByIRIResponse;
                fromJSON(object: any): _565.QueryResolversByIRIResponse;
                toJSON(message: _565.QueryResolversByIRIResponse): unknown;
                fromPartial(object: {
                    resolverUrls?: string[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _565.QueryResolversByIRIResponse;
            };
            QueryResolversByHashRequest: {
                encode(message: _565.QueryResolversByHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _565.QueryResolversByHashRequest;
                fromJSON(object: any): _565.QueryResolversByHashRequest;
                toJSON(message: _565.QueryResolversByHashRequest): unknown;
                fromPartial(object: {
                    contentHash?: {
                        raw?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _568.DigestAlgorithm;
                            mediaType?: _568.RawMediaType;
                        };
                        graph?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _568.DigestAlgorithm;
                            canonicalizationAlgorithm?: _568.GraphCanonicalizationAlgorithm;
                            merkleTree?: _568.GraphMerkleTree;
                        };
                    };
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _565.QueryResolversByHashRequest;
            };
            QueryResolversByHashResponse: {
                encode(message: _565.QueryResolversByHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _565.QueryResolversByHashResponse;
                fromJSON(object: any): _565.QueryResolversByHashResponse;
                toJSON(message: _565.QueryResolversByHashResponse): unknown;
                fromPartial(object: {
                    resolverUrls?: string[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _565.QueryResolversByHashResponse;
            };
            QueryResolverInfoRequest: {
                encode(message: _565.QueryResolverInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _565.QueryResolverInfoRequest;
                fromJSON(object: any): _565.QueryResolverInfoRequest;
                toJSON(message: _565.QueryResolverInfoRequest): unknown;
                fromPartial(object: {
                    url?: string;
                }): _565.QueryResolverInfoRequest;
            };
            QueryResolverInfoResponse: {
                encode(message: _565.QueryResolverInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _565.QueryResolverInfoResponse;
                fromJSON(object: any): _565.QueryResolverInfoResponse;
                toJSON(message: _565.QueryResolverInfoResponse): unknown;
                fromPartial(object: {
                    id?: any;
                    manager?: string;
                }): _565.QueryResolverInfoResponse;
            };
            EventAnchor: {
                encode(message: _564.EventAnchor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _564.EventAnchor;
                fromJSON(object: any): _564.EventAnchor;
                toJSON(message: _564.EventAnchor): unknown;
                fromPartial(object: {
                    iri?: string;
                }): _564.EventAnchor;
            };
            EventAttest: {
                encode(message: _564.EventAttest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _564.EventAttest;
                fromJSON(object: any): _564.EventAttest;
                toJSON(message: _564.EventAttest): unknown;
                fromPartial(object: {
                    iri?: string;
                    attestor?: string;
                }): _564.EventAttest;
            };
            EventDefineResolver: {
                encode(message: _564.EventDefineResolver, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _564.EventDefineResolver;
                fromJSON(object: any): _564.EventDefineResolver;
                toJSON(message: _564.EventDefineResolver): unknown;
                fromPartial(object: {
                    id?: any;
                }): _564.EventDefineResolver;
            };
            EventRegisterResolver: {
                encode(message: _564.EventRegisterResolver, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _564.EventRegisterResolver;
                fromJSON(object: any): _564.EventRegisterResolver;
                toJSON(message: _564.EventRegisterResolver): unknown;
                fromPartial(object: {
                    id?: any;
                    iri?: string;
                }): _564.EventRegisterResolver;
            };
        };
        const v1alpha2: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    anchorData(value: _572.MsgAnchorData): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    signData(value: _572.MsgSignData): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    storeRawData(value: _572.MsgStoreRawData): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    anchorData(value: _572.MsgAnchorData): {
                        typeUrl: string;
                        value: _572.MsgAnchorData;
                    };
                    signData(value: _572.MsgSignData): {
                        typeUrl: string;
                        value: _572.MsgSignData;
                    };
                    storeRawData(value: _572.MsgStoreRawData): {
                        typeUrl: string;
                        value: _572.MsgStoreRawData;
                    };
                };
                toJSON: {
                    anchorData(value: _572.MsgAnchorData): {
                        typeUrl: string;
                        value: unknown;
                    };
                    signData(value: _572.MsgSignData): {
                        typeUrl: string;
                        value: unknown;
                    };
                    storeRawData(value: _572.MsgStoreRawData): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    anchorData(value: any): {
                        typeUrl: string;
                        value: _572.MsgAnchorData;
                    };
                    signData(value: any): {
                        typeUrl: string;
                        value: _572.MsgSignData;
                    };
                    storeRawData(value: any): {
                        typeUrl: string;
                        value: _572.MsgStoreRawData;
                    };
                };
                fromPartial: {
                    anchorData(value: _572.MsgAnchorData): {
                        typeUrl: string;
                        value: _572.MsgAnchorData;
                    };
                    signData(value: _572.MsgSignData): {
                        typeUrl: string;
                        value: _572.MsgSignData;
                    };
                    storeRawData(value: _572.MsgStoreRawData): {
                        typeUrl: string;
                        value: _572.MsgStoreRawData;
                    };
                };
            };
            AminoConverter: {
                "/regen.data.v1alpha2.MsgAnchorData": {
                    aminoType: string;
                    toAmino: ({ sender, hash }: _572.MsgAnchorData) => {
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
                    }) => _572.MsgAnchorData;
                };
                "/regen.data.v1alpha2.MsgSignData": {
                    aminoType: string;
                    toAmino: ({ signers, hash }: _572.MsgSignData) => {
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
                    }) => _572.MsgSignData;
                };
                "/regen.data.v1alpha2.MsgStoreRawData": {
                    aminoType: string;
                    toAmino: ({ sender, contentHash, content }: _572.MsgStoreRawData) => {
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
                    }) => _572.MsgStoreRawData;
                };
            };
            mediaTypeFromJSON(object: any): _573.MediaType;
            mediaTypeToJSON(object: _573.MediaType): string;
            graphCanonicalizationAlgorithmFromJSON(object: any): _573.GraphCanonicalizationAlgorithm;
            graphCanonicalizationAlgorithmToJSON(object: _573.GraphCanonicalizationAlgorithm): string;
            graphMerkleTreeFromJSON(object: any): _573.GraphMerkleTree;
            graphMerkleTreeToJSON(object: _573.GraphMerkleTree): string;
            digestAlgorithmFromJSON(object: any): _573.DigestAlgorithm;
            digestAlgorithmToJSON(object: _573.DigestAlgorithm): string;
            MediaType: typeof _573.MediaType;
            GraphCanonicalizationAlgorithm: typeof _573.GraphCanonicalizationAlgorithm;
            GraphMerkleTree: typeof _573.GraphMerkleTree;
            DigestAlgorithm: typeof _573.DigestAlgorithm;
            ContentHash: {
                encode(message: _573.ContentHash, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _573.ContentHash;
                fromJSON(object: any): _573.ContentHash;
                toJSON(message: _573.ContentHash): unknown;
                fromPartial(object: {
                    raw?: {
                        hash?: Uint8Array;
                        digestAlgorithm?: _573.DigestAlgorithm;
                        mediaType?: _573.MediaType;
                    };
                    graph?: {
                        hash?: Uint8Array;
                        digestAlgorithm?: _573.DigestAlgorithm;
                        canonicalizationAlgorithm?: _573.GraphCanonicalizationAlgorithm;
                        merkleTree?: _573.GraphMerkleTree;
                    };
                }): _573.ContentHash;
            };
            ContentHash_Raw: {
                encode(message: _573.ContentHash_Raw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _573.ContentHash_Raw;
                fromJSON(object: any): _573.ContentHash_Raw;
                toJSON(message: _573.ContentHash_Raw): unknown;
                fromPartial(object: {
                    hash?: Uint8Array;
                    digestAlgorithm?: _573.DigestAlgorithm;
                    mediaType?: _573.MediaType;
                }): _573.ContentHash_Raw;
            };
            ContentHash_Graph: {
                encode(message: _573.ContentHash_Graph, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _573.ContentHash_Graph;
                fromJSON(object: any): _573.ContentHash_Graph;
                toJSON(message: _573.ContentHash_Graph): unknown;
                fromPartial(object: {
                    hash?: Uint8Array;
                    digestAlgorithm?: _573.DigestAlgorithm;
                    canonicalizationAlgorithm?: _573.GraphCanonicalizationAlgorithm;
                    merkleTree?: _573.GraphMerkleTree;
                }): _573.ContentHash_Graph;
            };
            Content: {
                encode(message: _573.Content, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _573.Content;
                fromJSON(object: any): _573.Content;
                toJSON(message: _573.Content): unknown;
                fromPartial(object: {
                    rawData?: Uint8Array;
                }): _573.Content;
            };
            SignerEntry: {
                encode(message: _573.SignerEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _573.SignerEntry;
                fromJSON(object: any): _573.SignerEntry;
                toJSON(message: _573.SignerEntry): unknown;
                fromPartial(object: {
                    signer?: string;
                    timestamp?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _573.SignerEntry;
            };
            MsgAnchorData: {
                encode(message: _572.MsgAnchorData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _572.MsgAnchorData;
                fromJSON(object: any): _572.MsgAnchorData;
                toJSON(message: _572.MsgAnchorData): unknown;
                fromPartial(object: {
                    sender?: string;
                    hash?: {
                        raw?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _573.DigestAlgorithm;
                            mediaType?: _573.MediaType;
                        };
                        graph?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _573.DigestAlgorithm;
                            canonicalizationAlgorithm?: _573.GraphCanonicalizationAlgorithm;
                            merkleTree?: _573.GraphMerkleTree;
                        };
                    };
                }): _572.MsgAnchorData;
            };
            MsgAnchorDataResponse: {
                encode(message: _572.MsgAnchorDataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _572.MsgAnchorDataResponse;
                fromJSON(object: any): _572.MsgAnchorDataResponse;
                toJSON(message: _572.MsgAnchorDataResponse): unknown;
                fromPartial(object: {
                    timestamp?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _572.MsgAnchorDataResponse;
            };
            MsgSignData: {
                encode(message: _572.MsgSignData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _572.MsgSignData;
                fromJSON(object: any): _572.MsgSignData;
                toJSON(message: _572.MsgSignData): unknown;
                fromPartial(object: {
                    signers?: string[];
                    hash?: {
                        hash?: Uint8Array;
                        digestAlgorithm?: _573.DigestAlgorithm;
                        canonicalizationAlgorithm?: _573.GraphCanonicalizationAlgorithm;
                        merkleTree?: _573.GraphMerkleTree;
                    };
                }): _572.MsgSignData;
            };
            MsgSignDataResponse: {
                encode(_: _572.MsgSignDataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _572.MsgSignDataResponse;
                fromJSON(_: any): _572.MsgSignDataResponse;
                toJSON(_: _572.MsgSignDataResponse): unknown;
                fromPartial(_: {}): _572.MsgSignDataResponse;
            };
            MsgStoreRawData: {
                encode(message: _572.MsgStoreRawData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _572.MsgStoreRawData;
                fromJSON(object: any): _572.MsgStoreRawData;
                toJSON(message: _572.MsgStoreRawData): unknown;
                fromPartial(object: {
                    sender?: string;
                    contentHash?: {
                        hash?: Uint8Array;
                        digestAlgorithm?: _573.DigestAlgorithm;
                        mediaType?: _573.MediaType;
                    };
                    content?: Uint8Array;
                }): _572.MsgStoreRawData;
            };
            MsgStoreRawDataResponse: {
                encode(_: _572.MsgStoreRawDataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _572.MsgStoreRawDataResponse;
                fromJSON(_: any): _572.MsgStoreRawDataResponse;
                toJSON(_: _572.MsgStoreRawDataResponse): unknown;
                fromPartial(_: {}): _572.MsgStoreRawDataResponse;
            };
            QueryByHashRequest: {
                encode(message: _571.QueryByHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _571.QueryByHashRequest;
                fromJSON(object: any): _571.QueryByHashRequest;
                toJSON(message: _571.QueryByHashRequest): unknown;
                fromPartial(object: {
                    hash?: {
                        raw?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _573.DigestAlgorithm;
                            mediaType?: _573.MediaType;
                        };
                        graph?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _573.DigestAlgorithm;
                            canonicalizationAlgorithm?: _573.GraphCanonicalizationAlgorithm;
                            merkleTree?: _573.GraphMerkleTree;
                        };
                    };
                }): _571.QueryByHashRequest;
            };
            QueryByHashResponse: {
                encode(message: _571.QueryByHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _571.QueryByHashResponse;
                fromJSON(object: any): _571.QueryByHashResponse;
                toJSON(message: _571.QueryByHashResponse): unknown;
                fromPartial(object: {
                    entry?: {
                        hash?: {
                            raw?: {
                                hash?: Uint8Array;
                                digestAlgorithm?: _573.DigestAlgorithm;
                                mediaType?: _573.MediaType;
                            };
                            graph?: {
                                hash?: Uint8Array;
                                digestAlgorithm?: _573.DigestAlgorithm;
                                canonicalizationAlgorithm?: _573.GraphCanonicalizationAlgorithm;
                                merkleTree?: _573.GraphMerkleTree;
                            };
                        };
                        iri?: string;
                        timestamp?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        signers?: {
                            signer?: string;
                            timestamp?: {
                                seconds?: any;
                                nanos?: number;
                            };
                        }[];
                        content?: {
                            rawData?: Uint8Array;
                        };
                    };
                }): _571.QueryByHashResponse;
            };
            QueryBySignerRequest: {
                encode(message: _571.QueryBySignerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _571.QueryBySignerRequest;
                fromJSON(object: any): _571.QueryBySignerRequest;
                toJSON(message: _571.QueryBySignerRequest): unknown;
                fromPartial(object: {
                    signer?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _571.QueryBySignerRequest;
            };
            QueryBySignerResponse: {
                encode(message: _571.QueryBySignerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _571.QueryBySignerResponse;
                fromJSON(object: any): _571.QueryBySignerResponse;
                toJSON(message: _571.QueryBySignerResponse): unknown;
                fromPartial(object: {
                    entries?: {
                        hash?: {
                            raw?: {
                                hash?: Uint8Array;
                                digestAlgorithm?: _573.DigestAlgorithm;
                                mediaType?: _573.MediaType;
                            };
                            graph?: {
                                hash?: Uint8Array;
                                digestAlgorithm?: _573.DigestAlgorithm;
                                canonicalizationAlgorithm?: _573.GraphCanonicalizationAlgorithm;
                                merkleTree?: _573.GraphMerkleTree;
                            };
                        };
                        iri?: string;
                        timestamp?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        signers?: {
                            signer?: string;
                            timestamp?: {
                                seconds?: any;
                                nanos?: number;
                            };
                        }[];
                        content?: {
                            rawData?: Uint8Array;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _571.QueryBySignerResponse;
            };
            ContentEntry: {
                encode(message: _571.ContentEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _571.ContentEntry;
                fromJSON(object: any): _571.ContentEntry;
                toJSON(message: _571.ContentEntry): unknown;
                fromPartial(object: {
                    hash?: {
                        raw?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _573.DigestAlgorithm;
                            mediaType?: _573.MediaType;
                        };
                        graph?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _573.DigestAlgorithm;
                            canonicalizationAlgorithm?: _573.GraphCanonicalizationAlgorithm;
                            merkleTree?: _573.GraphMerkleTree;
                        };
                    };
                    iri?: string;
                    timestamp?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    signers?: {
                        signer?: string;
                        timestamp?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    content?: {
                        rawData?: Uint8Array;
                    };
                }): _571.ContentEntry;
            };
            GenesisState: {
                encode(message: _570.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _570.GenesisState;
                fromJSON(object: any): _570.GenesisState;
                toJSON(message: _570.GenesisState): unknown;
                fromPartial(object: {
                    entries?: {
                        hash?: {
                            raw?: {
                                hash?: Uint8Array;
                                digestAlgorithm?: _573.DigestAlgorithm;
                                mediaType?: _573.MediaType;
                            };
                            graph?: {
                                hash?: Uint8Array;
                                digestAlgorithm?: _573.DigestAlgorithm;
                                canonicalizationAlgorithm?: _573.GraphCanonicalizationAlgorithm;
                                merkleTree?: _573.GraphMerkleTree;
                            };
                        };
                        timestamp?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        signers?: {
                            signer?: string;
                            timestamp?: {
                                seconds?: any;
                                nanos?: number;
                            };
                        }[];
                        content?: {
                            rawData?: Uint8Array;
                        };
                    }[];
                }): _570.GenesisState;
            };
            GenesisContentEntry: {
                encode(message: _570.GenesisContentEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _570.GenesisContentEntry;
                fromJSON(object: any): _570.GenesisContentEntry;
                toJSON(message: _570.GenesisContentEntry): unknown;
                fromPartial(object: {
                    hash?: {
                        raw?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _573.DigestAlgorithm;
                            mediaType?: _573.MediaType;
                        };
                        graph?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _573.DigestAlgorithm;
                            canonicalizationAlgorithm?: _573.GraphCanonicalizationAlgorithm;
                            merkleTree?: _573.GraphMerkleTree;
                        };
                    };
                    timestamp?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    signers?: {
                        signer?: string;
                        timestamp?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    content?: {
                        rawData?: Uint8Array;
                    };
                }): _570.GenesisContentEntry;
            };
            EventAnchorData: {
                encode(message: _569.EventAnchorData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _569.EventAnchorData;
                fromJSON(object: any): _569.EventAnchorData;
                toJSON(message: _569.EventAnchorData): unknown;
                fromPartial(object: {
                    iri?: string;
                }): _569.EventAnchorData;
            };
            EventSignData: {
                encode(message: _569.EventSignData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _569.EventSignData;
                fromJSON(object: any): _569.EventSignData;
                toJSON(message: _569.EventSignData): unknown;
                fromPartial(object: {
                    iri?: string;
                    signers?: string[];
                }): _569.EventSignData;
            };
            EventStoreRawData: {
                encode(message: _569.EventStoreRawData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _569.EventStoreRawData;
                fromJSON(object: any): _569.EventStoreRawData;
                toJSON(message: _569.EventStoreRawData): unknown;
                fromPartial(object: {
                    iri?: string;
                }): _569.EventStoreRawData;
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
                        create(value: _577.MsgCreate): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        put(value: _577.MsgPut): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        take(value: _577.MsgTake): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        create(value: _577.MsgCreate): {
                            typeUrl: string;
                            value: _577.MsgCreate;
                        };
                        put(value: _577.MsgPut): {
                            typeUrl: string;
                            value: _577.MsgPut;
                        };
                        take(value: _577.MsgTake): {
                            typeUrl: string;
                            value: _577.MsgTake;
                        };
                    };
                    toJSON: {
                        create(value: _577.MsgCreate): {
                            typeUrl: string;
                            value: unknown;
                        };
                        put(value: _577.MsgPut): {
                            typeUrl: string;
                            value: unknown;
                        };
                        take(value: _577.MsgTake): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        create(value: any): {
                            typeUrl: string;
                            value: _577.MsgCreate;
                        };
                        put(value: any): {
                            typeUrl: string;
                            value: _577.MsgPut;
                        };
                        take(value: any): {
                            typeUrl: string;
                            value: _577.MsgTake;
                        };
                    };
                    fromPartial: {
                        create(value: _577.MsgCreate): {
                            typeUrl: string;
                            value: _577.MsgCreate;
                        };
                        put(value: _577.MsgPut): {
                            typeUrl: string;
                            value: _577.MsgPut;
                        };
                        take(value: _577.MsgTake): {
                            typeUrl: string;
                            value: _577.MsgTake;
                        };
                    };
                };
                AminoConverter: {
                    "/regen.ecocredit.basket.v1.MsgCreate": {
                        aminoType: string;
                        toAmino: ({ curator, name, description, exponent, disableAutoRetire, creditTypeAbbrev, allowedClasses, dateCriteria, fee }: _577.MsgCreate) => {
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
                                start_date_window: {
                                    seconds: string;
                                    nanos: number;
                                };
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
                                start_date_window: {
                                    seconds: string;
                                    nanos: number;
                                };
                                years_in_the_past: number;
                            };
                            fee: {
                                denom: string;
                                amount: string;
                            }[];
                        }) => _577.MsgCreate;
                    };
                    "/regen.ecocredit.basket.v1.MsgPut": {
                        aminoType: string;
                        toAmino: ({ owner, basketDenom, credits }: _577.MsgPut) => {
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
                        }) => _577.MsgPut;
                    };
                    "/regen.ecocredit.basket.v1.MsgTake": {
                        aminoType: string;
                        toAmino: ({ owner, basketDenom, amount, retirementJurisdiction, retireOnTake }: _577.MsgTake) => {
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
                        }) => _577.MsgTake;
                    };
                };
                BasketCredit: {
                    encode(message: _578.BasketCredit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _578.BasketCredit;
                    fromJSON(object: any): _578.BasketCredit;
                    toJSON(message: _578.BasketCredit): unknown;
                    fromPartial(object: {
                        batchDenom?: string;
                        amount?: string;
                    }): _578.BasketCredit;
                };
                DateCriteria: {
                    encode(message: _578.DateCriteria, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _578.DateCriteria;
                    fromJSON(object: any): _578.DateCriteria;
                    toJSON(message: _578.DateCriteria): unknown;
                    fromPartial(object: {
                        minStartDate?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        startDateWindow?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        yearsInThePast?: number;
                    }): _578.DateCriteria;
                };
                MsgCreate: {
                    encode(message: _577.MsgCreate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _577.MsgCreate;
                    fromJSON(object: any): _577.MsgCreate;
                    toJSON(message: _577.MsgCreate): unknown;
                    fromPartial(object: {
                        curator?: string;
                        name?: string;
                        description?: string;
                        exponent?: number;
                        disableAutoRetire?: boolean;
                        creditTypeAbbrev?: string;
                        allowedClasses?: string[];
                        dateCriteria?: {
                            minStartDate?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            startDateWindow?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            yearsInThePast?: number;
                        };
                        fee?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }): _577.MsgCreate;
                };
                MsgCreateResponse: {
                    encode(message: _577.MsgCreateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _577.MsgCreateResponse;
                    fromJSON(object: any): _577.MsgCreateResponse;
                    toJSON(message: _577.MsgCreateResponse): unknown;
                    fromPartial(object: {
                        basketDenom?: string;
                    }): _577.MsgCreateResponse;
                };
                MsgPut: {
                    encode(message: _577.MsgPut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _577.MsgPut;
                    fromJSON(object: any): _577.MsgPut;
                    toJSON(message: _577.MsgPut): unknown;
                    fromPartial(object: {
                        owner?: string;
                        basketDenom?: string;
                        credits?: {
                            batchDenom?: string;
                            amount?: string;
                        }[];
                    }): _577.MsgPut;
                };
                MsgPutResponse: {
                    encode(message: _577.MsgPutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _577.MsgPutResponse;
                    fromJSON(object: any): _577.MsgPutResponse;
                    toJSON(message: _577.MsgPutResponse): unknown;
                    fromPartial(object: {
                        amountReceived?: string;
                    }): _577.MsgPutResponse;
                };
                MsgTake: {
                    encode(message: _577.MsgTake, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _577.MsgTake;
                    fromJSON(object: any): _577.MsgTake;
                    toJSON(message: _577.MsgTake): unknown;
                    fromPartial(object: {
                        owner?: string;
                        basketDenom?: string;
                        amount?: string;
                        retirementJurisdiction?: string;
                        retireOnTake?: boolean;
                    }): _577.MsgTake;
                };
                MsgTakeResponse: {
                    encode(message: _577.MsgTakeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _577.MsgTakeResponse;
                    fromJSON(object: any): _577.MsgTakeResponse;
                    toJSON(message: _577.MsgTakeResponse): unknown;
                    fromPartial(object: {
                        credits?: {
                            batchDenom?: string;
                            amount?: string;
                        }[];
                    }): _577.MsgTakeResponse;
                };
                Basket: {
                    encode(message: _576.Basket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _576.Basket;
                    fromJSON(object: any): _576.Basket;
                    toJSON(message: _576.Basket): unknown;
                    fromPartial(object: {
                        id?: any;
                        basketDenom?: string;
                        name?: string;
                        disableAutoRetire?: boolean;
                        creditTypeAbbrev?: string;
                        dateCriteria?: {
                            minStartDate?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            startDateWindow?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            yearsInThePast?: number;
                        };
                        exponent?: number;
                        curator?: Uint8Array;
                    }): _576.Basket;
                };
                BasketClass: {
                    encode(message: _576.BasketClass, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _576.BasketClass;
                    fromJSON(object: any): _576.BasketClass;
                    toJSON(message: _576.BasketClass): unknown;
                    fromPartial(object: {
                        basketId?: any;
                        classId?: string;
                    }): _576.BasketClass;
                };
                BasketBalance: {
                    encode(message: _576.BasketBalance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _576.BasketBalance;
                    fromJSON(object: any): _576.BasketBalance;
                    toJSON(message: _576.BasketBalance): unknown;
                    fromPartial(object: {
                        basketId?: any;
                        batchDenom?: string;
                        balance?: string;
                        batchStartDate?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }): _576.BasketBalance;
                };
                QueryBasketRequest: {
                    encode(message: _575.QueryBasketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _575.QueryBasketRequest;
                    fromJSON(object: any): _575.QueryBasketRequest;
                    toJSON(message: _575.QueryBasketRequest): unknown;
                    fromPartial(object: {
                        basketDenom?: string;
                    }): _575.QueryBasketRequest;
                };
                QueryBasketResponse: {
                    encode(message: _575.QueryBasketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _575.QueryBasketResponse;
                    fromJSON(object: any): _575.QueryBasketResponse;
                    toJSON(message: _575.QueryBasketResponse): unknown;
                    fromPartial(object: {
                        basket?: {
                            id?: any;
                            basketDenom?: string;
                            name?: string;
                            disableAutoRetire?: boolean;
                            creditTypeAbbrev?: string;
                            dateCriteria?: {
                                minStartDate?: {
                                    seconds?: any;
                                    nanos?: number;
                                };
                                startDateWindow?: {
                                    seconds?: any;
                                    nanos?: number;
                                };
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
                                minStartDate?: {
                                    seconds?: any;
                                    nanos?: number;
                                };
                                startDateWindow?: {
                                    seconds?: any;
                                    nanos?: number;
                                };
                                yearsInThePast?: number;
                            };
                            exponent?: number;
                            curator?: string;
                        };
                    }): _575.QueryBasketResponse;
                };
                QueryBasketsRequest: {
                    encode(message: _575.QueryBasketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _575.QueryBasketsRequest;
                    fromJSON(object: any): _575.QueryBasketsRequest;
                    toJSON(message: _575.QueryBasketsRequest): unknown;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _575.QueryBasketsRequest;
                };
                QueryBasketsResponse: {
                    encode(message: _575.QueryBasketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _575.QueryBasketsResponse;
                    fromJSON(object: any): _575.QueryBasketsResponse;
                    toJSON(message: _575.QueryBasketsResponse): unknown;
                    fromPartial(object: {
                        baskets?: {
                            id?: any;
                            basketDenom?: string;
                            name?: string;
                            disableAutoRetire?: boolean;
                            creditTypeAbbrev?: string;
                            dateCriteria?: {
                                minStartDate?: {
                                    seconds?: any;
                                    nanos?: number;
                                };
                                startDateWindow?: {
                                    seconds?: any;
                                    nanos?: number;
                                };
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
                                minStartDate?: {
                                    seconds?: any;
                                    nanos?: number;
                                };
                                startDateWindow?: {
                                    seconds?: any;
                                    nanos?: number;
                                };
                                yearsInThePast?: number;
                            };
                            exponent?: number;
                            curator?: string;
                        }[];
                    }): _575.QueryBasketsResponse;
                };
                QueryBasketBalancesRequest: {
                    encode(message: _575.QueryBasketBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _575.QueryBasketBalancesRequest;
                    fromJSON(object: any): _575.QueryBasketBalancesRequest;
                    toJSON(message: _575.QueryBasketBalancesRequest): unknown;
                    fromPartial(object: {
                        basketDenom?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _575.QueryBasketBalancesRequest;
                };
                QueryBasketBalancesResponse: {
                    encode(message: _575.QueryBasketBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _575.QueryBasketBalancesResponse;
                    fromJSON(object: any): _575.QueryBasketBalancesResponse;
                    toJSON(message: _575.QueryBasketBalancesResponse): unknown;
                    fromPartial(object: {
                        balances?: {
                            basketId?: any;
                            batchDenom?: string;
                            balance?: string;
                            batchStartDate?: {
                                seconds?: any;
                                nanos?: number;
                            };
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                        balancesInfo?: {
                            batchDenom?: string;
                            balance?: string;
                        }[];
                    }): _575.QueryBasketBalancesResponse;
                };
                QueryBasketBalanceRequest: {
                    encode(message: _575.QueryBasketBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _575.QueryBasketBalanceRequest;
                    fromJSON(object: any): _575.QueryBasketBalanceRequest;
                    toJSON(message: _575.QueryBasketBalanceRequest): unknown;
                    fromPartial(object: {
                        basketDenom?: string;
                        batchDenom?: string;
                    }): _575.QueryBasketBalanceRequest;
                };
                QueryBasketBalanceResponse: {
                    encode(message: _575.QueryBasketBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _575.QueryBasketBalanceResponse;
                    fromJSON(object: any): _575.QueryBasketBalanceResponse;
                    toJSON(message: _575.QueryBasketBalanceResponse): unknown;
                    fromPartial(object: {
                        balance?: string;
                    }): _575.QueryBasketBalanceResponse;
                };
                BasketInfo: {
                    encode(message: _575.BasketInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _575.BasketInfo;
                    fromJSON(object: any): _575.BasketInfo;
                    toJSON(message: _575.BasketInfo): unknown;
                    fromPartial(object: {
                        basketDenom?: string;
                        name?: string;
                        disableAutoRetire?: boolean;
                        creditTypeAbbrev?: string;
                        dateCriteria?: {
                            minStartDate?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            startDateWindow?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            yearsInThePast?: number;
                        };
                        exponent?: number;
                        curator?: string;
                    }): _575.BasketInfo;
                };
                BasketBalanceInfo: {
                    encode(message: _575.BasketBalanceInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _575.BasketBalanceInfo;
                    fromJSON(object: any): _575.BasketBalanceInfo;
                    toJSON(message: _575.BasketBalanceInfo): unknown;
                    fromPartial(object: {
                        batchDenom?: string;
                        balance?: string;
                    }): _575.BasketBalanceInfo;
                };
                EventCreate: {
                    encode(message: _574.EventCreate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _574.EventCreate;
                    fromJSON(object: any): _574.EventCreate;
                    toJSON(message: _574.EventCreate): unknown;
                    fromPartial(object: {
                        basketDenom?: string;
                        curator?: string;
                    }): _574.EventCreate;
                };
                EventPut: {
                    encode(message: _574.EventPut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _574.EventPut;
                    fromJSON(object: any): _574.EventPut;
                    toJSON(message: _574.EventPut): unknown;
                    fromPartial(object: {
                        owner?: string;
                        basketDenom?: string;
                        credits?: {
                            batchDenom?: string;
                            amount?: string;
                        }[];
                        amount?: string;
                    }): _574.EventPut;
                };
                EventTake: {
                    encode(message: _574.EventTake, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _574.EventTake;
                    fromJSON(object: any): _574.EventTake;
                    toJSON(message: _574.EventTake): unknown;
                    fromPartial(object: {
                        owner?: string;
                        basketDenom?: string;
                        credits?: {
                            batchDenom?: string;
                            amount?: string;
                        }[];
                        amount?: string;
                    }): _574.EventTake;
                };
            };
        }
        namespace marketplace {
            const v1: {
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        sell(value: _582.MsgSell): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateSellOrders(value: _582.MsgUpdateSellOrders): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        cancelSellOrder(value: _582.MsgCancelSellOrder): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        buyDirect(value: _582.MsgBuyDirect): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        sell(value: _582.MsgSell): {
                            typeUrl: string;
                            value: _582.MsgSell;
                        };
                        updateSellOrders(value: _582.MsgUpdateSellOrders): {
                            typeUrl: string;
                            value: _582.MsgUpdateSellOrders;
                        };
                        cancelSellOrder(value: _582.MsgCancelSellOrder): {
                            typeUrl: string;
                            value: _582.MsgCancelSellOrder;
                        };
                        buyDirect(value: _582.MsgBuyDirect): {
                            typeUrl: string;
                            value: _582.MsgBuyDirect;
                        };
                    };
                    toJSON: {
                        sell(value: _582.MsgSell): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateSellOrders(value: _582.MsgUpdateSellOrders): {
                            typeUrl: string;
                            value: unknown;
                        };
                        cancelSellOrder(value: _582.MsgCancelSellOrder): {
                            typeUrl: string;
                            value: unknown;
                        };
                        buyDirect(value: _582.MsgBuyDirect): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        sell(value: any): {
                            typeUrl: string;
                            value: _582.MsgSell;
                        };
                        updateSellOrders(value: any): {
                            typeUrl: string;
                            value: _582.MsgUpdateSellOrders;
                        };
                        cancelSellOrder(value: any): {
                            typeUrl: string;
                            value: _582.MsgCancelSellOrder;
                        };
                        buyDirect(value: any): {
                            typeUrl: string;
                            value: _582.MsgBuyDirect;
                        };
                    };
                    fromPartial: {
                        sell(value: _582.MsgSell): {
                            typeUrl: string;
                            value: _582.MsgSell;
                        };
                        updateSellOrders(value: _582.MsgUpdateSellOrders): {
                            typeUrl: string;
                            value: _582.MsgUpdateSellOrders;
                        };
                        cancelSellOrder(value: _582.MsgCancelSellOrder): {
                            typeUrl: string;
                            value: _582.MsgCancelSellOrder;
                        };
                        buyDirect(value: _582.MsgBuyDirect): {
                            typeUrl: string;
                            value: _582.MsgBuyDirect;
                        };
                    };
                };
                AminoConverter: {
                    "/regen.ecocredit.marketplace.v1.MsgSell": {
                        aminoType: string;
                        toAmino: ({ owner, orders }: _582.MsgSell) => {
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
                        }) => _582.MsgSell;
                    };
                    "/regen.ecocredit.marketplace.v1.MsgUpdateSellOrders": {
                        aminoType: string;
                        toAmino: ({ owner, updates }: _582.MsgUpdateSellOrders) => {
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
                        }) => _582.MsgUpdateSellOrders;
                    };
                    "/regen.ecocredit.marketplace.v1.MsgCancelSellOrder": {
                        aminoType: string;
                        toAmino: ({ seller, sellOrderId }: _582.MsgCancelSellOrder) => {
                            seller: string;
                            sell_order_id: string;
                        };
                        fromAmino: ({ seller, sell_order_id }: {
                            seller: string;
                            sell_order_id: string;
                        }) => _582.MsgCancelSellOrder;
                    };
                    "/regen.ecocredit.marketplace.v1.MsgBuyDirect": {
                        aminoType: string;
                        toAmino: ({ buyer, orders }: _582.MsgBuyDirect) => {
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
                        }) => _582.MsgBuyDirect;
                    };
                };
                AllowDenomProposal: {
                    encode(message: _583.AllowDenomProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _583.AllowDenomProposal;
                    fromJSON(object: any): _583.AllowDenomProposal;
                    toJSON(message: _583.AllowDenomProposal): unknown;
                    fromPartial(object: {
                        title?: string;
                        description?: string;
                        denom?: {
                            bankDenom?: string;
                            displayDenom?: string;
                            exponent?: number;
                        };
                    }): _583.AllowDenomProposal;
                };
                MsgSell: {
                    encode(message: _582.MsgSell, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _582.MsgSell;
                    fromJSON(object: any): _582.MsgSell;
                    toJSON(message: _582.MsgSell): unknown;
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
                            expiration?: {
                                seconds?: any;
                                nanos?: number;
                            };
                        }[];
                    }): _582.MsgSell;
                };
                MsgSell_Order: {
                    encode(message: _582.MsgSell_Order, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _582.MsgSell_Order;
                    fromJSON(object: any): _582.MsgSell_Order;
                    toJSON(message: _582.MsgSell_Order): unknown;
                    fromPartial(object: {
                        batchDenom?: string;
                        quantity?: string;
                        askPrice?: {
                            denom?: string;
                            amount?: string;
                        };
                        disableAutoRetire?: boolean;
                        expiration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }): _582.MsgSell_Order;
                };
                MsgSellResponse: {
                    encode(message: _582.MsgSellResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _582.MsgSellResponse;
                    fromJSON(object: any): _582.MsgSellResponse;
                    toJSON(message: _582.MsgSellResponse): unknown;
                    fromPartial(object: {
                        sellOrderIds?: any[];
                    }): _582.MsgSellResponse;
                };
                MsgUpdateSellOrders: {
                    encode(message: _582.MsgUpdateSellOrders, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _582.MsgUpdateSellOrders;
                    fromJSON(object: any): _582.MsgUpdateSellOrders;
                    toJSON(message: _582.MsgUpdateSellOrders): unknown;
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
                            newExpiration?: {
                                seconds?: any;
                                nanos?: number;
                            };
                        }[];
                    }): _582.MsgUpdateSellOrders;
                };
                MsgUpdateSellOrders_Update: {
                    encode(message: _582.MsgUpdateSellOrders_Update, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _582.MsgUpdateSellOrders_Update;
                    fromJSON(object: any): _582.MsgUpdateSellOrders_Update;
                    toJSON(message: _582.MsgUpdateSellOrders_Update): unknown;
                    fromPartial(object: {
                        sellOrderId?: any;
                        newQuantity?: string;
                        newAskPrice?: {
                            denom?: string;
                            amount?: string;
                        };
                        disableAutoRetire?: boolean;
                        newExpiration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }): _582.MsgUpdateSellOrders_Update;
                };
                MsgUpdateSellOrdersResponse: {
                    encode(_: _582.MsgUpdateSellOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _582.MsgUpdateSellOrdersResponse;
                    fromJSON(_: any): _582.MsgUpdateSellOrdersResponse;
                    toJSON(_: _582.MsgUpdateSellOrdersResponse): unknown;
                    fromPartial(_: {}): _582.MsgUpdateSellOrdersResponse;
                };
                MsgCancelSellOrder: {
                    encode(message: _582.MsgCancelSellOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _582.MsgCancelSellOrder;
                    fromJSON(object: any): _582.MsgCancelSellOrder;
                    toJSON(message: _582.MsgCancelSellOrder): unknown;
                    fromPartial(object: {
                        seller?: string;
                        sellOrderId?: any;
                    }): _582.MsgCancelSellOrder;
                };
                MsgCancelSellOrderResponse: {
                    encode(_: _582.MsgCancelSellOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _582.MsgCancelSellOrderResponse;
                    fromJSON(_: any): _582.MsgCancelSellOrderResponse;
                    toJSON(_: _582.MsgCancelSellOrderResponse): unknown;
                    fromPartial(_: {}): _582.MsgCancelSellOrderResponse;
                };
                MsgBuyDirect: {
                    encode(message: _582.MsgBuyDirect, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _582.MsgBuyDirect;
                    fromJSON(object: any): _582.MsgBuyDirect;
                    toJSON(message: _582.MsgBuyDirect): unknown;
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
                    }): _582.MsgBuyDirect;
                };
                MsgBuyDirect_Order: {
                    encode(message: _582.MsgBuyDirect_Order, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _582.MsgBuyDirect_Order;
                    fromJSON(object: any): _582.MsgBuyDirect_Order;
                    toJSON(message: _582.MsgBuyDirect_Order): unknown;
                    fromPartial(object: {
                        sellOrderId?: any;
                        quantity?: string;
                        bidPrice?: {
                            denom?: string;
                            amount?: string;
                        };
                        disableAutoRetire?: boolean;
                        retirementJurisdiction?: string;
                    }): _582.MsgBuyDirect_Order;
                };
                MsgBuyDirectResponse: {
                    encode(_: _582.MsgBuyDirectResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _582.MsgBuyDirectResponse;
                    fromJSON(_: any): _582.MsgBuyDirectResponse;
                    toJSON(_: _582.MsgBuyDirectResponse): unknown;
                    fromPartial(_: {}): _582.MsgBuyDirectResponse;
                };
                SellOrder: {
                    encode(message: _581.SellOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _581.SellOrder;
                    fromJSON(object: any): _581.SellOrder;
                    toJSON(message: _581.SellOrder): unknown;
                    fromPartial(object: {
                        id?: any;
                        seller?: Uint8Array;
                        batchId?: any;
                        quantity?: string;
                        marketId?: any;
                        askPrice?: string;
                        disableAutoRetire?: boolean;
                        expiration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        maker?: boolean;
                    }): _581.SellOrder;
                };
                AllowedDenom: {
                    encode(message: _581.AllowedDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _581.AllowedDenom;
                    fromJSON(object: any): _581.AllowedDenom;
                    toJSON(message: _581.AllowedDenom): unknown;
                    fromPartial(object: {
                        bankDenom?: string;
                        displayDenom?: string;
                        exponent?: number;
                    }): _581.AllowedDenom;
                };
                Market: {
                    encode(message: _581.Market, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _581.Market;
                    fromJSON(object: any): _581.Market;
                    toJSON(message: _581.Market): unknown;
                    fromPartial(object: {
                        id?: any;
                        creditType?: string;
                        bankDenom?: string;
                        precisionModifier?: number;
                    }): _581.Market;
                };
                QuerySellOrderRequest: {
                    encode(message: _580.QuerySellOrderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _580.QuerySellOrderRequest;
                    fromJSON(object: any): _580.QuerySellOrderRequest;
                    toJSON(message: _580.QuerySellOrderRequest): unknown;
                    fromPartial(object: {
                        sellOrderId?: any;
                    }): _580.QuerySellOrderRequest;
                };
                QuerySellOrderResponse: {
                    encode(message: _580.QuerySellOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _580.QuerySellOrderResponse;
                    fromJSON(object: any): _580.QuerySellOrderResponse;
                    toJSON(message: _580.QuerySellOrderResponse): unknown;
                    fromPartial(object: {
                        sellOrder?: {
                            id?: any;
                            seller?: string;
                            batchDenom?: string;
                            quantity?: string;
                            askDenom?: string;
                            askPrice?: string;
                            disableAutoRetire?: boolean;
                            expiration?: {
                                seconds?: any;
                                nanos?: number;
                            };
                        };
                    }): _580.QuerySellOrderResponse;
                };
                QuerySellOrdersRequest: {
                    encode(message: _580.QuerySellOrdersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _580.QuerySellOrdersRequest;
                    fromJSON(object: any): _580.QuerySellOrdersRequest;
                    toJSON(message: _580.QuerySellOrdersRequest): unknown;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _580.QuerySellOrdersRequest;
                };
                QuerySellOrdersResponse: {
                    encode(message: _580.QuerySellOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _580.QuerySellOrdersResponse;
                    fromJSON(object: any): _580.QuerySellOrdersResponse;
                    toJSON(message: _580.QuerySellOrdersResponse): unknown;
                    fromPartial(object: {
                        sellOrders?: {
                            id?: any;
                            seller?: string;
                            batchDenom?: string;
                            quantity?: string;
                            askDenom?: string;
                            askPrice?: string;
                            disableAutoRetire?: boolean;
                            expiration?: {
                                seconds?: any;
                                nanos?: number;
                            };
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                    }): _580.QuerySellOrdersResponse;
                };
                QuerySellOrdersByBatchDenomRequest: {
                    encode(message: _580.QuerySellOrdersByBatchDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _580.QuerySellOrdersByBatchDenomRequest;
                    fromJSON(object: any): _580.QuerySellOrdersByBatchDenomRequest;
                    toJSON(message: _580.QuerySellOrdersByBatchDenomRequest): unknown;
                    fromPartial(object: {
                        batchDenom?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _580.QuerySellOrdersByBatchDenomRequest;
                };
                QuerySellOrdersByBatchDenomResponse: {
                    encode(message: _580.QuerySellOrdersByBatchDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _580.QuerySellOrdersByBatchDenomResponse;
                    fromJSON(object: any): _580.QuerySellOrdersByBatchDenomResponse;
                    toJSON(message: _580.QuerySellOrdersByBatchDenomResponse): unknown;
                    fromPartial(object: {
                        sellOrders?: {
                            id?: any;
                            seller?: string;
                            batchDenom?: string;
                            quantity?: string;
                            askDenom?: string;
                            askPrice?: string;
                            disableAutoRetire?: boolean;
                            expiration?: {
                                seconds?: any;
                                nanos?: number;
                            };
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                    }): _580.QuerySellOrdersByBatchDenomResponse;
                };
                QuerySellOrdersByAddressRequest: {
                    encode(message: _580.QuerySellOrdersByAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _580.QuerySellOrdersByAddressRequest;
                    fromJSON(object: any): _580.QuerySellOrdersByAddressRequest;
                    toJSON(message: _580.QuerySellOrdersByAddressRequest): unknown;
                    fromPartial(object: {
                        address?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _580.QuerySellOrdersByAddressRequest;
                };
                QuerySellOrdersByAddressResponse: {
                    encode(message: _580.QuerySellOrdersByAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _580.QuerySellOrdersByAddressResponse;
                    fromJSON(object: any): _580.QuerySellOrdersByAddressResponse;
                    toJSON(message: _580.QuerySellOrdersByAddressResponse): unknown;
                    fromPartial(object: {
                        sellOrders?: {
                            id?: any;
                            seller?: string;
                            batchDenom?: string;
                            quantity?: string;
                            askDenom?: string;
                            askPrice?: string;
                            disableAutoRetire?: boolean;
                            expiration?: {
                                seconds?: any;
                                nanos?: number;
                            };
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                    }): _580.QuerySellOrdersByAddressResponse;
                };
                QueryAllowedDenomsRequest: {
                    encode(message: _580.QueryAllowedDenomsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _580.QueryAllowedDenomsRequest;
                    fromJSON(object: any): _580.QueryAllowedDenomsRequest;
                    toJSON(message: _580.QueryAllowedDenomsRequest): unknown;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _580.QueryAllowedDenomsRequest;
                };
                QueryAllowedDenomsResponse: {
                    encode(message: _580.QueryAllowedDenomsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _580.QueryAllowedDenomsResponse;
                    fromJSON(object: any): _580.QueryAllowedDenomsResponse;
                    toJSON(message: _580.QueryAllowedDenomsResponse): unknown;
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
                    }): _580.QueryAllowedDenomsResponse;
                };
                SellOrderInfo: {
                    encode(message: _580.SellOrderInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _580.SellOrderInfo;
                    fromJSON(object: any): _580.SellOrderInfo;
                    toJSON(message: _580.SellOrderInfo): unknown;
                    fromPartial(object: {
                        id?: any;
                        seller?: string;
                        batchDenom?: string;
                        quantity?: string;
                        askDenom?: string;
                        askPrice?: string;
                        disableAutoRetire?: boolean;
                        expiration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }): _580.SellOrderInfo;
                };
                EventSell: {
                    encode(message: _579.EventSell, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _579.EventSell;
                    fromJSON(object: any): _579.EventSell;
                    toJSON(message: _579.EventSell): unknown;
                    fromPartial(object: {
                        orderId?: any;
                    }): _579.EventSell;
                };
                EventUpdateSellOrder: {
                    encode(message: _579.EventUpdateSellOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _579.EventUpdateSellOrder;
                    fromJSON(object: any): _579.EventUpdateSellOrder;
                    toJSON(message: _579.EventUpdateSellOrder): unknown;
                    fromPartial(object: {
                        orderId?: any;
                    }): _579.EventUpdateSellOrder;
                };
                EventAllowDenom: {
                    encode(message: _579.EventAllowDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _579.EventAllowDenom;
                    fromJSON(object: any): _579.EventAllowDenom;
                    toJSON(message: _579.EventAllowDenom): unknown;
                    fromPartial(object: {
                        denom?: string;
                    }): _579.EventAllowDenom;
                };
            };
        }
        namespace orderbook {
            const v1alpha1: {
                BuyOrderSellOrderMatch: {
                    encode(message: _584.BuyOrderSellOrderMatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _584.BuyOrderSellOrderMatch;
                    fromJSON(object: any): _584.BuyOrderSellOrderMatch;
                    toJSON(message: _584.BuyOrderSellOrderMatch): unknown;
                    fromPartial(object: {
                        marketId?: any;
                        buyOrderId?: any;
                        sellOrderId?: any;
                        bidPriceComplement?: number;
                        askPrice?: number;
                    }): _584.BuyOrderSellOrderMatch;
                };
                BuyOrderClassSelector: {
                    encode(message: _584.BuyOrderClassSelector, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _584.BuyOrderClassSelector;
                    fromJSON(object: any): _584.BuyOrderClassSelector;
                    toJSON(message: _584.BuyOrderClassSelector): unknown;
                    fromPartial(object: {
                        buyOrderId?: any;
                        classId?: any;
                        projectLocation?: string;
                        minStartDate?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        maxEndDate?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }): _584.BuyOrderClassSelector;
                };
                BuyOrderProjectSelector: {
                    encode(message: _584.BuyOrderProjectSelector, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _584.BuyOrderProjectSelector;
                    fromJSON(object: any): _584.BuyOrderProjectSelector;
                    toJSON(message: _584.BuyOrderProjectSelector): unknown;
                    fromPartial(object: {
                        buyOrderId?: any;
                        projectId?: any;
                        minStartDate?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        maxEndDate?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }): _584.BuyOrderProjectSelector;
                };
                BuyOrderBatchSelector: {
                    encode(message: _584.BuyOrderBatchSelector, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _584.BuyOrderBatchSelector;
                    fromJSON(object: any): _584.BuyOrderBatchSelector;
                    toJSON(message: _584.BuyOrderBatchSelector): unknown;
                    fromPartial(object: {
                        buyOrderId?: any;
                        batchId?: any;
                    }): _584.BuyOrderBatchSelector;
                };
            };
        }
        const v1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createClass(value: _588.MsgCreateClass): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createProject(value: _588.MsgCreateProject): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createBatch(value: _588.MsgCreateBatch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mintBatchCredits(value: _588.MsgMintBatchCredits): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    sealBatch(value: _588.MsgSealBatch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    send(value: _588.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    retire(value: _588.MsgRetire): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancel(value: _588.MsgCancel): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassAdmin(value: _588.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassIssuers(value: _588.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassMetadata(value: _588.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateProjectAdmin(value: _588.MsgUpdateProjectAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateProjectMetadata(value: _588.MsgUpdateProjectMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createClass(value: _588.MsgCreateClass): {
                        typeUrl: string;
                        value: _588.MsgCreateClass;
                    };
                    createProject(value: _588.MsgCreateProject): {
                        typeUrl: string;
                        value: _588.MsgCreateProject;
                    };
                    createBatch(value: _588.MsgCreateBatch): {
                        typeUrl: string;
                        value: _588.MsgCreateBatch;
                    };
                    mintBatchCredits(value: _588.MsgMintBatchCredits): {
                        typeUrl: string;
                        value: _588.MsgMintBatchCredits;
                    };
                    sealBatch(value: _588.MsgSealBatch): {
                        typeUrl: string;
                        value: _588.MsgSealBatch;
                    };
                    send(value: _588.MsgSend): {
                        typeUrl: string;
                        value: _588.MsgSend;
                    };
                    retire(value: _588.MsgRetire): {
                        typeUrl: string;
                        value: _588.MsgRetire;
                    };
                    cancel(value: _588.MsgCancel): {
                        typeUrl: string;
                        value: _588.MsgCancel;
                    };
                    updateClassAdmin(value: _588.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: _588.MsgUpdateClassAdmin;
                    };
                    updateClassIssuers(value: _588.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: _588.MsgUpdateClassIssuers;
                    };
                    updateClassMetadata(value: _588.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: _588.MsgUpdateClassMetadata;
                    };
                    updateProjectAdmin(value: _588.MsgUpdateProjectAdmin): {
                        typeUrl: string;
                        value: _588.MsgUpdateProjectAdmin;
                    };
                    updateProjectMetadata(value: _588.MsgUpdateProjectMetadata): {
                        typeUrl: string;
                        value: _588.MsgUpdateProjectMetadata;
                    };
                };
                toJSON: {
                    createClass(value: _588.MsgCreateClass): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createProject(value: _588.MsgCreateProject): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createBatch(value: _588.MsgCreateBatch): {
                        typeUrl: string;
                        value: unknown;
                    };
                    mintBatchCredits(value: _588.MsgMintBatchCredits): {
                        typeUrl: string;
                        value: unknown;
                    };
                    sealBatch(value: _588.MsgSealBatch): {
                        typeUrl: string;
                        value: unknown;
                    };
                    send(value: _588.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    retire(value: _588.MsgRetire): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancel(value: _588.MsgCancel): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateClassAdmin(value: _588.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateClassIssuers(value: _588.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateClassMetadata(value: _588.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateProjectAdmin(value: _588.MsgUpdateProjectAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateProjectMetadata(value: _588.MsgUpdateProjectMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createClass(value: any): {
                        typeUrl: string;
                        value: _588.MsgCreateClass;
                    };
                    createProject(value: any): {
                        typeUrl: string;
                        value: _588.MsgCreateProject;
                    };
                    createBatch(value: any): {
                        typeUrl: string;
                        value: _588.MsgCreateBatch;
                    };
                    mintBatchCredits(value: any): {
                        typeUrl: string;
                        value: _588.MsgMintBatchCredits;
                    };
                    sealBatch(value: any): {
                        typeUrl: string;
                        value: _588.MsgSealBatch;
                    };
                    send(value: any): {
                        typeUrl: string;
                        value: _588.MsgSend;
                    };
                    retire(value: any): {
                        typeUrl: string;
                        value: _588.MsgRetire;
                    };
                    cancel(value: any): {
                        typeUrl: string;
                        value: _588.MsgCancel;
                    };
                    updateClassAdmin(value: any): {
                        typeUrl: string;
                        value: _588.MsgUpdateClassAdmin;
                    };
                    updateClassIssuers(value: any): {
                        typeUrl: string;
                        value: _588.MsgUpdateClassIssuers;
                    };
                    updateClassMetadata(value: any): {
                        typeUrl: string;
                        value: _588.MsgUpdateClassMetadata;
                    };
                    updateProjectAdmin(value: any): {
                        typeUrl: string;
                        value: _588.MsgUpdateProjectAdmin;
                    };
                    updateProjectMetadata(value: any): {
                        typeUrl: string;
                        value: _588.MsgUpdateProjectMetadata;
                    };
                };
                fromPartial: {
                    createClass(value: _588.MsgCreateClass): {
                        typeUrl: string;
                        value: _588.MsgCreateClass;
                    };
                    createProject(value: _588.MsgCreateProject): {
                        typeUrl: string;
                        value: _588.MsgCreateProject;
                    };
                    createBatch(value: _588.MsgCreateBatch): {
                        typeUrl: string;
                        value: _588.MsgCreateBatch;
                    };
                    mintBatchCredits(value: _588.MsgMintBatchCredits): {
                        typeUrl: string;
                        value: _588.MsgMintBatchCredits;
                    };
                    sealBatch(value: _588.MsgSealBatch): {
                        typeUrl: string;
                        value: _588.MsgSealBatch;
                    };
                    send(value: _588.MsgSend): {
                        typeUrl: string;
                        value: _588.MsgSend;
                    };
                    retire(value: _588.MsgRetire): {
                        typeUrl: string;
                        value: _588.MsgRetire;
                    };
                    cancel(value: _588.MsgCancel): {
                        typeUrl: string;
                        value: _588.MsgCancel;
                    };
                    updateClassAdmin(value: _588.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: _588.MsgUpdateClassAdmin;
                    };
                    updateClassIssuers(value: _588.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: _588.MsgUpdateClassIssuers;
                    };
                    updateClassMetadata(value: _588.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: _588.MsgUpdateClassMetadata;
                    };
                    updateProjectAdmin(value: _588.MsgUpdateProjectAdmin): {
                        typeUrl: string;
                        value: _588.MsgUpdateProjectAdmin;
                    };
                    updateProjectMetadata(value: _588.MsgUpdateProjectMetadata): {
                        typeUrl: string;
                        value: _588.MsgUpdateProjectMetadata;
                    };
                };
            };
            AminoConverter: {
                "/regen.ecocredit.v1.MsgCreateClass": {
                    aminoType: string;
                    toAmino: ({ admin, issuers, metadata, creditTypeAbbrev, fee }: _588.MsgCreateClass) => {
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
                    }) => _588.MsgCreateClass;
                };
                "/regen.ecocredit.v1.MsgCreateProject": {
                    aminoType: string;
                    toAmino: ({ issuer, classId, metadata, jurisdiction, referenceId }: _588.MsgCreateProject) => {
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
                    }) => _588.MsgCreateProject;
                };
                "/regen.ecocredit.v1.MsgCreateBatch": {
                    aminoType: string;
                    toAmino: ({ issuer, projectId, issuance, metadata, startDate, endDate, open, originTx, note }: _588.MsgCreateBatch) => {
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
                    }) => _588.MsgCreateBatch;
                };
                "/regen.ecocredit.v1.MsgMintBatchCredits": {
                    aminoType: string;
                    toAmino: ({ issuer, batchDenom, issuance, originTx, note }: _588.MsgMintBatchCredits) => {
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
                    }) => _588.MsgMintBatchCredits;
                };
                "/regen.ecocredit.v1.MsgSealBatch": {
                    aminoType: string;
                    toAmino: ({ issuer, batchDenom }: _588.MsgSealBatch) => {
                        issuer: string;
                        batch_denom: string;
                    };
                    fromAmino: ({ issuer, batch_denom }: {
                        issuer: string;
                        batch_denom: string;
                    }) => _588.MsgSealBatch;
                };
                "/regen.ecocredit.v1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ sender, recipient, credits }: _588.MsgSend) => {
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
                    }) => _588.MsgSend;
                };
                "/regen.ecocredit.v1.MsgRetire": {
                    aminoType: string;
                    toAmino: ({ holder, credits, jurisdiction }: _588.MsgRetire) => {
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
                    }) => _588.MsgRetire;
                };
                "/regen.ecocredit.v1.MsgCancel": {
                    aminoType: string;
                    toAmino: ({ holder, credits }: _588.MsgCancel) => {
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
                    }) => _588.MsgCancel;
                };
                "/regen.ecocredit.v1.MsgUpdateClassAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, classId, newAdmin }: _588.MsgUpdateClassAdmin) => {
                        admin: string;
                        class_id: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, class_id, new_admin }: {
                        admin: string;
                        class_id: string;
                        new_admin: string;
                    }) => _588.MsgUpdateClassAdmin;
                };
                "/regen.ecocredit.v1.MsgUpdateClassIssuers": {
                    aminoType: string;
                    toAmino: ({ admin, classId, addIssuers, removeIssuers }: _588.MsgUpdateClassIssuers) => {
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
                    }) => _588.MsgUpdateClassIssuers;
                };
                "/regen.ecocredit.v1.MsgUpdateClassMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, classId, metadata }: _588.MsgUpdateClassMetadata) => {
                        admin: string;
                        class_id: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, class_id, metadata }: {
                        admin: string;
                        class_id: string;
                        metadata: string;
                    }) => _588.MsgUpdateClassMetadata;
                };
                "/regen.ecocredit.v1.MsgUpdateProjectAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, newAdmin, projectId }: _588.MsgUpdateProjectAdmin) => {
                        admin: string;
                        new_admin: string;
                        project_id: string;
                    };
                    fromAmino: ({ admin, new_admin, project_id }: {
                        admin: string;
                        new_admin: string;
                        project_id: string;
                    }) => _588.MsgUpdateProjectAdmin;
                };
                "/regen.ecocredit.v1.MsgUpdateProjectMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, newMetadata, projectId }: _588.MsgUpdateProjectMetadata) => {
                        admin: string;
                        new_metadata: string;
                        project_id: string;
                    };
                    fromAmino: ({ admin, new_metadata, project_id }: {
                        admin: string;
                        new_metadata: string;
                        project_id: string;
                    }) => _588.MsgUpdateProjectMetadata;
                };
            };
            Params: {
                encode(message: _589.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _589.Params;
                fromJSON(object: any): _589.Params;
                toJSON(message: _589.Params): unknown;
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
                }): _589.Params;
            };
            OriginTx: {
                encode(message: _589.OriginTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _589.OriginTx;
                fromJSON(object: any): _589.OriginTx;
                toJSON(message: _589.OriginTx): unknown;
                fromPartial(object: {
                    typ?: string;
                    id?: string;
                }): _589.OriginTx;
            };
            CreditTypeProposal: {
                encode(message: _589.CreditTypeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _589.CreditTypeProposal;
                fromJSON(object: any): _589.CreditTypeProposal;
                toJSON(message: _589.CreditTypeProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    creditType?: {
                        abbreviation?: string;
                        name?: string;
                        unit?: string;
                        precision?: number;
                    };
                }): _589.CreditTypeProposal;
            };
            MsgCreateClass: {
                encode(message: _588.MsgCreateClass, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _588.MsgCreateClass;
                fromJSON(object: any): _588.MsgCreateClass;
                toJSON(message: _588.MsgCreateClass): unknown;
                fromPartial(object: {
                    admin?: string;
                    issuers?: string[];
                    metadata?: string;
                    creditTypeAbbrev?: string;
                    fee?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _588.MsgCreateClass;
            };
            MsgCreateClassResponse: {
                encode(message: _588.MsgCreateClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _588.MsgCreateClassResponse;
                fromJSON(object: any): _588.MsgCreateClassResponse;
                toJSON(message: _588.MsgCreateClassResponse): unknown;
                fromPartial(object: {
                    classId?: string;
                }): _588.MsgCreateClassResponse;
            };
            MsgCreateProject: {
                encode(message: _588.MsgCreateProject, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _588.MsgCreateProject;
                fromJSON(object: any): _588.MsgCreateProject;
                toJSON(message: _588.MsgCreateProject): unknown;
                fromPartial(object: {
                    issuer?: string;
                    classId?: string;
                    metadata?: string;
                    jurisdiction?: string;
                    referenceId?: string;
                }): _588.MsgCreateProject;
            };
            MsgCreateProjectResponse: {
                encode(message: _588.MsgCreateProjectResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _588.MsgCreateProjectResponse;
                fromJSON(object: any): _588.MsgCreateProjectResponse;
                toJSON(message: _588.MsgCreateProjectResponse): unknown;
                fromPartial(object: {
                    projectId?: string;
                }): _588.MsgCreateProjectResponse;
            };
            MsgCreateBatch: {
                encode(message: _588.MsgCreateBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _588.MsgCreateBatch;
                fromJSON(object: any): _588.MsgCreateBatch;
                toJSON(message: _588.MsgCreateBatch): unknown;
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
                    startDate?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    endDate?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    open?: boolean;
                    originTx?: {
                        typ?: string;
                        id?: string;
                    };
                    note?: string;
                }): _588.MsgCreateBatch;
            };
            BatchIssuance: {
                encode(message: _588.BatchIssuance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _588.BatchIssuance;
                fromJSON(object: any): _588.BatchIssuance;
                toJSON(message: _588.BatchIssuance): unknown;
                fromPartial(object: {
                    recipient?: string;
                    tradableAmount?: string;
                    retiredAmount?: string;
                    retirementJurisdiction?: string;
                }): _588.BatchIssuance;
            };
            MsgCreateBatchResponse: {
                encode(message: _588.MsgCreateBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _588.MsgCreateBatchResponse;
                fromJSON(object: any): _588.MsgCreateBatchResponse;
                toJSON(message: _588.MsgCreateBatchResponse): unknown;
                fromPartial(object: {
                    batchDenom?: string;
                }): _588.MsgCreateBatchResponse;
            };
            MsgMintBatchCredits: {
                encode(message: _588.MsgMintBatchCredits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _588.MsgMintBatchCredits;
                fromJSON(object: any): _588.MsgMintBatchCredits;
                toJSON(message: _588.MsgMintBatchCredits): unknown;
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
                }): _588.MsgMintBatchCredits;
            };
            MsgSealBatch: {
                encode(message: _588.MsgSealBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _588.MsgSealBatch;
                fromJSON(object: any): _588.MsgSealBatch;
                toJSON(message: _588.MsgSealBatch): unknown;
                fromPartial(object: {
                    issuer?: string;
                    batchDenom?: string;
                }): _588.MsgSealBatch;
            };
            MsgMintBatchCreditsResponse: {
                encode(_: _588.MsgMintBatchCreditsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _588.MsgMintBatchCreditsResponse;
                fromJSON(_: any): _588.MsgMintBatchCreditsResponse;
                toJSON(_: _588.MsgMintBatchCreditsResponse): unknown;
                fromPartial(_: {}): _588.MsgMintBatchCreditsResponse;
            };
            MsgSealBatchResponse: {
                encode(_: _588.MsgSealBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _588.MsgSealBatchResponse;
                fromJSON(_: any): _588.MsgSealBatchResponse;
                toJSON(_: _588.MsgSealBatchResponse): unknown;
                fromPartial(_: {}): _588.MsgSealBatchResponse;
            };
            MsgSend: {
                encode(message: _588.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _588.MsgSend;
                fromJSON(object: any): _588.MsgSend;
                toJSON(message: _588.MsgSend): unknown;
                fromPartial(object: {
                    sender?: string;
                    recipient?: string;
                    credits?: {
                        batchDenom?: string;
                        tradableAmount?: string;
                        retiredAmount?: string;
                        retirementJurisdiction?: string;
                    }[];
                }): _588.MsgSend;
            };
            MsgSend_SendCredits: {
                encode(message: _588.MsgSend_SendCredits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _588.MsgSend_SendCredits;
                fromJSON(object: any): _588.MsgSend_SendCredits;
                toJSON(message: _588.MsgSend_SendCredits): unknown;
                fromPartial(object: {
                    batchDenom?: string;
                    tradableAmount?: string;
                    retiredAmount?: string;
                    retirementJurisdiction?: string;
                }): _588.MsgSend_SendCredits;
            };
            MsgSendResponse: {
                encode(_: _588.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _588.MsgSendResponse;
                fromJSON(_: any): _588.MsgSendResponse;
                toJSON(_: _588.MsgSendResponse): unknown;
                fromPartial(_: {}): _588.MsgSendResponse;
            };
            MsgRetire: {
                encode(message: _588.MsgRetire, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _588.MsgRetire;
                fromJSON(object: any): _588.MsgRetire;
                toJSON(message: _588.MsgRetire): unknown;
                fromPartial(object: {
                    holder?: string;
                    credits?: {
                        batchDenom?: string;
                        amount?: string;
                    }[];
                    jurisdiction?: string;
                }): _588.MsgRetire;
            };
            MsgRetire_RetireCredits: {
                encode(message: _588.MsgRetire_RetireCredits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _588.MsgRetire_RetireCredits;
                fromJSON(object: any): _588.MsgRetire_RetireCredits;
                toJSON(message: _588.MsgRetire_RetireCredits): unknown;
                fromPartial(object: {
                    batchDenom?: string;
                    amount?: string;
                }): _588.MsgRetire_RetireCredits;
            };
            MsgRetireResponse: {
                encode(_: _588.MsgRetireResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _588.MsgRetireResponse;
                fromJSON(_: any): _588.MsgRetireResponse;
                toJSON(_: _588.MsgRetireResponse): unknown;
                fromPartial(_: {}): _588.MsgRetireResponse;
            };
            MsgCancel: {
                encode(message: _588.MsgCancel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _588.MsgCancel;
                fromJSON(object: any): _588.MsgCancel;
                toJSON(message: _588.MsgCancel): unknown;
                fromPartial(object: {
                    holder?: string;
                    credits?: {
                        batchDenom?: string;
                        amount?: string;
                    }[];
                }): _588.MsgCancel;
            };
            MsgCancel_CancelCredits: {
                encode(message: _588.MsgCancel_CancelCredits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _588.MsgCancel_CancelCredits;
                fromJSON(object: any): _588.MsgCancel_CancelCredits;
                toJSON(message: _588.MsgCancel_CancelCredits): unknown;
                fromPartial(object: {
                    batchDenom?: string;
                    amount?: string;
                }): _588.MsgCancel_CancelCredits;
            };
            MsgCancelResponse: {
                encode(_: _588.MsgCancelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _588.MsgCancelResponse;
                fromJSON(_: any): _588.MsgCancelResponse;
                toJSON(_: _588.MsgCancelResponse): unknown;
                fromPartial(_: {}): _588.MsgCancelResponse;
            };
            MsgUpdateClassAdmin: {
                encode(message: _588.MsgUpdateClassAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _588.MsgUpdateClassAdmin;
                fromJSON(object: any): _588.MsgUpdateClassAdmin;
                toJSON(message: _588.MsgUpdateClassAdmin): unknown;
                fromPartial(object: {
                    admin?: string;
                    classId?: string;
                    newAdmin?: string;
                }): _588.MsgUpdateClassAdmin;
            };
            MsgUpdateClassAdminResponse: {
                encode(_: _588.MsgUpdateClassAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _588.MsgUpdateClassAdminResponse;
                fromJSON(_: any): _588.MsgUpdateClassAdminResponse;
                toJSON(_: _588.MsgUpdateClassAdminResponse): unknown;
                fromPartial(_: {}): _588.MsgUpdateClassAdminResponse;
            };
            MsgUpdateClassIssuers: {
                encode(message: _588.MsgUpdateClassIssuers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _588.MsgUpdateClassIssuers;
                fromJSON(object: any): _588.MsgUpdateClassIssuers;
                toJSON(message: _588.MsgUpdateClassIssuers): unknown;
                fromPartial(object: {
                    admin?: string;
                    classId?: string;
                    addIssuers?: string[];
                    removeIssuers?: string[];
                }): _588.MsgUpdateClassIssuers;
            };
            MsgUpdateClassIssuersResponse: {
                encode(_: _588.MsgUpdateClassIssuersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _588.MsgUpdateClassIssuersResponse;
                fromJSON(_: any): _588.MsgUpdateClassIssuersResponse;
                toJSON(_: _588.MsgUpdateClassIssuersResponse): unknown;
                fromPartial(_: {}): _588.MsgUpdateClassIssuersResponse;
            };
            MsgUpdateClassMetadata: {
                encode(message: _588.MsgUpdateClassMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _588.MsgUpdateClassMetadata;
                fromJSON(object: any): _588.MsgUpdateClassMetadata;
                toJSON(message: _588.MsgUpdateClassMetadata): unknown;
                fromPartial(object: {
                    admin?: string;
                    classId?: string;
                    metadata?: string;
                }): _588.MsgUpdateClassMetadata;
            };
            MsgUpdateClassMetadataResponse: {
                encode(_: _588.MsgUpdateClassMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _588.MsgUpdateClassMetadataResponse;
                fromJSON(_: any): _588.MsgUpdateClassMetadataResponse;
                toJSON(_: _588.MsgUpdateClassMetadataResponse): unknown;
                fromPartial(_: {}): _588.MsgUpdateClassMetadataResponse;
            };
            MsgUpdateProjectAdmin: {
                encode(message: _588.MsgUpdateProjectAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _588.MsgUpdateProjectAdmin;
                fromJSON(object: any): _588.MsgUpdateProjectAdmin;
                toJSON(message: _588.MsgUpdateProjectAdmin): unknown;
                fromPartial(object: {
                    admin?: string;
                    newAdmin?: string;
                    projectId?: string;
                }): _588.MsgUpdateProjectAdmin;
            };
            MsgUpdateProjectAdminResponse: {
                encode(_: _588.MsgUpdateProjectAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _588.MsgUpdateProjectAdminResponse;
                fromJSON(_: any): _588.MsgUpdateProjectAdminResponse;
                toJSON(_: _588.MsgUpdateProjectAdminResponse): unknown;
                fromPartial(_: {}): _588.MsgUpdateProjectAdminResponse;
            };
            MsgUpdateProjectMetadata: {
                encode(message: _588.MsgUpdateProjectMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _588.MsgUpdateProjectMetadata;
                fromJSON(object: any): _588.MsgUpdateProjectMetadata;
                toJSON(message: _588.MsgUpdateProjectMetadata): unknown;
                fromPartial(object: {
                    admin?: string;
                    newMetadata?: string;
                    projectId?: string;
                }): _588.MsgUpdateProjectMetadata;
            };
            MsgUpdateProjectMetadataResponse: {
                encode(_: _588.MsgUpdateProjectMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _588.MsgUpdateProjectMetadataResponse;
                fromJSON(_: any): _588.MsgUpdateProjectMetadataResponse;
                toJSON(_: _588.MsgUpdateProjectMetadataResponse): unknown;
                fromPartial(_: {}): _588.MsgUpdateProjectMetadataResponse;
            };
            CreditType: {
                encode(message: _587.CreditType, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _587.CreditType;
                fromJSON(object: any): _587.CreditType;
                toJSON(message: _587.CreditType): unknown;
                fromPartial(object: {
                    abbreviation?: string;
                    name?: string;
                    unit?: string;
                    precision?: number;
                }): _587.CreditType;
            };
            Class: {
                encode(message: _587.Class, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _587.Class;
                fromJSON(object: any): _587.Class;
                toJSON(message: _587.Class): unknown;
                fromPartial(object: {
                    key?: any;
                    id?: string;
                    admin?: Uint8Array;
                    metadata?: string;
                    creditTypeAbbrev?: string;
                }): _587.Class;
            };
            ClassIssuer: {
                encode(message: _587.ClassIssuer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _587.ClassIssuer;
                fromJSON(object: any): _587.ClassIssuer;
                toJSON(message: _587.ClassIssuer): unknown;
                fromPartial(object: {
                    classKey?: any;
                    issuer?: Uint8Array;
                }): _587.ClassIssuer;
            };
            Project: {
                encode(message: _587.Project, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _587.Project;
                fromJSON(object: any): _587.Project;
                toJSON(message: _587.Project): unknown;
                fromPartial(object: {
                    key?: any;
                    id?: string;
                    admin?: Uint8Array;
                    classKey?: any;
                    jurisdiction?: string;
                    metadata?: string;
                    referenceId?: string;
                }): _587.Project;
            };
            Batch: {
                encode(message: _587.Batch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _587.Batch;
                fromJSON(object: any): _587.Batch;
                toJSON(message: _587.Batch): unknown;
                fromPartial(object: {
                    key?: any;
                    issuer?: Uint8Array;
                    projectKey?: any;
                    denom?: string;
                    metadata?: string;
                    startDate?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    endDate?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    issuanceDate?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    open?: boolean;
                }): _587.Batch;
            };
            ClassSequence: {
                encode(message: _587.ClassSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _587.ClassSequence;
                fromJSON(object: any): _587.ClassSequence;
                toJSON(message: _587.ClassSequence): unknown;
                fromPartial(object: {
                    creditTypeAbbrev?: string;
                    nextSequence?: any;
                }): _587.ClassSequence;
            };
            ProjectSequence: {
                encode(message: _587.ProjectSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _587.ProjectSequence;
                fromJSON(object: any): _587.ProjectSequence;
                toJSON(message: _587.ProjectSequence): unknown;
                fromPartial(object: {
                    classKey?: any;
                    nextSequence?: any;
                }): _587.ProjectSequence;
            };
            BatchSequence: {
                encode(message: _587.BatchSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _587.BatchSequence;
                fromJSON(object: any): _587.BatchSequence;
                toJSON(message: _587.BatchSequence): unknown;
                fromPartial(object: {
                    projectKey?: any;
                    nextSequence?: any;
                }): _587.BatchSequence;
            };
            BatchBalance: {
                encode(message: _587.BatchBalance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _587.BatchBalance;
                fromJSON(object: any): _587.BatchBalance;
                toJSON(message: _587.BatchBalance): unknown;
                fromPartial(object: {
                    batchKey?: any;
                    address?: Uint8Array;
                    tradable?: string;
                    retired?: string;
                    escrowed?: string;
                }): _587.BatchBalance;
            };
            BatchSupply: {
                encode(message: _587.BatchSupply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _587.BatchSupply;
                fromJSON(object: any): _587.BatchSupply;
                toJSON(message: _587.BatchSupply): unknown;
                fromPartial(object: {
                    batchKey?: any;
                    tradableAmount?: string;
                    retiredAmount?: string;
                    cancelledAmount?: string;
                }): _587.BatchSupply;
            };
            BatchOrigTx: {
                encode(message: _587.BatchOrigTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _587.BatchOrigTx;
                fromJSON(object: any): _587.BatchOrigTx;
                toJSON(message: _587.BatchOrigTx): unknown;
                fromPartial(object: {
                    txId?: string;
                    typ?: string;
                    note?: string;
                    batchDenom?: string;
                }): _587.BatchOrigTx;
            };
            QueryClassesRequest: {
                encode(message: _586.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _586.QueryClassesRequest;
                fromJSON(object: any): _586.QueryClassesRequest;
                toJSON(message: _586.QueryClassesRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _586.QueryClassesRequest;
            };
            QueryClassesResponse: {
                encode(message: _586.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _586.QueryClassesResponse;
                fromJSON(object: any): _586.QueryClassesResponse;
                toJSON(message: _586.QueryClassesResponse): unknown;
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
                }): _586.QueryClassesResponse;
            };
            QueryClassesByAdminRequest: {
                encode(message: _586.QueryClassesByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _586.QueryClassesByAdminRequest;
                fromJSON(object: any): _586.QueryClassesByAdminRequest;
                toJSON(message: _586.QueryClassesByAdminRequest): unknown;
                fromPartial(object: {
                    admin?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _586.QueryClassesByAdminRequest;
            };
            QueryClassesByAdminResponse: {
                encode(message: _586.QueryClassesByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _586.QueryClassesByAdminResponse;
                fromJSON(object: any): _586.QueryClassesByAdminResponse;
                toJSON(message: _586.QueryClassesByAdminResponse): unknown;
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
                }): _586.QueryClassesByAdminResponse;
            };
            QueryClassRequest: {
                encode(message: _586.QueryClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _586.QueryClassRequest;
                fromJSON(object: any): _586.QueryClassRequest;
                toJSON(message: _586.QueryClassRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                }): _586.QueryClassRequest;
            };
            QueryClassResponse: {
                encode(message: _586.QueryClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _586.QueryClassResponse;
                fromJSON(object: any): _586.QueryClassResponse;
                toJSON(message: _586.QueryClassResponse): unknown;
                fromPartial(object: {
                    class?: {
                        id?: string;
                        admin?: string;
                        metadata?: string;
                        creditTypeAbbrev?: string;
                    };
                }): _586.QueryClassResponse;
            };
            QueryClassIssuersRequest: {
                encode(message: _586.QueryClassIssuersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _586.QueryClassIssuersRequest;
                fromJSON(object: any): _586.QueryClassIssuersRequest;
                toJSON(message: _586.QueryClassIssuersRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _586.QueryClassIssuersRequest;
            };
            QueryClassIssuersResponse: {
                encode(message: _586.QueryClassIssuersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _586.QueryClassIssuersResponse;
                fromJSON(object: any): _586.QueryClassIssuersResponse;
                toJSON(message: _586.QueryClassIssuersResponse): unknown;
                fromPartial(object: {
                    issuers?: string[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _586.QueryClassIssuersResponse;
            };
            QueryProjectsRequest: {
                encode(message: _586.QueryProjectsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _586.QueryProjectsRequest;
                fromJSON(object: any): _586.QueryProjectsRequest;
                toJSON(message: _586.QueryProjectsRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _586.QueryProjectsRequest;
            };
            QueryProjectsResponse: {
                encode(message: _586.QueryProjectsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _586.QueryProjectsResponse;
                fromJSON(object: any): _586.QueryProjectsResponse;
                toJSON(message: _586.QueryProjectsResponse): unknown;
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
                }): _586.QueryProjectsResponse;
            };
            QueryProjectsByReferenceIdRequest: {
                encode(message: _586.QueryProjectsByReferenceIdRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _586.QueryProjectsByReferenceIdRequest;
                fromJSON(object: any): _586.QueryProjectsByReferenceIdRequest;
                toJSON(message: _586.QueryProjectsByReferenceIdRequest): unknown;
                fromPartial(object: {
                    referenceId?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _586.QueryProjectsByReferenceIdRequest;
            };
            QueryProjectsByReferenceIdResponse: {
                encode(message: _586.QueryProjectsByReferenceIdResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _586.QueryProjectsByReferenceIdResponse;
                fromJSON(object: any): _586.QueryProjectsByReferenceIdResponse;
                toJSON(message: _586.QueryProjectsByReferenceIdResponse): unknown;
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
                }): _586.QueryProjectsByReferenceIdResponse;
            };
            QueryProjectRequest: {
                encode(message: _586.QueryProjectRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _586.QueryProjectRequest;
                fromJSON(object: any): _586.QueryProjectRequest;
                toJSON(message: _586.QueryProjectRequest): unknown;
                fromPartial(object: {
                    projectId?: string;
                }): _586.QueryProjectRequest;
            };
            QueryProjectResponse: {
                encode(message: _586.QueryProjectResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _586.QueryProjectResponse;
                fromJSON(object: any): _586.QueryProjectResponse;
                toJSON(message: _586.QueryProjectResponse): unknown;
                fromPartial(object: {
                    project?: {
                        id?: string;
                        admin?: string;
                        classId?: string;
                        jurisdiction?: string;
                        metadata?: string;
                        referenceId?: string;
                    };
                }): _586.QueryProjectResponse;
            };
            QueryBatchesRequest: {
                encode(message: _586.QueryBatchesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _586.QueryBatchesRequest;
                fromJSON(object: any): _586.QueryBatchesRequest;
                toJSON(message: _586.QueryBatchesRequest): unknown;
                fromPartial(object: {
                    projectId?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _586.QueryBatchesRequest;
            };
            QueryBatchesResponse: {
                encode(message: _586.QueryBatchesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _586.QueryBatchesResponse;
                fromJSON(object: any): _586.QueryBatchesResponse;
                toJSON(message: _586.QueryBatchesResponse): unknown;
                fromPartial(object: {
                    batches?: {
                        issuer?: string;
                        projectId?: string;
                        denom?: string;
                        metadata?: string;
                        startDate?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        endDate?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        issuanceDate?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        open?: boolean;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _586.QueryBatchesResponse;
            };
            QueryBatchesByIssuerRequest: {
                encode(message: _586.QueryBatchesByIssuerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _586.QueryBatchesByIssuerRequest;
                fromJSON(object: any): _586.QueryBatchesByIssuerRequest;
                toJSON(message: _586.QueryBatchesByIssuerRequest): unknown;
                fromPartial(object: {
                    issuer?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _586.QueryBatchesByIssuerRequest;
            };
            QueryBatchesByIssuerResponse: {
                encode(message: _586.QueryBatchesByIssuerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _586.QueryBatchesByIssuerResponse;
                fromJSON(object: any): _586.QueryBatchesByIssuerResponse;
                toJSON(message: _586.QueryBatchesByIssuerResponse): unknown;
                fromPartial(object: {
                    batches?: {
                        issuer?: string;
                        projectId?: string;
                        denom?: string;
                        metadata?: string;
                        startDate?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        endDate?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        issuanceDate?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        open?: boolean;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _586.QueryBatchesByIssuerResponse;
            };
            QueryBatchesByClassRequest: {
                encode(message: _586.QueryBatchesByClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _586.QueryBatchesByClassRequest;
                fromJSON(object: any): _586.QueryBatchesByClassRequest;
                toJSON(message: _586.QueryBatchesByClassRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _586.QueryBatchesByClassRequest;
            };
            QueryBatchesByClassResponse: {
                encode(message: _586.QueryBatchesByClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _586.QueryBatchesByClassResponse;
                fromJSON(object: any): _586.QueryBatchesByClassResponse;
                toJSON(message: _586.QueryBatchesByClassResponse): unknown;
                fromPartial(object: {
                    batches?: {
                        issuer?: string;
                        projectId?: string;
                        denom?: string;
                        metadata?: string;
                        startDate?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        endDate?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        issuanceDate?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        open?: boolean;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _586.QueryBatchesByClassResponse;
            };
            QueryBatchRequest: {
                encode(message: _586.QueryBatchRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _586.QueryBatchRequest;
                fromJSON(object: any): _586.QueryBatchRequest;
                toJSON(message: _586.QueryBatchRequest): unknown;
                fromPartial(object: {
                    batchDenom?: string;
                }): _586.QueryBatchRequest;
            };
            QueryBatchResponse: {
                encode(message: _586.QueryBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _586.QueryBatchResponse;
                fromJSON(object: any): _586.QueryBatchResponse;
                toJSON(message: _586.QueryBatchResponse): unknown;
                fromPartial(object: {
                    batch?: {
                        issuer?: string;
                        projectId?: string;
                        denom?: string;
                        metadata?: string;
                        startDate?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        endDate?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        issuanceDate?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        open?: boolean;
                    };
                }): _586.QueryBatchResponse;
            };
            QueryBalanceRequest: {
                encode(message: _586.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _586.QueryBalanceRequest;
                fromJSON(object: any): _586.QueryBalanceRequest;
                toJSON(message: _586.QueryBalanceRequest): unknown;
                fromPartial(object: {
                    account?: string;
                    batchDenom?: string;
                }): _586.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _586.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _586.QueryBalanceResponse;
                fromJSON(object: any): _586.QueryBalanceResponse;
                toJSON(message: _586.QueryBalanceResponse): unknown;
                fromPartial(object: {
                    balance?: {
                        address?: string;
                        batchDenom?: string;
                        tradable?: string;
                        retired?: string;
                        escrowed?: string;
                    };
                }): _586.QueryBalanceResponse;
            };
            QueryBalancesRequest: {
                encode(message: _586.QueryBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _586.QueryBalancesRequest;
                fromJSON(object: any): _586.QueryBalancesRequest;
                toJSON(message: _586.QueryBalancesRequest): unknown;
                fromPartial(object: {
                    account?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _586.QueryBalancesRequest;
            };
            QueryBalancesResponse: {
                encode(message: _586.QueryBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _586.QueryBalancesResponse;
                fromJSON(object: any): _586.QueryBalancesResponse;
                toJSON(message: _586.QueryBalancesResponse): unknown;
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
                }): _586.QueryBalancesResponse;
            };
            QuerySupplyRequest: {
                encode(message: _586.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _586.QuerySupplyRequest;
                fromJSON(object: any): _586.QuerySupplyRequest;
                toJSON(message: _586.QuerySupplyRequest): unknown;
                fromPartial(object: {
                    batchDenom?: string;
                }): _586.QuerySupplyRequest;
            };
            QuerySupplyResponse: {
                encode(message: _586.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _586.QuerySupplyResponse;
                fromJSON(object: any): _586.QuerySupplyResponse;
                toJSON(message: _586.QuerySupplyResponse): unknown;
                fromPartial(object: {
                    tradableSupply?: string;
                    retiredSupply?: string;
                    cancelledAmount?: string;
                }): _586.QuerySupplyResponse;
            };
            QueryCreditTypesRequest: {
                encode(_: _586.QueryCreditTypesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _586.QueryCreditTypesRequest;
                fromJSON(_: any): _586.QueryCreditTypesRequest;
                toJSON(_: _586.QueryCreditTypesRequest): unknown;
                fromPartial(_: {}): _586.QueryCreditTypesRequest;
            };
            QueryCreditTypesResponse: {
                encode(message: _586.QueryCreditTypesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _586.QueryCreditTypesResponse;
                fromJSON(object: any): _586.QueryCreditTypesResponse;
                toJSON(message: _586.QueryCreditTypesResponse): unknown;
                fromPartial(object: {
                    creditTypes?: {
                        abbreviation?: string;
                        name?: string;
                        unit?: string;
                        precision?: number;
                    }[];
                }): _586.QueryCreditTypesResponse;
            };
            QueryParamsRequest: {
                encode(_: _586.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _586.QueryParamsRequest;
                fromJSON(_: any): _586.QueryParamsRequest;
                toJSON(_: _586.QueryParamsRequest): unknown;
                fromPartial(_: {}): _586.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _586.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _586.QueryParamsResponse;
                fromJSON(object: any): _586.QueryParamsResponse;
                toJSON(message: _586.QueryParamsResponse): unknown;
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
                }): _586.QueryParamsResponse;
            };
            ClassInfo: {
                encode(message: _586.ClassInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _586.ClassInfo;
                fromJSON(object: any): _586.ClassInfo;
                toJSON(message: _586.ClassInfo): unknown;
                fromPartial(object: {
                    id?: string;
                    admin?: string;
                    metadata?: string;
                    creditTypeAbbrev?: string;
                }): _586.ClassInfo;
            };
            ProjectInfo: {
                encode(message: _586.ProjectInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _586.ProjectInfo;
                fromJSON(object: any): _586.ProjectInfo;
                toJSON(message: _586.ProjectInfo): unknown;
                fromPartial(object: {
                    id?: string;
                    admin?: string;
                    classId?: string;
                    jurisdiction?: string;
                    metadata?: string;
                    referenceId?: string;
                }): _586.ProjectInfo;
            };
            BatchInfo: {
                encode(message: _586.BatchInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _586.BatchInfo;
                fromJSON(object: any): _586.BatchInfo;
                toJSON(message: _586.BatchInfo): unknown;
                fromPartial(object: {
                    issuer?: string;
                    projectId?: string;
                    denom?: string;
                    metadata?: string;
                    startDate?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    endDate?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    issuanceDate?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    open?: boolean;
                }): _586.BatchInfo;
            };
            BatchBalanceInfo: {
                encode(message: _586.BatchBalanceInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _586.BatchBalanceInfo;
                fromJSON(object: any): _586.BatchBalanceInfo;
                toJSON(message: _586.BatchBalanceInfo): unknown;
                fromPartial(object: {
                    address?: string;
                    batchDenom?: string;
                    tradable?: string;
                    retired?: string;
                    escrowed?: string;
                }): _586.BatchBalanceInfo;
            };
            EventCreateClass: {
                encode(message: _585.EventCreateClass, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _585.EventCreateClass;
                fromJSON(object: any): _585.EventCreateClass;
                toJSON(message: _585.EventCreateClass): unknown;
                fromPartial(object: {
                    classId?: string;
                }): _585.EventCreateClass;
            };
            EventCreateProject: {
                encode(message: _585.EventCreateProject, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _585.EventCreateProject;
                fromJSON(object: any): _585.EventCreateProject;
                toJSON(message: _585.EventCreateProject): unknown;
                fromPartial(object: {
                    projectId?: string;
                }): _585.EventCreateProject;
            };
            EventCreateBatch: {
                encode(message: _585.EventCreateBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _585.EventCreateBatch;
                fromJSON(object: any): _585.EventCreateBatch;
                toJSON(message: _585.EventCreateBatch): unknown;
                fromPartial(object: {
                    batchDenom?: string;
                }): _585.EventCreateBatch;
            };
            EventMint: {
                encode(message: _585.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _585.EventMint;
                fromJSON(object: any): _585.EventMint;
                toJSON(message: _585.EventMint): unknown;
                fromPartial(object: {
                    batchDenom?: string;
                    originTx?: {
                        typ?: string;
                        id?: string;
                    };
                }): _585.EventMint;
            };
            EventTransfer: {
                encode(message: _585.EventTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _585.EventTransfer;
                fromJSON(object: any): _585.EventTransfer;
                toJSON(message: _585.EventTransfer): unknown;
                fromPartial(object: {
                    sender?: string;
                    recipient?: string;
                    batchDenom?: string;
                    tradableAmount?: string;
                    retiredAmount?: string;
                }): _585.EventTransfer;
            };
            EventRetire: {
                encode(message: _585.EventRetire, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _585.EventRetire;
                fromJSON(object: any): _585.EventRetire;
                toJSON(message: _585.EventRetire): unknown;
                fromPartial(object: {
                    owner?: string;
                    batchDenom?: string;
                    amount?: string;
                    jurisdiction?: string;
                }): _585.EventRetire;
            };
            EventCancel: {
                encode(message: _585.EventCancel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _585.EventCancel;
                fromJSON(object: any): _585.EventCancel;
                toJSON(message: _585.EventCancel): unknown;
                fromPartial(object: {
                    owner?: string;
                    batchDenom?: string;
                    amount?: string;
                }): _585.EventCancel;
            };
            EventUpdateClassAdmin: {
                encode(message: _585.EventUpdateClassAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _585.EventUpdateClassAdmin;
                fromJSON(object: any): _585.EventUpdateClassAdmin;
                toJSON(message: _585.EventUpdateClassAdmin): unknown;
                fromPartial(object: {
                    classId?: string;
                }): _585.EventUpdateClassAdmin;
            };
            EventUpdateClassIssuers: {
                encode(message: _585.EventUpdateClassIssuers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _585.EventUpdateClassIssuers;
                fromJSON(object: any): _585.EventUpdateClassIssuers;
                toJSON(message: _585.EventUpdateClassIssuers): unknown;
                fromPartial(object: {
                    classId?: string;
                }): _585.EventUpdateClassIssuers;
            };
            EventUpdateClassMetadata: {
                encode(message: _585.EventUpdateClassMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _585.EventUpdateClassMetadata;
                fromJSON(object: any): _585.EventUpdateClassMetadata;
                toJSON(message: _585.EventUpdateClassMetadata): unknown;
                fromPartial(object: {
                    classId?: string;
                }): _585.EventUpdateClassMetadata;
            };
            EventUpdateProjectAdmin: {
                encode(message: _585.EventUpdateProjectAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _585.EventUpdateProjectAdmin;
                fromJSON(object: any): _585.EventUpdateProjectAdmin;
                toJSON(message: _585.EventUpdateProjectAdmin): unknown;
                fromPartial(object: {
                    projectId?: string;
                }): _585.EventUpdateProjectAdmin;
            };
            EventUpdateProjectMetadata: {
                encode(message: _585.EventUpdateProjectMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _585.EventUpdateProjectMetadata;
                fromJSON(object: any): _585.EventUpdateProjectMetadata;
                toJSON(message: _585.EventUpdateProjectMetadata): unknown;
                fromPartial(object: {
                    projectId?: string;
                }): _585.EventUpdateProjectMetadata;
            };
            EventSealBatch: {
                encode(message: _585.EventSealBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _585.EventSealBatch;
                fromJSON(object: any): _585.EventSealBatch;
                toJSON(message: _585.EventSealBatch): unknown;
                fromPartial(object: {
                    batchDenom?: string;
                }): _585.EventSealBatch;
            };
            EventAddCreditType: {
                encode(message: _585.EventAddCreditType, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _585.EventAddCreditType;
                fromJSON(object: any): _585.EventAddCreditType;
                toJSON(message: _585.EventAddCreditType): unknown;
                fromPartial(object: {
                    abbreviation?: string;
                }): _585.EventAddCreditType;
            };
        };
        const v1alpha1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createClass(value: _593.MsgCreateClass): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createBatch(value: _593.MsgCreateBatch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    send(value: _593.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    retire(value: _593.MsgRetire): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancel(value: _593.MsgCancel): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassAdmin(value: _593.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassIssuers(value: _593.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassMetadata(value: _593.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createClass(value: _593.MsgCreateClass): {
                        typeUrl: string;
                        value: _593.MsgCreateClass;
                    };
                    createBatch(value: _593.MsgCreateBatch): {
                        typeUrl: string;
                        value: _593.MsgCreateBatch;
                    };
                    send(value: _593.MsgSend): {
                        typeUrl: string;
                        value: _593.MsgSend;
                    };
                    retire(value: _593.MsgRetire): {
                        typeUrl: string;
                        value: _593.MsgRetire;
                    };
                    cancel(value: _593.MsgCancel): {
                        typeUrl: string;
                        value: _593.MsgCancel;
                    };
                    updateClassAdmin(value: _593.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: _593.MsgUpdateClassAdmin;
                    };
                    updateClassIssuers(value: _593.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: _593.MsgUpdateClassIssuers;
                    };
                    updateClassMetadata(value: _593.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: _593.MsgUpdateClassMetadata;
                    };
                };
                toJSON: {
                    createClass(value: _593.MsgCreateClass): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createBatch(value: _593.MsgCreateBatch): {
                        typeUrl: string;
                        value: unknown;
                    };
                    send(value: _593.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    retire(value: _593.MsgRetire): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancel(value: _593.MsgCancel): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateClassAdmin(value: _593.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateClassIssuers(value: _593.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateClassMetadata(value: _593.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createClass(value: any): {
                        typeUrl: string;
                        value: _593.MsgCreateClass;
                    };
                    createBatch(value: any): {
                        typeUrl: string;
                        value: _593.MsgCreateBatch;
                    };
                    send(value: any): {
                        typeUrl: string;
                        value: _593.MsgSend;
                    };
                    retire(value: any): {
                        typeUrl: string;
                        value: _593.MsgRetire;
                    };
                    cancel(value: any): {
                        typeUrl: string;
                        value: _593.MsgCancel;
                    };
                    updateClassAdmin(value: any): {
                        typeUrl: string;
                        value: _593.MsgUpdateClassAdmin;
                    };
                    updateClassIssuers(value: any): {
                        typeUrl: string;
                        value: _593.MsgUpdateClassIssuers;
                    };
                    updateClassMetadata(value: any): {
                        typeUrl: string;
                        value: _593.MsgUpdateClassMetadata;
                    };
                };
                fromPartial: {
                    createClass(value: _593.MsgCreateClass): {
                        typeUrl: string;
                        value: _593.MsgCreateClass;
                    };
                    createBatch(value: _593.MsgCreateBatch): {
                        typeUrl: string;
                        value: _593.MsgCreateBatch;
                    };
                    send(value: _593.MsgSend): {
                        typeUrl: string;
                        value: _593.MsgSend;
                    };
                    retire(value: _593.MsgRetire): {
                        typeUrl: string;
                        value: _593.MsgRetire;
                    };
                    cancel(value: _593.MsgCancel): {
                        typeUrl: string;
                        value: _593.MsgCancel;
                    };
                    updateClassAdmin(value: _593.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: _593.MsgUpdateClassAdmin;
                    };
                    updateClassIssuers(value: _593.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: _593.MsgUpdateClassIssuers;
                    };
                    updateClassMetadata(value: _593.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: _593.MsgUpdateClassMetadata;
                    };
                };
            };
            AminoConverter: {
                "/regen.ecocredit.v1alpha1.MsgCreateClass": {
                    aminoType: string;
                    toAmino: ({ admin, issuers, metadata, creditTypeName }: _593.MsgCreateClass) => {
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
                    }) => _593.MsgCreateClass;
                };
                "/regen.ecocredit.v1alpha1.MsgCreateBatch": {
                    aminoType: string;
                    toAmino: ({ issuer, classId, issuance, metadata, startDate, endDate, projectLocation }: _593.MsgCreateBatch) => {
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
                    }) => _593.MsgCreateBatch;
                };
                "/regen.ecocredit.v1alpha1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ sender, recipient, credits }: _593.MsgSend) => {
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
                    }) => _593.MsgSend;
                };
                "/regen.ecocredit.v1alpha1.MsgRetire": {
                    aminoType: string;
                    toAmino: ({ holder, credits, location }: _593.MsgRetire) => {
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
                    }) => _593.MsgRetire;
                };
                "/regen.ecocredit.v1alpha1.MsgCancel": {
                    aminoType: string;
                    toAmino: ({ holder, credits }: _593.MsgCancel) => {
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
                    }) => _593.MsgCancel;
                };
                "/regen.ecocredit.v1alpha1.MsgUpdateClassAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, classId, newAdmin }: _593.MsgUpdateClassAdmin) => {
                        admin: string;
                        class_id: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, class_id, new_admin }: {
                        admin: string;
                        class_id: string;
                        new_admin: string;
                    }) => _593.MsgUpdateClassAdmin;
                };
                "/regen.ecocredit.v1alpha1.MsgUpdateClassIssuers": {
                    aminoType: string;
                    toAmino: ({ admin, classId, issuers }: _593.MsgUpdateClassIssuers) => {
                        admin: string;
                        class_id: string;
                        issuers: string[];
                    };
                    fromAmino: ({ admin, class_id, issuers }: {
                        admin: string;
                        class_id: string;
                        issuers: string[];
                    }) => _593.MsgUpdateClassIssuers;
                };
                "/regen.ecocredit.v1alpha1.MsgUpdateClassMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, classId, metadata }: _593.MsgUpdateClassMetadata) => {
                        admin: string;
                        class_id: string;
                        metadata: Uint8Array;
                    };
                    fromAmino: ({ admin, class_id, metadata }: {
                        admin: string;
                        class_id: string;
                        metadata: Uint8Array;
                    }) => _593.MsgUpdateClassMetadata;
                };
            };
            ClassInfo: {
                encode(message: _594.ClassInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _594.ClassInfo;
                fromJSON(object: any): _594.ClassInfo;
                toJSON(message: _594.ClassInfo): unknown;
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
                }): _594.ClassInfo;
            };
            BatchInfo: {
                encode(message: _594.BatchInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _594.BatchInfo;
                fromJSON(object: any): _594.BatchInfo;
                toJSON(message: _594.BatchInfo): unknown;
                fromPartial(object: {
                    classId?: string;
                    batchDenom?: string;
                    issuer?: string;
                    totalAmount?: string;
                    metadata?: Uint8Array;
                    amountCancelled?: string;
                    startDate?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    endDate?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    projectLocation?: string;
                }): _594.BatchInfo;
            };
            Params: {
                encode(message: _594.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _594.Params;
                fromJSON(object: any): _594.Params;
                toJSON(message: _594.Params): unknown;
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
                }): _594.Params;
            };
            CreditType: {
                encode(message: _594.CreditType, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _594.CreditType;
                fromJSON(object: any): _594.CreditType;
                toJSON(message: _594.CreditType): unknown;
                fromPartial(object: {
                    name?: string;
                    abbreviation?: string;
                    unit?: string;
                    precision?: number;
                }): _594.CreditType;
            };
            CreditTypeSeq: {
                encode(message: _594.CreditTypeSeq, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _594.CreditTypeSeq;
                fromJSON(object: any): _594.CreditTypeSeq;
                toJSON(message: _594.CreditTypeSeq): unknown;
                fromPartial(object: {
                    abbreviation?: string;
                    seqNumber?: any;
                }): _594.CreditTypeSeq;
            };
            MsgCreateClass: {
                encode(message: _593.MsgCreateClass, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _593.MsgCreateClass;
                fromJSON(object: any): _593.MsgCreateClass;
                toJSON(message: _593.MsgCreateClass): unknown;
                fromPartial(object: {
                    admin?: string;
                    issuers?: string[];
                    metadata?: Uint8Array;
                    creditTypeName?: string;
                }): _593.MsgCreateClass;
            };
            MsgCreateClassResponse: {
                encode(message: _593.MsgCreateClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _593.MsgCreateClassResponse;
                fromJSON(object: any): _593.MsgCreateClassResponse;
                toJSON(message: _593.MsgCreateClassResponse): unknown;
                fromPartial(object: {
                    classId?: string;
                }): _593.MsgCreateClassResponse;
            };
            MsgCreateBatch: {
                encode(message: _593.MsgCreateBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _593.MsgCreateBatch;
                fromJSON(object: any): _593.MsgCreateBatch;
                toJSON(message: _593.MsgCreateBatch): unknown;
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
                    startDate?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    endDate?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    projectLocation?: string;
                }): _593.MsgCreateBatch;
            };
            MsgCreateBatch_BatchIssuance: {
                encode(message: _593.MsgCreateBatch_BatchIssuance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _593.MsgCreateBatch_BatchIssuance;
                fromJSON(object: any): _593.MsgCreateBatch_BatchIssuance;
                toJSON(message: _593.MsgCreateBatch_BatchIssuance): unknown;
                fromPartial(object: {
                    recipient?: string;
                    tradableAmount?: string;
                    retiredAmount?: string;
                    retirementLocation?: string;
                }): _593.MsgCreateBatch_BatchIssuance;
            };
            MsgCreateBatchResponse: {
                encode(message: _593.MsgCreateBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _593.MsgCreateBatchResponse;
                fromJSON(object: any): _593.MsgCreateBatchResponse;
                toJSON(message: _593.MsgCreateBatchResponse): unknown;
                fromPartial(object: {
                    batchDenom?: string;
                }): _593.MsgCreateBatchResponse;
            };
            MsgSend: {
                encode(message: _593.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _593.MsgSend;
                fromJSON(object: any): _593.MsgSend;
                toJSON(message: _593.MsgSend): unknown;
                fromPartial(object: {
                    sender?: string;
                    recipient?: string;
                    credits?: {
                        batchDenom?: string;
                        tradableAmount?: string;
                        retiredAmount?: string;
                        retirementLocation?: string;
                    }[];
                }): _593.MsgSend;
            };
            MsgSend_SendCredits: {
                encode(message: _593.MsgSend_SendCredits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _593.MsgSend_SendCredits;
                fromJSON(object: any): _593.MsgSend_SendCredits;
                toJSON(message: _593.MsgSend_SendCredits): unknown;
                fromPartial(object: {
                    batchDenom?: string;
                    tradableAmount?: string;
                    retiredAmount?: string;
                    retirementLocation?: string;
                }): _593.MsgSend_SendCredits;
            };
            MsgSendResponse: {
                encode(_: _593.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _593.MsgSendResponse;
                fromJSON(_: any): _593.MsgSendResponse;
                toJSON(_: _593.MsgSendResponse): unknown;
                fromPartial(_: {}): _593.MsgSendResponse;
            };
            MsgRetire: {
                encode(message: _593.MsgRetire, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _593.MsgRetire;
                fromJSON(object: any): _593.MsgRetire;
                toJSON(message: _593.MsgRetire): unknown;
                fromPartial(object: {
                    holder?: string;
                    credits?: {
                        batchDenom?: string;
                        amount?: string;
                    }[];
                    location?: string;
                }): _593.MsgRetire;
            };
            MsgRetire_RetireCredits: {
                encode(message: _593.MsgRetire_RetireCredits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _593.MsgRetire_RetireCredits;
                fromJSON(object: any): _593.MsgRetire_RetireCredits;
                toJSON(message: _593.MsgRetire_RetireCredits): unknown;
                fromPartial(object: {
                    batchDenom?: string;
                    amount?: string;
                }): _593.MsgRetire_RetireCredits;
            };
            MsgRetireResponse: {
                encode(_: _593.MsgRetireResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _593.MsgRetireResponse;
                fromJSON(_: any): _593.MsgRetireResponse;
                toJSON(_: _593.MsgRetireResponse): unknown;
                fromPartial(_: {}): _593.MsgRetireResponse;
            };
            MsgCancel: {
                encode(message: _593.MsgCancel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _593.MsgCancel;
                fromJSON(object: any): _593.MsgCancel;
                toJSON(message: _593.MsgCancel): unknown;
                fromPartial(object: {
                    holder?: string;
                    credits?: {
                        batchDenom?: string;
                        amount?: string;
                    }[];
                }): _593.MsgCancel;
            };
            MsgCancel_CancelCredits: {
                encode(message: _593.MsgCancel_CancelCredits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _593.MsgCancel_CancelCredits;
                fromJSON(object: any): _593.MsgCancel_CancelCredits;
                toJSON(message: _593.MsgCancel_CancelCredits): unknown;
                fromPartial(object: {
                    batchDenom?: string;
                    amount?: string;
                }): _593.MsgCancel_CancelCredits;
            };
            MsgCancelResponse: {
                encode(_: _593.MsgCancelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _593.MsgCancelResponse;
                fromJSON(_: any): _593.MsgCancelResponse;
                toJSON(_: _593.MsgCancelResponse): unknown;
                fromPartial(_: {}): _593.MsgCancelResponse;
            };
            MsgUpdateClassAdmin: {
                encode(message: _593.MsgUpdateClassAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _593.MsgUpdateClassAdmin;
                fromJSON(object: any): _593.MsgUpdateClassAdmin;
                toJSON(message: _593.MsgUpdateClassAdmin): unknown;
                fromPartial(object: {
                    admin?: string;
                    classId?: string;
                    newAdmin?: string;
                }): _593.MsgUpdateClassAdmin;
            };
            MsgUpdateClassAdminResponse: {
                encode(_: _593.MsgUpdateClassAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _593.MsgUpdateClassAdminResponse;
                fromJSON(_: any): _593.MsgUpdateClassAdminResponse;
                toJSON(_: _593.MsgUpdateClassAdminResponse): unknown;
                fromPartial(_: {}): _593.MsgUpdateClassAdminResponse;
            };
            MsgUpdateClassIssuers: {
                encode(message: _593.MsgUpdateClassIssuers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _593.MsgUpdateClassIssuers;
                fromJSON(object: any): _593.MsgUpdateClassIssuers;
                toJSON(message: _593.MsgUpdateClassIssuers): unknown;
                fromPartial(object: {
                    admin?: string;
                    classId?: string;
                    issuers?: string[];
                }): _593.MsgUpdateClassIssuers;
            };
            MsgUpdateClassIssuersResponse: {
                encode(_: _593.MsgUpdateClassIssuersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _593.MsgUpdateClassIssuersResponse;
                fromJSON(_: any): _593.MsgUpdateClassIssuersResponse;
                toJSON(_: _593.MsgUpdateClassIssuersResponse): unknown;
                fromPartial(_: {}): _593.MsgUpdateClassIssuersResponse;
            };
            MsgUpdateClassMetadata: {
                encode(message: _593.MsgUpdateClassMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _593.MsgUpdateClassMetadata;
                fromJSON(object: any): _593.MsgUpdateClassMetadata;
                toJSON(message: _593.MsgUpdateClassMetadata): unknown;
                fromPartial(object: {
                    admin?: string;
                    classId?: string;
                    metadata?: Uint8Array;
                }): _593.MsgUpdateClassMetadata;
            };
            MsgUpdateClassMetadataResponse: {
                encode(_: _593.MsgUpdateClassMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _593.MsgUpdateClassMetadataResponse;
                fromJSON(_: any): _593.MsgUpdateClassMetadataResponse;
                toJSON(_: _593.MsgUpdateClassMetadataResponse): unknown;
                fromPartial(_: {}): _593.MsgUpdateClassMetadataResponse;
            };
            QueryParamsRequest: {
                encode(_: _592.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _592.QueryParamsRequest;
                fromJSON(_: any): _592.QueryParamsRequest;
                toJSON(_: _592.QueryParamsRequest): unknown;
                fromPartial(_: {}): _592.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _592.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _592.QueryParamsResponse;
                fromJSON(object: any): _592.QueryParamsResponse;
                toJSON(message: _592.QueryParamsResponse): unknown;
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
                }): _592.QueryParamsResponse;
            };
            QueryClassesRequest: {
                encode(message: _592.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _592.QueryClassesRequest;
                fromJSON(object: any): _592.QueryClassesRequest;
                toJSON(message: _592.QueryClassesRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _592.QueryClassesRequest;
            };
            QueryClassesResponse: {
                encode(message: _592.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _592.QueryClassesResponse;
                fromJSON(object: any): _592.QueryClassesResponse;
                toJSON(message: _592.QueryClassesResponse): unknown;
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
                }): _592.QueryClassesResponse;
            };
            QueryClassInfoRequest: {
                encode(message: _592.QueryClassInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _592.QueryClassInfoRequest;
                fromJSON(object: any): _592.QueryClassInfoRequest;
                toJSON(message: _592.QueryClassInfoRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                }): _592.QueryClassInfoRequest;
            };
            QueryClassInfoResponse: {
                encode(message: _592.QueryClassInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _592.QueryClassInfoResponse;
                fromJSON(object: any): _592.QueryClassInfoResponse;
                toJSON(message: _592.QueryClassInfoResponse): unknown;
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
                }): _592.QueryClassInfoResponse;
            };
            QueryBatchesRequest: {
                encode(message: _592.QueryBatchesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _592.QueryBatchesRequest;
                fromJSON(object: any): _592.QueryBatchesRequest;
                toJSON(message: _592.QueryBatchesRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _592.QueryBatchesRequest;
            };
            QueryBatchesResponse: {
                encode(message: _592.QueryBatchesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _592.QueryBatchesResponse;
                fromJSON(object: any): _592.QueryBatchesResponse;
                toJSON(message: _592.QueryBatchesResponse): unknown;
                fromPartial(object: {
                    batches?: {
                        classId?: string;
                        batchDenom?: string;
                        issuer?: string;
                        totalAmount?: string;
                        metadata?: Uint8Array;
                        amountCancelled?: string;
                        startDate?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        endDate?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        projectLocation?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _592.QueryBatchesResponse;
            };
            QueryBatchInfoRequest: {
                encode(message: _592.QueryBatchInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _592.QueryBatchInfoRequest;
                fromJSON(object: any): _592.QueryBatchInfoRequest;
                toJSON(message: _592.QueryBatchInfoRequest): unknown;
                fromPartial(object: {
                    batchDenom?: string;
                }): _592.QueryBatchInfoRequest;
            };
            QueryBatchInfoResponse: {
                encode(message: _592.QueryBatchInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _592.QueryBatchInfoResponse;
                fromJSON(object: any): _592.QueryBatchInfoResponse;
                toJSON(message: _592.QueryBatchInfoResponse): unknown;
                fromPartial(object: {
                    info?: {
                        classId?: string;
                        batchDenom?: string;
                        issuer?: string;
                        totalAmount?: string;
                        metadata?: Uint8Array;
                        amountCancelled?: string;
                        startDate?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        endDate?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        projectLocation?: string;
                    };
                }): _592.QueryBatchInfoResponse;
            };
            QueryBalanceRequest: {
                encode(message: _592.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _592.QueryBalanceRequest;
                fromJSON(object: any): _592.QueryBalanceRequest;
                toJSON(message: _592.QueryBalanceRequest): unknown;
                fromPartial(object: {
                    account?: string;
                    batchDenom?: string;
                }): _592.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _592.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _592.QueryBalanceResponse;
                fromJSON(object: any): _592.QueryBalanceResponse;
                toJSON(message: _592.QueryBalanceResponse): unknown;
                fromPartial(object: {
                    tradableAmount?: string;
                    retiredAmount?: string;
                }): _592.QueryBalanceResponse;
            };
            QuerySupplyRequest: {
                encode(message: _592.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _592.QuerySupplyRequest;
                fromJSON(object: any): _592.QuerySupplyRequest;
                toJSON(message: _592.QuerySupplyRequest): unknown;
                fromPartial(object: {
                    batchDenom?: string;
                }): _592.QuerySupplyRequest;
            };
            QuerySupplyResponse: {
                encode(message: _592.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _592.QuerySupplyResponse;
                fromJSON(object: any): _592.QuerySupplyResponse;
                toJSON(message: _592.QuerySupplyResponse): unknown;
                fromPartial(object: {
                    tradableSupply?: string;
                    retiredSupply?: string;
                }): _592.QuerySupplyResponse;
            };
            QueryCreditTypesRequest: {
                encode(_: _592.QueryCreditTypesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _592.QueryCreditTypesRequest;
                fromJSON(_: any): _592.QueryCreditTypesRequest;
                toJSON(_: _592.QueryCreditTypesRequest): unknown;
                fromPartial(_: {}): _592.QueryCreditTypesRequest;
            };
            QueryCreditTypesResponse: {
                encode(message: _592.QueryCreditTypesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _592.QueryCreditTypesResponse;
                fromJSON(object: any): _592.QueryCreditTypesResponse;
                toJSON(message: _592.QueryCreditTypesResponse): unknown;
                fromPartial(object: {
                    creditTypes?: {
                        name?: string;
                        abbreviation?: string;
                        unit?: string;
                        precision?: number;
                    }[];
                }): _592.QueryCreditTypesResponse;
            };
            GenesisState: {
                encode(message: _591.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _591.GenesisState;
                fromJSON(object: any): _591.GenesisState;
                toJSON(message: _591.GenesisState): unknown;
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
                        startDate?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        endDate?: {
                            seconds?: any;
                            nanos?: number;
                        };
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
                }): _591.GenesisState;
            };
            Balance: {
                encode(message: _591.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _591.Balance;
                fromJSON(object: any): _591.Balance;
                toJSON(message: _591.Balance): unknown;
                fromPartial(object: {
                    address?: string;
                    batchDenom?: string;
                    tradableBalance?: string;
                    retiredBalance?: string;
                }): _591.Balance;
            };
            Supply: {
                encode(message: _591.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _591.Supply;
                fromJSON(object: any): _591.Supply;
                toJSON(message: _591.Supply): unknown;
                fromPartial(object: {
                    batchDenom?: string;
                    tradableSupply?: string;
                    retiredSupply?: string;
                }): _591.Supply;
            };
            EventCreateClass: {
                encode(message: _590.EventCreateClass, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _590.EventCreateClass;
                fromJSON(object: any): _590.EventCreateClass;
                toJSON(message: _590.EventCreateClass): unknown;
                fromPartial(object: {
                    classId?: string;
                    admin?: string;
                }): _590.EventCreateClass;
            };
            EventCreateBatch: {
                encode(message: _590.EventCreateBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _590.EventCreateBatch;
                fromJSON(object: any): _590.EventCreateBatch;
                toJSON(message: _590.EventCreateBatch): unknown;
                fromPartial(object: {
                    classId?: string;
                    batchDenom?: string;
                    issuer?: string;
                    totalAmount?: string;
                    startDate?: string;
                    endDate?: string;
                    projectLocation?: string;
                }): _590.EventCreateBatch;
            };
            EventReceive: {
                encode(message: _590.EventReceive, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _590.EventReceive;
                fromJSON(object: any): _590.EventReceive;
                toJSON(message: _590.EventReceive): unknown;
                fromPartial(object: {
                    sender?: string;
                    recipient?: string;
                    batchDenom?: string;
                    tradableAmount?: string;
                    retiredAmount?: string;
                    basketDenom?: string;
                }): _590.EventReceive;
            };
            EventRetire: {
                encode(message: _590.EventRetire, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _590.EventRetire;
                fromJSON(object: any): _590.EventRetire;
                toJSON(message: _590.EventRetire): unknown;
                fromPartial(object: {
                    retirer?: string;
                    batchDenom?: string;
                    amount?: string;
                    location?: string;
                }): _590.EventRetire;
            };
            EventCancel: {
                encode(message: _590.EventCancel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _590.EventCancel;
                fromJSON(object: any): _590.EventCancel;
                toJSON(message: _590.EventCancel): unknown;
                fromPartial(object: {
                    canceller?: string;
                    batchDenom?: string;
                    amount?: string;
                }): _590.EventCancel;
            };
        };
    }
    namespace group {
        const v1alpha1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _598.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _598.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _598.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _598.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupAccount(value: _598.MsgCreateGroupAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAccountAdmin(value: _598.MsgUpdateGroupAccountAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAccountDecisionPolicy(value: _598.MsgUpdateGroupAccountDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAccountMetadata(value: _598.MsgUpdateGroupAccountMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createProposal(value: _598.MsgCreateProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _598.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _598.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _598.MsgCreateGroup): {
                        typeUrl: string;
                        value: _598.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _598.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _598.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _598.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _598.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _598.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _598.MsgUpdateGroupMetadata;
                    };
                    createGroupAccount(value: _598.MsgCreateGroupAccount): {
                        typeUrl: string;
                        value: _598.MsgCreateGroupAccount;
                    };
                    updateGroupAccountAdmin(value: _598.MsgUpdateGroupAccountAdmin): {
                        typeUrl: string;
                        value: _598.MsgUpdateGroupAccountAdmin;
                    };
                    updateGroupAccountDecisionPolicy(value: _598.MsgUpdateGroupAccountDecisionPolicy): {
                        typeUrl: string;
                        value: _598.MsgUpdateGroupAccountDecisionPolicy;
                    };
                    updateGroupAccountMetadata(value: _598.MsgUpdateGroupAccountMetadata): {
                        typeUrl: string;
                        value: _598.MsgUpdateGroupAccountMetadata;
                    };
                    createProposal(value: _598.MsgCreateProposal): {
                        typeUrl: string;
                        value: _598.MsgCreateProposal;
                    };
                    vote(value: _598.MsgVote): {
                        typeUrl: string;
                        value: _598.MsgVote;
                    };
                    exec(value: _598.MsgExec): {
                        typeUrl: string;
                        value: _598.MsgExec;
                    };
                };
                toJSON: {
                    createGroup(value: _598.MsgCreateGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupMembers(value: _598.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupAdmin(value: _598.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupMetadata(value: _598.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createGroupAccount(value: _598.MsgCreateGroupAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupAccountAdmin(value: _598.MsgUpdateGroupAccountAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupAccountDecisionPolicy(value: _598.MsgUpdateGroupAccountDecisionPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupAccountMetadata(value: _598.MsgUpdateGroupAccountMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createProposal(value: _598.MsgCreateProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _598.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exec(value: _598.MsgExec): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _598.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _598.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _598.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _598.MsgUpdateGroupMetadata;
                    };
                    createGroupAccount(value: any): {
                        typeUrl: string;
                        value: _598.MsgCreateGroupAccount;
                    };
                    updateGroupAccountAdmin(value: any): {
                        typeUrl: string;
                        value: _598.MsgUpdateGroupAccountAdmin;
                    };
                    updateGroupAccountDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _598.MsgUpdateGroupAccountDecisionPolicy;
                    };
                    updateGroupAccountMetadata(value: any): {
                        typeUrl: string;
                        value: _598.MsgUpdateGroupAccountMetadata;
                    };
                    createProposal(value: any): {
                        typeUrl: string;
                        value: _598.MsgCreateProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _598.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _598.MsgExec;
                    };
                };
                fromPartial: {
                    createGroup(value: _598.MsgCreateGroup): {
                        typeUrl: string;
                        value: _598.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _598.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _598.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _598.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _598.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _598.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _598.MsgUpdateGroupMetadata;
                    };
                    createGroupAccount(value: _598.MsgCreateGroupAccount): {
                        typeUrl: string;
                        value: _598.MsgCreateGroupAccount;
                    };
                    updateGroupAccountAdmin(value: _598.MsgUpdateGroupAccountAdmin): {
                        typeUrl: string;
                        value: _598.MsgUpdateGroupAccountAdmin;
                    };
                    updateGroupAccountDecisionPolicy(value: _598.MsgUpdateGroupAccountDecisionPolicy): {
                        typeUrl: string;
                        value: _598.MsgUpdateGroupAccountDecisionPolicy;
                    };
                    updateGroupAccountMetadata(value: _598.MsgUpdateGroupAccountMetadata): {
                        typeUrl: string;
                        value: _598.MsgUpdateGroupAccountMetadata;
                    };
                    createProposal(value: _598.MsgCreateProposal): {
                        typeUrl: string;
                        value: _598.MsgCreateProposal;
                    };
                    vote(value: _598.MsgVote): {
                        typeUrl: string;
                        value: _598.MsgVote;
                    };
                    exec(value: _598.MsgExec): {
                        typeUrl: string;
                        value: _598.MsgExec;
                    };
                };
            };
            AminoConverter: {
                "/regen.group.v1alpha1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: ({ admin, members, metadata }: _598.MsgCreateGroup) => {
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
                    }) => _598.MsgCreateGroup;
                };
                "/regen.group.v1alpha1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, memberUpdates }: _598.MsgUpdateGroupMembers) => {
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
                    }) => _598.MsgUpdateGroupMembers;
                };
                "/regen.group.v1alpha1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, newAdmin }: _598.MsgUpdateGroupAdmin) => {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, group_id, new_admin }: {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    }) => _598.MsgUpdateGroupAdmin;
                };
                "/regen.group.v1alpha1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata }: _598.MsgUpdateGroupMetadata) => {
                        admin: string;
                        group_id: string;
                        metadata: Uint8Array;
                    };
                    fromAmino: ({ admin, group_id, metadata }: {
                        admin: string;
                        group_id: string;
                        metadata: Uint8Array;
                    }) => _598.MsgUpdateGroupMetadata;
                };
                "/regen.group.v1alpha1.MsgCreateGroupAccount": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata, decisionPolicy }: _598.MsgCreateGroupAccount) => {
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
                    }) => _598.MsgCreateGroupAccount;
                };
                "/regen.group.v1alpha1.MsgUpdateGroupAccountAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, address, newAdmin }: _598.MsgUpdateGroupAccountAdmin) => {
                        admin: string;
                        address: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, address, new_admin }: {
                        admin: string;
                        address: string;
                        new_admin: string;
                    }) => _598.MsgUpdateGroupAccountAdmin;
                };
                "/regen.group.v1alpha1.MsgUpdateGroupAccountDecisionPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, address, decisionPolicy }: _598.MsgUpdateGroupAccountDecisionPolicy) => {
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
                    }) => _598.MsgUpdateGroupAccountDecisionPolicy;
                };
                "/regen.group.v1alpha1.MsgUpdateGroupAccountMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, address, metadata }: _598.MsgUpdateGroupAccountMetadata) => {
                        admin: string;
                        address: string;
                        metadata: Uint8Array;
                    };
                    fromAmino: ({ admin, address, metadata }: {
                        admin: string;
                        address: string;
                        metadata: Uint8Array;
                    }) => _598.MsgUpdateGroupAccountMetadata;
                };
                "/regen.group.v1alpha1.MsgCreateProposal": {
                    aminoType: string;
                    toAmino: ({ address, proposers, metadata, msgs, exec }: _598.MsgCreateProposal) => {
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
                    }) => _598.MsgCreateProposal;
                };
                "/regen.group.v1alpha1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, choice, metadata, exec }: _598.MsgVote) => {
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
                    }) => _598.MsgVote;
                };
                "/regen.group.v1alpha1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ proposalId, signer }: _598.MsgExec) => {
                        proposal_id: string;
                        signer: string;
                    };
                    fromAmino: ({ proposal_id, signer }: {
                        proposal_id: string;
                        signer: string;
                    }) => _598.MsgExec;
                };
            };
            choiceFromJSON(object: any): _599.Choice;
            choiceToJSON(object: _599.Choice): string;
            proposal_StatusFromJSON(object: any): _599.Proposal_Status;
            proposal_StatusToJSON(object: _599.Proposal_Status): string;
            proposal_ResultFromJSON(object: any): _599.Proposal_Result;
            proposal_ResultToJSON(object: _599.Proposal_Result): string;
            proposal_ExecutorResultFromJSON(object: any): _599.Proposal_ExecutorResult;
            proposal_ExecutorResultToJSON(object: _599.Proposal_ExecutorResult): string;
            Choice: typeof _599.Choice;
            Proposal_Status: typeof _599.Proposal_Status;
            Proposal_Result: typeof _599.Proposal_Result;
            Proposal_ExecutorResult: typeof _599.Proposal_ExecutorResult;
            Member: {
                encode(message: _599.Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _599.Member;
                fromJSON(object: any): _599.Member;
                toJSON(message: _599.Member): unknown;
                fromPartial(object: {
                    address?: string;
                    weight?: string;
                    metadata?: Uint8Array;
                }): _599.Member;
            };
            Members: {
                encode(message: _599.Members, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _599.Members;
                fromJSON(object: any): _599.Members;
                toJSON(message: _599.Members): unknown;
                fromPartial(object: {
                    members?: {
                        address?: string;
                        weight?: string;
                        metadata?: Uint8Array;
                    }[];
                }): _599.Members;
            };
            ThresholdDecisionPolicy: {
                encode(message: _599.ThresholdDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _599.ThresholdDecisionPolicy;
                fromJSON(object: any): _599.ThresholdDecisionPolicy;
                toJSON(message: _599.ThresholdDecisionPolicy): unknown;
                fromPartial(object: {
                    threshold?: string;
                    timeout?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _599.ThresholdDecisionPolicy;
            };
            GroupInfo: {
                encode(message: _599.GroupInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _599.GroupInfo;
                fromJSON(object: any): _599.GroupInfo;
                toJSON(message: _599.GroupInfo): unknown;
                fromPartial(object: {
                    groupId?: any;
                    admin?: string;
                    metadata?: Uint8Array;
                    version?: any;
                    totalWeight?: string;
                }): _599.GroupInfo;
            };
            GroupMember: {
                encode(message: _599.GroupMember, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _599.GroupMember;
                fromJSON(object: any): _599.GroupMember;
                toJSON(message: _599.GroupMember): unknown;
                fromPartial(object: {
                    groupId?: any;
                    member?: {
                        address?: string;
                        weight?: string;
                        metadata?: Uint8Array;
                    };
                }): _599.GroupMember;
            };
            GroupAccountInfo: {
                encode(message: _599.GroupAccountInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _599.GroupAccountInfo;
                fromJSON(object: any): _599.GroupAccountInfo;
                toJSON(message: _599.GroupAccountInfo): unknown;
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
                }): _599.GroupAccountInfo;
            };
            Proposal: {
                encode(message: _599.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _599.Proposal;
                fromJSON(object: any): _599.Proposal;
                toJSON(message: _599.Proposal): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    address?: string;
                    metadata?: Uint8Array;
                    proposers?: string[];
                    submittedAt?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    groupVersion?: any;
                    groupAccountVersion?: any;
                    status?: _599.Proposal_Status;
                    result?: _599.Proposal_Result;
                    voteState?: {
                        yesCount?: string;
                        noCount?: string;
                        abstainCount?: string;
                        vetoCount?: string;
                    };
                    timeout?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    executorResult?: _599.Proposal_ExecutorResult;
                    msgs?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _599.Proposal;
            };
            Tally: {
                encode(message: _599.Tally, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _599.Tally;
                fromJSON(object: any): _599.Tally;
                toJSON(message: _599.Tally): unknown;
                fromPartial(object: {
                    yesCount?: string;
                    noCount?: string;
                    abstainCount?: string;
                    vetoCount?: string;
                }): _599.Tally;
            };
            Vote: {
                encode(message: _599.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _599.Vote;
                fromJSON(object: any): _599.Vote;
                toJSON(message: _599.Vote): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    choice?: _599.Choice;
                    metadata?: Uint8Array;
                    submittedAt?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _599.Vote;
            };
            execFromJSON(object: any): _598.Exec;
            execToJSON(object: _598.Exec): string;
            Exec: typeof _598.Exec;
            MsgCreateGroup: {
                encode(message: _598.MsgCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _598.MsgCreateGroup;
                fromJSON(object: any): _598.MsgCreateGroup;
                toJSON(message: _598.MsgCreateGroup): unknown;
                fromPartial(object: {
                    admin?: string;
                    members?: {
                        address?: string;
                        weight?: string;
                        metadata?: Uint8Array;
                    }[];
                    metadata?: Uint8Array;
                }): _598.MsgCreateGroup;
            };
            MsgCreateGroupResponse: {
                encode(message: _598.MsgCreateGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _598.MsgCreateGroupResponse;
                fromJSON(object: any): _598.MsgCreateGroupResponse;
                toJSON(message: _598.MsgCreateGroupResponse): unknown;
                fromPartial(object: {
                    groupId?: any;
                }): _598.MsgCreateGroupResponse;
            };
            MsgUpdateGroupMembers: {
                encode(message: _598.MsgUpdateGroupMembers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _598.MsgUpdateGroupMembers;
                fromJSON(object: any): _598.MsgUpdateGroupMembers;
                toJSON(message: _598.MsgUpdateGroupMembers): unknown;
                fromPartial(object: {
                    admin?: string;
                    groupId?: any;
                    memberUpdates?: {
                        address?: string;
                        weight?: string;
                        metadata?: Uint8Array;
                    }[];
                }): _598.MsgUpdateGroupMembers;
            };
            MsgUpdateGroupMembersResponse: {
                encode(_: _598.MsgUpdateGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _598.MsgUpdateGroupMembersResponse;
                fromJSON(_: any): _598.MsgUpdateGroupMembersResponse;
                toJSON(_: _598.MsgUpdateGroupMembersResponse): unknown;
                fromPartial(_: {}): _598.MsgUpdateGroupMembersResponse;
            };
            MsgUpdateGroupAdmin: {
                encode(message: _598.MsgUpdateGroupAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _598.MsgUpdateGroupAdmin;
                fromJSON(object: any): _598.MsgUpdateGroupAdmin;
                toJSON(message: _598.MsgUpdateGroupAdmin): unknown;
                fromPartial(object: {
                    admin?: string;
                    groupId?: any;
                    newAdmin?: string;
                }): _598.MsgUpdateGroupAdmin;
            };
            MsgUpdateGroupAdminResponse: {
                encode(_: _598.MsgUpdateGroupAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _598.MsgUpdateGroupAdminResponse;
                fromJSON(_: any): _598.MsgUpdateGroupAdminResponse;
                toJSON(_: _598.MsgUpdateGroupAdminResponse): unknown;
                fromPartial(_: {}): _598.MsgUpdateGroupAdminResponse;
            };
            MsgUpdateGroupMetadata: {
                encode(message: _598.MsgUpdateGroupMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _598.MsgUpdateGroupMetadata;
                fromJSON(object: any): _598.MsgUpdateGroupMetadata;
                toJSON(message: _598.MsgUpdateGroupMetadata): unknown;
                fromPartial(object: {
                    admin?: string;
                    groupId?: any;
                    metadata?: Uint8Array;
                }): _598.MsgUpdateGroupMetadata;
            };
            MsgUpdateGroupMetadataResponse: {
                encode(_: _598.MsgUpdateGroupMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _598.MsgUpdateGroupMetadataResponse;
                fromJSON(_: any): _598.MsgUpdateGroupMetadataResponse;
                toJSON(_: _598.MsgUpdateGroupMetadataResponse): unknown;
                fromPartial(_: {}): _598.MsgUpdateGroupMetadataResponse;
            };
            MsgCreateGroupAccount: {
                encode(message: _598.MsgCreateGroupAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _598.MsgCreateGroupAccount;
                fromJSON(object: any): _598.MsgCreateGroupAccount;
                toJSON(message: _598.MsgCreateGroupAccount): unknown;
                fromPartial(object: {
                    admin?: string;
                    groupId?: any;
                    metadata?: Uint8Array;
                    decisionPolicy?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _598.MsgCreateGroupAccount;
            };
            MsgCreateGroupAccountResponse: {
                encode(message: _598.MsgCreateGroupAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _598.MsgCreateGroupAccountResponse;
                fromJSON(object: any): _598.MsgCreateGroupAccountResponse;
                toJSON(message: _598.MsgCreateGroupAccountResponse): unknown;
                fromPartial(object: {
                    address?: string;
                }): _598.MsgCreateGroupAccountResponse;
            };
            MsgUpdateGroupAccountAdmin: {
                encode(message: _598.MsgUpdateGroupAccountAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _598.MsgUpdateGroupAccountAdmin;
                fromJSON(object: any): _598.MsgUpdateGroupAccountAdmin;
                toJSON(message: _598.MsgUpdateGroupAccountAdmin): unknown;
                fromPartial(object: {
                    admin?: string;
                    address?: string;
                    newAdmin?: string;
                }): _598.MsgUpdateGroupAccountAdmin;
            };
            MsgUpdateGroupAccountAdminResponse: {
                encode(_: _598.MsgUpdateGroupAccountAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _598.MsgUpdateGroupAccountAdminResponse;
                fromJSON(_: any): _598.MsgUpdateGroupAccountAdminResponse;
                toJSON(_: _598.MsgUpdateGroupAccountAdminResponse): unknown;
                fromPartial(_: {}): _598.MsgUpdateGroupAccountAdminResponse;
            };
            MsgUpdateGroupAccountDecisionPolicy: {
                encode(message: _598.MsgUpdateGroupAccountDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _598.MsgUpdateGroupAccountDecisionPolicy;
                fromJSON(object: any): _598.MsgUpdateGroupAccountDecisionPolicy;
                toJSON(message: _598.MsgUpdateGroupAccountDecisionPolicy): unknown;
                fromPartial(object: {
                    admin?: string;
                    address?: string;
                    decisionPolicy?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _598.MsgUpdateGroupAccountDecisionPolicy;
            };
            MsgUpdateGroupAccountDecisionPolicyResponse: {
                encode(_: _598.MsgUpdateGroupAccountDecisionPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _598.MsgUpdateGroupAccountDecisionPolicyResponse;
                fromJSON(_: any): _598.MsgUpdateGroupAccountDecisionPolicyResponse;
                toJSON(_: _598.MsgUpdateGroupAccountDecisionPolicyResponse): unknown;
                fromPartial(_: {}): _598.MsgUpdateGroupAccountDecisionPolicyResponse;
            };
            MsgUpdateGroupAccountMetadata: {
                encode(message: _598.MsgUpdateGroupAccountMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _598.MsgUpdateGroupAccountMetadata;
                fromJSON(object: any): _598.MsgUpdateGroupAccountMetadata;
                toJSON(message: _598.MsgUpdateGroupAccountMetadata): unknown;
                fromPartial(object: {
                    admin?: string;
                    address?: string;
                    metadata?: Uint8Array;
                }): _598.MsgUpdateGroupAccountMetadata;
            };
            MsgUpdateGroupAccountMetadataResponse: {
                encode(_: _598.MsgUpdateGroupAccountMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _598.MsgUpdateGroupAccountMetadataResponse;
                fromJSON(_: any): _598.MsgUpdateGroupAccountMetadataResponse;
                toJSON(_: _598.MsgUpdateGroupAccountMetadataResponse): unknown;
                fromPartial(_: {}): _598.MsgUpdateGroupAccountMetadataResponse;
            };
            MsgCreateProposal: {
                encode(message: _598.MsgCreateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _598.MsgCreateProposal;
                fromJSON(object: any): _598.MsgCreateProposal;
                toJSON(message: _598.MsgCreateProposal): unknown;
                fromPartial(object: {
                    address?: string;
                    proposers?: string[];
                    metadata?: Uint8Array;
                    msgs?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    exec?: _598.Exec;
                }): _598.MsgCreateProposal;
            };
            MsgCreateProposalResponse: {
                encode(message: _598.MsgCreateProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _598.MsgCreateProposalResponse;
                fromJSON(object: any): _598.MsgCreateProposalResponse;
                toJSON(message: _598.MsgCreateProposalResponse): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _598.MsgCreateProposalResponse;
            };
            MsgVote: {
                encode(message: _598.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _598.MsgVote;
                fromJSON(object: any): _598.MsgVote;
                toJSON(message: _598.MsgVote): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    choice?: _599.Choice;
                    metadata?: Uint8Array;
                    exec?: _598.Exec;
                }): _598.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _598.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _598.MsgVoteResponse;
                fromJSON(_: any): _598.MsgVoteResponse;
                toJSON(_: _598.MsgVoteResponse): unknown;
                fromPartial(_: {}): _598.MsgVoteResponse;
            };
            MsgExec: {
                encode(message: _598.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _598.MsgExec;
                fromJSON(object: any): _598.MsgExec;
                toJSON(message: _598.MsgExec): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    signer?: string;
                }): _598.MsgExec;
            };
            MsgExecResponse: {
                encode(_: _598.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _598.MsgExecResponse;
                fromJSON(_: any): _598.MsgExecResponse;
                toJSON(_: _598.MsgExecResponse): unknown;
                fromPartial(_: {}): _598.MsgExecResponse;
            };
            QueryGroupInfoRequest: {
                encode(message: _597.QueryGroupInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _597.QueryGroupInfoRequest;
                fromJSON(object: any): _597.QueryGroupInfoRequest;
                toJSON(message: _597.QueryGroupInfoRequest): unknown;
                fromPartial(object: {
                    groupId?: any;
                }): _597.QueryGroupInfoRequest;
            };
            QueryGroupInfoResponse: {
                encode(message: _597.QueryGroupInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _597.QueryGroupInfoResponse;
                fromJSON(object: any): _597.QueryGroupInfoResponse;
                toJSON(message: _597.QueryGroupInfoResponse): unknown;
                fromPartial(object: {
                    info?: {
                        groupId?: any;
                        admin?: string;
                        metadata?: Uint8Array;
                        version?: any;
                        totalWeight?: string;
                    };
                }): _597.QueryGroupInfoResponse;
            };
            QueryGroupAccountInfoRequest: {
                encode(message: _597.QueryGroupAccountInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _597.QueryGroupAccountInfoRequest;
                fromJSON(object: any): _597.QueryGroupAccountInfoRequest;
                toJSON(message: _597.QueryGroupAccountInfoRequest): unknown;
                fromPartial(object: {
                    address?: string;
                }): _597.QueryGroupAccountInfoRequest;
            };
            QueryGroupAccountInfoResponse: {
                encode(message: _597.QueryGroupAccountInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _597.QueryGroupAccountInfoResponse;
                fromJSON(object: any): _597.QueryGroupAccountInfoResponse;
                toJSON(message: _597.QueryGroupAccountInfoResponse): unknown;
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
                }): _597.QueryGroupAccountInfoResponse;
            };
            QueryGroupMembersRequest: {
                encode(message: _597.QueryGroupMembersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _597.QueryGroupMembersRequest;
                fromJSON(object: any): _597.QueryGroupMembersRequest;
                toJSON(message: _597.QueryGroupMembersRequest): unknown;
                fromPartial(object: {
                    groupId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _597.QueryGroupMembersRequest;
            };
            QueryGroupMembersResponse: {
                encode(message: _597.QueryGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _597.QueryGroupMembersResponse;
                fromJSON(object: any): _597.QueryGroupMembersResponse;
                toJSON(message: _597.QueryGroupMembersResponse): unknown;
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
                }): _597.QueryGroupMembersResponse;
            };
            QueryGroupsByAdminRequest: {
                encode(message: _597.QueryGroupsByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _597.QueryGroupsByAdminRequest;
                fromJSON(object: any): _597.QueryGroupsByAdminRequest;
                toJSON(message: _597.QueryGroupsByAdminRequest): unknown;
                fromPartial(object: {
                    admin?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _597.QueryGroupsByAdminRequest;
            };
            QueryGroupsByAdminResponse: {
                encode(message: _597.QueryGroupsByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _597.QueryGroupsByAdminResponse;
                fromJSON(object: any): _597.QueryGroupsByAdminResponse;
                toJSON(message: _597.QueryGroupsByAdminResponse): unknown;
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
                }): _597.QueryGroupsByAdminResponse;
            };
            QueryGroupAccountsByGroupRequest: {
                encode(message: _597.QueryGroupAccountsByGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _597.QueryGroupAccountsByGroupRequest;
                fromJSON(object: any): _597.QueryGroupAccountsByGroupRequest;
                toJSON(message: _597.QueryGroupAccountsByGroupRequest): unknown;
                fromPartial(object: {
                    groupId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _597.QueryGroupAccountsByGroupRequest;
            };
            QueryGroupAccountsByGroupResponse: {
                encode(message: _597.QueryGroupAccountsByGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _597.QueryGroupAccountsByGroupResponse;
                fromJSON(object: any): _597.QueryGroupAccountsByGroupResponse;
                toJSON(message: _597.QueryGroupAccountsByGroupResponse): unknown;
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
                }): _597.QueryGroupAccountsByGroupResponse;
            };
            QueryGroupAccountsByAdminRequest: {
                encode(message: _597.QueryGroupAccountsByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _597.QueryGroupAccountsByAdminRequest;
                fromJSON(object: any): _597.QueryGroupAccountsByAdminRequest;
                toJSON(message: _597.QueryGroupAccountsByAdminRequest): unknown;
                fromPartial(object: {
                    admin?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _597.QueryGroupAccountsByAdminRequest;
            };
            QueryGroupAccountsByAdminResponse: {
                encode(message: _597.QueryGroupAccountsByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _597.QueryGroupAccountsByAdminResponse;
                fromJSON(object: any): _597.QueryGroupAccountsByAdminResponse;
                toJSON(message: _597.QueryGroupAccountsByAdminResponse): unknown;
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
                }): _597.QueryGroupAccountsByAdminResponse;
            };
            QueryProposalRequest: {
                encode(message: _597.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _597.QueryProposalRequest;
                fromJSON(object: any): _597.QueryProposalRequest;
                toJSON(message: _597.QueryProposalRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _597.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _597.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _597.QueryProposalResponse;
                fromJSON(object: any): _597.QueryProposalResponse;
                toJSON(message: _597.QueryProposalResponse): unknown;
                fromPartial(object: {
                    proposal?: {
                        proposalId?: any;
                        address?: string;
                        metadata?: Uint8Array;
                        proposers?: string[];
                        submittedAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        groupVersion?: any;
                        groupAccountVersion?: any;
                        status?: _599.Proposal_Status;
                        result?: _599.Proposal_Result;
                        voteState?: {
                            yesCount?: string;
                            noCount?: string;
                            abstainCount?: string;
                            vetoCount?: string;
                        };
                        timeout?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        executorResult?: _599.Proposal_ExecutorResult;
                        msgs?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    };
                }): _597.QueryProposalResponse;
            };
            QueryProposalsByGroupAccountRequest: {
                encode(message: _597.QueryProposalsByGroupAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _597.QueryProposalsByGroupAccountRequest;
                fromJSON(object: any): _597.QueryProposalsByGroupAccountRequest;
                toJSON(message: _597.QueryProposalsByGroupAccountRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _597.QueryProposalsByGroupAccountRequest;
            };
            QueryProposalsByGroupAccountResponse: {
                encode(message: _597.QueryProposalsByGroupAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _597.QueryProposalsByGroupAccountResponse;
                fromJSON(object: any): _597.QueryProposalsByGroupAccountResponse;
                toJSON(message: _597.QueryProposalsByGroupAccountResponse): unknown;
                fromPartial(object: {
                    proposals?: {
                        proposalId?: any;
                        address?: string;
                        metadata?: Uint8Array;
                        proposers?: string[];
                        submittedAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        groupVersion?: any;
                        groupAccountVersion?: any;
                        status?: _599.Proposal_Status;
                        result?: _599.Proposal_Result;
                        voteState?: {
                            yesCount?: string;
                            noCount?: string;
                            abstainCount?: string;
                            vetoCount?: string;
                        };
                        timeout?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        executorResult?: _599.Proposal_ExecutorResult;
                        msgs?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _597.QueryProposalsByGroupAccountResponse;
            };
            QueryVoteByProposalVoterRequest: {
                encode(message: _597.QueryVoteByProposalVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _597.QueryVoteByProposalVoterRequest;
                fromJSON(object: any): _597.QueryVoteByProposalVoterRequest;
                toJSON(message: _597.QueryVoteByProposalVoterRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                }): _597.QueryVoteByProposalVoterRequest;
            };
            QueryVoteByProposalVoterResponse: {
                encode(message: _597.QueryVoteByProposalVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _597.QueryVoteByProposalVoterResponse;
                fromJSON(object: any): _597.QueryVoteByProposalVoterResponse;
                toJSON(message: _597.QueryVoteByProposalVoterResponse): unknown;
                fromPartial(object: {
                    vote?: {
                        proposalId?: any;
                        voter?: string;
                        choice?: _599.Choice;
                        metadata?: Uint8Array;
                        submittedAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                }): _597.QueryVoteByProposalVoterResponse;
            };
            QueryVotesByProposalRequest: {
                encode(message: _597.QueryVotesByProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _597.QueryVotesByProposalRequest;
                fromJSON(object: any): _597.QueryVotesByProposalRequest;
                toJSON(message: _597.QueryVotesByProposalRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _597.QueryVotesByProposalRequest;
            };
            QueryVotesByProposalResponse: {
                encode(message: _597.QueryVotesByProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _597.QueryVotesByProposalResponse;
                fromJSON(object: any): _597.QueryVotesByProposalResponse;
                toJSON(message: _597.QueryVotesByProposalResponse): unknown;
                fromPartial(object: {
                    votes?: {
                        proposalId?: any;
                        voter?: string;
                        choice?: _599.Choice;
                        metadata?: Uint8Array;
                        submittedAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _597.QueryVotesByProposalResponse;
            };
            QueryVotesByVoterRequest: {
                encode(message: _597.QueryVotesByVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _597.QueryVotesByVoterRequest;
                fromJSON(object: any): _597.QueryVotesByVoterRequest;
                toJSON(message: _597.QueryVotesByVoterRequest): unknown;
                fromPartial(object: {
                    voter?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _597.QueryVotesByVoterRequest;
            };
            QueryVotesByVoterResponse: {
                encode(message: _597.QueryVotesByVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _597.QueryVotesByVoterResponse;
                fromJSON(object: any): _597.QueryVotesByVoterResponse;
                toJSON(message: _597.QueryVotesByVoterResponse): unknown;
                fromPartial(object: {
                    votes?: {
                        proposalId?: any;
                        voter?: string;
                        choice?: _599.Choice;
                        metadata?: Uint8Array;
                        submittedAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _597.QueryVotesByVoterResponse;
            };
            GenesisState: {
                encode(message: _596.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _596.GenesisState;
                fromJSON(object: any): _596.GenesisState;
                toJSON(message: _596.GenesisState): unknown;
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
                        submittedAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        groupVersion?: any;
                        groupAccountVersion?: any;
                        status?: _599.Proposal_Status;
                        result?: _599.Proposal_Result;
                        voteState?: {
                            yesCount?: string;
                            noCount?: string;
                            abstainCount?: string;
                            vetoCount?: string;
                        };
                        timeout?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        executorResult?: _599.Proposal_ExecutorResult;
                        msgs?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    }[];
                    votes?: {
                        proposalId?: any;
                        voter?: string;
                        choice?: _599.Choice;
                        metadata?: Uint8Array;
                        submittedAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                }): _596.GenesisState;
            };
            EventCreateGroup: {
                encode(message: _595.EventCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _595.EventCreateGroup;
                fromJSON(object: any): _595.EventCreateGroup;
                toJSON(message: _595.EventCreateGroup): unknown;
                fromPartial(object: {
                    groupId?: any;
                }): _595.EventCreateGroup;
            };
            EventUpdateGroup: {
                encode(message: _595.EventUpdateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _595.EventUpdateGroup;
                fromJSON(object: any): _595.EventUpdateGroup;
                toJSON(message: _595.EventUpdateGroup): unknown;
                fromPartial(object: {
                    groupId?: any;
                }): _595.EventUpdateGroup;
            };
            EventCreateGroupAccount: {
                encode(message: _595.EventCreateGroupAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _595.EventCreateGroupAccount;
                fromJSON(object: any): _595.EventCreateGroupAccount;
                toJSON(message: _595.EventCreateGroupAccount): unknown;
                fromPartial(object: {
                    address?: string;
                }): _595.EventCreateGroupAccount;
            };
            EventUpdateGroupAccount: {
                encode(message: _595.EventUpdateGroupAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _595.EventUpdateGroupAccount;
                fromJSON(object: any): _595.EventUpdateGroupAccount;
                toJSON(message: _595.EventUpdateGroupAccount): unknown;
                fromPartial(object: {
                    address?: string;
                }): _595.EventUpdateGroupAccount;
            };
            EventCreateProposal: {
                encode(message: _595.EventCreateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _595.EventCreateProposal;
                fromJSON(object: any): _595.EventCreateProposal;
                toJSON(message: _595.EventCreateProposal): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _595.EventCreateProposal;
            };
            EventVote: {
                encode(message: _595.EventVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _595.EventVote;
                fromJSON(object: any): _595.EventVote;
                toJSON(message: _595.EventVote): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _595.EventVote;
            };
            EventExec: {
                encode(message: _595.EventExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _595.EventExec;
                fromJSON(object: any): _595.EventExec;
                toJSON(message: _595.EventExec): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _595.EventExec;
            };
        };
    }
}
