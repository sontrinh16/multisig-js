import * as _537 from "./claim/v1beta1/claim_record";
import * as _538 from "./claim/v1beta1/genesis";
import * as _539 from "./claim/v1beta1/params";
import * as _540 from "./claim/v1beta1/query";
import * as _541 from "./claim/v1beta1/tx";
export declare namespace passage3d {
    namespace claim {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    claim(value: _541.MsgClaim): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    claim(value: _541.MsgClaim): {
                        typeUrl: string;
                        value: _541.MsgClaim;
                    };
                };
                toJSON: {
                    claim(value: _541.MsgClaim): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    claim(value: any): {
                        typeUrl: string;
                        value: _541.MsgClaim;
                    };
                };
                fromPartial: {
                    claim(value: _541.MsgClaim): {
                        typeUrl: string;
                        value: _541.MsgClaim;
                    };
                };
            };
            AminoConverter: {
                "/passage3d.claim.v1beta1.MsgClaim": {
                    aminoType: string;
                    toAmino: ({ sender, claimAction }: _541.MsgClaim) => {
                        sender: string;
                        claim_action: string;
                    };
                    fromAmino: ({ sender, claim_action }: {
                        sender: string;
                        claim_action: string;
                    }) => _541.MsgClaim;
                };
            };
            MsgClaim: {
                encode(message: _541.MsgClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _541.MsgClaim;
                fromJSON(object: any): _541.MsgClaim;
                toJSON(message: _541.MsgClaim): unknown;
                fromPartial(object: {
                    sender?: string;
                    claimAction?: string;
                }): _541.MsgClaim;
            };
            MsgClaimResponse: {
                encode(message: _541.MsgClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _541.MsgClaimResponse;
                fromJSON(object: any): _541.MsgClaimResponse;
                toJSON(message: _541.MsgClaimResponse): unknown;
                fromPartial(object: {
                    claimedAmount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _541.MsgClaimResponse;
            };
            QueryModuleAccountBalanceRequest: {
                encode(_: _540.QueryModuleAccountBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _540.QueryModuleAccountBalanceRequest;
                fromJSON(_: any): _540.QueryModuleAccountBalanceRequest;
                toJSON(_: _540.QueryModuleAccountBalanceRequest): unknown;
                fromPartial(_: {}): _540.QueryModuleAccountBalanceRequest;
            };
            QueryModuleAccountBalanceResponse: {
                encode(message: _540.QueryModuleAccountBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _540.QueryModuleAccountBalanceResponse;
                fromJSON(object: any): _540.QueryModuleAccountBalanceResponse;
                toJSON(message: _540.QueryModuleAccountBalanceResponse): unknown;
                fromPartial(object: {
                    moduleAccountBalance?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _540.QueryModuleAccountBalanceResponse;
            };
            QueryParamsRequest: {
                encode(_: _540.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _540.QueryParamsRequest;
                fromJSON(_: any): _540.QueryParamsRequest;
                toJSON(_: _540.QueryParamsRequest): unknown;
                fromPartial(_: {}): _540.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _540.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _540.QueryParamsResponse;
                fromJSON(object: any): _540.QueryParamsResponse;
                toJSON(message: _540.QueryParamsResponse): unknown;
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
                    };
                }): _540.QueryParamsResponse;
            };
            QueryClaimRecordRequest: {
                encode(message: _540.QueryClaimRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _540.QueryClaimRecordRequest;
                fromJSON(object: any): _540.QueryClaimRecordRequest;
                toJSON(message: _540.QueryClaimRecordRequest): unknown;
                fromPartial(object: {
                    address?: string;
                }): _540.QueryClaimRecordRequest;
            };
            QueryClaimRecordResponse: {
                encode(message: _540.QueryClaimRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _540.QueryClaimRecordResponse;
                fromJSON(object: any): _540.QueryClaimRecordResponse;
                toJSON(message: _540.QueryClaimRecordResponse): unknown;
                fromPartial(object: {
                    claimRecord?: {
                        address?: string;
                        claimableAmount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        actionCompleted?: boolean[];
                    };
                }): _540.QueryClaimRecordResponse;
            };
            QueryClaimableForActionRequest: {
                encode(message: _540.QueryClaimableForActionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _540.QueryClaimableForActionRequest;
                fromJSON(object: any): _540.QueryClaimableForActionRequest;
                toJSON(message: _540.QueryClaimableForActionRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    action?: string;
                }): _540.QueryClaimableForActionRequest;
            };
            QueryClaimableForActionResponse: {
                encode(message: _540.QueryClaimableForActionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _540.QueryClaimableForActionResponse;
                fromJSON(object: any): _540.QueryClaimableForActionResponse;
                toJSON(message: _540.QueryClaimableForActionResponse): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _540.QueryClaimableForActionResponse;
            };
            QueryTotalClaimableRequest: {
                encode(message: _540.QueryTotalClaimableRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _540.QueryTotalClaimableRequest;
                fromJSON(object: any): _540.QueryTotalClaimableRequest;
                toJSON(message: _540.QueryTotalClaimableRequest): unknown;
                fromPartial(object: {
                    address?: string;
                }): _540.QueryTotalClaimableRequest;
            };
            QueryTotalClaimableResponse: {
                encode(message: _540.QueryTotalClaimableResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _540.QueryTotalClaimableResponse;
                fromJSON(object: any): _540.QueryTotalClaimableResponse;
                toJSON(message: _540.QueryTotalClaimableResponse): unknown;
                fromPartial(object: {
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _540.QueryTotalClaimableResponse;
            };
            Params: {
                encode(message: _539.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _539.Params;
                fromJSON(object: any): _539.Params;
                toJSON(message: _539.Params): unknown;
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
                }): _539.Params;
            };
            GenesisState: {
                encode(message: _538.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _538.GenesisState;
                fromJSON(object: any): _538.GenesisState;
                toJSON(message: _538.GenesisState): unknown;
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
                    };
                    claimRecords?: {
                        address?: string;
                        claimableAmount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        actionCompleted?: boolean[];
                    }[];
                }): _538.GenesisState;
            };
            ClaimRecord: {
                encode(message: _537.ClaimRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _537.ClaimRecord;
                fromJSON(object: any): _537.ClaimRecord;
                toJSON(message: _537.ClaimRecord): unknown;
                fromPartial(object: {
                    address?: string;
                    claimableAmount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    actionCompleted?: boolean[];
                }): _537.ClaimRecord;
            };
        };
    }
}
