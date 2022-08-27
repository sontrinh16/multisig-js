import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/**
 * MinFee contains the minimum amount of coins that should be paid as a fee for
 * each message of the specific type sent
 */
export interface MinFee {
    messageType: string;
    amount: Coin[];
}
export declare const MinFee: {
    encode(message: MinFee, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MinFee;
    fromJSON(object: any): MinFee;
    toJSON(message: MinFee): unknown;
    fromPartial(object: DeepPartial<MinFee>): MinFee;
};
