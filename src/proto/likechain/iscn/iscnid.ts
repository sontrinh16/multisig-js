import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Long } from "@osmonauts/helpers";
export interface IscnIdPrefix {
  registryName: string;
  contentId: string;
}
export interface IscnId {
  prefix: IscnIdPrefix;
  version: Long;
}

function createBaseIscnIdPrefix(): IscnIdPrefix {
  return {
    registryName: "",
    contentId: ""
  };
}

export const IscnIdPrefix = {
  encode(message: IscnIdPrefix, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.registryName !== "") {
      writer.uint32(10).string(message.registryName);
    }

    if (message.contentId !== "") {
      writer.uint32(18).string(message.contentId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IscnIdPrefix {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIscnIdPrefix();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.registryName = reader.string();
          break;

        case 2:
          message.contentId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): IscnIdPrefix {
    return {
      registryName: isSet(object.registryName) ? String(object.registryName) : "",
      contentId: isSet(object.contentId) ? String(object.contentId) : ""
    };
  },

  toJSON(message: IscnIdPrefix): unknown {
    const obj: any = {};
    message.registryName !== undefined && (obj.registryName = message.registryName);
    message.contentId !== undefined && (obj.contentId = message.contentId);
    return obj;
  },

  fromPartial(object: DeepPartial<IscnIdPrefix>): IscnIdPrefix {
    const message = createBaseIscnIdPrefix();
    message.registryName = object.registryName ?? "";
    message.contentId = object.contentId ?? "";
    return message;
  }

};

function createBaseIscnId(): IscnId {
  return {
    prefix: undefined,
    version: Long.UZERO
  };
}

export const IscnId = {
  encode(message: IscnId, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.prefix !== undefined) {
      IscnIdPrefix.encode(message.prefix, writer.uint32(10).fork()).ldelim();
    }

    if (!message.version.isZero()) {
      writer.uint32(16).uint64(message.version);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IscnId {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIscnId();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.prefix = IscnIdPrefix.decode(reader, reader.uint32());
          break;

        case 2:
          message.version = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): IscnId {
    return {
      prefix: isSet(object.prefix) ? IscnIdPrefix.fromJSON(object.prefix) : undefined,
      version: isSet(object.version) ? Long.fromString(object.version) : Long.UZERO
    };
  },

  toJSON(message: IscnId): unknown {
    const obj: any = {};
    message.prefix !== undefined && (obj.prefix = message.prefix ? IscnIdPrefix.toJSON(message.prefix) : undefined);
    message.version !== undefined && (obj.version = (message.version || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<IscnId>): IscnId {
    const message = createBaseIscnId();
    message.prefix = object.prefix !== undefined && object.prefix !== null ? IscnIdPrefix.fromPartial(object.prefix) : undefined;
    message.version = object.version !== undefined && object.version !== null ? Long.fromValue(object.version) : Long.UZERO;
    return message;
  }

};