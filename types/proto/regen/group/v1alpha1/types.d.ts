import { Duration } from "../../../google/protobuf/duration";
import { Any } from "../../../google/protobuf/any";
import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** Choice defines available types of choices for voting. */
export declare enum Choice {
    /** CHOICE_UNSPECIFIED - CHOICE_UNSPECIFIED defines a no-op voting choice. */
    CHOICE_UNSPECIFIED = 0,
    /** CHOICE_NO - CHOICE_NO defines a no voting choice. */
    CHOICE_NO = 1,
    /** CHOICE_YES - CHOICE_YES defines a yes voting choice. */
    CHOICE_YES = 2,
    /** CHOICE_ABSTAIN - CHOICE_ABSTAIN defines an abstaining voting choice. */
    CHOICE_ABSTAIN = 3,
    /** CHOICE_VETO - CHOICE_VETO defines a voting choice with veto. */
    CHOICE_VETO = 4,
    UNRECOGNIZED = -1
}
export declare function choiceFromJSON(object: any): Choice;
export declare function choiceToJSON(object: Choice): string;
/** Status defines proposal statuses. */
export declare enum Proposal_Status {
    /** STATUS_UNSPECIFIED - An empty value is invalid and not allowed. */
    STATUS_UNSPECIFIED = 0,
    /** STATUS_SUBMITTED - Initial status of a proposal when persisted. */
    STATUS_SUBMITTED = 1,
    /** STATUS_CLOSED - Final status of a proposal when the final tally was executed. */
    STATUS_CLOSED = 2,
    /**
     * STATUS_ABORTED - Final status of a proposal when the group was modified before the final
     * tally.
     */
    STATUS_ABORTED = 3,
    UNRECOGNIZED = -1
}
export declare function proposal_StatusFromJSON(object: any): Proposal_Status;
export declare function proposal_StatusToJSON(object: Proposal_Status): string;
/** Result defines types of proposal results. */
export declare enum Proposal_Result {
    /** RESULT_UNSPECIFIED - An empty value is invalid and not allowed */
    RESULT_UNSPECIFIED = 0,
    /** RESULT_UNFINALIZED - Until a final tally has happened the status is unfinalized */
    RESULT_UNFINALIZED = 1,
    /** RESULT_ACCEPTED - Final result of the tally */
    RESULT_ACCEPTED = 2,
    /** RESULT_REJECTED - Final result of the tally */
    RESULT_REJECTED = 3,
    UNRECOGNIZED = -1
}
export declare function proposal_ResultFromJSON(object: any): Proposal_Result;
export declare function proposal_ResultToJSON(object: Proposal_Result): string;
/** ExecutorResult defines types of proposal executor results. */
export declare enum Proposal_ExecutorResult {
    /** EXECUTOR_RESULT_UNSPECIFIED - An empty value is not allowed. */
    EXECUTOR_RESULT_UNSPECIFIED = 0,
    /** EXECUTOR_RESULT_NOT_RUN - We have not yet run the executor. */
    EXECUTOR_RESULT_NOT_RUN = 1,
    /** EXECUTOR_RESULT_SUCCESS - The executor was successful and proposed action updated state. */
    EXECUTOR_RESULT_SUCCESS = 2,
    /** EXECUTOR_RESULT_FAILURE - The executor returned an error and proposed action didn't update state. */
    EXECUTOR_RESULT_FAILURE = 3,
    UNRECOGNIZED = -1
}
export declare function proposal_ExecutorResultFromJSON(object: any): Proposal_ExecutorResult;
export declare function proposal_ExecutorResultToJSON(object: Proposal_ExecutorResult): string;
/**
 * Member represents a group member with an account address,
 * non-zero weight and metadata.
 */
export interface Member {
    /** address is the member's account address. */
    address: string;
    /** weight is the member's voting weight that should be greater than 0. */
    weight: string;
    /** metadata is any arbitrary metadata to attached to the member. */
    metadata: Uint8Array;
}
/** Members defines a repeated slice of Member objects. */
export interface Members {
    /** members is the list of members. */
    members: Member[];
}
/** ThresholdDecisionPolicy implements the DecisionPolicy interface */
export interface ThresholdDecisionPolicy {
    /**
     * threshold is the minimum weighted sum of yes votes that must be met or
     * exceeded for a proposal to succeed.
     */
    threshold: string;
    /**
     * timeout is the duration from submission of a proposal to the end of voting
     * period Within this times votes and exec messages can be submitted.
     */
    timeout: Duration;
}
/** GroupInfo represents the high-level on-chain information for a group. */
export interface GroupInfo {
    /** group_id is the unique ID of the group. */
    groupId: Long;
    /** admin is the account address of the group's admin. */
    admin: string;
    /** metadata is any arbitrary metadata to attached to the group. */
    metadata: Uint8Array;
    /**
     * version is used to track changes to a group's membership structure that
     * would break existing proposals. Whenever any members weight is changed,
     * or any member is added or removed this version is incremented and will
     * cause proposals based on older versions of this group to fail
     */
    version: Long;
    /** total_weight is the sum of the group members' weights. */
    totalWeight: string;
}
/** GroupMember represents the relationship between a group and a member. */
export interface GroupMember {
    /** group_id is the unique ID of the group. */
    groupId: Long;
    /** member is the member data. */
    member: Member;
}
/**
 * GroupAccountInfo represents the high-level on-chain information for a group
 * account.
 */
