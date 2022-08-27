import * as _662 from "../sommelier/cork/v1/cork";
import * as _663 from "../sommelier/cork/v1/genesis";
import * as _664 from "../sommelier/cork/v1/proposal";
import * as _665 from "../sommelier/cork/v1/query";
import * as _666 from "../sommelier/cork/v1/tx";
export declare namespace cork {
    const v1: {
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                submitCork(value: _666.MsgSubmitCorkRequest): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                scheduleCork(value: _666.MsgScheduleCorkRequest): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                submitCork(value: _666.MsgSubmitCorkRequest): {
                    typeUrl: string;
                    value: _666.MsgSubmitCorkRequest;
                };
                scheduleCork(value: _666.MsgScheduleCorkRequest): {
                    typeUrl: string;
                    value: _666.MsgScheduleCorkRequest;
                };
            };
            toJSON: {
                submitCork(value: _666.MsgSubmitCorkRequest): {
                    typeUrl: string;
                    value: unknown;
                };
                scheduleCork(value: _666.MsgScheduleCorkRequest): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                submitCork(value: any): {
                    typeUrl: string;
                    value: _666.MsgSubmitCorkRequest;
                };
                scheduleCork(value: any): {
                    typeUrl: string;
                    value: _666.MsgScheduleCorkRequest;
                };
            };
            fromPartial: {
                submitCork(value: _666.MsgSubmitCorkRequest): {
                    typeUrl: string;
                    value: _666.MsgSubmitCorkRequest;
                };
                scheduleCork(value: _666.MsgScheduleCorkRequest): {
                    typeUrl: string;
                    value: _666.MsgScheduleCorkRequest;
                };
            };
        };
        AminoConverter: {
            "/cork.v1.MsgSubmitCorkRequest": {
                aminoType: string;
                toAmino: ({ cork, signer }: _666.MsgSubmitCorkRequest) => {
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
                }) => _666.MsgSubmitCorkRequest;
            };
            "/cork.v1.MsgScheduleCorkRequest": {
                aminoType: string;
                toAmino: ({ cork, blockHeight, signer }: _666.MsgScheduleCorkRequest) => {
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
                }) => _666.MsgScheduleCorkRequest;
            };
        };
        MsgSubmitCorkRequest: {
            encode(message: _666.MsgSubmitCorkRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _666.MsgSubmitCorkRequest;
            fromJSON(object: any): _666.MsgSubmitCorkRequest;
            toJSON(message: _666.MsgSubmitCorkRequest): unknown;
            fromPartial(object: {
                cork?: {
                    encodedContractCall?: Uint8Array;
                    targetContractAddress?: string;
                };
                signer?: string;
            }): _666.MsgSubmitCorkRequest;
        };
        MsgSubmitCorkResponse: {
            encode(_: _666.MsgSubmitCorkResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _666.MsgSubmitCorkResponse;
            fromJSON(_: any): _666.MsgSubmitCorkResponse;
            toJSON(_: _666.MsgSubmitCorkResponse): unknown;
            fromPartial(_: {}): _666.MsgSubmitCorkResponse;
        };
        MsgScheduleCorkRequest: {
            encode(message: _666.MsgScheduleCorkRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _666.MsgScheduleCorkRequest;
            fromJSON(object: any): _666.MsgScheduleCorkRequest;
            toJSON(message: _666.MsgScheduleCorkRequest): unknown;
            fromPartial(object: {
                cork?: {
                    encodedContractCall?: Uint8Array;
                    targetContractAddress?: string;
                };
                blockHeight?: any;
                signer?: string;
            }): _666.MsgScheduleCorkRequest;
        };
        MsgScheduleCorkResponse: {
            encode(_: _666.MsgScheduleCorkResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _666.MsgScheduleCorkResponse;
            fromJSON(_: any): _666.MsgScheduleCorkResponse;
            toJSON(_: _666.MsgScheduleCorkResponse): unknown;
            fromPartial(_: {}): _666.MsgScheduleCorkResponse;
        };
        QueryParamsRequest: {
            encode(_: _665.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _665.QueryParamsRequest;
            fromJSON(_: any): _665.QueryParamsRequest;
            toJSON(_: _665.QueryParamsRequest): unknown;
            fromPartial(_: {}): _665.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _665.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _665.QueryParamsResponse;
            fromJSON(object: any): _665.QueryParamsResponse;
            toJSON(message: _665.QueryParamsResponse): unknown;
            fromPartial(object: {
                params?: {
                    votePeriod?: any;
                    voteThreshold?: string;
                };
            }): _665.QueryParamsResponse;
        };
        QuerySubmittedCorksRequest: {
            encode(_: _665.QuerySubmittedCorksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _665.QuerySubmittedCorksRequest;
            fromJSON(_: any): _665.QuerySubmittedCorksRequest;
            toJSON(_: _665.QuerySubmittedCorksRequest): unknown;
            fromPartial(_: {}): _665.QuerySubmittedCorksRequest;
        };
        QuerySubmittedCorksResponse: {
            encode(message: _665.QuerySubmittedCorksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _665.QuerySubmittedCorksResponse;
            fromJSON(object: any): _665.QuerySubmittedCorksResponse;
            toJSON(message: _665.QuerySubmittedCorksResponse): unknown;
            fromPartial(object: {
                corks?: {
                    encodedContractCall?: Uint8Array;
                    targetContractAddress?: string;
                }[];
            }): _665.QuerySubmittedCorksResponse;
        };
        QueryCommitPeriodRequest: {
            encode(_: _665.QueryCommitPeriodRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _665.QueryCommitPeriodRequest;
            fromJSON(_: any): _665.QueryCommitPeriodRequest;
            toJSON(_: _665.QueryCommitPeriodRequest): unknown;
            fromPartial(_: {}): _665.QueryCommitPeriodRequest;
        };
        QueryCommitPeriodResponse: {
            encode(message: _665.QueryCommitPeriodResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _665.QueryCommitPeriodResponse;
            fromJSON(object: any): _665.QueryCommitPeriodResponse;
            toJSON(message: _665.QueryCommitPeriodResponse): unknown;
            fromPartial(object: {
                currentHeight?: any;
                votePeriodStart?: any;
                votePeriodEnd?: any;
            }): _665.QueryCommitPeriodResponse;
        };
        QueryCellarIDsRequest: {
            encode(_: _665.QueryCellarIDsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _665.QueryCellarIDsRequest;
            fromJSON(_: any): _665.QueryCellarIDsRequest;
            toJSON(_: _665.QueryCellarIDsRequest): unknown;
            fromPartial(_: {}): _665.QueryCellarIDsRequest;
        };
        QueryCellarIDsResponse: {
            encode(message: _665.QueryCellarIDsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _665.QueryCellarIDsResponse;
            fromJSON(object: any): _665.QueryCellarIDsResponse;
            toJSON(message: _665.QueryCellarIDsResponse): unknown;
            fromPartial(object: {
                cellarIds?: string[];
            }): _665.QueryCellarIDsResponse;
        };
        QueryScheduledCorksRequest: {
            encode(_: _665.QueryScheduledCorksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _665.QueryScheduledCorksRequest;
            fromJSON(_: any): _665.QueryScheduledCorksRequest;
            toJSON(_: _665.QueryScheduledCorksRequest): unknown;
            fromPartial(_: {}): _665.QueryScheduledCorksRequest;
        };
        QueryScheduledCorksResponse: {
            encode(message: _665.QueryScheduledCorksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _665.QueryScheduledCorksResponse;
            fromJSON(object: any): _665.QueryScheduledCorksResponse;
            toJSON(message: _665.QueryScheduledCorksResponse): unknown;
            fromPartial(object: {
                corks?: {
                    cork?: {
                        encodedContractCall?: Uint8Array;
                        targetContractAddress?: string;
                    };
                    blockHeight?: any;
                    validator?: string;
                }[];
            }): _665.QueryScheduledCorksResponse;
        };
        QueryScheduledBlockHeightsRequest: {
            encode(_: _665.QueryScheduledBlockHeightsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _665.QueryScheduledBlockHeightsRequest;
            fromJSON(_: any): _665.QueryScheduledBlockHeightsRequest;
            toJSON(_: _665.QueryScheduledBlockHeightsRequest): unknown;
            fromPartial(_: {}): _665.QueryScheduledBlockHeightsRequest;
        };
        QueryScheduledBlockHeightsResponse: {
            encode(message: _665.QueryScheduledBlockHeightsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _665.QueryScheduledBlockHeightsResponse;
            fromJSON(object: any): _665.QueryScheduledBlockHeightsResponse;
            toJSON(message: _665.QueryScheduledBlockHeightsResponse): unknown;
            fromPartial(object: {
                blockHeights?: any[];
            }): _665.QueryScheduledBlockHeightsResponse;
        };
        QueryScheduledCorksByBlockHeightRequest: {
            encode(message: _665.QueryScheduledCorksByBlockHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _665.QueryScheduledCorksByBlockHeightRequest;
            fromJSON(object: any): _665.QueryScheduledCorksByBlockHeightRequest;
            toJSON(message: _665.QueryScheduledCorksByBlockHeightRequest): unknown;
            fromPartial(object: {
                blockHeight?: any;
            }): _665.QueryScheduledCorksByBlockHeightRequest;
        };
        QueryScheduledCorksByBlockHeightResponse: {
            encode(message: _665.QueryScheduledCorksByBlockHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _665.QueryScheduledCorksByBlockHeightResponse;
            fromJSON(object: any): _665.QueryScheduledCorksByBlockHeightResponse;
            toJSON(message: _665.QueryScheduledCorksByBlockHeightResponse): unknown;
            fromPartial(object: {
                corks?: {
                    cork?: {
                        encodedContractCall?: Uint8Array;
                        targetContractAddress?: string;
                    };
                    blockHeight?: any;
                    validator?: string;
                }[];
            }): _665.QueryScheduledCorksByBlockHeightResponse;
        };
        AddManagedCellarIDsProposal: {
            encode(message: _664.AddManagedCellarIDsProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _664.AddManagedCellarIDsProposal;
            fromJSON(object: any): _664.AddManagedCellarIDsProposal;
            toJSON(message: _664.AddManagedCellarIDsProposal): unknown;
            fromPartial(object: {
                title?: string;
                description?: string;
                cellarIds?: {
                    ids?: string[];
                };
            }): _664.AddManagedCellarIDsProposal;
        };
        AddManagedCellarIDsProposalWithDeposit: {
            encode(message: _664.AddManagedCellarIDsProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _664.AddManagedCellarIDsProposalWithDeposit;
            fromJSON(object: any): _664.AddManagedCellarIDsProposalWithDeposit;
            toJSON(message: _664.AddManagedCellarIDsProposalWithDeposit): unknown;
            fromPartial(object: {
                title?: string;
                description?: string;
                cellarIds?: string[];
                deposit?: string;
            }): _664.AddManagedCellarIDsProposalWithDeposit;
        };
        RemoveManagedCellarIDsProposal: {
            encode(message: _664.RemoveManagedCellarIDsProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _664.RemoveManagedCellarIDsProposal;
            fromJSON(object: any): _664.RemoveManagedCellarIDsProposal;
            toJSON(message: _664.RemoveManagedCellarIDsProposal): unknown;
            fromPartial(object: {
                title?: string;
                description?: string;
                cellarIds?: {
                    ids?: string[];
                };
            }): _664.RemoveManagedCellarIDsProposal;
        };
        RemoveManagedCellarIDsProposalWithDeposit: {
            encode(message: _664.RemoveManagedCellarIDsProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _664.RemoveManagedCellarIDsProposalWithDeposit;
            fromJSON(object: any): _664.RemoveManagedCellarIDsProposalWithDeposit;
            toJSON(message: _664.RemoveManagedCellarIDsProposalWithDeposit): unknown;
            fromPartial(object: {
                title?: string;
                description?: string;
                cellarIds?: string[];
                deposit?: string;
            }): _664.RemoveManagedCellarIDsProposalWithDeposit;
        };
        GenesisState: {
            encode(message: _663.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _663.GenesisState;
            fromJSON(object: any): _663.GenesisState;
            toJSON(message: _663.GenesisState): unknown;
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
            }): _663.GenesisState;
        };
        Params: {
            encode(message: _663.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _663.Params;
            fromJSON(object: any): _663.Params;
            toJSON(message: _663.Params): unknown;
            fromPartial(object: {
                votePeriod?: any;
                voteThreshold?: string;
            }): _663.Params;
        };
        Cork: {
            encode(message: _662.Cork, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.Cork;
            fromJSON(object: any): _662.Cork;
            toJSON(message: _662.Cork): unknown;
            fromPartial(object: {
                encodedContractCall?: Uint8Array;
                targetContractAddress?: string;
            }): _662.Cork;
        };
        ValidatorCork: {
            encode(message: _662.ValidatorCork, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.ValidatorCork;
            fromJSON(object: any): _662.ValidatorCork;
            toJSON(message: _662.ValidatorCork): unknown;
            fromPartial(object: {
                cork?: {
                    encodedContractCall?: Uint8Array;
                    targetContractAddress?: string;
                };
                validator?: string;
            }): _662.ValidatorCork;
        };
        ScheduledCork: {
            encode(message: _662.ScheduledCork, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.ScheduledCork;
            fromJSON(object: any): _662.ScheduledCork;
            toJSON(message: _662.ScheduledCork): unknown;
            fromPartial(object: {
                cork?: {
                    encodedContractCall?: Uint8Array;
                    targetContractAddress?: string;
                };
                blockHeight?: any;
                validator?: string;
            }): _662.ScheduledCork;
        };
        CellarIDSet: {
            encode(message: _662.CellarIDSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.CellarIDSet;
            fromJSON(object: any): _662.CellarIDSet;
            toJSON(message: _662.CellarIDSet): unknown;
            fromPartial(object: {
                ids?: string[];
            }): _662.CellarIDSet;
        };
    };
}
