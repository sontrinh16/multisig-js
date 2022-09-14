import * as _458 from "./auction/v1beta1/auction";
import * as _459 from "./auction/v1beta1/genesis";
import * as _460 from "./auction/v1beta1/query";
import * as _461 from "./auction/v1beta1/tx";
import * as _462 from "./bep3/v1beta1/bep3";
import * as _463 from "./bep3/v1beta1/genesis";
import * as _464 from "./bep3/v1beta1/query";
import * as _465 from "./bep3/v1beta1/tx";
import * as _466 from "./cdp/v1beta1/cdp";
import * as _467 from "./cdp/v1beta1/genesis";
import * as _468 from "./cdp/v1beta1/query";
import * as _469 from "./cdp/v1beta1/tx";
import * as _470 from "./committee/v1beta1/committee";
import * as _471 from "./committee/v1beta1/genesis";
import * as _472 from "./committee/v1beta1/permissions";
import * as _473 from "./committee/v1beta1/proposal";
import * as _474 from "./committee/v1beta1/query";
import * as _475 from "./committee/v1beta1/tx";
import * as _476 from "./earn/v1beta1/genesis";
import * as _477 from "./earn/v1beta1/params";
import * as _478 from "./earn/v1beta1/query";
import * as _479 from "./earn/v1beta1/strategy";
import * as _480 from "./earn/v1beta1/tx";
import * as _481 from "./earn/v1beta1/vault";
import * as _482 from "./evmutil/v1beta1/genesis";
import * as _483 from "./hard/v1beta1/genesis";
import * as _484 from "./hard/v1beta1/hard";
import * as _485 from "./hard/v1beta1/query";
import * as _486 from "./hard/v1beta1/tx";
import * as _487 from "./incentive/v1beta1/claims";
import * as _488 from "./incentive/v1beta1/genesis";
import * as _489 from "./incentive/v1beta1/params";
import * as _490 from "./incentive/v1beta1/tx";
import * as _491 from "./issuance/v1beta1/genesis";
import * as _492 from "./issuance/v1beta1/query";
import * as _493 from "./issuance/v1beta1/tx";
import * as _494 from "./kavadist/v1beta1/genesis";
import * as _495 from "./kavadist/v1beta1/params";
import * as _496 from "./kavadist/v1beta1/proposal";
import * as _497 from "./kavadist/v1beta1/query";
import * as _498 from "./pricefeed/v1beta1/genesis";
import * as _499 from "./pricefeed/v1beta1/query";
import * as _500 from "./pricefeed/v1beta1/store";
import * as _501 from "./pricefeed/v1beta1/tx";
import * as _502 from "./savings/v1beta1/genesis";
import * as _503 from "./savings/v1beta1/query";
import * as _504 from "./savings/v1beta1/store";
import * as _505 from "./savings/v1beta1/tx";
import * as _506 from "./swap/v1beta1/genesis";
import * as _507 from "./swap/v1beta1/query";
import * as _508 from "./swap/v1beta1/swap";
import * as _509 from "./swap/v1beta1/tx";
export declare namespace kava {
    namespace auction {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    placeBid(value: _461.MsgPlaceBid): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    placeBid(value: _461.MsgPlaceBid): {
                        typeUrl: string;
                        value: _461.MsgPlaceBid;
                    };
                };
                toJSON: {
                    placeBid(value: _461.MsgPlaceBid): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    placeBid(value: any): {
                        typeUrl: string;
                        value: _461.MsgPlaceBid;
                    };
                };
                fromPartial: {
                    placeBid(value: _461.MsgPlaceBid): {
                        typeUrl: string;
                        value: _461.MsgPlaceBid;
                    };
                };
            };
            AminoConverter: {
                "/kava.auction.v1beta1.MsgPlaceBid": {
                    aminoType: string;
                    toAmino: ({ auctionId, bidder, amount }: _461.MsgPlaceBid) => {
                        auction_id: string;
                        bidder: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ auction_id, bidder, amount }: {
                        auction_id: string;
                        bidder: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _461.MsgPlaceBid;
                };
            };
            MsgPlaceBid: {
                encode(message: _461.MsgPlaceBid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _461.MsgPlaceBid;
                fromJSON(object: any): _461.MsgPlaceBid;
                toJSON(message: _461.MsgPlaceBid): unknown;
                fromPartial(object: {
                    auctionId?: any;
                    bidder?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _461.MsgPlaceBid;
            };
            MsgPlaceBidResponse: {
                encode(_: _461.MsgPlaceBidResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _461.MsgPlaceBidResponse;
                fromJSON(_: any): _461.MsgPlaceBidResponse;
                toJSON(_: _461.MsgPlaceBidResponse): unknown;
                fromPartial(_: {}): _461.MsgPlaceBidResponse;
            };
            QueryParamsRequest: {
                encode(_: _460.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _460.QueryParamsRequest;
                fromJSON(_: any): _460.QueryParamsRequest;
                toJSON(_: _460.QueryParamsRequest): unknown;
                fromPartial(_: {}): _460.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _460.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _460.QueryParamsResponse;
                fromJSON(object: any): _460.QueryParamsResponse;
                toJSON(message: _460.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        maxAuctionDuration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        forwardBidDuration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        reverseBidDuration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        incrementSurplus?: Uint8Array;
                        incrementDebt?: Uint8Array;
                        incrementCollateral?: Uint8Array;
                    };
                }): _460.QueryParamsResponse;
            };
            QueryAuctionRequest: {
                encode(message: _460.QueryAuctionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _460.QueryAuctionRequest;
                fromJSON(object: any): _460.QueryAuctionRequest;
                toJSON(message: _460.QueryAuctionRequest): unknown;
                fromPartial(object: {
                    auctionId?: any;
                }): _460.QueryAuctionRequest;
            };
            QueryAuctionResponse: {
                encode(message: _460.QueryAuctionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _460.QueryAuctionResponse;
                fromJSON(object: any): _460.QueryAuctionResponse;
                toJSON(message: _460.QueryAuctionResponse): unknown;
                fromPartial(object: {
                    auction?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _460.QueryAuctionResponse;
            };
            QueryAuctionsRequest: {
                encode(message: _460.QueryAuctionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _460.QueryAuctionsRequest;
                fromJSON(object: any): _460.QueryAuctionsRequest;
                toJSON(message: _460.QueryAuctionsRequest): unknown;
                fromPartial(object: {
                    type?: string;
                    owner?: string;
                    denom?: string;
                    phase?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _460.QueryAuctionsRequest;
            };
            QueryAuctionsResponse: {
                encode(message: _460.QueryAuctionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _460.QueryAuctionsResponse;
                fromJSON(object: any): _460.QueryAuctionsResponse;
                toJSON(message: _460.QueryAuctionsResponse): unknown;
                fromPartial(object: {
                    auctions?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _460.QueryAuctionsResponse;
            };
            QueryNextAuctionIDRequest: {
                encode(_: _460.QueryNextAuctionIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _460.QueryNextAuctionIDRequest;
                fromJSON(_: any): _460.QueryNextAuctionIDRequest;
                toJSON(_: _460.QueryNextAuctionIDRequest): unknown;
                fromPartial(_: {}): _460.QueryNextAuctionIDRequest;
            };
            QueryNextAuctionIDResponse: {
                encode(message: _460.QueryNextAuctionIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _460.QueryNextAuctionIDResponse;
                fromJSON(object: any): _460.QueryNextAuctionIDResponse;
                toJSON(message: _460.QueryNextAuctionIDResponse): unknown;
                fromPartial(object: {
                    id?: any;
                }): _460.QueryNextAuctionIDResponse;
            };
            GenesisState: {
                encode(message: _459.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _459.GenesisState;
                fromJSON(object: any): _459.GenesisState;
                toJSON(message: _459.GenesisState): unknown;
                fromPartial(object: {
                    nextAuctionId?: any;
                    params?: {
                        maxAuctionDuration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        forwardBidDuration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        reverseBidDuration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        incrementSurplus?: Uint8Array;
                        incrementDebt?: Uint8Array;
                        incrementCollateral?: Uint8Array;
                    };
                    auctions?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _459.GenesisState;
            };
            Params: {
                encode(message: _459.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _459.Params;
                fromJSON(object: any): _459.Params;
                toJSON(message: _459.Params): unknown;
                fromPartial(object: {
                    maxAuctionDuration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    forwardBidDuration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    reverseBidDuration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    incrementSurplus?: Uint8Array;
                    incrementDebt?: Uint8Array;
                    incrementCollateral?: Uint8Array;
                }): _459.Params;
            };
            BaseAuction: {
                encode(message: _458.BaseAuction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _458.BaseAuction;
                fromJSON(object: any): _458.BaseAuction;
                toJSON(message: _458.BaseAuction): unknown;
                fromPartial(object: {
                    id?: any;
                    initiator?: string;
                    lot?: {
                        denom?: string;
                        amount?: string;
                    };
                    bidder?: Uint8Array;
                    bid?: {
                        denom?: string;
                        amount?: string;
                    };
                    hasReceivedBids?: boolean;
                    endTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    maxEndTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _458.BaseAuction;
            };
            SurplusAuction: {
                encode(message: _458.SurplusAuction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _458.SurplusAuction;
                fromJSON(object: any): _458.SurplusAuction;
                toJSON(message: _458.SurplusAuction): unknown;
                fromPartial(object: {
                    baseAuction?: {
                        id?: any;
                        initiator?: string;
                        lot?: {
                            denom?: string;
                            amount?: string;
                        };
                        bidder?: Uint8Array;
                        bid?: {
                            denom?: string;
                            amount?: string;
                        };
                        hasReceivedBids?: boolean;
                        endTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        maxEndTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                }): _458.SurplusAuction;
            };
            DebtAuction: {
                encode(message: _458.DebtAuction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _458.DebtAuction;
                fromJSON(object: any): _458.DebtAuction;
                toJSON(message: _458.DebtAuction): unknown;
                fromPartial(object: {
                    baseAuction?: {
                        id?: any;
                        initiator?: string;
                        lot?: {
                            denom?: string;
                            amount?: string;
                        };
                        bidder?: Uint8Array;
                        bid?: {
                            denom?: string;
                            amount?: string;
                        };
                        hasReceivedBids?: boolean;
                        endTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        maxEndTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    correspondingDebt?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _458.DebtAuction;
            };
            CollateralAuction: {
                encode(message: _458.CollateralAuction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _458.CollateralAuction;
                fromJSON(object: any): _458.CollateralAuction;
                toJSON(message: _458.CollateralAuction): unknown;
                fromPartial(object: {
                    baseAuction?: {
                        id?: any;
                        initiator?: string;
                        lot?: {
                            denom?: string;
                            amount?: string;
                        };
                        bidder?: Uint8Array;
                        bid?: {
                            denom?: string;
                            amount?: string;
                        };
                        hasReceivedBids?: boolean;
                        endTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        maxEndTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    correspondingDebt?: {
                        denom?: string;
                        amount?: string;
                    };
                    maxBid?: {
                        denom?: string;
                        amount?: string;
                    };
                    lotReturns?: {
                        addresses?: Uint8Array[];
                        weights?: Uint8Array[];
                    };
                }): _458.CollateralAuction;
            };
            WeightedAddresses: {
                encode(message: _458.WeightedAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _458.WeightedAddresses;
                fromJSON(object: any): _458.WeightedAddresses;
                toJSON(message: _458.WeightedAddresses): unknown;
                fromPartial(object: {
                    addresses?: Uint8Array[];
                    weights?: Uint8Array[];
                }): _458.WeightedAddresses;
            };
        };
    }
    namespace bep3 {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createAtomicSwap(value: _465.MsgCreateAtomicSwap): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    claimAtomicSwap(value: _465.MsgClaimAtomicSwap): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    refundAtomicSwap(value: _465.MsgRefundAtomicSwap): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createAtomicSwap(value: _465.MsgCreateAtomicSwap): {
                        typeUrl: string;
                        value: _465.MsgCreateAtomicSwap;
                    };
                    claimAtomicSwap(value: _465.MsgClaimAtomicSwap): {
                        typeUrl: string;
                        value: _465.MsgClaimAtomicSwap;
                    };
                    refundAtomicSwap(value: _465.MsgRefundAtomicSwap): {
                        typeUrl: string;
                        value: _465.MsgRefundAtomicSwap;
                    };
                };
                toJSON: {
                    createAtomicSwap(value: _465.MsgCreateAtomicSwap): {
                        typeUrl: string;
                        value: unknown;
                    };
                    claimAtomicSwap(value: _465.MsgClaimAtomicSwap): {
                        typeUrl: string;
                        value: unknown;
                    };
                    refundAtomicSwap(value: _465.MsgRefundAtomicSwap): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createAtomicSwap(value: any): {
                        typeUrl: string;
                        value: _465.MsgCreateAtomicSwap;
                    };
                    claimAtomicSwap(value: any): {
                        typeUrl: string;
                        value: _465.MsgClaimAtomicSwap;
                    };
                    refundAtomicSwap(value: any): {
                        typeUrl: string;
                        value: _465.MsgRefundAtomicSwap;
                    };
                };
                fromPartial: {
                    createAtomicSwap(value: _465.MsgCreateAtomicSwap): {
                        typeUrl: string;
                        value: _465.MsgCreateAtomicSwap;
                    };
                    claimAtomicSwap(value: _465.MsgClaimAtomicSwap): {
                        typeUrl: string;
                        value: _465.MsgClaimAtomicSwap;
                    };
                    refundAtomicSwap(value: _465.MsgRefundAtomicSwap): {
                        typeUrl: string;
                        value: _465.MsgRefundAtomicSwap;
                    };
                };
            };
            AminoConverter: {
                "/kava.bep3.v1beta1.MsgCreateAtomicSwap": {
                    aminoType: string;
                    toAmino: ({ from, to, recipientOtherChain, senderOtherChain, randomNumberHash, timestamp, amount, heightSpan }: _465.MsgCreateAtomicSwap) => {
                        from: string;
                        to: string;
                        recipient_other_chain: string;
                        sender_other_chain: string;
                        random_number_hash: string;
                        timestamp: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        height_span: string;
                    };
                    fromAmino: ({ from, to, recipient_other_chain, sender_other_chain, random_number_hash, timestamp, amount, height_span }: {
                        from: string;
                        to: string;
                        recipient_other_chain: string;
                        sender_other_chain: string;
                        random_number_hash: string;
                        timestamp: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        height_span: string;
                    }) => _465.MsgCreateAtomicSwap;
                };
                "/kava.bep3.v1beta1.MsgClaimAtomicSwap": {
                    aminoType: string;
                    toAmino: ({ from, swapId, randomNumber }: _465.MsgClaimAtomicSwap) => {
                        from: string;
                        swap_id: string;
                        random_number: string;
                    };
                    fromAmino: ({ from, swap_id, random_number }: {
                        from: string;
                        swap_id: string;
                        random_number: string;
                    }) => _465.MsgClaimAtomicSwap;
                };
                "/kava.bep3.v1beta1.MsgRefundAtomicSwap": {
                    aminoType: string;
                    toAmino: ({ from, swapId }: _465.MsgRefundAtomicSwap) => {
                        from: string;
                        swap_id: string;
                    };
                    fromAmino: ({ from, swap_id }: {
                        from: string;
                        swap_id: string;
                    }) => _465.MsgRefundAtomicSwap;
                };
            };
            MsgCreateAtomicSwap: {
                encode(message: _465.MsgCreateAtomicSwap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _465.MsgCreateAtomicSwap;
                fromJSON(object: any): _465.MsgCreateAtomicSwap;
                toJSON(message: _465.MsgCreateAtomicSwap): unknown;
                fromPartial(object: {
                    from?: string;
                    to?: string;
                    recipientOtherChain?: string;
                    senderOtherChain?: string;
                    randomNumberHash?: string;
                    timestamp?: any;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    heightSpan?: any;
                }): _465.MsgCreateAtomicSwap;
            };
            MsgCreateAtomicSwapResponse: {
                encode(_: _465.MsgCreateAtomicSwapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _465.MsgCreateAtomicSwapResponse;
                fromJSON(_: any): _465.MsgCreateAtomicSwapResponse;
                toJSON(_: _465.MsgCreateAtomicSwapResponse): unknown;
                fromPartial(_: {}): _465.MsgCreateAtomicSwapResponse;
            };
            MsgClaimAtomicSwap: {
                encode(message: _465.MsgClaimAtomicSwap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _465.MsgClaimAtomicSwap;
                fromJSON(object: any): _465.MsgClaimAtomicSwap;
                toJSON(message: _465.MsgClaimAtomicSwap): unknown;
                fromPartial(object: {
                    from?: string;
                    swapId?: string;
                    randomNumber?: string;
                }): _465.MsgClaimAtomicSwap;
            };
            MsgClaimAtomicSwapResponse: {
                encode(_: _465.MsgClaimAtomicSwapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _465.MsgClaimAtomicSwapResponse;
                fromJSON(_: any): _465.MsgClaimAtomicSwapResponse;
                toJSON(_: _465.MsgClaimAtomicSwapResponse): unknown;
                fromPartial(_: {}): _465.MsgClaimAtomicSwapResponse;
            };
            MsgRefundAtomicSwap: {
                encode(message: _465.MsgRefundAtomicSwap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _465.MsgRefundAtomicSwap;
                fromJSON(object: any): _465.MsgRefundAtomicSwap;
                toJSON(message: _465.MsgRefundAtomicSwap): unknown;
                fromPartial(object: {
                    from?: string;
                    swapId?: string;
                }): _465.MsgRefundAtomicSwap;
            };
            MsgRefundAtomicSwapResponse: {
                encode(_: _465.MsgRefundAtomicSwapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _465.MsgRefundAtomicSwapResponse;
                fromJSON(_: any): _465.MsgRefundAtomicSwapResponse;
                toJSON(_: _465.MsgRefundAtomicSwapResponse): unknown;
                fromPartial(_: {}): _465.MsgRefundAtomicSwapResponse;
            };
            QueryParamsRequest: {
                encode(_: _464.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _464.QueryParamsRequest;
                fromJSON(_: any): _464.QueryParamsRequest;
                toJSON(_: _464.QueryParamsRequest): unknown;
                fromPartial(_: {}): _464.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _464.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _464.QueryParamsResponse;
                fromJSON(object: any): _464.QueryParamsResponse;
                toJSON(message: _464.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        assetParams?: {
                            denom?: string;
                            coinId?: any;
                            supplyLimit?: {
                                limit?: string;
                                timeLimited?: boolean;
                                timePeriod?: {
                                    seconds?: any;
                                    nanos?: number;
                                };
                                timeBasedLimit?: string;
                            };
                            active?: boolean;
                            deputyAddress?: Uint8Array;
                            fixedFee?: string;
                            minSwapAmount?: string;
                            maxSwapAmount?: string;
                            minBlockLock?: any;
                            maxBlockLock?: any;
                        }[];
                    };
                }): _464.QueryParamsResponse;
            };
            QueryAssetSupplyRequest: {
                encode(message: _464.QueryAssetSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _464.QueryAssetSupplyRequest;
                fromJSON(object: any): _464.QueryAssetSupplyRequest;
                toJSON(message: _464.QueryAssetSupplyRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _464.QueryAssetSupplyRequest;
            };
            AssetSupplyResponse: {
                encode(message: _464.AssetSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _464.AssetSupplyResponse;
                fromJSON(object: any): _464.AssetSupplyResponse;
                toJSON(message: _464.AssetSupplyResponse): unknown;
                fromPartial(object: {
                    incomingSupply?: {
                        denom?: string;
                        amount?: string;
                    };
                    outgoingSupply?: {
                        denom?: string;
                        amount?: string;
                    };
                    currentSupply?: {
                        denom?: string;
                        amount?: string;
                    };
                    timeLimitedCurrentSupply?: {
                        denom?: string;
                        amount?: string;
                    };
                    timeElapsed?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _464.AssetSupplyResponse;
            };
            QueryAssetSupplyResponse: {
                encode(message: _464.QueryAssetSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _464.QueryAssetSupplyResponse;
                fromJSON(object: any): _464.QueryAssetSupplyResponse;
                toJSON(message: _464.QueryAssetSupplyResponse): unknown;
                fromPartial(object: {
                    assetSupply?: {
                        incomingSupply?: {
                            denom?: string;
                            amount?: string;
                        };
                        outgoingSupply?: {
                            denom?: string;
                            amount?: string;
                        };
                        currentSupply?: {
                            denom?: string;
                            amount?: string;
                        };
                        timeLimitedCurrentSupply?: {
                            denom?: string;
                            amount?: string;
                        };
                        timeElapsed?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                }): _464.QueryAssetSupplyResponse;
            };
            QueryAssetSuppliesRequest: {
                encode(_: _464.QueryAssetSuppliesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _464.QueryAssetSuppliesRequest;
                fromJSON(_: any): _464.QueryAssetSuppliesRequest;
                toJSON(_: _464.QueryAssetSuppliesRequest): unknown;
                fromPartial(_: {}): _464.QueryAssetSuppliesRequest;
            };
            QueryAssetSuppliesResponse: {
                encode(message: _464.QueryAssetSuppliesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _464.QueryAssetSuppliesResponse;
                fromJSON(object: any): _464.QueryAssetSuppliesResponse;
                toJSON(message: _464.QueryAssetSuppliesResponse): unknown;
                fromPartial(object: {
                    assetSupplies?: {
                        incomingSupply?: {
                            denom?: string;
                            amount?: string;
                        };
                        outgoingSupply?: {
                            denom?: string;
                            amount?: string;
                        };
                        currentSupply?: {
                            denom?: string;
                            amount?: string;
                        };
                        timeLimitedCurrentSupply?: {
                            denom?: string;
                            amount?: string;
                        };
                        timeElapsed?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                }): _464.QueryAssetSuppliesResponse;
            };
            QueryAtomicSwapRequest: {
                encode(message: _464.QueryAtomicSwapRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _464.QueryAtomicSwapRequest;
                fromJSON(object: any): _464.QueryAtomicSwapRequest;
                toJSON(message: _464.QueryAtomicSwapRequest): unknown;
                fromPartial(object: {
                    swapId?: string;
                }): _464.QueryAtomicSwapRequest;
            };
            QueryAtomicSwapResponse: {
                encode(message: _464.QueryAtomicSwapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _464.QueryAtomicSwapResponse;
                fromJSON(object: any): _464.QueryAtomicSwapResponse;
                toJSON(message: _464.QueryAtomicSwapResponse): unknown;
                fromPartial(object: {
                    atomicSwap?: {
                        id?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        randomNumberHash?: string;
                        expireHeight?: any;
                        timestamp?: any;
                        sender?: string;
                        recipient?: string;
                        senderOtherChain?: string;
                        recipientOtherChain?: string;
                        closedBlock?: any;
                        status?: _462.SwapStatus;
                        crossChain?: boolean;
                        direction?: _462.SwapDirection;
                    };
                }): _464.QueryAtomicSwapResponse;
            };
            AtomicSwapResponse: {
                encode(message: _464.AtomicSwapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _464.AtomicSwapResponse;
                fromJSON(object: any): _464.AtomicSwapResponse;
                toJSON(message: _464.AtomicSwapResponse): unknown;
                fromPartial(object: {
                    id?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    randomNumberHash?: string;
                    expireHeight?: any;
                    timestamp?: any;
                    sender?: string;
                    recipient?: string;
                    senderOtherChain?: string;
                    recipientOtherChain?: string;
                    closedBlock?: any;
                    status?: _462.SwapStatus;
                    crossChain?: boolean;
                    direction?: _462.SwapDirection;
                }): _464.AtomicSwapResponse;
            };
            QueryAtomicSwapsRequest: {
                encode(message: _464.QueryAtomicSwapsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _464.QueryAtomicSwapsRequest;
                fromJSON(object: any): _464.QueryAtomicSwapsRequest;
                toJSON(message: _464.QueryAtomicSwapsRequest): unknown;
                fromPartial(object: {
                    involve?: string;
                    expiration?: any;
                    status?: _462.SwapStatus;
                    direction?: _462.SwapDirection;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _464.QueryAtomicSwapsRequest;
            };
            QueryAtomicSwapsResponse: {
                encode(message: _464.QueryAtomicSwapsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _464.QueryAtomicSwapsResponse;
                fromJSON(object: any): _464.QueryAtomicSwapsResponse;
                toJSON(message: _464.QueryAtomicSwapsResponse): unknown;
                fromPartial(object: {
                    atomicSwaps?: {
                        id?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        randomNumberHash?: string;
                        expireHeight?: any;
                        timestamp?: any;
                        sender?: string;
                        recipient?: string;
                        senderOtherChain?: string;
                        recipientOtherChain?: string;
                        closedBlock?: any;
                        status?: _462.SwapStatus;
                        crossChain?: boolean;
                        direction?: _462.SwapDirection;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _464.QueryAtomicSwapsResponse;
            };
            GenesisState: {
                encode(message: _463.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _463.GenesisState;
                fromJSON(object: any): _463.GenesisState;
                toJSON(message: _463.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        assetParams?: {
                            denom?: string;
                            coinId?: any;
                            supplyLimit?: {
                                limit?: string;
                                timeLimited?: boolean;
                                timePeriod?: {
                                    seconds?: any;
                                    nanos?: number;
                                };
                                timeBasedLimit?: string;
                            };
                            active?: boolean;
                            deputyAddress?: Uint8Array;
                            fixedFee?: string;
                            minSwapAmount?: string;
                            maxSwapAmount?: string;
                            minBlockLock?: any;
                            maxBlockLock?: any;
                        }[];
                    };
                    atomicSwaps?: {
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        randomNumberHash?: Uint8Array;
                        expireHeight?: any;
                        timestamp?: any;
                        sender?: Uint8Array;
                        recipient?: Uint8Array;
                        senderOtherChain?: string;
                        recipientOtherChain?: string;
                        closedBlock?: any;
                        status?: _462.SwapStatus;
                        crossChain?: boolean;
                        direction?: _462.SwapDirection;
                    }[];
                    supplies?: {
                        incomingSupply?: {
                            denom?: string;
                            amount?: string;
                        };
                        outgoingSupply?: {
                            denom?: string;
                            amount?: string;
                        };
                        currentSupply?: {
                            denom?: string;
                            amount?: string;
                        };
                        timeLimitedCurrentSupply?: {
                            denom?: string;
                            amount?: string;
                        };
                        timeElapsed?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    previousBlockTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _463.GenesisState;
            };
            swapStatusFromJSON(object: any): _462.SwapStatus;
            swapStatusToJSON(object: _462.SwapStatus): string;
            swapDirectionFromJSON(object: any): _462.SwapDirection;
            swapDirectionToJSON(object: _462.SwapDirection): string;
            SwapStatus: typeof _462.SwapStatus;
            SwapDirection: typeof _462.SwapDirection;
            Params: {
                encode(message: _462.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _462.Params;
                fromJSON(object: any): _462.Params;
                toJSON(message: _462.Params): unknown;
                fromPartial(object: {
                    assetParams?: {
                        denom?: string;
                        coinId?: any;
                        supplyLimit?: {
                            limit?: string;
                            timeLimited?: boolean;
                            timePeriod?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            timeBasedLimit?: string;
                        };
                        active?: boolean;
                        deputyAddress?: Uint8Array;
                        fixedFee?: string;
                        minSwapAmount?: string;
                        maxSwapAmount?: string;
                        minBlockLock?: any;
                        maxBlockLock?: any;
                    }[];
                }): _462.Params;
            };
            AssetParam: {
                encode(message: _462.AssetParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _462.AssetParam;
                fromJSON(object: any): _462.AssetParam;
                toJSON(message: _462.AssetParam): unknown;
                fromPartial(object: {
                    denom?: string;
                    coinId?: any;
                    supplyLimit?: {
                        limit?: string;
                        timeLimited?: boolean;
                        timePeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        timeBasedLimit?: string;
                    };
                    active?: boolean;
                    deputyAddress?: Uint8Array;
                    fixedFee?: string;
                    minSwapAmount?: string;
                    maxSwapAmount?: string;
                    minBlockLock?: any;
                    maxBlockLock?: any;
                }): _462.AssetParam;
            };
            SupplyLimit: {
                encode(message: _462.SupplyLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _462.SupplyLimit;
                fromJSON(object: any): _462.SupplyLimit;
                toJSON(message: _462.SupplyLimit): unknown;
                fromPartial(object: {
                    limit?: string;
                    timeLimited?: boolean;
                    timePeriod?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    timeBasedLimit?: string;
                }): _462.SupplyLimit;
            };
            AtomicSwap: {
                encode(message: _462.AtomicSwap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _462.AtomicSwap;
                fromJSON(object: any): _462.AtomicSwap;
                toJSON(message: _462.AtomicSwap): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    randomNumberHash?: Uint8Array;
                    expireHeight?: any;
                    timestamp?: any;
                    sender?: Uint8Array;
                    recipient?: Uint8Array;
                    senderOtherChain?: string;
                    recipientOtherChain?: string;
                    closedBlock?: any;
                    status?: _462.SwapStatus;
                    crossChain?: boolean;
                    direction?: _462.SwapDirection;
                }): _462.AtomicSwap;
            };
            AssetSupply: {
                encode(message: _462.AssetSupply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _462.AssetSupply;
                fromJSON(object: any): _462.AssetSupply;
                toJSON(message: _462.AssetSupply): unknown;
                fromPartial(object: {
                    incomingSupply?: {
                        denom?: string;
                        amount?: string;
                    };
                    outgoingSupply?: {
                        denom?: string;
                        amount?: string;
                    };
                    currentSupply?: {
                        denom?: string;
                        amount?: string;
                    };
                    timeLimitedCurrentSupply?: {
                        denom?: string;
                        amount?: string;
                    };
                    timeElapsed?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _462.AssetSupply;
            };
        };
    }
    namespace cdp {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createCDP(value: _469.MsgCreateCDP): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _469.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdraw(value: _469.MsgWithdraw): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    drawDebt(value: _469.MsgDrawDebt): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    repayDebt(value: _469.MsgRepayDebt): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    liquidate(value: _469.MsgLiquidate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createCDP(value: _469.MsgCreateCDP): {
                        typeUrl: string;
                        value: _469.MsgCreateCDP;
                    };
                    deposit(value: _469.MsgDeposit): {
                        typeUrl: string;
                        value: _469.MsgDeposit;
                    };
                    withdraw(value: _469.MsgWithdraw): {
                        typeUrl: string;
                        value: _469.MsgWithdraw;
                    };
                    drawDebt(value: _469.MsgDrawDebt): {
                        typeUrl: string;
                        value: _469.MsgDrawDebt;
                    };
                    repayDebt(value: _469.MsgRepayDebt): {
                        typeUrl: string;
                        value: _469.MsgRepayDebt;
                    };
                    liquidate(value: _469.MsgLiquidate): {
                        typeUrl: string;
                        value: _469.MsgLiquidate;
                    };
                };
                toJSON: {
                    createCDP(value: _469.MsgCreateCDP): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _469.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdraw(value: _469.MsgWithdraw): {
                        typeUrl: string;
                        value: unknown;
                    };
                    drawDebt(value: _469.MsgDrawDebt): {
                        typeUrl: string;
                        value: unknown;
                    };
                    repayDebt(value: _469.MsgRepayDebt): {
                        typeUrl: string;
                        value: unknown;
                    };
                    liquidate(value: _469.MsgLiquidate): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createCDP(value: any): {
                        typeUrl: string;
                        value: _469.MsgCreateCDP;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _469.MsgDeposit;
                    };
                    withdraw(value: any): {
                        typeUrl: string;
                        value: _469.MsgWithdraw;
                    };
                    drawDebt(value: any): {
                        typeUrl: string;
                        value: _469.MsgDrawDebt;
                    };
                    repayDebt(value: any): {
                        typeUrl: string;
                        value: _469.MsgRepayDebt;
                    };
                    liquidate(value: any): {
                        typeUrl: string;
                        value: _469.MsgLiquidate;
                    };
                };
                fromPartial: {
                    createCDP(value: _469.MsgCreateCDP): {
                        typeUrl: string;
                        value: _469.MsgCreateCDP;
                    };
                    deposit(value: _469.MsgDeposit): {
                        typeUrl: string;
                        value: _469.MsgDeposit;
                    };
                    withdraw(value: _469.MsgWithdraw): {
                        typeUrl: string;
                        value: _469.MsgWithdraw;
                    };
                    drawDebt(value: _469.MsgDrawDebt): {
                        typeUrl: string;
                        value: _469.MsgDrawDebt;
                    };
                    repayDebt(value: _469.MsgRepayDebt): {
                        typeUrl: string;
                        value: _469.MsgRepayDebt;
                    };
                    liquidate(value: _469.MsgLiquidate): {
                        typeUrl: string;
                        value: _469.MsgLiquidate;
                    };
                };
            };
            AminoConverter: {
                "/kava.cdp.v1beta1.MsgCreateCDP": {
                    aminoType: string;
                    toAmino: ({ sender, collateral, principal, collateralType }: _469.MsgCreateCDP) => {
                        sender: string;
                        collateral: {
                            denom: string;
                            amount: string;
                        };
                        principal: {
                            denom: string;
                            amount: string;
                        };
                        collateral_type: string;
                    };
                    fromAmino: ({ sender, collateral, principal, collateral_type }: {
                        sender: string;
                        collateral: {
                            denom: string;
                            amount: string;
                        };
                        principal: {
                            denom: string;
                            amount: string;
                        };
                        collateral_type: string;
                    }) => _469.MsgCreateCDP;
                };
                "/kava.cdp.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ depositor, owner, collateral, collateralType }: _469.MsgDeposit) => {
                        depositor: string;
                        owner: string;
                        collateral: {
                            denom: string;
                            amount: string;
                        };
                        collateral_type: string;
                    };
                    fromAmino: ({ depositor, owner, collateral, collateral_type }: {
                        depositor: string;
                        owner: string;
                        collateral: {
                            denom: string;
                            amount: string;
                        };
                        collateral_type: string;
                    }) => _469.MsgDeposit;
                };
                "/kava.cdp.v1beta1.MsgWithdraw": {
                    aminoType: string;
                    toAmino: ({ depositor, owner, collateral, collateralType }: _469.MsgWithdraw) => {
                        depositor: string;
                        owner: string;
                        collateral: {
                            denom: string;
                            amount: string;
                        };
                        collateral_type: string;
                    };
                    fromAmino: ({ depositor, owner, collateral, collateral_type }: {
                        depositor: string;
                        owner: string;
                        collateral: {
                            denom: string;
                            amount: string;
                        };
                        collateral_type: string;
                    }) => _469.MsgWithdraw;
                };
                "/kava.cdp.v1beta1.MsgDrawDebt": {
                    aminoType: string;
                    toAmino: ({ sender, collateralType, principal }: _469.MsgDrawDebt) => {
                        sender: string;
                        collateral_type: string;
                        principal: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ sender, collateral_type, principal }: {
                        sender: string;
                        collateral_type: string;
                        principal: {
                            denom: string;
                            amount: string;
                        };
                    }) => _469.MsgDrawDebt;
                };
                "/kava.cdp.v1beta1.MsgRepayDebt": {
                    aminoType: string;
                    toAmino: ({ sender, collateralType, payment }: _469.MsgRepayDebt) => {
                        sender: string;
                        collateral_type: string;
                        payment: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ sender, collateral_type, payment }: {
                        sender: string;
                        collateral_type: string;
                        payment: {
                            denom: string;
                            amount: string;
                        };
                    }) => _469.MsgRepayDebt;
                };
                "/kava.cdp.v1beta1.MsgLiquidate": {
                    aminoType: string;
                    toAmino: ({ keeper, borrower, collateralType }: _469.MsgLiquidate) => {
                        keeper: string;
                        borrower: string;
                        collateral_type: string;
                    };
                    fromAmino: ({ keeper, borrower, collateral_type }: {
                        keeper: string;
                        borrower: string;
                        collateral_type: string;
                    }) => _469.MsgLiquidate;
                };
            };
            MsgCreateCDP: {
                encode(message: _469.MsgCreateCDP, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _469.MsgCreateCDP;
                fromJSON(object: any): _469.MsgCreateCDP;
                toJSON(message: _469.MsgCreateCDP): unknown;
                fromPartial(object: {
                    sender?: string;
                    collateral?: {
                        denom?: string;
                        amount?: string;
                    };
                    principal?: {
                        denom?: string;
                        amount?: string;
                    };
                    collateralType?: string;
                }): _469.MsgCreateCDP;
            };
            MsgCreateCDPResponse: {
                encode(message: _469.MsgCreateCDPResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _469.MsgCreateCDPResponse;
                fromJSON(object: any): _469.MsgCreateCDPResponse;
                toJSON(message: _469.MsgCreateCDPResponse): unknown;
                fromPartial(object: {
                    cdpId?: any;
                }): _469.MsgCreateCDPResponse;
            };
            MsgDeposit: {
                encode(message: _469.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _469.MsgDeposit;
                fromJSON(object: any): _469.MsgDeposit;
                toJSON(message: _469.MsgDeposit): unknown;
                fromPartial(object: {
                    depositor?: string;
                    owner?: string;
                    collateral?: {
                        denom?: string;
                        amount?: string;
                    };
                    collateralType?: string;
                }): _469.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _469.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _469.MsgDepositResponse;
                fromJSON(_: any): _469.MsgDepositResponse;
                toJSON(_: _469.MsgDepositResponse): unknown;
                fromPartial(_: {}): _469.MsgDepositResponse;
            };
            MsgWithdraw: {
                encode(message: _469.MsgWithdraw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _469.MsgWithdraw;
                fromJSON(object: any): _469.MsgWithdraw;
                toJSON(message: _469.MsgWithdraw): unknown;
                fromPartial(object: {
                    depositor?: string;
                    owner?: string;
                    collateral?: {
                        denom?: string;
                        amount?: string;
                    };
                    collateralType?: string;
                }): _469.MsgWithdraw;
            };
            MsgWithdrawResponse: {
                encode(_: _469.MsgWithdrawResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _469.MsgWithdrawResponse;
                fromJSON(_: any): _469.MsgWithdrawResponse;
                toJSON(_: _469.MsgWithdrawResponse): unknown;
                fromPartial(_: {}): _469.MsgWithdrawResponse;
            };
            MsgDrawDebt: {
                encode(message: _469.MsgDrawDebt, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _469.MsgDrawDebt;
                fromJSON(object: any): _469.MsgDrawDebt;
                toJSON(message: _469.MsgDrawDebt): unknown;
                fromPartial(object: {
                    sender?: string;
                    collateralType?: string;
                    principal?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _469.MsgDrawDebt;
            };
            MsgDrawDebtResponse: {
                encode(_: _469.MsgDrawDebtResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _469.MsgDrawDebtResponse;
                fromJSON(_: any): _469.MsgDrawDebtResponse;
                toJSON(_: _469.MsgDrawDebtResponse): unknown;
                fromPartial(_: {}): _469.MsgDrawDebtResponse;
            };
            MsgRepayDebt: {
                encode(message: _469.MsgRepayDebt, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _469.MsgRepayDebt;
                fromJSON(object: any): _469.MsgRepayDebt;
                toJSON(message: _469.MsgRepayDebt): unknown;
                fromPartial(object: {
                    sender?: string;
                    collateralType?: string;
                    payment?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _469.MsgRepayDebt;
            };
            MsgRepayDebtResponse: {
                encode(_: _469.MsgRepayDebtResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _469.MsgRepayDebtResponse;
                fromJSON(_: any): _469.MsgRepayDebtResponse;
                toJSON(_: _469.MsgRepayDebtResponse): unknown;
                fromPartial(_: {}): _469.MsgRepayDebtResponse;
            };
            MsgLiquidate: {
                encode(message: _469.MsgLiquidate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _469.MsgLiquidate;
                fromJSON(object: any): _469.MsgLiquidate;
                toJSON(message: _469.MsgLiquidate): unknown;
                fromPartial(object: {
                    keeper?: string;
                    borrower?: string;
                    collateralType?: string;
                }): _469.MsgLiquidate;
            };
            MsgLiquidateResponse: {
                encode(_: _469.MsgLiquidateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _469.MsgLiquidateResponse;
                fromJSON(_: any): _469.MsgLiquidateResponse;
                toJSON(_: _469.MsgLiquidateResponse): unknown;
                fromPartial(_: {}): _469.MsgLiquidateResponse;
            };
            QueryParamsRequest: {
                encode(_: _468.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _468.QueryParamsRequest;
                fromJSON(_: any): _468.QueryParamsRequest;
                toJSON(_: _468.QueryParamsRequest): unknown;
                fromPartial(_: {}): _468.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _468.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _468.QueryParamsResponse;
                fromJSON(object: any): _468.QueryParamsResponse;
                toJSON(message: _468.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        collateralParams?: {
                            denom?: string;
                            type?: string;
                            liquidationRatio?: string;
                            debtLimit?: {
                                denom?: string;
                                amount?: string;
                            };
                            stabilityFee?: string;
                            auctionSize?: string;
                            liquidationPenalty?: string;
                            spotMarketId?: string;
                            liquidationMarketId?: string;
                            keeperRewardPercentage?: string;
                            checkCollateralizationIndexCount?: string;
                            conversionFactor?: string;
                        }[];
                        debtParam?: {
                            denom?: string;
                            referenceAsset?: string;
                            conversionFactor?: string;
                            debtFloor?: string;
                        };
                        globalDebtLimit?: {
                            denom?: string;
                            amount?: string;
                        };
                        surplusAuctionThreshold?: string;
                        surplusAuctionLot?: string;
                        debtAuctionThreshold?: string;
                        debtAuctionLot?: string;
                        circuitBreaker?: boolean;
                    };
                }): _468.QueryParamsResponse;
            };
            QueryAccountsRequest: {
                encode(_: _468.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _468.QueryAccountsRequest;
                fromJSON(_: any): _468.QueryAccountsRequest;
                toJSON(_: _468.QueryAccountsRequest): unknown;
                fromPartial(_: {}): _468.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _468.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _468.QueryAccountsResponse;
                fromJSON(object: any): _468.QueryAccountsResponse;
                toJSON(message: _468.QueryAccountsResponse): unknown;
                fromPartial(object: {
                    accounts?: {
                        baseAccount?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            accountNumber?: any;
                            sequence?: any;
                        };
                        name?: string;
                        permissions?: string[];
                    }[];
                }): _468.QueryAccountsResponse;
            };
            QueryCdpRequest: {
                encode(message: _468.QueryCdpRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _468.QueryCdpRequest;
                fromJSON(object: any): _468.QueryCdpRequest;
                toJSON(message: _468.QueryCdpRequest): unknown;
                fromPartial(object: {
                    collateralType?: string;
                    owner?: string;
                }): _468.QueryCdpRequest;
            };
            QueryCdpResponse: {
                encode(message: _468.QueryCdpResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _468.QueryCdpResponse;
                fromJSON(object: any): _468.QueryCdpResponse;
                toJSON(message: _468.QueryCdpResponse): unknown;
                fromPartial(object: {
                    cdp?: {
                        id?: any;
                        owner?: string;
                        type?: string;
                        collateral?: {
                            denom?: string;
                            amount?: string;
                        };
                        principal?: {
                            denom?: string;
                            amount?: string;
                        };
                        accumulatedFees?: {
                            denom?: string;
                            amount?: string;
                        };
                        feesUpdated?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        interestFactor?: string;
                        collateralValue?: {
                            denom?: string;
                            amount?: string;
                        };
                        collateralizationRatio?: string;
                    };
                }): _468.QueryCdpResponse;
            };
            QueryCdpsRequest: {
                encode(message: _468.QueryCdpsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _468.QueryCdpsRequest;
                fromJSON(object: any): _468.QueryCdpsRequest;
                toJSON(message: _468.QueryCdpsRequest): unknown;
                fromPartial(object: {
                    collateralType?: string;
                    owner?: string;
                    id?: any;
                    ratio?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _468.QueryCdpsRequest;
            };
            QueryCdpsResponse: {
                encode(message: _468.QueryCdpsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _468.QueryCdpsResponse;
                fromJSON(object: any): _468.QueryCdpsResponse;
                toJSON(message: _468.QueryCdpsResponse): unknown;
                fromPartial(object: {
                    cdps?: {
                        id?: any;
                        owner?: string;
                        type?: string;
                        collateral?: {
                            denom?: string;
                            amount?: string;
                        };
                        principal?: {
                            denom?: string;
                            amount?: string;
                        };
                        accumulatedFees?: {
                            denom?: string;
                            amount?: string;
                        };
                        feesUpdated?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        interestFactor?: string;
                        collateralValue?: {
                            denom?: string;
                            amount?: string;
                        };
                        collateralizationRatio?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _468.QueryCdpsResponse;
            };
            QueryDepositsRequest: {
                encode(message: _468.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _468.QueryDepositsRequest;
                fromJSON(object: any): _468.QueryDepositsRequest;
                toJSON(message: _468.QueryDepositsRequest): unknown;
                fromPartial(object: {
                    collateralType?: string;
                    owner?: string;
                }): _468.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _468.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _468.QueryDepositsResponse;
                fromJSON(object: any): _468.QueryDepositsResponse;
                toJSON(message: _468.QueryDepositsResponse): unknown;
                fromPartial(object: {
                    deposits?: {
                        cdpId?: any;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                }): _468.QueryDepositsResponse;
            };
            QueryTotalPrincipalRequest: {
                encode(message: _468.QueryTotalPrincipalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _468.QueryTotalPrincipalRequest;
                fromJSON(object: any): _468.QueryTotalPrincipalRequest;
                toJSON(message: _468.QueryTotalPrincipalRequest): unknown;
                fromPartial(object: {
                    collateralType?: string;
                }): _468.QueryTotalPrincipalRequest;
            };
            QueryTotalPrincipalResponse: {
                encode(message: _468.QueryTotalPrincipalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _468.QueryTotalPrincipalResponse;
                fromJSON(object: any): _468.QueryTotalPrincipalResponse;
                toJSON(message: _468.QueryTotalPrincipalResponse): unknown;
                fromPartial(object: {
                    totalPrincipal?: {
                        collateralType?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                }): _468.QueryTotalPrincipalResponse;
            };
            QueryTotalCollateralRequest: {
                encode(message: _468.QueryTotalCollateralRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _468.QueryTotalCollateralRequest;
                fromJSON(object: any): _468.QueryTotalCollateralRequest;
                toJSON(message: _468.QueryTotalCollateralRequest): unknown;
                fromPartial(object: {
                    collateralType?: string;
                }): _468.QueryTotalCollateralRequest;
            };
            QueryTotalCollateralResponse: {
                encode(message: _468.QueryTotalCollateralResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _468.QueryTotalCollateralResponse;
                fromJSON(object: any): _468.QueryTotalCollateralResponse;
                toJSON(message: _468.QueryTotalCollateralResponse): unknown;
                fromPartial(object: {
                    totalCollateral?: {
                        collateralType?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                }): _468.QueryTotalCollateralResponse;
            };
            CDPResponse: {
                encode(message: _468.CDPResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _468.CDPResponse;
                fromJSON(object: any): _468.CDPResponse;
                toJSON(message: _468.CDPResponse): unknown;
                fromPartial(object: {
                    id?: any;
                    owner?: string;
                    type?: string;
                    collateral?: {
                        denom?: string;
                        amount?: string;
                    };
                    principal?: {
                        denom?: string;
                        amount?: string;
                    };
                    accumulatedFees?: {
                        denom?: string;
                        amount?: string;
                    };
                    feesUpdated?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    interestFactor?: string;
                    collateralValue?: {
                        denom?: string;
                        amount?: string;
                    };
                    collateralizationRatio?: string;
                }): _468.CDPResponse;
            };
            GenesisState: {
                encode(message: _467.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _467.GenesisState;
                fromJSON(object: any): _467.GenesisState;
                toJSON(message: _467.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        collateralParams?: {
                            denom?: string;
                            type?: string;
                            liquidationRatio?: string;
                            debtLimit?: {
                                denom?: string;
                                amount?: string;
                            };
                            stabilityFee?: string;
                            auctionSize?: string;
                            liquidationPenalty?: string;
                            spotMarketId?: string;
                            liquidationMarketId?: string;
                            keeperRewardPercentage?: string;
                            checkCollateralizationIndexCount?: string;
                            conversionFactor?: string;
                        }[];
                        debtParam?: {
                            denom?: string;
                            referenceAsset?: string;
                            conversionFactor?: string;
                            debtFloor?: string;
                        };
                        globalDebtLimit?: {
                            denom?: string;
                            amount?: string;
                        };
                        surplusAuctionThreshold?: string;
                        surplusAuctionLot?: string;
                        debtAuctionThreshold?: string;
                        debtAuctionLot?: string;
                        circuitBreaker?: boolean;
                    };
                    cdps?: {
                        id?: any;
                        owner?: Uint8Array;
                        type?: string;
                        collateral?: {
                            denom?: string;
                            amount?: string;
                        };
                        principal?: {
                            denom?: string;
                            amount?: string;
                        };
                        accumulatedFees?: {
                            denom?: string;
                            amount?: string;
                        };
                        feesUpdated?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        interestFactor?: string;
                    }[];
                    deposits?: {
                        cdpId?: any;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    startingCdpId?: any;
                    debtDenom?: string;
                    govDenom?: string;
                    previousAccumulationTimes?: {
                        collateralType?: string;
                        previousAccumulationTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        interestFactor?: string;
                    }[];
                    totalPrincipals?: {
                        collateralType?: string;
                        totalPrincipal?: string;
                    }[];
                }): _467.GenesisState;
            };
            Params: {
                encode(message: _467.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _467.Params;
                fromJSON(object: any): _467.Params;
                toJSON(message: _467.Params): unknown;
                fromPartial(object: {
                    collateralParams?: {
                        denom?: string;
                        type?: string;
                        liquidationRatio?: string;
                        debtLimit?: {
                            denom?: string;
                            amount?: string;
                        };
                        stabilityFee?: string;
                        auctionSize?: string;
                        liquidationPenalty?: string;
                        spotMarketId?: string;
                        liquidationMarketId?: string;
                        keeperRewardPercentage?: string;
                        checkCollateralizationIndexCount?: string;
                        conversionFactor?: string;
                    }[];
                    debtParam?: {
                        denom?: string;
                        referenceAsset?: string;
                        conversionFactor?: string;
                        debtFloor?: string;
                    };
                    globalDebtLimit?: {
                        denom?: string;
                        amount?: string;
                    };
                    surplusAuctionThreshold?: string;
                    surplusAuctionLot?: string;
                    debtAuctionThreshold?: string;
                    debtAuctionLot?: string;
                    circuitBreaker?: boolean;
                }): _467.Params;
            };
            DebtParam: {
                encode(message: _467.DebtParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _467.DebtParam;
                fromJSON(object: any): _467.DebtParam;
                toJSON(message: _467.DebtParam): unknown;
                fromPartial(object: {
                    denom?: string;
                    referenceAsset?: string;
                    conversionFactor?: string;
                    debtFloor?: string;
                }): _467.DebtParam;
            };
            CollateralParam: {
                encode(message: _467.CollateralParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _467.CollateralParam;
                fromJSON(object: any): _467.CollateralParam;
                toJSON(message: _467.CollateralParam): unknown;
                fromPartial(object: {
                    denom?: string;
                    type?: string;
                    liquidationRatio?: string;
                    debtLimit?: {
                        denom?: string;
                        amount?: string;
                    };
                    stabilityFee?: string;
                    auctionSize?: string;
                    liquidationPenalty?: string;
                    spotMarketId?: string;
                    liquidationMarketId?: string;
                    keeperRewardPercentage?: string;
                    checkCollateralizationIndexCount?: string;
                    conversionFactor?: string;
                }): _467.CollateralParam;
            };
            GenesisAccumulationTime: {
                encode(message: _467.GenesisAccumulationTime, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _467.GenesisAccumulationTime;
                fromJSON(object: any): _467.GenesisAccumulationTime;
                toJSON(message: _467.GenesisAccumulationTime): unknown;
                fromPartial(object: {
                    collateralType?: string;
                    previousAccumulationTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    interestFactor?: string;
                }): _467.GenesisAccumulationTime;
            };
            GenesisTotalPrincipal: {
                encode(message: _467.GenesisTotalPrincipal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _467.GenesisTotalPrincipal;
                fromJSON(object: any): _467.GenesisTotalPrincipal;
                toJSON(message: _467.GenesisTotalPrincipal): unknown;
                fromPartial(object: {
                    collateralType?: string;
                    totalPrincipal?: string;
                }): _467.GenesisTotalPrincipal;
            };
            CDP: {
                encode(message: _466.CDP, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _466.CDP;
                fromJSON(object: any): _466.CDP;
                toJSON(message: _466.CDP): unknown;
                fromPartial(object: {
                    id?: any;
                    owner?: Uint8Array;
                    type?: string;
                    collateral?: {
                        denom?: string;
                        amount?: string;
                    };
                    principal?: {
                        denom?: string;
                        amount?: string;
                    };
                    accumulatedFees?: {
                        denom?: string;
                        amount?: string;
                    };
                    feesUpdated?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    interestFactor?: string;
                }): _466.CDP;
            };
            Deposit: {
                encode(message: _466.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _466.Deposit;
                fromJSON(object: any): _466.Deposit;
                toJSON(message: _466.Deposit): unknown;
                fromPartial(object: {
                    cdpId?: any;
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _466.Deposit;
            };
            TotalPrincipal: {
                encode(message: _466.TotalPrincipal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _466.TotalPrincipal;
                fromJSON(object: any): _466.TotalPrincipal;
                toJSON(message: _466.TotalPrincipal): unknown;
                fromPartial(object: {
                    collateralType?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _466.TotalPrincipal;
            };
            TotalCollateral: {
                encode(message: _466.TotalCollateral, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _466.TotalCollateral;
                fromJSON(object: any): _466.TotalCollateral;
                toJSON(message: _466.TotalCollateral): unknown;
                fromPartial(object: {
                    collateralType?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _466.TotalCollateral;
            };
            OwnerCDPIndex: {
                encode(message: _466.OwnerCDPIndex, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _466.OwnerCDPIndex;
                fromJSON(object: any): _466.OwnerCDPIndex;
                toJSON(message: _466.OwnerCDPIndex): unknown;
                fromPartial(object: {
                    cdpIds?: any[];
                }): _466.OwnerCDPIndex;
            };
        };
    }
    namespace committee {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _475.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _475.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _475.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _475.MsgSubmitProposal;
                    };
                    vote(value: _475.MsgVote): {
                        typeUrl: string;
                        value: _475.MsgVote;
                    };
                };
                toJSON: {
                    submitProposal(value: _475.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _475.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _475.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _475.MsgVote;
                    };
                };
                fromPartial: {
                    submitProposal(value: _475.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _475.MsgSubmitProposal;
                    };
                    vote(value: _475.MsgVote): {
                        typeUrl: string;
                        value: _475.MsgVote;
                    };
                };
            };
            AminoConverter: {
                "/kava.committee.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ pubProposal, proposer, committeeId }: _475.MsgSubmitProposal) => {
                        pub_proposal: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        proposer: string;
                        committee_id: string;
                    };
                    fromAmino: ({ pub_proposal, proposer, committee_id }: {
                        pub_proposal: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        proposer: string;
                        committee_id: string;
                    }) => _475.MsgSubmitProposal;
                };
                "/kava.committee.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, voteType }: _475.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        vote_type: number;
                    };
                    fromAmino: ({ proposal_id, voter, vote_type }: {
                        proposal_id: string;
                        voter: string;
                        vote_type: number;
                    }) => _475.MsgVote;
                };
            };
            MsgSubmitProposal: {
                encode(message: _475.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _475.MsgSubmitProposal;
                fromJSON(object: any): _475.MsgSubmitProposal;
                toJSON(message: _475.MsgSubmitProposal): unknown;
                fromPartial(object: {
                    pubProposal?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    proposer?: string;
                    committeeId?: any;
                }): _475.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _475.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _475.MsgSubmitProposalResponse;
                fromJSON(object: any): _475.MsgSubmitProposalResponse;
                toJSON(message: _475.MsgSubmitProposalResponse): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _475.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _475.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _475.MsgVote;
                fromJSON(object: any): _475.MsgVote;
                toJSON(message: _475.MsgVote): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    voteType?: _471.VoteType;
                }): _475.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _475.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _475.MsgVoteResponse;
                fromJSON(_: any): _475.MsgVoteResponse;
                toJSON(_: _475.MsgVoteResponse): unknown;
                fromPartial(_: {}): _475.MsgVoteResponse;
            };
            QueryCommitteesRequest: {
                encode(_: _474.QueryCommitteesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _474.QueryCommitteesRequest;
                fromJSON(_: any): _474.QueryCommitteesRequest;
                toJSON(_: _474.QueryCommitteesRequest): unknown;
                fromPartial(_: {}): _474.QueryCommitteesRequest;
            };
            QueryCommitteesResponse: {
                encode(message: _474.QueryCommitteesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _474.QueryCommitteesResponse;
                fromJSON(object: any): _474.QueryCommitteesResponse;
                toJSON(message: _474.QueryCommitteesResponse): unknown;
                fromPartial(object: {
                    committees?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _474.QueryCommitteesResponse;
            };
            QueryCommitteeRequest: {
                encode(message: _474.QueryCommitteeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _474.QueryCommitteeRequest;
                fromJSON(object: any): _474.QueryCommitteeRequest;
                toJSON(message: _474.QueryCommitteeRequest): unknown;
                fromPartial(object: {
                    committeeId?: any;
                }): _474.QueryCommitteeRequest;
            };
            QueryCommitteeResponse: {
                encode(message: _474.QueryCommitteeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _474.QueryCommitteeResponse;
                fromJSON(object: any): _474.QueryCommitteeResponse;
                toJSON(message: _474.QueryCommitteeResponse): unknown;
                fromPartial(object: {
                    committee?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _474.QueryCommitteeResponse;
            };
            QueryProposalsRequest: {
                encode(message: _474.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _474.QueryProposalsRequest;
                fromJSON(object: any): _474.QueryProposalsRequest;
                toJSON(message: _474.QueryProposalsRequest): unknown;
                fromPartial(object: {
                    committeeId?: any;
                }): _474.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _474.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _474.QueryProposalsResponse;
                fromJSON(object: any): _474.QueryProposalsResponse;
                toJSON(message: _474.QueryProposalsResponse): unknown;
                fromPartial(object: {
                    proposals?: {
                        pubProposal?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        id?: any;
                        committeeId?: any;
                        deadline?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                }): _474.QueryProposalsResponse;
            };
            QueryProposalRequest: {
                encode(message: _474.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _474.QueryProposalRequest;
                fromJSON(object: any): _474.QueryProposalRequest;
                toJSON(message: _474.QueryProposalRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _474.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _474.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _474.QueryProposalResponse;
                fromJSON(object: any): _474.QueryProposalResponse;
                toJSON(message: _474.QueryProposalResponse): unknown;
                fromPartial(object: {
                    pubProposal?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    id?: any;
                    committeeId?: any;
                    deadline?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _474.QueryProposalResponse;
            };
            QueryNextProposalIDRequest: {
                encode(_: _474.QueryNextProposalIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _474.QueryNextProposalIDRequest;
                fromJSON(_: any): _474.QueryNextProposalIDRequest;
                toJSON(_: _474.QueryNextProposalIDRequest): unknown;
                fromPartial(_: {}): _474.QueryNextProposalIDRequest;
            };
            QueryNextProposalIDResponse: {
                encode(message: _474.QueryNextProposalIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _474.QueryNextProposalIDResponse;
                fromJSON(object: any): _474.QueryNextProposalIDResponse;
                toJSON(message: _474.QueryNextProposalIDResponse): unknown;
                fromPartial(object: {
                    nextProposalId?: any;
                }): _474.QueryNextProposalIDResponse;
            };
            QueryVotesRequest: {
                encode(message: _474.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _474.QueryVotesRequest;
                fromJSON(object: any): _474.QueryVotesRequest;
                toJSON(message: _474.QueryVotesRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _474.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _474.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _474.QueryVotesResponse;
                fromJSON(object: any): _474.QueryVotesResponse;
                toJSON(message: _474.QueryVotesResponse): unknown;
                fromPartial(object: {
                    votes?: {
                        proposalId?: any;
                        voter?: string;
                        voteType?: _471.VoteType;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _474.QueryVotesResponse;
            };
            QueryVoteRequest: {
                encode(message: _474.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _474.QueryVoteRequest;
                fromJSON(object: any): _474.QueryVoteRequest;
                toJSON(message: _474.QueryVoteRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                }): _474.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _474.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _474.QueryVoteResponse;
                fromJSON(object: any): _474.QueryVoteResponse;
                toJSON(message: _474.QueryVoteResponse): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    voteType?: _471.VoteType;
                }): _474.QueryVoteResponse;
            };
            QueryTallyRequest: {
                encode(message: _474.QueryTallyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _474.QueryTallyRequest;
                fromJSON(object: any): _474.QueryTallyRequest;
                toJSON(message: _474.QueryTallyRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _474.QueryTallyRequest;
            };
            QueryTallyResponse: {
                encode(message: _474.QueryTallyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _474.QueryTallyResponse;
                fromJSON(object: any): _474.QueryTallyResponse;
                toJSON(message: _474.QueryTallyResponse): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    yesVotes?: string;
                    noVotes?: string;
                    currentVotes?: string;
                    possibleVotes?: string;
                    voteThreshold?: string;
                    quorum?: string;
                }): _474.QueryTallyResponse;
            };
            QueryRawParamsRequest: {
                encode(message: _474.QueryRawParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _474.QueryRawParamsRequest;
                fromJSON(object: any): _474.QueryRawParamsRequest;
                toJSON(message: _474.QueryRawParamsRequest): unknown;
                fromPartial(object: {
                    subspace?: string;
                    key?: string;
                }): _474.QueryRawParamsRequest;
            };
            QueryRawParamsResponse: {
                encode(message: _474.QueryRawParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _474.QueryRawParamsResponse;
                fromJSON(object: any): _474.QueryRawParamsResponse;
                toJSON(message: _474.QueryRawParamsResponse): unknown;
                fromPartial(object: {
                    rawData?: string;
                }): _474.QueryRawParamsResponse;
            };
            CommitteeChangeProposal: {
                encode(message: _473.CommitteeChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _473.CommitteeChangeProposal;
                fromJSON(object: any): _473.CommitteeChangeProposal;
                toJSON(message: _473.CommitteeChangeProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    newCommittee?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _473.CommitteeChangeProposal;
            };
            CommitteeDeleteProposal: {
                encode(message: _473.CommitteeDeleteProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _473.CommitteeDeleteProposal;
                fromJSON(object: any): _473.CommitteeDeleteProposal;
                toJSON(message: _473.CommitteeDeleteProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    committeeId?: any;
                }): _473.CommitteeDeleteProposal;
            };
            GodPermission: {
                encode(_: _472.GodPermission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _472.GodPermission;
                fromJSON(_: any): _472.GodPermission;
                toJSON(_: _472.GodPermission): unknown;
                fromPartial(_: {}): _472.GodPermission;
            };
            SoftwareUpgradePermission: {
                encode(_: _472.SoftwareUpgradePermission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _472.SoftwareUpgradePermission;
                fromJSON(_: any): _472.SoftwareUpgradePermission;
                toJSON(_: _472.SoftwareUpgradePermission): unknown;
                fromPartial(_: {}): _472.SoftwareUpgradePermission;
            };
            TextPermission: {
                encode(_: _472.TextPermission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _472.TextPermission;
                fromJSON(_: any): _472.TextPermission;
                toJSON(_: _472.TextPermission): unknown;
                fromPartial(_: {}): _472.TextPermission;
            };
            ParamsChangePermission: {
                encode(message: _472.ParamsChangePermission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _472.ParamsChangePermission;
                fromJSON(object: any): _472.ParamsChangePermission;
                toJSON(message: _472.ParamsChangePermission): unknown;
                fromPartial(object: {
                    allowedParamsChanges?: {
                        subspace?: string;
                        key?: string;
                        singleSubparamAllowedAttrs?: string[];
                        multiSubparamsRequirements?: {
                            key?: string;
                            val?: string;
                            allowedSubparamAttrChanges?: string[];
                        }[];
                    }[];
                }): _472.ParamsChangePermission;
            };
            AllowedParamsChange: {
                encode(message: _472.AllowedParamsChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _472.AllowedParamsChange;
                fromJSON(object: any): _472.AllowedParamsChange;
                toJSON(message: _472.AllowedParamsChange): unknown;
                fromPartial(object: {
                    subspace?: string;
                    key?: string;
                    singleSubparamAllowedAttrs?: string[];
                    multiSubparamsRequirements?: {
                        key?: string;
                        val?: string;
                        allowedSubparamAttrChanges?: string[];
                    }[];
                }): _472.AllowedParamsChange;
            };
            SubparamRequirement: {
                encode(message: _472.SubparamRequirement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _472.SubparamRequirement;
                fromJSON(object: any): _472.SubparamRequirement;
                toJSON(message: _472.SubparamRequirement): unknown;
                fromPartial(object: {
                    key?: string;
                    val?: string;
                    allowedSubparamAttrChanges?: string[];
                }): _472.SubparamRequirement;
            };
            voteTypeFromJSON(object: any): _471.VoteType;
            voteTypeToJSON(object: _471.VoteType): string;
            VoteType: typeof _471.VoteType;
            GenesisState: {
                encode(message: _471.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _471.GenesisState;
                fromJSON(object: any): _471.GenesisState;
                toJSON(message: _471.GenesisState): unknown;
                fromPartial(object: {
                    nextProposalId?: any;
                    committees?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    proposals?: {
                        content?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        id?: any;
                        committeeId?: any;
                        deadline?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    votes?: {
                        proposalId?: any;
                        voter?: Uint8Array;
                        voteType?: _471.VoteType;
                    }[];
                }): _471.GenesisState;
            };
            Proposal: {
                encode(message: _471.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _471.Proposal;
                fromJSON(object: any): _471.Proposal;
                toJSON(message: _471.Proposal): unknown;
                fromPartial(object: {
                    content?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    id?: any;
                    committeeId?: any;
                    deadline?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _471.Proposal;
            };
            Vote: {
                encode(message: _471.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _471.Vote;
                fromJSON(object: any): _471.Vote;
                toJSON(message: _471.Vote): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: Uint8Array;
                    voteType?: _471.VoteType;
                }): _471.Vote;
            };
            tallyOptionFromJSON(object: any): _470.TallyOption;
            tallyOptionToJSON(object: _470.TallyOption): string;
            TallyOption: typeof _470.TallyOption;
            BaseCommittee: {
                encode(message: _470.BaseCommittee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _470.BaseCommittee;
                fromJSON(object: any): _470.BaseCommittee;
                toJSON(message: _470.BaseCommittee): unknown;
                fromPartial(object: {
                    id?: any;
                    description?: string;
                    members?: Uint8Array[];
                    permissions?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    voteThreshold?: string;
                    proposalDuration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    tallyOption?: _470.TallyOption;
                }): _470.BaseCommittee;
            };
            MemberCommittee: {
                encode(message: _470.MemberCommittee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _470.MemberCommittee;
                fromJSON(object: any): _470.MemberCommittee;
                toJSON(message: _470.MemberCommittee): unknown;
                fromPartial(object: {
                    baseCommittee?: {
                        id?: any;
                        description?: string;
                        members?: Uint8Array[];
                        permissions?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        voteThreshold?: string;
                        proposalDuration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        tallyOption?: _470.TallyOption;
                    };
                }): _470.MemberCommittee;
            };
            TokenCommittee: {
                encode(message: _470.TokenCommittee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _470.TokenCommittee;
                fromJSON(object: any): _470.TokenCommittee;
                toJSON(message: _470.TokenCommittee): unknown;
                fromPartial(object: {
                    baseCommittee?: {
                        id?: any;
                        description?: string;
                        members?: Uint8Array[];
                        permissions?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        voteThreshold?: string;
                        proposalDuration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        tallyOption?: _470.TallyOption;
                    };
                    quorum?: string;
                    tallyDenom?: string;
                }): _470.TokenCommittee;
            };
        };
    }
    namespace earn {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    deposit(value: _480.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdraw(value: _480.MsgWithdraw): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    deposit(value: _480.MsgDeposit): {
                        typeUrl: string;
                        value: _480.MsgDeposit;
                    };
                    withdraw(value: _480.MsgWithdraw): {
                        typeUrl: string;
                        value: _480.MsgWithdraw;
                    };
                };
                toJSON: {
                    deposit(value: _480.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdraw(value: _480.MsgWithdraw): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    deposit(value: any): {
                        typeUrl: string;
                        value: _480.MsgDeposit;
                    };
                    withdraw(value: any): {
                        typeUrl: string;
                        value: _480.MsgWithdraw;
                    };
                };
                fromPartial: {
                    deposit(value: _480.MsgDeposit): {
                        typeUrl: string;
                        value: _480.MsgDeposit;
                    };
                    withdraw(value: _480.MsgWithdraw): {
                        typeUrl: string;
                        value: _480.MsgWithdraw;
                    };
                };
            };
            AminoConverter: {
                "/kava.earn.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ depositor, amount }: _480.MsgDeposit) => {
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ depositor, amount }: {
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _480.MsgDeposit;
                };
                "/kava.earn.v1beta1.MsgWithdraw": {
                    aminoType: string;
                    toAmino: ({ from, amount }: _480.MsgWithdraw) => {
                        from: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ from, amount }: {
                        from: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _480.MsgWithdraw;
                };
            };
            AllowedVault: {
                encode(message: _481.AllowedVault, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _481.AllowedVault;
                fromJSON(object: any): _481.AllowedVault;
                toJSON(message: _481.AllowedVault): unknown;
                fromPartial(object: {
                    denom?: string;
                    vaultStrategy?: _479.StrategyType;
                }): _481.AllowedVault;
            };
            VaultRecord: {
                encode(message: _481.VaultRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _481.VaultRecord;
                fromJSON(object: any): _481.VaultRecord;
                toJSON(message: _481.VaultRecord): unknown;
                fromPartial(object: {
                    denom?: string;
                    totalSupply?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _481.VaultRecord;
            };
            VaultShareRecord: {
                encode(message: _481.VaultShareRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _481.VaultShareRecord;
                fromJSON(object: any): _481.VaultShareRecord;
                toJSON(message: _481.VaultShareRecord): unknown;
                fromPartial(object: {
                    depositor?: Uint8Array;
                    amountSupplied?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _481.VaultShareRecord;
            };
            MsgDeposit: {
                encode(message: _480.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _480.MsgDeposit;
                fromJSON(object: any): _480.MsgDeposit;
                toJSON(message: _480.MsgDeposit): unknown;
                fromPartial(object: {
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _480.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _480.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _480.MsgDepositResponse;
                fromJSON(_: any): _480.MsgDepositResponse;
                toJSON(_: _480.MsgDepositResponse): unknown;
                fromPartial(_: {}): _480.MsgDepositResponse;
            };
            MsgWithdraw: {
                encode(message: _480.MsgWithdraw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _480.MsgWithdraw;
                fromJSON(object: any): _480.MsgWithdraw;
                toJSON(message: _480.MsgWithdraw): unknown;
                fromPartial(object: {
                    from?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _480.MsgWithdraw;
            };
            MsgWithdrawResponse: {
                encode(_: _480.MsgWithdrawResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _480.MsgWithdrawResponse;
                fromJSON(_: any): _480.MsgWithdrawResponse;
                toJSON(_: _480.MsgWithdrawResponse): unknown;
                fromPartial(_: {}): _480.MsgWithdrawResponse;
            };
            strategyTypeFromJSON(object: any): _479.StrategyType;
            strategyTypeToJSON(object: _479.StrategyType): string;
            StrategyType: typeof _479.StrategyType;
            QueryParamsRequest: {
                encode(_: _478.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _478.QueryParamsRequest;
                fromJSON(_: any): _478.QueryParamsRequest;
                toJSON(_: _478.QueryParamsRequest): unknown;
                fromPartial(_: {}): _478.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _478.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _478.QueryParamsResponse;
                fromJSON(object: any): _478.QueryParamsResponse;
                toJSON(message: _478.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        allowedVaults?: {
                            denom?: string;
                            vaultStrategy?: _479.StrategyType;
                        }[];
                    };
                }): _478.QueryParamsResponse;
            };
            QueryVaultsRequest: {
                encode(message: _478.QueryVaultsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _478.QueryVaultsRequest;
                fromJSON(object: any): _478.QueryVaultsRequest;
                toJSON(message: _478.QueryVaultsRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _478.QueryVaultsRequest;
            };
            QueryVaultsResponse: {
                encode(message: _478.QueryVaultsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _478.QueryVaultsResponse;
                fromJSON(object: any): _478.QueryVaultsResponse;
                toJSON(message: _478.QueryVaultsResponse): unknown;
                fromPartial(object: {
                    vaults?: {
                        denom?: string;
                        vaultStrategy?: _479.StrategyType;
                        totalSupplied?: string;
                        totalValue?: string;
                    }[];
                }): _478.QueryVaultsResponse;
            };
            VaultResponse: {
                encode(message: _478.VaultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _478.VaultResponse;
                fromJSON(object: any): _478.VaultResponse;
                toJSON(message: _478.VaultResponse): unknown;
                fromPartial(object: {
                    denom?: string;
                    vaultStrategy?: _479.StrategyType;
                    totalSupplied?: string;
                    totalValue?: string;
                }): _478.VaultResponse;
            };
            QueryDepositsRequest: {
                encode(message: _478.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _478.QueryDepositsRequest;
                fromJSON(object: any): _478.QueryDepositsRequest;
                toJSON(message: _478.QueryDepositsRequest): unknown;
                fromPartial(object: {
                    owner?: string;
                    denom?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _478.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _478.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _478.QueryDepositsResponse;
                fromJSON(object: any): _478.QueryDepositsResponse;
                toJSON(message: _478.QueryDepositsResponse): unknown;
                fromPartial(object: {
                    deposits?: {
                        depositor?: string;
                        amountSupplied?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        value?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _478.QueryDepositsResponse;
            };
            DepositResponse: {
                encode(message: _478.DepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _478.DepositResponse;
                fromJSON(object: any): _478.DepositResponse;
                toJSON(message: _478.DepositResponse): unknown;
                fromPartial(object: {
                    depositor?: string;
                    amountSupplied?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    value?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _478.DepositResponse;
            };
            QueryTotalDepositedRequest: {
                encode(message: _478.QueryTotalDepositedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _478.QueryTotalDepositedRequest;
                fromJSON(object: any): _478.QueryTotalDepositedRequest;
                toJSON(message: _478.QueryTotalDepositedRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _478.QueryTotalDepositedRequest;
            };
            QueryTotalDepositedResponse: {
                encode(message: _478.QueryTotalDepositedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _478.QueryTotalDepositedResponse;
                fromJSON(object: any): _478.QueryTotalDepositedResponse;
                toJSON(message: _478.QueryTotalDepositedResponse): unknown;
                fromPartial(object: {
                    suppliedCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _478.QueryTotalDepositedResponse;
            };
            Params: {
                encode(message: _477.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _477.Params;
                fromJSON(object: any): _477.Params;
                toJSON(message: _477.Params): unknown;
                fromPartial(object: {
                    allowedVaults?: {
                        denom?: string;
                        vaultStrategy?: _479.StrategyType;
                    }[];
                }): _477.Params;
            };
            GenesisState: {
                encode(message: _476.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _476.GenesisState;
                fromJSON(object: any): _476.GenesisState;
                toJSON(message: _476.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        allowedVaults?: {
                            denom?: string;
                            vaultStrategy?: _479.StrategyType;
                        }[];
                    };
                    vaultRecords?: {
                        denom?: string;
                        totalSupply?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    vaultShareRecords?: {
                        depositor?: Uint8Array;
                        amountSupplied?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _476.GenesisState;
            };
        };
    }
    namespace evmutil {
        const v1beta1: {
            GenesisState: {
                encode(message: _482.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _482.GenesisState;
                fromJSON(object: any): _482.GenesisState;
                toJSON(message: _482.GenesisState): unknown;
                fromPartial(object: {
                    accounts?: {
                        address?: Uint8Array;
                        balance?: string;
                    }[];
                }): _482.GenesisState;
            };
            Account: {
                encode(message: _482.Account, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _482.Account;
                fromJSON(object: any): _482.Account;
                toJSON(message: _482.Account): unknown;
                fromPartial(object: {
                    address?: Uint8Array;
                    balance?: string;
                }): _482.Account;
            };
        };
    }
    namespace hard {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    deposit(value: _486.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdraw(value: _486.MsgWithdraw): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    borrow(value: _486.MsgBorrow): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    repay(value: _486.MsgRepay): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    liquidate(value: _486.MsgLiquidate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    deposit(value: _486.MsgDeposit): {
                        typeUrl: string;
                        value: _486.MsgDeposit;
                    };
                    withdraw(value: _486.MsgWithdraw): {
                        typeUrl: string;
                        value: _486.MsgWithdraw;
                    };
                    borrow(value: _486.MsgBorrow): {
                        typeUrl: string;
                        value: _486.MsgBorrow;
                    };
                    repay(value: _486.MsgRepay): {
                        typeUrl: string;
                        value: _486.MsgRepay;
                    };
                    liquidate(value: _486.MsgLiquidate): {
                        typeUrl: string;
                        value: _486.MsgLiquidate;
                    };
                };
                toJSON: {
                    deposit(value: _486.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdraw(value: _486.MsgWithdraw): {
                        typeUrl: string;
                        value: unknown;
                    };
                    borrow(value: _486.MsgBorrow): {
                        typeUrl: string;
                        value: unknown;
                    };
                    repay(value: _486.MsgRepay): {
                        typeUrl: string;
                        value: unknown;
                    };
                    liquidate(value: _486.MsgLiquidate): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    deposit(value: any): {
                        typeUrl: string;
                        value: _486.MsgDeposit;
                    };
                    withdraw(value: any): {
                        typeUrl: string;
                        value: _486.MsgWithdraw;
                    };
                    borrow(value: any): {
                        typeUrl: string;
                        value: _486.MsgBorrow;
                    };
                    repay(value: any): {
                        typeUrl: string;
                        value: _486.MsgRepay;
                    };
                    liquidate(value: any): {
                        typeUrl: string;
                        value: _486.MsgLiquidate;
                    };
                };
                fromPartial: {
                    deposit(value: _486.MsgDeposit): {
                        typeUrl: string;
                        value: _486.MsgDeposit;
                    };
                    withdraw(value: _486.MsgWithdraw): {
                        typeUrl: string;
                        value: _486.MsgWithdraw;
                    };
                    borrow(value: _486.MsgBorrow): {
                        typeUrl: string;
                        value: _486.MsgBorrow;
                    };
                    repay(value: _486.MsgRepay): {
                        typeUrl: string;
                        value: _486.MsgRepay;
                    };
                    liquidate(value: _486.MsgLiquidate): {
                        typeUrl: string;
                        value: _486.MsgLiquidate;
                    };
                };
            };
            AminoConverter: {
                "/kava.hard.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ depositor, amount }: _486.MsgDeposit) => {
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ depositor, amount }: {
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _486.MsgDeposit;
                };
                "/kava.hard.v1beta1.MsgWithdraw": {
                    aminoType: string;
                    toAmino: ({ depositor, amount }: _486.MsgWithdraw) => {
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ depositor, amount }: {
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _486.MsgWithdraw;
                };
                "/kava.hard.v1beta1.MsgBorrow": {
                    aminoType: string;
                    toAmino: ({ borrower, amount }: _486.MsgBorrow) => {
                        borrower: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ borrower, amount }: {
                        borrower: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _486.MsgBorrow;
                };
                "/kava.hard.v1beta1.MsgRepay": {
                    aminoType: string;
                    toAmino: ({ sender, owner, amount }: _486.MsgRepay) => {
                        sender: string;
                        owner: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ sender, owner, amount }: {
                        sender: string;
                        owner: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _486.MsgRepay;
                };
                "/kava.hard.v1beta1.MsgLiquidate": {
                    aminoType: string;
                    toAmino: ({ keeper, borrower }: _486.MsgLiquidate) => {
                        keeper: string;
                        borrower: string;
                    };
                    fromAmino: ({ keeper, borrower }: {
                        keeper: string;
                        borrower: string;
                    }) => _486.MsgLiquidate;
                };
            };
            MsgDeposit: {
                encode(message: _486.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _486.MsgDeposit;
                fromJSON(object: any): _486.MsgDeposit;
                toJSON(message: _486.MsgDeposit): unknown;
                fromPartial(object: {
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _486.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _486.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _486.MsgDepositResponse;
                fromJSON(_: any): _486.MsgDepositResponse;
                toJSON(_: _486.MsgDepositResponse): unknown;
                fromPartial(_: {}): _486.MsgDepositResponse;
            };
            MsgWithdraw: {
                encode(message: _486.MsgWithdraw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _486.MsgWithdraw;
                fromJSON(object: any): _486.MsgWithdraw;
                toJSON(message: _486.MsgWithdraw): unknown;
                fromPartial(object: {
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _486.MsgWithdraw;
            };
            MsgWithdrawResponse: {
                encode(_: _486.MsgWithdrawResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _486.MsgWithdrawResponse;
                fromJSON(_: any): _486.MsgWithdrawResponse;
                toJSON(_: _486.MsgWithdrawResponse): unknown;
                fromPartial(_: {}): _486.MsgWithdrawResponse;
            };
            MsgBorrow: {
                encode(message: _486.MsgBorrow, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _486.MsgBorrow;
                fromJSON(object: any): _486.MsgBorrow;
                toJSON(message: _486.MsgBorrow): unknown;
                fromPartial(object: {
                    borrower?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _486.MsgBorrow;
            };
            MsgBorrowResponse: {
                encode(_: _486.MsgBorrowResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _486.MsgBorrowResponse;
                fromJSON(_: any): _486.MsgBorrowResponse;
                toJSON(_: _486.MsgBorrowResponse): unknown;
                fromPartial(_: {}): _486.MsgBorrowResponse;
            };
            MsgRepay: {
                encode(message: _486.MsgRepay, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _486.MsgRepay;
                fromJSON(object: any): _486.MsgRepay;
                toJSON(message: _486.MsgRepay): unknown;
                fromPartial(object: {
                    sender?: string;
                    owner?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _486.MsgRepay;
            };
            MsgRepayResponse: {
                encode(_: _486.MsgRepayResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _486.MsgRepayResponse;
                fromJSON(_: any): _486.MsgRepayResponse;
                toJSON(_: _486.MsgRepayResponse): unknown;
                fromPartial(_: {}): _486.MsgRepayResponse;
            };
            MsgLiquidate: {
                encode(message: _486.MsgLiquidate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _486.MsgLiquidate;
                fromJSON(object: any): _486.MsgLiquidate;
                toJSON(message: _486.MsgLiquidate): unknown;
                fromPartial(object: {
                    keeper?: string;
                    borrower?: string;
                }): _486.MsgLiquidate;
            };
            MsgLiquidateResponse: {
                encode(_: _486.MsgLiquidateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _486.MsgLiquidateResponse;
                fromJSON(_: any): _486.MsgLiquidateResponse;
                toJSON(_: _486.MsgLiquidateResponse): unknown;
                fromPartial(_: {}): _486.MsgLiquidateResponse;
            };
            QueryParamsRequest: {
                encode(_: _485.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _485.QueryParamsRequest;
                fromJSON(_: any): _485.QueryParamsRequest;
                toJSON(_: _485.QueryParamsRequest): unknown;
                fromPartial(_: {}): _485.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _485.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _485.QueryParamsResponse;
                fromJSON(object: any): _485.QueryParamsResponse;
                toJSON(message: _485.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        moneyMarkets?: {
                            denom?: string;
                            borrowLimit?: {
                                hasMaxLimit?: boolean;
                                maximumLimit?: string;
                                loanToValue?: string;
                            };
                            spotMarketId?: string;
                            conversionFactor?: string;
                            interestRateModel?: {
                                baseRateApy?: string;
                                baseMultiplier?: string;
                                kink?: string;
                                jumpMultiplier?: string;
                            };
                            reserveFactor?: string;
                            keeperRewardPercentage?: string;
                        }[];
                        minimumBorrowUsdValue?: string;
                    };
                }): _485.QueryParamsResponse;
            };
            QueryAccountsRequest: {
                encode(_: _485.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _485.QueryAccountsRequest;
                fromJSON(_: any): _485.QueryAccountsRequest;
                toJSON(_: _485.QueryAccountsRequest): unknown;
                fromPartial(_: {}): _485.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _485.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _485.QueryAccountsResponse;
                fromJSON(object: any): _485.QueryAccountsResponse;
                toJSON(message: _485.QueryAccountsResponse): unknown;
                fromPartial(object: {
                    accounts?: {
                        baseAccount?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            accountNumber?: any;
                            sequence?: any;
                        };
                        name?: string;
                        permissions?: string[];
                    }[];
                }): _485.QueryAccountsResponse;
            };
            QueryDepositsRequest: {
                encode(message: _485.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _485.QueryDepositsRequest;
                fromJSON(object: any): _485.QueryDepositsRequest;
                toJSON(message: _485.QueryDepositsRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                    owner?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _485.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _485.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _485.QueryDepositsResponse;
                fromJSON(object: any): _485.QueryDepositsResponse;
                toJSON(message: _485.QueryDepositsResponse): unknown;
                fromPartial(object: {
                    deposits?: {
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        index?: {
                            denom?: string;
                            value?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _485.QueryDepositsResponse;
            };
            QueryUnsyncedDepositsRequest: {
                encode(message: _485.QueryUnsyncedDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _485.QueryUnsyncedDepositsRequest;
                fromJSON(object: any): _485.QueryUnsyncedDepositsRequest;
                toJSON(message: _485.QueryUnsyncedDepositsRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                    owner?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _485.QueryUnsyncedDepositsRequest;
            };
            QueryUnsyncedDepositsResponse: {
                encode(message: _485.QueryUnsyncedDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _485.QueryUnsyncedDepositsResponse;
                fromJSON(object: any): _485.QueryUnsyncedDepositsResponse;
                toJSON(message: _485.QueryUnsyncedDepositsResponse): unknown;
                fromPartial(object: {
                    deposits?: {
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        index?: {
                            denom?: string;
                            value?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _485.QueryUnsyncedDepositsResponse;
            };
            QueryTotalDepositedRequest: {
                encode(message: _485.QueryTotalDepositedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _485.QueryTotalDepositedRequest;
                fromJSON(object: any): _485.QueryTotalDepositedRequest;
                toJSON(message: _485.QueryTotalDepositedRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _485.QueryTotalDepositedRequest;
            };
            QueryTotalDepositedResponse: {
                encode(message: _485.QueryTotalDepositedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _485.QueryTotalDepositedResponse;
                fromJSON(object: any): _485.QueryTotalDepositedResponse;
                toJSON(message: _485.QueryTotalDepositedResponse): unknown;
                fromPartial(object: {
                    suppliedCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _485.QueryTotalDepositedResponse;
            };
            QueryBorrowsRequest: {
                encode(message: _485.QueryBorrowsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _485.QueryBorrowsRequest;
                fromJSON(object: any): _485.QueryBorrowsRequest;
                toJSON(message: _485.QueryBorrowsRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                    owner?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _485.QueryBorrowsRequest;
            };
            QueryBorrowsResponse: {
                encode(message: _485.QueryBorrowsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _485.QueryBorrowsResponse;
                fromJSON(object: any): _485.QueryBorrowsResponse;
                toJSON(message: _485.QueryBorrowsResponse): unknown;
                fromPartial(object: {
                    borrows?: {
                        borrower?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        index?: {
                            denom?: string;
                            value?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _485.QueryBorrowsResponse;
            };
            QueryUnsyncedBorrowsRequest: {
                encode(message: _485.QueryUnsyncedBorrowsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _485.QueryUnsyncedBorrowsRequest;
                fromJSON(object: any): _485.QueryUnsyncedBorrowsRequest;
                toJSON(message: _485.QueryUnsyncedBorrowsRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                    owner?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _485.QueryUnsyncedBorrowsRequest;
            };
            QueryUnsyncedBorrowsResponse: {
                encode(message: _485.QueryUnsyncedBorrowsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _485.QueryUnsyncedBorrowsResponse;
                fromJSON(object: any): _485.QueryUnsyncedBorrowsResponse;
                toJSON(message: _485.QueryUnsyncedBorrowsResponse): unknown;
                fromPartial(object: {
                    borrows?: {
                        borrower?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        index?: {
                            denom?: string;
                            value?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _485.QueryUnsyncedBorrowsResponse;
            };
            QueryTotalBorrowedRequest: {
                encode(message: _485.QueryTotalBorrowedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _485.QueryTotalBorrowedRequest;
                fromJSON(object: any): _485.QueryTotalBorrowedRequest;
                toJSON(message: _485.QueryTotalBorrowedRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _485.QueryTotalBorrowedRequest;
            };
            QueryTotalBorrowedResponse: {
                encode(message: _485.QueryTotalBorrowedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _485.QueryTotalBorrowedResponse;
                fromJSON(object: any): _485.QueryTotalBorrowedResponse;
                toJSON(message: _485.QueryTotalBorrowedResponse): unknown;
                fromPartial(object: {
                    borrowedCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _485.QueryTotalBorrowedResponse;
            };
            QueryInterestRateRequest: {
                encode(message: _485.QueryInterestRateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _485.QueryInterestRateRequest;
                fromJSON(object: any): _485.QueryInterestRateRequest;
                toJSON(message: _485.QueryInterestRateRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _485.QueryInterestRateRequest;
            };
            QueryInterestRateResponse: {
                encode(message: _485.QueryInterestRateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _485.QueryInterestRateResponse;
                fromJSON(object: any): _485.QueryInterestRateResponse;
                toJSON(message: _485.QueryInterestRateResponse): unknown;
                fromPartial(object: {
                    interestRates?: {
                        denom?: string;
                        supplyInterestRate?: string;
                        borrowInterestRate?: string;
                    }[];
                }): _485.QueryInterestRateResponse;
            };
            QueryReservesRequest: {
                encode(message: _485.QueryReservesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _485.QueryReservesRequest;
                fromJSON(object: any): _485.QueryReservesRequest;
                toJSON(message: _485.QueryReservesRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _485.QueryReservesRequest;
            };
            QueryReservesResponse: {
                encode(message: _485.QueryReservesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _485.QueryReservesResponse;
                fromJSON(object: any): _485.QueryReservesResponse;
                toJSON(message: _485.QueryReservesResponse): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _485.QueryReservesResponse;
            };
            QueryInterestFactorsRequest: {
                encode(message: _485.QueryInterestFactorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _485.QueryInterestFactorsRequest;
                fromJSON(object: any): _485.QueryInterestFactorsRequest;
                toJSON(message: _485.QueryInterestFactorsRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _485.QueryInterestFactorsRequest;
            };
            QueryInterestFactorsResponse: {
                encode(message: _485.QueryInterestFactorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _485.QueryInterestFactorsResponse;
                fromJSON(object: any): _485.QueryInterestFactorsResponse;
                toJSON(message: _485.QueryInterestFactorsResponse): unknown;
                fromPartial(object: {
                    interestFactors?: {
                        denom?: string;
                        borrowInterestFactor?: string;
                        supplyInterestFactor?: string;
                    }[];
                }): _485.QueryInterestFactorsResponse;
            };
            DepositResponse: {
                encode(message: _485.DepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _485.DepositResponse;
                fromJSON(object: any): _485.DepositResponse;
                toJSON(message: _485.DepositResponse): unknown;
                fromPartial(object: {
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    index?: {
                        denom?: string;
                        value?: string;
                    }[];
                }): _485.DepositResponse;
            };
            SupplyInterestFactorResponse: {
                encode(message: _485.SupplyInterestFactorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _485.SupplyInterestFactorResponse;
                fromJSON(object: any): _485.SupplyInterestFactorResponse;
                toJSON(message: _485.SupplyInterestFactorResponse): unknown;
                fromPartial(object: {
                    denom?: string;
                    value?: string;
                }): _485.SupplyInterestFactorResponse;
            };
            BorrowResponse: {
                encode(message: _485.BorrowResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _485.BorrowResponse;
                fromJSON(object: any): _485.BorrowResponse;
                toJSON(message: _485.BorrowResponse): unknown;
                fromPartial(object: {
                    borrower?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    index?: {
                        denom?: string;
                        value?: string;
                    }[];
                }): _485.BorrowResponse;
            };
            BorrowInterestFactorResponse: {
                encode(message: _485.BorrowInterestFactorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _485.BorrowInterestFactorResponse;
                fromJSON(object: any): _485.BorrowInterestFactorResponse;
                toJSON(message: _485.BorrowInterestFactorResponse): unknown;
                fromPartial(object: {
                    denom?: string;
                    value?: string;
                }): _485.BorrowInterestFactorResponse;
            };
            MoneyMarketInterestRate: {
                encode(message: _485.MoneyMarketInterestRate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _485.MoneyMarketInterestRate;
                fromJSON(object: any): _485.MoneyMarketInterestRate;
                toJSON(message: _485.MoneyMarketInterestRate): unknown;
                fromPartial(object: {
                    denom?: string;
                    supplyInterestRate?: string;
                    borrowInterestRate?: string;
                }): _485.MoneyMarketInterestRate;
            };
            InterestFactor: {
                encode(message: _485.InterestFactor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _485.InterestFactor;
                fromJSON(object: any): _485.InterestFactor;
                toJSON(message: _485.InterestFactor): unknown;
                fromPartial(object: {
                    denom?: string;
                    borrowInterestFactor?: string;
                    supplyInterestFactor?: string;
                }): _485.InterestFactor;
            };
            Params: {
                encode(message: _484.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _484.Params;
                fromJSON(object: any): _484.Params;
                toJSON(message: _484.Params): unknown;
                fromPartial(object: {
                    moneyMarkets?: {
                        denom?: string;
                        borrowLimit?: {
                            hasMaxLimit?: boolean;
                            maximumLimit?: string;
                            loanToValue?: string;
                        };
                        spotMarketId?: string;
                        conversionFactor?: string;
                        interestRateModel?: {
                            baseRateApy?: string;
                            baseMultiplier?: string;
                            kink?: string;
                            jumpMultiplier?: string;
                        };
                        reserveFactor?: string;
                        keeperRewardPercentage?: string;
                    }[];
                    minimumBorrowUsdValue?: string;
                }): _484.Params;
            };
            MoneyMarket: {
                encode(message: _484.MoneyMarket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _484.MoneyMarket;
                fromJSON(object: any): _484.MoneyMarket;
                toJSON(message: _484.MoneyMarket): unknown;
                fromPartial(object: {
                    denom?: string;
                    borrowLimit?: {
                        hasMaxLimit?: boolean;
                        maximumLimit?: string;
                        loanToValue?: string;
                    };
                    spotMarketId?: string;
                    conversionFactor?: string;
                    interestRateModel?: {
                        baseRateApy?: string;
                        baseMultiplier?: string;
                        kink?: string;
                        jumpMultiplier?: string;
                    };
                    reserveFactor?: string;
                    keeperRewardPercentage?: string;
                }): _484.MoneyMarket;
            };
            BorrowLimit: {
                encode(message: _484.BorrowLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _484.BorrowLimit;
                fromJSON(object: any): _484.BorrowLimit;
                toJSON(message: _484.BorrowLimit): unknown;
                fromPartial(object: {
                    hasMaxLimit?: boolean;
                    maximumLimit?: string;
                    loanToValue?: string;
                }): _484.BorrowLimit;
            };
            InterestRateModel: {
                encode(message: _484.InterestRateModel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _484.InterestRateModel;
                fromJSON(object: any): _484.InterestRateModel;
                toJSON(message: _484.InterestRateModel): unknown;
                fromPartial(object: {
                    baseRateApy?: string;
                    baseMultiplier?: string;
                    kink?: string;
                    jumpMultiplier?: string;
                }): _484.InterestRateModel;
            };
            Deposit: {
                encode(message: _484.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _484.Deposit;
                fromJSON(object: any): _484.Deposit;
                toJSON(message: _484.Deposit): unknown;
                fromPartial(object: {
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    index?: {
                        denom?: string;
                        value?: string;
                    }[];
                }): _484.Deposit;
            };
            Borrow: {
                encode(message: _484.Borrow, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _484.Borrow;
                fromJSON(object: any): _484.Borrow;
                toJSON(message: _484.Borrow): unknown;
                fromPartial(object: {
                    borrower?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    index?: {
                        denom?: string;
                        value?: string;
                    }[];
                }): _484.Borrow;
            };
            SupplyInterestFactor: {
                encode(message: _484.SupplyInterestFactor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _484.SupplyInterestFactor;
                fromJSON(object: any): _484.SupplyInterestFactor;
                toJSON(message: _484.SupplyInterestFactor): unknown;
                fromPartial(object: {
                    denom?: string;
                    value?: string;
                }): _484.SupplyInterestFactor;
            };
            BorrowInterestFactor: {
                encode(message: _484.BorrowInterestFactor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _484.BorrowInterestFactor;
                fromJSON(object: any): _484.BorrowInterestFactor;
                toJSON(message: _484.BorrowInterestFactor): unknown;
                fromPartial(object: {
                    denom?: string;
                    value?: string;
                }): _484.BorrowInterestFactor;
            };
            CoinsProto: {
                encode(message: _484.CoinsProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _484.CoinsProto;
                fromJSON(object: any): _484.CoinsProto;
                toJSON(message: _484.CoinsProto): unknown;
                fromPartial(object: {
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _484.CoinsProto;
            };
            GenesisState: {
                encode(message: _483.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _483.GenesisState;
                fromJSON(object: any): _483.GenesisState;
                toJSON(message: _483.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        moneyMarkets?: {
                            denom?: string;
                            borrowLimit?: {
                                hasMaxLimit?: boolean;
                                maximumLimit?: string;
                                loanToValue?: string;
                            };
                            spotMarketId?: string;
                            conversionFactor?: string;
                            interestRateModel?: {
                                baseRateApy?: string;
                                baseMultiplier?: string;
                                kink?: string;
                                jumpMultiplier?: string;
                            };
                            reserveFactor?: string;
                            keeperRewardPercentage?: string;
                        }[];
                        minimumBorrowUsdValue?: string;
                    };
                    previousAccumulationTimes?: {
                        collateralType?: string;
                        previousAccumulationTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        supplyInterestFactor?: string;
                        borrowInterestFactor?: string;
                    }[];
                    deposits?: {
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        index?: {
                            denom?: string;
                            value?: string;
                        }[];
                    }[];
                    borrows?: {
                        borrower?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        index?: {
                            denom?: string;
                            value?: string;
                        }[];
                    }[];
                    totalSupplied?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    totalBorrowed?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    totalReserves?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _483.GenesisState;
            };
            GenesisAccumulationTime: {
                encode(message: _483.GenesisAccumulationTime, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _483.GenesisAccumulationTime;
                fromJSON(object: any): _483.GenesisAccumulationTime;
                toJSON(message: _483.GenesisAccumulationTime): unknown;
                fromPartial(object: {
                    collateralType?: string;
                    previousAccumulationTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    supplyInterestFactor?: string;
                    borrowInterestFactor?: string;
                }): _483.GenesisAccumulationTime;
            };
        };
    }
    namespace incentive {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    claimUSDXMintingReward(value: _490.MsgClaimUSDXMintingReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    claimHardReward(value: _490.MsgClaimHardReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    claimDelegatorReward(value: _490.MsgClaimDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    claimSwapReward(value: _490.MsgClaimSwapReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    claimSavingsReward(value: _490.MsgClaimSavingsReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    claimUSDXMintingReward(value: _490.MsgClaimUSDXMintingReward): {
                        typeUrl: string;
                        value: _490.MsgClaimUSDXMintingReward;
                    };
                    claimHardReward(value: _490.MsgClaimHardReward): {
                        typeUrl: string;
                        value: _490.MsgClaimHardReward;
                    };
                    claimDelegatorReward(value: _490.MsgClaimDelegatorReward): {
                        typeUrl: string;
                        value: _490.MsgClaimDelegatorReward;
                    };
                    claimSwapReward(value: _490.MsgClaimSwapReward): {
                        typeUrl: string;
                        value: _490.MsgClaimSwapReward;
                    };
                    claimSavingsReward(value: _490.MsgClaimSavingsReward): {
                        typeUrl: string;
                        value: _490.MsgClaimSavingsReward;
                    };
                };
                toJSON: {
                    claimUSDXMintingReward(value: _490.MsgClaimUSDXMintingReward): {
                        typeUrl: string;
                        value: unknown;
                    };
                    claimHardReward(value: _490.MsgClaimHardReward): {
                        typeUrl: string;
                        value: unknown;
                    };
                    claimDelegatorReward(value: _490.MsgClaimDelegatorReward): {
                        typeUrl: string;
                        value: unknown;
                    };
                    claimSwapReward(value: _490.MsgClaimSwapReward): {
                        typeUrl: string;
                        value: unknown;
                    };
                    claimSavingsReward(value: _490.MsgClaimSavingsReward): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    claimUSDXMintingReward(value: any): {
                        typeUrl: string;
                        value: _490.MsgClaimUSDXMintingReward;
                    };
                    claimHardReward(value: any): {
                        typeUrl: string;
                        value: _490.MsgClaimHardReward;
                    };
                    claimDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _490.MsgClaimDelegatorReward;
                    };
                    claimSwapReward(value: any): {
                        typeUrl: string;
                        value: _490.MsgClaimSwapReward;
                    };
                    claimSavingsReward(value: any): {
                        typeUrl: string;
                        value: _490.MsgClaimSavingsReward;
                    };
                };
                fromPartial: {
                    claimUSDXMintingReward(value: _490.MsgClaimUSDXMintingReward): {
                        typeUrl: string;
                        value: _490.MsgClaimUSDXMintingReward;
                    };
                    claimHardReward(value: _490.MsgClaimHardReward): {
                        typeUrl: string;
                        value: _490.MsgClaimHardReward;
                    };
                    claimDelegatorReward(value: _490.MsgClaimDelegatorReward): {
                        typeUrl: string;
                        value: _490.MsgClaimDelegatorReward;
                    };
                    claimSwapReward(value: _490.MsgClaimSwapReward): {
                        typeUrl: string;
                        value: _490.MsgClaimSwapReward;
                    };
                    claimSavingsReward(value: _490.MsgClaimSavingsReward): {
                        typeUrl: string;
                        value: _490.MsgClaimSavingsReward;
                    };
                };
            };
            AminoConverter: {
                "/kava.incentive.v1beta1.MsgClaimUSDXMintingReward": {
                    aminoType: string;
                    toAmino: ({ sender, multiplierName }: _490.MsgClaimUSDXMintingReward) => {
                        sender: string;
                        multiplier_name: string;
                    };
                    fromAmino: ({ sender, multiplier_name }: {
                        sender: string;
                        multiplier_name: string;
                    }) => _490.MsgClaimUSDXMintingReward;
                };
                "/kava.incentive.v1beta1.MsgClaimHardReward": {
                    aminoType: string;
                    toAmino: ({ sender, denomsToClaim }: _490.MsgClaimHardReward) => {
                        sender: string;
                        denoms_to_claim: {
                            denom: string;
                            multiplier_name: string;
                        }[];
                    };
                    fromAmino: ({ sender, denoms_to_claim }: {
                        sender: string;
                        denoms_to_claim: {
                            denom: string;
                            multiplier_name: string;
                        }[];
                    }) => _490.MsgClaimHardReward;
                };
                "/kava.incentive.v1beta1.MsgClaimDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ sender, denomsToClaim }: _490.MsgClaimDelegatorReward) => {
                        sender: string;
                        denoms_to_claim: {
                            denom: string;
                            multiplier_name: string;
                        }[];
                    };
                    fromAmino: ({ sender, denoms_to_claim }: {
                        sender: string;
                        denoms_to_claim: {
                            denom: string;
                            multiplier_name: string;
                        }[];
                    }) => _490.MsgClaimDelegatorReward;
                };
                "/kava.incentive.v1beta1.MsgClaimSwapReward": {
                    aminoType: string;
                    toAmino: ({ sender, denomsToClaim }: _490.MsgClaimSwapReward) => {
                        sender: string;
                        denoms_to_claim: {
                            denom: string;
                            multiplier_name: string;
                        }[];
                    };
                    fromAmino: ({ sender, denoms_to_claim }: {
                        sender: string;
                        denoms_to_claim: {
                            denom: string;
                            multiplier_name: string;
                        }[];
                    }) => _490.MsgClaimSwapReward;
                };
                "/kava.incentive.v1beta1.MsgClaimSavingsReward": {
                    aminoType: string;
                    toAmino: ({ sender, denomsToClaim }: _490.MsgClaimSavingsReward) => {
                        sender: string;
                        denoms_to_claim: {
                            denom: string;
                            multiplier_name: string;
                        }[];
                    };
                    fromAmino: ({ sender, denoms_to_claim }: {
                        sender: string;
                        denoms_to_claim: {
                            denom: string;
                            multiplier_name: string;
                        }[];
                    }) => _490.MsgClaimSavingsReward;
                };
            };
            Selection: {
                encode(message: _490.Selection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _490.Selection;
                fromJSON(object: any): _490.Selection;
                toJSON(message: _490.Selection): unknown;
                fromPartial(object: {
                    denom?: string;
                    multiplierName?: string;
                }): _490.Selection;
            };
            MsgClaimUSDXMintingReward: {
                encode(message: _490.MsgClaimUSDXMintingReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _490.MsgClaimUSDXMintingReward;
                fromJSON(object: any): _490.MsgClaimUSDXMintingReward;
                toJSON(message: _490.MsgClaimUSDXMintingReward): unknown;
                fromPartial(object: {
                    sender?: string;
                    multiplierName?: string;
                }): _490.MsgClaimUSDXMintingReward;
            };
            MsgClaimUSDXMintingRewardResponse: {
                encode(_: _490.MsgClaimUSDXMintingRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _490.MsgClaimUSDXMintingRewardResponse;
                fromJSON(_: any): _490.MsgClaimUSDXMintingRewardResponse;
                toJSON(_: _490.MsgClaimUSDXMintingRewardResponse): unknown;
                fromPartial(_: {}): _490.MsgClaimUSDXMintingRewardResponse;
            };
            MsgClaimHardReward: {
                encode(message: _490.MsgClaimHardReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _490.MsgClaimHardReward;
                fromJSON(object: any): _490.MsgClaimHardReward;
                toJSON(message: _490.MsgClaimHardReward): unknown;
                fromPartial(object: {
                    sender?: string;
                    denomsToClaim?: {
                        denom?: string;
                        multiplierName?: string;
                    }[];
                }): _490.MsgClaimHardReward;
            };
            MsgClaimHardRewardResponse: {
                encode(_: _490.MsgClaimHardRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _490.MsgClaimHardRewardResponse;
                fromJSON(_: any): _490.MsgClaimHardRewardResponse;
                toJSON(_: _490.MsgClaimHardRewardResponse): unknown;
                fromPartial(_: {}): _490.MsgClaimHardRewardResponse;
            };
            MsgClaimDelegatorReward: {
                encode(message: _490.MsgClaimDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _490.MsgClaimDelegatorReward;
                fromJSON(object: any): _490.MsgClaimDelegatorReward;
                toJSON(message: _490.MsgClaimDelegatorReward): unknown;
                fromPartial(object: {
                    sender?: string;
                    denomsToClaim?: {
                        denom?: string;
                        multiplierName?: string;
                    }[];
                }): _490.MsgClaimDelegatorReward;
            };
            MsgClaimDelegatorRewardResponse: {
                encode(_: _490.MsgClaimDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _490.MsgClaimDelegatorRewardResponse;
                fromJSON(_: any): _490.MsgClaimDelegatorRewardResponse;
                toJSON(_: _490.MsgClaimDelegatorRewardResponse): unknown;
                fromPartial(_: {}): _490.MsgClaimDelegatorRewardResponse;
            };
            MsgClaimSwapReward: {
                encode(message: _490.MsgClaimSwapReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _490.MsgClaimSwapReward;
                fromJSON(object: any): _490.MsgClaimSwapReward;
                toJSON(message: _490.MsgClaimSwapReward): unknown;
                fromPartial(object: {
                    sender?: string;
                    denomsToClaim?: {
                        denom?: string;
                        multiplierName?: string;
                    }[];
                }): _490.MsgClaimSwapReward;
            };
            MsgClaimSwapRewardResponse: {
                encode(_: _490.MsgClaimSwapRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _490.MsgClaimSwapRewardResponse;
                fromJSON(_: any): _490.MsgClaimSwapRewardResponse;
                toJSON(_: _490.MsgClaimSwapRewardResponse): unknown;
                fromPartial(_: {}): _490.MsgClaimSwapRewardResponse;
            };
            MsgClaimSavingsReward: {
                encode(message: _490.MsgClaimSavingsReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _490.MsgClaimSavingsReward;
                fromJSON(object: any): _490.MsgClaimSavingsReward;
                toJSON(message: _490.MsgClaimSavingsReward): unknown;
                fromPartial(object: {
                    sender?: string;
                    denomsToClaim?: {
                        denom?: string;
                        multiplierName?: string;
                    }[];
                }): _490.MsgClaimSavingsReward;
            };
            MsgClaimSavingsRewardResponse: {
                encode(_: _490.MsgClaimSavingsRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _490.MsgClaimSavingsRewardResponse;
                fromJSON(_: any): _490.MsgClaimSavingsRewardResponse;
                toJSON(_: _490.MsgClaimSavingsRewardResponse): unknown;
                fromPartial(_: {}): _490.MsgClaimSavingsRewardResponse;
            };
            RewardPeriod: {
                encode(message: _489.RewardPeriod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _489.RewardPeriod;
                fromJSON(object: any): _489.RewardPeriod;
                toJSON(message: _489.RewardPeriod): unknown;
                fromPartial(object: {
                    active?: boolean;
                    collateralType?: string;
                    start?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    end?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    rewardsPerSecond?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _489.RewardPeriod;
            };
            MultiRewardPeriod: {
                encode(message: _489.MultiRewardPeriod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _489.MultiRewardPeriod;
                fromJSON(object: any): _489.MultiRewardPeriod;
                toJSON(message: _489.MultiRewardPeriod): unknown;
                fromPartial(object: {
                    active?: boolean;
                    collateralType?: string;
                    start?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    end?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    rewardsPerSecond?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _489.MultiRewardPeriod;
            };
            Multiplier: {
                encode(message: _489.Multiplier, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _489.Multiplier;
                fromJSON(object: any): _489.Multiplier;
                toJSON(message: _489.Multiplier): unknown;
                fromPartial(object: {
                    name?: string;
                    monthsLockup?: any;
                    factor?: Uint8Array;
                }): _489.Multiplier;
            };
            MultipliersPerDenom: {
                encode(message: _489.MultipliersPerDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _489.MultipliersPerDenom;
                fromJSON(object: any): _489.MultipliersPerDenom;
                toJSON(message: _489.MultipliersPerDenom): unknown;
                fromPartial(object: {
                    denom?: string;
                    multipliers?: {
                        name?: string;
                        monthsLockup?: any;
                        factor?: Uint8Array;
                    }[];
                }): _489.MultipliersPerDenom;
            };
            Params: {
                encode(message: _489.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _489.Params;
                fromJSON(object: any): _489.Params;
                toJSON(message: _489.Params): unknown;
                fromPartial(object: {
                    usdxMintingRewardPeriods?: {
                        active?: boolean;
                        collateralType?: string;
                        start?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        end?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        rewardsPerSecond?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    hardSupplyRewardPeriods?: {
                        active?: boolean;
                        collateralType?: string;
                        start?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        end?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        rewardsPerSecond?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    hardBorrowRewardPeriods?: {
                        active?: boolean;
                        collateralType?: string;
                        start?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        end?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        rewardsPerSecond?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    delegatorRewardPeriods?: {
                        active?: boolean;
                        collateralType?: string;
                        start?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        end?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        rewardsPerSecond?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    swapRewardPeriods?: {
                        active?: boolean;
                        collateralType?: string;
                        start?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        end?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        rewardsPerSecond?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    claimMultipliers?: {
                        denom?: string;
                        multipliers?: {
                            name?: string;
                            monthsLockup?: any;
                            factor?: Uint8Array;
                        }[];
                    }[];
                    claimEnd?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    savingsRewardPeriods?: {
                        active?: boolean;
                        collateralType?: string;
                        start?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        end?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        rewardsPerSecond?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _489.Params;
            };
            AccumulationTime: {
                encode(message: _488.AccumulationTime, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _488.AccumulationTime;
                fromJSON(object: any): _488.AccumulationTime;
                toJSON(message: _488.AccumulationTime): unknown;
                fromPartial(object: {
                    collateralType?: string;
                    previousAccumulationTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _488.AccumulationTime;
            };
            GenesisRewardState: {
                encode(message: _488.GenesisRewardState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _488.GenesisRewardState;
                fromJSON(object: any): _488.GenesisRewardState;
                toJSON(message: _488.GenesisRewardState): unknown;
                fromPartial(object: {
                    accumulationTimes?: {
                        collateralType?: string;
                        previousAccumulationTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    multiRewardIndexes?: {
                        collateralType?: string;
                        rewardIndexes?: {
                            collateralType?: string;
                            rewardFactor?: Uint8Array;
                        }[];
                    }[];
                }): _488.GenesisRewardState;
            };
            GenesisState: {
                encode(message: _488.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _488.GenesisState;
                fromJSON(object: any): _488.GenesisState;
                toJSON(message: _488.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        usdxMintingRewardPeriods?: {
                            active?: boolean;
                            collateralType?: string;
                            start?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            end?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            rewardsPerSecond?: {
                                denom?: string;
                                amount?: string;
                            };
                        }[];
                        hardSupplyRewardPeriods?: {
                            active?: boolean;
                            collateralType?: string;
                            start?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            end?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            rewardsPerSecond?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        }[];
                        hardBorrowRewardPeriods?: {
                            active?: boolean;
                            collateralType?: string;
                            start?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            end?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            rewardsPerSecond?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        }[];
                        delegatorRewardPeriods?: {
                            active?: boolean;
                            collateralType?: string;
                            start?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            end?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            rewardsPerSecond?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        }[];
                        swapRewardPeriods?: {
                            active?: boolean;
                            collateralType?: string;
                            start?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            end?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            rewardsPerSecond?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        }[];
                        claimMultipliers?: {
                            denom?: string;
                            multipliers?: {
                                name?: string;
                                monthsLockup?: any;
                                factor?: Uint8Array;
                            }[];
                        }[];
                        claimEnd?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        savingsRewardPeriods?: {
                            active?: boolean;
                            collateralType?: string;
                            start?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            end?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            rewardsPerSecond?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        }[];
                    };
                    usdxRewardState?: {
                        accumulationTimes?: {
                            collateralType?: string;
                            previousAccumulationTime?: {
                                seconds?: any;
                                nanos?: number;
                            };
                        }[];
                        multiRewardIndexes?: {
                            collateralType?: string;
                            rewardIndexes?: {
                                collateralType?: string;
                                rewardFactor?: Uint8Array;
                            }[];
                        }[];
                    };
                    hardSupplyRewardState?: {
                        accumulationTimes?: {
                            collateralType?: string;
                            previousAccumulationTime?: {
                                seconds?: any;
                                nanos?: number;
                            };
                        }[];
                        multiRewardIndexes?: {
                            collateralType?: string;
                            rewardIndexes?: {
                                collateralType?: string;
                                rewardFactor?: Uint8Array;
                            }[];
                        }[];
                    };
                    hardBorrowRewardState?: {
                        accumulationTimes?: {
                            collateralType?: string;
                            previousAccumulationTime?: {
                                seconds?: any;
                                nanos?: number;
                            };
                        }[];
                        multiRewardIndexes?: {
                            collateralType?: string;
                            rewardIndexes?: {
                                collateralType?: string;
                                rewardFactor?: Uint8Array;
                            }[];
                        }[];
                    };
                    delegatorRewardState?: {
                        accumulationTimes?: {
                            collateralType?: string;
                            previousAccumulationTime?: {
                                seconds?: any;
                                nanos?: number;
                            };
                        }[];
                        multiRewardIndexes?: {
                            collateralType?: string;
                            rewardIndexes?: {
                                collateralType?: string;
                                rewardFactor?: Uint8Array;
                            }[];
                        }[];
                    };
                    swapRewardState?: {
                        accumulationTimes?: {
                            collateralType?: string;
                            previousAccumulationTime?: {
                                seconds?: any;
                                nanos?: number;
                            };
                        }[];
                        multiRewardIndexes?: {
                            collateralType?: string;
                            rewardIndexes?: {
                                collateralType?: string;
                                rewardFactor?: Uint8Array;
                            }[];
                        }[];
                    };
                    usdxMintingClaims?: {
                        baseClaim?: {
                            owner?: Uint8Array;
                            reward?: {
                                denom?: string;
                                amount?: string;
                            };
                        };
                        rewardIndexes?: {
                            collateralType?: string;
                            rewardFactor?: Uint8Array;
                        }[];
                    }[];
                    hardLiquidityProviderClaims?: {
                        baseClaim?: {
                            owner?: Uint8Array;
                            reward?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                        supplyRewardIndexes?: {
                            collateralType?: string;
                            rewardIndexes?: {
                                collateralType?: string;
                                rewardFactor?: Uint8Array;
                            }[];
                        }[];
                        borrowRewardIndexes?: {
                            collateralType?: string;
                            rewardIndexes?: {
                                collateralType?: string;
                                rewardFactor?: Uint8Array;
                            }[];
                        }[];
                    }[];
                    delegatorClaims?: {
                        baseClaim?: {
                            owner?: Uint8Array;
                            reward?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                        rewardIndexes?: {
                            collateralType?: string;
                            rewardIndexes?: {
                                collateralType?: string;
                                rewardFactor?: Uint8Array;
                            }[];
                        }[];
                    }[];
                    swapClaims?: {
                        baseClaim?: {
                            owner?: Uint8Array;
                            reward?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                        rewardIndexes?: {
                            collateralType?: string;
                            rewardIndexes?: {
                                collateralType?: string;
                                rewardFactor?: Uint8Array;
                            }[];
                        }[];
                    }[];
                    savingsRewardState?: {
                        accumulationTimes?: {
                            collateralType?: string;
                            previousAccumulationTime?: {
                                seconds?: any;
                                nanos?: number;
                            };
                        }[];
                        multiRewardIndexes?: {
                            collateralType?: string;
                            rewardIndexes?: {
                                collateralType?: string;
                                rewardFactor?: Uint8Array;
                            }[];
                        }[];
                    };
                    savingsClaims?: {
                        baseClaim?: {
                            owner?: Uint8Array;
                            reward?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                        rewardIndexes?: {
                            collateralType?: string;
                            rewardIndexes?: {
                                collateralType?: string;
                                rewardFactor?: Uint8Array;
                            }[];
                        }[];
                    }[];
                }): _488.GenesisState;
            };
            BaseClaim: {
                encode(message: _487.BaseClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _487.BaseClaim;
                fromJSON(object: any): _487.BaseClaim;
                toJSON(message: _487.BaseClaim): unknown;
                fromPartial(object: {
                    owner?: Uint8Array;
                    reward?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _487.BaseClaim;
            };
            BaseMultiClaim: {
                encode(message: _487.BaseMultiClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _487.BaseMultiClaim;
                fromJSON(object: any): _487.BaseMultiClaim;
                toJSON(message: _487.BaseMultiClaim): unknown;
                fromPartial(object: {
                    owner?: Uint8Array;
                    reward?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _487.BaseMultiClaim;
            };
            RewardIndex: {
                encode(message: _487.RewardIndex, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _487.RewardIndex;
                fromJSON(object: any): _487.RewardIndex;
                toJSON(message: _487.RewardIndex): unknown;
                fromPartial(object: {
                    collateralType?: string;
                    rewardFactor?: Uint8Array;
                }): _487.RewardIndex;
            };
            RewardIndexesProto: {
                encode(message: _487.RewardIndexesProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _487.RewardIndexesProto;
                fromJSON(object: any): _487.RewardIndexesProto;
                toJSON(message: _487.RewardIndexesProto): unknown;
                fromPartial(object: {
                    rewardIndexes?: {
                        collateralType?: string;
                        rewardFactor?: Uint8Array;
                    }[];
                }): _487.RewardIndexesProto;
            };
            MultiRewardIndex: {
                encode(message: _487.MultiRewardIndex, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _487.MultiRewardIndex;
                fromJSON(object: any): _487.MultiRewardIndex;
                toJSON(message: _487.MultiRewardIndex): unknown;
                fromPartial(object: {
                    collateralType?: string;
                    rewardIndexes?: {
                        collateralType?: string;
                        rewardFactor?: Uint8Array;
                    }[];
                }): _487.MultiRewardIndex;
            };
            MultiRewardIndexesProto: {
                encode(message: _487.MultiRewardIndexesProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _487.MultiRewardIndexesProto;
                fromJSON(object: any): _487.MultiRewardIndexesProto;
                toJSON(message: _487.MultiRewardIndexesProto): unknown;
                fromPartial(object: {
                    multiRewardIndexes?: {
                        collateralType?: string;
                        rewardIndexes?: {
                            collateralType?: string;
                            rewardFactor?: Uint8Array;
                        }[];
                    }[];
                }): _487.MultiRewardIndexesProto;
            };
            USDXMintingClaim: {
                encode(message: _487.USDXMintingClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _487.USDXMintingClaim;
                fromJSON(object: any): _487.USDXMintingClaim;
                toJSON(message: _487.USDXMintingClaim): unknown;
                fromPartial(object: {
                    baseClaim?: {
                        owner?: Uint8Array;
                        reward?: {
                            denom?: string;
                            amount?: string;
                        };
                    };
                    rewardIndexes?: {
                        collateralType?: string;
                        rewardFactor?: Uint8Array;
                    }[];
                }): _487.USDXMintingClaim;
            };
            HardLiquidityProviderClaim: {
                encode(message: _487.HardLiquidityProviderClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _487.HardLiquidityProviderClaim;
                fromJSON(object: any): _487.HardLiquidityProviderClaim;
                toJSON(message: _487.HardLiquidityProviderClaim): unknown;
                fromPartial(object: {
                    baseClaim?: {
                        owner?: Uint8Array;
                        reward?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                    supplyRewardIndexes?: {
                        collateralType?: string;
                        rewardIndexes?: {
                            collateralType?: string;
                            rewardFactor?: Uint8Array;
                        }[];
                    }[];
                    borrowRewardIndexes?: {
                        collateralType?: string;
                        rewardIndexes?: {
                            collateralType?: string;
                            rewardFactor?: Uint8Array;
                        }[];
                    }[];
                }): _487.HardLiquidityProviderClaim;
            };
            DelegatorClaim: {
                encode(message: _487.DelegatorClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _487.DelegatorClaim;
                fromJSON(object: any): _487.DelegatorClaim;
                toJSON(message: _487.DelegatorClaim): unknown;
                fromPartial(object: {
                    baseClaim?: {
                        owner?: Uint8Array;
                        reward?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                    rewardIndexes?: {
                        collateralType?: string;
                        rewardIndexes?: {
                            collateralType?: string;
                            rewardFactor?: Uint8Array;
                        }[];
                    }[];
                }): _487.DelegatorClaim;
            };
            SwapClaim: {
                encode(message: _487.SwapClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _487.SwapClaim;
                fromJSON(object: any): _487.SwapClaim;
                toJSON(message: _487.SwapClaim): unknown;
                fromPartial(object: {
                    baseClaim?: {
                        owner?: Uint8Array;
                        reward?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                    rewardIndexes?: {
                        collateralType?: string;
                        rewardIndexes?: {
                            collateralType?: string;
                            rewardFactor?: Uint8Array;
                        }[];
                    }[];
                }): _487.SwapClaim;
            };
            SavingsClaim: {
                encode(message: _487.SavingsClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _487.SavingsClaim;
                fromJSON(object: any): _487.SavingsClaim;
                toJSON(message: _487.SavingsClaim): unknown;
                fromPartial(object: {
                    baseClaim?: {
                        owner?: Uint8Array;
                        reward?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                    rewardIndexes?: {
                        collateralType?: string;
                        rewardIndexes?: {
                            collateralType?: string;
                            rewardFactor?: Uint8Array;
                        }[];
                    }[];
                }): _487.SavingsClaim;
            };
        };
    }
    namespace issuance {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    issueTokens(value: _493.MsgIssueTokens): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    redeemTokens(value: _493.MsgRedeemTokens): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    blockAddress(value: _493.MsgBlockAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unblockAddress(value: _493.MsgUnblockAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setPauseStatus(value: _493.MsgSetPauseStatus): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    issueTokens(value: _493.MsgIssueTokens): {
                        typeUrl: string;
                        value: _493.MsgIssueTokens;
                    };
                    redeemTokens(value: _493.MsgRedeemTokens): {
                        typeUrl: string;
                        value: _493.MsgRedeemTokens;
                    };
                    blockAddress(value: _493.MsgBlockAddress): {
                        typeUrl: string;
                        value: _493.MsgBlockAddress;
                    };
                    unblockAddress(value: _493.MsgUnblockAddress): {
                        typeUrl: string;
                        value: _493.MsgUnblockAddress;
                    };
                    setPauseStatus(value: _493.MsgSetPauseStatus): {
                        typeUrl: string;
                        value: _493.MsgSetPauseStatus;
                    };
                };
                toJSON: {
                    issueTokens(value: _493.MsgIssueTokens): {
                        typeUrl: string;
                        value: unknown;
                    };
                    redeemTokens(value: _493.MsgRedeemTokens): {
                        typeUrl: string;
                        value: unknown;
                    };
                    blockAddress(value: _493.MsgBlockAddress): {
                        typeUrl: string;
                        value: unknown;
                    };
                    unblockAddress(value: _493.MsgUnblockAddress): {
                        typeUrl: string;
                        value: unknown;
                    };
                    setPauseStatus(value: _493.MsgSetPauseStatus): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    issueTokens(value: any): {
                        typeUrl: string;
                        value: _493.MsgIssueTokens;
                    };
                    redeemTokens(value: any): {
                        typeUrl: string;
                        value: _493.MsgRedeemTokens;
                    };
                    blockAddress(value: any): {
                        typeUrl: string;
                        value: _493.MsgBlockAddress;
                    };
                    unblockAddress(value: any): {
                        typeUrl: string;
                        value: _493.MsgUnblockAddress;
                    };
                    setPauseStatus(value: any): {
                        typeUrl: string;
                        value: _493.MsgSetPauseStatus;
                    };
                };
                fromPartial: {
                    issueTokens(value: _493.MsgIssueTokens): {
                        typeUrl: string;
                        value: _493.MsgIssueTokens;
                    };
                    redeemTokens(value: _493.MsgRedeemTokens): {
                        typeUrl: string;
                        value: _493.MsgRedeemTokens;
                    };
                    blockAddress(value: _493.MsgBlockAddress): {
                        typeUrl: string;
                        value: _493.MsgBlockAddress;
                    };
                    unblockAddress(value: _493.MsgUnblockAddress): {
                        typeUrl: string;
                        value: _493.MsgUnblockAddress;
                    };
                    setPauseStatus(value: _493.MsgSetPauseStatus): {
                        typeUrl: string;
                        value: _493.MsgSetPauseStatus;
                    };
                };
            };
            AminoConverter: {
                "/kava.issuance.v1beta1.MsgIssueTokens": {
                    aminoType: string;
                    toAmino: ({ sender, tokens, receiver }: _493.MsgIssueTokens) => {
                        sender: string;
                        tokens: {
                            denom: string;
                            amount: string;
                        };
                        receiver: string;
                    };
                    fromAmino: ({ sender, tokens, receiver }: {
                        sender: string;
                        tokens: {
                            denom: string;
                            amount: string;
                        };
                        receiver: string;
                    }) => _493.MsgIssueTokens;
                };
                "/kava.issuance.v1beta1.MsgRedeemTokens": {
                    aminoType: string;
                    toAmino: ({ sender, tokens }: _493.MsgRedeemTokens) => {
                        sender: string;
                        tokens: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ sender, tokens }: {
                        sender: string;
                        tokens: {
                            denom: string;
                            amount: string;
                        };
                    }) => _493.MsgRedeemTokens;
                };
                "/kava.issuance.v1beta1.MsgBlockAddress": {
                    aminoType: string;
                    toAmino: ({ sender, denom, blockedAddress }: _493.MsgBlockAddress) => {
                        sender: string;
                        denom: string;
                        blocked_address: string;
                    };
                    fromAmino: ({ sender, denom, blocked_address }: {
                        sender: string;
                        denom: string;
                        blocked_address: string;
                    }) => _493.MsgBlockAddress;
                };
                "/kava.issuance.v1beta1.MsgUnblockAddress": {
                    aminoType: string;
                    toAmino: ({ sender, denom, blockedAddress }: _493.MsgUnblockAddress) => {
                        sender: string;
                        denom: string;
                        blocked_address: string;
                    };
                    fromAmino: ({ sender, denom, blocked_address }: {
                        sender: string;
                        denom: string;
                        blocked_address: string;
                    }) => _493.MsgUnblockAddress;
                };
                "/kava.issuance.v1beta1.MsgSetPauseStatus": {
                    aminoType: string;
                    toAmino: ({ sender, denom, status }: _493.MsgSetPauseStatus) => {
                        sender: string;
                        denom: string;
                        status: boolean;
                    };
                    fromAmino: ({ sender, denom, status }: {
                        sender: string;
                        denom: string;
                        status: boolean;
                    }) => _493.MsgSetPauseStatus;
                };
            };
            MsgIssueTokens: {
                encode(message: _493.MsgIssueTokens, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _493.MsgIssueTokens;
                fromJSON(object: any): _493.MsgIssueTokens;
                toJSON(message: _493.MsgIssueTokens): unknown;
                fromPartial(object: {
                    sender?: string;
                    tokens?: {
                        denom?: string;
                        amount?: string;
                    };
                    receiver?: string;
                }): _493.MsgIssueTokens;
            };
            MsgIssueTokensResponse: {
                encode(_: _493.MsgIssueTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _493.MsgIssueTokensResponse;
                fromJSON(_: any): _493.MsgIssueTokensResponse;
                toJSON(_: _493.MsgIssueTokensResponse): unknown;
                fromPartial(_: {}): _493.MsgIssueTokensResponse;
            };
            MsgRedeemTokens: {
                encode(message: _493.MsgRedeemTokens, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _493.MsgRedeemTokens;
                fromJSON(object: any): _493.MsgRedeemTokens;
                toJSON(message: _493.MsgRedeemTokens): unknown;
                fromPartial(object: {
                    sender?: string;
                    tokens?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _493.MsgRedeemTokens;
            };
            MsgRedeemTokensResponse: {
                encode(_: _493.MsgRedeemTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _493.MsgRedeemTokensResponse;
                fromJSON(_: any): _493.MsgRedeemTokensResponse;
                toJSON(_: _493.MsgRedeemTokensResponse): unknown;
                fromPartial(_: {}): _493.MsgRedeemTokensResponse;
            };
            MsgBlockAddress: {
                encode(message: _493.MsgBlockAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _493.MsgBlockAddress;
                fromJSON(object: any): _493.MsgBlockAddress;
                toJSON(message: _493.MsgBlockAddress): unknown;
                fromPartial(object: {
                    sender?: string;
                    denom?: string;
                    blockedAddress?: string;
                }): _493.MsgBlockAddress;
            };
            MsgBlockAddressResponse: {
                encode(_: _493.MsgBlockAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _493.MsgBlockAddressResponse;
                fromJSON(_: any): _493.MsgBlockAddressResponse;
                toJSON(_: _493.MsgBlockAddressResponse): unknown;
                fromPartial(_: {}): _493.MsgBlockAddressResponse;
            };
            MsgUnblockAddress: {
                encode(message: _493.MsgUnblockAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _493.MsgUnblockAddress;
                fromJSON(object: any): _493.MsgUnblockAddress;
                toJSON(message: _493.MsgUnblockAddress): unknown;
                fromPartial(object: {
                    sender?: string;
                    denom?: string;
                    blockedAddress?: string;
                }): _493.MsgUnblockAddress;
            };
            MsgUnblockAddressResponse: {
                encode(_: _493.MsgUnblockAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _493.MsgUnblockAddressResponse;
                fromJSON(_: any): _493.MsgUnblockAddressResponse;
                toJSON(_: _493.MsgUnblockAddressResponse): unknown;
                fromPartial(_: {}): _493.MsgUnblockAddressResponse;
            };
            MsgSetPauseStatus: {
                encode(message: _493.MsgSetPauseStatus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _493.MsgSetPauseStatus;
                fromJSON(object: any): _493.MsgSetPauseStatus;
                toJSON(message: _493.MsgSetPauseStatus): unknown;
                fromPartial(object: {
                    sender?: string;
                    denom?: string;
                    status?: boolean;
                }): _493.MsgSetPauseStatus;
            };
            MsgSetPauseStatusResponse: {
                encode(_: _493.MsgSetPauseStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _493.MsgSetPauseStatusResponse;
                fromJSON(_: any): _493.MsgSetPauseStatusResponse;
                toJSON(_: _493.MsgSetPauseStatusResponse): unknown;
                fromPartial(_: {}): _493.MsgSetPauseStatusResponse;
            };
            QueryParamsRequest: {
                encode(_: _492.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _492.QueryParamsRequest;
                fromJSON(_: any): _492.QueryParamsRequest;
                toJSON(_: _492.QueryParamsRequest): unknown;
                fromPartial(_: {}): _492.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _492.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _492.QueryParamsResponse;
                fromJSON(object: any): _492.QueryParamsResponse;
                toJSON(message: _492.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        assets?: {
                            owner?: string;
                            denom?: string;
                            blockedAddresses?: string[];
                            paused?: boolean;
                            blockable?: boolean;
                            rateLimit?: {
                                active?: boolean;
                                limit?: Uint8Array;
                                timePeriod?: {
                                    seconds?: any;
                                    nanos?: number;
                                };
                            };
                        }[];
                    };
                }): _492.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _491.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _491.GenesisState;
                fromJSON(object: any): _491.GenesisState;
                toJSON(message: _491.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        assets?: {
                            owner?: string;
                            denom?: string;
                            blockedAddresses?: string[];
                            paused?: boolean;
                            blockable?: boolean;
                            rateLimit?: {
                                active?: boolean;
                                limit?: Uint8Array;
                                timePeriod?: {
                                    seconds?: any;
                                    nanos?: number;
                                };
                            };
                        }[];
                    };
                    supplies?: {
                        currentSupply?: {
                            denom?: string;
                            amount?: string;
                        };
                        timeElapsed?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                }): _491.GenesisState;
            };
            Params: {
                encode(message: _491.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _491.Params;
                fromJSON(object: any): _491.Params;
                toJSON(message: _491.Params): unknown;
                fromPartial(object: {
                    assets?: {
                        owner?: string;
                        denom?: string;
                        blockedAddresses?: string[];
                        paused?: boolean;
                        blockable?: boolean;
                        rateLimit?: {
                            active?: boolean;
                            limit?: Uint8Array;
                            timePeriod?: {
                                seconds?: any;
                                nanos?: number;
                            };
                        };
                    }[];
                }): _491.Params;
            };
            Asset: {
                encode(message: _491.Asset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _491.Asset;
                fromJSON(object: any): _491.Asset;
                toJSON(message: _491.Asset): unknown;
                fromPartial(object: {
                    owner?: string;
                    denom?: string;
                    blockedAddresses?: string[];
                    paused?: boolean;
                    blockable?: boolean;
                    rateLimit?: {
                        active?: boolean;
                        limit?: Uint8Array;
                        timePeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                }): _491.Asset;
            };
            RateLimit: {
                encode(message: _491.RateLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _491.RateLimit;
                fromJSON(object: any): _491.RateLimit;
                toJSON(message: _491.RateLimit): unknown;
                fromPartial(object: {
                    active?: boolean;
                    limit?: Uint8Array;
                    timePeriod?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _491.RateLimit;
            };
            AssetSupply: {
                encode(message: _491.AssetSupply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _491.AssetSupply;
                fromJSON(object: any): _491.AssetSupply;
                toJSON(message: _491.AssetSupply): unknown;
                fromPartial(object: {
                    currentSupply?: {
                        denom?: string;
                        amount?: string;
                    };
                    timeElapsed?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _491.AssetSupply;
            };
        };
    }
    namespace kavadist {
        const v1beta1: {
            QueryParamsRequest: {
                encode(_: _497.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _497.QueryParamsRequest;
                fromJSON(_: any): _497.QueryParamsRequest;
                toJSON(_: _497.QueryParamsRequest): unknown;
                fromPartial(_: {}): _497.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _497.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _497.QueryParamsResponse;
                fromJSON(object: any): _497.QueryParamsResponse;
                toJSON(message: _497.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        active?: boolean;
                        periods?: {
                            start?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            end?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            inflation?: Uint8Array;
                        }[];
                    };
                }): _497.QueryParamsResponse;
            };
            QueryBalanceRequest: {
                encode(_: _497.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _497.QueryBalanceRequest;
                fromJSON(_: any): _497.QueryBalanceRequest;
                toJSON(_: _497.QueryBalanceRequest): unknown;
                fromPartial(_: {}): _497.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _497.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _497.QueryBalanceResponse;
                fromJSON(object: any): _497.QueryBalanceResponse;
                toJSON(message: _497.QueryBalanceResponse): unknown;
                fromPartial(object: {
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _497.QueryBalanceResponse;
            };
            CommunityPoolMultiSpendProposal: {
                encode(message: _496.CommunityPoolMultiSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _496.CommunityPoolMultiSpendProposal;
                fromJSON(object: any): _496.CommunityPoolMultiSpendProposal;
                toJSON(message: _496.CommunityPoolMultiSpendProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    recipientList?: {
                        address?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _496.CommunityPoolMultiSpendProposal;
            };
            CommunityPoolMultiSpendProposalJSON: {
                encode(message: _496.CommunityPoolMultiSpendProposalJSON, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _496.CommunityPoolMultiSpendProposalJSON;
                fromJSON(object: any): _496.CommunityPoolMultiSpendProposalJSON;
                toJSON(message: _496.CommunityPoolMultiSpendProposalJSON): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    recipientList?: {
                        address?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    deposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _496.CommunityPoolMultiSpendProposalJSON;
            };
            MultiSpendRecipient: {
                encode(message: _496.MultiSpendRecipient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _496.MultiSpendRecipient;
                fromJSON(object: any): _496.MultiSpendRecipient;
                toJSON(message: _496.MultiSpendRecipient): unknown;
                fromPartial(object: {
                    address?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _496.MultiSpendRecipient;
            };
            Params: {
                encode(message: _495.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _495.Params;
                fromJSON(object: any): _495.Params;
                toJSON(message: _495.Params): unknown;
                fromPartial(object: {
                    active?: boolean;
                    periods?: {
                        start?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        end?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        inflation?: Uint8Array;
                    }[];
                }): _495.Params;
            };
            Period: {
                encode(message: _495.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _495.Period;
                fromJSON(object: any): _495.Period;
                toJSON(message: _495.Period): unknown;
                fromPartial(object: {
                    start?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    end?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    inflation?: Uint8Array;
                }): _495.Period;
            };
            GenesisState: {
                encode(message: _494.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _494.GenesisState;
                fromJSON(object: any): _494.GenesisState;
                toJSON(message: _494.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        active?: boolean;
                        periods?: {
                            start?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            end?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            inflation?: Uint8Array;
                        }[];
                    };
                    previousBlockTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _494.GenesisState;
            };
        };
    }
    namespace pricefeed {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    postPrice(value: _501.MsgPostPrice): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    postPrice(value: _501.MsgPostPrice): {
                        typeUrl: string;
                        value: _501.MsgPostPrice;
                    };
                };
                toJSON: {
                    postPrice(value: _501.MsgPostPrice): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    postPrice(value: any): {
                        typeUrl: string;
                        value: _501.MsgPostPrice;
                    };
                };
                fromPartial: {
                    postPrice(value: _501.MsgPostPrice): {
                        typeUrl: string;
                        value: _501.MsgPostPrice;
                    };
                };
            };
            AminoConverter: {
                "/kava.pricefeed.v1beta1.MsgPostPrice": {
                    aminoType: string;
                    toAmino: ({ from, marketId, price, expiry }: _501.MsgPostPrice) => {
                        from: string;
                        market_id: string;
                        price: string;
                        expiry: {
                            seconds: string;
                            nanos: number;
                        };
                    };
                    fromAmino: ({ from, market_id, price, expiry }: {
                        from: string;
                        market_id: string;
                        price: string;
                        expiry: {
                            seconds: string;
                            nanos: number;
                        };
                    }) => _501.MsgPostPrice;
                };
            };
            MsgPostPrice: {
                encode(message: _501.MsgPostPrice, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _501.MsgPostPrice;
                fromJSON(object: any): _501.MsgPostPrice;
                toJSON(message: _501.MsgPostPrice): unknown;
                fromPartial(object: {
                    from?: string;
                    marketId?: string;
                    price?: string;
                    expiry?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _501.MsgPostPrice;
            };
            MsgPostPriceResponse: {
                encode(_: _501.MsgPostPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _501.MsgPostPriceResponse;
                fromJSON(_: any): _501.MsgPostPriceResponse;
                toJSON(_: _501.MsgPostPriceResponse): unknown;
                fromPartial(_: {}): _501.MsgPostPriceResponse;
            };
            Params: {
                encode(message: _500.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _500.Params;
                fromJSON(object: any): _500.Params;
                toJSON(message: _500.Params): unknown;
                fromPartial(object: {
                    markets?: {
                        marketId?: string;
                        baseAsset?: string;
                        quoteAsset?: string;
                        oracles?: Uint8Array[];
                        active?: boolean;
                    }[];
                }): _500.Params;
            };
            Market: {
                encode(message: _500.Market, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _500.Market;
                fromJSON(object: any): _500.Market;
                toJSON(message: _500.Market): unknown;
                fromPartial(object: {
                    marketId?: string;
                    baseAsset?: string;
                    quoteAsset?: string;
                    oracles?: Uint8Array[];
                    active?: boolean;
                }): _500.Market;
            };
            PostedPrice: {
                encode(message: _500.PostedPrice, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _500.PostedPrice;
                fromJSON(object: any): _500.PostedPrice;
                toJSON(message: _500.PostedPrice): unknown;
                fromPartial(object: {
                    marketId?: string;
                    oracleAddress?: Uint8Array;
                    price?: string;
                    expiry?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _500.PostedPrice;
            };
            CurrentPrice: {
                encode(message: _500.CurrentPrice, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _500.CurrentPrice;
                fromJSON(object: any): _500.CurrentPrice;
                toJSON(message: _500.CurrentPrice): unknown;
                fromPartial(object: {
                    marketId?: string;
                    price?: string;
                }): _500.CurrentPrice;
            };
            QueryParamsRequest: {
                encode(_: _499.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _499.QueryParamsRequest;
                fromJSON(_: any): _499.QueryParamsRequest;
                toJSON(_: _499.QueryParamsRequest): unknown;
                fromPartial(_: {}): _499.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _499.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _499.QueryParamsResponse;
                fromJSON(object: any): _499.QueryParamsResponse;
                toJSON(message: _499.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        markets?: {
                            marketId?: string;
                            baseAsset?: string;
                            quoteAsset?: string;
                            oracles?: Uint8Array[];
                            active?: boolean;
                        }[];
                    };
                }): _499.QueryParamsResponse;
            };
            QueryPriceRequest: {
                encode(message: _499.QueryPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _499.QueryPriceRequest;
                fromJSON(object: any): _499.QueryPriceRequest;
                toJSON(message: _499.QueryPriceRequest): unknown;
                fromPartial(object: {
                    marketId?: string;
                }): _499.QueryPriceRequest;
            };
            QueryPriceResponse: {
                encode(message: _499.QueryPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _499.QueryPriceResponse;
                fromJSON(object: any): _499.QueryPriceResponse;
                toJSON(message: _499.QueryPriceResponse): unknown;
                fromPartial(object: {
                    price?: {
                        marketId?: string;
                        price?: string;
                    };
                }): _499.QueryPriceResponse;
            };
            QueryPricesRequest: {
                encode(_: _499.QueryPricesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _499.QueryPricesRequest;
                fromJSON(_: any): _499.QueryPricesRequest;
                toJSON(_: _499.QueryPricesRequest): unknown;
                fromPartial(_: {}): _499.QueryPricesRequest;
            };
            QueryPricesResponse: {
                encode(message: _499.QueryPricesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _499.QueryPricesResponse;
                fromJSON(object: any): _499.QueryPricesResponse;
                toJSON(message: _499.QueryPricesResponse): unknown;
                fromPartial(object: {
                    prices?: {
                        marketId?: string;
                        price?: string;
                    }[];
                }): _499.QueryPricesResponse;
            };
            QueryRawPricesRequest: {
                encode(message: _499.QueryRawPricesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _499.QueryRawPricesRequest;
                fromJSON(object: any): _499.QueryRawPricesRequest;
                toJSON(message: _499.QueryRawPricesRequest): unknown;
                fromPartial(object: {
                    marketId?: string;
                }): _499.QueryRawPricesRequest;
            };
            QueryRawPricesResponse: {
                encode(message: _499.QueryRawPricesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _499.QueryRawPricesResponse;
                fromJSON(object: any): _499.QueryRawPricesResponse;
                toJSON(message: _499.QueryRawPricesResponse): unknown;
                fromPartial(object: {
                    rawPrices?: {
                        marketId?: string;
                        oracleAddress?: string;
                        price?: string;
                        expiry?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                }): _499.QueryRawPricesResponse;
            };
            QueryOraclesRequest: {
                encode(message: _499.QueryOraclesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _499.QueryOraclesRequest;
                fromJSON(object: any): _499.QueryOraclesRequest;
                toJSON(message: _499.QueryOraclesRequest): unknown;
                fromPartial(object: {
                    marketId?: string;
                }): _499.QueryOraclesRequest;
            };
            QueryOraclesResponse: {
                encode(message: _499.QueryOraclesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _499.QueryOraclesResponse;
                fromJSON(object: any): _499.QueryOraclesResponse;
                toJSON(message: _499.QueryOraclesResponse): unknown;
                fromPartial(object: {
                    oracles?: string[];
                }): _499.QueryOraclesResponse;
            };
            QueryMarketsRequest: {
                encode(_: _499.QueryMarketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _499.QueryMarketsRequest;
                fromJSON(_: any): _499.QueryMarketsRequest;
                toJSON(_: _499.QueryMarketsRequest): unknown;
                fromPartial(_: {}): _499.QueryMarketsRequest;
            };
            QueryMarketsResponse: {
                encode(message: _499.QueryMarketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _499.QueryMarketsResponse;
                fromJSON(object: any): _499.QueryMarketsResponse;
                toJSON(message: _499.QueryMarketsResponse): unknown;
                fromPartial(object: {
                    markets?: {
                        marketId?: string;
                        baseAsset?: string;
                        quoteAsset?: string;
                        oracles?: string[];
                        active?: boolean;
                    }[];
                }): _499.QueryMarketsResponse;
            };
            PostedPriceResponse: {
                encode(message: _499.PostedPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _499.PostedPriceResponse;
                fromJSON(object: any): _499.PostedPriceResponse;
                toJSON(message: _499.PostedPriceResponse): unknown;
                fromPartial(object: {
                    marketId?: string;
                    oracleAddress?: string;
                    price?: string;
                    expiry?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _499.PostedPriceResponse;
            };
            CurrentPriceResponse: {
                encode(message: _499.CurrentPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _499.CurrentPriceResponse;
                fromJSON(object: any): _499.CurrentPriceResponse;
                toJSON(message: _499.CurrentPriceResponse): unknown;
                fromPartial(object: {
                    marketId?: string;
                    price?: string;
                }): _499.CurrentPriceResponse;
            };
            MarketResponse: {
                encode(message: _499.MarketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _499.MarketResponse;
                fromJSON(object: any): _499.MarketResponse;
                toJSON(message: _499.MarketResponse): unknown;
                fromPartial(object: {
                    marketId?: string;
                    baseAsset?: string;
                    quoteAsset?: string;
                    oracles?: string[];
                    active?: boolean;
                }): _499.MarketResponse;
            };
            GenesisState: {
                encode(message: _498.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _498.GenesisState;
                fromJSON(object: any): _498.GenesisState;
                toJSON(message: _498.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        markets?: {
                            marketId?: string;
                            baseAsset?: string;
                            quoteAsset?: string;
                            oracles?: Uint8Array[];
                            active?: boolean;
                        }[];
                    };
                    postedPrices?: {
                        marketId?: string;
                        oracleAddress?: Uint8Array;
                        price?: string;
                        expiry?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                }): _498.GenesisState;
            };
        };
    }
    namespace savings {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    deposit(value: _505.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdraw(value: _505.MsgWithdraw): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    deposit(value: _505.MsgDeposit): {
                        typeUrl: string;
                        value: _505.MsgDeposit;
                    };
                    withdraw(value: _505.MsgWithdraw): {
                        typeUrl: string;
                        value: _505.MsgWithdraw;
                    };
                };
                toJSON: {
                    deposit(value: _505.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdraw(value: _505.MsgWithdraw): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    deposit(value: any): {
                        typeUrl: string;
                        value: _505.MsgDeposit;
                    };
                    withdraw(value: any): {
                        typeUrl: string;
                        value: _505.MsgWithdraw;
                    };
                };
                fromPartial: {
                    deposit(value: _505.MsgDeposit): {
                        typeUrl: string;
                        value: _505.MsgDeposit;
                    };
                    withdraw(value: _505.MsgWithdraw): {
                        typeUrl: string;
                        value: _505.MsgWithdraw;
                    };
                };
            };
            AminoConverter: {
                "/kava.savings.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ depositor, amount }: _505.MsgDeposit) => {
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ depositor, amount }: {
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _505.MsgDeposit;
                };
                "/kava.savings.v1beta1.MsgWithdraw": {
                    aminoType: string;
                    toAmino: ({ depositor, amount }: _505.MsgWithdraw) => {
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ depositor, amount }: {
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _505.MsgWithdraw;
                };
            };
            MsgDeposit: {
                encode(message: _505.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _505.MsgDeposit;
                fromJSON(object: any): _505.MsgDeposit;
                toJSON(message: _505.MsgDeposit): unknown;
                fromPartial(object: {
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _505.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _505.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _505.MsgDepositResponse;
                fromJSON(_: any): _505.MsgDepositResponse;
                toJSON(_: _505.MsgDepositResponse): unknown;
                fromPartial(_: {}): _505.MsgDepositResponse;
            };
            MsgWithdraw: {
                encode(message: _505.MsgWithdraw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _505.MsgWithdraw;
                fromJSON(object: any): _505.MsgWithdraw;
                toJSON(message: _505.MsgWithdraw): unknown;
                fromPartial(object: {
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _505.MsgWithdraw;
            };
            MsgWithdrawResponse: {
                encode(_: _505.MsgWithdrawResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _505.MsgWithdrawResponse;
                fromJSON(_: any): _505.MsgWithdrawResponse;
                toJSON(_: _505.MsgWithdrawResponse): unknown;
                fromPartial(_: {}): _505.MsgWithdrawResponse;
            };
            Params: {
                encode(message: _504.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _504.Params;
                fromJSON(object: any): _504.Params;
                toJSON(message: _504.Params): unknown;
                fromPartial(object: {
                    supportedDenoms?: string[];
                }): _504.Params;
            };
            Deposit: {
                encode(message: _504.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _504.Deposit;
                fromJSON(object: any): _504.Deposit;
                toJSON(message: _504.Deposit): unknown;
                fromPartial(object: {
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _504.Deposit;
            };
            QueryParamsRequest: {
                encode(_: _503.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _503.QueryParamsRequest;
                fromJSON(_: any): _503.QueryParamsRequest;
                toJSON(_: _503.QueryParamsRequest): unknown;
                fromPartial(_: {}): _503.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _503.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _503.QueryParamsResponse;
                fromJSON(object: any): _503.QueryParamsResponse;
                toJSON(message: _503.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        supportedDenoms?: string[];
                    };
                }): _503.QueryParamsResponse;
            };
            QueryDepositsRequest: {
                encode(message: _503.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _503.QueryDepositsRequest;
                fromJSON(object: any): _503.QueryDepositsRequest;
                toJSON(message: _503.QueryDepositsRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                    owner?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _503.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _503.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _503.QueryDepositsResponse;
                fromJSON(object: any): _503.QueryDepositsResponse;
                toJSON(message: _503.QueryDepositsResponse): unknown;
                fromPartial(object: {
                    deposits?: {
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _503.QueryDepositsResponse;
            };
            GenesisState: {
                encode(message: _502.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _502.GenesisState;
                fromJSON(object: any): _502.GenesisState;
                toJSON(message: _502.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        supportedDenoms?: string[];
                    };
                    deposits?: {
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _502.GenesisState;
            };
        };
    }
    namespace swap {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    deposit(value: _509.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdraw(value: _509.MsgWithdraw): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactForTokens(value: _509.MsgSwapExactForTokens): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapForExactTokens(value: _509.MsgSwapForExactTokens): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    deposit(value: _509.MsgDeposit): {
                        typeUrl: string;
                        value: _509.MsgDeposit;
                    };
                    withdraw(value: _509.MsgWithdraw): {
                        typeUrl: string;
                        value: _509.MsgWithdraw;
                    };
                    swapExactForTokens(value: _509.MsgSwapExactForTokens): {
                        typeUrl: string;
                        value: _509.MsgSwapExactForTokens;
                    };
                    swapForExactTokens(value: _509.MsgSwapForExactTokens): {
                        typeUrl: string;
                        value: _509.MsgSwapForExactTokens;
                    };
                };
                toJSON: {
                    deposit(value: _509.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdraw(value: _509.MsgWithdraw): {
                        typeUrl: string;
                        value: unknown;
                    };
                    swapExactForTokens(value: _509.MsgSwapExactForTokens): {
                        typeUrl: string;
                        value: unknown;
                    };
                    swapForExactTokens(value: _509.MsgSwapForExactTokens): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    deposit(value: any): {
                        typeUrl: string;
                        value: _509.MsgDeposit;
                    };
                    withdraw(value: any): {
                        typeUrl: string;
                        value: _509.MsgWithdraw;
                    };
                    swapExactForTokens(value: any): {
                        typeUrl: string;
                        value: _509.MsgSwapExactForTokens;
                    };
                    swapForExactTokens(value: any): {
                        typeUrl: string;
                        value: _509.MsgSwapForExactTokens;
                    };
                };
                fromPartial: {
                    deposit(value: _509.MsgDeposit): {
                        typeUrl: string;
                        value: _509.MsgDeposit;
                    };
                    withdraw(value: _509.MsgWithdraw): {
                        typeUrl: string;
                        value: _509.MsgWithdraw;
                    };
                    swapExactForTokens(value: _509.MsgSwapExactForTokens): {
                        typeUrl: string;
                        value: _509.MsgSwapExactForTokens;
                    };
                    swapForExactTokens(value: _509.MsgSwapForExactTokens): {
                        typeUrl: string;
                        value: _509.MsgSwapForExactTokens;
                    };
                };
            };
            AminoConverter: {
                "/kava.swap.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ depositor, tokenA, tokenB, slippage, deadline }: _509.MsgDeposit) => {
                        depositor: string;
                        token_a: {
                            denom: string;
                            amount: string;
                        };
                        token_b: {
                            denom: string;
                            amount: string;
                        };
                        slippage: string;
                        deadline: string;
                    };
                    fromAmino: ({ depositor, token_a, token_b, slippage, deadline }: {
                        depositor: string;
                        token_a: {
                            denom: string;
                            amount: string;
                        };
                        token_b: {
                            denom: string;
                            amount: string;
                        };
                        slippage: string;
                        deadline: string;
                    }) => _509.MsgDeposit;
                };
                "/kava.swap.v1beta1.MsgWithdraw": {
                    aminoType: string;
                    toAmino: ({ from, shares, minTokenA, minTokenB, deadline }: _509.MsgWithdraw) => {
                        from: string;
                        shares: string;
                        min_token_a: {
                            denom: string;
                            amount: string;
                        };
                        min_token_b: {
                            denom: string;
                            amount: string;
                        };
                        deadline: string;
                    };
                    fromAmino: ({ from, shares, min_token_a, min_token_b, deadline }: {
                        from: string;
                        shares: string;
                        min_token_a: {
                            denom: string;
                            amount: string;
                        };
                        min_token_b: {
                            denom: string;
                            amount: string;
                        };
                        deadline: string;
                    }) => _509.MsgWithdraw;
                };
                "/kava.swap.v1beta1.MsgSwapExactForTokens": {
                    aminoType: string;
                    toAmino: ({ requester, exactTokenA, tokenB, slippage, deadline }: _509.MsgSwapExactForTokens) => {
                        requester: string;
                        exact_token_a: {
                            denom: string;
                            amount: string;
                        };
                        token_b: {
                            denom: string;
                            amount: string;
                        };
                        slippage: string;
                        deadline: string;
                    };
                    fromAmino: ({ requester, exact_token_a, token_b, slippage, deadline }: {
                        requester: string;
                        exact_token_a: {
                            denom: string;
                            amount: string;
                        };
                        token_b: {
                            denom: string;
                            amount: string;
                        };
                        slippage: string;
                        deadline: string;
                    }) => _509.MsgSwapExactForTokens;
                };
                "/kava.swap.v1beta1.MsgSwapForExactTokens": {
                    aminoType: string;
                    toAmino: ({ requester, tokenA, exactTokenB, slippage, deadline }: _509.MsgSwapForExactTokens) => {
                        requester: string;
                        token_a: {
                            denom: string;
                            amount: string;
                        };
                        exact_token_b: {
                            denom: string;
                            amount: string;
                        };
                        slippage: string;
                        deadline: string;
                    };
                    fromAmino: ({ requester, token_a, exact_token_b, slippage, deadline }: {
                        requester: string;
                        token_a: {
                            denom: string;
                            amount: string;
                        };
                        exact_token_b: {
                            denom: string;
                            amount: string;
                        };
                        slippage: string;
                        deadline: string;
                    }) => _509.MsgSwapForExactTokens;
                };
            };
            MsgDeposit: {
                encode(message: _509.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _509.MsgDeposit;
                fromJSON(object: any): _509.MsgDeposit;
                toJSON(message: _509.MsgDeposit): unknown;
                fromPartial(object: {
                    depositor?: string;
                    tokenA?: {
                        denom?: string;
                        amount?: string;
                    };
                    tokenB?: {
                        denom?: string;
                        amount?: string;
                    };
                    slippage?: string;
                    deadline?: any;
                }): _509.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _509.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _509.MsgDepositResponse;
                fromJSON(_: any): _509.MsgDepositResponse;
                toJSON(_: _509.MsgDepositResponse): unknown;
                fromPartial(_: {}): _509.MsgDepositResponse;
            };
            MsgWithdraw: {
                encode(message: _509.MsgWithdraw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _509.MsgWithdraw;
                fromJSON(object: any): _509.MsgWithdraw;
                toJSON(message: _509.MsgWithdraw): unknown;
                fromPartial(object: {
                    from?: string;
                    shares?: string;
                    minTokenA?: {
                        denom?: string;
                        amount?: string;
                    };
                    minTokenB?: {
                        denom?: string;
                        amount?: string;
                    };
                    deadline?: any;
                }): _509.MsgWithdraw;
            };
            MsgWithdrawResponse: {
                encode(_: _509.MsgWithdrawResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _509.MsgWithdrawResponse;
                fromJSON(_: any): _509.MsgWithdrawResponse;
                toJSON(_: _509.MsgWithdrawResponse): unknown;
                fromPartial(_: {}): _509.MsgWithdrawResponse;
            };
            MsgSwapExactForTokens: {
                encode(message: _509.MsgSwapExactForTokens, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _509.MsgSwapExactForTokens;
                fromJSON(object: any): _509.MsgSwapExactForTokens;
                toJSON(message: _509.MsgSwapExactForTokens): unknown;
                fromPartial(object: {
                    requester?: string;
                    exactTokenA?: {
                        denom?: string;
                        amount?: string;
                    };
                    tokenB?: {
                        denom?: string;
                        amount?: string;
                    };
                    slippage?: string;
                    deadline?: any;
                }): _509.MsgSwapExactForTokens;
            };
            MsgSwapExactForTokensResponse: {
                encode(_: _509.MsgSwapExactForTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _509.MsgSwapExactForTokensResponse;
                fromJSON(_: any): _509.MsgSwapExactForTokensResponse;
                toJSON(_: _509.MsgSwapExactForTokensResponse): unknown;
                fromPartial(_: {}): _509.MsgSwapExactForTokensResponse;
            };
            MsgSwapForExactTokens: {
                encode(message: _509.MsgSwapForExactTokens, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _509.MsgSwapForExactTokens;
                fromJSON(object: any): _509.MsgSwapForExactTokens;
                toJSON(message: _509.MsgSwapForExactTokens): unknown;
                fromPartial(object: {
                    requester?: string;
                    tokenA?: {
                        denom?: string;
                        amount?: string;
                    };
                    exactTokenB?: {
                        denom?: string;
                        amount?: string;
                    };
                    slippage?: string;
                    deadline?: any;
                }): _509.MsgSwapForExactTokens;
            };
            MsgSwapForExactTokensResponse: {
                encode(_: _509.MsgSwapForExactTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _509.MsgSwapForExactTokensResponse;
                fromJSON(_: any): _509.MsgSwapForExactTokensResponse;
                toJSON(_: _509.MsgSwapForExactTokensResponse): unknown;
                fromPartial(_: {}): _509.MsgSwapForExactTokensResponse;
            };
            Params: {
                encode(message: _508.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _508.Params;
                fromJSON(object: any): _508.Params;
                toJSON(message: _508.Params): unknown;
                fromPartial(object: {
                    allowedPools?: {
                        tokenA?: string;
                        tokenB?: string;
                    }[];
                    swapFee?: string;
                }): _508.Params;
            };
            AllowedPool: {
                encode(message: _508.AllowedPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _508.AllowedPool;
                fromJSON(object: any): _508.AllowedPool;
                toJSON(message: _508.AllowedPool): unknown;
                fromPartial(object: {
                    tokenA?: string;
                    tokenB?: string;
                }): _508.AllowedPool;
            };
            PoolRecord: {
                encode(message: _508.PoolRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _508.PoolRecord;
                fromJSON(object: any): _508.PoolRecord;
                toJSON(message: _508.PoolRecord): unknown;
                fromPartial(object: {
                    poolId?: string;
                    reservesA?: {
                        denom?: string;
                        amount?: string;
                    };
                    reservesB?: {
                        denom?: string;
                        amount?: string;
                    };
                    totalShares?: string;
                }): _508.PoolRecord;
            };
            ShareRecord: {
                encode(message: _508.ShareRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _508.ShareRecord;
                fromJSON(object: any): _508.ShareRecord;
                toJSON(message: _508.ShareRecord): unknown;
                fromPartial(object: {
                    depositor?: Uint8Array;
                    poolId?: string;
                    sharesOwned?: string;
                }): _508.ShareRecord;
            };
            QueryParamsRequest: {
                encode(_: _507.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _507.QueryParamsRequest;
                fromJSON(_: any): _507.QueryParamsRequest;
                toJSON(_: _507.QueryParamsRequest): unknown;
                fromPartial(_: {}): _507.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _507.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _507.QueryParamsResponse;
                fromJSON(object: any): _507.QueryParamsResponse;
                toJSON(message: _507.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        allowedPools?: {
                            tokenA?: string;
                            tokenB?: string;
                        }[];
                        swapFee?: string;
                    };
                }): _507.QueryParamsResponse;
            };
            QueryPoolsRequest: {
                encode(message: _507.QueryPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _507.QueryPoolsRequest;
                fromJSON(object: any): _507.QueryPoolsRequest;
                toJSON(message: _507.QueryPoolsRequest): unknown;
                fromPartial(object: {
                    poolId?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _507.QueryPoolsRequest;
            };
            QueryPoolsResponse: {
                encode(message: _507.QueryPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _507.QueryPoolsResponse;
                fromJSON(object: any): _507.QueryPoolsResponse;
                toJSON(message: _507.QueryPoolsResponse): unknown;
                fromPartial(object: {
                    pools?: {
                        name?: string;
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        totalShares?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _507.QueryPoolsResponse;
            };
            PoolResponse: {
                encode(message: _507.PoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _507.PoolResponse;
                fromJSON(object: any): _507.PoolResponse;
                toJSON(message: _507.PoolResponse): unknown;
                fromPartial(object: {
                    name?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    totalShares?: string;
                }): _507.PoolResponse;
            };
            QueryDepositsRequest: {
                encode(message: _507.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _507.QueryDepositsRequest;
                fromJSON(object: any): _507.QueryDepositsRequest;
                toJSON(message: _507.QueryDepositsRequest): unknown;
                fromPartial(object: {
                    owner?: string;
                    poolId?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _507.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _507.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _507.QueryDepositsResponse;
                fromJSON(object: any): _507.QueryDepositsResponse;
                toJSON(message: _507.QueryDepositsResponse): unknown;
                fromPartial(object: {
                    deposits?: {
                        depositor?: string;
                        poolId?: string;
                        sharesOwned?: string;
                        sharesValue?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _507.QueryDepositsResponse;
            };
            DepositResponse: {
                encode(message: _507.DepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _507.DepositResponse;
                fromJSON(object: any): _507.DepositResponse;
                toJSON(message: _507.DepositResponse): unknown;
                fromPartial(object: {
                    depositor?: string;
                    poolId?: string;
                    sharesOwned?: string;
                    sharesValue?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _507.DepositResponse;
            };
            GenesisState: {
                encode(message: _506.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _506.GenesisState;
                fromJSON(object: any): _506.GenesisState;
                toJSON(message: _506.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        allowedPools?: {
                            tokenA?: string;
                            tokenB?: string;
                        }[];
                        swapFee?: string;
                    };
                    poolRecords?: {
                        poolId?: string;
                        reservesA?: {
                            denom?: string;
                            amount?: string;
                        };
                        reservesB?: {
                            denom?: string;
                            amount?: string;
                        };
                        totalShares?: string;
                    }[];
                    shareRecords?: {
                        depositor?: Uint8Array;
                        poolId?: string;
                        sharesOwned?: string;
                    }[];
                }): _506.GenesisState;
            };
        };
    }
}
