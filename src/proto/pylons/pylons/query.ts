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
import { isSet, DeepPartial, Long } from "@osmonauts/helpers";
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
export interface QueryGetStripeRefundRequest {}
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

function createBaseQueryListSignUpByReferee(): QueryListSignUpByReferee {
  return {
    creator: ""
  };
}

export const QueryListSignUpByReferee = {
  encode(message: QueryListSignUpByReferee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListSignUpByReferee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListSignUpByReferee();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryListSignUpByReferee {
    return {
      creator: isSet(object.creator) ? String(object.creator) : ""
    };
  },

  toJSON(message: QueryListSignUpByReferee): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryListSignUpByReferee>): QueryListSignUpByReferee {
    const message = createBaseQueryListSignUpByReferee();
    message.creator = object.creator ?? "";
    return message;
  }

};

function createBaseQueryListSignUpByRefereeResponse(): QueryListSignUpByRefereeResponse {
  return {
    signup: undefined
  };
}

export const QueryListSignUpByRefereeResponse = {
  encode(message: QueryListSignUpByRefereeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signup !== undefined) {
      ReferralKV.encode(message.signup, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListSignUpByRefereeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListSignUpByRefereeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.signup = ReferralKV.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryListSignUpByRefereeResponse {
    return {
      signup: isSet(object.signup) ? ReferralKV.fromJSON(object.signup) : undefined
    };
  },

  toJSON(message: QueryListSignUpByRefereeResponse): unknown {
    const obj: any = {};
    message.signup !== undefined && (obj.signup = message.signup ? ReferralKV.toJSON(message.signup) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryListSignUpByRefereeResponse>): QueryListSignUpByRefereeResponse {
    const message = createBaseQueryListSignUpByRefereeResponse();
    message.signup = object.signup !== undefined && object.signup !== null ? ReferralKV.fromPartial(object.signup) : undefined;
    return message;
  }

};

function createBaseQueryListTradesByCreatorRequest(): QueryListTradesByCreatorRequest {
  return {
    creator: "",
    pagination: undefined
  };
}

export const QueryListTradesByCreatorRequest = {
  encode(message: QueryListTradesByCreatorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListTradesByCreatorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListTradesByCreatorRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryListTradesByCreatorRequest {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryListTradesByCreatorRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryListTradesByCreatorRequest>): QueryListTradesByCreatorRequest {
    const message = createBaseQueryListTradesByCreatorRequest();
    message.creator = object.creator ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryListTradesByCreatorResponse(): QueryListTradesByCreatorResponse {
  return {
    trades: [],
    pagination: undefined
  };
}

export const QueryListTradesByCreatorResponse = {
  encode(message: QueryListTradesByCreatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.trades) {
      Trade.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListTradesByCreatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListTradesByCreatorResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.trades.push(Trade.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryListTradesByCreatorResponse {
    return {
      trades: Array.isArray(object?.trades) ? object.trades.map((e: any) => Trade.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryListTradesByCreatorResponse): unknown {
    const obj: any = {};

    if (message.trades) {
      obj.trades = message.trades.map(e => e ? Trade.toJSON(e) : undefined);
    } else {
      obj.trades = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryListTradesByCreatorResponse>): QueryListTradesByCreatorResponse {
    const message = createBaseQueryListTradesByCreatorResponse();
    message.trades = object.trades?.map(e => Trade.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryGetItemHistoryRequest(): QueryGetItemHistoryRequest {
  return {
    cookbookId: "",
    itemId: "",
    mintedNumber: ""
  };
}

export const QueryGetItemHistoryRequest = {
  encode(message: QueryGetItemHistoryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cookbookId !== "") {
      writer.uint32(10).string(message.cookbookId);
    }

    if (message.itemId !== "") {
      writer.uint32(18).string(message.itemId);
    }

    if (message.mintedNumber !== "") {
      writer.uint32(26).string(message.mintedNumber);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetItemHistoryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetItemHistoryRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.cookbookId = reader.string();
          break;

        case 2:
          message.itemId = reader.string();
          break;

        case 3:
          message.mintedNumber = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetItemHistoryRequest {
    return {
      cookbookId: isSet(object.cookbookId) ? String(object.cookbookId) : "",
      itemId: isSet(object.itemId) ? String(object.itemId) : "",
      mintedNumber: isSet(object.mintedNumber) ? String(object.mintedNumber) : ""
    };
  },

  toJSON(message: QueryGetItemHistoryRequest): unknown {
    const obj: any = {};
    message.cookbookId !== undefined && (obj.cookbookId = message.cookbookId);
    message.itemId !== undefined && (obj.itemId = message.itemId);
    message.mintedNumber !== undefined && (obj.mintedNumber = message.mintedNumber);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetItemHistoryRequest>): QueryGetItemHistoryRequest {
    const message = createBaseQueryGetItemHistoryRequest();
    message.cookbookId = object.cookbookId ?? "";
    message.itemId = object.itemId ?? "";
    message.mintedNumber = object.mintedNumber ?? "";
    return message;
  }

};

function createBaseQueryGetItemHistoryResponse(): QueryGetItemHistoryResponse {
  return {
    history: []
  };
}

export const QueryGetItemHistoryResponse = {
  encode(message: QueryGetItemHistoryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.history) {
      ItemHistory.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetItemHistoryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetItemHistoryResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.history.push(ItemHistory.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetItemHistoryResponse {
    return {
      history: Array.isArray(object?.history) ? object.history.map((e: any) => ItemHistory.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryGetItemHistoryResponse): unknown {
    const obj: any = {};

    if (message.history) {
      obj.history = message.history.map(e => e ? ItemHistory.toJSON(e) : undefined);
    } else {
      obj.history = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetItemHistoryResponse>): QueryGetItemHistoryResponse {
    const message = createBaseQueryGetItemHistoryResponse();
    message.history = object.history?.map(e => ItemHistory.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryGetRecipeHistoryRequest(): QueryGetRecipeHistoryRequest {
  return {
    cookbookId: "",
    recipeId: ""
  };
}

export const QueryGetRecipeHistoryRequest = {
  encode(message: QueryGetRecipeHistoryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cookbookId !== "") {
      writer.uint32(10).string(message.cookbookId);
    }

    if (message.recipeId !== "") {
      writer.uint32(18).string(message.recipeId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetRecipeHistoryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetRecipeHistoryRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.cookbookId = reader.string();
          break;

        case 2:
          message.recipeId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetRecipeHistoryRequest {
    return {
      cookbookId: isSet(object.cookbookId) ? String(object.cookbookId) : "",
      recipeId: isSet(object.recipeId) ? String(object.recipeId) : ""
    };
  },

  toJSON(message: QueryGetRecipeHistoryRequest): unknown {
    const obj: any = {};
    message.cookbookId !== undefined && (obj.cookbookId = message.cookbookId);
    message.recipeId !== undefined && (obj.recipeId = message.recipeId);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetRecipeHistoryRequest>): QueryGetRecipeHistoryRequest {
    const message = createBaseQueryGetRecipeHistoryRequest();
    message.cookbookId = object.cookbookId ?? "";
    message.recipeId = object.recipeId ?? "";
    return message;
  }

};

function createBaseQueryGetRecipeHistoryResponse(): QueryGetRecipeHistoryResponse {
  return {
    history: []
  };
}

export const QueryGetRecipeHistoryResponse = {
  encode(message: QueryGetRecipeHistoryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.history) {
      RecipeHistory.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetRecipeHistoryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetRecipeHistoryResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.history.push(RecipeHistory.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetRecipeHistoryResponse {
    return {
      history: Array.isArray(object?.history) ? object.history.map((e: any) => RecipeHistory.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryGetRecipeHistoryResponse): unknown {
    const obj: any = {};

    if (message.history) {
      obj.history = message.history.map(e => e ? RecipeHistory.toJSON(e) : undefined);
    } else {
      obj.history = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetRecipeHistoryResponse>): QueryGetRecipeHistoryResponse {
    const message = createBaseQueryGetRecipeHistoryResponse();
    message.history = object.history?.map(e => RecipeHistory.fromPartial(e)) || [];
    return message;
  }

};

function createBaseRecipeHistory(): RecipeHistory {
  return {
    itemId: "",
    cookbookId: "",
    recipeId: "",
    sender: "",
    senderName: "",
    receiver: "",
    amount: "",
    createdAt: Long.ZERO
  };
}

export const RecipeHistory = {
  encode(message: RecipeHistory, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemId !== "") {
      writer.uint32(10).string(message.itemId);
    }

    if (message.cookbookId !== "") {
      writer.uint32(18).string(message.cookbookId);
    }

    if (message.recipeId !== "") {
      writer.uint32(26).string(message.recipeId);
    }

    if (message.sender !== "") {
      writer.uint32(34).string(message.sender);
    }

    if (message.senderName !== "") {
      writer.uint32(42).string(message.senderName);
    }

    if (message.receiver !== "") {
      writer.uint32(50).string(message.receiver);
    }

    if (message.amount !== "") {
      writer.uint32(58).string(message.amount);
    }

    if (!message.createdAt.isZero()) {
      writer.uint32(64).int64(message.createdAt);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecipeHistory {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecipeHistory();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.itemId = reader.string();
          break;

        case 2:
          message.cookbookId = reader.string();
          break;

        case 3:
          message.recipeId = reader.string();
          break;

        case 4:
          message.sender = reader.string();
          break;

        case 5:
          message.senderName = reader.string();
          break;

        case 6:
          message.receiver = reader.string();
          break;

        case 7:
          message.amount = reader.string();
          break;

        case 8:
          message.createdAt = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RecipeHistory {
    return {
      itemId: isSet(object.itemId) ? String(object.itemId) : "",
      cookbookId: isSet(object.cookbookId) ? String(object.cookbookId) : "",
      recipeId: isSet(object.recipeId) ? String(object.recipeId) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      senderName: isSet(object.senderName) ? String(object.senderName) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      createdAt: isSet(object.createdAt) ? Long.fromString(object.createdAt) : Long.ZERO
    };
  },

  toJSON(message: RecipeHistory): unknown {
    const obj: any = {};
    message.itemId !== undefined && (obj.itemId = message.itemId);
    message.cookbookId !== undefined && (obj.cookbookId = message.cookbookId);
    message.recipeId !== undefined && (obj.recipeId = message.recipeId);
    message.sender !== undefined && (obj.sender = message.sender);
    message.senderName !== undefined && (obj.senderName = message.senderName);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.amount !== undefined && (obj.amount = message.amount);
    message.createdAt !== undefined && (obj.createdAt = (message.createdAt || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<RecipeHistory>): RecipeHistory {
    const message = createBaseRecipeHistory();
    message.itemId = object.itemId ?? "";
    message.cookbookId = object.cookbookId ?? "";
    message.recipeId = object.recipeId ?? "";
    message.sender = object.sender ?? "";
    message.senderName = object.senderName ?? "";
    message.receiver = object.receiver ?? "";
    message.amount = object.amount ?? "";
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? Long.fromValue(object.createdAt) : Long.ZERO;
    return message;
  }

};

function createBaseQueryGetStripeRefundRequest(): QueryGetStripeRefundRequest {
  return {};
}

export const QueryGetStripeRefundRequest = {
  encode(_: QueryGetStripeRefundRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetStripeRefundRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetStripeRefundRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): QueryGetStripeRefundRequest {
    return {};
  },

  toJSON(_: QueryGetStripeRefundRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryGetStripeRefundRequest>): QueryGetStripeRefundRequest {
    const message = createBaseQueryGetStripeRefundRequest();
    return message;
  }

};

function createBaseQueryGetStripeRefundResponse(): QueryGetStripeRefundResponse {
  return {
    refunds: []
  };
}

export const QueryGetStripeRefundResponse = {
  encode(message: QueryGetStripeRefundResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.refunds) {
      StripeRefund.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetStripeRefundResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetStripeRefundResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.refunds.push(StripeRefund.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetStripeRefundResponse {
    return {
      refunds: Array.isArray(object?.refunds) ? object.refunds.map((e: any) => StripeRefund.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryGetStripeRefundResponse): unknown {
    const obj: any = {};

    if (message.refunds) {
      obj.refunds = message.refunds.map(e => e ? StripeRefund.toJSON(e) : undefined);
    } else {
      obj.refunds = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetStripeRefundResponse>): QueryGetStripeRefundResponse {
    const message = createBaseQueryGetStripeRefundResponse();
    message.refunds = object.refunds?.map(e => StripeRefund.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryGetRedeemInfoRequest(): QueryGetRedeemInfoRequest {
  return {
    id: ""
  };
}

export const QueryGetRedeemInfoRequest = {
  encode(message: QueryGetRedeemInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetRedeemInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetRedeemInfoRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetRedeemInfoRequest {
    return {
      id: isSet(object.id) ? String(object.id) : ""
    };
  },

  toJSON(message: QueryGetRedeemInfoRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetRedeemInfoRequest>): QueryGetRedeemInfoRequest {
    const message = createBaseQueryGetRedeemInfoRequest();
    message.id = object.id ?? "";
    return message;
  }

};

function createBaseQueryGetRedeemInfoResponse(): QueryGetRedeemInfoResponse {
  return {
    redeemInfo: undefined
  };
}

export const QueryGetRedeemInfoResponse = {
  encode(message: QueryGetRedeemInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.redeemInfo !== undefined) {
      RedeemInfo.encode(message.redeemInfo, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetRedeemInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetRedeemInfoResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.redeemInfo = RedeemInfo.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetRedeemInfoResponse {
    return {
      redeemInfo: isSet(object.redeemInfo) ? RedeemInfo.fromJSON(object.redeemInfo) : undefined
    };
  },

  toJSON(message: QueryGetRedeemInfoResponse): unknown {
    const obj: any = {};
    message.redeemInfo !== undefined && (obj.redeemInfo = message.redeemInfo ? RedeemInfo.toJSON(message.redeemInfo) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetRedeemInfoResponse>): QueryGetRedeemInfoResponse {
    const message = createBaseQueryGetRedeemInfoResponse();
    message.redeemInfo = object.redeemInfo !== undefined && object.redeemInfo !== null ? RedeemInfo.fromPartial(object.redeemInfo) : undefined;
    return message;
  }

};

function createBaseQueryAllRedeemInfoRequest(): QueryAllRedeemInfoRequest {
  return {
    pagination: undefined
  };
}

export const QueryAllRedeemInfoRequest = {
  encode(message: QueryAllRedeemInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllRedeemInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllRedeemInfoRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAllRedeemInfoRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAllRedeemInfoRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllRedeemInfoRequest>): QueryAllRedeemInfoRequest {
    const message = createBaseQueryAllRedeemInfoRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryAllRedeemInfoResponse(): QueryAllRedeemInfoResponse {
  return {
    redeemInfo: [],
    pagination: undefined
  };
}

export const QueryAllRedeemInfoResponse = {
  encode(message: QueryAllRedeemInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.redeemInfo) {
      RedeemInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllRedeemInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllRedeemInfoResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.redeemInfo.push(RedeemInfo.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAllRedeemInfoResponse {
    return {
      redeemInfo: Array.isArray(object?.redeemInfo) ? object.redeemInfo.map((e: any) => RedeemInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAllRedeemInfoResponse): unknown {
    const obj: any = {};

    if (message.redeemInfo) {
      obj.redeemInfo = message.redeemInfo.map(e => e ? RedeemInfo.toJSON(e) : undefined);
    } else {
      obj.redeemInfo = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllRedeemInfoResponse>): QueryAllRedeemInfoResponse {
    const message = createBaseQueryAllRedeemInfoResponse();
    message.redeemInfo = object.redeemInfo?.map(e => RedeemInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryGetPaymentInfoRequest(): QueryGetPaymentInfoRequest {
  return {
    purchaseId: ""
  };
}

export const QueryGetPaymentInfoRequest = {
  encode(message: QueryGetPaymentInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.purchaseId !== "") {
      writer.uint32(10).string(message.purchaseId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPaymentInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPaymentInfoRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.purchaseId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetPaymentInfoRequest {
    return {
      purchaseId: isSet(object.purchaseId) ? String(object.purchaseId) : ""
    };
  },

  toJSON(message: QueryGetPaymentInfoRequest): unknown {
    const obj: any = {};
    message.purchaseId !== undefined && (obj.purchaseId = message.purchaseId);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetPaymentInfoRequest>): QueryGetPaymentInfoRequest {
    const message = createBaseQueryGetPaymentInfoRequest();
    message.purchaseId = object.purchaseId ?? "";
    return message;
  }

};

function createBaseQueryGetPaymentInfoResponse(): QueryGetPaymentInfoResponse {
  return {
    paymentInfo: undefined
  };
}

export const QueryGetPaymentInfoResponse = {
  encode(message: QueryGetPaymentInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.paymentInfo !== undefined) {
      PaymentInfo.encode(message.paymentInfo, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPaymentInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPaymentInfoResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.paymentInfo = PaymentInfo.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetPaymentInfoResponse {
    return {
      paymentInfo: isSet(object.paymentInfo) ? PaymentInfo.fromJSON(object.paymentInfo) : undefined
    };
  },

  toJSON(message: QueryGetPaymentInfoResponse): unknown {
    const obj: any = {};
    message.paymentInfo !== undefined && (obj.paymentInfo = message.paymentInfo ? PaymentInfo.toJSON(message.paymentInfo) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetPaymentInfoResponse>): QueryGetPaymentInfoResponse {
    const message = createBaseQueryGetPaymentInfoResponse();
    message.paymentInfo = object.paymentInfo !== undefined && object.paymentInfo !== null ? PaymentInfo.fromPartial(object.paymentInfo) : undefined;
    return message;
  }

};

function createBaseQueryAllPaymentInfoRequest(): QueryAllPaymentInfoRequest {
  return {
    pagination: undefined
  };
}

export const QueryAllPaymentInfoRequest = {
  encode(message: QueryAllPaymentInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPaymentInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPaymentInfoRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAllPaymentInfoRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAllPaymentInfoRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllPaymentInfoRequest>): QueryAllPaymentInfoRequest {
    const message = createBaseQueryAllPaymentInfoRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryAllPaymentInfoResponse(): QueryAllPaymentInfoResponse {
  return {
    paymentInfo: [],
    pagination: undefined
  };
}

export const QueryAllPaymentInfoResponse = {
  encode(message: QueryAllPaymentInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.paymentInfo) {
      PaymentInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPaymentInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPaymentInfoResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.paymentInfo.push(PaymentInfo.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAllPaymentInfoResponse {
    return {
      paymentInfo: Array.isArray(object?.paymentInfo) ? object.paymentInfo.map((e: any) => PaymentInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAllPaymentInfoResponse): unknown {
    const obj: any = {};

    if (message.paymentInfo) {
      obj.paymentInfo = message.paymentInfo.map(e => e ? PaymentInfo.toJSON(e) : undefined);
    } else {
      obj.paymentInfo = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllPaymentInfoResponse>): QueryAllPaymentInfoResponse {
    const message = createBaseQueryAllPaymentInfoResponse();
    message.paymentInfo = object.paymentInfo?.map(e => PaymentInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryGetUsernameByAddressRequest(): QueryGetUsernameByAddressRequest {
  return {
    address: ""
  };
}

export const QueryGetUsernameByAddressRequest = {
  encode(message: QueryGetUsernameByAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetUsernameByAddressRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetUsernameByAddressRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetUsernameByAddressRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },

  toJSON(message: QueryGetUsernameByAddressRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetUsernameByAddressRequest>): QueryGetUsernameByAddressRequest {
    const message = createBaseQueryGetUsernameByAddressRequest();
    message.address = object.address ?? "";
    return message;
  }

};

function createBaseQueryGetAddressByUsernameRequest(): QueryGetAddressByUsernameRequest {
  return {
    username: ""
  };
}

export const QueryGetAddressByUsernameRequest = {
  encode(message: QueryGetAddressByUsernameRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.username !== "") {
      writer.uint32(10).string(message.username);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAddressByUsernameRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAddressByUsernameRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.username = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetAddressByUsernameRequest {
    return {
      username: isSet(object.username) ? String(object.username) : ""
    };
  },

  toJSON(message: QueryGetAddressByUsernameRequest): unknown {
    const obj: any = {};
    message.username !== undefined && (obj.username = message.username);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetAddressByUsernameRequest>): QueryGetAddressByUsernameRequest {
    const message = createBaseQueryGetAddressByUsernameRequest();
    message.username = object.username ?? "";
    return message;
  }

};

function createBaseQueryGetUsernameByAddressResponse(): QueryGetUsernameByAddressResponse {
  return {
    username: undefined
  };
}

export const QueryGetUsernameByAddressResponse = {
  encode(message: QueryGetUsernameByAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.username !== undefined) {
      Username.encode(message.username, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetUsernameByAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetUsernameByAddressResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.username = Username.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetUsernameByAddressResponse {
    return {
      username: isSet(object.username) ? Username.fromJSON(object.username) : undefined
    };
  },

  toJSON(message: QueryGetUsernameByAddressResponse): unknown {
    const obj: any = {};
    message.username !== undefined && (obj.username = message.username ? Username.toJSON(message.username) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetUsernameByAddressResponse>): QueryGetUsernameByAddressResponse {
    const message = createBaseQueryGetUsernameByAddressResponse();
    message.username = object.username !== undefined && object.username !== null ? Username.fromPartial(object.username) : undefined;
    return message;
  }

};

function createBaseQueryGetAddressByUsernameResponse(): QueryGetAddressByUsernameResponse {
  return {
    address: undefined
  };
}

export const QueryGetAddressByUsernameResponse = {
  encode(message: QueryGetAddressByUsernameResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== undefined) {
      AccountAddr.encode(message.address, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAddressByUsernameResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAddressByUsernameResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = AccountAddr.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetAddressByUsernameResponse {
    return {
      address: isSet(object.address) ? AccountAddr.fromJSON(object.address) : undefined
    };
  },

  toJSON(message: QueryGetAddressByUsernameResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address ? AccountAddr.toJSON(message.address) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetAddressByUsernameResponse>): QueryGetAddressByUsernameResponse {
    const message = createBaseQueryGetAddressByUsernameResponse();
    message.address = object.address !== undefined && object.address !== null ? AccountAddr.fromPartial(object.address) : undefined;
    return message;
  }

};

function createBaseQueryGetTradeRequest(): QueryGetTradeRequest {
  return {
    id: Long.UZERO
  };
}

export const QueryGetTradeRequest = {
  encode(message: QueryGetTradeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetTradeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTradeRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetTradeRequest {
    return {
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO
    };
  },

  toJSON(message: QueryGetTradeRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetTradeRequest>): QueryGetTradeRequest {
    const message = createBaseQueryGetTradeRequest();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }

};

function createBaseQueryGetTradeResponse(): QueryGetTradeResponse {
  return {
    trade: undefined
  };
}

export const QueryGetTradeResponse = {
  encode(message: QueryGetTradeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.trade !== undefined) {
      Trade.encode(message.trade, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetTradeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTradeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.trade = Trade.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetTradeResponse {
    return {
      trade: isSet(object.trade) ? Trade.fromJSON(object.trade) : undefined
    };
  },

  toJSON(message: QueryGetTradeResponse): unknown {
    const obj: any = {};
    message.trade !== undefined && (obj.trade = message.trade ? Trade.toJSON(message.trade) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetTradeResponse>): QueryGetTradeResponse {
    const message = createBaseQueryGetTradeResponse();
    message.trade = object.trade !== undefined && object.trade !== null ? Trade.fromPartial(object.trade) : undefined;
    return message;
  }

};

function createBaseQueryListItemByOwnerRequest(): QueryListItemByOwnerRequest {
  return {
    owner: "",
    pagination: undefined
  };
}

export const QueryListItemByOwnerRequest = {
  encode(message: QueryListItemByOwnerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListItemByOwnerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListItemByOwnerRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryListItemByOwnerRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryListItemByOwnerRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryListItemByOwnerRequest>): QueryListItemByOwnerRequest {
    const message = createBaseQueryListItemByOwnerRequest();
    message.owner = object.owner ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryListItemByOwnerResponse(): QueryListItemByOwnerResponse {
  return {
    items: [],
    pagination: undefined
  };
}

export const QueryListItemByOwnerResponse = {
  encode(message: QueryListItemByOwnerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      Item.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListItemByOwnerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListItemByOwnerResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.items.push(Item.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryListItemByOwnerResponse {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => Item.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryListItemByOwnerResponse): unknown {
    const obj: any = {};

    if (message.items) {
      obj.items = message.items.map(e => e ? Item.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryListItemByOwnerResponse>): QueryListItemByOwnerResponse {
    const message = createBaseQueryListItemByOwnerResponse();
    message.items = object.items?.map(e => Item.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryGetGoogleInAppPurchaseOrderRequest(): QueryGetGoogleInAppPurchaseOrderRequest {
  return {
    purchaseToken: ""
  };
}

export const QueryGetGoogleInAppPurchaseOrderRequest = {
  encode(message: QueryGetGoogleInAppPurchaseOrderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.purchaseToken !== "") {
      writer.uint32(10).string(message.purchaseToken);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetGoogleInAppPurchaseOrderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetGoogleInAppPurchaseOrderRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.purchaseToken = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetGoogleInAppPurchaseOrderRequest {
    return {
      purchaseToken: isSet(object.purchaseToken) ? String(object.purchaseToken) : ""
    };
  },

  toJSON(message: QueryGetGoogleInAppPurchaseOrderRequest): unknown {
    const obj: any = {};
    message.purchaseToken !== undefined && (obj.purchaseToken = message.purchaseToken);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetGoogleInAppPurchaseOrderRequest>): QueryGetGoogleInAppPurchaseOrderRequest {
    const message = createBaseQueryGetGoogleInAppPurchaseOrderRequest();
    message.purchaseToken = object.purchaseToken ?? "";
    return message;
  }

};

function createBaseQueryGetGoogleInAppPurchaseOrderResponse(): QueryGetGoogleInAppPurchaseOrderResponse {
  return {
    order: undefined
  };
}

export const QueryGetGoogleInAppPurchaseOrderResponse = {
  encode(message: QueryGetGoogleInAppPurchaseOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.order !== undefined) {
      GoogleInAppPurchaseOrder.encode(message.order, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetGoogleInAppPurchaseOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetGoogleInAppPurchaseOrderResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.order = GoogleInAppPurchaseOrder.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetGoogleInAppPurchaseOrderResponse {
    return {
      order: isSet(object.order) ? GoogleInAppPurchaseOrder.fromJSON(object.order) : undefined
    };
  },

  toJSON(message: QueryGetGoogleInAppPurchaseOrderResponse): unknown {
    const obj: any = {};
    message.order !== undefined && (obj.order = message.order ? GoogleInAppPurchaseOrder.toJSON(message.order) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetGoogleInAppPurchaseOrderResponse>): QueryGetGoogleInAppPurchaseOrderResponse {
    const message = createBaseQueryGetGoogleInAppPurchaseOrderResponse();
    message.order = object.order !== undefined && object.order !== null ? GoogleInAppPurchaseOrder.fromPartial(object.order) : undefined;
    return message;
  }

};

function createBaseQueryListExecutionsByItemRequest(): QueryListExecutionsByItemRequest {
  return {
    cookbookId: "",
    itemId: "",
    pagination: undefined
  };
}

export const QueryListExecutionsByItemRequest = {
  encode(message: QueryListExecutionsByItemRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cookbookId !== "") {
      writer.uint32(10).string(message.cookbookId);
    }

    if (message.itemId !== "") {
      writer.uint32(18).string(message.itemId);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListExecutionsByItemRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListExecutionsByItemRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.cookbookId = reader.string();
          break;

        case 2:
          message.itemId = reader.string();
          break;

        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryListExecutionsByItemRequest {
    return {
      cookbookId: isSet(object.cookbookId) ? String(object.cookbookId) : "",
      itemId: isSet(object.itemId) ? String(object.itemId) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryListExecutionsByItemRequest): unknown {
    const obj: any = {};
    message.cookbookId !== undefined && (obj.cookbookId = message.cookbookId);
    message.itemId !== undefined && (obj.itemId = message.itemId);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryListExecutionsByItemRequest>): QueryListExecutionsByItemRequest {
    const message = createBaseQueryListExecutionsByItemRequest();
    message.cookbookId = object.cookbookId ?? "";
    message.itemId = object.itemId ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryListExecutionsByItemResponse(): QueryListExecutionsByItemResponse {
  return {
    completedExecutions: [],
    pendingExecutions: [],
    pagination: undefined
  };
}

export const QueryListExecutionsByItemResponse = {
  encode(message: QueryListExecutionsByItemResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.completedExecutions) {
      Execution.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.pendingExecutions) {
      Execution.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListExecutionsByItemResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListExecutionsByItemResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.completedExecutions.push(Execution.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pendingExecutions.push(Execution.decode(reader, reader.uint32()));
          break;

        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryListExecutionsByItemResponse {
    return {
      completedExecutions: Array.isArray(object?.completedExecutions) ? object.completedExecutions.map((e: any) => Execution.fromJSON(e)) : [],
      pendingExecutions: Array.isArray(object?.pendingExecutions) ? object.pendingExecutions.map((e: any) => Execution.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryListExecutionsByItemResponse): unknown {
    const obj: any = {};

    if (message.completedExecutions) {
      obj.completedExecutions = message.completedExecutions.map(e => e ? Execution.toJSON(e) : undefined);
    } else {
      obj.completedExecutions = [];
    }

    if (message.pendingExecutions) {
      obj.pendingExecutions = message.pendingExecutions.map(e => e ? Execution.toJSON(e) : undefined);
    } else {
      obj.pendingExecutions = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryListExecutionsByItemResponse>): QueryListExecutionsByItemResponse {
    const message = createBaseQueryListExecutionsByItemResponse();
    message.completedExecutions = object.completedExecutions?.map(e => Execution.fromPartial(e)) || [];
    message.pendingExecutions = object.pendingExecutions?.map(e => Execution.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryListExecutionsByRecipeRequest(): QueryListExecutionsByRecipeRequest {
  return {
    cookbookId: "",
    recipeId: "",
    pagination: undefined
  };
}

export const QueryListExecutionsByRecipeRequest = {
  encode(message: QueryListExecutionsByRecipeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cookbookId !== "") {
      writer.uint32(10).string(message.cookbookId);
    }

    if (message.recipeId !== "") {
      writer.uint32(18).string(message.recipeId);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListExecutionsByRecipeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListExecutionsByRecipeRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.cookbookId = reader.string();
          break;

        case 2:
          message.recipeId = reader.string();
          break;

        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryListExecutionsByRecipeRequest {
    return {
      cookbookId: isSet(object.cookbookId) ? String(object.cookbookId) : "",
      recipeId: isSet(object.recipeId) ? String(object.recipeId) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryListExecutionsByRecipeRequest): unknown {
    const obj: any = {};
    message.cookbookId !== undefined && (obj.cookbookId = message.cookbookId);
    message.recipeId !== undefined && (obj.recipeId = message.recipeId);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryListExecutionsByRecipeRequest>): QueryListExecutionsByRecipeRequest {
    const message = createBaseQueryListExecutionsByRecipeRequest();
    message.cookbookId = object.cookbookId ?? "";
    message.recipeId = object.recipeId ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryListExecutionsByRecipeResponse(): QueryListExecutionsByRecipeResponse {
  return {
    completedExecutions: [],
    pendingExecutions: [],
    pagination: undefined
  };
}

export const QueryListExecutionsByRecipeResponse = {
  encode(message: QueryListExecutionsByRecipeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.completedExecutions) {
      Execution.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.pendingExecutions) {
      Execution.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListExecutionsByRecipeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListExecutionsByRecipeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.completedExecutions.push(Execution.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pendingExecutions.push(Execution.decode(reader, reader.uint32()));
          break;

        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryListExecutionsByRecipeResponse {
    return {
      completedExecutions: Array.isArray(object?.completedExecutions) ? object.completedExecutions.map((e: any) => Execution.fromJSON(e)) : [],
      pendingExecutions: Array.isArray(object?.pendingExecutions) ? object.pendingExecutions.map((e: any) => Execution.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryListExecutionsByRecipeResponse): unknown {
    const obj: any = {};

    if (message.completedExecutions) {
      obj.completedExecutions = message.completedExecutions.map(e => e ? Execution.toJSON(e) : undefined);
    } else {
      obj.completedExecutions = [];
    }

    if (message.pendingExecutions) {
      obj.pendingExecutions = message.pendingExecutions.map(e => e ? Execution.toJSON(e) : undefined);
    } else {
      obj.pendingExecutions = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryListExecutionsByRecipeResponse>): QueryListExecutionsByRecipeResponse {
    const message = createBaseQueryListExecutionsByRecipeResponse();
    message.completedExecutions = object.completedExecutions?.map(e => Execution.fromPartial(e)) || [];
    message.pendingExecutions = object.pendingExecutions?.map(e => Execution.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryGetExecutionRequest(): QueryGetExecutionRequest {
  return {
    id: ""
  };
}

export const QueryGetExecutionRequest = {
  encode(message: QueryGetExecutionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetExecutionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetExecutionRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetExecutionRequest {
    return {
      id: isSet(object.id) ? String(object.id) : ""
    };
  },

  toJSON(message: QueryGetExecutionRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetExecutionRequest>): QueryGetExecutionRequest {
    const message = createBaseQueryGetExecutionRequest();
    message.id = object.id ?? "";
    return message;
  }

};

function createBaseQueryGetExecutionResponse(): QueryGetExecutionResponse {
  return {
    execution: undefined,
    completed: false
  };
}

export const QueryGetExecutionResponse = {
  encode(message: QueryGetExecutionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.execution !== undefined) {
      Execution.encode(message.execution, writer.uint32(10).fork()).ldelim();
    }

    if (message.completed === true) {
      writer.uint32(16).bool(message.completed);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetExecutionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetExecutionResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.execution = Execution.decode(reader, reader.uint32());
          break;

        case 2:
          message.completed = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetExecutionResponse {
    return {
      execution: isSet(object.execution) ? Execution.fromJSON(object.execution) : undefined,
      completed: isSet(object.completed) ? Boolean(object.completed) : false
    };
  },

  toJSON(message: QueryGetExecutionResponse): unknown {
    const obj: any = {};
    message.execution !== undefined && (obj.execution = message.execution ? Execution.toJSON(message.execution) : undefined);
    message.completed !== undefined && (obj.completed = message.completed);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetExecutionResponse>): QueryGetExecutionResponse {
    const message = createBaseQueryGetExecutionResponse();
    message.execution = object.execution !== undefined && object.execution !== null ? Execution.fromPartial(object.execution) : undefined;
    message.completed = object.completed ?? false;
    return message;
  }

};

function createBaseQueryListRecipesByCookbookRequest(): QueryListRecipesByCookbookRequest {
  return {
    cookbookId: "",
    pagination: undefined
  };
}

export const QueryListRecipesByCookbookRequest = {
  encode(message: QueryListRecipesByCookbookRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cookbookId !== "") {
      writer.uint32(10).string(message.cookbookId);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListRecipesByCookbookRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListRecipesByCookbookRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.cookbookId = reader.string();
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryListRecipesByCookbookRequest {
    return {
      cookbookId: isSet(object.cookbookId) ? String(object.cookbookId) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryListRecipesByCookbookRequest): unknown {
    const obj: any = {};
    message.cookbookId !== undefined && (obj.cookbookId = message.cookbookId);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryListRecipesByCookbookRequest>): QueryListRecipesByCookbookRequest {
    const message = createBaseQueryListRecipesByCookbookRequest();
    message.cookbookId = object.cookbookId ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryListRecipesByCookbookResponse(): QueryListRecipesByCookbookResponse {
  return {
    recipes: [],
    pagination: undefined
  };
}

export const QueryListRecipesByCookbookResponse = {
  encode(message: QueryListRecipesByCookbookResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.recipes) {
      Recipe.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListRecipesByCookbookResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListRecipesByCookbookResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.recipes.push(Recipe.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryListRecipesByCookbookResponse {
    return {
      recipes: Array.isArray(object?.recipes) ? object.recipes.map((e: any) => Recipe.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryListRecipesByCookbookResponse): unknown {
    const obj: any = {};

    if (message.recipes) {
      obj.recipes = message.recipes.map(e => e ? Recipe.toJSON(e) : undefined);
    } else {
      obj.recipes = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryListRecipesByCookbookResponse>): QueryListRecipesByCookbookResponse {
    const message = createBaseQueryListRecipesByCookbookResponse();
    message.recipes = object.recipes?.map(e => Recipe.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryGetItemRequest(): QueryGetItemRequest {
  return {
    cookbookId: "",
    id: ""
  };
}

export const QueryGetItemRequest = {
  encode(message: QueryGetItemRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cookbookId !== "") {
      writer.uint32(10).string(message.cookbookId);
    }

    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetItemRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetItemRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.cookbookId = reader.string();
          break;

        case 3:
          message.id = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetItemRequest {
    return {
      cookbookId: isSet(object.cookbookId) ? String(object.cookbookId) : "",
      id: isSet(object.id) ? String(object.id) : ""
    };
  },

  toJSON(message: QueryGetItemRequest): unknown {
    const obj: any = {};
    message.cookbookId !== undefined && (obj.cookbookId = message.cookbookId);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetItemRequest>): QueryGetItemRequest {
    const message = createBaseQueryGetItemRequest();
    message.cookbookId = object.cookbookId ?? "";
    message.id = object.id ?? "";
    return message;
  }

};

function createBaseQueryGetItemResponse(): QueryGetItemResponse {
  return {
    item: undefined
  };
}

export const QueryGetItemResponse = {
  encode(message: QueryGetItemResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.item !== undefined) {
      Item.encode(message.item, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetItemResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetItemResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.item = Item.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetItemResponse {
    return {
      item: isSet(object.item) ? Item.fromJSON(object.item) : undefined
    };
  },

  toJSON(message: QueryGetItemResponse): unknown {
    const obj: any = {};
    message.item !== undefined && (obj.item = message.item ? Item.toJSON(message.item) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetItemResponse>): QueryGetItemResponse {
    const message = createBaseQueryGetItemResponse();
    message.item = object.item !== undefined && object.item !== null ? Item.fromPartial(object.item) : undefined;
    return message;
  }

};

function createBaseQueryGetRecipeRequest(): QueryGetRecipeRequest {
  return {
    cookbookId: "",
    id: ""
  };
}

export const QueryGetRecipeRequest = {
  encode(message: QueryGetRecipeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cookbookId !== "") {
      writer.uint32(10).string(message.cookbookId);
    }

    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetRecipeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetRecipeRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.cookbookId = reader.string();
          break;

        case 2:
          message.id = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetRecipeRequest {
    return {
      cookbookId: isSet(object.cookbookId) ? String(object.cookbookId) : "",
      id: isSet(object.id) ? String(object.id) : ""
    };
  },

  toJSON(message: QueryGetRecipeRequest): unknown {
    const obj: any = {};
    message.cookbookId !== undefined && (obj.cookbookId = message.cookbookId);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetRecipeRequest>): QueryGetRecipeRequest {
    const message = createBaseQueryGetRecipeRequest();
    message.cookbookId = object.cookbookId ?? "";
    message.id = object.id ?? "";
    return message;
  }

};

function createBaseQueryGetRecipeResponse(): QueryGetRecipeResponse {
  return {
    recipe: undefined
  };
}

export const QueryGetRecipeResponse = {
  encode(message: QueryGetRecipeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.recipe !== undefined) {
      Recipe.encode(message.recipe, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetRecipeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetRecipeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.recipe = Recipe.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetRecipeResponse {
    return {
      recipe: isSet(object.recipe) ? Recipe.fromJSON(object.recipe) : undefined
    };
  },

  toJSON(message: QueryGetRecipeResponse): unknown {
    const obj: any = {};
    message.recipe !== undefined && (obj.recipe = message.recipe ? Recipe.toJSON(message.recipe) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetRecipeResponse>): QueryGetRecipeResponse {
    const message = createBaseQueryGetRecipeResponse();
    message.recipe = object.recipe !== undefined && object.recipe !== null ? Recipe.fromPartial(object.recipe) : undefined;
    return message;
  }

};

function createBaseQueryListCookbooksByCreatorRequest(): QueryListCookbooksByCreatorRequest {
  return {
    creator: "",
    pagination: undefined
  };
}

export const QueryListCookbooksByCreatorRequest = {
  encode(message: QueryListCookbooksByCreatorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListCookbooksByCreatorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListCookbooksByCreatorRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryListCookbooksByCreatorRequest {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryListCookbooksByCreatorRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryListCookbooksByCreatorRequest>): QueryListCookbooksByCreatorRequest {
    const message = createBaseQueryListCookbooksByCreatorRequest();
    message.creator = object.creator ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryListCookbooksByCreatorResponse(): QueryListCookbooksByCreatorResponse {
  return {
    cookbooks: [],
    pagination: undefined
  };
}

export const QueryListCookbooksByCreatorResponse = {
  encode(message: QueryListCookbooksByCreatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.cookbooks) {
      Cookbook.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListCookbooksByCreatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListCookbooksByCreatorResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.cookbooks.push(Cookbook.decode(reader, reader.uint32()));
          break;

        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryListCookbooksByCreatorResponse {
    return {
      cookbooks: Array.isArray(object?.cookbooks) ? object.cookbooks.map((e: any) => Cookbook.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryListCookbooksByCreatorResponse): unknown {
    const obj: any = {};

    if (message.cookbooks) {
      obj.cookbooks = message.cookbooks.map(e => e ? Cookbook.toJSON(e) : undefined);
    } else {
      obj.cookbooks = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryListCookbooksByCreatorResponse>): QueryListCookbooksByCreatorResponse {
    const message = createBaseQueryListCookbooksByCreatorResponse();
    message.cookbooks = object.cookbooks?.map(e => Cookbook.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryGetCookbookRequest(): QueryGetCookbookRequest {
  return {
    id: ""
  };
}

export const QueryGetCookbookRequest = {
  encode(message: QueryGetCookbookRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCookbookRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetCookbookRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetCookbookRequest {
    return {
      id: isSet(object.id) ? String(object.id) : ""
    };
  },

  toJSON(message: QueryGetCookbookRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetCookbookRequest>): QueryGetCookbookRequest {
    const message = createBaseQueryGetCookbookRequest();
    message.id = object.id ?? "";
    return message;
  }

};

function createBaseQueryGetCookbookResponse(): QueryGetCookbookResponse {
  return {
    cookbook: undefined
  };
}

export const QueryGetCookbookResponse = {
  encode(message: QueryGetCookbookResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cookbook !== undefined) {
      Cookbook.encode(message.cookbook, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCookbookResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetCookbookResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.cookbook = Cookbook.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetCookbookResponse {
    return {
      cookbook: isSet(object.cookbook) ? Cookbook.fromJSON(object.cookbook) : undefined
    };
  },

  toJSON(message: QueryGetCookbookResponse): unknown {
    const obj: any = {};
    message.cookbook !== undefined && (obj.cookbook = message.cookbook ? Cookbook.toJSON(message.cookbook) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetCookbookResponse>): QueryGetCookbookResponse {
    const message = createBaseQueryGetCookbookResponse();
    message.cookbook = object.cookbook !== undefined && object.cookbook !== null ? Cookbook.fromPartial(object.cookbook) : undefined;
    return message;
  }

};