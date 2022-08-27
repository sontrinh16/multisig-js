import { ClassParent } from "./class_data";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial } from "@osmonauts/helpers";
export interface NFTData {
  metadata: Uint8Array;
  classParent: ClassParent;
  toBeRevealed: boolean;
}

function createBaseNFTData(): NFTData {
  return {
    metadata: new Uint8Array(),
    classParent: undefined,
    toBeRevealed: false
  };
}

export const NFTData = {
  encode(message: NFTData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.metadata.length !== 0) {
      writer.uint32(10).bytes(message.metadata);
    }

    if (message.classParent !== undefined) {
      ClassParent.encode(message.classParent, writer.uint32(18).fork()).ldelim();
    }

    if (message.toBeRevealed === true) {
      writer.uint32(24).bool(message.toBeRevealed);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NFTData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNFTData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.metadata = reader.bytes();
          break;

        case 2:
          message.classParent = ClassParent.decode(reader, reader.uint32());
          break;

        case 3:
          message.toBeRevealed = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): NFTData {
    return {
      metadata: isSet(object.metadata) ? bytesFromBase64(object.metadata) : new Uint8Array(),
      classParent: isSet(object.classParent) ? ClassParent.fromJSON(object.classParent) : undefined,
      toBeRevealed: isSet(object.toBeRevealed) ? Boolean(object.toBeRevealed) : false
    };
  },

  toJSON(message: NFTData): unknown {
    const obj: any = {};
    message.metadata !== undefined && (obj.metadata = base64FromBytes(message.metadata !== undefined ? message.metadata : new Uint8Array()));
    message.classParent !== undefined && (obj.classParent = message.classParent ? ClassParent.toJSON(message.classParent) : undefined);
    message.toBeRevealed !== undefined && (obj.toBeRevealed = message.toBeRevealed);
    return obj;
  },

  fromPartial(object: DeepPartial<NFTData>): NFTData {
    const message = createBaseNFTData();
    message.metadata = object.metadata ?? new Uint8Array();
    message.classParent = object.classParent !== undefined && object.classParent !== null ? ClassParent.fromPartial(object.classParent) : undefined;
    message.toBeRevealed = object.toBeRevealed ?? false;
    return message;
  }

};