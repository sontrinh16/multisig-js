import { DistributionType, distributionTypeFromJSON, distributionTypeToJSON } from "./types";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Long } from "@osmonauts/helpers";
export interface MsgCreateDistribution {
  distributor: string;
  authorizedRunner: string;
  distributionType: DistributionType;
  output: string[];
}
export interface MsgCreateDistributionResponse {}
export interface MsgCreateClaimResponse {}
export interface MsgRunDistributionResponse {}
export interface MsgCreateUserClaim {
  userClaimAddress: string;
  userClaimType: DistributionType;
}
export interface MsgRunDistribution {
  authorizedRunner: string;
  distributionName: string;
  distributionType: DistributionType;
  distributionCount: Long;
}

function createBaseMsgCreateDistribution(): MsgCreateDistribution {
  return {
    distributor: "",
    authorizedRunner: "",
    distributionType: 0,
    output: []
  };
}

export const MsgCreateDistribution = {
  encode(message: MsgCreateDistribution, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.distributor !== "") {
      writer.uint32(10).string(message.distributor);
    }

    if (message.authorizedRunner !== "") {
      writer.uint32(18).string(message.authorizedRunner);
    }

    if (message.distributionType !== 0) {
      writer.uint32(24).int32(message.distributionType);
    }

    for (const v of message.output) {
      writer.uint32(34).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDistribution {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDistribution();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.distributor = reader.string();
          break;

        case 2:
          message.authorizedRunner = reader.string();
          break;

        case 3:
          message.distributionType = (reader.int32() as any);
          break;

        case 4:
          message.output.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateDistribution {
    return {
      distributor: isSet(object.distributor) ? String(object.distributor) : "",
      authorizedRunner: isSet(object.authorizedRunner) ? String(object.authorizedRunner) : "",
      distributionType: isSet(object.distributionType) ? distributionTypeFromJSON(object.distributionType) : 0,
      output: Array.isArray(object?.output) ? object.output.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: MsgCreateDistribution): unknown {
    const obj: any = {};
    message.distributor !== undefined && (obj.distributor = message.distributor);
    message.authorizedRunner !== undefined && (obj.authorizedRunner = message.authorizedRunner);
    message.distributionType !== undefined && (obj.distributionType = distributionTypeToJSON(message.distributionType));

    if (message.output) {
      obj.output = message.output.map(e => e);
    } else {
      obj.output = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateDistribution>): MsgCreateDistribution {
    const message = createBaseMsgCreateDistribution();
    message.distributor = object.distributor ?? "";
    message.authorizedRunner = object.authorizedRunner ?? "";
    message.distributionType = object.distributionType ?? 0;
    message.output = object.output?.map(e => e) || [];
    return message;
  }

};

function createBaseMsgCreateDistributionResponse(): MsgCreateDistributionResponse {
  return {};
}

export const MsgCreateDistributionResponse = {
  encode(_: MsgCreateDistributionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDistributionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDistributionResponse();

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

  fromJSON(_: any): MsgCreateDistributionResponse {
    return {};
  },

  toJSON(_: MsgCreateDistributionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreateDistributionResponse>): MsgCreateDistributionResponse {
    const message = createBaseMsgCreateDistributionResponse();
    return message;
  }

};

function createBaseMsgCreateClaimResponse(): MsgCreateClaimResponse {
  return {};
}

export const MsgCreateClaimResponse = {
  encode(_: MsgCreateClaimResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateClaimResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateClaimResponse();

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

  fromJSON(_: any): MsgCreateClaimResponse {
    return {};
  },

  toJSON(_: MsgCreateClaimResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreateClaimResponse>): MsgCreateClaimResponse {
    const message = createBaseMsgCreateClaimResponse();
    return message;
  }

};

function createBaseMsgRunDistributionResponse(): MsgRunDistributionResponse {
  return {};
}

export const MsgRunDistributionResponse = {
  encode(_: MsgRunDistributionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRunDistributionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRunDistributionResponse();

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

  fromJSON(_: any): MsgRunDistributionResponse {
    return {};
  },

  toJSON(_: MsgRunDistributionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgRunDistributionResponse>): MsgRunDistributionResponse {
    const message = createBaseMsgRunDistributionResponse();
    return message;
  }

};

function createBaseMsgCreateUserClaim(): MsgCreateUserClaim {
  return {
    userClaimAddress: "",
    userClaimType: 0
  };
}

export const MsgCreateUserClaim = {
  encode(message: MsgCreateUserClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userClaimAddress !== "") {
      writer.uint32(10).string(message.userClaimAddress);
    }

    if (message.userClaimType !== 0) {
      writer.uint32(16).int32(message.userClaimType);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateUserClaim {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateUserClaim();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.userClaimAddress = reader.string();
          break;

        case 2:
          message.userClaimType = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateUserClaim {
    return {
      userClaimAddress: isSet(object.userClaimAddress) ? String(object.userClaimAddress) : "",
      userClaimType: isSet(object.userClaimType) ? distributionTypeFromJSON(object.userClaimType) : 0
    };
  },

  toJSON(message: MsgCreateUserClaim): unknown {
    const obj: any = {};
    message.userClaimAddress !== undefined && (obj.userClaimAddress = message.userClaimAddress);
    message.userClaimType !== undefined && (obj.userClaimType = distributionTypeToJSON(message.userClaimType));
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateUserClaim>): MsgCreateUserClaim {
    const message = createBaseMsgCreateUserClaim();
    message.userClaimAddress = object.userClaimAddress ?? "";
    message.userClaimType = object.userClaimType ?? 0;
    return message;
  }

};

function createBaseMsgRunDistribution(): MsgRunDistribution {
  return {
    authorizedRunner: "",
    distributionName: "",
    distributionType: 0,
    distributionCount: Long.ZERO
  };
}

export const MsgRunDistribution = {
  encode(message: MsgRunDistribution, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authorizedRunner !== "") {
      writer.uint32(10).string(message.authorizedRunner);
    }

    if (message.distributionName !== "") {
      writer.uint32(18).string(message.distributionName);
    }

    if (message.distributionType !== 0) {
      writer.uint32(24).int32(message.distributionType);
    }

    if (!message.distributionCount.isZero()) {
      writer.uint32(32).int64(message.distributionCount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRunDistribution {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRunDistribution();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.authorizedRunner = reader.string();
          break;

        case 2:
          message.distributionName = reader.string();
          break;

        case 3:
          message.distributionType = (reader.int32() as any);
          break;

        case 4:
          message.distributionCount = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgRunDistribution {
    return {
      authorizedRunner: isSet(object.authorizedRunner) ? String(object.authorizedRunner) : "",
      distributionName: isSet(object.distributionName) ? String(object.distributionName) : "",
      distributionType: isSet(object.distributionType) ? distributionTypeFromJSON(object.distributionType) : 0,
      distributionCount: isSet(object.distributionCount) ? Long.fromString(object.distributionCount) : Long.ZERO
    };
  },

  toJSON(message: MsgRunDistribution): unknown {
    const obj: any = {};
    message.authorizedRunner !== undefined && (obj.authorizedRunner = message.authorizedRunner);
    message.distributionName !== undefined && (obj.distributionName = message.distributionName);
    message.distributionType !== undefined && (obj.distributionType = distributionTypeToJSON(message.distributionType));
    message.distributionCount !== undefined && (obj.distributionCount = (message.distributionCount || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRunDistribution>): MsgRunDistribution {
    const message = createBaseMsgRunDistribution();
    message.authorizedRunner = object.authorizedRunner ?? "";
    message.distributionName = object.distributionName ?? "";
    message.distributionType = object.distributionType ?? 0;
    message.distributionCount = object.distributionCount !== undefined && object.distributionCount !== null ? Long.fromValue(object.distributionCount) : Long.ZERO;
    return message;
  }

};