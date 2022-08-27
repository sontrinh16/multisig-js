import { Params } from "./params";
import { ClassesByISCN } from "./classes_by_iscn";
import { ClassesByAccount } from "./classes_by_account";
import { BlindBoxContent } from "./blind_box_content";
import { ClassRevealQueueEntry } from "./class_reveal_queue";
import { Offer } from "./offer";
import { Listing } from "./listing";
import { OfferExpireQueueEntry } from "./offer_expire_queue";
import { ListingExpireQueueEntry } from "./listing_expire_queue";
import { RoyaltyConfigByClass } from "./royalty_config";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** GenesisState defines the likenft module's genesis state. */
export interface GenesisState {
    params: Params;
    classesByIscnList: ClassesByISCN[];
    classesByAccountList: ClassesByAccount[];
    blindBoxContentList: BlindBoxContent[];
    classRevealQueue: ClassRevealQueueEntry[];
    offerList: Offer[];
    listingList: Listing[];
    offerExpireQueue: OfferExpireQueueEntry[];
    listingExpireQueue: ListingExpireQueueEntry[];
    royaltyConfigByClassList: RoyaltyConfigByClass[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
