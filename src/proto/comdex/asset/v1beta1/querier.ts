import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Asset } from "./asset";
import { Params } from "./params";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Long } from "@osmonauts/helpers";
export interface QueryAssetsRequest {
  pagination: PageRequest;
}
export interface QueryAssetsResponse {
  assets: Asset[];
  pagination: PageResponse;
}
export interface QueryAssetRequest {
  id: Long;
}
export interface QueryAssetResponse {
  asset: Asset;
}
export interface PairInfo {
  id: Long;
  assetIn: Long;
  denomIn: string;
  assetOut: Long;
  denomOut: string;
  liquidationRatio: string;
}
export interface QueryPairsRequest {
  pagination: PageRequest;
}
export interface QueryPairsResponse {
  pairsInfo: PairInfo[];
  pagination: PageResponse;
}
export interface QueryPairRequest {
  id: Long;
}
export interface QueryPairResponse {
  pairInfo: PairInfo;
}
export interface QueryParamsRequest {}
export interface QueryParamsResponse {
  params: Params;
}

function createBaseQueryAssetsRequest(): QueryAssetsRequest {
  return {
    pagination: undefined
  };
}

export const QueryAssetsRequest = {
  encode(message: QueryAssetsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAssetsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetsRequest();

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

  fromJSON(object: any): QueryAssetsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAssetsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAssetsRequest>): QueryAssetsRequest {
    const message = createBaseQueryAssetsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryAssetsResponse(): QueryAssetsResponse {
  return {
    assets: [],
    pagination: undefined
  };
}

export const QueryAssetsResponse = {
  encode(message: QueryAssetsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.assets) {
      Asset.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAssetsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.assets.push(Asset.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAssetsResponse {
    return {
      assets: Array.isArray(object?.assets) ? object.assets.map((e: any) => Asset.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAssetsResponse): unknown {
    const obj: any = {};

    if (message.assets) {
      obj.assets = message.assets.map(e => e ? Asset.toJSON(e) : undefined);
    } else {
      obj.assets = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAssetsResponse>): QueryAssetsResponse {
    const message = createBaseQueryAssetsResponse();
    message.assets = object.assets?.map(e => Asset.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryAssetRequest(): QueryAssetRequest {
  return {
    id: Long.UZERO
  };
}

export const QueryAssetRequest = {
  encode(message: QueryAssetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAssetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetRequest();

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

  fromJSON(object: any): QueryAssetRequest {
    return {
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO
    };
  },

  toJSON(message: QueryAssetRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAssetRequest>): QueryAssetRequest {
    const message = createBaseQueryAssetRequest();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }

};

function createBaseQueryAssetResponse(): QueryAssetResponse {
  return {
    asset: undefined
  };
}

export const QueryAssetResponse = {
  encode(message: QueryAssetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.asset !== undefined) {
      Asset.encode(message.asset, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAssetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.asset = Asset.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAssetResponse {
    return {
      asset: isSet(object.asset) ? Asset.fromJSON(object.asset) : undefined
    };
  },

  toJSON(message: QueryAssetResponse): unknown {
    const obj: any = {};
    message.asset !== undefined && (obj.asset = message.asset ? Asset.toJSON(message.asset) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAssetResponse>): QueryAssetResponse {
    const message = createBaseQueryAssetResponse();
    message.asset = object.asset !== undefined && object.asset !== null ? Asset.fromPartial(object.asset) : undefined;
    return message;
  }

};

function createBasePairInfo(): PairInfo {
  return {
    id: Long.UZERO,
    assetIn: Long.UZERO,
    denomIn: "",
    assetOut: Long.UZERO,
    denomOut: "",
    liquidationRatio: ""
  };
}

export const PairInfo = {
  encode(message: PairInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (!message.assetIn.isZero()) {
      writer.uint32(16).uint64(message.assetIn);
    }

    if (message.denomIn !== "") {
      writer.uint32(26).string(message.denomIn);
    }

    if (!message.assetOut.isZero()) {
      writer.uint32(32).uint64(message.assetOut);
    }

    if (message.denomOut !== "") {
      writer.uint32(42).string(message.denomOut);
    }

    if (message.liquidationRatio !== "") {
      writer.uint32(50).string(message.liquidationRatio);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PairInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePairInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.assetIn = (reader.uint64() as Long);
          break;

        case 3:
          message.denomIn = reader.string();
          break;

        case 4:
          message.assetOut = (reader.uint64() as Long);
          break;

        case 5:
          message.denomOut = reader.string();
          break;

        case 6:
          message.liquidationRatio = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PairInfo {
    return {
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
      assetIn: isSet(object.assetIn) ? Long.fromString(object.assetIn) : Long.UZERO,
      denomIn: isSet(object.denomIn) ? String(object.denomIn) : "",
      assetOut: isSet(object.assetOut) ? Long.fromString(object.assetOut) : Long.UZERO,
      denomOut: isSet(object.denomOut) ? String(object.denomOut) : "",
      liquidationRatio: isSet(object.liquidationRatio) ? String(object.liquidationRatio) : ""
    };
  },

  toJSON(message: PairInfo): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.assetIn !== undefined && (obj.assetIn = (message.assetIn || Long.UZERO).toString());
    message.denomIn !== undefined && (obj.denomIn = message.denomIn);
    message.assetOut !== undefined && (obj.assetOut = (message.assetOut || Long.UZERO).toString());
    message.denomOut !== undefined && (obj.denomOut = message.denomOut);
    message.liquidationRatio !== undefined && (obj.liquidationRatio = message.liquidationRatio);
    return obj;
  },

  fromPartial(object: DeepPartial<PairInfo>): PairInfo {
    const message = createBasePairInfo();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.assetIn = object.assetIn !== undefined && object.assetIn !== null ? Long.fromValue(object.assetIn) : Long.UZERO;
    message.denomIn = object.denomIn ?? "";
    message.assetOut = object.assetOut !== undefined && object.assetOut !== null ? Long.fromValue(object.assetOut) : Long.UZERO;
    message.denomOut = object.denomOut ?? "";
    message.liquidationRatio = object.liquidationRatio ?? "";
    return message;
  }

};

function createBaseQueryPairsRequest(): QueryPairsRequest {
  return {
    pagination: undefined
  };
}

export const QueryPairsRequest = {
  encode(message: QueryPairsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPairsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPairsRequest();

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

  fromJSON(object: any): QueryPairsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryPairsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryPairsRequest>): QueryPairsRequest {
    const message = createBaseQueryPairsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryPairsResponse(): QueryPairsResponse {
  return {
    pairsInfo: [],
    pagination: undefined
  };
}

export const QueryPairsResponse = {
  encode(message: QueryPairsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pairsInfo) {
      PairInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPairsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPairsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pairsInfo.push(PairInfo.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryPairsResponse {
    return {
      pairsInfo: Array.isArray(object?.pairsInfo) ? object.pairsInfo.map((e: any) => PairInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryPairsResponse): unknown {
    const obj: any = {};

    if (message.pairsInfo) {
      obj.pairsInfo = message.pairsInfo.map(e => e ? PairInfo.toJSON(e) : undefined);
    } else {
      obj.pairsInfo = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryPairsResponse>): QueryPairsResponse {
    const message = createBaseQueryPairsResponse();
    message.pairsInfo = object.pairsInfo?.map(e => PairInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryPairRequest(): QueryPairRequest {
  return {
    id: Long.UZERO
  };
}

export const QueryPairRequest = {
  encode(message: QueryPairRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPairRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPairRequest();

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

  fromJSON(object: any): QueryPairRequest {
    return {
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO
    };
  },

  toJSON(message: QueryPairRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<QueryPairRequest>): QueryPairRequest {
    const message = createBaseQueryPairRequest();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }

};

function createBaseQueryPairResponse(): QueryPairResponse {
  return {
    pairInfo: undefined
  };
}

export const QueryPairResponse = {
  encode(message: QueryPairResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pairInfo !== undefined) {
      PairInfo.encode(message.pairInfo, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPairResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPairResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pairInfo = PairInfo.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryPairResponse {
    return {
      pairInfo: isSet(object.pairInfo) ? PairInfo.fromJSON(object.pairInfo) : undefined
    };
  },

  toJSON(message: QueryPairResponse): unknown {
    const obj: any = {};
    message.pairInfo !== undefined && (obj.pairInfo = message.pairInfo ? PairInfo.toJSON(message.pairInfo) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryPairResponse>): QueryPairResponse {
    const message = createBaseQueryPairResponse();
    message.pairInfo = object.pairInfo !== undefined && object.pairInfo !== null ? PairInfo.fromPartial(object.pairInfo) : undefined;
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