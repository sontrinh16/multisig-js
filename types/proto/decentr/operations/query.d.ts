import { DecCoin } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface MinGasPriceRequest {
}
export interface MinGasPriceResponse {
    minGasPrice: DecCoin;
}
export declare const MinGasPriceRequest: {
    encode(_: MinGasPriceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MinGasPriceRequest;
    fromJSON(_: any): MinGasPriceRequest;
    toJSON(_: MinGasPriceRequest): unknown;
    fromPartial(_: DeepPartial<MinGasPriceRequest>): MinGasPriceRequest;
};
export declare const MinGasPriceResponse: {
    encode(message: MinGasPriceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MinGasPriceResponse;
    fromJSON(object: any): MinGasPriceResponse;
    toJSON(message: MinGasPriceResponse): unknown;
    fromPartial(object: DeepPartial<MinGasPriceResponse>): MinGasPriceResponse;
};
