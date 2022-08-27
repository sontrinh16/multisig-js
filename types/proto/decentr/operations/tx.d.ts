import { Coin, DecProto } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface Reward {
    receiver: string;
    reward: DecProto;
}
export interface MsgDistributeRewards {
    owner: string;
    rewards: Reward[];
}
export interface MsgDistributeRewardsResponse {
}
export interface MsgResetAccount {
    owner: string;
    address: string;
}
export interface MsgResetAccountResponse {
}
export interface MsgMint {
    owner: string;
    coin: Coin;
}
export interface MsgMintResponse {
}
export interface MsgBurn {
    owner: string;
    coin: Coin;
}
export interface MsgBurnResponse {
}
export declare const Reward: {
    encode(message: Reward, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Reward;
    fromJSON(object: any): Reward;
    toJSON(message: Reward): unknown;
    fromPartial(object: DeepPartial<Reward>): Reward;
};
export declare const MsgDistributeRewards: {
    encode(message: MsgDistributeRewards, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDistributeRewards;
    fromJSON(object: any): MsgDistributeRewards;
    toJSON(message: MsgDistributeRewards): unknown;
    fromPartial(object: DeepPartial<MsgDistributeRewards>): MsgDistributeRewards;
};
export declare const MsgDistributeRewardsResponse: {
    encode(_: MsgDistributeRewardsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDistributeRewardsResponse;
    fromJSON(_: any): MsgDistributeRewardsResponse;
    toJSON(_: MsgDistributeRewardsResponse): unknown;
    fromPartial(_: DeepPartial<MsgDistributeRewardsResponse>): MsgDistributeRewardsResponse;
};
export declare const MsgResetAccount: {
    encode(message: MsgResetAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgResetAccount;
    fromJSON(object: any): MsgResetAccount;
    toJSON(message: MsgResetAccount): unknown;
    fromPartial(object: DeepPartial<MsgResetAccount>): MsgResetAccount;
};
export declare const MsgResetAccountResponse: {
    encode(_: MsgResetAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgResetAccountResponse;
    fromJSON(_: any): MsgResetAccountResponse;
    toJSON(_: MsgResetAccountResponse): unknown;
    fromPartial(_: DeepPartial<MsgResetAccountResponse>): MsgResetAccountResponse;
};
export declare const MsgMint: {
    encode(message: MsgMint, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMint;
    fromJSON(object: any): MsgMint;
    toJSON(message: MsgMint): unknown;
    fromPartial(object: DeepPartial<MsgMint>): MsgMint;
};
export declare const MsgMintResponse: {
    encode(_: MsgMintResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintResponse;
    fromJSON(_: any): MsgMintResponse;
    toJSON(_: MsgMintResponse): unknown;
    fromPartial(_: DeepPartial<MsgMintResponse>): MsgMintResponse;
};
export declare const MsgBurn: {
    encode(message: MsgBurn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurn;
    fromJSON(object: any): MsgBurn;
    toJSON(message: MsgBurn): unknown;
    fromPartial(object: DeepPartial<MsgBurn>): MsgBurn;
};
export declare const MsgBurnResponse: {
    encode(_: MsgBurnResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnResponse;
    fromJSON(_: any): MsgBurnResponse;
    toJSON(_: MsgBurnResponse): unknown;
    fromPartial(_: DeepPartial<MsgBurnResponse>): MsgBurnResponse;
};
