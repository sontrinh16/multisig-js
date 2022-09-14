import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface KeygenRequest {
    keyUid: string;
    /** used only for logging */
    partyUid: string;
}
export interface KeygenResponse {
    /** SEC1-encoded compressed curve point */
    pubKey?: Uint8Array;
    /** reply with an error message if keygen fails */
    error?: string;
}
export interface SignRequest {
    keyUid: string;
    /** 32-byte pre-hashed message digest */
    msgToSign: Uint8Array;
    /** used only for logging */
    partyUid: string;
    /**
     * SEC1-encoded compressed pub key bytes to find the right
     * mnemonic. Latest is used, if empty.
     */
    pubKey: Uint8Array;
}
export interface SignResponse {
    /** ASN.1 DER-encoded ECDSA signature */
    signature?: Uint8Array;
    /** reply with an error message if sign fails */
    error?: string;
}
export declare const KeygenRequest: {
    encode(message: KeygenRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeygenRequest;
    fromJSON(object: any): KeygenRequest;
    toJSON(message: KeygenRequest): unknown;
    fromPartial(object: DeepPartial<KeygenRequest>): KeygenRequest;
};
export declare const KeygenResponse: {
    encode(message: KeygenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeygenResponse;
    fromJSON(object: any): KeygenResponse;
    toJSON(message: KeygenResponse): unknown;
    fromPartial(object: DeepPartial<KeygenResponse>): KeygenResponse;
};
export declare const SignRequest: {
    encode(message: SignRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignRequest;
    fromJSON(object: any): SignRequest;
    toJSON(message: SignRequest): unknown;
    fromPartial(object: DeepPartial<SignRequest>): SignRequest;
};
export declare const SignResponse: {
    encode(message: SignResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignResponse;
    fromJSON(object: any): SignResponse;
    toJSON(message: SignResponse): unknown;
    fromPartial(object: DeepPartial<SignResponse>): SignResponse;
};
