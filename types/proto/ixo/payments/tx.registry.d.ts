import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSetPaymentContractAuthorisation, MsgCreatePaymentTemplate, MsgCreatePaymentContract, MsgCreateSubscription, MsgGrantDiscount, MsgRevokeDiscount, MsgEffectPayment } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        setPaymentContractAuthorisation(value: MsgSetPaymentContractAuthorisation): {
            typeUrl: string;
            value: Uint8Array;
        };
        createPaymentTemplate(value: MsgCreatePaymentTemplate): {
            typeUrl: string;
            value: Uint8Array;
        };
        createPaymentContract(value: MsgCreatePaymentContract): {
            typeUrl: string;
            value: Uint8Array;
        };
        createSubscription(value: MsgCreateSubscription): {
            typeUrl: string;
            value: Uint8Array;
        };
        grantDiscount(value: MsgGrantDiscount): {
            typeUrl: string;
            value: Uint8Array;
        };
        revokeDiscount(value: MsgRevokeDiscount): {
            typeUrl: string;
            value: Uint8Array;
        };
        effectPayment(value: MsgEffectPayment): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        setPaymentContractAuthorisation(value: MsgSetPaymentContractAuthorisation): {
            typeUrl: string;
            value: MsgSetPaymentContractAuthorisation;
        };
        createPaymentTemplate(value: MsgCreatePaymentTemplate): {
            typeUrl: string;
            value: MsgCreatePaymentTemplate;
        };
        createPaymentContract(value: MsgCreatePaymentContract): {
            typeUrl: string;
            value: MsgCreatePaymentContract;
        };
        createSubscription(value: MsgCreateSubscription): {
            typeUrl: string;
            value: MsgCreateSubscription;
        };
        grantDiscount(value: MsgGrantDiscount): {
            typeUrl: string;
            value: MsgGrantDiscount;
        };
        revokeDiscount(value: MsgRevokeDiscount): {
            typeUrl: string;
            value: MsgRevokeDiscount;
        };
        effectPayment(value: MsgEffectPayment): {
            typeUrl: string;
            value: MsgEffectPayment;
        };
    };
    toJSON: {
        setPaymentContractAuthorisation(value: MsgSetPaymentContractAuthorisation): {
            typeUrl: string;
            value: unknown;
        };
        createPaymentTemplate(value: MsgCreatePaymentTemplate): {
            typeUrl: string;
            value: unknown;
        };
        createPaymentContract(value: MsgCreatePaymentContract): {
            typeUrl: string;
            value: unknown;
        };
        createSubscription(value: MsgCreateSubscription): {
            typeUrl: string;
            value: unknown;
        };
        grantDiscount(value: MsgGrantDiscount): {
            typeUrl: string;
            value: unknown;
        };
        revokeDiscount(value: MsgRevokeDiscount): {
            typeUrl: string;
            value: unknown;
        };
        effectPayment(value: MsgEffectPayment): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        setPaymentContractAuthorisation(value: any): {
            typeUrl: string;
            value: MsgSetPaymentContractAuthorisation;
        };
        createPaymentTemplate(value: any): {
            typeUrl: string;
            value: MsgCreatePaymentTemplate;
        };
        createPaymentContract(value: any): {
            typeUrl: string;
            value: MsgCreatePaymentContract;
        };
        createSubscription(value: any): {
            typeUrl: string;
            value: MsgCreateSubscription;
        };
        grantDiscount(value: any): {
            typeUrl: string;
            value: MsgGrantDiscount;
        };
        revokeDiscount(value: any): {
            typeUrl: string;
            value: MsgRevokeDiscount;
        };
        effectPayment(value: any): {
            typeUrl: string;
            value: MsgEffectPayment;
        };
    };
    fromPartial: {
        setPaymentContractAuthorisation(value: MsgSetPaymentContractAuthorisation): {
            typeUrl: string;
            value: MsgSetPaymentContractAuthorisation;
        };
        createPaymentTemplate(value: MsgCreatePaymentTemplate): {
            typeUrl: string;
            value: MsgCreatePaymentTemplate;
        };
        createPaymentContract(value: MsgCreatePaymentContract): {
            typeUrl: string;
            value: MsgCreatePaymentContract;
        };
        createSubscription(value: MsgCreateSubscription): {
            typeUrl: string;
            value: MsgCreateSubscription;
        };
        grantDiscount(value: MsgGrantDiscount): {
            typeUrl: string;
            value: MsgGrantDiscount;
        };
        revokeDiscount(value: MsgRevokeDiscount): {
            typeUrl: string;
            value: MsgRevokeDiscount;
        };
        effectPayment(value: MsgEffectPayment): {
            typeUrl: string;
            value: MsgEffectPayment;
        };
    };
};
