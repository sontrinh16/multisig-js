import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";
export interface AppleInAppPurchaseOrder {
  quantity: string;
  productId: string;
  purchaseId: string;
  purchaseDate: string;
  creator: string;
}

function createBaseAppleInAppPurchaseOrder(): AppleInAppPurchaseOrder {
  return {
    quantity: "",
    productId: "",
    purchaseId: "",
    purchaseDate: "",
    creator: ""
  };
}

export const AppleInAppPurchaseOrder = {
  encode(message: AppleInAppPurchaseOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.quantity !== "") {
      writer.uint32(10).string(message.quantity);
    }

    if (message.productId !== "") {
      writer.uint32(18).string(message.productId);
    }

    if (message.purchaseId !== "") {
      writer.uint32(26).string(message.purchaseId);
    }

    if (message.purchaseDate !== "") {
      writer.uint32(34).string(message.purchaseDate);
    }

    if (message.creator !== "") {
      writer.uint32(42).string(message.creator);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppleInAppPurchaseOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppleInAppPurchaseOrder();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.quantity = reader.string();
          break;

        case 2:
          message.productId = reader.string();
          break;

        case 3:
          message.purchaseId = reader.string();
          break;

        case 4:
          message.purchaseDate = reader.string();
          break;

        case 5:
          message.creator = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AppleInAppPurchaseOrder {
    return {
      quantity: isSet(object.quantity) ? String(object.quantity) : "",
      productId: isSet(object.productId) ? String(object.productId) : "",
      purchaseId: isSet(object.purchaseId) ? String(object.purchaseId) : "",
      purchaseDate: isSet(object.purchaseDate) ? String(object.purchaseDate) : "",
      creator: isSet(object.creator) ? String(object.creator) : ""
    };
  },

  toJSON(message: AppleInAppPurchaseOrder): unknown {
    const obj: any = {};
    message.quantity !== undefined && (obj.quantity = message.quantity);
    message.productId !== undefined && (obj.productId = message.productId);
    message.purchaseId !== undefined && (obj.purchaseId = message.purchaseId);
    message.purchaseDate !== undefined && (obj.purchaseDate = message.purchaseDate);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<AppleInAppPurchaseOrder>): AppleInAppPurchaseOrder {
    const message = createBaseAppleInAppPurchaseOrder();
    message.quantity = object.quantity ?? "";
    message.productId = object.productId ?? "";
    message.purchaseId = object.purchaseId ?? "";
    message.purchaseDate = object.purchaseDate ?? "";
    message.creator = object.creator ?? "";
    return message;
  }

};