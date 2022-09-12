import * as _709 from "../tgrade/confio/globalfee/v1beta1/genesis";
import * as _710 from "../tgrade/confio/globalfee/v1beta1/query";
import * as _711 from "../tgrade/confio/poe/v1beta1/genesis";
import * as _712 from "../tgrade/confio/poe/v1beta1/poe";
import * as _713 from "../tgrade/confio/poe/v1beta1/query";
import * as _714 from "../tgrade/confio/poe/v1beta1/tx";
import * as _715 from "../tgrade/confio/twasm/v1beta1/contract_extension";
import * as _716 from "../tgrade/confio/twasm/v1beta1/genesis";
import * as _717 from "../tgrade/confio/twasm/v1beta1/proposal";
import * as _718 from "../tgrade/confio/twasm/v1beta1/query";
export declare namespace confio {
    namespace globalfee {
        const v1beta1: {
            QueryMinimumGasPricesRequest: {
                encode(_: _710.QueryMinimumGasPricesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _710.QueryMinimumGasPricesRequest;
                fromJSON(_: any): _710.QueryMinimumGasPricesRequest;
                toJSON(_: _710.QueryMinimumGasPricesRequest): unknown;
                fromPartial(_: {}): _710.QueryMinimumGasPricesRequest;
            };
            QueryMinimumGasPricesResponse: {
                encode(message: _710.QueryMinimumGasPricesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _710.QueryMinimumGasPricesResponse;
                fromJSON(object: any): _710.QueryMinimumGasPricesResponse;
                toJSON(message: _710.QueryMinimumGasPricesResponse): unknown;
                fromPartial(object: {
                    minimumGasPrices?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _710.QueryMinimumGasPricesResponse;
            };
            GenesisState: {
                encode(message: _709.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _709.GenesisState;
                fromJSON(object: any): _709.GenesisState;
                toJSON(message: _709.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        minimumGasPrices?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _709.GenesisState;
            };
            Params: {
                encode(message: _709.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _709.Params;
                fromJSON(object: any): _709.Params;
                toJSON(message: _709.Params): unknown;
                fromPartial(object: {
                    minimumGasPrices?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _709.Params;
            };
        };
    }
    namespace poe {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _714.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateValidator(value: _714.MsgUpdateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _714.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _714.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _714.MsgCreateValidator): {
                        typeUrl: string;
                        value: _714.MsgCreateValidator;
                    };
                    updateValidator(value: _714.MsgUpdateValidator): {
                        typeUrl: string;
                        value: _714.MsgUpdateValidator;
                    };
                    delegate(value: _714.MsgDelegate): {
                        typeUrl: string;
                        value: _714.MsgDelegate;
                    };
                    undelegate(value: _714.MsgUndelegate): {
                        typeUrl: string;
                        value: _714.MsgUndelegate;
                    };
                };
                toJSON: {
                    createValidator(value: _714.MsgCreateValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateValidator(value: _714.MsgUpdateValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    delegate(value: _714.MsgDelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    undelegate(value: _714.MsgUndelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _714.MsgCreateValidator;
                    };
                    updateValidator(value: any): {
                        typeUrl: string;
                        value: _714.MsgUpdateValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _714.MsgDelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _714.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _714.MsgCreateValidator): {
                        typeUrl: string;
                        value: _714.MsgCreateValidator;
                    };
                    updateValidator(value: _714.MsgUpdateValidator): {
                        typeUrl: string;
                        value: _714.MsgUpdateValidator;
                    };
                    delegate(value: _714.MsgDelegate): {
                        typeUrl: string;
                        value: _714.MsgDelegate;
                    };
                    undelegate(value: _714.MsgUndelegate): {
                        typeUrl: string;
                        value: _714.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/confio.poe.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, operatorAddress, pubkey, amount, vestingAmount }: _714.MsgCreateValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        operator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        amount: {
                            denom: string;
                            amount: string;
                        };
                        vesting_amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ description, operator_address, pubkey, amount, vesting_amount }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        operator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        amount: {
                            denom: string;
                            amount: string;
                        };
                        vesting_amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _714.MsgCreateValidator;
                };
                "/confio.poe.v1beta1.MsgUpdateValidator": {
                    aminoType: string;
                    toAmino: ({ description, operatorAddress }: _714.MsgUpdateValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        operator_address: string;
                    };
                    fromAmino: ({ description, operator_address }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        operator_address: string;
                    }) => _714.MsgUpdateValidator;
                };
                "/confio.poe.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ operatorAddress, amount, vestingAmount }: _714.MsgDelegate) => {
                        operator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                        vesting_amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ operator_address, amount, vesting_amount }: {
                        operator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                        vesting_amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _714.MsgDelegate;
                };
                "/confio.poe.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ operatorAddress, amount }: _714.MsgUndelegate) => {
                        operator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ operator_address, amount }: {
                        operator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _714.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                encode(message: _714.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _714.MsgCreateValidator;
                fromJSON(object: any): _714.MsgCreateValidator;
                toJSON(message: _714.MsgCreateValidator): unknown;
                fromPartial(object: {
                    description?: {
                        moniker?: string;
                        identity?: string;
                        website?: string;
                        securityContact?: string;
                        details?: string;
                    };
                    operatorAddress?: string;
                    pubkey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                    vestingAmount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _714.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _714.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _714.MsgCreateValidatorResponse;
                fromJSON(_: any): _714.MsgCreateValidatorResponse;
                toJSON(_: _714.MsgCreateValidatorResponse): unknown;
                fromPartial(_: {}): _714.MsgCreateValidatorResponse;
            };
            MsgUpdateValidator: {
                encode(message: _714.MsgUpdateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _714.MsgUpdateValidator;
                fromJSON(object: any): _714.MsgUpdateValidator;
                toJSON(message: _714.MsgUpdateValidator): unknown;
                fromPartial(object: {
                    description?: {
                        moniker?: string;
                        identity?: string;
                        website?: string;
                        securityContact?: string;
                        details?: string;
                    };
                    operatorAddress?: string;
                }): _714.MsgUpdateValidator;
            };
            MsgUpdateValidatorResponse: {
                encode(_: _714.MsgUpdateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _714.MsgUpdateValidatorResponse;
                fromJSON(_: any): _714.MsgUpdateValidatorResponse;
                toJSON(_: _714.MsgUpdateValidatorResponse): unknown;
                fromPartial(_: {}): _714.MsgUpdateValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _714.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _714.MsgDelegate;
                fromJSON(object: any): _714.MsgDelegate;
                toJSON(message: _714.MsgDelegate): unknown;
                fromPartial(object: {
                    operatorAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                    vestingAmount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _714.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _714.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _714.MsgDelegateResponse;
                fromJSON(_: any): _714.MsgDelegateResponse;
                toJSON(_: _714.MsgDelegateResponse): unknown;
                fromPartial(_: {}): _714.MsgDelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _714.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _714.MsgUndelegate;
                fromJSON(object: any): _714.MsgUndelegate;
                toJSON(message: _714.MsgUndelegate): unknown;
                fromPartial(object: {
                    operatorAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _714.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _714.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _714.MsgUndelegateResponse;
                fromJSON(object: any): _714.MsgUndelegateResponse;
                toJSON(message: _714.MsgUndelegateResponse): unknown;
                fromPartial(object: {
                    completionTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _714.MsgUndelegateResponse;
            };
            QueryContractAddressRequest: {
                encode(message: _713.QueryContractAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _713.QueryContractAddressRequest;
                fromJSON(object: any): _713.QueryContractAddressRequest;
                toJSON(message: _713.QueryContractAddressRequest): unknown;
                fromPartial(object: {
                    contractType?: _712.PoEContractType;
                }): _713.QueryContractAddressRequest;
            };
            QueryContractAddressResponse: {
                encode(message: _713.QueryContractAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _713.QueryContractAddressResponse;
                fromJSON(object: any): _713.QueryContractAddressResponse;
                toJSON(message: _713.QueryContractAddressResponse): unknown;
                fromPartial(object: {
                    address?: string;
                }): _713.QueryContractAddressResponse;
            };
            QueryUnbondingPeriodRequest: {
                encode(_: _713.QueryUnbondingPeriodRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _713.QueryUnbondingPeriodRequest;
                fromJSON(_: any): _713.QueryUnbondingPeriodRequest;
                toJSON(_: _713.QueryUnbondingPeriodRequest): unknown;
                fromPartial(_: {}): _713.QueryUnbondingPeriodRequest;
            };
            QueryUnbondingPeriodResponse: {
                encode(message: _713.QueryUnbondingPeriodResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _713.QueryUnbondingPeriodResponse;
                fromJSON(object: any): _713.QueryUnbondingPeriodResponse;
                toJSON(message: _713.QueryUnbondingPeriodResponse): unknown;
                fromPartial(object: {
                    time?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _713.QueryUnbondingPeriodResponse;
            };
            QueryValidatorDelegationRequest: {
                encode(message: _713.QueryValidatorDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _713.QueryValidatorDelegationRequest;
                fromJSON(object: any): _713.QueryValidatorDelegationRequest;
                toJSON(message: _713.QueryValidatorDelegationRequest): unknown;
                fromPartial(object: {
                    validatorAddr?: string;
                }): _713.QueryValidatorDelegationRequest;
            };
            QueryValidatorDelegationResponse: {
                encode(message: _713.QueryValidatorDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _713.QueryValidatorDelegationResponse;
                fromJSON(object: any): _713.QueryValidatorDelegationResponse;
                toJSON(message: _713.QueryValidatorDelegationResponse): unknown;
                fromPartial(object: {
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _713.QueryValidatorDelegationResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _713.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _713.QueryValidatorUnbondingDelegationsRequest;
                fromJSON(object: any): _713.QueryValidatorUnbondingDelegationsRequest;
                toJSON(message: _713.QueryValidatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: {
                    validatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _713.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _713.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _713.QueryValidatorUnbondingDelegationsResponse;
                fromJSON(object: any): _713.QueryValidatorUnbondingDelegationsResponse;
                toJSON(message: _713.QueryValidatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: {
                    entries?: {
                        creationHeight?: any;
                        completionTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        initialBalance?: string;
                        balance?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _713.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryValidatorOutstandingRewardRequest: {
                encode(message: _713.QueryValidatorOutstandingRewardRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _713.QueryValidatorOutstandingRewardRequest;
                fromJSON(object: any): _713.QueryValidatorOutstandingRewardRequest;
                toJSON(message: _713.QueryValidatorOutstandingRewardRequest): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _713.QueryValidatorOutstandingRewardRequest;
            };
            QueryValidatorOutstandingRewardResponse: {
                encode(message: _713.QueryValidatorOutstandingRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _713.QueryValidatorOutstandingRewardResponse;
                fromJSON(object: any): _713.QueryValidatorOutstandingRewardResponse;
                toJSON(message: _713.QueryValidatorOutstandingRewardResponse): unknown;
                fromPartial(object: {
                    reward?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _713.QueryValidatorOutstandingRewardResponse;
            };
            QueryValidatorEngagementRewardRequest: {
                encode(message: _713.QueryValidatorEngagementRewardRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _713.QueryValidatorEngagementRewardRequest;
                fromJSON(object: any): _713.QueryValidatorEngagementRewardRequest;
                toJSON(message: _713.QueryValidatorEngagementRewardRequest): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _713.QueryValidatorEngagementRewardRequest;
            };
            QueryValidatorEngagementRewardResponse: {
                encode(message: _713.QueryValidatorEngagementRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _713.QueryValidatorEngagementRewardResponse;
                fromJSON(object: any): _713.QueryValidatorEngagementRewardResponse;
                toJSON(message: _713.QueryValidatorEngagementRewardResponse): unknown;
                fromPartial(object: {
                    reward?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _713.QueryValidatorEngagementRewardResponse;
            };
            poEContractTypeFromJSON(object: any): _712.PoEContractType;
            poEContractTypeToJSON(object: _712.PoEContractType): string;
            PoEContractType: typeof _712.PoEContractType;
            Params: {
                encode(message: _712.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _712.Params;
                fromJSON(object: any): _712.Params;
                toJSON(message: _712.Params): unknown;
                fromPartial(object: {
                    historicalEntries?: number;
                    initialValEngagementPoints?: any;
                    minDelegationAmounts?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _712.Params;
            };
            GenesisState: {
                encode(message: _711.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _711.GenesisState;
                fromJSON(object: any): _711.GenesisState;
                toJSON(message: _711.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        historicalEntries?: number;
                        initialValEngagementPoints?: any;
                        minDelegationAmounts?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                    seedContracts?: {
                        genTxs?: Uint8Array[];
                        bootstrapAccountAddress?: string;
                        engagement?: {
                            address?: string;
                            points?: any;
                        }[];
                        stakeContractConfig?: {
                            minBond?: any;
                            tokensPerPoint?: any;
                            unbondingPeriod?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            claimAutoreturnLimit?: number;
                        };
                        valsetContractConfig?: {
                            minPoints?: any;
                            maxValidators?: number;
                            epochLength?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            epochReward?: {
                                denom?: string;
                                amount?: string;
                            };
                            scaling?: number;
                            feePercentage?: string;
                            communityPoolRewardRatio?: string;
                            engagementRewardRatio?: string;
                            validatorRewardRatio?: string;
                            autoUnjail?: boolean;
                            doubleSignSlashRatio?: string;
                            verifyValidators?: boolean;
                            offlineJailDuration?: {
                                seconds?: any;
                                nanos?: number;
                            };
                        };
                        engagementContractConfig?: {
                            halflife?: {
                                seconds?: any;
                                nanos?: number;
                            };
                        };
                        bondDenom?: string;
                        oversightCommitteeContractConfig?: {
                            name?: string;
                            escrowAmount?: {
                                denom?: string;
                                amount?: string;
                            };
                            votingRules?: {
                                votingPeriod?: number;
                                quorum?: string;
                                threshold?: string;
                                allowEndEarly?: boolean;
                            };
                            denyListContractAddress?: string;
                        };
                        communityPoolContractConfig?: {
                            votingRules?: {
                                votingPeriod?: number;
                                quorum?: string;
                                threshold?: string;
                                allowEndEarly?: boolean;
                            };
                        };
                        validatorVotingContractConfig?: {
                            votingRules?: {
                                votingPeriod?: number;
                                quorum?: string;
                                threshold?: string;
                                allowEndEarly?: boolean;
                            };
                        };
                        oversightCommunityMembers?: string[];
                        arbiterPoolMembers?: string[];
                        arbiterPoolContractConfig?: {
                            name?: string;
                            escrowAmount?: {
                                denom?: string;
                                amount?: string;
                            };
                            votingRules?: {
                                votingPeriod?: number;
                                quorum?: string;
                                threshold?: string;
                                allowEndEarly?: boolean;
                            };
                            denyListContractAddress?: string;
                            disputeCost?: {
                                denom?: string;
                                amount?: string;
                            };
                            waitingPeriod?: {
                                seconds?: any;
                                nanos?: number;
                            };
                        };
                        mixerContractConfig?: {
                            sigmoid?: {
                                maxPoints?: any;
                                p?: string;
                                s?: string;
                            };
                        };
                    };
                    importDump?: {
                        contracts?: {
                            contractType?: _712.PoEContractType;
                            address?: string;
                        }[];
                    };
                }): _711.GenesisState;
            };
            ImportDump: {
                encode(message: _711.ImportDump, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _711.ImportDump;
                fromJSON(object: any): _711.ImportDump;
                toJSON(message: _711.ImportDump): unknown;
                fromPartial(object: {
                    contracts?: {
                        contractType?: _712.PoEContractType;
                        address?: string;
                    }[];
                }): _711.ImportDump;
            };
            SeedContracts: {
                encode(message: _711.SeedContracts, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _711.SeedContracts;
                fromJSON(object: any): _711.SeedContracts;
                toJSON(message: _711.SeedContracts): unknown;
                fromPartial(object: {
                    genTxs?: Uint8Array[];
                    bootstrapAccountAddress?: string;
                    engagement?: {
                        address?: string;
                        points?: any;
                    }[];
                    stakeContractConfig?: {
                        minBond?: any;
                        tokensPerPoint?: any;
                        unbondingPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        claimAutoreturnLimit?: number;
                    };
                    valsetContractConfig?: {
                        minPoints?: any;
                        maxValidators?: number;
                        epochLength?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        epochReward?: {
                            denom?: string;
                            amount?: string;
                        };
                        scaling?: number;
                        feePercentage?: string;
                        communityPoolRewardRatio?: string;
                        engagementRewardRatio?: string;
                        validatorRewardRatio?: string;
                        autoUnjail?: boolean;
                        doubleSignSlashRatio?: string;
                        verifyValidators?: boolean;
                        offlineJailDuration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    engagementContractConfig?: {
                        halflife?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    bondDenom?: string;
                    oversightCommitteeContractConfig?: {
                        name?: string;
                        escrowAmount?: {
                            denom?: string;
                            amount?: string;
                        };
                        votingRules?: {
                            votingPeriod?: number;
                            quorum?: string;
                            threshold?: string;
                            allowEndEarly?: boolean;
                        };
                        denyListContractAddress?: string;
                    };
                    communityPoolContractConfig?: {
                        votingRules?: {
                            votingPeriod?: number;
                            quorum?: string;
                            threshold?: string;
                            allowEndEarly?: boolean;
                        };
                    };
                    validatorVotingContractConfig?: {
                        votingRules?: {
                            votingPeriod?: number;
                            quorum?: string;
                            threshold?: string;
                            allowEndEarly?: boolean;
                        };
                    };
                    oversightCommunityMembers?: string[];
                    arbiterPoolMembers?: string[];
                    arbiterPoolContractConfig?: {
                        name?: string;
                        escrowAmount?: {
                            denom?: string;
                            amount?: string;
                        };
                        votingRules?: {
                            votingPeriod?: number;
                            quorum?: string;
                            threshold?: string;
                            allowEndEarly?: boolean;
                        };
                        denyListContractAddress?: string;
                        disputeCost?: {
                            denom?: string;
                            amount?: string;
                        };
                        waitingPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    mixerContractConfig?: {
                        sigmoid?: {
                            maxPoints?: any;
                            p?: string;
                            s?: string;
                        };
                    };
                }): _711.SeedContracts;
            };
            MixerContractConfig: {
                encode(message: _711.MixerContractConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _711.MixerContractConfig;
                fromJSON(object: any): _711.MixerContractConfig;
                toJSON(message: _711.MixerContractConfig): unknown;
                fromPartial(object: {
                    sigmoid?: {
                        maxPoints?: any;
                        p?: string;
                        s?: string;
                    };
                }): _711.MixerContractConfig;
            };
            MixerContractConfig_Sigmoid: {
                encode(message: _711.MixerContractConfig_Sigmoid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _711.MixerContractConfig_Sigmoid;
                fromJSON(object: any): _711.MixerContractConfig_Sigmoid;
                toJSON(message: _711.MixerContractConfig_Sigmoid): unknown;
                fromPartial(object: {
                    maxPoints?: any;
                    p?: string;
                    s?: string;
                }): _711.MixerContractConfig_Sigmoid;
            };
            StakeContractConfig: {
                encode(message: _711.StakeContractConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _711.StakeContractConfig;
                fromJSON(object: any): _711.StakeContractConfig;
                toJSON(message: _711.StakeContractConfig): unknown;
                fromPartial(object: {
                    minBond?: any;
                    tokensPerPoint?: any;
                    unbondingPeriod?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    claimAutoreturnLimit?: number;
                }): _711.StakeContractConfig;
            };
            ValsetContractConfig: {
                encode(message: _711.ValsetContractConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _711.ValsetContractConfig;
                fromJSON(object: any): _711.ValsetContractConfig;
                toJSON(message: _711.ValsetContractConfig): unknown;
                fromPartial(object: {
                    minPoints?: any;
                    maxValidators?: number;
                    epochLength?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    epochReward?: {
                        denom?: string;
                        amount?: string;
                    };
                    scaling?: number;
                    feePercentage?: string;
                    communityPoolRewardRatio?: string;
                    engagementRewardRatio?: string;
                    validatorRewardRatio?: string;
                    autoUnjail?: boolean;
                    doubleSignSlashRatio?: string;
                    verifyValidators?: boolean;
                    offlineJailDuration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _711.ValsetContractConfig;
            };
            EngagementContractConfig: {
                encode(message: _711.EngagementContractConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _711.EngagementContractConfig;
                fromJSON(object: any): _711.EngagementContractConfig;
                toJSON(message: _711.EngagementContractConfig): unknown;
                fromPartial(object: {
                    halflife?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _711.EngagementContractConfig;
            };
            OversightCommitteeContractConfig: {
                encode(message: _711.OversightCommitteeContractConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _711.OversightCommitteeContractConfig;
                fromJSON(object: any): _711.OversightCommitteeContractConfig;
                toJSON(message: _711.OversightCommitteeContractConfig): unknown;
                fromPartial(object: {
                    name?: string;
                    escrowAmount?: {
                        denom?: string;
                        amount?: string;
                    };
                    votingRules?: {
                        votingPeriod?: number;
                        quorum?: string;
                        threshold?: string;
                        allowEndEarly?: boolean;
                    };
                    denyListContractAddress?: string;
                }): _711.OversightCommitteeContractConfig;
            };
            CommunityPoolContractConfig: {
                encode(message: _711.CommunityPoolContractConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _711.CommunityPoolContractConfig;
                fromJSON(object: any): _711.CommunityPoolContractConfig;
                toJSON(message: _711.CommunityPoolContractConfig): unknown;
                fromPartial(object: {
                    votingRules?: {
                        votingPeriod?: number;
                        quorum?: string;
                        threshold?: string;
                        allowEndEarly?: boolean;
                    };
                }): _711.CommunityPoolContractConfig;
            };
            ValidatorVotingContractConfig: {
                encode(message: _711.ValidatorVotingContractConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _711.ValidatorVotingContractConfig;
                fromJSON(object: any): _711.ValidatorVotingContractConfig;
                toJSON(message: _711.ValidatorVotingContractConfig): unknown;
                fromPartial(object: {
                    votingRules?: {
                        votingPeriod?: number;
                        quorum?: string;
                        threshold?: string;
                        allowEndEarly?: boolean;
                    };
                }): _711.ValidatorVotingContractConfig;
            };
            PoEContract: {
                encode(message: _711.PoEContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _711.PoEContract;
                fromJSON(object: any): _711.PoEContract;
                toJSON(message: _711.PoEContract): unknown;
                fromPartial(object: {
                    contractType?: _712.PoEContractType;
                    address?: string;
                }): _711.PoEContract;
            };
            TG4Member: {
                encode(message: _711.TG4Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _711.TG4Member;
                fromJSON(object: any): _711.TG4Member;
                toJSON(message: _711.TG4Member): unknown;
                fromPartial(object: {
                    address?: string;
                    points?: any;
                }): _711.TG4Member;
            };
            VotingRules: {
                encode(message: _711.VotingRules, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _711.VotingRules;
                fromJSON(object: any): _711.VotingRules;
                toJSON(message: _711.VotingRules): unknown;
                fromPartial(object: {
                    votingPeriod?: number;
                    quorum?: string;
                    threshold?: string;
                    allowEndEarly?: boolean;
                }): _711.VotingRules;
            };
            ArbiterPoolContractConfig: {
                encode(message: _711.ArbiterPoolContractConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _711.ArbiterPoolContractConfig;
                fromJSON(object: any): _711.ArbiterPoolContractConfig;
                toJSON(message: _711.ArbiterPoolContractConfig): unknown;
                fromPartial(object: {
                    name?: string;
                    escrowAmount?: {
                        denom?: string;
                        amount?: string;
                    };
                    votingRules?: {
                        votingPeriod?: number;
                        quorum?: string;
                        threshold?: string;
                        allowEndEarly?: boolean;
                    };
                    denyListContractAddress?: string;
                    disputeCost?: {
                        denom?: string;
                        amount?: string;
                    };
                    waitingPeriod?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _711.ArbiterPoolContractConfig;
            };
        };
    }
    namespace twasm {
        const v1beta1: {
            QueryPrivilegedContractsRequest: {
                encode(_: _718.QueryPrivilegedContractsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _718.QueryPrivilegedContractsRequest;
                fromJSON(_: any): _718.QueryPrivilegedContractsRequest;
                toJSON(_: _718.QueryPrivilegedContractsRequest): unknown;
                fromPartial(_: {}): _718.QueryPrivilegedContractsRequest;
            };
            QueryPrivilegedContractsResponse: {
                encode(message: _718.QueryPrivilegedContractsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _718.QueryPrivilegedContractsResponse;
                fromJSON(object: any): _718.QueryPrivilegedContractsResponse;
                toJSON(message: _718.QueryPrivilegedContractsResponse): unknown;
                fromPartial(object: {
                    contracts?: string[];
                }): _718.QueryPrivilegedContractsResponse;
            };
            QueryContractsByPrivilegeTypeRequest: {
                encode(message: _718.QueryContractsByPrivilegeTypeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _718.QueryContractsByPrivilegeTypeRequest;
                fromJSON(object: any): _718.QueryContractsByPrivilegeTypeRequest;
                toJSON(message: _718.QueryContractsByPrivilegeTypeRequest): unknown;
                fromPartial(object: {
                    privilegeType?: string;
                }): _718.QueryContractsByPrivilegeTypeRequest;
            };
            QueryContractsByPrivilegeTypeResponse: {
                encode(message: _718.QueryContractsByPrivilegeTypeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _718.QueryContractsByPrivilegeTypeResponse;
                fromJSON(object: any): _718.QueryContractsByPrivilegeTypeResponse;
                toJSON(message: _718.QueryContractsByPrivilegeTypeResponse): unknown;
                fromPartial(object: {
                    contracts?: string[];
                }): _718.QueryContractsByPrivilegeTypeResponse;
            };
            PromoteToPrivilegedContractProposal: {
                encode(message: _717.PromoteToPrivilegedContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _717.PromoteToPrivilegedContractProposal;
                fromJSON(object: any): _717.PromoteToPrivilegedContractProposal;
                toJSON(message: _717.PromoteToPrivilegedContractProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                }): _717.PromoteToPrivilegedContractProposal;
            };
            DemotePrivilegedContractProposal: {
                encode(message: _717.DemotePrivilegedContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _717.DemotePrivilegedContractProposal;
                fromJSON(object: any): _717.DemotePrivilegedContractProposal;
                toJSON(message: _717.DemotePrivilegedContractProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                }): _717.DemotePrivilegedContractProposal;
            };
            GenesisState: {
                encode(message: _716.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _716.GenesisState;
                fromJSON(object: any): _716.GenesisState;
                toJSON(message: _716.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        codeUploadAccess?: {
                            permission?: import("../cosmwasm/wasm/v1/types").AccessType;
                            address?: string;
                        };
                        instantiateDefaultPermission?: import("../cosmwasm/wasm/v1/types").AccessType;
                        maxWasmCodeSize?: any;
                    };
                    codes?: {
                        codeId?: any;
                        codeInfo?: {
                            codeHash?: Uint8Array;
                            creator?: string;
                            instantiateConfig?: {
                                permission?: import("../cosmwasm/wasm/v1/types").AccessType;
                                address?: string;
                            };
                        };
                        codeBytes?: Uint8Array;
                        pinned?: boolean;
                    }[];
                    contracts?: {
                        contractAddress?: string;
                        contractInfo?: {
                            codeId?: any;
                            creator?: string;
                            admin?: string;
                            label?: string;
                            created?: {
                                blockHeight?: any;
                                txIndex?: any;
                            };
                            ibcPortId?: string;
                            extension?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                        kvModel?: {
                            models?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                            }[];
                        };
                        customModel?: {
                            msg?: Uint8Array;
                        };
                    }[];
                    sequences?: {
                        idKey?: Uint8Array;
                        value?: any;
                    }[];
                    genMsgs?: {
                        storeCode?: {
                            sender?: string;
                            wasmByteCode?: Uint8Array;
                            instantiatePermission?: {
                                permission?: import("../cosmwasm/wasm/v1/types").AccessType;
                                address?: string;
                            };
                        };
                        instantiateContract?: {
                            sender?: string;
                            admin?: string;
                            codeId?: any;
                            label?: string;
                            msg?: Uint8Array;
                            funds?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                        executeContract?: {
                            sender?: string;
                            contract?: string;
                            msg?: Uint8Array;
                            funds?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                    }[];
                    privilegedContractAddresses?: string[];
                    pinnedCodeIds?: any[];
                }): _716.GenesisState;
            };
            Contract: {
                encode(message: _716.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _716.Contract;
                fromJSON(object: any): _716.Contract;
                toJSON(message: _716.Contract): unknown;
                fromPartial(object: {
                    contractAddress?: string;
                    contractInfo?: {
                        codeId?: any;
                        creator?: string;
                        admin?: string;
                        label?: string;
                        created?: {
                            blockHeight?: any;
                            txIndex?: any;
                        };
                        ibcPortId?: string;
                        extension?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                    kvModel?: {
                        models?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[];
                    };
                    customModel?: {
                        msg?: Uint8Array;
                    };
                }): _716.Contract;
            };
            KVModel: {
                encode(message: _716.KVModel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _716.KVModel;
                fromJSON(object: any): _716.KVModel;
                toJSON(message: _716.KVModel): unknown;
                fromPartial(object: {
                    models?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }[];
                }): _716.KVModel;
            };
            CustomModel: {
                encode(message: _716.CustomModel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _716.CustomModel;
                fromJSON(object: any): _716.CustomModel;
                toJSON(message: _716.CustomModel): unknown;
                fromPartial(object: {
                    msg?: Uint8Array;
                }): _716.CustomModel;
            };
            TgradeContractDetails: {
                encode(message: _715.TgradeContractDetails, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _715.TgradeContractDetails;
                fromJSON(object: any): _715.TgradeContractDetails;
                toJSON(message: _715.TgradeContractDetails): unknown;
                fromPartial(object: {
                    registeredPrivileges?: {
                        position?: number;
                        privilegeType?: string;
                    }[];
                }): _715.TgradeContractDetails;
            };
            RegisteredPrivilege: {
                encode(message: _715.RegisteredPrivilege, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _715.RegisteredPrivilege;
                fromJSON(object: any): _715.RegisteredPrivilege;
                toJSON(message: _715.RegisteredPrivilege): unknown;
                fromPartial(object: {
                    position?: number;
                    privilegeType?: string;
                }): _715.RegisteredPrivilege;
            };
        };
    }
}
