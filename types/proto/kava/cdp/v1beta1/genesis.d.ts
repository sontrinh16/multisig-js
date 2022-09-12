import { CDP, Deposit } from "./cdp";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** GenesisState defines the cdp module's genesis state. */
export interface GenesisState {
    /** params defines all the paramaters of the module. */
    params: Params;
    cdps: CDP[];
    deposits: Deposit[];
    startingCdpId: Long;
    debtDenom: string;
    govDenom: string;
    previousAccumulationTimes: GenesisAccumulationTime[];
    totalPrincipals: GenesisTotalPrincipal[];
}
/** Params defines the parameters for the cdp module. */
export interface Params {
    collateralParams: CollateralParam[];
    debtParam: DebtParam;
    globalDebtLimit: Coin;
    surplusAuctionThreshold: string;
    surplusAuctionLot: string;
    debtAuctionThreshold: string;
    debtAuctionLot: string;
    circuitBreaker: boolean;
}
/** DebtParam defines governance params for debt assets */
export interface DebtParam {
    denom: string;
    referenceAsset: string;
    conversionFactor: string;
    debtFloor: string;
}
/** CollateralParam defines governance parameters for each collateral type within the cdp module */
export interface CollateralParam {
    denom: string;
    type: string;
    liquidationRatio: string;
    debtLimit: Coin;
    stabilityFee: string;
    auctionSize: string;
    liquidationPenalty: string;
    spotMarketId: string;
    liquidationMarketId: string;
    keeperRewardPercentage: string;
    checkCollateralizationIndexCount: string;
    conversionFactor: string;
}
/** GenesisAccumulationTime defines the previous distribution time and its corresponding denom */
export interface GenesisAccumulationTime {
    collateralType: string;
    previousAccumulationTime: Timestamp;
    interestFactor: string;
}
/** GenesisTotalPrincipal defines the total principal and its corresponding collateral type */
export interface GenesisTotalPrincipal {
    collateralType: string;
    totalPrincipal: string;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: DeepPartial<Params>): Params;
};
export declare const DebtParam: {
    encode(message: DebtParam, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DebtParam;
    fromJSON(object: any): DebtParam;
    toJSON(message: DebtParam): unknown;
    fromPartial(object: DeepPartial<DebtParam>): DebtParam;
};
export declare const CollateralParam: {
    encode(message: CollateralParam, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CollateralParam;
    fromJSON(object: any): CollateralParam;
    toJSON(message: CollateralParam): unknown;
    fromPartial(object: DeepPartial<CollateralParam>): CollateralParam;
};
export declare const GenesisAccumulationTime: {
    encode(message: GenesisAccumulationTime, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisAccumulationTime;
    fromJSON(object: any): GenesisAccumulationTime;
    toJSON(message: GenesisAccumulationTime): unknown;
    fromPartial(object: DeepPartial<GenesisAccumulationTime>): GenesisAccumulationTime;
};
export declare const GenesisTotalPrincipal: {
    encode(message: GenesisTotalPrincipal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisTotalPrincipal;
    fromJSON(object: any): GenesisTotalPrincipal;
    toJSON(message: GenesisTotalPrincipal): unknown;
    fromPartial(object: DeepPartial<GenesisTotalPrincipal>): GenesisTotalPrincipal;
};
