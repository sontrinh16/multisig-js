import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { ChainLink } from "./models_chain_links";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/**
 * QueryChainLinksRequest represents the request that should be used in order
 * to retrieve the link associated with the provided user, for the given chain
 * and having the given target address
 */
export interface QueryChainLinksRequest {
    /**
     * (optional) User represents the Desmos address of the user to which search
     * the link for
     */
    user: string;
    /**
     * (optional) ChainName contains the name of the chain to which search the
     * link for. Used only if user is also set
     */
    chainName: string;
    /**
     * (optional) Target must contain the external address to which query the link
     * for. Used only if chain name is also set
     */
    target: string;
    /** Pagination defines an optional pagination for the request */
    pagination: PageRequest;
}
/**
 * QueryChainLinksResponse is the response type for the
 * Query/ChainLinks RPC method.
 */
export interface QueryChainLinksResponse {
    links: ChainLink[];
    /** Pagination defines the pagination response */
    pagination: PageResponse;
}
/**
 * QueryChainLinkOwnersRequest contains the data of the request that can
 * be used to get chain link owners
 */
export interface QueryChainLinkOwnersRequest {
    /**
     * (Optional) Chain name to search link owners of. If not specified, all
     * links stored will be searched instead.
     */
    chainName: string;
    /**
     * (Optional) External address to search for. This will only be used if the
     * chain name is specified as well
     */
    target: string;
    /** Pagination defines an optional pagination for the request */
    pagination: PageRequest;
}
/**
 * QueryChainLinkOwnersResponse contains the data returned by the request
 * allowing to get chain link owners.
 */
export interface QueryChainLinkOwnersResponse {
    /** Addresses of the chain links owners */
    owners: QueryChainLinkOwnersResponse_ChainLinkOwnerDetails[];
    /** Pagination defines the pagination response */
    pagination: PageResponse;
}
/** ChainLinkOwnerDetails contains the details of a single chain link owner */
export interface QueryChainLinkOwnersResponse_ChainLinkOwnerDetails {
    user: string;
    chainName: string;
    target: string;
}
/**
 * QueryDefaultExternalAddressesRequest is the request type for
 * Query/DefaultExternalAddresses RPC method
 */
export interface QueryDefaultExternalAddressesRequest {
    /** (Optional) Owner for which to query the default addresses */
    owner: string;
    /** (Optional) Chain name to query the default address for */
    chainName: string;
    /** Pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/**
 * QueryDefaultExternalAddressesResponse is the response type for
 * Query/DefaultExternalAddresses RPC method
 */
export interface QueryDefaultExternalAddressesResponse {
    /**
     * List of default addresses, each one represented by the associated chain
     * link
     */
    links: ChainLink[];
    pagination: PageResponse;
}
export declare const QueryChainLinksRequest: {
    encode(message: QueryChainLinksRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryChainLinksRequest;
    fromJSON(object: any): QueryChainLinksRequest;
    toJSON(message: QueryChainLinksRequest): unknown;
    fromPartial(object: DeepPartial<QueryChainLinksRequest>): QueryChainLinksRequest;
};
export declare const QueryChainLinksResponse: {
    encode(message: QueryChainLinksResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryChainLinksResponse;
    fromJSON(object: any): QueryChainLinksResponse;
    toJSON(message: QueryChainLinksResponse): unknown;
    fromPartial(object: DeepPartial<QueryChainLinksResponse>): QueryChainLinksResponse;
};
export declare const QueryChainLinkOwnersRequest: {
    encode(message: QueryChainLinkOwnersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryChainLinkOwnersRequest;
    fromJSON(object: any): QueryChainLinkOwnersRequest;
    toJSON(message: QueryChainLinkOwnersRequest): unknown;
    fromPartial(object: DeepPartial<QueryChainLinkOwnersRequest>): QueryChainLinkOwnersRequest;
};
export declare const QueryChainLinkOwnersResponse: {
    encode(message: QueryChainLinkOwnersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryChainLinkOwnersResponse;
    fromJSON(object: any): QueryChainLinkOwnersResponse;
    toJSON(message: QueryChainLinkOwnersResponse): unknown;
    fromPartial(object: DeepPartial<QueryChainLinkOwnersResponse>): QueryChainLinkOwnersResponse;
};
export declare const QueryChainLinkOwnersResponse_ChainLinkOwnerDetails: {
    encode(message: QueryChainLinkOwnersResponse_ChainLinkOwnerDetails, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryChainLinkOwnersResponse_ChainLinkOwnerDetails;
    fromJSON(object: any): QueryChainLinkOwnersResponse_ChainLinkOwnerDetails;
    toJSON(message: QueryChainLinkOwnersResponse_ChainLinkOwnerDetails): unknown;
    fromPartial(object: DeepPartial<QueryChainLinkOwnersResponse_ChainLinkOwnerDetails>): QueryChainLinkOwnersResponse_ChainLinkOwnerDetails;
};
export declare const QueryDefaultExternalAddressesRequest: {
    encode(message: QueryDefaultExternalAddressesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDefaultExternalAddressesRequest;
    fromJSON(object: any): QueryDefaultExternalAddressesRequest;
    toJSON(message: QueryDefaultExternalAddressesRequest): unknown;
    fromPartial(object: DeepPartial<QueryDefaultExternalAddressesRequest>): QueryDefaultExternalAddressesRequest;
};
export declare const QueryDefaultExternalAddressesResponse: {
    encode(message: QueryDefaultExternalAddressesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDefaultExternalAddressesResponse;
    fromJSON(object: any): QueryDefaultExternalAddressesResponse;
    toJSON(message: QueryDefaultExternalAddressesResponse): unknown;
    fromPartial(object: DeepPartial<QueryDefaultExternalAddressesResponse>): QueryDefaultExternalAddressesResponse;
};
