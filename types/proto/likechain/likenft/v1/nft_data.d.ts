import { ClassParent } from "./class_data";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface NFTData {
    metadata: Uint8Array;
    classParent: ClassParent;
    toBeRevealed: boolean;
}
export declare const NFTData: {
    encode(message: NFTData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NFTData;
    fromJSON(object: any): NFTData;
    toJSON(message: NFTData): unknown;
    fromPartial(object: DeepPartial<NFTData>): NFTData;
};
