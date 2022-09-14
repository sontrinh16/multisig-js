import * as _135 from "./asset/v1beta1/asset";
import * as _136 from "./asset/v1beta1/events";
import * as _137 from "./asset/v1beta1/genesis";
import * as _138 from "./asset/v1beta1/gov";
import * as _139 from "./asset/v1beta1/msg";
import * as _140 from "./asset/v1beta1/pair";
import * as _141 from "./asset/v1beta1/params";
import * as _142 from "./asset/v1beta1/querier";
import * as _143 from "./oracle/v1beta1/genesis";
import * as _144 from "./oracle/v1beta1/gov";
import * as _145 from "./oracle/v1beta1/msg";
import * as _146 from "./oracle/v1beta1/oracle";
import * as _147 from "./oracle/v1beta1/params";
import * as _148 from "./oracle/v1beta1/querier";
import * as _149 from "./vault/v1beta1/events";
import * as _150 from "./vault/v1beta1/genesis";
import * as _151 from "./vault/v1beta1/msg";
import * as _152 from "./vault/v1beta1/querier";
import * as _153 from "./vault/v1beta1/vault";
export declare namespace comdex {
    namespace asset {
        const v1beta1: {
            QueryAssetsRequest: {
                encode(message: _142.QueryAssetsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryAssetsRequest;
                fromJSON(object: any): _142.QueryAssetsRequest;
                toJSON(message: _142.QueryAssetsRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _142.QueryAssetsRequest;
            };
            QueryAssetsResponse: {
                encode(message: _142.QueryAssetsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryAssetsResponse;
                fromJSON(object: any): _142.QueryAssetsResponse;
                toJSON(message: _142.QueryAssetsResponse): unknown;
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
                }): _142.QueryAssetsResponse;
            };
            QueryAssetRequest: {
                encode(message: _142.QueryAssetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryAssetRequest;
                fromJSON(object: any): _142.QueryAssetRequest;
                toJSON(message: _142.QueryAssetRequest): unknown;
                fromPartial(object: {
                    id?: any;
                }): _142.QueryAssetRequest;
            };
            QueryAssetResponse: {
                encode(message: _142.QueryAssetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryAssetResponse;
                fromJSON(object: any): _142.QueryAssetResponse;
                toJSON(message: _142.QueryAssetResponse): unknown;
                fromPartial(object: {
                    asset?: {
                        id?: any;
                        name?: string;
                        denom?: string;
                        decimals?: any;
                    };
                }): _142.QueryAssetResponse;
            };
            PairInfo: {
                encode(message: _142.PairInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.PairInfo;
                fromJSON(object: any): _142.PairInfo;
                toJSON(message: _142.PairInfo): unknown;
                fromPartial(object: {
                    id?: any;
                    assetIn?: any;
                    denomIn?: string;
                    assetOut?: any;
                    denomOut?: string;
                    liquidationRatio?: string;
                }): _142.PairInfo;
            };
            QueryPairsRequest: {
                encode(message: _142.QueryPairsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryPairsRequest;
                fromJSON(object: any): _142.QueryPairsRequest;
                toJSON(message: _142.QueryPairsRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _142.QueryPairsRequest;
            };
            QueryPairsResponse: {
                encode(message: _142.QueryPairsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryPairsResponse;
                fromJSON(object: any): _142.QueryPairsResponse;
                toJSON(message: _142.QueryPairsResponse): unknown;
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
                }): _142.QueryPairsResponse;
            };
            QueryPairRequest: {
                encode(message: _142.QueryPairRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryPairRequest;
                fromJSON(object: any): _142.QueryPairRequest;
                toJSON(message: _142.QueryPairRequest): unknown;
                fromPartial(object: {
                    id?: any;
                }): _142.QueryPairRequest;
            };
            QueryPairResponse: {
                encode(message: _142.QueryPairResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryPairResponse;
                fromJSON(object: any): _142.QueryPairResponse;
                toJSON(message: _142.QueryPairResponse): unknown;
                fromPartial(object: {
                    pairInfo?: {
                        id?: any;
                        assetIn?: any;
                        denomIn?: string;
                        assetOut?: any;
                        denomOut?: string;
                        liquidationRatio?: string;
                    };
                }): _142.QueryPairResponse;
            };
            QueryParamsRequest: {
                encode(_: _142.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryParamsRequest;
                fromJSON(_: any): _142.QueryParamsRequest;
                toJSON(_: _142.QueryParamsRequest): unknown;
                fromPartial(_: {}): _142.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _142.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryParamsResponse;
                fromJSON(object: any): _142.QueryParamsResponse;
                toJSON(message: _142.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        admin?: string;
                    };
                }): _142.QueryParamsResponse;
            };
            Params: {
                encode(message: _141.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.Params;
                fromJSON(object: any): _141.Params;
                toJSON(message: _141.Params): unknown;
                fromPartial(object: {
                    admin?: string;
                }): _141.Params;
            };
            Pair: {
                encode(message: _140.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.Pair;
                fromJSON(object: any): _140.Pair;
                toJSON(message: _140.Pair): unknown;
                fromPartial(object: {
                    id?: any;
                    assetIn?: any;
                    assetOut?: any;
                    liquidationRatio?: string;
                }): _140.Pair;
            };
            MsgAddAssetRequest: {
                encode(message: _139.MsgAddAssetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgAddAssetRequest;
                fromJSON(object: any): _139.MsgAddAssetRequest;
                toJSON(message: _139.MsgAddAssetRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    name?: string;
                    denom?: string;
                    decimals?: any;
                }): _139.MsgAddAssetRequest;
            };
            MsgAddAssetResponse: {
                encode(_: _139.MsgAddAssetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgAddAssetResponse;
                fromJSON(_: any): _139.MsgAddAssetResponse;
                toJSON(_: _139.MsgAddAssetResponse): unknown;
                fromPartial(_: {}): _139.MsgAddAssetResponse;
            };
            MsgUpdateAssetRequest: {
                encode(message: _139.MsgUpdateAssetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgUpdateAssetRequest;
                fromJSON(object: any): _139.MsgUpdateAssetRequest;
                toJSON(message: _139.MsgUpdateAssetRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    id?: any;
                    name?: string;
                    denom?: string;
                    decimals?: any;
                }): _139.MsgUpdateAssetRequest;
            };
            MsgUpdateAssetResponse: {
                encode(_: _139.MsgUpdateAssetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgUpdateAssetResponse;
                fromJSON(_: any): _139.MsgUpdateAssetResponse;
                toJSON(_: _139.MsgUpdateAssetResponse): unknown;
                fromPartial(_: {}): _139.MsgUpdateAssetResponse;
            };
            MsgAddPairRequest: {
                encode(message: _139.MsgAddPairRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgAddPairRequest;
                fromJSON(object: any): _139.MsgAddPairRequest;
                toJSON(message: _139.MsgAddPairRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    assetIn?: any;
                    assetOut?: any;
                    liquidationRatio?: string;
                }): _139.MsgAddPairRequest;
            };
            MsgAddPairResponse: {
                encode(_: _139.MsgAddPairResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgAddPairResponse;
                fromJSON(_: any): _139.MsgAddPairResponse;
                toJSON(_: _139.MsgAddPairResponse): unknown;
                fromPartial(_: {}): _139.MsgAddPairResponse;
            };
            MsgUpdatePairRequest: {
                encode(message: _139.MsgUpdatePairRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgUpdatePairRequest;
                fromJSON(object: any): _139.MsgUpdatePairRequest;
                toJSON(message: _139.MsgUpdatePairRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    id?: any;
                    liquidationRatio?: string;
                }): _139.MsgUpdatePairRequest;
            };
            MsgUpdatePairResponse: {
                encode(_: _139.MsgUpdatePairResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgUpdatePairResponse;
                fromJSON(_: any): _139.MsgUpdatePairResponse;
                toJSON(_: _139.MsgUpdatePairResponse): unknown;
                fromPartial(_: {}): _139.MsgUpdatePairResponse;
            };
            UpdateAdminProposal: {
                encode(message: _138.UpdateAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.UpdateAdminProposal;
                fromJSON(object: any): _138.UpdateAdminProposal;
                toJSON(message: _138.UpdateAdminProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    address?: string;
                }): _138.UpdateAdminProposal;
            };
            GenesisState: {
                encode(message: _137.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.GenesisState;
                fromJSON(object: any): _137.GenesisState;
                toJSON(message: _137.GenesisState): unknown;
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
                }): _137.GenesisState;
            };
            EventAddPair: {
                encode(message: _136.EventAddPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.EventAddPair;
                fromJSON(object: any): _136.EventAddPair;
                toJSON(message: _136.EventAddPair): unknown;
                fromPartial(object: {
                    id?: any;
                }): _136.EventAddPair;
            };
            Asset: {
                encode(message: _135.Asset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.Asset;
                fromJSON(object: any): _135.Asset;
                toJSON(message: _135.Asset): unknown;
                fromPartial(object: {
                    id?: any;
                    name?: string;
                    denom?: string;
                    decimals?: any;
                }): _135.Asset;
            };
        };
    }
    namespace oracle {
        const v1beta1: {
            QueryMarketsRequest: {
                encode(message: _148.QueryMarketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryMarketsRequest;
                fromJSON(object: any): _148.QueryMarketsRequest;
                toJSON(message: _148.QueryMarketsRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _148.QueryMarketsRequest;
            };
            QueryMarketsResponse: {
                encode(message: _148.QueryMarketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryMarketsResponse;
                fromJSON(object: any): _148.QueryMarketsResponse;
                toJSON(message: _148.QueryMarketsResponse): unknown;
                fromPartial(object: {
                    markets?: {
                        symbol?: string;
                        scriptId?: any;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _148.QueryMarketsResponse;
            };
            QueryMarketRequest: {
                encode(message: _148.QueryMarketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryMarketRequest;
                fromJSON(object: any): _148.QueryMarketRequest;
                toJSON(message: _148.QueryMarketRequest): unknown;
                fromPartial(object: {
                    symbol?: string;
                }): _148.QueryMarketRequest;
            };
            QueryMarketResponse: {
                encode(message: _148.QueryMarketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryMarketResponse;
                fromJSON(object: any): _148.QueryMarketResponse;
                toJSON(message: _148.QueryMarketResponse): unknown;
                fromPartial(object: {
                    market?: {
                        symbol?: string;
                        scriptId?: any;
                    };
                }): _148.QueryMarketResponse;
            };
            QueryParamsRequest: {
                encode(_: _148.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryParamsRequest;
                fromJSON(_: any): _148.QueryParamsRequest;
                toJSON(_: _148.QueryParamsRequest): unknown;
                fromPartial(_: {}): _148.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _148.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryParamsResponse;
                fromJSON(object: any): _148.QueryParamsResponse;
                toJSON(message: _148.QueryParamsResponse): unknown;
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
                }): _148.QueryParamsResponse;
            };
            IBCParams: {
                encode(message: _147.IBCParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.IBCParams;
                fromJSON(object: any): _147.IBCParams;
                toJSON(message: _147.IBCParams): unknown;
                fromPartial(object: {
                    port?: string;
                    version?: string;
                }): _147.IBCParams;
            };
            OracleParams: {
                encode(message: _147.OracleParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.OracleParams;
                fromJSON(object: any): _147.OracleParams;
                toJSON(message: _147.OracleParams): unknown;
                fromPartial(object: {
                    askCount?: any;
                    minCount?: any;
                    multiplier?: any;
                }): _147.OracleParams;
            };
            Params: {
                encode(message: _147.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.Params;
                fromJSON(object: any): _147.Params;
                toJSON(message: _147.Params): unknown;
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
                }): _147.Params;
            };
            Market: {
                encode(message: _146.Market, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.Market;
                fromJSON(object: any): _146.Market;
                toJSON(message: _146.Market): unknown;
                fromPartial(object: {
                    symbol?: string;
                    scriptId?: any;
                }): _146.Market;
            };
            Calldata: {
                encode(message: _146.Calldata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.Calldata;
                fromJSON(object: any): _146.Calldata;
                toJSON(message: _146.Calldata): unknown;
                fromPartial(object: {
                    symbols?: string[];
                    multiplier?: any;
                }): _146.Calldata;
            };
            Result: {
                encode(message: _146.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.Result;
                fromJSON(object: any): _146.Result;
                toJSON(message: _146.Result): unknown;
                fromPartial(object: {
                    rates?: any[];
                }): _146.Result;
            };
            MsgAddMarketRequest: {
                encode(message: _145.MsgAddMarketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgAddMarketRequest;
                fromJSON(object: any): _145.MsgAddMarketRequest;
                toJSON(message: _145.MsgAddMarketRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    symbol?: string;
                    scriptId?: any;
                    id?: any;
                }): _145.MsgAddMarketRequest;
            };
            MsgAddMarketResponse: {
                encode(_: _145.MsgAddMarketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgAddMarketResponse;
                fromJSON(_: any): _145.MsgAddMarketResponse;
                toJSON(_: _145.MsgAddMarketResponse): unknown;
                fromPartial(_: {}): _145.MsgAddMarketResponse;
            };
            MsgUpdateMarketRequest: {
                encode(message: _145.MsgUpdateMarketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgUpdateMarketRequest;
                fromJSON(object: any): _145.MsgUpdateMarketRequest;
                toJSON(message: _145.MsgUpdateMarketRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    symbol?: string;
                    scriptId?: any;
                }): _145.MsgUpdateMarketRequest;
            };
            MsgUpdateMarketResponse: {
                encode(_: _145.MsgUpdateMarketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgUpdateMarketResponse;
                fromJSON(_: any): _145.MsgUpdateMarketResponse;
                toJSON(_: _145.MsgUpdateMarketResponse): unknown;
                fromPartial(_: {}): _145.MsgUpdateMarketResponse;
            };
            MsgRemoveMarketForAssetRequest: {
                encode(message: _145.MsgRemoveMarketForAssetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgRemoveMarketForAssetRequest;
                fromJSON(object: any): _145.MsgRemoveMarketForAssetRequest;
                toJSON(message: _145.MsgRemoveMarketForAssetRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    id?: any;
                    symbol?: string;
                }): _145.MsgRemoveMarketForAssetRequest;
            };
            MsgRemoveMarketForAssetResponse: {
                encode(_: _145.MsgRemoveMarketForAssetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgRemoveMarketForAssetResponse;
                fromJSON(_: any): _145.MsgRemoveMarketForAssetResponse;
                toJSON(_: _145.MsgRemoveMarketForAssetResponse): unknown;
                fromPartial(_: {}): _145.MsgRemoveMarketForAssetResponse;
            };
            MsgFetchPriceRequest: {
                encode(message: _145.MsgFetchPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgFetchPriceRequest;
                fromJSON(object: any): _145.MsgFetchPriceRequest;
                toJSON(message: _145.MsgFetchPriceRequest): unknown;
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
                }): _145.MsgFetchPriceRequest;
            };
            MsgFetchPriceResponse: {
                encode(_: _145.MsgFetchPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgFetchPriceResponse;
                fromJSON(_: any): _145.MsgFetchPriceResponse;
                toJSON(_: _145.MsgFetchPriceResponse): unknown;
                fromPartial(_: {}): _145.MsgFetchPriceResponse;
            };
            UpdateAdminProposal: {
                encode(message: _144.UpdateAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.UpdateAdminProposal;
                fromJSON(object: any): _144.UpdateAdminProposal;
                toJSON(message: _144.UpdateAdminProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    address?: string;
                }): _144.UpdateAdminProposal;
            };
            GenesisState: {
                encode(message: _143.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.GenesisState;
                fromJSON(object: any): _143.GenesisState;
                toJSON(message: _143.GenesisState): unknown;
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
                }): _143.GenesisState;
            };
        };
    }
    namespace vault {
        const v1beta1: {
            Vault: {
                encode(message: _153.Vault, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.Vault;
                fromJSON(object: any): _153.Vault;
                toJSON(message: _153.Vault): unknown;
                fromPartial(object: {
                    id?: any;
                    pairId?: any;
                    owner?: string;
                    amountIn?: string;
                    amountOut?: string;
                }): _153.Vault;
            };
            VaultInfo: {
                encode(message: _152.VaultInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.VaultInfo;
                fromJSON(object: any): _152.VaultInfo;
                toJSON(message: _152.VaultInfo): unknown;
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
                }): _152.VaultInfo;
            };
            QueryVaultRequest: {
                encode(message: _152.QueryVaultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryVaultRequest;
                fromJSON(object: any): _152.QueryVaultRequest;
                toJSON(message: _152.QueryVaultRequest): unknown;
                fromPartial(object: {
                    id?: any;
                }): _152.QueryVaultRequest;
            };
            QueryVaultResponse: {
                encode(message: _152.QueryVaultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryVaultResponse;
                fromJSON(object: any): _152.QueryVaultResponse;
                toJSON(message: _152.QueryVaultResponse): unknown;
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
                }): _152.QueryVaultResponse;
            };
            QueryVaultsRequest: {
                encode(message: _152.QueryVaultsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryVaultsRequest;
                fromJSON(object: any): _152.QueryVaultsRequest;
                toJSON(message: _152.QueryVaultsRequest): unknown;
                fromPartial(object: {
                    owner?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _152.QueryVaultsRequest;
            };
            QueryVaultsResponse: {
                encode(message: _152.QueryVaultsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryVaultsResponse;
                fromJSON(object: any): _152.QueryVaultsResponse;
                toJSON(message: _152.QueryVaultsResponse): unknown;
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
                }): _152.QueryVaultsResponse;
            };
            QueryAllVaultsRequest: {
                encode(message: _152.QueryAllVaultsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryAllVaultsRequest;
                fromJSON(object: any): _152.QueryAllVaultsRequest;
                toJSON(message: _152.QueryAllVaultsRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _152.QueryAllVaultsRequest;
            };
            QueryAllVaultsResponse: {
                encode(message: _152.QueryAllVaultsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryAllVaultsResponse;
                fromJSON(object: any): _152.QueryAllVaultsResponse;
                toJSON(message: _152.QueryAllVaultsResponse): unknown;
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
                }): _152.QueryAllVaultsResponse;
            };
            MsgCreateRequest: {
                encode(message: _151.MsgCreateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.MsgCreateRequest;
                fromJSON(object: any): _151.MsgCreateRequest;
                toJSON(message: _151.MsgCreateRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    pairId?: any;
                    amountIn?: string;
                    amountOut?: string;
                }): _151.MsgCreateRequest;
            };
            MsgCreateResponse: {
                encode(_: _151.MsgCreateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.MsgCreateResponse;
                fromJSON(_: any): _151.MsgCreateResponse;
                toJSON(_: _151.MsgCreateResponse): unknown;
                fromPartial(_: {}): _151.MsgCreateResponse;
            };
            MsgDepositRequest: {
                encode(message: _151.MsgDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.MsgDepositRequest;
                fromJSON(object: any): _151.MsgDepositRequest;
                toJSON(message: _151.MsgDepositRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    id?: any;
                    amount?: string;
                }): _151.MsgDepositRequest;
            };
            MsgDepositResponse: {
                encode(_: _151.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.MsgDepositResponse;
                fromJSON(_: any): _151.MsgDepositResponse;
                toJSON(_: _151.MsgDepositResponse): unknown;
                fromPartial(_: {}): _151.MsgDepositResponse;
            };
            MsgWithdrawRequest: {
                encode(message: _151.MsgWithdrawRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.MsgWithdrawRequest;
                fromJSON(object: any): _151.MsgWithdrawRequest;
                toJSON(message: _151.MsgWithdrawRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    id?: any;
                    amount?: string;
                }): _151.MsgWithdrawRequest;
            };
            MsgWithdrawResponse: {
                encode(_: _151.MsgWithdrawResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.MsgWithdrawResponse;
                fromJSON(_: any): _151.MsgWithdrawResponse;
                toJSON(_: _151.MsgWithdrawResponse): unknown;
                fromPartial(_: {}): _151.MsgWithdrawResponse;
            };
            MsgDrawRequest: {
                encode(message: _151.MsgDrawRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.MsgDrawRequest;
                fromJSON(object: any): _151.MsgDrawRequest;
                toJSON(message: _151.MsgDrawRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    id?: any;
                    amount?: string;
                }): _151.MsgDrawRequest;
            };
            MsgDrawResponse: {
                encode(_: _151.MsgDrawResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.MsgDrawResponse;
                fromJSON(_: any): _151.MsgDrawResponse;
                toJSON(_: _151.MsgDrawResponse): unknown;
                fromPartial(_: {}): _151.MsgDrawResponse;
            };
            MsgRepayRequest: {
                encode(message: _151.MsgRepayRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.MsgRepayRequest;
                fromJSON(object: any): _151.MsgRepayRequest;
                toJSON(message: _151.MsgRepayRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    id?: any;
                    amount?: string;
                }): _151.MsgRepayRequest;
            };
            MsgRepayResponse: {
                encode(_: _151.MsgRepayResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.MsgRepayResponse;
                fromJSON(_: any): _151.MsgRepayResponse;
                toJSON(_: _151.MsgRepayResponse): unknown;
                fromPartial(_: {}): _151.MsgRepayResponse;
            };
            MsgCloseRequest: {
                encode(message: _151.MsgCloseRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.MsgCloseRequest;
                fromJSON(object: any): _151.MsgCloseRequest;
                toJSON(message: _151.MsgCloseRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    id?: any;
                }): _151.MsgCloseRequest;
            };
            MsgCloseResponse: {
                encode(_: _151.MsgCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.MsgCloseResponse;
                fromJSON(_: any): _151.MsgCloseResponse;
                toJSON(_: _151.MsgCloseResponse): unknown;
                fromPartial(_: {}): _151.MsgCloseResponse;
            };
            GenesisState: {
                encode(message: _150.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.GenesisState;
                fromJSON(object: any): _150.GenesisState;
                toJSON(message: _150.GenesisState): unknown;
                fromPartial(object: {
                    vaults?: {
                        id?: any;
                        pairId?: any;
                        owner?: string;
                        amountIn?: string;
                        amountOut?: string;
                    }[];
                }): _150.GenesisState;
            };
            EventCreateVault: {
                encode(message: _149.EventCreateVault, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.EventCreateVault;
                fromJSON(object: any): _149.EventCreateVault;
                toJSON(message: _149.EventCreateVault): unknown;
                fromPartial(object: {
                    sender?: string;
                    collateralType?: string;
                }): _149.EventCreateVault;
            };
            EventDepositCollateral: {
                encode(message: _149.EventDepositCollateral, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.EventDepositCollateral;
                fromJSON(object: any): _149.EventDepositCollateral;
                toJSON(message: _149.EventDepositCollateral): unknown;
                fromPartial(object: {
                    owner?: string;
                    collateralType?: string;
                    collateral?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _149.EventDepositCollateral;
            };
            EventWithdrawCollateral: {
                encode(message: _149.EventWithdrawCollateral, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.EventWithdrawCollateral;
                fromJSON(object: any): _149.EventWithdrawCollateral;
                toJSON(message: _149.EventWithdrawCollateral): unknown;
                fromPartial(object: {
                    owner?: string;
                    collateralType?: string;
                    collateral?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _149.EventWithdrawCollateral;
            };
            EventDrawDebt: {
                encode(message: _149.EventDrawDebt, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.EventDrawDebt;
                fromJSON(object: any): _149.EventDrawDebt;
                toJSON(message: _149.EventDrawDebt): unknown;
                fromPartial(object: {
                    owner?: string;
                    collateralType?: string;
                    debt?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _149.EventDrawDebt;
            };
            EventRepayDebt: {
                encode(message: _149.EventRepayDebt, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.EventRepayDebt;
                fromJSON(object: any): _149.EventRepayDebt;
                toJSON(message: _149.EventRepayDebt): unknown;
                fromPartial(object: {
                    owner?: string;
                    collateralType?: string;
                    debt?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _149.EventRepayDebt;
            };
            EventCloseVault: {
                encode(message: _149.EventCloseVault, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.EventCloseVault;
                fromJSON(object: any): _149.EventCloseVault;
                toJSON(message: _149.EventCloseVault): unknown;
                fromPartial(object: {
                    owner?: string;
                    collateralType?: string;
                }): _149.EventCloseVault;
            };
        };
    }
}
