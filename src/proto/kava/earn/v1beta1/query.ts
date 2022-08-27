import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { StrategyType, strategyTypeFromJSON, strategyTypeToJSON } from "./strategy";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, isSet } from "@osmonauts/helpers";

/** QueryParamsRequest defines the request type for querying x/earn parameters. */
export interface QueryParamsRequest {}

/** QueryParamsResponse defines the response type for querying x/earn parameters. */
export interface QueryParamsResponse {
  /** params represents the earn module parameters */
  params: Params;
}

/** QueryVaultsRequest is the request type for the Query/Vault RPC method. */
export interface QueryVaultsRequest {
  /** vault filters vault by denom */
  denom: string;
}

/** QueryVaultsResponse is the response type for the Query/Vaults RPC method. */
export interface QueryVaultsResponse {
  /** vaults represents the earn module vaults */
  vaults: VaultResponse[];
}

/** VaultResponse is the response type for a vault. */
export interface VaultResponse {
  /** denom represents the denom of the vault */
  denom: string;

  /** VaultStrategy is the strategy used for this vault. */
  vaultStrategy: StrategyType;

  /** TotalSupplied is the total amount of denom coins supplied to the vault. */
  totalSupplied: string;

  /**
   * TotalValue is the total value of denom coins supplied to the vault if the
   * vault were to be liquidated.
   */
  totalValue: string;
}

/** QueryDepositsRequest is the request type for the Query/Deposits RPC method. */
export interface QueryDepositsRequest {
  /** owner optionally filters deposits by owner */
  owner: string;

  /** denom optionally filters deposits by vault denom */
  denom: string;

  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
}

/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponse {
  /** deposits returns the deposits matching the requested parameters */
  deposits: DepositResponse[];

  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}

/** DepositResponse defines a deposit query response type. */
export interface DepositResponse {
  /** depositor represents the owner of the deposit. */
  depositor: string;

  /** Amount represents the amount supplied to vaults. */
  amountSupplied: Coin[];

  /**
   * Value represents the total accumulated value of denom coins supplied to
   * vaults. This may be greater than or equal to amount_supplied depending on
   * the strategy.
   */
  value: Coin[];
}

/** QueryTotalDepositedRequest is the request type for the Query/TotalDeposited RPC method. */
export interface QueryTotalDepositedRequest {
  /** denom represents the vault denom to query total deposited amount for. */
  denom: string;
}

