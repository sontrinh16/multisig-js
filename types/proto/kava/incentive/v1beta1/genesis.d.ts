import { Timestamp } from "../../../google/protobuf/timestamp";
import { MultiRewardIndex, USDXMintingClaim, HardLiquidityProviderClaim, DelegatorClaim, SwapClaim, SavingsClaim } from "./claims";
import { Params } from "./params";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** AccumulationTime stores the previous reward distribution time and its corresponding collateral type */
export interface AccumulationTime {
    collateralType: string;
    previousAccumulationTime: Timestamp;
}
/** GenesisRewardState groups together the global state for a particular reward so it can be exported in genesis. */
export interface GenesisRewardState {
    accumulationTimes: AccumulationTime[];
    multiRewardIndexes: MultiRewardIndex[];
}
/** GenesisState is the state that must be provided at genesis. */
export interface GenesisState {
    params: Params;
    usdxRewardState: GenesisRewardState;
    hardSupplyRewardState: GenesisRewardState;
    hardBorrowRewardState: GenesisRewardState;
    delegatorRewardState: GenesisRewardState;
    swapRewardState: GenesisRewardState;
    usdxMintingClaims: USDXMintingClaim[];
    hardLiquidityProviderClaims: HardLiquidityProviderClaim[];
    delegatorClaims: DelegatorClaim[];
    swapClaims: SwapClaim[];
    savingsRewardState: GenesisRewardState;
    savingsClaims: SavingsClaim[];
}
export declare const AccumulationTime: {
    encode(message: AccumulationTime, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccumulationTime;
    fromJSON(object: any): AccumulationTime;
    toJSON(message: AccumulationTime): unknown;
    fromPartial(object: DeepPartial<AccumulationTime>): AccumulationTime;
};
export declare const GenesisRewardState: {
    encode(message: GenesisRewardState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisRewardState;
    fromJSON(object: any): GenesisRewardState;
    toJSON(message: GenesisRewardState): unknown;
    fromPartial(object: DeepPartial<GenesisRewardState>): GenesisRewardState;
};
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
