import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { Class } from "../../../cosmos/nft/v1beta1/nft";
import { ClassesByISCN } from "./classes_by_iscn";
import { QueryResponseRecord } from "../../iscn/query";
import { ClassesByAccount } from "./classes_by_account";
import { BlindBoxContent } from "./blind_box_content";
import { Offer } from "./offer";
import { Listing } from "./listing";
import { RoyaltyConfig, RoyaltyConfigByClass } from "./royalty_config";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, isSet, Long } from "@osmonauts/helpers";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryClassesByISCNRequest {
  iscnIdPrefix: string;
  pagination: PageRequest;
}
export interface QueryClassesByISCNResponse {
  iscnIdPrefix: string;
  classes: Class[];
  pagination: PageResponse;
}
export interface QueryClassesByISCNIndexRequest {
  pagination: PageRequest;
}
export interface QueryClassesByISCNIndexResponse {
  classesByIscns: ClassesByISCN[];
  pagination: PageResponse;
}
export interface QueryISCNByClassRequest {
  classId: string;
}
export interface QueryISCNByClassResponse {
  iscnIdPrefix: string;
  owner: string;
  latestVersion: Long;
  latestRecord: QueryResponseRecord;
}
export interface QueryClassesByAccountRequest {
  account: string;
  pagination: PageRequest;
}
export interface QueryClassesByAccountResponse {
  account: string;
  classes: Class[];
  pagination: PageResponse;
}
export interface QueryClassesByAccountIndexRequest {
  pagination: PageRequest;
}
export interface QueryClassesByAccountIndexResponse {
  classesByAccounts: ClassesByAccount[];
  pagination: PageResponse;
}
export interface QueryAccountByClassRequest {
  classId: string;
}
export interface QueryAccountByClassResponse {
  address: string;
}
export interface QueryBlindBoxContentRequest {
  classId: string;
  id: string;
}
export interface QueryBlindBoxContentResponse {
  blindBoxContent: BlindBoxContent;
}
export interface QueryBlindBoxContentIndexRequest {
  pagination: PageRequest;
}
export interface QueryBlindBoxContentIndexResponse {
  blindBoxContents: BlindBoxContent[];
  pagination: PageResponse;
}
export interface QueryBlindBoxContentsRequest {
  classId: string;
  pagination: PageRequest;
}
export interface QueryBlindBoxContentsResponse {
  blindBoxContents: BlindBoxContent[];
  pagination: PageResponse;
}
export interface QueryOfferRequest {
  classId: string;
  nftId: string;
  buyer: string;
}
export interface QueryOfferResponse {
  offer: Offer;
}
export interface QueryOfferIndexRequest {
  pagination: PageRequest;
}
export interface QueryOfferIndexResponse {
  offers: Offer[];
  pagination: PageResponse;
}
export interface QueryOffersByClassRequest {
  classId: string;
  pagination: PageRequest;
}
export interface QueryOffersByClassResponse {
  offers: Offer[];
  pagination: PageResponse;
}
export interface QueryOffersByNFTRequest {
  classId: string;
  nftId: string;
  pagination: PageRequest;
}
export interface QueryOffersByNFTResponse {
  offers: Offer[];
  pagination: PageResponse;
}
export interface QueryListingRequest {
  classId: string;
  nftId: string;
  seller: string;
}
export interface QueryListingResponse {
  listing: Listing;
}
export interface QueryListingIndexRequest {
  pagination: PageRequest;
}
export interface QueryListingIndexResponse {
  listings: Listing[];
  pagination: PageResponse;
}
export interface QueryListingsByClassRequest {
  classId: string;
  pagination: PageRequest;
}
export interface QueryListingsByClassResponse {
  listings: Listing[];
  pagination: PageResponse;
}
export interface QueryListingsByNFTRequest {
  classId: string;
  nftId: string;
  pagination: PageRequest;
}
export interface QueryListingsByNFTResponse {
  listings: Listing[];
  pagination: PageResponse;
}
export interface QueryRoyaltyConfigRequest {
  classId: string;
}
export interface QueryRoyaltyConfigResponse {
  royaltyConfig: RoyaltyConfig;
}
export interface QueryRoyaltyConfigIndexRequest {
  pagination: PageRequest;
}
export interface QueryRoyaltyConfigIndexResponse {
  royaltyConfigByClass: RoyaltyConfigByClass[];
  pagination: PageResponse;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();

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

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }

};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }

};

