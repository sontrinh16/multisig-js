import { PaymentInfo } from "./payment_info";
import { RedeemInfo } from "./redeem_info";
import { ItemRef } from "./trade";
import { CoinInput, ItemInput, EntriesList, WeightedOutputs, DoubleInputParam, LongInputParam, StringInputParam, CoinOutput, ItemOutput, DoubleParam, DoubleWeightRange, LongParam, IntWeightRange, StringParam, ItemModifyOutput } from "./recipe";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "@osmonauts/helpers";
import { StringKeyValue } from "./item";
import { MsgAppleIap, MsgAddStripeRefund, MsgBurnDebtToken, MsgUpdateAccount, MsgFulfillTrade, MsgCreateTrade, MsgCancelTrade, MsgCompleteExecutionEarly, MsgTransferCookbook, MsgGoogleInAppPurchaseGetCoins, MsgCreateAccount, MsgSendItems, MsgExecuteRecipe, MsgSetItemString, MsgCreateRecipe, MsgUpdateRecipe, MsgCreateCookbook, MsgUpdateCookbook } from "./tx";
export interface AminoMsgAppleIap extends AminoMsg {
  type: "/pylons.pylons.MsgAppleIap";
  value: {
    creator: string;
    product_id: string;
    purchase_id: string;
    receipt_data_base64: string;
  };
}
export interface AminoMsgAddStripeRefund extends AminoMsg {
  type: "/pylons.pylons.MsgAddStripeRefund";
  value: {
    creator: string;
    payment: {
      purchase_id: string;
      processor_name: string;
      payer_addr: string;
      amount: string;
      product_id: string;
      signature: string;
    };
  };
}
export interface AminoMsgBurnDebtToken extends AminoMsg {
  type: "/pylons.pylons.MsgBurnDebtToken";
  value: {
    creator: string;
    redeem_info: {
      id: string;
      processor_name: string;
      address: string;
      amount: string;
      signature: string;
    };
  };
}
export interface AminoMsgUpdateAccount extends AminoMsg {
  type: "/pylons.pylons.MsgUpdateAccount";
  value: {
    creator: string;
    username: string;
  };
}
export interface AminoMsgFulfillTrade extends AminoMsg {
  type: "/pylons.pylons.MsgFulfillTrade";
  value: {
    creator: string;
    id: string;
    coin_inputs_index: string;
    items: {
      cookbook_id: string;
      item_id: string;
    }[];
    payment_infos: {
      purchase_id: string;
      processor_name: string;
      payer_addr: string;
      amount: string;
      product_id: string;
      signature: string;
    }[];
  };
}
export interface AminoMsgCreateTrade extends AminoMsg {
  type: "/pylons.pylons.MsgCreateTrade";
  value: {
    creator: string;
    coin_inputs: {
      coins: {
        denom: string;
        amount: string;
      }[];
    }[];
    item_inputs: {
      id: string;
      doubles: {
        key: string;
        min_value: string;
        max_value: string;
      }[];
      longs: {
        key: string;
        min_value: string;
        max_value: string;
      }[];
      strings: {
        key: string;
        value: string;
      }[];
    }[];
    coin_outputs: {
      denom: string;
      amount: string;
    }[];
    item_outputs: {
      cookbook_id: string;
      item_id: string;
    }[];
    extra_info: string;
  };
}
export interface AminoMsgCancelTrade extends AminoMsg {
  type: "/pylons.pylons.MsgCancelTrade";
  value: {
    creator: string;
    id: string;
  };
}
export interface AminoMsgCompleteExecutionEarly extends AminoMsg {
  type: "/pylons.pylons.MsgCompleteExecutionEarly";
  value: {
    creator: string;
    id: string;
  };
}
export interface AminoMsgTransferCookbook extends AminoMsg {
  type: "/pylons.pylons.MsgTransferCookbook";
  value: {
    creator: string;
    id: string;
    recipient: string;
  };
}
export interface AminoMsgGoogleInAppPurchaseGetCoins extends AminoMsg {
  type: "/pylons.pylons.MsgGoogleInAppPurchaseGetCoins";
  value: {
    creator: string;
    product_id: string;
    purchase_token: string;
    receipt_data_base64: string;
    signature: string;
  };
}
export interface AminoMsgCreateAccount extends AminoMsg {
  type: "/pylons.pylons.MsgCreateAccount";
  value: {
    creator: string;
    username: string;
    token: string;
    referral_address: string;
  };
}
export interface AminoMsgSendItems extends AminoMsg {
  type: "/pylons.pylons.MsgSendItems";
  value: {
    creator: string;
    receiver: string;
    items: {
      cookbook_id: string;
      item_id: string;
    }[];
  };
}
export interface AminoMsgExecuteRecipe extends AminoMsg {
  type: "/pylons.pylons.MsgExecuteRecipe";
  value: {
    creator: string;
    cookbook_id: string;
    recipe_id: string;
    coin_inputs_index: string;
    item_ids: string[];
    payment_infos: {
      purchase_id: string;
      processor_name: string;
      payer_addr: string;
      amount: string;
      product_id: string;
      signature: string;
    }[];
  };
}
export interface AminoMsgSetItemString extends AminoMsg {
  type: "/pylons.pylons.MsgSetItemString";
  value: {
    creator: string;
    cookbook_id: string;
    id: string;
    field: string;
    value: string;
  };
}
export interface AminoMsgCreateRecipe extends AminoMsg {
  type: "/pylons.pylons.MsgCreateRecipe";
  value: {
    creator: string;
    cookbook_id: string;
    id: string;
    name: string;
    description: string;
    version: string;
    coin_inputs: {
      coins: {
        denom: string;
        amount: string;
      }[];
    }[];
    item_inputs: {
      id: string;
      doubles: {
        key: string;
        min_value: string;
        max_value: string;
      }[];
      longs: {
        key: string;
        min_value: string;
        max_value: string;
      }[];
      strings: {
        key: string;
        value: string;
      }[];
    }[];
    entries: {
      coin_outputs: {
        id: string;
        coin: {
          denom: string;
          amount: string;
        };
        program: string;
      }[];
      item_outputs: {
        id: string;
        doubles: {
          key: string;
          weightRanges: {
            lower: string;
            upper: string;
            weight: string;
          }[];
          program: string;
        }[];
        longs: {
          key: string;
          weightRanges: {
            lower: string;
            upper: string;
            weight: string;
          }[];
          program: string;
        }[];
        strings: {
          key: string;
          value: string;
          program: string;
        }[];
        mutable_strings: {
          key: string;
          value: string;
        }[];
        transfer_fee: {
          denom: string;
          amount: string;
        }[];
        trade_percentage: string;
        quantity: string;
        amount_minted: string;
        tradeable: boolean;
      }[];
      item_modify_outputs: {
        id: string;
        item_input_ref: string;
        doubles: {
          key: string;
          weightRanges: {
            lower: string;
            upper: string;
            weight: string;
          }[];
          program: string;
        }[];
        longs: {
          key: string;
          weightRanges: {
            lower: string;
            upper: string;
            weight: string;
          }[];
          program: string;
        }[];
        strings: {
          key: string;
          value: string;
          program: string;
        }[];
        mutable_strings: {
          key: string;
          value: string;
        }[];
        transfer_fee: {
          denom: string;
          amount: string;
        }[];
        trade_percentage: string;
        quantity: string;
        amount_minted: string;
        tradeable: boolean;
      }[];
    };
    outputs: {
      entry_ids: string[];
      weight: string;
    }[];
    block_interval: string;
    cost_per_block: {
      denom: string;
      amount: string;
    };
    enabled: boolean;
    extra_info: string;
  };
}
export interface AminoMsgUpdateRecipe extends AminoMsg {
  type: "/pylons.pylons.MsgUpdateRecipe";
  value: {
    creator: string;
    cookbook_id: string;
    id: string;
    name: string;
    description: string;
    version: string;
    coin_inputs: {
      coins: {
        denom: string;
        amount: string;
      }[];
    }[];
    item_inputs: {
      id: string;
      doubles: {
        key: string;
        min_value: string;
        max_value: string;
      }[];
      longs: {
        key: string;
        min_value: string;
        max_value: string;
      }[];
      strings: {
        key: string;
        value: string;
      }[];
    }[];
    entries: {
      coin_outputs: {
        id: string;
        coin: {
          denom: string;
          amount: string;
        };
        program: string;
      }[];
      item_outputs: {
        id: string;
        doubles: {
          key: string;
          weightRanges: {
            lower: string;
            upper: string;
            weight: string;
          }[];
          program: string;
        }[];
        longs: {
          key: string;
          weightRanges: {
            lower: string;
            upper: string;
            weight: string;
          }[];
          program: string;
        }[];
        strings: {
          key: string;
          value: string;
          program: string;
        }[];
        mutable_strings: {
          key: string;
          value: string;
        }[];
        transfer_fee: {
          denom: string;
          amount: string;
        }[];
        trade_percentage: string;
        quantity: string;
        amount_minted: string;
        tradeable: boolean;
      }[];
      item_modify_outputs: {
        id: string;
        item_input_ref: string;
        doubles: {
          key: string;
          weightRanges: {
            lower: string;
            upper: string;
            weight: string;
          }[];
          program: string;
        }[];
        longs: {
          key: string;
          weightRanges: {
            lower: string;
            upper: string;
            weight: string;
          }[];
          program: string;
        }[];
        strings: {
          key: string;
          value: string;
          program: string;
        }[];
        mutable_strings: {
          key: string;
          value: string;
        }[];
        transfer_fee: {
          denom: string;
          amount: string;
        }[];
        trade_percentage: string;
        quantity: string;
        amount_minted: string;
        tradeable: boolean;
      }[];
    };
    outputs: {
      entry_ids: string[];
      weight: string;
    }[];
    block_interval: string;
    cost_per_block: {
      denom: string;
      amount: string;
    };
    enabled: boolean;
    extra_info: string;
  };
}
export interface AminoMsgCreateCookbook extends AminoMsg {
  type: "/pylons.pylons.MsgCreateCookbook";
  value: {
    creator: string;
    id: string;
    name: string;
    description: string;
    developer: string;
    version: string;
    support_email: string;
    enabled: boolean;
  };
}
export interface AminoMsgUpdateCookbook extends AminoMsg {
  type: "/pylons.pylons.MsgUpdateCookbook";
  value: {
    creator: string;
    id: string;
    name: string;
    description: string;
    developer: string;
    version: string;
    support_email: string;
    enabled: boolean;
  };
}
export const AminoConverter = {
  "/pylons.pylons.MsgAppleIap": {
    aminoType: "/pylons.pylons.MsgAppleIap",
    toAmino: ({
      creator,
      productId,
      purchaseId,
      receiptDataBase64
    }: MsgAppleIap): AminoMsgAppleIap["value"] => {
      return {
        creator,
        product_id: productId,
        purchase_id: purchaseId,
        receipt_data_base64: receiptDataBase64
      };
    },
    fromAmino: ({
      creator,
      product_id,
      purchase_id,
      receipt_data_base64
    }: AminoMsgAppleIap["value"]): MsgAppleIap => {
      return {
        creator,
        productId: product_id,
        purchaseId: purchase_id,
        receiptDataBase64: receipt_data_base64
      };
    }
  },
  "/pylons.pylons.MsgAddStripeRefund": {
    aminoType: "/pylons.pylons.MsgAddStripeRefund",
    toAmino: ({
      creator,
      payment
    }: MsgAddStripeRefund): AminoMsgAddStripeRefund["value"] => {
      return {
        creator,
        payment: {
          purchase_id: payment.purchaseId,
          processor_name: payment.processorName,
          payer_addr: payment.payerAddr,
          amount: payment.amount,
          product_id: payment.productId,
          signature: payment.signature
        }
      };
    },
    fromAmino: ({
      creator,
      payment
    }: AminoMsgAddStripeRefund["value"]): MsgAddStripeRefund => {
      return {
        creator,
        payment: {
          purchaseId: payment.purchase_id,
          processorName: payment.processor_name,
          payerAddr: payment.payer_addr,
          amount: payment.amount,
          productId: payment.product_id,
          signature: payment.signature
        }
      };
    }
  },
  "/pylons.pylons.MsgBurnDebtToken": {
    aminoType: "/pylons.pylons.MsgBurnDebtToken",
    toAmino: ({
      creator,
      redeemInfo
    }: MsgBurnDebtToken): AminoMsgBurnDebtToken["value"] => {
      return {
        creator,
        redeem_info: {
          id: redeemInfo.id,
          processor_name: redeemInfo.processorName,
          address: redeemInfo.address,
          amount: redeemInfo.amount,
          signature: redeemInfo.signature
        }
      };
    },
    fromAmino: ({
      creator,
      redeem_info
    }: AminoMsgBurnDebtToken["value"]): MsgBurnDebtToken => {
      return {
        creator,
        redeemInfo: {
          id: redeem_info.id,
          processorName: redeem_info.processor_name,
          address: redeem_info.address,
          amount: redeem_info.amount,
          signature: redeem_info.signature
        }
      };
    }
  },
  "/pylons.pylons.MsgUpdateAccount": {
    aminoType: "/pylons.pylons.MsgUpdateAccount",
    toAmino: ({
      creator,
      username
    }: MsgUpdateAccount): AminoMsgUpdateAccount["value"] => {
      return {
        creator,
        username
      };
    },
    fromAmino: ({
      creator,
      username
    }: AminoMsgUpdateAccount["value"]): MsgUpdateAccount => {
      return {
        creator,
        username
      };
    }
  },
  "/pylons.pylons.MsgFulfillTrade": {
    aminoType: "/pylons.pylons.MsgFulfillTrade",
    toAmino: ({
      creator,
      id,
      coinInputsIndex,
      items,
      paymentInfos
    }: MsgFulfillTrade): AminoMsgFulfillTrade["value"] => {
      return {
        creator,
        id: id.toString(),
        coin_inputs_index: coinInputsIndex.toString(),
        items: items.map(el0 => ({
          cookbook_id: el0.cookbookId,
          item_id: el0.itemId
        })),
        payment_infos: paymentInfos.map(el0 => ({
          purchase_id: el0.purchaseId,
          processor_name: el0.processorName,
          payer_addr: el0.payerAddr,
          amount: el0.amount,
          product_id: el0.productId,
          signature: el0.signature
        }))
      };
    },
    fromAmino: ({
      creator,
      id,
      coin_inputs_index,
      items,
      payment_infos
    }: AminoMsgFulfillTrade["value"]): MsgFulfillTrade => {
      return {
        creator,
        id: Long.fromString(id),
        coinInputsIndex: Long.fromString(coin_inputs_index),
        items: items.map(el0 => ({
          cookbookId: el0.cookbook_id,
          itemId: el0.item_id
        })),
        paymentInfos: payment_infos.map(el0 => ({
          purchaseId: el0.purchase_id,
          processorName: el0.processor_name,
          payerAddr: el0.payer_addr,
          amount: el0.amount,
          productId: el0.product_id,
          signature: el0.signature
        }))
      };
    }
  },
  "/pylons.pylons.MsgCreateTrade": {
    aminoType: "/pylons.pylons.MsgCreateTrade",
    toAmino: ({
      creator,
      coinInputs,
      itemInputs,
      coinOutputs,
      itemOutputs,
      extraInfo
    }: MsgCreateTrade): AminoMsgCreateTrade["value"] => {
      return {
        creator,
        coin_inputs: coinInputs.map(el0 => ({
          coins: el0.coins.map(el1 => ({
            denom: el1.denom,
            amount: el1.amount
          }))
        })),
        item_inputs: itemInputs.map(el0 => ({
          id: el0.id,
          doubles: el0.doubles.map(el1 => ({
            key: el1.key,
            min_value: el1.minValue,
            max_value: el1.maxValue
          })),
          longs: el0.longs.map(el1 => ({
            key: el1.key,
            min_value: el1.minValue.toString(),
            max_value: el1.maxValue.toString()
          })),
          strings: el0.strings.map(el1 => ({
            key: el1.key,
            value: el1.value
          }))
        })),
        coin_outputs: coinOutputs.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        item_outputs: itemOutputs.map(el0 => ({
          cookbook_id: el0.cookbookId,
          item_id: el0.itemId
        })),
        extra_info: extraInfo
      };
    },
    fromAmino: ({
      creator,
      coin_inputs,
      item_inputs,
      coin_outputs,
      item_outputs,
      extra_info
    }: AminoMsgCreateTrade["value"]): MsgCreateTrade => {
      return {
        creator,
        coinInputs: coin_inputs.map(el0 => ({
          coins: el0.coins.map(el1 => ({
            denom: el1.denom,
            amount: el1.amount
          }))
        })),
        itemInputs: item_inputs.map(el0 => ({
          id: el0.id,
          doubles: el0.doubles.map(el1 => ({
            key: el1.key,
            minValue: el1.min_value,
            maxValue: el1.max_value
          })),
          longs: el0.longs.map(el1 => ({
            key: el1.key,
            minValue: Long.fromString(el1.min_value),
            maxValue: Long.fromString(el1.max_value)
          })),
          strings: el0.strings.map(el1 => ({
            key: el1.key,
            value: el1.value
          }))
        })),
        coinOutputs: coin_outputs.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        itemOutputs: item_outputs.map(el0 => ({
          cookbookId: el0.cookbook_id,
          itemId: el0.item_id
        })),
        extraInfo: extra_info
      };
    }
  },
  "/pylons.pylons.MsgCancelTrade": {
    aminoType: "/pylons.pylons.MsgCancelTrade",
    toAmino: ({
      creator,
      id
    }: MsgCancelTrade): AminoMsgCancelTrade["value"] => {
      return {
        creator,
        id: id.toString()
      };
    },
    fromAmino: ({
      creator,
      id
    }: AminoMsgCancelTrade["value"]): MsgCancelTrade => {
      return {
        creator,
        id: Long.fromString(id)
      };
    }
  },
  "/pylons.pylons.MsgCompleteExecutionEarly": {
    aminoType: "/pylons.pylons.MsgCompleteExecutionEarly",
    toAmino: ({
      creator,
      id
    }: MsgCompleteExecutionEarly): AminoMsgCompleteExecutionEarly["value"] => {
      return {
        creator,
        id
      };
    },
    fromAmino: ({
      creator,
      id
    }: AminoMsgCompleteExecutionEarly["value"]): MsgCompleteExecutionEarly => {
      return {
        creator,
        id
      };
    }
  },
  "/pylons.pylons.MsgTransferCookbook": {
    aminoType: "/pylons.pylons.MsgTransferCookbook",
    toAmino: ({
      creator,
      id,
      recipient
    }: MsgTransferCookbook): AminoMsgTransferCookbook["value"] => {
      return {
        creator,
        id,
        recipient
      };
    },
    fromAmino: ({
      creator,
      id,
      recipient
    }: AminoMsgTransferCookbook["value"]): MsgTransferCookbook => {
      return {
        creator,
        id,
        recipient
      };
    }
  },
  "/pylons.pylons.MsgGoogleInAppPurchaseGetCoins": {
    aminoType: "/pylons.pylons.MsgGoogleInAppPurchaseGetCoins",
    toAmino: ({
      creator,
      productId,
      purchaseToken,
      receiptDataBase64,
      signature
    }: MsgGoogleInAppPurchaseGetCoins): AminoMsgGoogleInAppPurchaseGetCoins["value"] => {
      return {
        creator,
        product_id: productId,
        purchase_token: purchaseToken,
        receipt_data_base64: receiptDataBase64,
        signature
      };
    },
    fromAmino: ({
      creator,
      product_id,
      purchase_token,
      receipt_data_base64,
      signature
    }: AminoMsgGoogleInAppPurchaseGetCoins["value"]): MsgGoogleInAppPurchaseGetCoins => {
      return {
        creator,
        productId: product_id,
        purchaseToken: purchase_token,
        receiptDataBase64: receipt_data_base64,
        signature
      };
    }
  },
  "/pylons.pylons.MsgCreateAccount": {
    aminoType: "/pylons.pylons.MsgCreateAccount",
    toAmino: ({
      creator,
      username,
      token,
      referralAddress
    }: MsgCreateAccount): AminoMsgCreateAccount["value"] => {
      return {
        creator,
        username,
        token,
        referral_address: referralAddress
      };
    },
    fromAmino: ({
      creator,
      username,
      token,
      referral_address
    }: AminoMsgCreateAccount["value"]): MsgCreateAccount => {
      return {
        creator,
        username,
        token,
        referralAddress: referral_address
      };
    }
  },
  "/pylons.pylons.MsgSendItems": {
    aminoType: "/pylons.pylons.MsgSendItems",
    toAmino: ({
      creator,
      receiver,
      items
    }: MsgSendItems): AminoMsgSendItems["value"] => {
      return {
        creator,
        receiver,
        items: items.map(el0 => ({
          cookbook_id: el0.cookbookId,
          item_id: el0.itemId
        }))
      };
    },
    fromAmino: ({
      creator,
      receiver,
      items
    }: AminoMsgSendItems["value"]): MsgSendItems => {
      return {
        creator,
        receiver,
        items: items.map(el0 => ({
          cookbookId: el0.cookbook_id,
          itemId: el0.item_id
        }))
      };
    }
  },
  "/pylons.pylons.MsgExecuteRecipe": {
    aminoType: "/pylons.pylons.MsgExecuteRecipe",
    toAmino: ({
      creator,
      cookbookId,
      recipeId,
      coinInputsIndex,
      itemIds,
      paymentInfos
    }: MsgExecuteRecipe): AminoMsgExecuteRecipe["value"] => {
      return {
        creator,
        cookbook_id: cookbookId,
        recipe_id: recipeId,
        coin_inputs_index: coinInputsIndex.toString(),
        item_ids: itemIds,
        payment_infos: paymentInfos.map(el0 => ({
          purchase_id: el0.purchaseId,
          processor_name: el0.processorName,
          payer_addr: el0.payerAddr,
          amount: el0.amount,
          product_id: el0.productId,
          signature: el0.signature
        }))
      };
    },
    fromAmino: ({
      creator,
      cookbook_id,
      recipe_id,
      coin_inputs_index,
      item_ids,
      payment_infos
    }: AminoMsgExecuteRecipe["value"]): MsgExecuteRecipe => {
      return {
        creator,
        cookbookId: cookbook_id,
        recipeId: recipe_id,
        coinInputsIndex: Long.fromString(coin_inputs_index),
        itemIds: item_ids,
        paymentInfos: payment_infos.map(el0 => ({
          purchaseId: el0.purchase_id,
          processorName: el0.processor_name,
          payerAddr: el0.payer_addr,
          amount: el0.amount,
          productId: el0.product_id,
          signature: el0.signature
        }))
      };
    }
  },
  "/pylons.pylons.MsgSetItemString": {
    aminoType: "/pylons.pylons.MsgSetItemString",
    toAmino: ({
      creator,
      cookbookId,
      id,
      field,
      value
    }: MsgSetItemString): AminoMsgSetItemString["value"] => {
      return {
        creator,
        cookbook_id: cookbookId,
        id,
        field,
        value
      };
    },
    fromAmino: ({
      creator,
      cookbook_id,
      id,
      field,
      value
    }: AminoMsgSetItemString["value"]): MsgSetItemString => {
      return {
        creator,
        cookbookId: cookbook_id,
        id,
        field,
        value
      };
    }
  },
  "/pylons.pylons.MsgCreateRecipe": {
    aminoType: "/pylons.pylons.MsgCreateRecipe",
    toAmino: ({
      creator,
      cookbookId,
      id,
      name,
      description,
      version,
      coinInputs,
      itemInputs,
      entries,
      outputs,
      blockInterval,
      costPerBlock,
      enabled,
      extraInfo
    }: MsgCreateRecipe): AminoMsgCreateRecipe["value"] => {
      return {
        creator,
        cookbook_id: cookbookId,
        id,
        name,
        description,
        version,
        coin_inputs: coinInputs.map(el0 => ({
          coins: el0.coins.map(el1 => ({
            denom: el1.denom,
            amount: el1.amount
          }))
        })),
        item_inputs: itemInputs.map(el0 => ({
          id: el0.id,
          doubles: el0.doubles.map(el1 => ({
            key: el1.key,
            min_value: el1.minValue,
            max_value: el1.maxValue
          })),
          longs: el0.longs.map(el1 => ({
            key: el1.key,
            min_value: el1.minValue.toString(),
            max_value: el1.maxValue.toString()
          })),
          strings: el0.strings.map(el1 => ({
            key: el1.key,
            value: el1.value
          }))
        })),
        entries: {
          coin_outputs: entries.coinOutputs.map(el0 => ({
            id: el0.id,
            coin: {
              denom: el0.coin.denom,
              amount: Long.fromNumber(el0.coin.amount).toString()
            },
            program: el0.program
          })),
          item_outputs: entries.itemOutputs.map(el0 => ({
            id: el0.id,
            doubles: el0.doubles.map(el1 => ({
              key: el1.key,
              weightRanges: el1.weightRanges.map(el2 => ({
                lower: el2.lower,
                upper: el2.upper,
                weight: el2.weight.toString()
              })),
              program: el1.program
            })),
            longs: el0.longs.map(el1 => ({
              key: el1.key,
              weightRanges: el1.weightRanges.map(el2 => ({
                lower: el2.lower.toString(),
                upper: el2.upper.toString(),
                weight: el2.weight.toString()
              })),
              program: el1.program
            })),
            strings: el0.strings.map(el1 => ({
              key: el1.key,
              value: el1.value,
              program: el1.program
            })),
            mutable_strings: el0.mutableStrings.map(el1 => ({
              key: el1.key,
              value: el1.value
            })),
            transfer_fee: el0.transferFee.map(el1 => ({
              denom: el1.denom,
              amount: el1.amount
            })),
            trade_percentage: el0.tradePercentage,
            quantity: el0.quantity.toString(),
            amount_minted: el0.amountMinted.toString(),
            tradeable: el0.tradeable
          })),
          item_modify_outputs: entries.itemModifyOutputs.map(el0 => ({
            id: el0.id,
            item_input_ref: el0.itemInputRef,
            doubles: el0.doubles.map(el1 => ({
              key: el1.key,
              weightRanges: el1.weightRanges.map(el2 => ({
                lower: el2.lower,
                upper: el2.upper,
                weight: el2.weight.toString()
              })),
              program: el1.program
            })),
            longs: el0.longs.map(el1 => ({
              key: el1.key,
              weightRanges: el1.weightRanges.map(el2 => ({
                lower: el2.lower.toString(),
                upper: el2.upper.toString(),
                weight: el2.weight.toString()
              })),
              program: el1.program
            })),
            strings: el0.strings.map(el1 => ({
              key: el1.key,
              value: el1.value,
              program: el1.program
            })),
            mutable_strings: el0.mutableStrings.map(el1 => ({
              key: el1.key,
              value: el1.value
            })),
            transfer_fee: el0.transferFee.map(el1 => ({
              denom: el1.denom,
              amount: el1.amount
            })),
            trade_percentage: el0.tradePercentage,
            quantity: el0.quantity.toString(),
            amount_minted: el0.amountMinted.toString(),
            tradeable: el0.tradeable
          }))
        },
        outputs: outputs.map(el0 => ({
          entry_ids: el0.entryIds,
          weight: el0.weight.toString()
        })),
        block_interval: blockInterval.toString(),
        cost_per_block: {
          denom: costPerBlock.denom,
          amount: Long.fromNumber(costPerBlock.amount).toString()
        },
        enabled,
        extra_info: extraInfo
      };
    },
    fromAmino: ({
      creator,
      cookbook_id,
      id,
      name,
      description,
      version,
      coin_inputs,
      item_inputs,
      entries,
      outputs,
      block_interval,
      cost_per_block,
      enabled,
      extra_info
    }: AminoMsgCreateRecipe["value"]): MsgCreateRecipe => {
      return {
        creator,
        cookbookId: cookbook_id,
        id,
        name,
        description,
        version,
        coinInputs: coin_inputs.map(el0 => ({
          coins: el0.coins.map(el1 => ({
            denom: el1.denom,
            amount: el1.amount
          }))
        })),
        itemInputs: item_inputs.map(el0 => ({
          id: el0.id,
          doubles: el0.doubles.map(el1 => ({
            key: el1.key,
            minValue: el1.min_value,
            maxValue: el1.max_value
          })),
          longs: el0.longs.map(el1 => ({
            key: el1.key,
            minValue: Long.fromString(el1.min_value),
            maxValue: Long.fromString(el1.max_value)
          })),
          strings: el0.strings.map(el1 => ({
            key: el1.key,
            value: el1.value
          }))
        })),
        entries: {
          coinOutputs: entries.coin_outputs.map(el1 => ({
            id: el1.id,
            coin: {
              denom: el1.coin.denom,
              amount: el1.coin.amount
            },
            program: el1.program
          })),
          itemOutputs: entries.item_outputs.map(el1 => ({
            id: el1.id,
            doubles: el1.doubles.map(el2 => ({
              key: el2.key,
              weightRanges: el2.weightRanges.map(el3 => ({
                lower: el3.lower,
                upper: el3.upper,
                weight: Long.fromString(el3.weight)
              })),
              program: el2.program
            })),
            longs: el1.longs.map(el2 => ({
              key: el2.key,
              weightRanges: el2.weightRanges.map(el3 => ({
                lower: Long.fromString(el3.lower),
                upper: Long.fromString(el3.upper),
                weight: Long.fromString(el3.weight)
              })),
              program: el2.program
            })),
            strings: el1.strings.map(el2 => ({
              key: el2.key,
              value: el2.value,
              program: el2.program
            })),
            mutableStrings: el1.mutable_strings.map(el2 => ({
              key: el2.key,
              value: el2.value
            })),
            transferFee: el1.transfer_fee.map(el2 => ({
              denom: el2.denom,
              amount: el2.amount
            })),
            tradePercentage: el1.trade_percentage,
            quantity: Long.fromString(el1.quantity),
            amountMinted: Long.fromString(el1.amount_minted),
            tradeable: el1.tradeable
          })),
          itemModifyOutputs: entries.item_modify_outputs.map(el1 => ({
            id: el1.id,
            itemInputRef: el1.item_input_ref,
            doubles: el1.doubles.map(el2 => ({
              key: el2.key,
              weightRanges: el2.weightRanges.map(el3 => ({
                lower: el3.lower,
                upper: el3.upper,
                weight: Long.fromString(el3.weight)
              })),
              program: el2.program
            })),
            longs: el1.longs.map(el2 => ({
              key: el2.key,
              weightRanges: el2.weightRanges.map(el3 => ({
                lower: Long.fromString(el3.lower),
                upper: Long.fromString(el3.upper),
                weight: Long.fromString(el3.weight)
              })),
              program: el2.program
            })),
            strings: el1.strings.map(el2 => ({
              key: el2.key,
              value: el2.value,
              program: el2.program
            })),
            mutableStrings: el1.mutable_strings.map(el2 => ({
              key: el2.key,
              value: el2.value
            })),
            transferFee: el1.transfer_fee.map(el2 => ({
              denom: el2.denom,
              amount: el2.amount
            })),
            tradePercentage: el1.trade_percentage,
            quantity: Long.fromString(el1.quantity),
            amountMinted: Long.fromString(el1.amount_minted),
            tradeable: el1.tradeable
          }))
        },
        outputs: outputs.map(el0 => ({
          entryIds: el0.entry_ids,
          weight: Long.fromString(el0.weight)
        })),
        blockInterval: Long.fromString(block_interval),
        costPerBlock: {
          denom: cost_per_block.denom,
          amount: cost_per_block.amount
        },
        enabled,
        extraInfo: extra_info
      };
    }
  },
  "/pylons.pylons.MsgUpdateRecipe": {
    aminoType: "/pylons.pylons.MsgUpdateRecipe",
    toAmino: ({
      creator,
      cookbookId,
      id,
      name,
      description,
      version,
      coinInputs,
      itemInputs,
      entries,
      outputs,
      blockInterval,
      costPerBlock,
      enabled,
      extraInfo
    }: MsgUpdateRecipe): AminoMsgUpdateRecipe["value"] => {
      return {
        creator,
        cookbook_id: cookbookId,
        id,
        name,
        description,
        version,
        coin_inputs: coinInputs.map(el0 => ({
          coins: el0.coins.map(el1 => ({
            denom: el1.denom,
            amount: el1.amount
          }))
        })),
        item_inputs: itemInputs.map(el0 => ({
          id: el0.id,
          doubles: el0.doubles.map(el1 => ({
            key: el1.key,
            min_value: el1.minValue,
            max_value: el1.maxValue
          })),
          longs: el0.longs.map(el1 => ({
            key: el1.key,
            min_value: el1.minValue.toString(),
            max_value: el1.maxValue.toString()
          })),
          strings: el0.strings.map(el1 => ({
            key: el1.key,
            value: el1.value
          }))
        })),
        entries: {
          coin_outputs: entries.coinOutputs.map(el0 => ({
            id: el0.id,
            coin: {
              denom: el0.coin.denom,
              amount: Long.fromNumber(el0.coin.amount).toString()
            },
            program: el0.program
          })),
          item_outputs: entries.itemOutputs.map(el0 => ({
            id: el0.id,
            doubles: el0.doubles.map(el1 => ({
              key: el1.key,
              weightRanges: el1.weightRanges.map(el2 => ({
                lower: el2.lower,
                upper: el2.upper,
                weight: el2.weight.toString()
              })),
              program: el1.program
            })),
            longs: el0.longs.map(el1 => ({
              key: el1.key,
              weightRanges: el1.weightRanges.map(el2 => ({
                lower: el2.lower.toString(),
                upper: el2.upper.toString(),
                weight: el2.weight.toString()
              })),
              program: el1.program
            })),
            strings: el0.strings.map(el1 => ({
              key: el1.key,
              value: el1.value,
              program: el1.program
            })),
            mutable_strings: el0.mutableStrings.map(el1 => ({
              key: el1.key,
              value: el1.value
            })),
            transfer_fee: el0.transferFee.map(el1 => ({
              denom: el1.denom,
              amount: el1.amount
            })),
            trade_percentage: el0.tradePercentage,
            quantity: el0.quantity.toString(),
            amount_minted: el0.amountMinted.toString(),
            tradeable: el0.tradeable
          })),
          item_modify_outputs: entries.itemModifyOutputs.map(el0 => ({
            id: el0.id,
            item_input_ref: el0.itemInputRef,
            doubles: el0.doubles.map(el1 => ({
              key: el1.key,
              weightRanges: el1.weightRanges.map(el2 => ({
                lower: el2.lower,
                upper: el2.upper,
                weight: el2.weight.toString()
              })),
              program: el1.program
            })),
            longs: el0.longs.map(el1 => ({
              key: el1.key,
              weightRanges: el1.weightRanges.map(el2 => ({
                lower: el2.lower.toString(),
                upper: el2.upper.toString(),
                weight: el2.weight.toString()
              })),
              program: el1.program
            })),
            strings: el0.strings.map(el1 => ({
              key: el1.key,
              value: el1.value,
              program: el1.program
            })),
            mutable_strings: el0.mutableStrings.map(el1 => ({
              key: el1.key,
              value: el1.value
            })),
            transfer_fee: el0.transferFee.map(el1 => ({
              denom: el1.denom,
              amount: el1.amount
            })),
            trade_percentage: el0.tradePercentage,
            quantity: el0.quantity.toString(),
            amount_minted: el0.amountMinted.toString(),
            tradeable: el0.tradeable
          }))
        },
        outputs: outputs.map(el0 => ({
          entry_ids: el0.entryIds,
          weight: el0.weight.toString()
        })),
        block_interval: blockInterval.toString(),
        cost_per_block: {
          denom: costPerBlock.denom,
          amount: Long.fromNumber(costPerBlock.amount).toString()
        },
        enabled,
        extra_info: extraInfo
      };
    },
    fromAmino: ({
      creator,
      cookbook_id,
      id,
      name,
      description,
      version,
      coin_inputs,
      item_inputs,
      entries,
      outputs,
      block_interval,
      cost_per_block,
      enabled,
      extra_info
    }: AminoMsgUpdateRecipe["value"]): MsgUpdateRecipe => {
      return {
        creator,
        cookbookId: cookbook_id,
        id,
        name,
        description,
        version,
        coinInputs: coin_inputs.map(el0 => ({
          coins: el0.coins.map(el1 => ({
            denom: el1.denom,
            amount: el1.amount
          }))
        })),
        itemInputs: item_inputs.map(el0 => ({
          id: el0.id,
          doubles: el0.doubles.map(el1 => ({
            key: el1.key,
            minValue: el1.min_value,
            maxValue: el1.max_value
          })),
          longs: el0.longs.map(el1 => ({
            key: el1.key,
            minValue: Long.fromString(el1.min_value),
            maxValue: Long.fromString(el1.max_value)
          })),
          strings: el0.strings.map(el1 => ({
            key: el1.key,
            value: el1.value
          }))
        })),
        entries: {
          coinOutputs: entries.coin_outputs.map(el1 => ({
            id: el1.id,
            coin: {
              denom: el1.coin.denom,
              amount: el1.coin.amount
            },
            program: el1.program
          })),
          itemOutputs: entries.item_outputs.map(el1 => ({
            id: el1.id,
            doubles: el1.doubles.map(el2 => ({
              key: el2.key,
              weightRanges: el2.weightRanges.map(el3 => ({
                lower: el3.lower,
                upper: el3.upper,
                weight: Long.fromString(el3.weight)
              })),
              program: el2.program
            })),
            longs: el1.longs.map(el2 => ({
              key: el2.key,
              weightRanges: el2.weightRanges.map(el3 => ({
                lower: Long.fromString(el3.lower),
                upper: Long.fromString(el3.upper),
                weight: Long.fromString(el3.weight)
              })),
              program: el2.program
            })),
            strings: el1.strings.map(el2 => ({
              key: el2.key,
              value: el2.value,
              program: el2.program
            })),
            mutableStrings: el1.mutable_strings.map(el2 => ({
              key: el2.key,
              value: el2.value
            })),
            transferFee: el1.transfer_fee.map(el2 => ({
              denom: el2.denom,
              amount: el2.amount
            })),
            tradePercentage: el1.trade_percentage,
            quantity: Long.fromString(el1.quantity),
            amountMinted: Long.fromString(el1.amount_minted),
            tradeable: el1.tradeable
          })),
          itemModifyOutputs: entries.item_modify_outputs.map(el1 => ({
            id: el1.id,
            itemInputRef: el1.item_input_ref,
            doubles: el1.doubles.map(el2 => ({
              key: el2.key,
              weightRanges: el2.weightRanges.map(el3 => ({
                lower: el3.lower,
                upper: el3.upper,
                weight: Long.fromString(el3.weight)
              })),
              program: el2.program
            })),
            longs: el1.longs.map(el2 => ({
              key: el2.key,
              weightRanges: el2.weightRanges.map(el3 => ({
                lower: Long.fromString(el3.lower),
                upper: Long.fromString(el3.upper),
                weight: Long.fromString(el3.weight)
              })),
              program: el2.program
            })),
            strings: el1.strings.map(el2 => ({
              key: el2.key,
              value: el2.value,
              program: el2.program
            })),
            mutableStrings: el1.mutable_strings.map(el2 => ({
              key: el2.key,
              value: el2.value
            })),
            transferFee: el1.transfer_fee.map(el2 => ({
              denom: el2.denom,
              amount: el2.amount
            })),
            tradePercentage: el1.trade_percentage,
            quantity: Long.fromString(el1.quantity),
            amountMinted: Long.fromString(el1.amount_minted),
            tradeable: el1.tradeable
          }))
        },
        outputs: outputs.map(el0 => ({
          entryIds: el0.entry_ids,
          weight: Long.fromString(el0.weight)
        })),
        blockInterval: Long.fromString(block_interval),
        costPerBlock: {
          denom: cost_per_block.denom,
          amount: cost_per_block.amount
        },
        enabled,
        extraInfo: extra_info
      };
    }
  },
  "/pylons.pylons.MsgCreateCookbook": {
    aminoType: "/pylons.pylons.MsgCreateCookbook",
    toAmino: ({
      creator,
      id,
      name,
      description,
      developer,
      version,
      supportEmail,
      enabled
    }: MsgCreateCookbook): AminoMsgCreateCookbook["value"] => {
      return {
        creator,
        id,
        name,
        description,
        developer,
        version,
        support_email: supportEmail,
        enabled
      };
    },
    fromAmino: ({
      creator,
      id,
      name,
      description,
      developer,
      version,
      support_email,
      enabled
    }: AminoMsgCreateCookbook["value"]): MsgCreateCookbook => {
      return {
        creator,
        id,
        name,
        description,
        developer,
        version,
        supportEmail: support_email,
        enabled
      };
    }
  },
  "/pylons.pylons.MsgUpdateCookbook": {
    aminoType: "/pylons.pylons.MsgUpdateCookbook",
    toAmino: ({
      creator,
      id,
      name,
      description,
      developer,
      version,
      supportEmail,
      enabled
    }: MsgUpdateCookbook): AminoMsgUpdateCookbook["value"] => {
      return {
        creator,
        id,
        name,
        description,
        developer,
        version,
        support_email: supportEmail,
        enabled
      };
    },
    fromAmino: ({
      creator,
      id,
      name,
      description,
      developer,
      version,
      support_email,
      enabled
    }: AminoMsgUpdateCookbook["value"]): MsgUpdateCookbook => {
      return {
        creator,
        id,
        name,
        description,
        developer,
        version,
        supportEmail: support_email,
        enabled
      };
    }
  }
};