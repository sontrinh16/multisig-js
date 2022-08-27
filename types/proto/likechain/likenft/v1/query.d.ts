import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { Class } from "../../../cosmos/nft/v1beta1/nft";
import { ClassesByISCN } from "./classes_by_iscn";
import { QueryResponseRecord } from "../../iscn/query";
import { ClassesByAccount } from "./classes_by_account";
import { BlindBoxContent } from "./blind_box_content";
import { Offer } from "./offer";
import { Listing } from "./listing";
import { RoyaltyConfig, RoyaltyConfigByClass } from "./royalty_config";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params;
}
export interface QueryClassesByISCNRequest {
    iscnIdPrefix: string;
    pagination: PageRequest;
}
export interface QueryClassesByISCNResponse {
    iscnIdPrefix: string;
    classes: Class[];
    pagination: PageResponse;
}
export interface QueryClassesByISCNIndexRequest {
    pagination: PageRequest;
}
export interface QueryClassesByISCNIndexResponse {
    classesByIscns: ClassesByISCN[];
    pagination: PageResponse;
}
export interface QueryISCNByClassRequest {
    classId: string;
}
export interface QueryISCNByClassResponse {
    iscnIdPrefix: string;
    owner: string;
    latestVersion: Long;
    latestRecord: QueryResponseRecord;
}
export interface QueryClassesByAccountRequest {
    account: string;
    pagination: PageRequest;
}
export interface QueryClassesByAccountResponse {
    account: string;
    classes: Class[];
    pagination: PageResponse;
}
export interface QueryClassesByAccountIndexRequest {
    pagination: PageRequest;
}
export interface QueryClassesByAccountIndexResponse {
    classesByAccounts: ClassesByAccount[];
    pagination: PageResponse;
}
export interface QueryAccountByClassRequest {
    classId: string;
}
export interface QueryAccountByClassResponse {
    address: string;
}
export interface QueryBlindBoxContentRequest {
    classId: string;
    id: string;
}
export interface QueryBlindBoxContentResponse {
    blindBoxContent: BlindBoxContent;
}
export interface QueryBlindBoxContentIndexRequest {
    pagination: PageRequest;
}
export interface QueryBlindBoxContentIndexResponse {
    blindBoxContents: BlindBoxContent[];
    pagination: PageResponse;
}
export interface QueryBlindBoxContentsRequest {
    classId: string;
    pagination: PageRequest;
}
export interface QueryBlindBoxContentsResponse {
    blindBoxContents: BlindBoxContent[];
    pagination: PageResponse;
}
export interface QueryOfferRequest {
    classId: string;
    nftId: string;
    buyer: string;
}
export interface QueryOfferResponse {
    offer: Offer;
}
export interface QueryOfferIndexRequest {
    pagination: PageRequest;
}
export interface QueryOfferIndexResponse {
    offers: Offer[];
    pagination: PageResponse;
}
export interface QueryOffersByClassRequest {
    classId: string;
    pagination: PageRequest;
}
export interface QueryOffersByClassResponse {
    offers: Offer[];
    pagination: PageResponse;
}
export interface QueryOffersByNFTRequest {
    classId: string;
    nftId: string;
    pagination: PageRequest;
}
export interface QueryOffersByNFTResponse {
    offers: Offer[];
    pagination: PageResponse;
}
export interface QueryListingRequest {
    classId: string;
    nftId: string;
    seller: string;
}
export interface QueryListingResponse {
    listing: Listing;
}
export interface QueryListingIndexRequest {
    pagination: PageRequest;
}
export interface QueryListingIndexResponse {
    listings: Listing[];
    pagination: PageResponse;
}
export interface QueryListingsByClassRequest {
    classId: string;
    pagination: PageRequest;
}
export interface QueryListingsByClassResponse {
    listings: Listing[];
    pagination: PageResponse;
}
export interface QueryListingsByNFTRequest {
    classId: string;
    nftId: string;
    pagination: PageRequest;
}
export interface QueryListingsByNFTResponse {
    listings: Listing[];
    pagination: PageResponse;
}
export interface QueryRoyaltyConfigRequest {
    classId: string;
}
export interface QueryRoyaltyConfigResponse {
    royaltyConfig: RoyaltyConfig;
}
export interface QueryRoyaltyConfigIndexRequest {
    pagination: PageRequest;
}
export interface QueryRoyaltyConfigIndexResponse {
    royaltyConfigByClass: RoyaltyConfigByClass[];
    pagination: PageResponse;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryClassesByISCNRequest: {
    encode(message: QueryClassesByISCNRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassesByISCNRequest;
    fromJSON(object: any): QueryClassesByISCNRequest;
    toJSON(message: QueryClassesByISCNRequest): unknown;
    fromPartial(object: DeepPartial<QueryClassesByISCNRequest>): QueryClassesByISCNRequest;
};
export declare const QueryClassesByISCNResponse: {
    encode(message: QueryClassesByISCNResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassesByISCNResponse;
    fromJSON(object: any): QueryClassesByISCNResponse;
    toJSON(message: QueryClassesByISCNResponse): unknown;
    fromPartial(object: DeepPartial<QueryClassesByISCNResponse>): QueryClassesByISCNResponse;
};
export declare const QueryClassesByISCNIndexRequest: {
    encode(message: QueryClassesByISCNIndexRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassesByISCNIndexRequest;
    fromJSON(object: any): QueryClassesByISCNIndexRequest;
    toJSON(message: QueryClassesByISCNIndexRequest): unknown;
    fromPartial(object: DeepPartial<QueryClassesByISCNIndexRequest>): QueryClassesByISCNIndexRequest;
};
export declare const QueryClassesByISCNIndexResponse: {
    encode(message: QueryClassesByISCNIndexResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassesByISCNIndexResponse;
    fromJSON(object: any): QueryClassesByISCNIndexResponse;
    toJSON(message: QueryClassesByISCNIndexResponse): unknown;
    fromPartial(object: DeepPartial<QueryClassesByISCNIndexResponse>): QueryClassesByISCNIndexResponse;
};
export declare const QueryISCNByClassRequest: {
    encode(message: QueryISCNByClassRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryISCNByClassRequest;
    fromJSON(object: any): QueryISCNByClassRequest;
    toJSON(message: QueryISCNByClassRequest): unknown;
    fromPartial(object: DeepPartial<QueryISCNByClassRequest>): QueryISCNByClassRequest;
};
export declare const QueryISCNByClassResponse: {
    encode(message: QueryISCNByClassResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryISCNByClassResponse;
    fromJSON(object: any): QueryISCNByClassResponse;
    toJSON(message: QueryISCNByClassResponse): unknown;
    fromPartial(object: DeepPartial<QueryISCNByClassResponse>): QueryISCNByClassResponse;
};
export declare const QueryClassesByAccountRequest: {
    encode(message: QueryClassesByAccountRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassesByAccountRequest;
    fromJSON(object: any): QueryClassesByAccountRequest;
    toJSON(message: QueryClassesByAccountRequest): unknown;
    fromPartial(object: DeepPartial<QueryClassesByAccountRequest>): QueryClassesByAccountRequest;
};
export declare const QueryClassesByAccountResponse: {
    encode(message: QueryClassesByAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassesByAccountResponse;
    fromJSON(object: any): QueryClassesByAccountResponse;
    toJSON(message: QueryClassesByAccountResponse): unknown;
    fromPartial(object: DeepPartial<QueryClassesByAccountResponse>): QueryClassesByAccountResponse;
};
export declare const QueryClassesByAccountIndexRequest: {
    encode(message: QueryClassesByAccountIndexRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassesByAccountIndexRequest;
    fromJSON(object: any): QueryClassesByAccountIndexRequest;
    toJSON(message: QueryClassesByAccountIndexRequest): unknown;
    fromPartial(object: DeepPartial<QueryClassesByAccountIndexRequest>): QueryClassesByAccountIndexRequest;
};
export declare const QueryClassesByAccountIndexResponse: {
    encode(message: QueryClassesByAccountIndexResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassesByAccountIndexResponse;
    fromJSON(object: any): QueryClassesByAccountIndexResponse;
    toJSON(message: QueryClassesByAccountIndexResponse): unknown;
    fromPartial(object: DeepPartial<QueryClassesByAccountIndexResponse>): QueryClassesByAccountIndexResponse;
};
export declare const QueryAccountByClassRequest: {
    encode(message: QueryAccountByClassRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountByClassRequest;
    fromJSON(object: any): QueryAccountByClassRequest;
    toJSON(message: QueryAccountByClassRequest): unknown;
    fromPartial(object: DeepPartial<QueryAccountByClassRequest>): QueryAccountByClassRequest;
};
export declare const QueryAccountByClassResponse: {
    encode(message: QueryAccountByClassResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountByClassResponse;
    fromJSON(object: any): QueryAccountByClassResponse;
    toJSON(message: QueryAccountByClassResponse): unknown;
    fromPartial(object: DeepPartial<QueryAccountByClassResponse>): QueryAccountByClassResponse;
};
export declare const QueryBlindBoxContentRequest: {
    encode(message: QueryBlindBoxContentRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBlindBoxContentRequest;
    fromJSON(object: any): QueryBlindBoxContentRequest;
    toJSON(message: QueryBlindBoxContentRequest): unknown;
    fromPartial(object: DeepPartial<QueryBlindBoxContentRequest>): QueryBlindBoxContentRequest;
};
export declare const QueryBlindBoxContentResponse: {
    encode(message: QueryBlindBoxContentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBlindBoxContentResponse;
    fromJSON(object: any): QueryBlindBoxContentResponse;
    toJSON(message: QueryBlindBoxContentResponse): unknown;
    fromPartial(object: DeepPartial<QueryBlindBoxContentResponse>): QueryBlindBoxContentResponse;
};
export declare const QueryBlindBoxContentIndexRequest: {
    encode(message: QueryBlindBoxContentIndexRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBlindBoxContentIndexRequest;
    fromJSON(object: any): QueryBlindBoxContentIndexRequest;
    toJSON(message: QueryBlindBoxContentIndexRequest): unknown;
    fromPartial(object: DeepPartial<QueryBlindBoxContentIndexRequest>): QueryBlindBoxContentIndexRequest;
};
export declare const QueryBlindBoxContentIndexResponse: {
    encode(message: QueryBlindBoxContentIndexResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBlindBoxContentIndexResponse;
    fromJSON(object: any): QueryBlindBoxContentIndexResponse;
    toJSON(message: QueryBlindBoxContentIndexResponse): unknown;
    fromPartial(object: DeepPartial<QueryBlindBoxContentIndexResponse>): QueryBlindBoxContentIndexResponse;
};
export declare const QueryBlindBoxContentsRequest: {
    encode(message: QueryBlindBoxContentsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBlindBoxContentsRequest;
    fromJSON(object: any): QueryBlindBoxContentsRequest;
    toJSON(message: QueryBlindBoxContentsRequest): unknown;
    fromPartial(object: DeepPartial<QueryBlindBoxContentsRequest>): QueryBlindBoxContentsRequest;
};
export declare const QueryBlindBoxContentsResponse: {
    encode(message: QueryBlindBoxContentsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBlindBoxContentsResponse;
    fromJSON(object: any): QueryBlindBoxContentsResponse;
    toJSON(message: QueryBlindBoxContentsResponse): unknown;
    fromPartial(object: DeepPartial<QueryBlindBoxContentsResponse>): QueryBlindBoxContentsResponse;
};
export declare const QueryOfferRequest: {
    encode(message: QueryOfferRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOfferRequest;
    fromJSON(object: any): QueryOfferRequest;
    toJSON(message: QueryOfferRequest): unknown;
    fromPartial(object: DeepPartial<QueryOfferRequest>): QueryOfferRequest;
};
export declare const QueryOfferResponse: {
    encode(message: QueryOfferResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOfferResponse;
    fromJSON(object: any): QueryOfferResponse;
    toJSON(message: QueryOfferResponse): unknown;
    fromPartial(object: DeepPartial<QueryOfferResponse>): QueryOfferResponse;
};
export declare const QueryOfferIndexRequest: {
    encode(message: QueryOfferIndexRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOfferIndexRequest;
    fromJSON(object: any): QueryOfferIndexRequest;
    toJSON(message: QueryOfferIndexRequest): unknown;
    fromPartial(object: DeepPartial<QueryOfferIndexRequest>): QueryOfferIndexRequest;
};
export declare const QueryOfferIndexResponse: {
    encode(message: QueryOfferIndexResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOfferIndexResponse;
    fromJSON(object: any): QueryOfferIndexResponse;
    toJSON(message: QueryOfferIndexResponse): unknown;
    fromPartial(object: DeepPartial<QueryOfferIndexResponse>): QueryOfferIndexResponse;
};
export declare const QueryOffersByClassRequest: {
    encode(message: QueryOffersByClassRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOffersByClassRequest;
    fromJSON(object: any): QueryOffersByClassRequest;
    toJSON(message: QueryOffersByClassRequest): unknown;
    fromPartial(object: DeepPartial<QueryOffersByClassRequest>): QueryOffersByClassRequest;
};
export declare const QueryOffersByClassResponse: {
    encode(message: QueryOffersByClassResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOffersByClassResponse;
    fromJSON(object: any): QueryOffersByClassResponse;
    toJSON(message: QueryOffersByClassResponse): unknown;
    fromPartial(object: DeepPartial<QueryOffersByClassResponse>): QueryOffersByClassResponse;
};
export declare const QueryOffersByNFTRequest: {
    encode(message: QueryOffersByNFTRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOffersByNFTRequest;
    fromJSON(object: any): QueryOffersByNFTRequest;
    toJSON(message: QueryOffersByNFTRequest): unknown;
    fromPartial(object: DeepPartial<QueryOffersByNFTRequest>): QueryOffersByNFTRequest;
};
export declare const QueryOffersByNFTResponse: {
    encode(message: QueryOffersByNFTResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOffersByNFTResponse;
    fromJSON(object: any): QueryOffersByNFTResponse;
    toJSON(message: QueryOffersByNFTResponse): unknown;
    fromPartial(object: DeepPartial<QueryOffersByNFTResponse>): QueryOffersByNFTResponse;
};
export declare const QueryListingRequest: {
    encode(message: QueryListingRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryListingRequest;
    fromJSON(object: any): QueryListingRequest;
    toJSON(message: QueryListingRequest): unknown;
    fromPartial(object: DeepPartial<QueryListingRequest>): QueryListingRequest;
};
export declare const QueryListingResponse: {
    encode(message: QueryListingResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryListingResponse;
    fromJSON(object: any): QueryListingResponse;
    toJSON(message: QueryListingResponse): unknown;
    fromPartial(object: DeepPartial<QueryListingResponse>): QueryListingResponse;
};
export declare const QueryListingIndexRequest: {
    encode(message: QueryListingIndexRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryListingIndexRequest;
    fromJSON(object: any): QueryListingIndexRequest;
    toJSON(message: QueryListingIndexRequest): unknown;
    fromPartial(object: DeepPartial<QueryListingIndexRequest>): QueryListingIndexRequest;
};
export declare const QueryListingIndexResponse: {
    encode(message: QueryListingIndexResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryListingIndexResponse;
    fromJSON(object: any): QueryListingIndexResponse;
    toJSON(message: QueryListingIndexResponse): unknown;
    fromPartial(object: DeepPartial<QueryListingIndexResponse>): QueryListingIndexResponse;
};
export declare const QueryListingsByClassRequest: {
    encode(message: QueryListingsByClassRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryListingsByClassRequest;
    fromJSON(object: any): QueryListingsByClassRequest;
    toJSON(message: QueryListingsByClassRequest): unknown;
    fromPartial(object: DeepPartial<QueryListingsByClassRequest>): QueryListingsByClassRequest;
};
export declare const QueryListingsByClassResponse: {
    encode(message: QueryListingsByClassResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryListingsByClassResponse;
    fromJSON(object: any): QueryListingsByClassResponse;
    toJSON(message: QueryListingsByClassResponse): unknown;
    fromPartial(object: DeepPartial<QueryListingsByClassResponse>): QueryListingsByClassResponse;
};
export declare const QueryListingsByNFTRequest: {
    encode(message: QueryListingsByNFTRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryListingsByNFTRequest;
    fromJSON(object: any): QueryListingsByNFTRequest;
    toJSON(message: QueryListingsByNFTRequest): unknown;
    fromPartial(object: DeepPartial<QueryListingsByNFTRequest>): QueryListingsByNFTRequest;
};
export declare const QueryListingsByNFTResponse: {
    encode(message: QueryListingsByNFTResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryListingsByNFTResponse;
    fromJSON(object: any): QueryListingsByNFTResponse;
    toJSON(message: QueryListingsByNFTResponse): unknown;
    fromPartial(object: DeepPartial<QueryListingsByNFTResponse>): QueryListingsByNFTResponse;
};
export declare const QueryRoyaltyConfigRequest: {
    encode(message: QueryRoyaltyConfigRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRoyaltyConfigRequest;
    fromJSON(object: any): QueryRoyaltyConfigRequest;
    toJSON(message: QueryRoyaltyConfigRequest): unknown;
    fromPartial(object: DeepPartial<QueryRoyaltyConfigRequest>): QueryRoyaltyConfigRequest;
};
export declare const QueryRoyaltyConfigResponse: {
    encode(message: QueryRoyaltyConfigResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRoyaltyConfigResponse;
    fromJSON(object: any): QueryRoyaltyConfigResponse;
    toJSON(message: QueryRoyaltyConfigResponse): unknown;
    fromPartial(object: DeepPartial<QueryRoyaltyConfigResponse>): QueryRoyaltyConfigResponse;
};
export declare const QueryRoyaltyConfigIndexRequest: {
    encode(message: QueryRoyaltyConfigIndexRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRoyaltyConfigIndexRequest;
    fromJSON(object: any): QueryRoyaltyConfigIndexRequest;
    toJSON(message: QueryRoyaltyConfigIndexRequest): unknown;
    fromPartial(object: DeepPartial<QueryRoyaltyConfigIndexRequest>): QueryRoyaltyConfigIndexRequest;
};
export declare const QueryRoyaltyConfigIndexResponse: {
    encode(message: QueryRoyaltyConfigIndexResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRoyaltyConfigIndexResponse;
    fromJSON(object: any): QueryRoyaltyConfigIndexResponse;
    toJSON(message: QueryRoyaltyConfigIndexResponse): unknown;
    fromPartial(object: DeepPartial<QueryRoyaltyConfigIndexResponse>): QueryRoyaltyConfigIndexResponse;
};
