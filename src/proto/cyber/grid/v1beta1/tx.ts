import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";
export interface MsgCreateRoute {
  source: string;
  destination: string;
  name: string;
}
export interface MsgEditRoute {
  source: string;
  destination: string;
  value: Coin;
}
export interface MsgDeleteRoute {
  source: string;
  destination: string;
}
export interface MsgEditRouteName {
  source: string;
  destination: string;
  name: string;
}
export interface MsgCreateRouteResponse {}
export interface MsgEditRouteResponse {}
export interface MsgDeleteRouteResponse {}
export interface MsgEditRouteNameResponse {}

function createBaseMsgCreateRoute(): MsgCreateRoute {
  return {
    source: "",
    destination: "",
    name: ""
  };
}

export const MsgCreateRoute = {
  encode(message: MsgCreateRoute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.source !== "") {
      writer.uint32(10).string(message.source);
    }

    if (message.destination !== "") {
      writer.uint32(18).string(message.destination);
    }

    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateRoute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateRoute();

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

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateRoute {
    return {
      source: isSet(object.source) ? String(object.source) : "",
      destination: isSet(object.destination) ? String(object.destination) : "",
      name: isSet(object.name) ? String(object.name) : ""
    };
  },

  toJSON(message: MsgCreateRoute): unknown {
    const obj: any = {};
    message.source !== undefined && (obj.source = message.source);
    message.destination !== undefined && (obj.destination = message.destination);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateRoute>): MsgCreateRoute {
    const message = createBaseMsgCreateRoute();
    message.source = object.source ?? "";
    message.destination = object.destination ?? "";
    message.name = object.name ?? "";
    return message;
  }

};

function createBaseMsgEditRoute(): MsgEditRoute {
  return {
    source: "",
    destination: "",
    value: undefined
  };
}

export const MsgEditRoute = {
  encode(message: MsgEditRoute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.source !== "") {
      writer.uint32(10).string(message.source);
    }

    if (message.destination !== "") {
      writer.uint32(18).string(message.destination);
    }

    if (message.value !== undefined) {
      Coin.encode(message.value, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditRoute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditRoute();

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
          message.value = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgEditRoute {
    return {
      source: isSet(object.source) ? String(object.source) : "",
      destination: isSet(object.destination) ? String(object.destination) : "",
      value: isSet(object.value) ? Coin.fromJSON(object.value) : undefined
    };
  },

  toJSON(message: MsgEditRoute): unknown {
    const obj: any = {};
    message.source !== undefined && (obj.source = message.source);
    message.destination !== undefined && (obj.destination = message.destination);
    message.value !== undefined && (obj.value = message.value ? Coin.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgEditRoute>): MsgEditRoute {
    const message = createBaseMsgEditRoute();
    message.source = object.source ?? "";
    message.destination = object.destination ?? "";
    message.value = object.value !== undefined && object.value !== null ? Coin.fromPartial(object.value) : undefined;
    return message;
  }

};

function createBaseMsgDeleteRoute(): MsgDeleteRoute {
  return {
    source: "",
    destination: ""
  };
}

export const MsgDeleteRoute = {
  encode(message: MsgDeleteRoute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.source !== "") {
      writer.uint32(10).string(message.source);
    }

    if (message.destination !== "") {
      writer.uint32(18).string(message.destination);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteRoute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteRoute();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.source = reader.string();
          break;

        case 2:
          message.destination = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgDeleteRoute {
    return {
      source: isSet(object.source) ? String(object.source) : "",
      destination: isSet(object.destination) ? String(object.destination) : ""
    };
  },

  toJSON(message: MsgDeleteRoute): unknown {
    const obj: any = {};
    message.source !== undefined && (obj.source = message.source);
    message.destination !== undefined && (obj.destination = message.destination);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteRoute>): MsgDeleteRoute {
    const message = createBaseMsgDeleteRoute();
    message.source = object.source ?? "";
    message.destination = object.destination ?? "";
    return message;
  }

};

function createBaseMsgEditRouteName(): MsgEditRouteName {
  return {
    source: "",
    destination: "",
    name: ""
  };
}

export const MsgEditRouteName = {
  encode(message: MsgEditRouteName, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.source !== "") {
      writer.uint32(10).string(message.source);
    }

    if (message.destination !== "") {
      writer.uint32(18).string(message.destination);
    }

    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditRouteName {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditRouteName();

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

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgEditRouteName {
    return {
      source: isSet(object.source) ? String(object.source) : "",
      destination: isSet(object.destination) ? String(object.destination) : "",
      name: isSet(object.name) ? String(object.name) : ""
    };
  },

  toJSON(message: MsgEditRouteName): unknown {
    const obj: any = {};
    message.source !== undefined && (obj.source = message.source);
    message.destination !== undefined && (obj.destination = message.destination);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgEditRouteName>): MsgEditRouteName {
    const message = createBaseMsgEditRouteName();
    message.source = object.source ?? "";
    message.destination = object.destination ?? "";
    message.name = object.name ?? "";
    return message;
  }

};

function createBaseMsgCreateRouteResponse(): MsgCreateRouteResponse {
  return {};
}

export const MsgCreateRouteResponse = {
  encode(_: MsgCreateRouteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateRouteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateRouteResponse();

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

  fromJSON(_: any): MsgCreateRouteResponse {
    return {};
  },

  toJSON(_: MsgCreateRouteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreateRouteResponse>): MsgCreateRouteResponse {
    const message = createBaseMsgCreateRouteResponse();
    return message;
  }

};

function createBaseMsgEditRouteResponse(): MsgEditRouteResponse {
  return {};
}

export const MsgEditRouteResponse = {
  encode(_: MsgEditRouteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditRouteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditRouteResponse();

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

  fromJSON(_: any): MsgEditRouteResponse {
    return {};
  },

  toJSON(_: MsgEditRouteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgEditRouteResponse>): MsgEditRouteResponse {
    const message = createBaseMsgEditRouteResponse();
    return message;
  }

};

function createBaseMsgDeleteRouteResponse(): MsgDeleteRouteResponse {
  return {};
}

export const MsgDeleteRouteResponse = {
  encode(_: MsgDeleteRouteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteRouteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteRouteResponse();

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

  fromJSON(_: any): MsgDeleteRouteResponse {
    return {};
  },

  toJSON(_: MsgDeleteRouteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeleteRouteResponse>): MsgDeleteRouteResponse {
    const message = createBaseMsgDeleteRouteResponse();
    return message;
  }

};

function createBaseMsgEditRouteNameResponse(): MsgEditRouteNameResponse {
  return {};
}

export const MsgEditRouteNameResponse = {
  encode(_: MsgEditRouteNameResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditRouteNameResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditRouteNameResponse();

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

  fromJSON(_: any): MsgEditRouteNameResponse {
    return {};
  },

  toJSON(_: MsgEditRouteNameResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgEditRouteNameResponse>): MsgEditRouteNameResponse {
    const message = createBaseMsgEditRouteNameResponse();
    return message;
  }

};