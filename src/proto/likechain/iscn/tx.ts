import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial } from "@osmonauts/helpers";
export interface IscnRecord {
  /** Using camelCases to make the record JSON in tx more like general JSON documents */
  recordNotes: string;
  contentFingerprints: string[];

  /** Here, `IscnInput` is JSON encoded bytes */
  stakeholders: Uint8Array[];
  contentMetadata: Uint8Array;
}
export interface MsgCreateIscnRecord {
  from: string;
  record: IscnRecord;
}
export interface MsgCreateIscnRecordResponse {
  iscnId: string;
  recordIpld: string;
}
export interface MsgUpdateIscnRecord {
  from: string;
  iscnId: string;
  record: IscnRecord;
}
export interface MsgUpdateIscnRecordResponse {
  iscnId: string;
  recordIpld: string;
}
export interface MsgChangeIscnRecordOwnership {
  from: string;
  iscnId: string;
  newOwner: string;
}
export interface MsgChangeIscnRecordOwnershipResponse {}

function createBaseIscnRecord(): IscnRecord {
  return {
    recordNotes: "",
    contentFingerprints: [],
    stakeholders: [],
    contentMetadata: new Uint8Array()
  };
}

export const IscnRecord = {
  encode(message: IscnRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.recordNotes !== "") {
      writer.uint32(10).string(message.recordNotes);
    }

    for (const v of message.contentFingerprints) {
      writer.uint32(18).string(v!);
    }

    for (const v of message.stakeholders) {
      writer.uint32(26).bytes(v!);
    }

    if (message.contentMetadata.length !== 0) {
      writer.uint32(34).bytes(message.contentMetadata);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IscnRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIscnRecord();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.recordNotes = reader.string();
          break;

        case 2:
          message.contentFingerprints.push(reader.string());
          break;

        case 3:
          message.stakeholders.push(reader.bytes());
          break;

        case 4:
          message.contentMetadata = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): IscnRecord {
    return {
      recordNotes: isSet(object.recordNotes) ? String(object.recordNotes) : "",
      contentFingerprints: Array.isArray(object?.contentFingerprints) ? object.contentFingerprints.map((e: any) => String(e)) : [],
      stakeholders: Array.isArray(object?.stakeholders) ? object.stakeholders.map((e: any) => bytesFromBase64(e)) : [],
      contentMetadata: isSet(object.contentMetadata) ? bytesFromBase64(object.contentMetadata) : new Uint8Array()
    };
  },

  toJSON(message: IscnRecord): unknown {
    const obj: any = {};
    message.recordNotes !== undefined && (obj.recordNotes = message.recordNotes);

    if (message.contentFingerprints) {
      obj.contentFingerprints = message.contentFingerprints.map(e => e);
    } else {
      obj.contentFingerprints = [];
    }

    if (message.stakeholders) {
      obj.stakeholders = message.stakeholders.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.stakeholders = [];
    }

    message.contentMetadata !== undefined && (obj.contentMetadata = base64FromBytes(message.contentMetadata !== undefined ? message.contentMetadata : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<IscnRecord>): IscnRecord {
    const message = createBaseIscnRecord();
    message.recordNotes = object.recordNotes ?? "";
    message.contentFingerprints = object.contentFingerprints?.map(e => e) || [];
    message.stakeholders = object.stakeholders?.map(e => e) || [];
    message.contentMetadata = object.contentMetadata ?? new Uint8Array();
    return message;
  }

};

function createBaseMsgCreateIscnRecord(): MsgCreateIscnRecord {
  return {
    from: "",
    record: undefined
  };
}

export const MsgCreateIscnRecord = {
  encode(message: MsgCreateIscnRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }

    if (message.record !== undefined) {
      IscnRecord.encode(message.record, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateIscnRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateIscnRecord();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;

        case 2:
          message.record = IscnRecord.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateIscnRecord {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      record: isSet(object.record) ? IscnRecord.fromJSON(object.record) : undefined
    };
  },

  toJSON(message: MsgCreateIscnRecord): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.record !== undefined && (obj.record = message.record ? IscnRecord.toJSON(message.record) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateIscnRecord>): MsgCreateIscnRecord {
    const message = createBaseMsgCreateIscnRecord();
    message.from = object.from ?? "";
    message.record = object.record !== undefined && object.record !== null ? IscnRecord.fromPartial(object.record) : undefined;
    return message;
  }

};

function createBaseMsgCreateIscnRecordResponse(): MsgCreateIscnRecordResponse {
  return {
    iscnId: "",
    recordIpld: ""
  };
}

export const MsgCreateIscnRecordResponse = {
  encode(message: MsgCreateIscnRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.iscnId !== "") {
      writer.uint32(10).string(message.iscnId);
    }

    if (message.recordIpld !== "") {
      writer.uint32(18).string(message.recordIpld);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateIscnRecordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateIscnRecordResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.iscnId = reader.string();
          break;

        case 2:
          message.recordIpld = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateIscnRecordResponse {
    return {
      iscnId: isSet(object.iscnId) ? String(object.iscnId) : "",
      recordIpld: isSet(object.recordIpld) ? String(object.recordIpld) : ""
    };
  },

  toJSON(message: MsgCreateIscnRecordResponse): unknown {
    const obj: any = {};
    message.iscnId !== undefined && (obj.iscnId = message.iscnId);
    message.recordIpld !== undefined && (obj.recordIpld = message.recordIpld);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateIscnRecordResponse>): MsgCreateIscnRecordResponse {
    const message = createBaseMsgCreateIscnRecordResponse();
    message.iscnId = object.iscnId ?? "";
    message.recordIpld = object.recordIpld ?? "";
    return message;
  }

};

function createBaseMsgUpdateIscnRecord(): MsgUpdateIscnRecord {
  return {
    from: "",
    iscnId: "",
    record: undefined
  };
}

export const MsgUpdateIscnRecord = {
  encode(message: MsgUpdateIscnRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }

    if (message.iscnId !== "") {
      writer.uint32(18).string(message.iscnId);
    }

    if (message.record !== undefined) {
      IscnRecord.encode(message.record, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateIscnRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateIscnRecord();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;

        case 2:
          message.iscnId = reader.string();
          break;

        case 3:
          message.record = IscnRecord.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUpdateIscnRecord {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      iscnId: isSet(object.iscnId) ? String(object.iscnId) : "",
      record: isSet(object.record) ? IscnRecord.fromJSON(object.record) : undefined
    };
  },

  toJSON(message: MsgUpdateIscnRecord): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.iscnId !== undefined && (obj.iscnId = message.iscnId);
    message.record !== undefined && (obj.record = message.record ? IscnRecord.toJSON(message.record) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateIscnRecord>): MsgUpdateIscnRecord {
    const message = createBaseMsgUpdateIscnRecord();
    message.from = object.from ?? "";
    message.iscnId = object.iscnId ?? "";
    message.record = object.record !== undefined && object.record !== null ? IscnRecord.fromPartial(object.record) : undefined;
    return message;
  }

};

function createBaseMsgUpdateIscnRecordResponse(): MsgUpdateIscnRecordResponse {
  return {
    iscnId: "",
    recordIpld: ""
  };
}

export const MsgUpdateIscnRecordResponse = {
  encode(message: MsgUpdateIscnRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.iscnId !== "") {
      writer.uint32(10).string(message.iscnId);
    }

    if (message.recordIpld !== "") {
      writer.uint32(18).string(message.recordIpld);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateIscnRecordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateIscnRecordResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.iscnId = reader.string();
          break;

        case 2:
          message.recordIpld = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUpdateIscnRecordResponse {
    return {
      iscnId: isSet(object.iscnId) ? String(object.iscnId) : "",
      recordIpld: isSet(object.recordIpld) ? String(object.recordIpld) : ""
    };
  },

  toJSON(message: MsgUpdateIscnRecordResponse): unknown {
    const obj: any = {};
    message.iscnId !== undefined && (obj.iscnId = message.iscnId);
    message.recordIpld !== undefined && (obj.recordIpld = message.recordIpld);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateIscnRecordResponse>): MsgUpdateIscnRecordResponse {
    const message = createBaseMsgUpdateIscnRecordResponse();
    message.iscnId = object.iscnId ?? "";
    message.recordIpld = object.recordIpld ?? "";
    return message;
  }

};

function createBaseMsgChangeIscnRecordOwnership(): MsgChangeIscnRecordOwnership {
  return {
    from: "",
    iscnId: "",
    newOwner: ""
  };
}

export const MsgChangeIscnRecordOwnership = {
  encode(message: MsgChangeIscnRecordOwnership, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }

    if (message.iscnId !== "") {
      writer.uint32(18).string(message.iscnId);
    }

    if (message.newOwner !== "") {
      writer.uint32(26).string(message.newOwner);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeIscnRecordOwnership {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChangeIscnRecordOwnership();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;

        case 2:
          message.iscnId = reader.string();
          break;

        case 3:
          message.newOwner = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgChangeIscnRecordOwnership {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      iscnId: isSet(object.iscnId) ? String(object.iscnId) : "",
      newOwner: isSet(object.newOwner) ? String(object.newOwner) : ""
    };
  },

  toJSON(message: MsgChangeIscnRecordOwnership): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.iscnId !== undefined && (obj.iscnId = message.iscnId);
    message.newOwner !== undefined && (obj.newOwner = message.newOwner);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgChangeIscnRecordOwnership>): MsgChangeIscnRecordOwnership {
    const message = createBaseMsgChangeIscnRecordOwnership();
    message.from = object.from ?? "";
    message.iscnId = object.iscnId ?? "";
    message.newOwner = object.newOwner ?? "";
    return message;
  }

};

function createBaseMsgChangeIscnRecordOwnershipResponse(): MsgChangeIscnRecordOwnershipResponse {
  return {};
}

export const MsgChangeIscnRecordOwnershipResponse = {
  encode(_: MsgChangeIscnRecordOwnershipResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeIscnRecordOwnershipResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChangeIscnRecordOwnershipResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgChangeIscnRecordOwnershipResponse {
    return {};
  },

  toJSON(_: MsgChangeIscnRecordOwnershipResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgChangeIscnRecordOwnershipResponse>): MsgChangeIscnRecordOwnershipResponse {
    const message = createBaseMsgChangeIscnRecordOwnershipResponse();
    return message;
  }

};