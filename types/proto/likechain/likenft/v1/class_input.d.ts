import { ClassConfig, ClassParentType } from "./class_data";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface ClassInput {
    name: string;
    symbol: string;
    description: string;
    uri: string;
    uriHash: string;
    metadata: Uint8Array;
    config: ClassConfig;
}
export interface ClassParentInput {
    type: ClassParentType;
    iscnIdPrefix?: string;
}
export declare const ClassInput: {
    encode(message: ClassInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClassInput;
    fromJSON(object: any): ClassInput;
    toJSON(message: ClassInput): unknown;
    fromPartial(object: DeepPartial<ClassInput>): ClassInput;
};
export declare const ClassParentInput: {
    encode(message: ClassParentInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClassParentInput;
    fromJSON(object: any): ClassParentInput;
    toJSON(message: ClassParentInput): unknown;
    fromPartial(object: DeepPartial<ClassParentInput>): ClassParentInput;
};
