import { Params } from "./genesis";
import { Cork, ScheduledCork } from "./cork";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, isSet, Long } from "@osmonauts/helpers";

/** QueryParamsRequest is the request type for the Query/Params gRPC method. */
export interface QueryParamsRequest {}

/** QueryParamsRequest is the response type for the Query/Params gRPC method. */
export interface QueryParamsResponse {
  /** allocation parameters */
  params: Params;
}

/** QuerySubmittedCorksRequest is the request type for the Query/QuerySubmittedCorks gRPC query method. */
export interface QuerySubmittedCorksRequest {}

/** QuerySubmittedCorksResponse is the response type for the Query/QuerySubmittedCorks gRPC query method. */
export interface QuerySubmittedCorksResponse {
  /** corks in keeper awaiting vote */
  corks: Cork[];
}

/** QueryCommitPeriodRequest is the request type for the Query/QueryCommitPeriod gRPC method. */
export interface QueryCommitPeriodRequest {}

/** QueryCommitPeriodResponse is the response type for the Query/QueryCommitPeriod gRPC method. */
export interface QueryCommitPeriodResponse {
  /** block height at which the query was processed */
  currentHeight: Long;

  /** latest vote period start block height */
  votePeriodStart: Long;

  /** block height at which the current voting period ends */
  votePeriodEnd: Long;
}

/** QueryCellarIDsRequest is the request type for Query/QueryCellarIDs gRPC method. */
export interface QueryCellarIDsRequest {}

/** QueryCellarIDsResponse is the response type for Query/QueryCellars gRPC method. */
export interface QueryCellarIDsResponse {
  cellarIds: string[];
}

/** QueryScheduledCorksRequest */
export interface QueryScheduledCorksRequest {}

/** QueryScheduledCorksResponse */
export interface QueryScheduledCorksResponse {
  corks: ScheduledCork[];
}

/** QueryScheduledBlockHeightsRequest */
export interface QueryScheduledBlockHeightsRequest {}

/** QueryScheduledBlockHeightsResponse */
export interface QueryScheduledBlockHeightsResponse {
  blockHeights: Long[];
}

/** QueryScheduledCorksByBlockHeightRequest */
export interface QueryScheduledCorksByBlockHeightRequest {
  blockHeight: Long;
}

