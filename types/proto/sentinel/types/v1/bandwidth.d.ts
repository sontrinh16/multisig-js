import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface Bandwidth {
    upload: string;
    download: string;
}
export declare const Bandwidth: {
    encode(message: Bandwidth, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Bandwidth;
    fromJSON(object: any): Bandwidth;
    toJSON(message: Bandwidth): unknown;
    fromPartial(object: DeepPartial<Bandwidth>): Bandwidth;
};
