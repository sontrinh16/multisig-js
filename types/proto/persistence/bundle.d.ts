import * as _542 from "./halving/v1beta1/genesis";
import * as _543 from "./halving/v1beta1/halving";
import * as _544 from "./halving/v1beta1/query";
export declare namespace persistence {
    namespace halving {
        const v1beta1: {
            QueryParamsRequest: {
                encode(_: _544.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _544.QueryParamsRequest;
                fromJSON(_: any): _544.QueryParamsRequest;
                toJSON(_: _544.QueryParamsRequest): unknown;
                fromPartial(_: {}): _544.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _544.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _544.QueryParamsResponse;
                fromJSON(object: any): _544.QueryParamsResponse;
                toJSON(message: _544.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        blockHeight?: any;
                    };
                }): _544.QueryParamsResponse;
            };
            Params: {
                encode(message: _543.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _543.Params;
                fromJSON(object: any): _543.Params;
                toJSON(message: _543.Params): unknown;
                fromPartial(object: {
                    blockHeight?: any;
                }): _543.Params;
            };
            GenesisState: {
                encode(message: _542.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _542.GenesisState;
                fromJSON(object: any): _542.GenesisState;
                toJSON(message: _542.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        blockHeight?: any;
                    };
                }): _542.GenesisState;
            };
        };
    }
}
