import { FunctionParam } from "./bonds";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** MsgCreateBond defines a message for creating a new bond. */
export interface MsgCreateBond {
    bondDid: string;
    token: string;
    name: string;
    description: string;
    functionType: string;
    functionParameters: FunctionParam[];
    creatorDid: string;
    controllerDid: string;
    reserveTokens: string[];
    txFeePercentage: string;
    exitFeePercentage: string;
    feeAddress: string;
    reserveWithdrawalAddress: string;
    maxSupply: Coin;
    orderQuantityLimits: Coin[];
    sanityRate: string;
    sanityMarginPercentage: string;
    allowSells: boolean;
    allowReserveWithdrawals: boolean;
    alphaBond: boolean;
    batchBlocks: string;
    outcomePayment: string;
}
/** MsgCreateBondResponse defines the Msg/CreateBond response type. */
export interface MsgCreateBondResponse {
}
/** MsgEditBond defines a message for editing an existing bond. */
export interface MsgEditBond {
    bondDid: string;
    name: string;
    description: string;
    orderQuantityLimits: string;
    sanityRate: string;
    sanityMarginPercentage: string;
    editorDid: string;
}
/** MsgEditBondResponse defines the Msg/EditBond response type. */
export interface MsgEditBondResponse {
}
/** MsgSetNextAlpha defines a message for editing a bond's alpha parameter. */
export interface MsgSetNextAlpha {
    bondDid: string;
    alpha: string;
    editorDid: string;
}
export interface MsgSetNextAlphaResponse {
}
/** MsgUpdateBondState defines a message for updating a bond's current state. */
export interface MsgUpdateBondState {
    bondDid: string;
    state: string;
    editorDid: string;
}
/** MsgUpdateBondStateResponse defines the Msg/UpdateBondState response type. */
export interface MsgUpdateBondStateResponse {
}
/** MsgBuy defines a message for buying from a bond. */
export interface MsgBuy {
    buyerDid: string;
    amount: Coin;
    maxPrices: Coin[];
    bondDid: string;
}
/** MsgBuyResponse defines the Msg/Buy response type. */
export interface MsgBuyResponse {
}
/** MsgSell defines a message for selling from a bond. */
export interface MsgSell {
    sellerDid: string;
    amount: Coin;
    bondDid: string;
}
/** MsgSellResponse defines the Msg/Sell response type. */
export interface MsgSellResponse {
}
/** MsgSwap defines a message for swapping from one reserve bond token to another. */
export interface MsgSwap {
    swapperDid: string;
    bondDid: string;
    from: Coin;
    toToken: string;
}
/** MsgSwapResponse defines the Msg/Swap response type. */
export interface MsgSwapResponse {
}
/** MsgMakeOutcomePayment defines a message for making an outcome payment to a bond. */
export interface MsgMakeOutcomePayment {
    senderDid: string;
    amount: string;
    bondDid: string;
}
/** MsgMakeOutcomePaymentResponse defines the Msg/MakeOutcomePayment response type. */
export interface MsgMakeOutcomePaymentResponse {
}
/** MsgWithdrawShare defines a message for withdrawing a share from a bond that is in the SETTLE stage. */
export interface MsgWithdrawShare {
    recipientDid: string;
    bondDid: string;
}
/** MsgWithdrawShareResponse defines the Msg/WithdrawShare response type. */
export interface MsgWithdrawShareResponse {
}
/** MsgWithdrawReserve defines a message for withdrawing reserve from a bond. */
export interface MsgWithdrawReserve {
    withdrawerDid: string;
    amount: Coin[];
    bondDid: string;
}
/** MsgWithdrawReserveResponse defines the Msg/WithdrawReserve response type. */
export interface MsgWithdrawReserveResponse {
}
export declare const MsgCreateBond: {
    encode(message: MsgCreateBond, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBond;
    fromJSON(object: any): MsgCreateBond;
    toJSON(message: MsgCreateBond): unknown;
    fromPartial(object: DeepPartial<MsgCreateBond>): MsgCreateBond;
};
export declare const MsgCreateBondResponse: {
    encode(_: MsgCreateBondResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBondResponse;
    fromJSON(_: any): MsgCreateBondResponse;
    toJSON(_: MsgCreateBondResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateBondResponse>): MsgCreateBondResponse;
};
export declare const MsgEditBond: {
    encode(message: MsgEditBond, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditBond;
    fromJSON(object: any): MsgEditBond;
    toJSON(message: MsgEditBond): unknown;
    fromPartial(object: DeepPartial<MsgEditBond>): MsgEditBond;
};
export declare const MsgEditBondResponse: {
    encode(_: MsgEditBondResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditBondResponse;
    fromJSON(_: any): MsgEditBondResponse;
    toJSON(_: MsgEditBondResponse): unknown;
    fromPartial(_: DeepPartial<MsgEditBondResponse>): MsgEditBondResponse;
};
export declare const MsgSetNextAlpha: {
    encode(message: MsgSetNextAlpha, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetNextAlpha;
    fromJSON(object: any): MsgSetNextAlpha;
    toJSON(message: MsgSetNextAlpha): unknown;
    fromPartial(object: DeepPartial<MsgSetNextAlpha>): MsgSetNextAlpha;
};
export declare const MsgSetNextAlphaResponse: {
    encode(_: MsgSetNextAlphaResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetNextAlphaResponse;
    fromJSON(_: any): MsgSetNextAlphaResponse;
    toJSON(_: MsgSetNextAlphaResponse): unknown;
    fromPartial(_: DeepPartial<MsgSetNextAlphaResponse>): MsgSetNextAlphaResponse;
};
export declare const MsgUpdateBondState: {
    encode(message: MsgUpdateBondState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateBondState;
    fromJSON(object: any): MsgUpdateBondState;
    toJSON(message: MsgUpdateBondState): unknown;
    fromPartial(object: DeepPartial<MsgUpdateBondState>): MsgUpdateBondState;
};
export declare const MsgUpdateBondStateResponse: {
    encode(_: MsgUpdateBondStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateBondStateResponse;
    fromJSON(_: any): MsgUpdateBondStateResponse;
    toJSON(_: MsgUpdateBondStateResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateBondStateResponse>): MsgUpdateBondStateResponse;
};
export declare const MsgBuy: {
    encode(message: MsgBuy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuy;
    fromJSON(object: any): MsgBuy;
    toJSON(message: MsgBuy): unknown;
    fromPartial(object: DeepPartial<MsgBuy>): MsgBuy;
};
export declare const MsgBuyResponse: {
    encode(_: MsgBuyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuyResponse;
    fromJSON(_: any): MsgBuyResponse;
    toJSON(_: MsgBuyResponse): unknown;
    fromPartial(_: DeepPartial<MsgBuyResponse>): MsgBuyResponse;
};
export declare const MsgSell: {
    encode(message: MsgSell, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSell;
    fromJSON(object: any): MsgSell;
    toJSON(message: MsgSell): unknown;
    fromPartial(object: DeepPartial<MsgSell>): MsgSell;
};
export declare const MsgSellResponse: {
    encode(_: MsgSellResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSellResponse;
    fromJSON(_: any): MsgSellResponse;
    toJSON(_: MsgSellResponse): unknown;
    fromPartial(_: DeepPartial<MsgSellResponse>): MsgSellResponse;
};
export declare const MsgSwap: {
    encode(message: MsgSwap, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwap;
    fromJSON(object: any): MsgSwap;
    toJSON(message: MsgSwap): unknown;
    fromPartial(object: DeepPartial<MsgSwap>): MsgSwap;
};
export declare const MsgSwapResponse: {
    encode(_: MsgSwapResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapResponse;
    fromJSON(_: any): MsgSwapResponse;
    toJSON(_: MsgSwapResponse): unknown;
    fromPartial(_: DeepPartial<MsgSwapResponse>): MsgSwapResponse;
};
export declare const MsgMakeOutcomePayment: {
    encode(message: MsgMakeOutcomePayment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMakeOutcomePayment;
    fromJSON(object: any): MsgMakeOutcomePayment;
    toJSON(message: MsgMakeOutcomePayment): unknown;
    fromPartial(object: DeepPartial<MsgMakeOutcomePayment>): MsgMakeOutcomePayment;
};
export declare const MsgMakeOutcomePaymentResponse: {
    encode(_: MsgMakeOutcomePaymentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMakeOutcomePaymentResponse;
    fromJSON(_: any): MsgMakeOutcomePaymentResponse;
    toJSON(_: MsgMakeOutcomePaymentResponse): unknown;
    fromPartial(_: DeepPartial<MsgMakeOutcomePaymentResponse>): MsgMakeOutcomePaymentResponse;
};
export declare const MsgWithdrawShare: {
    encode(message: MsgWithdrawShare, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawShare;
    fromJSON(object: any): MsgWithdrawShare;
    toJSON(message: MsgWithdrawShare): unknown;
    fromPartial(object: DeepPartial<MsgWithdrawShare>): MsgWithdrawShare;
};
export declare const MsgWithdrawShareResponse: {
    encode(_: MsgWithdrawShareResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawShareResponse;
    fromJSON(_: any): MsgWithdrawShareResponse;
    toJSON(_: MsgWithdrawShareResponse): unknown;
    fromPartial(_: DeepPartial<MsgWithdrawShareResponse>): MsgWithdrawShareResponse;
};
export declare const MsgWithdrawReserve: {
    encode(message: MsgWithdrawReserve, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawReserve;
    fromJSON(object: any): MsgWithdrawReserve;
    toJSON(message: MsgWithdrawReserve): unknown;
    fromPartial(object: DeepPartial<MsgWithdrawReserve>): MsgWithdrawReserve;
};
export declare const MsgWithdrawReserveResponse: {
    encode(_: MsgWithdrawReserveResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawReserveResponse;
    fromJSON(_: any): MsgWithdrawReserveResponse;
    toJSON(_: MsgWithdrawReserveResponse): unknown;
    fromPartial(_: DeepPartial<MsgWithdrawReserveResponse>): MsgWithdrawReserveResponse;
};
