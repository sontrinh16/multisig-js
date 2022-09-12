import { AminoMsg } from "@cosmjs/amino";
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
export declare const AminoConverter: {
    "/pylons.pylons.MsgAppleIap": {
        aminoType: string;
        toAmino: ({ creator, productId, purchaseId, receiptDataBase64 }: MsgAppleIap) => AminoMsgAppleIap["value"];
        fromAmino: ({ creator, product_id, purchase_id, receipt_data_base64 }: AminoMsgAppleIap["value"]) => MsgAppleIap;
    };
    "/pylons.pylons.MsgAddStripeRefund": {
        aminoType: string;
        toAmino: ({ creator, payment }: MsgAddStripeRefund) => AminoMsgAddStripeRefund["value"];
        fromAmino: ({ creator, payment }: AminoMsgAddStripeRefund["value"]) => MsgAddStripeRefund;
    };
    "/pylons.pylons.MsgBurnDebtToken": {
        aminoType: string;
        toAmino: ({ creator, redeemInfo }: MsgBurnDebtToken) => AminoMsgBurnDebtToken["value"];
        fromAmino: ({ creator, redeem_info }: AminoMsgBurnDebtToken["value"]) => MsgBurnDebtToken;
    };
    "/pylons.pylons.MsgUpdateAccount": {
        aminoType: string;
        toAmino: ({ creator, username }: MsgUpdateAccount) => AminoMsgUpdateAccount["value"];
        fromAmino: ({ creator, username }: AminoMsgUpdateAccount["value"]) => MsgUpdateAccount;
    };
    "/pylons.pylons.MsgFulfillTrade": {
        aminoType: string;
        toAmino: ({ creator, id, coinInputsIndex, items, paymentInfos }: MsgFulfillTrade) => AminoMsgFulfillTrade["value"];
        fromAmino: ({ creator, id, coin_inputs_index, items, payment_infos }: AminoMsgFulfillTrade["value"]) => MsgFulfillTrade;
    };
    "/pylons.pylons.MsgCreateTrade": {
        aminoType: string;
        toAmino: ({ creator, coinInputs, itemInputs, coinOutputs, itemOutputs, extraInfo }: MsgCreateTrade) => AminoMsgCreateTrade["value"];
        fromAmino: ({ creator, coin_inputs, item_inputs, coin_outputs, item_outputs, extra_info }: AminoMsgCreateTrade["value"]) => MsgCreateTrade;
    };
    "/pylons.pylons.MsgCancelTrade": {
        aminoType: string;
        toAmino: ({ creator, id }: MsgCancelTrade) => AminoMsgCancelTrade["value"];
        fromAmino: ({ creator, id }: AminoMsgCancelTrade["value"]) => MsgCancelTrade;
    };
    "/pylons.pylons.MsgCompleteExecutionEarly": {
        aminoType: string;
        toAmino: ({ creator, id }: MsgCompleteExecutionEarly) => AminoMsgCompleteExecutionEarly["value"];
        fromAmino: ({ creator, id }: AminoMsgCompleteExecutionEarly["value"]) => MsgCompleteExecutionEarly;
    };
    "/pylons.pylons.MsgTransferCookbook": {
        aminoType: string;
        toAmino: ({ creator, id, recipient }: MsgTransferCookbook) => AminoMsgTransferCookbook["value"];
        fromAmino: ({ creator, id, recipient }: AminoMsgTransferCookbook["value"]) => MsgTransferCookbook;
    };
    "/pylons.pylons.MsgGoogleInAppPurchaseGetCoins": {
        aminoType: string;
        toAmino: ({ creator, productId, purchaseToken, receiptDataBase64, signature }: MsgGoogleInAppPurchaseGetCoins) => AminoMsgGoogleInAppPurchaseGetCoins["value"];
        fromAmino: ({ creator, product_id, purchase_token, receipt_data_base64, signature }: AminoMsgGoogleInAppPurchaseGetCoins["value"]) => MsgGoogleInAppPurchaseGetCoins;
    };
    "/pylons.pylons.MsgCreateAccount": {
        aminoType: string;
        toAmino: ({ creator, username, token, referralAddress }: MsgCreateAccount) => AminoMsgCreateAccount["value"];
        fromAmino: ({ creator, username, token, referral_address }: AminoMsgCreateAccount["value"]) => MsgCreateAccount;
    };
    "/pylons.pylons.MsgSendItems": {
        aminoType: string;
        toAmino: ({ creator, receiver, items }: MsgSendItems) => AminoMsgSendItems["value"];
        fromAmino: ({ creator, receiver, items }: AminoMsgSendItems["value"]) => MsgSendItems;
    };
    "/pylons.pylons.MsgExecuteRecipe": {
        aminoType: string;
        toAmino: ({ creator, cookbookId, recipeId, coinInputsIndex, itemIds, paymentInfos }: MsgExecuteRecipe) => AminoMsgExecuteRecipe["value"];
        fromAmino: ({ creator, cookbook_id, recipe_id, coin_inputs_index, item_ids, payment_infos }: AminoMsgExecuteRecipe["value"]) => MsgExecuteRecipe;
    };
    "/pylons.pylons.MsgSetItemString": {
        aminoType: string;
        toAmino: ({ creator, cookbookId, id, field, value }: MsgSetItemString) => AminoMsgSetItemString["value"];
        fromAmino: ({ creator, cookbook_id, id, field, value }: AminoMsgSetItemString["value"]) => MsgSetItemString;
    };
    "/pylons.pylons.MsgCreateRecipe": {
        aminoType: string;
        toAmino: ({ creator, cookbookId, id, name, description, version, coinInputs, itemInputs, entries, outputs, blockInterval, costPerBlock, enabled, extraInfo }: MsgCreateRecipe) => AminoMsgCreateRecipe["value"];
        fromAmino: ({ creator, cookbook_id, id, name, description, version, coin_inputs, item_inputs, entries, outputs, block_interval, cost_per_block, enabled, extra_info }: AminoMsgCreateRecipe["value"]) => MsgCreateRecipe;
    };
    "/pylons.pylons.MsgUpdateRecipe": {
        aminoType: string;
        toAmino: ({ creator, cookbookId, id, name, description, version, coinInputs, itemInputs, entries, outputs, blockInterval, costPerBlock, enabled, extraInfo }: MsgUpdateRecipe) => AminoMsgUpdateRecipe["value"];
        fromAmino: ({ creator, cookbook_id, id, name, description, version, coin_inputs, item_inputs, entries, outputs, block_interval, cost_per_block, enabled, extra_info }: AminoMsgUpdateRecipe["value"]) => MsgUpdateRecipe;
    };
    "/pylons.pylons.MsgCreateCookbook": {
        aminoType: string;
        toAmino: ({ creator, id, name, description, developer, version, supportEmail, enabled }: MsgCreateCookbook) => AminoMsgCreateCookbook["value"];
        fromAmino: ({ creator, id, name, description, developer, version, support_email, enabled }: AminoMsgCreateCookbook["value"]) => MsgCreateCookbook;
    };
    "/pylons.pylons.MsgUpdateCookbook": {
        aminoType: string;
        toAmino: ({ creator, id, name, description, developer, version, supportEmail, enabled }: MsgUpdateCookbook) => AminoMsgUpdateCookbook["value"];
        fromAmino: ({ creator, id, name, description, developer, version, support_email, enabled }: AminoMsgUpdateCookbook["value"]) => MsgUpdateCookbook;
    };
};
