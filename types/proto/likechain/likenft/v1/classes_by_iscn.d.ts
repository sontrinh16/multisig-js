import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface ClassesByISCN {
    iscnIdPrefix: string;
    classIds: string[];
}
export declare const ClassesByISCN: {
    encode(message: ClassesByISCN, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClassesByISCN;
    fromJSON(object: any): ClassesByISCN;
    toJSON(message: ClassesByISCN): unknown;
    fromPartial(object: DeepPartial<ClassesByISCN>): ClassesByISCN;
};
