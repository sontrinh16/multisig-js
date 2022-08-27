import { Params } from "./params";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial, Long } from "@osmonauts/helpers";
export interface QueryResponseRecord {
  ipld: string;
  data: Uint8Array;
}
export interface QueryRecordsByIdRequest {
  /**
   * The ISCN ID of the record(s) to be queried.
   * Format: iscn://REGISTRY_NAME/CONTENT_ID[/VERSION]
   * If version part omitted, version is default to 0.
   * if non-zero version exists, then from_version and to_version are ignored.
   */
  iscnId: string;

  /**
   * The initial version in the resulting records.
   * If omitted or is 0, then it will be interpreted as the latest version.
   */
  fromVersion: Long;

  /**
   * The final version in the resulting records.
   * If omitted or is 0, then it will be interpreted as the latest version.
   */
  toVersion: Long;
}
export interface QueryRecordsByIdResponse {
  owner: string;
  latestVersion: Long;
  records: QueryResponseRecord[];
}
export interface QueryRecordsByFingerprintRequest {
  /**
   * The fingerprint of the record(s) to be queried.
   * All fingerprints in records should be URIs.
   */
  fingerprint: string;

  /**
   * For pagination.
   * For the first query, fill in 0 or just omit this field.
   * For continuous queries, fill in the `next_sequence` field in the previous response.
   */
  fromSequence: Long;
}
export interface QueryRecordsByFingerprintResponse {
  records: QueryResponseRecord[];

  /** For pagination. */
  nextSequence: Long;
}
export interface QueryRecordsByOwnerRequest {
  /** Owner address of the record(s) to be queried. */
  owner: string;

  /**
   * For pagination.
   * For the first query, fill in 0 or just omit this field.
   * For continuous queries, fill in the `next_sequence` field in the previous response.
   */
  fromSequence: Long;
}
export interface QueryRecordsByOwnerResponse {
  records: QueryResponseRecord[];
  nextSequence: Long;
}
export interface QueryParamsRequest {}
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryGetCidRequest {
  cid: string;
}
export interface QueryGetCidResponse {
  data: Uint8Array;
}
export interface QueryGetCidSizeRequest {
  cid: string;
}
export interface QueryGetCidSizeResponse {
  size: Long;
}
export interface QueryHasCidRequest {
  cid: string;
}
export interface QueryHasCidResponse {
  exist: boolean;
}

function createBaseQueryResponseRecord(): QueryResponseRecord {
  return {
    ipld: "",
    data: new Uint8Array()
  };
}

