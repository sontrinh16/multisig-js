/// <reference types="long" />
import * as _364 from "./claims/v1/claims";
import * as _365 from "./claims/v1/genesis";
import * as _366 from "./claims/v1/query";
import * as _367 from "./epochs/v1/genesis";
import * as _368 from "./epochs/v1/query";
import * as _369 from "./erc20/v1/erc20";
import * as _370 from "./erc20/v1/genesis";
import * as _371 from "./erc20/v1/query";
import * as _372 from "./erc20/v1/tx";
import * as _373 from "./feesplit/v1/feesplit";
import * as _374 from "./feesplit/v1/genesis";
import * as _375 from "./feesplit/v1/query";
import * as _376 from "./feesplit/v1/tx";
import * as _377 from "./incentives/v1/genesis";
import * as _378 from "./incentives/v1/incentives";
import * as _379 from "./incentives/v1/query";
import * as _380 from "./inflation/v1/genesis";
import * as _381 from "./inflation/v1/inflation";
import * as _382 from "./inflation/v1/query";
import * as _383 from "./recovery/v1/genesis";
import * as _384 from "./recovery/v1/query";
import * as _385 from "./vesting/v1/query";
import * as _386 from "./vesting/v1/tx";
import * as _387 from "./vesting/v1/vesting";
export declare namespace evmos {
    namespace claims {
        const v1: {
            QueryTotalUnclaimedRequest: {
                encode(_: _366.QueryTotalUnclaimedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _366.QueryTotalUnclaimedRequest;
                fromJSON(_: any): _366.QueryTotalUnclaimedRequest;
                toJSON(_: _366.QueryTotalUnclaimedRequest): unknown;
                fromPartial(_: {}): _366.QueryTotalUnclaimedRequest;
            };
            QueryTotalUnclaimedResponse: {
                encode(message: _366.QueryTotalUnclaimedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _366.QueryTotalUnclaimedResponse;
                fromJSON(object: any): _366.QueryTotalUnclaimedResponse;
                toJSON(message: _366.QueryTotalUnclaimedResponse): unknown;
                fromPartial(object: {
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _366.QueryTotalUnclaimedResponse;
            };
            QueryParamsRequest: {
                encode(_: _366.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _366.QueryParamsRequest;
                fromJSON(_: any): _366.QueryParamsRequest;
                toJSON(_: _366.QueryParamsRequest): unknown;
                fromPartial(_: {}): _366.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _366.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _366.QueryParamsResponse;
                fromJSON(object: any): _366.QueryParamsResponse;
                toJSON(message: _366.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        enableClaims?: boolean;
                        airdropStartTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        durationUntilDecay?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        durationOfDecay?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        claimsDenom?: string;
                        authorizedChannels?: string[];
                        evmChannels?: string[];
                    };
                }): _366.QueryParamsResponse;
            };
            QueryClaimsRecordsRequest: {
                encode(message: _366.QueryClaimsRecordsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _366.QueryClaimsRecordsRequest;
                fromJSON(object: any): _366.QueryClaimsRecordsRequest;
                toJSON(message: _366.QueryClaimsRecordsRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _366.QueryClaimsRecordsRequest;
            };
            QueryClaimsRecordsResponse: {
                encode(message: _366.QueryClaimsRecordsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _366.QueryClaimsRecordsResponse;
                fromJSON(object: any): _366.QueryClaimsRecordsResponse;
                toJSON(message: _366.QueryClaimsRecordsResponse): unknown;
                fromPartial(object: {
                    claims?: {
                        address?: string;
                        initialClaimableAmount?: string;
                        actionsCompleted?: boolean[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _366.QueryClaimsRecordsResponse;
            };
            QueryClaimsRecordRequest: {
                encode(message: _366.QueryClaimsRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _366.QueryClaimsRecordRequest;
                fromJSON(object: any): _366.QueryClaimsRecordRequest;
                toJSON(message: _366.QueryClaimsRecordRequest): unknown;
                fromPartial(object: {
                    address?: string;
                }): _366.QueryClaimsRecordRequest;
            };
            QueryClaimsRecordResponse: {
                encode(message: _366.QueryClaimsRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _366.QueryClaimsRecordResponse;
                fromJSON(object: any): _366.QueryClaimsRecordResponse;
                toJSON(message: _366.QueryClaimsRecordResponse): unknown;
                fromPartial(object: {
                    initialClaimableAmount?: string;
                    claims?: {
                        action?: _364.Action;
                        completed?: boolean;
                        claimableAmount?: string;
                    }[];
                }): _366.QueryClaimsRecordResponse;
            };
            GenesisState: {
                encode(message: _365.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _365.GenesisState;
                fromJSON(object: any): _365.GenesisState;
                toJSON(message: _365.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        enableClaims?: boolean;
                        airdropStartTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        durationUntilDecay?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        durationOfDecay?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        claimsDenom?: string;
                        authorizedChannels?: string[];
                        evmChannels?: string[];
                    };
                    claimsRecords?: {
                        address?: string;
                        initialClaimableAmount?: string;
                        actionsCompleted?: boolean[];
                    }[];
                }): _365.GenesisState;
            };
            Params: {
                encode(message: _365.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _365.Params;
                fromJSON(object: any): _365.Params;
                toJSON(message: _365.Params): unknown;
                fromPartial(object: {
                    enableClaims?: boolean;
                    airdropStartTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    durationUntilDecay?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    durationOfDecay?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    claimsDenom?: string;
                    authorizedChannels?: string[];
                    evmChannels?: string[];
                }): _365.Params;
            };
            actionFromJSON(object: any): _364.Action;
            actionToJSON(object: _364.Action): string;
            Action: typeof _364.Action;
            Claim: {
                encode(message: _364.Claim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _364.Claim;
                fromJSON(object: any): _364.Claim;
                toJSON(message: _364.Claim): unknown;
                fromPartial(object: {
                    action?: _364.Action;
                    completed?: boolean;
                    claimableAmount?: string;
                }): _364.Claim;
            };
            ClaimsRecordAddress: {
                encode(message: _364.ClaimsRecordAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _364.ClaimsRecordAddress;
                fromJSON(object: any): _364.ClaimsRecordAddress;
                toJSON(message: _364.ClaimsRecordAddress): unknown;
                fromPartial(object: {
                    address?: string;
                    initialClaimableAmount?: string;
                    actionsCompleted?: boolean[];
                }): _364.ClaimsRecordAddress;
            };
            ClaimsRecord: {
                encode(message: _364.ClaimsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _364.ClaimsRecord;
                fromJSON(object: any): _364.ClaimsRecord;
                toJSON(message: _364.ClaimsRecord): unknown;
                fromPartial(object: {
                    initialClaimableAmount?: string;
                    actionsCompleted?: boolean[];
                }): _364.ClaimsRecord;
            };
        };
    }
    namespace epochs {
        const v1: {
            QueryEpochsInfoRequest: {
                encode(message: _368.QueryEpochsInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _368.QueryEpochsInfoRequest;
                fromJSON(object: any): _368.QueryEpochsInfoRequest;
                toJSON(message: _368.QueryEpochsInfoRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _368.QueryEpochsInfoRequest;
            };
            QueryEpochsInfoResponse: {
                encode(message: _368.QueryEpochsInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _368.QueryEpochsInfoResponse;
                fromJSON(object: any): _368.QueryEpochsInfoResponse;
                toJSON(message: _368.QueryEpochsInfoResponse): unknown;
                fromPartial(object: {
                    epochs?: {
                        identifier?: string;
                        startTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        duration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        currentEpoch?: any;
                        currentEpochStartTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        epochCountingStarted?: boolean;
                        currentEpochStartHeight?: any;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _368.QueryEpochsInfoResponse;
            };
            QueryCurrentEpochRequest: {
                encode(message: _368.QueryCurrentEpochRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _368.QueryCurrentEpochRequest;
                fromJSON(object: any): _368.QueryCurrentEpochRequest;
                toJSON(message: _368.QueryCurrentEpochRequest): unknown;
                fromPartial(object: {
                    identifier?: string;
                }): _368.QueryCurrentEpochRequest;
            };
            QueryCurrentEpochResponse: {
                encode(message: _368.QueryCurrentEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _368.QueryCurrentEpochResponse;
                fromJSON(object: any): _368.QueryCurrentEpochResponse;
                toJSON(message: _368.QueryCurrentEpochResponse): unknown;
                fromPartial(object: {
                    currentEpoch?: any;
                }): _368.QueryCurrentEpochResponse;
            };
            EpochInfo: {
                encode(message: _367.EpochInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _367.EpochInfo;
                fromJSON(object: any): _367.EpochInfo;
                toJSON(message: _367.EpochInfo): unknown;
                fromPartial(object: {
                    identifier?: string;
                    startTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    currentEpoch?: any;
                    currentEpochStartTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    epochCountingStarted?: boolean;
                    currentEpochStartHeight?: any;
                }): _367.EpochInfo;
            };
            GenesisState: {
                encode(message: _367.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _367.GenesisState;
                fromJSON(object: any): _367.GenesisState;
                toJSON(message: _367.GenesisState): unknown;
                fromPartial(object: {
                    epochs?: {
                        identifier?: string;
                        startTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        duration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        currentEpoch?: any;
                        currentEpochStartTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        epochCountingStarted?: boolean;
                        currentEpochStartHeight?: any;
                    }[];
                }): _367.GenesisState;
            };
        };
    }
    namespace erc20 {
        const v1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    convertCoin(value: _372.MsgConvertCoin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    convertERC20(value: _372.MsgConvertERC20): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    convertCoin(value: _372.MsgConvertCoin): {
                        typeUrl: string;
                        value: _372.MsgConvertCoin;
                    };
                    convertERC20(value: _372.MsgConvertERC20): {
                        typeUrl: string;
                        value: _372.MsgConvertERC20;
                    };
                };
                toJSON: {
                    convertCoin(value: _372.MsgConvertCoin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    convertERC20(value: _372.MsgConvertERC20): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    convertCoin(value: any): {
                        typeUrl: string;
                        value: _372.MsgConvertCoin;
                    };
                    convertERC20(value: any): {
                        typeUrl: string;
                        value: _372.MsgConvertERC20;
                    };
                };
                fromPartial: {
                    convertCoin(value: _372.MsgConvertCoin): {
                        typeUrl: string;
                        value: _372.MsgConvertCoin;
                    };
                    convertERC20(value: _372.MsgConvertERC20): {
                        typeUrl: string;
                        value: _372.MsgConvertERC20;
                    };
                };
            };
            AminoConverter: {
                "/evmos.erc20.v1.MsgConvertCoin": {
                    aminoType: string;
                    toAmino: ({ coin, receiver, sender }: _372.MsgConvertCoin) => {
                        coin: {
                            denom: string;
                            amount: string;
                        };
                        receiver: string;
                        sender: string;
                    };
                    fromAmino: ({ coin, receiver, sender }: {
                        coin: {
                            denom: string;
                            amount: string;
                        };
                        receiver: string;
                        sender: string;
                    }) => _372.MsgConvertCoin;
                };
                "/evmos.erc20.v1.MsgConvertERC20": {
                    aminoType: string;
                    toAmino: ({ contractAddress, amount, receiver, sender }: _372.MsgConvertERC20) => {
                        contract_address: string;
                        amount: string;
                        receiver: string;
                        sender: string;
                    };
                    fromAmino: ({ contract_address, amount, receiver, sender }: {
                        contract_address: string;
                        amount: string;
                        receiver: string;
                        sender: string;
                    }) => _372.MsgConvertERC20;
                };
            };
            MsgConvertCoin: {
                encode(message: _372.MsgConvertCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _372.MsgConvertCoin;
                fromJSON(object: any): _372.MsgConvertCoin;
                toJSON(message: _372.MsgConvertCoin): unknown;
                fromPartial(object: {
                    coin?: {
                        denom?: string;
                        amount?: string;
                    };
                    receiver?: string;
                    sender?: string;
                }): _372.MsgConvertCoin;
            };
            MsgConvertCoinResponse: {
                encode(_: _372.MsgConvertCoinResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _372.MsgConvertCoinResponse;
                fromJSON(_: any): _372.MsgConvertCoinResponse;
                toJSON(_: _372.MsgConvertCoinResponse): unknown;
                fromPartial(_: {}): _372.MsgConvertCoinResponse;
            };
            MsgConvertERC20: {
                encode(message: _372.MsgConvertERC20, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _372.MsgConvertERC20;
                fromJSON(object: any): _372.MsgConvertERC20;
                toJSON(message: _372.MsgConvertERC20): unknown;
                fromPartial(object: {
                    contractAddress?: string;
                    amount?: string;
                    receiver?: string;
                    sender?: string;
                }): _372.MsgConvertERC20;
            };
            MsgConvertERC20Response: {
                encode(_: _372.MsgConvertERC20Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _372.MsgConvertERC20Response;
                fromJSON(_: any): _372.MsgConvertERC20Response;
                toJSON(_: _372.MsgConvertERC20Response): unknown;
                fromPartial(_: {}): _372.MsgConvertERC20Response;
            };
            QueryTokenPairsRequest: {
                encode(message: _371.QueryTokenPairsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _371.QueryTokenPairsRequest;
                fromJSON(object: any): _371.QueryTokenPairsRequest;
                toJSON(message: _371.QueryTokenPairsRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _371.QueryTokenPairsRequest;
            };
            QueryTokenPairsResponse: {
                encode(message: _371.QueryTokenPairsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _371.QueryTokenPairsResponse;
                fromJSON(object: any): _371.QueryTokenPairsResponse;
                toJSON(message: _371.QueryTokenPairsResponse): unknown;
                fromPartial(object: {
                    tokenPairs?: {
                        erc20Address?: string;
                        denom?: string;
                        enabled?: boolean;
                        contractOwner?: _369.Owner;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _371.QueryTokenPairsResponse;
            };
            QueryTokenPairRequest: {
                encode(message: _371.QueryTokenPairRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _371.QueryTokenPairRequest;
                fromJSON(object: any): _371.QueryTokenPairRequest;
                toJSON(message: _371.QueryTokenPairRequest): unknown;
                fromPartial(object: {
                    token?: string;
                }): _371.QueryTokenPairRequest;
            };
            QueryTokenPairResponse: {
                encode(message: _371.QueryTokenPairResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _371.QueryTokenPairResponse;
                fromJSON(object: any): _371.QueryTokenPairResponse;
                toJSON(message: _371.QueryTokenPairResponse): unknown;
                fromPartial(object: {
                    tokenPair?: {
                        erc20Address?: string;
                        denom?: string;
                        enabled?: boolean;
                        contractOwner?: _369.Owner;
                    };
                }): _371.QueryTokenPairResponse;
            };
            QueryParamsRequest: {
                encode(_: _371.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _371.QueryParamsRequest;
                fromJSON(_: any): _371.QueryParamsRequest;
                toJSON(_: _371.QueryParamsRequest): unknown;
                fromPartial(_: {}): _371.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _371.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _371.QueryParamsResponse;
                fromJSON(object: any): _371.QueryParamsResponse;
                toJSON(message: _371.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        enableErc20?: boolean;
                        enableEvmHook?: boolean;
                    };
                }): _371.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _370.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _370.GenesisState;
                fromJSON(object: any): _370.GenesisState;
                toJSON(message: _370.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        enableErc20?: boolean;
                        enableEvmHook?: boolean;
                    };
                    tokenPairs?: {
                        erc20Address?: string;
                        denom?: string;
                        enabled?: boolean;
                        contractOwner?: _369.Owner;
                    }[];
                }): _370.GenesisState;
            };
            Params: {
                encode(message: _370.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _370.Params;
                fromJSON(object: any): _370.Params;
                toJSON(message: _370.Params): unknown;
                fromPartial(object: {
                    enableErc20?: boolean;
                    enableEvmHook?: boolean;
                }): _370.Params;
            };
            ownerFromJSON(object: any): _369.Owner;
            ownerToJSON(object: _369.Owner): string;
            Owner: typeof _369.Owner;
            TokenPair: {
                encode(message: _369.TokenPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _369.TokenPair;
                fromJSON(object: any): _369.TokenPair;
                toJSON(message: _369.TokenPair): unknown;
                fromPartial(object: {
                    erc20Address?: string;
                    denom?: string;
                    enabled?: boolean;
                    contractOwner?: _369.Owner;
                }): _369.TokenPair;
            };
            RegisterCoinProposal: {
                encode(message: _369.RegisterCoinProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _369.RegisterCoinProposal;
                fromJSON(object: any): _369.RegisterCoinProposal;
                toJSON(message: _369.RegisterCoinProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    metadata?: {
                        description?: string;
                        denomUnits?: {
                            denom?: string;
                            exponent?: number;
                            aliases?: string[];
                        }[];
                        base?: string;
                        display?: string;
                        name?: string;
                        symbol?: string;
                        uri?: string;
                        uriHash?: string;
                    };
                }): _369.RegisterCoinProposal;
            };
            RegisterERC20Proposal: {
                encode(message: _369.RegisterERC20Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _369.RegisterERC20Proposal;
                fromJSON(object: any): _369.RegisterERC20Proposal;
                toJSON(message: _369.RegisterERC20Proposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    erc20address?: string;
                }): _369.RegisterERC20Proposal;
            };
            ToggleTokenConversionProposal: {
                encode(message: _369.ToggleTokenConversionProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _369.ToggleTokenConversionProposal;
                fromJSON(object: any): _369.ToggleTokenConversionProposal;
                toJSON(message: _369.ToggleTokenConversionProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    token?: string;
                }): _369.ToggleTokenConversionProposal;
            };
        };
    }
    namespace feesplit {
        const v1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    registerFeeSplit(value: _376.MsgRegisterFeeSplit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateFeeSplit(value: _376.MsgUpdateFeeSplit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelFeeSplit(value: _376.MsgCancelFeeSplit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    registerFeeSplit(value: _376.MsgRegisterFeeSplit): {
                        typeUrl: string;
                        value: _376.MsgRegisterFeeSplit;
                    };
                    updateFeeSplit(value: _376.MsgUpdateFeeSplit): {
                        typeUrl: string;
                        value: _376.MsgUpdateFeeSplit;
                    };
                    cancelFeeSplit(value: _376.MsgCancelFeeSplit): {
                        typeUrl: string;
                        value: _376.MsgCancelFeeSplit;
                    };
                };
                toJSON: {
                    registerFeeSplit(value: _376.MsgRegisterFeeSplit): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateFeeSplit(value: _376.MsgUpdateFeeSplit): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelFeeSplit(value: _376.MsgCancelFeeSplit): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    registerFeeSplit(value: any): {
                        typeUrl: string;
                        value: _376.MsgRegisterFeeSplit;
                    };
                    updateFeeSplit(value: any): {
                        typeUrl: string;
                        value: _376.MsgUpdateFeeSplit;
                    };
                    cancelFeeSplit(value: any): {
                        typeUrl: string;
                        value: _376.MsgCancelFeeSplit;
                    };
                };
                fromPartial: {
                    registerFeeSplit(value: _376.MsgRegisterFeeSplit): {
                        typeUrl: string;
                        value: _376.MsgRegisterFeeSplit;
                    };
                    updateFeeSplit(value: _376.MsgUpdateFeeSplit): {
                        typeUrl: string;
                        value: _376.MsgUpdateFeeSplit;
                    };
                    cancelFeeSplit(value: _376.MsgCancelFeeSplit): {
                        typeUrl: string;
                        value: _376.MsgCancelFeeSplit;
                    };
                };
            };
            AminoConverter: {
                "/evmos.feesplit.v1.MsgRegisterFeeSplit": {
                    aminoType: string;
                    toAmino: ({ contractAddress, deployerAddress, withdrawerAddress, nonces }: _376.MsgRegisterFeeSplit) => {
                        contract_address: string;
                        deployer_address: string;
                        withdrawer_address: string;
                        nonces: import("long").Long[];
                    };
                    fromAmino: ({ contract_address, deployer_address, withdrawer_address, nonces }: {
                        contract_address: string;
                        deployer_address: string;
                        withdrawer_address: string;
                        nonces: import("long").Long[];
                    }) => _376.MsgRegisterFeeSplit;
                };
                "/evmos.feesplit.v1.MsgUpdateFeeSplit": {
                    aminoType: string;
                    toAmino: ({ contractAddress, deployerAddress, withdrawerAddress }: _376.MsgUpdateFeeSplit) => {
                        contract_address: string;
                        deployer_address: string;
                        withdrawer_address: string;
                    };
                    fromAmino: ({ contract_address, deployer_address, withdrawer_address }: {
                        contract_address: string;
                        deployer_address: string;
                        withdrawer_address: string;
                    }) => _376.MsgUpdateFeeSplit;
                };
                "/evmos.feesplit.v1.MsgCancelFeeSplit": {
                    aminoType: string;
                    toAmino: ({ contractAddress, deployerAddress }: _376.MsgCancelFeeSplit) => {
                        contract_address: string;
                        deployer_address: string;
                    };
                    fromAmino: ({ contract_address, deployer_address }: {
                        contract_address: string;
                        deployer_address: string;
                    }) => _376.MsgCancelFeeSplit;
                };
            };
            MsgRegisterFeeSplit: {
                encode(message: _376.MsgRegisterFeeSplit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _376.MsgRegisterFeeSplit;
                fromJSON(object: any): _376.MsgRegisterFeeSplit;
                toJSON(message: _376.MsgRegisterFeeSplit): unknown;
                fromPartial(object: {
                    contractAddress?: string;
                    deployerAddress?: string;
                    withdrawerAddress?: string;
                    nonces?: any[];
                }): _376.MsgRegisterFeeSplit;
            };
            MsgRegisterFeeSplitResponse: {
                encode(_: _376.MsgRegisterFeeSplitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _376.MsgRegisterFeeSplitResponse;
                fromJSON(_: any): _376.MsgRegisterFeeSplitResponse;
                toJSON(_: _376.MsgRegisterFeeSplitResponse): unknown;
                fromPartial(_: {}): _376.MsgRegisterFeeSplitResponse;
            };
            MsgUpdateFeeSplit: {
                encode(message: _376.MsgUpdateFeeSplit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _376.MsgUpdateFeeSplit;
                fromJSON(object: any): _376.MsgUpdateFeeSplit;
                toJSON(message: _376.MsgUpdateFeeSplit): unknown;
                fromPartial(object: {
                    contractAddress?: string;
                    deployerAddress?: string;
                    withdrawerAddress?: string;
                }): _376.MsgUpdateFeeSplit;
            };
            MsgUpdateFeeSplitResponse: {
                encode(_: _376.MsgUpdateFeeSplitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _376.MsgUpdateFeeSplitResponse;
                fromJSON(_: any): _376.MsgUpdateFeeSplitResponse;
                toJSON(_: _376.MsgUpdateFeeSplitResponse): unknown;
                fromPartial(_: {}): _376.MsgUpdateFeeSplitResponse;
            };
            MsgCancelFeeSplit: {
                encode(message: _376.MsgCancelFeeSplit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _376.MsgCancelFeeSplit;
                fromJSON(object: any): _376.MsgCancelFeeSplit;
                toJSON(message: _376.MsgCancelFeeSplit): unknown;
                fromPartial(object: {
                    contractAddress?: string;
                    deployerAddress?: string;
                }): _376.MsgCancelFeeSplit;
            };
            MsgCancelFeeSplitResponse: {
                encode(_: _376.MsgCancelFeeSplitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _376.MsgCancelFeeSplitResponse;
                fromJSON(_: any): _376.MsgCancelFeeSplitResponse;
                toJSON(_: _376.MsgCancelFeeSplitResponse): unknown;
                fromPartial(_: {}): _376.MsgCancelFeeSplitResponse;
            };
            QueryFeeSplitsRequest: {
                encode(message: _375.QueryFeeSplitsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _375.QueryFeeSplitsRequest;
                fromJSON(object: any): _375.QueryFeeSplitsRequest;
                toJSON(message: _375.QueryFeeSplitsRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _375.QueryFeeSplitsRequest;
            };
            QueryFeeSplitsResponse: {
                encode(message: _375.QueryFeeSplitsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _375.QueryFeeSplitsResponse;
                fromJSON(object: any): _375.QueryFeeSplitsResponse;
                toJSON(message: _375.QueryFeeSplitsResponse): unknown;
                fromPartial(object: {
                    feeSplits?: {
                        contractAddress?: string;
                        deployerAddress?: string;
                        withdrawerAddress?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _375.QueryFeeSplitsResponse;
            };
            QueryFeeSplitRequest: {
                encode(message: _375.QueryFeeSplitRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _375.QueryFeeSplitRequest;
                fromJSON(object: any): _375.QueryFeeSplitRequest;
                toJSON(message: _375.QueryFeeSplitRequest): unknown;
                fromPartial(object: {
                    contractAddress?: string;
                }): _375.QueryFeeSplitRequest;
            };
            QueryFeeSplitResponse: {
                encode(message: _375.QueryFeeSplitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _375.QueryFeeSplitResponse;
                fromJSON(object: any): _375.QueryFeeSplitResponse;
                toJSON(message: _375.QueryFeeSplitResponse): unknown;
                fromPartial(object: {
                    feeSplit?: {
                        contractAddress?: string;
                        deployerAddress?: string;
                        withdrawerAddress?: string;
                    };
                }): _375.QueryFeeSplitResponse;
            };
            QueryParamsRequest: {
                encode(_: _375.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _375.QueryParamsRequest;
                fromJSON(_: any): _375.QueryParamsRequest;
                toJSON(_: _375.QueryParamsRequest): unknown;
                fromPartial(_: {}): _375.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _375.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _375.QueryParamsResponse;
                fromJSON(object: any): _375.QueryParamsResponse;
                toJSON(message: _375.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        enableFeeSplit?: boolean;
                        developerShares?: string;
                        addrDerivationCostCreate?: any;
                    };
                }): _375.QueryParamsResponse;
            };
            QueryDeployerFeeSplitsRequest: {
                encode(message: _375.QueryDeployerFeeSplitsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _375.QueryDeployerFeeSplitsRequest;
                fromJSON(object: any): _375.QueryDeployerFeeSplitsRequest;
                toJSON(message: _375.QueryDeployerFeeSplitsRequest): unknown;
                fromPartial(object: {
                    deployerAddress?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _375.QueryDeployerFeeSplitsRequest;
            };
            QueryDeployerFeeSplitsResponse: {
                encode(message: _375.QueryDeployerFeeSplitsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _375.QueryDeployerFeeSplitsResponse;
                fromJSON(object: any): _375.QueryDeployerFeeSplitsResponse;
                toJSON(message: _375.QueryDeployerFeeSplitsResponse): unknown;
                fromPartial(object: {
                    contractAddresses?: string[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _375.QueryDeployerFeeSplitsResponse;
            };
            QueryWithdrawerFeeSplitsRequest: {
                encode(message: _375.QueryWithdrawerFeeSplitsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _375.QueryWithdrawerFeeSplitsRequest;
                fromJSON(object: any): _375.QueryWithdrawerFeeSplitsRequest;
                toJSON(message: _375.QueryWithdrawerFeeSplitsRequest): unknown;
                fromPartial(object: {
                    withdrawerAddress?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _375.QueryWithdrawerFeeSplitsRequest;
            };
            QueryWithdrawerFeeSplitsResponse: {
                encode(message: _375.QueryWithdrawerFeeSplitsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _375.QueryWithdrawerFeeSplitsResponse;
                fromJSON(object: any): _375.QueryWithdrawerFeeSplitsResponse;
                toJSON(message: _375.QueryWithdrawerFeeSplitsResponse): unknown;
                fromPartial(object: {
                    contractAddresses?: string[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _375.QueryWithdrawerFeeSplitsResponse;
            };
            GenesisState: {
                encode(message: _374.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _374.GenesisState;
                fromJSON(object: any): _374.GenesisState;
                toJSON(message: _374.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        enableFeeSplit?: boolean;
                        developerShares?: string;
                        addrDerivationCostCreate?: any;
                    };
                    feeSplits?: {
                        contractAddress?: string;
                        deployerAddress?: string;
                        withdrawerAddress?: string;
                    }[];
                }): _374.GenesisState;
            };
            Params: {
                encode(message: _374.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _374.Params;
                fromJSON(object: any): _374.Params;
                toJSON(message: _374.Params): unknown;
                fromPartial(object: {
                    enableFeeSplit?: boolean;
                    developerShares?: string;
                    addrDerivationCostCreate?: any;
                }): _374.Params;
            };
            FeeSplit: {
                encode(message: _373.FeeSplit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _373.FeeSplit;
                fromJSON(object: any): _373.FeeSplit;
                toJSON(message: _373.FeeSplit): unknown;
                fromPartial(object: {
                    contractAddress?: string;
                    deployerAddress?: string;
                    withdrawerAddress?: string;
                }): _373.FeeSplit;
            };
        };
    }
    namespace incentives {
        const v1: {
            QueryIncentivesRequest: {
                encode(message: _379.QueryIncentivesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _379.QueryIncentivesRequest;
                fromJSON(object: any): _379.QueryIncentivesRequest;
                toJSON(message: _379.QueryIncentivesRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _379.QueryIncentivesRequest;
            };
            QueryIncentivesResponse: {
                encode(message: _379.QueryIncentivesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _379.QueryIncentivesResponse;
                fromJSON(object: any): _379.QueryIncentivesResponse;
                toJSON(message: _379.QueryIncentivesResponse): unknown;
                fromPartial(object: {
                    incentives?: {
                        contract?: string;
                        allocations?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        epochs?: number;
                        startTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        totalGas?: any;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _379.QueryIncentivesResponse;
            };
            QueryIncentiveRequest: {
                encode(message: _379.QueryIncentiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _379.QueryIncentiveRequest;
                fromJSON(object: any): _379.QueryIncentiveRequest;
                toJSON(message: _379.QueryIncentiveRequest): unknown;
                fromPartial(object: {
                    contract?: string;
                }): _379.QueryIncentiveRequest;
            };
            QueryIncentiveResponse: {
                encode(message: _379.QueryIncentiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _379.QueryIncentiveResponse;
                fromJSON(object: any): _379.QueryIncentiveResponse;
                toJSON(message: _379.QueryIncentiveResponse): unknown;
                fromPartial(object: {
                    incentive?: {
                        contract?: string;
                        allocations?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        epochs?: number;
                        startTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        totalGas?: any;
                    };
                }): _379.QueryIncentiveResponse;
            };
            QueryGasMetersRequest: {
                encode(message: _379.QueryGasMetersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _379.QueryGasMetersRequest;
                fromJSON(object: any): _379.QueryGasMetersRequest;
                toJSON(message: _379.QueryGasMetersRequest): unknown;
                fromPartial(object: {
                    contract?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _379.QueryGasMetersRequest;
            };
            QueryGasMetersResponse: {
                encode(message: _379.QueryGasMetersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _379.QueryGasMetersResponse;
                fromJSON(object: any): _379.QueryGasMetersResponse;
                toJSON(message: _379.QueryGasMetersResponse): unknown;
                fromPartial(object: {
                    gasMeters?: {
                        contract?: string;
                        participant?: string;
                        cumulativeGas?: any;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _379.QueryGasMetersResponse;
            };
            QueryGasMeterRequest: {
                encode(message: _379.QueryGasMeterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _379.QueryGasMeterRequest;
                fromJSON(object: any): _379.QueryGasMeterRequest;
                toJSON(message: _379.QueryGasMeterRequest): unknown;
                fromPartial(object: {
                    contract?: string;
                    participant?: string;
                }): _379.QueryGasMeterRequest;
            };
            QueryGasMeterResponse: {
                encode(message: _379.QueryGasMeterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _379.QueryGasMeterResponse;
                fromJSON(object: any): _379.QueryGasMeterResponse;
                toJSON(message: _379.QueryGasMeterResponse): unknown;
                fromPartial(object: {
                    gasMeter?: any;
                }): _379.QueryGasMeterResponse;
            };
            QueryAllocationMetersRequest: {
                encode(message: _379.QueryAllocationMetersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _379.QueryAllocationMetersRequest;
                fromJSON(object: any): _379.QueryAllocationMetersRequest;
                toJSON(message: _379.QueryAllocationMetersRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _379.QueryAllocationMetersRequest;
            };
            QueryAllocationMetersResponse: {
                encode(message: _379.QueryAllocationMetersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _379.QueryAllocationMetersResponse;
                fromJSON(object: any): _379.QueryAllocationMetersResponse;
                toJSON(message: _379.QueryAllocationMetersResponse): unknown;
                fromPartial(object: {
                    allocationMeters?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _379.QueryAllocationMetersResponse;
            };
            QueryAllocationMeterRequest: {
                encode(message: _379.QueryAllocationMeterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _379.QueryAllocationMeterRequest;
                fromJSON(object: any): _379.QueryAllocationMeterRequest;
                toJSON(message: _379.QueryAllocationMeterRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _379.QueryAllocationMeterRequest;
            };
            QueryAllocationMeterResponse: {
                encode(message: _379.QueryAllocationMeterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _379.QueryAllocationMeterResponse;
                fromJSON(object: any): _379.QueryAllocationMeterResponse;
                toJSON(message: _379.QueryAllocationMeterResponse): unknown;
                fromPartial(object: {
                    allocationMeter?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _379.QueryAllocationMeterResponse;
            };
            QueryParamsRequest: {
                encode(_: _379.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _379.QueryParamsRequest;
                fromJSON(_: any): _379.QueryParamsRequest;
                toJSON(_: _379.QueryParamsRequest): unknown;
                fromPartial(_: {}): _379.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _379.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _379.QueryParamsResponse;
                fromJSON(object: any): _379.QueryParamsResponse;
                toJSON(message: _379.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        enableIncentives?: boolean;
                        allocationLimit?: string;
                        incentivesEpochIdentifier?: string;
                        rewardScaler?: string;
                    };
                }): _379.QueryParamsResponse;
            };
            Incentive: {
                encode(message: _378.Incentive, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _378.Incentive;
                fromJSON(object: any): _378.Incentive;
                toJSON(message: _378.Incentive): unknown;
                fromPartial(object: {
                    contract?: string;
                    allocations?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    epochs?: number;
                    startTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    totalGas?: any;
                }): _378.Incentive;
            };
            GasMeter: {
                encode(message: _378.GasMeter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _378.GasMeter;
                fromJSON(object: any): _378.GasMeter;
                toJSON(message: _378.GasMeter): unknown;
                fromPartial(object: {
                    contract?: string;
                    participant?: string;
                    cumulativeGas?: any;
                }): _378.GasMeter;
            };
            RegisterIncentiveProposal: {
                encode(message: _378.RegisterIncentiveProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _378.RegisterIncentiveProposal;
                fromJSON(object: any): _378.RegisterIncentiveProposal;
                toJSON(message: _378.RegisterIncentiveProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                    allocations?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    epochs?: number;
                }): _378.RegisterIncentiveProposal;
            };
            CancelIncentiveProposal: {
                encode(message: _378.CancelIncentiveProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _378.CancelIncentiveProposal;
                fromJSON(object: any): _378.CancelIncentiveProposal;
                toJSON(message: _378.CancelIncentiveProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                }): _378.CancelIncentiveProposal;
            };
            GenesisState: {
                encode(message: _377.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _377.GenesisState;
                fromJSON(object: any): _377.GenesisState;
                toJSON(message: _377.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        enableIncentives?: boolean;
                        allocationLimit?: string;
                        incentivesEpochIdentifier?: string;
                        rewardScaler?: string;
                    };
                    incentives?: {
                        contract?: string;
                        allocations?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        epochs?: number;
                        startTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        totalGas?: any;
                    }[];
                    gasMeters?: {
                        contract?: string;
                        participant?: string;
                        cumulativeGas?: any;
                    }[];
                }): _377.GenesisState;
            };
            Params: {
                encode(message: _377.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _377.Params;
                fromJSON(object: any): _377.Params;
                toJSON(message: _377.Params): unknown;
                fromPartial(object: {
                    enableIncentives?: boolean;
                    allocationLimit?: string;
                    incentivesEpochIdentifier?: string;
                    rewardScaler?: string;
                }): _377.Params;
            };
        };
    }
    namespace inflation {
        const v1: {
            QueryPeriodRequest: {
                encode(_: _382.QueryPeriodRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _382.QueryPeriodRequest;
                fromJSON(_: any): _382.QueryPeriodRequest;
                toJSON(_: _382.QueryPeriodRequest): unknown;
                fromPartial(_: {}): _382.QueryPeriodRequest;
            };
            QueryPeriodResponse: {
                encode(message: _382.QueryPeriodResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _382.QueryPeriodResponse;
                fromJSON(object: any): _382.QueryPeriodResponse;
                toJSON(message: _382.QueryPeriodResponse): unknown;
                fromPartial(object: {
                    period?: any;
                }): _382.QueryPeriodResponse;
            };
            QueryEpochMintProvisionRequest: {
                encode(_: _382.QueryEpochMintProvisionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _382.QueryEpochMintProvisionRequest;
                fromJSON(_: any): _382.QueryEpochMintProvisionRequest;
                toJSON(_: _382.QueryEpochMintProvisionRequest): unknown;
                fromPartial(_: {}): _382.QueryEpochMintProvisionRequest;
            };
            QueryEpochMintProvisionResponse: {
                encode(message: _382.QueryEpochMintProvisionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _382.QueryEpochMintProvisionResponse;
                fromJSON(object: any): _382.QueryEpochMintProvisionResponse;
                toJSON(message: _382.QueryEpochMintProvisionResponse): unknown;
                fromPartial(object: {
                    epochMintProvision?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _382.QueryEpochMintProvisionResponse;
            };
            QuerySkippedEpochsRequest: {
                encode(_: _382.QuerySkippedEpochsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _382.QuerySkippedEpochsRequest;
                fromJSON(_: any): _382.QuerySkippedEpochsRequest;
                toJSON(_: _382.QuerySkippedEpochsRequest): unknown;
                fromPartial(_: {}): _382.QuerySkippedEpochsRequest;
            };
            QuerySkippedEpochsResponse: {
                encode(message: _382.QuerySkippedEpochsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _382.QuerySkippedEpochsResponse;
                fromJSON(object: any): _382.QuerySkippedEpochsResponse;
                toJSON(message: _382.QuerySkippedEpochsResponse): unknown;
                fromPartial(object: {
                    skippedEpochs?: any;
                }): _382.QuerySkippedEpochsResponse;
            };
            QueryCirculatingSupplyRequest: {
                encode(_: _382.QueryCirculatingSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _382.QueryCirculatingSupplyRequest;
                fromJSON(_: any): _382.QueryCirculatingSupplyRequest;
                toJSON(_: _382.QueryCirculatingSupplyRequest): unknown;
                fromPartial(_: {}): _382.QueryCirculatingSupplyRequest;
            };
            QueryCirculatingSupplyResponse: {
                encode(message: _382.QueryCirculatingSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _382.QueryCirculatingSupplyResponse;
                fromJSON(object: any): _382.QueryCirculatingSupplyResponse;
                toJSON(message: _382.QueryCirculatingSupplyResponse): unknown;
                fromPartial(object: {
                    circulatingSupply?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _382.QueryCirculatingSupplyResponse;
            };
            QueryInflationRateRequest: {
                encode(_: _382.QueryInflationRateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _382.QueryInflationRateRequest;
                fromJSON(_: any): _382.QueryInflationRateRequest;
                toJSON(_: _382.QueryInflationRateRequest): unknown;
                fromPartial(_: {}): _382.QueryInflationRateRequest;
            };
            QueryInflationRateResponse: {
                encode(message: _382.QueryInflationRateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _382.QueryInflationRateResponse;
                fromJSON(object: any): _382.QueryInflationRateResponse;
                toJSON(message: _382.QueryInflationRateResponse): unknown;
                fromPartial(object: {
                    inflationRate?: string;
                }): _382.QueryInflationRateResponse;
            };
            QueryParamsRequest: {
                encode(_: _382.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _382.QueryParamsRequest;
                fromJSON(_: any): _382.QueryParamsRequest;
                toJSON(_: _382.QueryParamsRequest): unknown;
                fromPartial(_: {}): _382.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _382.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _382.QueryParamsResponse;
                fromJSON(object: any): _382.QueryParamsResponse;
                toJSON(message: _382.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        mintDenom?: string;
                        exponentialCalculation?: {
                            a?: string;
                            r?: string;
                            c?: string;
                            bondingTarget?: string;
                            maxVariance?: string;
                        };
                        inflationDistribution?: {
                            stakingRewards?: string;
                            usageIncentives?: string;
                            communityPool?: string;
                        };
                        enableInflation?: boolean;
                    };
                }): _382.QueryParamsResponse;
            };
            InflationDistribution: {
                encode(message: _381.InflationDistribution, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _381.InflationDistribution;
                fromJSON(object: any): _381.InflationDistribution;
                toJSON(message: _381.InflationDistribution): unknown;
                fromPartial(object: {
                    stakingRewards?: string;
                    usageIncentives?: string;
                    communityPool?: string;
                }): _381.InflationDistribution;
            };
            ExponentialCalculation: {
                encode(message: _381.ExponentialCalculation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _381.ExponentialCalculation;
                fromJSON(object: any): _381.ExponentialCalculation;
                toJSON(message: _381.ExponentialCalculation): unknown;
                fromPartial(object: {
                    a?: string;
                    r?: string;
                    c?: string;
                    bondingTarget?: string;
                    maxVariance?: string;
                }): _381.ExponentialCalculation;
            };
            GenesisState: {
                encode(message: _380.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _380.GenesisState;
                fromJSON(object: any): _380.GenesisState;
                toJSON(message: _380.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        mintDenom?: string;
                        exponentialCalculation?: {
                            a?: string;
                            r?: string;
                            c?: string;
                            bondingTarget?: string;
                            maxVariance?: string;
                        };
                        inflationDistribution?: {
                            stakingRewards?: string;
                            usageIncentives?: string;
                            communityPool?: string;
                        };
                        enableInflation?: boolean;
                    };
                    period?: any;
                    epochIdentifier?: string;
                    epochsPerPeriod?: any;
                    skippedEpochs?: any;
                }): _380.GenesisState;
            };
            Params: {
                encode(message: _380.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _380.Params;
                fromJSON(object: any): _380.Params;
                toJSON(message: _380.Params): unknown;
                fromPartial(object: {
                    mintDenom?: string;
                    exponentialCalculation?: {
                        a?: string;
                        r?: string;
                        c?: string;
                        bondingTarget?: string;
                        maxVariance?: string;
                    };
                    inflationDistribution?: {
                        stakingRewards?: string;
                        usageIncentives?: string;
                        communityPool?: string;
                    };
                    enableInflation?: boolean;
                }): _380.Params;
            };
        };
    }
    namespace recovery {
        const v1: {
            QueryParamsRequest: {
                encode(_: _384.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _384.QueryParamsRequest;
                fromJSON(_: any): _384.QueryParamsRequest;
                toJSON(_: _384.QueryParamsRequest): unknown;
                fromPartial(_: {}): _384.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _384.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _384.QueryParamsResponse;
                fromJSON(object: any): _384.QueryParamsResponse;
                toJSON(message: _384.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        enableRecovery?: boolean;
                        packetTimeoutDuration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                }): _384.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _383.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _383.GenesisState;
                fromJSON(object: any): _383.GenesisState;
                toJSON(message: _383.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        enableRecovery?: boolean;
                        packetTimeoutDuration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                }): _383.GenesisState;
            };
            Params: {
                encode(message: _383.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _383.Params;
                fromJSON(object: any): _383.Params;
                toJSON(message: _383.Params): unknown;
                fromPartial(object: {
                    enableRecovery?: boolean;
                    packetTimeoutDuration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _383.Params;
            };
        };
    }
    namespace vesting {
        const v1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createClawbackVestingAccount(value: _386.MsgCreateClawbackVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clawback(value: _386.MsgClawback): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createClawbackVestingAccount(value: _386.MsgCreateClawbackVestingAccount): {
                        typeUrl: string;
                        value: _386.MsgCreateClawbackVestingAccount;
                    };
                    clawback(value: _386.MsgClawback): {
                        typeUrl: string;
                        value: _386.MsgClawback;
                    };
                };
                toJSON: {
                    createClawbackVestingAccount(value: _386.MsgCreateClawbackVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    clawback(value: _386.MsgClawback): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createClawbackVestingAccount(value: any): {
                        typeUrl: string;
                        value: _386.MsgCreateClawbackVestingAccount;
                    };
                    clawback(value: any): {
                        typeUrl: string;
                        value: _386.MsgClawback;
                    };
                };
                fromPartial: {
                    createClawbackVestingAccount(value: _386.MsgCreateClawbackVestingAccount): {
                        typeUrl: string;
                        value: _386.MsgCreateClawbackVestingAccount;
                    };
                    clawback(value: _386.MsgClawback): {
                        typeUrl: string;
                        value: _386.MsgClawback;
                    };
                };
            };
            AminoConverter: {
                "/evmos.vesting.v1.MsgCreateClawbackVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, startTime, lockupPeriods, vestingPeriods, merge }: _386.MsgCreateClawbackVestingAccount) => {
                        from_address: string;
                        to_address: string;
                        start_time: {
                            seconds: string;
                            nanos: number;
                        };
                        lockup_periods: {
                            length: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        vesting_periods: {
                            length: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        merge: boolean;
                    };
                    fromAmino: ({ from_address, to_address, start_time, lockup_periods, vesting_periods, merge }: {
                        from_address: string;
                        to_address: string;
                        start_time: {
                            seconds: string;
                            nanos: number;
                        };
                        lockup_periods: {
                            length: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        vesting_periods: {
                            length: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        merge: boolean;
                    }) => _386.MsgCreateClawbackVestingAccount;
                };
                "/evmos.vesting.v1.MsgClawback": {
                    aminoType: string;
                    toAmino: ({ funderAddress, accountAddress, destAddress }: _386.MsgClawback) => {
                        funder_address: string;
                        account_address: string;
                        dest_address: string;
                    };
                    fromAmino: ({ funder_address, account_address, dest_address }: {
                        funder_address: string;
                        account_address: string;
                        dest_address: string;
                    }) => _386.MsgClawback;
                };
            };
            ClawbackVestingAccount: {
                encode(message: _387.ClawbackVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _387.ClawbackVestingAccount;
                fromJSON(object: any): _387.ClawbackVestingAccount;
                toJSON(message: _387.ClawbackVestingAccount): unknown;
                fromPartial(object: {
                    baseVestingAccount?: {
                        baseAccount?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            accountNumber?: any;
                            sequence?: any;
                        };
                        originalVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedFree?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        endTime?: any;
                    };
                    funderAddress?: string;
                    startTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    lockupPeriods?: {
                        length?: any;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    vestingPeriods?: {
                        length?: any;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _387.ClawbackVestingAccount;
            };
            MsgCreateClawbackVestingAccount: {
                encode(message: _386.MsgCreateClawbackVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _386.MsgCreateClawbackVestingAccount;
                fromJSON(object: any): _386.MsgCreateClawbackVestingAccount;
                toJSON(message: _386.MsgCreateClawbackVestingAccount): unknown;
                fromPartial(object: {
                    fromAddress?: string;
                    toAddress?: string;
                    startTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    lockupPeriods?: {
                        length?: any;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    vestingPeriods?: {
                        length?: any;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    merge?: boolean;
                }): _386.MsgCreateClawbackVestingAccount;
            };
            MsgCreateClawbackVestingAccountResponse: {
                encode(_: _386.MsgCreateClawbackVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _386.MsgCreateClawbackVestingAccountResponse;
                fromJSON(_: any): _386.MsgCreateClawbackVestingAccountResponse;
                toJSON(_: _386.MsgCreateClawbackVestingAccountResponse): unknown;
                fromPartial(_: {}): _386.MsgCreateClawbackVestingAccountResponse;
            };
            MsgClawback: {
                encode(message: _386.MsgClawback, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _386.MsgClawback;
                fromJSON(object: any): _386.MsgClawback;
                toJSON(message: _386.MsgClawback): unknown;
                fromPartial(object: {
                    funderAddress?: string;
                    accountAddress?: string;
                    destAddress?: string;
                }): _386.MsgClawback;
            };
            MsgClawbackResponse: {
                encode(_: _386.MsgClawbackResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _386.MsgClawbackResponse;
                fromJSON(_: any): _386.MsgClawbackResponse;
                toJSON(_: _386.MsgClawbackResponse): unknown;
                fromPartial(_: {}): _386.MsgClawbackResponse;
            };
            QueryBalancesRequest: {
                encode(message: _385.QueryBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _385.QueryBalancesRequest;
                fromJSON(object: any): _385.QueryBalancesRequest;
                toJSON(message: _385.QueryBalancesRequest): unknown;
                fromPartial(object: {
                    address?: string;
                }): _385.QueryBalancesRequest;
            };
            QueryBalancesResponse: {
                encode(message: _385.QueryBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _385.QueryBalancesResponse;
                fromJSON(object: any): _385.QueryBalancesResponse;
                toJSON(message: _385.QueryBalancesResponse): unknown;
                fromPartial(object: {
                    locked?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    unvested?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    vested?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _385.QueryBalancesResponse;
            };
        };
    }
}
