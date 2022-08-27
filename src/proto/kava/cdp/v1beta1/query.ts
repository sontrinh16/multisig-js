import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./genesis";
import { ModuleAccount } from "../../../cosmos/auth/v1beta1/auth";
import { Deposit, TotalPrincipal, TotalCollateral } from "./cdp";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, isSet, Long, toTimestamp, fromTimestamp, fromJsonTimestamp } from "@osmonauts/helpers";

/** QueryParamsRequest defines the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse defines the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  params: Params;
}

/** QueryAccountsRequest defines the request type for the Query/Accounts RPC method. */
export interface QueryAccountsRequest {}

/** QueryAccountsResponse defines the response type for the Query/Accounts RPC method. */
export interface QueryAccountsResponse {
  accounts: ModuleAccount[];
}

/** QueryCdpRequest defines the request type for the Query/Cdp RPC method. */
export interface QueryCdpRequest {
  collateralType: string;
  owner: string;
}

/** QueryCdpResponse defines the response type for the Query/Cdp RPC method. */
export interface QueryCdpResponse {
  cdp: CDPResponse;
}

/** QueryCdpsRequest is the params for a filtered CDP query, the request type for the Query/Cdps RPC method. */
export interface QueryCdpsRequest {
  collateralType: string;
  owner: string;
  id: Long;

  /** sdk.Dec as a string */
  ratio: string;
  pagination: PageRequest;
}

/** QueryCdpsResponse defines the response type for the Query/Cdps RPC method. */
export interface QueryCdpsResponse {
  cdps: CDPResponse[];
  pagination: PageResponse;
}

/** QueryDepositsRequest defines the request type for the Query/Deposits RPC method. */
export interface QueryDepositsRequest {
  collateralType: string;
  owner: string;
}

/** QueryDepositsResponse defines the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponse {
  deposits: Deposit[];
}

/** QueryTotalPrincipalRequest defines the request type for the Query/TotalPrincipal RPC method. */
export interface QueryTotalPrincipalRequest {
  collateralType: string;
}

/** QueryTotalPrincipalResponse defines the response type for the Query/TotalPrincipal RPC method. */
export interface QueryTotalPrincipalResponse {
  totalPrincipal: TotalPrincipal[];
}

/** QueryTotalCollateralRequest defines the request type for the Query/TotalCollateral RPC method. */
export interface QueryTotalCollateralRequest {
  collateralType: string;
}

/** QueryTotalCollateralResponse defines the response type for the Query/TotalCollateral RPC method. */
export interface QueryTotalCollateralResponse {
  totalCollateral: TotalCollateral[];
}

/** CDPResponse defines the state of a single collateralized debt position. */
export interface CDPResponse {
  id: Long;
  owner: string;
  type: string;
  collateral: Coin;
  principal: Coin;
  accumulatedFees: Coin;
  feesUpdated: Date;
  interestFactor: string;
  collateralValue: Coin;
  collateralizationRatio: string;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();

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

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }

};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }

};

function createBaseQueryAccountsRequest(): QueryAccountsRequest {
  return {};
}

