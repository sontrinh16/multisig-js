import * as _659 from "../sommelier/cellarfees/v1/genesis";
import * as _660 from "../sommelier/cellarfees/v1/params";
import * as _661 from "../sommelier/cellarfees/v1/query";
export declare namespace cellarfees {
    const v1: {
        QueryParamsRequest: {
            encode(_: _661.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _661.QueryParamsRequest;
            fromJSON(_: any): _661.QueryParamsRequest;
            toJSON(_: _661.QueryParamsRequest): unknown;
            fromPartial(_: {}): _661.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _661.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _661.QueryParamsResponse;
            fromJSON(object: any): _661.QueryParamsResponse;
            toJSON(message: _661.QueryParamsResponse): unknown;
            fromPartial(object: {
                params?: {};
            }): _661.QueryParamsResponse;
        };
        QueryModuleAccountsRequest: {
            encode(_: _661.QueryModuleAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _661.QueryModuleAccountsRequest;
            fromJSON(_: any): _661.QueryModuleAccountsRequest;
            toJSON(_: _661.QueryModuleAccountsRequest): unknown;
            fromPartial(_: {}): _661.QueryModuleAccountsRequest;
        };
        QueryModuleAccountsResponse: {
            encode(message: _661.QueryModuleAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _661.QueryModuleAccountsResponse;
            fromJSON(object: any): _661.QueryModuleAccountsResponse;
            toJSON(message: _661.QueryModuleAccountsResponse): unknown;
            fromPartial(object: {
                feesAddress?: string;
            }): _661.QueryModuleAccountsResponse;
        };
        Params: {
            encode(_: _660.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _660.Params;
            fromJSON(_: any): _660.Params;
            toJSON(_: _660.Params): unknown;
            fromPartial(_: {}): _660.Params;
        };
        GenesisState: {
            encode(message: _659.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _659.GenesisState;
            fromJSON(object: any): _659.GenesisState;
            toJSON(message: _659.GenesisState): unknown;
            fromPartial(object: {
                params?: {};
            }): _659.GenesisState;
        };
    };
}
