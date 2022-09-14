import { Asset, TokenDetails } from "./types";
import { KeyType } from "../../tss/exported/v1beta1/types";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface SetGatewayRequest {
    sender: Uint8Array;
    chain: string;
    address: Uint8Array;
}
export interface SetGatewayResponse {
}
export interface ConfirmGatewayTxRequest {
    sender: Uint8Array;
    chain: string;
    txId: Uint8Array;
}
export interface ConfirmGatewayTxResponse {
}
/** MsgConfirmDeposit represents an erc20 deposit confirmation message */
export interface ConfirmDepositRequest {
    sender: Uint8Array;
    chain: string;
    txId: Uint8Array;
    /** @deprecated */
    amount: Uint8Array;
    burnerAddress: Uint8Array;
}
export interface ConfirmDepositResponse {
}
/** MsgConfirmToken represents a token deploy confirmation message */
export interface ConfirmTokenRequest {
    sender: Uint8Array;
    chain: string;
    txId: Uint8Array;
    asset: Asset;
}
export interface ConfirmTokenResponse {
}
export interface ConfirmTransferKeyRequest {
    sender: Uint8Array;
    chain: string;
    txId: Uint8Array;
}
export interface ConfirmTransferKeyResponse {
}
/**
 * MsgLink represents the message that links a cross chain address to a burner
 * address
 */
export interface LinkRequest {
    sender: Uint8Array;
    chain: string;
    recipientAddr: string;
    asset: string;
    recipientChain: string;
}
export interface LinkResponse {
    depositAddr: string;
}
/**
 * CreateBurnTokensRequest represents the message to create commands to burn
 * tokens with AxelarGateway
 */
export interface CreateBurnTokensRequest {
    sender: Uint8Array;
    chain: string;
}
export interface CreateBurnTokensResponse {
}
/**
 * CreateDeployTokenRequest represents the message to create a deploy token
 * command for AxelarGateway
 */
export interface CreateDeployTokenRequest {
    sender: Uint8Array;
    chain: string;
    asset: Asset;
    tokenDetails: TokenDetails;
    address: Uint8Array;
    dailyMintLimit: string;
}
export interface CreateDeployTokenResponse {
}
/**
 * CreatePendingTransfersRequest represents a message to trigger the creation of
 * commands handling all pending transfers
 */
