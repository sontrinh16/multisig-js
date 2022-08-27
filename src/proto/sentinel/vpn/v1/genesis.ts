import { Deposit } from "../../deposit/v1/deposit";
import { GenesisState as GenesisState1 } from "../../node/v1/genesis";
import { GenesisPlan } from "../../plan/v1/genesis";
import { GenesisState as GenesisState2 } from "../../provider/v1/genesis";
import { GenesisState as GenesisState3 } from "../../session/v1/genesis";
import { GenesisState as GenesisState4 } from "../../subscription/v1/genesis";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";
export interface GenesisState {
  deposits: Deposit[];
  nodes: GenesisState1;
  plans: GenesisPlan[];
  providers: GenesisState2;
  sessions: GenesisState3;
  subscriptions: GenesisState4;
}

function createBaseGenesisState(): GenesisState {
  return {
    deposits: [],
    nodes: undefined,
    plans: [],
    providers: undefined,
    sessions: undefined,
    subscriptions: undefined
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.deposits) {
      Deposit.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.nodes !== undefined) {
      GenesisState1.encode(message.nodes, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.plans) {
      GenesisPlan.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (message.providers !== undefined) {
      GenesisState2.encode(message.providers, writer.uint32(34).fork()).ldelim();
    }

    if (message.sessions !== undefined) {
      GenesisState3.encode(message.sessions, writer.uint32(42).fork()).ldelim();
    }

    if (message.subscriptions !== undefined) {
      GenesisState4.encode(message.subscriptions, writer.uint32(50).fork()).ldelim();
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
          message.deposits.push(Deposit.decode(reader, reader.uint32()));
          break;

        case 2:
          message.nodes = GenesisState1.decode(reader, reader.uint32());
          break;

        case 3:
          message.plans.push(GenesisPlan.decode(reader, reader.uint32()));
          break;

        case 4:
          message.providers = GenesisState2.decode(reader, reader.uint32());
          break;

        case 5:
          message.sessions = GenesisState3.decode(reader, reader.uint32());
          break;

        case 6:
          message.subscriptions = GenesisState4.decode(reader, reader.uint32());
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
      deposits: Array.isArray(object?.deposits) ? object.deposits.map((e: any) => Deposit.fromJSON(e)) : [],
      nodes: isSet(object.nodes) ? GenesisState1.fromJSON(object.nodes) : undefined,
      plans: Array.isArray(object?.plans) ? object.plans.map((e: any) => GenesisPlan.fromJSON(e)) : [],
      providers: isSet(object.providers) ? GenesisState2.fromJSON(object.providers) : undefined,
      sessions: isSet(object.sessions) ? GenesisState3.fromJSON(object.sessions) : undefined,
      subscriptions: isSet(object.subscriptions) ? GenesisState4.fromJSON(object.subscriptions) : undefined
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};

    if (message.deposits) {
      obj.deposits = message.deposits.map(e => e ? Deposit.toJSON(e) : undefined);
    } else {
      obj.deposits = [];
    }

    message.nodes !== undefined && (obj.nodes = message.nodes ? GenesisState1.toJSON(message.nodes) : undefined);

    if (message.plans) {
      obj.plans = message.plans.map(e => e ? GenesisPlan.toJSON(e) : undefined);
    } else {
      obj.plans = [];
    }

    message.providers !== undefined && (obj.providers = message.providers ? GenesisState2.toJSON(message.providers) : undefined);
    message.sessions !== undefined && (obj.sessions = message.sessions ? GenesisState3.toJSON(message.sessions) : undefined);
    message.subscriptions !== undefined && (obj.subscriptions = message.subscriptions ? GenesisState4.toJSON(message.subscriptions) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.deposits = object.deposits?.map(e => Deposit.fromPartial(e)) || [];
    message.nodes = object.nodes !== undefined && object.nodes !== null ? GenesisState.fromPartial(object.nodes) : undefined;
    message.plans = object.plans?.map(e => GenesisPlan.fromPartial(e)) || [];
    message.providers = object.providers !== undefined && object.providers !== null ? GenesisState.fromPartial(object.providers) : undefined;
    message.sessions = object.sessions !== undefined && object.sessions !== null ? GenesisState.fromPartial(object.sessions) : undefined;
    message.subscriptions = object.subscriptions !== undefined && object.subscriptions !== null ? GenesisState.fromPartial(object.subscriptions) : undefined;
    return message;
  }

};