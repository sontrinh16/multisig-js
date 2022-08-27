import { Params } from "./params";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial, Long } from "@osmonauts/helpers";
export interface GenesisState {
  params: Params;
  contentIdRecords: GenesisState_ContentIdRecord[];
  iscnRecords: Uint8Array[];
}
export interface GenesisState_ContentIdRecord {
  iscnId: string;
  owner: string;
  latestVersion: Long;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    contentIdRecords: [],
    iscnRecords: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.contentIdRecords) {
      GenesisState_ContentIdRecord.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.iscnRecords) {
      writer.uint32(26).bytes(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 2:
          message.contentIdRecords.push(GenesisState_ContentIdRecord.decode(reader, reader.uint32()));
          break;

        case 3:
          message.iscnRecords.push(reader.bytes());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      contentIdRecords: Array.isArray(object?.contentIdRecords) ? object.contentIdRecords.map((e: any) => GenesisState_ContentIdRecord.fromJSON(e)) : [],
      iscnRecords: Array.isArray(object?.iscnRecords) ? object.iscnRecords.map((e: any) => bytesFromBase64(e)) : []
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);

    if (message.contentIdRecords) {
      obj.contentIdRecords = message.contentIdRecords.map(e => e ? GenesisState_ContentIdRecord.toJSON(e) : undefined);
    } else {
      obj.contentIdRecords = [];
    }

    if (message.iscnRecords) {
      obj.iscnRecords = message.iscnRecords.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.iscnRecords = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.contentIdRecords = object.contentIdRecords?.map(e => GenesisState_ContentIdRecord.fromPartial(e)) || [];
    message.iscnRecords = object.iscnRecords?.map(e => e) || [];
    return message;
  }

};

function createBaseGenesisState_ContentIdRecord(): GenesisState_ContentIdRecord {
  return {
    iscnId: "",
    owner: "",
    latestVersion: Long.UZERO
  };
}

export const GenesisState_ContentIdRecord = {
  encode(message: GenesisState_ContentIdRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.iscnId !== "") {
      writer.uint32(10).string(message.iscnId);
    }

    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }

    if (!message.latestVersion.isZero()) {
      writer.uint32(24).uint64(message.latestVersion);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState_ContentIdRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState_ContentIdRecord();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.iscnId = reader.string();
          break;

        case 2:
          message.owner = reader.string();
          break;

        case 3:
          message.latestVersion = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenesisState_ContentIdRecord {
    return {
      iscnId: isSet(object.iscnId) ? String(object.iscnId) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      latestVersion: isSet(object.latestVersion) ? Long.fromString(object.latestVersion) : Long.UZERO
    };
  },

  toJSON(message: GenesisState_ContentIdRecord): unknown {
    const obj: any = {};
    message.iscnId !== undefined && (obj.iscnId = message.iscnId);
    message.owner !== undefined && (obj.owner = message.owner);
    message.latestVersion !== undefined && (obj.latestVersion = (message.latestVersion || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState_ContentIdRecord>): GenesisState_ContentIdRecord {
    const message = createBaseGenesisState_ContentIdRecord();
    message.iscnId = object.iscnId ?? "";
    message.owner = object.owner ?? "";
    message.latestVersion = object.latestVersion !== undefined && object.latestVersion !== null ? Long.fromValue(object.latestVersion) : Long.UZERO;
    return message;
  }

};