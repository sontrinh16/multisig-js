import * as _216 from "../decentr/token/genesis";
import * as _217 from "../decentr/token/query";
export declare const token: {
    BalanceRequest: {
        encode(message: _217.BalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.BalanceRequest;
        fromJSON(object: any): _217.BalanceRequest;
        toJSON(message: _217.BalanceRequest): unknown;
        fromPartial(object: {
            address?: string;
        }): _217.BalanceRequest;
    };
    BalanceResponse: {
        encode(message: _217.BalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.BalanceResponse;
        fromJSON(object: any): _217.BalanceResponse;
        toJSON(message: _217.BalanceResponse): unknown;
        fromPartial(object: {
            balance?: {
                dec?: string;
            };
        }): _217.BalanceResponse;
    };
    GenesisState_BalancesEntry: {
        encode(message: _216.GenesisState_BalancesEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.GenesisState_BalancesEntry;
        fromJSON(object: any): _216.GenesisState_BalancesEntry;
        toJSON(message: _216.GenesisState_BalancesEntry): unknown;
        fromPartial(object: {
            key?: string;
            value?: {
                dec?: string;
            };
        }): _216.GenesisState_BalancesEntry;
    };
    GenesisState: {
        encode(message: _216.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.GenesisState;
        fromJSON(object: any): _216.GenesisState;
        toJSON(message: _216.GenesisState): unknown;
        fromPartial(object: {
            balances?: {
                [x: string]: {
                    dec?: string;
                };
            };
        }): _216.GenesisState;
    };
};
