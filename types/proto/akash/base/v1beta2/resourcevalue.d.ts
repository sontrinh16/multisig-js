import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** Unit stores cpu, memory and storage metrics */
export interface ResourceValue {
    val: Uint8Array;
}
export declare const ResourceValue: {
    encode(message: ResourceValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResourceValue;
    fromJSON(object: any): ResourceValue;
    toJSON(message: ResourceValue): unknown;
    fromPartial(object: DeepPartial<ResourceValue>): ResourceValue;
};
