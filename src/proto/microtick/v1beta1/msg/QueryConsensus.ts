import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";
export interface QueryConsensusRequest {
  market: string;
}
export interface QueryConsensusResponse {
  market: string;
  consensus: DecCoin;
  totalBacking: DecCoin;
  totalWeight: DecCoin;
}

function createBaseQueryConsensusRequest(): QueryConsensusRequest {
  return {
    market: ""
  };
}

export const QueryConsensusRequest = {
  encode(message: QueryConsensusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.market !== "") {
      writer.uint32(10).string(message.market);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryConsensusRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConsensusRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.market = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryConsensusRequest {
    return {
      market: isSet(object.market) ? String(object.market) : ""
    };
  },

  toJSON(message: QueryConsensusRequest): unknown {
    const obj: any = {};
    message.market !== undefined && (obj.market = message.market);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryConsensusRequest>): QueryConsensusRequest {
    const message = createBaseQueryConsensusRequest();
    message.market = object.market ?? "";
    return message;
  }

};

function createBaseQueryConsensusResponse(): QueryConsensusResponse {
  return {
    market: "",
    consensus: undefined,
    totalBacking: undefined,
    totalWeight: undefined
  };
}

export const QueryConsensusResponse = {
  encode(message: QueryConsensusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.market !== "") {
      writer.uint32(10).string(message.market);
    }

    if (message.consensus !== undefined) {
      DecCoin.encode(message.consensus, writer.uint32(18).fork()).ldelim();
    }

    if (message.totalBacking !== undefined) {
      DecCoin.encode(message.totalBacking, writer.uint32(26).fork()).ldelim();
    }

    if (message.totalWeight !== undefined) {
      DecCoin.encode(message.totalWeight, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryConsensusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConsensusResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.market = reader.string();
          break;

        case 2:
          message.consensus = DecCoin.decode(reader, reader.uint32());
          break;

        case 3:
          message.totalBacking = DecCoin.decode(reader, reader.uint32());
          break;

        case 4:
          message.totalWeight = DecCoin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryConsensusResponse {
    return {
      market: isSet(object.market) ? String(object.market) : "",
      consensus: isSet(object.consensus) ? DecCoin.fromJSON(object.consensus) : undefined,
      totalBacking: isSet(object.totalBacking) ? DecCoin.fromJSON(object.totalBacking) : undefined,
      totalWeight: isSet(object.totalWeight) ? DecCoin.fromJSON(object.totalWeight) : undefined
    };
  },

  toJSON(message: QueryConsensusResponse): unknown {
    const obj: any = {};
    message.market !== undefined && (obj.market = message.market);
    message.consensus !== undefined && (obj.consensus = message.consensus ? DecCoin.toJSON(message.consensus) : undefined);
    message.totalBacking !== undefined && (obj.totalBacking = message.totalBacking ? DecCoin.toJSON(message.totalBacking) : undefined);
    message.totalWeight !== undefined && (obj.totalWeight = message.totalWeight ? DecCoin.toJSON(message.totalWeight) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryConsensusResponse>): QueryConsensusResponse {
    const message = createBaseQueryConsensusResponse();
    message.market = object.market ?? "";
    message.consensus = object.consensus !== undefined && object.consensus !== null ? DecCoin.fromPartial(object.consensus) : undefined;
    message.totalBacking = object.totalBacking !== undefined && object.totalBacking !== null ? DecCoin.fromPartial(object.totalBacking) : undefined;
    message.totalWeight = object.totalWeight !== undefined && object.totalWeight !== null ? DecCoin.fromPartial(object.totalWeight) : undefined;
    return message;
  }

};