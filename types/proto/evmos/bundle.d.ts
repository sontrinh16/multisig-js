/// <reference types="long" />
import * as _296 from "./claims/v1/claims";
import * as _297 from "./claims/v1/genesis";
import * as _298 from "./claims/v1/query";
import * as _299 from "./epochs/v1/genesis";
import * as _300 from "./epochs/v1/query";
import * as _301 from "./erc20/v1/erc20";
import * as _302 from "./erc20/v1/genesis";
import * as _303 from "./erc20/v1/query";
import * as _304 from "./erc20/v1/tx";
import * as _305 from "./feesplit/v1/feesplit";
import * as _306 from "./feesplit/v1/genesis";
import * as _307 from "./feesplit/v1/query";
import * as _308 from "./feesplit/v1/tx";
import * as _309 from "./incentives/v1/genesis";
import * as _310 from "./incentives/v1/incentives";
import * as _311 from "./incentives/v1/query";
import * as _312 from "./inflation/v1/genesis";
import * as _313 from "./inflation/v1/inflation";
import * as _314 from "./inflation/v1/query";
import * as _315 from "./recovery/v1/genesis";
import * as _316 from "./recovery/v1/query";
import * as _317 from "./vesting/v1/query";
import * as _318 from "./vesting/v1/tx";
import * as _319 from "./vesting/v1/vesting";
export declare namespace evmos {
    namespace claims {
        const v1: {
            QueryTotalUnclaimedRequest: {
                encode(_: _298.QueryTotalUnclaimedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _298.QueryTotalUnclaimedRequest;
                fromJSON(_: any): _298.QueryTotalUnclaimedRequest;
                toJSON(_: _298.QueryTotalUnclaimedRequest): unknown;
                fromPartial(_: {}): _298.QueryTotalUnclaimedRequest;
            };
            QueryTotalUnclaimedResponse: {
                encode(message: _298.QueryTotalUnclaimedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _298.QueryTotalUnclaimedResponse;
                fromJSON(object: any): _298.QueryTotalUnclaimedResponse;
                toJSON(message: _298.QueryTotalUnclaimedResponse): unknown;
                fromPartial(object: {
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _298.QueryTotalUnclaimedResponse;
            };
            QueryParamsRequest: {
                encode(_: _298.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _298.QueryParamsRequest;
                fromJSON(_: any): _298.QueryParamsRequest;
                toJSON(_: _298.QueryParamsRequest): unknown;
                fromPartial(_: {}): _298.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _298.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _298.QueryParamsResponse;
                fromJSON(object: any): _298.QueryParamsResponse;
                toJSON(message: _298.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        enableClaims?: boolean;
                        airdropStartTime?: Date;
                        durationUntilDecay?: string;
                        durationOfDecay?: string;
                        claimsDenom?: string;
                        authorizedChannels?: string[];
                        evmChannels?: string[];
                    };
                }): _298.QueryParamsResponse;
            };
            QueryClaimsRecordsRequest: {
                encode(message: _298.QueryClaimsRecordsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _298.QueryClaimsRecordsRequest;
                fromJSON(object: any): _298.QueryClaimsRecordsRequest;
                toJSON(message: _298.QueryClaimsRecordsRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _298.QueryClaimsRecordsRequest;
            };
            QueryClaimsRecordsResponse: {
                encode(message: _298.QueryClaimsRecordsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _298.QueryClaimsRecordsResponse;
                fromJSON(object: any): _298.QueryClaimsRecordsResponse;
                toJSON(message: _298.QueryClaimsRecordsResponse): unknown;
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
                }): _298.QueryClaimsRecordsResponse;
            };
            QueryClaimsRecordRequest: {
                encode(message: _298.QueryClaimsRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _298.QueryClaimsRecordRequest;
                fromJSON(object: any): _298.QueryClaimsRecordRequest;
                toJSON(message: _298.QueryClaimsRecordRequest): unknown;
                fromPartial(object: {
                    address?: string;
                }): _298.QueryClaimsRecordRequest;
            };
            QueryClaimsRecordResponse: {
                encode(message: _298.QueryClaimsRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _298.QueryClaimsRecordResponse;
                fromJSON(object: any): _298.QueryClaimsRecordResponse;
                toJSON(message: _298.QueryClaimsRecordResponse): unknown;
                fromPartial(object: {
                    initialClaimableAmount?: string;
                    claims?: {
                        action?: _296.Action;
                        completed?: boolean;
                        claimableAmount?: string;
                    }[];
                }): _298.QueryClaimsRecordResponse;
            };
            GenesisState: {
                encode(message: _297.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _297.GenesisState;
                fromJSON(object: any): _297.GenesisState;
                toJSON(message: _297.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        enableClaims?: boolean;
                        airdropStartTime?: Date;
                        durationUntilDecay?: string;
                        durationOfDecay?: string;
                        claimsDenom?: string;
                        authorizedChannels?: string[];
                        evmChannels?: string[];
                    };
                    claimsRecords?: {
                        address?: string;
                        initialClaimableAmount?: string;
                        actionsCompleted?: boolean[];
                    }[];
                }): _297.GenesisState;
            };
            Params: {
                encode(message: _297.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _297.Params;
                fromJSON(object: any): _297.Params;
                toJSON(message: _297.Params): unknown;
                fromPartial(object: {
                    enableClaims?: boolean;
                    airdropStartTime?: Date;
                    durationUntilDecay?: string;
                    durationOfDecay?: string;
                    claimsDenom?: string;
                    authorizedChannels?: string[];
                    evmChannels?: string[];
                }): _297.Params;
            };
            actionFromJSON(object: any): _296.Action;
            actionToJSON(object: _296.Action): string;
            Action: typeof _296.Action;
            Claim: {
                encode(message: _296.Claim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _296.Claim;
                fromJSON(object: any): _296.Claim;
                toJSON(message: _296.Claim): unknown;
                fromPartial(object: {
                    action?: _296.Action;
                    completed?: boolean;
                    claimableAmount?: string;
                }): _296.Claim;
            };
            ClaimsRecordAddress: {
                encode(message: _296.ClaimsRecordAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _296.ClaimsRecordAddress;
                fromJSON(object: any): _296.ClaimsRecordAddress;
                toJSON(message: _296.ClaimsRecordAddress): unknown;
                fromPartial(object: {
                    address?: string;
                    initialClaimableAmount?: string;
                    actionsCompleted?: boolean[];
                }): _296.ClaimsRecordAddress;
            };
            ClaimsRecord: {
                encode(message: _296.ClaimsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _296.ClaimsRecord;
                fromJSON(object: any): _296.ClaimsRecord;
                toJSON(message: _296.ClaimsRecord): unknown;
                fromPartial(object: {
                    initialClaimableAmount?: string;
                    actionsCompleted?: boolean[];
                }): _296.ClaimsRecord;
            };
        };
    }
    namespace epochs {
        const v1: {
            QueryEpochsInfoRequest: {
                encode(message: _300.QueryEpochsInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _300.QueryEpochsInfoRequest;
                fromJSON(object: any): _300.QueryEpochsInfoRequest;
                toJSON(message: _300.QueryEpochsInfoRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _300.QueryEpochsInfoRequest;
            };
            QueryEpochsInfoResponse: {
                encode(message: _300.QueryEpochsInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _300.QueryEpochsInfoResponse;
                fromJSON(object: any): _300.QueryEpochsInfoResponse;
                toJSON(message: _300.QueryEpochsInfoResponse): unknown;
                fromPartial(object: {
                    epochs?: {
                        identifier?: string;
                        startTime?: Date;
                        duration?: string;
                        currentEpoch?: any;
                        currentEpochStartTime?: Date;
                        epochCountingStarted?: boolean;
                        currentEpochStartHeight?: any;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _300.QueryEpochsInfoResponse;
            };
            QueryCurrentEpochRequest: {
                encode(message: _300.QueryCurrentEpochRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _300.QueryCurrentEpochRequest;
                fromJSON(object: any): _300.QueryCurrentEpochRequest;
                toJSON(message: _300.QueryCurrentEpochRequest): unknown;
                fromPartial(object: {
                    identifier?: string;
                }): _300.QueryCurrentEpochRequest;
            };
            QueryCurrentEpochResponse: {
                encode(message: _300.QueryCurrentEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _300.QueryCurrentEpochResponse;
                fromJSON(object: any): _300.QueryCurrentEpochResponse;
                toJSON(message: _300.QueryCurrentEpochResponse): unknown;
                fromPartial(object: {
                    currentEpoch?: any;
                }): _300.QueryCurrentEpochResponse;
            };
            EpochInfo: {
                encode(message: _299.EpochInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _299.EpochInfo;
                fromJSON(object: any): _299.EpochInfo;
                toJSON(message: _299.EpochInfo): unknown;
                fromPartial(object: {
                    identifier?: string;
                    startTime?: Date;
                    duration?: string;
                    currentEpoch?: any;
                    currentEpochStartTime?: Date;
                    epochCountingStarted?: boolean;
                    currentEpochStartHeight?: any;
                }): _299.EpochInfo;
            };
            GenesisState: {
                encode(message: _299.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _299.GenesisState;
                fromJSON(object: any): _299.GenesisState;
                toJSON(message: _299.GenesisState): unknown;
                fromPartial(object: {
                    epochs?: {
                        identifier?: string;
                        startTime?: Date;
                        duration?: string;
                        currentEpoch?: any;
                        currentEpochStartTime?: Date;
                        epochCountingStarted?: boolean;
                        currentEpochStartHeight?: any;
                    }[];
                }): _299.GenesisState;
            };
        };
    }
    namespace erc20 {
        const v1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    convertCoin(value: _304.MsgConvertCoin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    convertERC20(value: _304.MsgConvertERC20): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    convertCoin(value: _304.MsgConvertCoin): {
                        typeUrl: string;
                        value: _304.MsgConvertCoin;
                    };
                    convertERC20(value: _304.MsgConvertERC20): {
                        typeUrl: string;
                        value: _304.MsgConvertERC20;
                    };
                };
                toJSON: {
                    convertCoin(value: _304.MsgConvertCoin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    convertERC20(value: _304.MsgConvertERC20): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    convertCoin(value: any): {
                        typeUrl: string;
                        value: _304.MsgConvertCoin;
                    };
                    convertERC20(value: any): {
                        typeUrl: string;
                        value: _304.MsgConvertERC20;
                    };
                };
                fromPartial: {
                    convertCoin(value: _304.MsgConvertCoin): {
                        typeUrl: string;
                        value: _304.MsgConvertCoin;
                    };
                    convertERC20(value: _304.MsgConvertERC20): {
                        typeUrl: string;
                        value: _304.MsgConvertERC20;
                    };
                };
            };
            AminoConverter: {
                "/evmos.erc20.v1.MsgConvertCoin": {
                    aminoType: string;
                    toAmino: ({ coin, receiver, sender }: _304.MsgConvertCoin) => {
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
                    }) => _304.MsgConvertCoin;
                };
                "/evmos.erc20.v1.MsgConvertERC20": {
                    aminoType: string;
                    toAmino: ({ contractAddress, amount, receiver, sender }: _304.MsgConvertERC20) => {
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
                    }) => _304.MsgConvertERC20;
                };
            };
            MsgConvertCoin: {
                encode(message: _304.MsgConvertCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.MsgConvertCoin;
                fromJSON(object: any): _304.MsgConvertCoin;
                toJSON(message: _304.MsgConvertCoin): unknown;
                fromPartial(object: {
                    coin?: {
                        denom?: string;
                        amount?: string;
                    };
                    receiver?: string;
                    sender?: string;
                }): _304.MsgConvertCoin;
            };
            MsgConvertCoinResponse: {
                encode(_: _304.MsgConvertCoinResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.MsgConvertCoinResponse;
                fromJSON(_: any): _304.MsgConvertCoinResponse;
                toJSON(_: _304.MsgConvertCoinResponse): unknown;
                fromPartial(_: {}): _304.MsgConvertCoinResponse;
            };
            MsgConvertERC20: {
                encode(message: _304.MsgConvertERC20, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.MsgConvertERC20;
                fromJSON(object: any): _304.MsgConvertERC20;
                toJSON(message: _304.MsgConvertERC20): unknown;
                fromPartial(object: {
                    contractAddress?: string;
                    amount?: string;
                    receiver?: string;
                    sender?: string;
                }): _304.MsgConvertERC20;
            };
            MsgConvertERC20Response: {
                encode(_: _304.MsgConvertERC20Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _304.MsgConvertERC20Response;
                fromJSON(_: any): _304.MsgConvertERC20Response;
                toJSON(_: _304.MsgConvertERC20Response): unknown;
                fromPartial(_: {}): _304.MsgConvertERC20Response;
            };
            QueryTokenPairsRequest: {
                encode(message: _303.QueryTokenPairsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _303.QueryTokenPairsRequest;
                fromJSON(object: any): _303.QueryTokenPairsRequest;
                toJSON(message: _303.QueryTokenPairsRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _303.QueryTokenPairsRequest;
            };
            QueryTokenPairsResponse: {
                encode(message: _303.QueryTokenPairsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _303.QueryTokenPairsResponse;
                fromJSON(object: any): _303.QueryTokenPairsResponse;
                toJSON(message: _303.QueryTokenPairsResponse): unknown;
                fromPartial(object: {
                    tokenPairs?: {
                        erc20Address?: string;
                        denom?: string;
                        enabled?: boolean;
                        contractOwner?: _301.Owner;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _303.QueryTokenPairsResponse;
            };
            QueryTokenPairRequest: {
                encode(message: _303.QueryTokenPairRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _303.QueryTokenPairRequest;
                fromJSON(object: any): _303.QueryTokenPairRequest;
                toJSON(message: _303.QueryTokenPairRequest): unknown;
                fromPartial(object: {
                    token?: string;
                }): _303.QueryTokenPairRequest;
            };
            QueryTokenPairResponse: {
                encode(message: _303.QueryTokenPairResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _303.QueryTokenPairResponse;
                fromJSON(object: any): _303.QueryTokenPairResponse;
                toJSON(message: _303.QueryTokenPairResponse): unknown;
                fromPartial(object: {
                    tokenPair?: {
                        erc20Address?: string;
                        denom?: string;
                        enabled?: boolean;
                        contractOwner?: _301.Owner;
                    };
                }): _303.QueryTokenPairResponse;
            };
            QueryParamsRequest: {
                encode(_: _303.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _303.QueryParamsRequest;
                fromJSON(_: any): _303.QueryParamsRequest;
                toJSON(_: _303.QueryParamsRequest): unknown;
                fromPartial(_: {}): _303.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _303.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _303.QueryParamsResponse;
                fromJSON(object: any): _303.QueryParamsResponse;
                toJSON(message: _303.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        enableErc20?: boolean;
                        enableEvmHook?: boolean;
                    };
                }): _303.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _302.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _302.GenesisState;
                fromJSON(object: any): _302.GenesisState;
                toJSON(message: _302.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        enableErc20?: boolean;
                        enableEvmHook?: boolean;
                    };
                    tokenPairs?: {
                        erc20Address?: string;
                        denom?: string;
                        enabled?: boolean;
                        contractOwner?: _301.Owner;
                    }[];
                }): _302.GenesisState;
            };
            Params: {
                encode(message: _302.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _302.Params;
                fromJSON(object: any): _302.Params;
                toJSON(message: _302.Params): unknown;
                fromPartial(object: {
                    enableErc20?: boolean;
                    enableEvmHook?: boolean;
                }): _302.Params;
            };
            ownerFromJSON(object: any): _301.Owner;
            ownerToJSON(object: _301.Owner): string;
            Owner: typeof _301.Owner;
            TokenPair: {
                encode(message: _301.TokenPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _301.TokenPair;
                fromJSON(object: any): _301.TokenPair;
                toJSON(message: _301.TokenPair): unknown;
                fromPartial(object: {
                    erc20Address?: string;
                    denom?: string;
                    enabled?: boolean;
                    contractOwner?: _301.Owner;
                }): _301.TokenPair;
            };
            RegisterCoinProposal: {
                encode(message: _301.RegisterCoinProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _301.RegisterCoinProposal;
                fromJSON(object: any): _301.RegisterCoinProposal;
                toJSON(message: _301.RegisterCoinProposal): unknown;
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
                }): _301.RegisterCoinProposal;
            };
            RegisterERC20Proposal: {
                encode(message: _301.RegisterERC20Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _301.RegisterERC20Proposal;
                fromJSON(object: any): _301.RegisterERC20Proposal;
                toJSON(message: _301.RegisterERC20Proposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    erc20address?: string;
                }): _301.RegisterERC20Proposal;
            };
            ToggleTokenConversionProposal: {
                encode(message: _301.ToggleTokenConversionProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _301.ToggleTokenConversionProposal;
                fromJSON(object: any): _301.ToggleTokenConversionProposal;
                toJSON(message: _301.ToggleTokenConversionProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    token?: string;
                }): _301.ToggleTokenConversionProposal;
            };
        };
    }
    namespace feesplit {
        const v1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    registerFeeSplit(value: _308.MsgRegisterFeeSplit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateFeeSplit(value: _308.MsgUpdateFeeSplit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelFeeSplit(value: _308.MsgCancelFeeSplit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    registerFeeSplit(value: _308.MsgRegisterFeeSplit): {
                        typeUrl: string;
                        value: _308.MsgRegisterFeeSplit;
                    };
                    updateFeeSplit(value: _308.MsgUpdateFeeSplit): {
                        typeUrl: string;
                        value: _308.MsgUpdateFeeSplit;
                    };
                    cancelFeeSplit(value: _308.MsgCancelFeeSplit): {
                        typeUrl: string;
                        value: _308.MsgCancelFeeSplit;
                    };
                };
                toJSON: {
                    registerFeeSplit(value: _308.MsgRegisterFeeSplit): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateFeeSplit(value: _308.MsgUpdateFeeSplit): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelFeeSplit(value: _308.MsgCancelFeeSplit): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    registerFeeSplit(value: any): {
                        typeUrl: string;
                        value: _308.MsgRegisterFeeSplit;
                    };
                    updateFeeSplit(value: any): {
                        typeUrl: string;
                        value: _308.MsgUpdateFeeSplit;
                    };
                    cancelFeeSplit(value: any): {
                        typeUrl: string;
                        value: _308.MsgCancelFeeSplit;
                    };
                };
                fromPartial: {
                    registerFeeSplit(value: _308.MsgRegisterFeeSplit): {
                        typeUrl: string;
                        value: _308.MsgRegisterFeeSplit;
                    };
                    updateFeeSplit(value: _308.MsgUpdateFeeSplit): {
                        typeUrl: string;
                        value: _308.MsgUpdateFeeSplit;
                    };
                    cancelFeeSplit(value: _308.MsgCancelFeeSplit): {
                        typeUrl: string;
                        value: _308.MsgCancelFeeSplit;
                    };
                };
            };
            AminoConverter: {
                "/evmos.feesplit.v1.MsgRegisterFeeSplit": {
                    aminoType: string;
                    toAmino: ({ contractAddress, deployerAddress, withdrawerAddress, nonces }: _308.MsgRegisterFeeSplit) => {
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
                    }) => _308.MsgRegisterFeeSplit;
                };
                "/evmos.feesplit.v1.MsgUpdateFeeSplit": {
                    aminoType: string;
                    toAmino: ({ contractAddress, deployerAddress, withdrawerAddress }: _308.MsgUpdateFeeSplit) => {
                        contract_address: string;
                        deployer_address: string;
                        withdrawer_address: string;
                    };
                    fromAmino: ({ contract_address, deployer_address, withdrawer_address }: {
                        contract_address: string;
                        deployer_address: string;
                        withdrawer_address: string;
                    }) => _308.MsgUpdateFeeSplit;
                };
                "/evmos.feesplit.v1.MsgCancelFeeSplit": {
                    aminoType: string;
                    toAmino: ({ contractAddress, deployerAddress }: _308.MsgCancelFeeSplit) => {
                        contract_address: string;
                        deployer_address: string;
                    };
                    fromAmino: ({ contract_address, deployer_address }: {
                        contract_address: string;
                        deployer_address: string;
                    }) => _308.MsgCancelFeeSplit;
                };
            };
            MsgRegisterFeeSplit: {
                encode(message: _308.MsgRegisterFeeSplit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _308.MsgRegisterFeeSplit;
                fromJSON(object: any): _308.MsgRegisterFeeSplit;
                toJSON(message: _308.MsgRegisterFeeSplit): unknown;
                fromPartial(object: {
                    contractAddress?: string;
                    deployerAddress?: string;
                    withdrawerAddress?: string;
                    nonces?: any[];
                }): _308.MsgRegisterFeeSplit;
            };
            MsgRegisterFeeSplitResponse: {
                encode(_: _308.MsgRegisterFeeSplitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _308.MsgRegisterFeeSplitResponse;
                fromJSON(_: any): _308.MsgRegisterFeeSplitResponse;
                toJSON(_: _308.MsgRegisterFeeSplitResponse): unknown;
                fromPartial(_: {}): _308.MsgRegisterFeeSplitResponse;
            };
            MsgUpdateFeeSplit: {
                encode(message: _308.MsgUpdateFeeSplit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _308.MsgUpdateFeeSplit;
                fromJSON(object: any): _308.MsgUpdateFeeSplit;
                toJSON(message: _308.MsgUpdateFeeSplit): unknown;
                fromPartial(object: {
                    contractAddress?: string;
                    deployerAddress?: string;
                    withdrawerAddress?: string;
                }): _308.MsgUpdateFeeSplit;
            };
            MsgUpdateFeeSplitResponse: {
                encode(_: _308.MsgUpdateFeeSplitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _308.MsgUpdateFeeSplitResponse;
                fromJSON(_: any): _308.MsgUpdateFeeSplitResponse;
                toJSON(_: _308.MsgUpdateFeeSplitResponse): unknown;
                fromPartial(_: {}): _308.MsgUpdateFeeSplitResponse;
            };
            MsgCancelFeeSplit: {
                encode(message: _308.MsgCancelFeeSplit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _308.MsgCancelFeeSplit;
                fromJSON(object: any): _308.MsgCancelFeeSplit;
                toJSON(message: _308.MsgCancelFeeSplit): unknown;
                fromPartial(object: {
                    contractAddress?: string;
                    deployerAddress?: string;
                }): _308.MsgCancelFeeSplit;
            };
            MsgCancelFeeSplitResponse: {
                encode(_: _308.MsgCancelFeeSplitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _308.MsgCancelFeeSplitResponse;
                fromJSON(_: any): _308.MsgCancelFeeSplitResponse;
                toJSON(_: _308.MsgCancelFeeSplitResponse): unknown;
                fromPartial(_: {}): _308.MsgCancelFeeSplitResponse;
            };
            QueryFeeSplitsRequest: {
                encode(message: _307.QueryFeeSplitsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _307.QueryFeeSplitsRequest;
                fromJSON(object: any): _307.QueryFeeSplitsRequest;
                toJSON(message: _307.QueryFeeSplitsRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _307.QueryFeeSplitsRequest;
            };
            QueryFeeSplitsResponse: {
                encode(message: _307.QueryFeeSplitsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _307.QueryFeeSplitsResponse;
                fromJSON(object: any): _307.QueryFeeSplitsResponse;
                toJSON(message: _307.QueryFeeSplitsResponse): unknown;
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
                }): _307.QueryFeeSplitsResponse;
            };
            QueryFeeSplitRequest: {
                encode(message: _307.QueryFeeSplitRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _307.QueryFeeSplitRequest;
                fromJSON(object: any): _307.QueryFeeSplitRequest;
                toJSON(message: _307.QueryFeeSplitRequest): unknown;
                fromPartial(object: {
                    contractAddress?: string;
                }): _307.QueryFeeSplitRequest;
            };
            QueryFeeSplitResponse: {
                encode(message: _307.QueryFeeSplitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _307.QueryFeeSplitResponse;
                fromJSON(object: any): _307.QueryFeeSplitResponse;
                toJSON(message: _307.QueryFeeSplitResponse): unknown;
                fromPartial(object: {
                    feeSplit?: {
                        contractAddress?: string;
                        deployerAddress?: string;
                        withdrawerAddress?: string;
                    };
                }): _307.QueryFeeSplitResponse;
            };
            QueryParamsRequest: {
                encode(_: _307.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _307.QueryParamsRequest;
                fromJSON(_: any): _307.QueryParamsRequest;
                toJSON(_: _307.QueryParamsRequest): unknown;
                fromPartial(_: {}): _307.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _307.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _307.QueryParamsResponse;
                fromJSON(object: any): _307.QueryParamsResponse;
                toJSON(message: _307.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        enableFeeSplit?: boolean;
                        developerShares?: string;
                        addrDerivationCostCreate?: any;
                    };
                }): _307.QueryParamsResponse;
            };
            QueryDeployerFeeSplitsRequest: {
                encode(message: _307.QueryDeployerFeeSplitsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _307.QueryDeployerFeeSplitsRequest;
                fromJSON(object: any): _307.QueryDeployerFeeSplitsRequest;
                toJSON(message: _307.QueryDeployerFeeSplitsRequest): unknown;
                fromPartial(object: {
                    deployerAddress?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _307.QueryDeployerFeeSplitsRequest;
            };
            QueryDeployerFeeSplitsResponse: {
                encode(message: _307.QueryDeployerFeeSplitsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _307.QueryDeployerFeeSplitsResponse;
                fromJSON(object: any): _307.QueryDeployerFeeSplitsResponse;
                toJSON(message: _307.QueryDeployerFeeSplitsResponse): unknown;
                fromPartial(object: {
                    contractAddresses?: string[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _307.QueryDeployerFeeSplitsResponse;
            };
            QueryWithdrawerFeeSplitsRequest: {
                encode(message: _307.QueryWithdrawerFeeSplitsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _307.QueryWithdrawerFeeSplitsRequest;
                fromJSON(object: any): _307.QueryWithdrawerFeeSplitsRequest;
                toJSON(message: _307.QueryWithdrawerFeeSplitsRequest): unknown;
                fromPartial(object: {
                    withdrawerAddress?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _307.QueryWithdrawerFeeSplitsRequest;
            };
            QueryWithdrawerFeeSplitsResponse: {
                encode(message: _307.QueryWithdrawerFeeSplitsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _307.QueryWithdrawerFeeSplitsResponse;
                fromJSON(object: any): _307.QueryWithdrawerFeeSplitsResponse;
                toJSON(message: _307.QueryWithdrawerFeeSplitsResponse): unknown;
                fromPartial(object: {
                    contractAddresses?: string[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _307.QueryWithdrawerFeeSplitsResponse;
            };
            GenesisState: {
                encode(message: _306.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _306.GenesisState;
                fromJSON(object: any): _306.GenesisState;
                toJSON(message: _306.GenesisState): unknown;
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
                }): _306.GenesisState;
            };
            Params: {
                encode(message: _306.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _306.Params;
                fromJSON(object: any): _306.Params;
                toJSON(message: _306.Params): unknown;
                fromPartial(object: {
                    enableFeeSplit?: boolean;
                    developerShares?: string;
                    addrDerivationCostCreate?: any;
                }): _306.Params;
            };
            FeeSplit: {
                encode(message: _305.FeeSplit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _305.FeeSplit;
                fromJSON(object: any): _305.FeeSplit;
                toJSON(message: _305.FeeSplit): unknown;
                fromPartial(object: {
                    contractAddress?: string;
                    deployerAddress?: string;
                    withdrawerAddress?: string;
                }): _305.FeeSplit;
            };
        };
    }
    namespace incentives {
        const v1: {
            QueryIncentivesRequest: {
                encode(message: _311.QueryIncentivesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _311.QueryIncentivesRequest;
                fromJSON(object: any): _311.QueryIncentivesRequest;
                toJSON(message: _311.QueryIncentivesRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _311.QueryIncentivesRequest;
            };
            QueryIncentivesResponse: {
                encode(message: _311.QueryIncentivesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _311.QueryIncentivesResponse;
                fromJSON(object: any): _311.QueryIncentivesResponse;
                toJSON(message: _311.QueryIncentivesResponse): unknown;
                fromPartial(object: {
                    incentives?: {
                        contract?: string;
                        allocations?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        epochs?: number;
                        startTime?: Date;
                        totalGas?: any;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _311.QueryIncentivesResponse;
            };
            QueryIncentiveRequest: {
                encode(message: _311.QueryIncentiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _311.QueryIncentiveRequest;
                fromJSON(object: any): _311.QueryIncentiveRequest;
                toJSON(message: _311.QueryIncentiveRequest): unknown;
                fromPartial(object: {
                    contract?: string;
                }): _311.QueryIncentiveRequest;
            };
            QueryIncentiveResponse: {
                encode(message: _311.QueryIncentiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _311.QueryIncentiveResponse;
                fromJSON(object: any): _311.QueryIncentiveResponse;
                toJSON(message: _311.QueryIncentiveResponse): unknown;
                fromPartial(object: {
                    incentive?: {
                        contract?: string;
                        allocations?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        epochs?: number;
                        startTime?: Date;
                        totalGas?: any;
                    };
                }): _311.QueryIncentiveResponse;
            };
            QueryGasMetersRequest: {
                encode(message: _311.QueryGasMetersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _311.QueryGasMetersRequest;
                fromJSON(object: any): _311.QueryGasMetersRequest;
                toJSON(message: _311.QueryGasMetersRequest): unknown;
                fromPartial(object: {
                    contract?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _311.QueryGasMetersRequest;
            };
            QueryGasMetersResponse: {
                encode(message: _311.QueryGasMetersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _311.QueryGasMetersResponse;
                fromJSON(object: any): _311.QueryGasMetersResponse;
                toJSON(message: _311.QueryGasMetersResponse): unknown;
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
                }): _311.QueryGasMetersResponse;
            };
            QueryGasMeterRequest: {
                encode(message: _311.QueryGasMeterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _311.QueryGasMeterRequest;
                fromJSON(object: any): _311.QueryGasMeterRequest;
                toJSON(message: _311.QueryGasMeterRequest): unknown;
                fromPartial(object: {
                    contract?: string;
                    participant?: string;
                }): _311.QueryGasMeterRequest;
            };
            QueryGasMeterResponse: {
                encode(message: _311.QueryGasMeterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _311.QueryGasMeterResponse;
                fromJSON(object: any): _311.QueryGasMeterResponse;
                toJSON(message: _311.QueryGasMeterResponse): unknown;
                fromPartial(object: {
                    gasMeter?: any;
                }): _311.QueryGasMeterResponse;
            };
            QueryAllocationMetersRequest: {
                encode(message: _311.QueryAllocationMetersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _311.QueryAllocationMetersRequest;
                fromJSON(object: any): _311.QueryAllocationMetersRequest;
                toJSON(message: _311.QueryAllocationMetersRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _311.QueryAllocationMetersRequest;
            };
            QueryAllocationMetersResponse: {
                encode(message: _311.QueryAllocationMetersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _311.QueryAllocationMetersResponse;
                fromJSON(object: any): _311.QueryAllocationMetersResponse;
                toJSON(message: _311.QueryAllocationMetersResponse): unknown;
                fromPartial(object: {
                    allocationMeters?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _311.QueryAllocationMetersResponse;
            };
            QueryAllocationMeterRequest: {
                encode(message: _311.QueryAllocationMeterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _311.QueryAllocationMeterRequest;
                fromJSON(object: any): _311.QueryAllocationMeterRequest;
                toJSON(message: _311.QueryAllocationMeterRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _311.QueryAllocationMeterRequest;
            };
            QueryAllocationMeterResponse: {
                encode(message: _311.QueryAllocationMeterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _311.QueryAllocationMeterResponse;
                fromJSON(object: any): _311.QueryAllocationMeterResponse;
                toJSON(message: _311.QueryAllocationMeterResponse): unknown;
                fromPartial(object: {
                    allocationMeter?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _311.QueryAllocationMeterResponse;
            };
            QueryParamsRequest: {
                encode(_: _311.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _311.QueryParamsRequest;
                fromJSON(_: any): _311.QueryParamsRequest;
                toJSON(_: _311.QueryParamsRequest): unknown;
                fromPartial(_: {}): _311.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _311.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _311.QueryParamsResponse;
                fromJSON(object: any): _311.QueryParamsResponse;
                toJSON(message: _311.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        enableIncentives?: boolean;
                        allocationLimit?: string;
                        incentivesEpochIdentifier?: string;
                        rewardScaler?: string;
                    };
                }): _311.QueryParamsResponse;
            };
            Incentive: {
                encode(message: _310.Incentive, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _310.Incentive;
                fromJSON(object: any): _310.Incentive;
                toJSON(message: _310.Incentive): unknown;
                fromPartial(object: {
                    contract?: string;
                    allocations?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    epochs?: number;
                    startTime?: Date;
                    totalGas?: any;
                }): _310.Incentive;
            };
            GasMeter: {
                encode(message: _310.GasMeter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _310.GasMeter;
                fromJSON(object: any): _310.GasMeter;
                toJSON(message: _310.GasMeter): unknown;
                fromPartial(object: {
                    contract?: string;
                    participant?: string;
                    cumulativeGas?: any;
                }): _310.GasMeter;
            };
            RegisterIncentiveProposal: {
                encode(message: _310.RegisterIncentiveProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _310.RegisterIncentiveProposal;
                fromJSON(object: any): _310.RegisterIncentiveProposal;
                toJSON(message: _310.RegisterIncentiveProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                    allocations?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    epochs?: number;
                }): _310.RegisterIncentiveProposal;
            };
            CancelIncentiveProposal: {
                encode(message: _310.CancelIncentiveProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _310.CancelIncentiveProposal;
                fromJSON(object: any): _310.CancelIncentiveProposal;
                toJSON(message: _310.CancelIncentiveProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                }): _310.CancelIncentiveProposal;
            };
            GenesisState: {
                encode(message: _309.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _309.GenesisState;
                fromJSON(object: any): _309.GenesisState;
                toJSON(message: _309.GenesisState): unknown;
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
                        startTime?: Date;
                        totalGas?: any;
                    }[];
                    gasMeters?: {
                        contract?: string;
                        participant?: string;
                        cumulativeGas?: any;
                    }[];
                }): _309.GenesisState;
            };
            Params: {
                encode(message: _309.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _309.Params;
                fromJSON(object: any): _309.Params;
                toJSON(message: _309.Params): unknown;
                fromPartial(object: {
                    enableIncentives?: boolean;
                    allocationLimit?: string;
                    incentivesEpochIdentifier?: string;
                    rewardScaler?: string;
                }): _309.Params;
            };
        };
    }
    namespace inflation {
        const v1: {
            QueryPeriodRequest: {
                encode(_: _314.QueryPeriodRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _314.QueryPeriodRequest;
                fromJSON(_: any): _314.QueryPeriodRequest;
                toJSON(_: _314.QueryPeriodRequest): unknown;
                fromPartial(_: {}): _314.QueryPeriodRequest;
            };
            QueryPeriodResponse: {
                encode(message: _314.QueryPeriodResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _314.QueryPeriodResponse;
                fromJSON(object: any): _314.QueryPeriodResponse;
                toJSON(message: _314.QueryPeriodResponse): unknown;
                fromPartial(object: {
                    period?: any;
                }): _314.QueryPeriodResponse;
            };
            QueryEpochMintProvisionRequest: {
                encode(_: _314.QueryEpochMintProvisionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _314.QueryEpochMintProvisionRequest;
                fromJSON(_: any): _314.QueryEpochMintProvisionRequest;
                toJSON(_: _314.QueryEpochMintProvisionRequest): unknown;
                fromPartial(_: {}): _314.QueryEpochMintProvisionRequest;
            };
            QueryEpochMintProvisionResponse: {
                encode(message: _314.QueryEpochMintProvisionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _314.QueryEpochMintProvisionResponse;
                fromJSON(object: any): _314.QueryEpochMintProvisionResponse;
                toJSON(message: _314.QueryEpochMintProvisionResponse): unknown;
                fromPartial(object: {
                    epochMintProvision?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _314.QueryEpochMintProvisionResponse;
            };
            QuerySkippedEpochsRequest: {
                encode(_: _314.QuerySkippedEpochsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _314.QuerySkippedEpochsRequest;
                fromJSON(_: any): _314.QuerySkippedEpochsRequest;
                toJSON(_: _314.QuerySkippedEpochsRequest): unknown;
                fromPartial(_: {}): _314.QuerySkippedEpochsRequest;
            };
            QuerySkippedEpochsResponse: {
                encode(message: _314.QuerySkippedEpochsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _314.QuerySkippedEpochsResponse;
                fromJSON(object: any): _314.QuerySkippedEpochsResponse;
                toJSON(message: _314.QuerySkippedEpochsResponse): unknown;
                fromPartial(object: {
                    skippedEpochs?: any;
                }): _314.QuerySkippedEpochsResponse;
            };
            QueryCirculatingSupplyRequest: {
                encode(_: _314.QueryCirculatingSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _314.QueryCirculatingSupplyRequest;
                fromJSON(_: any): _314.QueryCirculatingSupplyRequest;
                toJSON(_: _314.QueryCirculatingSupplyRequest): unknown;
                fromPartial(_: {}): _314.QueryCirculatingSupplyRequest;
            };
            QueryCirculatingSupplyResponse: {
                encode(message: _314.QueryCirculatingSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _314.QueryCirculatingSupplyResponse;
                fromJSON(object: any): _314.QueryCirculatingSupplyResponse;
                toJSON(message: _314.QueryCirculatingSupplyResponse): unknown;
                fromPartial(object: {
                    circulatingSupply?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _314.QueryCirculatingSupplyResponse;
            };
            QueryInflationRateRequest: {
                encode(_: _314.QueryInflationRateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _314.QueryInflationRateRequest;
                fromJSON(_: any): _314.QueryInflationRateRequest;
                toJSON(_: _314.QueryInflationRateRequest): unknown;
                fromPartial(_: {}): _314.QueryInflationRateRequest;
            };
            QueryInflationRateResponse: {
                encode(message: _314.QueryInflationRateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _314.QueryInflationRateResponse;
                fromJSON(object: any): _314.QueryInflationRateResponse;
                toJSON(message: _314.QueryInflationRateResponse): unknown;
                fromPartial(object: {
                    inflationRate?: string;
                }): _314.QueryInflationRateResponse;
            };
            QueryParamsRequest: {
                encode(_: _314.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _314.QueryParamsRequest;
                fromJSON(_: any): _314.QueryParamsRequest;
                toJSON(_: _314.QueryParamsRequest): unknown;
                fromPartial(_: {}): _314.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _314.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _314.QueryParamsResponse;
                fromJSON(object: any): _314.QueryParamsResponse;
                toJSON(message: _314.QueryParamsResponse): unknown;
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
                }): _314.QueryParamsResponse;
            };
            InflationDistribution: {
                encode(message: _313.InflationDistribution, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _313.InflationDistribution;
                fromJSON(object: any): _313.InflationDistribution;
                toJSON(message: _313.InflationDistribution): unknown;
                fromPartial(object: {
                    stakingRewards?: string;
                    usageIncentives?: string;
                    communityPool?: string;
                }): _313.InflationDistribution;
            };
            ExponentialCalculation: {
                encode(message: _313.ExponentialCalculation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _313.ExponentialCalculation;
                fromJSON(object: any): _313.ExponentialCalculation;
                toJSON(message: _313.ExponentialCalculation): unknown;
                fromPartial(object: {
                    a?: string;
                    r?: string;
                    c?: string;
                    bondingTarget?: string;
                    maxVariance?: string;
                }): _313.ExponentialCalculation;
            };
            GenesisState: {
                encode(message: _312.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _312.GenesisState;
                fromJSON(object: any): _312.GenesisState;
                toJSON(message: _312.GenesisState): unknown;
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
                }): _312.GenesisState;
            };
            Params: {
                encode(message: _312.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _312.Params;
                fromJSON(object: any): _312.Params;
                toJSON(message: _312.Params): unknown;
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
                }): _312.Params;
            };
        };
    }
    namespace recovery {
        const v1: {
            QueryParamsRequest: {
                encode(_: _316.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _316.QueryParamsRequest;
                fromJSON(_: any): _316.QueryParamsRequest;
                toJSON(_: _316.QueryParamsRequest): unknown;
                fromPartial(_: {}): _316.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _316.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _316.QueryParamsResponse;
                fromJSON(object: any): _316.QueryParamsResponse;
                toJSON(message: _316.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        enableRecovery?: boolean;
                        packetTimeoutDuration?: string;
                    };
                }): _316.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _315.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _315.GenesisState;
                fromJSON(object: any): _315.GenesisState;
                toJSON(message: _315.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        enableRecovery?: boolean;
                        packetTimeoutDuration?: string;
                    };
                }): _315.GenesisState;
            };
            Params: {
                encode(message: _315.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _315.Params;
                fromJSON(object: any): _315.Params;
                toJSON(message: _315.Params): unknown;
                fromPartial(object: {
                    enableRecovery?: boolean;
                    packetTimeoutDuration?: string;
                }): _315.Params;
            };
        };
    }
    namespace vesting {
        const v1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createClawbackVestingAccount(value: _318.MsgCreateClawbackVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clawback(value: _318.MsgClawback): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createClawbackVestingAccount(value: _318.MsgCreateClawbackVestingAccount): {
                        typeUrl: string;
                        value: _318.MsgCreateClawbackVestingAccount;
                    };
                    clawback(value: _318.MsgClawback): {
                        typeUrl: string;
                        value: _318.MsgClawback;
                    };
                };
                toJSON: {
                    createClawbackVestingAccount(value: _318.MsgCreateClawbackVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    clawback(value: _318.MsgClawback): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createClawbackVestingAccount(value: any): {
                        typeUrl: string;
                        value: _318.MsgCreateClawbackVestingAccount;
                    };
                    clawback(value: any): {
                        typeUrl: string;
                        value: _318.MsgClawback;
                    };
                };
                fromPartial: {
                    createClawbackVestingAccount(value: _318.MsgCreateClawbackVestingAccount): {
                        typeUrl: string;
                        value: _318.MsgCreateClawbackVestingAccount;
                    };
                    clawback(value: _318.MsgClawback): {
                        typeUrl: string;
                        value: _318.MsgClawback;
                    };
                };
            };
            AminoConverter: {
                "/evmos.vesting.v1.MsgCreateClawbackVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, startTime, lockupPeriods, vestingPeriods, merge }: _318.MsgCreateClawbackVestingAccount) => {
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
                    }) => _318.MsgCreateClawbackVestingAccount;
                };
                "/evmos.vesting.v1.MsgClawback": {
                    aminoType: string;
                    toAmino: ({ funderAddress, accountAddress, destAddress }: _318.MsgClawback) => {
                        funder_address: string;
                        account_address: string;
                        dest_address: string;
                    };
                    fromAmino: ({ funder_address, account_address, dest_address }: {
                        funder_address: string;
                        account_address: string;
                        dest_address: string;
                    }) => _318.MsgClawback;
                };
            };
            ClawbackVestingAccount: {
                encode(message: _319.ClawbackVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _319.ClawbackVestingAccount;
                fromJSON(object: any): _319.ClawbackVestingAccount;
                toJSON(message: _319.ClawbackVestingAccount): unknown;
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
                    startTime?: Date;
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
                }): _319.ClawbackVestingAccount;
            };
            MsgCreateClawbackVestingAccount: {
                encode(message: _318.MsgCreateClawbackVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _318.MsgCreateClawbackVestingAccount;
                fromJSON(object: any): _318.MsgCreateClawbackVestingAccount;
                toJSON(message: _318.MsgCreateClawbackVestingAccount): unknown;
                fromPartial(object: {
                    fromAddress?: string;
                    toAddress?: string;
                    startTime?: Date;
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
                }): _318.MsgCreateClawbackVestingAccount;
            };
            MsgCreateClawbackVestingAccountResponse: {
                encode(_: _318.MsgCreateClawbackVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _318.MsgCreateClawbackVestingAccountResponse;
                fromJSON(_: any): _318.MsgCreateClawbackVestingAccountResponse;
                toJSON(_: _318.MsgCreateClawbackVestingAccountResponse): unknown;
                fromPartial(_: {}): _318.MsgCreateClawbackVestingAccountResponse;
            };
            MsgClawback: {
                encode(message: _318.MsgClawback, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _318.MsgClawback;
                fromJSON(object: any): _318.MsgClawback;
                toJSON(message: _318.MsgClawback): unknown;
                fromPartial(object: {
                    funderAddress?: string;
                    accountAddress?: string;
                    destAddress?: string;
                }): _318.MsgClawback;
            };
            MsgClawbackResponse: {
                encode(_: _318.MsgClawbackResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _318.MsgClawbackResponse;
                fromJSON(_: any): _318.MsgClawbackResponse;
                toJSON(_: _318.MsgClawbackResponse): unknown;
                fromPartial(_: {}): _318.MsgClawbackResponse;
            };
            QueryBalancesRequest: {
                encode(message: _317.QueryBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _317.QueryBalancesRequest;
                fromJSON(object: any): _317.QueryBalancesRequest;
                toJSON(message: _317.QueryBalancesRequest): unknown;
                fromPartial(object: {
                    address?: string;
                }): _317.QueryBalancesRequest;
            };
            QueryBalancesResponse: {
                encode(message: _317.QueryBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _317.QueryBalancesResponse;
                fromJSON(object: any): _317.QueryBalancesResponse;
                toJSON(message: _317.QueryBalancesResponse): unknown;
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
                }): _317.QueryBalancesResponse;
            };
        };
    }
}
