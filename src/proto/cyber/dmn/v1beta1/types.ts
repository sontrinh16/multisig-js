import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Long } from "@osmonauts/helpers";
export interface Params {
  maxSlots: number;
  maxGas: number;
  feeTtl: number;
}
export interface Thought {
  program: string;
  trigger: Trigger;
  load: Load;
  name: string;
  particle: string;
}
export interface Trigger {
  period: Long;
  block: Long;
}
export interface Load {
  input: string;
  gasPrice: Coin;
}
export interface ThoughtStats {
  program: string;
  name: string;
  calls: Long;
  fees: Long;
  gas: Long;
  lastBlock: Long;
}

function createBaseParams(): Params {
  return {
    maxSlots: 0,
    maxGas: 0,
    feeTtl: 0
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxSlots !== 0) {
      writer.uint32(8).uint32(message.maxSlots);
    }

    if (message.maxGas !== 0) {
      writer.uint32(16).uint32(message.maxGas);
    }

    if (message.feeTtl !== 0) {
      writer.uint32(24).uint32(message.feeTtl);
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
          message.maxSlots = reader.uint32();
          break;

        case 2:
          message.maxGas = reader.uint32();
          break;

        case 3:
          message.feeTtl = reader.uint32();
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
      maxSlots: isSet(object.maxSlots) ? Number(object.maxSlots) : 0,
      maxGas: isSet(object.maxGas) ? Number(object.maxGas) : 0,
      feeTtl: isSet(object.feeTtl) ? Number(object.feeTtl) : 0
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.maxSlots !== undefined && (obj.maxSlots = Math.round(message.maxSlots));
    message.maxGas !== undefined && (obj.maxGas = Math.round(message.maxGas));
    message.feeTtl !== undefined && (obj.feeTtl = Math.round(message.feeTtl));
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.maxSlots = object.maxSlots ?? 0;
    message.maxGas = object.maxGas ?? 0;
    message.feeTtl = object.feeTtl ?? 0;
    return message;
  }

};

function createBaseThought(): Thought {
  return {
    program: "",
    trigger: undefined,
    load: undefined,
    name: "",
    particle: ""
  };
}

