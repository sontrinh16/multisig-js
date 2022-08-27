import { FeeSplit } from "./feesplit";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** GenesisState defines the module's genesis state. */
export interface GenesisState {
    /** module parameters */
    params: Params;
    /** active registered contracts for fee distribution */
    feeSplits: FeeSplit[];
}
/** Params defines the feesplit module params */
export interface Params {
    /** enable_fee_split defines a parameter to enable the feesplit module */
    enableFeeSplit: boolean;
    /**
     * developer_shares defines the proportion of the transaction fees to be
     * distributed to the registered contract owner
     */
    developerShares: string;
    /**
     * addr_derivation_cost_create defines the cost of address derivation for
     * verifying the contract deployer at fee registration
     */
    addrDerivationCostCreate: Long;
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
