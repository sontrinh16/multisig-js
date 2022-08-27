import { Params, PoEContractType } from "./poe";
import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** GenesisState - initial state of module */
export interface GenesisState {
    /** params defines all the parameter of the module */
    params: Params;
    /**
     * SeedContracts stores and instantiates the Proof of Engagement
     * contracts on the chain.
     */
    seedContracts?: SeedContracts;
    /** ImportDump restores the state from an exported state genesis */
    importDump?: ImportDump;
}
/** ImportDump has all module data for non seed mode. */
export interface ImportDump {
    /** Contracts PoE contract addresses and types */
    contracts: PoEContract[];
}
/**
 * SeedContracts contains the contract configuration and group members to setup
 * all PoE contracts on chain.
 */
export interface SeedContracts {
    /** GenTxs defines the genesis transactions to create a validator. */
    genTxs: Uint8Array[];
    /**
     * BootstrapAccountAddress single address that is set as bootstrap-account for
     * the PoE contracts in seed mode.
     */
    bootstrapAccountAddress: string;
    /**
     * Engagement weighted members of the engagement group. Validators should be
     * in here.
     */
    engagement: TG4Member[];
    stakeContractConfig: StakeContractConfig;
    valsetContractConfig: ValsetContractConfig;
    engagementContractConfig: EngagementContractConfig;
    /** BondDenom defines the bondable coin denomination. */
    bondDenom: string;
    oversightCommitteeContractConfig: OversightCommitteeContractConfig;
    communityPoolContractConfig: CommunityPoolContractConfig;
    validatorVotingContractConfig: ValidatorVotingContractConfig;
    oversightCommunityMembers: string[];
    arbiterPoolMembers: string[];
    arbiterPoolContractConfig: ArbiterPoolContractConfig;
    mixerContractConfig: MixerContractConfig;
}
/**
 * Mixer contract setup. See
 * https://github.com/confio/poe-contracts/tree/main/contracts/tg4-mixer
 */
