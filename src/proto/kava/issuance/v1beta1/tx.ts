import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";

/** MsgIssueTokens represents a message used by the issuer to issue new tokens */
export interface MsgIssueTokens {
  sender: string;
  tokens: Coin;
  receiver: string;
}

/** MsgIssueTokensResponse defines the Msg/IssueTokens response type. */
export interface MsgIssueTokensResponse {}

/** MsgRedeemTokens represents a message used by the issuer to redeem (burn) tokens */
export interface MsgRedeemTokens {
  sender: string;
  tokens: Coin;
}

/** MsgRedeemTokensResponse defines the Msg/RedeemTokens response type. */
export interface MsgRedeemTokensResponse {}

/** MsgBlockAddress represents a message used by the issuer to block an address from holding or transferring tokens */
export interface MsgBlockAddress {
  sender: string;
  denom: string;
  blockedAddress: string;
}

/** MsgBlockAddressResponse defines the Msg/BlockAddress response type. */
export interface MsgBlockAddressResponse {}

/** MsgUnblockAddress message type used by the issuer to unblock an address from holding or transferring tokens */
export interface MsgUnblockAddress {
  sender: string;
  denom: string;
  blockedAddress: string;
}

/** MsgUnblockAddressResponse defines the Msg/UnblockAddress response type. */
export interface MsgUnblockAddressResponse {}

/** MsgSetPauseStatus message type used by the issuer to pause or unpause status */
export interface MsgSetPauseStatus {
  sender: string;
  denom: string;
  status: boolean;
}

/** MsgSetPauseStatusResponse defines the Msg/SetPauseStatus response type. */
export interface MsgSetPauseStatusResponse {}

function createBaseMsgIssueTokens(): MsgIssueTokens {
  return {
    sender: "",
    tokens: undefined,
    receiver: ""
  };
}

export const MsgIssueTokens = {
  encode(message: MsgIssueTokens, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.tokens !== undefined) {
      Coin.encode(message.tokens, writer.uint32(18).fork()).ldelim();
    }

    if (message.receiver !== "") {
      writer.uint32(26).string(message.receiver);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIssueTokens {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIssueTokens();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.tokens = Coin.decode(reader, reader.uint32());
          break;

        case 3:
          message.receiver = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgIssueTokens {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      tokens: isSet(object.tokens) ? Coin.fromJSON(object.tokens) : undefined,
      receiver: isSet(object.receiver) ? String(object.receiver) : ""
    };
  },

  toJSON(message: MsgIssueTokens): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.tokens !== undefined && (obj.tokens = message.tokens ? Coin.toJSON(message.tokens) : undefined);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgIssueTokens>): MsgIssueTokens {
    const message = createBaseMsgIssueTokens();
    message.sender = object.sender ?? "";
    message.tokens = object.tokens !== undefined && object.tokens !== null ? Coin.fromPartial(object.tokens) : undefined;
    message.receiver = object.receiver ?? "";
    return message;
  }

};

function createBaseMsgIssueTokensResponse(): MsgIssueTokensResponse {
  return {};
}

