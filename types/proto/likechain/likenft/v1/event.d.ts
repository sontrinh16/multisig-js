import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface EventNewClass {
    classId: string;
    parentIscnIdPrefix: string;
    parentAccount: string;
}
export interface EventUpdateClass {
    classId: string;
    parentIscnIdPrefix: string;
    parentAccount: string;
}
export interface EventRevealClass {
    classId: string;
    success: boolean;
    error: string;
}
export interface EventMintNFT {
    classId: string;
    nftId: string;
    owner: string;
    classParentIscnIdPrefix: string;
    classParentAccount: string;
}
export interface EventBurnNFT {
    classId: string;
    nftId: string;
    owner: string;
    classParentIscnIdPrefix: string;
    classParentAccount: string;
}
export interface EventCreateBlindBoxContent {
    classId: string;
    contentId: string;
    classParentIscnIdPrefix: string;
    classParentAccount: string;
}
export interface EventUpdateBlindBoxContent {
    classId: string;
    contentId: string;
    classParentIscnIdPrefix: string;
    classParentAccount: string;
}
export interface EventDeleteBlindBoxContent {
    classId: string;
    contentId: string;
    classParentIscnIdPrefix: string;
    classParentAccount: string;
}
export interface EventCreateOffer {
    classId: string;
    nftId: string;
    buyer: string;
}
export interface EventUpdateOffer {
    classId: string;
    nftId: string;
    buyer: string;
}
export interface EventDeleteOffer {
    classId: string;
    nftId: string;
    buyer: string;
}
export interface EventCreateListing {
    classId: string;
    nftId: string;
    seller: string;
}
export interface EventUpdateListing {
    classId: string;
    nftId: string;
    seller: string;
}
export interface EventDeleteListing {
    classId: string;
    nftId: string;
    seller: string;
}
export interface EventSellNFT {
    classId: string;
    nftId: string;
    seller: string;
    buyer: string;
    price: Long;
}
export interface EventBuyNFT {
    classId: string;
    nftId: string;
    seller: string;
    buyer: string;
    price: Long;
}
export interface EventExpireOffer {
    classId: string;
    nftId: string;
    buyer: string;
    success: boolean;
    error: string;
}
export interface EventExpireListing {
    classId: string;
    nftId: string;
    seller: string;
    success: boolean;
    error: string;
}
export interface EventCreateRoyaltyConfig {
    classId: string;
}
export interface EventUpdateRoyaltyConfig {
    classId: string;
}
export interface EventDeleteRoyaltyConfig {
    classId: string;
}
export declare const EventNewClass: {
    encode(message: EventNewClass, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventNewClass;
    fromJSON(object: any): EventNewClass;
    toJSON(message: EventNewClass): unknown;
    fromPartial(object: DeepPartial<EventNewClass>): EventNewClass;
};
export declare const EventUpdateClass: {
    encode(message: EventUpdateClass, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateClass;
    fromJSON(object: any): EventUpdateClass;
    toJSON(message: EventUpdateClass): unknown;
    fromPartial(object: DeepPartial<EventUpdateClass>): EventUpdateClass;
};
export declare const EventRevealClass: {
    encode(message: EventRevealClass, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventRevealClass;
    fromJSON(object: any): EventRevealClass;
    toJSON(message: EventRevealClass): unknown;
    fromPartial(object: DeepPartial<EventRevealClass>): EventRevealClass;
};
export declare const EventMintNFT: {
    encode(message: EventMintNFT, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventMintNFT;
    fromJSON(object: any): EventMintNFT;
    toJSON(message: EventMintNFT): unknown;
    fromPartial(object: DeepPartial<EventMintNFT>): EventMintNFT;
};
export declare const EventBurnNFT: {
    encode(message: EventBurnNFT, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventBurnNFT;
    fromJSON(object: any): EventBurnNFT;
    toJSON(message: EventBurnNFT): unknown;
    fromPartial(object: DeepPartial<EventBurnNFT>): EventBurnNFT;
};
export declare const EventCreateBlindBoxContent: {
    encode(message: EventCreateBlindBoxContent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateBlindBoxContent;
    fromJSON(object: any): EventCreateBlindBoxContent;
    toJSON(message: EventCreateBlindBoxContent): unknown;
    fromPartial(object: DeepPartial<EventCreateBlindBoxContent>): EventCreateBlindBoxContent;
};
export declare const EventUpdateBlindBoxContent: {
    encode(message: EventUpdateBlindBoxContent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateBlindBoxContent;
    fromJSON(object: any): EventUpdateBlindBoxContent;
    toJSON(message: EventUpdateBlindBoxContent): unknown;
    fromPartial(object: DeepPartial<EventUpdateBlindBoxContent>): EventUpdateBlindBoxContent;
};
export declare const EventDeleteBlindBoxContent: {
    encode(message: EventDeleteBlindBoxContent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventDeleteBlindBoxContent;
    fromJSON(object: any): EventDeleteBlindBoxContent;
    toJSON(message: EventDeleteBlindBoxContent): unknown;
    fromPartial(object: DeepPartial<EventDeleteBlindBoxContent>): EventDeleteBlindBoxContent;
};
export declare const EventCreateOffer: {
    encode(message: EventCreateOffer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateOffer;
    fromJSON(object: any): EventCreateOffer;
    toJSON(message: EventCreateOffer): unknown;
    fromPartial(object: DeepPartial<EventCreateOffer>): EventCreateOffer;
};
export declare const EventUpdateOffer: {
    encode(message: EventUpdateOffer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateOffer;
    fromJSON(object: any): EventUpdateOffer;
    toJSON(message: EventUpdateOffer): unknown;
    fromPartial(object: DeepPartial<EventUpdateOffer>): EventUpdateOffer;
};
export declare const EventDeleteOffer: {
    encode(message: EventDeleteOffer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventDeleteOffer;
    fromJSON(object: any): EventDeleteOffer;
    toJSON(message: EventDeleteOffer): unknown;
    fromPartial(object: DeepPartial<EventDeleteOffer>): EventDeleteOffer;
};
export declare const EventCreateListing: {
    encode(message: EventCreateListing, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateListing;
    fromJSON(object: any): EventCreateListing;
    toJSON(message: EventCreateListing): unknown;
    fromPartial(object: DeepPartial<EventCreateListing>): EventCreateListing;
};
export declare const EventUpdateListing: {
    encode(message: EventUpdateListing, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateListing;
    fromJSON(object: any): EventUpdateListing;
    toJSON(message: EventUpdateListing): unknown;
    fromPartial(object: DeepPartial<EventUpdateListing>): EventUpdateListing;
};
export declare const EventDeleteListing: {
    encode(message: EventDeleteListing, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventDeleteListing;
    fromJSON(object: any): EventDeleteListing;
    toJSON(message: EventDeleteListing): unknown;
    fromPartial(object: DeepPartial<EventDeleteListing>): EventDeleteListing;
};
export declare const EventSellNFT: {
    encode(message: EventSellNFT, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventSellNFT;
    fromJSON(object: any): EventSellNFT;
    toJSON(message: EventSellNFT): unknown;
    fromPartial(object: DeepPartial<EventSellNFT>): EventSellNFT;
};
export declare const EventBuyNFT: {
    encode(message: EventBuyNFT, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventBuyNFT;
    fromJSON(object: any): EventBuyNFT;
    toJSON(message: EventBuyNFT): unknown;
    fromPartial(object: DeepPartial<EventBuyNFT>): EventBuyNFT;
};
export declare const EventExpireOffer: {
    encode(message: EventExpireOffer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventExpireOffer;
    fromJSON(object: any): EventExpireOffer;
    toJSON(message: EventExpireOffer): unknown;
    fromPartial(object: DeepPartial<EventExpireOffer>): EventExpireOffer;
};
export declare const EventExpireListing: {
    encode(message: EventExpireListing, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventExpireListing;
    fromJSON(object: any): EventExpireListing;
    toJSON(message: EventExpireListing): unknown;
    fromPartial(object: DeepPartial<EventExpireListing>): EventExpireListing;
};
export declare const EventCreateRoyaltyConfig: {
    encode(message: EventCreateRoyaltyConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateRoyaltyConfig;
    fromJSON(object: any): EventCreateRoyaltyConfig;
    toJSON(message: EventCreateRoyaltyConfig): unknown;
    fromPartial(object: DeepPartial<EventCreateRoyaltyConfig>): EventCreateRoyaltyConfig;
};
export declare const EventUpdateRoyaltyConfig: {
    encode(message: EventUpdateRoyaltyConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateRoyaltyConfig;
    fromJSON(object: any): EventUpdateRoyaltyConfig;
    toJSON(message: EventUpdateRoyaltyConfig): unknown;
    fromPartial(object: DeepPartial<EventUpdateRoyaltyConfig>): EventUpdateRoyaltyConfig;
};
export declare const EventDeleteRoyaltyConfig: {
    encode(message: EventDeleteRoyaltyConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventDeleteRoyaltyConfig;
    fromJSON(object: any): EventDeleteRoyaltyConfig;
    toJSON(message: EventDeleteRoyaltyConfig): unknown;
    fromPartial(object: DeepPartial<EventDeleteRoyaltyConfig>): EventDeleteRoyaltyConfig;
};
