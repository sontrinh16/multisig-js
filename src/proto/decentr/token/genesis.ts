import { DecProto } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, isObject } from "@osmonauts/helpers";
export interface GenesisState_BalancesEntry {
  key: string;
  value: DecProto;
}
export interface GenesisState {
  balances: {
    [key: string]: DecProto;
  };
}

function createBaseGenesisState_BalancesEntry(): GenesisState_BalancesEntry {
  return {
    key: "",
    value: undefined
  };
}

export const GenesisState_BalancesEntry = {
  encode(message: GenesisState_BalancesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (message.value !== undefined) {
      cosmos.base.v1beta1.DecProto.encode(message.value, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState_BalancesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState_BalancesEntry();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;

        case 2:
          message.value = cosmos.base.v1beta1.DecProto.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenesisState_BalancesEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? cosmos.base.v1beta1.DecProto.fromJSON(object.value) : undefined
    };
  },

  toJSON(message: GenesisState_BalancesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? cosmos.base.v1beta1.DecProto.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState_BalancesEntry>): GenesisState_BalancesEntry {
    const message = createBaseGenesisState_BalancesEntry();
    message.key = object.key ?? "";
    message.value = object.value !== undefined && object.value !== null ? cosmos.base.v1beta1.DecProto.fromPartial(object.value) : undefined;
    return message;
  }

};

function createBaseGenesisState(): GenesisState {
  return {
    balances: {}
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.balances).forEach(([key, value]) => {
      GenesisState_BalancesEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(10).fork()).ldelim();
    });
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
          const entry1 = GenesisState_BalancesEntry.decode(reader, reader.uint32());

          if (entry1.value !== undefined) {
            message.balances[entry1.key] = entry1.value;
          }

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
      balances: isObject(object.balances) ? Object.entries(object.balances).reduce<{
        [key: string]: DecProto;
      }>((acc, [key, value]) => {
        acc[key] = DecProto.fromJSON(value);
        return acc;
      }, {}) : {}
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    obj.balances = {};

    if (message.balances) {
      Object.entries(message.balances).forEach(([k, v]) => {
        obj.balances[k] = DecProto.toJSON(v);
      });
    }

    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.balances = Object.entries(object.balances ?? {}).reduce<{
      [key: string]: DecProto;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = DecProto.fromPartial(value);
      }

      return acc;
    }, {});
    return message;
  }

};