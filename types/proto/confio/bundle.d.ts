import * as _690 from "../tgrade/confio/globalfee/v1beta1/genesis";
import * as _691 from "../tgrade/confio/globalfee/v1beta1/query";
import * as _692 from "../tgrade/confio/poe/v1beta1/genesis";
import * as _693 from "../tgrade/confio/poe/v1beta1/poe";
import * as _694 from "../tgrade/confio/poe/v1beta1/query";
import * as _695 from "../tgrade/confio/poe/v1beta1/tx";
import * as _696 from "../tgrade/confio/twasm/v1beta1/contract_extension";
import * as _697 from "../tgrade/confio/twasm/v1beta1/genesis";
import * as _698 from "../tgrade/confio/twasm/v1beta1/proposal";
import * as _699 from "../tgrade/confio/twasm/v1beta1/query";
export declare namespace confio {
    namespace globalfee {
        const v1beta1: {
            QueryMinimumGasPricesRequest: {
                encode(_: _691.QueryMinimumGasPricesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _691.QueryMinimumGasPricesRequest;
                fromJSON(_: any): _691.QueryMinimumGasPricesRequest;
                toJSON(_: _691.QueryMinimumGasPricesRequest): unknown;
                fromPartial(_: {}): _691.QueryMinimumGasPricesRequest;
            };
            QueryMinimumGasPricesResponse: {
                encode(message: _691.QueryMinimumGasPricesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _691.QueryMinimumGasPricesResponse;
                fromJSON(object: any): _691.QueryMinimumGasPricesResponse;
                toJSON(message: _691.QueryMinimumGasPricesResponse): unknown;
                fromPartial(object: {
                    minimumGasPrices?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _691.QueryMinimumGasPricesResponse;
            };
            GenesisState: {
                encode(message: _690.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _690.GenesisState;
                fromJSON(object: any): _690.GenesisState;
                toJSON(message: _690.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        minimumGasPrices?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _690.GenesisState;
            };
            Params: {
                encode(message: _690.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _690.Params;
                fromJSON(object: any): _690.Params;
                toJSON(message: _690.Params): unknown;
                fromPartial(object: {
                    minimumGasPrices?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _690.Params;
            };
        };
    }
    namespace poe {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _695.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateValidator(value: _695.MsgUpdateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _695.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _695.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _695.MsgCreateValidator): {
                        typeUrl: string;
                        value: _695.MsgCreateValidator;
                    };
                    updateValidator(value: _695.MsgUpdateValidator): {
                        typeUrl: string;
                        value: _695.MsgUpdateValidator;
                    };
                    delegate(value: _695.MsgDelegate): {
                        typeUrl: string;
                        value: _695.MsgDelegate;
                    };
                    undelegate(value: _695.MsgUndelegate): {
                        typeUrl: string;
                        value: _695.MsgUndelegate;
                    };
                };
                toJSON: {
                    createValidator(value: _695.MsgCreateValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateValidator(value: _695.MsgUpdateValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    delegate(value: _695.MsgDelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    undelegate(value: _695.MsgUndelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _695.MsgCreateValidator;
                    };
                    updateValidator(value: any): {
                        typeUrl: string;
                        value: _695.MsgUpdateValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _695.MsgDelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _695.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _695.MsgCreateValidator): {
                        typeUrl: string;
                        value: _695.MsgCreateValidator;
                    };
                    updateValidator(value: _695.MsgUpdateValidator): {
                        typeUrl: string;
                        value: _695.MsgUpdateValidator;
                    };
                    delegate(value: _695.MsgDelegate): {
                        typeUrl: string;
                        value: _695.MsgDelegate;
                    };
                    undelegate(value: _695.MsgUndelegate): {
                        typeUrl: string;
                        value: _695.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/confio.poe.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, operatorAddress, pubkey, amount, vestingAmount }: _695.MsgCreateValidator) => {
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
                    }) => _695.MsgCreateValidator;
                };
                "/confio.poe.v1beta1.MsgUpdateValidator": {
                    aminoType: string;
                    toAmino: ({ description, operatorAddress }: _695.MsgUpdateValidator) => {
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
                    }) => _695.MsgUpdateValidator;
                };
                "/confio.poe.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ operatorAddress, amount, vestingAmount }: _695.MsgDelegate) => {
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
                    }) => _695.MsgDelegate;
                };
                "/confio.poe.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ operatorAddress, amount }: _695.MsgUndelegate) => {
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
                    }) => _695.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                encode(message: _695.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _695.MsgCreateValidator;
                fromJSON(object: any): _695.MsgCreateValidator;
                toJSON(message: _695.MsgCreateValidator): unknown;
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
                }): _695.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _695.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _695.MsgCreateValidatorResponse;
                fromJSON(_: any): _695.MsgCreateValidatorResponse;
                toJSON(_: _695.MsgCreateValidatorResponse): unknown;
                fromPartial(_: {}): _695.MsgCreateValidatorResponse;
            };
            MsgUpdateValidator: {
                encode(message: _695.MsgUpdateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _695.MsgUpdateValidator;
                fromJSON(object: any): _695.MsgUpdateValidator;
                toJSON(message: _695.MsgUpdateValidator): unknown;
                fromPartial(object: {
                    description?: {
                        moniker?: string;
                        identity?: string;
                        website?: string;
                        securityContact?: string;
                        details?: string;
                    };
                    operatorAddress?: string;
                }): _695.MsgUpdateValidator;
            };
            MsgUpdateValidatorResponse: {
                encode(_: _695.MsgUpdateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _695.MsgUpdateValidatorResponse;
                fromJSON(_: any): _695.MsgUpdateValidatorResponse;
                toJSON(_: _695.MsgUpdateValidatorResponse): unknown;
                fromPartial(_: {}): _695.MsgUpdateValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _695.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _695.MsgDelegate;
                fromJSON(object: any): _695.MsgDelegate;
                toJSON(message: _695.MsgDelegate): unknown;
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
                }): _695.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _695.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _695.MsgDelegateResponse;
                fromJSON(_: any): _695.MsgDelegateResponse;
                toJSON(_: _695.MsgDelegateResponse): unknown;
                fromPartial(_: {}): _695.MsgDelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _695.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _695.MsgUndelegate;
                fromJSON(object: any): _695.MsgUndelegate;
                toJSON(message: _695.MsgUndelegate): unknown;
                fromPartial(object: {
                    operatorAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _695.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _695.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _695.MsgUndelegateResponse;
                fromJSON(object: any): _695.MsgUndelegateResponse;
                toJSON(message: _695.MsgUndelegateResponse): unknown;
                fromPartial(object: {
                    completionTime?: Date;
                }): _695.MsgUndelegateResponse;
            };
            QueryContractAddressRequest: {
                encode(message: _694.QueryContractAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _694.QueryContractAddressRequest;
                fromJSON(object: any): _694.QueryContractAddressRequest;
                toJSON(message: _694.QueryContractAddressRequest): unknown;
                fromPartial(object: {
                    contractType?: _693.PoEContractType;
                }): _694.QueryContractAddressRequest;
            };
            QueryContractAddressResponse: {
                encode(message: _694.QueryContractAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _694.QueryContractAddressResponse;
                fromJSON(object: any): _694.QueryContractAddressResponse;
                toJSON(message: _694.QueryContractAddressResponse): unknown;
                fromPartial(object: {
                    address?: string;
                }): _694.QueryContractAddressResponse;
            };
            QueryUnbondingPeriodRequest: {
                encode(_: _694.QueryUnbondingPeriodRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _694.QueryUnbondingPeriodRequest;
                fromJSON(_: any): _694.QueryUnbondingPeriodRequest;
                toJSON(_: _694.QueryUnbondingPeriodRequest): unknown;
                fromPartial(_: {}): _694.QueryUnbondingPeriodRequest;
            };
            QueryUnbondingPeriodResponse: {
                encode(message: _694.QueryUnbondingPeriodResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _694.QueryUnbondingPeriodResponse;
                fromJSON(object: any): _694.QueryUnbondingPeriodResponse;
                toJSON(message: _694.QueryUnbondingPeriodResponse): unknown;
                fromPartial(object: {
                    time?: string;
                }): _694.QueryUnbondingPeriodResponse;
            };
            QueryValidatorDelegationRequest: {
                encode(message: _694.QueryValidatorDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _694.QueryValidatorDelegationRequest;
                fromJSON(object: any): _694.QueryValidatorDelegationRequest;
                toJSON(message: _694.QueryValidatorDelegationRequest): unknown;
                fromPartial(object: {
                    validatorAddr?: string;
                }): _694.QueryValidatorDelegationRequest;
            };
            QueryValidatorDelegationResponse: {
                encode(message: _694.QueryValidatorDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _694.QueryValidatorDelegationResponse;
                fromJSON(object: any): _694.QueryValidatorDelegationResponse;
                toJSON(message: _694.QueryValidatorDelegationResponse): unknown;
                fromPartial(object: {
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _694.QueryValidatorDelegationResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _694.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _694.QueryValidatorUnbondingDelegationsRequest;
                fromJSON(object: any): _694.QueryValidatorUnbondingDelegationsRequest;
                toJSON(message: _694.QueryValidatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: {
                    validatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _694.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _694.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _694.QueryValidatorUnbondingDelegationsResponse;
                fromJSON(object: any): _694.QueryValidatorUnbondingDelegationsResponse;
                toJSON(message: _694.QueryValidatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: {
                    entries?: {
                        creationHeight?: any;
                        completionTime?: Date;
                        initialBalance?: string;
                        balance?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _694.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryValidatorOutstandingRewardRequest: {
                encode(message: _694.QueryValidatorOutstandingRewardRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _694.QueryValidatorOutstandingRewardRequest;
                fromJSON(object: any): _694.QueryValidatorOutstandingRewardRequest;
                toJSON(message: _694.QueryValidatorOutstandingRewardRequest): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _694.QueryValidatorOutstandingRewardRequest;
            };
            QueryValidatorOutstandingRewardResponse: {
                encode(message: _694.QueryValidatorOutstandingRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _694.QueryValidatorOutstandingRewardResponse;
                fromJSON(object: any): _694.QueryValidatorOutstandingRewardResponse;
                toJSON(message: _694.QueryValidatorOutstandingRewardResponse): unknown;
                fromPartial(object: {
                    reward?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _694.QueryValidatorOutstandingRewardResponse;
            };
            QueryValidatorEngagementRewardRequest: {
                encode(message: _694.QueryValidatorEngagementRewardRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _694.QueryValidatorEngagementRewardRequest;
                fromJSON(object: any): _694.QueryValidatorEngagementRewardRequest;
                toJSON(message: _694.QueryValidatorEngagementRewardRequest): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _694.QueryValidatorEngagementRewardRequest;
            };
            QueryValidatorEngagementRewardResponse: {
                encode(message: _694.QueryValidatorEngagementRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _694.QueryValidatorEngagementRewardResponse;
                fromJSON(object: any): _694.QueryValidatorEngagementRewardResponse;
                toJSON(message: _694.QueryValidatorEngagementRewardResponse): unknown;
                fromPartial(object: {
                    reward?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _694.QueryValidatorEngagementRewardResponse;
            };
            poEContractTypeFromJSON(object: any): _693.PoEContractType;
            poEContractTypeToJSON(object: _693.PoEContractType): string;
            PoEContractType: typeof _693.PoEContractType;
            Params: {
                encode(message: _693.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _693.Params;
                fromJSON(object: any): _693.Params;
                toJSON(message: _693.Params): unknown;
                fromPartial(object: {
                    historicalEntries?: number;
                    initialValEngagementPoints?: any;
                    minDelegationAmounts?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _693.Params;
            };
            GenesisState: {
                encode(message: _692.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _692.GenesisState;
                fromJSON(object: any): _692.GenesisState;
                toJSON(message: _692.GenesisState): unknown;
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
                            unbondingPeriod?: string;
                            claimAutoreturnLimit?: number;
                        };
                        valsetContractConfig?: {
                            minPoints?: any;
                            maxValidators?: number;
                            epochLength?: string;
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
                            offlineJailDuration?: string;
                        };
                        engagementContractConfig?: {
                            halflife?: string;
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
                            waitingPeriod?: string;
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
                            contractType?: _693.PoEContractType;
                            address?: string;
                        }[];
                    };
                }): _692.GenesisState;
            };
            ImportDump: {
                encode(message: _692.ImportDump, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _692.ImportDump;
                fromJSON(object: any): _692.ImportDump;
                toJSON(message: _692.ImportDump): unknown;
                fromPartial(object: {
                    contracts?: {
                        contractType?: _693.PoEContractType;
                        address?: string;
                    }[];
                }): _692.ImportDump;
            };
            SeedContracts: {
                encode(message: _692.SeedContracts, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _692.SeedContracts;
                fromJSON(object: any): _692.SeedContracts;
                toJSON(message: _692.SeedContracts): unknown;
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
                        unbondingPeriod?: string;
                        claimAutoreturnLimit?: number;
                    };
                    valsetContractConfig?: {
                        minPoints?: any;
                        maxValidators?: number;
                        epochLength?: string;
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
                        offlineJailDuration?: string;
                    };
                    engagementContractConfig?: {
                        halflife?: string;
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
                        waitingPeriod?: string;
                    };
                    mixerContractConfig?: {
                        sigmoid?: {
                            maxPoints?: any;
                            p?: string;
                            s?: string;
                        };
                    };
                }): _692.SeedContracts;
            };
            MixerContractConfig: {
                encode(message: _692.MixerContractConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _692.MixerContractConfig;
                fromJSON(object: any): _692.MixerContractConfig;
                toJSON(message: _692.MixerContractConfig): unknown;
                fromPartial(object: {
                    sigmoid?: {
                        maxPoints?: any;
                        p?: string;
                        s?: string;
                    };
                }): _692.MixerContractConfig;
            };
            MixerContractConfig_Sigmoid: {
                encode(message: _692.MixerContractConfig_Sigmoid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _692.MixerContractConfig_Sigmoid;
                fromJSON(object: any): _692.MixerContractConfig_Sigmoid;
                toJSON(message: _692.MixerContractConfig_Sigmoid): unknown;
                fromPartial(object: {
                    maxPoints?: any;
                    p?: string;
                    s?: string;
                }): _692.MixerContractConfig_Sigmoid;
            };
            StakeContractConfig: {
                encode(message: _692.StakeContractConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _692.StakeContractConfig;
                fromJSON(object: any): _692.StakeContractConfig;
                toJSON(message: _692.StakeContractConfig): unknown;
                fromPartial(object: {
                    minBond?: any;
                    tokensPerPoint?: any;
                    unbondingPeriod?: string;
                    claimAutoreturnLimit?: number;
                }): _692.StakeContractConfig;
            };
            ValsetContractConfig: {
                encode(message: _692.ValsetContractConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _692.ValsetContractConfig;
                fromJSON(object: any): _692.ValsetContractConfig;
                toJSON(message: _692.ValsetContractConfig): unknown;
                fromPartial(object: {
                    minPoints?: any;
                    maxValidators?: number;
                    epochLength?: string;
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
                    offlineJailDuration?: string;
                }): _692.ValsetContractConfig;
            };
            EngagementContractConfig: {
                encode(message: _692.EngagementContractConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _692.EngagementContractConfig;
                fromJSON(object: any): _692.EngagementContractConfig;
                toJSON(message: _692.EngagementContractConfig): unknown;
                fromPartial(object: {
                    halflife?: string;
                }): _692.EngagementContractConfig;
            };
            OversightCommitteeContractConfig: {
                encode(message: _692.OversightCommitteeContractConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _692.OversightCommitteeContractConfig;
                fromJSON(object: any): _692.OversightCommitteeContractConfig;
                toJSON(message: _692.OversightCommitteeContractConfig): unknown;
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
                }): _692.OversightCommitteeContractConfig;
            };
            CommunityPoolContractConfig: {
                encode(message: _692.CommunityPoolContractConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _692.CommunityPoolContractConfig;
                fromJSON(object: any): _692.CommunityPoolContractConfig;
                toJSON(message: _692.CommunityPoolContractConfig): unknown;
                fromPartial(object: {
                    votingRules?: {
                        votingPeriod?: number;
                        quorum?: string;
                        threshold?: string;
                        allowEndEarly?: boolean;
                    };
                }): _692.CommunityPoolContractConfig;
            };
            ValidatorVotingContractConfig: {
                encode(message: _692.ValidatorVotingContractConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _692.ValidatorVotingContractConfig;
                fromJSON(object: any): _692.ValidatorVotingContractConfig;
                toJSON(message: _692.ValidatorVotingContractConfig): unknown;
                fromPartial(object: {
                    votingRules?: {
                        votingPeriod?: number;
                        quorum?: string;
                        threshold?: string;
                        allowEndEarly?: boolean;
                    };
                }): _692.ValidatorVotingContractConfig;
            };
            PoEContract: {
                encode(message: _692.PoEContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _692.PoEContract;
                fromJSON(object: any): _692.PoEContract;
                toJSON(message: _692.PoEContract): unknown;
                fromPartial(object: {
                    contractType?: _693.PoEContractType;
                    address?: string;
                }): _692.PoEContract;
            };
            TG4Member: {
                encode(message: _692.TG4Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _692.TG4Member;
                fromJSON(object: any): _692.TG4Member;
                toJSON(message: _692.TG4Member): unknown;
                fromPartial(object: {
                    address?: string;
                    points?: any;
                }): _692.TG4Member;
            };
            VotingRules: {
                encode(message: _692.VotingRules, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _692.VotingRules;
                fromJSON(object: any): _692.VotingRules;
                toJSON(message: _692.VotingRules): unknown;
                fromPartial(object: {
                    votingPeriod?: number;
                    quorum?: string;
                    threshold?: string;
                    allowEndEarly?: boolean;
                }): _692.VotingRules;
            };
            ArbiterPoolContractConfig: {
                encode(message: _692.ArbiterPoolContractConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _692.ArbiterPoolContractConfig;
                fromJSON(object: any): _692.ArbiterPoolContractConfig;
                toJSON(message: _692.ArbiterPoolContractConfig): unknown;
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
                    waitingPeriod?: string;
                }): _692.ArbiterPoolContractConfig;
            };
        };
    }
    namespace twasm {
        const v1beta1: {
            QueryPrivilegedContractsRequest: {
                encode(_: _699.QueryPrivilegedContractsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _699.QueryPrivilegedContractsRequest;
                fromJSON(_: any): _699.QueryPrivilegedContractsRequest;
                toJSON(_: _699.QueryPrivilegedContractsRequest): unknown;
                fromPartial(_: {}): _699.QueryPrivilegedContractsRequest;
            };
            QueryPrivilegedContractsResponse: {
                encode(message: _699.QueryPrivilegedContractsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _699.QueryPrivilegedContractsResponse;
                fromJSON(object: any): _699.QueryPrivilegedContractsResponse;
                toJSON(message: _699.QueryPrivilegedContractsResponse): unknown;
                fromPartial(object: {
                    contracts?: string[];
                }): _699.QueryPrivilegedContractsResponse;
            };
            QueryContractsByPrivilegeTypeRequest: {
                encode(message: _699.QueryContractsByPrivilegeTypeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _699.QueryContractsByPrivilegeTypeRequest;
                fromJSON(object: any): _699.QueryContractsByPrivilegeTypeRequest;
                toJSON(message: _699.QueryContractsByPrivilegeTypeRequest): unknown;
                fromPartial(object: {
                    privilegeType?: string;
                }): _699.QueryContractsByPrivilegeTypeRequest;
            };
            QueryContractsByPrivilegeTypeResponse: {
                encode(message: _699.QueryContractsByPrivilegeTypeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _699.QueryContractsByPrivilegeTypeResponse;
                fromJSON(object: any): _699.QueryContractsByPrivilegeTypeResponse;
                toJSON(message: _699.QueryContractsByPrivilegeTypeResponse): unknown;
                fromPartial(object: {
                    contracts?: string[];
                }): _699.QueryContractsByPrivilegeTypeResponse;
            };
            PromoteToPrivilegedContractProposal: {
                encode(message: _698.PromoteToPrivilegedContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _698.PromoteToPrivilegedContractProposal;
                fromJSON(object: any): _698.PromoteToPrivilegedContractProposal;
                toJSON(message: _698.PromoteToPrivilegedContractProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                }): _698.PromoteToPrivilegedContractProposal;
            };
            DemotePrivilegedContractProposal: {
                encode(message: _698.DemotePrivilegedContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _698.DemotePrivilegedContractProposal;
                fromJSON(object: any): _698.DemotePrivilegedContractProposal;
                toJSON(message: _698.DemotePrivilegedContractProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                }): _698.DemotePrivilegedContractProposal;
            };
            GenesisState: {
                encode(message: _697.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _697.GenesisState;
                fromJSON(object: any): _697.GenesisState;
                toJSON(message: _697.GenesisState): unknown;
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
                }): _697.GenesisState;
            };
            Contract: {
                encode(message: _697.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _697.Contract;
                fromJSON(object: any): _697.Contract;
                toJSON(message: _697.Contract): unknown;
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
                }): _697.Contract;
            };
            KVModel: {
                encode(message: _697.KVModel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _697.KVModel;
                fromJSON(object: any): _697.KVModel;
                toJSON(message: _697.KVModel): unknown;
                fromPartial(object: {
                    models?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }[];
                }): _697.KVModel;
            };
            CustomModel: {
                encode(message: _697.CustomModel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _697.CustomModel;
                fromJSON(object: any): _697.CustomModel;
                toJSON(message: _697.CustomModel): unknown;
                fromPartial(object: {
                    msg?: Uint8Array;
                }): _697.CustomModel;
            };
            TgradeContractDetails: {
                encode(message: _696.TgradeContractDetails, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _696.TgradeContractDetails;
                fromJSON(object: any): _696.TgradeContractDetails;
                toJSON(message: _696.TgradeContractDetails): unknown;
                fromPartial(object: {
                    registeredPrivileges?: {
                        position?: number;
                        privilegeType?: string;
                    }[];
                }): _696.TgradeContractDetails;
            };
            RegisteredPrivilege: {
                encode(message: _696.RegisteredPrivilege, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _696.RegisteredPrivilege;
                fromJSON(object: any): _696.RegisteredPrivilege;
                toJSON(message: _696.RegisteredPrivilege): unknown;
                fromPartial(object: {
                    position?: number;
                    privilegeType?: string;
                }): _696.RegisteredPrivilege;
            };
        };
    }
}
