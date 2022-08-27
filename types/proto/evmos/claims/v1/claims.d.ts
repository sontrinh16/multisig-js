import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** Action defines the list of available actions to claim the airdrop tokens. */
export declare enum Action {
    /** ACTION_UNSPECIFIED - UNSPECIFIED defines an invalid action. */
    ACTION_UNSPECIFIED = 0,
    /** ACTION_VOTE - VOTE defines a proposal vote. */
    ACTION_VOTE = 1,
    /** ACTION_DELEGATE - DELEGATE defines an staking delegation. */
    ACTION_DELEGATE = 2,
    /** ACTION_EVM - EVM defines an EVM transaction. */
    ACTION_EVM = 3,
    /** ACTION_IBC_TRANSFER - IBC Transfer defines a fungible token transfer transaction via IBC. */
    ACTION_IBC_TRANSFER = 4,
    UNRECOGNIZED = -1
}
export declare function actionFromJSON(object: any): Action;
export declare function actionToJSON(object: Action): string;
/**
 * Claim defines the action, completed flag and the remaining claimable amount
 * for a given user. This is only used during client queries.
 */
export interface Claim {
    /** action enum */
    action: Action;
    /** true if the action has been completed */
    completed: boolean;
    /** claimable token amount for the action. Zero if completed */
    claimableAmount: string;
}
/**
 * ClaimsRecordAddress is the claims metadata per address that is used at
 * Genesis.
 */
export interface ClaimsRecordAddress {
    /** bech32 or hex address of claim user */
    address: string;
    /** total initial claimable amount for the user */
    initialClaimableAmount: string;
    /** slice of the available actions completed */
    actionsCompleted: boolean[];
}
/**
 * ClaimsRecord defines the initial claimable airdrop amount and the list of
 * completed actions to claim the tokens.
 */
export interface ClaimsRecord {
    /** total initial claimable amount for the user */
    initialClaimableAmount: string;
    /** slice of the available actions completed */
    actionsCompleted: boolean[];
}
export declare const Claim: {
    encode(message: Claim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Claim;
    fromJSON(object: any): Claim;
    toJSON(message: Claim): unknown;
    fromPartial(object: DeepPartial<Claim>): Claim;
};
export declare const ClaimsRecordAddress: {
    encode(message: ClaimsRecordAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClaimsRecordAddress;
    fromJSON(object: any): ClaimsRecordAddress;
    toJSON(message: ClaimsRecordAddress): unknown;
    fromPartial(object: DeepPartial<ClaimsRecordAddress>): ClaimsRecordAddress;
};
export declare const ClaimsRecord: {
    encode(message: ClaimsRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClaimsRecord;
    fromJSON(object: any): ClaimsRecord;
    toJSON(message: ClaimsRecord): unknown;
    fromPartial(object: DeepPartial<ClaimsRecord>): ClaimsRecord;
};
