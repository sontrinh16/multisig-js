import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { AllowedDenom } from "./state";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, DeepPartial, fromJsonTimestamp, fromTimestamp } from "@osmonauts/helpers";

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

function createBaseQuerySellOrderRequest(): QuerySellOrderRequest {
  return {
    sellOrderId: Long.UZERO
  };
}

export const QuerySellOrderRequest = {
  encode(message: QuerySellOrderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.sellOrderId.isZero()) {
      writer.uint32(8).uint64(message.sellOrderId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySellOrderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySellOrderRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sellOrderId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QuerySellOrderRequest {
    return {
      sellOrderId: isSet(object.sellOrderId) ? Long.fromString(object.sellOrderId) : Long.UZERO
    };
  },

  toJSON(message: QuerySellOrderRequest): unknown {
    const obj: any = {};
    message.sellOrderId !== undefined && (obj.sellOrderId = (message.sellOrderId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<QuerySellOrderRequest>): QuerySellOrderRequest {
    const message = createBaseQuerySellOrderRequest();
    message.sellOrderId = object.sellOrderId !== undefined && object.sellOrderId !== null ? Long.fromValue(object.sellOrderId) : Long.UZERO;
    return message;
  }

};

function createBaseQuerySellOrderResponse(): QuerySellOrderResponse {
  return {
    sellOrder: undefined
  };
}

export const QuerySellOrderResponse = {
  encode(message: QuerySellOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sellOrder !== undefined) {
      SellOrderInfo.encode(message.sellOrder, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySellOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySellOrderResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sellOrder = SellOrderInfo.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QuerySellOrderResponse {
    return {
      sellOrder: isSet(object.sellOrder) ? SellOrderInfo.fromJSON(object.sellOrder) : undefined
    };
  },

  toJSON(message: QuerySellOrderResponse): unknown {
    const obj: any = {};
    message.sellOrder !== undefined && (obj.sellOrder = message.sellOrder ? SellOrderInfo.toJSON(message.sellOrder) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QuerySellOrderResponse>): QuerySellOrderResponse {
    const message = createBaseQuerySellOrderResponse();
    message.sellOrder = object.sellOrder !== undefined && object.sellOrder !== null ? SellOrderInfo.fromPartial(object.sellOrder) : undefined;
    return message;
  }

};

function createBaseQuerySellOrdersRequest(): QuerySellOrdersRequest {
  return {
    pagination: undefined
  };
}

export const QuerySellOrdersRequest = {
  encode(message: QuerySellOrdersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySellOrdersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySellOrdersRequest();

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

  fromJSON(object: any): QuerySellOrdersRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QuerySellOrdersRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QuerySellOrdersRequest>): QuerySellOrdersRequest {
    const message = createBaseQuerySellOrdersRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQuerySellOrdersResponse(): QuerySellOrdersResponse {
  return {
    sellOrders: [],
    pagination: undefined
  };
}

export const QuerySellOrdersResponse = {
  encode(message: QuerySellOrdersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.sellOrders) {
      SellOrderInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySellOrdersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySellOrdersResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sellOrders.push(SellOrderInfo.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QuerySellOrdersResponse {
    return {
      sellOrders: Array.isArray(object?.sellOrders) ? object.sellOrders.map((e: any) => SellOrderInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QuerySellOrdersResponse): unknown {
    const obj: any = {};

    if (message.sellOrders) {
      obj.sellOrders = message.sellOrders.map(e => e ? SellOrderInfo.toJSON(e) : undefined);
    } else {
      obj.sellOrders = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QuerySellOrdersResponse>): QuerySellOrdersResponse {
    const message = createBaseQuerySellOrdersResponse();
    message.sellOrders = object.sellOrders?.map(e => SellOrderInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQuerySellOrdersByBatchDenomRequest(): QuerySellOrdersByBatchDenomRequest {
  return {
    batchDenom: "",
    pagination: undefined
  };
}

export const QuerySellOrdersByBatchDenomRequest = {
  encode(message: QuerySellOrdersByBatchDenomRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.batchDenom !== "") {
      writer.uint32(10).string(message.batchDenom);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySellOrdersByBatchDenomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySellOrdersByBatchDenomRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.batchDenom = reader.string();
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

  fromJSON(object: any): QuerySellOrdersByBatchDenomRequest {
    return {
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QuerySellOrdersByBatchDenomRequest): unknown {
    const obj: any = {};
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QuerySellOrdersByBatchDenomRequest>): QuerySellOrdersByBatchDenomRequest {
    const message = createBaseQuerySellOrdersByBatchDenomRequest();
    message.batchDenom = object.batchDenom ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQuerySellOrdersByBatchDenomResponse(): QuerySellOrdersByBatchDenomResponse {
  return {
    sellOrders: [],
    pagination: undefined
  };
}

export const QuerySellOrdersByBatchDenomResponse = {
  encode(message: QuerySellOrdersByBatchDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.sellOrders) {
      SellOrderInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySellOrdersByBatchDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySellOrdersByBatchDenomResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sellOrders.push(SellOrderInfo.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QuerySellOrdersByBatchDenomResponse {
    return {
      sellOrders: Array.isArray(object?.sellOrders) ? object.sellOrders.map((e: any) => SellOrderInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QuerySellOrdersByBatchDenomResponse): unknown {
    const obj: any = {};

    if (message.sellOrders) {
      obj.sellOrders = message.sellOrders.map(e => e ? SellOrderInfo.toJSON(e) : undefined);
    } else {
      obj.sellOrders = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QuerySellOrdersByBatchDenomResponse>): QuerySellOrdersByBatchDenomResponse {
    const message = createBaseQuerySellOrdersByBatchDenomResponse();
    message.sellOrders = object.sellOrders?.map(e => SellOrderInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQuerySellOrdersByAddressRequest(): QuerySellOrdersByAddressRequest {
  return {
    address: "",
    pagination: undefined
  };
}

export const QuerySellOrdersByAddressRequest = {
  encode(message: QuerySellOrdersByAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySellOrdersByAddressRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySellOrdersByAddressRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
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

  fromJSON(object: any): QuerySellOrdersByAddressRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QuerySellOrdersByAddressRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QuerySellOrdersByAddressRequest>): QuerySellOrdersByAddressRequest {
    const message = createBaseQuerySellOrdersByAddressRequest();
    message.address = object.address ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQuerySellOrdersByAddressResponse(): QuerySellOrdersByAddressResponse {
  return {
    sellOrders: [],
    pagination: undefined
  };
}

export const QuerySellOrdersByAddressResponse = {
  encode(message: QuerySellOrdersByAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.sellOrders) {
      SellOrderInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySellOrdersByAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySellOrdersByAddressResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sellOrders.push(SellOrderInfo.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QuerySellOrdersByAddressResponse {
    return {
      sellOrders: Array.isArray(object?.sellOrders) ? object.sellOrders.map((e: any) => SellOrderInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QuerySellOrdersByAddressResponse): unknown {
    const obj: any = {};

    if (message.sellOrders) {
      obj.sellOrders = message.sellOrders.map(e => e ? SellOrderInfo.toJSON(e) : undefined);
    } else {
      obj.sellOrders = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QuerySellOrdersByAddressResponse>): QuerySellOrdersByAddressResponse {
    const message = createBaseQuerySellOrdersByAddressResponse();
    message.sellOrders = object.sellOrders?.map(e => SellOrderInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryAllowedDenomsRequest(): QueryAllowedDenomsRequest {
  return {
    pagination: undefined
  };
}

export const QueryAllowedDenomsRequest = {
  encode(message: QueryAllowedDenomsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowedDenomsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllowedDenomsRequest();

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

  fromJSON(object: any): QueryAllowedDenomsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAllowedDenomsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllowedDenomsRequest>): QueryAllowedDenomsRequest {
    const message = createBaseQueryAllowedDenomsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryAllowedDenomsResponse(): QueryAllowedDenomsResponse {
  return {
    allowedDenoms: [],
    pagination: undefined
  };
}

export const QueryAllowedDenomsResponse = {
  encode(message: QueryAllowedDenomsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.allowedDenoms) {
      AllowedDenom.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowedDenomsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllowedDenomsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.allowedDenoms.push(AllowedDenom.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllowedDenomsResponse {
    return {
      allowedDenoms: Array.isArray(object?.allowedDenoms) ? object.allowedDenoms.map((e: any) => AllowedDenom.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAllowedDenomsResponse): unknown {
    const obj: any = {};

    if (message.allowedDenoms) {
      obj.allowedDenoms = message.allowedDenoms.map(e => e ? AllowedDenom.toJSON(e) : undefined);
    } else {
      obj.allowedDenoms = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllowedDenomsResponse>): QueryAllowedDenomsResponse {
    const message = createBaseQueryAllowedDenomsResponse();
    message.allowedDenoms = object.allowedDenoms?.map(e => AllowedDenom.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseSellOrderInfo(): SellOrderInfo {
  return {
    id: Long.UZERO,
    seller: "",
    batchDenom: "",
    quantity: "",
    askDenom: "",
    askPrice: "",
    disableAutoRetire: false,
    expiration: undefined
  };
}

export const SellOrderInfo = {
  encode(message: SellOrderInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (message.seller !== "") {
      writer.uint32(18).string(message.seller);
    }

    if (message.batchDenom !== "") {
      writer.uint32(26).string(message.batchDenom);
    }

    if (message.quantity !== "") {
      writer.uint32(34).string(message.quantity);
    }

    if (message.askDenom !== "") {
      writer.uint32(42).string(message.askDenom);
    }

    if (message.askPrice !== "") {
      writer.uint32(50).string(message.askPrice);
    }

    if (message.disableAutoRetire === true) {
      writer.uint32(56).bool(message.disableAutoRetire);
    }

    if (message.expiration !== undefined) {
      Timestamp.encode(message.expiration, writer.uint32(74).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SellOrderInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSellOrderInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.seller = reader.string();
          break;

        case 3:
          message.batchDenom = reader.string();
          break;

        case 4:
          message.quantity = reader.string();
          break;

        case 5:
          message.askDenom = reader.string();
          break;

        case 6:
          message.askPrice = reader.string();
          break;

        case 7:
          message.disableAutoRetire = reader.bool();
          break;

        case 9:
          message.expiration = Timestamp.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SellOrderInfo {
    return {
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
      seller: isSet(object.seller) ? String(object.seller) : "",
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : "",
      quantity: isSet(object.quantity) ? String(object.quantity) : "",
      askDenom: isSet(object.askDenom) ? String(object.askDenom) : "",
      askPrice: isSet(object.askPrice) ? String(object.askPrice) : "",
      disableAutoRetire: isSet(object.disableAutoRetire) ? Boolean(object.disableAutoRetire) : false,
      expiration: isSet(object.expiration) ? fromJsonTimestamp(object.expiration) : undefined
    };
  },

  toJSON(message: SellOrderInfo): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.seller !== undefined && (obj.seller = message.seller);
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    message.quantity !== undefined && (obj.quantity = message.quantity);
    message.askDenom !== undefined && (obj.askDenom = message.askDenom);
    message.askPrice !== undefined && (obj.askPrice = message.askPrice);
    message.disableAutoRetire !== undefined && (obj.disableAutoRetire = message.disableAutoRetire);
    message.expiration !== undefined && (obj.expiration = fromTimestamp(message.expiration).toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<SellOrderInfo>): SellOrderInfo {
    const message = createBaseSellOrderInfo();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.seller = object.seller ?? "";
    message.batchDenom = object.batchDenom ?? "";
    message.quantity = object.quantity ?? "";
    message.askDenom = object.askDenom ?? "";
    message.askPrice = object.askPrice ?? "";
    message.disableAutoRetire = object.disableAutoRetire ?? false;
    message.expiration = object.expiration !== undefined && object.expiration !== null ? Timestamp.fromPartial(object.expiration) : undefined;
    return message;
  }

};