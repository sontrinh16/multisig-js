import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/**
 * MsgRequestDTagTransfer represents the message used to request the DTag
 * transfer to another user.
 */
export interface MsgRequestDTagTransfer {
    /**
     * Receiver contains the address of the request receiver that owns the DTag to
     * transfer if the request is accepted
     */
    receiver: string;
    /**
     * Sender contains the address of the request sender that will receive the
     * receiver DTag if the requet is accepted
     */
    sender: string;
}
/**
 * MsgRequestDTagTransferResponse defines the Msg/RequestDTagTransfer response
 * type.
 */
export interface MsgRequestDTagTransferResponse {
}
/**
 * MsgCancelDTagTransferRequest represents the message used to cancel a DTag
 * transfer request.
 */
export interface MsgCancelDTagTransferRequest {
    /** Receiver contains the address of the request receiver */
    receiver: string;
    /** Sender contains the address of the requets sender */
    sender: string;
}
/**
 * MsgCancelDTagTransferRequestResponse represents the
 * Msg/CancelDTagTransferRequest response type.
 */
export interface MsgCancelDTagTransferRequestResponse {
}
/**
 * MsgAcceptDTagTransferRequest represents the message used to accept a DTag
 * transfer request.
 */
export interface MsgAcceptDTagTransferRequest {
    /**
     * NewDTag represents the DTag that the request receiver will obtain if they
     * accept the request
     */
    newDtag: string;
    /** Sender represents the request sender */
    sender: string;
    /** Receiver represents the request receiver */
    receiver: string;
}
/**
 * MsgAcceptDTagTransferRequestResponse defines the
 * Msg/AcceptDTagTransferRequest response.
 */
export interface MsgAcceptDTagTransferRequestResponse {
}
/**
 * MsgRefuseDTagTransferRequest represents the message used to refuse a DTag
 * transfer request.
 */
export interface MsgRefuseDTagTransferRequest {
    /** Sender represents the request sender */
    sender: string;
    /** Receiver represents the request receiver */
    receiver: string;
}
/**
 * MsgRefuseDTagTransferRequestResponse defines the
 * Msg/RefuseDTagTransferRequest response.
 */
export interface MsgRefuseDTagTransferRequestResponse {
}
export declare const MsgRequestDTagTransfer: {
    encode(message: MsgRequestDTagTransfer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestDTagTransfer;
    fromJSON(object: any): MsgRequestDTagTransfer;
    toJSON(message: MsgRequestDTagTransfer): unknown;
    fromPartial(object: DeepPartial<MsgRequestDTagTransfer>): MsgRequestDTagTransfer;
};
export declare const MsgRequestDTagTransferResponse: {
    encode(_: MsgRequestDTagTransferResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestDTagTransferResponse;
    fromJSON(_: any): MsgRequestDTagTransferResponse;
    toJSON(_: MsgRequestDTagTransferResponse): unknown;
    fromPartial(_: DeepPartial<MsgRequestDTagTransferResponse>): MsgRequestDTagTransferResponse;
};
export declare const MsgCancelDTagTransferRequest: {
    encode(message: MsgCancelDTagTransferRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelDTagTransferRequest;
    fromJSON(object: any): MsgCancelDTagTransferRequest;
    toJSON(message: MsgCancelDTagTransferRequest): unknown;
    fromPartial(object: DeepPartial<MsgCancelDTagTransferRequest>): MsgCancelDTagTransferRequest;
};
export declare const MsgCancelDTagTransferRequestResponse: {
    encode(_: MsgCancelDTagTransferRequestResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelDTagTransferRequestResponse;
    fromJSON(_: any): MsgCancelDTagTransferRequestResponse;
    toJSON(_: MsgCancelDTagTransferRequestResponse): unknown;
    fromPartial(_: DeepPartial<MsgCancelDTagTransferRequestResponse>): MsgCancelDTagTransferRequestResponse;
};
export declare const MsgAcceptDTagTransferRequest: {
    encode(message: MsgAcceptDTagTransferRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAcceptDTagTransferRequest;
    fromJSON(object: any): MsgAcceptDTagTransferRequest;
    toJSON(message: MsgAcceptDTagTransferRequest): unknown;
    fromPartial(object: DeepPartial<MsgAcceptDTagTransferRequest>): MsgAcceptDTagTransferRequest;
};
export declare const MsgAcceptDTagTransferRequestResponse: {
    encode(_: MsgAcceptDTagTransferRequestResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAcceptDTagTransferRequestResponse;
    fromJSON(_: any): MsgAcceptDTagTransferRequestResponse;
    toJSON(_: MsgAcceptDTagTransferRequestResponse): unknown;
    fromPartial(_: DeepPartial<MsgAcceptDTagTransferRequestResponse>): MsgAcceptDTagTransferRequestResponse;
};
export declare const MsgRefuseDTagTransferRequest: {
    encode(message: MsgRefuseDTagTransferRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRefuseDTagTransferRequest;
    fromJSON(object: any): MsgRefuseDTagTransferRequest;
    toJSON(message: MsgRefuseDTagTransferRequest): unknown;
    fromPartial(object: DeepPartial<MsgRefuseDTagTransferRequest>): MsgRefuseDTagTransferRequest;
};
export declare const MsgRefuseDTagTransferRequestResponse: {
    encode(_: MsgRefuseDTagTransferRequestResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRefuseDTagTransferRequestResponse;
    fromJSON(_: any): MsgRefuseDTagTransferRequestResponse;
    toJSON(_: MsgRefuseDTagTransferRequestResponse): unknown;
    fromPartial(_: DeepPartial<MsgRefuseDTagTransferRequestResponse>): MsgRefuseDTagTransferRequestResponse;
};
