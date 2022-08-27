import { Params } from "./params";
import { Pool } from "./pool";
import { LiquidityProvider } from "./types";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";

/**
 * GenesisState - all clp state that must be provided at genesis
 * TODO: Add parameters to Genesis state ,such as minimum liquidity required to
 * create a pool
 */
export interface GenesisState {
  params: Params;
  addressWhitelist: string[];
  poolList: Pool[];
  liquidityProviders: LiquidityProvider[];
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    addressWhitelist: [],
    poolList: [],
    liquidityProviders: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.addressWhitelist) {
      writer.uint32(18).string(v!);
    }

    for (const v of message.poolList) {
      Pool.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.liquidityProviders) {
      LiquidityProvider.encode(v!, writer.uint32(34).fork()).ldelim();
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
          message.addressWhitelist.push(reader.string());
          break;

        case 3:
          message.poolList.push(Pool.decode(reader, reader.uint32()));
          break;

        case 4:
          message.liquidityProviders.push(LiquidityProvider.decode(reader, reader.uint32()));
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
      addressWhitelist: Array.isArray(object?.addressWhitelist) ? object.addressWhitelist.map((e: any) => String(e)) : [],
      poolList: Array.isArray(object?.poolList) ? object.poolList.map((e: any) => Pool.fromJSON(e)) : [],
      liquidityProviders: Array.isArray(object?.liquidityProviders) ? object.liquidityProviders.map((e: any) => LiquidityProvider.fromJSON(e)) : []
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);

    if (message.addressWhitelist) {
      obj.addressWhitelist = message.addressWhitelist.map(e => e);
    } else {
      obj.addressWhitelist = [];
    }

    if (message.poolList) {
      obj.poolList = message.poolList.map(e => e ? Pool.toJSON(e) : undefined);
    } else {
      obj.poolList = [];
    }

    if (message.liquidityProviders) {
      obj.liquidityProviders = message.liquidityProviders.map(e => e ? LiquidityProvider.toJSON(e) : undefined);
    } else {
      obj.liquidityProviders = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.addressWhitelist = object.addressWhitelist?.map(e => e) || [];
    message.poolList = object.poolList?.map(e => Pool.fromPartial(e)) || [];
    message.liquidityProviders = object.liquidityProviders?.map(e => LiquidityProvider.fromPartial(e)) || [];
    return message;
  }

};