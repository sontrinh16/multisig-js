import { DateCriteria } from "./types";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, bytesFromBase64, base64FromBytes, DeepPartial, toTimestamp, fromTimestamp, fromJsonTimestamp } from "@osmonauts/helpers";

/** Basket represents a basket in state. */
export interface Basket {
  /**
   * id is the uint64 ID of the basket. It is used internally for reducing
   * storage space.
   */
  id: Long;

  /** basket_denom is the basket bank denom. */
  basketDenom: string;

  /**
   * name is the unique name of the basket specified in MsgCreate. Basket
   * names must be unique across all credit types and choices of exponent
   * above and beyond the uniqueness constraint on basket_denom.
   */
  name: string;

  /**
   * disable_auto_retire indicates whether or not the credits will be retired
   * upon withdraw from the basket.
   */
  disableAutoRetire: boolean;

  /**
   * credit_type_abbrev is the abbreviation of the credit type this basket is
   * able to hold.
   */
  creditTypeAbbrev: string;

  /** date_criteria is the date criteria for batches admitted to the basket. */
  dateCriteria: DateCriteria;

  /** exponent is the exponent for converting credits to/from basket tokens. */
  exponent: number;

  /**
   * curator is the address of the basket curator who is able to change certain
   * basket settings.
   * 
   * Since Revision 1
   */
  curator: Uint8Array;
}

/** BasketClass describes a credit class that can be deposited in a basket. */
export interface BasketClass {
  /** basket_id is the ID of the basket */
  basketId: Long;

  /**
   * class_id is the id of the credit class that is allowed to be deposited in
   * the basket
   */
  classId: string;
}

/** BasketBalance stores the amount of credits from a batch in a basket */
export interface BasketBalance {
  /** basket_id is the ID of the basket */
  basketId: Long;

  /** batch_denom is the denom of the credit batch */
  batchDenom: string;

  /** balance is the amount of ecocredits held in the basket */
  balance: string;

  /**
   * batch_start_date is the start date of the batch. This field is used
   * to create an index which is used to remove the oldest credits first.
   */
  batchStartDate: Date;
}

function createBaseBasket(): Basket {
  return {
    id: Long.UZERO,
    basketDenom: "",
    name: "",
    disableAutoRetire: false,
    creditTypeAbbrev: "",
    dateCriteria: undefined,
    exponent: 0,
    curator: new Uint8Array()
  };
}

