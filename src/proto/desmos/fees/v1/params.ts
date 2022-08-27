import { MinFee } from "./min_fee";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";

/** Params contains the parameters for the fees module */
export interface Params {
  minFees: MinFee[];
}

function createBaseParams(): Params {
  return {
    minFees: []
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.minFees) {
      MinFee.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.minFees.push(MinFee.decode(reader, reader.uint32()));
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
      minFees: Array.isArray(object?.minFees) ? object.minFees.map((e: any) => MinFee.fromJSON(e)) : []
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};

    if (message.minFees) {
      obj.minFees = message.minFees.map(e => e ? MinFee.toJSON(e) : undefined);
    } else {
      obj.minFees = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.minFees = object.minFees?.map(e => MinFee.fromPartial(e)) || [];
    return message;
  }

};