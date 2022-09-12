import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { AllowedDenom } from "./state";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** QuerySellOrderRequest is the Query/SellOrder request type. */
export interface QuerySellOrderRequest {
    /** sell_order_id is the id of the requested sell order. */
    sellOrderId: Long;
}
/** QuerySellOrderResponse is the Query/SellOrder response type. */
export interface QuerySellOrderResponse {
    /** sell_order contains all information related to a sell order. */
    sellOrder: SellOrderInfo;
}
/** QuerySellOrdersRequest is the Query/SellOrders request type. */
export interface QuerySellOrdersRequest {
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/** QuerySellOrdersResponse is the Query/SellOrders response type. */
export interface QuerySellOrdersResponse {
    /** sell_orders is a list of sell orders. */
    sellOrders: SellOrderInfo[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
/** QuerySellOrdersByDenomRequest is the Query/SellOrdersByDenom request type. */
export interface QuerySellOrdersByBatchDenomRequest {
    /** batch_denom is an ecocredit denom */
    batchDenom: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/** QuerySellOrdersByDenomResponse is the Query/SellOrdersByDenom response type. */
export interface QuerySellOrdersByBatchDenomResponse {
    /** sell_orders is a list of sell orders. */
    sellOrders: SellOrderInfo[];
    /** pagination defines an optional pagination for the response. */
    pagination: PageResponse;
}
/**
 * QuerySellOrdersByAddressRequest is the Query/SellOrdersByAddress request
 * type.
 */
export interface QuerySellOrdersByAddressRequest {
    /** address is the creator of the sell order */
    address: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/**
 * QuerySellOrdersByAddressResponse is the Query/SellOrdersByAddressResponse
 * response type.
 */
export interface QuerySellOrdersByAddressResponse {
    /** sell_orders is a list of sell orders. */
    sellOrders: SellOrderInfo[];
    /** pagination defines an optional pagination for the response. */
    pagination: PageResponse;
}
/** QueryAllowedDenomsRequest is the Query/AllowedDenoms request type. */
export interface QueryAllowedDenomsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/** QueryAllowedDenomsResponse is the Query/AllowedDenoms response type. */
export interface QueryAllowedDenomsResponse {
    /**
     * allowed_denoms is a list of coin denoms allowed to use in the ask price of
     * sell orders.
     */
    allowedDenoms: AllowedDenom[];
    /** pagination defines an optional pagination for the response. */
    pagination: PageResponse;
}
/** SellOrderInfo is the human-readable sell order information. */
export interface SellOrderInfo {
    /** id is the unique ID of sell order. */
    id: Long;
    /** seller is the account address of the owner of the credits being sold. */
    seller: string;
    /** batch_denom is denom of the credit batch being sold. */
    batchDenom: string;
    /** quantity is the decimal quantity of credits being sold. */
    quantity: string;
    /** ask_denom is the denom used in the ask price of the sell order. */
    askDenom: string;
    /**
     * ask_price is the integer price (encoded as a string) the seller is asking
     * for each unit of the batch_denom. Each credit unit of the batch will be
     * sold for at least the ask_price or more.
     */
    askPrice: string;
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
export declare const QuerySellOrderRequest: {
    encode(message: QuerySellOrderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySellOrderRequest;
    fromJSON(object: any): QuerySellOrderRequest;
    toJSON(message: QuerySellOrderRequest): unknown;
    fromPartial(object: DeepPartial<QuerySellOrderRequest>): QuerySellOrderRequest;
};
export declare const QuerySellOrderResponse: {
    encode(message: QuerySellOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySellOrderResponse;
    fromJSON(object: any): QuerySellOrderResponse;
    toJSON(message: QuerySellOrderResponse): unknown;
    fromPartial(object: DeepPartial<QuerySellOrderResponse>): QuerySellOrderResponse;
};
export declare const QuerySellOrdersRequest: {
    encode(message: QuerySellOrdersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySellOrdersRequest;
    fromJSON(object: any): QuerySellOrdersRequest;
    toJSON(message: QuerySellOrdersRequest): unknown;
    fromPartial(object: DeepPartial<QuerySellOrdersRequest>): QuerySellOrdersRequest;
};
export declare const QuerySellOrdersResponse: {
    encode(message: QuerySellOrdersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySellOrdersResponse;
    fromJSON(object: any): QuerySellOrdersResponse;
    toJSON(message: QuerySellOrdersResponse): unknown;
    fromPartial(object: DeepPartial<QuerySellOrdersResponse>): QuerySellOrdersResponse;
};
export declare const QuerySellOrdersByBatchDenomRequest: {
    encode(message: QuerySellOrdersByBatchDenomRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySellOrdersByBatchDenomRequest;
    fromJSON(object: any): QuerySellOrdersByBatchDenomRequest;
    toJSON(message: QuerySellOrdersByBatchDenomRequest): unknown;
    fromPartial(object: DeepPartial<QuerySellOrdersByBatchDenomRequest>): QuerySellOrdersByBatchDenomRequest;
};
export declare const QuerySellOrdersByBatchDenomResponse: {
    encode(message: QuerySellOrdersByBatchDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySellOrdersByBatchDenomResponse;
    fromJSON(object: any): QuerySellOrdersByBatchDenomResponse;
    toJSON(message: QuerySellOrdersByBatchDenomResponse): unknown;
    fromPartial(object: DeepPartial<QuerySellOrdersByBatchDenomResponse>): QuerySellOrdersByBatchDenomResponse;
};
export declare const QuerySellOrdersByAddressRequest: {
    encode(message: QuerySellOrdersByAddressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySellOrdersByAddressRequest;
    fromJSON(object: any): QuerySellOrdersByAddressRequest;
    toJSON(message: QuerySellOrdersByAddressRequest): unknown;
    fromPartial(object: DeepPartial<QuerySellOrdersByAddressRequest>): QuerySellOrdersByAddressRequest;
};
export declare const QuerySellOrdersByAddressResponse: {
    encode(message: QuerySellOrdersByAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySellOrdersByAddressResponse;
    fromJSON(object: any): QuerySellOrdersByAddressResponse;
    toJSON(message: QuerySellOrdersByAddressResponse): unknown;
    fromPartial(object: DeepPartial<QuerySellOrdersByAddressResponse>): QuerySellOrdersByAddressResponse;
};
export declare const QueryAllowedDenomsRequest: {
    encode(message: QueryAllowedDenomsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowedDenomsRequest;
    fromJSON(object: any): QueryAllowedDenomsRequest;
    toJSON(message: QueryAllowedDenomsRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllowedDenomsRequest>): QueryAllowedDenomsRequest;
};
export declare const QueryAllowedDenomsResponse: {
    encode(message: QueryAllowedDenomsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowedDenomsResponse;
    fromJSON(object: any): QueryAllowedDenomsResponse;
    toJSON(message: QueryAllowedDenomsResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllowedDenomsResponse>): QueryAllowedDenomsResponse;
};
export declare const SellOrderInfo: {
    encode(message: SellOrderInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SellOrderInfo;
    fromJSON(object: any): SellOrderInfo;
    toJSON(message: SellOrderInfo): unknown;
    fromPartial(object: DeepPartial<SellOrderInfo>): SellOrderInfo;
};
