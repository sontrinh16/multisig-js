import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, isObject, bytesFromBase64, base64FromBytes } from "@osmonauts/helpers";
export interface QueueState_ItemsEntry {
  key: string;
  value: Item;
}
export interface QueueState {
  items: {
    [key: string]: QueueState_Item;
  };
}
export interface QueueState_Item {
  key: Uint8Array;
  value: Uint8Array;
}

function createBaseQueueState_ItemsEntry(): QueueState_ItemsEntry {
  return {
    key: "",
    value: undefined
  };
}

export const QueueState_ItemsEntry = {
  encode(message: QueueState_ItemsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (message.value !== undefined) {
      Item.encode(message.value, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueueState_ItemsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueueState_ItemsEntry();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;

        case 2:
          message.value = Item.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueueState_ItemsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Item.fromJSON(object.value) : undefined
    };
  },

  toJSON(message: QueueState_ItemsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? Item.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueueState_ItemsEntry>): QueueState_ItemsEntry {
    const message = createBaseQueueState_ItemsEntry();
    message.key = object.key ?? "";
    message.value = object.value !== undefined && object.value !== null ? Item.fromPartial(object.value) : undefined;
    return message;
  }

};

function createBaseQueueState(): QueueState {
  return {
    items: {}
  };
}

export const QueueState = {
  encode(message: QueueState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.items).forEach(([key, value]) => {
      QueueState_ItemsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueueState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueueState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          const entry1 = QueueState_ItemsEntry.decode(reader, reader.uint32());

          if (entry1.value !== undefined) {
            message.items[entry1.key] = entry1.value;
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueueState {
    return {
      items: isObject(object.items) ? Object.entries(object.items).reduce<{
        [key: string]: Item;
      }>((acc, [key, value]) => {
        acc[key] = Item.fromJSON(value);
        return acc;
      }, {}) : {}
    };
  },

  toJSON(message: QueueState): unknown {
    const obj: any = {};
    obj.items = {};

    if (message.items) {
      Object.entries(message.items).forEach(([k, v]) => {
        obj.items[k] = Item.toJSON(v);
      });
    }

    return obj;
  },

  fromPartial(object: DeepPartial<QueueState>): QueueState {
    const message = createBaseQueueState();
    message.items = Object.entries(object.items ?? {}).reduce<{
      [key: string]: Item;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Item.fromPartial(value);
      }

      return acc;
    }, {});
    return message;
  }

};

function createBaseQueueState_Item(): QueueState_Item {
  return {
    key: new Uint8Array(),
    value: new Uint8Array()
  };
}

export const QueueState_Item = {
  encode(message: QueueState_Item, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }

    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueueState_Item {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueueState_Item();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;

        case 2:
          message.value = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueueState_Item {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array()
    };
  },

  toJSON(message: QueueState_Item): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    message.value !== undefined && (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<QueueState_Item>): QueueState_Item {
    const message = createBaseQueueState_Item();
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    return message;
  }

};