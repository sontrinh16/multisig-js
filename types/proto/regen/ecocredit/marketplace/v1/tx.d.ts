import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** MsgSell is the Msg/Sell request type. */
export interface MsgSell {
    /** owner is the address of the owner of the credits being sold. */
    owner: string;
    /** orders are the sell orders being created. */
    orders: MsgSell_Order[];
}
/** Order is the content of a new sell order. */
export interface MsgSell_Order {
    /** batch_denom is the credit batch being sold. */
    batchDenom: string;
    /**
     * quantity is the quantity of credits being sold from this batch. If it is
     * less then the balance of credits the owner has available at the time this
     * sell order is matched, the quantity will be adjusted downwards to the
     * owner's balance. However, if the balance of credits is less than this
     * quantity at the time the sell order is created, the operation will fail.
     */
    quantity: string;
    /**
     * ask_price is the price the seller is asking for each unit of the
     * batch_denom. Each credit unit of the batch will be sold for at least the
     * ask_price or more.
     */
    askPrice: Coin;
    /**
     * disable_auto_retire disables auto-retirement of credits which allows a
     * buyer to disable auto-retirement in their buy order enabling them to
     * resell the credits to another buyer.
     */
    disableAutoRetire: boolean;
    /**
     * expiration is an optional timestamp when the sell order expires. When the
     * expiration time is reached, the sell order is removed from state.
     */
    expiration: Timestamp;
}
/** MsgSellResponse is the Msg/Sell response type. */
export interface MsgSellResponse {
    /** sell_order_ids are the sell order IDs of the newly created sell orders. */
    sellOrderIds: Long[];
}
/** MsgUpdateSellOrders is the Msg/UpdateSellOrders request type. */
export interface MsgUpdateSellOrders {
    /** owner is the owner of the sell orders. */
    owner: string;
    /** updates are updates to existing sell orders. */
    updates: MsgUpdateSellOrders_Update[];
}
/** Update is an update to an existing sell order. */
export interface MsgUpdateSellOrders_Update {
    /** sell_order_id is the ID of an existing sell order. */
    sellOrderId: Long;
    /**
     * new_quantity is the updated quantity of credits available to sell, if it
     * is set to zero then the order is cancelled.
     */
    newQuantity: string;
    /** new_ask_price is the new ask price for this sell order */
    newAskPrice: Coin;
    /**
     * disable_auto_retire updates the disable_auto_retire field in the sell
     * order.
     */
    disableAutoRetire: boolean;
    /**
     * new_expiration is an optional timestamp when the sell order expires. When
     * the expiration time is reached, the sell order is removed from state.
     */
    newExpiration: Timestamp;
}
/** MsgUpdateSellOrdersResponse is the Msg/UpdateSellOrders response type. */
export interface MsgUpdateSellOrdersResponse {
}
/** MsgCancelSellOrder is the Msg/CancelSellOrder request type. */
export interface MsgCancelSellOrder {
    /** seller is the address of the seller. */
    seller: string;
    /** sell_order_id is the id of the seller order to cancel. */
    sellOrderId: Long;
}
/** MsgCancelSellOrder is the Msg/CancelSellOrder response type. */
export interface MsgCancelSellOrderResponse {
}
/** MsgBuyDirect is the Msg/BuyDirect request type. */
export interface MsgBuyDirect {
    /** buyer is the address of the credit buyer. */
    buyer: string;
    /** orders is a list of orders for ecocredits. */
    orders: MsgBuyDirect_Order[];
}
/** Order contains the information needed to purchase an ecocredit. */
export interface MsgBuyDirect_Order {
    /**
     * sell_order_id is the sell order ID against which the buyer is trying
     * to buy.
     */
    sellOrderId: Long;
    /** quantity is the quantity of credits to buy. */
    quantity: string;
    /** bid_price is the price the buyer is willing to pay per credit. */
    bidPrice: Coin;
    /**
     * disable_auto_retire allows auto-retirement to be disabled. If it is set
     * to true the credits will not auto-retire and can be resold assuming that
     * the corresponding sell order has auto-retirement disabled. If the sell
     * order hasn't disabled auto-retirement and the buy order tries to disable
     * it, that buy order will fail.
     */
    disableAutoRetire: boolean;
    /**
     * retirement_jurisdiction is the optional retirement jurisdiction for the
     * credits which will be used only if disable_auto_retire is false.
     */
    retirementJurisdiction: string;
}
/** MsgBuyDirectResponse is the Msg/BuyDirect response type. */
export interface MsgBuyDirectResponse {
}
export declare const MsgSell: {
    encode(message: MsgSell, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSell;
    fromJSON(object: any): MsgSell;
    toJSON(message: MsgSell): unknown;
    fromPartial(object: DeepPartial<MsgSell>): MsgSell;
};
export declare const MsgSell_Order: {
    encode(message: MsgSell_Order, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSell_Order;
    fromJSON(object: any): MsgSell_Order;
    toJSON(message: MsgSell_Order): unknown;
    fromPartial(object: DeepPartial<MsgSell_Order>): MsgSell_Order;
};
export declare const MsgSellResponse: {
    encode(message: MsgSellResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSellResponse;
    fromJSON(object: any): MsgSellResponse;
    toJSON(message: MsgSellResponse): unknown;
    fromPartial(object: DeepPartial<MsgSellResponse>): MsgSellResponse;
};
export declare const MsgUpdateSellOrders: {
    encode(message: MsgUpdateSellOrders, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateSellOrders;
    fromJSON(object: any): MsgUpdateSellOrders;
    toJSON(message: MsgUpdateSellOrders): unknown;
    fromPartial(object: DeepPartial<MsgUpdateSellOrders>): MsgUpdateSellOrders;
};
export declare const MsgUpdateSellOrders_Update: {
    encode(message: MsgUpdateSellOrders_Update, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateSellOrders_Update;
    fromJSON(object: any): MsgUpdateSellOrders_Update;
    toJSON(message: MsgUpdateSellOrders_Update): unknown;
    fromPartial(object: DeepPartial<MsgUpdateSellOrders_Update>): MsgUpdateSellOrders_Update;
};
export declare const MsgUpdateSellOrdersResponse: {
    encode(_: MsgUpdateSellOrdersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateSellOrdersResponse;
    fromJSON(_: any): MsgUpdateSellOrdersResponse;
    toJSON(_: MsgUpdateSellOrdersResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateSellOrdersResponse>): MsgUpdateSellOrdersResponse;
};
export declare const MsgCancelSellOrder: {
    encode(message: MsgCancelSellOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelSellOrder;
    fromJSON(object: any): MsgCancelSellOrder;
    toJSON(message: MsgCancelSellOrder): unknown;
    fromPartial(object: DeepPartial<MsgCancelSellOrder>): MsgCancelSellOrder;
};
export declare const MsgCancelSellOrderResponse: {
    encode(_: MsgCancelSellOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelSellOrderResponse;
    fromJSON(_: any): MsgCancelSellOrderResponse;
    toJSON(_: MsgCancelSellOrderResponse): unknown;
    fromPartial(_: DeepPartial<MsgCancelSellOrderResponse>): MsgCancelSellOrderResponse;
};
export declare const MsgBuyDirect: {
    encode(message: MsgBuyDirect, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuyDirect;
    fromJSON(object: any): MsgBuyDirect;
    toJSON(message: MsgBuyDirect): unknown;
    fromPartial(object: DeepPartial<MsgBuyDirect>): MsgBuyDirect;
};
export declare const MsgBuyDirect_Order: {
    encode(message: MsgBuyDirect_Order, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuyDirect_Order;
    fromJSON(object: any): MsgBuyDirect_Order;
    toJSON(message: MsgBuyDirect_Order): unknown;
    fromPartial(object: DeepPartial<MsgBuyDirect_Order>): MsgBuyDirect_Order;
};
export declare const MsgBuyDirectResponse: {
    encode(_: MsgBuyDirectResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuyDirectResponse;
    fromJSON(_: any): MsgBuyDirectResponse;
    toJSON(_: MsgBuyDirectResponse): unknown;
    fromPartial(_: DeepPartial<MsgBuyDirectResponse>): MsgBuyDirectResponse;
};
