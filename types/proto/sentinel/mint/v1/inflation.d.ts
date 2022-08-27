import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface Inflation {
    max: string;
    min: string;
    rateChange: string;
    timestamp: Date;
}
export declare const Inflation: {
    encode(message: Inflation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Inflation;
    fromJSON(object: any): Inflation;
    toJSON(message: Inflation): unknown;
    fromPartial(object: DeepPartial<Inflation>): Inflation;
};
