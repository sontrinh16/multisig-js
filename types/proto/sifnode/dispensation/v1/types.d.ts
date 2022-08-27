import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** Distribution type enum */
export declare enum DistributionType {
    /** DISTRIBUTION_TYPE_UNSPECIFIED - Unspecified distribution type */
    DISTRIBUTION_TYPE_UNSPECIFIED = 0,
    /** DISTRIBUTION_TYPE_AIRDROP - Airdrop distribution type */
    DISTRIBUTION_TYPE_AIRDROP = 1,
    /** DISTRIBUTION_TYPE_VALIDATOR_SUBSIDY - Validator Subsidy distribution type */
    DISTRIBUTION_TYPE_VALIDATOR_SUBSIDY = 2,
    /** DISTRIBUTION_TYPE_LIQUIDITY_MINING - Liquidity mining distribution type */
    DISTRIBUTION_TYPE_LIQUIDITY_MINING = 3,
    UNRECOGNIZED = -1
}
export declare function distributionTypeFromJSON(object: any): DistributionType;
export declare function distributionTypeToJSON(object: DistributionType): string;
/** Claim status enum */
export declare enum DistributionStatus {
    /** DISTRIBUTION_STATUS_UNSPECIFIED - Unspecified */
    DISTRIBUTION_STATUS_UNSPECIFIED = 0,
    /** DISTRIBUTION_STATUS_PENDING - Pending status */
    DISTRIBUTION_STATUS_PENDING = 1,
    /** DISTRIBUTION_STATUS_COMPLETED - Completed status */
    DISTRIBUTION_STATUS_COMPLETED = 2,
    /** DISTRIBUTION_STATUS_FAILED - Failed status */
    DISTRIBUTION_STATUS_FAILED = 3,
    UNRECOGNIZED = -1
}
export declare function distributionStatusFromJSON(object: any): DistributionStatus;
export declare function distributionStatusToJSON(object: DistributionStatus): string;
export interface GenesisState {
    distributionRecords: DistributionRecords;
    distributions: Distributions;
    claims: UserClaims;
}
export interface DistributionRecord {
    distributionStatus: DistributionStatus;
    distributionType: DistributionType;
    distributionName: string;
    recipientAddress: string;
    coins: Coin[];
    distributionStartHeight: Long;
    distributionCompletedHeight: Long;
    authorizedRunner: string;
}
export interface DistributionRecords {
    distributionRecords: DistributionRecord[];
}
export interface Distributions {
    distributions: Distribution[];
}
export interface Distribution {
    distributionType: DistributionType;
    distributionName: string;
    runner: string;
}
export interface UserClaim {
    userAddress: string;
    userClaimType: DistributionType;
    userClaimTime: string;
}
export interface UserClaims {
    userClaims: UserClaim[];
}
export interface MintController {
    totalCounter: Coin;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
export declare const DistributionRecord: {
    encode(message: DistributionRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DistributionRecord;
    fromJSON(object: any): DistributionRecord;
    toJSON(message: DistributionRecord): unknown;
    fromPartial(object: DeepPartial<DistributionRecord>): DistributionRecord;
};
export declare const DistributionRecords: {
    encode(message: DistributionRecords, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DistributionRecords;
    fromJSON(object: any): DistributionRecords;
    toJSON(message: DistributionRecords): unknown;
    fromPartial(object: DeepPartial<DistributionRecords>): DistributionRecords;
};
export declare const Distributions: {
    encode(message: Distributions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Distributions;
    fromJSON(object: any): Distributions;
    toJSON(message: Distributions): unknown;
    fromPartial(object: DeepPartial<Distributions>): Distributions;
};
export declare const Distribution: {
    encode(message: Distribution, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Distribution;
    fromJSON(object: any): Distribution;
    toJSON(message: Distribution): unknown;
    fromPartial(object: DeepPartial<Distribution>): Distribution;
};
export declare const UserClaim: {
    encode(message: UserClaim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserClaim;
    fromJSON(object: any): UserClaim;
    toJSON(message: UserClaim): unknown;
    fromPartial(object: DeepPartial<UserClaim>): UserClaim;
};
export declare const UserClaims: {
    encode(message: UserClaims, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserClaims;
    fromJSON(object: any): UserClaims;
    toJSON(message: UserClaims): unknown;
    fromPartial(object: DeepPartial<UserClaims>): UserClaims;
};
export declare const MintController: {
    encode(message: MintController, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MintController;
    fromJSON(object: any): MintController;
    toJSON(message: MintController): unknown;
    fromPartial(object: DeepPartial<MintController>): MintController;
};
