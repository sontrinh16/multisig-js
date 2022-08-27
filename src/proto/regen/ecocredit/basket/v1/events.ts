import { BasketCredit } from "./types";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";

/** EventCreate is an event emitted when a basket is created. */
export interface EventCreate {
  /** basket_denom is the basket bank denom. */
  basketDenom: string;

  /**
   * curator is the address of the basket curator who is able to change certain
   * basket settings.
   * Deprecated: This field is still populated and will be removed in the
   * next version.
   */

  /** @deprecated */
  curator: string;
}

/**
 * EventPut is an event emitted when credits are put into a basket in return for
 * basket tokens.
 */
export interface EventPut {
  /** owner is the owner of the credits put into the basket. */
  owner: string;

  /** basket_denom is the basket bank denom that the credits were added to. */
  basketDenom: string;

  /**
   * credits are the credits that were added to the basket.
   * Deprecated: This field is still populated and will be removed in the
   * next version.
   */

  /** @deprecated */
  credits: BasketCredit[];

  /**
   * amount is the integer number of basket tokens converted from credits.
   * Deprecated: This field is still populated and will be removed in the
   * next version.
   */

  /** @deprecated */
  amount: string;
}

/**
 * EventTake is an event emitted when credits are taken from a basket starting
 * from the oldest credits first.
 */
export interface EventTake {
  /** owner is the owner of the credits taken from the basket. */
  owner: string;

  /** basket_denom is the basket bank denom that credits were taken from. */
  basketDenom: string;

  /**
   * credits are the credits that were taken from the basket.
   * Deprecated: This field is still populated and will be removed in the
   * next version.
   */

  /** @deprecated */
  credits: BasketCredit[];

  /**
   * amount is the integer number of basket tokens converted to credits.
   * Deprecated: This field is still populated and will be removed in the
   * next version.
   */

  /** @deprecated */
  amount: string;
}

function createBaseEventCreate(): EventCreate {
  return {
    basketDenom: "",
    curator: ""
  };
}

export const EventCreate = {
  encode(message: EventCreate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.basketDenom !== "") {
      writer.uint32(10).string(message.basketDenom);
    }

    if (message.curator !== "") {
      writer.uint32(18).string(message.curator);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreate();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.basketDenom = reader.string();
          break;

        case 2:
          message.curator = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventCreate {
    return {
      basketDenom: isSet(object.basketDenom) ? String(object.basketDenom) : "",
      curator: isSet(object.curator) ? String(object.curator) : ""
    };
  },

  toJSON(message: EventCreate): unknown {
    const obj: any = {};
    message.basketDenom !== undefined && (obj.basketDenom = message.basketDenom);
    message.curator !== undefined && (obj.curator = message.curator);
    return obj;
  },

  fromPartial(object: DeepPartial<EventCreate>): EventCreate {
    const message = createBaseEventCreate();
    message.basketDenom = object.basketDenom ?? "";
    message.curator = object.curator ?? "";
    return message;
  }

};

function createBaseEventPut(): EventPut {
  return {
    owner: "",
    basketDenom: "",
    credits: [],
    amount: ""
  };
}

export const EventPut = {
  encode(message: EventPut, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.basketDenom !== "") {
      writer.uint32(18).string(message.basketDenom);
    }

    for (const v of message.credits) {
      BasketCredit.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventPut {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPut();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.basketDenom = reader.string();
          break;

        case 3:
          message.credits.push(BasketCredit.decode(reader, reader.uint32()));
          break;

        case 4:
          message.amount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventPut {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      basketDenom: isSet(object.basketDenom) ? String(object.basketDenom) : "",
      credits: Array.isArray(object?.credits) ? object.credits.map((e: any) => BasketCredit.fromJSON(e)) : [],
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },

  toJSON(message: EventPut): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.basketDenom !== undefined && (obj.basketDenom = message.basketDenom);

    if (message.credits) {
      obj.credits = message.credits.map(e => e ? BasketCredit.toJSON(e) : undefined);
    } else {
      obj.credits = [];
    }

    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: DeepPartial<EventPut>): EventPut {
    const message = createBaseEventPut();
    message.owner = object.owner ?? "";
    message.basketDenom = object.basketDenom ?? "";
    message.credits = object.credits?.map(e => BasketCredit.fromPartial(e)) || [];
    message.amount = object.amount ?? "";
    return message;
  }

};

function createBaseEventTake(): EventTake {
  return {
    owner: "",
    basketDenom: "",
    credits: [],
    amount: ""
  };
}

export const EventTake = {
  encode(message: EventTake, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.basketDenom !== "") {
      writer.uint32(18).string(message.basketDenom);
    }

    for (const v of message.credits) {
      BasketCredit.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventTake {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventTake();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.basketDenom = reader.string();
          break;

        case 3:
          message.credits.push(BasketCredit.decode(reader, reader.uint32()));
          break;

        case 4:
          message.amount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventTake {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      basketDenom: isSet(object.basketDenom) ? String(object.basketDenom) : "",
      credits: Array.isArray(object?.credits) ? object.credits.map((e: any) => BasketCredit.fromJSON(e)) : [],
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },

  toJSON(message: EventTake): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.basketDenom !== undefined && (obj.basketDenom = message.basketDenom);

    if (message.credits) {
      obj.credits = message.credits.map(e => e ? BasketCredit.toJSON(e) : undefined);
    } else {
      obj.credits = [];
    }

    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: DeepPartial<EventTake>): EventTake {
    const message = createBaseEventTake();
    message.owner = object.owner ?? "";
    message.basketDenom = object.basketDenom ?? "";
    message.credits = object.credits?.map(e => BasketCredit.fromPartial(e)) || [];
    message.amount = object.amount ?? "";
    return message;
  }

};