import { TransferState, CrossChainTransfer, FeeInfo } from "../exported/v1beta1/types";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { ChainState } from "./types";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export declare enum ChainStatus {
    CHAIN_STATUS_UNSPECIFIED = 0,
    CHAIN_STATUS_ACTIVATED = 1,
    CHAIN_STATUS_DEACTIVATED = 2,
    UNRECOGNIZED = -1
}
export declare function chainStatusFromJSON(object: any): ChainStatus;
export declare function chainStatusToJSON(object: ChainStatus): string;
export interface QueryChainMaintainersResponse {
    maintainers: Uint8Array[];
}
/**
 * LatestDepositAddressRequest represents a message that queries a deposit
 * address by recipient address
 */
export interface LatestDepositAddressRequest {
    recipientAddr: string;
    recipientChain: string;
    depositChain: string;
}
export interface LatestDepositAddressResponse {
    depositAddr: string;
}
/**
 * TransfersForChainRequest represents a message that queries the
 * transfers for the specified chain
 */
export interface TransfersForChainRequest {
    chain: string;
    state: TransferState;
    pagination: PageRequest;
}
export interface TransfersForChainResponse {
    transfers: CrossChainTransfer[];
    pagination: PageResponse;
}
/**
 * FeeInfoRequest represents a message that queries the transfer fees associated
 * to an asset on a chain
 */
export interface FeeInfoRequest {
    chain: string;
    asset: string;
}
export interface FeeInfoResponse {
    feeInfo: FeeInfo;
}
/**
 * TransferFeeRequest represents a message that queries the fees charged by
 * the network for a cross-chain transfer
 */
export interface TransferFeeRequest {
    sourceChain: string;
    destinationChain: string;
    amount: string;
}
export interface TransferFeeResponse {
    fee: Coin;
}
/**
 * ChainsRequest represents a message that queries the chains
 * registered on the network
 */
export interface ChainsRequest {
    /**
     * ChainsRequest represents a message that queries the chains
     * registered on the network
     */
    status: ChainStatus;
}
export interface ChainsResponse {
    chains: string[];
}
/**
 * AssetsRequest represents a message that queries the registered assets of a
 * chain
 */
export interface AssetsRequest {
    /**
     * AssetsRequest represents a message that queries the registered assets of a
     * chain
     */
    chain: string;
}
export interface AssetsResponse {
    assets: string[];
}
/**
 * ChainStateRequest represents a message that queries the state of a chain
 * registered on the network
 */
export interface ChainStateRequest {
    /**
     * ChainStateRequest represents a message that queries the state of a chain
     * registered on the network
     */
    chain: string;
}
export interface ChainStateResponse {
    state: ChainState;
}
/**
 * ChainsByAssetRequest represents a message that queries the chains
 * that support an asset on the network
 */
export interface ChainsByAssetRequest {
    /**
     * ChainsByAssetRequest represents a message that queries the chains
     * that support an asset on the network
     */
    asset: string;
}
export interface ChainsByAssetResponse {
    chains: string[];
}
/**
 * RecipientAddressRequest represents a message that queries the registered
 * recipient address for a given deposit address
 */
