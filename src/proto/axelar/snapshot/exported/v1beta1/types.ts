import { Timestamp } from "../../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial, Long, fromJsonTimestamp, isObject, fromTimestamp } from "@osmonauts/helpers";
export interface Participant {
  address: Uint8Array;
  weight: Uint8Array;
}
export interface Snapshot_ParticipantsEntry {
  key: string;
  value: Participant;
}
export interface Snapshot {
  timestamp: Timestamp;
  height: Long;
  participants: {
    [key: string]: Participant;
  };
  bondedWeight: Uint8Array;
}

function createBaseParticipant(): Participant {
  return {
    address: new Uint8Array(),
    weight: new Uint8Array()
  };
}

export const Participant = {
  encode(message: Participant, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }

    if (message.weight.length !== 0) {
      writer.uint32(18).bytes(message.weight);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Participant {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParticipant();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.bytes();
          break;

        case 2:
          message.weight = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Participant {
    return {
      address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(),
      weight: isSet(object.weight) ? bytesFromBase64(object.weight) : new Uint8Array()
    };
  },

  toJSON(message: Participant): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = base64FromBytes(message.address !== undefined ? message.address : new Uint8Array()));
    message.weight !== undefined && (obj.weight = base64FromBytes(message.weight !== undefined ? message.weight : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<Participant>): Participant {
    const message = createBaseParticipant();
    message.address = object.address ?? new Uint8Array();
    message.weight = object.weight ?? new Uint8Array();
    return message;
  }

};

function createBaseSnapshot_ParticipantsEntry(): Snapshot_ParticipantsEntry {
  return {
    key: "",
    value: undefined
  };
}

export const Snapshot_ParticipantsEntry = {
  encode(message: Snapshot_ParticipantsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (message.value !== undefined) {
      Participant.encode(message.value, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Snapshot_ParticipantsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshot_ParticipantsEntry();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;

        case 2:
          message.value = Participant.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Snapshot_ParticipantsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Participant.fromJSON(object.value) : undefined
    };
  },

  toJSON(message: Snapshot_ParticipantsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? Participant.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Snapshot_ParticipantsEntry>): Snapshot_ParticipantsEntry {
    const message = createBaseSnapshot_ParticipantsEntry();
    message.key = object.key ?? "";
    message.value = object.value !== undefined && object.value !== null ? Participant.fromPartial(object.value) : undefined;
    return message;
  }

};

function createBaseSnapshot(): Snapshot {
  return {
    timestamp: undefined,
    height: Long.ZERO,
    participants: {},
    bondedWeight: new Uint8Array()
  };
}

export const Snapshot = {
  encode(message: Snapshot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(18).fork()).ldelim();
    }

    if (!message.height.isZero()) {
      writer.uint32(24).int64(message.height);
    }

    Object.entries(message.participants).forEach(([key, value]) => {
      Snapshot_ParticipantsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(66).fork()).ldelim();
    });

    if (message.bondedWeight.length !== 0) {
      writer.uint32(74).bytes(message.bondedWeight);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Snapshot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshot();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 2:
          message.timestamp = Timestamp.decode(reader, reader.uint32());
          break;

        case 3:
          message.height = (reader.int64() as Long);
          break;

        case 8:
          const entry8 = Snapshot_ParticipantsEntry.decode(reader, reader.uint32());

          if (entry8.value !== undefined) {
            message.participants[entry8.key] = entry8.value;
          }

          break;

        case 9:
          message.bondedWeight = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Snapshot {
    return {
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
      height: isSet(object.height) ? Long.fromString(object.height) : Long.ZERO,
      participants: isObject(object.participants) ? Object.entries(object.participants).reduce<{
        [key: string]: Participant;
      }>((acc, [key, value]) => {
        acc[key] = Participant.fromJSON(value);
        return acc;
      }, {}) : {},
      bondedWeight: isSet(object.bondedWeight) ? bytesFromBase64(object.bondedWeight) : new Uint8Array()
    };
  },

  toJSON(message: Snapshot): unknown {
    const obj: any = {};
    message.timestamp !== undefined && (obj.timestamp = fromTimestamp(message.timestamp).toISOString());
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    obj.participants = {};

    if (message.participants) {
      Object.entries(message.participants).forEach(([k, v]) => {
        obj.participants[k] = Participant.toJSON(v);
      });
    }

    message.bondedWeight !== undefined && (obj.bondedWeight = base64FromBytes(message.bondedWeight !== undefined ? message.bondedWeight : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<Snapshot>): Snapshot {
    const message = createBaseSnapshot();
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Timestamp.fromPartial(object.timestamp) : undefined;
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.participants = Object.entries(object.participants ?? {}).reduce<{
      [key: string]: Participant;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Participant.fromPartial(value);
      }

      return acc;
    }, {});
    message.bondedWeight = object.bondedWeight ?? new Uint8Array();
    return message;
  }

};