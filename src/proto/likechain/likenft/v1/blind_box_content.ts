import { NFTInput } from "./nft_input";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";
export interface BlindBoxContent {
  classId: string;
  id: string;
  input: NFTInput;
}

function createBaseBlindBoxContent(): BlindBoxContent {
  return {
    classId: "",
    id: "",
    input: undefined
  };
}

export const BlindBoxContent = {
  encode(message: BlindBoxContent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }

    if (message.input !== undefined) {
      NFTInput.encode(message.input, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlindBoxContent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlindBoxContent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;

        case 2:
          message.id = reader.string();
          break;

        case 3:
          message.input = NFTInput.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): BlindBoxContent {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      id: isSet(object.id) ? String(object.id) : "",
      input: isSet(object.input) ? NFTInput.fromJSON(object.input) : undefined
    };
  },

  toJSON(message: BlindBoxContent): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.id !== undefined && (obj.id = message.id);
    message.input !== undefined && (obj.input = message.input ? NFTInput.toJSON(message.input) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<BlindBoxContent>): BlindBoxContent {
    const message = createBaseBlindBoxContent();
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    message.input = object.input !== undefined && object.input !== null ? NFTInput.fromPartial(object.input) : undefined;
    return message;
  }

};