import { MicrotickParams } from "./Params";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface GenesisAccount {
    account: Uint8Array;
    placedQuotes: number;
    placedTrades: number;
}
export interface GenesisMarket {
    name: string;
    description: string;
}
export interface GenesisDuration {
    name: string;
    seconds: number;
}
export interface GenesisMicrotick {
    params: MicrotickParams;
    accounts: GenesisAccount[];
    markets: GenesisMarket[];
    durations: GenesisDuration[];
}
export declare const GenesisAccount: {
    encode(message: GenesisAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisAccount;
    fromJSON(object: any): GenesisAccount;
    toJSON(message: GenesisAccount): unknown;
    fromPartial(object: DeepPartial<GenesisAccount>): GenesisAccount;
};
export declare const GenesisMarket: {
    encode(message: GenesisMarket, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisMarket;
    fromJSON(object: any): GenesisMarket;
    toJSON(message: GenesisMarket): unknown;
    fromPartial(object: DeepPartial<GenesisMarket>): GenesisMarket;
};
export declare const GenesisDuration: {
    encode(message: GenesisDuration, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisDuration;
    fromJSON(object: any): GenesisDuration;
    toJSON(message: GenesisDuration): unknown;
    fromPartial(object: DeepPartial<GenesisDuration>): GenesisDuration;
};
export declare const GenesisMicrotick: {
    encode(message: GenesisMicrotick, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisMicrotick;
    fromJSON(object: any): GenesisMicrotick;
    toJSON(message: GenesisMicrotick): unknown;
    fromPartial(object: DeepPartial<GenesisMicrotick>): GenesisMicrotick;
};
