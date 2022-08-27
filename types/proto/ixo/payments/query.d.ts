import { PaymentTemplate, PaymentContract, Subscription } from "./payments";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
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
export declare const QueryPaymentTemplateRequest: {
    encode(message: QueryPaymentTemplateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPaymentTemplateRequest;
    fromJSON(object: any): QueryPaymentTemplateRequest;
    toJSON(message: QueryPaymentTemplateRequest): unknown;
    fromPartial(object: DeepPartial<QueryPaymentTemplateRequest>): QueryPaymentTemplateRequest;
};
export declare const QueryPaymentTemplateResponse: {
    encode(message: QueryPaymentTemplateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPaymentTemplateResponse;
    fromJSON(object: any): QueryPaymentTemplateResponse;
    toJSON(message: QueryPaymentTemplateResponse): unknown;
    fromPartial(object: DeepPartial<QueryPaymentTemplateResponse>): QueryPaymentTemplateResponse;
};
export declare const QueryPaymentContractRequest: {
    encode(message: QueryPaymentContractRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPaymentContractRequest;
    fromJSON(object: any): QueryPaymentContractRequest;
    toJSON(message: QueryPaymentContractRequest): unknown;
    fromPartial(object: DeepPartial<QueryPaymentContractRequest>): QueryPaymentContractRequest;
};
export declare const QueryPaymentContractResponse: {
    encode(message: QueryPaymentContractResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPaymentContractResponse;
    fromJSON(object: any): QueryPaymentContractResponse;
    toJSON(message: QueryPaymentContractResponse): unknown;
    fromPartial(object: DeepPartial<QueryPaymentContractResponse>): QueryPaymentContractResponse;
};
export declare const QueryPaymentContractsByIdPrefixRequest: {
    encode(message: QueryPaymentContractsByIdPrefixRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPaymentContractsByIdPrefixRequest;
    fromJSON(object: any): QueryPaymentContractsByIdPrefixRequest;
    toJSON(message: QueryPaymentContractsByIdPrefixRequest): unknown;
    fromPartial(object: DeepPartial<QueryPaymentContractsByIdPrefixRequest>): QueryPaymentContractsByIdPrefixRequest;
};
export declare const QueryPaymentContractsByIdPrefixResponse: {
    encode(message: QueryPaymentContractsByIdPrefixResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPaymentContractsByIdPrefixResponse;
    fromJSON(object: any): QueryPaymentContractsByIdPrefixResponse;
    toJSON(message: QueryPaymentContractsByIdPrefixResponse): unknown;
    fromPartial(object: DeepPartial<QueryPaymentContractsByIdPrefixResponse>): QueryPaymentContractsByIdPrefixResponse;
};
export declare const QuerySubscriptionRequest: {
    encode(message: QuerySubscriptionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubscriptionRequest;
    fromJSON(object: any): QuerySubscriptionRequest;
    toJSON(message: QuerySubscriptionRequest): unknown;
    fromPartial(object: DeepPartial<QuerySubscriptionRequest>): QuerySubscriptionRequest;
};
export declare const QuerySubscriptionResponse: {
    encode(message: QuerySubscriptionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubscriptionResponse;
    fromJSON(object: any): QuerySubscriptionResponse;
    toJSON(message: QuerySubscriptionResponse): unknown;
    fromPartial(object: DeepPartial<QuerySubscriptionResponse>): QuerySubscriptionResponse;
};
