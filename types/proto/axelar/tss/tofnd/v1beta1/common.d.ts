import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export declare enum KeyPresenceResponse_Response {
    RESPONSE_UNSPECIFIED = 0,
    RESPONSE_PRESENT = 1,
    RESPONSE_ABSENT = 2,
    RESPONSE_FAIL = 3,
    UNRECOGNIZED = -1
}
export declare function keyPresenceResponse_ResponseFromJSON(object: any): KeyPresenceResponse_Response;
export declare function keyPresenceResponse_ResponseToJSON(object: KeyPresenceResponse_Response): string;
/** Key presence check types */
export interface KeyPresenceRequest {
    keyUid: string;
    /**
     * SEC1-encoded compressed pub key bytes to find the right
     * mnemonic. Latest is used, if empty.
     */
    pubKey: Uint8Array;
}
export interface KeyPresenceResponse {
    response: KeyPresenceResponse_Response;
}
export declare const KeyPresenceRequest: {
    encode(message: KeyPresenceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeyPresenceRequest;
    fromJSON(object: any): KeyPresenceRequest;
    toJSON(message: KeyPresenceRequest): unknown;
    fromPartial(object: DeepPartial<KeyPresenceRequest>): KeyPresenceRequest;
};
export declare const KeyPresenceResponse: {
    encode(message: KeyPresenceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeyPresenceResponse;
    fromJSON(object: any): KeyPresenceResponse;
    toJSON(message: KeyPresenceResponse): unknown;
    fromPartial(object: DeepPartial<KeyPresenceResponse>): KeyPresenceResponse;
};
