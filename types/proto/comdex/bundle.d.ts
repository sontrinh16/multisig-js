import * as _67 from "./asset/v1beta1/asset";
import * as _68 from "./asset/v1beta1/events";
import * as _69 from "./asset/v1beta1/genesis";
import * as _70 from "./asset/v1beta1/gov";
import * as _71 from "./asset/v1beta1/msg";
import * as _72 from "./asset/v1beta1/pair";
import * as _73 from "./asset/v1beta1/params";
import * as _74 from "./asset/v1beta1/querier";
import * as _75 from "./oracle/v1beta1/genesis";
import * as _76 from "./oracle/v1beta1/gov";
import * as _77 from "./oracle/v1beta1/msg";
import * as _78 from "./oracle/v1beta1/oracle";
import * as _79 from "./oracle/v1beta1/params";
import * as _80 from "./oracle/v1beta1/querier";
import * as _81 from "./vault/v1beta1/events";
import * as _82 from "./vault/v1beta1/genesis";
import * as _83 from "./vault/v1beta1/msg";
import * as _84 from "./vault/v1beta1/querier";
import * as _85 from "./vault/v1beta1/vault";
export declare namespace comdex {
    namespace asset {
        const v1beta1: {
            QueryAssetsRequest: {
                encode(message: _74.QueryAssetsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryAssetsRequest;
                fromJSON(object: any): _74.QueryAssetsRequest;
                toJSON(message: _74.QueryAssetsRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _74.QueryAssetsRequest;
            };
            QueryAssetsResponse: {
                encode(message: _74.QueryAssetsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryAssetsResponse;
                fromJSON(object: any): _74.QueryAssetsResponse;
                toJSON(message: _74.QueryAssetsResponse): unknown;
                fromPartial(object: {
                    assets?: {
                        id?: any;
                        name?: string;
                        denom?: string;
                        decimals?: any;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _74.QueryAssetsResponse;
            };
            QueryAssetRequest: {
                encode(message: _74.QueryAssetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryAssetRequest;
                fromJSON(object: any): _74.QueryAssetRequest;
                toJSON(message: _74.QueryAssetRequest): unknown;
                fromPartial(object: {
                    id?: any;
                }): _74.QueryAssetRequest;
            };
            QueryAssetResponse: {
                encode(message: _74.QueryAssetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryAssetResponse;
                fromJSON(object: any): _74.QueryAssetResponse;
                toJSON(message: _74.QueryAssetResponse): unknown;
                fromPartial(object: {
                    asset?: {
                        id?: any;
                        name?: string;
                        denom?: string;
                        decimals?: any;
                    };
                }): _74.QueryAssetResponse;
            };
            PairInfo: {
                encode(message: _74.PairInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.PairInfo;
                fromJSON(object: any): _74.PairInfo;
                toJSON(message: _74.PairInfo): unknown;
                fromPartial(object: {
                    id?: any;
                    assetIn?: any;
                    denomIn?: string;
                    assetOut?: any;
                    denomOut?: string;
                    liquidationRatio?: string;
                }): _74.PairInfo;
            };
            QueryPairsRequest: {
                encode(message: _74.QueryPairsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryPairsRequest;
                fromJSON(object: any): _74.QueryPairsRequest;
                toJSON(message: _74.QueryPairsRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _74.QueryPairsRequest;
            };
            QueryPairsResponse: {
                encode(message: _74.QueryPairsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryPairsResponse;
                fromJSON(object: any): _74.QueryPairsResponse;
                toJSON(message: _74.QueryPairsResponse): unknown;
                fromPartial(object: {
                    pairsInfo?: {
                        id?: any;
                        assetIn?: any;
                        denomIn?: string;
                        assetOut?: any;
                        denomOut?: string;
                        liquidationRatio?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _74.QueryPairsResponse;
            };
            QueryPairRequest: {
                encode(message: _74.QueryPairRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryPairRequest;
                fromJSON(object: any): _74.QueryPairRequest;
                toJSON(message: _74.QueryPairRequest): unknown;
                fromPartial(object: {
                    id?: any;
                }): _74.QueryPairRequest;
            };
            QueryPairResponse: {
                encode(message: _74.QueryPairResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryPairResponse;
                fromJSON(object: any): _74.QueryPairResponse;
                toJSON(message: _74.QueryPairResponse): unknown;
                fromPartial(object: {
                    pairInfo?: {
                        id?: any;
                        assetIn?: any;
                        denomIn?: string;
                        assetOut?: any;
                        denomOut?: string;
                        liquidationRatio?: string;
                    };
                }): _74.QueryPairResponse;
            };
            QueryParamsRequest: {
                encode(_: _74.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryParamsRequest;
                fromJSON(_: any): _74.QueryParamsRequest;
                toJSON(_: _74.QueryParamsRequest): unknown;
                fromPartial(_: {}): _74.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _74.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryParamsResponse;
                fromJSON(object: any): _74.QueryParamsResponse;
                toJSON(message: _74.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        admin?: string;
                    };
                }): _74.QueryParamsResponse;
            };
            Params: {
                encode(message: _73.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.Params;
                fromJSON(object: any): _73.Params;
                toJSON(message: _73.Params): unknown;
                fromPartial(object: {
                    admin?: string;
                }): _73.Params;
            };
            Pair: {
                encode(message: _72.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.Pair;
                fromJSON(object: any): _72.Pair;
                toJSON(message: _72.Pair): unknown;
                fromPartial(object: {
                    id?: any;
                    assetIn?: any;
                    assetOut?: any;
                    liquidationRatio?: string;
                }): _72.Pair;
            };
            MsgAddAssetRequest: {
                encode(message: _71.MsgAddAssetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgAddAssetRequest;
                fromJSON(object: any): _71.MsgAddAssetRequest;
                toJSON(message: _71.MsgAddAssetRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    name?: string;
                    denom?: string;
                    decimals?: any;
                }): _71.MsgAddAssetRequest;
            };
            MsgAddAssetResponse: {
                encode(_: _71.MsgAddAssetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgAddAssetResponse;
                fromJSON(_: any): _71.MsgAddAssetResponse;
                toJSON(_: _71.MsgAddAssetResponse): unknown;
                fromPartial(_: {}): _71.MsgAddAssetResponse;
            };
            MsgUpdateAssetRequest: {
                encode(message: _71.MsgUpdateAssetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgUpdateAssetRequest;
                fromJSON(object: any): _71.MsgUpdateAssetRequest;
                toJSON(message: _71.MsgUpdateAssetRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    id?: any;
                    name?: string;
                    denom?: string;
                    decimals?: any;
                }): _71.MsgUpdateAssetRequest;
            };
            MsgUpdateAssetResponse: {
                encode(_: _71.MsgUpdateAssetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgUpdateAssetResponse;
                fromJSON(_: any): _71.MsgUpdateAssetResponse;
                toJSON(_: _71.MsgUpdateAssetResponse): unknown;
                fromPartial(_: {}): _71.MsgUpdateAssetResponse;
            };
            MsgAddPairRequest: {
                encode(message: _71.MsgAddPairRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgAddPairRequest;
                fromJSON(object: any): _71.MsgAddPairRequest;
                toJSON(message: _71.MsgAddPairRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    assetIn?: any;
                    assetOut?: any;
                    liquidationRatio?: string;
                }): _71.MsgAddPairRequest;
            };
            MsgAddPairResponse: {
                encode(_: _71.MsgAddPairResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgAddPairResponse;
                fromJSON(_: any): _71.MsgAddPairResponse;
                toJSON(_: _71.MsgAddPairResponse): unknown;
                fromPartial(_: {}): _71.MsgAddPairResponse;
            };
            MsgUpdatePairRequest: {
                encode(message: _71.MsgUpdatePairRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgUpdatePairRequest;
                fromJSON(object: any): _71.MsgUpdatePairRequest;
                toJSON(message: _71.MsgUpdatePairRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    id?: any;
                    liquidationRatio?: string;
                }): _71.MsgUpdatePairRequest;
            };
            MsgUpdatePairResponse: {
                encode(_: _71.MsgUpdatePairResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgUpdatePairResponse;
                fromJSON(_: any): _71.MsgUpdatePairResponse;
                toJSON(_: _71.MsgUpdatePairResponse): unknown;
                fromPartial(_: {}): _71.MsgUpdatePairResponse;
            };
            UpdateAdminProposal: {
                encode(message: _70.UpdateAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.UpdateAdminProposal;
                fromJSON(object: any): _70.UpdateAdminProposal;
                toJSON(message: _70.UpdateAdminProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    address?: string;
                }): _70.UpdateAdminProposal;
            };
            GenesisState: {
                encode(message: _69.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.GenesisState;
                fromJSON(object: any): _69.GenesisState;
                toJSON(message: _69.GenesisState): unknown;
                fromPartial(object: {
                    assets?: {
                        id?: any;
                        name?: string;
                        denom?: string;
                        decimals?: any;
                    }[];
                    pairs?: {
                        id?: any;
                        assetIn?: any;
                        assetOut?: any;
                        liquidationRatio?: string;
                    }[];
                    params?: {
                        admin?: string;
                    };
                }): _69.GenesisState;
            };
            EventAddPair: {
                encode(message: _68.EventAddPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.EventAddPair;
                fromJSON(object: any): _68.EventAddPair;
                toJSON(message: _68.EventAddPair): unknown;
                fromPartial(object: {
                    id?: any;
                }): _68.EventAddPair;
            };
            Asset: {
                encode(message: _67.Asset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.Asset;
                fromJSON(object: any): _67.Asset;
                toJSON(message: _67.Asset): unknown;
                fromPartial(object: {
                    id?: any;
                    name?: string;
                    denom?: string;
                    decimals?: any;
                }): _67.Asset;
            };
        };
    }
    namespace oracle {
        const v1beta1: {
            QueryMarketsRequest: {
                encode(message: _80.QueryMarketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryMarketsRequest;
                fromJSON(object: any): _80.QueryMarketsRequest;
                toJSON(message: _80.QueryMarketsRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _80.QueryMarketsRequest;
            };
            QueryMarketsResponse: {
                encode(message: _80.QueryMarketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryMarketsResponse;
                fromJSON(object: any): _80.QueryMarketsResponse;
                toJSON(message: _80.QueryMarketsResponse): unknown;
                fromPartial(object: {
                    markets?: {
                        symbol?: string;
                        scriptId?: any;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _80.QueryMarketsResponse;
            };
            QueryMarketRequest: {
                encode(message: _80.QueryMarketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryMarketRequest;
                fromJSON(object: any): _80.QueryMarketRequest;
                toJSON(message: _80.QueryMarketRequest): unknown;
                fromPartial(object: {
                    symbol?: string;
                }): _80.QueryMarketRequest;
            };
            QueryMarketResponse: {
                encode(message: _80.QueryMarketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryMarketResponse;
                fromJSON(object: any): _80.QueryMarketResponse;
                toJSON(message: _80.QueryMarketResponse): unknown;
                fromPartial(object: {
                    market?: {
                        symbol?: string;
                        scriptId?: any;
                    };
                }): _80.QueryMarketResponse;
            };
            QueryParamsRequest: {
                encode(_: _80.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryParamsRequest;
                fromJSON(_: any): _80.QueryParamsRequest;
                toJSON(_: _80.QueryParamsRequest): unknown;
                fromPartial(_: {}): _80.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _80.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryParamsResponse;
                fromJSON(object: any): _80.QueryParamsResponse;
                toJSON(message: _80.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        ibc?: {
                            port?: string;
                            version?: string;
                        };
                        oracle?: {
                            askCount?: any;
                            minCount?: any;
                            multiplier?: any;
                        };
                    };
                }): _80.QueryParamsResponse;
            };
            IBCParams: {
                encode(message: _79.IBCParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.IBCParams;
                fromJSON(object: any): _79.IBCParams;
                toJSON(message: _79.IBCParams): unknown;
                fromPartial(object: {
                    port?: string;
                    version?: string;
                }): _79.IBCParams;
            };
            OracleParams: {
                encode(message: _79.OracleParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.OracleParams;
                fromJSON(object: any): _79.OracleParams;
                toJSON(message: _79.OracleParams): unknown;
                fromPartial(object: {
                    askCount?: any;
                    minCount?: any;
                    multiplier?: any;
                }): _79.OracleParams;
            };
            Params: {
                encode(message: _79.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.Params;
                fromJSON(object: any): _79.Params;
                toJSON(message: _79.Params): unknown;
                fromPartial(object: {
                    ibc?: {
                        port?: string;
                        version?: string;
                    };
                    oracle?: {
                        askCount?: any;
                        minCount?: any;
                        multiplier?: any;
                    };
                }): _79.Params;
            };
            Market: {
                encode(message: _78.Market, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.Market;
                fromJSON(object: any): _78.Market;
                toJSON(message: _78.Market): unknown;
                fromPartial(object: {
                    symbol?: string;
                    scriptId?: any;
                }): _78.Market;
            };
            Calldata: {
                encode(message: _78.Calldata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.Calldata;
                fromJSON(object: any): _78.Calldata;
                toJSON(message: _78.Calldata): unknown;
                fromPartial(object: {
                    symbols?: string[];
                    multiplier?: any;
                }): _78.Calldata;
            };
            Result: {
                encode(message: _78.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.Result;
                fromJSON(object: any): _78.Result;
                toJSON(message: _78.Result): unknown;
                fromPartial(object: {
                    rates?: any[];
                }): _78.Result;
            };
            MsgAddMarketRequest: {
                encode(message: _77.MsgAddMarketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgAddMarketRequest;
                fromJSON(object: any): _77.MsgAddMarketRequest;
                toJSON(message: _77.MsgAddMarketRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    symbol?: string;
                    scriptId?: any;
                    id?: any;
                }): _77.MsgAddMarketRequest;
            };
            MsgAddMarketResponse: {
                encode(_: _77.MsgAddMarketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgAddMarketResponse;
                fromJSON(_: any): _77.MsgAddMarketResponse;
                toJSON(_: _77.MsgAddMarketResponse): unknown;
                fromPartial(_: {}): _77.MsgAddMarketResponse;
            };
            MsgUpdateMarketRequest: {
                encode(message: _77.MsgUpdateMarketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgUpdateMarketRequest;
                fromJSON(object: any): _77.MsgUpdateMarketRequest;
                toJSON(message: _77.MsgUpdateMarketRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    symbol?: string;
                    scriptId?: any;
                }): _77.MsgUpdateMarketRequest;
            };
            MsgUpdateMarketResponse: {
                encode(_: _77.MsgUpdateMarketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgUpdateMarketResponse;
                fromJSON(_: any): _77.MsgUpdateMarketResponse;
                toJSON(_: _77.MsgUpdateMarketResponse): unknown;
                fromPartial(_: {}): _77.MsgUpdateMarketResponse;
            };
            MsgRemoveMarketForAssetRequest: {
                encode(message: _77.MsgRemoveMarketForAssetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgRemoveMarketForAssetRequest;
                fromJSON(object: any): _77.MsgRemoveMarketForAssetRequest;
                toJSON(message: _77.MsgRemoveMarketForAssetRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    id?: any;
                    symbol?: string;
                }): _77.MsgRemoveMarketForAssetRequest;
            };
            MsgRemoveMarketForAssetResponse: {
                encode(_: _77.MsgRemoveMarketForAssetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgRemoveMarketForAssetResponse;
                fromJSON(_: any): _77.MsgRemoveMarketForAssetResponse;
                toJSON(_: _77.MsgRemoveMarketForAssetResponse): unknown;
                fromPartial(_: {}): _77.MsgRemoveMarketForAssetResponse;
            };
            MsgFetchPriceRequest: {
                encode(message: _77.MsgFetchPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgFetchPriceRequest;
                fromJSON(object: any): _77.MsgFetchPriceRequest;
                toJSON(message: _77.MsgFetchPriceRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    sourcePort?: string;
                    sourceChannel?: string;
                    timeoutHeight?: {
                        revisionNumber?: any;
                        revisionHeight?: any;
                    };
                    timeoutTimestamp?: any;
                    symbols?: string[];
                    scriptId?: any;
                    feeLimit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    prepareGas?: any;
                    executeGas?: any;
                }): _77.MsgFetchPriceRequest;
            };
            MsgFetchPriceResponse: {
                encode(_: _77.MsgFetchPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgFetchPriceResponse;
                fromJSON(_: any): _77.MsgFetchPriceResponse;
                toJSON(_: _77.MsgFetchPriceResponse): unknown;
                fromPartial(_: {}): _77.MsgFetchPriceResponse;
            };
            UpdateAdminProposal: {
                encode(message: _76.UpdateAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.UpdateAdminProposal;
                fromJSON(object: any): _76.UpdateAdminProposal;
                toJSON(message: _76.UpdateAdminProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    address?: string;
                }): _76.UpdateAdminProposal;
            };
            GenesisState: {
                encode(message: _75.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.GenesisState;
                fromJSON(object: any): _75.GenesisState;
                toJSON(message: _75.GenesisState): unknown;
                fromPartial(object: {
                    markets?: {
                        symbol?: string;
                        scriptId?: any;
                    }[];
                    params?: {
                        ibc?: {
                            port?: string;
                            version?: string;
                        };
                        oracle?: {
                            askCount?: any;
                            minCount?: any;
                            multiplier?: any;
                        };
                    };
                }): _75.GenesisState;
            };
        };
    }
    namespace vault {
        const v1beta1: {
            Vault: {
                encode(message: _85.Vault, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Vault;
                fromJSON(object: any): _85.Vault;
                toJSON(message: _85.Vault): unknown;
                fromPartial(object: {
                    id?: any;
                    pairId?: any;
                    owner?: string;
                    amountIn?: string;
                    amountOut?: string;
                }): _85.Vault;
            };
            VaultInfo: {
                encode(message: _84.VaultInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.VaultInfo;
                fromJSON(object: any): _84.VaultInfo;
                toJSON(message: _84.VaultInfo): unknown;
                fromPartial(object: {
                    id?: any;
                    pairId?: any;
                    owner?: string;
                    collateral?: {
                        denom?: string;
                        amount?: string;
                    };
                    debt?: {
                        denom?: string;
                        amount?: string;
                    };
                    collateralizationRatio?: string;
                }): _84.VaultInfo;
            };
            QueryVaultRequest: {
                encode(message: _84.QueryVaultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryVaultRequest;
                fromJSON(object: any): _84.QueryVaultRequest;
                toJSON(message: _84.QueryVaultRequest): unknown;
                fromPartial(object: {
                    id?: any;
                }): _84.QueryVaultRequest;
            };
            QueryVaultResponse: {
                encode(message: _84.QueryVaultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryVaultResponse;
                fromJSON(object: any): _84.QueryVaultResponse;
                toJSON(message: _84.QueryVaultResponse): unknown;
                fromPartial(object: {
                    vaultInfo?: {
                        id?: any;
                        pairId?: any;
                        owner?: string;
                        collateral?: {
                            denom?: string;
                            amount?: string;
                        };
                        debt?: {
                            denom?: string;
                            amount?: string;
                        };
                        collateralizationRatio?: string;
                    };
                }): _84.QueryVaultResponse;
            };
            QueryVaultsRequest: {
                encode(message: _84.QueryVaultsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryVaultsRequest;
                fromJSON(object: any): _84.QueryVaultsRequest;
                toJSON(message: _84.QueryVaultsRequest): unknown;
                fromPartial(object: {
                    owner?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _84.QueryVaultsRequest;
            };
            QueryVaultsResponse: {
                encode(message: _84.QueryVaultsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryVaultsResponse;
                fromJSON(object: any): _84.QueryVaultsResponse;
                toJSON(message: _84.QueryVaultsResponse): unknown;
                fromPartial(object: {
                    vaultsInfo?: {
                        id?: any;
                        pairId?: any;
                        owner?: string;
                        collateral?: {
                            denom?: string;
                            amount?: string;
                        };
                        debt?: {
                            denom?: string;
                            amount?: string;
                        };
                        collateralizationRatio?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _84.QueryVaultsResponse;
            };
            QueryAllVaultsRequest: {
                encode(message: _84.QueryAllVaultsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryAllVaultsRequest;
                fromJSON(object: any): _84.QueryAllVaultsRequest;
                toJSON(message: _84.QueryAllVaultsRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _84.QueryAllVaultsRequest;
            };
            QueryAllVaultsResponse: {
                encode(message: _84.QueryAllVaultsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryAllVaultsResponse;
                fromJSON(object: any): _84.QueryAllVaultsResponse;
                toJSON(message: _84.QueryAllVaultsResponse): unknown;
                fromPartial(object: {
                    vaultsInfo?: {
                        id?: any;
                        pairId?: any;
                        owner?: string;
                        collateral?: {
                            denom?: string;
                            amount?: string;
                        };
                        debt?: {
                            denom?: string;
                            amount?: string;
                        };
                        collateralizationRatio?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _84.QueryAllVaultsResponse;
            };
            MsgCreateRequest: {
                encode(message: _83.MsgCreateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.MsgCreateRequest;
                fromJSON(object: any): _83.MsgCreateRequest;
                toJSON(message: _83.MsgCreateRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    pairId?: any;
                    amountIn?: string;
                    amountOut?: string;
                }): _83.MsgCreateRequest;
            };
            MsgCreateResponse: {
                encode(_: _83.MsgCreateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.MsgCreateResponse;
                fromJSON(_: any): _83.MsgCreateResponse;
                toJSON(_: _83.MsgCreateResponse): unknown;
                fromPartial(_: {}): _83.MsgCreateResponse;
            };
            MsgDepositRequest: {
                encode(message: _83.MsgDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.MsgDepositRequest;
                fromJSON(object: any): _83.MsgDepositRequest;
                toJSON(message: _83.MsgDepositRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    id?: any;
                    amount?: string;
                }): _83.MsgDepositRequest;
            };
            MsgDepositResponse: {
                encode(_: _83.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.MsgDepositResponse;
                fromJSON(_: any): _83.MsgDepositResponse;
                toJSON(_: _83.MsgDepositResponse): unknown;
                fromPartial(_: {}): _83.MsgDepositResponse;
            };
            MsgWithdrawRequest: {
                encode(message: _83.MsgWithdrawRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.MsgWithdrawRequest;
                fromJSON(object: any): _83.MsgWithdrawRequest;
                toJSON(message: _83.MsgWithdrawRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    id?: any;
                    amount?: string;
                }): _83.MsgWithdrawRequest;
            };
            MsgWithdrawResponse: {
                encode(_: _83.MsgWithdrawResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.MsgWithdrawResponse;
                fromJSON(_: any): _83.MsgWithdrawResponse;
                toJSON(_: _83.MsgWithdrawResponse): unknown;
                fromPartial(_: {}): _83.MsgWithdrawResponse;
            };
            MsgDrawRequest: {
                encode(message: _83.MsgDrawRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.MsgDrawRequest;
                fromJSON(object: any): _83.MsgDrawRequest;
                toJSON(message: _83.MsgDrawRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    id?: any;
                    amount?: string;
                }): _83.MsgDrawRequest;
            };
            MsgDrawResponse: {
                encode(_: _83.MsgDrawResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.MsgDrawResponse;
                fromJSON(_: any): _83.MsgDrawResponse;
                toJSON(_: _83.MsgDrawResponse): unknown;
                fromPartial(_: {}): _83.MsgDrawResponse;
            };
            MsgRepayRequest: {
                encode(message: _83.MsgRepayRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.MsgRepayRequest;
                fromJSON(object: any): _83.MsgRepayRequest;
                toJSON(message: _83.MsgRepayRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    id?: any;
                    amount?: string;
                }): _83.MsgRepayRequest;
            };
            MsgRepayResponse: {
                encode(_: _83.MsgRepayResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.MsgRepayResponse;
                fromJSON(_: any): _83.MsgRepayResponse;
                toJSON(_: _83.MsgRepayResponse): unknown;
                fromPartial(_: {}): _83.MsgRepayResponse;
            };
            MsgCloseRequest: {
                encode(message: _83.MsgCloseRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.MsgCloseRequest;
                fromJSON(object: any): _83.MsgCloseRequest;
                toJSON(message: _83.MsgCloseRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    id?: any;
                }): _83.MsgCloseRequest;
            };
            MsgCloseResponse: {
                encode(_: _83.MsgCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.MsgCloseResponse;
                fromJSON(_: any): _83.MsgCloseResponse;
                toJSON(_: _83.MsgCloseResponse): unknown;
                fromPartial(_: {}): _83.MsgCloseResponse;
            };
            GenesisState: {
                encode(message: _82.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.GenesisState;
                fromJSON(object: any): _82.GenesisState;
                toJSON(message: _82.GenesisState): unknown;
                fromPartial(object: {
                    vaults?: {
                        id?: any;
                        pairId?: any;
                        owner?: string;
                        amountIn?: string;
                        amountOut?: string;
                    }[];
                }): _82.GenesisState;
            };
            EventCreateVault: {
                encode(message: _81.EventCreateVault, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.EventCreateVault;
                fromJSON(object: any): _81.EventCreateVault;
                toJSON(message: _81.EventCreateVault): unknown;
                fromPartial(object: {
                    sender?: string;
                    collateralType?: string;
                }): _81.EventCreateVault;
            };
            EventDepositCollateral: {
                encode(message: _81.EventDepositCollateral, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.EventDepositCollateral;
                fromJSON(object: any): _81.EventDepositCollateral;
                toJSON(message: _81.EventDepositCollateral): unknown;
                fromPartial(object: {
                    owner?: string;
                    collateralType?: string;
                    collateral?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _81.EventDepositCollateral;
            };
            EventWithdrawCollateral: {
                encode(message: _81.EventWithdrawCollateral, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.EventWithdrawCollateral;
                fromJSON(object: any): _81.EventWithdrawCollateral;
                toJSON(message: _81.EventWithdrawCollateral): unknown;
                fromPartial(object: {
                    owner?: string;
                    collateralType?: string;
                    collateral?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _81.EventWithdrawCollateral;
            };
            EventDrawDebt: {
                encode(message: _81.EventDrawDebt, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.EventDrawDebt;
                fromJSON(object: any): _81.EventDrawDebt;
                toJSON(message: _81.EventDrawDebt): unknown;
                fromPartial(object: {
                    owner?: string;
                    collateralType?: string;
                    debt?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _81.EventDrawDebt;
            };
            EventRepayDebt: {
                encode(message: _81.EventRepayDebt, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.EventRepayDebt;
                fromJSON(object: any): _81.EventRepayDebt;
                toJSON(message: _81.EventRepayDebt): unknown;
                fromPartial(object: {
                    owner?: string;
                    collateralType?: string;
                    debt?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _81.EventRepayDebt;
            };
            EventCloseVault: {
                encode(message: _81.EventCloseVault, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.EventCloseVault;
                fromJSON(object: any): _81.EventCloseVault;
                toJSON(message: _81.EventCloseVault): unknown;
                fromPartial(object: {
                    owner?: string;
                    collateralType?: string;
                }): _81.EventCloseVault;
            };
        };
    }
}
