import * as _497 from "./epochs/genesis";
import * as _498 from "./epochs/query";
import * as _499 from "./gamm/pool-models/balancer/balancerPool";
import * as _500 from "./gamm/v1beta1/genesis";
import * as _501 from "./gamm/v1beta1/query";
import * as _502 from "./gamm/v1beta1/tx";
import * as _503 from "./gamm/pool-models/balancer/tx";
import * as _504 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _505 from "./gamm/pool-models/stableswap/tx";
import * as _506 from "./incentives/gauge";
import * as _507 from "./incentives/genesis";
import * as _508 from "./incentives/params";
import * as _509 from "./incentives/query";
import * as _510 from "./incentives/tx";
import * as _511 from "./lockup/genesis";
import * as _512 from "./lockup/lock";
import * as _513 from "./lockup/query";
import * as _514 from "./lockup/tx";
import * as _515 from "./mint/v1beta1/genesis";
import * as _516 from "./mint/v1beta1/mint";
import * as _517 from "./mint/v1beta1/query";
import * as _518 from "./pool-incentives/v1beta1/genesis";
import * as _519 from "./pool-incentives/v1beta1/gov";
import * as _520 from "./pool-incentives/v1beta1/incentives";
import * as _521 from "./pool-incentives/v1beta1/query";
import * as _522 from "./store/v1beta1/tree";
import * as _523 from "./superfluid/genesis";
import * as _524 from "./superfluid/params";
import * as _525 from "./superfluid/query";
import * as _526 from "./superfluid/superfluid";
import * as _527 from "./superfluid/tx";
import * as _528 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _529 from "./tokenfactory/v1beta1/genesis";
import * as _530 from "./tokenfactory/v1beta1/params";
import * as _531 from "./tokenfactory/v1beta1/query";
import * as _532 from "./tokenfactory/v1beta1/tx";
import * as _533 from "./txfees/v1beta1/feetoken";
import * as _534 from "./txfees/v1beta1/genesis";
import * as _535 from "./txfees/v1beta1/gov";
import * as _536 from "./txfees/v1beta1/query";
export declare namespace osmosis {
    namespace epochs {
        const v1beta1: {
            QueryEpochsInfoRequest: {
                encode(_: _498.QueryEpochsInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _498.QueryEpochsInfoRequest;
                fromJSON(_: any): _498.QueryEpochsInfoRequest;
                toJSON(_: _498.QueryEpochsInfoRequest): unknown;
                fromPartial(_: {}): _498.QueryEpochsInfoRequest;
            };
            QueryEpochsInfoResponse: {
                encode(message: _498.QueryEpochsInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _498.QueryEpochsInfoResponse;
                fromJSON(object: any): _498.QueryEpochsInfoResponse;
                toJSON(message: _498.QueryEpochsInfoResponse): unknown;
                fromPartial(object: {
                    epochs?: {
                        identifier?: string;
                        startTime?: Date;
                        duration?: string;
                        currentEpoch?: any;
                        currentEpochStartTime?: Date;
                        epochCountingStarted?: boolean;
                        currentEpochStartHeight?: any;
                    }[];
                }): _498.QueryEpochsInfoResponse;
            };
            QueryCurrentEpochRequest: {
                encode(message: _498.QueryCurrentEpochRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _498.QueryCurrentEpochRequest;
                fromJSON(object: any): _498.QueryCurrentEpochRequest;
                toJSON(message: _498.QueryCurrentEpochRequest): unknown;
                fromPartial(object: {
                    identifier?: string;
                }): _498.QueryCurrentEpochRequest;
            };
            QueryCurrentEpochResponse: {
                encode(message: _498.QueryCurrentEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _498.QueryCurrentEpochResponse;
                fromJSON(object: any): _498.QueryCurrentEpochResponse;
                toJSON(message: _498.QueryCurrentEpochResponse): unknown;
                fromPartial(object: {
                    currentEpoch?: any;
                }): _498.QueryCurrentEpochResponse;
            };
            EpochInfo: {
                encode(message: _497.EpochInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _497.EpochInfo;
                fromJSON(object: any): _497.EpochInfo;
                toJSON(message: _497.EpochInfo): unknown;
                fromPartial(object: {
                    identifier?: string;
                    startTime?: Date;
                    duration?: string;
                    currentEpoch?: any;
                    currentEpochStartTime?: Date;
                    epochCountingStarted?: boolean;
                    currentEpochStartHeight?: any;
                }): _497.EpochInfo;
            };
            GenesisState: {
                encode(message: _497.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _497.GenesisState;
                fromJSON(object: any): _497.GenesisState;
                toJSON(message: _497.GenesisState): unknown;
                fromPartial(object: {
                    epochs?: {
                        identifier?: string;
                        startTime?: Date;
                        duration?: string;
                        currentEpoch?: any;
                        currentEpochStartTime?: Date;
                        epochCountingStarted?: boolean;
                        currentEpochStartHeight?: any;
                    }[];
                }): _497.GenesisState;
            };
        };
    }
    namespace gamm {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    joinPool(value: _502.MsgJoinPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitPool(value: _502.MsgExitPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountIn(value: _502.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountOut(value: _502.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    joinSwapExternAmountIn(value: _502.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    joinSwapShareAmountOut(value: _502.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitSwapExternAmountOut(value: _502.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitSwapShareAmountIn(value: _502.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    joinPool(value: _502.MsgJoinPool): {
                        typeUrl: string;
                        value: _502.MsgJoinPool;
                    };
                    exitPool(value: _502.MsgExitPool): {
                        typeUrl: string;
                        value: _502.MsgExitPool;
                    };
                    swapExactAmountIn(value: _502.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _502.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _502.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _502.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: _502.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: _502.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: _502.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: _502.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: _502.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: _502.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: _502.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: _502.MsgExitSwapShareAmountIn;
                    };
                };
                toJSON: {
                    joinPool(value: _502.MsgJoinPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exitPool(value: _502.MsgExitPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                    swapExactAmountIn(value: _502.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: unknown;
                    };
                    swapExactAmountOut(value: _502.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: unknown;
                    };
                    joinSwapExternAmountIn(value: _502.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: unknown;
                    };
                    joinSwapShareAmountOut(value: _502.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exitSwapExternAmountOut(value: _502.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exitSwapShareAmountIn(value: _502.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    joinPool(value: any): {
                        typeUrl: string;
                        value: _502.MsgJoinPool;
                    };
                    exitPool(value: any): {
                        typeUrl: string;
                        value: _502.MsgExitPool;
                    };
                    swapExactAmountIn(value: any): {
                        typeUrl: string;
                        value: _502.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: any): {
                        typeUrl: string;
                        value: _502.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: any): {
                        typeUrl: string;
                        value: _502.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: any): {
                        typeUrl: string;
                        value: _502.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: any): {
                        typeUrl: string;
                        value: _502.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: any): {
                        typeUrl: string;
                        value: _502.MsgExitSwapShareAmountIn;
                    };
                };
                fromPartial: {
                    joinPool(value: _502.MsgJoinPool): {
                        typeUrl: string;
                        value: _502.MsgJoinPool;
                    };
                    exitPool(value: _502.MsgExitPool): {
                        typeUrl: string;
                        value: _502.MsgExitPool;
                    };
                    swapExactAmountIn(value: _502.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _502.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _502.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _502.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: _502.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: _502.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: _502.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: _502.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: _502.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: _502.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: _502.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: _502.MsgExitSwapShareAmountIn;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.gamm.v1beta1.MsgJoinPool": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, shareOutAmount, tokenInMaxs }: _502.MsgJoinPool) => {
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
                    }) => _502.MsgJoinPool;
                };
                "/osmosis.gamm.v1beta1.MsgExitPool": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, shareInAmount, tokenOutMins }: _502.MsgExitPool) => {
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
                    }) => _502.MsgExitPool;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, routes, tokenIn, tokenOutMinAmount }: _502.MsgSwapExactAmountIn) => {
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
                    }) => _502.MsgSwapExactAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, routes, tokenInMaxAmount, tokenOut }: _502.MsgSwapExactAmountOut) => {
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
                    }) => _502.MsgSwapExactAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenIn, shareOutMinAmount }: _502.MsgJoinSwapExternAmountIn) => {
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
                    }) => _502.MsgJoinSwapExternAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenInDenom, shareOutAmount, tokenInMaxAmount }: _502.MsgJoinSwapShareAmountOut) => {
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
                    }) => _502.MsgJoinSwapShareAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenOut, shareInMaxAmount }: _502.MsgExitSwapExternAmountOut) => {
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
                    }) => _502.MsgExitSwapExternAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn": {
                    aminoType: string;
                    toAmino: ({ sender, poolId, tokenOutDenom, shareInAmount, tokenOutMinAmount }: _502.MsgExitSwapShareAmountIn) => {
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
                    }) => _502.MsgExitSwapShareAmountIn;
                };
            };
            MsgJoinPool: {
                encode(message: _502.MsgJoinPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _502.MsgJoinPool;
                fromJSON(object: any): _502.MsgJoinPool;
                toJSON(message: _502.MsgJoinPool): unknown;
                fromPartial(object: {
                    sender?: string;
                    poolId?: any;
                    shareOutAmount?: string;
                    tokenInMaxs?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _502.MsgJoinPool;
            };
            MsgJoinPoolResponse: {
                encode(_: _502.MsgJoinPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _502.MsgJoinPoolResponse;
                fromJSON(_: any): _502.MsgJoinPoolResponse;
                toJSON(_: _502.MsgJoinPoolResponse): unknown;
                fromPartial(_: {}): _502.MsgJoinPoolResponse;
            };
            MsgExitPool: {
                encode(message: _502.MsgExitPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _502.MsgExitPool;
                fromJSON(object: any): _502.MsgExitPool;
                toJSON(message: _502.MsgExitPool): unknown;
                fromPartial(object: {
                    sender?: string;
                    poolId?: any;
                    shareInAmount?: string;
                    tokenOutMins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _502.MsgExitPool;
            };
            MsgExitPoolResponse: {
                encode(_: _502.MsgExitPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _502.MsgExitPoolResponse;
                fromJSON(_: any): _502.MsgExitPoolResponse;
                toJSON(_: _502.MsgExitPoolResponse): unknown;
                fromPartial(_: {}): _502.MsgExitPoolResponse;
            };
            SwapAmountInRoute: {
                encode(message: _502.SwapAmountInRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _502.SwapAmountInRoute;
                fromJSON(object: any): _502.SwapAmountInRoute;
                toJSON(message: _502.SwapAmountInRoute): unknown;
                fromPartial(object: {
                    poolId?: any;
                    tokenOutDenom?: string;
                }): _502.SwapAmountInRoute;
            };
            MsgSwapExactAmountIn: {
                encode(message: _502.MsgSwapExactAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _502.MsgSwapExactAmountIn;
                fromJSON(object: any): _502.MsgSwapExactAmountIn;
                toJSON(message: _502.MsgSwapExactAmountIn): unknown;
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
                }): _502.MsgSwapExactAmountIn;
            };
            MsgSwapExactAmountInResponse: {
                encode(message: _502.MsgSwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _502.MsgSwapExactAmountInResponse;
                fromJSON(object: any): _502.MsgSwapExactAmountInResponse;
                toJSON(message: _502.MsgSwapExactAmountInResponse): unknown;
                fromPartial(object: {
                    tokenOutAmount?: string;
                }): _502.MsgSwapExactAmountInResponse;
            };
            SwapAmountOutRoute: {
                encode(message: _502.SwapAmountOutRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _502.SwapAmountOutRoute;
                fromJSON(object: any): _502.SwapAmountOutRoute;
                toJSON(message: _502.SwapAmountOutRoute): unknown;
                fromPartial(object: {
                    poolId?: any;
                    tokenInDenom?: string;
                }): _502.SwapAmountOutRoute;
            };
            MsgSwapExactAmountOut: {
                encode(message: _502.MsgSwapExactAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _502.MsgSwapExactAmountOut;
                fromJSON(object: any): _502.MsgSwapExactAmountOut;
                toJSON(message: _502.MsgSwapExactAmountOut): unknown;
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
                }): _502.MsgSwapExactAmountOut;
            };
            MsgSwapExactAmountOutResponse: {
                encode(message: _502.MsgSwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _502.MsgSwapExactAmountOutResponse;
                fromJSON(object: any): _502.MsgSwapExactAmountOutResponse;
                toJSON(message: _502.MsgSwapExactAmountOutResponse): unknown;
                fromPartial(object: {
                    tokenInAmount?: string;
                }): _502.MsgSwapExactAmountOutResponse;
            };
            MsgJoinSwapExternAmountIn: {
                encode(message: _502.MsgJoinSwapExternAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _502.MsgJoinSwapExternAmountIn;
                fromJSON(object: any): _502.MsgJoinSwapExternAmountIn;
                toJSON(message: _502.MsgJoinSwapExternAmountIn): unknown;
                fromPartial(object: {
                    sender?: string;
                    poolId?: any;
                    tokenIn?: {
                        denom?: string;
                        amount?: string;
                    };
                    shareOutMinAmount?: string;
                }): _502.MsgJoinSwapExternAmountIn;
            };
            MsgJoinSwapExternAmountInResponse: {
                encode(message: _502.MsgJoinSwapExternAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _502.MsgJoinSwapExternAmountInResponse;
                fromJSON(object: any): _502.MsgJoinSwapExternAmountInResponse;
                toJSON(message: _502.MsgJoinSwapExternAmountInResponse): unknown;
                fromPartial(object: {
                    shareOutAmount?: string;
                }): _502.MsgJoinSwapExternAmountInResponse;
            };
            MsgJoinSwapShareAmountOut: {
                encode(message: _502.MsgJoinSwapShareAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _502.MsgJoinSwapShareAmountOut;
                fromJSON(object: any): _502.MsgJoinSwapShareAmountOut;
                toJSON(message: _502.MsgJoinSwapShareAmountOut): unknown;
                fromPartial(object: {
                    sender?: string;
                    poolId?: any;
                    tokenInDenom?: string;
                    shareOutAmount?: string;
                    tokenInMaxAmount?: string;
                }): _502.MsgJoinSwapShareAmountOut;
            };
            MsgJoinSwapShareAmountOutResponse: {
                encode(message: _502.MsgJoinSwapShareAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _502.MsgJoinSwapShareAmountOutResponse;
                fromJSON(object: any): _502.MsgJoinSwapShareAmountOutResponse;
                toJSON(message: _502.MsgJoinSwapShareAmountOutResponse): unknown;
                fromPartial(object: {
                    tokenInAmount?: string;
                }): _502.MsgJoinSwapShareAmountOutResponse;
            };
            MsgExitSwapShareAmountIn: {
                encode(message: _502.MsgExitSwapShareAmountIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _502.MsgExitSwapShareAmountIn;
                fromJSON(object: any): _502.MsgExitSwapShareAmountIn;
                toJSON(message: _502.MsgExitSwapShareAmountIn): unknown;
                fromPartial(object: {
                    sender?: string;
                    poolId?: any;
                    tokenOutDenom?: string;
                    shareInAmount?: string;
                    tokenOutMinAmount?: string;
                }): _502.MsgExitSwapShareAmountIn;
            };
            MsgExitSwapShareAmountInResponse: {
                encode(message: _502.MsgExitSwapShareAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _502.MsgExitSwapShareAmountInResponse;
                fromJSON(object: any): _502.MsgExitSwapShareAmountInResponse;
                toJSON(message: _502.MsgExitSwapShareAmountInResponse): unknown;
                fromPartial(object: {
                    tokenOutAmount?: string;
                }): _502.MsgExitSwapShareAmountInResponse;
            };
            MsgExitSwapExternAmountOut: {
                encode(message: _502.MsgExitSwapExternAmountOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _502.MsgExitSwapExternAmountOut;
                fromJSON(object: any): _502.MsgExitSwapExternAmountOut;
                toJSON(message: _502.MsgExitSwapExternAmountOut): unknown;
                fromPartial(object: {
                    sender?: string;
                    poolId?: any;
                    tokenOut?: {
                        denom?: string;
                        amount?: string;
                    };
                    shareInMaxAmount?: string;
                }): _502.MsgExitSwapExternAmountOut;
            };
            MsgExitSwapExternAmountOutResponse: {
                encode(message: _502.MsgExitSwapExternAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _502.MsgExitSwapExternAmountOutResponse;
                fromJSON(object: any): _502.MsgExitSwapExternAmountOutResponse;
                toJSON(message: _502.MsgExitSwapExternAmountOutResponse): unknown;
                fromPartial(object: {
                    shareInAmount?: string;
                }): _502.MsgExitSwapExternAmountOutResponse;
            };
            QueryPoolRequest: {
                encode(message: _501.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _501.QueryPoolRequest;
                fromJSON(object: any): _501.QueryPoolRequest;
                toJSON(message: _501.QueryPoolRequest): unknown;
                fromPartial(object: {
                    poolId?: any;
                }): _501.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _501.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _501.QueryPoolResponse;
                fromJSON(object: any): _501.QueryPoolResponse;
                toJSON(message: _501.QueryPoolResponse): unknown;
                fromPartial(object: {
                    pool?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _501.QueryPoolResponse;
            };
            QueryPoolsRequest: {
                encode(message: _501.QueryPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _501.QueryPoolsRequest;
                fromJSON(object: any): _501.QueryPoolsRequest;
                toJSON(message: _501.QueryPoolsRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _501.QueryPoolsRequest;
            };
            QueryPoolsResponse: {
                encode(message: _501.QueryPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _501.QueryPoolsResponse;
                fromJSON(object: any): _501.QueryPoolsResponse;
                toJSON(message: _501.QueryPoolsResponse): unknown;
                fromPartial(object: {
                    pools?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _501.QueryPoolsResponse;
            };
            QueryNumPoolsRequest: {
                encode(_: _501.QueryNumPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _501.QueryNumPoolsRequest;
                fromJSON(_: any): _501.QueryNumPoolsRequest;
                toJSON(_: _501.QueryNumPoolsRequest): unknown;
                fromPartial(_: {}): _501.QueryNumPoolsRequest;
            };
            QueryNumPoolsResponse: {
                encode(message: _501.QueryNumPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _501.QueryNumPoolsResponse;
                fromJSON(object: any): _501.QueryNumPoolsResponse;
                toJSON(message: _501.QueryNumPoolsResponse): unknown;
                fromPartial(object: {
                    numPools?: any;
                }): _501.QueryNumPoolsResponse;
            };
            QueryPoolParamsRequest: {
                encode(message: _501.QueryPoolParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _501.QueryPoolParamsRequest;
                fromJSON(object: any): _501.QueryPoolParamsRequest;
                toJSON(message: _501.QueryPoolParamsRequest): unknown;
                fromPartial(object: {
                    poolId?: any;
                }): _501.QueryPoolParamsRequest;
            };
            QueryPoolParamsResponse: {
                encode(message: _501.QueryPoolParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _501.QueryPoolParamsResponse;
                fromJSON(object: any): _501.QueryPoolParamsResponse;
                toJSON(message: _501.QueryPoolParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _501.QueryPoolParamsResponse;
            };
            QueryTotalPoolLiquidityRequest: {
                encode(message: _501.QueryTotalPoolLiquidityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _501.QueryTotalPoolLiquidityRequest;
                fromJSON(object: any): _501.QueryTotalPoolLiquidityRequest;
                toJSON(message: _501.QueryTotalPoolLiquidityRequest): unknown;
                fromPartial(object: {
                    poolId?: any;
                }): _501.QueryTotalPoolLiquidityRequest;
            };
            QueryTotalPoolLiquidityResponse: {
                encode(message: _501.QueryTotalPoolLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _501.QueryTotalPoolLiquidityResponse;
                fromJSON(object: any): _501.QueryTotalPoolLiquidityResponse;
                toJSON(message: _501.QueryTotalPoolLiquidityResponse): unknown;
                fromPartial(object: {
                    liquidity?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _501.QueryTotalPoolLiquidityResponse;
            };
            QueryTotalSharesRequest: {
                encode(message: _501.QueryTotalSharesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _501.QueryTotalSharesRequest;
                fromJSON(object: any): _501.QueryTotalSharesRequest;
                toJSON(message: _501.QueryTotalSharesRequest): unknown;
                fromPartial(object: {
                    poolId?: any;
                }): _501.QueryTotalSharesRequest;
            };
            QueryTotalSharesResponse: {
                encode(message: _501.QueryTotalSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _501.QueryTotalSharesResponse;
                fromJSON(object: any): _501.QueryTotalSharesResponse;
                toJSON(message: _501.QueryTotalSharesResponse): unknown;
                fromPartial(object: {
                    totalShares?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _501.QueryTotalSharesResponse;
            };
            QuerySpotPriceRequest: {
                encode(message: _501.QuerySpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _501.QuerySpotPriceRequest;
                fromJSON(object: any): _501.QuerySpotPriceRequest;
                toJSON(message: _501.QuerySpotPriceRequest): unknown;
                fromPartial(object: {
                    poolId?: any;
                    baseAssetDenom?: string;
                    quoteAssetDenom?: string;
                }): _501.QuerySpotPriceRequest;
            };
            QuerySpotPriceResponse: {
                encode(message: _501.QuerySpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _501.QuerySpotPriceResponse;
                fromJSON(object: any): _501.QuerySpotPriceResponse;
                toJSON(message: _501.QuerySpotPriceResponse): unknown;
                fromPartial(object: {
                    spotPrice?: string;
                }): _501.QuerySpotPriceResponse;
            };
            QuerySwapExactAmountInRequest: {
                encode(message: _501.QuerySwapExactAmountInRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _501.QuerySwapExactAmountInRequest;
                fromJSON(object: any): _501.QuerySwapExactAmountInRequest;
                toJSON(message: _501.QuerySwapExactAmountInRequest): unknown;
                fromPartial(object: {
                    sender?: string;
                    poolId?: any;
                    tokenIn?: string;
                    routes?: {
                        poolId?: any;
                        tokenOutDenom?: string;
                    }[];
                }): _501.QuerySwapExactAmountInRequest;
            };
            QuerySwapExactAmountInResponse: {
                encode(message: _501.QuerySwapExactAmountInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _501.QuerySwapExactAmountInResponse;
                fromJSON(object: any): _501.QuerySwapExactAmountInResponse;
                toJSON(message: _501.QuerySwapExactAmountInResponse): unknown;
                fromPartial(object: {
                    tokenOutAmount?: string;
                }): _501.QuerySwapExactAmountInResponse;
            };
            QuerySwapExactAmountOutRequest: {
                encode(message: _501.QuerySwapExactAmountOutRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _501.QuerySwapExactAmountOutRequest;
                fromJSON(object: any): _501.QuerySwapExactAmountOutRequest;
                toJSON(message: _501.QuerySwapExactAmountOutRequest): unknown;
                fromPartial(object: {
                    sender?: string;
                    poolId?: any;
                    routes?: {
                        poolId?: any;
                        tokenInDenom?: string;
                    }[];
                    tokenOut?: string;
                }): _501.QuerySwapExactAmountOutRequest;
            };
            QuerySwapExactAmountOutResponse: {
                encode(message: _501.QuerySwapExactAmountOutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _501.QuerySwapExactAmountOutResponse;
                fromJSON(object: any): _501.QuerySwapExactAmountOutResponse;
                toJSON(message: _501.QuerySwapExactAmountOutResponse): unknown;
                fromPartial(object: {
                    tokenInAmount?: string;
                }): _501.QuerySwapExactAmountOutResponse;
            };
            QueryTotalLiquidityRequest: {
                encode(_: _501.QueryTotalLiquidityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _501.QueryTotalLiquidityRequest;
                fromJSON(_: any): _501.QueryTotalLiquidityRequest;
                toJSON(_: _501.QueryTotalLiquidityRequest): unknown;
                fromPartial(_: {}): _501.QueryTotalLiquidityRequest;
            };
            QueryTotalLiquidityResponse: {
                encode(message: _501.QueryTotalLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _501.QueryTotalLiquidityResponse;
                fromJSON(object: any): _501.QueryTotalLiquidityResponse;
                toJSON(message: _501.QueryTotalLiquidityResponse): unknown;
                fromPartial(object: {
                    liquidity?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _501.QueryTotalLiquidityResponse;
            };
            Params: {
                encode(message: _500.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _500.Params;
                fromJSON(object: any): _500.Params;
                toJSON(message: _500.Params): unknown;
                fromPartial(object: {
                    poolCreationFee?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _500.Params;
            };
            GenesisState: {
                encode(message: _500.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _500.GenesisState;
                fromJSON(object: any): _500.GenesisState;
                toJSON(message: _500.GenesisState): unknown;
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
                }): _500.GenesisState;
            };
            SmoothWeightChangeParams: {
                encode(message: _499.SmoothWeightChangeParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _499.SmoothWeightChangeParams;
                fromJSON(object: any): _499.SmoothWeightChangeParams;
                toJSON(message: _499.SmoothWeightChangeParams): unknown;
                fromPartial(object: {
                    startTime?: Date;
                    duration?: string;
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
                }): _499.SmoothWeightChangeParams;
            };
            PoolParams: {
                encode(message: _499.PoolParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _499.PoolParams;
                fromJSON(object: any): _499.PoolParams;
                toJSON(message: _499.PoolParams): unknown;
                fromPartial(object: {
                    swapFee?: string;
                    exitFee?: string;
                    smoothWeightChangeParams?: {
                        startTime?: Date;
                        duration?: string;
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
                }): _499.PoolParams;
            };
            PoolAsset: {
                encode(message: _499.PoolAsset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _499.PoolAsset;
                fromJSON(object: any): _499.PoolAsset;
                toJSON(message: _499.PoolAsset): unknown;
                fromPartial(object: {
                    token?: {
                        denom?: string;
                        amount?: string;
                    };
                    weight?: string;
                }): _499.PoolAsset;
            };
            Pool: {
                encode(message: _499.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _499.Pool;
                fromJSON(object: any): _499.Pool;
                toJSON(message: _499.Pool): unknown;
                fromPartial(object: {
                    address?: string;
                    id?: any;
                    poolParams?: {
                        swapFee?: string;
                        exitFee?: string;
                        smoothWeightChangeParams?: {
                            startTime?: Date;
                            duration?: string;
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
                }): _499.Pool;
            };
        };
        namespace poolmodels {
            namespace balancer {
                const v1beta1: {
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            createBalancerPool(value: _503.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            createBalancerPool(value: _503.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: _503.MsgCreateBalancerPool;
                            };
                        };
                        toJSON: {
                            createBalancerPool(value: _503.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            createBalancerPool(value: any): {
                                typeUrl: string;
                                value: _503.MsgCreateBalancerPool;
                            };
                        };
                        fromPartial: {
                            createBalancerPool(value: _503.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: _503.MsgCreateBalancerPool;
                            };
                        };
                    };
                    AminoConverter: {
                        "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool": {
                            aminoType: string;
                            toAmino: ({ sender, poolParams, poolAssets, futurePoolGovernor }: _503.MsgCreateBalancerPool) => {
                                sender: string;
                                poolParams: {
                                    swapFee: string;
                                    exitFee: string;
                                    smoothWeightChangeParams: {
                                        start_time: {
                                            seconds: string;
                                            nanos: number;
                                        };
                                        duration: string;
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
                                        duration: string;
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
                            }) => _503.MsgCreateBalancerPool;
                        };
                    };
                    MsgCreateBalancerPool: {
                        encode(message: _503.MsgCreateBalancerPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _503.MsgCreateBalancerPool;
                        fromJSON(object: any): _503.MsgCreateBalancerPool;
                        toJSON(message: _503.MsgCreateBalancerPool): unknown;
                        fromPartial(object: {
                            sender?: string;
                            poolParams?: {
                                swapFee?: string;
                                exitFee?: string;
                                smoothWeightChangeParams?: {
                                    startTime?: Date;
                                    duration?: string;
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
                        }): _503.MsgCreateBalancerPool;
                    };
                    MsgCreateBalancerPoolResponse: {
                        encode(message: _503.MsgCreateBalancerPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _503.MsgCreateBalancerPoolResponse;
                        fromJSON(object: any): _503.MsgCreateBalancerPoolResponse;
                        toJSON(message: _503.MsgCreateBalancerPoolResponse): unknown;
                        fromPartial(object: {
                            poolId?: any;
                        }): _503.MsgCreateBalancerPoolResponse;
                    };
                };
            }
            namespace stableswap {
                const v1beta1: {
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            createStableswapPool(value: _505.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                            stableSwapAdjustScalingFactors(value: _505.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            createStableswapPool(value: _505.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: _505.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: _505.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: _505.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                        toJSON: {
                            createStableswapPool(value: _505.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: unknown;
                            };
                            stableSwapAdjustScalingFactors(value: _505.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            createStableswapPool(value: any): {
                                typeUrl: string;
                                value: _505.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: any): {
                                typeUrl: string;
                                value: _505.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                        fromPartial: {
                            createStableswapPool(value: _505.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: _505.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: _505.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: _505.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                    };
                    AminoConverter: {
                        "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool": {
                            aminoType: string;
                            toAmino: ({ sender, poolParams, initialPoolLiquidity, futurePoolGovernor }: _505.MsgCreateStableswapPool) => {
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
                            }) => _505.MsgCreateStableswapPool;
                        };
                        "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors": {
                            aminoType: string;
                            toAmino: ({ sender, poolId, scalingFactors }: _505.MsgStableSwapAdjustScalingFactors) => {
                                sender: string;
                                pool_id: string;
                                scaling_factors: Long[];
                            };
                            fromAmino: ({ sender, pool_id, scaling_factors }: {
                                sender: string;
                                pool_id: string;
                                scaling_factors: Long[];
                            }) => _505.MsgStableSwapAdjustScalingFactors;
                        };
                    };
                    MsgCreateStableswapPool: {
                        encode(message: _505.MsgCreateStableswapPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _505.MsgCreateStableswapPool;
                        fromJSON(object: any): _505.MsgCreateStableswapPool;
                        toJSON(message: _505.MsgCreateStableswapPool): unknown;
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
                        }): _505.MsgCreateStableswapPool;
                    };
                    MsgCreateStableswapPoolResponse: {
                        encode(message: _505.MsgCreateStableswapPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _505.MsgCreateStableswapPoolResponse;
                        fromJSON(object: any): _505.MsgCreateStableswapPoolResponse;
                        toJSON(message: _505.MsgCreateStableswapPoolResponse): unknown;
                        fromPartial(object: {
                            poolId?: any;
                        }): _505.MsgCreateStableswapPoolResponse;
                    };
                    MsgStableSwapAdjustScalingFactors: {
                        encode(message: _505.MsgStableSwapAdjustScalingFactors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _505.MsgStableSwapAdjustScalingFactors;
                        fromJSON(object: any): _505.MsgStableSwapAdjustScalingFactors;
                        toJSON(message: _505.MsgStableSwapAdjustScalingFactors): unknown;
                        fromPartial(object: {
                            sender?: string;
                            poolId?: any;
                            scalingFactors?: any[];
                        }): _505.MsgStableSwapAdjustScalingFactors;
                    };
                    MsgStableSwapAdjustScalingFactorsResponse: {
                        encode(_: _505.MsgStableSwapAdjustScalingFactorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _505.MsgStableSwapAdjustScalingFactorsResponse;
                        fromJSON(_: any): _505.MsgStableSwapAdjustScalingFactorsResponse;
                        toJSON(_: _505.MsgStableSwapAdjustScalingFactorsResponse): unknown;
                        fromPartial(_: {}): _505.MsgStableSwapAdjustScalingFactorsResponse;
                    };
                    PoolParams: {
                        encode(message: _504.PoolParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _504.PoolParams;
                        fromJSON(object: any): _504.PoolParams;
                        toJSON(message: _504.PoolParams): unknown;
                        fromPartial(object: {
                            swapFee?: string;
                            exitFee?: string;
                        }): _504.PoolParams;
                    };
                    Pool: {
                        encode(message: _504.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _504.Pool;
                        fromJSON(object: any): _504.Pool;
                        toJSON(message: _504.Pool): unknown;
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
                        }): _504.Pool;
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
                createGauge(value: _510.MsgCreateGauge): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                addToGauge(value: _510.MsgAddToGauge): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                createGauge(value: _510.MsgCreateGauge): {
                    typeUrl: string;
                    value: _510.MsgCreateGauge;
                };
                addToGauge(value: _510.MsgAddToGauge): {
                    typeUrl: string;
                    value: _510.MsgAddToGauge;
                };
            };
            toJSON: {
                createGauge(value: _510.MsgCreateGauge): {
                    typeUrl: string;
                    value: unknown;
                };
                addToGauge(value: _510.MsgAddToGauge): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                createGauge(value: any): {
                    typeUrl: string;
                    value: _510.MsgCreateGauge;
                };
                addToGauge(value: any): {
                    typeUrl: string;
                    value: _510.MsgAddToGauge;
                };
            };
            fromPartial: {
                createGauge(value: _510.MsgCreateGauge): {
                    typeUrl: string;
                    value: _510.MsgCreateGauge;
                };
                addToGauge(value: _510.MsgAddToGauge): {
                    typeUrl: string;
                    value: _510.MsgAddToGauge;
                };
            };
        };
        AminoConverter: {
            "/osmosis.incentives.MsgCreateGauge": {
                aminoType: string;
                toAmino: ({ isPerpetual, owner, distributeTo, coins, startTime, numEpochsPaidOver }: _510.MsgCreateGauge) => {
                    is_perpetual: boolean;
                    owner: string;
                    distribute_to: {
                        lock_query_type: number;
                        denom: string;
                        duration: string;
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
                        duration: string;
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
                }) => _510.MsgCreateGauge;
            };
            "/osmosis.incentives.MsgAddToGauge": {
                aminoType: string;
                toAmino: ({ owner, gaugeId, rewards }: _510.MsgAddToGauge) => {
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
                }) => _510.MsgAddToGauge;
            };
        };
        MsgCreateGauge: {
            encode(message: _510.MsgCreateGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _510.MsgCreateGauge;
            fromJSON(object: any): _510.MsgCreateGauge;
            toJSON(message: _510.MsgCreateGauge): unknown;
            fromPartial(object: {
                isPerpetual?: boolean;
                owner?: string;
                distributeTo?: {
                    lockQueryType?: _512.LockQueryType;
                    denom?: string;
                    duration?: string;
                    timestamp?: Date;
                };
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
                startTime?: Date;
                numEpochsPaidOver?: any;
            }): _510.MsgCreateGauge;
        };
        MsgCreateGaugeResponse: {
            encode(_: _510.MsgCreateGaugeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _510.MsgCreateGaugeResponse;
            fromJSON(_: any): _510.MsgCreateGaugeResponse;
            toJSON(_: _510.MsgCreateGaugeResponse): unknown;
            fromPartial(_: {}): _510.MsgCreateGaugeResponse;
        };
        MsgAddToGauge: {
            encode(message: _510.MsgAddToGauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _510.MsgAddToGauge;
            fromJSON(object: any): _510.MsgAddToGauge;
            toJSON(message: _510.MsgAddToGauge): unknown;
            fromPartial(object: {
                owner?: string;
                gaugeId?: any;
                rewards?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _510.MsgAddToGauge;
        };
        MsgAddToGaugeResponse: {
            encode(_: _510.MsgAddToGaugeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _510.MsgAddToGaugeResponse;
            fromJSON(_: any): _510.MsgAddToGaugeResponse;
            toJSON(_: _510.MsgAddToGaugeResponse): unknown;
            fromPartial(_: {}): _510.MsgAddToGaugeResponse;
        };
        ModuleToDistributeCoinsRequest: {
            encode(_: _509.ModuleToDistributeCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _509.ModuleToDistributeCoinsRequest;
            fromJSON(_: any): _509.ModuleToDistributeCoinsRequest;
            toJSON(_: _509.ModuleToDistributeCoinsRequest): unknown;
            fromPartial(_: {}): _509.ModuleToDistributeCoinsRequest;
        };
        ModuleToDistributeCoinsResponse: {
            encode(message: _509.ModuleToDistributeCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _509.ModuleToDistributeCoinsResponse;
            fromJSON(object: any): _509.ModuleToDistributeCoinsResponse;
            toJSON(message: _509.ModuleToDistributeCoinsResponse): unknown;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _509.ModuleToDistributeCoinsResponse;
        };
        ModuleDistributedCoinsRequest: {
            encode(_: _509.ModuleDistributedCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _509.ModuleDistributedCoinsRequest;
            fromJSON(_: any): _509.ModuleDistributedCoinsRequest;
            toJSON(_: _509.ModuleDistributedCoinsRequest): unknown;
            fromPartial(_: {}): _509.ModuleDistributedCoinsRequest;
        };
        ModuleDistributedCoinsResponse: {
            encode(message: _509.ModuleDistributedCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _509.ModuleDistributedCoinsResponse;
            fromJSON(object: any): _509.ModuleDistributedCoinsResponse;
            toJSON(message: _509.ModuleDistributedCoinsResponse): unknown;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _509.ModuleDistributedCoinsResponse;
        };
        GaugeByIDRequest: {
            encode(message: _509.GaugeByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _509.GaugeByIDRequest;
            fromJSON(object: any): _509.GaugeByIDRequest;
            toJSON(message: _509.GaugeByIDRequest): unknown;
            fromPartial(object: {
                id?: any;
            }): _509.GaugeByIDRequest;
        };
        GaugeByIDResponse: {
            encode(message: _509.GaugeByIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _509.GaugeByIDResponse;
            fromJSON(object: any): _509.GaugeByIDResponse;
            toJSON(message: _509.GaugeByIDResponse): unknown;
            fromPartial(object: {
                gauge?: {
                    id?: any;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _512.LockQueryType;
                        denom?: string;
                        duration?: string;
                        timestamp?: Date;
                    };
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    startTime?: Date;
                    numEpochsPaidOver?: any;
                    filledEpochs?: any;
                    distributedCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                };
            }): _509.GaugeByIDResponse;
        };
        GaugesRequest: {
            encode(message: _509.GaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _509.GaugesRequest;
            fromJSON(object: any): _509.GaugesRequest;
            toJSON(message: _509.GaugesRequest): unknown;
            fromPartial(object: {
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _509.GaugesRequest;
        };
        GaugesResponse: {
            encode(message: _509.GaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _509.GaugesResponse;
            fromJSON(object: any): _509.GaugesResponse;
            toJSON(message: _509.GaugesResponse): unknown;
            fromPartial(object: {
                data?: {
                    id?: any;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _512.LockQueryType;
                        denom?: string;
                        duration?: string;
                        timestamp?: Date;
                    };
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    startTime?: Date;
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
            }): _509.GaugesResponse;
        };
        ActiveGaugesRequest: {
            encode(message: _509.ActiveGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _509.ActiveGaugesRequest;
            fromJSON(object: any): _509.ActiveGaugesRequest;
            toJSON(message: _509.ActiveGaugesRequest): unknown;
            fromPartial(object: {
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _509.ActiveGaugesRequest;
        };
        ActiveGaugesResponse: {
            encode(message: _509.ActiveGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _509.ActiveGaugesResponse;
            fromJSON(object: any): _509.ActiveGaugesResponse;
            toJSON(message: _509.ActiveGaugesResponse): unknown;
            fromPartial(object: {
                data?: {
                    id?: any;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _512.LockQueryType;
                        denom?: string;
                        duration?: string;
                        timestamp?: Date;
                    };
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    startTime?: Date;
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
            }): _509.ActiveGaugesResponse;
        };
        ActiveGaugesPerDenomRequest: {
            encode(message: _509.ActiveGaugesPerDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _509.ActiveGaugesPerDenomRequest;
            fromJSON(object: any): _509.ActiveGaugesPerDenomRequest;
            toJSON(message: _509.ActiveGaugesPerDenomRequest): unknown;
            fromPartial(object: {
                denom?: string;
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _509.ActiveGaugesPerDenomRequest;
        };
        ActiveGaugesPerDenomResponse: {
            encode(message: _509.ActiveGaugesPerDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _509.ActiveGaugesPerDenomResponse;
            fromJSON(object: any): _509.ActiveGaugesPerDenomResponse;
            toJSON(message: _509.ActiveGaugesPerDenomResponse): unknown;
            fromPartial(object: {
                data?: {
                    id?: any;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _512.LockQueryType;
                        denom?: string;
                        duration?: string;
                        timestamp?: Date;
                    };
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    startTime?: Date;
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
            }): _509.ActiveGaugesPerDenomResponse;
        };
        UpcomingGaugesRequest: {
            encode(message: _509.UpcomingGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _509.UpcomingGaugesRequest;
            fromJSON(object: any): _509.UpcomingGaugesRequest;
            toJSON(message: _509.UpcomingGaugesRequest): unknown;
            fromPartial(object: {
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _509.UpcomingGaugesRequest;
        };
        UpcomingGaugesResponse: {
            encode(message: _509.UpcomingGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _509.UpcomingGaugesResponse;
            fromJSON(object: any): _509.UpcomingGaugesResponse;
            toJSON(message: _509.UpcomingGaugesResponse): unknown;
            fromPartial(object: {
                data?: {
                    id?: any;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _512.LockQueryType;
                        denom?: string;
                        duration?: string;
                        timestamp?: Date;
                    };
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    startTime?: Date;
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
            }): _509.UpcomingGaugesResponse;
        };
        UpcomingGaugesPerDenomRequest: {
            encode(message: _509.UpcomingGaugesPerDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _509.UpcomingGaugesPerDenomRequest;
            fromJSON(object: any): _509.UpcomingGaugesPerDenomRequest;
            toJSON(message: _509.UpcomingGaugesPerDenomRequest): unknown;
            fromPartial(object: {
                denom?: string;
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _509.UpcomingGaugesPerDenomRequest;
        };
        UpcomingGaugesPerDenomResponse: {
            encode(message: _509.UpcomingGaugesPerDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _509.UpcomingGaugesPerDenomResponse;
            fromJSON(object: any): _509.UpcomingGaugesPerDenomResponse;
            toJSON(message: _509.UpcomingGaugesPerDenomResponse): unknown;
            fromPartial(object: {
                upcomingGauges?: {
                    id?: any;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _512.LockQueryType;
                        denom?: string;
                        duration?: string;
                        timestamp?: Date;
                    };
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    startTime?: Date;
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
            }): _509.UpcomingGaugesPerDenomResponse;
        };
        RewardsEstRequest: {
            encode(message: _509.RewardsEstRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _509.RewardsEstRequest;
            fromJSON(object: any): _509.RewardsEstRequest;
            toJSON(message: _509.RewardsEstRequest): unknown;
            fromPartial(object: {
                owner?: string;
                lockIds?: any[];
                endEpoch?: any;
            }): _509.RewardsEstRequest;
        };
        RewardsEstResponse: {
            encode(message: _509.RewardsEstResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _509.RewardsEstResponse;
            fromJSON(object: any): _509.RewardsEstResponse;
            toJSON(message: _509.RewardsEstResponse): unknown;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _509.RewardsEstResponse;
        };
        QueryLockableDurationsRequest: {
            encode(_: _509.QueryLockableDurationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _509.QueryLockableDurationsRequest;
            fromJSON(_: any): _509.QueryLockableDurationsRequest;
            toJSON(_: _509.QueryLockableDurationsRequest): unknown;
            fromPartial(_: {}): _509.QueryLockableDurationsRequest;
        };
        QueryLockableDurationsResponse: {
            encode(message: _509.QueryLockableDurationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _509.QueryLockableDurationsResponse;
            fromJSON(object: any): _509.QueryLockableDurationsResponse;
            toJSON(message: _509.QueryLockableDurationsResponse): unknown;
            fromPartial(object: {
                lockableDurations?: string[];
            }): _509.QueryLockableDurationsResponse;
        };
        Params: {
            encode(message: _508.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _508.Params;
            fromJSON(object: any): _508.Params;
            toJSON(message: _508.Params): unknown;
            fromPartial(object: {
                distrEpochIdentifier?: string;
            }): _508.Params;
        };
        GenesisState: {
            encode(message: _507.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _507.GenesisState;
            fromJSON(object: any): _507.GenesisState;
            toJSON(message: _507.GenesisState): unknown;
            fromPartial(object: {
                params?: {
                    distrEpochIdentifier?: string;
                };
                gauges?: {
                    id?: any;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _512.LockQueryType;
                        denom?: string;
                        duration?: string;
                        timestamp?: Date;
                    };
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    startTime?: Date;
                    numEpochsPaidOver?: any;
                    filledEpochs?: any;
                    distributedCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
                lockableDurations?: string[];
                lastGaugeId?: any;
            }): _507.GenesisState;
        };
        Gauge: {
            encode(message: _506.Gauge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _506.Gauge;
            fromJSON(object: any): _506.Gauge;
            toJSON(message: _506.Gauge): unknown;
            fromPartial(object: {
                id?: any;
                isPerpetual?: boolean;
                distributeTo?: {
                    lockQueryType?: _512.LockQueryType;
                    denom?: string;
                    duration?: string;
                    timestamp?: Date;
                };
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
                startTime?: Date;
                numEpochsPaidOver?: any;
                filledEpochs?: any;
                distributedCoins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _506.Gauge;
        };
        LockableDurationsInfo: {
            encode(message: _506.LockableDurationsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _506.LockableDurationsInfo;
            fromJSON(object: any): _506.LockableDurationsInfo;
            toJSON(message: _506.LockableDurationsInfo): unknown;
            fromPartial(object: {
                lockableDurations?: string[];
            }): _506.LockableDurationsInfo;
        };
    };
    const lockup: {
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                lockTokens(value: _514.MsgLockTokens): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                beginUnlockingAll(value: _514.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                beginUnlocking(value: _514.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                extendLockup(value: _514.MsgExtendLockup): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                lockTokens(value: _514.MsgLockTokens): {
                    typeUrl: string;
                    value: _514.MsgLockTokens;
                };
                beginUnlockingAll(value: _514.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: _514.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: _514.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: _514.MsgBeginUnlocking;
                };
                extendLockup(value: _514.MsgExtendLockup): {
                    typeUrl: string;
                    value: _514.MsgExtendLockup;
                };
            };
            toJSON: {
                lockTokens(value: _514.MsgLockTokens): {
                    typeUrl: string;
                    value: unknown;
                };
                beginUnlockingAll(value: _514.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: unknown;
                };
                beginUnlocking(value: _514.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: unknown;
                };
                extendLockup(value: _514.MsgExtendLockup): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                lockTokens(value: any): {
                    typeUrl: string;
                    value: _514.MsgLockTokens;
                };
                beginUnlockingAll(value: any): {
                    typeUrl: string;
                    value: _514.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: any): {
                    typeUrl: string;
                    value: _514.MsgBeginUnlocking;
                };
                extendLockup(value: any): {
                    typeUrl: string;
                    value: _514.MsgExtendLockup;
                };
            };
            fromPartial: {
                lockTokens(value: _514.MsgLockTokens): {
                    typeUrl: string;
                    value: _514.MsgLockTokens;
                };
                beginUnlockingAll(value: _514.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: _514.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: _514.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: _514.MsgBeginUnlocking;
                };
                extendLockup(value: _514.MsgExtendLockup): {
                    typeUrl: string;
                    value: _514.MsgExtendLockup;
                };
            };
        };
        AminoConverter: {
            "/osmosis.lockup.MsgLockTokens": {
                aminoType: string;
                toAmino: ({ owner, duration, coins }: _514.MsgLockTokens) => {
                    owner: string;
                    duration: string;
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                };
                fromAmino: ({ owner, duration, coins }: {
                    owner: string;
                    duration: string;
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                }) => _514.MsgLockTokens;
            };
            "/osmosis.lockup.MsgBeginUnlockingAll": {
                aminoType: string;
                toAmino: ({ owner }: _514.MsgBeginUnlockingAll) => {
                    owner: string;
                };
                fromAmino: ({ owner }: {
                    owner: string;
                }) => _514.MsgBeginUnlockingAll;
            };
            "/osmosis.lockup.MsgBeginUnlocking": {
                aminoType: string;
                toAmino: ({ owner, ID, coins }: _514.MsgBeginUnlocking) => {
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
                }) => _514.MsgBeginUnlocking;
            };
            "/osmosis.lockup.MsgExtendLockup": {
                aminoType: string;
                toAmino: ({ owner, ID, duration }: _514.MsgExtendLockup) => {
                    owner: string;
                    ID: string;
                    duration: string;
                };
                fromAmino: ({ owner, ID, duration }: {
                    owner: string;
                    ID: string;
                    duration: string;
                }) => _514.MsgExtendLockup;
            };
        };
        MsgLockTokens: {
            encode(message: _514.MsgLockTokens, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _514.MsgLockTokens;
            fromJSON(object: any): _514.MsgLockTokens;
            toJSON(message: _514.MsgLockTokens): unknown;
            fromPartial(object: {
                owner?: string;
                duration?: string;
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _514.MsgLockTokens;
        };
        MsgLockTokensResponse: {
            encode(message: _514.MsgLockTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _514.MsgLockTokensResponse;
            fromJSON(object: any): _514.MsgLockTokensResponse;
            toJSON(message: _514.MsgLockTokensResponse): unknown;
            fromPartial(object: {
                ID?: any;
            }): _514.MsgLockTokensResponse;
        };
        MsgBeginUnlockingAll: {
            encode(message: _514.MsgBeginUnlockingAll, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _514.MsgBeginUnlockingAll;
            fromJSON(object: any): _514.MsgBeginUnlockingAll;
            toJSON(message: _514.MsgBeginUnlockingAll): unknown;
            fromPartial(object: {
                owner?: string;
            }): _514.MsgBeginUnlockingAll;
        };
        MsgBeginUnlockingAllResponse: {
            encode(message: _514.MsgBeginUnlockingAllResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _514.MsgBeginUnlockingAllResponse;
            fromJSON(object: any): _514.MsgBeginUnlockingAllResponse;
            toJSON(message: _514.MsgBeginUnlockingAllResponse): unknown;
            fromPartial(object: {
                unlocks?: {
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
            }): _514.MsgBeginUnlockingAllResponse;
        };
        MsgBeginUnlocking: {
            encode(message: _514.MsgBeginUnlocking, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _514.MsgBeginUnlocking;
            fromJSON(object: any): _514.MsgBeginUnlocking;
            toJSON(message: _514.MsgBeginUnlocking): unknown;
            fromPartial(object: {
                owner?: string;
                ID?: any;
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _514.MsgBeginUnlocking;
        };
        MsgBeginUnlockingResponse: {
            encode(message: _514.MsgBeginUnlockingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _514.MsgBeginUnlockingResponse;
            fromJSON(object: any): _514.MsgBeginUnlockingResponse;
            toJSON(message: _514.MsgBeginUnlockingResponse): unknown;
            fromPartial(object: {
                success?: boolean;
            }): _514.MsgBeginUnlockingResponse;
        };
        MsgExtendLockup: {
            encode(message: _514.MsgExtendLockup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _514.MsgExtendLockup;
            fromJSON(object: any): _514.MsgExtendLockup;
            toJSON(message: _514.MsgExtendLockup): unknown;
            fromPartial(object: {
                owner?: string;
                ID?: any;
                duration?: string;
            }): _514.MsgExtendLockup;
        };
        MsgExtendLockupResponse: {
            encode(message: _514.MsgExtendLockupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _514.MsgExtendLockupResponse;
            fromJSON(object: any): _514.MsgExtendLockupResponse;
            toJSON(message: _514.MsgExtendLockupResponse): unknown;
            fromPartial(object: {
                success?: boolean;
            }): _514.MsgExtendLockupResponse;
        };
        ModuleBalanceRequest: {
            encode(_: _513.ModuleBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _513.ModuleBalanceRequest;
            fromJSON(_: any): _513.ModuleBalanceRequest;
            toJSON(_: _513.ModuleBalanceRequest): unknown;
            fromPartial(_: {}): _513.ModuleBalanceRequest;
        };
        ModuleBalanceResponse: {
            encode(message: _513.ModuleBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _513.ModuleBalanceResponse;
            fromJSON(object: any): _513.ModuleBalanceResponse;
            toJSON(message: _513.ModuleBalanceResponse): unknown;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _513.ModuleBalanceResponse;
        };
        ModuleLockedAmountRequest: {
            encode(_: _513.ModuleLockedAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _513.ModuleLockedAmountRequest;
            fromJSON(_: any): _513.ModuleLockedAmountRequest;
            toJSON(_: _513.ModuleLockedAmountRequest): unknown;
            fromPartial(_: {}): _513.ModuleLockedAmountRequest;
        };
        ModuleLockedAmountResponse: {
            encode(message: _513.ModuleLockedAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _513.ModuleLockedAmountResponse;
            fromJSON(object: any): _513.ModuleLockedAmountResponse;
            toJSON(message: _513.ModuleLockedAmountResponse): unknown;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _513.ModuleLockedAmountResponse;
        };
        AccountUnlockableCoinsRequest: {
            encode(message: _513.AccountUnlockableCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _513.AccountUnlockableCoinsRequest;
            fromJSON(object: any): _513.AccountUnlockableCoinsRequest;
            toJSON(message: _513.AccountUnlockableCoinsRequest): unknown;
            fromPartial(object: {
                owner?: string;
            }): _513.AccountUnlockableCoinsRequest;
        };
        AccountUnlockableCoinsResponse: {
            encode(message: _513.AccountUnlockableCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _513.AccountUnlockableCoinsResponse;
            fromJSON(object: any): _513.AccountUnlockableCoinsResponse;
            toJSON(message: _513.AccountUnlockableCoinsResponse): unknown;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _513.AccountUnlockableCoinsResponse;
        };
        AccountUnlockingCoinsRequest: {
            encode(message: _513.AccountUnlockingCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _513.AccountUnlockingCoinsRequest;
            fromJSON(object: any): _513.AccountUnlockingCoinsRequest;
            toJSON(message: _513.AccountUnlockingCoinsRequest): unknown;
            fromPartial(object: {
                owner?: string;
            }): _513.AccountUnlockingCoinsRequest;
        };
        AccountUnlockingCoinsResponse: {
            encode(message: _513.AccountUnlockingCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _513.AccountUnlockingCoinsResponse;
            fromJSON(object: any): _513.AccountUnlockingCoinsResponse;
            toJSON(message: _513.AccountUnlockingCoinsResponse): unknown;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _513.AccountUnlockingCoinsResponse;
        };
        AccountLockedCoinsRequest: {
            encode(message: _513.AccountLockedCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _513.AccountLockedCoinsRequest;
            fromJSON(object: any): _513.AccountLockedCoinsRequest;
            toJSON(message: _513.AccountLockedCoinsRequest): unknown;
            fromPartial(object: {
                owner?: string;
            }): _513.AccountLockedCoinsRequest;
        };
        AccountLockedCoinsResponse: {
            encode(message: _513.AccountLockedCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _513.AccountLockedCoinsResponse;
            fromJSON(object: any): _513.AccountLockedCoinsResponse;
            toJSON(message: _513.AccountLockedCoinsResponse): unknown;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _513.AccountLockedCoinsResponse;
        };
        AccountLockedPastTimeRequest: {
            encode(message: _513.AccountLockedPastTimeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _513.AccountLockedPastTimeRequest;
            fromJSON(object: any): _513.AccountLockedPastTimeRequest;
            toJSON(message: _513.AccountLockedPastTimeRequest): unknown;
            fromPartial(object: {
                owner?: string;
                timestamp?: Date;
            }): _513.AccountLockedPastTimeRequest;
        };
        AccountLockedPastTimeResponse: {
            encode(message: _513.AccountLockedPastTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _513.AccountLockedPastTimeResponse;
            fromJSON(object: any): _513.AccountLockedPastTimeResponse;
            toJSON(message: _513.AccountLockedPastTimeResponse): unknown;
            fromPartial(object: {
                locks?: {
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
            }): _513.AccountLockedPastTimeResponse;
        };
        AccountLockedPastTimeNotUnlockingOnlyRequest: {
            encode(message: _513.AccountLockedPastTimeNotUnlockingOnlyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _513.AccountLockedPastTimeNotUnlockingOnlyRequest;
            fromJSON(object: any): _513.AccountLockedPastTimeNotUnlockingOnlyRequest;
            toJSON(message: _513.AccountLockedPastTimeNotUnlockingOnlyRequest): unknown;
            fromPartial(object: {
                owner?: string;
                timestamp?: Date;
            }): _513.AccountLockedPastTimeNotUnlockingOnlyRequest;
        };
        AccountLockedPastTimeNotUnlockingOnlyResponse: {
            encode(message: _513.AccountLockedPastTimeNotUnlockingOnlyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _513.AccountLockedPastTimeNotUnlockingOnlyResponse;
            fromJSON(object: any): _513.AccountLockedPastTimeNotUnlockingOnlyResponse;
            toJSON(message: _513.AccountLockedPastTimeNotUnlockingOnlyResponse): unknown;
            fromPartial(object: {
                locks?: {
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
            }): _513.AccountLockedPastTimeNotUnlockingOnlyResponse;
        };
        AccountUnlockedBeforeTimeRequest: {
            encode(message: _513.AccountUnlockedBeforeTimeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _513.AccountUnlockedBeforeTimeRequest;
            fromJSON(object: any): _513.AccountUnlockedBeforeTimeRequest;
            toJSON(message: _513.AccountUnlockedBeforeTimeRequest): unknown;
            fromPartial(object: {
                owner?: string;
                timestamp?: Date;
            }): _513.AccountUnlockedBeforeTimeRequest;
        };
        AccountUnlockedBeforeTimeResponse: {
            encode(message: _513.AccountUnlockedBeforeTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _513.AccountUnlockedBeforeTimeResponse;
            fromJSON(object: any): _513.AccountUnlockedBeforeTimeResponse;
            toJSON(message: _513.AccountUnlockedBeforeTimeResponse): unknown;
            fromPartial(object: {
                locks?: {
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
            }): _513.AccountUnlockedBeforeTimeResponse;
        };
        AccountLockedPastTimeDenomRequest: {
            encode(message: _513.AccountLockedPastTimeDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _513.AccountLockedPastTimeDenomRequest;
            fromJSON(object: any): _513.AccountLockedPastTimeDenomRequest;
            toJSON(message: _513.AccountLockedPastTimeDenomRequest): unknown;
            fromPartial(object: {
                owner?: string;
                timestamp?: Date;
                denom?: string;
            }): _513.AccountLockedPastTimeDenomRequest;
        };
        AccountLockedPastTimeDenomResponse: {
            encode(message: _513.AccountLockedPastTimeDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _513.AccountLockedPastTimeDenomResponse;
            fromJSON(object: any): _513.AccountLockedPastTimeDenomResponse;
            toJSON(message: _513.AccountLockedPastTimeDenomResponse): unknown;
            fromPartial(object: {
                locks?: {
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
            }): _513.AccountLockedPastTimeDenomResponse;
        };
        LockedDenomRequest: {
            encode(message: _513.LockedDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _513.LockedDenomRequest;
            fromJSON(object: any): _513.LockedDenomRequest;
            toJSON(message: _513.LockedDenomRequest): unknown;
            fromPartial(object: {
                denom?: string;
                duration?: string;
            }): _513.LockedDenomRequest;
        };
        LockedDenomResponse: {
            encode(message: _513.LockedDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _513.LockedDenomResponse;
            fromJSON(object: any): _513.LockedDenomResponse;
            toJSON(message: _513.LockedDenomResponse): unknown;
            fromPartial(object: {
                amount?: string;
            }): _513.LockedDenomResponse;
        };
        LockedRequest: {
            encode(message: _513.LockedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _513.LockedRequest;
            fromJSON(object: any): _513.LockedRequest;
            toJSON(message: _513.LockedRequest): unknown;
            fromPartial(object: {
                lockId?: any;
            }): _513.LockedRequest;
        };
        LockedResponse: {
            encode(message: _513.LockedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _513.LockedResponse;
            fromJSON(object: any): _513.LockedResponse;
            toJSON(message: _513.LockedResponse): unknown;
            fromPartial(object: {
                lock?: {
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                };
            }): _513.LockedResponse;
        };
        SyntheticLockupsByLockupIDRequest: {
            encode(message: _513.SyntheticLockupsByLockupIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _513.SyntheticLockupsByLockupIDRequest;
            fromJSON(object: any): _513.SyntheticLockupsByLockupIDRequest;
            toJSON(message: _513.SyntheticLockupsByLockupIDRequest): unknown;
            fromPartial(object: {
                lockId?: any;
            }): _513.SyntheticLockupsByLockupIDRequest;
        };
        SyntheticLockupsByLockupIDResponse: {
            encode(message: _513.SyntheticLockupsByLockupIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _513.SyntheticLockupsByLockupIDResponse;
            fromJSON(object: any): _513.SyntheticLockupsByLockupIDResponse;
            toJSON(message: _513.SyntheticLockupsByLockupIDResponse): unknown;
            fromPartial(object: {
                syntheticLocks?: {
                    underlyingLockId?: any;
                    synthDenom?: string;
                    endTime?: Date;
                    duration?: string;
                }[];
            }): _513.SyntheticLockupsByLockupIDResponse;
        };
        AccountLockedLongerDurationRequest: {
            encode(message: _513.AccountLockedLongerDurationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _513.AccountLockedLongerDurationRequest;
            fromJSON(object: any): _513.AccountLockedLongerDurationRequest;
            toJSON(message: _513.AccountLockedLongerDurationRequest): unknown;
            fromPartial(object: {
                owner?: string;
                duration?: string;
            }): _513.AccountLockedLongerDurationRequest;
        };
        AccountLockedLongerDurationResponse: {
            encode(message: _513.AccountLockedLongerDurationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _513.AccountLockedLongerDurationResponse;
            fromJSON(object: any): _513.AccountLockedLongerDurationResponse;
            toJSON(message: _513.AccountLockedLongerDurationResponse): unknown;
            fromPartial(object: {
                locks?: {
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
            }): _513.AccountLockedLongerDurationResponse;
        };
        AccountLockedDurationRequest: {
            encode(message: _513.AccountLockedDurationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _513.AccountLockedDurationRequest;
            fromJSON(object: any): _513.AccountLockedDurationRequest;
            toJSON(message: _513.AccountLockedDurationRequest): unknown;
            fromPartial(object: {
                owner?: string;
                duration?: string;
            }): _513.AccountLockedDurationRequest;
        };
        AccountLockedDurationResponse: {
            encode(message: _513.AccountLockedDurationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _513.AccountLockedDurationResponse;
            fromJSON(object: any): _513.AccountLockedDurationResponse;
            toJSON(message: _513.AccountLockedDurationResponse): unknown;
            fromPartial(object: {
                locks?: {
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
            }): _513.AccountLockedDurationResponse;
        };
        AccountLockedLongerDurationNotUnlockingOnlyRequest: {
            encode(message: _513.AccountLockedLongerDurationNotUnlockingOnlyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _513.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            fromJSON(object: any): _513.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            toJSON(message: _513.AccountLockedLongerDurationNotUnlockingOnlyRequest): unknown;
            fromPartial(object: {
                owner?: string;
                duration?: string;
            }): _513.AccountLockedLongerDurationNotUnlockingOnlyRequest;
        };
        AccountLockedLongerDurationNotUnlockingOnlyResponse: {
            encode(message: _513.AccountLockedLongerDurationNotUnlockingOnlyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _513.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            fromJSON(object: any): _513.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            toJSON(message: _513.AccountLockedLongerDurationNotUnlockingOnlyResponse): unknown;
            fromPartial(object: {
                locks?: {
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
            }): _513.AccountLockedLongerDurationNotUnlockingOnlyResponse;
        };
        AccountLockedLongerDurationDenomRequest: {
            encode(message: _513.AccountLockedLongerDurationDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _513.AccountLockedLongerDurationDenomRequest;
            fromJSON(object: any): _513.AccountLockedLongerDurationDenomRequest;
            toJSON(message: _513.AccountLockedLongerDurationDenomRequest): unknown;
            fromPartial(object: {
                owner?: string;
                duration?: string;
                denom?: string;
            }): _513.AccountLockedLongerDurationDenomRequest;
        };
        AccountLockedLongerDurationDenomResponse: {
            encode(message: _513.AccountLockedLongerDurationDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _513.AccountLockedLongerDurationDenomResponse;
            fromJSON(object: any): _513.AccountLockedLongerDurationDenomResponse;
            toJSON(message: _513.AccountLockedLongerDurationDenomResponse): unknown;
            fromPartial(object: {
                locks?: {
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
            }): _513.AccountLockedLongerDurationDenomResponse;
        };
        lockQueryTypeFromJSON(object: any): _512.LockQueryType;
        lockQueryTypeToJSON(object: _512.LockQueryType): string;
        LockQueryType: typeof _512.LockQueryType;
        PeriodLock: {
            encode(message: _512.PeriodLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _512.PeriodLock;
            fromJSON(object: any): _512.PeriodLock;
            toJSON(message: _512.PeriodLock): unknown;
            fromPartial(object: {
                ID?: any;
                owner?: string;
                duration?: string;
                endTime?: Date;
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _512.PeriodLock;
        };
        QueryCondition: {
            encode(message: _512.QueryCondition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _512.QueryCondition;
            fromJSON(object: any): _512.QueryCondition;
            toJSON(message: _512.QueryCondition): unknown;
            fromPartial(object: {
                lockQueryType?: _512.LockQueryType;
                denom?: string;
                duration?: string;
                timestamp?: Date;
            }): _512.QueryCondition;
        };
        SyntheticLock: {
            encode(message: _512.SyntheticLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _512.SyntheticLock;
            fromJSON(object: any): _512.SyntheticLock;
            toJSON(message: _512.SyntheticLock): unknown;
            fromPartial(object: {
                underlyingLockId?: any;
                synthDenom?: string;
                endTime?: Date;
                duration?: string;
            }): _512.SyntheticLock;
        };
        GenesisState: {
            encode(message: _511.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _511.GenesisState;
            fromJSON(object: any): _511.GenesisState;
            toJSON(message: _511.GenesisState): unknown;
            fromPartial(object: {
                lastLockId?: any;
                locks?: {
                    ID?: any;
                    owner?: string;
                    duration?: string;
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
                syntheticLocks?: {
                    underlyingLockId?: any;
                    synthDenom?: string;
                    endTime?: Date;
                    duration?: string;
                }[];
            }): _511.GenesisState;
        };
    };
    namespace mint {
        const v1beta1: {
            QueryParamsRequest: {
                encode(_: _517.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _517.QueryParamsRequest;
                fromJSON(_: any): _517.QueryParamsRequest;
                toJSON(_: _517.QueryParamsRequest): unknown;
                fromPartial(_: {}): _517.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _517.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _517.QueryParamsResponse;
                fromJSON(object: any): _517.QueryParamsResponse;
                toJSON(message: _517.QueryParamsResponse): unknown;
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
                }): _517.QueryParamsResponse;
            };
            QueryEpochProvisionsRequest: {
                encode(_: _517.QueryEpochProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _517.QueryEpochProvisionsRequest;
                fromJSON(_: any): _517.QueryEpochProvisionsRequest;
                toJSON(_: _517.QueryEpochProvisionsRequest): unknown;
                fromPartial(_: {}): _517.QueryEpochProvisionsRequest;
            };
            QueryEpochProvisionsResponse: {
                encode(message: _517.QueryEpochProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _517.QueryEpochProvisionsResponse;
                fromJSON(object: any): _517.QueryEpochProvisionsResponse;
                toJSON(message: _517.QueryEpochProvisionsResponse): unknown;
                fromPartial(object: {
                    epochProvisions?: Uint8Array;
                }): _517.QueryEpochProvisionsResponse;
            };
            Minter: {
                encode(message: _516.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _516.Minter;
                fromJSON(object: any): _516.Minter;
                toJSON(message: _516.Minter): unknown;
                fromPartial(object: {
                    epochProvisions?: string;
                }): _516.Minter;
            };
            WeightedAddress: {
                encode(message: _516.WeightedAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _516.WeightedAddress;
                fromJSON(object: any): _516.WeightedAddress;
                toJSON(message: _516.WeightedAddress): unknown;
                fromPartial(object: {
                    address?: string;
                    weight?: string;
                }): _516.WeightedAddress;
            };
            DistributionProportions: {
                encode(message: _516.DistributionProportions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _516.DistributionProportions;
                fromJSON(object: any): _516.DistributionProportions;
                toJSON(message: _516.DistributionProportions): unknown;
                fromPartial(object: {
                    staking?: string;
                    poolIncentives?: string;
                    developerRewards?: string;
                    communityPool?: string;
                }): _516.DistributionProportions;
            };
            Params: {
                encode(message: _516.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _516.Params;
                fromJSON(object: any): _516.Params;
                toJSON(message: _516.Params): unknown;
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
                }): _516.Params;
            };
            GenesisState: {
                encode(message: _515.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _515.GenesisState;
                fromJSON(object: any): _515.GenesisState;
                toJSON(message: _515.GenesisState): unknown;
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
                }): _515.GenesisState;
            };
        };
    }
    namespace poolincentives {
        const v1beta1: {
            QueryGaugeIdsRequest: {
                encode(message: _521.QueryGaugeIdsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _521.QueryGaugeIdsRequest;
                fromJSON(object: any): _521.QueryGaugeIdsRequest;
                toJSON(message: _521.QueryGaugeIdsRequest): unknown;
                fromPartial(object: {
                    poolId?: any;
                }): _521.QueryGaugeIdsRequest;
            };
            QueryGaugeIdsResponse: {
                encode(message: _521.QueryGaugeIdsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _521.QueryGaugeIdsResponse;
                fromJSON(object: any): _521.QueryGaugeIdsResponse;
                toJSON(message: _521.QueryGaugeIdsResponse): unknown;
                fromPartial(object: {
                    gaugeIdsWithDuration?: {
                        gaugeId?: any;
                        duration?: string;
                    }[];
                }): _521.QueryGaugeIdsResponse;
            };
            QueryGaugeIdsResponse_GaugeIdWithDuration: {
                encode(message: _521.QueryGaugeIdsResponse_GaugeIdWithDuration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _521.QueryGaugeIdsResponse_GaugeIdWithDuration;
                fromJSON(object: any): _521.QueryGaugeIdsResponse_GaugeIdWithDuration;
                toJSON(message: _521.QueryGaugeIdsResponse_GaugeIdWithDuration): unknown;
                fromPartial(object: {
                    gaugeId?: any;
                    duration?: string;
                }): _521.QueryGaugeIdsResponse_GaugeIdWithDuration;
            };
            QueryDistrInfoRequest: {
                encode(_: _521.QueryDistrInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _521.QueryDistrInfoRequest;
                fromJSON(_: any): _521.QueryDistrInfoRequest;
                toJSON(_: _521.QueryDistrInfoRequest): unknown;
                fromPartial(_: {}): _521.QueryDistrInfoRequest;
            };
            QueryDistrInfoResponse: {
                encode(message: _521.QueryDistrInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _521.QueryDistrInfoResponse;
                fromJSON(object: any): _521.QueryDistrInfoResponse;
                toJSON(message: _521.QueryDistrInfoResponse): unknown;
                fromPartial(object: {
                    distrInfo?: {
                        totalWeight?: string;
                        records?: {
                            gaugeId?: any;
                            weight?: string;
                        }[];
                    };
                }): _521.QueryDistrInfoResponse;
            };
            QueryParamsRequest: {
                encode(_: _521.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _521.QueryParamsRequest;
                fromJSON(_: any): _521.QueryParamsRequest;
                toJSON(_: _521.QueryParamsRequest): unknown;
                fromPartial(_: {}): _521.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _521.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _521.QueryParamsResponse;
                fromJSON(object: any): _521.QueryParamsResponse;
                toJSON(message: _521.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        mintedDenom?: string;
                    };
                }): _521.QueryParamsResponse;
            };
            QueryLockableDurationsRequest: {
                encode(_: _521.QueryLockableDurationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _521.QueryLockableDurationsRequest;
                fromJSON(_: any): _521.QueryLockableDurationsRequest;
                toJSON(_: _521.QueryLockableDurationsRequest): unknown;
                fromPartial(_: {}): _521.QueryLockableDurationsRequest;
            };
            QueryLockableDurationsResponse: {
                encode(message: _521.QueryLockableDurationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _521.QueryLockableDurationsResponse;
                fromJSON(object: any): _521.QueryLockableDurationsResponse;
                toJSON(message: _521.QueryLockableDurationsResponse): unknown;
                fromPartial(object: {
                    lockableDurations?: string[];
                }): _521.QueryLockableDurationsResponse;
            };
            QueryIncentivizedPoolsRequest: {
                encode(_: _521.QueryIncentivizedPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _521.QueryIncentivizedPoolsRequest;
                fromJSON(_: any): _521.QueryIncentivizedPoolsRequest;
                toJSON(_: _521.QueryIncentivizedPoolsRequest): unknown;
                fromPartial(_: {}): _521.QueryIncentivizedPoolsRequest;
            };
            IncentivizedPool: {
                encode(message: _521.IncentivizedPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _521.IncentivizedPool;
                fromJSON(object: any): _521.IncentivizedPool;
                toJSON(message: _521.IncentivizedPool): unknown;
                fromPartial(object: {
                    poolId?: any;
                    lockableDuration?: string;
                    gaugeId?: any;
                }): _521.IncentivizedPool;
            };
            QueryIncentivizedPoolsResponse: {
                encode(message: _521.QueryIncentivizedPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _521.QueryIncentivizedPoolsResponse;
                fromJSON(object: any): _521.QueryIncentivizedPoolsResponse;
                toJSON(message: _521.QueryIncentivizedPoolsResponse): unknown;
                fromPartial(object: {
                    incentivizedPools?: {
                        poolId?: any;
                        lockableDuration?: string;
                        gaugeId?: any;
                    }[];
                }): _521.QueryIncentivizedPoolsResponse;
            };
            QueryExternalIncentiveGaugesRequest: {
                encode(_: _521.QueryExternalIncentiveGaugesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _521.QueryExternalIncentiveGaugesRequest;
                fromJSON(_: any): _521.QueryExternalIncentiveGaugesRequest;
                toJSON(_: _521.QueryExternalIncentiveGaugesRequest): unknown;
                fromPartial(_: {}): _521.QueryExternalIncentiveGaugesRequest;
            };
            QueryExternalIncentiveGaugesResponse: {
                encode(message: _521.QueryExternalIncentiveGaugesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _521.QueryExternalIncentiveGaugesResponse;
                fromJSON(object: any): _521.QueryExternalIncentiveGaugesResponse;
                toJSON(message: _521.QueryExternalIncentiveGaugesResponse): unknown;
                fromPartial(object: {
                    data?: {
                        id?: any;
                        isPerpetual?: boolean;
                        distributeTo?: {
                            lockQueryType?: _512.LockQueryType;
                            denom?: string;
                            duration?: string;
                            timestamp?: Date;
                        };
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        startTime?: Date;
                        numEpochsPaidOver?: any;
                        filledEpochs?: any;
                        distributedCoins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _521.QueryExternalIncentiveGaugesResponse;
            };
            Params: {
                encode(message: _520.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _520.Params;
                fromJSON(object: any): _520.Params;
                toJSON(message: _520.Params): unknown;
                fromPartial(object: {
                    mintedDenom?: string;
                }): _520.Params;
            };
            LockableDurationsInfo: {
                encode(message: _520.LockableDurationsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _520.LockableDurationsInfo;
                fromJSON(object: any): _520.LockableDurationsInfo;
                toJSON(message: _520.LockableDurationsInfo): unknown;
                fromPartial(object: {
                    lockableDurations?: string[];
                }): _520.LockableDurationsInfo;
            };
            DistrInfo: {
                encode(message: _520.DistrInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _520.DistrInfo;
                fromJSON(object: any): _520.DistrInfo;
                toJSON(message: _520.DistrInfo): unknown;
                fromPartial(object: {
                    totalWeight?: string;
                    records?: {
                        gaugeId?: any;
                        weight?: string;
                    }[];
                }): _520.DistrInfo;
            };
            DistrRecord: {
                encode(message: _520.DistrRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _520.DistrRecord;
                fromJSON(object: any): _520.DistrRecord;
                toJSON(message: _520.DistrRecord): unknown;
                fromPartial(object: {
                    gaugeId?: any;
                    weight?: string;
                }): _520.DistrRecord;
            };
            ReplacePoolIncentivesProposal: {
                encode(message: _519.ReplacePoolIncentivesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _519.ReplacePoolIncentivesProposal;
                fromJSON(object: any): _519.ReplacePoolIncentivesProposal;
                toJSON(message: _519.ReplacePoolIncentivesProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    records?: {
                        gaugeId?: any;
                        weight?: string;
                    }[];
                }): _519.ReplacePoolIncentivesProposal;
            };
            UpdatePoolIncentivesProposal: {
                encode(message: _519.UpdatePoolIncentivesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _519.UpdatePoolIncentivesProposal;
                fromJSON(object: any): _519.UpdatePoolIncentivesProposal;
                toJSON(message: _519.UpdatePoolIncentivesProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    records?: {
                        gaugeId?: any;
                        weight?: string;
                    }[];
                }): _519.UpdatePoolIncentivesProposal;
            };
            GenesisState: {
                encode(message: _518.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _518.GenesisState;
                fromJSON(object: any): _518.GenesisState;
                toJSON(message: _518.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        mintedDenom?: string;
                    };
                    lockableDurations?: string[];
                    distrInfo?: {
                        totalWeight?: string;
                        records?: {
                            gaugeId?: any;
                            weight?: string;
                        }[];
                    };
                }): _518.GenesisState;
            };
        };
    }
    namespace store {
        const v1beta1: {
            Node: {
                encode(message: _522.Node, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _522.Node;
                fromJSON(object: any): _522.Node;
                toJSON(message: _522.Node): unknown;
                fromPartial(object: {
                    children?: {
                        index?: Uint8Array;
                        accumulation?: string;
                    }[];
                }): _522.Node;
            };
            Child: {
                encode(message: _522.Child, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _522.Child;
                fromJSON(object: any): _522.Child;
                toJSON(message: _522.Child): unknown;
                fromPartial(object: {
                    index?: Uint8Array;
                    accumulation?: string;
                }): _522.Child;
            };
            Leaf: {
                encode(message: _522.Leaf, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _522.Leaf;
                fromJSON(object: any): _522.Leaf;
                toJSON(message: _522.Leaf): unknown;
                fromPartial(object: {
                    leaf?: {
                        index?: Uint8Array;
                        accumulation?: string;
                    };
                }): _522.Leaf;
            };
        };
    }
    const superfluid: {
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                superfluidDelegate(value: _527.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                superfluidUndelegate(value: _527.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                superfluidUnbondLock(value: _527.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                lockAndSuperfluidDelegate(value: _527.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                unPoolWhitelistedPool(value: _527.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                superfluidDelegate(value: _527.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: _527.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: _527.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: _527.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: _527.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: _527.MsgSuperfluidUnbondLock;
                };
                lockAndSuperfluidDelegate(value: _527.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _527.MsgLockAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: _527.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: _527.MsgUnPoolWhitelistedPool;
                };
            };
            toJSON: {
                superfluidDelegate(value: _527.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: unknown;
                };
                superfluidUndelegate(value: _527.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: unknown;
                };
                superfluidUnbondLock(value: _527.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: unknown;
                };
                lockAndSuperfluidDelegate(value: _527.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: unknown;
                };
                unPoolWhitelistedPool(value: _527.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                superfluidDelegate(value: any): {
                    typeUrl: string;
                    value: _527.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: any): {
                    typeUrl: string;
                    value: _527.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: any): {
                    typeUrl: string;
                    value: _527.MsgSuperfluidUnbondLock;
                };
                lockAndSuperfluidDelegate(value: any): {
                    typeUrl: string;
                    value: _527.MsgLockAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: any): {
                    typeUrl: string;
                    value: _527.MsgUnPoolWhitelistedPool;
                };
            };
            fromPartial: {
                superfluidDelegate(value: _527.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: _527.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: _527.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: _527.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: _527.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: _527.MsgSuperfluidUnbondLock;
                };
                lockAndSuperfluidDelegate(value: _527.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _527.MsgLockAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: _527.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: _527.MsgUnPoolWhitelistedPool;
                };
            };
        };
        AminoConverter: {
            "/osmosis.superfluid.MsgSuperfluidDelegate": {
                aminoType: string;
                toAmino: ({ sender, lockId, valAddr }: _527.MsgSuperfluidDelegate) => {
                    sender: string;
                    lock_id: string;
                    val_addr: string;
                };
                fromAmino: ({ sender, lock_id, val_addr }: {
                    sender: string;
                    lock_id: string;
                    val_addr: string;
                }) => _527.MsgSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUndelegate": {
                aminoType: string;
                toAmino: ({ sender, lockId }: _527.MsgSuperfluidUndelegate) => {
                    sender: string;
                    lock_id: string;
                };
                fromAmino: ({ sender, lock_id }: {
                    sender: string;
                    lock_id: string;
                }) => _527.MsgSuperfluidUndelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUnbondLock": {
                aminoType: string;
                toAmino: ({ sender, lockId }: _527.MsgSuperfluidUnbondLock) => {
                    sender: string;
                    lock_id: string;
                };
                fromAmino: ({ sender, lock_id }: {
                    sender: string;
                    lock_id: string;
                }) => _527.MsgSuperfluidUnbondLock;
            };
            "/osmosis.superfluid.MsgLockAndSuperfluidDelegate": {
                aminoType: string;
                toAmino: ({ sender, coins, valAddr }: _527.MsgLockAndSuperfluidDelegate) => {
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
                }) => _527.MsgLockAndSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgUnPoolWhitelistedPool": {
                aminoType: string;
                toAmino: ({ sender, poolId }: _527.MsgUnPoolWhitelistedPool) => {
                    sender: string;
                    pool_id: string;
                };
                fromAmino: ({ sender, pool_id }: {
                    sender: string;
                    pool_id: string;
                }) => _527.MsgUnPoolWhitelistedPool;
            };
        };
        MsgSuperfluidDelegate: {
            encode(message: _527.MsgSuperfluidDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _527.MsgSuperfluidDelegate;
            fromJSON(object: any): _527.MsgSuperfluidDelegate;
            toJSON(message: _527.MsgSuperfluidDelegate): unknown;
            fromPartial(object: {
                sender?: string;
                lockId?: any;
                valAddr?: string;
            }): _527.MsgSuperfluidDelegate;
        };
        MsgSuperfluidDelegateResponse: {
            encode(_: _527.MsgSuperfluidDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _527.MsgSuperfluidDelegateResponse;
            fromJSON(_: any): _527.MsgSuperfluidDelegateResponse;
            toJSON(_: _527.MsgSuperfluidDelegateResponse): unknown;
            fromPartial(_: {}): _527.MsgSuperfluidDelegateResponse;
        };
        MsgSuperfluidUndelegate: {
            encode(message: _527.MsgSuperfluidUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _527.MsgSuperfluidUndelegate;
            fromJSON(object: any): _527.MsgSuperfluidUndelegate;
            toJSON(message: _527.MsgSuperfluidUndelegate): unknown;
            fromPartial(object: {
                sender?: string;
                lockId?: any;
            }): _527.MsgSuperfluidUndelegate;
        };
        MsgSuperfluidUndelegateResponse: {
            encode(_: _527.MsgSuperfluidUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _527.MsgSuperfluidUndelegateResponse;
            fromJSON(_: any): _527.MsgSuperfluidUndelegateResponse;
            toJSON(_: _527.MsgSuperfluidUndelegateResponse): unknown;
            fromPartial(_: {}): _527.MsgSuperfluidUndelegateResponse;
        };
        MsgSuperfluidUnbondLock: {
            encode(message: _527.MsgSuperfluidUnbondLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _527.MsgSuperfluidUnbondLock;
            fromJSON(object: any): _527.MsgSuperfluidUnbondLock;
            toJSON(message: _527.MsgSuperfluidUnbondLock): unknown;
            fromPartial(object: {
                sender?: string;
                lockId?: any;
            }): _527.MsgSuperfluidUnbondLock;
        };
        MsgSuperfluidUnbondLockResponse: {
            encode(_: _527.MsgSuperfluidUnbondLockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _527.MsgSuperfluidUnbondLockResponse;
            fromJSON(_: any): _527.MsgSuperfluidUnbondLockResponse;
            toJSON(_: _527.MsgSuperfluidUnbondLockResponse): unknown;
            fromPartial(_: {}): _527.MsgSuperfluidUnbondLockResponse;
        };
        MsgLockAndSuperfluidDelegate: {
            encode(message: _527.MsgLockAndSuperfluidDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _527.MsgLockAndSuperfluidDelegate;
            fromJSON(object: any): _527.MsgLockAndSuperfluidDelegate;
            toJSON(message: _527.MsgLockAndSuperfluidDelegate): unknown;
            fromPartial(object: {
                sender?: string;
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
                valAddr?: string;
            }): _527.MsgLockAndSuperfluidDelegate;
        };
        MsgLockAndSuperfluidDelegateResponse: {
            encode(message: _527.MsgLockAndSuperfluidDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _527.MsgLockAndSuperfluidDelegateResponse;
            fromJSON(object: any): _527.MsgLockAndSuperfluidDelegateResponse;
            toJSON(message: _527.MsgLockAndSuperfluidDelegateResponse): unknown;
            fromPartial(object: {
                ID?: any;
            }): _527.MsgLockAndSuperfluidDelegateResponse;
        };
        MsgUnPoolWhitelistedPool: {
            encode(message: _527.MsgUnPoolWhitelistedPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _527.MsgUnPoolWhitelistedPool;
            fromJSON(object: any): _527.MsgUnPoolWhitelistedPool;
            toJSON(message: _527.MsgUnPoolWhitelistedPool): unknown;
            fromPartial(object: {
                sender?: string;
                poolId?: any;
            }): _527.MsgUnPoolWhitelistedPool;
        };
        MsgUnPoolWhitelistedPoolResponse: {
            encode(message: _527.MsgUnPoolWhitelistedPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _527.MsgUnPoolWhitelistedPoolResponse;
            fromJSON(object: any): _527.MsgUnPoolWhitelistedPoolResponse;
            toJSON(message: _527.MsgUnPoolWhitelistedPoolResponse): unknown;
            fromPartial(object: {
                exitedLockIds?: any[];
            }): _527.MsgUnPoolWhitelistedPoolResponse;
        };
        superfluidAssetTypeFromJSON(object: any): _526.SuperfluidAssetType;
        superfluidAssetTypeToJSON(object: _526.SuperfluidAssetType): string;
        SuperfluidAssetType: typeof _526.SuperfluidAssetType;
        SuperfluidAsset: {
            encode(message: _526.SuperfluidAsset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _526.SuperfluidAsset;
            fromJSON(object: any): _526.SuperfluidAsset;
            toJSON(message: _526.SuperfluidAsset): unknown;
            fromPartial(object: {
                denom?: string;
                assetType?: _526.SuperfluidAssetType;
            }): _526.SuperfluidAsset;
        };
        SuperfluidIntermediaryAccount: {
            encode(message: _526.SuperfluidIntermediaryAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _526.SuperfluidIntermediaryAccount;
            fromJSON(object: any): _526.SuperfluidIntermediaryAccount;
            toJSON(message: _526.SuperfluidIntermediaryAccount): unknown;
            fromPartial(object: {
                denom?: string;
                valAddr?: string;
                gaugeId?: any;
            }): _526.SuperfluidIntermediaryAccount;
        };
        OsmoEquivalentMultiplierRecord: {
            encode(message: _526.OsmoEquivalentMultiplierRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _526.OsmoEquivalentMultiplierRecord;
            fromJSON(object: any): _526.OsmoEquivalentMultiplierRecord;
            toJSON(message: _526.OsmoEquivalentMultiplierRecord): unknown;
            fromPartial(object: {
                epochNumber?: any;
                denom?: string;
                multiplier?: string;
            }): _526.OsmoEquivalentMultiplierRecord;
        };
        SuperfluidDelegationRecord: {
            encode(message: _526.SuperfluidDelegationRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _526.SuperfluidDelegationRecord;
            fromJSON(object: any): _526.SuperfluidDelegationRecord;
            toJSON(message: _526.SuperfluidDelegationRecord): unknown;
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
            }): _526.SuperfluidDelegationRecord;
        };
        LockIdIntermediaryAccountConnection: {
            encode(message: _526.LockIdIntermediaryAccountConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _526.LockIdIntermediaryAccountConnection;
            fromJSON(object: any): _526.LockIdIntermediaryAccountConnection;
            toJSON(message: _526.LockIdIntermediaryAccountConnection): unknown;
            fromPartial(object: {
                lockId?: any;
                intermediaryAccount?: string;
            }): _526.LockIdIntermediaryAccountConnection;
        };
        UnpoolWhitelistedPools: {
            encode(message: _526.UnpoolWhitelistedPools, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _526.UnpoolWhitelistedPools;
            fromJSON(object: any): _526.UnpoolWhitelistedPools;
            toJSON(message: _526.UnpoolWhitelistedPools): unknown;
            fromPartial(object: {
                ids?: any[];
            }): _526.UnpoolWhitelistedPools;
        };
        QueryParamsRequest: {
            encode(_: _525.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _525.QueryParamsRequest;
            fromJSON(_: any): _525.QueryParamsRequest;
            toJSON(_: _525.QueryParamsRequest): unknown;
            fromPartial(_: {}): _525.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _525.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _525.QueryParamsResponse;
            fromJSON(object: any): _525.QueryParamsResponse;
            toJSON(message: _525.QueryParamsResponse): unknown;
            fromPartial(object: {
                params?: {
                    minimumRiskFactor?: string;
                };
            }): _525.QueryParamsResponse;
        };
        AssetTypeRequest: {
            encode(message: _525.AssetTypeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _525.AssetTypeRequest;
            fromJSON(object: any): _525.AssetTypeRequest;
            toJSON(message: _525.AssetTypeRequest): unknown;
            fromPartial(object: {
                denom?: string;
            }): _525.AssetTypeRequest;
        };
        AssetTypeResponse: {
            encode(message: _525.AssetTypeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _525.AssetTypeResponse;
            fromJSON(object: any): _525.AssetTypeResponse;
            toJSON(message: _525.AssetTypeResponse): unknown;
            fromPartial(object: {
                assetType?: _526.SuperfluidAssetType;
            }): _525.AssetTypeResponse;
        };
        AllAssetsRequest: {
            encode(_: _525.AllAssetsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _525.AllAssetsRequest;
            fromJSON(_: any): _525.AllAssetsRequest;
            toJSON(_: _525.AllAssetsRequest): unknown;
            fromPartial(_: {}): _525.AllAssetsRequest;
        };
        AllAssetsResponse: {
            encode(message: _525.AllAssetsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _525.AllAssetsResponse;
            fromJSON(object: any): _525.AllAssetsResponse;
            toJSON(message: _525.AllAssetsResponse): unknown;
            fromPartial(object: {
                assets?: {
                    denom?: string;
                    assetType?: _526.SuperfluidAssetType;
                }[];
            }): _525.AllAssetsResponse;
        };
        AssetMultiplierRequest: {
            encode(message: _525.AssetMultiplierRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _525.AssetMultiplierRequest;
            fromJSON(object: any): _525.AssetMultiplierRequest;
            toJSON(message: _525.AssetMultiplierRequest): unknown;
            fromPartial(object: {
                denom?: string;
            }): _525.AssetMultiplierRequest;
        };
        AssetMultiplierResponse: {
            encode(message: _525.AssetMultiplierResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _525.AssetMultiplierResponse;
            fromJSON(object: any): _525.AssetMultiplierResponse;
            toJSON(message: _525.AssetMultiplierResponse): unknown;
            fromPartial(object: {
                osmoEquivalentMultiplier?: {
                    epochNumber?: any;
                    denom?: string;
                    multiplier?: string;
                };
            }): _525.AssetMultiplierResponse;
        };
        SuperfluidIntermediaryAccountInfo: {
            encode(message: _525.SuperfluidIntermediaryAccountInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _525.SuperfluidIntermediaryAccountInfo;
            fromJSON(object: any): _525.SuperfluidIntermediaryAccountInfo;
            toJSON(message: _525.SuperfluidIntermediaryAccountInfo): unknown;
            fromPartial(object: {
                denom?: string;
                valAddr?: string;
                gaugeId?: any;
                address?: string;
            }): _525.SuperfluidIntermediaryAccountInfo;
        };
        AllIntermediaryAccountsRequest: {
            encode(message: _525.AllIntermediaryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _525.AllIntermediaryAccountsRequest;
            fromJSON(object: any): _525.AllIntermediaryAccountsRequest;
            toJSON(message: _525.AllIntermediaryAccountsRequest): unknown;
            fromPartial(object: {
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _525.AllIntermediaryAccountsRequest;
        };
        AllIntermediaryAccountsResponse: {
            encode(message: _525.AllIntermediaryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _525.AllIntermediaryAccountsResponse;
            fromJSON(object: any): _525.AllIntermediaryAccountsResponse;
            toJSON(message: _525.AllIntermediaryAccountsResponse): unknown;
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
            }): _525.AllIntermediaryAccountsResponse;
        };
        ConnectedIntermediaryAccountRequest: {
            encode(message: _525.ConnectedIntermediaryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _525.ConnectedIntermediaryAccountRequest;
            fromJSON(object: any): _525.ConnectedIntermediaryAccountRequest;
            toJSON(message: _525.ConnectedIntermediaryAccountRequest): unknown;
            fromPartial(object: {
                lockId?: any;
            }): _525.ConnectedIntermediaryAccountRequest;
        };
        ConnectedIntermediaryAccountResponse: {
            encode(message: _525.ConnectedIntermediaryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _525.ConnectedIntermediaryAccountResponse;
            fromJSON(object: any): _525.ConnectedIntermediaryAccountResponse;
            toJSON(message: _525.ConnectedIntermediaryAccountResponse): unknown;
            fromPartial(object: {
                account?: {
                    denom?: string;
                    valAddr?: string;
                    gaugeId?: any;
                    address?: string;
                };
            }): _525.ConnectedIntermediaryAccountResponse;
        };
        TotalSuperfluidDelegationsRequest: {
            encode(_: _525.TotalSuperfluidDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _525.TotalSuperfluidDelegationsRequest;
            fromJSON(_: any): _525.TotalSuperfluidDelegationsRequest;
            toJSON(_: _525.TotalSuperfluidDelegationsRequest): unknown;
            fromPartial(_: {}): _525.TotalSuperfluidDelegationsRequest;
        };
        TotalSuperfluidDelegationsResponse: {
            encode(message: _525.TotalSuperfluidDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _525.TotalSuperfluidDelegationsResponse;
            fromJSON(object: any): _525.TotalSuperfluidDelegationsResponse;
            toJSON(message: _525.TotalSuperfluidDelegationsResponse): unknown;
            fromPartial(object: {
                totalDelegations?: string;
            }): _525.TotalSuperfluidDelegationsResponse;
        };
        SuperfluidDelegationAmountRequest: {
            encode(message: _525.SuperfluidDelegationAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _525.SuperfluidDelegationAmountRequest;
            fromJSON(object: any): _525.SuperfluidDelegationAmountRequest;
            toJSON(message: _525.SuperfluidDelegationAmountRequest): unknown;
            fromPartial(object: {
                delegatorAddress?: string;
                validatorAddress?: string;
                denom?: string;
            }): _525.SuperfluidDelegationAmountRequest;
        };
        SuperfluidDelegationAmountResponse: {
            encode(message: _525.SuperfluidDelegationAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _525.SuperfluidDelegationAmountResponse;
            fromJSON(object: any): _525.SuperfluidDelegationAmountResponse;
            toJSON(message: _525.SuperfluidDelegationAmountResponse): unknown;
            fromPartial(object: {
                amount?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _525.SuperfluidDelegationAmountResponse;
        };
        SuperfluidDelegationsByDelegatorRequest: {
            encode(message: _525.SuperfluidDelegationsByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _525.SuperfluidDelegationsByDelegatorRequest;
            fromJSON(object: any): _525.SuperfluidDelegationsByDelegatorRequest;
            toJSON(message: _525.SuperfluidDelegationsByDelegatorRequest): unknown;
            fromPartial(object: {
                delegatorAddress?: string;
            }): _525.SuperfluidDelegationsByDelegatorRequest;
        };
        SuperfluidDelegationsByDelegatorResponse: {
            encode(message: _525.SuperfluidDelegationsByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _525.SuperfluidDelegationsByDelegatorResponse;
            fromJSON(object: any): _525.SuperfluidDelegationsByDelegatorResponse;
            toJSON(message: _525.SuperfluidDelegationsByDelegatorResponse): unknown;
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
            }): _525.SuperfluidDelegationsByDelegatorResponse;
        };
        SuperfluidUndelegationsByDelegatorRequest: {
            encode(message: _525.SuperfluidUndelegationsByDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _525.SuperfluidUndelegationsByDelegatorRequest;
            fromJSON(object: any): _525.SuperfluidUndelegationsByDelegatorRequest;
            toJSON(message: _525.SuperfluidUndelegationsByDelegatorRequest): unknown;
            fromPartial(object: {
                delegatorAddress?: string;
                denom?: string;
            }): _525.SuperfluidUndelegationsByDelegatorRequest;
        };
        SuperfluidUndelegationsByDelegatorResponse: {
            encode(message: _525.SuperfluidUndelegationsByDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _525.SuperfluidUndelegationsByDelegatorResponse;
            fromJSON(object: any): _525.SuperfluidUndelegationsByDelegatorResponse;
            toJSON(message: _525.SuperfluidUndelegationsByDelegatorResponse): unknown;
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
                    endTime?: Date;
                    duration?: string;
                }[];
            }): _525.SuperfluidUndelegationsByDelegatorResponse;
        };
        SuperfluidDelegationsByValidatorDenomRequest: {
            encode(message: _525.SuperfluidDelegationsByValidatorDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _525.SuperfluidDelegationsByValidatorDenomRequest;
            fromJSON(object: any): _525.SuperfluidDelegationsByValidatorDenomRequest;
            toJSON(message: _525.SuperfluidDelegationsByValidatorDenomRequest): unknown;
            fromPartial(object: {
                validatorAddress?: string;
                denom?: string;
            }): _525.SuperfluidDelegationsByValidatorDenomRequest;
        };
        SuperfluidDelegationsByValidatorDenomResponse: {
            encode(message: _525.SuperfluidDelegationsByValidatorDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _525.SuperfluidDelegationsByValidatorDenomResponse;
            fromJSON(object: any): _525.SuperfluidDelegationsByValidatorDenomResponse;
            toJSON(message: _525.SuperfluidDelegationsByValidatorDenomResponse): unknown;
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
            }): _525.SuperfluidDelegationsByValidatorDenomResponse;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomRequest: {
            encode(message: _525.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _525.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            fromJSON(object: any): _525.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            toJSON(message: _525.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): unknown;
            fromPartial(object: {
                validatorAddress?: string;
                denom?: string;
            }): _525.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomResponse: {
            encode(message: _525.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _525.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            fromJSON(object: any): _525.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            toJSON(message: _525.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): unknown;
            fromPartial(object: {
                totalDelegatedCoins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _525.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
        };
        Params: {
            encode(message: _524.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _524.Params;
            fromJSON(object: any): _524.Params;
            toJSON(message: _524.Params): unknown;
            fromPartial(object: {
                minimumRiskFactor?: string;
            }): _524.Params;
        };
        GenesisState: {
            encode(message: _523.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _523.GenesisState;
            fromJSON(object: any): _523.GenesisState;
            toJSON(message: _523.GenesisState): unknown;
            fromPartial(object: {
                params?: {
                    minimumRiskFactor?: string;
                };
                superfluidAssets?: {
                    denom?: string;
                    assetType?: _526.SuperfluidAssetType;
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
            }): _523.GenesisState;
        };
    };
    namespace tokenfactory {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createDenom(value: _532.MsgCreateDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mint(value: _532.MsgMint): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burn(value: _532.MsgBurn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeAdmin(value: _532.MsgChangeAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createDenom(value: _532.MsgCreateDenom): {
                        typeUrl: string;
                        value: _532.MsgCreateDenom;
                    };
                    mint(value: _532.MsgMint): {
                        typeUrl: string;
                        value: _532.MsgMint;
                    };
                    burn(value: _532.MsgBurn): {
                        typeUrl: string;
                        value: _532.MsgBurn;
                    };
                    changeAdmin(value: _532.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _532.MsgChangeAdmin;
                    };
                };
                toJSON: {
                    createDenom(value: _532.MsgCreateDenom): {
                        typeUrl: string;
                        value: unknown;
                    };
                    mint(value: _532.MsgMint): {
                        typeUrl: string;
                        value: unknown;
                    };
                    burn(value: _532.MsgBurn): {
                        typeUrl: string;
                        value: unknown;
                    };
                    changeAdmin(value: _532.MsgChangeAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createDenom(value: any): {
                        typeUrl: string;
                        value: _532.MsgCreateDenom;
                    };
                    mint(value: any): {
                        typeUrl: string;
                        value: _532.MsgMint;
                    };
                    burn(value: any): {
                        typeUrl: string;
                        value: _532.MsgBurn;
                    };
                    changeAdmin(value: any): {
                        typeUrl: string;
                        value: _532.MsgChangeAdmin;
                    };
                };
                fromPartial: {
                    createDenom(value: _532.MsgCreateDenom): {
                        typeUrl: string;
                        value: _532.MsgCreateDenom;
                    };
                    mint(value: _532.MsgMint): {
                        typeUrl: string;
                        value: _532.MsgMint;
                    };
                    burn(value: _532.MsgBurn): {
                        typeUrl: string;
                        value: _532.MsgBurn;
                    };
                    changeAdmin(value: _532.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _532.MsgChangeAdmin;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.tokenfactory.v1beta1.MsgCreateDenom": {
                    aminoType: string;
                    toAmino: ({ sender, subdenom }: _532.MsgCreateDenom) => {
                        sender: string;
                        subdenom: string;
                    };
                    fromAmino: ({ sender, subdenom }: {
                        sender: string;
                        subdenom: string;
                    }) => _532.MsgCreateDenom;
                };
                "/osmosis.tokenfactory.v1beta1.MsgMint": {
                    aminoType: string;
                    toAmino: ({ sender, amount }: _532.MsgMint) => {
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
                    }) => _532.MsgMint;
                };
                "/osmosis.tokenfactory.v1beta1.MsgBurn": {
                    aminoType: string;
                    toAmino: ({ sender, amount }: _532.MsgBurn) => {
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
                    }) => _532.MsgBurn;
                };
                "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, denom, newAdmin }: _532.MsgChangeAdmin) => {
                        sender: string;
                        denom: string;
                        newAdmin: string;
                    };
                    fromAmino: ({ sender, denom, newAdmin }: {
                        sender: string;
                        denom: string;
                        newAdmin: string;
                    }) => _532.MsgChangeAdmin;
                };
            };
            MsgCreateDenom: {
                encode(message: _532.MsgCreateDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _532.MsgCreateDenom;
                fromJSON(object: any): _532.MsgCreateDenom;
                toJSON(message: _532.MsgCreateDenom): unknown;
                fromPartial(object: {
                    sender?: string;
                    subdenom?: string;
                }): _532.MsgCreateDenom;
            };
            MsgCreateDenomResponse: {
                encode(message: _532.MsgCreateDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _532.MsgCreateDenomResponse;
                fromJSON(object: any): _532.MsgCreateDenomResponse;
                toJSON(message: _532.MsgCreateDenomResponse): unknown;
                fromPartial(object: {
                    newTokenDenom?: string;
                }): _532.MsgCreateDenomResponse;
            };
            MsgMint: {
                encode(message: _532.MsgMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _532.MsgMint;
                fromJSON(object: any): _532.MsgMint;
                toJSON(message: _532.MsgMint): unknown;
                fromPartial(object: {
                    sender?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _532.MsgMint;
            };
            MsgMintResponse: {
                encode(_: _532.MsgMintResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _532.MsgMintResponse;
                fromJSON(_: any): _532.MsgMintResponse;
                toJSON(_: _532.MsgMintResponse): unknown;
                fromPartial(_: {}): _532.MsgMintResponse;
            };
            MsgBurn: {
                encode(message: _532.MsgBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _532.MsgBurn;
                fromJSON(object: any): _532.MsgBurn;
                toJSON(message: _532.MsgBurn): unknown;
                fromPartial(object: {
                    sender?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _532.MsgBurn;
            };
            MsgBurnResponse: {
                encode(_: _532.MsgBurnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _532.MsgBurnResponse;
                fromJSON(_: any): _532.MsgBurnResponse;
                toJSON(_: _532.MsgBurnResponse): unknown;
                fromPartial(_: {}): _532.MsgBurnResponse;
            };
            MsgChangeAdmin: {
                encode(message: _532.MsgChangeAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _532.MsgChangeAdmin;
                fromJSON(object: any): _532.MsgChangeAdmin;
                toJSON(message: _532.MsgChangeAdmin): unknown;
                fromPartial(object: {
                    sender?: string;
                    denom?: string;
                    newAdmin?: string;
                }): _532.MsgChangeAdmin;
            };
            MsgChangeAdminResponse: {
                encode(_: _532.MsgChangeAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _532.MsgChangeAdminResponse;
                fromJSON(_: any): _532.MsgChangeAdminResponse;
                toJSON(_: _532.MsgChangeAdminResponse): unknown;
                fromPartial(_: {}): _532.MsgChangeAdminResponse;
            };
            QueryParamsRequest: {
                encode(_: _531.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.QueryParamsRequest;
                fromJSON(_: any): _531.QueryParamsRequest;
                toJSON(_: _531.QueryParamsRequest): unknown;
                fromPartial(_: {}): _531.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _531.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.QueryParamsResponse;
                fromJSON(object: any): _531.QueryParamsResponse;
                toJSON(message: _531.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        denomCreationFee?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _531.QueryParamsResponse;
            };
            QueryDenomAuthorityMetadataRequest: {
                encode(message: _531.QueryDenomAuthorityMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.QueryDenomAuthorityMetadataRequest;
                fromJSON(object: any): _531.QueryDenomAuthorityMetadataRequest;
                toJSON(message: _531.QueryDenomAuthorityMetadataRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _531.QueryDenomAuthorityMetadataRequest;
            };
            QueryDenomAuthorityMetadataResponse: {
                encode(message: _531.QueryDenomAuthorityMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.QueryDenomAuthorityMetadataResponse;
                fromJSON(object: any): _531.QueryDenomAuthorityMetadataResponse;
                toJSON(message: _531.QueryDenomAuthorityMetadataResponse): unknown;
                fromPartial(object: {
                    authorityMetadata?: {
                        Admin?: string;
                    };
                }): _531.QueryDenomAuthorityMetadataResponse;
            };
            QueryDenomsFromCreatorRequest: {
                encode(message: _531.QueryDenomsFromCreatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.QueryDenomsFromCreatorRequest;
                fromJSON(object: any): _531.QueryDenomsFromCreatorRequest;
                toJSON(message: _531.QueryDenomsFromCreatorRequest): unknown;
                fromPartial(object: {
                    creator?: string;
                }): _531.QueryDenomsFromCreatorRequest;
            };
            QueryDenomsFromCreatorResponse: {
                encode(message: _531.QueryDenomsFromCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _531.QueryDenomsFromCreatorResponse;
                fromJSON(object: any): _531.QueryDenomsFromCreatorResponse;
                toJSON(message: _531.QueryDenomsFromCreatorResponse): unknown;
                fromPartial(object: {
                    denoms?: string[];
                }): _531.QueryDenomsFromCreatorResponse;
            };
            Params: {
                encode(message: _530.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _530.Params;
                fromJSON(object: any): _530.Params;
                toJSON(message: _530.Params): unknown;
                fromPartial(object: {
                    denomCreationFee?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _530.Params;
            };
            GenesisState: {
                encode(message: _529.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _529.GenesisState;
                fromJSON(object: any): _529.GenesisState;
                toJSON(message: _529.GenesisState): unknown;
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
                }): _529.GenesisState;
            };
            GenesisDenom: {
                encode(message: _529.GenesisDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _529.GenesisDenom;
                fromJSON(object: any): _529.GenesisDenom;
                toJSON(message: _529.GenesisDenom): unknown;
                fromPartial(object: {
                    denom?: string;
                    authorityMetadata?: {
                        Admin?: string;
                    };
                }): _529.GenesisDenom;
            };
            DenomAuthorityMetadata: {
                encode(message: _528.DenomAuthorityMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _528.DenomAuthorityMetadata;
                fromJSON(object: any): _528.DenomAuthorityMetadata;
                toJSON(message: _528.DenomAuthorityMetadata): unknown;
                fromPartial(object: {
                    Admin?: string;
                }): _528.DenomAuthorityMetadata;
            };
        };
    }
    namespace txfees {
        const v1beta1: {
            QueryFeeTokensRequest: {
                encode(_: _536.QueryFeeTokensRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _536.QueryFeeTokensRequest;
                fromJSON(_: any): _536.QueryFeeTokensRequest;
                toJSON(_: _536.QueryFeeTokensRequest): unknown;
                fromPartial(_: {}): _536.QueryFeeTokensRequest;
            };
            QueryFeeTokensResponse: {
                encode(message: _536.QueryFeeTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _536.QueryFeeTokensResponse;
                fromJSON(object: any): _536.QueryFeeTokensResponse;
                toJSON(message: _536.QueryFeeTokensResponse): unknown;
                fromPartial(object: {
                    feeTokens?: {
                        denom?: string;
                        poolID?: any;
                    }[];
                }): _536.QueryFeeTokensResponse;
            };
            QueryDenomSpotPriceRequest: {
                encode(message: _536.QueryDenomSpotPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _536.QueryDenomSpotPriceRequest;
                fromJSON(object: any): _536.QueryDenomSpotPriceRequest;
                toJSON(message: _536.QueryDenomSpotPriceRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _536.QueryDenomSpotPriceRequest;
            };
            QueryDenomSpotPriceResponse: {
                encode(message: _536.QueryDenomSpotPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _536.QueryDenomSpotPriceResponse;
                fromJSON(object: any): _536.QueryDenomSpotPriceResponse;
                toJSON(message: _536.QueryDenomSpotPriceResponse): unknown;
                fromPartial(object: {
                    poolID?: any;
                    spotPrice?: string;
                }): _536.QueryDenomSpotPriceResponse;
            };
            QueryDenomPoolIdRequest: {
                encode(message: _536.QueryDenomPoolIdRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _536.QueryDenomPoolIdRequest;
                fromJSON(object: any): _536.QueryDenomPoolIdRequest;
                toJSON(message: _536.QueryDenomPoolIdRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _536.QueryDenomPoolIdRequest;
            };
            QueryDenomPoolIdResponse: {
                encode(message: _536.QueryDenomPoolIdResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _536.QueryDenomPoolIdResponse;
                fromJSON(object: any): _536.QueryDenomPoolIdResponse;
                toJSON(message: _536.QueryDenomPoolIdResponse): unknown;
                fromPartial(object: {
                    poolID?: any;
                }): _536.QueryDenomPoolIdResponse;
            };
            QueryBaseDenomRequest: {
                encode(_: _536.QueryBaseDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _536.QueryBaseDenomRequest;
                fromJSON(_: any): _536.QueryBaseDenomRequest;
                toJSON(_: _536.QueryBaseDenomRequest): unknown;
                fromPartial(_: {}): _536.QueryBaseDenomRequest;
            };
            QueryBaseDenomResponse: {
                encode(message: _536.QueryBaseDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _536.QueryBaseDenomResponse;
                fromJSON(object: any): _536.QueryBaseDenomResponse;
                toJSON(message: _536.QueryBaseDenomResponse): unknown;
                fromPartial(object: {
                    baseDenom?: string;
                }): _536.QueryBaseDenomResponse;
            };
            UpdateFeeTokenProposal: {
                encode(message: _535.UpdateFeeTokenProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _535.UpdateFeeTokenProposal;
                fromJSON(object: any): _535.UpdateFeeTokenProposal;
                toJSON(message: _535.UpdateFeeTokenProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    feetoken?: {
                        denom?: string;
                        poolID?: any;
                    };
                }): _535.UpdateFeeTokenProposal;
            };
            GenesisState: {
                encode(message: _534.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _534.GenesisState;
                fromJSON(object: any): _534.GenesisState;
                toJSON(message: _534.GenesisState): unknown;
                fromPartial(object: {
                    basedenom?: string;
                    feetokens?: {
                        denom?: string;
                        poolID?: any;
                    }[];
                }): _534.GenesisState;
            };
            FeeToken: {
                encode(message: _533.FeeToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _533.FeeToken;
                fromJSON(object: any): _533.FeeToken;
                toJSON(message: _533.FeeToken): unknown;
                fromPartial(object: {
                    denom?: string;
                    poolID?: any;
                }): _533.FeeToken;
            };
        };
    }
}
