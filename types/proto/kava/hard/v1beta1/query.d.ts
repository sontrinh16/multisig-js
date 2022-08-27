import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./hard";
import { ModuleAccount } from "../../../cosmos/auth/v1beta1/auth";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    params: Params;
}
/** QueryAccountsRequest is the request type for the Query/Accounts RPC method. */
export interface QueryAccountsRequest {
}
/** QueryAccountsResponse is the response type for the Query/Accounts RPC method. */
export interface QueryAccountsResponse {
    accounts: ModuleAccount[];
}
/** QueryDepositsRequest is the request type for the Query/Deposits RPC method. */
export interface QueryDepositsRequest {
    denom: string;
    owner: string;
    pagination: PageRequest;
}
/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponse {
    deposits: DepositResponse[];
    pagination: PageResponse;
}
/** QueryUnsyncedDepositsRequest is the request type for the Query/UnsyncedDeposits RPC method. */
export interface QueryUnsyncedDepositsRequest {
    denom: string;
    owner: string;
    pagination: PageRequest;
}
/** QueryUnsyncedDepositsResponse is the response type for the Query/UnsyncedDeposits RPC method. */
export interface QueryUnsyncedDepositsResponse {
    deposits: DepositResponse[];
    pagination: PageResponse;
}
/** QueryTotalDepositedRequest is the request type for the Query/TotalDeposited RPC method. */
export interface QueryTotalDepositedRequest {
    denom: string;
}
/** QueryTotalDepositedResponse is the response type for the Query/TotalDeposited RPC method. */
export interface QueryTotalDepositedResponse {
    suppliedCoins: Coin[];
}
/** QueryBorrowsRequest is the request type for the Query/Borrows RPC method. */
export interface QueryBorrowsRequest {
    denom: string;
    owner: string;
    pagination: PageRequest;
}
/** QueryBorrowsResponse is the response type for the Query/Borrows RPC method. */
export interface QueryBorrowsResponse {
    borrows: BorrowResponse[];
    pagination: PageResponse;
}
/** QueryUnsyncedBorrowsRequest is the request type for the Query/UnsyncedBorrows RPC method. */
export interface QueryUnsyncedBorrowsRequest {
    denom: string;
    owner: string;
    pagination: PageRequest;
}
/** QueryUnsyncedBorrowsResponse is the response type for the Query/UnsyncedBorrows RPC method. */
export interface QueryUnsyncedBorrowsResponse {
    borrows: BorrowResponse[];
    pagination: PageResponse;
}
/** QueryTotalBorrowedRequest is the request type for the Query/TotalBorrowed RPC method. */
export interface QueryTotalBorrowedRequest {
    denom: string;
}
/** QueryTotalBorrowedResponse is the response type for the Query/TotalBorrowed RPC method. */
export interface QueryTotalBorrowedResponse {
    borrowedCoins: Coin[];
}
/** QueryInterestRateRequest is the request type for the Query/InterestRate RPC method. */
export interface QueryInterestRateRequest {
    denom: string;
}
/** QueryInterestRateResponse is the response type for the Query/InterestRate RPC method. */
export interface QueryInterestRateResponse {
    interestRates: MoneyMarketInterestRate[];
}
/** QueryReservesRequest is the request type for the Query/Reserves RPC method. */
export interface QueryReservesRequest {
    denom: string;
}
/** QueryReservesResponse is the response type for the Query/Reserves RPC method. */
export interface QueryReservesResponse {
    amount: Coin[];
}
/** QueryInterestFactorsRequest is the request type for the Query/InterestFactors RPC method. */
export interface QueryInterestFactorsRequest {
    denom: string;
}
/** QueryInterestFactorsResponse is the response type for the Query/InterestFactors RPC method. */
export interface QueryInterestFactorsResponse {
    interestFactors: InterestFactor[];
}
/** DepositResponse defines an amount of coins deposited into a hard module account. */
export interface DepositResponse {
    depositor: string;
    amount: Coin[];
    index: SupplyInterestFactorResponse[];
}
/** SupplyInterestFactorResponse defines an individual borrow interest factor. */
export interface SupplyInterestFactorResponse {
    denom: string;
    /** sdk.Dec as string */
    value: string;
}
/** BorrowResponse defines an amount of coins borrowed from a hard module account. */
export interface BorrowResponse {
    borrower: string;
    amount: Coin[];
    index: BorrowInterestFactorResponse[];
}
/** BorrowInterestFactorResponse defines an individual borrow interest factor. */
export interface BorrowInterestFactorResponse {
    denom: string;
    /** sdk.Dec as string */
    value: string;
}
/** MoneyMarketInterestRate is a unique type returned by interest rate queries */
export interface MoneyMarketInterestRate {
    denom: string;
    /** sdk.Dec as String */
    supplyInterestRate: string;
    /** sdk.Dec as String */
    borrowInterestRate: string;
}
/** InterestFactor is a unique type returned by interest factor queries */
export interface InterestFactor {
    denom: string;
    /** sdk.Dec as String */
    borrowInterestFactor: string;
    /** sdk.Dec as String */
    supplyInterestFactor: string;
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
export declare const QueryAccountsRequest: {
    encode(_: QueryAccountsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountsRequest;
    fromJSON(_: any): QueryAccountsRequest;
    toJSON(_: QueryAccountsRequest): unknown;
    fromPartial(_: DeepPartial<QueryAccountsRequest>): QueryAccountsRequest;
};
export declare const QueryAccountsResponse: {
    encode(message: QueryAccountsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountsResponse;
    fromJSON(object: any): QueryAccountsResponse;
    toJSON(message: QueryAccountsResponse): unknown;
    fromPartial(object: DeepPartial<QueryAccountsResponse>): QueryAccountsResponse;
};
export declare const QueryDepositsRequest: {
    encode(message: QueryDepositsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositsRequest;
    fromJSON(object: any): QueryDepositsRequest;
    toJSON(message: QueryDepositsRequest): unknown;
    fromPartial(object: DeepPartial<QueryDepositsRequest>): QueryDepositsRequest;
};
export declare const QueryDepositsResponse: {
    encode(message: QueryDepositsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositsResponse;
    fromJSON(object: any): QueryDepositsResponse;
    toJSON(message: QueryDepositsResponse): unknown;
    fromPartial(object: DeepPartial<QueryDepositsResponse>): QueryDepositsResponse;
};
export declare const QueryUnsyncedDepositsRequest: {
    encode(message: QueryUnsyncedDepositsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnsyncedDepositsRequest;
    fromJSON(object: any): QueryUnsyncedDepositsRequest;
    toJSON(message: QueryUnsyncedDepositsRequest): unknown;
    fromPartial(object: DeepPartial<QueryUnsyncedDepositsRequest>): QueryUnsyncedDepositsRequest;
};
export declare const QueryUnsyncedDepositsResponse: {
    encode(message: QueryUnsyncedDepositsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnsyncedDepositsResponse;
    fromJSON(object: any): QueryUnsyncedDepositsResponse;
    toJSON(message: QueryUnsyncedDepositsResponse): unknown;
    fromPartial(object: DeepPartial<QueryUnsyncedDepositsResponse>): QueryUnsyncedDepositsResponse;
};
export declare const QueryTotalDepositedRequest: {
    encode(message: QueryTotalDepositedRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalDepositedRequest;
    fromJSON(object: any): QueryTotalDepositedRequest;
    toJSON(message: QueryTotalDepositedRequest): unknown;
    fromPartial(object: DeepPartial<QueryTotalDepositedRequest>): QueryTotalDepositedRequest;
};
export declare const QueryTotalDepositedResponse: {
    encode(message: QueryTotalDepositedResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalDepositedResponse;
    fromJSON(object: any): QueryTotalDepositedResponse;
    toJSON(message: QueryTotalDepositedResponse): unknown;
    fromPartial(object: DeepPartial<QueryTotalDepositedResponse>): QueryTotalDepositedResponse;
};
export declare const QueryBorrowsRequest: {
    encode(message: QueryBorrowsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBorrowsRequest;
    fromJSON(object: any): QueryBorrowsRequest;
    toJSON(message: QueryBorrowsRequest): unknown;
    fromPartial(object: DeepPartial<QueryBorrowsRequest>): QueryBorrowsRequest;
};
export declare const QueryBorrowsResponse: {
    encode(message: QueryBorrowsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBorrowsResponse;
    fromJSON(object: any): QueryBorrowsResponse;
    toJSON(message: QueryBorrowsResponse): unknown;
    fromPartial(object: DeepPartial<QueryBorrowsResponse>): QueryBorrowsResponse;
};
export declare const QueryUnsyncedBorrowsRequest: {
    encode(message: QueryUnsyncedBorrowsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnsyncedBorrowsRequest;
    fromJSON(object: any): QueryUnsyncedBorrowsRequest;
    toJSON(message: QueryUnsyncedBorrowsRequest): unknown;
    fromPartial(object: DeepPartial<QueryUnsyncedBorrowsRequest>): QueryUnsyncedBorrowsRequest;
};
export declare const QueryUnsyncedBorrowsResponse: {
    encode(message: QueryUnsyncedBorrowsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnsyncedBorrowsResponse;
    fromJSON(object: any): QueryUnsyncedBorrowsResponse;
    toJSON(message: QueryUnsyncedBorrowsResponse): unknown;
    fromPartial(object: DeepPartial<QueryUnsyncedBorrowsResponse>): QueryUnsyncedBorrowsResponse;
};
export declare const QueryTotalBorrowedRequest: {
    encode(message: QueryTotalBorrowedRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalBorrowedRequest;
    fromJSON(object: any): QueryTotalBorrowedRequest;
    toJSON(message: QueryTotalBorrowedRequest): unknown;
    fromPartial(object: DeepPartial<QueryTotalBorrowedRequest>): QueryTotalBorrowedRequest;
};
export declare const QueryTotalBorrowedResponse: {
    encode(message: QueryTotalBorrowedResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalBorrowedResponse;
    fromJSON(object: any): QueryTotalBorrowedResponse;
    toJSON(message: QueryTotalBorrowedResponse): unknown;
    fromPartial(object: DeepPartial<QueryTotalBorrowedResponse>): QueryTotalBorrowedResponse;
};
export declare const QueryInterestRateRequest: {
    encode(message: QueryInterestRateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryInterestRateRequest;
    fromJSON(object: any): QueryInterestRateRequest;
    toJSON(message: QueryInterestRateRequest): unknown;
    fromPartial(object: DeepPartial<QueryInterestRateRequest>): QueryInterestRateRequest;
};
export declare const QueryInterestRateResponse: {
    encode(message: QueryInterestRateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryInterestRateResponse;
    fromJSON(object: any): QueryInterestRateResponse;
    toJSON(message: QueryInterestRateResponse): unknown;
    fromPartial(object: DeepPartial<QueryInterestRateResponse>): QueryInterestRateResponse;
};
export declare const QueryReservesRequest: {
    encode(message: QueryReservesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryReservesRequest;
    fromJSON(object: any): QueryReservesRequest;
    toJSON(message: QueryReservesRequest): unknown;
    fromPartial(object: DeepPartial<QueryReservesRequest>): QueryReservesRequest;
};
export declare const QueryReservesResponse: {
    encode(message: QueryReservesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryReservesResponse;
    fromJSON(object: any): QueryReservesResponse;
    toJSON(message: QueryReservesResponse): unknown;
    fromPartial(object: DeepPartial<QueryReservesResponse>): QueryReservesResponse;
};
export declare const QueryInterestFactorsRequest: {
    encode(message: QueryInterestFactorsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryInterestFactorsRequest;
    fromJSON(object: any): QueryInterestFactorsRequest;
    toJSON(message: QueryInterestFactorsRequest): unknown;
    fromPartial(object: DeepPartial<QueryInterestFactorsRequest>): QueryInterestFactorsRequest;
};
export declare const QueryInterestFactorsResponse: {
    encode(message: QueryInterestFactorsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryInterestFactorsResponse;
    fromJSON(object: any): QueryInterestFactorsResponse;
    toJSON(message: QueryInterestFactorsResponse): unknown;
    fromPartial(object: DeepPartial<QueryInterestFactorsResponse>): QueryInterestFactorsResponse;
};
export declare const DepositResponse: {
    encode(message: DepositResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DepositResponse;
    fromJSON(object: any): DepositResponse;
    toJSON(message: DepositResponse): unknown;
    fromPartial(object: DeepPartial<DepositResponse>): DepositResponse;
};
export declare const SupplyInterestFactorResponse: {
    encode(message: SupplyInterestFactorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SupplyInterestFactorResponse;
    fromJSON(object: any): SupplyInterestFactorResponse;
    toJSON(message: SupplyInterestFactorResponse): unknown;
    fromPartial(object: DeepPartial<SupplyInterestFactorResponse>): SupplyInterestFactorResponse;
};
export declare const BorrowResponse: {
    encode(message: BorrowResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BorrowResponse;
    fromJSON(object: any): BorrowResponse;
    toJSON(message: BorrowResponse): unknown;
    fromPartial(object: DeepPartial<BorrowResponse>): BorrowResponse;
};
export declare const BorrowInterestFactorResponse: {
    encode(message: BorrowInterestFactorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BorrowInterestFactorResponse;
    fromJSON(object: any): BorrowInterestFactorResponse;
    toJSON(message: BorrowInterestFactorResponse): unknown;
    fromPartial(object: DeepPartial<BorrowInterestFactorResponse>): BorrowInterestFactorResponse;
};
export declare const MoneyMarketInterestRate: {
    encode(message: MoneyMarketInterestRate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MoneyMarketInterestRate;
    fromJSON(object: any): MoneyMarketInterestRate;
    toJSON(message: MoneyMarketInterestRate): unknown;
    fromPartial(object: DeepPartial<MoneyMarketInterestRate>): MoneyMarketInterestRate;
};
export declare const InterestFactor: {
    encode(message: InterestFactor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InterestFactor;
    fromJSON(object: any): InterestFactor;
    toJSON(message: InterestFactor): unknown;
    fromPartial(object: DeepPartial<InterestFactor>): InterestFactor;
};
