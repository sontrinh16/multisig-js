import * as _695 from "./mint/v1beta1/genesis";
import * as _696 from "./mint/v1beta1/mint";
import * as _697 from "./mint/v1beta1/query";
export declare namespace stargaze {
    namespace mint {
        const v1beta1: {
            QueryParamsRequest: {
                encode(_: _697.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _697.QueryParamsRequest;
                fromJSON(_: any): _697.QueryParamsRequest;
                toJSON(_: _697.QueryParamsRequest): unknown;
                fromPartial(_: {}): _697.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _697.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _697.QueryParamsResponse;
                fromJSON(object: any): _697.QueryParamsResponse;
                toJSON(message: _697.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        mintDenom?: string;
                        startTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        initialAnnualProvisions?: string;
                        reductionFactor?: string;
                        blocksPerYear?: any;
                    };
                }): _697.QueryParamsResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _697.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _697.QueryAnnualProvisionsRequest;
                fromJSON(_: any): _697.QueryAnnualProvisionsRequest;
                toJSON(_: _697.QueryAnnualProvisionsRequest): unknown;
                fromPartial(_: {}): _697.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _697.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _697.QueryAnnualProvisionsResponse;
                fromJSON(object: any): _697.QueryAnnualProvisionsResponse;
                toJSON(message: _697.QueryAnnualProvisionsResponse): unknown;
                fromPartial(object: {
                    annualProvisions?: Uint8Array;
                }): _697.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _696.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _696.Minter;
                fromJSON(object: any): _696.Minter;
                toJSON(message: _696.Minter): unknown;
                fromPartial(object: {
                    annualProvisions?: string;
                }): _696.Minter;
            };
            Params: {
                encode(message: _696.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _696.Params;
                fromJSON(object: any): _696.Params;
                toJSON(message: _696.Params): unknown;
                fromPartial(object: {
                    mintDenom?: string;
                    startTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    initialAnnualProvisions?: string;
                    reductionFactor?: string;
                    blocksPerYear?: any;
                }): _696.Params;
            };
            GenesisState: {
                encode(message: _695.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _695.GenesisState;
                fromJSON(object: any): _695.GenesisState;
                toJSON(message: _695.GenesisState): unknown;
                fromPartial(object: {
                    minter?: {
                        annualProvisions?: string;
                    };
                    params?: {
                        mintDenom?: string;
                        startTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        initialAnnualProvisions?: string;
                        reductionFactor?: string;
                        blocksPerYear?: any;
                    };
                }): _695.GenesisState;
            };
        };
    }
}
