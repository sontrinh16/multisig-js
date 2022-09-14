import { FeeInfo } from "../exported/v1beta1/types";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface RegisterChainMaintainerRequest {
    sender: Uint8Array;
    chains: string[];
}
export interface RegisterChainMaintainerResponse {
}
export interface DeregisterChainMaintainerRequest {
    sender: Uint8Array;
    chains: string[];
}
export interface DeregisterChainMaintainerResponse {
}
/** ActivateChainRequest represents a message to activate chains */
export interface ActivateChainRequest {
    sender: Uint8Array;
    chains: string[];
}
export interface ActivateChainResponse {
}
/** DeactivateChainRequest represents a message to deactivate chains */
export interface DeactivateChainRequest {
    sender: Uint8Array;
    chains: string[];
}
export interface DeactivateChainResponse {
}
/**
 * RegisterAssetFeeRequest represents a message to register the transfer fee
 * info associated to an asset on a chain
 */
export interface RegisterAssetFeeRequest {
    sender: Uint8Array;
    feeInfo: FeeInfo;
}
export interface RegisterAssetFeeResponse {
}
export declare const RegisterChainMaintainerRequest: {
    encode(message: RegisterChainMaintainerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterChainMaintainerRequest;
    fromJSON(object: any): RegisterChainMaintainerRequest;
    toJSON(message: RegisterChainMaintainerRequest): unknown;
    fromPartial(object: DeepPartial<RegisterChainMaintainerRequest>): RegisterChainMaintainerRequest;
};
export declare const RegisterChainMaintainerResponse: {
    encode(_: RegisterChainMaintainerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterChainMaintainerResponse;
    fromJSON(_: any): RegisterChainMaintainerResponse;
    toJSON(_: RegisterChainMaintainerResponse): unknown;
    fromPartial(_: DeepPartial<RegisterChainMaintainerResponse>): RegisterChainMaintainerResponse;
};
export declare const DeregisterChainMaintainerRequest: {
    encode(message: DeregisterChainMaintainerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeregisterChainMaintainerRequest;
    fromJSON(object: any): DeregisterChainMaintainerRequest;
    toJSON(message: DeregisterChainMaintainerRequest): unknown;
    fromPartial(object: DeepPartial<DeregisterChainMaintainerRequest>): DeregisterChainMaintainerRequest;
};
export declare const DeregisterChainMaintainerResponse: {
    encode(_: DeregisterChainMaintainerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeregisterChainMaintainerResponse;
    fromJSON(_: any): DeregisterChainMaintainerResponse;
    toJSON(_: DeregisterChainMaintainerResponse): unknown;
    fromPartial(_: DeepPartial<DeregisterChainMaintainerResponse>): DeregisterChainMaintainerResponse;
};
export declare const ActivateChainRequest: {
    encode(message: ActivateChainRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ActivateChainRequest;
    fromJSON(object: any): ActivateChainRequest;
    toJSON(message: ActivateChainRequest): unknown;
    fromPartial(object: DeepPartial<ActivateChainRequest>): ActivateChainRequest;
};
export declare const ActivateChainResponse: {
    encode(_: ActivateChainResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ActivateChainResponse;
    fromJSON(_: any): ActivateChainResponse;
    toJSON(_: ActivateChainResponse): unknown;
    fromPartial(_: DeepPartial<ActivateChainResponse>): ActivateChainResponse;
};
export declare const DeactivateChainRequest: {
    encode(message: DeactivateChainRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateChainRequest;
    fromJSON(object: any): DeactivateChainRequest;
    toJSON(message: DeactivateChainRequest): unknown;
    fromPartial(object: DeepPartial<DeactivateChainRequest>): DeactivateChainRequest;
};
export declare const DeactivateChainResponse: {
    encode(_: DeactivateChainResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateChainResponse;
    fromJSON(_: any): DeactivateChainResponse;
    toJSON(_: DeactivateChainResponse): unknown;
    fromPartial(_: DeepPartial<DeactivateChainResponse>): DeactivateChainResponse;
};
export declare const RegisterAssetFeeRequest: {
    encode(message: RegisterAssetFeeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterAssetFeeRequest;
    fromJSON(object: any): RegisterAssetFeeRequest;
    toJSON(message: RegisterAssetFeeRequest): unknown;
    fromPartial(object: DeepPartial<RegisterAssetFeeRequest>): RegisterAssetFeeRequest;
};
export declare const RegisterAssetFeeResponse: {
    encode(_: RegisterAssetFeeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterAssetFeeResponse;
    fromJSON(_: any): RegisterAssetFeeResponse;
    toJSON(_: RegisterAssetFeeResponse): unknown;
    fromPartial(_: DeepPartial<RegisterAssetFeeResponse>): RegisterAssetFeeResponse;
};
