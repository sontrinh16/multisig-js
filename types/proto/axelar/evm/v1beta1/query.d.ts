import { BatchedCommandsStatus, DepositStatus, Event, BurnerInfo, TokenDetails } from "./types";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export declare enum TokenType {
    TOKEN_TYPE_UNSPECIFIED = 0,
    TOKEN_TYPE_INTERNAL = 1,
    TOKEN_TYPE_EXTERNAL = 2,
    UNRECOGNIZED = -1
}
export declare function tokenTypeFromJSON(object: any): TokenType;
export declare function tokenTypeToJSON(object: TokenType): string;
/**
 * DepositQueryParams describe the parameters used to query for an EVM
 * deposit address
 */
export interface DepositQueryParams {
    address: string;
    asset: string;
    chain: string;
}
export interface BatchedCommandsRequest {
    chain: string;
    /**
     * id defines an optional id for the commandsbatch. If not specified the
     * latest will be returned
     */
    id: string;
}
export interface BatchedCommandsResponse {
    id: string;
    data: string;
    status: BatchedCommandsStatus;
    keyId: string;
    executeData: string;
    prevBatchedCommandsId: string;
    commandIds: string[];
    proof: Proof;
}
export interface KeyAddressRequest {
    chain: string;
    keyId: string;
}
export interface KeyAddressResponse {
    keyId: string;
    addresses: KeyAddressResponse_WeightedAddress[];
    threshold: string;
}
export interface KeyAddressResponse_WeightedAddress {
    address: string;
    weight: string;
}
/** @deprecated */
export interface QueryTokenAddressResponse {
    address: string;
    confirmed: boolean;
}
export interface QueryDepositStateParams {
    txId: Uint8Array;
    burnerAddress: Uint8Array;
}
export interface DepositStateRequest {
    chain: string;
    params: QueryDepositStateParams;
}
export interface DepositStateResponse {
    status: DepositStatus;
}
export interface EventRequest {
    chain: string;
    eventId: string;
}
export interface EventResponse {
    event: Event;
}
export interface QueryBurnerAddressResponse {
    address: string;
}
export interface ChainsRequest {
}
export interface ChainsResponse {
    chains: string[];
}
export interface PendingCommandsRequest {
    chain: string;
}
export interface PendingCommandsResponse {
    commands: QueryCommandResponse[];
}
export interface QueryCommandResponse_ParamsEntry {
    key: string;
    value: string;
}
export interface QueryCommandResponse {
    id: string;
    type: string;
    params: {
        [key: string]: string;
    };
    keyId: string;
    maxGasCost: number;
}
export interface BurnerInfoRequest {
    address: Uint8Array;
}
export interface BurnerInfoResponse {
    chain: string;
    burnerInfo: BurnerInfo;
}
export interface ConfirmationHeightRequest {
    chain: string;
}
export interface ConfirmationHeightResponse {
    height: Long;
}
export interface GatewayAddressRequest {
    chain: string;
}
export interface GatewayAddressResponse {
    address: string;
}
export interface BytecodeRequest {
    chain: string;
    contract: string;
}
export interface BytecodeResponse {
    bytecode: string;
}
/**
 * ERC20TokensRequest describes the chain for which the type of ERC20 tokens are
 * requested.
 */
export interface ERC20TokensRequest {
    chain: string;
    type: TokenType;
}
/**
 * ERC20TokensResponse describes the asset and symbol for all
 * ERC20 tokens requested for a chain
 */
