import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/**
 * Selection is a pair of denom and multiplier name. It holds the choice of multiplier a user makes when they claim a
 * denom.
 */
export interface Selection {
    denom: string;
    multiplierName: string;
}
/** MsgClaimUSDXMintingReward message type used to claim USDX minting rewards */
export interface MsgClaimUSDXMintingReward {
    sender: string;
    multiplierName: string;
}
/** MsgClaimUSDXMintingRewardResponse defines the Msg/ClaimUSDXMintingReward response type. */
export interface MsgClaimUSDXMintingRewardResponse {
}
/** MsgClaimHardReward message type used to claim Hard liquidity provider rewards */
export interface MsgClaimHardReward {
    sender: string;
    denomsToClaim: Selection[];
}
/** MsgClaimHardRewardResponse defines the Msg/ClaimHardReward response type. */
export interface MsgClaimHardRewardResponse {
}
/** MsgClaimDelegatorReward message type used to claim delegator rewards */
export interface MsgClaimDelegatorReward {
    sender: string;
    denomsToClaim: Selection[];
}
/** MsgClaimDelegatorRewardResponse defines the Msg/ClaimDelegatorReward response type. */
export interface MsgClaimDelegatorRewardResponse {
}
/** MsgClaimSwapReward message type used to claim delegator rewards */
export interface MsgClaimSwapReward {
    sender: string;
    denomsToClaim: Selection[];
}
/** MsgClaimSwapRewardResponse defines the Msg/ClaimSwapReward response type. */
export interface MsgClaimSwapRewardResponse {
}
/** MsgClaimSavingsReward message type used to claim savings rewards */
export interface MsgClaimSavingsReward {
    sender: string;
    denomsToClaim: Selection[];
}
/** MsgClaimSavingsRewardResponse defines the Msg/ClaimSavingsReward response type. */
export interface MsgClaimSavingsRewardResponse {
}
export declare const Selection: {
    encode(message: Selection, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Selection;
    fromJSON(object: any): Selection;
    toJSON(message: Selection): unknown;
    fromPartial(object: DeepPartial<Selection>): Selection;
};
export declare const MsgClaimUSDXMintingReward: {
    encode(message: MsgClaimUSDXMintingReward, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimUSDXMintingReward;
    fromJSON(object: any): MsgClaimUSDXMintingReward;
    toJSON(message: MsgClaimUSDXMintingReward): unknown;
    fromPartial(object: DeepPartial<MsgClaimUSDXMintingReward>): MsgClaimUSDXMintingReward;
};
export declare const MsgClaimUSDXMintingRewardResponse: {
    encode(_: MsgClaimUSDXMintingRewardResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimUSDXMintingRewardResponse;
    fromJSON(_: any): MsgClaimUSDXMintingRewardResponse;
    toJSON(_: MsgClaimUSDXMintingRewardResponse): unknown;
    fromPartial(_: DeepPartial<MsgClaimUSDXMintingRewardResponse>): MsgClaimUSDXMintingRewardResponse;
};
export declare const MsgClaimHardReward: {
    encode(message: MsgClaimHardReward, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimHardReward;
    fromJSON(object: any): MsgClaimHardReward;
    toJSON(message: MsgClaimHardReward): unknown;
    fromPartial(object: DeepPartial<MsgClaimHardReward>): MsgClaimHardReward;
};
export declare const MsgClaimHardRewardResponse: {
    encode(_: MsgClaimHardRewardResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimHardRewardResponse;
    fromJSON(_: any): MsgClaimHardRewardResponse;
    toJSON(_: MsgClaimHardRewardResponse): unknown;
    fromPartial(_: DeepPartial<MsgClaimHardRewardResponse>): MsgClaimHardRewardResponse;
};
export declare const MsgClaimDelegatorReward: {
    encode(message: MsgClaimDelegatorReward, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimDelegatorReward;
    fromJSON(object: any): MsgClaimDelegatorReward;
    toJSON(message: MsgClaimDelegatorReward): unknown;
    fromPartial(object: DeepPartial<MsgClaimDelegatorReward>): MsgClaimDelegatorReward;
};
export declare const MsgClaimDelegatorRewardResponse: {
    encode(_: MsgClaimDelegatorRewardResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimDelegatorRewardResponse;
    fromJSON(_: any): MsgClaimDelegatorRewardResponse;
    toJSON(_: MsgClaimDelegatorRewardResponse): unknown;
    fromPartial(_: DeepPartial<MsgClaimDelegatorRewardResponse>): MsgClaimDelegatorRewardResponse;
};
export declare const MsgClaimSwapReward: {
    encode(message: MsgClaimSwapReward, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimSwapReward;
    fromJSON(object: any): MsgClaimSwapReward;
    toJSON(message: MsgClaimSwapReward): unknown;
    fromPartial(object: DeepPartial<MsgClaimSwapReward>): MsgClaimSwapReward;
};
export declare const MsgClaimSwapRewardResponse: {
    encode(_: MsgClaimSwapRewardResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimSwapRewardResponse;
    fromJSON(_: any): MsgClaimSwapRewardResponse;
    toJSON(_: MsgClaimSwapRewardResponse): unknown;
    fromPartial(_: DeepPartial<MsgClaimSwapRewardResponse>): MsgClaimSwapRewardResponse;
};
export declare const MsgClaimSavingsReward: {
    encode(message: MsgClaimSavingsReward, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimSavingsReward;
    fromJSON(object: any): MsgClaimSavingsReward;
    toJSON(message: MsgClaimSavingsReward): unknown;
    fromPartial(object: DeepPartial<MsgClaimSavingsReward>): MsgClaimSavingsReward;
};
export declare const MsgClaimSavingsRewardResponse: {
    encode(_: MsgClaimSavingsRewardResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimSavingsRewardResponse;
    fromJSON(_: any): MsgClaimSavingsRewardResponse;
    toJSON(_: MsgClaimSavingsRewardResponse): unknown;
    fromPartial(_: DeepPartial<MsgClaimSavingsRewardResponse>): MsgClaimSavingsRewardResponse;
};
