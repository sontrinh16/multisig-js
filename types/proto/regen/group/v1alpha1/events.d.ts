import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** EventCreateGroup is an event emitted when a group is created. */
export interface EventCreateGroup {
    /** group_id is the unique ID of the group. */
    groupId: Long;
}
/** EventUpdateGroup is an event emitted when a group is updated. */
export interface EventUpdateGroup {
    /** group_id is the unique ID of the group. */
    groupId: Long;
}
/** EventCreateGroupAccount is an event emitted when a group account is created. */
export interface EventCreateGroupAccount {
    /** address is the address of the group account. */
    address: string;
}
/** EventUpdateGroupAccount is an event emitted when a group account is updated. */
export interface EventUpdateGroupAccount {
    /** address is the address of the group account. */
    address: string;
}
/** EventCreateProposal is an event emitted when a proposal is created. */
export interface EventCreateProposal {
    /** proposal_id is the unique ID of the proposal. */
    proposalId: Long;
}
/** EventVote is an event emitted when a voter votes on a proposal. */
export interface EventVote {
    /** proposal_id is the unique ID of the proposal. */
    proposalId: Long;
}
/** EventExec is an event emitted when a proposal is executed. */
export interface EventExec {
    /** proposal_id is the unique ID of the proposal. */
    proposalId: Long;
}
export declare const EventCreateGroup: {
    encode(message: EventCreateGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateGroup;
    fromJSON(object: any): EventCreateGroup;
    toJSON(message: EventCreateGroup): unknown;
    fromPartial(object: DeepPartial<EventCreateGroup>): EventCreateGroup;
};
export declare const EventUpdateGroup: {
    encode(message: EventUpdateGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateGroup;
    fromJSON(object: any): EventUpdateGroup;
    toJSON(message: EventUpdateGroup): unknown;
    fromPartial(object: DeepPartial<EventUpdateGroup>): EventUpdateGroup;
};
export declare const EventCreateGroupAccount: {
    encode(message: EventCreateGroupAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateGroupAccount;
    fromJSON(object: any): EventCreateGroupAccount;
    toJSON(message: EventCreateGroupAccount): unknown;
    fromPartial(object: DeepPartial<EventCreateGroupAccount>): EventCreateGroupAccount;
};
export declare const EventUpdateGroupAccount: {
    encode(message: EventUpdateGroupAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateGroupAccount;
    fromJSON(object: any): EventUpdateGroupAccount;
    toJSON(message: EventUpdateGroupAccount): unknown;
    fromPartial(object: DeepPartial<EventUpdateGroupAccount>): EventUpdateGroupAccount;
};
export declare const EventCreateProposal: {
    encode(message: EventCreateProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateProposal;
    fromJSON(object: any): EventCreateProposal;
    toJSON(message: EventCreateProposal): unknown;
    fromPartial(object: DeepPartial<EventCreateProposal>): EventCreateProposal;
};
export declare const EventVote: {
    encode(message: EventVote, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventVote;
    fromJSON(object: any): EventVote;
    toJSON(message: EventVote): unknown;
    fromPartial(object: DeepPartial<EventVote>): EventVote;
};
export declare const EventExec: {
    encode(message: EventExec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventExec;
    fromJSON(object: any): EventExec;
    toJSON(message: EventExec): unknown;
    fromPartial(object: DeepPartial<EventExec>): EventExec;
};
