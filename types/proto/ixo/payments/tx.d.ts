import { PaymentTemplate, DistributionShare } from "./payments";
import { Any } from "../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** MsgSetPaymentContractAuthorisation defines a message for authorising or deauthorising a payment contract. */
export interface MsgSetPaymentContractAuthorisation {
    paymentContractId: string;
    payerDid: string;
    authorised: boolean;
}
/** MsgSetPaymentContractAuthorisationResponse defines the Msg/SetPaymentContractAuthorisation response type. */
export interface MsgSetPaymentContractAuthorisationResponse {
}
/** MsgCreatePaymentTemplate defines a message for creating a payment template. */
export interface MsgCreatePaymentTemplate {
    creatorDid: string;
    paymentTemplate: PaymentTemplate;
}
/** MsgCreatePaymentTemplateResponse defines the Msg/CreatePaymentTemplate response type. */
export interface MsgCreatePaymentTemplateResponse {
}
/** MsgCreatePaymentContract defines a message for creating a payment contract. */
export interface MsgCreatePaymentContract {
    creatorDid: string;
    paymentTemplateId: string;
    paymentContractId: string;
    payer: string;
    recipients: DistributionShare[];
    canDeauthorise: boolean;
    discountId: string;
}
/** MsgCreatePaymentContractResponse defines the Msg/CreatePaymentContract response type. */
export interface MsgCreatePaymentContractResponse {
}
/** MsgCreateSubscription defines a message for creating a subscription. */
export interface MsgCreateSubscription {
    creatorDid: string;
    subscriptionId: string;
    paymentContractId: string;
    maxPeriods: string;
    period: Any;
}
/** MsgCreateSubscriptionResponse defines the Msg/CreateSubscription response type. */
export interface MsgCreateSubscriptionResponse {
}
/** MsgGrantDiscount defines a message for granting a discount to a payer on a specific payment contract. */
export interface MsgGrantDiscount {
    senderDid: string;
    paymentContractId: string;
    discountId: string;
    recipient: string;
}
/** MsgGrantDiscountResponse defines the Msg/GrantDiscount response type. */
export interface MsgGrantDiscountResponse {
}
/** MsgRevokeDiscount defines a message for revoking a discount previously granted to a payer. */
export interface MsgRevokeDiscount {
    senderDid: string;
    paymentContractId: string;
    holder: string;
}
/** MsgRevokeDiscountResponse defines the Msg/RevokeDiscount response type. */
export interface MsgRevokeDiscountResponse {
}
/** MsgEffectPayment defines a message for putting a specific payment contract into effect. */
export interface MsgEffectPayment {
    senderDid: string;
    paymentContractId: string;
}
/** MsgEffectPaymentResponse defines the Msg/EffectPayment response type. */
export interface MsgEffectPaymentResponse {
}
export declare const MsgSetPaymentContractAuthorisation: {
    encode(message: MsgSetPaymentContractAuthorisation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetPaymentContractAuthorisation;
    fromJSON(object: any): MsgSetPaymentContractAuthorisation;
    toJSON(message: MsgSetPaymentContractAuthorisation): unknown;
    fromPartial(object: DeepPartial<MsgSetPaymentContractAuthorisation>): MsgSetPaymentContractAuthorisation;
};
export declare const MsgSetPaymentContractAuthorisationResponse: {
    encode(_: MsgSetPaymentContractAuthorisationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetPaymentContractAuthorisationResponse;
    fromJSON(_: any): MsgSetPaymentContractAuthorisationResponse;
    toJSON(_: MsgSetPaymentContractAuthorisationResponse): unknown;
    fromPartial(_: DeepPartial<MsgSetPaymentContractAuthorisationResponse>): MsgSetPaymentContractAuthorisationResponse;
};
export declare const MsgCreatePaymentTemplate: {
    encode(message: MsgCreatePaymentTemplate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePaymentTemplate;
    fromJSON(object: any): MsgCreatePaymentTemplate;
    toJSON(message: MsgCreatePaymentTemplate): unknown;
    fromPartial(object: DeepPartial<MsgCreatePaymentTemplate>): MsgCreatePaymentTemplate;
};
export declare const MsgCreatePaymentTemplateResponse: {
    encode(_: MsgCreatePaymentTemplateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePaymentTemplateResponse;
    fromJSON(_: any): MsgCreatePaymentTemplateResponse;
    toJSON(_: MsgCreatePaymentTemplateResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreatePaymentTemplateResponse>): MsgCreatePaymentTemplateResponse;
};
export declare const MsgCreatePaymentContract: {
    encode(message: MsgCreatePaymentContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePaymentContract;
    fromJSON(object: any): MsgCreatePaymentContract;
    toJSON(message: MsgCreatePaymentContract): unknown;
    fromPartial(object: DeepPartial<MsgCreatePaymentContract>): MsgCreatePaymentContract;
};
export declare const MsgCreatePaymentContractResponse: {
    encode(_: MsgCreatePaymentContractResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePaymentContractResponse;
    fromJSON(_: any): MsgCreatePaymentContractResponse;
    toJSON(_: MsgCreatePaymentContractResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreatePaymentContractResponse>): MsgCreatePaymentContractResponse;
};
export declare const MsgCreateSubscription: {
    encode(message: MsgCreateSubscription, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateSubscription;
    fromJSON(object: any): MsgCreateSubscription;
    toJSON(message: MsgCreateSubscription): unknown;
    fromPartial(object: DeepPartial<MsgCreateSubscription>): MsgCreateSubscription;
};
export declare const MsgCreateSubscriptionResponse: {
    encode(_: MsgCreateSubscriptionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateSubscriptionResponse;
    fromJSON(_: any): MsgCreateSubscriptionResponse;
    toJSON(_: MsgCreateSubscriptionResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateSubscriptionResponse>): MsgCreateSubscriptionResponse;
};
export declare const MsgGrantDiscount: {
    encode(message: MsgGrantDiscount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgGrantDiscount;
    fromJSON(object: any): MsgGrantDiscount;
    toJSON(message: MsgGrantDiscount): unknown;
    fromPartial(object: DeepPartial<MsgGrantDiscount>): MsgGrantDiscount;
};
export declare const MsgGrantDiscountResponse: {
    encode(_: MsgGrantDiscountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgGrantDiscountResponse;
    fromJSON(_: any): MsgGrantDiscountResponse;
    toJSON(_: MsgGrantDiscountResponse): unknown;
    fromPartial(_: DeepPartial<MsgGrantDiscountResponse>): MsgGrantDiscountResponse;
};
export declare const MsgRevokeDiscount: {
    encode(message: MsgRevokeDiscount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeDiscount;
    fromJSON(object: any): MsgRevokeDiscount;
    toJSON(message: MsgRevokeDiscount): unknown;
    fromPartial(object: DeepPartial<MsgRevokeDiscount>): MsgRevokeDiscount;
};
export declare const MsgRevokeDiscountResponse: {
    encode(_: MsgRevokeDiscountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeDiscountResponse;
    fromJSON(_: any): MsgRevokeDiscountResponse;
    toJSON(_: MsgRevokeDiscountResponse): unknown;
    fromPartial(_: DeepPartial<MsgRevokeDiscountResponse>): MsgRevokeDiscountResponse;
};
export declare const MsgEffectPayment: {
    encode(message: MsgEffectPayment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgEffectPayment;
    fromJSON(object: any): MsgEffectPayment;
    toJSON(message: MsgEffectPayment): unknown;
    fromPartial(object: DeepPartial<MsgEffectPayment>): MsgEffectPayment;
};
export declare const MsgEffectPaymentResponse: {
    encode(_: MsgEffectPaymentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgEffectPaymentResponse;
    fromJSON(_: any): MsgEffectPaymentResponse;
    toJSON(_: MsgEffectPaymentResponse): unknown;
    fromPartial(_: DeepPartial<MsgEffectPaymentResponse>): MsgEffectPaymentResponse;
};
