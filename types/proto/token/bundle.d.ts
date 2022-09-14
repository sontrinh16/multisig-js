import * as _284 from "../decentr/token/genesis";
import * as _285 from "../decentr/token/query";
export declare const token: {
    BalanceRequest: {
        encode(message: _285.BalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _285.BalanceRequest;
        fromJSON(object: any): _285.BalanceRequest;
        toJSON(message: _285.BalanceRequest): unknown;
        fromPartial(object: {
            address?: string;
        }): _285.BalanceRequest;
    };
    BalanceResponse: {
        encode(message: _285.BalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _285.BalanceResponse;
        fromJSON(object: any): _285.BalanceResponse;
        toJSON(message: _285.BalanceResponse): unknown;
        fromPartial(object: {
            balance?: {
                dec?: string;
            };
        }): _285.BalanceResponse;
    };
    GenesisState_BalancesEntry: {
        encode(message: _284.GenesisState_BalancesEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _284.GenesisState_BalancesEntry;
        fromJSON(object: any): _284.GenesisState_BalancesEntry;
        toJSON(message: _284.GenesisState_BalancesEntry): unknown;
        fromPartial(object: {
            key?: string;
            value?: {
                dec?: string;
            };
        }): _284.GenesisState_BalancesEntry;
    };
    GenesisState: {
        encode(message: _284.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _284.GenesisState;
        fromJSON(object: any): _284.GenesisState;
        toJSON(message: _284.GenesisState): unknown;
        fromPartial(object: {
            balances?: {
                [x: string]: {
                    dec?: string;
                };
            };
        }): _284.GenesisState;
    };
};