export const MsgIssueTokensResponse = {
  encode(_: MsgIssueTokensResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIssueTokensResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIssueTokensResponse();

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

  fromJSON(_: any): MsgIssueTokensResponse {
    return {};
  },

  toJSON(_: MsgIssueTokensResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgIssueTokensResponse>): MsgIssueTokensResponse {
    const message = createBaseMsgIssueTokensResponse();
    return message;
  }

};

function createBaseMsgRedeemTokens(): MsgRedeemTokens {
  return {
    sender: "",
    tokens: undefined
  };
}

export const MsgRedeemTokens = {
  encode(message: MsgRedeemTokens, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.tokens !== undefined) {
      Coin.encode(message.tokens, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedeemTokens {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedeemTokens();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.tokens = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgRedeemTokens {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      tokens: isSet(object.tokens) ? Coin.fromJSON(object.tokens) : undefined
    };
  },

  toJSON(message: MsgRedeemTokens): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.tokens !== undefined && (obj.tokens = message.tokens ? Coin.toJSON(message.tokens) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRedeemTokens>): MsgRedeemTokens {
    const message = createBaseMsgRedeemTokens();
    message.sender = object.sender ?? "";
    message.tokens = object.tokens !== undefined && object.tokens !== null ? Coin.fromPartial(object.tokens) : undefined;
    return message;
  }

};

function createBaseMsgRedeemTokensResponse(): MsgRedeemTokensResponse {
  return {};
}

export const MsgRedeemTokensResponse = {
  encode(_: MsgRedeemTokensResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedeemTokensResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedeemTokensResponse();

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

  fromJSON(_: any): MsgRedeemTokensResponse {
    return {};
  },

  toJSON(_: MsgRedeemTokensResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgRedeemTokensResponse>): MsgRedeemTokensResponse {
    const message = createBaseMsgRedeemTokensResponse();
    return message;
  }

};

function createBaseMsgBlockAddress(): MsgBlockAddress {
  return {
    sender: "",
    denom: "",
    blockedAddress: ""
  };
}

export const MsgBlockAddress = {
  encode(message: MsgBlockAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    if (message.blockedAddress !== "") {
      writer.uint32(26).string(message.blockedAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBlockAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBlockAddress();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.denom = reader.string();
          break;

        case 3:
          message.blockedAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgBlockAddress {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      blockedAddress: isSet(object.blockedAddress) ? String(object.blockedAddress) : ""
    };
  },

  toJSON(message: MsgBlockAddress): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.denom !== undefined && (obj.denom = message.denom);
    message.blockedAddress !== undefined && (obj.blockedAddress = message.blockedAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgBlockAddress>): MsgBlockAddress {
    const message = createBaseMsgBlockAddress();
    message.sender = object.sender ?? "";
    message.denom = object.denom ?? "";
    message.blockedAddress = object.blockedAddress ?? "";
    return message;
  }

};

function createBaseMsgBlockAddressResponse(): MsgBlockAddressResponse {
  return {};
}

export const MsgBlockAddressResponse = {
  encode(_: MsgBlockAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBlockAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBlockAddressResponse();

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

  fromJSON(_: any): MsgBlockAddressResponse {
    return {};
  },

  toJSON(_: MsgBlockAddressResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgBlockAddressResponse>): MsgBlockAddressResponse {
    const message = createBaseMsgBlockAddressResponse();
    return message;
  }

};

function createBaseMsgUnblockAddress(): MsgUnblockAddress {
  return {
    sender: "",
    denom: "",
    blockedAddress: ""
  };
}

export const MsgUnblockAddress = {
  encode(message: MsgUnblockAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    if (message.blockedAddress !== "") {
      writer.uint32(26).string(message.blockedAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnblockAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnblockAddress();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.denom = reader.string();
          break;

        case 3:
          message.blockedAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUnblockAddress {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      blockedAddress: isSet(object.blockedAddress) ? String(object.blockedAddress) : ""
    };
  },

  toJSON(message: MsgUnblockAddress): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.denom !== undefined && (obj.denom = message.denom);
    message.blockedAddress !== undefined && (obj.blockedAddress = message.blockedAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUnblockAddress>): MsgUnblockAddress {
    const message = createBaseMsgUnblockAddress();
    message.sender = object.sender ?? "";
    message.denom = object.denom ?? "";
    message.blockedAddress = object.blockedAddress ?? "";
    return message;
  }

};

function createBaseMsgUnblockAddressResponse(): MsgUnblockAddressResponse {
  return {};
}

export const MsgUnblockAddressResponse = {
  encode(_: MsgUnblockAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnblockAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnblockAddressResponse();

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

  fromJSON(_: any): MsgUnblockAddressResponse {
    return {};
  },

  toJSON(_: MsgUnblockAddressResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUnblockAddressResponse>): MsgUnblockAddressResponse {
    const message = createBaseMsgUnblockAddressResponse();
    return message;
  }

};

function createBaseMsgSetPauseStatus(): MsgSetPauseStatus {
  return {
    sender: "",
    denom: "",
    status: false
  };
}

export const MsgSetPauseStatus = {
  encode(message: MsgSetPauseStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    if (message.status === true) {
      writer.uint32(24).bool(message.status);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetPauseStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetPauseStatus();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.denom = reader.string();
          break;

        case 3:
          message.status = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgSetPauseStatus {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      status: isSet(object.status) ? Boolean(object.status) : false
    };
  },

  toJSON(message: MsgSetPauseStatus): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.denom !== undefined && (obj.denom = message.denom);
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSetPauseStatus>): MsgSetPauseStatus {
    const message = createBaseMsgSetPauseStatus();
    message.sender = object.sender ?? "";
    message.denom = object.denom ?? "";
    message.status = object.status ?? false;
    return message;
  }

};

function createBaseMsgSetPauseStatusResponse(): MsgSetPauseStatusResponse {
  return {};
}

export const MsgSetPauseStatusResponse = {
  encode(_: MsgSetPauseStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetPauseStatusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetPauseStatusResponse();

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

  fromJSON(_: any): MsgSetPauseStatusResponse {
    return {};
  },

  toJSON(_: MsgSetPauseStatusResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgSetPauseStatusResponse>): MsgSetPauseStatusResponse {
    const message = createBaseMsgSetPauseStatusResponse();
    return message;
  }

};