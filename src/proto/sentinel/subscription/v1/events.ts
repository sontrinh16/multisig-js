import { Status, statusFromJSON, statusToJSON } from "../../types/v1/status";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, DeepPartial } from "@osmonauts/helpers";
export interface EventSubscribe {
  id: Long;
  node: string;
  plan: Long;
}
export interface EventSetStatus {
  id: Long;
  status: Status;
}
export interface EventAddQuota {
  id: Long;
  address: string;
}
export interface EventUpdateQuota {
  id: Long;
  address: string;
}

function createBaseEventSubscribe(): EventSubscribe {
  return {
    id: Long.UZERO,
    node: "",
    plan: Long.UZERO
  };
}

export const EventSubscribe = {
  encode(message: EventSubscribe, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (message.node !== "") {
      writer.uint32(18).string(message.node);
    }

    if (!message.plan.isZero()) {
      writer.uint32(24).uint64(message.plan);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSubscribe {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSubscribe();

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
          message.plan = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventSubscribe {
    return {
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
      node: isSet(object.node) ? String(object.node) : "",
      plan: isSet(object.plan) ? Long.fromString(object.plan) : Long.UZERO
    };
  },

  toJSON(message: EventSubscribe): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.node !== undefined && (obj.node = message.node);
    message.plan !== undefined && (obj.plan = (message.plan || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<EventSubscribe>): EventSubscribe {
    const message = createBaseEventSubscribe();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.node = object.node ?? "";
    message.plan = object.plan !== undefined && object.plan !== null ? Long.fromValue(object.plan) : Long.UZERO;
    return message;
  }

};

function createBaseEventSetStatus(): EventSetStatus {
  return {
    id: Long.UZERO,
    status: 0
  };
}

export const EventSetStatus = {
  encode(message: EventSetStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
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
      status: isSet(object.status) ? statusFromJSON(object.status) : 0
    };
  },

  toJSON(message: EventSetStatus): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.status !== undefined && (obj.status = statusToJSON(message.status));
    return obj;
  },

  fromPartial(object: DeepPartial<EventSetStatus>): EventSetStatus {
    const message = createBaseEventSetStatus();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.status = object.status ?? 0;
    return message;
  }

};

function createBaseEventAddQuota(): EventAddQuota {
  return {
    id: Long.UZERO,
    address: ""
  };
}

export const EventAddQuota = {
  encode(message: EventAddQuota, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventAddQuota {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAddQuota();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventAddQuota {
    return {
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
      address: isSet(object.address) ? String(object.address) : ""
    };
  },

  toJSON(message: EventAddQuota): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<EventAddQuota>): EventAddQuota {
    const message = createBaseEventAddQuota();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.address = object.address ?? "";
    return message;
  }

};

function createBaseEventUpdateQuota(): EventUpdateQuota {
  return {
    id: Long.UZERO,
    address: ""
  };
}

export const EventUpdateQuota = {
  encode(message: EventUpdateQuota, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateQuota {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateQuota();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventUpdateQuota {
    return {
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
      address: isSet(object.address) ? String(object.address) : ""
    };
  },

  toJSON(message: EventUpdateQuota): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<EventUpdateQuota>): EventUpdateQuota {
    const message = createBaseEventUpdateQuota();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.address = object.address ?? "";
    return message;
  }

};