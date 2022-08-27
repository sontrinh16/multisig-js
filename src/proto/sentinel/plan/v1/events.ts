import { Status, statusFromJSON, statusToJSON } from "../../types/v1/status";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, DeepPartial } from "@osmonauts/helpers";
export interface EventAdd {
  id: Long;
  provider: string;
}
export interface EventSetStatus {
  id: Long;
  provider: string;
  status: Status;
}
export interface EventAddNode {
  id: Long;
  node: string;
  provider: string;
}
export interface EventRemoveNode {
  id: Long;
  node: string;
  provider: string;
}

function createBaseEventAdd(): EventAdd {
  return {
    id: Long.UZERO,
    provider: ""
  };
}

export const EventAdd = {
  encode(message: EventAdd, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (message.provider !== "") {
      writer.uint32(18).string(message.provider);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventAdd {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAdd();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.provider = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventAdd {
    return {
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
      provider: isSet(object.provider) ? String(object.provider) : ""
    };
  },

  toJSON(message: EventAdd): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.provider !== undefined && (obj.provider = message.provider);
    return obj;
  },

  fromPartial(object: DeepPartial<EventAdd>): EventAdd {
    const message = createBaseEventAdd();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.provider = object.provider ?? "";
    return message;
  }

};

function createBaseEventSetStatus(): EventSetStatus {
  return {
    id: Long.UZERO,
    provider: "",
    status: 0
  };
}

export const EventSetStatus = {
  encode(message: EventSetStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (message.provider !== "") {
      writer.uint32(18).string(message.provider);
    }

    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSetStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetStatus();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.provider = reader.string();
          break;

        case 3:
          message.status = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventSetStatus {
    return {
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
      provider: isSet(object.provider) ? String(object.provider) : "",
      status: isSet(object.status) ? statusFromJSON(object.status) : 0
    };
  },

  toJSON(message: EventSetStatus): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.provider !== undefined && (obj.provider = message.provider);
    message.status !== undefined && (obj.status = statusToJSON(message.status));
    return obj;
  },

  fromPartial(object: DeepPartial<EventSetStatus>): EventSetStatus {
    const message = createBaseEventSetStatus();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.provider = object.provider ?? "";
    message.status = object.status ?? 0;
    return message;
  }

};

function createBaseEventAddNode(): EventAddNode {
  return {
    id: Long.UZERO,
    node: "",
    provider: ""
  };
}

export const EventAddNode = {
  encode(message: EventAddNode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (message.node !== "") {
      writer.uint32(18).string(message.node);
    }

    if (message.provider !== "") {
      writer.uint32(26).string(message.provider);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventAddNode {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAddNode();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.node = reader.string();
          break;

        case 3:
          message.provider = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventAddNode {
    return {
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
      node: isSet(object.node) ? String(object.node) : "",
      provider: isSet(object.provider) ? String(object.provider) : ""
    };
  },

  toJSON(message: EventAddNode): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.node !== undefined && (obj.node = message.node);
    message.provider !== undefined && (obj.provider = message.provider);
    return obj;
  },

  fromPartial(object: DeepPartial<EventAddNode>): EventAddNode {
    const message = createBaseEventAddNode();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.node = object.node ?? "";
    message.provider = object.provider ?? "";
    return message;
  }

};

function createBaseEventRemoveNode(): EventRemoveNode {
  return {
    id: Long.UZERO,
    node: "",
    provider: ""
  };
}

export const EventRemoveNode = {
  encode(message: EventRemoveNode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (message.node !== "") {
      writer.uint32(18).string(message.node);
    }

    if (message.provider !== "") {
      writer.uint32(26).string(message.provider);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventRemoveNode {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRemoveNode();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.node = reader.string();
          break;

        case 3:
          message.provider = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventRemoveNode {
    return {
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
      node: isSet(object.node) ? String(object.node) : "",
      provider: isSet(object.provider) ? String(object.provider) : ""
    };
  },

  toJSON(message: EventRemoveNode): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.node !== undefined && (obj.node = message.node);
    message.provider !== undefined && (obj.provider = message.provider);
    return obj;
  },

  fromPartial(object: DeepPartial<EventRemoveNode>): EventRemoveNode {
    const message = createBaseEventRemoveNode();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.node = object.node ?? "";
    message.provider = object.provider ?? "";
    return message;
  }

};