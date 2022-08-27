import { Status } from "../../oracle/v1/types";
import { EthBridgeClaim } from "./types";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** QueryEthProphecyRequest payload for EthProphecy rpc query */
export interface QueryEthProphecyRequest {
    ethereumChainId: Long;
    /** bridge_contract_address is an EthereumAddress */
    bridgeContractAddress: string;
    nonce: Long;
    symbol: string;
    /** token_contract_address is an EthereumAddress */
    tokenContractAddress: string;
    /** ethereum_sender is an EthereumAddress */
    ethereumSender: string;
}
/** QueryEthProphecyResponse payload for EthProphecy rpc query */
export interface QueryEthProphecyResponse {
    id: string;
    status: Status;
    claims: EthBridgeClaim[];
}
export interface QueryBlacklistRequest {
}
export interface QueryBlacklistResponse {
    addresses: string[];
}
export declare const QueryEthProphecyRequest: {
    encode(message: QueryEthProphecyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEthProphecyRequest;
    fromJSON(object: any): QueryEthProphecyRequest;
    toJSON(message: QueryEthProphecyRequest): unknown;
    fromPartial(object: DeepPartial<QueryEthProphecyRequest>): QueryEthProphecyRequest;
};
export declare const QueryEthProphecyResponse: {
    encode(message: QueryEthProphecyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEthProphecyResponse;
    fromJSON(object: any): QueryEthProphecyResponse;
    toJSON(message: QueryEthProphecyResponse): unknown;
    fromPartial(object: DeepPartial<QueryEthProphecyResponse>): QueryEthProphecyResponse;
};
export declare const QueryBlacklistRequest: {
    encode(_: QueryBlacklistRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBlacklistRequest;
    fromJSON(_: any): QueryBlacklistRequest;
    toJSON(_: QueryBlacklistRequest): unknown;
    fromPartial(_: DeepPartial<QueryBlacklistRequest>): QueryBlacklistRequest;
};
export declare const QueryBlacklistResponse: {
    encode(message: QueryBlacklistResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBlacklistResponse;
    fromJSON(object: any): QueryBlacklistResponse;
    toJSON(message: QueryBlacklistResponse): unknown;
    fromPartial(object: DeepPartial<QueryBlacklistResponse>): QueryBlacklistResponse;
};
