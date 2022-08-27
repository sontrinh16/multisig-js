import { DecProto } from "../../../cosmos/base/v1beta1/coin";
import { NeuronBandwidth, Params } from "./types";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface QueryLoadRequest {
}
export interface QueryLoadResponse {
    load: DecProto;
}
export interface QueryPriceRequest {
}
export interface QueryPriceResponse {
    price: DecProto;
}
export interface QueryTotalBandwidthRequest {
}
export interface QueryTotalBandwidthResponse {
    totalBandwidth: Long;
}
export interface QueryNeuronBandwidthRequest {
    neuron: string;
}
export interface QueryNeuronBandwidthResponse {
    neuronBandwidth: NeuronBandwidth;
}
export interface QueryParamsRequest {
}
export interface QueryParamsResponse {
    params: Params;
}
export declare const QueryLoadRequest: {
    encode(_: QueryLoadRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLoadRequest;
    fromJSON(_: any): QueryLoadRequest;
    toJSON(_: QueryLoadRequest): unknown;
    fromPartial(_: DeepPartial<QueryLoadRequest>): QueryLoadRequest;
};
export declare const QueryLoadResponse: {
    encode(message: QueryLoadResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLoadResponse;
    fromJSON(object: any): QueryLoadResponse;
    toJSON(message: QueryLoadResponse): unknown;
    fromPartial(object: DeepPartial<QueryLoadResponse>): QueryLoadResponse;
};
export declare const QueryPriceRequest: {
    encode(_: QueryPriceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPriceRequest;
    fromJSON(_: any): QueryPriceRequest;
    toJSON(_: QueryPriceRequest): unknown;
    fromPartial(_: DeepPartial<QueryPriceRequest>): QueryPriceRequest;
};
export declare const QueryPriceResponse: {
    encode(message: QueryPriceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPriceResponse;
    fromJSON(object: any): QueryPriceResponse;
    toJSON(message: QueryPriceResponse): unknown;
    fromPartial(object: DeepPartial<QueryPriceResponse>): QueryPriceResponse;
};
export declare const QueryTotalBandwidthRequest: {
    encode(_: QueryTotalBandwidthRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalBandwidthRequest;
    fromJSON(_: any): QueryTotalBandwidthRequest;
    toJSON(_: QueryTotalBandwidthRequest): unknown;
    fromPartial(_: DeepPartial<QueryTotalBandwidthRequest>): QueryTotalBandwidthRequest;
};
export declare const QueryTotalBandwidthResponse: {
    encode(message: QueryTotalBandwidthResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalBandwidthResponse;
    fromJSON(object: any): QueryTotalBandwidthResponse;
    toJSON(message: QueryTotalBandwidthResponse): unknown;
    fromPartial(object: DeepPartial<QueryTotalBandwidthResponse>): QueryTotalBandwidthResponse;
};
export declare const QueryNeuronBandwidthRequest: {
    encode(message: QueryNeuronBandwidthRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNeuronBandwidthRequest;
    fromJSON(object: any): QueryNeuronBandwidthRequest;
    toJSON(message: QueryNeuronBandwidthRequest): unknown;
    fromPartial(object: DeepPartial<QueryNeuronBandwidthRequest>): QueryNeuronBandwidthRequest;
};
export declare const QueryNeuronBandwidthResponse: {
    encode(message: QueryNeuronBandwidthResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNeuronBandwidthResponse;
    fromJSON(object: any): QueryNeuronBandwidthResponse;
    toJSON(message: QueryNeuronBandwidthResponse): unknown;
    fromPartial(object: DeepPartial<QueryNeuronBandwidthResponse>): QueryNeuronBandwidthResponse;
};
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
