import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export declare enum Position {
    UNSPECIFIED = 0,
    LONG = 1,
    SHORT = 2,
    UNRECOGNIZED = -1
}
export declare function positionFromJSON(object: any): Position;
export declare function positionToJSON(object: Position): string;
export interface GenesisState {
    params: Params;
}
export interface Params {
    leverageMax: string;
    interestRateMax: string;
    interestRateMin: string;
    interestRateIncrease: string;
    interestRateDecrease: string;
    healthGainFactor: string;
    epochLength: Long;
    pools: string[];
    forceCloseThreshold: string;
    removalQueueThreshold: string;
    maxOpenPositions: Long;
    poolOpenThreshold: string;
    forceCloseFundPercentage: string;
    forceCloseInsuranceFundAddress: string;
    incrementalInterestPaymentFundPercentage: string;
    incrementalInterestPaymentInsuranceFundAddress: string;
    sqModifier: string;
    safetyFactor: string;
    closedPools: string[];
    incrementalInterestPaymentEnabled: boolean;
    whitelistingEnabled: boolean;
}
export interface MTP {
    address: string;
    collateralAsset: string;
    collateralAmount: string;
    liabilities: string;
    interestPaid: string;
    interestUnpaid: string;
    custodyAsset: string;
    custodyAmount: string;
    leverage: string;
    mtpHealth: string;
    position: Position;
    id: Long;
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
export declare const MTP: {
    encode(message: MTP, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MTP;
    fromJSON(object: any): MTP;
    toJSON(message: MTP): unknown;
    fromPartial(object: DeepPartial<MTP>): MTP;
};
