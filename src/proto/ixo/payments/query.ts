import { PaymentTemplate, PaymentContract, Subscription } from "./payments";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";

/** QueryPaymentTemplateRequest is the request type for the Query/PaymentTemplate RPC method. */
export interface QueryPaymentTemplateRequest {
  paymentTemplateId: string;
}

/** QueryPaymentTemplateResponse is the response type for the Query/PaymentTemplate RPC method. */
export interface QueryPaymentTemplateResponse {
  paymentTemplate: PaymentTemplate;
}

/** QueryPaymentContractRequest is the request type for the Query/PaymentContract RPC method. */
export interface QueryPaymentContractRequest {
  paymentContractId: string;
}

/** QueryPaymentContractResponse is the response type for the Query/PaymentContract RPC method. */
export interface QueryPaymentContractResponse {
  paymentContract: PaymentContract;
}

/** QueryPaymentContractsByIdPrefixRequest is the request type for the Query/PaymentContractsByIdPrefix RPC method. */
export interface QueryPaymentContractsByIdPrefixRequest {
  paymentContractsIdPrefix: string;
}

/** QueryPaymentContractsByIdPrefixResponse is the response type for the Query/PaymentContractsByIdPrefix RPC method. */
export interface QueryPaymentContractsByIdPrefixResponse {
  paymentContracts: PaymentContract[];
}

/** QuerySubscriptionRequest is the request type for the Query/Subscription RPC method. */
export interface QuerySubscriptionRequest {
  subscriptionId: string;
}

/** QuerySubscriptionResponse is the response type for the Query/Subscription RPC method. */
export interface QuerySubscriptionResponse {
  subscription: Subscription;
}

function createBaseQueryPaymentTemplateRequest(): QueryPaymentTemplateRequest {
  return {
    paymentTemplateId: ""
  };
}

