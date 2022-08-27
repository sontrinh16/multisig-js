import * as _676 from "./mint/v1beta1/genesis";
import * as _677 from "./mint/v1beta1/mint";
import * as _678 from "./mint/v1beta1/query";
export declare namespace stargaze {
    namespace mint {
        const v1beta1: {
            QueryParamsRequest: {
                encode(_: _678.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _678.QueryParamsRequest;
                fromJSON(_: any): _678.QueryParamsRequest;
                toJSON(_: _678.QueryParamsRequest): unknown;
                fromPartial(_: {}): _678.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _678.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _678.QueryParamsResponse;
                fromJSON(object: any): _678.QueryParamsResponse;
                toJSON(message: _678.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        mintDenom?: string;
                        startTime?: Date;
                        initialAnnualProvisions?: string;
                        reductionFactor?: string;
                        blocksPerYear?: any;
                    };
                }): _678.QueryParamsResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _678.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _678.QueryAnnualProvisionsRequest;
                fromJSON(_: any): _678.QueryAnnualProvisionsRequest;
                toJSON(_: _678.QueryAnnualProvisionsRequest): unknown;
                fromPartial(_: {}): _678.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _678.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _678.QueryAnnualProvisionsResponse;
                fromJSON(object: any): _678.QueryAnnualProvisionsResponse;
                toJSON(message: _678.QueryAnnualProvisionsResponse): unknown;
                fromPartial(object: {
                    annualProvisions?: Uint8Array;
                }): _678.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _677.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _677.Minter;
                fromJSON(object: any): _677.Minter;
                toJSON(message: _677.Minter): unknown;
                fromPartial(object: {
                    annualProvisions?: string;
                }): _677.Minter;
            };
            Params: {
                encode(message: _677.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _677.Params;
                fromJSON(object: any): _677.Params;
                toJSON(message: _677.Params): unknown;
                fromPartial(object: {
                    mintDenom?: string;
                    startTime?: Date;
                    initialAnnualProvisions?: string;
                    reductionFactor?: string;
                    blocksPerYear?: any;
                }): _677.Params;
            };
            GenesisState: {
                encode(message: _676.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _676.GenesisState;
                fromJSON(object: any): _676.GenesisState;
                toJSON(message: _676.GenesisState): unknown;
                fromPartial(object: {
                    minter?: {
                        annualProvisions?: string;
                    };
                    params?: {
                        mintDenom?: string;
                        startTime?: Date;
                        initialAnnualProvisions?: string;
                        reductionFactor?: string;
                        blocksPerYear?: any;
                    };
                }): _676.GenesisState;
            };
        };
    }
}
