import { AminoMsg } from "@cosmjs/amino";
import { MsgNewClass, MsgUpdateClass, MsgMintNFT, MsgBurnNFT, MsgCreateBlindBoxContent, MsgUpdateBlindBoxContent, MsgDeleteBlindBoxContent, MsgCreateOffer, MsgUpdateOffer, MsgDeleteOffer, MsgCreateListing, MsgUpdateListing, MsgDeleteListing, MsgSellNFT, MsgBuyNFT, MsgCreateRoyaltyConfig, MsgUpdateRoyaltyConfig, MsgDeleteRoyaltyConfig } from "./tx";
export interface AminoMsgNewClass extends AminoMsg {
    type: "/likechain.likenft.v1.MsgNewClass";
    value: {
        creator: string;
        parent: {
            type: number;
            iscn_id_prefix: string;
        };
        input: {
            name: string;
            symbol: string;
            description: string;
            uri: string;
            uri_hash: string;
            metadata: Uint8Array;
            config: {
                burnable: boolean;
                max_supply: string;
                blind_box_config: {
                    mint_periods: {
                        start_time: {
                            seconds: string;
                            nanos: number;
                        };
                        allowed_addresses: string[];
                        mint_price: string;
                    }[];
                    reveal_time: {
                        seconds: string;
                        nanos: number;
                    };
                };
            };
        };
    };
}
export interface AminoMsgUpdateClass extends AminoMsg {
    type: "/likechain.likenft.v1.MsgUpdateClass";
    value: {
        creator: string;
        class_id: string;
        input: {
            name: string;
            symbol: string;
            description: string;
            uri: string;
            uri_hash: string;
            metadata: Uint8Array;
            config: {
                burnable: boolean;
                max_supply: string;
                blind_box_config: {
                    mint_periods: {
                        start_time: {
                            seconds: string;
                            nanos: number;
                        };
                        allowed_addresses: string[];
                        mint_price: string;
                    }[];
                    reveal_time: {
                        seconds: string;
                        nanos: number;
                    };
                };
            };
        };
    };
}
export interface AminoMsgMintNFT extends AminoMsg {
    type: "/likechain.likenft.v1.MsgMintNFT";
    value: {
        creator: string;
        class_id: string;
        id: string;
        input: {
            uri: string;
            uri_hash: string;
            metadata: Uint8Array;
        };
    };
}
export interface AminoMsgBurnNFT extends AminoMsg {
    type: "/likechain.likenft.v1.MsgBurnNFT";
    value: {
        creator: string;
        class_id: string;
        nft_id: string;
    };
}
export interface AminoMsgCreateBlindBoxContent extends AminoMsg {
    type: "/likechain.likenft.v1.MsgCreateBlindBoxContent";
    value: {
        creator: string;
        class_id: string;
        id: string;
        input: {
            uri: string;
            uri_hash: string;
            metadata: Uint8Array;
        };
    };
}
export interface AminoMsgUpdateBlindBoxContent extends AminoMsg {
    type: "/likechain.likenft.v1.MsgUpdateBlindBoxContent";
    value: {
        creator: string;
        class_id: string;
        id: string;
        input: {
            uri: string;
            uri_hash: string;
            metadata: Uint8Array;
        };
    };
}
export interface AminoMsgDeleteBlindBoxContent extends AminoMsg {
    type: "/likechain.likenft.v1.MsgDeleteBlindBoxContent";
    value: {
        creator: string;
        class_id: string;
        id: string;
    };
}
export interface AminoMsgCreateOffer extends AminoMsg {
    type: "/likechain.likenft.v1.MsgCreateOffer";
    value: {
        creator: string;
        class_id: string;
        nft_id: string;
        price: string;
        expiration: {
            seconds: string;
            nanos: number;
        };
    };
}
export interface AminoMsgUpdateOffer extends AminoMsg {
    type: "/likechain.likenft.v1.MsgUpdateOffer";
    value: {
        creator: string;
        class_id: string;
        nft_id: string;
        price: string;
        expiration: {
            seconds: string;
            nanos: number;
        };
    };
}
export interface AminoMsgDeleteOffer extends AminoMsg {
    type: "/likechain.likenft.v1.MsgDeleteOffer";
    value: {
        creator: string;
        class_id: string;
        nft_id: string;
    };
}
export interface AminoMsgCreateListing extends AminoMsg {
    type: "/likechain.likenft.v1.MsgCreateListing";
    value: {
        creator: string;
        class_id: string;
        nft_id: string;
        price: string;
        expiration: {
            seconds: string;
            nanos: number;
        };
    };
}
export interface AminoMsgUpdateListing extends AminoMsg {
    type: "/likechain.likenft.v1.MsgUpdateListing";
    value: {
        creator: string;
        class_id: string;
        nft_id: string;
        price: string;
        expiration: {
            seconds: string;
            nanos: number;
        };
    };
}
export interface AminoMsgDeleteListing extends AminoMsg {
    type: "/likechain.likenft.v1.MsgDeleteListing";
    value: {
        creator: string;
        class_id: string;
        nft_id: string;
    };
}
export interface AminoMsgSellNFT extends AminoMsg {
    type: "/likechain.likenft.v1.MsgSellNFT";
    value: {
        creator: string;
        class_id: string;
        nft_id: string;
        buyer: string;
        price: string;
    };
}
export interface AminoMsgBuyNFT extends AminoMsg {
    type: "/likechain.likenft.v1.MsgBuyNFT";
    value: {
        creator: string;
        class_id: string;
        nft_id: string;
        seller: string;
        price: string;
    };
}
export interface AminoMsgCreateRoyaltyConfig extends AminoMsg {
    type: "/likechain.likenft.v1.MsgCreateRoyaltyConfig";
    value: {
        creator: string;
        class_id: string;
        royalty_config: {
            rate_basis_points: string;
            stakeholders: {
                account: string;
                weight: string;
            }[];
        };
    };
}
export interface AminoMsgUpdateRoyaltyConfig extends AminoMsg {
    type: "/likechain.likenft.v1.MsgUpdateRoyaltyConfig";
    value: {
        creator: string;
        class_id: string;
        royalty_config: {
            rate_basis_points: string;
            stakeholders: {
                account: string;
                weight: string;
            }[];
        };
    };
}
export interface AminoMsgDeleteRoyaltyConfig extends AminoMsg {
    type: "/likechain.likenft.v1.MsgDeleteRoyaltyConfig";
    value: {
        creator: string;
        class_id: string;
    };
}
export declare const AminoConverter: {
    "/likechain.likenft.v1.MsgNewClass": {
        aminoType: string;
        toAmino: ({ creator, parent, input }: MsgNewClass) => AminoMsgNewClass["value"];
        fromAmino: ({ creator, parent, input }: AminoMsgNewClass["value"]) => MsgNewClass;
    };
    "/likechain.likenft.v1.MsgUpdateClass": {
        aminoType: string;
        toAmino: ({ creator, classId, input }: MsgUpdateClass) => AminoMsgUpdateClass["value"];
        fromAmino: ({ creator, class_id, input }: AminoMsgUpdateClass["value"]) => MsgUpdateClass;
    };
    "/likechain.likenft.v1.MsgMintNFT": {
        aminoType: string;
        toAmino: ({ creator, classId, id, input }: MsgMintNFT) => AminoMsgMintNFT["value"];
        fromAmino: ({ creator, class_id, id, input }: AminoMsgMintNFT["value"]) => MsgMintNFT;
    };
    "/likechain.likenft.v1.MsgBurnNFT": {
        aminoType: string;
        toAmino: ({ creator, classId, nftId }: MsgBurnNFT) => AminoMsgBurnNFT["value"];
        fromAmino: ({ creator, class_id, nft_id }: AminoMsgBurnNFT["value"]) => MsgBurnNFT;
    };
    "/likechain.likenft.v1.MsgCreateBlindBoxContent": {
        aminoType: string;
        toAmino: ({ creator, classId, id, input }: MsgCreateBlindBoxContent) => AminoMsgCreateBlindBoxContent["value"];
        fromAmino: ({ creator, class_id, id, input }: AminoMsgCreateBlindBoxContent["value"]) => MsgCreateBlindBoxContent;
    };
    "/likechain.likenft.v1.MsgUpdateBlindBoxContent": {
        aminoType: string;
        toAmino: ({ creator, classId, id, input }: MsgUpdateBlindBoxContent) => AminoMsgUpdateBlindBoxContent["value"];
        fromAmino: ({ creator, class_id, id, input }: AminoMsgUpdateBlindBoxContent["value"]) => MsgUpdateBlindBoxContent;
    };
    "/likechain.likenft.v1.MsgDeleteBlindBoxContent": {
        aminoType: string;
        toAmino: ({ creator, classId, id }: MsgDeleteBlindBoxContent) => AminoMsgDeleteBlindBoxContent["value"];
        fromAmino: ({ creator, class_id, id }: AminoMsgDeleteBlindBoxContent["value"]) => MsgDeleteBlindBoxContent;
    };
    "/likechain.likenft.v1.MsgCreateOffer": {
        aminoType: string;
        toAmino: ({ creator, classId, nftId, price, expiration }: MsgCreateOffer) => AminoMsgCreateOffer["value"];
        fromAmino: ({ creator, class_id, nft_id, price, expiration }: AminoMsgCreateOffer["value"]) => MsgCreateOffer;
    };
    "/likechain.likenft.v1.MsgUpdateOffer": {
        aminoType: string;
        toAmino: ({ creator, classId, nftId, price, expiration }: MsgUpdateOffer) => AminoMsgUpdateOffer["value"];
        fromAmino: ({ creator, class_id, nft_id, price, expiration }: AminoMsgUpdateOffer["value"]) => MsgUpdateOffer;
    };
    "/likechain.likenft.v1.MsgDeleteOffer": {
        aminoType: string;
        toAmino: ({ creator, classId, nftId }: MsgDeleteOffer) => AminoMsgDeleteOffer["value"];
        fromAmino: ({ creator, class_id, nft_id }: AminoMsgDeleteOffer["value"]) => MsgDeleteOffer;
    };
    "/likechain.likenft.v1.MsgCreateListing": {
        aminoType: string;
        toAmino: ({ creator, classId, nftId, price, expiration }: MsgCreateListing) => AminoMsgCreateListing["value"];
        fromAmino: ({ creator, class_id, nft_id, price, expiration }: AminoMsgCreateListing["value"]) => MsgCreateListing;
    };
    "/likechain.likenft.v1.MsgUpdateListing": {
        aminoType: string;
        toAmino: ({ creator, classId, nftId, price, expiration }: MsgUpdateListing) => AminoMsgUpdateListing["value"];
        fromAmino: ({ creator, class_id, nft_id, price, expiration }: AminoMsgUpdateListing["value"]) => MsgUpdateListing;
    };
    "/likechain.likenft.v1.MsgDeleteListing": {
        aminoType: string;
        toAmino: ({ creator, classId, nftId }: MsgDeleteListing) => AminoMsgDeleteListing["value"];
        fromAmino: ({ creator, class_id, nft_id }: AminoMsgDeleteListing["value"]) => MsgDeleteListing;
    };
    "/likechain.likenft.v1.MsgSellNFT": {
        aminoType: string;
        toAmino: ({ creator, classId, nftId, buyer, price }: MsgSellNFT) => AminoMsgSellNFT["value"];
        fromAmino: ({ creator, class_id, nft_id, buyer, price }: AminoMsgSellNFT["value"]) => MsgSellNFT;
    };
    "/likechain.likenft.v1.MsgBuyNFT": {
        aminoType: string;
        toAmino: ({ creator, classId, nftId, seller, price }: MsgBuyNFT) => AminoMsgBuyNFT["value"];
        fromAmino: ({ creator, class_id, nft_id, seller, price }: AminoMsgBuyNFT["value"]) => MsgBuyNFT;
    };
    "/likechain.likenft.v1.MsgCreateRoyaltyConfig": {
        aminoType: string;
        toAmino: ({ creator, classId, royaltyConfig }: MsgCreateRoyaltyConfig) => AminoMsgCreateRoyaltyConfig["value"];
        fromAmino: ({ creator, class_id, royalty_config }: AminoMsgCreateRoyaltyConfig["value"]) => MsgCreateRoyaltyConfig;
    };
    "/likechain.likenft.v1.MsgUpdateRoyaltyConfig": {
        aminoType: string;
        toAmino: ({ creator, classId, royaltyConfig }: MsgUpdateRoyaltyConfig) => AminoMsgUpdateRoyaltyConfig["value"];
        fromAmino: ({ creator, class_id, royalty_config }: AminoMsgUpdateRoyaltyConfig["value"]) => MsgUpdateRoyaltyConfig;
    };
    "/likechain.likenft.v1.MsgDeleteRoyaltyConfig": {
        aminoType: string;
        toAmino: ({ creator, classId }: MsgDeleteRoyaltyConfig) => AminoMsgDeleteRoyaltyConfig["value"];
        fromAmino: ({ creator, class_id }: AminoMsgDeleteRoyaltyConfig["value"]) => MsgDeleteRoyaltyConfig;
    };
};
