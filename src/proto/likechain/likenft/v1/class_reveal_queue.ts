import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { toTimestamp, fromTimestamp, isSet, fromJsonTimestamp, DeepPartial } from "@osmonauts/helpers";
export interface ClassRevealQueueEntry {
  revealTime: Date;
  classId: string;
}

function createBaseClassRevealQueueEntry(): ClassRevealQueueEntry {
  return {
    revealTime: undefined,
    classId: ""
  };
}

export const ClassRevealQueueEntry = {
  encode(message: ClassRevealQueueEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.revealTime !== undefined) {
      Timestamp.encode(toTimestamp(message.revealTime), writer.uint32(10).fork()).ldelim();
    }

    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClassRevealQueueEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClassRevealQueueEntry();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.revealTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ClassRevealQueueEntry {
    return {
      revealTime: isSet(object.revealTime) ? fromJsonTimestamp(object.revealTime) : undefined,
      classId: isSet(object.classId) ? String(object.classId) : ""
    };
  },

  toJSON(message: ClassRevealQueueEntry): unknown {
    const obj: any = {};
    message.revealTime !== undefined && (obj.revealTime = message.revealTime.toISOString());
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },

  fromPartial(object: DeepPartial<ClassRevealQueueEntry>): ClassRevealQueueEntry {
    const message = createBaseClassRevealQueueEntry();
    message.revealTime = object.revealTime ?? undefined;
    message.classId = object.classId ?? "";
    return message;
  }

};