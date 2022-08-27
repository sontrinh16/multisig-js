import { Timestamp } from "../../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { toTimestamp, Long, fromTimestamp, isSet, bytesFromBase64, fromJsonTimestamp, base64FromBytes, DeepPartial } from "@osmonauts/helpers";

/** SellOrder represents the information for a sell order. */
export interface SellOrder {
  /** id is the unique ID of sell order. */
  id: Long;

  /** seller is the bytes address of the owner of the credits being sold. */
  seller: Uint8Array;

  /** batch_id is ID of the credit batch being sold. */
  batchId: Long;

  /** quantity is the decimal quantity of credits being sold. */
  quantity: string;

  /**
   * market_id is the market in which this sell order exists and specifies
   * the bank_denom that ask_price corresponds to.
   */
  marketId: Long;

  /**
   * ask_price is the integer price (encoded as a string) the seller is asking
   * for each unit of the batch_denom. Each credit unit of the batch will be
   * sold for at least the ask_price or more.
   */
  askPrice: string;

  /**
   * disable_auto_retire disables auto-retirement of credits which allows a
   * buyer to disable auto-retirement in their buy order enabling them to
   * resell the credits to another buyer.
   */
  disableAutoRetire: boolean;

  /**
   * expiration is an optional timestamp when the sell order expires. When the
   * expiration time is reached, the sell order is removed from state.
   */
  expiration: Date;

  /**
   * maker indicates that this is a maker order, meaning that when it hit
   * the order book, there were no matching buy orders.
   */
  maker: boolean;
}

/** AllowedDenom represents the information for an allowed ask/bid denom. */
export interface AllowedDenom {
  /** denom is the bank denom to allow (ex. ibc/GLKHDSG423SGS) */
  bankDenom: string;

  /**
   * display_denom is the denom to display to the user and is informational.
   * Because the denom is likely an IBC denom, this should be chosen by
   * governance to represent the consensus trusted name of the denom.
   */
  displayDenom: string;

  /**
   * exponent is the exponent that relates the denom to the display_denom and is
   * informational
   */
  exponent: number;
}

/**
 * Market describes a distinctly processed market between a credit type and
 * allowed bank denom. Each market has its own precision in the order book
 * and is processed independently of other markets. Governance must enable
 * markets one by one. Every additional enabled market potentially adds more
 * processing overhead to the blockchain and potentially weakens liquidity in
 * competing markets. For instance, enabling side by side USD/Carbon and
 * EUR/Carbon markets may have the end result that each market individually has
 * less liquidity and longer settlement times. Such decisions should be taken
 * with care.
 */
export interface Market {
  /** id is the unique ID of the market. */
  id: Long;

  /** credit_type is the abbreviation of the credit type. */
  creditType: string;

  /** bank_denom is an allowed bank denom. */
  bankDenom: string;

  /**
   * precision_modifier is an optional modifier used to convert arbitrary
   * precision integer bank amounts to uint32 values used for sorting in the
   * order book. Given an arbitrary precision integer x, its uint32 conversion
   * will be x / 10^precision_modifier using round half away from zero
   * rounding.
   * 
   * uint32 values range from 0 to 4,294,967,295.
   * This allows for a full 9 digits of precision. In most real world markets
   * this amount of precision is sufficient and most common downside -
   * that some orders with very miniscule price differences may be ordered
   * equivalently (because of rounding) - is acceptable.
   * Note that this rounding will not affect settlement price which will
   * always be done exactly.
   * 
   * Given a USD stable coin with 6 decimal digits, a precision_modifier
   * of 0 is probably acceptable as long as credits are always less than
   * $4,294/unit. With precision down to $0.001 (a precision_modifier of 3
   * in this case), prices can rise up to $4,294,000/unit. Either scenario
   * is probably quite acceptable given that carbon prices are unlikely to
   * rise above $1000/ton any time in the near future.
   * 
   * If credit prices, exceed the maximum range of uint32 with this
   * precision_modifier, orders with high prices will fail and governance
   * will need to adjust precision_modifier to allow for higher prices in
   * exchange for less precision at the lower end.
   */
  precisionModifier: number;
}

function createBaseSellOrder(): SellOrder {
  return {
    id: Long.UZERO,
    seller: new Uint8Array(),
    batchId: Long.UZERO,
    quantity: "",
    marketId: Long.UZERO,
    askPrice: "",
    disableAutoRetire: false,
    expiration: undefined,
    maker: false
  };
}

