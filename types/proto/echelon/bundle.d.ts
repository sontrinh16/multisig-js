import * as _274 from "./epochs/v1/genesis";
import * as _275 from "./epochs/v1/query";
import * as _276 from "./erc20/v1/erc20";
import * as _277 from "./erc20/v1/genesis";
import * as _278 from "./erc20/v1/query";
import * as _279 from "./erc20/v1/tx";
import * as _280 from "./incentives/v1/genesis";
import * as _281 from "./incentives/v1/incentives";
import * as _282 from "./incentives/v1/query";
import * as _283 from "./inflation/v1/genesis";
import * as _284 from "./inflation/v1/inflation";
import * as _285 from "./inflation/v1/query";
import * as _286 from "./recovery/v1/genesis";
import * as _287 from "./recovery/v1/query";
import * as _288 from "./vesting/v1/query";
import * as _289 from "./vesting/v1/tx";
import * as _290 from "./vesting/v1/vesting";
import * as _291 from "./vrf/v1/genesis";
import * as _292 from "./vrf/v1/query";
import * as _293 from "./vrf/v1/randomval";
import * as _294 from "./vrf/v1/tx";
import * as _295 from "./vrf/v1/userval";
export declare namespace echelon {
    namespace epochs {
        const v1: {
            QueryEpochsInfoRequest: {
                encode(message: _275.QueryEpochsInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _275.QueryEpochsInfoRequest;
                fromJSON(object: any): _275.QueryEpochsInfoRequest;
                toJSON(message: _275.QueryEpochsInfoRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _275.QueryEpochsInfoRequest;
            };
            QueryEpochsInfoResponse: {
                encode(message: _275.QueryEpochsInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _275.QueryEpochsInfoResponse;
                fromJSON(object: any): _275.QueryEpochsInfoResponse;
                toJSON(message: _275.QueryEpochsInfoResponse): unknown;
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
                }): _275.QueryEpochsInfoResponse;
            };
            QueryCurrentEpochRequest: {
                encode(message: _275.QueryCurrentEpochRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _275.QueryCurrentEpochRequest;
                fromJSON(object: any): _275.QueryCurrentEpochRequest;
                toJSON(message: _275.QueryCurrentEpochRequest): unknown;
                fromPartial(object: {
                    identifier?: string;
                }): _275.QueryCurrentEpochRequest;
            };
            QueryCurrentEpochResponse: {
                encode(message: _275.QueryCurrentEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _275.QueryCurrentEpochResponse;
                fromJSON(object: any): _275.QueryCurrentEpochResponse;
                toJSON(message: _275.QueryCurrentEpochResponse): unknown;
                fromPartial(object: {
                    currentEpoch?: any;
                }): _275.QueryCurrentEpochResponse;
            };
            EpochInfo: {
                encode(message: _274.EpochInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _274.EpochInfo;
                fromJSON(object: any): _274.EpochInfo;
                toJSON(message: _274.EpochInfo): unknown;
                fromPartial(object: {
                    identifier?: string;
                    startTime?: Date;
                    duration?: string;
                    currentEpoch?: any;
                    currentEpochStartTime?: Date;
                    epochCountingStarted?: boolean;
                    currentEpochStartHeight?: any;
                }): _274.EpochInfo;
            };
            GenesisState: {
                encode(message: _274.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _274.GenesisState;
                fromJSON(object: any): _274.GenesisState;
                toJSON(message: _274.GenesisState): unknown;
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
                }): _274.GenesisState;
            };
        };
    }
    namespace erc20 {
        const v1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    convertCoin(value: _279.MsgConvertCoin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    convertERC20(value: _279.MsgConvertERC20): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    convertCoin(value: _279.MsgConvertCoin): {
                        typeUrl: string;
                        value: _279.MsgConvertCoin;
                    };
                    convertERC20(value: _279.MsgConvertERC20): {
                        typeUrl: string;
                        value: _279.MsgConvertERC20;
                    };
                };
                toJSON: {
                    convertCoin(value: _279.MsgConvertCoin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    convertERC20(value: _279.MsgConvertERC20): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    convertCoin(value: any): {
                        typeUrl: string;
                        value: _279.MsgConvertCoin;
                    };
                    convertERC20(value: any): {
                        typeUrl: string;
                        value: _279.MsgConvertERC20;
                    };
                };
                fromPartial: {
                    convertCoin(value: _279.MsgConvertCoin): {
                        typeUrl: string;
                        value: _279.MsgConvertCoin;
                    };
                    convertERC20(value: _279.MsgConvertERC20): {
                        typeUrl: string;
                        value: _279.MsgConvertERC20;
                    };
                };
            };
            AminoConverter: {
                "/echelon.erc20.v1.MsgConvertCoin": {
                    aminoType: string;
                    toAmino: ({ coin, receiver, sender }: _279.MsgConvertCoin) => {
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
                    }) => _279.MsgConvertCoin;
                };
                "/echelon.erc20.v1.MsgConvertERC20": {
                    aminoType: string;
                    toAmino: ({ contractAddress, amount, receiver, sender }: _279.MsgConvertERC20) => {
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
                    }) => _279.MsgConvertERC20;
                };
            };
            MsgConvertCoin: {
                encode(message: _279.MsgConvertCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _279.MsgConvertCoin;
                fromJSON(object: any): _279.MsgConvertCoin;
                toJSON(message: _279.MsgConvertCoin): unknown;
                fromPartial(object: {
                    coin?: {
                        denom?: string;
                        amount?: string;
                    };
                    receiver?: string;
                    sender?: string;
                }): _279.MsgConvertCoin;
            };
            MsgConvertCoinResponse: {
                encode(_: _279.MsgConvertCoinResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _279.MsgConvertCoinResponse;
                fromJSON(_: any): _279.MsgConvertCoinResponse;
                toJSON(_: _279.MsgConvertCoinResponse): unknown;
                fromPartial(_: {}): _279.MsgConvertCoinResponse;
            };
            MsgConvertERC20: {
                encode(message: _279.MsgConvertERC20, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _279.MsgConvertERC20;
                fromJSON(object: any): _279.MsgConvertERC20;
                toJSON(message: _279.MsgConvertERC20): unknown;
                fromPartial(object: {
                    contractAddress?: string;
                    amount?: string;
                    receiver?: string;
                    sender?: string;
                }): _279.MsgConvertERC20;
            };
            MsgConvertERC20Response: {
                encode(_: _279.MsgConvertERC20Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _279.MsgConvertERC20Response;
                fromJSON(_: any): _279.MsgConvertERC20Response;
                toJSON(_: _279.MsgConvertERC20Response): unknown;
                fromPartial(_: {}): _279.MsgConvertERC20Response;
            };
            QueryTokenPairsRequest: {
                encode(message: _278.QueryTokenPairsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _278.QueryTokenPairsRequest;
                fromJSON(object: any): _278.QueryTokenPairsRequest;
                toJSON(message: _278.QueryTokenPairsRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _278.QueryTokenPairsRequest;
            };
            QueryTokenPairsResponse: {
                encode(message: _278.QueryTokenPairsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _278.QueryTokenPairsResponse;
                fromJSON(object: any): _278.QueryTokenPairsResponse;
                toJSON(message: _278.QueryTokenPairsResponse): unknown;
                fromPartial(object: {
                    tokenPairs?: {
                        erc20Address?: string;
                        denom?: string;
                        enabled?: boolean;
                        contractOwner?: _276.Owner;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _278.QueryTokenPairsResponse;
            };
            QueryTokenPairRequest: {
                encode(message: _278.QueryTokenPairRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _278.QueryTokenPairRequest;
                fromJSON(object: any): _278.QueryTokenPairRequest;
                toJSON(message: _278.QueryTokenPairRequest): unknown;
                fromPartial(object: {
                    token?: string;
                }): _278.QueryTokenPairRequest;
            };
            QueryTokenPairResponse: {
                encode(message: _278.QueryTokenPairResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _278.QueryTokenPairResponse;
                fromJSON(object: any): _278.QueryTokenPairResponse;
                toJSON(message: _278.QueryTokenPairResponse): unknown;
                fromPartial(object: {
                    tokenPair?: {
                        erc20Address?: string;
                        denom?: string;
                        enabled?: boolean;
                        contractOwner?: _276.Owner;
                    };
                }): _278.QueryTokenPairResponse;
            };
            QueryParamsRequest: {
                encode(_: _278.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _278.QueryParamsRequest;
                fromJSON(_: any): _278.QueryParamsRequest;
                toJSON(_: _278.QueryParamsRequest): unknown;
                fromPartial(_: {}): _278.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _278.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _278.QueryParamsResponse;
                fromJSON(object: any): _278.QueryParamsResponse;
                toJSON(message: _278.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        enableErc20?: boolean;
                        enableEvmHook?: boolean;
                    };
                }): _278.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _277.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _277.GenesisState;
                fromJSON(object: any): _277.GenesisState;
                toJSON(message: _277.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        enableErc20?: boolean;
                        enableEvmHook?: boolean;
                    };
                    tokenPairs?: {
                        erc20Address?: string;
                        denom?: string;
                        enabled?: boolean;
                        contractOwner?: _276.Owner;
                    }[];
                }): _277.GenesisState;
            };
            Params: {
                encode(message: _277.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _277.Params;
                fromJSON(object: any): _277.Params;
                toJSON(message: _277.Params): unknown;
                fromPartial(object: {
                    enableErc20?: boolean;
                    enableEvmHook?: boolean;
                }): _277.Params;
            };
            ownerFromJSON(object: any): _276.Owner;
            ownerToJSON(object: _276.Owner): string;
            Owner: typeof _276.Owner;
            TokenPair: {
                encode(message: _276.TokenPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.TokenPair;
                fromJSON(object: any): _276.TokenPair;
                toJSON(message: _276.TokenPair): unknown;
                fromPartial(object: {
                    erc20Address?: string;
                    denom?: string;
                    enabled?: boolean;
                    contractOwner?: _276.Owner;
                }): _276.TokenPair;
            };
            RegisterCoinProposal: {
                encode(message: _276.RegisterCoinProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.RegisterCoinProposal;
                fromJSON(object: any): _276.RegisterCoinProposal;
                toJSON(message: _276.RegisterCoinProposal): unknown;
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
                }): _276.RegisterCoinProposal;
            };
            RegisterERC20Proposal: {
                encode(message: _276.RegisterERC20Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.RegisterERC20Proposal;
                fromJSON(object: any): _276.RegisterERC20Proposal;
                toJSON(message: _276.RegisterERC20Proposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    erc20address?: string;
                }): _276.RegisterERC20Proposal;
            };
            ToggleTokenRelayProposal: {
                encode(message: _276.ToggleTokenRelayProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.ToggleTokenRelayProposal;
                fromJSON(object: any): _276.ToggleTokenRelayProposal;
                toJSON(message: _276.ToggleTokenRelayProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    token?: string;
                }): _276.ToggleTokenRelayProposal;
            };
            UpdateTokenPairERC20Proposal: {
                encode(message: _276.UpdateTokenPairERC20Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.UpdateTokenPairERC20Proposal;
                fromJSON(object: any): _276.UpdateTokenPairERC20Proposal;
                toJSON(message: _276.UpdateTokenPairERC20Proposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    erc20Address?: string;
                    newErc20Address?: string;
                }): _276.UpdateTokenPairERC20Proposal;
            };
        };
    }
    namespace incentives {
        const v1: {
            QueryIncentivesRequest: {
                encode(message: _282.QueryIncentivesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _282.QueryIncentivesRequest;
                fromJSON(object: any): _282.QueryIncentivesRequest;
                toJSON(message: _282.QueryIncentivesRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _282.QueryIncentivesRequest;
            };
            QueryIncentivesResponse: {
                encode(message: _282.QueryIncentivesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _282.QueryIncentivesResponse;
                fromJSON(object: any): _282.QueryIncentivesResponse;
                toJSON(message: _282.QueryIncentivesResponse): unknown;
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
                }): _282.QueryIncentivesResponse;
            };
            QueryIncentiveRequest: {
                encode(message: _282.QueryIncentiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _282.QueryIncentiveRequest;
                fromJSON(object: any): _282.QueryIncentiveRequest;
                toJSON(message: _282.QueryIncentiveRequest): unknown;
                fromPartial(object: {
                    contract?: string;
                }): _282.QueryIncentiveRequest;
            };
            QueryIncentiveResponse: {
                encode(message: _282.QueryIncentiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _282.QueryIncentiveResponse;
                fromJSON(object: any): _282.QueryIncentiveResponse;
                toJSON(message: _282.QueryIncentiveResponse): unknown;
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
                }): _282.QueryIncentiveResponse;
            };
            QueryGasMetersRequest: {
                encode(message: _282.QueryGasMetersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _282.QueryGasMetersRequest;
                fromJSON(object: any): _282.QueryGasMetersRequest;
                toJSON(message: _282.QueryGasMetersRequest): unknown;
                fromPartial(object: {
                    contract?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _282.QueryGasMetersRequest;
            };
            QueryGasMetersResponse: {
                encode(message: _282.QueryGasMetersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _282.QueryGasMetersResponse;
                fromJSON(object: any): _282.QueryGasMetersResponse;
                toJSON(message: _282.QueryGasMetersResponse): unknown;
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
                }): _282.QueryGasMetersResponse;
            };
            QueryGasMeterRequest: {
                encode(message: _282.QueryGasMeterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _282.QueryGasMeterRequest;
                fromJSON(object: any): _282.QueryGasMeterRequest;
                toJSON(message: _282.QueryGasMeterRequest): unknown;
                fromPartial(object: {
                    contract?: string;
                    participant?: string;
                }): _282.QueryGasMeterRequest;
            };
            QueryGasMeterResponse: {
                encode(message: _282.QueryGasMeterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _282.QueryGasMeterResponse;
                fromJSON(object: any): _282.QueryGasMeterResponse;
                toJSON(message: _282.QueryGasMeterResponse): unknown;
                fromPartial(object: {
                    gasMeter?: any;
                }): _282.QueryGasMeterResponse;
            };
            QueryAllocationMetersRequest: {
                encode(message: _282.QueryAllocationMetersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _282.QueryAllocationMetersRequest;
                fromJSON(object: any): _282.QueryAllocationMetersRequest;
                toJSON(message: _282.QueryAllocationMetersRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _282.QueryAllocationMetersRequest;
            };
            QueryAllocationMetersResponse: {
                encode(message: _282.QueryAllocationMetersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _282.QueryAllocationMetersResponse;
                fromJSON(object: any): _282.QueryAllocationMetersResponse;
                toJSON(message: _282.QueryAllocationMetersResponse): unknown;
                fromPartial(object: {
                    allocationMeters?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _282.QueryAllocationMetersResponse;
            };
            QueryAllocationMeterRequest: {
                encode(message: _282.QueryAllocationMeterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _282.QueryAllocationMeterRequest;
                fromJSON(object: any): _282.QueryAllocationMeterRequest;
                toJSON(message: _282.QueryAllocationMeterRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _282.QueryAllocationMeterRequest;
            };
            QueryAllocationMeterResponse: {
                encode(message: _282.QueryAllocationMeterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _282.QueryAllocationMeterResponse;
                fromJSON(object: any): _282.QueryAllocationMeterResponse;
                toJSON(message: _282.QueryAllocationMeterResponse): unknown;
                fromPartial(object: {
                    allocationMeter?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _282.QueryAllocationMeterResponse;
            };
            QueryParamsRequest: {
                encode(_: _282.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _282.QueryParamsRequest;
                fromJSON(_: any): _282.QueryParamsRequest;
                toJSON(_: _282.QueryParamsRequest): unknown;
                fromPartial(_: {}): _282.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _282.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _282.QueryParamsResponse;
                fromJSON(object: any): _282.QueryParamsResponse;
                toJSON(message: _282.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        enableIncentives?: boolean;
                        allocationLimit?: string;
                        incentivesEpochIdentifier?: string;
                        rewardScaler?: string;
                    };
                }): _282.QueryParamsResponse;
            };
            Incentive: {
                encode(message: _281.Incentive, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _281.Incentive;
                fromJSON(object: any): _281.Incentive;
                toJSON(message: _281.Incentive): unknown;
                fromPartial(object: {
                    contract?: string;
                    allocations?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    epochs?: number;
                    startTime?: Date;
                    totalGas?: any;
                }): _281.Incentive;
            };
            GasMeter: {
                encode(message: _281.GasMeter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _281.GasMeter;
                fromJSON(object: any): _281.GasMeter;
                toJSON(message: _281.GasMeter): unknown;
                fromPartial(object: {
                    contract?: string;
                    participant?: string;
                    cumulativeGas?: any;
                }): _281.GasMeter;
            };
            RegisterIncentiveProposal: {
                encode(message: _281.RegisterIncentiveProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _281.RegisterIncentiveProposal;
                fromJSON(object: any): _281.RegisterIncentiveProposal;
                toJSON(message: _281.RegisterIncentiveProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                    allocations?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    epochs?: number;
                }): _281.RegisterIncentiveProposal;
            };
            CancelIncentiveProposal: {
                encode(message: _281.CancelIncentiveProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _281.CancelIncentiveProposal;
                fromJSON(object: any): _281.CancelIncentiveProposal;
                toJSON(message: _281.CancelIncentiveProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                }): _281.CancelIncentiveProposal;
            };
            GenesisState: {
                encode(message: _280.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _280.GenesisState;
                fromJSON(object: any): _280.GenesisState;
                toJSON(message: _280.GenesisState): unknown;
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
                }): _280.GenesisState;
            };
            Params: {
                encode(message: _280.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _280.Params;
                fromJSON(object: any): _280.Params;
                toJSON(message: _280.Params): unknown;
                fromPartial(object: {
                    enableIncentives?: boolean;
                    allocationLimit?: string;
                    incentivesEpochIdentifier?: string;
                    rewardScaler?: string;
                }): _280.Params;
            };
        };
    }
    namespace inflation {
        const v1: {
            QueryPeriodRequest: {
                encode(_: _285.QueryPeriodRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _285.QueryPeriodRequest;
                fromJSON(_: any): _285.QueryPeriodRequest;
                toJSON(_: _285.QueryPeriodRequest): unknown;
                fromPartial(_: {}): _285.QueryPeriodRequest;
            };
            QueryPeriodResponse: {
                encode(message: _285.QueryPeriodResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _285.QueryPeriodResponse;
                fromJSON(object: any): _285.QueryPeriodResponse;
                toJSON(message: _285.QueryPeriodResponse): unknown;
                fromPartial(object: {
                    period?: any;
                }): _285.QueryPeriodResponse;
            };
            QueryEpochMintProvisionRequest: {
                encode(_: _285.QueryEpochMintProvisionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _285.QueryEpochMintProvisionRequest;
                fromJSON(_: any): _285.QueryEpochMintProvisionRequest;
                toJSON(_: _285.QueryEpochMintProvisionRequest): unknown;
                fromPartial(_: {}): _285.QueryEpochMintProvisionRequest;
            };
            QueryEpochMintProvisionResponse: {
                encode(message: _285.QueryEpochMintProvisionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _285.QueryEpochMintProvisionResponse;
                fromJSON(object: any): _285.QueryEpochMintProvisionResponse;
                toJSON(message: _285.QueryEpochMintProvisionResponse): unknown;
                fromPartial(object: {
                    epochMintProvision?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _285.QueryEpochMintProvisionResponse;
            };
            QuerySkippedEpochsRequest: {
                encode(_: _285.QuerySkippedEpochsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _285.QuerySkippedEpochsRequest;
                fromJSON(_: any): _285.QuerySkippedEpochsRequest;
                toJSON(_: _285.QuerySkippedEpochsRequest): unknown;
                fromPartial(_: {}): _285.QuerySkippedEpochsRequest;
            };
            QuerySkippedEpochsResponse: {
                encode(message: _285.QuerySkippedEpochsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _285.QuerySkippedEpochsResponse;
                fromJSON(object: any): _285.QuerySkippedEpochsResponse;
                toJSON(message: _285.QuerySkippedEpochsResponse): unknown;
                fromPartial(object: {
                    skippedEpochs?: any;
                }): _285.QuerySkippedEpochsResponse;
            };
            QueryTotalSupplyRequest: {
                encode(_: _285.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _285.QueryTotalSupplyRequest;
                fromJSON(_: any): _285.QueryTotalSupplyRequest;
                toJSON(_: _285.QueryTotalSupplyRequest): unknown;
                fromPartial(_: {}): _285.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _285.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _285.QueryTotalSupplyResponse;
                fromJSON(object: any): _285.QueryTotalSupplyResponse;
                toJSON(message: _285.QueryTotalSupplyResponse): unknown;
                fromPartial(object: {
                    totalSupply?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _285.QueryTotalSupplyResponse;
            };
            QueryInflationRateRequest: {
                encode(_: _285.QueryInflationRateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _285.QueryInflationRateRequest;
                fromJSON(_: any): _285.QueryInflationRateRequest;
                toJSON(_: _285.QueryInflationRateRequest): unknown;
                fromPartial(_: {}): _285.QueryInflationRateRequest;
            };
            QueryInflationRateResponse: {
                encode(message: _285.QueryInflationRateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _285.QueryInflationRateResponse;
                fromJSON(object: any): _285.QueryInflationRateResponse;
                toJSON(message: _285.QueryInflationRateResponse): unknown;
                fromPartial(object: {
                    inflationRate?: string;
                }): _285.QueryInflationRateResponse;
            };
            QueryParamsRequest: {
                encode(_: _285.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _285.QueryParamsRequest;
                fromJSON(_: any): _285.QueryParamsRequest;
                toJSON(_: _285.QueryParamsRequest): unknown;
                fromPartial(_: {}): _285.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _285.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _285.QueryParamsResponse;
                fromJSON(object: any): _285.QueryParamsResponse;
                toJSON(message: _285.QueryParamsResponse): unknown;
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
                }): _285.QueryParamsResponse;
            };
            InflationDistribution: {
                encode(message: _284.InflationDistribution, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _284.InflationDistribution;
                fromJSON(object: any): _284.InflationDistribution;
                toJSON(message: _284.InflationDistribution): unknown;
                fromPartial(object: {
                    stakingRewards?: string;
                    usageIncentives?: string;
                    communityPool?: string;
                }): _284.InflationDistribution;
            };
            ExponentialCalculation: {
                encode(message: _284.ExponentialCalculation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _284.ExponentialCalculation;
                fromJSON(object: any): _284.ExponentialCalculation;
                toJSON(message: _284.ExponentialCalculation): unknown;
                fromPartial(object: {
                    a?: string;
                    r?: string;
                    c?: string;
                    bondingTarget?: string;
                    maxVariance?: string;
                }): _284.ExponentialCalculation;
            };
            GenesisState: {
                encode(message: _283.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _283.GenesisState;
                fromJSON(object: any): _283.GenesisState;
                toJSON(message: _283.GenesisState): unknown;
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
                }): _283.GenesisState;
            };
            Params: {
                encode(message: _283.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _283.Params;
                fromJSON(object: any): _283.Params;
                toJSON(message: _283.Params): unknown;
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
                }): _283.Params;
            };
        };
    }
    namespace recovery {
        const v1: {
            QueryParamsRequest: {
                encode(_: _287.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _287.QueryParamsRequest;
                fromJSON(_: any): _287.QueryParamsRequest;
                toJSON(_: _287.QueryParamsRequest): unknown;
                fromPartial(_: {}): _287.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _287.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _287.QueryParamsResponse;
                fromJSON(object: any): _287.QueryParamsResponse;
                toJSON(message: _287.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        enableRecovery?: boolean;
                        packetTimeoutDuration?: string;
                    };
                }): _287.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _286.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _286.GenesisState;
                fromJSON(object: any): _286.GenesisState;
                toJSON(message: _286.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        enableRecovery?: boolean;
                        packetTimeoutDuration?: string;
                    };
                }): _286.GenesisState;
            };
            Params: {
                encode(message: _286.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _286.Params;
                fromJSON(object: any): _286.Params;
                toJSON(message: _286.Params): unknown;
                fromPartial(object: {
                    enableRecovery?: boolean;
                    packetTimeoutDuration?: string;
                }): _286.Params;
            };
        };
    }
    namespace vesting {
        const v1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createClawbackVestingAccount(value: _289.MsgCreateClawbackVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clawback(value: _289.MsgClawback): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createClawbackVestingAccount(value: _289.MsgCreateClawbackVestingAccount): {
                        typeUrl: string;
                        value: _289.MsgCreateClawbackVestingAccount;
                    };
                    clawback(value: _289.MsgClawback): {
                        typeUrl: string;
                        value: _289.MsgClawback;
                    };
                };
                toJSON: {
                    createClawbackVestingAccount(value: _289.MsgCreateClawbackVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    clawback(value: _289.MsgClawback): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createClawbackVestingAccount(value: any): {
                        typeUrl: string;
                        value: _289.MsgCreateClawbackVestingAccount;
                    };
                    clawback(value: any): {
                        typeUrl: string;
                        value: _289.MsgClawback;
                    };
                };
                fromPartial: {
                    createClawbackVestingAccount(value: _289.MsgCreateClawbackVestingAccount): {
                        typeUrl: string;
                        value: _289.MsgCreateClawbackVestingAccount;
                    };
                    clawback(value: _289.MsgClawback): {
                        typeUrl: string;
                        value: _289.MsgClawback;
                    };
                };
            };
            AminoConverter: {
                "/echelon.vesting.v1.MsgCreateClawbackVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, startTime, lockupPeriods, vestingPeriods, merge }: _289.MsgCreateClawbackVestingAccount) => {
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
                    }) => _289.MsgCreateClawbackVestingAccount;
                };
                "/echelon.vesting.v1.MsgClawback": {
                    aminoType: string;
                    toAmino: ({ funderAddress, accountAddress, destAddress }: _289.MsgClawback) => {
                        funder_address: string;
                        account_address: string;
                        dest_address: string;
                    };
                    fromAmino: ({ funder_address, account_address, dest_address }: {
                        funder_address: string;
                        account_address: string;
                        dest_address: string;
                    }) => _289.MsgClawback;
                };
            };
            ClawbackVestingAccount: {
                encode(message: _290.ClawbackVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _290.ClawbackVestingAccount;
                fromJSON(object: any): _290.ClawbackVestingAccount;
                toJSON(message: _290.ClawbackVestingAccount): unknown;
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
                }): _290.ClawbackVestingAccount;
            };
            MsgCreateClawbackVestingAccount: {
                encode(message: _289.MsgCreateClawbackVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _289.MsgCreateClawbackVestingAccount;
                fromJSON(object: any): _289.MsgCreateClawbackVestingAccount;
                toJSON(message: _289.MsgCreateClawbackVestingAccount): unknown;
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
                }): _289.MsgCreateClawbackVestingAccount;
            };
            MsgCreateClawbackVestingAccountResponse: {
                encode(_: _289.MsgCreateClawbackVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _289.MsgCreateClawbackVestingAccountResponse;
                fromJSON(_: any): _289.MsgCreateClawbackVestingAccountResponse;
                toJSON(_: _289.MsgCreateClawbackVestingAccountResponse): unknown;
                fromPartial(_: {}): _289.MsgCreateClawbackVestingAccountResponse;
            };
            MsgClawback: {
                encode(message: _289.MsgClawback, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _289.MsgClawback;
                fromJSON(object: any): _289.MsgClawback;
                toJSON(message: _289.MsgClawback): unknown;
                fromPartial(object: {
                    funderAddress?: string;
                    accountAddress?: string;
                    destAddress?: string;
                }): _289.MsgClawback;
            };
            MsgClawbackResponse: {
                encode(_: _289.MsgClawbackResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _289.MsgClawbackResponse;
                fromJSON(_: any): _289.MsgClawbackResponse;
                toJSON(_: _289.MsgClawbackResponse): unknown;
                fromPartial(_: {}): _289.MsgClawbackResponse;
            };
            QueryBalancesRequest: {
                encode(message: _288.QueryBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.QueryBalancesRequest;
                fromJSON(object: any): _288.QueryBalancesRequest;
                toJSON(message: _288.QueryBalancesRequest): unknown;
                fromPartial(object: {
                    address?: string;
                }): _288.QueryBalancesRequest;
            };
            QueryBalancesResponse: {
                encode(message: _288.QueryBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.QueryBalancesResponse;
                fromJSON(object: any): _288.QueryBalancesResponse;
                toJSON(message: _288.QueryBalancesResponse): unknown;
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
                }): _288.QueryBalancesResponse;
            };
        };
    }
    namespace vrf {
        const v1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createRandom(value: _294.MsgCreateRandom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createRandom(value: _294.MsgCreateRandom): {
                        typeUrl: string;
                        value: _294.MsgCreateRandom;
                    };
                };
                toJSON: {
                    createRandom(value: _294.MsgCreateRandom): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createRandom(value: any): {
                        typeUrl: string;
                        value: _294.MsgCreateRandom;
                    };
                };
                fromPartial: {
                    createRandom(value: _294.MsgCreateRandom): {
                        typeUrl: string;
                        value: _294.MsgCreateRandom;
                    };
                };
            };
            AminoConverter: {
                "/echelon.vrf.v1.MsgCreateRandom": {
                    aminoType: string;
                    toAmino: ({ creator, multiplier }: _294.MsgCreateRandom) => {
                        creator: string;
                        multiplier: string;
                    };
                    fromAmino: ({ creator, multiplier }: {
                        creator: string;
                        multiplier: string;
                    }) => _294.MsgCreateRandom;
                };
            };
            Userval: {
                encode(message: _295.Userval, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _295.Userval;
                fromJSON(object: any): _295.Userval;
                toJSON(message: _295.Userval): unknown;
                fromPartial(object: {
                    index?: string;
                    useraddr?: string;
                    count?: any;
                }): _295.Userval;
            };
            MsgCreateRandom: {
                encode(message: _294.MsgCreateRandom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _294.MsgCreateRandom;
                fromJSON(object: any): _294.MsgCreateRandom;
                toJSON(message: _294.MsgCreateRandom): unknown;
                fromPartial(object: {
                    creator?: string;
                    multiplier?: any;
                }): _294.MsgCreateRandom;
            };
            MsgCreateRandomResponse: {
                encode(message: _294.MsgCreateRandomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _294.MsgCreateRandomResponse;
                fromJSON(object: any): _294.MsgCreateRandomResponse;
                toJSON(message: _294.MsgCreateRandomResponse): unknown;
                fromPartial(object: {
                    id?: any;
                }): _294.MsgCreateRandomResponse;
            };
            Randomval: {
                encode(message: _293.Randomval, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _293.Randomval;
                fromJSON(object: any): _293.Randomval;
                toJSON(message: _293.Randomval): unknown;
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
                }): _293.Randomval;
            };
            QueryGetRandomvalRequest: {
                encode(message: _292.QueryGetRandomvalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _292.QueryGetRandomvalRequest;
                fromJSON(object: any): _292.QueryGetRandomvalRequest;
                toJSON(message: _292.QueryGetRandomvalRequest): unknown;
                fromPartial(object: {
                    index?: string;
                }): _292.QueryGetRandomvalRequest;
            };
            QueryGetRandomvalResponse: {
                encode(message: _292.QueryGetRandomvalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _292.QueryGetRandomvalResponse;
                fromJSON(object: any): _292.QueryGetRandomvalResponse;
                toJSON(message: _292.QueryGetRandomvalResponse): unknown;
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
                }): _292.QueryGetRandomvalResponse;
            };
            QueryAllRandomvalRequest: {
                encode(message: _292.QueryAllRandomvalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _292.QueryAllRandomvalRequest;
                fromJSON(object: any): _292.QueryAllRandomvalRequest;
                toJSON(message: _292.QueryAllRandomvalRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _292.QueryAllRandomvalRequest;
            };
            QueryAllRandomvalResponse: {
                encode(message: _292.QueryAllRandomvalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _292.QueryAllRandomvalResponse;
                fromJSON(object: any): _292.QueryAllRandomvalResponse;
                toJSON(message: _292.QueryAllRandomvalResponse): unknown;
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
                }): _292.QueryAllRandomvalResponse;
            };
            QueryGetUservalRequest: {
                encode(message: _292.QueryGetUservalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _292.QueryGetUservalRequest;
                fromJSON(object: any): _292.QueryGetUservalRequest;
                toJSON(message: _292.QueryGetUservalRequest): unknown;
                fromPartial(object: {
                    index?: string;
                }): _292.QueryGetUservalRequest;
            };
            QueryGetUservalResponse: {
                encode(message: _292.QueryGetUservalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _292.QueryGetUservalResponse;
                fromJSON(object: any): _292.QueryGetUservalResponse;
                toJSON(message: _292.QueryGetUservalResponse): unknown;
                fromPartial(object: {
                    userval?: {
                        index?: string;
                        useraddr?: string;
                        count?: any;
                    };
                }): _292.QueryGetUservalResponse;
            };
            QueryAllUservalRequest: {
                encode(message: _292.QueryAllUservalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _292.QueryAllUservalRequest;
                fromJSON(object: any): _292.QueryAllUservalRequest;
                toJSON(message: _292.QueryAllUservalRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _292.QueryAllUservalRequest;
            };
            QueryAllUservalResponse: {
                encode(message: _292.QueryAllUservalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _292.QueryAllUservalResponse;
                fromJSON(object: any): _292.QueryAllUservalResponse;
                toJSON(message: _292.QueryAllUservalResponse): unknown;
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
                }): _292.QueryAllUservalResponse;
            };
            QueryVerifyValuesRequest: {
                encode(message: _292.QueryVerifyValuesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _292.QueryVerifyValuesRequest;
                fromJSON(object: any): _292.QueryVerifyValuesRequest;
                toJSON(message: _292.QueryVerifyValuesRequest): unknown;
                fromPartial(object: {
                    pubkey?: string;
                    message?: string;
                    vrv?: string;
                    proof?: string;
                }): _292.QueryVerifyValuesRequest;
            };
            QueryVerifyValuesResponse: {
                encode(message: _292.QueryVerifyValuesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _292.QueryVerifyValuesResponse;
                fromJSON(object: any): _292.QueryVerifyValuesResponse;
                toJSON(message: _292.QueryVerifyValuesResponse): unknown;
                fromPartial(object: {
                    verified?: string;
                }): _292.QueryVerifyValuesResponse;
            };
            GenesisState: {
                encode(message: _291.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _291.GenesisState;
                fromJSON(object: any): _291.GenesisState;
                toJSON(message: _291.GenesisState): unknown;
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
                }): _291.GenesisState;
            };
        };
    }
}
