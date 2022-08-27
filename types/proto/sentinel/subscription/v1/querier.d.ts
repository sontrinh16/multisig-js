import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Status } from "../../types/v1/status";
import { Subscription } from "./subscription";
import { Quota } from "./quota";
import { Params } from "./params";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface QuerySubscriptionsRequest {
    pagination: PageRequest;
}
export interface QuerySubscriptionsForAddressRequest {
    address: string;
    status: Status;
    pagination: PageRequest;
}
export interface QuerySubscriptionRequest {
    id: Long;
}
export interface QueryQuotaRequest {
    id: Long;
    address: string;
}
export interface QueryQuotasRequest {
    id: Long;
    pagination: PageRequest;
}
export interface QueryParamsRequest {
}
export interface QuerySubscriptionsResponse {
    subscriptions: Subscription[];
    pagination: PageResponse;
}
export interface QuerySubscriptionsForAddressResponse {
    subscriptions: Subscription[];
    pagination: PageResponse;
}
export interface QuerySubscriptionResponse {
    subscription: Subscription;
}
export interface QueryQuotaResponse {
    quota: Quota;
}
export interface QueryQuotasResponse {
    quotas: Quota[];
    pagination: PageResponse;
}
export interface QueryParamsResponse {
    params: Params;
}
export declare const QuerySubscriptionsRequest: {
    encode(message: QuerySubscriptionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubscriptionsRequest;
    fromJSON(object: any): QuerySubscriptionsRequest;
    toJSON(message: QuerySubscriptionsRequest): unknown;
    fromPartial(object: DeepPartial<QuerySubscriptionsRequest>): QuerySubscriptionsRequest;
};
export declare const QuerySubscriptionsForAddressRequest: {
    encode(message: QuerySubscriptionsForAddressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubscriptionsForAddressRequest;
    fromJSON(object: any): QuerySubscriptionsForAddressRequest;
    toJSON(message: QuerySubscriptionsForAddressRequest): unknown;
    fromPartial(object: DeepPartial<QuerySubscriptionsForAddressRequest>): QuerySubscriptionsForAddressRequest;
};
export declare const QuerySubscriptionRequest: {
    encode(message: QuerySubscriptionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubscriptionRequest;
    fromJSON(object: any): QuerySubscriptionRequest;
    toJSON(message: QuerySubscriptionRequest): unknown;
    fromPartial(object: DeepPartial<QuerySubscriptionRequest>): QuerySubscriptionRequest;
};
export declare const QueryQuotaRequest: {
    encode(message: QueryQuotaRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryQuotaRequest;
    fromJSON(object: any): QueryQuotaRequest;
    toJSON(message: QueryQuotaRequest): unknown;
    fromPartial(object: DeepPartial<QueryQuotaRequest>): QueryQuotaRequest;
};
export declare const QueryQuotasRequest: {
    encode(message: QueryQuotasRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryQuotasRequest;
    fromJSON(object: any): QueryQuotasRequest;
    toJSON(message: QueryQuotasRequest): unknown;
    fromPartial(object: DeepPartial<QueryQuotasRequest>): QueryQuotasRequest;
};
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QuerySubscriptionsResponse: {
    encode(message: QuerySubscriptionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubscriptionsResponse;
    fromJSON(object: any): QuerySubscriptionsResponse;
    toJSON(message: QuerySubscriptionsResponse): unknown;
    fromPartial(object: DeepPartial<QuerySubscriptionsResponse>): QuerySubscriptionsResponse;
};
export declare const QuerySubscriptionsForAddressResponse: {
    encode(message: QuerySubscriptionsForAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubscriptionsForAddressResponse;
    fromJSON(object: any): QuerySubscriptionsForAddressResponse;
    toJSON(message: QuerySubscriptionsForAddressResponse): unknown;
    fromPartial(object: DeepPartial<QuerySubscriptionsForAddressResponse>): QuerySubscriptionsForAddressResponse;
};
export declare const QuerySubscriptionResponse: {
    encode(message: QuerySubscriptionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubscriptionResponse;
    fromJSON(object: any): QuerySubscriptionResponse;
    toJSON(message: QuerySubscriptionResponse): unknown;
    fromPartial(object: DeepPartial<QuerySubscriptionResponse>): QuerySubscriptionResponse;
};
export declare const QueryQuotaResponse: {
    encode(message: QueryQuotaResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryQuotaResponse;
    fromJSON(object: any): QueryQuotaResponse;
    toJSON(message: QueryQuotaResponse): unknown;
    fromPartial(object: DeepPartial<QueryQuotaResponse>): QueryQuotaResponse;
};
export declare const QueryQuotasResponse: {
    encode(message: QueryQuotasResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryQuotasResponse;
    fromJSON(object: any): QueryQuotasResponse;
    toJSON(message: QueryQuotasResponse): unknown;
    fromPartial(object: DeepPartial<QueryQuotasResponse>): QueryQuotasResponse;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
