import * as _m0 from "protobufjs/minimal";
import { Long, isSet, DeepPartial } from "@osmonauts/helpers";
export interface Randomval {
  index: string;
  creator: string;
  vrv: string;
  multiplier: Long;
  proof: string;
  pubk: string;
  message: string;

  /** bytes to int converted */
  parsedvrv: Long;

  /**
   * floatvrv = full vrv / max uint64 to get number in
   * between or equal to 0 and 1
   */
  floatvrv: number;

  /** int vrv = floatvrv * multiplier */
  finalvrv: Long;

  /** float vrv = floatvrv * multiplier casted to int */
  finalvrvfl: number;
}

function createBaseRandomval(): Randomval {
  return {
    index: "",
    creator: "",
    vrv: "",
    multiplier: Long.UZERO,
    proof: "",
    pubk: "",
    message: "",
    parsedvrv: Long.UZERO,
    floatvrv: 0,
    finalvrv: Long.UZERO,
    finalvrvfl: 0
  };
}

export const Randomval = {
  encode(message: Randomval, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }

    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }

    if (message.vrv !== "") {
      writer.uint32(26).string(message.vrv);
    }

    if (!message.multiplier.isZero()) {
      writer.uint32(32).uint64(message.multiplier);
    }

    if (message.proof !== "") {
      writer.uint32(42).string(message.proof);
    }

    if (message.pubk !== "") {
      writer.uint32(50).string(message.pubk);
    }

    if (message.message !== "") {
      writer.uint32(58).string(message.message);
    }

    if (!message.parsedvrv.isZero()) {
      writer.uint32(64).uint64(message.parsedvrv);
    }

    if (message.floatvrv !== 0) {
      writer.uint32(73).double(message.floatvrv);
    }

    if (!message.finalvrv.isZero()) {
      writer.uint32(80).uint64(message.finalvrv);
    }

    if (message.finalvrvfl !== 0) {
      writer.uint32(89).double(message.finalvrvfl);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Randomval {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRandomval();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;

        case 2:
          message.creator = reader.string();
          break;

        case 3:
          message.vrv = reader.string();
          break;

        case 4:
          message.multiplier = (reader.uint64() as Long);
          break;

        case 5:
          message.proof = reader.string();
          break;

        case 6:
          message.pubk = reader.string();
          break;

        case 7:
          message.message = reader.string();
          break;

        case 8:
          message.parsedvrv = (reader.uint64() as Long);
          break;

        case 9:
          message.floatvrv = reader.double();
          break;

        case 10:
          message.finalvrv = (reader.uint64() as Long);
          break;

        case 11:
          message.finalvrvfl = reader.double();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Randomval {
    return {
      index: isSet(object.index) ? String(object.index) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
      vrv: isSet(object.vrv) ? String(object.vrv) : "",
      multiplier: isSet(object.multiplier) ? Long.fromString(object.multiplier) : Long.UZERO,
      proof: isSet(object.proof) ? String(object.proof) : "",
      pubk: isSet(object.pubk) ? String(object.pubk) : "",
      message: isSet(object.message) ? String(object.message) : "",
      parsedvrv: isSet(object.parsedvrv) ? Long.fromString(object.parsedvrv) : Long.UZERO,
      floatvrv: isSet(object.floatvrv) ? Number(object.floatvrv) : 0,
      finalvrv: isSet(object.finalvrv) ? Long.fromString(object.finalvrv) : Long.UZERO,
      finalvrvfl: isSet(object.finalvrvfl) ? Number(object.finalvrvfl) : 0
    };
  },

  toJSON(message: Randomval): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.creator !== undefined && (obj.creator = message.creator);
    message.vrv !== undefined && (obj.vrv = message.vrv);
    message.multiplier !== undefined && (obj.multiplier = (message.multiplier || Long.UZERO).toString());
    message.proof !== undefined && (obj.proof = message.proof);
    message.pubk !== undefined && (obj.pubk = message.pubk);
    message.message !== undefined && (obj.message = message.message);
    message.parsedvrv !== undefined && (obj.parsedvrv = (message.parsedvrv || Long.UZERO).toString());
    message.floatvrv !== undefined && (obj.floatvrv = message.floatvrv);
    message.finalvrv !== undefined && (obj.finalvrv = (message.finalvrv || Long.UZERO).toString());
    message.finalvrvfl !== undefined && (obj.finalvrvfl = message.finalvrvfl);
    return obj;
  },

  fromPartial(object: DeepPartial<Randomval>): Randomval {
    const message = createBaseRandomval();
    message.index = object.index ?? "";
    message.creator = object.creator ?? "";
    message.vrv = object.vrv ?? "";
    message.multiplier = object.multiplier !== undefined && object.multiplier !== null ? Long.fromValue(object.multiplier) : Long.UZERO;
    message.proof = object.proof ?? "";
    message.pubk = object.pubk ?? "";
    message.message = object.message ?? "";
    message.parsedvrv = object.parsedvrv !== undefined && object.parsedvrv !== null ? Long.fromValue(object.parsedvrv) : Long.UZERO;
    message.floatvrv = object.floatvrv ?? 0;
    message.finalvrv = object.finalvrv !== undefined && object.finalvrv !== null ? Long.fromValue(object.finalvrv) : Long.UZERO;
    message.finalvrvfl = object.finalvrvfl ?? 0;
    return message;
  }

};