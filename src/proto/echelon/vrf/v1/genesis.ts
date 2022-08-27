import { Randomval } from "./randomval";
import { Userval } from "./userval";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";

/** GenesisState defines the vrf module's genesis state. */
export interface GenesisState {
  randomvalList: Randomval[];
  uservalList: Userval[];
}

function createBaseGenesisState(): GenesisState {
  return {
    randomvalList: [],
    uservalList: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.randomvalList) {
      Randomval.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.uservalList) {
      Userval.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.randomvalList.push(Randomval.decode(reader, reader.uint32()));
          break;

        case 2:
          message.uservalList.push(Userval.decode(reader, reader.uint32()));
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
      randomvalList: Array.isArray(object?.randomvalList) ? object.randomvalList.map((e: any) => Randomval.fromJSON(e)) : [],
      uservalList: Array.isArray(object?.uservalList) ? object.uservalList.map((e: any) => Userval.fromJSON(e)) : []
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};

    if (message.randomvalList) {
      obj.randomvalList = message.randomvalList.map(e => e ? Randomval.toJSON(e) : undefined);
    } else {
      obj.randomvalList = [];
    }

    if (message.uservalList) {
      obj.uservalList = message.uservalList.map(e => e ? Userval.toJSON(e) : undefined);
    } else {
      obj.uservalList = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.randomvalList = object.randomvalList?.map(e => Randomval.fromPartial(e)) || [];
    message.uservalList = object.uservalList?.map(e => Userval.fromPartial(e)) || [];
    return message;
  }

};