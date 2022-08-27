import { Timestamp } from "../../../../google/protobuf/timestamp";
import { Duration } from "../../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, toTimestamp, toDuration, fromTimestamp, fromDuration, fromJsonTimestamp } from "@osmonauts/helpers";

/** BasketCredit represents the information for a credit batch inside a basket. */
export interface BasketCredit {
  /** batch_denom is the unique ID of the credit batch. */
  batchDenom: string;

  /**
   * amount is the number of credits being put into or taken out of the basket.
   * Decimal values are acceptable within the precision of the corresponding
   * credit type for this batch.
   */
  amount: string;
}

/**
 * DateCriteria represents the information for credit acceptance in a basket.
 * At most, only one of the values should be set.
 * NOTE: gogo proto `oneof` is not compatible with Amino signing, hence we
 * directly define both `start_date_window` and `min_start_date`. In the future,
 * with pulsar, this should change and we should use `oneof`.
 */
export interface DateCriteria {
  /**
   * min_start_date (optional) is the earliest start date for batches of credits
   * allowed into the basket. At most only one of `start_date_window`,
   * `min_start_date`, and `years_in_the_past` can be set for a basket.
   */
  minStartDate: Date;

  /**
   * start_date_window (optional) is a duration of time measured into the past
   * which sets a cutoff for batch start dates when adding new credits to the
   * basket. Based on the current block timestamp, credits whose start date is
   * before `block_timestamp - start_date_window` will not be allowed into the
   * basket. At most only one of `start_date_window`, `min_start_date`, and
   * `years_in_the_past` can be set for a basket.
   */
  startDateWindow: string;

  /**
   * years_in_the_past (optional) is the number of years into the past which
   * sets a cutoff for the batch start dates when adding new credits to the
   * basket. Based on the current block timestamp, credits whose start date year
   * is less than `block_timestamp_year - years_in_the_past` will not be allowed
   * into the basket. At most only one of `start_date_window`, `min_start_date`,
   * and `years_in_the_past` can be set for a basket.
   * 
   * Since Revision 1
   */
  yearsInThePast: number;
}

function createBaseBasketCredit(): BasketCredit {
  return {
    batchDenom: "",
    amount: ""
  };
}

export const BasketCredit = {
  encode(message: BasketCredit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.batchDenom !== "") {
      writer.uint32(10).string(message.batchDenom);
    }

    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BasketCredit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBasketCredit();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.batchDenom = reader.string();
          break;

        case 2:
          message.amount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): BasketCredit {
    return {
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : "",
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },

  toJSON(message: BasketCredit): unknown {
    const obj: any = {};
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: DeepPartial<BasketCredit>): BasketCredit {
    const message = createBaseBasketCredit();
    message.batchDenom = object.batchDenom ?? "";
    message.amount = object.amount ?? "";
    return message;
  }

};

function createBaseDateCriteria(): DateCriteria {
  return {
    minStartDate: undefined,
    startDateWindow: undefined,
    yearsInThePast: 0
  };
}

export const DateCriteria = {
  encode(message: DateCriteria, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minStartDate !== undefined) {
      Timestamp.encode(toTimestamp(message.minStartDate), writer.uint32(10).fork()).ldelim();
    }

    if (message.startDateWindow !== undefined) {
      Duration.encode(toDuration(message.startDateWindow), writer.uint32(18).fork()).ldelim();
    }

    if (message.yearsInThePast !== 0) {
      writer.uint32(24).uint32(message.yearsInThePast);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DateCriteria {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDateCriteria();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.minStartDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 2:
          message.startDateWindow = fromDuration(Duration.decode(reader, reader.uint32()));
          break;

        case 3:
          message.yearsInThePast = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DateCriteria {
    return {
      minStartDate: isSet(object.minStartDate) ? fromJsonTimestamp(object.minStartDate) : undefined,
      startDateWindow: isSet(object.startDateWindow) ? String(object.startDateWindow) : undefined,
      yearsInThePast: isSet(object.yearsInThePast) ? Number(object.yearsInThePast) : 0
    };
  },

  toJSON(message: DateCriteria): unknown {
    const obj: any = {};
    message.minStartDate !== undefined && (obj.minStartDate = message.minStartDate.toISOString());
    message.startDateWindow !== undefined && (obj.startDateWindow = message.startDateWindow);
    message.yearsInThePast !== undefined && (obj.yearsInThePast = Math.round(message.yearsInThePast));
    return obj;
  },

  fromPartial(object: DeepPartial<DateCriteria>): DateCriteria {
    const message = createBaseDateCriteria();
    message.minStartDate = object.minStartDate ?? undefined;
    message.startDateWindow = object.startDateWindow ?? undefined;
    message.yearsInThePast = object.yearsInThePast ?? 0;
    return message;
  }

};