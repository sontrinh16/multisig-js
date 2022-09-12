import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial, Long, fromJsonTimestamp, fromTimestamp } from "@osmonauts/helpers";
export enum ClassParentType {
  UNKNOWN = 0,
  ISCN = 1,
  ACCOUNT = 2,
  UNRECOGNIZED = -1,
}
export function classParentTypeFromJSON(object: any): ClassParentType {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return ClassParentType.UNKNOWN;

    case 1:
    case "ISCN":
      return ClassParentType.ISCN;

    case 2:
    case "ACCOUNT":
      return ClassParentType.ACCOUNT;

    case -1:
    case "UNRECOGNIZED":
    default:
      return ClassParentType.UNRECOGNIZED;
  }
}
export function classParentTypeToJSON(object: ClassParentType): string {
  switch (object) {
    case ClassParentType.UNKNOWN:
      return "UNKNOWN";

    case ClassParentType.ISCN:
      return "ISCN";

    case ClassParentType.ACCOUNT:
      return "ACCOUNT";

    default:
      return "UNKNOWN";
  }
}
export interface ClassData {
  metadata: Uint8Array;
  parent: ClassParent;
  config: ClassConfig;
  blindBoxState: BlindBoxState;
}
export interface ClassParent {
  type: ClassParentType;
  iscnIdPrefix?: string;
  iscnVersionAtMint?: Long;
  account?: string;
}
export interface MintPeriod {
  startTime: Timestamp;
  allowedAddresses: string[];
  mintPrice: Long;
}
export interface ClassConfig {
  burnable: boolean;
  maxSupply: Long;
  blindBoxConfig?: BlindBoxConfig;
}
export interface BlindBoxConfig {
  mintPeriods: MintPeriod[];
  revealTime: Timestamp;
}
export interface BlindBoxState {
  contentCount: Long;
  toBeRevealed: boolean;
}

function createBaseClassData(): ClassData {
  return {
    metadata: new Uint8Array(),
    parent: undefined,
    config: undefined,
    blindBoxState: undefined
  };
}

