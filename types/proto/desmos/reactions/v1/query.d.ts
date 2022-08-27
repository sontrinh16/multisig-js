import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Reaction, RegisteredReaction, SubspaceReactionsParams } from "./models";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** QueryReactionsRequest is the request type for the Query/Reactions RPC method */
export interface QueryReactionsRequest {
    /** Id of the subspace that contains the post to query the reactions for */
    subspaceId: Long;
    /** Post id to query the reactions for */
    postId: Long;
    /**
     * (optional) User to query the reactions for.
     * This is going to be used only if a post id is specified as well.
     */
    user: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/**
 * QueryReactionsResponse is the response type for the Query/Reactions RPC
 * method
 */
export interface QueryReactionsResponse {
    reactions: Reaction[];
    pagination: PageResponse;
}
/**
 * QueryReactionRequest is the request type for the Query/ReactionRequest RPC
 * method
 */
export interface QueryReactionRequest {
    /** Id of the subspace that contains the post to query the reactions for */
    subspaceId: Long;
    /** Post id to query the reactions for */
    postId: Long;
    /** Id of the reaction to query */
    reactionId: number;
}
/**
 * QueryReactionResponse is the response type for the Query/Reaction RPC
 * method
 */
export interface QueryReactionResponse {
    reaction: Reaction;
}
/**
 * QueryRegisteredReactionsRequest is the request type for the
 * Query/RegisteredReactions RPC method
 */
export interface QueryRegisteredReactionsRequest {
    /** Id of the subspace to query the registered reactions for */
    subspaceId: Long;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/**
 * QueryRegisteredReactionsResponse is the response type for the
 * Query/RegisteredReactions RPC method
 */
export interface QueryRegisteredReactionsResponse {
    registeredReactions: RegisteredReaction[];
    pagination: PageResponse;
}
/**
 * QueryRegisteredReactionRequest is the request type for the
 * Query/RegisteredReaction RPC method
 */
export interface QueryRegisteredReactionRequest {
    /** Id of the subspace to query the registered reactions for */
    subspaceId: Long;
    /** Id of the registered reaction to query for */
    reactionId: number;
}
/**
 * QueryRegisteredReactionResponse is the response type for the
 * Query/RegisteredReaction RPC method
 */
export interface QueryRegisteredReactionResponse {
    registeredReaction: RegisteredReaction;
}
/**
 * QueryReactionsParamsRequest is the request type for the Query/ReactionsParams
 * RPC method
 */
export interface QueryReactionsParamsRequest {
    /** Id of the subspace for which to query the params */
    subspaceId: Long;
}
/**
 * QueryReactionsParamsResponse is the response type for the
 * Query/ReactionsParam RPC method
 */
export interface QueryReactionsParamsResponse {
    params: SubspaceReactionsParams;
}
export declare const QueryReactionsRequest: {
    encode(message: QueryReactionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryReactionsRequest;
    fromJSON(object: any): QueryReactionsRequest;
    toJSON(message: QueryReactionsRequest): unknown;
    fromPartial(object: DeepPartial<QueryReactionsRequest>): QueryReactionsRequest;
};
export declare const QueryReactionsResponse: {
    encode(message: QueryReactionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryReactionsResponse;
    fromJSON(object: any): QueryReactionsResponse;
    toJSON(message: QueryReactionsResponse): unknown;
    fromPartial(object: DeepPartial<QueryReactionsResponse>): QueryReactionsResponse;
};
export declare const QueryReactionRequest: {
    encode(message: QueryReactionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryReactionRequest;
    fromJSON(object: any): QueryReactionRequest;
    toJSON(message: QueryReactionRequest): unknown;
    fromPartial(object: DeepPartial<QueryReactionRequest>): QueryReactionRequest;
};
export declare const QueryReactionResponse: {
    encode(message: QueryReactionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryReactionResponse;
    fromJSON(object: any): QueryReactionResponse;
    toJSON(message: QueryReactionResponse): unknown;
    fromPartial(object: DeepPartial<QueryReactionResponse>): QueryReactionResponse;
};
export declare const QueryRegisteredReactionsRequest: {
    encode(message: QueryRegisteredReactionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRegisteredReactionsRequest;
    fromJSON(object: any): QueryRegisteredReactionsRequest;
    toJSON(message: QueryRegisteredReactionsRequest): unknown;
    fromPartial(object: DeepPartial<QueryRegisteredReactionsRequest>): QueryRegisteredReactionsRequest;
};
export declare const QueryRegisteredReactionsResponse: {
    encode(message: QueryRegisteredReactionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRegisteredReactionsResponse;
    fromJSON(object: any): QueryRegisteredReactionsResponse;
    toJSON(message: QueryRegisteredReactionsResponse): unknown;
    fromPartial(object: DeepPartial<QueryRegisteredReactionsResponse>): QueryRegisteredReactionsResponse;
};
export declare const QueryRegisteredReactionRequest: {
    encode(message: QueryRegisteredReactionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRegisteredReactionRequest;
    fromJSON(object: any): QueryRegisteredReactionRequest;
    toJSON(message: QueryRegisteredReactionRequest): unknown;
    fromPartial(object: DeepPartial<QueryRegisteredReactionRequest>): QueryRegisteredReactionRequest;
};
export declare const QueryRegisteredReactionResponse: {
    encode(message: QueryRegisteredReactionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRegisteredReactionResponse;
    fromJSON(object: any): QueryRegisteredReactionResponse;
    toJSON(message: QueryRegisteredReactionResponse): unknown;
    fromPartial(object: DeepPartial<QueryRegisteredReactionResponse>): QueryRegisteredReactionResponse;
};
export declare const QueryReactionsParamsRequest: {
    encode(message: QueryReactionsParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryReactionsParamsRequest;
    fromJSON(object: any): QueryReactionsParamsRequest;
    toJSON(message: QueryReactionsParamsRequest): unknown;
    fromPartial(object: DeepPartial<QueryReactionsParamsRequest>): QueryReactionsParamsRequest;
};
export declare const QueryReactionsParamsResponse: {
    encode(message: QueryReactionsParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryReactionsParamsResponse;
    fromJSON(object: any): QueryReactionsParamsResponse;
    toJSON(message: QueryReactionsParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryReactionsParamsResponse>): QueryReactionsParamsResponse;
};