/** QueryTotalDepositedResponse is the response type for the Query/TotalDeposited RPC method. */
export interface QueryTotalDepositedResponse {
  suppliedCoins: Coin[];
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

function createBaseQueryVaultsRequest(): QueryVaultsRequest {
  return {
    denom: ""
  };
}

export const QueryVaultsRequest = {
  encode(message: QueryVaultsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVaultsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVaultsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryVaultsRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },

  toJSON(message: QueryVaultsRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryVaultsRequest>): QueryVaultsRequest {
    const message = createBaseQueryVaultsRequest();
    message.denom = object.denom ?? "";
    return message;
  }

};

function createBaseQueryVaultsResponse(): QueryVaultsResponse {
  return {
    vaults: []
  };
}

export const QueryVaultsResponse = {
  encode(message: QueryVaultsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.vaults) {
      VaultResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVaultsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVaultsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.vaults.push(VaultResponse.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryVaultsResponse {
    return {
      vaults: Array.isArray(object?.vaults) ? object.vaults.map((e: any) => VaultResponse.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryVaultsResponse): unknown {
    const obj: any = {};

    if (message.vaults) {
      obj.vaults = message.vaults.map(e => e ? VaultResponse.toJSON(e) : undefined);
    } else {
      obj.vaults = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<QueryVaultsResponse>): QueryVaultsResponse {
    const message = createBaseQueryVaultsResponse();
    message.vaults = object.vaults?.map(e => VaultResponse.fromPartial(e)) || [];
    return message;
  }

};

function createBaseVaultResponse(): VaultResponse {
  return {
    denom: "",
    vaultStrategy: 0,
    totalSupplied: "",
    totalValue: ""
  };
}

export const VaultResponse = {
  encode(message: VaultResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.vaultStrategy !== 0) {
      writer.uint32(16).int32(message.vaultStrategy);
    }

    if (message.totalSupplied !== "") {
      writer.uint32(26).string(message.totalSupplied);
    }

    if (message.totalValue !== "") {
      writer.uint32(34).string(message.totalValue);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VaultResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVaultResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.vaultStrategy = (reader.int32() as any);
          break;

        case 3:
          message.totalSupplied = reader.string();
          break;

        case 4:
          message.totalValue = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): VaultResponse {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      vaultStrategy: isSet(object.vaultStrategy) ? strategyTypeFromJSON(object.vaultStrategy) : 0,
      totalSupplied: isSet(object.totalSupplied) ? String(object.totalSupplied) : "",
      totalValue: isSet(object.totalValue) ? String(object.totalValue) : ""
    };
  },

  toJSON(message: VaultResponse): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.vaultStrategy !== undefined && (obj.vaultStrategy = strategyTypeToJSON(message.vaultStrategy));
    message.totalSupplied !== undefined && (obj.totalSupplied = message.totalSupplied);
    message.totalValue !== undefined && (obj.totalValue = message.totalValue);
    return obj;
  },

  fromPartial(object: DeepPartial<VaultResponse>): VaultResponse {
    const message = createBaseVaultResponse();
    message.denom = object.denom ?? "";
    message.vaultStrategy = object.vaultStrategy ?? 0;
    message.totalSupplied = object.totalSupplied ?? "";
    message.totalValue = object.totalValue ?? "";
    return message;
  }

};

function createBaseQueryDepositsRequest(): QueryDepositsRequest {
  return {
    owner: "",
    denom: "",
    pagination: undefined
  };
}

export const QueryDepositsRequest = {
  encode(message: QueryDepositsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
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
          message.owner = reader.string();
          break;

        case 2:
          message.denom = reader.string();
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

  fromJSON(object: any): QueryDepositsRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryDepositsRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.denom !== undefined && (obj.denom = message.denom);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDepositsRequest>): QueryDepositsRequest {
    const message = createBaseQueryDepositsRequest();
    message.owner = object.owner ?? "";
    message.denom = object.denom ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryDepositsResponse(): QueryDepositsResponse {
  return {
    deposits: [],
    pagination: undefined
  };
}

export const QueryDepositsResponse = {
  encode(message: QueryDepositsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.deposits) {
      DepositResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
          message.deposits.push(DepositResponse.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryDepositsResponse {
    return {
      deposits: Array.isArray(object?.deposits) ? object.deposits.map((e: any) => DepositResponse.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryDepositsResponse): unknown {
    const obj: any = {};

    if (message.deposits) {
      obj.deposits = message.deposits.map(e => e ? DepositResponse.toJSON(e) : undefined);
    } else {
      obj.deposits = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDepositsResponse>): QueryDepositsResponse {
    const message = createBaseQueryDepositsResponse();
    message.deposits = object.deposits?.map(e => DepositResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseDepositResponse(): DepositResponse {
  return {
    depositor: "",
    amountSupplied: [],
    value: []
  };
}

export const DepositResponse = {
  encode(message: DepositResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositor !== "") {
      writer.uint32(10).string(message.depositor);
    }

    for (const v of message.amountSupplied) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.value) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DepositResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.depositor = reader.string();
          break;

        case 2:
          message.amountSupplied.push(Coin.decode(reader, reader.uint32()));
          break;

        case 3:
          message.value.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DepositResponse {
    return {
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
      amountSupplied: Array.isArray(object?.amountSupplied) ? object.amountSupplied.map((e: any) => Coin.fromJSON(e)) : [],
      value: Array.isArray(object?.value) ? object.value.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: DepositResponse): unknown {
    const obj: any = {};
    message.depositor !== undefined && (obj.depositor = message.depositor);

    if (message.amountSupplied) {
      obj.amountSupplied = message.amountSupplied.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountSupplied = [];
    }

    if (message.value) {
      obj.value = message.value.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.value = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<DepositResponse>): DepositResponse {
    const message = createBaseDepositResponse();
    message.depositor = object.depositor ?? "";
    message.amountSupplied = object.amountSupplied?.map(e => Coin.fromPartial(e)) || [];
    message.value = object.value?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryTotalDepositedRequest(): QueryTotalDepositedRequest {
  return {
    denom: ""
  };
}

export const QueryTotalDepositedRequest = {
  encode(message: QueryTotalDepositedRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalDepositedRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalDepositedRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryTotalDepositedRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },

  toJSON(message: QueryTotalDepositedRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryTotalDepositedRequest>): QueryTotalDepositedRequest {
    const message = createBaseQueryTotalDepositedRequest();
    message.denom = object.denom ?? "";
    return message;
  }

};

function createBaseQueryTotalDepositedResponse(): QueryTotalDepositedResponse {
  return {
    suppliedCoins: []
  };
}

export const QueryTotalDepositedResponse = {
  encode(message: QueryTotalDepositedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.suppliedCoins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalDepositedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalDepositedResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.suppliedCoins.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryTotalDepositedResponse {
    return {
      suppliedCoins: Array.isArray(object?.suppliedCoins) ? object.suppliedCoins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryTotalDepositedResponse): unknown {
    const obj: any = {};

    if (message.suppliedCoins) {
      obj.suppliedCoins = message.suppliedCoins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.suppliedCoins = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<QueryTotalDepositedResponse>): QueryTotalDepositedResponse {
    const message = createBaseQueryTotalDepositedResponse();
    message.suppliedCoins = object.suppliedCoins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};