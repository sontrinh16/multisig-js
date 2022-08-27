import * as _379 from "../ixo/payments/genesis";
import * as _380 from "../ixo/payments/payments";
import * as _381 from "../ixo/payments/query";
import * as _382 from "../ixo/payments/tx";
export declare const payments: {
    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
    MessageComposer: {
        encoded: {
            setPaymentContractAuthorisation(value: _382.MsgSetPaymentContractAuthorisation): {
                typeUrl: string;
                value: Uint8Array;
            };
            createPaymentTemplate(value: _382.MsgCreatePaymentTemplate): {
                typeUrl: string;
                value: Uint8Array;
            };
            createPaymentContract(value: _382.MsgCreatePaymentContract): {
                typeUrl: string;
                value: Uint8Array;
            };
            createSubscription(value: _382.MsgCreateSubscription): {
                typeUrl: string;
                value: Uint8Array;
            };
            grantDiscount(value: _382.MsgGrantDiscount): {
                typeUrl: string;
                value: Uint8Array;
            };
            revokeDiscount(value: _382.MsgRevokeDiscount): {
                typeUrl: string;
                value: Uint8Array;
            };
            effectPayment(value: _382.MsgEffectPayment): {
                typeUrl: string;
                value: Uint8Array;
            };
        };
        withTypeUrl: {
            setPaymentContractAuthorisation(value: _382.MsgSetPaymentContractAuthorisation): {
                typeUrl: string;
                value: _382.MsgSetPaymentContractAuthorisation;
            };
            createPaymentTemplate(value: _382.MsgCreatePaymentTemplate): {
                typeUrl: string;
                value: _382.MsgCreatePaymentTemplate;
            };
            createPaymentContract(value: _382.MsgCreatePaymentContract): {
                typeUrl: string;
                value: _382.MsgCreatePaymentContract;
            };
            createSubscription(value: _382.MsgCreateSubscription): {
                typeUrl: string;
                value: _382.MsgCreateSubscription;
            };
            grantDiscount(value: _382.MsgGrantDiscount): {
                typeUrl: string;
                value: _382.MsgGrantDiscount;
            };
            revokeDiscount(value: _382.MsgRevokeDiscount): {
                typeUrl: string;
                value: _382.MsgRevokeDiscount;
            };
            effectPayment(value: _382.MsgEffectPayment): {
                typeUrl: string;
                value: _382.MsgEffectPayment;
            };
        };
        toJSON: {
            setPaymentContractAuthorisation(value: _382.MsgSetPaymentContractAuthorisation): {
                typeUrl: string;
                value: unknown;
            };
            createPaymentTemplate(value: _382.MsgCreatePaymentTemplate): {
                typeUrl: string;
                value: unknown;
            };
            createPaymentContract(value: _382.MsgCreatePaymentContract): {
                typeUrl: string;
                value: unknown;
            };
            createSubscription(value: _382.MsgCreateSubscription): {
                typeUrl: string;
                value: unknown;
            };
            grantDiscount(value: _382.MsgGrantDiscount): {
                typeUrl: string;
                value: unknown;
            };
            revokeDiscount(value: _382.MsgRevokeDiscount): {
                typeUrl: string;
                value: unknown;
            };
            effectPayment(value: _382.MsgEffectPayment): {
                typeUrl: string;
                value: unknown;
            };
        };
        fromJSON: {
            setPaymentContractAuthorisation(value: any): {
                typeUrl: string;
                value: _382.MsgSetPaymentContractAuthorisation;
            };
            createPaymentTemplate(value: any): {
                typeUrl: string;
                value: _382.MsgCreatePaymentTemplate;
            };
            createPaymentContract(value: any): {
                typeUrl: string;
                value: _382.MsgCreatePaymentContract;
            };
            createSubscription(value: any): {
                typeUrl: string;
                value: _382.MsgCreateSubscription;
            };
            grantDiscount(value: any): {
                typeUrl: string;
                value: _382.MsgGrantDiscount;
            };
            revokeDiscount(value: any): {
                typeUrl: string;
                value: _382.MsgRevokeDiscount;
            };
            effectPayment(value: any): {
                typeUrl: string;
                value: _382.MsgEffectPayment;
            };
        };
        fromPartial: {
            setPaymentContractAuthorisation(value: _382.MsgSetPaymentContractAuthorisation): {
                typeUrl: string;
                value: _382.MsgSetPaymentContractAuthorisation;
            };
            createPaymentTemplate(value: _382.MsgCreatePaymentTemplate): {
                typeUrl: string;
                value: _382.MsgCreatePaymentTemplate;
            };
            createPaymentContract(value: _382.MsgCreatePaymentContract): {
                typeUrl: string;
                value: _382.MsgCreatePaymentContract;
            };
            createSubscription(value: _382.MsgCreateSubscription): {
                typeUrl: string;
                value: _382.MsgCreateSubscription;
            };
            grantDiscount(value: _382.MsgGrantDiscount): {
                typeUrl: string;
                value: _382.MsgGrantDiscount;
            };
            revokeDiscount(value: _382.MsgRevokeDiscount): {
                typeUrl: string;
                value: _382.MsgRevokeDiscount;
            };
            effectPayment(value: _382.MsgEffectPayment): {
                typeUrl: string;
                value: _382.MsgEffectPayment;
            };
        };
    };
    AminoConverter: {
        "/payments.MsgSetPaymentContractAuthorisation": {
            aminoType: string;
            toAmino: ({ paymentContractId, payerDid, authorised }: _382.MsgSetPaymentContractAuthorisation) => {
                payment_contract_id: string;
                payer_did: string;
                authorised: boolean;
            };
            fromAmino: ({ payment_contract_id, payer_did, authorised }: {
                payment_contract_id: string;
                payer_did: string;
                authorised: boolean;
            }) => _382.MsgSetPaymentContractAuthorisation;
        };
        "/payments.MsgCreatePaymentTemplate": {
            aminoType: string;
            toAmino: ({ creatorDid, paymentTemplate }: _382.MsgCreatePaymentTemplate) => {
                creator_did: string;
                payment_template: {
                    id: string;
                    payment_amount: {
                        denom: string;
                        amount: string;
                    }[];
                    payment_minimum: {
                        denom: string;
                        amount: string;
                    }[];
                    payment_maximum: {
                        denom: string;
                        amount: string;
                    }[];
                    discounts: {
                        id: string;
                        percent: string;
                    }[];
                };
            };
            fromAmino: ({ creator_did, payment_template }: {
                creator_did: string;
                payment_template: {
                    id: string;
                    payment_amount: {
                        denom: string;
                        amount: string;
                    }[];
                    payment_minimum: {
                        denom: string;
                        amount: string;
                    }[];
                    payment_maximum: {
                        denom: string;
                        amount: string;
                    }[];
                    discounts: {
                        id: string;
                        percent: string;
                    }[];
                };
            }) => _382.MsgCreatePaymentTemplate;
        };
        "/payments.MsgCreatePaymentContract": {
            aminoType: string;
            toAmino: ({ creatorDid, paymentTemplateId, paymentContractId, payer, recipients, canDeauthorise, discountId }: _382.MsgCreatePaymentContract) => {
                creator_did: string;
                payment_template_id: string;
                payment_contract_id: string;
                payer: string;
                recipients: {
                    address: string;
                    percentage: string;
                }[];
                can_deauthorise: boolean;
                discount_id: string;
            };
            fromAmino: ({ creator_did, payment_template_id, payment_contract_id, payer, recipients, can_deauthorise, discount_id }: {
                creator_did: string;
                payment_template_id: string;
                payment_contract_id: string;
                payer: string;
                recipients: {
                    address: string;
                    percentage: string;
                }[];
                can_deauthorise: boolean;
                discount_id: string;
            }) => _382.MsgCreatePaymentContract;
        };
        "/payments.MsgCreateSubscription": {
            aminoType: string;
            toAmino: ({ creatorDid, subscriptionId, paymentContractId, maxPeriods, period }: _382.MsgCreateSubscription) => {
                creator_did: string;
                subscription_id: string;
                payment_contract_id: string;
                max_periods: string;
                period: {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromAmino: ({ creator_did, subscription_id, payment_contract_id, max_periods, period }: {
                creator_did: string;
                subscription_id: string;
                payment_contract_id: string;
                max_periods: string;
                period: {
                    type_url: string;
                    value: Uint8Array;
                };
            }) => _382.MsgCreateSubscription;
        };
        "/payments.MsgGrantDiscount": {
            aminoType: string;
            toAmino: ({ senderDid, paymentContractId, discountId, recipient }: _382.MsgGrantDiscount) => {
                sender_did: string;
                payment_contract_id: string;
                discount_id: string;
                recipient: string;
            };
            fromAmino: ({ sender_did, payment_contract_id, discount_id, recipient }: {
                sender_did: string;
                payment_contract_id: string;
                discount_id: string;
                recipient: string;
            }) => _382.MsgGrantDiscount;
        };
        "/payments.MsgRevokeDiscount": {
            aminoType: string;
            toAmino: ({ senderDid, paymentContractId, holder }: _382.MsgRevokeDiscount) => {
                sender_did: string;
                payment_contract_id: string;
                holder: string;
            };
            fromAmino: ({ sender_did, payment_contract_id, holder }: {
                sender_did: string;
                payment_contract_id: string;
                holder: string;
            }) => _382.MsgRevokeDiscount;
        };
        "/payments.MsgEffectPayment": {
            aminoType: string;
            toAmino: ({ senderDid, paymentContractId }: _382.MsgEffectPayment) => {
                sender_did: string;
                payment_contract_id: string;
            };
            fromAmino: ({ sender_did, payment_contract_id }: {
                sender_did: string;
                payment_contract_id: string;
            }) => _382.MsgEffectPayment;
        };
    };
    MsgSetPaymentContractAuthorisation: {
        encode(message: _382.MsgSetPaymentContractAuthorisation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _382.MsgSetPaymentContractAuthorisation;
        fromJSON(object: any): _382.MsgSetPaymentContractAuthorisation;
        toJSON(message: _382.MsgSetPaymentContractAuthorisation): unknown;
        fromPartial(object: {
            paymentContractId?: string;
            payerDid?: string;
            authorised?: boolean;
        }): _382.MsgSetPaymentContractAuthorisation;
    };
    MsgSetPaymentContractAuthorisationResponse: {
        encode(_: _382.MsgSetPaymentContractAuthorisationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _382.MsgSetPaymentContractAuthorisationResponse;
        fromJSON(_: any): _382.MsgSetPaymentContractAuthorisationResponse;
        toJSON(_: _382.MsgSetPaymentContractAuthorisationResponse): unknown;
        fromPartial(_: {}): _382.MsgSetPaymentContractAuthorisationResponse;
    };
    MsgCreatePaymentTemplate: {
        encode(message: _382.MsgCreatePaymentTemplate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _382.MsgCreatePaymentTemplate;
        fromJSON(object: any): _382.MsgCreatePaymentTemplate;
        toJSON(message: _382.MsgCreatePaymentTemplate): unknown;
        fromPartial(object: {
            creatorDid?: string;
            paymentTemplate?: {
                id?: string;
                paymentAmount?: {
                    denom?: string;
                    amount?: string;
                }[];
                paymentMinimum?: {
                    denom?: string;
                    amount?: string;
                }[];
                paymentMaximum?: {
                    denom?: string;
                    amount?: string;
                }[];
                discounts?: {
                    id?: string;
                    percent?: string;
                }[];
            };
        }): _382.MsgCreatePaymentTemplate;
    };
    MsgCreatePaymentTemplateResponse: {
        encode(_: _382.MsgCreatePaymentTemplateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _382.MsgCreatePaymentTemplateResponse;
        fromJSON(_: any): _382.MsgCreatePaymentTemplateResponse;
        toJSON(_: _382.MsgCreatePaymentTemplateResponse): unknown;
        fromPartial(_: {}): _382.MsgCreatePaymentTemplateResponse;
    };
    MsgCreatePaymentContract: {
        encode(message: _382.MsgCreatePaymentContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _382.MsgCreatePaymentContract;
        fromJSON(object: any): _382.MsgCreatePaymentContract;
        toJSON(message: _382.MsgCreatePaymentContract): unknown;
        fromPartial(object: {
            creatorDid?: string;
            paymentTemplateId?: string;
            paymentContractId?: string;
            payer?: string;
            recipients?: {
                address?: string;
                percentage?: string;
            }[];
            canDeauthorise?: boolean;
            discountId?: string;
        }): _382.MsgCreatePaymentContract;
    };
    MsgCreatePaymentContractResponse: {
        encode(_: _382.MsgCreatePaymentContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _382.MsgCreatePaymentContractResponse;
        fromJSON(_: any): _382.MsgCreatePaymentContractResponse;
        toJSON(_: _382.MsgCreatePaymentContractResponse): unknown;
        fromPartial(_: {}): _382.MsgCreatePaymentContractResponse;
    };
    MsgCreateSubscription: {
        encode(message: _382.MsgCreateSubscription, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _382.MsgCreateSubscription;
        fromJSON(object: any): _382.MsgCreateSubscription;
        toJSON(message: _382.MsgCreateSubscription): unknown;
        fromPartial(object: {
            creatorDid?: string;
            subscriptionId?: string;
            paymentContractId?: string;
            maxPeriods?: string;
            period?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }): _382.MsgCreateSubscription;
    };
    MsgCreateSubscriptionResponse: {
        encode(_: _382.MsgCreateSubscriptionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _382.MsgCreateSubscriptionResponse;
        fromJSON(_: any): _382.MsgCreateSubscriptionResponse;
        toJSON(_: _382.MsgCreateSubscriptionResponse): unknown;
        fromPartial(_: {}): _382.MsgCreateSubscriptionResponse;
    };
    MsgGrantDiscount: {
        encode(message: _382.MsgGrantDiscount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _382.MsgGrantDiscount;
        fromJSON(object: any): _382.MsgGrantDiscount;
        toJSON(message: _382.MsgGrantDiscount): unknown;
        fromPartial(object: {
            senderDid?: string;
            paymentContractId?: string;
            discountId?: string;
            recipient?: string;
        }): _382.MsgGrantDiscount;
    };
    MsgGrantDiscountResponse: {
        encode(_: _382.MsgGrantDiscountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _382.MsgGrantDiscountResponse;
        fromJSON(_: any): _382.MsgGrantDiscountResponse;
        toJSON(_: _382.MsgGrantDiscountResponse): unknown;
        fromPartial(_: {}): _382.MsgGrantDiscountResponse;
    };
    MsgRevokeDiscount: {
        encode(message: _382.MsgRevokeDiscount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _382.MsgRevokeDiscount;
        fromJSON(object: any): _382.MsgRevokeDiscount;
        toJSON(message: _382.MsgRevokeDiscount): unknown;
        fromPartial(object: {
            senderDid?: string;
            paymentContractId?: string;
            holder?: string;
        }): _382.MsgRevokeDiscount;
    };
    MsgRevokeDiscountResponse: {
        encode(_: _382.MsgRevokeDiscountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _382.MsgRevokeDiscountResponse;
        fromJSON(_: any): _382.MsgRevokeDiscountResponse;
        toJSON(_: _382.MsgRevokeDiscountResponse): unknown;
        fromPartial(_: {}): _382.MsgRevokeDiscountResponse;
    };
    MsgEffectPayment: {
        encode(message: _382.MsgEffectPayment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _382.MsgEffectPayment;
        fromJSON(object: any): _382.MsgEffectPayment;
        toJSON(message: _382.MsgEffectPayment): unknown;
        fromPartial(object: {
            senderDid?: string;
            paymentContractId?: string;
        }): _382.MsgEffectPayment;
    };
    MsgEffectPaymentResponse: {
        encode(_: _382.MsgEffectPaymentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _382.MsgEffectPaymentResponse;
        fromJSON(_: any): _382.MsgEffectPaymentResponse;
        toJSON(_: _382.MsgEffectPaymentResponse): unknown;
        fromPartial(_: {}): _382.MsgEffectPaymentResponse;
    };
    QueryPaymentTemplateRequest: {
        encode(message: _381.QueryPaymentTemplateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _381.QueryPaymentTemplateRequest;
        fromJSON(object: any): _381.QueryPaymentTemplateRequest;
        toJSON(message: _381.QueryPaymentTemplateRequest): unknown;
        fromPartial(object: {
            paymentTemplateId?: string;
        }): _381.QueryPaymentTemplateRequest;
    };
    QueryPaymentTemplateResponse: {
        encode(message: _381.QueryPaymentTemplateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _381.QueryPaymentTemplateResponse;
        fromJSON(object: any): _381.QueryPaymentTemplateResponse;
        toJSON(message: _381.QueryPaymentTemplateResponse): unknown;
        fromPartial(object: {
            paymentTemplate?: {
                id?: string;
                paymentAmount?: {
                    denom?: string;
                    amount?: string;
                }[];
                paymentMinimum?: {
                    denom?: string;
                    amount?: string;
                }[];
                paymentMaximum?: {
                    denom?: string;
                    amount?: string;
                }[];
                discounts?: {
                    id?: string;
                    percent?: string;
                }[];
            };
        }): _381.QueryPaymentTemplateResponse;
    };
    QueryPaymentContractRequest: {
        encode(message: _381.QueryPaymentContractRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _381.QueryPaymentContractRequest;
        fromJSON(object: any): _381.QueryPaymentContractRequest;
        toJSON(message: _381.QueryPaymentContractRequest): unknown;
        fromPartial(object: {
            paymentContractId?: string;
        }): _381.QueryPaymentContractRequest;
    };
    QueryPaymentContractResponse: {
        encode(message: _381.QueryPaymentContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _381.QueryPaymentContractResponse;
        fromJSON(object: any): _381.QueryPaymentContractResponse;
        toJSON(message: _381.QueryPaymentContractResponse): unknown;
        fromPartial(object: {
            paymentContract?: {
                id?: string;
                paymentTemplateId?: string;
                creator?: string;
                payer?: string;
                recipients?: {
                    address?: string;
                    percentage?: string;
                }[];
                cumulativePay?: {
                    denom?: string;
                    amount?: string;
                }[];
                currentRemainder?: {
                    denom?: string;
                    amount?: string;
                }[];
                canDeauthorise?: boolean;
                authorised?: boolean;
                discountId?: string;
            };
        }): _381.QueryPaymentContractResponse;
    };
    QueryPaymentContractsByIdPrefixRequest: {
        encode(message: _381.QueryPaymentContractsByIdPrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _381.QueryPaymentContractsByIdPrefixRequest;
        fromJSON(object: any): _381.QueryPaymentContractsByIdPrefixRequest;
        toJSON(message: _381.QueryPaymentContractsByIdPrefixRequest): unknown;
        fromPartial(object: {
            paymentContractsIdPrefix?: string;
        }): _381.QueryPaymentContractsByIdPrefixRequest;
    };
    QueryPaymentContractsByIdPrefixResponse: {
        encode(message: _381.QueryPaymentContractsByIdPrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _381.QueryPaymentContractsByIdPrefixResponse;
        fromJSON(object: any): _381.QueryPaymentContractsByIdPrefixResponse;
        toJSON(message: _381.QueryPaymentContractsByIdPrefixResponse): unknown;
        fromPartial(object: {
            paymentContracts?: {
                id?: string;
                paymentTemplateId?: string;
                creator?: string;
                payer?: string;
                recipients?: {
                    address?: string;
                    percentage?: string;
                }[];
                cumulativePay?: {
                    denom?: string;
                    amount?: string;
                }[];
                currentRemainder?: {
                    denom?: string;
                    amount?: string;
                }[];
                canDeauthorise?: boolean;
                authorised?: boolean;
                discountId?: string;
            }[];
        }): _381.QueryPaymentContractsByIdPrefixResponse;
    };
    QuerySubscriptionRequest: {
        encode(message: _381.QuerySubscriptionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _381.QuerySubscriptionRequest;
        fromJSON(object: any): _381.QuerySubscriptionRequest;
        toJSON(message: _381.QuerySubscriptionRequest): unknown;
        fromPartial(object: {
            subscriptionId?: string;
        }): _381.QuerySubscriptionRequest;
    };
    QuerySubscriptionResponse: {
        encode(message: _381.QuerySubscriptionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _381.QuerySubscriptionResponse;
        fromJSON(object: any): _381.QuerySubscriptionResponse;
        toJSON(message: _381.QuerySubscriptionResponse): unknown;
        fromPartial(object: {
            subscription?: {
                id?: string;
                paymentContractId?: string;
                periodsSoFar?: string;
                maxPeriods?: string;
                periodsAccumulated?: string;
                period?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            };
        }): _381.QuerySubscriptionResponse;
    };
    PaymentTemplate: {
        encode(message: _380.PaymentTemplate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _380.PaymentTemplate;
        fromJSON(object: any): _380.PaymentTemplate;
        toJSON(message: _380.PaymentTemplate): unknown;
        fromPartial(object: {
            id?: string;
            paymentAmount?: {
                denom?: string;
                amount?: string;
            }[];
            paymentMinimum?: {
                denom?: string;
                amount?: string;
            }[];
            paymentMaximum?: {
                denom?: string;
                amount?: string;
            }[];
            discounts?: {
                id?: string;
                percent?: string;
            }[];
        }): _380.PaymentTemplate;
    };
    Discount: {
        encode(message: _380.Discount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _380.Discount;
        fromJSON(object: any): _380.Discount;
        toJSON(message: _380.Discount): unknown;
        fromPartial(object: {
            id?: string;
            percent?: string;
        }): _380.Discount;
    };
    DistributionShare: {
        encode(message: _380.DistributionShare, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _380.DistributionShare;
        fromJSON(object: any): _380.DistributionShare;
        toJSON(message: _380.DistributionShare): unknown;
        fromPartial(object: {
            address?: string;
            percentage?: string;
        }): _380.DistributionShare;
    };
    PaymentContract: {
        encode(message: _380.PaymentContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _380.PaymentContract;
        fromJSON(object: any): _380.PaymentContract;
        toJSON(message: _380.PaymentContract): unknown;
        fromPartial(object: {
            id?: string;
            paymentTemplateId?: string;
            creator?: string;
            payer?: string;
            recipients?: {
                address?: string;
                percentage?: string;
            }[];
            cumulativePay?: {
                denom?: string;
                amount?: string;
            }[];
            currentRemainder?: {
                denom?: string;
                amount?: string;
            }[];
            canDeauthorise?: boolean;
            authorised?: boolean;
            discountId?: string;
        }): _380.PaymentContract;
    };
    Subscription: {
        encode(message: _380.Subscription, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _380.Subscription;
        fromJSON(object: any): _380.Subscription;
        toJSON(message: _380.Subscription): unknown;
        fromPartial(object: {
            id?: string;
            paymentContractId?: string;
            periodsSoFar?: string;
            maxPeriods?: string;
            periodsAccumulated?: string;
            period?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }): _380.Subscription;
    };
    BlockPeriod: {
        encode(message: _380.BlockPeriod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _380.BlockPeriod;
        fromJSON(object: any): _380.BlockPeriod;
        toJSON(message: _380.BlockPeriod): unknown;
        fromPartial(object: {
            periodLength?: any;
            periodStartBlock?: any;
        }): _380.BlockPeriod;
    };
    TimePeriod: {
        encode(message: _380.TimePeriod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _380.TimePeriod;
        fromJSON(object: any): _380.TimePeriod;
        toJSON(message: _380.TimePeriod): unknown;
        fromPartial(object: {
            periodDurationNs?: string;
            periodStartTime?: Date;
        }): _380.TimePeriod;
    };
    TestPeriod: {
        encode(message: _380.TestPeriod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _380.TestPeriod;
        fromJSON(object: any): _380.TestPeriod;
        toJSON(message: _380.TestPeriod): unknown;
        fromPartial(object: {
            periodLength?: any;
            periodStartBlock?: any;
        }): _380.TestPeriod;
    };
    GenesisState: {
        encode(message: _379.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _379.GenesisState;
        fromJSON(object: any): _379.GenesisState;
        toJSON(message: _379.GenesisState): unknown;
        fromPartial(object: {
            paymentTemplates?: {
                id?: string;
                paymentAmount?: {
                    denom?: string;
                    amount?: string;
                }[];
                paymentMinimum?: {
                    denom?: string;
                    amount?: string;
                }[];
                paymentMaximum?: {
                    denom?: string;
                    amount?: string;
                }[];
                discounts?: {
                    id?: string;
                    percent?: string;
                }[];
            }[];
            paymentContracts?: {
                id?: string;
                paymentTemplateId?: string;
                creator?: string;
                payer?: string;
                recipients?: {
                    address?: string;
                    percentage?: string;
                }[];
                cumulativePay?: {
                    denom?: string;
                    amount?: string;
                }[];
                currentRemainder?: {
                    denom?: string;
                    amount?: string;
                }[];
                canDeauthorise?: boolean;
                authorised?: boolean;
                discountId?: string;
            }[];
            subscriptions?: {
                id?: string;
                paymentContractId?: string;
                periodsSoFar?: string;
                maxPeriods?: string;
                periodsAccumulated?: string;
                period?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            }[];
        }): _379.GenesisState;
    };
};
