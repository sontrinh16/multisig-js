import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface Voted {
    module: string;
    action: string;
    poll: string;
    voter: string;
    state: string;
}
export declare const Voted: {
    encode(message: Voted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Voted;
    fromJSON(object: any): Voted;
    toJSON(message: Voted): unknown;
    fromPartial(object: DeepPartial<Voted>): Voted;
};
