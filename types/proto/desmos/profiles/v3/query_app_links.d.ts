import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { ApplicationLink } from "./models_app_links";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/**
 * QueryUserApplicationLinkRequest represents the request used when querying an
 * application link using an application name and username for a given user
 */
export interface QueryApplicationLinksRequest {
    /**
     * (Optional) User contains the Desmos profile address associated for which
     * the link should be searched for
     */
    user: string;
    /**
     * (Optional) Application represents the application name associated with the
     * link. Used only if user is also set.
     */
    application: string;
    /**
     * Username represents the username inside the application associated with the
     * link. Used only if application is also set.
     */
    username: string;
    /** Pagination defines an optional pagination for the request */
    pagination: PageRequest;
}
/**
 * QueryApplicationLinksResponse represents the response to the query used
 * to get the application links for a specific user
 */
export interface QueryApplicationLinksResponse {
    links: ApplicationLink[];
    /** Pagination defines the pagination response */
    pagination: PageResponse;
}
/**
 * QueryApplicationLinkByClientIDRequest contains the data of the request that
 * can be used to get an application link based on a client id
 */
export interface QueryApplicationLinkByClientIDRequest {
    /** ClientID represents the ID of the client to which search the link for */
    clientId: string;
}
/**
 * QueryApplicationLinkByClientIDResponse contains the data returned by the
 * request allowing to get an application link using a client id
 */
export interface QueryApplicationLinkByClientIDResponse {
    link: ApplicationLink;
}
/**
 * QueryApplicationLinkOwnersRequest contains the data of the request that can
 * be used to get application link owners
 */
export interface QueryApplicationLinkOwnersRequest {
    /**
     * (Optional) Application name to search link owners of. If not specified, all
     * links stored will be searched instead.
     */
    application: string;
    /**
     * (Optional) Username to search for. This will only be used if the
     * application is specified as well
     */
    username: string;
    /** Pagination defines an optional pagination for the request */
    pagination: PageRequest;
}
/**
 * QueryApplicationLinkOwnersResponse contains the data returned by the request
 * allowing to get application link owners.
 */
export interface QueryApplicationLinkOwnersResponse {
    /** Addresses of the application links owners */
    owners: QueryApplicationLinkOwnersResponse_ApplicationLinkOwnerDetails[];
    /** Pagination defines the pagination response */
    pagination: PageResponse;
}
/**
 * ApplicationLinkOwnerDetails contains the details of a single application
 * link owner
 */
export interface QueryApplicationLinkOwnersResponse_ApplicationLinkOwnerDetails {
    user: string;
    application: string;
    username: string;
}
export declare const QueryApplicationLinksRequest: {
    encode(message: QueryApplicationLinksRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryApplicationLinksRequest;
    fromJSON(object: any): QueryApplicationLinksRequest;
    toJSON(message: QueryApplicationLinksRequest): unknown;
    fromPartial(object: DeepPartial<QueryApplicationLinksRequest>): QueryApplicationLinksRequest;
};
export declare const QueryApplicationLinksResponse: {
    encode(message: QueryApplicationLinksResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryApplicationLinksResponse;
    fromJSON(object: any): QueryApplicationLinksResponse;
    toJSON(message: QueryApplicationLinksResponse): unknown;
    fromPartial(object: DeepPartial<QueryApplicationLinksResponse>): QueryApplicationLinksResponse;
};
export declare const QueryApplicationLinkByClientIDRequest: {
    encode(message: QueryApplicationLinkByClientIDRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryApplicationLinkByClientIDRequest;
    fromJSON(object: any): QueryApplicationLinkByClientIDRequest;
    toJSON(message: QueryApplicationLinkByClientIDRequest): unknown;
    fromPartial(object: DeepPartial<QueryApplicationLinkByClientIDRequest>): QueryApplicationLinkByClientIDRequest;
};
export declare const QueryApplicationLinkByClientIDResponse: {
    encode(message: QueryApplicationLinkByClientIDResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryApplicationLinkByClientIDResponse;
    fromJSON(object: any): QueryApplicationLinkByClientIDResponse;
    toJSON(message: QueryApplicationLinkByClientIDResponse): unknown;
    fromPartial(object: DeepPartial<QueryApplicationLinkByClientIDResponse>): QueryApplicationLinkByClientIDResponse;
};
export declare const QueryApplicationLinkOwnersRequest: {
    encode(message: QueryApplicationLinkOwnersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryApplicationLinkOwnersRequest;
    fromJSON(object: any): QueryApplicationLinkOwnersRequest;
    toJSON(message: QueryApplicationLinkOwnersRequest): unknown;
    fromPartial(object: DeepPartial<QueryApplicationLinkOwnersRequest>): QueryApplicationLinkOwnersRequest;
};
export declare const QueryApplicationLinkOwnersResponse: {
    encode(message: QueryApplicationLinkOwnersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryApplicationLinkOwnersResponse;
    fromJSON(object: any): QueryApplicationLinkOwnersResponse;
    toJSON(message: QueryApplicationLinkOwnersResponse): unknown;
    fromPartial(object: DeepPartial<QueryApplicationLinkOwnersResponse>): QueryApplicationLinkOwnersResponse;
};
export declare const QueryApplicationLinkOwnersResponse_ApplicationLinkOwnerDetails: {
    encode(message: QueryApplicationLinkOwnersResponse_ApplicationLinkOwnerDetails, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryApplicationLinkOwnersResponse_ApplicationLinkOwnerDetails;
    fromJSON(object: any): QueryApplicationLinkOwnersResponse_ApplicationLinkOwnerDetails;
    toJSON(message: QueryApplicationLinkOwnersResponse_ApplicationLinkOwnerDetails): unknown;
    fromPartial(object: DeepPartial<QueryApplicationLinkOwnersResponse_ApplicationLinkOwnerDetails>): QueryApplicationLinkOwnersResponse_ApplicationLinkOwnerDetails;
};
