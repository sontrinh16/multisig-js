import * as _681 from "../sommelier/cork/v1/cork";
import * as _682 from "../sommelier/cork/v1/genesis";
import * as _683 from "../sommelier/cork/v1/proposal";
import * as _684 from "../sommelier/cork/v1/query";
import * as _685 from "../sommelier/cork/v1/tx";
export declare namespace cork {
    const v1: {
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                submitCork(value: _685.MsgSubmitCorkRequest): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                scheduleCork(value: _685.MsgScheduleCorkRequest): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                submitCork(value: _685.MsgSubmitCorkRequest): {
                    typeUrl: string;
                    value: _685.MsgSubmitCorkRequest;
                };
                scheduleCork(value: _685.MsgScheduleCorkRequest): {
                    typeUrl: string;
                    value: _685.MsgScheduleCorkRequest;
                };
            };
            toJSON: {
                submitCork(value: _685.MsgSubmitCorkRequest): {
                    typeUrl: string;
                    value: unknown;
                };
                scheduleCork(value: _685.MsgScheduleCorkRequest): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                submitCork(value: any): {
                    typeUrl: string;
                    value: _685.MsgSubmitCorkRequest;
                };
                scheduleCork(value: any): {
                    typeUrl: string;
                    value: _685.MsgScheduleCorkRequest;
                };
            };
            fromPartial: {
                submitCork(value: _685.MsgSubmitCorkRequest): {
                    typeUrl: string;
                    value: _685.MsgSubmitCorkRequest;
                };
                scheduleCork(value: _685.MsgScheduleCorkRequest): {
                    typeUrl: string;
                    value: _685.MsgScheduleCorkRequest;
                };
            };
        };
        AminoConverter: {
            "/cork.v1.MsgSubmitCorkRequest": {
                aminoType: string;
                toAmino: ({ cork, signer }: _685.MsgSubmitCorkRequest) => {
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
                }) => _685.MsgSubmitCorkRequest;
            };
            "/cork.v1.MsgScheduleCorkRequest": {
                aminoType: string;
                toAmino: ({ cork, blockHeight, signer }: _685.MsgScheduleCorkRequest) => {
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
                }) => _685.MsgScheduleCorkRequest;
            };
        };
        MsgSubmitCorkRequest: {
            encode(message: _685.MsgSubmitCorkRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _685.MsgSubmitCorkRequest;
            fromJSON(object: any): _685.MsgSubmitCorkRequest;
            toJSON(message: _685.MsgSubmitCorkRequest): unknown;
            fromPartial(object: {
                cork?: {
                    encodedContractCall?: Uint8Array;
                    targetContractAddress?: string;
                };
                signer?: string;
            }): _685.MsgSubmitCorkRequest;
        };
        MsgSubmitCorkResponse: {
            encode(_: _685.MsgSubmitCorkResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _685.MsgSubmitCorkResponse;
            fromJSON(_: any): _685.MsgSubmitCorkResponse;
            toJSON(_: _685.MsgSubmitCorkResponse): unknown;
            fromPartial(_: {}): _685.MsgSubmitCorkResponse;
        };
        MsgScheduleCorkRequest: {
            encode(message: _685.MsgScheduleCorkRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _685.MsgScheduleCorkRequest;
            fromJSON(object: any): _685.MsgScheduleCorkRequest;
            toJSON(message: _685.MsgScheduleCorkRequest): unknown;
            fromPartial(object: {
                cork?: {
                    encodedContractCall?: Uint8Array;
                    targetContractAddress?: string;
                };
                blockHeight?: any;
                signer?: string;
            }): _685.MsgScheduleCorkRequest;
        };
        MsgScheduleCorkResponse: {
            encode(_: _685.MsgScheduleCorkResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _685.MsgScheduleCorkResponse;
            fromJSON(_: any): _685.MsgScheduleCorkResponse;
            toJSON(_: _685.MsgScheduleCorkResponse): unknown;
            fromPartial(_: {}): _685.MsgScheduleCorkResponse;
        };
        QueryParamsRequest: {
            encode(_: _684.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _684.QueryParamsRequest;
            fromJSON(_: any): _684.QueryParamsRequest;
            toJSON(_: _684.QueryParamsRequest): unknown;
            fromPartial(_: {}): _684.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _684.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _684.QueryParamsResponse;
            fromJSON(object: any): _684.QueryParamsResponse;
            toJSON(message: _684.QueryParamsResponse): unknown;
            fromPartial(object: {
                params?: {
                    votePeriod?: any;
                    voteThreshold?: string;
                };
            }): _684.QueryParamsResponse;
        };
        QuerySubmittedCorksRequest: {
            encode(_: _684.QuerySubmittedCorksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _684.QuerySubmittedCorksRequest;
            fromJSON(_: any): _684.QuerySubmittedCorksRequest;
            toJSON(_: _684.QuerySubmittedCorksRequest): unknown;
            fromPartial(_: {}): _684.QuerySubmittedCorksRequest;
        };
        QuerySubmittedCorksResponse: {
            encode(message: _684.QuerySubmittedCorksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _684.QuerySubmittedCorksResponse;
            fromJSON(object: any): _684.QuerySubmittedCorksResponse;
            toJSON(message: _684.QuerySubmittedCorksResponse): unknown;
            fromPartial(object: {
                corks?: {
                    encodedContractCall?: Uint8Array;
                    targetContractAddress?: string;
                }[];
            }): _684.QuerySubmittedCorksResponse;
        };
        QueryCommitPeriodRequest: {
            encode(_: _684.QueryCommitPeriodRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _684.QueryCommitPeriodRequest;
            fromJSON(_: any): _684.QueryCommitPeriodRequest;
            toJSON(_: _684.QueryCommitPeriodRequest): unknown;
            fromPartial(_: {}): _684.QueryCommitPeriodRequest;
        };
        QueryCommitPeriodResponse: {
            encode(message: _684.QueryCommitPeriodResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _684.QueryCommitPeriodResponse;
            fromJSON(object: any): _684.QueryCommitPeriodResponse;
            toJSON(message: _684.QueryCommitPeriodResponse): unknown;
            fromPartial(object: {
                currentHeight?: any;
                votePeriodStart?: any;
                votePeriodEnd?: any;
            }): _684.QueryCommitPeriodResponse;
        };
        QueryCellarIDsRequest: {
            encode(_: _684.QueryCellarIDsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _684.QueryCellarIDsRequest;
            fromJSON(_: any): _684.QueryCellarIDsRequest;
            toJSON(_: _684.QueryCellarIDsRequest): unknown;
            fromPartial(_: {}): _684.QueryCellarIDsRequest;
        };
        QueryCellarIDsResponse: {
            encode(message: _684.QueryCellarIDsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _684.QueryCellarIDsResponse;
            fromJSON(object: any): _684.QueryCellarIDsResponse;
            toJSON(message: _684.QueryCellarIDsResponse): unknown;
            fromPartial(object: {
                cellarIds?: string[];
            }): _684.QueryCellarIDsResponse;
        };
        QueryScheduledCorksRequest: {
            encode(_: _684.QueryScheduledCorksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _684.QueryScheduledCorksRequest;
            fromJSON(_: any): _684.QueryScheduledCorksRequest;
            toJSON(_: _684.QueryScheduledCorksRequest): unknown;
            fromPartial(_: {}): _684.QueryScheduledCorksRequest;
        };
        QueryScheduledCorksResponse: {
            encode(message: _684.QueryScheduledCorksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _684.QueryScheduledCorksResponse;
            fromJSON(object: any): _684.QueryScheduledCorksResponse;
            toJSON(message: _684.QueryScheduledCorksResponse): unknown;
            fromPartial(object: {
                corks?: {
                    cork?: {
                        encodedContractCall?: Uint8Array;
                        targetContractAddress?: string;
                    };
                    blockHeight?: any;
                    validator?: string;
                }[];
            }): _684.QueryScheduledCorksResponse;
        };
        QueryScheduledBlockHeightsRequest: {
            encode(_: _684.QueryScheduledBlockHeightsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _684.QueryScheduledBlockHeightsRequest;
            fromJSON(_: any): _684.QueryScheduledBlockHeightsRequest;
            toJSON(_: _684.QueryScheduledBlockHeightsRequest): unknown;
            fromPartial(_: {}): _684.QueryScheduledBlockHeightsRequest;
        };
        QueryScheduledBlockHeightsResponse: {
            encode(message: _684.QueryScheduledBlockHeightsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _684.QueryScheduledBlockHeightsResponse;
            fromJSON(object: any): _684.QueryScheduledBlockHeightsResponse;
            toJSON(message: _684.QueryScheduledBlockHeightsResponse): unknown;
            fromPartial(object: {
                blockHeights?: any[];
            }): _684.QueryScheduledBlockHeightsResponse;
        };
        QueryScheduledCorksByBlockHeightRequest: {
            encode(message: _684.QueryScheduledCorksByBlockHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _684.QueryScheduledCorksByBlockHeightRequest;
            fromJSON(object: any): _684.QueryScheduledCorksByBlockHeightRequest;
            toJSON(message: _684.QueryScheduledCorksByBlockHeightRequest): unknown;
            fromPartial(object: {
                blockHeight?: any;
            }): _684.QueryScheduledCorksByBlockHeightRequest;
        };
        QueryScheduledCorksByBlockHeightResponse: {
            encode(message: _684.QueryScheduledCorksByBlockHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _684.QueryScheduledCorksByBlockHeightResponse;
            fromJSON(object: any): _684.QueryScheduledCorksByBlockHeightResponse;
            toJSON(message: _684.QueryScheduledCorksByBlockHeightResponse): unknown;
            fromPartial(object: {
                corks?: {
                    cork?: {
                        encodedContractCall?: Uint8Array;
                        targetContractAddress?: string;
                    };
                    blockHeight?: any;
                    validator?: string;
                }[];
            }): _684.QueryScheduledCorksByBlockHeightResponse;
        };
        AddManagedCellarIDsProposal: {
            encode(message: _683.AddManagedCellarIDsProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _683.AddManagedCellarIDsProposal;
            fromJSON(object: any): _683.AddManagedCellarIDsProposal;
            toJSON(message: _683.AddManagedCellarIDsProposal): unknown;
            fromPartial(object: {
                title?: string;
                description?: string;
                cellarIds?: {
                    ids?: string[];
                };
            }): _683.AddManagedCellarIDsProposal;
        };
        AddManagedCellarIDsProposalWithDeposit: {
            encode(message: _683.AddManagedCellarIDsProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _683.AddManagedCellarIDsProposalWithDeposit;
            fromJSON(object: any): _683.AddManagedCellarIDsProposalWithDeposit;
            toJSON(message: _683.AddManagedCellarIDsProposalWithDeposit): unknown;
            fromPartial(object: {
                title?: string;
                description?: string;
                cellarIds?: string[];
                deposit?: string;
            }): _683.AddManagedCellarIDsProposalWithDeposit;
        };
        RemoveManagedCellarIDsProposal: {
            encode(message: _683.RemoveManagedCellarIDsProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _683.RemoveManagedCellarIDsProposal;
            fromJSON(object: any): _683.RemoveManagedCellarIDsProposal;
            toJSON(message: _683.RemoveManagedCellarIDsProposal): unknown;
            fromPartial(object: {
                title?: string;
                description?: string;
                cellarIds?: {
                    ids?: string[];
                };
            }): _683.RemoveManagedCellarIDsProposal;
        };
        RemoveManagedCellarIDsProposalWithDeposit: {
            encode(message: _683.RemoveManagedCellarIDsProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _683.RemoveManagedCellarIDsProposalWithDeposit;
            fromJSON(object: any): _683.RemoveManagedCellarIDsProposalWithDeposit;
            toJSON(message: _683.RemoveManagedCellarIDsProposalWithDeposit): unknown;
            fromPartial(object: {
                title?: string;
                description?: string;
                cellarIds?: string[];
                deposit?: string;
            }): _683.RemoveManagedCellarIDsProposalWithDeposit;
        };
        GenesisState: {
            encode(message: _682.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _682.GenesisState;
            fromJSON(object: any): _682.GenesisState;
            toJSON(message: _682.GenesisState): unknown;
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
            }): _682.GenesisState;
        };
        Params: {
            encode(message: _682.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _682.Params;
            fromJSON(object: any): _682.Params;
            toJSON(message: _682.Params): unknown;
            fromPartial(object: {
                votePeriod?: any;
                voteThreshold?: string;
            }): _682.Params;
        };
        Cork: {
            encode(message: _681.Cork, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _681.Cork;
            fromJSON(object: any): _681.Cork;
            toJSON(message: _681.Cork): unknown;
            fromPartial(object: {
                encodedContractCall?: Uint8Array;
                targetContractAddress?: string;
            }): _681.Cork;
        };
        ValidatorCork: {
            encode(message: _681.ValidatorCork, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _681.ValidatorCork;
            fromJSON(object: any): _681.ValidatorCork;
            toJSON(message: _681.ValidatorCork): unknown;
            fromPartial(object: {
                cork?: {
                    encodedContractCall?: Uint8Array;
                    targetContractAddress?: string;
                };
                validator?: string;
            }): _681.ValidatorCork;
        };
        ScheduledCork: {
            encode(message: _681.ScheduledCork, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _681.ScheduledCork;
            fromJSON(object: any): _681.ScheduledCork;
            toJSON(message: _681.ScheduledCork): unknown;
            fromPartial(object: {
                cork?: {
                    encodedContractCall?: Uint8Array;
                    targetContractAddress?: string;
                };
                blockHeight?: any;
                validator?: string;
            }): _681.ScheduledCork;
        };
        CellarIDSet: {
            encode(message: _681.CellarIDSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _681.CellarIDSet;
            fromJSON(object: any): _681.CellarIDSet;
            toJSON(message: _681.CellarIDSet): unknown;
            fromPartial(object: {
                ids?: string[];
            }): _681.CellarIDSet;
        };
    };
}
