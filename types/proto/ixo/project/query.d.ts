import { ProjectDoc, AccountMap, WithdrawalInfoDocs, Params } from "./project";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** QueryProjectDocRequest is the request type for the Query/ProjectDoc RPC method. */
export interface QueryProjectDocRequest {
    projectDid: string;
}
/** QueryProjectDocResponse is the response type for the Query/ProjectDoc RPC method. */
export interface QueryProjectDocResponse {
    projectDoc: ProjectDoc;
}
/** QueryProjectAccountsRequest is the request type for the Query/ProjectAccounts RPC method. */
export interface QueryProjectAccountsRequest {
    projectDid: string;
}
/** QueryProjectAccountsResponse is the response type for the Query/ProjectAccounts RPC method. */
export interface QueryProjectAccountsResponse {
    accountMap: AccountMap;
}
/** QueryProjectTxRequest is the request type for the Query/ProjectTx RPC method. */
export interface QueryProjectTxRequest {
    projectDid: string;
}
/** QueryProjectTxResponse is the response type for the Query/ProjectTx RPC method. */
export interface QueryProjectTxResponse {
    txs: WithdrawalInfoDocs;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    params: Params;
}
export declare const QueryProjectDocRequest: {
    encode(message: QueryProjectDocRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectDocRequest;
    fromJSON(object: any): QueryProjectDocRequest;
    toJSON(message: QueryProjectDocRequest): unknown;
    fromPartial(object: DeepPartial<QueryProjectDocRequest>): QueryProjectDocRequest;
};
export declare const QueryProjectDocResponse: {
    encode(message: QueryProjectDocResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectDocResponse;
    fromJSON(object: any): QueryProjectDocResponse;
    toJSON(message: QueryProjectDocResponse): unknown;
    fromPartial(object: DeepPartial<QueryProjectDocResponse>): QueryProjectDocResponse;
};
export declare const QueryProjectAccountsRequest: {
    encode(message: QueryProjectAccountsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectAccountsRequest;
    fromJSON(object: any): QueryProjectAccountsRequest;
    toJSON(message: QueryProjectAccountsRequest): unknown;
    fromPartial(object: DeepPartial<QueryProjectAccountsRequest>): QueryProjectAccountsRequest;
};
export declare const QueryProjectAccountsResponse: {
    encode(message: QueryProjectAccountsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectAccountsResponse;
    fromJSON(object: any): QueryProjectAccountsResponse;
    toJSON(message: QueryProjectAccountsResponse): unknown;
    fromPartial(object: DeepPartial<QueryProjectAccountsResponse>): QueryProjectAccountsResponse;
};
export declare const QueryProjectTxRequest: {
    encode(message: QueryProjectTxRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectTxRequest;
    fromJSON(object: any): QueryProjectTxRequest;
    toJSON(message: QueryProjectTxRequest): unknown;
    fromPartial(object: DeepPartial<QueryProjectTxRequest>): QueryProjectTxRequest;
};
export declare const QueryProjectTxResponse: {
    encode(message: QueryProjectTxResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectTxResponse;
    fromJSON(object: any): QueryProjectTxResponse;
    toJSON(message: QueryProjectTxResponse): unknown;
    fromPartial(object: DeepPartial<QueryProjectTxResponse>): QueryProjectTxResponse;
};
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
