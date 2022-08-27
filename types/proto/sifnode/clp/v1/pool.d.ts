import { Asset } from "./types";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface Pool {
    externalAsset: Asset;
    nativeAssetBalance: string;
    externalAssetBalance: string;
    poolUnits: string;
    swapPriceNative: string;
    swapPriceExternal: string;
    rewardPeriodNativeDistributed: string;
    externalLiabilities: string;
    externalCustody: string;
    nativeLiabilities: string;
    nativeCustody: string;
    health: string;
    interestRate: string;
    lastHeightInterestRateComputed: Long;
}
export declare const Pool: {
    encode(message: Pool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Pool;
    fromJSON(object: any): Pool;
    toJSON(message: Pool): unknown;
    fromPartial(object: DeepPartial<Pool>): Pool;
};
