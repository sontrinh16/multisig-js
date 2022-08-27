import * as _m0 from "protobufjs/minimal";
import { Long, isSet, DeepPartial } from "@osmonauts/helpers";
export interface Params {
  calculationPeriod: Long;
  dampingFactor: string;
  tolerance: string;
}
export interface RankedParticle {
  particle: string;
  rank: Long;
}

function createBaseParams(): Params {
  return {
    calculationPeriod: Long.ZERO,
    dampingFactor: "",
    tolerance: ""
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.calculationPeriod.isZero()) {
      writer.uint32(8).int64(message.calculationPeriod);
    }

    if (message.dampingFactor !== "") {
      writer.uint32(18).string(message.dampingFactor);
    }

    if (message.tolerance !== "") {
      writer.uint32(26).string(message.tolerance);
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
          message.calculationPeriod = (reader.int64() as Long);
          break;

        case 2:
          message.dampingFactor = reader.string();
          break;

        case 3:
          message.tolerance = reader.string();
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
      calculationPeriod: isSet(object.calculationPeriod) ? Long.fromString(object.calculationPeriod) : Long.ZERO,
      dampingFactor: isSet(object.dampingFactor) ? String(object.dampingFactor) : "",
      tolerance: isSet(object.tolerance) ? String(object.tolerance) : ""
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.calculationPeriod !== undefined && (obj.calculationPeriod = (message.calculationPeriod || Long.ZERO).toString());
    message.dampingFactor !== undefined && (obj.dampingFactor = message.dampingFactor);
    message.tolerance !== undefined && (obj.tolerance = message.tolerance);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.calculationPeriod = object.calculationPeriod !== undefined && object.calculationPeriod !== null ? Long.fromValue(object.calculationPeriod) : Long.ZERO;
    message.dampingFactor = object.dampingFactor ?? "";
    message.tolerance = object.tolerance ?? "";
    return message;
  }

};

function createBaseRankedParticle(): RankedParticle {
  return {
    particle: "",
    rank: Long.UZERO
  };
}

export const RankedParticle = {
  encode(message: RankedParticle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.particle !== "") {
      writer.uint32(10).string(message.particle);
    }

    if (!message.rank.isZero()) {
      writer.uint32(16).uint64(message.rank);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RankedParticle {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRankedParticle();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.particle = reader.string();
          break;

        case 2:
          message.rank = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RankedParticle {
    return {
      particle: isSet(object.particle) ? String(object.particle) : "",
      rank: isSet(object.rank) ? Long.fromString(object.rank) : Long.UZERO
    };
  },

  toJSON(message: RankedParticle): unknown {
    const obj: any = {};
    message.particle !== undefined && (obj.particle = message.particle);
    message.rank !== undefined && (obj.rank = (message.rank || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<RankedParticle>): RankedParticle {
    const message = createBaseRankedParticle();
    message.particle = object.particle ?? "";
    message.rank = object.rank !== undefined && object.rank !== null ? Long.fromValue(object.rank) : Long.UZERO;
    return message;
  }

};