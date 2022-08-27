import { ClassParentInput, ClassInput } from "./class_input";
import { NFTInput } from "./nft_input";
import { RoyaltyConfigInput, RoyaltyConfig } from "./royalty_config";
import { Class, NFT } from "../../../cosmos/nft/v1beta1/nft";
import { BlindBoxContent } from "./blind_box_content";
import { Offer } from "./offer";
import { Listing } from "./listing";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface MsgNewClass {
    creator: string;
    parent: ClassParentInput;
    input: ClassInput;
}
export interface MsgNewClassResponse {
    class: Class;
}
export interface MsgUpdateClass {
    creator: string;
    classId: string;
    input: ClassInput;
}
export interface MsgUpdateClassResponse {
    class: Class;
}
export interface MsgMintNFT {
    creator: string;
    classId: string;
    id: string;
    input?: NFTInput;
}
export interface MsgMintNFTResponse {
    nft: NFT;
}
export interface MsgBurnNFT {
    creator: string;
    classId: string;
    nftId: string;
}
export interface MsgBurnNFTResponse {
}
export interface MsgCreateBlindBoxContent {
    creator: string;
    classId: string;
    id: string;
    input: NFTInput;
}
export interface MsgCreateBlindBoxContentResponse {
    blindBoxContent: BlindBoxContent;
}
export interface MsgUpdateBlindBoxContent {
    creator: string;
    classId: string;
    id: string;
    input: NFTInput;
}
export interface MsgUpdateBlindBoxContentResponse {
    blindBoxContent: BlindBoxContent;
}
export interface MsgDeleteBlindBoxContent {
    creator: string;
    classId: string;
    id: string;
}
export interface MsgDeleteBlindBoxContentResponse {
}
export interface MsgCreateOffer {
    creator: string;
    classId: string;
    nftId: string;
    price: Long;
    expiration: Date;
}
export interface MsgCreateOfferResponse {
    offer: Offer;
}
export interface MsgUpdateOffer {
    creator: string;
    classId: string;
    nftId: string;
    price: Long;
    expiration: Date;
}
export interface MsgUpdateOfferResponse {
    offer: Offer;
}
export interface MsgDeleteOffer {
    creator: string;
    classId: string;
    nftId: string;
}
export interface MsgDeleteOfferResponse {
}
export interface MsgCreateListing {
    creator: string;
    classId: string;
    nftId: string;
    price: Long;
    expiration: Date;
}
export interface MsgCreateListingResponse {
    listing: Listing;
}
export interface MsgUpdateListing {
    creator: string;
    classId: string;
    nftId: string;
    price: Long;
    expiration: Date;
}
export interface MsgUpdateListingResponse {
    listing: Listing;
}
export interface MsgDeleteListing {
    creator: string;
    classId: string;
    nftId: string;
}
export interface MsgDeleteListingResponse {
}
export interface MsgSellNFT {
    creator: string;
    classId: string;
    nftId: string;
    buyer: string;
    price: Long;
}
export interface MsgSellNFTResponse {
}
export interface MsgBuyNFT {
    creator: string;
    classId: string;
    nftId: string;
    seller: string;
    price: Long;
}
export interface MsgBuyNFTResponse {
}
export interface MsgCreateRoyaltyConfig {
    creator: string;
    classId: string;
    royaltyConfig: RoyaltyConfigInput;
}
export interface MsgCreateRoyaltyConfigResponse {
    royaltyConfig: RoyaltyConfig;
}
export interface MsgUpdateRoyaltyConfig {
    creator: string;
    classId: string;
    royaltyConfig: RoyaltyConfigInput;
}
export interface MsgUpdateRoyaltyConfigResponse {
    royaltyConfig: RoyaltyConfig;
}
export interface MsgDeleteRoyaltyConfig {
    creator: string;
    classId: string;
}
export interface MsgDeleteRoyaltyConfigResponse {
}
export declare const MsgNewClass: {
    encode(message: MsgNewClass, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgNewClass;
    fromJSON(object: any): MsgNewClass;
    toJSON(message: MsgNewClass): unknown;
    fromPartial(object: DeepPartial<MsgNewClass>): MsgNewClass;
};
export declare const MsgNewClassResponse: {
    encode(message: MsgNewClassResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgNewClassResponse;
    fromJSON(object: any): MsgNewClassResponse;
    toJSON(message: MsgNewClassResponse): unknown;
    fromPartial(object: DeepPartial<MsgNewClassResponse>): MsgNewClassResponse;
};
export declare const MsgUpdateClass: {
    encode(message: MsgUpdateClass, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateClass;
    fromJSON(object: any): MsgUpdateClass;
    toJSON(message: MsgUpdateClass): unknown;
    fromPartial(object: DeepPartial<MsgUpdateClass>): MsgUpdateClass;
};
export declare const MsgUpdateClassResponse: {
    encode(message: MsgUpdateClassResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateClassResponse;
    fromJSON(object: any): MsgUpdateClassResponse;
    toJSON(message: MsgUpdateClassResponse): unknown;
    fromPartial(object: DeepPartial<MsgUpdateClassResponse>): MsgUpdateClassResponse;
};
export declare const MsgMintNFT: {
    encode(message: MsgMintNFT, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintNFT;
    fromJSON(object: any): MsgMintNFT;
    toJSON(message: MsgMintNFT): unknown;
    fromPartial(object: DeepPartial<MsgMintNFT>): MsgMintNFT;
};
export declare const MsgMintNFTResponse: {
    encode(message: MsgMintNFTResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintNFTResponse;
    fromJSON(object: any): MsgMintNFTResponse;
    toJSON(message: MsgMintNFTResponse): unknown;
    fromPartial(object: DeepPartial<MsgMintNFTResponse>): MsgMintNFTResponse;
};
export declare const MsgBurnNFT: {
    encode(message: MsgBurnNFT, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnNFT;
    fromJSON(object: any): MsgBurnNFT;
    toJSON(message: MsgBurnNFT): unknown;
    fromPartial(object: DeepPartial<MsgBurnNFT>): MsgBurnNFT;
};
export declare const MsgBurnNFTResponse: {
    encode(_: MsgBurnNFTResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnNFTResponse;
    fromJSON(_: any): MsgBurnNFTResponse;
    toJSON(_: MsgBurnNFTResponse): unknown;
    fromPartial(_: DeepPartial<MsgBurnNFTResponse>): MsgBurnNFTResponse;
};
export declare const MsgCreateBlindBoxContent: {
    encode(message: MsgCreateBlindBoxContent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBlindBoxContent;
    fromJSON(object: any): MsgCreateBlindBoxContent;
    toJSON(message: MsgCreateBlindBoxContent): unknown;
    fromPartial(object: DeepPartial<MsgCreateBlindBoxContent>): MsgCreateBlindBoxContent;
};
export declare const MsgCreateBlindBoxContentResponse: {
    encode(message: MsgCreateBlindBoxContentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBlindBoxContentResponse;
    fromJSON(object: any): MsgCreateBlindBoxContentResponse;
    toJSON(message: MsgCreateBlindBoxContentResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateBlindBoxContentResponse>): MsgCreateBlindBoxContentResponse;
};
export declare const MsgUpdateBlindBoxContent: {
    encode(message: MsgUpdateBlindBoxContent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateBlindBoxContent;
    fromJSON(object: any): MsgUpdateBlindBoxContent;
    toJSON(message: MsgUpdateBlindBoxContent): unknown;
    fromPartial(object: DeepPartial<MsgUpdateBlindBoxContent>): MsgUpdateBlindBoxContent;
};
export declare const MsgUpdateBlindBoxContentResponse: {
    encode(message: MsgUpdateBlindBoxContentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateBlindBoxContentResponse;
    fromJSON(object: any): MsgUpdateBlindBoxContentResponse;
    toJSON(message: MsgUpdateBlindBoxContentResponse): unknown;
    fromPartial(object: DeepPartial<MsgUpdateBlindBoxContentResponse>): MsgUpdateBlindBoxContentResponse;
};
export declare const MsgDeleteBlindBoxContent: {
    encode(message: MsgDeleteBlindBoxContent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteBlindBoxContent;
    fromJSON(object: any): MsgDeleteBlindBoxContent;
    toJSON(message: MsgDeleteBlindBoxContent): unknown;
    fromPartial(object: DeepPartial<MsgDeleteBlindBoxContent>): MsgDeleteBlindBoxContent;
};
export declare const MsgDeleteBlindBoxContentResponse: {
    encode(_: MsgDeleteBlindBoxContentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteBlindBoxContentResponse;
    fromJSON(_: any): MsgDeleteBlindBoxContentResponse;
    toJSON(_: MsgDeleteBlindBoxContentResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteBlindBoxContentResponse>): MsgDeleteBlindBoxContentResponse;
};
export declare const MsgCreateOffer: {
    encode(message: MsgCreateOffer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateOffer;
    fromJSON(object: any): MsgCreateOffer;
    toJSON(message: MsgCreateOffer): unknown;
    fromPartial(object: DeepPartial<MsgCreateOffer>): MsgCreateOffer;
};
export declare const MsgCreateOfferResponse: {
    encode(message: MsgCreateOfferResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateOfferResponse;
    fromJSON(object: any): MsgCreateOfferResponse;
    toJSON(message: MsgCreateOfferResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateOfferResponse>): MsgCreateOfferResponse;
};
export declare const MsgUpdateOffer: {
    encode(message: MsgUpdateOffer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateOffer;
    fromJSON(object: any): MsgUpdateOffer;
    toJSON(message: MsgUpdateOffer): unknown;
    fromPartial(object: DeepPartial<MsgUpdateOffer>): MsgUpdateOffer;
};
export declare const MsgUpdateOfferResponse: {
    encode(message: MsgUpdateOfferResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateOfferResponse;
    fromJSON(object: any): MsgUpdateOfferResponse;
    toJSON(message: MsgUpdateOfferResponse): unknown;
    fromPartial(object: DeepPartial<MsgUpdateOfferResponse>): MsgUpdateOfferResponse;
};
export declare const MsgDeleteOffer: {
    encode(message: MsgDeleteOffer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteOffer;
    fromJSON(object: any): MsgDeleteOffer;
    toJSON(message: MsgDeleteOffer): unknown;
    fromPartial(object: DeepPartial<MsgDeleteOffer>): MsgDeleteOffer;
};
export declare const MsgDeleteOfferResponse: {
    encode(_: MsgDeleteOfferResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteOfferResponse;
    fromJSON(_: any): MsgDeleteOfferResponse;
    toJSON(_: MsgDeleteOfferResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteOfferResponse>): MsgDeleteOfferResponse;
};
export declare const MsgCreateListing: {
    encode(message: MsgCreateListing, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateListing;
    fromJSON(object: any): MsgCreateListing;
    toJSON(message: MsgCreateListing): unknown;
    fromPartial(object: DeepPartial<MsgCreateListing>): MsgCreateListing;
};
export declare const MsgCreateListingResponse: {
    encode(message: MsgCreateListingResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateListingResponse;
    fromJSON(object: any): MsgCreateListingResponse;
    toJSON(message: MsgCreateListingResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateListingResponse>): MsgCreateListingResponse;
};
export declare const MsgUpdateListing: {
    encode(message: MsgUpdateListing, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateListing;
    fromJSON(object: any): MsgUpdateListing;
    toJSON(message: MsgUpdateListing): unknown;
    fromPartial(object: DeepPartial<MsgUpdateListing>): MsgUpdateListing;
};
export declare const MsgUpdateListingResponse: {
    encode(message: MsgUpdateListingResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateListingResponse;
    fromJSON(object: any): MsgUpdateListingResponse;
    toJSON(message: MsgUpdateListingResponse): unknown;
    fromPartial(object: DeepPartial<MsgUpdateListingResponse>): MsgUpdateListingResponse;
};
export declare const MsgDeleteListing: {
    encode(message: MsgDeleteListing, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteListing;
    fromJSON(object: any): MsgDeleteListing;
    toJSON(message: MsgDeleteListing): unknown;
    fromPartial(object: DeepPartial<MsgDeleteListing>): MsgDeleteListing;
};
export declare const MsgDeleteListingResponse: {
    encode(_: MsgDeleteListingResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteListingResponse;
    fromJSON(_: any): MsgDeleteListingResponse;
    toJSON(_: MsgDeleteListingResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteListingResponse>): MsgDeleteListingResponse;
};
export declare const MsgSellNFT: {
    encode(message: MsgSellNFT, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSellNFT;
    fromJSON(object: any): MsgSellNFT;
    toJSON(message: MsgSellNFT): unknown;
    fromPartial(object: DeepPartial<MsgSellNFT>): MsgSellNFT;
};
export declare const MsgSellNFTResponse: {
    encode(_: MsgSellNFTResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSellNFTResponse;
    fromJSON(_: any): MsgSellNFTResponse;
    toJSON(_: MsgSellNFTResponse): unknown;
    fromPartial(_: DeepPartial<MsgSellNFTResponse>): MsgSellNFTResponse;
};
export declare const MsgBuyNFT: {
    encode(message: MsgBuyNFT, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuyNFT;
    fromJSON(object: any): MsgBuyNFT;
    toJSON(message: MsgBuyNFT): unknown;
    fromPartial(object: DeepPartial<MsgBuyNFT>): MsgBuyNFT;
};
export declare const MsgBuyNFTResponse: {
    encode(_: MsgBuyNFTResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuyNFTResponse;
    fromJSON(_: any): MsgBuyNFTResponse;
    toJSON(_: MsgBuyNFTResponse): unknown;
    fromPartial(_: DeepPartial<MsgBuyNFTResponse>): MsgBuyNFTResponse;
};
export declare const MsgCreateRoyaltyConfig: {
    encode(message: MsgCreateRoyaltyConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateRoyaltyConfig;
    fromJSON(object: any): MsgCreateRoyaltyConfig;
    toJSON(message: MsgCreateRoyaltyConfig): unknown;
    fromPartial(object: DeepPartial<MsgCreateRoyaltyConfig>): MsgCreateRoyaltyConfig;
};
export declare const MsgCreateRoyaltyConfigResponse: {
    encode(message: MsgCreateRoyaltyConfigResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateRoyaltyConfigResponse;
    fromJSON(object: any): MsgCreateRoyaltyConfigResponse;
    toJSON(message: MsgCreateRoyaltyConfigResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateRoyaltyConfigResponse>): MsgCreateRoyaltyConfigResponse;
};
export declare const MsgUpdateRoyaltyConfig: {
    encode(message: MsgUpdateRoyaltyConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateRoyaltyConfig;
    fromJSON(object: any): MsgUpdateRoyaltyConfig;
    toJSON(message: MsgUpdateRoyaltyConfig): unknown;
    fromPartial(object: DeepPartial<MsgUpdateRoyaltyConfig>): MsgUpdateRoyaltyConfig;
};
export declare const MsgUpdateRoyaltyConfigResponse: {
    encode(message: MsgUpdateRoyaltyConfigResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateRoyaltyConfigResponse;
    fromJSON(object: any): MsgUpdateRoyaltyConfigResponse;
    toJSON(message: MsgUpdateRoyaltyConfigResponse): unknown;
    fromPartial(object: DeepPartial<MsgUpdateRoyaltyConfigResponse>): MsgUpdateRoyaltyConfigResponse;
};
export declare const MsgDeleteRoyaltyConfig: {
    encode(message: MsgDeleteRoyaltyConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteRoyaltyConfig;
    fromJSON(object: any): MsgDeleteRoyaltyConfig;
    toJSON(message: MsgDeleteRoyaltyConfig): unknown;
    fromPartial(object: DeepPartial<MsgDeleteRoyaltyConfig>): MsgDeleteRoyaltyConfig;
};
export declare const MsgDeleteRoyaltyConfigResponse: {
    encode(_: MsgDeleteRoyaltyConfigResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteRoyaltyConfigResponse;
    fromJSON(_: any): MsgDeleteRoyaltyConfigResponse;
    toJSON(_: MsgDeleteRoyaltyConfigResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteRoyaltyConfigResponse>): MsgDeleteRoyaltyConfigResponse;
};
