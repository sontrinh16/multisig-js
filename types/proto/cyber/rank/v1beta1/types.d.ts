import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface Params {
    calculationPeriod: Long;
    dampingFactor: string;
    tolerance: string;
}
export interface RankedParticle {
    particle: string;
    rank: Long;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: DeepPartial<Params>): Params;
};
export declare const RankedParticle: {
    encode(message: RankedParticle, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RankedParticle;
    fromJSON(object: any): RankedParticle;
    toJSON(message: RankedParticle): unknown;
    fromPartial(object: DeepPartial<RankedParticle>): RankedParticle;
};
