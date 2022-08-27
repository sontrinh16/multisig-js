import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** BaseClaim is a claim with a single reward coin types */
export interface BaseClaim {
    owner: Uint8Array;
    reward: Coin;
}
/** BaseMultiClaim is a claim with multiple reward coin types */
export interface BaseMultiClaim {
    owner: Uint8Array;
    reward: Coin[];
}
/** RewardIndex stores reward accumulation information */
export interface RewardIndex {
    collateralType: string;
    rewardFactor: Uint8Array;
}
/** RewardIndexesProto defines a Protobuf wrapper around a RewardIndexes slice */
export interface RewardIndexesProto {
    rewardIndexes: RewardIndex[];
}
/** MultiRewardIndex stores reward accumulation information on multiple reward types */
export interface MultiRewardIndex {
    collateralType: string;
    rewardIndexes: RewardIndex[];
}
/** MultiRewardIndexesProto defines a Protobuf wrapper around a MultiRewardIndexes slice */
export interface MultiRewardIndexesProto {
    multiRewardIndexes: MultiRewardIndex[];
}
/** USDXMintingClaim is for USDX minting rewards */
export interface USDXMintingClaim {
    baseClaim: BaseClaim;
    rewardIndexes: RewardIndex[];
}
/** HardLiquidityProviderClaim stores the hard liquidity provider rewards that can be claimed by owner */
export interface HardLiquidityProviderClaim {
    baseClaim: BaseMultiClaim;
    supplyRewardIndexes: MultiRewardIndex[];
    borrowRewardIndexes: MultiRewardIndex[];
}
/** DelegatorClaim stores delegation rewards that can be claimed by owner */
export interface DelegatorClaim {
    baseClaim: BaseMultiClaim;
    rewardIndexes: MultiRewardIndex[];
}
/** SwapClaim stores the swap rewards that can be claimed by owner */
export interface SwapClaim {
    baseClaim: BaseMultiClaim;
    rewardIndexes: MultiRewardIndex[];
}
/** SavingsClaim stores the savings rewards that can be claimed by owner */
export interface SavingsClaim {
    baseClaim: BaseMultiClaim;
    rewardIndexes: MultiRewardIndex[];
}
export declare const BaseClaim: {
    encode(message: BaseClaim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BaseClaim;
    fromJSON(object: any): BaseClaim;
    toJSON(message: BaseClaim): unknown;
    fromPartial(object: DeepPartial<BaseClaim>): BaseClaim;
};
export declare const BaseMultiClaim: {
    encode(message: BaseMultiClaim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BaseMultiClaim;
    fromJSON(object: any): BaseMultiClaim;
    toJSON(message: BaseMultiClaim): unknown;
    fromPartial(object: DeepPartial<BaseMultiClaim>): BaseMultiClaim;
};
export declare const RewardIndex: {
    encode(message: RewardIndex, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RewardIndex;
    fromJSON(object: any): RewardIndex;
    toJSON(message: RewardIndex): unknown;
    fromPartial(object: DeepPartial<RewardIndex>): RewardIndex;
};
export declare const RewardIndexesProto: {
    encode(message: RewardIndexesProto, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RewardIndexesProto;
    fromJSON(object: any): RewardIndexesProto;
    toJSON(message: RewardIndexesProto): unknown;
    fromPartial(object: DeepPartial<RewardIndexesProto>): RewardIndexesProto;
};
export declare const MultiRewardIndex: {
    encode(message: MultiRewardIndex, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MultiRewardIndex;
    fromJSON(object: any): MultiRewardIndex;
    toJSON(message: MultiRewardIndex): unknown;
    fromPartial(object: DeepPartial<MultiRewardIndex>): MultiRewardIndex;
};
export declare const MultiRewardIndexesProto: {
    encode(message: MultiRewardIndexesProto, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MultiRewardIndexesProto;
    fromJSON(object: any): MultiRewardIndexesProto;
    toJSON(message: MultiRewardIndexesProto): unknown;
    fromPartial(object: DeepPartial<MultiRewardIndexesProto>): MultiRewardIndexesProto;
};
export declare const USDXMintingClaim: {
    encode(message: USDXMintingClaim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): USDXMintingClaim;
    fromJSON(object: any): USDXMintingClaim;
    toJSON(message: USDXMintingClaim): unknown;
    fromPartial(object: DeepPartial<USDXMintingClaim>): USDXMintingClaim;
};
export declare const HardLiquidityProviderClaim: {
    encode(message: HardLiquidityProviderClaim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HardLiquidityProviderClaim;
    fromJSON(object: any): HardLiquidityProviderClaim;
    toJSON(message: HardLiquidityProviderClaim): unknown;
    fromPartial(object: DeepPartial<HardLiquidityProviderClaim>): HardLiquidityProviderClaim;
};
export declare const DelegatorClaim: {
    encode(message: DelegatorClaim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DelegatorClaim;
    fromJSON(object: any): DelegatorClaim;
    toJSON(message: DelegatorClaim): unknown;
    fromPartial(object: DeepPartial<DelegatorClaim>): DelegatorClaim;
};
export declare const SwapClaim: {
    encode(message: SwapClaim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SwapClaim;
    fromJSON(object: any): SwapClaim;
    toJSON(message: SwapClaim): unknown;
    fromPartial(object: DeepPartial<SwapClaim>): SwapClaim;
};
export declare const SavingsClaim: {
    encode(message: SavingsClaim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SavingsClaim;
    fromJSON(object: any): SavingsClaim;
    toJSON(message: SavingsClaim): unknown;
    fromPartial(object: DeepPartial<SavingsClaim>): SavingsClaim;
};
