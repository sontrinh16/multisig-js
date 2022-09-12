import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface Listing {
    classId: string;
    nftId: string;
    seller: string;
    price: Long;
    expiration: Timestamp;
}
export interface ListingStoreRecord {
    classId: string;
    nftId: string;
    seller: Uint8Array;
    price: Long;
    expiration: Timestamp;
}
export declare const Listing: {
    encode(message: Listing, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Listing;
    fromJSON(object: any): Listing;
    toJSON(message: Listing): unknown;
    fromPartial(object: DeepPartial<Listing>): Listing;
};
export declare const ListingStoreRecord: {
    encode(message: ListingStoreRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListingStoreRecord;
    fromJSON(object: any): ListingStoreRecord;
    toJSON(message: ListingStoreRecord): unknown;
    fromPartial(object: DeepPartial<ListingStoreRecord>): ListingStoreRecord;
};
