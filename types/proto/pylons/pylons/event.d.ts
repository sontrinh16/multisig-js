import { RedeemInfo } from "./redeem_info";
import { Cookbook } from "./cookbook";
import { Recipe } from "./recipe";
import { PaymentInfo } from "./payment_info";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Item, StringKeyValue } from "./item";
import { ItemRef } from "./trade";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface EventBurnDebtToken {
    redeemInfo: RedeemInfo;
}
export interface EventCreateAccount {
    address: string;
    username: string;
}
export interface EventUpdateAccount {
    address: string;
    username: string;
}
export interface EventCreateCookbook {
    creator: string;
    id: string;
}
/**
 * EventUpdateCookbook contains a record of the cookbook pre-update.  The
 * updated fields can be found by the message emitted by MsgUpdateCookbook
 */
export interface EventUpdateCookbook {
    originalCookbook: Cookbook;
}
export interface EventTransferCookbook {
    sender: string;
    receiver: string;
    id: string;
}
export interface EventCreateRecipe {
    creator: string;
    cookbookId: string;
    id: string;
}
/**
 * EventUpdateRecipe contains a record of the recipe pre-update.  The updated
 * fields can be found by the message emitted by MsgUpdateRecipe
 */
export interface EventUpdateRecipe {
    originalRecipe: Recipe;
}
/**
 * EventCreateExecution contains the creator and id of a created execution.
 * Execution ids are of the form {count-targetBlockHeight}
 */
