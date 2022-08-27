import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/**
 * Incentive defines an instance that organizes distribution conditions for a
 * given smart contract
 */
export interface Incentive {
    /** contract address */
    contract: string;
    /** denoms and percentage of rewards to be allocated */
    allocations: DecCoin[];
    /** number of remaining epochs */
    epochs: number;
    /** distribution start time */
    startTime: Date;
    /** cumulative gas spent by all gasmeters of the incentive during the epoch */
    totalGas: Long;
}
/** GasMeter tracks the cumulative gas spent per participant in one epoch */
export interface GasMeter {
    /** hex address of the incentivized contract */
    contract: string;
    /** participant address that interacts with the incentive */
    participant: string;
    /** cumulative gas spent during the epoch */
    cumulativeGas: Long;
}
/** RegisterIncentiveProposal is a gov Content type to register an incentive */
export interface RegisterIncentiveProposal {
    /** title of the proposal */
    title: string;
    /** proposal description */
    description: string;
    /** contract address */
    contract: string;
    /** denoms and percentage of rewards to be allocated */
    allocations: DecCoin[];
    /** number of remaining epochs */
    epochs: number;
}
/** CancelIncentiveProposal is a gov Content type to cancel an incentive */
export interface CancelIncentiveProposal {
    /** title of the proposal */
    title: string;
    /** proposal description */
    description: string;
    /** contract address */
    contract: string;
}
export declare const Incentive: {
    encode(message: Incentive, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Incentive;
    fromJSON(object: any): Incentive;
    toJSON(message: Incentive): unknown;
    fromPartial(object: DeepPartial<Incentive>): Incentive;
};
export declare const GasMeter: {
    encode(message: GasMeter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GasMeter;
    fromJSON(object: any): GasMeter;
    toJSON(message: GasMeter): unknown;
    fromPartial(object: DeepPartial<GasMeter>): GasMeter;
};
export declare const RegisterIncentiveProposal: {
    encode(message: RegisterIncentiveProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterIncentiveProposal;
    fromJSON(object: any): RegisterIncentiveProposal;
    toJSON(message: RegisterIncentiveProposal): unknown;
    fromPartial(object: DeepPartial<RegisterIncentiveProposal>): RegisterIncentiveProposal;
};
export declare const CancelIncentiveProposal: {
    encode(message: CancelIncentiveProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CancelIncentiveProposal;
    fromJSON(object: any): CancelIncentiveProposal;
    toJSON(message: CancelIncentiveProposal): unknown;
    fromPartial(object: DeepPartial<CancelIncentiveProposal>): CancelIncentiveProposal;
};
