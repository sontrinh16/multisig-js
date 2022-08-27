import { DecProto } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface GenesisState_BalancesEntry {
    key: string;
    value: DecProto;
}
export interface GenesisState {
    balances: {
        [key: string]: DecProto;
    };
}
export declare const GenesisState_BalancesEntry: {
    encode(message: GenesisState_BalancesEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState_BalancesEntry;
    fromJSON(object: any): GenesisState_BalancesEntry;
    toJSON(message: GenesisState_BalancesEntry): unknown;
    fromPartial(object: DeepPartial<GenesisState_BalancesEntry>): GenesisState_BalancesEntry;
};
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
