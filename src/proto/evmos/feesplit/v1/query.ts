import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { FeeSplit } from "./feesplit";
import { Params } from "./genesis";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";

/** QueryFeeSplitsRequest is the request type for the Query/FeeSplits RPC method. */
export interface QueryFeeSplitsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
}

/** QueryFeeSplitsResponse is the response type for the Query/FeeSplits RPC method. */
export interface QueryFeeSplitsResponse {
  feeSplits: FeeSplit[];

  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}

/** QueryFeeSplitRequest is the request type for the Query/FeeSplit RPC method. */
export interface QueryFeeSplitRequest {
  /** contract identifier is the hex contract address of a contract */
  contractAddress: string;
}

/** QueryFeeSplitResponse is the response type for the Query/FeeSplit RPC method. */
export interface QueryFeeSplitResponse {
  feeSplit: FeeSplit;
}

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  params: Params;
}

/**
 * QueryDeployerFeeSplitsRequest is the request type for the
 * Query/DeployerFeeSplits RPC method.
 */
export interface QueryDeployerFeeSplitsRequest {
  /** deployer bech32 address */
  deployerAddress: string;

  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
}

/**
 * QueryDeployerFeeSplitsResponse is the response type for the
 * Query/DeployerFeeSplits RPC method.
 */
export interface QueryDeployerFeeSplitsResponse {
  contractAddresses: string[];

  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}

/**
 * QueryWithdrawerFeeSplitsRequest is the request type for the
 * Query/WithdrawerFeeSplits RPC method.
 */
export interface QueryWithdrawerFeeSplitsRequest {
  /** withdrawer bech32 address */
  withdrawerAddress: string;

  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
}

/**
 * QueryWithdrawerFeeSplitsResponse is the response type for the
 * Query/WithdrawerFeeSplits RPC method.
 */
export interface QueryWithdrawerFeeSplitsResponse {
  contractAddresses: string[];

  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}

function createBaseQueryFeeSplitsRequest(): QueryFeeSplitsRequest {
  return {
    pagination: undefined
  };
}

