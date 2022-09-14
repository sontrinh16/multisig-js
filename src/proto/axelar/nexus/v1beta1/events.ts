import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, DeepPartial } from "@osmonauts/helpers";
export interface FeeDeducted {
  transferId: Long;
  recipientChain: string;
  recipientAddress: string;
  amount: Coin;
  fee: Coin;
}
export interface InsufficientFee {
  transferId: Long;
  recipientChain: string;
  recipientAddress: string;
  amount: Coin;
  fee: Coin;
}

function createBaseFeeDeducted(): FeeDeducted {
  return {
    transferId: Long.UZERO,
    recipientChain: "",
    recipientAddress: "",
    amount: undefined,
    fee: undefined
  };
}

export const FeeDeducted = {
  encode(message: FeeDeducted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.transferId.isZero()) {
      writer.uint32(8).uint64(message.transferId);
    }

    if (message.recipientChain !== "") {
      writer.uint32(18).string(message.recipientChain);
    }

    if (message.recipientAddress !== "") {
      writer.uint32(26).string(message.recipientAddress);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
    }

    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeeDeducted {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeeDeducted();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.transferId = (reader.uint64() as Long);
          break;

        case 2:
          message.recipientChain = reader.string();
          break;

        case 3:
          message.recipientAddress = reader.string();
          break;

        case 4:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        case 5:
          message.fee = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): FeeDeducted {
    return {
      transferId: isSet(object.transferId) ? Long.fromString(object.transferId) : Long.UZERO,
      recipientChain: isSet(object.recipientChain) ? String(object.recipientChain) : "",
      recipientAddress: isSet(object.recipientAddress) ? String(object.recipientAddress) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined
    };
  },

  toJSON(message: FeeDeducted): unknown {
    const obj: any = {};
    message.transferId !== undefined && (obj.transferId = (message.transferId || Long.UZERO).toString());
    message.recipientChain !== undefined && (obj.recipientChain = message.recipientChain);
    message.recipientAddress !== undefined && (obj.recipientAddress = message.recipientAddress);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<FeeDeducted>): FeeDeducted {
    const message = createBaseFeeDeducted();
    message.transferId = object.transferId !== undefined && object.transferId !== null ? Long.fromValue(object.transferId) : Long.UZERO;
    message.recipientChain = object.recipientChain ?? "";
    message.recipientAddress = object.recipientAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    return message;
  }

};

function createBaseInsufficientFee(): InsufficientFee {
  return {
    transferId: Long.UZERO,
    recipientChain: "",
    recipientAddress: "",
    amount: undefined,
    fee: undefined
  };
}

export const InsufficientFee = {
  encode(message: InsufficientFee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.transferId.isZero()) {
      writer.uint32(8).uint64(message.transferId);
    }

    if (message.recipientChain !== "") {
      writer.uint32(18).string(message.recipientChain);
    }

    if (message.recipientAddress !== "") {
      writer.uint32(26).string(message.recipientAddress);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
    }

    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InsufficientFee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInsufficientFee();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.transferId = (reader.uint64() as Long);
          break;

        case 2:
          message.recipientChain = reader.string();
          break;

        case 3:
          message.recipientAddress = reader.string();
          break;

        case 4:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        case 5:
          message.fee = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): InsufficientFee {
    return {
      transferId: isSet(object.transferId) ? Long.fromString(object.transferId) : Long.UZERO,
      recipientChain: isSet(object.recipientChain) ? String(object.recipientChain) : "",
      recipientAddress: isSet(object.recipientAddress) ? String(object.recipientAddress) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined
    };
  },

  toJSON(message: InsufficientFee): unknown {
    const obj: any = {};
    message.transferId !== undefined && (obj.transferId = (message.transferId || Long.UZERO).toString());
    message.recipientChain !== undefined && (obj.recipientChain = message.recipientChain);
    message.recipientAddress !== undefined && (obj.recipientAddress = message.recipientAddress);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<InsufficientFee>): InsufficientFee {
    const message = createBaseInsufficientFee();
    message.transferId = object.transferId !== undefined && object.transferId !== null ? Long.fromValue(object.transferId) : Long.UZERO;
    message.recipientChain = object.recipientChain ?? "";
    message.recipientAddress = object.recipientAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    return message;
  }

};