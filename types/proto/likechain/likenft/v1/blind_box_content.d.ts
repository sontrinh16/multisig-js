import { NFTInput } from "./nft_input";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface BlindBoxContent {
    classId: string;
    id: string;
    input: NFTInput;
}
export declare const BlindBoxContent: {
    encode(message: BlindBoxContent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BlindBoxContent;
    fromJSON(object: any): BlindBoxContent;
    toJSON(message: BlindBoxContent): unknown;
    fromPartial(object: DeepPartial<BlindBoxContent>): BlindBoxContent;
};
