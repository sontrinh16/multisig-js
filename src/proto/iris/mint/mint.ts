import { Timestamp } from "../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { isSet, fromJsonTimestamp, fromTimestamp, DeepPartial } from "@osmonauts/helpers";

/** Minter represents the minting state */
export interface Minter {
  /** time which the last update was made to the minter */
  lastUpdate: Timestamp;

  /** base inflation */
  inflationBase: string;
}

/** Params defines mint module's parameters */
export interface Params {
  /** type of coin to mint */
  mintDenom: string;

  /** inflation rate */
  inflation: string;
}

function createBaseMinter(): Minter {
  return {
    lastUpdate: undefined,
    inflationBase: ""
  };
}

export const Minter = {
  encode(message: Minter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lastUpdate !== undefined) {
      Timestamp.encode(message.lastUpdate, writer.uint32(10).fork()).ldelim();
    }

    if (message.inflationBase !== "") {
      writer.uint32(18).string(message.inflationBase);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Minter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMinter();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.lastUpdate = Timestamp.decode(reader, reader.uint32());
          break;

        case 2:
          message.inflationBase = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Minter {
    return {
      lastUpdate: isSet(object.lastUpdate) ? fromJsonTimestamp(object.lastUpdate) : undefined,
      inflationBase: isSet(object.inflationBase) ? String(object.inflationBase) : ""
    };
  },

  toJSON(message: Minter): unknown {
    const obj: any = {};
    message.lastUpdate !== undefined && (obj.lastUpdate = fromTimestamp(message.lastUpdate).toISOString());
    message.inflationBase !== undefined && (obj.inflationBase = message.inflationBase);
    return obj;
  },

  fromPartial(object: DeepPartial<Minter>): Minter {
    const message = createBaseMinter();
    message.lastUpdate = object.lastUpdate !== undefined && object.lastUpdate !== null ? Timestamp.fromPartial(object.lastUpdate) : undefined;
    message.inflationBase = object.inflationBase ?? "";
    return message;
  }

};

function createBaseParams(): Params {
  return {
    mintDenom: "",
    inflation: ""
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mintDenom !== "") {
      writer.uint32(10).string(message.mintDenom);
    }

    if (message.inflation !== "") {
      writer.uint32(18).string(message.inflation);
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
          message.mintDenom = reader.string();
          break;

        case 2:
          message.inflation = reader.string();
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
      mintDenom: isSet(object.mintDenom) ? String(object.mintDenom) : "",
      inflation: isSet(object.inflation) ? String(object.inflation) : ""
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.mintDenom !== undefined && (obj.mintDenom = message.mintDenom);
    message.inflation !== undefined && (obj.inflation = message.inflation);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.mintDenom = object.mintDenom ?? "";
    message.inflation = object.inflation ?? "";
    return message;
  }

};