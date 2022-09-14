import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface KeygenStarted {
    module: string;
    keyId: string;
    participants: Uint8Array[];
}
export interface KeygenCompleted {
    module: string;
    keyId: string;
}
export interface KeygenExpired {
    module: string;
    keyId: string;
}
export interface PubKeySubmitted {
    module: string;
    keyId: string;
    participant: Uint8Array;
    pubKey: Uint8Array;
}
export interface SigningStarted_PubKeysEntry {
    key: string;
    value: Uint8Array;
}
export interface SigningStarted {
    module: string;
    sigId: Long;
    keyId: string;
    pubKeys: {
        [key: string]: Uint8Array;
    };
    payloadHash: Uint8Array;
    requestingModule: string;
}
export interface SigningCompleted {
    module: string;
    sigId: Long;
}
export interface SigningExpired {
    module: string;
    sigId: Long;
}
export interface SignatureSubmitted {
    module: string;
    sigId: Long;
    participant: Uint8Array;
    signature: Uint8Array;
}
export interface KeyAssigned {
    module: string;
    chain: string;
    keyId: string;
}
export interface KeyRotated {
    module: string;
    chain: string;
    keyId: string;
}
export declare const KeygenStarted: {
    encode(message: KeygenStarted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeygenStarted;
    fromJSON(object: any): KeygenStarted;
    toJSON(message: KeygenStarted): unknown;
    fromPartial(object: DeepPartial<KeygenStarted>): KeygenStarted;
};
export declare const KeygenCompleted: {
    encode(message: KeygenCompleted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeygenCompleted;
    fromJSON(object: any): KeygenCompleted;
    toJSON(message: KeygenCompleted): unknown;
    fromPartial(object: DeepPartial<KeygenCompleted>): KeygenCompleted;
};
export declare const KeygenExpired: {
    encode(message: KeygenExpired, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeygenExpired;
    fromJSON(object: any): KeygenExpired;
    toJSON(message: KeygenExpired): unknown;
    fromPartial(object: DeepPartial<KeygenExpired>): KeygenExpired;
};
export declare const PubKeySubmitted: {
    encode(message: PubKeySubmitted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PubKeySubmitted;
    fromJSON(object: any): PubKeySubmitted;
    toJSON(message: PubKeySubmitted): unknown;
    fromPartial(object: DeepPartial<PubKeySubmitted>): PubKeySubmitted;
};
export declare const SigningStarted_PubKeysEntry: {
    encode(message: SigningStarted_PubKeysEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SigningStarted_PubKeysEntry;
    fromJSON(object: any): SigningStarted_PubKeysEntry;
    toJSON(message: SigningStarted_PubKeysEntry): unknown;
    fromPartial(object: DeepPartial<SigningStarted_PubKeysEntry>): SigningStarted_PubKeysEntry;
};
export declare const SigningStarted: {
    encode(message: SigningStarted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SigningStarted;
    fromJSON(object: any): SigningStarted;
    toJSON(message: SigningStarted): unknown;
    fromPartial(object: DeepPartial<SigningStarted>): SigningStarted;
};
export declare const SigningCompleted: {
    encode(message: SigningCompleted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SigningCompleted;
    fromJSON(object: any): SigningCompleted;
    toJSON(message: SigningCompleted): unknown;
    fromPartial(object: DeepPartial<SigningCompleted>): SigningCompleted;
};
export declare const SigningExpired: {
    encode(message: SigningExpired, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SigningExpired;
    fromJSON(object: any): SigningExpired;
    toJSON(message: SigningExpired): unknown;
    fromPartial(object: DeepPartial<SigningExpired>): SigningExpired;
};
export declare const SignatureSubmitted: {
    encode(message: SignatureSubmitted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignatureSubmitted;
    fromJSON(object: any): SignatureSubmitted;
    toJSON(message: SignatureSubmitted): unknown;
    fromPartial(object: DeepPartial<SignatureSubmitted>): SignatureSubmitted;
};
export declare const KeyAssigned: {
    encode(message: KeyAssigned, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeyAssigned;
    fromJSON(object: any): KeyAssigned;
    toJSON(message: KeyAssigned): unknown;
    fromPartial(object: DeepPartial<KeyAssigned>): KeyAssigned;
};
export declare const KeyRotated: {
    encode(message: KeyRotated, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeyRotated;
    fromJSON(object: any): KeyRotated;
    toJSON(message: KeyRotated): unknown;
    fromPartial(object: DeepPartial<KeyRotated>): KeyRotated;
};
