import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Params, RankedParticle } from "./types";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface QueryParamsRequest {
}
export interface QueryParamsResponse {
    params: Params;
}
export interface QueryRankRequest {
    particle: string;
}
export interface QueryRankResponse {
    rank: Long;
}
export interface QuerySearchRequest {
    particle: string;
    pagination: PageRequest;
}
export interface QuerySearchResponse {
    result: RankedParticle[];
    pagination: PageResponse;
}
export interface QueryTopRequest {
}
export interface QueryIsLinkExistRequest {
    from: string;
    to: string;
    address: string;
}
export interface QueryIsAnyLinkExistRequest {
    from: string;
    to: string;
}
export interface QueryLinkExistResponse {
    exist: boolean;
}
export interface QueryNegentropyPartilceRequest {
    particle: string;
}
export interface QueryNegentropyParticleResponse {
    entropy: Long;
}
export interface QueryNegentropyRequest {
}
export interface QueryNegentropyResponse {
    negentropy: Long;
}
export interface QueryKarmaRequest {
    neuron: string;
}
export interface QueryKarmaResponse {
    karma: Long;
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
export declare const QueryRankRequest: {
    encode(message: QueryRankRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRankRequest;
    fromJSON(object: any): QueryRankRequest;
    toJSON(message: QueryRankRequest): unknown;
    fromPartial(object: DeepPartial<QueryRankRequest>): QueryRankRequest;
};
export declare const QueryRankResponse: {
    encode(message: QueryRankResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRankResponse;
    fromJSON(object: any): QueryRankResponse;
    toJSON(message: QueryRankResponse): unknown;
    fromPartial(object: DeepPartial<QueryRankResponse>): QueryRankResponse;
};
export declare const QuerySearchRequest: {
    encode(message: QuerySearchRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySearchRequest;
    fromJSON(object: any): QuerySearchRequest;
    toJSON(message: QuerySearchRequest): unknown;
    fromPartial(object: DeepPartial<QuerySearchRequest>): QuerySearchRequest;
};
export declare const QuerySearchResponse: {
    encode(message: QuerySearchResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySearchResponse;
    fromJSON(object: any): QuerySearchResponse;
    toJSON(message: QuerySearchResponse): unknown;
    fromPartial(object: DeepPartial<QuerySearchResponse>): QuerySearchResponse;
};
export declare const QueryTopRequest: {
    encode(_: QueryTopRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTopRequest;
    fromJSON(_: any): QueryTopRequest;
    toJSON(_: QueryTopRequest): unknown;
    fromPartial(_: DeepPartial<QueryTopRequest>): QueryTopRequest;
};
export declare const QueryIsLinkExistRequest: {
    encode(message: QueryIsLinkExistRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIsLinkExistRequest;
    fromJSON(object: any): QueryIsLinkExistRequest;
    toJSON(message: QueryIsLinkExistRequest): unknown;
    fromPartial(object: DeepPartial<QueryIsLinkExistRequest>): QueryIsLinkExistRequest;
};
export declare const QueryIsAnyLinkExistRequest: {
    encode(message: QueryIsAnyLinkExistRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIsAnyLinkExistRequest;
    fromJSON(object: any): QueryIsAnyLinkExistRequest;
    toJSON(message: QueryIsAnyLinkExistRequest): unknown;
    fromPartial(object: DeepPartial<QueryIsAnyLinkExistRequest>): QueryIsAnyLinkExistRequest;
};
export declare const QueryLinkExistResponse: {
    encode(message: QueryLinkExistResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLinkExistResponse;
    fromJSON(object: any): QueryLinkExistResponse;
    toJSON(message: QueryLinkExistResponse): unknown;
    fromPartial(object: DeepPartial<QueryLinkExistResponse>): QueryLinkExistResponse;
};
export declare const QueryNegentropyPartilceRequest: {
    encode(message: QueryNegentropyPartilceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNegentropyPartilceRequest;
    fromJSON(object: any): QueryNegentropyPartilceRequest;
    toJSON(message: QueryNegentropyPartilceRequest): unknown;
    fromPartial(object: DeepPartial<QueryNegentropyPartilceRequest>): QueryNegentropyPartilceRequest;
};
export declare const QueryNegentropyParticleResponse: {
    encode(message: QueryNegentropyParticleResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNegentropyParticleResponse;
    fromJSON(object: any): QueryNegentropyParticleResponse;
    toJSON(message: QueryNegentropyParticleResponse): unknown;
    fromPartial(object: DeepPartial<QueryNegentropyParticleResponse>): QueryNegentropyParticleResponse;
};
export declare const QueryNegentropyRequest: {
    encode(_: QueryNegentropyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNegentropyRequest;
    fromJSON(_: any): QueryNegentropyRequest;
    toJSON(_: QueryNegentropyRequest): unknown;
    fromPartial(_: DeepPartial<QueryNegentropyRequest>): QueryNegentropyRequest;
};
export declare const QueryNegentropyResponse: {
    encode(message: QueryNegentropyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNegentropyResponse;
    fromJSON(object: any): QueryNegentropyResponse;
    toJSON(message: QueryNegentropyResponse): unknown;
    fromPartial(object: DeepPartial<QueryNegentropyResponse>): QueryNegentropyResponse;
};
export declare const QueryKarmaRequest: {
    encode(message: QueryKarmaRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryKarmaRequest;
    fromJSON(object: any): QueryKarmaRequest;
    toJSON(message: QueryKarmaRequest): unknown;
    fromPartial(object: DeepPartial<QueryKarmaRequest>): QueryKarmaRequest;
};
export declare const QueryKarmaResponse: {
    encode(message: QueryKarmaResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryKarmaResponse;
    fromJSON(object: any): QueryKarmaResponse;
    toJSON(message: QueryKarmaResponse): unknown;
    fromPartial(object: DeepPartial<QueryKarmaResponse>): QueryKarmaResponse;
};
