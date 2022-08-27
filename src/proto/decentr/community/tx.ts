import { Post, Like } from "./community";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";
export interface MsgCreatePost {
  post: Post;
}
export interface MsgCreatePostResponse {}
export interface MsgDeletePost {
  postOwner: string;
  postUuid: string;
  owner: string;
}
export interface MsgDeletePostResponse {}
export interface MsgSetLike {
  like: Like;
}
export interface MsgSetLikeResponse {}
export interface MsgFollow {
  owner: string;
  whom: string;
}
export interface MsgFollowResponse {}
export interface MsgUnfollow {
  owner: string;
  whom: string;
}
export interface MsgUnfollowResponse {}

function createBaseMsgCreatePost(): MsgCreatePost {
  return {
    post: undefined
  };
}

export const MsgCreatePost = {
  encode(message: MsgCreatePost, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.post !== undefined) {
      Post.encode(message.post, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePost {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePost();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.post = Post.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreatePost {
    return {
      post: isSet(object.post) ? Post.fromJSON(object.post) : undefined
    };
  },

  toJSON(message: MsgCreatePost): unknown {
    const obj: any = {};
    message.post !== undefined && (obj.post = message.post ? Post.toJSON(message.post) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreatePost>): MsgCreatePost {
    const message = createBaseMsgCreatePost();
    message.post = object.post !== undefined && object.post !== null ? Post.fromPartial(object.post) : undefined;
    return message;
  }

};

function createBaseMsgCreatePostResponse(): MsgCreatePostResponse {
  return {};
}

export const MsgCreatePostResponse = {
  encode(_: MsgCreatePostResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePostResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePostResponse();

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

  fromJSON(_: any): MsgCreatePostResponse {
    return {};
  },

  toJSON(_: MsgCreatePostResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreatePostResponse>): MsgCreatePostResponse {
    const message = createBaseMsgCreatePostResponse();
    return message;
  }

};

function createBaseMsgDeletePost(): MsgDeletePost {
  return {
    postOwner: "",
    postUuid: "",
    owner: ""
  };
}

export const MsgDeletePost = {
  encode(message: MsgDeletePost, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.postOwner !== "") {
      writer.uint32(10).string(message.postOwner);
    }

    if (message.postUuid !== "") {
      writer.uint32(18).string(message.postUuid);
    }

    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeletePost {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeletePost();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.postOwner = reader.string();
          break;

        case 2:
          message.postUuid = reader.string();
          break;

        case 3:
          message.owner = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgDeletePost {
    return {
      postOwner: isSet(object.postOwner) ? String(object.postOwner) : "",
      postUuid: isSet(object.postUuid) ? String(object.postUuid) : "",
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },

  toJSON(message: MsgDeletePost): unknown {
    const obj: any = {};
    message.postOwner !== undefined && (obj.postOwner = message.postOwner);
    message.postUuid !== undefined && (obj.postUuid = message.postUuid);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeletePost>): MsgDeletePost {
    const message = createBaseMsgDeletePost();
    message.postOwner = object.postOwner ?? "";
    message.postUuid = object.postUuid ?? "";
    message.owner = object.owner ?? "";
    return message;
  }

};

function createBaseMsgDeletePostResponse(): MsgDeletePostResponse {
  return {};
}

export const MsgDeletePostResponse = {
  encode(_: MsgDeletePostResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeletePostResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeletePostResponse();

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

  fromJSON(_: any): MsgDeletePostResponse {
    return {};
  },

  toJSON(_: MsgDeletePostResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeletePostResponse>): MsgDeletePostResponse {
    const message = createBaseMsgDeletePostResponse();
    return message;
  }

};

function createBaseMsgSetLike(): MsgSetLike {
  return {
    like: undefined
  };
}

export const MsgSetLike = {
  encode(message: MsgSetLike, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.like !== undefined) {
      Like.encode(message.like, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetLike {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetLike();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.like = Like.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgSetLike {
    return {
      like: isSet(object.like) ? Like.fromJSON(object.like) : undefined
    };
  },

  toJSON(message: MsgSetLike): unknown {
    const obj: any = {};
    message.like !== undefined && (obj.like = message.like ? Like.toJSON(message.like) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSetLike>): MsgSetLike {
    const message = createBaseMsgSetLike();
    message.like = object.like !== undefined && object.like !== null ? Like.fromPartial(object.like) : undefined;
    return message;
  }

};

function createBaseMsgSetLikeResponse(): MsgSetLikeResponse {
  return {};
}

export const MsgSetLikeResponse = {
  encode(_: MsgSetLikeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetLikeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetLikeResponse();

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

  fromJSON(_: any): MsgSetLikeResponse {
    return {};
  },

  toJSON(_: MsgSetLikeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgSetLikeResponse>): MsgSetLikeResponse {
    const message = createBaseMsgSetLikeResponse();
    return message;
  }

};

function createBaseMsgFollow(): MsgFollow {
  return {
    owner: "",
    whom: ""
  };
}

export const MsgFollow = {
  encode(message: MsgFollow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.whom !== "") {
      writer.uint32(18).string(message.whom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFollow {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFollow();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.whom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgFollow {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      whom: isSet(object.whom) ? String(object.whom) : ""
    };
  },

  toJSON(message: MsgFollow): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.whom !== undefined && (obj.whom = message.whom);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgFollow>): MsgFollow {
    const message = createBaseMsgFollow();
    message.owner = object.owner ?? "";
    message.whom = object.whom ?? "";
    return message;
  }

};

function createBaseMsgFollowResponse(): MsgFollowResponse {
  return {};
}

export const MsgFollowResponse = {
  encode(_: MsgFollowResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFollowResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFollowResponse();

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

  fromJSON(_: any): MsgFollowResponse {
    return {};
  },

  toJSON(_: MsgFollowResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgFollowResponse>): MsgFollowResponse {
    const message = createBaseMsgFollowResponse();
    return message;
  }

};

function createBaseMsgUnfollow(): MsgUnfollow {
  return {
    owner: "",
    whom: ""
  };
}

export const MsgUnfollow = {
  encode(message: MsgUnfollow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.whom !== "") {
      writer.uint32(18).string(message.whom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnfollow {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnfollow();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.whom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUnfollow {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      whom: isSet(object.whom) ? String(object.whom) : ""
    };
  },

  toJSON(message: MsgUnfollow): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.whom !== undefined && (obj.whom = message.whom);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUnfollow>): MsgUnfollow {
    const message = createBaseMsgUnfollow();
    message.owner = object.owner ?? "";
    message.whom = object.whom ?? "";
    return message;
  }

};

function createBaseMsgUnfollowResponse(): MsgUnfollowResponse {
  return {};
}

export const MsgUnfollowResponse = {
  encode(_: MsgUnfollowResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnfollowResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnfollowResponse();

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

  fromJSON(_: any): MsgUnfollowResponse {
    return {};
  },

  toJSON(_: MsgUnfollowResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUnfollowResponse>): MsgUnfollowResponse {
    const message = createBaseMsgUnfollowResponse();
    return message;
  }

};