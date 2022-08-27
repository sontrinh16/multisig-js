import { Proof } from "./proof";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** MsgStartRequest defines the SDK message for starting a session */
export interface MsgStartRequest {
    from: string;
    id: Long;
    node: string;
}
/** MsgUpdateRequest defines the SDK message for updating a session */
export interface MsgUpdateRequest {
    from: string;
    proof: Proof;
    signature: Uint8Array;
}
/** MsgEndRequest defines the SDK message for ending a session */
export interface MsgEndRequest {
    from: string;
    id: Long;
    rating: Long;
}
/** MsgStartResponse defines the response of message MsgStartRequest */
export interface MsgStartResponse {
}
/** MsgUpdateResponse defines the response of message MsgUpdateRequest */
export interface MsgUpdateResponse {
}
/** MsgEndResponse defines the response of message MsgEndRequest */
export interface MsgEndResponse {
}
export declare const MsgStartRequest: {
    encode(message: MsgStartRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgStartRequest;
    fromJSON(object: any): MsgStartRequest;
    toJSON(message: MsgStartRequest): unknown;
    fromPartial(object: DeepPartial<MsgStartRequest>): MsgStartRequest;
};
export declare const MsgUpdateRequest: {
    encode(message: MsgUpdateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateRequest;
    fromJSON(object: any): MsgUpdateRequest;
    toJSON(message: MsgUpdateRequest): unknown;
    fromPartial(object: DeepPartial<MsgUpdateRequest>): MsgUpdateRequest;
};
export declare const MsgEndRequest: {
    encode(message: MsgEndRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgEndRequest;
    fromJSON(object: any): MsgEndRequest;
    toJSON(message: MsgEndRequest): unknown;
    fromPartial(object: DeepPartial<MsgEndRequest>): MsgEndRequest;
};
export declare const MsgStartResponse: {
    encode(_: MsgStartResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgStartResponse;
    fromJSON(_: any): MsgStartResponse;
    toJSON(_: MsgStartResponse): unknown;
    fromPartial(_: DeepPartial<MsgStartResponse>): MsgStartResponse;
};
export declare const MsgUpdateResponse: {
    encode(_: MsgUpdateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateResponse;
    fromJSON(_: any): MsgUpdateResponse;
    toJSON(_: MsgUpdateResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateResponse>): MsgUpdateResponse;
};
export declare const MsgEndResponse: {
    encode(_: MsgEndResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgEndResponse;
    fromJSON(_: any): MsgEndResponse;
    toJSON(_: MsgEndResponse): unknown;
    fromPartial(_: DeepPartial<MsgEndResponse>): MsgEndResponse;
};
