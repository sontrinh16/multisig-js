import { Incentive, GasMeter } from "./incentives";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** GenesisState defines the module's genesis state. */
export interface GenesisState {
    /** module parameters */
    params: Params;
    /** active incentives */
    incentives: Incentive[];
    /** active Gasmeters */
    gasMeters: GasMeter[];
}
/** Params defines the incentives module params */
export interface Params {
    /** parameter to enable incentives */
    enableIncentives: boolean;
    /** maximum percentage an incentive can allocate per denomination */
    allocationLimit: string;
    /** identifier for the epochs module hooks */
    incentivesEpochIdentifier: string;
    /** scaling factor for capping rewards */
    rewardScaler: string;
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
