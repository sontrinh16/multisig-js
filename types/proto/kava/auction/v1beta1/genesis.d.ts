import { Any } from "../../../google/protobuf/any";
import { Duration } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** GenesisState defines the auction module's genesis state. */
export interface GenesisState {
    nextAuctionId: Long;
    params: Params;
    /** Genesis auctions */
    auctions: Any[];
}
/** Params defines the parameters for the issuance module. */
export interface Params {
    maxAuctionDuration: Duration;
    forwardBidDuration: Duration;
    reverseBidDuration: Duration;
    incrementSurplus: Uint8Array;
    incrementDebt: Uint8Array;
    incrementCollateral: Uint8Array;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: DeepPartial<Params>): Params;
};