export interface EventCreateExecution {
    creator: string;
    id: string;
    paymentInfos: PaymentInfo[];
}
export interface EventCompleteExecution {
    creator: string;
    id: string;
    burnCoins: Coin[];
    payCoins: Coin[];
    transferCoins: Coin[];
    feeCoins: Coin[];
    coinOutputs: Coin[];
    mintItems: Item[];
    modifyItems: Item[];
}
export interface EventDropExecution {
    creator: string;
    id: string;
}
export interface EventCompleteExecutionEarly {
    creator: string;
    id: string;
}
export interface EventSendItems {
    sender: string;
    receiver: string;
    items: ItemRef[];
}
export interface EventSetItemString {
    creator: string;
    cookbookId: string;
    id: string;
    originalMutableStrings: StringKeyValue[];
}
export interface EventCreateTrade {
    creator: string;
    id: Long;
}
export interface EventCancelTrade {
    creator: string;
    id: Long;
}
export interface EventFulfillTrade {
    id: Long;
    creator: string;
    fulfiller: string;
    itemInputs: ItemRef[];
    coinInputs: Coin[];
    itemOutputs: ItemRef[];
    coinOutputs: Coin[];
    paymentInfos: PaymentInfo[];
}
export interface EventGooglePurchase {
    creator: string;
    productId: string;
    purchaseToken: string;
    receiptDataBase64: string;
    signature: string;
}
export interface EventStripePurchase {
    creator: string;
    id: string;
}
export interface EventApplePurchase {
    creator: string;
    productId: string;
    transactionId: string;
    receiptDataBase64: string;
}
export declare const EventBurnDebtToken: {
    encode(message: EventBurnDebtToken, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventBurnDebtToken;
    fromJSON(object: any): EventBurnDebtToken;
    toJSON(message: EventBurnDebtToken): unknown;
    fromPartial(object: DeepPartial<EventBurnDebtToken>): EventBurnDebtToken;
};
export declare const EventCreateAccount: {
    encode(message: EventCreateAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateAccount;
    fromJSON(object: any): EventCreateAccount;
    toJSON(message: EventCreateAccount): unknown;
    fromPartial(object: DeepPartial<EventCreateAccount>): EventCreateAccount;
};
export declare const EventUpdateAccount: {
    encode(message: EventUpdateAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateAccount;
    fromJSON(object: any): EventUpdateAccount;
    toJSON(message: EventUpdateAccount): unknown;
    fromPartial(object: DeepPartial<EventUpdateAccount>): EventUpdateAccount;
};
export declare const EventCreateCookbook: {
    encode(message: EventCreateCookbook, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateCookbook;
    fromJSON(object: any): EventCreateCookbook;
    toJSON(message: EventCreateCookbook): unknown;
    fromPartial(object: DeepPartial<EventCreateCookbook>): EventCreateCookbook;
};
export declare const EventUpdateCookbook: {
    encode(message: EventUpdateCookbook, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateCookbook;
    fromJSON(object: any): EventUpdateCookbook;
    toJSON(message: EventUpdateCookbook): unknown;
    fromPartial(object: DeepPartial<EventUpdateCookbook>): EventUpdateCookbook;
};
export declare const EventTransferCookbook: {
    encode(message: EventTransferCookbook, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventTransferCookbook;
    fromJSON(object: any): EventTransferCookbook;
    toJSON(message: EventTransferCookbook): unknown;
    fromPartial(object: DeepPartial<EventTransferCookbook>): EventTransferCookbook;
};
export declare const EventCreateRecipe: {
    encode(message: EventCreateRecipe, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateRecipe;
    fromJSON(object: any): EventCreateRecipe;
    toJSON(message: EventCreateRecipe): unknown;
    fromPartial(object: DeepPartial<EventCreateRecipe>): EventCreateRecipe;
};
export declare const EventUpdateRecipe: {
    encode(message: EventUpdateRecipe, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateRecipe;
    fromJSON(object: any): EventUpdateRecipe;
    toJSON(message: EventUpdateRecipe): unknown;
    fromPartial(object: DeepPartial<EventUpdateRecipe>): EventUpdateRecipe;
};
export declare const EventCreateExecution: {
    encode(message: EventCreateExecution, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateExecution;
    fromJSON(object: any): EventCreateExecution;
    toJSON(message: EventCreateExecution): unknown;
    fromPartial(object: DeepPartial<EventCreateExecution>): EventCreateExecution;
};
export declare const EventCompleteExecution: {
    encode(message: EventCompleteExecution, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCompleteExecution;
    fromJSON(object: any): EventCompleteExecution;
    toJSON(message: EventCompleteExecution): unknown;
    fromPartial(object: DeepPartial<EventCompleteExecution>): EventCompleteExecution;
};
export declare const EventDropExecution: {
    encode(message: EventDropExecution, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventDropExecution;
    fromJSON(object: any): EventDropExecution;
    toJSON(message: EventDropExecution): unknown;
    fromPartial(object: DeepPartial<EventDropExecution>): EventDropExecution;
};
export declare const EventCompleteExecutionEarly: {
    encode(message: EventCompleteExecutionEarly, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCompleteExecutionEarly;
    fromJSON(object: any): EventCompleteExecutionEarly;
    toJSON(message: EventCompleteExecutionEarly): unknown;
    fromPartial(object: DeepPartial<EventCompleteExecutionEarly>): EventCompleteExecutionEarly;
};
export declare const EventSendItems: {
    encode(message: EventSendItems, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventSendItems;
    fromJSON(object: any): EventSendItems;
    toJSON(message: EventSendItems): unknown;
    fromPartial(object: DeepPartial<EventSendItems>): EventSendItems;
};
export declare const EventSetItemString: {
    encode(message: EventSetItemString, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventSetItemString;
    fromJSON(object: any): EventSetItemString;
    toJSON(message: EventSetItemString): unknown;
    fromPartial(object: DeepPartial<EventSetItemString>): EventSetItemString;
};
export declare const EventCreateTrade: {
    encode(message: EventCreateTrade, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateTrade;
    fromJSON(object: any): EventCreateTrade;
    toJSON(message: EventCreateTrade): unknown;
    fromPartial(object: DeepPartial<EventCreateTrade>): EventCreateTrade;
};
export declare const EventCancelTrade: {
    encode(message: EventCancelTrade, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCancelTrade;
    fromJSON(object: any): EventCancelTrade;
    toJSON(message: EventCancelTrade): unknown;
    fromPartial(object: DeepPartial<EventCancelTrade>): EventCancelTrade;
};
export declare const EventFulfillTrade: {
    encode(message: EventFulfillTrade, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventFulfillTrade;
    fromJSON(object: any): EventFulfillTrade;
    toJSON(message: EventFulfillTrade): unknown;
    fromPartial(object: DeepPartial<EventFulfillTrade>): EventFulfillTrade;
};
export declare const EventGooglePurchase: {
    encode(message: EventGooglePurchase, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventGooglePurchase;
    fromJSON(object: any): EventGooglePurchase;
    toJSON(message: EventGooglePurchase): unknown;
    fromPartial(object: DeepPartial<EventGooglePurchase>): EventGooglePurchase;
};
export declare const EventStripePurchase: {
    encode(message: EventStripePurchase, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventStripePurchase;
    fromJSON(object: any): EventStripePurchase;
    toJSON(message: EventStripePurchase): unknown;
    fromPartial(object: DeepPartial<EventStripePurchase>): EventStripePurchase;
};
export declare const EventApplePurchase: {
    encode(message: EventApplePurchase, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventApplePurchase;
    fromJSON(object: any): EventApplePurchase;
    toJSON(message: EventApplePurchase): unknown;
    fromPartial(object: DeepPartial<EventApplePurchase>): EventApplePurchase;
};
