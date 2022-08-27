import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Long } from "@osmonauts/helpers";
export interface EventNewClass {
  classId: string;
  parentIscnIdPrefix: string;
  parentAccount: string;
}
export interface EventUpdateClass {
  classId: string;
  parentIscnIdPrefix: string;
  parentAccount: string;
}
export interface EventRevealClass {
  classId: string;
  success: boolean;
  error: string;
}
export interface EventMintNFT {
  classId: string;
  nftId: string;
  owner: string;
  classParentIscnIdPrefix: string;
  classParentAccount: string;
}
export interface EventBurnNFT {
  classId: string;
  nftId: string;
  owner: string;
  classParentIscnIdPrefix: string;
  classParentAccount: string;
}
export interface EventCreateBlindBoxContent {
  classId: string;
  contentId: string;
  classParentIscnIdPrefix: string;
  classParentAccount: string;
}
export interface EventUpdateBlindBoxContent {
  classId: string;
  contentId: string;
  classParentIscnIdPrefix: string;
  classParentAccount: string;
}
export interface EventDeleteBlindBoxContent {
  classId: string;
  contentId: string;
  classParentIscnIdPrefix: string;
  classParentAccount: string;
}
export interface EventCreateOffer {
  classId: string;
  nftId: string;
  buyer: string;
}
export interface EventUpdateOffer {
  classId: string;
  nftId: string;
  buyer: string;
}
export interface EventDeleteOffer {
  classId: string;
  nftId: string;
  buyer: string;
}
export interface EventCreateListing {
  classId: string;
  nftId: string;
  seller: string;
}
export interface EventUpdateListing {
  classId: string;
  nftId: string;
  seller: string;
}
export interface EventDeleteListing {
  classId: string;
  nftId: string;
  seller: string;
}
export interface EventSellNFT {
  classId: string;
  nftId: string;
  seller: string;
  buyer: string;
  price: Long;
}
export interface EventBuyNFT {
  classId: string;
  nftId: string;
  seller: string;
  buyer: string;
  price: Long;
}
export interface EventExpireOffer {
  classId: string;
  nftId: string;
  buyer: string;
  success: boolean;
  error: string;
}
export interface EventExpireListing {
  classId: string;
  nftId: string;
  seller: string;
  success: boolean;
  error: string;
}
export interface EventCreateRoyaltyConfig {
  classId: string;
}
export interface EventUpdateRoyaltyConfig {
  classId: string;
}
export interface EventDeleteRoyaltyConfig {
  classId: string;
}

function createBaseEventNewClass(): EventNewClass {
  return {
    classId: "",
    parentIscnIdPrefix: "",
    parentAccount: ""
  };
}

