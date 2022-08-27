import { DecCoin, Coin } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** FunctionParam is a key-value pair used for specifying a specific bond parameter. */
export interface FunctionParam {
    param: string;
    value: string;
}
/** BondDetails contains details about the current state of a given bond. */
export interface BondDetails {
    bondDid: string;
    spotPrice: DecCoin[];
    supply: Coin;
    reserve: Coin[];
}
/** Bond defines a token bonding curve type with all of its parameters. */
export interface Bond {
    token: string;
    name: string;
    description: string;
    creatorDid: string;
    controllerDid: string;
    functionType: string;
    functionParameters: FunctionParam[];
    reserveTokens: string[];
    txFeePercentage: string;
    exitFeePercentage: string;
    feeAddress: string;
    reserveWithdrawalAddress: string;
    maxSupply: Coin;
    orderQuantityLimits: Coin[];
    sanityRate: string;
    sanityMarginPercentage: string;
    currentSupply: Coin;
    currentReserve: Coin[];
    availableReserve: Coin[];
    currentOutcomePaymentReserve: Coin[];
    allowSells: boolean;
    allowReserveWithdrawals: boolean;
    alphaBond: boolean;
    batchBlocks: string;
    outcomePayment: string;
    state: string;
    bondDid: string;
}
/**
 * BaseOrder defines a base order type. It contains all the necessary fields for specifying
 * the general details about a buy, sell, or swap order.
 */
export interface BaseOrder {
    accountDid: string;
    amount: Coin;
    cancelled: boolean;
    cancelReason: string;
}
/**
 * BuyOrder defines a type for submitting a buy order on a bond, together with the maximum
 * amount of reserve tokens the buyer is willing to pay.
 */
export interface BuyOrder {
    baseOrder: BaseOrder;
    maxPrices: Coin[];
}
/** SellOrder defines a type for submitting a sell order on a bond. */
export interface SellOrder {
    baseOrder: BaseOrder;
}
/** SwapOrder defines a type for submitting a swap order between two tokens on a bond. */
export interface SwapOrder {
    baseOrder: BaseOrder;
    toToken: string;
}
/** Batch holds a collection of outstanding buy, sell, and swap orders on a particular bond. */
export interface Batch {
    bondDid: string;
    blocksRemaining: string;
    nextPublicAlpha: string;
    totalBuyAmount: Coin;
    totalSellAmount: Coin;
    buyPrices: DecCoin[];
    sellPrices: DecCoin[];
    buys: BuyOrder[];
    sells: SellOrder[];
    swaps: SwapOrder[];
}
/** Params defines the parameters for the bonds module. */
export interface Params {
    reservedBondTokens: string[];
}
export declare const FunctionParam: {
    encode(message: FunctionParam, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FunctionParam;
    fromJSON(object: any): FunctionParam;
    toJSON(message: FunctionParam): unknown;
    fromPartial(object: DeepPartial<FunctionParam>): FunctionParam;
};
export declare const BondDetails: {
    encode(message: BondDetails, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BondDetails;
    fromJSON(object: any): BondDetails;
    toJSON(message: BondDetails): unknown;
    fromPartial(object: DeepPartial<BondDetails>): BondDetails;
};
export declare const Bond: {
    encode(message: Bond, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Bond;
    fromJSON(object: any): Bond;
    toJSON(message: Bond): unknown;
    fromPartial(object: DeepPartial<Bond>): Bond;
};
export declare const BaseOrder: {
    encode(message: BaseOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BaseOrder;
    fromJSON(object: any): BaseOrder;
    toJSON(message: BaseOrder): unknown;
    fromPartial(object: DeepPartial<BaseOrder>): BaseOrder;
};
export declare const BuyOrder: {
    encode(message: BuyOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BuyOrder;
    fromJSON(object: any): BuyOrder;
    toJSON(message: BuyOrder): unknown;
    fromPartial(object: DeepPartial<BuyOrder>): BuyOrder;
};
export declare const SellOrder: {
    encode(message: SellOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SellOrder;
    fromJSON(object: any): SellOrder;
    toJSON(message: SellOrder): unknown;
    fromPartial(object: DeepPartial<SellOrder>): SellOrder;
};
export declare const SwapOrder: {
    encode(message: SwapOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SwapOrder;
    fromJSON(object: any): SwapOrder;
    toJSON(message: SwapOrder): unknown;
    fromPartial(object: DeepPartial<SwapOrder>): SwapOrder;
};
export declare const Batch: {
    encode(message: Batch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Batch;
    fromJSON(object: any): Batch;
    toJSON(message: Batch): unknown;
    fromPartial(object: DeepPartial<Batch>): Batch;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: DeepPartial<Params>): Params;
};
