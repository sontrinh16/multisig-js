import { Trigger, Load } from "./types";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Long } from "@osmonauts/helpers";
export interface MsgCreateThought {
  program: string;
  trigger: Trigger;
  load: Load;
  name: string;
  particle: string;
}
export interface MsgForgetThought {
  program: string;
  name: string;
}
export interface MsgChangeThoughtParticle {
  program: string;
  name: string;
  particle: string;
}
export interface MsgChangeThoughtName {
  program: string;
  name: string;
  newName: string;
}
export interface MsgChangeThoughtInput {
  program: string;
  name: string;
  input: string;
}
export interface MsgChangeThoughtGasPrice {
  program: string;
  name: string;
  gasPrice: Coin;
}
export interface MsgChangeThoughtPeriod {
  program: string;
  name: string;
  period: Long;
}
export interface MsgChangeThoughtBlock {
  program: string;
  name: string;
  block: Long;
}
export interface MsgCreateThoughtResponse {}
export interface MsgForgetThoughtResponse {}
export interface MsgChangeThoughtParticleResponse {}
export interface MsgChangeThoughtNameResponse {}
export interface MsgChangeThoughtInputResponse {}
export interface MsgChangeThoughtGasPriceResponse {}
export interface MsgChangeThoughtPeriodResponse {}
export interface MsgChangeThoughtBlockResponse {}

function createBaseMsgCreateThought(): MsgCreateThought {
  return {
    program: "",
    trigger: undefined,
    load: undefined,
    name: "",
    particle: ""
  };
}

