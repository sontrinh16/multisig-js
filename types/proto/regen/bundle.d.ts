import * as _632 from "./data/v1/events";
import * as _633 from "./data/v1/query";
import * as _634 from "./data/v1/state";
import * as _635 from "./data/v1/tx";
import * as _636 from "./data/v1/types";
import * as _637 from "./data/v1alpha2/events";
import * as _638 from "./data/v1alpha2/genesis";
import * as _639 from "./data/v1alpha2/query";
import * as _640 from "./data/v1alpha2/tx";
import * as _641 from "./data/v1alpha2/types";
import * as _642 from "./ecocredit/basket/v1/events";
import * as _643 from "./ecocredit/basket/v1/query";
import * as _644 from "./ecocredit/basket/v1/state";
import * as _645 from "./ecocredit/basket/v1/tx";
import * as _646 from "./ecocredit/basket/v1/types";
import * as _647 from "./ecocredit/marketplace/v1/events";
import * as _648 from "./ecocredit/marketplace/v1/query";
import * as _649 from "./ecocredit/marketplace/v1/state";
import * as _650 from "./ecocredit/marketplace/v1/tx";
import * as _651 from "./ecocredit/marketplace/v1/types";
import * as _652 from "./ecocredit/orderbook/v1alpha1/memory";
import * as _653 from "./ecocredit/v1/events";
import * as _654 from "./ecocredit/v1/query";
import * as _655 from "./ecocredit/v1/state";
import * as _656 from "./ecocredit/v1/tx";
import * as _657 from "./ecocredit/v1/types";
import * as _658 from "./ecocredit/v1alpha1/events";
import * as _659 from "./ecocredit/v1alpha1/genesis";
import * as _660 from "./ecocredit/v1alpha1/query";
import * as _661 from "./ecocredit/v1alpha1/tx";
import * as _662 from "./ecocredit/v1alpha1/types";
import * as _663 from "./group/v1alpha1/events";
import * as _664 from "./group/v1alpha1/genesis";
import * as _665 from "./group/v1alpha1/query";
import * as _666 from "./group/v1alpha1/tx";
import * as _667 from "./group/v1alpha1/types";
export declare namespace regen {
    namespace data {
        const v1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    anchor(value: _635.MsgAnchor): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    attest(value: _635.MsgAttest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    defineResolver(value: _635.MsgDefineResolver): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    registerResolver(value: _635.MsgRegisterResolver): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    anchor(value: _635.MsgAnchor): {
                        typeUrl: string;
                        value: _635.MsgAnchor;
                    };
                    attest(value: _635.MsgAttest): {
                        typeUrl: string;
                        value: _635.MsgAttest;
                    };
                    defineResolver(value: _635.MsgDefineResolver): {
                        typeUrl: string;
                        value: _635.MsgDefineResolver;
                    };
                    registerResolver(value: _635.MsgRegisterResolver): {
                        typeUrl: string;
                        value: _635.MsgRegisterResolver;
                    };
                };
                toJSON: {
                    anchor(value: _635.MsgAnchor): {
                        typeUrl: string;
                        value: unknown;
                    };
                    attest(value: _635.MsgAttest): {
                        typeUrl: string;
                        value: unknown;
                    };
                    defineResolver(value: _635.MsgDefineResolver): {
                        typeUrl: string;
                        value: unknown;
                    };
                    registerResolver(value: _635.MsgRegisterResolver): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    anchor(value: any): {
                        typeUrl: string;
                        value: _635.MsgAnchor;
                    };
                    attest(value: any): {
                        typeUrl: string;
                        value: _635.MsgAttest;
                    };
                    defineResolver(value: any): {
                        typeUrl: string;
                        value: _635.MsgDefineResolver;
                    };
                    registerResolver(value: any): {
                        typeUrl: string;
                        value: _635.MsgRegisterResolver;
                    };
                };
                fromPartial: {
                    anchor(value: _635.MsgAnchor): {
                        typeUrl: string;
                        value: _635.MsgAnchor;
                    };
                    attest(value: _635.MsgAttest): {
                        typeUrl: string;
                        value: _635.MsgAttest;
                    };
                    defineResolver(value: _635.MsgDefineResolver): {
                        typeUrl: string;
                        value: _635.MsgDefineResolver;
                    };
                    registerResolver(value: _635.MsgRegisterResolver): {
                        typeUrl: string;
                        value: _635.MsgRegisterResolver;
                    };
                };
            };
            AminoConverter: {
                "/regen.data.v1.MsgAnchor": {
                    aminoType: string;
                    toAmino: ({ sender, contentHash }: _635.MsgAnchor) => {
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
                    }) => _635.MsgAnchor;
                };
                "/regen.data.v1.MsgAttest": {
                    aminoType: string;
                    toAmino: ({ attestor, contentHashes }: _635.MsgAttest) => {
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
                    }) => _635.MsgAttest;
                };
                "/regen.data.v1.MsgDefineResolver": {
                    aminoType: string;
                    toAmino: ({ manager, resolverUrl }: _635.MsgDefineResolver) => {
                        manager: string;
                        resolver_url: string;
                    };
                    fromAmino: ({ manager, resolver_url }: {
                        manager: string;
                        resolver_url: string;
                    }) => _635.MsgDefineResolver;
                };
                "/regen.data.v1.MsgRegisterResolver": {
                    aminoType: string;
                    toAmino: ({ manager, resolverId, contentHashes }: _635.MsgRegisterResolver) => {
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
                    }) => _635.MsgRegisterResolver;
                };
            };
            digestAlgorithmFromJSON(object: any): _636.DigestAlgorithm;
            digestAlgorithmToJSON(object: _636.DigestAlgorithm): string;
            rawMediaTypeFromJSON(object: any): _636.RawMediaType;
            rawMediaTypeToJSON(object: _636.RawMediaType): string;
            graphCanonicalizationAlgorithmFromJSON(object: any): _636.GraphCanonicalizationAlgorithm;
            graphCanonicalizationAlgorithmToJSON(object: _636.GraphCanonicalizationAlgorithm): string;
            graphMerkleTreeFromJSON(object: any): _636.GraphMerkleTree;
            graphMerkleTreeToJSON(object: _636.GraphMerkleTree): string;
            DigestAlgorithm: typeof _636.DigestAlgorithm;
            RawMediaType: typeof _636.RawMediaType;
            GraphCanonicalizationAlgorithm: typeof _636.GraphCanonicalizationAlgorithm;
            GraphMerkleTree: typeof _636.GraphMerkleTree;
            ContentHash: {
                encode(message: _636.ContentHash, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _636.ContentHash;
                fromJSON(object: any): _636.ContentHash;
                toJSON(message: _636.ContentHash): unknown;
                fromPartial(object: {
                    raw?: {
                        hash?: Uint8Array;
                        digestAlgorithm?: _636.DigestAlgorithm;
                        mediaType?: _636.RawMediaType;
                    };
                    graph?: {
                        hash?: Uint8Array;
                        digestAlgorithm?: _636.DigestAlgorithm;
                        canonicalizationAlgorithm?: _636.GraphCanonicalizationAlgorithm;
                        merkleTree?: _636.GraphMerkleTree;
                    };
                }): _636.ContentHash;
            };
            ContentHash_Raw: {
                encode(message: _636.ContentHash_Raw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _636.ContentHash_Raw;
                fromJSON(object: any): _636.ContentHash_Raw;
                toJSON(message: _636.ContentHash_Raw): unknown;
                fromPartial(object: {
                    hash?: Uint8Array;
                    digestAlgorithm?: _636.DigestAlgorithm;
                    mediaType?: _636.RawMediaType;
                }): _636.ContentHash_Raw;
            };
            ContentHash_Graph: {
                encode(message: _636.ContentHash_Graph, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _636.ContentHash_Graph;
                fromJSON(object: any): _636.ContentHash_Graph;
                toJSON(message: _636.ContentHash_Graph): unknown;
                fromPartial(object: {
                    hash?: Uint8Array;
                    digestAlgorithm?: _636.DigestAlgorithm;
                    canonicalizationAlgorithm?: _636.GraphCanonicalizationAlgorithm;
                    merkleTree?: _636.GraphMerkleTree;
                }): _636.ContentHash_Graph;
            };
            ContentEntry: {
                encode(message: _636.ContentEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _636.ContentEntry;
                fromJSON(object: any): _636.ContentEntry;
                toJSON(message: _636.ContentEntry): unknown;
                fromPartial(object: {
                    contentHash?: {
                        raw?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _636.DigestAlgorithm;
                            mediaType?: _636.RawMediaType;
                        };
                        graph?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _636.DigestAlgorithm;
                            canonicalizationAlgorithm?: _636.GraphCanonicalizationAlgorithm;
                            merkleTree?: _636.GraphMerkleTree;
                        };
                    };
                    iri?: string;
                    timestamp?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _636.ContentEntry;
            };
            AttestorEntry: {
                encode(message: _636.AttestorEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _636.AttestorEntry;
                fromJSON(object: any): _636.AttestorEntry;
                toJSON(message: _636.AttestorEntry): unknown;
                fromPartial(object: {
                    iri?: string;
                    attestor?: string;
                    timestamp?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _636.AttestorEntry;
            };
            ContentHashes: {
                encode(message: _636.ContentHashes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _636.ContentHashes;
                fromJSON(object: any): _636.ContentHashes;
                toJSON(message: _636.ContentHashes): unknown;
                fromPartial(object: {
                    contentHashes?: {
                        raw?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _636.DigestAlgorithm;
                            mediaType?: _636.RawMediaType;
                        };
                        graph?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _636.DigestAlgorithm;
                            canonicalizationAlgorithm?: _636.GraphCanonicalizationAlgorithm;
                            merkleTree?: _636.GraphMerkleTree;
                        };
                    }[];
                }): _636.ContentHashes;
            };
            MsgAnchor: {
                encode(message: _635.MsgAnchor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _635.MsgAnchor;
                fromJSON(object: any): _635.MsgAnchor;
                toJSON(message: _635.MsgAnchor): unknown;
                fromPartial(object: {
                    sender?: string;
                    contentHash?: {
                        raw?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _636.DigestAlgorithm;
                            mediaType?: _636.RawMediaType;
                        };
                        graph?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _636.DigestAlgorithm;
                            canonicalizationAlgorithm?: _636.GraphCanonicalizationAlgorithm;
                            merkleTree?: _636.GraphMerkleTree;
                        };
                    };
                }): _635.MsgAnchor;
            };
            MsgAnchorResponse: {
                encode(message: _635.MsgAnchorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _635.MsgAnchorResponse;
                fromJSON(object: any): _635.MsgAnchorResponse;
                toJSON(message: _635.MsgAnchorResponse): unknown;
                fromPartial(object: {
                    iri?: string;
                    timestamp?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _635.MsgAnchorResponse;
            };
            MsgAttest: {
                encode(message: _635.MsgAttest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _635.MsgAttest;
                fromJSON(object: any): _635.MsgAttest;
                toJSON(message: _635.MsgAttest): unknown;
                fromPartial(object: {
                    attestor?: string;
                    contentHashes?: {
                        hash?: Uint8Array;
                        digestAlgorithm?: _636.DigestAlgorithm;
                        canonicalizationAlgorithm?: _636.GraphCanonicalizationAlgorithm;
                        merkleTree?: _636.GraphMerkleTree;
                    }[];
                }): _635.MsgAttest;
            };
            MsgAttestResponse: {
                encode(message: _635.MsgAttestResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _635.MsgAttestResponse;
                fromJSON(object: any): _635.MsgAttestResponse;
                toJSON(message: _635.MsgAttestResponse): unknown;
                fromPartial(object: {
                    newEntries?: {
                        iri?: string;
                        attestor?: string;
                        timestamp?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                }): _635.MsgAttestResponse;
            };
            MsgDefineResolver: {
                encode(message: _635.MsgDefineResolver, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _635.MsgDefineResolver;
                fromJSON(object: any): _635.MsgDefineResolver;
                toJSON(message: _635.MsgDefineResolver): unknown;
                fromPartial(object: {
                    manager?: string;
                    resolverUrl?: string;
                }): _635.MsgDefineResolver;
            };
            MsgDefineResolverResponse: {
                encode(message: _635.MsgDefineResolverResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _635.MsgDefineResolverResponse;
                fromJSON(object: any): _635.MsgDefineResolverResponse;
                toJSON(message: _635.MsgDefineResolverResponse): unknown;
                fromPartial(object: {
                    resolverId?: any;
                }): _635.MsgDefineResolverResponse;
            };
            MsgRegisterResolver: {
                encode(message: _635.MsgRegisterResolver, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _635.MsgRegisterResolver;
                fromJSON(object: any): _635.MsgRegisterResolver;
                toJSON(message: _635.MsgRegisterResolver): unknown;
                fromPartial(object: {
                    manager?: string;
                    resolverId?: any;
                    contentHashes?: {
                        raw?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _636.DigestAlgorithm;
                            mediaType?: _636.RawMediaType;
                        };
                        graph?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _636.DigestAlgorithm;
                            canonicalizationAlgorithm?: _636.GraphCanonicalizationAlgorithm;
                            merkleTree?: _636.GraphMerkleTree;
                        };
                    }[];
                }): _635.MsgRegisterResolver;
            };
            MsgRegisterResolverResponse: {
                encode(_: _635.MsgRegisterResolverResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _635.MsgRegisterResolverResponse;
                fromJSON(_: any): _635.MsgRegisterResolverResponse;
                toJSON(_: _635.MsgRegisterResolverResponse): unknown;
                fromPartial(_: {}): _635.MsgRegisterResolverResponse;
            };
            DataID: {
                encode(message: _634.DataID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _634.DataID;
                fromJSON(object: any): _634.DataID;
                toJSON(message: _634.DataID): unknown;
                fromPartial(object: {
                    id?: Uint8Array;
                    iri?: string;
                }): _634.DataID;
            };
            DataAnchor: {
                encode(message: _634.DataAnchor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _634.DataAnchor;
                fromJSON(object: any): _634.DataAnchor;
                toJSON(message: _634.DataAnchor): unknown;
                fromPartial(object: {
                    id?: Uint8Array;
                    timestamp?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _634.DataAnchor;
            };
            DataAttestor: {
                encode(message: _634.DataAttestor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _634.DataAttestor;
                fromJSON(object: any): _634.DataAttestor;
                toJSON(message: _634.DataAttestor): unknown;
                fromPartial(object: {
                    id?: Uint8Array;
                    attestor?: Uint8Array;
                    timestamp?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _634.DataAttestor;
            };
            ResolverInfo: {
                encode(message: _634.ResolverInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _634.ResolverInfo;
                fromJSON(object: any): _634.ResolverInfo;
                toJSON(message: _634.ResolverInfo): unknown;
                fromPartial(object: {
                    id?: any;
                    url?: string;
                    manager?: Uint8Array;
                }): _634.ResolverInfo;
            };
            DataResolver: {
                encode(message: _634.DataResolver, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _634.DataResolver;
                fromJSON(object: any): _634.DataResolver;
                toJSON(message: _634.DataResolver): unknown;
                fromPartial(object: {
                    id?: Uint8Array;
                    resolverId?: any;
                }): _634.DataResolver;
            };
            QueryByIRIRequest: {
                encode(message: _633.QueryByIRIRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _633.QueryByIRIRequest;
                fromJSON(object: any): _633.QueryByIRIRequest;
                toJSON(message: _633.QueryByIRIRequest): unknown;
                fromPartial(object: {
                    iri?: string;
                }): _633.QueryByIRIRequest;
            };
            QueryByIRIResponse: {
                encode(message: _633.QueryByIRIResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _633.QueryByIRIResponse;
                fromJSON(object: any): _633.QueryByIRIResponse;
                toJSON(message: _633.QueryByIRIResponse): unknown;
                fromPartial(object: {
                    entry?: {
                        contentHash?: {
                            raw?: {
                                hash?: Uint8Array;
                                digestAlgorithm?: _636.DigestAlgorithm;
                                mediaType?: _636.RawMediaType;
                            };
                            graph?: {
                                hash?: Uint8Array;
                                digestAlgorithm?: _636.DigestAlgorithm;
                                canonicalizationAlgorithm?: _636.GraphCanonicalizationAlgorithm;
                                merkleTree?: _636.GraphMerkleTree;
                            };
                        };
                        iri?: string;
                        timestamp?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                }): _633.QueryByIRIResponse;
            };
            QueryByHashRequest: {
                encode(message: _633.QueryByHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _633.QueryByHashRequest;
                fromJSON(object: any): _633.QueryByHashRequest;
                toJSON(message: _633.QueryByHashRequest): unknown;
                fromPartial(object: {
                    contentHash?: {
                        raw?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _636.DigestAlgorithm;
                            mediaType?: _636.RawMediaType;
                        };
                        graph?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _636.DigestAlgorithm;
                            canonicalizationAlgorithm?: _636.GraphCanonicalizationAlgorithm;
                            merkleTree?: _636.GraphMerkleTree;
                        };
                    };
                }): _633.QueryByHashRequest;
            };
            QueryByHashResponse: {
                encode(message: _633.QueryByHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _633.QueryByHashResponse;
                fromJSON(object: any): _633.QueryByHashResponse;
                toJSON(message: _633.QueryByHashResponse): unknown;
                fromPartial(object: {
                    entry?: {
                        contentHash?: {
                            raw?: {
                                hash?: Uint8Array;
                                digestAlgorithm?: _636.DigestAlgorithm;
                                mediaType?: _636.RawMediaType;
                            };
                            graph?: {
                                hash?: Uint8Array;
                                digestAlgorithm?: _636.DigestAlgorithm;
                                canonicalizationAlgorithm?: _636.GraphCanonicalizationAlgorithm;
                                merkleTree?: _636.GraphMerkleTree;
                            };
                        };
                        iri?: string;
                        timestamp?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                }): _633.QueryByHashResponse;
            };
            QueryByAttestorRequest: {
                encode(message: _633.QueryByAttestorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _633.QueryByAttestorRequest;
                fromJSON(object: any): _633.QueryByAttestorRequest;
                toJSON(message: _633.QueryByAttestorRequest): unknown;
                fromPartial(object: {
                    attestor?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _633.QueryByAttestorRequest;
            };
            QueryByAttestorResponse: {
                encode(message: _633.QueryByAttestorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _633.QueryByAttestorResponse;
                fromJSON(object: any): _633.QueryByAttestorResponse;
                toJSON(message: _633.QueryByAttestorResponse): unknown;
                fromPartial(object: {
                    entries?: {
                        contentHash?: {
                            raw?: {
                                hash?: Uint8Array;
                                digestAlgorithm?: _636.DigestAlgorithm;
                                mediaType?: _636.RawMediaType;
                            };
                            graph?: {
                                hash?: Uint8Array;
                                digestAlgorithm?: _636.DigestAlgorithm;
                                canonicalizationAlgorithm?: _636.GraphCanonicalizationAlgorithm;
                                merkleTree?: _636.GraphMerkleTree;
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
                }): _633.QueryByAttestorResponse;
            };
            QueryIRIByHashRequest: {
                encode(message: _633.QueryIRIByHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _633.QueryIRIByHashRequest;
                fromJSON(object: any): _633.QueryIRIByHashRequest;
                toJSON(message: _633.QueryIRIByHashRequest): unknown;
                fromPartial(object: {
                    contentHash?: {
                        raw?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _636.DigestAlgorithm;
                            mediaType?: _636.RawMediaType;
                        };
                        graph?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _636.DigestAlgorithm;
                            canonicalizationAlgorithm?: _636.GraphCanonicalizationAlgorithm;
                            merkleTree?: _636.GraphMerkleTree;
                        };
                    };
                }): _633.QueryIRIByHashRequest;
            };
            QueryIRIByHashResponse: {
                encode(message: _633.QueryIRIByHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _633.QueryIRIByHashResponse;
                fromJSON(object: any): _633.QueryIRIByHashResponse;
                toJSON(message: _633.QueryIRIByHashResponse): unknown;
                fromPartial(object: {
                    iri?: string;
                }): _633.QueryIRIByHashResponse;
            };
            QueryIRIByRawHashRequest: {
                encode(message: _633.QueryIRIByRawHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _633.QueryIRIByRawHashRequest;
                fromJSON(object: any): _633.QueryIRIByRawHashRequest;
                toJSON(message: _633.QueryIRIByRawHashRequest): unknown;
                fromPartial(object: {
                    hash?: string;
                    digestAlgorithm?: _636.DigestAlgorithm;
                    mediaType?: _636.RawMediaType;
                }): _633.QueryIRIByRawHashRequest;
            };
            QueryIRIByRawHashResponse: {
                encode(message: _633.QueryIRIByRawHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _633.QueryIRIByRawHashResponse;
                fromJSON(object: any): _633.QueryIRIByRawHashResponse;
                toJSON(message: _633.QueryIRIByRawHashResponse): unknown;
                fromPartial(object: {
                    iri?: string;
                }): _633.QueryIRIByRawHashResponse;
            };
            QueryIRIByGraphHashRequest: {
                encode(message: _633.QueryIRIByGraphHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _633.QueryIRIByGraphHashRequest;
                fromJSON(object: any): _633.QueryIRIByGraphHashRequest;
                toJSON(message: _633.QueryIRIByGraphHashRequest): unknown;
                fromPartial(object: {
                    hash?: string;
                    digestAlgorithm?: _636.DigestAlgorithm;
                    canonicalizationAlgorithm?: _636.GraphCanonicalizationAlgorithm;
                    merkleTree?: _636.GraphMerkleTree;
                }): _633.QueryIRIByGraphHashRequest;
            };
            QueryIRIByGraphHashResponse: {
                encode(message: _633.QueryIRIByGraphHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _633.QueryIRIByGraphHashResponse;
                fromJSON(object: any): _633.QueryIRIByGraphHashResponse;
                toJSON(message: _633.QueryIRIByGraphHashResponse): unknown;
                fromPartial(object: {
                    iri?: string;
                }): _633.QueryIRIByGraphHashResponse;
            };
            QueryHashByIRIRequest: {
                encode(message: _633.QueryHashByIRIRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _633.QueryHashByIRIRequest;
                fromJSON(object: any): _633.QueryHashByIRIRequest;
                toJSON(message: _633.QueryHashByIRIRequest): unknown;
                fromPartial(object: {
                    iri?: string;
                }): _633.QueryHashByIRIRequest;
            };
            QueryHashByIRIResponse: {
                encode(message: _633.QueryHashByIRIResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _633.QueryHashByIRIResponse;
                fromJSON(object: any): _633.QueryHashByIRIResponse;
                toJSON(message: _633.QueryHashByIRIResponse): unknown;
                fromPartial(object: {
                    contentHash?: {
                        raw?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _636.DigestAlgorithm;
                            mediaType?: _636.RawMediaType;
                        };
                        graph?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _636.DigestAlgorithm;
                            canonicalizationAlgorithm?: _636.GraphCanonicalizationAlgorithm;
                            merkleTree?: _636.GraphMerkleTree;
                        };
                    };
                }): _633.QueryHashByIRIResponse;
            };
            QueryAttestorsByIRIRequest: {
                encode(message: _633.QueryAttestorsByIRIRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _633.QueryAttestorsByIRIRequest;
                fromJSON(object: any): _633.QueryAttestorsByIRIRequest;
                toJSON(message: _633.QueryAttestorsByIRIRequest): unknown;
                fromPartial(object: {
                    iri?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _633.QueryAttestorsByIRIRequest;
            };
            QueryAttestorsByIRIResponse: {
                encode(message: _633.QueryAttestorsByIRIResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _633.QueryAttestorsByIRIResponse;
                fromJSON(object: any): _633.QueryAttestorsByIRIResponse;
                toJSON(message: _633.QueryAttestorsByIRIResponse): unknown;
                fromPartial(object: {
                    attestors?: string[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _633.QueryAttestorsByIRIResponse;
            };
            QueryAttestorsByHashRequest: {
                encode(message: _633.QueryAttestorsByHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _633.QueryAttestorsByHashRequest;
                fromJSON(object: any): _633.QueryAttestorsByHashRequest;
                toJSON(message: _633.QueryAttestorsByHashRequest): unknown;
                fromPartial(object: {
                    contentHash?: {
                        raw?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _636.DigestAlgorithm;
                            mediaType?: _636.RawMediaType;
                        };
                        graph?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _636.DigestAlgorithm;
                            canonicalizationAlgorithm?: _636.GraphCanonicalizationAlgorithm;
                            merkleTree?: _636.GraphMerkleTree;
                        };
                    };
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _633.QueryAttestorsByHashRequest;
            };
            QueryAttestorsByHashResponse: {
                encode(message: _633.QueryAttestorsByHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _633.QueryAttestorsByHashResponse;
                fromJSON(object: any): _633.QueryAttestorsByHashResponse;
                toJSON(message: _633.QueryAttestorsByHashResponse): unknown;
                fromPartial(object: {
                    attestors?: string[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _633.QueryAttestorsByHashResponse;
            };
            QueryResolversByIRIRequest: {
                encode(message: _633.QueryResolversByIRIRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _633.QueryResolversByIRIRequest;
                fromJSON(object: any): _633.QueryResolversByIRIRequest;
                toJSON(message: _633.QueryResolversByIRIRequest): unknown;
                fromPartial(object: {
                    iri?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _633.QueryResolversByIRIRequest;
            };
            QueryResolversByIRIResponse: {
                encode(message: _633.QueryResolversByIRIResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _633.QueryResolversByIRIResponse;
                fromJSON(object: any): _633.QueryResolversByIRIResponse;
                toJSON(message: _633.QueryResolversByIRIResponse): unknown;
                fromPartial(object: {
                    resolverUrls?: string[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _633.QueryResolversByIRIResponse;
            };
            QueryResolversByHashRequest: {
                encode(message: _633.QueryResolversByHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _633.QueryResolversByHashRequest;
                fromJSON(object: any): _633.QueryResolversByHashRequest;
                toJSON(message: _633.QueryResolversByHashRequest): unknown;
                fromPartial(object: {
                    contentHash?: {
                        raw?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _636.DigestAlgorithm;
                            mediaType?: _636.RawMediaType;
                        };
                        graph?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _636.DigestAlgorithm;
                            canonicalizationAlgorithm?: _636.GraphCanonicalizationAlgorithm;
                            merkleTree?: _636.GraphMerkleTree;
                        };
                    };
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _633.QueryResolversByHashRequest;
            };
            QueryResolversByHashResponse: {
                encode(message: _633.QueryResolversByHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _633.QueryResolversByHashResponse;
                fromJSON(object: any): _633.QueryResolversByHashResponse;
                toJSON(message: _633.QueryResolversByHashResponse): unknown;
                fromPartial(object: {
                    resolverUrls?: string[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _633.QueryResolversByHashResponse;
            };
            QueryResolverInfoRequest: {
                encode(message: _633.QueryResolverInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _633.QueryResolverInfoRequest;
                fromJSON(object: any): _633.QueryResolverInfoRequest;
                toJSON(message: _633.QueryResolverInfoRequest): unknown;
                fromPartial(object: {
                    url?: string;
                }): _633.QueryResolverInfoRequest;
            };
            QueryResolverInfoResponse: {
                encode(message: _633.QueryResolverInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _633.QueryResolverInfoResponse;
                fromJSON(object: any): _633.QueryResolverInfoResponse;
                toJSON(message: _633.QueryResolverInfoResponse): unknown;
                fromPartial(object: {
                    id?: any;
                    manager?: string;
                }): _633.QueryResolverInfoResponse;
            };
            EventAnchor: {
                encode(message: _632.EventAnchor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _632.EventAnchor;
                fromJSON(object: any): _632.EventAnchor;
                toJSON(message: _632.EventAnchor): unknown;
                fromPartial(object: {
                    iri?: string;
                }): _632.EventAnchor;
            };
            EventAttest: {
                encode(message: _632.EventAttest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _632.EventAttest;
                fromJSON(object: any): _632.EventAttest;
                toJSON(message: _632.EventAttest): unknown;
                fromPartial(object: {
                    iri?: string;
                    attestor?: string;
                }): _632.EventAttest;
            };
            EventDefineResolver: {
                encode(message: _632.EventDefineResolver, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _632.EventDefineResolver;
                fromJSON(object: any): _632.EventDefineResolver;
                toJSON(message: _632.EventDefineResolver): unknown;
                fromPartial(object: {
                    id?: any;
                }): _632.EventDefineResolver;
            };
            EventRegisterResolver: {
                encode(message: _632.EventRegisterResolver, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _632.EventRegisterResolver;
                fromJSON(object: any): _632.EventRegisterResolver;
                toJSON(message: _632.EventRegisterResolver): unknown;
                fromPartial(object: {
                    id?: any;
                    iri?: string;
                }): _632.EventRegisterResolver;
            };
        };
        const v1alpha2: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    anchorData(value: _640.MsgAnchorData): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    signData(value: _640.MsgSignData): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    storeRawData(value: _640.MsgStoreRawData): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    anchorData(value: _640.MsgAnchorData): {
                        typeUrl: string;
                        value: _640.MsgAnchorData;
                    };
                    signData(value: _640.MsgSignData): {
                        typeUrl: string;
                        value: _640.MsgSignData;
                    };
                    storeRawData(value: _640.MsgStoreRawData): {
                        typeUrl: string;
                        value: _640.MsgStoreRawData;
                    };
                };
                toJSON: {
                    anchorData(value: _640.MsgAnchorData): {
                        typeUrl: string;
                        value: unknown;
                    };
                    signData(value: _640.MsgSignData): {
                        typeUrl: string;
                        value: unknown;
                    };
                    storeRawData(value: _640.MsgStoreRawData): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    anchorData(value: any): {
                        typeUrl: string;
                        value: _640.MsgAnchorData;
                    };
                    signData(value: any): {
                        typeUrl: string;
                        value: _640.MsgSignData;
                    };
                    storeRawData(value: any): {
                        typeUrl: string;
                        value: _640.MsgStoreRawData;
                    };
                };
                fromPartial: {
                    anchorData(value: _640.MsgAnchorData): {
                        typeUrl: string;
                        value: _640.MsgAnchorData;
                    };
                    signData(value: _640.MsgSignData): {
                        typeUrl: string;
                        value: _640.MsgSignData;
                    };
                    storeRawData(value: _640.MsgStoreRawData): {
                        typeUrl: string;
                        value: _640.MsgStoreRawData;
                    };
                };
            };
            AminoConverter: {
                "/regen.data.v1alpha2.MsgAnchorData": {
                    aminoType: string;
                    toAmino: ({ sender, hash }: _640.MsgAnchorData) => {
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
                    }) => _640.MsgAnchorData;
                };
                "/regen.data.v1alpha2.MsgSignData": {
                    aminoType: string;
                    toAmino: ({ signers, hash }: _640.MsgSignData) => {
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
                    }) => _640.MsgSignData;
                };
                "/regen.data.v1alpha2.MsgStoreRawData": {
                    aminoType: string;
                    toAmino: ({ sender, contentHash, content }: _640.MsgStoreRawData) => {
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
                    }) => _640.MsgStoreRawData;
                };
            };
            mediaTypeFromJSON(object: any): _641.MediaType;
            mediaTypeToJSON(object: _641.MediaType): string;
            graphCanonicalizationAlgorithmFromJSON(object: any): _641.GraphCanonicalizationAlgorithm;
            graphCanonicalizationAlgorithmToJSON(object: _641.GraphCanonicalizationAlgorithm): string;
            graphMerkleTreeFromJSON(object: any): _641.GraphMerkleTree;
            graphMerkleTreeToJSON(object: _641.GraphMerkleTree): string;
            digestAlgorithmFromJSON(object: any): _641.DigestAlgorithm;
            digestAlgorithmToJSON(object: _641.DigestAlgorithm): string;
            MediaType: typeof _641.MediaType;
            GraphCanonicalizationAlgorithm: typeof _641.GraphCanonicalizationAlgorithm;
            GraphMerkleTree: typeof _641.GraphMerkleTree;
            DigestAlgorithm: typeof _641.DigestAlgorithm;
            ContentHash: {
                encode(message: _641.ContentHash, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _641.ContentHash;
                fromJSON(object: any): _641.ContentHash;
                toJSON(message: _641.ContentHash): unknown;
                fromPartial(object: {
                    raw?: {
                        hash?: Uint8Array;
                        digestAlgorithm?: _641.DigestAlgorithm;
                        mediaType?: _641.MediaType;
                    };
                    graph?: {
                        hash?: Uint8Array;
                        digestAlgorithm?: _641.DigestAlgorithm;
                        canonicalizationAlgorithm?: _641.GraphCanonicalizationAlgorithm;
                        merkleTree?: _641.GraphMerkleTree;
                    };
                }): _641.ContentHash;
            };
            ContentHash_Raw: {
                encode(message: _641.ContentHash_Raw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _641.ContentHash_Raw;
                fromJSON(object: any): _641.ContentHash_Raw;
                toJSON(message: _641.ContentHash_Raw): unknown;
                fromPartial(object: {
                    hash?: Uint8Array;
                    digestAlgorithm?: _641.DigestAlgorithm;
                    mediaType?: _641.MediaType;
                }): _641.ContentHash_Raw;
            };
            ContentHash_Graph: {
                encode(message: _641.ContentHash_Graph, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _641.ContentHash_Graph;
                fromJSON(object: any): _641.ContentHash_Graph;
                toJSON(message: _641.ContentHash_Graph): unknown;
                fromPartial(object: {
                    hash?: Uint8Array;
                    digestAlgorithm?: _641.DigestAlgorithm;
                    canonicalizationAlgorithm?: _641.GraphCanonicalizationAlgorithm;
                    merkleTree?: _641.GraphMerkleTree;
                }): _641.ContentHash_Graph;
            };
            Content: {
                encode(message: _641.Content, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _641.Content;
                fromJSON(object: any): _641.Content;
                toJSON(message: _641.Content): unknown;
                fromPartial(object: {
                    rawData?: Uint8Array;
                }): _641.Content;
            };
            SignerEntry: {
                encode(message: _641.SignerEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _641.SignerEntry;
                fromJSON(object: any): _641.SignerEntry;
                toJSON(message: _641.SignerEntry): unknown;
                fromPartial(object: {
                    signer?: string;
                    timestamp?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _641.SignerEntry;
            };
            MsgAnchorData: {
                encode(message: _640.MsgAnchorData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _640.MsgAnchorData;
                fromJSON(object: any): _640.MsgAnchorData;
                toJSON(message: _640.MsgAnchorData): unknown;
                fromPartial(object: {
                    sender?: string;
                    hash?: {
                        raw?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _641.DigestAlgorithm;
                            mediaType?: _641.MediaType;
                        };
                        graph?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _641.DigestAlgorithm;
                            canonicalizationAlgorithm?: _641.GraphCanonicalizationAlgorithm;
                            merkleTree?: _641.GraphMerkleTree;
                        };
                    };
                }): _640.MsgAnchorData;
            };
            MsgAnchorDataResponse: {
                encode(message: _640.MsgAnchorDataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _640.MsgAnchorDataResponse;
                fromJSON(object: any): _640.MsgAnchorDataResponse;
                toJSON(message: _640.MsgAnchorDataResponse): unknown;
                fromPartial(object: {
                    timestamp?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _640.MsgAnchorDataResponse;
            };
            MsgSignData: {
                encode(message: _640.MsgSignData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _640.MsgSignData;
                fromJSON(object: any): _640.MsgSignData;
                toJSON(message: _640.MsgSignData): unknown;
                fromPartial(object: {
                    signers?: string[];
                    hash?: {
                        hash?: Uint8Array;
                        digestAlgorithm?: _641.DigestAlgorithm;
                        canonicalizationAlgorithm?: _641.GraphCanonicalizationAlgorithm;
                        merkleTree?: _641.GraphMerkleTree;
                    };
                }): _640.MsgSignData;
            };
            MsgSignDataResponse: {
                encode(_: _640.MsgSignDataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _640.MsgSignDataResponse;
                fromJSON(_: any): _640.MsgSignDataResponse;
                toJSON(_: _640.MsgSignDataResponse): unknown;
                fromPartial(_: {}): _640.MsgSignDataResponse;
            };
            MsgStoreRawData: {
                encode(message: _640.MsgStoreRawData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _640.MsgStoreRawData;
                fromJSON(object: any): _640.MsgStoreRawData;
                toJSON(message: _640.MsgStoreRawData): unknown;
                fromPartial(object: {
                    sender?: string;
                    contentHash?: {
                        hash?: Uint8Array;
                        digestAlgorithm?: _641.DigestAlgorithm;
                        mediaType?: _641.MediaType;
                    };
                    content?: Uint8Array;
                }): _640.MsgStoreRawData;
            };
            MsgStoreRawDataResponse: {
                encode(_: _640.MsgStoreRawDataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _640.MsgStoreRawDataResponse;
                fromJSON(_: any): _640.MsgStoreRawDataResponse;
                toJSON(_: _640.MsgStoreRawDataResponse): unknown;
                fromPartial(_: {}): _640.MsgStoreRawDataResponse;
            };
            QueryByHashRequest: {
                encode(message: _639.QueryByHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _639.QueryByHashRequest;
                fromJSON(object: any): _639.QueryByHashRequest;
                toJSON(message: _639.QueryByHashRequest): unknown;
                fromPartial(object: {
                    hash?: {
                        raw?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _641.DigestAlgorithm;
                            mediaType?: _641.MediaType;
                        };
                        graph?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _641.DigestAlgorithm;
                            canonicalizationAlgorithm?: _641.GraphCanonicalizationAlgorithm;
                            merkleTree?: _641.GraphMerkleTree;
                        };
                    };
                }): _639.QueryByHashRequest;
            };
            QueryByHashResponse: {
                encode(message: _639.QueryByHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _639.QueryByHashResponse;
                fromJSON(object: any): _639.QueryByHashResponse;
                toJSON(message: _639.QueryByHashResponse): unknown;
                fromPartial(object: {
                    entry?: {
                        hash?: {
                            raw?: {
                                hash?: Uint8Array;
                                digestAlgorithm?: _641.DigestAlgorithm;
                                mediaType?: _641.MediaType;
                            };
                            graph?: {
                                hash?: Uint8Array;
                                digestAlgorithm?: _641.DigestAlgorithm;
                                canonicalizationAlgorithm?: _641.GraphCanonicalizationAlgorithm;
                                merkleTree?: _641.GraphMerkleTree;
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
                }): _639.QueryByHashResponse;
            };
            QueryBySignerRequest: {
                encode(message: _639.QueryBySignerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _639.QueryBySignerRequest;
                fromJSON(object: any): _639.QueryBySignerRequest;
                toJSON(message: _639.QueryBySignerRequest): unknown;
                fromPartial(object: {
                    signer?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _639.QueryBySignerRequest;
            };
            QueryBySignerResponse: {
                encode(message: _639.QueryBySignerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _639.QueryBySignerResponse;
                fromJSON(object: any): _639.QueryBySignerResponse;
                toJSON(message: _639.QueryBySignerResponse): unknown;
                fromPartial(object: {
                    entries?: {
                        hash?: {
                            raw?: {
                                hash?: Uint8Array;
                                digestAlgorithm?: _641.DigestAlgorithm;
                                mediaType?: _641.MediaType;
                            };
                            graph?: {
                                hash?: Uint8Array;
                                digestAlgorithm?: _641.DigestAlgorithm;
                                canonicalizationAlgorithm?: _641.GraphCanonicalizationAlgorithm;
                                merkleTree?: _641.GraphMerkleTree;
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
                }): _639.QueryBySignerResponse;
            };
            ContentEntry: {
                encode(message: _639.ContentEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _639.ContentEntry;
                fromJSON(object: any): _639.ContentEntry;
                toJSON(message: _639.ContentEntry): unknown;
                fromPartial(object: {
                    hash?: {
                        raw?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _641.DigestAlgorithm;
                            mediaType?: _641.MediaType;
                        };
                        graph?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _641.DigestAlgorithm;
                            canonicalizationAlgorithm?: _641.GraphCanonicalizationAlgorithm;
                            merkleTree?: _641.GraphMerkleTree;
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
                }): _639.ContentEntry;
            };
            GenesisState: {
                encode(message: _638.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _638.GenesisState;
                fromJSON(object: any): _638.GenesisState;
                toJSON(message: _638.GenesisState): unknown;
                fromPartial(object: {
                    entries?: {
                        hash?: {
                            raw?: {
                                hash?: Uint8Array;
                                digestAlgorithm?: _641.DigestAlgorithm;
                                mediaType?: _641.MediaType;
                            };
                            graph?: {
                                hash?: Uint8Array;
                                digestAlgorithm?: _641.DigestAlgorithm;
                                canonicalizationAlgorithm?: _641.GraphCanonicalizationAlgorithm;
                                merkleTree?: _641.GraphMerkleTree;
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
                }): _638.GenesisState;
            };
            GenesisContentEntry: {
                encode(message: _638.GenesisContentEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _638.GenesisContentEntry;
                fromJSON(object: any): _638.GenesisContentEntry;
                toJSON(message: _638.GenesisContentEntry): unknown;
                fromPartial(object: {
                    hash?: {
                        raw?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _641.DigestAlgorithm;
                            mediaType?: _641.MediaType;
                        };
                        graph?: {
                            hash?: Uint8Array;
                            digestAlgorithm?: _641.DigestAlgorithm;
                            canonicalizationAlgorithm?: _641.GraphCanonicalizationAlgorithm;
                            merkleTree?: _641.GraphMerkleTree;
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
                }): _638.GenesisContentEntry;
            };
            EventAnchorData: {
                encode(message: _637.EventAnchorData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _637.EventAnchorData;
                fromJSON(object: any): _637.EventAnchorData;
                toJSON(message: _637.EventAnchorData): unknown;
                fromPartial(object: {
                    iri?: string;
                }): _637.EventAnchorData;
            };
            EventSignData: {
                encode(message: _637.EventSignData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _637.EventSignData;
                fromJSON(object: any): _637.EventSignData;
                toJSON(message: _637.EventSignData): unknown;
                fromPartial(object: {
                    iri?: string;
                    signers?: string[];
                }): _637.EventSignData;
            };
            EventStoreRawData: {
                encode(message: _637.EventStoreRawData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _637.EventStoreRawData;
                fromJSON(object: any): _637.EventStoreRawData;
                toJSON(message: _637.EventStoreRawData): unknown;
                fromPartial(object: {
                    iri?: string;
                }): _637.EventStoreRawData;
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
                        create(value: _645.MsgCreate): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        put(value: _645.MsgPut): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        take(value: _645.MsgTake): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        create(value: _645.MsgCreate): {
                            typeUrl: string;
                            value: _645.MsgCreate;
                        };
                        put(value: _645.MsgPut): {
                            typeUrl: string;
                            value: _645.MsgPut;
                        };
                        take(value: _645.MsgTake): {
                            typeUrl: string;
                            value: _645.MsgTake;
                        };
                    };
                    toJSON: {
                        create(value: _645.MsgCreate): {
                            typeUrl: string;
                            value: unknown;
                        };
                        put(value: _645.MsgPut): {
                            typeUrl: string;
                            value: unknown;
                        };
                        take(value: _645.MsgTake): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        create(value: any): {
                            typeUrl: string;
                            value: _645.MsgCreate;
                        };
                        put(value: any): {
                            typeUrl: string;
                            value: _645.MsgPut;
                        };
                        take(value: any): {
                            typeUrl: string;
                            value: _645.MsgTake;
                        };
                    };
                    fromPartial: {
                        create(value: _645.MsgCreate): {
                            typeUrl: string;
                            value: _645.MsgCreate;
                        };
                        put(value: _645.MsgPut): {
                            typeUrl: string;
                            value: _645.MsgPut;
                        };
                        take(value: _645.MsgTake): {
                            typeUrl: string;
                            value: _645.MsgTake;
                        };
                    };
                };
                AminoConverter: {
                    "/regen.ecocredit.basket.v1.MsgCreate": {
                        aminoType: string;
                        toAmino: ({ curator, name, description, exponent, disableAutoRetire, creditTypeAbbrev, allowedClasses, dateCriteria, fee }: _645.MsgCreate) => {
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
                        }) => _645.MsgCreate;
                    };
                    "/regen.ecocredit.basket.v1.MsgPut": {
                        aminoType: string;
                        toAmino: ({ owner, basketDenom, credits }: _645.MsgPut) => {
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
                        }) => _645.MsgPut;
                    };
                    "/regen.ecocredit.basket.v1.MsgTake": {
                        aminoType: string;
                        toAmino: ({ owner, basketDenom, amount, retirementJurisdiction, retireOnTake }: _645.MsgTake) => {
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
                        }) => _645.MsgTake;
                    };
                };
                BasketCredit: {
                    encode(message: _646.BasketCredit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _646.BasketCredit;
                    fromJSON(object: any): _646.BasketCredit;
                    toJSON(message: _646.BasketCredit): unknown;
                    fromPartial(object: {
                        batchDenom?: string;
                        amount?: string;
                    }): _646.BasketCredit;
                };
                DateCriteria: {
                    encode(message: _646.DateCriteria, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _646.DateCriteria;
                    fromJSON(object: any): _646.DateCriteria;
                    toJSON(message: _646.DateCriteria): unknown;
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
                    }): _646.DateCriteria;
                };
                MsgCreate: {
                    encode(message: _645.MsgCreate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _645.MsgCreate;
                    fromJSON(object: any): _645.MsgCreate;
                    toJSON(message: _645.MsgCreate): unknown;
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
                    }): _645.MsgCreate;
                };
                MsgCreateResponse: {
                    encode(message: _645.MsgCreateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _645.MsgCreateResponse;
                    fromJSON(object: any): _645.MsgCreateResponse;
                    toJSON(message: _645.MsgCreateResponse): unknown;
                    fromPartial(object: {
                        basketDenom?: string;
                    }): _645.MsgCreateResponse;
                };
                MsgPut: {
                    encode(message: _645.MsgPut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _645.MsgPut;
                    fromJSON(object: any): _645.MsgPut;
                    toJSON(message: _645.MsgPut): unknown;
                    fromPartial(object: {
                        owner?: string;
                        basketDenom?: string;
                        credits?: {
                            batchDenom?: string;
                            amount?: string;
                        }[];
                    }): _645.MsgPut;
                };
                MsgPutResponse: {
                    encode(message: _645.MsgPutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _645.MsgPutResponse;
                    fromJSON(object: any): _645.MsgPutResponse;
                    toJSON(message: _645.MsgPutResponse): unknown;
                    fromPartial(object: {
                        amountReceived?: string;
                    }): _645.MsgPutResponse;
                };
                MsgTake: {
                    encode(message: _645.MsgTake, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _645.MsgTake;
                    fromJSON(object: any): _645.MsgTake;
                    toJSON(message: _645.MsgTake): unknown;
                    fromPartial(object: {
                        owner?: string;
                        basketDenom?: string;
                        amount?: string;
                        retirementJurisdiction?: string;
                        retireOnTake?: boolean;
                    }): _645.MsgTake;
                };
                MsgTakeResponse: {
                    encode(message: _645.MsgTakeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _645.MsgTakeResponse;
                    fromJSON(object: any): _645.MsgTakeResponse;
                    toJSON(message: _645.MsgTakeResponse): unknown;
                    fromPartial(object: {
                        credits?: {
                            batchDenom?: string;
                            amount?: string;
                        }[];
                    }): _645.MsgTakeResponse;
                };
                Basket: {
                    encode(message: _644.Basket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.Basket;
                    fromJSON(object: any): _644.Basket;
                    toJSON(message: _644.Basket): unknown;
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
                    }): _644.Basket;
                };
                BasketClass: {
                    encode(message: _644.BasketClass, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.BasketClass;
                    fromJSON(object: any): _644.BasketClass;
                    toJSON(message: _644.BasketClass): unknown;
                    fromPartial(object: {
                        basketId?: any;
                        classId?: string;
                    }): _644.BasketClass;
                };
                BasketBalance: {
                    encode(message: _644.BasketBalance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.BasketBalance;
                    fromJSON(object: any): _644.BasketBalance;
                    toJSON(message: _644.BasketBalance): unknown;
                    fromPartial(object: {
                        basketId?: any;
                        batchDenom?: string;
                        balance?: string;
                        batchStartDate?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }): _644.BasketBalance;
                };
                QueryBasketRequest: {
                    encode(message: _643.QueryBasketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _643.QueryBasketRequest;
                    fromJSON(object: any): _643.QueryBasketRequest;
                    toJSON(message: _643.QueryBasketRequest): unknown;
                    fromPartial(object: {
                        basketDenom?: string;
                    }): _643.QueryBasketRequest;
                };
                QueryBasketResponse: {
                    encode(message: _643.QueryBasketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _643.QueryBasketResponse;
                    fromJSON(object: any): _643.QueryBasketResponse;
                    toJSON(message: _643.QueryBasketResponse): unknown;
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
                    }): _643.QueryBasketResponse;
                };
                QueryBasketsRequest: {
                    encode(message: _643.QueryBasketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _643.QueryBasketsRequest;
                    fromJSON(object: any): _643.QueryBasketsRequest;
                    toJSON(message: _643.QueryBasketsRequest): unknown;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _643.QueryBasketsRequest;
                };
                QueryBasketsResponse: {
                    encode(message: _643.QueryBasketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _643.QueryBasketsResponse;
                    fromJSON(object: any): _643.QueryBasketsResponse;
                    toJSON(message: _643.QueryBasketsResponse): unknown;
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
                    }): _643.QueryBasketsResponse;
                };
                QueryBasketBalancesRequest: {
                    encode(message: _643.QueryBasketBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _643.QueryBasketBalancesRequest;
                    fromJSON(object: any): _643.QueryBasketBalancesRequest;
                    toJSON(message: _643.QueryBasketBalancesRequest): unknown;
                    fromPartial(object: {
                        basketDenom?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _643.QueryBasketBalancesRequest;
                };
                QueryBasketBalancesResponse: {
                    encode(message: _643.QueryBasketBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _643.QueryBasketBalancesResponse;
                    fromJSON(object: any): _643.QueryBasketBalancesResponse;
                    toJSON(message: _643.QueryBasketBalancesResponse): unknown;
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
                    }): _643.QueryBasketBalancesResponse;
                };
                QueryBasketBalanceRequest: {
                    encode(message: _643.QueryBasketBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _643.QueryBasketBalanceRequest;
                    fromJSON(object: any): _643.QueryBasketBalanceRequest;
                    toJSON(message: _643.QueryBasketBalanceRequest): unknown;
                    fromPartial(object: {
                        basketDenom?: string;
                        batchDenom?: string;
                    }): _643.QueryBasketBalanceRequest;
                };
                QueryBasketBalanceResponse: {
                    encode(message: _643.QueryBasketBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _643.QueryBasketBalanceResponse;
                    fromJSON(object: any): _643.QueryBasketBalanceResponse;
                    toJSON(message: _643.QueryBasketBalanceResponse): unknown;
                    fromPartial(object: {
                        balance?: string;
                    }): _643.QueryBasketBalanceResponse;
                };
                BasketInfo: {
                    encode(message: _643.BasketInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _643.BasketInfo;
                    fromJSON(object: any): _643.BasketInfo;
                    toJSON(message: _643.BasketInfo): unknown;
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
                    }): _643.BasketInfo;
                };
                BasketBalanceInfo: {
                    encode(message: _643.BasketBalanceInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _643.BasketBalanceInfo;
                    fromJSON(object: any): _643.BasketBalanceInfo;
                    toJSON(message: _643.BasketBalanceInfo): unknown;
                    fromPartial(object: {
                        batchDenom?: string;
                        balance?: string;
                    }): _643.BasketBalanceInfo;
                };
                EventCreate: {
                    encode(message: _642.EventCreate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _642.EventCreate;
                    fromJSON(object: any): _642.EventCreate;
                    toJSON(message: _642.EventCreate): unknown;
                    fromPartial(object: {
                        basketDenom?: string;
                        curator?: string;
                    }): _642.EventCreate;
                };
                EventPut: {
                    encode(message: _642.EventPut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _642.EventPut;
                    fromJSON(object: any): _642.EventPut;
                    toJSON(message: _642.EventPut): unknown;
                    fromPartial(object: {
                        owner?: string;
                        basketDenom?: string;
                        credits?: {
                            batchDenom?: string;
                            amount?: string;
                        }[];
                        amount?: string;
                    }): _642.EventPut;
                };
                EventTake: {
                    encode(message: _642.EventTake, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _642.EventTake;
                    fromJSON(object: any): _642.EventTake;
                    toJSON(message: _642.EventTake): unknown;
                    fromPartial(object: {
                        owner?: string;
                        basketDenom?: string;
                        credits?: {
                            batchDenom?: string;
                            amount?: string;
                        }[];
                        amount?: string;
                    }): _642.EventTake;
                };
            };
        }
        namespace marketplace {
            const v1: {
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        sell(value: _650.MsgSell): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateSellOrders(value: _650.MsgUpdateSellOrders): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        cancelSellOrder(value: _650.MsgCancelSellOrder): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        buyDirect(value: _650.MsgBuyDirect): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        sell(value: _650.MsgSell): {
                            typeUrl: string;
                            value: _650.MsgSell;
                        };
                        updateSellOrders(value: _650.MsgUpdateSellOrders): {
                            typeUrl: string;
                            value: _650.MsgUpdateSellOrders;
                        };
                        cancelSellOrder(value: _650.MsgCancelSellOrder): {
                            typeUrl: string;
                            value: _650.MsgCancelSellOrder;
                        };
                        buyDirect(value: _650.MsgBuyDirect): {
                            typeUrl: string;
                            value: _650.MsgBuyDirect;
                        };
                    };
                    toJSON: {
                        sell(value: _650.MsgSell): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateSellOrders(value: _650.MsgUpdateSellOrders): {
                            typeUrl: string;
                            value: unknown;
                        };
                        cancelSellOrder(value: _650.MsgCancelSellOrder): {
                            typeUrl: string;
                            value: unknown;
                        };
                        buyDirect(value: _650.MsgBuyDirect): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        sell(value: any): {
                            typeUrl: string;
                            value: _650.MsgSell;
                        };
                        updateSellOrders(value: any): {
                            typeUrl: string;
                            value: _650.MsgUpdateSellOrders;
                        };
                        cancelSellOrder(value: any): {
                            typeUrl: string;
                            value: _650.MsgCancelSellOrder;
                        };
                        buyDirect(value: any): {
                            typeUrl: string;
                            value: _650.MsgBuyDirect;
                        };
                    };
                    fromPartial: {
                        sell(value: _650.MsgSell): {
                            typeUrl: string;
                            value: _650.MsgSell;
                        };
                        updateSellOrders(value: _650.MsgUpdateSellOrders): {
                            typeUrl: string;
                            value: _650.MsgUpdateSellOrders;
                        };
                        cancelSellOrder(value: _650.MsgCancelSellOrder): {
                            typeUrl: string;
                            value: _650.MsgCancelSellOrder;
                        };
                        buyDirect(value: _650.MsgBuyDirect): {
                            typeUrl: string;
                            value: _650.MsgBuyDirect;
                        };
                    };
                };
                AminoConverter: {
                    "/regen.ecocredit.marketplace.v1.MsgSell": {
                        aminoType: string;
                        toAmino: ({ owner, orders }: _650.MsgSell) => {
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
                        }) => _650.MsgSell;
                    };
                    "/regen.ecocredit.marketplace.v1.MsgUpdateSellOrders": {
                        aminoType: string;
                        toAmino: ({ owner, updates }: _650.MsgUpdateSellOrders) => {
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
                        }) => _650.MsgUpdateSellOrders;
                    };
                    "/regen.ecocredit.marketplace.v1.MsgCancelSellOrder": {
                        aminoType: string;
                        toAmino: ({ seller, sellOrderId }: _650.MsgCancelSellOrder) => {
                            seller: string;
                            sell_order_id: string;
                        };
                        fromAmino: ({ seller, sell_order_id }: {
                            seller: string;
                            sell_order_id: string;
                        }) => _650.MsgCancelSellOrder;
                    };
                    "/regen.ecocredit.marketplace.v1.MsgBuyDirect": {
                        aminoType: string;
                        toAmino: ({ buyer, orders }: _650.MsgBuyDirect) => {
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
                        }) => _650.MsgBuyDirect;
                    };
                };
                AllowDenomProposal: {
                    encode(message: _651.AllowDenomProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _651.AllowDenomProposal;
                    fromJSON(object: any): _651.AllowDenomProposal;
                    toJSON(message: _651.AllowDenomProposal): unknown;
                    fromPartial(object: {
                        title?: string;
                        description?: string;
                        denom?: {
                            bankDenom?: string;
                            displayDenom?: string;
                            exponent?: number;
                        };
                    }): _651.AllowDenomProposal;
                };
                MsgSell: {
                    encode(message: _650.MsgSell, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _650.MsgSell;
                    fromJSON(object: any): _650.MsgSell;
                    toJSON(message: _650.MsgSell): unknown;
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
                    }): _650.MsgSell;
                };
                MsgSell_Order: {
                    encode(message: _650.MsgSell_Order, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _650.MsgSell_Order;
                    fromJSON(object: any): _650.MsgSell_Order;
                    toJSON(message: _650.MsgSell_Order): unknown;
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
                    }): _650.MsgSell_Order;
                };
                MsgSellResponse: {
                    encode(message: _650.MsgSellResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _650.MsgSellResponse;
                    fromJSON(object: any): _650.MsgSellResponse;
                    toJSON(message: _650.MsgSellResponse): unknown;
                    fromPartial(object: {
                        sellOrderIds?: any[];
                    }): _650.MsgSellResponse;
                };
                MsgUpdateSellOrders: {
                    encode(message: _650.MsgUpdateSellOrders, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _650.MsgUpdateSellOrders;
                    fromJSON(object: any): _650.MsgUpdateSellOrders;
                    toJSON(message: _650.MsgUpdateSellOrders): unknown;
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
                    }): _650.MsgUpdateSellOrders;
                };
                MsgUpdateSellOrders_Update: {
                    encode(message: _650.MsgUpdateSellOrders_Update, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _650.MsgUpdateSellOrders_Update;
                    fromJSON(object: any): _650.MsgUpdateSellOrders_Update;
                    toJSON(message: _650.MsgUpdateSellOrders_Update): unknown;
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
                    }): _650.MsgUpdateSellOrders_Update;
                };
                MsgUpdateSellOrdersResponse: {
                    encode(_: _650.MsgUpdateSellOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _650.MsgUpdateSellOrdersResponse;
                    fromJSON(_: any): _650.MsgUpdateSellOrdersResponse;
                    toJSON(_: _650.MsgUpdateSellOrdersResponse): unknown;
                    fromPartial(_: {}): _650.MsgUpdateSellOrdersResponse;
                };
                MsgCancelSellOrder: {
                    encode(message: _650.MsgCancelSellOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _650.MsgCancelSellOrder;
                    fromJSON(object: any): _650.MsgCancelSellOrder;
                    toJSON(message: _650.MsgCancelSellOrder): unknown;
                    fromPartial(object: {
                        seller?: string;
                        sellOrderId?: any;
                    }): _650.MsgCancelSellOrder;
                };
                MsgCancelSellOrderResponse: {
                    encode(_: _650.MsgCancelSellOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _650.MsgCancelSellOrderResponse;
                    fromJSON(_: any): _650.MsgCancelSellOrderResponse;
                    toJSON(_: _650.MsgCancelSellOrderResponse): unknown;
                    fromPartial(_: {}): _650.MsgCancelSellOrderResponse;
                };
                MsgBuyDirect: {
                    encode(message: _650.MsgBuyDirect, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _650.MsgBuyDirect;
                    fromJSON(object: any): _650.MsgBuyDirect;
                    toJSON(message: _650.MsgBuyDirect): unknown;
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
                    }): _650.MsgBuyDirect;
                };
                MsgBuyDirect_Order: {
                    encode(message: _650.MsgBuyDirect_Order, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _650.MsgBuyDirect_Order;
                    fromJSON(object: any): _650.MsgBuyDirect_Order;
                    toJSON(message: _650.MsgBuyDirect_Order): unknown;
                    fromPartial(object: {
                        sellOrderId?: any;
                        quantity?: string;
                        bidPrice?: {
                            denom?: string;
                            amount?: string;
                        };
                        disableAutoRetire?: boolean;
                        retirementJurisdiction?: string;
                    }): _650.MsgBuyDirect_Order;
                };
                MsgBuyDirectResponse: {
                    encode(_: _650.MsgBuyDirectResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _650.MsgBuyDirectResponse;
                    fromJSON(_: any): _650.MsgBuyDirectResponse;
                    toJSON(_: _650.MsgBuyDirectResponse): unknown;
                    fromPartial(_: {}): _650.MsgBuyDirectResponse;
                };
                SellOrder: {
                    encode(message: _649.SellOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _649.SellOrder;
                    fromJSON(object: any): _649.SellOrder;
                    toJSON(message: _649.SellOrder): unknown;
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
                    }): _649.SellOrder;
                };
                AllowedDenom: {
                    encode(message: _649.AllowedDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _649.AllowedDenom;
                    fromJSON(object: any): _649.AllowedDenom;
                    toJSON(message: _649.AllowedDenom): unknown;
                    fromPartial(object: {
                        bankDenom?: string;
                        displayDenom?: string;
                        exponent?: number;
                    }): _649.AllowedDenom;
                };
                Market: {
                    encode(message: _649.Market, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _649.Market;
                    fromJSON(object: any): _649.Market;
                    toJSON(message: _649.Market): unknown;
                    fromPartial(object: {
                        id?: any;
                        creditType?: string;
                        bankDenom?: string;
                        precisionModifier?: number;
                    }): _649.Market;
                };
                QuerySellOrderRequest: {
                    encode(message: _648.QuerySellOrderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _648.QuerySellOrderRequest;
                    fromJSON(object: any): _648.QuerySellOrderRequest;
                    toJSON(message: _648.QuerySellOrderRequest): unknown;
                    fromPartial(object: {
                        sellOrderId?: any;
                    }): _648.QuerySellOrderRequest;
                };
                QuerySellOrderResponse: {
                    encode(message: _648.QuerySellOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _648.QuerySellOrderResponse;
                    fromJSON(object: any): _648.QuerySellOrderResponse;
                    toJSON(message: _648.QuerySellOrderResponse): unknown;
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
                    }): _648.QuerySellOrderResponse;
                };
                QuerySellOrdersRequest: {
                    encode(message: _648.QuerySellOrdersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _648.QuerySellOrdersRequest;
                    fromJSON(object: any): _648.QuerySellOrdersRequest;
                    toJSON(message: _648.QuerySellOrdersRequest): unknown;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _648.QuerySellOrdersRequest;
                };
                QuerySellOrdersResponse: {
                    encode(message: _648.QuerySellOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _648.QuerySellOrdersResponse;
                    fromJSON(object: any): _648.QuerySellOrdersResponse;
                    toJSON(message: _648.QuerySellOrdersResponse): unknown;
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
                    }): _648.QuerySellOrdersResponse;
                };
                QuerySellOrdersByBatchDenomRequest: {
                    encode(message: _648.QuerySellOrdersByBatchDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _648.QuerySellOrdersByBatchDenomRequest;
                    fromJSON(object: any): _648.QuerySellOrdersByBatchDenomRequest;
                    toJSON(message: _648.QuerySellOrdersByBatchDenomRequest): unknown;
                    fromPartial(object: {
                        batchDenom?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _648.QuerySellOrdersByBatchDenomRequest;
                };
                QuerySellOrdersByBatchDenomResponse: {
                    encode(message: _648.QuerySellOrdersByBatchDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _648.QuerySellOrdersByBatchDenomResponse;
                    fromJSON(object: any): _648.QuerySellOrdersByBatchDenomResponse;
                    toJSON(message: _648.QuerySellOrdersByBatchDenomResponse): unknown;
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
                    }): _648.QuerySellOrdersByBatchDenomResponse;
                };
                QuerySellOrdersByAddressRequest: {
                    encode(message: _648.QuerySellOrdersByAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _648.QuerySellOrdersByAddressRequest;
                    fromJSON(object: any): _648.QuerySellOrdersByAddressRequest;
                    toJSON(message: _648.QuerySellOrdersByAddressRequest): unknown;
                    fromPartial(object: {
                        address?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _648.QuerySellOrdersByAddressRequest;
                };
                QuerySellOrdersByAddressResponse: {
                    encode(message: _648.QuerySellOrdersByAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _648.QuerySellOrdersByAddressResponse;
                    fromJSON(object: any): _648.QuerySellOrdersByAddressResponse;
                    toJSON(message: _648.QuerySellOrdersByAddressResponse): unknown;
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
                    }): _648.QuerySellOrdersByAddressResponse;
                };
                QueryAllowedDenomsRequest: {
                    encode(message: _648.QueryAllowedDenomsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _648.QueryAllowedDenomsRequest;
                    fromJSON(object: any): _648.QueryAllowedDenomsRequest;
                    toJSON(message: _648.QueryAllowedDenomsRequest): unknown;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _648.QueryAllowedDenomsRequest;
                };
                QueryAllowedDenomsResponse: {
                    encode(message: _648.QueryAllowedDenomsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _648.QueryAllowedDenomsResponse;
                    fromJSON(object: any): _648.QueryAllowedDenomsResponse;
                    toJSON(message: _648.QueryAllowedDenomsResponse): unknown;
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
                    }): _648.QueryAllowedDenomsResponse;
                };
                SellOrderInfo: {
                    encode(message: _648.SellOrderInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _648.SellOrderInfo;
                    fromJSON(object: any): _648.SellOrderInfo;
                    toJSON(message: _648.SellOrderInfo): unknown;
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
                    }): _648.SellOrderInfo;
                };
                EventSell: {
                    encode(message: _647.EventSell, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _647.EventSell;
                    fromJSON(object: any): _647.EventSell;
                    toJSON(message: _647.EventSell): unknown;
                    fromPartial(object: {
                        orderId?: any;
                    }): _647.EventSell;
                };
                EventUpdateSellOrder: {
                    encode(message: _647.EventUpdateSellOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _647.EventUpdateSellOrder;
                    fromJSON(object: any): _647.EventUpdateSellOrder;
                    toJSON(message: _647.EventUpdateSellOrder): unknown;
                    fromPartial(object: {
                        orderId?: any;
                    }): _647.EventUpdateSellOrder;
                };
                EventAllowDenom: {
                    encode(message: _647.EventAllowDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _647.EventAllowDenom;
                    fromJSON(object: any): _647.EventAllowDenom;
                    toJSON(message: _647.EventAllowDenom): unknown;
                    fromPartial(object: {
                        denom?: string;
                    }): _647.EventAllowDenom;
                };
            };
        }
        namespace orderbook {
            const v1alpha1: {
                BuyOrderSellOrderMatch: {
                    encode(message: _652.BuyOrderSellOrderMatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _652.BuyOrderSellOrderMatch;
                    fromJSON(object: any): _652.BuyOrderSellOrderMatch;
                    toJSON(message: _652.BuyOrderSellOrderMatch): unknown;
                    fromPartial(object: {
                        marketId?: any;
                        buyOrderId?: any;
                        sellOrderId?: any;
                        bidPriceComplement?: number;
                        askPrice?: number;
                    }): _652.BuyOrderSellOrderMatch;
                };
                BuyOrderClassSelector: {
                    encode(message: _652.BuyOrderClassSelector, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _652.BuyOrderClassSelector;
                    fromJSON(object: any): _652.BuyOrderClassSelector;
                    toJSON(message: _652.BuyOrderClassSelector): unknown;
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
                    }): _652.BuyOrderClassSelector;
                };
                BuyOrderProjectSelector: {
                    encode(message: _652.BuyOrderProjectSelector, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _652.BuyOrderProjectSelector;
                    fromJSON(object: any): _652.BuyOrderProjectSelector;
                    toJSON(message: _652.BuyOrderProjectSelector): unknown;
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
                    }): _652.BuyOrderProjectSelector;
                };
                BuyOrderBatchSelector: {
                    encode(message: _652.BuyOrderBatchSelector, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _652.BuyOrderBatchSelector;
                    fromJSON(object: any): _652.BuyOrderBatchSelector;
                    toJSON(message: _652.BuyOrderBatchSelector): unknown;
                    fromPartial(object: {
                        buyOrderId?: any;
                        batchId?: any;
                    }): _652.BuyOrderBatchSelector;
                };
            };
        }
        const v1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createClass(value: _656.MsgCreateClass): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createProject(value: _656.MsgCreateProject): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createBatch(value: _656.MsgCreateBatch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mintBatchCredits(value: _656.MsgMintBatchCredits): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    sealBatch(value: _656.MsgSealBatch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    send(value: _656.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    retire(value: _656.MsgRetire): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancel(value: _656.MsgCancel): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassAdmin(value: _656.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassIssuers(value: _656.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassMetadata(value: _656.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateProjectAdmin(value: _656.MsgUpdateProjectAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateProjectMetadata(value: _656.MsgUpdateProjectMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createClass(value: _656.MsgCreateClass): {
                        typeUrl: string;
                        value: _656.MsgCreateClass;
                    };
                    createProject(value: _656.MsgCreateProject): {
                        typeUrl: string;
                        value: _656.MsgCreateProject;
                    };
                    createBatch(value: _656.MsgCreateBatch): {
                        typeUrl: string;
                        value: _656.MsgCreateBatch;
                    };
                    mintBatchCredits(value: _656.MsgMintBatchCredits): {
                        typeUrl: string;
                        value: _656.MsgMintBatchCredits;
                    };
                    sealBatch(value: _656.MsgSealBatch): {
                        typeUrl: string;
                        value: _656.MsgSealBatch;
                    };
                    send(value: _656.MsgSend): {
                        typeUrl: string;
                        value: _656.MsgSend;
                    };
                    retire(value: _656.MsgRetire): {
                        typeUrl: string;
                        value: _656.MsgRetire;
                    };
                    cancel(value: _656.MsgCancel): {
                        typeUrl: string;
                        value: _656.MsgCancel;
                    };
                    updateClassAdmin(value: _656.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: _656.MsgUpdateClassAdmin;
                    };
                    updateClassIssuers(value: _656.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: _656.MsgUpdateClassIssuers;
                    };
                    updateClassMetadata(value: _656.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: _656.MsgUpdateClassMetadata;
                    };
                    updateProjectAdmin(value: _656.MsgUpdateProjectAdmin): {
                        typeUrl: string;
                        value: _656.MsgUpdateProjectAdmin;
                    };
                    updateProjectMetadata(value: _656.MsgUpdateProjectMetadata): {
                        typeUrl: string;
                        value: _656.MsgUpdateProjectMetadata;
                    };
                };
                toJSON: {
                    createClass(value: _656.MsgCreateClass): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createProject(value: _656.MsgCreateProject): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createBatch(value: _656.MsgCreateBatch): {
                        typeUrl: string;
                        value: unknown;
                    };
                    mintBatchCredits(value: _656.MsgMintBatchCredits): {
                        typeUrl: string;
                        value: unknown;
                    };
                    sealBatch(value: _656.MsgSealBatch): {
                        typeUrl: string;
                        value: unknown;
                    };
                    send(value: _656.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    retire(value: _656.MsgRetire): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancel(value: _656.MsgCancel): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateClassAdmin(value: _656.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateClassIssuers(value: _656.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateClassMetadata(value: _656.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateProjectAdmin(value: _656.MsgUpdateProjectAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateProjectMetadata(value: _656.MsgUpdateProjectMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createClass(value: any): {
                        typeUrl: string;
                        value: _656.MsgCreateClass;
                    };
                    createProject(value: any): {
                        typeUrl: string;
                        value: _656.MsgCreateProject;
                    };
                    createBatch(value: any): {
                        typeUrl: string;
                        value: _656.MsgCreateBatch;
                    };
                    mintBatchCredits(value: any): {
                        typeUrl: string;
                        value: _656.MsgMintBatchCredits;
                    };
                    sealBatch(value: any): {
                        typeUrl: string;
                        value: _656.MsgSealBatch;
                    };
                    send(value: any): {
                        typeUrl: string;
                        value: _656.MsgSend;
                    };
                    retire(value: any): {
                        typeUrl: string;
                        value: _656.MsgRetire;
                    };
                    cancel(value: any): {
                        typeUrl: string;
                        value: _656.MsgCancel;
                    };
                    updateClassAdmin(value: any): {
                        typeUrl: string;
                        value: _656.MsgUpdateClassAdmin;
                    };
                    updateClassIssuers(value: any): {
                        typeUrl: string;
                        value: _656.MsgUpdateClassIssuers;
                    };
                    updateClassMetadata(value: any): {
                        typeUrl: string;
                        value: _656.MsgUpdateClassMetadata;
                    };
                    updateProjectAdmin(value: any): {
                        typeUrl: string;
                        value: _656.MsgUpdateProjectAdmin;
                    };
                    updateProjectMetadata(value: any): {
                        typeUrl: string;
                        value: _656.MsgUpdateProjectMetadata;
                    };
                };
                fromPartial: {
                    createClass(value: _656.MsgCreateClass): {
                        typeUrl: string;
                        value: _656.MsgCreateClass;
                    };
                    createProject(value: _656.MsgCreateProject): {
                        typeUrl: string;
                        value: _656.MsgCreateProject;
                    };
                    createBatch(value: _656.MsgCreateBatch): {
                        typeUrl: string;
                        value: _656.MsgCreateBatch;
                    };
                    mintBatchCredits(value: _656.MsgMintBatchCredits): {
                        typeUrl: string;
                        value: _656.MsgMintBatchCredits;
                    };
                    sealBatch(value: _656.MsgSealBatch): {
                        typeUrl: string;
                        value: _656.MsgSealBatch;
                    };
                    send(value: _656.MsgSend): {
                        typeUrl: string;
                        value: _656.MsgSend;
                    };
                    retire(value: _656.MsgRetire): {
                        typeUrl: string;
                        value: _656.MsgRetire;
                    };
                    cancel(value: _656.MsgCancel): {
                        typeUrl: string;
                        value: _656.MsgCancel;
                    };
                    updateClassAdmin(value: _656.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: _656.MsgUpdateClassAdmin;
                    };
                    updateClassIssuers(value: _656.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: _656.MsgUpdateClassIssuers;
                    };
                    updateClassMetadata(value: _656.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: _656.MsgUpdateClassMetadata;
                    };
                    updateProjectAdmin(value: _656.MsgUpdateProjectAdmin): {
                        typeUrl: string;
                        value: _656.MsgUpdateProjectAdmin;
                    };
                    updateProjectMetadata(value: _656.MsgUpdateProjectMetadata): {
                        typeUrl: string;
                        value: _656.MsgUpdateProjectMetadata;
                    };
                };
            };
            AminoConverter: {
                "/regen.ecocredit.v1.MsgCreateClass": {
                    aminoType: string;
                    toAmino: ({ admin, issuers, metadata, creditTypeAbbrev, fee }: _656.MsgCreateClass) => {
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
                    }) => _656.MsgCreateClass;
                };
                "/regen.ecocredit.v1.MsgCreateProject": {
                    aminoType: string;
                    toAmino: ({ issuer, classId, metadata, jurisdiction, referenceId }: _656.MsgCreateProject) => {
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
                    }) => _656.MsgCreateProject;
                };
                "/regen.ecocredit.v1.MsgCreateBatch": {
                    aminoType: string;
                    toAmino: ({ issuer, projectId, issuance, metadata, startDate, endDate, open, originTx, note }: _656.MsgCreateBatch) => {
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
                    }) => _656.MsgCreateBatch;
                };
                "/regen.ecocredit.v1.MsgMintBatchCredits": {
                    aminoType: string;
                    toAmino: ({ issuer, batchDenom, issuance, originTx, note }: _656.MsgMintBatchCredits) => {
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
                    }) => _656.MsgMintBatchCredits;
                };
                "/regen.ecocredit.v1.MsgSealBatch": {
                    aminoType: string;
                    toAmino: ({ issuer, batchDenom }: _656.MsgSealBatch) => {
                        issuer: string;
                        batch_denom: string;
                    };
                    fromAmino: ({ issuer, batch_denom }: {
                        issuer: string;
                        batch_denom: string;
                    }) => _656.MsgSealBatch;
                };
                "/regen.ecocredit.v1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ sender, recipient, credits }: _656.MsgSend) => {
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
                    }) => _656.MsgSend;
                };
                "/regen.ecocredit.v1.MsgRetire": {
                    aminoType: string;
                    toAmino: ({ holder, credits, jurisdiction }: _656.MsgRetire) => {
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
                    }) => _656.MsgRetire;
                };
                "/regen.ecocredit.v1.MsgCancel": {
                    aminoType: string;
                    toAmino: ({ holder, credits }: _656.MsgCancel) => {
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
                    }) => _656.MsgCancel;
                };
                "/regen.ecocredit.v1.MsgUpdateClassAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, classId, newAdmin }: _656.MsgUpdateClassAdmin) => {
                        admin: string;
                        class_id: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, class_id, new_admin }: {
                        admin: string;
                        class_id: string;
                        new_admin: string;
                    }) => _656.MsgUpdateClassAdmin;
                };
                "/regen.ecocredit.v1.MsgUpdateClassIssuers": {
                    aminoType: string;
                    toAmino: ({ admin, classId, addIssuers, removeIssuers }: _656.MsgUpdateClassIssuers) => {
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
                    }) => _656.MsgUpdateClassIssuers;
                };
                "/regen.ecocredit.v1.MsgUpdateClassMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, classId, metadata }: _656.MsgUpdateClassMetadata) => {
                        admin: string;
                        class_id: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, class_id, metadata }: {
                        admin: string;
                        class_id: string;
                        metadata: string;
                    }) => _656.MsgUpdateClassMetadata;
                };
                "/regen.ecocredit.v1.MsgUpdateProjectAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, newAdmin, projectId }: _656.MsgUpdateProjectAdmin) => {
                        admin: string;
                        new_admin: string;
                        project_id: string;
                    };
                    fromAmino: ({ admin, new_admin, project_id }: {
                        admin: string;
                        new_admin: string;
                        project_id: string;
                    }) => _656.MsgUpdateProjectAdmin;
                };
                "/regen.ecocredit.v1.MsgUpdateProjectMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, newMetadata, projectId }: _656.MsgUpdateProjectMetadata) => {
                        admin: string;
                        new_metadata: string;
                        project_id: string;
                    };
                    fromAmino: ({ admin, new_metadata, project_id }: {
                        admin: string;
                        new_metadata: string;
                        project_id: string;
                    }) => _656.MsgUpdateProjectMetadata;
                };
            };
            Params: {
                encode(message: _657.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _657.Params;
                fromJSON(object: any): _657.Params;
                toJSON(message: _657.Params): unknown;
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
                }): _657.Params;
            };
            OriginTx: {
                encode(message: _657.OriginTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _657.OriginTx;
                fromJSON(object: any): _657.OriginTx;
                toJSON(message: _657.OriginTx): unknown;
                fromPartial(object: {
                    typ?: string;
                    id?: string;
                }): _657.OriginTx;
            };
            CreditTypeProposal: {
                encode(message: _657.CreditTypeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _657.CreditTypeProposal;
                fromJSON(object: any): _657.CreditTypeProposal;
                toJSON(message: _657.CreditTypeProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    creditType?: {
                        abbreviation?: string;
                        name?: string;
                        unit?: string;
                        precision?: number;
                    };
                }): _657.CreditTypeProposal;
            };
            MsgCreateClass: {
                encode(message: _656.MsgCreateClass, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _656.MsgCreateClass;
                fromJSON(object: any): _656.MsgCreateClass;
                toJSON(message: _656.MsgCreateClass): unknown;
                fromPartial(object: {
                    admin?: string;
                    issuers?: string[];
                    metadata?: string;
                    creditTypeAbbrev?: string;
                    fee?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _656.MsgCreateClass;
            };
            MsgCreateClassResponse: {
                encode(message: _656.MsgCreateClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _656.MsgCreateClassResponse;
                fromJSON(object: any): _656.MsgCreateClassResponse;
                toJSON(message: _656.MsgCreateClassResponse): unknown;
                fromPartial(object: {
                    classId?: string;
                }): _656.MsgCreateClassResponse;
            };
            MsgCreateProject: {
                encode(message: _656.MsgCreateProject, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _656.MsgCreateProject;
                fromJSON(object: any): _656.MsgCreateProject;
                toJSON(message: _656.MsgCreateProject): unknown;
                fromPartial(object: {
                    issuer?: string;
                    classId?: string;
                    metadata?: string;
                    jurisdiction?: string;
                    referenceId?: string;
                }): _656.MsgCreateProject;
            };
            MsgCreateProjectResponse: {
                encode(message: _656.MsgCreateProjectResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _656.MsgCreateProjectResponse;
                fromJSON(object: any): _656.MsgCreateProjectResponse;
                toJSON(message: _656.MsgCreateProjectResponse): unknown;
                fromPartial(object: {
                    projectId?: string;
                }): _656.MsgCreateProjectResponse;
            };
            MsgCreateBatch: {
                encode(message: _656.MsgCreateBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _656.MsgCreateBatch;
                fromJSON(object: any): _656.MsgCreateBatch;
                toJSON(message: _656.MsgCreateBatch): unknown;
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
                }): _656.MsgCreateBatch;
            };
            BatchIssuance: {
                encode(message: _656.BatchIssuance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _656.BatchIssuance;
                fromJSON(object: any): _656.BatchIssuance;
                toJSON(message: _656.BatchIssuance): unknown;
                fromPartial(object: {
                    recipient?: string;
                    tradableAmount?: string;
                    retiredAmount?: string;
                    retirementJurisdiction?: string;
                }): _656.BatchIssuance;
            };
            MsgCreateBatchResponse: {
                encode(message: _656.MsgCreateBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _656.MsgCreateBatchResponse;
                fromJSON(object: any): _656.MsgCreateBatchResponse;
                toJSON(message: _656.MsgCreateBatchResponse): unknown;
                fromPartial(object: {
                    batchDenom?: string;
                }): _656.MsgCreateBatchResponse;
            };
            MsgMintBatchCredits: {
                encode(message: _656.MsgMintBatchCredits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _656.MsgMintBatchCredits;
                fromJSON(object: any): _656.MsgMintBatchCredits;
                toJSON(message: _656.MsgMintBatchCredits): unknown;
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
                }): _656.MsgMintBatchCredits;
            };
            MsgSealBatch: {
                encode(message: _656.MsgSealBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _656.MsgSealBatch;
                fromJSON(object: any): _656.MsgSealBatch;
                toJSON(message: _656.MsgSealBatch): unknown;
                fromPartial(object: {
                    issuer?: string;
                    batchDenom?: string;
                }): _656.MsgSealBatch;
            };
            MsgMintBatchCreditsResponse: {
                encode(_: _656.MsgMintBatchCreditsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _656.MsgMintBatchCreditsResponse;
                fromJSON(_: any): _656.MsgMintBatchCreditsResponse;
                toJSON(_: _656.MsgMintBatchCreditsResponse): unknown;
                fromPartial(_: {}): _656.MsgMintBatchCreditsResponse;
            };
            MsgSealBatchResponse: {
                encode(_: _656.MsgSealBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _656.MsgSealBatchResponse;
                fromJSON(_: any): _656.MsgSealBatchResponse;
                toJSON(_: _656.MsgSealBatchResponse): unknown;
                fromPartial(_: {}): _656.MsgSealBatchResponse;
            };
            MsgSend: {
                encode(message: _656.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _656.MsgSend;
                fromJSON(object: any): _656.MsgSend;
                toJSON(message: _656.MsgSend): unknown;
                fromPartial(object: {
                    sender?: string;
                    recipient?: string;
                    credits?: {
                        batchDenom?: string;
                        tradableAmount?: string;
                        retiredAmount?: string;
                        retirementJurisdiction?: string;
                    }[];
                }): _656.MsgSend;
            };
            MsgSend_SendCredits: {
                encode(message: _656.MsgSend_SendCredits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _656.MsgSend_SendCredits;
                fromJSON(object: any): _656.MsgSend_SendCredits;
                toJSON(message: _656.MsgSend_SendCredits): unknown;
                fromPartial(object: {
                    batchDenom?: string;
                    tradableAmount?: string;
                    retiredAmount?: string;
                    retirementJurisdiction?: string;
                }): _656.MsgSend_SendCredits;
            };
            MsgSendResponse: {
                encode(_: _656.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _656.MsgSendResponse;
                fromJSON(_: any): _656.MsgSendResponse;
                toJSON(_: _656.MsgSendResponse): unknown;
                fromPartial(_: {}): _656.MsgSendResponse;
            };
            MsgRetire: {
                encode(message: _656.MsgRetire, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _656.MsgRetire;
                fromJSON(object: any): _656.MsgRetire;
                toJSON(message: _656.MsgRetire): unknown;
                fromPartial(object: {
                    holder?: string;
                    credits?: {
                        batchDenom?: string;
                        amount?: string;
                    }[];
                    jurisdiction?: string;
                }): _656.MsgRetire;
            };
            MsgRetire_RetireCredits: {
                encode(message: _656.MsgRetire_RetireCredits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _656.MsgRetire_RetireCredits;
                fromJSON(object: any): _656.MsgRetire_RetireCredits;
                toJSON(message: _656.MsgRetire_RetireCredits): unknown;
                fromPartial(object: {
                    batchDenom?: string;
                    amount?: string;
                }): _656.MsgRetire_RetireCredits;
            };
            MsgRetireResponse: {
                encode(_: _656.MsgRetireResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _656.MsgRetireResponse;
                fromJSON(_: any): _656.MsgRetireResponse;
                toJSON(_: _656.MsgRetireResponse): unknown;
                fromPartial(_: {}): _656.MsgRetireResponse;
            };
            MsgCancel: {
                encode(message: _656.MsgCancel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _656.MsgCancel;
                fromJSON(object: any): _656.MsgCancel;
                toJSON(message: _656.MsgCancel): unknown;
                fromPartial(object: {
                    holder?: string;
                    credits?: {
                        batchDenom?: string;
                        amount?: string;
                    }[];
                }): _656.MsgCancel;
            };
            MsgCancel_CancelCredits: {
                encode(message: _656.MsgCancel_CancelCredits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _656.MsgCancel_CancelCredits;
                fromJSON(object: any): _656.MsgCancel_CancelCredits;
                toJSON(message: _656.MsgCancel_CancelCredits): unknown;
                fromPartial(object: {
                    batchDenom?: string;
                    amount?: string;
                }): _656.MsgCancel_CancelCredits;
            };
            MsgCancelResponse: {
                encode(_: _656.MsgCancelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _656.MsgCancelResponse;
                fromJSON(_: any): _656.MsgCancelResponse;
                toJSON(_: _656.MsgCancelResponse): unknown;
                fromPartial(_: {}): _656.MsgCancelResponse;
            };
            MsgUpdateClassAdmin: {
                encode(message: _656.MsgUpdateClassAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _656.MsgUpdateClassAdmin;
                fromJSON(object: any): _656.MsgUpdateClassAdmin;
                toJSON(message: _656.MsgUpdateClassAdmin): unknown;
                fromPartial(object: {
                    admin?: string;
                    classId?: string;
                    newAdmin?: string;
                }): _656.MsgUpdateClassAdmin;
            };
            MsgUpdateClassAdminResponse: {
                encode(_: _656.MsgUpdateClassAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _656.MsgUpdateClassAdminResponse;
                fromJSON(_: any): _656.MsgUpdateClassAdminResponse;
                toJSON(_: _656.MsgUpdateClassAdminResponse): unknown;
                fromPartial(_: {}): _656.MsgUpdateClassAdminResponse;
            };
            MsgUpdateClassIssuers: {
                encode(message: _656.MsgUpdateClassIssuers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _656.MsgUpdateClassIssuers;
                fromJSON(object: any): _656.MsgUpdateClassIssuers;
                toJSON(message: _656.MsgUpdateClassIssuers): unknown;
                fromPartial(object: {
                    admin?: string;
                    classId?: string;
                    addIssuers?: string[];
                    removeIssuers?: string[];
                }): _656.MsgUpdateClassIssuers;
            };
            MsgUpdateClassIssuersResponse: {
                encode(_: _656.MsgUpdateClassIssuersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _656.MsgUpdateClassIssuersResponse;
                fromJSON(_: any): _656.MsgUpdateClassIssuersResponse;
                toJSON(_: _656.MsgUpdateClassIssuersResponse): unknown;
                fromPartial(_: {}): _656.MsgUpdateClassIssuersResponse;
            };
            MsgUpdateClassMetadata: {
                encode(message: _656.MsgUpdateClassMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _656.MsgUpdateClassMetadata;
                fromJSON(object: any): _656.MsgUpdateClassMetadata;
                toJSON(message: _656.MsgUpdateClassMetadata): unknown;
                fromPartial(object: {
                    admin?: string;
                    classId?: string;
                    metadata?: string;
                }): _656.MsgUpdateClassMetadata;
            };
            MsgUpdateClassMetadataResponse: {
                encode(_: _656.MsgUpdateClassMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _656.MsgUpdateClassMetadataResponse;
                fromJSON(_: any): _656.MsgUpdateClassMetadataResponse;
                toJSON(_: _656.MsgUpdateClassMetadataResponse): unknown;
                fromPartial(_: {}): _656.MsgUpdateClassMetadataResponse;
            };
            MsgUpdateProjectAdmin: {
                encode(message: _656.MsgUpdateProjectAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _656.MsgUpdateProjectAdmin;
                fromJSON(object: any): _656.MsgUpdateProjectAdmin;
                toJSON(message: _656.MsgUpdateProjectAdmin): unknown;
                fromPartial(object: {
                    admin?: string;
                    newAdmin?: string;
                    projectId?: string;
                }): _656.MsgUpdateProjectAdmin;
            };
            MsgUpdateProjectAdminResponse: {
                encode(_: _656.MsgUpdateProjectAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _656.MsgUpdateProjectAdminResponse;
                fromJSON(_: any): _656.MsgUpdateProjectAdminResponse;
                toJSON(_: _656.MsgUpdateProjectAdminResponse): unknown;
                fromPartial(_: {}): _656.MsgUpdateProjectAdminResponse;
            };
            MsgUpdateProjectMetadata: {
                encode(message: _656.MsgUpdateProjectMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _656.MsgUpdateProjectMetadata;
                fromJSON(object: any): _656.MsgUpdateProjectMetadata;
                toJSON(message: _656.MsgUpdateProjectMetadata): unknown;
                fromPartial(object: {
                    admin?: string;
                    newMetadata?: string;
                    projectId?: string;
                }): _656.MsgUpdateProjectMetadata;
            };
            MsgUpdateProjectMetadataResponse: {
                encode(_: _656.MsgUpdateProjectMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _656.MsgUpdateProjectMetadataResponse;
                fromJSON(_: any): _656.MsgUpdateProjectMetadataResponse;
                toJSON(_: _656.MsgUpdateProjectMetadataResponse): unknown;
                fromPartial(_: {}): _656.MsgUpdateProjectMetadataResponse;
            };
            CreditType: {
                encode(message: _655.CreditType, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _655.CreditType;
                fromJSON(object: any): _655.CreditType;
                toJSON(message: _655.CreditType): unknown;
                fromPartial(object: {
                    abbreviation?: string;
                    name?: string;
                    unit?: string;
                    precision?: number;
                }): _655.CreditType;
            };
            Class: {
                encode(message: _655.Class, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _655.Class;
                fromJSON(object: any): _655.Class;
                toJSON(message: _655.Class): unknown;
                fromPartial(object: {
                    key?: any;
                    id?: string;
                    admin?: Uint8Array;
                    metadata?: string;
                    creditTypeAbbrev?: string;
                }): _655.Class;
            };
            ClassIssuer: {
                encode(message: _655.ClassIssuer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _655.ClassIssuer;
                fromJSON(object: any): _655.ClassIssuer;
                toJSON(message: _655.ClassIssuer): unknown;
                fromPartial(object: {
                    classKey?: any;
                    issuer?: Uint8Array;
                }): _655.ClassIssuer;
            };
            Project: {
                encode(message: _655.Project, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _655.Project;
                fromJSON(object: any): _655.Project;
                toJSON(message: _655.Project): unknown;
                fromPartial(object: {
                    key?: any;
                    id?: string;
                    admin?: Uint8Array;
                    classKey?: any;
                    jurisdiction?: string;
                    metadata?: string;
                    referenceId?: string;
                }): _655.Project;
            };
            Batch: {
                encode(message: _655.Batch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _655.Batch;
                fromJSON(object: any): _655.Batch;
                toJSON(message: _655.Batch): unknown;
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
                }): _655.Batch;
            };
            ClassSequence: {
                encode(message: _655.ClassSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _655.ClassSequence;
                fromJSON(object: any): _655.ClassSequence;
                toJSON(message: _655.ClassSequence): unknown;
                fromPartial(object: {
                    creditTypeAbbrev?: string;
                    nextSequence?: any;
                }): _655.ClassSequence;
            };
            ProjectSequence: {
                encode(message: _655.ProjectSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _655.ProjectSequence;
                fromJSON(object: any): _655.ProjectSequence;
                toJSON(message: _655.ProjectSequence): unknown;
                fromPartial(object: {
                    classKey?: any;
                    nextSequence?: any;
                }): _655.ProjectSequence;
            };
            BatchSequence: {
                encode(message: _655.BatchSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _655.BatchSequence;
                fromJSON(object: any): _655.BatchSequence;
                toJSON(message: _655.BatchSequence): unknown;
                fromPartial(object: {
                    projectKey?: any;
                    nextSequence?: any;
                }): _655.BatchSequence;
            };
            BatchBalance: {
                encode(message: _655.BatchBalance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _655.BatchBalance;
                fromJSON(object: any): _655.BatchBalance;
                toJSON(message: _655.BatchBalance): unknown;
                fromPartial(object: {
                    batchKey?: any;
                    address?: Uint8Array;
                    tradable?: string;
                    retired?: string;
                    escrowed?: string;
                }): _655.BatchBalance;
            };
            BatchSupply: {
                encode(message: _655.BatchSupply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _655.BatchSupply;
                fromJSON(object: any): _655.BatchSupply;
                toJSON(message: _655.BatchSupply): unknown;
                fromPartial(object: {
                    batchKey?: any;
                    tradableAmount?: string;
                    retiredAmount?: string;
                    cancelledAmount?: string;
                }): _655.BatchSupply;
            };
            BatchOrigTx: {
                encode(message: _655.BatchOrigTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _655.BatchOrigTx;
                fromJSON(object: any): _655.BatchOrigTx;
                toJSON(message: _655.BatchOrigTx): unknown;
                fromPartial(object: {
                    txId?: string;
                    typ?: string;
                    note?: string;
                    batchDenom?: string;
                }): _655.BatchOrigTx;
            };
            QueryClassesRequest: {
                encode(message: _654.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _654.QueryClassesRequest;
                fromJSON(object: any): _654.QueryClassesRequest;
                toJSON(message: _654.QueryClassesRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _654.QueryClassesRequest;
            };
            QueryClassesResponse: {
                encode(message: _654.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _654.QueryClassesResponse;
                fromJSON(object: any): _654.QueryClassesResponse;
                toJSON(message: _654.QueryClassesResponse): unknown;
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
                }): _654.QueryClassesResponse;
            };
            QueryClassesByAdminRequest: {
                encode(message: _654.QueryClassesByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _654.QueryClassesByAdminRequest;
                fromJSON(object: any): _654.QueryClassesByAdminRequest;
                toJSON(message: _654.QueryClassesByAdminRequest): unknown;
                fromPartial(object: {
                    admin?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _654.QueryClassesByAdminRequest;
            };
            QueryClassesByAdminResponse: {
                encode(message: _654.QueryClassesByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _654.QueryClassesByAdminResponse;
                fromJSON(object: any): _654.QueryClassesByAdminResponse;
                toJSON(message: _654.QueryClassesByAdminResponse): unknown;
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
                }): _654.QueryClassesByAdminResponse;
            };
            QueryClassRequest: {
                encode(message: _654.QueryClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _654.QueryClassRequest;
                fromJSON(object: any): _654.QueryClassRequest;
                toJSON(message: _654.QueryClassRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                }): _654.QueryClassRequest;
            };
            QueryClassResponse: {
                encode(message: _654.QueryClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _654.QueryClassResponse;
                fromJSON(object: any): _654.QueryClassResponse;
                toJSON(message: _654.QueryClassResponse): unknown;
                fromPartial(object: {
                    class?: {
                        id?: string;
                        admin?: string;
                        metadata?: string;
                        creditTypeAbbrev?: string;
                    };
                }): _654.QueryClassResponse;
            };
            QueryClassIssuersRequest: {
                encode(message: _654.QueryClassIssuersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _654.QueryClassIssuersRequest;
                fromJSON(object: any): _654.QueryClassIssuersRequest;
                toJSON(message: _654.QueryClassIssuersRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _654.QueryClassIssuersRequest;
            };
            QueryClassIssuersResponse: {
                encode(message: _654.QueryClassIssuersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _654.QueryClassIssuersResponse;
                fromJSON(object: any): _654.QueryClassIssuersResponse;
                toJSON(message: _654.QueryClassIssuersResponse): unknown;
                fromPartial(object: {
                    issuers?: string[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _654.QueryClassIssuersResponse;
            };
            QueryProjectsRequest: {
                encode(message: _654.QueryProjectsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _654.QueryProjectsRequest;
                fromJSON(object: any): _654.QueryProjectsRequest;
                toJSON(message: _654.QueryProjectsRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _654.QueryProjectsRequest;
            };
            QueryProjectsResponse: {
                encode(message: _654.QueryProjectsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _654.QueryProjectsResponse;
                fromJSON(object: any): _654.QueryProjectsResponse;
                toJSON(message: _654.QueryProjectsResponse): unknown;
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
                }): _654.QueryProjectsResponse;
            };
            QueryProjectsByReferenceIdRequest: {
                encode(message: _654.QueryProjectsByReferenceIdRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _654.QueryProjectsByReferenceIdRequest;
                fromJSON(object: any): _654.QueryProjectsByReferenceIdRequest;
                toJSON(message: _654.QueryProjectsByReferenceIdRequest): unknown;
                fromPartial(object: {
                    referenceId?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _654.QueryProjectsByReferenceIdRequest;
            };
            QueryProjectsByReferenceIdResponse: {
                encode(message: _654.QueryProjectsByReferenceIdResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _654.QueryProjectsByReferenceIdResponse;
                fromJSON(object: any): _654.QueryProjectsByReferenceIdResponse;
                toJSON(message: _654.QueryProjectsByReferenceIdResponse): unknown;
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
                }): _654.QueryProjectsByReferenceIdResponse;
            };
            QueryProjectRequest: {
                encode(message: _654.QueryProjectRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _654.QueryProjectRequest;
                fromJSON(object: any): _654.QueryProjectRequest;
                toJSON(message: _654.QueryProjectRequest): unknown;
                fromPartial(object: {
                    projectId?: string;
                }): _654.QueryProjectRequest;
            };
            QueryProjectResponse: {
                encode(message: _654.QueryProjectResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _654.QueryProjectResponse;
                fromJSON(object: any): _654.QueryProjectResponse;
                toJSON(message: _654.QueryProjectResponse): unknown;
                fromPartial(object: {
                    project?: {
                        id?: string;
                        admin?: string;
                        classId?: string;
                        jurisdiction?: string;
                        metadata?: string;
                        referenceId?: string;
                    };
                }): _654.QueryProjectResponse;
            };
            QueryBatchesRequest: {
                encode(message: _654.QueryBatchesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _654.QueryBatchesRequest;
                fromJSON(object: any): _654.QueryBatchesRequest;
                toJSON(message: _654.QueryBatchesRequest): unknown;
                fromPartial(object: {
                    projectId?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _654.QueryBatchesRequest;
            };
            QueryBatchesResponse: {
                encode(message: _654.QueryBatchesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _654.QueryBatchesResponse;
                fromJSON(object: any): _654.QueryBatchesResponse;
                toJSON(message: _654.QueryBatchesResponse): unknown;
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
                }): _654.QueryBatchesResponse;
            };
            QueryBatchesByIssuerRequest: {
                encode(message: _654.QueryBatchesByIssuerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _654.QueryBatchesByIssuerRequest;
                fromJSON(object: any): _654.QueryBatchesByIssuerRequest;
                toJSON(message: _654.QueryBatchesByIssuerRequest): unknown;
                fromPartial(object: {
                    issuer?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _654.QueryBatchesByIssuerRequest;
            };
            QueryBatchesByIssuerResponse: {
                encode(message: _654.QueryBatchesByIssuerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _654.QueryBatchesByIssuerResponse;
                fromJSON(object: any): _654.QueryBatchesByIssuerResponse;
                toJSON(message: _654.QueryBatchesByIssuerResponse): unknown;
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
                }): _654.QueryBatchesByIssuerResponse;
            };
            QueryBatchesByClassRequest: {
                encode(message: _654.QueryBatchesByClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _654.QueryBatchesByClassRequest;
                fromJSON(object: any): _654.QueryBatchesByClassRequest;
                toJSON(message: _654.QueryBatchesByClassRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _654.QueryBatchesByClassRequest;
            };
            QueryBatchesByClassResponse: {
                encode(message: _654.QueryBatchesByClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _654.QueryBatchesByClassResponse;
                fromJSON(object: any): _654.QueryBatchesByClassResponse;
                toJSON(message: _654.QueryBatchesByClassResponse): unknown;
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
                }): _654.QueryBatchesByClassResponse;
            };
            QueryBatchRequest: {
                encode(message: _654.QueryBatchRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _654.QueryBatchRequest;
                fromJSON(object: any): _654.QueryBatchRequest;
                toJSON(message: _654.QueryBatchRequest): unknown;
                fromPartial(object: {
                    batchDenom?: string;
                }): _654.QueryBatchRequest;
            };
            QueryBatchResponse: {
                encode(message: _654.QueryBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _654.QueryBatchResponse;
                fromJSON(object: any): _654.QueryBatchResponse;
                toJSON(message: _654.QueryBatchResponse): unknown;
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
                }): _654.QueryBatchResponse;
            };
            QueryBalanceRequest: {
                encode(message: _654.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _654.QueryBalanceRequest;
                fromJSON(object: any): _654.QueryBalanceRequest;
                toJSON(message: _654.QueryBalanceRequest): unknown;
                fromPartial(object: {
                    account?: string;
                    batchDenom?: string;
                }): _654.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _654.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _654.QueryBalanceResponse;
                fromJSON(object: any): _654.QueryBalanceResponse;
                toJSON(message: _654.QueryBalanceResponse): unknown;
                fromPartial(object: {
                    balance?: {
                        address?: string;
                        batchDenom?: string;
                        tradable?: string;
                        retired?: string;
                        escrowed?: string;
                    };
                }): _654.QueryBalanceResponse;
            };
            QueryBalancesRequest: {
                encode(message: _654.QueryBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _654.QueryBalancesRequest;
                fromJSON(object: any): _654.QueryBalancesRequest;
                toJSON(message: _654.QueryBalancesRequest): unknown;
                fromPartial(object: {
                    account?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _654.QueryBalancesRequest;
            };
            QueryBalancesResponse: {
                encode(message: _654.QueryBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _654.QueryBalancesResponse;
                fromJSON(object: any): _654.QueryBalancesResponse;
                toJSON(message: _654.QueryBalancesResponse): unknown;
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
                }): _654.QueryBalancesResponse;
            };
            QuerySupplyRequest: {
                encode(message: _654.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _654.QuerySupplyRequest;
                fromJSON(object: any): _654.QuerySupplyRequest;
                toJSON(message: _654.QuerySupplyRequest): unknown;
                fromPartial(object: {
                    batchDenom?: string;
                }): _654.QuerySupplyRequest;
            };
            QuerySupplyResponse: {
                encode(message: _654.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _654.QuerySupplyResponse;
                fromJSON(object: any): _654.QuerySupplyResponse;
                toJSON(message: _654.QuerySupplyResponse): unknown;
                fromPartial(object: {
                    tradableSupply?: string;
                    retiredSupply?: string;
                    cancelledAmount?: string;
                }): _654.QuerySupplyResponse;
            };
            QueryCreditTypesRequest: {
                encode(_: _654.QueryCreditTypesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _654.QueryCreditTypesRequest;
                fromJSON(_: any): _654.QueryCreditTypesRequest;
                toJSON(_: _654.QueryCreditTypesRequest): unknown;
                fromPartial(_: {}): _654.QueryCreditTypesRequest;
            };
            QueryCreditTypesResponse: {
                encode(message: _654.QueryCreditTypesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _654.QueryCreditTypesResponse;
                fromJSON(object: any): _654.QueryCreditTypesResponse;
                toJSON(message: _654.QueryCreditTypesResponse): unknown;
                fromPartial(object: {
                    creditTypes?: {
                        abbreviation?: string;
                        name?: string;
                        unit?: string;
                        precision?: number;
                    }[];
                }): _654.QueryCreditTypesResponse;
            };
            QueryParamsRequest: {
                encode(_: _654.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _654.QueryParamsRequest;
                fromJSON(_: any): _654.QueryParamsRequest;
                toJSON(_: _654.QueryParamsRequest): unknown;
                fromPartial(_: {}): _654.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _654.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _654.QueryParamsResponse;
                fromJSON(object: any): _654.QueryParamsResponse;
                toJSON(message: _654.QueryParamsResponse): unknown;
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
                }): _654.QueryParamsResponse;
            };
            ClassInfo: {
                encode(message: _654.ClassInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _654.ClassInfo;
                fromJSON(object: any): _654.ClassInfo;
                toJSON(message: _654.ClassInfo): unknown;
                fromPartial(object: {
                    id?: string;
                    admin?: string;
                    metadata?: string;
                    creditTypeAbbrev?: string;
                }): _654.ClassInfo;
            };
            ProjectInfo: {
                encode(message: _654.ProjectInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _654.ProjectInfo;
                fromJSON(object: any): _654.ProjectInfo;
                toJSON(message: _654.ProjectInfo): unknown;
                fromPartial(object: {
                    id?: string;
                    admin?: string;
                    classId?: string;
                    jurisdiction?: string;
                    metadata?: string;
                    referenceId?: string;
                }): _654.ProjectInfo;
            };
            BatchInfo: {
                encode(message: _654.BatchInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _654.BatchInfo;
                fromJSON(object: any): _654.BatchInfo;
                toJSON(message: _654.BatchInfo): unknown;
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
                }): _654.BatchInfo;
            };
            BatchBalanceInfo: {
                encode(message: _654.BatchBalanceInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _654.BatchBalanceInfo;
                fromJSON(object: any): _654.BatchBalanceInfo;
                toJSON(message: _654.BatchBalanceInfo): unknown;
                fromPartial(object: {
                    address?: string;
                    batchDenom?: string;
                    tradable?: string;
                    retired?: string;
                    escrowed?: string;
                }): _654.BatchBalanceInfo;
            };
            EventCreateClass: {
                encode(message: _653.EventCreateClass, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _653.EventCreateClass;
                fromJSON(object: any): _653.EventCreateClass;
                toJSON(message: _653.EventCreateClass): unknown;
                fromPartial(object: {
                    classId?: string;
                }): _653.EventCreateClass;
            };
            EventCreateProject: {
                encode(message: _653.EventCreateProject, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _653.EventCreateProject;
                fromJSON(object: any): _653.EventCreateProject;
                toJSON(message: _653.EventCreateProject): unknown;
                fromPartial(object: {
                    projectId?: string;
                }): _653.EventCreateProject;
            };
            EventCreateBatch: {
                encode(message: _653.EventCreateBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _653.EventCreateBatch;
                fromJSON(object: any): _653.EventCreateBatch;
                toJSON(message: _653.EventCreateBatch): unknown;
                fromPartial(object: {
                    batchDenom?: string;
                }): _653.EventCreateBatch;
            };
            EventMint: {
                encode(message: _653.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _653.EventMint;
                fromJSON(object: any): _653.EventMint;
                toJSON(message: _653.EventMint): unknown;
                fromPartial(object: {
                    batchDenom?: string;
                    originTx?: {
                        typ?: string;
                        id?: string;
                    };
                }): _653.EventMint;
            };
            EventTransfer: {
                encode(message: _653.EventTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _653.EventTransfer;
                fromJSON(object: any): _653.EventTransfer;
                toJSON(message: _653.EventTransfer): unknown;
                fromPartial(object: {
                    sender?: string;
                    recipient?: string;
                    batchDenom?: string;
                    tradableAmount?: string;
                    retiredAmount?: string;
                }): _653.EventTransfer;
            };
            EventRetire: {
                encode(message: _653.EventRetire, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _653.EventRetire;
                fromJSON(object: any): _653.EventRetire;
                toJSON(message: _653.EventRetire): unknown;
                fromPartial(object: {
                    owner?: string;
                    batchDenom?: string;
                    amount?: string;
                    jurisdiction?: string;
                }): _653.EventRetire;
            };
            EventCancel: {
                encode(message: _653.EventCancel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _653.EventCancel;
                fromJSON(object: any): _653.EventCancel;
                toJSON(message: _653.EventCancel): unknown;
                fromPartial(object: {
                    owner?: string;
                    batchDenom?: string;
                    amount?: string;
                }): _653.EventCancel;
            };
            EventUpdateClassAdmin: {
                encode(message: _653.EventUpdateClassAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _653.EventUpdateClassAdmin;
                fromJSON(object: any): _653.EventUpdateClassAdmin;
                toJSON(message: _653.EventUpdateClassAdmin): unknown;
                fromPartial(object: {
                    classId?: string;
                }): _653.EventUpdateClassAdmin;
            };
            EventUpdateClassIssuers: {
                encode(message: _653.EventUpdateClassIssuers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _653.EventUpdateClassIssuers;
                fromJSON(object: any): _653.EventUpdateClassIssuers;
                toJSON(message: _653.EventUpdateClassIssuers): unknown;
                fromPartial(object: {
                    classId?: string;
                }): _653.EventUpdateClassIssuers;
            };
            EventUpdateClassMetadata: {
                encode(message: _653.EventUpdateClassMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _653.EventUpdateClassMetadata;
                fromJSON(object: any): _653.EventUpdateClassMetadata;
                toJSON(message: _653.EventUpdateClassMetadata): unknown;
                fromPartial(object: {
                    classId?: string;
                }): _653.EventUpdateClassMetadata;
            };
            EventUpdateProjectAdmin: {
                encode(message: _653.EventUpdateProjectAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _653.EventUpdateProjectAdmin;
                fromJSON(object: any): _653.EventUpdateProjectAdmin;
                toJSON(message: _653.EventUpdateProjectAdmin): unknown;
                fromPartial(object: {
                    projectId?: string;
                }): _653.EventUpdateProjectAdmin;
            };
            EventUpdateProjectMetadata: {
                encode(message: _653.EventUpdateProjectMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _653.EventUpdateProjectMetadata;
                fromJSON(object: any): _653.EventUpdateProjectMetadata;
                toJSON(message: _653.EventUpdateProjectMetadata): unknown;
                fromPartial(object: {
                    projectId?: string;
                }): _653.EventUpdateProjectMetadata;
            };
            EventSealBatch: {
                encode(message: _653.EventSealBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _653.EventSealBatch;
                fromJSON(object: any): _653.EventSealBatch;
                toJSON(message: _653.EventSealBatch): unknown;
                fromPartial(object: {
                    batchDenom?: string;
                }): _653.EventSealBatch;
            };
            EventAddCreditType: {
                encode(message: _653.EventAddCreditType, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _653.EventAddCreditType;
                fromJSON(object: any): _653.EventAddCreditType;
                toJSON(message: _653.EventAddCreditType): unknown;
                fromPartial(object: {
                    abbreviation?: string;
                }): _653.EventAddCreditType;
            };
        };
        const v1alpha1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createClass(value: _661.MsgCreateClass): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createBatch(value: _661.MsgCreateBatch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    send(value: _661.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    retire(value: _661.MsgRetire): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancel(value: _661.MsgCancel): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassAdmin(value: _661.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassIssuers(value: _661.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassMetadata(value: _661.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createClass(value: _661.MsgCreateClass): {
                        typeUrl: string;
                        value: _661.MsgCreateClass;
                    };
                    createBatch(value: _661.MsgCreateBatch): {
                        typeUrl: string;
                        value: _661.MsgCreateBatch;
                    };
                    send(value: _661.MsgSend): {
                        typeUrl: string;
                        value: _661.MsgSend;
                    };
                    retire(value: _661.MsgRetire): {
                        typeUrl: string;
                        value: _661.MsgRetire;
                    };
                    cancel(value: _661.MsgCancel): {
                        typeUrl: string;
                        value: _661.MsgCancel;
                    };
                    updateClassAdmin(value: _661.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: _661.MsgUpdateClassAdmin;
                    };
                    updateClassIssuers(value: _661.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: _661.MsgUpdateClassIssuers;
                    };
                    updateClassMetadata(value: _661.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: _661.MsgUpdateClassMetadata;
                    };
                };
                toJSON: {
                    createClass(value: _661.MsgCreateClass): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createBatch(value: _661.MsgCreateBatch): {
                        typeUrl: string;
                        value: unknown;
                    };
                    send(value: _661.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    retire(value: _661.MsgRetire): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancel(value: _661.MsgCancel): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateClassAdmin(value: _661.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateClassIssuers(value: _661.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateClassMetadata(value: _661.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createClass(value: any): {
                        typeUrl: string;
                        value: _661.MsgCreateClass;
                    };
                    createBatch(value: any): {
                        typeUrl: string;
                        value: _661.MsgCreateBatch;
                    };
                    send(value: any): {
                        typeUrl: string;
                        value: _661.MsgSend;
                    };
                    retire(value: any): {
                        typeUrl: string;
                        value: _661.MsgRetire;
                    };
                    cancel(value: any): {
                        typeUrl: string;
                        value: _661.MsgCancel;
                    };
                    updateClassAdmin(value: any): {
                        typeUrl: string;
                        value: _661.MsgUpdateClassAdmin;
                    };
                    updateClassIssuers(value: any): {
                        typeUrl: string;
                        value: _661.MsgUpdateClassIssuers;
                    };
                    updateClassMetadata(value: any): {
                        typeUrl: string;
                        value: _661.MsgUpdateClassMetadata;
                    };
                };
                fromPartial: {
                    createClass(value: _661.MsgCreateClass): {
                        typeUrl: string;
                        value: _661.MsgCreateClass;
                    };
                    createBatch(value: _661.MsgCreateBatch): {
                        typeUrl: string;
                        value: _661.MsgCreateBatch;
                    };
                    send(value: _661.MsgSend): {
                        typeUrl: string;
                        value: _661.MsgSend;
                    };
                    retire(value: _661.MsgRetire): {
                        typeUrl: string;
                        value: _661.MsgRetire;
                    };
                    cancel(value: _661.MsgCancel): {
                        typeUrl: string;
                        value: _661.MsgCancel;
                    };
                    updateClassAdmin(value: _661.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: _661.MsgUpdateClassAdmin;
                    };
                    updateClassIssuers(value: _661.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: _661.MsgUpdateClassIssuers;
                    };
                    updateClassMetadata(value: _661.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: _661.MsgUpdateClassMetadata;
                    };
                };
            };
            AminoConverter: {
                "/regen.ecocredit.v1alpha1.MsgCreateClass": {
                    aminoType: string;
                    toAmino: ({ admin, issuers, metadata, creditTypeName }: _661.MsgCreateClass) => {
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
                    }) => _661.MsgCreateClass;
                };
                "/regen.ecocredit.v1alpha1.MsgCreateBatch": {
                    aminoType: string;
                    toAmino: ({ issuer, classId, issuance, metadata, startDate, endDate, projectLocation }: _661.MsgCreateBatch) => {
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
                    }) => _661.MsgCreateBatch;
                };
                "/regen.ecocredit.v1alpha1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ sender, recipient, credits }: _661.MsgSend) => {
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
                    }) => _661.MsgSend;
                };
                "/regen.ecocredit.v1alpha1.MsgRetire": {
                    aminoType: string;
                    toAmino: ({ holder, credits, location }: _661.MsgRetire) => {
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
                    }) => _661.MsgRetire;
                };
                "/regen.ecocredit.v1alpha1.MsgCancel": {
                    aminoType: string;
                    toAmino: ({ holder, credits }: _661.MsgCancel) => {
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
                    }) => _661.MsgCancel;
                };
                "/regen.ecocredit.v1alpha1.MsgUpdateClassAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, classId, newAdmin }: _661.MsgUpdateClassAdmin) => {
                        admin: string;
                        class_id: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, class_id, new_admin }: {
                        admin: string;
                        class_id: string;
                        new_admin: string;
                    }) => _661.MsgUpdateClassAdmin;
                };
                "/regen.ecocredit.v1alpha1.MsgUpdateClassIssuers": {
                    aminoType: string;
                    toAmino: ({ admin, classId, issuers }: _661.MsgUpdateClassIssuers) => {
                        admin: string;
                        class_id: string;
                        issuers: string[];
                    };
                    fromAmino: ({ admin, class_id, issuers }: {
                        admin: string;
                        class_id: string;
                        issuers: string[];
                    }) => _661.MsgUpdateClassIssuers;
                };
                "/regen.ecocredit.v1alpha1.MsgUpdateClassMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, classId, metadata }: _661.MsgUpdateClassMetadata) => {
                        admin: string;
                        class_id: string;
                        metadata: Uint8Array;
                    };
                    fromAmino: ({ admin, class_id, metadata }: {
                        admin: string;
                        class_id: string;
                        metadata: Uint8Array;
                    }) => _661.MsgUpdateClassMetadata;
                };
            };
            ClassInfo: {
                encode(message: _662.ClassInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.ClassInfo;
                fromJSON(object: any): _662.ClassInfo;
                toJSON(message: _662.ClassInfo): unknown;
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
                }): _662.ClassInfo;
            };
            BatchInfo: {
                encode(message: _662.BatchInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.BatchInfo;
                fromJSON(object: any): _662.BatchInfo;
                toJSON(message: _662.BatchInfo): unknown;
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
                }): _662.BatchInfo;
            };
            Params: {
                encode(message: _662.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.Params;
                fromJSON(object: any): _662.Params;
                toJSON(message: _662.Params): unknown;
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
                }): _662.Params;
            };
            CreditType: {
                encode(message: _662.CreditType, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.CreditType;
                fromJSON(object: any): _662.CreditType;
                toJSON(message: _662.CreditType): unknown;
                fromPartial(object: {
                    name?: string;
                    abbreviation?: string;
                    unit?: string;
                    precision?: number;
                }): _662.CreditType;
            };
            CreditTypeSeq: {
                encode(message: _662.CreditTypeSeq, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.CreditTypeSeq;
                fromJSON(object: any): _662.CreditTypeSeq;
                toJSON(message: _662.CreditTypeSeq): unknown;
                fromPartial(object: {
                    abbreviation?: string;
                    seqNumber?: any;
                }): _662.CreditTypeSeq;
            };
            MsgCreateClass: {
                encode(message: _661.MsgCreateClass, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _661.MsgCreateClass;
                fromJSON(object: any): _661.MsgCreateClass;
                toJSON(message: _661.MsgCreateClass): unknown;
                fromPartial(object: {
                    admin?: string;
                    issuers?: string[];
                    metadata?: Uint8Array;
                    creditTypeName?: string;
                }): _661.MsgCreateClass;
            };
            MsgCreateClassResponse: {
                encode(message: _661.MsgCreateClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _661.MsgCreateClassResponse;
                fromJSON(object: any): _661.MsgCreateClassResponse;
                toJSON(message: _661.MsgCreateClassResponse): unknown;
                fromPartial(object: {
                    classId?: string;
                }): _661.MsgCreateClassResponse;
            };
            MsgCreateBatch: {
                encode(message: _661.MsgCreateBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _661.MsgCreateBatch;
                fromJSON(object: any): _661.MsgCreateBatch;
                toJSON(message: _661.MsgCreateBatch): unknown;
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
                }): _661.MsgCreateBatch;
            };
            MsgCreateBatch_BatchIssuance: {
                encode(message: _661.MsgCreateBatch_BatchIssuance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _661.MsgCreateBatch_BatchIssuance;
                fromJSON(object: any): _661.MsgCreateBatch_BatchIssuance;
                toJSON(message: _661.MsgCreateBatch_BatchIssuance): unknown;
                fromPartial(object: {
                    recipient?: string;
                    tradableAmount?: string;
                    retiredAmount?: string;
                    retirementLocation?: string;
                }): _661.MsgCreateBatch_BatchIssuance;
            };
            MsgCreateBatchResponse: {
                encode(message: _661.MsgCreateBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _661.MsgCreateBatchResponse;
                fromJSON(object: any): _661.MsgCreateBatchResponse;
                toJSON(message: _661.MsgCreateBatchResponse): unknown;
                fromPartial(object: {
                    batchDenom?: string;
                }): _661.MsgCreateBatchResponse;
            };
            MsgSend: {
                encode(message: _661.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _661.MsgSend;
                fromJSON(object: any): _661.MsgSend;
                toJSON(message: _661.MsgSend): unknown;
                fromPartial(object: {
                    sender?: string;
                    recipient?: string;
                    credits?: {
                        batchDenom?: string;
                        tradableAmount?: string;
                        retiredAmount?: string;
                        retirementLocation?: string;
                    }[];
                }): _661.MsgSend;
            };
            MsgSend_SendCredits: {
                encode(message: _661.MsgSend_SendCredits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _661.MsgSend_SendCredits;
                fromJSON(object: any): _661.MsgSend_SendCredits;
                toJSON(message: _661.MsgSend_SendCredits): unknown;
                fromPartial(object: {
                    batchDenom?: string;
                    tradableAmount?: string;
                    retiredAmount?: string;
                    retirementLocation?: string;
                }): _661.MsgSend_SendCredits;
            };
            MsgSendResponse: {
                encode(_: _661.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _661.MsgSendResponse;
                fromJSON(_: any): _661.MsgSendResponse;
                toJSON(_: _661.MsgSendResponse): unknown;
                fromPartial(_: {}): _661.MsgSendResponse;
            };
            MsgRetire: {
                encode(message: _661.MsgRetire, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _661.MsgRetire;
                fromJSON(object: any): _661.MsgRetire;
                toJSON(message: _661.MsgRetire): unknown;
                fromPartial(object: {
                    holder?: string;
                    credits?: {
                        batchDenom?: string;
                        amount?: string;
                    }[];
                    location?: string;
                }): _661.MsgRetire;
            };
            MsgRetire_RetireCredits: {
                encode(message: _661.MsgRetire_RetireCredits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _661.MsgRetire_RetireCredits;
                fromJSON(object: any): _661.MsgRetire_RetireCredits;
                toJSON(message: _661.MsgRetire_RetireCredits): unknown;
                fromPartial(object: {
                    batchDenom?: string;
                    amount?: string;
                }): _661.MsgRetire_RetireCredits;
            };
            MsgRetireResponse: {
                encode(_: _661.MsgRetireResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _661.MsgRetireResponse;
                fromJSON(_: any): _661.MsgRetireResponse;
                toJSON(_: _661.MsgRetireResponse): unknown;
                fromPartial(_: {}): _661.MsgRetireResponse;
            };
            MsgCancel: {
                encode(message: _661.MsgCancel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _661.MsgCancel;
                fromJSON(object: any): _661.MsgCancel;
                toJSON(message: _661.MsgCancel): unknown;
                fromPartial(object: {
                    holder?: string;
                    credits?: {
                        batchDenom?: string;
                        amount?: string;
                    }[];
                }): _661.MsgCancel;
            };
            MsgCancel_CancelCredits: {
                encode(message: _661.MsgCancel_CancelCredits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _661.MsgCancel_CancelCredits;
                fromJSON(object: any): _661.MsgCancel_CancelCredits;
                toJSON(message: _661.MsgCancel_CancelCredits): unknown;
                fromPartial(object: {
                    batchDenom?: string;
                    amount?: string;
                }): _661.MsgCancel_CancelCredits;
            };
            MsgCancelResponse: {
                encode(_: _661.MsgCancelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _661.MsgCancelResponse;
                fromJSON(_: any): _661.MsgCancelResponse;
                toJSON(_: _661.MsgCancelResponse): unknown;
                fromPartial(_: {}): _661.MsgCancelResponse;
            };
            MsgUpdateClassAdmin: {
                encode(message: _661.MsgUpdateClassAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _661.MsgUpdateClassAdmin;
                fromJSON(object: any): _661.MsgUpdateClassAdmin;
                toJSON(message: _661.MsgUpdateClassAdmin): unknown;
                fromPartial(object: {
                    admin?: string;
                    classId?: string;
                    newAdmin?: string;
                }): _661.MsgUpdateClassAdmin;
            };
            MsgUpdateClassAdminResponse: {
                encode(_: _661.MsgUpdateClassAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _661.MsgUpdateClassAdminResponse;
                fromJSON(_: any): _661.MsgUpdateClassAdminResponse;
                toJSON(_: _661.MsgUpdateClassAdminResponse): unknown;
                fromPartial(_: {}): _661.MsgUpdateClassAdminResponse;
            };
            MsgUpdateClassIssuers: {
                encode(message: _661.MsgUpdateClassIssuers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _661.MsgUpdateClassIssuers;
                fromJSON(object: any): _661.MsgUpdateClassIssuers;
                toJSON(message: _661.MsgUpdateClassIssuers): unknown;
                fromPartial(object: {
                    admin?: string;
                    classId?: string;
                    issuers?: string[];
                }): _661.MsgUpdateClassIssuers;
            };
            MsgUpdateClassIssuersResponse: {
                encode(_: _661.MsgUpdateClassIssuersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _661.MsgUpdateClassIssuersResponse;
                fromJSON(_: any): _661.MsgUpdateClassIssuersResponse;
                toJSON(_: _661.MsgUpdateClassIssuersResponse): unknown;
                fromPartial(_: {}): _661.MsgUpdateClassIssuersResponse;
            };
            MsgUpdateClassMetadata: {
                encode(message: _661.MsgUpdateClassMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _661.MsgUpdateClassMetadata;
                fromJSON(object: any): _661.MsgUpdateClassMetadata;
                toJSON(message: _661.MsgUpdateClassMetadata): unknown;
                fromPartial(object: {
                    admin?: string;
                    classId?: string;
                    metadata?: Uint8Array;
                }): _661.MsgUpdateClassMetadata;
            };
            MsgUpdateClassMetadataResponse: {
                encode(_: _661.MsgUpdateClassMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _661.MsgUpdateClassMetadataResponse;
                fromJSON(_: any): _661.MsgUpdateClassMetadataResponse;
                toJSON(_: _661.MsgUpdateClassMetadataResponse): unknown;
                fromPartial(_: {}): _661.MsgUpdateClassMetadataResponse;
            };
            QueryParamsRequest: {
                encode(_: _660.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _660.QueryParamsRequest;
                fromJSON(_: any): _660.QueryParamsRequest;
                toJSON(_: _660.QueryParamsRequest): unknown;
                fromPartial(_: {}): _660.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _660.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _660.QueryParamsResponse;
                fromJSON(object: any): _660.QueryParamsResponse;
                toJSON(message: _660.QueryParamsResponse): unknown;
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
                }): _660.QueryParamsResponse;
            };
            QueryClassesRequest: {
                encode(message: _660.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _660.QueryClassesRequest;
                fromJSON(object: any): _660.QueryClassesRequest;
                toJSON(message: _660.QueryClassesRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _660.QueryClassesRequest;
            };
            QueryClassesResponse: {
                encode(message: _660.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _660.QueryClassesResponse;
                fromJSON(object: any): _660.QueryClassesResponse;
                toJSON(message: _660.QueryClassesResponse): unknown;
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
                }): _660.QueryClassesResponse;
            };
            QueryClassInfoRequest: {
                encode(message: _660.QueryClassInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _660.QueryClassInfoRequest;
                fromJSON(object: any): _660.QueryClassInfoRequest;
                toJSON(message: _660.QueryClassInfoRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                }): _660.QueryClassInfoRequest;
            };
            QueryClassInfoResponse: {
                encode(message: _660.QueryClassInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _660.QueryClassInfoResponse;
                fromJSON(object: any): _660.QueryClassInfoResponse;
                toJSON(message: _660.QueryClassInfoResponse): unknown;
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
                }): _660.QueryClassInfoResponse;
            };
            QueryBatchesRequest: {
                encode(message: _660.QueryBatchesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _660.QueryBatchesRequest;
                fromJSON(object: any): _660.QueryBatchesRequest;
                toJSON(message: _660.QueryBatchesRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _660.QueryBatchesRequest;
            };
            QueryBatchesResponse: {
                encode(message: _660.QueryBatchesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _660.QueryBatchesResponse;
                fromJSON(object: any): _660.QueryBatchesResponse;
                toJSON(message: _660.QueryBatchesResponse): unknown;
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
                }): _660.QueryBatchesResponse;
            };
            QueryBatchInfoRequest: {
                encode(message: _660.QueryBatchInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _660.QueryBatchInfoRequest;
                fromJSON(object: any): _660.QueryBatchInfoRequest;
                toJSON(message: _660.QueryBatchInfoRequest): unknown;
                fromPartial(object: {
                    batchDenom?: string;
                }): _660.QueryBatchInfoRequest;
            };
            QueryBatchInfoResponse: {
                encode(message: _660.QueryBatchInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _660.QueryBatchInfoResponse;
                fromJSON(object: any): _660.QueryBatchInfoResponse;
                toJSON(message: _660.QueryBatchInfoResponse): unknown;
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
                }): _660.QueryBatchInfoResponse;
            };
            QueryBalanceRequest: {
                encode(message: _660.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _660.QueryBalanceRequest;
                fromJSON(object: any): _660.QueryBalanceRequest;
                toJSON(message: _660.QueryBalanceRequest): unknown;
                fromPartial(object: {
                    account?: string;
                    batchDenom?: string;
                }): _660.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _660.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _660.QueryBalanceResponse;
                fromJSON(object: any): _660.QueryBalanceResponse;
                toJSON(message: _660.QueryBalanceResponse): unknown;
                fromPartial(object: {
                    tradableAmount?: string;
                    retiredAmount?: string;
                }): _660.QueryBalanceResponse;
            };
            QuerySupplyRequest: {
                encode(message: _660.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _660.QuerySupplyRequest;
                fromJSON(object: any): _660.QuerySupplyRequest;
                toJSON(message: _660.QuerySupplyRequest): unknown;
                fromPartial(object: {
                    batchDenom?: string;
                }): _660.QuerySupplyRequest;
            };
            QuerySupplyResponse: {
                encode(message: _660.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _660.QuerySupplyResponse;
                fromJSON(object: any): _660.QuerySupplyResponse;
                toJSON(message: _660.QuerySupplyResponse): unknown;
                fromPartial(object: {
                    tradableSupply?: string;
                    retiredSupply?: string;
                }): _660.QuerySupplyResponse;
            };
            QueryCreditTypesRequest: {
                encode(_: _660.QueryCreditTypesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _660.QueryCreditTypesRequest;
                fromJSON(_: any): _660.QueryCreditTypesRequest;
                toJSON(_: _660.QueryCreditTypesRequest): unknown;
                fromPartial(_: {}): _660.QueryCreditTypesRequest;
            };
            QueryCreditTypesResponse: {
                encode(message: _660.QueryCreditTypesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _660.QueryCreditTypesResponse;
                fromJSON(object: any): _660.QueryCreditTypesResponse;
                toJSON(message: _660.QueryCreditTypesResponse): unknown;
                fromPartial(object: {
                    creditTypes?: {
                        name?: string;
                        abbreviation?: string;
                        unit?: string;
                        precision?: number;
                    }[];
                }): _660.QueryCreditTypesResponse;
            };
            GenesisState: {
                encode(message: _659.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _659.GenesisState;
                fromJSON(object: any): _659.GenesisState;
                toJSON(message: _659.GenesisState): unknown;
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
                }): _659.GenesisState;
            };
            Balance: {
                encode(message: _659.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _659.Balance;
                fromJSON(object: any): _659.Balance;
                toJSON(message: _659.Balance): unknown;
                fromPartial(object: {
                    address?: string;
                    batchDenom?: string;
                    tradableBalance?: string;
                    retiredBalance?: string;
                }): _659.Balance;
            };
            Supply: {
                encode(message: _659.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _659.Supply;
                fromJSON(object: any): _659.Supply;
                toJSON(message: _659.Supply): unknown;
                fromPartial(object: {
                    batchDenom?: string;
                    tradableSupply?: string;
                    retiredSupply?: string;
                }): _659.Supply;
            };
            EventCreateClass: {
                encode(message: _658.EventCreateClass, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _658.EventCreateClass;
                fromJSON(object: any): _658.EventCreateClass;
                toJSON(message: _658.EventCreateClass): unknown;
                fromPartial(object: {
                    classId?: string;
                    admin?: string;
                }): _658.EventCreateClass;
            };
            EventCreateBatch: {
                encode(message: _658.EventCreateBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _658.EventCreateBatch;
                fromJSON(object: any): _658.EventCreateBatch;
                toJSON(message: _658.EventCreateBatch): unknown;
                fromPartial(object: {
                    classId?: string;
                    batchDenom?: string;
                    issuer?: string;
                    totalAmount?: string;
                    startDate?: string;
                    endDate?: string;
                    projectLocation?: string;
                }): _658.EventCreateBatch;
            };
            EventReceive: {
                encode(message: _658.EventReceive, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _658.EventReceive;
                fromJSON(object: any): _658.EventReceive;
                toJSON(message: _658.EventReceive): unknown;
                fromPartial(object: {
                    sender?: string;
                    recipient?: string;
                    batchDenom?: string;
                    tradableAmount?: string;
                    retiredAmount?: string;
                    basketDenom?: string;
                }): _658.EventReceive;
            };
            EventRetire: {
                encode(message: _658.EventRetire, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _658.EventRetire;
                fromJSON(object: any): _658.EventRetire;
                toJSON(message: _658.EventRetire): unknown;
                fromPartial(object: {
                    retirer?: string;
                    batchDenom?: string;
                    amount?: string;
                    location?: string;
                }): _658.EventRetire;
            };
            EventCancel: {
                encode(message: _658.EventCancel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _658.EventCancel;
                fromJSON(object: any): _658.EventCancel;
                toJSON(message: _658.EventCancel): unknown;
                fromPartial(object: {
                    canceller?: string;
                    batchDenom?: string;
                    amount?: string;
                }): _658.EventCancel;
            };
        };
    }
    namespace group {
        const v1alpha1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _666.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _666.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _666.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _666.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupAccount(value: _666.MsgCreateGroupAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAccountAdmin(value: _666.MsgUpdateGroupAccountAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAccountDecisionPolicy(value: _666.MsgUpdateGroupAccountDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAccountMetadata(value: _666.MsgUpdateGroupAccountMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createProposal(value: _666.MsgCreateProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _666.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _666.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _666.MsgCreateGroup): {
                        typeUrl: string;
                        value: _666.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _666.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _666.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _666.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _666.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _666.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _666.MsgUpdateGroupMetadata;
                    };
                    createGroupAccount(value: _666.MsgCreateGroupAccount): {
                        typeUrl: string;
                        value: _666.MsgCreateGroupAccount;
                    };
                    updateGroupAccountAdmin(value: _666.MsgUpdateGroupAccountAdmin): {
                        typeUrl: string;
                        value: _666.MsgUpdateGroupAccountAdmin;
                    };
                    updateGroupAccountDecisionPolicy(value: _666.MsgUpdateGroupAccountDecisionPolicy): {
                        typeUrl: string;
                        value: _666.MsgUpdateGroupAccountDecisionPolicy;
                    };
                    updateGroupAccountMetadata(value: _666.MsgUpdateGroupAccountMetadata): {
                        typeUrl: string;
                        value: _666.MsgUpdateGroupAccountMetadata;
                    };
                    createProposal(value: _666.MsgCreateProposal): {
                        typeUrl: string;
                        value: _666.MsgCreateProposal;
                    };
                    vote(value: _666.MsgVote): {
                        typeUrl: string;
                        value: _666.MsgVote;
                    };
                    exec(value: _666.MsgExec): {
                        typeUrl: string;
                        value: _666.MsgExec;
                    };
                };
                toJSON: {
                    createGroup(value: _666.MsgCreateGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupMembers(value: _666.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupAdmin(value: _666.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupMetadata(value: _666.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createGroupAccount(value: _666.MsgCreateGroupAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupAccountAdmin(value: _666.MsgUpdateGroupAccountAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupAccountDecisionPolicy(value: _666.MsgUpdateGroupAccountDecisionPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupAccountMetadata(value: _666.MsgUpdateGroupAccountMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createProposal(value: _666.MsgCreateProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _666.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exec(value: _666.MsgExec): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _666.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _666.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _666.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _666.MsgUpdateGroupMetadata;
                    };
                    createGroupAccount(value: any): {
                        typeUrl: string;
                        value: _666.MsgCreateGroupAccount;
                    };
                    updateGroupAccountAdmin(value: any): {
                        typeUrl: string;
                        value: _666.MsgUpdateGroupAccountAdmin;
                    };
                    updateGroupAccountDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _666.MsgUpdateGroupAccountDecisionPolicy;
                    };
                    updateGroupAccountMetadata(value: any): {
                        typeUrl: string;
                        value: _666.MsgUpdateGroupAccountMetadata;
                    };
                    createProposal(value: any): {
                        typeUrl: string;
                        value: _666.MsgCreateProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _666.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _666.MsgExec;
                    };
                };
                fromPartial: {
                    createGroup(value: _666.MsgCreateGroup): {
                        typeUrl: string;
                        value: _666.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _666.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _666.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _666.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _666.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _666.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _666.MsgUpdateGroupMetadata;
                    };
                    createGroupAccount(value: _666.MsgCreateGroupAccount): {
                        typeUrl: string;
                        value: _666.MsgCreateGroupAccount;
                    };
                    updateGroupAccountAdmin(value: _666.MsgUpdateGroupAccountAdmin): {
                        typeUrl: string;
                        value: _666.MsgUpdateGroupAccountAdmin;
                    };
                    updateGroupAccountDecisionPolicy(value: _666.MsgUpdateGroupAccountDecisionPolicy): {
                        typeUrl: string;
                        value: _666.MsgUpdateGroupAccountDecisionPolicy;
                    };
                    updateGroupAccountMetadata(value: _666.MsgUpdateGroupAccountMetadata): {
                        typeUrl: string;
                        value: _666.MsgUpdateGroupAccountMetadata;
                    };
                    createProposal(value: _666.MsgCreateProposal): {
                        typeUrl: string;
                        value: _666.MsgCreateProposal;
                    };
                    vote(value: _666.MsgVote): {
                        typeUrl: string;
                        value: _666.MsgVote;
                    };
                    exec(value: _666.MsgExec): {
                        typeUrl: string;
                        value: _666.MsgExec;
                    };
                };
            };
            AminoConverter: {
                "/regen.group.v1alpha1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: ({ admin, members, metadata }: _666.MsgCreateGroup) => {
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
                    }) => _666.MsgCreateGroup;
                };
                "/regen.group.v1alpha1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, memberUpdates }: _666.MsgUpdateGroupMembers) => {
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
                    }) => _666.MsgUpdateGroupMembers;
                };
                "/regen.group.v1alpha1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, newAdmin }: _666.MsgUpdateGroupAdmin) => {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, group_id, new_admin }: {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    }) => _666.MsgUpdateGroupAdmin;
                };
                "/regen.group.v1alpha1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata }: _666.MsgUpdateGroupMetadata) => {
                        admin: string;
                        group_id: string;
                        metadata: Uint8Array;
                    };
                    fromAmino: ({ admin, group_id, metadata }: {
                        admin: string;
                        group_id: string;
                        metadata: Uint8Array;
                    }) => _666.MsgUpdateGroupMetadata;
                };
                "/regen.group.v1alpha1.MsgCreateGroupAccount": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata, decisionPolicy }: _666.MsgCreateGroupAccount) => {
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
                    }) => _666.MsgCreateGroupAccount;
                };
                "/regen.group.v1alpha1.MsgUpdateGroupAccountAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, address, newAdmin }: _666.MsgUpdateGroupAccountAdmin) => {
                        admin: string;
                        address: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, address, new_admin }: {
                        admin: string;
                        address: string;
                        new_admin: string;
                    }) => _666.MsgUpdateGroupAccountAdmin;
                };
                "/regen.group.v1alpha1.MsgUpdateGroupAccountDecisionPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, address, decisionPolicy }: _666.MsgUpdateGroupAccountDecisionPolicy) => {
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
                    }) => _666.MsgUpdateGroupAccountDecisionPolicy;
                };
                "/regen.group.v1alpha1.MsgUpdateGroupAccountMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, address, metadata }: _666.MsgUpdateGroupAccountMetadata) => {
                        admin: string;
                        address: string;
                        metadata: Uint8Array;
                    };
                    fromAmino: ({ admin, address, metadata }: {
                        admin: string;
                        address: string;
                        metadata: Uint8Array;
                    }) => _666.MsgUpdateGroupAccountMetadata;
                };
                "/regen.group.v1alpha1.MsgCreateProposal": {
                    aminoType: string;
                    toAmino: ({ address, proposers, metadata, msgs, exec }: _666.MsgCreateProposal) => {
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
                    }) => _666.MsgCreateProposal;
                };
                "/regen.group.v1alpha1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, choice, metadata, exec }: _666.MsgVote) => {
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
                    }) => _666.MsgVote;
                };
                "/regen.group.v1alpha1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ proposalId, signer }: _666.MsgExec) => {
                        proposal_id: string;
                        signer: string;
                    };
                    fromAmino: ({ proposal_id, signer }: {
                        proposal_id: string;
                        signer: string;
                    }) => _666.MsgExec;
                };
            };
            choiceFromJSON(object: any): _667.Choice;
            choiceToJSON(object: _667.Choice): string;
            proposal_StatusFromJSON(object: any): _667.Proposal_Status;
            proposal_StatusToJSON(object: _667.Proposal_Status): string;
            proposal_ResultFromJSON(object: any): _667.Proposal_Result;
            proposal_ResultToJSON(object: _667.Proposal_Result): string;
            proposal_ExecutorResultFromJSON(object: any): _667.Proposal_ExecutorResult;
            proposal_ExecutorResultToJSON(object: _667.Proposal_ExecutorResult): string;
            Choice: typeof _667.Choice;
            Proposal_Status: typeof _667.Proposal_Status;
            Proposal_Result: typeof _667.Proposal_Result;
            Proposal_ExecutorResult: typeof _667.Proposal_ExecutorResult;
            Member: {
                encode(message: _667.Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _667.Member;
                fromJSON(object: any): _667.Member;
                toJSON(message: _667.Member): unknown;
                fromPartial(object: {
                    address?: string;
                    weight?: string;
                    metadata?: Uint8Array;
                }): _667.Member;
            };
            Members: {
                encode(message: _667.Members, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _667.Members;
                fromJSON(object: any): _667.Members;
                toJSON(message: _667.Members): unknown;
                fromPartial(object: {
                    members?: {
                        address?: string;
                        weight?: string;
                        metadata?: Uint8Array;
                    }[];
                }): _667.Members;
            };
            ThresholdDecisionPolicy: {
                encode(message: _667.ThresholdDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _667.ThresholdDecisionPolicy;
                fromJSON(object: any): _667.ThresholdDecisionPolicy;
                toJSON(message: _667.ThresholdDecisionPolicy): unknown;
                fromPartial(object: {
                    threshold?: string;
                    timeout?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _667.ThresholdDecisionPolicy;
            };
            GroupInfo: {
                encode(message: _667.GroupInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _667.GroupInfo;
                fromJSON(object: any): _667.GroupInfo;
                toJSON(message: _667.GroupInfo): unknown;
                fromPartial(object: {
                    groupId?: any;
                    admin?: string;
                    metadata?: Uint8Array;
                    version?: any;
                    totalWeight?: string;
                }): _667.GroupInfo;
            };
            GroupMember: {
                encode(message: _667.GroupMember, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _667.GroupMember;
                fromJSON(object: any): _667.GroupMember;
                toJSON(message: _667.GroupMember): unknown;
                fromPartial(object: {
                    groupId?: any;
                    member?: {
                        address?: string;
                        weight?: string;
                        metadata?: Uint8Array;
                    };
                }): _667.GroupMember;
            };
            GroupAccountInfo: {
                encode(message: _667.GroupAccountInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _667.GroupAccountInfo;
                fromJSON(object: any): _667.GroupAccountInfo;
                toJSON(message: _667.GroupAccountInfo): unknown;
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
                }): _667.GroupAccountInfo;
            };
            Proposal: {
                encode(message: _667.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _667.Proposal;
                fromJSON(object: any): _667.Proposal;
                toJSON(message: _667.Proposal): unknown;
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
                    status?: _667.Proposal_Status;
                    result?: _667.Proposal_Result;
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
                    executorResult?: _667.Proposal_ExecutorResult;
                    msgs?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _667.Proposal;
            };
            Tally: {
                encode(message: _667.Tally, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _667.Tally;
                fromJSON(object: any): _667.Tally;
                toJSON(message: _667.Tally): unknown;
                fromPartial(object: {
                    yesCount?: string;
                    noCount?: string;
                    abstainCount?: string;
                    vetoCount?: string;
                }): _667.Tally;
            };
            Vote: {
                encode(message: _667.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _667.Vote;
                fromJSON(object: any): _667.Vote;
                toJSON(message: _667.Vote): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    choice?: _667.Choice;
                    metadata?: Uint8Array;
                    submittedAt?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _667.Vote;
            };
            execFromJSON(object: any): _666.Exec;
            execToJSON(object: _666.Exec): string;
            Exec: typeof _666.Exec;
            MsgCreateGroup: {
                encode(message: _666.MsgCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _666.MsgCreateGroup;
                fromJSON(object: any): _666.MsgCreateGroup;
                toJSON(message: _666.MsgCreateGroup): unknown;
                fromPartial(object: {
                    admin?: string;
                    members?: {
                        address?: string;
                        weight?: string;
                        metadata?: Uint8Array;
                    }[];
                    metadata?: Uint8Array;
                }): _666.MsgCreateGroup;
            };
            MsgCreateGroupResponse: {
                encode(message: _666.MsgCreateGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _666.MsgCreateGroupResponse;
                fromJSON(object: any): _666.MsgCreateGroupResponse;
                toJSON(message: _666.MsgCreateGroupResponse): unknown;
                fromPartial(object: {
                    groupId?: any;
                }): _666.MsgCreateGroupResponse;
            };
            MsgUpdateGroupMembers: {
                encode(message: _666.MsgUpdateGroupMembers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _666.MsgUpdateGroupMembers;
                fromJSON(object: any): _666.MsgUpdateGroupMembers;
                toJSON(message: _666.MsgUpdateGroupMembers): unknown;
                fromPartial(object: {
                    admin?: string;
                    groupId?: any;
                    memberUpdates?: {
                        address?: string;
                        weight?: string;
                        metadata?: Uint8Array;
                    }[];
                }): _666.MsgUpdateGroupMembers;
            };
            MsgUpdateGroupMembersResponse: {
                encode(_: _666.MsgUpdateGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _666.MsgUpdateGroupMembersResponse;
                fromJSON(_: any): _666.MsgUpdateGroupMembersResponse;
                toJSON(_: _666.MsgUpdateGroupMembersResponse): unknown;
                fromPartial(_: {}): _666.MsgUpdateGroupMembersResponse;
            };
            MsgUpdateGroupAdmin: {
                encode(message: _666.MsgUpdateGroupAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _666.MsgUpdateGroupAdmin;
                fromJSON(object: any): _666.MsgUpdateGroupAdmin;
                toJSON(message: _666.MsgUpdateGroupAdmin): unknown;
                fromPartial(object: {
                    admin?: string;
                    groupId?: any;
                    newAdmin?: string;
                }): _666.MsgUpdateGroupAdmin;
            };
            MsgUpdateGroupAdminResponse: {
                encode(_: _666.MsgUpdateGroupAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _666.MsgUpdateGroupAdminResponse;
                fromJSON(_: any): _666.MsgUpdateGroupAdminResponse;
                toJSON(_: _666.MsgUpdateGroupAdminResponse): unknown;
                fromPartial(_: {}): _666.MsgUpdateGroupAdminResponse;
            };
            MsgUpdateGroupMetadata: {
                encode(message: _666.MsgUpdateGroupMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _666.MsgUpdateGroupMetadata;
                fromJSON(object: any): _666.MsgUpdateGroupMetadata;
                toJSON(message: _666.MsgUpdateGroupMetadata): unknown;
                fromPartial(object: {
                    admin?: string;
                    groupId?: any;
                    metadata?: Uint8Array;
                }): _666.MsgUpdateGroupMetadata;
            };
            MsgUpdateGroupMetadataResponse: {
                encode(_: _666.MsgUpdateGroupMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _666.MsgUpdateGroupMetadataResponse;
                fromJSON(_: any): _666.MsgUpdateGroupMetadataResponse;
                toJSON(_: _666.MsgUpdateGroupMetadataResponse): unknown;
                fromPartial(_: {}): _666.MsgUpdateGroupMetadataResponse;
            };
            MsgCreateGroupAccount: {
                encode(message: _666.MsgCreateGroupAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _666.MsgCreateGroupAccount;
                fromJSON(object: any): _666.MsgCreateGroupAccount;
                toJSON(message: _666.MsgCreateGroupAccount): unknown;
                fromPartial(object: {
                    admin?: string;
                    groupId?: any;
                    metadata?: Uint8Array;
                    decisionPolicy?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _666.MsgCreateGroupAccount;
            };
            MsgCreateGroupAccountResponse: {
                encode(message: _666.MsgCreateGroupAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _666.MsgCreateGroupAccountResponse;
                fromJSON(object: any): _666.MsgCreateGroupAccountResponse;
                toJSON(message: _666.MsgCreateGroupAccountResponse): unknown;
                fromPartial(object: {
                    address?: string;
                }): _666.MsgCreateGroupAccountResponse;
            };
            MsgUpdateGroupAccountAdmin: {
                encode(message: _666.MsgUpdateGroupAccountAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _666.MsgUpdateGroupAccountAdmin;
                fromJSON(object: any): _666.MsgUpdateGroupAccountAdmin;
                toJSON(message: _666.MsgUpdateGroupAccountAdmin): unknown;
                fromPartial(object: {
                    admin?: string;
                    address?: string;
                    newAdmin?: string;
                }): _666.MsgUpdateGroupAccountAdmin;
            };
            MsgUpdateGroupAccountAdminResponse: {
                encode(_: _666.MsgUpdateGroupAccountAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _666.MsgUpdateGroupAccountAdminResponse;
                fromJSON(_: any): _666.MsgUpdateGroupAccountAdminResponse;
                toJSON(_: _666.MsgUpdateGroupAccountAdminResponse): unknown;
                fromPartial(_: {}): _666.MsgUpdateGroupAccountAdminResponse;
            };
            MsgUpdateGroupAccountDecisionPolicy: {
                encode(message: _666.MsgUpdateGroupAccountDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _666.MsgUpdateGroupAccountDecisionPolicy;
                fromJSON(object: any): _666.MsgUpdateGroupAccountDecisionPolicy;
                toJSON(message: _666.MsgUpdateGroupAccountDecisionPolicy): unknown;
                fromPartial(object: {
                    admin?: string;
                    address?: string;
                    decisionPolicy?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _666.MsgUpdateGroupAccountDecisionPolicy;
            };
            MsgUpdateGroupAccountDecisionPolicyResponse: {
                encode(_: _666.MsgUpdateGroupAccountDecisionPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _666.MsgUpdateGroupAccountDecisionPolicyResponse;
                fromJSON(_: any): _666.MsgUpdateGroupAccountDecisionPolicyResponse;
                toJSON(_: _666.MsgUpdateGroupAccountDecisionPolicyResponse): unknown;
                fromPartial(_: {}): _666.MsgUpdateGroupAccountDecisionPolicyResponse;
            };
            MsgUpdateGroupAccountMetadata: {
                encode(message: _666.MsgUpdateGroupAccountMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _666.MsgUpdateGroupAccountMetadata;
                fromJSON(object: any): _666.MsgUpdateGroupAccountMetadata;
                toJSON(message: _666.MsgUpdateGroupAccountMetadata): unknown;
                fromPartial(object: {
                    admin?: string;
                    address?: string;
                    metadata?: Uint8Array;
                }): _666.MsgUpdateGroupAccountMetadata;
            };
            MsgUpdateGroupAccountMetadataResponse: {
                encode(_: _666.MsgUpdateGroupAccountMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _666.MsgUpdateGroupAccountMetadataResponse;
                fromJSON(_: any): _666.MsgUpdateGroupAccountMetadataResponse;
                toJSON(_: _666.MsgUpdateGroupAccountMetadataResponse): unknown;
                fromPartial(_: {}): _666.MsgUpdateGroupAccountMetadataResponse;
            };
            MsgCreateProposal: {
                encode(message: _666.MsgCreateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _666.MsgCreateProposal;
                fromJSON(object: any): _666.MsgCreateProposal;
                toJSON(message: _666.MsgCreateProposal): unknown;
                fromPartial(object: {
                    address?: string;
                    proposers?: string[];
                    metadata?: Uint8Array;
                    msgs?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    exec?: _666.Exec;
                }): _666.MsgCreateProposal;
            };
            MsgCreateProposalResponse: {
                encode(message: _666.MsgCreateProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _666.MsgCreateProposalResponse;
                fromJSON(object: any): _666.MsgCreateProposalResponse;
                toJSON(message: _666.MsgCreateProposalResponse): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _666.MsgCreateProposalResponse;
            };
            MsgVote: {
                encode(message: _666.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _666.MsgVote;
                fromJSON(object: any): _666.MsgVote;
                toJSON(message: _666.MsgVote): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    choice?: _667.Choice;
                    metadata?: Uint8Array;
                    exec?: _666.Exec;
                }): _666.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _666.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _666.MsgVoteResponse;
                fromJSON(_: any): _666.MsgVoteResponse;
                toJSON(_: _666.MsgVoteResponse): unknown;
                fromPartial(_: {}): _666.MsgVoteResponse;
            };
            MsgExec: {
                encode(message: _666.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _666.MsgExec;
                fromJSON(object: any): _666.MsgExec;
                toJSON(message: _666.MsgExec): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    signer?: string;
                }): _666.MsgExec;
            };
            MsgExecResponse: {
                encode(_: _666.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _666.MsgExecResponse;
                fromJSON(_: any): _666.MsgExecResponse;
                toJSON(_: _666.MsgExecResponse): unknown;
                fromPartial(_: {}): _666.MsgExecResponse;
            };
            QueryGroupInfoRequest: {
                encode(message: _665.QueryGroupInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _665.QueryGroupInfoRequest;
                fromJSON(object: any): _665.QueryGroupInfoRequest;
                toJSON(message: _665.QueryGroupInfoRequest): unknown;
                fromPartial(object: {
                    groupId?: any;
                }): _665.QueryGroupInfoRequest;
            };
            QueryGroupInfoResponse: {
                encode(message: _665.QueryGroupInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _665.QueryGroupInfoResponse;
                fromJSON(object: any): _665.QueryGroupInfoResponse;
                toJSON(message: _665.QueryGroupInfoResponse): unknown;
                fromPartial(object: {
                    info?: {
                        groupId?: any;
                        admin?: string;
                        metadata?: Uint8Array;
                        version?: any;
                        totalWeight?: string;
                    };
                }): _665.QueryGroupInfoResponse;
            };
            QueryGroupAccountInfoRequest: {
                encode(message: _665.QueryGroupAccountInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _665.QueryGroupAccountInfoRequest;
                fromJSON(object: any): _665.QueryGroupAccountInfoRequest;
                toJSON(message: _665.QueryGroupAccountInfoRequest): unknown;
                fromPartial(object: {
                    address?: string;
                }): _665.QueryGroupAccountInfoRequest;
            };
            QueryGroupAccountInfoResponse: {
                encode(message: _665.QueryGroupAccountInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _665.QueryGroupAccountInfoResponse;
                fromJSON(object: any): _665.QueryGroupAccountInfoResponse;
                toJSON(message: _665.QueryGroupAccountInfoResponse): unknown;
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
                }): _665.QueryGroupAccountInfoResponse;
            };
            QueryGroupMembersRequest: {
                encode(message: _665.QueryGroupMembersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _665.QueryGroupMembersRequest;
                fromJSON(object: any): _665.QueryGroupMembersRequest;
                toJSON(message: _665.QueryGroupMembersRequest): unknown;
                fromPartial(object: {
                    groupId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _665.QueryGroupMembersRequest;
            };
            QueryGroupMembersResponse: {
                encode(message: _665.QueryGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _665.QueryGroupMembersResponse;
                fromJSON(object: any): _665.QueryGroupMembersResponse;
                toJSON(message: _665.QueryGroupMembersResponse): unknown;
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
                }): _665.QueryGroupMembersResponse;
            };
            QueryGroupsByAdminRequest: {
                encode(message: _665.QueryGroupsByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _665.QueryGroupsByAdminRequest;
                fromJSON(object: any): _665.QueryGroupsByAdminRequest;
                toJSON(message: _665.QueryGroupsByAdminRequest): unknown;
                fromPartial(object: {
                    admin?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _665.QueryGroupsByAdminRequest;
            };
            QueryGroupsByAdminResponse: {
                encode(message: _665.QueryGroupsByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _665.QueryGroupsByAdminResponse;
                fromJSON(object: any): _665.QueryGroupsByAdminResponse;
                toJSON(message: _665.QueryGroupsByAdminResponse): unknown;
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
                }): _665.QueryGroupsByAdminResponse;
            };
            QueryGroupAccountsByGroupRequest: {
                encode(message: _665.QueryGroupAccountsByGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _665.QueryGroupAccountsByGroupRequest;
                fromJSON(object: any): _665.QueryGroupAccountsByGroupRequest;
                toJSON(message: _665.QueryGroupAccountsByGroupRequest): unknown;
                fromPartial(object: {
                    groupId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _665.QueryGroupAccountsByGroupRequest;
            };
            QueryGroupAccountsByGroupResponse: {
                encode(message: _665.QueryGroupAccountsByGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _665.QueryGroupAccountsByGroupResponse;
                fromJSON(object: any): _665.QueryGroupAccountsByGroupResponse;
                toJSON(message: _665.QueryGroupAccountsByGroupResponse): unknown;
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
                }): _665.QueryGroupAccountsByGroupResponse;
            };
            QueryGroupAccountsByAdminRequest: {
                encode(message: _665.QueryGroupAccountsByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _665.QueryGroupAccountsByAdminRequest;
                fromJSON(object: any): _665.QueryGroupAccountsByAdminRequest;
                toJSON(message: _665.QueryGroupAccountsByAdminRequest): unknown;
                fromPartial(object: {
                    admin?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _665.QueryGroupAccountsByAdminRequest;
            };
            QueryGroupAccountsByAdminResponse: {
                encode(message: _665.QueryGroupAccountsByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _665.QueryGroupAccountsByAdminResponse;
                fromJSON(object: any): _665.QueryGroupAccountsByAdminResponse;
                toJSON(message: _665.QueryGroupAccountsByAdminResponse): unknown;
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
                }): _665.QueryGroupAccountsByAdminResponse;
            };
            QueryProposalRequest: {
                encode(message: _665.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _665.QueryProposalRequest;
                fromJSON(object: any): _665.QueryProposalRequest;
                toJSON(message: _665.QueryProposalRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _665.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _665.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _665.QueryProposalResponse;
                fromJSON(object: any): _665.QueryProposalResponse;
                toJSON(message: _665.QueryProposalResponse): unknown;
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
                        status?: _667.Proposal_Status;
                        result?: _667.Proposal_Result;
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
                        executorResult?: _667.Proposal_ExecutorResult;
                        msgs?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    };
                }): _665.QueryProposalResponse;
            };
            QueryProposalsByGroupAccountRequest: {
                encode(message: _665.QueryProposalsByGroupAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _665.QueryProposalsByGroupAccountRequest;
                fromJSON(object: any): _665.QueryProposalsByGroupAccountRequest;
                toJSON(message: _665.QueryProposalsByGroupAccountRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _665.QueryProposalsByGroupAccountRequest;
            };
            QueryProposalsByGroupAccountResponse: {
                encode(message: _665.QueryProposalsByGroupAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _665.QueryProposalsByGroupAccountResponse;
                fromJSON(object: any): _665.QueryProposalsByGroupAccountResponse;
                toJSON(message: _665.QueryProposalsByGroupAccountResponse): unknown;
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
                        status?: _667.Proposal_Status;
                        result?: _667.Proposal_Result;
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
                        executorResult?: _667.Proposal_ExecutorResult;
                        msgs?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _665.QueryProposalsByGroupAccountResponse;
            };
            QueryVoteByProposalVoterRequest: {
                encode(message: _665.QueryVoteByProposalVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _665.QueryVoteByProposalVoterRequest;
                fromJSON(object: any): _665.QueryVoteByProposalVoterRequest;
                toJSON(message: _665.QueryVoteByProposalVoterRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                }): _665.QueryVoteByProposalVoterRequest;
            };
            QueryVoteByProposalVoterResponse: {
                encode(message: _665.QueryVoteByProposalVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _665.QueryVoteByProposalVoterResponse;
                fromJSON(object: any): _665.QueryVoteByProposalVoterResponse;
                toJSON(message: _665.QueryVoteByProposalVoterResponse): unknown;
                fromPartial(object: {
                    vote?: {
                        proposalId?: any;
                        voter?: string;
                        choice?: _667.Choice;
                        metadata?: Uint8Array;
                        submittedAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                }): _665.QueryVoteByProposalVoterResponse;
            };
            QueryVotesByProposalRequest: {
                encode(message: _665.QueryVotesByProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _665.QueryVotesByProposalRequest;
                fromJSON(object: any): _665.QueryVotesByProposalRequest;
                toJSON(message: _665.QueryVotesByProposalRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _665.QueryVotesByProposalRequest;
            };
            QueryVotesByProposalResponse: {
                encode(message: _665.QueryVotesByProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _665.QueryVotesByProposalResponse;
                fromJSON(object: any): _665.QueryVotesByProposalResponse;
                toJSON(message: _665.QueryVotesByProposalResponse): unknown;
                fromPartial(object: {
                    votes?: {
                        proposalId?: any;
                        voter?: string;
                        choice?: _667.Choice;
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
                }): _665.QueryVotesByProposalResponse;
            };
            QueryVotesByVoterRequest: {
                encode(message: _665.QueryVotesByVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _665.QueryVotesByVoterRequest;
                fromJSON(object: any): _665.QueryVotesByVoterRequest;
                toJSON(message: _665.QueryVotesByVoterRequest): unknown;
                fromPartial(object: {
                    voter?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _665.QueryVotesByVoterRequest;
            };
            QueryVotesByVoterResponse: {
                encode(message: _665.QueryVotesByVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _665.QueryVotesByVoterResponse;
                fromJSON(object: any): _665.QueryVotesByVoterResponse;
                toJSON(message: _665.QueryVotesByVoterResponse): unknown;
                fromPartial(object: {
                    votes?: {
                        proposalId?: any;
                        voter?: string;
                        choice?: _667.Choice;
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
                }): _665.QueryVotesByVoterResponse;
            };
            GenesisState: {
                encode(message: _664.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _664.GenesisState;
                fromJSON(object: any): _664.GenesisState;
                toJSON(message: _664.GenesisState): unknown;
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
                        status?: _667.Proposal_Status;
                        result?: _667.Proposal_Result;
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
                        executorResult?: _667.Proposal_ExecutorResult;
                        msgs?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    }[];
                    votes?: {
                        proposalId?: any;
                        voter?: string;
                        choice?: _667.Choice;
                        metadata?: Uint8Array;
                        submittedAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                }): _664.GenesisState;
            };
            EventCreateGroup: {
                encode(message: _663.EventCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _663.EventCreateGroup;
                fromJSON(object: any): _663.EventCreateGroup;
                toJSON(message: _663.EventCreateGroup): unknown;
                fromPartial(object: {
                    groupId?: any;
                }): _663.EventCreateGroup;
            };
            EventUpdateGroup: {
                encode(message: _663.EventUpdateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _663.EventUpdateGroup;
                fromJSON(object: any): _663.EventUpdateGroup;
                toJSON(message: _663.EventUpdateGroup): unknown;
                fromPartial(object: {
                    groupId?: any;
                }): _663.EventUpdateGroup;
            };
            EventCreateGroupAccount: {
                encode(message: _663.EventCreateGroupAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _663.EventCreateGroupAccount;
                fromJSON(object: any): _663.EventCreateGroupAccount;
                toJSON(message: _663.EventCreateGroupAccount): unknown;
                fromPartial(object: {
                    address?: string;
                }): _663.EventCreateGroupAccount;
            };
            EventUpdateGroupAccount: {
                encode(message: _663.EventUpdateGroupAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _663.EventUpdateGroupAccount;
                fromJSON(object: any): _663.EventUpdateGroupAccount;
                toJSON(message: _663.EventUpdateGroupAccount): unknown;
                fromPartial(object: {
                    address?: string;
                }): _663.EventUpdateGroupAccount;
            };
            EventCreateProposal: {
                encode(message: _663.EventCreateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _663.EventCreateProposal;
                fromJSON(object: any): _663.EventCreateProposal;
                toJSON(message: _663.EventCreateProposal): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _663.EventCreateProposal;
            };
            EventVote: {
                encode(message: _663.EventVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _663.EventVote;
                fromJSON(object: any): _663.EventVote;
                toJSON(message: _663.EventVote): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _663.EventVote;
            };
            EventExec: {
                encode(message: _663.EventExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _663.EventExec;
                fromJSON(object: any): _663.EventExec;
                toJSON(message: _663.EventExec): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _663.EventExec;
            };
        };
    }
}
