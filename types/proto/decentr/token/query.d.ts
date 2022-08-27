import { DecProto } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface BalanceRequest {
    address: string;
}
export interface BalanceResponse {
    balance: DecProto;
}
export declare const BalanceRequest: {
    encode(message: BalanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BalanceRequest;
    fromJSON(object: any): BalanceRequest;
    toJSON(message: BalanceRequest): unknown;
    fromPartial(object: DeepPartial<BalanceRequest>): BalanceRequest;
};
export declare const BalanceResponse: {
    encode(message: BalanceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BalanceResponse;
    fromJSON(object: any): BalanceResponse;
    toJSON(message: BalanceResponse): unknown;
    fromPartial(object: DeepPartial<BalanceResponse>): BalanceResponse;
};
