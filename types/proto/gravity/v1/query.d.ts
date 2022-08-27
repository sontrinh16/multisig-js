import { Params } from "./genesis";
import { Valset, PendingIbcAutoForward } from "./types";
import { MsgValsetConfirm, MsgConfirmBatch, MsgConfirmLogicCall } from "./msgs";
import { BatchFees } from "./pool";
import { OutgoingTxBatch, OutgoingLogicCall, OutgoingTransferTx } from "./batch";
import { Attestation } from "./attestation";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface QueryParamsRequest {
}
export interface QueryParamsResponse {
    params: Params;
}
export interface QueryCurrentValsetRequest {
}
export interface QueryCurrentValsetResponse {
    valset: Valset;
}
export interface QueryValsetRequestRequest {
    nonce: Long;
}
export interface QueryValsetRequestResponse {
    valset: Valset;
}
export interface QueryValsetConfirmRequest {
    nonce: Long;
    address: string;
}
export interface QueryValsetConfirmResponse {
    confirm: MsgValsetConfirm;
}
export interface QueryValsetConfirmsByNonceRequest {
    nonce: Long;
}
export interface QueryValsetConfirmsByNonceResponse {
    confirms: MsgValsetConfirm[];
}
export interface QueryLastValsetRequestsRequest {
}
export interface QueryLastValsetRequestsResponse {
    valsets: Valset[];
}
export interface QueryLastPendingValsetRequestByAddrRequest {
    address: string;
}
export interface QueryLastPendingValsetRequestByAddrResponse {
    valsets: Valset[];
}
export interface QueryBatchFeeRequest {
}
export interface QueryBatchFeeResponse {
    batchFees: BatchFees[];
}
export interface QueryLastPendingBatchRequestByAddrRequest {
    address: string;
}
export interface QueryLastPendingBatchRequestByAddrResponse {
    batch: OutgoingTxBatch[];
}
export interface QueryLastPendingLogicCallByAddrRequest {
    address: string;
}
export interface QueryLastPendingLogicCallByAddrResponse {
    call: OutgoingLogicCall[];
}
export interface QueryOutgoingTxBatchesRequest {
}
export interface QueryOutgoingTxBatchesResponse {
    batches: OutgoingTxBatch[];
}
export interface QueryOutgoingLogicCallsRequest {
}
export interface QueryOutgoingLogicCallsResponse {
    calls: OutgoingLogicCall[];
}
export interface QueryBatchRequestByNonceRequest {
    nonce: Long;
    contractAddress: string;
}
export interface QueryBatchRequestByNonceResponse {
    batch: OutgoingTxBatch;
}
export interface QueryBatchConfirmsRequest {
    nonce: Long;
    contractAddress: string;
}
export interface QueryBatchConfirmsResponse {
    confirms: MsgConfirmBatch[];
}
export interface QueryLogicConfirmsRequest {
    invalidationId: Uint8Array;
    invalidationNonce: Long;
}
export interface QueryLogicConfirmsResponse {
    confirms: MsgConfirmLogicCall[];
}
export interface QueryLastEventNonceByAddrRequest {
    address: string;
}
export interface QueryLastEventNonceByAddrResponse {
    eventNonce: Long;
}
export interface QueryERC20ToDenomRequest {
    erc20: string;
}
export interface QueryERC20ToDenomResponse {
    denom: string;
    cosmosOriginated: boolean;
}
export interface QueryDenomToERC20Request {
    denom: string;
}
export interface QueryDenomToERC20Response {
    erc20: string;
    cosmosOriginated: boolean;
}
/**
 * QueryLastObservedEthBlockRequest defines the request for getting the height of the
 * last applied Ethereum Event on the bridge. This is expected to lag the actual
 * Ethereum block height significantly due to 1. Ethereum Finality and
 * 2. Consensus mirroring the state on Ethereum
 */
