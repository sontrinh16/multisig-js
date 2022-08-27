import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { GroupInfo, GroupAccountInfo, GroupMember, Proposal, Vote } from "./types";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** QueryGroupInfoRequest is the Query/GroupInfo request type. */
export interface QueryGroupInfoRequest {
    /** group_id is the unique ID of the group. */
    groupId: Long;
}
/** QueryGroupInfoResponse is the Query/GroupInfo response type. */
export interface QueryGroupInfoResponse {
    /** info is the GroupInfo for the group. */
    info: GroupInfo;
}
/** QueryGroupAccountInfoRequest is the Query/GroupAccountInfo request type. */
export interface QueryGroupAccountInfoRequest {
    /** address is the account address of the group account. */
    address: string;
}
/** QueryGroupAccountInfoResponse is the Query/GroupAccountInfo response type. */
export interface QueryGroupAccountInfoResponse {
    /** info is the GroupAccountInfo for the group account. */
    info: GroupAccountInfo;
}
/** QueryGroupMembersRequest is the Query/GroupMembersRequest request type. */
export interface QueryGroupMembersRequest {
    /** group_id is the unique ID of the group. */
    groupId: Long;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/** QueryGroupMembersResponse is the Query/GroupMembersResponse response type. */
export interface QueryGroupMembersResponse {
    /** members are the members of the group with given group_id. */
    members: GroupMember[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
/** QueryGroupsByAdminRequest is the Query/GroupsByAdminRequest request type. */
export interface QueryGroupsByAdminRequest {
    /** admin is the account address of a group's admin. */
    admin: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/** QueryGroupsByAdminResponse is the Query/GroupsByAdminResponse response type. */
export interface QueryGroupsByAdminResponse {
    /** groups are the groups info with the provided admin. */
    groups: GroupInfo[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
/**
 * QueryGroupAccountsByGroupRequest is the Query/GroupAccountsByGroup request
 * type.
 */
export interface QueryGroupAccountsByGroupRequest {
    /** group_id is the unique ID of the group account's group. */
    groupId: Long;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/**
 * QueryGroupAccountsByGroupResponse is the Query/GroupAccountsByGroup response
 * type.
 */
export interface QueryGroupAccountsByGroupResponse {
    /**
     * group_accounts are the group accounts info associated with the provided
     * group.
     */
    groupAccounts: GroupAccountInfo[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
/**
 * QueryGroupAccountsByAdminRequest is the Query/GroupAccountsByAdmin request
 * type.
 */
export interface QueryGroupAccountsByAdminRequest {
    /** admin is the admin address of the group account. */
    admin: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/**
 * QueryGroupAccountsByAdminResponse is the Query/GroupAccountsByAdmin response
 * type.
 */
export interface QueryGroupAccountsByAdminResponse {
    /** group_accounts are the group accounts info with provided admin. */
    groupAccounts: GroupAccountInfo[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
/** QueryProposalRequest is the Query/Proposal request type. */
export interface QueryProposalRequest {
    /** proposal_id is the unique ID of a proposal. */
    proposalId: Long;
}
/** QueryProposalResponse is the Query/Proposal response type. */
export interface QueryProposalResponse {
    /** proposal is the proposal info. */
    proposal: Proposal;
}
/**
 * QueryProposalsByGroupAccountRequest is the Query/ProposalByGroupAccount
 * request type.
 */
export interface QueryProposalsByGroupAccountRequest {
    /** address is the group account address related to proposals. */
    address: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/**
 * QueryProposalsByGroupAccountResponse is the Query/ProposalByGroupAccount
 * response type.
 */
export interface QueryProposalsByGroupAccountResponse {
    /** proposals are the proposals with given group account. */
    proposals: Proposal[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
/**
 * QueryVoteByProposalVoterResponse is the Query/VoteByProposalVoter request
 * type.
 */
export interface QueryVoteByProposalVoterRequest {
    /** proposal_id is the unique ID of a proposal. */
    proposalId: Long;
    /** voter is a proposal voter account address. */
    voter: string;
}
/**
 * QueryVoteByProposalVoterResponse is the Query/VoteByProposalVoter response
 * type.
 */
export interface QueryVoteByProposalVoterResponse {
    /** vote is the vote with given proposal_id and voter. */
    vote: Vote;
}
/** QueryVotesByProposalResponse is the Query/VotesByProposal request type. */
export interface QueryVotesByProposalRequest {
    /** proposal_id is the unique ID of a proposal. */
    proposalId: Long;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/** QueryVotesByProposalResponse is the Query/VotesByProposal response type. */
export interface QueryVotesByProposalResponse {
    /** votes are the list of votes for given proposal_id. */
    votes: Vote[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
/** QueryVotesByVoterResponse is the Query/VotesByVoter request type. */
export interface QueryVotesByVoterRequest {
    /** voter is a proposal voter account address. */
    voter: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/** QueryVotesByVoterResponse is the Query/VotesByVoter response type. */
export interface QueryVotesByVoterResponse {
    /** votes are the list of votes by given voter. */
    votes: Vote[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
export declare const QueryGroupInfoRequest: {
    encode(message: QueryGroupInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupInfoRequest;
    fromJSON(object: any): QueryGroupInfoRequest;
    toJSON(message: QueryGroupInfoRequest): unknown;
    fromPartial(object: DeepPartial<QueryGroupInfoRequest>): QueryGroupInfoRequest;
};
export declare const QueryGroupInfoResponse: {
    encode(message: QueryGroupInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupInfoResponse;
    fromJSON(object: any): QueryGroupInfoResponse;
    toJSON(message: QueryGroupInfoResponse): unknown;
    fromPartial(object: DeepPartial<QueryGroupInfoResponse>): QueryGroupInfoResponse;
};
export declare const QueryGroupAccountInfoRequest: {
    encode(message: QueryGroupAccountInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupAccountInfoRequest;
    fromJSON(object: any): QueryGroupAccountInfoRequest;
    toJSON(message: QueryGroupAccountInfoRequest): unknown;
    fromPartial(object: DeepPartial<QueryGroupAccountInfoRequest>): QueryGroupAccountInfoRequest;
};
export declare const QueryGroupAccountInfoResponse: {
    encode(message: QueryGroupAccountInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupAccountInfoResponse;
    fromJSON(object: any): QueryGroupAccountInfoResponse;
    toJSON(message: QueryGroupAccountInfoResponse): unknown;
    fromPartial(object: DeepPartial<QueryGroupAccountInfoResponse>): QueryGroupAccountInfoResponse;
};
export declare const QueryGroupMembersRequest: {
    encode(message: QueryGroupMembersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupMembersRequest;
    fromJSON(object: any): QueryGroupMembersRequest;
    toJSON(message: QueryGroupMembersRequest): unknown;
    fromPartial(object: DeepPartial<QueryGroupMembersRequest>): QueryGroupMembersRequest;
};
export declare const QueryGroupMembersResponse: {
    encode(message: QueryGroupMembersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupMembersResponse;
    fromJSON(object: any): QueryGroupMembersResponse;
    toJSON(message: QueryGroupMembersResponse): unknown;
    fromPartial(object: DeepPartial<QueryGroupMembersResponse>): QueryGroupMembersResponse;
};
export declare const QueryGroupsByAdminRequest: {
    encode(message: QueryGroupsByAdminRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupsByAdminRequest;
    fromJSON(object: any): QueryGroupsByAdminRequest;
    toJSON(message: QueryGroupsByAdminRequest): unknown;
    fromPartial(object: DeepPartial<QueryGroupsByAdminRequest>): QueryGroupsByAdminRequest;
};
export declare const QueryGroupsByAdminResponse: {
    encode(message: QueryGroupsByAdminResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupsByAdminResponse;
    fromJSON(object: any): QueryGroupsByAdminResponse;
    toJSON(message: QueryGroupsByAdminResponse): unknown;
    fromPartial(object: DeepPartial<QueryGroupsByAdminResponse>): QueryGroupsByAdminResponse;
};
export declare const QueryGroupAccountsByGroupRequest: {
    encode(message: QueryGroupAccountsByGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupAccountsByGroupRequest;
    fromJSON(object: any): QueryGroupAccountsByGroupRequest;
    toJSON(message: QueryGroupAccountsByGroupRequest): unknown;
    fromPartial(object: DeepPartial<QueryGroupAccountsByGroupRequest>): QueryGroupAccountsByGroupRequest;
};
export declare const QueryGroupAccountsByGroupResponse: {
    encode(message: QueryGroupAccountsByGroupResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupAccountsByGroupResponse;
    fromJSON(object: any): QueryGroupAccountsByGroupResponse;
    toJSON(message: QueryGroupAccountsByGroupResponse): unknown;
    fromPartial(object: DeepPartial<QueryGroupAccountsByGroupResponse>): QueryGroupAccountsByGroupResponse;
};
export declare const QueryGroupAccountsByAdminRequest: {
    encode(message: QueryGroupAccountsByAdminRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupAccountsByAdminRequest;
    fromJSON(object: any): QueryGroupAccountsByAdminRequest;
    toJSON(message: QueryGroupAccountsByAdminRequest): unknown;
    fromPartial(object: DeepPartial<QueryGroupAccountsByAdminRequest>): QueryGroupAccountsByAdminRequest;
};
export declare const QueryGroupAccountsByAdminResponse: {
    encode(message: QueryGroupAccountsByAdminResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupAccountsByAdminResponse;
    fromJSON(object: any): QueryGroupAccountsByAdminResponse;
    toJSON(message: QueryGroupAccountsByAdminResponse): unknown;
    fromPartial(object: DeepPartial<QueryGroupAccountsByAdminResponse>): QueryGroupAccountsByAdminResponse;
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
export declare const QueryProposalsByGroupAccountRequest: {
    encode(message: QueryProposalsByGroupAccountRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalsByGroupAccountRequest;
    fromJSON(object: any): QueryProposalsByGroupAccountRequest;
    toJSON(message: QueryProposalsByGroupAccountRequest): unknown;
    fromPartial(object: DeepPartial<QueryProposalsByGroupAccountRequest>): QueryProposalsByGroupAccountRequest;
};
export declare const QueryProposalsByGroupAccountResponse: {
    encode(message: QueryProposalsByGroupAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalsByGroupAccountResponse;
    fromJSON(object: any): QueryProposalsByGroupAccountResponse;
    toJSON(message: QueryProposalsByGroupAccountResponse): unknown;
    fromPartial(object: DeepPartial<QueryProposalsByGroupAccountResponse>): QueryProposalsByGroupAccountResponse;
};
export declare const QueryVoteByProposalVoterRequest: {
    encode(message: QueryVoteByProposalVoterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVoteByProposalVoterRequest;
    fromJSON(object: any): QueryVoteByProposalVoterRequest;
    toJSON(message: QueryVoteByProposalVoterRequest): unknown;
    fromPartial(object: DeepPartial<QueryVoteByProposalVoterRequest>): QueryVoteByProposalVoterRequest;
};
export declare const QueryVoteByProposalVoterResponse: {
    encode(message: QueryVoteByProposalVoterResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVoteByProposalVoterResponse;
    fromJSON(object: any): QueryVoteByProposalVoterResponse;
    toJSON(message: QueryVoteByProposalVoterResponse): unknown;
    fromPartial(object: DeepPartial<QueryVoteByProposalVoterResponse>): QueryVoteByProposalVoterResponse;
};
export declare const QueryVotesByProposalRequest: {
    encode(message: QueryVotesByProposalRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVotesByProposalRequest;
    fromJSON(object: any): QueryVotesByProposalRequest;
    toJSON(message: QueryVotesByProposalRequest): unknown;
    fromPartial(object: DeepPartial<QueryVotesByProposalRequest>): QueryVotesByProposalRequest;
};
export declare const QueryVotesByProposalResponse: {
    encode(message: QueryVotesByProposalResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVotesByProposalResponse;
    fromJSON(object: any): QueryVotesByProposalResponse;
    toJSON(message: QueryVotesByProposalResponse): unknown;
    fromPartial(object: DeepPartial<QueryVotesByProposalResponse>): QueryVotesByProposalResponse;
};
export declare const QueryVotesByVoterRequest: {
    encode(message: QueryVotesByVoterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVotesByVoterRequest;
    fromJSON(object: any): QueryVotesByVoterRequest;
    toJSON(message: QueryVotesByVoterRequest): unknown;
    fromPartial(object: DeepPartial<QueryVotesByVoterRequest>): QueryVotesByVoterRequest;
};
export declare const QueryVotesByVoterResponse: {
    encode(message: QueryVotesByVoterResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVotesByVoterResponse;
    fromJSON(object: any): QueryVotesByVoterResponse;
    toJSON(message: QueryVotesByVoterResponse): unknown;
    fromPartial(object: DeepPartial<QueryVotesByVoterResponse>): QueryVotesByVoterResponse;
};
