import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Basket, BasketBalance } from "./state";
import { DateCriteria } from "./types";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** QueryBasketRequest is the Query/Basket request type. */
export interface QueryBasketRequest {
    /** basket_denom represents the denom of the basket to query. */
    basketDenom: string;
}
/** QueryBasketResponse is the Query/Basket response type. */
export interface QueryBasketResponse {
    /**
     * basket is the queried basket.
     * Deprecated: This field is still populated and will be removed in the
     * next version. Use basket_info instead.
     */
    /** @deprecated */
    basket: Basket;
    /** classes are the credit classes that can be deposited in the basket. */
    classes: string[];
    /** basket_info is the queried basket. */
    basketInfo: BasketInfo;
}
/** QueryBasketsRequest is the Query/Baskets request type. */
export interface QueryBasketsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/** QueryBasketsResponse is the Query/Baskets response type. */
export interface QueryBasketsResponse {
    /**
     * baskets are the fetched baskets.
     * Deprecated: This field is still populated and will be removed in the
     * next version. Use baskets_info instead.
     */
    /** @deprecated */
    baskets: Basket[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
    /** baskets_info are the fetched baskets. */
    basketsInfo: BasketInfo[];
}
/** QueryBasketBalancesRequest is the Query/BasketBalances request type. */
export interface QueryBasketBalancesRequest {
    /** basket_denom is the denom of the basket. */
    basketDenom: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/** QueryBasketBalancesResponse is the Query/BasketBalances response type. */
export interface QueryBasketBalancesResponse {
    /**
     * balances is a list of credit balances in the basket.
     * Deprecated: This field is still populated and will be removed in the
     * next version. Use balances_info instead.
     */
    /** @deprecated */
    balances: BasketBalance[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
    /** balances_info is a list of credit balances in the basket. */
    balancesInfo: BasketBalanceInfo[];
}
/** QueryBasketBalanceRequest is the Query/BasketBalance request type. */
export interface QueryBasketBalanceRequest {
    /** basket_denom is the denom of the basket. */
    basketDenom: string;
    /** batch_denom is the denom of the credit batch. */
    batchDenom: string;
}
/** QueryBasketBalanceResponse is the Query/BasketBalance response type. */
export interface QueryBasketBalanceResponse {
    /** balance is the amount of the queried credit batch in the basket. */
    balance: string;
}
/** BasketInfo is the human-readable basket information. */
export interface BasketInfo {
    /** basket_denom is the basket bank denom. */
    basketDenom: string;
    /**
     * name is the unique name of the basket specified in MsgCreate. Basket
     * names must be unique across all credit types and choices of exponent
     * above and beyond the uniqueness constraint on basket_denom.
     */
    name: string;
    /**
     * disable_auto_retire indicates whether or not the credits will be retired
     * upon withdraw from the basket.
     */
    disableAutoRetire: boolean;
    /**
     * credit_type_abbrev is the abbreviation of the credit type this basket is
     * able to hold.
     */
    creditTypeAbbrev: string;
    /** date_criteria is the date criteria for batches admitted to the basket. */
    dateCriteria: DateCriteria;
    /** exponent is the exponent for converting credits to/from basket tokens. */
    exponent: number;
    /**
     * curator is the address of the basket curator who is able to change certain
     * basket settings.
     */
    curator: string;
}
/** BasketBalanceInfo is the human-readable basket balance information. */
export interface BasketBalanceInfo {
    /** batch_denom is the denom of the credit batch */
    batchDenom: string;
    /** balance is the amount of ecocredits held in the basket */
    balance: string;
}
export declare const QueryBasketRequest: {
    encode(message: QueryBasketRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBasketRequest;
    fromJSON(object: any): QueryBasketRequest;
    toJSON(message: QueryBasketRequest): unknown;
    fromPartial(object: DeepPartial<QueryBasketRequest>): QueryBasketRequest;
};
export declare const QueryBasketResponse: {
    encode(message: QueryBasketResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBasketResponse;
    fromJSON(object: any): QueryBasketResponse;
    toJSON(message: QueryBasketResponse): unknown;
    fromPartial(object: DeepPartial<QueryBasketResponse>): QueryBasketResponse;
};
export declare const QueryBasketsRequest: {
    encode(message: QueryBasketsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBasketsRequest;
    fromJSON(object: any): QueryBasketsRequest;
    toJSON(message: QueryBasketsRequest): unknown;
    fromPartial(object: DeepPartial<QueryBasketsRequest>): QueryBasketsRequest;
};
export declare const QueryBasketsResponse: {
    encode(message: QueryBasketsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBasketsResponse;
    fromJSON(object: any): QueryBasketsResponse;
    toJSON(message: QueryBasketsResponse): unknown;
    fromPartial(object: DeepPartial<QueryBasketsResponse>): QueryBasketsResponse;
};
export declare const QueryBasketBalancesRequest: {
    encode(message: QueryBasketBalancesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBasketBalancesRequest;
    fromJSON(object: any): QueryBasketBalancesRequest;
    toJSON(message: QueryBasketBalancesRequest): unknown;
    fromPartial(object: DeepPartial<QueryBasketBalancesRequest>): QueryBasketBalancesRequest;
};
export declare const QueryBasketBalancesResponse: {
    encode(message: QueryBasketBalancesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBasketBalancesResponse;
    fromJSON(object: any): QueryBasketBalancesResponse;
    toJSON(message: QueryBasketBalancesResponse): unknown;
    fromPartial(object: DeepPartial<QueryBasketBalancesResponse>): QueryBasketBalancesResponse;
};
export declare const QueryBasketBalanceRequest: {
    encode(message: QueryBasketBalanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBasketBalanceRequest;
    fromJSON(object: any): QueryBasketBalanceRequest;
    toJSON(message: QueryBasketBalanceRequest): unknown;
    fromPartial(object: DeepPartial<QueryBasketBalanceRequest>): QueryBasketBalanceRequest;
};
export declare const QueryBasketBalanceResponse: {
    encode(message: QueryBasketBalanceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBasketBalanceResponse;
    fromJSON(object: any): QueryBasketBalanceResponse;
    toJSON(message: QueryBasketBalanceResponse): unknown;
    fromPartial(object: DeepPartial<QueryBasketBalanceResponse>): QueryBasketBalanceResponse;
};
export declare const BasketInfo: {
    encode(message: BasketInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BasketInfo;
    fromJSON(object: any): BasketInfo;
    toJSON(message: BasketInfo): unknown;
    fromPartial(object: DeepPartial<BasketInfo>): BasketInfo;
};
export declare const BasketBalanceInfo: {
    encode(message: BasketBalanceInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BasketBalanceInfo;
    fromJSON(object: any): BasketBalanceInfo;
    toJSON(message: BasketBalanceInfo): unknown;
    fromPartial(object: DeepPartial<BasketBalanceInfo>): BasketBalanceInfo;
};
