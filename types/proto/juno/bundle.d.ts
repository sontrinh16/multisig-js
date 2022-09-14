import * as _455 from "./mint/genesis";
import * as _456 from "./mint/mint";
import * as _457 from "./mint/query";
export declare namespace juno {
    const mint: {
        QueryParamsRequest: {
            encode(_: _457.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _457.QueryParamsRequest;
            fromJSON(_: any): _457.QueryParamsRequest;
            toJSON(_: _457.QueryParamsRequest): unknown;
            fromPartial(_: {}): _457.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _457.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _457.QueryParamsResponse;
            fromJSON(object: any): _457.QueryParamsResponse;
            toJSON(message: _457.QueryParamsResponse): unknown;
            fromPartial(object: {
                params?: {
                    mintDenom?: string;
                    blocksPerYear?: any;
                };
            }): _457.QueryParamsResponse;
        };
        QueryInflationRequest: {
            encode(_: _457.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _457.QueryInflationRequest;
            fromJSON(_: any): _457.QueryInflationRequest;
            toJSON(_: _457.QueryInflationRequest): unknown;
            fromPartial(_: {}): _457.QueryInflationRequest;
        };
        QueryInflationResponse: {
            encode(message: _457.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _457.QueryInflationResponse;
            fromJSON(object: any): _457.QueryInflationResponse;
            toJSON(message: _457.QueryInflationResponse): unknown;
            fromPartial(object: {
                inflation?: Uint8Array;
            }): _457.QueryInflationResponse;
        };
        QueryAnnualProvisionsRequest: {
            encode(_: _457.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _457.QueryAnnualProvisionsRequest;
            fromJSON(_: any): _457.QueryAnnualProvisionsRequest;
            toJSON(_: _457.QueryAnnualProvisionsRequest): unknown;
            fromPartial(_: {}): _457.QueryAnnualProvisionsRequest;
        };
        QueryAnnualProvisionsResponse: {
            encode(message: _457.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _457.QueryAnnualProvisionsResponse;
            fromJSON(object: any): _457.QueryAnnualProvisionsResponse;
            toJSON(message: _457.QueryAnnualProvisionsResponse): unknown;
            fromPartial(object: {
                annualProvisions?: Uint8Array;
            }): _457.QueryAnnualProvisionsResponse;
        };
        Minter: {
            encode(message: _456.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _456.Minter;
            fromJSON(object: any): _456.Minter;
            toJSON(message: _456.Minter): unknown;
            fromPartial(object: {
                inflation?: string;
                phase?: any;
                startPhaseBlock?: any;
                annualProvisions?: string;
            }): _456.Minter;
        };
        Params: {
            encode(message: _456.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _456.Params;
            fromJSON(object: any): _456.Params;
            toJSON(message: _456.Params): unknown;
            fromPartial(object: {
                mintDenom?: string;
                blocksPerYear?: any;
            }): _456.Params;
        };
        GenesisState: {
            encode(message: _455.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _455.GenesisState;
            fromJSON(object: any): _455.GenesisState;
            toJSON(message: _455.GenesisState): unknown;
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
            }): _455.GenesisState;
        };
    };
}
