import * as _m0 from "protobufjs/minimal";
import { Long, isSet, DeepPartial } from "@osmonauts/helpers";

/** EventSell is an event emitted when a sell order is created. */
export interface EventSell {
  /** order_id is the unique identifier of the sell order. */
  orderId: Long;
}

/** EventUpdateSellOrder is an event emitted when a sell order is updated. */
export interface EventUpdateSellOrder {
  /** order_id is the unique identifier of the sell order. */
  orderId: Long;
}

/**
 * EventAllowDenom is an event emitted when a new denom is added for use in the
 * marketplace.
 */
export interface EventAllowDenom {
  /**
   * denom is the bank denom (e.g. ibc/GLKHDSG423SGS) added to the list of
   * allowed denoms for use in the marketplace.
   */
  denom: string;
}

function createBaseEventSell(): EventSell {
  return {
    orderId: Long.UZERO
  };
}

export const EventSell = {
  encode(message: EventSell, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.orderId.isZero()) {
      writer.uint32(8).uint64(message.orderId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSell {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSell();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.orderId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventSell {
    return {
      orderId: isSet(object.orderId) ? Long.fromString(object.orderId) : Long.UZERO
    };
  },

  toJSON(message: EventSell): unknown {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = (message.orderId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<EventSell>): EventSell {
    const message = createBaseEventSell();
    message.orderId = object.orderId !== undefined && object.orderId !== null ? Long.fromValue(object.orderId) : Long.UZERO;
    return message;
  }

};

function createBaseEventUpdateSellOrder(): EventUpdateSellOrder {
  return {
    orderId: Long.UZERO
  };
}

export const EventUpdateSellOrder = {
  encode(message: EventUpdateSellOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.orderId.isZero()) {
      writer.uint32(8).uint64(message.orderId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateSellOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateSellOrder();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.orderId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventUpdateSellOrder {
    return {
      orderId: isSet(object.orderId) ? Long.fromString(object.orderId) : Long.UZERO
    };
  },

  toJSON(message: EventUpdateSellOrder): unknown {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = (message.orderId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<EventUpdateSellOrder>): EventUpdateSellOrder {
    const message = createBaseEventUpdateSellOrder();
    message.orderId = object.orderId !== undefined && object.orderId !== null ? Long.fromValue(object.orderId) : Long.UZERO;
    return message;
  }

};

function createBaseEventAllowDenom(): EventAllowDenom {
  return {
    denom: ""
  };
}

export const EventAllowDenom = {
  encode(message: EventAllowDenom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventAllowDenom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAllowDenom();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventAllowDenom {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },

  toJSON(message: EventAllowDenom): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<EventAllowDenom>): EventAllowDenom {
    const message = createBaseEventAllowDenom();
    message.denom = object.denom ?? "";
    return message;
  }

};