import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface ListingExpireQueueEntry {
    expireTime: Date;
    listingKey: Uint8Array;
}
export declare const ListingExpireQueueEntry: {
    encode(message: ListingExpireQueueEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListingExpireQueueEntry;
    fromJSON(object: any): ListingExpireQueueEntry;
    toJSON(message: ListingExpireQueueEntry): unknown;
    fromPartial(object: DeepPartial<ListingExpireQueueEntry>): ListingExpireQueueEntry;
};
