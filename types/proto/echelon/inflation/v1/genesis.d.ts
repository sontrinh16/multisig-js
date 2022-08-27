import { ExponentialCalculation, InflationDistribution } from "./inflation";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** GenesisState defines the inflation module's genesis state. */
export interface GenesisState {
    /** params defines all the paramaters of the module. */
    params: Params;
    /** amount of past periods, based on the epochs per period param */
    period: Long;
    /** inflation epoch identifier */
    epochIdentifier: string;
    /** number of epochs after which inflation is recalculated */
    epochsPerPeriod: Long;
    /** number of epochs that have passed while inflation is disabled */
    skippedEpochs: Long;
}
/** Params holds parameters for the inflation module. */
export interface Params {
    /** type of coin to mint */
    mintDenom: string;
    /** variables to calculate exponential inflation */
    exponentialCalculation: ExponentialCalculation;
    /** inflation distribution of the minted denom */
    inflationDistribution: InflationDistribution;
    /** parameter to enable inflation and halt increasing the skipped_epochs */
    enableInflation: boolean;
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
