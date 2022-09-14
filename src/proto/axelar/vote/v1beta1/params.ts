import { Threshold } from "../../utils/v1beta1/threshold";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, DeepPartial } from "@osmonauts/helpers";

/** Params represent the genesis parameters for the module */
export interface Params {
  defaultVotingThreshold: Threshold;
  endBlockerLimit: Long;
}

function createBaseParams(): Params {
  return {
    defaultVotingThreshold: undefined,
    endBlockerLimit: Long.ZERO
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.defaultVotingThreshold !== undefined) {
      Threshold.encode(message.defaultVotingThreshold, writer.uint32(10).fork()).ldelim();
    }

    if (!message.endBlockerLimit.isZero()) {
      writer.uint32(16).int64(message.endBlockerLimit);
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
          message.defaultVotingThreshold = Threshold.decode(reader, reader.uint32());
          break;

        case 2:
          message.endBlockerLimit = (reader.int64() as Long);
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
      defaultVotingThreshold: isSet(object.defaultVotingThreshold) ? Threshold.fromJSON(object.defaultVotingThreshold) : undefined,
      endBlockerLimit: isSet(object.endBlockerLimit) ? Long.fromString(object.endBlockerLimit) : Long.ZERO
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.defaultVotingThreshold !== undefined && (obj.defaultVotingThreshold = message.defaultVotingThreshold ? Threshold.toJSON(message.defaultVotingThreshold) : undefined);
    message.endBlockerLimit !== undefined && (obj.endBlockerLimit = (message.endBlockerLimit || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.defaultVotingThreshold = object.defaultVotingThreshold !== undefined && object.defaultVotingThreshold !== null ? Threshold.fromPartial(object.defaultVotingThreshold) : undefined;
    message.endBlockerLimit = object.endBlockerLimit !== undefined && object.endBlockerLimit !== null ? Long.fromValue(object.endBlockerLimit) : Long.ZERO;
    return message;
  }

};