import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface InternalDuration {
    name: string;
    duration: number;
}
export declare const InternalDuration: {
    encode(message: InternalDuration, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InternalDuration;
    fromJSON(object: any): InternalDuration;
    toJSON(message: InternalDuration): unknown;
    fromPartial(object: DeepPartial<InternalDuration>): InternalDuration;
};
