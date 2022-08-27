import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface OfferExpireQueueEntry {
    expireTime: Date;
    offerKey: Uint8Array;
}
export declare const OfferExpireQueueEntry: {
    encode(message: OfferExpireQueueEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OfferExpireQueueEntry;
    fromJSON(object: any): OfferExpireQueueEntry;
    toJSON(message: OfferExpireQueueEntry): unknown;
    fromPartial(object: DeepPartial<OfferExpireQueueEntry>): OfferExpireQueueEntry;
};
