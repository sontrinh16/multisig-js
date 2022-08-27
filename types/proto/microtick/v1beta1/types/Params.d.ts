import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface MicrotickParams {
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
export declare const MicrotickParams: {
    encode(message: MicrotickParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MicrotickParams;
    fromJSON(object: any): MicrotickParams;
    toJSON(message: MicrotickParams): unknown;
    fromPartial(object: DeepPartial<MicrotickParams>): MicrotickParams;
};
