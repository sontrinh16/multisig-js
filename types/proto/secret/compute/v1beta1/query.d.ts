import { ContractInfo } from "./types";
import { StringEvent } from "../../../cosmos/base/abci/v1beta1/abci";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** QueryContractInfoRequest is the request type for the Query/ContractInfo RPC method */
export interface QueryContractInfoRequest {
    /** address is the canonical address of the contract to query */
    address: Uint8Array;
}
/** QueryContractInfoResponse is the response type for the Query/ContractInfo RPC method */
export interface QueryContractInfoResponse {
    /** address is the canonical address of the contract */
    address: Uint8Array;
    ContractInfo: ContractInfo;
}
export interface QueryContractHistoryRequest {
    /** address is the canonical address of the contract to query */
    address: Uint8Array;
}
export interface QueryContractsByCodeRequest {
    /** grpc-gateway_out does not support Go style CodID */
    codeId: Long;
}
/** ContractInfoWithAddress adds the address (key) to the ContractInfo representation */
export interface ContractInfoWithAddress {
    /** address is the canonical address of the contract */
    address: Uint8Array;
    ContractInfo: ContractInfo;
}
export interface QueryContractsByCodeResponse {
    contractInfos: ContractInfoWithAddress[];
}
export interface QuerySmartContractStateRequest {
    /** address is the canonical address of the contract */
    address: Uint8Array;
    queryData: Uint8Array;
}
export interface QueryContractAddressByLabelRequest {
    label: string;
}
export interface QueryContractKeyRequest {
    /** address is the canonical address of the contract */
    address: Uint8Array;
}
export interface QueryContractHashRequest {
    /** address is the canonical address of the contract */
    address: Uint8Array;
}
export interface QuerySmartContractStateResponse {
    data: Uint8Array;
}
export interface QueryCodeRequest {
    /** grpc-gateway_out does not support Go style CodID */
    codeId: Long;
}
export interface CodeInfoResponse {
    /** id for legacy support */
    codeId: Long;
    creator: Uint8Array;
    dataHash: Uint8Array;
    source: string;
    builder: string;
}
export interface QueryCodeResponse {
    codeInfo: CodeInfoResponse;
    data: Uint8Array;
}
export interface QueryCodesResponse {
    codeInfos: CodeInfoResponse[];
}
export interface QueryContractAddressByLabelResponse {
    /** address is the canonical address of the contract */
    address: Uint8Array;
}
export interface QueryContractKeyResponse {
    /** address is the address of the contract */
    key: Uint8Array;
}
export interface QueryContractHashResponse {
    codeHash: Uint8Array;
}
/** DecryptedAnswer is a struct that represents a decrypted tx-query */
export interface DecryptedAnswer {
    type: string;
    input: string;
    outputData: string;
    outputDataAsString: string;
    outputLogs: StringEvent[];
    outputError: Uint8Array;
    plaintextError: string;
}
export declare const QueryContractInfoRequest: {
    encode(message: QueryContractInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractInfoRequest;
    fromJSON(object: any): QueryContractInfoRequest;
    toJSON(message: QueryContractInfoRequest): unknown;
    fromPartial(object: DeepPartial<QueryContractInfoRequest>): QueryContractInfoRequest;
};
export declare const QueryContractInfoResponse: {
    encode(message: QueryContractInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractInfoResponse;
    fromJSON(object: any): QueryContractInfoResponse;
    toJSON(message: QueryContractInfoResponse): unknown;
    fromPartial(object: DeepPartial<QueryContractInfoResponse>): QueryContractInfoResponse;
};
export declare const QueryContractHistoryRequest: {
    encode(message: QueryContractHistoryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractHistoryRequest;
    fromJSON(object: any): QueryContractHistoryRequest;
    toJSON(message: QueryContractHistoryRequest): unknown;
    fromPartial(object: DeepPartial<QueryContractHistoryRequest>): QueryContractHistoryRequest;
};
export declare const QueryContractsByCodeRequest: {
    encode(message: QueryContractsByCodeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractsByCodeRequest;
    fromJSON(object: any): QueryContractsByCodeRequest;
    toJSON(message: QueryContractsByCodeRequest): unknown;
    fromPartial(object: DeepPartial<QueryContractsByCodeRequest>): QueryContractsByCodeRequest;
};
export declare const ContractInfoWithAddress: {
    encode(message: ContractInfoWithAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContractInfoWithAddress;
    fromJSON(object: any): ContractInfoWithAddress;
    toJSON(message: ContractInfoWithAddress): unknown;
    fromPartial(object: DeepPartial<ContractInfoWithAddress>): ContractInfoWithAddress;
};
export declare const QueryContractsByCodeResponse: {
    encode(message: QueryContractsByCodeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractsByCodeResponse;
    fromJSON(object: any): QueryContractsByCodeResponse;
    toJSON(message: QueryContractsByCodeResponse): unknown;
    fromPartial(object: DeepPartial<QueryContractsByCodeResponse>): QueryContractsByCodeResponse;
};
export declare const QuerySmartContractStateRequest: {
    encode(message: QuerySmartContractStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySmartContractStateRequest;
    fromJSON(object: any): QuerySmartContractStateRequest;
    toJSON(message: QuerySmartContractStateRequest): unknown;
    fromPartial(object: DeepPartial<QuerySmartContractStateRequest>): QuerySmartContractStateRequest;
};
export declare const QueryContractAddressByLabelRequest: {
    encode(message: QueryContractAddressByLabelRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractAddressByLabelRequest;
    fromJSON(object: any): QueryContractAddressByLabelRequest;
    toJSON(message: QueryContractAddressByLabelRequest): unknown;
    fromPartial(object: DeepPartial<QueryContractAddressByLabelRequest>): QueryContractAddressByLabelRequest;
};
export declare const QueryContractKeyRequest: {
    encode(message: QueryContractKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractKeyRequest;
    fromJSON(object: any): QueryContractKeyRequest;
    toJSON(message: QueryContractKeyRequest): unknown;
    fromPartial(object: DeepPartial<QueryContractKeyRequest>): QueryContractKeyRequest;
};
export declare const QueryContractHashRequest: {
    encode(message: QueryContractHashRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractHashRequest;
    fromJSON(object: any): QueryContractHashRequest;
    toJSON(message: QueryContractHashRequest): unknown;
    fromPartial(object: DeepPartial<QueryContractHashRequest>): QueryContractHashRequest;
};
export declare const QuerySmartContractStateResponse: {
    encode(message: QuerySmartContractStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySmartContractStateResponse;
    fromJSON(object: any): QuerySmartContractStateResponse;
    toJSON(message: QuerySmartContractStateResponse): unknown;
    fromPartial(object: DeepPartial<QuerySmartContractStateResponse>): QuerySmartContractStateResponse;
};
export declare const QueryCodeRequest: {
    encode(message: QueryCodeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCodeRequest;
    fromJSON(object: any): QueryCodeRequest;
    toJSON(message: QueryCodeRequest): unknown;
    fromPartial(object: DeepPartial<QueryCodeRequest>): QueryCodeRequest;
};
export declare const CodeInfoResponse: {
    encode(message: CodeInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CodeInfoResponse;
    fromJSON(object: any): CodeInfoResponse;
    toJSON(message: CodeInfoResponse): unknown;
    fromPartial(object: DeepPartial<CodeInfoResponse>): CodeInfoResponse;
};
export declare const QueryCodeResponse: {
    encode(message: QueryCodeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCodeResponse;
    fromJSON(object: any): QueryCodeResponse;
    toJSON(message: QueryCodeResponse): unknown;
    fromPartial(object: DeepPartial<QueryCodeResponse>): QueryCodeResponse;
};
export declare const QueryCodesResponse: {
    encode(message: QueryCodesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCodesResponse;
    fromJSON(object: any): QueryCodesResponse;
    toJSON(message: QueryCodesResponse): unknown;
    fromPartial(object: DeepPartial<QueryCodesResponse>): QueryCodesResponse;
};
export declare const QueryContractAddressByLabelResponse: {
    encode(message: QueryContractAddressByLabelResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractAddressByLabelResponse;
    fromJSON(object: any): QueryContractAddressByLabelResponse;
    toJSON(message: QueryContractAddressByLabelResponse): unknown;
    fromPartial(object: DeepPartial<QueryContractAddressByLabelResponse>): QueryContractAddressByLabelResponse;
};
export declare const QueryContractKeyResponse: {
    encode(message: QueryContractKeyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractKeyResponse;
    fromJSON(object: any): QueryContractKeyResponse;
    toJSON(message: QueryContractKeyResponse): unknown;
    fromPartial(object: DeepPartial<QueryContractKeyResponse>): QueryContractKeyResponse;
};
export declare const QueryContractHashResponse: {
    encode(message: QueryContractHashResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractHashResponse;
    fromJSON(object: any): QueryContractHashResponse;
    toJSON(message: QueryContractHashResponse): unknown;
    fromPartial(object: DeepPartial<QueryContractHashResponse>): QueryContractHashResponse;
};
export declare const DecryptedAnswer: {
    encode(message: DecryptedAnswer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DecryptedAnswer;
    fromJSON(object: any): DecryptedAnswer;
    toJSON(message: DecryptedAnswer): unknown;
    fromPartial(object: DeepPartial<DecryptedAnswer>): DecryptedAnswer;
};
