import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** MsgDeposit defines the Msg/Deposit request type. */
export interface MsgDeposit {
    depositor: string;
    amount: Coin[];
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponse {
}
/** MsgWithdraw defines the Msg/Withdraw request type. */
export interface MsgWithdraw {
    depositor: string;
    amount: Coin[];
}
/** MsgWithdrawResponse defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponse {
}
/** MsgBorrow defines the Msg/Borrow request type. */
export interface MsgBorrow {
    borrower: string;
    amount: Coin[];
}
/** MsgBorrowResponse defines the Msg/Borrow response type. */
export interface MsgBorrowResponse {
}
/** MsgRepay defines the Msg/Repay request type. */
export interface MsgRepay {
    sender: string;
    owner: string;
    amount: Coin[];
}
/** MsgRepayResponse defines the Msg/Repay response type. */
export interface MsgRepayResponse {
}
/** MsgLiquidate defines the Msg/Liquidate request type. */
export interface MsgLiquidate {
    keeper: string;
    borrower: string;
}
/** MsgLiquidateResponse defines the Msg/Liquidate response type. */
export interface MsgLiquidateResponse {
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
export declare const MsgBorrow: {
    encode(message: MsgBorrow, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBorrow;
    fromJSON(object: any): MsgBorrow;
    toJSON(message: MsgBorrow): unknown;
    fromPartial(object: DeepPartial<MsgBorrow>): MsgBorrow;
};
export declare const MsgBorrowResponse: {
    encode(_: MsgBorrowResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBorrowResponse;
    fromJSON(_: any): MsgBorrowResponse;
    toJSON(_: MsgBorrowResponse): unknown;
    fromPartial(_: DeepPartial<MsgBorrowResponse>): MsgBorrowResponse;
};
export declare const MsgRepay: {
    encode(message: MsgRepay, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRepay;
    fromJSON(object: any): MsgRepay;
    toJSON(message: MsgRepay): unknown;
    fromPartial(object: DeepPartial<MsgRepay>): MsgRepay;
};
export declare const MsgRepayResponse: {
    encode(_: MsgRepayResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRepayResponse;
    fromJSON(_: any): MsgRepayResponse;
    toJSON(_: MsgRepayResponse): unknown;
    fromPartial(_: DeepPartial<MsgRepayResponse>): MsgRepayResponse;
};
export declare const MsgLiquidate: {
    encode(message: MsgLiquidate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidate;
    fromJSON(object: any): MsgLiquidate;
    toJSON(message: MsgLiquidate): unknown;
    fromPartial(object: DeepPartial<MsgLiquidate>): MsgLiquidate;
};
export declare const MsgLiquidateResponse: {
    encode(_: MsgLiquidateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidateResponse;
    fromJSON(_: any): MsgLiquidateResponse;
    toJSON(_: MsgLiquidateResponse): unknown;
    fromPartial(_: DeepPartial<MsgLiquidateResponse>): MsgLiquidateResponse;
};