export const Basket = {
  encode(message: Basket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (message.basketDenom !== "") {
      writer.uint32(18).string(message.basketDenom);
    }

    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }

    if (message.disableAutoRetire === true) {
      writer.uint32(32).bool(message.disableAutoRetire);
    }

    if (message.creditTypeAbbrev !== "") {
      writer.uint32(42).string(message.creditTypeAbbrev);
    }

    if (message.dateCriteria !== undefined) {
      DateCriteria.encode(message.dateCriteria, writer.uint32(50).fork()).ldelim();
    }

    if (message.exponent !== 0) {
      writer.uint32(56).uint32(message.exponent);
    }

    if (message.curator.length !== 0) {
      writer.uint32(66).bytes(message.curator);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Basket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBasket();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.basketDenom = reader.string();
          break;

        case 3:
          message.name = reader.string();
          break;

        case 4:
          message.disableAutoRetire = reader.bool();
          break;

        case 5:
          message.creditTypeAbbrev = reader.string();
          break;

        case 6:
          message.dateCriteria = DateCriteria.decode(reader, reader.uint32());
          break;

        case 7:
          message.exponent = reader.uint32();
          break;

        case 8:
          message.curator = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Basket {
    return {
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
      basketDenom: isSet(object.basketDenom) ? String(object.basketDenom) : "",
      name: isSet(object.name) ? String(object.name) : "",
      disableAutoRetire: isSet(object.disableAutoRetire) ? Boolean(object.disableAutoRetire) : false,
      creditTypeAbbrev: isSet(object.creditTypeAbbrev) ? String(object.creditTypeAbbrev) : "",
      dateCriteria: isSet(object.dateCriteria) ? DateCriteria.fromJSON(object.dateCriteria) : undefined,
      exponent: isSet(object.exponent) ? Number(object.exponent) : 0,
      curator: isSet(object.curator) ? bytesFromBase64(object.curator) : new Uint8Array()
    };
  },

  toJSON(message: Basket): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.basketDenom !== undefined && (obj.basketDenom = message.basketDenom);
    message.name !== undefined && (obj.name = message.name);
    message.disableAutoRetire !== undefined && (obj.disableAutoRetire = message.disableAutoRetire);
    message.creditTypeAbbrev !== undefined && (obj.creditTypeAbbrev = message.creditTypeAbbrev);
    message.dateCriteria !== undefined && (obj.dateCriteria = message.dateCriteria ? DateCriteria.toJSON(message.dateCriteria) : undefined);
    message.exponent !== undefined && (obj.exponent = Math.round(message.exponent));
    message.curator !== undefined && (obj.curator = base64FromBytes(message.curator !== undefined ? message.curator : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<Basket>): Basket {
    const message = createBaseBasket();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.basketDenom = object.basketDenom ?? "";
    message.name = object.name ?? "";
    message.disableAutoRetire = object.disableAutoRetire ?? false;
    message.creditTypeAbbrev = object.creditTypeAbbrev ?? "";
    message.dateCriteria = object.dateCriteria !== undefined && object.dateCriteria !== null ? DateCriteria.fromPartial(object.dateCriteria) : undefined;
    message.exponent = object.exponent ?? 0;
    message.curator = object.curator ?? new Uint8Array();
    return message;
  }

};

function createBaseBasketClass(): BasketClass {
  return {
    basketId: Long.UZERO,
    classId: ""
  };
}

export const BasketClass = {
  encode(message: BasketClass, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.basketId.isZero()) {
      writer.uint32(8).uint64(message.basketId);
    }

    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BasketClass {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBasketClass();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.basketId = (reader.uint64() as Long);
          break;

        case 2:
          message.classId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): BasketClass {
    return {
      basketId: isSet(object.basketId) ? Long.fromString(object.basketId) : Long.UZERO,
      classId: isSet(object.classId) ? String(object.classId) : ""
    };
  },

  toJSON(message: BasketClass): unknown {
    const obj: any = {};
    message.basketId !== undefined && (obj.basketId = (message.basketId || Long.UZERO).toString());
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },

  fromPartial(object: DeepPartial<BasketClass>): BasketClass {
    const message = createBaseBasketClass();
    message.basketId = object.basketId !== undefined && object.basketId !== null ? Long.fromValue(object.basketId) : Long.UZERO;
    message.classId = object.classId ?? "";
    return message;
  }

};

function createBaseBasketBalance(): BasketBalance {
  return {
    basketId: Long.UZERO,
    batchDenom: "",
    balance: "",
    batchStartDate: undefined
  };
}

export const BasketBalance = {
  encode(message: BasketBalance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.basketId.isZero()) {
      writer.uint32(8).uint64(message.basketId);
    }

    if (message.batchDenom !== "") {
      writer.uint32(18).string(message.batchDenom);
    }

    if (message.balance !== "") {
      writer.uint32(26).string(message.balance);
    }

    if (message.batchStartDate !== undefined) {
      Timestamp.encode(toTimestamp(message.batchStartDate), writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BasketBalance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBasketBalance();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.basketId = (reader.uint64() as Long);
          break;

        case 2:
          message.batchDenom = reader.string();
          break;

        case 3:
          message.balance = reader.string();
          break;

        case 4:
          message.batchStartDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): BasketBalance {
    return {
      basketId: isSet(object.basketId) ? Long.fromString(object.basketId) : Long.UZERO,
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : "",
      balance: isSet(object.balance) ? String(object.balance) : "",
      batchStartDate: isSet(object.batchStartDate) ? fromJsonTimestamp(object.batchStartDate) : undefined
    };
  },

  toJSON(message: BasketBalance): unknown {
    const obj: any = {};
    message.basketId !== undefined && (obj.basketId = (message.basketId || Long.UZERO).toString());
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    message.balance !== undefined && (obj.balance = message.balance);
    message.batchStartDate !== undefined && (obj.batchStartDate = message.batchStartDate.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<BasketBalance>): BasketBalance {
    const message = createBaseBasketBalance();
    message.basketId = object.basketId !== undefined && object.basketId !== null ? Long.fromValue(object.basketId) : Long.UZERO;
    message.batchDenom = object.batchDenom ?? "";
    message.balance = object.balance ?? "";
    message.batchStartDate = object.batchStartDate ?? undefined;
    return message;
  }

};