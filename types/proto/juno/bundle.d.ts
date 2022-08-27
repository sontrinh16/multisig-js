import * as _387 from "./mint/genesis";
import * as _388 from "./mint/mint";
import * as _389 from "./mint/query";
export declare namespace juno {
    const mint: {
        QueryParamsRequest: {
            encode(_: _389.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _389.QueryParamsRequest;
            fromJSON(_: any): _389.QueryParamsRequest;
            toJSON(_: _389.QueryParamsRequest): unknown;
            fromPartial(_: {}): _389.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _389.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _389.QueryParamsResponse;
            fromJSON(object: any): _389.QueryParamsResponse;
            toJSON(message: _389.QueryParamsResponse): unknown;
            fromPartial(object: {
                params?: {
                    mintDenom?: string;
                    blocksPerYear?: any;
                };
            }): _389.QueryParamsResponse;
        };
        QueryInflationRequest: {
            encode(_: _389.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _389.QueryInflationRequest;
            fromJSON(_: any): _389.QueryInflationRequest;
            toJSON(_: _389.QueryInflationRequest): unknown;
            fromPartial(_: {}): _389.QueryInflationRequest;
        };
        QueryInflationResponse: {
            encode(message: _389.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _389.QueryInflationResponse;
            fromJSON(object: any): _389.QueryInflationResponse;
            toJSON(message: _389.QueryInflationResponse): unknown;
            fromPartial(object: {
                inflation?: Uint8Array;
            }): _389.QueryInflationResponse;
        };
        QueryAnnualProvisionsRequest: {
            encode(_: _389.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _389.QueryAnnualProvisionsRequest;
            fromJSON(_: any): _389.QueryAnnualProvisionsRequest;
            toJSON(_: _389.QueryAnnualProvisionsRequest): unknown;
            fromPartial(_: {}): _389.QueryAnnualProvisionsRequest;
        };
        QueryAnnualProvisionsResponse: {
            encode(message: _389.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _389.QueryAnnualProvisionsResponse;
            fromJSON(object: any): _389.QueryAnnualProvisionsResponse;
            toJSON(message: _389.QueryAnnualProvisionsResponse): unknown;
            fromPartial(object: {
                annualProvisions?: Uint8Array;
            }): _389.QueryAnnualProvisionsResponse;
        };
        Minter: {
            encode(message: _388.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _388.Minter;
            fromJSON(object: any): _388.Minter;
            toJSON(message: _388.Minter): unknown;
            fromPartial(object: {
                inflation?: string;
                phase?: any;
                startPhaseBlock?: any;
                annualProvisions?: string;
            }): _388.Minter;
        };
        Params: {
            encode(message: _388.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _388.Params;
            fromJSON(object: any): _388.Params;
            toJSON(message: _388.Params): unknown;
            fromPartial(object: {
                mintDenom?: string;
                blocksPerYear?: any;
            }): _388.Params;
        };
        GenesisState: {
            encode(message: _387.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _387.GenesisState;
            fromJSON(object: any): _387.GenesisState;
            toJSON(message: _387.GenesisState): unknown;
            fromPartial(object: {
                minter?: {
                    inflation?: string;
                    phase?: any;
                    startPhaseBlock?: any;
                    annualProvisions?: string;
                };
                params?: {
                    mintDenom?: string;
                    blocksPerYear?: any;
                };
            }): _387.GenesisState;
        };
    };
}
