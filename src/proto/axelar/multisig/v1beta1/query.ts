import { KeyState, MultisigState, keyStateFromJSON, keyStateToJSON, multisigStateFromJSON, multisigStateToJSON } from "../exported/v1beta1/types";
import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, bytesFromBase64, base64FromBytes, Long, fromJsonTimestamp, fromTimestamp } from "@osmonauts/helpers";
export interface KeyIDRequest {
  chain: string;
}

/** KeyIDResponse contains the key ID of the key assigned to a given chain. */
export interface KeyIDResponse {
  keyId: string;
}
export interface NextKeyIDRequest {
  chain: string;
}

/**
 * NextKeyIDResponse contains the key ID for the next rotation on the given
 * chain
 */
export interface NextKeyIDResponse {
  keyId: string;
}
export interface KeyRequest {
  keyId: string;
}
export interface KeygenParticipant {
  address: string;
  weight: Uint8Array;
  pubKey: string;
}

/** KeyResponse contains the key corresponding to a given key id. */
export interface KeyResponse {
  keyId: string;
  state: KeyState;
  startedAt: Long;
  startedAtTimestamp: Timestamp;
  thresholdWeight: Uint8Array;
  bondedWeight: Uint8Array;

  /** Keygen participants in descending order by weight */
  participants: KeygenParticipant[];
}
export interface KeygenSessionRequest {
  keyId: string;
}

/** KeygenSessionResponse contains the keygen session info for a given key ID. */
export interface KeygenSessionResponse {
  startedAt: Long;
  startedAtTimestamp: Timestamp;
  expiresAt: Long;
  completedAt: Long;
  gracePeriod: Long;
  state: MultisigState;
  keygenThresholdWeight: Uint8Array;
  signingThresholdWeight: Uint8Array;
  bondedWeight: Uint8Array;

  /** Keygen candidates in descending order by weight */
  participants: KeygenParticipant[];
}

function createBaseKeyIDRequest(): KeyIDRequest {
  return {
    chain: ""
  };
}

export const KeyIDRequest = {
  encode(message: KeyIDRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeyIDRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeyIDRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.chain = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): KeyIDRequest {
    return {
      chain: isSet(object.chain) ? String(object.chain) : ""
    };
  },

  toJSON(message: KeyIDRequest): unknown {
    const obj: any = {};
    message.chain !== undefined && (obj.chain = message.chain);
    return obj;
  },

  fromPartial(object: DeepPartial<KeyIDRequest>): KeyIDRequest {
    const message = createBaseKeyIDRequest();
    message.chain = object.chain ?? "";
    return message;
  }

};

function createBaseKeyIDResponse(): KeyIDResponse {
  return {
    keyId: ""
  };
}

export const KeyIDResponse = {
  encode(message: KeyIDResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeyIDResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeyIDResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.keyId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): KeyIDResponse {
    return {
      keyId: isSet(object.keyId) ? String(object.keyId) : ""
    };
  },

  toJSON(message: KeyIDResponse): unknown {
    const obj: any = {};
    message.keyId !== undefined && (obj.keyId = message.keyId);
    return obj;
  },

  fromPartial(object: DeepPartial<KeyIDResponse>): KeyIDResponse {
    const message = createBaseKeyIDResponse();
    message.keyId = object.keyId ?? "";
    return message;
  }

};

function createBaseNextKeyIDRequest(): NextKeyIDRequest {
  return {
    chain: ""
  };
}

export const NextKeyIDRequest = {
  encode(message: NextKeyIDRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NextKeyIDRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNextKeyIDRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.chain = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): NextKeyIDRequest {
    return {
      chain: isSet(object.chain) ? String(object.chain) : ""
    };
  },

  toJSON(message: NextKeyIDRequest): unknown {
    const obj: any = {};
    message.chain !== undefined && (obj.chain = message.chain);
    return obj;
  },

  fromPartial(object: DeepPartial<NextKeyIDRequest>): NextKeyIDRequest {
    const message = createBaseNextKeyIDRequest();
    message.chain = object.chain ?? "";
    return message;
  }

};

function createBaseNextKeyIDResponse(): NextKeyIDResponse {
  return {
    keyId: ""
  };
}

export const NextKeyIDResponse = {
  encode(message: NextKeyIDResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NextKeyIDResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNextKeyIDResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.keyId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): NextKeyIDResponse {
    return {
      keyId: isSet(object.keyId) ? String(object.keyId) : ""
    };
  },

  toJSON(message: NextKeyIDResponse): unknown {
    const obj: any = {};
    message.keyId !== undefined && (obj.keyId = message.keyId);
    return obj;
  },

  fromPartial(object: DeepPartial<NextKeyIDResponse>): NextKeyIDResponse {
    const message = createBaseNextKeyIDResponse();
    message.keyId = object.keyId ?? "";
    return message;
  }

};

