import * as _m0 from "protobufjs/minimal";
import { DeepPartial, isSet } from "@osmonauts/helpers";
export interface QueryParamsRequest {}
export interface QueryParamsResponse {
  europeanOptions: boolean;
  commissionCreatePerunit: string;
  commissionTradeFixed: string;
  commissionUpdatePerunit: string;
  commissionSettleFixed: string;
  commissionCancelPerunit: string;
  settleIncentive: string;
  freezeTime: number;
  mintDenom: string;
  mintRewardCreatePerunit: string;
  mintRewardUpdatePerunit: string;
  mintRewardTradeFixed: string;
  mintRewardSettleFixed: string;
  cancelSlashRate: string;
  backingDenom: string;
  backingRatio: string;
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
    europeanOptions: false,
    commissionCreatePerunit: "",
    commissionTradeFixed: "",
    commissionUpdatePerunit: "",
    commissionSettleFixed: "",
    commissionCancelPerunit: "",
    settleIncentive: "",
    freezeTime: 0,
    mintDenom: "",
    mintRewardCreatePerunit: "",
    mintRewardUpdatePerunit: "",
    mintRewardTradeFixed: "",
    mintRewardSettleFixed: "",
    cancelSlashRate: "",
    backingDenom: "",
    backingRatio: ""
  };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.europeanOptions === true) {
      writer.uint32(8).bool(message.europeanOptions);
    }

    if (message.commissionCreatePerunit !== "") {
      writer.uint32(18).string(message.commissionCreatePerunit);
    }

    if (message.commissionTradeFixed !== "") {
      writer.uint32(26).string(message.commissionTradeFixed);
    }

    if (message.commissionUpdatePerunit !== "") {
      writer.uint32(34).string(message.commissionUpdatePerunit);
    }

    if (message.commissionSettleFixed !== "") {
      writer.uint32(42).string(message.commissionSettleFixed);
    }

    if (message.commissionCancelPerunit !== "") {
      writer.uint32(50).string(message.commissionCancelPerunit);
    }

    if (message.settleIncentive !== "") {
      writer.uint32(58).string(message.settleIncentive);
    }

    if (message.freezeTime !== 0) {
      writer.uint32(64).int32(message.freezeTime);
    }

    if (message.mintDenom !== "") {
      writer.uint32(74).string(message.mintDenom);
    }

    if (message.mintRewardCreatePerunit !== "") {
      writer.uint32(82).string(message.mintRewardCreatePerunit);
    }

    if (message.mintRewardUpdatePerunit !== "") {
      writer.uint32(90).string(message.mintRewardUpdatePerunit);
    }

    if (message.mintRewardTradeFixed !== "") {
      writer.uint32(98).string(message.mintRewardTradeFixed);
    }

    if (message.mintRewardSettleFixed !== "") {
      writer.uint32(106).string(message.mintRewardSettleFixed);
    }

    if (message.cancelSlashRate !== "") {
      writer.uint32(114).string(message.cancelSlashRate);
    }

    if (message.backingDenom !== "") {
      writer.uint32(122).string(message.backingDenom);
    }

    if (message.backingRatio !== "") {
      writer.uint32(130).string(message.backingRatio);
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
          message.europeanOptions = reader.bool();
          break;

        case 2:
          message.commissionCreatePerunit = reader.string();
          break;

        case 3:
          message.commissionTradeFixed = reader.string();
          break;

        case 4:
          message.commissionUpdatePerunit = reader.string();
          break;

        case 5:
          message.commissionSettleFixed = reader.string();
          break;

        case 6:
          message.commissionCancelPerunit = reader.string();
          break;

        case 7:
          message.settleIncentive = reader.string();
          break;

        case 8:
          message.freezeTime = reader.int32();
          break;

        case 9:
          message.mintDenom = reader.string();
          break;

        case 10:
          message.mintRewardCreatePerunit = reader.string();
          break;

        case 11:
          message.mintRewardUpdatePerunit = reader.string();
          break;

        case 12:
          message.mintRewardTradeFixed = reader.string();
          break;

        case 13:
          message.mintRewardSettleFixed = reader.string();
          break;

        case 14:
          message.cancelSlashRate = reader.string();
          break;

        case 15:
          message.backingDenom = reader.string();
          break;

        case 16:
          message.backingRatio = reader.string();
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
      europeanOptions: isSet(object.europeanOptions) ? Boolean(object.europeanOptions) : false,
      commissionCreatePerunit: isSet(object.commissionCreatePerunit) ? String(object.commissionCreatePerunit) : "",
      commissionTradeFixed: isSet(object.commissionTradeFixed) ? String(object.commissionTradeFixed) : "",
      commissionUpdatePerunit: isSet(object.commissionUpdatePerunit) ? String(object.commissionUpdatePerunit) : "",
      commissionSettleFixed: isSet(object.commissionSettleFixed) ? String(object.commissionSettleFixed) : "",
      commissionCancelPerunit: isSet(object.commissionCancelPerunit) ? String(object.commissionCancelPerunit) : "",
      settleIncentive: isSet(object.settleIncentive) ? String(object.settleIncentive) : "",
      freezeTime: isSet(object.freezeTime) ? Number(object.freezeTime) : 0,
      mintDenom: isSet(object.mintDenom) ? String(object.mintDenom) : "",
      mintRewardCreatePerunit: isSet(object.mintRewardCreatePerunit) ? String(object.mintRewardCreatePerunit) : "",
      mintRewardUpdatePerunit: isSet(object.mintRewardUpdatePerunit) ? String(object.mintRewardUpdatePerunit) : "",
      mintRewardTradeFixed: isSet(object.mintRewardTradeFixed) ? String(object.mintRewardTradeFixed) : "",
      mintRewardSettleFixed: isSet(object.mintRewardSettleFixed) ? String(object.mintRewardSettleFixed) : "",
      cancelSlashRate: isSet(object.cancelSlashRate) ? String(object.cancelSlashRate) : "",
      backingDenom: isSet(object.backingDenom) ? String(object.backingDenom) : "",
      backingRatio: isSet(object.backingRatio) ? String(object.backingRatio) : ""
    };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.europeanOptions !== undefined && (obj.europeanOptions = message.europeanOptions);
    message.commissionCreatePerunit !== undefined && (obj.commissionCreatePerunit = message.commissionCreatePerunit);
    message.commissionTradeFixed !== undefined && (obj.commissionTradeFixed = message.commissionTradeFixed);
    message.commissionUpdatePerunit !== undefined && (obj.commissionUpdatePerunit = message.commissionUpdatePerunit);
    message.commissionSettleFixed !== undefined && (obj.commissionSettleFixed = message.commissionSettleFixed);
    message.commissionCancelPerunit !== undefined && (obj.commissionCancelPerunit = message.commissionCancelPerunit);
    message.settleIncentive !== undefined && (obj.settleIncentive = message.settleIncentive);
    message.freezeTime !== undefined && (obj.freezeTime = Math.round(message.freezeTime));
    message.mintDenom !== undefined && (obj.mintDenom = message.mintDenom);
    message.mintRewardCreatePerunit !== undefined && (obj.mintRewardCreatePerunit = message.mintRewardCreatePerunit);
    message.mintRewardUpdatePerunit !== undefined && (obj.mintRewardUpdatePerunit = message.mintRewardUpdatePerunit);
    message.mintRewardTradeFixed !== undefined && (obj.mintRewardTradeFixed = message.mintRewardTradeFixed);
    message.mintRewardSettleFixed !== undefined && (obj.mintRewardSettleFixed = message.mintRewardSettleFixed);
    message.cancelSlashRate !== undefined && (obj.cancelSlashRate = message.cancelSlashRate);
    message.backingDenom !== undefined && (obj.backingDenom = message.backingDenom);
    message.backingRatio !== undefined && (obj.backingRatio = message.backingRatio);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.europeanOptions = object.europeanOptions ?? false;
    message.commissionCreatePerunit = object.commissionCreatePerunit ?? "";
    message.commissionTradeFixed = object.commissionTradeFixed ?? "";
    message.commissionUpdatePerunit = object.commissionUpdatePerunit ?? "";
    message.commissionSettleFixed = object.commissionSettleFixed ?? "";
    message.commissionCancelPerunit = object.commissionCancelPerunit ?? "";
    message.settleIncentive = object.settleIncentive ?? "";
    message.freezeTime = object.freezeTime ?? 0;
    message.mintDenom = object.mintDenom ?? "";
    message.mintRewardCreatePerunit = object.mintRewardCreatePerunit ?? "";
    message.mintRewardUpdatePerunit = object.mintRewardUpdatePerunit ?? "";
    message.mintRewardTradeFixed = object.mintRewardTradeFixed ?? "";
    message.mintRewardSettleFixed = object.mintRewardSettleFixed ?? "";
    message.cancelSlashRate = object.cancelSlashRate ?? "";
    message.backingDenom = object.backingDenom ?? "";
    message.backingRatio = object.backingRatio ?? "";
    return message;
  }

};