import { ContentHash, SignerEntry, Content } from "./types";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, fromJsonTimestamp, fromTimestamp } from "@osmonauts/helpers";

/** QueryByContentHashRequest is the Query/ByContentHash request type. */
export interface QueryByHashRequest {
  /** hash is the hash-based identifier for the anchored content. */
  hash: ContentHash;
}

/** QueryByContentHashResponse is the Query/ByContentHash response type. */
export interface QueryByHashResponse {
  /** entry is the ContentEntry */
  entry: ContentEntry;
}

/** QueryBySignerRequest is the Query/BySigner request type. */
export interface QueryBySignerRequest {
  /** signer is the address of the signer to query by. */
  signer: string;

  /** pagination is the PageRequest to use for pagination. */
  pagination: PageRequest;
}

/** QueryBySignerResponse is the Query/BySigner response type. */
export interface QueryBySignerResponse {
  /** entries is the ContentEntry's signed by the queried signer */
  entries: ContentEntry[];

  /** pagination is the pagination PageResponse. */
  pagination: PageResponse;
}

/** ContentEntry describes data referenced and possibly stored on chain */
export interface ContentEntry {
  /** hash is the content hash */
  hash: ContentHash;

  /** iri is the content IRI */
  iri: string;

  /** timestamp is the anchor Timestamp */
  timestamp: Timestamp;

  /** signers are the signers, if any */
  signers: SignerEntry[];

  /** content is the actual content if stored on-chain */
  content: Content;
}

function createBaseQueryByHashRequest(): QueryByHashRequest {
  return {
    hash: undefined
  };
}

export const QueryByHashRequest = {
  encode(message: QueryByHashRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash !== undefined) {
      ContentHash.encode(message.hash, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryByHashRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryByHashRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.hash = ContentHash.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryByHashRequest {
    return {
      hash: isSet(object.hash) ? ContentHash.fromJSON(object.hash) : undefined
    };
  },

  toJSON(message: QueryByHashRequest): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash ? ContentHash.toJSON(message.hash) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryByHashRequest>): QueryByHashRequest {
    const message = createBaseQueryByHashRequest();
    message.hash = object.hash !== undefined && object.hash !== null ? ContentHash.fromPartial(object.hash) : undefined;
    return message;
  }

};

function createBaseQueryByHashResponse(): QueryByHashResponse {
  return {
    entry: undefined
  };
}

export const QueryByHashResponse = {
  encode(message: QueryByHashResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entry !== undefined) {
      ContentEntry.encode(message.entry, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryByHashResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryByHashResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.entry = ContentEntry.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryByHashResponse {
    return {
      entry: isSet(object.entry) ? ContentEntry.fromJSON(object.entry) : undefined
    };
  },

  toJSON(message: QueryByHashResponse): unknown {
    const obj: any = {};
    message.entry !== undefined && (obj.entry = message.entry ? ContentEntry.toJSON(message.entry) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryByHashResponse>): QueryByHashResponse {
    const message = createBaseQueryByHashResponse();
    message.entry = object.entry !== undefined && object.entry !== null ? ContentEntry.fromPartial(object.entry) : undefined;
    return message;
  }

};

function createBaseQueryBySignerRequest(): QueryBySignerRequest {
  return {
    signer: "",
    pagination: undefined
  };
}

export const QueryBySignerRequest = {
  encode(message: QueryBySignerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBySignerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBySignerRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryBySignerRequest {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryBySignerRequest): unknown {
    const obj: any = {};
    message.signer !== undefined && (obj.signer = message.signer);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryBySignerRequest>): QueryBySignerRequest {
    const message = createBaseQueryBySignerRequest();
    message.signer = object.signer ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryBySignerResponse(): QueryBySignerResponse {
  return {
    entries: [],
    pagination: undefined
  };
}

export const QueryBySignerResponse = {
  encode(message: QueryBySignerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.entries) {
      ContentEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBySignerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBySignerResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.entries.push(ContentEntry.decode(reader, reader.uint32()));
          break;

        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryBySignerResponse {
    return {
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => ContentEntry.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryBySignerResponse): unknown {
    const obj: any = {};

    if (message.entries) {
      obj.entries = message.entries.map(e => e ? ContentEntry.toJSON(e) : undefined);
    } else {
      obj.entries = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryBySignerResponse>): QueryBySignerResponse {
    const message = createBaseQueryBySignerResponse();
    message.entries = object.entries?.map(e => ContentEntry.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseContentEntry(): ContentEntry {
  return {
    hash: undefined,
    iri: "",
    timestamp: undefined,
    signers: [],
    content: undefined
  };
}

export const ContentEntry = {
  encode(message: ContentEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash !== undefined) {
      ContentHash.encode(message.hash, writer.uint32(10).fork()).ldelim();
    }

    if (message.iri !== "") {
      writer.uint32(18).string(message.iri);
    }

    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.signers) {
      SignerEntry.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    if (message.content !== undefined) {
      Content.encode(message.content, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContentEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContentEntry();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.hash = ContentHash.decode(reader, reader.uint32());
          break;

        case 2:
          message.iri = reader.string();
          break;

        case 3:
          message.timestamp = Timestamp.decode(reader, reader.uint32());
          break;

        case 4:
          message.signers.push(SignerEntry.decode(reader, reader.uint32()));
          break;

        case 5:
          message.content = Content.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ContentEntry {
    return {
      hash: isSet(object.hash) ? ContentHash.fromJSON(object.hash) : undefined,
      iri: isSet(object.iri) ? String(object.iri) : "",
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
      signers: Array.isArray(object?.signers) ? object.signers.map((e: any) => SignerEntry.fromJSON(e)) : [],
      content: isSet(object.content) ? Content.fromJSON(object.content) : undefined
    };
  },

  toJSON(message: ContentEntry): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash ? ContentHash.toJSON(message.hash) : undefined);
    message.iri !== undefined && (obj.iri = message.iri);
    message.timestamp !== undefined && (obj.timestamp = fromTimestamp(message.timestamp).toISOString());

    if (message.signers) {
      obj.signers = message.signers.map(e => e ? SignerEntry.toJSON(e) : undefined);
    } else {
      obj.signers = [];
    }

    message.content !== undefined && (obj.content = message.content ? Content.toJSON(message.content) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ContentEntry>): ContentEntry {
    const message = createBaseContentEntry();
    message.hash = object.hash !== undefined && object.hash !== null ? ContentHash.fromPartial(object.hash) : undefined;
    message.iri = object.iri ?? "";
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Timestamp.fromPartial(object.timestamp) : undefined;
    message.signers = object.signers?.map(e => SignerEntry.fromPartial(e)) || [];
    message.content = object.content !== undefined && object.content !== null ? Content.fromPartial(object.content) : undefined;
    return message;
  }

};