import * as _534 from "./v1beta1/keeper/CommissionPool";
import * as _535 from "./v1beta1/keeper/DataAccountStatus";
import * as _536 from "./v1beta1/keeper/DataActiveQuote";
import * as _537 from "./v1beta1/keeper/DataActiveTrade";
import * as _538 from "./v1beta1/keeper/DataMarket";
import * as _539 from "./v1beta1/keeper/InternalDuration";
import * as _540 from "./v1beta1/keeper/OrderedList";
import * as _542 from "./v1beta1/msg/Proposal";
import * as _543 from "./v1beta1/msg/QueryAccount";
import * as _544 from "./v1beta1/msg/QueryConsensus";
import * as _545 from "./v1beta1/msg/QueryMarket";
import * as _546 from "./v1beta1/msg/QueryOrderBook";
import * as _547 from "./v1beta1/msg/QueryParams";
import * as _548 from "./v1beta1/msg/QueryQuote";
import * as _549 from "./v1beta1/msg/QuerySynthetic";
import * as _550 from "./v1beta1/msg/QueryTrade";
import * as _551 from "./v1beta1/msg/TxCancel";
import * as _552 from "./v1beta1/msg/TxCreate";
import * as _553 from "./v1beta1/msg/TxDeposit";
import * as _554 from "./v1beta1/msg/TxPick";
import * as _555 from "./v1beta1/msg/TxSettle";
import * as _556 from "./v1beta1/msg/TxTrade";
import * as _557 from "./v1beta1/msg/TxUpdate";
import * as _558 from "./v1beta1/msg/TxWithdraw";
import * as _559 from "./v1beta1/types/Genesis";
import * as _560 from "./v1beta1/types/Params";
export declare namespace microtick {
    const keeper: {
        ListItem: {
            encode(message: _540.ListItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _540.ListItem;
            fromJSON(object: any): _540.ListItem;
            toJSON(message: _540.ListItem): unknown;
            fromPartial(object: {
                id?: number;
                value?: string;
            }): _540.ListItem;
        };
        OrderedList: {
            encode(message: _540.OrderedList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _540.OrderedList;
            fromJSON(object: any): _540.OrderedList;
            toJSON(message: _540.OrderedList): unknown;
            fromPartial(object: {
                data?: {
                    id?: number;
                    value?: string;
                }[];
            }): _540.OrderedList;
        };
        InternalDuration: {
            encode(message: _539.InternalDuration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _539.InternalDuration;
            fromJSON(object: any): _539.InternalDuration;
            toJSON(message: _539.InternalDuration): unknown;
            fromPartial(object: {
                name?: string;
                duration?: number;
            }): _539.InternalDuration;
        };
        DataOrderBook: {
            encode(message: _538.DataOrderBook, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _538.DataOrderBook;
            fromJSON(object: any): _538.DataOrderBook;
            toJSON(message: _538.DataOrderBook): unknown;
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
            }): _538.DataOrderBook;
        };
        DataMarket: {
            encode(message: _538.DataMarket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _538.DataMarket;
            fromJSON(object: any): _538.DataMarket;
            toJSON(message: _538.DataMarket): unknown;
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
            }): _538.DataMarket;
        };
        DataQuotedParams: {
            encode(message: _537.DataQuotedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _537.DataQuotedParams;
            fromJSON(object: any): _537.DataQuotedParams;
            toJSON(message: _537.DataQuotedParams): unknown;
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
            }): _537.DataQuotedParams;
        };
        DataTradeLeg: {
            encode(message: _537.DataTradeLeg, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _537.DataTradeLeg;
            fromJSON(object: any): _537.DataTradeLeg;
            toJSON(message: _537.DataTradeLeg): unknown;
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
            }): _537.DataTradeLeg;
        };
        DataActiveTrade: {
            encode(message: _537.DataActiveTrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _537.DataActiveTrade;
            fromJSON(object: any): _537.DataActiveTrade;
            toJSON(message: _537.DataActiveTrade): unknown;
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
            }): _537.DataActiveTrade;
        };
        DataActiveQuote: {
            encode(message: _536.DataActiveQuote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _536.DataActiveQuote;
            fromJSON(object: any): _536.DataActiveQuote;
            toJSON(message: _536.DataActiveQuote): unknown;
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
            }): _536.DataActiveQuote;
        };
        DataAccountStatus: {
            encode(message: _535.DataAccountStatus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _535.DataAccountStatus;
            fromJSON(object: any): _535.DataAccountStatus;
            toJSON(message: _535.DataAccountStatus): unknown;
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
            }): _535.DataAccountStatus;
        };
        commission_pool: {
            encode(message: _534.commission_pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _534.commission_pool;
            fromJSON(object: any): _534.commission_pool;
            toJSON(message: _534.commission_pool): unknown;
            fromPartial(object: {
                pool?: {
                    denom?: string;
                    amount?: string;
                };
            }): _534.commission_pool;
        };
    };
    namespace v1beta1 {
        const msg: {
            TxWithdrawQuote: {
                encode(message: _558.TxWithdrawQuote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _558.TxWithdrawQuote;
                fromJSON(object: any): _558.TxWithdrawQuote;
                toJSON(message: _558.TxWithdrawQuote): unknown;
                fromPartial(object: {
                    id?: number;
                    requester?: Uint8Array;
                    withdraw?: string;
                }): _558.TxWithdrawQuote;
            };
            WithdrawQuoteData: {
                encode(message: _558.WithdrawQuoteData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _558.WithdrawQuoteData;
                fromJSON(object: any): _558.WithdrawQuoteData;
                toJSON(message: _558.WithdrawQuoteData): unknown;
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
                }): _558.WithdrawQuoteData;
            };
            TxUpdateQuote: {
                encode(message: _557.TxUpdateQuote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _557.TxUpdateQuote;
                fromJSON(object: any): _557.TxUpdateQuote;
                toJSON(message: _557.TxUpdateQuote): unknown;
                fromPartial(object: {
                    id?: number;
                    requester?: Uint8Array;
                    newSpot?: string;
                    newAsk?: string;
                    newBid?: string;
                }): _557.TxUpdateQuote;
            };
            UpdateQuoteData: {
                encode(message: _557.UpdateQuoteData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _557.UpdateQuoteData;
                fromJSON(object: any): _557.UpdateQuoteData;
                toJSON(message: _557.UpdateQuoteData): unknown;
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
                }): _557.UpdateQuoteData;
            };
            TxMarketTrade: {
                encode(message: _556.TxMarketTrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.TxMarketTrade;
                fromJSON(object: any): _556.TxMarketTrade;
                toJSON(message: _556.TxMarketTrade): unknown;
                fromPartial(object: {
                    market?: string;
                    duration?: string;
                    taker?: Uint8Array;
                    orderType?: string;
                    quantity?: string;
                }): _556.TxMarketTrade;
            };
            MarketTradeData: {
                encode(message: _556.MarketTradeData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.MarketTradeData;
                fromJSON(object: any): _556.MarketTradeData;
                toJSON(message: _556.MarketTradeData): unknown;
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
                }): _556.MarketTradeData;
            };
            TxSettleTrade: {
                encode(message: _555.TxSettleTrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _555.TxSettleTrade;
                fromJSON(object: any): _555.TxSettleTrade;
                toJSON(message: _555.TxSettleTrade): unknown;
                fromPartial(object: {
                    id?: number;
                    requester?: Uint8Array;
                }): _555.TxSettleTrade;
            };
            SettleLegData: {
                encode(message: _555.SettleLegData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _555.SettleLegData;
                fromJSON(object: any): _555.SettleLegData;
                toJSON(message: _555.SettleLegData): unknown;
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
                }): _555.SettleLegData;
            };
            SettleTradeData: {
                encode(message: _555.SettleTradeData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _555.SettleTradeData;
                fromJSON(object: any): _555.SettleTradeData;
                toJSON(message: _555.SettleTradeData): unknown;
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
                }): _555.SettleTradeData;
            };
            TxPickTrade: {
                encode(message: _554.TxPickTrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _554.TxPickTrade;
                fromJSON(object: any): _554.TxPickTrade;
                toJSON(message: _554.TxPickTrade): unknown;
                fromPartial(object: {
                    id?: number;
                    taker?: Uint8Array;
                    orderType?: string;
                }): _554.TxPickTrade;
            };
            PickTradeData: {
                encode(message: _554.PickTradeData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _554.PickTradeData;
                fromJSON(object: any): _554.PickTradeData;
                toJSON(message: _554.PickTradeData): unknown;
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
                }): _554.PickTradeData;
            };
            TxDepositQuote: {
                encode(message: _553.TxDepositQuote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _553.TxDepositQuote;
                fromJSON(object: any): _553.TxDepositQuote;
                toJSON(message: _553.TxDepositQuote): unknown;
                fromPartial(object: {
                    id?: number;
                    requester?: Uint8Array;
                    deposit?: string;
                }): _553.TxDepositQuote;
            };
            DepositQuoteData: {
                encode(message: _553.DepositQuoteData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _553.DepositQuoteData;
                fromJSON(object: any): _553.DepositQuoteData;
                toJSON(message: _553.DepositQuoteData): unknown;
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
                }): _553.DepositQuoteData;
            };
            TxCreateQuote: {
                encode(message: _552.TxCreateQuote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _552.TxCreateQuote;
                fromJSON(object: any): _552.TxCreateQuote;
                toJSON(message: _552.TxCreateQuote): unknown;
                fromPartial(object: {
                    market?: string;
                    duration?: string;
                    provider?: Uint8Array;
                    backing?: string;
                    spot?: string;
                    ask?: string;
                    bid?: string;
                }): _552.TxCreateQuote;
            };
            CreateQuoteData: {
                encode(message: _552.CreateQuoteData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _552.CreateQuoteData;
                fromJSON(object: any): _552.CreateQuoteData;
                toJSON(message: _552.CreateQuoteData): unknown;
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
                }): _552.CreateQuoteData;
            };
            TxCancelQuote: {
                encode(message: _551.TxCancelQuote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _551.TxCancelQuote;
                fromJSON(object: any): _551.TxCancelQuote;
                toJSON(message: _551.TxCancelQuote): unknown;
                fromPartial(object: {
                    id?: number;
                    requester?: Uint8Array;
                }): _551.TxCancelQuote;
            };
            CancelQuoteData: {
                encode(message: _551.CancelQuoteData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _551.CancelQuoteData;
                fromJSON(object: any): _551.CancelQuoteData;
                toJSON(message: _551.CancelQuoteData): unknown;
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
                }): _551.CancelQuoteData;
            };
            QueryTradeRequest: {
                encode(message: _550.QueryTradeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _550.QueryTradeRequest;
                fromJSON(object: any): _550.QueryTradeRequest;
                toJSON(message: _550.QueryTradeRequest): unknown;
                fromPartial(object: {
                    id?: number;
                }): _550.QueryTradeRequest;
            };
            ResponseQuotedParams: {
                encode(message: _550.ResponseQuotedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _550.ResponseQuotedParams;
                fromJSON(object: any): _550.ResponseQuotedParams;
                toJSON(message: _550.ResponseQuotedParams): unknown;
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
                }): _550.ResponseQuotedParams;
            };
            ResponseTradeLeg: {
                encode(message: _550.ResponseTradeLeg, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _550.ResponseTradeLeg;
                fromJSON(object: any): _550.ResponseTradeLeg;
                toJSON(message: _550.ResponseTradeLeg): unknown;
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
                }): _550.ResponseTradeLeg;
            };
            QueryTradeResponse: {
                encode(message: _550.QueryTradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _550.QueryTradeResponse;
                fromJSON(object: any): _550.QueryTradeResponse;
                toJSON(message: _550.QueryTradeResponse): unknown;
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
                }): _550.QueryTradeResponse;
            };
            QuerySyntheticRequest: {
                encode(message: _549.QuerySyntheticRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _549.QuerySyntheticRequest;
                fromJSON(object: any): _549.QuerySyntheticRequest;
                toJSON(message: _549.QuerySyntheticRequest): unknown;
                fromPartial(object: {
                    market?: string;
                    duration?: string;
                    offset?: number;
                    limit?: number;
                }): _549.QuerySyntheticRequest;
            };
            SyntheticQuote: {
                encode(message: _549.SyntheticQuote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _549.SyntheticQuote;
                fromJSON(object: any): _549.SyntheticQuote;
                toJSON(message: _549.SyntheticQuote): unknown;
                fromPartial(object: {
                    spot?: {
                        denom?: string;
                        amount?: string;
                    };
                    quantity?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _549.SyntheticQuote;
            };
            QuerySyntheticResponse: {
                encode(message: _549.QuerySyntheticResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _549.QuerySyntheticResponse;
                fromJSON(object: any): _549.QuerySyntheticResponse;
                toJSON(message: _549.QuerySyntheticResponse): unknown;
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
                }): _549.QuerySyntheticResponse;
            };
            QueryQuoteRequest: {
                encode(message: _548.QueryQuoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _548.QueryQuoteRequest;
                fromJSON(object: any): _548.QueryQuoteRequest;
                toJSON(message: _548.QueryQuoteRequest): unknown;
                fromPartial(object: {
                    id?: number;
                }): _548.QueryQuoteRequest;
            };
            QueryQuoteResponse: {
                encode(message: _548.QueryQuoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _548.QueryQuoteResponse;
                fromJSON(object: any): _548.QueryQuoteResponse;
                toJSON(message: _548.QueryQuoteResponse): unknown;
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
                }): _548.QueryQuoteResponse;
            };
            QueryParamsRequest: {
                encode(_: _547.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _547.QueryParamsRequest;
                fromJSON(_: any): _547.QueryParamsRequest;
                toJSON(_: _547.QueryParamsRequest): unknown;
                fromPartial(_: {}): _547.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _547.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _547.QueryParamsResponse;
                fromJSON(object: any): _547.QueryParamsResponse;
                toJSON(message: _547.QueryParamsResponse): unknown;
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
                }): _547.QueryParamsResponse;
            };
            QueryOrderBookRequest: {
                encode(message: _546.QueryOrderBookRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _546.QueryOrderBookRequest;
                fromJSON(object: any): _546.QueryOrderBookRequest;
                toJSON(message: _546.QueryOrderBookRequest): unknown;
                fromPartial(object: {
                    market?: string;
                    duration?: string;
                    offset?: number;
                    limit?: number;
                }): _546.QueryOrderBookRequest;
            };
            OrderBookQuote: {
                encode(message: _546.OrderBookQuote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _546.OrderBookQuote;
                fromJSON(object: any): _546.OrderBookQuote;
                toJSON(message: _546.OrderBookQuote): unknown;
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
                }): _546.OrderBookQuote;
            };
            QueryOrderBookResponse: {
                encode(message: _546.QueryOrderBookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _546.QueryOrderBookResponse;
                fromJSON(object: any): _546.QueryOrderBookResponse;
                toJSON(message: _546.QueryOrderBookResponse): unknown;
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
                }): _546.QueryOrderBookResponse;
            };
            QueryMarketRequest: {
                encode(message: _545.QueryMarketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _545.QueryMarketRequest;
                fromJSON(object: any): _545.QueryMarketRequest;
                toJSON(message: _545.QueryMarketRequest): unknown;
                fromPartial(object: {
                    market?: string;
                }): _545.QueryMarketRequest;
            };
            MarketOrderBookStatus: {
                encode(message: _545.MarketOrderBookStatus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _545.MarketOrderBookStatus;
                fromJSON(object: any): _545.MarketOrderBookStatus;
                toJSON(message: _545.MarketOrderBookStatus): unknown;
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
                }): _545.MarketOrderBookStatus;
            };
            QueryMarketResponse: {
                encode(message: _545.QueryMarketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _545.QueryMarketResponse;
                fromJSON(object: any): _545.QueryMarketResponse;
                toJSON(message: _545.QueryMarketResponse): unknown;
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
                }): _545.QueryMarketResponse;
            };
            QueryConsensusRequest: {
                encode(message: _544.QueryConsensusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _544.QueryConsensusRequest;
                fromJSON(object: any): _544.QueryConsensusRequest;
                toJSON(message: _544.QueryConsensusRequest): unknown;
                fromPartial(object: {
                    market?: string;
                }): _544.QueryConsensusRequest;
            };
            QueryConsensusResponse: {
                encode(message: _544.QueryConsensusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _544.QueryConsensusResponse;
                fromJSON(object: any): _544.QueryConsensusResponse;
                toJSON(message: _544.QueryConsensusResponse): unknown;
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
                }): _544.QueryConsensusResponse;
            };
            QueryAccountRequest: {
                encode(message: _543.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _543.QueryAccountRequest;
                fromJSON(object: any): _543.QueryAccountRequest;
                toJSON(message: _543.QueryAccountRequest): unknown;
                fromPartial(object: {
                    account?: Uint8Array;
                    offset?: number;
                    limit?: number;
                }): _543.QueryAccountRequest;
            };
            QueryAccountResponse: {
                encode(message: _543.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _543.QueryAccountResponse;
                fromJSON(object: any): _543.QueryAccountResponse;
                toJSON(message: _543.QueryAccountResponse): unknown;
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
                }): _543.QueryAccountResponse;
            };
            DenomChangeProposal: {
                encode(message: _542.DenomChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _542.DenomChangeProposal;
                fromJSON(object: any): _542.DenomChangeProposal;
                toJSON(message: _542.DenomChangeProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    backingDenom?: string;
                    backingRatio?: string;
                }): _542.DenomChangeProposal;
            };
            MarketMetadata: {
                encode(message: _542.MarketMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _542.MarketMetadata;
                fromJSON(object: any): _542.MarketMetadata;
                toJSON(message: _542.MarketMetadata): unknown;
                fromPartial(object: {
                    name?: string;
                    description?: string;
                }): _542.MarketMetadata;
            };
            AddMarketsProposal: {
                encode(message: _542.AddMarketsProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _542.AddMarketsProposal;
                fromJSON(object: any): _542.AddMarketsProposal;
                toJSON(message: _542.AddMarketsProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    markets?: {
                        name?: string;
                        description?: string;
                    }[];
                }): _542.AddMarketsProposal;
            };
        };
    }
    const types: {
        MicrotickParams: {
            encode(message: _560.MicrotickParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _560.MicrotickParams;
            fromJSON(object: any): _560.MicrotickParams;
            toJSON(message: _560.MicrotickParams): unknown;
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
            }): _560.MicrotickParams;
        };
        GenesisAccount: {
            encode(message: _559.GenesisAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _559.GenesisAccount;
            fromJSON(object: any): _559.GenesisAccount;
            toJSON(message: _559.GenesisAccount): unknown;
            fromPartial(object: {
                account?: Uint8Array;
                placedQuotes?: number;
                placedTrades?: number;
            }): _559.GenesisAccount;
        };
        GenesisMarket: {
            encode(message: _559.GenesisMarket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _559.GenesisMarket;
            fromJSON(object: any): _559.GenesisMarket;
            toJSON(message: _559.GenesisMarket): unknown;
            fromPartial(object: {
                name?: string;
                description?: string;
            }): _559.GenesisMarket;
        };
        GenesisDuration: {
            encode(message: _559.GenesisDuration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _559.GenesisDuration;
            fromJSON(object: any): _559.GenesisDuration;
            toJSON(message: _559.GenesisDuration): unknown;
            fromPartial(object: {
                name?: string;
                seconds?: number;
            }): _559.GenesisDuration;
        };
        GenesisMicrotick: {
            encode(message: _559.GenesisMicrotick, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _559.GenesisMicrotick;
            fromJSON(object: any): _559.GenesisMicrotick;
            toJSON(message: _559.GenesisMicrotick): unknown;
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
            }): _559.GenesisMicrotick;
        };
    };
}
