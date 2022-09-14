import { Params } from "./params";
import { ProxiedValidator } from "./types";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";

/** GenesisState represents the genesis state */
export interface GenesisState {
  params: Params;
  proxiedValidators: ProxiedValidator[];
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    proxiedValidators: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.proxiedValidators) {
      ProxiedValidator.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.proxiedValidators.push(ProxiedValidator.decode(reader, reader.uint32()));
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
      proxiedValidators: Array.isArray(object?.proxiedValidators) ? object.proxiedValidators.map((e: any) => ProxiedValidator.fromJSON(e)) : []
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);

    if (message.proxiedValidators) {
      obj.proxiedValidators = message.proxiedValidators.map(e => e ? ProxiedValidator.toJSON(e) : undefined);
    } else {
      obj.proxiedValidators = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.proxiedValidators = object.proxiedValidators?.map(e => ProxiedValidator.fromPartial(e)) || [];
    return message;
  }

};