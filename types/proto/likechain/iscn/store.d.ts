import { IscnId } from "./iscnid";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface StoreRecord {
    iscnId: IscnId;
    cidBytes: Uint8Array;
    data: Uint8Array;
}
export interface ContentIdRecord {
    ownerAddressBytes: Uint8Array;
    latestVersion: Long;
}
export declare const StoreRecord: {
    encode(message: StoreRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StoreRecord;
    fromJSON(object: any): StoreRecord;
    toJSON(message: StoreRecord): unknown;
    fromPartial(object: DeepPartial<StoreRecord>): StoreRecord;
};
export declare const ContentIdRecord: {
    encode(message: ContentIdRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContentIdRecord;
    fromJSON(object: any): ContentIdRecord;
    toJSON(message: ContentIdRecord): unknown;
    fromPartial(object: DeepPartial<ContentIdRecord>): ContentIdRecord;
};
