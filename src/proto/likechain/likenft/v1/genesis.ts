import { Params } from "./params";
import { ClassesByISCN } from "./classes_by_iscn";
import { ClassesByAccount } from "./classes_by_account";
import { BlindBoxContent } from "./blind_box_content";
import { ClassRevealQueueEntry } from "./class_reveal_queue";
import { Offer } from "./offer";
import { Listing } from "./listing";
import { OfferExpireQueueEntry } from "./offer_expire_queue";
import { ListingExpireQueueEntry } from "./listing_expire_queue";
import { RoyaltyConfigByClass } from "./royalty_config";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";

/** GenesisState defines the likenft module's genesis state. */
export interface GenesisState {
  params: Params;
  classesByIscnList: ClassesByISCN[];
  classesByAccountList: ClassesByAccount[];
  blindBoxContentList: BlindBoxContent[];
  classRevealQueue: ClassRevealQueueEntry[];
  offerList: Offer[];
  listingList: Listing[];
  offerExpireQueue: OfferExpireQueueEntry[];
  listingExpireQueue: ListingExpireQueueEntry[];
  royaltyConfigByClassList: RoyaltyConfigByClass[];
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    classesByIscnList: [],
    classesByAccountList: [],
    blindBoxContentList: [],
    classRevealQueue: [],
    offerList: [],
    listingList: [],
    offerExpireQueue: [],
    listingExpireQueue: [],
    royaltyConfigByClassList: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.classesByIscnList) {
      ClassesByISCN.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.classesByAccountList) {
      ClassesByAccount.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.blindBoxContentList) {
      BlindBoxContent.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.classRevealQueue) {
      ClassRevealQueueEntry.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    for (const v of message.offerList) {
      Offer.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    for (const v of message.listingList) {
      Listing.encode(v!, writer.uint32(58).fork()).ldelim();
    }

    for (const v of message.offerExpireQueue) {
      OfferExpireQueueEntry.encode(v!, writer.uint32(66).fork()).ldelim();
    }

    for (const v of message.listingExpireQueue) {
      ListingExpireQueueEntry.encode(v!, writer.uint32(74).fork()).ldelim();
    }

    for (const v of message.royaltyConfigByClassList) {
      RoyaltyConfigByClass.encode(v!, writer.uint32(82).fork()).ldelim();
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
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 2:
          message.classesByIscnList.push(ClassesByISCN.decode(reader, reader.uint32()));
          break;

        case 3:
          message.classesByAccountList.push(ClassesByAccount.decode(reader, reader.uint32()));
          break;

        case 4:
          message.blindBoxContentList.push(BlindBoxContent.decode(reader, reader.uint32()));
          break;

        case 5:
          message.classRevealQueue.push(ClassRevealQueueEntry.decode(reader, reader.uint32()));
          break;

        case 6:
          message.offerList.push(Offer.decode(reader, reader.uint32()));
          break;

        case 7:
          message.listingList.push(Listing.decode(reader, reader.uint32()));
          break;

        case 8:
          message.offerExpireQueue.push(OfferExpireQueueEntry.decode(reader, reader.uint32()));
          break;

        case 9:
          message.listingExpireQueue.push(ListingExpireQueueEntry.decode(reader, reader.uint32()));
          break;

        case 10:
          message.royaltyConfigByClassList.push(RoyaltyConfigByClass.decode(reader, reader.uint32()));
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
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      classesByIscnList: Array.isArray(object?.classesByIscnList) ? object.classesByIscnList.map((e: any) => ClassesByISCN.fromJSON(e)) : [],
      classesByAccountList: Array.isArray(object?.classesByAccountList) ? object.classesByAccountList.map((e: any) => ClassesByAccount.fromJSON(e)) : [],
      blindBoxContentList: Array.isArray(object?.blindBoxContentList) ? object.blindBoxContentList.map((e: any) => BlindBoxContent.fromJSON(e)) : [],
      classRevealQueue: Array.isArray(object?.classRevealQueue) ? object.classRevealQueue.map((e: any) => ClassRevealQueueEntry.fromJSON(e)) : [],
      offerList: Array.isArray(object?.offerList) ? object.offerList.map((e: any) => Offer.fromJSON(e)) : [],
      listingList: Array.isArray(object?.listingList) ? object.listingList.map((e: any) => Listing.fromJSON(e)) : [],
      offerExpireQueue: Array.isArray(object?.offerExpireQueue) ? object.offerExpireQueue.map((e: any) => OfferExpireQueueEntry.fromJSON(e)) : [],
      listingExpireQueue: Array.isArray(object?.listingExpireQueue) ? object.listingExpireQueue.map((e: any) => ListingExpireQueueEntry.fromJSON(e)) : [],
      royaltyConfigByClassList: Array.isArray(object?.royaltyConfigByClassList) ? object.royaltyConfigByClassList.map((e: any) => RoyaltyConfigByClass.fromJSON(e)) : []
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);

    if (message.classesByIscnList) {
      obj.classesByIscnList = message.classesByIscnList.map(e => e ? ClassesByISCN.toJSON(e) : undefined);
    } else {
      obj.classesByIscnList = [];
    }

    if (message.classesByAccountList) {
      obj.classesByAccountList = message.classesByAccountList.map(e => e ? ClassesByAccount.toJSON(e) : undefined);
    } else {
      obj.classesByAccountList = [];
    }

    if (message.blindBoxContentList) {
      obj.blindBoxContentList = message.blindBoxContentList.map(e => e ? BlindBoxContent.toJSON(e) : undefined);
    } else {
      obj.blindBoxContentList = [];
    }

    if (message.classRevealQueue) {
      obj.classRevealQueue = message.classRevealQueue.map(e => e ? ClassRevealQueueEntry.toJSON(e) : undefined);
    } else {
      obj.classRevealQueue = [];
    }

    if (message.offerList) {
      obj.offerList = message.offerList.map(e => e ? Offer.toJSON(e) : undefined);
    } else {
      obj.offerList = [];
    }

    if (message.listingList) {
      obj.listingList = message.listingList.map(e => e ? Listing.toJSON(e) : undefined);
    } else {
      obj.listingList = [];
    }

    if (message.offerExpireQueue) {
      obj.offerExpireQueue = message.offerExpireQueue.map(e => e ? OfferExpireQueueEntry.toJSON(e) : undefined);
    } else {
      obj.offerExpireQueue = [];
    }

    if (message.listingExpireQueue) {
      obj.listingExpireQueue = message.listingExpireQueue.map(e => e ? ListingExpireQueueEntry.toJSON(e) : undefined);
    } else {
      obj.listingExpireQueue = [];
    }

    if (message.royaltyConfigByClassList) {
      obj.royaltyConfigByClassList = message.royaltyConfigByClassList.map(e => e ? RoyaltyConfigByClass.toJSON(e) : undefined);
    } else {
      obj.royaltyConfigByClassList = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.classesByIscnList = object.classesByIscnList?.map(e => ClassesByISCN.fromPartial(e)) || [];
    message.classesByAccountList = object.classesByAccountList?.map(e => ClassesByAccount.fromPartial(e)) || [];
    message.blindBoxContentList = object.blindBoxContentList?.map(e => BlindBoxContent.fromPartial(e)) || [];
    message.classRevealQueue = object.classRevealQueue?.map(e => ClassRevealQueueEntry.fromPartial(e)) || [];
    message.offerList = object.offerList?.map(e => Offer.fromPartial(e)) || [];
    message.listingList = object.listingList?.map(e => Listing.fromPartial(e)) || [];
    message.offerExpireQueue = object.offerExpireQueue?.map(e => OfferExpireQueueEntry.fromPartial(e)) || [];
    message.listingExpireQueue = object.listingExpireQueue?.map(e => ListingExpireQueueEntry.fromPartial(e)) || [];
    message.royaltyConfigByClassList = object.royaltyConfigByClassList?.map(e => RoyaltyConfigByClass.fromPartial(e)) || [];
    return message;
  }

};