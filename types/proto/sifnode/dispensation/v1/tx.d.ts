import { DistributionType } from "./types";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface MsgCreateDistribution {
    distributor: string;
    authorizedRunner: string;
    distributionType: DistributionType;
    output: string[];
}
export interface MsgCreateDistributionResponse {
}
export interface MsgCreateClaimResponse {
}
export interface MsgRunDistributionResponse {
}
export interface MsgCreateUserClaim {
    userClaimAddress: string;
    userClaimType: DistributionType;
}
export interface MsgRunDistribution {
    authorizedRunner: string;
    distributionName: string;
    distributionType: DistributionType;
    distributionCount: Long;
}
export declare const MsgCreateDistribution: {
    encode(message: MsgCreateDistribution, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDistribution;
    fromJSON(object: any): MsgCreateDistribution;
    toJSON(message: MsgCreateDistribution): unknown;
    fromPartial(object: DeepPartial<MsgCreateDistribution>): MsgCreateDistribution;
};
export declare const MsgCreateDistributionResponse: {
    encode(_: MsgCreateDistributionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDistributionResponse;
    fromJSON(_: any): MsgCreateDistributionResponse;
    toJSON(_: MsgCreateDistributionResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateDistributionResponse>): MsgCreateDistributionResponse;
};
export declare const MsgCreateClaimResponse: {
    encode(_: MsgCreateClaimResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateClaimResponse;
    fromJSON(_: any): MsgCreateClaimResponse;
    toJSON(_: MsgCreateClaimResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateClaimResponse>): MsgCreateClaimResponse;
};
export declare const MsgRunDistributionResponse: {
    encode(_: MsgRunDistributionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRunDistributionResponse;
    fromJSON(_: any): MsgRunDistributionResponse;
    toJSON(_: MsgRunDistributionResponse): unknown;
    fromPartial(_: DeepPartial<MsgRunDistributionResponse>): MsgRunDistributionResponse;
};
export declare const MsgCreateUserClaim: {
    encode(message: MsgCreateUserClaim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateUserClaim;
    fromJSON(object: any): MsgCreateUserClaim;
    toJSON(message: MsgCreateUserClaim): unknown;
    fromPartial(object: DeepPartial<MsgCreateUserClaim>): MsgCreateUserClaim;
};
export declare const MsgRunDistribution: {
    encode(message: MsgRunDistribution, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRunDistribution;
    fromJSON(object: any): MsgRunDistribution;
    toJSON(message: MsgRunDistribution): unknown;
    fromPartial(object: DeepPartial<MsgRunDistribution>): MsgRunDistribution;
};
