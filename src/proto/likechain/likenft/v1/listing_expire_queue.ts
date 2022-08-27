import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { toTimestamp, fromTimestamp, isSet, fromJsonTimestamp, bytesFromBase64, base64FromBytes, DeepPartial } from "@osmonauts/helpers";
export interface ListingExpireQueueEntry {
  expireTime: Date;
  listingKey: Uint8Array;
}

function createBaseListingExpireQueueEntry(): ListingExpireQueueEntry {
  return {
    expireTime: undefined,
    listingKey: new Uint8Array()
  };
}

export const ListingExpireQueueEntry = {
  encode(message: ListingExpireQueueEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.expireTime !== undefined) {
      Timestamp.encode(toTimestamp(message.expireTime), writer.uint32(10).fork()).ldelim();
    }

    if (message.listingKey.length !== 0) {
      writer.uint32(18).bytes(message.listingKey);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListingExpireQueueEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListingExpireQueueEntry();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.expireTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 2:
          message.listingKey = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ListingExpireQueueEntry {
    return {
      expireTime: isSet(object.expireTime) ? fromJsonTimestamp(object.expireTime) : undefined,
      listingKey: isSet(object.listingKey) ? bytesFromBase64(object.listingKey) : new Uint8Array()
    };
  },

  toJSON(message: ListingExpireQueueEntry): unknown {
    const obj: any = {};
    message.expireTime !== undefined && (obj.expireTime = message.expireTime.toISOString());
    message.listingKey !== undefined && (obj.listingKey = base64FromBytes(message.listingKey !== undefined ? message.listingKey : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<ListingExpireQueueEntry>): ListingExpireQueueEntry {
    const message = createBaseListingExpireQueueEntry();
    message.expireTime = object.expireTime ?? undefined;
    message.listingKey = object.listingKey ?? new Uint8Array();
    return message;
  }

};