export const QueryResponseRecord = {
  encode(message: QueryResponseRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ipld !== "") {
      writer.uint32(10).string(message.ipld);
    }

    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryResponseRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryResponseRecord();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.ipld = reader.string();
          break;

        case 2:
          message.data = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryResponseRecord {
    return {
      ipld: isSet(object.ipld) ? String(object.ipld) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },

  toJSON(message: QueryResponseRecord): unknown {
    const obj: any = {};
    message.ipld !== undefined && (obj.ipld = message.ipld);
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<QueryResponseRecord>): QueryResponseRecord {
    const message = createBaseQueryResponseRecord();
    message.ipld = object.ipld ?? "";
    message.data = object.data ?? new Uint8Array();
    return message;
  }

};

function createBaseQueryRecordsByIdRequest(): QueryRecordsByIdRequest {
  return {
    iscnId: "",
    fromVersion: Long.UZERO,
    toVersion: Long.UZERO
  };
}

export const QueryRecordsByIdRequest = {
  encode(message: QueryRecordsByIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.iscnId !== "") {
      writer.uint32(10).string(message.iscnId);
    }

    if (!message.fromVersion.isZero()) {
      writer.uint32(16).uint64(message.fromVersion);
    }

    if (!message.toVersion.isZero()) {
      writer.uint32(24).uint64(message.toVersion);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRecordsByIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRecordsByIdRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.iscnId = reader.string();
          break;

        case 2:
          message.fromVersion = (reader.uint64() as Long);
          break;

        case 3:
          message.toVersion = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryRecordsByIdRequest {
    return {
      iscnId: isSet(object.iscnId) ? String(object.iscnId) : "",
      fromVersion: isSet(object.fromVersion) ? Long.fromString(object.fromVersion) : Long.UZERO,
      toVersion: isSet(object.toVersion) ? Long.fromString(object.toVersion) : Long.UZERO
    };
  },

  toJSON(message: QueryRecordsByIdRequest): unknown {
    const obj: any = {};
    message.iscnId !== undefined && (obj.iscnId = message.iscnId);
    message.fromVersion !== undefined && (obj.fromVersion = (message.fromVersion || Long.UZERO).toString());
    message.toVersion !== undefined && (obj.toVersion = (message.toVersion || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<QueryRecordsByIdRequest>): QueryRecordsByIdRequest {
    const message = createBaseQueryRecordsByIdRequest();
    message.iscnId = object.iscnId ?? "";
    message.fromVersion = object.fromVersion !== undefined && object.fromVersion !== null ? Long.fromValue(object.fromVersion) : Long.UZERO;
    message.toVersion = object.toVersion !== undefined && object.toVersion !== null ? Long.fromValue(object.toVersion) : Long.UZERO;
    return message;
  }

};

function createBaseQueryRecordsByIdResponse(): QueryRecordsByIdResponse {
  return {
    owner: "",
    latestVersion: Long.UZERO,
    records: []
  };
}

export const QueryRecordsByIdResponse = {
  encode(message: QueryRecordsByIdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (!message.latestVersion.isZero()) {
      writer.uint32(16).uint64(message.latestVersion);
    }

    for (const v of message.records) {
      QueryResponseRecord.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRecordsByIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRecordsByIdResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.latestVersion = (reader.uint64() as Long);
          break;

        case 3:
          message.records.push(QueryResponseRecord.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryRecordsByIdResponse {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      latestVersion: isSet(object.latestVersion) ? Long.fromString(object.latestVersion) : Long.UZERO,
      records: Array.isArray(object?.records) ? object.records.map((e: any) => QueryResponseRecord.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryRecordsByIdResponse): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.latestVersion !== undefined && (obj.latestVersion = (message.latestVersion || Long.UZERO).toString());

    if (message.records) {
      obj.records = message.records.map(e => e ? QueryResponseRecord.toJSON(e) : undefined);
    } else {
      obj.records = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<QueryRecordsByIdResponse>): QueryRecordsByIdResponse {
    const message = createBaseQueryRecordsByIdResponse();
    message.owner = object.owner ?? "";
    message.latestVersion = object.latestVersion !== undefined && object.latestVersion !== null ? Long.fromValue(object.latestVersion) : Long.UZERO;
    message.records = object.records?.map(e => QueryResponseRecord.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryRecordsByFingerprintRequest(): QueryRecordsByFingerprintRequest {
  return {
    fingerprint: "",
    fromSequence: Long.UZERO
  };
}

export const QueryRecordsByFingerprintRequest = {
  encode(message: QueryRecordsByFingerprintRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fingerprint !== "") {
      writer.uint32(10).string(message.fingerprint);
    }

    if (!message.fromSequence.isZero()) {
      writer.uint32(16).uint64(message.fromSequence);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRecordsByFingerprintRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRecordsByFingerprintRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.fingerprint = reader.string();
          break;

        case 2:
          message.fromSequence = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryRecordsByFingerprintRequest {
    return {
      fingerprint: isSet(object.fingerprint) ? String(object.fingerprint) : "",
      fromSequence: isSet(object.fromSequence) ? Long.fromString(object.fromSequence) : Long.UZERO
    };
  },

  toJSON(message: QueryRecordsByFingerprintRequest): unknown {
    const obj: any = {};
    message.fingerprint !== undefined && (obj.fingerprint = message.fingerprint);
    message.fromSequence !== undefined && (obj.fromSequence = (message.fromSequence || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<QueryRecordsByFingerprintRequest>): QueryRecordsByFingerprintRequest {
    const message = createBaseQueryRecordsByFingerprintRequest();
    message.fingerprint = object.fingerprint ?? "";
    message.fromSequence = object.fromSequence !== undefined && object.fromSequence !== null ? Long.fromValue(object.fromSequence) : Long.UZERO;
    return message;
  }

};

function createBaseQueryRecordsByFingerprintResponse(): QueryRecordsByFingerprintResponse {
  return {
    records: [],
    nextSequence: Long.UZERO
  };
}

export const QueryRecordsByFingerprintResponse = {
  encode(message: QueryRecordsByFingerprintResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.records) {
      QueryResponseRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (!message.nextSequence.isZero()) {
      writer.uint32(16).uint64(message.nextSequence);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRecordsByFingerprintResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRecordsByFingerprintResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.records.push(QueryResponseRecord.decode(reader, reader.uint32()));
          break;

        case 2:
          message.nextSequence = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryRecordsByFingerprintResponse {
    return {
      records: Array.isArray(object?.records) ? object.records.map((e: any) => QueryResponseRecord.fromJSON(e)) : [],
      nextSequence: isSet(object.nextSequence) ? Long.fromString(object.nextSequence) : Long.UZERO
    };
  },

  toJSON(message: QueryRecordsByFingerprintResponse): unknown {
    const obj: any = {};

    if (message.records) {
      obj.records = message.records.map(e => e ? QueryResponseRecord.toJSON(e) : undefined);
    } else {
      obj.records = [];
    }

    message.nextSequence !== undefined && (obj.nextSequence = (message.nextSequence || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<QueryRecordsByFingerprintResponse>): QueryRecordsByFingerprintResponse {
    const message = createBaseQueryRecordsByFingerprintResponse();
    message.records = object.records?.map(e => QueryResponseRecord.fromPartial(e)) || [];
    message.nextSequence = object.nextSequence !== undefined && object.nextSequence !== null ? Long.fromValue(object.nextSequence) : Long.UZERO;
    return message;
  }

};

function createBaseQueryRecordsByOwnerRequest(): QueryRecordsByOwnerRequest {
  return {
    owner: "",
    fromSequence: Long.UZERO
  };
}

export const QueryRecordsByOwnerRequest = {
  encode(message: QueryRecordsByOwnerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (!message.fromSequence.isZero()) {
      writer.uint32(16).uint64(message.fromSequence);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRecordsByOwnerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRecordsByOwnerRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.fromSequence = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryRecordsByOwnerRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      fromSequence: isSet(object.fromSequence) ? Long.fromString(object.fromSequence) : Long.UZERO
    };
  },

  toJSON(message: QueryRecordsByOwnerRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.fromSequence !== undefined && (obj.fromSequence = (message.fromSequence || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<QueryRecordsByOwnerRequest>): QueryRecordsByOwnerRequest {
    const message = createBaseQueryRecordsByOwnerRequest();
    message.owner = object.owner ?? "";
    message.fromSequence = object.fromSequence !== undefined && object.fromSequence !== null ? Long.fromValue(object.fromSequence) : Long.UZERO;
    return message;
  }

};

function createBaseQueryRecordsByOwnerResponse(): QueryRecordsByOwnerResponse {
  return {
    records: [],
    nextSequence: Long.UZERO
  };
}

export const QueryRecordsByOwnerResponse = {
  encode(message: QueryRecordsByOwnerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.records) {
      QueryResponseRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (!message.nextSequence.isZero()) {
      writer.uint32(16).uint64(message.nextSequence);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRecordsByOwnerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRecordsByOwnerResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.records.push(QueryResponseRecord.decode(reader, reader.uint32()));
          break;

        case 2:
          message.nextSequence = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryRecordsByOwnerResponse {
    return {
      records: Array.isArray(object?.records) ? object.records.map((e: any) => QueryResponseRecord.fromJSON(e)) : [],
      nextSequence: isSet(object.nextSequence) ? Long.fromString(object.nextSequence) : Long.UZERO
    };
  },

  toJSON(message: QueryRecordsByOwnerResponse): unknown {
    const obj: any = {};

    if (message.records) {
      obj.records = message.records.map(e => e ? QueryResponseRecord.toJSON(e) : undefined);
    } else {
      obj.records = [];
    }

    message.nextSequence !== undefined && (obj.nextSequence = (message.nextSequence || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<QueryRecordsByOwnerResponse>): QueryRecordsByOwnerResponse {
    const message = createBaseQueryRecordsByOwnerResponse();
    message.records = object.records?.map(e => QueryResponseRecord.fromPartial(e)) || [];
    message.nextSequence = object.nextSequence !== undefined && object.nextSequence !== null ? Long.fromValue(object.nextSequence) : Long.UZERO;
    return message;
  }

};

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();

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

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }

};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }

};

function createBaseQueryGetCidRequest(): QueryGetCidRequest {
  return {
    cid: ""
  };
}

export const QueryGetCidRequest = {
  encode(message: QueryGetCidRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cid !== "") {
      writer.uint32(10).string(message.cid);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCidRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetCidRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.cid = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetCidRequest {
    return {
      cid: isSet(object.cid) ? String(object.cid) : ""
    };
  },

  toJSON(message: QueryGetCidRequest): unknown {
    const obj: any = {};
    message.cid !== undefined && (obj.cid = message.cid);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetCidRequest>): QueryGetCidRequest {
    const message = createBaseQueryGetCidRequest();
    message.cid = object.cid ?? "";
    return message;
  }

};

function createBaseQueryGetCidResponse(): QueryGetCidResponse {
  return {
    data: new Uint8Array()
  };
}

export const QueryGetCidResponse = {
  encode(message: QueryGetCidResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetCidResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetCidResponse {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },

  toJSON(message: QueryGetCidResponse): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetCidResponse>): QueryGetCidResponse {
    const message = createBaseQueryGetCidResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  }

};

function createBaseQueryGetCidSizeRequest(): QueryGetCidSizeRequest {
  return {
    cid: ""
  };
}

export const QueryGetCidSizeRequest = {
  encode(message: QueryGetCidSizeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cid !== "") {
      writer.uint32(10).string(message.cid);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCidSizeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetCidSizeRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.cid = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetCidSizeRequest {
    return {
      cid: isSet(object.cid) ? String(object.cid) : ""
    };
  },

  toJSON(message: QueryGetCidSizeRequest): unknown {
    const obj: any = {};
    message.cid !== undefined && (obj.cid = message.cid);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetCidSizeRequest>): QueryGetCidSizeRequest {
    const message = createBaseQueryGetCidSizeRequest();
    message.cid = object.cid ?? "";
    return message;
  }

};

function createBaseQueryGetCidSizeResponse(): QueryGetCidSizeResponse {
  return {
    size: Long.UZERO
  };
}

export const QueryGetCidSizeResponse = {
  encode(message: QueryGetCidSizeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.size.isZero()) {
      writer.uint32(8).uint64(message.size);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCidSizeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetCidSizeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.size = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetCidSizeResponse {
    return {
      size: isSet(object.size) ? Long.fromString(object.size) : Long.UZERO
    };
  },

  toJSON(message: QueryGetCidSizeResponse): unknown {
    const obj: any = {};
    message.size !== undefined && (obj.size = (message.size || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetCidSizeResponse>): QueryGetCidSizeResponse {
    const message = createBaseQueryGetCidSizeResponse();
    message.size = object.size !== undefined && object.size !== null ? Long.fromValue(object.size) : Long.UZERO;
    return message;
  }

};

function createBaseQueryHasCidRequest(): QueryHasCidRequest {
  return {
    cid: ""
  };
}

export const QueryHasCidRequest = {
  encode(message: QueryHasCidRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cid !== "") {
      writer.uint32(10).string(message.cid);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryHasCidRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHasCidRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.cid = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryHasCidRequest {
    return {
      cid: isSet(object.cid) ? String(object.cid) : ""
    };
  },

  toJSON(message: QueryHasCidRequest): unknown {
    const obj: any = {};
    message.cid !== undefined && (obj.cid = message.cid);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryHasCidRequest>): QueryHasCidRequest {
    const message = createBaseQueryHasCidRequest();
    message.cid = object.cid ?? "";
    return message;
  }

};

function createBaseQueryHasCidResponse(): QueryHasCidResponse {
  return {
    exist: false
  };
}

export const QueryHasCidResponse = {
  encode(message: QueryHasCidResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.exist === true) {
      writer.uint32(8).bool(message.exist);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryHasCidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHasCidResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.exist = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryHasCidResponse {
    return {
      exist: isSet(object.exist) ? Boolean(object.exist) : false
    };
  },

  toJSON(message: QueryHasCidResponse): unknown {
    const obj: any = {};
    message.exist !== undefined && (obj.exist = message.exist);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryHasCidResponse>): QueryHasCidResponse {
    const message = createBaseQueryHasCidResponse();
    message.exist = object.exist ?? false;
    return message;
  }

};