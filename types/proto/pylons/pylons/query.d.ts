import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { ReferralKV, Username, AccountAddr } from "./accounts";
import { Trade } from "./trade";
import { ItemHistory, Item } from "./item";
import { StripeRefund } from "./stripe_refund";
import { RedeemInfo } from "./redeem_info";
import { PaymentInfo } from "./payment_info";
import { GoogleInAppPurchaseOrder } from "./google_iap_order";
import { Execution } from "./execution";
import { Recipe } from "./recipe";
import { Cookbook } from "./cookbook";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface QueryListSignUpByReferee {
    creator: string;
}
export interface QueryListSignUpByRefereeResponse {
    signup: ReferralKV;
}
export interface QueryListTradesByCreatorRequest {
    creator: string;
    pagination: PageRequest;
}
export interface QueryListTradesByCreatorResponse {
    trades: Trade[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
export interface QueryGetItemHistoryRequest {
    cookbookId: string;
    itemId: string;
    mintedNumber: string;
}
export interface QueryGetItemHistoryResponse {
    history: ItemHistory[];
}
export interface QueryGetRecipeHistoryRequest {
    cookbookId: string;
    recipeId: string;
}
export interface QueryGetRecipeHistoryResponse {
    history: RecipeHistory[];
}
export interface RecipeHistory {
    itemId: string;
    cookbookId: string;
    recipeId: string;
    sender: string;
    senderName: string;
    receiver: string;
    amount: string;
    createdAt: Long;
}
export interface QueryGetStripeRefundRequest {
}
export interface QueryGetStripeRefundResponse {
    refunds: StripeRefund[];
}
export interface QueryGetRedeemInfoRequest {
    id: string;
}
export interface QueryGetRedeemInfoResponse {
    redeemInfo: RedeemInfo;
}
export interface QueryAllRedeemInfoRequest {
    pagination: PageRequest;
}
export interface QueryAllRedeemInfoResponse {
    redeemInfo: RedeemInfo[];
    pagination: PageResponse;
}
export interface QueryGetPaymentInfoRequest {
    purchaseId: string;
}
export interface QueryGetPaymentInfoResponse {
    paymentInfo: PaymentInfo;
}
export interface QueryAllPaymentInfoRequest {
    pagination: PageRequest;
}
export interface QueryAllPaymentInfoResponse {
    paymentInfo: PaymentInfo[];
    pagination: PageResponse;
}
export interface QueryGetUsernameByAddressRequest {
    address: string;
}
export interface QueryGetAddressByUsernameRequest {
    username: string;
}
export interface QueryGetUsernameByAddressResponse {
    username: Username;
}
export interface QueryGetAddressByUsernameResponse {
    address: AccountAddr;
}
export interface QueryGetTradeRequest {
    id: Long;
}
export interface QueryGetTradeResponse {
    trade: Trade;
}
export interface QueryListItemByOwnerRequest {
    owner: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
export interface QueryListItemByOwnerResponse {
    items: Item[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
export interface QueryGetGoogleInAppPurchaseOrderRequest {
    purchaseToken: string;
}
export interface QueryGetGoogleInAppPurchaseOrderResponse {
    order: GoogleInAppPurchaseOrder;
}
export interface QueryListExecutionsByItemRequest {
    cookbookId: string;
    itemId: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
export interface QueryListExecutionsByItemResponse {
    completedExecutions: Execution[];
    pendingExecutions: Execution[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
export interface QueryListExecutionsByRecipeRequest {
    cookbookId: string;
    recipeId: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
export interface QueryListExecutionsByRecipeResponse {
    completedExecutions: Execution[];
    pendingExecutions: Execution[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
export interface QueryGetExecutionRequest {
    id: string;
}
export interface QueryGetExecutionResponse {
    execution: Execution;
    completed: boolean;
}
export interface QueryListRecipesByCookbookRequest {
    cookbookId: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
export interface QueryListRecipesByCookbookResponse {
    recipes: Recipe[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
export interface QueryGetItemRequest {
    cookbookId: string;
    id: string;
}
export interface QueryGetItemResponse {
    item: Item;
}
export interface QueryGetRecipeRequest {
    cookbookId: string;
    id: string;
}
export interface QueryGetRecipeResponse {
    recipe: Recipe;
}
export interface QueryListCookbooksByCreatorRequest {
    creator: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
export interface QueryListCookbooksByCreatorResponse {
    cookbooks: Cookbook[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
export interface QueryGetCookbookRequest {
    id: string;
}
export interface QueryGetCookbookResponse {
    cookbook: Cookbook;
}
export declare const QueryListSignUpByReferee: {
    encode(message: QueryListSignUpByReferee, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryListSignUpByReferee;
    fromJSON(object: any): QueryListSignUpByReferee;
    toJSON(message: QueryListSignUpByReferee): unknown;
    fromPartial(object: DeepPartial<QueryListSignUpByReferee>): QueryListSignUpByReferee;
};
export declare const QueryListSignUpByRefereeResponse: {
    encode(message: QueryListSignUpByRefereeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryListSignUpByRefereeResponse;
    fromJSON(object: any): QueryListSignUpByRefereeResponse;
    toJSON(message: QueryListSignUpByRefereeResponse): unknown;
    fromPartial(object: DeepPartial<QueryListSignUpByRefereeResponse>): QueryListSignUpByRefereeResponse;
};
export declare const QueryListTradesByCreatorRequest: {
    encode(message: QueryListTradesByCreatorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryListTradesByCreatorRequest;
    fromJSON(object: any): QueryListTradesByCreatorRequest;
    toJSON(message: QueryListTradesByCreatorRequest): unknown;
    fromPartial(object: DeepPartial<QueryListTradesByCreatorRequest>): QueryListTradesByCreatorRequest;
};
export declare const QueryListTradesByCreatorResponse: {
    encode(message: QueryListTradesByCreatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryListTradesByCreatorResponse;
    fromJSON(object: any): QueryListTradesByCreatorResponse;
    toJSON(message: QueryListTradesByCreatorResponse): unknown;
    fromPartial(object: DeepPartial<QueryListTradesByCreatorResponse>): QueryListTradesByCreatorResponse;
};
export declare const QueryGetItemHistoryRequest: {
    encode(message: QueryGetItemHistoryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetItemHistoryRequest;
    fromJSON(object: any): QueryGetItemHistoryRequest;
    toJSON(message: QueryGetItemHistoryRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetItemHistoryRequest>): QueryGetItemHistoryRequest;
};
export declare const QueryGetItemHistoryResponse: {
    encode(message: QueryGetItemHistoryResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetItemHistoryResponse;
    fromJSON(object: any): QueryGetItemHistoryResponse;
    toJSON(message: QueryGetItemHistoryResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetItemHistoryResponse>): QueryGetItemHistoryResponse;
};
export declare const QueryGetRecipeHistoryRequest: {
    encode(message: QueryGetRecipeHistoryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetRecipeHistoryRequest;
    fromJSON(object: any): QueryGetRecipeHistoryRequest;
    toJSON(message: QueryGetRecipeHistoryRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetRecipeHistoryRequest>): QueryGetRecipeHistoryRequest;
};
export declare const QueryGetRecipeHistoryResponse: {
    encode(message: QueryGetRecipeHistoryResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetRecipeHistoryResponse;
    fromJSON(object: any): QueryGetRecipeHistoryResponse;
    toJSON(message: QueryGetRecipeHistoryResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetRecipeHistoryResponse>): QueryGetRecipeHistoryResponse;
};
export declare const RecipeHistory: {
    encode(message: RecipeHistory, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RecipeHistory;
    fromJSON(object: any): RecipeHistory;
    toJSON(message: RecipeHistory): unknown;
    fromPartial(object: DeepPartial<RecipeHistory>): RecipeHistory;
};
export declare const QueryGetStripeRefundRequest: {
    encode(_: QueryGetStripeRefundRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetStripeRefundRequest;
    fromJSON(_: any): QueryGetStripeRefundRequest;
    toJSON(_: QueryGetStripeRefundRequest): unknown;
    fromPartial(_: DeepPartial<QueryGetStripeRefundRequest>): QueryGetStripeRefundRequest;
};
export declare const QueryGetStripeRefundResponse: {
    encode(message: QueryGetStripeRefundResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetStripeRefundResponse;
    fromJSON(object: any): QueryGetStripeRefundResponse;
    toJSON(message: QueryGetStripeRefundResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetStripeRefundResponse>): QueryGetStripeRefundResponse;
};
export declare const QueryGetRedeemInfoRequest: {
    encode(message: QueryGetRedeemInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetRedeemInfoRequest;
    fromJSON(object: any): QueryGetRedeemInfoRequest;
    toJSON(message: QueryGetRedeemInfoRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetRedeemInfoRequest>): QueryGetRedeemInfoRequest;
};
export declare const QueryGetRedeemInfoResponse: {
    encode(message: QueryGetRedeemInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetRedeemInfoResponse;
    fromJSON(object: any): QueryGetRedeemInfoResponse;
    toJSON(message: QueryGetRedeemInfoResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetRedeemInfoResponse>): QueryGetRedeemInfoResponse;
};
export declare const QueryAllRedeemInfoRequest: {
    encode(message: QueryAllRedeemInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllRedeemInfoRequest;
    fromJSON(object: any): QueryAllRedeemInfoRequest;
    toJSON(message: QueryAllRedeemInfoRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllRedeemInfoRequest>): QueryAllRedeemInfoRequest;
};
export declare const QueryAllRedeemInfoResponse: {
    encode(message: QueryAllRedeemInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllRedeemInfoResponse;
    fromJSON(object: any): QueryAllRedeemInfoResponse;
    toJSON(message: QueryAllRedeemInfoResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllRedeemInfoResponse>): QueryAllRedeemInfoResponse;
};
export declare const QueryGetPaymentInfoRequest: {
    encode(message: QueryGetPaymentInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPaymentInfoRequest;
    fromJSON(object: any): QueryGetPaymentInfoRequest;
    toJSON(message: QueryGetPaymentInfoRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetPaymentInfoRequest>): QueryGetPaymentInfoRequest;
};
export declare const QueryGetPaymentInfoResponse: {
    encode(message: QueryGetPaymentInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPaymentInfoResponse;
    fromJSON(object: any): QueryGetPaymentInfoResponse;
    toJSON(message: QueryGetPaymentInfoResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetPaymentInfoResponse>): QueryGetPaymentInfoResponse;
};
export declare const QueryAllPaymentInfoRequest: {
    encode(message: QueryAllPaymentInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPaymentInfoRequest;
    fromJSON(object: any): QueryAllPaymentInfoRequest;
    toJSON(message: QueryAllPaymentInfoRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllPaymentInfoRequest>): QueryAllPaymentInfoRequest;
};
export declare const QueryAllPaymentInfoResponse: {
    encode(message: QueryAllPaymentInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPaymentInfoResponse;
    fromJSON(object: any): QueryAllPaymentInfoResponse;
    toJSON(message: QueryAllPaymentInfoResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllPaymentInfoResponse>): QueryAllPaymentInfoResponse;
};
export declare const QueryGetUsernameByAddressRequest: {
    encode(message: QueryGetUsernameByAddressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetUsernameByAddressRequest;
    fromJSON(object: any): QueryGetUsernameByAddressRequest;
    toJSON(message: QueryGetUsernameByAddressRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetUsernameByAddressRequest>): QueryGetUsernameByAddressRequest;
};
export declare const QueryGetAddressByUsernameRequest: {
    encode(message: QueryGetAddressByUsernameRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAddressByUsernameRequest;
    fromJSON(object: any): QueryGetAddressByUsernameRequest;
    toJSON(message: QueryGetAddressByUsernameRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetAddressByUsernameRequest>): QueryGetAddressByUsernameRequest;
};
export declare const QueryGetUsernameByAddressResponse: {
    encode(message: QueryGetUsernameByAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetUsernameByAddressResponse;
    fromJSON(object: any): QueryGetUsernameByAddressResponse;
    toJSON(message: QueryGetUsernameByAddressResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetUsernameByAddressResponse>): QueryGetUsernameByAddressResponse;
};
export declare const QueryGetAddressByUsernameResponse: {
    encode(message: QueryGetAddressByUsernameResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAddressByUsernameResponse;
    fromJSON(object: any): QueryGetAddressByUsernameResponse;
    toJSON(message: QueryGetAddressByUsernameResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetAddressByUsernameResponse>): QueryGetAddressByUsernameResponse;
};
export declare const QueryGetTradeRequest: {
    encode(message: QueryGetTradeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetTradeRequest;
    fromJSON(object: any): QueryGetTradeRequest;
    toJSON(message: QueryGetTradeRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetTradeRequest>): QueryGetTradeRequest;
};
export declare const QueryGetTradeResponse: {
    encode(message: QueryGetTradeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetTradeResponse;
    fromJSON(object: any): QueryGetTradeResponse;
    toJSON(message: QueryGetTradeResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetTradeResponse>): QueryGetTradeResponse;
};
export declare const QueryListItemByOwnerRequest: {
    encode(message: QueryListItemByOwnerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryListItemByOwnerRequest;
    fromJSON(object: any): QueryListItemByOwnerRequest;
    toJSON(message: QueryListItemByOwnerRequest): unknown;
    fromPartial(object: DeepPartial<QueryListItemByOwnerRequest>): QueryListItemByOwnerRequest;
};
export declare const QueryListItemByOwnerResponse: {
    encode(message: QueryListItemByOwnerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryListItemByOwnerResponse;
    fromJSON(object: any): QueryListItemByOwnerResponse;
    toJSON(message: QueryListItemByOwnerResponse): unknown;
    fromPartial(object: DeepPartial<QueryListItemByOwnerResponse>): QueryListItemByOwnerResponse;
};
export declare const QueryGetGoogleInAppPurchaseOrderRequest: {
    encode(message: QueryGetGoogleInAppPurchaseOrderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetGoogleInAppPurchaseOrderRequest;
    fromJSON(object: any): QueryGetGoogleInAppPurchaseOrderRequest;
    toJSON(message: QueryGetGoogleInAppPurchaseOrderRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetGoogleInAppPurchaseOrderRequest>): QueryGetGoogleInAppPurchaseOrderRequest;
};
export declare const QueryGetGoogleInAppPurchaseOrderResponse: {
    encode(message: QueryGetGoogleInAppPurchaseOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetGoogleInAppPurchaseOrderResponse;
    fromJSON(object: any): QueryGetGoogleInAppPurchaseOrderResponse;
    toJSON(message: QueryGetGoogleInAppPurchaseOrderResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetGoogleInAppPurchaseOrderResponse>): QueryGetGoogleInAppPurchaseOrderResponse;
};
export declare const QueryListExecutionsByItemRequest: {
    encode(message: QueryListExecutionsByItemRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryListExecutionsByItemRequest;
    fromJSON(object: any): QueryListExecutionsByItemRequest;
    toJSON(message: QueryListExecutionsByItemRequest): unknown;
    fromPartial(object: DeepPartial<QueryListExecutionsByItemRequest>): QueryListExecutionsByItemRequest;
};
export declare const QueryListExecutionsByItemResponse: {
    encode(message: QueryListExecutionsByItemResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryListExecutionsByItemResponse;
    fromJSON(object: any): QueryListExecutionsByItemResponse;
    toJSON(message: QueryListExecutionsByItemResponse): unknown;
    fromPartial(object: DeepPartial<QueryListExecutionsByItemResponse>): QueryListExecutionsByItemResponse;
};
export declare const QueryListExecutionsByRecipeRequest: {
    encode(message: QueryListExecutionsByRecipeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryListExecutionsByRecipeRequest;
    fromJSON(object: any): QueryListExecutionsByRecipeRequest;
    toJSON(message: QueryListExecutionsByRecipeRequest): unknown;
    fromPartial(object: DeepPartial<QueryListExecutionsByRecipeRequest>): QueryListExecutionsByRecipeRequest;
};
export declare const QueryListExecutionsByRecipeResponse: {
    encode(message: QueryListExecutionsByRecipeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryListExecutionsByRecipeResponse;
    fromJSON(object: any): QueryListExecutionsByRecipeResponse;
    toJSON(message: QueryListExecutionsByRecipeResponse): unknown;
    fromPartial(object: DeepPartial<QueryListExecutionsByRecipeResponse>): QueryListExecutionsByRecipeResponse;
};
export declare const QueryGetExecutionRequest: {
    encode(message: QueryGetExecutionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetExecutionRequest;
    fromJSON(object: any): QueryGetExecutionRequest;
    toJSON(message: QueryGetExecutionRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetExecutionRequest>): QueryGetExecutionRequest;
};
export declare const QueryGetExecutionResponse: {
    encode(message: QueryGetExecutionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetExecutionResponse;
    fromJSON(object: any): QueryGetExecutionResponse;
    toJSON(message: QueryGetExecutionResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetExecutionResponse>): QueryGetExecutionResponse;
};
export declare const QueryListRecipesByCookbookRequest: {
    encode(message: QueryListRecipesByCookbookRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryListRecipesByCookbookRequest;
    fromJSON(object: any): QueryListRecipesByCookbookRequest;
    toJSON(message: QueryListRecipesByCookbookRequest): unknown;
    fromPartial(object: DeepPartial<QueryListRecipesByCookbookRequest>): QueryListRecipesByCookbookRequest;
};
export declare const QueryListRecipesByCookbookResponse: {
    encode(message: QueryListRecipesByCookbookResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryListRecipesByCookbookResponse;
    fromJSON(object: any): QueryListRecipesByCookbookResponse;
    toJSON(message: QueryListRecipesByCookbookResponse): unknown;
    fromPartial(object: DeepPartial<QueryListRecipesByCookbookResponse>): QueryListRecipesByCookbookResponse;
};
export declare const QueryGetItemRequest: {
    encode(message: QueryGetItemRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetItemRequest;
    fromJSON(object: any): QueryGetItemRequest;
    toJSON(message: QueryGetItemRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetItemRequest>): QueryGetItemRequest;
};
export declare const QueryGetItemResponse: {
    encode(message: QueryGetItemResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetItemResponse;
    fromJSON(object: any): QueryGetItemResponse;
    toJSON(message: QueryGetItemResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetItemResponse>): QueryGetItemResponse;
};
export declare const QueryGetRecipeRequest: {
    encode(message: QueryGetRecipeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetRecipeRequest;
    fromJSON(object: any): QueryGetRecipeRequest;
    toJSON(message: QueryGetRecipeRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetRecipeRequest>): QueryGetRecipeRequest;
};
export declare const QueryGetRecipeResponse: {
    encode(message: QueryGetRecipeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetRecipeResponse;
    fromJSON(object: any): QueryGetRecipeResponse;
    toJSON(message: QueryGetRecipeResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetRecipeResponse>): QueryGetRecipeResponse;
};
export declare const QueryListCookbooksByCreatorRequest: {
    encode(message: QueryListCookbooksByCreatorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryListCookbooksByCreatorRequest;
    fromJSON(object: any): QueryListCookbooksByCreatorRequest;
    toJSON(message: QueryListCookbooksByCreatorRequest): unknown;
    fromPartial(object: DeepPartial<QueryListCookbooksByCreatorRequest>): QueryListCookbooksByCreatorRequest;
};
export declare const QueryListCookbooksByCreatorResponse: {
    encode(message: QueryListCookbooksByCreatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryListCookbooksByCreatorResponse;
    fromJSON(object: any): QueryListCookbooksByCreatorResponse;
    toJSON(message: QueryListCookbooksByCreatorResponse): unknown;
    fromPartial(object: DeepPartial<QueryListCookbooksByCreatorResponse>): QueryListCookbooksByCreatorResponse;
};
export declare const QueryGetCookbookRequest: {
    encode(message: QueryGetCookbookRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCookbookRequest;
    fromJSON(object: any): QueryGetCookbookRequest;
    toJSON(message: QueryGetCookbookRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetCookbookRequest>): QueryGetCookbookRequest;
};
export declare const QueryGetCookbookResponse: {
    encode(message: QueryGetCookbookResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCookbookResponse;
    fromJSON(object: any): QueryGetCookbookResponse;
    toJSON(message: QueryGetCookbookResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetCookbookResponse>): QueryGetCookbookResponse;
};
