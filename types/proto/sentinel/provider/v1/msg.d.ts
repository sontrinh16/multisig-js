import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** MsgRegisterRequest defines the SDK message for registering a provider */
export interface MsgRegisterRequest {
    from: string;
    name: string;
    identity: string;
    website: string;
    description: string;
}
/** MsgUpdateRequest defines the SDK message for updating a provider */
export interface MsgUpdateRequest {
    from: string;
    name: string;
    identity: string;
    website: string;
    description: string;
}
/** MsgRegisterResponse defines the response of message MsgRegisterRequest */
export interface MsgRegisterResponse {
}
/** MsgUpdateResponse defines the response of message MsgUpdateRequest */
export interface MsgUpdateResponse {
}
export declare const MsgRegisterRequest: {
    encode(message: MsgRegisterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterRequest;
    fromJSON(object: any): MsgRegisterRequest;
    toJSON(message: MsgRegisterRequest): unknown;
    fromPartial(object: DeepPartial<MsgRegisterRequest>): MsgRegisterRequest;
};
export declare const MsgUpdateRequest: {
    encode(message: MsgUpdateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateRequest;
    fromJSON(object: any): MsgUpdateRequest;
    toJSON(message: MsgUpdateRequest): unknown;
    fromPartial(object: DeepPartial<MsgUpdateRequest>): MsgUpdateRequest;
};
export declare const MsgRegisterResponse: {
    encode(_: MsgRegisterResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterResponse;
    fromJSON(_: any): MsgRegisterResponse;
    toJSON(_: MsgRegisterResponse): unknown;
    fromPartial(_: DeepPartial<MsgRegisterResponse>): MsgRegisterResponse;
};
export declare const MsgUpdateResponse: {
    encode(_: MsgUpdateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateResponse;
    fromJSON(_: any): MsgUpdateResponse;
    toJSON(_: MsgUpdateResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateResponse>): MsgUpdateResponse;
};
