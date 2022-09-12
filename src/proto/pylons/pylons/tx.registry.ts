import { PaymentInfo } from "./payment_info";
import { RedeemInfo } from "./redeem_info";
import { ItemRef } from "./trade";
import { CoinInput, ItemInput, EntriesList, WeightedOutputs } from "./recipe";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgAppleIap, MsgAddStripeRefund, MsgBurnDebtToken, MsgUpdateAccount, MsgFulfillTrade, MsgCreateTrade, MsgCancelTrade, MsgCompleteExecutionEarly, MsgTransferCookbook, MsgGoogleInAppPurchaseGetCoins, MsgCreateAccount, MsgSendItems, MsgExecuteRecipe, MsgSetItemString, MsgCreateRecipe, MsgUpdateRecipe, MsgCreateCookbook, MsgUpdateCookbook } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/pylons.pylons.MsgAppleIap", MsgAppleIap], ["/pylons.pylons.MsgAddStripeRefund", MsgAddStripeRefund], ["/pylons.pylons.MsgBurnDebtToken", MsgBurnDebtToken], ["/pylons.pylons.MsgUpdateAccount", MsgUpdateAccount], ["/pylons.pylons.MsgFulfillTrade", MsgFulfillTrade], ["/pylons.pylons.MsgCreateTrade", MsgCreateTrade], ["/pylons.pylons.MsgCancelTrade", MsgCancelTrade], ["/pylons.pylons.MsgCompleteExecutionEarly", MsgCompleteExecutionEarly], ["/pylons.pylons.MsgTransferCookbook", MsgTransferCookbook], ["/pylons.pylons.MsgGoogleInAppPurchaseGetCoins", MsgGoogleInAppPurchaseGetCoins], ["/pylons.pylons.MsgCreateAccount", MsgCreateAccount], ["/pylons.pylons.MsgSendItems", MsgSendItems], ["/pylons.pylons.MsgExecuteRecipe", MsgExecuteRecipe], ["/pylons.pylons.MsgSetItemString", MsgSetItemString], ["/pylons.pylons.MsgCreateRecipe", MsgCreateRecipe], ["/pylons.pylons.MsgUpdateRecipe", MsgUpdateRecipe], ["/pylons.pylons.MsgCreateCookbook", MsgCreateCookbook], ["/pylons.pylons.MsgUpdateCookbook", MsgUpdateCookbook]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    appleIap(value: MsgAppleIap) {
      return {
        typeUrl: "/pylons.pylons.MsgAppleIap",
        value: MsgAppleIap.encode(value).finish()
      };
    },

    addStripeRefund(value: MsgAddStripeRefund) {
      return {
        typeUrl: "/pylons.pylons.MsgAddStripeRefund",
        value: MsgAddStripeRefund.encode(value).finish()
      };
    },

    burnDebtToken(value: MsgBurnDebtToken) {
      return {
        typeUrl: "/pylons.pylons.MsgBurnDebtToken",
        value: MsgBurnDebtToken.encode(value).finish()
      };
    },

    updateAccount(value: MsgUpdateAccount) {
      return {
        typeUrl: "/pylons.pylons.MsgUpdateAccount",
        value: MsgUpdateAccount.encode(value).finish()
      };
    },

    fulfillTrade(value: MsgFulfillTrade) {
      return {
        typeUrl: "/pylons.pylons.MsgFulfillTrade",
        value: MsgFulfillTrade.encode(value).finish()
      };
    },

    createTrade(value: MsgCreateTrade) {
      return {
        typeUrl: "/pylons.pylons.MsgCreateTrade",
        value: MsgCreateTrade.encode(value).finish()
      };
    },

    cancelTrade(value: MsgCancelTrade) {
      return {
        typeUrl: "/pylons.pylons.MsgCancelTrade",
        value: MsgCancelTrade.encode(value).finish()
      };
    },

    completeExecutionEarly(value: MsgCompleteExecutionEarly) {
      return {
        typeUrl: "/pylons.pylons.MsgCompleteExecutionEarly",
        value: MsgCompleteExecutionEarly.encode(value).finish()
      };
    },

    transferCookbook(value: MsgTransferCookbook) {
      return {
        typeUrl: "/pylons.pylons.MsgTransferCookbook",
        value: MsgTransferCookbook.encode(value).finish()
      };
    },

    googleInAppPurchaseGetCoins(value: MsgGoogleInAppPurchaseGetCoins) {
      return {
        typeUrl: "/pylons.pylons.MsgGoogleInAppPurchaseGetCoins",
        value: MsgGoogleInAppPurchaseGetCoins.encode(value).finish()
      };
    },

    createAccount(value: MsgCreateAccount) {
      return {
        typeUrl: "/pylons.pylons.MsgCreateAccount",
        value: MsgCreateAccount.encode(value).finish()
      };
    },

    sendItems(value: MsgSendItems) {
      return {
        typeUrl: "/pylons.pylons.MsgSendItems",
        value: MsgSendItems.encode(value).finish()
      };
    },

    executeRecipe(value: MsgExecuteRecipe) {
      return {
        typeUrl: "/pylons.pylons.MsgExecuteRecipe",
        value: MsgExecuteRecipe.encode(value).finish()
      };
    },

    setItemString(value: MsgSetItemString) {
      return {
        typeUrl: "/pylons.pylons.MsgSetItemString",
        value: MsgSetItemString.encode(value).finish()
      };
    },

    createRecipe(value: MsgCreateRecipe) {
      return {
        typeUrl: "/pylons.pylons.MsgCreateRecipe",
        value: MsgCreateRecipe.encode(value).finish()
      };
    },

    updateRecipe(value: MsgUpdateRecipe) {
      return {
        typeUrl: "/pylons.pylons.MsgUpdateRecipe",
        value: MsgUpdateRecipe.encode(value).finish()
      };
    },

    createCookbook(value: MsgCreateCookbook) {
      return {
        typeUrl: "/pylons.pylons.MsgCreateCookbook",
        value: MsgCreateCookbook.encode(value).finish()
      };
    },

    updateCookbook(value: MsgUpdateCookbook) {
      return {
        typeUrl: "/pylons.pylons.MsgUpdateCookbook",
        value: MsgUpdateCookbook.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    appleIap(value: MsgAppleIap) {
      return {
        typeUrl: "/pylons.pylons.MsgAppleIap",
        value
      };
    },

    addStripeRefund(value: MsgAddStripeRefund) {
      return {
        typeUrl: "/pylons.pylons.MsgAddStripeRefund",
        value
      };
    },

    burnDebtToken(value: MsgBurnDebtToken) {
      return {
        typeUrl: "/pylons.pylons.MsgBurnDebtToken",
        value
      };
    },

    updateAccount(value: MsgUpdateAccount) {
      return {
        typeUrl: "/pylons.pylons.MsgUpdateAccount",
        value
      };
    },

    fulfillTrade(value: MsgFulfillTrade) {
      return {
        typeUrl: "/pylons.pylons.MsgFulfillTrade",
        value
      };
    },

    createTrade(value: MsgCreateTrade) {
      return {
        typeUrl: "/pylons.pylons.MsgCreateTrade",
        value
      };
    },

    cancelTrade(value: MsgCancelTrade) {
      return {
        typeUrl: "/pylons.pylons.MsgCancelTrade",
        value
      };
    },

    completeExecutionEarly(value: MsgCompleteExecutionEarly) {
      return {
        typeUrl: "/pylons.pylons.MsgCompleteExecutionEarly",
        value
      };
    },

    transferCookbook(value: MsgTransferCookbook) {
      return {
        typeUrl: "/pylons.pylons.MsgTransferCookbook",
        value
      };
    },

    googleInAppPurchaseGetCoins(value: MsgGoogleInAppPurchaseGetCoins) {
      return {
        typeUrl: "/pylons.pylons.MsgGoogleInAppPurchaseGetCoins",
        value
      };
    },

    createAccount(value: MsgCreateAccount) {
      return {
        typeUrl: "/pylons.pylons.MsgCreateAccount",
        value
      };
    },

    sendItems(value: MsgSendItems) {
      return {
        typeUrl: "/pylons.pylons.MsgSendItems",
        value
      };
    },

    executeRecipe(value: MsgExecuteRecipe) {
      return {
        typeUrl: "/pylons.pylons.MsgExecuteRecipe",
        value
      };
    },

    setItemString(value: MsgSetItemString) {
      return {
        typeUrl: "/pylons.pylons.MsgSetItemString",
        value
      };
    },

    createRecipe(value: MsgCreateRecipe) {
      return {
        typeUrl: "/pylons.pylons.MsgCreateRecipe",
        value
      };
    },

    updateRecipe(value: MsgUpdateRecipe) {
      return {
        typeUrl: "/pylons.pylons.MsgUpdateRecipe",
        value
      };
    },

    createCookbook(value: MsgCreateCookbook) {
      return {
        typeUrl: "/pylons.pylons.MsgCreateCookbook",
        value
      };
    },

    updateCookbook(value: MsgUpdateCookbook) {
      return {
        typeUrl: "/pylons.pylons.MsgUpdateCookbook",
        value
      };
    }

  },
  toJSON: {
    appleIap(value: MsgAppleIap) {
      return {
        typeUrl: "/pylons.pylons.MsgAppleIap",
        value: MsgAppleIap.toJSON(value)
      };
    },

    addStripeRefund(value: MsgAddStripeRefund) {
      return {
        typeUrl: "/pylons.pylons.MsgAddStripeRefund",
        value: MsgAddStripeRefund.toJSON(value)
      };
    },

    burnDebtToken(value: MsgBurnDebtToken) {
      return {
        typeUrl: "/pylons.pylons.MsgBurnDebtToken",
        value: MsgBurnDebtToken.toJSON(value)
      };
    },

    updateAccount(value: MsgUpdateAccount) {
      return {
        typeUrl: "/pylons.pylons.MsgUpdateAccount",
        value: MsgUpdateAccount.toJSON(value)
      };
    },

    fulfillTrade(value: MsgFulfillTrade) {
      return {
        typeUrl: "/pylons.pylons.MsgFulfillTrade",
        value: MsgFulfillTrade.toJSON(value)
      };
    },

    createTrade(value: MsgCreateTrade) {
      return {
        typeUrl: "/pylons.pylons.MsgCreateTrade",
        value: MsgCreateTrade.toJSON(value)
      };
    },

    cancelTrade(value: MsgCancelTrade) {
      return {
        typeUrl: "/pylons.pylons.MsgCancelTrade",
        value: MsgCancelTrade.toJSON(value)
      };
    },

    completeExecutionEarly(value: MsgCompleteExecutionEarly) {
      return {
        typeUrl: "/pylons.pylons.MsgCompleteExecutionEarly",
        value: MsgCompleteExecutionEarly.toJSON(value)
      };
    },

    transferCookbook(value: MsgTransferCookbook) {
      return {
        typeUrl: "/pylons.pylons.MsgTransferCookbook",
        value: MsgTransferCookbook.toJSON(value)
      };
    },

    googleInAppPurchaseGetCoins(value: MsgGoogleInAppPurchaseGetCoins) {
      return {
        typeUrl: "/pylons.pylons.MsgGoogleInAppPurchaseGetCoins",
        value: MsgGoogleInAppPurchaseGetCoins.toJSON(value)
      };
    },

    createAccount(value: MsgCreateAccount) {
      return {
        typeUrl: "/pylons.pylons.MsgCreateAccount",
        value: MsgCreateAccount.toJSON(value)
      };
    },

    sendItems(value: MsgSendItems) {
      return {
        typeUrl: "/pylons.pylons.MsgSendItems",
        value: MsgSendItems.toJSON(value)
      };
    },

    executeRecipe(value: MsgExecuteRecipe) {
      return {
        typeUrl: "/pylons.pylons.MsgExecuteRecipe",
        value: MsgExecuteRecipe.toJSON(value)
      };
    },

    setItemString(value: MsgSetItemString) {
      return {
        typeUrl: "/pylons.pylons.MsgSetItemString",
        value: MsgSetItemString.toJSON(value)
      };
    },

    createRecipe(value: MsgCreateRecipe) {
      return {
        typeUrl: "/pylons.pylons.MsgCreateRecipe",
        value: MsgCreateRecipe.toJSON(value)
      };
    },

    updateRecipe(value: MsgUpdateRecipe) {
      return {
        typeUrl: "/pylons.pylons.MsgUpdateRecipe",
        value: MsgUpdateRecipe.toJSON(value)
      };
    },

    createCookbook(value: MsgCreateCookbook) {
      return {
        typeUrl: "/pylons.pylons.MsgCreateCookbook",
        value: MsgCreateCookbook.toJSON(value)
      };
    },

    updateCookbook(value: MsgUpdateCookbook) {
      return {
        typeUrl: "/pylons.pylons.MsgUpdateCookbook",
        value: MsgUpdateCookbook.toJSON(value)
      };
    }

  },
  fromJSON: {
    appleIap(value: any) {
      return {
        typeUrl: "/pylons.pylons.MsgAppleIap",
        value: MsgAppleIap.fromJSON(value)
      };
    },

    addStripeRefund(value: any) {
      return {
        typeUrl: "/pylons.pylons.MsgAddStripeRefund",
        value: MsgAddStripeRefund.fromJSON(value)
      };
    },

    burnDebtToken(value: any) {
      return {
        typeUrl: "/pylons.pylons.MsgBurnDebtToken",
        value: MsgBurnDebtToken.fromJSON(value)
      };
    },

    updateAccount(value: any) {
      return {
        typeUrl: "/pylons.pylons.MsgUpdateAccount",
        value: MsgUpdateAccount.fromJSON(value)
      };
    },

    fulfillTrade(value: any) {
      return {
        typeUrl: "/pylons.pylons.MsgFulfillTrade",
        value: MsgFulfillTrade.fromJSON(value)
      };
    },

    createTrade(value: any) {
      return {
        typeUrl: "/pylons.pylons.MsgCreateTrade",
        value: MsgCreateTrade.fromJSON(value)
      };
    },

    cancelTrade(value: any) {
      return {
        typeUrl: "/pylons.pylons.MsgCancelTrade",
        value: MsgCancelTrade.fromJSON(value)
      };
    },

    completeExecutionEarly(value: any) {
      return {
        typeUrl: "/pylons.pylons.MsgCompleteExecutionEarly",
        value: MsgCompleteExecutionEarly.fromJSON(value)
      };
    },

    transferCookbook(value: any) {
      return {
        typeUrl: "/pylons.pylons.MsgTransferCookbook",
        value: MsgTransferCookbook.fromJSON(value)
      };
    },

    googleInAppPurchaseGetCoins(value: any) {
      return {
        typeUrl: "/pylons.pylons.MsgGoogleInAppPurchaseGetCoins",
        value: MsgGoogleInAppPurchaseGetCoins.fromJSON(value)
      };
    },

    createAccount(value: any) {
      return {
        typeUrl: "/pylons.pylons.MsgCreateAccount",
        value: MsgCreateAccount.fromJSON(value)
      };
    },

    sendItems(value: any) {
      return {
        typeUrl: "/pylons.pylons.MsgSendItems",
        value: MsgSendItems.fromJSON(value)
      };
    },

    executeRecipe(value: any) {
      return {
        typeUrl: "/pylons.pylons.MsgExecuteRecipe",
        value: MsgExecuteRecipe.fromJSON(value)
      };
    },

    setItemString(value: any) {
      return {
        typeUrl: "/pylons.pylons.MsgSetItemString",
        value: MsgSetItemString.fromJSON(value)
      };
    },

    createRecipe(value: any) {
      return {
        typeUrl: "/pylons.pylons.MsgCreateRecipe",
        value: MsgCreateRecipe.fromJSON(value)
      };
    },

    updateRecipe(value: any) {
      return {
        typeUrl: "/pylons.pylons.MsgUpdateRecipe",
        value: MsgUpdateRecipe.fromJSON(value)
      };
    },

    createCookbook(value: any) {
      return {
        typeUrl: "/pylons.pylons.MsgCreateCookbook",
        value: MsgCreateCookbook.fromJSON(value)
      };
    },

    updateCookbook(value: any) {
      return {
        typeUrl: "/pylons.pylons.MsgUpdateCookbook",
        value: MsgUpdateCookbook.fromJSON(value)
      };
    }

  },
  fromPartial: {
    appleIap(value: MsgAppleIap) {
      return {
        typeUrl: "/pylons.pylons.MsgAppleIap",
        value: MsgAppleIap.fromPartial(value)
      };
    },

    addStripeRefund(value: MsgAddStripeRefund) {
      return {
        typeUrl: "/pylons.pylons.MsgAddStripeRefund",
        value: MsgAddStripeRefund.fromPartial(value)
      };
    },

    burnDebtToken(value: MsgBurnDebtToken) {
      return {
        typeUrl: "/pylons.pylons.MsgBurnDebtToken",
        value: MsgBurnDebtToken.fromPartial(value)
      };
    },

    updateAccount(value: MsgUpdateAccount) {
      return {
        typeUrl: "/pylons.pylons.MsgUpdateAccount",
        value: MsgUpdateAccount.fromPartial(value)
      };
    },

    fulfillTrade(value: MsgFulfillTrade) {
      return {
        typeUrl: "/pylons.pylons.MsgFulfillTrade",
        value: MsgFulfillTrade.fromPartial(value)
      };
    },

    createTrade(value: MsgCreateTrade) {
      return {
        typeUrl: "/pylons.pylons.MsgCreateTrade",
        value: MsgCreateTrade.fromPartial(value)
      };
    },

    cancelTrade(value: MsgCancelTrade) {
      return {
        typeUrl: "/pylons.pylons.MsgCancelTrade",
        value: MsgCancelTrade.fromPartial(value)
      };
    },

    completeExecutionEarly(value: MsgCompleteExecutionEarly) {
      return {
        typeUrl: "/pylons.pylons.MsgCompleteExecutionEarly",
        value: MsgCompleteExecutionEarly.fromPartial(value)
      };
    },

    transferCookbook(value: MsgTransferCookbook) {
      return {
        typeUrl: "/pylons.pylons.MsgTransferCookbook",
        value: MsgTransferCookbook.fromPartial(value)
      };
    },

    googleInAppPurchaseGetCoins(value: MsgGoogleInAppPurchaseGetCoins) {
      return {
        typeUrl: "/pylons.pylons.MsgGoogleInAppPurchaseGetCoins",
        value: MsgGoogleInAppPurchaseGetCoins.fromPartial(value)
      };
    },

    createAccount(value: MsgCreateAccount) {
      return {
        typeUrl: "/pylons.pylons.MsgCreateAccount",
        value: MsgCreateAccount.fromPartial(value)
      };
    },

    sendItems(value: MsgSendItems) {
      return {
        typeUrl: "/pylons.pylons.MsgSendItems",
        value: MsgSendItems.fromPartial(value)
      };
    },

    executeRecipe(value: MsgExecuteRecipe) {
      return {
        typeUrl: "/pylons.pylons.MsgExecuteRecipe",
        value: MsgExecuteRecipe.fromPartial(value)
      };
    },

    setItemString(value: MsgSetItemString) {
      return {
        typeUrl: "/pylons.pylons.MsgSetItemString",
        value: MsgSetItemString.fromPartial(value)
      };
    },

    createRecipe(value: MsgCreateRecipe) {
      return {
        typeUrl: "/pylons.pylons.MsgCreateRecipe",
        value: MsgCreateRecipe.fromPartial(value)
      };
    },

    updateRecipe(value: MsgUpdateRecipe) {
      return {
        typeUrl: "/pylons.pylons.MsgUpdateRecipe",
        value: MsgUpdateRecipe.fromPartial(value)
      };
    },

    createCookbook(value: MsgCreateCookbook) {
      return {
        typeUrl: "/pylons.pylons.MsgCreateCookbook",
        value: MsgCreateCookbook.fromPartial(value)
      };
    },

    updateCookbook(value: MsgUpdateCookbook) {
      return {
        typeUrl: "/pylons.pylons.MsgUpdateCookbook",
        value: MsgUpdateCookbook.fromPartial(value)
      };
    }

  }
};