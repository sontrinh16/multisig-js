import { ContentHash, ContentHash_Graph, ContentHash_Raw } from "./types";
import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, toTimestamp, fromTimestamp, fromJsonTimestamp, bytesFromBase64, base64FromBytes } from "@osmonauts/helpers";

/** MsgAnchorData is the Msg/AnchorData request type. */
export interface MsgAnchorData {
  /**
   * sender is the address of the sender of the transaction.
   * The sender in StoreData is not attesting to the veracity of the underlying
   * data. They can simply be a intermediary providing services.
   */
  sender: string;

  /** hash is the hash-based identifier for the anchored content. */
  hash: ContentHash;
}

/** MsgAnchorData is the Msg/AnchorData response type. */
export interface MsgAnchorDataResponse {
  /** timestamp is the timestamp of the block at which the data was anchored. */
  timestamp: Date;
}

/** MsgSignData is the Msg/SignData request type. */
export interface MsgSignData {
  /**
   * signers are the addresses of the accounts signing the data.
   * By making a SignData request, the signers are attesting to the veracity
   * of the data referenced by the cid. The precise meaning of this may vary
   * depending on the underlying data.
   */
  signers: string[];

  /**
   * hash is the hash-based identifier for the anchored content. Only RDF graph
   * data can be signed as its data model is intended to specifically convey
   * semantic meaning.
   */
  hash: ContentHash_Graph;
}

/** MsgSignDataResponse is the Msg/SignData response type. */
export interface MsgSignDataResponse {}

/** MsgStoreRawData is the Msg/StoreRawData request type. */
export interface MsgStoreRawData {
  /**
   * sender is the address of the sender of the transaction.
   * The sender in StoreData is not attesting to the veracity of the underlying
   * data. They can simply be a intermediary providing services.
   */
  sender: string;

  /** content_hash is the hash-based identifier for the anchored content. */
  contentHash: ContentHash_Raw;

  /**
   * content is the content of the raw data corresponding to the provided
   * content hash.
   */
  content: Uint8Array;
}

/** MsgStoreRawData is the Msg/StoreRawData response type. */
export interface MsgStoreRawDataResponse {}

function createBaseMsgAnchorData(): MsgAnchorData {
  return {
    sender: "",
    hash: undefined
  };
}

export const MsgAnchorData = {
  encode(message: MsgAnchorData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.hash !== undefined) {
      ContentHash.encode(message.hash, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAnchorData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAnchorData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.hash = ContentHash.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgAnchorData {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      hash: isSet(object.hash) ? ContentHash.fromJSON(object.hash) : undefined
    };
  },

  toJSON(message: MsgAnchorData): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.hash !== undefined && (obj.hash = message.hash ? ContentHash.toJSON(message.hash) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAnchorData>): MsgAnchorData {
    const message = createBaseMsgAnchorData();
    message.sender = object.sender ?? "";
    message.hash = object.hash !== undefined && object.hash !== null ? ContentHash.fromPartial(object.hash) : undefined;
    return message;
  }

};

function createBaseMsgAnchorDataResponse(): MsgAnchorDataResponse {
  return {
    timestamp: undefined
  };
}

export const MsgAnchorDataResponse = {
  encode(message: MsgAnchorDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAnchorDataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAnchorDataResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgAnchorDataResponse {
    return {
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined
    };
  },

  toJSON(message: MsgAnchorDataResponse): unknown {
    const obj: any = {};
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAnchorDataResponse>): MsgAnchorDataResponse {
    const message = createBaseMsgAnchorDataResponse();
    message.timestamp = object.timestamp ?? undefined;
    return message;
  }

};

function createBaseMsgSignData(): MsgSignData {
  return {
    signers: [],
    hash: undefined
  };
}

export const MsgSignData = {
  encode(message: MsgSignData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.signers) {
      writer.uint32(10).string(v!);
    }

    if (message.hash !== undefined) {
      ContentHash_Graph.encode(message.hash, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSignData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSignData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.signers.push(reader.string());
          break;

        case 2:
          message.hash = ContentHash_Graph.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgSignData {
    return {
      signers: Array.isArray(object?.signers) ? object.signers.map((e: any) => String(e)) : [],
      hash: isSet(object.hash) ? ContentHash_Graph.fromJSON(object.hash) : undefined
    };
  },

  toJSON(message: MsgSignData): unknown {
    const obj: any = {};

    if (message.signers) {
      obj.signers = message.signers.map(e => e);
    } else {
      obj.signers = [];
    }

    message.hash !== undefined && (obj.hash = message.hash ? ContentHash_Graph.toJSON(message.hash) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSignData>): MsgSignData {
    const message = createBaseMsgSignData();
    message.signers = object.signers?.map(e => e) || [];
    message.hash = object.hash !== undefined && object.hash !== null ? ContentHash_Graph.fromPartial(object.hash) : undefined;
    return message;
  }

};

function createBaseMsgSignDataResponse(): MsgSignDataResponse {
  return {};
}

export const MsgSignDataResponse = {
  encode(_: MsgSignDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSignDataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSignDataResponse();

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

  fromJSON(_: any): MsgSignDataResponse {
    return {};
  },

  toJSON(_: MsgSignDataResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgSignDataResponse>): MsgSignDataResponse {
    const message = createBaseMsgSignDataResponse();
    return message;
  }

};

function createBaseMsgStoreRawData(): MsgStoreRawData {
  return {
    sender: "",
    contentHash: undefined,
    content: new Uint8Array()
  };
}

export const MsgStoreRawData = {
  encode(message: MsgStoreRawData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.contentHash !== undefined) {
      ContentHash_Raw.encode(message.contentHash, writer.uint32(18).fork()).ldelim();
    }

    if (message.content.length !== 0) {
      writer.uint32(26).bytes(message.content);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStoreRawData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStoreRawData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.contentHash = ContentHash_Raw.decode(reader, reader.uint32());
          break;

        case 3:
          message.content = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgStoreRawData {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      contentHash: isSet(object.contentHash) ? ContentHash_Raw.fromJSON(object.contentHash) : undefined,
      content: isSet(object.content) ? bytesFromBase64(object.content) : new Uint8Array()
    };
  },

  toJSON(message: MsgStoreRawData): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.contentHash !== undefined && (obj.contentHash = message.contentHash ? ContentHash_Raw.toJSON(message.contentHash) : undefined);
    message.content !== undefined && (obj.content = base64FromBytes(message.content !== undefined ? message.content : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<MsgStoreRawData>): MsgStoreRawData {
    const message = createBaseMsgStoreRawData();
    message.sender = object.sender ?? "";
    message.contentHash = object.contentHash !== undefined && object.contentHash !== null ? ContentHash_Raw.fromPartial(object.contentHash) : undefined;
    message.content = object.content ?? new Uint8Array();
    return message;
  }

};

function createBaseMsgStoreRawDataResponse(): MsgStoreRawDataResponse {
  return {};
}

export const MsgStoreRawDataResponse = {
  encode(_: MsgStoreRawDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStoreRawDataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStoreRawDataResponse();

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

  fromJSON(_: any): MsgStoreRawDataResponse {
    return {};
  },

  toJSON(_: MsgStoreRawDataResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgStoreRawDataResponse>): MsgStoreRawDataResponse {
    const message = createBaseMsgStoreRawDataResponse();
    return message;
  }

};