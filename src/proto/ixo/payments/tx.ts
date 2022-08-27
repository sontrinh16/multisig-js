import { PaymentTemplate, DistributionShare } from "./payments";
import { Any } from "../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";

/** MsgSetPaymentContractAuthorisation defines a message for authorising or deauthorising a payment contract. */
export interface MsgSetPaymentContractAuthorisation {
  paymentContractId: string;
  payerDid: string;
  authorised: boolean;
}

/** MsgSetPaymentContractAuthorisationResponse defines the Msg/SetPaymentContractAuthorisation response type. */
export interface MsgSetPaymentContractAuthorisationResponse {}

/** MsgCreatePaymentTemplate defines a message for creating a payment template. */
export interface MsgCreatePaymentTemplate {
  creatorDid: string;
  paymentTemplate: PaymentTemplate;
}

/** MsgCreatePaymentTemplateResponse defines the Msg/CreatePaymentTemplate response type. */
export interface MsgCreatePaymentTemplateResponse {}

/** MsgCreatePaymentContract defines a message for creating a payment contract. */
export interface MsgCreatePaymentContract {
  creatorDid: string;
  paymentTemplateId: string;
  paymentContractId: string;
  payer: string;
  recipients: DistributionShare[];
  canDeauthorise: boolean;
  discountId: string;
}

/** MsgCreatePaymentContractResponse defines the Msg/CreatePaymentContract response type. */
export interface MsgCreatePaymentContractResponse {}

/** MsgCreateSubscription defines a message for creating a subscription. */
export interface MsgCreateSubscription {
  creatorDid: string;
  subscriptionId: string;
  paymentContractId: string;
  maxPeriods: string;
  period: Any;
}

/** MsgCreateSubscriptionResponse defines the Msg/CreateSubscription response type. */
export interface MsgCreateSubscriptionResponse {}

/** MsgGrantDiscount defines a message for granting a discount to a payer on a specific payment contract. */
export interface MsgGrantDiscount {
  senderDid: string;
  paymentContractId: string;
  discountId: string;
  recipient: string;
}

/** MsgGrantDiscountResponse defines the Msg/GrantDiscount response type. */
export interface MsgGrantDiscountResponse {}

/** MsgRevokeDiscount defines a message for revoking a discount previously granted to a payer. */
export interface MsgRevokeDiscount {
  senderDid: string;
  paymentContractId: string;
  holder: string;
}

/** MsgRevokeDiscountResponse defines the Msg/RevokeDiscount response type. */
export interface MsgRevokeDiscountResponse {}

/** MsgEffectPayment defines a message for putting a specific payment contract into effect. */
export interface MsgEffectPayment {
  senderDid: string;
  paymentContractId: string;
}

/** MsgEffectPaymentResponse defines the Msg/EffectPayment response type. */
export interface MsgEffectPaymentResponse {}

function createBaseMsgSetPaymentContractAuthorisation(): MsgSetPaymentContractAuthorisation {
  return {
    paymentContractId: "",
    payerDid: "",
    authorised: false
  };
}

