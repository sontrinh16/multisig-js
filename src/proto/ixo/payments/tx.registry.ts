import { PaymentTemplate, DistributionShare } from "./payments";
import { Any } from "../../google/protobuf/any";
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSetPaymentContractAuthorisation, MsgCreatePaymentTemplate, MsgCreatePaymentContract, MsgCreateSubscription, MsgGrantDiscount, MsgRevokeDiscount, MsgEffectPayment } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/payments.MsgSetPaymentContractAuthorisation", MsgSetPaymentContractAuthorisation], ["/payments.MsgCreatePaymentTemplate", MsgCreatePaymentTemplate], ["/payments.MsgCreatePaymentContract", MsgCreatePaymentContract], ["/payments.MsgCreateSubscription", MsgCreateSubscription], ["/payments.MsgGrantDiscount", MsgGrantDiscount], ["/payments.MsgRevokeDiscount", MsgRevokeDiscount], ["/payments.MsgEffectPayment", MsgEffectPayment]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    setPaymentContractAuthorisation(value: MsgSetPaymentContractAuthorisation) {
      return {
        typeUrl: "/payments.MsgSetPaymentContractAuthorisation",
        value: MsgSetPaymentContractAuthorisation.encode(value).finish()
      };
    },

    createPaymentTemplate(value: MsgCreatePaymentTemplate) {
      return {
        typeUrl: "/payments.MsgCreatePaymentTemplate",
        value: MsgCreatePaymentTemplate.encode(value).finish()
      };
    },

    createPaymentContract(value: MsgCreatePaymentContract) {
      return {
        typeUrl: "/payments.MsgCreatePaymentContract",
        value: MsgCreatePaymentContract.encode(value).finish()
      };
    },

    createSubscription(value: MsgCreateSubscription) {
      return {
        typeUrl: "/payments.MsgCreateSubscription",
        value: MsgCreateSubscription.encode(value).finish()
      };
    },

    grantDiscount(value: MsgGrantDiscount) {
      return {
        typeUrl: "/payments.MsgGrantDiscount",
        value: MsgGrantDiscount.encode(value).finish()
      };
    },

    revokeDiscount(value: MsgRevokeDiscount) {
      return {
        typeUrl: "/payments.MsgRevokeDiscount",
        value: MsgRevokeDiscount.encode(value).finish()
      };
    },

    effectPayment(value: MsgEffectPayment) {
      return {
        typeUrl: "/payments.MsgEffectPayment",
        value: MsgEffectPayment.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    setPaymentContractAuthorisation(value: MsgSetPaymentContractAuthorisation) {
      return {
        typeUrl: "/payments.MsgSetPaymentContractAuthorisation",
        value
      };
    },

    createPaymentTemplate(value: MsgCreatePaymentTemplate) {
      return {
        typeUrl: "/payments.MsgCreatePaymentTemplate",
        value
      };
    },

    createPaymentContract(value: MsgCreatePaymentContract) {
      return {
        typeUrl: "/payments.MsgCreatePaymentContract",
        value
      };
    },

    createSubscription(value: MsgCreateSubscription) {
      return {
        typeUrl: "/payments.MsgCreateSubscription",
        value
      };
    },

    grantDiscount(value: MsgGrantDiscount) {
      return {
        typeUrl: "/payments.MsgGrantDiscount",
        value
      };
    },

    revokeDiscount(value: MsgRevokeDiscount) {
      return {
        typeUrl: "/payments.MsgRevokeDiscount",
        value
      };
    },

    effectPayment(value: MsgEffectPayment) {
      return {
        typeUrl: "/payments.MsgEffectPayment",
        value
      };
    }

  },
  toJSON: {
    setPaymentContractAuthorisation(value: MsgSetPaymentContractAuthorisation) {
      return {
        typeUrl: "/payments.MsgSetPaymentContractAuthorisation",
        value: MsgSetPaymentContractAuthorisation.toJSON(value)
      };
    },

    createPaymentTemplate(value: MsgCreatePaymentTemplate) {
      return {
        typeUrl: "/payments.MsgCreatePaymentTemplate",
        value: MsgCreatePaymentTemplate.toJSON(value)
      };
    },

    createPaymentContract(value: MsgCreatePaymentContract) {
      return {
        typeUrl: "/payments.MsgCreatePaymentContract",
        value: MsgCreatePaymentContract.toJSON(value)
      };
    },

    createSubscription(value: MsgCreateSubscription) {
      return {
        typeUrl: "/payments.MsgCreateSubscription",
        value: MsgCreateSubscription.toJSON(value)
      };
    },

    grantDiscount(value: MsgGrantDiscount) {
      return {
        typeUrl: "/payments.MsgGrantDiscount",
        value: MsgGrantDiscount.toJSON(value)
      };
    },

    revokeDiscount(value: MsgRevokeDiscount) {
      return {
        typeUrl: "/payments.MsgRevokeDiscount",
        value: MsgRevokeDiscount.toJSON(value)
      };
    },

    effectPayment(value: MsgEffectPayment) {
      return {
        typeUrl: "/payments.MsgEffectPayment",
        value: MsgEffectPayment.toJSON(value)
      };
    }

  },
  fromJSON: {
    setPaymentContractAuthorisation(value: any) {
      return {
        typeUrl: "/payments.MsgSetPaymentContractAuthorisation",
        value: MsgSetPaymentContractAuthorisation.fromJSON(value)
      };
    },

    createPaymentTemplate(value: any) {
      return {
        typeUrl: "/payments.MsgCreatePaymentTemplate",
        value: MsgCreatePaymentTemplate.fromJSON(value)
      };
    },

    createPaymentContract(value: any) {
      return {
        typeUrl: "/payments.MsgCreatePaymentContract",
        value: MsgCreatePaymentContract.fromJSON(value)
      };
    },

    createSubscription(value: any) {
      return {
        typeUrl: "/payments.MsgCreateSubscription",
        value: MsgCreateSubscription.fromJSON(value)
      };
    },

    grantDiscount(value: any) {
      return {
        typeUrl: "/payments.MsgGrantDiscount",
        value: MsgGrantDiscount.fromJSON(value)
      };
    },

    revokeDiscount(value: any) {
      return {
        typeUrl: "/payments.MsgRevokeDiscount",
        value: MsgRevokeDiscount.fromJSON(value)
      };
    },

    effectPayment(value: any) {
      return {
        typeUrl: "/payments.MsgEffectPayment",
        value: MsgEffectPayment.fromJSON(value)
      };
    }

  },
  fromPartial: {
    setPaymentContractAuthorisation(value: MsgSetPaymentContractAuthorisation) {
      return {
        typeUrl: "/payments.MsgSetPaymentContractAuthorisation",
        value: MsgSetPaymentContractAuthorisation.fromPartial(value)
      };
    },

    createPaymentTemplate(value: MsgCreatePaymentTemplate) {
      return {
        typeUrl: "/payments.MsgCreatePaymentTemplate",
        value: MsgCreatePaymentTemplate.fromPartial(value)
      };
    },

    createPaymentContract(value: MsgCreatePaymentContract) {
      return {
        typeUrl: "/payments.MsgCreatePaymentContract",
        value: MsgCreatePaymentContract.fromPartial(value)
      };
    },

    createSubscription(value: MsgCreateSubscription) {
      return {
        typeUrl: "/payments.MsgCreateSubscription",
        value: MsgCreateSubscription.fromPartial(value)
      };
    },

    grantDiscount(value: MsgGrantDiscount) {
      return {
        typeUrl: "/payments.MsgGrantDiscount",
        value: MsgGrantDiscount.fromPartial(value)
      };
    },

    revokeDiscount(value: MsgRevokeDiscount) {
      return {
        typeUrl: "/payments.MsgRevokeDiscount",
        value: MsgRevokeDiscount.fromPartial(value)
      };
    },

    effectPayment(value: MsgEffectPayment) {
      return {
        typeUrl: "/payments.MsgEffectPayment",
        value: MsgEffectPayment.fromPartial(value)
      };
    }

  }
};