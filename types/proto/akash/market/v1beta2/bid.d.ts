import { OrderID } from "./order";
import { DecCoin, Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** State is an enum which refers to state of bid */
export declare enum Bid_State {
    /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
    invalid = 0,
    /** open - BidOpen denotes state for bid open */
    open = 1,
    /** active - BidMatched denotes state for bid open */
    active = 2,
    /** lost - BidLost denotes state for bid lost */
    lost = 3,
    /** closed - BidClosed denotes state for bid closed */
    closed = 4,
    UNRECOGNIZED = -1
}
export declare function bid_StateFromJSON(object: any): Bid_State;
export declare function bid_StateToJSON(object: Bid_State): string;
/** MsgCreateBid defines an SDK message for creating Bid */
export interface MsgCreateBid {
    order: OrderID;
    provider: string;
    price: DecCoin;
    deposit: Coin;
}
/** MsgCreateBidResponse defines the Msg/CreateBid response type. */
export interface MsgCreateBidResponse {
}
/** MsgCloseBid defines an SDK message for closing bid */
export interface MsgCloseBid {
    bidId: BidID;
}
/** MsgCloseBidResponse defines the Msg/CloseBid response type. */
export interface MsgCloseBidResponse {
}
/**
 * BidID stores owner and all other seq numbers
 * A successful bid becomes a Lease(ID).
 */
export interface BidID {
    owner: string;
    dseq: Long;
    gseq: number;
    oseq: number;
    provider: string;
}
/** Bid stores BidID, state of bid and price */
export interface Bid {
    bidId: BidID;
    state: Bid_State;
    price: DecCoin;
    createdAt: Long;
}
/** BidFilters defines flags for bid list filter */
export interface BidFilters {
    owner: string;
    dseq: Long;
    gseq: number;
    oseq: number;
    provider: string;
    state: string;
}
export declare const MsgCreateBid: {
    encode(message: MsgCreateBid, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBid;
    fromJSON(object: any): MsgCreateBid;
    toJSON(message: MsgCreateBid): unknown;
    fromPartial(object: DeepPartial<MsgCreateBid>): MsgCreateBid;
};
export declare const MsgCreateBidResponse: {
    encode(_: MsgCreateBidResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBidResponse;
    fromJSON(_: any): MsgCreateBidResponse;
    toJSON(_: MsgCreateBidResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateBidResponse>): MsgCreateBidResponse;
};
export declare const MsgCloseBid: {
    encode(message: MsgCloseBid, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseBid;
    fromJSON(object: any): MsgCloseBid;
    toJSON(message: MsgCloseBid): unknown;
    fromPartial(object: DeepPartial<MsgCloseBid>): MsgCloseBid;
};
export declare const MsgCloseBidResponse: {
    encode(_: MsgCloseBidResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseBidResponse;
    fromJSON(_: any): MsgCloseBidResponse;
    toJSON(_: MsgCloseBidResponse): unknown;
    fromPartial(_: DeepPartial<MsgCloseBidResponse>): MsgCloseBidResponse;
};
export declare const BidID: {
    encode(message: BidID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BidID;
    fromJSON(object: any): BidID;
    toJSON(message: BidID): unknown;
    fromPartial(object: DeepPartial<BidID>): BidID;
};
export declare const Bid: {
    encode(message: Bid, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Bid;
    fromJSON(object: any): Bid;
    toJSON(message: Bid): unknown;
    fromPartial(object: DeepPartial<Bid>): Bid;
};
export declare const BidFilters: {
    encode(message: BidFilters, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BidFilters;
    fromJSON(object: any): BidFilters;
    toJSON(message: BidFilters): unknown;
    fromPartial(object: DeepPartial<BidFilters>): BidFilters;
};
