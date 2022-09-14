import * as _613 from "./pylons/accounts";
import * as _614 from "./pylons/apple_in_app_purchase_order";
import * as _615 from "./pylons/cookbook";
import * as _616 from "./pylons/event";
import * as _617 from "./pylons/execution";
import * as _618 from "./pylons/genesis";
import * as _619 from "./pylons/google_iap_order";
import * as _620 from "./pylons/history";
import * as _621 from "./pylons/item";
import * as _622 from "./pylons/params";
import * as _623 from "./pylons/payment_info";
import * as _624 from "./pylons/query";
import * as _625 from "./pylons/recipe";
import * as _626 from "./pylons/redeem_info";
import * as _627 from "./pylons/standard_error";
import * as _628 from "./pylons/stripe_refund";
import * as _629 from "./pylons/trade";
import * as _630 from "./pylons/tx";
export declare namespace pylons {
    const pylons: {
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                appleIap(value: _630.MsgAppleIap): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                addStripeRefund(value: _630.MsgAddStripeRefund): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                burnDebtToken(value: _630.MsgBurnDebtToken): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateAccount(value: _630.MsgUpdateAccount): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                fulfillTrade(value: _630.MsgFulfillTrade): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createTrade(value: _630.MsgCreateTrade): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                cancelTrade(value: _630.MsgCancelTrade): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                completeExecutionEarly(value: _630.MsgCompleteExecutionEarly): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                transferCookbook(value: _630.MsgTransferCookbook): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                googleInAppPurchaseGetCoins(value: _630.MsgGoogleInAppPurchaseGetCoins): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createAccount(value: _630.MsgCreateAccount): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                sendItems(value: _630.MsgSendItems): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                executeRecipe(value: _630.MsgExecuteRecipe): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                setItemString(value: _630.MsgSetItemString): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createRecipe(value: _630.MsgCreateRecipe): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateRecipe(value: _630.MsgUpdateRecipe): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createCookbook(value: _630.MsgCreateCookbook): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateCookbook(value: _630.MsgUpdateCookbook): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                appleIap(value: _630.MsgAppleIap): {
                    typeUrl: string;
                    value: _630.MsgAppleIap;
                };
                addStripeRefund(value: _630.MsgAddStripeRefund): {
                    typeUrl: string;
                    value: _630.MsgAddStripeRefund;
                };
                burnDebtToken(value: _630.MsgBurnDebtToken): {
                    typeUrl: string;
                    value: _630.MsgBurnDebtToken;
                };
                updateAccount(value: _630.MsgUpdateAccount): {
                    typeUrl: string;
                    value: _630.MsgUpdateAccount;
                };
                fulfillTrade(value: _630.MsgFulfillTrade): {
                    typeUrl: string;
                    value: _630.MsgFulfillTrade;
                };
                createTrade(value: _630.MsgCreateTrade): {
                    typeUrl: string;
                    value: _630.MsgCreateTrade;
                };
                cancelTrade(value: _630.MsgCancelTrade): {
                    typeUrl: string;
                    value: _630.MsgCancelTrade;
                };
                completeExecutionEarly(value: _630.MsgCompleteExecutionEarly): {
                    typeUrl: string;
                    value: _630.MsgCompleteExecutionEarly;
                };
                transferCookbook(value: _630.MsgTransferCookbook): {
                    typeUrl: string;
                    value: _630.MsgTransferCookbook;
                };
                googleInAppPurchaseGetCoins(value: _630.MsgGoogleInAppPurchaseGetCoins): {
                    typeUrl: string;
                    value: _630.MsgGoogleInAppPurchaseGetCoins;
                };
                createAccount(value: _630.MsgCreateAccount): {
                    typeUrl: string;
                    value: _630.MsgCreateAccount;
                };
                sendItems(value: _630.MsgSendItems): {
                    typeUrl: string;
                    value: _630.MsgSendItems;
                };
                executeRecipe(value: _630.MsgExecuteRecipe): {
                    typeUrl: string;
                    value: _630.MsgExecuteRecipe;
                };
                setItemString(value: _630.MsgSetItemString): {
                    typeUrl: string;
                    value: _630.MsgSetItemString;
                };
                createRecipe(value: _630.MsgCreateRecipe): {
                    typeUrl: string;
                    value: _630.MsgCreateRecipe;
                };
                updateRecipe(value: _630.MsgUpdateRecipe): {
                    typeUrl: string;
                    value: _630.MsgUpdateRecipe;
                };
                createCookbook(value: _630.MsgCreateCookbook): {
                    typeUrl: string;
                    value: _630.MsgCreateCookbook;
                };
                updateCookbook(value: _630.MsgUpdateCookbook): {
                    typeUrl: string;
                    value: _630.MsgUpdateCookbook;
                };
            };
            toJSON: {
                appleIap(value: _630.MsgAppleIap): {
                    typeUrl: string;
                    value: unknown;
                };
                addStripeRefund(value: _630.MsgAddStripeRefund): {
                    typeUrl: string;
                    value: unknown;
                };
                burnDebtToken(value: _630.MsgBurnDebtToken): {
                    typeUrl: string;
                    value: unknown;
                };
                updateAccount(value: _630.MsgUpdateAccount): {
                    typeUrl: string;
                    value: unknown;
                };
                fulfillTrade(value: _630.MsgFulfillTrade): {
                    typeUrl: string;
                    value: unknown;
                };
                createTrade(value: _630.MsgCreateTrade): {
                    typeUrl: string;
                    value: unknown;
                };
                cancelTrade(value: _630.MsgCancelTrade): {
                    typeUrl: string;
                    value: unknown;
                };
                completeExecutionEarly(value: _630.MsgCompleteExecutionEarly): {
                    typeUrl: string;
                    value: unknown;
                };
                transferCookbook(value: _630.MsgTransferCookbook): {
                    typeUrl: string;
                    value: unknown;
                };
                googleInAppPurchaseGetCoins(value: _630.MsgGoogleInAppPurchaseGetCoins): {
                    typeUrl: string;
                    value: unknown;
                };
                createAccount(value: _630.MsgCreateAccount): {
                    typeUrl: string;
                    value: unknown;
                };
                sendItems(value: _630.MsgSendItems): {
                    typeUrl: string;
                    value: unknown;
                };
                executeRecipe(value: _630.MsgExecuteRecipe): {
                    typeUrl: string;
                    value: unknown;
                };
                setItemString(value: _630.MsgSetItemString): {
                    typeUrl: string;
                    value: unknown;
                };
                createRecipe(value: _630.MsgCreateRecipe): {
                    typeUrl: string;
                    value: unknown;
                };
                updateRecipe(value: _630.MsgUpdateRecipe): {
                    typeUrl: string;
                    value: unknown;
                };
                createCookbook(value: _630.MsgCreateCookbook): {
                    typeUrl: string;
                    value: unknown;
                };
                updateCookbook(value: _630.MsgUpdateCookbook): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                appleIap(value: any): {
                    typeUrl: string;
                    value: _630.MsgAppleIap;
                };
                addStripeRefund(value: any): {
                    typeUrl: string;
                    value: _630.MsgAddStripeRefund;
                };
                burnDebtToken(value: any): {
                    typeUrl: string;
                    value: _630.MsgBurnDebtToken;
                };
                updateAccount(value: any): {
                    typeUrl: string;
                    value: _630.MsgUpdateAccount;
                };
                fulfillTrade(value: any): {
                    typeUrl: string;
                    value: _630.MsgFulfillTrade;
                };
                createTrade(value: any): {
                    typeUrl: string;
                    value: _630.MsgCreateTrade;
                };
                cancelTrade(value: any): {
                    typeUrl: string;
                    value: _630.MsgCancelTrade;
                };
                completeExecutionEarly(value: any): {
                    typeUrl: string;
                    value: _630.MsgCompleteExecutionEarly;
                };
                transferCookbook(value: any): {
                    typeUrl: string;
                    value: _630.MsgTransferCookbook;
                };
                googleInAppPurchaseGetCoins(value: any): {
                    typeUrl: string;
                    value: _630.MsgGoogleInAppPurchaseGetCoins;
                };
                createAccount(value: any): {
                    typeUrl: string;
                    value: _630.MsgCreateAccount;
                };
                sendItems(value: any): {
                    typeUrl: string;
                    value: _630.MsgSendItems;
                };
                executeRecipe(value: any): {
                    typeUrl: string;
                    value: _630.MsgExecuteRecipe;
                };
                setItemString(value: any): {
                    typeUrl: string;
                    value: _630.MsgSetItemString;
                };
                createRecipe(value: any): {
                    typeUrl: string;
                    value: _630.MsgCreateRecipe;
                };
                updateRecipe(value: any): {
                    typeUrl: string;
                    value: _630.MsgUpdateRecipe;
                };
                createCookbook(value: any): {
                    typeUrl: string;
                    value: _630.MsgCreateCookbook;
                };
                updateCookbook(value: any): {
                    typeUrl: string;
                    value: _630.MsgUpdateCookbook;
                };
            };
            fromPartial: {
                appleIap(value: _630.MsgAppleIap): {
                    typeUrl: string;
                    value: _630.MsgAppleIap;
                };
                addStripeRefund(value: _630.MsgAddStripeRefund): {
                    typeUrl: string;
                    value: _630.MsgAddStripeRefund;
                };
                burnDebtToken(value: _630.MsgBurnDebtToken): {
                    typeUrl: string;
                    value: _630.MsgBurnDebtToken;
                };
                updateAccount(value: _630.MsgUpdateAccount): {
                    typeUrl: string;
                    value: _630.MsgUpdateAccount;
                };
                fulfillTrade(value: _630.MsgFulfillTrade): {
                    typeUrl: string;
                    value: _630.MsgFulfillTrade;
                };
                createTrade(value: _630.MsgCreateTrade): {
                    typeUrl: string;
                    value: _630.MsgCreateTrade;
                };
                cancelTrade(value: _630.MsgCancelTrade): {
                    typeUrl: string;
                    value: _630.MsgCancelTrade;
                };
                completeExecutionEarly(value: _630.MsgCompleteExecutionEarly): {
                    typeUrl: string;
                    value: _630.MsgCompleteExecutionEarly;
                };
                transferCookbook(value: _630.MsgTransferCookbook): {
                    typeUrl: string;
                    value: _630.MsgTransferCookbook;
                };
                googleInAppPurchaseGetCoins(value: _630.MsgGoogleInAppPurchaseGetCoins): {
                    typeUrl: string;
                    value: _630.MsgGoogleInAppPurchaseGetCoins;
                };
                createAccount(value: _630.MsgCreateAccount): {
                    typeUrl: string;
                    value: _630.MsgCreateAccount;
                };
                sendItems(value: _630.MsgSendItems): {
                    typeUrl: string;
                    value: _630.MsgSendItems;
                };
                executeRecipe(value: _630.MsgExecuteRecipe): {
                    typeUrl: string;
                    value: _630.MsgExecuteRecipe;
                };
                setItemString(value: _630.MsgSetItemString): {
                    typeUrl: string;
                    value: _630.MsgSetItemString;
                };
                createRecipe(value: _630.MsgCreateRecipe): {
                    typeUrl: string;
                    value: _630.MsgCreateRecipe;
                };
                updateRecipe(value: _630.MsgUpdateRecipe): {
                    typeUrl: string;
                    value: _630.MsgUpdateRecipe;
                };
                createCookbook(value: _630.MsgCreateCookbook): {
                    typeUrl: string;
                    value: _630.MsgCreateCookbook;
                };
                updateCookbook(value: _630.MsgUpdateCookbook): {
                    typeUrl: string;
                    value: _630.MsgUpdateCookbook;
                };
            };
        };
        AminoConverter: {
            "/pylons.pylons.MsgAppleIap": {
                aminoType: string;
                toAmino: ({ creator, productId, purchaseId, receiptDataBase64 }: _630.MsgAppleIap) => {
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
                }) => _630.MsgAppleIap;
            };
            "/pylons.pylons.MsgAddStripeRefund": {
                aminoType: string;
                toAmino: ({ creator, payment }: _630.MsgAddStripeRefund) => {
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
                }) => _630.MsgAddStripeRefund;
            };
            "/pylons.pylons.MsgBurnDebtToken": {
                aminoType: string;
                toAmino: ({ creator, redeemInfo }: _630.MsgBurnDebtToken) => {
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
                }) => _630.MsgBurnDebtToken;
            };
            "/pylons.pylons.MsgUpdateAccount": {
                aminoType: string;
                toAmino: ({ creator, username }: _630.MsgUpdateAccount) => {
                    creator: string;
                    username: string;
                };
                fromAmino: ({ creator, username }: {
                    creator: string;
                    username: string;
                }) => _630.MsgUpdateAccount;
            };
            "/pylons.pylons.MsgFulfillTrade": {
                aminoType: string;
                toAmino: ({ creator, id, coinInputsIndex, items, paymentInfos }: _630.MsgFulfillTrade) => {
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
                }) => _630.MsgFulfillTrade;
            };
            "/pylons.pylons.MsgCreateTrade": {
                aminoType: string;
                toAmino: ({ creator, coinInputs, itemInputs, coinOutputs, itemOutputs, extraInfo }: _630.MsgCreateTrade) => {
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
                }) => _630.MsgCreateTrade;
            };
            "/pylons.pylons.MsgCancelTrade": {
                aminoType: string;
                toAmino: ({ creator, id }: _630.MsgCancelTrade) => {
                    creator: string;
                    id: string;
                };
                fromAmino: ({ creator, id }: {
                    creator: string;
                    id: string;
                }) => _630.MsgCancelTrade;
            };
            "/pylons.pylons.MsgCompleteExecutionEarly": {
                aminoType: string;
                toAmino: ({ creator, id }: _630.MsgCompleteExecutionEarly) => {
                    creator: string;
                    id: string;
                };
                fromAmino: ({ creator, id }: {
                    creator: string;
                    id: string;
                }) => _630.MsgCompleteExecutionEarly;
            };
            "/pylons.pylons.MsgTransferCookbook": {
                aminoType: string;
                toAmino: ({ creator, id, recipient }: _630.MsgTransferCookbook) => {
                    creator: string;
                    id: string;
                    recipient: string;
                };
                fromAmino: ({ creator, id, recipient }: {
                    creator: string;
                    id: string;
                    recipient: string;
                }) => _630.MsgTransferCookbook;
            };
            "/pylons.pylons.MsgGoogleInAppPurchaseGetCoins": {
                aminoType: string;
                toAmino: ({ creator, productId, purchaseToken, receiptDataBase64, signature }: _630.MsgGoogleInAppPurchaseGetCoins) => {
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
                }) => _630.MsgGoogleInAppPurchaseGetCoins;
            };
            "/pylons.pylons.MsgCreateAccount": {
                aminoType: string;
                toAmino: ({ creator, username, token, referralAddress }: _630.MsgCreateAccount) => {
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
                }) => _630.MsgCreateAccount;
            };
            "/pylons.pylons.MsgSendItems": {
                aminoType: string;
                toAmino: ({ creator, receiver, items }: _630.MsgSendItems) => {
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
                }) => _630.MsgSendItems;
            };
            "/pylons.pylons.MsgExecuteRecipe": {
                aminoType: string;
                toAmino: ({ creator, cookbookId, recipeId, coinInputsIndex, itemIds, paymentInfos }: _630.MsgExecuteRecipe) => {
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
                }) => _630.MsgExecuteRecipe;
            };
            "/pylons.pylons.MsgSetItemString": {
                aminoType: string;
                toAmino: ({ creator, cookbookId, id, field, value }: _630.MsgSetItemString) => {
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
                }) => _630.MsgSetItemString;
            };
            "/pylons.pylons.MsgCreateRecipe": {
                aminoType: string;
                toAmino: ({ creator, cookbookId, id, name, description, version, coinInputs, itemInputs, entries, outputs, blockInterval, costPerBlock, enabled, extraInfo }: _630.MsgCreateRecipe) => {
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
                }) => _630.MsgCreateRecipe;
            };
            "/pylons.pylons.MsgUpdateRecipe": {
                aminoType: string;
                toAmino: ({ creator, cookbookId, id, name, description, version, coinInputs, itemInputs, entries, outputs, blockInterval, costPerBlock, enabled, extraInfo }: _630.MsgUpdateRecipe) => {
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
                }) => _630.MsgUpdateRecipe;
            };
            "/pylons.pylons.MsgCreateCookbook": {
                aminoType: string;
                toAmino: ({ creator, id, name, description, developer, version, supportEmail, enabled }: _630.MsgCreateCookbook) => {
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
                }) => _630.MsgCreateCookbook;
            };
            "/pylons.pylons.MsgUpdateCookbook": {
                aminoType: string;
                toAmino: ({ creator, id, name, description, developer, version, supportEmail, enabled }: _630.MsgUpdateCookbook) => {
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
                }) => _630.MsgUpdateCookbook;
            };
        };
        MsgAppleIap: {
            encode(message: _630.MsgAppleIap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _630.MsgAppleIap;
            fromJSON(object: any): _630.MsgAppleIap;
            toJSON(message: _630.MsgAppleIap): unknown;
            fromPartial(object: {
                creator?: string;
                productId?: string;
                purchaseId?: string;
                receiptDataBase64?: string;
            }): _630.MsgAppleIap;
        };
        MsgAppleIapResponse: {
            encode(_: _630.MsgAppleIapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _630.MsgAppleIapResponse;
            fromJSON(_: any): _630.MsgAppleIapResponse;
            toJSON(_: _630.MsgAppleIapResponse): unknown;
            fromPartial(_: {}): _630.MsgAppleIapResponse;
        };
        MsgAddStripeRefund: {
            encode(message: _630.MsgAddStripeRefund, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _630.MsgAddStripeRefund;
            fromJSON(object: any): _630.MsgAddStripeRefund;
            toJSON(message: _630.MsgAddStripeRefund): unknown;
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
            }): _630.MsgAddStripeRefund;
        };
        MsgAddStripeRefundResponse: {
            encode(_: _630.MsgAddStripeRefundResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _630.MsgAddStripeRefundResponse;
            fromJSON(_: any): _630.MsgAddStripeRefundResponse;
            toJSON(_: _630.MsgAddStripeRefundResponse): unknown;
            fromPartial(_: {}): _630.MsgAddStripeRefundResponse;
        };
        MsgBurnDebtToken: {
            encode(message: _630.MsgBurnDebtToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _630.MsgBurnDebtToken;
            fromJSON(object: any): _630.MsgBurnDebtToken;
            toJSON(message: _630.MsgBurnDebtToken): unknown;
            fromPartial(object: {
                creator?: string;
                redeemInfo?: {
                    id?: string;
                    processorName?: string;
                    address?: string;
                    amount?: string;
                    signature?: string;
                };
            }): _630.MsgBurnDebtToken;
        };
        MsgBurnDebtTokenResponse: {
            encode(_: _630.MsgBurnDebtTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _630.MsgBurnDebtTokenResponse;
            fromJSON(_: any): _630.MsgBurnDebtTokenResponse;
            toJSON(_: _630.MsgBurnDebtTokenResponse): unknown;
            fromPartial(_: {}): _630.MsgBurnDebtTokenResponse;
        };
        MsgUpdateAccount: {
            encode(message: _630.MsgUpdateAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _630.MsgUpdateAccount;
            fromJSON(object: any): _630.MsgUpdateAccount;
            toJSON(message: _630.MsgUpdateAccount): unknown;
            fromPartial(object: {
                creator?: string;
                username?: string;
            }): _630.MsgUpdateAccount;
        };
        MsgUpdateAccountResponse: {
            encode(_: _630.MsgUpdateAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _630.MsgUpdateAccountResponse;
            fromJSON(_: any): _630.MsgUpdateAccountResponse;
            toJSON(_: _630.MsgUpdateAccountResponse): unknown;
            fromPartial(_: {}): _630.MsgUpdateAccountResponse;
        };
        MsgCreateAccount: {
            encode(message: _630.MsgCreateAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _630.MsgCreateAccount;
            fromJSON(object: any): _630.MsgCreateAccount;
            toJSON(message: _630.MsgCreateAccount): unknown;
            fromPartial(object: {
                creator?: string;
                username?: string;
                token?: string;
                referralAddress?: string;
            }): _630.MsgCreateAccount;
        };
        MsgCreateAccountResponse: {
            encode(_: _630.MsgCreateAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _630.MsgCreateAccountResponse;
            fromJSON(_: any): _630.MsgCreateAccountResponse;
            toJSON(_: _630.MsgCreateAccountResponse): unknown;
            fromPartial(_: {}): _630.MsgCreateAccountResponse;
        };
        MsgFulfillTrade: {
            encode(message: _630.MsgFulfillTrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _630.MsgFulfillTrade;
            fromJSON(object: any): _630.MsgFulfillTrade;
            toJSON(message: _630.MsgFulfillTrade): unknown;
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
            }): _630.MsgFulfillTrade;
        };
        MsgFulfillTradeResponse: {
            encode(_: _630.MsgFulfillTradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _630.MsgFulfillTradeResponse;
            fromJSON(_: any): _630.MsgFulfillTradeResponse;
            toJSON(_: _630.MsgFulfillTradeResponse): unknown;
            fromPartial(_: {}): _630.MsgFulfillTradeResponse;
        };
        MsgCreateTrade: {
            encode(message: _630.MsgCreateTrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _630.MsgCreateTrade;
            fromJSON(object: any): _630.MsgCreateTrade;
            toJSON(message: _630.MsgCreateTrade): unknown;
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
            }): _630.MsgCreateTrade;
        };
        MsgCreateTradeResponse: {
            encode(message: _630.MsgCreateTradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _630.MsgCreateTradeResponse;
            fromJSON(object: any): _630.MsgCreateTradeResponse;
            toJSON(message: _630.MsgCreateTradeResponse): unknown;
            fromPartial(object: {
                id?: any;
            }): _630.MsgCreateTradeResponse;
        };
        MsgCancelTrade: {
            encode(message: _630.MsgCancelTrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _630.MsgCancelTrade;
            fromJSON(object: any): _630.MsgCancelTrade;
            toJSON(message: _630.MsgCancelTrade): unknown;
            fromPartial(object: {
                creator?: string;
                id?: any;
            }): _630.MsgCancelTrade;
        };
        MsgCancelTradeResponse: {
            encode(_: _630.MsgCancelTradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _630.MsgCancelTradeResponse;
            fromJSON(_: any): _630.MsgCancelTradeResponse;
            toJSON(_: _630.MsgCancelTradeResponse): unknown;
            fromPartial(_: {}): _630.MsgCancelTradeResponse;
        };
        MsgCompleteExecutionEarly: {
            encode(message: _630.MsgCompleteExecutionEarly, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _630.MsgCompleteExecutionEarly;
            fromJSON(object: any): _630.MsgCompleteExecutionEarly;
            toJSON(message: _630.MsgCompleteExecutionEarly): unknown;
            fromPartial(object: {
                creator?: string;
                id?: string;
            }): _630.MsgCompleteExecutionEarly;
        };
        MsgCompleteExecutionEarlyResponse: {
            encode(message: _630.MsgCompleteExecutionEarlyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _630.MsgCompleteExecutionEarlyResponse;
            fromJSON(object: any): _630.MsgCompleteExecutionEarlyResponse;
            toJSON(message: _630.MsgCompleteExecutionEarlyResponse): unknown;
            fromPartial(object: {
                id?: string;
            }): _630.MsgCompleteExecutionEarlyResponse;
        };
        MsgTransferCookbook: {
            encode(message: _630.MsgTransferCookbook, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _630.MsgTransferCookbook;
            fromJSON(object: any): _630.MsgTransferCookbook;
            toJSON(message: _630.MsgTransferCookbook): unknown;
            fromPartial(object: {
                creator?: string;
                id?: string;
                recipient?: string;
            }): _630.MsgTransferCookbook;
        };
        MsgTransferCookbookResponse: {
            encode(_: _630.MsgTransferCookbookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _630.MsgTransferCookbookResponse;
            fromJSON(_: any): _630.MsgTransferCookbookResponse;
            toJSON(_: _630.MsgTransferCookbookResponse): unknown;
            fromPartial(_: {}): _630.MsgTransferCookbookResponse;
        };
        MsgGoogleInAppPurchaseGetCoins: {
            encode(message: _630.MsgGoogleInAppPurchaseGetCoins, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _630.MsgGoogleInAppPurchaseGetCoins;
            fromJSON(object: any): _630.MsgGoogleInAppPurchaseGetCoins;
            toJSON(message: _630.MsgGoogleInAppPurchaseGetCoins): unknown;
            fromPartial(object: {
                creator?: string;
                productId?: string;
                purchaseToken?: string;
                receiptDataBase64?: string;
                signature?: string;
            }): _630.MsgGoogleInAppPurchaseGetCoins;
        };
        MsgGoogleInAppPurchaseGetCoinsResponse: {
            encode(_: _630.MsgGoogleInAppPurchaseGetCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _630.MsgGoogleInAppPurchaseGetCoinsResponse;
            fromJSON(_: any): _630.MsgGoogleInAppPurchaseGetCoinsResponse;
            toJSON(_: _630.MsgGoogleInAppPurchaseGetCoinsResponse): unknown;
            fromPartial(_: {}): _630.MsgGoogleInAppPurchaseGetCoinsResponse;
        };
        MsgSendItems: {
            encode(message: _630.MsgSendItems, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _630.MsgSendItems;
            fromJSON(object: any): _630.MsgSendItems;
            toJSON(message: _630.MsgSendItems): unknown;
            fromPartial(object: {
                creator?: string;
                receiver?: string;
                items?: {
                    cookbookId?: string;
                    itemId?: string;
                }[];
            }): _630.MsgSendItems;
        };
        MsgSendItemsResponse: {
            encode(_: _630.MsgSendItemsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _630.MsgSendItemsResponse;
            fromJSON(_: any): _630.MsgSendItemsResponse;
            toJSON(_: _630.MsgSendItemsResponse): unknown;
            fromPartial(_: {}): _630.MsgSendItemsResponse;
        };
        MsgExecuteRecipe: {
            encode(message: _630.MsgExecuteRecipe, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _630.MsgExecuteRecipe;
            fromJSON(object: any): _630.MsgExecuteRecipe;
            toJSON(message: _630.MsgExecuteRecipe): unknown;
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
            }): _630.MsgExecuteRecipe;
        };
        MsgExecuteRecipeResponse: {
            encode(message: _630.MsgExecuteRecipeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _630.MsgExecuteRecipeResponse;
            fromJSON(object: any): _630.MsgExecuteRecipeResponse;
            toJSON(message: _630.MsgExecuteRecipeResponse): unknown;
            fromPartial(object: {
                id?: string;
                txTime?: any;
            }): _630.MsgExecuteRecipeResponse;
        };
        MsgSetItemString: {
            encode(message: _630.MsgSetItemString, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _630.MsgSetItemString;
            fromJSON(object: any): _630.MsgSetItemString;
            toJSON(message: _630.MsgSetItemString): unknown;
            fromPartial(object: {
                creator?: string;
                cookbookId?: string;
                id?: string;
                field?: string;
                value?: string;
            }): _630.MsgSetItemString;
        };
        MsgSetItemStringResponse: {
            encode(_: _630.MsgSetItemStringResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _630.MsgSetItemStringResponse;
            fromJSON(_: any): _630.MsgSetItemStringResponse;
            toJSON(_: _630.MsgSetItemStringResponse): unknown;
            fromPartial(_: {}): _630.MsgSetItemStringResponse;
        };
        MsgCreateRecipe: {
            encode(message: _630.MsgCreateRecipe, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _630.MsgCreateRecipe;
            fromJSON(object: any): _630.MsgCreateRecipe;
            toJSON(message: _630.MsgCreateRecipe): unknown;
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
            }): _630.MsgCreateRecipe;
        };
        MsgCreateRecipeResponse: {
            encode(_: _630.MsgCreateRecipeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _630.MsgCreateRecipeResponse;
            fromJSON(_: any): _630.MsgCreateRecipeResponse;
            toJSON(_: _630.MsgCreateRecipeResponse): unknown;
            fromPartial(_: {}): _630.MsgCreateRecipeResponse;
        };
        MsgUpdateRecipe: {
            encode(message: _630.MsgUpdateRecipe, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _630.MsgUpdateRecipe;
            fromJSON(object: any): _630.MsgUpdateRecipe;
            toJSON(message: _630.MsgUpdateRecipe): unknown;
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
            }): _630.MsgUpdateRecipe;
        };
        MsgUpdateRecipeResponse: {
            encode(_: _630.MsgUpdateRecipeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _630.MsgUpdateRecipeResponse;
            fromJSON(_: any): _630.MsgUpdateRecipeResponse;
            toJSON(_: _630.MsgUpdateRecipeResponse): unknown;
            fromPartial(_: {}): _630.MsgUpdateRecipeResponse;
        };
        MsgCreateCookbook: {
            encode(message: _630.MsgCreateCookbook, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _630.MsgCreateCookbook;
            fromJSON(object: any): _630.MsgCreateCookbook;
            toJSON(message: _630.MsgCreateCookbook): unknown;
            fromPartial(object: {
                creator?: string;
                id?: string;
                name?: string;
                description?: string;
                developer?: string;
                version?: string;
                supportEmail?: string;
                enabled?: boolean;
            }): _630.MsgCreateCookbook;
        };
        MsgCreateCookbookResponse: {
            encode(_: _630.MsgCreateCookbookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _630.MsgCreateCookbookResponse;
            fromJSON(_: any): _630.MsgCreateCookbookResponse;
            toJSON(_: _630.MsgCreateCookbookResponse): unknown;
            fromPartial(_: {}): _630.MsgCreateCookbookResponse;
        };
        MsgUpdateCookbook: {
            encode(message: _630.MsgUpdateCookbook, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _630.MsgUpdateCookbook;
            fromJSON(object: any): _630.MsgUpdateCookbook;
            toJSON(message: _630.MsgUpdateCookbook): unknown;
            fromPartial(object: {
                creator?: string;
                id?: string;
                name?: string;
                description?: string;
                developer?: string;
                version?: string;
                supportEmail?: string;
                enabled?: boolean;
            }): _630.MsgUpdateCookbook;
        };
        MsgUpdateCookbookResponse: {
            encode(_: _630.MsgUpdateCookbookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _630.MsgUpdateCookbookResponse;
            fromJSON(_: any): _630.MsgUpdateCookbookResponse;
            toJSON(_: _630.MsgUpdateCookbookResponse): unknown;
            fromPartial(_: {}): _630.MsgUpdateCookbookResponse;
        };
        ItemRef: {
            encode(message: _629.ItemRef, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _629.ItemRef;
            fromJSON(object: any): _629.ItemRef;
            toJSON(message: _629.ItemRef): unknown;
            fromPartial(object: {
                cookbookId?: string;
                itemId?: string;
            }): _629.ItemRef;
        };
        Trade: {
            encode(message: _629.Trade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _629.Trade;
            fromJSON(object: any): _629.Trade;
            toJSON(message: _629.Trade): unknown;
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
            }): _629.Trade;
        };
        StripeRefund: {
            encode(message: _628.StripeRefund, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _628.StripeRefund;
            fromJSON(object: any): _628.StripeRefund;
            toJSON(message: _628.StripeRefund): unknown;
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
            }): _628.StripeRefund;
        };
        StandardError: {
            encode(message: _627.StandardError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _627.StandardError;
            fromJSON(object: any): _627.StandardError;
            toJSON(message: _627.StandardError): unknown;
            fromPartial(object: {
                code?: string;
                message?: string;
            }): _627.StandardError;
        };
        RedeemInfo: {
            encode(message: _626.RedeemInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _626.RedeemInfo;
            fromJSON(object: any): _626.RedeemInfo;
            toJSON(message: _626.RedeemInfo): unknown;
            fromPartial(object: {
                id?: string;
                processorName?: string;
                address?: string;
                amount?: string;
                signature?: string;
            }): _626.RedeemInfo;
        };
        CreatePaymentAccount: {
            encode(message: _626.CreatePaymentAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _626.CreatePaymentAccount;
            fromJSON(object: any): _626.CreatePaymentAccount;
            toJSON(message: _626.CreatePaymentAccount): unknown;
            fromPartial(object: {
                address?: string;
                token?: string;
                signature?: string;
            }): _626.CreatePaymentAccount;
        };
        DoubleInputParam: {
            encode(message: _625.DoubleInputParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _625.DoubleInputParam;
            fromJSON(object: any): _625.DoubleInputParam;
            toJSON(message: _625.DoubleInputParam): unknown;
            fromPartial(object: {
                key?: string;
                minValue?: string;
                maxValue?: string;
            }): _625.DoubleInputParam;
        };
        LongInputParam: {
            encode(message: _625.LongInputParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _625.LongInputParam;
            fromJSON(object: any): _625.LongInputParam;
            toJSON(message: _625.LongInputParam): unknown;
            fromPartial(object: {
                key?: string;
                minValue?: any;
                maxValue?: any;
            }): _625.LongInputParam;
        };
        StringInputParam: {
            encode(message: _625.StringInputParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _625.StringInputParam;
            fromJSON(object: any): _625.StringInputParam;
            toJSON(message: _625.StringInputParam): unknown;
            fromPartial(object: {
                key?: string;
                value?: string;
            }): _625.StringInputParam;
        };
        ItemInput: {
            encode(message: _625.ItemInput, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _625.ItemInput;
            fromJSON(object: any): _625.ItemInput;
            toJSON(message: _625.ItemInput): unknown;
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
            }): _625.ItemInput;
        };
        DoubleWeightRange: {
            encode(message: _625.DoubleWeightRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _625.DoubleWeightRange;
            fromJSON(object: any): _625.DoubleWeightRange;
            toJSON(message: _625.DoubleWeightRange): unknown;
            fromPartial(object: {
                lower?: string;
                upper?: string;
                weight?: any;
            }): _625.DoubleWeightRange;
        };
        DoubleParam: {
            encode(message: _625.DoubleParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _625.DoubleParam;
            fromJSON(object: any): _625.DoubleParam;
            toJSON(message: _625.DoubleParam): unknown;
            fromPartial(object: {
                key?: string;
                weightRanges?: {
                    lower?: string;
                    upper?: string;
                    weight?: any;
                }[];
                program?: string;
            }): _625.DoubleParam;
        };
        IntWeightRange: {
            encode(message: _625.IntWeightRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _625.IntWeightRange;
            fromJSON(object: any): _625.IntWeightRange;
            toJSON(message: _625.IntWeightRange): unknown;
            fromPartial(object: {
                lower?: any;
                upper?: any;
                weight?: any;
            }): _625.IntWeightRange;
        };
        LongParam: {
            encode(message: _625.LongParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _625.LongParam;
            fromJSON(object: any): _625.LongParam;
            toJSON(message: _625.LongParam): unknown;
            fromPartial(object: {
                key?: string;
                weightRanges?: {
                    lower?: any;
                    upper?: any;
                    weight?: any;
                }[];
                program?: string;
            }): _625.LongParam;
        };
        StringParam: {
            encode(message: _625.StringParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _625.StringParam;
            fromJSON(object: any): _625.StringParam;
            toJSON(message: _625.StringParam): unknown;
            fromPartial(object: {
                key?: string;
                value?: string;
                program?: string;
            }): _625.StringParam;
        };
        CoinOutput: {
            encode(message: _625.CoinOutput, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _625.CoinOutput;
            fromJSON(object: any): _625.CoinOutput;
            toJSON(message: _625.CoinOutput): unknown;
            fromPartial(object: {
                id?: string;
                coin?: {
                    denom?: string;
                    amount?: string;
                };
                program?: string;
            }): _625.CoinOutput;
        };
        ItemOutput: {
            encode(message: _625.ItemOutput, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _625.ItemOutput;
            fromJSON(object: any): _625.ItemOutput;
            toJSON(message: _625.ItemOutput): unknown;
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
            }): _625.ItemOutput;
        };
        ItemModifyOutput: {
            encode(message: _625.ItemModifyOutput, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _625.ItemModifyOutput;
            fromJSON(object: any): _625.ItemModifyOutput;
            toJSON(message: _625.ItemModifyOutput): unknown;
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
            }): _625.ItemModifyOutput;
        };
        EntriesList: {
            encode(message: _625.EntriesList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _625.EntriesList;
            fromJSON(object: any): _625.EntriesList;
            toJSON(message: _625.EntriesList): unknown;
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
            }): _625.EntriesList;
        };
        WeightedOutputs: {
            encode(message: _625.WeightedOutputs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _625.WeightedOutputs;
            fromJSON(object: any): _625.WeightedOutputs;
            toJSON(message: _625.WeightedOutputs): unknown;
            fromPartial(object: {
                entryIds?: string[];
                weight?: any;
            }): _625.WeightedOutputs;
        };
        CoinInput: {
            encode(message: _625.CoinInput, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _625.CoinInput;
            fromJSON(object: any): _625.CoinInput;
            toJSON(message: _625.CoinInput): unknown;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _625.CoinInput;
        };
        Recipe: {
            encode(message: _625.Recipe, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _625.Recipe;
            fromJSON(object: any): _625.Recipe;
            toJSON(message: _625.Recipe): unknown;
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
            }): _625.Recipe;
        };
        QueryListSignUpByReferee: {
            encode(message: _624.QueryListSignUpByReferee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _624.QueryListSignUpByReferee;
            fromJSON(object: any): _624.QueryListSignUpByReferee;
            toJSON(message: _624.QueryListSignUpByReferee): unknown;
            fromPartial(object: {
                creator?: string;
            }): _624.QueryListSignUpByReferee;
        };
        QueryListSignUpByRefereeResponse: {
            encode(message: _624.QueryListSignUpByRefereeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _624.QueryListSignUpByRefereeResponse;
            fromJSON(object: any): _624.QueryListSignUpByRefereeResponse;
            toJSON(message: _624.QueryListSignUpByRefereeResponse): unknown;
            fromPartial(object: {
                signup?: {
                    address?: string;
                    users?: {
                        username?: string;
                        address?: string;
                    }[];
                };
            }): _624.QueryListSignUpByRefereeResponse;
        };
        QueryListTradesByCreatorRequest: {
            encode(message: _624.QueryListTradesByCreatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _624.QueryListTradesByCreatorRequest;
            fromJSON(object: any): _624.QueryListTradesByCreatorRequest;
            toJSON(message: _624.QueryListTradesByCreatorRequest): unknown;
            fromPartial(object: {
                creator?: string;
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _624.QueryListTradesByCreatorRequest;
        };
        QueryListTradesByCreatorResponse: {
            encode(message: _624.QueryListTradesByCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _624.QueryListTradesByCreatorResponse;
            fromJSON(object: any): _624.QueryListTradesByCreatorResponse;
            toJSON(message: _624.QueryListTradesByCreatorResponse): unknown;
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
            }): _624.QueryListTradesByCreatorResponse;
        };
        QueryGetItemHistoryRequest: {
            encode(message: _624.QueryGetItemHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _624.QueryGetItemHistoryRequest;
            fromJSON(object: any): _624.QueryGetItemHistoryRequest;
            toJSON(message: _624.QueryGetItemHistoryRequest): unknown;
            fromPartial(object: {
                cookbookId?: string;
                itemId?: string;
                mintedNumber?: string;
            }): _624.QueryGetItemHistoryRequest;
        };
        QueryGetItemHistoryResponse: {
            encode(message: _624.QueryGetItemHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _624.QueryGetItemHistoryResponse;
            fromJSON(object: any): _624.QueryGetItemHistoryResponse;
            toJSON(message: _624.QueryGetItemHistoryResponse): unknown;
            fromPartial(object: {
                history?: {
                    cookbookId?: string;
                    id?: string;
                    from?: string;
                    to?: string;
                    createdAt?: any;
                }[];
            }): _624.QueryGetItemHistoryResponse;
        };
        QueryGetRecipeHistoryRequest: {
            encode(message: _624.QueryGetRecipeHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _624.QueryGetRecipeHistoryRequest;
            fromJSON(object: any): _624.QueryGetRecipeHistoryRequest;
            toJSON(message: _624.QueryGetRecipeHistoryRequest): unknown;
            fromPartial(object: {
                cookbookId?: string;
                recipeId?: string;
            }): _624.QueryGetRecipeHistoryRequest;
        };
        QueryGetRecipeHistoryResponse: {
            encode(message: _624.QueryGetRecipeHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _624.QueryGetRecipeHistoryResponse;
            fromJSON(object: any): _624.QueryGetRecipeHistoryResponse;
            toJSON(message: _624.QueryGetRecipeHistoryResponse): unknown;
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
            }): _624.QueryGetRecipeHistoryResponse;
        };
        RecipeHistory: {
            encode(message: _624.RecipeHistory, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _624.RecipeHistory;
            fromJSON(object: any): _624.RecipeHistory;
            toJSON(message: _624.RecipeHistory): unknown;
            fromPartial(object: {
                itemId?: string;
                cookbookId?: string;
                recipeId?: string;
                sender?: string;
                senderName?: string;
                receiver?: string;
                amount?: string;
                createdAt?: any;
            }): _624.RecipeHistory;
        };
        QueryGetStripeRefundRequest: {
            encode(_: _624.QueryGetStripeRefundRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _624.QueryGetStripeRefundRequest;
            fromJSON(_: any): _624.QueryGetStripeRefundRequest;
            toJSON(_: _624.QueryGetStripeRefundRequest): unknown;
            fromPartial(_: {}): _624.QueryGetStripeRefundRequest;
        };
        QueryGetStripeRefundResponse: {
            encode(message: _624.QueryGetStripeRefundResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _624.QueryGetStripeRefundResponse;
            fromJSON(object: any): _624.QueryGetStripeRefundResponse;
            toJSON(message: _624.QueryGetStripeRefundResponse): unknown;
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
            }): _624.QueryGetStripeRefundResponse;
        };
        QueryGetRedeemInfoRequest: {
            encode(message: _624.QueryGetRedeemInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _624.QueryGetRedeemInfoRequest;
            fromJSON(object: any): _624.QueryGetRedeemInfoRequest;
            toJSON(message: _624.QueryGetRedeemInfoRequest): unknown;
            fromPartial(object: {
                id?: string;
            }): _624.QueryGetRedeemInfoRequest;
        };
        QueryGetRedeemInfoResponse: {
            encode(message: _624.QueryGetRedeemInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _624.QueryGetRedeemInfoResponse;
            fromJSON(object: any): _624.QueryGetRedeemInfoResponse;
            toJSON(message: _624.QueryGetRedeemInfoResponse): unknown;
            fromPartial(object: {
                redeemInfo?: {
                    id?: string;
                    processorName?: string;
                    address?: string;
                    amount?: string;
                    signature?: string;
                };
            }): _624.QueryGetRedeemInfoResponse;
        };
        QueryAllRedeemInfoRequest: {
            encode(message: _624.QueryAllRedeemInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _624.QueryAllRedeemInfoRequest;
            fromJSON(object: any): _624.QueryAllRedeemInfoRequest;
            toJSON(message: _624.QueryAllRedeemInfoRequest): unknown;
            fromPartial(object: {
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _624.QueryAllRedeemInfoRequest;
        };
        QueryAllRedeemInfoResponse: {
            encode(message: _624.QueryAllRedeemInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _624.QueryAllRedeemInfoResponse;
            fromJSON(object: any): _624.QueryAllRedeemInfoResponse;
            toJSON(message: _624.QueryAllRedeemInfoResponse): unknown;
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
            }): _624.QueryAllRedeemInfoResponse;
        };
        QueryGetPaymentInfoRequest: {
            encode(message: _624.QueryGetPaymentInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _624.QueryGetPaymentInfoRequest;
            fromJSON(object: any): _624.QueryGetPaymentInfoRequest;
            toJSON(message: _624.QueryGetPaymentInfoRequest): unknown;
            fromPartial(object: {
                purchaseId?: string;
            }): _624.QueryGetPaymentInfoRequest;
        };
        QueryGetPaymentInfoResponse: {
            encode(message: _624.QueryGetPaymentInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _624.QueryGetPaymentInfoResponse;
            fromJSON(object: any): _624.QueryGetPaymentInfoResponse;
            toJSON(message: _624.QueryGetPaymentInfoResponse): unknown;
            fromPartial(object: {
                paymentInfo?: {
                    purchaseId?: string;
                    processorName?: string;
                    payerAddr?: string;
                    amount?: string;
                    productId?: string;
                    signature?: string;
                };
            }): _624.QueryGetPaymentInfoResponse;
        };
        QueryAllPaymentInfoRequest: {
            encode(message: _624.QueryAllPaymentInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _624.QueryAllPaymentInfoRequest;
            fromJSON(object: any): _624.QueryAllPaymentInfoRequest;
            toJSON(message: _624.QueryAllPaymentInfoRequest): unknown;
            fromPartial(object: {
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _624.QueryAllPaymentInfoRequest;
        };
        QueryAllPaymentInfoResponse: {
            encode(message: _624.QueryAllPaymentInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _624.QueryAllPaymentInfoResponse;
            fromJSON(object: any): _624.QueryAllPaymentInfoResponse;
            toJSON(message: _624.QueryAllPaymentInfoResponse): unknown;
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
            }): _624.QueryAllPaymentInfoResponse;
        };
        QueryGetUsernameByAddressRequest: {
            encode(message: _624.QueryGetUsernameByAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _624.QueryGetUsernameByAddressRequest;
            fromJSON(object: any): _624.QueryGetUsernameByAddressRequest;
            toJSON(message: _624.QueryGetUsernameByAddressRequest): unknown;
            fromPartial(object: {
                address?: string;
            }): _624.QueryGetUsernameByAddressRequest;
        };
        QueryGetAddressByUsernameRequest: {
            encode(message: _624.QueryGetAddressByUsernameRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _624.QueryGetAddressByUsernameRequest;
            fromJSON(object: any): _624.QueryGetAddressByUsernameRequest;
            toJSON(message: _624.QueryGetAddressByUsernameRequest): unknown;
            fromPartial(object: {
                username?: string;
            }): _624.QueryGetAddressByUsernameRequest;
        };
        QueryGetUsernameByAddressResponse: {
            encode(message: _624.QueryGetUsernameByAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _624.QueryGetUsernameByAddressResponse;
            fromJSON(object: any): _624.QueryGetUsernameByAddressResponse;
            toJSON(message: _624.QueryGetUsernameByAddressResponse): unknown;
            fromPartial(object: {
                username?: {
                    value?: string;
                };
            }): _624.QueryGetUsernameByAddressResponse;
        };
        QueryGetAddressByUsernameResponse: {
            encode(message: _624.QueryGetAddressByUsernameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _624.QueryGetAddressByUsernameResponse;
            fromJSON(object: any): _624.QueryGetAddressByUsernameResponse;
            toJSON(message: _624.QueryGetAddressByUsernameResponse): unknown;
            fromPartial(object: {
                address?: {
                    value?: string;
                };
            }): _624.QueryGetAddressByUsernameResponse;
        };
        QueryGetTradeRequest: {
            encode(message: _624.QueryGetTradeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _624.QueryGetTradeRequest;
            fromJSON(object: any): _624.QueryGetTradeRequest;
            toJSON(message: _624.QueryGetTradeRequest): unknown;
            fromPartial(object: {
                id?: any;
            }): _624.QueryGetTradeRequest;
        };
        QueryGetTradeResponse: {
            encode(message: _624.QueryGetTradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _624.QueryGetTradeResponse;
            fromJSON(object: any): _624.QueryGetTradeResponse;
            toJSON(message: _624.QueryGetTradeResponse): unknown;
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
            }): _624.QueryGetTradeResponse;
        };
        QueryListItemByOwnerRequest: {
            encode(message: _624.QueryListItemByOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _624.QueryListItemByOwnerRequest;
            fromJSON(object: any): _624.QueryListItemByOwnerRequest;
            toJSON(message: _624.QueryListItemByOwnerRequest): unknown;
            fromPartial(object: {
                owner?: string;
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _624.QueryListItemByOwnerRequest;
        };
        QueryListItemByOwnerResponse: {
            encode(message: _624.QueryListItemByOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _624.QueryListItemByOwnerResponse;
            fromJSON(object: any): _624.QueryListItemByOwnerResponse;
            toJSON(message: _624.QueryListItemByOwnerResponse): unknown;
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
            }): _624.QueryListItemByOwnerResponse;
        };
        QueryGetGoogleInAppPurchaseOrderRequest: {
            encode(message: _624.QueryGetGoogleInAppPurchaseOrderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _624.QueryGetGoogleInAppPurchaseOrderRequest;
            fromJSON(object: any): _624.QueryGetGoogleInAppPurchaseOrderRequest;
            toJSON(message: _624.QueryGetGoogleInAppPurchaseOrderRequest): unknown;
            fromPartial(object: {
                purchaseToken?: string;
            }): _624.QueryGetGoogleInAppPurchaseOrderRequest;
        };
        QueryGetGoogleInAppPurchaseOrderResponse: {
            encode(message: _624.QueryGetGoogleInAppPurchaseOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _624.QueryGetGoogleInAppPurchaseOrderResponse;
            fromJSON(object: any): _624.QueryGetGoogleInAppPurchaseOrderResponse;
            toJSON(message: _624.QueryGetGoogleInAppPurchaseOrderResponse): unknown;
            fromPartial(object: {
                order?: {
                    creator?: string;
                    productId?: string;
                    purchaseToken?: string;
                    receiptDataBase64?: string;
                    signature?: string;
                };
            }): _624.QueryGetGoogleInAppPurchaseOrderResponse;
        };
        QueryListExecutionsByItemRequest: {
            encode(message: _624.QueryListExecutionsByItemRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _624.QueryListExecutionsByItemRequest;
            fromJSON(object: any): _624.QueryListExecutionsByItemRequest;
            toJSON(message: _624.QueryListExecutionsByItemRequest): unknown;
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
            }): _624.QueryListExecutionsByItemRequest;
        };
        QueryListExecutionsByItemResponse: {
            encode(message: _624.QueryListExecutionsByItemResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _624.QueryListExecutionsByItemResponse;
            fromJSON(object: any): _624.QueryListExecutionsByItemResponse;
            toJSON(message: _624.QueryListExecutionsByItemResponse): unknown;
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
            }): _624.QueryListExecutionsByItemResponse;
        };
        QueryListExecutionsByRecipeRequest: {
            encode(message: _624.QueryListExecutionsByRecipeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _624.QueryListExecutionsByRecipeRequest;
            fromJSON(object: any): _624.QueryListExecutionsByRecipeRequest;
            toJSON(message: _624.QueryListExecutionsByRecipeRequest): unknown;
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
            }): _624.QueryListExecutionsByRecipeRequest;
        };
        QueryListExecutionsByRecipeResponse: {
            encode(message: _624.QueryListExecutionsByRecipeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _624.QueryListExecutionsByRecipeResponse;
            fromJSON(object: any): _624.QueryListExecutionsByRecipeResponse;
            toJSON(message: _624.QueryListExecutionsByRecipeResponse): unknown;
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
            }): _624.QueryListExecutionsByRecipeResponse;
        };
        QueryGetExecutionRequest: {
            encode(message: _624.QueryGetExecutionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _624.QueryGetExecutionRequest;
            fromJSON(object: any): _624.QueryGetExecutionRequest;
            toJSON(message: _624.QueryGetExecutionRequest): unknown;
            fromPartial(object: {
                id?: string;
            }): _624.QueryGetExecutionRequest;
        };
        QueryGetExecutionResponse: {
            encode(message: _624.QueryGetExecutionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _624.QueryGetExecutionResponse;
            fromJSON(object: any): _624.QueryGetExecutionResponse;
            toJSON(message: _624.QueryGetExecutionResponse): unknown;
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
            }): _624.QueryGetExecutionResponse;
        };
        QueryListRecipesByCookbookRequest: {
            encode(message: _624.QueryListRecipesByCookbookRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _624.QueryListRecipesByCookbookRequest;
            fromJSON(object: any): _624.QueryListRecipesByCookbookRequest;
            toJSON(message: _624.QueryListRecipesByCookbookRequest): unknown;
            fromPartial(object: {
                cookbookId?: string;
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _624.QueryListRecipesByCookbookRequest;
        };
        QueryListRecipesByCookbookResponse: {
            encode(message: _624.QueryListRecipesByCookbookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _624.QueryListRecipesByCookbookResponse;
            fromJSON(object: any): _624.QueryListRecipesByCookbookResponse;
            toJSON(message: _624.QueryListRecipesByCookbookResponse): unknown;
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
            }): _624.QueryListRecipesByCookbookResponse;
        };
        QueryGetItemRequest: {
            encode(message: _624.QueryGetItemRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _624.QueryGetItemRequest;
            fromJSON(object: any): _624.QueryGetItemRequest;
            toJSON(message: _624.QueryGetItemRequest): unknown;
            fromPartial(object: {
                cookbookId?: string;
                id?: string;
            }): _624.QueryGetItemRequest;
        };
        QueryGetItemResponse: {
            encode(message: _624.QueryGetItemResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _624.QueryGetItemResponse;
            fromJSON(object: any): _624.QueryGetItemResponse;
            toJSON(message: _624.QueryGetItemResponse): unknown;
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
            }): _624.QueryGetItemResponse;
        };
        QueryGetRecipeRequest: {
            encode(message: _624.QueryGetRecipeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _624.QueryGetRecipeRequest;
            fromJSON(object: any): _624.QueryGetRecipeRequest;
            toJSON(message: _624.QueryGetRecipeRequest): unknown;
            fromPartial(object: {
                cookbookId?: string;
                id?: string;
            }): _624.QueryGetRecipeRequest;
        };
        QueryGetRecipeResponse: {
            encode(message: _624.QueryGetRecipeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _624.QueryGetRecipeResponse;
            fromJSON(object: any): _624.QueryGetRecipeResponse;
            toJSON(message: _624.QueryGetRecipeResponse): unknown;
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
            }): _624.QueryGetRecipeResponse;
        };
        QueryListCookbooksByCreatorRequest: {
            encode(message: _624.QueryListCookbooksByCreatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _624.QueryListCookbooksByCreatorRequest;
            fromJSON(object: any): _624.QueryListCookbooksByCreatorRequest;
            toJSON(message: _624.QueryListCookbooksByCreatorRequest): unknown;
            fromPartial(object: {
                creator?: string;
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _624.QueryListCookbooksByCreatorRequest;
        };
        QueryListCookbooksByCreatorResponse: {
            encode(message: _624.QueryListCookbooksByCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _624.QueryListCookbooksByCreatorResponse;
            fromJSON(object: any): _624.QueryListCookbooksByCreatorResponse;
            toJSON(message: _624.QueryListCookbooksByCreatorResponse): unknown;
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
            }): _624.QueryListCookbooksByCreatorResponse;
        };
        QueryGetCookbookRequest: {
            encode(message: _624.QueryGetCookbookRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _624.QueryGetCookbookRequest;
            fromJSON(object: any): _624.QueryGetCookbookRequest;
            toJSON(message: _624.QueryGetCookbookRequest): unknown;
            fromPartial(object: {
                id?: string;
            }): _624.QueryGetCookbookRequest;
        };
        QueryGetCookbookResponse: {
            encode(message: _624.QueryGetCookbookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _624.QueryGetCookbookResponse;
            fromJSON(object: any): _624.QueryGetCookbookResponse;
            toJSON(message: _624.QueryGetCookbookResponse): unknown;
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
            }): _624.QueryGetCookbookResponse;
        };
        PaymentInfo: {
            encode(message: _623.PaymentInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _623.PaymentInfo;
            fromJSON(object: any): _623.PaymentInfo;
            toJSON(message: _623.PaymentInfo): unknown;
            fromPartial(object: {
                purchaseId?: string;
                processorName?: string;
                payerAddr?: string;
                amount?: string;
                productId?: string;
                signature?: string;
            }): _623.PaymentInfo;
        };
        GoogleInAppPurchasePackage: {
            encode(message: _622.GoogleInAppPurchasePackage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _622.GoogleInAppPurchasePackage;
            fromJSON(object: any): _622.GoogleInAppPurchasePackage;
            toJSON(message: _622.GoogleInAppPurchasePackage): unknown;
            fromPartial(object: {
                packageName?: string;
                productId?: string;
                amount?: string;
            }): _622.GoogleInAppPurchasePackage;
        };
        CoinIssuer: {
            encode(message: _622.CoinIssuer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _622.CoinIssuer;
            fromJSON(object: any): _622.CoinIssuer;
            toJSON(message: _622.CoinIssuer): unknown;
            fromPartial(object: {
                coinDenom?: string;
                packages?: {
                    packageName?: string;
                    productId?: string;
                    amount?: string;
                }[];
                googleInAppPurchasePubKey?: string;
                entityName?: string;
            }): _622.CoinIssuer;
        };
        PaymentProcessor: {
            encode(message: _622.PaymentProcessor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _622.PaymentProcessor;
            fromJSON(object: any): _622.PaymentProcessor;
            toJSON(message: _622.PaymentProcessor): unknown;
            fromPartial(object: {
                coinDenom?: string;
                pubKey?: string;
                processorPercentage?: string;
                validatorsPercentage?: string;
                name?: string;
            }): _622.PaymentProcessor;
        };
        Params: {
            encode(message: _622.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _622.Params;
            fromJSON(object: any): _622.Params;
            toJSON(message: _622.Params): unknown;
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
            }): _622.Params;
        };
        DoubleKeyValue: {
            encode(message: _621.DoubleKeyValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _621.DoubleKeyValue;
            fromJSON(object: any): _621.DoubleKeyValue;
            toJSON(message: _621.DoubleKeyValue): unknown;
            fromPartial(object: {
                key?: string;
                value?: string;
            }): _621.DoubleKeyValue;
        };
        LongKeyValue: {
            encode(message: _621.LongKeyValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _621.LongKeyValue;
            fromJSON(object: any): _621.LongKeyValue;
            toJSON(message: _621.LongKeyValue): unknown;
            fromPartial(object: {
                key?: string;
                value?: any;
            }): _621.LongKeyValue;
        };
        StringKeyValue: {
            encode(message: _621.StringKeyValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _621.StringKeyValue;
            fromJSON(object: any): _621.StringKeyValue;
            toJSON(message: _621.StringKeyValue): unknown;
            fromPartial(object: {
                key?: string;
                value?: string;
            }): _621.StringKeyValue;
        };
        Item: {
            encode(message: _621.Item, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _621.Item;
            fromJSON(object: any): _621.Item;
            toJSON(message: _621.Item): unknown;
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
            }): _621.Item;
        };
        ItemHistory: {
            encode(message: _621.ItemHistory, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _621.ItemHistory;
            fromJSON(object: any): _621.ItemHistory;
            toJSON(message: _621.ItemHistory): unknown;
            fromPartial(object: {
                cookbookId?: string;
                id?: string;
                from?: string;
                to?: string;
                createdAt?: any;
            }): _621.ItemHistory;
        };
        History: {
            encode(message: _620.History, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _620.History;
            fromJSON(object: any): _620.History;
            toJSON(message: _620.History): unknown;
            fromPartial(object: {
                address?: string;
                amount?: string;
                cookbookId?: string;
                recipeId?: string;
                createdAt?: any;
                type?: string;
                txId?: string;
            }): _620.History;
        };
        GoogleInAppPurchaseOrder: {
            encode(message: _619.GoogleInAppPurchaseOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _619.GoogleInAppPurchaseOrder;
            fromJSON(object: any): _619.GoogleInAppPurchaseOrder;
            toJSON(message: _619.GoogleInAppPurchaseOrder): unknown;
            fromPartial(object: {
                creator?: string;
                productId?: string;
                purchaseToken?: string;
                receiptDataBase64?: string;
                signature?: string;
            }): _619.GoogleInAppPurchaseOrder;
        };
        GenesisState: {
            encode(message: _618.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _618.GenesisState;
            fromJSON(object: any): _618.GenesisState;
            toJSON(message: _618.GenesisState): unknown;
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
            }): _618.GenesisState;
        };
        ItemRecord: {
            encode(message: _617.ItemRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _617.ItemRecord;
            fromJSON(object: any): _617.ItemRecord;
            toJSON(message: _617.ItemRecord): unknown;
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
            }): _617.ItemRecord;
        };
        Execution: {
            encode(message: _617.Execution, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _617.Execution;
            fromJSON(object: any): _617.Execution;
            toJSON(message: _617.Execution): unknown;
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
            }): _617.Execution;
        };
        EventBurnDebtToken: {
            encode(message: _616.EventBurnDebtToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _616.EventBurnDebtToken;
            fromJSON(object: any): _616.EventBurnDebtToken;
            toJSON(message: _616.EventBurnDebtToken): unknown;
            fromPartial(object: {
                redeemInfo?: {
                    id?: string;
                    processorName?: string;
                    address?: string;
                    amount?: string;
                    signature?: string;
                };
            }): _616.EventBurnDebtToken;
        };
        EventCreateAccount: {
            encode(message: _616.EventCreateAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _616.EventCreateAccount;
            fromJSON(object: any): _616.EventCreateAccount;
            toJSON(message: _616.EventCreateAccount): unknown;
            fromPartial(object: {
                address?: string;
                username?: string;
            }): _616.EventCreateAccount;
        };
        EventUpdateAccount: {
            encode(message: _616.EventUpdateAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _616.EventUpdateAccount;
            fromJSON(object: any): _616.EventUpdateAccount;
            toJSON(message: _616.EventUpdateAccount): unknown;
            fromPartial(object: {
                address?: string;
                username?: string;
            }): _616.EventUpdateAccount;
        };
        EventCreateCookbook: {
            encode(message: _616.EventCreateCookbook, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _616.EventCreateCookbook;
            fromJSON(object: any): _616.EventCreateCookbook;
            toJSON(message: _616.EventCreateCookbook): unknown;
            fromPartial(object: {
                creator?: string;
                id?: string;
            }): _616.EventCreateCookbook;
        };
        EventUpdateCookbook: {
            encode(message: _616.EventUpdateCookbook, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _616.EventUpdateCookbook;
            fromJSON(object: any): _616.EventUpdateCookbook;
            toJSON(message: _616.EventUpdateCookbook): unknown;
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
            }): _616.EventUpdateCookbook;
        };
        EventTransferCookbook: {
            encode(message: _616.EventTransferCookbook, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _616.EventTransferCookbook;
            fromJSON(object: any): _616.EventTransferCookbook;
            toJSON(message: _616.EventTransferCookbook): unknown;
            fromPartial(object: {
                sender?: string;
                receiver?: string;
                id?: string;
            }): _616.EventTransferCookbook;
        };
        EventCreateRecipe: {
            encode(message: _616.EventCreateRecipe, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _616.EventCreateRecipe;
            fromJSON(object: any): _616.EventCreateRecipe;
            toJSON(message: _616.EventCreateRecipe): unknown;
            fromPartial(object: {
                creator?: string;
                cookbookId?: string;
                id?: string;
            }): _616.EventCreateRecipe;
        };
        EventUpdateRecipe: {
            encode(message: _616.EventUpdateRecipe, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _616.EventUpdateRecipe;
            fromJSON(object: any): _616.EventUpdateRecipe;
            toJSON(message: _616.EventUpdateRecipe): unknown;
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
            }): _616.EventUpdateRecipe;
        };
        EventCreateExecution: {
            encode(message: _616.EventCreateExecution, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _616.EventCreateExecution;
            fromJSON(object: any): _616.EventCreateExecution;
            toJSON(message: _616.EventCreateExecution): unknown;
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
            }): _616.EventCreateExecution;
        };
        EventCompleteExecution: {
            encode(message: _616.EventCompleteExecution, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _616.EventCompleteExecution;
            fromJSON(object: any): _616.EventCompleteExecution;
            toJSON(message: _616.EventCompleteExecution): unknown;
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
            }): _616.EventCompleteExecution;
        };
        EventDropExecution: {
            encode(message: _616.EventDropExecution, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _616.EventDropExecution;
            fromJSON(object: any): _616.EventDropExecution;
            toJSON(message: _616.EventDropExecution): unknown;
            fromPartial(object: {
                creator?: string;
                id?: string;
            }): _616.EventDropExecution;
        };
        EventCompleteExecutionEarly: {
            encode(message: _616.EventCompleteExecutionEarly, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _616.EventCompleteExecutionEarly;
            fromJSON(object: any): _616.EventCompleteExecutionEarly;
            toJSON(message: _616.EventCompleteExecutionEarly): unknown;
            fromPartial(object: {
                creator?: string;
                id?: string;
            }): _616.EventCompleteExecutionEarly;
        };
        EventSendItems: {
            encode(message: _616.EventSendItems, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _616.EventSendItems;
            fromJSON(object: any): _616.EventSendItems;
            toJSON(message: _616.EventSendItems): unknown;
            fromPartial(object: {
                sender?: string;
                receiver?: string;
                items?: {
                    cookbookId?: string;
                    itemId?: string;
                }[];
            }): _616.EventSendItems;
        };
        EventSetItemString: {
            encode(message: _616.EventSetItemString, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _616.EventSetItemString;
            fromJSON(object: any): _616.EventSetItemString;
            toJSON(message: _616.EventSetItemString): unknown;
            fromPartial(object: {
                creator?: string;
                cookbookId?: string;
                id?: string;
                originalMutableStrings?: {
                    key?: string;
                    value?: string;
                }[];
            }): _616.EventSetItemString;
        };
        EventCreateTrade: {
            encode(message: _616.EventCreateTrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _616.EventCreateTrade;
            fromJSON(object: any): _616.EventCreateTrade;
            toJSON(message: _616.EventCreateTrade): unknown;
            fromPartial(object: {
                creator?: string;
                id?: any;
            }): _616.EventCreateTrade;
        };
        EventCancelTrade: {
            encode(message: _616.EventCancelTrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _616.EventCancelTrade;
            fromJSON(object: any): _616.EventCancelTrade;
            toJSON(message: _616.EventCancelTrade): unknown;
            fromPartial(object: {
                creator?: string;
                id?: any;
            }): _616.EventCancelTrade;
        };
        EventFulfillTrade: {
            encode(message: _616.EventFulfillTrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _616.EventFulfillTrade;
            fromJSON(object: any): _616.EventFulfillTrade;
            toJSON(message: _616.EventFulfillTrade): unknown;
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
            }): _616.EventFulfillTrade;
        };
        EventGooglePurchase: {
            encode(message: _616.EventGooglePurchase, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _616.EventGooglePurchase;
            fromJSON(object: any): _616.EventGooglePurchase;
            toJSON(message: _616.EventGooglePurchase): unknown;
            fromPartial(object: {
                creator?: string;
                productId?: string;
                purchaseToken?: string;
                receiptDataBase64?: string;
                signature?: string;
            }): _616.EventGooglePurchase;
        };
        EventStripePurchase: {
            encode(message: _616.EventStripePurchase, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _616.EventStripePurchase;
            fromJSON(object: any): _616.EventStripePurchase;
            toJSON(message: _616.EventStripePurchase): unknown;
            fromPartial(object: {
                creator?: string;
                id?: string;
            }): _616.EventStripePurchase;
        };
        EventApplePurchase: {
            encode(message: _616.EventApplePurchase, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _616.EventApplePurchase;
            fromJSON(object: any): _616.EventApplePurchase;
            toJSON(message: _616.EventApplePurchase): unknown;
            fromPartial(object: {
                creator?: string;
                productId?: string;
                transactionId?: string;
                receiptDataBase64?: string;
            }): _616.EventApplePurchase;
        };
        Cookbook: {
            encode(message: _615.Cookbook, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _615.Cookbook;
            fromJSON(object: any): _615.Cookbook;
            toJSON(message: _615.Cookbook): unknown;
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
            }): _615.Cookbook;
        };
        AppleInAppPurchaseOrder: {
            encode(message: _614.AppleInAppPurchaseOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _614.AppleInAppPurchaseOrder;
            fromJSON(object: any): _614.AppleInAppPurchaseOrder;
            toJSON(message: _614.AppleInAppPurchaseOrder): unknown;
            fromPartial(object: {
                quantity?: string;
                productId?: string;
                purchaseId?: string;
                purchaseDate?: string;
                creator?: string;
            }): _614.AppleInAppPurchaseOrder;
        };
        UserMap: {
            encode(message: _613.UserMap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _613.UserMap;
            fromJSON(object: any): _613.UserMap;
            toJSON(message: _613.UserMap): unknown;
            fromPartial(object: {
                accountAddr?: string;
                username?: string;
            }): _613.UserMap;
        };
        Username: {
            encode(message: _613.Username, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _613.Username;
            fromJSON(object: any): _613.Username;
            toJSON(message: _613.Username): unknown;
            fromPartial(object: {
                value?: string;
            }): _613.Username;
        };
        AccountAddr: {
            encode(message: _613.AccountAddr, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _613.AccountAddr;
            fromJSON(object: any): _613.AccountAddr;
            toJSON(message: _613.AccountAddr): unknown;
            fromPartial(object: {
                value?: string;
            }): _613.AccountAddr;
        };
        ReferralKV: {
            encode(message: _613.ReferralKV, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _613.ReferralKV;
            fromJSON(object: any): _613.ReferralKV;
            toJSON(message: _613.ReferralKV): unknown;
            fromPartial(object: {
                address?: string;
                users?: {
                    username?: string;
                    address?: string;
                }[];
            }): _613.ReferralKV;
        };
        RefereeSignup: {
            encode(message: _613.RefereeSignup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _613.RefereeSignup;
            fromJSON(object: any): _613.RefereeSignup;
            toJSON(message: _613.RefereeSignup): unknown;
            fromPartial(object: {
                username?: string;
                address?: string;
            }): _613.RefereeSignup;
        };
    };
}
