import { Duration } from "../../../google/protobuf/duration";
import { Bandwidth } from "../../types/v1/bandwidth";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, DeepPartial } from "@osmonauts/helpers";
export interface Proof {
  id: Long;
  duration: Duration;
  bandwidth: Bandwidth;
}

function createBaseProof(): Proof {
  return {
    id: Long.UZERO,
    duration: undefined,
    bandwidth: undefined
  };
}

export const Proof = {
  encode(message: Proof, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }

    if (message.bandwidth !== undefined) {
      Bandwidth.encode(message.bandwidth, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Proof {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProof();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.duration = Duration.decode(reader, reader.uint32());
          break;

        case 3:
          message.bandwidth = Bandwidth.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Proof {
    return {
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined,
      bandwidth: isSet(object.bandwidth) ? Bandwidth.fromJSON(object.bandwidth) : undefined
    };
  },

  toJSON(message: Proof): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.duration !== undefined && (obj.duration = message.duration);
    message.bandwidth !== undefined && (obj.bandwidth = message.bandwidth ? Bandwidth.toJSON(message.bandwidth) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Proof>): Proof {
    const message = createBaseProof();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.duration = object.duration ?? undefined;
    message.bandwidth = object.bandwidth !== undefined && object.bandwidth !== null ? Bandwidth.fromPartial(object.bandwidth) : undefined;
    return message;
  }

};