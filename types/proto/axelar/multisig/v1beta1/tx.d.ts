import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface StartKeygenRequest {
    sender: string;
    keyId: string;
}
export interface StartKeygenResponse {
}
export interface SubmitPubKeyRequest {
    sender: string;
    keyId: string;
    pubKey: Uint8Array;
    signature: Uint8Array;
}
export interface SubmitPubKeyResponse {
}
export interface SubmitSignatureRequest {
    sender: string;
    sigId: Long;
    signature: Uint8Array;
}
export interface SubmitSignatureResponse {
}
export interface RotateKeyRequest {
    sender: Uint8Array;
    chain: string;
    keyId: string;
}
export interface RotateKeyResponse {
}
export declare const StartKeygenRequest: {
    encode(message: StartKeygenRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StartKeygenRequest;
    fromJSON(object: any): StartKeygenRequest;
    toJSON(message: StartKeygenRequest): unknown;
    fromPartial(object: DeepPartial<StartKeygenRequest>): StartKeygenRequest;
};
export declare const StartKeygenResponse: {
    encode(_: StartKeygenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StartKeygenResponse;
    fromJSON(_: any): StartKeygenResponse;
    toJSON(_: StartKeygenResponse): unknown;
    fromPartial(_: DeepPartial<StartKeygenResponse>): StartKeygenResponse;
};
export declare const SubmitPubKeyRequest: {
    encode(message: SubmitPubKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubmitPubKeyRequest;
    fromJSON(object: any): SubmitPubKeyRequest;
    toJSON(message: SubmitPubKeyRequest): unknown;
    fromPartial(object: DeepPartial<SubmitPubKeyRequest>): SubmitPubKeyRequest;
};
export declare const SubmitPubKeyResponse: {
    encode(_: SubmitPubKeyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubmitPubKeyResponse;
    fromJSON(_: any): SubmitPubKeyResponse;
    toJSON(_: SubmitPubKeyResponse): unknown;
    fromPartial(_: DeepPartial<SubmitPubKeyResponse>): SubmitPubKeyResponse;
};
export declare const SubmitSignatureRequest: {
    encode(message: SubmitSignatureRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubmitSignatureRequest;
    fromJSON(object: any): SubmitSignatureRequest;
    toJSON(message: SubmitSignatureRequest): unknown;
    fromPartial(object: DeepPartial<SubmitSignatureRequest>): SubmitSignatureRequest;
};
export declare const SubmitSignatureResponse: {
    encode(_: SubmitSignatureResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubmitSignatureResponse;
    fromJSON(_: any): SubmitSignatureResponse;
    toJSON(_: SubmitSignatureResponse): unknown;
    fromPartial(_: DeepPartial<SubmitSignatureResponse>): SubmitSignatureResponse;
};
export declare const RotateKeyRequest: {
    encode(message: RotateKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RotateKeyRequest;
    fromJSON(object: any): RotateKeyRequest;
    toJSON(message: RotateKeyRequest): unknown;
    fromPartial(object: DeepPartial<RotateKeyRequest>): RotateKeyRequest;
};
export declare const RotateKeyResponse: {
    encode(_: RotateKeyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RotateKeyResponse;
    fromJSON(_: any): RotateKeyResponse;
    toJSON(_: RotateKeyResponse): unknown;
    fromPartial(_: DeepPartial<RotateKeyResponse>): RotateKeyResponse;
};
