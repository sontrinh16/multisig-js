import { Status, statusFromJSON, statusToJSON } from "../../types/v1/status";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";
export interface EventRegister {
  address: string;
  provider: string;
}
export interface EventUpdate {
  address: string;
  provider: string;
}
export interface EventSetStatus {
  address: string;
  status: Status;
}

function createBaseEventRegister(): EventRegister {
  return {
    address: "",
    provider: ""
  };
}

export const EventRegister = {
  encode(message: EventRegister, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (message.provider !== "") {
      writer.uint32(18).string(message.provider);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventRegister {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRegister();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
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

  fromJSON(object: any): EventRegister {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      provider: isSet(object.provider) ? String(object.provider) : ""
    };
  },

  toJSON(message: EventRegister): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.provider !== undefined && (obj.provider = message.provider);
    return obj;
  },

  fromPartial(object: DeepPartial<EventRegister>): EventRegister {
    const message = createBaseEventRegister();
    message.address = object.address ?? "";
    message.provider = object.provider ?? "";
    return message;
  }

};

function createBaseEventUpdate(): EventUpdate {
  return {
    address: "",
    provider: ""
  };
}

export const EventUpdate = {
  encode(message: EventUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (message.provider !== "") {
      writer.uint32(18).string(message.provider);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdate();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
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

  fromJSON(object: any): EventUpdate {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      provider: isSet(object.provider) ? String(object.provider) : ""
    };
  },

  toJSON(message: EventUpdate): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.provider !== undefined && (obj.provider = message.provider);
    return obj;
  },

  fromPartial(object: DeepPartial<EventUpdate>): EventUpdate {
    const message = createBaseEventUpdate();
    message.address = object.address ?? "";
    message.provider = object.provider ?? "";
    return message;
  }

};

function createBaseEventSetStatus(): EventSetStatus {
  return {
    address: "",
    status: 0
  };
}

export const EventSetStatus = {
  encode(message: EventSetStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
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
          message.address = reader.string();
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
      address: isSet(object.address) ? String(object.address) : "",
      status: isSet(object.status) ? statusFromJSON(object.status) : 0
    };
  },

  toJSON(message: EventSetStatus): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.status !== undefined && (obj.status = statusToJSON(message.status));
    return obj;
  },

  fromPartial(object: DeepPartial<EventSetStatus>): EventSetStatus {
    const message = createBaseEventSetStatus();
    message.address = object.address ?? "";
    message.status = object.status ?? 0;
    return message;
  }

};