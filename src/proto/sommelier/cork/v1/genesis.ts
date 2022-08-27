import { CellarIDSet, ValidatorCork, ScheduledCork } from "./cork";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, DeepPartial } from "@osmonauts/helpers";

/** GenesisState - all cork state that must be provided at genesis */
export interface GenesisState {
  params: Params;
  cellarIds: CellarIDSet;
  invalidationNonce: Long;
  corks: ValidatorCork[];
  scheduledCorks: ScheduledCork[];
}

/** Params cork parameters */
export interface Params {
  /** VotePeriod defines the number of blocks to wait for votes before attempting to tally */
  votePeriod: Long;

  /** VoteThreshold defines the percentage of bonded stake required to vote each period */
  voteThreshold: string;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    cellarIds: undefined,
    invalidationNonce: Long.UZERO,
    corks: [],
    scheduledCorks: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    if (message.cellarIds !== undefined) {
      CellarIDSet.encode(message.cellarIds, writer.uint32(18).fork()).ldelim();
    }

    if (!message.invalidationNonce.isZero()) {
      writer.uint32(24).uint64(message.invalidationNonce);
    }

    for (const v of message.corks) {
      ValidatorCork.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.scheduledCorks) {
      ScheduledCork.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 2:
          message.cellarIds = CellarIDSet.decode(reader, reader.uint32());
          break;

        case 3:
          message.invalidationNonce = (reader.uint64() as Long);
          break;

        case 4:
          message.corks.push(ValidatorCork.decode(reader, reader.uint32()));
          break;

        case 5:
          message.scheduledCorks.push(ScheduledCork.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      cellarIds: isSet(object.cellarIds) ? CellarIDSet.fromJSON(object.cellarIds) : undefined,
      invalidationNonce: isSet(object.invalidationNonce) ? Long.fromString(object.invalidationNonce) : Long.UZERO,
      corks: Array.isArray(object?.corks) ? object.corks.map((e: any) => ValidatorCork.fromJSON(e)) : [],
      scheduledCorks: Array.isArray(object?.scheduledCorks) ? object.scheduledCorks.map((e: any) => ScheduledCork.fromJSON(e)) : []
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.cellarIds !== undefined && (obj.cellarIds = message.cellarIds ? CellarIDSet.toJSON(message.cellarIds) : undefined);
    message.invalidationNonce !== undefined && (obj.invalidationNonce = (message.invalidationNonce || Long.UZERO).toString());

    if (message.corks) {
      obj.corks = message.corks.map(e => e ? ValidatorCork.toJSON(e) : undefined);
    } else {
      obj.corks = [];
    }

    if (message.scheduledCorks) {
      obj.scheduledCorks = message.scheduledCorks.map(e => e ? ScheduledCork.toJSON(e) : undefined);
    } else {
      obj.scheduledCorks = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.cellarIds = object.cellarIds !== undefined && object.cellarIds !== null ? CellarIDSet.fromPartial(object.cellarIds) : undefined;
    message.invalidationNonce = object.invalidationNonce !== undefined && object.invalidationNonce !== null ? Long.fromValue(object.invalidationNonce) : Long.UZERO;
    message.corks = object.corks?.map(e => ValidatorCork.fromPartial(e)) || [];
    message.scheduledCorks = object.scheduledCorks?.map(e => ScheduledCork.fromPartial(e)) || [];
    return message;
  }

};

function createBaseParams(): Params {
  return {
    votePeriod: Long.ZERO,
    voteThreshold: ""
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.votePeriod.isZero()) {
      writer.uint32(8).int64(message.votePeriod);
    }

    if (message.voteThreshold !== "") {
      writer.uint32(18).string(message.voteThreshold);
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
          message.votePeriod = (reader.int64() as Long);
          break;

        case 2:
          message.voteThreshold = reader.string();
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
      votePeriod: isSet(object.votePeriod) ? Long.fromString(object.votePeriod) : Long.ZERO,
      voteThreshold: isSet(object.voteThreshold) ? String(object.voteThreshold) : ""
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.votePeriod !== undefined && (obj.votePeriod = (message.votePeriod || Long.ZERO).toString());
    message.voteThreshold !== undefined && (obj.voteThreshold = message.voteThreshold);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.votePeriod = object.votePeriod !== undefined && object.votePeriod !== null ? Long.fromValue(object.votePeriod) : Long.ZERO;
    message.voteThreshold = object.voteThreshold ?? "";
    return message;
  }

};