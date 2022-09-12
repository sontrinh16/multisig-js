import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Status, statusFromJSON, statusToJSON } from "../../types/v1/status";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, fromJsonTimestamp, fromTimestamp, DeepPartial } from "@osmonauts/helpers";
export interface Subscription {
  id: Long;
  owner: string;
  node: string;
  price: Coin;
  deposit: Coin;
  plan: Long;
  denom: string;
  expiry: Timestamp;
  free: string;
  status: Status;
  statusAt: Timestamp;
}

function createBaseSubscription(): Subscription {
  return {
    id: Long.UZERO,
    owner: "",
    node: "",
    price: undefined,
    deposit: undefined,
    plan: Long.UZERO,
    denom: "",
    expiry: undefined,
    free: "",
    status: 0,
    statusAt: undefined
  };
}

export const Subscription = {
  encode(message: Subscription, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }

    if (message.node !== "") {
      writer.uint32(26).string(message.node);
    }

    if (message.price !== undefined) {
      Coin.encode(message.price, writer.uint32(34).fork()).ldelim();
    }

    if (message.deposit !== undefined) {
      Coin.encode(message.deposit, writer.uint32(42).fork()).ldelim();
    }

    if (!message.plan.isZero()) {
      writer.uint32(48).uint64(message.plan);
    }

    if (message.denom !== "") {
      writer.uint32(58).string(message.denom);
    }

    if (message.expiry !== undefined) {
      Timestamp.encode(message.expiry, writer.uint32(66).fork()).ldelim();
    }

    if (message.free !== "") {
      writer.uint32(74).string(message.free);
    }

    if (message.status !== 0) {
      writer.uint32(80).int32(message.status);
    }

    if (message.statusAt !== undefined) {
      Timestamp.encode(message.statusAt, writer.uint32(90).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Subscription {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscription();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.owner = reader.string();
          break;

        case 3:
          message.node = reader.string();
          break;

        case 4:
          message.price = Coin.decode(reader, reader.uint32());
          break;

        case 5:
          message.deposit = Coin.decode(reader, reader.uint32());
          break;

        case 6:
          message.plan = (reader.uint64() as Long);
          break;

        case 7:
          message.denom = reader.string();
          break;

        case 8:
          message.expiry = Timestamp.decode(reader, reader.uint32());
          break;

        case 9:
          message.free = reader.string();
          break;

        case 10:
          message.status = (reader.int32() as any);
          break;

        case 11:
          message.statusAt = Timestamp.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Subscription {
    return {
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
      owner: isSet(object.owner) ? String(object.owner) : "",
      node: isSet(object.node) ? String(object.node) : "",
      price: isSet(object.price) ? Coin.fromJSON(object.price) : undefined,
      deposit: isSet(object.deposit) ? Coin.fromJSON(object.deposit) : undefined,
      plan: isSet(object.plan) ? Long.fromString(object.plan) : Long.UZERO,
      denom: isSet(object.denom) ? String(object.denom) : "",
      expiry: isSet(object.expiry) ? fromJsonTimestamp(object.expiry) : undefined,
      free: isSet(object.free) ? String(object.free) : "",
      status: isSet(object.status) ? statusFromJSON(object.status) : 0,
      statusAt: isSet(object.statusAt) ? fromJsonTimestamp(object.statusAt) : undefined
    };
  },

  toJSON(message: Subscription): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    message.node !== undefined && (obj.node = message.node);
    message.price !== undefined && (obj.price = message.price ? Coin.toJSON(message.price) : undefined);
    message.deposit !== undefined && (obj.deposit = message.deposit ? Coin.toJSON(message.deposit) : undefined);
    message.plan !== undefined && (obj.plan = (message.plan || Long.UZERO).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    message.expiry !== undefined && (obj.expiry = fromTimestamp(message.expiry).toISOString());
    message.free !== undefined && (obj.free = message.free);
    message.status !== undefined && (obj.status = statusToJSON(message.status));
    message.statusAt !== undefined && (obj.statusAt = fromTimestamp(message.statusAt).toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<Subscription>): Subscription {
    const message = createBaseSubscription();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.owner = object.owner ?? "";
    message.node = object.node ?? "";
    message.price = object.price !== undefined && object.price !== null ? Coin.fromPartial(object.price) : undefined;
    message.deposit = object.deposit !== undefined && object.deposit !== null ? Coin.fromPartial(object.deposit) : undefined;
    message.plan = object.plan !== undefined && object.plan !== null ? Long.fromValue(object.plan) : Long.UZERO;
    message.denom = object.denom ?? "";
    message.expiry = object.expiry !== undefined && object.expiry !== null ? Timestamp.fromPartial(object.expiry) : undefined;
    message.free = object.free ?? "";
    message.status = object.status ?? 0;
    message.statusAt = object.statusAt !== undefined && object.statusAt !== null ? Timestamp.fromPartial(object.statusAt) : undefined;
    return message;
  }

};