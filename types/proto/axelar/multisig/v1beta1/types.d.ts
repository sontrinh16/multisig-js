import { Snapshot } from "../../snapshot/exported/v1beta1/types";
import { Threshold } from "../../utils/v1beta1/threshold";
import { KeyState, MultisigState } from "../exported/v1beta1/types";
import { Any } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface Key_PubKeysEntry {
    key: string;
    value: Uint8Array;
}
export interface Key {
    id: string;
    snapshot: Snapshot;
    pubKeys: {
        [key: string]: Uint8Array;
    };
    signingThreshold: Threshold;
    state: KeyState;
}
export interface KeygenSession_IsPubKeyReceivedEntry {
    key: string;
    value: boolean;
}
export interface KeygenSession {
    key: Key;
    state: MultisigState;
    keygenThreshold: Threshold;
    expiresAt: Long;
    completedAt: Long;
    isPubKeyReceived: {
        [key: string]: boolean;
    };
    gracePeriod: Long;
}
export interface MultiSig_SigsEntry {
    key: string;
    value: Uint8Array;
}
export interface MultiSig {
    keyId: string;
    payloadHash: Uint8Array;
    sigs: {
        [key: string]: Uint8Array;
    };
}
export interface SigningSession {
    id: Long;
    multiSig: MultiSig;
    state: MultisigState;
    key: Key;
    expiresAt: Long;
    completedAt: Long;
    gracePeriod: Long;
    module: string;
    moduleMetadata: Any;
}
export interface KeyEpoch {
    epoch: Long;
    chain: string;
    keyId: string;
}
export declare const Key_PubKeysEntry: {
    encode(message: Key_PubKeysEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Key_PubKeysEntry;
    fromJSON(object: any): Key_PubKeysEntry;
    toJSON(message: Key_PubKeysEntry): unknown;
    fromPartial(object: DeepPartial<Key_PubKeysEntry>): Key_PubKeysEntry;
};
export declare const Key: {
    encode(message: Key, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Key;
    fromJSON(object: any): Key;
    toJSON(message: Key): unknown;
    fromPartial(object: DeepPartial<Key>): Key;
};
export declare const KeygenSession_IsPubKeyReceivedEntry: {
    encode(message: KeygenSession_IsPubKeyReceivedEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeygenSession_IsPubKeyReceivedEntry;
    fromJSON(object: any): KeygenSession_IsPubKeyReceivedEntry;
    toJSON(message: KeygenSession_IsPubKeyReceivedEntry): unknown;
    fromPartial(object: DeepPartial<KeygenSession_IsPubKeyReceivedEntry>): KeygenSession_IsPubKeyReceivedEntry;
};
export declare const KeygenSession: {
    encode(message: KeygenSession, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeygenSession;
    fromJSON(object: any): KeygenSession;
    toJSON(message: KeygenSession): unknown;
    fromPartial(object: DeepPartial<KeygenSession>): KeygenSession;
};
export declare const MultiSig_SigsEntry: {
    encode(message: MultiSig_SigsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MultiSig_SigsEntry;
    fromJSON(object: any): MultiSig_SigsEntry;
    toJSON(message: MultiSig_SigsEntry): unknown;
    fromPartial(object: DeepPartial<MultiSig_SigsEntry>): MultiSig_SigsEntry;
};
export declare const MultiSig: {
    encode(message: MultiSig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MultiSig;
    fromJSON(object: any): MultiSig;
    toJSON(message: MultiSig): unknown;
    fromPartial(object: DeepPartial<MultiSig>): MultiSig;
};
export declare const SigningSession: {
    encode(message: SigningSession, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SigningSession;
    fromJSON(object: any): SigningSession;
    toJSON(message: SigningSession): unknown;
    fromPartial(object: DeepPartial<SigningSession>): SigningSession;
};
export declare const KeyEpoch: {
    encode(message: KeyEpoch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeyEpoch;
    fromJSON(object: any): KeyEpoch;
    toJSON(message: KeyEpoch): unknown;
    fromPartial(object: DeepPartial<KeyEpoch>): KeyEpoch;
};
