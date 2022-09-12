import { Params, Deposit, Borrow } from "./hard";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** GenesisState defines the hard module's genesis state. */
export interface GenesisState {
    params: Params;
    previousAccumulationTimes: GenesisAccumulationTime[];
    deposits: Deposit[];
    borrows: Borrow[];
    totalSupplied: Coin[];
    totalBorrowed: Coin[];
    totalReserves: Coin[];
}
/** GenesisAccumulationTime stores the previous distribution time and its corresponding denom. */
export interface GenesisAccumulationTime {
    collateralType: string;
    previousAccumulationTime: Timestamp;
    supplyInterestFactor: string;
    borrowInterestFactor: string;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
export declare const GenesisAccumulationTime: {
    encode(message: GenesisAccumulationTime, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisAccumulationTime;
    fromJSON(object: any): GenesisAccumulationTime;
    toJSON(message: GenesisAccumulationTime): unknown;
    fromPartial(object: DeepPartial<GenesisAccumulationTime>): GenesisAccumulationTime;
};
