import * as _86 from "../confio/proofs";
export declare const ics23: {
    hashOpFromJSON(object: any): _86.HashOp;
    hashOpToJSON(object: _86.HashOp): string;
    lengthOpFromJSON(object: any): _86.LengthOp;
    lengthOpToJSON(object: _86.LengthOp): string;
    HashOp: typeof _86.HashOp;
    LengthOp: typeof _86.LengthOp;
    ExistenceProof: {
        encode(message: _86.ExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.ExistenceProof;
        fromJSON(object: any): _86.ExistenceProof;
        toJSON(message: _86.ExistenceProof): unknown;
        fromPartial(object: {
            key?: Uint8Array;
            value?: Uint8Array;
            leaf?: {
                hash?: _86.HashOp;
                prehashKey?: _86.HashOp;
                prehashValue?: _86.HashOp;
                length?: _86.LengthOp;
                prefix?: Uint8Array;
            };
            path?: {
                hash?: _86.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            }[];
        }): _86.ExistenceProof;
    };
    NonExistenceProof: {
        encode(message: _86.NonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.NonExistenceProof;
        fromJSON(object: any): _86.NonExistenceProof;
        toJSON(message: _86.NonExistenceProof): unknown;
        fromPartial(object: {
            key?: Uint8Array;
            left?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _86.HashOp;
                    prehashKey?: _86.HashOp;
                    prehashValue?: _86.HashOp;
                    length?: _86.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _86.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
            right?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _86.HashOp;
                    prehashKey?: _86.HashOp;
                    prehashValue?: _86.HashOp;
                    length?: _86.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _86.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
        }): _86.NonExistenceProof;
    };
    CommitmentProof: {
        encode(message: _86.CommitmentProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.CommitmentProof;
        fromJSON(object: any): _86.CommitmentProof;
        toJSON(message: _86.CommitmentProof): unknown;
        fromPartial(object: {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _86.HashOp;
                    prehashKey?: _86.HashOp;
                    prehashValue?: _86.HashOp;
                    length?: _86.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _86.HashOp;
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
                        hash?: _86.HashOp;
                        prehashKey?: _86.HashOp;
                        prehashValue?: _86.HashOp;
                        length?: _86.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _86.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _86.HashOp;
                        prehashKey?: _86.HashOp;
                        prehashValue?: _86.HashOp;
                        length?: _86.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _86.HashOp;
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
                            hash?: _86.HashOp;
                            prehashKey?: _86.HashOp;
                            prehashValue?: _86.HashOp;
                            length?: _86.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _86.HashOp;
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
                                hash?: _86.HashOp;
                                prehashKey?: _86.HashOp;
                                prehashValue?: _86.HashOp;
                                length?: _86.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _86.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _86.HashOp;
                                prehashKey?: _86.HashOp;
                                prehashValue?: _86.HashOp;
                                length?: _86.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _86.HashOp;
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
                            hash?: _86.HashOp;
                            prehashKey?: _86.HashOp;
                            prehashValue?: _86.HashOp;
                            length?: _86.LengthOp;
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
                                hash?: _86.HashOp;
                                prehashKey?: _86.HashOp;
                                prehashValue?: _86.HashOp;
                                length?: _86.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _86.HashOp;
                                prehashKey?: _86.HashOp;
                                prehashValue?: _86.HashOp;
                                length?: _86.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                    };
                }[];
                lookupInners?: {
                    hash?: _86.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
        }): _86.CommitmentProof;
    };
    LeafOp: {
        encode(message: _86.LeafOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.LeafOp;
        fromJSON(object: any): _86.LeafOp;
        toJSON(message: _86.LeafOp): unknown;
        fromPartial(object: {
            hash?: _86.HashOp;
            prehashKey?: _86.HashOp;
            prehashValue?: _86.HashOp;
            length?: _86.LengthOp;
            prefix?: Uint8Array;
        }): _86.LeafOp;
    };
    InnerOp: {
        encode(message: _86.InnerOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.InnerOp;
        fromJSON(object: any): _86.InnerOp;
        toJSON(message: _86.InnerOp): unknown;
        fromPartial(object: {
            hash?: _86.HashOp;
            prefix?: Uint8Array;
            suffix?: Uint8Array;
        }): _86.InnerOp;
    };
    ProofSpec: {
        encode(message: _86.ProofSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.ProofSpec;
        fromJSON(object: any): _86.ProofSpec;
        toJSON(message: _86.ProofSpec): unknown;
        fromPartial(object: {
            leafSpec?: {
                hash?: _86.HashOp;
                prehashKey?: _86.HashOp;
                prehashValue?: _86.HashOp;
                length?: _86.LengthOp;
                prefix?: Uint8Array;
            };
            innerSpec?: {
                childOrder?: number[];
                childSize?: number;
                minPrefixLength?: number;
                maxPrefixLength?: number;
                emptyChild?: Uint8Array;
                hash?: _86.HashOp;
            };
            maxDepth?: number;
            minDepth?: number;
        }): _86.ProofSpec;
    };
    InnerSpec: {
        encode(message: _86.InnerSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.InnerSpec;
        fromJSON(object: any): _86.InnerSpec;
        toJSON(message: _86.InnerSpec): unknown;
        fromPartial(object: {
            childOrder?: number[];
            childSize?: number;
            minPrefixLength?: number;
            maxPrefixLength?: number;
            emptyChild?: Uint8Array;
            hash?: _86.HashOp;
        }): _86.InnerSpec;
    };
    BatchProof: {
        encode(message: _86.BatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.BatchProof;
        fromJSON(object: any): _86.BatchProof;
        toJSON(message: _86.BatchProof): unknown;
        fromPartial(object: {
            entries?: {
                exist?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _86.HashOp;
                        prehashKey?: _86.HashOp;
                        prehashValue?: _86.HashOp;
                        length?: _86.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _86.HashOp;
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
                            hash?: _86.HashOp;
                            prehashKey?: _86.HashOp;
                            prehashValue?: _86.HashOp;
                            length?: _86.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _86.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _86.HashOp;
                            prehashKey?: _86.HashOp;
                            prehashValue?: _86.HashOp;
                            length?: _86.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _86.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                };
            }[];
        }): _86.BatchProof;
    };
    BatchEntry: {
        encode(message: _86.BatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.BatchEntry;
        fromJSON(object: any): _86.BatchEntry;
        toJSON(message: _86.BatchEntry): unknown;
        fromPartial(object: {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _86.HashOp;
                    prehashKey?: _86.HashOp;
                    prehashValue?: _86.HashOp;
                    length?: _86.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _86.HashOp;
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
                        hash?: _86.HashOp;
                        prehashKey?: _86.HashOp;
                        prehashValue?: _86.HashOp;
                        length?: _86.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _86.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _86.HashOp;
                        prehashKey?: _86.HashOp;
                        prehashValue?: _86.HashOp;
                        length?: _86.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _86.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
            };
        }): _86.BatchEntry;
    };
    CompressedBatchProof: {
        encode(message: _86.CompressedBatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.CompressedBatchProof;
        fromJSON(object: any): _86.CompressedBatchProof;
        toJSON(message: _86.CompressedBatchProof): unknown;
        fromPartial(object: {
            entries?: {
                exist?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _86.HashOp;
                        prehashKey?: _86.HashOp;
                        prehashValue?: _86.HashOp;
                        length?: _86.LengthOp;
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
                            hash?: _86.HashOp;
                            prehashKey?: _86.HashOp;
                            prehashValue?: _86.HashOp;
                            length?: _86.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _86.HashOp;
                            prehashKey?: _86.HashOp;
                            prehashValue?: _86.HashOp;
                            length?: _86.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                };
            }[];
            lookupInners?: {
                hash?: _86.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            }[];
        }): _86.CompressedBatchProof;
    };
    CompressedBatchEntry: {
        encode(message: _86.CompressedBatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.CompressedBatchEntry;
        fromJSON(object: any): _86.CompressedBatchEntry;
        toJSON(message: _86.CompressedBatchEntry): unknown;
        fromPartial(object: {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _86.HashOp;
                    prehashKey?: _86.HashOp;
                    prehashValue?: _86.HashOp;
                    length?: _86.LengthOp;
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
                        hash?: _86.HashOp;
                        prehashKey?: _86.HashOp;
                        prehashValue?: _86.HashOp;
                        length?: _86.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _86.HashOp;
                        prehashKey?: _86.HashOp;
                        prehashValue?: _86.HashOp;
                        length?: _86.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                };
            };
        }): _86.CompressedBatchEntry;
    };
    CompressedExistenceProof: {
        encode(message: _86.CompressedExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.CompressedExistenceProof;
        fromJSON(object: any): _86.CompressedExistenceProof;
        toJSON(message: _86.CompressedExistenceProof): unknown;
        fromPartial(object: {
            key?: Uint8Array;
            value?: Uint8Array;
            leaf?: {
                hash?: _86.HashOp;
                prehashKey?: _86.HashOp;
                prehashValue?: _86.HashOp;
                length?: _86.LengthOp;
                prefix?: Uint8Array;
            };
            path?: number[];
        }): _86.CompressedExistenceProof;
    };
    CompressedNonExistenceProof: {
        encode(message: _86.CompressedNonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.CompressedNonExistenceProof;
        fromJSON(object: any): _86.CompressedNonExistenceProof;
        toJSON(message: _86.CompressedNonExistenceProof): unknown;
        fromPartial(object: {
            key?: Uint8Array;
            left?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _86.HashOp;
                    prehashKey?: _86.HashOp;
                    prehashValue?: _86.HashOp;
                    length?: _86.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: number[];
            };
            right?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _86.HashOp;
                    prehashKey?: _86.HashOp;
                    prehashValue?: _86.HashOp;
                    length?: _86.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: number[];
            };
        }): _86.CompressedNonExistenceProof;
    };
};
