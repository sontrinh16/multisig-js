import { KeyState, MultisigState } from "../exported/v1beta1/types";
import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface KeyIDRequest {
    chain: string;
}
/** KeyIDResponse contains the key ID of the key assigned to a given chain. */
export interface KeyIDResponse {
    keyId: string;
}
export interface NextKeyIDRequest {
    chain: string;
}
/**
 * NextKeyIDResponse contains the key ID for the next rotation on the given
 * chain
 */
export interface NextKeyIDResponse {
    keyId: string;
}
export interface KeyRequest {
    keyId: string;
}
export interface KeygenParticipant {
    address: string;
    weight: Uint8Array;
    pubKey: string;
}
/** KeyResponse contains the key corresponding to a given key id. */
export interface KeyResponse {
    keyId: string;
    state: KeyState;
    startedAt: Long;
    startedAtTimestamp: Timestamp;
    thresholdWeight: Uint8Array;
    bondedWeight: Uint8Array;
    /** Keygen participants in descending order by weight */
    participants: KeygenParticipant[];
}
export interface KeygenSessionRequest {
    keyId: string;
}
/** KeygenSessionResponse contains the keygen session info for a given key ID. */
export interface KeygenSessionResponse {
    startedAt: Long;
    startedAtTimestamp: Timestamp;
    expiresAt: Long;
    completedAt: Long;
    gracePeriod: Long;
    state: MultisigState;
    keygenThresholdWeight: Uint8Array;
    signingThresholdWeight: Uint8Array;
    bondedWeight: Uint8Array;
    /** Keygen candidates in descending order by weight */
    participants: KeygenParticipant[];
}
export declare const KeyIDRequest: {
    encode(message: KeyIDRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeyIDRequest;
    fromJSON(object: any): KeyIDRequest;
    toJSON(message: KeyIDRequest): unknown;
    fromPartial(object: DeepPartial<KeyIDRequest>): KeyIDRequest;
};
export declare const KeyIDResponse: {
    encode(message: KeyIDResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeyIDResponse;
    fromJSON(object: any): KeyIDResponse;
    toJSON(message: KeyIDResponse): unknown;
    fromPartial(object: DeepPartial<KeyIDResponse>): KeyIDResponse;
};
export declare const NextKeyIDRequest: {
    encode(message: NextKeyIDRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NextKeyIDRequest;
    fromJSON(object: any): NextKeyIDRequest;
    toJSON(message: NextKeyIDRequest): unknown;
    fromPartial(object: DeepPartial<NextKeyIDRequest>): NextKeyIDRequest;
};
export declare const NextKeyIDResponse: {
    encode(message: NextKeyIDResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NextKeyIDResponse;
    fromJSON(object: any): NextKeyIDResponse;
    toJSON(message: NextKeyIDResponse): unknown;
    fromPartial(object: DeepPartial<NextKeyIDResponse>): NextKeyIDResponse;
};
export declare const KeyRequest: {
    encode(message: KeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeyRequest;
    fromJSON(object: any): KeyRequest;
    toJSON(message: KeyRequest): unknown;
    fromPartial(object: DeepPartial<KeyRequest>): KeyRequest;
};
export declare const KeygenParticipant: {
    encode(message: KeygenParticipant, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeygenParticipant;
    fromJSON(object: any): KeygenParticipant;
    toJSON(message: KeygenParticipant): unknown;
    fromPartial(object: DeepPartial<KeygenParticipant>): KeygenParticipant;
};
export declare const KeyResponse: {
    encode(message: KeyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeyResponse;
    fromJSON(object: any): KeyResponse;
    toJSON(message: KeyResponse): unknown;
    fromPartial(object: DeepPartial<KeyResponse>): KeyResponse;
};
export declare const KeygenSessionRequest: {
    encode(message: KeygenSessionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeygenSessionRequest;
    fromJSON(object: any): KeygenSessionRequest;
    toJSON(message: KeygenSessionRequest): unknown;
    fromPartial(object: DeepPartial<KeygenSessionRequest>): KeygenSessionRequest;
};
export declare const KeygenSessionResponse: {
    encode(message: KeygenSessionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeygenSessionResponse;
    fromJSON(object: any): KeygenSessionResponse;
    toJSON(message: KeygenSessionResponse): unknown;
    fromPartial(object: DeepPartial<KeygenSessionResponse>): KeygenSessionResponse;
};
