import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Post } from "./community";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface GetPostRequest {
    postOwner: string;
    postUuid: string;
}
export interface GetPostResponse {
    post: Post;
}
export interface ListUserPostsRequest {
    owner: string;
    pagination: PageRequest;
}
export interface ListUserPostsResponse {
    posts: Post[];
    pagination: PageResponse;
}
export interface ModeratorsRequest {
}
export interface ModeratorsResponse {
    moderators: string[];
}
export interface ListFollowedRequest {
    owner: string;
    pagination: PageRequest;
}
export interface ListFollowedResponse {
    followed: string[];
    pagination: PageResponse;
}
export declare const GetPostRequest: {
    encode(message: GetPostRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetPostRequest;
    fromJSON(object: any): GetPostRequest;
    toJSON(message: GetPostRequest): unknown;
    fromPartial(object: DeepPartial<GetPostRequest>): GetPostRequest;
};
export declare const GetPostResponse: {
    encode(message: GetPostResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetPostResponse;
    fromJSON(object: any): GetPostResponse;
    toJSON(message: GetPostResponse): unknown;
    fromPartial(object: DeepPartial<GetPostResponse>): GetPostResponse;
};
export declare const ListUserPostsRequest: {
    encode(message: ListUserPostsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListUserPostsRequest;
    fromJSON(object: any): ListUserPostsRequest;
    toJSON(message: ListUserPostsRequest): unknown;
    fromPartial(object: DeepPartial<ListUserPostsRequest>): ListUserPostsRequest;
};
export declare const ListUserPostsResponse: {
    encode(message: ListUserPostsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListUserPostsResponse;
    fromJSON(object: any): ListUserPostsResponse;
    toJSON(message: ListUserPostsResponse): unknown;
    fromPartial(object: DeepPartial<ListUserPostsResponse>): ListUserPostsResponse;
};
export declare const ModeratorsRequest: {
    encode(_: ModeratorsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ModeratorsRequest;
    fromJSON(_: any): ModeratorsRequest;
    toJSON(_: ModeratorsRequest): unknown;
    fromPartial(_: DeepPartial<ModeratorsRequest>): ModeratorsRequest;
};
export declare const ModeratorsResponse: {
    encode(message: ModeratorsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ModeratorsResponse;
    fromJSON(object: any): ModeratorsResponse;
    toJSON(message: ModeratorsResponse): unknown;
    fromPartial(object: DeepPartial<ModeratorsResponse>): ModeratorsResponse;
};
export declare const ListFollowedRequest: {
    encode(message: ListFollowedRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListFollowedRequest;
    fromJSON(object: any): ListFollowedRequest;
    toJSON(message: ListFollowedRequest): unknown;
    fromPartial(object: DeepPartial<ListFollowedRequest>): ListFollowedRequest;
};
export declare const ListFollowedResponse: {
    encode(message: ListFollowedResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListFollowedResponse;
    fromJSON(object: any): ListFollowedResponse;
    toJSON(message: ListFollowedResponse): unknown;
    fromPartial(object: DeepPartial<ListFollowedResponse>): ListFollowedResponse;
};
