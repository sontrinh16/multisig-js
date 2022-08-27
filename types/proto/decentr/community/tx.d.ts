import { Post, Like } from "./community";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface MsgCreatePost {
    post: Post;
}
export interface MsgCreatePostResponse {
}
export interface MsgDeletePost {
    postOwner: string;
    postUuid: string;
    owner: string;
}
export interface MsgDeletePostResponse {
}
export interface MsgSetLike {
    like: Like;
}
export interface MsgSetLikeResponse {
}
export interface MsgFollow {
    owner: string;
    whom: string;
}
export interface MsgFollowResponse {
}
export interface MsgUnfollow {
    owner: string;
    whom: string;
}
export interface MsgUnfollowResponse {
}
export declare const MsgCreatePost: {
    encode(message: MsgCreatePost, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePost;
    fromJSON(object: any): MsgCreatePost;
    toJSON(message: MsgCreatePost): unknown;
    fromPartial(object: DeepPartial<MsgCreatePost>): MsgCreatePost;
};
export declare const MsgCreatePostResponse: {
    encode(_: MsgCreatePostResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePostResponse;
    fromJSON(_: any): MsgCreatePostResponse;
    toJSON(_: MsgCreatePostResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreatePostResponse>): MsgCreatePostResponse;
};
export declare const MsgDeletePost: {
    encode(message: MsgDeletePost, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeletePost;
    fromJSON(object: any): MsgDeletePost;
    toJSON(message: MsgDeletePost): unknown;
    fromPartial(object: DeepPartial<MsgDeletePost>): MsgDeletePost;
};
export declare const MsgDeletePostResponse: {
    encode(_: MsgDeletePostResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeletePostResponse;
    fromJSON(_: any): MsgDeletePostResponse;
    toJSON(_: MsgDeletePostResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeletePostResponse>): MsgDeletePostResponse;
};
export declare const MsgSetLike: {
    encode(message: MsgSetLike, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetLike;
    fromJSON(object: any): MsgSetLike;
    toJSON(message: MsgSetLike): unknown;
    fromPartial(object: DeepPartial<MsgSetLike>): MsgSetLike;
};
export declare const MsgSetLikeResponse: {
    encode(_: MsgSetLikeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetLikeResponse;
    fromJSON(_: any): MsgSetLikeResponse;
    toJSON(_: MsgSetLikeResponse): unknown;
    fromPartial(_: DeepPartial<MsgSetLikeResponse>): MsgSetLikeResponse;
};
export declare const MsgFollow: {
    encode(message: MsgFollow, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgFollow;
    fromJSON(object: any): MsgFollow;
    toJSON(message: MsgFollow): unknown;
    fromPartial(object: DeepPartial<MsgFollow>): MsgFollow;
};
export declare const MsgFollowResponse: {
    encode(_: MsgFollowResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgFollowResponse;
    fromJSON(_: any): MsgFollowResponse;
    toJSON(_: MsgFollowResponse): unknown;
    fromPartial(_: DeepPartial<MsgFollowResponse>): MsgFollowResponse;
};
export declare const MsgUnfollow: {
    encode(message: MsgUnfollow, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnfollow;
    fromJSON(object: any): MsgUnfollow;
    toJSON(message: MsgUnfollow): unknown;
    fromPartial(object: DeepPartial<MsgUnfollow>): MsgUnfollow;
};
export declare const MsgUnfollowResponse: {
    encode(_: MsgUnfollowResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnfollowResponse;
    fromJSON(_: any): MsgUnfollowResponse;
    toJSON(_: MsgUnfollowResponse): unknown;
    fromPartial(_: DeepPartial<MsgUnfollowResponse>): MsgUnfollowResponse;
};
