import * as _746 from "../sommelier/cellarfees/v1/genesis";
import * as _747 from "../sommelier/cellarfees/v1/params";
import * as _748 from "../sommelier/cellarfees/v1/query";
export declare namespace cellarfees {
    const v1: {
        QueryParamsRequest: {
            encode(_: _748.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _748.QueryParamsRequest;
            fromJSON(_: any): _748.QueryParamsRequest;
            toJSON(_: _748.QueryParamsRequest): unknown;
            fromPartial(_: {}): _748.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _748.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _748.QueryParamsResponse;
            fromJSON(object: any): _748.QueryParamsResponse;
            toJSON(message: _748.QueryParamsResponse): unknown;
            fromPartial(object: {
                params?: {};
            }): _748.QueryParamsResponse;
        };
        QueryModuleAccountsRequest: {
            encode(_: _748.QueryModuleAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _748.QueryModuleAccountsRequest;
            fromJSON(_: any): _748.QueryModuleAccountsRequest;
            toJSON(_: _748.QueryModuleAccountsRequest): unknown;
            fromPartial(_: {}): _748.QueryModuleAccountsRequest;
        };
        QueryModuleAccountsResponse: {
            encode(message: _748.QueryModuleAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _748.QueryModuleAccountsResponse;
            fromJSON(object: any): _748.QueryModuleAccountsResponse;
            toJSON(message: _748.QueryModuleAccountsResponse): unknown;
            fromPartial(object: {
                feesAddress?: string;
            }): _748.QueryModuleAccountsResponse;
        };
        Params: {
            encode(_: _747.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _747.Params;
            fromJSON(_: any): _747.Params;
            toJSON(_: _747.Params): unknown;
            fromPartial(_: {}): _747.Params;
        };
        GenesisState: {
            encode(message: _746.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _746.GenesisState;
            fromJSON(object: any): _746.GenesisState;
            toJSON(message: _746.GenesisState): unknown;
            fromPartial(object: {
                params?: {};
            }): _746.GenesisState;
        };
    };
}
