import * as _678 from "../sommelier/cellarfees/v1/genesis";
import * as _679 from "../sommelier/cellarfees/v1/params";
import * as _680 from "../sommelier/cellarfees/v1/query";
export declare namespace cellarfees {
    const v1: {
        QueryParamsRequest: {
            encode(_: _680.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _680.QueryParamsRequest;
            fromJSON(_: any): _680.QueryParamsRequest;
            toJSON(_: _680.QueryParamsRequest): unknown;
            fromPartial(_: {}): _680.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _680.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _680.QueryParamsResponse;
            fromJSON(object: any): _680.QueryParamsResponse;
            toJSON(message: _680.QueryParamsResponse): unknown;
            fromPartial(object: {
                params?: {};
            }): _680.QueryParamsResponse;
        };
        QueryModuleAccountsRequest: {
            encode(_: _680.QueryModuleAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _680.QueryModuleAccountsRequest;
            fromJSON(_: any): _680.QueryModuleAccountsRequest;
            toJSON(_: _680.QueryModuleAccountsRequest): unknown;
            fromPartial(_: {}): _680.QueryModuleAccountsRequest;
        };
        QueryModuleAccountsResponse: {
            encode(message: _680.QueryModuleAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _680.QueryModuleAccountsResponse;
            fromJSON(object: any): _680.QueryModuleAccountsResponse;
            toJSON(message: _680.QueryModuleAccountsResponse): unknown;
            fromPartial(object: {
                feesAddress?: string;
            }): _680.QueryModuleAccountsResponse;
        };
        Params: {
            encode(_: _679.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _679.Params;
            fromJSON(_: any): _679.Params;
            toJSON(_: _679.Params): unknown;
            fromPartial(_: {}): _679.Params;
        };
        GenesisState: {
            encode(message: _678.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _678.GenesisState;
            fromJSON(object: any): _678.GenesisState;
            toJSON(message: _678.GenesisState): unknown;
            fromPartial(object: {
                params?: {};
            }): _678.GenesisState;
        };
    };
}
