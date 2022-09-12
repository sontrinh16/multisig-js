import { PaymentInfo } from "./payment_info";
import { RedeemInfo } from "./redeem_info";
import { ItemRef } from "./trade";
import { CoinInput, ItemInput, EntriesList, WeightedOutputs } from "./recipe";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Long } from "@osmonauts/helpers";
export interface MsgAppleIap {
  creator: string;
  productId: string;
  purchaseId: string;
  receiptDataBase64: string;
}
export interface MsgAppleIapResponse {}
export interface MsgAddStripeRefund {
  creator: string;
  payment: PaymentInfo;
}
export interface MsgAddStripeRefundResponse {}

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgBurnDebtToken {
  creator: string;
  redeemInfo: RedeemInfo;
}
export interface MsgBurnDebtTokenResponse {}
export interface MsgUpdateAccount {
  creator: string;
  username: string;
}
export interface MsgUpdateAccountResponse {}
export interface MsgCreateAccount {
  creator: string;
  username: string;
  token: string;
  referralAddress: string;
}
export interface MsgCreateAccountResponse {}
export interface MsgFulfillTrade {
  creator: string;
  id: Long;
  coinInputsIndex: Long;
  items: ItemRef[];
  paymentInfos: PaymentInfo[];
}
export interface MsgFulfillTradeResponse {}
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
export interface MsgCancelTradeResponse {}
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
export interface MsgTransferCookbookResponse {}
export interface MsgGoogleInAppPurchaseGetCoins {
  creator: string;
  productId: string;
  purchaseToken: string;
  receiptDataBase64: string;
  signature: string;
}
export interface MsgGoogleInAppPurchaseGetCoinsResponse {}
export interface MsgSendItems {
  creator: string;
  receiver: string;
  items: ItemRef[];
}
export interface MsgSendItemsResponse {}
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
export interface MsgSetItemStringResponse {}
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
export interface MsgCreateRecipeResponse {}
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
export interface MsgUpdateRecipeResponse {}
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
export interface MsgCreateCookbookResponse {}
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
export interface MsgUpdateCookbookResponse {}

function createBaseMsgAppleIap(): MsgAppleIap {
  return {
    creator: "",
    productId: "",
    purchaseId: "",
    receiptDataBase64: ""
  };
}

export const MsgAppleIap = {
  encode(message: MsgAppleIap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.productId !== "") {
      writer.uint32(18).string(message.productId);
    }

    if (message.purchaseId !== "") {
      writer.uint32(26).string(message.purchaseId);
    }

    if (message.receiptDataBase64 !== "") {
      writer.uint32(34).string(message.receiptDataBase64);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAppleIap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAppleIap();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.productId = reader.string();
          break;

        case 3:
          message.purchaseId = reader.string();
          break;

        case 4:
          message.receiptDataBase64 = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgAppleIap {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      productId: isSet(object.productId) ? String(object.productId) : "",
      purchaseId: isSet(object.purchaseId) ? String(object.purchaseId) : "",
      receiptDataBase64: isSet(object.receiptDataBase64) ? String(object.receiptDataBase64) : ""
    };
  },

  toJSON(message: MsgAppleIap): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.productId !== undefined && (obj.productId = message.productId);
    message.purchaseId !== undefined && (obj.purchaseId = message.purchaseId);
    message.receiptDataBase64 !== undefined && (obj.receiptDataBase64 = message.receiptDataBase64);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAppleIap>): MsgAppleIap {
    const message = createBaseMsgAppleIap();
    message.creator = object.creator ?? "";
    message.productId = object.productId ?? "";
    message.purchaseId = object.purchaseId ?? "";
    message.receiptDataBase64 = object.receiptDataBase64 ?? "";
    return message;
  }

};

function createBaseMsgAppleIapResponse(): MsgAppleIapResponse {
  return {};
}

