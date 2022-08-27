import { AminoMsg } from "@cosmjs/amino";
import { MsgSetPaymentContractAuthorisation, MsgCreatePaymentTemplate, MsgCreatePaymentContract, MsgCreateSubscription, MsgGrantDiscount, MsgRevokeDiscount, MsgEffectPayment } from "./tx";
export interface AminoMsgSetPaymentContractAuthorisation extends AminoMsg {
    type: "/payments.MsgSetPaymentContractAuthorisation";
    value: {
        payment_contract_id: string;
        payer_did: string;
        authorised: boolean;
    };
}
export interface AminoMsgCreatePaymentTemplate extends AminoMsg {
    type: "/payments.MsgCreatePaymentTemplate";
    value: {
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
}
export interface AminoMsgCreatePaymentContract extends AminoMsg {
    type: "/payments.MsgCreatePaymentContract";
    value: {
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
}
export interface AminoMsgCreateSubscription extends AminoMsg {
    type: "/payments.MsgCreateSubscription";
    value: {
        creator_did: string;
        subscription_id: string;
        payment_contract_id: string;
        max_periods: string;
        period: {
            type_url: string;
            value: Uint8Array;
        };
    };
}
export interface AminoMsgGrantDiscount extends AminoMsg {
    type: "/payments.MsgGrantDiscount";
    value: {
        sender_did: string;
        payment_contract_id: string;
        discount_id: string;
        recipient: string;
    };
}
export interface AminoMsgRevokeDiscount extends AminoMsg {
    type: "/payments.MsgRevokeDiscount";
    value: {
        sender_did: string;
        payment_contract_id: string;
        holder: string;
    };
}
export interface AminoMsgEffectPayment extends AminoMsg {
    type: "/payments.MsgEffectPayment";
    value: {
        sender_did: string;
        payment_contract_id: string;
    };
}
export declare const AminoConverter: {
    "/payments.MsgSetPaymentContractAuthorisation": {
        aminoType: string;
        toAmino: ({ paymentContractId, payerDid, authorised }: MsgSetPaymentContractAuthorisation) => AminoMsgSetPaymentContractAuthorisation["value"];
        fromAmino: ({ payment_contract_id, payer_did, authorised }: AminoMsgSetPaymentContractAuthorisation["value"]) => MsgSetPaymentContractAuthorisation;
    };
    "/payments.MsgCreatePaymentTemplate": {
        aminoType: string;
        toAmino: ({ creatorDid, paymentTemplate }: MsgCreatePaymentTemplate) => AminoMsgCreatePaymentTemplate["value"];
        fromAmino: ({ creator_did, payment_template }: AminoMsgCreatePaymentTemplate["value"]) => MsgCreatePaymentTemplate;
    };
    "/payments.MsgCreatePaymentContract": {
        aminoType: string;
        toAmino: ({ creatorDid, paymentTemplateId, paymentContractId, payer, recipients, canDeauthorise, discountId }: MsgCreatePaymentContract) => AminoMsgCreatePaymentContract["value"];
        fromAmino: ({ creator_did, payment_template_id, payment_contract_id, payer, recipients, can_deauthorise, discount_id }: AminoMsgCreatePaymentContract["value"]) => MsgCreatePaymentContract;
    };
    "/payments.MsgCreateSubscription": {
        aminoType: string;
        toAmino: ({ creatorDid, subscriptionId, paymentContractId, maxPeriods, period }: MsgCreateSubscription) => AminoMsgCreateSubscription["value"];
        fromAmino: ({ creator_did, subscription_id, payment_contract_id, max_periods, period }: AminoMsgCreateSubscription["value"]) => MsgCreateSubscription;
    };
    "/payments.MsgGrantDiscount": {
        aminoType: string;
        toAmino: ({ senderDid, paymentContractId, discountId, recipient }: MsgGrantDiscount) => AminoMsgGrantDiscount["value"];
        fromAmino: ({ sender_did, payment_contract_id, discount_id, recipient }: AminoMsgGrantDiscount["value"]) => MsgGrantDiscount;
    };
    "/payments.MsgRevokeDiscount": {
        aminoType: string;
        toAmino: ({ senderDid, paymentContractId, holder }: MsgRevokeDiscount) => AminoMsgRevokeDiscount["value"];
        fromAmino: ({ sender_did, payment_contract_id, holder }: AminoMsgRevokeDiscount["value"]) => MsgRevokeDiscount;
    };
    "/payments.MsgEffectPayment": {
        aminoType: string;
        toAmino: ({ senderDid, paymentContractId }: MsgEffectPayment) => AminoMsgEffectPayment["value"];
        fromAmino: ({ sender_did, payment_contract_id }: AminoMsgEffectPayment["value"]) => MsgEffectPayment;
    };
};
