import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Status } from "../../types/v1/status";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** MsgAddRequest defines the SDK message for adding a plan */
export interface MsgAddRequest {
    from: string;
    price: Coin[];
    validity: string;
    bytes: string;
}
/**
 * MsgSetStatusRequest defines the SDK message for modifying the status of a
 * plan
 */
export interface MsgSetStatusRequest {
    from: string;
    id: Long;
    status: Status;
}
/** MsgAddNodeRequest defines the SDK message for adding a node to a plan */
export interface MsgAddNodeRequest {
    from: string;
    id: Long;
    address: string;
}
/** MsgRemoveNodeRequest defines the SDK message for removing a node from a plan */
export interface MsgRemoveNodeRequest {
    from: string;
    id: Long;
    address: string;
}
/** MsgAddResponse defines the response of message MsgRegisterRequest */
export interface MsgAddResponse {
}
/** MsgSetStatusResponse defines the response of message MsgSetStatusRequest */
export interface MsgSetStatusResponse {
}
/** MsgAddNodeResponse defines the response of message MsgAddNodeRequest */
export interface MsgAddNodeResponse {
}
/** MsgRemoveNodeResponse defines the response of message MsgRemoveNodeRequest */
export interface MsgRemoveNodeResponse {
}
export declare const MsgAddRequest: {
    encode(message: MsgAddRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddRequest;
    fromJSON(object: any): MsgAddRequest;
    toJSON(message: MsgAddRequest): unknown;
    fromPartial(object: DeepPartial<MsgAddRequest>): MsgAddRequest;
};
export declare const MsgSetStatusRequest: {
    encode(message: MsgSetStatusRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetStatusRequest;
    fromJSON(object: any): MsgSetStatusRequest;
    toJSON(message: MsgSetStatusRequest): unknown;
    fromPartial(object: DeepPartial<MsgSetStatusRequest>): MsgSetStatusRequest;
};
export declare const MsgAddNodeRequest: {
    encode(message: MsgAddNodeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddNodeRequest;
    fromJSON(object: any): MsgAddNodeRequest;
    toJSON(message: MsgAddNodeRequest): unknown;
    fromPartial(object: DeepPartial<MsgAddNodeRequest>): MsgAddNodeRequest;
};
export declare const MsgRemoveNodeRequest: {
    encode(message: MsgRemoveNodeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveNodeRequest;
    fromJSON(object: any): MsgRemoveNodeRequest;
    toJSON(message: MsgRemoveNodeRequest): unknown;
    fromPartial(object: DeepPartial<MsgRemoveNodeRequest>): MsgRemoveNodeRequest;
};
export declare const MsgAddResponse: {
    encode(_: MsgAddResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddResponse;
    fromJSON(_: any): MsgAddResponse;
    toJSON(_: MsgAddResponse): unknown;
    fromPartial(_: DeepPartial<MsgAddResponse>): MsgAddResponse;
};
export declare const MsgSetStatusResponse: {
    encode(_: MsgSetStatusResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetStatusResponse;
    fromJSON(_: any): MsgSetStatusResponse;
    toJSON(_: MsgSetStatusResponse): unknown;
    fromPartial(_: DeepPartial<MsgSetStatusResponse>): MsgSetStatusResponse;
};
export declare const MsgAddNodeResponse: {
    encode(_: MsgAddNodeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddNodeResponse;
    fromJSON(_: any): MsgAddNodeResponse;
    toJSON(_: MsgAddNodeResponse): unknown;
    fromPartial(_: DeepPartial<MsgAddNodeResponse>): MsgAddNodeResponse;
};
export declare const MsgRemoveNodeResponse: {
    encode(_: MsgRemoveNodeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveNodeResponse;
    fromJSON(_: any): MsgRemoveNodeResponse;
    toJSON(_: MsgRemoveNodeResponse): unknown;
    fromPartial(_: DeepPartial<MsgRemoveNodeResponse>): MsgRemoveNodeResponse;
};
