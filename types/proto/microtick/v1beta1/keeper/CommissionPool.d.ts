import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface commission_pool {
    pool: DecCoin;
}
export declare const commission_pool: {
    encode(message: commission_pool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): commission_pool;
    fromJSON(object: any): commission_pool;
    toJSON(message: commission_pool): unknown;
    fromPartial(object: DeepPartial<commission_pool>): commission_pool;
};
