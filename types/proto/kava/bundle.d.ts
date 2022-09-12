import * as _390 from "./auction/v1beta1/auction";
import * as _391 from "./auction/v1beta1/genesis";
import * as _392 from "./auction/v1beta1/query";
import * as _393 from "./auction/v1beta1/tx";
import * as _394 from "./bep3/v1beta1/bep3";
import * as _395 from "./bep3/v1beta1/genesis";
import * as _396 from "./bep3/v1beta1/query";
import * as _397 from "./bep3/v1beta1/tx";
import * as _398 from "./cdp/v1beta1/cdp";
import * as _399 from "./cdp/v1beta1/genesis";
import * as _400 from "./cdp/v1beta1/query";
import * as _401 from "./cdp/v1beta1/tx";
import * as _402 from "./committee/v1beta1/committee";
import * as _403 from "./committee/v1beta1/genesis";
import * as _404 from "./committee/v1beta1/permissions";
import * as _405 from "./committee/v1beta1/proposal";
import * as _406 from "./committee/v1beta1/query";
import * as _407 from "./committee/v1beta1/tx";
import * as _408 from "./earn/v1beta1/genesis";
import * as _409 from "./earn/v1beta1/params";
import * as _410 from "./earn/v1beta1/query";
import * as _411 from "./earn/v1beta1/strategy";
import * as _412 from "./earn/v1beta1/tx";
import * as _413 from "./earn/v1beta1/vault";
import * as _414 from "./evmutil/v1beta1/genesis";
import * as _415 from "./hard/v1beta1/genesis";
import * as _416 from "./hard/v1beta1/hard";
import * as _417 from "./hard/v1beta1/query";
import * as _418 from "./hard/v1beta1/tx";
import * as _419 from "./incentive/v1beta1/claims";
import * as _420 from "./incentive/v1beta1/genesis";
import * as _421 from "./incentive/v1beta1/params";
import * as _422 from "./incentive/v1beta1/tx";
import * as _423 from "./issuance/v1beta1/genesis";
import * as _424 from "./issuance/v1beta1/query";
import * as _425 from "./issuance/v1beta1/tx";
import * as _426 from "./kavadist/v1beta1/genesis";
import * as _427 from "./kavadist/v1beta1/params";
import * as _428 from "./kavadist/v1beta1/proposal";
import * as _429 from "./kavadist/v1beta1/query";
import * as _430 from "./pricefeed/v1beta1/genesis";
import * as _431 from "./pricefeed/v1beta1/query";
import * as _432 from "./pricefeed/v1beta1/store";
import * as _433 from "./pricefeed/v1beta1/tx";
import * as _434 from "./savings/v1beta1/genesis";
import * as _435 from "./savings/v1beta1/query";
import * as _436 from "./savings/v1beta1/store";
import * as _437 from "./savings/v1beta1/tx";
import * as _438 from "./swap/v1beta1/genesis";
import * as _439 from "./swap/v1beta1/query";
import * as _440 from "./swap/v1beta1/swap";
import * as _441 from "./swap/v1beta1/tx";
export declare namespace kava {
    namespace auction {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    placeBid(value: _393.MsgPlaceBid): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    placeBid(value: _393.MsgPlaceBid): {
                        typeUrl: string;
                        value: _393.MsgPlaceBid;
                    };
                };
                toJSON: {
                    placeBid(value: _393.MsgPlaceBid): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    placeBid(value: any): {
                        typeUrl: string;
                        value: _393.MsgPlaceBid;
                    };
                };
                fromPartial: {
                    placeBid(value: _393.MsgPlaceBid): {
                        typeUrl: string;
                        value: _393.MsgPlaceBid;
                    };
                };
            };
            AminoConverter: {
                "/kava.auction.v1beta1.MsgPlaceBid": {
                    aminoType: string;
                    toAmino: ({ auctionId, bidder, amount }: _393.MsgPlaceBid) => {
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
                    }) => _393.MsgPlaceBid;
                };
            };
            MsgPlaceBid: {
                encode(message: _393.MsgPlaceBid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _393.MsgPlaceBid;
                fromJSON(object: any): _393.MsgPlaceBid;
                toJSON(message: _393.MsgPlaceBid): unknown;
                fromPartial(object: {
                    auctionId?: any;
                    bidder?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _393.MsgPlaceBid;
            };
            MsgPlaceBidResponse: {
                encode(_: _393.MsgPlaceBidResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _393.MsgPlaceBidResponse;
                fromJSON(_: any): _393.MsgPlaceBidResponse;
                toJSON(_: _393.MsgPlaceBidResponse): unknown;
                fromPartial(_: {}): _393.MsgPlaceBidResponse;
            };
            QueryParamsRequest: {
                encode(_: _392.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _392.QueryParamsRequest;
                fromJSON(_: any): _392.QueryParamsRequest;
                toJSON(_: _392.QueryParamsRequest): unknown;
                fromPartial(_: {}): _392.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _392.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _392.QueryParamsResponse;
                fromJSON(object: any): _392.QueryParamsResponse;
                toJSON(message: _392.QueryParamsResponse): unknown;
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
                }): _392.QueryParamsResponse;
            };
            QueryAuctionRequest: {
                encode(message: _392.QueryAuctionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _392.QueryAuctionRequest;
                fromJSON(object: any): _392.QueryAuctionRequest;
                toJSON(message: _392.QueryAuctionRequest): unknown;
                fromPartial(object: {
                    auctionId?: any;
                }): _392.QueryAuctionRequest;
            };
            QueryAuctionResponse: {
                encode(message: _392.QueryAuctionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _392.QueryAuctionResponse;
                fromJSON(object: any): _392.QueryAuctionResponse;
                toJSON(message: _392.QueryAuctionResponse): unknown;
                fromPartial(object: {
                    auction?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _392.QueryAuctionResponse;
            };
            QueryAuctionsRequest: {
                encode(message: _392.QueryAuctionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _392.QueryAuctionsRequest;
                fromJSON(object: any): _392.QueryAuctionsRequest;
                toJSON(message: _392.QueryAuctionsRequest): unknown;
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
                }): _392.QueryAuctionsRequest;
            };
            QueryAuctionsResponse: {
                encode(message: _392.QueryAuctionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _392.QueryAuctionsResponse;
                fromJSON(object: any): _392.QueryAuctionsResponse;
                toJSON(message: _392.QueryAuctionsResponse): unknown;
                fromPartial(object: {
                    auctions?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _392.QueryAuctionsResponse;
            };
            QueryNextAuctionIDRequest: {
                encode(_: _392.QueryNextAuctionIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _392.QueryNextAuctionIDRequest;
                fromJSON(_: any): _392.QueryNextAuctionIDRequest;
                toJSON(_: _392.QueryNextAuctionIDRequest): unknown;
                fromPartial(_: {}): _392.QueryNextAuctionIDRequest;
            };
            QueryNextAuctionIDResponse: {
                encode(message: _392.QueryNextAuctionIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _392.QueryNextAuctionIDResponse;
                fromJSON(object: any): _392.QueryNextAuctionIDResponse;
                toJSON(message: _392.QueryNextAuctionIDResponse): unknown;
                fromPartial(object: {
                    id?: any;
                }): _392.QueryNextAuctionIDResponse;
            };
            GenesisState: {
                encode(message: _391.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _391.GenesisState;
                fromJSON(object: any): _391.GenesisState;
                toJSON(message: _391.GenesisState): unknown;
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
                }): _391.GenesisState;
            };
            Params: {
                encode(message: _391.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _391.Params;
                fromJSON(object: any): _391.Params;
                toJSON(message: _391.Params): unknown;
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
                }): _391.Params;
            };
            BaseAuction: {
                encode(message: _390.BaseAuction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _390.BaseAuction;
                fromJSON(object: any): _390.BaseAuction;
                toJSON(message: _390.BaseAuction): unknown;
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
                }): _390.BaseAuction;
            };
            SurplusAuction: {
                encode(message: _390.SurplusAuction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _390.SurplusAuction;
                fromJSON(object: any): _390.SurplusAuction;
                toJSON(message: _390.SurplusAuction): unknown;
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
                }): _390.SurplusAuction;
            };
            DebtAuction: {
                encode(message: _390.DebtAuction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _390.DebtAuction;
                fromJSON(object: any): _390.DebtAuction;
                toJSON(message: _390.DebtAuction): unknown;
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
                }): _390.DebtAuction;
            };
            CollateralAuction: {
                encode(message: _390.CollateralAuction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _390.CollateralAuction;
                fromJSON(object: any): _390.CollateralAuction;
                toJSON(message: _390.CollateralAuction): unknown;
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
                }): _390.CollateralAuction;
            };
            WeightedAddresses: {
                encode(message: _390.WeightedAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _390.WeightedAddresses;
                fromJSON(object: any): _390.WeightedAddresses;
                toJSON(message: _390.WeightedAddresses): unknown;
                fromPartial(object: {
                    addresses?: Uint8Array[];
                    weights?: Uint8Array[];
                }): _390.WeightedAddresses;
            };
        };
    }
    namespace bep3 {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createAtomicSwap(value: _397.MsgCreateAtomicSwap): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    claimAtomicSwap(value: _397.MsgClaimAtomicSwap): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    refundAtomicSwap(value: _397.MsgRefundAtomicSwap): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createAtomicSwap(value: _397.MsgCreateAtomicSwap): {
                        typeUrl: string;
                        value: _397.MsgCreateAtomicSwap;
                    };
                    claimAtomicSwap(value: _397.MsgClaimAtomicSwap): {
                        typeUrl: string;
                        value: _397.MsgClaimAtomicSwap;
                    };
                    refundAtomicSwap(value: _397.MsgRefundAtomicSwap): {
                        typeUrl: string;
                        value: _397.MsgRefundAtomicSwap;
                    };
                };
                toJSON: {
                    createAtomicSwap(value: _397.MsgCreateAtomicSwap): {
                        typeUrl: string;
                        value: unknown;
                    };
                    claimAtomicSwap(value: _397.MsgClaimAtomicSwap): {
                        typeUrl: string;
                        value: unknown;
                    };
                    refundAtomicSwap(value: _397.MsgRefundAtomicSwap): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createAtomicSwap(value: any): {
                        typeUrl: string;
                        value: _397.MsgCreateAtomicSwap;
                    };
                    claimAtomicSwap(value: any): {
                        typeUrl: string;
                        value: _397.MsgClaimAtomicSwap;
                    };
                    refundAtomicSwap(value: any): {
                        typeUrl: string;
                        value: _397.MsgRefundAtomicSwap;
                    };
                };
                fromPartial: {
                    createAtomicSwap(value: _397.MsgCreateAtomicSwap): {
                        typeUrl: string;
                        value: _397.MsgCreateAtomicSwap;
                    };
                    claimAtomicSwap(value: _397.MsgClaimAtomicSwap): {
                        typeUrl: string;
                        value: _397.MsgClaimAtomicSwap;
                    };
                    refundAtomicSwap(value: _397.MsgRefundAtomicSwap): {
                        typeUrl: string;
                        value: _397.MsgRefundAtomicSwap;
                    };
                };
            };
            AminoConverter: {
                "/kava.bep3.v1beta1.MsgCreateAtomicSwap": {
                    aminoType: string;
                    toAmino: ({ from, to, recipientOtherChain, senderOtherChain, randomNumberHash, timestamp, amount, heightSpan }: _397.MsgCreateAtomicSwap) => {
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
                    }) => _397.MsgCreateAtomicSwap;
                };
                "/kava.bep3.v1beta1.MsgClaimAtomicSwap": {
                    aminoType: string;
                    toAmino: ({ from, swapId, randomNumber }: _397.MsgClaimAtomicSwap) => {
                        from: string;
                        swap_id: string;
                        random_number: string;
                    };
                    fromAmino: ({ from, swap_id, random_number }: {
                        from: string;
                        swap_id: string;
                        random_number: string;
                    }) => _397.MsgClaimAtomicSwap;
                };
                "/kava.bep3.v1beta1.MsgRefundAtomicSwap": {
                    aminoType: string;
                    toAmino: ({ from, swapId }: _397.MsgRefundAtomicSwap) => {
                        from: string;
                        swap_id: string;
                    };
                    fromAmino: ({ from, swap_id }: {
                        from: string;
                        swap_id: string;
                    }) => _397.MsgRefundAtomicSwap;
                };
            };
            MsgCreateAtomicSwap: {
                encode(message: _397.MsgCreateAtomicSwap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _397.MsgCreateAtomicSwap;
                fromJSON(object: any): _397.MsgCreateAtomicSwap;
                toJSON(message: _397.MsgCreateAtomicSwap): unknown;
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
                }): _397.MsgCreateAtomicSwap;
            };
            MsgCreateAtomicSwapResponse: {
                encode(_: _397.MsgCreateAtomicSwapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _397.MsgCreateAtomicSwapResponse;
                fromJSON(_: any): _397.MsgCreateAtomicSwapResponse;
                toJSON(_: _397.MsgCreateAtomicSwapResponse): unknown;
                fromPartial(_: {}): _397.MsgCreateAtomicSwapResponse;
            };
            MsgClaimAtomicSwap: {
                encode(message: _397.MsgClaimAtomicSwap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _397.MsgClaimAtomicSwap;
                fromJSON(object: any): _397.MsgClaimAtomicSwap;
                toJSON(message: _397.MsgClaimAtomicSwap): unknown;
                fromPartial(object: {
                    from?: string;
                    swapId?: string;
                    randomNumber?: string;
                }): _397.MsgClaimAtomicSwap;
            };
            MsgClaimAtomicSwapResponse: {
                encode(_: _397.MsgClaimAtomicSwapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _397.MsgClaimAtomicSwapResponse;
                fromJSON(_: any): _397.MsgClaimAtomicSwapResponse;
                toJSON(_: _397.MsgClaimAtomicSwapResponse): unknown;
                fromPartial(_: {}): _397.MsgClaimAtomicSwapResponse;
            };
            MsgRefundAtomicSwap: {
                encode(message: _397.MsgRefundAtomicSwap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _397.MsgRefundAtomicSwap;
                fromJSON(object: any): _397.MsgRefundAtomicSwap;
                toJSON(message: _397.MsgRefundAtomicSwap): unknown;
                fromPartial(object: {
                    from?: string;
                    swapId?: string;
                }): _397.MsgRefundAtomicSwap;
            };
            MsgRefundAtomicSwapResponse: {
                encode(_: _397.MsgRefundAtomicSwapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _397.MsgRefundAtomicSwapResponse;
                fromJSON(_: any): _397.MsgRefundAtomicSwapResponse;
                toJSON(_: _397.MsgRefundAtomicSwapResponse): unknown;
                fromPartial(_: {}): _397.MsgRefundAtomicSwapResponse;
            };
            QueryParamsRequest: {
                encode(_: _396.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _396.QueryParamsRequest;
                fromJSON(_: any): _396.QueryParamsRequest;
                toJSON(_: _396.QueryParamsRequest): unknown;
                fromPartial(_: {}): _396.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _396.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _396.QueryParamsResponse;
                fromJSON(object: any): _396.QueryParamsResponse;
                toJSON(message: _396.QueryParamsResponse): unknown;
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
                }): _396.QueryParamsResponse;
            };
            QueryAssetSupplyRequest: {
                encode(message: _396.QueryAssetSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _396.QueryAssetSupplyRequest;
                fromJSON(object: any): _396.QueryAssetSupplyRequest;
                toJSON(message: _396.QueryAssetSupplyRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _396.QueryAssetSupplyRequest;
            };
            AssetSupplyResponse: {
                encode(message: _396.AssetSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _396.AssetSupplyResponse;
                fromJSON(object: any): _396.AssetSupplyResponse;
                toJSON(message: _396.AssetSupplyResponse): unknown;
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
                }): _396.AssetSupplyResponse;
            };
            QueryAssetSupplyResponse: {
                encode(message: _396.QueryAssetSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _396.QueryAssetSupplyResponse;
                fromJSON(object: any): _396.QueryAssetSupplyResponse;
                toJSON(message: _396.QueryAssetSupplyResponse): unknown;
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
                }): _396.QueryAssetSupplyResponse;
            };
            QueryAssetSuppliesRequest: {
                encode(_: _396.QueryAssetSuppliesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _396.QueryAssetSuppliesRequest;
                fromJSON(_: any): _396.QueryAssetSuppliesRequest;
                toJSON(_: _396.QueryAssetSuppliesRequest): unknown;
                fromPartial(_: {}): _396.QueryAssetSuppliesRequest;
            };
            QueryAssetSuppliesResponse: {
                encode(message: _396.QueryAssetSuppliesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _396.QueryAssetSuppliesResponse;
                fromJSON(object: any): _396.QueryAssetSuppliesResponse;
                toJSON(message: _396.QueryAssetSuppliesResponse): unknown;
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
                }): _396.QueryAssetSuppliesResponse;
            };
            QueryAtomicSwapRequest: {
                encode(message: _396.QueryAtomicSwapRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _396.QueryAtomicSwapRequest;
                fromJSON(object: any): _396.QueryAtomicSwapRequest;
                toJSON(message: _396.QueryAtomicSwapRequest): unknown;
                fromPartial(object: {
                    swapId?: string;
                }): _396.QueryAtomicSwapRequest;
            };
            QueryAtomicSwapResponse: {
                encode(message: _396.QueryAtomicSwapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _396.QueryAtomicSwapResponse;
                fromJSON(object: any): _396.QueryAtomicSwapResponse;
                toJSON(message: _396.QueryAtomicSwapResponse): unknown;
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
                        status?: _394.SwapStatus;
                        crossChain?: boolean;
                        direction?: _394.SwapDirection;
                    };
                }): _396.QueryAtomicSwapResponse;
            };
            AtomicSwapResponse: {
                encode(message: _396.AtomicSwapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _396.AtomicSwapResponse;
                fromJSON(object: any): _396.AtomicSwapResponse;
                toJSON(message: _396.AtomicSwapResponse): unknown;
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
                    status?: _394.SwapStatus;
                    crossChain?: boolean;
                    direction?: _394.SwapDirection;
                }): _396.AtomicSwapResponse;
            };
            QueryAtomicSwapsRequest: {
                encode(message: _396.QueryAtomicSwapsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _396.QueryAtomicSwapsRequest;
                fromJSON(object: any): _396.QueryAtomicSwapsRequest;
                toJSON(message: _396.QueryAtomicSwapsRequest): unknown;
                fromPartial(object: {
                    involve?: string;
                    expiration?: any;
                    status?: _394.SwapStatus;
                    direction?: _394.SwapDirection;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _396.QueryAtomicSwapsRequest;
            };
            QueryAtomicSwapsResponse: {
                encode(message: _396.QueryAtomicSwapsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _396.QueryAtomicSwapsResponse;
                fromJSON(object: any): _396.QueryAtomicSwapsResponse;
                toJSON(message: _396.QueryAtomicSwapsResponse): unknown;
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
                        status?: _394.SwapStatus;
                        crossChain?: boolean;
                        direction?: _394.SwapDirection;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _396.QueryAtomicSwapsResponse;
            };
            GenesisState: {
                encode(message: _395.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _395.GenesisState;
                fromJSON(object: any): _395.GenesisState;
                toJSON(message: _395.GenesisState): unknown;
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
                        status?: _394.SwapStatus;
                        crossChain?: boolean;
                        direction?: _394.SwapDirection;
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
                }): _395.GenesisState;
            };
            swapStatusFromJSON(object: any): _394.SwapStatus;
            swapStatusToJSON(object: _394.SwapStatus): string;
            swapDirectionFromJSON(object: any): _394.SwapDirection;
            swapDirectionToJSON(object: _394.SwapDirection): string;
            SwapStatus: typeof _394.SwapStatus;
            SwapDirection: typeof _394.SwapDirection;
            Params: {
                encode(message: _394.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _394.Params;
                fromJSON(object: any): _394.Params;
                toJSON(message: _394.Params): unknown;
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
                }): _394.Params;
            };
            AssetParam: {
                encode(message: _394.AssetParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _394.AssetParam;
                fromJSON(object: any): _394.AssetParam;
                toJSON(message: _394.AssetParam): unknown;
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
                }): _394.AssetParam;
            };
            SupplyLimit: {
                encode(message: _394.SupplyLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _394.SupplyLimit;
                fromJSON(object: any): _394.SupplyLimit;
                toJSON(message: _394.SupplyLimit): unknown;
                fromPartial(object: {
                    limit?: string;
                    timeLimited?: boolean;
                    timePeriod?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    timeBasedLimit?: string;
                }): _394.SupplyLimit;
            };
            AtomicSwap: {
                encode(message: _394.AtomicSwap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _394.AtomicSwap;
                fromJSON(object: any): _394.AtomicSwap;
                toJSON(message: _394.AtomicSwap): unknown;
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
                    status?: _394.SwapStatus;
                    crossChain?: boolean;
                    direction?: _394.SwapDirection;
                }): _394.AtomicSwap;
            };
            AssetSupply: {
                encode(message: _394.AssetSupply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _394.AssetSupply;
                fromJSON(object: any): _394.AssetSupply;
                toJSON(message: _394.AssetSupply): unknown;
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
                }): _394.AssetSupply;
            };
        };
    }
    namespace cdp {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createCDP(value: _401.MsgCreateCDP): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _401.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdraw(value: _401.MsgWithdraw): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    drawDebt(value: _401.MsgDrawDebt): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    repayDebt(value: _401.MsgRepayDebt): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    liquidate(value: _401.MsgLiquidate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createCDP(value: _401.MsgCreateCDP): {
                        typeUrl: string;
                        value: _401.MsgCreateCDP;
                    };
                    deposit(value: _401.MsgDeposit): {
                        typeUrl: string;
                        value: _401.MsgDeposit;
                    };
                    withdraw(value: _401.MsgWithdraw): {
                        typeUrl: string;
                        value: _401.MsgWithdraw;
                    };
                    drawDebt(value: _401.MsgDrawDebt): {
                        typeUrl: string;
                        value: _401.MsgDrawDebt;
                    };
                    repayDebt(value: _401.MsgRepayDebt): {
                        typeUrl: string;
                        value: _401.MsgRepayDebt;
                    };
                    liquidate(value: _401.MsgLiquidate): {
                        typeUrl: string;
                        value: _401.MsgLiquidate;
                    };
                };
                toJSON: {
                    createCDP(value: _401.MsgCreateCDP): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _401.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdraw(value: _401.MsgWithdraw): {
                        typeUrl: string;
                        value: unknown;
                    };
                    drawDebt(value: _401.MsgDrawDebt): {
                        typeUrl: string;
                        value: unknown;
                    };
                    repayDebt(value: _401.MsgRepayDebt): {
                        typeUrl: string;
                        value: unknown;
                    };
                    liquidate(value: _401.MsgLiquidate): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createCDP(value: any): {
                        typeUrl: string;
                        value: _401.MsgCreateCDP;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _401.MsgDeposit;
                    };
                    withdraw(value: any): {
                        typeUrl: string;
                        value: _401.MsgWithdraw;
                    };
                    drawDebt(value: any): {
                        typeUrl: string;
                        value: _401.MsgDrawDebt;
                    };
                    repayDebt(value: any): {
                        typeUrl: string;
                        value: _401.MsgRepayDebt;
                    };
                    liquidate(value: any): {
                        typeUrl: string;
                        value: _401.MsgLiquidate;
                    };
                };
                fromPartial: {
                    createCDP(value: _401.MsgCreateCDP): {
                        typeUrl: string;
                        value: _401.MsgCreateCDP;
                    };
                    deposit(value: _401.MsgDeposit): {
                        typeUrl: string;
                        value: _401.MsgDeposit;
                    };
                    withdraw(value: _401.MsgWithdraw): {
                        typeUrl: string;
                        value: _401.MsgWithdraw;
                    };
                    drawDebt(value: _401.MsgDrawDebt): {
                        typeUrl: string;
                        value: _401.MsgDrawDebt;
                    };
                    repayDebt(value: _401.MsgRepayDebt): {
                        typeUrl: string;
                        value: _401.MsgRepayDebt;
                    };
                    liquidate(value: _401.MsgLiquidate): {
                        typeUrl: string;
                        value: _401.MsgLiquidate;
                    };
                };
            };
            AminoConverter: {
                "/kava.cdp.v1beta1.MsgCreateCDP": {
                    aminoType: string;
                    toAmino: ({ sender, collateral, principal, collateralType }: _401.MsgCreateCDP) => {
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
                    }) => _401.MsgCreateCDP;
                };
                "/kava.cdp.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ depositor, owner, collateral, collateralType }: _401.MsgDeposit) => {
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
                    }) => _401.MsgDeposit;
                };
                "/kava.cdp.v1beta1.MsgWithdraw": {
                    aminoType: string;
                    toAmino: ({ depositor, owner, collateral, collateralType }: _401.MsgWithdraw) => {
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
                    }) => _401.MsgWithdraw;
                };
                "/kava.cdp.v1beta1.MsgDrawDebt": {
                    aminoType: string;
                    toAmino: ({ sender, collateralType, principal }: _401.MsgDrawDebt) => {
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
                    }) => _401.MsgDrawDebt;
                };
                "/kava.cdp.v1beta1.MsgRepayDebt": {
                    aminoType: string;
                    toAmino: ({ sender, collateralType, payment }: _401.MsgRepayDebt) => {
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
                    }) => _401.MsgRepayDebt;
                };
                "/kava.cdp.v1beta1.MsgLiquidate": {
                    aminoType: string;
                    toAmino: ({ keeper, borrower, collateralType }: _401.MsgLiquidate) => {
                        keeper: string;
                        borrower: string;
                        collateral_type: string;
                    };
                    fromAmino: ({ keeper, borrower, collateral_type }: {
                        keeper: string;
                        borrower: string;
                        collateral_type: string;
                    }) => _401.MsgLiquidate;
                };
            };
            MsgCreateCDP: {
                encode(message: _401.MsgCreateCDP, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _401.MsgCreateCDP;
                fromJSON(object: any): _401.MsgCreateCDP;
                toJSON(message: _401.MsgCreateCDP): unknown;
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
                }): _401.MsgCreateCDP;
            };
            MsgCreateCDPResponse: {
                encode(message: _401.MsgCreateCDPResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _401.MsgCreateCDPResponse;
                fromJSON(object: any): _401.MsgCreateCDPResponse;
                toJSON(message: _401.MsgCreateCDPResponse): unknown;
                fromPartial(object: {
                    cdpId?: any;
                }): _401.MsgCreateCDPResponse;
            };
            MsgDeposit: {
                encode(message: _401.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _401.MsgDeposit;
                fromJSON(object: any): _401.MsgDeposit;
                toJSON(message: _401.MsgDeposit): unknown;
                fromPartial(object: {
                    depositor?: string;
                    owner?: string;
                    collateral?: {
                        denom?: string;
                        amount?: string;
                    };
                    collateralType?: string;
                }): _401.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _401.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _401.MsgDepositResponse;
                fromJSON(_: any): _401.MsgDepositResponse;
                toJSON(_: _401.MsgDepositResponse): unknown;
                fromPartial(_: {}): _401.MsgDepositResponse;
            };
            MsgWithdraw: {
                encode(message: _401.MsgWithdraw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _401.MsgWithdraw;
                fromJSON(object: any): _401.MsgWithdraw;
                toJSON(message: _401.MsgWithdraw): unknown;
                fromPartial(object: {
                    depositor?: string;
                    owner?: string;
                    collateral?: {
                        denom?: string;
                        amount?: string;
                    };
                    collateralType?: string;
                }): _401.MsgWithdraw;
            };
            MsgWithdrawResponse: {
                encode(_: _401.MsgWithdrawResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _401.MsgWithdrawResponse;
                fromJSON(_: any): _401.MsgWithdrawResponse;
                toJSON(_: _401.MsgWithdrawResponse): unknown;
                fromPartial(_: {}): _401.MsgWithdrawResponse;
            };
            MsgDrawDebt: {
                encode(message: _401.MsgDrawDebt, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _401.MsgDrawDebt;
                fromJSON(object: any): _401.MsgDrawDebt;
                toJSON(message: _401.MsgDrawDebt): unknown;
                fromPartial(object: {
                    sender?: string;
                    collateralType?: string;
                    principal?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _401.MsgDrawDebt;
            };
            MsgDrawDebtResponse: {
                encode(_: _401.MsgDrawDebtResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _401.MsgDrawDebtResponse;
                fromJSON(_: any): _401.MsgDrawDebtResponse;
                toJSON(_: _401.MsgDrawDebtResponse): unknown;
                fromPartial(_: {}): _401.MsgDrawDebtResponse;
            };
            MsgRepayDebt: {
                encode(message: _401.MsgRepayDebt, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _401.MsgRepayDebt;
                fromJSON(object: any): _401.MsgRepayDebt;
                toJSON(message: _401.MsgRepayDebt): unknown;
                fromPartial(object: {
                    sender?: string;
                    collateralType?: string;
                    payment?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _401.MsgRepayDebt;
            };
            MsgRepayDebtResponse: {
                encode(_: _401.MsgRepayDebtResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _401.MsgRepayDebtResponse;
                fromJSON(_: any): _401.MsgRepayDebtResponse;
                toJSON(_: _401.MsgRepayDebtResponse): unknown;
                fromPartial(_: {}): _401.MsgRepayDebtResponse;
            };
            MsgLiquidate: {
                encode(message: _401.MsgLiquidate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _401.MsgLiquidate;
                fromJSON(object: any): _401.MsgLiquidate;
                toJSON(message: _401.MsgLiquidate): unknown;
                fromPartial(object: {
                    keeper?: string;
                    borrower?: string;
                    collateralType?: string;
                }): _401.MsgLiquidate;
            };
            MsgLiquidateResponse: {
                encode(_: _401.MsgLiquidateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _401.MsgLiquidateResponse;
                fromJSON(_: any): _401.MsgLiquidateResponse;
                toJSON(_: _401.MsgLiquidateResponse): unknown;
                fromPartial(_: {}): _401.MsgLiquidateResponse;
            };
            QueryParamsRequest: {
                encode(_: _400.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _400.QueryParamsRequest;
                fromJSON(_: any): _400.QueryParamsRequest;
                toJSON(_: _400.QueryParamsRequest): unknown;
                fromPartial(_: {}): _400.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _400.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _400.QueryParamsResponse;
                fromJSON(object: any): _400.QueryParamsResponse;
                toJSON(message: _400.QueryParamsResponse): unknown;
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
                }): _400.QueryParamsResponse;
            };
            QueryAccountsRequest: {
                encode(_: _400.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _400.QueryAccountsRequest;
                fromJSON(_: any): _400.QueryAccountsRequest;
                toJSON(_: _400.QueryAccountsRequest): unknown;
                fromPartial(_: {}): _400.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _400.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _400.QueryAccountsResponse;
                fromJSON(object: any): _400.QueryAccountsResponse;
                toJSON(message: _400.QueryAccountsResponse): unknown;
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
                }): _400.QueryAccountsResponse;
            };
            QueryCdpRequest: {
                encode(message: _400.QueryCdpRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _400.QueryCdpRequest;
                fromJSON(object: any): _400.QueryCdpRequest;
                toJSON(message: _400.QueryCdpRequest): unknown;
                fromPartial(object: {
                    collateralType?: string;
                    owner?: string;
                }): _400.QueryCdpRequest;
            };
            QueryCdpResponse: {
                encode(message: _400.QueryCdpResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _400.QueryCdpResponse;
                fromJSON(object: any): _400.QueryCdpResponse;
                toJSON(message: _400.QueryCdpResponse): unknown;
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
                }): _400.QueryCdpResponse;
            };
            QueryCdpsRequest: {
                encode(message: _400.QueryCdpsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _400.QueryCdpsRequest;
                fromJSON(object: any): _400.QueryCdpsRequest;
                toJSON(message: _400.QueryCdpsRequest): unknown;
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
                }): _400.QueryCdpsRequest;
            };
            QueryCdpsResponse: {
                encode(message: _400.QueryCdpsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _400.QueryCdpsResponse;
                fromJSON(object: any): _400.QueryCdpsResponse;
                toJSON(message: _400.QueryCdpsResponse): unknown;
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
                }): _400.QueryCdpsResponse;
            };
            QueryDepositsRequest: {
                encode(message: _400.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _400.QueryDepositsRequest;
                fromJSON(object: any): _400.QueryDepositsRequest;
                toJSON(message: _400.QueryDepositsRequest): unknown;
                fromPartial(object: {
                    collateralType?: string;
                    owner?: string;
                }): _400.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _400.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _400.QueryDepositsResponse;
                fromJSON(object: any): _400.QueryDepositsResponse;
                toJSON(message: _400.QueryDepositsResponse): unknown;
                fromPartial(object: {
                    deposits?: {
                        cdpId?: any;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                }): _400.QueryDepositsResponse;
            };
            QueryTotalPrincipalRequest: {
                encode(message: _400.QueryTotalPrincipalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _400.QueryTotalPrincipalRequest;
                fromJSON(object: any): _400.QueryTotalPrincipalRequest;
                toJSON(message: _400.QueryTotalPrincipalRequest): unknown;
                fromPartial(object: {
                    collateralType?: string;
                }): _400.QueryTotalPrincipalRequest;
            };
            QueryTotalPrincipalResponse: {
                encode(message: _400.QueryTotalPrincipalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _400.QueryTotalPrincipalResponse;
                fromJSON(object: any): _400.QueryTotalPrincipalResponse;
                toJSON(message: _400.QueryTotalPrincipalResponse): unknown;
                fromPartial(object: {
                    totalPrincipal?: {
                        collateralType?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                }): _400.QueryTotalPrincipalResponse;
            };
            QueryTotalCollateralRequest: {
                encode(message: _400.QueryTotalCollateralRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _400.QueryTotalCollateralRequest;
                fromJSON(object: any): _400.QueryTotalCollateralRequest;
                toJSON(message: _400.QueryTotalCollateralRequest): unknown;
                fromPartial(object: {
                    collateralType?: string;
                }): _400.QueryTotalCollateralRequest;
            };
            QueryTotalCollateralResponse: {
                encode(message: _400.QueryTotalCollateralResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _400.QueryTotalCollateralResponse;
                fromJSON(object: any): _400.QueryTotalCollateralResponse;
                toJSON(message: _400.QueryTotalCollateralResponse): unknown;
                fromPartial(object: {
                    totalCollateral?: {
                        collateralType?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                }): _400.QueryTotalCollateralResponse;
            };
            CDPResponse: {
                encode(message: _400.CDPResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _400.CDPResponse;
                fromJSON(object: any): _400.CDPResponse;
                toJSON(message: _400.CDPResponse): unknown;
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
                }): _400.CDPResponse;
            };
            GenesisState: {
                encode(message: _399.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _399.GenesisState;
                fromJSON(object: any): _399.GenesisState;
                toJSON(message: _399.GenesisState): unknown;
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
                }): _399.GenesisState;
            };
            Params: {
                encode(message: _399.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _399.Params;
                fromJSON(object: any): _399.Params;
                toJSON(message: _399.Params): unknown;
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
                }): _399.Params;
            };
            DebtParam: {
                encode(message: _399.DebtParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _399.DebtParam;
                fromJSON(object: any): _399.DebtParam;
                toJSON(message: _399.DebtParam): unknown;
                fromPartial(object: {
                    denom?: string;
                    referenceAsset?: string;
                    conversionFactor?: string;
                    debtFloor?: string;
                }): _399.DebtParam;
            };
            CollateralParam: {
                encode(message: _399.CollateralParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _399.CollateralParam;
                fromJSON(object: any): _399.CollateralParam;
                toJSON(message: _399.CollateralParam): unknown;
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
                }): _399.CollateralParam;
            };
            GenesisAccumulationTime: {
                encode(message: _399.GenesisAccumulationTime, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _399.GenesisAccumulationTime;
                fromJSON(object: any): _399.GenesisAccumulationTime;
                toJSON(message: _399.GenesisAccumulationTime): unknown;
                fromPartial(object: {
                    collateralType?: string;
                    previousAccumulationTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    interestFactor?: string;
                }): _399.GenesisAccumulationTime;
            };
            GenesisTotalPrincipal: {
                encode(message: _399.GenesisTotalPrincipal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _399.GenesisTotalPrincipal;
                fromJSON(object: any): _399.GenesisTotalPrincipal;
                toJSON(message: _399.GenesisTotalPrincipal): unknown;
                fromPartial(object: {
                    collateralType?: string;
                    totalPrincipal?: string;
                }): _399.GenesisTotalPrincipal;
            };
            CDP: {
                encode(message: _398.CDP, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _398.CDP;
                fromJSON(object: any): _398.CDP;
                toJSON(message: _398.CDP): unknown;
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
                }): _398.CDP;
            };
            Deposit: {
                encode(message: _398.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _398.Deposit;
                fromJSON(object: any): _398.Deposit;
                toJSON(message: _398.Deposit): unknown;
                fromPartial(object: {
                    cdpId?: any;
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _398.Deposit;
            };
            TotalPrincipal: {
                encode(message: _398.TotalPrincipal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _398.TotalPrincipal;
                fromJSON(object: any): _398.TotalPrincipal;
                toJSON(message: _398.TotalPrincipal): unknown;
                fromPartial(object: {
                    collateralType?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _398.TotalPrincipal;
            };
            TotalCollateral: {
                encode(message: _398.TotalCollateral, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _398.TotalCollateral;
                fromJSON(object: any): _398.TotalCollateral;
                toJSON(message: _398.TotalCollateral): unknown;
                fromPartial(object: {
                    collateralType?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _398.TotalCollateral;
            };
            OwnerCDPIndex: {
                encode(message: _398.OwnerCDPIndex, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _398.OwnerCDPIndex;
                fromJSON(object: any): _398.OwnerCDPIndex;
                toJSON(message: _398.OwnerCDPIndex): unknown;
                fromPartial(object: {
                    cdpIds?: any[];
                }): _398.OwnerCDPIndex;
            };
        };
    }
    namespace committee {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _407.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _407.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _407.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _407.MsgSubmitProposal;
                    };
                    vote(value: _407.MsgVote): {
                        typeUrl: string;
                        value: _407.MsgVote;
                    };
                };
                toJSON: {
                    submitProposal(value: _407.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _407.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _407.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _407.MsgVote;
                    };
                };
                fromPartial: {
                    submitProposal(value: _407.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _407.MsgSubmitProposal;
                    };
                    vote(value: _407.MsgVote): {
                        typeUrl: string;
                        value: _407.MsgVote;
                    };
                };
            };
            AminoConverter: {
                "/kava.committee.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ pubProposal, proposer, committeeId }: _407.MsgSubmitProposal) => {
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
                    }) => _407.MsgSubmitProposal;
                };
                "/kava.committee.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, voteType }: _407.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        vote_type: number;
                    };
                    fromAmino: ({ proposal_id, voter, vote_type }: {
                        proposal_id: string;
                        voter: string;
                        vote_type: number;
                    }) => _407.MsgVote;
                };
            };
            MsgSubmitProposal: {
                encode(message: _407.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.MsgSubmitProposal;
                fromJSON(object: any): _407.MsgSubmitProposal;
                toJSON(message: _407.MsgSubmitProposal): unknown;
                fromPartial(object: {
                    pubProposal?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    proposer?: string;
                    committeeId?: any;
                }): _407.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _407.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.MsgSubmitProposalResponse;
                fromJSON(object: any): _407.MsgSubmitProposalResponse;
                toJSON(message: _407.MsgSubmitProposalResponse): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _407.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _407.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.MsgVote;
                fromJSON(object: any): _407.MsgVote;
                toJSON(message: _407.MsgVote): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    voteType?: _403.VoteType;
                }): _407.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _407.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _407.MsgVoteResponse;
                fromJSON(_: any): _407.MsgVoteResponse;
                toJSON(_: _407.MsgVoteResponse): unknown;
                fromPartial(_: {}): _407.MsgVoteResponse;
            };
            QueryCommitteesRequest: {
                encode(_: _406.QueryCommitteesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _406.QueryCommitteesRequest;
                fromJSON(_: any): _406.QueryCommitteesRequest;
                toJSON(_: _406.QueryCommitteesRequest): unknown;
                fromPartial(_: {}): _406.QueryCommitteesRequest;
            };
            QueryCommitteesResponse: {
                encode(message: _406.QueryCommitteesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _406.QueryCommitteesResponse;
                fromJSON(object: any): _406.QueryCommitteesResponse;
                toJSON(message: _406.QueryCommitteesResponse): unknown;
                fromPartial(object: {
                    committees?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _406.QueryCommitteesResponse;
            };
            QueryCommitteeRequest: {
                encode(message: _406.QueryCommitteeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _406.QueryCommitteeRequest;
                fromJSON(object: any): _406.QueryCommitteeRequest;
                toJSON(message: _406.QueryCommitteeRequest): unknown;
                fromPartial(object: {
                    committeeId?: any;
                }): _406.QueryCommitteeRequest;
            };
            QueryCommitteeResponse: {
                encode(message: _406.QueryCommitteeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _406.QueryCommitteeResponse;
                fromJSON(object: any): _406.QueryCommitteeResponse;
                toJSON(message: _406.QueryCommitteeResponse): unknown;
                fromPartial(object: {
                    committee?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _406.QueryCommitteeResponse;
            };
            QueryProposalsRequest: {
                encode(message: _406.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _406.QueryProposalsRequest;
                fromJSON(object: any): _406.QueryProposalsRequest;
                toJSON(message: _406.QueryProposalsRequest): unknown;
                fromPartial(object: {
                    committeeId?: any;
                }): _406.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _406.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _406.QueryProposalsResponse;
                fromJSON(object: any): _406.QueryProposalsResponse;
                toJSON(message: _406.QueryProposalsResponse): unknown;
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
                }): _406.QueryProposalsResponse;
            };
            QueryProposalRequest: {
                encode(message: _406.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _406.QueryProposalRequest;
                fromJSON(object: any): _406.QueryProposalRequest;
                toJSON(message: _406.QueryProposalRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _406.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _406.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _406.QueryProposalResponse;
                fromJSON(object: any): _406.QueryProposalResponse;
                toJSON(message: _406.QueryProposalResponse): unknown;
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
                }): _406.QueryProposalResponse;
            };
            QueryNextProposalIDRequest: {
                encode(_: _406.QueryNextProposalIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _406.QueryNextProposalIDRequest;
                fromJSON(_: any): _406.QueryNextProposalIDRequest;
                toJSON(_: _406.QueryNextProposalIDRequest): unknown;
                fromPartial(_: {}): _406.QueryNextProposalIDRequest;
            };
            QueryNextProposalIDResponse: {
                encode(message: _406.QueryNextProposalIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _406.QueryNextProposalIDResponse;
                fromJSON(object: any): _406.QueryNextProposalIDResponse;
                toJSON(message: _406.QueryNextProposalIDResponse): unknown;
                fromPartial(object: {
                    nextProposalId?: any;
                }): _406.QueryNextProposalIDResponse;
            };
            QueryVotesRequest: {
                encode(message: _406.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _406.QueryVotesRequest;
                fromJSON(object: any): _406.QueryVotesRequest;
                toJSON(message: _406.QueryVotesRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _406.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _406.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _406.QueryVotesResponse;
                fromJSON(object: any): _406.QueryVotesResponse;
                toJSON(message: _406.QueryVotesResponse): unknown;
                fromPartial(object: {
                    votes?: {
                        proposalId?: any;
                        voter?: string;
                        voteType?: _403.VoteType;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _406.QueryVotesResponse;
            };
            QueryVoteRequest: {
                encode(message: _406.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _406.QueryVoteRequest;
                fromJSON(object: any): _406.QueryVoteRequest;
                toJSON(message: _406.QueryVoteRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                }): _406.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _406.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _406.QueryVoteResponse;
                fromJSON(object: any): _406.QueryVoteResponse;
                toJSON(message: _406.QueryVoteResponse): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    voteType?: _403.VoteType;
                }): _406.QueryVoteResponse;
            };
            QueryTallyRequest: {
                encode(message: _406.QueryTallyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _406.QueryTallyRequest;
                fromJSON(object: any): _406.QueryTallyRequest;
                toJSON(message: _406.QueryTallyRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _406.QueryTallyRequest;
            };
            QueryTallyResponse: {
                encode(message: _406.QueryTallyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _406.QueryTallyResponse;
                fromJSON(object: any): _406.QueryTallyResponse;
                toJSON(message: _406.QueryTallyResponse): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    yesVotes?: string;
                    noVotes?: string;
                    currentVotes?: string;
                    possibleVotes?: string;
                    voteThreshold?: string;
                    quorum?: string;
                }): _406.QueryTallyResponse;
            };
            QueryRawParamsRequest: {
                encode(message: _406.QueryRawParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _406.QueryRawParamsRequest;
                fromJSON(object: any): _406.QueryRawParamsRequest;
                toJSON(message: _406.QueryRawParamsRequest): unknown;
                fromPartial(object: {
                    subspace?: string;
                    key?: string;
                }): _406.QueryRawParamsRequest;
            };
            QueryRawParamsResponse: {
                encode(message: _406.QueryRawParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _406.QueryRawParamsResponse;
                fromJSON(object: any): _406.QueryRawParamsResponse;
                toJSON(message: _406.QueryRawParamsResponse): unknown;
                fromPartial(object: {
                    rawData?: string;
                }): _406.QueryRawParamsResponse;
            };
            CommitteeChangeProposal: {
                encode(message: _405.CommitteeChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.CommitteeChangeProposal;
                fromJSON(object: any): _405.CommitteeChangeProposal;
                toJSON(message: _405.CommitteeChangeProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    newCommittee?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _405.CommitteeChangeProposal;
            };
            CommitteeDeleteProposal: {
                encode(message: _405.CommitteeDeleteProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.CommitteeDeleteProposal;
                fromJSON(object: any): _405.CommitteeDeleteProposal;
                toJSON(message: _405.CommitteeDeleteProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    committeeId?: any;
                }): _405.CommitteeDeleteProposal;
            };
            GodPermission: {
                encode(_: _404.GodPermission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _404.GodPermission;
                fromJSON(_: any): _404.GodPermission;
                toJSON(_: _404.GodPermission): unknown;
                fromPartial(_: {}): _404.GodPermission;
            };
            SoftwareUpgradePermission: {
                encode(_: _404.SoftwareUpgradePermission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _404.SoftwareUpgradePermission;
                fromJSON(_: any): _404.SoftwareUpgradePermission;
                toJSON(_: _404.SoftwareUpgradePermission): unknown;
                fromPartial(_: {}): _404.SoftwareUpgradePermission;
            };
            TextPermission: {
                encode(_: _404.TextPermission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _404.TextPermission;
                fromJSON(_: any): _404.TextPermission;
                toJSON(_: _404.TextPermission): unknown;
                fromPartial(_: {}): _404.TextPermission;
            };
            ParamsChangePermission: {
                encode(message: _404.ParamsChangePermission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _404.ParamsChangePermission;
                fromJSON(object: any): _404.ParamsChangePermission;
                toJSON(message: _404.ParamsChangePermission): unknown;
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
                }): _404.ParamsChangePermission;
            };
            AllowedParamsChange: {
                encode(message: _404.AllowedParamsChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _404.AllowedParamsChange;
                fromJSON(object: any): _404.AllowedParamsChange;
                toJSON(message: _404.AllowedParamsChange): unknown;
                fromPartial(object: {
                    subspace?: string;
                    key?: string;
                    singleSubparamAllowedAttrs?: string[];
                    multiSubparamsRequirements?: {
                        key?: string;
                        val?: string;
                        allowedSubparamAttrChanges?: string[];
                    }[];
                }): _404.AllowedParamsChange;
            };
            SubparamRequirement: {
                encode(message: _404.SubparamRequirement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _404.SubparamRequirement;
                fromJSON(object: any): _404.SubparamRequirement;
                toJSON(message: _404.SubparamRequirement): unknown;
                fromPartial(object: {
                    key?: string;
                    val?: string;
                    allowedSubparamAttrChanges?: string[];
                }): _404.SubparamRequirement;
            };
            voteTypeFromJSON(object: any): _403.VoteType;
            voteTypeToJSON(object: _403.VoteType): string;
            VoteType: typeof _403.VoteType;
            GenesisState: {
                encode(message: _403.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _403.GenesisState;
                fromJSON(object: any): _403.GenesisState;
                toJSON(message: _403.GenesisState): unknown;
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
                        voteType?: _403.VoteType;
                    }[];
                }): _403.GenesisState;
            };
            Proposal: {
                encode(message: _403.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _403.Proposal;
                fromJSON(object: any): _403.Proposal;
                toJSON(message: _403.Proposal): unknown;
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
                }): _403.Proposal;
            };
            Vote: {
                encode(message: _403.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _403.Vote;
                fromJSON(object: any): _403.Vote;
                toJSON(message: _403.Vote): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: Uint8Array;
                    voteType?: _403.VoteType;
                }): _403.Vote;
            };
            tallyOptionFromJSON(object: any): _402.TallyOption;
            tallyOptionToJSON(object: _402.TallyOption): string;
            TallyOption: typeof _402.TallyOption;
            BaseCommittee: {
                encode(message: _402.BaseCommittee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _402.BaseCommittee;
                fromJSON(object: any): _402.BaseCommittee;
                toJSON(message: _402.BaseCommittee): unknown;
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
                    tallyOption?: _402.TallyOption;
                }): _402.BaseCommittee;
            };
            MemberCommittee: {
                encode(message: _402.MemberCommittee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _402.MemberCommittee;
                fromJSON(object: any): _402.MemberCommittee;
                toJSON(message: _402.MemberCommittee): unknown;
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
                        tallyOption?: _402.TallyOption;
                    };
                }): _402.MemberCommittee;
            };
            TokenCommittee: {
                encode(message: _402.TokenCommittee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _402.TokenCommittee;
                fromJSON(object: any): _402.TokenCommittee;
                toJSON(message: _402.TokenCommittee): unknown;
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
                        tallyOption?: _402.TallyOption;
                    };
                    quorum?: string;
                    tallyDenom?: string;
                }): _402.TokenCommittee;
            };
        };
    }
    namespace earn {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    deposit(value: _412.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdraw(value: _412.MsgWithdraw): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    deposit(value: _412.MsgDeposit): {
                        typeUrl: string;
                        value: _412.MsgDeposit;
                    };
                    withdraw(value: _412.MsgWithdraw): {
                        typeUrl: string;
                        value: _412.MsgWithdraw;
                    };
                };
                toJSON: {
                    deposit(value: _412.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdraw(value: _412.MsgWithdraw): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    deposit(value: any): {
                        typeUrl: string;
                        value: _412.MsgDeposit;
                    };
                    withdraw(value: any): {
                        typeUrl: string;
                        value: _412.MsgWithdraw;
                    };
                };
                fromPartial: {
                    deposit(value: _412.MsgDeposit): {
                        typeUrl: string;
                        value: _412.MsgDeposit;
                    };
                    withdraw(value: _412.MsgWithdraw): {
                        typeUrl: string;
                        value: _412.MsgWithdraw;
                    };
                };
            };
            AminoConverter: {
                "/kava.earn.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ depositor, amount }: _412.MsgDeposit) => {
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
                    }) => _412.MsgDeposit;
                };
                "/kava.earn.v1beta1.MsgWithdraw": {
                    aminoType: string;
                    toAmino: ({ from, amount }: _412.MsgWithdraw) => {
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
                    }) => _412.MsgWithdraw;
                };
            };
            AllowedVault: {
                encode(message: _413.AllowedVault, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _413.AllowedVault;
                fromJSON(object: any): _413.AllowedVault;
                toJSON(message: _413.AllowedVault): unknown;
                fromPartial(object: {
                    denom?: string;
                    vaultStrategy?: _411.StrategyType;
                }): _413.AllowedVault;
            };
            VaultRecord: {
                encode(message: _413.VaultRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _413.VaultRecord;
                fromJSON(object: any): _413.VaultRecord;
                toJSON(message: _413.VaultRecord): unknown;
                fromPartial(object: {
                    denom?: string;
                    totalSupply?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _413.VaultRecord;
            };
            VaultShareRecord: {
                encode(message: _413.VaultShareRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _413.VaultShareRecord;
                fromJSON(object: any): _413.VaultShareRecord;
                toJSON(message: _413.VaultShareRecord): unknown;
                fromPartial(object: {
                    depositor?: Uint8Array;
                    amountSupplied?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _413.VaultShareRecord;
            };
            MsgDeposit: {
                encode(message: _412.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _412.MsgDeposit;
                fromJSON(object: any): _412.MsgDeposit;
                toJSON(message: _412.MsgDeposit): unknown;
                fromPartial(object: {
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _412.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _412.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _412.MsgDepositResponse;
                fromJSON(_: any): _412.MsgDepositResponse;
                toJSON(_: _412.MsgDepositResponse): unknown;
                fromPartial(_: {}): _412.MsgDepositResponse;
            };
            MsgWithdraw: {
                encode(message: _412.MsgWithdraw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _412.MsgWithdraw;
                fromJSON(object: any): _412.MsgWithdraw;
                toJSON(message: _412.MsgWithdraw): unknown;
                fromPartial(object: {
                    from?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _412.MsgWithdraw;
            };
            MsgWithdrawResponse: {
                encode(_: _412.MsgWithdrawResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _412.MsgWithdrawResponse;
                fromJSON(_: any): _412.MsgWithdrawResponse;
                toJSON(_: _412.MsgWithdrawResponse): unknown;
                fromPartial(_: {}): _412.MsgWithdrawResponse;
            };
            strategyTypeFromJSON(object: any): _411.StrategyType;
            strategyTypeToJSON(object: _411.StrategyType): string;
            StrategyType: typeof _411.StrategyType;
            QueryParamsRequest: {
                encode(_: _410.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _410.QueryParamsRequest;
                fromJSON(_: any): _410.QueryParamsRequest;
                toJSON(_: _410.QueryParamsRequest): unknown;
                fromPartial(_: {}): _410.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _410.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _410.QueryParamsResponse;
                fromJSON(object: any): _410.QueryParamsResponse;
                toJSON(message: _410.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        allowedVaults?: {
                            denom?: string;
                            vaultStrategy?: _411.StrategyType;
                        }[];
                    };
                }): _410.QueryParamsResponse;
            };
            QueryVaultsRequest: {
                encode(message: _410.QueryVaultsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _410.QueryVaultsRequest;
                fromJSON(object: any): _410.QueryVaultsRequest;
                toJSON(message: _410.QueryVaultsRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _410.QueryVaultsRequest;
            };
            QueryVaultsResponse: {
                encode(message: _410.QueryVaultsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _410.QueryVaultsResponse;
                fromJSON(object: any): _410.QueryVaultsResponse;
                toJSON(message: _410.QueryVaultsResponse): unknown;
                fromPartial(object: {
                    vaults?: {
                        denom?: string;
                        vaultStrategy?: _411.StrategyType;
                        totalSupplied?: string;
                        totalValue?: string;
                    }[];
                }): _410.QueryVaultsResponse;
            };
            VaultResponse: {
                encode(message: _410.VaultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _410.VaultResponse;
                fromJSON(object: any): _410.VaultResponse;
                toJSON(message: _410.VaultResponse): unknown;
                fromPartial(object: {
                    denom?: string;
                    vaultStrategy?: _411.StrategyType;
                    totalSupplied?: string;
                    totalValue?: string;
                }): _410.VaultResponse;
            };
            QueryDepositsRequest: {
                encode(message: _410.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _410.QueryDepositsRequest;
                fromJSON(object: any): _410.QueryDepositsRequest;
                toJSON(message: _410.QueryDepositsRequest): unknown;
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
                }): _410.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _410.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _410.QueryDepositsResponse;
                fromJSON(object: any): _410.QueryDepositsResponse;
                toJSON(message: _410.QueryDepositsResponse): unknown;
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
                }): _410.QueryDepositsResponse;
            };
            DepositResponse: {
                encode(message: _410.DepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _410.DepositResponse;
                fromJSON(object: any): _410.DepositResponse;
                toJSON(message: _410.DepositResponse): unknown;
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
                }): _410.DepositResponse;
            };
            QueryTotalDepositedRequest: {
                encode(message: _410.QueryTotalDepositedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _410.QueryTotalDepositedRequest;
                fromJSON(object: any): _410.QueryTotalDepositedRequest;
                toJSON(message: _410.QueryTotalDepositedRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _410.QueryTotalDepositedRequest;
            };
            QueryTotalDepositedResponse: {
                encode(message: _410.QueryTotalDepositedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _410.QueryTotalDepositedResponse;
                fromJSON(object: any): _410.QueryTotalDepositedResponse;
                toJSON(message: _410.QueryTotalDepositedResponse): unknown;
                fromPartial(object: {
                    suppliedCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _410.QueryTotalDepositedResponse;
            };
            Params: {
                encode(message: _409.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _409.Params;
                fromJSON(object: any): _409.Params;
                toJSON(message: _409.Params): unknown;
                fromPartial(object: {
                    allowedVaults?: {
                        denom?: string;
                        vaultStrategy?: _411.StrategyType;
                    }[];
                }): _409.Params;
            };
            GenesisState: {
                encode(message: _408.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _408.GenesisState;
                fromJSON(object: any): _408.GenesisState;
                toJSON(message: _408.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        allowedVaults?: {
                            denom?: string;
                            vaultStrategy?: _411.StrategyType;
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
                }): _408.GenesisState;
            };
        };
    }
    namespace evmutil {
        const v1beta1: {
            GenesisState: {
                encode(message: _414.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _414.GenesisState;
                fromJSON(object: any): _414.GenesisState;
                toJSON(message: _414.GenesisState): unknown;
                fromPartial(object: {
                    accounts?: {
                        address?: Uint8Array;
                        balance?: string;
                    }[];
                }): _414.GenesisState;
            };
            Account: {
                encode(message: _414.Account, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _414.Account;
                fromJSON(object: any): _414.Account;
                toJSON(message: _414.Account): unknown;
                fromPartial(object: {
                    address?: Uint8Array;
                    balance?: string;
                }): _414.Account;
            };
        };
    }
    namespace hard {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    deposit(value: _418.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdraw(value: _418.MsgWithdraw): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    borrow(value: _418.MsgBorrow): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    repay(value: _418.MsgRepay): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    liquidate(value: _418.MsgLiquidate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    deposit(value: _418.MsgDeposit): {
                        typeUrl: string;
                        value: _418.MsgDeposit;
                    };
                    withdraw(value: _418.MsgWithdraw): {
                        typeUrl: string;
                        value: _418.MsgWithdraw;
                    };
                    borrow(value: _418.MsgBorrow): {
                        typeUrl: string;
                        value: _418.MsgBorrow;
                    };
                    repay(value: _418.MsgRepay): {
                        typeUrl: string;
                        value: _418.MsgRepay;
                    };
                    liquidate(value: _418.MsgLiquidate): {
                        typeUrl: string;
                        value: _418.MsgLiquidate;
                    };
                };
                toJSON: {
                    deposit(value: _418.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdraw(value: _418.MsgWithdraw): {
                        typeUrl: string;
                        value: unknown;
                    };
                    borrow(value: _418.MsgBorrow): {
                        typeUrl: string;
                        value: unknown;
                    };
                    repay(value: _418.MsgRepay): {
                        typeUrl: string;
                        value: unknown;
                    };
                    liquidate(value: _418.MsgLiquidate): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    deposit(value: any): {
                        typeUrl: string;
                        value: _418.MsgDeposit;
                    };
                    withdraw(value: any): {
                        typeUrl: string;
                        value: _418.MsgWithdraw;
                    };
                    borrow(value: any): {
                        typeUrl: string;
                        value: _418.MsgBorrow;
                    };
                    repay(value: any): {
                        typeUrl: string;
                        value: _418.MsgRepay;
                    };
                    liquidate(value: any): {
                        typeUrl: string;
                        value: _418.MsgLiquidate;
                    };
                };
                fromPartial: {
                    deposit(value: _418.MsgDeposit): {
                        typeUrl: string;
                        value: _418.MsgDeposit;
                    };
                    withdraw(value: _418.MsgWithdraw): {
                        typeUrl: string;
                        value: _418.MsgWithdraw;
                    };
                    borrow(value: _418.MsgBorrow): {
                        typeUrl: string;
                        value: _418.MsgBorrow;
                    };
                    repay(value: _418.MsgRepay): {
                        typeUrl: string;
                        value: _418.MsgRepay;
                    };
                    liquidate(value: _418.MsgLiquidate): {
                        typeUrl: string;
                        value: _418.MsgLiquidate;
                    };
                };
            };
            AminoConverter: {
                "/kava.hard.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ depositor, amount }: _418.MsgDeposit) => {
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
                    }) => _418.MsgDeposit;
                };
                "/kava.hard.v1beta1.MsgWithdraw": {
                    aminoType: string;
                    toAmino: ({ depositor, amount }: _418.MsgWithdraw) => {
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
                    }) => _418.MsgWithdraw;
                };
                "/kava.hard.v1beta1.MsgBorrow": {
                    aminoType: string;
                    toAmino: ({ borrower, amount }: _418.MsgBorrow) => {
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
                    }) => _418.MsgBorrow;
                };
                "/kava.hard.v1beta1.MsgRepay": {
                    aminoType: string;
                    toAmino: ({ sender, owner, amount }: _418.MsgRepay) => {
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
                    }) => _418.MsgRepay;
                };
                "/kava.hard.v1beta1.MsgLiquidate": {
                    aminoType: string;
                    toAmino: ({ keeper, borrower }: _418.MsgLiquidate) => {
                        keeper: string;
                        borrower: string;
                    };
                    fromAmino: ({ keeper, borrower }: {
                        keeper: string;
                        borrower: string;
                    }) => _418.MsgLiquidate;
                };
            };
            MsgDeposit: {
                encode(message: _418.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _418.MsgDeposit;
                fromJSON(object: any): _418.MsgDeposit;
                toJSON(message: _418.MsgDeposit): unknown;
                fromPartial(object: {
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _418.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _418.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _418.MsgDepositResponse;
                fromJSON(_: any): _418.MsgDepositResponse;
                toJSON(_: _418.MsgDepositResponse): unknown;
                fromPartial(_: {}): _418.MsgDepositResponse;
            };
            MsgWithdraw: {
                encode(message: _418.MsgWithdraw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _418.MsgWithdraw;
                fromJSON(object: any): _418.MsgWithdraw;
                toJSON(message: _418.MsgWithdraw): unknown;
                fromPartial(object: {
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _418.MsgWithdraw;
            };
            MsgWithdrawResponse: {
                encode(_: _418.MsgWithdrawResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _418.MsgWithdrawResponse;
                fromJSON(_: any): _418.MsgWithdrawResponse;
                toJSON(_: _418.MsgWithdrawResponse): unknown;
                fromPartial(_: {}): _418.MsgWithdrawResponse;
            };
            MsgBorrow: {
                encode(message: _418.MsgBorrow, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _418.MsgBorrow;
                fromJSON(object: any): _418.MsgBorrow;
                toJSON(message: _418.MsgBorrow): unknown;
                fromPartial(object: {
                    borrower?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _418.MsgBorrow;
            };
            MsgBorrowResponse: {
                encode(_: _418.MsgBorrowResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _418.MsgBorrowResponse;
                fromJSON(_: any): _418.MsgBorrowResponse;
                toJSON(_: _418.MsgBorrowResponse): unknown;
                fromPartial(_: {}): _418.MsgBorrowResponse;
            };
            MsgRepay: {
                encode(message: _418.MsgRepay, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _418.MsgRepay;
                fromJSON(object: any): _418.MsgRepay;
                toJSON(message: _418.MsgRepay): unknown;
                fromPartial(object: {
                    sender?: string;
                    owner?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _418.MsgRepay;
            };
            MsgRepayResponse: {
                encode(_: _418.MsgRepayResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _418.MsgRepayResponse;
                fromJSON(_: any): _418.MsgRepayResponse;
                toJSON(_: _418.MsgRepayResponse): unknown;
                fromPartial(_: {}): _418.MsgRepayResponse;
            };
            MsgLiquidate: {
                encode(message: _418.MsgLiquidate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _418.MsgLiquidate;
                fromJSON(object: any): _418.MsgLiquidate;
                toJSON(message: _418.MsgLiquidate): unknown;
                fromPartial(object: {
                    keeper?: string;
                    borrower?: string;
                }): _418.MsgLiquidate;
            };
            MsgLiquidateResponse: {
                encode(_: _418.MsgLiquidateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _418.MsgLiquidateResponse;
                fromJSON(_: any): _418.MsgLiquidateResponse;
                toJSON(_: _418.MsgLiquidateResponse): unknown;
                fromPartial(_: {}): _418.MsgLiquidateResponse;
            };
            QueryParamsRequest: {
                encode(_: _417.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _417.QueryParamsRequest;
                fromJSON(_: any): _417.QueryParamsRequest;
                toJSON(_: _417.QueryParamsRequest): unknown;
                fromPartial(_: {}): _417.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _417.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _417.QueryParamsResponse;
                fromJSON(object: any): _417.QueryParamsResponse;
                toJSON(message: _417.QueryParamsResponse): unknown;
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
                }): _417.QueryParamsResponse;
            };
            QueryAccountsRequest: {
                encode(_: _417.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _417.QueryAccountsRequest;
                fromJSON(_: any): _417.QueryAccountsRequest;
                toJSON(_: _417.QueryAccountsRequest): unknown;
                fromPartial(_: {}): _417.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _417.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _417.QueryAccountsResponse;
                fromJSON(object: any): _417.QueryAccountsResponse;
                toJSON(message: _417.QueryAccountsResponse): unknown;
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
                }): _417.QueryAccountsResponse;
            };
            QueryDepositsRequest: {
                encode(message: _417.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _417.QueryDepositsRequest;
                fromJSON(object: any): _417.QueryDepositsRequest;
                toJSON(message: _417.QueryDepositsRequest): unknown;
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
                }): _417.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _417.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _417.QueryDepositsResponse;
                fromJSON(object: any): _417.QueryDepositsResponse;
                toJSON(message: _417.QueryDepositsResponse): unknown;
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
                }): _417.QueryDepositsResponse;
            };
            QueryUnsyncedDepositsRequest: {
                encode(message: _417.QueryUnsyncedDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _417.QueryUnsyncedDepositsRequest;
                fromJSON(object: any): _417.QueryUnsyncedDepositsRequest;
                toJSON(message: _417.QueryUnsyncedDepositsRequest): unknown;
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
                }): _417.QueryUnsyncedDepositsRequest;
            };
            QueryUnsyncedDepositsResponse: {
                encode(message: _417.QueryUnsyncedDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _417.QueryUnsyncedDepositsResponse;
                fromJSON(object: any): _417.QueryUnsyncedDepositsResponse;
                toJSON(message: _417.QueryUnsyncedDepositsResponse): unknown;
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
                }): _417.QueryUnsyncedDepositsResponse;
            };
            QueryTotalDepositedRequest: {
                encode(message: _417.QueryTotalDepositedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _417.QueryTotalDepositedRequest;
                fromJSON(object: any): _417.QueryTotalDepositedRequest;
                toJSON(message: _417.QueryTotalDepositedRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _417.QueryTotalDepositedRequest;
            };
            QueryTotalDepositedResponse: {
                encode(message: _417.QueryTotalDepositedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _417.QueryTotalDepositedResponse;
                fromJSON(object: any): _417.QueryTotalDepositedResponse;
                toJSON(message: _417.QueryTotalDepositedResponse): unknown;
                fromPartial(object: {
                    suppliedCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _417.QueryTotalDepositedResponse;
            };
            QueryBorrowsRequest: {
                encode(message: _417.QueryBorrowsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _417.QueryBorrowsRequest;
                fromJSON(object: any): _417.QueryBorrowsRequest;
                toJSON(message: _417.QueryBorrowsRequest): unknown;
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
                }): _417.QueryBorrowsRequest;
            };
            QueryBorrowsResponse: {
                encode(message: _417.QueryBorrowsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _417.QueryBorrowsResponse;
                fromJSON(object: any): _417.QueryBorrowsResponse;
                toJSON(message: _417.QueryBorrowsResponse): unknown;
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
                }): _417.QueryBorrowsResponse;
            };
            QueryUnsyncedBorrowsRequest: {
                encode(message: _417.QueryUnsyncedBorrowsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _417.QueryUnsyncedBorrowsRequest;
                fromJSON(object: any): _417.QueryUnsyncedBorrowsRequest;
                toJSON(message: _417.QueryUnsyncedBorrowsRequest): unknown;
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
                }): _417.QueryUnsyncedBorrowsRequest;
            };
            QueryUnsyncedBorrowsResponse: {
                encode(message: _417.QueryUnsyncedBorrowsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _417.QueryUnsyncedBorrowsResponse;
                fromJSON(object: any): _417.QueryUnsyncedBorrowsResponse;
                toJSON(message: _417.QueryUnsyncedBorrowsResponse): unknown;
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
                }): _417.QueryUnsyncedBorrowsResponse;
            };
            QueryTotalBorrowedRequest: {
                encode(message: _417.QueryTotalBorrowedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _417.QueryTotalBorrowedRequest;
                fromJSON(object: any): _417.QueryTotalBorrowedRequest;
                toJSON(message: _417.QueryTotalBorrowedRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _417.QueryTotalBorrowedRequest;
            };
            QueryTotalBorrowedResponse: {
                encode(message: _417.QueryTotalBorrowedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _417.QueryTotalBorrowedResponse;
                fromJSON(object: any): _417.QueryTotalBorrowedResponse;
                toJSON(message: _417.QueryTotalBorrowedResponse): unknown;
                fromPartial(object: {
                    borrowedCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _417.QueryTotalBorrowedResponse;
            };
            QueryInterestRateRequest: {
                encode(message: _417.QueryInterestRateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _417.QueryInterestRateRequest;
                fromJSON(object: any): _417.QueryInterestRateRequest;
                toJSON(message: _417.QueryInterestRateRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _417.QueryInterestRateRequest;
            };
            QueryInterestRateResponse: {
                encode(message: _417.QueryInterestRateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _417.QueryInterestRateResponse;
                fromJSON(object: any): _417.QueryInterestRateResponse;
                toJSON(message: _417.QueryInterestRateResponse): unknown;
                fromPartial(object: {
                    interestRates?: {
                        denom?: string;
                        supplyInterestRate?: string;
                        borrowInterestRate?: string;
                    }[];
                }): _417.QueryInterestRateResponse;
            };
            QueryReservesRequest: {
                encode(message: _417.QueryReservesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _417.QueryReservesRequest;
                fromJSON(object: any): _417.QueryReservesRequest;
                toJSON(message: _417.QueryReservesRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _417.QueryReservesRequest;
            };
            QueryReservesResponse: {
                encode(message: _417.QueryReservesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _417.QueryReservesResponse;
                fromJSON(object: any): _417.QueryReservesResponse;
                toJSON(message: _417.QueryReservesResponse): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _417.QueryReservesResponse;
            };
            QueryInterestFactorsRequest: {
                encode(message: _417.QueryInterestFactorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _417.QueryInterestFactorsRequest;
                fromJSON(object: any): _417.QueryInterestFactorsRequest;
                toJSON(message: _417.QueryInterestFactorsRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _417.QueryInterestFactorsRequest;
            };
            QueryInterestFactorsResponse: {
                encode(message: _417.QueryInterestFactorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _417.QueryInterestFactorsResponse;
                fromJSON(object: any): _417.QueryInterestFactorsResponse;
                toJSON(message: _417.QueryInterestFactorsResponse): unknown;
                fromPartial(object: {
                    interestFactors?: {
                        denom?: string;
                        borrowInterestFactor?: string;
                        supplyInterestFactor?: string;
                    }[];
                }): _417.QueryInterestFactorsResponse;
            };
            DepositResponse: {
                encode(message: _417.DepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _417.DepositResponse;
                fromJSON(object: any): _417.DepositResponse;
                toJSON(message: _417.DepositResponse): unknown;
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
                }): _417.DepositResponse;
            };
            SupplyInterestFactorResponse: {
                encode(message: _417.SupplyInterestFactorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _417.SupplyInterestFactorResponse;
                fromJSON(object: any): _417.SupplyInterestFactorResponse;
                toJSON(message: _417.SupplyInterestFactorResponse): unknown;
                fromPartial(object: {
                    denom?: string;
                    value?: string;
                }): _417.SupplyInterestFactorResponse;
            };
            BorrowResponse: {
                encode(message: _417.BorrowResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _417.BorrowResponse;
                fromJSON(object: any): _417.BorrowResponse;
                toJSON(message: _417.BorrowResponse): unknown;
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
                }): _417.BorrowResponse;
            };
            BorrowInterestFactorResponse: {
                encode(message: _417.BorrowInterestFactorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _417.BorrowInterestFactorResponse;
                fromJSON(object: any): _417.BorrowInterestFactorResponse;
                toJSON(message: _417.BorrowInterestFactorResponse): unknown;
                fromPartial(object: {
                    denom?: string;
                    value?: string;
                }): _417.BorrowInterestFactorResponse;
            };
            MoneyMarketInterestRate: {
                encode(message: _417.MoneyMarketInterestRate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _417.MoneyMarketInterestRate;
                fromJSON(object: any): _417.MoneyMarketInterestRate;
                toJSON(message: _417.MoneyMarketInterestRate): unknown;
                fromPartial(object: {
                    denom?: string;
                    supplyInterestRate?: string;
                    borrowInterestRate?: string;
                }): _417.MoneyMarketInterestRate;
            };
            InterestFactor: {
                encode(message: _417.InterestFactor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _417.InterestFactor;
                fromJSON(object: any): _417.InterestFactor;
                toJSON(message: _417.InterestFactor): unknown;
                fromPartial(object: {
                    denom?: string;
                    borrowInterestFactor?: string;
                    supplyInterestFactor?: string;
                }): _417.InterestFactor;
            };
            Params: {
                encode(message: _416.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _416.Params;
                fromJSON(object: any): _416.Params;
                toJSON(message: _416.Params): unknown;
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
                }): _416.Params;
            };
            MoneyMarket: {
                encode(message: _416.MoneyMarket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _416.MoneyMarket;
                fromJSON(object: any): _416.MoneyMarket;
                toJSON(message: _416.MoneyMarket): unknown;
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
                }): _416.MoneyMarket;
            };
            BorrowLimit: {
                encode(message: _416.BorrowLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _416.BorrowLimit;
                fromJSON(object: any): _416.BorrowLimit;
                toJSON(message: _416.BorrowLimit): unknown;
                fromPartial(object: {
                    hasMaxLimit?: boolean;
                    maximumLimit?: string;
                    loanToValue?: string;
                }): _416.BorrowLimit;
            };
            InterestRateModel: {
                encode(message: _416.InterestRateModel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _416.InterestRateModel;
                fromJSON(object: any): _416.InterestRateModel;
                toJSON(message: _416.InterestRateModel): unknown;
                fromPartial(object: {
                    baseRateApy?: string;
                    baseMultiplier?: string;
                    kink?: string;
                    jumpMultiplier?: string;
                }): _416.InterestRateModel;
            };
            Deposit: {
                encode(message: _416.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _416.Deposit;
                fromJSON(object: any): _416.Deposit;
                toJSON(message: _416.Deposit): unknown;
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
                }): _416.Deposit;
            };
            Borrow: {
                encode(message: _416.Borrow, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _416.Borrow;
                fromJSON(object: any): _416.Borrow;
                toJSON(message: _416.Borrow): unknown;
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
                }): _416.Borrow;
            };
            SupplyInterestFactor: {
                encode(message: _416.SupplyInterestFactor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _416.SupplyInterestFactor;
                fromJSON(object: any): _416.SupplyInterestFactor;
                toJSON(message: _416.SupplyInterestFactor): unknown;
                fromPartial(object: {
                    denom?: string;
                    value?: string;
                }): _416.SupplyInterestFactor;
            };
            BorrowInterestFactor: {
                encode(message: _416.BorrowInterestFactor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _416.BorrowInterestFactor;
                fromJSON(object: any): _416.BorrowInterestFactor;
                toJSON(message: _416.BorrowInterestFactor): unknown;
                fromPartial(object: {
                    denom?: string;
                    value?: string;
                }): _416.BorrowInterestFactor;
            };
            CoinsProto: {
                encode(message: _416.CoinsProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _416.CoinsProto;
                fromJSON(object: any): _416.CoinsProto;
                toJSON(message: _416.CoinsProto): unknown;
                fromPartial(object: {
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _416.CoinsProto;
            };
            GenesisState: {
                encode(message: _415.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _415.GenesisState;
                fromJSON(object: any): _415.GenesisState;
                toJSON(message: _415.GenesisState): unknown;
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
                }): _415.GenesisState;
            };
            GenesisAccumulationTime: {
                encode(message: _415.GenesisAccumulationTime, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _415.GenesisAccumulationTime;
                fromJSON(object: any): _415.GenesisAccumulationTime;
                toJSON(message: _415.GenesisAccumulationTime): unknown;
                fromPartial(object: {
                    collateralType?: string;
                    previousAccumulationTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    supplyInterestFactor?: string;
                    borrowInterestFactor?: string;
                }): _415.GenesisAccumulationTime;
            };
        };
    }
    namespace incentive {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    claimUSDXMintingReward(value: _422.MsgClaimUSDXMintingReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    claimHardReward(value: _422.MsgClaimHardReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    claimDelegatorReward(value: _422.MsgClaimDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    claimSwapReward(value: _422.MsgClaimSwapReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    claimSavingsReward(value: _422.MsgClaimSavingsReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    claimUSDXMintingReward(value: _422.MsgClaimUSDXMintingReward): {
                        typeUrl: string;
                        value: _422.MsgClaimUSDXMintingReward;
                    };
                    claimHardReward(value: _422.MsgClaimHardReward): {
                        typeUrl: string;
                        value: _422.MsgClaimHardReward;
                    };
                    claimDelegatorReward(value: _422.MsgClaimDelegatorReward): {
                        typeUrl: string;
                        value: _422.MsgClaimDelegatorReward;
                    };
                    claimSwapReward(value: _422.MsgClaimSwapReward): {
                        typeUrl: string;
                        value: _422.MsgClaimSwapReward;
                    };
                    claimSavingsReward(value: _422.MsgClaimSavingsReward): {
                        typeUrl: string;
                        value: _422.MsgClaimSavingsReward;
                    };
                };
                toJSON: {
                    claimUSDXMintingReward(value: _422.MsgClaimUSDXMintingReward): {
                        typeUrl: string;
                        value: unknown;
                    };
                    claimHardReward(value: _422.MsgClaimHardReward): {
                        typeUrl: string;
                        value: unknown;
                    };
                    claimDelegatorReward(value: _422.MsgClaimDelegatorReward): {
                        typeUrl: string;
                        value: unknown;
                    };
                    claimSwapReward(value: _422.MsgClaimSwapReward): {
                        typeUrl: string;
                        value: unknown;
                    };
                    claimSavingsReward(value: _422.MsgClaimSavingsReward): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    claimUSDXMintingReward(value: any): {
                        typeUrl: string;
                        value: _422.MsgClaimUSDXMintingReward;
                    };
                    claimHardReward(value: any): {
                        typeUrl: string;
                        value: _422.MsgClaimHardReward;
                    };
                    claimDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _422.MsgClaimDelegatorReward;
                    };
                    claimSwapReward(value: any): {
                        typeUrl: string;
                        value: _422.MsgClaimSwapReward;
                    };
                    claimSavingsReward(value: any): {
                        typeUrl: string;
                        value: _422.MsgClaimSavingsReward;
                    };
                };
                fromPartial: {
                    claimUSDXMintingReward(value: _422.MsgClaimUSDXMintingReward): {
                        typeUrl: string;
                        value: _422.MsgClaimUSDXMintingReward;
                    };
                    claimHardReward(value: _422.MsgClaimHardReward): {
                        typeUrl: string;
                        value: _422.MsgClaimHardReward;
                    };
                    claimDelegatorReward(value: _422.MsgClaimDelegatorReward): {
                        typeUrl: string;
                        value: _422.MsgClaimDelegatorReward;
                    };
                    claimSwapReward(value: _422.MsgClaimSwapReward): {
                        typeUrl: string;
                        value: _422.MsgClaimSwapReward;
                    };
                    claimSavingsReward(value: _422.MsgClaimSavingsReward): {
                        typeUrl: string;
                        value: _422.MsgClaimSavingsReward;
                    };
                };
            };
            AminoConverter: {
                "/kava.incentive.v1beta1.MsgClaimUSDXMintingReward": {
                    aminoType: string;
                    toAmino: ({ sender, multiplierName }: _422.MsgClaimUSDXMintingReward) => {
                        sender: string;
                        multiplier_name: string;
                    };
                    fromAmino: ({ sender, multiplier_name }: {
                        sender: string;
                        multiplier_name: string;
                    }) => _422.MsgClaimUSDXMintingReward;
                };
                "/kava.incentive.v1beta1.MsgClaimHardReward": {
                    aminoType: string;
                    toAmino: ({ sender, denomsToClaim }: _422.MsgClaimHardReward) => {
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
                    }) => _422.MsgClaimHardReward;
                };
                "/kava.incentive.v1beta1.MsgClaimDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ sender, denomsToClaim }: _422.MsgClaimDelegatorReward) => {
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
                    }) => _422.MsgClaimDelegatorReward;
                };
                "/kava.incentive.v1beta1.MsgClaimSwapReward": {
                    aminoType: string;
                    toAmino: ({ sender, denomsToClaim }: _422.MsgClaimSwapReward) => {
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
                    }) => _422.MsgClaimSwapReward;
                };
                "/kava.incentive.v1beta1.MsgClaimSavingsReward": {
                    aminoType: string;
                    toAmino: ({ sender, denomsToClaim }: _422.MsgClaimSavingsReward) => {
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
                    }) => _422.MsgClaimSavingsReward;
                };
            };
            Selection: {
                encode(message: _422.Selection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _422.Selection;
                fromJSON(object: any): _422.Selection;
                toJSON(message: _422.Selection): unknown;
                fromPartial(object: {
                    denom?: string;
                    multiplierName?: string;
                }): _422.Selection;
            };
            MsgClaimUSDXMintingReward: {
                encode(message: _422.MsgClaimUSDXMintingReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _422.MsgClaimUSDXMintingReward;
                fromJSON(object: any): _422.MsgClaimUSDXMintingReward;
                toJSON(message: _422.MsgClaimUSDXMintingReward): unknown;
                fromPartial(object: {
                    sender?: string;
                    multiplierName?: string;
                }): _422.MsgClaimUSDXMintingReward;
            };
            MsgClaimUSDXMintingRewardResponse: {
                encode(_: _422.MsgClaimUSDXMintingRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _422.MsgClaimUSDXMintingRewardResponse;
                fromJSON(_: any): _422.MsgClaimUSDXMintingRewardResponse;
                toJSON(_: _422.MsgClaimUSDXMintingRewardResponse): unknown;
                fromPartial(_: {}): _422.MsgClaimUSDXMintingRewardResponse;
            };
            MsgClaimHardReward: {
                encode(message: _422.MsgClaimHardReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _422.MsgClaimHardReward;
                fromJSON(object: any): _422.MsgClaimHardReward;
                toJSON(message: _422.MsgClaimHardReward): unknown;
                fromPartial(object: {
                    sender?: string;
                    denomsToClaim?: {
                        denom?: string;
                        multiplierName?: string;
                    }[];
                }): _422.MsgClaimHardReward;
            };
            MsgClaimHardRewardResponse: {
                encode(_: _422.MsgClaimHardRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _422.MsgClaimHardRewardResponse;
                fromJSON(_: any): _422.MsgClaimHardRewardResponse;
                toJSON(_: _422.MsgClaimHardRewardResponse): unknown;
                fromPartial(_: {}): _422.MsgClaimHardRewardResponse;
            };
            MsgClaimDelegatorReward: {
                encode(message: _422.MsgClaimDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _422.MsgClaimDelegatorReward;
                fromJSON(object: any): _422.MsgClaimDelegatorReward;
                toJSON(message: _422.MsgClaimDelegatorReward): unknown;
                fromPartial(object: {
                    sender?: string;
                    denomsToClaim?: {
                        denom?: string;
                        multiplierName?: string;
                    }[];
                }): _422.MsgClaimDelegatorReward;
            };
            MsgClaimDelegatorRewardResponse: {
                encode(_: _422.MsgClaimDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _422.MsgClaimDelegatorRewardResponse;
                fromJSON(_: any): _422.MsgClaimDelegatorRewardResponse;
                toJSON(_: _422.MsgClaimDelegatorRewardResponse): unknown;
                fromPartial(_: {}): _422.MsgClaimDelegatorRewardResponse;
            };
            MsgClaimSwapReward: {
                encode(message: _422.MsgClaimSwapReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _422.MsgClaimSwapReward;
                fromJSON(object: any): _422.MsgClaimSwapReward;
                toJSON(message: _422.MsgClaimSwapReward): unknown;
                fromPartial(object: {
                    sender?: string;
                    denomsToClaim?: {
                        denom?: string;
                        multiplierName?: string;
                    }[];
                }): _422.MsgClaimSwapReward;
            };
            MsgClaimSwapRewardResponse: {
                encode(_: _422.MsgClaimSwapRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _422.MsgClaimSwapRewardResponse;
                fromJSON(_: any): _422.MsgClaimSwapRewardResponse;
                toJSON(_: _422.MsgClaimSwapRewardResponse): unknown;
                fromPartial(_: {}): _422.MsgClaimSwapRewardResponse;
            };
            MsgClaimSavingsReward: {
                encode(message: _422.MsgClaimSavingsReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _422.MsgClaimSavingsReward;
                fromJSON(object: any): _422.MsgClaimSavingsReward;
                toJSON(message: _422.MsgClaimSavingsReward): unknown;
                fromPartial(object: {
                    sender?: string;
                    denomsToClaim?: {
                        denom?: string;
                        multiplierName?: string;
                    }[];
                }): _422.MsgClaimSavingsReward;
            };
            MsgClaimSavingsRewardResponse: {
                encode(_: _422.MsgClaimSavingsRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _422.MsgClaimSavingsRewardResponse;
                fromJSON(_: any): _422.MsgClaimSavingsRewardResponse;
                toJSON(_: _422.MsgClaimSavingsRewardResponse): unknown;
                fromPartial(_: {}): _422.MsgClaimSavingsRewardResponse;
            };
            RewardPeriod: {
                encode(message: _421.RewardPeriod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _421.RewardPeriod;
                fromJSON(object: any): _421.RewardPeriod;
                toJSON(message: _421.RewardPeriod): unknown;
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
                }): _421.RewardPeriod;
            };
            MultiRewardPeriod: {
                encode(message: _421.MultiRewardPeriod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _421.MultiRewardPeriod;
                fromJSON(object: any): _421.MultiRewardPeriod;
                toJSON(message: _421.MultiRewardPeriod): unknown;
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
                }): _421.MultiRewardPeriod;
            };
            Multiplier: {
                encode(message: _421.Multiplier, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _421.Multiplier;
                fromJSON(object: any): _421.Multiplier;
                toJSON(message: _421.Multiplier): unknown;
                fromPartial(object: {
                    name?: string;
                    monthsLockup?: any;
                    factor?: Uint8Array;
                }): _421.Multiplier;
            };
            MultipliersPerDenom: {
                encode(message: _421.MultipliersPerDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _421.MultipliersPerDenom;
                fromJSON(object: any): _421.MultipliersPerDenom;
                toJSON(message: _421.MultipliersPerDenom): unknown;
                fromPartial(object: {
                    denom?: string;
                    multipliers?: {
                        name?: string;
                        monthsLockup?: any;
                        factor?: Uint8Array;
                    }[];
                }): _421.MultipliersPerDenom;
            };
            Params: {
                encode(message: _421.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _421.Params;
                fromJSON(object: any): _421.Params;
                toJSON(message: _421.Params): unknown;
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
                }): _421.Params;
            };
            AccumulationTime: {
                encode(message: _420.AccumulationTime, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _420.AccumulationTime;
                fromJSON(object: any): _420.AccumulationTime;
                toJSON(message: _420.AccumulationTime): unknown;
                fromPartial(object: {
                    collateralType?: string;
                    previousAccumulationTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _420.AccumulationTime;
            };
            GenesisRewardState: {
                encode(message: _420.GenesisRewardState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _420.GenesisRewardState;
                fromJSON(object: any): _420.GenesisRewardState;
                toJSON(message: _420.GenesisRewardState): unknown;
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
                }): _420.GenesisRewardState;
            };
            GenesisState: {
                encode(message: _420.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _420.GenesisState;
                fromJSON(object: any): _420.GenesisState;
                toJSON(message: _420.GenesisState): unknown;
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
                }): _420.GenesisState;
            };
            BaseClaim: {
                encode(message: _419.BaseClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _419.BaseClaim;
                fromJSON(object: any): _419.BaseClaim;
                toJSON(message: _419.BaseClaim): unknown;
                fromPartial(object: {
                    owner?: Uint8Array;
                    reward?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _419.BaseClaim;
            };
            BaseMultiClaim: {
                encode(message: _419.BaseMultiClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _419.BaseMultiClaim;
                fromJSON(object: any): _419.BaseMultiClaim;
                toJSON(message: _419.BaseMultiClaim): unknown;
                fromPartial(object: {
                    owner?: Uint8Array;
                    reward?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _419.BaseMultiClaim;
            };
            RewardIndex: {
                encode(message: _419.RewardIndex, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _419.RewardIndex;
                fromJSON(object: any): _419.RewardIndex;
                toJSON(message: _419.RewardIndex): unknown;
                fromPartial(object: {
                    collateralType?: string;
                    rewardFactor?: Uint8Array;
                }): _419.RewardIndex;
            };
            RewardIndexesProto: {
                encode(message: _419.RewardIndexesProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _419.RewardIndexesProto;
                fromJSON(object: any): _419.RewardIndexesProto;
                toJSON(message: _419.RewardIndexesProto): unknown;
                fromPartial(object: {
                    rewardIndexes?: {
                        collateralType?: string;
                        rewardFactor?: Uint8Array;
                    }[];
                }): _419.RewardIndexesProto;
            };
            MultiRewardIndex: {
                encode(message: _419.MultiRewardIndex, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _419.MultiRewardIndex;
                fromJSON(object: any): _419.MultiRewardIndex;
                toJSON(message: _419.MultiRewardIndex): unknown;
                fromPartial(object: {
                    collateralType?: string;
                    rewardIndexes?: {
                        collateralType?: string;
                        rewardFactor?: Uint8Array;
                    }[];
                }): _419.MultiRewardIndex;
            };
            MultiRewardIndexesProto: {
                encode(message: _419.MultiRewardIndexesProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _419.MultiRewardIndexesProto;
                fromJSON(object: any): _419.MultiRewardIndexesProto;
                toJSON(message: _419.MultiRewardIndexesProto): unknown;
                fromPartial(object: {
                    multiRewardIndexes?: {
                        collateralType?: string;
                        rewardIndexes?: {
                            collateralType?: string;
                            rewardFactor?: Uint8Array;
                        }[];
                    }[];
                }): _419.MultiRewardIndexesProto;
            };
            USDXMintingClaim: {
                encode(message: _419.USDXMintingClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _419.USDXMintingClaim;
                fromJSON(object: any): _419.USDXMintingClaim;
                toJSON(message: _419.USDXMintingClaim): unknown;
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
                }): _419.USDXMintingClaim;
            };
            HardLiquidityProviderClaim: {
                encode(message: _419.HardLiquidityProviderClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _419.HardLiquidityProviderClaim;
                fromJSON(object: any): _419.HardLiquidityProviderClaim;
                toJSON(message: _419.HardLiquidityProviderClaim): unknown;
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
                }): _419.HardLiquidityProviderClaim;
            };
            DelegatorClaim: {
                encode(message: _419.DelegatorClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _419.DelegatorClaim;
                fromJSON(object: any): _419.DelegatorClaim;
                toJSON(message: _419.DelegatorClaim): unknown;
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
                }): _419.DelegatorClaim;
            };
            SwapClaim: {
                encode(message: _419.SwapClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _419.SwapClaim;
                fromJSON(object: any): _419.SwapClaim;
                toJSON(message: _419.SwapClaim): unknown;
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
                }): _419.SwapClaim;
            };
            SavingsClaim: {
                encode(message: _419.SavingsClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _419.SavingsClaim;
                fromJSON(object: any): _419.SavingsClaim;
                toJSON(message: _419.SavingsClaim): unknown;
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
                }): _419.SavingsClaim;
            };
        };
    }
    namespace issuance {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    issueTokens(value: _425.MsgIssueTokens): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    redeemTokens(value: _425.MsgRedeemTokens): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    blockAddress(value: _425.MsgBlockAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unblockAddress(value: _425.MsgUnblockAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setPauseStatus(value: _425.MsgSetPauseStatus): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    issueTokens(value: _425.MsgIssueTokens): {
                        typeUrl: string;
                        value: _425.MsgIssueTokens;
                    };
                    redeemTokens(value: _425.MsgRedeemTokens): {
                        typeUrl: string;
                        value: _425.MsgRedeemTokens;
                    };
                    blockAddress(value: _425.MsgBlockAddress): {
                        typeUrl: string;
                        value: _425.MsgBlockAddress;
                    };
                    unblockAddress(value: _425.MsgUnblockAddress): {
                        typeUrl: string;
                        value: _425.MsgUnblockAddress;
                    };
                    setPauseStatus(value: _425.MsgSetPauseStatus): {
                        typeUrl: string;
                        value: _425.MsgSetPauseStatus;
                    };
                };
                toJSON: {
                    issueTokens(value: _425.MsgIssueTokens): {
                        typeUrl: string;
                        value: unknown;
                    };
                    redeemTokens(value: _425.MsgRedeemTokens): {
                        typeUrl: string;
                        value: unknown;
                    };
                    blockAddress(value: _425.MsgBlockAddress): {
                        typeUrl: string;
                        value: unknown;
                    };
                    unblockAddress(value: _425.MsgUnblockAddress): {
                        typeUrl: string;
                        value: unknown;
                    };
                    setPauseStatus(value: _425.MsgSetPauseStatus): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    issueTokens(value: any): {
                        typeUrl: string;
                        value: _425.MsgIssueTokens;
                    };
                    redeemTokens(value: any): {
                        typeUrl: string;
                        value: _425.MsgRedeemTokens;
                    };
                    blockAddress(value: any): {
                        typeUrl: string;
                        value: _425.MsgBlockAddress;
                    };
                    unblockAddress(value: any): {
                        typeUrl: string;
                        value: _425.MsgUnblockAddress;
                    };
                    setPauseStatus(value: any): {
                        typeUrl: string;
                        value: _425.MsgSetPauseStatus;
                    };
                };
                fromPartial: {
                    issueTokens(value: _425.MsgIssueTokens): {
                        typeUrl: string;
                        value: _425.MsgIssueTokens;
                    };
                    redeemTokens(value: _425.MsgRedeemTokens): {
                        typeUrl: string;
                        value: _425.MsgRedeemTokens;
                    };
                    blockAddress(value: _425.MsgBlockAddress): {
                        typeUrl: string;
                        value: _425.MsgBlockAddress;
                    };
                    unblockAddress(value: _425.MsgUnblockAddress): {
                        typeUrl: string;
                        value: _425.MsgUnblockAddress;
                    };
                    setPauseStatus(value: _425.MsgSetPauseStatus): {
                        typeUrl: string;
                        value: _425.MsgSetPauseStatus;
                    };
                };
            };
            AminoConverter: {
                "/kava.issuance.v1beta1.MsgIssueTokens": {
                    aminoType: string;
                    toAmino: ({ sender, tokens, receiver }: _425.MsgIssueTokens) => {
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
                    }) => _425.MsgIssueTokens;
                };
                "/kava.issuance.v1beta1.MsgRedeemTokens": {
                    aminoType: string;
                    toAmino: ({ sender, tokens }: _425.MsgRedeemTokens) => {
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
                    }) => _425.MsgRedeemTokens;
                };
                "/kava.issuance.v1beta1.MsgBlockAddress": {
                    aminoType: string;
                    toAmino: ({ sender, denom, blockedAddress }: _425.MsgBlockAddress) => {
                        sender: string;
                        denom: string;
                        blocked_address: string;
                    };
                    fromAmino: ({ sender, denom, blocked_address }: {
                        sender: string;
                        denom: string;
                        blocked_address: string;
                    }) => _425.MsgBlockAddress;
                };
                "/kava.issuance.v1beta1.MsgUnblockAddress": {
                    aminoType: string;
                    toAmino: ({ sender, denom, blockedAddress }: _425.MsgUnblockAddress) => {
                        sender: string;
                        denom: string;
                        blocked_address: string;
                    };
                    fromAmino: ({ sender, denom, blocked_address }: {
                        sender: string;
                        denom: string;
                        blocked_address: string;
                    }) => _425.MsgUnblockAddress;
                };
                "/kava.issuance.v1beta1.MsgSetPauseStatus": {
                    aminoType: string;
                    toAmino: ({ sender, denom, status }: _425.MsgSetPauseStatus) => {
                        sender: string;
                        denom: string;
                        status: boolean;
                    };
                    fromAmino: ({ sender, denom, status }: {
                        sender: string;
                        denom: string;
                        status: boolean;
                    }) => _425.MsgSetPauseStatus;
                };
            };
            MsgIssueTokens: {
                encode(message: _425.MsgIssueTokens, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _425.MsgIssueTokens;
                fromJSON(object: any): _425.MsgIssueTokens;
                toJSON(message: _425.MsgIssueTokens): unknown;
                fromPartial(object: {
                    sender?: string;
                    tokens?: {
                        denom?: string;
                        amount?: string;
                    };
                    receiver?: string;
                }): _425.MsgIssueTokens;
            };
            MsgIssueTokensResponse: {
                encode(_: _425.MsgIssueTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _425.MsgIssueTokensResponse;
                fromJSON(_: any): _425.MsgIssueTokensResponse;
                toJSON(_: _425.MsgIssueTokensResponse): unknown;
                fromPartial(_: {}): _425.MsgIssueTokensResponse;
            };
            MsgRedeemTokens: {
                encode(message: _425.MsgRedeemTokens, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _425.MsgRedeemTokens;
                fromJSON(object: any): _425.MsgRedeemTokens;
                toJSON(message: _425.MsgRedeemTokens): unknown;
                fromPartial(object: {
                    sender?: string;
                    tokens?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _425.MsgRedeemTokens;
            };
            MsgRedeemTokensResponse: {
                encode(_: _425.MsgRedeemTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _425.MsgRedeemTokensResponse;
                fromJSON(_: any): _425.MsgRedeemTokensResponse;
                toJSON(_: _425.MsgRedeemTokensResponse): unknown;
                fromPartial(_: {}): _425.MsgRedeemTokensResponse;
            };
            MsgBlockAddress: {
                encode(message: _425.MsgBlockAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _425.MsgBlockAddress;
                fromJSON(object: any): _425.MsgBlockAddress;
                toJSON(message: _425.MsgBlockAddress): unknown;
                fromPartial(object: {
                    sender?: string;
                    denom?: string;
                    blockedAddress?: string;
                }): _425.MsgBlockAddress;
            };
            MsgBlockAddressResponse: {
                encode(_: _425.MsgBlockAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _425.MsgBlockAddressResponse;
                fromJSON(_: any): _425.MsgBlockAddressResponse;
                toJSON(_: _425.MsgBlockAddressResponse): unknown;
                fromPartial(_: {}): _425.MsgBlockAddressResponse;
            };
            MsgUnblockAddress: {
                encode(message: _425.MsgUnblockAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _425.MsgUnblockAddress;
                fromJSON(object: any): _425.MsgUnblockAddress;
                toJSON(message: _425.MsgUnblockAddress): unknown;
                fromPartial(object: {
                    sender?: string;
                    denom?: string;
                    blockedAddress?: string;
                }): _425.MsgUnblockAddress;
            };
            MsgUnblockAddressResponse: {
                encode(_: _425.MsgUnblockAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _425.MsgUnblockAddressResponse;
                fromJSON(_: any): _425.MsgUnblockAddressResponse;
                toJSON(_: _425.MsgUnblockAddressResponse): unknown;
                fromPartial(_: {}): _425.MsgUnblockAddressResponse;
            };
            MsgSetPauseStatus: {
                encode(message: _425.MsgSetPauseStatus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _425.MsgSetPauseStatus;
                fromJSON(object: any): _425.MsgSetPauseStatus;
                toJSON(message: _425.MsgSetPauseStatus): unknown;
                fromPartial(object: {
                    sender?: string;
                    denom?: string;
                    status?: boolean;
                }): _425.MsgSetPauseStatus;
            };
            MsgSetPauseStatusResponse: {
                encode(_: _425.MsgSetPauseStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _425.MsgSetPauseStatusResponse;
                fromJSON(_: any): _425.MsgSetPauseStatusResponse;
                toJSON(_: _425.MsgSetPauseStatusResponse): unknown;
                fromPartial(_: {}): _425.MsgSetPauseStatusResponse;
            };
            QueryParamsRequest: {
                encode(_: _424.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _424.QueryParamsRequest;
                fromJSON(_: any): _424.QueryParamsRequest;
                toJSON(_: _424.QueryParamsRequest): unknown;
                fromPartial(_: {}): _424.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _424.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _424.QueryParamsResponse;
                fromJSON(object: any): _424.QueryParamsResponse;
                toJSON(message: _424.QueryParamsResponse): unknown;
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
                }): _424.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _423.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _423.GenesisState;
                fromJSON(object: any): _423.GenesisState;
                toJSON(message: _423.GenesisState): unknown;
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
                }): _423.GenesisState;
            };
            Params: {
                encode(message: _423.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _423.Params;
                fromJSON(object: any): _423.Params;
                toJSON(message: _423.Params): unknown;
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
                }): _423.Params;
            };
            Asset: {
                encode(message: _423.Asset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _423.Asset;
                fromJSON(object: any): _423.Asset;
                toJSON(message: _423.Asset): unknown;
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
                }): _423.Asset;
            };
            RateLimit: {
                encode(message: _423.RateLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _423.RateLimit;
                fromJSON(object: any): _423.RateLimit;
                toJSON(message: _423.RateLimit): unknown;
                fromPartial(object: {
                    active?: boolean;
                    limit?: Uint8Array;
                    timePeriod?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _423.RateLimit;
            };
            AssetSupply: {
                encode(message: _423.AssetSupply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _423.AssetSupply;
                fromJSON(object: any): _423.AssetSupply;
                toJSON(message: _423.AssetSupply): unknown;
                fromPartial(object: {
                    currentSupply?: {
                        denom?: string;
                        amount?: string;
                    };
                    timeElapsed?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _423.AssetSupply;
            };
        };
    }
    namespace kavadist {
        const v1beta1: {
            QueryParamsRequest: {
                encode(_: _429.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _429.QueryParamsRequest;
                fromJSON(_: any): _429.QueryParamsRequest;
                toJSON(_: _429.QueryParamsRequest): unknown;
                fromPartial(_: {}): _429.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _429.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _429.QueryParamsResponse;
                fromJSON(object: any): _429.QueryParamsResponse;
                toJSON(message: _429.QueryParamsResponse): unknown;
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
                }): _429.QueryParamsResponse;
            };
            QueryBalanceRequest: {
                encode(_: _429.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _429.QueryBalanceRequest;
                fromJSON(_: any): _429.QueryBalanceRequest;
                toJSON(_: _429.QueryBalanceRequest): unknown;
                fromPartial(_: {}): _429.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _429.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _429.QueryBalanceResponse;
                fromJSON(object: any): _429.QueryBalanceResponse;
                toJSON(message: _429.QueryBalanceResponse): unknown;
                fromPartial(object: {
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _429.QueryBalanceResponse;
            };
            CommunityPoolMultiSpendProposal: {
                encode(message: _428.CommunityPoolMultiSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _428.CommunityPoolMultiSpendProposal;
                fromJSON(object: any): _428.CommunityPoolMultiSpendProposal;
                toJSON(message: _428.CommunityPoolMultiSpendProposal): unknown;
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
                }): _428.CommunityPoolMultiSpendProposal;
            };
            CommunityPoolMultiSpendProposalJSON: {
                encode(message: _428.CommunityPoolMultiSpendProposalJSON, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _428.CommunityPoolMultiSpendProposalJSON;
                fromJSON(object: any): _428.CommunityPoolMultiSpendProposalJSON;
                toJSON(message: _428.CommunityPoolMultiSpendProposalJSON): unknown;
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
                }): _428.CommunityPoolMultiSpendProposalJSON;
            };
            MultiSpendRecipient: {
                encode(message: _428.MultiSpendRecipient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _428.MultiSpendRecipient;
                fromJSON(object: any): _428.MultiSpendRecipient;
                toJSON(message: _428.MultiSpendRecipient): unknown;
                fromPartial(object: {
                    address?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _428.MultiSpendRecipient;
            };
            Params: {
                encode(message: _427.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _427.Params;
                fromJSON(object: any): _427.Params;
                toJSON(message: _427.Params): unknown;
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
                }): _427.Params;
            };
            Period: {
                encode(message: _427.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _427.Period;
                fromJSON(object: any): _427.Period;
                toJSON(message: _427.Period): unknown;
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
                }): _427.Period;
            };
            GenesisState: {
                encode(message: _426.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _426.GenesisState;
                fromJSON(object: any): _426.GenesisState;
                toJSON(message: _426.GenesisState): unknown;
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
                }): _426.GenesisState;
            };
        };
    }
    namespace pricefeed {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    postPrice(value: _433.MsgPostPrice): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    postPrice(value: _433.MsgPostPrice): {
                        typeUrl: string;
                        value: _433.MsgPostPrice;
                    };
                };
                toJSON: {
                    postPrice(value: _433.MsgPostPrice): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    postPrice(value: any): {
                        typeUrl: string;
                        value: _433.MsgPostPrice;
                    };
                };
                fromPartial: {
                    postPrice(value: _433.MsgPostPrice): {
                        typeUrl: string;
                        value: _433.MsgPostPrice;
                    };
                };
            };
            AminoConverter: {
                "/kava.pricefeed.v1beta1.MsgPostPrice": {
                    aminoType: string;
                    toAmino: ({ from, marketId, price, expiry }: _433.MsgPostPrice) => {
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
                    }) => _433.MsgPostPrice;
                };
            };
            MsgPostPrice: {
                encode(message: _433.MsgPostPrice, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _433.MsgPostPrice;
                fromJSON(object: any): _433.MsgPostPrice;
                toJSON(message: _433.MsgPostPrice): unknown;
                fromPartial(object: {
                    from?: string;
                    marketId?: string;
                    price?: string;
                    expiry?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _433.MsgPostPrice;
            };
            MsgPostPriceResponse: {
                encode(_: _433.MsgPostPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _433.MsgPostPriceResponse;
                fromJSON(_: any): _433.MsgPostPriceResponse;
                toJSON(_: _433.MsgPostPriceResponse): unknown;
                fromPartial(_: {}): _433.MsgPostPriceResponse;
            };
            Params: {
                encode(message: _432.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _432.Params;
                fromJSON(object: any): _432.Params;
                toJSON(message: _432.Params): unknown;
                fromPartial(object: {
                    markets?: {
                        marketId?: string;
                        baseAsset?: string;
                        quoteAsset?: string;
                        oracles?: Uint8Array[];
                        active?: boolean;
                    }[];
                }): _432.Params;
            };
            Market: {
                encode(message: _432.Market, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _432.Market;
                fromJSON(object: any): _432.Market;
                toJSON(message: _432.Market): unknown;
                fromPartial(object: {
                    marketId?: string;
                    baseAsset?: string;
                    quoteAsset?: string;
                    oracles?: Uint8Array[];
                    active?: boolean;
                }): _432.Market;
            };
            PostedPrice: {
                encode(message: _432.PostedPrice, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _432.PostedPrice;
                fromJSON(object: any): _432.PostedPrice;
                toJSON(message: _432.PostedPrice): unknown;
                fromPartial(object: {
                    marketId?: string;
                    oracleAddress?: Uint8Array;
                    price?: string;
                    expiry?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _432.PostedPrice;
            };
            CurrentPrice: {
                encode(message: _432.CurrentPrice, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _432.CurrentPrice;
                fromJSON(object: any): _432.CurrentPrice;
                toJSON(message: _432.CurrentPrice): unknown;
                fromPartial(object: {
                    marketId?: string;
                    price?: string;
                }): _432.CurrentPrice;
            };
            QueryParamsRequest: {
                encode(_: _431.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _431.QueryParamsRequest;
                fromJSON(_: any): _431.QueryParamsRequest;
                toJSON(_: _431.QueryParamsRequest): unknown;
                fromPartial(_: {}): _431.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _431.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _431.QueryParamsResponse;
                fromJSON(object: any): _431.QueryParamsResponse;
                toJSON(message: _431.QueryParamsResponse): unknown;
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
                }): _431.QueryParamsResponse;
            };
            QueryPriceRequest: {
                encode(message: _431.QueryPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _431.QueryPriceRequest;
                fromJSON(object: any): _431.QueryPriceRequest;
                toJSON(message: _431.QueryPriceRequest): unknown;
                fromPartial(object: {
                    marketId?: string;
                }): _431.QueryPriceRequest;
            };
            QueryPriceResponse: {
                encode(message: _431.QueryPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _431.QueryPriceResponse;
                fromJSON(object: any): _431.QueryPriceResponse;
                toJSON(message: _431.QueryPriceResponse): unknown;
                fromPartial(object: {
                    price?: {
                        marketId?: string;
                        price?: string;
                    };
                }): _431.QueryPriceResponse;
            };
            QueryPricesRequest: {
                encode(_: _431.QueryPricesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _431.QueryPricesRequest;
                fromJSON(_: any): _431.QueryPricesRequest;
                toJSON(_: _431.QueryPricesRequest): unknown;
                fromPartial(_: {}): _431.QueryPricesRequest;
            };
            QueryPricesResponse: {
                encode(message: _431.QueryPricesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _431.QueryPricesResponse;
                fromJSON(object: any): _431.QueryPricesResponse;
                toJSON(message: _431.QueryPricesResponse): unknown;
                fromPartial(object: {
                    prices?: {
                        marketId?: string;
                        price?: string;
                    }[];
                }): _431.QueryPricesResponse;
            };
            QueryRawPricesRequest: {
                encode(message: _431.QueryRawPricesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _431.QueryRawPricesRequest;
                fromJSON(object: any): _431.QueryRawPricesRequest;
                toJSON(message: _431.QueryRawPricesRequest): unknown;
                fromPartial(object: {
                    marketId?: string;
                }): _431.QueryRawPricesRequest;
            };
            QueryRawPricesResponse: {
                encode(message: _431.QueryRawPricesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _431.QueryRawPricesResponse;
                fromJSON(object: any): _431.QueryRawPricesResponse;
                toJSON(message: _431.QueryRawPricesResponse): unknown;
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
                }): _431.QueryRawPricesResponse;
            };
            QueryOraclesRequest: {
                encode(message: _431.QueryOraclesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _431.QueryOraclesRequest;
                fromJSON(object: any): _431.QueryOraclesRequest;
                toJSON(message: _431.QueryOraclesRequest): unknown;
                fromPartial(object: {
                    marketId?: string;
                }): _431.QueryOraclesRequest;
            };
            QueryOraclesResponse: {
                encode(message: _431.QueryOraclesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _431.QueryOraclesResponse;
                fromJSON(object: any): _431.QueryOraclesResponse;
                toJSON(message: _431.QueryOraclesResponse): unknown;
                fromPartial(object: {
                    oracles?: string[];
                }): _431.QueryOraclesResponse;
            };
            QueryMarketsRequest: {
                encode(_: _431.QueryMarketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _431.QueryMarketsRequest;
                fromJSON(_: any): _431.QueryMarketsRequest;
                toJSON(_: _431.QueryMarketsRequest): unknown;
                fromPartial(_: {}): _431.QueryMarketsRequest;
            };
            QueryMarketsResponse: {
                encode(message: _431.QueryMarketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _431.QueryMarketsResponse;
                fromJSON(object: any): _431.QueryMarketsResponse;
                toJSON(message: _431.QueryMarketsResponse): unknown;
                fromPartial(object: {
                    markets?: {
                        marketId?: string;
                        baseAsset?: string;
                        quoteAsset?: string;
                        oracles?: string[];
                        active?: boolean;
                    }[];
                }): _431.QueryMarketsResponse;
            };
            PostedPriceResponse: {
                encode(message: _431.PostedPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _431.PostedPriceResponse;
                fromJSON(object: any): _431.PostedPriceResponse;
                toJSON(message: _431.PostedPriceResponse): unknown;
                fromPartial(object: {
                    marketId?: string;
                    oracleAddress?: string;
                    price?: string;
                    expiry?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _431.PostedPriceResponse;
            };
            CurrentPriceResponse: {
                encode(message: _431.CurrentPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _431.CurrentPriceResponse;
                fromJSON(object: any): _431.CurrentPriceResponse;
                toJSON(message: _431.CurrentPriceResponse): unknown;
                fromPartial(object: {
                    marketId?: string;
                    price?: string;
                }): _431.CurrentPriceResponse;
            };
            MarketResponse: {
                encode(message: _431.MarketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _431.MarketResponse;
                fromJSON(object: any): _431.MarketResponse;
                toJSON(message: _431.MarketResponse): unknown;
                fromPartial(object: {
                    marketId?: string;
                    baseAsset?: string;
                    quoteAsset?: string;
                    oracles?: string[];
                    active?: boolean;
                }): _431.MarketResponse;
            };
            GenesisState: {
                encode(message: _430.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _430.GenesisState;
                fromJSON(object: any): _430.GenesisState;
                toJSON(message: _430.GenesisState): unknown;
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
                }): _430.GenesisState;
            };
        };
    }
    namespace savings {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    deposit(value: _437.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdraw(value: _437.MsgWithdraw): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    deposit(value: _437.MsgDeposit): {
                        typeUrl: string;
                        value: _437.MsgDeposit;
                    };
                    withdraw(value: _437.MsgWithdraw): {
                        typeUrl: string;
                        value: _437.MsgWithdraw;
                    };
                };
                toJSON: {
                    deposit(value: _437.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdraw(value: _437.MsgWithdraw): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    deposit(value: any): {
                        typeUrl: string;
                        value: _437.MsgDeposit;
                    };
                    withdraw(value: any): {
                        typeUrl: string;
                        value: _437.MsgWithdraw;
                    };
                };
                fromPartial: {
                    deposit(value: _437.MsgDeposit): {
                        typeUrl: string;
                        value: _437.MsgDeposit;
                    };
                    withdraw(value: _437.MsgWithdraw): {
                        typeUrl: string;
                        value: _437.MsgWithdraw;
                    };
                };
            };
            AminoConverter: {
                "/kava.savings.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ depositor, amount }: _437.MsgDeposit) => {
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
                    }) => _437.MsgDeposit;
                };
                "/kava.savings.v1beta1.MsgWithdraw": {
                    aminoType: string;
                    toAmino: ({ depositor, amount }: _437.MsgWithdraw) => {
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
                    }) => _437.MsgWithdraw;
                };
            };
            MsgDeposit: {
                encode(message: _437.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _437.MsgDeposit;
                fromJSON(object: any): _437.MsgDeposit;
                toJSON(message: _437.MsgDeposit): unknown;
                fromPartial(object: {
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _437.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _437.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _437.MsgDepositResponse;
                fromJSON(_: any): _437.MsgDepositResponse;
                toJSON(_: _437.MsgDepositResponse): unknown;
                fromPartial(_: {}): _437.MsgDepositResponse;
            };
            MsgWithdraw: {
                encode(message: _437.MsgWithdraw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _437.MsgWithdraw;
                fromJSON(object: any): _437.MsgWithdraw;
                toJSON(message: _437.MsgWithdraw): unknown;
                fromPartial(object: {
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _437.MsgWithdraw;
            };
            MsgWithdrawResponse: {
                encode(_: _437.MsgWithdrawResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _437.MsgWithdrawResponse;
                fromJSON(_: any): _437.MsgWithdrawResponse;
                toJSON(_: _437.MsgWithdrawResponse): unknown;
                fromPartial(_: {}): _437.MsgWithdrawResponse;
            };
            Params: {
                encode(message: _436.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _436.Params;
                fromJSON(object: any): _436.Params;
                toJSON(message: _436.Params): unknown;
                fromPartial(object: {
                    supportedDenoms?: string[];
                }): _436.Params;
            };
            Deposit: {
                encode(message: _436.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _436.Deposit;
                fromJSON(object: any): _436.Deposit;
                toJSON(message: _436.Deposit): unknown;
                fromPartial(object: {
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _436.Deposit;
            };
            QueryParamsRequest: {
                encode(_: _435.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _435.QueryParamsRequest;
                fromJSON(_: any): _435.QueryParamsRequest;
                toJSON(_: _435.QueryParamsRequest): unknown;
                fromPartial(_: {}): _435.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _435.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _435.QueryParamsResponse;
                fromJSON(object: any): _435.QueryParamsResponse;
                toJSON(message: _435.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        supportedDenoms?: string[];
                    };
                }): _435.QueryParamsResponse;
            };
            QueryDepositsRequest: {
                encode(message: _435.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _435.QueryDepositsRequest;
                fromJSON(object: any): _435.QueryDepositsRequest;
                toJSON(message: _435.QueryDepositsRequest): unknown;
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
                }): _435.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _435.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _435.QueryDepositsResponse;
                fromJSON(object: any): _435.QueryDepositsResponse;
                toJSON(message: _435.QueryDepositsResponse): unknown;
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
                }): _435.QueryDepositsResponse;
            };
            GenesisState: {
                encode(message: _434.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _434.GenesisState;
                fromJSON(object: any): _434.GenesisState;
                toJSON(message: _434.GenesisState): unknown;
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
                }): _434.GenesisState;
            };
        };
    }
    namespace swap {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    deposit(value: _441.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdraw(value: _441.MsgWithdraw): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactForTokens(value: _441.MsgSwapExactForTokens): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapForExactTokens(value: _441.MsgSwapForExactTokens): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    deposit(value: _441.MsgDeposit): {
                        typeUrl: string;
                        value: _441.MsgDeposit;
                    };
                    withdraw(value: _441.MsgWithdraw): {
                        typeUrl: string;
                        value: _441.MsgWithdraw;
                    };
                    swapExactForTokens(value: _441.MsgSwapExactForTokens): {
                        typeUrl: string;
                        value: _441.MsgSwapExactForTokens;
                    };
                    swapForExactTokens(value: _441.MsgSwapForExactTokens): {
                        typeUrl: string;
                        value: _441.MsgSwapForExactTokens;
                    };
                };
                toJSON: {
                    deposit(value: _441.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdraw(value: _441.MsgWithdraw): {
                        typeUrl: string;
                        value: unknown;
                    };
                    swapExactForTokens(value: _441.MsgSwapExactForTokens): {
                        typeUrl: string;
                        value: unknown;
                    };
                    swapForExactTokens(value: _441.MsgSwapForExactTokens): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    deposit(value: any): {
                        typeUrl: string;
                        value: _441.MsgDeposit;
                    };
                    withdraw(value: any): {
                        typeUrl: string;
                        value: _441.MsgWithdraw;
                    };
                    swapExactForTokens(value: any): {
                        typeUrl: string;
                        value: _441.MsgSwapExactForTokens;
                    };
                    swapForExactTokens(value: any): {
                        typeUrl: string;
                        value: _441.MsgSwapForExactTokens;
                    };
                };
                fromPartial: {
                    deposit(value: _441.MsgDeposit): {
                        typeUrl: string;
                        value: _441.MsgDeposit;
                    };
                    withdraw(value: _441.MsgWithdraw): {
                        typeUrl: string;
                        value: _441.MsgWithdraw;
                    };
                    swapExactForTokens(value: _441.MsgSwapExactForTokens): {
                        typeUrl: string;
                        value: _441.MsgSwapExactForTokens;
                    };
                    swapForExactTokens(value: _441.MsgSwapForExactTokens): {
                        typeUrl: string;
                        value: _441.MsgSwapForExactTokens;
                    };
                };
            };
            AminoConverter: {
                "/kava.swap.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ depositor, tokenA, tokenB, slippage, deadline }: _441.MsgDeposit) => {
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
                    }) => _441.MsgDeposit;
                };
                "/kava.swap.v1beta1.MsgWithdraw": {
                    aminoType: string;
                    toAmino: ({ from, shares, minTokenA, minTokenB, deadline }: _441.MsgWithdraw) => {
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
                    }) => _441.MsgWithdraw;
                };
                "/kava.swap.v1beta1.MsgSwapExactForTokens": {
                    aminoType: string;
                    toAmino: ({ requester, exactTokenA, tokenB, slippage, deadline }: _441.MsgSwapExactForTokens) => {
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
                    }) => _441.MsgSwapExactForTokens;
                };
                "/kava.swap.v1beta1.MsgSwapForExactTokens": {
                    aminoType: string;
                    toAmino: ({ requester, tokenA, exactTokenB, slippage, deadline }: _441.MsgSwapForExactTokens) => {
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
                    }) => _441.MsgSwapForExactTokens;
                };
            };
            MsgDeposit: {
                encode(message: _441.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _441.MsgDeposit;
                fromJSON(object: any): _441.MsgDeposit;
                toJSON(message: _441.MsgDeposit): unknown;
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
                }): _441.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _441.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _441.MsgDepositResponse;
                fromJSON(_: any): _441.MsgDepositResponse;
                toJSON(_: _441.MsgDepositResponse): unknown;
                fromPartial(_: {}): _441.MsgDepositResponse;
            };
            MsgWithdraw: {
                encode(message: _441.MsgWithdraw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _441.MsgWithdraw;
                fromJSON(object: any): _441.MsgWithdraw;
                toJSON(message: _441.MsgWithdraw): unknown;
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
                }): _441.MsgWithdraw;
            };
            MsgWithdrawResponse: {
                encode(_: _441.MsgWithdrawResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _441.MsgWithdrawResponse;
                fromJSON(_: any): _441.MsgWithdrawResponse;
                toJSON(_: _441.MsgWithdrawResponse): unknown;
                fromPartial(_: {}): _441.MsgWithdrawResponse;
            };
            MsgSwapExactForTokens: {
                encode(message: _441.MsgSwapExactForTokens, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _441.MsgSwapExactForTokens;
                fromJSON(object: any): _441.MsgSwapExactForTokens;
                toJSON(message: _441.MsgSwapExactForTokens): unknown;
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
                }): _441.MsgSwapExactForTokens;
            };
            MsgSwapExactForTokensResponse: {
                encode(_: _441.MsgSwapExactForTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _441.MsgSwapExactForTokensResponse;
                fromJSON(_: any): _441.MsgSwapExactForTokensResponse;
                toJSON(_: _441.MsgSwapExactForTokensResponse): unknown;
                fromPartial(_: {}): _441.MsgSwapExactForTokensResponse;
            };
            MsgSwapForExactTokens: {
                encode(message: _441.MsgSwapForExactTokens, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _441.MsgSwapForExactTokens;
                fromJSON(object: any): _441.MsgSwapForExactTokens;
                toJSON(message: _441.MsgSwapForExactTokens): unknown;
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
                }): _441.MsgSwapForExactTokens;
            };
            MsgSwapForExactTokensResponse: {
                encode(_: _441.MsgSwapForExactTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _441.MsgSwapForExactTokensResponse;
                fromJSON(_: any): _441.MsgSwapForExactTokensResponse;
                toJSON(_: _441.MsgSwapForExactTokensResponse): unknown;
                fromPartial(_: {}): _441.MsgSwapForExactTokensResponse;
            };
            Params: {
                encode(message: _440.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _440.Params;
                fromJSON(object: any): _440.Params;
                toJSON(message: _440.Params): unknown;
                fromPartial(object: {
                    allowedPools?: {
                        tokenA?: string;
                        tokenB?: string;
                    }[];
                    swapFee?: string;
                }): _440.Params;
            };
            AllowedPool: {
                encode(message: _440.AllowedPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _440.AllowedPool;
                fromJSON(object: any): _440.AllowedPool;
                toJSON(message: _440.AllowedPool): unknown;
                fromPartial(object: {
                    tokenA?: string;
                    tokenB?: string;
                }): _440.AllowedPool;
            };
            PoolRecord: {
                encode(message: _440.PoolRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _440.PoolRecord;
                fromJSON(object: any): _440.PoolRecord;
                toJSON(message: _440.PoolRecord): unknown;
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
                }): _440.PoolRecord;
            };
            ShareRecord: {
                encode(message: _440.ShareRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _440.ShareRecord;
                fromJSON(object: any): _440.ShareRecord;
                toJSON(message: _440.ShareRecord): unknown;
                fromPartial(object: {
                    depositor?: Uint8Array;
                    poolId?: string;
                    sharesOwned?: string;
                }): _440.ShareRecord;
            };
            QueryParamsRequest: {
                encode(_: _439.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _439.QueryParamsRequest;
                fromJSON(_: any): _439.QueryParamsRequest;
                toJSON(_: _439.QueryParamsRequest): unknown;
                fromPartial(_: {}): _439.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _439.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _439.QueryParamsResponse;
                fromJSON(object: any): _439.QueryParamsResponse;
                toJSON(message: _439.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        allowedPools?: {
                            tokenA?: string;
                            tokenB?: string;
                        }[];
                        swapFee?: string;
                    };
                }): _439.QueryParamsResponse;
            };
            QueryPoolsRequest: {
                encode(message: _439.QueryPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _439.QueryPoolsRequest;
                fromJSON(object: any): _439.QueryPoolsRequest;
                toJSON(message: _439.QueryPoolsRequest): unknown;
                fromPartial(object: {
                    poolId?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _439.QueryPoolsRequest;
            };
            QueryPoolsResponse: {
                encode(message: _439.QueryPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _439.QueryPoolsResponse;
                fromJSON(object: any): _439.QueryPoolsResponse;
                toJSON(message: _439.QueryPoolsResponse): unknown;
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
                }): _439.QueryPoolsResponse;
            };
            PoolResponse: {
                encode(message: _439.PoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _439.PoolResponse;
                fromJSON(object: any): _439.PoolResponse;
                toJSON(message: _439.PoolResponse): unknown;
                fromPartial(object: {
                    name?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    totalShares?: string;
                }): _439.PoolResponse;
            };
            QueryDepositsRequest: {
                encode(message: _439.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _439.QueryDepositsRequest;
                fromJSON(object: any): _439.QueryDepositsRequest;
                toJSON(message: _439.QueryDepositsRequest): unknown;
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
                }): _439.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _439.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _439.QueryDepositsResponse;
                fromJSON(object: any): _439.QueryDepositsResponse;
                toJSON(message: _439.QueryDepositsResponse): unknown;
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
                }): _439.QueryDepositsResponse;
            };
            DepositResponse: {
                encode(message: _439.DepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _439.DepositResponse;
                fromJSON(object: any): _439.DepositResponse;
                toJSON(message: _439.DepositResponse): unknown;
                fromPartial(object: {
                    depositor?: string;
                    poolId?: string;
                    sharesOwned?: string;
                    sharesValue?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _439.DepositResponse;
            };
            GenesisState: {
                encode(message: _438.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _438.GenesisState;
                fromJSON(object: any): _438.GenesisState;
                toJSON(message: _438.GenesisState): unknown;
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
                }): _438.GenesisState;
            };
        };
    }
}
