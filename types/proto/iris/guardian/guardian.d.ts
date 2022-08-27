import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** AccountType defines the super account type */
export declare enum AccountType {
    /** GENESIS - GENESIS defines a genesis account type */
    GENESIS = 0,
    /** ORDINARY - ORDINARY defines a ordinary account type */
    ORDINARY = 1,
    UNRECOGNIZED = -1
}
export declare function accountTypeFromJSON(object: any): AccountType;
export declare function accountTypeToJSON(object: AccountType): string;
/** Super defines the super standard */
export interface Super {
    description: string;
    accountType: AccountType;
    address: string;
    addedBy: string;
}
export declare const Super: {
    encode(message: Super, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Super;
    fromJSON(object: any): Super;
    toJSON(message: Super): unknown;
    fromPartial(object: DeepPartial<Super>): Super;
};
