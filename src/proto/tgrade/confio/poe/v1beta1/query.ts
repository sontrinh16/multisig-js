import { PoEContractType, poEContractTypeFromJSON, poEContractTypeToJSON } from "./poe";
import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Duration } from "../../../../google/protobuf/duration";
import { Coin, DecCoin } from "../../../../cosmos/base/v1beta1/coin";
import { UnbondingDelegationEntry } from "../../../../cosmos/staking/v1beta1/staking";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";

/**
 * QueryContractAddressRequest is the request type for the Query/ContractAddress
 * RPC method.
 */
export interface QueryContractAddressRequest {
  /** ContractType is the type of contract */
  contractType: PoEContractType;
}

/**
 * QueryContractAddressRequest is the response type for the
 * Query/ContractAddress RPC method.
 */
export interface QueryContractAddressResponse {
  /**
   * QueryContractAddressRequest is the response type for the
   * Query/ContractAddress RPC method.
   */
  address: string;
}

/**
 * QueryUnbondingPeriodRequest is request type for the Query/UnbondingPeriod RPC
 * method
 */
export interface QueryUnbondingPeriodRequest {}

/**
 * QueryUnbondingPeriodResponse is response type for the Query/UnbondingPeriod
 * RPC method
 */
export interface QueryUnbondingPeriodResponse {
  /** Time is the time that must pass */
  time: Duration;
}

/**
 * QueryValidatorDelegationRequest is request type for the
 * Query/ValidatorDelegation RPC method
 */
export interface QueryValidatorDelegationRequest {
  /** validator_addr defines the validator address to query for. */
  validatorAddr: string;
}

/**
 * QueryValidatorDelegationResponse is response type for the
 * Query/ValidatorDelegation RPC method
 */
export interface QueryValidatorDelegationResponse {
  balance: Coin;
}

/**
 * QueryValidatorUnbondingDelegationsRequest is required type for the
 * Query/ValidatorUnbondingDelegations RPC method
 */
export interface QueryValidatorUnbondingDelegationsRequest {
  /** validator_addr defines the validator address to query for. */
  validatorAddr: string;

  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
}

/**
 * QueryValidatorUnbondingDelegationsResponse is response type for the
 * Query/ValidatorUnbondingDelegations RPC method.
 */
export interface QueryValidatorUnbondingDelegationsResponse {
  entries: UnbondingDelegationEntry[];

  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}

/**
 * QueryValidatorOutstandingRewardRequest is the request type for the
 * Query/ValidatorOutstandingReward RPC method.
 */
export interface QueryValidatorOutstandingRewardRequest {
  /** validator_address defines the validator address to query for. */
  validatorAddress: string;
}

/**
 * QueryValidatorOutstandingRewardResponse is the response type for the
 * Query/ValidatorOutstandingReward RPC method.
 */
export interface QueryValidatorOutstandingRewardResponse {
  reward: DecCoin;
}

/**
 * QueryValidatorEngagementRewardRequest is the request type for the
 * Query/ValidatorEngagementReward RPC method.
 */
export interface QueryValidatorEngagementRewardRequest {
  /** validator_address defines the validator address to query for. */
  validatorAddress: string;
}

/**
 * QueryValidatorEngagementRewardResponse is the response type for the
 * Query/ValidatorEngagementReward RPC method.
 */
export interface QueryValidatorEngagementRewardResponse {
  reward: DecCoin;
}

function createBaseQueryContractAddressRequest(): QueryContractAddressRequest {
  return {
    contractType: 0
  };
}

