import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface VaultInfo {
    id: Long;
    pairId: Long;
    owner: string;
    collateral: Coin;
    debt: Coin;
    collateralizationRatio: string;
}
export interface QueryVaultRequest {
    id: Long;
}
export interface QueryVaultResponse {
    vaultInfo: VaultInfo;
}
export interface QueryVaultsRequest {
    owner: string;
    pagination: PageRequest;
}
export interface QueryVaultsResponse {
    vaultsInfo: VaultInfo[];
    pagination: PageResponse;
}
export interface QueryAllVaultsRequest {
    pagination: PageRequest;
}
export interface QueryAllVaultsResponse {
    vaultsInfo: VaultInfo[];
    pagination: PageResponse;
}
export declare const VaultInfo: {
    encode(message: VaultInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VaultInfo;
    fromJSON(object: any): VaultInfo;
    toJSON(message: VaultInfo): unknown;
    fromPartial(object: DeepPartial<VaultInfo>): VaultInfo;
};
export declare const QueryVaultRequest: {
    encode(message: QueryVaultRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVaultRequest;
    fromJSON(object: any): QueryVaultRequest;
    toJSON(message: QueryVaultRequest): unknown;
    fromPartial(object: DeepPartial<QueryVaultRequest>): QueryVaultRequest;
};
export declare const QueryVaultResponse: {
    encode(message: QueryVaultResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVaultResponse;
    fromJSON(object: any): QueryVaultResponse;
    toJSON(message: QueryVaultResponse): unknown;
    fromPartial(object: DeepPartial<QueryVaultResponse>): QueryVaultResponse;
};
export declare const QueryVaultsRequest: {
    encode(message: QueryVaultsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVaultsRequest;
    fromJSON(object: any): QueryVaultsRequest;
    toJSON(message: QueryVaultsRequest): unknown;
    fromPartial(object: DeepPartial<QueryVaultsRequest>): QueryVaultsRequest;
};
export declare const QueryVaultsResponse: {
    encode(message: QueryVaultsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVaultsResponse;
    fromJSON(object: any): QueryVaultsResponse;
    toJSON(message: QueryVaultsResponse): unknown;
    fromPartial(object: DeepPartial<QueryVaultsResponse>): QueryVaultsResponse;
};
export declare const QueryAllVaultsRequest: {
    encode(message: QueryAllVaultsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllVaultsRequest;
    fromJSON(object: any): QueryAllVaultsRequest;
    toJSON(message: QueryAllVaultsRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllVaultsRequest>): QueryAllVaultsRequest;
};
export declare const QueryAllVaultsResponse: {
    encode(message: QueryAllVaultsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllVaultsResponse;
    fromJSON(object: any): QueryAllVaultsResponse;
    toJSON(message: QueryAllVaultsResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllVaultsResponse>): QueryAllVaultsResponse;
};
