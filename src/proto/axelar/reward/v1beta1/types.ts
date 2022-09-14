import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, bytesFromBase64, base64FromBytes } from "@osmonauts/helpers";
export interface Pool {
  name: string;
  rewards: Pool_Reward[];
}
export interface Pool_Reward {
  validator: Uint8Array;
  coins: Coin[];
}
export interface Refund {
  payer: Uint8Array;
  fees: Coin[];
}

function createBasePool(): Pool {
  return {
    name: "",
    rewards: []
  };
}

export const Pool = {
  encode(message: Pool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    for (const v of message.rewards) {
      Pool_Reward.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Pool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePool();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.rewards.push(Pool_Reward.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Pool {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => Pool_Reward.fromJSON(e)) : []
    };
  },

  toJSON(message: Pool): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);

    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? Pool_Reward.toJSON(e) : undefined);
    } else {
      obj.rewards = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<Pool>): Pool {
    const message = createBasePool();
    message.name = object.name ?? "";
    message.rewards = object.rewards?.map(e => Pool_Reward.fromPartial(e)) || [];
    return message;
  }

};

function createBasePool_Reward(): Pool_Reward {
  return {
    validator: new Uint8Array(),
    coins: []
  };
}

export const Pool_Reward = {
  encode(message: Pool_Reward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator.length !== 0) {
      writer.uint32(10).bytes(message.validator);
    }

    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Pool_Reward {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePool_Reward();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validator = reader.bytes();
          break;

        case 2:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Pool_Reward {
    return {
      validator: isSet(object.validator) ? bytesFromBase64(object.validator) : new Uint8Array(),
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: Pool_Reward): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = base64FromBytes(message.validator !== undefined ? message.validator : new Uint8Array()));

    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<Pool_Reward>): Pool_Reward {
    const message = createBasePool_Reward();
    message.validator = object.validator ?? new Uint8Array();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseRefund(): Refund {
  return {
    payer: new Uint8Array(),
    fees: []
  };
}

export const Refund = {
  encode(message: Refund, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payer.length !== 0) {
      writer.uint32(10).bytes(message.payer);
    }

    for (const v of message.fees) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Refund {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRefund();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.payer = reader.bytes();
          break;

        case 2:
          message.fees.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Refund {
    return {
      payer: isSet(object.payer) ? bytesFromBase64(object.payer) : new Uint8Array(),
      fees: Array.isArray(object?.fees) ? object.fees.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: Refund): unknown {
    const obj: any = {};
    message.payer !== undefined && (obj.payer = base64FromBytes(message.payer !== undefined ? message.payer : new Uint8Array()));

    if (message.fees) {
      obj.fees = message.fees.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.fees = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<Refund>): Refund {
    const message = createBaseRefund();
    message.payer = object.payer ?? new Uint8Array();
    message.fees = object.fees?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};