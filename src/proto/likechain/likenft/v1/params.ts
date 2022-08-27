import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, DeepPartial } from "@osmonauts/helpers";

/** Params defines the parameters for the module. */
export interface Params {
  priceDenom: string;
  feePerByte: DecCoin;
  maxOfferDurationDays: Long;
  maxListingDurationDays: Long;
  maxRoyaltyBasisPoints: Long;
}

function createBaseParams(): Params {
  return {
    priceDenom: "",
    feePerByte: undefined,
    maxOfferDurationDays: Long.UZERO,
    maxListingDurationDays: Long.UZERO,
    maxRoyaltyBasisPoints: Long.UZERO
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.priceDenom !== "") {
      writer.uint32(10).string(message.priceDenom);
    }

    if (message.feePerByte !== undefined) {
      DecCoin.encode(message.feePerByte, writer.uint32(18).fork()).ldelim();
    }

    if (!message.maxOfferDurationDays.isZero()) {
      writer.uint32(24).uint64(message.maxOfferDurationDays);
    }

    if (!message.maxListingDurationDays.isZero()) {
      writer.uint32(32).uint64(message.maxListingDurationDays);
    }

    if (!message.maxRoyaltyBasisPoints.isZero()) {
      writer.uint32(40).uint64(message.maxRoyaltyBasisPoints);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.priceDenom = reader.string();
          break;

        case 2:
          message.feePerByte = DecCoin.decode(reader, reader.uint32());
          break;

        case 3:
          message.maxOfferDurationDays = (reader.uint64() as Long);
          break;

        case 4:
          message.maxListingDurationDays = (reader.uint64() as Long);
          break;

        case 5:
          message.maxRoyaltyBasisPoints = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Params {
    return {
      priceDenom: isSet(object.priceDenom) ? String(object.priceDenom) : "",
      feePerByte: isSet(object.feePerByte) ? DecCoin.fromJSON(object.feePerByte) : undefined,
      maxOfferDurationDays: isSet(object.maxOfferDurationDays) ? Long.fromString(object.maxOfferDurationDays) : Long.UZERO,
      maxListingDurationDays: isSet(object.maxListingDurationDays) ? Long.fromString(object.maxListingDurationDays) : Long.UZERO,
      maxRoyaltyBasisPoints: isSet(object.maxRoyaltyBasisPoints) ? Long.fromString(object.maxRoyaltyBasisPoints) : Long.UZERO
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.priceDenom !== undefined && (obj.priceDenom = message.priceDenom);
    message.feePerByte !== undefined && (obj.feePerByte = message.feePerByte ? DecCoin.toJSON(message.feePerByte) : undefined);
    message.maxOfferDurationDays !== undefined && (obj.maxOfferDurationDays = (message.maxOfferDurationDays || Long.UZERO).toString());
    message.maxListingDurationDays !== undefined && (obj.maxListingDurationDays = (message.maxListingDurationDays || Long.UZERO).toString());
    message.maxRoyaltyBasisPoints !== undefined && (obj.maxRoyaltyBasisPoints = (message.maxRoyaltyBasisPoints || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.priceDenom = object.priceDenom ?? "";
    message.feePerByte = object.feePerByte !== undefined && object.feePerByte !== null ? DecCoin.fromPartial(object.feePerByte) : undefined;
    message.maxOfferDurationDays = object.maxOfferDurationDays !== undefined && object.maxOfferDurationDays !== null ? Long.fromValue(object.maxOfferDurationDays) : Long.UZERO;
    message.maxListingDurationDays = object.maxListingDurationDays !== undefined && object.maxListingDurationDays !== null ? Long.fromValue(object.maxListingDurationDays) : Long.UZERO;
    message.maxRoyaltyBasisPoints = object.maxRoyaltyBasisPoints !== undefined && object.maxRoyaltyBasisPoints !== null ? Long.fromValue(object.maxRoyaltyBasisPoints) : Long.UZERO;
    return message;
  }

};