import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";
export interface Params {
  maxRoutes: number;
}
export interface Route {
  source: string;
  destination: string;
  name: string;
  value: Coin[];
}
export interface Value {
  value: Coin[];
}

function createBaseParams(): Params {
  return {
    maxRoutes: 0
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxRoutes !== 0) {
      writer.uint32(8).uint32(message.maxRoutes);
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
          message.maxRoutes = reader.uint32();
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
      maxRoutes: isSet(object.maxRoutes) ? Number(object.maxRoutes) : 0
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.maxRoutes !== undefined && (obj.maxRoutes = Math.round(message.maxRoutes));
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.maxRoutes = object.maxRoutes ?? 0;
    return message;
  }

};

function createBaseRoute(): Route {
  return {
    source: "",
    destination: "",
    name: "",
    value: []
  };
}

export const Route = {
  encode(message: Route, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.source !== "") {
      writer.uint32(10).string(message.source);
    }

    if (message.destination !== "") {
      writer.uint32(18).string(message.destination);
    }

    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }

    for (const v of message.value) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Route {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoute();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.source = reader.string();
          break;

        case 2:
          message.destination = reader.string();
          break;

        case 3:
          message.name = reader.string();
          break;

        case 4:
          message.value.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Route {
    return {
      source: isSet(object.source) ? String(object.source) : "",
      destination: isSet(object.destination) ? String(object.destination) : "",
      name: isSet(object.name) ? String(object.name) : "",
      value: Array.isArray(object?.value) ? object.value.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: Route): unknown {
    const obj: any = {};
    message.source !== undefined && (obj.source = message.source);
    message.destination !== undefined && (obj.destination = message.destination);
    message.name !== undefined && (obj.name = message.name);

    if (message.value) {
      obj.value = message.value.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.value = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<Route>): Route {
    const message = createBaseRoute();
    message.source = object.source ?? "";
    message.destination = object.destination ?? "";
    message.name = object.name ?? "";
    message.value = object.value?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseValue(): Value {
  return {
    value: []
  };
}

export const Value = {
  encode(message: Value, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.value) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Value {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValue();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.value.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Value {
    return {
      value: Array.isArray(object?.value) ? object.value.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: Value): unknown {
    const obj: any = {};

    if (message.value) {
      obj.value = message.value.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.value = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<Value>): Value {
    const message = createBaseValue();
    message.value = object.value?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};