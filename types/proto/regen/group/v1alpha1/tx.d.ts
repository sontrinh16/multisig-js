import { Member, Choice } from "./types";
import { Any } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** Exec defines modes of execution of a proposal on creation or on new vote. */
export declare enum Exec {
    /**
     * EXEC_UNSPECIFIED - An empty value means that there should be a separate
     * MsgExec request for the proposal to execute.
     */
    EXEC_UNSPECIFIED = 0,
    /**
     * EXEC_TRY - Try to execute the proposal immediately.
     * If the proposal is not allowed per the DecisionPolicy,
     * the proposal will still be open and could
     * be executed at a later point.
     */
    EXEC_TRY = 1,
    UNRECOGNIZED = -1
}
export declare function execFromJSON(object: any): Exec;
export declare function execToJSON(object: Exec): string;
/** MsgCreateGroup is the Msg/CreateGroup request type. */
export interface MsgCreateGroup {
    /** admin is the account address of the group admin. */
    admin: string;
    /** members defines the group members. */
    members: Member[];
    /** metadata is any arbitrary metadata to attached to the group. */
    metadata: Uint8Array;
}
/** MsgCreateGroupResponse is the Msg/CreateGroup response type. */
export interface MsgCreateGroupResponse {
    /** group_id is the unique ID of the newly created group. */
    groupId: Long;
}
/** MsgUpdateGroupMembers is the Msg/UpdateGroupMembers request type. */
export interface MsgUpdateGroupMembers {
    /** admin is the account address of the group admin. */
    admin: string;
    /** group_id is the unique ID of the group. */
    groupId: Long;
    /**
     * member_updates is the list of members to update,
     * set weight to 0 to remove a member.
     */
    memberUpdates: Member[];
}
/** MsgUpdateGroupMembersResponse is the Msg/UpdateGroupMembers response type. */
export interface MsgUpdateGroupMembersResponse {
}
/** MsgUpdateGroupAdmin is the Msg/UpdateGroupAdmin request type. */
export interface MsgUpdateGroupAdmin {
    /** admin is the current account address of the group admin. */
    admin: string;
    /** group_id is the unique ID of the group. */
    groupId: Long;
    /** new_admin is the group new admin account address. */
    newAdmin: string;
}
/** MsgUpdateGroupAdminResponse is the Msg/UpdateGroupAdmin response type. */
export interface MsgUpdateGroupAdminResponse {
}
/** MsgUpdateGroupMetadata is the Msg/UpdateGroupMetadata request type. */
export interface MsgUpdateGroupMetadata {
    /** admin is the account address of the group admin. */
    admin: string;
    /** group_id is the unique ID of the group. */
    groupId: Long;
    /** metadata is the updated group's metadata. */
    metadata: Uint8Array;
}
/** MsgUpdateGroupMetadataResponse is the Msg/UpdateGroupMetadata response type. */
export interface MsgUpdateGroupMetadataResponse {
}
/** MsgCreateGroupAccount is the Msg/CreateGroupAccount request type. */
export interface MsgCreateGroupAccount {
    /** admin is the account address of the group admin. */
    admin: string;
    /** group_id is the unique ID of the group. */
    groupId: Long;
    /** metadata is any arbitrary metadata to attached to the group account. */
    metadata: Uint8Array;
    /** decision_policy specifies the group account's decision policy. */
    decisionPolicy: Any;
}
/** MsgCreateGroupAccountResponse is the Msg/CreateGroupAccount response type. */
export interface MsgCreateGroupAccountResponse {
    /** address is the account address of the newly created group account. */
    address: string;
}
/** MsgUpdateGroupAccountAdmin is the Msg/UpdateGroupAccountAdmin request type. */
export interface MsgUpdateGroupAccountAdmin {
    /** admin is the account address of the group admin. */
    admin: string;
    /** address is the group account address. */
    address: string;
    /** new_admin is the new group account admin. */
    newAdmin: string;
}
/**
 * MsgUpdateGroupAccountAdminResponse is the Msg/UpdateGroupAccountAdmin
 * response type.
 */
export interface MsgUpdateGroupAccountAdminResponse {
}
/**
 * MsgUpdateGroupAccountDecisionPolicy is the
 * Msg/UpdateGroupAccountDecisionPolicy request type.
 */
export interface MsgUpdateGroupAccountDecisionPolicy {
    /** admin is the account address of the group admin. */
    admin: string;
    /** address is the group account address. */
    address: string;
    /** decision_policy is the updated group account decision policy. */
    decisionPolicy: Any;
}
/**
 * MsgUpdateGroupAccountDecisionPolicyResponse is the
 * Msg/UpdateGroupAccountDecisionPolicy response type.
 */
export interface MsgUpdateGroupAccountDecisionPolicyResponse {
}
/**
 * MsgUpdateGroupAccountMetadata is the Msg/UpdateGroupAccountMetadata request
 * type.
 */
