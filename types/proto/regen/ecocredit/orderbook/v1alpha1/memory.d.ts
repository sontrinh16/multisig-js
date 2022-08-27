import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/**
 * BuyOrderSellOrderMatch defines the data the FIFO/price-time-priority matching
 * algorithm used to actually match buy and sell orders.
 */
export interface BuyOrderSellOrderMatch {
    /** market_id defines the market within which this match exists. */
    marketId: Long;
    /** buy_order_id is the buy order ID. */
    buyOrderId: Long;
    /** sell_order_id is the sell order ID. */
    sellOrderId: Long;
    /**
     * bid_price_complement is the the complement (^ operator) of the bid price
     * encoded as a uint32 (which should have sufficient precision) - effectively
     * ~price * 10^exponent (usually 10^6). The complement is used so that bids can
     * be sorted high to low.
     */
    bidPriceComplement: number;
    /**
     * ask_price is the ask price encoded to a uint32. Ask prices are sorted low to
     * high.
     */
    askPrice: number;
}
/** BuyOrderClassSelector indexes a buy order with class selector. */
export interface BuyOrderClassSelector {
    /** buy_order_id is the buy order ID. */
    buyOrderId: Long;
    /** class_id is the class ID. */
    classId: Long;
    /** project_location is the project location in the selector's criteria. */
    projectLocation: string;
    /** min_start_date is the minimum start date in the selector's criteria. */
    minStartDate: Date;
    /** max_end_date is the maximum end date in the selector's criteria. */
    maxEndDate: Date;
}
/** BuyOrderProjectSelector indexes a buy order with project selector. */
export interface BuyOrderProjectSelector {
    /** buy_order_id is the buy order ID. */
    buyOrderId: Long;
    /** project_id is the project ID. */
    projectId: Long;
    /** min_start_date is the minimum start date in the selector's criteria. */
    minStartDate: Date;
    /** max_end_date is the maximum end date in the selector's criteria. */
    maxEndDate: Date;
}
/** BuyOrderBatchSelector indexes a buy order with batch selector. */
export interface BuyOrderBatchSelector {
    /** buy_order_id is the buy order ID. */
    buyOrderId: Long;
    /** batch_id is the batch ID. */
    batchId: Long;
}
export declare const BuyOrderSellOrderMatch: {
    encode(message: BuyOrderSellOrderMatch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BuyOrderSellOrderMatch;
    fromJSON(object: any): BuyOrderSellOrderMatch;
    toJSON(message: BuyOrderSellOrderMatch): unknown;
    fromPartial(object: DeepPartial<BuyOrderSellOrderMatch>): BuyOrderSellOrderMatch;
};
export declare const BuyOrderClassSelector: {
    encode(message: BuyOrderClassSelector, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BuyOrderClassSelector;
    fromJSON(object: any): BuyOrderClassSelector;
    toJSON(message: BuyOrderClassSelector): unknown;
    fromPartial(object: DeepPartial<BuyOrderClassSelector>): BuyOrderClassSelector;
};
export declare const BuyOrderProjectSelector: {
    encode(message: BuyOrderProjectSelector, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BuyOrderProjectSelector;
    fromJSON(object: any): BuyOrderProjectSelector;
    toJSON(message: BuyOrderProjectSelector): unknown;
    fromPartial(object: DeepPartial<BuyOrderProjectSelector>): BuyOrderProjectSelector;
};
export declare const BuyOrderBatchSelector: {
    encode(message: BuyOrderBatchSelector, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BuyOrderBatchSelector;
    fromJSON(object: any): BuyOrderBatchSelector;
    toJSON(message: BuyOrderBatchSelector): unknown;
    fromPartial(object: DeepPartial<BuyOrderBatchSelector>): BuyOrderBatchSelector;
};
