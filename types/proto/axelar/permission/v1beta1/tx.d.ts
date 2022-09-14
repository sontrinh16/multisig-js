import { LegacyAminoPubKey } from "../../../cosmos/crypto/multisig/keys";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface UpdateGovernanceKeyRequest {
    sender: Uint8Array;
    governanceKey: LegacyAminoPubKey;
}
export interface UpdateGovernanceKeyResponse {
}
/** MsgRegisterController represents a message to register a controller account */
export interface RegisterControllerRequest {
    sender: Uint8Array;
    controller: Uint8Array;
}
export interface RegisterControllerResponse {
}
/** DeregisterController represents a message to deregister a controller account */
export interface DeregisterControllerRequest {
    sender: Uint8Array;
    controller: Uint8Array;
}
export interface DeregisterControllerResponse {
}
export declare const UpdateGovernanceKeyRequest: {
    encode(message: UpdateGovernanceKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGovernanceKeyRequest;
    fromJSON(object: any): UpdateGovernanceKeyRequest;
    toJSON(message: UpdateGovernanceKeyRequest): unknown;
    fromPartial(object: DeepPartial<UpdateGovernanceKeyRequest>): UpdateGovernanceKeyRequest;
};
export declare const UpdateGovernanceKeyResponse: {
    encode(_: UpdateGovernanceKeyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGovernanceKeyResponse;
    fromJSON(_: any): UpdateGovernanceKeyResponse;
    toJSON(_: UpdateGovernanceKeyResponse): unknown;
    fromPartial(_: DeepPartial<UpdateGovernanceKeyResponse>): UpdateGovernanceKeyResponse;
};
export declare const RegisterControllerRequest: {
    encode(message: RegisterControllerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterControllerRequest;
    fromJSON(object: any): RegisterControllerRequest;
    toJSON(message: RegisterControllerRequest): unknown;
    fromPartial(object: DeepPartial<RegisterControllerRequest>): RegisterControllerRequest;
};
export declare const RegisterControllerResponse: {
    encode(_: RegisterControllerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterControllerResponse;
    fromJSON(_: any): RegisterControllerResponse;
    toJSON(_: RegisterControllerResponse): unknown;
    fromPartial(_: DeepPartial<RegisterControllerResponse>): RegisterControllerResponse;
};
export declare const DeregisterControllerRequest: {
    encode(message: DeregisterControllerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeregisterControllerRequest;
    fromJSON(object: any): DeregisterControllerRequest;
    toJSON(message: DeregisterControllerRequest): unknown;
    fromPartial(object: DeepPartial<DeregisterControllerRequest>): DeregisterControllerRequest;
};
export declare const DeregisterControllerResponse: {
    encode(_: DeregisterControllerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeregisterControllerResponse;
    fromJSON(_: any): DeregisterControllerResponse;
    toJSON(_: DeregisterControllerResponse): unknown;
    fromPartial(_: DeepPartial<DeregisterControllerResponse>): DeregisterControllerResponse;
};
