import { KeyInfo } from "./types";
import { KeyRole, SigKeyPair } from "../exported/v1beta1/types";
import { TrafficOut, MessageOut_KeygenResult, MessageOut_SignResult } from "../tofnd/v1beta1/tofnd";
import { PollKey } from "../../vote/exported/v1beta1/types";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** StartKeygenRequest indicate the start of keygen */
export interface StartKeygenRequest {
    sender: string;
    keyInfo: KeyInfo;
}
export interface StartKeygenResponse {
}
export interface RotateKeyRequest {
    sender: Uint8Array;
    chain: string;
    keyRole: KeyRole;
    keyId: string;
}
export interface RotateKeyResponse {
}
/** ProcessKeygenTrafficRequest protocol message */
export interface ProcessKeygenTrafficRequest {
    sender: Uint8Array;
    sessionId: string;
    payload: TrafficOut;
}
export interface ProcessKeygenTrafficResponse {
}
/** ProcessSignTrafficRequest protocol message */
export interface ProcessSignTrafficRequest {
    sender: Uint8Array;
    sessionId: string;
    payload: TrafficOut;
}
export interface ProcessSignTrafficResponse {
}
/** VotePubKeyRequest represents the message to vote on a public key */
export interface VotePubKeyRequest {
    sender: Uint8Array;
    pollKey: PollKey;
    result: MessageOut_KeygenResult;
}
export interface VotePubKeyResponse {
    log: string;
}
/** VoteSigRequest represents a message to vote for a signature */
export interface VoteSigRequest {
    sender: Uint8Array;
    pollKey: PollKey;
    result: MessageOut_SignResult;
}
export interface VoteSigResponse {
    log: string;
}
export interface HeartBeatRequest {
    sender: Uint8Array;
    keyIds: string[];
}
export interface HeartBeatResponse {
}
export interface RegisterExternalKeysRequest {
    sender: Uint8Array;
    chain: string;
    externalKeys: RegisterExternalKeysRequest_ExternalKey[];
}
export interface RegisterExternalKeysRequest_ExternalKey {
    id: string;
    pubKey: Uint8Array;
}
export interface RegisterExternalKeysResponse {
}
export interface SubmitMultisigPubKeysRequest {
    sender: Uint8Array;
    keyId: string;
    sigKeyPairs: SigKeyPair[];
}
export interface SubmitMultisigPubKeysResponse {
}
export interface SubmitMultisigSignaturesRequest {
    sender: Uint8Array;
    sigId: string;
    signatures: Uint8Array[];
}
export interface SubmitMultisigSignaturesResponse {
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
export declare const ProcessKeygenTrafficRequest: {
    encode(message: ProcessKeygenTrafficRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProcessKeygenTrafficRequest;
    fromJSON(object: any): ProcessKeygenTrafficRequest;
    toJSON(message: ProcessKeygenTrafficRequest): unknown;
    fromPartial(object: DeepPartial<ProcessKeygenTrafficRequest>): ProcessKeygenTrafficRequest;
};
export declare const ProcessKeygenTrafficResponse: {
    encode(_: ProcessKeygenTrafficResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProcessKeygenTrafficResponse;
    fromJSON(_: any): ProcessKeygenTrafficResponse;
    toJSON(_: ProcessKeygenTrafficResponse): unknown;
    fromPartial(_: DeepPartial<ProcessKeygenTrafficResponse>): ProcessKeygenTrafficResponse;
};
export declare const ProcessSignTrafficRequest: {
    encode(message: ProcessSignTrafficRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProcessSignTrafficRequest;
    fromJSON(object: any): ProcessSignTrafficRequest;
    toJSON(message: ProcessSignTrafficRequest): unknown;
    fromPartial(object: DeepPartial<ProcessSignTrafficRequest>): ProcessSignTrafficRequest;
};
export declare const ProcessSignTrafficResponse: {
    encode(_: ProcessSignTrafficResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProcessSignTrafficResponse;
    fromJSON(_: any): ProcessSignTrafficResponse;
    toJSON(_: ProcessSignTrafficResponse): unknown;
    fromPartial(_: DeepPartial<ProcessSignTrafficResponse>): ProcessSignTrafficResponse;
};
export declare const VotePubKeyRequest: {
    encode(message: VotePubKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VotePubKeyRequest;
    fromJSON(object: any): VotePubKeyRequest;
    toJSON(message: VotePubKeyRequest): unknown;
    fromPartial(object: DeepPartial<VotePubKeyRequest>): VotePubKeyRequest;
};
export declare const VotePubKeyResponse: {
    encode(message: VotePubKeyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VotePubKeyResponse;
    fromJSON(object: any): VotePubKeyResponse;
    toJSON(message: VotePubKeyResponse): unknown;
    fromPartial(object: DeepPartial<VotePubKeyResponse>): VotePubKeyResponse;
};
export declare const VoteSigRequest: {
    encode(message: VoteSigRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VoteSigRequest;
    fromJSON(object: any): VoteSigRequest;
    toJSON(message: VoteSigRequest): unknown;
    fromPartial(object: DeepPartial<VoteSigRequest>): VoteSigRequest;
};
export declare const VoteSigResponse: {
    encode(message: VoteSigResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VoteSigResponse;
    fromJSON(object: any): VoteSigResponse;
    toJSON(message: VoteSigResponse): unknown;
    fromPartial(object: DeepPartial<VoteSigResponse>): VoteSigResponse;
};
export declare const HeartBeatRequest: {
    encode(message: HeartBeatRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HeartBeatRequest;
    fromJSON(object: any): HeartBeatRequest;
    toJSON(message: HeartBeatRequest): unknown;
    fromPartial(object: DeepPartial<HeartBeatRequest>): HeartBeatRequest;
};
export declare const HeartBeatResponse: {
    encode(_: HeartBeatResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HeartBeatResponse;
    fromJSON(_: any): HeartBeatResponse;
    toJSON(_: HeartBeatResponse): unknown;
    fromPartial(_: DeepPartial<HeartBeatResponse>): HeartBeatResponse;
};
export declare const RegisterExternalKeysRequest: {
    encode(message: RegisterExternalKeysRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterExternalKeysRequest;
    fromJSON(object: any): RegisterExternalKeysRequest;
    toJSON(message: RegisterExternalKeysRequest): unknown;
    fromPartial(object: DeepPartial<RegisterExternalKeysRequest>): RegisterExternalKeysRequest;
};
export declare const RegisterExternalKeysRequest_ExternalKey: {
    encode(message: RegisterExternalKeysRequest_ExternalKey, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterExternalKeysRequest_ExternalKey;
    fromJSON(object: any): RegisterExternalKeysRequest_ExternalKey;
    toJSON(message: RegisterExternalKeysRequest_ExternalKey): unknown;
    fromPartial(object: DeepPartial<RegisterExternalKeysRequest_ExternalKey>): RegisterExternalKeysRequest_ExternalKey;
};
export declare const RegisterExternalKeysResponse: {
    encode(_: RegisterExternalKeysResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterExternalKeysResponse;
    fromJSON(_: any): RegisterExternalKeysResponse;
    toJSON(_: RegisterExternalKeysResponse): unknown;
    fromPartial(_: DeepPartial<RegisterExternalKeysResponse>): RegisterExternalKeysResponse;
};
export declare const SubmitMultisigPubKeysRequest: {
    encode(message: SubmitMultisigPubKeysRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubmitMultisigPubKeysRequest;
    fromJSON(object: any): SubmitMultisigPubKeysRequest;
    toJSON(message: SubmitMultisigPubKeysRequest): unknown;
    fromPartial(object: DeepPartial<SubmitMultisigPubKeysRequest>): SubmitMultisigPubKeysRequest;
};
export declare const SubmitMultisigPubKeysResponse: {
    encode(_: SubmitMultisigPubKeysResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubmitMultisigPubKeysResponse;
    fromJSON(_: any): SubmitMultisigPubKeysResponse;
    toJSON(_: SubmitMultisigPubKeysResponse): unknown;
    fromPartial(_: DeepPartial<SubmitMultisigPubKeysResponse>): SubmitMultisigPubKeysResponse;
};
export declare const SubmitMultisigSignaturesRequest: {
    encode(message: SubmitMultisigSignaturesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubmitMultisigSignaturesRequest;
    fromJSON(object: any): SubmitMultisigSignaturesRequest;
    toJSON(message: SubmitMultisigSignaturesRequest): unknown;
    fromPartial(object: DeepPartial<SubmitMultisigSignaturesRequest>): SubmitMultisigSignaturesRequest;
};
export declare const SubmitMultisigSignaturesResponse: {
    encode(_: SubmitMultisigSignaturesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubmitMultisigSignaturesResponse;
    fromJSON(_: any): SubmitMultisigSignaturesResponse;
    toJSON(_: SubmitMultisigSignaturesResponse): unknown;
    fromPartial(_: DeepPartial<SubmitMultisigSignaturesResponse>): SubmitMultisigSignaturesResponse;
};
