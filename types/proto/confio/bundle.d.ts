import * as _777 from "../tgrade/confio/globalfee/v1beta1/genesis";
import * as _778 from "../tgrade/confio/globalfee/v1beta1/query";
import * as _779 from "../tgrade/confio/poe/v1beta1/genesis";
import * as _780 from "../tgrade/confio/poe/v1beta1/poe";
import * as _781 from "../tgrade/confio/poe/v1beta1/query";
import * as _782 from "../tgrade/confio/poe/v1beta1/tx";
import * as _783 from "../tgrade/confio/twasm/v1beta1/contract_extension";
import * as _784 from "../tgrade/confio/twasm/v1beta1/genesis";
import * as _785 from "../tgrade/confio/twasm/v1beta1/proposal";
import * as _786 from "../tgrade/confio/twasm/v1beta1/query";
export declare namespace confio {
    namespace globalfee {
        const v1beta1: {
            QueryMinimumGasPricesRequest: {
                encode(_: _778.QueryMinimumGasPricesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _778.QueryMinimumGasPricesRequest;
                fromJSON(_: any): _778.QueryMinimumGasPricesRequest;
                toJSON(_: _778.QueryMinimumGasPricesRequest): unknown;
                fromPartial(_: {}): _778.QueryMinimumGasPricesRequest;
            };
            QueryMinimumGasPricesResponse: {
                encode(message: _778.QueryMinimumGasPricesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _778.QueryMinimumGasPricesResponse;
                fromJSON(object: any): _778.QueryMinimumGasPricesResponse;
                toJSON(message: _778.QueryMinimumGasPricesResponse): unknown;
                fromPartial(object: {
                    minimumGasPrices?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _778.QueryMinimumGasPricesResponse;
            };
            GenesisState: {
                encode(message: _777.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _777.GenesisState;
                fromJSON(object: any): _777.GenesisState;
                toJSON(message: _777.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        minimumGasPrices?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _777.GenesisState;
            };
            Params: {
                encode(message: _777.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _777.Params;
                fromJSON(object: any): _777.Params;
                toJSON(message: _777.Params): unknown;
                fromPartial(object: {
                    minimumGasPrices?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _777.Params;
            };
        };
    }
    namespace poe {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _782.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateValidator(value: _782.MsgUpdateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _782.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _782.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _782.MsgCreateValidator): {
                        typeUrl: string;
                        value: _782.MsgCreateValidator;
                    };
                    updateValidator(value: _782.MsgUpdateValidator): {
                        typeUrl: string;
                        value: _782.MsgUpdateValidator;
                    };
                    delegate(value: _782.MsgDelegate): {
                        typeUrl: string;
                        value: _782.MsgDelegate;
                    };
                    undelegate(value: _782.MsgUndelegate): {
                        typeUrl: string;
                        value: _782.MsgUndelegate;
                    };
                };
                toJSON: {
                    createValidator(value: _782.MsgCreateValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateValidator(value: _782.MsgUpdateValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    delegate(value: _782.MsgDelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    undelegate(value: _782.MsgUndelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _782.MsgCreateValidator;
                    };
                    updateValidator(value: any): {
                        typeUrl: string;
                        value: _782.MsgUpdateValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _782.MsgDelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _782.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _782.MsgCreateValidator): {
                        typeUrl: string;
                        value: _782.MsgCreateValidator;
                    };
                    updateValidator(value: _782.MsgUpdateValidator): {
                        typeUrl: string;
                        value: _782.MsgUpdateValidator;
                    };
                    delegate(value: _782.MsgDelegate): {
                        typeUrl: string;
                        value: _782.MsgDelegate;
                    };
                    undelegate(value: _782.MsgUndelegate): {
                        typeUrl: string;
                        value: _782.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/confio.poe.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, operatorAddress, pubkey, amount, vestingAmount }: _782.MsgCreateValidator) => {
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
                    }) => _782.MsgCreateValidator;
                };
                "/confio.poe.v1beta1.MsgUpdateValidator": {
                    aminoType: string;
                    toAmino: ({ description, operatorAddress }: _782.MsgUpdateValidator) => {
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
                    }) => _782.MsgUpdateValidator;
                };
                "/confio.poe.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ operatorAddress, amount, vestingAmount }: _782.MsgDelegate) => {
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
                    }) => _782.MsgDelegate;
                };
                "/confio.poe.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ operatorAddress, amount }: _782.MsgUndelegate) => {
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
                    }) => _782.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                encode(message: _782.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _782.MsgCreateValidator;
                fromJSON(object: any): _782.MsgCreateValidator;
                toJSON(message: _782.MsgCreateValidator): unknown;
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
                }): _782.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _782.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _782.MsgCreateValidatorResponse;
                fromJSON(_: any): _782.MsgCreateValidatorResponse;
                toJSON(_: _782.MsgCreateValidatorResponse): unknown;
                fromPartial(_: {}): _782.MsgCreateValidatorResponse;
            };
            MsgUpdateValidator: {
                encode(message: _782.MsgUpdateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _782.MsgUpdateValidator;
                fromJSON(object: any): _782.MsgUpdateValidator;
                toJSON(message: _782.MsgUpdateValidator): unknown;
                fromPartial(object: {
                    description?: {
                        moniker?: string;
                        identity?: string;
                        website?: string;
                        securityContact?: string;
                        details?: string;
                    };
                    operatorAddress?: string;
                }): _782.MsgUpdateValidator;
            };
            MsgUpdateValidatorResponse: {
                encode(_: _782.MsgUpdateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _782.MsgUpdateValidatorResponse;
                fromJSON(_: any): _782.MsgUpdateValidatorResponse;
                toJSON(_: _782.MsgUpdateValidatorResponse): unknown;
                fromPartial(_: {}): _782.MsgUpdateValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _782.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _782.MsgDelegate;
                fromJSON(object: any): _782.MsgDelegate;
                toJSON(message: _782.MsgDelegate): unknown;
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
                }): _782.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _782.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _782.MsgDelegateResponse;
                fromJSON(_: any): _782.MsgDelegateResponse;
                toJSON(_: _782.MsgDelegateResponse): unknown;
                fromPartial(_: {}): _782.MsgDelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _782.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _782.MsgUndelegate;
                fromJSON(object: any): _782.MsgUndelegate;
                toJSON(message: _782.MsgUndelegate): unknown;
                fromPartial(object: {
                    operatorAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _782.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _782.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _782.MsgUndelegateResponse;
                fromJSON(object: any): _782.MsgUndelegateResponse;
                toJSON(message: _782.MsgUndelegateResponse): unknown;
                fromPartial(object: {
                    completionTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _782.MsgUndelegateResponse;
            };
            QueryContractAddressRequest: {
                encode(message: _781.QueryContractAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _781.QueryContractAddressRequest;
                fromJSON(object: any): _781.QueryContractAddressRequest;
                toJSON(message: _781.QueryContractAddressRequest): unknown;
                fromPartial(object: {
                    contractType?: _780.PoEContractType;
                }): _781.QueryContractAddressRequest;
            };
            QueryContractAddressResponse: {
                encode(message: _781.QueryContractAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _781.QueryContractAddressResponse;
                fromJSON(object: any): _781.QueryContractAddressResponse;
                toJSON(message: _781.QueryContractAddressResponse): unknown;
                fromPartial(object: {
                    address?: string;
                }): _781.QueryContractAddressResponse;
            };
            QueryUnbondingPeriodRequest: {
                encode(_: _781.QueryUnbondingPeriodRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _781.QueryUnbondingPeriodRequest;
                fromJSON(_: any): _781.QueryUnbondingPeriodRequest;
                toJSON(_: _781.QueryUnbondingPeriodRequest): unknown;
                fromPartial(_: {}): _781.QueryUnbondingPeriodRequest;
            };
            QueryUnbondingPeriodResponse: {
                encode(message: _781.QueryUnbondingPeriodResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _781.QueryUnbondingPeriodResponse;
                fromJSON(object: any): _781.QueryUnbondingPeriodResponse;
                toJSON(message: _781.QueryUnbondingPeriodResponse): unknown;
                fromPartial(object: {
                    time?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _781.QueryUnbondingPeriodResponse;
            };
            QueryValidatorDelegationRequest: {
                encode(message: _781.QueryValidatorDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _781.QueryValidatorDelegationRequest;
                fromJSON(object: any): _781.QueryValidatorDelegationRequest;
                toJSON(message: _781.QueryValidatorDelegationRequest): unknown;
                fromPartial(object: {
                    validatorAddr?: string;
                }): _781.QueryValidatorDelegationRequest;
            };
            QueryValidatorDelegationResponse: {
                encode(message: _781.QueryValidatorDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _781.QueryValidatorDelegationResponse;
                fromJSON(object: any): _781.QueryValidatorDelegationResponse;
                toJSON(message: _781.QueryValidatorDelegationResponse): unknown;
                fromPartial(object: {
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _781.QueryValidatorDelegationResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _781.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _781.QueryValidatorUnbondingDelegationsRequest;
                fromJSON(object: any): _781.QueryValidatorUnbondingDelegationsRequest;
                toJSON(message: _781.QueryValidatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: {
                    validatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _781.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _781.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _781.QueryValidatorUnbondingDelegationsResponse;
                fromJSON(object: any): _781.QueryValidatorUnbondingDelegationsResponse;
                toJSON(message: _781.QueryValidatorUnbondingDelegationsResponse): unknown;
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
                }): _781.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryValidatorOutstandingRewardRequest: {
                encode(message: _781.QueryValidatorOutstandingRewardRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _781.QueryValidatorOutstandingRewardRequest;
                fromJSON(object: any): _781.QueryValidatorOutstandingRewardRequest;
                toJSON(message: _781.QueryValidatorOutstandingRewardRequest): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _781.QueryValidatorOutstandingRewardRequest;
            };
            QueryValidatorOutstandingRewardResponse: {
                encode(message: _781.QueryValidatorOutstandingRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _781.QueryValidatorOutstandingRewardResponse;
                fromJSON(object: any): _781.QueryValidatorOutstandingRewardResponse;
                toJSON(message: _781.QueryValidatorOutstandingRewardResponse): unknown;
                fromPartial(object: {
                    reward?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _781.QueryValidatorOutstandingRewardResponse;
            };
            QueryValidatorEngagementRewardRequest: {
                encode(message: _781.QueryValidatorEngagementRewardRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _781.QueryValidatorEngagementRewardRequest;
                fromJSON(object: any): _781.QueryValidatorEngagementRewardRequest;
                toJSON(message: _781.QueryValidatorEngagementRewardRequest): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _781.QueryValidatorEngagementRewardRequest;
            };
            QueryValidatorEngagementRewardResponse: {
                encode(message: _781.QueryValidatorEngagementRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _781.QueryValidatorEngagementRewardResponse;
                fromJSON(object: any): _781.QueryValidatorEngagementRewardResponse;
                toJSON(message: _781.QueryValidatorEngagementRewardResponse): unknown;
                fromPartial(object: {
                    reward?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _781.QueryValidatorEngagementRewardResponse;
            };
            poEContractTypeFromJSON(object: any): _780.PoEContractType;
            poEContractTypeToJSON(object: _780.PoEContractType): string;
            PoEContractType: typeof _780.PoEContractType;
            Params: {
                encode(message: _780.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _780.Params;
                fromJSON(object: any): _780.Params;
                toJSON(message: _780.Params): unknown;
                fromPartial(object: {
                    historicalEntries?: number;
                    initialValEngagementPoints?: any;
                    minDelegationAmounts?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _780.Params;
            };
            GenesisState: {
                encode(message: _779.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _779.GenesisState;
                fromJSON(object: any): _779.GenesisState;
                toJSON(message: _779.GenesisState): unknown;
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
                            contractType?: _780.PoEContractType;
                            address?: string;
                        }[];
                    };
                }): _779.GenesisState;
            };
            ImportDump: {
                encode(message: _779.ImportDump, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _779.ImportDump;
                fromJSON(object: any): _779.ImportDump;
                toJSON(message: _779.ImportDump): unknown;
                fromPartial(object: {
                    contracts?: {
                        contractType?: _780.PoEContractType;
                        address?: string;
                    }[];
                }): _779.ImportDump;
            };
            SeedContracts: {
                encode(message: _779.SeedContracts, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _779.SeedContracts;
                fromJSON(object: any): _779.SeedContracts;
                toJSON(message: _779.SeedContracts): unknown;
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
                }): _779.SeedContracts;
            };
            MixerContractConfig: {
                encode(message: _779.MixerContractConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _779.MixerContractConfig;
                fromJSON(object: any): _779.MixerContractConfig;
                toJSON(message: _779.MixerContractConfig): unknown;
                fromPartial(object: {
                    sigmoid?: {
                        maxPoints?: any;
                        p?: string;
                        s?: string;
                    };
                }): _779.MixerContractConfig;
            };
            MixerContractConfig_Sigmoid: {
                encode(message: _779.MixerContractConfig_Sigmoid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _779.MixerContractConfig_Sigmoid;
                fromJSON(object: any): _779.MixerContractConfig_Sigmoid;
                toJSON(message: _779.MixerContractConfig_Sigmoid): unknown;
                fromPartial(object: {
                    maxPoints?: any;
                    p?: string;
                    s?: string;
                }): _779.MixerContractConfig_Sigmoid;
            };
            StakeContractConfig: {
                encode(message: _779.StakeContractConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _779.StakeContractConfig;
                fromJSON(object: any): _779.StakeContractConfig;
                toJSON(message: _779.StakeContractConfig): unknown;
                fromPartial(object: {
                    minBond?: any;
                    tokensPerPoint?: any;
                    unbondingPeriod?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    claimAutoreturnLimit?: number;
                }): _779.StakeContractConfig;
            };
            ValsetContractConfig: {
                encode(message: _779.ValsetContractConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _779.ValsetContractConfig;
                fromJSON(object: any): _779.ValsetContractConfig;
                toJSON(message: _779.ValsetContractConfig): unknown;
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
                }): _779.ValsetContractConfig;
            };
            EngagementContractConfig: {
                encode(message: _779.EngagementContractConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _779.EngagementContractConfig;
                fromJSON(object: any): _779.EngagementContractConfig;
                toJSON(message: _779.EngagementContractConfig): unknown;
                fromPartial(object: {
                    halflife?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _779.EngagementContractConfig;
            };
            OversightCommitteeContractConfig: {
                encode(message: _779.OversightCommitteeContractConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _779.OversightCommitteeContractConfig;
                fromJSON(object: any): _779.OversightCommitteeContractConfig;
                toJSON(message: _779.OversightCommitteeContractConfig): unknown;
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
                }): _779.OversightCommitteeContractConfig;
            };
            CommunityPoolContractConfig: {
                encode(message: _779.CommunityPoolContractConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _779.CommunityPoolContractConfig;
                fromJSON(object: any): _779.CommunityPoolContractConfig;
                toJSON(message: _779.CommunityPoolContractConfig): unknown;
                fromPartial(object: {
                    votingRules?: {
                        votingPeriod?: number;
                        quorum?: string;
                        threshold?: string;
                        allowEndEarly?: boolean;
                    };
                }): _779.CommunityPoolContractConfig;
            };
            ValidatorVotingContractConfig: {
                encode(message: _779.ValidatorVotingContractConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _779.ValidatorVotingContractConfig;
                fromJSON(object: any): _779.ValidatorVotingContractConfig;
                toJSON(message: _779.ValidatorVotingContractConfig): unknown;
                fromPartial(object: {
                    votingRules?: {
                        votingPeriod?: number;
                        quorum?: string;
                        threshold?: string;
                        allowEndEarly?: boolean;
                    };
                }): _779.ValidatorVotingContractConfig;
            };
            PoEContract: {
                encode(message: _779.PoEContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _779.PoEContract;
                fromJSON(object: any): _779.PoEContract;
                toJSON(message: _779.PoEContract): unknown;
                fromPartial(object: {
                    contractType?: _780.PoEContractType;
                    address?: string;
                }): _779.PoEContract;
            };
            TG4Member: {
                encode(message: _779.TG4Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _779.TG4Member;
                fromJSON(object: any): _779.TG4Member;
                toJSON(message: _779.TG4Member): unknown;
                fromPartial(object: {
                    address?: string;
                    points?: any;
                }): _779.TG4Member;
            };
            VotingRules: {
                encode(message: _779.VotingRules, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _779.VotingRules;
                fromJSON(object: any): _779.VotingRules;
                toJSON(message: _779.VotingRules): unknown;
                fromPartial(object: {
                    votingPeriod?: number;
                    quorum?: string;
                    threshold?: string;
                    allowEndEarly?: boolean;
                }): _779.VotingRules;
            };
            ArbiterPoolContractConfig: {
                encode(message: _779.ArbiterPoolContractConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _779.ArbiterPoolContractConfig;
                fromJSON(object: any): _779.ArbiterPoolContractConfig;
                toJSON(message: _779.ArbiterPoolContractConfig): unknown;
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
                }): _779.ArbiterPoolContractConfig;
            };
        };
    }
    namespace twasm {
        const v1beta1: {
            QueryPrivilegedContractsRequest: {
                encode(_: _786.QueryPrivilegedContractsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _786.QueryPrivilegedContractsRequest;
                fromJSON(_: any): _786.QueryPrivilegedContractsRequest;
                toJSON(_: _786.QueryPrivilegedContractsRequest): unknown;
                fromPartial(_: {}): _786.QueryPrivilegedContractsRequest;
            };
            QueryPrivilegedContractsResponse: {
                encode(message: _786.QueryPrivilegedContractsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _786.QueryPrivilegedContractsResponse;
                fromJSON(object: any): _786.QueryPrivilegedContractsResponse;
                toJSON(message: _786.QueryPrivilegedContractsResponse): unknown;
                fromPartial(object: {
                    contracts?: string[];
                }): _786.QueryPrivilegedContractsResponse;
            };
            QueryContractsByPrivilegeTypeRequest: {
                encode(message: _786.QueryContractsByPrivilegeTypeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _786.QueryContractsByPrivilegeTypeRequest;
                fromJSON(object: any): _786.QueryContractsByPrivilegeTypeRequest;
                toJSON(message: _786.QueryContractsByPrivilegeTypeRequest): unknown;
                fromPartial(object: {
                    privilegeType?: string;
                }): _786.QueryContractsByPrivilegeTypeRequest;
            };
            QueryContractsByPrivilegeTypeResponse: {
                encode(message: _786.QueryContractsByPrivilegeTypeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _786.QueryContractsByPrivilegeTypeResponse;
                fromJSON(object: any): _786.QueryContractsByPrivilegeTypeResponse;
                toJSON(message: _786.QueryContractsByPrivilegeTypeResponse): unknown;
                fromPartial(object: {
                    contracts?: string[];
                }): _786.QueryContractsByPrivilegeTypeResponse;
            };
            PromoteToPrivilegedContractProposal: {
                encode(message: _785.PromoteToPrivilegedContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _785.PromoteToPrivilegedContractProposal;
                fromJSON(object: any): _785.PromoteToPrivilegedContractProposal;
                toJSON(message: _785.PromoteToPrivilegedContractProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                }): _785.PromoteToPrivilegedContractProposal;
            };
            DemotePrivilegedContractProposal: {
                encode(message: _785.DemotePrivilegedContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _785.DemotePrivilegedContractProposal;
                fromJSON(object: any): _785.DemotePrivilegedContractProposal;
                toJSON(message: _785.DemotePrivilegedContractProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                }): _785.DemotePrivilegedContractProposal;
            };
            GenesisState: {
                encode(message: _784.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _784.GenesisState;
                fromJSON(object: any): _784.GenesisState;
                toJSON(message: _784.GenesisState): unknown;
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
                }): _784.GenesisState;
            };
            Contract: {
                encode(message: _784.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _784.Contract;
                fromJSON(object: any): _784.Contract;
                toJSON(message: _784.Contract): unknown;
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
                }): _784.Contract;
            };
            KVModel: {
                encode(message: _784.KVModel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _784.KVModel;
                fromJSON(object: any): _784.KVModel;
                toJSON(message: _784.KVModel): unknown;
                fromPartial(object: {
                    models?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }[];
                }): _784.KVModel;
            };
            CustomModel: {
                encode(message: _784.CustomModel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _784.CustomModel;
                fromJSON(object: any): _784.CustomModel;
                toJSON(message: _784.CustomModel): unknown;
                fromPartial(object: {
                    msg?: Uint8Array;
                }): _784.CustomModel;
            };
            TgradeContractDetails: {
                encode(message: _783.TgradeContractDetails, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _783.TgradeContractDetails;
                fromJSON(object: any): _783.TgradeContractDetails;
                toJSON(message: _783.TgradeContractDetails): unknown;
                fromPartial(object: {
                    registeredPrivileges?: {
                        position?: number;
                        privilegeType?: string;
                    }[];
                }): _783.TgradeContractDetails;
            };
            RegisteredPrivilege: {
                encode(message: _783.RegisteredPrivilege, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _783.RegisteredPrivilege;
                fromJSON(object: any): _783.RegisteredPrivilege;
                toJSON(message: _783.RegisteredPrivilege): unknown;
                fromPartial(object: {
                    position?: number;
                    privilegeType?: string;
                }): _783.RegisteredPrivilege;
            };
        };
    }
}
