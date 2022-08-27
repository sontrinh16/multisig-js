import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface Cork {
    /** call body containing the ABI encoded bytes to send to the contract */
    encodedContractCall: Uint8Array;
    /** address of the contract to send the call */
    targetContractAddress: string;
}
export interface ValidatorCork {
    cork: Cork;
    validator: string;
}
export interface ScheduledCork {
    cork: Cork;
    blockHeight: Long;
    validator: string;
}
export interface CellarIDSet {
    ids: string[];
}
export declare const Cork: {
    encode(message: Cork, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Cork;
    fromJSON(object: any): Cork;
    toJSON(message: Cork): unknown;
    fromPartial(object: DeepPartial<Cork>): Cork;
};
export declare const ValidatorCork: {
    encode(message: ValidatorCork, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorCork;
    fromJSON(object: any): ValidatorCork;
    toJSON(message: ValidatorCork): unknown;
    fromPartial(object: DeepPartial<ValidatorCork>): ValidatorCork;
};
export declare const ScheduledCork: {
    encode(message: ScheduledCork, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ScheduledCork;
    fromJSON(object: any): ScheduledCork;
    toJSON(message: ScheduledCork): unknown;
    fromPartial(object: DeepPartial<ScheduledCork>): ScheduledCork;
};
export declare const CellarIDSet: {
    encode(message: CellarIDSet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CellarIDSet;
    fromJSON(object: any): CellarIDSet;
    toJSON(message: CellarIDSet): unknown;
    fromPartial(object: DeepPartial<CellarIDSet>): CellarIDSet;
};