export const QueryPaymentTemplateRequest = {
  encode(message: QueryPaymentTemplateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.paymentTemplateId !== "") {
      writer.uint32(10).string(message.paymentTemplateId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPaymentTemplateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPaymentTemplateRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.paymentTemplateId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryPaymentTemplateRequest {
    return {
      paymentTemplateId: isSet(object.paymentTemplateId) ? String(object.paymentTemplateId) : ""
    };
  },

  toJSON(message: QueryPaymentTemplateRequest): unknown {
    const obj: any = {};
    message.paymentTemplateId !== undefined && (obj.paymentTemplateId = message.paymentTemplateId);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryPaymentTemplateRequest>): QueryPaymentTemplateRequest {
    const message = createBaseQueryPaymentTemplateRequest();
    message.paymentTemplateId = object.paymentTemplateId ?? "";
    return message;
  }

};

function createBaseQueryPaymentTemplateResponse(): QueryPaymentTemplateResponse {
  return {
    paymentTemplate: undefined
  };
}

export const QueryPaymentTemplateResponse = {
  encode(message: QueryPaymentTemplateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.paymentTemplate !== undefined) {
      PaymentTemplate.encode(message.paymentTemplate, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPaymentTemplateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPaymentTemplateResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.paymentTemplate = PaymentTemplate.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryPaymentTemplateResponse {
    return {
      paymentTemplate: isSet(object.paymentTemplate) ? PaymentTemplate.fromJSON(object.paymentTemplate) : undefined
    };
  },

  toJSON(message: QueryPaymentTemplateResponse): unknown {
    const obj: any = {};
    message.paymentTemplate !== undefined && (obj.paymentTemplate = message.paymentTemplate ? PaymentTemplate.toJSON(message.paymentTemplate) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryPaymentTemplateResponse>): QueryPaymentTemplateResponse {
    const message = createBaseQueryPaymentTemplateResponse();
    message.paymentTemplate = object.paymentTemplate !== undefined && object.paymentTemplate !== null ? PaymentTemplate.fromPartial(object.paymentTemplate) : undefined;
    return message;
  }

};

function createBaseQueryPaymentContractRequest(): QueryPaymentContractRequest {
  return {
    paymentContractId: ""
  };
}

export const QueryPaymentContractRequest = {
  encode(message: QueryPaymentContractRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.paymentContractId !== "") {
      writer.uint32(10).string(message.paymentContractId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPaymentContractRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPaymentContractRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.paymentContractId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryPaymentContractRequest {
    return {
      paymentContractId: isSet(object.paymentContractId) ? String(object.paymentContractId) : ""
    };
  },

  toJSON(message: QueryPaymentContractRequest): unknown {
    const obj: any = {};
    message.paymentContractId !== undefined && (obj.paymentContractId = message.paymentContractId);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryPaymentContractRequest>): QueryPaymentContractRequest {
    const message = createBaseQueryPaymentContractRequest();
    message.paymentContractId = object.paymentContractId ?? "";
    return message;
  }

};

function createBaseQueryPaymentContractResponse(): QueryPaymentContractResponse {
  return {
    paymentContract: undefined
  };
}

export const QueryPaymentContractResponse = {
  encode(message: QueryPaymentContractResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.paymentContract !== undefined) {
      PaymentContract.encode(message.paymentContract, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPaymentContractResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPaymentContractResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.paymentContract = PaymentContract.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryPaymentContractResponse {
    return {
      paymentContract: isSet(object.paymentContract) ? PaymentContract.fromJSON(object.paymentContract) : undefined
    };
  },

  toJSON(message: QueryPaymentContractResponse): unknown {
    const obj: any = {};
    message.paymentContract !== undefined && (obj.paymentContract = message.paymentContract ? PaymentContract.toJSON(message.paymentContract) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryPaymentContractResponse>): QueryPaymentContractResponse {
    const message = createBaseQueryPaymentContractResponse();
    message.paymentContract = object.paymentContract !== undefined && object.paymentContract !== null ? PaymentContract.fromPartial(object.paymentContract) : undefined;
    return message;
  }

};

function createBaseQueryPaymentContractsByIdPrefixRequest(): QueryPaymentContractsByIdPrefixRequest {
  return {
    paymentContractsIdPrefix: ""
  };
}

export const QueryPaymentContractsByIdPrefixRequest = {
  encode(message: QueryPaymentContractsByIdPrefixRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.paymentContractsIdPrefix !== "") {
      writer.uint32(10).string(message.paymentContractsIdPrefix);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPaymentContractsByIdPrefixRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPaymentContractsByIdPrefixRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.paymentContractsIdPrefix = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryPaymentContractsByIdPrefixRequest {
    return {
      paymentContractsIdPrefix: isSet(object.paymentContractsIdPrefix) ? String(object.paymentContractsIdPrefix) : ""
    };
  },

  toJSON(message: QueryPaymentContractsByIdPrefixRequest): unknown {
    const obj: any = {};
    message.paymentContractsIdPrefix !== undefined && (obj.paymentContractsIdPrefix = message.paymentContractsIdPrefix);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryPaymentContractsByIdPrefixRequest>): QueryPaymentContractsByIdPrefixRequest {
    const message = createBaseQueryPaymentContractsByIdPrefixRequest();
    message.paymentContractsIdPrefix = object.paymentContractsIdPrefix ?? "";
    return message;
  }

};

function createBaseQueryPaymentContractsByIdPrefixResponse(): QueryPaymentContractsByIdPrefixResponse {
  return {
    paymentContracts: []
  };
}

export const QueryPaymentContractsByIdPrefixResponse = {
  encode(message: QueryPaymentContractsByIdPrefixResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.paymentContracts) {
      PaymentContract.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPaymentContractsByIdPrefixResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPaymentContractsByIdPrefixResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.paymentContracts.push(PaymentContract.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryPaymentContractsByIdPrefixResponse {
    return {
      paymentContracts: Array.isArray(object?.paymentContracts) ? object.paymentContracts.map((e: any) => PaymentContract.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryPaymentContractsByIdPrefixResponse): unknown {
    const obj: any = {};

    if (message.paymentContracts) {
      obj.paymentContracts = message.paymentContracts.map(e => e ? PaymentContract.toJSON(e) : undefined);
    } else {
      obj.paymentContracts = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<QueryPaymentContractsByIdPrefixResponse>): QueryPaymentContractsByIdPrefixResponse {
    const message = createBaseQueryPaymentContractsByIdPrefixResponse();
    message.paymentContracts = object.paymentContracts?.map(e => PaymentContract.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQuerySubscriptionRequest(): QuerySubscriptionRequest {
  return {
    subscriptionId: ""
  };
}

export const QuerySubscriptionRequest = {
  encode(message: QuerySubscriptionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subscriptionId !== "") {
      writer.uint32(10).string(message.subscriptionId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubscriptionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubscriptionRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.subscriptionId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QuerySubscriptionRequest {
    return {
      subscriptionId: isSet(object.subscriptionId) ? String(object.subscriptionId) : ""
    };
  },

  toJSON(message: QuerySubscriptionRequest): unknown {
    const obj: any = {};
    message.subscriptionId !== undefined && (obj.subscriptionId = message.subscriptionId);
    return obj;
  },

  fromPartial(object: DeepPartial<QuerySubscriptionRequest>): QuerySubscriptionRequest {
    const message = createBaseQuerySubscriptionRequest();
    message.subscriptionId = object.subscriptionId ?? "";
    return message;
  }

};

function createBaseQuerySubscriptionResponse(): QuerySubscriptionResponse {
  return {
    subscription: undefined
  };
}

export const QuerySubscriptionResponse = {
  encode(message: QuerySubscriptionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subscription !== undefined) {
      Subscription.encode(message.subscription, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubscriptionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubscriptionResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.subscription = Subscription.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QuerySubscriptionResponse {
    return {
      subscription: isSet(object.subscription) ? Subscription.fromJSON(object.subscription) : undefined
    };
  },

  toJSON(message: QuerySubscriptionResponse): unknown {
    const obj: any = {};
    message.subscription !== undefined && (obj.subscription = message.subscription ? Subscription.toJSON(message.subscription) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QuerySubscriptionResponse>): QuerySubscriptionResponse {
    const message = createBaseQuerySubscriptionResponse();
    message.subscription = object.subscription !== undefined && object.subscription !== null ? Subscription.fromPartial(object.subscription) : undefined;
    return message;
  }

};