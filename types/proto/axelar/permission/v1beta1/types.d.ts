import { Role } from "../exported/v1beta1/types";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface GovAccount {
    address: Uint8Array;
    role: Role;
}
export declare const GovAccount: {
    encode(message: GovAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GovAccount;
    fromJSON(object: any): GovAccount;
    toJSON(message: GovAccount): unknown;
    fromPartial(object: DeepPartial<GovAccount>): GovAccount;
};
