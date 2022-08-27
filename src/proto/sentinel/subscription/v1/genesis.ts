import { Subscription } from "./subscription";
import { Quota } from "./quota";
import { Params } from "./params";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";
export interface GenesisSubscription {
  subscription: Subscription;
  quotas: Quota[];
}
export interface GenesisState {
  subscriptions: GenesisSubscription[];
  params: Params;
}

function createBaseGenesisSubscription(): GenesisSubscription {
  return {
    subscription: undefined,
    quotas: []
  };
}

export const GenesisSubscription = {
  encode(message: GenesisSubscription, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subscription !== undefined) {
      Subscription.encode(message.subscription, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.quotas) {
      Quota.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisSubscription {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisSubscription();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.subscription = Subscription.decode(reader, reader.uint32());
          break;

        case 2:
          message.quotas.push(Quota.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenesisSubscription {
    return {
      subscription: isSet(object.subscription) ? Subscription.fromJSON(object.subscription) : undefined,
      quotas: Array.isArray(object?.quotas) ? object.quotas.map((e: any) => Quota.fromJSON(e)) : []
    };
  },

  toJSON(message: GenesisSubscription): unknown {
    const obj: any = {};
    message.subscription !== undefined && (obj.subscription = message.subscription ? Subscription.toJSON(message.subscription) : undefined);

    if (message.quotas) {
      obj.quotas = message.quotas.map(e => e ? Quota.toJSON(e) : undefined);
    } else {
      obj.quotas = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<GenesisSubscription>): GenesisSubscription {
    const message = createBaseGenesisSubscription();
    message.subscription = object.subscription !== undefined && object.subscription !== null ? Subscription.fromPartial(object.subscription) : undefined;
    message.quotas = object.quotas?.map(e => Quota.fromPartial(e)) || [];
    return message;
  }

};

function createBaseGenesisState(): GenesisState {
  return {
    subscriptions: [],
    params: undefined
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.subscriptions) {
      GenesisSubscription.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
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
          message.subscriptions.push(GenesisSubscription.decode(reader, reader.uint32()));
          break;

        case 2:
          message.params = Params.decode(reader, reader.uint32());
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
      subscriptions: Array.isArray(object?.subscriptions) ? object.subscriptions.map((e: any) => GenesisSubscription.fromJSON(e)) : [],
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};

    if (message.subscriptions) {
      obj.subscriptions = message.subscriptions.map(e => e ? GenesisSubscription.toJSON(e) : undefined);
    } else {
      obj.subscriptions = [];
    }

    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.subscriptions = object.subscriptions?.map(e => GenesisSubscription.fromPartial(e)) || [];
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }

};