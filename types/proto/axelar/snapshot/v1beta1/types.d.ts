import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface ProxiedValidator {
    validator: Uint8Array;
    proxy: Uint8Array;
    active: boolean;
}
export declare const ProxiedValidator: {
    encode(message: ProxiedValidator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProxiedValidator;
    fromJSON(object: any): ProxiedValidator;
    toJSON(message: ProxiedValidator): unknown;
    fromPartial(object: DeepPartial<ProxiedValidator>): ProxiedValidator;
};
