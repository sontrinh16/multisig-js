import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";
export interface ClassesByISCN {
  iscnIdPrefix: string;
  classIds: string[];
}

function createBaseClassesByISCN(): ClassesByISCN {
  return {
    iscnIdPrefix: "",
    classIds: []
  };
}

export const ClassesByISCN = {
  encode(message: ClassesByISCN, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.iscnIdPrefix !== "") {
      writer.uint32(10).string(message.iscnIdPrefix);
    }

    for (const v of message.classIds) {
      writer.uint32(18).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClassesByISCN {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClassesByISCN();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.iscnIdPrefix = reader.string();
          break;

        case 2:
          message.classIds.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ClassesByISCN {
    return {
      iscnIdPrefix: isSet(object.iscnIdPrefix) ? String(object.iscnIdPrefix) : "",
      classIds: Array.isArray(object?.classIds) ? object.classIds.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: ClassesByISCN): unknown {
    const obj: any = {};
    message.iscnIdPrefix !== undefined && (obj.iscnIdPrefix = message.iscnIdPrefix);

    if (message.classIds) {
      obj.classIds = message.classIds.map(e => e);
    } else {
      obj.classIds = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<ClassesByISCN>): ClassesByISCN {
    const message = createBaseClassesByISCN();
    message.iscnIdPrefix = object.iscnIdPrefix ?? "";
    message.classIds = object.classIds?.map(e => e) || [];
    return message;
  }

};