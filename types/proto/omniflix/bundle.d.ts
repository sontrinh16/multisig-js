import * as _493 from "./alloc/v1beta1/genesis";
import * as _494 from "./alloc/v1beta1/params";
import * as _495 from "./alloc/v1beta1/query";
export declare namespace omniflix {
    namespace alloc {
        const v1beta1: {
            QueryParamsRequest: {
                encode(_: _495.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _495.QueryParamsRequest;
                fromJSON(_: any): _495.QueryParamsRequest;
                toJSON(_: _495.QueryParamsRequest): unknown;
                fromPartial(_: {}): _495.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _495.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _495.QueryParamsResponse;
                fromJSON(object: any): _495.QueryParamsResponse;
                toJSON(message: _495.QueryParamsResponse): unknown;
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
                }): _495.QueryParamsResponse;
            };
            WeightedAddress: {
                encode(message: _494.WeightedAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _494.WeightedAddress;
                fromJSON(object: any): _494.WeightedAddress;
                toJSON(message: _494.WeightedAddress): unknown;
                fromPartial(object: {
                    address?: string;
                    weight?: string;
                }): _494.WeightedAddress;
            };
            DistributionProportions: {
                encode(message: _494.DistributionProportions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _494.DistributionProportions;
                fromJSON(object: any): _494.DistributionProportions;
                toJSON(message: _494.DistributionProportions): unknown;
                fromPartial(object: {
                    stakingRewards?: string;
                    nftIncentives?: string;
                    nodeHostsIncentives?: string;
                    developerRewards?: string;
                    communityPool?: string;
                }): _494.DistributionProportions;
            };
            Params: {
                encode(message: _494.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _494.Params;
                fromJSON(object: any): _494.Params;
                toJSON(message: _494.Params): unknown;
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
                }): _494.Params;
            };
            GenesisState: {
                encode(message: _493.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _493.GenesisState;
                fromJSON(object: any): _493.GenesisState;
                toJSON(message: _493.GenesisState): unknown;
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
                }): _493.GenesisState;
            };
        };
    }
}
