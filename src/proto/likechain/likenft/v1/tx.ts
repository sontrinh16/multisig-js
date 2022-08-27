import { ClassParentInput, ClassInput } from "./class_input";
import { NFTInput } from "./nft_input";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { RoyaltyConfigInput, RoyaltyConfig } from "./royalty_config";
import { Class, NFT } from "../../../cosmos/nft/v1beta1/nft";
import { BlindBoxContent } from "./blind_box_content";
import { Offer } from "./offer";
import { Listing } from "./listing";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, toTimestamp, Long, fromTimestamp, fromJsonTimestamp } from "@osmonauts/helpers";
export interface MsgNewClass {
  creator: string;
  parent: ClassParentInput;
  input: ClassInput;
}
export interface MsgNewClassResponse {
  class: Class;
}
export interface MsgUpdateClass {
  creator: string;
  classId: string;
  input: ClassInput;
}
export interface MsgUpdateClassResponse {
  class: Class;
}
export interface MsgMintNFT {
  creator: string;
  classId: string;
  id: string;
  input?: NFTInput;
}
export interface MsgMintNFTResponse {
  nft: NFT;
}
export interface MsgBurnNFT {
  creator: string;
  classId: string;
  nftId: string;
}
export interface MsgBurnNFTResponse {}
export interface MsgCreateBlindBoxContent {
  creator: string;
  classId: string;
  id: string;
  input: NFTInput;
}
export interface MsgCreateBlindBoxContentResponse {
  blindBoxContent: BlindBoxContent;
}
export interface MsgUpdateBlindBoxContent {
  creator: string;
  classId: string;
  id: string;
  input: NFTInput;
}
export interface MsgUpdateBlindBoxContentResponse {
  blindBoxContent: BlindBoxContent;
}
export interface MsgDeleteBlindBoxContent {
  creator: string;
  classId: string;
  id: string;
}
export interface MsgDeleteBlindBoxContentResponse {}
export interface MsgCreateOffer {
  creator: string;
  classId: string;
  nftId: string;
  price: Long;
  expiration: Date;
}
export interface MsgCreateOfferResponse {
  offer: Offer;
}
export interface MsgUpdateOffer {
  creator: string;
  classId: string;
  nftId: string;
  price: Long;
  expiration: Date;
}
export interface MsgUpdateOfferResponse {
  offer: Offer;
}
export interface MsgDeleteOffer {
  creator: string;
  classId: string;
  nftId: string;
}
export interface MsgDeleteOfferResponse {}
export interface MsgCreateListing {
  creator: string;
  classId: string;
  nftId: string;
  price: Long;
  expiration: Date;
}
export interface MsgCreateListingResponse {
  listing: Listing;
}
export interface MsgUpdateListing {
  creator: string;
  classId: string;
  nftId: string;
  price: Long;
  expiration: Date;
}
export interface MsgUpdateListingResponse {
  listing: Listing;
}
export interface MsgDeleteListing {
  creator: string;
  classId: string;
  nftId: string;
}
export interface MsgDeleteListingResponse {}
export interface MsgSellNFT {
  creator: string;
  classId: string;
  nftId: string;
  buyer: string;
  price: Long;
}
export interface MsgSellNFTResponse {}
export interface MsgBuyNFT {
  creator: string;
  classId: string;
  nftId: string;
  seller: string;
  price: Long;
}
export interface MsgBuyNFTResponse {}
export interface MsgCreateRoyaltyConfig {
  creator: string;
  classId: string;
  royaltyConfig: RoyaltyConfigInput;
}
export interface MsgCreateRoyaltyConfigResponse {
  royaltyConfig: RoyaltyConfig;
}
export interface MsgUpdateRoyaltyConfig {
  creator: string;
  classId: string;
  royaltyConfig: RoyaltyConfigInput;
}
export interface MsgUpdateRoyaltyConfigResponse {
  royaltyConfig: RoyaltyConfig;
}
export interface MsgDeleteRoyaltyConfig {
  creator: string;
  classId: string;
}
export interface MsgDeleteRoyaltyConfigResponse {}

function createBaseMsgNewClass(): MsgNewClass {
  return {
    creator: "",
    parent: undefined,
    input: undefined
  };
}

