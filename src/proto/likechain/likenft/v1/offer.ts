import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, fromJsonTimestamp, fromTimestamp, DeepPartial, bytesFromBase64, base64FromBytes } from "@osmonauts/helpers";
export interface Offer {
  classId: string;
  nftId: string;
  buyer: string;
  price: Long;
  expiration: Timestamp;
}
export interface OfferStoreRecord {
  classId: string;
  nftId: string;
  buyer: Uint8Array;
  price: Long;
  expiration: Timestamp;
}

function createBaseOffer(): Offer {
  return {
    classId: "",
    nftId: "",
    buyer: "",
    price: Long.UZERO,
    expiration: undefined
  };
}

export const Offer = {
  encode(message: Offer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }

    if (message.buyer !== "") {
      writer.uint32(26).string(message.buyer);
    }

    if (!message.price.isZero()) {
      writer.uint32(32).uint64(message.price);
    }

    if (message.expiration !== undefined) {
      Timestamp.encode(message.expiration, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Offer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOffer();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;

        case 2:
          message.nftId = reader.string();
          break;

        case 3:
          message.buyer = reader.string();
          break;

        case 4:
          message.price = (reader.uint64() as Long);
          break;

        case 5:
          message.expiration = Timestamp.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Offer {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      buyer: isSet(object.buyer) ? String(object.buyer) : "",
      price: isSet(object.price) ? Long.fromString(object.price) : Long.UZERO,
      expiration: isSet(object.expiration) ? fromJsonTimestamp(object.expiration) : undefined
    };
  },

  toJSON(message: Offer): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.buyer !== undefined && (obj.buyer = message.buyer);
    message.price !== undefined && (obj.price = (message.price || Long.UZERO).toString());
    message.expiration !== undefined && (obj.expiration = fromTimestamp(message.expiration).toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<Offer>): Offer {
    const message = createBaseOffer();
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.buyer = object.buyer ?? "";
    message.price = object.price !== undefined && object.price !== null ? Long.fromValue(object.price) : Long.UZERO;
    message.expiration = object.expiration !== undefined && object.expiration !== null ? Timestamp.fromPartial(object.expiration) : undefined;
    return message;
  }

};

function createBaseOfferStoreRecord(): OfferStoreRecord {
  return {
    classId: "",
    nftId: "",
    buyer: new Uint8Array(),
    price: Long.UZERO,
    expiration: undefined
  };
}

export const OfferStoreRecord = {
  encode(message: OfferStoreRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }

    if (message.buyer.length !== 0) {
      writer.uint32(26).bytes(message.buyer);
    }

    if (!message.price.isZero()) {
      writer.uint32(32).uint64(message.price);
    }

    if (message.expiration !== undefined) {
      Timestamp.encode(message.expiration, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OfferStoreRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOfferStoreRecord();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;

        case 2:
          message.nftId = reader.string();
          break;

        case 3:
          message.buyer = reader.bytes();
          break;

        case 4:
          message.price = (reader.uint64() as Long);
          break;

        case 5:
          message.expiration = Timestamp.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): OfferStoreRecord {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      buyer: isSet(object.buyer) ? bytesFromBase64(object.buyer) : new Uint8Array(),
      price: isSet(object.price) ? Long.fromString(object.price) : Long.UZERO,
      expiration: isSet(object.expiration) ? fromJsonTimestamp(object.expiration) : undefined
    };
  },

  toJSON(message: OfferStoreRecord): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.buyer !== undefined && (obj.buyer = base64FromBytes(message.buyer !== undefined ? message.buyer : new Uint8Array()));
    message.price !== undefined && (obj.price = (message.price || Long.UZERO).toString());
    message.expiration !== undefined && (obj.expiration = fromTimestamp(message.expiration).toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<OfferStoreRecord>): OfferStoreRecord {
    const message = createBaseOfferStoreRecord();
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.buyer = object.buyer ?? new Uint8Array();
    message.price = object.price !== undefined && object.price !== null ? Long.fromValue(object.price) : Long.UZERO;
    message.expiration = object.expiration !== undefined && object.expiration !== null ? Timestamp.fromPartial(object.expiration) : undefined;
    return message;
  }

};