export const QueryAccountsRequest = {
  encode(_: QueryAccountsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountsRequest();

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

  fromJSON(_: any): QueryAccountsRequest {
    return {};
  },

  toJSON(_: QueryAccountsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryAccountsRequest>): QueryAccountsRequest {
    const message = createBaseQueryAccountsRequest();
    return message;
  }

};

function createBaseQueryAccountsResponse(): QueryAccountsResponse {
  return {
    accounts: []
  };
}

export const QueryAccountsResponse = {
  encode(message: QueryAccountsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accounts) {
      ModuleAccount.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.accounts.push(ModuleAccount.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAccountsResponse {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => ModuleAccount.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryAccountsResponse): unknown {
    const obj: any = {};

    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e ? ModuleAccount.toJSON(e) : undefined);
    } else {
      obj.accounts = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<QueryAccountsResponse>): QueryAccountsResponse {
    const message = createBaseQueryAccountsResponse();
    message.accounts = object.accounts?.map(e => ModuleAccount.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryCdpRequest(): QueryCdpRequest {
  return {
    collateralType: "",
    owner: ""
  };
}

export const QueryCdpRequest = {
  encode(message: QueryCdpRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collateralType !== "") {
      writer.uint32(10).string(message.collateralType);
    }

    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCdpRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCdpRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.collateralType = reader.string();
          break;

        case 2:
          message.owner = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryCdpRequest {
    return {
      collateralType: isSet(object.collateralType) ? String(object.collateralType) : "",
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },

  toJSON(message: QueryCdpRequest): unknown {
    const obj: any = {};
    message.collateralType !== undefined && (obj.collateralType = message.collateralType);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryCdpRequest>): QueryCdpRequest {
    const message = createBaseQueryCdpRequest();
    message.collateralType = object.collateralType ?? "";
    message.owner = object.owner ?? "";
    return message;
  }

};

function createBaseQueryCdpResponse(): QueryCdpResponse {
  return {
    cdp: undefined
  };
}

export const QueryCdpResponse = {
  encode(message: QueryCdpResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cdp !== undefined) {
      CDPResponse.encode(message.cdp, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCdpResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCdpResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.cdp = CDPResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryCdpResponse {
    return {
      cdp: isSet(object.cdp) ? CDPResponse.fromJSON(object.cdp) : undefined
    };
  },

  toJSON(message: QueryCdpResponse): unknown {
    const obj: any = {};
    message.cdp !== undefined && (obj.cdp = message.cdp ? CDPResponse.toJSON(message.cdp) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryCdpResponse>): QueryCdpResponse {
    const message = createBaseQueryCdpResponse();
    message.cdp = object.cdp !== undefined && object.cdp !== null ? CDPResponse.fromPartial(object.cdp) : undefined;
    return message;
  }

};

function createBaseQueryCdpsRequest(): QueryCdpsRequest {
  return {
    collateralType: "",
    owner: "",
    id: Long.UZERO,
    ratio: "",
    pagination: undefined
  };
}

export const QueryCdpsRequest = {
  encode(message: QueryCdpsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collateralType !== "") {
      writer.uint32(10).string(message.collateralType);
    }

    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }

    if (!message.id.isZero()) {
      writer.uint32(24).uint64(message.id);
    }

    if (message.ratio !== "") {
      writer.uint32(34).string(message.ratio);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCdpsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCdpsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.collateralType = reader.string();
          break;

        case 2:
          message.owner = reader.string();
          break;

        case 3:
          message.id = (reader.uint64() as Long);
          break;

        case 4:
          message.ratio = reader.string();
          break;

        case 5:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryCdpsRequest {
    return {
      collateralType: isSet(object.collateralType) ? String(object.collateralType) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
      ratio: isSet(object.ratio) ? String(object.ratio) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryCdpsRequest): unknown {
    const obj: any = {};
    message.collateralType !== undefined && (obj.collateralType = message.collateralType);
    message.owner !== undefined && (obj.owner = message.owner);
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.ratio !== undefined && (obj.ratio = message.ratio);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryCdpsRequest>): QueryCdpsRequest {
    const message = createBaseQueryCdpsRequest();
    message.collateralType = object.collateralType ?? "";
    message.owner = object.owner ?? "";
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.ratio = object.ratio ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryCdpsResponse(): QueryCdpsResponse {
  return {
    cdps: [],
    pagination: undefined
  };
}

export const QueryCdpsResponse = {
  encode(message: QueryCdpsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.cdps) {
      CDPResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCdpsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCdpsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.cdps.push(CDPResponse.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryCdpsResponse {
    return {
      cdps: Array.isArray(object?.cdps) ? object.cdps.map((e: any) => CDPResponse.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryCdpsResponse): unknown {
    const obj: any = {};

    if (message.cdps) {
      obj.cdps = message.cdps.map(e => e ? CDPResponse.toJSON(e) : undefined);
    } else {
      obj.cdps = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryCdpsResponse>): QueryCdpsResponse {
    const message = createBaseQueryCdpsResponse();
    message.cdps = object.cdps?.map(e => CDPResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryDepositsRequest(): QueryDepositsRequest {
  return {
    collateralType: "",
    owner: ""
  };
}

export const QueryDepositsRequest = {
  encode(message: QueryDepositsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collateralType !== "") {
      writer.uint32(10).string(message.collateralType);
    }

    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.collateralType = reader.string();
          break;

        case 2:
          message.owner = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryDepositsRequest {
    return {
      collateralType: isSet(object.collateralType) ? String(object.collateralType) : "",
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },

  toJSON(message: QueryDepositsRequest): unknown {
    const obj: any = {};
    message.collateralType !== undefined && (obj.collateralType = message.collateralType);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDepositsRequest>): QueryDepositsRequest {
    const message = createBaseQueryDepositsRequest();
    message.collateralType = object.collateralType ?? "";
    message.owner = object.owner ?? "";
    return message;
  }

};

function createBaseQueryDepositsResponse(): QueryDepositsResponse {
  return {
    deposits: []
  };
}

export const QueryDepositsResponse = {
  encode(message: QueryDepositsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.deposits) {
      Deposit.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.deposits.push(Deposit.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryDepositsResponse {
    return {
      deposits: Array.isArray(object?.deposits) ? object.deposits.map((e: any) => Deposit.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryDepositsResponse): unknown {
    const obj: any = {};

    if (message.deposits) {
      obj.deposits = message.deposits.map(e => e ? Deposit.toJSON(e) : undefined);
    } else {
      obj.deposits = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<QueryDepositsResponse>): QueryDepositsResponse {
    const message = createBaseQueryDepositsResponse();
    message.deposits = object.deposits?.map(e => Deposit.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryTotalPrincipalRequest(): QueryTotalPrincipalRequest {
  return {
    collateralType: ""
  };
}

export const QueryTotalPrincipalRequest = {
  encode(message: QueryTotalPrincipalRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collateralType !== "") {
      writer.uint32(10).string(message.collateralType);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalPrincipalRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalPrincipalRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.collateralType = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryTotalPrincipalRequest {
    return {
      collateralType: isSet(object.collateralType) ? String(object.collateralType) : ""
    };
  },

  toJSON(message: QueryTotalPrincipalRequest): unknown {
    const obj: any = {};
    message.collateralType !== undefined && (obj.collateralType = message.collateralType);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryTotalPrincipalRequest>): QueryTotalPrincipalRequest {
    const message = createBaseQueryTotalPrincipalRequest();
    message.collateralType = object.collateralType ?? "";
    return message;
  }

};

function createBaseQueryTotalPrincipalResponse(): QueryTotalPrincipalResponse {
  return {
    totalPrincipal: []
  };
}

export const QueryTotalPrincipalResponse = {
  encode(message: QueryTotalPrincipalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.totalPrincipal) {
      TotalPrincipal.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalPrincipalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalPrincipalResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.totalPrincipal.push(TotalPrincipal.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryTotalPrincipalResponse {
    return {
      totalPrincipal: Array.isArray(object?.totalPrincipal) ? object.totalPrincipal.map((e: any) => TotalPrincipal.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryTotalPrincipalResponse): unknown {
    const obj: any = {};

    if (message.totalPrincipal) {
      obj.totalPrincipal = message.totalPrincipal.map(e => e ? TotalPrincipal.toJSON(e) : undefined);
    } else {
      obj.totalPrincipal = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<QueryTotalPrincipalResponse>): QueryTotalPrincipalResponse {
    const message = createBaseQueryTotalPrincipalResponse();
    message.totalPrincipal = object.totalPrincipal?.map(e => TotalPrincipal.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryTotalCollateralRequest(): QueryTotalCollateralRequest {
  return {
    collateralType: ""
  };
}

export const QueryTotalCollateralRequest = {
  encode(message: QueryTotalCollateralRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collateralType !== "") {
      writer.uint32(10).string(message.collateralType);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalCollateralRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalCollateralRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.collateralType = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryTotalCollateralRequest {
    return {
      collateralType: isSet(object.collateralType) ? String(object.collateralType) : ""
    };
  },

  toJSON(message: QueryTotalCollateralRequest): unknown {
    const obj: any = {};
    message.collateralType !== undefined && (obj.collateralType = message.collateralType);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryTotalCollateralRequest>): QueryTotalCollateralRequest {
    const message = createBaseQueryTotalCollateralRequest();
    message.collateralType = object.collateralType ?? "";
    return message;
  }

};

function createBaseQueryTotalCollateralResponse(): QueryTotalCollateralResponse {
  return {
    totalCollateral: []
  };
}

export const QueryTotalCollateralResponse = {
  encode(message: QueryTotalCollateralResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.totalCollateral) {
      TotalCollateral.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalCollateralResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalCollateralResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.totalCollateral.push(TotalCollateral.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryTotalCollateralResponse {
    return {
      totalCollateral: Array.isArray(object?.totalCollateral) ? object.totalCollateral.map((e: any) => TotalCollateral.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryTotalCollateralResponse): unknown {
    const obj: any = {};

    if (message.totalCollateral) {
      obj.totalCollateral = message.totalCollateral.map(e => e ? TotalCollateral.toJSON(e) : undefined);
    } else {
      obj.totalCollateral = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<QueryTotalCollateralResponse>): QueryTotalCollateralResponse {
    const message = createBaseQueryTotalCollateralResponse();
    message.totalCollateral = object.totalCollateral?.map(e => TotalCollateral.fromPartial(e)) || [];
    return message;
  }

};

function createBaseCDPResponse(): CDPResponse {
  return {
    id: Long.UZERO,
    owner: "",
    type: "",
    collateral: undefined,
    principal: undefined,
    accumulatedFees: undefined,
    feesUpdated: undefined,
    interestFactor: "",
    collateralValue: undefined,
    collateralizationRatio: ""
  };
}

export const CDPResponse = {
  encode(message: CDPResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }

    if (message.type !== "") {
      writer.uint32(26).string(message.type);
    }

    if (message.collateral !== undefined) {
      Coin.encode(message.collateral, writer.uint32(34).fork()).ldelim();
    }

    if (message.principal !== undefined) {
      Coin.encode(message.principal, writer.uint32(42).fork()).ldelim();
    }

    if (message.accumulatedFees !== undefined) {
      Coin.encode(message.accumulatedFees, writer.uint32(50).fork()).ldelim();
    }

    if (message.feesUpdated !== undefined) {
      Timestamp.encode(toTimestamp(message.feesUpdated), writer.uint32(58).fork()).ldelim();
    }

    if (message.interestFactor !== "") {
      writer.uint32(66).string(message.interestFactor);
    }

    if (message.collateralValue !== undefined) {
      Coin.encode(message.collateralValue, writer.uint32(74).fork()).ldelim();
    }

    if (message.collateralizationRatio !== "") {
      writer.uint32(82).string(message.collateralizationRatio);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDPResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDPResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.owner = reader.string();
          break;

        case 3:
          message.type = reader.string();
          break;

        case 4:
          message.collateral = Coin.decode(reader, reader.uint32());
          break;

        case 5:
          message.principal = Coin.decode(reader, reader.uint32());
          break;

        case 6:
          message.accumulatedFees = Coin.decode(reader, reader.uint32());
          break;

        case 7:
          message.feesUpdated = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 8:
          message.interestFactor = reader.string();
          break;

        case 9:
          message.collateralValue = Coin.decode(reader, reader.uint32());
          break;

        case 10:
          message.collateralizationRatio = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CDPResponse {
    return {
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
      owner: isSet(object.owner) ? String(object.owner) : "",
      type: isSet(object.type) ? String(object.type) : "",
      collateral: isSet(object.collateral) ? Coin.fromJSON(object.collateral) : undefined,
      principal: isSet(object.principal) ? Coin.fromJSON(object.principal) : undefined,
      accumulatedFees: isSet(object.accumulatedFees) ? Coin.fromJSON(object.accumulatedFees) : undefined,
      feesUpdated: isSet(object.feesUpdated) ? fromJsonTimestamp(object.feesUpdated) : undefined,
      interestFactor: isSet(object.interestFactor) ? String(object.interestFactor) : "",
      collateralValue: isSet(object.collateralValue) ? Coin.fromJSON(object.collateralValue) : undefined,
      collateralizationRatio: isSet(object.collateralizationRatio) ? String(object.collateralizationRatio) : ""
    };
  },

  toJSON(message: CDPResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    message.type !== undefined && (obj.type = message.type);
    message.collateral !== undefined && (obj.collateral = message.collateral ? Coin.toJSON(message.collateral) : undefined);
    message.principal !== undefined && (obj.principal = message.principal ? Coin.toJSON(message.principal) : undefined);
    message.accumulatedFees !== undefined && (obj.accumulatedFees = message.accumulatedFees ? Coin.toJSON(message.accumulatedFees) : undefined);
    message.feesUpdated !== undefined && (obj.feesUpdated = message.feesUpdated.toISOString());
    message.interestFactor !== undefined && (obj.interestFactor = message.interestFactor);
    message.collateralValue !== undefined && (obj.collateralValue = message.collateralValue ? Coin.toJSON(message.collateralValue) : undefined);
    message.collateralizationRatio !== undefined && (obj.collateralizationRatio = message.collateralizationRatio);
    return obj;
  },

  fromPartial(object: DeepPartial<CDPResponse>): CDPResponse {
    const message = createBaseCDPResponse();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.owner = object.owner ?? "";
    message.type = object.type ?? "";
    message.collateral = object.collateral !== undefined && object.collateral !== null ? Coin.fromPartial(object.collateral) : undefined;
    message.principal = object.principal !== undefined && object.principal !== null ? Coin.fromPartial(object.principal) : undefined;
    message.accumulatedFees = object.accumulatedFees !== undefined && object.accumulatedFees !== null ? Coin.fromPartial(object.accumulatedFees) : undefined;
    message.feesUpdated = object.feesUpdated ?? undefined;
    message.interestFactor = object.interestFactor ?? "";
    message.collateralValue = object.collateralValue !== undefined && object.collateralValue !== null ? Coin.fromPartial(object.collateralValue) : undefined;
    message.collateralizationRatio = object.collateralizationRatio ?? "";
    return message;
  }

};