export const EventNewClass = {
  encode(message: EventNewClass, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    if (message.parentIscnIdPrefix !== "") {
      writer.uint32(18).string(message.parentIscnIdPrefix);
    }

    if (message.parentAccount !== "") {
      writer.uint32(26).string(message.parentAccount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventNewClass {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventNewClass();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;

        case 2:
          message.parentIscnIdPrefix = reader.string();
          break;

        case 3:
          message.parentAccount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventNewClass {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      parentIscnIdPrefix: isSet(object.parentIscnIdPrefix) ? String(object.parentIscnIdPrefix) : "",
      parentAccount: isSet(object.parentAccount) ? String(object.parentAccount) : ""
    };
  },

  toJSON(message: EventNewClass): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.parentIscnIdPrefix !== undefined && (obj.parentIscnIdPrefix = message.parentIscnIdPrefix);
    message.parentAccount !== undefined && (obj.parentAccount = message.parentAccount);
    return obj;
  },

  fromPartial(object: DeepPartial<EventNewClass>): EventNewClass {
    const message = createBaseEventNewClass();
    message.classId = object.classId ?? "";
    message.parentIscnIdPrefix = object.parentIscnIdPrefix ?? "";
    message.parentAccount = object.parentAccount ?? "";
    return message;
  }

};

function createBaseEventUpdateClass(): EventUpdateClass {
  return {
    classId: "",
    parentIscnIdPrefix: "",
    parentAccount: ""
  };
}

export const EventUpdateClass = {
  encode(message: EventUpdateClass, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    if (message.parentIscnIdPrefix !== "") {
      writer.uint32(18).string(message.parentIscnIdPrefix);
    }

    if (message.parentAccount !== "") {
      writer.uint32(26).string(message.parentAccount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateClass {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateClass();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;

        case 2:
          message.parentIscnIdPrefix = reader.string();
          break;

        case 3:
          message.parentAccount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventUpdateClass {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      parentIscnIdPrefix: isSet(object.parentIscnIdPrefix) ? String(object.parentIscnIdPrefix) : "",
      parentAccount: isSet(object.parentAccount) ? String(object.parentAccount) : ""
    };
  },

  toJSON(message: EventUpdateClass): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.parentIscnIdPrefix !== undefined && (obj.parentIscnIdPrefix = message.parentIscnIdPrefix);
    message.parentAccount !== undefined && (obj.parentAccount = message.parentAccount);
    return obj;
  },

  fromPartial(object: DeepPartial<EventUpdateClass>): EventUpdateClass {
    const message = createBaseEventUpdateClass();
    message.classId = object.classId ?? "";
    message.parentIscnIdPrefix = object.parentIscnIdPrefix ?? "";
    message.parentAccount = object.parentAccount ?? "";
    return message;
  }

};

function createBaseEventRevealClass(): EventRevealClass {
  return {
    classId: "",
    success: false,
    error: ""
  };
}

export const EventRevealClass = {
  encode(message: EventRevealClass, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }

    if (message.error !== "") {
      writer.uint32(26).string(message.error);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventRevealClass {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRevealClass();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;

        case 2:
          message.success = reader.bool();
          break;

        case 3:
          message.error = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventRevealClass {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      success: isSet(object.success) ? Boolean(object.success) : false,
      error: isSet(object.error) ? String(object.error) : ""
    };
  },

  toJSON(message: EventRevealClass): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.success !== undefined && (obj.success = message.success);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },

  fromPartial(object: DeepPartial<EventRevealClass>): EventRevealClass {
    const message = createBaseEventRevealClass();
    message.classId = object.classId ?? "";
    message.success = object.success ?? false;
    message.error = object.error ?? "";
    return message;
  }

};

function createBaseEventMintNFT(): EventMintNFT {
  return {
    classId: "",
    nftId: "",
    owner: "",
    classParentIscnIdPrefix: "",
    classParentAccount: ""
  };
}

export const EventMintNFT = {
  encode(message: EventMintNFT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }

    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }

    if (message.classParentIscnIdPrefix !== "") {
      writer.uint32(34).string(message.classParentIscnIdPrefix);
    }

    if (message.classParentAccount !== "") {
      writer.uint32(42).string(message.classParentAccount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventMintNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMintNFT();

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
          message.owner = reader.string();
          break;

        case 4:
          message.classParentIscnIdPrefix = reader.string();
          break;

        case 5:
          message.classParentAccount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventMintNFT {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      classParentIscnIdPrefix: isSet(object.classParentIscnIdPrefix) ? String(object.classParentIscnIdPrefix) : "",
      classParentAccount: isSet(object.classParentAccount) ? String(object.classParentAccount) : ""
    };
  },

  toJSON(message: EventMintNFT): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.owner !== undefined && (obj.owner = message.owner);
    message.classParentIscnIdPrefix !== undefined && (obj.classParentIscnIdPrefix = message.classParentIscnIdPrefix);
    message.classParentAccount !== undefined && (obj.classParentAccount = message.classParentAccount);
    return obj;
  },

  fromPartial(object: DeepPartial<EventMintNFT>): EventMintNFT {
    const message = createBaseEventMintNFT();
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.owner = object.owner ?? "";
    message.classParentIscnIdPrefix = object.classParentIscnIdPrefix ?? "";
    message.classParentAccount = object.classParentAccount ?? "";
    return message;
  }

};

function createBaseEventBurnNFT(): EventBurnNFT {
  return {
    classId: "",
    nftId: "",
    owner: "",
    classParentIscnIdPrefix: "",
    classParentAccount: ""
  };
}

export const EventBurnNFT = {
  encode(message: EventBurnNFT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }

    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }

    if (message.classParentIscnIdPrefix !== "") {
      writer.uint32(34).string(message.classParentIscnIdPrefix);
    }

    if (message.classParentAccount !== "") {
      writer.uint32(42).string(message.classParentAccount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventBurnNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBurnNFT();

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
          message.owner = reader.string();
          break;

        case 4:
          message.classParentIscnIdPrefix = reader.string();
          break;

        case 5:
          message.classParentAccount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventBurnNFT {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      classParentIscnIdPrefix: isSet(object.classParentIscnIdPrefix) ? String(object.classParentIscnIdPrefix) : "",
      classParentAccount: isSet(object.classParentAccount) ? String(object.classParentAccount) : ""
    };
  },

  toJSON(message: EventBurnNFT): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.owner !== undefined && (obj.owner = message.owner);
    message.classParentIscnIdPrefix !== undefined && (obj.classParentIscnIdPrefix = message.classParentIscnIdPrefix);
    message.classParentAccount !== undefined && (obj.classParentAccount = message.classParentAccount);
    return obj;
  },

  fromPartial(object: DeepPartial<EventBurnNFT>): EventBurnNFT {
    const message = createBaseEventBurnNFT();
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.owner = object.owner ?? "";
    message.classParentIscnIdPrefix = object.classParentIscnIdPrefix ?? "";
    message.classParentAccount = object.classParentAccount ?? "";
    return message;
  }

};

function createBaseEventCreateBlindBoxContent(): EventCreateBlindBoxContent {
  return {
    classId: "",
    contentId: "",
    classParentIscnIdPrefix: "",
    classParentAccount: ""
  };
}

export const EventCreateBlindBoxContent = {
  encode(message: EventCreateBlindBoxContent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    if (message.contentId !== "") {
      writer.uint32(18).string(message.contentId);
    }

    if (message.classParentIscnIdPrefix !== "") {
      writer.uint32(26).string(message.classParentIscnIdPrefix);
    }

    if (message.classParentAccount !== "") {
      writer.uint32(34).string(message.classParentAccount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateBlindBoxContent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateBlindBoxContent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;

        case 2:
          message.contentId = reader.string();
          break;

        case 3:
          message.classParentIscnIdPrefix = reader.string();
          break;

        case 4:
          message.classParentAccount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventCreateBlindBoxContent {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      contentId: isSet(object.contentId) ? String(object.contentId) : "",
      classParentIscnIdPrefix: isSet(object.classParentIscnIdPrefix) ? String(object.classParentIscnIdPrefix) : "",
      classParentAccount: isSet(object.classParentAccount) ? String(object.classParentAccount) : ""
    };
  },

  toJSON(message: EventCreateBlindBoxContent): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.contentId !== undefined && (obj.contentId = message.contentId);
    message.classParentIscnIdPrefix !== undefined && (obj.classParentIscnIdPrefix = message.classParentIscnIdPrefix);
    message.classParentAccount !== undefined && (obj.classParentAccount = message.classParentAccount);
    return obj;
  },

  fromPartial(object: DeepPartial<EventCreateBlindBoxContent>): EventCreateBlindBoxContent {
    const message = createBaseEventCreateBlindBoxContent();
    message.classId = object.classId ?? "";
    message.contentId = object.contentId ?? "";
    message.classParentIscnIdPrefix = object.classParentIscnIdPrefix ?? "";
    message.classParentAccount = object.classParentAccount ?? "";
    return message;
  }

};

function createBaseEventUpdateBlindBoxContent(): EventUpdateBlindBoxContent {
  return {
    classId: "",
    contentId: "",
    classParentIscnIdPrefix: "",
    classParentAccount: ""
  };
}

export const EventUpdateBlindBoxContent = {
  encode(message: EventUpdateBlindBoxContent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    if (message.contentId !== "") {
      writer.uint32(18).string(message.contentId);
    }

    if (message.classParentIscnIdPrefix !== "") {
      writer.uint32(26).string(message.classParentIscnIdPrefix);
    }

    if (message.classParentAccount !== "") {
      writer.uint32(34).string(message.classParentAccount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateBlindBoxContent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateBlindBoxContent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;

        case 2:
          message.contentId = reader.string();
          break;

        case 3:
          message.classParentIscnIdPrefix = reader.string();
          break;

        case 4:
          message.classParentAccount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventUpdateBlindBoxContent {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      contentId: isSet(object.contentId) ? String(object.contentId) : "",
      classParentIscnIdPrefix: isSet(object.classParentIscnIdPrefix) ? String(object.classParentIscnIdPrefix) : "",
      classParentAccount: isSet(object.classParentAccount) ? String(object.classParentAccount) : ""
    };
  },

  toJSON(message: EventUpdateBlindBoxContent): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.contentId !== undefined && (obj.contentId = message.contentId);
    message.classParentIscnIdPrefix !== undefined && (obj.classParentIscnIdPrefix = message.classParentIscnIdPrefix);
    message.classParentAccount !== undefined && (obj.classParentAccount = message.classParentAccount);
    return obj;
  },

  fromPartial(object: DeepPartial<EventUpdateBlindBoxContent>): EventUpdateBlindBoxContent {
    const message = createBaseEventUpdateBlindBoxContent();
    message.classId = object.classId ?? "";
    message.contentId = object.contentId ?? "";
    message.classParentIscnIdPrefix = object.classParentIscnIdPrefix ?? "";
    message.classParentAccount = object.classParentAccount ?? "";
    return message;
  }

};

function createBaseEventDeleteBlindBoxContent(): EventDeleteBlindBoxContent {
  return {
    classId: "",
    contentId: "",
    classParentIscnIdPrefix: "",
    classParentAccount: ""
  };
}

export const EventDeleteBlindBoxContent = {
  encode(message: EventDeleteBlindBoxContent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    if (message.contentId !== "") {
      writer.uint32(18).string(message.contentId);
    }

    if (message.classParentIscnIdPrefix !== "") {
      writer.uint32(26).string(message.classParentIscnIdPrefix);
    }

    if (message.classParentAccount !== "") {
      writer.uint32(34).string(message.classParentAccount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventDeleteBlindBoxContent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDeleteBlindBoxContent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;

        case 2:
          message.contentId = reader.string();
          break;

        case 3:
          message.classParentIscnIdPrefix = reader.string();
          break;

        case 4:
          message.classParentAccount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventDeleteBlindBoxContent {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      contentId: isSet(object.contentId) ? String(object.contentId) : "",
      classParentIscnIdPrefix: isSet(object.classParentIscnIdPrefix) ? String(object.classParentIscnIdPrefix) : "",
      classParentAccount: isSet(object.classParentAccount) ? String(object.classParentAccount) : ""
    };
  },

  toJSON(message: EventDeleteBlindBoxContent): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.contentId !== undefined && (obj.contentId = message.contentId);
    message.classParentIscnIdPrefix !== undefined && (obj.classParentIscnIdPrefix = message.classParentIscnIdPrefix);
    message.classParentAccount !== undefined && (obj.classParentAccount = message.classParentAccount);
    return obj;
  },

  fromPartial(object: DeepPartial<EventDeleteBlindBoxContent>): EventDeleteBlindBoxContent {
    const message = createBaseEventDeleteBlindBoxContent();
    message.classId = object.classId ?? "";
    message.contentId = object.contentId ?? "";
    message.classParentIscnIdPrefix = object.classParentIscnIdPrefix ?? "";
    message.classParentAccount = object.classParentAccount ?? "";
    return message;
  }

};

function createBaseEventCreateOffer(): EventCreateOffer {
  return {
    classId: "",
    nftId: "",
    buyer: ""
  };
}

export const EventCreateOffer = {
  encode(message: EventCreateOffer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }

    if (message.buyer !== "") {
      writer.uint32(26).string(message.buyer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateOffer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateOffer();

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

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventCreateOffer {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      buyer: isSet(object.buyer) ? String(object.buyer) : ""
    };
  },

  toJSON(message: EventCreateOffer): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.buyer !== undefined && (obj.buyer = message.buyer);
    return obj;
  },

  fromPartial(object: DeepPartial<EventCreateOffer>): EventCreateOffer {
    const message = createBaseEventCreateOffer();
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.buyer = object.buyer ?? "";
    return message;
  }

};

function createBaseEventUpdateOffer(): EventUpdateOffer {
  return {
    classId: "",
    nftId: "",
    buyer: ""
  };
}

export const EventUpdateOffer = {
  encode(message: EventUpdateOffer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }

    if (message.buyer !== "") {
      writer.uint32(26).string(message.buyer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateOffer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateOffer();

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

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventUpdateOffer {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      buyer: isSet(object.buyer) ? String(object.buyer) : ""
    };
  },

  toJSON(message: EventUpdateOffer): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.buyer !== undefined && (obj.buyer = message.buyer);
    return obj;
  },

  fromPartial(object: DeepPartial<EventUpdateOffer>): EventUpdateOffer {
    const message = createBaseEventUpdateOffer();
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.buyer = object.buyer ?? "";
    return message;
  }

};

function createBaseEventDeleteOffer(): EventDeleteOffer {
  return {
    classId: "",
    nftId: "",
    buyer: ""
  };
}

export const EventDeleteOffer = {
  encode(message: EventDeleteOffer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }

    if (message.buyer !== "") {
      writer.uint32(26).string(message.buyer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventDeleteOffer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDeleteOffer();

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

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventDeleteOffer {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      buyer: isSet(object.buyer) ? String(object.buyer) : ""
    };
  },

  toJSON(message: EventDeleteOffer): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.buyer !== undefined && (obj.buyer = message.buyer);
    return obj;
  },

  fromPartial(object: DeepPartial<EventDeleteOffer>): EventDeleteOffer {
    const message = createBaseEventDeleteOffer();
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.buyer = object.buyer ?? "";
    return message;
  }

};

function createBaseEventCreateListing(): EventCreateListing {
  return {
    classId: "",
    nftId: "",
    seller: ""
  };
}

export const EventCreateListing = {
  encode(message: EventCreateListing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }

    if (message.seller !== "") {
      writer.uint32(26).string(message.seller);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateListing {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateListing();

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

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventCreateListing {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      seller: isSet(object.seller) ? String(object.seller) : ""
    };
  },

  toJSON(message: EventCreateListing): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.seller !== undefined && (obj.seller = message.seller);
    return obj;
  },

  fromPartial(object: DeepPartial<EventCreateListing>): EventCreateListing {
    const message = createBaseEventCreateListing();
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.seller = object.seller ?? "";
    return message;
  }

};

function createBaseEventUpdateListing(): EventUpdateListing {
  return {
    classId: "",
    nftId: "",
    seller: ""
  };
}

export const EventUpdateListing = {
  encode(message: EventUpdateListing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }

    if (message.seller !== "") {
      writer.uint32(26).string(message.seller);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateListing {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateListing();

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

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventUpdateListing {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      seller: isSet(object.seller) ? String(object.seller) : ""
    };
  },

  toJSON(message: EventUpdateListing): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.seller !== undefined && (obj.seller = message.seller);
    return obj;
  },

  fromPartial(object: DeepPartial<EventUpdateListing>): EventUpdateListing {
    const message = createBaseEventUpdateListing();
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.seller = object.seller ?? "";
    return message;
  }

};

function createBaseEventDeleteListing(): EventDeleteListing {
  return {
    classId: "",
    nftId: "",
    seller: ""
  };
}

export const EventDeleteListing = {
  encode(message: EventDeleteListing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }

    if (message.seller !== "") {
      writer.uint32(26).string(message.seller);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventDeleteListing {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDeleteListing();

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

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventDeleteListing {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      seller: isSet(object.seller) ? String(object.seller) : ""
    };
  },

  toJSON(message: EventDeleteListing): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.seller !== undefined && (obj.seller = message.seller);
    return obj;
  },

  fromPartial(object: DeepPartial<EventDeleteListing>): EventDeleteListing {
    const message = createBaseEventDeleteListing();
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.seller = object.seller ?? "";
    return message;
  }

};

function createBaseEventSellNFT(): EventSellNFT {
  return {
    classId: "",
    nftId: "",
    seller: "",
    buyer: "",
    price: Long.UZERO
  };
}

export const EventSellNFT = {
  encode(message: EventSellNFT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }

    if (message.seller !== "") {
      writer.uint32(26).string(message.seller);
    }

    if (message.buyer !== "") {
      writer.uint32(34).string(message.buyer);
    }

    if (!message.price.isZero()) {
      writer.uint32(40).uint64(message.price);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSellNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSellNFT();

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
          message.buyer = reader.string();
          break;

        case 5:
          message.price = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventSellNFT {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      seller: isSet(object.seller) ? String(object.seller) : "",
      buyer: isSet(object.buyer) ? String(object.buyer) : "",
      price: isSet(object.price) ? Long.fromString(object.price) : Long.UZERO
    };
  },

  toJSON(message: EventSellNFT): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.seller !== undefined && (obj.seller = message.seller);
    message.buyer !== undefined && (obj.buyer = message.buyer);
    message.price !== undefined && (obj.price = (message.price || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<EventSellNFT>): EventSellNFT {
    const message = createBaseEventSellNFT();
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.seller = object.seller ?? "";
    message.buyer = object.buyer ?? "";
    message.price = object.price !== undefined && object.price !== null ? Long.fromValue(object.price) : Long.UZERO;
    return message;
  }

};

function createBaseEventBuyNFT(): EventBuyNFT {
  return {
    classId: "",
    nftId: "",
    seller: "",
    buyer: "",
    price: Long.UZERO
  };
}

export const EventBuyNFT = {
  encode(message: EventBuyNFT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }

    if (message.seller !== "") {
      writer.uint32(26).string(message.seller);
    }

    if (message.buyer !== "") {
      writer.uint32(34).string(message.buyer);
    }

    if (!message.price.isZero()) {
      writer.uint32(40).uint64(message.price);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventBuyNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBuyNFT();

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
          message.buyer = reader.string();
          break;

        case 5:
          message.price = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventBuyNFT {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      seller: isSet(object.seller) ? String(object.seller) : "",
      buyer: isSet(object.buyer) ? String(object.buyer) : "",
      price: isSet(object.price) ? Long.fromString(object.price) : Long.UZERO
    };
  },

  toJSON(message: EventBuyNFT): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.seller !== undefined && (obj.seller = message.seller);
    message.buyer !== undefined && (obj.buyer = message.buyer);
    message.price !== undefined && (obj.price = (message.price || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<EventBuyNFT>): EventBuyNFT {
    const message = createBaseEventBuyNFT();
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.seller = object.seller ?? "";
    message.buyer = object.buyer ?? "";
    message.price = object.price !== undefined && object.price !== null ? Long.fromValue(object.price) : Long.UZERO;
    return message;
  }

};

function createBaseEventExpireOffer(): EventExpireOffer {
  return {
    classId: "",
    nftId: "",
    buyer: "",
    success: false,
    error: ""
  };
}

export const EventExpireOffer = {
  encode(message: EventExpireOffer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }

    if (message.buyer !== "") {
      writer.uint32(26).string(message.buyer);
    }

    if (message.success === true) {
      writer.uint32(32).bool(message.success);
    }

    if (message.error !== "") {
      writer.uint32(42).string(message.error);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventExpireOffer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventExpireOffer();

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
          message.success = reader.bool();
          break;

        case 5:
          message.error = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventExpireOffer {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      buyer: isSet(object.buyer) ? String(object.buyer) : "",
      success: isSet(object.success) ? Boolean(object.success) : false,
      error: isSet(object.error) ? String(object.error) : ""
    };
  },

  toJSON(message: EventExpireOffer): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.buyer !== undefined && (obj.buyer = message.buyer);
    message.success !== undefined && (obj.success = message.success);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },

  fromPartial(object: DeepPartial<EventExpireOffer>): EventExpireOffer {
    const message = createBaseEventExpireOffer();
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.buyer = object.buyer ?? "";
    message.success = object.success ?? false;
    message.error = object.error ?? "";
    return message;
  }

};

function createBaseEventExpireListing(): EventExpireListing {
  return {
    classId: "",
    nftId: "",
    seller: "",
    success: false,
    error: ""
  };
}

export const EventExpireListing = {
  encode(message: EventExpireListing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }

    if (message.seller !== "") {
      writer.uint32(26).string(message.seller);
    }

    if (message.success === true) {
      writer.uint32(32).bool(message.success);
    }

    if (message.error !== "") {
      writer.uint32(42).string(message.error);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventExpireListing {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventExpireListing();

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
          message.success = reader.bool();
          break;

        case 5:
          message.error = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventExpireListing {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      seller: isSet(object.seller) ? String(object.seller) : "",
      success: isSet(object.success) ? Boolean(object.success) : false,
      error: isSet(object.error) ? String(object.error) : ""
    };
  },

  toJSON(message: EventExpireListing): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.seller !== undefined && (obj.seller = message.seller);
    message.success !== undefined && (obj.success = message.success);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },

  fromPartial(object: DeepPartial<EventExpireListing>): EventExpireListing {
    const message = createBaseEventExpireListing();
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.seller = object.seller ?? "";
    message.success = object.success ?? false;
    message.error = object.error ?? "";
    return message;
  }

};

function createBaseEventCreateRoyaltyConfig(): EventCreateRoyaltyConfig {
  return {
    classId: ""
  };
}

export const EventCreateRoyaltyConfig = {
  encode(message: EventCreateRoyaltyConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateRoyaltyConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateRoyaltyConfig();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventCreateRoyaltyConfig {
    return {
      classId: isSet(object.classId) ? String(object.classId) : ""
    };
  },

  toJSON(message: EventCreateRoyaltyConfig): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },

  fromPartial(object: DeepPartial<EventCreateRoyaltyConfig>): EventCreateRoyaltyConfig {
    const message = createBaseEventCreateRoyaltyConfig();
    message.classId = object.classId ?? "";
    return message;
  }

};

function createBaseEventUpdateRoyaltyConfig(): EventUpdateRoyaltyConfig {
  return {
    classId: ""
  };
}

export const EventUpdateRoyaltyConfig = {
  encode(message: EventUpdateRoyaltyConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateRoyaltyConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateRoyaltyConfig();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventUpdateRoyaltyConfig {
    return {
      classId: isSet(object.classId) ? String(object.classId) : ""
    };
  },

  toJSON(message: EventUpdateRoyaltyConfig): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },

  fromPartial(object: DeepPartial<EventUpdateRoyaltyConfig>): EventUpdateRoyaltyConfig {
    const message = createBaseEventUpdateRoyaltyConfig();
    message.classId = object.classId ?? "";
    return message;
  }

};

function createBaseEventDeleteRoyaltyConfig(): EventDeleteRoyaltyConfig {
  return {
    classId: ""
  };
}

export const EventDeleteRoyaltyConfig = {
  encode(message: EventDeleteRoyaltyConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventDeleteRoyaltyConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDeleteRoyaltyConfig();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventDeleteRoyaltyConfig {
    return {
      classId: isSet(object.classId) ? String(object.classId) : ""
    };
  },

  toJSON(message: EventDeleteRoyaltyConfig): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },

  fromPartial(object: DeepPartial<EventDeleteRoyaltyConfig>): EventDeleteRoyaltyConfig {
    const message = createBaseEventDeleteRoyaltyConfig();
    message.classId = object.classId ?? "";
    return message;
  }

};