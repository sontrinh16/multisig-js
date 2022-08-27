import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Status } from "../../types/v1/status";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** MsgRegisterRequest defines the SDK message for registering a node */
export interface MsgRegisterRequest {
    from: string;
    provider: string;
    price: Coin[];
    remoteUrl: string;
}
/** MsgUpdateRequest defines the SDK message for updating a node */
export interface MsgUpdateRequest {
    from: string;
    provider: string;
    price: Coin[];
    remoteUrl: string;
}
/**
 * MsgSetStatusRequest defines the SDK message for modifying the status of a
 * node
 */
export interface MsgSetStatusRequest {
    from: string;
    status: Status;
}
/** MsgRegisterResponse defines the response of message MsgRegisterRequest */
export interface MsgRegisterResponse {
}
/** MsgUpdateResponse defines the response of message MsgUpdateRequest */
export interface MsgUpdateResponse {
}
/** MsgSetStatusResponse defines the response of message MsgSetStatusRequest */
export interface MsgSetStatusResponse {
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
export declare const MsgSetStatusRequest: {
    encode(message: MsgSetStatusRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetStatusRequest;
    fromJSON(object: any): MsgSetStatusRequest;
    toJSON(message: MsgSetStatusRequest): unknown;
    fromPartial(object: DeepPartial<MsgSetStatusRequest>): MsgSetStatusRequest;
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
export declare const MsgSetStatusResponse: {
    encode(_: MsgSetStatusResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetStatusResponse;
    fromJSON(_: any): MsgSetStatusResponse;
    toJSON(_: MsgSetStatusResponse): unknown;
    fromPartial(_: DeepPartial<MsgSetStatusResponse>): MsgSetStatusResponse;
};
