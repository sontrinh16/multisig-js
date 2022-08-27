import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** MsgConvertCoin defines a Msg to convert a Cosmos Coin to a ERC20 token */
export interface MsgConvertCoin {
    /**
     * Cosmos coin which denomination is registered on erc20 bridge.
     * The coin amount defines the total ERC20 tokens to convert.
     */
    coin: Coin;
    /** recipient hex address to receive ERC20 token */
    receiver: string;
    /** cosmos bech32 address from the owner of the given ERC20 tokens */
    sender: string;
}
/** MsgConvertCoinResponse returns no fields */
export interface MsgConvertCoinResponse {
}
/** MsgConvertERC20 defines a Msg to convert an ERC20 token to a Cosmos SDK coin. */
export interface MsgConvertERC20 {
    /** ERC20 token contract address registered on erc20 bridge */
    contractAddress: string;
    /** amount of ERC20 tokens to mint */
    amount: string;
    /** bech32 address to receive SDK coins. */
    receiver: string;
    /** sender hex address from the owner of the given ERC20 tokens */
    sender: string;
}
/** MsgConvertERC20Response returns no fields */
export interface MsgConvertERC20Response {
}
export declare const MsgConvertCoin: {
    encode(message: MsgConvertCoin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgConvertCoin;
    fromJSON(object: any): MsgConvertCoin;
    toJSON(message: MsgConvertCoin): unknown;
    fromPartial(object: DeepPartial<MsgConvertCoin>): MsgConvertCoin;
};
export declare const MsgConvertCoinResponse: {
    encode(_: MsgConvertCoinResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgConvertCoinResponse;
    fromJSON(_: any): MsgConvertCoinResponse;
    toJSON(_: MsgConvertCoinResponse): unknown;
    fromPartial(_: DeepPartial<MsgConvertCoinResponse>): MsgConvertCoinResponse;
};
export declare const MsgConvertERC20: {
    encode(message: MsgConvertERC20, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgConvertERC20;
    fromJSON(object: any): MsgConvertERC20;
    toJSON(message: MsgConvertERC20): unknown;
    fromPartial(object: DeepPartial<MsgConvertERC20>): MsgConvertERC20;
};
export declare const MsgConvertERC20Response: {
    encode(_: MsgConvertERC20Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgConvertERC20Response;
    fromJSON(_: any): MsgConvertERC20Response;
    toJSON(_: MsgConvertERC20Response): unknown;
    fromPartial(_: DeepPartial<MsgConvertERC20Response>): MsgConvertERC20Response;
};