function createBaseKeyRequest(): KeyRequest {
  return {
    keyId: ""
  };
}

export const KeyRequest = {
  encode(message: KeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeyRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.keyId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): KeyRequest {
    return {
      keyId: isSet(object.keyId) ? String(object.keyId) : ""
    };
  },

  toJSON(message: KeyRequest): unknown {
    const obj: any = {};
    message.keyId !== undefined && (obj.keyId = message.keyId);
    return obj;
  },

  fromPartial(object: DeepPartial<KeyRequest>): KeyRequest {
    const message = createBaseKeyRequest();
    message.keyId = object.keyId ?? "";
    return message;
  }

};

function createBaseKeygenParticipant(): KeygenParticipant {
  return {
    address: "",
    weight: new Uint8Array(),
    pubKey: ""
  };
}

export const KeygenParticipant = {
  encode(message: KeygenParticipant, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (message.weight.length !== 0) {
      writer.uint32(18).bytes(message.weight);
    }

    if (message.pubKey !== "") {
      writer.uint32(26).string(message.pubKey);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeygenParticipant {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeygenParticipant();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.weight = reader.bytes();
          break;

        case 3:
          message.pubKey = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): KeygenParticipant {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      weight: isSet(object.weight) ? bytesFromBase64(object.weight) : new Uint8Array(),
      pubKey: isSet(object.pubKey) ? String(object.pubKey) : ""
    };
  },

  toJSON(message: KeygenParticipant): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.weight !== undefined && (obj.weight = base64FromBytes(message.weight !== undefined ? message.weight : new Uint8Array()));
    message.pubKey !== undefined && (obj.pubKey = message.pubKey);
    return obj;
  },

  fromPartial(object: DeepPartial<KeygenParticipant>): KeygenParticipant {
    const message = createBaseKeygenParticipant();
    message.address = object.address ?? "";
    message.weight = object.weight ?? new Uint8Array();
    message.pubKey = object.pubKey ?? "";
    return message;
  }

};

function createBaseKeyResponse(): KeyResponse {
  return {
    keyId: "",
    state: 0,
    startedAt: Long.ZERO,
    startedAtTimestamp: undefined,
    thresholdWeight: new Uint8Array(),
    bondedWeight: new Uint8Array(),
    participants: []
  };
}