export const MsgSetPaymentContractAuthorisation = {
  encode(message: MsgSetPaymentContractAuthorisation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.paymentContractId !== "") {
      writer.uint32(10).string(message.paymentContractId);
    }

    if (message.payerDid !== "") {
      writer.uint32(18).string(message.payerDid);
    }

    if (message.authorised === true) {
      writer.uint32(24).bool(message.authorised);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetPaymentContractAuthorisation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetPaymentContractAuthorisation();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.paymentContractId = reader.string();
          break;

        case 2:
          message.payerDid = reader.string();
          break;

        case 3:
          message.authorised = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgSetPaymentContractAuthorisation {
    return {
      paymentContractId: isSet(object.paymentContractId) ? String(object.paymentContractId) : "",
      payerDid: isSet(object.payerDid) ? String(object.payerDid) : "",
      authorised: isSet(object.authorised) ? Boolean(object.authorised) : false
    };
  },

  toJSON(message: MsgSetPaymentContractAuthorisation): unknown {
    const obj: any = {};
    message.paymentContractId !== undefined && (obj.paymentContractId = message.paymentContractId);
    message.payerDid !== undefined && (obj.payerDid = message.payerDid);
    message.authorised !== undefined && (obj.authorised = message.authorised);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSetPaymentContractAuthorisation>): MsgSetPaymentContractAuthorisation {
    const message = createBaseMsgSetPaymentContractAuthorisation();
    message.paymentContractId = object.paymentContractId ?? "";
    message.payerDid = object.payerDid ?? "";
    message.authorised = object.authorised ?? false;
    return message;
  }

};

function createBaseMsgSetPaymentContractAuthorisationResponse(): MsgSetPaymentContractAuthorisationResponse {
  return {};
}

export const MsgSetPaymentContractAuthorisationResponse = {
  encode(_: MsgSetPaymentContractAuthorisationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetPaymentContractAuthorisationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetPaymentContractAuthorisationResponse();

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

  fromJSON(_: any): MsgSetPaymentContractAuthorisationResponse {
    return {};
  },

  toJSON(_: MsgSetPaymentContractAuthorisationResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgSetPaymentContractAuthorisationResponse>): MsgSetPaymentContractAuthorisationResponse {
    const message = createBaseMsgSetPaymentContractAuthorisationResponse();
    return message;
  }

};

function createBaseMsgCreatePaymentTemplate(): MsgCreatePaymentTemplate {
  return {
    creatorDid: "",
    paymentTemplate: undefined
  };
}

export const MsgCreatePaymentTemplate = {
  encode(message: MsgCreatePaymentTemplate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creatorDid !== "") {
      writer.uint32(10).string(message.creatorDid);
    }

    if (message.paymentTemplate !== undefined) {
      PaymentTemplate.encode(message.paymentTemplate, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePaymentTemplate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePaymentTemplate();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creatorDid = reader.string();
          break;

        case 2:
          message.paymentTemplate = PaymentTemplate.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreatePaymentTemplate {
    return {
      creatorDid: isSet(object.creatorDid) ? String(object.creatorDid) : "",
      paymentTemplate: isSet(object.paymentTemplate) ? PaymentTemplate.fromJSON(object.paymentTemplate) : undefined
    };
  },

  toJSON(message: MsgCreatePaymentTemplate): unknown {
    const obj: any = {};
    message.creatorDid !== undefined && (obj.creatorDid = message.creatorDid);
    message.paymentTemplate !== undefined && (obj.paymentTemplate = message.paymentTemplate ? PaymentTemplate.toJSON(message.paymentTemplate) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreatePaymentTemplate>): MsgCreatePaymentTemplate {
    const message = createBaseMsgCreatePaymentTemplate();
    message.creatorDid = object.creatorDid ?? "";
    message.paymentTemplate = object.paymentTemplate !== undefined && object.paymentTemplate !== null ? PaymentTemplate.fromPartial(object.paymentTemplate) : undefined;
    return message;
  }

};

function createBaseMsgCreatePaymentTemplateResponse(): MsgCreatePaymentTemplateResponse {
  return {};
}

export const MsgCreatePaymentTemplateResponse = {
  encode(_: MsgCreatePaymentTemplateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePaymentTemplateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePaymentTemplateResponse();

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

  fromJSON(_: any): MsgCreatePaymentTemplateResponse {
    return {};
  },

  toJSON(_: MsgCreatePaymentTemplateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreatePaymentTemplateResponse>): MsgCreatePaymentTemplateResponse {
    const message = createBaseMsgCreatePaymentTemplateResponse();
    return message;
  }

};

function createBaseMsgCreatePaymentContract(): MsgCreatePaymentContract {
  return {
    creatorDid: "",
    paymentTemplateId: "",
    paymentContractId: "",
    payer: "",
    recipients: [],
    canDeauthorise: false,
    discountId: ""
  };
}

export const MsgCreatePaymentContract = {
  encode(message: MsgCreatePaymentContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creatorDid !== "") {
      writer.uint32(10).string(message.creatorDid);
    }

    if (message.paymentTemplateId !== "") {
      writer.uint32(18).string(message.paymentTemplateId);
    }

    if (message.paymentContractId !== "") {
      writer.uint32(26).string(message.paymentContractId);
    }

    if (message.payer !== "") {
      writer.uint32(34).string(message.payer);
    }

    for (const v of message.recipients) {
      DistributionShare.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    if (message.canDeauthorise === true) {
      writer.uint32(48).bool(message.canDeauthorise);
    }

    if (message.discountId !== "") {
      writer.uint32(58).string(message.discountId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePaymentContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePaymentContract();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creatorDid = reader.string();
          break;

        case 2:
          message.paymentTemplateId = reader.string();
          break;

        case 3:
          message.paymentContractId = reader.string();
          break;

        case 4:
          message.payer = reader.string();
          break;

        case 5:
          message.recipients.push(DistributionShare.decode(reader, reader.uint32()));
          break;

        case 6:
          message.canDeauthorise = reader.bool();
          break;

        case 7:
          message.discountId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreatePaymentContract {
    return {
      creatorDid: isSet(object.creatorDid) ? String(object.creatorDid) : "",
      paymentTemplateId: isSet(object.paymentTemplateId) ? String(object.paymentTemplateId) : "",
      paymentContractId: isSet(object.paymentContractId) ? String(object.paymentContractId) : "",
      payer: isSet(object.payer) ? String(object.payer) : "",
      recipients: Array.isArray(object?.recipients) ? object.recipients.map((e: any) => DistributionShare.fromJSON(e)) : [],
      canDeauthorise: isSet(object.canDeauthorise) ? Boolean(object.canDeauthorise) : false,
      discountId: isSet(object.discountId) ? String(object.discountId) : ""
    };
  },

  toJSON(message: MsgCreatePaymentContract): unknown {
    const obj: any = {};
    message.creatorDid !== undefined && (obj.creatorDid = message.creatorDid);
    message.paymentTemplateId !== undefined && (obj.paymentTemplateId = message.paymentTemplateId);
    message.paymentContractId !== undefined && (obj.paymentContractId = message.paymentContractId);
    message.payer !== undefined && (obj.payer = message.payer);

    if (message.recipients) {
      obj.recipients = message.recipients.map(e => e ? DistributionShare.toJSON(e) : undefined);
    } else {
      obj.recipients = [];
    }

    message.canDeauthorise !== undefined && (obj.canDeauthorise = message.canDeauthorise);
    message.discountId !== undefined && (obj.discountId = message.discountId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreatePaymentContract>): MsgCreatePaymentContract {
    const message = createBaseMsgCreatePaymentContract();
    message.creatorDid = object.creatorDid ?? "";
    message.paymentTemplateId = object.paymentTemplateId ?? "";
    message.paymentContractId = object.paymentContractId ?? "";
    message.payer = object.payer ?? "";
    message.recipients = object.recipients?.map(e => DistributionShare.fromPartial(e)) || [];
    message.canDeauthorise = object.canDeauthorise ?? false;
    message.discountId = object.discountId ?? "";
    return message;
  }

};

function createBaseMsgCreatePaymentContractResponse(): MsgCreatePaymentContractResponse {
  return {};
}

export const MsgCreatePaymentContractResponse = {
  encode(_: MsgCreatePaymentContractResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePaymentContractResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePaymentContractResponse();

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

  fromJSON(_: any): MsgCreatePaymentContractResponse {
    return {};
  },

  toJSON(_: MsgCreatePaymentContractResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreatePaymentContractResponse>): MsgCreatePaymentContractResponse {
    const message = createBaseMsgCreatePaymentContractResponse();
    return message;
  }

};

function createBaseMsgCreateSubscription(): MsgCreateSubscription {
  return {
    creatorDid: "",
    subscriptionId: "",
    paymentContractId: "",
    maxPeriods: "",
    period: undefined
  };
}

export const MsgCreateSubscription = {
  encode(message: MsgCreateSubscription, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creatorDid !== "") {
      writer.uint32(10).string(message.creatorDid);
    }

    if (message.subscriptionId !== "") {
      writer.uint32(18).string(message.subscriptionId);
    }

    if (message.paymentContractId !== "") {
      writer.uint32(26).string(message.paymentContractId);
    }

    if (message.maxPeriods !== "") {
      writer.uint32(34).string(message.maxPeriods);
    }

    if (message.period !== undefined) {
      Any.encode(message.period, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateSubscription {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateSubscription();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creatorDid = reader.string();
          break;

        case 2:
          message.subscriptionId = reader.string();
          break;

        case 3:
          message.paymentContractId = reader.string();
          break;

        case 4:
          message.maxPeriods = reader.string();
          break;

        case 5:
          message.period = Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateSubscription {
    return {
      creatorDid: isSet(object.creatorDid) ? String(object.creatorDid) : "",
      subscriptionId: isSet(object.subscriptionId) ? String(object.subscriptionId) : "",
      paymentContractId: isSet(object.paymentContractId) ? String(object.paymentContractId) : "",
      maxPeriods: isSet(object.maxPeriods) ? String(object.maxPeriods) : "",
      period: isSet(object.period) ? Any.fromJSON(object.period) : undefined
    };
  },

  toJSON(message: MsgCreateSubscription): unknown {
    const obj: any = {};
    message.creatorDid !== undefined && (obj.creatorDid = message.creatorDid);
    message.subscriptionId !== undefined && (obj.subscriptionId = message.subscriptionId);
    message.paymentContractId !== undefined && (obj.paymentContractId = message.paymentContractId);
    message.maxPeriods !== undefined && (obj.maxPeriods = message.maxPeriods);
    message.period !== undefined && (obj.period = message.period ? Any.toJSON(message.period) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateSubscription>): MsgCreateSubscription {
    const message = createBaseMsgCreateSubscription();
    message.creatorDid = object.creatorDid ?? "";
    message.subscriptionId = object.subscriptionId ?? "";
    message.paymentContractId = object.paymentContractId ?? "";
    message.maxPeriods = object.maxPeriods ?? "";
    message.period = object.period !== undefined && object.period !== null ? Any.fromPartial(object.period) : undefined;
    return message;
  }

};

function createBaseMsgCreateSubscriptionResponse(): MsgCreateSubscriptionResponse {
  return {};
}

export const MsgCreateSubscriptionResponse = {
  encode(_: MsgCreateSubscriptionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateSubscriptionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateSubscriptionResponse();

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

  fromJSON(_: any): MsgCreateSubscriptionResponse {
    return {};
  },

  toJSON(_: MsgCreateSubscriptionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreateSubscriptionResponse>): MsgCreateSubscriptionResponse {
    const message = createBaseMsgCreateSubscriptionResponse();
    return message;
  }

};

function createBaseMsgGrantDiscount(): MsgGrantDiscount {
  return {
    senderDid: "",
    paymentContractId: "",
    discountId: "",
    recipient: ""
  };
}

export const MsgGrantDiscount = {
  encode(message: MsgGrantDiscount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.senderDid !== "") {
      writer.uint32(10).string(message.senderDid);
    }

    if (message.paymentContractId !== "") {
      writer.uint32(18).string(message.paymentContractId);
    }

    if (message.discountId !== "") {
      writer.uint32(26).string(message.discountId);
    }

    if (message.recipient !== "") {
      writer.uint32(34).string(message.recipient);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGrantDiscount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrantDiscount();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.senderDid = reader.string();
          break;

        case 2:
          message.paymentContractId = reader.string();
          break;

        case 3:
          message.discountId = reader.string();
          break;

        case 4:
          message.recipient = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgGrantDiscount {
    return {
      senderDid: isSet(object.senderDid) ? String(object.senderDid) : "",
      paymentContractId: isSet(object.paymentContractId) ? String(object.paymentContractId) : "",
      discountId: isSet(object.discountId) ? String(object.discountId) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : ""
    };
  },

  toJSON(message: MsgGrantDiscount): unknown {
    const obj: any = {};
    message.senderDid !== undefined && (obj.senderDid = message.senderDid);
    message.paymentContractId !== undefined && (obj.paymentContractId = message.paymentContractId);
    message.discountId !== undefined && (obj.discountId = message.discountId);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgGrantDiscount>): MsgGrantDiscount {
    const message = createBaseMsgGrantDiscount();
    message.senderDid = object.senderDid ?? "";
    message.paymentContractId = object.paymentContractId ?? "";
    message.discountId = object.discountId ?? "";
    message.recipient = object.recipient ?? "";
    return message;
  }

};

function createBaseMsgGrantDiscountResponse(): MsgGrantDiscountResponse {
  return {};
}

export const MsgGrantDiscountResponse = {
  encode(_: MsgGrantDiscountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGrantDiscountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrantDiscountResponse();

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

  fromJSON(_: any): MsgGrantDiscountResponse {
    return {};
  },

  toJSON(_: MsgGrantDiscountResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgGrantDiscountResponse>): MsgGrantDiscountResponse {
    const message = createBaseMsgGrantDiscountResponse();
    return message;
  }

};

function createBaseMsgRevokeDiscount(): MsgRevokeDiscount {
  return {
    senderDid: "",
    paymentContractId: "",
    holder: ""
  };
}

export const MsgRevokeDiscount = {
  encode(message: MsgRevokeDiscount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.senderDid !== "") {
      writer.uint32(10).string(message.senderDid);
    }

    if (message.paymentContractId !== "") {
      writer.uint32(18).string(message.paymentContractId);
    }

    if (message.holder !== "") {
      writer.uint32(26).string(message.holder);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeDiscount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeDiscount();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.senderDid = reader.string();
          break;

        case 2:
          message.paymentContractId = reader.string();
          break;

        case 3:
          message.holder = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgRevokeDiscount {
    return {
      senderDid: isSet(object.senderDid) ? String(object.senderDid) : "",
      paymentContractId: isSet(object.paymentContractId) ? String(object.paymentContractId) : "",
      holder: isSet(object.holder) ? String(object.holder) : ""
    };
  },

  toJSON(message: MsgRevokeDiscount): unknown {
    const obj: any = {};
    message.senderDid !== undefined && (obj.senderDid = message.senderDid);
    message.paymentContractId !== undefined && (obj.paymentContractId = message.paymentContractId);
    message.holder !== undefined && (obj.holder = message.holder);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRevokeDiscount>): MsgRevokeDiscount {
    const message = createBaseMsgRevokeDiscount();
    message.senderDid = object.senderDid ?? "";
    message.paymentContractId = object.paymentContractId ?? "";
    message.holder = object.holder ?? "";
    return message;
  }

};

function createBaseMsgRevokeDiscountResponse(): MsgRevokeDiscountResponse {
  return {};
}

export const MsgRevokeDiscountResponse = {
  encode(_: MsgRevokeDiscountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeDiscountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeDiscountResponse();

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

  fromJSON(_: any): MsgRevokeDiscountResponse {
    return {};
  },

  toJSON(_: MsgRevokeDiscountResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgRevokeDiscountResponse>): MsgRevokeDiscountResponse {
    const message = createBaseMsgRevokeDiscountResponse();
    return message;
  }

};

function createBaseMsgEffectPayment(): MsgEffectPayment {
  return {
    senderDid: "",
    paymentContractId: ""
  };
}

export const MsgEffectPayment = {
  encode(message: MsgEffectPayment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.senderDid !== "") {
      writer.uint32(10).string(message.senderDid);
    }

    if (message.paymentContractId !== "") {
      writer.uint32(18).string(message.paymentContractId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEffectPayment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEffectPayment();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.senderDid = reader.string();
          break;

        case 2:
          message.paymentContractId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgEffectPayment {
    return {
      senderDid: isSet(object.senderDid) ? String(object.senderDid) : "",
      paymentContractId: isSet(object.paymentContractId) ? String(object.paymentContractId) : ""
    };
  },

  toJSON(message: MsgEffectPayment): unknown {
    const obj: any = {};
    message.senderDid !== undefined && (obj.senderDid = message.senderDid);
    message.paymentContractId !== undefined && (obj.paymentContractId = message.paymentContractId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgEffectPayment>): MsgEffectPayment {
    const message = createBaseMsgEffectPayment();
    message.senderDid = object.senderDid ?? "";
    message.paymentContractId = object.paymentContractId ?? "";
    return message;
  }

};

function createBaseMsgEffectPaymentResponse(): MsgEffectPaymentResponse {
  return {};
}

export const MsgEffectPaymentResponse = {
  encode(_: MsgEffectPaymentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEffectPaymentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEffectPaymentResponse();

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

  fromJSON(_: any): MsgEffectPaymentResponse {
    return {};
  },

  toJSON(_: MsgEffectPaymentResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgEffectPaymentResponse>): MsgEffectPaymentResponse {
    const message = createBaseMsgEffectPaymentResponse();
    return message;
  }

};