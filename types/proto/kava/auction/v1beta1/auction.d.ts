import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** BaseAuction defines common attributes of all auctions */
export interface BaseAuction {
    id: Long;
    initiator: string;
    lot: Coin;
    bidder: Uint8Array;
    bid: Coin;
    hasReceivedBids: boolean;
    endTime: Timestamp;
    maxEndTime: Timestamp;
}
/**
 * SurplusAuction is a forward auction that burns what it receives from bids.
 * It is normally used to sell off excess pegged asset acquired by the CDP system.
 */
export interface SurplusAuction {
    baseAuction: BaseAuction;
}
/**
 * DebtAuction is a reverse auction that mints what it pays out.
 * It is normally used to acquire pegged asset to cover the CDP system's debts that were not covered by selling
 * collateral.
 */
export interface DebtAuction {
    baseAuction: BaseAuction;
    correspondingDebt: Coin;
}
/**
 * CollateralAuction is a two phase auction.
 * Initially, in forward auction phase, bids can be placed up to a max bid.
 * Then it switches to a reverse auction phase, where the initial amount up for auction is bid down.
 * Unsold Lot is sent to LotReturns, being divided among the addresses by weight.
 * Collateral auctions are normally used to sell off collateral seized from CDPs.
 */
export interface CollateralAuction {
    baseAuction: BaseAuction;
    correspondingDebt: Coin;
    maxBid: Coin;
    lotReturns: WeightedAddresses;
}
/** WeightedAddresses is a type for storing some addresses and associated weights. */
export interface WeightedAddresses {
    addresses: Uint8Array[];
    weights: Uint8Array[];
}
export declare const BaseAuction: {
    encode(message: BaseAuction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BaseAuction;
    fromJSON(object: any): BaseAuction;
    toJSON(message: BaseAuction): unknown;
    fromPartial(object: DeepPartial<BaseAuction>): BaseAuction;
};
export declare const SurplusAuction: {
    encode(message: SurplusAuction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SurplusAuction;
    fromJSON(object: any): SurplusAuction;
    toJSON(message: SurplusAuction): unknown;
    fromPartial(object: DeepPartial<SurplusAuction>): SurplusAuction;
};
export declare const DebtAuction: {
    encode(message: DebtAuction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DebtAuction;
    fromJSON(object: any): DebtAuction;
    toJSON(message: DebtAuction): unknown;
    fromPartial(object: DeepPartial<DebtAuction>): DebtAuction;
};
export declare const CollateralAuction: {
    encode(message: CollateralAuction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CollateralAuction;
    fromJSON(object: any): CollateralAuction;
    toJSON(message: CollateralAuction): unknown;
    fromPartial(object: DeepPartial<CollateralAuction>): CollateralAuction;
};
export declare const WeightedAddresses: {
    encode(message: WeightedAddresses, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WeightedAddresses;
    fromJSON(object: any): WeightedAddresses;
    toJSON(message: WeightedAddresses): unknown;
    fromPartial(object: DeepPartial<WeightedAddresses>): WeightedAddresses;
};
