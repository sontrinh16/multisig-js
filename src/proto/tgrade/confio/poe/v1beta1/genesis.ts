import { Params, PoEContractType, poEContractTypeFromJSON, poEContractTypeToJSON } from "./poe";
import { Duration } from "../../../../google/protobuf/duration";
import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, bytesFromBase64, base64FromBytes, Long, toDuration, fromDuration } from "@osmonauts/helpers";

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

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    seedContracts: undefined,
    importDump: undefined
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    if (message.seedContracts !== undefined) {
      SeedContracts.encode(message.seedContracts, writer.uint32(18).fork()).ldelim();
    }

    if (message.importDump !== undefined) {
      ImportDump.encode(message.importDump, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 2:
          message.seedContracts = SeedContracts.decode(reader, reader.uint32());
          break;

        case 3:
          message.importDump = ImportDump.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      seedContracts: isSet(object.seedContracts) ? SeedContracts.fromJSON(object.seedContracts) : undefined,
      importDump: isSet(object.importDump) ? ImportDump.fromJSON(object.importDump) : undefined
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.seedContracts !== undefined && (obj.seedContracts = message.seedContracts ? SeedContracts.toJSON(message.seedContracts) : undefined);
    message.importDump !== undefined && (obj.importDump = message.importDump ? ImportDump.toJSON(message.importDump) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.seedContracts = object.seedContracts !== undefined && object.seedContracts !== null ? SeedContracts.fromPartial(object.seedContracts) : undefined;
    message.importDump = object.importDump !== undefined && object.importDump !== null ? ImportDump.fromPartial(object.importDump) : undefined;
    return message;
  }

};

function createBaseImportDump(): ImportDump {
  return {
    contracts: []
  };
}

export const ImportDump = {
  encode(message: ImportDump, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.contracts) {
      PoEContract.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ImportDump {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseImportDump();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contracts.push(PoEContract.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ImportDump {
    return {
      contracts: Array.isArray(object?.contracts) ? object.contracts.map((e: any) => PoEContract.fromJSON(e)) : []
    };
  },

  toJSON(message: ImportDump): unknown {
    const obj: any = {};

    if (message.contracts) {
      obj.contracts = message.contracts.map(e => e ? PoEContract.toJSON(e) : undefined);
    } else {
      obj.contracts = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<ImportDump>): ImportDump {
    const message = createBaseImportDump();
    message.contracts = object.contracts?.map(e => PoEContract.fromPartial(e)) || [];
    return message;
  }

};

function createBaseSeedContracts(): SeedContracts {
  return {
    genTxs: [],
    bootstrapAccountAddress: "",
    engagement: [],
    stakeContractConfig: undefined,
    valsetContractConfig: undefined,
    engagementContractConfig: undefined,
    bondDenom: "",
    oversightCommitteeContractConfig: undefined,
    communityPoolContractConfig: undefined,
    validatorVotingContractConfig: undefined,
    oversightCommunityMembers: [],
    arbiterPoolMembers: [],
    arbiterPoolContractConfig: undefined,
    mixerContractConfig: undefined
  };
}

export const SeedContracts = {
  encode(message: SeedContracts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.genTxs) {
      writer.uint32(10).bytes(v!);
    }

    if (message.bootstrapAccountAddress !== "") {
      writer.uint32(18).string(message.bootstrapAccountAddress);
    }

    for (const v of message.engagement) {
      TG4Member.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (message.stakeContractConfig !== undefined) {
      StakeContractConfig.encode(message.stakeContractConfig, writer.uint32(34).fork()).ldelim();
    }

    if (message.valsetContractConfig !== undefined) {
      ValsetContractConfig.encode(message.valsetContractConfig, writer.uint32(42).fork()).ldelim();
    }

    if (message.engagementContractConfig !== undefined) {
      EngagementContractConfig.encode(message.engagementContractConfig, writer.uint32(50).fork()).ldelim();
    }

    if (message.bondDenom !== "") {
      writer.uint32(58).string(message.bondDenom);
    }

    if (message.oversightCommitteeContractConfig !== undefined) {
      OversightCommitteeContractConfig.encode(message.oversightCommitteeContractConfig, writer.uint32(66).fork()).ldelim();
    }

    if (message.communityPoolContractConfig !== undefined) {
      CommunityPoolContractConfig.encode(message.communityPoolContractConfig, writer.uint32(74).fork()).ldelim();
    }

    if (message.validatorVotingContractConfig !== undefined) {
      ValidatorVotingContractConfig.encode(message.validatorVotingContractConfig, writer.uint32(82).fork()).ldelim();
    }

    for (const v of message.oversightCommunityMembers) {
      writer.uint32(90).string(v!);
    }

    for (const v of message.arbiterPoolMembers) {
      writer.uint32(98).string(v!);
    }

    if (message.arbiterPoolContractConfig !== undefined) {
      ArbiterPoolContractConfig.encode(message.arbiterPoolContractConfig, writer.uint32(106).fork()).ldelim();
    }

    if (message.mixerContractConfig !== undefined) {
      MixerContractConfig.encode(message.mixerContractConfig, writer.uint32(114).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SeedContracts {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSeedContracts();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.genTxs.push(reader.bytes());
          break;

        case 2:
          message.bootstrapAccountAddress = reader.string();
          break;

        case 3:
          message.engagement.push(TG4Member.decode(reader, reader.uint32()));
          break;

        case 4:
          message.stakeContractConfig = StakeContractConfig.decode(reader, reader.uint32());
          break;

        case 5:
          message.valsetContractConfig = ValsetContractConfig.decode(reader, reader.uint32());
          break;

        case 6:
          message.engagementContractConfig = EngagementContractConfig.decode(reader, reader.uint32());
          break;

        case 7:
          message.bondDenom = reader.string();
          break;

        case 8:
          message.oversightCommitteeContractConfig = OversightCommitteeContractConfig.decode(reader, reader.uint32());
          break;

        case 9:
          message.communityPoolContractConfig = CommunityPoolContractConfig.decode(reader, reader.uint32());
          break;

        case 10:
          message.validatorVotingContractConfig = ValidatorVotingContractConfig.decode(reader, reader.uint32());
          break;

        case 11:
          message.oversightCommunityMembers.push(reader.string());
          break;

        case 12:
          message.arbiterPoolMembers.push(reader.string());
          break;

        case 13:
          message.arbiterPoolContractConfig = ArbiterPoolContractConfig.decode(reader, reader.uint32());
          break;

        case 14:
          message.mixerContractConfig = MixerContractConfig.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SeedContracts {
    return {
      genTxs: Array.isArray(object?.genTxs) ? object.genTxs.map((e: any) => bytesFromBase64(e)) : [],
      bootstrapAccountAddress: isSet(object.bootstrapAccountAddress) ? String(object.bootstrapAccountAddress) : "",
      engagement: Array.isArray(object?.engagement) ? object.engagement.map((e: any) => TG4Member.fromJSON(e)) : [],
      stakeContractConfig: isSet(object.stakeContractConfig) ? StakeContractConfig.fromJSON(object.stakeContractConfig) : undefined,
      valsetContractConfig: isSet(object.valsetContractConfig) ? ValsetContractConfig.fromJSON(object.valsetContractConfig) : undefined,
      engagementContractConfig: isSet(object.engagementContractConfig) ? EngagementContractConfig.fromJSON(object.engagementContractConfig) : undefined,
      bondDenom: isSet(object.bondDenom) ? String(object.bondDenom) : "",
      oversightCommitteeContractConfig: isSet(object.oversightCommitteeContractConfig) ? OversightCommitteeContractConfig.fromJSON(object.oversightCommitteeContractConfig) : undefined,
      communityPoolContractConfig: isSet(object.communityPoolContractConfig) ? CommunityPoolContractConfig.fromJSON(object.communityPoolContractConfig) : undefined,
      validatorVotingContractConfig: isSet(object.validatorVotingContractConfig) ? ValidatorVotingContractConfig.fromJSON(object.validatorVotingContractConfig) : undefined,
      oversightCommunityMembers: Array.isArray(object?.oversightCommunityMembers) ? object.oversightCommunityMembers.map((e: any) => String(e)) : [],
      arbiterPoolMembers: Array.isArray(object?.arbiterPoolMembers) ? object.arbiterPoolMembers.map((e: any) => String(e)) : [],
      arbiterPoolContractConfig: isSet(object.arbiterPoolContractConfig) ? ArbiterPoolContractConfig.fromJSON(object.arbiterPoolContractConfig) : undefined,
      mixerContractConfig: isSet(object.mixerContractConfig) ? MixerContractConfig.fromJSON(object.mixerContractConfig) : undefined
    };
  },

  toJSON(message: SeedContracts): unknown {
    const obj: any = {};

    if (message.genTxs) {
      obj.genTxs = message.genTxs.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.genTxs = [];
    }

    message.bootstrapAccountAddress !== undefined && (obj.bootstrapAccountAddress = message.bootstrapAccountAddress);

    if (message.engagement) {
      obj.engagement = message.engagement.map(e => e ? TG4Member.toJSON(e) : undefined);
    } else {
      obj.engagement = [];
    }

    message.stakeContractConfig !== undefined && (obj.stakeContractConfig = message.stakeContractConfig ? StakeContractConfig.toJSON(message.stakeContractConfig) : undefined);
    message.valsetContractConfig !== undefined && (obj.valsetContractConfig = message.valsetContractConfig ? ValsetContractConfig.toJSON(message.valsetContractConfig) : undefined);
    message.engagementContractConfig !== undefined && (obj.engagementContractConfig = message.engagementContractConfig ? EngagementContractConfig.toJSON(message.engagementContractConfig) : undefined);
    message.bondDenom !== undefined && (obj.bondDenom = message.bondDenom);
    message.oversightCommitteeContractConfig !== undefined && (obj.oversightCommitteeContractConfig = message.oversightCommitteeContractConfig ? OversightCommitteeContractConfig.toJSON(message.oversightCommitteeContractConfig) : undefined);
    message.communityPoolContractConfig !== undefined && (obj.communityPoolContractConfig = message.communityPoolContractConfig ? CommunityPoolContractConfig.toJSON(message.communityPoolContractConfig) : undefined);
    message.validatorVotingContractConfig !== undefined && (obj.validatorVotingContractConfig = message.validatorVotingContractConfig ? ValidatorVotingContractConfig.toJSON(message.validatorVotingContractConfig) : undefined);

    if (message.oversightCommunityMembers) {
      obj.oversightCommunityMembers = message.oversightCommunityMembers.map(e => e);
    } else {
      obj.oversightCommunityMembers = [];
    }

    if (message.arbiterPoolMembers) {
      obj.arbiterPoolMembers = message.arbiterPoolMembers.map(e => e);
    } else {
      obj.arbiterPoolMembers = [];
    }

    message.arbiterPoolContractConfig !== undefined && (obj.arbiterPoolContractConfig = message.arbiterPoolContractConfig ? ArbiterPoolContractConfig.toJSON(message.arbiterPoolContractConfig) : undefined);
    message.mixerContractConfig !== undefined && (obj.mixerContractConfig = message.mixerContractConfig ? MixerContractConfig.toJSON(message.mixerContractConfig) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<SeedContracts>): SeedContracts {
    const message = createBaseSeedContracts();
    message.genTxs = object.genTxs?.map(e => e) || [];
    message.bootstrapAccountAddress = object.bootstrapAccountAddress ?? "";
    message.engagement = object.engagement?.map(e => TG4Member.fromPartial(e)) || [];
    message.stakeContractConfig = object.stakeContractConfig !== undefined && object.stakeContractConfig !== null ? StakeContractConfig.fromPartial(object.stakeContractConfig) : undefined;
    message.valsetContractConfig = object.valsetContractConfig !== undefined && object.valsetContractConfig !== null ? ValsetContractConfig.fromPartial(object.valsetContractConfig) : undefined;
    message.engagementContractConfig = object.engagementContractConfig !== undefined && object.engagementContractConfig !== null ? EngagementContractConfig.fromPartial(object.engagementContractConfig) : undefined;
    message.bondDenom = object.bondDenom ?? "";
    message.oversightCommitteeContractConfig = object.oversightCommitteeContractConfig !== undefined && object.oversightCommitteeContractConfig !== null ? OversightCommitteeContractConfig.fromPartial(object.oversightCommitteeContractConfig) : undefined;
    message.communityPoolContractConfig = object.communityPoolContractConfig !== undefined && object.communityPoolContractConfig !== null ? CommunityPoolContractConfig.fromPartial(object.communityPoolContractConfig) : undefined;
    message.validatorVotingContractConfig = object.validatorVotingContractConfig !== undefined && object.validatorVotingContractConfig !== null ? ValidatorVotingContractConfig.fromPartial(object.validatorVotingContractConfig) : undefined;
    message.oversightCommunityMembers = object.oversightCommunityMembers?.map(e => e) || [];
    message.arbiterPoolMembers = object.arbiterPoolMembers?.map(e => e) || [];
    message.arbiterPoolContractConfig = object.arbiterPoolContractConfig !== undefined && object.arbiterPoolContractConfig !== null ? ArbiterPoolContractConfig.fromPartial(object.arbiterPoolContractConfig) : undefined;
    message.mixerContractConfig = object.mixerContractConfig !== undefined && object.mixerContractConfig !== null ? MixerContractConfig.fromPartial(object.mixerContractConfig) : undefined;
    return message;
  }

};

function createBaseMixerContractConfig(): MixerContractConfig {
  return {
    sigmoid: undefined
  };
}

export const MixerContractConfig = {
  encode(message: MixerContractConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sigmoid !== undefined) {
      MixerContractConfig_Sigmoid.encode(message.sigmoid, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MixerContractConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMixerContractConfig();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sigmoid = MixerContractConfig_Sigmoid.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MixerContractConfig {
    return {
      sigmoid: isSet(object.sigmoid) ? MixerContractConfig_Sigmoid.fromJSON(object.sigmoid) : undefined
    };
  },

  toJSON(message: MixerContractConfig): unknown {
    const obj: any = {};
    message.sigmoid !== undefined && (obj.sigmoid = message.sigmoid ? MixerContractConfig_Sigmoid.toJSON(message.sigmoid) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MixerContractConfig>): MixerContractConfig {
    const message = createBaseMixerContractConfig();
    message.sigmoid = object.sigmoid !== undefined && object.sigmoid !== null ? MixerContractConfig_Sigmoid.fromPartial(object.sigmoid) : undefined;
    return message;
  }

};

function createBaseMixerContractConfig_Sigmoid(): MixerContractConfig_Sigmoid {
  return {
    maxPoints: Long.UZERO,
    p: "",
    s: ""
  };
}

export const MixerContractConfig_Sigmoid = {
  encode(message: MixerContractConfig_Sigmoid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.maxPoints.isZero()) {
      writer.uint32(8).uint64(message.maxPoints);
    }

    if (message.p !== "") {
      writer.uint32(18).string(message.p);
    }

    if (message.s !== "") {
      writer.uint32(26).string(message.s);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MixerContractConfig_Sigmoid {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMixerContractConfig_Sigmoid();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.maxPoints = (reader.uint64() as Long);
          break;

        case 2:
          message.p = reader.string();
          break;

        case 3:
          message.s = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MixerContractConfig_Sigmoid {
    return {
      maxPoints: isSet(object.maxPoints) ? Long.fromString(object.maxPoints) : Long.UZERO,
      p: isSet(object.p) ? String(object.p) : "",
      s: isSet(object.s) ? String(object.s) : ""
    };
  },

  toJSON(message: MixerContractConfig_Sigmoid): unknown {
    const obj: any = {};
    message.maxPoints !== undefined && (obj.maxPoints = (message.maxPoints || Long.UZERO).toString());
    message.p !== undefined && (obj.p = message.p);
    message.s !== undefined && (obj.s = message.s);
    return obj;
  },

  fromPartial(object: DeepPartial<MixerContractConfig_Sigmoid>): MixerContractConfig_Sigmoid {
    const message = createBaseMixerContractConfig_Sigmoid();
    message.maxPoints = object.maxPoints !== undefined && object.maxPoints !== null ? Long.fromValue(object.maxPoints) : Long.UZERO;
    message.p = object.p ?? "";
    message.s = object.s ?? "";
    return message;
  }

};

function createBaseStakeContractConfig(): StakeContractConfig {
  return {
    minBond: Long.UZERO,
    tokensPerPoint: Long.UZERO,
    unbondingPeriod: undefined,
    claimAutoreturnLimit: 0
  };
}

export const StakeContractConfig = {
  encode(message: StakeContractConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.minBond.isZero()) {
      writer.uint32(8).uint64(message.minBond);
    }

    if (!message.tokensPerPoint.isZero()) {
      writer.uint32(16).uint64(message.tokensPerPoint);
    }

    if (message.unbondingPeriod !== undefined) {
      Duration.encode(toDuration(message.unbondingPeriod), writer.uint32(26).fork()).ldelim();
    }

    if (message.claimAutoreturnLimit !== 0) {
      writer.uint32(32).uint32(message.claimAutoreturnLimit);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StakeContractConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakeContractConfig();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.minBond = (reader.uint64() as Long);
          break;

        case 2:
          message.tokensPerPoint = (reader.uint64() as Long);
          break;

        case 3:
          message.unbondingPeriod = fromDuration(Duration.decode(reader, reader.uint32()));
          break;

        case 4:
          message.claimAutoreturnLimit = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): StakeContractConfig {
    return {
      minBond: isSet(object.minBond) ? Long.fromString(object.minBond) : Long.UZERO,
      tokensPerPoint: isSet(object.tokensPerPoint) ? Long.fromString(object.tokensPerPoint) : Long.UZERO,
      unbondingPeriod: isSet(object.unbondingPeriod) ? String(object.unbondingPeriod) : undefined,
      claimAutoreturnLimit: isSet(object.claimAutoreturnLimit) ? Number(object.claimAutoreturnLimit) : 0
    };
  },

  toJSON(message: StakeContractConfig): unknown {
    const obj: any = {};
    message.minBond !== undefined && (obj.minBond = (message.minBond || Long.UZERO).toString());
    message.tokensPerPoint !== undefined && (obj.tokensPerPoint = (message.tokensPerPoint || Long.UZERO).toString());
    message.unbondingPeriod !== undefined && (obj.unbondingPeriod = message.unbondingPeriod);
    message.claimAutoreturnLimit !== undefined && (obj.claimAutoreturnLimit = Math.round(message.claimAutoreturnLimit));
    return obj;
  },

  fromPartial(object: DeepPartial<StakeContractConfig>): StakeContractConfig {
    const message = createBaseStakeContractConfig();
    message.minBond = object.minBond !== undefined && object.minBond !== null ? Long.fromValue(object.minBond) : Long.UZERO;
    message.tokensPerPoint = object.tokensPerPoint !== undefined && object.tokensPerPoint !== null ? Long.fromValue(object.tokensPerPoint) : Long.UZERO;
    message.unbondingPeriod = object.unbondingPeriod ?? undefined;
    message.claimAutoreturnLimit = object.claimAutoreturnLimit ?? 0;
    return message;
  }

};

function createBaseValsetContractConfig(): ValsetContractConfig {
  return {
    minPoints: Long.UZERO,
    maxValidators: 0,
    epochLength: undefined,
    epochReward: undefined,
    scaling: 0,
    feePercentage: "",
    communityPoolRewardRatio: "",
    engagementRewardRatio: "",
    validatorRewardRatio: "",
    autoUnjail: false,
    doubleSignSlashRatio: "",
    verifyValidators: false,
    offlineJailDuration: undefined
  };
}

export const ValsetContractConfig = {
  encode(message: ValsetContractConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.minPoints.isZero()) {
      writer.uint32(8).uint64(message.minPoints);
    }

    if (message.maxValidators !== 0) {
      writer.uint32(16).uint32(message.maxValidators);
    }

    if (message.epochLength !== undefined) {
      Duration.encode(toDuration(message.epochLength), writer.uint32(26).fork()).ldelim();
    }

    if (message.epochReward !== undefined) {
      Coin.encode(message.epochReward, writer.uint32(34).fork()).ldelim();
    }

    if (message.scaling !== 0) {
      writer.uint32(40).uint32(message.scaling);
    }

    if (message.feePercentage !== "") {
      writer.uint32(50).string(message.feePercentage);
    }

    if (message.communityPoolRewardRatio !== "") {
      writer.uint32(58).string(message.communityPoolRewardRatio);
    }

    if (message.engagementRewardRatio !== "") {
      writer.uint32(66).string(message.engagementRewardRatio);
    }

    if (message.validatorRewardRatio !== "") {
      writer.uint32(74).string(message.validatorRewardRatio);
    }

    if (message.autoUnjail === true) {
      writer.uint32(80).bool(message.autoUnjail);
    }

    if (message.doubleSignSlashRatio !== "") {
      writer.uint32(90).string(message.doubleSignSlashRatio);
    }

    if (message.verifyValidators === true) {
      writer.uint32(96).bool(message.verifyValidators);
    }

    if (message.offlineJailDuration !== undefined) {
      Duration.encode(toDuration(message.offlineJailDuration), writer.uint32(106).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValsetContractConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValsetContractConfig();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.minPoints = (reader.uint64() as Long);
          break;

        case 2:
          message.maxValidators = reader.uint32();
          break;

        case 3:
          message.epochLength = fromDuration(Duration.decode(reader, reader.uint32()));
          break;

        case 4:
          message.epochReward = Coin.decode(reader, reader.uint32());
          break;

        case 5:
          message.scaling = reader.uint32();
          break;

        case 6:
          message.feePercentage = reader.string();
          break;

        case 7:
          message.communityPoolRewardRatio = reader.string();
          break;

        case 8:
          message.engagementRewardRatio = reader.string();
          break;

        case 9:
          message.validatorRewardRatio = reader.string();
          break;

        case 10:
          message.autoUnjail = reader.bool();
          break;

        case 11:
          message.doubleSignSlashRatio = reader.string();
          break;

        case 12:
          message.verifyValidators = reader.bool();
          break;

        case 13:
          message.offlineJailDuration = fromDuration(Duration.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ValsetContractConfig {
    return {
      minPoints: isSet(object.minPoints) ? Long.fromString(object.minPoints) : Long.UZERO,
      maxValidators: isSet(object.maxValidators) ? Number(object.maxValidators) : 0,
      epochLength: isSet(object.epochLength) ? String(object.epochLength) : undefined,
      epochReward: isSet(object.epochReward) ? Coin.fromJSON(object.epochReward) : undefined,
      scaling: isSet(object.scaling) ? Number(object.scaling) : 0,
      feePercentage: isSet(object.feePercentage) ? String(object.feePercentage) : "",
      communityPoolRewardRatio: isSet(object.communityPoolRewardRatio) ? String(object.communityPoolRewardRatio) : "",
      engagementRewardRatio: isSet(object.engagementRewardRatio) ? String(object.engagementRewardRatio) : "",
      validatorRewardRatio: isSet(object.validatorRewardRatio) ? String(object.validatorRewardRatio) : "",
      autoUnjail: isSet(object.autoUnjail) ? Boolean(object.autoUnjail) : false,
      doubleSignSlashRatio: isSet(object.doubleSignSlashRatio) ? String(object.doubleSignSlashRatio) : "",
      verifyValidators: isSet(object.verifyValidators) ? Boolean(object.verifyValidators) : false,
      offlineJailDuration: isSet(object.offlineJailDuration) ? String(object.offlineJailDuration) : undefined
    };
  },

  toJSON(message: ValsetContractConfig): unknown {
    const obj: any = {};
    message.minPoints !== undefined && (obj.minPoints = (message.minPoints || Long.UZERO).toString());
    message.maxValidators !== undefined && (obj.maxValidators = Math.round(message.maxValidators));
    message.epochLength !== undefined && (obj.epochLength = message.epochLength);
    message.epochReward !== undefined && (obj.epochReward = message.epochReward ? Coin.toJSON(message.epochReward) : undefined);
    message.scaling !== undefined && (obj.scaling = Math.round(message.scaling));
    message.feePercentage !== undefined && (obj.feePercentage = message.feePercentage);
    message.communityPoolRewardRatio !== undefined && (obj.communityPoolRewardRatio = message.communityPoolRewardRatio);
    message.engagementRewardRatio !== undefined && (obj.engagementRewardRatio = message.engagementRewardRatio);
    message.validatorRewardRatio !== undefined && (obj.validatorRewardRatio = message.validatorRewardRatio);
    message.autoUnjail !== undefined && (obj.autoUnjail = message.autoUnjail);
    message.doubleSignSlashRatio !== undefined && (obj.doubleSignSlashRatio = message.doubleSignSlashRatio);
    message.verifyValidators !== undefined && (obj.verifyValidators = message.verifyValidators);
    message.offlineJailDuration !== undefined && (obj.offlineJailDuration = message.offlineJailDuration);
    return obj;
  },

  fromPartial(object: DeepPartial<ValsetContractConfig>): ValsetContractConfig {
    const message = createBaseValsetContractConfig();
    message.minPoints = object.minPoints !== undefined && object.minPoints !== null ? Long.fromValue(object.minPoints) : Long.UZERO;
    message.maxValidators = object.maxValidators ?? 0;
    message.epochLength = object.epochLength ?? undefined;
    message.epochReward = object.epochReward !== undefined && object.epochReward !== null ? Coin.fromPartial(object.epochReward) : undefined;
    message.scaling = object.scaling ?? 0;
    message.feePercentage = object.feePercentage ?? "";
    message.communityPoolRewardRatio = object.communityPoolRewardRatio ?? "";
    message.engagementRewardRatio = object.engagementRewardRatio ?? "";
    message.validatorRewardRatio = object.validatorRewardRatio ?? "";
    message.autoUnjail = object.autoUnjail ?? false;
    message.doubleSignSlashRatio = object.doubleSignSlashRatio ?? "";
    message.verifyValidators = object.verifyValidators ?? false;
    message.offlineJailDuration = object.offlineJailDuration ?? undefined;
    return message;
  }

};

function createBaseEngagementContractConfig(): EngagementContractConfig {
  return {
    halflife: undefined
  };
}

export const EngagementContractConfig = {
  encode(message: EngagementContractConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.halflife !== undefined) {
      Duration.encode(toDuration(message.halflife), writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EngagementContractConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEngagementContractConfig();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.halflife = fromDuration(Duration.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EngagementContractConfig {
    return {
      halflife: isSet(object.halflife) ? String(object.halflife) : undefined
    };
  },

  toJSON(message: EngagementContractConfig): unknown {
    const obj: any = {};
    message.halflife !== undefined && (obj.halflife = message.halflife);
    return obj;
  },

  fromPartial(object: DeepPartial<EngagementContractConfig>): EngagementContractConfig {
    const message = createBaseEngagementContractConfig();
    message.halflife = object.halflife ?? undefined;
    return message;
  }

};

function createBaseOversightCommitteeContractConfig(): OversightCommitteeContractConfig {
  return {
    name: "",
    escrowAmount: undefined,
    votingRules: undefined,
    denyListContractAddress: ""
  };
}

export const OversightCommitteeContractConfig = {
  encode(message: OversightCommitteeContractConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.escrowAmount !== undefined) {
      Coin.encode(message.escrowAmount, writer.uint32(18).fork()).ldelim();
    }

    if (message.votingRules !== undefined) {
      VotingRules.encode(message.votingRules, writer.uint32(26).fork()).ldelim();
    }

    if (message.denyListContractAddress !== "") {
      writer.uint32(34).string(message.denyListContractAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OversightCommitteeContractConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOversightCommitteeContractConfig();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.escrowAmount = Coin.decode(reader, reader.uint32());
          break;

        case 3:
          message.votingRules = VotingRules.decode(reader, reader.uint32());
          break;

        case 4:
          message.denyListContractAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): OversightCommitteeContractConfig {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      escrowAmount: isSet(object.escrowAmount) ? Coin.fromJSON(object.escrowAmount) : undefined,
      votingRules: isSet(object.votingRules) ? VotingRules.fromJSON(object.votingRules) : undefined,
      denyListContractAddress: isSet(object.denyListContractAddress) ? String(object.denyListContractAddress) : ""
    };
  },

  toJSON(message: OversightCommitteeContractConfig): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.escrowAmount !== undefined && (obj.escrowAmount = message.escrowAmount ? Coin.toJSON(message.escrowAmount) : undefined);
    message.votingRules !== undefined && (obj.votingRules = message.votingRules ? VotingRules.toJSON(message.votingRules) : undefined);
    message.denyListContractAddress !== undefined && (obj.denyListContractAddress = message.denyListContractAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<OversightCommitteeContractConfig>): OversightCommitteeContractConfig {
    const message = createBaseOversightCommitteeContractConfig();
    message.name = object.name ?? "";
    message.escrowAmount = object.escrowAmount !== undefined && object.escrowAmount !== null ? Coin.fromPartial(object.escrowAmount) : undefined;
    message.votingRules = object.votingRules !== undefined && object.votingRules !== null ? VotingRules.fromPartial(object.votingRules) : undefined;
    message.denyListContractAddress = object.denyListContractAddress ?? "";
    return message;
  }

};

function createBaseCommunityPoolContractConfig(): CommunityPoolContractConfig {
  return {
    votingRules: undefined
  };
}

export const CommunityPoolContractConfig = {
  encode(message: CommunityPoolContractConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.votingRules !== undefined) {
      VotingRules.encode(message.votingRules, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommunityPoolContractConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommunityPoolContractConfig();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.votingRules = VotingRules.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CommunityPoolContractConfig {
    return {
      votingRules: isSet(object.votingRules) ? VotingRules.fromJSON(object.votingRules) : undefined
    };
  },

  toJSON(message: CommunityPoolContractConfig): unknown {
    const obj: any = {};
    message.votingRules !== undefined && (obj.votingRules = message.votingRules ? VotingRules.toJSON(message.votingRules) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<CommunityPoolContractConfig>): CommunityPoolContractConfig {
    const message = createBaseCommunityPoolContractConfig();
    message.votingRules = object.votingRules !== undefined && object.votingRules !== null ? VotingRules.fromPartial(object.votingRules) : undefined;
    return message;
  }

};

function createBaseValidatorVotingContractConfig(): ValidatorVotingContractConfig {
  return {
    votingRules: undefined
  };
}

export const ValidatorVotingContractConfig = {
  encode(message: ValidatorVotingContractConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.votingRules !== undefined) {
      VotingRules.encode(message.votingRules, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorVotingContractConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorVotingContractConfig();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.votingRules = VotingRules.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ValidatorVotingContractConfig {
    return {
      votingRules: isSet(object.votingRules) ? VotingRules.fromJSON(object.votingRules) : undefined
    };
  },

  toJSON(message: ValidatorVotingContractConfig): unknown {
    const obj: any = {};
    message.votingRules !== undefined && (obj.votingRules = message.votingRules ? VotingRules.toJSON(message.votingRules) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ValidatorVotingContractConfig>): ValidatorVotingContractConfig {
    const message = createBaseValidatorVotingContractConfig();
    message.votingRules = object.votingRules !== undefined && object.votingRules !== null ? VotingRules.fromPartial(object.votingRules) : undefined;
    return message;
  }

};

function createBasePoEContract(): PoEContract {
  return {
    contractType: 0,
    address: ""
  };
}

export const PoEContract = {
  encode(message: PoEContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractType !== 0) {
      writer.uint32(8).int32(message.contractType);
    }

    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoEContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoEContract();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contractType = (reader.int32() as any);
          break;

        case 2:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PoEContract {
    return {
      contractType: isSet(object.contractType) ? poEContractTypeFromJSON(object.contractType) : 0,
      address: isSet(object.address) ? String(object.address) : ""
    };
  },

  toJSON(message: PoEContract): unknown {
    const obj: any = {};
    message.contractType !== undefined && (obj.contractType = poEContractTypeToJSON(message.contractType));
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<PoEContract>): PoEContract {
    const message = createBasePoEContract();
    message.contractType = object.contractType ?? 0;
    message.address = object.address ?? "";
    return message;
  }

};

function createBaseTG4Member(): TG4Member {
  return {
    address: "",
    points: Long.UZERO
  };
}

export const TG4Member = {
  encode(message: TG4Member, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (!message.points.isZero()) {
      writer.uint32(16).uint64(message.points);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TG4Member {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTG4Member();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.points = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TG4Member {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      points: isSet(object.points) ? Long.fromString(object.points) : Long.UZERO
    };
  },

  toJSON(message: TG4Member): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.points !== undefined && (obj.points = (message.points || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<TG4Member>): TG4Member {
    const message = createBaseTG4Member();
    message.address = object.address ?? "";
    message.points = object.points !== undefined && object.points !== null ? Long.fromValue(object.points) : Long.UZERO;
    return message;
  }

};

function createBaseVotingRules(): VotingRules {
  return {
    votingPeriod: 0,
    quorum: "",
    threshold: "",
    allowEndEarly: false
  };
}

export const VotingRules = {
  encode(message: VotingRules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.votingPeriod !== 0) {
      writer.uint32(8).uint32(message.votingPeriod);
    }

    if (message.quorum !== "") {
      writer.uint32(18).string(message.quorum);
    }

    if (message.threshold !== "") {
      writer.uint32(26).string(message.threshold);
    }

    if (message.allowEndEarly === true) {
      writer.uint32(32).bool(message.allowEndEarly);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VotingRules {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVotingRules();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.votingPeriod = reader.uint32();
          break;

        case 2:
          message.quorum = reader.string();
          break;

        case 3:
          message.threshold = reader.string();
          break;

        case 4:
          message.allowEndEarly = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): VotingRules {
    return {
      votingPeriod: isSet(object.votingPeriod) ? Number(object.votingPeriod) : 0,
      quorum: isSet(object.quorum) ? String(object.quorum) : "",
      threshold: isSet(object.threshold) ? String(object.threshold) : "",
      allowEndEarly: isSet(object.allowEndEarly) ? Boolean(object.allowEndEarly) : false
    };
  },

  toJSON(message: VotingRules): unknown {
    const obj: any = {};
    message.votingPeriod !== undefined && (obj.votingPeriod = Math.round(message.votingPeriod));
    message.quorum !== undefined && (obj.quorum = message.quorum);
    message.threshold !== undefined && (obj.threshold = message.threshold);
    message.allowEndEarly !== undefined && (obj.allowEndEarly = message.allowEndEarly);
    return obj;
  },

  fromPartial(object: DeepPartial<VotingRules>): VotingRules {
    const message = createBaseVotingRules();
    message.votingPeriod = object.votingPeriod ?? 0;
    message.quorum = object.quorum ?? "";
    message.threshold = object.threshold ?? "";
    message.allowEndEarly = object.allowEndEarly ?? false;
    return message;
  }

};

function createBaseArbiterPoolContractConfig(): ArbiterPoolContractConfig {
  return {
    name: "",
    escrowAmount: undefined,
    votingRules: undefined,
    denyListContractAddress: "",
    disputeCost: undefined,
    waitingPeriod: undefined
  };
}

export const ArbiterPoolContractConfig = {
  encode(message: ArbiterPoolContractConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.escrowAmount !== undefined) {
      Coin.encode(message.escrowAmount, writer.uint32(18).fork()).ldelim();
    }

    if (message.votingRules !== undefined) {
      VotingRules.encode(message.votingRules, writer.uint32(26).fork()).ldelim();
    }

    if (message.denyListContractAddress !== "") {
      writer.uint32(34).string(message.denyListContractAddress);
    }

    if (message.disputeCost !== undefined) {
      Coin.encode(message.disputeCost, writer.uint32(42).fork()).ldelim();
    }

    if (message.waitingPeriod !== undefined) {
      Duration.encode(toDuration(message.waitingPeriod), writer.uint32(50).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ArbiterPoolContractConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArbiterPoolContractConfig();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.escrowAmount = Coin.decode(reader, reader.uint32());
          break;

        case 3:
          message.votingRules = VotingRules.decode(reader, reader.uint32());
          break;

        case 4:
          message.denyListContractAddress = reader.string();
          break;

        case 5:
          message.disputeCost = Coin.decode(reader, reader.uint32());
          break;

        case 6:
          message.waitingPeriod = fromDuration(Duration.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ArbiterPoolContractConfig {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      escrowAmount: isSet(object.escrowAmount) ? Coin.fromJSON(object.escrowAmount) : undefined,
      votingRules: isSet(object.votingRules) ? VotingRules.fromJSON(object.votingRules) : undefined,
      denyListContractAddress: isSet(object.denyListContractAddress) ? String(object.denyListContractAddress) : "",
      disputeCost: isSet(object.disputeCost) ? Coin.fromJSON(object.disputeCost) : undefined,
      waitingPeriod: isSet(object.waitingPeriod) ? String(object.waitingPeriod) : undefined
    };
  },

  toJSON(message: ArbiterPoolContractConfig): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.escrowAmount !== undefined && (obj.escrowAmount = message.escrowAmount ? Coin.toJSON(message.escrowAmount) : undefined);
    message.votingRules !== undefined && (obj.votingRules = message.votingRules ? VotingRules.toJSON(message.votingRules) : undefined);
    message.denyListContractAddress !== undefined && (obj.denyListContractAddress = message.denyListContractAddress);
    message.disputeCost !== undefined && (obj.disputeCost = message.disputeCost ? Coin.toJSON(message.disputeCost) : undefined);
    message.waitingPeriod !== undefined && (obj.waitingPeriod = message.waitingPeriod);
    return obj;
  },

  fromPartial(object: DeepPartial<ArbiterPoolContractConfig>): ArbiterPoolContractConfig {
    const message = createBaseArbiterPoolContractConfig();
    message.name = object.name ?? "";
    message.escrowAmount = object.escrowAmount !== undefined && object.escrowAmount !== null ? Coin.fromPartial(object.escrowAmount) : undefined;
    message.votingRules = object.votingRules !== undefined && object.votingRules !== null ? VotingRules.fromPartial(object.votingRules) : undefined;
    message.denyListContractAddress = object.denyListContractAddress ?? "";
    message.disputeCost = object.disputeCost !== undefined && object.disputeCost !== null ? Coin.fromPartial(object.disputeCost) : undefined;
    message.waitingPeriod = object.waitingPeriod ?? undefined;
    return message;
  }

};