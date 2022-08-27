import * as _667 from "../stargaze/alloc/v1beta1/genesis";
import * as _668 from "../stargaze/alloc/v1beta1/params";
import * as _669 from "../stargaze/alloc/v1beta1/query";
import * as _670 from "../stargaze/alloc/v1beta1/tx";
import * as _671 from "../stargaze/claim/v1beta1/claim_record";
import * as _672 from "../stargaze/claim/v1beta1/genesis";
import * as _673 from "../stargaze/claim/v1beta1/params";
import * as _674 from "../stargaze/claim/v1beta1/query";
import * as _675 from "../stargaze/claim/v1beta1/tx";
export declare namespace publicawesome {
    namespace stargaze {
        namespace alloc {
            const v1beta1: {
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createVestingAccount(value: _670.MsgCreateVestingAccount): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createVestingAccount(value: _670.MsgCreateVestingAccount): {
                            typeUrl: string;
                            value: _670.MsgCreateVestingAccount;
                        };
                    };
                    toJSON: {
                        createVestingAccount(value: _670.MsgCreateVestingAccount): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        createVestingAccount(value: any): {
                            typeUrl: string;
                            value: _670.MsgCreateVestingAccount;
                        };
                    };
                    fromPartial: {
                        createVestingAccount(value: _670.MsgCreateVestingAccount): {
                            typeUrl: string;
                            value: _670.MsgCreateVestingAccount;
                        };
                    };
                };
                AminoConverter: {
                    "/publicawesome.stargaze.alloc.v1beta1.MsgCreateVestingAccount": {
                        aminoType: string;
                        toAmino: ({ fromAddress, toAddress, amount, startTime, endTime, delayed }: _670.MsgCreateVestingAccount) => {
                            from_address: string;
                            to_address: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                            start_time: string;
                            end_time: string;
                            delayed: boolean;
                        };
                        fromAmino: ({ from_address, to_address, amount, start_time, end_time, delayed }: {
                            from_address: string;
                            to_address: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                            start_time: string;
                            end_time: string;
                            delayed: boolean;
                        }) => _670.MsgCreateVestingAccount;
                    };
                };
                MsgCreateVestingAccount: {
                    encode(message: _670.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _670.MsgCreateVestingAccount;
                    fromJSON(object: any): _670.MsgCreateVestingAccount;
                    toJSON(message: _670.MsgCreateVestingAccount): unknown;
                    fromPartial(object: {
                        fromAddress?: string;
                        toAddress?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        startTime?: any;
                        endTime?: any;
                        delayed?: boolean;
                    }): _670.MsgCreateVestingAccount;
                };
                MsgCreateVestingAccountResponse: {
                    encode(_: _670.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _670.MsgCreateVestingAccountResponse;
                    fromJSON(_: any): _670.MsgCreateVestingAccountResponse;
                    toJSON(_: _670.MsgCreateVestingAccountResponse): unknown;
                    fromPartial(_: {}): _670.MsgCreateVestingAccountResponse;
                };
                QueryParamsRequest: {
                    encode(_: _669.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _669.QueryParamsRequest;
                    fromJSON(_: any): _669.QueryParamsRequest;
                    toJSON(_: _669.QueryParamsRequest): unknown;
                    fromPartial(_: {}): _669.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _669.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _669.QueryParamsResponse;
                    fromJSON(object: any): _669.QueryParamsResponse;
                    toJSON(message: _669.QueryParamsResponse): unknown;
                    fromPartial(object: {
                        params?: {
                            distributionProportions?: {
                                nftIncentives?: string;
                                developerRewards?: string;
                            };
                            weightedDeveloperRewardsReceivers?: {
                                address?: string;
                                weight?: string;
                            }[];
                        };
                    }): _669.QueryParamsResponse;
                };
                WeightedAddress: {
                    encode(message: _668.WeightedAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _668.WeightedAddress;
                    fromJSON(object: any): _668.WeightedAddress;
                    toJSON(message: _668.WeightedAddress): unknown;
                    fromPartial(object: {
                        address?: string;
                        weight?: string;
                    }): _668.WeightedAddress;
                };
                DistributionProportions: {
                    encode(message: _668.DistributionProportions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _668.DistributionProportions;
                    fromJSON(object: any): _668.DistributionProportions;
                    toJSON(message: _668.DistributionProportions): unknown;
                    fromPartial(object: {
                        nftIncentives?: string;
                        developerRewards?: string;
                    }): _668.DistributionProportions;
                };
                Params: {
                    encode(message: _668.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _668.Params;
                    fromJSON(object: any): _668.Params;
                    toJSON(message: _668.Params): unknown;
                    fromPartial(object: {
                        distributionProportions?: {
                            nftIncentives?: string;
                            developerRewards?: string;
                        };
                        weightedDeveloperRewardsReceivers?: {
                            address?: string;
                            weight?: string;
                        }[];
                    }): _668.Params;
                };
                GenesisState: {
                    encode(message: _667.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _667.GenesisState;
                    fromJSON(object: any): _667.GenesisState;
                    toJSON(message: _667.GenesisState): unknown;
                    fromPartial(object: {
                        params?: {
                            distributionProportions?: {
                                nftIncentives?: string;
                                developerRewards?: string;
                            };
                            weightedDeveloperRewardsReceivers?: {
                                address?: string;
                                weight?: string;
                            }[];
                        };
                    }): _667.GenesisState;
                };
            };
        }
        namespace claim {
            const v1beta1: {
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        initialClaim(value: _675.MsgInitialClaim): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        claimFor(value: _675.MsgClaimFor): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        initialClaim(value: _675.MsgInitialClaim): {
                            typeUrl: string;
                            value: _675.MsgInitialClaim;
                        };
                        claimFor(value: _675.MsgClaimFor): {
                            typeUrl: string;
                            value: _675.MsgClaimFor;
                        };
                    };
                    toJSON: {
                        initialClaim(value: _675.MsgInitialClaim): {
                            typeUrl: string;
                            value: unknown;
                        };
                        claimFor(value: _675.MsgClaimFor): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        initialClaim(value: any): {
                            typeUrl: string;
                            value: _675.MsgInitialClaim;
                        };
                        claimFor(value: any): {
                            typeUrl: string;
                            value: _675.MsgClaimFor;
                        };
                    };
                    fromPartial: {
                        initialClaim(value: _675.MsgInitialClaim): {
                            typeUrl: string;
                            value: _675.MsgInitialClaim;
                        };
                        claimFor(value: _675.MsgClaimFor): {
                            typeUrl: string;
                            value: _675.MsgClaimFor;
                        };
                    };
                };
                AminoConverter: {
                    "/publicawesome.stargaze.claim.v1beta1.MsgInitialClaim": {
                        aminoType: string;
                        toAmino: ({ sender }: _675.MsgInitialClaim) => {
                            sender: string;
                        };
                        fromAmino: ({ sender }: {
                            sender: string;
                        }) => _675.MsgInitialClaim;
                    };
                    "/publicawesome.stargaze.claim.v1beta1.MsgClaimFor": {
                        aminoType: string;
                        toAmino: ({ sender, address, action }: _675.MsgClaimFor) => {
                            sender: string;
                            address: string;
                            action: number;
                        };
                        fromAmino: ({ sender, address, action }: {
                            sender: string;
                            address: string;
                            action: number;
                        }) => _675.MsgClaimFor;
                    };
                };
                MsgInitialClaim: {
                    encode(message: _675.MsgInitialClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _675.MsgInitialClaim;
                    fromJSON(object: any): _675.MsgInitialClaim;
                    toJSON(message: _675.MsgInitialClaim): unknown;
                    fromPartial(object: {
                        sender?: string;
                    }): _675.MsgInitialClaim;
                };
                MsgInitialClaimResponse: {
                    encode(message: _675.MsgInitialClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _675.MsgInitialClaimResponse;
                    fromJSON(object: any): _675.MsgInitialClaimResponse;
                    toJSON(message: _675.MsgInitialClaimResponse): unknown;
                    fromPartial(object: {
                        claimedAmount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }): _675.MsgInitialClaimResponse;
                };
                MsgClaimFor: {
                    encode(message: _675.MsgClaimFor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _675.MsgClaimFor;
                    fromJSON(object: any): _675.MsgClaimFor;
                    toJSON(message: _675.MsgClaimFor): unknown;
                    fromPartial(object: {
                        sender?: string;
                        address?: string;
                        action?: _671.Action;
                    }): _675.MsgClaimFor;
                };
                MsgClaimForResponse: {
                    encode(message: _675.MsgClaimForResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _675.MsgClaimForResponse;
                    fromJSON(object: any): _675.MsgClaimForResponse;
                    toJSON(message: _675.MsgClaimForResponse): unknown;
                    fromPartial(object: {
                        address?: string;
                        claimedAmount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }): _675.MsgClaimForResponse;
                };
                QueryModuleAccountBalanceRequest: {
                    encode(_: _674.QueryModuleAccountBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _674.QueryModuleAccountBalanceRequest;
                    fromJSON(_: any): _674.QueryModuleAccountBalanceRequest;
                    toJSON(_: _674.QueryModuleAccountBalanceRequest): unknown;
                    fromPartial(_: {}): _674.QueryModuleAccountBalanceRequest;
                };
                QueryModuleAccountBalanceResponse: {
                    encode(message: _674.QueryModuleAccountBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _674.QueryModuleAccountBalanceResponse;
                    fromJSON(object: any): _674.QueryModuleAccountBalanceResponse;
                    toJSON(message: _674.QueryModuleAccountBalanceResponse): unknown;
                    fromPartial(object: {
                        moduleAccountBalance?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }): _674.QueryModuleAccountBalanceResponse;
                };
                QueryParamsRequest: {
                    encode(_: _674.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _674.QueryParamsRequest;
                    fromJSON(_: any): _674.QueryParamsRequest;
                    toJSON(_: _674.QueryParamsRequest): unknown;
                    fromPartial(_: {}): _674.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _674.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _674.QueryParamsResponse;
                    fromJSON(object: any): _674.QueryParamsResponse;
                    toJSON(message: _674.QueryParamsResponse): unknown;
                    fromPartial(object: {
                        params?: {
                            airdropEnabled?: boolean;
                            airdropStartTime?: Date;
                            durationUntilDecay?: string;
                            durationOfDecay?: string;
                            claimDenom?: string;
                            allowedClaimers?: {
                                contractAddress?: string;
                                action?: _671.Action;
                            }[];
                        };
                    }): _674.QueryParamsResponse;
                };
                QueryClaimRecordRequest: {
                    encode(message: _674.QueryClaimRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _674.QueryClaimRecordRequest;
                    fromJSON(object: any): _674.QueryClaimRecordRequest;
                    toJSON(message: _674.QueryClaimRecordRequest): unknown;
                    fromPartial(object: {
                        address?: string;
                    }): _674.QueryClaimRecordRequest;
                };
                QueryClaimRecordResponse: {
                    encode(message: _674.QueryClaimRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _674.QueryClaimRecordResponse;
                    fromJSON(object: any): _674.QueryClaimRecordResponse;
                    toJSON(message: _674.QueryClaimRecordResponse): unknown;
                    fromPartial(object: {
                        claimRecord?: {
                            address?: string;
                            initialClaimableAmount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            actionCompleted?: boolean[];
                        };
                    }): _674.QueryClaimRecordResponse;
                };
                QueryClaimableForActionRequest: {
                    encode(message: _674.QueryClaimableForActionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _674.QueryClaimableForActionRequest;
                    fromJSON(object: any): _674.QueryClaimableForActionRequest;
                    toJSON(message: _674.QueryClaimableForActionRequest): unknown;
                    fromPartial(object: {
                        address?: string;
                        action?: _671.Action;
                    }): _674.QueryClaimableForActionRequest;
                };
                QueryClaimableForActionResponse: {
                    encode(message: _674.QueryClaimableForActionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _674.QueryClaimableForActionResponse;
                    fromJSON(object: any): _674.QueryClaimableForActionResponse;
                    toJSON(message: _674.QueryClaimableForActionResponse): unknown;
                    fromPartial(object: {
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }): _674.QueryClaimableForActionResponse;
                };
                QueryTotalClaimableRequest: {
                    encode(message: _674.QueryTotalClaimableRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _674.QueryTotalClaimableRequest;
                    fromJSON(object: any): _674.QueryTotalClaimableRequest;
                    toJSON(message: _674.QueryTotalClaimableRequest): unknown;
                    fromPartial(object: {
                        address?: string;
                    }): _674.QueryTotalClaimableRequest;
                };
                QueryTotalClaimableResponse: {
                    encode(message: _674.QueryTotalClaimableResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _674.QueryTotalClaimableResponse;
                    fromJSON(object: any): _674.QueryTotalClaimableResponse;
                    toJSON(message: _674.QueryTotalClaimableResponse): unknown;
                    fromPartial(object: {
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }): _674.QueryTotalClaimableResponse;
                };
                ClaimAuthorization: {
                    encode(message: _673.ClaimAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _673.ClaimAuthorization;
                    fromJSON(object: any): _673.ClaimAuthorization;
                    toJSON(message: _673.ClaimAuthorization): unknown;
                    fromPartial(object: {
                        contractAddress?: string;
                        action?: _671.Action;
                    }): _673.ClaimAuthorization;
                };
                Params: {
                    encode(message: _673.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _673.Params;
                    fromJSON(object: any): _673.Params;
                    toJSON(message: _673.Params): unknown;
                    fromPartial(object: {
                        airdropEnabled?: boolean;
                        airdropStartTime?: Date;
                        durationUntilDecay?: string;
                        durationOfDecay?: string;
                        claimDenom?: string;
                        allowedClaimers?: {
                            contractAddress?: string;
                            action?: _671.Action;
                        }[];
                    }): _673.Params;
                };
                GenesisState: {
                    encode(message: _672.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _672.GenesisState;
                    fromJSON(object: any): _672.GenesisState;
                    toJSON(message: _672.GenesisState): unknown;
                    fromPartial(object: {
                        moduleAccountBalance?: {
                            denom?: string;
                            amount?: string;
                        };
                        params?: {
                            airdropEnabled?: boolean;
                            airdropStartTime?: Date;
                            durationUntilDecay?: string;
                            durationOfDecay?: string;
                            claimDenom?: string;
                            allowedClaimers?: {
                                contractAddress?: string;
                                action?: _671.Action;
                            }[];
                        };
                        claimRecords?: {
                            address?: string;
                            initialClaimableAmount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            actionCompleted?: boolean[];
                        }[];
                    }): _672.GenesisState;
                };
                actionFromJSON(object: any): _671.Action;
                actionToJSON(object: _671.Action): string;
                Action: typeof _671.Action;
                ClaimRecord: {
                    encode(message: _671.ClaimRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _671.ClaimRecord;
                    fromJSON(object: any): _671.ClaimRecord;
                    toJSON(message: _671.ClaimRecord): unknown;
                    fromPartial(object: {
                        address?: string;
                        initialClaimableAmount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        actionCompleted?: boolean[];
                    }): _671.ClaimRecord;
                };
            };
        }
    }
}
