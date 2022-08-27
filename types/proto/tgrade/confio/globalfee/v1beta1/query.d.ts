import { DecCoin } from "../../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/**
 * QueryMinimumGasPricesRequest is the request type for the
 * Query/MinimumGasPrices RPC method.
 */
export interface QueryMinimumGasPricesRequest {
}
/**
 * QueryMinimumGasPricesResponse is the response type for the
 * Query/MinimumGasPrices RPC method.
 */
export interface QueryMinimumGasPricesResponse {
    minimumGasPrices: DecCoin[];
}
export declare const QueryMinimumGasPricesRequest: {
    encode(_: QueryMinimumGasPricesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryMinimumGasPricesRequest;
    fromJSON(_: any): QueryMinimumGasPricesRequest;
    toJSON(_: QueryMinimumGasPricesRequest): unknown;
    fromPartial(_: DeepPartial<QueryMinimumGasPricesRequest>): QueryMinimumGasPricesRequest;
};
export declare const QueryMinimumGasPricesResponse: {
    encode(message: QueryMinimumGasPricesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryMinimumGasPricesResponse;
    fromJSON(object: any): QueryMinimumGasPricesResponse;
    toJSON(message: QueryMinimumGasPricesResponse): unknown;
    fromPartial(object: DeepPartial<QueryMinimumGasPricesResponse>): QueryMinimumGasPricesResponse;
};
