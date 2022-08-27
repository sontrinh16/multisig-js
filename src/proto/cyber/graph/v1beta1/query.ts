import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long, isSet } from "@osmonauts/helpers";
export interface QueryGraphStatsRequest {}
export interface QueryGraphStatsResponse {
  cyberlinks: Long;
  particles: Long;
}

function createBaseQueryGraphStatsRequest(): QueryGraphStatsRequest {
  return {};
}

export const QueryGraphStatsRequest = {
  encode(_: QueryGraphStatsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGraphStatsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGraphStatsRequest();

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

  fromJSON(_: any): QueryGraphStatsRequest {
    return {};
  },

  toJSON(_: QueryGraphStatsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryGraphStatsRequest>): QueryGraphStatsRequest {
    const message = createBaseQueryGraphStatsRequest();
    return message;
  }

};

function createBaseQueryGraphStatsResponse(): QueryGraphStatsResponse {
  return {
    cyberlinks: Long.UZERO,
    particles: Long.UZERO
  };
}

export const QueryGraphStatsResponse = {
  encode(message: QueryGraphStatsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.cyberlinks.isZero()) {
      writer.uint32(8).uint64(message.cyberlinks);
    }

    if (!message.particles.isZero()) {
      writer.uint32(16).uint64(message.particles);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGraphStatsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGraphStatsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.cyberlinks = (reader.uint64() as Long);
          break;

        case 2:
          message.particles = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGraphStatsResponse {
    return {
      cyberlinks: isSet(object.cyberlinks) ? Long.fromString(object.cyberlinks) : Long.UZERO,
      particles: isSet(object.particles) ? Long.fromString(object.particles) : Long.UZERO
    };
  },

  toJSON(message: QueryGraphStatsResponse): unknown {
    const obj: any = {};
    message.cyberlinks !== undefined && (obj.cyberlinks = (message.cyberlinks || Long.UZERO).toString());
    message.particles !== undefined && (obj.particles = (message.particles || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGraphStatsResponse>): QueryGraphStatsResponse {
    const message = createBaseQueryGraphStatsResponse();
    message.cyberlinks = object.cyberlinks !== undefined && object.cyberlinks !== null ? Long.fromValue(object.cyberlinks) : Long.UZERO;
    message.particles = object.particles !== undefined && object.particles !== null ? Long.fromValue(object.particles) : Long.UZERO;
    return message;
  }

};