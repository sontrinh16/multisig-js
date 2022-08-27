import { Plan } from "./plan";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";
export interface GenesisPlan {
  plan: Plan;
  nodes: string[];
}

function createBaseGenesisPlan(): GenesisPlan {
  return {
    plan: undefined,
    nodes: []
  };
}

export const GenesisPlan = {
  encode(message: GenesisPlan, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.plan !== undefined) {
      Plan.encode(message.plan, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.nodes) {
      writer.uint32(18).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisPlan {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisPlan();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.plan = Plan.decode(reader, reader.uint32());
          break;

        case 2:
          message.nodes.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenesisPlan {
    return {
      plan: isSet(object.plan) ? Plan.fromJSON(object.plan) : undefined,
      nodes: Array.isArray(object?.nodes) ? object.nodes.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: GenesisPlan): unknown {
    const obj: any = {};
    message.plan !== undefined && (obj.plan = message.plan ? Plan.toJSON(message.plan) : undefined);

    if (message.nodes) {
      obj.nodes = message.nodes.map(e => e);
    } else {
      obj.nodes = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<GenesisPlan>): GenesisPlan {
    const message = createBaseGenesisPlan();
    message.plan = object.plan !== undefined && object.plan !== null ? Plan.fromPartial(object.plan) : undefined;
    message.nodes = object.nodes?.map(e => e) || [];
    return message;
  }

};