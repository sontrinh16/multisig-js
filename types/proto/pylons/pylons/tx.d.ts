import { PaymentInfo } from "./payment_info";
import { RedeemInfo } from "./redeem_info";
import { ItemRef } from "./trade";
import { CoinInput, ItemInput, EntriesList, WeightedOutputs } from "./recipe";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface MsgAppleIap {
    creator: string;
    productId: string;
    purchaseId: string;
    receiptDataBase64: string;
}
export interface MsgAppleIapResponse {
}
export interface MsgAddStripeRefund {
    creator: string;
    payment: PaymentInfo;
}
export interface MsgAddStripeRefundResponse {
}
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgBurnDebtToken {
    creator: string;
    redeemInfo: RedeemInfo;
}
export interface MsgBurnDebtTokenResponse {
}
export interface MsgUpdateAccount {
    creator: string;
    username: string;
}
export interface MsgUpdateAccountResponse {
}
export interface MsgCreateAccount {
    creator: string;
    username: string;
    token: string;
    referralAddress: string;
}
export interface MsgCreateAccountResponse {
}
export interface MsgFulfillTrade {
    creator: string;
    id: Long;
    coinInputsIndex: Long;
    items: ItemRef[];
    paymentInfos: PaymentInfo[];
}
export interface MsgFulfillTradeResponse {
}
export interface MsgCreateTrade {
    creator: string;
    coinInputs: CoinInput[];
    itemInputs: ItemInput[];
    coinOutputs: Coin[];
    itemOutputs: ItemRef[];
    extraInfo: string;
}
export interface MsgCreateTradeResponse {
    id: Long;
}
export interface MsgCancelTrade {
    creator: string;
    id: Long;
}
export interface MsgCancelTradeResponse {
}
export interface MsgCompleteExecutionEarly {
    creator: string;
    id: string;
}
export interface MsgCompleteExecutionEarlyResponse {
    id: string;
}
export interface MsgTransferCookbook {
    creator: string;
    id: string;
    recipient: string;
}
export interface MsgTransferCookbookResponse {
}
export interface MsgGoogleInAppPurchaseGetCoins {
    creator: string;
    productId: string;
    purchaseToken: string;
    receiptDataBase64: string;
    signature: string;
}
export interface MsgGoogleInAppPurchaseGetCoinsResponse {
}
export interface MsgSendItems {
    creator: string;
    receiver: string;
    items: ItemRef[];
}
export interface MsgSendItemsResponse {
}
export interface MsgExecuteRecipe {
    creator: string;
    cookbookId: string;
    recipeId: string;
    coinInputsIndex: Long;
    itemIds: string[];
    paymentInfos: PaymentInfo[];
}
export interface MsgExecuteRecipeResponse {
    id: string;
    txTime: Long;
}
export interface MsgSetItemString {
    creator: string;
    cookbookId: string;
    id: string;
    field: string;
    value: string;
}
export interface MsgSetItemStringResponse {
}
export interface MsgCreateRecipe {
    creator: string;
    cookbookId: string;
    id: string;
    name: string;
    description: string;
    version: string;
    coinInputs: CoinInput[];
    itemInputs: ItemInput[];
    entries: EntriesList;
    outputs: WeightedOutputs[];
    blockInterval: Long;
    costPerBlock: Coin;
    enabled: boolean;
    extraInfo: string;
}
export interface MsgCreateRecipeResponse {
}
export interface MsgUpdateRecipe {
    creator: string;
    cookbookId: string;
    id: string;
    name: string;
    description: string;
    version: string;
    coinInputs: CoinInput[];
    itemInputs: ItemInput[];
    entries: EntriesList;
    outputs: WeightedOutputs[];
    blockInterval: Long;
    costPerBlock: Coin;
    enabled: boolean;
    extraInfo: string;
}
export interface MsgUpdateRecipeResponse {
}
export interface MsgCreateCookbook {
    creator: string;
    id: string;
    name: string;
    description: string;
    developer: string;
    version: string;
    supportEmail: string;
    enabled: boolean;
}
export interface MsgCreateCookbookResponse {
}
export interface MsgUpdateCookbook {
    creator: string;
    id: string;
    name: string;
    description: string;
    developer: string;
    version: string;
    supportEmail: string;
    enabled: boolean;
}
export interface MsgUpdateCookbookResponse {
}
export declare const MsgAppleIap: {
    encode(message: MsgAppleIap, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAppleIap;
    fromJSON(object: any): MsgAppleIap;
    toJSON(message: MsgAppleIap): unknown;
    fromPartial(object: DeepPartial<MsgAppleIap>): MsgAppleIap;
};
export declare const MsgAppleIapResponse: {
    encode(_: MsgAppleIapResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAppleIapResponse;
    fromJSON(_: any): MsgAppleIapResponse;
    toJSON(_: MsgAppleIapResponse): unknown;
    fromPartial(_: DeepPartial<MsgAppleIapResponse>): MsgAppleIapResponse;
};
export declare const MsgAddStripeRefund: {
    encode(message: MsgAddStripeRefund, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddStripeRefund;
    fromJSON(object: any): MsgAddStripeRefund;
    toJSON(message: MsgAddStripeRefund): unknown;
    fromPartial(object: DeepPartial<MsgAddStripeRefund>): MsgAddStripeRefund;
};
export declare const MsgAddStripeRefundResponse: {
    encode(_: MsgAddStripeRefundResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddStripeRefundResponse;
    fromJSON(_: any): MsgAddStripeRefundResponse;
    toJSON(_: MsgAddStripeRefundResponse): unknown;
    fromPartial(_: DeepPartial<MsgAddStripeRefundResponse>): MsgAddStripeRefundResponse;
};
export declare const MsgBurnDebtToken: {
    encode(message: MsgBurnDebtToken, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnDebtToken;
    fromJSON(object: any): MsgBurnDebtToken;
    toJSON(message: MsgBurnDebtToken): unknown;
    fromPartial(object: DeepPartial<MsgBurnDebtToken>): MsgBurnDebtToken;
};
export declare const MsgBurnDebtTokenResponse: {
    encode(_: MsgBurnDebtTokenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnDebtTokenResponse;
    fromJSON(_: any): MsgBurnDebtTokenResponse;
    toJSON(_: MsgBurnDebtTokenResponse): unknown;
    fromPartial(_: DeepPartial<MsgBurnDebtTokenResponse>): MsgBurnDebtTokenResponse;
};
export declare const MsgUpdateAccount: {
    encode(message: MsgUpdateAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateAccount;
    fromJSON(object: any): MsgUpdateAccount;
    toJSON(message: MsgUpdateAccount): unknown;
    fromPartial(object: DeepPartial<MsgUpdateAccount>): MsgUpdateAccount;
};
export declare const MsgUpdateAccountResponse: {
    encode(_: MsgUpdateAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateAccountResponse;
    fromJSON(_: any): MsgUpdateAccountResponse;
    toJSON(_: MsgUpdateAccountResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateAccountResponse>): MsgUpdateAccountResponse;
};
export declare const MsgCreateAccount: {
    encode(message: MsgCreateAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateAccount;
    fromJSON(object: any): MsgCreateAccount;
    toJSON(message: MsgCreateAccount): unknown;
    fromPartial(object: DeepPartial<MsgCreateAccount>): MsgCreateAccount;
};
export declare const MsgCreateAccountResponse: {
    encode(_: MsgCreateAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateAccountResponse;
    fromJSON(_: any): MsgCreateAccountResponse;
    toJSON(_: MsgCreateAccountResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateAccountResponse>): MsgCreateAccountResponse;
};
export declare const MsgFulfillTrade: {
    encode(message: MsgFulfillTrade, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgFulfillTrade;
    fromJSON(object: any): MsgFulfillTrade;
    toJSON(message: MsgFulfillTrade): unknown;
    fromPartial(object: DeepPartial<MsgFulfillTrade>): MsgFulfillTrade;
};
export declare const MsgFulfillTradeResponse: {
    encode(_: MsgFulfillTradeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgFulfillTradeResponse;
    fromJSON(_: any): MsgFulfillTradeResponse;
    toJSON(_: MsgFulfillTradeResponse): unknown;
    fromPartial(_: DeepPartial<MsgFulfillTradeResponse>): MsgFulfillTradeResponse;
};
export declare const MsgCreateTrade: {
    encode(message: MsgCreateTrade, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateTrade;
    fromJSON(object: any): MsgCreateTrade;
    toJSON(message: MsgCreateTrade): unknown;
    fromPartial(object: DeepPartial<MsgCreateTrade>): MsgCreateTrade;
};
export declare const MsgCreateTradeResponse: {
    encode(message: MsgCreateTradeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateTradeResponse;
    fromJSON(object: any): MsgCreateTradeResponse;
    toJSON(message: MsgCreateTradeResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateTradeResponse>): MsgCreateTradeResponse;
};
export declare const MsgCancelTrade: {
    encode(message: MsgCancelTrade, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelTrade;
    fromJSON(object: any): MsgCancelTrade;
    toJSON(message: MsgCancelTrade): unknown;
    fromPartial(object: DeepPartial<MsgCancelTrade>): MsgCancelTrade;
};
export declare const MsgCancelTradeResponse: {
    encode(_: MsgCancelTradeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelTradeResponse;
    fromJSON(_: any): MsgCancelTradeResponse;
    toJSON(_: MsgCancelTradeResponse): unknown;
    fromPartial(_: DeepPartial<MsgCancelTradeResponse>): MsgCancelTradeResponse;
};
export declare const MsgCompleteExecutionEarly: {
    encode(message: MsgCompleteExecutionEarly, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCompleteExecutionEarly;
    fromJSON(object: any): MsgCompleteExecutionEarly;
    toJSON(message: MsgCompleteExecutionEarly): unknown;
    fromPartial(object: DeepPartial<MsgCompleteExecutionEarly>): MsgCompleteExecutionEarly;
};
export declare const MsgCompleteExecutionEarlyResponse: {
    encode(message: MsgCompleteExecutionEarlyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCompleteExecutionEarlyResponse;
    fromJSON(object: any): MsgCompleteExecutionEarlyResponse;
    toJSON(message: MsgCompleteExecutionEarlyResponse): unknown;
    fromPartial(object: DeepPartial<MsgCompleteExecutionEarlyResponse>): MsgCompleteExecutionEarlyResponse;
};
export declare const MsgTransferCookbook: {
    encode(message: MsgTransferCookbook, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferCookbook;
    fromJSON(object: any): MsgTransferCookbook;
    toJSON(message: MsgTransferCookbook): unknown;
    fromPartial(object: DeepPartial<MsgTransferCookbook>): MsgTransferCookbook;
};
export declare const MsgTransferCookbookResponse: {
    encode(_: MsgTransferCookbookResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferCookbookResponse;
    fromJSON(_: any): MsgTransferCookbookResponse;
    toJSON(_: MsgTransferCookbookResponse): unknown;
    fromPartial(_: DeepPartial<MsgTransferCookbookResponse>): MsgTransferCookbookResponse;
};
export declare const MsgGoogleInAppPurchaseGetCoins: {
    encode(message: MsgGoogleInAppPurchaseGetCoins, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgGoogleInAppPurchaseGetCoins;
    fromJSON(object: any): MsgGoogleInAppPurchaseGetCoins;
    toJSON(message: MsgGoogleInAppPurchaseGetCoins): unknown;
    fromPartial(object: DeepPartial<MsgGoogleInAppPurchaseGetCoins>): MsgGoogleInAppPurchaseGetCoins;
};
export declare const MsgGoogleInAppPurchaseGetCoinsResponse: {
    encode(_: MsgGoogleInAppPurchaseGetCoinsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgGoogleInAppPurchaseGetCoinsResponse;
    fromJSON(_: any): MsgGoogleInAppPurchaseGetCoinsResponse;
    toJSON(_: MsgGoogleInAppPurchaseGetCoinsResponse): unknown;
    fromPartial(_: DeepPartial<MsgGoogleInAppPurchaseGetCoinsResponse>): MsgGoogleInAppPurchaseGetCoinsResponse;
};
export declare const MsgSendItems: {
    encode(message: MsgSendItems, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendItems;
    fromJSON(object: any): MsgSendItems;
    toJSON(message: MsgSendItems): unknown;
    fromPartial(object: DeepPartial<MsgSendItems>): MsgSendItems;
};
export declare const MsgSendItemsResponse: {
    encode(_: MsgSendItemsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendItemsResponse;
    fromJSON(_: any): MsgSendItemsResponse;
    toJSON(_: MsgSendItemsResponse): unknown;
    fromPartial(_: DeepPartial<MsgSendItemsResponse>): MsgSendItemsResponse;
};
export declare const MsgExecuteRecipe: {
    encode(message: MsgExecuteRecipe, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteRecipe;
    fromJSON(object: any): MsgExecuteRecipe;
    toJSON(message: MsgExecuteRecipe): unknown;
    fromPartial(object: DeepPartial<MsgExecuteRecipe>): MsgExecuteRecipe;
};
export declare const MsgExecuteRecipeResponse: {
    encode(message: MsgExecuteRecipeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteRecipeResponse;
    fromJSON(object: any): MsgExecuteRecipeResponse;
    toJSON(message: MsgExecuteRecipeResponse): unknown;
    fromPartial(object: DeepPartial<MsgExecuteRecipeResponse>): MsgExecuteRecipeResponse;
};
export declare const MsgSetItemString: {
    encode(message: MsgSetItemString, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetItemString;
    fromJSON(object: any): MsgSetItemString;
    toJSON(message: MsgSetItemString): unknown;
    fromPartial(object: DeepPartial<MsgSetItemString>): MsgSetItemString;
};
export declare const MsgSetItemStringResponse: {
    encode(_: MsgSetItemStringResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetItemStringResponse;
    fromJSON(_: any): MsgSetItemStringResponse;
    toJSON(_: MsgSetItemStringResponse): unknown;
    fromPartial(_: DeepPartial<MsgSetItemStringResponse>): MsgSetItemStringResponse;
};
export declare const MsgCreateRecipe: {
    encode(message: MsgCreateRecipe, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateRecipe;
    fromJSON(object: any): MsgCreateRecipe;
    toJSON(message: MsgCreateRecipe): unknown;
    fromPartial(object: DeepPartial<MsgCreateRecipe>): MsgCreateRecipe;
};
export declare const MsgCreateRecipeResponse: {
    encode(_: MsgCreateRecipeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateRecipeResponse;
    fromJSON(_: any): MsgCreateRecipeResponse;
    toJSON(_: MsgCreateRecipeResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateRecipeResponse>): MsgCreateRecipeResponse;
};
export declare const MsgUpdateRecipe: {
    encode(message: MsgUpdateRecipe, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateRecipe;
    fromJSON(object: any): MsgUpdateRecipe;
    toJSON(message: MsgUpdateRecipe): unknown;
    fromPartial(object: DeepPartial<MsgUpdateRecipe>): MsgUpdateRecipe;
};
export declare const MsgUpdateRecipeResponse: {
    encode(_: MsgUpdateRecipeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateRecipeResponse;
    fromJSON(_: any): MsgUpdateRecipeResponse;
    toJSON(_: MsgUpdateRecipeResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateRecipeResponse>): MsgUpdateRecipeResponse;
};
export declare const MsgCreateCookbook: {
    encode(message: MsgCreateCookbook, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateCookbook;
    fromJSON(object: any): MsgCreateCookbook;
    toJSON(message: MsgCreateCookbook): unknown;
    fromPartial(object: DeepPartial<MsgCreateCookbook>): MsgCreateCookbook;
};
export declare const MsgCreateCookbookResponse: {
    encode(_: MsgCreateCookbookResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateCookbookResponse;
    fromJSON(_: any): MsgCreateCookbookResponse;
    toJSON(_: MsgCreateCookbookResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateCookbookResponse>): MsgCreateCookbookResponse;
};
export declare const MsgUpdateCookbook: {
    encode(message: MsgUpdateCookbook, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateCookbook;
    fromJSON(object: any): MsgUpdateCookbook;
    toJSON(message: MsgUpdateCookbook): unknown;
    fromPartial(object: DeepPartial<MsgUpdateCookbook>): MsgUpdateCookbook;
};
export declare const MsgUpdateCookbookResponse: {
    encode(_: MsgUpdateCookbookResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateCookbookResponse;
    fromJSON(_: any): MsgUpdateCookbookResponse;
    toJSON(_: MsgUpdateCookbookResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateCookbookResponse>): MsgUpdateCookbookResponse;
};
