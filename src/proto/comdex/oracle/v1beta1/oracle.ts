import * as _m0 from "protobufjs/minimal";
import { Long, isSet, DeepPartial } from "@osmonauts/helpers";
export interface Market {
  symbol: string;
  scriptId: Long;
}
export interface Calldata {
  symbols: string[];
  multiplier: Long;
}
export interface Result {
  rates: Long[];
}

function createBaseMarket(): Market {
  return {
    symbol: "",
    scriptId: Long.UZERO
  };
}

export const Market = {
  encode(message: Market, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }

    if (!message.scriptId.isZero()) {
      writer.uint32(16).uint64(message.scriptId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Market {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarket();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.symbol = reader.string();
          break;

        case 2:
          message.scriptId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Market {
    return {
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      scriptId: isSet(object.scriptId) ? Long.fromString(object.scriptId) : Long.UZERO
    };
  },

  toJSON(message: Market): unknown {
    const obj: any = {};
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.scriptId !== undefined && (obj.scriptId = (message.scriptId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<Market>): Market {
    const message = createBaseMarket();
    message.symbol = object.symbol ?? "";
    message.scriptId = object.scriptId !== undefined && object.scriptId !== null ? Long.fromValue(object.scriptId) : Long.UZERO;
    return message;
  }

};

function createBaseCalldata(): Calldata {
  return {
    symbols: [],
    multiplier: Long.UZERO
  };
}

export const Calldata = {
  encode(message: Calldata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.symbols) {
      writer.uint32(10).string(v!);
    }

    if (!message.multiplier.isZero()) {
      writer.uint32(16).uint64(message.multiplier);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Calldata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCalldata();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.symbols.push(reader.string());
          break;

        case 2:
          message.multiplier = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Calldata {
    return {
      symbols: Array.isArray(object?.symbols) ? object.symbols.map((e: any) => String(e)) : [],
      multiplier: isSet(object.multiplier) ? Long.fromString(object.multiplier) : Long.UZERO
    };
  },

  toJSON(message: Calldata): unknown {
    const obj: any = {};

    if (message.symbols) {
      obj.symbols = message.symbols.map(e => e);
    } else {
      obj.symbols = [];
    }

    message.multiplier !== undefined && (obj.multiplier = (message.multiplier || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<Calldata>): Calldata {
    const message = createBaseCalldata();
    message.symbols = object.symbols?.map(e => e) || [];
    message.multiplier = object.multiplier !== undefined && object.multiplier !== null ? Long.fromValue(object.multiplier) : Long.UZERO;
    return message;
  }

};

function createBaseResult(): Result {
  return {
    rates: []
  };
}

export const Result = {
  encode(message: Result, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();

    for (const v of message.rates) {
      writer.uint64(v);
    }

    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Result {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResult();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.rates.push((reader.uint64() as Long));
            }
          } else {
            message.rates.push((reader.uint64() as Long));
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Result {
    return {
      rates: Array.isArray(object?.rates) ? object.rates.map((e: any) => Long.fromString(e)) : []
    };
  },

  toJSON(message: Result): unknown {
    const obj: any = {};

    if (message.rates) {
      obj.rates = message.rates.map(e => (e || Long.UZERO).toString());
    } else {
      obj.rates = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<Result>): Result {
    const message = createBaseResult();
    message.rates = object.rates?.map(e => Long.fromValue(e)) || [];
    return message;
  }

};