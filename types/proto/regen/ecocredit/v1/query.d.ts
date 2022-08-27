import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { CreditType } from "./state";
import { Params } from "./types";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** QueryClassesRequest is the Query/Classes request type. */
export interface QueryClassesRequest {
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/** QueryClassesResponse is the Query/Classes response type. */
export interface QueryClassesResponse {
    /** classes are the fetched credit classes. */
    classes: ClassInfo[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
/** QueryClassesByAdminRequest is the Query/ClassesByAdmin request type. */
export interface QueryClassesByAdminRequest {
    /** admin is the address of the admin of the class. */
    admin: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/** QueryClassesByAdminResponse is the Query/ClassesByAdmin response type. */
export interface QueryClassesByAdminResponse {
    /** classes are the fetched credit classes. */
    classes: ClassInfo[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
/** QueryClassRequest is the Query/Class request type. */
export interface QueryClassRequest {
    /** class_id is the unique identifier of the credit class to query. */
    classId: string;
}
/** QueryClassResponse is the Query/Class request type. */
export interface QueryClassResponse {
    /** class is the fetched credit class. */
    class: ClassInfo;
}
/** QueryClassIssuersRequest is the Query/ClassIssuers request type. */
export interface QueryClassIssuersRequest {
    /** class_id is the unique identifier of the credit class to query. */
    classId: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/** QueryClassIssuersRequest is the Query/ClassIssuers response type. */
export interface QueryClassIssuersResponse {
    /** issuers is a list of issuers for the credit class */
    issuers: string[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
/** QueryProjectsRequest is the Query/Projects request type. */
export interface QueryProjectsRequest {
    /** class_id is the unique identifier of the credit class to query. */
    classId: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/** QueryProjectsResponse is the Query/Projects response type. */
export interface QueryProjectsResponse {
    /** projects are the fetched projects. */
    projects: ProjectInfo[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
/**
 * QueryProjectsByReferenceIdRequest is the Query/ProjectsByReferenceId request
 * type.
 */
export interface QueryProjectsByReferenceIdRequest {
    /** reference_id is the project reference id. */
    referenceId: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/**
 * QueryProjectsByReferenceIdResponse is the Query/ProjectsByReferenceId
 * response type.
 */
export interface QueryProjectsByReferenceIdResponse {
    /** projects are the fetched projects. */
    projects: ProjectInfo[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
/** QueryProjectRequest is the Query/Project request type. */
export interface QueryProjectRequest {
    /** project_id is the unique identifier of the project to query. */
    projectId: string;
}
/** QueryProjectResponse is the Query/Project response type. */
export interface QueryProjectResponse {
    /** project is the fetched project. */
    project: ProjectInfo;
}
/** QueryBatchesRequest is the Query/Batches request type. */
export interface QueryBatchesRequest {
    /** project_id is the unique identifier of the project to query. */
    projectId: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/** QueryBatchesResponse is the Query/Batches response type. */
export interface QueryBatchesResponse {
    /** batches are the fetched credit batches. */
    batches: BatchInfo[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
/** QueryBatchesByIssuerRequest is the Query/BatchesByIssuer request type. */
export interface QueryBatchesByIssuerRequest {
    /** issuer is the address that issued the batch */
    issuer: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/** QueryBatchesByIssuerResponse is the Query/BatchesByIssuer response type. */
export interface QueryBatchesByIssuerResponse {
    /** batches are the fetched credit batches. */
    batches: BatchInfo[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
/** QueryBatchesByClassRequest is the Query/BatchesByClass request type. */
export interface QueryBatchesByClassRequest {
    /** class_id is the unique identifier of the credit class to query. */
    classId: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/** QueryBatchesByClassResponse is the Query/BatchesByClass response type. */
export interface QueryBatchesByClassResponse {
    /** batches are the fetched credit batches. */
    batches: BatchInfo[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
/** QueryBatchRequest is the Query/Batch request type. */
export interface QueryBatchRequest {
    /** batch_denom is the unique identifier of the credit batch to query. */
    batchDenom: string;
}
/** QueryBatchResponse is the Query/Batch response type. */
export interface QueryBatchResponse {
    /** batch is the fetched credit batch. */
    batch: BatchInfo;
}
/** QueryBalanceRequest is the Query/Balance request type. */
export interface QueryBalanceRequest {
    /** account is the address of the account whose balance is being queried. */
    account: string;
    /** batch_denom is the unique identifier of the credit batch to query. */
    batchDenom: string;
}
/** QueryBalanceResponse is the Query/Balance response type. */
export interface QueryBalanceResponse {
    /** balance is the balance of the given account. */
    balance: BatchBalanceInfo;
}
/** QueryBalancesRequest is the Query/Balances request type. */
export interface QueryBalancesRequest {
    /** account is the address of the account whose balance is being queried. */
    account: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/** QueryBalancesResponse is the Query/Balances response type. */
export interface QueryBalancesResponse {
    /**
     * balances are a list of balances from different credit batches that the
     * account holds.
     */
    balances: BatchBalanceInfo[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
/** QuerySupplyRequest is the Query/Supply request type. */
export interface QuerySupplyRequest {
    /** batch_denom is the unique identifier of the credit batch to query. */
    batchDenom: string;
}
/** QuerySupplyResponse is the Query/Supply response type. */
export interface QuerySupplyResponse {
    /**
     * tradable_supply is the decimal number of tradable credits in the batch
     * supply.
     */
    tradableSupply: string;
    /**
     * retired_supply is the decimal number of retired credits in the batch
     * supply.
     */
    retiredSupply: string;
    /**
     * cancelled_amount is the decimal number of cancelled credits in the batch
     * supply.
     */
    cancelledAmount: string;
}
/** QueryCreditTypesRequest is the Query/Credit_Types request type */
export interface QueryCreditTypesRequest {
}
/** QueryCreditTypesRequest is the Query/Credit_Types response type */
export interface QueryCreditTypesResponse {
    /** credit_types are the fetched credit types. */
    creditTypes: CreditType[];
}
/** QueryParamsRequest is the Query/Params request type. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is the Query/Params response type. */
export interface QueryParamsResponse {
    /** params defines the parameters of the ecocredit module. */
    params: Params;
}
/** ClassInfo is the human-readable credit class information. */
export interface ClassInfo {
    /** id is the unique identifier of the credit class. */
    id: string;
    /** admin is the admin of the credit class. */
    admin: string;
    /** metadata is the arbitrary metadata attached to the credit class. */
    metadata: string;
    /**
     * credit_type_abbrev is the abbreviation of the credit type within which this
     * credit class was created.
     */
    creditTypeAbbrev: string;
}
/** ProjectInfo is the human-readable project information. */
export interface ProjectInfo {
    /** id is the unique identifier of the project. */
    id: string;
    /** admin is the admin of the project. */
    admin: string;
    /**
     * class_id is the unique identifier of the credit class within which the
     * project was created.
     */
    classId: string;
    /**
     * jurisdiction is the jurisdiction of the project. Full documentation can be
     * found in MsgCreateProject.jurisdiction.
     */
    jurisdiction: string;
    /** metadata is the arbitrary metadata attached to the project. */
    metadata: string;
    /** reference_id is any arbitrary string that can be use to reference project. */
    referenceId: string;
}
/** BatchInfo is the human-readable credit batch information. */
export interface BatchInfo {
    /**
     * issuer is the address that created the batch and the address authorized to
     * mint new credits to the credit batch if the credit batch is open.
     */
    issuer: string;
    /**
     * project_id is the unique identifier of the project within which this credit
     * batch was created.
     */
    projectId: string;
    /**
     * denom is the unique identifier of the credit batch formed from the project
     * name, batch sequence number and dates.
     */
    denom: string;
    /** metadata is any arbitrary metadata attached to the credit batch. */
    metadata: string;
    /**
     * start_date is the beginning of the period during which this credit batch
     * was quantified and verified.
     */
    startDate: Date;
    /**
     * end_date is the end of the period during which this credit batch was
     * quantified and verified.
     */
    endDate: Date;
    /** issuance_date is the timestamp when the credit batch was issued. */
    issuanceDate: Date;
    /**
     * open determines whether or not the credit batch is open, i.e. whether or
     * not new credits can be minted to the credit batch.
     */
    open: boolean;
}
/** BatchBalanceInfo is the human-readable batch balance information. */
export interface BatchBalanceInfo {
    /** address is the address of the credit holder. */
    address: string;
    /** batch_denom is the unique identifier of the credit batch. */
    batchDenom: string;
    /** tradable is the tradable amount of credits. */
    tradable: string;
    /** retired is the retired amount of credits. */
    retired: string;
    /** escrowed is the amount of credits locked up in escrow for the marketplace. */
    escrowed: string;
}
export declare const QueryClassesRequest: {
    encode(message: QueryClassesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassesRequest;
    fromJSON(object: any): QueryClassesRequest;
    toJSON(message: QueryClassesRequest): unknown;
    fromPartial(object: DeepPartial<QueryClassesRequest>): QueryClassesRequest;
};
export declare const QueryClassesResponse: {
    encode(message: QueryClassesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassesResponse;
    fromJSON(object: any): QueryClassesResponse;
    toJSON(message: QueryClassesResponse): unknown;
    fromPartial(object: DeepPartial<QueryClassesResponse>): QueryClassesResponse;
};
export declare const QueryClassesByAdminRequest: {
    encode(message: QueryClassesByAdminRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassesByAdminRequest;
    fromJSON(object: any): QueryClassesByAdminRequest;
    toJSON(message: QueryClassesByAdminRequest): unknown;
    fromPartial(object: DeepPartial<QueryClassesByAdminRequest>): QueryClassesByAdminRequest;
};
export declare const QueryClassesByAdminResponse: {
    encode(message: QueryClassesByAdminResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassesByAdminResponse;
    fromJSON(object: any): QueryClassesByAdminResponse;
    toJSON(message: QueryClassesByAdminResponse): unknown;
    fromPartial(object: DeepPartial<QueryClassesByAdminResponse>): QueryClassesByAdminResponse;
};
export declare const QueryClassRequest: {
    encode(message: QueryClassRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassRequest;
    fromJSON(object: any): QueryClassRequest;
    toJSON(message: QueryClassRequest): unknown;
    fromPartial(object: DeepPartial<QueryClassRequest>): QueryClassRequest;
};
export declare const QueryClassResponse: {
    encode(message: QueryClassResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassResponse;
    fromJSON(object: any): QueryClassResponse;
    toJSON(message: QueryClassResponse): unknown;
    fromPartial(object: DeepPartial<QueryClassResponse>): QueryClassResponse;
};
export declare const QueryClassIssuersRequest: {
    encode(message: QueryClassIssuersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassIssuersRequest;
    fromJSON(object: any): QueryClassIssuersRequest;
    toJSON(message: QueryClassIssuersRequest): unknown;
    fromPartial(object: DeepPartial<QueryClassIssuersRequest>): QueryClassIssuersRequest;
};
export declare const QueryClassIssuersResponse: {
    encode(message: QueryClassIssuersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassIssuersResponse;
    fromJSON(object: any): QueryClassIssuersResponse;
    toJSON(message: QueryClassIssuersResponse): unknown;
    fromPartial(object: DeepPartial<QueryClassIssuersResponse>): QueryClassIssuersResponse;
};
export declare const QueryProjectsRequest: {
    encode(message: QueryProjectsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectsRequest;
    fromJSON(object: any): QueryProjectsRequest;
    toJSON(message: QueryProjectsRequest): unknown;
    fromPartial(object: DeepPartial<QueryProjectsRequest>): QueryProjectsRequest;
};
export declare const QueryProjectsResponse: {
    encode(message: QueryProjectsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectsResponse;
    fromJSON(object: any): QueryProjectsResponse;
    toJSON(message: QueryProjectsResponse): unknown;
    fromPartial(object: DeepPartial<QueryProjectsResponse>): QueryProjectsResponse;
};
export declare const QueryProjectsByReferenceIdRequest: {
    encode(message: QueryProjectsByReferenceIdRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectsByReferenceIdRequest;
    fromJSON(object: any): QueryProjectsByReferenceIdRequest;
    toJSON(message: QueryProjectsByReferenceIdRequest): unknown;
    fromPartial(object: DeepPartial<QueryProjectsByReferenceIdRequest>): QueryProjectsByReferenceIdRequest;
};
export declare const QueryProjectsByReferenceIdResponse: {
    encode(message: QueryProjectsByReferenceIdResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectsByReferenceIdResponse;
    fromJSON(object: any): QueryProjectsByReferenceIdResponse;
    toJSON(message: QueryProjectsByReferenceIdResponse): unknown;
    fromPartial(object: DeepPartial<QueryProjectsByReferenceIdResponse>): QueryProjectsByReferenceIdResponse;
};
export declare const QueryProjectRequest: {
    encode(message: QueryProjectRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectRequest;
    fromJSON(object: any): QueryProjectRequest;
    toJSON(message: QueryProjectRequest): unknown;
    fromPartial(object: DeepPartial<QueryProjectRequest>): QueryProjectRequest;
};
export declare const QueryProjectResponse: {
    encode(message: QueryProjectResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectResponse;
    fromJSON(object: any): QueryProjectResponse;
    toJSON(message: QueryProjectResponse): unknown;
    fromPartial(object: DeepPartial<QueryProjectResponse>): QueryProjectResponse;
};
export declare const QueryBatchesRequest: {
    encode(message: QueryBatchesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchesRequest;
    fromJSON(object: any): QueryBatchesRequest;
    toJSON(message: QueryBatchesRequest): unknown;
    fromPartial(object: DeepPartial<QueryBatchesRequest>): QueryBatchesRequest;
};
export declare const QueryBatchesResponse: {
    encode(message: QueryBatchesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchesResponse;
    fromJSON(object: any): QueryBatchesResponse;
    toJSON(message: QueryBatchesResponse): unknown;
    fromPartial(object: DeepPartial<QueryBatchesResponse>): QueryBatchesResponse;
};
export declare const QueryBatchesByIssuerRequest: {
    encode(message: QueryBatchesByIssuerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchesByIssuerRequest;
    fromJSON(object: any): QueryBatchesByIssuerRequest;
    toJSON(message: QueryBatchesByIssuerRequest): unknown;
    fromPartial(object: DeepPartial<QueryBatchesByIssuerRequest>): QueryBatchesByIssuerRequest;
};
export declare const QueryBatchesByIssuerResponse: {
    encode(message: QueryBatchesByIssuerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchesByIssuerResponse;
    fromJSON(object: any): QueryBatchesByIssuerResponse;
    toJSON(message: QueryBatchesByIssuerResponse): unknown;
    fromPartial(object: DeepPartial<QueryBatchesByIssuerResponse>): QueryBatchesByIssuerResponse;
};
export declare const QueryBatchesByClassRequest: {
    encode(message: QueryBatchesByClassRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchesByClassRequest;
    fromJSON(object: any): QueryBatchesByClassRequest;
    toJSON(message: QueryBatchesByClassRequest): unknown;
    fromPartial(object: DeepPartial<QueryBatchesByClassRequest>): QueryBatchesByClassRequest;
};
export declare const QueryBatchesByClassResponse: {
    encode(message: QueryBatchesByClassResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchesByClassResponse;
    fromJSON(object: any): QueryBatchesByClassResponse;
    toJSON(message: QueryBatchesByClassResponse): unknown;
    fromPartial(object: DeepPartial<QueryBatchesByClassResponse>): QueryBatchesByClassResponse;
};
export declare const QueryBatchRequest: {
    encode(message: QueryBatchRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchRequest;
    fromJSON(object: any): QueryBatchRequest;
    toJSON(message: QueryBatchRequest): unknown;
    fromPartial(object: DeepPartial<QueryBatchRequest>): QueryBatchRequest;
};
export declare const QueryBatchResponse: {
    encode(message: QueryBatchResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchResponse;
    fromJSON(object: any): QueryBatchResponse;
    toJSON(message: QueryBatchResponse): unknown;
    fromPartial(object: DeepPartial<QueryBatchResponse>): QueryBatchResponse;
};
export declare const QueryBalanceRequest: {
    encode(message: QueryBalanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceRequest;
    fromJSON(object: any): QueryBalanceRequest;
    toJSON(message: QueryBalanceRequest): unknown;
    fromPartial(object: DeepPartial<QueryBalanceRequest>): QueryBalanceRequest;
};
export declare const QueryBalanceResponse: {
    encode(message: QueryBalanceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceResponse;
    fromJSON(object: any): QueryBalanceResponse;
    toJSON(message: QueryBalanceResponse): unknown;
    fromPartial(object: DeepPartial<QueryBalanceResponse>): QueryBalanceResponse;
};
export declare const QueryBalancesRequest: {
    encode(message: QueryBalancesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalancesRequest;
    fromJSON(object: any): QueryBalancesRequest;
    toJSON(message: QueryBalancesRequest): unknown;
    fromPartial(object: DeepPartial<QueryBalancesRequest>): QueryBalancesRequest;
};
export declare const QueryBalancesResponse: {
    encode(message: QueryBalancesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalancesResponse;
    fromJSON(object: any): QueryBalancesResponse;
    toJSON(message: QueryBalancesResponse): unknown;
    fromPartial(object: DeepPartial<QueryBalancesResponse>): QueryBalancesResponse;
};
export declare const QuerySupplyRequest: {
    encode(message: QuerySupplyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupplyRequest;
    fromJSON(object: any): QuerySupplyRequest;
    toJSON(message: QuerySupplyRequest): unknown;
    fromPartial(object: DeepPartial<QuerySupplyRequest>): QuerySupplyRequest;
};
export declare const QuerySupplyResponse: {
    encode(message: QuerySupplyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupplyResponse;
    fromJSON(object: any): QuerySupplyResponse;
    toJSON(message: QuerySupplyResponse): unknown;
    fromPartial(object: DeepPartial<QuerySupplyResponse>): QuerySupplyResponse;
};
export declare const QueryCreditTypesRequest: {
    encode(_: QueryCreditTypesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCreditTypesRequest;
    fromJSON(_: any): QueryCreditTypesRequest;
    toJSON(_: QueryCreditTypesRequest): unknown;
    fromPartial(_: DeepPartial<QueryCreditTypesRequest>): QueryCreditTypesRequest;
};
export declare const QueryCreditTypesResponse: {
    encode(message: QueryCreditTypesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCreditTypesResponse;
    fromJSON(object: any): QueryCreditTypesResponse;
    toJSON(message: QueryCreditTypesResponse): unknown;
    fromPartial(object: DeepPartial<QueryCreditTypesResponse>): QueryCreditTypesResponse;
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
export declare const ClassInfo: {
    encode(message: ClassInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClassInfo;
    fromJSON(object: any): ClassInfo;
    toJSON(message: ClassInfo): unknown;
    fromPartial(object: DeepPartial<ClassInfo>): ClassInfo;
};
export declare const ProjectInfo: {
    encode(message: ProjectInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProjectInfo;
    fromJSON(object: any): ProjectInfo;
    toJSON(message: ProjectInfo): unknown;
    fromPartial(object: DeepPartial<ProjectInfo>): ProjectInfo;
};
export declare const BatchInfo: {
    encode(message: BatchInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchInfo;
    fromJSON(object: any): BatchInfo;
    toJSON(message: BatchInfo): unknown;
    fromPartial(object: DeepPartial<BatchInfo>): BatchInfo;
};
export declare const BatchBalanceInfo: {
    encode(message: BatchBalanceInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchBalanceInfo;
    fromJSON(object: any): BatchBalanceInfo;
    toJSON(message: BatchBalanceInfo): unknown;
    fromPartial(object: DeepPartial<BatchBalanceInfo>): BatchBalanceInfo;
};