export const QueryContractAddressRequest = {
  encode(message: QueryContractAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractType !== 0) {
      writer.uint32(8).int32(message.contractType);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractAddressRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractAddressRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contractType = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryContractAddressRequest {
    return {
      contractType: isSet(object.contractType) ? poEContractTypeFromJSON(object.contractType) : 0
    };
  },

  toJSON(message: QueryContractAddressRequest): unknown {
    const obj: any = {};
    message.contractType !== undefined && (obj.contractType = poEContractTypeToJSON(message.contractType));
    return obj;
  },

  fromPartial(object: DeepPartial<QueryContractAddressRequest>): QueryContractAddressRequest {
    const message = createBaseQueryContractAddressRequest();
    message.contractType = object.contractType ?? 0;
    return message;
  }

};

function createBaseQueryContractAddressResponse(): QueryContractAddressResponse {
  return {
    address: ""
  };
}

export const QueryContractAddressResponse = {
  encode(message: QueryContractAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractAddressResponse();

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

  fromJSON(object: any): QueryContractAddressResponse {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },

  toJSON(message: QueryContractAddressResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryContractAddressResponse>): QueryContractAddressResponse {
    const message = createBaseQueryContractAddressResponse();
    message.address = object.address ?? "";
    return message;
  }

};

function createBaseQueryUnbondingPeriodRequest(): QueryUnbondingPeriodRequest {
  return {};
}

export const QueryUnbondingPeriodRequest = {
  encode(_: QueryUnbondingPeriodRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnbondingPeriodRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnbondingPeriodRequest();

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

  fromJSON(_: any): QueryUnbondingPeriodRequest {
    return {};
  },

  toJSON(_: QueryUnbondingPeriodRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryUnbondingPeriodRequest>): QueryUnbondingPeriodRequest {
    const message = createBaseQueryUnbondingPeriodRequest();
    return message;
  }

};

function createBaseQueryUnbondingPeriodResponse(): QueryUnbondingPeriodResponse {
  return {
    time: undefined
  };
}

export const QueryUnbondingPeriodResponse = {
  encode(message: QueryUnbondingPeriodResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.time !== undefined) {
      Duration.encode(message.time, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnbondingPeriodResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnbondingPeriodResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.time = Duration.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryUnbondingPeriodResponse {
    return {
      time: isSet(object.time) ? Duration.fromJSON(object.time) : undefined
    };
  },

  toJSON(message: QueryUnbondingPeriodResponse): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = message.time);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryUnbondingPeriodResponse>): QueryUnbondingPeriodResponse {
    const message = createBaseQueryUnbondingPeriodResponse();
    message.time = object.time ?? undefined;
    return message;
  }

};

function createBaseQueryValidatorDelegationRequest(): QueryValidatorDelegationRequest {
  return {
    validatorAddr: ""
  };
}

export const QueryValidatorDelegationRequest = {
  encode(message: QueryValidatorDelegationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorDelegationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorDelegationRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryValidatorDelegationRequest {
    return {
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : ""
    };
  },

  toJSON(message: QueryValidatorDelegationRequest): unknown {
    const obj: any = {};
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryValidatorDelegationRequest>): QueryValidatorDelegationRequest {
    const message = createBaseQueryValidatorDelegationRequest();
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  }

};

function createBaseQueryValidatorDelegationResponse(): QueryValidatorDelegationResponse {
  return {
    balance: undefined
  };
}

export const QueryValidatorDelegationResponse = {
  encode(message: QueryValidatorDelegationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorDelegationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorDelegationResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.balance = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryValidatorDelegationResponse {
    return {
      balance: isSet(object.balance) ? Coin.fromJSON(object.balance) : undefined
    };
  },

  toJSON(message: QueryValidatorDelegationResponse): unknown {
    const obj: any = {};
    message.balance !== undefined && (obj.balance = message.balance ? Coin.toJSON(message.balance) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryValidatorDelegationResponse>): QueryValidatorDelegationResponse {
    const message = createBaseQueryValidatorDelegationResponse();
    message.balance = object.balance !== undefined && object.balance !== null ? Coin.fromPartial(object.balance) : undefined;
    return message;
  }

};

function createBaseQueryValidatorUnbondingDelegationsRequest(): QueryValidatorUnbondingDelegationsRequest {
  return {
    validatorAddr: "",
    pagination: undefined
  };
}

export const QueryValidatorUnbondingDelegationsRequest = {
  encode(message: QueryValidatorUnbondingDelegationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorUnbondingDelegationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorUnbondingDelegationsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
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

  fromJSON(object: any): QueryValidatorUnbondingDelegationsRequest {
    return {
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryValidatorUnbondingDelegationsRequest): unknown {
    const obj: any = {};
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryValidatorUnbondingDelegationsRequest>): QueryValidatorUnbondingDelegationsRequest {
    const message = createBaseQueryValidatorUnbondingDelegationsRequest();
    message.validatorAddr = object.validatorAddr ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryValidatorUnbondingDelegationsResponse(): QueryValidatorUnbondingDelegationsResponse {
  return {
    entries: [],
    pagination: undefined
  };
}

export const QueryValidatorUnbondingDelegationsResponse = {
  encode(message: QueryValidatorUnbondingDelegationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.entries) {
      UnbondingDelegationEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorUnbondingDelegationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorUnbondingDelegationsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.entries.push(UnbondingDelegationEntry.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryValidatorUnbondingDelegationsResponse {
    return {
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => UnbondingDelegationEntry.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryValidatorUnbondingDelegationsResponse): unknown {
    const obj: any = {};

    if (message.entries) {
      obj.entries = message.entries.map(e => e ? UnbondingDelegationEntry.toJSON(e) : undefined);
    } else {
      obj.entries = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryValidatorUnbondingDelegationsResponse>): QueryValidatorUnbondingDelegationsResponse {
    const message = createBaseQueryValidatorUnbondingDelegationsResponse();
    message.entries = object.entries?.map(e => UnbondingDelegationEntry.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryValidatorOutstandingRewardRequest(): QueryValidatorOutstandingRewardRequest {
  return {
    validatorAddress: ""
  };
}

export const QueryValidatorOutstandingRewardRequest = {
  encode(message: QueryValidatorOutstandingRewardRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorOutstandingRewardRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorOutstandingRewardRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryValidatorOutstandingRewardRequest {
    return {
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : ""
    };
  },

  toJSON(message: QueryValidatorOutstandingRewardRequest): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryValidatorOutstandingRewardRequest>): QueryValidatorOutstandingRewardRequest {
    const message = createBaseQueryValidatorOutstandingRewardRequest();
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  }

};

function createBaseQueryValidatorOutstandingRewardResponse(): QueryValidatorOutstandingRewardResponse {
  return {
    reward: undefined
  };
}

export const QueryValidatorOutstandingRewardResponse = {
  encode(message: QueryValidatorOutstandingRewardResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reward !== undefined) {
      DecCoin.encode(message.reward, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorOutstandingRewardResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorOutstandingRewardResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.reward = DecCoin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryValidatorOutstandingRewardResponse {
    return {
      reward: isSet(object.reward) ? DecCoin.fromJSON(object.reward) : undefined
    };
  },

  toJSON(message: QueryValidatorOutstandingRewardResponse): unknown {
    const obj: any = {};
    message.reward !== undefined && (obj.reward = message.reward ? DecCoin.toJSON(message.reward) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryValidatorOutstandingRewardResponse>): QueryValidatorOutstandingRewardResponse {
    const message = createBaseQueryValidatorOutstandingRewardResponse();
    message.reward = object.reward !== undefined && object.reward !== null ? DecCoin.fromPartial(object.reward) : undefined;
    return message;
  }

};

function createBaseQueryValidatorEngagementRewardRequest(): QueryValidatorEngagementRewardRequest {
  return {
    validatorAddress: ""
  };
}

export const QueryValidatorEngagementRewardRequest = {
  encode(message: QueryValidatorEngagementRewardRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorEngagementRewardRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorEngagementRewardRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryValidatorEngagementRewardRequest {
    return {
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : ""
    };
  },

  toJSON(message: QueryValidatorEngagementRewardRequest): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryValidatorEngagementRewardRequest>): QueryValidatorEngagementRewardRequest {
    const message = createBaseQueryValidatorEngagementRewardRequest();
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  }

};

function createBaseQueryValidatorEngagementRewardResponse(): QueryValidatorEngagementRewardResponse {
  return {
    reward: undefined
  };
}

export const QueryValidatorEngagementRewardResponse = {
  encode(message: QueryValidatorEngagementRewardResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reward !== undefined) {
      DecCoin.encode(message.reward, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorEngagementRewardResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorEngagementRewardResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.reward = DecCoin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryValidatorEngagementRewardResponse {
    return {
      reward: isSet(object.reward) ? DecCoin.fromJSON(object.reward) : undefined
    };
  },

  toJSON(message: QueryValidatorEngagementRewardResponse): unknown {
    const obj: any = {};
    message.reward !== undefined && (obj.reward = message.reward ? DecCoin.toJSON(message.reward) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryValidatorEngagementRewardResponse>): QueryValidatorEngagementRewardResponse {
    const message = createBaseQueryValidatorEngagementRewardResponse();
    message.reward = object.reward !== undefined && object.reward !== null ? DecCoin.fromPartial(object.reward) : undefined;
    return message;
  }

};