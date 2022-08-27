import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Long } from "@osmonauts/helpers";
export interface IBCParams {
  port: string;
  version: string;
}
export interface OracleParams {
  askCount: Long;
  minCount: Long;
  multiplier: Long;
}
export interface Params {
  ibc: IBCParams;
  oracle: OracleParams;
}

function createBaseIBCParams(): IBCParams {
  return {
    port: "",
    version: ""
  };
}

export const IBCParams = {
  encode(message: IBCParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.port !== "") {
      writer.uint32(10).string(message.port);
    }

    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IBCParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIBCParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.port = reader.string();
          break;

        case 2:
          message.version = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): IBCParams {
    return {
      port: isSet(object.port) ? String(object.port) : "",
      version: isSet(object.version) ? String(object.version) : ""
    };
  },

  toJSON(message: IBCParams): unknown {
    const obj: any = {};
    message.port !== undefined && (obj.port = message.port);
    message.version !== undefined && (obj.version = message.version);
    return obj;
  },

  fromPartial(object: DeepPartial<IBCParams>): IBCParams {
    const message = createBaseIBCParams();
    message.port = object.port ?? "";
    message.version = object.version ?? "";
    return message;
  }

};

function createBaseOracleParams(): OracleParams {
  return {
    askCount: Long.UZERO,
    minCount: Long.UZERO,
    multiplier: Long.UZERO
  };
}

export const OracleParams = {
  encode(message: OracleParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.askCount.isZero()) {
      writer.uint32(8).uint64(message.askCount);
    }

    if (!message.minCount.isZero()) {
      writer.uint32(16).uint64(message.minCount);
    }

    if (!message.multiplier.isZero()) {
      writer.uint32(24).uint64(message.multiplier);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OracleParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOracleParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.askCount = (reader.uint64() as Long);
          break;

        case 2:
          message.minCount = (reader.uint64() as Long);
          break;

        case 3:
          message.multiplier = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): OracleParams {
    return {
      askCount: isSet(object.askCount) ? Long.fromString(object.askCount) : Long.UZERO,
      minCount: isSet(object.minCount) ? Long.fromString(object.minCount) : Long.UZERO,
      multiplier: isSet(object.multiplier) ? Long.fromString(object.multiplier) : Long.UZERO
    };
  },

  toJSON(message: OracleParams): unknown {
    const obj: any = {};
    message.askCount !== undefined && (obj.askCount = (message.askCount || Long.UZERO).toString());
    message.minCount !== undefined && (obj.minCount = (message.minCount || Long.UZERO).toString());
    message.multiplier !== undefined && (obj.multiplier = (message.multiplier || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<OracleParams>): OracleParams {
    const message = createBaseOracleParams();
    message.askCount = object.askCount !== undefined && object.askCount !== null ? Long.fromValue(object.askCount) : Long.UZERO;
    message.minCount = object.minCount !== undefined && object.minCount !== null ? Long.fromValue(object.minCount) : Long.UZERO;
    message.multiplier = object.multiplier !== undefined && object.multiplier !== null ? Long.fromValue(object.multiplier) : Long.UZERO;
    return message;
  }

};

function createBaseParams(): Params {
  return {
    ibc: undefined,
    oracle: undefined
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ibc !== undefined) {
      IBCParams.encode(message.ibc, writer.uint32(10).fork()).ldelim();
    }

    if (message.oracle !== undefined) {
      OracleParams.encode(message.oracle, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.ibc = IBCParams.decode(reader, reader.uint32());
          break;

        case 2:
          message.oracle = OracleParams.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Params {
    return {
      ibc: isSet(object.ibc) ? IBCParams.fromJSON(object.ibc) : undefined,
      oracle: isSet(object.oracle) ? OracleParams.fromJSON(object.oracle) : undefined
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.ibc !== undefined && (obj.ibc = message.ibc ? IBCParams.toJSON(message.ibc) : undefined);
    message.oracle !== undefined && (obj.oracle = message.oracle ? OracleParams.toJSON(message.oracle) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.ibc = object.ibc !== undefined && object.ibc !== null ? IBCParams.fromPartial(object.ibc) : undefined;
    message.oracle = object.oracle !== undefined && object.oracle !== null ? OracleParams.fromPartial(object.oracle) : undefined;
    return message;
  }

};