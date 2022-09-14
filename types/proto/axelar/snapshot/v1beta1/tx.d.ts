import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface RegisterProxyRequest {
    sender: Uint8Array;
    proxyAddr: Uint8Array;
}
export interface RegisterProxyResponse {
}
export interface DeactivateProxyRequest {
    sender: Uint8Array;
}
export interface DeactivateProxyResponse {
}
export declare const RegisterProxyRequest: {
    encode(message: RegisterProxyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterProxyRequest;
    fromJSON(object: any): RegisterProxyRequest;
    toJSON(message: RegisterProxyRequest): unknown;
    fromPartial(object: DeepPartial<RegisterProxyRequest>): RegisterProxyRequest;
};
export declare const RegisterProxyResponse: {
    encode(_: RegisterProxyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterProxyResponse;
    fromJSON(_: any): RegisterProxyResponse;
    toJSON(_: RegisterProxyResponse): unknown;
    fromPartial(_: DeepPartial<RegisterProxyResponse>): RegisterProxyResponse;
};
export declare const DeactivateProxyRequest: {
    encode(message: DeactivateProxyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateProxyRequest;
    fromJSON(object: any): DeactivateProxyRequest;
    toJSON(message: DeactivateProxyRequest): unknown;
    fromPartial(object: DeepPartial<DeactivateProxyRequest>): DeactivateProxyRequest;
};
export declare const DeactivateProxyResponse: {
    encode(_: DeactivateProxyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateProxyResponse;
    fromJSON(_: any): DeactivateProxyResponse;
    toJSON(_: DeactivateProxyResponse): unknown;
    fromPartial(_: DeepPartial<DeactivateProxyResponse>): DeactivateProxyResponse;
};
