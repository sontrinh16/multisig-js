import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface Offer {
    classId: string;
    nftId: string;
    buyer: string;
    price: Long;
    expiration: Timestamp;
}
export interface OfferStoreRecord {
    classId: string;
    nftId: string;
    buyer: Uint8Array;
    price: Long;
    expiration: Timestamp;
}
export declare const Offer: {
    encode(message: Offer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Offer;
    fromJSON(object: any): Offer;
    toJSON(message: Offer): unknown;
    fromPartial(object: DeepPartial<Offer>): Offer;
};
export declare const OfferStoreRecord: {
    encode(message: OfferStoreRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OfferStoreRecord;
    fromJSON(object: any): OfferStoreRecord;
    toJSON(message: OfferStoreRecord): unknown;
    fromPartial(object: DeepPartial<OfferStoreRecord>): OfferStoreRecord;
};
