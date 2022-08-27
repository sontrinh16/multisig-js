import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Provider } from "./audit";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** QueryProvidersResponse is response type for the Query/Providers RPC method */
export interface QueryProvidersResponse {
    providers: Provider[];
    pagination: PageResponse;
}
/** QueryProviderRequest is request type for the Query/Provider RPC method */
export interface QueryProviderRequest {
    auditor: string;
    owner: string;
}
/** QueryAllProvidersAttributesRequest is request type for the Query/All Providers RPC method */
export interface QueryAllProvidersAttributesRequest {
    pagination: PageRequest;
}
/** QueryProviderAttributesRequest is request type for the Query/Provider RPC method */
export interface QueryProviderAttributesRequest {
    owner: string;
    pagination: PageRequest;
}
/** QueryProviderAuditorRequest is request type for the Query/Providers RPC method */
export interface QueryProviderAuditorRequest {
    auditor: string;
    owner: string;
}
/** QueryAuditorAttributesRequest is request type for the Query/Providers RPC method */
export interface QueryAuditorAttributesRequest {
    auditor: string;
    pagination: PageRequest;
}
export declare const QueryProvidersResponse: {
    encode(message: QueryProvidersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProvidersResponse;
    fromJSON(object: any): QueryProvidersResponse;
    toJSON(message: QueryProvidersResponse): unknown;
    fromPartial(object: DeepPartial<QueryProvidersResponse>): QueryProvidersResponse;
};
export declare const QueryProviderRequest: {
    encode(message: QueryProviderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProviderRequest;
    fromJSON(object: any): QueryProviderRequest;
    toJSON(message: QueryProviderRequest): unknown;
    fromPartial(object: DeepPartial<QueryProviderRequest>): QueryProviderRequest;
};
export declare const QueryAllProvidersAttributesRequest: {
    encode(message: QueryAllProvidersAttributesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllProvidersAttributesRequest;
    fromJSON(object: any): QueryAllProvidersAttributesRequest;
    toJSON(message: QueryAllProvidersAttributesRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllProvidersAttributesRequest>): QueryAllProvidersAttributesRequest;
};
export declare const QueryProviderAttributesRequest: {
    encode(message: QueryProviderAttributesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProviderAttributesRequest;
    fromJSON(object: any): QueryProviderAttributesRequest;
    toJSON(message: QueryProviderAttributesRequest): unknown;
    fromPartial(object: DeepPartial<QueryProviderAttributesRequest>): QueryProviderAttributesRequest;
};
export declare const QueryProviderAuditorRequest: {
    encode(message: QueryProviderAuditorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProviderAuditorRequest;
    fromJSON(object: any): QueryProviderAuditorRequest;
    toJSON(message: QueryProviderAuditorRequest): unknown;
    fromPartial(object: DeepPartial<QueryProviderAuditorRequest>): QueryProviderAuditorRequest;
};
export declare const QueryAuditorAttributesRequest: {
    encode(message: QueryAuditorAttributesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAuditorAttributesRequest;
    fromJSON(object: any): QueryAuditorAttributesRequest;
    toJSON(message: QueryAuditorAttributesRequest): unknown;
    fromPartial(object: DeepPartial<QueryAuditorAttributesRequest>): QueryAuditorAttributesRequest;
};
