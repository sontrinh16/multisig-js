import { PaymentInfo } from "./payment_info";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";
export interface StripeRefund {
  payment: PaymentInfo;
  settled: boolean;
}

function createBaseStripeRefund(): StripeRefund {
  return {
    payment: undefined,
    settled: false
  };
}

export const StripeRefund = {
  encode(message: StripeRefund, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payment !== undefined) {
      PaymentInfo.encode(message.payment, writer.uint32(10).fork()).ldelim();
    }

    if (message.settled === true) {
      writer.uint32(16).bool(message.settled);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StripeRefund {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStripeRefund();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.payment = PaymentInfo.decode(reader, reader.uint32());
          break;

        case 2:
          message.settled = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): StripeRefund {
    return {
      payment: isSet(object.payment) ? PaymentInfo.fromJSON(object.payment) : undefined,
      settled: isSet(object.settled) ? Boolean(object.settled) : false
    };
  },

  toJSON(message: StripeRefund): unknown {
    const obj: any = {};
    message.payment !== undefined && (obj.payment = message.payment ? PaymentInfo.toJSON(message.payment) : undefined);
    message.settled !== undefined && (obj.settled = message.settled);
    return obj;
  },

  fromPartial(object: DeepPartial<StripeRefund>): StripeRefund {
    const message = createBaseStripeRefund();
    message.payment = object.payment !== undefined && object.payment !== null ? PaymentInfo.fromPartial(object.payment) : undefined;
    message.settled = object.settled ?? false;
    return message;
  }

};