export const KeyResponse = {
  encode(message: KeyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }

    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }

    if (!message.startedAt.isZero()) {
      writer.uint32(24).int64(message.startedAt);
    }

    if (message.startedAtTimestamp !== undefined) {
      Timestamp.encode(message.startedAtTimestamp, writer.uint32(34).fork()).ldelim();
    }

    if (message.thresholdWeight.length !== 0) {
      writer.uint32(42).bytes(message.thresholdWeight);
    }

    if (message.bondedWeight.length !== 0) {
      writer.uint32(50).bytes(message.bondedWeight);
    }

    for (const v of message.participants) {
      KeygenParticipant.encode(v!, writer.uint32(58).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeyResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.keyId = reader.string();
          break;

        case 2:
          message.state = (reader.int32() as any);
          break;

        case 3:
          message.startedAt = (reader.int64() as Long);
          break;

        case 4:
          message.startedAtTimestamp = Timestamp.decode(reader, reader.uint32());
          break;

        case 5:
          message.thresholdWeight = reader.bytes();
          break;

        case 6:
          message.bondedWeight = reader.bytes();
          break;

        case 7:
          message.participants.push(KeygenParticipant.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): KeyResponse {
    return {
      keyId: isSet(object.keyId) ? String(object.keyId) : "",
      state: isSet(object.state) ? keyStateFromJSON(object.state) : 0,
      startedAt: isSet(object.startedAt) ? Long.fromString(object.startedAt) : Long.ZERO,
      startedAtTimestamp: isSet(object.startedAtTimestamp) ? fromJsonTimestamp(object.startedAtTimestamp) : undefined,
      thresholdWeight: isSet(object.thresholdWeight) ? bytesFromBase64(object.thresholdWeight) : new Uint8Array(),
      bondedWeight: isSet(object.bondedWeight) ? bytesFromBase64(object.bondedWeight) : new Uint8Array(),
      participants: Array.isArray(object?.participants) ? object.participants.map((e: any) => KeygenParticipant.fromJSON(e)) : []
    };
  },

  toJSON(message: KeyResponse): unknown {
    const obj: any = {};
    message.keyId !== undefined && (obj.keyId = message.keyId);
    message.state !== undefined && (obj.state = keyStateToJSON(message.state));
    message.startedAt !== undefined && (obj.startedAt = (message.startedAt || Long.ZERO).toString());
    message.startedAtTimestamp !== undefined && (obj.startedAtTimestamp = fromTimestamp(message.startedAtTimestamp).toISOString());
    message.thresholdWeight !== undefined && (obj.thresholdWeight = base64FromBytes(message.thresholdWeight !== undefined ? message.thresholdWeight : new Uint8Array()));
    message.bondedWeight !== undefined && (obj.bondedWeight = base64FromBytes(message.bondedWeight !== undefined ? message.bondedWeight : new Uint8Array()));

    if (message.participants) {
      obj.participants = message.participants.map(e => e ? KeygenParticipant.toJSON(e) : undefined);
    } else {
      obj.participants = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<KeyResponse>): KeyResponse {
    const message = createBaseKeyResponse();
    message.keyId = object.keyId ?? "";
    message.state = object.state ?? 0;
    message.startedAt = object.startedAt !== undefined && object.startedAt !== null ? Long.fromValue(object.startedAt) : Long.ZERO;
    message.startedAtTimestamp = object.startedAtTimestamp !== undefined && object.startedAtTimestamp !== null ? Timestamp.fromPartial(object.startedAtTimestamp) : undefined;
    message.thresholdWeight = object.thresholdWeight ?? new Uint8Array();
    message.bondedWeight = object.bondedWeight ?? new Uint8Array();
    message.participants = object.participants?.map(e => KeygenParticipant.fromPartial(e)) || [];
    return message;
  }

};

function createBaseKeygenSessionRequest(): KeygenSessionRequest {
  return {
    keyId: ""
  };
}

export const KeygenSessionRequest = {
  encode(message: KeygenSessionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeygenSessionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeygenSessionRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.keyId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): KeygenSessionRequest {
    return {
      keyId: isSet(object.keyId) ? String(object.keyId) : ""
    };
  },

  toJSON(message: KeygenSessionRequest): unknown {
    const obj: any = {};
    message.keyId !== undefined && (obj.keyId = message.keyId);
    return obj;
  },

  fromPartial(object: DeepPartial<KeygenSessionRequest>): KeygenSessionRequest {
    const message = createBaseKeygenSessionRequest();
    message.keyId = object.keyId ?? "";
    return message;
  }

};

function createBaseKeygenSessionResponse(): KeygenSessionResponse {
  return {
    startedAt: Long.ZERO,
    startedAtTimestamp: undefined,
    expiresAt: Long.ZERO,
    completedAt: Long.ZERO,
    gracePeriod: Long.ZERO,
    state: 0,
    keygenThresholdWeight: new Uint8Array(),
    signingThresholdWeight: new Uint8Array(),
    bondedWeight: new Uint8Array(),
    participants: []
  };
}

export const KeygenSessionResponse = {
  encode(message: KeygenSessionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.startedAt.isZero()) {
      writer.uint32(8).int64(message.startedAt);
    }

    if (message.startedAtTimestamp !== undefined) {
      Timestamp.encode(message.startedAtTimestamp, writer.uint32(18).fork()).ldelim();
    }

    if (!message.expiresAt.isZero()) {
      writer.uint32(24).int64(message.expiresAt);
    }

    if (!message.completedAt.isZero()) {
      writer.uint32(32).int64(message.completedAt);
    }

    if (!message.gracePeriod.isZero()) {
      writer.uint32(40).int64(message.gracePeriod);
    }

    if (message.state !== 0) {
      writer.uint32(48).int32(message.state);
    }

    if (message.keygenThresholdWeight.length !== 0) {
      writer.uint32(58).bytes(message.keygenThresholdWeight);
    }

    if (message.signingThresholdWeight.length !== 0) {
      writer.uint32(66).bytes(message.signingThresholdWeight);
    }

    if (message.bondedWeight.length !== 0) {
      writer.uint32(74).bytes(message.bondedWeight);
    }

    for (const v of message.participants) {
      KeygenParticipant.encode(v!, writer.uint32(82).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeygenSessionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeygenSessionResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.startedAt = (reader.int64() as Long);
          break;

        case 2:
          message.startedAtTimestamp = Timestamp.decode(reader, reader.uint32());
          break;

        case 3:
          message.expiresAt = (reader.int64() as Long);
          break;

        case 4:
          message.completedAt = (reader.int64() as Long);
          break;

        case 5:
          message.gracePeriod = (reader.int64() as Long);
          break;

        case 6:
          message.state = (reader.int32() as any);
          break;

        case 7:
          message.keygenThresholdWeight = reader.bytes();
          break;

        case 8:
          message.signingThresholdWeight = reader.bytes();
          break;

        case 9:
          message.bondedWeight = reader.bytes();
          break;

        case 10:
          message.participants.push(KeygenParticipant.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): KeygenSessionResponse {
    return {
      startedAt: isSet(object.startedAt) ? Long.fromString(object.startedAt) : Long.ZERO,
      startedAtTimestamp: isSet(object.startedAtTimestamp) ? fromJsonTimestamp(object.startedAtTimestamp) : undefined,
      expiresAt: isSet(object.expiresAt) ? Long.fromString(object.expiresAt) : Long.ZERO,
      completedAt: isSet(object.completedAt) ? Long.fromString(object.completedAt) : Long.ZERO,
      gracePeriod: isSet(object.gracePeriod) ? Long.fromString(object.gracePeriod) : Long.ZERO,
      state: isSet(object.state) ? multisigStateFromJSON(object.state) : 0,
      keygenThresholdWeight: isSet(object.keygenThresholdWeight) ? bytesFromBase64(object.keygenThresholdWeight) : new Uint8Array(),
      signingThresholdWeight: isSet(object.signingThresholdWeight) ? bytesFromBase64(object.signingThresholdWeight) : new Uint8Array(),
      bondedWeight: isSet(object.bondedWeight) ? bytesFromBase64(object.bondedWeight) : new Uint8Array(),
      participants: Array.isArray(object?.participants) ? object.participants.map((e: any) => KeygenParticipant.fromJSON(e)) : []
    };
  },

  toJSON(message: KeygenSessionResponse): unknown {
    const obj: any = {};
    message.startedAt !== undefined && (obj.startedAt = (message.startedAt || Long.ZERO).toString());
    message.startedAtTimestamp !== undefined && (obj.startedAtTimestamp = fromTimestamp(message.startedAtTimestamp).toISOString());
    message.expiresAt !== undefined && (obj.expiresAt = (message.expiresAt || Long.ZERO).toString());
    message.completedAt !== undefined && (obj.completedAt = (message.completedAt || Long.ZERO).toString());
    message.gracePeriod !== undefined && (obj.gracePeriod = (message.gracePeriod || Long.ZERO).toString());
    message.state !== undefined && (obj.state = multisigStateToJSON(message.state));
    message.keygenThresholdWeight !== undefined && (obj.keygenThresholdWeight = base64FromBytes(message.keygenThresholdWeight !== undefined ? message.keygenThresholdWeight : new Uint8Array()));
    message.signingThresholdWeight !== undefined && (obj.signingThresholdWeight = base64FromBytes(message.signingThresholdWeight !== undefined ? message.signingThresholdWeight : new Uint8Array()));
    message.bondedWeight !== undefined && (obj.bondedWeight = base64FromBytes(message.bondedWeight !== undefined ? message.bondedWeight : new Uint8Array()));

    if (message.participants) {
      obj.participants = message.participants.map(e => e ? KeygenParticipant.toJSON(e) : undefined);
    } else {
      obj.participants = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<KeygenSessionResponse>): KeygenSessionResponse {
    const message = createBaseKeygenSessionResponse();
    message.startedAt = object.startedAt !== undefined && object.startedAt !== null ? Long.fromValue(object.startedAt) : Long.ZERO;
    message.startedAtTimestamp = object.startedAtTimestamp !== undefined && object.startedAtTimestamp !== null ? Timestamp.fromPartial(object.startedAtTimestamp) : undefined;
    message.expiresAt = object.expiresAt !== undefined && object.expiresAt !== null ? Long.fromValue(object.expiresAt) : Long.ZERO;
    message.completedAt = object.completedAt !== undefined && object.completedAt !== null ? Long.fromValue(object.completedAt) : Long.ZERO;
    message.gracePeriod = object.gracePeriod !== undefined && object.gracePeriod !== null ? Long.fromValue(object.gracePeriod) : Long.ZERO;
    message.state = object.state ?? 0;
    message.keygenThresholdWeight = object.keygenThresholdWeight ?? new Uint8Array();
    message.signingThresholdWeight = object.signingThresholdWeight ?? new Uint8Array();
    message.bondedWeight = object.bondedWeight ?? new Uint8Array();
    message.participants = object.participants?.map(e => KeygenParticipant.fromPartial(e)) || [];
    return message;
  }

};