export const MsgCreateThought = {
  encode(message: MsgCreateThought, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateThought {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateThought();

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

  fromJSON(object: any): MsgCreateThought {
    return {
      program: isSet(object.program) ? String(object.program) : "",
      trigger: isSet(object.trigger) ? Trigger.fromJSON(object.trigger) : undefined,
      load: isSet(object.load) ? Load.fromJSON(object.load) : undefined,
      name: isSet(object.name) ? String(object.name) : "",
      particle: isSet(object.particle) ? String(object.particle) : ""
    };
  },

  toJSON(message: MsgCreateThought): unknown {
    const obj: any = {};
    message.program !== undefined && (obj.program = message.program);
    message.trigger !== undefined && (obj.trigger = message.trigger ? Trigger.toJSON(message.trigger) : undefined);
    message.load !== undefined && (obj.load = message.load ? Load.toJSON(message.load) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.particle !== undefined && (obj.particle = message.particle);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateThought>): MsgCreateThought {
    const message = createBaseMsgCreateThought();
    message.program = object.program ?? "";
    message.trigger = object.trigger !== undefined && object.trigger !== null ? Trigger.fromPartial(object.trigger) : undefined;
    message.load = object.load !== undefined && object.load !== null ? Load.fromPartial(object.load) : undefined;
    message.name = object.name ?? "";
    message.particle = object.particle ?? "";
    return message;
  }

};

function createBaseMsgForgetThought(): MsgForgetThought {
  return {
    program: "",
    name: ""
  };
}

export const MsgForgetThought = {
  encode(message: MsgForgetThought, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.program !== "") {
      writer.uint32(10).string(message.program);
    }

    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgForgetThought {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgForgetThought();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.program = reader.string();
          break;

        case 2:
          message.name = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgForgetThought {
    return {
      program: isSet(object.program) ? String(object.program) : "",
      name: isSet(object.name) ? String(object.name) : ""
    };
  },

  toJSON(message: MsgForgetThought): unknown {
    const obj: any = {};
    message.program !== undefined && (obj.program = message.program);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgForgetThought>): MsgForgetThought {
    const message = createBaseMsgForgetThought();
    message.program = object.program ?? "";
    message.name = object.name ?? "";
    return message;
  }

};

function createBaseMsgChangeThoughtParticle(): MsgChangeThoughtParticle {
  return {
    program: "",
    name: "",
    particle: ""
  };
}

export const MsgChangeThoughtParticle = {
  encode(message: MsgChangeThoughtParticle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.program !== "") {
      writer.uint32(10).string(message.program);
    }

    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }

    if (message.particle !== "") {
      writer.uint32(26).string(message.particle);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeThoughtParticle {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChangeThoughtParticle();

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
          message.particle = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgChangeThoughtParticle {
    return {
      program: isSet(object.program) ? String(object.program) : "",
      name: isSet(object.name) ? String(object.name) : "",
      particle: isSet(object.particle) ? String(object.particle) : ""
    };
  },

  toJSON(message: MsgChangeThoughtParticle): unknown {
    const obj: any = {};
    message.program !== undefined && (obj.program = message.program);
    message.name !== undefined && (obj.name = message.name);
    message.particle !== undefined && (obj.particle = message.particle);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgChangeThoughtParticle>): MsgChangeThoughtParticle {
    const message = createBaseMsgChangeThoughtParticle();
    message.program = object.program ?? "";
    message.name = object.name ?? "";
    message.particle = object.particle ?? "";
    return message;
  }

};

function createBaseMsgChangeThoughtName(): MsgChangeThoughtName {
  return {
    program: "",
    name: "",
    newName: ""
  };
}

export const MsgChangeThoughtName = {
  encode(message: MsgChangeThoughtName, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.program !== "") {
      writer.uint32(10).string(message.program);
    }

    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }

    if (message.newName !== "") {
      writer.uint32(26).string(message.newName);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeThoughtName {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChangeThoughtName();

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
          message.newName = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgChangeThoughtName {
    return {
      program: isSet(object.program) ? String(object.program) : "",
      name: isSet(object.name) ? String(object.name) : "",
      newName: isSet(object.newName) ? String(object.newName) : ""
    };
  },

  toJSON(message: MsgChangeThoughtName): unknown {
    const obj: any = {};
    message.program !== undefined && (obj.program = message.program);
    message.name !== undefined && (obj.name = message.name);
    message.newName !== undefined && (obj.newName = message.newName);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgChangeThoughtName>): MsgChangeThoughtName {
    const message = createBaseMsgChangeThoughtName();
    message.program = object.program ?? "";
    message.name = object.name ?? "";
    message.newName = object.newName ?? "";
    return message;
  }

};

function createBaseMsgChangeThoughtInput(): MsgChangeThoughtInput {
  return {
    program: "",
    name: "",
    input: ""
  };
}

export const MsgChangeThoughtInput = {
  encode(message: MsgChangeThoughtInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.program !== "") {
      writer.uint32(10).string(message.program);
    }

    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }

    if (message.input !== "") {
      writer.uint32(26).string(message.input);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeThoughtInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChangeThoughtInput();

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
          message.input = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgChangeThoughtInput {
    return {
      program: isSet(object.program) ? String(object.program) : "",
      name: isSet(object.name) ? String(object.name) : "",
      input: isSet(object.input) ? String(object.input) : ""
    };
  },

  toJSON(message: MsgChangeThoughtInput): unknown {
    const obj: any = {};
    message.program !== undefined && (obj.program = message.program);
    message.name !== undefined && (obj.name = message.name);
    message.input !== undefined && (obj.input = message.input);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgChangeThoughtInput>): MsgChangeThoughtInput {
    const message = createBaseMsgChangeThoughtInput();
    message.program = object.program ?? "";
    message.name = object.name ?? "";
    message.input = object.input ?? "";
    return message;
  }

};

function createBaseMsgChangeThoughtGasPrice(): MsgChangeThoughtGasPrice {
  return {
    program: "",
    name: "",
    gasPrice: undefined
  };
}

export const MsgChangeThoughtGasPrice = {
  encode(message: MsgChangeThoughtGasPrice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.program !== "") {
      writer.uint32(10).string(message.program);
    }

    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }

    if (message.gasPrice !== undefined) {
      Coin.encode(message.gasPrice, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeThoughtGasPrice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChangeThoughtGasPrice();

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
          message.gasPrice = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgChangeThoughtGasPrice {
    return {
      program: isSet(object.program) ? String(object.program) : "",
      name: isSet(object.name) ? String(object.name) : "",
      gasPrice: isSet(object.gasPrice) ? Coin.fromJSON(object.gasPrice) : undefined
    };
  },

  toJSON(message: MsgChangeThoughtGasPrice): unknown {
    const obj: any = {};
    message.program !== undefined && (obj.program = message.program);
    message.name !== undefined && (obj.name = message.name);
    message.gasPrice !== undefined && (obj.gasPrice = message.gasPrice ? Coin.toJSON(message.gasPrice) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgChangeThoughtGasPrice>): MsgChangeThoughtGasPrice {
    const message = createBaseMsgChangeThoughtGasPrice();
    message.program = object.program ?? "";
    message.name = object.name ?? "";
    message.gasPrice = object.gasPrice !== undefined && object.gasPrice !== null ? Coin.fromPartial(object.gasPrice) : undefined;
    return message;
  }

};

function createBaseMsgChangeThoughtPeriod(): MsgChangeThoughtPeriod {
  return {
    program: "",
    name: "",
    period: Long.UZERO
  };
}

export const MsgChangeThoughtPeriod = {
  encode(message: MsgChangeThoughtPeriod, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.program !== "") {
      writer.uint32(10).string(message.program);
    }

    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }

    if (!message.period.isZero()) {
      writer.uint32(24).uint64(message.period);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeThoughtPeriod {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChangeThoughtPeriod();

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
          message.period = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgChangeThoughtPeriod {
    return {
      program: isSet(object.program) ? String(object.program) : "",
      name: isSet(object.name) ? String(object.name) : "",
      period: isSet(object.period) ? Long.fromString(object.period) : Long.UZERO
    };
  },

  toJSON(message: MsgChangeThoughtPeriod): unknown {
    const obj: any = {};
    message.program !== undefined && (obj.program = message.program);
    message.name !== undefined && (obj.name = message.name);
    message.period !== undefined && (obj.period = (message.period || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgChangeThoughtPeriod>): MsgChangeThoughtPeriod {
    const message = createBaseMsgChangeThoughtPeriod();
    message.program = object.program ?? "";
    message.name = object.name ?? "";
    message.period = object.period !== undefined && object.period !== null ? Long.fromValue(object.period) : Long.UZERO;
    return message;
  }

};

function createBaseMsgChangeThoughtBlock(): MsgChangeThoughtBlock {
  return {
    program: "",
    name: "",
    block: Long.UZERO
  };
}

export const MsgChangeThoughtBlock = {
  encode(message: MsgChangeThoughtBlock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.program !== "") {
      writer.uint32(10).string(message.program);
    }

    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }

    if (!message.block.isZero()) {
      writer.uint32(24).uint64(message.block);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeThoughtBlock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChangeThoughtBlock();

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
          message.block = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgChangeThoughtBlock {
    return {
      program: isSet(object.program) ? String(object.program) : "",
      name: isSet(object.name) ? String(object.name) : "",
      block: isSet(object.block) ? Long.fromString(object.block) : Long.UZERO
    };
  },

  toJSON(message: MsgChangeThoughtBlock): unknown {
    const obj: any = {};
    message.program !== undefined && (obj.program = message.program);
    message.name !== undefined && (obj.name = message.name);
    message.block !== undefined && (obj.block = (message.block || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgChangeThoughtBlock>): MsgChangeThoughtBlock {
    const message = createBaseMsgChangeThoughtBlock();
    message.program = object.program ?? "";
    message.name = object.name ?? "";
    message.block = object.block !== undefined && object.block !== null ? Long.fromValue(object.block) : Long.UZERO;
    return message;
  }

};

function createBaseMsgCreateThoughtResponse(): MsgCreateThoughtResponse {
  return {};
}

export const MsgCreateThoughtResponse = {
  encode(_: MsgCreateThoughtResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateThoughtResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateThoughtResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgCreateThoughtResponse {
    return {};
  },

  toJSON(_: MsgCreateThoughtResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreateThoughtResponse>): MsgCreateThoughtResponse {
    const message = createBaseMsgCreateThoughtResponse();
    return message;
  }

};

function createBaseMsgForgetThoughtResponse(): MsgForgetThoughtResponse {
  return {};
}

export const MsgForgetThoughtResponse = {
  encode(_: MsgForgetThoughtResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgForgetThoughtResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgForgetThoughtResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgForgetThoughtResponse {
    return {};
  },

  toJSON(_: MsgForgetThoughtResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgForgetThoughtResponse>): MsgForgetThoughtResponse {
    const message = createBaseMsgForgetThoughtResponse();
    return message;
  }

};

function createBaseMsgChangeThoughtParticleResponse(): MsgChangeThoughtParticleResponse {
  return {};
}

export const MsgChangeThoughtParticleResponse = {
  encode(_: MsgChangeThoughtParticleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeThoughtParticleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChangeThoughtParticleResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgChangeThoughtParticleResponse {
    return {};
  },

  toJSON(_: MsgChangeThoughtParticleResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgChangeThoughtParticleResponse>): MsgChangeThoughtParticleResponse {
    const message = createBaseMsgChangeThoughtParticleResponse();
    return message;
  }

};

function createBaseMsgChangeThoughtNameResponse(): MsgChangeThoughtNameResponse {
  return {};
}

export const MsgChangeThoughtNameResponse = {
  encode(_: MsgChangeThoughtNameResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeThoughtNameResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChangeThoughtNameResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgChangeThoughtNameResponse {
    return {};
  },

  toJSON(_: MsgChangeThoughtNameResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgChangeThoughtNameResponse>): MsgChangeThoughtNameResponse {
    const message = createBaseMsgChangeThoughtNameResponse();
    return message;
  }

};

function createBaseMsgChangeThoughtInputResponse(): MsgChangeThoughtInputResponse {
  return {};
}

export const MsgChangeThoughtInputResponse = {
  encode(_: MsgChangeThoughtInputResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeThoughtInputResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChangeThoughtInputResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgChangeThoughtInputResponse {
    return {};
  },

  toJSON(_: MsgChangeThoughtInputResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgChangeThoughtInputResponse>): MsgChangeThoughtInputResponse {
    const message = createBaseMsgChangeThoughtInputResponse();
    return message;
  }

};

function createBaseMsgChangeThoughtGasPriceResponse(): MsgChangeThoughtGasPriceResponse {
  return {};
}

export const MsgChangeThoughtGasPriceResponse = {
  encode(_: MsgChangeThoughtGasPriceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeThoughtGasPriceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChangeThoughtGasPriceResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgChangeThoughtGasPriceResponse {
    return {};
  },

  toJSON(_: MsgChangeThoughtGasPriceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgChangeThoughtGasPriceResponse>): MsgChangeThoughtGasPriceResponse {
    const message = createBaseMsgChangeThoughtGasPriceResponse();
    return message;
  }

};

function createBaseMsgChangeThoughtPeriodResponse(): MsgChangeThoughtPeriodResponse {
  return {};
}

export const MsgChangeThoughtPeriodResponse = {
  encode(_: MsgChangeThoughtPeriodResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeThoughtPeriodResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChangeThoughtPeriodResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgChangeThoughtPeriodResponse {
    return {};
  },

  toJSON(_: MsgChangeThoughtPeriodResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgChangeThoughtPeriodResponse>): MsgChangeThoughtPeriodResponse {
    const message = createBaseMsgChangeThoughtPeriodResponse();
    return message;
  }

};

function createBaseMsgChangeThoughtBlockResponse(): MsgChangeThoughtBlockResponse {
  return {};
}

export const MsgChangeThoughtBlockResponse = {
  encode(_: MsgChangeThoughtBlockResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeThoughtBlockResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChangeThoughtBlockResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgChangeThoughtBlockResponse {
    return {};
  },

  toJSON(_: MsgChangeThoughtBlockResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgChangeThoughtBlockResponse>): MsgChangeThoughtBlockResponse {
    const message = createBaseMsgChangeThoughtBlockResponse();
    return message;
  }

};