import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** MsgPlaceBid represents a message used by bidders to place bids on auctions */
export interface MsgPlaceBid {
    auctionId: Long;
    bidder: string;
    amount: Coin;
}
/** MsgPlaceBidResponse defines the Msg/PlaceBid response type. */
export interface MsgPlaceBidResponse {
}
export declare const MsgPlaceBid: {
    encode(message: MsgPlaceBid, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPlaceBid;
    fromJSON(object: any): MsgPlaceBid;
    toJSON(message: MsgPlaceBid): unknown;
    fromPartial(object: DeepPartial<MsgPlaceBid>): MsgPlaceBid;
};
export declare const MsgPlaceBidResponse: {
    encode(_: MsgPlaceBidResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPlaceBidResponse;
    fromJSON(_: any): MsgPlaceBidResponse;
    toJSON(_: MsgPlaceBidResponse): unknown;
    fromPartial(_: DeepPartial<MsgPlaceBidResponse>): MsgPlaceBidResponse;
};
