import { DecProto } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";
export interface BalanceRequest {
  address: string;
}
export interface BalanceResponse {
  balance: DecProto;
}

function createBaseBalanceRequest(): BalanceRequest {
  return {
    address: ""
  };
}

export const BalanceRequest = {
  encode(message: BalanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BalanceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBalanceRequest();

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

  fromJSON(object: any): BalanceRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },

  toJSON(message: BalanceRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<BalanceRequest>): BalanceRequest {
    const message = createBaseBalanceRequest();
    message.address = object.address ?? "";
    return message;
  }

};

function createBaseBalanceResponse(): BalanceResponse {
  return {
    balance: undefined
  };
}

export const BalanceResponse = {
  encode(message: BalanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.balance !== undefined) {
      DecProto.encode(message.balance, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BalanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBalanceResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.balance = DecProto.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): BalanceResponse {
    return {
      balance: isSet(object.balance) ? DecProto.fromJSON(object.balance) : undefined
    };
  },

  toJSON(message: BalanceResponse): unknown {
    const obj: any = {};
    message.balance !== undefined && (obj.balance = message.balance ? DecProto.toJSON(message.balance) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<BalanceResponse>): BalanceResponse {
    const message = createBaseBalanceResponse();
    message.balance = object.balance !== undefined && object.balance !== null ? DecProto.fromPartial(object.balance) : undefined;
    return message;
  }

};