/** QueryScheduledCorksByBlockHeightResponse */
export interface QueryScheduledCorksByBlockHeightResponse {
  corks: ScheduledCork[];
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

function createBaseQuerySubmittedCorksRequest(): QuerySubmittedCorksRequest {
  return {};
}

export const QuerySubmittedCorksRequest = {
  encode(_: QuerySubmittedCorksRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubmittedCorksRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubmittedCorksRequest();

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

  fromJSON(_: any): QuerySubmittedCorksRequest {
    return {};
  },

  toJSON(_: QuerySubmittedCorksRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QuerySubmittedCorksRequest>): QuerySubmittedCorksRequest {
    const message = createBaseQuerySubmittedCorksRequest();
    return message;
  }

};

function createBaseQuerySubmittedCorksResponse(): QuerySubmittedCorksResponse {
  return {
    corks: []
  };
}

export const QuerySubmittedCorksResponse = {
  encode(message: QuerySubmittedCorksResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.corks) {
      Cork.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubmittedCorksResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubmittedCorksResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.corks.push(Cork.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QuerySubmittedCorksResponse {
    return {
      corks: Array.isArray(object?.corks) ? object.corks.map((e: any) => Cork.fromJSON(e)) : []
    };
  },

  toJSON(message: QuerySubmittedCorksResponse): unknown {
    const obj: any = {};

    if (message.corks) {
      obj.corks = message.corks.map(e => e ? Cork.toJSON(e) : undefined);
    } else {
      obj.corks = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<QuerySubmittedCorksResponse>): QuerySubmittedCorksResponse {
    const message = createBaseQuerySubmittedCorksResponse();
    message.corks = object.corks?.map(e => Cork.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryCommitPeriodRequest(): QueryCommitPeriodRequest {
  return {};
}

export const QueryCommitPeriodRequest = {
  encode(_: QueryCommitPeriodRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCommitPeriodRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommitPeriodRequest();

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

  fromJSON(_: any): QueryCommitPeriodRequest {
    return {};
  },

  toJSON(_: QueryCommitPeriodRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryCommitPeriodRequest>): QueryCommitPeriodRequest {
    const message = createBaseQueryCommitPeriodRequest();
    return message;
  }

};

function createBaseQueryCommitPeriodResponse(): QueryCommitPeriodResponse {
  return {
    currentHeight: Long.ZERO,
    votePeriodStart: Long.ZERO,
    votePeriodEnd: Long.ZERO
  };
}

export const QueryCommitPeriodResponse = {
  encode(message: QueryCommitPeriodResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.currentHeight.isZero()) {
      writer.uint32(8).int64(message.currentHeight);
    }

    if (!message.votePeriodStart.isZero()) {
      writer.uint32(16).int64(message.votePeriodStart);
    }

    if (!message.votePeriodEnd.isZero()) {
      writer.uint32(24).int64(message.votePeriodEnd);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCommitPeriodResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommitPeriodResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.currentHeight = (reader.int64() as Long);
          break;

        case 2:
          message.votePeriodStart = (reader.int64() as Long);
          break;

        case 3:
          message.votePeriodEnd = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryCommitPeriodResponse {
    return {
      currentHeight: isSet(object.currentHeight) ? Long.fromString(object.currentHeight) : Long.ZERO,
      votePeriodStart: isSet(object.votePeriodStart) ? Long.fromString(object.votePeriodStart) : Long.ZERO,
      votePeriodEnd: isSet(object.votePeriodEnd) ? Long.fromString(object.votePeriodEnd) : Long.ZERO
    };
  },

  toJSON(message: QueryCommitPeriodResponse): unknown {
    const obj: any = {};
    message.currentHeight !== undefined && (obj.currentHeight = (message.currentHeight || Long.ZERO).toString());
    message.votePeriodStart !== undefined && (obj.votePeriodStart = (message.votePeriodStart || Long.ZERO).toString());
    message.votePeriodEnd !== undefined && (obj.votePeriodEnd = (message.votePeriodEnd || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<QueryCommitPeriodResponse>): QueryCommitPeriodResponse {
    const message = createBaseQueryCommitPeriodResponse();
    message.currentHeight = object.currentHeight !== undefined && object.currentHeight !== null ? Long.fromValue(object.currentHeight) : Long.ZERO;
    message.votePeriodStart = object.votePeriodStart !== undefined && object.votePeriodStart !== null ? Long.fromValue(object.votePeriodStart) : Long.ZERO;
    message.votePeriodEnd = object.votePeriodEnd !== undefined && object.votePeriodEnd !== null ? Long.fromValue(object.votePeriodEnd) : Long.ZERO;
    return message;
  }

};

function createBaseQueryCellarIDsRequest(): QueryCellarIDsRequest {
  return {};
}

export const QueryCellarIDsRequest = {
  encode(_: QueryCellarIDsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCellarIDsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCellarIDsRequest();

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

  fromJSON(_: any): QueryCellarIDsRequest {
    return {};
  },

  toJSON(_: QueryCellarIDsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryCellarIDsRequest>): QueryCellarIDsRequest {
    const message = createBaseQueryCellarIDsRequest();
    return message;
  }

};

function createBaseQueryCellarIDsResponse(): QueryCellarIDsResponse {
  return {
    cellarIds: []
  };
}

export const QueryCellarIDsResponse = {
  encode(message: QueryCellarIDsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.cellarIds) {
      writer.uint32(10).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCellarIDsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCellarIDsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.cellarIds.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryCellarIDsResponse {
    return {
      cellarIds: Array.isArray(object?.cellarIds) ? object.cellarIds.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: QueryCellarIDsResponse): unknown {
    const obj: any = {};

    if (message.cellarIds) {
      obj.cellarIds = message.cellarIds.map(e => e);
    } else {
      obj.cellarIds = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<QueryCellarIDsResponse>): QueryCellarIDsResponse {
    const message = createBaseQueryCellarIDsResponse();
    message.cellarIds = object.cellarIds?.map(e => e) || [];
    return message;
  }

};

function createBaseQueryScheduledCorksRequest(): QueryScheduledCorksRequest {
  return {};
}

export const QueryScheduledCorksRequest = {
  encode(_: QueryScheduledCorksRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryScheduledCorksRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryScheduledCorksRequest();

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

  fromJSON(_: any): QueryScheduledCorksRequest {
    return {};
  },

  toJSON(_: QueryScheduledCorksRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryScheduledCorksRequest>): QueryScheduledCorksRequest {
    const message = createBaseQueryScheduledCorksRequest();
    return message;
  }

};

function createBaseQueryScheduledCorksResponse(): QueryScheduledCorksResponse {
  return {
    corks: []
  };
}

export const QueryScheduledCorksResponse = {
  encode(message: QueryScheduledCorksResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.corks) {
      ScheduledCork.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryScheduledCorksResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryScheduledCorksResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.corks.push(ScheduledCork.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryScheduledCorksResponse {
    return {
      corks: Array.isArray(object?.corks) ? object.corks.map((e: any) => ScheduledCork.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryScheduledCorksResponse): unknown {
    const obj: any = {};

    if (message.corks) {
      obj.corks = message.corks.map(e => e ? ScheduledCork.toJSON(e) : undefined);
    } else {
      obj.corks = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<QueryScheduledCorksResponse>): QueryScheduledCorksResponse {
    const message = createBaseQueryScheduledCorksResponse();
    message.corks = object.corks?.map(e => ScheduledCork.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryScheduledBlockHeightsRequest(): QueryScheduledBlockHeightsRequest {
  return {};
}

export const QueryScheduledBlockHeightsRequest = {
  encode(_: QueryScheduledBlockHeightsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryScheduledBlockHeightsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryScheduledBlockHeightsRequest();

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

  fromJSON(_: any): QueryScheduledBlockHeightsRequest {
    return {};
  },

  toJSON(_: QueryScheduledBlockHeightsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryScheduledBlockHeightsRequest>): QueryScheduledBlockHeightsRequest {
    const message = createBaseQueryScheduledBlockHeightsRequest();
    return message;
  }

};

function createBaseQueryScheduledBlockHeightsResponse(): QueryScheduledBlockHeightsResponse {
  return {
    blockHeights: []
  };
}

export const QueryScheduledBlockHeightsResponse = {
  encode(message: QueryScheduledBlockHeightsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();

    for (const v of message.blockHeights) {
      writer.uint64(v);
    }

    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryScheduledBlockHeightsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryScheduledBlockHeightsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.blockHeights.push((reader.uint64() as Long));
            }
          } else {
            message.blockHeights.push((reader.uint64() as Long));
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryScheduledBlockHeightsResponse {
    return {
      blockHeights: Array.isArray(object?.blockHeights) ? object.blockHeights.map((e: any) => Long.fromString(e)) : []
    };
  },

  toJSON(message: QueryScheduledBlockHeightsResponse): unknown {
    const obj: any = {};

    if (message.blockHeights) {
      obj.blockHeights = message.blockHeights.map(e => (e || Long.UZERO).toString());
    } else {
      obj.blockHeights = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<QueryScheduledBlockHeightsResponse>): QueryScheduledBlockHeightsResponse {
    const message = createBaseQueryScheduledBlockHeightsResponse();
    message.blockHeights = object.blockHeights?.map(e => Long.fromValue(e)) || [];
    return message;
  }

};

function createBaseQueryScheduledCorksByBlockHeightRequest(): QueryScheduledCorksByBlockHeightRequest {
  return {
    blockHeight: Long.UZERO
  };
}

export const QueryScheduledCorksByBlockHeightRequest = {
  encode(message: QueryScheduledCorksByBlockHeightRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.blockHeight.isZero()) {
      writer.uint32(8).uint64(message.blockHeight);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryScheduledCorksByBlockHeightRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryScheduledCorksByBlockHeightRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.blockHeight = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryScheduledCorksByBlockHeightRequest {
    return {
      blockHeight: isSet(object.blockHeight) ? Long.fromString(object.blockHeight) : Long.UZERO
    };
  },

  toJSON(message: QueryScheduledCorksByBlockHeightRequest): unknown {
    const obj: any = {};
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<QueryScheduledCorksByBlockHeightRequest>): QueryScheduledCorksByBlockHeightRequest {
    const message = createBaseQueryScheduledCorksByBlockHeightRequest();
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? Long.fromValue(object.blockHeight) : Long.UZERO;
    return message;
  }

};

function createBaseQueryScheduledCorksByBlockHeightResponse(): QueryScheduledCorksByBlockHeightResponse {
  return {
    corks: []
  };
}

export const QueryScheduledCorksByBlockHeightResponse = {
  encode(message: QueryScheduledCorksByBlockHeightResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.corks) {
      ScheduledCork.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryScheduledCorksByBlockHeightResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryScheduledCorksByBlockHeightResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.corks.push(ScheduledCork.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryScheduledCorksByBlockHeightResponse {
    return {
      corks: Array.isArray(object?.corks) ? object.corks.map((e: any) => ScheduledCork.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryScheduledCorksByBlockHeightResponse): unknown {
    const obj: any = {};

    if (message.corks) {
      obj.corks = message.corks.map(e => e ? ScheduledCork.toJSON(e) : undefined);
    } else {
      obj.corks = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<QueryScheduledCorksByBlockHeightResponse>): QueryScheduledCorksByBlockHeightResponse {
    const message = createBaseQueryScheduledCorksByBlockHeightResponse();
    message.corks = object.corks?.map(e => ScheduledCork.fromPartial(e)) || [];
    return message;
  }

};