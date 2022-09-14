import * as _605 from "./claim/v1beta1/claim_record";
import * as _606 from "./claim/v1beta1/genesis";
import * as _607 from "./claim/v1beta1/params";
import * as _608 from "./claim/v1beta1/query";
import * as _609 from "./claim/v1beta1/tx";
export declare namespace passage3d {
    namespace claim {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    claim(value: _609.MsgClaim): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    claim(value: _609.MsgClaim): {
                        typeUrl: string;
                        value: _609.MsgClaim;
                    };
                };
                toJSON: {
                    claim(value: _609.MsgClaim): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    claim(value: any): {
                        typeUrl: string;
                        value: _609.MsgClaim;
                    };
                };
                fromPartial: {
                    claim(value: _609.MsgClaim): {
                        typeUrl: string;
                        value: _609.MsgClaim;
                    };
                };
            };
            AminoConverter: {
                "/passage3d.claim.v1beta1.MsgClaim": {
                    aminoType: string;
                    toAmino: ({ sender, claimAction }: _609.MsgClaim) => {
                        sender: string;
                        claim_action: string;
                    };
                    fromAmino: ({ sender, claim_action }: {
                        sender: string;
                        claim_action: string;
                    }) => _609.MsgClaim;
                };
            };
            MsgClaim: {
                encode(message: _609.MsgClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _609.MsgClaim;
                fromJSON(object: any): _609.MsgClaim;
                toJSON(message: _609.MsgClaim): unknown;
                fromPartial(object: {
                    sender?: string;
                    claimAction?: string;
                }): _609.MsgClaim;
            };
            MsgClaimResponse: {
                encode(message: _609.MsgClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _609.MsgClaimResponse;
                fromJSON(object: any): _609.MsgClaimResponse;
                toJSON(message: _609.MsgClaimResponse): unknown;
                fromPartial(object: {
                    claimedAmount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _609.MsgClaimResponse;
            };
            QueryModuleAccountBalanceRequest: {
                encode(_: _608.QueryModuleAccountBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _608.QueryModuleAccountBalanceRequest;
                fromJSON(_: any): _608.QueryModuleAccountBalanceRequest;
                toJSON(_: _608.QueryModuleAccountBalanceRequest): unknown;
                fromPartial(_: {}): _608.QueryModuleAccountBalanceRequest;
            };
            QueryModuleAccountBalanceResponse: {
                encode(message: _608.QueryModuleAccountBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _608.QueryModuleAccountBalanceResponse;
                fromJSON(object: any): _608.QueryModuleAccountBalanceResponse;
                toJSON(message: _608.QueryModuleAccountBalanceResponse): unknown;
                fromPartial(object: {
                    moduleAccountBalance?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _608.QueryModuleAccountBalanceResponse;
            };
            QueryParamsRequest: {
                encode(_: _608.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _608.QueryParamsRequest;
                fromJSON(_: any): _608.QueryParamsRequest;
                toJSON(_: _608.QueryParamsRequest): unknown;
                fromPartial(_: {}): _608.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _608.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _608.QueryParamsResponse;
                fromJSON(object: any): _608.QueryParamsResponse;
                toJSON(message: _608.QueryParamsResponse): unknown;
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
                }): _608.QueryParamsResponse;
            };
            QueryClaimRecordRequest: {
                encode(message: _608.QueryClaimRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _608.QueryClaimRecordRequest;
                fromJSON(object: any): _608.QueryClaimRecordRequest;
                toJSON(message: _608.QueryClaimRecordRequest): unknown;
                fromPartial(object: {
                    address?: string;
                }): _608.QueryClaimRecordRequest;
            };
            QueryClaimRecordResponse: {
                encode(message: _608.QueryClaimRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _608.QueryClaimRecordResponse;
                fromJSON(object: any): _608.QueryClaimRecordResponse;
                toJSON(message: _608.QueryClaimRecordResponse): unknown;
                fromPartial(object: {
                    claimRecord?: {
                        address?: string;
                        claimableAmount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        actionCompleted?: boolean[];
                    };
                }): _608.QueryClaimRecordResponse;
            };
            QueryClaimableForActionRequest: {
                encode(message: _608.QueryClaimableForActionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _608.QueryClaimableForActionRequest;
                fromJSON(object: any): _608.QueryClaimableForActionRequest;
                toJSON(message: _608.QueryClaimableForActionRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    action?: string;
                }): _608.QueryClaimableForActionRequest;
            };
            QueryClaimableForActionResponse: {
                encode(message: _608.QueryClaimableForActionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _608.QueryClaimableForActionResponse;
                fromJSON(object: any): _608.QueryClaimableForActionResponse;
                toJSON(message: _608.QueryClaimableForActionResponse): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _608.QueryClaimableForActionResponse;
            };
            QueryTotalClaimableRequest: {
                encode(message: _608.QueryTotalClaimableRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _608.QueryTotalClaimableRequest;
                fromJSON(object: any): _608.QueryTotalClaimableRequest;
                toJSON(message: _608.QueryTotalClaimableRequest): unknown;
                fromPartial(object: {
                    address?: string;
                }): _608.QueryTotalClaimableRequest;
            };
            QueryTotalClaimableResponse: {
                encode(message: _608.QueryTotalClaimableResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _608.QueryTotalClaimableResponse;
                fromJSON(object: any): _608.QueryTotalClaimableResponse;
                toJSON(message: _608.QueryTotalClaimableResponse): unknown;
                fromPartial(object: {
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _608.QueryTotalClaimableResponse;
            };
            Params: {
                encode(message: _607.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _607.Params;
                fromJSON(object: any): _607.Params;
                toJSON(message: _607.Params): unknown;
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
                }): _607.Params;
            };
            GenesisState: {
                encode(message: _606.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _606.GenesisState;
                fromJSON(object: any): _606.GenesisState;
                toJSON(message: _606.GenesisState): unknown;
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
                }): _606.GenesisState;
            };
            ClaimRecord: {
                encode(message: _605.ClaimRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _605.ClaimRecord;
                fromJSON(object: any): _605.ClaimRecord;
                toJSON(message: _605.ClaimRecord): unknown;
                fromPartial(object: {
                    address?: string;
                    claimableAmount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    actionCompleted?: boolean[];
                }): _605.ClaimRecord;
            };
        };
    }
}
