import { DidCredential } from "./did";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** MsgAddDid defines a message for adding a DID. */
export interface MsgAddDid {
    did: string;
    pubKey: string;
}
/** MsgAddDidResponse defines the Msg/AddDid response type. */
export interface MsgAddDidResponse {
}
/** MsgAddCredential defines a message for adding a credential to the signer's DID. */
export interface MsgAddCredential {
    didCredential: DidCredential;
}
/** MsgAddCredentialResponse defines the Msg/AddCredential response type. */
export interface MsgAddCredentialResponse {
}
export declare const MsgAddDid: {
    encode(message: MsgAddDid, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddDid;
    fromJSON(object: any): MsgAddDid;
    toJSON(message: MsgAddDid): unknown;
    fromPartial(object: DeepPartial<MsgAddDid>): MsgAddDid;
};
export declare const MsgAddDidResponse: {
    encode(_: MsgAddDidResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddDidResponse;
    fromJSON(_: any): MsgAddDidResponse;
    toJSON(_: MsgAddDidResponse): unknown;
    fromPartial(_: DeepPartial<MsgAddDidResponse>): MsgAddDidResponse;
};
export declare const MsgAddCredential: {
    encode(message: MsgAddCredential, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddCredential;
    fromJSON(object: any): MsgAddCredential;
    toJSON(message: MsgAddCredential): unknown;
    fromPartial(object: DeepPartial<MsgAddCredential>): MsgAddCredential;
};
export declare const MsgAddCredentialResponse: {
    encode(_: MsgAddCredentialResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddCredentialResponse;
    fromJSON(_: any): MsgAddCredentialResponse;
    toJSON(_: MsgAddCredentialResponse): unknown;
    fromPartial(_: DeepPartial<MsgAddCredentialResponse>): MsgAddCredentialResponse;
};
