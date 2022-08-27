import { IscnId } from "./iscnid";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial, Long } from "@osmonauts/helpers";
export interface StoreRecord {
  iscnId: IscnId;
  cidBytes: Uint8Array;
  data: Uint8Array;
}
export interface ContentIdRecord {
  ownerAddressBytes: Uint8Array;
  latestVersion: Long;
}

function createBaseStoreRecord(): StoreRecord {
  return {
    iscnId: undefined,
    cidBytes: new Uint8Array(),
    data: new Uint8Array()
  };
}

export const StoreRecord = {
  encode(message: StoreRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.iscnId !== undefined) {
      IscnId.encode(message.iscnId, writer.uint32(10).fork()).ldelim();
    }

    if (message.cidBytes.length !== 0) {
      writer.uint32(18).bytes(message.cidBytes);
    }

    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StoreRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreRecord();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.iscnId = IscnId.decode(reader, reader.uint32());
          break;

        case 2:
          message.cidBytes = reader.bytes();
          break;

        case 3:
          message.data = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): StoreRecord {
    return {
      iscnId: isSet(object.iscnId) ? IscnId.fromJSON(object.iscnId) : undefined,
      cidBytes: isSet(object.cidBytes) ? bytesFromBase64(object.cidBytes) : new Uint8Array(),
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },

  toJSON(message: StoreRecord): unknown {
    const obj: any = {};
    message.iscnId !== undefined && (obj.iscnId = message.iscnId ? IscnId.toJSON(message.iscnId) : undefined);
    message.cidBytes !== undefined && (obj.cidBytes = base64FromBytes(message.cidBytes !== undefined ? message.cidBytes : new Uint8Array()));
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<StoreRecord>): StoreRecord {
    const message = createBaseStoreRecord();
    message.iscnId = object.iscnId !== undefined && object.iscnId !== null ? IscnId.fromPartial(object.iscnId) : undefined;
    message.cidBytes = object.cidBytes ?? new Uint8Array();
    message.data = object.data ?? new Uint8Array();
    return message;
  }

};

function createBaseContentIdRecord(): ContentIdRecord {
  return {
    ownerAddressBytes: new Uint8Array(),
    latestVersion: Long.UZERO
  };
}

export const ContentIdRecord = {
  encode(message: ContentIdRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ownerAddressBytes.length !== 0) {
      writer.uint32(10).bytes(message.ownerAddressBytes);
    }

    if (!message.latestVersion.isZero()) {
      writer.uint32(16).uint64(message.latestVersion);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContentIdRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContentIdRecord();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.ownerAddressBytes = reader.bytes();
          break;

        case 2:
          message.latestVersion = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ContentIdRecord {
    return {
      ownerAddressBytes: isSet(object.ownerAddressBytes) ? bytesFromBase64(object.ownerAddressBytes) : new Uint8Array(),
      latestVersion: isSet(object.latestVersion) ? Long.fromString(object.latestVersion) : Long.UZERO
    };
  },

  toJSON(message: ContentIdRecord): unknown {
    const obj: any = {};
    message.ownerAddressBytes !== undefined && (obj.ownerAddressBytes = base64FromBytes(message.ownerAddressBytes !== undefined ? message.ownerAddressBytes : new Uint8Array()));
    message.latestVersion !== undefined && (obj.latestVersion = (message.latestVersion || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<ContentIdRecord>): ContentIdRecord {
    const message = createBaseContentIdRecord();
    message.ownerAddressBytes = object.ownerAddressBytes ?? new Uint8Array();
    message.latestVersion = object.latestVersion !== undefined && object.latestVersion !== null ? Long.fromValue(object.latestVersion) : Long.UZERO;
    return message;
  }

};