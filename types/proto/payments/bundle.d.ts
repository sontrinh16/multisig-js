import * as _447 from "../ixo/payments/genesis";
import * as _448 from "../ixo/payments/payments";
import * as _449 from "../ixo/payments/query";
import * as _450 from "../ixo/payments/tx";
export declare const payments: {
    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
    MessageComposer: {
        encoded: {
            setPaymentContractAuthorisation(value: _450.MsgSetPaymentContractAuthorisation): {
                typeUrl: string;
                value: Uint8Array;
            };
            createPaymentTemplate(value: _450.MsgCreatePaymentTemplate): {
                typeUrl: string;
                value: Uint8Array;
            };
            createPaymentContract(value: _450.MsgCreatePaymentContract): {
                typeUrl: string;
                value: Uint8Array;
            };
            createSubscription(value: _450.MsgCreateSubscription): {
                typeUrl: string;
                value: Uint8Array;
            };
            grantDiscount(value: _450.MsgGrantDiscount): {
                typeUrl: string;
                value: Uint8Array;
            };
            revokeDiscount(value: _450.MsgRevokeDiscount): {
                typeUrl: string;
                value: Uint8Array;
            };
            effectPayment(value: _450.MsgEffectPayment): {
                typeUrl: string;
                value: Uint8Array;
            };
        };
        withTypeUrl: {
            setPaymentContractAuthorisation(value: _450.MsgSetPaymentContractAuthorisation): {
                typeUrl: string;
                value: _450.MsgSetPaymentContractAuthorisation;
            };
            createPaymentTemplate(value: _450.MsgCreatePaymentTemplate): {
                typeUrl: string;
                value: _450.MsgCreatePaymentTemplate;
            };
            createPaymentContract(value: _450.MsgCreatePaymentContract): {
                typeUrl: string;
                value: _450.MsgCreatePaymentContract;
            };
            createSubscription(value: _450.MsgCreateSubscription): {
                typeUrl: string;
                value: _450.MsgCreateSubscription;
            };
            grantDiscount(value: _450.MsgGrantDiscount): {
                typeUrl: string;
                value: _450.MsgGrantDiscount;
            };
            revokeDiscount(value: _450.MsgRevokeDiscount): {
                typeUrl: string;
                value: _450.MsgRevokeDiscount;
            };
            effectPayment(value: _450.MsgEffectPayment): {
                typeUrl: string;
                value: _450.MsgEffectPayment;
            };
        };
        toJSON: {
            setPaymentContractAuthorisation(value: _450.MsgSetPaymentContractAuthorisation): {
                typeUrl: string;
                value: unknown;
            };
            createPaymentTemplate(value: _450.MsgCreatePaymentTemplate): {
                typeUrl: string;
                value: unknown;
            };
            createPaymentContract(value: _450.MsgCreatePaymentContract): {
                typeUrl: string;
                value: unknown;
            };
            createSubscription(value: _450.MsgCreateSubscription): {
                typeUrl: string;
                value: unknown;
            };
            grantDiscount(value: _450.MsgGrantDiscount): {
                typeUrl: string;
                value: unknown;
            };
            revokeDiscount(value: _450.MsgRevokeDiscount): {
                typeUrl: string;
                value: unknown;
            };
            effectPayment(value: _450.MsgEffectPayment): {
                typeUrl: string;
                value: unknown;
            };
        };
        fromJSON: {
            setPaymentContractAuthorisation(value: any): {
                typeUrl: string;
                value: _450.MsgSetPaymentContractAuthorisation;
            };
            createPaymentTemplate(value: any): {
                typeUrl: string;
                value: _450.MsgCreatePaymentTemplate;
            };
            createPaymentContract(value: any): {
                typeUrl: string;
                value: _450.MsgCreatePaymentContract;
            };
            createSubscription(value: any): {
                typeUrl: string;
                value: _450.MsgCreateSubscription;
            };
            grantDiscount(value: any): {
                typeUrl: string;
                value: _450.MsgGrantDiscount;
            };
            revokeDiscount(value: any): {
                typeUrl: string;
                value: _450.MsgRevokeDiscount;
            };
            effectPayment(value: any): {
                typeUrl: string;
                value: _450.MsgEffectPayment;
            };
        };
        fromPartial: {
            setPaymentContractAuthorisation(value: _450.MsgSetPaymentContractAuthorisation): {
                typeUrl: string;
                value: _450.MsgSetPaymentContractAuthorisation;
            };
            createPaymentTemplate(value: _450.MsgCreatePaymentTemplate): {
                typeUrl: string;
                value: _450.MsgCreatePaymentTemplate;
            };
            createPaymentContract(value: _450.MsgCreatePaymentContract): {
                typeUrl: string;
                value: _450.MsgCreatePaymentContract;
            };
            createSubscription(value: _450.MsgCreateSubscription): {
                typeUrl: string;
                value: _450.MsgCreateSubscription;
            };
            grantDiscount(value: _450.MsgGrantDiscount): {
                typeUrl: string;
                value: _450.MsgGrantDiscount;
            };
            revokeDiscount(value: _450.MsgRevokeDiscount): {
                typeUrl: string;
                value: _450.MsgRevokeDiscount;
            };
            effectPayment(value: _450.MsgEffectPayment): {
                typeUrl: string;
                value: _450.MsgEffectPayment;
            };
        };
    };
    AminoConverter: {
        "/payments.MsgSetPaymentContractAuthorisation": {
            aminoType: string;
            toAmino: ({ paymentContractId, payerDid, authorised }: _450.MsgSetPaymentContractAuthorisation) => {
                payment_contract_id: string;
                payer_did: string;
                authorised: boolean;
            };
            fromAmino: ({ payment_contract_id, payer_did, authorised }: {
                payment_contract_id: string;
                payer_did: string;
                authorised: boolean;
            }) => _450.MsgSetPaymentContractAuthorisation;
        };
        "/payments.MsgCreatePaymentTemplate": {
            aminoType: string;
            toAmino: ({ creatorDid, paymentTemplate }: _450.MsgCreatePaymentTemplate) => {
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
            }) => _450.MsgCreatePaymentTemplate;
        };
        "/payments.MsgCreatePaymentContract": {
            aminoType: string;
            toAmino: ({ creatorDid, paymentTemplateId, paymentContractId, payer, recipients, canDeauthorise, discountId }: _450.MsgCreatePaymentContract) => {
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
            }) => _450.MsgCreatePaymentContract;
        };
        "/payments.MsgCreateSubscription": {
            aminoType: string;
            toAmino: ({ creatorDid, subscriptionId, paymentContractId, maxPeriods, period }: _450.MsgCreateSubscription) => {
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
            }) => _450.MsgCreateSubscription;
        };
        "/payments.MsgGrantDiscount": {
            aminoType: string;
            toAmino: ({ senderDid, paymentContractId, discountId, recipient }: _450.MsgGrantDiscount) => {
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
            }) => _450.MsgGrantDiscount;
        };
        "/payments.MsgRevokeDiscount": {
            aminoType: string;
            toAmino: ({ senderDid, paymentContractId, holder }: _450.MsgRevokeDiscount) => {
                sender_did: string;
                payment_contract_id: string;
                holder: string;
            };
            fromAmino: ({ sender_did, payment_contract_id, holder }: {
                sender_did: string;
                payment_contract_id: string;
                holder: string;
            }) => _450.MsgRevokeDiscount;
        };
        "/payments.MsgEffectPayment": {
            aminoType: string;
            toAmino: ({ senderDid, paymentContractId }: _450.MsgEffectPayment) => {
                sender_did: string;
                payment_contract_id: string;
            };
            fromAmino: ({ sender_did, payment_contract_id }: {
                sender_did: string;
                payment_contract_id: string;
            }) => _450.MsgEffectPayment;
        };
    };
    MsgSetPaymentContractAuthorisation: {
        encode(message: _450.MsgSetPaymentContractAuthorisation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _450.MsgSetPaymentContractAuthorisation;
        fromJSON(object: any): _450.MsgSetPaymentContractAuthorisation;
        toJSON(message: _450.MsgSetPaymentContractAuthorisation): unknown;
        fromPartial(object: {
            paymentContractId?: string;
            payerDid?: string;
            authorised?: boolean;
        }): _450.MsgSetPaymentContractAuthorisation;
    };
    MsgSetPaymentContractAuthorisationResponse: {
        encode(_: _450.MsgSetPaymentContractAuthorisationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _450.MsgSetPaymentContractAuthorisationResponse;
        fromJSON(_: any): _450.MsgSetPaymentContractAuthorisationResponse;
        toJSON(_: _450.MsgSetPaymentContractAuthorisationResponse): unknown;
        fromPartial(_: {}): _450.MsgSetPaymentContractAuthorisationResponse;
    };
    MsgCreatePaymentTemplate: {
        encode(message: _450.MsgCreatePaymentTemplate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _450.MsgCreatePaymentTemplate;
        fromJSON(object: any): _450.MsgCreatePaymentTemplate;
        toJSON(message: _450.MsgCreatePaymentTemplate): unknown;
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
        }): _450.MsgCreatePaymentTemplate;
    };
    MsgCreatePaymentTemplateResponse: {
        encode(_: _450.MsgCreatePaymentTemplateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _450.MsgCreatePaymentTemplateResponse;
        fromJSON(_: any): _450.MsgCreatePaymentTemplateResponse;
        toJSON(_: _450.MsgCreatePaymentTemplateResponse): unknown;
        fromPartial(_: {}): _450.MsgCreatePaymentTemplateResponse;
    };
    MsgCreatePaymentContract: {
        encode(message: _450.MsgCreatePaymentContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _450.MsgCreatePaymentContract;
        fromJSON(object: any): _450.MsgCreatePaymentContract;
        toJSON(message: _450.MsgCreatePaymentContract): unknown;
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
        }): _450.MsgCreatePaymentContract;
    };
    MsgCreatePaymentContractResponse: {
        encode(_: _450.MsgCreatePaymentContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _450.MsgCreatePaymentContractResponse;
        fromJSON(_: any): _450.MsgCreatePaymentContractResponse;
        toJSON(_: _450.MsgCreatePaymentContractResponse): unknown;
        fromPartial(_: {}): _450.MsgCreatePaymentContractResponse;
    };
    MsgCreateSubscription: {
        encode(message: _450.MsgCreateSubscription, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _450.MsgCreateSubscription;
        fromJSON(object: any): _450.MsgCreateSubscription;
        toJSON(message: _450.MsgCreateSubscription): unknown;
        fromPartial(object: {
            creatorDid?: string;
            subscriptionId?: string;
            paymentContractId?: string;
            maxPeriods?: string;
            period?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }): _450.MsgCreateSubscription;
    };
    MsgCreateSubscriptionResponse: {
        encode(_: _450.MsgCreateSubscriptionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _450.MsgCreateSubscriptionResponse;
        fromJSON(_: any): _450.MsgCreateSubscriptionResponse;
        toJSON(_: _450.MsgCreateSubscriptionResponse): unknown;
        fromPartial(_: {}): _450.MsgCreateSubscriptionResponse;
    };
    MsgGrantDiscount: {
        encode(message: _450.MsgGrantDiscount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _450.MsgGrantDiscount;
        fromJSON(object: any): _450.MsgGrantDiscount;
        toJSON(message: _450.MsgGrantDiscount): unknown;
        fromPartial(object: {
            senderDid?: string;
            paymentContractId?: string;
            discountId?: string;
            recipient?: string;
        }): _450.MsgGrantDiscount;
    };
    MsgGrantDiscountResponse: {
        encode(_: _450.MsgGrantDiscountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _450.MsgGrantDiscountResponse;
        fromJSON(_: any): _450.MsgGrantDiscountResponse;
        toJSON(_: _450.MsgGrantDiscountResponse): unknown;
        fromPartial(_: {}): _450.MsgGrantDiscountResponse;
    };
    MsgRevokeDiscount: {
        encode(message: _450.MsgRevokeDiscount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _450.MsgRevokeDiscount;
        fromJSON(object: any): _450.MsgRevokeDiscount;
        toJSON(message: _450.MsgRevokeDiscount): unknown;
        fromPartial(object: {
            senderDid?: string;
            paymentContractId?: string;
            holder?: string;
        }): _450.MsgRevokeDiscount;
    };
    MsgRevokeDiscountResponse: {
        encode(_: _450.MsgRevokeDiscountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _450.MsgRevokeDiscountResponse;
        fromJSON(_: any): _450.MsgRevokeDiscountResponse;
        toJSON(_: _450.MsgRevokeDiscountResponse): unknown;
        fromPartial(_: {}): _450.MsgRevokeDiscountResponse;
    };
    MsgEffectPayment: {
        encode(message: _450.MsgEffectPayment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _450.MsgEffectPayment;
        fromJSON(object: any): _450.MsgEffectPayment;
        toJSON(message: _450.MsgEffectPayment): unknown;
        fromPartial(object: {
            senderDid?: string;
            paymentContractId?: string;
        }): _450.MsgEffectPayment;
    };
    MsgEffectPaymentResponse: {
        encode(_: _450.MsgEffectPaymentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _450.MsgEffectPaymentResponse;
        fromJSON(_: any): _450.MsgEffectPaymentResponse;
        toJSON(_: _450.MsgEffectPaymentResponse): unknown;
        fromPartial(_: {}): _450.MsgEffectPaymentResponse;
    };
    QueryPaymentTemplateRequest: {
        encode(message: _449.QueryPaymentTemplateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _449.QueryPaymentTemplateRequest;
        fromJSON(object: any): _449.QueryPaymentTemplateRequest;
        toJSON(message: _449.QueryPaymentTemplateRequest): unknown;
        fromPartial(object: {
            paymentTemplateId?: string;
        }): _449.QueryPaymentTemplateRequest;
    };
    QueryPaymentTemplateResponse: {
        encode(message: _449.QueryPaymentTemplateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _449.QueryPaymentTemplateResponse;
        fromJSON(object: any): _449.QueryPaymentTemplateResponse;
        toJSON(message: _449.QueryPaymentTemplateResponse): unknown;
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
        }): _449.QueryPaymentTemplateResponse;
    };
    QueryPaymentContractRequest: {
        encode(message: _449.QueryPaymentContractRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _449.QueryPaymentContractRequest;
        fromJSON(object: any): _449.QueryPaymentContractRequest;
        toJSON(message: _449.QueryPaymentContractRequest): unknown;
        fromPartial(object: {
            paymentContractId?: string;
        }): _449.QueryPaymentContractRequest;
    };
    QueryPaymentContractResponse: {
        encode(message: _449.QueryPaymentContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _449.QueryPaymentContractResponse;
        fromJSON(object: any): _449.QueryPaymentContractResponse;
        toJSON(message: _449.QueryPaymentContractResponse): unknown;
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
        }): _449.QueryPaymentContractResponse;
    };
    QueryPaymentContractsByIdPrefixRequest: {
        encode(message: _449.QueryPaymentContractsByIdPrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _449.QueryPaymentContractsByIdPrefixRequest;
        fromJSON(object: any): _449.QueryPaymentContractsByIdPrefixRequest;
        toJSON(message: _449.QueryPaymentContractsByIdPrefixRequest): unknown;
        fromPartial(object: {
            paymentContractsIdPrefix?: string;
        }): _449.QueryPaymentContractsByIdPrefixRequest;
    };
    QueryPaymentContractsByIdPrefixResponse: {
        encode(message: _449.QueryPaymentContractsByIdPrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _449.QueryPaymentContractsByIdPrefixResponse;
        fromJSON(object: any): _449.QueryPaymentContractsByIdPrefixResponse;
        toJSON(message: _449.QueryPaymentContractsByIdPrefixResponse): unknown;
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
        }): _449.QueryPaymentContractsByIdPrefixResponse;
    };
    QuerySubscriptionRequest: {
        encode(message: _449.QuerySubscriptionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _449.QuerySubscriptionRequest;
        fromJSON(object: any): _449.QuerySubscriptionRequest;
        toJSON(message: _449.QuerySubscriptionRequest): unknown;
        fromPartial(object: {
            subscriptionId?: string;
        }): _449.QuerySubscriptionRequest;
    };
    QuerySubscriptionResponse: {
        encode(message: _449.QuerySubscriptionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _449.QuerySubscriptionResponse;
        fromJSON(object: any): _449.QuerySubscriptionResponse;
        toJSON(message: _449.QuerySubscriptionResponse): unknown;
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
        }): _449.QuerySubscriptionResponse;
    };
    PaymentTemplate: {
        encode(message: _448.PaymentTemplate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _448.PaymentTemplate;
        fromJSON(object: any): _448.PaymentTemplate;
        toJSON(message: _448.PaymentTemplate): unknown;
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
        }): _448.PaymentTemplate;
    };
    Discount: {
        encode(message: _448.Discount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _448.Discount;
        fromJSON(object: any): _448.Discount;
        toJSON(message: _448.Discount): unknown;
        fromPartial(object: {
            id?: string;
            percent?: string;
        }): _448.Discount;
    };
    DistributionShare: {
        encode(message: _448.DistributionShare, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _448.DistributionShare;
        fromJSON(object: any): _448.DistributionShare;
        toJSON(message: _448.DistributionShare): unknown;
        fromPartial(object: {
            address?: string;
            percentage?: string;
        }): _448.DistributionShare;
    };
    PaymentContract: {
        encode(message: _448.PaymentContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _448.PaymentContract;
        fromJSON(object: any): _448.PaymentContract;
        toJSON(message: _448.PaymentContract): unknown;
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
        }): _448.PaymentContract;
    };
    Subscription: {
        encode(message: _448.Subscription, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _448.Subscription;
        fromJSON(object: any): _448.Subscription;
        toJSON(message: _448.Subscription): unknown;
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
        }): _448.Subscription;
    };
    BlockPeriod: {
        encode(message: _448.BlockPeriod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _448.BlockPeriod;
        fromJSON(object: any): _448.BlockPeriod;
        toJSON(message: _448.BlockPeriod): unknown;
        fromPartial(object: {
            periodLength?: any;
            periodStartBlock?: any;
        }): _448.BlockPeriod;
    };
    TimePeriod: {
        encode(message: _448.TimePeriod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _448.TimePeriod;
        fromJSON(object: any): _448.TimePeriod;
        toJSON(message: _448.TimePeriod): unknown;
        fromPartial(object: {
            periodDurationNs?: {
                seconds?: any;
                nanos?: number;
            };
            periodStartTime?: {
                seconds?: any;
                nanos?: number;
            };
        }): _448.TimePeriod;
    };
    TestPeriod: {
        encode(message: _448.TestPeriod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _448.TestPeriod;
        fromJSON(object: any): _448.TestPeriod;
        toJSON(message: _448.TestPeriod): unknown;
        fromPartial(object: {
            periodLength?: any;
            periodStartBlock?: any;
        }): _448.TestPeriod;
    };
    GenesisState: {
        encode(message: _447.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _447.GenesisState;
        fromJSON(object: any): _447.GenesisState;
        toJSON(message: _447.GenesisState): unknown;
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
        }): _447.GenesisState;
    };
};
