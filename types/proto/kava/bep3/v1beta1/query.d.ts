import { SwapStatus, SwapDirection, Params } from "./bep3";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Duration } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** QueryParamsRequest defines the request type for querying x/bep3 parameters. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse defines the response type for querying x/bep3 parameters. */
export interface QueryParamsResponse {
    /** params represents the parameters of the module */
    params: Params;
}
/** QueryAssetSupplyRequest is the request type for the Query/AssetSupply RPC method. */
export interface QueryAssetSupplyRequest {
    /** denom filters the asset response for the specified denom */
    denom: string;
}
/** AssetSupplyResponse defines information about an asset's supply. */
export interface AssetSupplyResponse {
    /** incoming_supply represents the incoming supply of an asset */
    incomingSupply: Coin;
    /** outgoing_supply represents the outgoing supply of an asset */
    outgoingSupply: Coin;
    /** current_supply represents the current on-chain supply of an asset */
    currentSupply: Coin;
    /** time_limited_current_supply represents the time limited current supply of an asset */
    timeLimitedCurrentSupply: Coin;
    /** time_elapsed represents the time elapsed */
    timeElapsed: Duration;
}
/** QueryAssetSupplyResponse is the response type for the Query/AssetSupply RPC method. */
export interface QueryAssetSupplyResponse {
    /** asset_supply represents the supply of the asset */
    assetSupply: AssetSupplyResponse;
}
/** QueryAssetSuppliesRequest is the request type for the Query/AssetSupplies RPC method. */
export interface QueryAssetSuppliesRequest {
}
/** QueryAssetSuppliesResponse is the response type for the Query/AssetSupplies RPC method. */
export interface QueryAssetSuppliesResponse {
    /** asset_supplies represents the supplies of returned assets */
    assetSupplies: AssetSupplyResponse[];
}
/** QueryAtomicSwapRequest is the request type for the Query/AtomicSwap RPC method. */
export interface QueryAtomicSwapRequest {
    /** swap_id represents the id of the swap to query */
    swapId: string;
}
/** QueryAtomicSwapResponse is the response type for the Query/AtomicSwap RPC method. */
export interface QueryAtomicSwapResponse {
    atomicSwap: AtomicSwapResponse;
}
/** AtomicSwapResponse represents the returned atomic swap properties */
export interface AtomicSwapResponse {
    /** id represents the id of the atomic swap */
    id: string;
    /** amount represents the amount being swapped */
    amount: Coin[];
    /** random_number_hash represents the hash of the random number */
    randomNumberHash: string;
    /** expire_height represents the height when the swap expires */
    expireHeight: Long;
    /** timestamp represents the timestamp of the swap */
    timestamp: Long;
    /** sender is the kava chain sender of the swap */
    sender: string;
    /** recipient is the kava chain recipient of the swap */
    recipient: string;
    /** sender_other_chain is the sender on the other chain */
    senderOtherChain: string;
    /** recipient_other_chain is the recipient on the other chain */
    recipientOtherChain: string;
    /** closed_block is the block when the swap is closed */
    closedBlock: Long;
    /** status represents the current status of the swap */
    status: SwapStatus;
    /** cross_chain identifies whether the atomic swap is cross chain */
    crossChain: boolean;
    /** direction identifies if the swap is incoming or outgoing */
    direction: SwapDirection;
}
/** QueryAtomicSwapsRequest is the request type for the Query/AtomicSwaps RPC method. */
export interface QueryAtomicSwapsRequest {
    /** involve filters by address */
    involve: string;
    /** expiration filters by expiration block height */
    expiration: Long;
    /** status filters by swap status */
    status: SwapStatus;
    /** direction fitlers by swap direction */
    direction: SwapDirection;
    pagination: PageRequest;
}
/** QueryAtomicSwapsResponse is the response type for the Query/AtomicSwaps RPC method. */
export interface QueryAtomicSwapsResponse {
    /** atomic_swap represents the returned atomic swaps for the request */
    atomicSwaps: AtomicSwapResponse[];
    pagination: PageResponse;
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
export declare const QueryAssetSupplyRequest: {
    encode(message: QueryAssetSupplyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAssetSupplyRequest;
    fromJSON(object: any): QueryAssetSupplyRequest;
    toJSON(message: QueryAssetSupplyRequest): unknown;
    fromPartial(object: DeepPartial<QueryAssetSupplyRequest>): QueryAssetSupplyRequest;
};
export declare const AssetSupplyResponse: {
    encode(message: AssetSupplyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AssetSupplyResponse;
    fromJSON(object: any): AssetSupplyResponse;
    toJSON(message: AssetSupplyResponse): unknown;
    fromPartial(object: DeepPartial<AssetSupplyResponse>): AssetSupplyResponse;
};
export declare const QueryAssetSupplyResponse: {
    encode(message: QueryAssetSupplyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAssetSupplyResponse;
    fromJSON(object: any): QueryAssetSupplyResponse;
    toJSON(message: QueryAssetSupplyResponse): unknown;
    fromPartial(object: DeepPartial<QueryAssetSupplyResponse>): QueryAssetSupplyResponse;
};
export declare const QueryAssetSuppliesRequest: {
    encode(_: QueryAssetSuppliesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAssetSuppliesRequest;
    fromJSON(_: any): QueryAssetSuppliesRequest;
    toJSON(_: QueryAssetSuppliesRequest): unknown;
    fromPartial(_: DeepPartial<QueryAssetSuppliesRequest>): QueryAssetSuppliesRequest;
};
export declare const QueryAssetSuppliesResponse: {
    encode(message: QueryAssetSuppliesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAssetSuppliesResponse;
    fromJSON(object: any): QueryAssetSuppliesResponse;
    toJSON(message: QueryAssetSuppliesResponse): unknown;
    fromPartial(object: DeepPartial<QueryAssetSuppliesResponse>): QueryAssetSuppliesResponse;
};
export declare const QueryAtomicSwapRequest: {
    encode(message: QueryAtomicSwapRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAtomicSwapRequest;
    fromJSON(object: any): QueryAtomicSwapRequest;
    toJSON(message: QueryAtomicSwapRequest): unknown;
    fromPartial(object: DeepPartial<QueryAtomicSwapRequest>): QueryAtomicSwapRequest;
};
export declare const QueryAtomicSwapResponse: {
    encode(message: QueryAtomicSwapResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAtomicSwapResponse;
    fromJSON(object: any): QueryAtomicSwapResponse;
    toJSON(message: QueryAtomicSwapResponse): unknown;
    fromPartial(object: DeepPartial<QueryAtomicSwapResponse>): QueryAtomicSwapResponse;
};
export declare const AtomicSwapResponse: {
    encode(message: AtomicSwapResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AtomicSwapResponse;
    fromJSON(object: any): AtomicSwapResponse;
    toJSON(message: AtomicSwapResponse): unknown;
    fromPartial(object: DeepPartial<AtomicSwapResponse>): AtomicSwapResponse;
};
export declare const QueryAtomicSwapsRequest: {
    encode(message: QueryAtomicSwapsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAtomicSwapsRequest;
    fromJSON(object: any): QueryAtomicSwapsRequest;
    toJSON(message: QueryAtomicSwapsRequest): unknown;
    fromPartial(object: DeepPartial<QueryAtomicSwapsRequest>): QueryAtomicSwapsRequest;
};
export declare const QueryAtomicSwapsResponse: {
    encode(message: QueryAtomicSwapsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAtomicSwapsResponse;
    fromJSON(object: any): QueryAtomicSwapsResponse;
    toJSON(message: QueryAtomicSwapsResponse): unknown;
    fromPartial(object: DeepPartial<QueryAtomicSwapsResponse>): QueryAtomicSwapsResponse;
};
