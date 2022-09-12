import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";
export interface PaymentInfo {
  purchaseId: string;
  processorName: string;
  payerAddr: string;
  amount: string;
  productId: string;
  signature: string;
}

function createBasePaymentInfo(): PaymentInfo {
  return {
    purchaseId: "",
    processorName: "",
    payerAddr: "",
    amount: "",
    productId: "",
    signature: ""
  };
}

export const PaymentInfo = {
  encode(message: PaymentInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.purchaseId !== "") {
      writer.uint32(10).string(message.purchaseId);
    }

    if (message.processorName !== "") {
      writer.uint32(18).string(message.processorName);
    }

    if (message.payerAddr !== "") {
      writer.uint32(26).string(message.payerAddr);
    }

    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }

    if (message.productId !== "") {
      writer.uint32(42).string(message.productId);
    }

    if (message.signature !== "") {
      writer.uint32(50).string(message.signature);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PaymentInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePaymentInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.purchaseId = reader.string();
          break;

        case 2:
          message.processorName = reader.string();
          break;

        case 3:
          message.payerAddr = reader.string();
          break;

        case 4:
          message.amount = reader.string();
          break;

        case 5:
          message.productId = reader.string();
          break;

        case 6:
          message.signature = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PaymentInfo {
    return {
      purchaseId: isSet(object.purchaseId) ? String(object.purchaseId) : "",
      processorName: isSet(object.processorName) ? String(object.processorName) : "",
      payerAddr: isSet(object.payerAddr) ? String(object.payerAddr) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      productId: isSet(object.productId) ? String(object.productId) : "",
      signature: isSet(object.signature) ? String(object.signature) : ""
    };
  },

  toJSON(message: PaymentInfo): unknown {
    const obj: any = {};
    message.purchaseId !== undefined && (obj.purchaseId = message.purchaseId);
    message.processorName !== undefined && (obj.processorName = message.processorName);
    message.payerAddr !== undefined && (obj.payerAddr = message.payerAddr);
    message.amount !== undefined && (obj.amount = message.amount);
    message.productId !== undefined && (obj.productId = message.productId);
    message.signature !== undefined && (obj.signature = message.signature);
    return obj;
  },

  fromPartial(object: DeepPartial<PaymentInfo>): PaymentInfo {
    const message = createBasePaymentInfo();
    message.purchaseId = object.purchaseId ?? "";
    message.processorName = object.processorName ?? "";
    message.payerAddr = object.payerAddr ?? "";
    message.amount = object.amount ?? "";
    message.productId = object.productId ?? "";
    message.signature = object.signature ?? "";
    return message;
  }

};