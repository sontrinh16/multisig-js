import * as _154 from "../confio/proofs";
export declare const ics23: {
    hashOpFromJSON(object: any): _154.HashOp;
    hashOpToJSON(object: _154.HashOp): string;
    lengthOpFromJSON(object: any): _154.LengthOp;
    lengthOpToJSON(object: _154.LengthOp): string;
    HashOp: typeof _154.HashOp;
    LengthOp: typeof _154.LengthOp;
    ExistenceProof: {
        encode(message: _154.ExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.ExistenceProof;
        fromJSON(object: any): _154.ExistenceProof;
        toJSON(message: _154.ExistenceProof): unknown;
        fromPartial(object: {
            key?: Uint8Array;
            value?: Uint8Array;
            leaf?: {
                hash?: _154.HashOp;
                prehashKey?: _154.HashOp;
                prehashValue?: _154.HashOp;
                length?: _154.LengthOp;
                prefix?: Uint8Array;
            };
            path?: {
                hash?: _154.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            }[];
        }): _154.ExistenceProof;
    };
    NonExistenceProof: {
        encode(message: _154.NonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.NonExistenceProof;
        fromJSON(object: any): _154.NonExistenceProof;
        toJSON(message: _154.NonExistenceProof): unknown;
        fromPartial(object: {
            key?: Uint8Array;
            left?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _154.HashOp;
                    prehashKey?: _154.HashOp;
                    prehashValue?: _154.HashOp;
                    length?: _154.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _154.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
            right?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _154.HashOp;
                    prehashKey?: _154.HashOp;
                    prehashValue?: _154.HashOp;
                    length?: _154.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _154.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
        }): _154.NonExistenceProof;
    };
    CommitmentProof: {
        encode(message: _154.CommitmentProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.CommitmentProof;
        fromJSON(object: any): _154.CommitmentProof;
        toJSON(message: _154.CommitmentProof): unknown;
        fromPartial(object: {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _154.HashOp;
                    prehashKey?: _154.HashOp;
                    prehashValue?: _154.HashOp;
                    length?: _154.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _154.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
            nonexist?: {
                key?: Uint8Array;
                left?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _154.HashOp;
                        prehashKey?: _154.HashOp;
                        prehashValue?: _154.HashOp;
                        length?: _154.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _154.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _154.HashOp;
                        prehashKey?: _154.HashOp;
                        prehashValue?: _154.HashOp;
                        length?: _154.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _154.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
            };
            batch?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _154.HashOp;
                            prehashKey?: _154.HashOp;
                            prehashValue?: _154.HashOp;
                            length?: _154.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _154.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                    nonexist?: {
                        key?: Uint8Array;
                        left?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _154.HashOp;
                                prehashKey?: _154.HashOp;
                                prehashValue?: _154.HashOp;
                                length?: _154.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _154.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _154.HashOp;
                                prehashKey?: _154.HashOp;
                                prehashValue?: _154.HashOp;
                                length?: _154.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _154.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                    };
                }[];
            };
            compressed?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _154.HashOp;
                            prehashKey?: _154.HashOp;
                            prehashValue?: _154.HashOp;
                            length?: _154.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                    nonexist?: {
                        key?: Uint8Array;
                        left?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _154.HashOp;
                                prehashKey?: _154.HashOp;
                                prehashValue?: _154.HashOp;
                                length?: _154.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _154.HashOp;
                                prehashKey?: _154.HashOp;
                                prehashValue?: _154.HashOp;
                                length?: _154.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                    };
                }[];
                lookupInners?: {
                    hash?: _154.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
        }): _154.CommitmentProof;
    };
    LeafOp: {
        encode(message: _154.LeafOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.LeafOp;
        fromJSON(object: any): _154.LeafOp;
        toJSON(message: _154.LeafOp): unknown;
        fromPartial(object: {
            hash?: _154.HashOp;
            prehashKey?: _154.HashOp;
            prehashValue?: _154.HashOp;
            length?: _154.LengthOp;
            prefix?: Uint8Array;
        }): _154.LeafOp;
    };
    InnerOp: {
        encode(message: _154.InnerOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.InnerOp;
        fromJSON(object: any): _154.InnerOp;
        toJSON(message: _154.InnerOp): unknown;
        fromPartial(object: {
            hash?: _154.HashOp;
            prefix?: Uint8Array;
            suffix?: Uint8Array;
        }): _154.InnerOp;
    };
    ProofSpec: {
        encode(message: _154.ProofSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.ProofSpec;
        fromJSON(object: any): _154.ProofSpec;
        toJSON(message: _154.ProofSpec): unknown;
        fromPartial(object: {
            leafSpec?: {
                hash?: _154.HashOp;
                prehashKey?: _154.HashOp;
                prehashValue?: _154.HashOp;
                length?: _154.LengthOp;
                prefix?: Uint8Array;
            };
            innerSpec?: {
                childOrder?: number[];
                childSize?: number;
                minPrefixLength?: number;
                maxPrefixLength?: number;
                emptyChild?: Uint8Array;
                hash?: _154.HashOp;
            };
            maxDepth?: number;
            minDepth?: number;
        }): _154.ProofSpec;
    };
    InnerSpec: {
        encode(message: _154.InnerSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.InnerSpec;
        fromJSON(object: any): _154.InnerSpec;
        toJSON(message: _154.InnerSpec): unknown;
        fromPartial(object: {
            childOrder?: number[];
            childSize?: number;
            minPrefixLength?: number;
            maxPrefixLength?: number;
            emptyChild?: Uint8Array;
            hash?: _154.HashOp;
        }): _154.InnerSpec;
    };
    BatchProof: {
        encode(message: _154.BatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.BatchProof;
        fromJSON(object: any): _154.BatchProof;
        toJSON(message: _154.BatchProof): unknown;
        fromPartial(object: {
            entries?: {
                exist?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _154.HashOp;
                        prehashKey?: _154.HashOp;
                        prehashValue?: _154.HashOp;
                        length?: _154.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _154.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                nonexist?: {
                    key?: Uint8Array;
                    left?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _154.HashOp;
                            prehashKey?: _154.HashOp;
                            prehashValue?: _154.HashOp;
                            length?: _154.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _154.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _154.HashOp;
                            prehashKey?: _154.HashOp;
                            prehashValue?: _154.HashOp;
                            length?: _154.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _154.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                };
            }[];
        }): _154.BatchProof;
    };
    BatchEntry: {
        encode(message: _154.BatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.BatchEntry;
        fromJSON(object: any): _154.BatchEntry;
        toJSON(message: _154.BatchEntry): unknown;
        fromPartial(object: {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _154.HashOp;
                    prehashKey?: _154.HashOp;
                    prehashValue?: _154.HashOp;
                    length?: _154.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _154.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
            nonexist?: {
                key?: Uint8Array;
                left?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _154.HashOp;
                        prehashKey?: _154.HashOp;
                        prehashValue?: _154.HashOp;
                        length?: _154.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _154.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _154.HashOp;
                        prehashKey?: _154.HashOp;
                        prehashValue?: _154.HashOp;
                        length?: _154.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _154.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
            };
        }): _154.BatchEntry;
    };
    CompressedBatchProof: {
        encode(message: _154.CompressedBatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.CompressedBatchProof;
        fromJSON(object: any): _154.CompressedBatchProof;
        toJSON(message: _154.CompressedBatchProof): unknown;
        fromPartial(object: {
            entries?: {
                exist?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _154.HashOp;
                        prehashKey?: _154.HashOp;
                        prehashValue?: _154.HashOp;
                        length?: _154.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                };
                nonexist?: {
                    key?: Uint8Array;
                    left?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _154.HashOp;
                            prehashKey?: _154.HashOp;
                            prehashValue?: _154.HashOp;
                            length?: _154.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _154.HashOp;
                            prehashKey?: _154.HashOp;
                            prehashValue?: _154.HashOp;
                            length?: _154.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                };
            }[];
            lookupInners?: {
                hash?: _154.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            }[];
        }): _154.CompressedBatchProof;
    };
    CompressedBatchEntry: {
        encode(message: _154.CompressedBatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.CompressedBatchEntry;
        fromJSON(object: any): _154.CompressedBatchEntry;
        toJSON(message: _154.CompressedBatchEntry): unknown;
        fromPartial(object: {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _154.HashOp;
                    prehashKey?: _154.HashOp;
                    prehashValue?: _154.HashOp;
                    length?: _154.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: number[];
            };
            nonexist?: {
                key?: Uint8Array;
                left?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _154.HashOp;
                        prehashKey?: _154.HashOp;
                        prehashValue?: _154.HashOp;
                        length?: _154.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _154.HashOp;
                        prehashKey?: _154.HashOp;
                        prehashValue?: _154.HashOp;
                        length?: _154.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                };
            };
        }): _154.CompressedBatchEntry;
    };
    CompressedExistenceProof: {
        encode(message: _154.CompressedExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.CompressedExistenceProof;
        fromJSON(object: any): _154.CompressedExistenceProof;
        toJSON(message: _154.CompressedExistenceProof): unknown;
        fromPartial(object: {
            key?: Uint8Array;
            value?: Uint8Array;
            leaf?: {
                hash?: _154.HashOp;
                prehashKey?: _154.HashOp;
                prehashValue?: _154.HashOp;
                length?: _154.LengthOp;
                prefix?: Uint8Array;
            };
            path?: number[];
        }): _154.CompressedExistenceProof;
    };
    CompressedNonExistenceProof: {
        encode(message: _154.CompressedNonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.CompressedNonExistenceProof;
        fromJSON(object: any): _154.CompressedNonExistenceProof;
        toJSON(message: _154.CompressedNonExistenceProof): unknown;
        fromPartial(object: {
            key?: Uint8Array;
            left?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _154.HashOp;
                    prehashKey?: _154.HashOp;
                    prehashValue?: _154.HashOp;
                    length?: _154.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: number[];
            };
            right?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _154.HashOp;
                    prehashKey?: _154.HashOp;
                    prehashValue?: _154.HashOp;
                    length?: _154.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: number[];
            };
        }): _154.CompressedNonExistenceProof;
    };
};
