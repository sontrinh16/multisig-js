import { AdminAccount } from "./types";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface MsgAddAccount {
    signer: string;
    account: AdminAccount;
}
export interface MsgAddAccountResponse {
}
export interface MsgRemoveAccount {
    signer: string;
    account: AdminAccount;
}
export interface MsgRemoveAccountResponse {
}
export declare const MsgAddAccount: {
    encode(message: MsgAddAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddAccount;
    fromJSON(object: any): MsgAddAccount;
    toJSON(message: MsgAddAccount): unknown;
    fromPartial(object: DeepPartial<MsgAddAccount>): MsgAddAccount;
};
export declare const MsgAddAccountResponse: {
    encode(_: MsgAddAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddAccountResponse;
    fromJSON(_: any): MsgAddAccountResponse;
    toJSON(_: MsgAddAccountResponse): unknown;
    fromPartial(_: DeepPartial<MsgAddAccountResponse>): MsgAddAccountResponse;
};
export declare const MsgRemoveAccount: {
    encode(message: MsgRemoveAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveAccount;
    fromJSON(object: any): MsgRemoveAccount;
    toJSON(message: MsgRemoveAccount): unknown;
    fromPartial(object: DeepPartial<MsgRemoveAccount>): MsgRemoveAccount;
};
export declare const MsgRemoveAccountResponse: {
    encode(_: MsgRemoveAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveAccountResponse;
    fromJSON(_: any): MsgRemoveAccountResponse;
    toJSON(_: MsgRemoveAccountResponse): unknown;
    fromPartial(_: DeepPartial<MsgRemoveAccountResponse>): MsgRemoveAccountResponse;
};
