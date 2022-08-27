import { PaymentTemplate, DistributionShare, Discount } from "./payments";
import { Any } from "../../google/protobuf/any";
import { AminoMsg } from "@cosmjs/amino";
import { Coin } from "../../cosmos/base/v1beta1/coin";
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
export const AminoConverter = {
  "/payments.MsgSetPaymentContractAuthorisation": {
    aminoType: "/payments.MsgSetPaymentContractAuthorisation",
    toAmino: ({
      paymentContractId,
      payerDid,
      authorised
    }: MsgSetPaymentContractAuthorisation): AminoMsgSetPaymentContractAuthorisation["value"] => {
      return {
        payment_contract_id: paymentContractId,
        payer_did: payerDid,
        authorised
      };
    },
    fromAmino: ({
      payment_contract_id,
      payer_did,
      authorised
    }: AminoMsgSetPaymentContractAuthorisation["value"]): MsgSetPaymentContractAuthorisation => {
      return {
        paymentContractId: payment_contract_id,
        payerDid: payer_did,
        authorised
      };
    }
  },
  "/payments.MsgCreatePaymentTemplate": {
    aminoType: "/payments.MsgCreatePaymentTemplate",
    toAmino: ({
      creatorDid,
      paymentTemplate
    }: MsgCreatePaymentTemplate): AminoMsgCreatePaymentTemplate["value"] => {
      return {
        creator_did: creatorDid,
        payment_template: {
          id: paymentTemplate.id,
          payment_amount: paymentTemplate.paymentAmount.map(el0 => ({
            denom: el0.denom,
            amount: el0.amount
          })),
          payment_minimum: paymentTemplate.paymentMinimum.map(el0 => ({
            denom: el0.denom,
            amount: el0.amount
          })),
          payment_maximum: paymentTemplate.paymentMaximum.map(el0 => ({
            denom: el0.denom,
            amount: el0.amount
          })),
          discounts: paymentTemplate.discounts.map(el0 => ({
            id: el0.id,
            percent: el0.percent
          }))
        }
      };
    },
    fromAmino: ({
      creator_did,
      payment_template
    }: AminoMsgCreatePaymentTemplate["value"]): MsgCreatePaymentTemplate => {
      return {
        creatorDid: creator_did,
        paymentTemplate: {
          id: payment_template.id,
          paymentAmount: payment_template.payment_amount.map(el1 => ({
            denom: el1.denom,
            amount: el1.amount
          })),
          paymentMinimum: payment_template.payment_minimum.map(el1 => ({
            denom: el1.denom,
            amount: el1.amount
          })),
          paymentMaximum: payment_template.payment_maximum.map(el1 => ({
            denom: el1.denom,
            amount: el1.amount
          })),
          discounts: payment_template.discounts.map(el1 => ({
            id: el1.id,
            percent: el1.percent
          }))
        }
      };
    }
  },
  "/payments.MsgCreatePaymentContract": {
    aminoType: "/payments.MsgCreatePaymentContract",
    toAmino: ({
      creatorDid,
      paymentTemplateId,
      paymentContractId,
      payer,
      recipients,
      canDeauthorise,
      discountId
    }: MsgCreatePaymentContract): AminoMsgCreatePaymentContract["value"] => {
      return {
        creator_did: creatorDid,
        payment_template_id: paymentTemplateId,
        payment_contract_id: paymentContractId,
        payer,
        recipients: recipients.map(el0 => ({
          address: el0.address,
          percentage: el0.percentage
        })),
        can_deauthorise: canDeauthorise,
        discount_id: discountId
      };
    },
    fromAmino: ({
      creator_did,
      payment_template_id,
      payment_contract_id,
      payer,
      recipients,
      can_deauthorise,
      discount_id
    }: AminoMsgCreatePaymentContract["value"]): MsgCreatePaymentContract => {
      return {
        creatorDid: creator_did,
        paymentTemplateId: payment_template_id,
        paymentContractId: payment_contract_id,
        payer,
        recipients: recipients.map(el0 => ({
          address: el0.address,
          percentage: el0.percentage
        })),
        canDeauthorise: can_deauthorise,
        discountId: discount_id
      };
    }
  },
  "/payments.MsgCreateSubscription": {
    aminoType: "/payments.MsgCreateSubscription",
    toAmino: ({
      creatorDid,
      subscriptionId,
      paymentContractId,
      maxPeriods,
      period
    }: MsgCreateSubscription): AminoMsgCreateSubscription["value"] => {
      return {
        creator_did: creatorDid,
        subscription_id: subscriptionId,
        payment_contract_id: paymentContractId,
        max_periods: maxPeriods,
        period: {
          type_url: period.typeUrl,
          value: period.value
        }
      };
    },
    fromAmino: ({
      creator_did,
      subscription_id,
      payment_contract_id,
      max_periods,
      period
    }: AminoMsgCreateSubscription["value"]): MsgCreateSubscription => {
      return {
        creatorDid: creator_did,
        subscriptionId: subscription_id,
        paymentContractId: payment_contract_id,
        maxPeriods: max_periods,
        period: {
          typeUrl: period.type_url,
          value: period.value
        }
      };
    }
  },
  "/payments.MsgGrantDiscount": {
    aminoType: "/payments.MsgGrantDiscount",
    toAmino: ({
      senderDid,
      paymentContractId,
      discountId,
      recipient
    }: MsgGrantDiscount): AminoMsgGrantDiscount["value"] => {
      return {
        sender_did: senderDid,
        payment_contract_id: paymentContractId,
        discount_id: discountId,
        recipient
      };
    },
    fromAmino: ({
      sender_did,
      payment_contract_id,
      discount_id,
      recipient
    }: AminoMsgGrantDiscount["value"]): MsgGrantDiscount => {
      return {
        senderDid: sender_did,
        paymentContractId: payment_contract_id,
        discountId: discount_id,
        recipient
      };
    }
  },
  "/payments.MsgRevokeDiscount": {
    aminoType: "/payments.MsgRevokeDiscount",
    toAmino: ({
      senderDid,
      paymentContractId,
      holder
    }: MsgRevokeDiscount): AminoMsgRevokeDiscount["value"] => {
      return {
        sender_did: senderDid,
        payment_contract_id: paymentContractId,
        holder
      };
    },
    fromAmino: ({
      sender_did,
      payment_contract_id,
      holder
    }: AminoMsgRevokeDiscount["value"]): MsgRevokeDiscount => {
      return {
        senderDid: sender_did,
        paymentContractId: payment_contract_id,
        holder
      };
    }
  },
  "/payments.MsgEffectPayment": {
    aminoType: "/payments.MsgEffectPayment",
    toAmino: ({
      senderDid,
      paymentContractId
    }: MsgEffectPayment): AminoMsgEffectPayment["value"] => {
      return {
        sender_did: senderDid,
        payment_contract_id: paymentContractId
      };
    },
    fromAmino: ({
      sender_did,
      payment_contract_id
    }: AminoMsgEffectPayment["value"]): MsgEffectPayment => {
      return {
        senderDid: sender_did,
        paymentContractId: payment_contract_id
      };
    }
  }
};