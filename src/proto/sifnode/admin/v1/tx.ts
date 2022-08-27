import { AdminAccount } from "./types";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";
export interface MsgAddAccount {
  signer: string;
  account: AdminAccount;
}
export interface MsgAddAccountResponse {}
export interface MsgRemoveAccount {
  signer: string;
  account: AdminAccount;
}
export interface MsgRemoveAccountResponse {}

function createBaseMsgAddAccount(): MsgAddAccount {
  return {
    signer: "",
    account: undefined
  };
}

export const MsgAddAccount = {
  encode(message: MsgAddAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }

    if (message.account !== undefined) {
      AdminAccount.encode(message.account, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddAccount();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;

        case 2:
          message.account = AdminAccount.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgAddAccount {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      account: isSet(object.account) ? AdminAccount.fromJSON(object.account) : undefined
    };
  },

  toJSON(message: MsgAddAccount): unknown {
    const obj: any = {};
    message.signer !== undefined && (obj.signer = message.signer);
    message.account !== undefined && (obj.account = message.account ? AdminAccount.toJSON(message.account) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddAccount>): MsgAddAccount {
    const message = createBaseMsgAddAccount();
    message.signer = object.signer ?? "";
    message.account = object.account !== undefined && object.account !== null ? AdminAccount.fromPartial(object.account) : undefined;
    return message;
  }

};

function createBaseMsgAddAccountResponse(): MsgAddAccountResponse {
  return {};
}

export const MsgAddAccountResponse = {
  encode(_: MsgAddAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddAccountResponse();

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

  fromJSON(_: any): MsgAddAccountResponse {
    return {};
  },

  toJSON(_: MsgAddAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgAddAccountResponse>): MsgAddAccountResponse {
    const message = createBaseMsgAddAccountResponse();
    return message;
  }

};

function createBaseMsgRemoveAccount(): MsgRemoveAccount {
  return {
    signer: "",
    account: undefined
  };
}

export const MsgRemoveAccount = {
  encode(message: MsgRemoveAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }

    if (message.account !== undefined) {
      AdminAccount.encode(message.account, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveAccount();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;

        case 2:
          message.account = AdminAccount.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgRemoveAccount {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      account: isSet(object.account) ? AdminAccount.fromJSON(object.account) : undefined
    };
  },

  toJSON(message: MsgRemoveAccount): unknown {
    const obj: any = {};
    message.signer !== undefined && (obj.signer = message.signer);
    message.account !== undefined && (obj.account = message.account ? AdminAccount.toJSON(message.account) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRemoveAccount>): MsgRemoveAccount {
    const message = createBaseMsgRemoveAccount();
    message.signer = object.signer ?? "";
    message.account = object.account !== undefined && object.account !== null ? AdminAccount.fromPartial(object.account) : undefined;
    return message;
  }

};

function createBaseMsgRemoveAccountResponse(): MsgRemoveAccountResponse {
  return {};
}

export const MsgRemoveAccountResponse = {
  encode(_: MsgRemoveAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveAccountResponse();

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

  fromJSON(_: any): MsgRemoveAccountResponse {
    return {};
  },

  toJSON(_: MsgRemoveAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgRemoveAccountResponse>): MsgRemoveAccountResponse {
    const message = createBaseMsgRemoveAccountResponse();
    return message;
  }

};