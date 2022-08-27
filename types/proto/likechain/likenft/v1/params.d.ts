import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** Params defines the parameters for the module. */
export interface Params {
    priceDenom: string;
    feePerByte: DecCoin;
    maxOfferDurationDays: Long;
    maxListingDurationDays: Long;
    maxRoyaltyBasisPoints: Long;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: DeepPartial<Params>): Params;
};
