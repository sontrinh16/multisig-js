import { Plan } from "./plan";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface GenesisPlan {
    plan: Plan;
    nodes: string[];
}
export declare const GenesisPlan: {
    encode(message: GenesisPlan, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisPlan;
    fromJSON(object: any): GenesisPlan;
    toJSON(message: GenesisPlan): unknown;
    fromPartial(object: DeepPartial<GenesisPlan>): GenesisPlan;
};