export interface ERC20TokensResponse {
    tokens: ERC20TokensResponse_Token[];
}
export interface ERC20TokensResponse_Token {
    asset: string;
    symbol: string;
}
export interface TokenInfoRequest {
    chain: string;
    asset?: string;
    symbol?: string;
}
export interface TokenInfoResponse {
    asset: string;
    details: TokenDetails;
    address: string;
    confirmed: boolean;
    isExternal: boolean;
    burnerCodeHash: string;
}
export interface Proof {
    addresses: string[];
    weights: string[];
    threshold: string;
    signatures: string[];
}
export declare const DepositQueryParams: {
    encode(message: DepositQueryParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DepositQueryParams;
    fromJSON(object: any): DepositQueryParams;
    toJSON(message: DepositQueryParams): unknown;
    fromPartial(object: DeepPartial<DepositQueryParams>): DepositQueryParams;
};
export declare const BatchedCommandsRequest: {
    encode(message: BatchedCommandsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchedCommandsRequest;
    fromJSON(object: any): BatchedCommandsRequest;
    toJSON(message: BatchedCommandsRequest): unknown;
    fromPartial(object: DeepPartial<BatchedCommandsRequest>): BatchedCommandsRequest;
};
export declare const BatchedCommandsResponse: {
    encode(message: BatchedCommandsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchedCommandsResponse;
    fromJSON(object: any): BatchedCommandsResponse;
    toJSON(message: BatchedCommandsResponse): unknown;
    fromPartial(object: DeepPartial<BatchedCommandsResponse>): BatchedCommandsResponse;
};
export declare const KeyAddressRequest: {
    encode(message: KeyAddressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeyAddressRequest;
    fromJSON(object: any): KeyAddressRequest;
    toJSON(message: KeyAddressRequest): unknown;
    fromPartial(object: DeepPartial<KeyAddressRequest>): KeyAddressRequest;
};
export declare const KeyAddressResponse: {
    encode(message: KeyAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeyAddressResponse;
    fromJSON(object: any): KeyAddressResponse;
    toJSON(message: KeyAddressResponse): unknown;
    fromPartial(object: DeepPartial<KeyAddressResponse>): KeyAddressResponse;
};
export declare const KeyAddressResponse_WeightedAddress: {
    encode(message: KeyAddressResponse_WeightedAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeyAddressResponse_WeightedAddress;
    fromJSON(object: any): KeyAddressResponse_WeightedAddress;
    toJSON(message: KeyAddressResponse_WeightedAddress): unknown;
    fromPartial(object: DeepPartial<KeyAddressResponse_WeightedAddress>): KeyAddressResponse_WeightedAddress;
};
export declare const QueryTokenAddressResponse: {
    encode(message: QueryTokenAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenAddressResponse;
    fromJSON(object: any): QueryTokenAddressResponse;
    toJSON(message: QueryTokenAddressResponse): unknown;
    fromPartial(object: DeepPartial<QueryTokenAddressResponse>): QueryTokenAddressResponse;
};
export declare const QueryDepositStateParams: {
    encode(message: QueryDepositStateParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositStateParams;
    fromJSON(object: any): QueryDepositStateParams;
    toJSON(message: QueryDepositStateParams): unknown;
    fromPartial(object: DeepPartial<QueryDepositStateParams>): QueryDepositStateParams;
};
export declare const DepositStateRequest: {
    encode(message: DepositStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DepositStateRequest;
    fromJSON(object: any): DepositStateRequest;
    toJSON(message: DepositStateRequest): unknown;
    fromPartial(object: DeepPartial<DepositStateRequest>): DepositStateRequest;
};
export declare const DepositStateResponse: {
    encode(message: DepositStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DepositStateResponse;
    fromJSON(object: any): DepositStateResponse;
    toJSON(message: DepositStateResponse): unknown;
    fromPartial(object: DeepPartial<DepositStateResponse>): DepositStateResponse;
};
export declare const EventRequest: {
    encode(message: EventRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventRequest;
    fromJSON(object: any): EventRequest;
    toJSON(message: EventRequest): unknown;
    fromPartial(object: DeepPartial<EventRequest>): EventRequest;
};
export declare const EventResponse: {
    encode(message: EventResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventResponse;
    fromJSON(object: any): EventResponse;
    toJSON(message: EventResponse): unknown;
    fromPartial(object: DeepPartial<EventResponse>): EventResponse;
};
export declare const QueryBurnerAddressResponse: {
    encode(message: QueryBurnerAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBurnerAddressResponse;
    fromJSON(object: any): QueryBurnerAddressResponse;
    toJSON(message: QueryBurnerAddressResponse): unknown;
    fromPartial(object: DeepPartial<QueryBurnerAddressResponse>): QueryBurnerAddressResponse;
};
export declare const ChainsRequest: {
    encode(_: ChainsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChainsRequest;
    fromJSON(_: any): ChainsRequest;
    toJSON(_: ChainsRequest): unknown;
    fromPartial(_: DeepPartial<ChainsRequest>): ChainsRequest;
};
export declare const ChainsResponse: {
    encode(message: ChainsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChainsResponse;
    fromJSON(object: any): ChainsResponse;
    toJSON(message: ChainsResponse): unknown;
    fromPartial(object: DeepPartial<ChainsResponse>): ChainsResponse;
};
export declare const PendingCommandsRequest: {
    encode(message: PendingCommandsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PendingCommandsRequest;
    fromJSON(object: any): PendingCommandsRequest;
    toJSON(message: PendingCommandsRequest): unknown;
    fromPartial(object: DeepPartial<PendingCommandsRequest>): PendingCommandsRequest;
};
export declare const PendingCommandsResponse: {
    encode(message: PendingCommandsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PendingCommandsResponse;
    fromJSON(object: any): PendingCommandsResponse;
    toJSON(message: PendingCommandsResponse): unknown;
    fromPartial(object: DeepPartial<PendingCommandsResponse>): PendingCommandsResponse;
};
export declare const QueryCommandResponse_ParamsEntry: {
    encode(message: QueryCommandResponse_ParamsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCommandResponse_ParamsEntry;
    fromJSON(object: any): QueryCommandResponse_ParamsEntry;
    toJSON(message: QueryCommandResponse_ParamsEntry): unknown;
    fromPartial(object: DeepPartial<QueryCommandResponse_ParamsEntry>): QueryCommandResponse_ParamsEntry;
};
export declare const QueryCommandResponse: {
    encode(message: QueryCommandResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCommandResponse;
    fromJSON(object: any): QueryCommandResponse;
    toJSON(message: QueryCommandResponse): unknown;
    fromPartial(object: DeepPartial<QueryCommandResponse>): QueryCommandResponse;
};
export declare const BurnerInfoRequest: {
    encode(message: BurnerInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BurnerInfoRequest;
    fromJSON(object: any): BurnerInfoRequest;
    toJSON(message: BurnerInfoRequest): unknown;
    fromPartial(object: DeepPartial<BurnerInfoRequest>): BurnerInfoRequest;
};
export declare const BurnerInfoResponse: {
    encode(message: BurnerInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BurnerInfoResponse;
    fromJSON(object: any): BurnerInfoResponse;
    toJSON(message: BurnerInfoResponse): unknown;
    fromPartial(object: DeepPartial<BurnerInfoResponse>): BurnerInfoResponse;
};
export declare const ConfirmationHeightRequest: {
    encode(message: ConfirmationHeightRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConfirmationHeightRequest;
    fromJSON(object: any): ConfirmationHeightRequest;
    toJSON(message: ConfirmationHeightRequest): unknown;
    fromPartial(object: DeepPartial<ConfirmationHeightRequest>): ConfirmationHeightRequest;
};
export declare const ConfirmationHeightResponse: {
    encode(message: ConfirmationHeightResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConfirmationHeightResponse;
    fromJSON(object: any): ConfirmationHeightResponse;
    toJSON(message: ConfirmationHeightResponse): unknown;
    fromPartial(object: DeepPartial<ConfirmationHeightResponse>): ConfirmationHeightResponse;
};
export declare const GatewayAddressRequest: {
    encode(message: GatewayAddressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GatewayAddressRequest;
    fromJSON(object: any): GatewayAddressRequest;
    toJSON(message: GatewayAddressRequest): unknown;
    fromPartial(object: DeepPartial<GatewayAddressRequest>): GatewayAddressRequest;
};
export declare const GatewayAddressResponse: {
    encode(message: GatewayAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GatewayAddressResponse;
    fromJSON(object: any): GatewayAddressResponse;
    toJSON(message: GatewayAddressResponse): unknown;
    fromPartial(object: DeepPartial<GatewayAddressResponse>): GatewayAddressResponse;
};
export declare const BytecodeRequest: {
    encode(message: BytecodeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BytecodeRequest;
    fromJSON(object: any): BytecodeRequest;
    toJSON(message: BytecodeRequest): unknown;
    fromPartial(object: DeepPartial<BytecodeRequest>): BytecodeRequest;
};
export declare const BytecodeResponse: {
    encode(message: BytecodeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BytecodeResponse;
    fromJSON(object: any): BytecodeResponse;
    toJSON(message: BytecodeResponse): unknown;
    fromPartial(object: DeepPartial<BytecodeResponse>): BytecodeResponse;
};
export declare const ERC20TokensRequest: {
    encode(message: ERC20TokensRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ERC20TokensRequest;
    fromJSON(object: any): ERC20TokensRequest;
    toJSON(message: ERC20TokensRequest): unknown;
    fromPartial(object: DeepPartial<ERC20TokensRequest>): ERC20TokensRequest;
};
export declare const ERC20TokensResponse: {
    encode(message: ERC20TokensResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ERC20TokensResponse;
    fromJSON(object: any): ERC20TokensResponse;
    toJSON(message: ERC20TokensResponse): unknown;
    fromPartial(object: DeepPartial<ERC20TokensResponse>): ERC20TokensResponse;
};
export declare const ERC20TokensResponse_Token: {
    encode(message: ERC20TokensResponse_Token, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ERC20TokensResponse_Token;
    fromJSON(object: any): ERC20TokensResponse_Token;
    toJSON(message: ERC20TokensResponse_Token): unknown;
    fromPartial(object: DeepPartial<ERC20TokensResponse_Token>): ERC20TokensResponse_Token;
};
export declare const TokenInfoRequest: {
    encode(message: TokenInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TokenInfoRequest;
    fromJSON(object: any): TokenInfoRequest;
    toJSON(message: TokenInfoRequest): unknown;
    fromPartial(object: DeepPartial<TokenInfoRequest>): TokenInfoRequest;
};
export declare const TokenInfoResponse: {
    encode(message: TokenInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TokenInfoResponse;
    fromJSON(object: any): TokenInfoResponse;
    toJSON(message: TokenInfoResponse): unknown;
    fromPartial(object: DeepPartial<TokenInfoResponse>): TokenInfoResponse;
};
export declare const Proof: {
    encode(message: Proof, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Proof;
    fromJSON(object: any): Proof;
    toJSON(message: Proof): unknown;
    fromPartial(object: DeepPartial<Proof>): Proof;
};