export const MsgAppleIapResponse = {
  encode(_: MsgAppleIapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAppleIapResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAppleIapResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgAppleIapResponse {
    return {};
  },

  toJSON(_: MsgAppleIapResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgAppleIapResponse>): MsgAppleIapResponse {
    const message = createBaseMsgAppleIapResponse();
    return message;
  }

};

function createBaseMsgAddStripeRefund(): MsgAddStripeRefund {
  return {
    creator: "",
    payment: undefined
  };
}

export const MsgAddStripeRefund = {
  encode(message: MsgAddStripeRefund, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.payment !== undefined) {
      PaymentInfo.encode(message.payment, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddStripeRefund {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddStripeRefund();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.payment = PaymentInfo.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgAddStripeRefund {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      payment: isSet(object.payment) ? PaymentInfo.fromJSON(object.payment) : undefined
    };
  },

  toJSON(message: MsgAddStripeRefund): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.payment !== undefined && (obj.payment = message.payment ? PaymentInfo.toJSON(message.payment) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddStripeRefund>): MsgAddStripeRefund {
    const message = createBaseMsgAddStripeRefund();
    message.creator = object.creator ?? "";
    message.payment = object.payment !== undefined && object.payment !== null ? PaymentInfo.fromPartial(object.payment) : undefined;
    return message;
  }

};

function createBaseMsgAddStripeRefundResponse(): MsgAddStripeRefundResponse {
  return {};
}

export const MsgAddStripeRefundResponse = {
  encode(_: MsgAddStripeRefundResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddStripeRefundResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddStripeRefundResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgAddStripeRefundResponse {
    return {};
  },

  toJSON(_: MsgAddStripeRefundResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgAddStripeRefundResponse>): MsgAddStripeRefundResponse {
    const message = createBaseMsgAddStripeRefundResponse();
    return message;
  }

};

function createBaseMsgBurnDebtToken(): MsgBurnDebtToken {
  return {
    creator: "",
    redeemInfo: undefined
  };
}

export const MsgBurnDebtToken = {
  encode(message: MsgBurnDebtToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.redeemInfo !== undefined) {
      RedeemInfo.encode(message.redeemInfo, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnDebtToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnDebtToken();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.redeemInfo = RedeemInfo.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgBurnDebtToken {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      redeemInfo: isSet(object.redeemInfo) ? RedeemInfo.fromJSON(object.redeemInfo) : undefined
    };
  },

  toJSON(message: MsgBurnDebtToken): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.redeemInfo !== undefined && (obj.redeemInfo = message.redeemInfo ? RedeemInfo.toJSON(message.redeemInfo) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgBurnDebtToken>): MsgBurnDebtToken {
    const message = createBaseMsgBurnDebtToken();
    message.creator = object.creator ?? "";
    message.redeemInfo = object.redeemInfo !== undefined && object.redeemInfo !== null ? RedeemInfo.fromPartial(object.redeemInfo) : undefined;
    return message;
  }

};

function createBaseMsgBurnDebtTokenResponse(): MsgBurnDebtTokenResponse {
  return {};
}

export const MsgBurnDebtTokenResponse = {
  encode(_: MsgBurnDebtTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnDebtTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnDebtTokenResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgBurnDebtTokenResponse {
    return {};
  },

  toJSON(_: MsgBurnDebtTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgBurnDebtTokenResponse>): MsgBurnDebtTokenResponse {
    const message = createBaseMsgBurnDebtTokenResponse();
    return message;
  }

};

function createBaseMsgUpdateAccount(): MsgUpdateAccount {
  return {
    creator: "",
    username: ""
  };
}

export const MsgUpdateAccount = {
  encode(message: MsgUpdateAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.username !== "") {
      writer.uint32(18).string(message.username);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAccount();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.username = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUpdateAccount {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      username: isSet(object.username) ? String(object.username) : ""
    };
  },

  toJSON(message: MsgUpdateAccount): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.username !== undefined && (obj.username = message.username);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateAccount>): MsgUpdateAccount {
    const message = createBaseMsgUpdateAccount();
    message.creator = object.creator ?? "";
    message.username = object.username ?? "";
    return message;
  }

};

function createBaseMsgUpdateAccountResponse(): MsgUpdateAccountResponse {
  return {};
}

export const MsgUpdateAccountResponse = {
  encode(_: MsgUpdateAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAccountResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgUpdateAccountResponse {
    return {};
  },

  toJSON(_: MsgUpdateAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateAccountResponse>): MsgUpdateAccountResponse {
    const message = createBaseMsgUpdateAccountResponse();
    return message;
  }

};

function createBaseMsgCreateAccount(): MsgCreateAccount {
  return {
    creator: "",
    username: "",
    token: "",
    referralAddress: ""
  };
}

export const MsgCreateAccount = {
  encode(message: MsgCreateAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.username !== "") {
      writer.uint32(18).string(message.username);
    }

    if (message.token !== "") {
      writer.uint32(26).string(message.token);
    }

    if (message.referralAddress !== "") {
      writer.uint32(34).string(message.referralAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateAccount();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.username = reader.string();
          break;

        case 3:
          message.token = reader.string();
          break;

        case 4:
          message.referralAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateAccount {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      username: isSet(object.username) ? String(object.username) : "",
      token: isSet(object.token) ? String(object.token) : "",
      referralAddress: isSet(object.referralAddress) ? String(object.referralAddress) : ""
    };
  },

  toJSON(message: MsgCreateAccount): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.username !== undefined && (obj.username = message.username);
    message.token !== undefined && (obj.token = message.token);
    message.referralAddress !== undefined && (obj.referralAddress = message.referralAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateAccount>): MsgCreateAccount {
    const message = createBaseMsgCreateAccount();
    message.creator = object.creator ?? "";
    message.username = object.username ?? "";
    message.token = object.token ?? "";
    message.referralAddress = object.referralAddress ?? "";
    return message;
  }

};

function createBaseMsgCreateAccountResponse(): MsgCreateAccountResponse {
  return {};
}

export const MsgCreateAccountResponse = {
  encode(_: MsgCreateAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateAccountResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgCreateAccountResponse {
    return {};
  },

  toJSON(_: MsgCreateAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreateAccountResponse>): MsgCreateAccountResponse {
    const message = createBaseMsgCreateAccountResponse();
    return message;
  }

};

function createBaseMsgFulfillTrade(): MsgFulfillTrade {
  return {
    creator: "",
    id: Long.UZERO,
    coinInputsIndex: Long.UZERO,
    items: [],
    paymentInfos: []
  };
}

export const MsgFulfillTrade = {
  encode(message: MsgFulfillTrade, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }

    if (!message.coinInputsIndex.isZero()) {
      writer.uint32(24).uint64(message.coinInputsIndex);
    }

    for (const v of message.items) {
      ItemRef.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.paymentInfos) {
      PaymentInfo.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFulfillTrade {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFulfillTrade();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.id = (reader.uint64() as Long);
          break;

        case 3:
          message.coinInputsIndex = (reader.uint64() as Long);
          break;

        case 4:
          message.items.push(ItemRef.decode(reader, reader.uint32()));
          break;

        case 5:
          message.paymentInfos.push(PaymentInfo.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgFulfillTrade {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
      coinInputsIndex: isSet(object.coinInputsIndex) ? Long.fromString(object.coinInputsIndex) : Long.UZERO,
      items: Array.isArray(object?.items) ? object.items.map((e: any) => ItemRef.fromJSON(e)) : [],
      paymentInfos: Array.isArray(object?.paymentInfos) ? object.paymentInfos.map((e: any) => PaymentInfo.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgFulfillTrade): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.coinInputsIndex !== undefined && (obj.coinInputsIndex = (message.coinInputsIndex || Long.UZERO).toString());

    if (message.items) {
      obj.items = message.items.map(e => e ? ItemRef.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }

    if (message.paymentInfos) {
      obj.paymentInfos = message.paymentInfos.map(e => e ? PaymentInfo.toJSON(e) : undefined);
    } else {
      obj.paymentInfos = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<MsgFulfillTrade>): MsgFulfillTrade {
    const message = createBaseMsgFulfillTrade();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.coinInputsIndex = object.coinInputsIndex !== undefined && object.coinInputsIndex !== null ? Long.fromValue(object.coinInputsIndex) : Long.UZERO;
    message.items = object.items?.map(e => ItemRef.fromPartial(e)) || [];
    message.paymentInfos = object.paymentInfos?.map(e => PaymentInfo.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgFulfillTradeResponse(): MsgFulfillTradeResponse {
  return {};
}

export const MsgFulfillTradeResponse = {
  encode(_: MsgFulfillTradeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFulfillTradeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFulfillTradeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgFulfillTradeResponse {
    return {};
  },

  toJSON(_: MsgFulfillTradeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgFulfillTradeResponse>): MsgFulfillTradeResponse {
    const message = createBaseMsgFulfillTradeResponse();
    return message;
  }

};

function createBaseMsgCreateTrade(): MsgCreateTrade {
  return {
    creator: "",
    coinInputs: [],
    itemInputs: [],
    coinOutputs: [],
    itemOutputs: [],
    extraInfo: ""
  };
}

export const MsgCreateTrade = {
  encode(message: MsgCreateTrade, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    for (const v of message.coinInputs) {
      CoinInput.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.itemInputs) {
      ItemInput.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.coinOutputs) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.itemOutputs) {
      ItemRef.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    if (message.extraInfo !== "") {
      writer.uint32(50).string(message.extraInfo);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateTrade {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateTrade();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.coinInputs.push(CoinInput.decode(reader, reader.uint32()));
          break;

        case 3:
          message.itemInputs.push(ItemInput.decode(reader, reader.uint32()));
          break;

        case 4:
          message.coinOutputs.push(Coin.decode(reader, reader.uint32()));
          break;

        case 5:
          message.itemOutputs.push(ItemRef.decode(reader, reader.uint32()));
          break;

        case 6:
          message.extraInfo = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateTrade {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      coinInputs: Array.isArray(object?.coinInputs) ? object.coinInputs.map((e: any) => CoinInput.fromJSON(e)) : [],
      itemInputs: Array.isArray(object?.itemInputs) ? object.itemInputs.map((e: any) => ItemInput.fromJSON(e)) : [],
      coinOutputs: Array.isArray(object?.coinOutputs) ? object.coinOutputs.map((e: any) => Coin.fromJSON(e)) : [],
      itemOutputs: Array.isArray(object?.itemOutputs) ? object.itemOutputs.map((e: any) => ItemRef.fromJSON(e)) : [],
      extraInfo: isSet(object.extraInfo) ? String(object.extraInfo) : ""
    };
  },

  toJSON(message: MsgCreateTrade): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);

    if (message.coinInputs) {
      obj.coinInputs = message.coinInputs.map(e => e ? CoinInput.toJSON(e) : undefined);
    } else {
      obj.coinInputs = [];
    }

    if (message.itemInputs) {
      obj.itemInputs = message.itemInputs.map(e => e ? ItemInput.toJSON(e) : undefined);
    } else {
      obj.itemInputs = [];
    }

    if (message.coinOutputs) {
      obj.coinOutputs = message.coinOutputs.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coinOutputs = [];
    }

    if (message.itemOutputs) {
      obj.itemOutputs = message.itemOutputs.map(e => e ? ItemRef.toJSON(e) : undefined);
    } else {
      obj.itemOutputs = [];
    }

    message.extraInfo !== undefined && (obj.extraInfo = message.extraInfo);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateTrade>): MsgCreateTrade {
    const message = createBaseMsgCreateTrade();
    message.creator = object.creator ?? "";
    message.coinInputs = object.coinInputs?.map(e => CoinInput.fromPartial(e)) || [];
    message.itemInputs = object.itemInputs?.map(e => ItemInput.fromPartial(e)) || [];
    message.coinOutputs = object.coinOutputs?.map(e => Coin.fromPartial(e)) || [];
    message.itemOutputs = object.itemOutputs?.map(e => ItemRef.fromPartial(e)) || [];
    message.extraInfo = object.extraInfo ?? "";
    return message;
  }

};

function createBaseMsgCreateTradeResponse(): MsgCreateTradeResponse {
  return {
    id: Long.UZERO
  };
}

export const MsgCreateTradeResponse = {
  encode(message: MsgCreateTradeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateTradeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateTradeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateTradeResponse {
    return {
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO
    };
  },

  toJSON(message: MsgCreateTradeResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateTradeResponse>): MsgCreateTradeResponse {
    const message = createBaseMsgCreateTradeResponse();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }

};

function createBaseMsgCancelTrade(): MsgCancelTrade {
  return {
    creator: "",
    id: Long.UZERO
  };
}

export const MsgCancelTrade = {
  encode(message: MsgCancelTrade, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelTrade {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelTrade();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.id = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCancelTrade {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO
    };
  },

  toJSON(message: MsgCancelTrade): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCancelTrade>): MsgCancelTrade {
    const message = createBaseMsgCancelTrade();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }

};

function createBaseMsgCancelTradeResponse(): MsgCancelTradeResponse {
  return {};
}

export const MsgCancelTradeResponse = {
  encode(_: MsgCancelTradeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelTradeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelTradeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgCancelTradeResponse {
    return {};
  },

  toJSON(_: MsgCancelTradeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCancelTradeResponse>): MsgCancelTradeResponse {
    const message = createBaseMsgCancelTradeResponse();
    return message;
  }

};

function createBaseMsgCompleteExecutionEarly(): MsgCompleteExecutionEarly {
  return {
    creator: "",
    id: ""
  };
}

export const MsgCompleteExecutionEarly = {
  encode(message: MsgCompleteExecutionEarly, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCompleteExecutionEarly {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCompleteExecutionEarly();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.id = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCompleteExecutionEarly {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? String(object.id) : ""
    };
  },

  toJSON(message: MsgCompleteExecutionEarly): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCompleteExecutionEarly>): MsgCompleteExecutionEarly {
    const message = createBaseMsgCompleteExecutionEarly();
    message.creator = object.creator ?? "";
    message.id = object.id ?? "";
    return message;
  }

};

function createBaseMsgCompleteExecutionEarlyResponse(): MsgCompleteExecutionEarlyResponse {
  return {
    id: ""
  };
}

export const MsgCompleteExecutionEarlyResponse = {
  encode(message: MsgCompleteExecutionEarlyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCompleteExecutionEarlyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCompleteExecutionEarlyResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCompleteExecutionEarlyResponse {
    return {
      id: isSet(object.id) ? String(object.id) : ""
    };
  },

  toJSON(message: MsgCompleteExecutionEarlyResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCompleteExecutionEarlyResponse>): MsgCompleteExecutionEarlyResponse {
    const message = createBaseMsgCompleteExecutionEarlyResponse();
    message.id = object.id ?? "";
    return message;
  }

};

function createBaseMsgTransferCookbook(): MsgTransferCookbook {
  return {
    creator: "",
    id: "",
    recipient: ""
  };
}

export const MsgTransferCookbook = {
  encode(message: MsgTransferCookbook, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }

    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferCookbook {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferCookbook();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.id = reader.string();
          break;

        case 3:
          message.recipient = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgTransferCookbook {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? String(object.id) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : ""
    };
  },

  toJSON(message: MsgTransferCookbook): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgTransferCookbook>): MsgTransferCookbook {
    const message = createBaseMsgTransferCookbook();
    message.creator = object.creator ?? "";
    message.id = object.id ?? "";
    message.recipient = object.recipient ?? "";
    return message;
  }

};

function createBaseMsgTransferCookbookResponse(): MsgTransferCookbookResponse {
  return {};
}

export const MsgTransferCookbookResponse = {
  encode(_: MsgTransferCookbookResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferCookbookResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferCookbookResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgTransferCookbookResponse {
    return {};
  },

  toJSON(_: MsgTransferCookbookResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgTransferCookbookResponse>): MsgTransferCookbookResponse {
    const message = createBaseMsgTransferCookbookResponse();
    return message;
  }

};

function createBaseMsgGoogleInAppPurchaseGetCoins(): MsgGoogleInAppPurchaseGetCoins {
  return {
    creator: "",
    productId: "",
    purchaseToken: "",
    receiptDataBase64: "",
    signature: ""
  };
}

export const MsgGoogleInAppPurchaseGetCoins = {
  encode(message: MsgGoogleInAppPurchaseGetCoins, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.productId !== "") {
      writer.uint32(18).string(message.productId);
    }

    if (message.purchaseToken !== "") {
      writer.uint32(26).string(message.purchaseToken);
    }

    if (message.receiptDataBase64 !== "") {
      writer.uint32(34).string(message.receiptDataBase64);
    }

    if (message.signature !== "") {
      writer.uint32(42).string(message.signature);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGoogleInAppPurchaseGetCoins {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGoogleInAppPurchaseGetCoins();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.productId = reader.string();
          break;

        case 3:
          message.purchaseToken = reader.string();
          break;

        case 4:
          message.receiptDataBase64 = reader.string();
          break;

        case 5:
          message.signature = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgGoogleInAppPurchaseGetCoins {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      productId: isSet(object.productId) ? String(object.productId) : "",
      purchaseToken: isSet(object.purchaseToken) ? String(object.purchaseToken) : "",
      receiptDataBase64: isSet(object.receiptDataBase64) ? String(object.receiptDataBase64) : "",
      signature: isSet(object.signature) ? String(object.signature) : ""
    };
  },

  toJSON(message: MsgGoogleInAppPurchaseGetCoins): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.productId !== undefined && (obj.productId = message.productId);
    message.purchaseToken !== undefined && (obj.purchaseToken = message.purchaseToken);
    message.receiptDataBase64 !== undefined && (obj.receiptDataBase64 = message.receiptDataBase64);
    message.signature !== undefined && (obj.signature = message.signature);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgGoogleInAppPurchaseGetCoins>): MsgGoogleInAppPurchaseGetCoins {
    const message = createBaseMsgGoogleInAppPurchaseGetCoins();
    message.creator = object.creator ?? "";
    message.productId = object.productId ?? "";
    message.purchaseToken = object.purchaseToken ?? "";
    message.receiptDataBase64 = object.receiptDataBase64 ?? "";
    message.signature = object.signature ?? "";
    return message;
  }

};

function createBaseMsgGoogleInAppPurchaseGetCoinsResponse(): MsgGoogleInAppPurchaseGetCoinsResponse {
  return {};
}

export const MsgGoogleInAppPurchaseGetCoinsResponse = {
  encode(_: MsgGoogleInAppPurchaseGetCoinsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGoogleInAppPurchaseGetCoinsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGoogleInAppPurchaseGetCoinsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgGoogleInAppPurchaseGetCoinsResponse {
    return {};
  },

  toJSON(_: MsgGoogleInAppPurchaseGetCoinsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgGoogleInAppPurchaseGetCoinsResponse>): MsgGoogleInAppPurchaseGetCoinsResponse {
    const message = createBaseMsgGoogleInAppPurchaseGetCoinsResponse();
    return message;
  }

};

function createBaseMsgSendItems(): MsgSendItems {
  return {
    creator: "",
    receiver: "",
    items: []
  };
}

export const MsgSendItems = {
  encode(message: MsgSendItems, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }

    for (const v of message.items) {
      ItemRef.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendItems {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendItems();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.receiver = reader.string();
          break;

        case 3:
          message.items.push(ItemRef.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgSendItems {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      items: Array.isArray(object?.items) ? object.items.map((e: any) => ItemRef.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgSendItems): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.receiver !== undefined && (obj.receiver = message.receiver);

    if (message.items) {
      obj.items = message.items.map(e => e ? ItemRef.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<MsgSendItems>): MsgSendItems {
    const message = createBaseMsgSendItems();
    message.creator = object.creator ?? "";
    message.receiver = object.receiver ?? "";
    message.items = object.items?.map(e => ItemRef.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgSendItemsResponse(): MsgSendItemsResponse {
  return {};
}

export const MsgSendItemsResponse = {
  encode(_: MsgSendItemsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendItemsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendItemsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgSendItemsResponse {
    return {};
  },

  toJSON(_: MsgSendItemsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgSendItemsResponse>): MsgSendItemsResponse {
    const message = createBaseMsgSendItemsResponse();
    return message;
  }

};

function createBaseMsgExecuteRecipe(): MsgExecuteRecipe {
  return {
    creator: "",
    cookbookId: "",
    recipeId: "",
    coinInputsIndex: Long.UZERO,
    itemIds: [],
    paymentInfos: []
  };
}

export const MsgExecuteRecipe = {
  encode(message: MsgExecuteRecipe, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.cookbookId !== "") {
      writer.uint32(18).string(message.cookbookId);
    }

    if (message.recipeId !== "") {
      writer.uint32(26).string(message.recipeId);
    }

    if (!message.coinInputsIndex.isZero()) {
      writer.uint32(32).uint64(message.coinInputsIndex);
    }

    for (const v of message.itemIds) {
      writer.uint32(42).string(v!);
    }

    for (const v of message.paymentInfos) {
      PaymentInfo.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteRecipe {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteRecipe();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.cookbookId = reader.string();
          break;

        case 3:
          message.recipeId = reader.string();
          break;

        case 4:
          message.coinInputsIndex = (reader.uint64() as Long);
          break;

        case 5:
          message.itemIds.push(reader.string());
          break;

        case 6:
          message.paymentInfos.push(PaymentInfo.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgExecuteRecipe {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      cookbookId: isSet(object.cookbookId) ? String(object.cookbookId) : "",
      recipeId: isSet(object.recipeId) ? String(object.recipeId) : "",
      coinInputsIndex: isSet(object.coinInputsIndex) ? Long.fromString(object.coinInputsIndex) : Long.UZERO,
      itemIds: Array.isArray(object?.itemIds) ? object.itemIds.map((e: any) => String(e)) : [],
      paymentInfos: Array.isArray(object?.paymentInfos) ? object.paymentInfos.map((e: any) => PaymentInfo.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgExecuteRecipe): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cookbookId !== undefined && (obj.cookbookId = message.cookbookId);
    message.recipeId !== undefined && (obj.recipeId = message.recipeId);
    message.coinInputsIndex !== undefined && (obj.coinInputsIndex = (message.coinInputsIndex || Long.UZERO).toString());

    if (message.itemIds) {
      obj.itemIds = message.itemIds.map(e => e);
    } else {
      obj.itemIds = [];
    }

    if (message.paymentInfos) {
      obj.paymentInfos = message.paymentInfos.map(e => e ? PaymentInfo.toJSON(e) : undefined);
    } else {
      obj.paymentInfos = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<MsgExecuteRecipe>): MsgExecuteRecipe {
    const message = createBaseMsgExecuteRecipe();
    message.creator = object.creator ?? "";
    message.cookbookId = object.cookbookId ?? "";
    message.recipeId = object.recipeId ?? "";
    message.coinInputsIndex = object.coinInputsIndex !== undefined && object.coinInputsIndex !== null ? Long.fromValue(object.coinInputsIndex) : Long.UZERO;
    message.itemIds = object.itemIds?.map(e => e) || [];
    message.paymentInfos = object.paymentInfos?.map(e => PaymentInfo.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgExecuteRecipeResponse(): MsgExecuteRecipeResponse {
  return {
    id: "",
    txTime: Long.ZERO
  };
}

export const MsgExecuteRecipeResponse = {
  encode(message: MsgExecuteRecipeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (!message.txTime.isZero()) {
      writer.uint32(16).int64(message.txTime);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteRecipeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteRecipeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.txTime = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgExecuteRecipeResponse {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      txTime: isSet(object.txTime) ? Long.fromString(object.txTime) : Long.ZERO
    };
  },

  toJSON(message: MsgExecuteRecipeResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.txTime !== undefined && (obj.txTime = (message.txTime || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgExecuteRecipeResponse>): MsgExecuteRecipeResponse {
    const message = createBaseMsgExecuteRecipeResponse();
    message.id = object.id ?? "";
    message.txTime = object.txTime !== undefined && object.txTime !== null ? Long.fromValue(object.txTime) : Long.ZERO;
    return message;
  }

};

function createBaseMsgSetItemString(): MsgSetItemString {
  return {
    creator: "",
    cookbookId: "",
    id: "",
    field: "",
    value: ""
  };
}

export const MsgSetItemString = {
  encode(message: MsgSetItemString, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.cookbookId !== "") {
      writer.uint32(18).string(message.cookbookId);
    }

    if (message.id !== "") {
      writer.uint32(34).string(message.id);
    }

    if (message.field !== "") {
      writer.uint32(42).string(message.field);
    }

    if (message.value !== "") {
      writer.uint32(50).string(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetItemString {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetItemString();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.cookbookId = reader.string();
          break;

        case 4:
          message.id = reader.string();
          break;

        case 5:
          message.field = reader.string();
          break;

        case 6:
          message.value = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgSetItemString {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      cookbookId: isSet(object.cookbookId) ? String(object.cookbookId) : "",
      id: isSet(object.id) ? String(object.id) : "",
      field: isSet(object.field) ? String(object.field) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },

  toJSON(message: MsgSetItemString): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cookbookId !== undefined && (obj.cookbookId = message.cookbookId);
    message.id !== undefined && (obj.id = message.id);
    message.field !== undefined && (obj.field = message.field);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSetItemString>): MsgSetItemString {
    const message = createBaseMsgSetItemString();
    message.creator = object.creator ?? "";
    message.cookbookId = object.cookbookId ?? "";
    message.id = object.id ?? "";
    message.field = object.field ?? "";
    message.value = object.value ?? "";
    return message;
  }

};

function createBaseMsgSetItemStringResponse(): MsgSetItemStringResponse {
  return {};
}

export const MsgSetItemStringResponse = {
  encode(_: MsgSetItemStringResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetItemStringResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetItemStringResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgSetItemStringResponse {
    return {};
  },

  toJSON(_: MsgSetItemStringResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgSetItemStringResponse>): MsgSetItemStringResponse {
    const message = createBaseMsgSetItemStringResponse();
    return message;
  }

};

function createBaseMsgCreateRecipe(): MsgCreateRecipe {
  return {
    creator: "",
    cookbookId: "",
    id: "",
    name: "",
    description: "",
    version: "",
    coinInputs: [],
    itemInputs: [],
    entries: undefined,
    outputs: [],
    blockInterval: Long.ZERO,
    costPerBlock: undefined,
    enabled: false,
    extraInfo: ""
  };
}

export const MsgCreateRecipe = {
  encode(message: MsgCreateRecipe, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.cookbookId !== "") {
      writer.uint32(18).string(message.cookbookId);
    }

    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }

    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }

    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }

    if (message.version !== "") {
      writer.uint32(50).string(message.version);
    }

    for (const v of message.coinInputs) {
      CoinInput.encode(v!, writer.uint32(58).fork()).ldelim();
    }

    for (const v of message.itemInputs) {
      ItemInput.encode(v!, writer.uint32(66).fork()).ldelim();
    }

    if (message.entries !== undefined) {
      EntriesList.encode(message.entries, writer.uint32(74).fork()).ldelim();
    }

    for (const v of message.outputs) {
      WeightedOutputs.encode(v!, writer.uint32(82).fork()).ldelim();
    }

    if (!message.blockInterval.isZero()) {
      writer.uint32(88).int64(message.blockInterval);
    }

    if (message.costPerBlock !== undefined) {
      Coin.encode(message.costPerBlock, writer.uint32(98).fork()).ldelim();
    }

    if (message.enabled === true) {
      writer.uint32(104).bool(message.enabled);
    }

    if (message.extraInfo !== "") {
      writer.uint32(114).string(message.extraInfo);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateRecipe {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateRecipe();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.cookbookId = reader.string();
          break;

        case 3:
          message.id = reader.string();
          break;

        case 4:
          message.name = reader.string();
          break;

        case 5:
          message.description = reader.string();
          break;

        case 6:
          message.version = reader.string();
          break;

        case 7:
          message.coinInputs.push(CoinInput.decode(reader, reader.uint32()));
          break;

        case 8:
          message.itemInputs.push(ItemInput.decode(reader, reader.uint32()));
          break;

        case 9:
          message.entries = EntriesList.decode(reader, reader.uint32());
          break;

        case 10:
          message.outputs.push(WeightedOutputs.decode(reader, reader.uint32()));
          break;

        case 11:
          message.blockInterval = (reader.int64() as Long);
          break;

        case 12:
          message.costPerBlock = Coin.decode(reader, reader.uint32());
          break;

        case 13:
          message.enabled = reader.bool();
          break;

        case 14:
          message.extraInfo = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateRecipe {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      cookbookId: isSet(object.cookbookId) ? String(object.cookbookId) : "",
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      version: isSet(object.version) ? String(object.version) : "",
      coinInputs: Array.isArray(object?.coinInputs) ? object.coinInputs.map((e: any) => CoinInput.fromJSON(e)) : [],
      itemInputs: Array.isArray(object?.itemInputs) ? object.itemInputs.map((e: any) => ItemInput.fromJSON(e)) : [],
      entries: isSet(object.entries) ? EntriesList.fromJSON(object.entries) : undefined,
      outputs: Array.isArray(object?.outputs) ? object.outputs.map((e: any) => WeightedOutputs.fromJSON(e)) : [],
      blockInterval: isSet(object.blockInterval) ? Long.fromString(object.blockInterval) : Long.ZERO,
      costPerBlock: isSet(object.costPerBlock) ? Coin.fromJSON(object.costPerBlock) : undefined,
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false,
      extraInfo: isSet(object.extraInfo) ? String(object.extraInfo) : ""
    };
  },

  toJSON(message: MsgCreateRecipe): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cookbookId !== undefined && (obj.cookbookId = message.cookbookId);
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.version !== undefined && (obj.version = message.version);

    if (message.coinInputs) {
      obj.coinInputs = message.coinInputs.map(e => e ? CoinInput.toJSON(e) : undefined);
    } else {
      obj.coinInputs = [];
    }

    if (message.itemInputs) {
      obj.itemInputs = message.itemInputs.map(e => e ? ItemInput.toJSON(e) : undefined);
    } else {
      obj.itemInputs = [];
    }

    message.entries !== undefined && (obj.entries = message.entries ? EntriesList.toJSON(message.entries) : undefined);

    if (message.outputs) {
      obj.outputs = message.outputs.map(e => e ? WeightedOutputs.toJSON(e) : undefined);
    } else {
      obj.outputs = [];
    }

    message.blockInterval !== undefined && (obj.blockInterval = (message.blockInterval || Long.ZERO).toString());
    message.costPerBlock !== undefined && (obj.costPerBlock = message.costPerBlock ? Coin.toJSON(message.costPerBlock) : undefined);
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.extraInfo !== undefined && (obj.extraInfo = message.extraInfo);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateRecipe>): MsgCreateRecipe {
    const message = createBaseMsgCreateRecipe();
    message.creator = object.creator ?? "";
    message.cookbookId = object.cookbookId ?? "";
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.version = object.version ?? "";
    message.coinInputs = object.coinInputs?.map(e => CoinInput.fromPartial(e)) || [];
    message.itemInputs = object.itemInputs?.map(e => ItemInput.fromPartial(e)) || [];
    message.entries = object.entries !== undefined && object.entries !== null ? EntriesList.fromPartial(object.entries) : undefined;
    message.outputs = object.outputs?.map(e => WeightedOutputs.fromPartial(e)) || [];
    message.blockInterval = object.blockInterval !== undefined && object.blockInterval !== null ? Long.fromValue(object.blockInterval) : Long.ZERO;
    message.costPerBlock = object.costPerBlock !== undefined && object.costPerBlock !== null ? Coin.fromPartial(object.costPerBlock) : undefined;
    message.enabled = object.enabled ?? false;
    message.extraInfo = object.extraInfo ?? "";
    return message;
  }

};

function createBaseMsgCreateRecipeResponse(): MsgCreateRecipeResponse {
  return {};
}

export const MsgCreateRecipeResponse = {
  encode(_: MsgCreateRecipeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateRecipeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateRecipeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgCreateRecipeResponse {
    return {};
  },

  toJSON(_: MsgCreateRecipeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreateRecipeResponse>): MsgCreateRecipeResponse {
    const message = createBaseMsgCreateRecipeResponse();
    return message;
  }

};

function createBaseMsgUpdateRecipe(): MsgUpdateRecipe {
  return {
    creator: "",
    cookbookId: "",
    id: "",
    name: "",
    description: "",
    version: "",
    coinInputs: [],
    itemInputs: [],
    entries: undefined,
    outputs: [],
    blockInterval: Long.ZERO,
    costPerBlock: undefined,
    enabled: false,
    extraInfo: ""
  };
}

export const MsgUpdateRecipe = {
  encode(message: MsgUpdateRecipe, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.cookbookId !== "") {
      writer.uint32(18).string(message.cookbookId);
    }

    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }

    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }

    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }

    if (message.version !== "") {
      writer.uint32(50).string(message.version);
    }

    for (const v of message.coinInputs) {
      CoinInput.encode(v!, writer.uint32(58).fork()).ldelim();
    }

    for (const v of message.itemInputs) {
      ItemInput.encode(v!, writer.uint32(66).fork()).ldelim();
    }

    if (message.entries !== undefined) {
      EntriesList.encode(message.entries, writer.uint32(74).fork()).ldelim();
    }

    for (const v of message.outputs) {
      WeightedOutputs.encode(v!, writer.uint32(82).fork()).ldelim();
    }

    if (!message.blockInterval.isZero()) {
      writer.uint32(88).int64(message.blockInterval);
    }

    if (message.costPerBlock !== undefined) {
      Coin.encode(message.costPerBlock, writer.uint32(98).fork()).ldelim();
    }

    if (message.enabled === true) {
      writer.uint32(104).bool(message.enabled);
    }

    if (message.extraInfo !== "") {
      writer.uint32(114).string(message.extraInfo);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateRecipe {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateRecipe();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.cookbookId = reader.string();
          break;

        case 3:
          message.id = reader.string();
          break;

        case 4:
          message.name = reader.string();
          break;

        case 5:
          message.description = reader.string();
          break;

        case 6:
          message.version = reader.string();
          break;

        case 7:
          message.coinInputs.push(CoinInput.decode(reader, reader.uint32()));
          break;

        case 8:
          message.itemInputs.push(ItemInput.decode(reader, reader.uint32()));
          break;

        case 9:
          message.entries = EntriesList.decode(reader, reader.uint32());
          break;

        case 10:
          message.outputs.push(WeightedOutputs.decode(reader, reader.uint32()));
          break;

        case 11:
          message.blockInterval = (reader.int64() as Long);
          break;

        case 12:
          message.costPerBlock = Coin.decode(reader, reader.uint32());
          break;

        case 13:
          message.enabled = reader.bool();
          break;

        case 14:
          message.extraInfo = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUpdateRecipe {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      cookbookId: isSet(object.cookbookId) ? String(object.cookbookId) : "",
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      version: isSet(object.version) ? String(object.version) : "",
      coinInputs: Array.isArray(object?.coinInputs) ? object.coinInputs.map((e: any) => CoinInput.fromJSON(e)) : [],
      itemInputs: Array.isArray(object?.itemInputs) ? object.itemInputs.map((e: any) => ItemInput.fromJSON(e)) : [],
      entries: isSet(object.entries) ? EntriesList.fromJSON(object.entries) : undefined,
      outputs: Array.isArray(object?.outputs) ? object.outputs.map((e: any) => WeightedOutputs.fromJSON(e)) : [],
      blockInterval: isSet(object.blockInterval) ? Long.fromString(object.blockInterval) : Long.ZERO,
      costPerBlock: isSet(object.costPerBlock) ? Coin.fromJSON(object.costPerBlock) : undefined,
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false,
      extraInfo: isSet(object.extraInfo) ? String(object.extraInfo) : ""
    };
  },

  toJSON(message: MsgUpdateRecipe): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cookbookId !== undefined && (obj.cookbookId = message.cookbookId);
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.version !== undefined && (obj.version = message.version);

    if (message.coinInputs) {
      obj.coinInputs = message.coinInputs.map(e => e ? CoinInput.toJSON(e) : undefined);
    } else {
      obj.coinInputs = [];
    }

    if (message.itemInputs) {
      obj.itemInputs = message.itemInputs.map(e => e ? ItemInput.toJSON(e) : undefined);
    } else {
      obj.itemInputs = [];
    }

    message.entries !== undefined && (obj.entries = message.entries ? EntriesList.toJSON(message.entries) : undefined);

    if (message.outputs) {
      obj.outputs = message.outputs.map(e => e ? WeightedOutputs.toJSON(e) : undefined);
    } else {
      obj.outputs = [];
    }

    message.blockInterval !== undefined && (obj.blockInterval = (message.blockInterval || Long.ZERO).toString());
    message.costPerBlock !== undefined && (obj.costPerBlock = message.costPerBlock ? Coin.toJSON(message.costPerBlock) : undefined);
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.extraInfo !== undefined && (obj.extraInfo = message.extraInfo);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateRecipe>): MsgUpdateRecipe {
    const message = createBaseMsgUpdateRecipe();
    message.creator = object.creator ?? "";
    message.cookbookId = object.cookbookId ?? "";
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.version = object.version ?? "";
    message.coinInputs = object.coinInputs?.map(e => CoinInput.fromPartial(e)) || [];
    message.itemInputs = object.itemInputs?.map(e => ItemInput.fromPartial(e)) || [];
    message.entries = object.entries !== undefined && object.entries !== null ? EntriesList.fromPartial(object.entries) : undefined;
    message.outputs = object.outputs?.map(e => WeightedOutputs.fromPartial(e)) || [];
    message.blockInterval = object.blockInterval !== undefined && object.blockInterval !== null ? Long.fromValue(object.blockInterval) : Long.ZERO;
    message.costPerBlock = object.costPerBlock !== undefined && object.costPerBlock !== null ? Coin.fromPartial(object.costPerBlock) : undefined;
    message.enabled = object.enabled ?? false;
    message.extraInfo = object.extraInfo ?? "";
    return message;
  }

};

function createBaseMsgUpdateRecipeResponse(): MsgUpdateRecipeResponse {
  return {};
}

export const MsgUpdateRecipeResponse = {
  encode(_: MsgUpdateRecipeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateRecipeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateRecipeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgUpdateRecipeResponse {
    return {};
  },

  toJSON(_: MsgUpdateRecipeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateRecipeResponse>): MsgUpdateRecipeResponse {
    const message = createBaseMsgUpdateRecipeResponse();
    return message;
  }

};

function createBaseMsgCreateCookbook(): MsgCreateCookbook {
  return {
    creator: "",
    id: "",
    name: "",
    description: "",
    developer: "",
    version: "",
    supportEmail: "",
    enabled: false
  };
}

export const MsgCreateCookbook = {
  encode(message: MsgCreateCookbook, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }

    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }

    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }

    if (message.developer !== "") {
      writer.uint32(42).string(message.developer);
    }

    if (message.version !== "") {
      writer.uint32(50).string(message.version);
    }

    if (message.supportEmail !== "") {
      writer.uint32(58).string(message.supportEmail);
    }

    if (message.enabled === true) {
      writer.uint32(64).bool(message.enabled);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateCookbook {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateCookbook();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.id = reader.string();
          break;

        case 3:
          message.name = reader.string();
          break;

        case 4:
          message.description = reader.string();
          break;

        case 5:
          message.developer = reader.string();
          break;

        case 6:
          message.version = reader.string();
          break;

        case 7:
          message.supportEmail = reader.string();
          break;

        case 8:
          message.enabled = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateCookbook {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      developer: isSet(object.developer) ? String(object.developer) : "",
      version: isSet(object.version) ? String(object.version) : "",
      supportEmail: isSet(object.supportEmail) ? String(object.supportEmail) : "",
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false
    };
  },

  toJSON(message: MsgCreateCookbook): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.developer !== undefined && (obj.developer = message.developer);
    message.version !== undefined && (obj.version = message.version);
    message.supportEmail !== undefined && (obj.supportEmail = message.supportEmail);
    message.enabled !== undefined && (obj.enabled = message.enabled);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateCookbook>): MsgCreateCookbook {
    const message = createBaseMsgCreateCookbook();
    message.creator = object.creator ?? "";
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.developer = object.developer ?? "";
    message.version = object.version ?? "";
    message.supportEmail = object.supportEmail ?? "";
    message.enabled = object.enabled ?? false;
    return message;
  }

};

function createBaseMsgCreateCookbookResponse(): MsgCreateCookbookResponse {
  return {};
}

export const MsgCreateCookbookResponse = {
  encode(_: MsgCreateCookbookResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateCookbookResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateCookbookResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgCreateCookbookResponse {
    return {};
  },

  toJSON(_: MsgCreateCookbookResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreateCookbookResponse>): MsgCreateCookbookResponse {
    const message = createBaseMsgCreateCookbookResponse();
    return message;
  }

};

function createBaseMsgUpdateCookbook(): MsgUpdateCookbook {
  return {
    creator: "",
    id: "",
    name: "",
    description: "",
    developer: "",
    version: "",
    supportEmail: "",
    enabled: false
  };
}

export const MsgUpdateCookbook = {
  encode(message: MsgUpdateCookbook, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }

    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }

    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }

    if (message.developer !== "") {
      writer.uint32(42).string(message.developer);
    }

    if (message.version !== "") {
      writer.uint32(50).string(message.version);
    }

    if (message.supportEmail !== "") {
      writer.uint32(58).string(message.supportEmail);
    }

    if (message.enabled === true) {
      writer.uint32(64).bool(message.enabled);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateCookbook {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateCookbook();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.id = reader.string();
          break;

        case 3:
          message.name = reader.string();
          break;

        case 4:
          message.description = reader.string();
          break;

        case 5:
          message.developer = reader.string();
          break;

        case 6:
          message.version = reader.string();
          break;

        case 7:
          message.supportEmail = reader.string();
          break;

        case 8:
          message.enabled = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUpdateCookbook {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      developer: isSet(object.developer) ? String(object.developer) : "",
      version: isSet(object.version) ? String(object.version) : "",
      supportEmail: isSet(object.supportEmail) ? String(object.supportEmail) : "",
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false
    };
  },

  toJSON(message: MsgUpdateCookbook): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.developer !== undefined && (obj.developer = message.developer);
    message.version !== undefined && (obj.version = message.version);
    message.supportEmail !== undefined && (obj.supportEmail = message.supportEmail);
    message.enabled !== undefined && (obj.enabled = message.enabled);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateCookbook>): MsgUpdateCookbook {
    const message = createBaseMsgUpdateCookbook();
    message.creator = object.creator ?? "";
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.developer = object.developer ?? "";
    message.version = object.version ?? "";
    message.supportEmail = object.supportEmail ?? "";
    message.enabled = object.enabled ?? false;
    return message;
  }

};

function createBaseMsgUpdateCookbookResponse(): MsgUpdateCookbookResponse {
  return {};
}

export const MsgUpdateCookbookResponse = {
  encode(_: MsgUpdateCookbookResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateCookbookResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateCookbookResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgUpdateCookbookResponse {
    return {};
  },

  toJSON(_: MsgUpdateCookbookResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateCookbookResponse>): MsgUpdateCookbookResponse {
    const message = createBaseMsgUpdateCookbookResponse();
    return message;
  }

};