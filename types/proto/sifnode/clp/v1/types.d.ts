import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface Asset {
    symbol: string;
}
export interface LiquidityProvider {
    asset: Asset;
    liquidityProviderUnits: string;
    liquidityProviderAddress: string;
    unlocks: LiquidityUnlock[];
}
export interface LiquidityUnlock {
    requestHeight: Long;
    units: string;
}
export interface PmtpEpoch {
    epochCounter: Long;
    blockCounter: Long;
}
export interface WhiteList {
    validatorList: string[];
}
export interface LiquidityProviderData {
    liquidityProvider: LiquidityProvider;
    nativeAssetBalance: string;
    externalAssetBalance: string;
}
export interface EventPolicy {
    eventType: string;
    pmtpPeriodStartBlock: string;
    pmtpPeriodEndBlock: string;
}
export interface RemovalQueue {
    count: Long;
    id: Long;
    startHeight: Long;
    totalValue: string;
}
export declare const Asset: {
    encode(message: Asset, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Asset;
    fromJSON(object: any): Asset;
    toJSON(message: Asset): unknown;
    fromPartial(object: DeepPartial<Asset>): Asset;
};
export declare const LiquidityProvider: {
    encode(message: LiquidityProvider, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LiquidityProvider;
    fromJSON(object: any): LiquidityProvider;
    toJSON(message: LiquidityProvider): unknown;
    fromPartial(object: DeepPartial<LiquidityProvider>): LiquidityProvider;
};
export declare const LiquidityUnlock: {
    encode(message: LiquidityUnlock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LiquidityUnlock;
    fromJSON(object: any): LiquidityUnlock;
    toJSON(message: LiquidityUnlock): unknown;
    fromPartial(object: DeepPartial<LiquidityUnlock>): LiquidityUnlock;
};
export declare const PmtpEpoch: {
    encode(message: PmtpEpoch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PmtpEpoch;
    fromJSON(object: any): PmtpEpoch;
    toJSON(message: PmtpEpoch): unknown;
    fromPartial(object: DeepPartial<PmtpEpoch>): PmtpEpoch;
};
export declare const WhiteList: {
    encode(message: WhiteList, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WhiteList;
    fromJSON(object: any): WhiteList;
    toJSON(message: WhiteList): unknown;
    fromPartial(object: DeepPartial<WhiteList>): WhiteList;
};
export declare const LiquidityProviderData: {
    encode(message: LiquidityProviderData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LiquidityProviderData;
    fromJSON(object: any): LiquidityProviderData;
    toJSON(message: LiquidityProviderData): unknown;
    fromPartial(object: DeepPartial<LiquidityProviderData>): LiquidityProviderData;
};
export declare const EventPolicy: {
    encode(message: EventPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventPolicy;
    fromJSON(object: any): EventPolicy;
    toJSON(message: EventPolicy): unknown;
    fromPartial(object: DeepPartial<EventPolicy>): EventPolicy;
};
export declare const RemovalQueue: {
    encode(message: RemovalQueue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemovalQueue;
    fromJSON(object: any): RemovalQueue;
    toJSON(message: RemovalQueue): unknown;
    fromPartial(object: DeepPartial<RemovalQueue>): RemovalQueue;
};