export interface MsgUpdateGroupAccountMetadata {
    /** admin is the account address of the group admin. */
    admin: string;
    /** address is the group account address. */
    address: string;
    /** metadata is the updated group account metadata. */
    metadata: Uint8Array;
}
/**
 * MsgUpdateGroupAccountMetadataResponse is the Msg/UpdateGroupAccountMetadata
 * response type.
 */
export interface MsgUpdateGroupAccountMetadataResponse {
}
/** MsgCreateProposal is the Msg/CreateProposal request type. */
export interface MsgCreateProposal {
    /** address is the group account address. */
    address: string;
    /**
     * proposers are the account addresses of the proposers.
     * Proposers signatures will be counted as yes votes.
     */
    proposers: string[];
    /** metadata is any arbitrary metadata to attached to the proposal. */
    metadata: Uint8Array;
    /** msgs is a list of Msgs that will be executed if the proposal passes. */
    msgs: Any[];
    /**
     * exec defines the mode of execution of the proposal,
     * whether it should be executed immediately on creation or not.
     * If so, proposers signatures are considered as Yes votes.
     */
    exec: Exec;
}
/** MsgCreateProposalResponse is the Msg/CreateProposal response type. */
export interface MsgCreateProposalResponse {
    /** proposal is the unique ID of the proposal. */
    proposalId: Long;
}
/** MsgVote is the Msg/Vote request type. */
export interface MsgVote {
    /** proposal is the unique ID of the proposal. */
    proposalId: Long;
    /** voter is the voter account address. */
    voter: string;
    /** choice is the voter's choice on the proposal. */
    choice: Choice;
    /** metadata is any arbitrary metadata to attached to the vote. */
    metadata: Uint8Array;
    /**
     * exec defines whether the proposal should be executed
     * immediately after voting or not.
     */
    exec: Exec;
}
/** MsgVoteResponse is the Msg/Vote response type. */
export interface MsgVoteResponse {
}
/** MsgExec is the Msg/Exec request type. */
export interface MsgExec {
    /** proposal is the unique ID of the proposal. */
    proposalId: Long;
    /** signer is the account address used to execute the proposal. */
    signer: string;
}
/** MsgExecResponse is the Msg/Exec request type. */
export interface MsgExecResponse {
}
export declare const MsgCreateGroup: {
    encode(message: MsgCreateGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGroup;
    fromJSON(object: any): MsgCreateGroup;
    toJSON(message: MsgCreateGroup): unknown;
    fromPartial(object: DeepPartial<MsgCreateGroup>): MsgCreateGroup;
};
export declare const MsgCreateGroupResponse: {
    encode(message: MsgCreateGroupResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGroupResponse;
    fromJSON(object: any): MsgCreateGroupResponse;
    toJSON(message: MsgCreateGroupResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateGroupResponse>): MsgCreateGroupResponse;
};
export declare const MsgUpdateGroupMembers: {
    encode(message: MsgUpdateGroupMembers, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupMembers;
    fromJSON(object: any): MsgUpdateGroupMembers;
    toJSON(message: MsgUpdateGroupMembers): unknown;
    fromPartial(object: DeepPartial<MsgUpdateGroupMembers>): MsgUpdateGroupMembers;
};
export declare const MsgUpdateGroupMembersResponse: {
    encode(_: MsgUpdateGroupMembersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupMembersResponse;
    fromJSON(_: any): MsgUpdateGroupMembersResponse;
    toJSON(_: MsgUpdateGroupMembersResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateGroupMembersResponse>): MsgUpdateGroupMembersResponse;
};
export declare const MsgUpdateGroupAdmin: {
    encode(message: MsgUpdateGroupAdmin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupAdmin;
    fromJSON(object: any): MsgUpdateGroupAdmin;
    toJSON(message: MsgUpdateGroupAdmin): unknown;
    fromPartial(object: DeepPartial<MsgUpdateGroupAdmin>): MsgUpdateGroupAdmin;
};
export declare const MsgUpdateGroupAdminResponse: {
    encode(_: MsgUpdateGroupAdminResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupAdminResponse;
    fromJSON(_: any): MsgUpdateGroupAdminResponse;
    toJSON(_: MsgUpdateGroupAdminResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateGroupAdminResponse>): MsgUpdateGroupAdminResponse;
};
export declare const MsgUpdateGroupMetadata: {
    encode(message: MsgUpdateGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupMetadata;
    fromJSON(object: any): MsgUpdateGroupMetadata;
    toJSON(message: MsgUpdateGroupMetadata): unknown;
    fromPartial(object: DeepPartial<MsgUpdateGroupMetadata>): MsgUpdateGroupMetadata;
};
export declare const MsgUpdateGroupMetadataResponse: {
    encode(_: MsgUpdateGroupMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupMetadataResponse;
    fromJSON(_: any): MsgUpdateGroupMetadataResponse;
    toJSON(_: MsgUpdateGroupMetadataResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateGroupMetadataResponse>): MsgUpdateGroupMetadataResponse;
};
export declare const MsgCreateGroupAccount: {
    encode(message: MsgCreateGroupAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGroupAccount;
    fromJSON(object: any): MsgCreateGroupAccount;
    toJSON(message: MsgCreateGroupAccount): unknown;
    fromPartial(object: DeepPartial<MsgCreateGroupAccount>): MsgCreateGroupAccount;
};
export declare const MsgCreateGroupAccountResponse: {
    encode(message: MsgCreateGroupAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGroupAccountResponse;
    fromJSON(object: any): MsgCreateGroupAccountResponse;
    toJSON(message: MsgCreateGroupAccountResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateGroupAccountResponse>): MsgCreateGroupAccountResponse;
};
export declare const MsgUpdateGroupAccountAdmin: {
    encode(message: MsgUpdateGroupAccountAdmin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupAccountAdmin;
    fromJSON(object: any): MsgUpdateGroupAccountAdmin;
    toJSON(message: MsgUpdateGroupAccountAdmin): unknown;
    fromPartial(object: DeepPartial<MsgUpdateGroupAccountAdmin>): MsgUpdateGroupAccountAdmin;
};
export declare const MsgUpdateGroupAccountAdminResponse: {
    encode(_: MsgUpdateGroupAccountAdminResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupAccountAdminResponse;
    fromJSON(_: any): MsgUpdateGroupAccountAdminResponse;
    toJSON(_: MsgUpdateGroupAccountAdminResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateGroupAccountAdminResponse>): MsgUpdateGroupAccountAdminResponse;
};
export declare const MsgUpdateGroupAccountDecisionPolicy: {
    encode(message: MsgUpdateGroupAccountDecisionPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupAccountDecisionPolicy;
    fromJSON(object: any): MsgUpdateGroupAccountDecisionPolicy;
    toJSON(message: MsgUpdateGroupAccountDecisionPolicy): unknown;
    fromPartial(object: DeepPartial<MsgUpdateGroupAccountDecisionPolicy>): MsgUpdateGroupAccountDecisionPolicy;
};
export declare const MsgUpdateGroupAccountDecisionPolicyResponse: {
    encode(_: MsgUpdateGroupAccountDecisionPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupAccountDecisionPolicyResponse;
    fromJSON(_: any): MsgUpdateGroupAccountDecisionPolicyResponse;
    toJSON(_: MsgUpdateGroupAccountDecisionPolicyResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateGroupAccountDecisionPolicyResponse>): MsgUpdateGroupAccountDecisionPolicyResponse;
};
export declare const MsgUpdateGroupAccountMetadata: {
    encode(message: MsgUpdateGroupAccountMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupAccountMetadata;
    fromJSON(object: any): MsgUpdateGroupAccountMetadata;
    toJSON(message: MsgUpdateGroupAccountMetadata): unknown;
    fromPartial(object: DeepPartial<MsgUpdateGroupAccountMetadata>): MsgUpdateGroupAccountMetadata;
};
export declare const MsgUpdateGroupAccountMetadataResponse: {
    encode(_: MsgUpdateGroupAccountMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupAccountMetadataResponse;
    fromJSON(_: any): MsgUpdateGroupAccountMetadataResponse;
    toJSON(_: MsgUpdateGroupAccountMetadataResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateGroupAccountMetadataResponse>): MsgUpdateGroupAccountMetadataResponse;
};
export declare const MsgCreateProposal: {
    encode(message: MsgCreateProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateProposal;
    fromJSON(object: any): MsgCreateProposal;
    toJSON(message: MsgCreateProposal): unknown;
    fromPartial(object: DeepPartial<MsgCreateProposal>): MsgCreateProposal;
};
export declare const MsgCreateProposalResponse: {
    encode(message: MsgCreateProposalResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateProposalResponse;
    fromJSON(object: any): MsgCreateProposalResponse;
    toJSON(message: MsgCreateProposalResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateProposalResponse>): MsgCreateProposalResponse;
};
export declare const MsgVote: {
    encode(message: MsgVote, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgVote;
    fromJSON(object: any): MsgVote;
    toJSON(message: MsgVote): unknown;
    fromPartial(object: DeepPartial<MsgVote>): MsgVote;
};
export declare const MsgVoteResponse: {
    encode(_: MsgVoteResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgVoteResponse;
    fromJSON(_: any): MsgVoteResponse;
    toJSON(_: MsgVoteResponse): unknown;
    fromPartial(_: DeepPartial<MsgVoteResponse>): MsgVoteResponse;
};
export declare const MsgExec: {
    encode(message: MsgExec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExec;
    fromJSON(object: any): MsgExec;
    toJSON(message: MsgExec): unknown;
    fromPartial(object: DeepPartial<MsgExec>): MsgExec;
};
export declare const MsgExecResponse: {
    encode(_: MsgExecResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecResponse;
    fromJSON(_: any): MsgExecResponse;
    toJSON(_: MsgExecResponse): unknown;
    fromPartial(_: DeepPartial<MsgExecResponse>): MsgExecResponse;
};
