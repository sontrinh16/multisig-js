import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** MsgDeposit represents a message for depositing liquidity into a pool */
export interface MsgDeposit {
    /** depositor represents the address to deposit funds from */
    depositor: string;
    /** token_a represents one token of deposit pair */
    tokenA: Coin;
    /** token_b represents one token of deposit pair */
    tokenB: Coin;
    /** slippage represents the max decimal percentage price change */
    slippage: string;
    /** deadline represents the unix timestamp to complete the deposit by */
    deadline: Long;
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponse {
}
/** MsgWithdraw represents a message for withdrawing liquidity from a pool */
export interface MsgWithdraw {
    /** from represents the address we are withdrawing for */
    from: string;
    /** shares represents the amount of shares to withdraw */
    shares: string;
    /** min_token_a represents the minimum a token to withdraw */
    minTokenA: Coin;
    /** min_token_a represents the minimum a token to withdraw */
    minTokenB: Coin;
    /** deadline represents the unix timestamp to complete the withdraw by */
    deadline: Long;
}
/** MsgWithdrawResponse defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponse {
}
/** MsgSwapExactForTokens represents a message for trading exact coinA for coinB */
export interface MsgSwapExactForTokens {
    /** represents the address swaping the tokens */
    requester: string;
    /** exact_token_a represents the exact amount to swap for token_b */
    exactTokenA: Coin;
    /** token_b represents the desired token_b to swap for */
    tokenB: Coin;
    /** slippage represents the maximum change in token_b allowed */
    slippage: string;
    /** deadline represents the unix timestamp to complete the swap by */
    deadline: Long;
}
/**
 * MsgSwapExactForTokensResponse defines the Msg/SwapExactForTokens response
 * type.
 */
export interface MsgSwapExactForTokensResponse {
}
/**
 * MsgSwapForExactTokens represents a message for trading coinA for an exact
 * coinB
 */
export interface MsgSwapForExactTokens {
    /** represents the address swaping the tokens */
    requester: string;
    /** token_a represents the desired token_a to swap for */
    tokenA: Coin;
    /** exact_token_b represents the exact token b amount to swap for token a */
    exactTokenB: Coin;
    /** slippage represents the maximum change in token_a allowed */
    slippage: string;
    /** deadline represents the unix timestamp to complete the swap by */
    deadline: Long;
}
/**
 * MsgSwapForExactTokensResponse defines the Msg/SwapForExactTokensResponse
 * response type.
 */
export interface MsgSwapForExactTokensResponse {
}
export declare const MsgDeposit: {
    encode(message: MsgDeposit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeposit;
    fromJSON(object: any): MsgDeposit;
    toJSON(message: MsgDeposit): unknown;
    fromPartial(object: DeepPartial<MsgDeposit>): MsgDeposit;
};
export declare const MsgDepositResponse: {
    encode(_: MsgDepositResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositResponse;
    fromJSON(_: any): MsgDepositResponse;
    toJSON(_: MsgDepositResponse): unknown;
    fromPartial(_: DeepPartial<MsgDepositResponse>): MsgDepositResponse;
};
export declare const MsgWithdraw: {
    encode(message: MsgWithdraw, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdraw;
    fromJSON(object: any): MsgWithdraw;
    toJSON(message: MsgWithdraw): unknown;
    fromPartial(object: DeepPartial<MsgWithdraw>): MsgWithdraw;
};
export declare const MsgWithdrawResponse: {
    encode(_: MsgWithdrawResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawResponse;
    fromJSON(_: any): MsgWithdrawResponse;
    toJSON(_: MsgWithdrawResponse): unknown;
    fromPartial(_: DeepPartial<MsgWithdrawResponse>): MsgWithdrawResponse;
};
export declare const MsgSwapExactForTokens: {
    encode(message: MsgSwapExactForTokens, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapExactForTokens;
    fromJSON(object: any): MsgSwapExactForTokens;
    toJSON(message: MsgSwapExactForTokens): unknown;
    fromPartial(object: DeepPartial<MsgSwapExactForTokens>): MsgSwapExactForTokens;
};
export declare const MsgSwapExactForTokensResponse: {
    encode(_: MsgSwapExactForTokensResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapExactForTokensResponse;
    fromJSON(_: any): MsgSwapExactForTokensResponse;
    toJSON(_: MsgSwapExactForTokensResponse): unknown;
    fromPartial(_: DeepPartial<MsgSwapExactForTokensResponse>): MsgSwapExactForTokensResponse;
};
export declare const MsgSwapForExactTokens: {
    encode(message: MsgSwapForExactTokens, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapForExactTokens;
    fromJSON(object: any): MsgSwapForExactTokens;
    toJSON(message: MsgSwapForExactTokens): unknown;
    fromPartial(object: DeepPartial<MsgSwapForExactTokens>): MsgSwapForExactTokens;
};
export declare const MsgSwapForExactTokensResponse: {
    encode(_: MsgSwapForExactTokensResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapForExactTokensResponse;
    fromJSON(_: any): MsgSwapForExactTokensResponse;
    toJSON(_: MsgSwapForExactTokensResponse): unknown;
    fromPartial(_: DeepPartial<MsgSwapForExactTokensResponse>): MsgSwapForExactTokensResponse;
};
