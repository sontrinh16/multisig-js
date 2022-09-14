import * as _763 from "./mint/v1beta1/genesis";
import * as _764 from "./mint/v1beta1/mint";
import * as _765 from "./mint/v1beta1/query";
export declare namespace stargaze {
    namespace mint {
        const v1beta1: {
            QueryParamsRequest: {
                encode(_: _765.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _765.QueryParamsRequest;
                fromJSON(_: any): _765.QueryParamsRequest;
                toJSON(_: _765.QueryParamsRequest): unknown;
                fromPartial(_: {}): _765.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _765.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _765.QueryParamsResponse;
                fromJSON(object: any): _765.QueryParamsResponse;
                toJSON(message: _765.QueryParamsResponse): unknown;
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
                }): _765.QueryParamsResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _765.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _765.QueryAnnualProvisionsRequest;
                fromJSON(_: any): _765.QueryAnnualProvisionsRequest;
                toJSON(_: _765.QueryAnnualProvisionsRequest): unknown;
                fromPartial(_: {}): _765.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _765.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _765.QueryAnnualProvisionsResponse;
                fromJSON(object: any): _765.QueryAnnualProvisionsResponse;
                toJSON(message: _765.QueryAnnualProvisionsResponse): unknown;
                fromPartial(object: {
                    annualProvisions?: Uint8Array;
                }): _765.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _764.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _764.Minter;
                fromJSON(object: any): _764.Minter;
                toJSON(message: _764.Minter): unknown;
                fromPartial(object: {
                    annualProvisions?: string;
                }): _764.Minter;
            };
            Params: {
                encode(message: _764.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _764.Params;
                fromJSON(object: any): _764.Params;
                toJSON(message: _764.Params): unknown;
                fromPartial(object: {
                    mintDenom?: string;
                    startTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    initialAnnualProvisions?: string;
                    reductionFactor?: string;
                    blocksPerYear?: any;
                }): _764.Params;
            };
            GenesisState: {
                encode(message: _763.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _763.GenesisState;
                fromJSON(object: any): _763.GenesisState;
                toJSON(message: _763.GenesisState): unknown;
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
                }): _763.GenesisState;
            };
        };
    }
}
