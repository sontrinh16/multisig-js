import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, bytesFromBase64, base64FromBytes } from "@osmonauts/helpers";
export interface ClassesByAccount {
  account: string;
  classIds: string[];
}
export interface ClassesByAccountStoreRecord {
  accAddress: Uint8Array;
  classIds: string[];
}

function createBaseClassesByAccount(): ClassesByAccount {
  return {
    account: "",
    classIds: []
  };
}

export const ClassesByAccount = {
  encode(message: ClassesByAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }

    for (const v of message.classIds) {
      writer.uint32(18).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClassesByAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClassesByAccount();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
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

  fromJSON(object: any): ClassesByAccount {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      classIds: Array.isArray(object?.classIds) ? object.classIds.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: ClassesByAccount): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);

    if (message.classIds) {
      obj.classIds = message.classIds.map(e => e);
    } else {
      obj.classIds = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<ClassesByAccount>): ClassesByAccount {
    const message = createBaseClassesByAccount();
    message.account = object.account ?? "";
    message.classIds = object.classIds?.map(e => e) || [];
    return message;
  }

};

function createBaseClassesByAccountStoreRecord(): ClassesByAccountStoreRecord {
  return {
    accAddress: new Uint8Array(),
    classIds: []
  };
}

export const ClassesByAccountStoreRecord = {
  encode(message: ClassesByAccountStoreRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accAddress.length !== 0) {
      writer.uint32(10).bytes(message.accAddress);
    }

    for (const v of message.classIds) {
      writer.uint32(18).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClassesByAccountStoreRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClassesByAccountStoreRecord();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.accAddress = reader.bytes();
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

  fromJSON(object: any): ClassesByAccountStoreRecord {
    return {
      accAddress: isSet(object.accAddress) ? bytesFromBase64(object.accAddress) : new Uint8Array(),
      classIds: Array.isArray(object?.classIds) ? object.classIds.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: ClassesByAccountStoreRecord): unknown {
    const obj: any = {};
    message.accAddress !== undefined && (obj.accAddress = base64FromBytes(message.accAddress !== undefined ? message.accAddress : new Uint8Array()));

    if (message.classIds) {
      obj.classIds = message.classIds.map(e => e);
    } else {
      obj.classIds = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<ClassesByAccountStoreRecord>): ClassesByAccountStoreRecord {
    const message = createBaseClassesByAccountStoreRecord();
    message.accAddress = object.accAddress ?? new Uint8Array();
    message.classIds = object.classIds?.map(e => e) || [];
    return message;
  }

};