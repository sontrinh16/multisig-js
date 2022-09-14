import { Params } from "./params";
import { LegacyAminoPubKey } from "../../../cosmos/crypto/multisig/keys";
import { GovAccount } from "./types";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";

/** GenesisState represents the genesis state */
export interface GenesisState {
  params: Params;
  governanceKey: LegacyAminoPubKey;
  govAccounts: GovAccount[];
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    governanceKey: undefined,
    govAccounts: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    if (message.governanceKey !== undefined) {
      LegacyAminoPubKey.encode(message.governanceKey, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.govAccounts) {
      GovAccount.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.governanceKey = LegacyAminoPubKey.decode(reader, reader.uint32());
          break;

        case 3:
          message.govAccounts.push(GovAccount.decode(reader, reader.uint32()));
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
      governanceKey: isSet(object.governanceKey) ? LegacyAminoPubKey.fromJSON(object.governanceKey) : undefined,
      govAccounts: Array.isArray(object?.govAccounts) ? object.govAccounts.map((e: any) => GovAccount.fromJSON(e)) : []
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.governanceKey !== undefined && (obj.governanceKey = message.governanceKey ? LegacyAminoPubKey.toJSON(message.governanceKey) : undefined);

    if (message.govAccounts) {
      obj.govAccounts = message.govAccounts.map(e => e ? GovAccount.toJSON(e) : undefined);
    } else {
      obj.govAccounts = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.governanceKey = object.governanceKey !== undefined && object.governanceKey !== null ? LegacyAminoPubKey.fromPartial(object.governanceKey) : undefined;
    message.govAccounts = object.govAccounts?.map(e => GovAccount.fromPartial(e)) || [];
    return message;
  }

};