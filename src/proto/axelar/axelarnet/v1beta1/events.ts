import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, DeepPartial, bytesFromBase64, base64FromBytes } from "@osmonauts/helpers";
export interface IBCTransferSent {
  id: Long;
  receipient: string;
  asset: Coin;
  sequence: Long;
  portId: string;
  channelId: string;
}
export interface IBCTransferCompleted {
  id: Long;
  sequence: Long;
  portId: string;
  channelId: string;
}
export interface IBCTransferFailed {
  id: Long;
  sequence: Long;
  portId: string;
  channelId: string;
}
export interface IBCTransferRetried {
  id: Long;
  receipient: string;
  asset: Coin;
  sequence: Long;
  portId: string;
  channelId: string;
}
export interface AxelarTransferCompleted {
  id: Long;
  receipient: string;
  asset: Coin;
}
export interface FeeCollected {
  collector: Uint8Array;
  fee: Coin;
}

function createBaseIBCTransferSent(): IBCTransferSent {
  return {
    id: Long.UZERO,
    receipient: "",
    asset: undefined,
    sequence: Long.UZERO,
    portId: "",
    channelId: ""
  };
}

export const IBCTransferSent = {
  encode(message: IBCTransferSent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (message.receipient !== "") {
      writer.uint32(18).string(message.receipient);
    }

    if (message.asset !== undefined) {
      Coin.encode(message.asset, writer.uint32(26).fork()).ldelim();
    }

    if (!message.sequence.isZero()) {
      writer.uint32(32).uint64(message.sequence);
    }

    if (message.portId !== "") {
      writer.uint32(42).string(message.portId);
    }

    if (message.channelId !== "") {
      writer.uint32(50).string(message.channelId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IBCTransferSent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIBCTransferSent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.receipient = reader.string();
          break;

        case 3:
          message.asset = Coin.decode(reader, reader.uint32());
          break;

        case 4:
          message.sequence = (reader.uint64() as Long);
          break;

        case 5:
          message.portId = reader.string();
          break;

        case 6:
          message.channelId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): IBCTransferSent {
    return {
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
      receipient: isSet(object.receipient) ? String(object.receipient) : "",
      asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined,
      sequence: isSet(object.sequence) ? Long.fromString(object.sequence) : Long.UZERO,
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : ""
    };
  },

  toJSON(message: IBCTransferSent): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.receipient !== undefined && (obj.receipient = message.receipient);
    message.asset !== undefined && (obj.asset = message.asset ? Coin.toJSON(message.asset) : undefined);
    message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    return obj;
  },

  fromPartial(object: DeepPartial<IBCTransferSent>): IBCTransferSent {
    const message = createBaseIBCTransferSent();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.receipient = object.receipient ?? "";
    message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  }

};

function createBaseIBCTransferCompleted(): IBCTransferCompleted {
  return {
    id: Long.UZERO,
    sequence: Long.UZERO,
    portId: "",
    channelId: ""
  };
}

export const IBCTransferCompleted = {
  encode(message: IBCTransferCompleted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (!message.sequence.isZero()) {
      writer.uint32(16).uint64(message.sequence);
    }

    if (message.portId !== "") {
      writer.uint32(26).string(message.portId);
    }

    if (message.channelId !== "") {
      writer.uint32(34).string(message.channelId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IBCTransferCompleted {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIBCTransferCompleted();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.sequence = (reader.uint64() as Long);
          break;

        case 3:
          message.portId = reader.string();
          break;

        case 4:
          message.channelId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): IBCTransferCompleted {
    return {
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
      sequence: isSet(object.sequence) ? Long.fromString(object.sequence) : Long.UZERO,
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : ""
    };
  },

  toJSON(message: IBCTransferCompleted): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    return obj;
  },

  fromPartial(object: DeepPartial<IBCTransferCompleted>): IBCTransferCompleted {
    const message = createBaseIBCTransferCompleted();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  }

};

function createBaseIBCTransferFailed(): IBCTransferFailed {
  return {
    id: Long.UZERO,
    sequence: Long.UZERO,
    portId: "",
    channelId: ""
  };
}

export const IBCTransferFailed = {
  encode(message: IBCTransferFailed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (!message.sequence.isZero()) {
      writer.uint32(16).uint64(message.sequence);
    }

    if (message.portId !== "") {
      writer.uint32(26).string(message.portId);
    }

    if (message.channelId !== "") {
      writer.uint32(34).string(message.channelId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IBCTransferFailed {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIBCTransferFailed();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.sequence = (reader.uint64() as Long);
          break;

        case 3:
          message.portId = reader.string();
          break;

        case 4:
          message.channelId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): IBCTransferFailed {
    return {
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
      sequence: isSet(object.sequence) ? Long.fromString(object.sequence) : Long.UZERO,
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : ""
    };
  },

  toJSON(message: IBCTransferFailed): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    return obj;
  },

  fromPartial(object: DeepPartial<IBCTransferFailed>): IBCTransferFailed {
    const message = createBaseIBCTransferFailed();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  }

};

function createBaseIBCTransferRetried(): IBCTransferRetried {
  return {
    id: Long.UZERO,
    receipient: "",
    asset: undefined,
    sequence: Long.UZERO,
    portId: "",
    channelId: ""
  };
}

export const IBCTransferRetried = {
  encode(message: IBCTransferRetried, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (message.receipient !== "") {
      writer.uint32(18).string(message.receipient);
    }

    if (message.asset !== undefined) {
      Coin.encode(message.asset, writer.uint32(26).fork()).ldelim();
    }

    if (!message.sequence.isZero()) {
      writer.uint32(32).uint64(message.sequence);
    }

    if (message.portId !== "") {
      writer.uint32(42).string(message.portId);
    }

    if (message.channelId !== "") {
      writer.uint32(50).string(message.channelId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IBCTransferRetried {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIBCTransferRetried();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.receipient = reader.string();
          break;

        case 3:
          message.asset = Coin.decode(reader, reader.uint32());
          break;

        case 4:
          message.sequence = (reader.uint64() as Long);
          break;

        case 5:
          message.portId = reader.string();
          break;

        case 6:
          message.channelId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): IBCTransferRetried {
    return {
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
      receipient: isSet(object.receipient) ? String(object.receipient) : "",
      asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined,
      sequence: isSet(object.sequence) ? Long.fromString(object.sequence) : Long.UZERO,
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : ""
    };
  },

  toJSON(message: IBCTransferRetried): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.receipient !== undefined && (obj.receipient = message.receipient);
    message.asset !== undefined && (obj.asset = message.asset ? Coin.toJSON(message.asset) : undefined);
    message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    return obj;
  },

  fromPartial(object: DeepPartial<IBCTransferRetried>): IBCTransferRetried {
    const message = createBaseIBCTransferRetried();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.receipient = object.receipient ?? "";
    message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  }

};

function createBaseAxelarTransferCompleted(): AxelarTransferCompleted {
  return {
    id: Long.UZERO,
    receipient: "",
    asset: undefined
  };
}

export const AxelarTransferCompleted = {
  encode(message: AxelarTransferCompleted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (message.receipient !== "") {
      writer.uint32(18).string(message.receipient);
    }

    if (message.asset !== undefined) {
      Coin.encode(message.asset, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AxelarTransferCompleted {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAxelarTransferCompleted();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.receipient = reader.string();
          break;

        case 3:
          message.asset = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AxelarTransferCompleted {
    return {
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
      receipient: isSet(object.receipient) ? String(object.receipient) : "",
      asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined
    };
  },

  toJSON(message: AxelarTransferCompleted): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.receipient !== undefined && (obj.receipient = message.receipient);
    message.asset !== undefined && (obj.asset = message.asset ? Coin.toJSON(message.asset) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<AxelarTransferCompleted>): AxelarTransferCompleted {
    const message = createBaseAxelarTransferCompleted();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.receipient = object.receipient ?? "";
    message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
    return message;
  }

};

function createBaseFeeCollected(): FeeCollected {
  return {
    collector: new Uint8Array(),
    fee: undefined
  };
}

export const FeeCollected = {
  encode(message: FeeCollected, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collector.length !== 0) {
      writer.uint32(10).bytes(message.collector);
    }

    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeeCollected {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeeCollected();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.collector = reader.bytes();
          break;

        case 2:
          message.fee = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): FeeCollected {
    return {
      collector: isSet(object.collector) ? bytesFromBase64(object.collector) : new Uint8Array(),
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined
    };
  },

  toJSON(message: FeeCollected): unknown {
    const obj: any = {};
    message.collector !== undefined && (obj.collector = base64FromBytes(message.collector !== undefined ? message.collector : new Uint8Array()));
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<FeeCollected>): FeeCollected {
    const message = createBaseFeeCollected();
    message.collector = object.collector ?? new Uint8Array();
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    return message;
  }

};