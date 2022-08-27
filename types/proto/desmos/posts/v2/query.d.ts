import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Post, Attachment, UserAnswer, Params } from "./models";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/**
 * QuerySubspacePostsRequest is the request type for the Query/SubspacePosts RPC
 * method
 */
export interface QuerySubspacePostsRequest {
    /** Id of the subspace to query the posts for */
    subspaceId: Long;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/**
 * QuerySubspacePostsResponse is the response type for the Query/SubspacePosts
 * RPC method
 */
export interface QuerySubspacePostsResponse {
    posts: Post[];
    pagination: PageResponse;
}
/**
 * QuerySectionPostsRequest is the request type for the Query/SectionPosts RPC
 * method
 */
export interface QuerySectionPostsRequest {
    /** Id of the subspace to query the posts for */
    subspaceId: Long;
    /** Id of the section to query the posts for */
    sectionId: number;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/**
 * QuerySectionPostsResponse is the response type for the Query/SectionPosts RPC
 * method
 */
export interface QuerySectionPostsResponse {
    posts: Post[];
    pagination: PageResponse;
}
/** QueryPostRequest is the request type for the Query/Post RPC method */
export interface QueryPostRequest {
    /** Id of the subspace inside which the post lies */
    subspaceId: Long;
    /** Id of the post to query for */
    postId: Long;
}
/** QueryPostResponse is the response type for the Query/Post RPC method */
export interface QueryPostResponse {
    /** QueryPostResponse is the response type for the Query/Post RPC method */
    post: Post;
}
/**
 * QueryPostsRequest is the request type for the Query/PostAttachments RPC
 * method
 */
export interface QueryPostAttachmentsRequest {
    /** Id of the subspace where the post is stored */
    subspaceId: Long;
    /** Id of the post to query the attachments for */
    postId: Long;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/**
 * QueryPostAttachmentsResponse is the response type for the
 * Query/PostAttachments RPC method
 */
export interface QueryPostAttachmentsResponse {
    attachments: Attachment[];
    pagination: PageResponse;
}
/**
 * QueryPollAnswersRequest is the request type for the Query/PollAnswers RPC
 * method
 */
export interface QueryPollAnswersRequest {
    /** Id of the subspace where the post is stored */
    subspaceId: Long;
    /** Id of the post that holds the poll */
    postId: Long;
    /** Id of the poll to query the answers for */
    pollId: number;
    /** (Optional) Address of the user to query the responses for */
    user: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/**
 * QueryPollAnswersResponse is the response type for the Query/PollAnswers RPC
 * method
 */
export interface QueryPollAnswersResponse {
    answers: UserAnswer[];
    pagination: PageResponse;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method */
export interface QueryParamsResponse {
    params: Params;
}
export declare const QuerySubspacePostsRequest: {
    encode(message: QuerySubspacePostsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubspacePostsRequest;
    fromJSON(object: any): QuerySubspacePostsRequest;
    toJSON(message: QuerySubspacePostsRequest): unknown;
    fromPartial(object: DeepPartial<QuerySubspacePostsRequest>): QuerySubspacePostsRequest;
};
export declare const QuerySubspacePostsResponse: {
    encode(message: QuerySubspacePostsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubspacePostsResponse;
    fromJSON(object: any): QuerySubspacePostsResponse;
    toJSON(message: QuerySubspacePostsResponse): unknown;
    fromPartial(object: DeepPartial<QuerySubspacePostsResponse>): QuerySubspacePostsResponse;
};
export declare const QuerySectionPostsRequest: {
    encode(message: QuerySectionPostsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySectionPostsRequest;
    fromJSON(object: any): QuerySectionPostsRequest;
    toJSON(message: QuerySectionPostsRequest): unknown;
    fromPartial(object: DeepPartial<QuerySectionPostsRequest>): QuerySectionPostsRequest;
};
export declare const QuerySectionPostsResponse: {
    encode(message: QuerySectionPostsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySectionPostsResponse;
    fromJSON(object: any): QuerySectionPostsResponse;
    toJSON(message: QuerySectionPostsResponse): unknown;
    fromPartial(object: DeepPartial<QuerySectionPostsResponse>): QuerySectionPostsResponse;
};
export declare const QueryPostRequest: {
    encode(message: QueryPostRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPostRequest;
    fromJSON(object: any): QueryPostRequest;
    toJSON(message: QueryPostRequest): unknown;
    fromPartial(object: DeepPartial<QueryPostRequest>): QueryPostRequest;
};
export declare const QueryPostResponse: {
    encode(message: QueryPostResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPostResponse;
    fromJSON(object: any): QueryPostResponse;
    toJSON(message: QueryPostResponse): unknown;
    fromPartial(object: DeepPartial<QueryPostResponse>): QueryPostResponse;
};
export declare const QueryPostAttachmentsRequest: {
    encode(message: QueryPostAttachmentsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPostAttachmentsRequest;
    fromJSON(object: any): QueryPostAttachmentsRequest;
    toJSON(message: QueryPostAttachmentsRequest): unknown;
    fromPartial(object: DeepPartial<QueryPostAttachmentsRequest>): QueryPostAttachmentsRequest;
};
export declare const QueryPostAttachmentsResponse: {
    encode(message: QueryPostAttachmentsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPostAttachmentsResponse;
    fromJSON(object: any): QueryPostAttachmentsResponse;
    toJSON(message: QueryPostAttachmentsResponse): unknown;
    fromPartial(object: DeepPartial<QueryPostAttachmentsResponse>): QueryPostAttachmentsResponse;
};
export declare const QueryPollAnswersRequest: {
    encode(message: QueryPollAnswersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPollAnswersRequest;
    fromJSON(object: any): QueryPollAnswersRequest;
    toJSON(message: QueryPollAnswersRequest): unknown;
    fromPartial(object: DeepPartial<QueryPollAnswersRequest>): QueryPollAnswersRequest;
};
export declare const QueryPollAnswersResponse: {
    encode(message: QueryPollAnswersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPollAnswersResponse;
    fromJSON(object: any): QueryPollAnswersResponse;
    toJSON(message: QueryPollAnswersResponse): unknown;
    fromPartial(object: DeepPartial<QueryPollAnswersResponse>): QueryPollAnswersResponse;
};
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