export const QueryFeeSplitsRequest = {
  encode(message: QueryFeeSplitsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeSplitsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeSplitsRequest();

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

  fromJSON(object: any): QueryFeeSplitsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryFeeSplitsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryFeeSplitsRequest>): QueryFeeSplitsRequest {
    const message = createBaseQueryFeeSplitsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryFeeSplitsResponse(): QueryFeeSplitsResponse {
  return {
    feeSplits: [],
    pagination: undefined
  };
}

export const QueryFeeSplitsResponse = {
  encode(message: QueryFeeSplitsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.feeSplits) {
      FeeSplit.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeSplitsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeSplitsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.feeSplits.push(FeeSplit.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryFeeSplitsResponse {
    return {
      feeSplits: Array.isArray(object?.feeSplits) ? object.feeSplits.map((e: any) => FeeSplit.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryFeeSplitsResponse): unknown {
    const obj: any = {};

    if (message.feeSplits) {
      obj.feeSplits = message.feeSplits.map(e => e ? FeeSplit.toJSON(e) : undefined);
    } else {
      obj.feeSplits = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryFeeSplitsResponse>): QueryFeeSplitsResponse {
    const message = createBaseQueryFeeSplitsResponse();
    message.feeSplits = object.feeSplits?.map(e => FeeSplit.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryFeeSplitRequest(): QueryFeeSplitRequest {
  return {
    contractAddress: ""
  };
}

export const QueryFeeSplitRequest = {
  encode(message: QueryFeeSplitRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeSplitRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeSplitRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryFeeSplitRequest {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : ""
    };
  },

  toJSON(message: QueryFeeSplitRequest): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryFeeSplitRequest>): QueryFeeSplitRequest {
    const message = createBaseQueryFeeSplitRequest();
    message.contractAddress = object.contractAddress ?? "";
    return message;
  }

};

function createBaseQueryFeeSplitResponse(): QueryFeeSplitResponse {
  return {
    feeSplit: undefined
  };
}

export const QueryFeeSplitResponse = {
  encode(message: QueryFeeSplitResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feeSplit !== undefined) {
      FeeSplit.encode(message.feeSplit, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeSplitResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeSplitResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.feeSplit = FeeSplit.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryFeeSplitResponse {
    return {
      feeSplit: isSet(object.feeSplit) ? FeeSplit.fromJSON(object.feeSplit) : undefined
    };
  },

  toJSON(message: QueryFeeSplitResponse): unknown {
    const obj: any = {};
    message.feeSplit !== undefined && (obj.feeSplit = message.feeSplit ? FeeSplit.toJSON(message.feeSplit) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryFeeSplitResponse>): QueryFeeSplitResponse {
    const message = createBaseQueryFeeSplitResponse();
    message.feeSplit = object.feeSplit !== undefined && object.feeSplit !== null ? FeeSplit.fromPartial(object.feeSplit) : undefined;
    return message;
  }

};

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

function createBaseQueryDeployerFeeSplitsRequest(): QueryDeployerFeeSplitsRequest {
  return {
    deployerAddress: "",
    pagination: undefined
  };
}

export const QueryDeployerFeeSplitsRequest = {
  encode(message: QueryDeployerFeeSplitsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deployerAddress !== "") {
      writer.uint32(10).string(message.deployerAddress);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDeployerFeeSplitsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDeployerFeeSplitsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.deployerAddress = reader.string();
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

  fromJSON(object: any): QueryDeployerFeeSplitsRequest {
    return {
      deployerAddress: isSet(object.deployerAddress) ? String(object.deployerAddress) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryDeployerFeeSplitsRequest): unknown {
    const obj: any = {};
    message.deployerAddress !== undefined && (obj.deployerAddress = message.deployerAddress);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDeployerFeeSplitsRequest>): QueryDeployerFeeSplitsRequest {
    const message = createBaseQueryDeployerFeeSplitsRequest();
    message.deployerAddress = object.deployerAddress ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryDeployerFeeSplitsResponse(): QueryDeployerFeeSplitsResponse {
  return {
    contractAddresses: [],
    pagination: undefined
  };
}

export const QueryDeployerFeeSplitsResponse = {
  encode(message: QueryDeployerFeeSplitsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.contractAddresses) {
      writer.uint32(10).string(v!);
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDeployerFeeSplitsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDeployerFeeSplitsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contractAddresses.push(reader.string());
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

  fromJSON(object: any): QueryDeployerFeeSplitsResponse {
    return {
      contractAddresses: Array.isArray(object?.contractAddresses) ? object.contractAddresses.map((e: any) => String(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryDeployerFeeSplitsResponse): unknown {
    const obj: any = {};

    if (message.contractAddresses) {
      obj.contractAddresses = message.contractAddresses.map(e => e);
    } else {
      obj.contractAddresses = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDeployerFeeSplitsResponse>): QueryDeployerFeeSplitsResponse {
    const message = createBaseQueryDeployerFeeSplitsResponse();
    message.contractAddresses = object.contractAddresses?.map(e => e) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryWithdrawerFeeSplitsRequest(): QueryWithdrawerFeeSplitsRequest {
  return {
    withdrawerAddress: "",
    pagination: undefined
  };
}

export const QueryWithdrawerFeeSplitsRequest = {
  encode(message: QueryWithdrawerFeeSplitsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.withdrawerAddress !== "") {
      writer.uint32(10).string(message.withdrawerAddress);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryWithdrawerFeeSplitsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWithdrawerFeeSplitsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.withdrawerAddress = reader.string();
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

  fromJSON(object: any): QueryWithdrawerFeeSplitsRequest {
    return {
      withdrawerAddress: isSet(object.withdrawerAddress) ? String(object.withdrawerAddress) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryWithdrawerFeeSplitsRequest): unknown {
    const obj: any = {};
    message.withdrawerAddress !== undefined && (obj.withdrawerAddress = message.withdrawerAddress);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryWithdrawerFeeSplitsRequest>): QueryWithdrawerFeeSplitsRequest {
    const message = createBaseQueryWithdrawerFeeSplitsRequest();
    message.withdrawerAddress = object.withdrawerAddress ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryWithdrawerFeeSplitsResponse(): QueryWithdrawerFeeSplitsResponse {
  return {
    contractAddresses: [],
    pagination: undefined
  };
}

export const QueryWithdrawerFeeSplitsResponse = {
  encode(message: QueryWithdrawerFeeSplitsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.contractAddresses) {
      writer.uint32(10).string(v!);
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryWithdrawerFeeSplitsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWithdrawerFeeSplitsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contractAddresses.push(reader.string());
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

  fromJSON(object: any): QueryWithdrawerFeeSplitsResponse {
    return {
      contractAddresses: Array.isArray(object?.contractAddresses) ? object.contractAddresses.map((e: any) => String(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryWithdrawerFeeSplitsResponse): unknown {
    const obj: any = {};

    if (message.contractAddresses) {
      obj.contractAddresses = message.contractAddresses.map(e => e);
    } else {
      obj.contractAddresses = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryWithdrawerFeeSplitsResponse>): QueryWithdrawerFeeSplitsResponse {
    const message = createBaseQueryWithdrawerFeeSplitsResponse();
    message.contractAddresses = object.contractAddresses?.map(e => e) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};