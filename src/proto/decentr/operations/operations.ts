import { DecCoin } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Long } from "@osmonauts/helpers";
export interface Params {
  supervisors: string[];
  fixedGas: FixedGasParams;
  minGasPrice: DecCoin;
}
export interface FixedGasParams {
  resetAccount: Long;
  distributeRewards: Long;
}

function createBaseParams(): Params {
  return {
    supervisors: [],
    fixedGas: undefined,
    minGasPrice: undefined
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.supervisors) {
      writer.uint32(10).string(v!);
    }

    if (message.fixedGas !== undefined) {
      FixedGasParams.encode(message.fixedGas, writer.uint32(18).fork()).ldelim();
    }

    if (message.minGasPrice !== undefined) {
      DecCoin.encode(message.minGasPrice, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.supervisors.push(reader.string());
          break;

        case 2:
          message.fixedGas = FixedGasParams.decode(reader, reader.uint32());
          break;

        case 3:
          message.minGasPrice = DecCoin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Params {
    return {
      supervisors: Array.isArray(object?.supervisors) ? object.supervisors.map((e: any) => String(e)) : [],
      fixedGas: isSet(object.fixedGas) ? FixedGasParams.fromJSON(object.fixedGas) : undefined,
      minGasPrice: isSet(object.minGasPrice) ? DecCoin.fromJSON(object.minGasPrice) : undefined
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};

    if (message.supervisors) {
      obj.supervisors = message.supervisors.map(e => e);
    } else {
      obj.supervisors = [];
    }

    message.fixedGas !== undefined && (obj.fixedGas = message.fixedGas ? FixedGasParams.toJSON(message.fixedGas) : undefined);
    message.minGasPrice !== undefined && (obj.minGasPrice = message.minGasPrice ? DecCoin.toJSON(message.minGasPrice) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.supervisors = object.supervisors?.map(e => e) || [];
    message.fixedGas = object.fixedGas !== undefined && object.fixedGas !== null ? FixedGasParams.fromPartial(object.fixedGas) : undefined;
    message.minGasPrice = object.minGasPrice !== undefined && object.minGasPrice !== null ? DecCoin.fromPartial(object.minGasPrice) : undefined;
    return message;
  }

};

function createBaseFixedGasParams(): FixedGasParams {
  return {
    resetAccount: Long.UZERO,
    distributeRewards: Long.UZERO
  };
}

export const FixedGasParams = {
  encode(message: FixedGasParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.resetAccount.isZero()) {
      writer.uint32(8).uint64(message.resetAccount);
    }

    if (!message.distributeRewards.isZero()) {
      writer.uint32(16).uint64(message.distributeRewards);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FixedGasParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFixedGasParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.resetAccount = (reader.uint64() as Long);
          break;

        case 2:
          message.distributeRewards = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): FixedGasParams {
    return {
      resetAccount: isSet(object.resetAccount) ? Long.fromString(object.resetAccount) : Long.UZERO,
      distributeRewards: isSet(object.distributeRewards) ? Long.fromString(object.distributeRewards) : Long.UZERO
    };
  },

  toJSON(message: FixedGasParams): unknown {
    const obj: any = {};
    message.resetAccount !== undefined && (obj.resetAccount = (message.resetAccount || Long.UZERO).toString());
    message.distributeRewards !== undefined && (obj.distributeRewards = (message.distributeRewards || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<FixedGasParams>): FixedGasParams {
    const message = createBaseFixedGasParams();
    message.resetAccount = object.resetAccount !== undefined && object.resetAccount !== null ? Long.fromValue(object.resetAccount) : Long.UZERO;
    message.distributeRewards = object.distributeRewards !== undefined && object.distributeRewards !== null ? Long.fromValue(object.distributeRewards) : Long.UZERO;
    return message;
  }

};