import { ContentHash, SignerEntry, Content } from "./types";
import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, isSet, fromJsonTimestamp, fromTimestamp } from "@osmonauts/helpers";

/** GenesisState is the genesis state */
export interface GenesisState {
  /** entries are the content entries */
  entries: GenesisContentEntry[];
}

/** GenesisContentEntry is a genesis content entry */
export interface GenesisContentEntry {
  /** hash is the ContentHash */
  hash: ContentHash;

  /** timestamp is the anchor Timestamp */
  timestamp: Timestamp;

  /** signers are the signers, if any */
  signers: SignerEntry[];

  /** content is the actual content if stored on-chain */
  content: Content;
}

function createBaseGenesisState(): GenesisState {
  return {
    entries: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.entries) {
      GenesisContentEntry.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.entries.push(GenesisContentEntry.decode(reader, reader.uint32()));
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
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => GenesisContentEntry.fromJSON(e)) : []
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};

    if (message.entries) {
      obj.entries = message.entries.map(e => e ? GenesisContentEntry.toJSON(e) : undefined);
    } else {
      obj.entries = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.entries = object.entries?.map(e => GenesisContentEntry.fromPartial(e)) || [];
    return message;
  }

};

function createBaseGenesisContentEntry(): GenesisContentEntry {
  return {
    hash: undefined,
    timestamp: undefined,
    signers: [],
    content: undefined
  };
}

export const GenesisContentEntry = {
  encode(message: GenesisContentEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash !== undefined) {
      ContentHash.encode(message.hash, writer.uint32(10).fork()).ldelim();
    }

    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.signers) {
      SignerEntry.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (message.content !== undefined) {
      Content.encode(message.content, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisContentEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisContentEntry();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.hash = ContentHash.decode(reader, reader.uint32());
          break;

        case 2:
          message.timestamp = Timestamp.decode(reader, reader.uint32());
          break;

        case 3:
          message.signers.push(SignerEntry.decode(reader, reader.uint32()));
          break;

        case 4:
          message.content = Content.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenesisContentEntry {
    return {
      hash: isSet(object.hash) ? ContentHash.fromJSON(object.hash) : undefined,
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
      signers: Array.isArray(object?.signers) ? object.signers.map((e: any) => SignerEntry.fromJSON(e)) : [],
      content: isSet(object.content) ? Content.fromJSON(object.content) : undefined
    };
  },

  toJSON(message: GenesisContentEntry): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash ? ContentHash.toJSON(message.hash) : undefined);
    message.timestamp !== undefined && (obj.timestamp = fromTimestamp(message.timestamp).toISOString());

    if (message.signers) {
      obj.signers = message.signers.map(e => e ? SignerEntry.toJSON(e) : undefined);
    } else {
      obj.signers = [];
    }

    message.content !== undefined && (obj.content = message.content ? Content.toJSON(message.content) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisContentEntry>): GenesisContentEntry {
    const message = createBaseGenesisContentEntry();
    message.hash = object.hash !== undefined && object.hash !== null ? ContentHash.fromPartial(object.hash) : undefined;
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Timestamp.fromPartial(object.timestamp) : undefined;
    message.signers = object.signers?.map(e => SignerEntry.fromPartial(e)) || [];
    message.content = object.content !== undefined && object.content !== null ? Content.fromPartial(object.content) : undefined;
    return message;
  }

};