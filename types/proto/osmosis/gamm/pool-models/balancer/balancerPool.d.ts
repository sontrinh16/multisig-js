import { Timestamp } from "../../../../google/protobuf/timestamp";
import { Duration } from "../../../../google/protobuf/duration";
import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/**
 * Parameters for changing the weights in a balancer pool smoothly from
 * a start weight and end weight over a period of time.
 * Currently, the only smooth change supported is linear changing between
 * the two weights, but more types may be added in the future.
 * When these parameters are set, the weight w(t) for pool time `t` is the
 * following:
 * t <= start_time: w(t) = initial_pool_weights
 * start_time < t <= start_time + duration:
 * w(t) = initial_pool_weights + (t - start_time) *
 * (target_pool_weights - initial_pool_weights) / (duration)
 * t > start_time + duration: w(t) = target_pool_weights
 */
export interface SmoothWeightChangeParams {
    /**
     * The start time for beginning the weight change.
     * If a parameter change / pool instantiation leaves this blank,
     * it should be generated by the state_machine as the current time.
     */
    startTime: Timestamp;
    /** Duration for the weights to change over */
    duration: Duration;
    /**
     * The initial pool weights. These are copied from the pool's settings
     * at the time of weight change instantiation.
     * The amount PoolAsset.token.amount field is ignored if present,
     * future type refactorings should just have a type with the denom & weight
     * here.
     */
    initialPoolWeights: PoolAsset[];
    /**
     * The target pool weights. The pool weights will change linearly with respect
     * to time between start_time, and start_time + duration. The amount
     * PoolAsset.token.amount field is ignored if present, future type
     * refactorings should just have a type with the denom & weight here.
     */
    targetPoolWeights: PoolAsset[];
}
/**
 * PoolParams defined the parameters that will be managed by the pool
 * governance in the future. This params are not managed by the chain
 * governance. Instead they will be managed by the token holders of the pool.
 * The pool's token holders are specified in future_pool_governor.
 */
export interface PoolParams {
    swapFee: string;
    exitFee: string;
    smoothWeightChangeParams?: SmoothWeightChangeParams;
}
/**
 * Pool asset is an internal struct that combines the amount of the
 * token in the pool, and its balancer weight.
 * This is an awkward packaging of data,
 * and should be revisited in a future state migration.
 */
export interface PoolAsset {
    /**
     * Coins we are talking about,
     * the denomination must be unique amongst all PoolAssets for this pool.
     */
    token: Coin;
    /** Weight that is not normalized. This weight must be less than 2^50 */
    weight: string;
}
export interface Pool {
    address: string;
    id: Long;
    poolParams: PoolParams;
    /**
     * This string specifies who will govern the pool in the future.
     * Valid forms of this are:
     * {token name},{duration}
     * {duration}
     * where {token name} if specified is the token which determines the
     * governor, and if not specified is the LP token for this pool.duration is
     * a time specified as 0w,1w,2w, etc. which specifies how long the token
     * would need to be locked up to count in governance. 0w means no lockup.
     * TODO: Further improve these docs
     */
    futurePoolGovernor: string;
    /** sum of all LP tokens sent out */
    totalShares: Coin;
    /**
     * These are assumed to be sorted by denomiation.
     * They contain the pool asset and the information about the weight
     */
    poolAssets: PoolAsset[];
    /** sum of all non-normalized pool weights */
    totalWeight: string;
}
export declare const SmoothWeightChangeParams: {
    encode(message: SmoothWeightChangeParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SmoothWeightChangeParams;
    fromJSON(object: any): SmoothWeightChangeParams;
    toJSON(message: SmoothWeightChangeParams): unknown;
    fromPartial(object: DeepPartial<SmoothWeightChangeParams>): SmoothWeightChangeParams;
};
export declare const PoolParams: {
    encode(message: PoolParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PoolParams;
    fromJSON(object: any): PoolParams;
    toJSON(message: PoolParams): unknown;
    fromPartial(object: DeepPartial<PoolParams>): PoolParams;
};
export declare const PoolAsset: {
    encode(message: PoolAsset, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PoolAsset;
    fromJSON(object: any): PoolAsset;
    toJSON(message: PoolAsset): unknown;
    fromPartial(object: DeepPartial<PoolAsset>): PoolAsset;
};
export declare const Pool: {
    encode(message: Pool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Pool;
    fromJSON(object: any): Pool;
    toJSON(message: Pool): unknown;
    fromPartial(object: DeepPartial<Pool>): Pool;
};
