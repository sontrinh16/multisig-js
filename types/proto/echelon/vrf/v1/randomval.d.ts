import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface Randomval {
    index: string;
    creator: string;
    vrv: string;
    multiplier: Long;
    proof: string;
    pubk: string;
    message: string;
    /** bytes to int converted */
    parsedvrv: Long;
    /**
     * floatvrv = full vrv / max uint64 to get number in
     * between or equal to 0 and 1
     */
    floatvrv: number;
    /** int vrv = floatvrv * multiplier */
    finalvrv: Long;
    /** float vrv = floatvrv * multiplier casted to int */
    finalvrvfl: number;
}
export declare const Randomval: {
    encode(message: Randomval, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Randomval;
    fromJSON(object: any): Randomval;
    toJSON(message: Randomval): unknown;
    fromPartial(object: DeepPartial<Randomval>): Randomval;
};
