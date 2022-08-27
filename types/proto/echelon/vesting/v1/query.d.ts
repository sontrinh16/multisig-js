import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** QueryBalancesRequest is the request type for the Query/Balances RPC method. */
export interface QueryBalancesRequest {
    /** address of the clawback vesting account */
    address: string;
}
/**
 * QueryBalancesResponse is the response type for the Query/Balances RPC
 * method.
 */
export interface QueryBalancesResponse {
    /** current amount of locked tokens */
    locked: Coin[];
    /** current amount of unvested tokens */
    unvested: Coin[];
    /** current amount of vested tokens */
    vested: Coin[];
}
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
