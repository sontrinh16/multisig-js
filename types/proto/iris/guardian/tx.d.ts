import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** MsgAddSuper defines the properties of add super account message */
export interface MsgAddSuper {
    description: string;
    address: string;
    addedBy: string;
}
/** MsgAddSuperResponse defines the Msg/AddSuper response type */
export interface MsgAddSuperResponse {
}
/** MsgDeleteSuper defines the properties of delete super account message */
export interface MsgDeleteSuper {
    address: string;
    deletedBy: string;
}
/** MsgDeleteSuperResponse defines the Msg/DeleteSuper response type */
export interface MsgDeleteSuperResponse {
}
export declare const MsgAddSuper: {
    encode(message: MsgAddSuper, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddSuper;
    fromJSON(object: any): MsgAddSuper;
    toJSON(message: MsgAddSuper): unknown;
    fromPartial(object: DeepPartial<MsgAddSuper>): MsgAddSuper;
};
export declare const MsgAddSuperResponse: {
    encode(_: MsgAddSuperResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddSuperResponse;
    fromJSON(_: any): MsgAddSuperResponse;
    toJSON(_: MsgAddSuperResponse): unknown;
    fromPartial(_: DeepPartial<MsgAddSuperResponse>): MsgAddSuperResponse;
};
export declare const MsgDeleteSuper: {
    encode(message: MsgDeleteSuper, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteSuper;
    fromJSON(object: any): MsgDeleteSuper;
    toJSON(message: MsgDeleteSuper): unknown;
    fromPartial(object: DeepPartial<MsgDeleteSuper>): MsgDeleteSuper;
};
export declare const MsgDeleteSuperResponse: {
    encode(_: MsgDeleteSuperResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteSuperResponse;
    fromJSON(_: any): MsgDeleteSuperResponse;
    toJSON(_: MsgDeleteSuperResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteSuperResponse>): MsgDeleteSuperResponse;
};
