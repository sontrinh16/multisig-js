import { DecCoin } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface Params {
    supervisors: string[];
    fixedGas: FixedGasParams;
    minGasPrice: DecCoin;
}
export interface FixedGasParams {
    resetAccount: Long;
    distributeRewards: Long;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: DeepPartial<Params>): Params;
};
export declare const FixedGasParams: {
    encode(message: FixedGasParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FixedGasParams;
    fromJSON(object: any): FixedGasParams;
    toJSON(message: FixedGasParams): unknown;
    fromPartial(object: DeepPartial<FixedGasParams>): FixedGasParams;
};
