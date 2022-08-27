import { Params, Post, Like } from "./community";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, isObject } from "@osmonauts/helpers";
export interface GenesisState_FollowingEntry {
  key: string;
  value: AddressList;
}
export interface GenesisState {
  /** params defines all the paramaters of the module. */
  params: Params;
  posts: Post[];
  likes: Like[];
  following: {
    [key: string]: GenesisState_AddressList;
  };
}
export interface GenesisState_AddressList {
  address: string[];
}

function createBaseGenesisState_FollowingEntry(): GenesisState_FollowingEntry {
  return {
    key: "",
    value: undefined
  };
}

export const GenesisState_FollowingEntry = {
  encode(message: GenesisState_FollowingEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (message.value !== undefined) {
      AddressList.encode(message.value, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState_FollowingEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState_FollowingEntry();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;

        case 2:
          message.value = AddressList.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenesisState_FollowingEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? AddressList.fromJSON(object.value) : undefined
    };
  },

  toJSON(message: GenesisState_FollowingEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? AddressList.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState_FollowingEntry>): GenesisState_FollowingEntry {
    const message = createBaseGenesisState_FollowingEntry();
    message.key = object.key ?? "";
    message.value = object.value !== undefined && object.value !== null ? AddressList.fromPartial(object.value) : undefined;
    return message;
  }

};

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    posts: [],
    likes: [],
    following: {}
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.posts) {
      Post.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.likes) {
      Like.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    Object.entries(message.following).forEach(([key, value]) => {
      GenesisState_FollowingEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(34).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 2:
          message.posts.push(Post.decode(reader, reader.uint32()));
          break;

        case 3:
          message.likes.push(Like.decode(reader, reader.uint32()));
          break;

        case 4:
          const entry4 = GenesisState_FollowingEntry.decode(reader, reader.uint32());

          if (entry4.value !== undefined) {
            message.following[entry4.key] = entry4.value;
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      posts: Array.isArray(object?.posts) ? object.posts.map((e: any) => Post.fromJSON(e)) : [],
      likes: Array.isArray(object?.likes) ? object.likes.map((e: any) => Like.fromJSON(e)) : [],
      following: isObject(object.following) ? Object.entries(object.following).reduce<{
        [key: string]: AddressList;
      }>((acc, [key, value]) => {
        acc[key] = AddressList.fromJSON(value);
        return acc;
      }, {}) : {}
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);

    if (message.posts) {
      obj.posts = message.posts.map(e => e ? Post.toJSON(e) : undefined);
    } else {
      obj.posts = [];
    }

    if (message.likes) {
      obj.likes = message.likes.map(e => e ? Like.toJSON(e) : undefined);
    } else {
      obj.likes = [];
    }

    obj.following = {};

    if (message.following) {
      Object.entries(message.following).forEach(([k, v]) => {
        obj.following[k] = AddressList.toJSON(v);
      });
    }

    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.posts = object.posts?.map(e => Post.fromPartial(e)) || [];
    message.likes = object.likes?.map(e => Like.fromPartial(e)) || [];
    message.following = Object.entries(object.following ?? {}).reduce<{
      [key: string]: AddressList;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = AddressList.fromPartial(value);
      }

      return acc;
    }, {});
    return message;
  }

};

function createBaseGenesisState_AddressList(): GenesisState_AddressList {
  return {
    address: []
  };
}

export const GenesisState_AddressList = {
  encode(message: GenesisState_AddressList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.address) {
      writer.uint32(10).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState_AddressList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState_AddressList();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenesisState_AddressList {
    return {
      address: Array.isArray(object?.address) ? object.address.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: GenesisState_AddressList): unknown {
    const obj: any = {};

    if (message.address) {
      obj.address = message.address.map(e => e);
    } else {
      obj.address = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState_AddressList>): GenesisState_AddressList {
    const message = createBaseGenesisState_AddressList();
    message.address = object.address?.map(e => e) || [];
    return message;
  }

};