import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/**
 * QueryPrivilegedContractsResponse is the request type for the
 * Query/PrivilegedContracts RPC method
 */
export interface QueryPrivilegedContractsRequest {
}
/**
 * QueryPrivilegedContractsResponse is the response type for the
 * Query/PrivilegedContracts RPC method
 */
export interface QueryPrivilegedContractsResponse {
    /** contracts are a set of contract addresses */
    contracts: string[];
}
/**
 * QueryContractsByPrivilegeTypeRequest is the request type for the
 * Query/ContractsByPrivilegeType RPC method
 */
export interface QueryContractsByPrivilegeTypeRequest {
    /**
     * QueryContractsByPrivilegeTypeRequest is the request type for the
     * Query/ContractsByPrivilegeType RPC method
     */
    privilegeType: string;
}
/**
 * QueryContractsByPrivilegeTypeResponse is the response type for the
 * Query/ContractsByPrivilegeType RPC method
 */
export interface QueryContractsByPrivilegeTypeResponse {
    /** contracts are a set of contract addresses */
    contracts: string[];
}
export declare const QueryPrivilegedContractsRequest: {
    encode(_: QueryPrivilegedContractsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPrivilegedContractsRequest;
    fromJSON(_: any): QueryPrivilegedContractsRequest;
    toJSON(_: QueryPrivilegedContractsRequest): unknown;
    fromPartial(_: DeepPartial<QueryPrivilegedContractsRequest>): QueryPrivilegedContractsRequest;
};
export declare const QueryPrivilegedContractsResponse: {
    encode(message: QueryPrivilegedContractsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPrivilegedContractsResponse;
    fromJSON(object: any): QueryPrivilegedContractsResponse;
    toJSON(message: QueryPrivilegedContractsResponse): unknown;
    fromPartial(object: DeepPartial<QueryPrivilegedContractsResponse>): QueryPrivilegedContractsResponse;
};
export declare const QueryContractsByPrivilegeTypeRequest: {
    encode(message: QueryContractsByPrivilegeTypeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractsByPrivilegeTypeRequest;
    fromJSON(object: any): QueryContractsByPrivilegeTypeRequest;
    toJSON(message: QueryContractsByPrivilegeTypeRequest): unknown;
    fromPartial(object: DeepPartial<QueryContractsByPrivilegeTypeRequest>): QueryContractsByPrivilegeTypeRequest;
};
export declare const QueryContractsByPrivilegeTypeResponse: {
    encode(message: QueryContractsByPrivilegeTypeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractsByPrivilegeTypeResponse;
    fromJSON(object: any): QueryContractsByPrivilegeTypeResponse;
    toJSON(message: QueryContractsByPrivilegeTypeResponse): unknown;
    fromPartial(object: DeepPartial<QueryContractsByPrivilegeTypeResponse>): QueryContractsByPrivilegeTypeResponse;
};