export const MsgNewClass = {
  encode(message: MsgNewClass, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.parent !== undefined) {
      ClassParentInput.encode(message.parent, writer.uint32(18).fork()).ldelim();
    }

    if (message.input !== undefined) {
      ClassInput.encode(message.input, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgNewClass {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgNewClass();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.parent = ClassParentInput.decode(reader, reader.uint32());
          break;

        case 3:
          message.input = ClassInput.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgNewClass {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      parent: isSet(object.parent) ? ClassParentInput.fromJSON(object.parent) : undefined,
      input: isSet(object.input) ? ClassInput.fromJSON(object.input) : undefined
    };
  },

  toJSON(message: MsgNewClass): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.parent !== undefined && (obj.parent = message.parent ? ClassParentInput.toJSON(message.parent) : undefined);
    message.input !== undefined && (obj.input = message.input ? ClassInput.toJSON(message.input) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgNewClass>): MsgNewClass {
    const message = createBaseMsgNewClass();
    message.creator = object.creator ?? "";
    message.parent = object.parent !== undefined && object.parent !== null ? ClassParentInput.fromPartial(object.parent) : undefined;
    message.input = object.input !== undefined && object.input !== null ? ClassInput.fromPartial(object.input) : undefined;
    return message;
  }

};

function createBaseMsgNewClassResponse(): MsgNewClassResponse {
  return {
    class: undefined
  };
}

export const MsgNewClassResponse = {
  encode(message: MsgNewClassResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.class !== undefined) {
      Class.encode(message.class, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgNewClassResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgNewClassResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.class = Class.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgNewClassResponse {
    return {
      class: isSet(object.class) ? Class.fromJSON(object.class) : undefined
    };
  },

  toJSON(message: MsgNewClassResponse): unknown {
    const obj: any = {};
    message.class !== undefined && (obj.class = message.class ? Class.toJSON(message.class) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgNewClassResponse>): MsgNewClassResponse {
    const message = createBaseMsgNewClassResponse();
    message.class = object.class !== undefined && object.class !== null ? Class.fromPartial(object.class) : undefined;
    return message;
  }

};

function createBaseMsgUpdateClass(): MsgUpdateClass {
  return {
    creator: "",
    classId: "",
    input: undefined
  };
}

export const MsgUpdateClass = {
  encode(message: MsgUpdateClass, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }

    if (message.input !== undefined) {
      ClassInput.encode(message.input, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateClass {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateClass();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.classId = reader.string();
          break;

        case 3:
          message.input = ClassInput.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUpdateClass {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
      input: isSet(object.input) ? ClassInput.fromJSON(object.input) : undefined
    };
  },

  toJSON(message: MsgUpdateClass): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.classId !== undefined && (obj.classId = message.classId);
    message.input !== undefined && (obj.input = message.input ? ClassInput.toJSON(message.input) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateClass>): MsgUpdateClass {
    const message = createBaseMsgUpdateClass();
    message.creator = object.creator ?? "";
    message.classId = object.classId ?? "";
    message.input = object.input !== undefined && object.input !== null ? ClassInput.fromPartial(object.input) : undefined;
    return message;
  }

};

function createBaseMsgUpdateClassResponse(): MsgUpdateClassResponse {
  return {
    class: undefined
  };
}

export const MsgUpdateClassResponse = {
  encode(message: MsgUpdateClassResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.class !== undefined) {
      Class.encode(message.class, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateClassResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateClassResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.class = Class.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUpdateClassResponse {
    return {
      class: isSet(object.class) ? Class.fromJSON(object.class) : undefined
    };
  },

  toJSON(message: MsgUpdateClassResponse): unknown {
    const obj: any = {};
    message.class !== undefined && (obj.class = message.class ? Class.toJSON(message.class) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateClassResponse>): MsgUpdateClassResponse {
    const message = createBaseMsgUpdateClassResponse();
    message.class = object.class !== undefined && object.class !== null ? Class.fromPartial(object.class) : undefined;
    return message;
  }

};

function createBaseMsgMintNFT(): MsgMintNFT {
  return {
    creator: "",
    classId: "",
    id: "",
    input: undefined
  };
}

export const MsgMintNFT = {
  encode(message: MsgMintNFT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }

    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }

    if (message.input !== undefined) {
      NFTInput.encode(message.input, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintNFT();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.classId = reader.string();
          break;

        case 3:
          message.id = reader.string();
          break;

        case 4:
          message.input = NFTInput.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgMintNFT {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
      id: isSet(object.id) ? String(object.id) : "",
      input: isSet(object.input) ? NFTInput.fromJSON(object.input) : undefined
    };
  },

  toJSON(message: MsgMintNFT): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.classId !== undefined && (obj.classId = message.classId);
    message.id !== undefined && (obj.id = message.id);
    message.input !== undefined && (obj.input = message.input ? NFTInput.toJSON(message.input) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgMintNFT>): MsgMintNFT {
    const message = createBaseMsgMintNFT();
    message.creator = object.creator ?? "";
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    message.input = object.input !== undefined && object.input !== null ? NFTInput.fromPartial(object.input) : undefined;
    return message;
  }

};

function createBaseMsgMintNFTResponse(): MsgMintNFTResponse {
  return {
    nft: undefined
  };
}

export const MsgMintNFTResponse = {
  encode(message: MsgMintNFTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nft !== undefined) {
      NFT.encode(message.nft, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintNFTResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.nft = NFT.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgMintNFTResponse {
    return {
      nft: isSet(object.nft) ? NFT.fromJSON(object.nft) : undefined
    };
  },

  toJSON(message: MsgMintNFTResponse): unknown {
    const obj: any = {};
    message.nft !== undefined && (obj.nft = message.nft ? NFT.toJSON(message.nft) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgMintNFTResponse>): MsgMintNFTResponse {
    const message = createBaseMsgMintNFTResponse();
    message.nft = object.nft !== undefined && object.nft !== null ? NFT.fromPartial(object.nft) : undefined;
    return message;
  }

};

function createBaseMsgBurnNFT(): MsgBurnNFT {
  return {
    creator: "",
    classId: "",
    nftId: ""
  };
}

export const MsgBurnNFT = {
  encode(message: MsgBurnNFT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }

    if (message.nftId !== "") {
      writer.uint32(26).string(message.nftId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnNFT();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.classId = reader.string();
          break;

        case 3:
          message.nftId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgBurnNFT {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : ""
    };
  },

  toJSON(message: MsgBurnNFT): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgBurnNFT>): MsgBurnNFT {
    const message = createBaseMsgBurnNFT();
    message.creator = object.creator ?? "";
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    return message;
  }

};

function createBaseMsgBurnNFTResponse(): MsgBurnNFTResponse {
  return {};
}

export const MsgBurnNFTResponse = {
  encode(_: MsgBurnNFTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnNFTResponse();

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

  fromJSON(_: any): MsgBurnNFTResponse {
    return {};
  },

  toJSON(_: MsgBurnNFTResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgBurnNFTResponse>): MsgBurnNFTResponse {
    const message = createBaseMsgBurnNFTResponse();
    return message;
  }

};

function createBaseMsgCreateBlindBoxContent(): MsgCreateBlindBoxContent {
  return {
    creator: "",
    classId: "",
    id: "",
    input: undefined
  };
}

export const MsgCreateBlindBoxContent = {
  encode(message: MsgCreateBlindBoxContent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }

    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }

    if (message.input !== undefined) {
      NFTInput.encode(message.input, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBlindBoxContent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBlindBoxContent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.classId = reader.string();
          break;

        case 3:
          message.id = reader.string();
          break;

        case 4:
          message.input = NFTInput.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateBlindBoxContent {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
      id: isSet(object.id) ? String(object.id) : "",
      input: isSet(object.input) ? NFTInput.fromJSON(object.input) : undefined
    };
  },

  toJSON(message: MsgCreateBlindBoxContent): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.classId !== undefined && (obj.classId = message.classId);
    message.id !== undefined && (obj.id = message.id);
    message.input !== undefined && (obj.input = message.input ? NFTInput.toJSON(message.input) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateBlindBoxContent>): MsgCreateBlindBoxContent {
    const message = createBaseMsgCreateBlindBoxContent();
    message.creator = object.creator ?? "";
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    message.input = object.input !== undefined && object.input !== null ? NFTInput.fromPartial(object.input) : undefined;
    return message;
  }

};

function createBaseMsgCreateBlindBoxContentResponse(): MsgCreateBlindBoxContentResponse {
  return {
    blindBoxContent: undefined
  };
}

export const MsgCreateBlindBoxContentResponse = {
  encode(message: MsgCreateBlindBoxContentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.blindBoxContent !== undefined) {
      BlindBoxContent.encode(message.blindBoxContent, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBlindBoxContentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBlindBoxContentResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.blindBoxContent = BlindBoxContent.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateBlindBoxContentResponse {
    return {
      blindBoxContent: isSet(object.blindBoxContent) ? BlindBoxContent.fromJSON(object.blindBoxContent) : undefined
    };
  },

  toJSON(message: MsgCreateBlindBoxContentResponse): unknown {
    const obj: any = {};
    message.blindBoxContent !== undefined && (obj.blindBoxContent = message.blindBoxContent ? BlindBoxContent.toJSON(message.blindBoxContent) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateBlindBoxContentResponse>): MsgCreateBlindBoxContentResponse {
    const message = createBaseMsgCreateBlindBoxContentResponse();
    message.blindBoxContent = object.blindBoxContent !== undefined && object.blindBoxContent !== null ? BlindBoxContent.fromPartial(object.blindBoxContent) : undefined;
    return message;
  }

};

function createBaseMsgUpdateBlindBoxContent(): MsgUpdateBlindBoxContent {
  return {
    creator: "",
    classId: "",
    id: "",
    input: undefined
  };
}

export const MsgUpdateBlindBoxContent = {
  encode(message: MsgUpdateBlindBoxContent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }

    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }

    if (message.input !== undefined) {
      NFTInput.encode(message.input, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateBlindBoxContent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateBlindBoxContent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.classId = reader.string();
          break;

        case 3:
          message.id = reader.string();
          break;

        case 4:
          message.input = NFTInput.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUpdateBlindBoxContent {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
      id: isSet(object.id) ? String(object.id) : "",
      input: isSet(object.input) ? NFTInput.fromJSON(object.input) : undefined
    };
  },

  toJSON(message: MsgUpdateBlindBoxContent): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.classId !== undefined && (obj.classId = message.classId);
    message.id !== undefined && (obj.id = message.id);
    message.input !== undefined && (obj.input = message.input ? NFTInput.toJSON(message.input) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateBlindBoxContent>): MsgUpdateBlindBoxContent {
    const message = createBaseMsgUpdateBlindBoxContent();
    message.creator = object.creator ?? "";
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    message.input = object.input !== undefined && object.input !== null ? NFTInput.fromPartial(object.input) : undefined;
    return message;
  }

};

function createBaseMsgUpdateBlindBoxContentResponse(): MsgUpdateBlindBoxContentResponse {
  return {
    blindBoxContent: undefined
  };
}

export const MsgUpdateBlindBoxContentResponse = {
  encode(message: MsgUpdateBlindBoxContentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.blindBoxContent !== undefined) {
      BlindBoxContent.encode(message.blindBoxContent, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateBlindBoxContentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateBlindBoxContentResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.blindBoxContent = BlindBoxContent.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUpdateBlindBoxContentResponse {
    return {
      blindBoxContent: isSet(object.blindBoxContent) ? BlindBoxContent.fromJSON(object.blindBoxContent) : undefined
    };
  },

  toJSON(message: MsgUpdateBlindBoxContentResponse): unknown {
    const obj: any = {};
    message.blindBoxContent !== undefined && (obj.blindBoxContent = message.blindBoxContent ? BlindBoxContent.toJSON(message.blindBoxContent) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateBlindBoxContentResponse>): MsgUpdateBlindBoxContentResponse {
    const message = createBaseMsgUpdateBlindBoxContentResponse();
    message.blindBoxContent = object.blindBoxContent !== undefined && object.blindBoxContent !== null ? BlindBoxContent.fromPartial(object.blindBoxContent) : undefined;
    return message;
  }

};

function createBaseMsgDeleteBlindBoxContent(): MsgDeleteBlindBoxContent {
  return {
    creator: "",
    classId: "",
    id: ""
  };
}

export const MsgDeleteBlindBoxContent = {
  encode(message: MsgDeleteBlindBoxContent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }

    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteBlindBoxContent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteBlindBoxContent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.classId = reader.string();
          break;

        case 3:
          message.id = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgDeleteBlindBoxContent {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
      id: isSet(object.id) ? String(object.id) : ""
    };
  },

  toJSON(message: MsgDeleteBlindBoxContent): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.classId !== undefined && (obj.classId = message.classId);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteBlindBoxContent>): MsgDeleteBlindBoxContent {
    const message = createBaseMsgDeleteBlindBoxContent();
    message.creator = object.creator ?? "";
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    return message;
  }

};

function createBaseMsgDeleteBlindBoxContentResponse(): MsgDeleteBlindBoxContentResponse {
  return {};
}

export const MsgDeleteBlindBoxContentResponse = {
  encode(_: MsgDeleteBlindBoxContentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteBlindBoxContentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteBlindBoxContentResponse();

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

  fromJSON(_: any): MsgDeleteBlindBoxContentResponse {
    return {};
  },

  toJSON(_: MsgDeleteBlindBoxContentResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeleteBlindBoxContentResponse>): MsgDeleteBlindBoxContentResponse {
    const message = createBaseMsgDeleteBlindBoxContentResponse();
    return message;
  }

};

function createBaseMsgCreateOffer(): MsgCreateOffer {
  return {
    creator: "",
    classId: "",
    nftId: "",
    price: Long.UZERO,
    expiration: undefined
  };
}

export const MsgCreateOffer = {
  encode(message: MsgCreateOffer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }

    if (message.nftId !== "") {
      writer.uint32(26).string(message.nftId);
    }

    if (!message.price.isZero()) {
      writer.uint32(32).uint64(message.price);
    }

    if (message.expiration !== undefined) {
      Timestamp.encode(toTimestamp(message.expiration), writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateOffer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateOffer();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.classId = reader.string();
          break;

        case 3:
          message.nftId = reader.string();
          break;

        case 4:
          message.price = (reader.uint64() as Long);
          break;

        case 5:
          message.expiration = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateOffer {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      price: isSet(object.price) ? Long.fromString(object.price) : Long.UZERO,
      expiration: isSet(object.expiration) ? fromJsonTimestamp(object.expiration) : undefined
    };
  },

  toJSON(message: MsgCreateOffer): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.price !== undefined && (obj.price = (message.price || Long.UZERO).toString());
    message.expiration !== undefined && (obj.expiration = message.expiration.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateOffer>): MsgCreateOffer {
    const message = createBaseMsgCreateOffer();
    message.creator = object.creator ?? "";
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.price = object.price !== undefined && object.price !== null ? Long.fromValue(object.price) : Long.UZERO;
    message.expiration = object.expiration ?? undefined;
    return message;
  }

};

function createBaseMsgCreateOfferResponse(): MsgCreateOfferResponse {
  return {
    offer: undefined
  };
}

export const MsgCreateOfferResponse = {
  encode(message: MsgCreateOfferResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.offer !== undefined) {
      Offer.encode(message.offer, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateOfferResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateOfferResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.offer = Offer.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateOfferResponse {
    return {
      offer: isSet(object.offer) ? Offer.fromJSON(object.offer) : undefined
    };
  },

  toJSON(message: MsgCreateOfferResponse): unknown {
    const obj: any = {};
    message.offer !== undefined && (obj.offer = message.offer ? Offer.toJSON(message.offer) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateOfferResponse>): MsgCreateOfferResponse {
    const message = createBaseMsgCreateOfferResponse();
    message.offer = object.offer !== undefined && object.offer !== null ? Offer.fromPartial(object.offer) : undefined;
    return message;
  }

};

function createBaseMsgUpdateOffer(): MsgUpdateOffer {
  return {
    creator: "",
    classId: "",
    nftId: "",
    price: Long.UZERO,
    expiration: undefined
  };
}

export const MsgUpdateOffer = {
  encode(message: MsgUpdateOffer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }

    if (message.nftId !== "") {
      writer.uint32(26).string(message.nftId);
    }

    if (!message.price.isZero()) {
      writer.uint32(32).uint64(message.price);
    }

    if (message.expiration !== undefined) {
      Timestamp.encode(toTimestamp(message.expiration), writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateOffer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateOffer();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.classId = reader.string();
          break;

        case 3:
          message.nftId = reader.string();
          break;

        case 4:
          message.price = (reader.uint64() as Long);
          break;

        case 5:
          message.expiration = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUpdateOffer {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      price: isSet(object.price) ? Long.fromString(object.price) : Long.UZERO,
      expiration: isSet(object.expiration) ? fromJsonTimestamp(object.expiration) : undefined
    };
  },

  toJSON(message: MsgUpdateOffer): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.price !== undefined && (obj.price = (message.price || Long.UZERO).toString());
    message.expiration !== undefined && (obj.expiration = message.expiration.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateOffer>): MsgUpdateOffer {
    const message = createBaseMsgUpdateOffer();
    message.creator = object.creator ?? "";
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.price = object.price !== undefined && object.price !== null ? Long.fromValue(object.price) : Long.UZERO;
    message.expiration = object.expiration ?? undefined;
    return message;
  }

};

function createBaseMsgUpdateOfferResponse(): MsgUpdateOfferResponse {
  return {
    offer: undefined
  };
}

export const MsgUpdateOfferResponse = {
  encode(message: MsgUpdateOfferResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.offer !== undefined) {
      Offer.encode(message.offer, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateOfferResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateOfferResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.offer = Offer.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUpdateOfferResponse {
    return {
      offer: isSet(object.offer) ? Offer.fromJSON(object.offer) : undefined
    };
  },

  toJSON(message: MsgUpdateOfferResponse): unknown {
    const obj: any = {};
    message.offer !== undefined && (obj.offer = message.offer ? Offer.toJSON(message.offer) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateOfferResponse>): MsgUpdateOfferResponse {
    const message = createBaseMsgUpdateOfferResponse();
    message.offer = object.offer !== undefined && object.offer !== null ? Offer.fromPartial(object.offer) : undefined;
    return message;
  }

};

function createBaseMsgDeleteOffer(): MsgDeleteOffer {
  return {
    creator: "",
    classId: "",
    nftId: ""
  };
}

export const MsgDeleteOffer = {
  encode(message: MsgDeleteOffer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }

    if (message.nftId !== "") {
      writer.uint32(26).string(message.nftId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteOffer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteOffer();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.classId = reader.string();
          break;

        case 3:
          message.nftId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgDeleteOffer {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : ""
    };
  },

  toJSON(message: MsgDeleteOffer): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteOffer>): MsgDeleteOffer {
    const message = createBaseMsgDeleteOffer();
    message.creator = object.creator ?? "";
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    return message;
  }

};

function createBaseMsgDeleteOfferResponse(): MsgDeleteOfferResponse {
  return {};
}

export const MsgDeleteOfferResponse = {
  encode(_: MsgDeleteOfferResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteOfferResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteOfferResponse();

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

  fromJSON(_: any): MsgDeleteOfferResponse {
    return {};
  },

  toJSON(_: MsgDeleteOfferResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeleteOfferResponse>): MsgDeleteOfferResponse {
    const message = createBaseMsgDeleteOfferResponse();
    return message;
  }

};

function createBaseMsgCreateListing(): MsgCreateListing {
  return {
    creator: "",
    classId: "",
    nftId: "",
    price: Long.UZERO,
    expiration: undefined
  };
}

export const MsgCreateListing = {
  encode(message: MsgCreateListing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }

    if (message.nftId !== "") {
      writer.uint32(26).string(message.nftId);
    }

    if (!message.price.isZero()) {
      writer.uint32(32).uint64(message.price);
    }

    if (message.expiration !== undefined) {
      Timestamp.encode(toTimestamp(message.expiration), writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateListing {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateListing();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.classId = reader.string();
          break;

        case 3:
          message.nftId = reader.string();
          break;

        case 4:
          message.price = (reader.uint64() as Long);
          break;

        case 5:
          message.expiration = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateListing {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      price: isSet(object.price) ? Long.fromString(object.price) : Long.UZERO,
      expiration: isSet(object.expiration) ? fromJsonTimestamp(object.expiration) : undefined
    };
  },

  toJSON(message: MsgCreateListing): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.price !== undefined && (obj.price = (message.price || Long.UZERO).toString());
    message.expiration !== undefined && (obj.expiration = message.expiration.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateListing>): MsgCreateListing {
    const message = createBaseMsgCreateListing();
    message.creator = object.creator ?? "";
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.price = object.price !== undefined && object.price !== null ? Long.fromValue(object.price) : Long.UZERO;
    message.expiration = object.expiration ?? undefined;
    return message;
  }

};

function createBaseMsgCreateListingResponse(): MsgCreateListingResponse {
  return {
    listing: undefined
  };
}

export const MsgCreateListingResponse = {
  encode(message: MsgCreateListingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.listing !== undefined) {
      Listing.encode(message.listing, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateListingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateListingResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.listing = Listing.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateListingResponse {
    return {
      listing: isSet(object.listing) ? Listing.fromJSON(object.listing) : undefined
    };
  },

  toJSON(message: MsgCreateListingResponse): unknown {
    const obj: any = {};
    message.listing !== undefined && (obj.listing = message.listing ? Listing.toJSON(message.listing) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateListingResponse>): MsgCreateListingResponse {
    const message = createBaseMsgCreateListingResponse();
    message.listing = object.listing !== undefined && object.listing !== null ? Listing.fromPartial(object.listing) : undefined;
    return message;
  }

};

function createBaseMsgUpdateListing(): MsgUpdateListing {
  return {
    creator: "",
    classId: "",
    nftId: "",
    price: Long.UZERO,
    expiration: undefined
  };
}

export const MsgUpdateListing = {
  encode(message: MsgUpdateListing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }

    if (message.nftId !== "") {
      writer.uint32(26).string(message.nftId);
    }

    if (!message.price.isZero()) {
      writer.uint32(32).uint64(message.price);
    }

    if (message.expiration !== undefined) {
      Timestamp.encode(toTimestamp(message.expiration), writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateListing {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateListing();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.classId = reader.string();
          break;

        case 3:
          message.nftId = reader.string();
          break;

        case 4:
          message.price = (reader.uint64() as Long);
          break;

        case 5:
          message.expiration = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUpdateListing {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      price: isSet(object.price) ? Long.fromString(object.price) : Long.UZERO,
      expiration: isSet(object.expiration) ? fromJsonTimestamp(object.expiration) : undefined
    };
  },

  toJSON(message: MsgUpdateListing): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.price !== undefined && (obj.price = (message.price || Long.UZERO).toString());
    message.expiration !== undefined && (obj.expiration = message.expiration.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateListing>): MsgUpdateListing {
    const message = createBaseMsgUpdateListing();
    message.creator = object.creator ?? "";
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.price = object.price !== undefined && object.price !== null ? Long.fromValue(object.price) : Long.UZERO;
    message.expiration = object.expiration ?? undefined;
    return message;
  }

};

function createBaseMsgUpdateListingResponse(): MsgUpdateListingResponse {
  return {
    listing: undefined
  };
}

export const MsgUpdateListingResponse = {
  encode(message: MsgUpdateListingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.listing !== undefined) {
      Listing.encode(message.listing, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateListingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateListingResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.listing = Listing.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUpdateListingResponse {
    return {
      listing: isSet(object.listing) ? Listing.fromJSON(object.listing) : undefined
    };
  },

  toJSON(message: MsgUpdateListingResponse): unknown {
    const obj: any = {};
    message.listing !== undefined && (obj.listing = message.listing ? Listing.toJSON(message.listing) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateListingResponse>): MsgUpdateListingResponse {
    const message = createBaseMsgUpdateListingResponse();
    message.listing = object.listing !== undefined && object.listing !== null ? Listing.fromPartial(object.listing) : undefined;
    return message;
  }

};

function createBaseMsgDeleteListing(): MsgDeleteListing {
  return {
    creator: "",
    classId: "",
    nftId: ""
  };
}

export const MsgDeleteListing = {
  encode(message: MsgDeleteListing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }

    if (message.nftId !== "") {
      writer.uint32(26).string(message.nftId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteListing {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteListing();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.classId = reader.string();
          break;

        case 3:
          message.nftId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgDeleteListing {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : ""
    };
  },

  toJSON(message: MsgDeleteListing): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteListing>): MsgDeleteListing {
    const message = createBaseMsgDeleteListing();
    message.creator = object.creator ?? "";
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    return message;
  }

};

function createBaseMsgDeleteListingResponse(): MsgDeleteListingResponse {
  return {};
}

export const MsgDeleteListingResponse = {
  encode(_: MsgDeleteListingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteListingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteListingResponse();

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

  fromJSON(_: any): MsgDeleteListingResponse {
    return {};
  },

  toJSON(_: MsgDeleteListingResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeleteListingResponse>): MsgDeleteListingResponse {
    const message = createBaseMsgDeleteListingResponse();
    return message;
  }

};

function createBaseMsgSellNFT(): MsgSellNFT {
  return {
    creator: "",
    classId: "",
    nftId: "",
    buyer: "",
    price: Long.UZERO
  };
}

export const MsgSellNFT = {
  encode(message: MsgSellNFT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }

    if (message.nftId !== "") {
      writer.uint32(26).string(message.nftId);
    }

    if (message.buyer !== "") {
      writer.uint32(34).string(message.buyer);
    }

    if (!message.price.isZero()) {
      writer.uint32(40).uint64(message.price);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSellNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSellNFT();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.classId = reader.string();
          break;

        case 3:
          message.nftId = reader.string();
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

  fromJSON(object: any): MsgSellNFT {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      buyer: isSet(object.buyer) ? String(object.buyer) : "",
      price: isSet(object.price) ? Long.fromString(object.price) : Long.UZERO
    };
  },

  toJSON(message: MsgSellNFT): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.buyer !== undefined && (obj.buyer = message.buyer);
    message.price !== undefined && (obj.price = (message.price || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSellNFT>): MsgSellNFT {
    const message = createBaseMsgSellNFT();
    message.creator = object.creator ?? "";
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.buyer = object.buyer ?? "";
    message.price = object.price !== undefined && object.price !== null ? Long.fromValue(object.price) : Long.UZERO;
    return message;
  }

};

function createBaseMsgSellNFTResponse(): MsgSellNFTResponse {
  return {};
}

export const MsgSellNFTResponse = {
  encode(_: MsgSellNFTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSellNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSellNFTResponse();

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

  fromJSON(_: any): MsgSellNFTResponse {
    return {};
  },

  toJSON(_: MsgSellNFTResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgSellNFTResponse>): MsgSellNFTResponse {
    const message = createBaseMsgSellNFTResponse();
    return message;
  }

};

function createBaseMsgBuyNFT(): MsgBuyNFT {
  return {
    creator: "",
    classId: "",
    nftId: "",
    seller: "",
    price: Long.UZERO
  };
}

export const MsgBuyNFT = {
  encode(message: MsgBuyNFT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }

    if (message.nftId !== "") {
      writer.uint32(26).string(message.nftId);
    }

    if (message.seller !== "") {
      writer.uint32(34).string(message.seller);
    }

    if (!message.price.isZero()) {
      writer.uint32(40).uint64(message.price);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuyNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBuyNFT();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.classId = reader.string();
          break;

        case 3:
          message.nftId = reader.string();
          break;

        case 4:
          message.seller = reader.string();
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

  fromJSON(object: any): MsgBuyNFT {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      seller: isSet(object.seller) ? String(object.seller) : "",
      price: isSet(object.price) ? Long.fromString(object.price) : Long.UZERO
    };
  },

  toJSON(message: MsgBuyNFT): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.seller !== undefined && (obj.seller = message.seller);
    message.price !== undefined && (obj.price = (message.price || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgBuyNFT>): MsgBuyNFT {
    const message = createBaseMsgBuyNFT();
    message.creator = object.creator ?? "";
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.seller = object.seller ?? "";
    message.price = object.price !== undefined && object.price !== null ? Long.fromValue(object.price) : Long.UZERO;
    return message;
  }

};

function createBaseMsgBuyNFTResponse(): MsgBuyNFTResponse {
  return {};
}

export const MsgBuyNFTResponse = {
  encode(_: MsgBuyNFTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuyNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBuyNFTResponse();

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

  fromJSON(_: any): MsgBuyNFTResponse {
    return {};
  },

  toJSON(_: MsgBuyNFTResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgBuyNFTResponse>): MsgBuyNFTResponse {
    const message = createBaseMsgBuyNFTResponse();
    return message;
  }

};

function createBaseMsgCreateRoyaltyConfig(): MsgCreateRoyaltyConfig {
  return {
    creator: "",
    classId: "",
    royaltyConfig: undefined
  };
}

export const MsgCreateRoyaltyConfig = {
  encode(message: MsgCreateRoyaltyConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }

    if (message.royaltyConfig !== undefined) {
      RoyaltyConfigInput.encode(message.royaltyConfig, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateRoyaltyConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateRoyaltyConfig();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.classId = reader.string();
          break;

        case 3:
          message.royaltyConfig = RoyaltyConfigInput.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateRoyaltyConfig {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
      royaltyConfig: isSet(object.royaltyConfig) ? RoyaltyConfigInput.fromJSON(object.royaltyConfig) : undefined
    };
  },

  toJSON(message: MsgCreateRoyaltyConfig): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.classId !== undefined && (obj.classId = message.classId);
    message.royaltyConfig !== undefined && (obj.royaltyConfig = message.royaltyConfig ? RoyaltyConfigInput.toJSON(message.royaltyConfig) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateRoyaltyConfig>): MsgCreateRoyaltyConfig {
    const message = createBaseMsgCreateRoyaltyConfig();
    message.creator = object.creator ?? "";
    message.classId = object.classId ?? "";
    message.royaltyConfig = object.royaltyConfig !== undefined && object.royaltyConfig !== null ? RoyaltyConfigInput.fromPartial(object.royaltyConfig) : undefined;
    return message;
  }

};

function createBaseMsgCreateRoyaltyConfigResponse(): MsgCreateRoyaltyConfigResponse {
  return {
    royaltyConfig: undefined
  };
}

export const MsgCreateRoyaltyConfigResponse = {
  encode(message: MsgCreateRoyaltyConfigResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.royaltyConfig !== undefined) {
      RoyaltyConfig.encode(message.royaltyConfig, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateRoyaltyConfigResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateRoyaltyConfigResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.royaltyConfig = RoyaltyConfig.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateRoyaltyConfigResponse {
    return {
      royaltyConfig: isSet(object.royaltyConfig) ? RoyaltyConfig.fromJSON(object.royaltyConfig) : undefined
    };
  },

  toJSON(message: MsgCreateRoyaltyConfigResponse): unknown {
    const obj: any = {};
    message.royaltyConfig !== undefined && (obj.royaltyConfig = message.royaltyConfig ? RoyaltyConfig.toJSON(message.royaltyConfig) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateRoyaltyConfigResponse>): MsgCreateRoyaltyConfigResponse {
    const message = createBaseMsgCreateRoyaltyConfigResponse();
    message.royaltyConfig = object.royaltyConfig !== undefined && object.royaltyConfig !== null ? RoyaltyConfig.fromPartial(object.royaltyConfig) : undefined;
    return message;
  }

};

function createBaseMsgUpdateRoyaltyConfig(): MsgUpdateRoyaltyConfig {
  return {
    creator: "",
    classId: "",
    royaltyConfig: undefined
  };
}

export const MsgUpdateRoyaltyConfig = {
  encode(message: MsgUpdateRoyaltyConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }

    if (message.royaltyConfig !== undefined) {
      RoyaltyConfigInput.encode(message.royaltyConfig, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateRoyaltyConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateRoyaltyConfig();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.classId = reader.string();
          break;

        case 3:
          message.royaltyConfig = RoyaltyConfigInput.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUpdateRoyaltyConfig {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
      royaltyConfig: isSet(object.royaltyConfig) ? RoyaltyConfigInput.fromJSON(object.royaltyConfig) : undefined
    };
  },

  toJSON(message: MsgUpdateRoyaltyConfig): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.classId !== undefined && (obj.classId = message.classId);
    message.royaltyConfig !== undefined && (obj.royaltyConfig = message.royaltyConfig ? RoyaltyConfigInput.toJSON(message.royaltyConfig) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateRoyaltyConfig>): MsgUpdateRoyaltyConfig {
    const message = createBaseMsgUpdateRoyaltyConfig();
    message.creator = object.creator ?? "";
    message.classId = object.classId ?? "";
    message.royaltyConfig = object.royaltyConfig !== undefined && object.royaltyConfig !== null ? RoyaltyConfigInput.fromPartial(object.royaltyConfig) : undefined;
    return message;
  }

};

function createBaseMsgUpdateRoyaltyConfigResponse(): MsgUpdateRoyaltyConfigResponse {
  return {
    royaltyConfig: undefined
  };
}

export const MsgUpdateRoyaltyConfigResponse = {
  encode(message: MsgUpdateRoyaltyConfigResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.royaltyConfig !== undefined) {
      RoyaltyConfig.encode(message.royaltyConfig, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateRoyaltyConfigResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateRoyaltyConfigResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.royaltyConfig = RoyaltyConfig.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUpdateRoyaltyConfigResponse {
    return {
      royaltyConfig: isSet(object.royaltyConfig) ? RoyaltyConfig.fromJSON(object.royaltyConfig) : undefined
    };
  },

  toJSON(message: MsgUpdateRoyaltyConfigResponse): unknown {
    const obj: any = {};
    message.royaltyConfig !== undefined && (obj.royaltyConfig = message.royaltyConfig ? RoyaltyConfig.toJSON(message.royaltyConfig) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateRoyaltyConfigResponse>): MsgUpdateRoyaltyConfigResponse {
    const message = createBaseMsgUpdateRoyaltyConfigResponse();
    message.royaltyConfig = object.royaltyConfig !== undefined && object.royaltyConfig !== null ? RoyaltyConfig.fromPartial(object.royaltyConfig) : undefined;
    return message;
  }

};

function createBaseMsgDeleteRoyaltyConfig(): MsgDeleteRoyaltyConfig {
  return {
    creator: "",
    classId: ""
  };
}

export const MsgDeleteRoyaltyConfig = {
  encode(message: MsgDeleteRoyaltyConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteRoyaltyConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteRoyaltyConfig();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.classId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgDeleteRoyaltyConfig {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      classId: isSet(object.classId) ? String(object.classId) : ""
    };
  },

  toJSON(message: MsgDeleteRoyaltyConfig): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteRoyaltyConfig>): MsgDeleteRoyaltyConfig {
    const message = createBaseMsgDeleteRoyaltyConfig();
    message.creator = object.creator ?? "";
    message.classId = object.classId ?? "";
    return message;
  }

};

function createBaseMsgDeleteRoyaltyConfigResponse(): MsgDeleteRoyaltyConfigResponse {
  return {};
}

export const MsgDeleteRoyaltyConfigResponse = {
  encode(_: MsgDeleteRoyaltyConfigResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteRoyaltyConfigResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteRoyaltyConfigResponse();

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

  fromJSON(_: any): MsgDeleteRoyaltyConfigResponse {
    return {};
  },

  toJSON(_: MsgDeleteRoyaltyConfigResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeleteRoyaltyConfigResponse>): MsgDeleteRoyaltyConfigResponse {
    const message = createBaseMsgDeleteRoyaltyConfigResponse();
    return message;
  }

};