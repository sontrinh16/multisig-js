import { Params, Thought, ThoughtStats } from "./types";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, isSet } from "@osmonauts/helpers";
export interface QueryParamsRequest {}
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryThoughtParamsRequest {
  program: string;
  name: string;
}
export interface QueryThoughtResponse {
  thought: Thought;
}
export interface QueryThoughtStatsResponse {
  thoughtStats: ThoughtStats;
}
export interface QueryThoughtsRequest {}
export interface QueryThoughtsResponse {
  thoughts: Thought[];
}
export interface QueryThoughtsStatsRequest {}
export interface QueryThoughtsStatsResponse {
  thoughtsStats: ThoughtStats[];
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

function createBaseQueryThoughtParamsRequest(): QueryThoughtParamsRequest {
  return {
    program: "",
    name: ""
  };
}

export const QueryThoughtParamsRequest = {
  encode(message: QueryThoughtParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.program !== "") {
      writer.uint32(10).string(message.program);
    }

    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryThoughtParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryThoughtParamsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.program = reader.string();
          break;

        case 2:
          message.name = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryThoughtParamsRequest {
    return {
      program: isSet(object.program) ? String(object.program) : "",
      name: isSet(object.name) ? String(object.name) : ""
    };
  },

  toJSON(message: QueryThoughtParamsRequest): unknown {
    const obj: any = {};
    message.program !== undefined && (obj.program = message.program);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryThoughtParamsRequest>): QueryThoughtParamsRequest {
    const message = createBaseQueryThoughtParamsRequest();
    message.program = object.program ?? "";
    message.name = object.name ?? "";
    return message;
  }

};

function createBaseQueryThoughtResponse(): QueryThoughtResponse {
  return {
    thought: undefined
  };
}

export const QueryThoughtResponse = {
  encode(message: QueryThoughtResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.thought !== undefined) {
      Thought.encode(message.thought, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryThoughtResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryThoughtResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.thought = Thought.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryThoughtResponse {
    return {
      thought: isSet(object.thought) ? Thought.fromJSON(object.thought) : undefined
    };
  },

  toJSON(message: QueryThoughtResponse): unknown {
    const obj: any = {};
    message.thought !== undefined && (obj.thought = message.thought ? Thought.toJSON(message.thought) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryThoughtResponse>): QueryThoughtResponse {
    const message = createBaseQueryThoughtResponse();
    message.thought = object.thought !== undefined && object.thought !== null ? Thought.fromPartial(object.thought) : undefined;
    return message;
  }

};

function createBaseQueryThoughtStatsResponse(): QueryThoughtStatsResponse {
  return {
    thoughtStats: undefined
  };
}

export const QueryThoughtStatsResponse = {
  encode(message: QueryThoughtStatsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.thoughtStats !== undefined) {
      ThoughtStats.encode(message.thoughtStats, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryThoughtStatsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryThoughtStatsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.thoughtStats = ThoughtStats.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryThoughtStatsResponse {
    return {
      thoughtStats: isSet(object.thoughtStats) ? ThoughtStats.fromJSON(object.thoughtStats) : undefined
    };
  },

  toJSON(message: QueryThoughtStatsResponse): unknown {
    const obj: any = {};
    message.thoughtStats !== undefined && (obj.thoughtStats = message.thoughtStats ? ThoughtStats.toJSON(message.thoughtStats) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryThoughtStatsResponse>): QueryThoughtStatsResponse {
    const message = createBaseQueryThoughtStatsResponse();
    message.thoughtStats = object.thoughtStats !== undefined && object.thoughtStats !== null ? ThoughtStats.fromPartial(object.thoughtStats) : undefined;
    return message;
  }

};

function createBaseQueryThoughtsRequest(): QueryThoughtsRequest {
  return {};
}

export const QueryThoughtsRequest = {
  encode(_: QueryThoughtsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryThoughtsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryThoughtsRequest();

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

  fromJSON(_: any): QueryThoughtsRequest {
    return {};
  },

  toJSON(_: QueryThoughtsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryThoughtsRequest>): QueryThoughtsRequest {
    const message = createBaseQueryThoughtsRequest();
    return message;
  }

};

function createBaseQueryThoughtsResponse(): QueryThoughtsResponse {
  return {
    thoughts: []
  };
}

export const QueryThoughtsResponse = {
  encode(message: QueryThoughtsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.thoughts) {
      Thought.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryThoughtsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryThoughtsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.thoughts.push(Thought.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryThoughtsResponse {
    return {
      thoughts: Array.isArray(object?.thoughts) ? object.thoughts.map((e: any) => Thought.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryThoughtsResponse): unknown {
    const obj: any = {};

    if (message.thoughts) {
      obj.thoughts = message.thoughts.map(e => e ? Thought.toJSON(e) : undefined);
    } else {
      obj.thoughts = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<QueryThoughtsResponse>): QueryThoughtsResponse {
    const message = createBaseQueryThoughtsResponse();
    message.thoughts = object.thoughts?.map(e => Thought.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryThoughtsStatsRequest(): QueryThoughtsStatsRequest {
  return {};
}

export const QueryThoughtsStatsRequest = {
  encode(_: QueryThoughtsStatsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryThoughtsStatsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryThoughtsStatsRequest();

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

  fromJSON(_: any): QueryThoughtsStatsRequest {
    return {};
  },

  toJSON(_: QueryThoughtsStatsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryThoughtsStatsRequest>): QueryThoughtsStatsRequest {
    const message = createBaseQueryThoughtsStatsRequest();
    return message;
  }

};

function createBaseQueryThoughtsStatsResponse(): QueryThoughtsStatsResponse {
  return {
    thoughtsStats: []
  };
}

export const QueryThoughtsStatsResponse = {
  encode(message: QueryThoughtsStatsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.thoughtsStats) {
      ThoughtStats.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryThoughtsStatsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryThoughtsStatsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.thoughtsStats.push(ThoughtStats.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryThoughtsStatsResponse {
    return {
      thoughtsStats: Array.isArray(object?.thoughtsStats) ? object.thoughtsStats.map((e: any) => ThoughtStats.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryThoughtsStatsResponse): unknown {
    const obj: any = {};

    if (message.thoughtsStats) {
      obj.thoughtsStats = message.thoughtsStats.map(e => e ? ThoughtStats.toJSON(e) : undefined);
    } else {
      obj.thoughtsStats = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<QueryThoughtsStatsResponse>): QueryThoughtsStatsResponse {
    const message = createBaseQueryThoughtsStatsResponse();
    message.thoughtsStats = object.thoughtsStats?.map(e => ThoughtStats.fromPartial(e)) || [];
    return message;
  }

};