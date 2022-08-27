import * as _466 from "./v1beta1/keeper/CommissionPool";
import * as _467 from "./v1beta1/keeper/DataAccountStatus";
import * as _468 from "./v1beta1/keeper/DataActiveQuote";
import * as _469 from "./v1beta1/keeper/DataActiveTrade";
import * as _470 from "./v1beta1/keeper/DataMarket";
import * as _471 from "./v1beta1/keeper/InternalDuration";
import * as _472 from "./v1beta1/keeper/OrderedList";
import * as _474 from "./v1beta1/msg/Proposal";
import * as _475 from "./v1beta1/msg/QueryAccount";
import * as _476 from "./v1beta1/msg/QueryConsensus";
import * as _477 from "./v1beta1/msg/QueryMarket";
import * as _478 from "./v1beta1/msg/QueryOrderBook";
import * as _479 from "./v1beta1/msg/QueryParams";
import * as _480 from "./v1beta1/msg/QueryQuote";
import * as _481 from "./v1beta1/msg/QuerySynthetic";
import * as _482 from "./v1beta1/msg/QueryTrade";
import * as _483 from "./v1beta1/msg/TxCancel";
import * as _484 from "./v1beta1/msg/TxCreate";
import * as _485 from "./v1beta1/msg/TxDeposit";
import * as _486 from "./v1beta1/msg/TxPick";
import * as _487 from "./v1beta1/msg/TxSettle";
import * as _488 from "./v1beta1/msg/TxTrade";
import * as _489 from "./v1beta1/msg/TxUpdate";
import * as _490 from "./v1beta1/msg/TxWithdraw";
import * as _491 from "./v1beta1/types/Genesis";
import * as _492 from "./v1beta1/types/Params";
export declare namespace microtick {
    const keeper: {
        ListItem: {
            encode(message: _472.ListItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _472.ListItem;
            fromJSON(object: any): _472.ListItem;
            toJSON(message: _472.ListItem): unknown;
            fromPartial(object: {
                id?: number;
                value?: string;
            }): _472.ListItem;
        };
        OrderedList: {
            encode(message: _472.OrderedList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _472.OrderedList;
            fromJSON(object: any): _472.OrderedList;
            toJSON(message: _472.OrderedList): unknown;
            fromPartial(object: {
                data?: {
                    id?: number;
                    value?: string;
                }[];
            }): _472.OrderedList;
        };
        InternalDuration: {
            encode(message: _471.InternalDuration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _471.InternalDuration;
            fromJSON(object: any): _471.InternalDuration;
            toJSON(message: _471.InternalDuration): unknown;
            fromPartial(object: {
                name?: string;
                duration?: number;
            }): _471.InternalDuration;
        };
        DataOrderBook: {
            encode(message: _470.DataOrderBook, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _470.DataOrderBook;
            fromJSON(object: any): _470.DataOrderBook;
            toJSON(message: _470.DataOrderBook): unknown;
            fromPartial(object: {
                name?: string;
                callAsks?: {
                    data?: {
                        id?: number;
                        value?: string;
                    }[];
                };
                callBids?: {
                    data?: {
                        id?: number;
                        value?: string;
                    }[];
                };
                putAsks?: {
                    data?: {
                        id?: number;
                        value?: string;
                    }[];
                };
                putBids?: {
                    data?: {
                        id?: number;
                        value?: string;
                    }[];
                };
                sumBacking?: {
                    denom?: string;
                    amount?: string;
                };
                sumWeight?: {
                    denom?: string;
                    amount?: string;
                };
            }): _470.DataOrderBook;
        };
        DataMarket: {
            encode(message: _470.DataMarket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _470.DataMarket;
            fromJSON(object: any): _470.DataMarket;
            toJSON(message: _470.DataMarket): unknown;
            fromPartial(object: {
                market?: string;
                description?: string;
                consensus?: {
                    denom?: string;
                    amount?: string;
                };
                orderBooks?: {
                    name?: string;
                    callAsks?: {
                        data?: {
                            id?: number;
                            value?: string;
                        }[];
                    };
                    callBids?: {
                        data?: {
                            id?: number;
                            value?: string;
                        }[];
                    };
                    putAsks?: {
                        data?: {
                            id?: number;
                            value?: string;
                        }[];
                    };
                    putBids?: {
                        data?: {
                            id?: number;
                            value?: string;
                        }[];
                    };
                    sumBacking?: {
                        denom?: string;
                        amount?: string;
                    };
                    sumWeight?: {
                        denom?: string;
                        amount?: string;
                    };
                }[];
                totalBacking?: {
                    denom?: string;
                    amount?: string;
                };
                totalSpots?: string;
                totalWeight?: {
                    denom?: string;
                    amount?: string;
                };
                quotes?: {
                    data?: {
                        id?: number;
                        value?: string;
                    }[];
                };
            }): _470.DataMarket;
        };
        DataQuotedParams: {
            encode(message: _469.DataQuotedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _469.DataQuotedParams;
            fromJSON(object: any): _469.DataQuotedParams;
            toJSON(message: _469.DataQuotedParams): unknown;
            fromPartial(object: {
                id?: number;
                final?: boolean;
                premium?: {
                    denom?: string;
                    amount?: string;
                };
                remainBacking?: {
                    denom?: string;
                    amount?: string;
                };
                spot?: {
                    denom?: string;
                    amount?: string;
                };
            }): _469.DataQuotedParams;
        };
        DataTradeLeg: {
            encode(message: _469.DataTradeLeg, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _469.DataTradeLeg;
            fromJSON(object: any): _469.DataTradeLeg;
            toJSON(message: _469.DataTradeLeg): unknown;
            fromPartial(object: {
                legId?: number;
                type?: boolean;
                backing?: {
                    denom?: string;
                    amount?: string;
                };
                premium?: {
                    denom?: string;
                    amount?: string;
                };
                cost?: {
                    denom?: string;
                    amount?: string;
                };
                quantity?: {
                    denom?: string;
                    amount?: string;
                };
                long?: Uint8Array;
                short?: Uint8Array;
                quoted?: {
                    id?: number;
                    final?: boolean;
                    premium?: {
                        denom?: string;
                        amount?: string;
                    };
                    remainBacking?: {
                        denom?: string;
                        amount?: string;
                    };
                    spot?: {
                        denom?: string;
                        amount?: string;
                    };
                };
            }): _469.DataTradeLeg;
        };
        DataActiveTrade: {
            encode(message: _469.DataActiveTrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _469.DataActiveTrade;
            fromJSON(object: any): _469.DataActiveTrade;
            toJSON(message: _469.DataActiveTrade): unknown;
            fromPartial(object: {
                id?: number;
                market?: string;
                duration?: string;
                order?: string;
                taker?: Uint8Array;
                quantity?: {
                    denom?: string;
                    amount?: string;
                };
                legs?: {
                    legId?: number;
                    type?: boolean;
                    backing?: {
                        denom?: string;
                        amount?: string;
                    };
                    premium?: {
                        denom?: string;
                        amount?: string;
                    };
                    cost?: {
                        denom?: string;
                        amount?: string;
                    };
                    quantity?: {
                        denom?: string;
                        amount?: string;
                    };
                    long?: Uint8Array;
                    short?: Uint8Array;
                    quoted?: {
                        id?: number;
                        final?: boolean;
                        premium?: {
                            denom?: string;
                            amount?: string;
                        };
                        remainBacking?: {
                            denom?: string;
                            amount?: string;
                        };
                        spot?: {
                            denom?: string;
                            amount?: string;
                        };
                    };
                }[];
                start?: any;
                expiration?: any;
                strike?: {
                    denom?: string;
                    amount?: string;
                };
                commission?: {
                    denom?: string;
                    amount?: string;
                };
                settleIncentive?: {
                    denom?: string;
                    amount?: string;
                };
            }): _469.DataActiveTrade;
        };
        DataActiveQuote: {
            encode(message: _468.DataActiveQuote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _468.DataActiveQuote;
            fromJSON(object: any): _468.DataActiveQuote;
            toJSON(message: _468.DataActiveQuote): unknown;
            fromPartial(object: {
                id?: number;
                market?: string;
                duration?: number;
                durationName?: string;
                provider?: Uint8Array;
                modified?: any;
                canModify?: any;
                backing?: {
                    denom?: string;
                    amount?: string;
                };
                ask?: {
                    denom?: string;
                    amount?: string;
                };
                bid?: {
                    denom?: string;
                    amount?: string;
                };
                quantity?: {
                    denom?: string;
                    amount?: string;
                };
                spot?: {
                    denom?: string;
                    amount?: string;
                };
            }): _468.DataActiveQuote;
        };
        DataAccountStatus: {
            encode(message: _467.DataAccountStatus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _467.DataAccountStatus;
            fromJSON(object: any): _467.DataAccountStatus;
            toJSON(message: _467.DataAccountStatus): unknown;
            fromPartial(object: {
                account?: Uint8Array;
                activeQuotes?: {
                    data?: {
                        id?: number;
                        value?: string;
                    }[];
                };
                activeTrades?: {
                    data?: {
                        id?: number;
                        value?: string;
                    }[];
                };
                placedQuotes?: number;
                placedTrades?: number;
                quoteBacking?: {
                    denom?: string;
                    amount?: string;
                };
                tradeBacking?: {
                    denom?: string;
                    amount?: string;
                };
                settleBacking?: {
                    denom?: string;
                    amount?: string;
                };
            }): _467.DataAccountStatus;
        };
        commission_pool: {
            encode(message: _466.commission_pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _466.commission_pool;
            fromJSON(object: any): _466.commission_pool;
            toJSON(message: _466.commission_pool): unknown;
            fromPartial(object: {
                pool?: {
                    denom?: string;
                    amount?: string;
                };
            }): _466.commission_pool;
        };
    };
    namespace v1beta1 {
        const msg: {
            TxWithdrawQuote: {
                encode(message: _490.TxWithdrawQuote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _490.TxWithdrawQuote;
                fromJSON(object: any): _490.TxWithdrawQuote;
                toJSON(message: _490.TxWithdrawQuote): unknown;
                fromPartial(object: {
                    id?: number;
                    requester?: Uint8Array;
                    withdraw?: string;
                }): _490.TxWithdrawQuote;
            };
            WithdrawQuoteData: {
                encode(message: _490.WithdrawQuoteData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _490.WithdrawQuoteData;
                fromJSON(object: any): _490.WithdrawQuoteData;
                toJSON(message: _490.WithdrawQuoteData): unknown;
                fromPartial(object: {
                    time?: any;
                    market?: string;
                    duration?: string;
                    consensus?: {
                        denom?: string;
                        amount?: string;
                    };
                    backing?: {
                        denom?: string;
                        amount?: string;
                    };
                    commission?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _490.WithdrawQuoteData;
            };
            TxUpdateQuote: {
                encode(message: _489.TxUpdateQuote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _489.TxUpdateQuote;
                fromJSON(object: any): _489.TxUpdateQuote;
                toJSON(message: _489.TxUpdateQuote): unknown;
                fromPartial(object: {
                    id?: number;
                    requester?: Uint8Array;
                    newSpot?: string;
                    newAsk?: string;
                    newBid?: string;
                }): _489.TxUpdateQuote;
            };
            UpdateQuoteData: {
                encode(message: _489.UpdateQuoteData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _489.UpdateQuoteData;
                fromJSON(object: any): _489.UpdateQuoteData;
                toJSON(message: _489.UpdateQuoteData): unknown;
                fromPartial(object: {
                    time?: any;
                    market?: string;
                    duration?: string;
                    consensus?: {
                        denom?: string;
                        amount?: string;
                    };
                    commission?: {
                        denom?: string;
                        amount?: string;
                    };
                    reward?: {
                        denom?: string;
                        amount?: string;
                    };
                    adjustment?: string;
                }): _489.UpdateQuoteData;
            };
            TxMarketTrade: {
                encode(message: _488.TxMarketTrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _488.TxMarketTrade;
                fromJSON(object: any): _488.TxMarketTrade;
                toJSON(message: _488.TxMarketTrade): unknown;
                fromPartial(object: {
                    market?: string;
                    duration?: string;
                    taker?: Uint8Array;
                    orderType?: string;
                    quantity?: string;
                }): _488.TxMarketTrade;
            };
            MarketTradeData: {
                encode(message: _488.MarketTradeData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _488.MarketTradeData;
                fromJSON(object: any): _488.MarketTradeData;
                toJSON(message: _488.MarketTradeData): unknown;
                fromPartial(object: {
                    time?: any;
                    trade?: {
                        id?: number;
                        market?: string;
                        duration?: string;
                        order?: string;
                        taker?: Uint8Array;
                        quantity?: {
                            denom?: string;
                            amount?: string;
                        };
                        legs?: {
                            legId?: number;
                            type?: boolean;
                            backing?: {
                                denom?: string;
                                amount?: string;
                            };
                            premium?: {
                                denom?: string;
                                amount?: string;
                            };
                            cost?: {
                                denom?: string;
                                amount?: string;
                            };
                            quantity?: {
                                denom?: string;
                                amount?: string;
                            };
                            long?: Uint8Array;
                            short?: Uint8Array;
                            quoted?: {
                                id?: number;
                                final?: boolean;
                                premium?: {
                                    denom?: string;
                                    amount?: string;
                                };
                                remainBacking?: {
                                    denom?: string;
                                    amount?: string;
                                };
                                spot?: {
                                    denom?: string;
                                    amount?: string;
                                };
                            };
                        }[];
                        start?: any;
                        expiration?: any;
                        strike?: {
                            denom?: string;
                            amount?: string;
                        };
                        commission?: {
                            denom?: string;
                            amount?: string;
                        };
                        settleIncentive?: {
                            denom?: string;
                            amount?: string;
                        };
                    };
                    consensus?: {
                        denom?: string;
                        amount?: string;
                    };
                    commission?: {
                        denom?: string;
                        amount?: string;
                    };
                    reward?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _488.MarketTradeData;
            };
            TxSettleTrade: {
                encode(message: _487.TxSettleTrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _487.TxSettleTrade;
                fromJSON(object: any): _487.TxSettleTrade;
                toJSON(message: _487.TxSettleTrade): unknown;
                fromPartial(object: {
                    id?: number;
                    requester?: Uint8Array;
                }): _487.TxSettleTrade;
            };
            SettleLegData: {
                encode(message: _487.SettleLegData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _487.SettleLegData;
                fromJSON(object: any): _487.SettleLegData;
                toJSON(message: _487.SettleLegData): unknown;
                fromPartial(object: {
                    legId?: number;
                    settleAccount?: Uint8Array;
                    settle?: {
                        denom?: string;
                        amount?: string;
                    };
                    refundAccount?: Uint8Array;
                    refund?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _487.SettleLegData;
            };
            SettleTradeData: {
                encode(message: _487.SettleTradeData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _487.SettleTradeData;
                fromJSON(object: any): _487.SettleTradeData;
                toJSON(message: _487.SettleTradeData): unknown;
                fromPartial(object: {
                    time?: any;
                    id?: number;
                    final?: {
                        denom?: string;
                        amount?: string;
                    };
                    legs?: {
                        legId?: number;
                        settleAccount?: Uint8Array;
                        settle?: {
                            denom?: string;
                            amount?: string;
                        };
                        refundAccount?: Uint8Array;
                        refund?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    incentive?: {
                        denom?: string;
                        amount?: string;
                    };
                    settler?: Uint8Array;
                    commission?: {
                        denom?: string;
                        amount?: string;
                    };
                    reward?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _487.SettleTradeData;
            };
            TxPickTrade: {
                encode(message: _486.TxPickTrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _486.TxPickTrade;
                fromJSON(object: any): _486.TxPickTrade;
                toJSON(message: _486.TxPickTrade): unknown;
                fromPartial(object: {
                    id?: number;
                    taker?: Uint8Array;
                    orderType?: string;
                }): _486.TxPickTrade;
            };
            PickTradeData: {
                encode(message: _486.PickTradeData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _486.PickTradeData;
                fromJSON(object: any): _486.PickTradeData;
                toJSON(message: _486.PickTradeData): unknown;
                fromPartial(object: {
                    time?: any;
                    market?: string;
                    duration?: string;
                    trade?: {
                        id?: number;
                        market?: string;
                        duration?: string;
                        order?: string;
                        taker?: Uint8Array;
                        quantity?: {
                            denom?: string;
                            amount?: string;
                        };
                        legs?: {
                            legId?: number;
                            type?: boolean;
                            backing?: {
                                denom?: string;
                                amount?: string;
                            };
                            premium?: {
                                denom?: string;
                                amount?: string;
                            };
                            cost?: {
                                denom?: string;
                                amount?: string;
                            };
                            quantity?: {
                                denom?: string;
                                amount?: string;
                            };
                            long?: Uint8Array;
                            short?: Uint8Array;
                            quoted?: {
                                id?: number;
                                final?: boolean;
                                premium?: {
                                    denom?: string;
                                    amount?: string;
                                };
                                remainBacking?: {
                                    denom?: string;
                                    amount?: string;
                                };
                                spot?: {
                                    denom?: string;
                                    amount?: string;
                                };
                            };
                        }[];
                        start?: any;
                        expiration?: any;
                        strike?: {
                            denom?: string;
                            amount?: string;
                        };
                        commission?: {
                            denom?: string;
                            amount?: string;
                        };
                        settleIncentive?: {
                            denom?: string;
                            amount?: string;
                        };
                    };
                    consensus?: {
                        denom?: string;
                        amount?: string;
                    };
                    commission?: {
                        denom?: string;
                        amount?: string;
                    };
                    reward?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _486.PickTradeData;
            };
            TxDepositQuote: {
                encode(message: _485.TxDepositQuote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _485.TxDepositQuote;
                fromJSON(object: any): _485.TxDepositQuote;
                toJSON(message: _485.TxDepositQuote): unknown;
                fromPartial(object: {
                    id?: number;
                    requester?: Uint8Array;
                    deposit?: string;
                }): _485.TxDepositQuote;
            };
            DepositQuoteData: {
                encode(message: _485.DepositQuoteData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _485.DepositQuoteData;
                fromJSON(object: any): _485.DepositQuoteData;
                toJSON(message: _485.DepositQuoteData): unknown;
                fromPartial(object: {
                    time?: any;
                    market?: string;
                    duration?: string;
                    consensus?: {
                        denom?: string;
                        amount?: string;
                    };
                    backing?: {
                        denom?: string;
                        amount?: string;
                    };
                    commission?: {
                        denom?: string;
                        amount?: string;
                    };
                    reward?: {
                        denom?: string;
                        amount?: string;
                    };
                    adjustment?: string;
                }): _485.DepositQuoteData;
            };
            TxCreateQuote: {
                encode(message: _484.TxCreateQuote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _484.TxCreateQuote;
                fromJSON(object: any): _484.TxCreateQuote;
                toJSON(message: _484.TxCreateQuote): unknown;
                fromPartial(object: {
                    market?: string;
                    duration?: string;
                    provider?: Uint8Array;
                    backing?: string;
                    spot?: string;
                    ask?: string;
                    bid?: string;
                }): _484.TxCreateQuote;
            };
            CreateQuoteData: {
                encode(message: _484.CreateQuoteData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _484.CreateQuoteData;
                fromJSON(object: any): _484.CreateQuoteData;
                toJSON(message: _484.CreateQuoteData): unknown;
                fromPartial(object: {
                    time?: any;
                    id?: number;
                    consensus?: {
                        denom?: string;
                        amount?: string;
                    };
                    commission?: {
                        denom?: string;
                        amount?: string;
                    };
                    reward?: {
                        denom?: string;
                        amount?: string;
                    };
                    adjustment?: string;
                }): _484.CreateQuoteData;
            };
            TxCancelQuote: {
                encode(message: _483.TxCancelQuote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _483.TxCancelQuote;
                fromJSON(object: any): _483.TxCancelQuote;
                toJSON(message: _483.TxCancelQuote): unknown;
                fromPartial(object: {
                    id?: number;
                    requester?: Uint8Array;
                }): _483.TxCancelQuote;
            };
            CancelQuoteData: {
                encode(message: _483.CancelQuoteData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _483.CancelQuoteData;
                fromJSON(object: any): _483.CancelQuoteData;
                toJSON(message: _483.CancelQuoteData): unknown;
                fromPartial(object: {
                    time?: any;
                    account?: Uint8Array;
                    market?: string;
                    duration?: string;
                    consensus?: {
                        denom?: string;
                        amount?: string;
                    };
                    refund?: {
                        denom?: string;
                        amount?: string;
                    };
                    slash?: {
                        denom?: string;
                        amount?: string;
                    };
                    commission?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _483.CancelQuoteData;
            };
            QueryTradeRequest: {
                encode(message: _482.QueryTradeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _482.QueryTradeRequest;
                fromJSON(object: any): _482.QueryTradeRequest;
                toJSON(message: _482.QueryTradeRequest): unknown;
                fromPartial(object: {
                    id?: number;
                }): _482.QueryTradeRequest;
            };
            ResponseQuotedParams: {
                encode(message: _482.ResponseQuotedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _482.ResponseQuotedParams;
                fromJSON(object: any): _482.ResponseQuotedParams;
                toJSON(message: _482.ResponseQuotedParams): unknown;
                fromPartial(object: {
                    id?: number;
                    premium?: {
                        denom?: string;
                        amount?: string;
                    };
                    remainBacking?: string;
                    spot?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _482.ResponseQuotedParams;
            };
            ResponseTradeLeg: {
                encode(message: _482.ResponseTradeLeg, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _482.ResponseTradeLeg;
                fromJSON(object: any): _482.ResponseTradeLeg;
                toJSON(message: _482.ResponseTradeLeg): unknown;
                fromPartial(object: {
                    legId?: number;
                    type?: string;
                    backing?: {
                        denom?: string;
                        amount?: string;
                    };
                    premium?: {
                        denom?: string;
                        amount?: string;
                    };
                    cost?: {
                        denom?: string;
                        amount?: string;
                    };
                    quantity?: {
                        denom?: string;
                        amount?: string;
                    };
                    long?: Uint8Array;
                    short?: Uint8Array;
                    quoted?: {
                        id?: number;
                        premium?: {
                            denom?: string;
                            amount?: string;
                        };
                        remainBacking?: string;
                        spot?: {
                            denom?: string;
                            amount?: string;
                        };
                    };
                    currentValue?: string;
                }): _482.ResponseTradeLeg;
            };
            QueryTradeResponse: {
                encode(message: _482.QueryTradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _482.QueryTradeResponse;
                fromJSON(object: any): _482.QueryTradeResponse;
                toJSON(message: _482.QueryTradeResponse): unknown;
                fromPartial(object: {
                    id?: number;
                    market?: string;
                    duration?: string;
                    order?: string;
                    taker?: Uint8Array;
                    quantity?: {
                        denom?: string;
                        amount?: string;
                    };
                    legs?: {
                        legId?: number;
                        type?: string;
                        backing?: {
                            denom?: string;
                            amount?: string;
                        };
                        premium?: {
                            denom?: string;
                            amount?: string;
                        };
                        cost?: {
                            denom?: string;
                            amount?: string;
                        };
                        quantity?: {
                            denom?: string;
                            amount?: string;
                        };
                        long?: Uint8Array;
                        short?: Uint8Array;
                        quoted?: {
                            id?: number;
                            premium?: {
                                denom?: string;
                                amount?: string;
                            };
                            remainBacking?: string;
                            spot?: {
                                denom?: string;
                                amount?: string;
                            };
                        };
                        currentValue?: string;
                    }[];
                    start?: any;
                    expiration?: any;
                    strike?: {
                        denom?: string;
                        amount?: string;
                    };
                    commission?: {
                        denom?: string;
                        amount?: string;
                    };
                    settleIncentive?: {
                        denom?: string;
                        amount?: string;
                    };
                    consensus?: {
                        denom?: string;
                        amount?: string;
                    };
                    currentValue?: string;
                }): _482.QueryTradeResponse;
            };
            QuerySyntheticRequest: {
                encode(message: _481.QuerySyntheticRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _481.QuerySyntheticRequest;
                fromJSON(object: any): _481.QuerySyntheticRequest;
                toJSON(message: _481.QuerySyntheticRequest): unknown;
                fromPartial(object: {
                    market?: string;
                    duration?: string;
                    offset?: number;
                    limit?: number;
                }): _481.QuerySyntheticRequest;
            };
            SyntheticQuote: {
                encode(message: _481.SyntheticQuote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _481.SyntheticQuote;
                fromJSON(object: any): _481.SyntheticQuote;
                toJSON(message: _481.SyntheticQuote): unknown;
                fromPartial(object: {
                    spot?: {
                        denom?: string;
                        amount?: string;
                    };
                    quantity?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _481.SyntheticQuote;
            };
            QuerySyntheticResponse: {
                encode(message: _481.QuerySyntheticResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _481.QuerySyntheticResponse;
                fromJSON(object: any): _481.QuerySyntheticResponse;
                toJSON(message: _481.QuerySyntheticResponse): unknown;
                fromPartial(object: {
                    consensus?: {
                        denom?: string;
                        amount?: string;
                    };
                    sumBacking?: {
                        denom?: string;
                        amount?: string;
                    };
                    sumWeight?: {
                        denom?: string;
                        amount?: string;
                    };
                    offset?: number;
                    limit?: number;
                    totalAsks?: number;
                    totalBids?: number;
                    asks?: {
                        spot?: {
                            denom?: string;
                            amount?: string;
                        };
                        quantity?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    bids?: {
                        spot?: {
                            denom?: string;
                            amount?: string;
                        };
                        quantity?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                }): _481.QuerySyntheticResponse;
            };
            QueryQuoteRequest: {
                encode(message: _480.QueryQuoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _480.QueryQuoteRequest;
                fromJSON(object: any): _480.QueryQuoteRequest;
                toJSON(message: _480.QueryQuoteRequest): unknown;
                fromPartial(object: {
                    id?: number;
                }): _480.QueryQuoteRequest;
            };
            QueryQuoteResponse: {
                encode(message: _480.QueryQuoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _480.QueryQuoteResponse;
                fromJSON(object: any): _480.QueryQuoteResponse;
                toJSON(message: _480.QueryQuoteResponse): unknown;
                fromPartial(object: {
                    id?: number;
                    provider?: Uint8Array;
                    market?: string;
                    duration?: string;
                    backing?: {
                        denom?: string;
                        amount?: string;
                    };
                    ask?: {
                        denom?: string;
                        amount?: string;
                    };
                    bid?: {
                        denom?: string;
                        amount?: string;
                    };
                    quantity?: {
                        denom?: string;
                        amount?: string;
                    };
                    consensus?: {
                        denom?: string;
                        amount?: string;
                    };
                    spot?: {
                        denom?: string;
                        amount?: string;
                    };
                    callAsk?: {
                        denom?: string;
                        amount?: string;
                    };
                    callBid?: {
                        denom?: string;
                        amount?: string;
                    };
                    putAsk?: {
                        denom?: string;
                        amount?: string;
                    };
                    putBid?: {
                        denom?: string;
                        amount?: string;
                    };
                    modified?: any;
                    canModify?: any;
                }): _480.QueryQuoteResponse;
            };
            QueryParamsRequest: {
                encode(_: _479.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _479.QueryParamsRequest;
                fromJSON(_: any): _479.QueryParamsRequest;
                toJSON(_: _479.QueryParamsRequest): unknown;
                fromPartial(_: {}): _479.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _479.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _479.QueryParamsResponse;
                fromJSON(object: any): _479.QueryParamsResponse;
                toJSON(message: _479.QueryParamsResponse): unknown;
                fromPartial(object: {
                    europeanOptions?: boolean;
                    commissionCreatePerunit?: string;
                    commissionTradeFixed?: string;
                    commissionUpdatePerunit?: string;
                    commissionSettleFixed?: string;
                    commissionCancelPerunit?: string;
                    settleIncentive?: string;
                    freezeTime?: number;
                    mintDenom?: string;
                    mintRewardCreatePerunit?: string;
                    mintRewardUpdatePerunit?: string;
                    mintRewardTradeFixed?: string;
                    mintRewardSettleFixed?: string;
                    cancelSlashRate?: string;
                    backingDenom?: string;
                    backingRatio?: string;
                }): _479.QueryParamsResponse;
            };
            QueryOrderBookRequest: {
                encode(message: _478.QueryOrderBookRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _478.QueryOrderBookRequest;
                fromJSON(object: any): _478.QueryOrderBookRequest;
                toJSON(message: _478.QueryOrderBookRequest): unknown;
                fromPartial(object: {
                    market?: string;
                    duration?: string;
                    offset?: number;
                    limit?: number;
                }): _478.QueryOrderBookRequest;
            };
            OrderBookQuote: {
                encode(message: _478.OrderBookQuote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _478.OrderBookQuote;
                fromJSON(object: any): _478.OrderBookQuote;
                toJSON(message: _478.OrderBookQuote): unknown;
                fromPartial(object: {
                    id?: number;
                    premium?: {
                        denom?: string;
                        amount?: string;
                    };
                    quantity?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _478.OrderBookQuote;
            };
            QueryOrderBookResponse: {
                encode(message: _478.QueryOrderBookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _478.QueryOrderBookResponse;
                fromJSON(object: any): _478.QueryOrderBookResponse;
                toJSON(message: _478.QueryOrderBookResponse): unknown;
                fromPartial(object: {
                    consensus?: {
                        denom?: string;
                        amount?: string;
                    };
                    sumBacking?: {
                        denom?: string;
                        amount?: string;
                    };
                    sumWeight?: {
                        denom?: string;
                        amount?: string;
                    };
                    offset?: number;
                    limit?: number;
                    total?: number;
                    callAsks?: {
                        id?: number;
                        premium?: {
                            denom?: string;
                            amount?: string;
                        };
                        quantity?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    callBids?: {
                        id?: number;
                        premium?: {
                            denom?: string;
                            amount?: string;
                        };
                        quantity?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    putAsks?: {
                        id?: number;
                        premium?: {
                            denom?: string;
                            amount?: string;
                        };
                        quantity?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    putBids?: {
                        id?: number;
                        premium?: {
                            denom?: string;
                            amount?: string;
                        };
                        quantity?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                }): _478.QueryOrderBookResponse;
            };
            QueryMarketRequest: {
                encode(message: _477.QueryMarketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _477.QueryMarketRequest;
                fromJSON(object: any): _477.QueryMarketRequest;
                toJSON(message: _477.QueryMarketRequest): unknown;
                fromPartial(object: {
                    market?: string;
                }): _477.QueryMarketRequest;
            };
            MarketOrderBookStatus: {
                encode(message: _477.MarketOrderBookStatus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _477.MarketOrderBookStatus;
                fromJSON(object: any): _477.MarketOrderBookStatus;
                toJSON(message: _477.MarketOrderBookStatus): unknown;
                fromPartial(object: {
                    name?: string;
                    sumBacking?: {
                        denom?: string;
                        amount?: string;
                    };
                    sumWeight?: {
                        denom?: string;
                        amount?: string;
                    };
                    insideAsk?: {
                        denom?: string;
                        amount?: string;
                    };
                    insideBid?: {
                        denom?: string;
                        amount?: string;
                    };
                    insideCallAsk?: {
                        denom?: string;
                        amount?: string;
                    };
                    insideCallBid?: {
                        denom?: string;
                        amount?: string;
                    };
                    insidePutAsk?: {
                        denom?: string;
                        amount?: string;
                    };
                    insidePutBid?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _477.MarketOrderBookStatus;
            };
            QueryMarketResponse: {
                encode(message: _477.QueryMarketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _477.QueryMarketResponse;
                fromJSON(object: any): _477.QueryMarketResponse;
                toJSON(message: _477.QueryMarketResponse): unknown;
                fromPartial(object: {
                    market?: string;
                    description?: string;
                    consensus?: {
                        denom?: string;
                        amount?: string;
                    };
                    orderBooks?: {
                        name?: string;
                        sumBacking?: {
                            denom?: string;
                            amount?: string;
                        };
                        sumWeight?: {
                            denom?: string;
                            amount?: string;
                        };
                        insideAsk?: {
                            denom?: string;
                            amount?: string;
                        };
                        insideBid?: {
                            denom?: string;
                            amount?: string;
                        };
                        insideCallAsk?: {
                            denom?: string;
                            amount?: string;
                        };
                        insideCallBid?: {
                            denom?: string;
                            amount?: string;
                        };
                        insidePutAsk?: {
                            denom?: string;
                            amount?: string;
                        };
                        insidePutBid?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    totalBacking?: {
                        denom?: string;
                        amount?: string;
                    };
                    totalWeight?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _477.QueryMarketResponse;
            };
            QueryConsensusRequest: {
                encode(message: _476.QueryConsensusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _476.QueryConsensusRequest;
                fromJSON(object: any): _476.QueryConsensusRequest;
                toJSON(message: _476.QueryConsensusRequest): unknown;
                fromPartial(object: {
                    market?: string;
                }): _476.QueryConsensusRequest;
            };
            QueryConsensusResponse: {
                encode(message: _476.QueryConsensusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _476.QueryConsensusResponse;
                fromJSON(object: any): _476.QueryConsensusResponse;
                toJSON(message: _476.QueryConsensusResponse): unknown;
                fromPartial(object: {
                    market?: string;
                    consensus?: {
                        denom?: string;
                        amount?: string;
                    };
                    totalBacking?: {
                        denom?: string;
                        amount?: string;
                    };
                    totalWeight?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _476.QueryConsensusResponse;
            };
            QueryAccountRequest: {
                encode(message: _475.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _475.QueryAccountRequest;
                fromJSON(object: any): _475.QueryAccountRequest;
                toJSON(message: _475.QueryAccountRequest): unknown;
                fromPartial(object: {
                    account?: Uint8Array;
                    offset?: number;
                    limit?: number;
                }): _475.QueryAccountRequest;
            };
            QueryAccountResponse: {
                encode(message: _475.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _475.QueryAccountResponse;
                fromJSON(object: any): _475.QueryAccountResponse;
                toJSON(message: _475.QueryAccountResponse): unknown;
                fromPartial(object: {
                    account?: Uint8Array;
                    balances?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    placedQuotes?: number;
                    placedTrades?: number;
                    offset?: number;
                    limit?: number;
                    totalActiveQuotes?: number;
                    activeQuotes?: number[];
                    totalActiveTrades?: number;
                    activeTrades?: number[];
                    quoteBacking?: {
                        denom?: string;
                        amount?: string;
                    };
                    tradeBacking?: {
                        denom?: string;
                        amount?: string;
                    };
                    settleBacking?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _475.QueryAccountResponse;
            };
            DenomChangeProposal: {
                encode(message: _474.DenomChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _474.DenomChangeProposal;
                fromJSON(object: any): _474.DenomChangeProposal;
                toJSON(message: _474.DenomChangeProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    backingDenom?: string;
                    backingRatio?: string;
                }): _474.DenomChangeProposal;
            };
            MarketMetadata: {
                encode(message: _474.MarketMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _474.MarketMetadata;
                fromJSON(object: any): _474.MarketMetadata;
                toJSON(message: _474.MarketMetadata): unknown;
                fromPartial(object: {
                    name?: string;
                    description?: string;
                }): _474.MarketMetadata;
            };
            AddMarketsProposal: {
                encode(message: _474.AddMarketsProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _474.AddMarketsProposal;
                fromJSON(object: any): _474.AddMarketsProposal;
                toJSON(message: _474.AddMarketsProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    markets?: {
                        name?: string;
                        description?: string;
                    }[];
                }): _474.AddMarketsProposal;
            };
        };
    }
    const types: {
        MicrotickParams: {
            encode(message: _492.MicrotickParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _492.MicrotickParams;
            fromJSON(object: any): _492.MicrotickParams;
            toJSON(message: _492.MicrotickParams): unknown;
            fromPartial(object: {
                europeanOptions?: boolean;
                commissionCreatePerunit?: string;
                commissionTradeFixed?: string;
                commissionUpdatePerunit?: string;
                commissionSettleFixed?: string;
                commissionCancelPerunit?: string;
                settleIncentive?: string;
                freezeTime?: number;
                mintDenom?: string;
                mintRewardCreatePerunit?: string;
                mintRewardUpdatePerunit?: string;
                mintRewardTradeFixed?: string;
                mintRewardSettleFixed?: string;
                cancelSlashRate?: string;
                backingDenom?: string;
                backingRatio?: string;
            }): _492.MicrotickParams;
        };
        GenesisAccount: {
            encode(message: _491.GenesisAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _491.GenesisAccount;
            fromJSON(object: any): _491.GenesisAccount;
            toJSON(message: _491.GenesisAccount): unknown;
            fromPartial(object: {
                account?: Uint8Array;
                placedQuotes?: number;
                placedTrades?: number;
            }): _491.GenesisAccount;
        };
        GenesisMarket: {
            encode(message: _491.GenesisMarket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _491.GenesisMarket;
            fromJSON(object: any): _491.GenesisMarket;
            toJSON(message: _491.GenesisMarket): unknown;
            fromPartial(object: {
                name?: string;
                description?: string;
            }): _491.GenesisMarket;
        };
        GenesisDuration: {
            encode(message: _491.GenesisDuration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _491.GenesisDuration;
            fromJSON(object: any): _491.GenesisDuration;
            toJSON(message: _491.GenesisDuration): unknown;
            fromPartial(object: {
                name?: string;
                seconds?: number;
            }): _491.GenesisDuration;
        };
        GenesisMicrotick: {
            encode(message: _491.GenesisMicrotick, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _491.GenesisMicrotick;
            fromJSON(object: any): _491.GenesisMicrotick;
            toJSON(message: _491.GenesisMicrotick): unknown;
            fromPartial(object: {
                params?: {
                    europeanOptions?: boolean;
                    commissionCreatePerunit?: string;
                    commissionTradeFixed?: string;
                    commissionUpdatePerunit?: string;
                    commissionSettleFixed?: string;
                    commissionCancelPerunit?: string;
                    settleIncentive?: string;
                    freezeTime?: number;
                    mintDenom?: string;
                    mintRewardCreatePerunit?: string;
                    mintRewardUpdatePerunit?: string;
                    mintRewardTradeFixed?: string;
                    mintRewardSettleFixed?: string;
                    cancelSlashRate?: string;
                    backingDenom?: string;
                    backingRatio?: string;
                };
                accounts?: {
                    account?: Uint8Array;
                    placedQuotes?: number;
                    placedTrades?: number;
                }[];
                markets?: {
                    name?: string;
                    description?: string;
                }[];
                durations?: {
                    name?: string;
                    seconds?: number;
                }[];
            }): _491.GenesisMicrotick;
        };
    };
}
