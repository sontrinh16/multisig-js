import * as _561 from "./alloc/v1beta1/genesis";
import * as _562 from "./alloc/v1beta1/params";
import * as _563 from "./alloc/v1beta1/query";
export declare namespace omniflix {
    namespace alloc {
        const v1beta1: {
            QueryParamsRequest: {
                encode(_: _563.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _563.QueryParamsRequest;
                fromJSON(_: any): _563.QueryParamsRequest;
                toJSON(_: _563.QueryParamsRequest): unknown;
                fromPartial(_: {}): _563.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _563.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _563.QueryParamsResponse;
                fromJSON(object: any): _563.QueryParamsResponse;
                toJSON(message: _563.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        distributionProportions?: {
                            stakingRewards?: string;
                            nftIncentives?: string;
                            nodeHostsIncentives?: string;
                            developerRewards?: string;
                            communityPool?: string;
                        };
                        weightedDeveloperRewardsReceivers?: {
                            address?: string;
                            weight?: string;
                        }[];
                    };
                }): _563.QueryParamsResponse;
            };
            WeightedAddress: {
                encode(message: _562.WeightedAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _562.WeightedAddress;
                fromJSON(object: any): _562.WeightedAddress;
                toJSON(message: _562.WeightedAddress): unknown;
                fromPartial(object: {
                    address?: string;
                    weight?: string;
                }): _562.WeightedAddress;
            };
            DistributionProportions: {
                encode(message: _562.DistributionProportions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _562.DistributionProportions;
                fromJSON(object: any): _562.DistributionProportions;
                toJSON(message: _562.DistributionProportions): unknown;
                fromPartial(object: {
                    stakingRewards?: string;
                    nftIncentives?: string;
                    nodeHostsIncentives?: string;
                    developerRewards?: string;
                    communityPool?: string;
                }): _562.DistributionProportions;
            };
            Params: {
                encode(message: _562.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _562.Params;
                fromJSON(object: any): _562.Params;
                toJSON(message: _562.Params): unknown;
                fromPartial(object: {
                    distributionProportions?: {
                        stakingRewards?: string;
                        nftIncentives?: string;
                        nodeHostsIncentives?: string;
                        developerRewards?: string;
                        communityPool?: string;
                    };
                    weightedDeveloperRewardsReceivers?: {
                        address?: string;
                        weight?: string;
                    }[];
                }): _562.Params;
            };
            GenesisState: {
                encode(message: _561.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _561.GenesisState;
                fromJSON(object: any): _561.GenesisState;
                toJSON(message: _561.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        distributionProportions?: {
                            stakingRewards?: string;
                            nftIncentives?: string;
                            nodeHostsIncentives?: string;
                            developerRewards?: string;
                            communityPool?: string;
                        };
                        weightedDeveloperRewardsReceivers?: {
                            address?: string;
                            weight?: string;
                        }[];
                    };
                }): _561.GenesisState;
            };
        };
    }
}