export interface RecipientAddressRequest {
    depositAddr: string;
    depositChain: string;
}
export interface RecipientAddressResponse {
    recipientAddr: string;
    recipientChain: string;
}
export declare const QueryChainMaintainersResponse: {
    encode(message: QueryChainMaintainersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryChainMaintainersResponse;
    fromJSON(object: any): QueryChainMaintainersResponse;
    toJSON(message: QueryChainMaintainersResponse): unknown;
    fromPartial(object: DeepPartial<QueryChainMaintainersResponse>): QueryChainMaintainersResponse;
};
export declare const LatestDepositAddressRequest: {
    encode(message: LatestDepositAddressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LatestDepositAddressRequest;
    fromJSON(object: any): LatestDepositAddressRequest;
    toJSON(message: LatestDepositAddressRequest): unknown;
    fromPartial(object: DeepPartial<LatestDepositAddressRequest>): LatestDepositAddressRequest;
};
export declare const LatestDepositAddressResponse: {
    encode(message: LatestDepositAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LatestDepositAddressResponse;
    fromJSON(object: any): LatestDepositAddressResponse;
    toJSON(message: LatestDepositAddressResponse): unknown;
    fromPartial(object: DeepPartial<LatestDepositAddressResponse>): LatestDepositAddressResponse;
};
export declare const TransfersForChainRequest: {
    encode(message: TransfersForChainRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TransfersForChainRequest;
    fromJSON(object: any): TransfersForChainRequest;
    toJSON(message: TransfersForChainRequest): unknown;
    fromPartial(object: DeepPartial<TransfersForChainRequest>): TransfersForChainRequest;
};
export declare const TransfersForChainResponse: {
    encode(message: TransfersForChainResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TransfersForChainResponse;
    fromJSON(object: any): TransfersForChainResponse;
    toJSON(message: TransfersForChainResponse): unknown;
    fromPartial(object: DeepPartial<TransfersForChainResponse>): TransfersForChainResponse;
};
export declare const FeeInfoRequest: {
    encode(message: FeeInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeeInfoRequest;
    fromJSON(object: any): FeeInfoRequest;
    toJSON(message: FeeInfoRequest): unknown;
    fromPartial(object: DeepPartial<FeeInfoRequest>): FeeInfoRequest;
};
export declare const FeeInfoResponse: {
    encode(message: FeeInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeeInfoResponse;
    fromJSON(object: any): FeeInfoResponse;
    toJSON(message: FeeInfoResponse): unknown;
    fromPartial(object: DeepPartial<FeeInfoResponse>): FeeInfoResponse;
};
export declare const TransferFeeRequest: {
    encode(message: TransferFeeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TransferFeeRequest;
    fromJSON(object: any): TransferFeeRequest;
    toJSON(message: TransferFeeRequest): unknown;
    fromPartial(object: DeepPartial<TransferFeeRequest>): TransferFeeRequest;
};
export declare const TransferFeeResponse: {
    encode(message: TransferFeeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TransferFeeResponse;
    fromJSON(object: any): TransferFeeResponse;
    toJSON(message: TransferFeeResponse): unknown;
    fromPartial(object: DeepPartial<TransferFeeResponse>): TransferFeeResponse;
};
export declare const ChainsRequest: {
    encode(message: ChainsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChainsRequest;
    fromJSON(object: any): ChainsRequest;
    toJSON(message: ChainsRequest): unknown;
    fromPartial(object: DeepPartial<ChainsRequest>): ChainsRequest;
};
export declare const ChainsResponse: {
    encode(message: ChainsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChainsResponse;
    fromJSON(object: any): ChainsResponse;
    toJSON(message: ChainsResponse): unknown;
    fromPartial(object: DeepPartial<ChainsResponse>): ChainsResponse;
};
export declare const AssetsRequest: {
    encode(message: AssetsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AssetsRequest;
    fromJSON(object: any): AssetsRequest;
    toJSON(message: AssetsRequest): unknown;
    fromPartial(object: DeepPartial<AssetsRequest>): AssetsRequest;
};
export declare const AssetsResponse: {
    encode(message: AssetsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AssetsResponse;
    fromJSON(object: any): AssetsResponse;
    toJSON(message: AssetsResponse): unknown;
    fromPartial(object: DeepPartial<AssetsResponse>): AssetsResponse;
};
export declare const ChainStateRequest: {
    encode(message: ChainStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChainStateRequest;
    fromJSON(object: any): ChainStateRequest;
    toJSON(message: ChainStateRequest): unknown;
    fromPartial(object: DeepPartial<ChainStateRequest>): ChainStateRequest;
};
export declare const ChainStateResponse: {
    encode(message: ChainStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChainStateResponse;
    fromJSON(object: any): ChainStateResponse;
    toJSON(message: ChainStateResponse): unknown;
    fromPartial(object: DeepPartial<ChainStateResponse>): ChainStateResponse;
};
export declare const ChainsByAssetRequest: {
    encode(message: ChainsByAssetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChainsByAssetRequest;
    fromJSON(object: any): ChainsByAssetRequest;
    toJSON(message: ChainsByAssetRequest): unknown;
    fromPartial(object: DeepPartial<ChainsByAssetRequest>): ChainsByAssetRequest;
};
export declare const ChainsByAssetResponse: {
    encode(message: ChainsByAssetResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChainsByAssetResponse;
    fromJSON(object: any): ChainsByAssetResponse;
    toJSON(message: ChainsByAssetResponse): unknown;
    fromPartial(object: DeepPartial<ChainsByAssetResponse>): ChainsByAssetResponse;
};
export declare const RecipientAddressRequest: {
    encode(message: RecipientAddressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RecipientAddressRequest;
    fromJSON(object: any): RecipientAddressRequest;
    toJSON(message: RecipientAddressRequest): unknown;
    fromPartial(object: DeepPartial<RecipientAddressRequest>): RecipientAddressRequest;
};
export declare const RecipientAddressResponse: {
    encode(message: RecipientAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RecipientAddressResponse;
    fromJSON(object: any): RecipientAddressResponse;
    toJSON(message: RecipientAddressResponse): unknown;
    fromPartial(object: DeepPartial<RecipientAddressResponse>): RecipientAddressResponse;
};
