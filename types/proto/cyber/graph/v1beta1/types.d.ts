import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface Link {
    from: string;
    to: string;
}
export declare const Link: {
    encode(message: Link, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Link;
    fromJSON(object: any): Link;
    toJSON(message: Link): unknown;
    fromPartial(object: DeepPartial<Link>): Link;
};
