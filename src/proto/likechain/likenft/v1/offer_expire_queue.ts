import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { toTimestamp, fromTimestamp, isSet, fromJsonTimestamp, bytesFromBase64, base64FromBytes, DeepPartial } from "@osmonauts/helpers";
export interface OfferExpireQueueEntry {
  expireTime: Date;
  offerKey: Uint8Array;
}

function createBaseOfferExpireQueueEntry(): OfferExpireQueueEntry {
  return {
    expireTime: undefined,
    offerKey: new Uint8Array()
  };
}

export const OfferExpireQueueEntry = {
  encode(message: OfferExpireQueueEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.expireTime !== undefined) {
      Timestamp.encode(toTimestamp(message.expireTime), writer.uint32(10).fork()).ldelim();
    }

    if (message.offerKey.length !== 0) {
      writer.uint32(18).bytes(message.offerKey);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OfferExpireQueueEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOfferExpireQueueEntry();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.expireTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 2:
          message.offerKey = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): OfferExpireQueueEntry {
    return {
      expireTime: isSet(object.expireTime) ? fromJsonTimestamp(object.expireTime) : undefined,
      offerKey: isSet(object.offerKey) ? bytesFromBase64(object.offerKey) : new Uint8Array()
    };
  },

  toJSON(message: OfferExpireQueueEntry): unknown {
    const obj: any = {};
    message.expireTime !== undefined && (obj.expireTime = message.expireTime.toISOString());
    message.offerKey !== undefined && (obj.offerKey = base64FromBytes(message.offerKey !== undefined ? message.offerKey : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<OfferExpireQueueEntry>): OfferExpireQueueEntry {
    const message = createBaseOfferExpireQueueEntry();
    message.expireTime = object.expireTime ?? undefined;
    message.offerKey = object.offerKey ?? new Uint8Array();
    return message;
  }

};