export interface CreatePendingTransfersRequest {
    sender: Uint8Array;
    chain: string;
}
export interface CreatePendingTransfersResponse {
}
/** @deprecated */
export interface CreateTransferOwnershipRequest {
    sender: Uint8Array;
    chain: string;
    keyId: string;
}
/** @deprecated */
export interface CreateTransferOwnershipResponse {
}
export interface CreateTransferOperatorshipRequest {
    sender: Uint8Array;
    chain: string;
    keyId: string;
}
export interface CreateTransferOperatorshipResponse {
}
export interface SignCommandsRequest {
    sender: Uint8Array;
    chain: string;
}
export interface SignCommandsResponse {
    batchedCommandsId: Uint8Array;
    commandCount: number;
}
export interface AddChainRequest {
    sender: Uint8Array;
    name: string;
    /** @deprecated */
    keyType: KeyType;
    params: Uint8Array;
}
export interface AddChainResponse {
}
export interface RetryFailedEventRequest {
    sender: Uint8Array;
    chain: string;
    eventId: string;
}
export interface RetryFailedEventResponse {
}
export declare const SetGatewayRequest: {
    encode(message: SetGatewayRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetGatewayRequest;
    fromJSON(object: any): SetGatewayRequest;
    toJSON(message: SetGatewayRequest): unknown;
    fromPartial(object: DeepPartial<SetGatewayRequest>): SetGatewayRequest;
};
export declare const SetGatewayResponse: {
    encode(_: SetGatewayResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetGatewayResponse;
    fromJSON(_: any): SetGatewayResponse;
    toJSON(_: SetGatewayResponse): unknown;
    fromPartial(_: DeepPartial<SetGatewayResponse>): SetGatewayResponse;
};
export declare const ConfirmGatewayTxRequest: {
    encode(message: ConfirmGatewayTxRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConfirmGatewayTxRequest;
    fromJSON(object: any): ConfirmGatewayTxRequest;
    toJSON(message: ConfirmGatewayTxRequest): unknown;
    fromPartial(object: DeepPartial<ConfirmGatewayTxRequest>): ConfirmGatewayTxRequest;
};
export declare const ConfirmGatewayTxResponse: {
    encode(_: ConfirmGatewayTxResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConfirmGatewayTxResponse;
    fromJSON(_: any): ConfirmGatewayTxResponse;
    toJSON(_: ConfirmGatewayTxResponse): unknown;
    fromPartial(_: DeepPartial<ConfirmGatewayTxResponse>): ConfirmGatewayTxResponse;
};
export declare const ConfirmDepositRequest: {
    encode(message: ConfirmDepositRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConfirmDepositRequest;
    fromJSON(object: any): ConfirmDepositRequest;
    toJSON(message: ConfirmDepositRequest): unknown;
    fromPartial(object: DeepPartial<ConfirmDepositRequest>): ConfirmDepositRequest;
};
export declare const ConfirmDepositResponse: {
    encode(_: ConfirmDepositResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConfirmDepositResponse;
    fromJSON(_: any): ConfirmDepositResponse;
    toJSON(_: ConfirmDepositResponse): unknown;
    fromPartial(_: DeepPartial<ConfirmDepositResponse>): ConfirmDepositResponse;
};
export declare const ConfirmTokenRequest: {
    encode(message: ConfirmTokenRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConfirmTokenRequest;
    fromJSON(object: any): ConfirmTokenRequest;
    toJSON(message: ConfirmTokenRequest): unknown;
    fromPartial(object: DeepPartial<ConfirmTokenRequest>): ConfirmTokenRequest;
};
export declare const ConfirmTokenResponse: {
    encode(_: ConfirmTokenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConfirmTokenResponse;
    fromJSON(_: any): ConfirmTokenResponse;
    toJSON(_: ConfirmTokenResponse): unknown;
    fromPartial(_: DeepPartial<ConfirmTokenResponse>): ConfirmTokenResponse;
};
export declare const ConfirmTransferKeyRequest: {
    encode(message: ConfirmTransferKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConfirmTransferKeyRequest;
    fromJSON(object: any): ConfirmTransferKeyRequest;
    toJSON(message: ConfirmTransferKeyRequest): unknown;
    fromPartial(object: DeepPartial<ConfirmTransferKeyRequest>): ConfirmTransferKeyRequest;
};
export declare const ConfirmTransferKeyResponse: {
    encode(_: ConfirmTransferKeyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConfirmTransferKeyResponse;
    fromJSON(_: any): ConfirmTransferKeyResponse;
    toJSON(_: ConfirmTransferKeyResponse): unknown;
    fromPartial(_: DeepPartial<ConfirmTransferKeyResponse>): ConfirmTransferKeyResponse;
};
export declare const LinkRequest: {
    encode(message: LinkRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LinkRequest;
    fromJSON(object: any): LinkRequest;
    toJSON(message: LinkRequest): unknown;
    fromPartial(object: DeepPartial<LinkRequest>): LinkRequest;
};
export declare const LinkResponse: {
    encode(message: LinkResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LinkResponse;
    fromJSON(object: any): LinkResponse;
    toJSON(message: LinkResponse): unknown;
    fromPartial(object: DeepPartial<LinkResponse>): LinkResponse;
};
export declare const CreateBurnTokensRequest: {
    encode(message: CreateBurnTokensRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateBurnTokensRequest;
    fromJSON(object: any): CreateBurnTokensRequest;
    toJSON(message: CreateBurnTokensRequest): unknown;
    fromPartial(object: DeepPartial<CreateBurnTokensRequest>): CreateBurnTokensRequest;
};
export declare const CreateBurnTokensResponse: {
    encode(_: CreateBurnTokensResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateBurnTokensResponse;
    fromJSON(_: any): CreateBurnTokensResponse;
    toJSON(_: CreateBurnTokensResponse): unknown;
    fromPartial(_: DeepPartial<CreateBurnTokensResponse>): CreateBurnTokensResponse;
};
export declare const CreateDeployTokenRequest: {
    encode(message: CreateDeployTokenRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateDeployTokenRequest;
    fromJSON(object: any): CreateDeployTokenRequest;
    toJSON(message: CreateDeployTokenRequest): unknown;
    fromPartial(object: DeepPartial<CreateDeployTokenRequest>): CreateDeployTokenRequest;
};
export declare const CreateDeployTokenResponse: {
    encode(_: CreateDeployTokenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateDeployTokenResponse;
    fromJSON(_: any): CreateDeployTokenResponse;
    toJSON(_: CreateDeployTokenResponse): unknown;
    fromPartial(_: DeepPartial<CreateDeployTokenResponse>): CreateDeployTokenResponse;
};
export declare const CreatePendingTransfersRequest: {
    encode(message: CreatePendingTransfersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreatePendingTransfersRequest;
    fromJSON(object: any): CreatePendingTransfersRequest;
    toJSON(message: CreatePendingTransfersRequest): unknown;
    fromPartial(object: DeepPartial<CreatePendingTransfersRequest>): CreatePendingTransfersRequest;
};
export declare const CreatePendingTransfersResponse: {
    encode(_: CreatePendingTransfersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreatePendingTransfersResponse;
    fromJSON(_: any): CreatePendingTransfersResponse;
    toJSON(_: CreatePendingTransfersResponse): unknown;
    fromPartial(_: DeepPartial<CreatePendingTransfersResponse>): CreatePendingTransfersResponse;
};
export declare const CreateTransferOwnershipRequest: {
    encode(message: CreateTransferOwnershipRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateTransferOwnershipRequest;
    fromJSON(object: any): CreateTransferOwnershipRequest;
    toJSON(message: CreateTransferOwnershipRequest): unknown;
    fromPartial(object: DeepPartial<CreateTransferOwnershipRequest>): CreateTransferOwnershipRequest;
};
export declare const CreateTransferOwnershipResponse: {
    encode(_: CreateTransferOwnershipResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateTransferOwnershipResponse;
    fromJSON(_: any): CreateTransferOwnershipResponse;
    toJSON(_: CreateTransferOwnershipResponse): unknown;
    fromPartial(_: DeepPartial<CreateTransferOwnershipResponse>): CreateTransferOwnershipResponse;
};
export declare const CreateTransferOperatorshipRequest: {
    encode(message: CreateTransferOperatorshipRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateTransferOperatorshipRequest;
    fromJSON(object: any): CreateTransferOperatorshipRequest;
    toJSON(message: CreateTransferOperatorshipRequest): unknown;
    fromPartial(object: DeepPartial<CreateTransferOperatorshipRequest>): CreateTransferOperatorshipRequest;
};
export declare const CreateTransferOperatorshipResponse: {
    encode(_: CreateTransferOperatorshipResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateTransferOperatorshipResponse;
    fromJSON(_: any): CreateTransferOperatorshipResponse;
    toJSON(_: CreateTransferOperatorshipResponse): unknown;
    fromPartial(_: DeepPartial<CreateTransferOperatorshipResponse>): CreateTransferOperatorshipResponse;
};
export declare const SignCommandsRequest: {
    encode(message: SignCommandsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignCommandsRequest;
    fromJSON(object: any): SignCommandsRequest;
    toJSON(message: SignCommandsRequest): unknown;
    fromPartial(object: DeepPartial<SignCommandsRequest>): SignCommandsRequest;
};
export declare const SignCommandsResponse: {
    encode(message: SignCommandsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignCommandsResponse;
    fromJSON(object: any): SignCommandsResponse;
    toJSON(message: SignCommandsResponse): unknown;
    fromPartial(object: DeepPartial<SignCommandsResponse>): SignCommandsResponse;
};
export declare const AddChainRequest: {
    encode(message: AddChainRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddChainRequest;
    fromJSON(object: any): AddChainRequest;
    toJSON(message: AddChainRequest): unknown;
    fromPartial(object: DeepPartial<AddChainRequest>): AddChainRequest;
};
export declare const AddChainResponse: {
    encode(_: AddChainResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddChainResponse;
    fromJSON(_: any): AddChainResponse;
    toJSON(_: AddChainResponse): unknown;
    fromPartial(_: DeepPartial<AddChainResponse>): AddChainResponse;
};
export declare const RetryFailedEventRequest: {
    encode(message: RetryFailedEventRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RetryFailedEventRequest;
    fromJSON(object: any): RetryFailedEventRequest;
    toJSON(message: RetryFailedEventRequest): unknown;
    fromPartial(object: DeepPartial<RetryFailedEventRequest>): RetryFailedEventRequest;
};
export declare const RetryFailedEventResponse: {
    encode(_: RetryFailedEventResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RetryFailedEventResponse;
    fromJSON(_: any): RetryFailedEventResponse;
    toJSON(_: RetryFailedEventResponse): unknown;
    fromPartial(_: DeepPartial<RetryFailedEventResponse>): RetryFailedEventResponse;
};
