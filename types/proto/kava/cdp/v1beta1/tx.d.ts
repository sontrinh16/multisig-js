import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** MsgCreateCDP defines a message to create a new CDP. */
export interface MsgCreateCDP {
    sender: string;
    collateral: Coin;
    principal: Coin;
    collateralType: string;
}
/** MsgCreateCDPResponse defines the Msg/CreateCDP response type. */
export interface MsgCreateCDPResponse {
    cdpId: Long;
}
/** MsgDeposit defines a message to deposit to a CDP. */
export interface MsgDeposit {
    depositor: string;
    owner: string;
    collateral: Coin;
    collateralType: string;
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponse {
}
/** MsgWithdraw defines a message to withdraw collateral from a CDP. */
export interface MsgWithdraw {
    depositor: string;
    owner: string;
    collateral: Coin;
    collateralType: string;
}
/** MsgWithdrawResponse defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponse {
}
/** MsgDrawDebt defines a message to draw debt from a CDP. */
export interface MsgDrawDebt {
    sender: string;
    collateralType: string;
    principal: Coin;
}
/** MsgDrawDebtResponse defines the Msg/DrawDebt response type. */
export interface MsgDrawDebtResponse {
}
/** MsgRepayDebt defines a message to repay debt from a CDP. */
export interface MsgRepayDebt {
    sender: string;
    collateralType: string;
    payment: Coin;
}
/** MsgRepayDebtResponse defines the Msg/RepayDebt response type. */
export interface MsgRepayDebtResponse {
}
/**
 * MsgLiquidate defines a message to attempt to liquidate a CDP whos
 * collateralization ratio is under its liquidation ratio.
 */
export interface MsgLiquidate {
    keeper: string;
    borrower: string;
    collateralType: string;
}
/** MsgLiquidateResponse defines the Msg/Liquidate response type. */
export interface MsgLiquidateResponse {
}
export declare const MsgCreateCDP: {
    encode(message: MsgCreateCDP, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateCDP;
    fromJSON(object: any): MsgCreateCDP;
    toJSON(message: MsgCreateCDP): unknown;
    fromPartial(object: DeepPartial<MsgCreateCDP>): MsgCreateCDP;
};
export declare const MsgCreateCDPResponse: {
    encode(message: MsgCreateCDPResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateCDPResponse;
    fromJSON(object: any): MsgCreateCDPResponse;
    toJSON(message: MsgCreateCDPResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateCDPResponse>): MsgCreateCDPResponse;
};
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
export declare const MsgDrawDebt: {
    encode(message: MsgDrawDebt, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDrawDebt;
    fromJSON(object: any): MsgDrawDebt;
    toJSON(message: MsgDrawDebt): unknown;
    fromPartial(object: DeepPartial<MsgDrawDebt>): MsgDrawDebt;
};
export declare const MsgDrawDebtResponse: {
    encode(_: MsgDrawDebtResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDrawDebtResponse;
    fromJSON(_: any): MsgDrawDebtResponse;
    toJSON(_: MsgDrawDebtResponse): unknown;
    fromPartial(_: DeepPartial<MsgDrawDebtResponse>): MsgDrawDebtResponse;
};
export declare const MsgRepayDebt: {
    encode(message: MsgRepayDebt, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRepayDebt;
    fromJSON(object: any): MsgRepayDebt;
    toJSON(message: MsgRepayDebt): unknown;
    fromPartial(object: DeepPartial<MsgRepayDebt>): MsgRepayDebt;
};
export declare const MsgRepayDebtResponse: {
    encode(_: MsgRepayDebtResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRepayDebtResponse;
    fromJSON(_: any): MsgRepayDebtResponse;
    toJSON(_: MsgRepayDebtResponse): unknown;
    fromPartial(_: DeepPartial<MsgRepayDebtResponse>): MsgRepayDebtResponse;
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
