import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";
export interface ListItem {
  id: number;
  value: string;
}
export interface OrderedList {
  data: ListItem[];
}

function createBaseListItem(): ListItem {
  return {
    id: 0,
    value: ""
  };
}

export const ListItem = {
  encode(message: ListItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }

    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListItem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListItem();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;

        case 2:
          message.value = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ListItem {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      value: isSet(object.value) ? String(object.value) : ""
    };
  },

  toJSON(message: ListItem): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<ListItem>): ListItem {
    const message = createBaseListItem();
    message.id = object.id ?? 0;
    message.value = object.value ?? "";
    return message;
  }

};

function createBaseOrderedList(): OrderedList {
  return {
    data: []
  };
}

export const OrderedList = {
  encode(message: OrderedList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.data) {
      ListItem.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderedList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderedList();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.data.push(ListItem.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): OrderedList {
    return {
      data: Array.isArray(object?.data) ? object.data.map((e: any) => ListItem.fromJSON(e)) : []
    };
  },

  toJSON(message: OrderedList): unknown {
    const obj: any = {};

    if (message.data) {
      obj.data = message.data.map(e => e ? ListItem.toJSON(e) : undefined);
    } else {
      obj.data = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<OrderedList>): OrderedList {
    const message = createBaseOrderedList();
    message.data = object.data?.map(e => ListItem.fromPartial(e)) || [];
    return message;
  }

};