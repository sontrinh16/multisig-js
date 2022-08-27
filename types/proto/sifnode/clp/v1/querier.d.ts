import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Pool } from "./pool";
import { LiquidityProvider, Asset, LiquidityProviderData, PmtpEpoch } from "./types";
import { Params, RewardParams, PmtpParams, PmtpRateParams, LiquidityProtectionParams, LiquidityProtectionRateParams, ProviderDistributionParams } from "./params";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface PoolReq {
    symbol: string;
}
export interface PoolRes {
    pool: Pool;
    clpModuleAddress: string;
    height: Long;
}
export interface PoolsReq {
    pagination: PageRequest;
}
export interface PoolsRes {
    pools: Pool[];
    clpModuleAddress: string;
    height: Long;
    pagination: PageResponse;
}
export interface LiquidityProviderReq {
    symbol: string;
    lpAddress: string;
}
export interface LiquidityProviderRes {
    liquidityProvider: LiquidityProvider;
    nativeAssetBalance: string;
    externalAssetBalance: string;
    height: Long;
}
export interface AssetListReq {
    lpAddress: string;
    pagination: PageRequest;
}
export interface AssetListRes {
    assets: Asset[];
    height: Long;
    pagination: PageResponse;
}
export interface LiquidityProviderDataReq {
    lpAddress: string;
    pagination: PageRequest;
}
export interface LiquidityProviderDataRes {
    liquidityProviderData: LiquidityProviderData[];
    height: Long;
    pagination: PageRequest;
}
export interface LiquidityProviderListReq {
    symbol: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
export interface LiquidityProviderListRes {
    liquidityProviders: LiquidityProvider[];
    height: Long;
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
export interface LiquidityProvidersReq {
    pagination: PageRequest;
}
export interface LiquidityProvidersRes {
    liquidityProviders: LiquidityProvider[];
    height: Long;
    pagination: PageResponse;
}
export interface ParamsReq {
}
export interface ParamsRes {
    params: Params;
    symmetryThreshold: string;
    symmetryRatioThreshold: string;
}
export interface RewardParamsReq {
}
export interface RewardParamsRes {
    params: RewardParams;
}
export interface PmtpParamsReq {
}
export interface PmtpParamsRes {
    params: PmtpParams;
    pmtpRateParams: PmtpRateParams;
    pmtpEpoch: PmtpEpoch;
    height: Long;
}
export interface LiquidityProtectionParamsReq {
}
export interface LiquidityProtectionParamsRes {
    params: LiquidityProtectionParams;
    rateParams: LiquidityProtectionRateParams;
    height: Long;
}
export interface ProviderDistributionParamsReq {
}
export interface ProviderDistributionParamsRes {
    params: ProviderDistributionParams;
}
export declare const PoolReq: {
    encode(message: PoolReq, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PoolReq;
    fromJSON(object: any): PoolReq;
    toJSON(message: PoolReq): unknown;
    fromPartial(object: DeepPartial<PoolReq>): PoolReq;
};
export declare const PoolRes: {
    encode(message: PoolRes, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PoolRes;
    fromJSON(object: any): PoolRes;
    toJSON(message: PoolRes): unknown;
    fromPartial(object: DeepPartial<PoolRes>): PoolRes;
};
export declare const PoolsReq: {
    encode(message: PoolsReq, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PoolsReq;
    fromJSON(object: any): PoolsReq;
    toJSON(message: PoolsReq): unknown;
    fromPartial(object: DeepPartial<PoolsReq>): PoolsReq;
};
export declare const PoolsRes: {
    encode(message: PoolsRes, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PoolsRes;
    fromJSON(object: any): PoolsRes;
    toJSON(message: PoolsRes): unknown;
    fromPartial(object: DeepPartial<PoolsRes>): PoolsRes;
};
export declare const LiquidityProviderReq: {
    encode(message: LiquidityProviderReq, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LiquidityProviderReq;
    fromJSON(object: any): LiquidityProviderReq;
    toJSON(message: LiquidityProviderReq): unknown;
    fromPartial(object: DeepPartial<LiquidityProviderReq>): LiquidityProviderReq;
};
export declare const LiquidityProviderRes: {
    encode(message: LiquidityProviderRes, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LiquidityProviderRes;
    fromJSON(object: any): LiquidityProviderRes;
    toJSON(message: LiquidityProviderRes): unknown;
    fromPartial(object: DeepPartial<LiquidityProviderRes>): LiquidityProviderRes;
};
export declare const AssetListReq: {
    encode(message: AssetListReq, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AssetListReq;
    fromJSON(object: any): AssetListReq;
    toJSON(message: AssetListReq): unknown;
    fromPartial(object: DeepPartial<AssetListReq>): AssetListReq;
};
export declare const AssetListRes: {
    encode(message: AssetListRes, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AssetListRes;
    fromJSON(object: any): AssetListRes;
    toJSON(message: AssetListRes): unknown;
    fromPartial(object: DeepPartial<AssetListRes>): AssetListRes;
};
export declare const LiquidityProviderDataReq: {
    encode(message: LiquidityProviderDataReq, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LiquidityProviderDataReq;
    fromJSON(object: any): LiquidityProviderDataReq;
    toJSON(message: LiquidityProviderDataReq): unknown;
    fromPartial(object: DeepPartial<LiquidityProviderDataReq>): LiquidityProviderDataReq;
};
export declare const LiquidityProviderDataRes: {
    encode(message: LiquidityProviderDataRes, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LiquidityProviderDataRes;
    fromJSON(object: any): LiquidityProviderDataRes;
    toJSON(message: LiquidityProviderDataRes): unknown;
    fromPartial(object: DeepPartial<LiquidityProviderDataRes>): LiquidityProviderDataRes;
};
export declare const LiquidityProviderListReq: {
    encode(message: LiquidityProviderListReq, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LiquidityProviderListReq;
    fromJSON(object: any): LiquidityProviderListReq;
    toJSON(message: LiquidityProviderListReq): unknown;
    fromPartial(object: DeepPartial<LiquidityProviderListReq>): LiquidityProviderListReq;
};
export declare const LiquidityProviderListRes: {
    encode(message: LiquidityProviderListRes, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LiquidityProviderListRes;
    fromJSON(object: any): LiquidityProviderListRes;
    toJSON(message: LiquidityProviderListRes): unknown;
    fromPartial(object: DeepPartial<LiquidityProviderListRes>): LiquidityProviderListRes;
};
export declare const LiquidityProvidersReq: {
    encode(message: LiquidityProvidersReq, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LiquidityProvidersReq;
    fromJSON(object: any): LiquidityProvidersReq;
    toJSON(message: LiquidityProvidersReq): unknown;
    fromPartial(object: DeepPartial<LiquidityProvidersReq>): LiquidityProvidersReq;
};
export declare const LiquidityProvidersRes: {
    encode(message: LiquidityProvidersRes, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LiquidityProvidersRes;
    fromJSON(object: any): LiquidityProvidersRes;
    toJSON(message: LiquidityProvidersRes): unknown;
    fromPartial(object: DeepPartial<LiquidityProvidersRes>): LiquidityProvidersRes;
};
export declare const ParamsReq: {
    encode(_: ParamsReq, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ParamsReq;
    fromJSON(_: any): ParamsReq;
    toJSON(_: ParamsReq): unknown;
    fromPartial(_: DeepPartial<ParamsReq>): ParamsReq;
};
export declare const ParamsRes: {
    encode(message: ParamsRes, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ParamsRes;
    fromJSON(object: any): ParamsRes;
    toJSON(message: ParamsRes): unknown;
    fromPartial(object: DeepPartial<ParamsRes>): ParamsRes;
};
export declare const RewardParamsReq: {
    encode(_: RewardParamsReq, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RewardParamsReq;
    fromJSON(_: any): RewardParamsReq;
    toJSON(_: RewardParamsReq): unknown;
    fromPartial(_: DeepPartial<RewardParamsReq>): RewardParamsReq;
};
export declare const RewardParamsRes: {
    encode(message: RewardParamsRes, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RewardParamsRes;
    fromJSON(object: any): RewardParamsRes;
    toJSON(message: RewardParamsRes): unknown;
    fromPartial(object: DeepPartial<RewardParamsRes>): RewardParamsRes;
};
export declare const PmtpParamsReq: {
    encode(_: PmtpParamsReq, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PmtpParamsReq;
    fromJSON(_: any): PmtpParamsReq;
    toJSON(_: PmtpParamsReq): unknown;
    fromPartial(_: DeepPartial<PmtpParamsReq>): PmtpParamsReq;
};
export declare const PmtpParamsRes: {
    encode(message: PmtpParamsRes, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PmtpParamsRes;
    fromJSON(object: any): PmtpParamsRes;
    toJSON(message: PmtpParamsRes): unknown;
    fromPartial(object: DeepPartial<PmtpParamsRes>): PmtpParamsRes;
};
export declare const LiquidityProtectionParamsReq: {
    encode(_: LiquidityProtectionParamsReq, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LiquidityProtectionParamsReq;
    fromJSON(_: any): LiquidityProtectionParamsReq;
    toJSON(_: LiquidityProtectionParamsReq): unknown;
    fromPartial(_: DeepPartial<LiquidityProtectionParamsReq>): LiquidityProtectionParamsReq;
};
export declare const LiquidityProtectionParamsRes: {
    encode(message: LiquidityProtectionParamsRes, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LiquidityProtectionParamsRes;
    fromJSON(object: any): LiquidityProtectionParamsRes;
    toJSON(message: LiquidityProtectionParamsRes): unknown;
    fromPartial(object: DeepPartial<LiquidityProtectionParamsRes>): LiquidityProtectionParamsRes;
};
export declare const ProviderDistributionParamsReq: {
    encode(_: ProviderDistributionParamsReq, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProviderDistributionParamsReq;
    fromJSON(_: any): ProviderDistributionParamsReq;
    toJSON(_: ProviderDistributionParamsReq): unknown;
    fromPartial(_: DeepPartial<ProviderDistributionParamsReq>): ProviderDistributionParamsReq;
};
export declare const ProviderDistributionParamsRes: {
    encode(message: ProviderDistributionParamsRes, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProviderDistributionParamsRes;
    fromJSON(object: any): ProviderDistributionParamsRes;
    toJSON(message: ProviderDistributionParamsRes): unknown;
    fromPartial(object: DeepPartial<ProviderDistributionParamsRes>): ProviderDistributionParamsRes;
};
