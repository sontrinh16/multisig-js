import { DistributionStatus, DistributionType, Distribution, DistributionRecords, UserClaim, distributionStatusFromJSON, distributionStatusToJSON, distributionTypeFromJSON, distributionTypeToJSON } from "./types";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long, isSet } from "@osmonauts/helpers";
export interface QueryAllDistributionsRequest {}
export interface QueryAllDistributionsResponse {
  distributions: Distribution[];
  height: Long;
}
export interface QueryRecordsByDistributionNameRequest {
  distributionName: string;
  status: DistributionStatus;
}
export interface QueryRecordsByDistributionNameResponse {
  distributionRecords: DistributionRecords;
  height: Long;
}
export interface QueryRecordsByRecipientAddrRequest {
  address: string;
}
export interface QueryRecordsByRecipientAddrResponse {
  distributionRecords: DistributionRecords;
  height: Long;
}
export interface QueryClaimsByTypeRequest {
  userClaimType: DistributionType;
}
export interface QueryClaimsResponse {
  claims: UserClaim[];
  height: Long;
}

function createBaseQueryAllDistributionsRequest(): QueryAllDistributionsRequest {
  return {};
}

export const QueryAllDistributionsRequest = {
  encode(_: QueryAllDistributionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllDistributionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllDistributionsRequest();

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

  fromJSON(_: any): QueryAllDistributionsRequest {
    return {};
  },

  toJSON(_: QueryAllDistributionsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryAllDistributionsRequest>): QueryAllDistributionsRequest {
    const message = createBaseQueryAllDistributionsRequest();
    return message;
  }

};

function createBaseQueryAllDistributionsResponse(): QueryAllDistributionsResponse {
  return {
    distributions: [],
    height: Long.ZERO
  };
}

export const QueryAllDistributionsResponse = {
  encode(message: QueryAllDistributionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.distributions) {
      Distribution.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (!message.height.isZero()) {
      writer.uint32(16).int64(message.height);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllDistributionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllDistributionsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.distributions.push(Distribution.decode(reader, reader.uint32()));
          break;

        case 2:
          message.height = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAllDistributionsResponse {
    return {
      distributions: Array.isArray(object?.distributions) ? object.distributions.map((e: any) => Distribution.fromJSON(e)) : [],
      height: isSet(object.height) ? Long.fromString(object.height) : Long.ZERO
    };
  },

  toJSON(message: QueryAllDistributionsResponse): unknown {
    const obj: any = {};

    if (message.distributions) {
      obj.distributions = message.distributions.map(e => e ? Distribution.toJSON(e) : undefined);
    } else {
      obj.distributions = [];
    }

    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllDistributionsResponse>): QueryAllDistributionsResponse {
    const message = createBaseQueryAllDistributionsResponse();
    message.distributions = object.distributions?.map(e => Distribution.fromPartial(e)) || [];
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    return message;
  }

};

function createBaseQueryRecordsByDistributionNameRequest(): QueryRecordsByDistributionNameRequest {
  return {
    distributionName: "",
    status: 0
  };
}

export const QueryRecordsByDistributionNameRequest = {
  encode(message: QueryRecordsByDistributionNameRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.distributionName !== "") {
      writer.uint32(10).string(message.distributionName);
    }

    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRecordsByDistributionNameRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRecordsByDistributionNameRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.distributionName = reader.string();
          break;

        case 2:
          message.status = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryRecordsByDistributionNameRequest {
    return {
      distributionName: isSet(object.distributionName) ? String(object.distributionName) : "",
      status: isSet(object.status) ? distributionStatusFromJSON(object.status) : 0
    };
  },

  toJSON(message: QueryRecordsByDistributionNameRequest): unknown {
    const obj: any = {};
    message.distributionName !== undefined && (obj.distributionName = message.distributionName);
    message.status !== undefined && (obj.status = distributionStatusToJSON(message.status));
    return obj;
  },

  fromPartial(object: DeepPartial<QueryRecordsByDistributionNameRequest>): QueryRecordsByDistributionNameRequest {
    const message = createBaseQueryRecordsByDistributionNameRequest();
    message.distributionName = object.distributionName ?? "";
    message.status = object.status ?? 0;
    return message;
  }

};

function createBaseQueryRecordsByDistributionNameResponse(): QueryRecordsByDistributionNameResponse {
  return {
    distributionRecords: undefined,
    height: Long.ZERO
  };
}

export const QueryRecordsByDistributionNameResponse = {
  encode(message: QueryRecordsByDistributionNameResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.distributionRecords !== undefined) {
      DistributionRecords.encode(message.distributionRecords, writer.uint32(10).fork()).ldelim();
    }

    if (!message.height.isZero()) {
      writer.uint32(16).int64(message.height);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRecordsByDistributionNameResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRecordsByDistributionNameResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.distributionRecords = DistributionRecords.decode(reader, reader.uint32());
          break;

        case 2:
          message.height = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryRecordsByDistributionNameResponse {
    return {
      distributionRecords: isSet(object.distributionRecords) ? DistributionRecords.fromJSON(object.distributionRecords) : undefined,
      height: isSet(object.height) ? Long.fromString(object.height) : Long.ZERO
    };
  },

  toJSON(message: QueryRecordsByDistributionNameResponse): unknown {
    const obj: any = {};
    message.distributionRecords !== undefined && (obj.distributionRecords = message.distributionRecords ? DistributionRecords.toJSON(message.distributionRecords) : undefined);
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<QueryRecordsByDistributionNameResponse>): QueryRecordsByDistributionNameResponse {
    const message = createBaseQueryRecordsByDistributionNameResponse();
    message.distributionRecords = object.distributionRecords !== undefined && object.distributionRecords !== null ? DistributionRecords.fromPartial(object.distributionRecords) : undefined;
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    return message;
  }

};

function createBaseQueryRecordsByRecipientAddrRequest(): QueryRecordsByRecipientAddrRequest {
  return {
    address: ""
  };
}

export const QueryRecordsByRecipientAddrRequest = {
  encode(message: QueryRecordsByRecipientAddrRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRecordsByRecipientAddrRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRecordsByRecipientAddrRequest();

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

  fromJSON(object: any): QueryRecordsByRecipientAddrRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },

  toJSON(message: QueryRecordsByRecipientAddrRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryRecordsByRecipientAddrRequest>): QueryRecordsByRecipientAddrRequest {
    const message = createBaseQueryRecordsByRecipientAddrRequest();
    message.address = object.address ?? "";
    return message;
  }

};

function createBaseQueryRecordsByRecipientAddrResponse(): QueryRecordsByRecipientAddrResponse {
  return {
    distributionRecords: undefined,
    height: Long.ZERO
  };
}

export const QueryRecordsByRecipientAddrResponse = {
  encode(message: QueryRecordsByRecipientAddrResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.distributionRecords !== undefined) {
      DistributionRecords.encode(message.distributionRecords, writer.uint32(10).fork()).ldelim();
    }

    if (!message.height.isZero()) {
      writer.uint32(16).int64(message.height);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRecordsByRecipientAddrResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRecordsByRecipientAddrResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.distributionRecords = DistributionRecords.decode(reader, reader.uint32());
          break;

        case 2:
          message.height = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryRecordsByRecipientAddrResponse {
    return {
      distributionRecords: isSet(object.distributionRecords) ? DistributionRecords.fromJSON(object.distributionRecords) : undefined,
      height: isSet(object.height) ? Long.fromString(object.height) : Long.ZERO
    };
  },

  toJSON(message: QueryRecordsByRecipientAddrResponse): unknown {
    const obj: any = {};
    message.distributionRecords !== undefined && (obj.distributionRecords = message.distributionRecords ? DistributionRecords.toJSON(message.distributionRecords) : undefined);
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<QueryRecordsByRecipientAddrResponse>): QueryRecordsByRecipientAddrResponse {
    const message = createBaseQueryRecordsByRecipientAddrResponse();
    message.distributionRecords = object.distributionRecords !== undefined && object.distributionRecords !== null ? DistributionRecords.fromPartial(object.distributionRecords) : undefined;
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    return message;
  }

};

function createBaseQueryClaimsByTypeRequest(): QueryClaimsByTypeRequest {
  return {
    userClaimType: 0
  };
}

export const QueryClaimsByTypeRequest = {
  encode(message: QueryClaimsByTypeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userClaimType !== 0) {
      writer.uint32(8).int32(message.userClaimType);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimsByTypeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimsByTypeRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.userClaimType = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryClaimsByTypeRequest {
    return {
      userClaimType: isSet(object.userClaimType) ? distributionTypeFromJSON(object.userClaimType) : 0
    };
  },

  toJSON(message: QueryClaimsByTypeRequest): unknown {
    const obj: any = {};
    message.userClaimType !== undefined && (obj.userClaimType = distributionTypeToJSON(message.userClaimType));
    return obj;
  },

  fromPartial(object: DeepPartial<QueryClaimsByTypeRequest>): QueryClaimsByTypeRequest {
    const message = createBaseQueryClaimsByTypeRequest();
    message.userClaimType = object.userClaimType ?? 0;
    return message;
  }

};

function createBaseQueryClaimsResponse(): QueryClaimsResponse {
  return {
    claims: [],
    height: Long.ZERO
  };
}

export const QueryClaimsResponse = {
  encode(message: QueryClaimsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.claims) {
      UserClaim.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (!message.height.isZero()) {
      writer.uint32(16).int64(message.height);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.claims.push(UserClaim.decode(reader, reader.uint32()));
          break;

        case 2:
          message.height = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryClaimsResponse {
    return {
      claims: Array.isArray(object?.claims) ? object.claims.map((e: any) => UserClaim.fromJSON(e)) : [],
      height: isSet(object.height) ? Long.fromString(object.height) : Long.ZERO
    };
  },

  toJSON(message: QueryClaimsResponse): unknown {
    const obj: any = {};

    if (message.claims) {
      obj.claims = message.claims.map(e => e ? UserClaim.toJSON(e) : undefined);
    } else {
      obj.claims = [];
    }

    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<QueryClaimsResponse>): QueryClaimsResponse {
    const message = createBaseQueryClaimsResponse();
    message.claims = object.claims?.map(e => UserClaim.fromPartial(e)) || [];
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    return message;
  }

};