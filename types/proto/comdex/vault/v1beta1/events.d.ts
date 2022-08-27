import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface EventCreateVault {
    sender: string;
    collateralType: string;
}
export interface EventDepositCollateral {
    owner: string;
    collateralType: string;
    collateral: Coin;
}
export interface EventWithdrawCollateral {
    owner: string;
    collateralType: string;
    collateral: Coin;
}
export interface EventDrawDebt {
    owner: string;
    collateralType: string;
    debt: Coin;
}
export interface EventRepayDebt {
    owner: string;
    collateralType: string;
    debt: Coin;
}
export interface EventCloseVault {
    owner: string;
    collateralType: string;
}
export declare const EventCreateVault: {
    encode(message: EventCreateVault, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateVault;
    fromJSON(object: any): EventCreateVault;
    toJSON(message: EventCreateVault): unknown;
    fromPartial(object: DeepPartial<EventCreateVault>): EventCreateVault;
};
export declare const EventDepositCollateral: {
    encode(message: EventDepositCollateral, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventDepositCollateral;
    fromJSON(object: any): EventDepositCollateral;
    toJSON(message: EventDepositCollateral): unknown;
    fromPartial(object: DeepPartial<EventDepositCollateral>): EventDepositCollateral;
};
export declare const EventWithdrawCollateral: {
    encode(message: EventWithdrawCollateral, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventWithdrawCollateral;
    fromJSON(object: any): EventWithdrawCollateral;
    toJSON(message: EventWithdrawCollateral): unknown;
    fromPartial(object: DeepPartial<EventWithdrawCollateral>): EventWithdrawCollateral;
};
export declare const EventDrawDebt: {
    encode(message: EventDrawDebt, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventDrawDebt;
    fromJSON(object: any): EventDrawDebt;
    toJSON(message: EventDrawDebt): unknown;
    fromPartial(object: DeepPartial<EventDrawDebt>): EventDrawDebt;
};
export declare const EventRepayDebt: {
    encode(message: EventRepayDebt, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventRepayDebt;
    fromJSON(object: any): EventRepayDebt;
    toJSON(message: EventRepayDebt): unknown;
    fromPartial(object: DeepPartial<EventRepayDebt>): EventRepayDebt;
};
export declare const EventCloseVault: {
    encode(message: EventCloseVault, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCloseVault;
    fromJSON(object: any): EventCloseVault;
    toJSON(message: EventCloseVault): unknown;
    fromPartial(object: DeepPartial<EventCloseVault>): EventCloseVault;
};
