import { Params } from "./params";
import { Bitcannaid } from "./bitcannaid";
import { Supplychain } from "./supplychain";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, DeepPartial } from "@osmonauts/helpers";

/** GenesisState defines the bcna module's genesis state. */
export interface GenesisState {
  params: Params;
  bitcannaidList: Bitcannaid[];
  bitcannaidCount: Long;
  supplychainList: Supplychain[];
  supplychainCount: Long;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    bitcannaidList: [],
    bitcannaidCount: Long.UZERO,
    supplychainList: [],
    supplychainCount: Long.UZERO
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.bitcannaidList) {
      Bitcannaid.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (!message.bitcannaidCount.isZero()) {
      writer.uint32(24).uint64(message.bitcannaidCount);
    }

    for (const v of message.supplychainList) {
      Supplychain.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    if (!message.supplychainCount.isZero()) {
      writer.uint32(40).uint64(message.supplychainCount);
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
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 2:
          message.bitcannaidList.push(Bitcannaid.decode(reader, reader.uint32()));
          break;

        case 3:
          message.bitcannaidCount = (reader.uint64() as Long);
          break;

        case 4:
          message.supplychainList.push(Supplychain.decode(reader, reader.uint32()));
          break;

        case 5:
          message.supplychainCount = (reader.uint64() as Long);
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
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      bitcannaidList: Array.isArray(object?.bitcannaidList) ? object.bitcannaidList.map((e: any) => Bitcannaid.fromJSON(e)) : [],
      bitcannaidCount: isSet(object.bitcannaidCount) ? Long.fromString(object.bitcannaidCount) : Long.UZERO,
      supplychainList: Array.isArray(object?.supplychainList) ? object.supplychainList.map((e: any) => Supplychain.fromJSON(e)) : [],
      supplychainCount: isSet(object.supplychainCount) ? Long.fromString(object.supplychainCount) : Long.UZERO
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);

    if (message.bitcannaidList) {
      obj.bitcannaidList = message.bitcannaidList.map(e => e ? Bitcannaid.toJSON(e) : undefined);
    } else {
      obj.bitcannaidList = [];
    }

    message.bitcannaidCount !== undefined && (obj.bitcannaidCount = (message.bitcannaidCount || Long.UZERO).toString());

    if (message.supplychainList) {
      obj.supplychainList = message.supplychainList.map(e => e ? Supplychain.toJSON(e) : undefined);
    } else {
      obj.supplychainList = [];
    }

    message.supplychainCount !== undefined && (obj.supplychainCount = (message.supplychainCount || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.bitcannaidList = object.bitcannaidList?.map(e => Bitcannaid.fromPartial(e)) || [];
    message.bitcannaidCount = object.bitcannaidCount !== undefined && object.bitcannaidCount !== null ? Long.fromValue(object.bitcannaidCount) : Long.UZERO;
    message.supplychainList = object.supplychainList?.map(e => Supplychain.fromPartial(e)) || [];
    message.supplychainCount = object.supplychainCount !== undefined && object.supplychainCount !== null ? Long.fromValue(object.supplychainCount) : Long.UZERO;
    return message;
  }

};