import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** MsgSubscribeToNodeRequest defines the SDK message for subscribing to a node */
export interface MsgSubscribeToNodeRequest {
    from: string;
    address: string;
    deposit: Coin;
}
/** MsgSubscribeToPlanRequest defines the SDK message for subscribing to a plan */
export interface MsgSubscribeToPlanRequest {
    from: string;
    id: Long;
    denom: string;
}
/** MsgCancelRequest defines the SDK message for cancelling a subscription */
export interface MsgCancelRequest {
    from: string;
    id: Long;
}
/** MsgAddQuotaRequest defines the SDK message for adding the quota to an address */
export interface MsgAddQuotaRequest {
    from: string;
    id: Long;
    address: string;
    bytes: string;
}
/**
 * MsgUpdateQuotaRequest defines the SDK message for updating the quota of an
 * address
 */
export interface MsgUpdateQuotaRequest {
    from: string;
    id: Long;
    address: string;
    bytes: string;
}
/**
 * MsgSubscribeToNodeResponse defines the response of message
 * MsgSubscribeToNodeRequest
 */
export interface MsgSubscribeToNodeResponse {
}
/**
 * MsgSubscribeToPlanResponse defines the response of message
 * MsgSubscribeToPlanRequest
 */
export interface MsgSubscribeToPlanResponse {
}
/** MsgCancelResponse defines the response of message MsgCancelRequest */
export interface MsgCancelResponse {
}
/** MsgAddQuotaResponse defines the response of message MsgAddQuotaRequest */
export interface MsgAddQuotaResponse {
}
/** MsgUpdateQuotaResponse defines the response of message MsgUpdateQuotaRequest */
export interface MsgUpdateQuotaResponse {
}
export declare const MsgSubscribeToNodeRequest: {
    encode(message: MsgSubscribeToNodeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubscribeToNodeRequest;
    fromJSON(object: any): MsgSubscribeToNodeRequest;
    toJSON(message: MsgSubscribeToNodeRequest): unknown;
    fromPartial(object: DeepPartial<MsgSubscribeToNodeRequest>): MsgSubscribeToNodeRequest;
};
export declare const MsgSubscribeToPlanRequest: {
    encode(message: MsgSubscribeToPlanRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubscribeToPlanRequest;
    fromJSON(object: any): MsgSubscribeToPlanRequest;
    toJSON(message: MsgSubscribeToPlanRequest): unknown;
    fromPartial(object: DeepPartial<MsgSubscribeToPlanRequest>): MsgSubscribeToPlanRequest;
};
export declare const MsgCancelRequest: {
    encode(message: MsgCancelRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelRequest;
    fromJSON(object: any): MsgCancelRequest;
    toJSON(message: MsgCancelRequest): unknown;
    fromPartial(object: DeepPartial<MsgCancelRequest>): MsgCancelRequest;
};
export declare const MsgAddQuotaRequest: {
    encode(message: MsgAddQuotaRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddQuotaRequest;
    fromJSON(object: any): MsgAddQuotaRequest;
    toJSON(message: MsgAddQuotaRequest): unknown;
    fromPartial(object: DeepPartial<MsgAddQuotaRequest>): MsgAddQuotaRequest;
};
export declare const MsgUpdateQuotaRequest: {
    encode(message: MsgUpdateQuotaRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateQuotaRequest;
    fromJSON(object: any): MsgUpdateQuotaRequest;
    toJSON(message: MsgUpdateQuotaRequest): unknown;
    fromPartial(object: DeepPartial<MsgUpdateQuotaRequest>): MsgUpdateQuotaRequest;
};
export declare const MsgSubscribeToNodeResponse: {
    encode(_: MsgSubscribeToNodeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubscribeToNodeResponse;
    fromJSON(_: any): MsgSubscribeToNodeResponse;
    toJSON(_: MsgSubscribeToNodeResponse): unknown;
    fromPartial(_: DeepPartial<MsgSubscribeToNodeResponse>): MsgSubscribeToNodeResponse;
};
export declare const MsgSubscribeToPlanResponse: {
    encode(_: MsgSubscribeToPlanResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubscribeToPlanResponse;
    fromJSON(_: any): MsgSubscribeToPlanResponse;
    toJSON(_: MsgSubscribeToPlanResponse): unknown;
    fromPartial(_: DeepPartial<MsgSubscribeToPlanResponse>): MsgSubscribeToPlanResponse;
};
export declare const MsgCancelResponse: {
    encode(_: MsgCancelResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelResponse;
    fromJSON(_: any): MsgCancelResponse;
    toJSON(_: MsgCancelResponse): unknown;
    fromPartial(_: DeepPartial<MsgCancelResponse>): MsgCancelResponse;
};
export declare const MsgAddQuotaResponse: {
    encode(_: MsgAddQuotaResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddQuotaResponse;
    fromJSON(_: any): MsgAddQuotaResponse;
    toJSON(_: MsgAddQuotaResponse): unknown;
    fromPartial(_: DeepPartial<MsgAddQuotaResponse>): MsgAddQuotaResponse;
};
export declare const MsgUpdateQuotaResponse: {
    encode(_: MsgUpdateQuotaResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateQuotaResponse;
    fromJSON(_: any): MsgUpdateQuotaResponse;
    toJSON(_: MsgUpdateQuotaResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateQuotaResponse>): MsgUpdateQuotaResponse;
};
