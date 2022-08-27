import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { toTimestamp, fromTimestamp, isSet, fromJsonTimestamp, DeepPartial } from "@osmonauts/helpers";
export interface Inflation {
  max: string;
  min: string;
  rateChange: string;
  timestamp: Date;
}

function createBaseInflation(): Inflation {
  return {
    max: "",
    min: "",
    rateChange: "",
    timestamp: undefined
  };
}

export const Inflation = {
  encode(message: Inflation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.max !== "") {
      writer.uint32(10).string(message.max);
    }

    if (message.min !== "") {
      writer.uint32(18).string(message.min);
    }

    if (message.rateChange !== "") {
      writer.uint32(26).string(message.rateChange);
    }

    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Inflation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInflation();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.max = reader.string();
          break;

        case 2:
          message.min = reader.string();
          break;

        case 3:
          message.rateChange = reader.string();
          break;

        case 4:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Inflation {
    return {
      max: isSet(object.max) ? String(object.max) : "",
      min: isSet(object.min) ? String(object.min) : "",
      rateChange: isSet(object.rateChange) ? String(object.rateChange) : "",
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined
    };
  },

  toJSON(message: Inflation): unknown {
    const obj: any = {};
    message.max !== undefined && (obj.max = message.max);
    message.min !== undefined && (obj.min = message.min);
    message.rateChange !== undefined && (obj.rateChange = message.rateChange);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<Inflation>): Inflation {
    const message = createBaseInflation();
    message.max = object.max ?? "";
    message.min = object.min ?? "";
    message.rateChange = object.rateChange ?? "";
    message.timestamp = object.timestamp ?? undefined;
    return message;
  }

};