import { PaymentTemplate, PaymentContract, Subscription } from "./payments";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";

/** GenesisState defines the payments module's genesis state. */
export interface GenesisState {
  paymentTemplates: PaymentTemplate[];
  paymentContracts: PaymentContract[];
  subscriptions: Subscription[];
}

function createBaseGenesisState(): GenesisState {
  return {
    paymentTemplates: [],
    paymentContracts: [],
    subscriptions: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.paymentTemplates) {
      PaymentTemplate.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.paymentContracts) {
      PaymentContract.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.subscriptions) {
      Subscription.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.paymentTemplates.push(PaymentTemplate.decode(reader, reader.uint32()));
          break;

        case 2:
          message.paymentContracts.push(PaymentContract.decode(reader, reader.uint32()));
          break;

        case 3:
          message.subscriptions.push(Subscription.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      paymentTemplates: Array.isArray(object?.paymentTemplates) ? object.paymentTemplates.map((e: any) => PaymentTemplate.fromJSON(e)) : [],
      paymentContracts: Array.isArray(object?.paymentContracts) ? object.paymentContracts.map((e: any) => PaymentContract.fromJSON(e)) : [],
      subscriptions: Array.isArray(object?.subscriptions) ? object.subscriptions.map((e: any) => Subscription.fromJSON(e)) : []
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};

    if (message.paymentTemplates) {
      obj.paymentTemplates = message.paymentTemplates.map(e => e ? PaymentTemplate.toJSON(e) : undefined);
    } else {
      obj.paymentTemplates = [];
    }

    if (message.paymentContracts) {
      obj.paymentContracts = message.paymentContracts.map(e => e ? PaymentContract.toJSON(e) : undefined);
    } else {
      obj.paymentContracts = [];
    }

    if (message.subscriptions) {
      obj.subscriptions = message.subscriptions.map(e => e ? Subscription.toJSON(e) : undefined);
    } else {
      obj.subscriptions = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.paymentTemplates = object.paymentTemplates?.map(e => PaymentTemplate.fromPartial(e)) || [];
    message.paymentContracts = object.paymentContracts?.map(e => PaymentContract.fromPartial(e)) || [];
    message.subscriptions = object.subscriptions?.map(e => Subscription.fromPartial(e)) || [];
    return message;
  }

};