function createBaseQueryClassesByISCNRequest(): QueryClassesByISCNRequest {
  return {
    iscnIdPrefix: "",
    pagination: undefined
  };
}

export const QueryClassesByISCNRequest = {
  encode(message: QueryClassesByISCNRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.iscnIdPrefix !== "") {
      writer.uint32(10).string(message.iscnIdPrefix);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassesByISCNRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassesByISCNRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.iscnIdPrefix = reader.string();
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

  fromJSON(object: any): QueryClassesByISCNRequest {
    return {
      iscnIdPrefix: isSet(object.iscnIdPrefix) ? String(object.iscnIdPrefix) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryClassesByISCNRequest): unknown {
    const obj: any = {};
    message.iscnIdPrefix !== undefined && (obj.iscnIdPrefix = message.iscnIdPrefix);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryClassesByISCNRequest>): QueryClassesByISCNRequest {
    const message = createBaseQueryClassesByISCNRequest();
    message.iscnIdPrefix = object.iscnIdPrefix ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryClassesByISCNResponse(): QueryClassesByISCNResponse {
  return {
    iscnIdPrefix: "",
    classes: [],
    pagination: undefined
  };
}

export const QueryClassesByISCNResponse = {
  encode(message: QueryClassesByISCNResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.iscnIdPrefix !== "") {
      writer.uint32(10).string(message.iscnIdPrefix);
    }

    for (const v of message.classes) {
      Class.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassesByISCNResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassesByISCNResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.iscnIdPrefix = reader.string();
          break;

        case 2:
          message.classes.push(Class.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryClassesByISCNResponse {
    return {
      iscnIdPrefix: isSet(object.iscnIdPrefix) ? String(object.iscnIdPrefix) : "",
      classes: Array.isArray(object?.classes) ? object.classes.map((e: any) => Class.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryClassesByISCNResponse): unknown {
    const obj: any = {};
    message.iscnIdPrefix !== undefined && (obj.iscnIdPrefix = message.iscnIdPrefix);

    if (message.classes) {
      obj.classes = message.classes.map(e => e ? Class.toJSON(e) : undefined);
    } else {
      obj.classes = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryClassesByISCNResponse>): QueryClassesByISCNResponse {
    const message = createBaseQueryClassesByISCNResponse();
    message.iscnIdPrefix = object.iscnIdPrefix ?? "";
    message.classes = object.classes?.map(e => Class.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryClassesByISCNIndexRequest(): QueryClassesByISCNIndexRequest {
  return {
    pagination: undefined
  };
}

export const QueryClassesByISCNIndexRequest = {
  encode(message: QueryClassesByISCNIndexRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassesByISCNIndexRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassesByISCNIndexRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryClassesByISCNIndexRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryClassesByISCNIndexRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryClassesByISCNIndexRequest>): QueryClassesByISCNIndexRequest {
    const message = createBaseQueryClassesByISCNIndexRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryClassesByISCNIndexResponse(): QueryClassesByISCNIndexResponse {
  return {
    classesByIscns: [],
    pagination: undefined
  };
}

export const QueryClassesByISCNIndexResponse = {
  encode(message: QueryClassesByISCNIndexResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.classesByIscns) {
      ClassesByISCN.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassesByISCNIndexResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassesByISCNIndexResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.classesByIscns.push(ClassesByISCN.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryClassesByISCNIndexResponse {
    return {
      classesByIscns: Array.isArray(object?.classesByIscns) ? object.classesByIscns.map((e: any) => ClassesByISCN.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryClassesByISCNIndexResponse): unknown {
    const obj: any = {};

    if (message.classesByIscns) {
      obj.classesByIscns = message.classesByIscns.map(e => e ? ClassesByISCN.toJSON(e) : undefined);
    } else {
      obj.classesByIscns = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryClassesByISCNIndexResponse>): QueryClassesByISCNIndexResponse {
    const message = createBaseQueryClassesByISCNIndexResponse();
    message.classesByIscns = object.classesByIscns?.map(e => ClassesByISCN.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryISCNByClassRequest(): QueryISCNByClassRequest {
  return {
    classId: ""
  };
}

export const QueryISCNByClassRequest = {
  encode(message: QueryISCNByClassRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryISCNByClassRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryISCNByClassRequest();

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

  fromJSON(object: any): QueryISCNByClassRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : ""
    };
  },

  toJSON(message: QueryISCNByClassRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryISCNByClassRequest>): QueryISCNByClassRequest {
    const message = createBaseQueryISCNByClassRequest();
    message.classId = object.classId ?? "";
    return message;
  }

};

function createBaseQueryISCNByClassResponse(): QueryISCNByClassResponse {
  return {
    iscnIdPrefix: "",
    owner: "",
    latestVersion: Long.UZERO,
    latestRecord: undefined
  };
}

export const QueryISCNByClassResponse = {
  encode(message: QueryISCNByClassResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.iscnIdPrefix !== "") {
      writer.uint32(10).string(message.iscnIdPrefix);
    }

    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }

    if (!message.latestVersion.isZero()) {
      writer.uint32(24).uint64(message.latestVersion);
    }

    if (message.latestRecord !== undefined) {
      QueryResponseRecord.encode(message.latestRecord, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryISCNByClassResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryISCNByClassResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.iscnIdPrefix = reader.string();
          break;

        case 2:
          message.owner = reader.string();
          break;

        case 3:
          message.latestVersion = (reader.uint64() as Long);
          break;

        case 4:
          message.latestRecord = QueryResponseRecord.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryISCNByClassResponse {
    return {
      iscnIdPrefix: isSet(object.iscnIdPrefix) ? String(object.iscnIdPrefix) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      latestVersion: isSet(object.latestVersion) ? Long.fromString(object.latestVersion) : Long.UZERO,
      latestRecord: isSet(object.latestRecord) ? QueryResponseRecord.fromJSON(object.latestRecord) : undefined
    };
  },

  toJSON(message: QueryISCNByClassResponse): unknown {
    const obj: any = {};
    message.iscnIdPrefix !== undefined && (obj.iscnIdPrefix = message.iscnIdPrefix);
    message.owner !== undefined && (obj.owner = message.owner);
    message.latestVersion !== undefined && (obj.latestVersion = (message.latestVersion || Long.UZERO).toString());
    message.latestRecord !== undefined && (obj.latestRecord = message.latestRecord ? QueryResponseRecord.toJSON(message.latestRecord) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryISCNByClassResponse>): QueryISCNByClassResponse {
    const message = createBaseQueryISCNByClassResponse();
    message.iscnIdPrefix = object.iscnIdPrefix ?? "";
    message.owner = object.owner ?? "";
    message.latestVersion = object.latestVersion !== undefined && object.latestVersion !== null ? Long.fromValue(object.latestVersion) : Long.UZERO;
    message.latestRecord = object.latestRecord !== undefined && object.latestRecord !== null ? QueryResponseRecord.fromPartial(object.latestRecord) : undefined;
    return message;
  }

};

function createBaseQueryClassesByAccountRequest(): QueryClassesByAccountRequest {
  return {
    account: "",
    pagination: undefined
  };
}

export const QueryClassesByAccountRequest = {
  encode(message: QueryClassesByAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassesByAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassesByAccountRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
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

  fromJSON(object: any): QueryClassesByAccountRequest {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryClassesByAccountRequest): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryClassesByAccountRequest>): QueryClassesByAccountRequest {
    const message = createBaseQueryClassesByAccountRequest();
    message.account = object.account ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryClassesByAccountResponse(): QueryClassesByAccountResponse {
  return {
    account: "",
    classes: [],
    pagination: undefined
  };
}

export const QueryClassesByAccountResponse = {
  encode(message: QueryClassesByAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }

    for (const v of message.classes) {
      Class.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassesByAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassesByAccountResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;

        case 2:
          message.classes.push(Class.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryClassesByAccountResponse {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      classes: Array.isArray(object?.classes) ? object.classes.map((e: any) => Class.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryClassesByAccountResponse): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);

    if (message.classes) {
      obj.classes = message.classes.map(e => e ? Class.toJSON(e) : undefined);
    } else {
      obj.classes = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryClassesByAccountResponse>): QueryClassesByAccountResponse {
    const message = createBaseQueryClassesByAccountResponse();
    message.account = object.account ?? "";
    message.classes = object.classes?.map(e => Class.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryClassesByAccountIndexRequest(): QueryClassesByAccountIndexRequest {
  return {
    pagination: undefined
  };
}

export const QueryClassesByAccountIndexRequest = {
  encode(message: QueryClassesByAccountIndexRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassesByAccountIndexRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassesByAccountIndexRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryClassesByAccountIndexRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryClassesByAccountIndexRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryClassesByAccountIndexRequest>): QueryClassesByAccountIndexRequest {
    const message = createBaseQueryClassesByAccountIndexRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryClassesByAccountIndexResponse(): QueryClassesByAccountIndexResponse {
  return {
    classesByAccounts: [],
    pagination: undefined
  };
}

export const QueryClassesByAccountIndexResponse = {
  encode(message: QueryClassesByAccountIndexResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.classesByAccounts) {
      ClassesByAccount.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassesByAccountIndexResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassesByAccountIndexResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.classesByAccounts.push(ClassesByAccount.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryClassesByAccountIndexResponse {
    return {
      classesByAccounts: Array.isArray(object?.classesByAccounts) ? object.classesByAccounts.map((e: any) => ClassesByAccount.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryClassesByAccountIndexResponse): unknown {
    const obj: any = {};

    if (message.classesByAccounts) {
      obj.classesByAccounts = message.classesByAccounts.map(e => e ? ClassesByAccount.toJSON(e) : undefined);
    } else {
      obj.classesByAccounts = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryClassesByAccountIndexResponse>): QueryClassesByAccountIndexResponse {
    const message = createBaseQueryClassesByAccountIndexResponse();
    message.classesByAccounts = object.classesByAccounts?.map(e => ClassesByAccount.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryAccountByClassRequest(): QueryAccountByClassRequest {
  return {
    classId: ""
  };
}

export const QueryAccountByClassRequest = {
  encode(message: QueryAccountByClassRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountByClassRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountByClassRequest();

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

  fromJSON(object: any): QueryAccountByClassRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : ""
    };
  },

  toJSON(message: QueryAccountByClassRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAccountByClassRequest>): QueryAccountByClassRequest {
    const message = createBaseQueryAccountByClassRequest();
    message.classId = object.classId ?? "";
    return message;
  }

};

function createBaseQueryAccountByClassResponse(): QueryAccountByClassResponse {
  return {
    address: ""
  };
}

export const QueryAccountByClassResponse = {
  encode(message: QueryAccountByClassResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountByClassResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountByClassResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAccountByClassResponse {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },

  toJSON(message: QueryAccountByClassResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAccountByClassResponse>): QueryAccountByClassResponse {
    const message = createBaseQueryAccountByClassResponse();
    message.address = object.address ?? "";
    return message;
  }

};

function createBaseQueryBlindBoxContentRequest(): QueryBlindBoxContentRequest {
  return {
    classId: "",
    id: ""
  };
}

export const QueryBlindBoxContentRequest = {
  encode(message: QueryBlindBoxContentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBlindBoxContentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBlindBoxContentRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;

        case 2:
          message.id = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryBlindBoxContentRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      id: isSet(object.id) ? String(object.id) : ""
    };
  },

  toJSON(message: QueryBlindBoxContentRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryBlindBoxContentRequest>): QueryBlindBoxContentRequest {
    const message = createBaseQueryBlindBoxContentRequest();
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    return message;
  }

};

function createBaseQueryBlindBoxContentResponse(): QueryBlindBoxContentResponse {
  return {
    blindBoxContent: undefined
  };
}

export const QueryBlindBoxContentResponse = {
  encode(message: QueryBlindBoxContentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.blindBoxContent !== undefined) {
      BlindBoxContent.encode(message.blindBoxContent, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBlindBoxContentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBlindBoxContentResponse();

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

  fromJSON(object: any): QueryBlindBoxContentResponse {
    return {
      blindBoxContent: isSet(object.blindBoxContent) ? BlindBoxContent.fromJSON(object.blindBoxContent) : undefined
    };
  },

  toJSON(message: QueryBlindBoxContentResponse): unknown {
    const obj: any = {};
    message.blindBoxContent !== undefined && (obj.blindBoxContent = message.blindBoxContent ? BlindBoxContent.toJSON(message.blindBoxContent) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryBlindBoxContentResponse>): QueryBlindBoxContentResponse {
    const message = createBaseQueryBlindBoxContentResponse();
    message.blindBoxContent = object.blindBoxContent !== undefined && object.blindBoxContent !== null ? BlindBoxContent.fromPartial(object.blindBoxContent) : undefined;
    return message;
  }

};

function createBaseQueryBlindBoxContentIndexRequest(): QueryBlindBoxContentIndexRequest {
  return {
    pagination: undefined
  };
}

export const QueryBlindBoxContentIndexRequest = {
  encode(message: QueryBlindBoxContentIndexRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBlindBoxContentIndexRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBlindBoxContentIndexRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryBlindBoxContentIndexRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryBlindBoxContentIndexRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryBlindBoxContentIndexRequest>): QueryBlindBoxContentIndexRequest {
    const message = createBaseQueryBlindBoxContentIndexRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryBlindBoxContentIndexResponse(): QueryBlindBoxContentIndexResponse {
  return {
    blindBoxContents: [],
    pagination: undefined
  };
}

export const QueryBlindBoxContentIndexResponse = {
  encode(message: QueryBlindBoxContentIndexResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.blindBoxContents) {
      BlindBoxContent.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBlindBoxContentIndexResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBlindBoxContentIndexResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.blindBoxContents.push(BlindBoxContent.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryBlindBoxContentIndexResponse {
    return {
      blindBoxContents: Array.isArray(object?.blindBoxContents) ? object.blindBoxContents.map((e: any) => BlindBoxContent.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryBlindBoxContentIndexResponse): unknown {
    const obj: any = {};

    if (message.blindBoxContents) {
      obj.blindBoxContents = message.blindBoxContents.map(e => e ? BlindBoxContent.toJSON(e) : undefined);
    } else {
      obj.blindBoxContents = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryBlindBoxContentIndexResponse>): QueryBlindBoxContentIndexResponse {
    const message = createBaseQueryBlindBoxContentIndexResponse();
    message.blindBoxContents = object.blindBoxContents?.map(e => BlindBoxContent.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryBlindBoxContentsRequest(): QueryBlindBoxContentsRequest {
  return {
    classId: "",
    pagination: undefined
  };
}

export const QueryBlindBoxContentsRequest = {
  encode(message: QueryBlindBoxContentsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBlindBoxContentsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBlindBoxContentsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
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

  fromJSON(object: any): QueryBlindBoxContentsRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryBlindBoxContentsRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryBlindBoxContentsRequest>): QueryBlindBoxContentsRequest {
    const message = createBaseQueryBlindBoxContentsRequest();
    message.classId = object.classId ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryBlindBoxContentsResponse(): QueryBlindBoxContentsResponse {
  return {
    blindBoxContents: [],
    pagination: undefined
  };
}

export const QueryBlindBoxContentsResponse = {
  encode(message: QueryBlindBoxContentsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.blindBoxContents) {
      BlindBoxContent.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBlindBoxContentsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBlindBoxContentsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.blindBoxContents.push(BlindBoxContent.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryBlindBoxContentsResponse {
    return {
      blindBoxContents: Array.isArray(object?.blindBoxContents) ? object.blindBoxContents.map((e: any) => BlindBoxContent.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryBlindBoxContentsResponse): unknown {
    const obj: any = {};

    if (message.blindBoxContents) {
      obj.blindBoxContents = message.blindBoxContents.map(e => e ? BlindBoxContent.toJSON(e) : undefined);
    } else {
      obj.blindBoxContents = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryBlindBoxContentsResponse>): QueryBlindBoxContentsResponse {
    const message = createBaseQueryBlindBoxContentsResponse();
    message.blindBoxContents = object.blindBoxContents?.map(e => BlindBoxContent.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryOfferRequest(): QueryOfferRequest {
  return {
    classId: "",
    nftId: "",
    buyer: ""
  };
}

export const QueryOfferRequest = {
  encode(message: QueryOfferRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOfferRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOfferRequest();

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

  fromJSON(object: any): QueryOfferRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      buyer: isSet(object.buyer) ? String(object.buyer) : ""
    };
  },

  toJSON(message: QueryOfferRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.buyer !== undefined && (obj.buyer = message.buyer);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryOfferRequest>): QueryOfferRequest {
    const message = createBaseQueryOfferRequest();
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.buyer = object.buyer ?? "";
    return message;
  }

};

function createBaseQueryOfferResponse(): QueryOfferResponse {
  return {
    offer: undefined
  };
}

export const QueryOfferResponse = {
  encode(message: QueryOfferResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.offer !== undefined) {
      Offer.encode(message.offer, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOfferResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOfferResponse();

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

  fromJSON(object: any): QueryOfferResponse {
    return {
      offer: isSet(object.offer) ? Offer.fromJSON(object.offer) : undefined
    };
  },

  toJSON(message: QueryOfferResponse): unknown {
    const obj: any = {};
    message.offer !== undefined && (obj.offer = message.offer ? Offer.toJSON(message.offer) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryOfferResponse>): QueryOfferResponse {
    const message = createBaseQueryOfferResponse();
    message.offer = object.offer !== undefined && object.offer !== null ? Offer.fromPartial(object.offer) : undefined;
    return message;
  }

};

function createBaseQueryOfferIndexRequest(): QueryOfferIndexRequest {
  return {
    pagination: undefined
  };
}

export const QueryOfferIndexRequest = {
  encode(message: QueryOfferIndexRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOfferIndexRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOfferIndexRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryOfferIndexRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryOfferIndexRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryOfferIndexRequest>): QueryOfferIndexRequest {
    const message = createBaseQueryOfferIndexRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryOfferIndexResponse(): QueryOfferIndexResponse {
  return {
    offers: [],
    pagination: undefined
  };
}

export const QueryOfferIndexResponse = {
  encode(message: QueryOfferIndexResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.offers) {
      Offer.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOfferIndexResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOfferIndexResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.offers.push(Offer.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryOfferIndexResponse {
    return {
      offers: Array.isArray(object?.offers) ? object.offers.map((e: any) => Offer.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryOfferIndexResponse): unknown {
    const obj: any = {};

    if (message.offers) {
      obj.offers = message.offers.map(e => e ? Offer.toJSON(e) : undefined);
    } else {
      obj.offers = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryOfferIndexResponse>): QueryOfferIndexResponse {
    const message = createBaseQueryOfferIndexResponse();
    message.offers = object.offers?.map(e => Offer.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryOffersByClassRequest(): QueryOffersByClassRequest {
  return {
    classId: "",
    pagination: undefined
  };
}

export const QueryOffersByClassRequest = {
  encode(message: QueryOffersByClassRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOffersByClassRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOffersByClassRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
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

  fromJSON(object: any): QueryOffersByClassRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryOffersByClassRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryOffersByClassRequest>): QueryOffersByClassRequest {
    const message = createBaseQueryOffersByClassRequest();
    message.classId = object.classId ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryOffersByClassResponse(): QueryOffersByClassResponse {
  return {
    offers: [],
    pagination: undefined
  };
}

export const QueryOffersByClassResponse = {
  encode(message: QueryOffersByClassResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.offers) {
      Offer.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOffersByClassResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOffersByClassResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.offers.push(Offer.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryOffersByClassResponse {
    return {
      offers: Array.isArray(object?.offers) ? object.offers.map((e: any) => Offer.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryOffersByClassResponse): unknown {
    const obj: any = {};

    if (message.offers) {
      obj.offers = message.offers.map(e => e ? Offer.toJSON(e) : undefined);
    } else {
      obj.offers = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryOffersByClassResponse>): QueryOffersByClassResponse {
    const message = createBaseQueryOffersByClassResponse();
    message.offers = object.offers?.map(e => Offer.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryOffersByNFTRequest(): QueryOffersByNFTRequest {
  return {
    classId: "",
    nftId: "",
    pagination: undefined
  };
}

export const QueryOffersByNFTRequest = {
  encode(message: QueryOffersByNFTRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOffersByNFTRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOffersByNFTRequest();

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
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryOffersByNFTRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryOffersByNFTRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryOffersByNFTRequest>): QueryOffersByNFTRequest {
    const message = createBaseQueryOffersByNFTRequest();
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryOffersByNFTResponse(): QueryOffersByNFTResponse {
  return {
    offers: [],
    pagination: undefined
  };
}

export const QueryOffersByNFTResponse = {
  encode(message: QueryOffersByNFTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.offers) {
      Offer.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOffersByNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOffersByNFTResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.offers.push(Offer.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryOffersByNFTResponse {
    return {
      offers: Array.isArray(object?.offers) ? object.offers.map((e: any) => Offer.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryOffersByNFTResponse): unknown {
    const obj: any = {};

    if (message.offers) {
      obj.offers = message.offers.map(e => e ? Offer.toJSON(e) : undefined);
    } else {
      obj.offers = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryOffersByNFTResponse>): QueryOffersByNFTResponse {
    const message = createBaseQueryOffersByNFTResponse();
    message.offers = object.offers?.map(e => Offer.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryListingRequest(): QueryListingRequest {
  return {
    classId: "",
    nftId: "",
    seller: ""
  };
}

export const QueryListingRequest = {
  encode(message: QueryListingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListingRequest();

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

  fromJSON(object: any): QueryListingRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      seller: isSet(object.seller) ? String(object.seller) : ""
    };
  },

  toJSON(message: QueryListingRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.seller !== undefined && (obj.seller = message.seller);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryListingRequest>): QueryListingRequest {
    const message = createBaseQueryListingRequest();
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.seller = object.seller ?? "";
    return message;
  }

};

function createBaseQueryListingResponse(): QueryListingResponse {
  return {
    listing: undefined
  };
}

export const QueryListingResponse = {
  encode(message: QueryListingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.listing !== undefined) {
      Listing.encode(message.listing, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListingResponse();

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

  fromJSON(object: any): QueryListingResponse {
    return {
      listing: isSet(object.listing) ? Listing.fromJSON(object.listing) : undefined
    };
  },

  toJSON(message: QueryListingResponse): unknown {
    const obj: any = {};
    message.listing !== undefined && (obj.listing = message.listing ? Listing.toJSON(message.listing) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryListingResponse>): QueryListingResponse {
    const message = createBaseQueryListingResponse();
    message.listing = object.listing !== undefined && object.listing !== null ? Listing.fromPartial(object.listing) : undefined;
    return message;
  }

};

function createBaseQueryListingIndexRequest(): QueryListingIndexRequest {
  return {
    pagination: undefined
  };
}

export const QueryListingIndexRequest = {
  encode(message: QueryListingIndexRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListingIndexRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListingIndexRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryListingIndexRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryListingIndexRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryListingIndexRequest>): QueryListingIndexRequest {
    const message = createBaseQueryListingIndexRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryListingIndexResponse(): QueryListingIndexResponse {
  return {
    listings: [],
    pagination: undefined
  };
}

export const QueryListingIndexResponse = {
  encode(message: QueryListingIndexResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.listings) {
      Listing.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListingIndexResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListingIndexResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.listings.push(Listing.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryListingIndexResponse {
    return {
      listings: Array.isArray(object?.listings) ? object.listings.map((e: any) => Listing.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryListingIndexResponse): unknown {
    const obj: any = {};

    if (message.listings) {
      obj.listings = message.listings.map(e => e ? Listing.toJSON(e) : undefined);
    } else {
      obj.listings = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryListingIndexResponse>): QueryListingIndexResponse {
    const message = createBaseQueryListingIndexResponse();
    message.listings = object.listings?.map(e => Listing.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryListingsByClassRequest(): QueryListingsByClassRequest {
  return {
    classId: "",
    pagination: undefined
  };
}

export const QueryListingsByClassRequest = {
  encode(message: QueryListingsByClassRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListingsByClassRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListingsByClassRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
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

  fromJSON(object: any): QueryListingsByClassRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryListingsByClassRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryListingsByClassRequest>): QueryListingsByClassRequest {
    const message = createBaseQueryListingsByClassRequest();
    message.classId = object.classId ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryListingsByClassResponse(): QueryListingsByClassResponse {
  return {
    listings: [],
    pagination: undefined
  };
}

export const QueryListingsByClassResponse = {
  encode(message: QueryListingsByClassResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.listings) {
      Listing.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListingsByClassResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListingsByClassResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.listings.push(Listing.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryListingsByClassResponse {
    return {
      listings: Array.isArray(object?.listings) ? object.listings.map((e: any) => Listing.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryListingsByClassResponse): unknown {
    const obj: any = {};

    if (message.listings) {
      obj.listings = message.listings.map(e => e ? Listing.toJSON(e) : undefined);
    } else {
      obj.listings = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryListingsByClassResponse>): QueryListingsByClassResponse {
    const message = createBaseQueryListingsByClassResponse();
    message.listings = object.listings?.map(e => Listing.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryListingsByNFTRequest(): QueryListingsByNFTRequest {
  return {
    classId: "",
    nftId: "",
    pagination: undefined
  };
}

export const QueryListingsByNFTRequest = {
  encode(message: QueryListingsByNFTRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListingsByNFTRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListingsByNFTRequest();

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
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryListingsByNFTRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryListingsByNFTRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryListingsByNFTRequest>): QueryListingsByNFTRequest {
    const message = createBaseQueryListingsByNFTRequest();
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryListingsByNFTResponse(): QueryListingsByNFTResponse {
  return {
    listings: [],
    pagination: undefined
  };
}

export const QueryListingsByNFTResponse = {
  encode(message: QueryListingsByNFTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.listings) {
      Listing.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListingsByNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListingsByNFTResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.listings.push(Listing.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryListingsByNFTResponse {
    return {
      listings: Array.isArray(object?.listings) ? object.listings.map((e: any) => Listing.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryListingsByNFTResponse): unknown {
    const obj: any = {};

    if (message.listings) {
      obj.listings = message.listings.map(e => e ? Listing.toJSON(e) : undefined);
    } else {
      obj.listings = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryListingsByNFTResponse>): QueryListingsByNFTResponse {
    const message = createBaseQueryListingsByNFTResponse();
    message.listings = object.listings?.map(e => Listing.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryRoyaltyConfigRequest(): QueryRoyaltyConfigRequest {
  return {
    classId: ""
  };
}

export const QueryRoyaltyConfigRequest = {
  encode(message: QueryRoyaltyConfigRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRoyaltyConfigRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRoyaltyConfigRequest();

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

  fromJSON(object: any): QueryRoyaltyConfigRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : ""
    };
  },

  toJSON(message: QueryRoyaltyConfigRequest): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryRoyaltyConfigRequest>): QueryRoyaltyConfigRequest {
    const message = createBaseQueryRoyaltyConfigRequest();
    message.classId = object.classId ?? "";
    return message;
  }

};

function createBaseQueryRoyaltyConfigResponse(): QueryRoyaltyConfigResponse {
  return {
    royaltyConfig: undefined
  };
}

export const QueryRoyaltyConfigResponse = {
  encode(message: QueryRoyaltyConfigResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.royaltyConfig !== undefined) {
      RoyaltyConfig.encode(message.royaltyConfig, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRoyaltyConfigResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRoyaltyConfigResponse();

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

  fromJSON(object: any): QueryRoyaltyConfigResponse {
    return {
      royaltyConfig: isSet(object.royaltyConfig) ? RoyaltyConfig.fromJSON(object.royaltyConfig) : undefined
    };
  },

  toJSON(message: QueryRoyaltyConfigResponse): unknown {
    const obj: any = {};
    message.royaltyConfig !== undefined && (obj.royaltyConfig = message.royaltyConfig ? RoyaltyConfig.toJSON(message.royaltyConfig) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryRoyaltyConfigResponse>): QueryRoyaltyConfigResponse {
    const message = createBaseQueryRoyaltyConfigResponse();
    message.royaltyConfig = object.royaltyConfig !== undefined && object.royaltyConfig !== null ? RoyaltyConfig.fromPartial(object.royaltyConfig) : undefined;
    return message;
  }

};

function createBaseQueryRoyaltyConfigIndexRequest(): QueryRoyaltyConfigIndexRequest {
  return {
    pagination: undefined
  };
}

export const QueryRoyaltyConfigIndexRequest = {
  encode(message: QueryRoyaltyConfigIndexRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRoyaltyConfigIndexRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRoyaltyConfigIndexRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryRoyaltyConfigIndexRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryRoyaltyConfigIndexRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryRoyaltyConfigIndexRequest>): QueryRoyaltyConfigIndexRequest {
    const message = createBaseQueryRoyaltyConfigIndexRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryRoyaltyConfigIndexResponse(): QueryRoyaltyConfigIndexResponse {
  return {
    royaltyConfigByClass: [],
    pagination: undefined
  };
}

export const QueryRoyaltyConfigIndexResponse = {
  encode(message: QueryRoyaltyConfigIndexResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.royaltyConfigByClass) {
      RoyaltyConfigByClass.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRoyaltyConfigIndexResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRoyaltyConfigIndexResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.royaltyConfigByClass.push(RoyaltyConfigByClass.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryRoyaltyConfigIndexResponse {
    return {
      royaltyConfigByClass: Array.isArray(object?.royaltyConfigByClass) ? object.royaltyConfigByClass.map((e: any) => RoyaltyConfigByClass.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryRoyaltyConfigIndexResponse): unknown {
    const obj: any = {};

    if (message.royaltyConfigByClass) {
      obj.royaltyConfigByClass = message.royaltyConfigByClass.map(e => e ? RoyaltyConfigByClass.toJSON(e) : undefined);
    } else {
      obj.royaltyConfigByClass = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryRoyaltyConfigIndexResponse>): QueryRoyaltyConfigIndexResponse {
    const message = createBaseQueryRoyaltyConfigIndexResponse();
    message.royaltyConfigByClass = object.royaltyConfigByClass?.map(e => RoyaltyConfigByClass.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};