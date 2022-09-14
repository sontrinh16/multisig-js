import { Any } from "../../../../google/protobuf/any";
import { Threshold } from "../../../utils/v1beta1/threshold";
import { Snapshot } from "../../../snapshot/exported/v1beta1/types";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, DeepPartial, bytesFromBase64, base64FromBytes } from "@osmonauts/helpers";
export enum PollState {
  POLL_STATE_UNSPECIFIED = 0,
  POLL_STATE_PENDING = 1,
  POLL_STATE_COMPLETED = 2,
  POLL_STATE_FAILED = 3,
  UNRECOGNIZED = -1,
}
export function pollStateFromJSON(object: any): PollState {
  switch (object) {
    case 0:
    case "POLL_STATE_UNSPECIFIED":
      return PollState.POLL_STATE_UNSPECIFIED;

    case 1:
    case "POLL_STATE_PENDING":
      return PollState.POLL_STATE_PENDING;

    case 2:
    case "POLL_STATE_COMPLETED":
      return PollState.POLL_STATE_COMPLETED;

    case 3:
    case "POLL_STATE_FAILED":
      return PollState.POLL_STATE_FAILED;

    case -1:
    case "UNRECOGNIZED":
    default:
      return PollState.UNRECOGNIZED;
  }
}
export function pollStateToJSON(object: PollState): string {
  switch (object) {
    case PollState.POLL_STATE_UNSPECIFIED:
      return "POLL_STATE_UNSPECIFIED";

    case PollState.POLL_STATE_PENDING:
      return "POLL_STATE_PENDING";

    case PollState.POLL_STATE_COMPLETED:
      return "POLL_STATE_COMPLETED";

    case PollState.POLL_STATE_FAILED:
      return "POLL_STATE_FAILED";

    default:
      return "UNKNOWN";
  }
}

/**
 * PollMetadata represents a poll with write-in voting, i.e. the result of the
 * vote can have any data type
 */
export interface PollMetadata {
  expiresAt: Long;
  result: Any;
  votingThreshold: Threshold;
  state: PollState;
  minVoterCount: Long;
  rewardPoolName: string;
  gracePeriod: Long;
  completedAt: Long;
  id: Long;
  snapshot: Snapshot;
  module: string;
  moduleMetadata: Any;
}

/** PollKey represents the key data for a poll */

/** @deprecated */
export interface PollKey {
  module: string;
  id: string;
}

/** PollParticipants should be embedded in poll events in other modules */
export interface PollParticipants {
  pollId: Long;
  participants: Uint8Array[];
}

function createBasePollMetadata(): PollMetadata {
  return {
    expiresAt: Long.ZERO,
    result: undefined,
    votingThreshold: undefined,
    state: 0,
    minVoterCount: Long.ZERO,
    rewardPoolName: "",
    gracePeriod: Long.ZERO,
    completedAt: Long.ZERO,
    id: Long.UZERO,
    snapshot: undefined,
    module: "",
    moduleMetadata: undefined
  };
}