export const SellOrder = {
  encode(message: SellOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (message.seller.length !== 0) {
      writer.uint32(18).bytes(message.seller);
    }

    if (!message.batchId.isZero()) {
      writer.uint32(24).uint64(message.batchId);
    }

    if (message.quantity !== "") {
      writer.uint32(34).string(message.quantity);
    }

    if (!message.marketId.isZero()) {
      writer.uint32(40).uint64(message.marketId);
    }

    if (message.askPrice !== "") {
      writer.uint32(50).string(message.askPrice);
    }

    if (message.disableAutoRetire === true) {
      writer.uint32(56).bool(message.disableAutoRetire);
    }

    if (message.expiration !== undefined) {
      Timestamp.encode(toTimestamp(message.expiration), writer.uint32(74).fork()).ldelim();
    }

    if (message.maker === true) {
      writer.uint32(80).bool(message.maker);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SellOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSellOrder();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.seller = reader.bytes();
          break;

        case 3:
          message.batchId = (reader.uint64() as Long);
          break;

        case 4:
          message.quantity = reader.string();
          break;

        case 5:
          message.marketId = (reader.uint64() as Long);
          break;

        case 6:
          message.askPrice = reader.string();
          break;

        case 7:
          message.disableAutoRetire = reader.bool();
          break;

        case 9:
          message.expiration = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 10:
          message.maker = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SellOrder {
    return {
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
      seller: isSet(object.seller) ? bytesFromBase64(object.seller) : new Uint8Array(),
      batchId: isSet(object.batchId) ? Long.fromString(object.batchId) : Long.UZERO,
      quantity: isSet(object.quantity) ? String(object.quantity) : "",
      marketId: isSet(object.marketId) ? Long.fromString(object.marketId) : Long.UZERO,
      askPrice: isSet(object.askPrice) ? String(object.askPrice) : "",
      disableAutoRetire: isSet(object.disableAutoRetire) ? Boolean(object.disableAutoRetire) : false,
      expiration: isSet(object.expiration) ? fromJsonTimestamp(object.expiration) : undefined,
      maker: isSet(object.maker) ? Boolean(object.maker) : false
    };
  },

  toJSON(message: SellOrder): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.seller !== undefined && (obj.seller = base64FromBytes(message.seller !== undefined ? message.seller : new Uint8Array()));
    message.batchId !== undefined && (obj.batchId = (message.batchId || Long.UZERO).toString());
    message.quantity !== undefined && (obj.quantity = message.quantity);
    message.marketId !== undefined && (obj.marketId = (message.marketId || Long.UZERO).toString());
    message.askPrice !== undefined && (obj.askPrice = message.askPrice);
    message.disableAutoRetire !== undefined && (obj.disableAutoRetire = message.disableAutoRetire);
    message.expiration !== undefined && (obj.expiration = message.expiration.toISOString());
    message.maker !== undefined && (obj.maker = message.maker);
    return obj;
  },

  fromPartial(object: DeepPartial<SellOrder>): SellOrder {
    const message = createBaseSellOrder();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.seller = object.seller ?? new Uint8Array();
    message.batchId = object.batchId !== undefined && object.batchId !== null ? Long.fromValue(object.batchId) : Long.UZERO;
    message.quantity = object.quantity ?? "";
    message.marketId = object.marketId !== undefined && object.marketId !== null ? Long.fromValue(object.marketId) : Long.UZERO;
    message.askPrice = object.askPrice ?? "";
    message.disableAutoRetire = object.disableAutoRetire ?? false;
    message.expiration = object.expiration ?? undefined;
    message.maker = object.maker ?? false;
    return message;
  }

};

function createBaseAllowedDenom(): AllowedDenom {
  return {
    bankDenom: "",
    displayDenom: "",
    exponent: 0
  };
}

export const AllowedDenom = {
  encode(message: AllowedDenom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bankDenom !== "") {
      writer.uint32(10).string(message.bankDenom);
    }

    if (message.displayDenom !== "") {
      writer.uint32(18).string(message.displayDenom);
    }

    if (message.exponent !== 0) {
      writer.uint32(24).uint32(message.exponent);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AllowedDenom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllowedDenom();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bankDenom = reader.string();
          break;

        case 2:
          message.displayDenom = reader.string();
          break;

        case 3:
          message.exponent = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AllowedDenom {
    return {
      bankDenom: isSet(object.bankDenom) ? String(object.bankDenom) : "",
      displayDenom: isSet(object.displayDenom) ? String(object.displayDenom) : "",
      exponent: isSet(object.exponent) ? Number(object.exponent) : 0
    };
  },

  toJSON(message: AllowedDenom): unknown {
    const obj: any = {};
    message.bankDenom !== undefined && (obj.bankDenom = message.bankDenom);
    message.displayDenom !== undefined && (obj.displayDenom = message.displayDenom);
    message.exponent !== undefined && (obj.exponent = Math.round(message.exponent));
    return obj;
  },

  fromPartial(object: DeepPartial<AllowedDenom>): AllowedDenom {
    const message = createBaseAllowedDenom();
    message.bankDenom = object.bankDenom ?? "";
    message.displayDenom = object.displayDenom ?? "";
    message.exponent = object.exponent ?? 0;
    return message;
  }

};

function createBaseMarket(): Market {
  return {
    id: Long.UZERO,
    creditType: "",
    bankDenom: "",
    precisionModifier: 0
  };
}

export const Market = {
  encode(message: Market, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (message.creditType !== "") {
      writer.uint32(18).string(message.creditType);
    }

    if (message.bankDenom !== "") {
      writer.uint32(26).string(message.bankDenom);
    }

    if (message.precisionModifier !== 0) {
      writer.uint32(32).uint32(message.precisionModifier);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Market {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarket();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.creditType = reader.string();
          break;

        case 3:
          message.bankDenom = reader.string();
          break;

        case 4:
          message.precisionModifier = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Market {
    return {
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
      creditType: isSet(object.creditType) ? String(object.creditType) : "",
      bankDenom: isSet(object.bankDenom) ? String(object.bankDenom) : "",
      precisionModifier: isSet(object.precisionModifier) ? Number(object.precisionModifier) : 0
    };
  },

  toJSON(message: Market): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.creditType !== undefined && (obj.creditType = message.creditType);
    message.bankDenom !== undefined && (obj.bankDenom = message.bankDenom);
    message.precisionModifier !== undefined && (obj.precisionModifier = Math.round(message.precisionModifier));
    return obj;
  },

  fromPartial(object: DeepPartial<Market>): Market {
    const message = createBaseMarket();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.creditType = object.creditType ?? "";
    message.bankDenom = object.bankDenom ?? "";
    message.precisionModifier = object.precisionModifier ?? 0;
    return message;
  }

};