export interface QueryLastObservedEthBlockRequest {
    /**
     * indicates whether to search for store data using the old Gravity v1 key "LastObservedEthereumBlockHeightKey"
     * Note that queries before the Mercury upgrade at height 1282013 must set this to true
     */
    useV1Key: boolean;
}
export interface QueryLastObservedEthBlockResponse {
    /**
     * a response of 0 indicates that no Ethereum events have been observed, and thus
     * the bridge is inactive
     */
    block: Long;
}
/**
 * QueryLastObservedEthNonceRequest defines the request for getting the event nonce
 * of the last applied Ethereum Event on the bridge.
 * Note that this is likely to lag the last executed event a little
 * due to 1. Ethereum Finality and 2. Consensus mirroring the Ethereum state
 */
export interface QueryLastObservedEthNonceRequest {
    /**
     * indicates whether to search for store data using the old Gravity v1 key "LastObservedEventNonceKey"
     * Note that queries before the Mercury upgrade at height 1282013 must set this to true
     */
    useV1Key: boolean;
}
export interface QueryLastObservedEthNonceResponse {
    /**
     * a response of 0 indicates that no Ethereum events have been observed, and thus
     * the bridge is inactive
     */
    nonce: Long;
}
/**
 * QueryAttestationsRequest defines the request structure for getting recent
 * attestations with optional query parameters. By default, a limited set of
 * recent attestations will be returned, defined by 'limit'. These attestations
 * can be ordered ascending or descending by nonce, that defaults to ascending.
 * Filtering criteria may also be provided, including nonce, claim type, and
 * height. Note, that an attestation will be returned if it matches ANY of the
 * filter query parameters provided.
 */
