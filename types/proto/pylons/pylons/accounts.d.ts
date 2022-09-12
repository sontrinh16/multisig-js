import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface UserMap {
    accountAddr: string;
    username: string;
}
export interface Username {
    value: string;
}
export interface AccountAddr {
    value: string;
}
export interface ReferralKV {
    address: string;
    users: RefereeSignup[];
}
export interface RefereeSignup {
    username: string;
    address: string;
}
export declare const UserMap: {
    encode(message: UserMap, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserMap;
    fromJSON(object: any): UserMap;
    toJSON(message: UserMap): unknown;
    fromPartial(object: DeepPartial<UserMap>): UserMap;
};
export declare const Username: {
    encode(message: Username, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Username;
    fromJSON(object: any): Username;
    toJSON(message: Username): unknown;
    fromPartial(object: DeepPartial<Username>): Username;
};
export declare const AccountAddr: {
    encode(message: AccountAddr, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccountAddr;
    fromJSON(object: any): AccountAddr;
    toJSON(message: AccountAddr): unknown;
    fromPartial(object: DeepPartial<AccountAddr>): AccountAddr;
};
export declare const ReferralKV: {
    encode(message: ReferralKV, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReferralKV;
    fromJSON(object: any): ReferralKV;
    toJSON(message: ReferralKV): unknown;
    fromPartial(object: DeepPartial<ReferralKV>): ReferralKV;
};
export declare const RefereeSignup: {
    encode(message: RefereeSignup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RefereeSignup;
    fromJSON(object: any): RefereeSignup;
    toJSON(message: RefereeSignup): unknown;
    fromPartial(object: DeepPartial<RefereeSignup>): RefereeSignup;
};
