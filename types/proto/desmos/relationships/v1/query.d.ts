import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Relationship, UserBlock } from "./models";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/**
 * QueryRelationshipsRequest is the request type for the
 * Query/Relationships RPC method.
 */
export interface QueryRelationshipsRequest {
    /** subspace to query the relationships for */
    subspaceId: Long;
    /** optional address of the user for which to query the relationships */
    user: string;
    /**
     * optional address of the counterparty of the relationships (used only if the
     * user is provided)
     */
    counterparty: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/**
 * QueryRelationshipsResponse is the response type for the
 * Query/Relationships RPC method.
 */
export interface QueryRelationshipsResponse {
    relationships: Relationship[];
    pagination: PageResponse;
}
/**
 * QueryBlocksRequest is the request type for the Query/Blocks RPC
 * endpoint
 */
export interface QueryBlocksRequest {
    /** subspace to query the blocks for */
    subspaceId: Long;
    /** optional address of the blocker to query the blocks for */
    blocker: string;
    /**
     * optional address of the blocked user to query the block for (used only if
     * the blocker is provided)
     */
    blocked: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/**
 * QueryBlocksResponse is the response type for the Query/Blocks RPC
 * method.
 */
export interface QueryBlocksResponse {
    blocks: UserBlock[];
    pagination: PageResponse;
}
export declare const QueryRelationshipsRequest: {
    encode(message: QueryRelationshipsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRelationshipsRequest;
    fromJSON(object: any): QueryRelationshipsRequest;
    toJSON(message: QueryRelationshipsRequest): unknown;
    fromPartial(object: DeepPartial<QueryRelationshipsRequest>): QueryRelationshipsRequest;
};
export declare const QueryRelationshipsResponse: {
    encode(message: QueryRelationshipsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRelationshipsResponse;
    fromJSON(object: any): QueryRelationshipsResponse;
    toJSON(message: QueryRelationshipsResponse): unknown;
    fromPartial(object: DeepPartial<QueryRelationshipsResponse>): QueryRelationshipsResponse;
};
export declare const QueryBlocksRequest: {
    encode(message: QueryBlocksRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBlocksRequest;
    fromJSON(object: any): QueryBlocksRequest;
    toJSON(message: QueryBlocksRequest): unknown;
    fromPartial(object: DeepPartial<QueryBlocksRequest>): QueryBlocksRequest;
};
export declare const QueryBlocksResponse: {
    encode(message: QueryBlocksResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBlocksResponse;
    fromJSON(object: any): QueryBlocksResponse;
    toJSON(message: QueryBlocksResponse): unknown;
    fromPartial(object: DeepPartial<QueryBlocksResponse>): QueryBlocksResponse;
};
