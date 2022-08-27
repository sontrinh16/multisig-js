import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Long, bytesFromBase64, base64FromBytes } from "@osmonauts/helpers";
export interface RoyaltyConfigByClass {
  classId: string;
  royaltyConfig: RoyaltyConfig;
}
export interface RoyaltyConfig {
  rateBasisPoints: Long;
  stakeholders: RoyaltyStakeholder[];
}
export interface RoyaltyStakeholder {
  account: Uint8Array;
  weight: Long;
}
export interface RoyaltyConfigInput {
  rateBasisPoints: Long;
  stakeholders: RoyaltyStakeholderInput[];
}
export interface RoyaltyStakeholderInput {
  account: string;
  weight: Long;
}

function createBaseRoyaltyConfigByClass(): RoyaltyConfigByClass {
  return {
    classId: "",
    royaltyConfig: undefined
  };
}

export const RoyaltyConfigByClass = {
  encode(message: RoyaltyConfigByClass, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    if (message.royaltyConfig !== undefined) {
      RoyaltyConfig.encode(message.royaltyConfig, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RoyaltyConfigByClass {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoyaltyConfigByClass();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;

        case 2:
          message.royaltyConfig = RoyaltyConfig.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RoyaltyConfigByClass {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      royaltyConfig: isSet(object.royaltyConfig) ? RoyaltyConfig.fromJSON(object.royaltyConfig) : undefined
    };
  },

  toJSON(message: RoyaltyConfigByClass): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.royaltyConfig !== undefined && (obj.royaltyConfig = message.royaltyConfig ? RoyaltyConfig.toJSON(message.royaltyConfig) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<RoyaltyConfigByClass>): RoyaltyConfigByClass {
    const message = createBaseRoyaltyConfigByClass();
    message.classId = object.classId ?? "";
    message.royaltyConfig = object.royaltyConfig !== undefined && object.royaltyConfig !== null ? RoyaltyConfig.fromPartial(object.royaltyConfig) : undefined;
    return message;
  }

};

function createBaseRoyaltyConfig(): RoyaltyConfig {
  return {
    rateBasisPoints: Long.UZERO,
    stakeholders: []
  };
}

export const RoyaltyConfig = {
  encode(message: RoyaltyConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.rateBasisPoints.isZero()) {
      writer.uint32(8).uint64(message.rateBasisPoints);
    }

    for (const v of message.stakeholders) {
      RoyaltyStakeholder.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RoyaltyConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoyaltyConfig();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.rateBasisPoints = (reader.uint64() as Long);
          break;

        case 2:
          message.stakeholders.push(RoyaltyStakeholder.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RoyaltyConfig {
    return {
      rateBasisPoints: isSet(object.rateBasisPoints) ? Long.fromString(object.rateBasisPoints) : Long.UZERO,
      stakeholders: Array.isArray(object?.stakeholders) ? object.stakeholders.map((e: any) => RoyaltyStakeholder.fromJSON(e)) : []
    };
  },

  toJSON(message: RoyaltyConfig): unknown {
    const obj: any = {};
    message.rateBasisPoints !== undefined && (obj.rateBasisPoints = (message.rateBasisPoints || Long.UZERO).toString());

    if (message.stakeholders) {
      obj.stakeholders = message.stakeholders.map(e => e ? RoyaltyStakeholder.toJSON(e) : undefined);
    } else {
      obj.stakeholders = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<RoyaltyConfig>): RoyaltyConfig {
    const message = createBaseRoyaltyConfig();
    message.rateBasisPoints = object.rateBasisPoints !== undefined && object.rateBasisPoints !== null ? Long.fromValue(object.rateBasisPoints) : Long.UZERO;
    message.stakeholders = object.stakeholders?.map(e => RoyaltyStakeholder.fromPartial(e)) || [];
    return message;
  }

};

function createBaseRoyaltyStakeholder(): RoyaltyStakeholder {
  return {
    account: new Uint8Array(),
    weight: Long.UZERO
  };
}

export const RoyaltyStakeholder = {
  encode(message: RoyaltyStakeholder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account.length !== 0) {
      writer.uint32(10).bytes(message.account);
    }

    if (!message.weight.isZero()) {
      writer.uint32(16).uint64(message.weight);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RoyaltyStakeholder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoyaltyStakeholder();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.account = reader.bytes();
          break;

        case 2:
          message.weight = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RoyaltyStakeholder {
    return {
      account: isSet(object.account) ? bytesFromBase64(object.account) : new Uint8Array(),
      weight: isSet(object.weight) ? Long.fromString(object.weight) : Long.UZERO
    };
  },

  toJSON(message: RoyaltyStakeholder): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = base64FromBytes(message.account !== undefined ? message.account : new Uint8Array()));
    message.weight !== undefined && (obj.weight = (message.weight || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<RoyaltyStakeholder>): RoyaltyStakeholder {
    const message = createBaseRoyaltyStakeholder();
    message.account = object.account ?? new Uint8Array();
    message.weight = object.weight !== undefined && object.weight !== null ? Long.fromValue(object.weight) : Long.UZERO;
    return message;
  }

};

function createBaseRoyaltyConfigInput(): RoyaltyConfigInput {
  return {
    rateBasisPoints: Long.UZERO,
    stakeholders: []
  };
}

export const RoyaltyConfigInput = {
  encode(message: RoyaltyConfigInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.rateBasisPoints.isZero()) {
      writer.uint32(8).uint64(message.rateBasisPoints);
    }

    for (const v of message.stakeholders) {
      RoyaltyStakeholderInput.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RoyaltyConfigInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoyaltyConfigInput();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.rateBasisPoints = (reader.uint64() as Long);
          break;

        case 2:
          message.stakeholders.push(RoyaltyStakeholderInput.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RoyaltyConfigInput {
    return {
      rateBasisPoints: isSet(object.rateBasisPoints) ? Long.fromString(object.rateBasisPoints) : Long.UZERO,
      stakeholders: Array.isArray(object?.stakeholders) ? object.stakeholders.map((e: any) => RoyaltyStakeholderInput.fromJSON(e)) : []
    };
  },

  toJSON(message: RoyaltyConfigInput): unknown {
    const obj: any = {};
    message.rateBasisPoints !== undefined && (obj.rateBasisPoints = (message.rateBasisPoints || Long.UZERO).toString());

    if (message.stakeholders) {
      obj.stakeholders = message.stakeholders.map(e => e ? RoyaltyStakeholderInput.toJSON(e) : undefined);
    } else {
      obj.stakeholders = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<RoyaltyConfigInput>): RoyaltyConfigInput {
    const message = createBaseRoyaltyConfigInput();
    message.rateBasisPoints = object.rateBasisPoints !== undefined && object.rateBasisPoints !== null ? Long.fromValue(object.rateBasisPoints) : Long.UZERO;
    message.stakeholders = object.stakeholders?.map(e => RoyaltyStakeholderInput.fromPartial(e)) || [];
    return message;
  }

};

function createBaseRoyaltyStakeholderInput(): RoyaltyStakeholderInput {
  return {
    account: "",
    weight: Long.UZERO
  };
}

export const RoyaltyStakeholderInput = {
  encode(message: RoyaltyStakeholderInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }

    if (!message.weight.isZero()) {
      writer.uint32(16).uint64(message.weight);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RoyaltyStakeholderInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoyaltyStakeholderInput();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;

        case 2:
          message.weight = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RoyaltyStakeholderInput {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      weight: isSet(object.weight) ? Long.fromString(object.weight) : Long.UZERO
    };
  },

  toJSON(message: RoyaltyStakeholderInput): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.weight !== undefined && (obj.weight = (message.weight || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<RoyaltyStakeholderInput>): RoyaltyStakeholderInput {
    const message = createBaseRoyaltyStakeholderInput();
    message.account = object.account ?? "";
    message.weight = object.weight !== undefined && object.weight !== null ? Long.fromValue(object.weight) : Long.UZERO;
    return message;
  }

};