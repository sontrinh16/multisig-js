import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Any } from "../../../google/protobuf/any";
import { VoteType } from "./genesis";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** QueryCommitteesRequest defines the request type for querying x/committee committees. */
export interface QueryCommitteesRequest {
}
/** QueryCommitteesResponse defines the response type for querying x/committee committees. */
export interface QueryCommitteesResponse {
    committees: Any[];
}
/** QueryCommitteeRequest defines the request type for querying x/committee committee. */
export interface QueryCommitteeRequest {
    committeeId: Long;
}
/** QueryCommitteeResponse defines the response type for querying x/committee committee. */
export interface QueryCommitteeResponse {
    committee: Any;
}
/** QueryProposalsRequest defines the request type for querying x/committee proposals. */
export interface QueryProposalsRequest {
    committeeId: Long;
}
/** QueryProposalsResponse defines the response type for querying x/committee proposals. */
export interface QueryProposalsResponse {
    proposals: QueryProposalResponse[];
}
/** QueryProposalRequest defines the request type for querying x/committee proposal. */
export interface QueryProposalRequest {
    proposalId: Long;
}
/** QueryProposalResponse defines the response type for querying x/committee proposal. */
export interface QueryProposalResponse {
    pubProposal: Any;
    id: Long;
    committeeId: Long;
    deadline: Date;
}
/** QueryNextProposalIDRequest defines the request type for querying x/committee NextProposalID. */
export interface QueryNextProposalIDRequest {
}
/** QueryNextProposalIDRequest defines the response type for querying x/committee NextProposalID. */
export interface QueryNextProposalIDResponse {
    nextProposalId: Long;
}
/** QueryVotesRequest defines the request type for querying x/committee votes. */
export interface QueryVotesRequest {
    proposalId: Long;
    pagination: PageRequest;
}
/** QueryVotesResponse defines the response type for querying x/committee votes. */
export interface QueryVotesResponse {
    /** votes defined the queried votes. */
    votes: QueryVoteResponse[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
/** QueryVoteRequest defines the request type for querying x/committee vote. */
export interface QueryVoteRequest {
    proposalId: Long;
    voter: string;
}
/** QueryVoteResponse defines the response type for querying x/committee vote. */
export interface QueryVoteResponse {
    proposalId: Long;
    voter: string;
    voteType: VoteType;
}
/** QueryTallyRequest defines the request type for querying x/committee tally. */
export interface QueryTallyRequest {
    proposalId: Long;
}
/** QueryTallyResponse defines the response type for querying x/committee tally. */
export interface QueryTallyResponse {
    proposalId: Long;
    yesVotes: string;
    noVotes: string;
    currentVotes: string;
    possibleVotes: string;
    voteThreshold: string;
    quorum: string;
}
/** QueryRawParamsRequest defines the request type for querying x/committee raw params. */
export interface QueryRawParamsRequest {
    subspace: string;
    key: string;
}
/** QueryRawParamsResponse defines the response type for querying x/committee raw params. */
export interface QueryRawParamsResponse {
    rawData: string;
}
export declare const QueryCommitteesRequest: {
    encode(_: QueryCommitteesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCommitteesRequest;
    fromJSON(_: any): QueryCommitteesRequest;
    toJSON(_: QueryCommitteesRequest): unknown;
    fromPartial(_: DeepPartial<QueryCommitteesRequest>): QueryCommitteesRequest;
};
export declare const QueryCommitteesResponse: {
    encode(message: QueryCommitteesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCommitteesResponse;
    fromJSON(object: any): QueryCommitteesResponse;
    toJSON(message: QueryCommitteesResponse): unknown;
    fromPartial(object: DeepPartial<QueryCommitteesResponse>): QueryCommitteesResponse;
};
export declare const QueryCommitteeRequest: {
    encode(message: QueryCommitteeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCommitteeRequest;
    fromJSON(object: any): QueryCommitteeRequest;
    toJSON(message: QueryCommitteeRequest): unknown;
    fromPartial(object: DeepPartial<QueryCommitteeRequest>): QueryCommitteeRequest;
};
export declare const QueryCommitteeResponse: {
    encode(message: QueryCommitteeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCommitteeResponse;
    fromJSON(object: any): QueryCommitteeResponse;
    toJSON(message: QueryCommitteeResponse): unknown;
    fromPartial(object: DeepPartial<QueryCommitteeResponse>): QueryCommitteeResponse;
};
export declare const QueryProposalsRequest: {
    encode(message: QueryProposalsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalsRequest;
    fromJSON(object: any): QueryProposalsRequest;
    toJSON(message: QueryProposalsRequest): unknown;
    fromPartial(object: DeepPartial<QueryProposalsRequest>): QueryProposalsRequest;
};
export declare const QueryProposalsResponse: {
    encode(message: QueryProposalsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalsResponse;
    fromJSON(object: any): QueryProposalsResponse;
    toJSON(message: QueryProposalsResponse): unknown;
    fromPartial(object: DeepPartial<QueryProposalsResponse>): QueryProposalsResponse;
};
export declare const QueryProposalRequest: {
    encode(message: QueryProposalRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalRequest;
    fromJSON(object: any): QueryProposalRequest;
    toJSON(message: QueryProposalRequest): unknown;
    fromPartial(object: DeepPartial<QueryProposalRequest>): QueryProposalRequest;
};
export declare const QueryProposalResponse: {
    encode(message: QueryProposalResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalResponse;
    fromJSON(object: any): QueryProposalResponse;
    toJSON(message: QueryProposalResponse): unknown;
    fromPartial(object: DeepPartial<QueryProposalResponse>): QueryProposalResponse;
};
export declare const QueryNextProposalIDRequest: {
    encode(_: QueryNextProposalIDRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNextProposalIDRequest;
    fromJSON(_: any): QueryNextProposalIDRequest;
    toJSON(_: QueryNextProposalIDRequest): unknown;
    fromPartial(_: DeepPartial<QueryNextProposalIDRequest>): QueryNextProposalIDRequest;
};
export declare const QueryNextProposalIDResponse: {
    encode(message: QueryNextProposalIDResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNextProposalIDResponse;
    fromJSON(object: any): QueryNextProposalIDResponse;
    toJSON(message: QueryNextProposalIDResponse): unknown;
    fromPartial(object: DeepPartial<QueryNextProposalIDResponse>): QueryNextProposalIDResponse;
};
export declare const QueryVotesRequest: {
    encode(message: QueryVotesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVotesRequest;
    fromJSON(object: any): QueryVotesRequest;
    toJSON(message: QueryVotesRequest): unknown;
    fromPartial(object: DeepPartial<QueryVotesRequest>): QueryVotesRequest;
};
export declare const QueryVotesResponse: {
    encode(message: QueryVotesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVotesResponse;
    fromJSON(object: any): QueryVotesResponse;
    toJSON(message: QueryVotesResponse): unknown;
    fromPartial(object: DeepPartial<QueryVotesResponse>): QueryVotesResponse;
};
export declare const QueryVoteRequest: {
    encode(message: QueryVoteRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVoteRequest;
    fromJSON(object: any): QueryVoteRequest;
    toJSON(message: QueryVoteRequest): unknown;
    fromPartial(object: DeepPartial<QueryVoteRequest>): QueryVoteRequest;
};
export declare const QueryVoteResponse: {
    encode(message: QueryVoteResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVoteResponse;
    fromJSON(object: any): QueryVoteResponse;
    toJSON(message: QueryVoteResponse): unknown;
    fromPartial(object: DeepPartial<QueryVoteResponse>): QueryVoteResponse;
};
export declare const QueryTallyRequest: {
    encode(message: QueryTallyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTallyRequest;
    fromJSON(object: any): QueryTallyRequest;
    toJSON(message: QueryTallyRequest): unknown;
    fromPartial(object: DeepPartial<QueryTallyRequest>): QueryTallyRequest;
};
export declare const QueryTallyResponse: {
    encode(message: QueryTallyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTallyResponse;
    fromJSON(object: any): QueryTallyResponse;
    toJSON(message: QueryTallyResponse): unknown;
    fromPartial(object: DeepPartial<QueryTallyResponse>): QueryTallyResponse;
};
export declare const QueryRawParamsRequest: {
    encode(message: QueryRawParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRawParamsRequest;
    fromJSON(object: any): QueryRawParamsRequest;
    toJSON(message: QueryRawParamsRequest): unknown;
    fromPartial(object: DeepPartial<QueryRawParamsRequest>): QueryRawParamsRequest;
};
export declare const QueryRawParamsResponse: {
    encode(message: QueryRawParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRawParamsResponse;
    fromJSON(object: any): QueryRawParamsResponse;
    toJSON(message: QueryRawParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryRawParamsResponse>): QueryRawParamsResponse;
};
