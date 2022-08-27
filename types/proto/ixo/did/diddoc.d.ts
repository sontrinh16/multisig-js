import { DidCredential } from "./did";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** BaseDidDoc defines a base DID document type. It implements the DidDoc interface. */
export interface BaseDidDoc {
    did: string;
    pubKey: string;
    credentials: DidCredential[];
}
export declare const BaseDidDoc: {
    encode(message: BaseDidDoc, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BaseDidDoc;
    fromJSON(object: any): BaseDidDoc;
    toJSON(message: BaseDidDoc): unknown;
    fromPartial(object: DeepPartial<BaseDidDoc>): BaseDidDoc;
};
