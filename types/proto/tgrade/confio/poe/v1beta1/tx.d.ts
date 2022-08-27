import { Description } from "../../../../cosmos/staking/v1beta1/staking";
import { Any } from "../../../../google/protobuf/any";
import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/**
 * MsgCreateValidator defines a PoE message for creating a new validator.
 * Based on the SDK staking.MsgCreateValidator
 */
export interface MsgCreateValidator {
    /** Description meta data */
    description: Description;
    /** OperatorAddress is the bech32 address string */
    operatorAddress: string;
    /** Pubkey public key */
    pubkey: Any;
    /** Amount defines the initial staking amount from a liquid balance */
    amount: Coin;
    /**
     * VestingAmount defines the initial staking amount from a vesting account
     * balance
     */
    vestingAmount: Coin;
}
/** MsgCreateValidatorResponse defines the MsgCreateValidator response type. */
export interface MsgCreateValidatorResponse {
}
/** MsgCreateValidator defines a PoE message for updating validator metadata */
export interface MsgUpdateValidator {
    /** New Description meta data */
    description: Description;
    /**
     * OperatorAddress is the bech32 address string
     * Also know as "signer" in other messages
     */
    operatorAddress: string;
}
/** MsgUpdateValidatorResponse defines the MsgUpdateValidator response type. */
export interface MsgUpdateValidatorResponse {
}
/**
 * MsgDelegate defines a SDK message for performing a self delegation of coins
 * by a node operator
 */
export interface MsgDelegate {
    operatorAddress: string;
    amount: Coin;
    vestingAmount: Coin;
}
/** MsgDelegateResponse defines the Msg/Delegate response type. */
export interface MsgDelegateResponse {
}
/**
 * MsgUndelegate defines a SDK message for performing an undelegation from a
 * node operator
 */
export interface MsgUndelegate {
    operatorAddress: string;
    amount: Coin;
}
/** MsgUndelegateResponse defines the Msg/Undelegate response type. */
export interface MsgUndelegateResponse {
    completionTime: Date;
}
export declare const MsgCreateValidator: {
    encode(message: MsgCreateValidator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateValidator;
    fromJSON(object: any): MsgCreateValidator;
    toJSON(message: MsgCreateValidator): unknown;
    fromPartial(object: DeepPartial<MsgCreateValidator>): MsgCreateValidator;
};
export declare const MsgCreateValidatorResponse: {
    encode(_: MsgCreateValidatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateValidatorResponse;
    fromJSON(_: any): MsgCreateValidatorResponse;
    toJSON(_: MsgCreateValidatorResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateValidatorResponse>): MsgCreateValidatorResponse;
};
export declare const MsgUpdateValidator: {
    encode(message: MsgUpdateValidator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateValidator;
    fromJSON(object: any): MsgUpdateValidator;
    toJSON(message: MsgUpdateValidator): unknown;
    fromPartial(object: DeepPartial<MsgUpdateValidator>): MsgUpdateValidator;
};
export declare const MsgUpdateValidatorResponse: {
    encode(_: MsgUpdateValidatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateValidatorResponse;
    fromJSON(_: any): MsgUpdateValidatorResponse;
    toJSON(_: MsgUpdateValidatorResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateValidatorResponse>): MsgUpdateValidatorResponse;
};
export declare const MsgDelegate: {
    encode(message: MsgDelegate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegate;
    fromJSON(object: any): MsgDelegate;
    toJSON(message: MsgDelegate): unknown;
    fromPartial(object: DeepPartial<MsgDelegate>): MsgDelegate;
};
export declare const MsgDelegateResponse: {
    encode(_: MsgDelegateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegateResponse;
    fromJSON(_: any): MsgDelegateResponse;
    toJSON(_: MsgDelegateResponse): unknown;
    fromPartial(_: DeepPartial<MsgDelegateResponse>): MsgDelegateResponse;
};
export declare const MsgUndelegate: {
    encode(message: MsgUndelegate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUndelegate;
    fromJSON(object: any): MsgUndelegate;
    toJSON(message: MsgUndelegate): unknown;
    fromPartial(object: DeepPartial<MsgUndelegate>): MsgUndelegate;
};
export declare const MsgUndelegateResponse: {
    encode(message: MsgUndelegateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUndelegateResponse;
    fromJSON(object: any): MsgUndelegateResponse;
    toJSON(message: MsgUndelegateResponse): unknown;
    fromPartial(object: DeepPartial<MsgUndelegateResponse>): MsgUndelegateResponse;
};
