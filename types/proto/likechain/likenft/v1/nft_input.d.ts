import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface NFTInput {
    uri: string;
    uriHash: string;
    metadata: Uint8Array;
}
export declare const NFTInput: {
    encode(message: NFTInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NFTInput;
    fromJSON(object: any): NFTInput;
    toJSON(message: NFTInput): unknown;
    fromPartial(object: DeepPartial<NFTInput>): NFTInput;
};
