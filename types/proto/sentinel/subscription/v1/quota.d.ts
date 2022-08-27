import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface Quota {
    address: string;
    allocated: string;
    consumed: string;
}
export declare const Quota: {
    encode(message: Quota, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Quota;
    fromJSON(object: any): Quota;
    toJSON(message: Quota): unknown;
    fromPartial(object: DeepPartial<Quota>): Quota;
};
