import { Merkledrop } from "./merkledrop";
import { Params } from "./params";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, DeepPartial } from "@osmonauts/helpers";
export interface Indexes {
  merkledropId: Long;
  index: Long[];
}
export interface GenesisState {
  lastMerkledropId: Long;
  merkledrops: Merkledrop[];
  indexes: Indexes[];
  params: Params;
}

function createBaseIndexes(): Indexes {
  return {
    merkledropId: Long.UZERO,
    index: []
  };
}

export const Indexes = {
  encode(message: Indexes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.merkledropId.isZero()) {
      writer.uint32(8).uint64(message.merkledropId);
    }

    writer.uint32(18).fork();

    for (const v of message.index) {
      writer.uint64(v);
    }

    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Indexes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIndexes();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.merkledropId = (reader.uint64() as Long);
          break;

        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.index.push((reader.uint64() as Long));
            }
          } else {
            message.index.push((reader.uint64() as Long));
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Indexes {
    return {
      merkledropId: isSet(object.merkledropId) ? Long.fromString(object.merkledropId) : Long.UZERO,
      index: Array.isArray(object?.index) ? object.index.map((e: any) => Long.fromString(e)) : []
    };
  },

  toJSON(message: Indexes): unknown {
    const obj: any = {};
    message.merkledropId !== undefined && (obj.merkledropId = (message.merkledropId || Long.UZERO).toString());

    if (message.index) {
      obj.index = message.index.map(e => (e || Long.UZERO).toString());
    } else {
      obj.index = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<Indexes>): Indexes {
    const message = createBaseIndexes();
    message.merkledropId = object.merkledropId !== undefined && object.merkledropId !== null ? Long.fromValue(object.merkledropId) : Long.UZERO;
    message.index = object.index?.map(e => Long.fromValue(e)) || [];
    return message;
  }

};

function createBaseGenesisState(): GenesisState {
  return {
    lastMerkledropId: Long.UZERO,
    merkledrops: [],
    indexes: [],
    params: undefined
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.lastMerkledropId.isZero()) {
      writer.uint32(8).uint64(message.lastMerkledropId);
    }

    for (const v of message.merkledrops) {
      Merkledrop.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.indexes) {
      Indexes.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(34).fork()).ldelim();
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
          message.lastMerkledropId = (reader.uint64() as Long);
          break;

        case 2:
          message.merkledrops.push(Merkledrop.decode(reader, reader.uint32()));
          break;

        case 3:
          message.indexes.push(Indexes.decode(reader, reader.uint32()));
          break;

        case 4:
          message.params = Params.decode(reader, reader.uint32());
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
      lastMerkledropId: isSet(object.lastMerkledropId) ? Long.fromString(object.lastMerkledropId) : Long.UZERO,
      merkledrops: Array.isArray(object?.merkledrops) ? object.merkledrops.map((e: any) => Merkledrop.fromJSON(e)) : [],
      indexes: Array.isArray(object?.indexes) ? object.indexes.map((e: any) => Indexes.fromJSON(e)) : [],
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.lastMerkledropId !== undefined && (obj.lastMerkledropId = (message.lastMerkledropId || Long.UZERO).toString());

    if (message.merkledrops) {
      obj.merkledrops = message.merkledrops.map(e => e ? Merkledrop.toJSON(e) : undefined);
    } else {
      obj.merkledrops = [];
    }

    if (message.indexes) {
      obj.indexes = message.indexes.map(e => e ? Indexes.toJSON(e) : undefined);
    } else {
      obj.indexes = [];
    }

    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.lastMerkledropId = object.lastMerkledropId !== undefined && object.lastMerkledropId !== null ? Long.fromValue(object.lastMerkledropId) : Long.UZERO;
    message.merkledrops = object.merkledrops?.map(e => Merkledrop.fromPartial(e)) || [];
    message.indexes = object.indexes?.map(e => Indexes.fromPartial(e)) || [];
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }

};