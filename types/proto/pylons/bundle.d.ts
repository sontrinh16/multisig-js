import * as _545 from "./pylons/accounts";
import * as _546 from "./pylons/apple_in_app_purchase_order";
import * as _547 from "./pylons/cookbook";
import * as _548 from "./pylons/event";
import * as _549 from "./pylons/execution";
import * as _550 from "./pylons/genesis";
import * as _551 from "./pylons/google_iap_order";
import * as _552 from "./pylons/history";
import * as _553 from "./pylons/item";
import * as _554 from "./pylons/params";
import * as _555 from "./pylons/payment_info";
import * as _556 from "./pylons/query";
import * as _557 from "./pylons/recipe";
import * as _558 from "./pylons/redeem_info";
import * as _559 from "./pylons/standard_error";
import * as _560 from "./pylons/stripe_refund";
import * as _561 from "./pylons/trade";
import * as _562 from "./pylons/tx";
export declare namespace pylons {
    const pylons: {
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                appleIap(value: _562.MsgAppleIap): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                addStripeRefund(value: _562.MsgAddStripeRefund): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                burnDebtToken(value: _562.MsgBurnDebtToken): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateAccount(value: _562.MsgUpdateAccount): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                fulfillTrade(value: _562.MsgFulfillTrade): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createTrade(value: _562.MsgCreateTrade): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                cancelTrade(value: _562.MsgCancelTrade): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                completeExecutionEarly(value: _562.MsgCompleteExecutionEarly): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                transferCookbook(value: _562.MsgTransferCookbook): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                googleInAppPurchaseGetCoins(value: _562.MsgGoogleInAppPurchaseGetCoins): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createAccount(value: _562.MsgCreateAccount): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                sendItems(value: _562.MsgSendItems): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                executeRecipe(value: _562.MsgExecuteRecipe): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                setItemString(value: _562.MsgSetItemString): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createRecipe(value: _562.MsgCreateRecipe): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateRecipe(value: _562.MsgUpdateRecipe): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createCookbook(value: _562.MsgCreateCookbook): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateCookbook(value: _562.MsgUpdateCookbook): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                appleIap(value: _562.MsgAppleIap): {
                    typeUrl: string;
                    value: _562.MsgAppleIap;
                };
                addStripeRefund(value: _562.MsgAddStripeRefund): {
                    typeUrl: string;
                    value: _562.MsgAddStripeRefund;
                };
                burnDebtToken(value: _562.MsgBurnDebtToken): {
                    typeUrl: string;
                    value: _562.MsgBurnDebtToken;
                };
                updateAccount(value: _562.MsgUpdateAccount): {
                    typeUrl: string;
                    value: _562.MsgUpdateAccount;
                };
                fulfillTrade(value: _562.MsgFulfillTrade): {
                    typeUrl: string;
                    value: _562.MsgFulfillTrade;
                };
                createTrade(value: _562.MsgCreateTrade): {
                    typeUrl: string;
                    value: _562.MsgCreateTrade;
                };
                cancelTrade(value: _562.MsgCancelTrade): {
                    typeUrl: string;
                    value: _562.MsgCancelTrade;
                };
                completeExecutionEarly(value: _562.MsgCompleteExecutionEarly): {
                    typeUrl: string;
                    value: _562.MsgCompleteExecutionEarly;
                };
                transferCookbook(value: _562.MsgTransferCookbook): {
                    typeUrl: string;
                    value: _562.MsgTransferCookbook;
                };
                googleInAppPurchaseGetCoins(value: _562.MsgGoogleInAppPurchaseGetCoins): {
                    typeUrl: string;
                    value: _562.MsgGoogleInAppPurchaseGetCoins;
                };
                createAccount(value: _562.MsgCreateAccount): {
                    typeUrl: string;
                    value: _562.MsgCreateAccount;
                };
                sendItems(value: _562.MsgSendItems): {
                    typeUrl: string;
                    value: _562.MsgSendItems;
                };
                executeRecipe(value: _562.MsgExecuteRecipe): {
                    typeUrl: string;
                    value: _562.MsgExecuteRecipe;
                };
                setItemString(value: _562.MsgSetItemString): {
                    typeUrl: string;
                    value: _562.MsgSetItemString;
                };
                createRecipe(value: _562.MsgCreateRecipe): {
                    typeUrl: string;
                    value: _562.MsgCreateRecipe;
                };
                updateRecipe(value: _562.MsgUpdateRecipe): {
                    typeUrl: string;
                    value: _562.MsgUpdateRecipe;
                };
                createCookbook(value: _562.MsgCreateCookbook): {
                    typeUrl: string;
                    value: _562.MsgCreateCookbook;
                };
                updateCookbook(value: _562.MsgUpdateCookbook): {
                    typeUrl: string;
                    value: _562.MsgUpdateCookbook;
                };
            };
            toJSON: {
                appleIap(value: _562.MsgAppleIap): {
                    typeUrl: string;
                    value: unknown;
                };
                addStripeRefund(value: _562.MsgAddStripeRefund): {
                    typeUrl: string;
                    value: unknown;
                };
                burnDebtToken(value: _562.MsgBurnDebtToken): {
                    typeUrl: string;
                    value: unknown;
                };
                updateAccount(value: _562.MsgUpdateAccount): {
                    typeUrl: string;
                    value: unknown;
                };
                fulfillTrade(value: _562.MsgFulfillTrade): {
                    typeUrl: string;
                    value: unknown;
                };
                createTrade(value: _562.MsgCreateTrade): {
                    typeUrl: string;
                    value: unknown;
                };
                cancelTrade(value: _562.MsgCancelTrade): {
                    typeUrl: string;
                    value: unknown;
                };
                completeExecutionEarly(value: _562.MsgCompleteExecutionEarly): {
                    typeUrl: string;
                    value: unknown;
                };
                transferCookbook(value: _562.MsgTransferCookbook): {
                    typeUrl: string;
                    value: unknown;
                };
                googleInAppPurchaseGetCoins(value: _562.MsgGoogleInAppPurchaseGetCoins): {
                    typeUrl: string;
                    value: unknown;
                };
                createAccount(value: _562.MsgCreateAccount): {
                    typeUrl: string;
                    value: unknown;
                };
                sendItems(value: _562.MsgSendItems): {
                    typeUrl: string;
                    value: unknown;
                };
                executeRecipe(value: _562.MsgExecuteRecipe): {
                    typeUrl: string;
                    value: unknown;
                };
                setItemString(value: _562.MsgSetItemString): {
                    typeUrl: string;
                    value: unknown;
                };
                createRecipe(value: _562.MsgCreateRecipe): {
                    typeUrl: string;
                    value: unknown;
                };
                updateRecipe(value: _562.MsgUpdateRecipe): {
                    typeUrl: string;
                    value: unknown;
                };
                createCookbook(value: _562.MsgCreateCookbook): {
                    typeUrl: string;
                    value: unknown;
                };
                updateCookbook(value: _562.MsgUpdateCookbook): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                appleIap(value: any): {
                    typeUrl: string;
                    value: _562.MsgAppleIap;
                };
                addStripeRefund(value: any): {
                    typeUrl: string;
                    value: _562.MsgAddStripeRefund;
                };
                burnDebtToken(value: any): {
                    typeUrl: string;
                    value: _562.MsgBurnDebtToken;
                };
                updateAccount(value: any): {
                    typeUrl: string;
                    value: _562.MsgUpdateAccount;
                };
                fulfillTrade(value: any): {
                    typeUrl: string;
                    value: _562.MsgFulfillTrade;
                };
                createTrade(value: any): {
                    typeUrl: string;
                    value: _562.MsgCreateTrade;
                };
                cancelTrade(value: any): {
                    typeUrl: string;
                    value: _562.MsgCancelTrade;
                };
                completeExecutionEarly(value: any): {
                    typeUrl: string;
                    value: _562.MsgCompleteExecutionEarly;
                };
                transferCookbook(value: any): {
                    typeUrl: string;
                    value: _562.MsgTransferCookbook;
                };
                googleInAppPurchaseGetCoins(value: any): {
                    typeUrl: string;
                    value: _562.MsgGoogleInAppPurchaseGetCoins;
                };
                createAccount(value: any): {
                    typeUrl: string;
                    value: _562.MsgCreateAccount;
                };
                sendItems(value: any): {
                    typeUrl: string;
                    value: _562.MsgSendItems;
                };
                executeRecipe(value: any): {
                    typeUrl: string;
                    value: _562.MsgExecuteRecipe;
                };
                setItemString(value: any): {
                    typeUrl: string;
                    value: _562.MsgSetItemString;
                };
                createRecipe(value: any): {
                    typeUrl: string;
                    value: _562.MsgCreateRecipe;
                };
                updateRecipe(value: any): {
                    typeUrl: string;
                    value: _562.MsgUpdateRecipe;
                };
                createCookbook(value: any): {
                    typeUrl: string;
                    value: _562.MsgCreateCookbook;
                };
                updateCookbook(value: any): {
                    typeUrl: string;
                    value: _562.MsgUpdateCookbook;
                };
            };
            fromPartial: {
                appleIap(value: _562.MsgAppleIap): {
                    typeUrl: string;
                    value: _562.MsgAppleIap;
                };
                addStripeRefund(value: _562.MsgAddStripeRefund): {
                    typeUrl: string;
                    value: _562.MsgAddStripeRefund;
                };
                burnDebtToken(value: _562.MsgBurnDebtToken): {
                    typeUrl: string;
                    value: _562.MsgBurnDebtToken;
                };
                updateAccount(value: _562.MsgUpdateAccount): {
                    typeUrl: string;
                    value: _562.MsgUpdateAccount;
                };
                fulfillTrade(value: _562.MsgFulfillTrade): {
                    typeUrl: string;
                    value: _562.MsgFulfillTrade;
                };
                createTrade(value: _562.MsgCreateTrade): {
                    typeUrl: string;
                    value: _562.MsgCreateTrade;
                };
                cancelTrade(value: _562.MsgCancelTrade): {
                    typeUrl: string;
                    value: _562.MsgCancelTrade;
                };
                completeExecutionEarly(value: _562.MsgCompleteExecutionEarly): {
                    typeUrl: string;
                    value: _562.MsgCompleteExecutionEarly;
                };
                transferCookbook(value: _562.MsgTransferCookbook): {
                    typeUrl: string;
                    value: _562.MsgTransferCookbook;
                };
                googleInAppPurchaseGetCoins(value: _562.MsgGoogleInAppPurchaseGetCoins): {
                    typeUrl: string;
                    value: _562.MsgGoogleInAppPurchaseGetCoins;
                };
                createAccount(value: _562.MsgCreateAccount): {
                    typeUrl: string;
                    value: _562.MsgCreateAccount;
                };
                sendItems(value: _562.MsgSendItems): {
                    typeUrl: string;
                    value: _562.MsgSendItems;
                };
                executeRecipe(value: _562.MsgExecuteRecipe): {
                    typeUrl: string;
                    value: _562.MsgExecuteRecipe;
                };
                setItemString(value: _562.MsgSetItemString): {
                    typeUrl: string;
                    value: _562.MsgSetItemString;
                };
                createRecipe(value: _562.MsgCreateRecipe): {
                    typeUrl: string;
                    value: _562.MsgCreateRecipe;
                };
                updateRecipe(value: _562.MsgUpdateRecipe): {
                    typeUrl: string;
                    value: _562.MsgUpdateRecipe;
                };
                createCookbook(value: _562.MsgCreateCookbook): {
                    typeUrl: string;
                    value: _562.MsgCreateCookbook;
                };
                updateCookbook(value: _562.MsgUpdateCookbook): {
                    typeUrl: string;
                    value: _562.MsgUpdateCookbook;
                };
            };
        };
        AminoConverter: {
            "/pylons.pylons.MsgAppleIap": {
                aminoType: string;
                toAmino: ({ creator, productId, purchaseId, receiptDataBase64 }: _562.MsgAppleIap) => {
                    creator: string;
                    product_id: string;
                    purchase_id: string;
                    receipt_data_base64: string;
                };
                fromAmino: ({ creator, product_id, purchase_id, receipt_data_base64 }: {
                    creator: string;
                    product_id: string;
                    purchase_id: string;
                    receipt_data_base64: string;
                }) => _562.MsgAppleIap;
            };
            "/pylons.pylons.MsgAddStripeRefund": {
                aminoType: string;
                toAmino: ({ creator, payment }: _562.MsgAddStripeRefund) => {
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
                fromAmino: ({ creator, payment }: {
                    creator: string;
                    payment: {
                        purchase_id: string;
                        processor_name: string;
                        payer_addr: string;
                        amount: string;
                        product_id: string;
                        signature: string;
                    };
                }) => _562.MsgAddStripeRefund;
            };
            "/pylons.pylons.MsgBurnDebtToken": {
                aminoType: string;
                toAmino: ({ creator, redeemInfo }: _562.MsgBurnDebtToken) => {
                    creator: string;
                    redeem_info: {
                        id: string;
                        processor_name: string;
                        address: string;
                        amount: string;
                        signature: string;
                    };
                };
                fromAmino: ({ creator, redeem_info }: {
                    creator: string;
                    redeem_info: {
                        id: string;
                        processor_name: string;
                        address: string;
                        amount: string;
                        signature: string;
                    };
                }) => _562.MsgBurnDebtToken;
            };
            "/pylons.pylons.MsgUpdateAccount": {
                aminoType: string;
                toAmino: ({ creator, username }: _562.MsgUpdateAccount) => {
                    creator: string;
                    username: string;
                };
                fromAmino: ({ creator, username }: {
                    creator: string;
                    username: string;
                }) => _562.MsgUpdateAccount;
            };
            "/pylons.pylons.MsgFulfillTrade": {
                aminoType: string;
                toAmino: ({ creator, id, coinInputsIndex, items, paymentInfos }: _562.MsgFulfillTrade) => {
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
                fromAmino: ({ creator, id, coin_inputs_index, items, payment_infos }: {
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
                }) => _562.MsgFulfillTrade;
            };
            "/pylons.pylons.MsgCreateTrade": {
                aminoType: string;
                toAmino: ({ creator, coinInputs, itemInputs, coinOutputs, itemOutputs, extraInfo }: _562.MsgCreateTrade) => {
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
                fromAmino: ({ creator, coin_inputs, item_inputs, coin_outputs, item_outputs, extra_info }: {
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
                }) => _562.MsgCreateTrade;
            };
            "/pylons.pylons.MsgCancelTrade": {
                aminoType: string;
                toAmino: ({ creator, id }: _562.MsgCancelTrade) => {
                    creator: string;
                    id: string;
                };
                fromAmino: ({ creator, id }: {
                    creator: string;
                    id: string;
                }) => _562.MsgCancelTrade;
            };
            "/pylons.pylons.MsgCompleteExecutionEarly": {
                aminoType: string;
                toAmino: ({ creator, id }: _562.MsgCompleteExecutionEarly) => {
                    creator: string;
                    id: string;
                };
                fromAmino: ({ creator, id }: {
                    creator: string;
                    id: string;
                }) => _562.MsgCompleteExecutionEarly;
            };
            "/pylons.pylons.MsgTransferCookbook": {
                aminoType: string;
                toAmino: ({ creator, id, recipient }: _562.MsgTransferCookbook) => {
                    creator: string;
                    id: string;
                    recipient: string;
                };
                fromAmino: ({ creator, id, recipient }: {
                    creator: string;
                    id: string;
                    recipient: string;
                }) => _562.MsgTransferCookbook;
            };
            "/pylons.pylons.MsgGoogleInAppPurchaseGetCoins": {
                aminoType: string;
                toAmino: ({ creator, productId, purchaseToken, receiptDataBase64, signature }: _562.MsgGoogleInAppPurchaseGetCoins) => {
                    creator: string;
                    product_id: string;
                    purchase_token: string;
                    receipt_data_base64: string;
                    signature: string;
                };
                fromAmino: ({ creator, product_id, purchase_token, receipt_data_base64, signature }: {
                    creator: string;
                    product_id: string;
                    purchase_token: string;
                    receipt_data_base64: string;
                    signature: string;
                }) => _562.MsgGoogleInAppPurchaseGetCoins;
            };
            "/pylons.pylons.MsgCreateAccount": {
                aminoType: string;
                toAmino: ({ creator, username, token, referralAddress }: _562.MsgCreateAccount) => {
                    creator: string;
                    username: string;
                    token: string;
                    referral_address: string;
                };
                fromAmino: ({ creator, username, token, referral_address }: {
                    creator: string;
                    username: string;
                    token: string;
                    referral_address: string;
                }) => _562.MsgCreateAccount;
            };
            "/pylons.pylons.MsgSendItems": {
                aminoType: string;
                toAmino: ({ creator, receiver, items }: _562.MsgSendItems) => {
                    creator: string;
                    receiver: string;
                    items: {
                        cookbook_id: string;
                        item_id: string;
                    }[];
                };
                fromAmino: ({ creator, receiver, items }: {
                    creator: string;
                    receiver: string;
                    items: {
                        cookbook_id: string;
                        item_id: string;
                    }[];
                }) => _562.MsgSendItems;
            };
            "/pylons.pylons.MsgExecuteRecipe": {
                aminoType: string;
                toAmino: ({ creator, cookbookId, recipeId, coinInputsIndex, itemIds, paymentInfos }: _562.MsgExecuteRecipe) => {
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
                fromAmino: ({ creator, cookbook_id, recipe_id, coin_inputs_index, item_ids, payment_infos }: {
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
                }) => _562.MsgExecuteRecipe;
            };
            "/pylons.pylons.MsgSetItemString": {
                aminoType: string;
                toAmino: ({ creator, cookbookId, id, field, value }: _562.MsgSetItemString) => {
                    creator: string;
                    cookbook_id: string;
                    id: string;
                    field: string;
                    value: string;
                };
                fromAmino: ({ creator, cookbook_id, id, field, value }: {
                    creator: string;
                    cookbook_id: string;
                    id: string;
                    field: string;
                    value: string;
                }) => _562.MsgSetItemString;
            };
            "/pylons.pylons.MsgCreateRecipe": {
                aminoType: string;
                toAmino: ({ creator, cookbookId, id, name, description, version, coinInputs, itemInputs, entries, outputs, blockInterval, costPerBlock, enabled, extraInfo }: _562.MsgCreateRecipe) => {
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
                fromAmino: ({ creator, cookbook_id, id, name, description, version, coin_inputs, item_inputs, entries, outputs, block_interval, cost_per_block, enabled, extra_info }: {
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
                }) => _562.MsgCreateRecipe;
            };
            "/pylons.pylons.MsgUpdateRecipe": {
                aminoType: string;
                toAmino: ({ creator, cookbookId, id, name, description, version, coinInputs, itemInputs, entries, outputs, blockInterval, costPerBlock, enabled, extraInfo }: _562.MsgUpdateRecipe) => {
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
                fromAmino: ({ creator, cookbook_id, id, name, description, version, coin_inputs, item_inputs, entries, outputs, block_interval, cost_per_block, enabled, extra_info }: {
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
                }) => _562.MsgUpdateRecipe;
            };
            "/pylons.pylons.MsgCreateCookbook": {
                aminoType: string;
                toAmino: ({ creator, id, name, description, developer, version, supportEmail, enabled }: _562.MsgCreateCookbook) => {
                    creator: string;
                    id: string;
                    name: string;
                    description: string;
                    developer: string;
                    version: string;
                    support_email: string;
                    enabled: boolean;
                };
                fromAmino: ({ creator, id, name, description, developer, version, support_email, enabled }: {
                    creator: string;
                    id: string;
                    name: string;
                    description: string;
                    developer: string;
                    version: string;
                    support_email: string;
                    enabled: boolean;
                }) => _562.MsgCreateCookbook;
            };
            "/pylons.pylons.MsgUpdateCookbook": {
                aminoType: string;
                toAmino: ({ creator, id, name, description, developer, version, supportEmail, enabled }: _562.MsgUpdateCookbook) => {
                    creator: string;
                    id: string;
                    name: string;
                    description: string;
                    developer: string;
                    version: string;
                    support_email: string;
                    enabled: boolean;
                };
                fromAmino: ({ creator, id, name, description, developer, version, support_email, enabled }: {
                    creator: string;
                    id: string;
                    name: string;
                    description: string;
                    developer: string;
                    version: string;
                    support_email: string;
                    enabled: boolean;
                }) => _562.MsgUpdateCookbook;
            };
        };
        MsgAppleIap: {
            encode(message: _562.MsgAppleIap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _562.MsgAppleIap;
            fromJSON(object: any): _562.MsgAppleIap;
            toJSON(message: _562.MsgAppleIap): unknown;
            fromPartial(object: {
                creator?: string;
                productId?: string;
                purchaseId?: string;
                receiptDataBase64?: string;
            }): _562.MsgAppleIap;
        };
        MsgAppleIapResponse: {
            encode(_: _562.MsgAppleIapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _562.MsgAppleIapResponse;
            fromJSON(_: any): _562.MsgAppleIapResponse;
            toJSON(_: _562.MsgAppleIapResponse): unknown;
            fromPartial(_: {}): _562.MsgAppleIapResponse;
        };
        MsgAddStripeRefund: {
            encode(message: _562.MsgAddStripeRefund, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _562.MsgAddStripeRefund;
            fromJSON(object: any): _562.MsgAddStripeRefund;
            toJSON(message: _562.MsgAddStripeRefund): unknown;
            fromPartial(object: {
                creator?: string;
                payment?: {
                    purchaseId?: string;
                    processorName?: string;
                    payerAddr?: string;
                    amount?: string;
                    productId?: string;
                    signature?: string;
                };
            }): _562.MsgAddStripeRefund;
        };
        MsgAddStripeRefundResponse: {
            encode(_: _562.MsgAddStripeRefundResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _562.MsgAddStripeRefundResponse;
            fromJSON(_: any): _562.MsgAddStripeRefundResponse;
            toJSON(_: _562.MsgAddStripeRefundResponse): unknown;
            fromPartial(_: {}): _562.MsgAddStripeRefundResponse;
        };
        MsgBurnDebtToken: {
            encode(message: _562.MsgBurnDebtToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _562.MsgBurnDebtToken;
            fromJSON(object: any): _562.MsgBurnDebtToken;
            toJSON(message: _562.MsgBurnDebtToken): unknown;
            fromPartial(object: {
                creator?: string;
                redeemInfo?: {
                    id?: string;
                    processorName?: string;
                    address?: string;
                    amount?: string;
                    signature?: string;
                };
            }): _562.MsgBurnDebtToken;
        };
        MsgBurnDebtTokenResponse: {
            encode(_: _562.MsgBurnDebtTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _562.MsgBurnDebtTokenResponse;
            fromJSON(_: any): _562.MsgBurnDebtTokenResponse;
            toJSON(_: _562.MsgBurnDebtTokenResponse): unknown;
            fromPartial(_: {}): _562.MsgBurnDebtTokenResponse;
        };
        MsgUpdateAccount: {
            encode(message: _562.MsgUpdateAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _562.MsgUpdateAccount;
            fromJSON(object: any): _562.MsgUpdateAccount;
            toJSON(message: _562.MsgUpdateAccount): unknown;
            fromPartial(object: {
                creator?: string;
                username?: string;
            }): _562.MsgUpdateAccount;
        };
        MsgUpdateAccountResponse: {
            encode(_: _562.MsgUpdateAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _562.MsgUpdateAccountResponse;
            fromJSON(_: any): _562.MsgUpdateAccountResponse;
            toJSON(_: _562.MsgUpdateAccountResponse): unknown;
            fromPartial(_: {}): _562.MsgUpdateAccountResponse;
        };
        MsgCreateAccount: {
            encode(message: _562.MsgCreateAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _562.MsgCreateAccount;
            fromJSON(object: any): _562.MsgCreateAccount;
            toJSON(message: _562.MsgCreateAccount): unknown;
            fromPartial(object: {
                creator?: string;
                username?: string;
                token?: string;
                referralAddress?: string;
            }): _562.MsgCreateAccount;
        };
        MsgCreateAccountResponse: {
            encode(_: _562.MsgCreateAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _562.MsgCreateAccountResponse;
            fromJSON(_: any): _562.MsgCreateAccountResponse;
            toJSON(_: _562.MsgCreateAccountResponse): unknown;
            fromPartial(_: {}): _562.MsgCreateAccountResponse;
        };
        MsgFulfillTrade: {
            encode(message: _562.MsgFulfillTrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _562.MsgFulfillTrade;
            fromJSON(object: any): _562.MsgFulfillTrade;
            toJSON(message: _562.MsgFulfillTrade): unknown;
            fromPartial(object: {
                creator?: string;
                id?: any;
                coinInputsIndex?: any;
                items?: {
                    cookbookId?: string;
                    itemId?: string;
                }[];
                paymentInfos?: {
                    purchaseId?: string;
                    processorName?: string;
                    payerAddr?: string;
                    amount?: string;
                    productId?: string;
                    signature?: string;
                }[];
            }): _562.MsgFulfillTrade;
        };
        MsgFulfillTradeResponse: {
            encode(_: _562.MsgFulfillTradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _562.MsgFulfillTradeResponse;
            fromJSON(_: any): _562.MsgFulfillTradeResponse;
            toJSON(_: _562.MsgFulfillTradeResponse): unknown;
            fromPartial(_: {}): _562.MsgFulfillTradeResponse;
        };
        MsgCreateTrade: {
            encode(message: _562.MsgCreateTrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _562.MsgCreateTrade;
            fromJSON(object: any): _562.MsgCreateTrade;
            toJSON(message: _562.MsgCreateTrade): unknown;
            fromPartial(object: {
                creator?: string;
                coinInputs?: {
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
                itemInputs?: {
                    id?: string;
                    doubles?: {
                        key?: string;
                        minValue?: string;
                        maxValue?: string;
                    }[];
                    longs?: {
                        key?: string;
                        minValue?: any;
                        maxValue?: any;
                    }[];
                    strings?: {
                        key?: string;
                        value?: string;
                    }[];
                }[];
                coinOutputs?: {
                    denom?: string;
                    amount?: string;
                }[];
                itemOutputs?: {
                    cookbookId?: string;
                    itemId?: string;
                }[];
                extraInfo?: string;
            }): _562.MsgCreateTrade;
        };
        MsgCreateTradeResponse: {
            encode(message: _562.MsgCreateTradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _562.MsgCreateTradeResponse;
            fromJSON(object: any): _562.MsgCreateTradeResponse;
            toJSON(message: _562.MsgCreateTradeResponse): unknown;
            fromPartial(object: {
                id?: any;
            }): _562.MsgCreateTradeResponse;
        };
        MsgCancelTrade: {
            encode(message: _562.MsgCancelTrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _562.MsgCancelTrade;
            fromJSON(object: any): _562.MsgCancelTrade;
            toJSON(message: _562.MsgCancelTrade): unknown;
            fromPartial(object: {
                creator?: string;
                id?: any;
            }): _562.MsgCancelTrade;
        };
        MsgCancelTradeResponse: {
            encode(_: _562.MsgCancelTradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _562.MsgCancelTradeResponse;
            fromJSON(_: any): _562.MsgCancelTradeResponse;
            toJSON(_: _562.MsgCancelTradeResponse): unknown;
            fromPartial(_: {}): _562.MsgCancelTradeResponse;
        };
        MsgCompleteExecutionEarly: {
            encode(message: _562.MsgCompleteExecutionEarly, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _562.MsgCompleteExecutionEarly;
            fromJSON(object: any): _562.MsgCompleteExecutionEarly;
            toJSON(message: _562.MsgCompleteExecutionEarly): unknown;
            fromPartial(object: {
                creator?: string;
                id?: string;
            }): _562.MsgCompleteExecutionEarly;
        };
        MsgCompleteExecutionEarlyResponse: {
            encode(message: _562.MsgCompleteExecutionEarlyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _562.MsgCompleteExecutionEarlyResponse;
            fromJSON(object: any): _562.MsgCompleteExecutionEarlyResponse;
            toJSON(message: _562.MsgCompleteExecutionEarlyResponse): unknown;
            fromPartial(object: {
                id?: string;
            }): _562.MsgCompleteExecutionEarlyResponse;
        };
        MsgTransferCookbook: {
            encode(message: _562.MsgTransferCookbook, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _562.MsgTransferCookbook;
            fromJSON(object: any): _562.MsgTransferCookbook;
            toJSON(message: _562.MsgTransferCookbook): unknown;
            fromPartial(object: {
                creator?: string;
                id?: string;
                recipient?: string;
            }): _562.MsgTransferCookbook;
        };
        MsgTransferCookbookResponse: {
            encode(_: _562.MsgTransferCookbookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _562.MsgTransferCookbookResponse;
            fromJSON(_: any): _562.MsgTransferCookbookResponse;
            toJSON(_: _562.MsgTransferCookbookResponse): unknown;
            fromPartial(_: {}): _562.MsgTransferCookbookResponse;
        };
        MsgGoogleInAppPurchaseGetCoins: {
            encode(message: _562.MsgGoogleInAppPurchaseGetCoins, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _562.MsgGoogleInAppPurchaseGetCoins;
            fromJSON(object: any): _562.MsgGoogleInAppPurchaseGetCoins;
            toJSON(message: _562.MsgGoogleInAppPurchaseGetCoins): unknown;
            fromPartial(object: {
                creator?: string;
                productId?: string;
                purchaseToken?: string;
                receiptDataBase64?: string;
                signature?: string;
            }): _562.MsgGoogleInAppPurchaseGetCoins;
        };
        MsgGoogleInAppPurchaseGetCoinsResponse: {
            encode(_: _562.MsgGoogleInAppPurchaseGetCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _562.MsgGoogleInAppPurchaseGetCoinsResponse;
            fromJSON(_: any): _562.MsgGoogleInAppPurchaseGetCoinsResponse;
            toJSON(_: _562.MsgGoogleInAppPurchaseGetCoinsResponse): unknown;
            fromPartial(_: {}): _562.MsgGoogleInAppPurchaseGetCoinsResponse;
        };
        MsgSendItems: {
            encode(message: _562.MsgSendItems, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _562.MsgSendItems;
            fromJSON(object: any): _562.MsgSendItems;
            toJSON(message: _562.MsgSendItems): unknown;
            fromPartial(object: {
                creator?: string;
                receiver?: string;
                items?: {
                    cookbookId?: string;
                    itemId?: string;
                }[];
            }): _562.MsgSendItems;
        };
        MsgSendItemsResponse: {
            encode(_: _562.MsgSendItemsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _562.MsgSendItemsResponse;
            fromJSON(_: any): _562.MsgSendItemsResponse;
            toJSON(_: _562.MsgSendItemsResponse): unknown;
            fromPartial(_: {}): _562.MsgSendItemsResponse;
        };
        MsgExecuteRecipe: {
            encode(message: _562.MsgExecuteRecipe, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _562.MsgExecuteRecipe;
            fromJSON(object: any): _562.MsgExecuteRecipe;
            toJSON(message: _562.MsgExecuteRecipe): unknown;
            fromPartial(object: {
                creator?: string;
                cookbookId?: string;
                recipeId?: string;
                coinInputsIndex?: any;
                itemIds?: string[];
                paymentInfos?: {
                    purchaseId?: string;
                    processorName?: string;
                    payerAddr?: string;
                    amount?: string;
                    productId?: string;
                    signature?: string;
                }[];
            }): _562.MsgExecuteRecipe;
        };
        MsgExecuteRecipeResponse: {
            encode(message: _562.MsgExecuteRecipeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _562.MsgExecuteRecipeResponse;
            fromJSON(object: any): _562.MsgExecuteRecipeResponse;
            toJSON(message: _562.MsgExecuteRecipeResponse): unknown;
            fromPartial(object: {
                id?: string;
                txTime?: any;
            }): _562.MsgExecuteRecipeResponse;
        };
        MsgSetItemString: {
            encode(message: _562.MsgSetItemString, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _562.MsgSetItemString;
            fromJSON(object: any): _562.MsgSetItemString;
            toJSON(message: _562.MsgSetItemString): unknown;
            fromPartial(object: {
                creator?: string;
                cookbookId?: string;
                id?: string;
                field?: string;
                value?: string;
            }): _562.MsgSetItemString;
        };
        MsgSetItemStringResponse: {
            encode(_: _562.MsgSetItemStringResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _562.MsgSetItemStringResponse;
            fromJSON(_: any): _562.MsgSetItemStringResponse;
            toJSON(_: _562.MsgSetItemStringResponse): unknown;
            fromPartial(_: {}): _562.MsgSetItemStringResponse;
        };
        MsgCreateRecipe: {
            encode(message: _562.MsgCreateRecipe, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _562.MsgCreateRecipe;
            fromJSON(object: any): _562.MsgCreateRecipe;
            toJSON(message: _562.MsgCreateRecipe): unknown;
            fromPartial(object: {
                creator?: string;
                cookbookId?: string;
                id?: string;
                name?: string;
                description?: string;
                version?: string;
                coinInputs?: {
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
                itemInputs?: {
                    id?: string;
                    doubles?: {
                        key?: string;
                        minValue?: string;
                        maxValue?: string;
                    }[];
                    longs?: {
                        key?: string;
                        minValue?: any;
                        maxValue?: any;
                    }[];
                    strings?: {
                        key?: string;
                        value?: string;
                    }[];
                }[];
                entries?: {
                    coinOutputs?: {
                        id?: string;
                        coin?: {
                            denom?: string;
                            amount?: string;
                        };
                        program?: string;
                    }[];
                    itemOutputs?: {
                        id?: string;
                        doubles?: {
                            key?: string;
                            weightRanges?: {
                                lower?: string;
                                upper?: string;
                                weight?: any;
                            }[];
                            program?: string;
                        }[];
                        longs?: {
                            key?: string;
                            weightRanges?: {
                                lower?: any;
                                upper?: any;
                                weight?: any;
                            }[];
                            program?: string;
                        }[];
                        strings?: {
                            key?: string;
                            value?: string;
                            program?: string;
                        }[];
                        mutableStrings?: {
                            key?: string;
                            value?: string;
                        }[];
                        transferFee?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        tradePercentage?: string;
                        quantity?: any;
                        amountMinted?: any;
                        tradeable?: boolean;
                    }[];
                    itemModifyOutputs?: {
                        id?: string;
                        itemInputRef?: string;
                        doubles?: {
                            key?: string;
                            weightRanges?: {
                                lower?: string;
                                upper?: string;
                                weight?: any;
                            }[];
                            program?: string;
                        }[];
                        longs?: {
                            key?: string;
                            weightRanges?: {
                                lower?: any;
                                upper?: any;
                                weight?: any;
                            }[];
                            program?: string;
                        }[];
                        strings?: {
                            key?: string;
                            value?: string;
                            program?: string;
                        }[];
                        mutableStrings?: {
                            key?: string;
                            value?: string;
                        }[];
                        transferFee?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        tradePercentage?: string;
                        quantity?: any;
                        amountMinted?: any;
                        tradeable?: boolean;
                    }[];
                };
                outputs?: {
                    entryIds?: string[];
                    weight?: any;
                }[];
                blockInterval?: any;
                costPerBlock?: {
                    denom?: string;
                    amount?: string;
                };
                enabled?: boolean;
                extraInfo?: string;
            }): _562.MsgCreateRecipe;
        };
        MsgCreateRecipeResponse: {
            encode(_: _562.MsgCreateRecipeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _562.MsgCreateRecipeResponse;
            fromJSON(_: any): _562.MsgCreateRecipeResponse;
            toJSON(_: _562.MsgCreateRecipeResponse): unknown;
            fromPartial(_: {}): _562.MsgCreateRecipeResponse;
        };
        MsgUpdateRecipe: {
            encode(message: _562.MsgUpdateRecipe, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _562.MsgUpdateRecipe;
            fromJSON(object: any): _562.MsgUpdateRecipe;
            toJSON(message: _562.MsgUpdateRecipe): unknown;
            fromPartial(object: {
                creator?: string;
                cookbookId?: string;
                id?: string;
                name?: string;
                description?: string;
                version?: string;
                coinInputs?: {
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
                itemInputs?: {
                    id?: string;
                    doubles?: {
                        key?: string;
                        minValue?: string;
                        maxValue?: string;
                    }[];
                    longs?: {
                        key?: string;
                        minValue?: any;
                        maxValue?: any;
                    }[];
                    strings?: {
                        key?: string;
                        value?: string;
                    }[];
                }[];
                entries?: {
                    coinOutputs?: {
                        id?: string;
                        coin?: {
                            denom?: string;
                            amount?: string;
                        };
                        program?: string;
                    }[];
                    itemOutputs?: {
                        id?: string;
                        doubles?: {
                            key?: string;
                            weightRanges?: {
                                lower?: string;
                                upper?: string;
                                weight?: any;
                            }[];
                            program?: string;
                        }[];
                        longs?: {
                            key?: string;
                            weightRanges?: {
                                lower?: any;
                                upper?: any;
                                weight?: any;
                            }[];
                            program?: string;
                        }[];
                        strings?: {
                            key?: string;
                            value?: string;
                            program?: string;
                        }[];
                        mutableStrings?: {
                            key?: string;
                            value?: string;
                        }[];
                        transferFee?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        tradePercentage?: string;
                        quantity?: any;
                        amountMinted?: any;
                        tradeable?: boolean;
                    }[];
                    itemModifyOutputs?: {
                        id?: string;
                        itemInputRef?: string;
                        doubles?: {
                            key?: string;
                            weightRanges?: {
                                lower?: string;
                                upper?: string;
                                weight?: any;
                            }[];
                            program?: string;
                        }[];
                        longs?: {
                            key?: string;
                            weightRanges?: {
                                lower?: any;
                                upper?: any;
                                weight?: any;
                            }[];
                            program?: string;
                        }[];
                        strings?: {
                            key?: string;
                            value?: string;
                            program?: string;
                        }[];
                        mutableStrings?: {
                            key?: string;
                            value?: string;
                        }[];
                        transferFee?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        tradePercentage?: string;
                        quantity?: any;
                        amountMinted?: any;
                        tradeable?: boolean;
                    }[];
                };
                outputs?: {
                    entryIds?: string[];
                    weight?: any;
                }[];
                blockInterval?: any;
                costPerBlock?: {
                    denom?: string;
                    amount?: string;
                };
                enabled?: boolean;
                extraInfo?: string;
            }): _562.MsgUpdateRecipe;
        };
        MsgUpdateRecipeResponse: {
            encode(_: _562.MsgUpdateRecipeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _562.MsgUpdateRecipeResponse;
            fromJSON(_: any): _562.MsgUpdateRecipeResponse;
            toJSON(_: _562.MsgUpdateRecipeResponse): unknown;
            fromPartial(_: {}): _562.MsgUpdateRecipeResponse;
        };
        MsgCreateCookbook: {
            encode(message: _562.MsgCreateCookbook, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _562.MsgCreateCookbook;
            fromJSON(object: any): _562.MsgCreateCookbook;
            toJSON(message: _562.MsgCreateCookbook): unknown;
            fromPartial(object: {
                creator?: string;
                id?: string;
                name?: string;
                description?: string;
                developer?: string;
                version?: string;
                supportEmail?: string;
                enabled?: boolean;
            }): _562.MsgCreateCookbook;
        };
        MsgCreateCookbookResponse: {
            encode(_: _562.MsgCreateCookbookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _562.MsgCreateCookbookResponse;
            fromJSON(_: any): _562.MsgCreateCookbookResponse;
            toJSON(_: _562.MsgCreateCookbookResponse): unknown;
            fromPartial(_: {}): _562.MsgCreateCookbookResponse;
        };
        MsgUpdateCookbook: {
            encode(message: _562.MsgUpdateCookbook, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _562.MsgUpdateCookbook;
            fromJSON(object: any): _562.MsgUpdateCookbook;
            toJSON(message: _562.MsgUpdateCookbook): unknown;
            fromPartial(object: {
                creator?: string;
                id?: string;
                name?: string;
                description?: string;
                developer?: string;
                version?: string;
                supportEmail?: string;
                enabled?: boolean;
            }): _562.MsgUpdateCookbook;
        };
        MsgUpdateCookbookResponse: {
            encode(_: _562.MsgUpdateCookbookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _562.MsgUpdateCookbookResponse;
            fromJSON(_: any): _562.MsgUpdateCookbookResponse;
            toJSON(_: _562.MsgUpdateCookbookResponse): unknown;
            fromPartial(_: {}): _562.MsgUpdateCookbookResponse;
        };
        ItemRef: {
            encode(message: _561.ItemRef, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _561.ItemRef;
            fromJSON(object: any): _561.ItemRef;
            toJSON(message: _561.ItemRef): unknown;
            fromPartial(object: {
                cookbookId?: string;
                itemId?: string;
            }): _561.ItemRef;
        };
        Trade: {
            encode(message: _561.Trade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _561.Trade;
            fromJSON(object: any): _561.Trade;
            toJSON(message: _561.Trade): unknown;
            fromPartial(object: {
                creator?: string;
                id?: any;
                coinInputs?: {
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
                itemInputs?: {
                    id?: string;
                    doubles?: {
                        key?: string;
                        minValue?: string;
                        maxValue?: string;
                    }[];
                    longs?: {
                        key?: string;
                        minValue?: any;
                        maxValue?: any;
                    }[];
                    strings?: {
                        key?: string;
                        value?: string;
                    }[];
                }[];
                coinOutputs?: {
                    denom?: string;
                    amount?: string;
                }[];
                itemOutputs?: {
                    cookbookId?: string;
                    itemId?: string;
                }[];
                extraInfo?: string;
                receiver?: string;
                tradedItemInputs?: {
                    cookbookId?: string;
                    itemId?: string;
                }[];
            }): _561.Trade;
        };
        StripeRefund: {
            encode(message: _560.StripeRefund, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _560.StripeRefund;
            fromJSON(object: any): _560.StripeRefund;
            toJSON(message: _560.StripeRefund): unknown;
            fromPartial(object: {
                payment?: {
                    purchaseId?: string;
                    processorName?: string;
                    payerAddr?: string;
                    amount?: string;
                    productId?: string;
                    signature?: string;
                };
                settled?: boolean;
            }): _560.StripeRefund;
        };
        StandardError: {
            encode(message: _559.StandardError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _559.StandardError;
            fromJSON(object: any): _559.StandardError;
            toJSON(message: _559.StandardError): unknown;
            fromPartial(object: {
                code?: string;
                message?: string;
            }): _559.StandardError;
        };
        RedeemInfo: {
            encode(message: _558.RedeemInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _558.RedeemInfo;
            fromJSON(object: any): _558.RedeemInfo;
            toJSON(message: _558.RedeemInfo): unknown;
            fromPartial(object: {
                id?: string;
                processorName?: string;
                address?: string;
                amount?: string;
                signature?: string;
            }): _558.RedeemInfo;
        };
        CreatePaymentAccount: {
            encode(message: _558.CreatePaymentAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _558.CreatePaymentAccount;
            fromJSON(object: any): _558.CreatePaymentAccount;
            toJSON(message: _558.CreatePaymentAccount): unknown;
            fromPartial(object: {
                address?: string;
                token?: string;
                signature?: string;
            }): _558.CreatePaymentAccount;
        };
        DoubleInputParam: {
            encode(message: _557.DoubleInputParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _557.DoubleInputParam;
            fromJSON(object: any): _557.DoubleInputParam;
            toJSON(message: _557.DoubleInputParam): unknown;
            fromPartial(object: {
                key?: string;
                minValue?: string;
                maxValue?: string;
            }): _557.DoubleInputParam;
        };
        LongInputParam: {
            encode(message: _557.LongInputParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _557.LongInputParam;
            fromJSON(object: any): _557.LongInputParam;
            toJSON(message: _557.LongInputParam): unknown;
            fromPartial(object: {
                key?: string;
                minValue?: any;
                maxValue?: any;
            }): _557.LongInputParam;
        };
        StringInputParam: {
            encode(message: _557.StringInputParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _557.StringInputParam;
            fromJSON(object: any): _557.StringInputParam;
            toJSON(message: _557.StringInputParam): unknown;
            fromPartial(object: {
                key?: string;
                value?: string;
            }): _557.StringInputParam;
        };
        ItemInput: {
            encode(message: _557.ItemInput, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _557.ItemInput;
            fromJSON(object: any): _557.ItemInput;
            toJSON(message: _557.ItemInput): unknown;
            fromPartial(object: {
                id?: string;
                doubles?: {
                    key?: string;
                    minValue?: string;
                    maxValue?: string;
                }[];
                longs?: {
                    key?: string;
                    minValue?: any;
                    maxValue?: any;
                }[];
                strings?: {
                    key?: string;
                    value?: string;
                }[];
            }): _557.ItemInput;
        };
        DoubleWeightRange: {
            encode(message: _557.DoubleWeightRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _557.DoubleWeightRange;
            fromJSON(object: any): _557.DoubleWeightRange;
            toJSON(message: _557.DoubleWeightRange): unknown;
            fromPartial(object: {
                lower?: string;
                upper?: string;
                weight?: any;
            }): _557.DoubleWeightRange;
        };
        DoubleParam: {
            encode(message: _557.DoubleParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _557.DoubleParam;
            fromJSON(object: any): _557.DoubleParam;
            toJSON(message: _557.DoubleParam): unknown;
            fromPartial(object: {
                key?: string;
                weightRanges?: {
                    lower?: string;
                    upper?: string;
                    weight?: any;
                }[];
                program?: string;
            }): _557.DoubleParam;
        };
        IntWeightRange: {
            encode(message: _557.IntWeightRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _557.IntWeightRange;
            fromJSON(object: any): _557.IntWeightRange;
            toJSON(message: _557.IntWeightRange): unknown;
            fromPartial(object: {
                lower?: any;
                upper?: any;
                weight?: any;
            }): _557.IntWeightRange;
        };
        LongParam: {
            encode(message: _557.LongParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _557.LongParam;
            fromJSON(object: any): _557.LongParam;
            toJSON(message: _557.LongParam): unknown;
            fromPartial(object: {
                key?: string;
                weightRanges?: {
                    lower?: any;
                    upper?: any;
                    weight?: any;
                }[];
                program?: string;
            }): _557.LongParam;
        };
        StringParam: {
            encode(message: _557.StringParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _557.StringParam;
            fromJSON(object: any): _557.StringParam;
            toJSON(message: _557.StringParam): unknown;
            fromPartial(object: {
                key?: string;
                value?: string;
                program?: string;
            }): _557.StringParam;
        };
        CoinOutput: {
            encode(message: _557.CoinOutput, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _557.CoinOutput;
            fromJSON(object: any): _557.CoinOutput;
            toJSON(message: _557.CoinOutput): unknown;
            fromPartial(object: {
                id?: string;
                coin?: {
                    denom?: string;
                    amount?: string;
                };
                program?: string;
            }): _557.CoinOutput;
        };
        ItemOutput: {
            encode(message: _557.ItemOutput, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _557.ItemOutput;
            fromJSON(object: any): _557.ItemOutput;
            toJSON(message: _557.ItemOutput): unknown;
            fromPartial(object: {
                id?: string;
                doubles?: {
                    key?: string;
                    weightRanges?: {
                        lower?: string;
                        upper?: string;
                        weight?: any;
                    }[];
                    program?: string;
                }[];
                longs?: {
                    key?: string;
                    weightRanges?: {
                        lower?: any;
                        upper?: any;
                        weight?: any;
                    }[];
                    program?: string;
                }[];
                strings?: {
                    key?: string;
                    value?: string;
                    program?: string;
                }[];
                mutableStrings?: {
                    key?: string;
                    value?: string;
                }[];
                transferFee?: {
                    denom?: string;
                    amount?: string;
                }[];
                tradePercentage?: string;
                quantity?: any;
                amountMinted?: any;
                tradeable?: boolean;
            }): _557.ItemOutput;
        };
        ItemModifyOutput: {
            encode(message: _557.ItemModifyOutput, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _557.ItemModifyOutput;
            fromJSON(object: any): _557.ItemModifyOutput;
            toJSON(message: _557.ItemModifyOutput): unknown;
            fromPartial(object: {
                id?: string;
                itemInputRef?: string;
                doubles?: {
                    key?: string;
                    weightRanges?: {
                        lower?: string;
                        upper?: string;
                        weight?: any;
                    }[];
                    program?: string;
                }[];
                longs?: {
                    key?: string;
                    weightRanges?: {
                        lower?: any;
                        upper?: any;
                        weight?: any;
                    }[];
                    program?: string;
                }[];
                strings?: {
                    key?: string;
                    value?: string;
                    program?: string;
                }[];
                mutableStrings?: {
                    key?: string;
                    value?: string;
                }[];
                transferFee?: {
                    denom?: string;
                    amount?: string;
                }[];
                tradePercentage?: string;
                quantity?: any;
                amountMinted?: any;
                tradeable?: boolean;
            }): _557.ItemModifyOutput;
        };
        EntriesList: {
            encode(message: _557.EntriesList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _557.EntriesList;
            fromJSON(object: any): _557.EntriesList;
            toJSON(message: _557.EntriesList): unknown;
            fromPartial(object: {
                coinOutputs?: {
                    id?: string;
                    coin?: {
                        denom?: string;
                        amount?: string;
                    };
                    program?: string;
                }[];
                itemOutputs?: {
                    id?: string;
                    doubles?: {
                        key?: string;
                        weightRanges?: {
                            lower?: string;
                            upper?: string;
                            weight?: any;
                        }[];
                        program?: string;
                    }[];
                    longs?: {
                        key?: string;
                        weightRanges?: {
                            lower?: any;
                            upper?: any;
                            weight?: any;
                        }[];
                        program?: string;
                    }[];
                    strings?: {
                        key?: string;
                        value?: string;
                        program?: string;
                    }[];
                    mutableStrings?: {
                        key?: string;
                        value?: string;
                    }[];
                    transferFee?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    tradePercentage?: string;
                    quantity?: any;
                    amountMinted?: any;
                    tradeable?: boolean;
                }[];
                itemModifyOutputs?: {
                    id?: string;
                    itemInputRef?: string;
                    doubles?: {
                        key?: string;
                        weightRanges?: {
                            lower?: string;
                            upper?: string;
                            weight?: any;
                        }[];
                        program?: string;
                    }[];
                    longs?: {
                        key?: string;
                        weightRanges?: {
                            lower?: any;
                            upper?: any;
                            weight?: any;
                        }[];
                        program?: string;
                    }[];
                    strings?: {
                        key?: string;
                        value?: string;
                        program?: string;
                    }[];
                    mutableStrings?: {
                        key?: string;
                        value?: string;
                    }[];
                    transferFee?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    tradePercentage?: string;
                    quantity?: any;
                    amountMinted?: any;
                    tradeable?: boolean;
                }[];
            }): _557.EntriesList;
        };
        WeightedOutputs: {
            encode(message: _557.WeightedOutputs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _557.WeightedOutputs;
            fromJSON(object: any): _557.WeightedOutputs;
            toJSON(message: _557.WeightedOutputs): unknown;
            fromPartial(object: {
                entryIds?: string[];
                weight?: any;
            }): _557.WeightedOutputs;
        };
        CoinInput: {
            encode(message: _557.CoinInput, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _557.CoinInput;
            fromJSON(object: any): _557.CoinInput;
            toJSON(message: _557.CoinInput): unknown;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _557.CoinInput;
        };
        Recipe: {
            encode(message: _557.Recipe, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _557.Recipe;
            fromJSON(object: any): _557.Recipe;
            toJSON(message: _557.Recipe): unknown;
            fromPartial(object: {
                cookbookId?: string;
                id?: string;
                nodeVersion?: any;
                name?: string;
                description?: string;
                version?: string;
                coinInputs?: {
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
                itemInputs?: {
                    id?: string;
                    doubles?: {
                        key?: string;
                        minValue?: string;
                        maxValue?: string;
                    }[];
                    longs?: {
                        key?: string;
                        minValue?: any;
                        maxValue?: any;
                    }[];
                    strings?: {
                        key?: string;
                        value?: string;
                    }[];
                }[];
                entries?: {
                    coinOutputs?: {
                        id?: string;
                        coin?: {
                            denom?: string;
                            amount?: string;
                        };
                        program?: string;
                    }[];
                    itemOutputs?: {
                        id?: string;
                        doubles?: {
                            key?: string;
                            weightRanges?: {
                                lower?: string;
                                upper?: string;
                                weight?: any;
                            }[];
                            program?: string;
                        }[];
                        longs?: {
                            key?: string;
                            weightRanges?: {
                                lower?: any;
                                upper?: any;
                                weight?: any;
                            }[];
                            program?: string;
                        }[];
                        strings?: {
                            key?: string;
                            value?: string;
                            program?: string;
                        }[];
                        mutableStrings?: {
                            key?: string;
                            value?: string;
                        }[];
                        transferFee?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        tradePercentage?: string;
                        quantity?: any;
                        amountMinted?: any;
                        tradeable?: boolean;
                    }[];
                    itemModifyOutputs?: {
                        id?: string;
                        itemInputRef?: string;
                        doubles?: {
                            key?: string;
                            weightRanges?: {
                                lower?: string;
                                upper?: string;
                                weight?: any;
                            }[];
                            program?: string;
                        }[];
                        longs?: {
                            key?: string;
                            weightRanges?: {
                                lower?: any;
                                upper?: any;
                                weight?: any;
                            }[];
                            program?: string;
                        }[];
                        strings?: {
                            key?: string;
                            value?: string;
                            program?: string;
                        }[];
                        mutableStrings?: {
                            key?: string;
                            value?: string;
                        }[];
                        transferFee?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        tradePercentage?: string;
                        quantity?: any;
                        amountMinted?: any;
                        tradeable?: boolean;
                    }[];
                };
                outputs?: {
                    entryIds?: string[];
                    weight?: any;
                }[];
                blockInterval?: any;
                costPerBlock?: {
                    denom?: string;
                    amount?: string;
                };
                enabled?: boolean;
                extraInfo?: string;
                createdAt?: any;
                updatedAt?: any;
            }): _557.Recipe;
        };
        QueryListSignUpByReferee: {
            encode(message: _556.QueryListSignUpByReferee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.QueryListSignUpByReferee;
            fromJSON(object: any): _556.QueryListSignUpByReferee;
            toJSON(message: _556.QueryListSignUpByReferee): unknown;
            fromPartial(object: {
                creator?: string;
            }): _556.QueryListSignUpByReferee;
        };
        QueryListSignUpByRefereeResponse: {
            encode(message: _556.QueryListSignUpByRefereeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.QueryListSignUpByRefereeResponse;
            fromJSON(object: any): _556.QueryListSignUpByRefereeResponse;
            toJSON(message: _556.QueryListSignUpByRefereeResponse): unknown;
            fromPartial(object: {
                signup?: {
                    address?: string;
                    users?: {
                        username?: string;
                        address?: string;
                    }[];
                };
            }): _556.QueryListSignUpByRefereeResponse;
        };
        QueryListTradesByCreatorRequest: {
            encode(message: _556.QueryListTradesByCreatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.QueryListTradesByCreatorRequest;
            fromJSON(object: any): _556.QueryListTradesByCreatorRequest;
            toJSON(message: _556.QueryListTradesByCreatorRequest): unknown;
            fromPartial(object: {
                creator?: string;
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _556.QueryListTradesByCreatorRequest;
        };
        QueryListTradesByCreatorResponse: {
            encode(message: _556.QueryListTradesByCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.QueryListTradesByCreatorResponse;
            fromJSON(object: any): _556.QueryListTradesByCreatorResponse;
            toJSON(message: _556.QueryListTradesByCreatorResponse): unknown;
            fromPartial(object: {
                trades?: {
                    creator?: string;
                    id?: any;
                    coinInputs?: {
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    itemInputs?: {
                        id?: string;
                        doubles?: {
                            key?: string;
                            minValue?: string;
                            maxValue?: string;
                        }[];
                        longs?: {
                            key?: string;
                            minValue?: any;
                            maxValue?: any;
                        }[];
                        strings?: {
                            key?: string;
                            value?: string;
                        }[];
                    }[];
                    coinOutputs?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    itemOutputs?: {
                        cookbookId?: string;
                        itemId?: string;
                    }[];
                    extraInfo?: string;
                    receiver?: string;
                    tradedItemInputs?: {
                        cookbookId?: string;
                        itemId?: string;
                    }[];
                }[];
                pagination?: {
                    nextKey?: Uint8Array;
                    total?: any;
                };
            }): _556.QueryListTradesByCreatorResponse;
        };
        QueryGetItemHistoryRequest: {
            encode(message: _556.QueryGetItemHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.QueryGetItemHistoryRequest;
            fromJSON(object: any): _556.QueryGetItemHistoryRequest;
            toJSON(message: _556.QueryGetItemHistoryRequest): unknown;
            fromPartial(object: {
                cookbookId?: string;
                itemId?: string;
                mintedNumber?: string;
            }): _556.QueryGetItemHistoryRequest;
        };
        QueryGetItemHistoryResponse: {
            encode(message: _556.QueryGetItemHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.QueryGetItemHistoryResponse;
            fromJSON(object: any): _556.QueryGetItemHistoryResponse;
            toJSON(message: _556.QueryGetItemHistoryResponse): unknown;
            fromPartial(object: {
                history?: {
                    cookbookId?: string;
                    id?: string;
                    from?: string;
                    to?: string;
                    createdAt?: any;
                }[];
            }): _556.QueryGetItemHistoryResponse;
        };
        QueryGetRecipeHistoryRequest: {
            encode(message: _556.QueryGetRecipeHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.QueryGetRecipeHistoryRequest;
            fromJSON(object: any): _556.QueryGetRecipeHistoryRequest;
            toJSON(message: _556.QueryGetRecipeHistoryRequest): unknown;
            fromPartial(object: {
                cookbookId?: string;
                recipeId?: string;
            }): _556.QueryGetRecipeHistoryRequest;
        };
        QueryGetRecipeHistoryResponse: {
            encode(message: _556.QueryGetRecipeHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.QueryGetRecipeHistoryResponse;
            fromJSON(object: any): _556.QueryGetRecipeHistoryResponse;
            toJSON(message: _556.QueryGetRecipeHistoryResponse): unknown;
            fromPartial(object: {
                history?: {
                    itemId?: string;
                    cookbookId?: string;
                    recipeId?: string;
                    sender?: string;
                    senderName?: string;
                    receiver?: string;
                    amount?: string;
                    createdAt?: any;
                }[];
            }): _556.QueryGetRecipeHistoryResponse;
        };
        RecipeHistory: {
            encode(message: _556.RecipeHistory, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.RecipeHistory;
            fromJSON(object: any): _556.RecipeHistory;
            toJSON(message: _556.RecipeHistory): unknown;
            fromPartial(object: {
                itemId?: string;
                cookbookId?: string;
                recipeId?: string;
                sender?: string;
                senderName?: string;
                receiver?: string;
                amount?: string;
                createdAt?: any;
            }): _556.RecipeHistory;
        };
        QueryGetStripeRefundRequest: {
            encode(_: _556.QueryGetStripeRefundRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.QueryGetStripeRefundRequest;
            fromJSON(_: any): _556.QueryGetStripeRefundRequest;
            toJSON(_: _556.QueryGetStripeRefundRequest): unknown;
            fromPartial(_: {}): _556.QueryGetStripeRefundRequest;
        };
        QueryGetStripeRefundResponse: {
            encode(message: _556.QueryGetStripeRefundResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.QueryGetStripeRefundResponse;
            fromJSON(object: any): _556.QueryGetStripeRefundResponse;
            toJSON(message: _556.QueryGetStripeRefundResponse): unknown;
            fromPartial(object: {
                refunds?: {
                    payment?: {
                        purchaseId?: string;
                        processorName?: string;
                        payerAddr?: string;
                        amount?: string;
                        productId?: string;
                        signature?: string;
                    };
                    settled?: boolean;
                }[];
            }): _556.QueryGetStripeRefundResponse;
        };
        QueryGetRedeemInfoRequest: {
            encode(message: _556.QueryGetRedeemInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.QueryGetRedeemInfoRequest;
            fromJSON(object: any): _556.QueryGetRedeemInfoRequest;
            toJSON(message: _556.QueryGetRedeemInfoRequest): unknown;
            fromPartial(object: {
                id?: string;
            }): _556.QueryGetRedeemInfoRequest;
        };
        QueryGetRedeemInfoResponse: {
            encode(message: _556.QueryGetRedeemInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.QueryGetRedeemInfoResponse;
            fromJSON(object: any): _556.QueryGetRedeemInfoResponse;
            toJSON(message: _556.QueryGetRedeemInfoResponse): unknown;
            fromPartial(object: {
                redeemInfo?: {
                    id?: string;
                    processorName?: string;
                    address?: string;
                    amount?: string;
                    signature?: string;
                };
            }): _556.QueryGetRedeemInfoResponse;
        };
        QueryAllRedeemInfoRequest: {
            encode(message: _556.QueryAllRedeemInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.QueryAllRedeemInfoRequest;
            fromJSON(object: any): _556.QueryAllRedeemInfoRequest;
            toJSON(message: _556.QueryAllRedeemInfoRequest): unknown;
            fromPartial(object: {
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _556.QueryAllRedeemInfoRequest;
        };
        QueryAllRedeemInfoResponse: {
            encode(message: _556.QueryAllRedeemInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.QueryAllRedeemInfoResponse;
            fromJSON(object: any): _556.QueryAllRedeemInfoResponse;
            toJSON(message: _556.QueryAllRedeemInfoResponse): unknown;
            fromPartial(object: {
                redeemInfo?: {
                    id?: string;
                    processorName?: string;
                    address?: string;
                    amount?: string;
                    signature?: string;
                }[];
                pagination?: {
                    nextKey?: Uint8Array;
                    total?: any;
                };
            }): _556.QueryAllRedeemInfoResponse;
        };
        QueryGetPaymentInfoRequest: {
            encode(message: _556.QueryGetPaymentInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.QueryGetPaymentInfoRequest;
            fromJSON(object: any): _556.QueryGetPaymentInfoRequest;
            toJSON(message: _556.QueryGetPaymentInfoRequest): unknown;
            fromPartial(object: {
                purchaseId?: string;
            }): _556.QueryGetPaymentInfoRequest;
        };
        QueryGetPaymentInfoResponse: {
            encode(message: _556.QueryGetPaymentInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.QueryGetPaymentInfoResponse;
            fromJSON(object: any): _556.QueryGetPaymentInfoResponse;
            toJSON(message: _556.QueryGetPaymentInfoResponse): unknown;
            fromPartial(object: {
                paymentInfo?: {
                    purchaseId?: string;
                    processorName?: string;
                    payerAddr?: string;
                    amount?: string;
                    productId?: string;
                    signature?: string;
                };
            }): _556.QueryGetPaymentInfoResponse;
        };
        QueryAllPaymentInfoRequest: {
            encode(message: _556.QueryAllPaymentInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.QueryAllPaymentInfoRequest;
            fromJSON(object: any): _556.QueryAllPaymentInfoRequest;
            toJSON(message: _556.QueryAllPaymentInfoRequest): unknown;
            fromPartial(object: {
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _556.QueryAllPaymentInfoRequest;
        };
        QueryAllPaymentInfoResponse: {
            encode(message: _556.QueryAllPaymentInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.QueryAllPaymentInfoResponse;
            fromJSON(object: any): _556.QueryAllPaymentInfoResponse;
            toJSON(message: _556.QueryAllPaymentInfoResponse): unknown;
            fromPartial(object: {
                paymentInfo?: {
                    purchaseId?: string;
                    processorName?: string;
                    payerAddr?: string;
                    amount?: string;
                    productId?: string;
                    signature?: string;
                }[];
                pagination?: {
                    nextKey?: Uint8Array;
                    total?: any;
                };
            }): _556.QueryAllPaymentInfoResponse;
        };
        QueryGetUsernameByAddressRequest: {
            encode(message: _556.QueryGetUsernameByAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.QueryGetUsernameByAddressRequest;
            fromJSON(object: any): _556.QueryGetUsernameByAddressRequest;
            toJSON(message: _556.QueryGetUsernameByAddressRequest): unknown;
            fromPartial(object: {
                address?: string;
            }): _556.QueryGetUsernameByAddressRequest;
        };
        QueryGetAddressByUsernameRequest: {
            encode(message: _556.QueryGetAddressByUsernameRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.QueryGetAddressByUsernameRequest;
            fromJSON(object: any): _556.QueryGetAddressByUsernameRequest;
            toJSON(message: _556.QueryGetAddressByUsernameRequest): unknown;
            fromPartial(object: {
                username?: string;
            }): _556.QueryGetAddressByUsernameRequest;
        };
        QueryGetUsernameByAddressResponse: {
            encode(message: _556.QueryGetUsernameByAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.QueryGetUsernameByAddressResponse;
            fromJSON(object: any): _556.QueryGetUsernameByAddressResponse;
            toJSON(message: _556.QueryGetUsernameByAddressResponse): unknown;
            fromPartial(object: {
                username?: {
                    value?: string;
                };
            }): _556.QueryGetUsernameByAddressResponse;
        };
        QueryGetAddressByUsernameResponse: {
            encode(message: _556.QueryGetAddressByUsernameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.QueryGetAddressByUsernameResponse;
            fromJSON(object: any): _556.QueryGetAddressByUsernameResponse;
            toJSON(message: _556.QueryGetAddressByUsernameResponse): unknown;
            fromPartial(object: {
                address?: {
                    value?: string;
                };
            }): _556.QueryGetAddressByUsernameResponse;
        };
        QueryGetTradeRequest: {
            encode(message: _556.QueryGetTradeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.QueryGetTradeRequest;
            fromJSON(object: any): _556.QueryGetTradeRequest;
            toJSON(message: _556.QueryGetTradeRequest): unknown;
            fromPartial(object: {
                id?: any;
            }): _556.QueryGetTradeRequest;
        };
        QueryGetTradeResponse: {
            encode(message: _556.QueryGetTradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.QueryGetTradeResponse;
            fromJSON(object: any): _556.QueryGetTradeResponse;
            toJSON(message: _556.QueryGetTradeResponse): unknown;
            fromPartial(object: {
                trade?: {
                    creator?: string;
                    id?: any;
                    coinInputs?: {
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    itemInputs?: {
                        id?: string;
                        doubles?: {
                            key?: string;
                            minValue?: string;
                            maxValue?: string;
                        }[];
                        longs?: {
                            key?: string;
                            minValue?: any;
                            maxValue?: any;
                        }[];
                        strings?: {
                            key?: string;
                            value?: string;
                        }[];
                    }[];
                    coinOutputs?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    itemOutputs?: {
                        cookbookId?: string;
                        itemId?: string;
                    }[];
                    extraInfo?: string;
                    receiver?: string;
                    tradedItemInputs?: {
                        cookbookId?: string;
                        itemId?: string;
                    }[];
                };
            }): _556.QueryGetTradeResponse;
        };
        QueryListItemByOwnerRequest: {
            encode(message: _556.QueryListItemByOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.QueryListItemByOwnerRequest;
            fromJSON(object: any): _556.QueryListItemByOwnerRequest;
            toJSON(message: _556.QueryListItemByOwnerRequest): unknown;
            fromPartial(object: {
                owner?: string;
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _556.QueryListItemByOwnerRequest;
        };
        QueryListItemByOwnerResponse: {
            encode(message: _556.QueryListItemByOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.QueryListItemByOwnerResponse;
            fromJSON(object: any): _556.QueryListItemByOwnerResponse;
            toJSON(message: _556.QueryListItemByOwnerResponse): unknown;
            fromPartial(object: {
                items?: {
                    owner?: string;
                    cookbookId?: string;
                    id?: string;
                    nodeVersion?: any;
                    doubles?: {
                        key?: string;
                        value?: string;
                    }[];
                    longs?: {
                        key?: string;
                        value?: any;
                    }[];
                    strings?: {
                        key?: string;
                        value?: string;
                    }[];
                    mutableStrings?: {
                        key?: string;
                        value?: string;
                    }[];
                    tradeable?: boolean;
                    lastUpdate?: any;
                    transferFee?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    tradePercentage?: string;
                    createdAt?: any;
                    updatedAt?: any;
                    recipeId?: string;
                }[];
                pagination?: {
                    nextKey?: Uint8Array;
                    total?: any;
                };
            }): _556.QueryListItemByOwnerResponse;
        };
        QueryGetGoogleInAppPurchaseOrderRequest: {
            encode(message: _556.QueryGetGoogleInAppPurchaseOrderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.QueryGetGoogleInAppPurchaseOrderRequest;
            fromJSON(object: any): _556.QueryGetGoogleInAppPurchaseOrderRequest;
            toJSON(message: _556.QueryGetGoogleInAppPurchaseOrderRequest): unknown;
            fromPartial(object: {
                purchaseToken?: string;
            }): _556.QueryGetGoogleInAppPurchaseOrderRequest;
        };
        QueryGetGoogleInAppPurchaseOrderResponse: {
            encode(message: _556.QueryGetGoogleInAppPurchaseOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.QueryGetGoogleInAppPurchaseOrderResponse;
            fromJSON(object: any): _556.QueryGetGoogleInAppPurchaseOrderResponse;
            toJSON(message: _556.QueryGetGoogleInAppPurchaseOrderResponse): unknown;
            fromPartial(object: {
                order?: {
                    creator?: string;
                    productId?: string;
                    purchaseToken?: string;
                    receiptDataBase64?: string;
                    signature?: string;
                };
            }): _556.QueryGetGoogleInAppPurchaseOrderResponse;
        };
        QueryListExecutionsByItemRequest: {
            encode(message: _556.QueryListExecutionsByItemRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.QueryListExecutionsByItemRequest;
            fromJSON(object: any): _556.QueryListExecutionsByItemRequest;
            toJSON(message: _556.QueryListExecutionsByItemRequest): unknown;
            fromPartial(object: {
                cookbookId?: string;
                itemId?: string;
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _556.QueryListExecutionsByItemRequest;
        };
        QueryListExecutionsByItemResponse: {
            encode(message: _556.QueryListExecutionsByItemResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.QueryListExecutionsByItemResponse;
            fromJSON(object: any): _556.QueryListExecutionsByItemResponse;
            toJSON(message: _556.QueryListExecutionsByItemResponse): unknown;
            fromPartial(object: {
                completedExecutions?: {
                    creator?: string;
                    id?: string;
                    recipeId?: string;
                    cookbookId?: string;
                    recipeVersion?: string;
                    nodeVersion?: any;
                    blockHeight?: any;
                    itemInputs?: {
                        id?: string;
                        doubles?: {
                            key?: string;
                            value?: string;
                        }[];
                        longs?: {
                            key?: string;
                            value?: any;
                        }[];
                        strings?: {
                            key?: string;
                            value?: string;
                        }[];
                    }[];
                    coinInputs?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    coinOutputs?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    itemOutputIds?: string[];
                    itemModifyOutputIds?: string[];
                }[];
                pendingExecutions?: {
                    creator?: string;
                    id?: string;
                    recipeId?: string;
                    cookbookId?: string;
                    recipeVersion?: string;
                    nodeVersion?: any;
                    blockHeight?: any;
                    itemInputs?: {
                        id?: string;
                        doubles?: {
                            key?: string;
                            value?: string;
                        }[];
                        longs?: {
                            key?: string;
                            value?: any;
                        }[];
                        strings?: {
                            key?: string;
                            value?: string;
                        }[];
                    }[];
                    coinInputs?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    coinOutputs?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    itemOutputIds?: string[];
                    itemModifyOutputIds?: string[];
                }[];
                pagination?: {
                    nextKey?: Uint8Array;
                    total?: any;
                };
            }): _556.QueryListExecutionsByItemResponse;
        };
        QueryListExecutionsByRecipeRequest: {
            encode(message: _556.QueryListExecutionsByRecipeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.QueryListExecutionsByRecipeRequest;
            fromJSON(object: any): _556.QueryListExecutionsByRecipeRequest;
            toJSON(message: _556.QueryListExecutionsByRecipeRequest): unknown;
            fromPartial(object: {
                cookbookId?: string;
                recipeId?: string;
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _556.QueryListExecutionsByRecipeRequest;
        };
        QueryListExecutionsByRecipeResponse: {
            encode(message: _556.QueryListExecutionsByRecipeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.QueryListExecutionsByRecipeResponse;
            fromJSON(object: any): _556.QueryListExecutionsByRecipeResponse;
            toJSON(message: _556.QueryListExecutionsByRecipeResponse): unknown;
            fromPartial(object: {
                completedExecutions?: {
                    creator?: string;
                    id?: string;
                    recipeId?: string;
                    cookbookId?: string;
                    recipeVersion?: string;
                    nodeVersion?: any;
                    blockHeight?: any;
                    itemInputs?: {
                        id?: string;
                        doubles?: {
                            key?: string;
                            value?: string;
                        }[];
                        longs?: {
                            key?: string;
                            value?: any;
                        }[];
                        strings?: {
                            key?: string;
                            value?: string;
                        }[];
                    }[];
                    coinInputs?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    coinOutputs?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    itemOutputIds?: string[];
                    itemModifyOutputIds?: string[];
                }[];
                pendingExecutions?: {
                    creator?: string;
                    id?: string;
                    recipeId?: string;
                    cookbookId?: string;
                    recipeVersion?: string;
                    nodeVersion?: any;
                    blockHeight?: any;
                    itemInputs?: {
                        id?: string;
                        doubles?: {
                            key?: string;
                            value?: string;
                        }[];
                        longs?: {
                            key?: string;
                            value?: any;
                        }[];
                        strings?: {
                            key?: string;
                            value?: string;
                        }[];
                    }[];
                    coinInputs?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    coinOutputs?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    itemOutputIds?: string[];
                    itemModifyOutputIds?: string[];
                }[];
                pagination?: {
                    nextKey?: Uint8Array;
                    total?: any;
                };
            }): _556.QueryListExecutionsByRecipeResponse;
        };
        QueryGetExecutionRequest: {
            encode(message: _556.QueryGetExecutionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.QueryGetExecutionRequest;
            fromJSON(object: any): _556.QueryGetExecutionRequest;
            toJSON(message: _556.QueryGetExecutionRequest): unknown;
            fromPartial(object: {
                id?: string;
            }): _556.QueryGetExecutionRequest;
        };
        QueryGetExecutionResponse: {
            encode(message: _556.QueryGetExecutionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.QueryGetExecutionResponse;
            fromJSON(object: any): _556.QueryGetExecutionResponse;
            toJSON(message: _556.QueryGetExecutionResponse): unknown;
            fromPartial(object: {
                execution?: {
                    creator?: string;
                    id?: string;
                    recipeId?: string;
                    cookbookId?: string;
                    recipeVersion?: string;
                    nodeVersion?: any;
                    blockHeight?: any;
                    itemInputs?: {
                        id?: string;
                        doubles?: {
                            key?: string;
                            value?: string;
                        }[];
                        longs?: {
                            key?: string;
                            value?: any;
                        }[];
                        strings?: {
                            key?: string;
                            value?: string;
                        }[];
                    }[];
                    coinInputs?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    coinOutputs?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    itemOutputIds?: string[];
                    itemModifyOutputIds?: string[];
                };
                completed?: boolean;
            }): _556.QueryGetExecutionResponse;
        };
        QueryListRecipesByCookbookRequest: {
            encode(message: _556.QueryListRecipesByCookbookRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.QueryListRecipesByCookbookRequest;
            fromJSON(object: any): _556.QueryListRecipesByCookbookRequest;
            toJSON(message: _556.QueryListRecipesByCookbookRequest): unknown;
            fromPartial(object: {
                cookbookId?: string;
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _556.QueryListRecipesByCookbookRequest;
        };
        QueryListRecipesByCookbookResponse: {
            encode(message: _556.QueryListRecipesByCookbookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.QueryListRecipesByCookbookResponse;
            fromJSON(object: any): _556.QueryListRecipesByCookbookResponse;
            toJSON(message: _556.QueryListRecipesByCookbookResponse): unknown;
            fromPartial(object: {
                recipes?: {
                    cookbookId?: string;
                    id?: string;
                    nodeVersion?: any;
                    name?: string;
                    description?: string;
                    version?: string;
                    coinInputs?: {
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    itemInputs?: {
                        id?: string;
                        doubles?: {
                            key?: string;
                            minValue?: string;
                            maxValue?: string;
                        }[];
                        longs?: {
                            key?: string;
                            minValue?: any;
                            maxValue?: any;
                        }[];
                        strings?: {
                            key?: string;
                            value?: string;
                        }[];
                    }[];
                    entries?: {
                        coinOutputs?: {
                            id?: string;
                            coin?: {
                                denom?: string;
                                amount?: string;
                            };
                            program?: string;
                        }[];
                        itemOutputs?: {
                            id?: string;
                            doubles?: {
                                key?: string;
                                weightRanges?: {
                                    lower?: string;
                                    upper?: string;
                                    weight?: any;
                                }[];
                                program?: string;
                            }[];
                            longs?: {
                                key?: string;
                                weightRanges?: {
                                    lower?: any;
                                    upper?: any;
                                    weight?: any;
                                }[];
                                program?: string;
                            }[];
                            strings?: {
                                key?: string;
                                value?: string;
                                program?: string;
                            }[];
                            mutableStrings?: {
                                key?: string;
                                value?: string;
                            }[];
                            transferFee?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            tradePercentage?: string;
                            quantity?: any;
                            amountMinted?: any;
                            tradeable?: boolean;
                        }[];
                        itemModifyOutputs?: {
                            id?: string;
                            itemInputRef?: string;
                            doubles?: {
                                key?: string;
                                weightRanges?: {
                                    lower?: string;
                                    upper?: string;
                                    weight?: any;
                                }[];
                                program?: string;
                            }[];
                            longs?: {
                                key?: string;
                                weightRanges?: {
                                    lower?: any;
                                    upper?: any;
                                    weight?: any;
                                }[];
                                program?: string;
                            }[];
                            strings?: {
                                key?: string;
                                value?: string;
                                program?: string;
                            }[];
                            mutableStrings?: {
                                key?: string;
                                value?: string;
                            }[];
                            transferFee?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            tradePercentage?: string;
                            quantity?: any;
                            amountMinted?: any;
                            tradeable?: boolean;
                        }[];
                    };
                    outputs?: {
                        entryIds?: string[];
                        weight?: any;
                    }[];
                    blockInterval?: any;
                    costPerBlock?: {
                        denom?: string;
                        amount?: string;
                    };
                    enabled?: boolean;
                    extraInfo?: string;
                    createdAt?: any;
                    updatedAt?: any;
                }[];
                pagination?: {
                    nextKey?: Uint8Array;
                    total?: any;
                };
            }): _556.QueryListRecipesByCookbookResponse;
        };
        QueryGetItemRequest: {
            encode(message: _556.QueryGetItemRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.QueryGetItemRequest;
            fromJSON(object: any): _556.QueryGetItemRequest;
            toJSON(message: _556.QueryGetItemRequest): unknown;
            fromPartial(object: {
                cookbookId?: string;
                id?: string;
            }): _556.QueryGetItemRequest;
        };
        QueryGetItemResponse: {
            encode(message: _556.QueryGetItemResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.QueryGetItemResponse;
            fromJSON(object: any): _556.QueryGetItemResponse;
            toJSON(message: _556.QueryGetItemResponse): unknown;
            fromPartial(object: {
                item?: {
                    owner?: string;
                    cookbookId?: string;
                    id?: string;
                    nodeVersion?: any;
                    doubles?: {
                        key?: string;
                        value?: string;
                    }[];
                    longs?: {
                        key?: string;
                        value?: any;
                    }[];
                    strings?: {
                        key?: string;
                        value?: string;
                    }[];
                    mutableStrings?: {
                        key?: string;
                        value?: string;
                    }[];
                    tradeable?: boolean;
                    lastUpdate?: any;
                    transferFee?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    tradePercentage?: string;
                    createdAt?: any;
                    updatedAt?: any;
                    recipeId?: string;
                };
            }): _556.QueryGetItemResponse;
        };
        QueryGetRecipeRequest: {
            encode(message: _556.QueryGetRecipeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.QueryGetRecipeRequest;
            fromJSON(object: any): _556.QueryGetRecipeRequest;
            toJSON(message: _556.QueryGetRecipeRequest): unknown;
            fromPartial(object: {
                cookbookId?: string;
                id?: string;
            }): _556.QueryGetRecipeRequest;
        };
        QueryGetRecipeResponse: {
            encode(message: _556.QueryGetRecipeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.QueryGetRecipeResponse;
            fromJSON(object: any): _556.QueryGetRecipeResponse;
            toJSON(message: _556.QueryGetRecipeResponse): unknown;
            fromPartial(object: {
                recipe?: {
                    cookbookId?: string;
                    id?: string;
                    nodeVersion?: any;
                    name?: string;
                    description?: string;
                    version?: string;
                    coinInputs?: {
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    itemInputs?: {
                        id?: string;
                        doubles?: {
                            key?: string;
                            minValue?: string;
                            maxValue?: string;
                        }[];
                        longs?: {
                            key?: string;
                            minValue?: any;
                            maxValue?: any;
                        }[];
                        strings?: {
                            key?: string;
                            value?: string;
                        }[];
                    }[];
                    entries?: {
                        coinOutputs?: {
                            id?: string;
                            coin?: {
                                denom?: string;
                                amount?: string;
                            };
                            program?: string;
                        }[];
                        itemOutputs?: {
                            id?: string;
                            doubles?: {
                                key?: string;
                                weightRanges?: {
                                    lower?: string;
                                    upper?: string;
                                    weight?: any;
                                }[];
                                program?: string;
                            }[];
                            longs?: {
                                key?: string;
                                weightRanges?: {
                                    lower?: any;
                                    upper?: any;
                                    weight?: any;
                                }[];
                                program?: string;
                            }[];
                            strings?: {
                                key?: string;
                                value?: string;
                                program?: string;
                            }[];
                            mutableStrings?: {
                                key?: string;
                                value?: string;
                            }[];
                            transferFee?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            tradePercentage?: string;
                            quantity?: any;
                            amountMinted?: any;
                            tradeable?: boolean;
                        }[];
                        itemModifyOutputs?: {
                            id?: string;
                            itemInputRef?: string;
                            doubles?: {
                                key?: string;
                                weightRanges?: {
                                    lower?: string;
                                    upper?: string;
                                    weight?: any;
                                }[];
                                program?: string;
                            }[];
                            longs?: {
                                key?: string;
                                weightRanges?: {
                                    lower?: any;
                                    upper?: any;
                                    weight?: any;
                                }[];
                                program?: string;
                            }[];
                            strings?: {
                                key?: string;
                                value?: string;
                                program?: string;
                            }[];
                            mutableStrings?: {
                                key?: string;
                                value?: string;
                            }[];
                            transferFee?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            tradePercentage?: string;
                            quantity?: any;
                            amountMinted?: any;
                            tradeable?: boolean;
                        }[];
                    };
                    outputs?: {
                        entryIds?: string[];
                        weight?: any;
                    }[];
                    blockInterval?: any;
                    costPerBlock?: {
                        denom?: string;
                        amount?: string;
                    };
                    enabled?: boolean;
                    extraInfo?: string;
                    createdAt?: any;
                    updatedAt?: any;
                };
            }): _556.QueryGetRecipeResponse;
        };
        QueryListCookbooksByCreatorRequest: {
            encode(message: _556.QueryListCookbooksByCreatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.QueryListCookbooksByCreatorRequest;
            fromJSON(object: any): _556.QueryListCookbooksByCreatorRequest;
            toJSON(message: _556.QueryListCookbooksByCreatorRequest): unknown;
            fromPartial(object: {
                creator?: string;
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _556.QueryListCookbooksByCreatorRequest;
        };
        QueryListCookbooksByCreatorResponse: {
            encode(message: _556.QueryListCookbooksByCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.QueryListCookbooksByCreatorResponse;
            fromJSON(object: any): _556.QueryListCookbooksByCreatorResponse;
            toJSON(message: _556.QueryListCookbooksByCreatorResponse): unknown;
            fromPartial(object: {
                cookbooks?: {
                    creator?: string;
                    id?: string;
                    nodeVersion?: any;
                    name?: string;
                    description?: string;
                    developer?: string;
                    version?: string;
                    supportEmail?: string;
                    enabled?: boolean;
                }[];
                pagination?: {
                    nextKey?: Uint8Array;
                    total?: any;
                };
            }): _556.QueryListCookbooksByCreatorResponse;
        };
        QueryGetCookbookRequest: {
            encode(message: _556.QueryGetCookbookRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.QueryGetCookbookRequest;
            fromJSON(object: any): _556.QueryGetCookbookRequest;
            toJSON(message: _556.QueryGetCookbookRequest): unknown;
            fromPartial(object: {
                id?: string;
            }): _556.QueryGetCookbookRequest;
        };
        QueryGetCookbookResponse: {
            encode(message: _556.QueryGetCookbookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.QueryGetCookbookResponse;
            fromJSON(object: any): _556.QueryGetCookbookResponse;
            toJSON(message: _556.QueryGetCookbookResponse): unknown;
            fromPartial(object: {
                cookbook?: {
                    creator?: string;
                    id?: string;
                    nodeVersion?: any;
                    name?: string;
                    description?: string;
                    developer?: string;
                    version?: string;
                    supportEmail?: string;
                    enabled?: boolean;
                };
            }): _556.QueryGetCookbookResponse;
        };
        PaymentInfo: {
            encode(message: _555.PaymentInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _555.PaymentInfo;
            fromJSON(object: any): _555.PaymentInfo;
            toJSON(message: _555.PaymentInfo): unknown;
            fromPartial(object: {
                purchaseId?: string;
                processorName?: string;
                payerAddr?: string;
                amount?: string;
                productId?: string;
                signature?: string;
            }): _555.PaymentInfo;
        };
        GoogleInAppPurchasePackage: {
            encode(message: _554.GoogleInAppPurchasePackage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _554.GoogleInAppPurchasePackage;
            fromJSON(object: any): _554.GoogleInAppPurchasePackage;
            toJSON(message: _554.GoogleInAppPurchasePackage): unknown;
            fromPartial(object: {
                packageName?: string;
                productId?: string;
                amount?: string;
            }): _554.GoogleInAppPurchasePackage;
        };
        CoinIssuer: {
            encode(message: _554.CoinIssuer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _554.CoinIssuer;
            fromJSON(object: any): _554.CoinIssuer;
            toJSON(message: _554.CoinIssuer): unknown;
            fromPartial(object: {
                coinDenom?: string;
                packages?: {
                    packageName?: string;
                    productId?: string;
                    amount?: string;
                }[];
                googleInAppPurchasePubKey?: string;
                entityName?: string;
            }): _554.CoinIssuer;
        };
        PaymentProcessor: {
            encode(message: _554.PaymentProcessor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _554.PaymentProcessor;
            fromJSON(object: any): _554.PaymentProcessor;
            toJSON(message: _554.PaymentProcessor): unknown;
            fromPartial(object: {
                coinDenom?: string;
                pubKey?: string;
                processorPercentage?: string;
                validatorsPercentage?: string;
                name?: string;
            }): _554.PaymentProcessor;
        };
        Params: {
            encode(message: _554.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _554.Params;
            fromJSON(object: any): _554.Params;
            toJSON(message: _554.Params): unknown;
            fromPartial(object: {
                coinIssuers?: {
                    coinDenom?: string;
                    packages?: {
                        packageName?: string;
                        productId?: string;
                        amount?: string;
                    }[];
                    googleInAppPurchasePubKey?: string;
                    entityName?: string;
                }[];
                paymentProcessors?: {
                    coinDenom?: string;
                    pubKey?: string;
                    processorPercentage?: string;
                    validatorsPercentage?: string;
                    name?: string;
                }[];
                recipeFeePercentage?: string;
                itemTransferFeePercentage?: string;
                updateItemStringFee?: {
                    denom?: string;
                    amount?: string;
                };
                minTransferFee?: string;
                maxTransferFee?: string;
                updateUsernameFee?: {
                    denom?: string;
                    amount?: string;
                };
                distrEpochIdentifier?: string;
                engineVersion?: any;
                maxTxsInBlock?: any;
            }): _554.Params;
        };
        DoubleKeyValue: {
            encode(message: _553.DoubleKeyValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _553.DoubleKeyValue;
            fromJSON(object: any): _553.DoubleKeyValue;
            toJSON(message: _553.DoubleKeyValue): unknown;
            fromPartial(object: {
                key?: string;
                value?: string;
            }): _553.DoubleKeyValue;
        };
        LongKeyValue: {
            encode(message: _553.LongKeyValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _553.LongKeyValue;
            fromJSON(object: any): _553.LongKeyValue;
            toJSON(message: _553.LongKeyValue): unknown;
            fromPartial(object: {
                key?: string;
                value?: any;
            }): _553.LongKeyValue;
        };
        StringKeyValue: {
            encode(message: _553.StringKeyValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _553.StringKeyValue;
            fromJSON(object: any): _553.StringKeyValue;
            toJSON(message: _553.StringKeyValue): unknown;
            fromPartial(object: {
                key?: string;
                value?: string;
            }): _553.StringKeyValue;
        };
        Item: {
            encode(message: _553.Item, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _553.Item;
            fromJSON(object: any): _553.Item;
            toJSON(message: _553.Item): unknown;
            fromPartial(object: {
                owner?: string;
                cookbookId?: string;
                id?: string;
                nodeVersion?: any;
                doubles?: {
                    key?: string;
                    value?: string;
                }[];
                longs?: {
                    key?: string;
                    value?: any;
                }[];
                strings?: {
                    key?: string;
                    value?: string;
                }[];
                mutableStrings?: {
                    key?: string;
                    value?: string;
                }[];
                tradeable?: boolean;
                lastUpdate?: any;
                transferFee?: {
                    denom?: string;
                    amount?: string;
                }[];
                tradePercentage?: string;
                createdAt?: any;
                updatedAt?: any;
                recipeId?: string;
            }): _553.Item;
        };
        ItemHistory: {
            encode(message: _553.ItemHistory, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _553.ItemHistory;
            fromJSON(object: any): _553.ItemHistory;
            toJSON(message: _553.ItemHistory): unknown;
            fromPartial(object: {
                cookbookId?: string;
                id?: string;
                from?: string;
                to?: string;
                createdAt?: any;
            }): _553.ItemHistory;
        };
        History: {
            encode(message: _552.History, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _552.History;
            fromJSON(object: any): _552.History;
            toJSON(message: _552.History): unknown;
            fromPartial(object: {
                address?: string;
                amount?: string;
                cookbookId?: string;
                recipeId?: string;
                createdAt?: any;
                type?: string;
                txId?: string;
            }): _552.History;
        };
        GoogleInAppPurchaseOrder: {
            encode(message: _551.GoogleInAppPurchaseOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _551.GoogleInAppPurchaseOrder;
            fromJSON(object: any): _551.GoogleInAppPurchaseOrder;
            toJSON(message: _551.GoogleInAppPurchaseOrder): unknown;
            fromPartial(object: {
                creator?: string;
                productId?: string;
                purchaseToken?: string;
                receiptDataBase64?: string;
                signature?: string;
            }): _551.GoogleInAppPurchaseOrder;
        };
        GenesisState: {
            encode(message: _550.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _550.GenesisState;
            fromJSON(object: any): _550.GenesisState;
            toJSON(message: _550.GenesisState): unknown;
            fromPartial(object: {
                redeemInfoList?: {
                    id?: string;
                    processorName?: string;
                    address?: string;
                    amount?: string;
                    signature?: string;
                }[];
                paymentInfoList?: {
                    purchaseId?: string;
                    processorName?: string;
                    payerAddr?: string;
                    amount?: string;
                    productId?: string;
                    signature?: string;
                }[];
                accountList?: {
                    accountAddr?: string;
                    username?: string;
                }[];
                tradeList?: {
                    creator?: string;
                    id?: any;
                    coinInputs?: {
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    itemInputs?: {
                        id?: string;
                        doubles?: {
                            key?: string;
                            minValue?: string;
                            maxValue?: string;
                        }[];
                        longs?: {
                            key?: string;
                            minValue?: any;
                            maxValue?: any;
                        }[];
                        strings?: {
                            key?: string;
                            value?: string;
                        }[];
                    }[];
                    coinOutputs?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    itemOutputs?: {
                        cookbookId?: string;
                        itemId?: string;
                    }[];
                    extraInfo?: string;
                    receiver?: string;
                    tradedItemInputs?: {
                        cookbookId?: string;
                        itemId?: string;
                    }[];
                }[];
                tradeCount?: any;
                entityCount?: any;
                params?: {
                    coinIssuers?: {
                        coinDenom?: string;
                        packages?: {
                            packageName?: string;
                            productId?: string;
                            amount?: string;
                        }[];
                        googleInAppPurchasePubKey?: string;
                        entityName?: string;
                    }[];
                    paymentProcessors?: {
                        coinDenom?: string;
                        pubKey?: string;
                        processorPercentage?: string;
                        validatorsPercentage?: string;
                        name?: string;
                    }[];
                    recipeFeePercentage?: string;
                    itemTransferFeePercentage?: string;
                    updateItemStringFee?: {
                        denom?: string;
                        amount?: string;
                    };
                    minTransferFee?: string;
                    maxTransferFee?: string;
                    updateUsernameFee?: {
                        denom?: string;
                        amount?: string;
                    };
                    distrEpochIdentifier?: string;
                    engineVersion?: any;
                    maxTxsInBlock?: any;
                };
                googleInAppPurchaseOrderList?: {
                    creator?: string;
                    productId?: string;
                    purchaseToken?: string;
                    receiptDataBase64?: string;
                    signature?: string;
                }[];
                googleIapOrderCount?: any;
                executionList?: {
                    creator?: string;
                    id?: string;
                    recipeId?: string;
                    cookbookId?: string;
                    recipeVersion?: string;
                    nodeVersion?: any;
                    blockHeight?: any;
                    itemInputs?: {
                        id?: string;
                        doubles?: {
                            key?: string;
                            value?: string;
                        }[];
                        longs?: {
                            key?: string;
                            value?: any;
                        }[];
                        strings?: {
                            key?: string;
                            value?: string;
                        }[];
                    }[];
                    coinInputs?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    coinOutputs?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    itemOutputIds?: string[];
                    itemModifyOutputIds?: string[];
                }[];
                executionCount?: any;
                pendingExecutionList?: {
                    creator?: string;
                    id?: string;
                    recipeId?: string;
                    cookbookId?: string;
                    recipeVersion?: string;
                    nodeVersion?: any;
                    blockHeight?: any;
                    itemInputs?: {
                        id?: string;
                        doubles?: {
                            key?: string;
                            value?: string;
                        }[];
                        longs?: {
                            key?: string;
                            value?: any;
                        }[];
                        strings?: {
                            key?: string;
                            value?: string;
                        }[];
                    }[];
                    coinInputs?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    coinOutputs?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    itemOutputIds?: string[];
                    itemModifyOutputIds?: string[];
                }[];
                pendingExecutionCount?: any;
                itemList?: {
                    owner?: string;
                    cookbookId?: string;
                    id?: string;
                    nodeVersion?: any;
                    doubles?: {
                        key?: string;
                        value?: string;
                    }[];
                    longs?: {
                        key?: string;
                        value?: any;
                    }[];
                    strings?: {
                        key?: string;
                        value?: string;
                    }[];
                    mutableStrings?: {
                        key?: string;
                        value?: string;
                    }[];
                    tradeable?: boolean;
                    lastUpdate?: any;
                    transferFee?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    tradePercentage?: string;
                    createdAt?: any;
                    updatedAt?: any;
                    recipeId?: string;
                }[];
                recipeList?: {
                    cookbookId?: string;
                    id?: string;
                    nodeVersion?: any;
                    name?: string;
                    description?: string;
                    version?: string;
                    coinInputs?: {
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    itemInputs?: {
                        id?: string;
                        doubles?: {
                            key?: string;
                            minValue?: string;
                            maxValue?: string;
                        }[];
                        longs?: {
                            key?: string;
                            minValue?: any;
                            maxValue?: any;
                        }[];
                        strings?: {
                            key?: string;
                            value?: string;
                        }[];
                    }[];
                    entries?: {
                        coinOutputs?: {
                            id?: string;
                            coin?: {
                                denom?: string;
                                amount?: string;
                            };
                            program?: string;
                        }[];
                        itemOutputs?: {
                            id?: string;
                            doubles?: {
                                key?: string;
                                weightRanges?: {
                                    lower?: string;
                                    upper?: string;
                                    weight?: any;
                                }[];
                                program?: string;
                            }[];
                            longs?: {
                                key?: string;
                                weightRanges?: {
                                    lower?: any;
                                    upper?: any;
                                    weight?: any;
                                }[];
                                program?: string;
                            }[];
                            strings?: {
                                key?: string;
                                value?: string;
                                program?: string;
                            }[];
                            mutableStrings?: {
                                key?: string;
                                value?: string;
                            }[];
                            transferFee?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            tradePercentage?: string;
                            quantity?: any;
                            amountMinted?: any;
                            tradeable?: boolean;
                        }[];
                        itemModifyOutputs?: {
                            id?: string;
                            itemInputRef?: string;
                            doubles?: {
                                key?: string;
                                weightRanges?: {
                                    lower?: string;
                                    upper?: string;
                                    weight?: any;
                                }[];
                                program?: string;
                            }[];
                            longs?: {
                                key?: string;
                                weightRanges?: {
                                    lower?: any;
                                    upper?: any;
                                    weight?: any;
                                }[];
                                program?: string;
                            }[];
                            strings?: {
                                key?: string;
                                value?: string;
                                program?: string;
                            }[];
                            mutableStrings?: {
                                key?: string;
                                value?: string;
                            }[];
                            transferFee?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            tradePercentage?: string;
                            quantity?: any;
                            amountMinted?: any;
                            tradeable?: boolean;
                        }[];
                    };
                    outputs?: {
                        entryIds?: string[];
                        weight?: any;
                    }[];
                    blockInterval?: any;
                    costPerBlock?: {
                        denom?: string;
                        amount?: string;
                    };
                    enabled?: boolean;
                    extraInfo?: string;
                    createdAt?: any;
                    updatedAt?: any;
                }[];
                cookbookList?: {
                    creator?: string;
                    id?: string;
                    nodeVersion?: any;
                    name?: string;
                    description?: string;
                    developer?: string;
                    version?: string;
                    supportEmail?: string;
                    enabled?: boolean;
                }[];
            }): _550.GenesisState;
        };
        ItemRecord: {
            encode(message: _549.ItemRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _549.ItemRecord;
            fromJSON(object: any): _549.ItemRecord;
            toJSON(message: _549.ItemRecord): unknown;
            fromPartial(object: {
                id?: string;
                doubles?: {
                    key?: string;
                    value?: string;
                }[];
                longs?: {
                    key?: string;
                    value?: any;
                }[];
                strings?: {
                    key?: string;
                    value?: string;
                }[];
            }): _549.ItemRecord;
        };
        Execution: {
            encode(message: _549.Execution, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _549.Execution;
            fromJSON(object: any): _549.Execution;
            toJSON(message: _549.Execution): unknown;
            fromPartial(object: {
                creator?: string;
                id?: string;
                recipeId?: string;
                cookbookId?: string;
                recipeVersion?: string;
                nodeVersion?: any;
                blockHeight?: any;
                itemInputs?: {
                    id?: string;
                    doubles?: {
                        key?: string;
                        value?: string;
                    }[];
                    longs?: {
                        key?: string;
                        value?: any;
                    }[];
                    strings?: {
                        key?: string;
                        value?: string;
                    }[];
                }[];
                coinInputs?: {
                    denom?: string;
                    amount?: string;
                }[];
                coinOutputs?: {
                    denom?: string;
                    amount?: string;
                }[];
                itemOutputIds?: string[];
                itemModifyOutputIds?: string[];
            }): _549.Execution;
        };
        EventBurnDebtToken: {
            encode(message: _548.EventBurnDebtToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _548.EventBurnDebtToken;
            fromJSON(object: any): _548.EventBurnDebtToken;
            toJSON(message: _548.EventBurnDebtToken): unknown;
            fromPartial(object: {
                redeemInfo?: {
                    id?: string;
                    processorName?: string;
                    address?: string;
                    amount?: string;
                    signature?: string;
                };
            }): _548.EventBurnDebtToken;
        };
        EventCreateAccount: {
            encode(message: _548.EventCreateAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _548.EventCreateAccount;
            fromJSON(object: any): _548.EventCreateAccount;
            toJSON(message: _548.EventCreateAccount): unknown;
            fromPartial(object: {
                address?: string;
                username?: string;
            }): _548.EventCreateAccount;
        };
        EventUpdateAccount: {
            encode(message: _548.EventUpdateAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _548.EventUpdateAccount;
            fromJSON(object: any): _548.EventUpdateAccount;
            toJSON(message: _548.EventUpdateAccount): unknown;
            fromPartial(object: {
                address?: string;
                username?: string;
            }): _548.EventUpdateAccount;
        };
        EventCreateCookbook: {
            encode(message: _548.EventCreateCookbook, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _548.EventCreateCookbook;
            fromJSON(object: any): _548.EventCreateCookbook;
            toJSON(message: _548.EventCreateCookbook): unknown;
            fromPartial(object: {
                creator?: string;
                id?: string;
            }): _548.EventCreateCookbook;
        };
        EventUpdateCookbook: {
            encode(message: _548.EventUpdateCookbook, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _548.EventUpdateCookbook;
            fromJSON(object: any): _548.EventUpdateCookbook;
            toJSON(message: _548.EventUpdateCookbook): unknown;
            fromPartial(object: {
                originalCookbook?: {
                    creator?: string;
                    id?: string;
                    nodeVersion?: any;
                    name?: string;
                    description?: string;
                    developer?: string;
                    version?: string;
                    supportEmail?: string;
                    enabled?: boolean;
                };
            }): _548.EventUpdateCookbook;
        };
        EventTransferCookbook: {
            encode(message: _548.EventTransferCookbook, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _548.EventTransferCookbook;
            fromJSON(object: any): _548.EventTransferCookbook;
            toJSON(message: _548.EventTransferCookbook): unknown;
            fromPartial(object: {
                sender?: string;
                receiver?: string;
                id?: string;
            }): _548.EventTransferCookbook;
        };
        EventCreateRecipe: {
            encode(message: _548.EventCreateRecipe, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _548.EventCreateRecipe;
            fromJSON(object: any): _548.EventCreateRecipe;
            toJSON(message: _548.EventCreateRecipe): unknown;
            fromPartial(object: {
                creator?: string;
                cookbookId?: string;
                id?: string;
            }): _548.EventCreateRecipe;
        };
        EventUpdateRecipe: {
            encode(message: _548.EventUpdateRecipe, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _548.EventUpdateRecipe;
            fromJSON(object: any): _548.EventUpdateRecipe;
            toJSON(message: _548.EventUpdateRecipe): unknown;
            fromPartial(object: {
                originalRecipe?: {
                    cookbookId?: string;
                    id?: string;
                    nodeVersion?: any;
                    name?: string;
                    description?: string;
                    version?: string;
                    coinInputs?: {
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    itemInputs?: {
                        id?: string;
                        doubles?: {
                            key?: string;
                            minValue?: string;
                            maxValue?: string;
                        }[];
                        longs?: {
                            key?: string;
                            minValue?: any;
                            maxValue?: any;
                        }[];
                        strings?: {
                            key?: string;
                            value?: string;
                        }[];
                    }[];
                    entries?: {
                        coinOutputs?: {
                            id?: string;
                            coin?: {
                                denom?: string;
                                amount?: string;
                            };
                            program?: string;
                        }[];
                        itemOutputs?: {
                            id?: string;
                            doubles?: {
                                key?: string;
                                weightRanges?: {
                                    lower?: string;
                                    upper?: string;
                                    weight?: any;
                                }[];
                                program?: string;
                            }[];
                            longs?: {
                                key?: string;
                                weightRanges?: {
                                    lower?: any;
                                    upper?: any;
                                    weight?: any;
                                }[];
                                program?: string;
                            }[];
                            strings?: {
                                key?: string;
                                value?: string;
                                program?: string;
                            }[];
                            mutableStrings?: {
                                key?: string;
                                value?: string;
                            }[];
                            transferFee?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            tradePercentage?: string;
                            quantity?: any;
                            amountMinted?: any;
                            tradeable?: boolean;
                        }[];
                        itemModifyOutputs?: {
                            id?: string;
                            itemInputRef?: string;
                            doubles?: {
                                key?: string;
                                weightRanges?: {
                                    lower?: string;
                                    upper?: string;
                                    weight?: any;
                                }[];
                                program?: string;
                            }[];
                            longs?: {
                                key?: string;
                                weightRanges?: {
                                    lower?: any;
                                    upper?: any;
                                    weight?: any;
                                }[];
                                program?: string;
                            }[];
                            strings?: {
                                key?: string;
                                value?: string;
                                program?: string;
                            }[];
                            mutableStrings?: {
                                key?: string;
                                value?: string;
                            }[];
                            transferFee?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            tradePercentage?: string;
                            quantity?: any;
                            amountMinted?: any;
                            tradeable?: boolean;
                        }[];
                    };
                    outputs?: {
                        entryIds?: string[];
                        weight?: any;
                    }[];
                    blockInterval?: any;
                    costPerBlock?: {
                        denom?: string;
                        amount?: string;
                    };
                    enabled?: boolean;
                    extraInfo?: string;
                    createdAt?: any;
                    updatedAt?: any;
                };
            }): _548.EventUpdateRecipe;
        };
        EventCreateExecution: {
            encode(message: _548.EventCreateExecution, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _548.EventCreateExecution;
            fromJSON(object: any): _548.EventCreateExecution;
            toJSON(message: _548.EventCreateExecution): unknown;
            fromPartial(object: {
                creator?: string;
                id?: string;
                paymentInfos?: {
                    purchaseId?: string;
                    processorName?: string;
                    payerAddr?: string;
                    amount?: string;
                    productId?: string;
                    signature?: string;
                }[];
            }): _548.EventCreateExecution;
        };
        EventCompleteExecution: {
            encode(message: _548.EventCompleteExecution, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _548.EventCompleteExecution;
            fromJSON(object: any): _548.EventCompleteExecution;
            toJSON(message: _548.EventCompleteExecution): unknown;
            fromPartial(object: {
                creator?: string;
                id?: string;
                burnCoins?: {
                    denom?: string;
                    amount?: string;
                }[];
                payCoins?: {
                    denom?: string;
                    amount?: string;
                }[];
                transferCoins?: {
                    denom?: string;
                    amount?: string;
                }[];
                feeCoins?: {
                    denom?: string;
                    amount?: string;
                }[];
                coinOutputs?: {
                    denom?: string;
                    amount?: string;
                }[];
                mintItems?: {
                    owner?: string;
                    cookbookId?: string;
                    id?: string;
                    nodeVersion?: any;
                    doubles?: {
                        key?: string;
                        value?: string;
                    }[];
                    longs?: {
                        key?: string;
                        value?: any;
                    }[];
                    strings?: {
                        key?: string;
                        value?: string;
                    }[];
                    mutableStrings?: {
                        key?: string;
                        value?: string;
                    }[];
                    tradeable?: boolean;
                    lastUpdate?: any;
                    transferFee?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    tradePercentage?: string;
                    createdAt?: any;
                    updatedAt?: any;
                    recipeId?: string;
                }[];
                modifyItems?: {
                    owner?: string;
                    cookbookId?: string;
                    id?: string;
                    nodeVersion?: any;
                    doubles?: {
                        key?: string;
                        value?: string;
                    }[];
                    longs?: {
                        key?: string;
                        value?: any;
                    }[];
                    strings?: {
                        key?: string;
                        value?: string;
                    }[];
                    mutableStrings?: {
                        key?: string;
                        value?: string;
                    }[];
                    tradeable?: boolean;
                    lastUpdate?: any;
                    transferFee?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    tradePercentage?: string;
                    createdAt?: any;
                    updatedAt?: any;
                    recipeId?: string;
                }[];
            }): _548.EventCompleteExecution;
        };
        EventDropExecution: {
            encode(message: _548.EventDropExecution, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _548.EventDropExecution;
            fromJSON(object: any): _548.EventDropExecution;
            toJSON(message: _548.EventDropExecution): unknown;
            fromPartial(object: {
                creator?: string;
                id?: string;
            }): _548.EventDropExecution;
        };
        EventCompleteExecutionEarly: {
            encode(message: _548.EventCompleteExecutionEarly, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _548.EventCompleteExecutionEarly;
            fromJSON(object: any): _548.EventCompleteExecutionEarly;
            toJSON(message: _548.EventCompleteExecutionEarly): unknown;
            fromPartial(object: {
                creator?: string;
                id?: string;
            }): _548.EventCompleteExecutionEarly;
        };
        EventSendItems: {
            encode(message: _548.EventSendItems, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _548.EventSendItems;
            fromJSON(object: any): _548.EventSendItems;
            toJSON(message: _548.EventSendItems): unknown;
            fromPartial(object: {
                sender?: string;
                receiver?: string;
                items?: {
                    cookbookId?: string;
                    itemId?: string;
                }[];
            }): _548.EventSendItems;
        };
        EventSetItemString: {
            encode(message: _548.EventSetItemString, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _548.EventSetItemString;
            fromJSON(object: any): _548.EventSetItemString;
            toJSON(message: _548.EventSetItemString): unknown;
            fromPartial(object: {
                creator?: string;
                cookbookId?: string;
                id?: string;
                originalMutableStrings?: {
                    key?: string;
                    value?: string;
                }[];
            }): _548.EventSetItemString;
        };
        EventCreateTrade: {
            encode(message: _548.EventCreateTrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _548.EventCreateTrade;
            fromJSON(object: any): _548.EventCreateTrade;
            toJSON(message: _548.EventCreateTrade): unknown;
            fromPartial(object: {
                creator?: string;
                id?: any;
            }): _548.EventCreateTrade;
        };
        EventCancelTrade: {
            encode(message: _548.EventCancelTrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _548.EventCancelTrade;
            fromJSON(object: any): _548.EventCancelTrade;
            toJSON(message: _548.EventCancelTrade): unknown;
            fromPartial(object: {
                creator?: string;
                id?: any;
            }): _548.EventCancelTrade;
        };
        EventFulfillTrade: {
            encode(message: _548.EventFulfillTrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _548.EventFulfillTrade;
            fromJSON(object: any): _548.EventFulfillTrade;
            toJSON(message: _548.EventFulfillTrade): unknown;
            fromPartial(object: {
                id?: any;
                creator?: string;
                fulfiller?: string;
                itemInputs?: {
                    cookbookId?: string;
                    itemId?: string;
                }[];
                coinInputs?: {
                    denom?: string;
                    amount?: string;
                }[];
                itemOutputs?: {
                    cookbookId?: string;
                    itemId?: string;
                }[];
                coinOutputs?: {
                    denom?: string;
                    amount?: string;
                }[];
                paymentInfos?: {
                    purchaseId?: string;
                    processorName?: string;
                    payerAddr?: string;
                    amount?: string;
                    productId?: string;
                    signature?: string;
                }[];
            }): _548.EventFulfillTrade;
        };
        EventGooglePurchase: {
            encode(message: _548.EventGooglePurchase, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _548.EventGooglePurchase;
            fromJSON(object: any): _548.EventGooglePurchase;
            toJSON(message: _548.EventGooglePurchase): unknown;
            fromPartial(object: {
                creator?: string;
                productId?: string;
                purchaseToken?: string;
                receiptDataBase64?: string;
                signature?: string;
            }): _548.EventGooglePurchase;
        };
        EventStripePurchase: {
            encode(message: _548.EventStripePurchase, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _548.EventStripePurchase;
            fromJSON(object: any): _548.EventStripePurchase;
            toJSON(message: _548.EventStripePurchase): unknown;
            fromPartial(object: {
                creator?: string;
                id?: string;
            }): _548.EventStripePurchase;
        };
        EventApplePurchase: {
            encode(message: _548.EventApplePurchase, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _548.EventApplePurchase;
            fromJSON(object: any): _548.EventApplePurchase;
            toJSON(message: _548.EventApplePurchase): unknown;
            fromPartial(object: {
                creator?: string;
                productId?: string;
                transactionId?: string;
                receiptDataBase64?: string;
            }): _548.EventApplePurchase;
        };
        Cookbook: {
            encode(message: _547.Cookbook, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _547.Cookbook;
            fromJSON(object: any): _547.Cookbook;
            toJSON(message: _547.Cookbook): unknown;
            fromPartial(object: {
                creator?: string;
                id?: string;
                nodeVersion?: any;
                name?: string;
                description?: string;
                developer?: string;
                version?: string;
                supportEmail?: string;
                enabled?: boolean;
            }): _547.Cookbook;
        };
        AppleInAppPurchaseOrder: {
            encode(message: _546.AppleInAppPurchaseOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _546.AppleInAppPurchaseOrder;
            fromJSON(object: any): _546.AppleInAppPurchaseOrder;
            toJSON(message: _546.AppleInAppPurchaseOrder): unknown;
            fromPartial(object: {
                quantity?: string;
                productId?: string;
                purchaseId?: string;
                purchaseDate?: string;
                creator?: string;
            }): _546.AppleInAppPurchaseOrder;
        };
        UserMap: {
            encode(message: _545.UserMap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _545.UserMap;
            fromJSON(object: any): _545.UserMap;
            toJSON(message: _545.UserMap): unknown;
            fromPartial(object: {
                accountAddr?: string;
                username?: string;
            }): _545.UserMap;
        };
        Username: {
            encode(message: _545.Username, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _545.Username;
            fromJSON(object: any): _545.Username;
            toJSON(message: _545.Username): unknown;
            fromPartial(object: {
                value?: string;
            }): _545.Username;
        };
        AccountAddr: {
            encode(message: _545.AccountAddr, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _545.AccountAddr;
            fromJSON(object: any): _545.AccountAddr;
            toJSON(message: _545.AccountAddr): unknown;
            fromPartial(object: {
                value?: string;
            }): _545.AccountAddr;
        };
        ReferralKV: {
            encode(message: _545.ReferralKV, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _545.ReferralKV;
            fromJSON(object: any): _545.ReferralKV;
            toJSON(message: _545.ReferralKV): unknown;
            fromPartial(object: {
                address?: string;
                users?: {
                    username?: string;
                    address?: string;
                }[];
            }): _545.ReferralKV;
        };
        RefereeSignup: {
            encode(message: _545.RefereeSignup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _545.RefereeSignup;
            fromJSON(object: any): _545.RefereeSignup;
            toJSON(message: _545.RefereeSignup): unknown;
            fromPartial(object: {
                username?: string;
                address?: string;
            }): _545.RefereeSignup;
        };
    };
}
