import * as _749 from "../sommelier/cork/v1/cork";
import * as _750 from "../sommelier/cork/v1/genesis";
import * as _751 from "../sommelier/cork/v1/proposal";
import * as _752 from "../sommelier/cork/v1/query";
import * as _753 from "../sommelier/cork/v1/tx";
export declare namespace cork {
    const v1: {
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                submitCork(value: _753.MsgSubmitCorkRequest): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                scheduleCork(value: _753.MsgScheduleCorkRequest): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                submitCork(value: _753.MsgSubmitCorkRequest): {
                    typeUrl: string;
                    value: _753.MsgSubmitCorkRequest;
                };
                scheduleCork(value: _753.MsgScheduleCorkRequest): {
                    typeUrl: string;
                    value: _753.MsgScheduleCorkRequest;
                };
            };
            toJSON: {
                submitCork(value: _753.MsgSubmitCorkRequest): {
                    typeUrl: string;
                    value: unknown;
                };
                scheduleCork(value: _753.MsgScheduleCorkRequest): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                submitCork(value: any): {
                    typeUrl: string;
                    value: _753.MsgSubmitCorkRequest;
                };
                scheduleCork(value: any): {
                    typeUrl: string;
                    value: _753.MsgScheduleCorkRequest;
                };
            };
            fromPartial: {
                submitCork(value: _753.MsgSubmitCorkRequest): {
                    typeUrl: string;
                    value: _753.MsgSubmitCorkRequest;
                };
                scheduleCork(value: _753.MsgScheduleCorkRequest): {
                    typeUrl: string;
                    value: _753.MsgScheduleCorkRequest;
                };
            };
        };
        AminoConverter: {
            "/cork.v1.MsgSubmitCorkRequest": {
                aminoType: string;
                toAmino: ({ cork, signer }: _753.MsgSubmitCorkRequest) => {
                    cork: {
                        encoded_contract_call: Uint8Array;
                        target_contract_address: string;
                    };
                    signer: string;
                };
                fromAmino: ({ cork, signer }: {
                    cork: {
                        encoded_contract_call: Uint8Array;
                        target_contract_address: string;
                    };
                    signer: string;
                }) => _753.MsgSubmitCorkRequest;
            };
            "/cork.v1.MsgScheduleCorkRequest": {
                aminoType: string;
                toAmino: ({ cork, blockHeight, signer }: _753.MsgScheduleCorkRequest) => {
                    cork: {
                        encoded_contract_call: Uint8Array;
                        target_contract_address: string;
                    };
                    block_height: string;
                    signer: string;
                };
                fromAmino: ({ cork, block_height, signer }: {
                    cork: {
                        encoded_contract_call: Uint8Array;
                        target_contract_address: string;
                    };
                    block_height: string;
                    signer: string;
                }) => _753.MsgScheduleCorkRequest;
            };
        };
        MsgSubmitCorkRequest: {
            encode(message: _753.MsgSubmitCorkRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _753.MsgSubmitCorkRequest;
            fromJSON(object: any): _753.MsgSubmitCorkRequest;
            toJSON(message: _753.MsgSubmitCorkRequest): unknown;
            fromPartial(object: {
                cork?: {
                    encodedContractCall?: Uint8Array;
                    targetContractAddress?: string;
                };
                signer?: string;
            }): _753.MsgSubmitCorkRequest;
        };
        MsgSubmitCorkResponse: {
            encode(_: _753.MsgSubmitCorkResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _753.MsgSubmitCorkResponse;
            fromJSON(_: any): _753.MsgSubmitCorkResponse;
            toJSON(_: _753.MsgSubmitCorkResponse): unknown;
            fromPartial(_: {}): _753.MsgSubmitCorkResponse;
        };
        MsgScheduleCorkRequest: {
            encode(message: _753.MsgScheduleCorkRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _753.MsgScheduleCorkRequest;
            fromJSON(object: any): _753.MsgScheduleCorkRequest;
            toJSON(message: _753.MsgScheduleCorkRequest): unknown;
            fromPartial(object: {
                cork?: {
                    encodedContractCall?: Uint8Array;
                    targetContractAddress?: string;
                };
                blockHeight?: any;
                signer?: string;
            }): _753.MsgScheduleCorkRequest;
        };
        MsgScheduleCorkResponse: {
            encode(_: _753.MsgScheduleCorkResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _753.MsgScheduleCorkResponse;
            fromJSON(_: any): _753.MsgScheduleCorkResponse;
            toJSON(_: _753.MsgScheduleCorkResponse): unknown;
            fromPartial(_: {}): _753.MsgScheduleCorkResponse;
        };
        QueryParamsRequest: {
            encode(_: _752.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _752.QueryParamsRequest;
            fromJSON(_: any): _752.QueryParamsRequest;
            toJSON(_: _752.QueryParamsRequest): unknown;
            fromPartial(_: {}): _752.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _752.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _752.QueryParamsResponse;
            fromJSON(object: any): _752.QueryParamsResponse;
            toJSON(message: _752.QueryParamsResponse): unknown;
            fromPartial(object: {
                params?: {
                    votePeriod?: any;
                    voteThreshold?: string;
                };
            }): _752.QueryParamsResponse;
        };
        QuerySubmittedCorksRequest: {
            encode(_: _752.QuerySubmittedCorksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _752.QuerySubmittedCorksRequest;
            fromJSON(_: any): _752.QuerySubmittedCorksRequest;
            toJSON(_: _752.QuerySubmittedCorksRequest): unknown;
            fromPartial(_: {}): _752.QuerySubmittedCorksRequest;
        };
        QuerySubmittedCorksResponse: {
            encode(message: _752.QuerySubmittedCorksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _752.QuerySubmittedCorksResponse;
            fromJSON(object: any): _752.QuerySubmittedCorksResponse;
            toJSON(message: _752.QuerySubmittedCorksResponse): unknown;
            fromPartial(object: {
                corks?: {
                    encodedContractCall?: Uint8Array;
                    targetContractAddress?: string;
                }[];
            }): _752.QuerySubmittedCorksResponse;
        };
        QueryCommitPeriodRequest: {
            encode(_: _752.QueryCommitPeriodRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _752.QueryCommitPeriodRequest;
            fromJSON(_: any): _752.QueryCommitPeriodRequest;
            toJSON(_: _752.QueryCommitPeriodRequest): unknown;
            fromPartial(_: {}): _752.QueryCommitPeriodRequest;
        };
        QueryCommitPeriodResponse: {
            encode(message: _752.QueryCommitPeriodResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _752.QueryCommitPeriodResponse;
            fromJSON(object: any): _752.QueryCommitPeriodResponse;
            toJSON(message: _752.QueryCommitPeriodResponse): unknown;
            fromPartial(object: {
                currentHeight?: any;
                votePeriodStart?: any;
                votePeriodEnd?: any;
            }): _752.QueryCommitPeriodResponse;
        };
        QueryCellarIDsRequest: {
            encode(_: _752.QueryCellarIDsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _752.QueryCellarIDsRequest;
            fromJSON(_: any): _752.QueryCellarIDsRequest;
            toJSON(_: _752.QueryCellarIDsRequest): unknown;
            fromPartial(_: {}): _752.QueryCellarIDsRequest;
        };
        QueryCellarIDsResponse: {
            encode(message: _752.QueryCellarIDsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _752.QueryCellarIDsResponse;
            fromJSON(object: any): _752.QueryCellarIDsResponse;
            toJSON(message: _752.QueryCellarIDsResponse): unknown;
            fromPartial(object: {
                cellarIds?: string[];
            }): _752.QueryCellarIDsResponse;
        };
        QueryScheduledCorksRequest: {
            encode(_: _752.QueryScheduledCorksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _752.QueryScheduledCorksRequest;
            fromJSON(_: any): _752.QueryScheduledCorksRequest;
            toJSON(_: _752.QueryScheduledCorksRequest): unknown;
            fromPartial(_: {}): _752.QueryScheduledCorksRequest;
        };
        QueryScheduledCorksResponse: {
            encode(message: _752.QueryScheduledCorksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _752.QueryScheduledCorksResponse;
            fromJSON(object: any): _752.QueryScheduledCorksResponse;
            toJSON(message: _752.QueryScheduledCorksResponse): unknown;
            fromPartial(object: {
                corks?: {
                    cork?: {
                        encodedContractCall?: Uint8Array;
                        targetContractAddress?: string;
                    };
                    blockHeight?: any;
                    validator?: string;
                }[];
            }): _752.QueryScheduledCorksResponse;
        };
        QueryScheduledBlockHeightsRequest: {
            encode(_: _752.QueryScheduledBlockHeightsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _752.QueryScheduledBlockHeightsRequest;
            fromJSON(_: any): _752.QueryScheduledBlockHeightsRequest;
            toJSON(_: _752.QueryScheduledBlockHeightsRequest): unknown;
            fromPartial(_: {}): _752.QueryScheduledBlockHeightsRequest;
        };
        QueryScheduledBlockHeightsResponse: {
            encode(message: _752.QueryScheduledBlockHeightsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _752.QueryScheduledBlockHeightsResponse;
            fromJSON(object: any): _752.QueryScheduledBlockHeightsResponse;
            toJSON(message: _752.QueryScheduledBlockHeightsResponse): unknown;
            fromPartial(object: {
                blockHeights?: any[];
            }): _752.QueryScheduledBlockHeightsResponse;
        };
        QueryScheduledCorksByBlockHeightRequest: {
            encode(message: _752.QueryScheduledCorksByBlockHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _752.QueryScheduledCorksByBlockHeightRequest;
            fromJSON(object: any): _752.QueryScheduledCorksByBlockHeightRequest;
            toJSON(message: _752.QueryScheduledCorksByBlockHeightRequest): unknown;
            fromPartial(object: {
                blockHeight?: any;
            }): _752.QueryScheduledCorksByBlockHeightRequest;
        };
        QueryScheduledCorksByBlockHeightResponse: {
            encode(message: _752.QueryScheduledCorksByBlockHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _752.QueryScheduledCorksByBlockHeightResponse;
            fromJSON(object: any): _752.QueryScheduledCorksByBlockHeightResponse;
            toJSON(message: _752.QueryScheduledCorksByBlockHeightResponse): unknown;
            fromPartial(object: {
                corks?: {
                    cork?: {
                        encodedContractCall?: Uint8Array;
                        targetContractAddress?: string;
                    };
                    blockHeight?: any;
                    validator?: string;
                }[];
            }): _752.QueryScheduledCorksByBlockHeightResponse;
        };
        AddManagedCellarIDsProposal: {
            encode(message: _751.AddManagedCellarIDsProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _751.AddManagedCellarIDsProposal;
            fromJSON(object: any): _751.AddManagedCellarIDsProposal;
            toJSON(message: _751.AddManagedCellarIDsProposal): unknown;
            fromPartial(object: {
                title?: string;
                description?: string;
                cellarIds?: {
                    ids?: string[];
                };
            }): _751.AddManagedCellarIDsProposal;
        };
        AddManagedCellarIDsProposalWithDeposit: {
            encode(message: _751.AddManagedCellarIDsProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _751.AddManagedCellarIDsProposalWithDeposit;
            fromJSON(object: any): _751.AddManagedCellarIDsProposalWithDeposit;
            toJSON(message: _751.AddManagedCellarIDsProposalWithDeposit): unknown;
            fromPartial(object: {
                title?: string;
                description?: string;
                cellarIds?: string[];
                deposit?: string;
            }): _751.AddManagedCellarIDsProposalWithDeposit;
        };
        RemoveManagedCellarIDsProposal: {
            encode(message: _751.RemoveManagedCellarIDsProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _751.RemoveManagedCellarIDsProposal;
            fromJSON(object: any): _751.RemoveManagedCellarIDsProposal;
            toJSON(message: _751.RemoveManagedCellarIDsProposal): unknown;
            fromPartial(object: {
                title?: string;
                description?: string;
                cellarIds?: {
                    ids?: string[];
                };
            }): _751.RemoveManagedCellarIDsProposal;
        };
        RemoveManagedCellarIDsProposalWithDeposit: {
            encode(message: _751.RemoveManagedCellarIDsProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _751.RemoveManagedCellarIDsProposalWithDeposit;
            fromJSON(object: any): _751.RemoveManagedCellarIDsProposalWithDeposit;
            toJSON(message: _751.RemoveManagedCellarIDsProposalWithDeposit): unknown;
            fromPartial(object: {
                title?: string;
                description?: string;
                cellarIds?: string[];
                deposit?: string;
            }): _751.RemoveManagedCellarIDsProposalWithDeposit;
        };
        GenesisState: {
            encode(message: _750.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _750.GenesisState;
            fromJSON(object: any): _750.GenesisState;
            toJSON(message: _750.GenesisState): unknown;
            fromPartial(object: {
                params?: {
                    votePeriod?: any;
                    voteThreshold?: string;
                };
                cellarIds?: {
                    ids?: string[];
                };
                invalidationNonce?: any;
                corks?: {
                    cork?: {
                        encodedContractCall?: Uint8Array;
                        targetContractAddress?: string;
                    };
                    validator?: string;
                }[];
                scheduledCorks?: {
                    cork?: {
                        encodedContractCall?: Uint8Array;
                        targetContractAddress?: string;
                    };
                    blockHeight?: any;
                    validator?: string;
                }[];
            }): _750.GenesisState;
        };
        Params: {
            encode(message: _750.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _750.Params;
            fromJSON(object: any): _750.Params;
            toJSON(message: _750.Params): unknown;
            fromPartial(object: {
                votePeriod?: any;
                voteThreshold?: string;
            }): _750.Params;
        };
        Cork: {
            encode(message: _749.Cork, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _749.Cork;
            fromJSON(object: any): _749.Cork;
            toJSON(message: _749.Cork): unknown;
            fromPartial(object: {
                encodedContractCall?: Uint8Array;
                targetContractAddress?: string;
            }): _749.Cork;
        };
        ValidatorCork: {
            encode(message: _749.ValidatorCork, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _749.ValidatorCork;
            fromJSON(object: any): _749.ValidatorCork;
            toJSON(message: _749.ValidatorCork): unknown;
            fromPartial(object: {
                cork?: {
                    encodedContractCall?: Uint8Array;
                    targetContractAddress?: string;
                };
                validator?: string;
            }): _749.ValidatorCork;
        };
        ScheduledCork: {
            encode(message: _749.ScheduledCork, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _749.ScheduledCork;
            fromJSON(object: any): _749.ScheduledCork;
            toJSON(message: _749.ScheduledCork): unknown;
            fromPartial(object: {
                cork?: {
                    encodedContractCall?: Uint8Array;
                    targetContractAddress?: string;
                };
                blockHeight?: any;
                validator?: string;
            }): _749.ScheduledCork;
        };
        CellarIDSet: {
            encode(message: _749.CellarIDSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _749.CellarIDSet;
            fromJSON(object: any): _749.CellarIDSet;
            toJSON(message: _749.CellarIDSet): unknown;
            fromPartial(object: {
                ids?: string[];
            }): _749.CellarIDSet;
        };
    };
}
