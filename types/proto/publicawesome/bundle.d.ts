import * as _686 from "../stargaze/alloc/v1beta1/genesis";
import * as _687 from "../stargaze/alloc/v1beta1/params";
import * as _688 from "../stargaze/alloc/v1beta1/query";
import * as _689 from "../stargaze/alloc/v1beta1/tx";
import * as _690 from "../stargaze/claim/v1beta1/claim_record";
import * as _691 from "../stargaze/claim/v1beta1/genesis";
import * as _692 from "../stargaze/claim/v1beta1/params";
import * as _693 from "../stargaze/claim/v1beta1/query";
import * as _694 from "../stargaze/claim/v1beta1/tx";
export declare namespace publicawesome {
    namespace stargaze {
        namespace alloc {
            const v1beta1: {
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createVestingAccount(value: _689.MsgCreateVestingAccount): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createVestingAccount(value: _689.MsgCreateVestingAccount): {
                            typeUrl: string;
                            value: _689.MsgCreateVestingAccount;
                        };
                    };
                    toJSON: {
                        createVestingAccount(value: _689.MsgCreateVestingAccount): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        createVestingAccount(value: any): {
                            typeUrl: string;
                            value: _689.MsgCreateVestingAccount;
                        };
                    };
                    fromPartial: {
                        createVestingAccount(value: _689.MsgCreateVestingAccount): {
                            typeUrl: string;
                            value: _689.MsgCreateVestingAccount;
                        };
                    };
                };
                AminoConverter: {
                    "/publicawesome.stargaze.alloc.v1beta1.MsgCreateVestingAccount": {
                        aminoType: string;
                        toAmino: ({ fromAddress, toAddress, amount, startTime, endTime, delayed }: _689.MsgCreateVestingAccount) => {
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
                        }) => _689.MsgCreateVestingAccount;
                    };
                };
                MsgCreateVestingAccount: {
                    encode(message: _689.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _689.MsgCreateVestingAccount;
                    fromJSON(object: any): _689.MsgCreateVestingAccount;
                    toJSON(message: _689.MsgCreateVestingAccount): unknown;
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
                    }): _689.MsgCreateVestingAccount;
                };
                MsgCreateVestingAccountResponse: {
                    encode(_: _689.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _689.MsgCreateVestingAccountResponse;
                    fromJSON(_: any): _689.MsgCreateVestingAccountResponse;
                    toJSON(_: _689.MsgCreateVestingAccountResponse): unknown;
                    fromPartial(_: {}): _689.MsgCreateVestingAccountResponse;
                };
                QueryParamsRequest: {
                    encode(_: _688.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _688.QueryParamsRequest;
                    fromJSON(_: any): _688.QueryParamsRequest;
                    toJSON(_: _688.QueryParamsRequest): unknown;
                    fromPartial(_: {}): _688.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _688.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _688.QueryParamsResponse;
                    fromJSON(object: any): _688.QueryParamsResponse;
                    toJSON(message: _688.QueryParamsResponse): unknown;
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
                    }): _688.QueryParamsResponse;
                };
                WeightedAddress: {
                    encode(message: _687.WeightedAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _687.WeightedAddress;
                    fromJSON(object: any): _687.WeightedAddress;
                    toJSON(message: _687.WeightedAddress): unknown;
                    fromPartial(object: {
                        address?: string;
                        weight?: string;
                    }): _687.WeightedAddress;
                };
                DistributionProportions: {
                    encode(message: _687.DistributionProportions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _687.DistributionProportions;
                    fromJSON(object: any): _687.DistributionProportions;
                    toJSON(message: _687.DistributionProportions): unknown;
                    fromPartial(object: {
                        nftIncentives?: string;
                        developerRewards?: string;
                    }): _687.DistributionProportions;
                };
                Params: {
                    encode(message: _687.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _687.Params;
                    fromJSON(object: any): _687.Params;
                    toJSON(message: _687.Params): unknown;
                    fromPartial(object: {
                        distributionProportions?: {
                            nftIncentives?: string;
                            developerRewards?: string;
                        };
                        weightedDeveloperRewardsReceivers?: {
                            address?: string;
                            weight?: string;
                        }[];
                    }): _687.Params;
                };
                GenesisState: {
                    encode(message: _686.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _686.GenesisState;
                    fromJSON(object: any): _686.GenesisState;
                    toJSON(message: _686.GenesisState): unknown;
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
                    }): _686.GenesisState;
                };
            };
        }
        namespace claim {
            const v1beta1: {
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        initialClaim(value: _694.MsgInitialClaim): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        claimFor(value: _694.MsgClaimFor): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        initialClaim(value: _694.MsgInitialClaim): {
                            typeUrl: string;
                            value: _694.MsgInitialClaim;
                        };
                        claimFor(value: _694.MsgClaimFor): {
                            typeUrl: string;
                            value: _694.MsgClaimFor;
                        };
                    };
                    toJSON: {
                        initialClaim(value: _694.MsgInitialClaim): {
                            typeUrl: string;
                            value: unknown;
                        };
                        claimFor(value: _694.MsgClaimFor): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        initialClaim(value: any): {
                            typeUrl: string;
                            value: _694.MsgInitialClaim;
                        };
                        claimFor(value: any): {
                            typeUrl: string;
                            value: _694.MsgClaimFor;
                        };
                    };
                    fromPartial: {
                        initialClaim(value: _694.MsgInitialClaim): {
                            typeUrl: string;
                            value: _694.MsgInitialClaim;
                        };
                        claimFor(value: _694.MsgClaimFor): {
                            typeUrl: string;
                            value: _694.MsgClaimFor;
                        };
                    };
                };
                AminoConverter: {
                    "/publicawesome.stargaze.claim.v1beta1.MsgInitialClaim": {
                        aminoType: string;
                        toAmino: ({ sender }: _694.MsgInitialClaim) => {
                            sender: string;
                        };
                        fromAmino: ({ sender }: {
                            sender: string;
                        }) => _694.MsgInitialClaim;
                    };
                    "/publicawesome.stargaze.claim.v1beta1.MsgClaimFor": {
                        aminoType: string;
                        toAmino: ({ sender, address, action }: _694.MsgClaimFor) => {
                            sender: string;
                            address: string;
                            action: number;
                        };
                        fromAmino: ({ sender, address, action }: {
                            sender: string;
                            address: string;
                            action: number;
                        }) => _694.MsgClaimFor;
                    };
                };
                MsgInitialClaim: {
                    encode(message: _694.MsgInitialClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _694.MsgInitialClaim;
                    fromJSON(object: any): _694.MsgInitialClaim;
                    toJSON(message: _694.MsgInitialClaim): unknown;
                    fromPartial(object: {
                        sender?: string;
                    }): _694.MsgInitialClaim;
                };
                MsgInitialClaimResponse: {
                    encode(message: _694.MsgInitialClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _694.MsgInitialClaimResponse;
                    fromJSON(object: any): _694.MsgInitialClaimResponse;
                    toJSON(message: _694.MsgInitialClaimResponse): unknown;
                    fromPartial(object: {
                        claimedAmount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }): _694.MsgInitialClaimResponse;
                };
                MsgClaimFor: {
                    encode(message: _694.MsgClaimFor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _694.MsgClaimFor;
                    fromJSON(object: any): _694.MsgClaimFor;
                    toJSON(message: _694.MsgClaimFor): unknown;
                    fromPartial(object: {
                        sender?: string;
                        address?: string;
                        action?: _690.Action;
                    }): _694.MsgClaimFor;
                };
                MsgClaimForResponse: {
                    encode(message: _694.MsgClaimForResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _694.MsgClaimForResponse;
                    fromJSON(object: any): _694.MsgClaimForResponse;
                    toJSON(message: _694.MsgClaimForResponse): unknown;
                    fromPartial(object: {
                        address?: string;
                        claimedAmount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }): _694.MsgClaimForResponse;
                };
                QueryModuleAccountBalanceRequest: {
                    encode(_: _693.QueryModuleAccountBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _693.QueryModuleAccountBalanceRequest;
                    fromJSON(_: any): _693.QueryModuleAccountBalanceRequest;
                    toJSON(_: _693.QueryModuleAccountBalanceRequest): unknown;
                    fromPartial(_: {}): _693.QueryModuleAccountBalanceRequest;
                };
                QueryModuleAccountBalanceResponse: {
                    encode(message: _693.QueryModuleAccountBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _693.QueryModuleAccountBalanceResponse;
                    fromJSON(object: any): _693.QueryModuleAccountBalanceResponse;
                    toJSON(message: _693.QueryModuleAccountBalanceResponse): unknown;
                    fromPartial(object: {
                        moduleAccountBalance?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }): _693.QueryModuleAccountBalanceResponse;
                };
                QueryParamsRequest: {
                    encode(_: _693.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _693.QueryParamsRequest;
                    fromJSON(_: any): _693.QueryParamsRequest;
                    toJSON(_: _693.QueryParamsRequest): unknown;
                    fromPartial(_: {}): _693.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _693.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _693.QueryParamsResponse;
                    fromJSON(object: any): _693.QueryParamsResponse;
                    toJSON(message: _693.QueryParamsResponse): unknown;
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
                                action?: _690.Action;
                            }[];
                        };
                    }): _693.QueryParamsResponse;
                };
                QueryClaimRecordRequest: {
                    encode(message: _693.QueryClaimRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _693.QueryClaimRecordRequest;
                    fromJSON(object: any): _693.QueryClaimRecordRequest;
                    toJSON(message: _693.QueryClaimRecordRequest): unknown;
                    fromPartial(object: {
                        address?: string;
                    }): _693.QueryClaimRecordRequest;
                };
                QueryClaimRecordResponse: {
                    encode(message: _693.QueryClaimRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _693.QueryClaimRecordResponse;
                    fromJSON(object: any): _693.QueryClaimRecordResponse;
                    toJSON(message: _693.QueryClaimRecordResponse): unknown;
                    fromPartial(object: {
                        claimRecord?: {
                            address?: string;
                            initialClaimableAmount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            actionCompleted?: boolean[];
                        };
                    }): _693.QueryClaimRecordResponse;
                };
                QueryClaimableForActionRequest: {
                    encode(message: _693.QueryClaimableForActionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _693.QueryClaimableForActionRequest;
                    fromJSON(object: any): _693.QueryClaimableForActionRequest;
                    toJSON(message: _693.QueryClaimableForActionRequest): unknown;
                    fromPartial(object: {
                        address?: string;
                        action?: _690.Action;
                    }): _693.QueryClaimableForActionRequest;
                };
                QueryClaimableForActionResponse: {
                    encode(message: _693.QueryClaimableForActionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _693.QueryClaimableForActionResponse;
                    fromJSON(object: any): _693.QueryClaimableForActionResponse;
                    toJSON(message: _693.QueryClaimableForActionResponse): unknown;
                    fromPartial(object: {
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }): _693.QueryClaimableForActionResponse;
                };
                QueryTotalClaimableRequest: {
                    encode(message: _693.QueryTotalClaimableRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _693.QueryTotalClaimableRequest;
                    fromJSON(object: any): _693.QueryTotalClaimableRequest;
                    toJSON(message: _693.QueryTotalClaimableRequest): unknown;
                    fromPartial(object: {
                        address?: string;
                    }): _693.QueryTotalClaimableRequest;
                };
                QueryTotalClaimableResponse: {
                    encode(message: _693.QueryTotalClaimableResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _693.QueryTotalClaimableResponse;
                    fromJSON(object: any): _693.QueryTotalClaimableResponse;
                    toJSON(message: _693.QueryTotalClaimableResponse): unknown;
                    fromPartial(object: {
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }): _693.QueryTotalClaimableResponse;
                };
                ClaimAuthorization: {
                    encode(message: _692.ClaimAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _692.ClaimAuthorization;
                    fromJSON(object: any): _692.ClaimAuthorization;
                    toJSON(message: _692.ClaimAuthorization): unknown;
                    fromPartial(object: {
                        contractAddress?: string;
                        action?: _690.Action;
                    }): _692.ClaimAuthorization;
                };
                Params: {
                    encode(message: _692.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _692.Params;
                    fromJSON(object: any): _692.Params;
                    toJSON(message: _692.Params): unknown;
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
                            action?: _690.Action;
                        }[];
                    }): _692.Params;
                };
                GenesisState: {
                    encode(message: _691.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _691.GenesisState;
                    fromJSON(object: any): _691.GenesisState;
                    toJSON(message: _691.GenesisState): unknown;
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
                                action?: _690.Action;
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
                    }): _691.GenesisState;
                };
                actionFromJSON(object: any): _690.Action;
                actionToJSON(object: _690.Action): string;
                Action: typeof _690.Action;
                ClaimRecord: {
                    encode(message: _690.ClaimRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _690.ClaimRecord;
                    fromJSON(object: any): _690.ClaimRecord;
                    toJSON(message: _690.ClaimRecord): unknown;
                    fromPartial(object: {
                        address?: string;
                        initialClaimableAmount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        actionCompleted?: boolean[];
                    }): _690.ClaimRecord;
                };
            };
        }
    }
}