export interface GroupAccountInfo {
    /** address is the group account address. */
    address: string;
    /** group_id is the unique ID of the group. */
    groupId: Long;
    /** admin is the account address of the group admin. */
    admin: string;
    /** metadata is any arbitrary metadata to attached to the group account. */
    metadata: Uint8Array;
    /**
     * version is used to track changes to a group's GroupAccountInfo structure
     * that would create a different result on a running proposal.
     */
    version: Long;
    /** decision_policy specifies the group account's decision policy. */
    decisionPolicy: Any;
    /**
     * derivation_key is the "derivation" key of the group account,
     * which is needed to derive the group root module key and execute proposals.
     */
    derivationKey: Uint8Array;
}
/**
 * Proposal defines a group proposal. Any member of a group can submit a
 * proposal for a group account to decide upon. A proposal consists of a set of
 * `sdk.Msg`s that will be executed if the proposal passes as well as some
 * optional metadata associated with the proposal.
 */
export interface Proposal {
    /** proposal_id is the unique id of the proposal. */
    proposalId: Long;
    /** address is the group account address. */
    address: string;
    /** metadata is any arbitrary metadata to attached to the proposal. */
    metadata: Uint8Array;
    /** proposers are the account addresses of the proposers. */
    proposers: string[];
    /** submitted_at is a timestamp specifying when a proposal was submitted. */
    submittedAt: Timestamp;
    /**
     * group_version tracks the version of the group that this proposal
     * corresponds to. When group membership is changed, existing proposals from
     * previous group versions will become invalid.
     */
    groupVersion: Long;
    /**
     * group_account_version tracks the version of the group account that this
     * proposal corresponds to. When a decision policy is changed, existing
     * proposals from previous policy versions will become invalid.
     */
    groupAccountVersion: Long;
    /**
     * Status represents the high level position in the life cycle of the
     * proposal. Initial value is Submitted.
     */
    status: Proposal_Status;
    /**
     * result is the final result based on the votes and election rule. Initial
     * value is unfinalized. The result is persisted so that clients can always
     * rely on this state and not have to replicate the logic.
     */
    result: Proposal_Result;
    /** vote_state contains the sums of all weighted votes for this proposal. */
    voteState: Tally;
    /**
     * timeout is the timestamp of the block where the proposal execution times
     * out. Header times of the votes and execution messages must be before this
     * end time to be included in the election. After the timeout timestamp the
     * proposal can not be executed anymore and should be considered pending
     * delete.
     */
    timeout: Timestamp;
    /**
     * executor_result is the final result based on the votes and election rule.
     * Initial value is NotRun.
     */
    executorResult: Proposal_ExecutorResult;
    /** msgs is a list of Msgs that will be executed if the proposal passes. */
    msgs: Any[];
}
/** Tally represents the sum of weighted votes. */
export interface Tally {
    /** yes_count is the weighted sum of yes votes. */
    yesCount: string;
    /** no_count is the weighted sum of no votes. */
    noCount: string;
    /** abstain_count is the weighted sum of abstainers */
    abstainCount: string;
    /** veto_count is the weighted sum of vetoes. */
    vetoCount: string;
}
/** Vote represents a vote for a proposal. */
export interface Vote {
    /** proposal is the unique ID of the proposal. */
    proposalId: Long;
    /** voter is the account address of the voter. */
    voter: string;
    /** choice is the voter's choice on the proposal. */
    choice: Choice;
    /** metadata is any arbitrary metadata to attached to the vote. */
    metadata: Uint8Array;
    /** submitted_at is the timestamp when the vote was submitted. */
    submittedAt: Timestamp;
}
export declare const Member: {
    encode(message: Member, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Member;
    fromJSON(object: any): Member;
    toJSON(message: Member): unknown;
    fromPartial(object: DeepPartial<Member>): Member;
};
export declare const Members: {
    encode(message: Members, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Members;
    fromJSON(object: any): Members;
    toJSON(message: Members): unknown;
    fromPartial(object: DeepPartial<Members>): Members;
};
export declare const ThresholdDecisionPolicy: {
    encode(message: ThresholdDecisionPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ThresholdDecisionPolicy;
    fromJSON(object: any): ThresholdDecisionPolicy;
    toJSON(message: ThresholdDecisionPolicy): unknown;
    fromPartial(object: DeepPartial<ThresholdDecisionPolicy>): ThresholdDecisionPolicy;
};
export declare const GroupInfo: {
    encode(message: GroupInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GroupInfo;
    fromJSON(object: any): GroupInfo;
    toJSON(message: GroupInfo): unknown;
    fromPartial(object: DeepPartial<GroupInfo>): GroupInfo;
};
export declare const GroupMember: {
    encode(message: GroupMember, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GroupMember;
    fromJSON(object: any): GroupMember;
    toJSON(message: GroupMember): unknown;
    fromPartial(object: DeepPartial<GroupMember>): GroupMember;
};
export declare const GroupAccountInfo: {
    encode(message: GroupAccountInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GroupAccountInfo;
    fromJSON(object: any): GroupAccountInfo;
    toJSON(message: GroupAccountInfo): unknown;
    fromPartial(object: DeepPartial<GroupAccountInfo>): GroupAccountInfo;
};
export declare const Proposal: {
    encode(message: Proposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Proposal;
    fromJSON(object: any): Proposal;
    toJSON(message: Proposal): unknown;
    fromPartial(object: DeepPartial<Proposal>): Proposal;
};
export declare const Tally: {
    encode(message: Tally, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Tally;
    fromJSON(object: any): Tally;
    toJSON(message: Tally): unknown;
    fromPartial(object: DeepPartial<Tally>): Tally;
};
export declare const Vote: {
    encode(message: Vote, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Vote;
    fromJSON(object: any): Vote;
    toJSON(message: Vote): unknown;
    fromPartial(object: DeepPartial<Vote>): Vote;
};
