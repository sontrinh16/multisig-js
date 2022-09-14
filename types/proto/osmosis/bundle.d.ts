import * as _565 from "./epochs/genesis";
import * as _566 from "./epochs/query";
import * as _567 from "./gamm/pool-models/balancer/balancerPool";
import * as _568 from "./gamm/v1beta1/genesis";
import * as _569 from "./gamm/v1beta1/query";
import * as _570 from "./gamm/v1beta1/tx";
import * as _571 from "./gamm/pool-models/balancer/tx";
import * as _572 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _573 from "./gamm/pool-models/stableswap/tx";
import * as _574 from "./incentives/gauge";
import * as _575 from "./incentives/genesis";
import * as _576 from "./incentives/params";
import * as _577 from "./incentives/query";
import * as _578 from "./incentives/tx";
import * as _579 from "./lockup/genesis";
import * as _580 from "./lockup/lock";
import * as _581 from "./lockup/query";
import * as _582 from "./lockup/tx";
import * as _583 from "./mint/v1beta1/genesis";
import * as _584 from "./mint/v1beta1/mint";
import * as _585 from "./mint/v1beta1/query";
import * as _586 from "./pool-incentives/v1beta1/genesis";
import * as _587 from "./pool-incentives/v1beta1/gov";
import * as _588 from "./pool-incentives/v1beta1/incentives";
import * as _589 from "./pool-incentives/v1beta1/query";
import * as _590 from "./store/v1beta1/tree";
import * as _591 from "./superfluid/genesis";
import * as _592 from "./superfluid/params";
import * as _593 from "./superfluid/query";
import * as _594 from "./superfluid/superfluid";
import * as _595 from "./superfluid/tx";
import * as _596 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _597 from "./tokenfactory/v1beta1/genesis";
import * as _598 from "./tokenfactory/v1beta1/params";
import * as _599 from "./tokenfactory/v1beta1/query";
import * as _600 from "./tokenfactory/v1beta1/tx";
import * as _601 from "./txfees/v1beta1/feetoken";
import * as _602 from "./txfees/v1beta1/genesis";
import * as _603 from "./txfees/v1beta1/gov";
import * as _604 from "./txfees/v1beta1/query";
export declare namespace osmosis {
    namespace epochs {
        const v1beta1: {
            QueryEpochsInfoRequest: {
                encode(_: _566.QueryEpochsInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _566.QueryEpochsInfoRequest;
                fromJSON(_: any): _566.QueryEpochsInfoRequest;
                toJSON(_: _566.QueryEpochsInfoRequest): unknown;
                fromPartial(_: {}): _566.QueryEpochsInfoRequest;
            };
            QueryEpochsInfoResponse: {
                encode(message: _566.QueryEpochsInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _566.QueryEpochsInfoResponse;
                fromJSON(object: any): _566.QueryEpochsInfoResponse;
                toJSON(message: _566.QueryEpochsInfoResponse): unknown;
                fromPartial(object: {
                    epochs?: {
                        identifier?: string;
                        startTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        duration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        currentEpoch?: any;
                        currentEpochStartTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        epochCountingStarted?: boolean;
                        currentEpochStartHeight?: any;
                    }[];
                }): _566.QueryEpochsInfoResponse;
            };
            QueryCurrentEpochRequest: {
                encode(message: _566.QueryCurrentEpochRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _566.QueryCurrentEpochRequest;
                fromJSON(object: any): _566.QueryCurrentEpochRequest;
                toJSON(message: _566.QueryCurrentEpochRequest): unknown;
                fromPartial(object: {
                    identifier?: string;
                }): _566.QueryCurrentEpochRequest;
            };
            QueryCurrentEpochResponse: {
                encode(message: _566.QueryCurrentEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _566.QueryCurrentEpochResponse;
                fromJSON(object: any): _566.QueryCurrentEpochResponse;
                toJSON(message: _566.QueryCurrentEpochResponse): unknown;
                fromPartial(object: {
                    currentEpoch?: any;
                }): _566.QueryCurrentEpochResponse;
            };
            EpochInfo: {
                encode(message: _565.EpochInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _565.EpochInfo;
                fromJSON(object: any): _565.EpochInfo;
                toJSON(message: _565.EpochInfo): unknown;
                fromPartial(object: {
                    identifier?: string;
                    startTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    currentEpoch?: any;
                    currentEpochStartTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    epochCountingStarted?: boolean;
                    currentEpochStartHeight?: any;
                }): _565.EpochInfo;
            };
            GenesisState: {
                encode(message: _565.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _565.GenesisState;
                fromJSON(object: any): _565.GenesisState;
                toJSON(message: _565.GenesisState): unknown;
                fromPartial(object: {
                    epochs?: {
                        identifier?: string;
                        startTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        duration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        currentEpoch?: any;
                        currentEpochStartTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        epochCountingStarted?: boolean;
                        currentEpochStartHeight?: any;
                    }[];
                }): _565.GenesisState;
            };
        };
    }
    namespace gamm {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    joinPool(value: _570.MsgJoinPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitPool(value: _570.MsgExitPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountIn(value: _570.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountOut(value: _570.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    joinSwapExternAmountIn(value: _570.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    joinSwapShareAmountOut(value: _570.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitSwapExternAmountOut(value: _570.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitSwapShareAmountIn(value: _570.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    joinPool(value: _570.MsgJoinPool): {
                        typeUrl: string;
                        value: _570.MsgJoinPool;
                    };
                    exitPool(value: _570.MsgExitPool): {
                        typeUrl: string;
                        value: _570.MsgExitPool;
                    };
                    swapExactAmountIn(value: _570.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _570.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _570.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _570.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: _570.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: _570.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: _570.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: _570.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: _570.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: _570.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: _570.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: _570.MsgExitSwapShareAmountIn;
                    };
                };
                toJSON: {
                    joinPool(value: _570.MsgJoinPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exitPool(value: _570.MsgExitPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                    swapExactAmountIn(value: _570.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: unknown;
                    };
                    swapExactAmountOut(value: _570.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: unknown;
                    };
                    joinSwapExternAmountIn(value: _570.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: unknown;
                    };
                    joinSwapShareAmountOut(value: _570.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exitSwapExternAmountOut(value: _570.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exitSwapShareAmountIn(value: _570.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    joinPool(value: any): {
                        typeUrl: string;
                        value: _570.MsgJoinPool;
                    };
                    exitPool(value: any): {
                        typeUrl: string;
                        value: _570.MsgExitPool;
                    };
                    swapExactAmountIn(value: any): {
                        typeUrl: string;
                        value: _570.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: any): {
                        typeUrl: string;
                        value: _570.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: any): {
                        typeUrl: string;
                        value: _570.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: any): {
                        typeUrl: string;
                        value: _570.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: any): {
                        typeUrl: string;
                        value: _570.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: any): {
                        typeUrl: string;
                        value: _570.MsgExitSwapShareAmountIn;
                    };
                };
                fromPartial: {
                    joinPool(value: _570.MsgJoinPool): {
                        typeUrl: string;
                        value: _570.MsgJoinPool;
                    };
                    exitPool(value: _570.MsgExitPool): {
                        typeUrl: string;
                        value: _570.MsgExitPool;
                    };
                    swapExactAmountIn(value: _570.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _570.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _570.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _570.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: _570.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: _570.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: _570.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: _570.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: _570.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: _570.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: _570.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: _570.MsgExitSwapShareAmountIn;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.gamm.v1beta1.MsgJoinPool": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, shareOutAmount, tokenInMaxs }: _570.MsgJoinPool) => {
                        sender: string;
                        poolId: string;
                        shareOutAmount: string;
                        tokenInMaxs: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ sender, poolId, shareOutAmount, tokenInMaxs }: {
                        sender: string;
                        poolId: string;
                        shareOutAmount: string;
                        tokenInMaxs: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _570.MsgJoinPool;
                };
                "/osmosis.gamm.v1beta1.MsgExitPool": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, shareInAmount, tokenOutMins }: _570.MsgExitPool) => {
                        sender: string;
                        poolId: string;
                        shareInAmount: string;
                        tokenOutMins: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ sender, poolId, shareInAmount, tokenOutMins }: {
                        sender: string;
                        poolId: string;
                        shareInAmount: string;
                        tokenOutMins: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _570.MsgExitPool;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, routes, tokenIn, tokenOutMinAmount }: _570.MsgSwapExactAmountIn) => {
                        sender: string;
                        routes: {
                            poolId: string;
                            tokenOutDenom: string;
                        }[];
                        tokenIn: {
                            denom: string;
                            amount: string;
                        };
                        tokenOutMinAmount: string;
                    };
                    fromAmino: ({ sender, routes, tokenIn, tokenOutMinAmount }: {
                        sender: string;
                        routes: {
                            poolId: string;
                            tokenOutDenom: string;
                        }[];
                        tokenIn: {
                            denom: string;
                            amount: string;
                        };
                        tokenOutMinAmount: string;
                    }) => _570.MsgSwapExactAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, routes, tokenInMaxAmount, tokenOut }: _570.MsgSwapExactAmountOut) => {
                        sender: string;
                        routes: {
                            poolId: string;
                            tokenInDenom: string;
                        }[];
                        tokenInMaxAmount: string;
                        tokenOut: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ sender, routes, tokenInMaxAmount, tokenOut }: {
                        sender: string;
                        routes: {
                            poolId: string;
                            tokenInDenom: string;
                        }[];
                        tokenInMaxAmount: string;
                        tokenOut: {
                            denom: string;
                            amount: string;
                        };
                    }) => _570.MsgSwapExactAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenIn, shareOutMinAmount }: _570.MsgJoinSwapExternAmountIn) => {
                        sender: string;
                        poolId: string;
                        tokenIn: {
                            denom: string;
                            amount: string;
                        };
                        shareOutMinAmount: string;
                    };
                    fromAmino: ({ sender, poolId, tokenIn, shareOutMinAmount }: {
                        sender: string;
                        poolId: string;
                        tokenIn: {
                            denom: string;
                            amount: string;
                        };
                        shareOutMinAmount: string;
                    }) => _570.MsgJoinSwapExternAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenInDenom, shareOutAmount, tokenInMaxAmount }: _570.MsgJoinSwapShareAmountOut) => {
                        sender: string;
                        poolId: string;
                        tokenInDenom: string;
                        shareOutAmount: string;
                        tokenInMaxAmount: string;
                    };
                    fromAmino: ({ sender, poolId, tokenInDenom, shareOutAmount, tokenInMaxAmount }: {
                        sender: string;
                        poolId: string;
                        tokenInDenom: string;
                        shareOutAmount: string;
                        tokenInMaxAmount: string;
                    }) => _570.MsgJoinSwapShareAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenOut, shareInMaxAmount }: _570.MsgExitSwapExternAmountOut) => {
                        sender: string;
                        poolId: string;
                        tokenOut: {
                            denom: string;
                            amount: string;
                        };
                        shareInMaxAmount: string;
                    };
                    fromAmino: ({ sender, poolId, tokenOut, shareInMaxAmount }: {
                        sender: string;
                        poolId: string;
                        tokenOut: {
                            denom: string;
                            amount: string;
                        };
                        shareInMaxAmount: string;
                    }) => _570.MsgExitSwapExternAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenOutDenom, shareInAmount, tokenOutMinAmount }: _570.MsgExitSwapShareAmountIn) => {
                        sender: string;
                        poolId: string;
                        tokenOutDenom: string;
                        shareInAmount: string;
                        tokenOutMinAmount: string;
                    };
                    fromAmino: ({ sender, poolId, tokenOutDenom, shareInAmount, tokenOutMinAmount }: {
                        sender: string;
                        poolId: string;
                        tokenOutDenom: string;
                        shareInAmount: string;
                        tokenOutMinAmount: string;
                    }) => _570.MsgExitSwapShareAmountIn;
                };
            };
            MsgJoinPool: {
                encode(message: _570.MsgJoinPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _570.MsgJoinPool;
                fromJSON(object: any): _570.MsgJoinPool;
                toJSON(message: _570.MsgJoinPool): unknown;
                fromPartial(object: {
                    sender?: string;
                    poolId?: any;
                    shareOutAmount?: string;
                    tokenInMaxs?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _570.MsgJoinPool;
            };
            MsgJoinPoolResponse: {
                encode(_: _570.MsgJoinPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _570.MsgJoinPoolResponse;
                fromJSON(_: any): _570.MsgJoinPoolResponse;
                toJSON(_: _570.MsgJoinPoolResponse): unknown;
                fromPartial(_: {}): _570.MsgJoinPoolResponse;
            };
            MsgExitPool: {
                encode(message: _570.MsgExitPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _570.MsgExitPool;
                fromJSON(object: any): _570.MsgExitPool;
                toJSON(message: _570.MsgExitPool): unknown;
                fromPartial(object: {
                    sender?: string;
                    poolId?: any;
                    shareInAmount?: string;
                    tokenOutMins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _570.MsgExitPool;
            };
            MsgExitPoolResponse: {
                encode(_: _570.MsgExitPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _570.MsgExitPoolResponse;
                fromJSON(_: any): _570.MsgExitPoolResponse;
                toJSON(_: _570.MsgExitPoolResponse): unknown;
                fromPartial(_: {}): _570.MsgExitPoolResponse;
            };
            SwapAmountInRoute: {
                encode(message: _570.SwapAmountInRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _570.SwapAmountInRoute;
                fromJSON(object: any): _570.SwapAmountInRoute;
                toJSON(message: _570.SwapAmountInRoute): unknown;
                fromPartial(object: {
                    poolId?: any;
                    tokenOutDenom?: string;
                }): _570.SwapAmountInRoute;
            };
            MsgSwapExactAmountIn: {
                encode(message: _570.MsgSwapExactAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _570.MsgSwapExactAmountIn;
                fromJSON(object: any): _570.MsgSwapExactAmountIn;
                toJSON(message: _570.MsgSwapExactAmountIn): unknown;
                fromPartial(object: {
                    sender?: string;
                    routes?: {
                        poolId?: any;
                        tokenOutDenom?: string;
                    }[];
                    tokenIn?: {
                        denom?: string;
                        amount?: string;
                    };
                    tokenOutMinAmount?: string;
                }): _570.MsgSwapExactAmountIn;
            };
            MsgSwapExactAmountInResponse: {
                encode(message: _570.MsgSwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _570.MsgSwapExactAmountInResponse;
                fromJSON(object: any): _570.MsgSwapExactAmountInResponse;
                toJSON(message: _570.MsgSwapExactAmountInResponse): unknown;
                fromPartial(object: {
                    tokenOutAmount?: string;
                }): _570.MsgSwapExactAmountInResponse;
            };
            SwapAmountOutRoute: {
                encode(message: _570.SwapAmountOutRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _570.SwapAmountOutRoute;
                fromJSON(object: any): _570.SwapAmountOutRoute;
                toJSON(message: _570.SwapAmountOutRoute): unknown;
                fromPartial(object: {
                    poolId?: any;
                    tokenInDenom?: string;
                }): _570.SwapAmountOutRoute;
            };
            MsgSwapExactAmountOut: {
                encode(message: _570.MsgSwapExactAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _570.MsgSwapExactAmountOut;
                fromJSON(object: any): _570.MsgSwapExactAmountOut;
                toJSON(message: _570.MsgSwapExactAmountOut): unknown;
                fromPartial(object: {
                    sender?: string;
                    routes?: {
                        poolId?: any;
                        tokenInDenom?: string;
                    }[];
                    tokenInMaxAmount?: string;
                    tokenOut?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _570.MsgSwapExactAmountOut;
            };
            MsgSwapExactAmountOutResponse: {
                encode(message: _570.MsgSwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _570.MsgSwapExactAmountOutResponse;
                fromJSON(object: any): _570.MsgSwapExactAmountOutResponse;
                toJSON(message: _570.MsgSwapExactAmountOutResponse): unknown;
                fromPartial(object: {
                    tokenInAmount?: string;
                }): _570.MsgSwapExactAmountOutResponse;
            };
            MsgJoinSwapExternAmountIn: {
                encode(message: _570.MsgJoinSwapExternAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _570.MsgJoinSwapExternAmountIn;
                fromJSON(object: any): _570.MsgJoinSwapExternAmountIn;
                toJSON(message: _570.MsgJoinSwapExternAmountIn): unknown;
                fromPartial(object: {
                    sender?: string;
                    poolId?: any;
                    tokenIn?: {
                        denom?: string;
                        amount?: string;
                    };
                    shareOutMinAmount?: string;
                }): _570.MsgJoinSwapExternAmountIn;
            };
            MsgJoinSwapExternAmountInResponse: {
                encode(message: _570.MsgJoinSwapExternAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _570.MsgJoinSwapExternAmountInResponse;
                fromJSON(object: any): _570.MsgJoinSwapExternAmountInResponse;
                toJSON(message: _570.MsgJoinSwapExternAmountInResponse): unknown;
                fromPartial(object: {
                    shareOutAmount?: string;
                }): _570.MsgJoinSwapExternAmountInResponse;
            };
            MsgJoinSwapShareAmountOut: {
                encode(message: _570.MsgJoinSwapShareAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _570.MsgJoinSwapShareAmountOut;
                fromJSON(object: any): _570.MsgJoinSwapShareAmountOut;
                toJSON(message: _570.MsgJoinSwapShareAmountOut): unknown;
                fromPartial(object: {
                    sender?: string;
                    poolId?: any;
                    tokenInDenom?: string;
                    shareOutAmount?: string;
                    tokenInMaxAmount?: string;
                }): _570.MsgJoinSwapShareAmountOut;
            };
            MsgJoinSwapShareAmountOutResponse: {
                encode(message: _570.MsgJoinSwapShareAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _570.MsgJoinSwapShareAmountOutResponse;
                fromJSON(object: any): _570.MsgJoinSwapShareAmountOutResponse;
                toJSON(message: _570.MsgJoinSwapShareAmountOutResponse): unknown;
                fromPartial(object: {
                    tokenInAmount?: string;
                }): _570.MsgJoinSwapShareAmountOutResponse;
            };
            MsgExitSwapShareAmountIn: {
                encode(message: _570.MsgExitSwapShareAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _570.MsgExitSwapShareAmountIn;
                fromJSON(object: any): _570.MsgExitSwapShareAmountIn;
                toJSON(message: _570.MsgExitSwapShareAmountIn): unknown;
                fromPartial(object: {
                    sender?: string;
                    poolId?: any;
                    tokenOutDenom?: string;
                    shareInAmount?: string;
                    tokenOutMinAmount?: string;
                }): _570.MsgExitSwapShareAmountIn;
            };
            MsgExitSwapShareAmountInResponse: {
                encode(message: _570.MsgExitSwapShareAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _570.MsgExitSwapShareAmountInResponse;
                fromJSON(object: any): _570.MsgExitSwapShareAmountInResponse;
                toJSON(message: _570.MsgExitSwapShareAmountInResponse): unknown;
                fromPartial(object: {
                    tokenOutAmount?: string;
                }): _570.MsgExitSwapShareAmountInResponse;
            };
            MsgExitSwapExternAmountOut: {
                encode(message: _570.MsgExitSwapExternAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _570.MsgExitSwapExternAmountOut;
                fromJSON(object: any): _570.MsgExitSwapExternAmountOut;
                toJSON(message: _570.MsgExitSwapExternAmountOut): unknown;
                fromPartial(object: {
                    sender?: string;
                    poolId?: any;
                    tokenOut?: {
                        denom?: string;
                        amount?: string;
                    };
                    shareInMaxAmount?: string;
                }): _570.MsgExitSwapExternAmountOut;
            };
            MsgExitSwapExternAmountOutResponse: {
                encode(message: _570.MsgExitSwapExternAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _570.MsgExitSwapExternAmountOutResponse;
                fromJSON(object: any): _570.MsgExitSwapExternAmountOutResponse;
                toJSON(message: _570.MsgExitSwapExternAmountOutResponse): unknown;
                fromPartial(object: {
                    shareInAmount?: string;
                }): _570.MsgExitSwapExternAmountOutResponse;
            };
            QueryPoolRequest: {
                encode(message: _569.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _569.QueryPoolRequest;
                fromJSON(object: any): _569.QueryPoolRequest;
                toJSON(message: _569.QueryPoolRequest): unknown;
                fromPartial(object: {
                    poolId?: any;
                }): _569.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _569.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _569.QueryPoolResponse;
                fromJSON(object: any): _569.QueryPoolResponse;
                toJSON(message: _569.QueryPoolResponse): unknown;
                fromPartial(object: {
                    pool?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _569.QueryPoolResponse;
            };
            QueryPoolsRequest: {
                encode(message: _569.QueryPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _569.QueryPoolsRequest;
                fromJSON(object: any): _569.QueryPoolsRequest;
                toJSON(message: _569.QueryPoolsRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _569.QueryPoolsRequest;
            };
            QueryPoolsResponse: {
                encode(message: _569.QueryPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _569.QueryPoolsResponse;
                fromJSON(object: any): _569.QueryPoolsResponse;
                toJSON(message: _569.QueryPoolsResponse): unknown;
                fromPartial(object: {
                    pools?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _569.QueryPoolsResponse;
            };
            QueryNumPoolsRequest: {
                encode(_: _569.QueryNumPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _569.QueryNumPoolsRequest;
                fromJSON(_: any): _569.QueryNumPoolsRequest;
                toJSON(_: _569.QueryNumPoolsRequest): unknown;
                fromPartial(_: {}): _569.QueryNumPoolsRequest;
            };
            QueryNumPoolsResponse: {
                encode(message: _569.QueryNumPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _569.QueryNumPoolsResponse;
                fromJSON(object: any): _569.QueryNumPoolsResponse;
                toJSON(message: _569.QueryNumPoolsResponse): unknown;
                fromPartial(object: {
                    numPools?: any;
                }): _569.QueryNumPoolsResponse;
            };
            QueryPoolParamsRequest: {
                encode(message: _569.QueryPoolParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _569.QueryPoolParamsRequest;
                fromJSON(object: any): _569.QueryPoolParamsRequest;
                toJSON(message: _569.QueryPoolParamsRequest): unknown;
                fromPartial(object: {
                    poolId?: any;
                }): _569.QueryPoolParamsRequest;
            };
            QueryPoolParamsResponse: {
                encode(message: _569.QueryPoolParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _569.QueryPoolParamsResponse;
                fromJSON(object: any): _569.QueryPoolParamsResponse;
                toJSON(message: _569.QueryPoolParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _569.QueryPoolParamsResponse;
            };
            QueryTotalPoolLiquidityRequest: {
                encode(message: _569.QueryTotalPoolLiquidityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _569.QueryTotalPoolLiquidityRequest;
                fromJSON(object: any): _569.QueryTotalPoolLiquidityRequest;
                toJSON(message: _569.QueryTotalPoolLiquidityRequest): unknown;
                fromPartial(object: {
                    poolId?: any;
                }): _569.QueryTotalPoolLiquidityRequest;
            };
            QueryTotalPoolLiquidityResponse: {
                encode(message: _569.QueryTotalPoolLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _569.QueryTotalPoolLiquidityResponse;
                fromJSON(object: any): _569.QueryTotalPoolLiquidityResponse;
                toJSON(message: _569.QueryTotalPoolLiquidityResponse): unknown;
                fromPartial(object: {
                    liquidity?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _569.QueryTotalPoolLiquidityResponse;
            };
            QueryTotalSharesRequest: {
                encode(message: _569.QueryTotalSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _569.QueryTotalSharesRequest;
                fromJSON(object: any): _569.QueryTotalSharesRequest;
                toJSON(message: _569.QueryTotalSharesRequest): unknown;
                fromPartial(object: {
                    poolId?: any;
                }): _569.QueryTotalSharesRequest;
            };
            QueryTotalSharesResponse: {
                encode(message: _569.QueryTotalSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _569.QueryTotalSharesResponse;
                fromJSON(object: any): _569.QueryTotalSharesResponse;
                toJSON(message: _569.QueryTotalSharesResponse): unknown;
                fromPartial(object: {
                    totalShares?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _569.QueryTotalSharesResponse;
            };
            QuerySpotPriceRequest: {
                encode(message: _569.QuerySpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _569.QuerySpotPriceRequest;
                fromJSON(object: any): _569.QuerySpotPriceRequest;
                toJSON(message: _569.QuerySpotPriceRequest): unknown;
                fromPartial(object: {
                    poolId?: any;
                    baseAssetDenom?: string;
                    quoteAssetDenom?: string;
                }): _569.QuerySpotPriceRequest;
            };
            QuerySpotPriceResponse: {
                encode(message: _569.QuerySpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _569.QuerySpotPriceResponse;
                fromJSON(object: any): _569.QuerySpotPriceResponse;
                toJSON(message: _569.QuerySpotPriceResponse): unknown;
                fromPartial(object: {
                    spotPrice?: string;
                }): _569.QuerySpotPriceResponse;
            };
            QuerySwapExactAmountInRequest: {
                encode(message: _569.QuerySwapExactAmountInRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _569.QuerySwapExactAmountInRequest;
                fromJSON(object: any): _569.QuerySwapExactAmountInRequest;
                toJSON(message: _569.QuerySwapExactAmountInRequest): unknown;
                fromPartial(object: {
                    sender?: string;
                    poolId?: any;
                    tokenIn?: string;
                    routes?: {
                        poolId?: any;
                        tokenOutDenom?: string;
                    }[];
                }): _569.QuerySwapExactAmountInRequest;
            };
            QuerySwapExactAmountInResponse: {
                encode(message: _569.QuerySwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _569.QuerySwapExactAmountInResponse;
                fromJSON(object: any): _569.QuerySwapExactAmountInResponse;
                toJSON(message: _569.QuerySwapExactAmountInResponse): unknown;
                fromPartial(object: {
                    tokenOutAmount?: string;
                }): _569.QuerySwapExactAmountInResponse;
            };
            QuerySwapExactAmountOutRequest: {
                encode(message: _569.QuerySwapExactAmountOutRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _569.QuerySwapExactAmountOutRequest;
                fromJSON(object: any): _569.QuerySwapExactAmountOutRequest;
                toJSON(message: _569.QuerySwapExactAmountOutRequest): unknown;
                fromPartial(object: {
                    sender?: string;
                    poolId?: any;
                    routes?: {
                        poolId?: any;
                        tokenInDenom?: string;
                    }[];
                    tokenOut?: string;
                }): _569.QuerySwapExactAmountOutRequest;
            };
            QuerySwapExactAmountOutResponse: {
                encode(message: _569.QuerySwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _569.QuerySwapExactAmountOutResponse;
                fromJSON(object: any): _569.QuerySwapExactAmountOutResponse;
                toJSON(message: _569.QuerySwapExactAmountOutResponse): unknown;
                fromPartial(object: {
                    tokenInAmount?: string;
                }): _569.QuerySwapExactAmountOutResponse;
            };
            QueryTotalLiquidityRequest: {
                encode(_: _569.QueryTotalLiquidityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _569.QueryTotalLiquidityRequest;
                fromJSON(_: any): _569.QueryTotalLiquidityRequest;
                toJSON(_: _569.QueryTotalLiquidityRequest): unknown;
                fromPartial(_: {}): _569.QueryTotalLiquidityRequest;
            };
            QueryTotalLiquidityResponse: {
                encode(message: _569.QueryTotalLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _569.QueryTotalLiquidityResponse;
                fromJSON(object: any): _569.QueryTotalLiquidityResponse;
                toJSON(message: _569.QueryTotalLiquidityResponse): unknown;
                fromPartial(object: {
                    liquidity?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _569.QueryTotalLiquidityResponse;
            };
            Params: {
                encode(message: _568.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _568.Params;
                fromJSON(object: any): _568.Params;
                toJSON(message: _568.Params): unknown;
                fromPartial(object: {
                    poolCreationFee?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _568.Params;
            };
            GenesisState: {
                encode(message: _568.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _568.GenesisState;
                fromJSON(object: any): _568.GenesisState;
                toJSON(message: _568.GenesisState): unknown;
                fromPartial(object: {
                    pools?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    nextPoolNumber?: any;
                    params?: {
                        poolCreationFee?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _568.GenesisState;
            };
            SmoothWeightChangeParams: {
                encode(message: _567.SmoothWeightChangeParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _567.SmoothWeightChangeParams;
                fromJSON(object: any): _567.SmoothWeightChangeParams;
                toJSON(message: _567.SmoothWeightChangeParams): unknown;
                fromPartial(object: {
                    startTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    initialPoolWeights?: {
                        token?: {
                            denom?: string;
                            amount?: string;
                        };
                        weight?: string;
                    }[];
                    targetPoolWeights?: {
                        token?: {
                            denom?: string;
                            amount?: string;
                        };
                        weight?: string;
                    }[];
                }): _567.SmoothWeightChangeParams;
            };
            PoolParams: {
                encode(message: _567.PoolParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _567.PoolParams;
                fromJSON(object: any): _567.PoolParams;
                toJSON(message: _567.PoolParams): unknown;
                fromPartial(object: {
                    swapFee?: string;
                    exitFee?: string;
                    smoothWeightChangeParams?: {
                        startTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        duration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        initialPoolWeights?: {
                            token?: {
                                denom?: string;
                                amount?: string;
                            };
                            weight?: string;
                        }[];
                        targetPoolWeights?: {
                            token?: {
                                denom?: string;
                                amount?: string;
                            };
                            weight?: string;
                        }[];
                    };
                }): _567.PoolParams;
            };
            PoolAsset: {
                encode(message: _567.PoolAsset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _567.PoolAsset;
                fromJSON(object: any): _567.PoolAsset;
                toJSON(message: _567.PoolAsset): unknown;
                fromPartial(object: {
                    token?: {
                        denom?: string;
                        amount?: string;
                    };
                    weight?: string;
                }): _567.PoolAsset;
            };
            Pool: {
                encode(message: _567.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _567.Pool;
                fromJSON(object: any): _567.Pool;
                toJSON(message: _567.Pool): unknown;
                fromPartial(object: {
                    address?: string;
                    id?: any;
                    poolParams?: {
                        swapFee?: string;
                        exitFee?: string;
                        smoothWeightChangeParams?: {
                            startTime?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            duration?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            initialPoolWeights?: {
                                token?: {
                                    denom?: string;
                                    amount?: string;
                                };
                                weight?: string;
                            }[];
                            targetPoolWeights?: {
                                token?: {
                                    denom?: string;
                                    amount?: string;
                                };
                                weight?: string;
                            }[];
                        };
                    };
                    futurePoolGovernor?: string;
                    totalShares?: {
                        denom?: string;
                        amount?: string;
                    };
                    poolAssets?: {
                        token?: {
                            denom?: string;
                            amount?: string;
                        };
                        weight?: string;
                    }[];
                    totalWeight?: string;
                }): _567.Pool;
            };
        };
        namespace poolmodels {
            namespace balancer {
                const v1beta1: {
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            createBalancerPool(value: _571.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            createBalancerPool(value: _571.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: _571.MsgCreateBalancerPool;
                            };
                        };
                        toJSON: {
                            createBalancerPool(value: _571.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            createBalancerPool(value: any): {
                                typeUrl: string;
                                value: _571.MsgCreateBalancerPool;
                            };
                        };
                        fromPartial: {
                            createBalancerPool(value: _571.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: _571.MsgCreateBalancerPool;
                            };
                        };
                    };
                    AminoConverter: {
                        "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool": {
                            aminoType: string;
                            toAmino: ({ sender, poolParams, poolAssets, futurePoolGovernor }: _571.MsgCreateBalancerPool) => {
                                sender: string;
                                poolParams: {
                                    swapFee: string;
                                    exitFee: string;
                                    smoothWeightChangeParams: {
                                        start_time: {
                                            seconds: string;
                                            nanos: number;
                                        };
                                        duration: {
                                            seconds: string;
                                            nanos: number;
                                        };
                                        initialPoolWeights: {
                                            token: {
                                                denom: string;
                                                amount: string;
                                            };
                                            weight: string;
                                        }[];
                                        targetPoolWeights: {
                                            token: {
                                                denom: string;
                                                amount: string;
                                            };
                                            weight: string;
                                        }[];
                                    };
                                };
                                poolAssets: {
                                    token: {
                                        denom: string;
                                        amount: string;
                                    };
                                    weight: string;
                                }[];
                                future_pool_governor: string;
                            };
                            fromAmino: ({ sender, poolParams, poolAssets, future_pool_governor }: {
                                sender: string;
                                poolParams: {
                                    swapFee: string;
                                    exitFee: string;
                                    smoothWeightChangeParams: {
                                        start_time: {
                                            seconds: string;
                                            nanos: number;
                                        };
                                        duration: {
                                            seconds: string;
                                            nanos: number;
                                        };
                                        initialPoolWeights: {
                                            token: {
                                                denom: string;
                                                amount: string;
                                            };
                                            weight: string;
                                        }[];
                                        targetPoolWeights: {
                                            token: {
                                                denom: string;
                                                amount: string;
                                            };
                                            weight: string;
                                        }[];
                                    };
                                };
                                poolAssets: {
                                    token: {
                                        denom: string;
                                        amount: string;
                                    };
                                    weight: string;
                                }[];
                                future_pool_governor: string;
                            }) => _571.MsgCreateBalancerPool;
                        };
                    };
                    MsgCreateBalancerPool: {
                        encode(message: _571.MsgCreateBalancerPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _571.MsgCreateBalancerPool;
                        fromJSON(object: any): _571.MsgCreateBalancerPool;
                        toJSON(message: _571.MsgCreateBalancerPool): unknown;
                        fromPartial(object: {
                            sender?: string;
                            poolParams?: {
                                swapFee?: string;
                                exitFee?: string;
                                smoothWeightChangeParams?: {
                                    startTime?: {
                                        seconds?: any;
                                        nanos?: number;
                                    };
                                    duration?: {
                                        seconds?: any;
                                        nanos?: number;
                                    };
                                    initialPoolWeights?: {
                                        token?: {
                                            denom?: string;
                                            amount?: string;
                                        };
                                        weight?: string;
                                    }[];
                                    targetPoolWeights?: {
                                        token?: {
                                            denom?: string;
                                            amount?: string;
                                        };
                                        weight?: string;
                                    }[];
                                };
                            };
                            poolAssets?: {
                                token?: {
                                    denom?: string;
                                    amount?: string;
                                };
                                weight?: string;
                            }[];
                            futurePoolGovernor?: string;
                        }): _571.MsgCreateBalancerPool;
                    };
                    MsgCreateBalancerPoolResponse: {
                        encode(message: _571.MsgCreateBalancerPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _571.MsgCreateBalancerPoolResponse;
                        fromJSON(object: any): _571.MsgCreateBalancerPoolResponse;
                        toJSON(message: _571.MsgCreateBalancerPoolResponse): unknown;
                        fromPartial(object: {
                            poolId?: any;
                        }): _571.MsgCreateBalancerPoolResponse;
                    };
                };
            }
            namespace stableswap {
                const v1beta1: {
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            createStableswapPool(value: _573.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                            stableSwapAdjustScalingFactors(value: _573.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            createStableswapPool(value: _573.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: _573.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: _573.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: _573.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                        toJSON: {
                            createStableswapPool(value: _573.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: unknown;
                            };
                            stableSwapAdjustScalingFactors(value: _573.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            createStableswapPool(value: any): {
                                typeUrl: string;
                                value: _573.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: any): {
                                typeUrl: string;
                                value: _573.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                        fromPartial: {
                            createStableswapPool(value: _573.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: _573.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: _573.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: _573.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                    };
                    AminoConverter: {
                        "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool": {
                            aminoType: string;
                            toAmino: ({ sender, poolParams, initialPoolLiquidity, futurePoolGovernor }: _573.MsgCreateStableswapPool) => {
                                sender: string;
                                poolParams: {
                                    swapFee: string;
                                    exitFee: string;
                                };
                                initial_pool_liquidity: {
                                    denom: string;
                                    amount: string;
                                }[];
                                future_pool_governor: string;
                            };
                            fromAmino: ({ sender, poolParams, initial_pool_liquidity, future_pool_governor }: {
                                sender: string;
                                poolParams: {
                                    swapFee: string;
                                    exitFee: string;
                                };
                                initial_pool_liquidity: {
                                    denom: string;
                                    amount: string;
                                }[];
                                future_pool_governor: string;
                            }) => _573.MsgCreateStableswapPool;
                        };
                        "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors": {
                            aminoType: string;
                            toAmino: ({ sender, poolId, scalingFactors }: _573.MsgStableSwapAdjustScalingFactors) => {
                                sender: string;
                                pool_id: string;
                                scaling_factors: Long[];
                            };
                            fromAmino: ({ sender, pool_id, scaling_factors }: {
                                sender: string;
                                pool_id: string;
                                scaling_factors: Long[];
                            }) => _573.MsgStableSwapAdjustScalingFactors;
                        };
                    };
                    MsgCreateStableswapPool: {
                        encode(message: _573.MsgCreateStableswapPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _573.MsgCreateStableswapPool;
                        fromJSON(object: any): _573.MsgCreateStableswapPool;
                        toJSON(message: _573.MsgCreateStableswapPool): unknown;
                        fromPartial(object: {
                            sender?: string;
                            poolParams?: {
                                swapFee?: string;
                                exitFee?: string;
                            };
                            initialPoolLiquidity?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            futurePoolGovernor?: string;
                        }): _573.MsgCreateStableswapPool;
                    };
                    MsgCreateStableswapPoolResponse: {
                        encode(message: _573.MsgCreateStableswapPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _573.MsgCreateStableswapPoolResponse;
                        fromJSON(object: any): _573.MsgCreateStableswapPoolResponse;
                        toJSON(message: _573.MsgCreateStableswapPoolResponse): unknown;
                        fromPartial(object: {
                            poolId?: any;
                        }): _573.MsgCreateStableswapPoolResponse;
                    };
                    MsgStableSwapAdjustScalingFactors: {
                        encode(message: _573.MsgStableSwapAdjustScalingFactors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _573.MsgStableSwapAdjustScalingFactors;
                        fromJSON(object: any): _573.MsgStableSwapAdjustScalingFactors;
                        toJSON(message: _573.MsgStableSwapAdjustScalingFactors): unknown;
                        fromPartial(object: {
                            sender?: string;
                            poolId?: any;
                            scalingFactors?: any[];
                        }): _573.MsgStableSwapAdjustScalingFactors;
                    };
                    MsgStableSwapAdjustScalingFactorsResponse: {
                        encode(_: _573.MsgStableSwapAdjustScalingFactorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _573.MsgStableSwapAdjustScalingFactorsResponse;
                        fromJSON(_: any): _573.MsgStableSwapAdjustScalingFactorsResponse;
                        toJSON(_: _573.MsgStableSwapAdjustScalingFactorsResponse): unknown;
                        fromPartial(_: {}): _573.MsgStableSwapAdjustScalingFactorsResponse;
                    };
                    PoolParams: {
                        encode(message: _572.PoolParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _572.PoolParams;
                        fromJSON(object: any): _572.PoolParams;
                        toJSON(message: _572.PoolParams): unknown;
                        fromPartial(object: {
                            swapFee?: string;
                            exitFee?: string;
                        }): _572.PoolParams;
                    };
                    Pool: {
                        encode(message: _572.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _572.Pool;
                        fromJSON(object: any): _572.Pool;
                        toJSON(message: _572.Pool): unknown;
                        fromPartial(object: {
                            address?: string;
                            id?: any;
                            poolParams?: {
                                swapFee?: string;
                                exitFee?: string;
                            };
                            futurePoolGovernor?: string;
                            totalShares?: {
                                denom?: string;
                                amount?: string;
                            };
                            poolLiquidity?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            scalingFactor?: any[];
                            scalingFactorGovernor?: string;
                        }): _572.Pool;
                    };
                };
            }
        }
    }
    const incentives: {
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                createGauge(value: _578.MsgCreateGauge): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                addToGauge(value: _578.MsgAddToGauge): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                createGauge(value: _578.MsgCreateGauge): {
                    typeUrl: string;
                    value: _578.MsgCreateGauge;
                };
                addToGauge(value: _578.MsgAddToGauge): {
                    typeUrl: string;
                    value: _578.MsgAddToGauge;
                };
            };
            toJSON: {
                createGauge(value: _578.MsgCreateGauge): {
                    typeUrl: string;
                    value: unknown;
                };
                addToGauge(value: _578.MsgAddToGauge): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                createGauge(value: any): {
                    typeUrl: string;
                    value: _578.MsgCreateGauge;
                };
                addToGauge(value: any): {
                    typeUrl: string;
                    value: _578.MsgAddToGauge;
                };
            };
            fromPartial: {
                createGauge(value: _578.MsgCreateGauge): {
                    typeUrl: string;
                    value: _578.MsgCreateGauge;
                };
                addToGauge(value: _578.MsgAddToGauge): {
                    typeUrl: string;
                    value: _578.MsgAddToGauge;
                };
            };
        };
        AminoConverter: {
            "/osmosis.incentives.MsgCreateGauge": {
                aminoType: string;
                toAmino: ({ isPerpetual, owner, distributeTo, coins, startTime, numEpochsPaidOver }: _578.MsgCreateGauge) => {
                    is_perpetual: boolean;
                    owner: string;
                    distribute_to: {
                        lock_query_type: number;
                        denom: string;
                        duration: {
                            seconds: string;
                            nanos: number;
                        };
                        timestamp: {
                            seconds: string;
                            nanos: number;
                        };
                    };
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                    start_time: {
                        seconds: string;
                        nanos: number;
                    };
                    num_epochs_paid_over: string;
                };
                fromAmino: ({ is_perpetual, owner, distribute_to, coins, start_time, num_epochs_paid_over }: {
                    is_perpetual: boolean;
                    owner: string;
                    distribute_to: {
                        lock_query_type: number;
                        denom: string;
                        duration: {
                            seconds: string;
                            nanos: number;
                        };
                        timestamp: {
                            seconds: string;
                            nanos: number;
                        };
                    };
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                    start_time: {
                        seconds: string;
                        nanos: number;
                    };
                    num_epochs_paid_over: string;
                }) => _578.MsgCreateGauge;
            };
            "/osmosis.incentives.MsgAddToGauge": {
                aminoType: string;
                toAmino: ({ owner, gaugeId, rewards }: _578.MsgAddToGauge) => {
                    owner: string;
                    gauge_id: string;
                    rewards: {
                        denom: string;
                        amount: string;
                    }[];
                };
                fromAmino: ({ owner, gauge_id, rewards }: {
                    owner: string;
                    gauge_id: string;
                    rewards: {
                        denom: string;
                        amount: string;
                    }[];
                }) => _578.MsgAddToGauge;
            };
        };
        MsgCreateGauge: {
            encode(message: _578.MsgCreateGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _578.MsgCreateGauge;
            fromJSON(object: any): _578.MsgCreateGauge;
            toJSON(message: _578.MsgCreateGauge): unknown;
            fromPartial(object: {
                isPerpetual?: boolean;
                owner?: string;
                distributeTo?: {
                    lockQueryType?: _580.LockQueryType;
                    denom?: string;
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    timestamp?: {
                        seconds?: any;
                        nanos?: number;
                    };
                };
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
                startTime?: {
                    seconds?: any;
                    nanos?: number;
                };
                numEpochsPaidOver?: any;
            }): _578.MsgCreateGauge;
        };
        MsgCreateGaugeResponse: {
            encode(_: _578.MsgCreateGaugeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _578.MsgCreateGaugeResponse;
            fromJSON(_: any): _578.MsgCreateGaugeResponse;
            toJSON(_: _578.MsgCreateGaugeResponse): unknown;
            fromPartial(_: {}): _578.MsgCreateGaugeResponse;
        };
        MsgAddToGauge: {
            encode(message: _578.MsgAddToGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _578.MsgAddToGauge;
            fromJSON(object: any): _578.MsgAddToGauge;
            toJSON(message: _578.MsgAddToGauge): unknown;
            fromPartial(object: {
                owner?: string;
                gaugeId?: any;
                rewards?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _578.MsgAddToGauge;
        };
        MsgAddToGaugeResponse: {
            encode(_: _578.MsgAddToGaugeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _578.MsgAddToGaugeResponse;
            fromJSON(_: any): _578.MsgAddToGaugeResponse;
            toJSON(_: _578.MsgAddToGaugeResponse): unknown;
            fromPartial(_: {}): _578.MsgAddToGaugeResponse;
        };
        ModuleToDistributeCoinsRequest: {
            encode(_: _577.ModuleToDistributeCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _577.ModuleToDistributeCoinsRequest;
            fromJSON(_: any): _577.ModuleToDistributeCoinsRequest;
            toJSON(_: _577.ModuleToDistributeCoinsRequest): unknown;
            fromPartial(_: {}): _577.ModuleToDistributeCoinsRequest;
        };
        ModuleToDistributeCoinsResponse: {
            encode(message: _577.ModuleToDistributeCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _577.ModuleToDistributeCoinsResponse;
            fromJSON(object: any): _577.ModuleToDistributeCoinsResponse;
            toJSON(message: _577.ModuleToDistributeCoinsResponse): unknown;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _577.ModuleToDistributeCoinsResponse;
        };
        ModuleDistributedCoinsRequest: {
            encode(_: _577.ModuleDistributedCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _577.ModuleDistributedCoinsRequest;
            fromJSON(_: any): _577.ModuleDistributedCoinsRequest;
            toJSON(_: _577.ModuleDistributedCoinsRequest): unknown;
            fromPartial(_: {}): _577.ModuleDistributedCoinsRequest;
        };
        ModuleDistributedCoinsResponse: {
            encode(message: _577.ModuleDistributedCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _577.ModuleDistributedCoinsResponse;
            fromJSON(object: any): _577.ModuleDistributedCoinsResponse;
            toJSON(message: _577.ModuleDistributedCoinsResponse): unknown;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _577.ModuleDistributedCoinsResponse;
        };
        GaugeByIDRequest: {
            encode(message: _577.GaugeByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _577.GaugeByIDRequest;
            fromJSON(object: any): _577.GaugeByIDRequest;
            toJSON(message: _577.GaugeByIDRequest): unknown;
            fromPartial(object: {
                id?: any;
            }): _577.GaugeByIDRequest;
        };
        GaugeByIDResponse: {
            encode(message: _577.GaugeByIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _577.GaugeByIDResponse;
            fromJSON(object: any): _577.GaugeByIDResponse;
            toJSON(message: _577.GaugeByIDResponse): unknown;
            fromPartial(object: {
                gauge?: {
                    id?: any;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _580.LockQueryType;
                        denom?: string;
                        duration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        timestamp?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    startTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    numEpochsPaidOver?: any;
                    filledEpochs?: any;
                    distributedCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                };
            }): _577.GaugeByIDResponse;
        };
        GaugesRequest: {
            encode(message: _577.GaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _577.GaugesRequest;
            fromJSON(object: any): _577.GaugesRequest;
            toJSON(message: _577.GaugesRequest): unknown;
            fromPartial(object: {
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _577.GaugesRequest;
        };
        GaugesResponse: {
            encode(message: _577.GaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _577.GaugesResponse;
            fromJSON(object: any): _577.GaugesResponse;
            toJSON(message: _577.GaugesResponse): unknown;
            fromPartial(object: {
                data?: {
                    id?: any;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _580.LockQueryType;
                        denom?: string;
                        duration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        timestamp?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    startTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    numEpochsPaidOver?: any;
                    filledEpochs?: any;
                    distributedCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
                pagination?: {
                    nextKey?: Uint8Array;
                    total?: any;
                };
            }): _577.GaugesResponse;
        };
        ActiveGaugesRequest: {
            encode(message: _577.ActiveGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _577.ActiveGaugesRequest;
            fromJSON(object: any): _577.ActiveGaugesRequest;
            toJSON(message: _577.ActiveGaugesRequest): unknown;
            fromPartial(object: {
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _577.ActiveGaugesRequest;
        };
        ActiveGaugesResponse: {
            encode(message: _577.ActiveGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _577.ActiveGaugesResponse;
            fromJSON(object: any): _577.ActiveGaugesResponse;
            toJSON(message: _577.ActiveGaugesResponse): unknown;
            fromPartial(object: {
                data?: {
                    id?: any;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _580.LockQueryType;
                        denom?: string;
                        duration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        timestamp?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    startTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    numEpochsPaidOver?: any;
                    filledEpochs?: any;
                    distributedCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
                pagination?: {
                    nextKey?: Uint8Array;
                    total?: any;
                };
            }): _577.ActiveGaugesResponse;
        };
        ActiveGaugesPerDenomRequest: {
            encode(message: _577.ActiveGaugesPerDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _577.ActiveGaugesPerDenomRequest;
            fromJSON(object: any): _577.ActiveGaugesPerDenomRequest;
            toJSON(message: _577.ActiveGaugesPerDenomRequest): unknown;
            fromPartial(object: {
                denom?: string;
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _577.ActiveGaugesPerDenomRequest;
        };
        ActiveGaugesPerDenomResponse: {
            encode(message: _577.ActiveGaugesPerDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _577.ActiveGaugesPerDenomResponse;
            fromJSON(object: any): _577.ActiveGaugesPerDenomResponse;
            toJSON(message: _577.ActiveGaugesPerDenomResponse): unknown;
            fromPartial(object: {
                data?: {
                    id?: any;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _580.LockQueryType;
                        denom?: string;
                        duration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        timestamp?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    startTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    numEpochsPaidOver?: any;
                    filledEpochs?: any;
                    distributedCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
                pagination?: {
                    nextKey?: Uint8Array;
                    total?: any;
                };
            }): _577.ActiveGaugesPerDenomResponse;
        };
        UpcomingGaugesRequest: {
            encode(message: _577.UpcomingGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _577.UpcomingGaugesRequest;
            fromJSON(object: any): _577.UpcomingGaugesRequest;
            toJSON(message: _577.UpcomingGaugesRequest): unknown;
            fromPartial(object: {
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _577.UpcomingGaugesRequest;
        };
        UpcomingGaugesResponse: {
            encode(message: _577.UpcomingGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _577.UpcomingGaugesResponse;
            fromJSON(object: any): _577.UpcomingGaugesResponse;
            toJSON(message: _577.UpcomingGaugesResponse): unknown;
            fromPartial(object: {
                data?: {
                    id?: any;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _580.LockQueryType;
                        denom?: string;
                        duration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        timestamp?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    startTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    numEpochsPaidOver?: any;
                    filledEpochs?: any;
                    distributedCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
                pagination?: {
                    nextKey?: Uint8Array;
                    total?: any;
                };
            }): _577.UpcomingGaugesResponse;
        };
        UpcomingGaugesPerDenomRequest: {
            encode(message: _577.UpcomingGaugesPerDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _577.UpcomingGaugesPerDenomRequest;
            fromJSON(object: any): _577.UpcomingGaugesPerDenomRequest;
            toJSON(message: _577.UpcomingGaugesPerDenomRequest): unknown;
            fromPartial(object: {
                denom?: string;
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _577.UpcomingGaugesPerDenomRequest;
        };
        UpcomingGaugesPerDenomResponse: {
            encode(message: _577.UpcomingGaugesPerDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _577.UpcomingGaugesPerDenomResponse;
            fromJSON(object: any): _577.UpcomingGaugesPerDenomResponse;
            toJSON(message: _577.UpcomingGaugesPerDenomResponse): unknown;
            fromPartial(object: {
                upcomingGauges?: {
                    id?: any;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _580.LockQueryType;
                        denom?: string;
                        duration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        timestamp?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    startTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    numEpochsPaidOver?: any;
                    filledEpochs?: any;
                    distributedCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
                pagination?: {
                    nextKey?: Uint8Array;
                    total?: any;
                };
            }): _577.UpcomingGaugesPerDenomResponse;
        };
        RewardsEstRequest: {
            encode(message: _577.RewardsEstRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _577.RewardsEstRequest;
            fromJSON(object: any): _577.RewardsEstRequest;
            toJSON(message: _577.RewardsEstRequest): unknown;
            fromPartial(object: {
                owner?: string;
                lockIds?: any[];
                endEpoch?: any;
            }): _577.RewardsEstRequest;
        };
        RewardsEstResponse: {
            encode(message: _577.RewardsEstResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _577.RewardsEstResponse;
            fromJSON(object: any): _577.RewardsEstResponse;
            toJSON(message: _577.RewardsEstResponse): unknown;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _577.RewardsEstResponse;
        };
        QueryLockableDurationsRequest: {
            encode(_: _577.QueryLockableDurationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _577.QueryLockableDurationsRequest;
            fromJSON(_: any): _577.QueryLockableDurationsRequest;
            toJSON(_: _577.QueryLockableDurationsRequest): unknown;
            fromPartial(_: {}): _577.QueryLockableDurationsRequest;
        };
        QueryLockableDurationsResponse: {
            encode(message: _577.QueryLockableDurationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _577.QueryLockableDurationsResponse;
            fromJSON(object: any): _577.QueryLockableDurationsResponse;
            toJSON(message: _577.QueryLockableDurationsResponse): unknown;
            fromPartial(object: {
                lockableDurations?: {
                    seconds?: any;
                    nanos?: number;
                }[];
            }): _577.QueryLockableDurationsResponse;
        };
        Params: {
            encode(message: _576.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _576.Params;
            fromJSON(object: any): _576.Params;
            toJSON(message: _576.Params): unknown;
            fromPartial(object: {
                distrEpochIdentifier?: string;
            }): _576.Params;
        };
        GenesisState: {
            encode(message: _575.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _575.GenesisState;
            fromJSON(object: any): _575.GenesisState;
            toJSON(message: _575.GenesisState): unknown;
            fromPartial(object: {
                params?: {
                    distrEpochIdentifier?: string;
                };
                gauges?: {
                    id?: any;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _580.LockQueryType;
                        denom?: string;
                        duration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        timestamp?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    startTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    numEpochsPaidOver?: any;
                    filledEpochs?: any;
                    distributedCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
                lockableDurations?: {
                    seconds?: any;
                    nanos?: number;
                }[];
                lastGaugeId?: any;
            }): _575.GenesisState;
        };
        Gauge: {
            encode(message: _574.Gauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _574.Gauge;
            fromJSON(object: any): _574.Gauge;
            toJSON(message: _574.Gauge): unknown;
            fromPartial(object: {
                id?: any;
                isPerpetual?: boolean;
                distributeTo?: {
                    lockQueryType?: _580.LockQueryType;
                    denom?: string;
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    timestamp?: {
                        seconds?: any;
                        nanos?: number;
                    };
                };
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
                startTime?: {
                    seconds?: any;
                    nanos?: number;
                };
                numEpochsPaidOver?: any;
                filledEpochs?: any;
                distributedCoins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _574.Gauge;
        };
        LockableDurationsInfo: {
            encode(message: _574.LockableDurationsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _574.LockableDurationsInfo;
            fromJSON(object: any): _574.LockableDurationsInfo;
            toJSON(message: _574.LockableDurationsInfo): unknown;
            fromPartial(object: {
                lockableDurations?: {
                    seconds?: any;
                    nanos?: number;
                }[];
            }): _574.LockableDurationsInfo;
        };
    };
    const lockup: {
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                lockTokens(value: _582.MsgLockTokens): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                beginUnlockingAll(value: _582.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                beginUnlocking(value: _582.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                extendLockup(value: _582.MsgExtendLockup): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                lockTokens(value: _582.MsgLockTokens): {
                    typeUrl: string;
                    value: _582.MsgLockTokens;
                };
                beginUnlockingAll(value: _582.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: _582.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: _582.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: _582.MsgBeginUnlocking;
                };
                extendLockup(value: _582.MsgExtendLockup): {
                    typeUrl: string;
                    value: _582.MsgExtendLockup;
                };
            };
            toJSON: {
                lockTokens(value: _582.MsgLockTokens): {
                    typeUrl: string;
                    value: unknown;
                };
                beginUnlockingAll(value: _582.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: unknown;
                };
                beginUnlocking(value: _582.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: unknown;
                };
                extendLockup(value: _582.MsgExtendLockup): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                lockTokens(value: any): {
                    typeUrl: string;
                    value: _582.MsgLockTokens;
                };
                beginUnlockingAll(value: any): {
                    typeUrl: string;
                    value: _582.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: any): {
                    typeUrl: string;
                    value: _582.MsgBeginUnlocking;
                };
                extendLockup(value: any): {
                    typeUrl: string;
                    value: _582.MsgExtendLockup;
                };
            };
            fromPartial: {
                lockTokens(value: _582.MsgLockTokens): {
                    typeUrl: string;
                    value: _582.MsgLockTokens;
                };
                beginUnlockingAll(value: _582.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: _582.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: _582.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: _582.MsgBeginUnlocking;
                };
                extendLockup(value: _582.MsgExtendLockup): {
                    typeUrl: string;
                    value: _582.MsgExtendLockup;
                };
            };
        };
        AminoConverter: {
            "/osmosis.lockup.MsgLockTokens": {
                aminoType: string;
                toAmino: ({ owner, duration, coins }: _582.MsgLockTokens) => {
                    owner: string;
                    duration: {
                        seconds: string;
                        nanos: number;
                    };
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                };
                fromAmino: ({ owner, duration, coins }: {
                    owner: string;
                    duration: {
                        seconds: string;
                        nanos: number;
                    };
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                }) => _582.MsgLockTokens;
            };
            "/osmosis.lockup.MsgBeginUnlockingAll": {
                aminoType: string;
                toAmino: ({ owner }: _582.MsgBeginUnlockingAll) => {
                    owner: string;
                };
                fromAmino: ({ owner }: {
                    owner: string;
                }) => _582.MsgBeginUnlockingAll;
            };
            "/osmosis.lockup.MsgBeginUnlocking": {
                aminoType: string;
                toAmino: ({ owner, ID, coins }: _582.MsgBeginUnlocking) => {
                    owner: string;
                    ID: string;
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                };
                fromAmino: ({ owner, ID, coins }: {
                    owner: string;
                    ID: string;
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                }) => _582.MsgBeginUnlocking;
            };
            "/osmosis.lockup.MsgExtendLockup": {
                aminoType: string;
                toAmino: ({ owner, ID, duration }: _582.MsgExtendLockup) => {
                    owner: string;
                    ID: string;
                    duration: {
                        seconds: string;
                        nanos: number;
                    };
                };
                fromAmino: ({ owner, ID, duration }: {
                    owner: string;
                    ID: string;
                    duration: {
                        seconds: string;
                        nanos: number;
                    };
                }) => _582.MsgExtendLockup;
            };
        };
        MsgLockTokens: {
            encode(message: _582.MsgLockTokens, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _582.MsgLockTokens;
            fromJSON(object: any): _582.MsgLockTokens;
            toJSON(message: _582.MsgLockTokens): unknown;
            fromPartial(object: {
                owner?: string;
                duration?: {
                    seconds?: any;
                    nanos?: number;
                };
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _582.MsgLockTokens;
        };
        MsgLockTokensResponse: {
            encode(message: _582.MsgLockTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _582.MsgLockTokensResponse;
            fromJSON(object: any): _582.MsgLockTokensResponse;
            toJSON(message: _582.MsgLockTokensResponse): unknown;
            fromPartial(object: {
                ID?: any;
            }): _582.MsgLockTokensResponse;
        };
        MsgBeginUnlockingAll: {
            encode(message: _582.MsgBeginUnlockingAll, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _582.MsgBeginUnlockingAll;
            fromJSON(object: any): _582.MsgBeginUnlockingAll;
            toJSON(message: _582.MsgBeginUnlockingAll): unknown;
            fromPartial(object: {
                owner?: string;
            }): _582.MsgBeginUnlockingAll;
        };
        MsgBeginUnlockingAllResponse: {
            encode(message: _582.MsgBeginUnlockingAllResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _582.MsgBeginUnlockingAllResponse;
            fromJSON(object: any): _582.MsgBeginUnlockingAllResponse;
            toJSON(message: _582.MsgBeginUnlockingAllResponse): unknown;
            fromPartial(object: {
                unlocks?: {
                    ID?: any;
                    owner?: string;
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    endTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
            }): _582.MsgBeginUnlockingAllResponse;
        };
        MsgBeginUnlocking: {
            encode(message: _582.MsgBeginUnlocking, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _582.MsgBeginUnlocking;
            fromJSON(object: any): _582.MsgBeginUnlocking;
            toJSON(message: _582.MsgBeginUnlocking): unknown;
            fromPartial(object: {
                owner?: string;
                ID?: any;
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _582.MsgBeginUnlocking;
        };
        MsgBeginUnlockingResponse: {
            encode(message: _582.MsgBeginUnlockingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _582.MsgBeginUnlockingResponse;
            fromJSON(object: any): _582.MsgBeginUnlockingResponse;
            toJSON(message: _582.MsgBeginUnlockingResponse): unknown;
            fromPartial(object: {
                success?: boolean;
            }): _582.MsgBeginUnlockingResponse;
        };
        MsgExtendLockup: {
            encode(message: _582.MsgExtendLockup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _582.MsgExtendLockup;
            fromJSON(object: any): _582.MsgExtendLockup;
            toJSON(message: _582.MsgExtendLockup): unknown;
            fromPartial(object: {
                owner?: string;
                ID?: any;
                duration?: {
                    seconds?: any;
                    nanos?: number;
                };
            }): _582.MsgExtendLockup;
        };
        MsgExtendLockupResponse: {
            encode(message: _582.MsgExtendLockupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _582.MsgExtendLockupResponse;
            fromJSON(object: any): _582.MsgExtendLockupResponse;
            toJSON(message: _582.MsgExtendLockupResponse): unknown;
            fromPartial(object: {
                success?: boolean;
            }): _582.MsgExtendLockupResponse;
        };
        ModuleBalanceRequest: {
            encode(_: _581.ModuleBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _581.ModuleBalanceRequest;
            fromJSON(_: any): _581.ModuleBalanceRequest;
            toJSON(_: _581.ModuleBalanceRequest): unknown;
            fromPartial(_: {}): _581.ModuleBalanceRequest;
        };
        ModuleBalanceResponse: {
            encode(message: _581.ModuleBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _581.ModuleBalanceResponse;
            fromJSON(object: any): _581.ModuleBalanceResponse;
            toJSON(message: _581.ModuleBalanceResponse): unknown;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _581.ModuleBalanceResponse;
        };
        ModuleLockedAmountRequest: {
            encode(_: _581.ModuleLockedAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _581.ModuleLockedAmountRequest;
            fromJSON(_: any): _581.ModuleLockedAmountRequest;
            toJSON(_: _581.ModuleLockedAmountRequest): unknown;
            fromPartial(_: {}): _581.ModuleLockedAmountRequest;
        };
        ModuleLockedAmountResponse: {
            encode(message: _581.ModuleLockedAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _581.ModuleLockedAmountResponse;
            fromJSON(object: any): _581.ModuleLockedAmountResponse;
            toJSON(message: _581.ModuleLockedAmountResponse): unknown;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _581.ModuleLockedAmountResponse;
        };
        AccountUnlockableCoinsRequest: {
            encode(message: _581.AccountUnlockableCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _581.AccountUnlockableCoinsRequest;
            fromJSON(object: any): _581.AccountUnlockableCoinsRequest;
            toJSON(message: _581.AccountUnlockableCoinsRequest): unknown;
            fromPartial(object: {
                owner?: string;
            }): _581.AccountUnlockableCoinsRequest;
        };
        AccountUnlockableCoinsResponse: {
            encode(message: _581.AccountUnlockableCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _581.AccountUnlockableCoinsResponse;
            fromJSON(object: any): _581.AccountUnlockableCoinsResponse;
            toJSON(message: _581.AccountUnlockableCoinsResponse): unknown;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _581.AccountUnlockableCoinsResponse;
        };
        AccountUnlockingCoinsRequest: {
            encode(message: _581.AccountUnlockingCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _581.AccountUnlockingCoinsRequest;
            fromJSON(object: any): _581.AccountUnlockingCoinsRequest;
            toJSON(message: _581.AccountUnlockingCoinsRequest): unknown;
            fromPartial(object: {
                owner?: string;
            }): _581.AccountUnlockingCoinsRequest;
        };
        AccountUnlockingCoinsResponse: {
            encode(message: _581.AccountUnlockingCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _581.AccountUnlockingCoinsResponse;
            fromJSON(object: any): _581.AccountUnlockingCoinsResponse;
            toJSON(message: _581.AccountUnlockingCoinsResponse): unknown;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _581.AccountUnlockingCoinsResponse;
        };
        AccountLockedCoinsRequest: {
            encode(message: _581.AccountLockedCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _581.AccountLockedCoinsRequest;
            fromJSON(object: any): _581.AccountLockedCoinsRequest;
            toJSON(message: _581.AccountLockedCoinsRequest): unknown;
            fromPartial(object: {
                owner?: string;
            }): _581.AccountLockedCoinsRequest;
        };
        AccountLockedCoinsResponse: {
            encode(message: _581.AccountLockedCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _581.AccountLockedCoinsResponse;
            fromJSON(object: any): _581.AccountLockedCoinsResponse;
            toJSON(message: _581.AccountLockedCoinsResponse): unknown;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _581.AccountLockedCoinsResponse;
        };
        AccountLockedPastTimeRequest: {
            encode(message: _581.AccountLockedPastTimeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _581.AccountLockedPastTimeRequest;
            fromJSON(object: any): _581.AccountLockedPastTimeRequest;
            toJSON(message: _581.AccountLockedPastTimeRequest): unknown;
            fromPartial(object: {
                owner?: string;
                timestamp?: {
                    seconds?: any;
                    nanos?: number;
                };
            }): _581.AccountLockedPastTimeRequest;
        };
        AccountLockedPastTimeResponse: {
            encode(message: _581.AccountLockedPastTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _581.AccountLockedPastTimeResponse;
            fromJSON(object: any): _581.AccountLockedPastTimeResponse;
            toJSON(message: _581.AccountLockedPastTimeResponse): unknown;
            fromPartial(object: {
                locks?: {
                    ID?: any;
                    owner?: string;
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    endTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
            }): _581.AccountLockedPastTimeResponse;
        };
        AccountLockedPastTimeNotUnlockingOnlyRequest: {
            encode(message: _581.AccountLockedPastTimeNotUnlockingOnlyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _581.AccountLockedPastTimeNotUnlockingOnlyRequest;
            fromJSON(object: any): _581.AccountLockedPastTimeNotUnlockingOnlyRequest;
            toJSON(message: _581.AccountLockedPastTimeNotUnlockingOnlyRequest): unknown;
            fromPartial(object: {
                owner?: string;
                timestamp?: {
                    seconds?: any;
                    nanos?: number;
                };
            }): _581.AccountLockedPastTimeNotUnlockingOnlyRequest;
        };
        AccountLockedPastTimeNotUnlockingOnlyResponse: {
            encode(message: _581.AccountLockedPastTimeNotUnlockingOnlyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _581.AccountLockedPastTimeNotUnlockingOnlyResponse;
            fromJSON(object: any): _581.AccountLockedPastTimeNotUnlockingOnlyResponse;
            toJSON(message: _581.AccountLockedPastTimeNotUnlockingOnlyResponse): unknown;
            fromPartial(object: {
                locks?: {
                    ID?: any;
                    owner?: string;
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    endTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
            }): _581.AccountLockedPastTimeNotUnlockingOnlyResponse;
        };
        AccountUnlockedBeforeTimeRequest: {
            encode(message: _581.AccountUnlockedBeforeTimeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _581.AccountUnlockedBeforeTimeRequest;
            fromJSON(object: any): _581.AccountUnlockedBeforeTimeRequest;
            toJSON(message: _581.AccountUnlockedBeforeTimeRequest): unknown;
            fromPartial(object: {
                owner?: string;
                timestamp?: {
                    seconds?: any;
                    nanos?: number;
                };
            }): _581.AccountUnlockedBeforeTimeRequest;
        };
        AccountUnlockedBeforeTimeResponse: {
            encode(message: _581.AccountUnlockedBeforeTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _581.AccountUnlockedBeforeTimeResponse;
            fromJSON(object: any): _581.AccountUnlockedBeforeTimeResponse;
            toJSON(message: _581.AccountUnlockedBeforeTimeResponse): unknown;
            fromPartial(object: {
                locks?: {
                    ID?: any;
                    owner?: string;
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    endTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
            }): _581.AccountUnlockedBeforeTimeResponse;
        };
        AccountLockedPastTimeDenomRequest: {
            encode(message: _581.AccountLockedPastTimeDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _581.AccountLockedPastTimeDenomRequest;
            fromJSON(object: any): _581.AccountLockedPastTimeDenomRequest;
            toJSON(message: _581.AccountLockedPastTimeDenomRequest): unknown;
            fromPartial(object: {
                owner?: string;
                timestamp?: {
                    seconds?: any;
                    nanos?: number;
                };
                denom?: string;
            }): _581.AccountLockedPastTimeDenomRequest;
        };
        AccountLockedPastTimeDenomResponse: {
            encode(message: _581.AccountLockedPastTimeDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _581.AccountLockedPastTimeDenomResponse;
            fromJSON(object: any): _581.AccountLockedPastTimeDenomResponse;
            toJSON(message: _581.AccountLockedPastTimeDenomResponse): unknown;
            fromPartial(object: {
                locks?: {
                    ID?: any;
                    owner?: string;
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    endTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
            }): _581.AccountLockedPastTimeDenomResponse;
        };
        LockedDenomRequest: {
            encode(message: _581.LockedDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _581.LockedDenomRequest;
            fromJSON(object: any): _581.LockedDenomRequest;
            toJSON(message: _581.LockedDenomRequest): unknown;
            fromPartial(object: {
                denom?: string;
                duration?: {
                    seconds?: any;
                    nanos?: number;
                };
            }): _581.LockedDenomRequest;
        };
        LockedDenomResponse: {
            encode(message: _581.LockedDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _581.LockedDenomResponse;
            fromJSON(object: any): _581.LockedDenomResponse;
            toJSON(message: _581.LockedDenomResponse): unknown;
            fromPartial(object: {
                amount?: string;
            }): _581.LockedDenomResponse;
        };
        LockedRequest: {
            encode(message: _581.LockedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _581.LockedRequest;
            fromJSON(object: any): _581.LockedRequest;
            toJSON(message: _581.LockedRequest): unknown;
            fromPartial(object: {
                lockId?: any;
            }): _581.LockedRequest;
        };
        LockedResponse: {
            encode(message: _581.LockedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _581.LockedResponse;
            fromJSON(object: any): _581.LockedResponse;
            toJSON(message: _581.LockedResponse): unknown;
            fromPartial(object: {
                lock?: {
                    ID?: any;
                    owner?: string;
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    endTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                };
            }): _581.LockedResponse;
        };
        SyntheticLockupsByLockupIDRequest: {
            encode(message: _581.SyntheticLockupsByLockupIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _581.SyntheticLockupsByLockupIDRequest;
            fromJSON(object: any): _581.SyntheticLockupsByLockupIDRequest;
            toJSON(message: _581.SyntheticLockupsByLockupIDRequest): unknown;
            fromPartial(object: {
                lockId?: any;
            }): _581.SyntheticLockupsByLockupIDRequest;
        };
        SyntheticLockupsByLockupIDResponse: {
            encode(message: _581.SyntheticLockupsByLockupIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _581.SyntheticLockupsByLockupIDResponse;
            fromJSON(object: any): _581.SyntheticLockupsByLockupIDResponse;
            toJSON(message: _581.SyntheticLockupsByLockupIDResponse): unknown;
            fromPartial(object: {
                syntheticLocks?: {
                    underlyingLockId?: any;
                    synthDenom?: string;
                    endTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }[];
            }): _581.SyntheticLockupsByLockupIDResponse;
        };
        AccountLockedLongerDurationRequest: {
            encode(message: _581.AccountLockedLongerDurationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _581.AccountLockedLongerDurationRequest;
            fromJSON(object: any): _581.AccountLockedLongerDurationRequest;
            toJSON(message: _581.AccountLockedLongerDurationRequest): unknown;
            fromPartial(object: {
                owner?: string;
                duration?: {
                    seconds?: any;
                    nanos?: number;
                };
            }): _581.AccountLockedLongerDurationRequest;
        };
        AccountLockedLongerDurationResponse: {
            encode(message: _581.AccountLockedLongerDurationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _581.AccountLockedLongerDurationResponse;
            fromJSON(object: any): _581.AccountLockedLongerDurationResponse;
            toJSON(message: _581.AccountLockedLongerDurationResponse): unknown;
            fromPartial(object: {
                locks?: {
                    ID?: any;
                    owner?: string;
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    endTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
            }): _581.AccountLockedLongerDurationResponse;
        };
        AccountLockedDurationRequest: {
            encode(message: _581.AccountLockedDurationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _581.AccountLockedDurationRequest;
            fromJSON(object: any): _581.AccountLockedDurationRequest;
            toJSON(message: _581.AccountLockedDurationRequest): unknown;
            fromPartial(object: {
                owner?: string;
                duration?: {
                    seconds?: any;
                    nanos?: number;
                };
            }): _581.AccountLockedDurationRequest;
        };
        AccountLockedDurationResponse: {
            encode(message: _581.AccountLockedDurationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _581.AccountLockedDurationResponse;
            fromJSON(object: any): _581.AccountLockedDurationResponse;
            toJSON(message: _581.AccountLockedDurationResponse): unknown;
            fromPartial(object: {
                locks?: {
                    ID?: any;
                    owner?: string;
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    endTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
            }): _581.AccountLockedDurationResponse;
        };
        AccountLockedLongerDurationNotUnlockingOnlyRequest: {
            encode(message: _581.AccountLockedLongerDurationNotUnlockingOnlyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _581.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            fromJSON(object: any): _581.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            toJSON(message: _581.AccountLockedLongerDurationNotUnlockingOnlyRequest): unknown;
            fromPartial(object: {
                owner?: string;
                duration?: {
                    seconds?: any;
                    nanos?: number;
                };
            }): _581.AccountLockedLongerDurationNotUnlockingOnlyRequest;
        };
        AccountLockedLongerDurationNotUnlockingOnlyResponse: {
            encode(message: _581.AccountLockedLongerDurationNotUnlockingOnlyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _581.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            fromJSON(object: any): _581.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            toJSON(message: _581.AccountLockedLongerDurationNotUnlockingOnlyResponse): unknown;
            fromPartial(object: {
                locks?: {
                    ID?: any;
                    owner?: string;
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    endTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
            }): _581.AccountLockedLongerDurationNotUnlockingOnlyResponse;
        };
        AccountLockedLongerDurationDenomRequest: {
            encode(message: _581.AccountLockedLongerDurationDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _581.AccountLockedLongerDurationDenomRequest;
            fromJSON(object: any): _581.AccountLockedLongerDurationDenomRequest;
            toJSON(message: _581.AccountLockedLongerDurationDenomRequest): unknown;
            fromPartial(object: {
                owner?: string;
                duration?: {
                    seconds?: any;
                    nanos?: number;
                };
                denom?: string;
            }): _581.AccountLockedLongerDurationDenomRequest;
        };
        AccountLockedLongerDurationDenomResponse: {
            encode(message: _581.AccountLockedLongerDurationDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _581.AccountLockedLongerDurationDenomResponse;
            fromJSON(object: any): _581.AccountLockedLongerDurationDenomResponse;
            toJSON(message: _581.AccountLockedLongerDurationDenomResponse): unknown;
            fromPartial(object: {
                locks?: {
                    ID?: any;
                    owner?: string;
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    endTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
            }): _581.AccountLockedLongerDurationDenomResponse;
        };
        lockQueryTypeFromJSON(object: any): _580.LockQueryType;
        lockQueryTypeToJSON(object: _580.LockQueryType): string;
        LockQueryType: typeof _580.LockQueryType;
        PeriodLock: {
            encode(message: _580.PeriodLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _580.PeriodLock;
            fromJSON(object: any): _580.PeriodLock;
            toJSON(message: _580.PeriodLock): unknown;
            fromPartial(object: {
                ID?: any;
                owner?: string;
                duration?: {
                    seconds?: any;
                    nanos?: number;
                };
                endTime?: {
                    seconds?: any;
                    nanos?: number;
                };
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _580.PeriodLock;
        };
        QueryCondition: {
            encode(message: _580.QueryCondition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _580.QueryCondition;
            fromJSON(object: any): _580.QueryCondition;
            toJSON(message: _580.QueryCondition): unknown;
            fromPartial(object: {
                lockQueryType?: _580.LockQueryType;
                denom?: string;
                duration?: {
                    seconds?: any;
                    nanos?: number;
                };
                timestamp?: {
                    seconds?: any;
                    nanos?: number;
                };
            }): _580.QueryCondition;
        };
        SyntheticLock: {
            encode(message: _580.SyntheticLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _580.SyntheticLock;
            fromJSON(object: any): _580.SyntheticLock;
            toJSON(message: _580.SyntheticLock): unknown;
            fromPartial(object: {
                underlyingLockId?: any;
                synthDenom?: string;
                endTime?: {
                    seconds?: any;
                    nanos?: number;
                };
                duration?: {
                    seconds?: any;
                    nanos?: number;
                };
            }): _580.SyntheticLock;
        };
        GenesisState: {
            encode(message: _579.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _579.GenesisState;
            fromJSON(object: any): _579.GenesisState;
            toJSON(message: _579.GenesisState): unknown;
            fromPartial(object: {
                lastLockId?: any;
                locks?: {
                    ID?: any;
                    owner?: string;
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    endTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
                syntheticLocks?: {
                    underlyingLockId?: any;
                    synthDenom?: string;
                    endTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }[];
            }): _579.GenesisState;
        };
    };
    namespace mint {
        const v1beta1: {
            QueryParamsRequest: {
                encode(_: _585.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _585.QueryParamsRequest;
                fromJSON(_: any): _585.QueryParamsRequest;
                toJSON(_: _585.QueryParamsRequest): unknown;
                fromPartial(_: {}): _585.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _585.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _585.QueryParamsResponse;
                fromJSON(object: any): _585.QueryParamsResponse;
                toJSON(message: _585.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        mintDenom?: string;
                        genesisEpochProvisions?: string;
                        epochIdentifier?: string;
                        reductionPeriodInEpochs?: any;
                        reductionFactor?: string;
                        distributionProportions?: {
                            staking?: string;
                            poolIncentives?: string;
                            developerRewards?: string;
                            communityPool?: string;
                        };
                        weightedDeveloperRewardsReceivers?: {
                            address?: string;
                            weight?: string;
                        }[];
                        mintingRewardsDistributionStartEpoch?: any;
                    };
                }): _585.QueryParamsResponse;
            };
            QueryEpochProvisionsRequest: {
                encode(_: _585.QueryEpochProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _585.QueryEpochProvisionsRequest;
                fromJSON(_: any): _585.QueryEpochProvisionsRequest;
                toJSON(_: _585.QueryEpochProvisionsRequest): unknown;
                fromPartial(_: {}): _585.QueryEpochProvisionsRequest;
            };
            QueryEpochProvisionsResponse: {
                encode(message: _585.QueryEpochProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _585.QueryEpochProvisionsResponse;
                fromJSON(object: any): _585.QueryEpochProvisionsResponse;
                toJSON(message: _585.QueryEpochProvisionsResponse): unknown;
                fromPartial(object: {
                    epochProvisions?: Uint8Array;
                }): _585.QueryEpochProvisionsResponse;
            };
            Minter: {
                encode(message: _584.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _584.Minter;
                fromJSON(object: any): _584.Minter;
                toJSON(message: _584.Minter): unknown;
                fromPartial(object: {
                    epochProvisions?: string;
                }): _584.Minter;
            };
            WeightedAddress: {
                encode(message: _584.WeightedAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _584.WeightedAddress;
                fromJSON(object: any): _584.WeightedAddress;
                toJSON(message: _584.WeightedAddress): unknown;
                fromPartial(object: {
                    address?: string;
                    weight?: string;
                }): _584.WeightedAddress;
            };
            DistributionProportions: {
                encode(message: _584.DistributionProportions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _584.DistributionProportions;
                fromJSON(object: any): _584.DistributionProportions;
                toJSON(message: _584.DistributionProportions): unknown;
                fromPartial(object: {
                    staking?: string;
                    poolIncentives?: string;
                    developerRewards?: string;
                    communityPool?: string;
                }): _584.DistributionProportions;
            };
            Params: {
                encode(message: _584.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _584.Params;
                fromJSON(object: any): _584.Params;
                toJSON(message: _584.Params): unknown;
                fromPartial(object: {
                    mintDenom?: string;
                    genesisEpochProvisions?: string;
                    epochIdentifier?: string;
                    reductionPeriodInEpochs?: any;
                    reductionFactor?: string;
                    distributionProportions?: {
                        staking?: string;
                        poolIncentives?: string;
                        developerRewards?: string;
                        communityPool?: string;
                    };
                    weightedDeveloperRewardsReceivers?: {
                        address?: string;
                        weight?: string;
                    }[];
                    mintingRewardsDistributionStartEpoch?: any;
                }): _584.Params;
            };
            GenesisState: {
                encode(message: _583.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _583.GenesisState;
                fromJSON(object: any): _583.GenesisState;
                toJSON(message: _583.GenesisState): unknown;
                fromPartial(object: {
                    minter?: {
                        epochProvisions?: string;
                    };
                    params?: {
                        mintDenom?: string;
                        genesisEpochProvisions?: string;
                        epochIdentifier?: string;
                        reductionPeriodInEpochs?: any;
                        reductionFactor?: string;
                        distributionProportions?: {
                            staking?: string;
                            poolIncentives?: string;
                            developerRewards?: string;
                            communityPool?: string;
                        };
                        weightedDeveloperRewardsReceivers?: {
                            address?: string;
                            weight?: string;
                        }[];
                        mintingRewardsDistributionStartEpoch?: any;
                    };
                    halvenStartedEpoch?: any;
                }): _583.GenesisState;
            };
        };
    }
    namespace poolincentives {
        const v1beta1: {
            QueryGaugeIdsRequest: {
                encode(message: _589.QueryGaugeIdsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _589.QueryGaugeIdsRequest;
                fromJSON(object: any): _589.QueryGaugeIdsRequest;
                toJSON(message: _589.QueryGaugeIdsRequest): unknown;
                fromPartial(object: {
                    poolId?: any;
                }): _589.QueryGaugeIdsRequest;
            };
            QueryGaugeIdsResponse: {
                encode(message: _589.QueryGaugeIdsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _589.QueryGaugeIdsResponse;
                fromJSON(object: any): _589.QueryGaugeIdsResponse;
                toJSON(message: _589.QueryGaugeIdsResponse): unknown;
                fromPartial(object: {
                    gaugeIdsWithDuration?: {
                        gaugeId?: any;
                        duration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                }): _589.QueryGaugeIdsResponse;
            };
            QueryGaugeIdsResponse_GaugeIdWithDuration: {
                encode(message: _589.QueryGaugeIdsResponse_GaugeIdWithDuration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _589.QueryGaugeIdsResponse_GaugeIdWithDuration;
                fromJSON(object: any): _589.QueryGaugeIdsResponse_GaugeIdWithDuration;
                toJSON(message: _589.QueryGaugeIdsResponse_GaugeIdWithDuration): unknown;
                fromPartial(object: {
                    gaugeId?: any;
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _589.QueryGaugeIdsResponse_GaugeIdWithDuration;
            };
            QueryDistrInfoRequest: {
                encode(_: _589.QueryDistrInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _589.QueryDistrInfoRequest;
                fromJSON(_: any): _589.QueryDistrInfoRequest;
                toJSON(_: _589.QueryDistrInfoRequest): unknown;
                fromPartial(_: {}): _589.QueryDistrInfoRequest;
            };
            QueryDistrInfoResponse: {
                encode(message: _589.QueryDistrInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _589.QueryDistrInfoResponse;
                fromJSON(object: any): _589.QueryDistrInfoResponse;
                toJSON(message: _589.QueryDistrInfoResponse): unknown;
                fromPartial(object: {
                    distrInfo?: {
                        totalWeight?: string;
                        records?: {
                            gaugeId?: any;
                            weight?: string;
                        }[];
                    };
                }): _589.QueryDistrInfoResponse;
            };
            QueryParamsRequest: {
                encode(_: _589.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _589.QueryParamsRequest;
                fromJSON(_: any): _589.QueryParamsRequest;
                toJSON(_: _589.QueryParamsRequest): unknown;
                fromPartial(_: {}): _589.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _589.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _589.QueryParamsResponse;
                fromJSON(object: any): _589.QueryParamsResponse;
                toJSON(message: _589.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        mintedDenom?: string;
                    };
                }): _589.QueryParamsResponse;
            };
            QueryLockableDurationsRequest: {
                encode(_: _589.QueryLockableDurationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _589.QueryLockableDurationsRequest;
                fromJSON(_: any): _589.QueryLockableDurationsRequest;
                toJSON(_: _589.QueryLockableDurationsRequest): unknown;
                fromPartial(_: {}): _589.QueryLockableDurationsRequest;
            };
            QueryLockableDurationsResponse: {
                encode(message: _589.QueryLockableDurationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _589.QueryLockableDurationsResponse;
                fromJSON(object: any): _589.QueryLockableDurationsResponse;
                toJSON(message: _589.QueryLockableDurationsResponse): unknown;
                fromPartial(object: {
                    lockableDurations?: {
                        seconds?: any;
                        nanos?: number;
                    }[];
                }): _589.QueryLockableDurationsResponse;
            };
            QueryIncentivizedPoolsRequest: {
                encode(_: _589.QueryIncentivizedPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _589.QueryIncentivizedPoolsRequest;
                fromJSON(_: any): _589.QueryIncentivizedPoolsRequest;
                toJSON(_: _589.QueryIncentivizedPoolsRequest): unknown;
                fromPartial(_: {}): _589.QueryIncentivizedPoolsRequest;
            };
            IncentivizedPool: {
                encode(message: _589.IncentivizedPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _589.IncentivizedPool;
                fromJSON(object: any): _589.IncentivizedPool;
                toJSON(message: _589.IncentivizedPool): unknown;
                fromPartial(object: {
                    poolId?: any;
                    lockableDuration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    gaugeId?: any;
                }): _589.IncentivizedPool;
            };
            QueryIncentivizedPoolsResponse: {
                encode(message: _589.QueryIncentivizedPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _589.QueryIncentivizedPoolsResponse;
                fromJSON(object: any): _589.QueryIncentivizedPoolsResponse;
                toJSON(message: _589.QueryIncentivizedPoolsResponse): unknown;
                fromPartial(object: {
                    incentivizedPools?: {
                        poolId?: any;
                        lockableDuration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        gaugeId?: any;
                    }[];
                }): _589.QueryIncentivizedPoolsResponse;
            };
            QueryExternalIncentiveGaugesRequest: {
                encode(_: _589.QueryExternalIncentiveGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _589.QueryExternalIncentiveGaugesRequest;
                fromJSON(_: any): _589.QueryExternalIncentiveGaugesRequest;
                toJSON(_: _589.QueryExternalIncentiveGaugesRequest): unknown;
                fromPartial(_: {}): _589.QueryExternalIncentiveGaugesRequest;
            };
            QueryExternalIncentiveGaugesResponse: {
                encode(message: _589.QueryExternalIncentiveGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _589.QueryExternalIncentiveGaugesResponse;
                fromJSON(object: any): _589.QueryExternalIncentiveGaugesResponse;
                toJSON(message: _589.QueryExternalIncentiveGaugesResponse): unknown;
                fromPartial(object: {
                    data?: {
                        id?: any;
                        isPerpetual?: boolean;
                        distributeTo?: {
                            lockQueryType?: _580.LockQueryType;
                            denom?: string;
                            duration?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            timestamp?: {
                                seconds?: any;
                                nanos?: number;
                            };
                        };
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        startTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        numEpochsPaidOver?: any;
                        filledEpochs?: any;
                        distributedCoins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _589.QueryExternalIncentiveGaugesResponse;
            };
            Params: {
                encode(message: _588.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _588.Params;
                fromJSON(object: any): _588.Params;
                toJSON(message: _588.Params): unknown;
                fromPartial(object: {
                    mintedDenom?: string;
                }): _588.Params;
            };
            LockableDurationsInfo: {
                encode(message: _588.LockableDurationsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _588.LockableDurationsInfo;
                fromJSON(object: any): _588.LockableDurationsInfo;
                toJSON(message: _588.LockableDurationsInfo): unknown;
                fromPartial(object: {
                    lockableDurations?: {
                        seconds?: any;
                        nanos?: number;
                    }[];
                }): _588.LockableDurationsInfo;
            };
            DistrInfo: {
                encode(message: _588.DistrInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _588.DistrInfo;
                fromJSON(object: any): _588.DistrInfo;
                toJSON(message: _588.DistrInfo): unknown;
                fromPartial(object: {
                    totalWeight?: string;
                    records?: {
                        gaugeId?: any;
                        weight?: string;
                    }[];
                }): _588.DistrInfo;
            };
            DistrRecord: {
                encode(message: _588.DistrRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _588.DistrRecord;
                fromJSON(object: any): _588.DistrRecord;
                toJSON(message: _588.DistrRecord): unknown;
                fromPartial(object: {
                    gaugeId?: any;
                    weight?: string;
                }): _588.DistrRecord;
            };
            ReplacePoolIncentivesProposal: {
                encode(message: _587.ReplacePoolIncentivesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _587.ReplacePoolIncentivesProposal;
                fromJSON(object: any): _587.ReplacePoolIncentivesProposal;
                toJSON(message: _587.ReplacePoolIncentivesProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    records?: {
                        gaugeId?: any;
                        weight?: string;
                    }[];
                }): _587.ReplacePoolIncentivesProposal;
            };
            UpdatePoolIncentivesProposal: {
                encode(message: _587.UpdatePoolIncentivesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _587.UpdatePoolIncentivesProposal;
                fromJSON(object: any): _587.UpdatePoolIncentivesProposal;
                toJSON(message: _587.UpdatePoolIncentivesProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    records?: {
                        gaugeId?: any;
                        weight?: string;
                    }[];
                }): _587.UpdatePoolIncentivesProposal;
            };
            GenesisState: {
                encode(message: _586.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _586.GenesisState;
                fromJSON(object: any): _586.GenesisState;
                toJSON(message: _586.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        mintedDenom?: string;
                    };
                    lockableDurations?: {
                        seconds?: any;
                        nanos?: number;
                    }[];
                    distrInfo?: {
                        totalWeight?: string;
                        records?: {
                            gaugeId?: any;
                            weight?: string;
                        }[];
                    };
                }): _586.GenesisState;
            };
        };
    }
    namespace store {
        const v1beta1: {
            Node: {
                encode(message: _590.Node, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _590.Node;
                fromJSON(object: any): _590.Node;
                toJSON(message: _590.Node): unknown;
                fromPartial(object: {
                    children?: {
                        index?: Uint8Array;
                        accumulation?: string;
                    }[];
                }): _590.Node;
            };
            Child: {
                encode(message: _590.Child, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _590.Child;
                fromJSON(object: any): _590.Child;
                toJSON(message: _590.Child): unknown;
                fromPartial(object: {
                    index?: Uint8Array;
                    accumulation?: string;
                }): _590.Child;
            };
            Leaf: {
                encode(message: _590.Leaf, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _590.Leaf;
                fromJSON(object: any): _590.Leaf;
                toJSON(message: _590.Leaf): unknown;
                fromPartial(object: {
                    leaf?: {
                        index?: Uint8Array;
                        accumulation?: string;
                    };
                }): _590.Leaf;
            };
        };
    }
    const superfluid: {
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                superfluidDelegate(value: _595.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                superfluidUndelegate(value: _595.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                superfluidUnbondLock(value: _595.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                lockAndSuperfluidDelegate(value: _595.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                unPoolWhitelistedPool(value: _595.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                superfluidDelegate(value: _595.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: _595.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: _595.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: _595.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: _595.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: _595.MsgSuperfluidUnbondLock;
                };
                lockAndSuperfluidDelegate(value: _595.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _595.MsgLockAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: _595.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: _595.MsgUnPoolWhitelistedPool;
                };
            };
            toJSON: {
                superfluidDelegate(value: _595.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: unknown;
                };
                superfluidUndelegate(value: _595.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: unknown;
                };
                superfluidUnbondLock(value: _595.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: unknown;
                };
                lockAndSuperfluidDelegate(value: _595.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: unknown;
                };
                unPoolWhitelistedPool(value: _595.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                superfluidDelegate(value: any): {
                    typeUrl: string;
                    value: _595.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: any): {
                    typeUrl: string;
                    value: _595.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: any): {
                    typeUrl: string;
                    value: _595.MsgSuperfluidUnbondLock;
                };
                lockAndSuperfluidDelegate(value: any): {
                    typeUrl: string;
                    value: _595.MsgLockAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: any): {
                    typeUrl: string;
                    value: _595.MsgUnPoolWhitelistedPool;
                };
            };
            fromPartial: {
                superfluidDelegate(value: _595.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: _595.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: _595.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: _595.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: _595.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: _595.MsgSuperfluidUnbondLock;
                };
                lockAndSuperfluidDelegate(value: _595.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _595.MsgLockAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: _595.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: _595.MsgUnPoolWhitelistedPool;
                };
            };
        };
        AminoConverter: {
            "/osmosis.superfluid.MsgSuperfluidDelegate": {
                aminoType: string;
                toAmino: ({ sender, lockId, valAddr }: _595.MsgSuperfluidDelegate) => {
                    sender: string;
                    lock_id: string;
                    val_addr: string;
                };
                fromAmino: ({ sender, lock_id, val_addr }: {
                    sender: string;
                    lock_id: string;
                    val_addr: string;
                }) => _595.MsgSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUndelegate": {
                aminoType: string;
                toAmino: ({ sender, lockId }: _595.MsgSuperfluidUndelegate) => {
                    sender: string;
                    lock_id: string;
                };
                fromAmino: ({ sender, lock_id }: {
                    sender: string;
                    lock_id: string;
                }) => _595.MsgSuperfluidUndelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUnbondLock": {
                aminoType: string;
                toAmino: ({ sender, lockId }: _595.MsgSuperfluidUnbondLock) => {
                    sender: string;
                    lock_id: string;
                };
                fromAmino: ({ sender, lock_id }: {
                    sender: string;
                    lock_id: string;
                }) => _595.MsgSuperfluidUnbondLock;
            };
            "/osmosis.superfluid.MsgLockAndSuperfluidDelegate": {
                aminoType: string;
                toAmino: ({ sender, coins, valAddr }: _595.MsgLockAndSuperfluidDelegate) => {
                    sender: string;
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                    val_addr: string;
                };
                fromAmino: ({ sender, coins, val_addr }: {
                    sender: string;
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                    val_addr: string;
                }) => _595.MsgLockAndSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgUnPoolWhitelistedPool": {
                aminoType: string;
                toAmino: ({ sender, poolId }: _595.MsgUnPoolWhitelistedPool) => {
                    sender: string;
                    pool_id: string;
                };
                fromAmino: ({ sender, pool_id }: {
                    sender: string;
                    pool_id: string;
                }) => _595.MsgUnPoolWhitelistedPool;
            };
        };
        MsgSuperfluidDelegate: {
            encode(message: _595.MsgSuperfluidDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _595.MsgSuperfluidDelegate;
            fromJSON(object: any): _595.MsgSuperfluidDelegate;
            toJSON(message: _595.MsgSuperfluidDelegate): unknown;
            fromPartial(object: {
                sender?: string;
                lockId?: any;
                valAddr?: string;
            }): _595.MsgSuperfluidDelegate;
        };
        MsgSuperfluidDelegateResponse: {
            encode(_: _595.MsgSuperfluidDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _595.MsgSuperfluidDelegateResponse;
            fromJSON(_: any): _595.MsgSuperfluidDelegateResponse;
            toJSON(_: _595.MsgSuperfluidDelegateResponse): unknown;
            fromPartial(_: {}): _595.MsgSuperfluidDelegateResponse;
        };
        MsgSuperfluidUndelegate: {
            encode(message: _595.MsgSuperfluidUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _595.MsgSuperfluidUndelegate;
            fromJSON(object: any): _595.MsgSuperfluidUndelegate;
            toJSON(message: _595.MsgSuperfluidUndelegate): unknown;
            fromPartial(object: {
                sender?: string;
                lockId?: any;
            }): _595.MsgSuperfluidUndelegate;
        };
        MsgSuperfluidUndelegateResponse: {
            encode(_: _595.MsgSuperfluidUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _595.MsgSuperfluidUndelegateResponse;
            fromJSON(_: any): _595.MsgSuperfluidUndelegateResponse;
            toJSON(_: _595.MsgSuperfluidUndelegateResponse): unknown;
            fromPartial(_: {}): _595.MsgSuperfluidUndelegateResponse;
        };
        MsgSuperfluidUnbondLock: {
            encode(message: _595.MsgSuperfluidUnbondLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _595.MsgSuperfluidUnbondLock;
            fromJSON(object: any): _595.MsgSuperfluidUnbondLock;
            toJSON(message: _595.MsgSuperfluidUnbondLock): unknown;
            fromPartial(object: {
                sender?: string;
                lockId?: any;
            }): _595.MsgSuperfluidUnbondLock;
        };
        MsgSuperfluidUnbondLockResponse: {
            encode(_: _595.MsgSuperfluidUnbondLockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _595.MsgSuperfluidUnbondLockResponse;
            fromJSON(_: any): _595.MsgSuperfluidUnbondLockResponse;
            toJSON(_: _595.MsgSuperfluidUnbondLockResponse): unknown;
            fromPartial(_: {}): _595.MsgSuperfluidUnbondLockResponse;
        };
        MsgLockAndSuperfluidDelegate: {
            encode(message: _595.MsgLockAndSuperfluidDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _595.MsgLockAndSuperfluidDelegate;
            fromJSON(object: any): _595.MsgLockAndSuperfluidDelegate;
            toJSON(message: _595.MsgLockAndSuperfluidDelegate): unknown;
            fromPartial(object: {
                sender?: string;
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
                valAddr?: string;
            }): _595.MsgLockAndSuperfluidDelegate;
        };
        MsgLockAndSuperfluidDelegateResponse: {
            encode(message: _595.MsgLockAndSuperfluidDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _595.MsgLockAndSuperfluidDelegateResponse;
            fromJSON(object: any): _595.MsgLockAndSuperfluidDelegateResponse;
            toJSON(message: _595.MsgLockAndSuperfluidDelegateResponse): unknown;
            fromPartial(object: {
                ID?: any;
            }): _595.MsgLockAndSuperfluidDelegateResponse;
        };
        MsgUnPoolWhitelistedPool: {
            encode(message: _595.MsgUnPoolWhitelistedPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _595.MsgUnPoolWhitelistedPool;
            fromJSON(object: any): _595.MsgUnPoolWhitelistedPool;
            toJSON(message: _595.MsgUnPoolWhitelistedPool): unknown;
            fromPartial(object: {
                sender?: string;
                poolId?: any;
            }): _595.MsgUnPoolWhitelistedPool;
        };
        MsgUnPoolWhitelistedPoolResponse: {
            encode(message: _595.MsgUnPoolWhitelistedPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _595.MsgUnPoolWhitelistedPoolResponse;
            fromJSON(object: any): _595.MsgUnPoolWhitelistedPoolResponse;
            toJSON(message: _595.MsgUnPoolWhitelistedPoolResponse): unknown;
            fromPartial(object: {
                exitedLockIds?: any[];
            }): _595.MsgUnPoolWhitelistedPoolResponse;
        };
        superfluidAssetTypeFromJSON(object: any): _594.SuperfluidAssetType;
        superfluidAssetTypeToJSON(object: _594.SuperfluidAssetType): string;
        SuperfluidAssetType: typeof _594.SuperfluidAssetType;
        SuperfluidAsset: {
            encode(message: _594.SuperfluidAsset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _594.SuperfluidAsset;
            fromJSON(object: any): _594.SuperfluidAsset;
            toJSON(message: _594.SuperfluidAsset): unknown;
            fromPartial(object: {
                denom?: string;
                assetType?: _594.SuperfluidAssetType;
            }): _594.SuperfluidAsset;
        };
        SuperfluidIntermediaryAccount: {
            encode(message: _594.SuperfluidIntermediaryAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _594.SuperfluidIntermediaryAccount;
            fromJSON(object: any): _594.SuperfluidIntermediaryAccount;
            toJSON(message: _594.SuperfluidIntermediaryAccount): unknown;
            fromPartial(object: {
                denom?: string;
                valAddr?: string;
                gaugeId?: any;
            }): _594.SuperfluidIntermediaryAccount;
        };
        OsmoEquivalentMultiplierRecord: {
            encode(message: _594.OsmoEquivalentMultiplierRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _594.OsmoEquivalentMultiplierRecord;
            fromJSON(object: any): _594.OsmoEquivalentMultiplierRecord;
            toJSON(message: _594.OsmoEquivalentMultiplierRecord): unknown;
            fromPartial(object: {
                epochNumber?: any;
                denom?: string;
                multiplier?: string;
            }): _594.OsmoEquivalentMultiplierRecord;
        };
        SuperfluidDelegationRecord: {
            encode(message: _594.SuperfluidDelegationRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _594.SuperfluidDelegationRecord;
            fromJSON(object: any): _594.SuperfluidDelegationRecord;
            toJSON(message: _594.SuperfluidDelegationRecord): unknown;
            fromPartial(object: {
                delegatorAddress?: string;
                validatorAddress?: string;
                delegationAmount?: {
                    denom?: string;
                    amount?: string;
                };
                equivalentStakedAmount?: {
                    denom?: string;
                    amount?: string;
                };
            }): _594.SuperfluidDelegationRecord;
        };
        LockIdIntermediaryAccountConnection: {
            encode(message: _594.LockIdIntermediaryAccountConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _594.LockIdIntermediaryAccountConnection;
            fromJSON(object: any): _594.LockIdIntermediaryAccountConnection;
            toJSON(message: _594.LockIdIntermediaryAccountConnection): unknown;
            fromPartial(object: {
                lockId?: any;
                intermediaryAccount?: string;
            }): _594.LockIdIntermediaryAccountConnection;
        };
        UnpoolWhitelistedPools: {
            encode(message: _594.UnpoolWhitelistedPools, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _594.UnpoolWhitelistedPools;
            fromJSON(object: any): _594.UnpoolWhitelistedPools;
            toJSON(message: _594.UnpoolWhitelistedPools): unknown;
            fromPartial(object: {
                ids?: any[];
            }): _594.UnpoolWhitelistedPools;
        };
        QueryParamsRequest: {
            encode(_: _593.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _593.QueryParamsRequest;
            fromJSON(_: any): _593.QueryParamsRequest;
            toJSON(_: _593.QueryParamsRequest): unknown;
            fromPartial(_: {}): _593.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _593.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _593.QueryParamsResponse;
            fromJSON(object: any): _593.QueryParamsResponse;
            toJSON(message: _593.QueryParamsResponse): unknown;
            fromPartial(object: {
                params?: {
                    minimumRiskFactor?: string;
                };
            }): _593.QueryParamsResponse;
        };
        AssetTypeRequest: {
            encode(message: _593.AssetTypeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _593.AssetTypeRequest;
            fromJSON(object: any): _593.AssetTypeRequest;
            toJSON(message: _593.AssetTypeRequest): unknown;
            fromPartial(object: {
                denom?: string;
            }): _593.AssetTypeRequest;
        };
        AssetTypeResponse: {
            encode(message: _593.AssetTypeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _593.AssetTypeResponse;
            fromJSON(object: any): _593.AssetTypeResponse;
            toJSON(message: _593.AssetTypeResponse): unknown;
            fromPartial(object: {
                assetType?: _594.SuperfluidAssetType;
            }): _593.AssetTypeResponse;
        };
        AllAssetsRequest: {
            encode(_: _593.AllAssetsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _593.AllAssetsRequest;
            fromJSON(_: any): _593.AllAssetsRequest;
            toJSON(_: _593.AllAssetsRequest): unknown;
            fromPartial(_: {}): _593.AllAssetsRequest;
        };
        AllAssetsResponse: {
            encode(message: _593.AllAssetsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _593.AllAssetsResponse;
            fromJSON(object: any): _593.AllAssetsResponse;
            toJSON(message: _593.AllAssetsResponse): unknown;
            fromPartial(object: {
                assets?: {
                    denom?: string;
                    assetType?: _594.SuperfluidAssetType;
                }[];
            }): _593.AllAssetsResponse;
        };
        AssetMultiplierRequest: {
            encode(message: _593.AssetMultiplierRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _593.AssetMultiplierRequest;
            fromJSON(object: any): _593.AssetMultiplierRequest;
            toJSON(message: _593.AssetMultiplierRequest): unknown;
            fromPartial(object: {
                denom?: string;
            }): _593.AssetMultiplierRequest;
        };
        AssetMultiplierResponse: {
            encode(message: _593.AssetMultiplierResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _593.AssetMultiplierResponse;
            fromJSON(object: any): _593.AssetMultiplierResponse;
            toJSON(message: _593.AssetMultiplierResponse): unknown;
            fromPartial(object: {
                osmoEquivalentMultiplier?: {
                    epochNumber?: any;
                    denom?: string;
                    multiplier?: string;
                };
            }): _593.AssetMultiplierResponse;
        };
        SuperfluidIntermediaryAccountInfo: {
            encode(message: _593.SuperfluidIntermediaryAccountInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _593.SuperfluidIntermediaryAccountInfo;
            fromJSON(object: any): _593.SuperfluidIntermediaryAccountInfo;
            toJSON(message: _593.SuperfluidIntermediaryAccountInfo): unknown;
            fromPartial(object: {
                denom?: string;
                valAddr?: string;
                gaugeId?: any;
                address?: string;
            }): _593.SuperfluidIntermediaryAccountInfo;
        };
        AllIntermediaryAccountsRequest: {
            encode(message: _593.AllIntermediaryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _593.AllIntermediaryAccountsRequest;
            fromJSON(object: any): _593.AllIntermediaryAccountsRequest;
            toJSON(message: _593.AllIntermediaryAccountsRequest): unknown;
            fromPartial(object: {
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _593.AllIntermediaryAccountsRequest;
        };
        AllIntermediaryAccountsResponse: {
            encode(message: _593.AllIntermediaryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _593.AllIntermediaryAccountsResponse;
            fromJSON(object: any): _593.AllIntermediaryAccountsResponse;
            toJSON(message: _593.AllIntermediaryAccountsResponse): unknown;
            fromPartial(object: {
                accounts?: {
                    denom?: string;
                    valAddr?: string;
                    gaugeId?: any;
                    address?: string;
                }[];
                pagination?: {
                    nextKey?: Uint8Array;
                    total?: any;
                };
            }): _593.AllIntermediaryAccountsResponse;
        };
        ConnectedIntermediaryAccountRequest: {
            encode(message: _593.ConnectedIntermediaryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _593.ConnectedIntermediaryAccountRequest;
            fromJSON(object: any): _593.ConnectedIntermediaryAccountRequest;
            toJSON(message: _593.ConnectedIntermediaryAccountRequest): unknown;
            fromPartial(object: {
                lockId?: any;
            }): _593.ConnectedIntermediaryAccountRequest;
        };
        ConnectedIntermediaryAccountResponse: {
            encode(message: _593.ConnectedIntermediaryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _593.ConnectedIntermediaryAccountResponse;
            fromJSON(object: any): _593.ConnectedIntermediaryAccountResponse;
            toJSON(message: _593.ConnectedIntermediaryAccountResponse): unknown;
            fromPartial(object: {
                account?: {
                    denom?: string;
                    valAddr?: string;
                    gaugeId?: any;
                    address?: string;
                };
            }): _593.ConnectedIntermediaryAccountResponse;
        };
        TotalSuperfluidDelegationsRequest: {
            encode(_: _593.TotalSuperfluidDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _593.TotalSuperfluidDelegationsRequest;
            fromJSON(_: any): _593.TotalSuperfluidDelegationsRequest;
            toJSON(_: _593.TotalSuperfluidDelegationsRequest): unknown;
            fromPartial(_: {}): _593.TotalSuperfluidDelegationsRequest;
        };
        TotalSuperfluidDelegationsResponse: {
            encode(message: _593.TotalSuperfluidDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _593.TotalSuperfluidDelegationsResponse;
            fromJSON(object: any): _593.TotalSuperfluidDelegationsResponse;
            toJSON(message: _593.TotalSuperfluidDelegationsResponse): unknown;
            fromPartial(object: {
                totalDelegations?: string;
            }): _593.TotalSuperfluidDelegationsResponse;
        };
        SuperfluidDelegationAmountRequest: {
            encode(message: _593.SuperfluidDelegationAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _593.SuperfluidDelegationAmountRequest;
            fromJSON(object: any): _593.SuperfluidDelegationAmountRequest;
            toJSON(message: _593.SuperfluidDelegationAmountRequest): unknown;
            fromPartial(object: {
                delegatorAddress?: string;
                validatorAddress?: string;
                denom?: string;
            }): _593.SuperfluidDelegationAmountRequest;
        };
        SuperfluidDelegationAmountResponse: {
            encode(message: _593.SuperfluidDelegationAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _593.SuperfluidDelegationAmountResponse;
            fromJSON(object: any): _593.SuperfluidDelegationAmountResponse;
            toJSON(message: _593.SuperfluidDelegationAmountResponse): unknown;
            fromPartial(object: {
                amount?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _593.SuperfluidDelegationAmountResponse;
        };
        SuperfluidDelegationsByDelegatorRequest: {
            encode(message: _593.SuperfluidDelegationsByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _593.SuperfluidDelegationsByDelegatorRequest;
            fromJSON(object: any): _593.SuperfluidDelegationsByDelegatorRequest;
            toJSON(message: _593.SuperfluidDelegationsByDelegatorRequest): unknown;
            fromPartial(object: {
                delegatorAddress?: string;
            }): _593.SuperfluidDelegationsByDelegatorRequest;
        };
        SuperfluidDelegationsByDelegatorResponse: {
            encode(message: _593.SuperfluidDelegationsByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _593.SuperfluidDelegationsByDelegatorResponse;
            fromJSON(object: any): _593.SuperfluidDelegationsByDelegatorResponse;
            toJSON(message: _593.SuperfluidDelegationsByDelegatorResponse): unknown;
            fromPartial(object: {
                superfluidDelegationRecords?: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    delegationAmount?: {
                        denom?: string;
                        amount?: string;
                    };
                    equivalentStakedAmount?: {
                        denom?: string;
                        amount?: string;
                    };
                }[];
                totalDelegatedCoins?: {
                    denom?: string;
                    amount?: string;
                }[];
                totalEquivalentStakedAmount?: {
                    denom?: string;
                    amount?: string;
                };
            }): _593.SuperfluidDelegationsByDelegatorResponse;
        };
        SuperfluidUndelegationsByDelegatorRequest: {
            encode(message: _593.SuperfluidUndelegationsByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _593.SuperfluidUndelegationsByDelegatorRequest;
            fromJSON(object: any): _593.SuperfluidUndelegationsByDelegatorRequest;
            toJSON(message: _593.SuperfluidUndelegationsByDelegatorRequest): unknown;
            fromPartial(object: {
                delegatorAddress?: string;
                denom?: string;
            }): _593.SuperfluidUndelegationsByDelegatorRequest;
        };
        SuperfluidUndelegationsByDelegatorResponse: {
            encode(message: _593.SuperfluidUndelegationsByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _593.SuperfluidUndelegationsByDelegatorResponse;
            fromJSON(object: any): _593.SuperfluidUndelegationsByDelegatorResponse;
            toJSON(message: _593.SuperfluidUndelegationsByDelegatorResponse): unknown;
            fromPartial(object: {
                superfluidDelegationRecords?: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    delegationAmount?: {
                        denom?: string;
                        amount?: string;
                    };
                    equivalentStakedAmount?: {
                        denom?: string;
                        amount?: string;
                    };
                }[];
                totalUndelegatedCoins?: {
                    denom?: string;
                    amount?: string;
                }[];
                syntheticLocks?: {
                    underlyingLockId?: any;
                    synthDenom?: string;
                    endTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }[];
            }): _593.SuperfluidUndelegationsByDelegatorResponse;
        };
        SuperfluidDelegationsByValidatorDenomRequest: {
            encode(message: _593.SuperfluidDelegationsByValidatorDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _593.SuperfluidDelegationsByValidatorDenomRequest;
            fromJSON(object: any): _593.SuperfluidDelegationsByValidatorDenomRequest;
            toJSON(message: _593.SuperfluidDelegationsByValidatorDenomRequest): unknown;
            fromPartial(object: {
                validatorAddress?: string;
                denom?: string;
            }): _593.SuperfluidDelegationsByValidatorDenomRequest;
        };
        SuperfluidDelegationsByValidatorDenomResponse: {
            encode(message: _593.SuperfluidDelegationsByValidatorDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _593.SuperfluidDelegationsByValidatorDenomResponse;
            fromJSON(object: any): _593.SuperfluidDelegationsByValidatorDenomResponse;
            toJSON(message: _593.SuperfluidDelegationsByValidatorDenomResponse): unknown;
            fromPartial(object: {
                superfluidDelegationRecords?: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    delegationAmount?: {
                        denom?: string;
                        amount?: string;
                    };
                    equivalentStakedAmount?: {
                        denom?: string;
                        amount?: string;
                    };
                }[];
            }): _593.SuperfluidDelegationsByValidatorDenomResponse;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomRequest: {
            encode(message: _593.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _593.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            fromJSON(object: any): _593.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            toJSON(message: _593.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): unknown;
            fromPartial(object: {
                validatorAddress?: string;
                denom?: string;
            }): _593.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomResponse: {
            encode(message: _593.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _593.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            fromJSON(object: any): _593.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            toJSON(message: _593.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): unknown;
            fromPartial(object: {
                totalDelegatedCoins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _593.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
        };
        Params: {
            encode(message: _592.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _592.Params;
            fromJSON(object: any): _592.Params;
            toJSON(message: _592.Params): unknown;
            fromPartial(object: {
                minimumRiskFactor?: string;
            }): _592.Params;
        };
        GenesisState: {
            encode(message: _591.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _591.GenesisState;
            fromJSON(object: any): _591.GenesisState;
            toJSON(message: _591.GenesisState): unknown;
            fromPartial(object: {
                params?: {
                    minimumRiskFactor?: string;
                };
                superfluidAssets?: {
                    denom?: string;
                    assetType?: _594.SuperfluidAssetType;
                }[];
                osmoEquivalentMultipliers?: {
                    epochNumber?: any;
                    denom?: string;
                    multiplier?: string;
                }[];
                intermediaryAccounts?: {
                    denom?: string;
                    valAddr?: string;
                    gaugeId?: any;
                }[];
                intemediaryAccountConnections?: {
                    lockId?: any;
                    intermediaryAccount?: string;
                }[];
            }): _591.GenesisState;
        };
    };
    namespace tokenfactory {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createDenom(value: _600.MsgCreateDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mint(value: _600.MsgMint): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burn(value: _600.MsgBurn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeAdmin(value: _600.MsgChangeAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createDenom(value: _600.MsgCreateDenom): {
                        typeUrl: string;
                        value: _600.MsgCreateDenom;
                    };
                    mint(value: _600.MsgMint): {
                        typeUrl: string;
                        value: _600.MsgMint;
                    };
                    burn(value: _600.MsgBurn): {
                        typeUrl: string;
                        value: _600.MsgBurn;
                    };
                    changeAdmin(value: _600.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _600.MsgChangeAdmin;
                    };
                };
                toJSON: {
                    createDenom(value: _600.MsgCreateDenom): {
                        typeUrl: string;
                        value: unknown;
                    };
                    mint(value: _600.MsgMint): {
                        typeUrl: string;
                        value: unknown;
                    };
                    burn(value: _600.MsgBurn): {
                        typeUrl: string;
                        value: unknown;
                    };
                    changeAdmin(value: _600.MsgChangeAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createDenom(value: any): {
                        typeUrl: string;
                        value: _600.MsgCreateDenom;
                    };
                    mint(value: any): {
                        typeUrl: string;
                        value: _600.MsgMint;
                    };
                    burn(value: any): {
                        typeUrl: string;
                        value: _600.MsgBurn;
                    };
                    changeAdmin(value: any): {
                        typeUrl: string;
                        value: _600.MsgChangeAdmin;
                    };
                };
                fromPartial: {
                    createDenom(value: _600.MsgCreateDenom): {
                        typeUrl: string;
                        value: _600.MsgCreateDenom;
                    };
                    mint(value: _600.MsgMint): {
                        typeUrl: string;
                        value: _600.MsgMint;
                    };
                    burn(value: _600.MsgBurn): {
                        typeUrl: string;
                        value: _600.MsgBurn;
                    };
                    changeAdmin(value: _600.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _600.MsgChangeAdmin;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.tokenfactory.v1beta1.MsgCreateDenom": {
                    aminoType: string;
                    toAmino: ({ sender, subdenom }: _600.MsgCreateDenom) => {
                        sender: string;
                        subdenom: string;
                    };
                    fromAmino: ({ sender, subdenom }: {
                        sender: string;
                        subdenom: string;
                    }) => _600.MsgCreateDenom;
                };
                "/osmosis.tokenfactory.v1beta1.MsgMint": {
                    aminoType: string;
                    toAmino: ({ sender, amount }: _600.MsgMint) => {
                        sender: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ sender, amount }: {
                        sender: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _600.MsgMint;
                };
                "/osmosis.tokenfactory.v1beta1.MsgBurn": {
                    aminoType: string;
                    toAmino: ({ sender, amount }: _600.MsgBurn) => {
                        sender: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ sender, amount }: {
                        sender: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _600.MsgBurn;
                };
                "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, denom, newAdmin }: _600.MsgChangeAdmin) => {
                        sender: string;
                        denom: string;
                        newAdmin: string;
                    };
                    fromAmino: ({ sender, denom, newAdmin }: {
                        sender: string;
                        denom: string;
                        newAdmin: string;
                    }) => _600.MsgChangeAdmin;
                };
            };
            MsgCreateDenom: {
                encode(message: _600.MsgCreateDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _600.MsgCreateDenom;
                fromJSON(object: any): _600.MsgCreateDenom;
                toJSON(message: _600.MsgCreateDenom): unknown;
                fromPartial(object: {
                    sender?: string;
                    subdenom?: string;
                }): _600.MsgCreateDenom;
            };
            MsgCreateDenomResponse: {
                encode(message: _600.MsgCreateDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _600.MsgCreateDenomResponse;
                fromJSON(object: any): _600.MsgCreateDenomResponse;
                toJSON(message: _600.MsgCreateDenomResponse): unknown;
                fromPartial(object: {
                    newTokenDenom?: string;
                }): _600.MsgCreateDenomResponse;
            };
            MsgMint: {
                encode(message: _600.MsgMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _600.MsgMint;
                fromJSON(object: any): _600.MsgMint;
                toJSON(message: _600.MsgMint): unknown;
                fromPartial(object: {
                    sender?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _600.MsgMint;
            };
            MsgMintResponse: {
                encode(_: _600.MsgMintResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _600.MsgMintResponse;
                fromJSON(_: any): _600.MsgMintResponse;
                toJSON(_: _600.MsgMintResponse): unknown;
                fromPartial(_: {}): _600.MsgMintResponse;
            };
            MsgBurn: {
                encode(message: _600.MsgBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _600.MsgBurn;
                fromJSON(object: any): _600.MsgBurn;
                toJSON(message: _600.MsgBurn): unknown;
                fromPartial(object: {
                    sender?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _600.MsgBurn;
            };
            MsgBurnResponse: {
                encode(_: _600.MsgBurnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _600.MsgBurnResponse;
                fromJSON(_: any): _600.MsgBurnResponse;
                toJSON(_: _600.MsgBurnResponse): unknown;
                fromPartial(_: {}): _600.MsgBurnResponse;
            };
            MsgChangeAdmin: {
                encode(message: _600.MsgChangeAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _600.MsgChangeAdmin;
                fromJSON(object: any): _600.MsgChangeAdmin;
                toJSON(message: _600.MsgChangeAdmin): unknown;
                fromPartial(object: {
                    sender?: string;
                    denom?: string;
                    newAdmin?: string;
                }): _600.MsgChangeAdmin;
            };
            MsgChangeAdminResponse: {
                encode(_: _600.MsgChangeAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _600.MsgChangeAdminResponse;
                fromJSON(_: any): _600.MsgChangeAdminResponse;
                toJSON(_: _600.MsgChangeAdminResponse): unknown;
                fromPartial(_: {}): _600.MsgChangeAdminResponse;
            };
            QueryParamsRequest: {
                encode(_: _599.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _599.QueryParamsRequest;
                fromJSON(_: any): _599.QueryParamsRequest;
                toJSON(_: _599.QueryParamsRequest): unknown;
                fromPartial(_: {}): _599.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _599.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _599.QueryParamsResponse;
                fromJSON(object: any): _599.QueryParamsResponse;
                toJSON(message: _599.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        denomCreationFee?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _599.QueryParamsResponse;
            };
            QueryDenomAuthorityMetadataRequest: {
                encode(message: _599.QueryDenomAuthorityMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _599.QueryDenomAuthorityMetadataRequest;
                fromJSON(object: any): _599.QueryDenomAuthorityMetadataRequest;
                toJSON(message: _599.QueryDenomAuthorityMetadataRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _599.QueryDenomAuthorityMetadataRequest;
            };
            QueryDenomAuthorityMetadataResponse: {
                encode(message: _599.QueryDenomAuthorityMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _599.QueryDenomAuthorityMetadataResponse;
                fromJSON(object: any): _599.QueryDenomAuthorityMetadataResponse;
                toJSON(message: _599.QueryDenomAuthorityMetadataResponse): unknown;
                fromPartial(object: {
                    authorityMetadata?: {
                        Admin?: string;
                    };
                }): _599.QueryDenomAuthorityMetadataResponse;
            };
            QueryDenomsFromCreatorRequest: {
                encode(message: _599.QueryDenomsFromCreatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _599.QueryDenomsFromCreatorRequest;
                fromJSON(object: any): _599.QueryDenomsFromCreatorRequest;
                toJSON(message: _599.QueryDenomsFromCreatorRequest): unknown;
                fromPartial(object: {
                    creator?: string;
                }): _599.QueryDenomsFromCreatorRequest;
            };
            QueryDenomsFromCreatorResponse: {
                encode(message: _599.QueryDenomsFromCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _599.QueryDenomsFromCreatorResponse;
                fromJSON(object: any): _599.QueryDenomsFromCreatorResponse;
                toJSON(message: _599.QueryDenomsFromCreatorResponse): unknown;
                fromPartial(object: {
                    denoms?: string[];
                }): _599.QueryDenomsFromCreatorResponse;
            };
            Params: {
                encode(message: _598.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _598.Params;
                fromJSON(object: any): _598.Params;
                toJSON(message: _598.Params): unknown;
                fromPartial(object: {
                    denomCreationFee?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _598.Params;
            };
            GenesisState: {
                encode(message: _597.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _597.GenesisState;
                fromJSON(object: any): _597.GenesisState;
                toJSON(message: _597.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        denomCreationFee?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                    factoryDenoms?: {
                        denom?: string;
                        authorityMetadata?: {
                            Admin?: string;
                        };
                    }[];
                }): _597.GenesisState;
            };
            GenesisDenom: {
                encode(message: _597.GenesisDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _597.GenesisDenom;
                fromJSON(object: any): _597.GenesisDenom;
                toJSON(message: _597.GenesisDenom): unknown;
                fromPartial(object: {
                    denom?: string;
                    authorityMetadata?: {
                        Admin?: string;
                    };
                }): _597.GenesisDenom;
            };
            DenomAuthorityMetadata: {
                encode(message: _596.DenomAuthorityMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _596.DenomAuthorityMetadata;
                fromJSON(object: any): _596.DenomAuthorityMetadata;
                toJSON(message: _596.DenomAuthorityMetadata): unknown;
                fromPartial(object: {
                    Admin?: string;
                }): _596.DenomAuthorityMetadata;
            };
        };
    }
    namespace txfees {
        const v1beta1: {
            QueryFeeTokensRequest: {
                encode(_: _604.QueryFeeTokensRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _604.QueryFeeTokensRequest;
                fromJSON(_: any): _604.QueryFeeTokensRequest;
                toJSON(_: _604.QueryFeeTokensRequest): unknown;
                fromPartial(_: {}): _604.QueryFeeTokensRequest;
            };
            QueryFeeTokensResponse: {
                encode(message: _604.QueryFeeTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _604.QueryFeeTokensResponse;
                fromJSON(object: any): _604.QueryFeeTokensResponse;
                toJSON(message: _604.QueryFeeTokensResponse): unknown;
                fromPartial(object: {
                    feeTokens?: {
                        denom?: string;
                        poolID?: any;
                    }[];
                }): _604.QueryFeeTokensResponse;
            };
            QueryDenomSpotPriceRequest: {
                encode(message: _604.QueryDenomSpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _604.QueryDenomSpotPriceRequest;
                fromJSON(object: any): _604.QueryDenomSpotPriceRequest;
                toJSON(message: _604.QueryDenomSpotPriceRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _604.QueryDenomSpotPriceRequest;
            };
            QueryDenomSpotPriceResponse: {
                encode(message: _604.QueryDenomSpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _604.QueryDenomSpotPriceResponse;
                fromJSON(object: any): _604.QueryDenomSpotPriceResponse;
                toJSON(message: _604.QueryDenomSpotPriceResponse): unknown;
                fromPartial(object: {
                    poolID?: any;
                    spotPrice?: string;
                }): _604.QueryDenomSpotPriceResponse;
            };
            QueryDenomPoolIdRequest: {
                encode(message: _604.QueryDenomPoolIdRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _604.QueryDenomPoolIdRequest;
                fromJSON(object: any): _604.QueryDenomPoolIdRequest;
                toJSON(message: _604.QueryDenomPoolIdRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _604.QueryDenomPoolIdRequest;
            };
            QueryDenomPoolIdResponse: {
                encode(message: _604.QueryDenomPoolIdResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _604.QueryDenomPoolIdResponse;
                fromJSON(object: any): _604.QueryDenomPoolIdResponse;
                toJSON(message: _604.QueryDenomPoolIdResponse): unknown;
                fromPartial(object: {
                    poolID?: any;
                }): _604.QueryDenomPoolIdResponse;
            };
            QueryBaseDenomRequest: {
                encode(_: _604.QueryBaseDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _604.QueryBaseDenomRequest;
                fromJSON(_: any): _604.QueryBaseDenomRequest;
                toJSON(_: _604.QueryBaseDenomRequest): unknown;
                fromPartial(_: {}): _604.QueryBaseDenomRequest;
            };
            QueryBaseDenomResponse: {
                encode(message: _604.QueryBaseDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _604.QueryBaseDenomResponse;
                fromJSON(object: any): _604.QueryBaseDenomResponse;
                toJSON(message: _604.QueryBaseDenomResponse): unknown;
                fromPartial(object: {
                    baseDenom?: string;
                }): _604.QueryBaseDenomResponse;
            };
            UpdateFeeTokenProposal: {
                encode(message: _603.UpdateFeeTokenProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _603.UpdateFeeTokenProposal;
                fromJSON(object: any): _603.UpdateFeeTokenProposal;
                toJSON(message: _603.UpdateFeeTokenProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    feetoken?: {
                        denom?: string;
                        poolID?: any;
                    };
                }): _603.UpdateFeeTokenProposal;
            };
            GenesisState: {
                encode(message: _602.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _602.GenesisState;
                fromJSON(object: any): _602.GenesisState;
                toJSON(message: _602.GenesisState): unknown;
                fromPartial(object: {
                    basedenom?: string;
                    feetokens?: {
                        denom?: string;
                        poolID?: any;
                    }[];
                }): _602.GenesisState;
            };
            FeeToken: {
                encode(message: _601.FeeToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _601.FeeToken;
                fromJSON(object: any): _601.FeeToken;
                toJSON(message: _601.FeeToken): unknown;
                fromPartial(object: {
                    denom?: string;
                    poolID?: any;
                }): _601.FeeToken;
            };
        };
    }
}
