import * as _754 from "../stargaze/alloc/v1beta1/genesis";
import * as _755 from "../stargaze/alloc/v1beta1/params";
import * as _756 from "../stargaze/alloc/v1beta1/query";
import * as _757 from "../stargaze/alloc/v1beta1/tx";
import * as _758 from "../stargaze/claim/v1beta1/claim_record";
import * as _759 from "../stargaze/claim/v1beta1/genesis";
import * as _760 from "../stargaze/claim/v1beta1/params";
import * as _761 from "../stargaze/claim/v1beta1/query";
import * as _762 from "../stargaze/claim/v1beta1/tx";
export declare namespace publicawesome {
    namespace stargaze {
        namespace alloc {
            const v1beta1: {
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createVestingAccount(value: _757.MsgCreateVestingAccount): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createVestingAccount(value: _757.MsgCreateVestingAccount): {
                            typeUrl: string;
                            value: _757.MsgCreateVestingAccount;
                        };
                    };
                    toJSON: {
                        createVestingAccount(value: _757.MsgCreateVestingAccount): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        createVestingAccount(value: any): {
                            typeUrl: string;
                            value: _757.MsgCreateVestingAccount;
                        };
                    };
                    fromPartial: {
                        createVestingAccount(value: _757.MsgCreateVestingAccount): {
                            typeUrl: string;
                            value: _757.MsgCreateVestingAccount;
                        };
                    };
                };
                AminoConverter: {
                    "/publicawesome.stargaze.alloc.v1beta1.MsgCreateVestingAccount": {
                        aminoType: string;
                        toAmino: ({ fromAddress, toAddress, amount, startTime, endTime, delayed }: _757.MsgCreateVestingAccount) => {
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
                        }) => _757.MsgCreateVestingAccount;
                    };
                };
                MsgCreateVestingAccount: {
                    encode(message: _757.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _757.MsgCreateVestingAccount;
                    fromJSON(object: any): _757.MsgCreateVestingAccount;
                    toJSON(message: _757.MsgCreateVestingAccount): unknown;
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
                    }): _757.MsgCreateVestingAccount;
                };
                MsgCreateVestingAccountResponse: {
                    encode(_: _757.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _757.MsgCreateVestingAccountResponse;
                    fromJSON(_: any): _757.MsgCreateVestingAccountResponse;
                    toJSON(_: _757.MsgCreateVestingAccountResponse): unknown;
                    fromPartial(_: {}): _757.MsgCreateVestingAccountResponse;
                };
                QueryParamsRequest: {
                    encode(_: _756.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _756.QueryParamsRequest;
                    fromJSON(_: any): _756.QueryParamsRequest;
                    toJSON(_: _756.QueryParamsRequest): unknown;
                    fromPartial(_: {}): _756.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _756.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _756.QueryParamsResponse;
                    fromJSON(object: any): _756.QueryParamsResponse;
                    toJSON(message: _756.QueryParamsResponse): unknown;
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
                    }): _756.QueryParamsResponse;
                };
                WeightedAddress: {
                    encode(message: _755.WeightedAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _755.WeightedAddress;
                    fromJSON(object: any): _755.WeightedAddress;
                    toJSON(message: _755.WeightedAddress): unknown;
                    fromPartial(object: {
                        address?: string;
                        weight?: string;
                    }): _755.WeightedAddress;
                };
                DistributionProportions: {
                    encode(message: _755.DistributionProportions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _755.DistributionProportions;
                    fromJSON(object: any): _755.DistributionProportions;
                    toJSON(message: _755.DistributionProportions): unknown;
                    fromPartial(object: {
                        nftIncentives?: string;
                        developerRewards?: string;
                    }): _755.DistributionProportions;
                };
                Params: {
                    encode(message: _755.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _755.Params;
                    fromJSON(object: any): _755.Params;
                    toJSON(message: _755.Params): unknown;
                    fromPartial(object: {
                        distributionProportions?: {
                            nftIncentives?: string;
                            developerRewards?: string;
                        };
                        weightedDeveloperRewardsReceivers?: {
                            address?: string;
                            weight?: string;
                        }[];
                    }): _755.Params;
                };
                GenesisState: {
                    encode(message: _754.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _754.GenesisState;
                    fromJSON(object: any): _754.GenesisState;
                    toJSON(message: _754.GenesisState): unknown;
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
                    }): _754.GenesisState;
                };
            };
        }
        namespace claim {
            const v1beta1: {
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        initialClaim(value: _762.MsgInitialClaim): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        claimFor(value: _762.MsgClaimFor): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        initialClaim(value: _762.MsgInitialClaim): {
                            typeUrl: string;
                            value: _762.MsgInitialClaim;
                        };
                        claimFor(value: _762.MsgClaimFor): {
                            typeUrl: string;
                            value: _762.MsgClaimFor;
                        };
                    };
                    toJSON: {
                        initialClaim(value: _762.MsgInitialClaim): {
                            typeUrl: string;
                            value: unknown;
                        };
                        claimFor(value: _762.MsgClaimFor): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        initialClaim(value: any): {
                            typeUrl: string;
                            value: _762.MsgInitialClaim;
                        };
                        claimFor(value: any): {
                            typeUrl: string;
                            value: _762.MsgClaimFor;
                        };
                    };
                    fromPartial: {
                        initialClaim(value: _762.MsgInitialClaim): {
                            typeUrl: string;
                            value: _762.MsgInitialClaim;
                        };
                        claimFor(value: _762.MsgClaimFor): {
                            typeUrl: string;
                            value: _762.MsgClaimFor;
                        };
                    };
                };
                AminoConverter: {
                    "/publicawesome.stargaze.claim.v1beta1.MsgInitialClaim": {
                        aminoType: string;
                        toAmino: ({ sender }: _762.MsgInitialClaim) => {
                            sender: string;
                        };
                        fromAmino: ({ sender }: {
                            sender: string;
                        }) => _762.MsgInitialClaim;
                    };
                    "/publicawesome.stargaze.claim.v1beta1.MsgClaimFor": {
                        aminoType: string;
                        toAmino: ({ sender, address, action }: _762.MsgClaimFor) => {
                            sender: string;
                            address: string;
                            action: number;
                        };
                        fromAmino: ({ sender, address, action }: {
                            sender: string;
                            address: string;
                            action: number;
                        }) => _762.MsgClaimFor;
                    };
                };
                MsgInitialClaim: {
                    encode(message: _762.MsgInitialClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _762.MsgInitialClaim;
                    fromJSON(object: any): _762.MsgInitialClaim;
                    toJSON(message: _762.MsgInitialClaim): unknown;
                    fromPartial(object: {
                        sender?: string;
                    }): _762.MsgInitialClaim;
                };
                MsgInitialClaimResponse: {
                    encode(message: _762.MsgInitialClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _762.MsgInitialClaimResponse;
                    fromJSON(object: any): _762.MsgInitialClaimResponse;
                    toJSON(message: _762.MsgInitialClaimResponse): unknown;
                    fromPartial(object: {
                        claimedAmount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }): _762.MsgInitialClaimResponse;
                };
                MsgClaimFor: {
                    encode(message: _762.MsgClaimFor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _762.MsgClaimFor;
                    fromJSON(object: any): _762.MsgClaimFor;
                    toJSON(message: _762.MsgClaimFor): unknown;
                    fromPartial(object: {
                        sender?: string;
                        address?: string;
                        action?: _758.Action;
                    }): _762.MsgClaimFor;
                };
                MsgClaimForResponse: {
                    encode(message: _762.MsgClaimForResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _762.MsgClaimForResponse;
                    fromJSON(object: any): _762.MsgClaimForResponse;
                    toJSON(message: _762.MsgClaimForResponse): unknown;
                    fromPartial(object: {
                        address?: string;
                        claimedAmount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }): _762.MsgClaimForResponse;
                };
                QueryModuleAccountBalanceRequest: {
                    encode(_: _761.QueryModuleAccountBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _761.QueryModuleAccountBalanceRequest;
                    fromJSON(_: any): _761.QueryModuleAccountBalanceRequest;
                    toJSON(_: _761.QueryModuleAccountBalanceRequest): unknown;
                    fromPartial(_: {}): _761.QueryModuleAccountBalanceRequest;
                };
                QueryModuleAccountBalanceResponse: {
                    encode(message: _761.QueryModuleAccountBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _761.QueryModuleAccountBalanceResponse;
                    fromJSON(object: any): _761.QueryModuleAccountBalanceResponse;
                    toJSON(message: _761.QueryModuleAccountBalanceResponse): unknown;
                    fromPartial(object: {
                        moduleAccountBalance?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }): _761.QueryModuleAccountBalanceResponse;
                };
                QueryParamsRequest: {
                    encode(_: _761.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _761.QueryParamsRequest;
                    fromJSON(_: any): _761.QueryParamsRequest;
                    toJSON(_: _761.QueryParamsRequest): unknown;
                    fromPartial(_: {}): _761.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _761.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _761.QueryParamsResponse;
                    fromJSON(object: any): _761.QueryParamsResponse;
                    toJSON(message: _761.QueryParamsResponse): unknown;
                    fromPartial(object: {
                        params?: {
                            airdropEnabled?: boolean;
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
                            claimDenom?: string;
                            allowedClaimers?: {
                                contractAddress?: string;
                                action?: _758.Action;
                            }[];
                        };
                    }): _761.QueryParamsResponse;
                };
                QueryClaimRecordRequest: {
                    encode(message: _761.QueryClaimRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _761.QueryClaimRecordRequest;
                    fromJSON(object: any): _761.QueryClaimRecordRequest;
                    toJSON(message: _761.QueryClaimRecordRequest): unknown;
                    fromPartial(object: {
                        address?: string;
                    }): _761.QueryClaimRecordRequest;
                };
                QueryClaimRecordResponse: {
                    encode(message: _761.QueryClaimRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _761.QueryClaimRecordResponse;
                    fromJSON(object: any): _761.QueryClaimRecordResponse;
                    toJSON(message: _761.QueryClaimRecordResponse): unknown;
                    fromPartial(object: {
                        claimRecord?: {
                            address?: string;
                            initialClaimableAmount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            actionCompleted?: boolean[];
                        };
                    }): _761.QueryClaimRecordResponse;
                };
                QueryClaimableForActionRequest: {
                    encode(message: _761.QueryClaimableForActionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _761.QueryClaimableForActionRequest;
                    fromJSON(object: any): _761.QueryClaimableForActionRequest;
                    toJSON(message: _761.QueryClaimableForActionRequest): unknown;
                    fromPartial(object: {
                        address?: string;
                        action?: _758.Action;
                    }): _761.QueryClaimableForActionRequest;
                };
                QueryClaimableForActionResponse: {
                    encode(message: _761.QueryClaimableForActionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _761.QueryClaimableForActionResponse;
                    fromJSON(object: any): _761.QueryClaimableForActionResponse;
                    toJSON(message: _761.QueryClaimableForActionResponse): unknown;
                    fromPartial(object: {
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }): _761.QueryClaimableForActionResponse;
                };
                QueryTotalClaimableRequest: {
                    encode(message: _761.QueryTotalClaimableRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _761.QueryTotalClaimableRequest;
                    fromJSON(object: any): _761.QueryTotalClaimableRequest;
                    toJSON(message: _761.QueryTotalClaimableRequest): unknown;
                    fromPartial(object: {
                        address?: string;
                    }): _761.QueryTotalClaimableRequest;
                };
                QueryTotalClaimableResponse: {
                    encode(message: _761.QueryTotalClaimableResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _761.QueryTotalClaimableResponse;
                    fromJSON(object: any): _761.QueryTotalClaimableResponse;
                    toJSON(message: _761.QueryTotalClaimableResponse): unknown;
                    fromPartial(object: {
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }): _761.QueryTotalClaimableResponse;
                };
                ClaimAuthorization: {
                    encode(message: _760.ClaimAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _760.ClaimAuthorization;
                    fromJSON(object: any): _760.ClaimAuthorization;
                    toJSON(message: _760.ClaimAuthorization): unknown;
                    fromPartial(object: {
                        contractAddress?: string;
                        action?: _758.Action;
                    }): _760.ClaimAuthorization;
                };
                Params: {
                    encode(message: _760.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _760.Params;
                    fromJSON(object: any): _760.Params;
                    toJSON(message: _760.Params): unknown;
                    fromPartial(object: {
                        airdropEnabled?: boolean;
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
                        claimDenom?: string;
                        allowedClaimers?: {
                            contractAddress?: string;
                            action?: _758.Action;
                        }[];
                    }): _760.Params;
                };
                GenesisState: {
                    encode(message: _759.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _759.GenesisState;
                    fromJSON(object: any): _759.GenesisState;
                    toJSON(message: _759.GenesisState): unknown;
                    fromPartial(object: {
                        moduleAccountBalance?: {
                            denom?: string;
                            amount?: string;
                        };
                        params?: {
                            airdropEnabled?: boolean;
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
                            claimDenom?: string;
                            allowedClaimers?: {
                                contractAddress?: string;
                                action?: _758.Action;
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
                    }): _759.GenesisState;
                };
                actionFromJSON(object: any): _758.Action;
                actionToJSON(object: _758.Action): string;
                Action: typeof _758.Action;
                ClaimRecord: {
                    encode(message: _758.ClaimRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _758.ClaimRecord;
                    fromJSON(object: any): _758.ClaimRecord;
                    toJSON(message: _758.ClaimRecord): unknown;
                    fromPartial(object: {
                        address?: string;
                        initialClaimableAmount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        actionCompleted?: boolean[];
                    }): _758.ClaimRecord;
                };
            };
        }
    }
}
