import { Chain, Asset } from "../../nexus/exported/v1beta1/types";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/**
 * MsgLink represents a message to link a cross-chain address to an Axelar
 * address
 */
export interface LinkRequest {
    sender: Uint8Array;
    recipientAddr: string;
    recipientChain: string;
    asset: string;
}
export interface LinkResponse {
    depositAddr: string;
}
/** MsgConfirmDeposit represents a deposit confirmation message */
export interface ConfirmDepositRequest {
    sender: Uint8Array;
    depositAddress: Uint8Array;
    denom: string;
}
export interface ConfirmDepositResponse {
}
/**
 * MsgExecutePendingTransfers represents a message to trigger transfer all
 * pending transfers
 */
export interface ExecutePendingTransfersRequest {
    sender: Uint8Array;
}
export interface ExecutePendingTransfersResponse {
}
/**
 * MSgRegisterIBCPath represents a message to register an IBC tracing path for
 * a cosmos chain
 */
export interface RegisterIBCPathRequest {
    sender: Uint8Array;
    chain: string;
    path: string;
}
export interface RegisterIBCPathResponse {
}
/**
 * MsgAddCosmosBasedChain represents a message to register a cosmos based chain
 * to nexus
 */
export interface AddCosmosBasedChainRequest {
    sender: Uint8Array;
    chain: Chain;
    addrPrefix: string;
    nativeAssets: Asset[];
}
export interface AddCosmosBasedChainResponse {
}
/**
 * RegisterAssetRequest represents a message to register an asset to a cosmos
 * based chain
 */
export interface RegisterAssetRequest {
    sender: Uint8Array;
    chain: string;
    asset: Asset;
}
export interface RegisterAssetResponse {
}
/**
 * RouteIBCTransfersRequest represents a message to route pending transfers to
 * cosmos based chains
 */
export interface RouteIBCTransfersRequest {
    sender: Uint8Array;
}
export interface RouteIBCTransfersResponse {
}
/**
 * RegisterFeeCollectorRequest represents a message to register axelarnet fee
 * collector account
 */
export interface RegisterFeeCollectorRequest {
    sender: Uint8Array;
    feeCollector: Uint8Array;
}
export interface RegisterFeeCollectorResponse {
}
export interface RetryIBCTransferRequest {
    sender: Uint8Array;
    chain: string;
    id: Long;
}
export interface RetryIBCTransferResponse {
}
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
export declare const ExecutePendingTransfersRequest: {
    encode(message: ExecutePendingTransfersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExecutePendingTransfersRequest;
    fromJSON(object: any): ExecutePendingTransfersRequest;
    toJSON(message: ExecutePendingTransfersRequest): unknown;
    fromPartial(object: DeepPartial<ExecutePendingTransfersRequest>): ExecutePendingTransfersRequest;
};
export declare const ExecutePendingTransfersResponse: {
    encode(_: ExecutePendingTransfersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExecutePendingTransfersResponse;
    fromJSON(_: any): ExecutePendingTransfersResponse;
    toJSON(_: ExecutePendingTransfersResponse): unknown;
    fromPartial(_: DeepPartial<ExecutePendingTransfersResponse>): ExecutePendingTransfersResponse;
};
export declare const RegisterIBCPathRequest: {
    encode(message: RegisterIBCPathRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterIBCPathRequest;
    fromJSON(object: any): RegisterIBCPathRequest;
    toJSON(message: RegisterIBCPathRequest): unknown;
    fromPartial(object: DeepPartial<RegisterIBCPathRequest>): RegisterIBCPathRequest;
};
export declare const RegisterIBCPathResponse: {
    encode(_: RegisterIBCPathResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterIBCPathResponse;
    fromJSON(_: any): RegisterIBCPathResponse;
    toJSON(_: RegisterIBCPathResponse): unknown;
    fromPartial(_: DeepPartial<RegisterIBCPathResponse>): RegisterIBCPathResponse;
};
export declare const AddCosmosBasedChainRequest: {
    encode(message: AddCosmosBasedChainRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddCosmosBasedChainRequest;
    fromJSON(object: any): AddCosmosBasedChainRequest;
    toJSON(message: AddCosmosBasedChainRequest): unknown;
    fromPartial(object: DeepPartial<AddCosmosBasedChainRequest>): AddCosmosBasedChainRequest;
};
export declare const AddCosmosBasedChainResponse: {
    encode(_: AddCosmosBasedChainResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddCosmosBasedChainResponse;
    fromJSON(_: any): AddCosmosBasedChainResponse;
    toJSON(_: AddCosmosBasedChainResponse): unknown;
    fromPartial(_: DeepPartial<AddCosmosBasedChainResponse>): AddCosmosBasedChainResponse;
};
export declare const RegisterAssetRequest: {
    encode(message: RegisterAssetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterAssetRequest;
    fromJSON(object: any): RegisterAssetRequest;
    toJSON(message: RegisterAssetRequest): unknown;
    fromPartial(object: DeepPartial<RegisterAssetRequest>): RegisterAssetRequest;
};
export declare const RegisterAssetResponse: {
    encode(_: RegisterAssetResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterAssetResponse;
    fromJSON(_: any): RegisterAssetResponse;
    toJSON(_: RegisterAssetResponse): unknown;
    fromPartial(_: DeepPartial<RegisterAssetResponse>): RegisterAssetResponse;
};
export declare const RouteIBCTransfersRequest: {
    encode(message: RouteIBCTransfersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RouteIBCTransfersRequest;
    fromJSON(object: any): RouteIBCTransfersRequest;
    toJSON(message: RouteIBCTransfersRequest): unknown;
    fromPartial(object: DeepPartial<RouteIBCTransfersRequest>): RouteIBCTransfersRequest;
};
export declare const RouteIBCTransfersResponse: {
    encode(_: RouteIBCTransfersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RouteIBCTransfersResponse;
    fromJSON(_: any): RouteIBCTransfersResponse;
    toJSON(_: RouteIBCTransfersResponse): unknown;
    fromPartial(_: DeepPartial<RouteIBCTransfersResponse>): RouteIBCTransfersResponse;
};
export declare const RegisterFeeCollectorRequest: {
    encode(message: RegisterFeeCollectorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterFeeCollectorRequest;
    fromJSON(object: any): RegisterFeeCollectorRequest;
    toJSON(message: RegisterFeeCollectorRequest): unknown;
    fromPartial(object: DeepPartial<RegisterFeeCollectorRequest>): RegisterFeeCollectorRequest;
};
export declare const RegisterFeeCollectorResponse: {
    encode(_: RegisterFeeCollectorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterFeeCollectorResponse;
    fromJSON(_: any): RegisterFeeCollectorResponse;
    toJSON(_: RegisterFeeCollectorResponse): unknown;
    fromPartial(_: DeepPartial<RegisterFeeCollectorResponse>): RegisterFeeCollectorResponse;
};
export declare const RetryIBCTransferRequest: {
    encode(message: RetryIBCTransferRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RetryIBCTransferRequest;
    fromJSON(object: any): RetryIBCTransferRequest;
    toJSON(message: RetryIBCTransferRequest): unknown;
    fromPartial(object: DeepPartial<RetryIBCTransferRequest>): RetryIBCTransferRequest;
};
export declare const RetryIBCTransferResponse: {
    encode(_: RetryIBCTransferResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RetryIBCTransferResponse;
    fromJSON(_: any): RetryIBCTransferResponse;
    toJSON(_: RetryIBCTransferResponse): unknown;
    fromPartial(_: DeepPartial<RetryIBCTransferResponse>): RetryIBCTransferResponse;
};
