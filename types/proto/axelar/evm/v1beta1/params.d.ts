import { NetworkInfo } from "./types";
import { Threshold } from "../../utils/v1beta1/threshold";
import { Chain } from "../../nexus/exported/v1beta1/types";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** Params is the parameter set for this module */
export interface Params {
    chain: string;
    confirmationHeight: Long;
    network: string;
    tokenCode: Uint8Array;
    burnable: Uint8Array;
    revoteLockingPeriod: Long;
    networks: NetworkInfo[];
    votingThreshold: Threshold;
    minVoterCount: Long;
    commandsGasLimit: number;
    votingGracePeriod: Long;
    endBlockerLimit: Long;
    transferLimit: Long;
}
export interface PendingChain {
    params: Params;
    chain: Chain;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: DeepPartial<Params>): Params;
};
export declare const PendingChain: {
    encode(message: PendingChain, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PendingChain;
    fromJSON(object: any): PendingChain;
    toJSON(message: PendingChain): unknown;
    fromPartial(object: DeepPartial<PendingChain>): PendingChain;
};
