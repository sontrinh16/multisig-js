import { KeyRequirement } from "../exported/v1beta1/types";
import { Threshold } from "../../utils/v1beta1/threshold";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** Params is the parameter set for this module */
export interface Params {
    /** KeyRequirements defines the requirement for each key role */
    keyRequirements: KeyRequirement[];
    /**
     * SuspendDurationInBlocks defines the number of blocks a
     * validator is disallowed to participate in any TSS ceremony after
     * committing a malicious behaviour during signing
     */
    suspendDurationInBlocks: Long;
    /**
     * HeartBeatPeriodInBlocks defines the time period in blocks for tss to
     * emit the event asking validators to send their heartbeats
     */
    heartbeatPeriodInBlocks: Long;
    maxMissedBlocksPerWindow: Threshold;
    unbondingLockingKeyRotationCount: Long;
    externalMultisigThreshold: Threshold;
    maxSignQueueSize: Long;
    maxSimultaneousSignShares: Long;
    tssSignedBlocksWindow: Long;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: DeepPartial<Params>): Params;
};
