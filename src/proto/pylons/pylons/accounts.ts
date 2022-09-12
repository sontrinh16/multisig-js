import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";
export interface UserMap {
  accountAddr: string;
  username: string;
}
export interface Username {
  value: string;
}
export interface AccountAddr {
  value: string;
}
export interface ReferralKV {
  address: string;
  users: RefereeSignup[];
}
export interface RefereeSignup {
  username: string;
  address: string;
}

function createBaseUserMap(): UserMap {
  return {
    accountAddr: "",
    username: ""
  };
}

export const UserMap = {
  encode(message: UserMap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountAddr !== "") {
      writer.uint32(10).string(message.accountAddr);
    }

    if (message.username !== "") {
      writer.uint32(18).string(message.username);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserMap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserMap();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.accountAddr = reader.string();
          break;

        case 2:
          message.username = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): UserMap {
    return {
      accountAddr: isSet(object.accountAddr) ? String(object.accountAddr) : "",
      username: isSet(object.username) ? String(object.username) : ""
    };
  },

  toJSON(message: UserMap): unknown {
    const obj: any = {};
    message.accountAddr !== undefined && (obj.accountAddr = message.accountAddr);
    message.username !== undefined && (obj.username = message.username);
    return obj;
  },

  fromPartial(object: DeepPartial<UserMap>): UserMap {
    const message = createBaseUserMap();
    message.accountAddr = object.accountAddr ?? "";
    message.username = object.username ?? "";
    return message;
  }

};

function createBaseUsername(): Username {
  return {
    value: ""
  };
}

export const Username = {
  encode(message: Username, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Username {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUsername();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.value = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Username {
    return {
      value: isSet(object.value) ? String(object.value) : ""
    };
  },

  toJSON(message: Username): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<Username>): Username {
    const message = createBaseUsername();
    message.value = object.value ?? "";
    return message;
  }

};

function createBaseAccountAddr(): AccountAddr {
  return {
    value: ""
  };
}

export const AccountAddr = {
  encode(message: AccountAddr, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountAddr {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountAddr();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 2:
          message.value = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AccountAddr {
    return {
      value: isSet(object.value) ? String(object.value) : ""
    };
  },

  toJSON(message: AccountAddr): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<AccountAddr>): AccountAddr {
    const message = createBaseAccountAddr();
    message.value = object.value ?? "";
    return message;
  }

};

function createBaseReferralKV(): ReferralKV {
  return {
    address: "",
    users: []
  };
}

export const ReferralKV = {
  encode(message: ReferralKV, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    for (const v of message.users) {
      RefereeSignup.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReferralKV {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReferralKV();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.users.push(RefereeSignup.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ReferralKV {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      users: Array.isArray(object?.users) ? object.users.map((e: any) => RefereeSignup.fromJSON(e)) : []
    };
  },

  toJSON(message: ReferralKV): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);

    if (message.users) {
      obj.users = message.users.map(e => e ? RefereeSignup.toJSON(e) : undefined);
    } else {
      obj.users = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<ReferralKV>): ReferralKV {
    const message = createBaseReferralKV();
    message.address = object.address ?? "";
    message.users = object.users?.map(e => RefereeSignup.fromPartial(e)) || [];
    return message;
  }

};

function createBaseRefereeSignup(): RefereeSignup {
  return {
    username: "",
    address: ""
  };
}

export const RefereeSignup = {
  encode(message: RefereeSignup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.username !== "") {
      writer.uint32(10).string(message.username);
    }

    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RefereeSignup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRefereeSignup();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.username = reader.string();
          break;

        case 2:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RefereeSignup {
    return {
      username: isSet(object.username) ? String(object.username) : "",
      address: isSet(object.address) ? String(object.address) : ""
    };
  },

  toJSON(message: RefereeSignup): unknown {
    const obj: any = {};
    message.username !== undefined && (obj.username = message.username);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<RefereeSignup>): RefereeSignup {
    const message = createBaseRefereeSignup();
    message.username = object.username ?? "";
    message.address = object.address ?? "";
    return message;
  }

};