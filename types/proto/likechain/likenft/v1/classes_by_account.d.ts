import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface ClassesByAccount {
    account: string;
    classIds: string[];
}
export interface ClassesByAccountStoreRecord {
    accAddress: Uint8Array;
    classIds: string[];
}
export declare const ClassesByAccount: {
    encode(message: ClassesByAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClassesByAccount;
    fromJSON(object: any): ClassesByAccount;
    toJSON(message: ClassesByAccount): unknown;
    fromPartial(object: DeepPartial<ClassesByAccount>): ClassesByAccount;
};
export declare const ClassesByAccountStoreRecord: {
    encode(message: ClassesByAccountStoreRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClassesByAccountStoreRecord;
    fromJSON(object: any): ClassesByAccountStoreRecord;
    toJSON(message: ClassesByAccountStoreRecord): unknown;
    fromPartial(object: DeepPartial<ClassesByAccountStoreRecord>): ClassesByAccountStoreRecord;
};