export const Thought = {
  encode(message: Thought, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.program !== "") {
      writer.uint32(10).string(message.program);
    }

    if (message.trigger !== undefined) {
      Trigger.encode(message.trigger, writer.uint32(18).fork()).ldelim();
    }

    if (message.load !== undefined) {
      Load.encode(message.load, writer.uint32(26).fork()).ldelim();
    }

    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }

    if (message.particle !== "") {
      writer.uint32(42).string(message.particle);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Thought {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseThought();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.program = reader.string();
          break;

        case 2:
          message.trigger = Trigger.decode(reader, reader.uint32());
          break;

        case 3:
          message.load = Load.decode(reader, reader.uint32());
          break;

        case 4:
          message.name = reader.string();
          break;

        case 5:
          message.particle = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Thought {
    return {
      program: isSet(object.program) ? String(object.program) : "",
      trigger: isSet(object.trigger) ? Trigger.fromJSON(object.trigger) : undefined,
      load: isSet(object.load) ? Load.fromJSON(object.load) : undefined,
      name: isSet(object.name) ? String(object.name) : "",
      particle: isSet(object.particle) ? String(object.particle) : ""
    };
  },

  toJSON(message: Thought): unknown {
    const obj: any = {};
    message.program !== undefined && (obj.program = message.program);
    message.trigger !== undefined && (obj.trigger = message.trigger ? Trigger.toJSON(message.trigger) : undefined);
    message.load !== undefined && (obj.load = message.load ? Load.toJSON(message.load) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.particle !== undefined && (obj.particle = message.particle);
    return obj;
  },

  fromPartial(object: DeepPartial<Thought>): Thought {
    const message = createBaseThought();
    message.program = object.program ?? "";
    message.trigger = object.trigger !== undefined && object.trigger !== null ? Trigger.fromPartial(object.trigger) : undefined;
    message.load = object.load !== undefined && object.load !== null ? Load.fromPartial(object.load) : undefined;
    message.name = object.name ?? "";
    message.particle = object.particle ?? "";
    return message;
  }

};

function createBaseTrigger(): Trigger {
  return {
    period: Long.UZERO,
    block: Long.UZERO
  };
}

export const Trigger = {
  encode(message: Trigger, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.period.isZero()) {
      writer.uint32(8).uint64(message.period);
    }

    if (!message.block.isZero()) {
      writer.uint32(16).uint64(message.block);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Trigger {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrigger();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.period = (reader.uint64() as Long);
          break;

        case 2:
          message.block = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Trigger {
    return {
      period: isSet(object.period) ? Long.fromString(object.period) : Long.UZERO,
      block: isSet(object.block) ? Long.fromString(object.block) : Long.UZERO
    };
  },

  toJSON(message: Trigger): unknown {
    const obj: any = {};
    message.period !== undefined && (obj.period = (message.period || Long.UZERO).toString());
    message.block !== undefined && (obj.block = (message.block || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<Trigger>): Trigger {
    const message = createBaseTrigger();
    message.period = object.period !== undefined && object.period !== null ? Long.fromValue(object.period) : Long.UZERO;
    message.block = object.block !== undefined && object.block !== null ? Long.fromValue(object.block) : Long.UZERO;
    return message;
  }

};

function createBaseLoad(): Load {
  return {
    input: "",
    gasPrice: undefined
  };
}

export const Load = {
  encode(message: Load, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.input !== "") {
      writer.uint32(10).string(message.input);
    }

    if (message.gasPrice !== undefined) {
      Coin.encode(message.gasPrice, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Load {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoad();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.input = reader.string();
          break;

        case 2:
          message.gasPrice = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Load {
    return {
      input: isSet(object.input) ? String(object.input) : "",
      gasPrice: isSet(object.gasPrice) ? Coin.fromJSON(object.gasPrice) : undefined
    };
  },

  toJSON(message: Load): unknown {
    const obj: any = {};
    message.input !== undefined && (obj.input = message.input);
    message.gasPrice !== undefined && (obj.gasPrice = message.gasPrice ? Coin.toJSON(message.gasPrice) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Load>): Load {
    const message = createBaseLoad();
    message.input = object.input ?? "";
    message.gasPrice = object.gasPrice !== undefined && object.gasPrice !== null ? Coin.fromPartial(object.gasPrice) : undefined;
    return message;
  }

};

function createBaseThoughtStats(): ThoughtStats {
  return {
    program: "",
    name: "",
    calls: Long.UZERO,
    fees: Long.UZERO,
    gas: Long.UZERO,
    lastBlock: Long.UZERO
  };
}

export const ThoughtStats = {
  encode(message: ThoughtStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.program !== "") {
      writer.uint32(10).string(message.program);
    }

    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }

    if (!message.calls.isZero()) {
      writer.uint32(24).uint64(message.calls);
    }

    if (!message.fees.isZero()) {
      writer.uint32(32).uint64(message.fees);
    }

    if (!message.gas.isZero()) {
      writer.uint32(40).uint64(message.gas);
    }

    if (!message.lastBlock.isZero()) {
      writer.uint32(48).uint64(message.lastBlock);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ThoughtStats {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseThoughtStats();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.program = reader.string();
          break;

        case 2:
          message.name = reader.string();
          break;

        case 3:
          message.calls = (reader.uint64() as Long);
          break;

        case 4:
          message.fees = (reader.uint64() as Long);
          break;

        case 5:
          message.gas = (reader.uint64() as Long);
          break;

        case 6:
          message.lastBlock = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ThoughtStats {
    return {
      program: isSet(object.program) ? String(object.program) : "",
      name: isSet(object.name) ? String(object.name) : "",
      calls: isSet(object.calls) ? Long.fromString(object.calls) : Long.UZERO,
      fees: isSet(object.fees) ? Long.fromString(object.fees) : Long.UZERO,
      gas: isSet(object.gas) ? Long.fromString(object.gas) : Long.UZERO,
      lastBlock: isSet(object.lastBlock) ? Long.fromString(object.lastBlock) : Long.UZERO
    };
  },

  toJSON(message: ThoughtStats): unknown {
    const obj: any = {};
    message.program !== undefined && (obj.program = message.program);
    message.name !== undefined && (obj.name = message.name);
    message.calls !== undefined && (obj.calls = (message.calls || Long.UZERO).toString());
    message.fees !== undefined && (obj.fees = (message.fees || Long.UZERO).toString());
    message.gas !== undefined && (obj.gas = (message.gas || Long.UZERO).toString());
    message.lastBlock !== undefined && (obj.lastBlock = (message.lastBlock || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<ThoughtStats>): ThoughtStats {
    const message = createBaseThoughtStats();
    message.program = object.program ?? "";
    message.name = object.name ?? "";
    message.calls = object.calls !== undefined && object.calls !== null ? Long.fromValue(object.calls) : Long.UZERO;
    message.fees = object.fees !== undefined && object.fees !== null ? Long.fromValue(object.fees) : Long.UZERO;
    message.gas = object.gas !== undefined && object.gas !== null ? Long.fromValue(object.gas) : Long.UZERO;
    message.lastBlock = object.lastBlock !== undefined && object.lastBlock !== null ? Long.fromValue(object.lastBlock) : Long.UZERO;
    return message;
  }

};