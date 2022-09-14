import * as _342 from "./epochs/v1/genesis";
import * as _343 from "./epochs/v1/query";
import * as _344 from "./erc20/v1/erc20";
import * as _345 from "./erc20/v1/genesis";
import * as _346 from "./erc20/v1/query";
import * as _347 from "./erc20/v1/tx";
import * as _348 from "./incentives/v1/genesis";
import * as _349 from "./incentives/v1/incentives";
import * as _350 from "./incentives/v1/query";
import * as _351 from "./inflation/v1/genesis";
import * as _352 from "./inflation/v1/inflation";
import * as _353 from "./inflation/v1/query";
import * as _354 from "./recovery/v1/genesis";
import * as _355 from "./recovery/v1/query";
import * as _356 from "./vesting/v1/query";
import * as _357 from "./vesting/v1/tx";
import * as _358 from "./vesting/v1/vesting";
import * as _359 from "./vrf/v1/genesis";
import * as _360 from "./vrf/v1/query";
import * as _361 from "./vrf/v1/randomval";
import * as _362 from "./vrf/v1/tx";
import * as _363 from "./vrf/v1/userval";
export declare namespace echelon {
    namespace epochs {
        const v1: {
            QueryEpochsInfoRequest: {
                encode(message: _343.QueryEpochsInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _343.QueryEpochsInfoRequest;
                fromJSON(object: any): _343.QueryEpochsInfoRequest;
                toJSON(message: _343.QueryEpochsInfoRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _343.QueryEpochsInfoRequest;
            };
            QueryEpochsInfoResponse: {
                encode(message: _343.QueryEpochsInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _343.QueryEpochsInfoResponse;
                fromJSON(object: any): _343.QueryEpochsInfoResponse;
                toJSON(message: _343.QueryEpochsInfoResponse): unknown;
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
                }): _343.QueryEpochsInfoResponse;
            };
            QueryCurrentEpochRequest: {
                encode(message: _343.QueryCurrentEpochRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _343.QueryCurrentEpochRequest;
                fromJSON(object: any): _343.QueryCurrentEpochRequest;
                toJSON(message: _343.QueryCurrentEpochRequest): unknown;
                fromPartial(object: {
                    identifier?: string;
                }): _343.QueryCurrentEpochRequest;
            };
            QueryCurrentEpochResponse: {
                encode(message: _343.QueryCurrentEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _343.QueryCurrentEpochResponse;
                fromJSON(object: any): _343.QueryCurrentEpochResponse;
                toJSON(message: _343.QueryCurrentEpochResponse): unknown;
                fromPartial(object: {
                    currentEpoch?: any;
                }): _343.QueryCurrentEpochResponse;
            };
            EpochInfo: {
                encode(message: _342.EpochInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _342.EpochInfo;
                fromJSON(object: any): _342.EpochInfo;
                toJSON(message: _342.EpochInfo): unknown;
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
                }): _342.EpochInfo;
            };
            GenesisState: {
                encode(message: _342.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _342.GenesisState;
                fromJSON(object: any): _342.GenesisState;
                toJSON(message: _342.GenesisState): unknown;
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
                }): _342.GenesisState;
            };
        };
    }
    namespace erc20 {
        const v1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    convertCoin(value: _347.MsgConvertCoin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    convertERC20(value: _347.MsgConvertERC20): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    convertCoin(value: _347.MsgConvertCoin): {
                        typeUrl: string;
                        value: _347.MsgConvertCoin;
                    };
                    convertERC20(value: _347.MsgConvertERC20): {
                        typeUrl: string;
                        value: _347.MsgConvertERC20;
                    };
                };
                toJSON: {
                    convertCoin(value: _347.MsgConvertCoin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    convertERC20(value: _347.MsgConvertERC20): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    convertCoin(value: any): {
                        typeUrl: string;
                        value: _347.MsgConvertCoin;
                    };
                    convertERC20(value: any): {
                        typeUrl: string;
                        value: _347.MsgConvertERC20;
                    };
                };
                fromPartial: {
                    convertCoin(value: _347.MsgConvertCoin): {
                        typeUrl: string;
                        value: _347.MsgConvertCoin;
                    };
                    convertERC20(value: _347.MsgConvertERC20): {
                        typeUrl: string;
                        value: _347.MsgConvertERC20;
                    };
                };
            };
            AminoConverter: {
                "/echelon.erc20.v1.MsgConvertCoin": {
                    aminoType: string;
                    toAmino: ({ coin, receiver, sender }: _347.MsgConvertCoin) => {
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
                    }) => _347.MsgConvertCoin;
                };
                "/echelon.erc20.v1.MsgConvertERC20": {
                    aminoType: string;
                    toAmino: ({ contractAddress, amount, receiver, sender }: _347.MsgConvertERC20) => {
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
                    }) => _347.MsgConvertERC20;
                };
            };
            MsgConvertCoin: {
                encode(message: _347.MsgConvertCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _347.MsgConvertCoin;
                fromJSON(object: any): _347.MsgConvertCoin;
                toJSON(message: _347.MsgConvertCoin): unknown;
                fromPartial(object: {
                    coin?: {
                        denom?: string;
                        amount?: string;
                    };
                    receiver?: string;
                    sender?: string;
                }): _347.MsgConvertCoin;
            };
            MsgConvertCoinResponse: {
                encode(_: _347.MsgConvertCoinResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _347.MsgConvertCoinResponse;
                fromJSON(_: any): _347.MsgConvertCoinResponse;
                toJSON(_: _347.MsgConvertCoinResponse): unknown;
                fromPartial(_: {}): _347.MsgConvertCoinResponse;
            };
            MsgConvertERC20: {
                encode(message: _347.MsgConvertERC20, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _347.MsgConvertERC20;
                fromJSON(object: any): _347.MsgConvertERC20;
                toJSON(message: _347.MsgConvertERC20): unknown;
                fromPartial(object: {
                    contractAddress?: string;
                    amount?: string;
                    receiver?: string;
                    sender?: string;
                }): _347.MsgConvertERC20;
            };
            MsgConvertERC20Response: {
                encode(_: _347.MsgConvertERC20Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _347.MsgConvertERC20Response;
                fromJSON(_: any): _347.MsgConvertERC20Response;
                toJSON(_: _347.MsgConvertERC20Response): unknown;
                fromPartial(_: {}): _347.MsgConvertERC20Response;
            };
            QueryTokenPairsRequest: {
                encode(message: _346.QueryTokenPairsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _346.QueryTokenPairsRequest;
                fromJSON(object: any): _346.QueryTokenPairsRequest;
                toJSON(message: _346.QueryTokenPairsRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _346.QueryTokenPairsRequest;
            };
            QueryTokenPairsResponse: {
                encode(message: _346.QueryTokenPairsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _346.QueryTokenPairsResponse;
                fromJSON(object: any): _346.QueryTokenPairsResponse;
                toJSON(message: _346.QueryTokenPairsResponse): unknown;
                fromPartial(object: {
                    tokenPairs?: {
                        erc20Address?: string;
                        denom?: string;
                        enabled?: boolean;
                        contractOwner?: _344.Owner;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _346.QueryTokenPairsResponse;
            };
            QueryTokenPairRequest: {
                encode(message: _346.QueryTokenPairRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _346.QueryTokenPairRequest;
                fromJSON(object: any): _346.QueryTokenPairRequest;
                toJSON(message: _346.QueryTokenPairRequest): unknown;
                fromPartial(object: {
                    token?: string;
                }): _346.QueryTokenPairRequest;
            };
            QueryTokenPairResponse: {
                encode(message: _346.QueryTokenPairResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _346.QueryTokenPairResponse;
                fromJSON(object: any): _346.QueryTokenPairResponse;
                toJSON(message: _346.QueryTokenPairResponse): unknown;
                fromPartial(object: {
                    tokenPair?: {
                        erc20Address?: string;
                        denom?: string;
                        enabled?: boolean;
                        contractOwner?: _344.Owner;
                    };
                }): _346.QueryTokenPairResponse;
            };
            QueryParamsRequest: {
                encode(_: _346.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _346.QueryParamsRequest;
                fromJSON(_: any): _346.QueryParamsRequest;
                toJSON(_: _346.QueryParamsRequest): unknown;
                fromPartial(_: {}): _346.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _346.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _346.QueryParamsResponse;
                fromJSON(object: any): _346.QueryParamsResponse;
                toJSON(message: _346.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        enableErc20?: boolean;
                        enableEvmHook?: boolean;
                    };
                }): _346.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _345.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _345.GenesisState;
                fromJSON(object: any): _345.GenesisState;
                toJSON(message: _345.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        enableErc20?: boolean;
                        enableEvmHook?: boolean;
                    };
                    tokenPairs?: {
                        erc20Address?: string;
                        denom?: string;
                        enabled?: boolean;
                        contractOwner?: _344.Owner;
                    }[];
                }): _345.GenesisState;
            };
            Params: {
                encode(message: _345.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _345.Params;
                fromJSON(object: any): _345.Params;
                toJSON(message: _345.Params): unknown;
                fromPartial(object: {
                    enableErc20?: boolean;
                    enableEvmHook?: boolean;
                }): _345.Params;
            };
            ownerFromJSON(object: any): _344.Owner;
            ownerToJSON(object: _344.Owner): string;
            Owner: typeof _344.Owner;
            TokenPair: {
                encode(message: _344.TokenPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _344.TokenPair;
                fromJSON(object: any): _344.TokenPair;
                toJSON(message: _344.TokenPair): unknown;
                fromPartial(object: {
                    erc20Address?: string;
                    denom?: string;
                    enabled?: boolean;
                    contractOwner?: _344.Owner;
                }): _344.TokenPair;
            };
            RegisterCoinProposal: {
                encode(message: _344.RegisterCoinProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _344.RegisterCoinProposal;
                fromJSON(object: any): _344.RegisterCoinProposal;
                toJSON(message: _344.RegisterCoinProposal): unknown;
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
                }): _344.RegisterCoinProposal;
            };
            RegisterERC20Proposal: {
                encode(message: _344.RegisterERC20Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _344.RegisterERC20Proposal;
                fromJSON(object: any): _344.RegisterERC20Proposal;
                toJSON(message: _344.RegisterERC20Proposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    erc20address?: string;
                }): _344.RegisterERC20Proposal;
            };
            ToggleTokenRelayProposal: {
                encode(message: _344.ToggleTokenRelayProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _344.ToggleTokenRelayProposal;
                fromJSON(object: any): _344.ToggleTokenRelayProposal;
                toJSON(message: _344.ToggleTokenRelayProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    token?: string;
                }): _344.ToggleTokenRelayProposal;
            };
            UpdateTokenPairERC20Proposal: {
                encode(message: _344.UpdateTokenPairERC20Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _344.UpdateTokenPairERC20Proposal;
                fromJSON(object: any): _344.UpdateTokenPairERC20Proposal;
                toJSON(message: _344.UpdateTokenPairERC20Proposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    erc20Address?: string;
                    newErc20Address?: string;
                }): _344.UpdateTokenPairERC20Proposal;
            };
        };
    }
    namespace incentives {
        const v1: {
            QueryIncentivesRequest: {
                encode(message: _350.QueryIncentivesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _350.QueryIncentivesRequest;
                fromJSON(object: any): _350.QueryIncentivesRequest;
                toJSON(message: _350.QueryIncentivesRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _350.QueryIncentivesRequest;
            };
            QueryIncentivesResponse: {
                encode(message: _350.QueryIncentivesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _350.QueryIncentivesResponse;
                fromJSON(object: any): _350.QueryIncentivesResponse;
                toJSON(message: _350.QueryIncentivesResponse): unknown;
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
                }): _350.QueryIncentivesResponse;
            };
            QueryIncentiveRequest: {
                encode(message: _350.QueryIncentiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _350.QueryIncentiveRequest;
                fromJSON(object: any): _350.QueryIncentiveRequest;
                toJSON(message: _350.QueryIncentiveRequest): unknown;
                fromPartial(object: {
                    contract?: string;
                }): _350.QueryIncentiveRequest;
            };
            QueryIncentiveResponse: {
                encode(message: _350.QueryIncentiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _350.QueryIncentiveResponse;
                fromJSON(object: any): _350.QueryIncentiveResponse;
                toJSON(message: _350.QueryIncentiveResponse): unknown;
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
                }): _350.QueryIncentiveResponse;
            };
            QueryGasMetersRequest: {
                encode(message: _350.QueryGasMetersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _350.QueryGasMetersRequest;
                fromJSON(object: any): _350.QueryGasMetersRequest;
                toJSON(message: _350.QueryGasMetersRequest): unknown;
                fromPartial(object: {
                    contract?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _350.QueryGasMetersRequest;
            };
            QueryGasMetersResponse: {
                encode(message: _350.QueryGasMetersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _350.QueryGasMetersResponse;
                fromJSON(object: any): _350.QueryGasMetersResponse;
                toJSON(message: _350.QueryGasMetersResponse): unknown;
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
                }): _350.QueryGasMetersResponse;
            };
            QueryGasMeterRequest: {
                encode(message: _350.QueryGasMeterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _350.QueryGasMeterRequest;
                fromJSON(object: any): _350.QueryGasMeterRequest;
                toJSON(message: _350.QueryGasMeterRequest): unknown;
                fromPartial(object: {
                    contract?: string;
                    participant?: string;
                }): _350.QueryGasMeterRequest;
            };
            QueryGasMeterResponse: {
                encode(message: _350.QueryGasMeterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _350.QueryGasMeterResponse;
                fromJSON(object: any): _350.QueryGasMeterResponse;
                toJSON(message: _350.QueryGasMeterResponse): unknown;
                fromPartial(object: {
                    gasMeter?: any;
                }): _350.QueryGasMeterResponse;
            };
            QueryAllocationMetersRequest: {
                encode(message: _350.QueryAllocationMetersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _350.QueryAllocationMetersRequest;
                fromJSON(object: any): _350.QueryAllocationMetersRequest;
                toJSON(message: _350.QueryAllocationMetersRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _350.QueryAllocationMetersRequest;
            };
            QueryAllocationMetersResponse: {
                encode(message: _350.QueryAllocationMetersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _350.QueryAllocationMetersResponse;
                fromJSON(object: any): _350.QueryAllocationMetersResponse;
                toJSON(message: _350.QueryAllocationMetersResponse): unknown;
                fromPartial(object: {
                    allocationMeters?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _350.QueryAllocationMetersResponse;
            };
            QueryAllocationMeterRequest: {
                encode(message: _350.QueryAllocationMeterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _350.QueryAllocationMeterRequest;
                fromJSON(object: any): _350.QueryAllocationMeterRequest;
                toJSON(message: _350.QueryAllocationMeterRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _350.QueryAllocationMeterRequest;
            };
            QueryAllocationMeterResponse: {
                encode(message: _350.QueryAllocationMeterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _350.QueryAllocationMeterResponse;
                fromJSON(object: any): _350.QueryAllocationMeterResponse;
                toJSON(message: _350.QueryAllocationMeterResponse): unknown;
                fromPartial(object: {
                    allocationMeter?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _350.QueryAllocationMeterResponse;
            };
            QueryParamsRequest: {
                encode(_: _350.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _350.QueryParamsRequest;
                fromJSON(_: any): _350.QueryParamsRequest;
                toJSON(_: _350.QueryParamsRequest): unknown;
                fromPartial(_: {}): _350.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _350.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _350.QueryParamsResponse;
                fromJSON(object: any): _350.QueryParamsResponse;
                toJSON(message: _350.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        enableIncentives?: boolean;
                        allocationLimit?: string;
                        incentivesEpochIdentifier?: string;
                        rewardScaler?: string;
                    };
                }): _350.QueryParamsResponse;
            };
            Incentive: {
                encode(message: _349.Incentive, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _349.Incentive;
                fromJSON(object: any): _349.Incentive;
                toJSON(message: _349.Incentive): unknown;
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
                }): _349.Incentive;
            };
            GasMeter: {
                encode(message: _349.GasMeter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _349.GasMeter;
                fromJSON(object: any): _349.GasMeter;
                toJSON(message: _349.GasMeter): unknown;
                fromPartial(object: {
                    contract?: string;
                    participant?: string;
                    cumulativeGas?: any;
                }): _349.GasMeter;
            };
            RegisterIncentiveProposal: {
                encode(message: _349.RegisterIncentiveProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _349.RegisterIncentiveProposal;
                fromJSON(object: any): _349.RegisterIncentiveProposal;
                toJSON(message: _349.RegisterIncentiveProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                    allocations?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    epochs?: number;
                }): _349.RegisterIncentiveProposal;
            };
            CancelIncentiveProposal: {
                encode(message: _349.CancelIncentiveProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _349.CancelIncentiveProposal;
                fromJSON(object: any): _349.CancelIncentiveProposal;
                toJSON(message: _349.CancelIncentiveProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                }): _349.CancelIncentiveProposal;
            };
            GenesisState: {
                encode(message: _348.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _348.GenesisState;
                fromJSON(object: any): _348.GenesisState;
                toJSON(message: _348.GenesisState): unknown;
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
                }): _348.GenesisState;
            };
            Params: {
                encode(message: _348.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _348.Params;
                fromJSON(object: any): _348.Params;
                toJSON(message: _348.Params): unknown;
                fromPartial(object: {
                    enableIncentives?: boolean;
                    allocationLimit?: string;
                    incentivesEpochIdentifier?: string;
                    rewardScaler?: string;
                }): _348.Params;
            };
        };
    }
    namespace inflation {
        const v1: {
            QueryPeriodRequest: {
                encode(_: _353.QueryPeriodRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _353.QueryPeriodRequest;
                fromJSON(_: any): _353.QueryPeriodRequest;
                toJSON(_: _353.QueryPeriodRequest): unknown;
                fromPartial(_: {}): _353.QueryPeriodRequest;
            };
            QueryPeriodResponse: {
                encode(message: _353.QueryPeriodResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _353.QueryPeriodResponse;
                fromJSON(object: any): _353.QueryPeriodResponse;
                toJSON(message: _353.QueryPeriodResponse): unknown;
                fromPartial(object: {
                    period?: any;
                }): _353.QueryPeriodResponse;
            };
            QueryEpochMintProvisionRequest: {
                encode(_: _353.QueryEpochMintProvisionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _353.QueryEpochMintProvisionRequest;
                fromJSON(_: any): _353.QueryEpochMintProvisionRequest;
                toJSON(_: _353.QueryEpochMintProvisionRequest): unknown;
                fromPartial(_: {}): _353.QueryEpochMintProvisionRequest;
            };
            QueryEpochMintProvisionResponse: {
                encode(message: _353.QueryEpochMintProvisionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _353.QueryEpochMintProvisionResponse;
                fromJSON(object: any): _353.QueryEpochMintProvisionResponse;
                toJSON(message: _353.QueryEpochMintProvisionResponse): unknown;
                fromPartial(object: {
                    epochMintProvision?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _353.QueryEpochMintProvisionResponse;
            };
            QuerySkippedEpochsRequest: {
                encode(_: _353.QuerySkippedEpochsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _353.QuerySkippedEpochsRequest;
                fromJSON(_: any): _353.QuerySkippedEpochsRequest;
                toJSON(_: _353.QuerySkippedEpochsRequest): unknown;
                fromPartial(_: {}): _353.QuerySkippedEpochsRequest;
            };
            QuerySkippedEpochsResponse: {
                encode(message: _353.QuerySkippedEpochsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _353.QuerySkippedEpochsResponse;
                fromJSON(object: any): _353.QuerySkippedEpochsResponse;
                toJSON(message: _353.QuerySkippedEpochsResponse): unknown;
                fromPartial(object: {
                    skippedEpochs?: any;
                }): _353.QuerySkippedEpochsResponse;
            };
            QueryTotalSupplyRequest: {
                encode(_: _353.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _353.QueryTotalSupplyRequest;
                fromJSON(_: any): _353.QueryTotalSupplyRequest;
                toJSON(_: _353.QueryTotalSupplyRequest): unknown;
                fromPartial(_: {}): _353.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _353.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _353.QueryTotalSupplyResponse;
                fromJSON(object: any): _353.QueryTotalSupplyResponse;
                toJSON(message: _353.QueryTotalSupplyResponse): unknown;
                fromPartial(object: {
                    totalSupply?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _353.QueryTotalSupplyResponse;
            };
            QueryInflationRateRequest: {
                encode(_: _353.QueryInflationRateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _353.QueryInflationRateRequest;
                fromJSON(_: any): _353.QueryInflationRateRequest;
                toJSON(_: _353.QueryInflationRateRequest): unknown;
                fromPartial(_: {}): _353.QueryInflationRateRequest;
            };
            QueryInflationRateResponse: {
                encode(message: _353.QueryInflationRateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _353.QueryInflationRateResponse;
                fromJSON(object: any): _353.QueryInflationRateResponse;
                toJSON(message: _353.QueryInflationRateResponse): unknown;
                fromPartial(object: {
                    inflationRate?: string;
                }): _353.QueryInflationRateResponse;
            };
            QueryParamsRequest: {
                encode(_: _353.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _353.QueryParamsRequest;
                fromJSON(_: any): _353.QueryParamsRequest;
                toJSON(_: _353.QueryParamsRequest): unknown;
                fromPartial(_: {}): _353.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _353.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _353.QueryParamsResponse;
                fromJSON(object: any): _353.QueryParamsResponse;
                toJSON(message: _353.QueryParamsResponse): unknown;
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
                }): _353.QueryParamsResponse;
            };
            InflationDistribution: {
                encode(message: _352.InflationDistribution, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _352.InflationDistribution;
                fromJSON(object: any): _352.InflationDistribution;
                toJSON(message: _352.InflationDistribution): unknown;
                fromPartial(object: {
                    stakingRewards?: string;
                    usageIncentives?: string;
                    communityPool?: string;
                }): _352.InflationDistribution;
            };
            ExponentialCalculation: {
                encode(message: _352.ExponentialCalculation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _352.ExponentialCalculation;
                fromJSON(object: any): _352.ExponentialCalculation;
                toJSON(message: _352.ExponentialCalculation): unknown;
                fromPartial(object: {
                    a?: string;
                    r?: string;
                    c?: string;
                    bondingTarget?: string;
                    maxVariance?: string;
                }): _352.ExponentialCalculation;
            };
            GenesisState: {
                encode(message: _351.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _351.GenesisState;
                fromJSON(object: any): _351.GenesisState;
                toJSON(message: _351.GenesisState): unknown;
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
                }): _351.GenesisState;
            };
            Params: {
                encode(message: _351.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _351.Params;
                fromJSON(object: any): _351.Params;
                toJSON(message: _351.Params): unknown;
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
                }): _351.Params;
            };
        };
    }
    namespace recovery {
        const v1: {
            QueryParamsRequest: {
                encode(_: _355.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _355.QueryParamsRequest;
                fromJSON(_: any): _355.QueryParamsRequest;
                toJSON(_: _355.QueryParamsRequest): unknown;
                fromPartial(_: {}): _355.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _355.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _355.QueryParamsResponse;
                fromJSON(object: any): _355.QueryParamsResponse;
                toJSON(message: _355.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        enableRecovery?: boolean;
                        packetTimeoutDuration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                }): _355.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _354.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _354.GenesisState;
                fromJSON(object: any): _354.GenesisState;
                toJSON(message: _354.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        enableRecovery?: boolean;
                        packetTimeoutDuration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                }): _354.GenesisState;
            };
            Params: {
                encode(message: _354.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _354.Params;
                fromJSON(object: any): _354.Params;
                toJSON(message: _354.Params): unknown;
                fromPartial(object: {
                    enableRecovery?: boolean;
                    packetTimeoutDuration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _354.Params;
            };
        };
    }
    namespace vesting {
        const v1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createClawbackVestingAccount(value: _357.MsgCreateClawbackVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clawback(value: _357.MsgClawback): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createClawbackVestingAccount(value: _357.MsgCreateClawbackVestingAccount): {
                        typeUrl: string;
                        value: _357.MsgCreateClawbackVestingAccount;
                    };
                    clawback(value: _357.MsgClawback): {
                        typeUrl: string;
                        value: _357.MsgClawback;
                    };
                };
                toJSON: {
                    createClawbackVestingAccount(value: _357.MsgCreateClawbackVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    clawback(value: _357.MsgClawback): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createClawbackVestingAccount(value: any): {
                        typeUrl: string;
                        value: _357.MsgCreateClawbackVestingAccount;
                    };
                    clawback(value: any): {
                        typeUrl: string;
                        value: _357.MsgClawback;
                    };
                };
                fromPartial: {
                    createClawbackVestingAccount(value: _357.MsgCreateClawbackVestingAccount): {
                        typeUrl: string;
                        value: _357.MsgCreateClawbackVestingAccount;
                    };
                    clawback(value: _357.MsgClawback): {
                        typeUrl: string;
                        value: _357.MsgClawback;
                    };
                };
            };
            AminoConverter: {
                "/echelon.vesting.v1.MsgCreateClawbackVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, startTime, lockupPeriods, vestingPeriods, merge }: _357.MsgCreateClawbackVestingAccount) => {
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
                    }) => _357.MsgCreateClawbackVestingAccount;
                };
                "/echelon.vesting.v1.MsgClawback": {
                    aminoType: string;
                    toAmino: ({ funderAddress, accountAddress, destAddress }: _357.MsgClawback) => {
                        funder_address: string;
                        account_address: string;
                        dest_address: string;
                    };
                    fromAmino: ({ funder_address, account_address, dest_address }: {
                        funder_address: string;
                        account_address: string;
                        dest_address: string;
                    }) => _357.MsgClawback;
                };
            };
            ClawbackVestingAccount: {
                encode(message: _358.ClawbackVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _358.ClawbackVestingAccount;
                fromJSON(object: any): _358.ClawbackVestingAccount;
                toJSON(message: _358.ClawbackVestingAccount): unknown;
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
                }): _358.ClawbackVestingAccount;
            };
            MsgCreateClawbackVestingAccount: {
                encode(message: _357.MsgCreateClawbackVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _357.MsgCreateClawbackVestingAccount;
                fromJSON(object: any): _357.MsgCreateClawbackVestingAccount;
                toJSON(message: _357.MsgCreateClawbackVestingAccount): unknown;
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
                }): _357.MsgCreateClawbackVestingAccount;
            };
            MsgCreateClawbackVestingAccountResponse: {
                encode(_: _357.MsgCreateClawbackVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _357.MsgCreateClawbackVestingAccountResponse;
                fromJSON(_: any): _357.MsgCreateClawbackVestingAccountResponse;
                toJSON(_: _357.MsgCreateClawbackVestingAccountResponse): unknown;
                fromPartial(_: {}): _357.MsgCreateClawbackVestingAccountResponse;
            };
            MsgClawback: {
                encode(message: _357.MsgClawback, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _357.MsgClawback;
                fromJSON(object: any): _357.MsgClawback;
                toJSON(message: _357.MsgClawback): unknown;
                fromPartial(object: {
                    funderAddress?: string;
                    accountAddress?: string;
                    destAddress?: string;
                }): _357.MsgClawback;
            };
            MsgClawbackResponse: {
                encode(_: _357.MsgClawbackResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _357.MsgClawbackResponse;
                fromJSON(_: any): _357.MsgClawbackResponse;
                toJSON(_: _357.MsgClawbackResponse): unknown;
                fromPartial(_: {}): _357.MsgClawbackResponse;
            };
            QueryBalancesRequest: {
                encode(message: _356.QueryBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _356.QueryBalancesRequest;
                fromJSON(object: any): _356.QueryBalancesRequest;
                toJSON(message: _356.QueryBalancesRequest): unknown;
                fromPartial(object: {
                    address?: string;
                }): _356.QueryBalancesRequest;
            };
            QueryBalancesResponse: {
                encode(message: _356.QueryBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _356.QueryBalancesResponse;
                fromJSON(object: any): _356.QueryBalancesResponse;
                toJSON(message: _356.QueryBalancesResponse): unknown;
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
                }): _356.QueryBalancesResponse;
            };
        };
    }
    namespace vrf {
        const v1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createRandom(value: _362.MsgCreateRandom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createRandom(value: _362.MsgCreateRandom): {
                        typeUrl: string;
                        value: _362.MsgCreateRandom;
                    };
                };
                toJSON: {
                    createRandom(value: _362.MsgCreateRandom): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createRandom(value: any): {
                        typeUrl: string;
                        value: _362.MsgCreateRandom;
                    };
                };
                fromPartial: {
                    createRandom(value: _362.MsgCreateRandom): {
                        typeUrl: string;
                        value: _362.MsgCreateRandom;
                    };
                };
            };
            AminoConverter: {
                "/echelon.vrf.v1.MsgCreateRandom": {
                    aminoType: string;
                    toAmino: ({ creator, multiplier }: _362.MsgCreateRandom) => {
                        creator: string;
                        multiplier: string;
                    };
                    fromAmino: ({ creator, multiplier }: {
                        creator: string;
                        multiplier: string;
                    }) => _362.MsgCreateRandom;
                };
            };
            Userval: {
                encode(message: _363.Userval, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _363.Userval;
                fromJSON(object: any): _363.Userval;
                toJSON(message: _363.Userval): unknown;
                fromPartial(object: {
                    index?: string;
                    useraddr?: string;
                    count?: any;
                }): _363.Userval;
            };
            MsgCreateRandom: {
                encode(message: _362.MsgCreateRandom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _362.MsgCreateRandom;
                fromJSON(object: any): _362.MsgCreateRandom;
                toJSON(message: _362.MsgCreateRandom): unknown;
                fromPartial(object: {
                    creator?: string;
                    multiplier?: any;
                }): _362.MsgCreateRandom;
            };
            MsgCreateRandomResponse: {
                encode(message: _362.MsgCreateRandomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _362.MsgCreateRandomResponse;
                fromJSON(object: any): _362.MsgCreateRandomResponse;
                toJSON(message: _362.MsgCreateRandomResponse): unknown;
                fromPartial(object: {
                    id?: any;
                }): _362.MsgCreateRandomResponse;
            };
            Randomval: {
                encode(message: _361.Randomval, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _361.Randomval;
                fromJSON(object: any): _361.Randomval;
                toJSON(message: _361.Randomval): unknown;
                fromPartial(object: {
                    index?: string;
                    creator?: string;
                    vrv?: string;
                    multiplier?: any;
                    proof?: string;
                    pubk?: string;
                    message?: string;
                    parsedvrv?: any;
                    floatvrv?: number;
                    finalvrv?: any;
                    finalvrvfl?: number;
                }): _361.Randomval;
            };
            QueryGetRandomvalRequest: {
                encode(message: _360.QueryGetRandomvalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.QueryGetRandomvalRequest;
                fromJSON(object: any): _360.QueryGetRandomvalRequest;
                toJSON(message: _360.QueryGetRandomvalRequest): unknown;
                fromPartial(object: {
                    index?: string;
                }): _360.QueryGetRandomvalRequest;
            };
            QueryGetRandomvalResponse: {
                encode(message: _360.QueryGetRandomvalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.QueryGetRandomvalResponse;
                fromJSON(object: any): _360.QueryGetRandomvalResponse;
                toJSON(message: _360.QueryGetRandomvalResponse): unknown;
                fromPartial(object: {
                    randomval?: {
                        index?: string;
                        creator?: string;
                        vrv?: string;
                        multiplier?: any;
                        proof?: string;
                        pubk?: string;
                        message?: string;
                        parsedvrv?: any;
                        floatvrv?: number;
                        finalvrv?: any;
                        finalvrvfl?: number;
                    };
                }): _360.QueryGetRandomvalResponse;
            };
            QueryAllRandomvalRequest: {
                encode(message: _360.QueryAllRandomvalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.QueryAllRandomvalRequest;
                fromJSON(object: any): _360.QueryAllRandomvalRequest;
                toJSON(message: _360.QueryAllRandomvalRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _360.QueryAllRandomvalRequest;
            };
            QueryAllRandomvalResponse: {
                encode(message: _360.QueryAllRandomvalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.QueryAllRandomvalResponse;
                fromJSON(object: any): _360.QueryAllRandomvalResponse;
                toJSON(message: _360.QueryAllRandomvalResponse): unknown;
                fromPartial(object: {
                    randomval?: {
                        index?: string;
                        creator?: string;
                        vrv?: string;
                        multiplier?: any;
                        proof?: string;
                        pubk?: string;
                        message?: string;
                        parsedvrv?: any;
                        floatvrv?: number;
                        finalvrv?: any;
                        finalvrvfl?: number;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _360.QueryAllRandomvalResponse;
            };
            QueryGetUservalRequest: {
                encode(message: _360.QueryGetUservalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.QueryGetUservalRequest;
                fromJSON(object: any): _360.QueryGetUservalRequest;
                toJSON(message: _360.QueryGetUservalRequest): unknown;
                fromPartial(object: {
                    index?: string;
                }): _360.QueryGetUservalRequest;
            };
            QueryGetUservalResponse: {
                encode(message: _360.QueryGetUservalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.QueryGetUservalResponse;
                fromJSON(object: any): _360.QueryGetUservalResponse;
                toJSON(message: _360.QueryGetUservalResponse): unknown;
                fromPartial(object: {
                    userval?: {
                        index?: string;
                        useraddr?: string;
                        count?: any;
                    };
                }): _360.QueryGetUservalResponse;
            };
            QueryAllUservalRequest: {
                encode(message: _360.QueryAllUservalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.QueryAllUservalRequest;
                fromJSON(object: any): _360.QueryAllUservalRequest;
                toJSON(message: _360.QueryAllUservalRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _360.QueryAllUservalRequest;
            };
            QueryAllUservalResponse: {
                encode(message: _360.QueryAllUservalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.QueryAllUservalResponse;
                fromJSON(object: any): _360.QueryAllUservalResponse;
                toJSON(message: _360.QueryAllUservalResponse): unknown;
                fromPartial(object: {
                    userval?: {
                        index?: string;
                        useraddr?: string;
                        count?: any;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _360.QueryAllUservalResponse;
            };
            QueryVerifyValuesRequest: {
                encode(message: _360.QueryVerifyValuesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.QueryVerifyValuesRequest;
                fromJSON(object: any): _360.QueryVerifyValuesRequest;
                toJSON(message: _360.QueryVerifyValuesRequest): unknown;
                fromPartial(object: {
                    pubkey?: string;
                    message?: string;
                    vrv?: string;
                    proof?: string;
                }): _360.QueryVerifyValuesRequest;
            };
            QueryVerifyValuesResponse: {
                encode(message: _360.QueryVerifyValuesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.QueryVerifyValuesResponse;
                fromJSON(object: any): _360.QueryVerifyValuesResponse;
                toJSON(message: _360.QueryVerifyValuesResponse): unknown;
                fromPartial(object: {
                    verified?: string;
                }): _360.QueryVerifyValuesResponse;
            };
            GenesisState: {
                encode(message: _359.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _359.GenesisState;
                fromJSON(object: any): _359.GenesisState;
                toJSON(message: _359.GenesisState): unknown;
                fromPartial(object: {
                    randomvalList?: {
                        index?: string;
                        creator?: string;
                        vrv?: string;
                        multiplier?: any;
                        proof?: string;
                        pubk?: string;
                        message?: string;
                        parsedvrv?: any;
                        floatvrv?: number;
                        finalvrv?: any;
                        finalvrvfl?: number;
                    }[];
                    uservalList?: {
                        index?: string;
                        useraddr?: string;
                        count?: any;
                    }[];
                }): _359.GenesisState;
            };
        };
    }
}
