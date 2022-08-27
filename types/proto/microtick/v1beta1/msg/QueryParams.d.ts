import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface QueryParamsRequest {
}
export interface QueryParamsResponse {
    europeanOptions: boolean;
    commissionCreatePerunit: string;
    commissionTradeFixed: string;
    commissionUpdatePerunit: string;
    commissionSettleFixed: string;
    commissionCancelPerunit: string;
    settleIncentive: string;
    freezeTime: number;
    mintDenom: string;
    mintRewardCreatePerunit: string;
    mintRewardUpdatePerunit: string;
    mintRewardTradeFixed: string;
    mintRewardSettleFixed: string;
    cancelSlashRate: string;
    backingDenom: string;
    backingRatio: string;
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
