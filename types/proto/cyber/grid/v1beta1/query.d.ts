import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, Route } from "./types";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface QueryParamsRequest {
}
export interface QueryParamsResponse {
    params: Params;
}
export interface QuerySourceRequest {
    source: string;
}
export interface QueryDestinationRequest {
    destination: string;
}
export interface QueryRoutedEnergyResponse {
    value: Coin[];
}
export interface QueryRouteRequest {
    source: string;
    destination: string;
}
export interface QueryRouteResponse {
    route: Route;
}
export interface QueryRoutesRequest {
    pagination: PageRequest;
}
export interface QueryRoutesResponse {
    routes: Route[];
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
export declare const QuerySourceRequest: {
    encode(message: QuerySourceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySourceRequest;
    fromJSON(object: any): QuerySourceRequest;
    toJSON(message: QuerySourceRequest): unknown;
    fromPartial(object: DeepPartial<QuerySourceRequest>): QuerySourceRequest;
};
export declare const QueryDestinationRequest: {
    encode(message: QueryDestinationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDestinationRequest;
    fromJSON(object: any): QueryDestinationRequest;
    toJSON(message: QueryDestinationRequest): unknown;
    fromPartial(object: DeepPartial<QueryDestinationRequest>): QueryDestinationRequest;
};
export declare const QueryRoutedEnergyResponse: {
    encode(message: QueryRoutedEnergyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRoutedEnergyResponse;
    fromJSON(object: any): QueryRoutedEnergyResponse;
    toJSON(message: QueryRoutedEnergyResponse): unknown;
    fromPartial(object: DeepPartial<QueryRoutedEnergyResponse>): QueryRoutedEnergyResponse;
};
export declare const QueryRouteRequest: {
    encode(message: QueryRouteRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRouteRequest;
    fromJSON(object: any): QueryRouteRequest;
    toJSON(message: QueryRouteRequest): unknown;
    fromPartial(object: DeepPartial<QueryRouteRequest>): QueryRouteRequest;
};
export declare const QueryRouteResponse: {
    encode(message: QueryRouteResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRouteResponse;
    fromJSON(object: any): QueryRouteResponse;
    toJSON(message: QueryRouteResponse): unknown;
    fromPartial(object: DeepPartial<QueryRouteResponse>): QueryRouteResponse;
};
export declare const QueryRoutesRequest: {
    encode(message: QueryRoutesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRoutesRequest;
    fromJSON(object: any): QueryRoutesRequest;
    toJSON(message: QueryRoutesRequest): unknown;
    fromPartial(object: DeepPartial<QueryRoutesRequest>): QueryRoutesRequest;
};
export declare const QueryRoutesResponse: {
    encode(message: QueryRoutesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRoutesResponse;
    fromJSON(object: any): QueryRoutesResponse;
    toJSON(message: QueryRoutesResponse): unknown;
    fromPartial(object: DeepPartial<QueryRoutesResponse>): QueryRoutesResponse;
};
