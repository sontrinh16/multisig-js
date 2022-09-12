import { Timestamp } from "../../../google/protobuf/timestamp";
import { Period } from "../../../cosmos/vesting/v1beta1/vesting";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/**
 * MsgCreateClawbackVestingAccount defines a message that enables creating a
 * ClawbackVestingAccount.
 */
export interface MsgCreateClawbackVestingAccount {
    /**
     * from_address specifies the account to provide the funds and sign the
     * clawback request
     */
    fromAddress: string;
    /** to_address specifies the account to receive the funds */
    toAddress: string;
    /** start_time defines the time at which the vesting period begins */
    startTime: Timestamp;
    /** lockup_periods defines the unlocking schedule relative to the start_time */
    lockupPeriods: Period[];
    /** vesting_periods defines thevesting schedule relative to the start_time */
    vestingPeriods: Period[];
    /**
     * merge specifies a the creation mechanism for existing
     * ClawbackVestingAccounts. If true, merge this new grant into an existing
     * ClawbackVestingAccount, or create it if it does not exist. If false,
     * creates a new account. New grants to an existing account must be from the
     * same from_address.
     */
    merge: boolean;
}
/**
 * MsgCreateClawbackVestingAccountResponse defines the
 * MsgCreateClawbackVestingAccount response type.
 */
export interface MsgCreateClawbackVestingAccountResponse {
}
/**
 * MsgClawback defines a message that removes unvested tokens from a
 * ClawbackVestingAccount.
 */
export interface MsgClawback {
    /** funder_address is the address which funded the account */
    funderAddress: string;
    /**
     * account_address is the address of the ClawbackVestingAccount to claw back
     * from.
     */
    accountAddress: string;
    /**
     * dest_address specifies where the clawed-back tokens should be transferred
     * to. If empty, the tokens will be transferred back to the original funder of
     * the account.
     */
    destAddress: string;
}
/** MsgClawbackResponse defines the MsgClawback response type. */
export interface MsgClawbackResponse {
}
export declare const MsgCreateClawbackVestingAccount: {
    encode(message: MsgCreateClawbackVestingAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateClawbackVestingAccount;
    fromJSON(object: any): MsgCreateClawbackVestingAccount;
    toJSON(message: MsgCreateClawbackVestingAccount): unknown;
    fromPartial(object: DeepPartial<MsgCreateClawbackVestingAccount>): MsgCreateClawbackVestingAccount;
};
export declare const MsgCreateClawbackVestingAccountResponse: {
    encode(_: MsgCreateClawbackVestingAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateClawbackVestingAccountResponse;
    fromJSON(_: any): MsgCreateClawbackVestingAccountResponse;
    toJSON(_: MsgCreateClawbackVestingAccountResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateClawbackVestingAccountResponse>): MsgCreateClawbackVestingAccountResponse;
};
export declare const MsgClawback: {
    encode(message: MsgClawback, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClawback;
    fromJSON(object: any): MsgClawback;
    toJSON(message: MsgClawback): unknown;
    fromPartial(object: DeepPartial<MsgClawback>): MsgClawback;
};
export declare const MsgClawbackResponse: {
    encode(_: MsgClawbackResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClawbackResponse;
    fromJSON(_: any): MsgClawbackResponse;
    toJSON(_: MsgClawbackResponse): unknown;
    fromPartial(_: DeepPartial<MsgClawbackResponse>): MsgClawbackResponse;
};
