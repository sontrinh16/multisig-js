import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { DTagTransferRequest } from "./models_dtag_requests";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/**
 * QueryIncomingDTagTransferRequestsRequest is the request type for the
 * Query/IncomingDTagTransferRequests RPC endpoint
 */
export interface QueryIncomingDTagTransferRequestsRequest {
    /**
     * (optional) Receiver represents the address of the user to which query the
     * incoming requests for
     */
    receiver: string;
    /** Pagination defines an optional pagination for the request */
    pagination: PageRequest;
}
/**
 * QueryIncomingDTagTransferRequestsResponse is the response type for the
 * Query/IncomingDTagTransferRequests RPC method.
 */
export interface QueryIncomingDTagTransferRequestsResponse {
    /**
     * Requests represent the list of all the DTag transfer requests made towards
     * the user
     */
    requests: DTagTransferRequest[];
    /** Pagination defines the pagination response */
    pagination: PageResponse;
}
export declare const QueryIncomingDTagTransferRequestsRequest: {
    encode(message: QueryIncomingDTagTransferRequestsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncomingDTagTransferRequestsRequest;
    fromJSON(object: any): QueryIncomingDTagTransferRequestsRequest;
    toJSON(message: QueryIncomingDTagTransferRequestsRequest): unknown;
    fromPartial(object: DeepPartial<QueryIncomingDTagTransferRequestsRequest>): QueryIncomingDTagTransferRequestsRequest;
};
export declare const QueryIncomingDTagTransferRequestsResponse: {
    encode(message: QueryIncomingDTagTransferRequestsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncomingDTagTransferRequestsResponse;
    fromJSON(object: any): QueryIncomingDTagTransferRequestsResponse;
    toJSON(message: QueryIncomingDTagTransferRequestsResponse): unknown;
    fromPartial(object: DeepPartial<QueryIncomingDTagTransferRequestsResponse>): QueryIncomingDTagTransferRequestsResponse;
};
