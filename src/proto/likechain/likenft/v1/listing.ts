import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, fromJsonTimestamp, fromTimestamp, DeepPartial, bytesFromBase64, base64FromBytes } from "@osmonauts/helpers";
export interface Listing {
  classId: string;
  nftId: string;
  seller: string;
  price: Long;
  expiration: Timestamp;
}
export interface ListingStoreRecord {
  classId: string;
  nftId: string;
  seller: Uint8Array;
  price: Long;
  expiration: Timestamp;
}

function createBaseListing(): Listing {
  return {
    classId: "",
    nftId: "",
    seller: "",
    price: Long.UZERO,
    expiration: undefined
  };
}

export const Listing = {
  encode(message: Listing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }

    if (message.seller !== "") {
      writer.uint32(26).string(message.seller);
    }

    if (!message.price.isZero()) {
      writer.uint32(32).uint64(message.price);
    }

    if (message.expiration !== undefined) {
      Timestamp.encode(message.expiration, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Listing {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListing();

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
          message.seller = reader.string();
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

  fromJSON(object: any): Listing {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      seller: isSet(object.seller) ? String(object.seller) : "",
      price: isSet(object.price) ? Long.fromString(object.price) : Long.UZERO,
      expiration: isSet(object.expiration) ? fromJsonTimestamp(object.expiration) : undefined
    };
  },

  toJSON(message: Listing): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.seller !== undefined && (obj.seller = message.seller);
    message.price !== undefined && (obj.price = (message.price || Long.UZERO).toString());
    message.expiration !== undefined && (obj.expiration = fromTimestamp(message.expiration).toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<Listing>): Listing {
    const message = createBaseListing();
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.seller = object.seller ?? "";
    message.price = object.price !== undefined && object.price !== null ? Long.fromValue(object.price) : Long.UZERO;
    message.expiration = object.expiration !== undefined && object.expiration !== null ? Timestamp.fromPartial(object.expiration) : undefined;
    return message;
  }

};

function createBaseListingStoreRecord(): ListingStoreRecord {
  return {
    classId: "",
    nftId: "",
    seller: new Uint8Array(),
    price: Long.UZERO,
    expiration: undefined
  };
}

export const ListingStoreRecord = {
  encode(message: ListingStoreRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }

    if (message.seller.length !== 0) {
      writer.uint32(26).bytes(message.seller);
    }

    if (!message.price.isZero()) {
      writer.uint32(32).uint64(message.price);
    }

    if (message.expiration !== undefined) {
      Timestamp.encode(message.expiration, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListingStoreRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListingStoreRecord();

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
          message.seller = reader.bytes();
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

  fromJSON(object: any): ListingStoreRecord {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      seller: isSet(object.seller) ? bytesFromBase64(object.seller) : new Uint8Array(),
      price: isSet(object.price) ? Long.fromString(object.price) : Long.UZERO,
      expiration: isSet(object.expiration) ? fromJsonTimestamp(object.expiration) : undefined
    };
  },

  toJSON(message: ListingStoreRecord): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.seller !== undefined && (obj.seller = base64FromBytes(message.seller !== undefined ? message.seller : new Uint8Array()));
    message.price !== undefined && (obj.price = (message.price || Long.UZERO).toString());
    message.expiration !== undefined && (obj.expiration = fromTimestamp(message.expiration).toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<ListingStoreRecord>): ListingStoreRecord {
    const message = createBaseListingStoreRecord();
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.seller = object.seller ?? new Uint8Array();
    message.price = object.price !== undefined && object.price !== null ? Long.fromValue(object.price) : Long.UZERO;
    message.expiration = object.expiration !== undefined && object.expiration !== null ? Timestamp.fromPartial(object.expiration) : undefined;
    return message;
  }

};