export interface MixerContractConfig {
    /**
     * Sigmoid returns a sigmoid-like value of staked amount times engagement
     * points. See the Proof-of-Engagement white-paper for details.
     */
    sigmoid: MixerContractConfig_Sigmoid;
}
export interface MixerContractConfig_Sigmoid {
    maxPoints: Long;
    p: string;
    s: string;
}
/** StakeContractConfig initial setup config */
export interface StakeContractConfig {
    minBond: Long;
    tokensPerPoint: Long;
    unbondingPeriod: string;
    claimAutoreturnLimit: number;
}
/** ValsetContractConfig initial setup config */
export interface ValsetContractConfig {
    minPoints: Long;
    /**
     * MaxValidators The maximum number of validators that can be included in the
     * Tendermint validator set.
     */
    maxValidators: number;
    /**
     * EpochLength We update the Tendermint validator set only once per epoch.
     * Epoch # is env.block.time/epoch_length (round down). The first block with a
     * new epoch number will trigger a new validator calculation.
     */
    epochLength: string;
    epochReward: Coin;
    /**
     * Scaling is the factor to multiply cw4-group weights to produce the
     * Tendermint validator power
     */
    scaling: number;
    /**
     * FeePercentage is the percentage of total accumulated fees that is
     * subtracted from tokens minted as rewards. 50% by default. To disable this
     * feature just set it to 0 (which effectively means that fees don't affect
     * the per-epoch reward).
     */
    feePercentage: string;
    /** CommunityPoolRewardRation in percentage */
    communityPoolRewardRatio: string;
    /** EngagementRewardRatio reward ration in percentage for all */
    engagementRewardRatio: string;
    /** ValidatorRewardRation in percentage for all */
    validatorRewardRatio: string;
    /**
     * AutoUnjail if set to true, we will auto-unjail any validator after their
     * jailtime is over.
     */
    autoUnjail: boolean;
    /**
     * DoubleSignSlashRatio Validators who are caught double signing are jailed
     * forever and their bonded tokens are slashed based on this value.
     */
    doubleSignSlashRatio: string;
    /**
     * When a validator joins the valset, verify they sign the first block since
     * joining or jail them for a period otherwise.
     *
     * The verification happens every time the validator becomes an active
     * validator, including when they are unjailed or when they just gain enough
     * power to participate.
     */
    verifyValidators: boolean;
    /**
     * OfflineJailDuration duration to jail a validator for in case they don't
     * sign their first epoch boundary block. After the period, they have to pass
     * verification again, ad infinitum.
     */
    offlineJailDuration: string;
}
/** EngagementContractConfig initial setup config */
export interface EngagementContractConfig {
    halflife: string;
}
/** OversightCommitteeContractConfig initial setup config for the trusted circle */
export interface OversightCommitteeContractConfig {
    /** Name of TRUSTED_CIRCLE */
    name: string;
    /** EscrowAmount The required escrow amount, in the default denom (utgd) */
    escrowAmount: Coin;
    /** VotingRules rules for the tally */
    votingRules: VotingRules;
    /**
     * DenyListContractAddress is an optional cw4 contract with list of addresses
     * denied to be part of TrustedCircle
     */
    denyListContractAddress: string;
}
/** CommunityPoolContractConfig initial setup config for the contract */
export interface CommunityPoolContractConfig {
    /** VotingRules rules for the tally */
    votingRules: VotingRules;
}
/** ValidatorVotingContractConfig CommunityPoolContractConfig */
export interface ValidatorVotingContractConfig {
    /** VotingRules rules for the tally */
    votingRules: VotingRules;
}
/** PoEContract address and type information */
export interface PoEContract {
    /** ContractType type. */
    contractType: PoEContractType;
    /** Address is the bech32 address string */
    address: string;
}
/** TG4Member member of the Engagement group. */
export interface TG4Member {
    /** Address is the bech32 address string */
    address: string;
    points: Long;
}
/** VotingRules contains configuration for the tally. */
export interface VotingRules {
    /** VotingPeriod Voting period in days */
    votingPeriod: number;
    /** Quorum  voting quorum percentage (1-100) */
    quorum: string;
    /** Threshold voting threshold percentage (50-100) */
    threshold: string;
    /**
     * AllowEndEarly If true, and absolute threshold and quorum are met, we can
     * end before voting period finished. (Recommended value: true, unless you
     * have special needs)
     */
    allowEndEarly: boolean;
}
/** ArbiterPoolContractConfig initial setup config for the trusted circle */
export interface ArbiterPoolContractConfig {
    /** Name of TRUSTED_CIRCLE */
    name: string;
    /** EscrowAmount The required escrow amount, in the default denom (utgd) */
    escrowAmount: Coin;
    /** VotingRules rules for the tally */
    votingRules: VotingRules;
    /**
     * DenyListContractAddress is an optional cw4 contract with list of addresses
     * denied to be part of TrustedCircle
     */
    denyListContractAddress: string;
    /** DisputeCost The required dispute amount, in the default denom (utgd) */
    disputeCost: Coin;
    waitingPeriod: string;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
export declare const ImportDump: {
    encode(message: ImportDump, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ImportDump;
    fromJSON(object: any): ImportDump;
    toJSON(message: ImportDump): unknown;
    fromPartial(object: DeepPartial<ImportDump>): ImportDump;
};
export declare const SeedContracts: {
    encode(message: SeedContracts, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SeedContracts;
    fromJSON(object: any): SeedContracts;
    toJSON(message: SeedContracts): unknown;
    fromPartial(object: DeepPartial<SeedContracts>): SeedContracts;
};
export declare const MixerContractConfig: {
    encode(message: MixerContractConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MixerContractConfig;
    fromJSON(object: any): MixerContractConfig;
    toJSON(message: MixerContractConfig): unknown;
    fromPartial(object: DeepPartial<MixerContractConfig>): MixerContractConfig;
};
export declare const MixerContractConfig_Sigmoid: {
    encode(message: MixerContractConfig_Sigmoid, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MixerContractConfig_Sigmoid;
    fromJSON(object: any): MixerContractConfig_Sigmoid;
    toJSON(message: MixerContractConfig_Sigmoid): unknown;
    fromPartial(object: DeepPartial<MixerContractConfig_Sigmoid>): MixerContractConfig_Sigmoid;
};
export declare const StakeContractConfig: {
    encode(message: StakeContractConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StakeContractConfig;
    fromJSON(object: any): StakeContractConfig;
    toJSON(message: StakeContractConfig): unknown;
    fromPartial(object: DeepPartial<StakeContractConfig>): StakeContractConfig;
};
export declare const ValsetContractConfig: {
    encode(message: ValsetContractConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValsetContractConfig;
    fromJSON(object: any): ValsetContractConfig;
    toJSON(message: ValsetContractConfig): unknown;
    fromPartial(object: DeepPartial<ValsetContractConfig>): ValsetContractConfig;
};
export declare const EngagementContractConfig: {
    encode(message: EngagementContractConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EngagementContractConfig;
    fromJSON(object: any): EngagementContractConfig;
    toJSON(message: EngagementContractConfig): unknown;
    fromPartial(object: DeepPartial<EngagementContractConfig>): EngagementContractConfig;
};
export declare const OversightCommitteeContractConfig: {
    encode(message: OversightCommitteeContractConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OversightCommitteeContractConfig;
    fromJSON(object: any): OversightCommitteeContractConfig;
    toJSON(message: OversightCommitteeContractConfig): unknown;
    fromPartial(object: DeepPartial<OversightCommitteeContractConfig>): OversightCommitteeContractConfig;
};
export declare const CommunityPoolContractConfig: {
    encode(message: CommunityPoolContractConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CommunityPoolContractConfig;
    fromJSON(object: any): CommunityPoolContractConfig;
    toJSON(message: CommunityPoolContractConfig): unknown;
    fromPartial(object: DeepPartial<CommunityPoolContractConfig>): CommunityPoolContractConfig;
};
export declare const ValidatorVotingContractConfig: {
    encode(message: ValidatorVotingContractConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorVotingContractConfig;
    fromJSON(object: any): ValidatorVotingContractConfig;
    toJSON(message: ValidatorVotingContractConfig): unknown;
    fromPartial(object: DeepPartial<ValidatorVotingContractConfig>): ValidatorVotingContractConfig;
};
export declare const PoEContract: {
    encode(message: PoEContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PoEContract;
    fromJSON(object: any): PoEContract;
    toJSON(message: PoEContract): unknown;
    fromPartial(object: DeepPartial<PoEContract>): PoEContract;
};
export declare const TG4Member: {
    encode(message: TG4Member, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TG4Member;
    fromJSON(object: any): TG4Member;
    toJSON(message: TG4Member): unknown;
    fromPartial(object: DeepPartial<TG4Member>): TG4Member;
};
export declare const VotingRules: {
    encode(message: VotingRules, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VotingRules;
    fromJSON(object: any): VotingRules;
    toJSON(message: VotingRules): unknown;
    fromPartial(object: DeepPartial<VotingRules>): VotingRules;
};
export declare const ArbiterPoolContractConfig: {
    encode(message: ArbiterPoolContractConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ArbiterPoolContractConfig;
    fromJSON(object: any): ArbiterPoolContractConfig;
    toJSON(message: ArbiterPoolContractConfig): unknown;
    fromPartial(object: DeepPartial<ArbiterPoolContractConfig>): ArbiterPoolContractConfig;
};