export const PollMetadata = {
  encode(message: PollMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.expiresAt.isZero()) {
      writer.uint32(24).int64(message.expiresAt);
    }

    if (message.result !== undefined) {
      Any.encode(message.result, writer.uint32(34).fork()).ldelim();
    }

    if (message.votingThreshold !== undefined) {
      Threshold.encode(message.votingThreshold, writer.uint32(42).fork()).ldelim();
    }

    if (message.state !== 0) {
      writer.uint32(48).int32(message.state);
    }

    if (!message.minVoterCount.isZero()) {
      writer.uint32(56).int64(message.minVoterCount);
    }

    if (message.rewardPoolName !== "") {
      writer.uint32(82).string(message.rewardPoolName);
    }

    if (!message.gracePeriod.isZero()) {
      writer.uint32(88).int64(message.gracePeriod);
    }

    if (!message.completedAt.isZero()) {
      writer.uint32(96).int64(message.completedAt);
    }

    if (!message.id.isZero()) {
      writer.uint32(104).uint64(message.id);
    }

    if (message.snapshot !== undefined) {
      Snapshot.encode(message.snapshot, writer.uint32(122).fork()).ldelim();
    }

    if (message.module !== "") {
      writer.uint32(130).string(message.module);
    }

    if (message.moduleMetadata !== undefined) {
      Any.encode(message.moduleMetadata, writer.uint32(138).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PollMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePollMetadata();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 3:
          message.expiresAt = (reader.int64() as Long);
          break;

        case 4:
          message.result = Any.decode(reader, reader.uint32());
          break;

        case 5:
          message.votingThreshold = Threshold.decode(reader, reader.uint32());
          break;

        case 6:
          message.state = (reader.int32() as any);
          break;

        case 7:
          message.minVoterCount = (reader.int64() as Long);
          break;

        case 10:
          message.rewardPoolName = reader.string();
          break;

        case 11:
          message.gracePeriod = (reader.int64() as Long);
          break;

        case 12:
          message.completedAt = (reader.int64() as Long);
          break;

        case 13:
          message.id = (reader.uint64() as Long);
          break;

        case 15:
          message.snapshot = Snapshot.decode(reader, reader.uint32());
          break;

        case 16:
          message.module = reader.string();
          break;

        case 17:
          message.moduleMetadata = Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PollMetadata {
    return {
      expiresAt: isSet(object.expiresAt) ? Long.fromString(object.expiresAt) : Long.ZERO,
      result: isSet(object.result) ? Any.fromJSON(object.result) : undefined,
      votingThreshold: isSet(object.votingThreshold) ? Threshold.fromJSON(object.votingThreshold) : undefined,
      state: isSet(object.state) ? pollStateFromJSON(object.state) : 0,
      minVoterCount: isSet(object.minVoterCount) ? Long.fromString(object.minVoterCount) : Long.ZERO,
      rewardPoolName: isSet(object.rewardPoolName) ? String(object.rewardPoolName) : "",
      gracePeriod: isSet(object.gracePeriod) ? Long.fromString(object.gracePeriod) : Long.ZERO,
      completedAt: isSet(object.completedAt) ? Long.fromString(object.completedAt) : Long.ZERO,
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
      snapshot: isSet(object.snapshot) ? Snapshot.fromJSON(object.snapshot) : undefined,
      module: isSet(object.module) ? String(object.module) : "",
      moduleMetadata: isSet(object.moduleMetadata) ? Any.fromJSON(object.moduleMetadata) : undefined
    };
  },

  toJSON(message: PollMetadata): unknown {
    const obj: any = {};
    message.expiresAt !== undefined && (obj.expiresAt = (message.expiresAt || Long.ZERO).toString());
    message.result !== undefined && (obj.result = message.result ? Any.toJSON(message.result) : undefined);
    message.votingThreshold !== undefined && (obj.votingThreshold = message.votingThreshold ? Threshold.toJSON(message.votingThreshold) : undefined);
    message.state !== undefined && (obj.state = pollStateToJSON(message.state));
    message.minVoterCount !== undefined && (obj.minVoterCount = (message.minVoterCount || Long.ZERO).toString());
    message.rewardPoolName !== undefined && (obj.rewardPoolName = message.rewardPoolName);
    message.gracePeriod !== undefined && (obj.gracePeriod = (message.gracePeriod || Long.ZERO).toString());
    message.completedAt !== undefined && (obj.completedAt = (message.completedAt || Long.ZERO).toString());
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.snapshot !== undefined && (obj.snapshot = message.snapshot ? Snapshot.toJSON(message.snapshot) : undefined);
    message.module !== undefined && (obj.module = message.module);
    message.moduleMetadata !== undefined && (obj.moduleMetadata = message.moduleMetadata ? Any.toJSON(message.moduleMetadata) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<PollMetadata>): PollMetadata {
    const message = createBasePollMetadata();
    message.expiresAt = object.expiresAt !== undefined && object.expiresAt !== null ? Long.fromValue(object.expiresAt) : Long.ZERO;
    message.result = object.result !== undefined && object.result !== null ? Any.fromPartial(object.result) : undefined;
    message.votingThreshold = object.votingThreshold !== undefined && object.votingThreshold !== null ? Threshold.fromPartial(object.votingThreshold) : undefined;
    message.state = object.state ?? 0;
    message.minVoterCount = object.minVoterCount !== undefined && object.minVoterCount !== null ? Long.fromValue(object.minVoterCount) : Long.ZERO;
    message.rewardPoolName = object.rewardPoolName ?? "";
    message.gracePeriod = object.gracePeriod !== undefined && object.gracePeriod !== null ? Long.fromValue(object.gracePeriod) : Long.ZERO;
    message.completedAt = object.completedAt !== undefined && object.completedAt !== null ? Long.fromValue(object.completedAt) : Long.ZERO;
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.snapshot = object.snapshot !== undefined && object.snapshot !== null ? Snapshot.fromPartial(object.snapshot) : undefined;
    message.module = object.module ?? "";
    message.moduleMetadata = object.moduleMetadata !== undefined && object.moduleMetadata !== null ? Any.fromPartial(object.moduleMetadata) : undefined;
    return message;
  }

};

function createBasePollKey(): PollKey {
  return {
    module: "",
    id: ""
  };
}

export const PollKey = {
  encode(message: PollKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }

    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PollKey {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePollKey();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.module = reader.string();
          break;

        case 2:
          message.id = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PollKey {
    return {
      module: isSet(object.module) ? String(object.module) : "",
      id: isSet(object.id) ? String(object.id) : ""
    };
  },

  toJSON(message: PollKey): unknown {
    const obj: any = {};
    message.module !== undefined && (obj.module = message.module);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<PollKey>): PollKey {
    const message = createBasePollKey();
    message.module = object.module ?? "";
    message.id = object.id ?? "";
    return message;
  }

};

function createBasePollParticipants(): PollParticipants {
  return {
    pollId: Long.UZERO,
    participants: []
  };
}

export const PollParticipants = {
  encode(message: PollParticipants, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.pollId.isZero()) {
      writer.uint32(8).uint64(message.pollId);
    }

    for (const v of message.participants) {
      writer.uint32(18).bytes(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PollParticipants {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePollParticipants();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pollId = (reader.uint64() as Long);
          break;

        case 2:
          message.participants.push(reader.bytes());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PollParticipants {
    return {
      pollId: isSet(object.pollId) ? Long.fromString(object.pollId) : Long.UZERO,
      participants: Array.isArray(object?.participants) ? object.participants.map((e: any) => bytesFromBase64(e)) : []
    };
  },

  toJSON(message: PollParticipants): unknown {
    const obj: any = {};
    message.pollId !== undefined && (obj.pollId = (message.pollId || Long.UZERO).toString());

    if (message.participants) {
      obj.participants = message.participants.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.participants = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<PollParticipants>): PollParticipants {
    const message = createBasePollParticipants();
    message.pollId = object.pollId !== undefined && object.pollId !== null ? Long.fromValue(object.pollId) : Long.UZERO;
    message.participants = object.participants?.map(e => e) || [];
    return message;
  }

};