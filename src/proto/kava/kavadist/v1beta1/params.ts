import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, toTimestamp, fromTimestamp, fromJsonTimestamp, bytesFromBase64, base64FromBytes } from "@osmonauts/helpers";

/** Params governance parameters for kavadist module */
export interface Params {
  active: boolean;
  periods: Period[];
}

/**
 * Period stores the specified start and end dates, and the inflation, expressed as a decimal
 * representing the yearly APR of KAVA tokens that will be minted during that period
 */
export interface Period {
  /** example "2020-03-01T15:20:00Z" */
  start: Date;

  /** example "2020-06-01T15:20:00Z" */
  end: Date;

  /** example "1.000000003022265980"  - 10% inflation */
  inflation: Uint8Array;
}

function createBaseParams(): Params {
  return {
    active: false,
    periods: []
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.active === true) {
      writer.uint32(8).bool(message.active);
    }

    for (const v of message.periods) {
      Period.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.active = reader.bool();
          break;

        case 3:
          message.periods.push(Period.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Params {
    return {
      active: isSet(object.active) ? Boolean(object.active) : false,
      periods: Array.isArray(object?.periods) ? object.periods.map((e: any) => Period.fromJSON(e)) : []
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.active !== undefined && (obj.active = message.active);

    if (message.periods) {
      obj.periods = message.periods.map(e => e ? Period.toJSON(e) : undefined);
    } else {
      obj.periods = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.active = object.active ?? false;
    message.periods = object.periods?.map(e => Period.fromPartial(e)) || [];
    return message;
  }

};

function createBasePeriod(): Period {
  return {
    start: undefined,
    end: undefined,
    inflation: new Uint8Array()
  };
}

export const Period = {
  encode(message: Period, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.start !== undefined) {
      Timestamp.encode(toTimestamp(message.start), writer.uint32(10).fork()).ldelim();
    }

    if (message.end !== undefined) {
      Timestamp.encode(toTimestamp(message.end), writer.uint32(18).fork()).ldelim();
    }

    if (message.inflation.length !== 0) {
      writer.uint32(26).bytes(message.inflation);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Period {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeriod();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.start = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 2:
          message.end = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 3:
          message.inflation = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Period {
    return {
      start: isSet(object.start) ? fromJsonTimestamp(object.start) : undefined,
      end: isSet(object.end) ? fromJsonTimestamp(object.end) : undefined,
      inflation: isSet(object.inflation) ? bytesFromBase64(object.inflation) : new Uint8Array()
    };
  },

  toJSON(message: Period): unknown {
    const obj: any = {};
    message.start !== undefined && (obj.start = message.start.toISOString());
    message.end !== undefined && (obj.end = message.end.toISOString());
    message.inflation !== undefined && (obj.inflation = base64FromBytes(message.inflation !== undefined ? message.inflation : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<Period>): Period {
    const message = createBasePeriod();
    message.start = object.start ?? undefined;
    message.end = object.end ?? undefined;
    message.inflation = object.inflation ?? new Uint8Array();
    return message;
  }

};