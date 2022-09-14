import * as _610 from "./halving/v1beta1/genesis";
import * as _611 from "./halving/v1beta1/halving";
import * as _612 from "./halving/v1beta1/query";
export declare namespace persistence {
    namespace halving {
        const v1beta1: {
            QueryParamsRequest: {
                encode(_: _612.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _612.QueryParamsRequest;
                fromJSON(_: any): _612.QueryParamsRequest;
                toJSON(_: _612.QueryParamsRequest): unknown;
                fromPartial(_: {}): _612.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _612.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _612.QueryParamsResponse;
                fromJSON(object: any): _612.QueryParamsResponse;
                toJSON(message: _612.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        blockHeight?: any;
                    };
                }): _612.QueryParamsResponse;
            };
            Params: {
                encode(message: _611.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _611.Params;
                fromJSON(object: any): _611.Params;
                toJSON(message: _611.Params): unknown;
                fromPartial(object: {
                    blockHeight?: any;
                }): _611.Params;
            };
            GenesisState: {
                encode(message: _610.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _610.GenesisState;
                fromJSON(object: any): _610.GenesisState;
                toJSON(message: _610.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        blockHeight?: any;
                    };
                }): _610.GenesisState;
            };
        };
    }
}