export const ClassData = {
  encode(message: ClassData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.metadata.length !== 0) {
      writer.uint32(10).bytes(message.metadata);
    }

    if (message.parent !== undefined) {
      ClassParent.encode(message.parent, writer.uint32(18).fork()).ldelim();
    }

    if (message.config !== undefined) {
      ClassConfig.encode(message.config, writer.uint32(26).fork()).ldelim();
    }

    if (message.blindBoxState !== undefined) {
      BlindBoxState.encode(message.blindBoxState, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClassData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClassData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.metadata = reader.bytes();
          break;

        case 2:
          message.parent = ClassParent.decode(reader, reader.uint32());
          break;

        case 3:
          message.config = ClassConfig.decode(reader, reader.uint32());
          break;

        case 4:
          message.blindBoxState = BlindBoxState.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ClassData {
    return {
      metadata: isSet(object.metadata) ? bytesFromBase64(object.metadata) : new Uint8Array(),
      parent: isSet(object.parent) ? ClassParent.fromJSON(object.parent) : undefined,
      config: isSet(object.config) ? ClassConfig.fromJSON(object.config) : undefined,
      blindBoxState: isSet(object.blindBoxState) ? BlindBoxState.fromJSON(object.blindBoxState) : undefined
    };
  },

  toJSON(message: ClassData): unknown {
    const obj: any = {};
    message.metadata !== undefined && (obj.metadata = base64FromBytes(message.metadata !== undefined ? message.metadata : new Uint8Array()));
    message.parent !== undefined && (obj.parent = message.parent ? ClassParent.toJSON(message.parent) : undefined);
    message.config !== undefined && (obj.config = message.config ? ClassConfig.toJSON(message.config) : undefined);
    message.blindBoxState !== undefined && (obj.blindBoxState = message.blindBoxState ? BlindBoxState.toJSON(message.blindBoxState) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ClassData>): ClassData {
    const message = createBaseClassData();
    message.metadata = object.metadata ?? new Uint8Array();
    message.parent = object.parent !== undefined && object.parent !== null ? ClassParent.fromPartial(object.parent) : undefined;
    message.config = object.config !== undefined && object.config !== null ? ClassConfig.fromPartial(object.config) : undefined;
    message.blindBoxState = object.blindBoxState !== undefined && object.blindBoxState !== null ? BlindBoxState.fromPartial(object.blindBoxState) : undefined;
    return message;
  }

};

function createBaseClassParent(): ClassParent {
  return {
    type: 0,
    iscnIdPrefix: undefined,
    iscnVersionAtMint: undefined,
    account: undefined
  };
}

export const ClassParent = {
  encode(message: ClassParent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }

    if (message.iscnIdPrefix !== undefined) {
      writer.uint32(18).string(message.iscnIdPrefix);
    }

    if (message.iscnVersionAtMint !== undefined) {
      writer.uint32(24).uint64(message.iscnVersionAtMint);
    }

    if (message.account !== undefined) {
      writer.uint32(34).string(message.account);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClassParent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClassParent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.type = (reader.int32() as any);
          break;

        case 2:
          message.iscnIdPrefix = reader.string();
          break;

        case 3:
          message.iscnVersionAtMint = (reader.uint64() as Long);
          break;

        case 4:
          message.account = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ClassParent {
    return {
      type: isSet(object.type) ? classParentTypeFromJSON(object.type) : 0,
      iscnIdPrefix: isSet(object.iscnIdPrefix) ? String(object.iscnIdPrefix) : undefined,
      iscnVersionAtMint: isSet(object.iscnVersionAtMint) ? Long.fromString(object.iscnVersionAtMint) : undefined,
      account: isSet(object.account) ? String(object.account) : undefined
    };
  },

  toJSON(message: ClassParent): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = classParentTypeToJSON(message.type));
    message.iscnIdPrefix !== undefined && (obj.iscnIdPrefix = message.iscnIdPrefix);
    message.iscnVersionAtMint !== undefined && (obj.iscnVersionAtMint = (message.iscnVersionAtMint || undefined).toString());
    message.account !== undefined && (obj.account = message.account);
    return obj;
  },

  fromPartial(object: DeepPartial<ClassParent>): ClassParent {
    const message = createBaseClassParent();
    message.type = object.type ?? 0;
    message.iscnIdPrefix = object.iscnIdPrefix ?? undefined;
    message.iscnVersionAtMint = object.iscnVersionAtMint !== undefined && object.iscnVersionAtMint !== null ? Long.fromValue(object.iscnVersionAtMint) : undefined;
    message.account = object.account ?? undefined;
    return message;
  }

};

function createBaseMintPeriod(): MintPeriod {
  return {
    startTime: undefined,
    allowedAddresses: [],
    mintPrice: Long.UZERO
  };
}

export const MintPeriod = {
  encode(message: MintPeriod, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.startTime !== undefined) {
      Timestamp.encode(message.startTime, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.allowedAddresses) {
      writer.uint32(18).string(v!);
    }

    if (!message.mintPrice.isZero()) {
      writer.uint32(24).uint64(message.mintPrice);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MintPeriod {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMintPeriod();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.startTime = Timestamp.decode(reader, reader.uint32());
          break;

        case 2:
          message.allowedAddresses.push(reader.string());
          break;

        case 3:
          message.mintPrice = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MintPeriod {
    return {
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      allowedAddresses: Array.isArray(object?.allowedAddresses) ? object.allowedAddresses.map((e: any) => String(e)) : [],
      mintPrice: isSet(object.mintPrice) ? Long.fromString(object.mintPrice) : Long.UZERO
    };
  },

  toJSON(message: MintPeriod): unknown {
    const obj: any = {};
    message.startTime !== undefined && (obj.startTime = fromTimestamp(message.startTime).toISOString());

    if (message.allowedAddresses) {
      obj.allowedAddresses = message.allowedAddresses.map(e => e);
    } else {
      obj.allowedAddresses = [];
    }

    message.mintPrice !== undefined && (obj.mintPrice = (message.mintPrice || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MintPeriod>): MintPeriod {
    const message = createBaseMintPeriod();
    message.startTime = object.startTime !== undefined && object.startTime !== null ? Timestamp.fromPartial(object.startTime) : undefined;
    message.allowedAddresses = object.allowedAddresses?.map(e => e) || [];
    message.mintPrice = object.mintPrice !== undefined && object.mintPrice !== null ? Long.fromValue(object.mintPrice) : Long.UZERO;
    return message;
  }

};

function createBaseClassConfig(): ClassConfig {
  return {
    burnable: false,
    maxSupply: Long.UZERO,
    blindBoxConfig: undefined
  };
}

export const ClassConfig = {
  encode(message: ClassConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.burnable === true) {
      writer.uint32(8).bool(message.burnable);
    }

    if (!message.maxSupply.isZero()) {
      writer.uint32(16).uint64(message.maxSupply);
    }

    if (message.blindBoxConfig !== undefined) {
      BlindBoxConfig.encode(message.blindBoxConfig, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClassConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClassConfig();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.burnable = reader.bool();
          break;

        case 2:
          message.maxSupply = (reader.uint64() as Long);
          break;

        case 3:
          message.blindBoxConfig = BlindBoxConfig.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ClassConfig {
    return {
      burnable: isSet(object.burnable) ? Boolean(object.burnable) : false,
      maxSupply: isSet(object.maxSupply) ? Long.fromString(object.maxSupply) : Long.UZERO,
      blindBoxConfig: isSet(object.blindBoxConfig) ? BlindBoxConfig.fromJSON(object.blindBoxConfig) : undefined
    };
  },

  toJSON(message: ClassConfig): unknown {
    const obj: any = {};
    message.burnable !== undefined && (obj.burnable = message.burnable);
    message.maxSupply !== undefined && (obj.maxSupply = (message.maxSupply || Long.UZERO).toString());
    message.blindBoxConfig !== undefined && (obj.blindBoxConfig = message.blindBoxConfig ? BlindBoxConfig.toJSON(message.blindBoxConfig) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ClassConfig>): ClassConfig {
    const message = createBaseClassConfig();
    message.burnable = object.burnable ?? false;
    message.maxSupply = object.maxSupply !== undefined && object.maxSupply !== null ? Long.fromValue(object.maxSupply) : Long.UZERO;
    message.blindBoxConfig = object.blindBoxConfig !== undefined && object.blindBoxConfig !== null ? BlindBoxConfig.fromPartial(object.blindBoxConfig) : undefined;
    return message;
  }

};

function createBaseBlindBoxConfig(): BlindBoxConfig {
  return {
    mintPeriods: [],
    revealTime: undefined
  };
}

export const BlindBoxConfig = {
  encode(message: BlindBoxConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.mintPeriods) {
      MintPeriod.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.revealTime !== undefined) {
      Timestamp.encode(message.revealTime, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlindBoxConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlindBoxConfig();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.mintPeriods.push(MintPeriod.decode(reader, reader.uint32()));
          break;

        case 2:
          message.revealTime = Timestamp.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): BlindBoxConfig {
    return {
      mintPeriods: Array.isArray(object?.mintPeriods) ? object.mintPeriods.map((e: any) => MintPeriod.fromJSON(e)) : [],
      revealTime: isSet(object.revealTime) ? fromJsonTimestamp(object.revealTime) : undefined
    };
  },

  toJSON(message: BlindBoxConfig): unknown {
    const obj: any = {};

    if (message.mintPeriods) {
      obj.mintPeriods = message.mintPeriods.map(e => e ? MintPeriod.toJSON(e) : undefined);
    } else {
      obj.mintPeriods = [];
    }

    message.revealTime !== undefined && (obj.revealTime = fromTimestamp(message.revealTime).toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<BlindBoxConfig>): BlindBoxConfig {
    const message = createBaseBlindBoxConfig();
    message.mintPeriods = object.mintPeriods?.map(e => MintPeriod.fromPartial(e)) || [];
    message.revealTime = object.revealTime !== undefined && object.revealTime !== null ? Timestamp.fromPartial(object.revealTime) : undefined;
    return message;
  }

};

function createBaseBlindBoxState(): BlindBoxState {
  return {
    contentCount: Long.UZERO,
    toBeRevealed: false
  };
}

export const BlindBoxState = {
  encode(message: BlindBoxState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.contentCount.isZero()) {
      writer.uint32(8).uint64(message.contentCount);
    }

    if (message.toBeRevealed === true) {
      writer.uint32(16).bool(message.toBeRevealed);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlindBoxState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlindBoxState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contentCount = (reader.uint64() as Long);
          break;

        case 2:
          message.toBeRevealed = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): BlindBoxState {
    return {
      contentCount: isSet(object.contentCount) ? Long.fromString(object.contentCount) : Long.UZERO,
      toBeRevealed: isSet(object.toBeRevealed) ? Boolean(object.toBeRevealed) : false
    };
  },

  toJSON(message: BlindBoxState): unknown {
    const obj: any = {};
    message.contentCount !== undefined && (obj.contentCount = (message.contentCount || Long.UZERO).toString());
    message.toBeRevealed !== undefined && (obj.toBeRevealed = message.toBeRevealed);
    return obj;
  },

  fromPartial(object: DeepPartial<BlindBoxState>): BlindBoxState {
    const message = createBaseBlindBoxState();
    message.contentCount = object.contentCount !== undefined && object.contentCount !== null ? Long.fromValue(object.contentCount) : Long.UZERO;
    message.toBeRevealed = object.toBeRevealed ?? false;
    return message;
  }

};