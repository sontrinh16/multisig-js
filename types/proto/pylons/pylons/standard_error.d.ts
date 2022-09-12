import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface StandardError {
    code: string;
    message: string;
}
export declare const StandardError: {
    encode(message: StandardError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StandardError;
    fromJSON(object: any): StandardError;
    toJSON(message: StandardError): unknown;
    fromPartial(object: DeepPartial<StandardError>): StandardError;
};
