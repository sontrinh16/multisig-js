import { ClassConfig, ClassParentType, classParentTypeFromJSON, classParentTypeToJSON } from "./class_data";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial } from "@osmonauts/helpers";
export interface ClassInput {
  name: string;
  symbol: string;
  description: string;
  uri: string;
  uriHash: string;
  metadata: Uint8Array;
  config: ClassConfig;
}
export interface ClassParentInput {
  type: ClassParentType;
  iscnIdPrefix?: string;
}

function createBaseClassInput(): ClassInput {
  return {
    name: "",
    symbol: "",
    description: "",
    uri: "",
    uriHash: "",
    metadata: new Uint8Array(),
    config: undefined
  };
}

export const ClassInput = {
  encode(message: ClassInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.symbol !== "") {
      writer.uint32(18).string(message.symbol);
    }

    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }

    if (message.uri !== "") {
      writer.uint32(34).string(message.uri);
    }

    if (message.uriHash !== "") {
      writer.uint32(42).string(message.uriHash);
    }

    if (message.metadata.length !== 0) {
      writer.uint32(50).bytes(message.metadata);
    }

    if (message.config !== undefined) {
      ClassConfig.encode(message.config, writer.uint32(58).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClassInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClassInput();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.symbol = reader.string();
          break;

        case 3:
          message.description = reader.string();
          break;

        case 4:
          message.uri = reader.string();
          break;

        case 5:
          message.uriHash = reader.string();
          break;

        case 6:
          message.metadata = reader.bytes();
          break;

        case 7:
          message.config = ClassConfig.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ClassInput {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      description: isSet(object.description) ? String(object.description) : "",
      uri: isSet(object.uri) ? String(object.uri) : "",
      uriHash: isSet(object.uriHash) ? String(object.uriHash) : "",
      metadata: isSet(object.metadata) ? bytesFromBase64(object.metadata) : new Uint8Array(),
      config: isSet(object.config) ? ClassConfig.fromJSON(object.config) : undefined
    };
  },

  toJSON(message: ClassInput): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.description !== undefined && (obj.description = message.description);
    message.uri !== undefined && (obj.uri = message.uri);
    message.uriHash !== undefined && (obj.uriHash = message.uriHash);
    message.metadata !== undefined && (obj.metadata = base64FromBytes(message.metadata !== undefined ? message.metadata : new Uint8Array()));
    message.config !== undefined && (obj.config = message.config ? ClassConfig.toJSON(message.config) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ClassInput>): ClassInput {
    const message = createBaseClassInput();
    message.name = object.name ?? "";
    message.symbol = object.symbol ?? "";
    message.description = object.description ?? "";
    message.uri = object.uri ?? "";
    message.uriHash = object.uriHash ?? "";
    message.metadata = object.metadata ?? new Uint8Array();
    message.config = object.config !== undefined && object.config !== null ? ClassConfig.fromPartial(object.config) : undefined;
    return message;
  }

};

function createBaseClassParentInput(): ClassParentInput {
  return {
    type: 0,
    iscnIdPrefix: undefined
  };
}

export const ClassParentInput = {
  encode(message: ClassParentInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }

    if (message.iscnIdPrefix !== undefined) {
      writer.uint32(18).string(message.iscnIdPrefix);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClassParentInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClassParentInput();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.type = (reader.int32() as any);
          break;

        case 2:
          message.iscnIdPrefix = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ClassParentInput {
    return {
      type: isSet(object.type) ? classParentTypeFromJSON(object.type) : 0,
      iscnIdPrefix: isSet(object.iscnIdPrefix) ? String(object.iscnIdPrefix) : undefined
    };
  },

  toJSON(message: ClassParentInput): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = classParentTypeToJSON(message.type));
    message.iscnIdPrefix !== undefined && (obj.iscnIdPrefix = message.iscnIdPrefix);
    return obj;
  },

  fromPartial(object: DeepPartial<ClassParentInput>): ClassParentInput {
    const message = createBaseClassParentInput();
    message.type = object.type ?? 0;
    message.iscnIdPrefix = object.iscnIdPrefix ?? undefined;
    return message;
  }

};