export interface QueryAttestationsRequest {
    /** limit defines how many attestations to limit in the response. */
    limit: Long;
    /**
     * order_by provides ordering of atteststions by nonce in the response. Either
     * 'asc' or 'desc' can be provided. If no value is provided, it defaults to
     * 'asc'.
     */
    orderBy: string;
    /** claim_type allows filtering attestations by Ethereum claim type. */
    claimType: string;
    /** nonce allows filtering attestations by Ethereum claim nonce. */
    nonce: Long;
    /** height allows filtering attestations by Ethereum claim height. */
    height: Long;
    /**
     * indicates whether to search for store data using the old Gravity v1 key "OracleAttestationKey"
     * Note that queries before the Mercury upgrade at height 1282013 must set this to true
     */
    useV1Key: boolean;
}
export interface QueryAttestationsResponse {
    attestations: Attestation[];
}
export interface QueryDelegateKeysByValidatorAddress {
    validatorAddress: string;
}
export interface QueryDelegateKeysByValidatorAddressResponse {
    ethAddress: string;
    orchestratorAddress: string;
}
export interface QueryDelegateKeysByEthAddress {
    ethAddress: string;
}
export interface QueryDelegateKeysByEthAddressResponse {
    validatorAddress: string;
    orchestratorAddress: string;
}
export interface QueryDelegateKeysByOrchestratorAddress {
    orchestratorAddress: string;
}
export interface QueryDelegateKeysByOrchestratorAddressResponse {
    validatorAddress: string;
    ethAddress: string;
}
export interface QueryPendingSendToEth {
    senderAddress: string;
}
export interface QueryPendingSendToEthResponse {
    transfersInBatches: OutgoingTransferTx[];
    unbatchedTransfers: OutgoingTransferTx[];
}
export interface QueryPendingIbcAutoForwards {
    /** limit defines the number of pending forwards to return, in order of their SendToCosmos.EventNonce */
    limit: Long;
}
export interface QueryPendingIbcAutoForwardsResponse {
    pendingIbcAutoForwards: PendingIbcAutoForward[];
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryCurrentValsetRequest: {
    encode(_: QueryCurrentValsetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentValsetRequest;
    fromJSON(_: any): QueryCurrentValsetRequest;
    toJSON(_: QueryCurrentValsetRequest): unknown;
    fromPartial(_: DeepPartial<QueryCurrentValsetRequest>): QueryCurrentValsetRequest;
};
export declare const QueryCurrentValsetResponse: {
    encode(message: QueryCurrentValsetResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentValsetResponse;
    fromJSON(object: any): QueryCurrentValsetResponse;
    toJSON(message: QueryCurrentValsetResponse): unknown;
    fromPartial(object: DeepPartial<QueryCurrentValsetResponse>): QueryCurrentValsetResponse;
};
export declare const QueryValsetRequestRequest: {
    encode(message: QueryValsetRequestRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValsetRequestRequest;
    fromJSON(object: any): QueryValsetRequestRequest;
    toJSON(message: QueryValsetRequestRequest): unknown;
    fromPartial(object: DeepPartial<QueryValsetRequestRequest>): QueryValsetRequestRequest;
};
export declare const QueryValsetRequestResponse: {
    encode(message: QueryValsetRequestResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValsetRequestResponse;
    fromJSON(object: any): QueryValsetRequestResponse;
    toJSON(message: QueryValsetRequestResponse): unknown;
    fromPartial(object: DeepPartial<QueryValsetRequestResponse>): QueryValsetRequestResponse;
};
export declare const QueryValsetConfirmRequest: {
    encode(message: QueryValsetConfirmRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValsetConfirmRequest;
    fromJSON(object: any): QueryValsetConfirmRequest;
    toJSON(message: QueryValsetConfirmRequest): unknown;
    fromPartial(object: DeepPartial<QueryValsetConfirmRequest>): QueryValsetConfirmRequest;
};
export declare const QueryValsetConfirmResponse: {
    encode(message: QueryValsetConfirmResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValsetConfirmResponse;
    fromJSON(object: any): QueryValsetConfirmResponse;
    toJSON(message: QueryValsetConfirmResponse): unknown;
    fromPartial(object: DeepPartial<QueryValsetConfirmResponse>): QueryValsetConfirmResponse;
};
export declare const QueryValsetConfirmsByNonceRequest: {
    encode(message: QueryValsetConfirmsByNonceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValsetConfirmsByNonceRequest;
    fromJSON(object: any): QueryValsetConfirmsByNonceRequest;
    toJSON(message: QueryValsetConfirmsByNonceRequest): unknown;
    fromPartial(object: DeepPartial<QueryValsetConfirmsByNonceRequest>): QueryValsetConfirmsByNonceRequest;
};
export declare const QueryValsetConfirmsByNonceResponse: {
    encode(message: QueryValsetConfirmsByNonceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValsetConfirmsByNonceResponse;
    fromJSON(object: any): QueryValsetConfirmsByNonceResponse;
    toJSON(message: QueryValsetConfirmsByNonceResponse): unknown;
    fromPartial(object: DeepPartial<QueryValsetConfirmsByNonceResponse>): QueryValsetConfirmsByNonceResponse;
};
export declare const QueryLastValsetRequestsRequest: {
    encode(_: QueryLastValsetRequestsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastValsetRequestsRequest;
    fromJSON(_: any): QueryLastValsetRequestsRequest;
    toJSON(_: QueryLastValsetRequestsRequest): unknown;
    fromPartial(_: DeepPartial<QueryLastValsetRequestsRequest>): QueryLastValsetRequestsRequest;
};
export declare const QueryLastValsetRequestsResponse: {
    encode(message: QueryLastValsetRequestsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastValsetRequestsResponse;
    fromJSON(object: any): QueryLastValsetRequestsResponse;
    toJSON(message: QueryLastValsetRequestsResponse): unknown;
    fromPartial(object: DeepPartial<QueryLastValsetRequestsResponse>): QueryLastValsetRequestsResponse;
};
export declare const QueryLastPendingValsetRequestByAddrRequest: {
    encode(message: QueryLastPendingValsetRequestByAddrRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastPendingValsetRequestByAddrRequest;
    fromJSON(object: any): QueryLastPendingValsetRequestByAddrRequest;
    toJSON(message: QueryLastPendingValsetRequestByAddrRequest): unknown;
    fromPartial(object: DeepPartial<QueryLastPendingValsetRequestByAddrRequest>): QueryLastPendingValsetRequestByAddrRequest;
};
export declare const QueryLastPendingValsetRequestByAddrResponse: {
    encode(message: QueryLastPendingValsetRequestByAddrResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastPendingValsetRequestByAddrResponse;
    fromJSON(object: any): QueryLastPendingValsetRequestByAddrResponse;
    toJSON(message: QueryLastPendingValsetRequestByAddrResponse): unknown;
    fromPartial(object: DeepPartial<QueryLastPendingValsetRequestByAddrResponse>): QueryLastPendingValsetRequestByAddrResponse;
};
export declare const QueryBatchFeeRequest: {
    encode(_: QueryBatchFeeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchFeeRequest;
    fromJSON(_: any): QueryBatchFeeRequest;
    toJSON(_: QueryBatchFeeRequest): unknown;
    fromPartial(_: DeepPartial<QueryBatchFeeRequest>): QueryBatchFeeRequest;
};
export declare const QueryBatchFeeResponse: {
    encode(message: QueryBatchFeeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchFeeResponse;
    fromJSON(object: any): QueryBatchFeeResponse;
    toJSON(message: QueryBatchFeeResponse): unknown;
    fromPartial(object: DeepPartial<QueryBatchFeeResponse>): QueryBatchFeeResponse;
};
export declare const QueryLastPendingBatchRequestByAddrRequest: {
    encode(message: QueryLastPendingBatchRequestByAddrRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastPendingBatchRequestByAddrRequest;
    fromJSON(object: any): QueryLastPendingBatchRequestByAddrRequest;
    toJSON(message: QueryLastPendingBatchRequestByAddrRequest): unknown;
    fromPartial(object: DeepPartial<QueryLastPendingBatchRequestByAddrRequest>): QueryLastPendingBatchRequestByAddrRequest;
};
export declare const QueryLastPendingBatchRequestByAddrResponse: {
    encode(message: QueryLastPendingBatchRequestByAddrResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastPendingBatchRequestByAddrResponse;
    fromJSON(object: any): QueryLastPendingBatchRequestByAddrResponse;
    toJSON(message: QueryLastPendingBatchRequestByAddrResponse): unknown;
    fromPartial(object: DeepPartial<QueryLastPendingBatchRequestByAddrResponse>): QueryLastPendingBatchRequestByAddrResponse;
};
export declare const QueryLastPendingLogicCallByAddrRequest: {
    encode(message: QueryLastPendingLogicCallByAddrRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastPendingLogicCallByAddrRequest;
    fromJSON(object: any): QueryLastPendingLogicCallByAddrRequest;
    toJSON(message: QueryLastPendingLogicCallByAddrRequest): unknown;
    fromPartial(object: DeepPartial<QueryLastPendingLogicCallByAddrRequest>): QueryLastPendingLogicCallByAddrRequest;
};
export declare const QueryLastPendingLogicCallByAddrResponse: {
    encode(message: QueryLastPendingLogicCallByAddrResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastPendingLogicCallByAddrResponse;
    fromJSON(object: any): QueryLastPendingLogicCallByAddrResponse;
    toJSON(message: QueryLastPendingLogicCallByAddrResponse): unknown;
    fromPartial(object: DeepPartial<QueryLastPendingLogicCallByAddrResponse>): QueryLastPendingLogicCallByAddrResponse;
};
export declare const QueryOutgoingTxBatchesRequest: {
    encode(_: QueryOutgoingTxBatchesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOutgoingTxBatchesRequest;
    fromJSON(_: any): QueryOutgoingTxBatchesRequest;
    toJSON(_: QueryOutgoingTxBatchesRequest): unknown;
    fromPartial(_: DeepPartial<QueryOutgoingTxBatchesRequest>): QueryOutgoingTxBatchesRequest;
};
export declare const QueryOutgoingTxBatchesResponse: {
    encode(message: QueryOutgoingTxBatchesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOutgoingTxBatchesResponse;
    fromJSON(object: any): QueryOutgoingTxBatchesResponse;
    toJSON(message: QueryOutgoingTxBatchesResponse): unknown;
    fromPartial(object: DeepPartial<QueryOutgoingTxBatchesResponse>): QueryOutgoingTxBatchesResponse;
};
export declare const QueryOutgoingLogicCallsRequest: {
    encode(_: QueryOutgoingLogicCallsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOutgoingLogicCallsRequest;
    fromJSON(_: any): QueryOutgoingLogicCallsRequest;
    toJSON(_: QueryOutgoingLogicCallsRequest): unknown;
    fromPartial(_: DeepPartial<QueryOutgoingLogicCallsRequest>): QueryOutgoingLogicCallsRequest;
};
export declare const QueryOutgoingLogicCallsResponse: {
    encode(message: QueryOutgoingLogicCallsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOutgoingLogicCallsResponse;
    fromJSON(object: any): QueryOutgoingLogicCallsResponse;
    toJSON(message: QueryOutgoingLogicCallsResponse): unknown;
    fromPartial(object: DeepPartial<QueryOutgoingLogicCallsResponse>): QueryOutgoingLogicCallsResponse;
};
export declare const QueryBatchRequestByNonceRequest: {
    encode(message: QueryBatchRequestByNonceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchRequestByNonceRequest;
    fromJSON(object: any): QueryBatchRequestByNonceRequest;
    toJSON(message: QueryBatchRequestByNonceRequest): unknown;
    fromPartial(object: DeepPartial<QueryBatchRequestByNonceRequest>): QueryBatchRequestByNonceRequest;
};
export declare const QueryBatchRequestByNonceResponse: {
    encode(message: QueryBatchRequestByNonceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchRequestByNonceResponse;
    fromJSON(object: any): QueryBatchRequestByNonceResponse;
    toJSON(message: QueryBatchRequestByNonceResponse): unknown;
    fromPartial(object: DeepPartial<QueryBatchRequestByNonceResponse>): QueryBatchRequestByNonceResponse;
};
export declare const QueryBatchConfirmsRequest: {
    encode(message: QueryBatchConfirmsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchConfirmsRequest;
    fromJSON(object: any): QueryBatchConfirmsRequest;
    toJSON(message: QueryBatchConfirmsRequest): unknown;
    fromPartial(object: DeepPartial<QueryBatchConfirmsRequest>): QueryBatchConfirmsRequest;
};
export declare const QueryBatchConfirmsResponse: {
    encode(message: QueryBatchConfirmsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchConfirmsResponse;
    fromJSON(object: any): QueryBatchConfirmsResponse;
    toJSON(message: QueryBatchConfirmsResponse): unknown;
    fromPartial(object: DeepPartial<QueryBatchConfirmsResponse>): QueryBatchConfirmsResponse;
};
export declare const QueryLogicConfirmsRequest: {
    encode(message: QueryLogicConfirmsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLogicConfirmsRequest;
    fromJSON(object: any): QueryLogicConfirmsRequest;
    toJSON(message: QueryLogicConfirmsRequest): unknown;
    fromPartial(object: DeepPartial<QueryLogicConfirmsRequest>): QueryLogicConfirmsRequest;
};
export declare const QueryLogicConfirmsResponse: {
    encode(message: QueryLogicConfirmsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLogicConfirmsResponse;
    fromJSON(object: any): QueryLogicConfirmsResponse;
    toJSON(message: QueryLogicConfirmsResponse): unknown;
    fromPartial(object: DeepPartial<QueryLogicConfirmsResponse>): QueryLogicConfirmsResponse;
};
export declare const QueryLastEventNonceByAddrRequest: {
    encode(message: QueryLastEventNonceByAddrRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastEventNonceByAddrRequest;
    fromJSON(object: any): QueryLastEventNonceByAddrRequest;
    toJSON(message: QueryLastEventNonceByAddrRequest): unknown;
    fromPartial(object: DeepPartial<QueryLastEventNonceByAddrRequest>): QueryLastEventNonceByAddrRequest;
};
export declare const QueryLastEventNonceByAddrResponse: {
    encode(message: QueryLastEventNonceByAddrResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastEventNonceByAddrResponse;
    fromJSON(object: any): QueryLastEventNonceByAddrResponse;
    toJSON(message: QueryLastEventNonceByAddrResponse): unknown;
    fromPartial(object: DeepPartial<QueryLastEventNonceByAddrResponse>): QueryLastEventNonceByAddrResponse;
};
export declare const QueryERC20ToDenomRequest: {
    encode(message: QueryERC20ToDenomRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryERC20ToDenomRequest;
    fromJSON(object: any): QueryERC20ToDenomRequest;
    toJSON(message: QueryERC20ToDenomRequest): unknown;
    fromPartial(object: DeepPartial<QueryERC20ToDenomRequest>): QueryERC20ToDenomRequest;
};
export declare const QueryERC20ToDenomResponse: {
    encode(message: QueryERC20ToDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryERC20ToDenomResponse;
    fromJSON(object: any): QueryERC20ToDenomResponse;
    toJSON(message: QueryERC20ToDenomResponse): unknown;
    fromPartial(object: DeepPartial<QueryERC20ToDenomResponse>): QueryERC20ToDenomResponse;
};
export declare const QueryDenomToERC20Request: {
    encode(message: QueryDenomToERC20Request, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomToERC20Request;
    fromJSON(object: any): QueryDenomToERC20Request;
    toJSON(message: QueryDenomToERC20Request): unknown;
    fromPartial(object: DeepPartial<QueryDenomToERC20Request>): QueryDenomToERC20Request;
};
export declare const QueryDenomToERC20Response: {
    encode(message: QueryDenomToERC20Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomToERC20Response;
    fromJSON(object: any): QueryDenomToERC20Response;
    toJSON(message: QueryDenomToERC20Response): unknown;
    fromPartial(object: DeepPartial<QueryDenomToERC20Response>): QueryDenomToERC20Response;
};
export declare const QueryLastObservedEthBlockRequest: {
    encode(message: QueryLastObservedEthBlockRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastObservedEthBlockRequest;
    fromJSON(object: any): QueryLastObservedEthBlockRequest;
    toJSON(message: QueryLastObservedEthBlockRequest): unknown;
    fromPartial(object: DeepPartial<QueryLastObservedEthBlockRequest>): QueryLastObservedEthBlockRequest;
};
export declare const QueryLastObservedEthBlockResponse: {
    encode(message: QueryLastObservedEthBlockResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastObservedEthBlockResponse;
    fromJSON(object: any): QueryLastObservedEthBlockResponse;
    toJSON(message: QueryLastObservedEthBlockResponse): unknown;
    fromPartial(object: DeepPartial<QueryLastObservedEthBlockResponse>): QueryLastObservedEthBlockResponse;
};
export declare const QueryLastObservedEthNonceRequest: {
    encode(message: QueryLastObservedEthNonceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastObservedEthNonceRequest;
    fromJSON(object: any): QueryLastObservedEthNonceRequest;
    toJSON(message: QueryLastObservedEthNonceRequest): unknown;
    fromPartial(object: DeepPartial<QueryLastObservedEthNonceRequest>): QueryLastObservedEthNonceRequest;
};
export declare const QueryLastObservedEthNonceResponse: {
    encode(message: QueryLastObservedEthNonceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastObservedEthNonceResponse;
    fromJSON(object: any): QueryLastObservedEthNonceResponse;
    toJSON(message: QueryLastObservedEthNonceResponse): unknown;
    fromPartial(object: DeepPartial<QueryLastObservedEthNonceResponse>): QueryLastObservedEthNonceResponse;
};
export declare const QueryAttestationsRequest: {
    encode(message: QueryAttestationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAttestationsRequest;
    fromJSON(object: any): QueryAttestationsRequest;
    toJSON(message: QueryAttestationsRequest): unknown;
    fromPartial(object: DeepPartial<QueryAttestationsRequest>): QueryAttestationsRequest;
};
export declare const QueryAttestationsResponse: {
    encode(message: QueryAttestationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAttestationsResponse;
    fromJSON(object: any): QueryAttestationsResponse;
    toJSON(message: QueryAttestationsResponse): unknown;
    fromPartial(object: DeepPartial<QueryAttestationsResponse>): QueryAttestationsResponse;
};
export declare const QueryDelegateKeysByValidatorAddress: {
    encode(message: QueryDelegateKeysByValidatorAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegateKeysByValidatorAddress;
    fromJSON(object: any): QueryDelegateKeysByValidatorAddress;
    toJSON(message: QueryDelegateKeysByValidatorAddress): unknown;
    fromPartial(object: DeepPartial<QueryDelegateKeysByValidatorAddress>): QueryDelegateKeysByValidatorAddress;
};
export declare const QueryDelegateKeysByValidatorAddressResponse: {
    encode(message: QueryDelegateKeysByValidatorAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegateKeysByValidatorAddressResponse;
    fromJSON(object: any): QueryDelegateKeysByValidatorAddressResponse;
    toJSON(message: QueryDelegateKeysByValidatorAddressResponse): unknown;
    fromPartial(object: DeepPartial<QueryDelegateKeysByValidatorAddressResponse>): QueryDelegateKeysByValidatorAddressResponse;
};
export declare const QueryDelegateKeysByEthAddress: {
    encode(message: QueryDelegateKeysByEthAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegateKeysByEthAddress;
    fromJSON(object: any): QueryDelegateKeysByEthAddress;
    toJSON(message: QueryDelegateKeysByEthAddress): unknown;
    fromPartial(object: DeepPartial<QueryDelegateKeysByEthAddress>): QueryDelegateKeysByEthAddress;
};
export declare const QueryDelegateKeysByEthAddressResponse: {
    encode(message: QueryDelegateKeysByEthAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegateKeysByEthAddressResponse;
    fromJSON(object: any): QueryDelegateKeysByEthAddressResponse;
    toJSON(message: QueryDelegateKeysByEthAddressResponse): unknown;
    fromPartial(object: DeepPartial<QueryDelegateKeysByEthAddressResponse>): QueryDelegateKeysByEthAddressResponse;
};
export declare const QueryDelegateKeysByOrchestratorAddress: {
    encode(message: QueryDelegateKeysByOrchestratorAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegateKeysByOrchestratorAddress;
    fromJSON(object: any): QueryDelegateKeysByOrchestratorAddress;
    toJSON(message: QueryDelegateKeysByOrchestratorAddress): unknown;
    fromPartial(object: DeepPartial<QueryDelegateKeysByOrchestratorAddress>): QueryDelegateKeysByOrchestratorAddress;
};
export declare const QueryDelegateKeysByOrchestratorAddressResponse: {
    encode(message: QueryDelegateKeysByOrchestratorAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegateKeysByOrchestratorAddressResponse;
    fromJSON(object: any): QueryDelegateKeysByOrchestratorAddressResponse;
    toJSON(message: QueryDelegateKeysByOrchestratorAddressResponse): unknown;
    fromPartial(object: DeepPartial<QueryDelegateKeysByOrchestratorAddressResponse>): QueryDelegateKeysByOrchestratorAddressResponse;
};
export declare const QueryPendingSendToEth: {
    encode(message: QueryPendingSendToEth, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPendingSendToEth;
    fromJSON(object: any): QueryPendingSendToEth;
    toJSON(message: QueryPendingSendToEth): unknown;
    fromPartial(object: DeepPartial<QueryPendingSendToEth>): QueryPendingSendToEth;
};
export declare const QueryPendingSendToEthResponse: {
    encode(message: QueryPendingSendToEthResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPendingSendToEthResponse;
    fromJSON(object: any): QueryPendingSendToEthResponse;
    toJSON(message: QueryPendingSendToEthResponse): unknown;
    fromPartial(object: DeepPartial<QueryPendingSendToEthResponse>): QueryPendingSendToEthResponse;
};
export declare const QueryPendingIbcAutoForwards: {
    encode(message: QueryPendingIbcAutoForwards, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPendingIbcAutoForwards;
    fromJSON(object: any): QueryPendingIbcAutoForwards;
    toJSON(message: QueryPendingIbcAutoForwards): unknown;
    fromPartial(object: DeepPartial<QueryPendingIbcAutoForwards>): QueryPendingIbcAutoForwards;
};
export declare const QueryPendingIbcAutoForwardsResponse: {
    encode(message: QueryPendingIbcAutoForwardsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPendingIbcAutoForwardsResponse;
    fromJSON(object: any): QueryPendingIbcAutoForwardsResponse;
    toJSON(message: QueryPendingIbcAutoForwardsResponse): unknown;
    fromPartial(object: DeepPartial<QueryPendingIbcAutoForwardsResponse>): QueryPendingIbcAutoForwardsResponse;
};
