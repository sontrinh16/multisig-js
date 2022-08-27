import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial } from "@osmonauts/helpers";
export interface NFTInput {
  uri: string;
  uriHash: string;
  metadata: Uint8Array;
}

function createBaseNFTInput(): NFTInput {
  return {
    uri: "",
    uriHash: "",
    metadata: new Uint8Array()
  };
}

export const NFTInput = {
  encode(message: NFTInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uri !== "") {
      writer.uint32(10).string(message.uri);
    }

    if (message.uriHash !== "") {
      writer.uint32(18).string(message.uriHash);
    }

    if (message.metadata.length !== 0) {
      writer.uint32(26).bytes(message.metadata);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NFTInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNFTInput();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.uri = reader.string();
          break;

        case 2:
          message.uriHash = reader.string();
          break;

        case 3:
          message.metadata = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): NFTInput {
    return {
      uri: isSet(object.uri) ? String(object.uri) : "",
      uriHash: isSet(object.uriHash) ? String(object.uriHash) : "",
      metadata: isSet(object.metadata) ? bytesFromBase64(object.metadata) : new Uint8Array()
    };
  },

  toJSON(message: NFTInput): unknown {
    const obj: any = {};
    message.uri !== undefined && (obj.uri = message.uri);
    message.uriHash !== undefined && (obj.uriHash = message.uriHash);
    message.metadata !== undefined && (obj.metadata = base64FromBytes(message.metadata !== undefined ? message.metadata : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<NFTInput>): NFTInput {
    const message = createBaseNFTInput();
    message.uri = object.uri ?? "";
    message.uriHash = object.uriHash ?? "";
    message.metadata = object.metadata ?? new Uint8Array();
    return message;
  }

};