import * as _53 from "./axelarnet/v1beta1/events";
import * as _54 from "./axelarnet/v1beta1/genesis";
import * as _55 from "./axelarnet/v1beta1/params";
import * as _56 from "./axelarnet/v1beta1/query";
import * as _58 from "./axelarnet/v1beta1/tx";
import * as _59 from "./axelarnet/v1beta1/types";
import * as _60 from "./evm/v1beta1/events";
import * as _61 from "./evm/v1beta1/genesis";
import * as _62 from "./evm/v1beta1/params";
import * as _63 from "./evm/v1beta1/query";
import * as _65 from "./evm/v1beta1/tx";
import * as _66 from "./evm/v1beta1/types";
import * as _67 from "./multisig/exported/v1beta1/types";
import * as _68 from "./multisig/v1beta1/events";
import * as _69 from "./multisig/v1beta1/genesis";
import * as _70 from "./multisig/v1beta1/params";
import * as _71 from "./multisig/v1beta1/query";
import * as _73 from "./multisig/v1beta1/tx";
import * as _74 from "./multisig/v1beta1/types";
import * as _75 from "./nexus/exported/v1beta1/types";
import * as _76 from "./nexus/v1beta1/events";
import * as _77 from "./nexus/v1beta1/genesis";
import * as _78 from "./nexus/v1beta1/params";
import * as _79 from "./nexus/v1beta1/query";
import * as _81 from "./nexus/v1beta1/tx";
import * as _82 from "./nexus/v1beta1/types";
import * as _83 from "./permission/exported/v1beta1/types";
import * as _84 from "./permission/v1beta1/genesis";
import * as _85 from "./permission/v1beta1/params";
import * as _86 from "./permission/v1beta1/query";
import * as _88 from "./permission/v1beta1/tx";
import * as _89 from "./permission/v1beta1/types";
import * as _90 from "./reward/v1beta1/genesis";
import * as _91 from "./reward/v1beta1/params";
import * as _93 from "./reward/v1beta1/tx";
import * as _94 from "./reward/v1beta1/types";
import * as _95 from "./snapshot/exported/v1beta1/types";
import * as _96 from "./snapshot/v1beta1/genesis";
import * as _97 from "./snapshot/v1beta1/params";
import * as _98 from "./snapshot/v1beta1/query";
import * as _100 from "./snapshot/v1beta1/tx";
import * as _101 from "./snapshot/v1beta1/types";
import * as _102 from "./tss/exported/v1beta1/types";
import * as _103 from "./tss/tofnd/v1beta1/common";
import * as _104 from "./tss/tofnd/v1beta1/multisig";
import * as _105 from "./tss/tofnd/v1beta1/tofnd";
import * as _106 from "./tss/v1beta1/genesis";
import * as _107 from "./tss/v1beta1/params";
import * as _109 from "./tss/v1beta1/tx";
import * as _110 from "./tss/v1beta1/types";
import * as _111 from "./utils/v1beta1/bitmap";
import * as _112 from "./utils/v1beta1/queuer";
import * as _113 from "./utils/v1beta1/threshold";
import * as _114 from "./vote/exported/v1beta1/types";
import * as _115 from "./vote/v1beta1/events";
import * as _116 from "./vote/v1beta1/genesis";
import * as _117 from "./vote/v1beta1/params";
import * as _119 from "./vote/v1beta1/tx";
import * as _120 from "./vote/v1beta1/types";
export declare namespace axelar {
    namespace axelarnet {
        const v1beta1: {
            iBCTransfer_StatusFromJSON(object: any): _59.IBCTransfer_Status;
            iBCTransfer_StatusToJSON(object: _59.IBCTransfer_Status): string;
            IBCTransfer_Status: typeof _59.IBCTransfer_Status;
            IBCTransfer: {
                encode(message: _59.IBCTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.IBCTransfer;
                fromJSON(object: any): _59.IBCTransfer;
                toJSON(message: _59.IBCTransfer): unknown;
                fromPartial(object: {
                    sender?: Uint8Array;
                    receiver?: string;
                    token?: {
                        denom?: string;
                        amount?: string;
                    };
                    portId?: string;
                    channelId?: string;
                    sequence?: any;
                    id?: any;
                    status?: _59.IBCTransfer_Status;
                }): _59.IBCTransfer;
            };
            CosmosChain: {
                encode(message: _59.CosmosChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.CosmosChain;
                fromJSON(object: any): _59.CosmosChain;
                toJSON(message: _59.CosmosChain): unknown;
                fromPartial(object: {
                    name?: string;
                    ibcPath?: string;
                    assets?: {
                        denom?: string;
                        minAmount?: Uint8Array;
                    }[];
                    addrPrefix?: string;
                }): _59.CosmosChain;
            };
            Asset: {
                encode(message: _59.Asset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.Asset;
                fromJSON(object: any): _59.Asset;
                toJSON(message: _59.Asset): unknown;
                fromPartial(object: {
                    denom?: string;
                    minAmount?: Uint8Array;
                }): _59.Asset;
            };
            LinkRequest: {
                encode(message: _58.LinkRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.LinkRequest;
                fromJSON(object: any): _58.LinkRequest;
                toJSON(message: _58.LinkRequest): unknown;
                fromPartial(object: {
                    sender?: Uint8Array;
                    recipientAddr?: string;
                    recipientChain?: string;
                    asset?: string;
                }): _58.LinkRequest;
            };
            LinkResponse: {
                encode(message: _58.LinkResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.LinkResponse;
                fromJSON(object: any): _58.LinkResponse;
                toJSON(message: _58.LinkResponse): unknown;
                fromPartial(object: {
                    depositAddr?: string;
                }): _58.LinkResponse;
            };
            ConfirmDepositRequest: {
                encode(message: _58.ConfirmDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.ConfirmDepositRequest;
                fromJSON(object: any): _58.ConfirmDepositRequest;
                toJSON(message: _58.ConfirmDepositRequest): unknown;
                fromPartial(object: {
                    sender?: Uint8Array;
                    depositAddress?: Uint8Array;
                    denom?: string;
                }): _58.ConfirmDepositRequest;
            };
            ConfirmDepositResponse: {
                encode(_: _58.ConfirmDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.ConfirmDepositResponse;
                fromJSON(_: any): _58.ConfirmDepositResponse;
                toJSON(_: _58.ConfirmDepositResponse): unknown;
                fromPartial(_: {}): _58.ConfirmDepositResponse;
            };
            ExecutePendingTransfersRequest: {
                encode(message: _58.ExecutePendingTransfersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.ExecutePendingTransfersRequest;
                fromJSON(object: any): _58.ExecutePendingTransfersRequest;
                toJSON(message: _58.ExecutePendingTransfersRequest): unknown;
                fromPartial(object: {
                    sender?: Uint8Array;
                }): _58.ExecutePendingTransfersRequest;
            };
            ExecutePendingTransfersResponse: {
                encode(_: _58.ExecutePendingTransfersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.ExecutePendingTransfersResponse;
                fromJSON(_: any): _58.ExecutePendingTransfersResponse;
                toJSON(_: _58.ExecutePendingTransfersResponse): unknown;
                fromPartial(_: {}): _58.ExecutePendingTransfersResponse;
            };
            RegisterIBCPathRequest: {
                encode(message: _58.RegisterIBCPathRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.RegisterIBCPathRequest;
                fromJSON(object: any): _58.RegisterIBCPathRequest;
                toJSON(message: _58.RegisterIBCPathRequest): unknown;
                fromPartial(object: {
                    sender?: Uint8Array;
                    chain?: string;
                    path?: string;
                }): _58.RegisterIBCPathRequest;
            };
            RegisterIBCPathResponse: {
                encode(_: _58.RegisterIBCPathResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.RegisterIBCPathResponse;
                fromJSON(_: any): _58.RegisterIBCPathResponse;
                toJSON(_: _58.RegisterIBCPathResponse): unknown;
                fromPartial(_: {}): _58.RegisterIBCPathResponse;
            };
            AddCosmosBasedChainRequest: {
                encode(message: _58.AddCosmosBasedChainRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.AddCosmosBasedChainRequest;
                fromJSON(object: any): _58.AddCosmosBasedChainRequest;
                toJSON(message: _58.AddCosmosBasedChainRequest): unknown;
                fromPartial(object: {
                    sender?: Uint8Array;
                    chain?: {
                        name?: string;
                        supportsForeignAssets?: boolean;
                        keyType?: _102.KeyType;
                        module?: string;
                    };
                    addrPrefix?: string;
                    nativeAssets?: {
                        denom?: string;
                        isNativeAsset?: boolean;
                    }[];
                }): _58.AddCosmosBasedChainRequest;
            };
            AddCosmosBasedChainResponse: {
                encode(_: _58.AddCosmosBasedChainResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.AddCosmosBasedChainResponse;
                fromJSON(_: any): _58.AddCosmosBasedChainResponse;
                toJSON(_: _58.AddCosmosBasedChainResponse): unknown;
                fromPartial(_: {}): _58.AddCosmosBasedChainResponse;
            };
            RegisterAssetRequest: {
                encode(message: _58.RegisterAssetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.RegisterAssetRequest;
                fromJSON(object: any): _58.RegisterAssetRequest;
                toJSON(message: _58.RegisterAssetRequest): unknown;
                fromPartial(object: {
                    sender?: Uint8Array;
                    chain?: string;
                    asset?: {
                        denom?: string;
                        isNativeAsset?: boolean;
                    };
                }): _58.RegisterAssetRequest;
            };
            RegisterAssetResponse: {
                encode(_: _58.RegisterAssetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.RegisterAssetResponse;
                fromJSON(_: any): _58.RegisterAssetResponse;
                toJSON(_: _58.RegisterAssetResponse): unknown;
                fromPartial(_: {}): _58.RegisterAssetResponse;
            };
            RouteIBCTransfersRequest: {
                encode(message: _58.RouteIBCTransfersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.RouteIBCTransfersRequest;
                fromJSON(object: any): _58.RouteIBCTransfersRequest;
                toJSON(message: _58.RouteIBCTransfersRequest): unknown;
                fromPartial(object: {
                    sender?: Uint8Array;
                }): _58.RouteIBCTransfersRequest;
            };
            RouteIBCTransfersResponse: {
                encode(_: _58.RouteIBCTransfersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.RouteIBCTransfersResponse;
                fromJSON(_: any): _58.RouteIBCTransfersResponse;
                toJSON(_: _58.RouteIBCTransfersResponse): unknown;
                fromPartial(_: {}): _58.RouteIBCTransfersResponse;
            };
            RegisterFeeCollectorRequest: {
                encode(message: _58.RegisterFeeCollectorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.RegisterFeeCollectorRequest;
                fromJSON(object: any): _58.RegisterFeeCollectorRequest;
                toJSON(message: _58.RegisterFeeCollectorRequest): unknown;
                fromPartial(object: {
                    sender?: Uint8Array;
                    feeCollector?: Uint8Array;
                }): _58.RegisterFeeCollectorRequest;
            };
            RegisterFeeCollectorResponse: {
                encode(_: _58.RegisterFeeCollectorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.RegisterFeeCollectorResponse;
                fromJSON(_: any): _58.RegisterFeeCollectorResponse;
                toJSON(_: _58.RegisterFeeCollectorResponse): unknown;
                fromPartial(_: {}): _58.RegisterFeeCollectorResponse;
            };
            RetryIBCTransferRequest: {
                encode(message: _58.RetryIBCTransferRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.RetryIBCTransferRequest;
                fromJSON(object: any): _58.RetryIBCTransferRequest;
                toJSON(message: _58.RetryIBCTransferRequest): unknown;
                fromPartial(object: {
                    sender?: Uint8Array;
                    chain?: string;
                    id?: any;
                }): _58.RetryIBCTransferRequest;
            };
            RetryIBCTransferResponse: {
                encode(_: _58.RetryIBCTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.RetryIBCTransferResponse;
                fromJSON(_: any): _58.RetryIBCTransferResponse;
                toJSON(_: _58.RetryIBCTransferResponse): unknown;
                fromPartial(_: {}): _58.RetryIBCTransferResponse;
            };
            PendingIBCTransferCountRequest: {
                encode(_: _56.PendingIBCTransferCountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.PendingIBCTransferCountRequest;
                fromJSON(_: any): _56.PendingIBCTransferCountRequest;
                toJSON(_: _56.PendingIBCTransferCountRequest): unknown;
                fromPartial(_: {}): _56.PendingIBCTransferCountRequest;
            };
            PendingIBCTransferCountResponse_TransfersByChainEntry: {
                encode(message: _56.PendingIBCTransferCountResponse_TransfersByChainEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.PendingIBCTransferCountResponse_TransfersByChainEntry;
                fromJSON(object: any): _56.PendingIBCTransferCountResponse_TransfersByChainEntry;
                toJSON(message: _56.PendingIBCTransferCountResponse_TransfersByChainEntry): unknown;
                fromPartial(object: {
                    key?: string;
                    value?: number;
                }): _56.PendingIBCTransferCountResponse_TransfersByChainEntry;
            };
            PendingIBCTransferCountResponse: {
                encode(message: _56.PendingIBCTransferCountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.PendingIBCTransferCountResponse;
                fromJSON(object: any): _56.PendingIBCTransferCountResponse;
                toJSON(message: _56.PendingIBCTransferCountResponse): unknown;
                fromPartial(object: {
                    transfersByChain?: {
                        [x: string]: number;
                    };
                }): _56.PendingIBCTransferCountResponse;
            };
            Params: {
                encode(message: _55.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.Params;
                fromJSON(object: any): _55.Params;
                toJSON(message: _55.Params): unknown;
                fromPartial(object: {
                    routeTimeoutWindow?: any;
                    transferLimit?: any;
                    endBlockerLimit?: any;
                }): _55.Params;
            };
            GenesisState: {
                encode(message: _54.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.GenesisState;
                fromJSON(object: any): _54.GenesisState;
                toJSON(message: _54.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        routeTimeoutWindow?: any;
                        transferLimit?: any;
                        endBlockerLimit?: any;
                    };
                    collectorAddress?: Uint8Array;
                    chains?: {
                        name?: string;
                        ibcPath?: string;
                        assets?: {
                            denom?: string;
                            minAmount?: Uint8Array;
                        }[];
                        addrPrefix?: string;
                    }[];
                    transferQueue?: {
                        items?: {
                            [x: string]: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                            };
                        };
                    };
                    failedTransfers?: {
                        sender?: Uint8Array;
                        receiver?: string;
                        token?: {
                            denom?: string;
                            amount?: string;
                        };
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                        id?: any;
                        status?: _59.IBCTransfer_Status;
                    }[];
                }): _54.GenesisState;
            };
            IBCTransferSent: {
                encode(message: _53.IBCTransferSent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.IBCTransferSent;
                fromJSON(object: any): _53.IBCTransferSent;
                toJSON(message: _53.IBCTransferSent): unknown;
                fromPartial(object: {
                    id?: any;
                    receipient?: string;
                    asset?: {
                        denom?: string;
                        amount?: string;
                    };
                    sequence?: any;
                    portId?: string;
                    channelId?: string;
                }): _53.IBCTransferSent;
            };
            IBCTransferCompleted: {
                encode(message: _53.IBCTransferCompleted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.IBCTransferCompleted;
                fromJSON(object: any): _53.IBCTransferCompleted;
                toJSON(message: _53.IBCTransferCompleted): unknown;
                fromPartial(object: {
                    id?: any;
                    sequence?: any;
                    portId?: string;
                    channelId?: string;
                }): _53.IBCTransferCompleted;
            };
            IBCTransferFailed: {
                encode(message: _53.IBCTransferFailed, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.IBCTransferFailed;
                fromJSON(object: any): _53.IBCTransferFailed;
                toJSON(message: _53.IBCTransferFailed): unknown;
                fromPartial(object: {
                    id?: any;
                    sequence?: any;
                    portId?: string;
                    channelId?: string;
                }): _53.IBCTransferFailed;
            };
            IBCTransferRetried: {
                encode(message: _53.IBCTransferRetried, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.IBCTransferRetried;
                fromJSON(object: any): _53.IBCTransferRetried;
                toJSON(message: _53.IBCTransferRetried): unknown;
                fromPartial(object: {
                    id?: any;
                    receipient?: string;
                    asset?: {
                        denom?: string;
                        amount?: string;
                    };
                    sequence?: any;
                    portId?: string;
                    channelId?: string;
                }): _53.IBCTransferRetried;
            };
            AxelarTransferCompleted: {
                encode(message: _53.AxelarTransferCompleted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.AxelarTransferCompleted;
                fromJSON(object: any): _53.AxelarTransferCompleted;
                toJSON(message: _53.AxelarTransferCompleted): unknown;
                fromPartial(object: {
                    id?: any;
                    receipient?: string;
                    asset?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _53.AxelarTransferCompleted;
            };
            FeeCollected: {
                encode(message: _53.FeeCollected, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.FeeCollected;
                fromJSON(object: any): _53.FeeCollected;
                toJSON(message: _53.FeeCollected): unknown;
                fromPartial(object: {
                    collector?: Uint8Array;
                    fee?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _53.FeeCollected;
            };
        };
    }
    namespace evm {
        const v1beta1: {
            event_StatusFromJSON(object: any): _66.Event_Status;
            event_StatusToJSON(object: _66.Event_Status): string;
            statusFromJSON(object: any): _66.Status;
            statusToJSON(object: _66.Status): string;
            batchedCommandsStatusFromJSON(object: any): _66.BatchedCommandsStatus;
            batchedCommandsStatusToJSON(object: _66.BatchedCommandsStatus): string;
            sigTypeFromJSON(object: any): _66.SigType;
            sigTypeToJSON(object: _66.SigType): string;
            depositStatusFromJSON(object: any): _66.DepositStatus;
            depositStatusToJSON(object: _66.DepositStatus): string;
            gateway_StatusFromJSON(object: any): _66.Gateway_Status;
            gateway_StatusToJSON(object: _66.Gateway_Status): string;
            Event_Status: typeof _66.Event_Status;
            Status: typeof _66.Status;
            BatchedCommandsStatus: typeof _66.BatchedCommandsStatus;
            SigType: typeof _66.SigType;
            DepositStatus: typeof _66.DepositStatus;
            Gateway_Status: typeof _66.Gateway_Status;
            VoteEvents: {
                encode(message: _66.VoteEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.VoteEvents;
                fromJSON(object: any): _66.VoteEvents;
                toJSON(message: _66.VoteEvents): unknown;
                fromPartial(object: {
                    chain?: string;
                    events?: {
                        chain?: string;
                        txId?: Uint8Array;
                        index?: any;
                        status?: _66.Event_Status;
                        tokenSent?: {
                            sender?: Uint8Array;
                            destinationChain?: string;
                            destinationAddress?: string;
                            symbol?: string;
                            amount?: Uint8Array;
                        };
                        contractCall?: {
                            sender?: Uint8Array;
                            destinationChain?: string;
                            contractAddress?: string;
                            payloadHash?: Uint8Array;
                        };
                        contractCallWithToken?: {
                            sender?: Uint8Array;
                            destinationChain?: string;
                            contractAddress?: string;
                            payloadHash?: Uint8Array;
                            symbol?: string;
                            amount?: Uint8Array;
                        };
                        transfer?: {
                            to?: Uint8Array;
                            amount?: Uint8Array;
                        };
                        tokenDeployed?: {
                            symbol?: string;
                            tokenAddress?: Uint8Array;
                        };
                        multisigOwnershipTransferred?: {
                            preOwners?: Uint8Array[];
                            prevThreshold?: Uint8Array;
                            newOwners?: Uint8Array[];
                            newThreshold?: Uint8Array;
                        };
                        multisigOperatorshipTransferred?: {
                            newOperators?: Uint8Array[];
                            newThreshold?: Uint8Array;
                            newWeights?: Uint8Array[];
                        };
                    }[];
                }): _66.VoteEvents;
            };
            Event: {
                encode(message: _66.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.Event;
                fromJSON(object: any): _66.Event;
                toJSON(message: _66.Event): unknown;
                fromPartial(object: {
                    chain?: string;
                    txId?: Uint8Array;
                    index?: any;
                    status?: _66.Event_Status;
                    tokenSent?: {
                        sender?: Uint8Array;
                        destinationChain?: string;
                        destinationAddress?: string;
                        symbol?: string;
                        amount?: Uint8Array;
                    };
                    contractCall?: {
                        sender?: Uint8Array;
                        destinationChain?: string;
                        contractAddress?: string;
                        payloadHash?: Uint8Array;
                    };
                    contractCallWithToken?: {
                        sender?: Uint8Array;
                        destinationChain?: string;
                        contractAddress?: string;
                        payloadHash?: Uint8Array;
                        symbol?: string;
                        amount?: Uint8Array;
                    };
                    transfer?: {
                        to?: Uint8Array;
                        amount?: Uint8Array;
                    };
                    tokenDeployed?: {
                        symbol?: string;
                        tokenAddress?: Uint8Array;
                    };
                    multisigOwnershipTransferred?: {
                        preOwners?: Uint8Array[];
                        prevThreshold?: Uint8Array;
                        newOwners?: Uint8Array[];
                        newThreshold?: Uint8Array;
                    };
                    multisigOperatorshipTransferred?: {
                        newOperators?: Uint8Array[];
                        newThreshold?: Uint8Array;
                        newWeights?: Uint8Array[];
                    };
                }): _66.Event;
            };
            EventTokenSent: {
                encode(message: _66.EventTokenSent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.EventTokenSent;
                fromJSON(object: any): _66.EventTokenSent;
                toJSON(message: _66.EventTokenSent): unknown;
                fromPartial(object: {
                    sender?: Uint8Array;
                    destinationChain?: string;
                    destinationAddress?: string;
                    symbol?: string;
                    amount?: Uint8Array;
                }): _66.EventTokenSent;
            };
            EventContractCall: {
                encode(message: _66.EventContractCall, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.EventContractCall;
                fromJSON(object: any): _66.EventContractCall;
                toJSON(message: _66.EventContractCall): unknown;
                fromPartial(object: {
                    sender?: Uint8Array;
                    destinationChain?: string;
                    contractAddress?: string;
                    payloadHash?: Uint8Array;
                }): _66.EventContractCall;
            };
            EventContractCallWithToken: {
                encode(message: _66.EventContractCallWithToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.EventContractCallWithToken;
                fromJSON(object: any): _66.EventContractCallWithToken;
                toJSON(message: _66.EventContractCallWithToken): unknown;
                fromPartial(object: {
                    sender?: Uint8Array;
                    destinationChain?: string;
                    contractAddress?: string;
                    payloadHash?: Uint8Array;
                    symbol?: string;
                    amount?: Uint8Array;
                }): _66.EventContractCallWithToken;
            };
            EventTransfer: {
                encode(message: _66.EventTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.EventTransfer;
                fromJSON(object: any): _66.EventTransfer;
                toJSON(message: _66.EventTransfer): unknown;
                fromPartial(object: {
                    to?: Uint8Array;
                    amount?: Uint8Array;
                }): _66.EventTransfer;
            };
            EventTokenDeployed: {
                encode(message: _66.EventTokenDeployed, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.EventTokenDeployed;
                fromJSON(object: any): _66.EventTokenDeployed;
                toJSON(message: _66.EventTokenDeployed): unknown;
                fromPartial(object: {
                    symbol?: string;
                    tokenAddress?: Uint8Array;
                }): _66.EventTokenDeployed;
            };
            EventMultisigOwnershipTransferred: {
                encode(message: _66.EventMultisigOwnershipTransferred, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.EventMultisigOwnershipTransferred;
                fromJSON(object: any): _66.EventMultisigOwnershipTransferred;
                toJSON(message: _66.EventMultisigOwnershipTransferred): unknown;
                fromPartial(object: {
                    preOwners?: Uint8Array[];
                    prevThreshold?: Uint8Array;
                    newOwners?: Uint8Array[];
                    newThreshold?: Uint8Array;
                }): _66.EventMultisigOwnershipTransferred;
            };
            EventMultisigOperatorshipTransferred: {
                encode(message: _66.EventMultisigOperatorshipTransferred, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.EventMultisigOperatorshipTransferred;
                fromJSON(object: any): _66.EventMultisigOperatorshipTransferred;
                toJSON(message: _66.EventMultisigOperatorshipTransferred): unknown;
                fromPartial(object: {
                    newOperators?: Uint8Array[];
                    newThreshold?: Uint8Array;
                    newWeights?: Uint8Array[];
                }): _66.EventMultisigOperatorshipTransferred;
            };
            NetworkInfo: {
                encode(message: _66.NetworkInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.NetworkInfo;
                fromJSON(object: any): _66.NetworkInfo;
                toJSON(message: _66.NetworkInfo): unknown;
                fromPartial(object: {
                    name?: string;
                    id?: Uint8Array;
                }): _66.NetworkInfo;
            };
            BurnerInfo: {
                encode(message: _66.BurnerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.BurnerInfo;
                fromJSON(object: any): _66.BurnerInfo;
                toJSON(message: _66.BurnerInfo): unknown;
                fromPartial(object: {
                    burnerAddress?: Uint8Array;
                    tokenAddress?: Uint8Array;
                    destinationChain?: string;
                    symbol?: string;
                    asset?: string;
                    salt?: Uint8Array;
                }): _66.BurnerInfo;
            };
            ERC20Deposit: {
                encode(message: _66.ERC20Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.ERC20Deposit;
                fromJSON(object: any): _66.ERC20Deposit;
                toJSON(message: _66.ERC20Deposit): unknown;
                fromPartial(object: {
                    txId?: Uint8Array;
                    amount?: Uint8Array;
                    asset?: string;
                    destinationChain?: string;
                    burnerAddress?: Uint8Array;
                }): _66.ERC20Deposit;
            };
            ERC20TokenMetadata: {
                encode(message: _66.ERC20TokenMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.ERC20TokenMetadata;
                fromJSON(object: any): _66.ERC20TokenMetadata;
                toJSON(message: _66.ERC20TokenMetadata): unknown;
                fromPartial(object: {
                    asset?: string;
                    chainId?: Uint8Array;
                    details?: {
                        tokenName?: string;
                        symbol?: string;
                        decimals?: number;
                        capacity?: Uint8Array;
                    };
                    tokenAddress?: string;
                    txHash?: string;
                    status?: _66.Status;
                    isExternal?: boolean;
                    burnerCode?: Uint8Array;
                }): _66.ERC20TokenMetadata;
            };
            TransactionMetadata: {
                encode(message: _66.TransactionMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.TransactionMetadata;
                fromJSON(object: any): _66.TransactionMetadata;
                toJSON(message: _66.TransactionMetadata): unknown;
                fromPartial(object: {
                    rawTx?: Uint8Array;
                    pubKey?: Uint8Array;
                }): _66.TransactionMetadata;
            };
            Command: {
                encode(message: _66.Command, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.Command;
                fromJSON(object: any): _66.Command;
                toJSON(message: _66.Command): unknown;
                fromPartial(object: {
                    id?: Uint8Array;
                    command?: string;
                    params?: Uint8Array;
                    keyId?: string;
                    maxGasCost?: number;
                }): _66.Command;
            };
            CommandBatchMetadata: {
                encode(message: _66.CommandBatchMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.CommandBatchMetadata;
                fromJSON(object: any): _66.CommandBatchMetadata;
                toJSON(message: _66.CommandBatchMetadata): unknown;
                fromPartial(object: {
                    id?: Uint8Array;
                    commandIds?: Uint8Array[];
                    data?: Uint8Array;
                    sigHash?: Uint8Array;
                    status?: _66.BatchedCommandsStatus;
                    keyId?: string;
                    prevBatchedCommandsId?: Uint8Array;
                    signature?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _66.CommandBatchMetadata;
            };
            SigMetadata: {
                encode(message: _66.SigMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.SigMetadata;
                fromJSON(object: any): _66.SigMetadata;
                toJSON(message: _66.SigMetadata): unknown;
                fromPartial(object: {
                    type?: _66.SigType;
                    chain?: string;
                    commandBatchId?: Uint8Array;
                }): _66.SigMetadata;
            };
            TransferKey: {
                encode(message: _66.TransferKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.TransferKey;
                fromJSON(object: any): _66.TransferKey;
                toJSON(message: _66.TransferKey): unknown;
                fromPartial(object: {
                    txId?: Uint8Array;
                    nextKeyId?: string;
                }): _66.TransferKey;
            };
            Asset: {
                encode(message: _66.Asset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.Asset;
                fromJSON(object: any): _66.Asset;
                toJSON(message: _66.Asset): unknown;
                fromPartial(object: {
                    chain?: string;
                    name?: string;
                }): _66.Asset;
            };
            TokenDetails: {
                encode(message: _66.TokenDetails, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.TokenDetails;
                fromJSON(object: any): _66.TokenDetails;
                toJSON(message: _66.TokenDetails): unknown;
                fromPartial(object: {
                    tokenName?: string;
                    symbol?: string;
                    decimals?: number;
                    capacity?: Uint8Array;
                }): _66.TokenDetails;
            };
            Gateway: {
                encode(message: _66.Gateway, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.Gateway;
                fromJSON(object: any): _66.Gateway;
                toJSON(message: _66.Gateway): unknown;
                fromPartial(object: {
                    address?: Uint8Array;
                    status?: _66.Gateway_Status;
                }): _66.Gateway;
            };
            PollMetadata: {
                encode(message: _66.PollMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.PollMetadata;
                fromJSON(object: any): _66.PollMetadata;
                toJSON(message: _66.PollMetadata): unknown;
                fromPartial(object: {
                    chain?: string;
                    txId?: Uint8Array;
                }): _66.PollMetadata;
            };
            SetGatewayRequest: {
                encode(message: _65.SetGatewayRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.SetGatewayRequest;
                fromJSON(object: any): _65.SetGatewayRequest;
                toJSON(message: _65.SetGatewayRequest): unknown;
                fromPartial(object: {
                    sender?: Uint8Array;
                    chain?: string;
                    address?: Uint8Array;
                }): _65.SetGatewayRequest;
            };
            SetGatewayResponse: {
                encode(_: _65.SetGatewayResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.SetGatewayResponse;
                fromJSON(_: any): _65.SetGatewayResponse;
                toJSON(_: _65.SetGatewayResponse): unknown;
                fromPartial(_: {}): _65.SetGatewayResponse;
            };
            ConfirmGatewayTxRequest: {
                encode(message: _65.ConfirmGatewayTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.ConfirmGatewayTxRequest;
                fromJSON(object: any): _65.ConfirmGatewayTxRequest;
                toJSON(message: _65.ConfirmGatewayTxRequest): unknown;
                fromPartial(object: {
                    sender?: Uint8Array;
                    chain?: string;
                    txId?: Uint8Array;
                }): _65.ConfirmGatewayTxRequest;
            };
            ConfirmGatewayTxResponse: {
                encode(_: _65.ConfirmGatewayTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.ConfirmGatewayTxResponse;
                fromJSON(_: any): _65.ConfirmGatewayTxResponse;
                toJSON(_: _65.ConfirmGatewayTxResponse): unknown;
                fromPartial(_: {}): _65.ConfirmGatewayTxResponse;
            };
            ConfirmDepositRequest: {
                encode(message: _65.ConfirmDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.ConfirmDepositRequest;
                fromJSON(object: any): _65.ConfirmDepositRequest;
                toJSON(message: _65.ConfirmDepositRequest): unknown;
                fromPartial(object: {
                    sender?: Uint8Array;
                    chain?: string;
                    txId?: Uint8Array;
                    amount?: Uint8Array;
                    burnerAddress?: Uint8Array;
                }): _65.ConfirmDepositRequest;
            };
            ConfirmDepositResponse: {
                encode(_: _65.ConfirmDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.ConfirmDepositResponse;
                fromJSON(_: any): _65.ConfirmDepositResponse;
                toJSON(_: _65.ConfirmDepositResponse): unknown;
                fromPartial(_: {}): _65.ConfirmDepositResponse;
            };
            ConfirmTokenRequest: {
                encode(message: _65.ConfirmTokenRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.ConfirmTokenRequest;
                fromJSON(object: any): _65.ConfirmTokenRequest;
                toJSON(message: _65.ConfirmTokenRequest): unknown;
                fromPartial(object: {
                    sender?: Uint8Array;
                    chain?: string;
                    txId?: Uint8Array;
                    asset?: {
                        chain?: string;
                        name?: string;
                    };
                }): _65.ConfirmTokenRequest;
            };
            ConfirmTokenResponse: {
                encode(_: _65.ConfirmTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.ConfirmTokenResponse;
                fromJSON(_: any): _65.ConfirmTokenResponse;
                toJSON(_: _65.ConfirmTokenResponse): unknown;
                fromPartial(_: {}): _65.ConfirmTokenResponse;
            };
            ConfirmTransferKeyRequest: {
                encode(message: _65.ConfirmTransferKeyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.ConfirmTransferKeyRequest;
                fromJSON(object: any): _65.ConfirmTransferKeyRequest;
                toJSON(message: _65.ConfirmTransferKeyRequest): unknown;
                fromPartial(object: {
                    sender?: Uint8Array;
                    chain?: string;
                    txId?: Uint8Array;
                }): _65.ConfirmTransferKeyRequest;
            };
            ConfirmTransferKeyResponse: {
                encode(_: _65.ConfirmTransferKeyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.ConfirmTransferKeyResponse;
                fromJSON(_: any): _65.ConfirmTransferKeyResponse;
                toJSON(_: _65.ConfirmTransferKeyResponse): unknown;
                fromPartial(_: {}): _65.ConfirmTransferKeyResponse;
            };
            LinkRequest: {
                encode(message: _65.LinkRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.LinkRequest;
                fromJSON(object: any): _65.LinkRequest;
                toJSON(message: _65.LinkRequest): unknown;
                fromPartial(object: {
                    sender?: Uint8Array;
                    chain?: string;
                    recipientAddr?: string;
                    asset?: string;
                    recipientChain?: string;
                }): _65.LinkRequest;
            };
            LinkResponse: {
                encode(message: _65.LinkResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.LinkResponse;
                fromJSON(object: any): _65.LinkResponse;
                toJSON(message: _65.LinkResponse): unknown;
                fromPartial(object: {
                    depositAddr?: string;
                }): _65.LinkResponse;
            };
            CreateBurnTokensRequest: {
                encode(message: _65.CreateBurnTokensRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.CreateBurnTokensRequest;
                fromJSON(object: any): _65.CreateBurnTokensRequest;
                toJSON(message: _65.CreateBurnTokensRequest): unknown;
                fromPartial(object: {
                    sender?: Uint8Array;
                    chain?: string;
                }): _65.CreateBurnTokensRequest;
            };
            CreateBurnTokensResponse: {
                encode(_: _65.CreateBurnTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.CreateBurnTokensResponse;
                fromJSON(_: any): _65.CreateBurnTokensResponse;
                toJSON(_: _65.CreateBurnTokensResponse): unknown;
                fromPartial(_: {}): _65.CreateBurnTokensResponse;
            };
            CreateDeployTokenRequest: {
                encode(message: _65.CreateDeployTokenRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.CreateDeployTokenRequest;
                fromJSON(object: any): _65.CreateDeployTokenRequest;
                toJSON(message: _65.CreateDeployTokenRequest): unknown;
                fromPartial(object: {
                    sender?: Uint8Array;
                    chain?: string;
                    asset?: {
                        chain?: string;
                        name?: string;
                    };
                    tokenDetails?: {
                        tokenName?: string;
                        symbol?: string;
                        decimals?: number;
                        capacity?: Uint8Array;
                    };
                    address?: Uint8Array;
                    dailyMintLimit?: string;
                }): _65.CreateDeployTokenRequest;
            };
            CreateDeployTokenResponse: {
                encode(_: _65.CreateDeployTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.CreateDeployTokenResponse;
                fromJSON(_: any): _65.CreateDeployTokenResponse;
                toJSON(_: _65.CreateDeployTokenResponse): unknown;
                fromPartial(_: {}): _65.CreateDeployTokenResponse;
            };
            CreatePendingTransfersRequest: {
                encode(message: _65.CreatePendingTransfersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.CreatePendingTransfersRequest;
                fromJSON(object: any): _65.CreatePendingTransfersRequest;
                toJSON(message: _65.CreatePendingTransfersRequest): unknown;
                fromPartial(object: {
                    sender?: Uint8Array;
                    chain?: string;
                }): _65.CreatePendingTransfersRequest;
            };
            CreatePendingTransfersResponse: {
                encode(_: _65.CreatePendingTransfersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.CreatePendingTransfersResponse;
                fromJSON(_: any): _65.CreatePendingTransfersResponse;
                toJSON(_: _65.CreatePendingTransfersResponse): unknown;
                fromPartial(_: {}): _65.CreatePendingTransfersResponse;
            };
            CreateTransferOwnershipRequest: {
                encode(message: _65.CreateTransferOwnershipRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.CreateTransferOwnershipRequest;
                fromJSON(object: any): _65.CreateTransferOwnershipRequest;
                toJSON(message: _65.CreateTransferOwnershipRequest): unknown;
                fromPartial(object: {
                    sender?: Uint8Array;
                    chain?: string;
                    keyId?: string;
                }): _65.CreateTransferOwnershipRequest;
            };
            CreateTransferOwnershipResponse: {
                encode(_: _65.CreateTransferOwnershipResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.CreateTransferOwnershipResponse;
                fromJSON(_: any): _65.CreateTransferOwnershipResponse;
                toJSON(_: _65.CreateTransferOwnershipResponse): unknown;
                fromPartial(_: {}): _65.CreateTransferOwnershipResponse;
            };
            CreateTransferOperatorshipRequest: {
                encode(message: _65.CreateTransferOperatorshipRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.CreateTransferOperatorshipRequest;
                fromJSON(object: any): _65.CreateTransferOperatorshipRequest;
                toJSON(message: _65.CreateTransferOperatorshipRequest): unknown;
                fromPartial(object: {
                    sender?: Uint8Array;
                    chain?: string;
                    keyId?: string;
                }): _65.CreateTransferOperatorshipRequest;
            };
            CreateTransferOperatorshipResponse: {
                encode(_: _65.CreateTransferOperatorshipResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.CreateTransferOperatorshipResponse;
                fromJSON(_: any): _65.CreateTransferOperatorshipResponse;
                toJSON(_: _65.CreateTransferOperatorshipResponse): unknown;
                fromPartial(_: {}): _65.CreateTransferOperatorshipResponse;
            };
            SignCommandsRequest: {
                encode(message: _65.SignCommandsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.SignCommandsRequest;
                fromJSON(object: any): _65.SignCommandsRequest;
                toJSON(message: _65.SignCommandsRequest): unknown;
                fromPartial(object: {
                    sender?: Uint8Array;
                    chain?: string;
                }): _65.SignCommandsRequest;
            };
            SignCommandsResponse: {
                encode(message: _65.SignCommandsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.SignCommandsResponse;
                fromJSON(object: any): _65.SignCommandsResponse;
                toJSON(message: _65.SignCommandsResponse): unknown;
                fromPartial(object: {
                    batchedCommandsId?: Uint8Array;
                    commandCount?: number;
                }): _65.SignCommandsResponse;
            };
            AddChainRequest: {
                encode(message: _65.AddChainRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.AddChainRequest;
                fromJSON(object: any): _65.AddChainRequest;
                toJSON(message: _65.AddChainRequest): unknown;
                fromPartial(object: {
                    sender?: Uint8Array;
                    name?: string;
                    keyType?: _102.KeyType;
                    params?: Uint8Array;
                }): _65.AddChainRequest;
            };
            AddChainResponse: {
                encode(_: _65.AddChainResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.AddChainResponse;
                fromJSON(_: any): _65.AddChainResponse;
                toJSON(_: _65.AddChainResponse): unknown;
                fromPartial(_: {}): _65.AddChainResponse;
            };
            RetryFailedEventRequest: {
                encode(message: _65.RetryFailedEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.RetryFailedEventRequest;
                fromJSON(object: any): _65.RetryFailedEventRequest;
                toJSON(message: _65.RetryFailedEventRequest): unknown;
                fromPartial(object: {
                    sender?: Uint8Array;
                    chain?: string;
                    eventId?: string;
                }): _65.RetryFailedEventRequest;
            };
            RetryFailedEventResponse: {
                encode(_: _65.RetryFailedEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.RetryFailedEventResponse;
                fromJSON(_: any): _65.RetryFailedEventResponse;
                toJSON(_: _65.RetryFailedEventResponse): unknown;
                fromPartial(_: {}): _65.RetryFailedEventResponse;
            };
            tokenTypeFromJSON(object: any): _63.TokenType;
            tokenTypeToJSON(object: _63.TokenType): string;
            TokenType: typeof _63.TokenType;
            DepositQueryParams: {
                encode(message: _63.DepositQueryParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.DepositQueryParams;
                fromJSON(object: any): _63.DepositQueryParams;
                toJSON(message: _63.DepositQueryParams): unknown;
                fromPartial(object: {
                    address?: string;
                    asset?: string;
                    chain?: string;
                }): _63.DepositQueryParams;
            };
            BatchedCommandsRequest: {
                encode(message: _63.BatchedCommandsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.BatchedCommandsRequest;
                fromJSON(object: any): _63.BatchedCommandsRequest;
                toJSON(message: _63.BatchedCommandsRequest): unknown;
                fromPartial(object: {
                    chain?: string;
                    id?: string;
                }): _63.BatchedCommandsRequest;
            };
            BatchedCommandsResponse: {
                encode(message: _63.BatchedCommandsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.BatchedCommandsResponse;
                fromJSON(object: any): _63.BatchedCommandsResponse;
                toJSON(message: _63.BatchedCommandsResponse): unknown;
                fromPartial(object: {
                    id?: string;
                    data?: string;
                    status?: _66.BatchedCommandsStatus;
                    keyId?: string;
                    executeData?: string;
                    prevBatchedCommandsId?: string;
                    commandIds?: string[];
                    proof?: {
                        addresses?: string[];
                        weights?: string[];
                        threshold?: string;
                        signatures?: string[];
                    };
                }): _63.BatchedCommandsResponse;
            };
            KeyAddressRequest: {
                encode(message: _63.KeyAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.KeyAddressRequest;
                fromJSON(object: any): _63.KeyAddressRequest;
                toJSON(message: _63.KeyAddressRequest): unknown;
                fromPartial(object: {
                    chain?: string;
                    keyId?: string;
                }): _63.KeyAddressRequest;
            };
            KeyAddressResponse: {
                encode(message: _63.KeyAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.KeyAddressResponse;
                fromJSON(object: any): _63.KeyAddressResponse;
                toJSON(message: _63.KeyAddressResponse): unknown;
                fromPartial(object: {
                    keyId?: string;
                    addresses?: {
                        address?: string;
                        weight?: string;
                    }[];
                    threshold?: string;
                }): _63.KeyAddressResponse;
            };
            KeyAddressResponse_WeightedAddress: {
                encode(message: _63.KeyAddressResponse_WeightedAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.KeyAddressResponse_WeightedAddress;
                fromJSON(object: any): _63.KeyAddressResponse_WeightedAddress;
                toJSON(message: _63.KeyAddressResponse_WeightedAddress): unknown;
                fromPartial(object: {
                    address?: string;
                    weight?: string;
                }): _63.KeyAddressResponse_WeightedAddress;
            };
            QueryTokenAddressResponse: {
                encode(message: _63.QueryTokenAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryTokenAddressResponse;
                fromJSON(object: any): _63.QueryTokenAddressResponse;
                toJSON(message: _63.QueryTokenAddressResponse): unknown;
                fromPartial(object: {
                    address?: string;
                    confirmed?: boolean;
                }): _63.QueryTokenAddressResponse;
            };
            QueryDepositStateParams: {
                encode(message: _63.QueryDepositStateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryDepositStateParams;
                fromJSON(object: any): _63.QueryDepositStateParams;
                toJSON(message: _63.QueryDepositStateParams): unknown;
                fromPartial(object: {
                    txId?: Uint8Array;
                    burnerAddress?: Uint8Array;
                }): _63.QueryDepositStateParams;
            };
            DepositStateRequest: {
                encode(message: _63.DepositStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.DepositStateRequest;
                fromJSON(object: any): _63.DepositStateRequest;
                toJSON(message: _63.DepositStateRequest): unknown;
                fromPartial(object: {
                    chain?: string;
                    params?: {
                        txId?: Uint8Array;
                        burnerAddress?: Uint8Array;
                    };
                }): _63.DepositStateRequest;
            };
            DepositStateResponse: {
                encode(message: _63.DepositStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.DepositStateResponse;
                fromJSON(object: any): _63.DepositStateResponse;
                toJSON(message: _63.DepositStateResponse): unknown;
                fromPartial(object: {
                    status?: _66.DepositStatus;
                }): _63.DepositStateResponse;
            };
            EventRequest: {
                encode(message: _63.EventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.EventRequest;
                fromJSON(object: any): _63.EventRequest;
                toJSON(message: _63.EventRequest): unknown;
                fromPartial(object: {
                    chain?: string;
                    eventId?: string;
                }): _63.EventRequest;
            };
            EventResponse: {
                encode(message: _63.EventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.EventResponse;
                fromJSON(object: any): _63.EventResponse;
                toJSON(message: _63.EventResponse): unknown;
                fromPartial(object: {
                    event?: {
                        chain?: string;
                        txId?: Uint8Array;
                        index?: any;
                        status?: _66.Event_Status;
                        tokenSent?: {
                            sender?: Uint8Array;
                            destinationChain?: string;
                            destinationAddress?: string;
                            symbol?: string;
                            amount?: Uint8Array;
                        };
                        contractCall?: {
                            sender?: Uint8Array;
                            destinationChain?: string;
                            contractAddress?: string;
                            payloadHash?: Uint8Array;
                        };
                        contractCallWithToken?: {
                            sender?: Uint8Array;
                            destinationChain?: string;
                            contractAddress?: string;
                            payloadHash?: Uint8Array;
                            symbol?: string;
                            amount?: Uint8Array;
                        };
                        transfer?: {
                            to?: Uint8Array;
                            amount?: Uint8Array;
                        };
                        tokenDeployed?: {
                            symbol?: string;
                            tokenAddress?: Uint8Array;
                        };
                        multisigOwnershipTransferred?: {
                            preOwners?: Uint8Array[];
                            prevThreshold?: Uint8Array;
                            newOwners?: Uint8Array[];
                            newThreshold?: Uint8Array;
                        };
                        multisigOperatorshipTransferred?: {
                            newOperators?: Uint8Array[];
                            newThreshold?: Uint8Array;
                            newWeights?: Uint8Array[];
                        };
                    };
                }): _63.EventResponse;
            };
            QueryBurnerAddressResponse: {
                encode(message: _63.QueryBurnerAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryBurnerAddressResponse;
                fromJSON(object: any): _63.QueryBurnerAddressResponse;
                toJSON(message: _63.QueryBurnerAddressResponse): unknown;
                fromPartial(object: {
                    address?: string;
                }): _63.QueryBurnerAddressResponse;
            };
            ChainsRequest: {
                encode(_: _63.ChainsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.ChainsRequest;
                fromJSON(_: any): _63.ChainsRequest;
                toJSON(_: _63.ChainsRequest): unknown;
                fromPartial(_: {}): _63.ChainsRequest;
            };
            ChainsResponse: {
                encode(message: _63.ChainsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.ChainsResponse;
                fromJSON(object: any): _63.ChainsResponse;
                toJSON(message: _63.ChainsResponse): unknown;
                fromPartial(object: {
                    chains?: string[];
                }): _63.ChainsResponse;
            };
            PendingCommandsRequest: {
                encode(message: _63.PendingCommandsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.PendingCommandsRequest;
                fromJSON(object: any): _63.PendingCommandsRequest;
                toJSON(message: _63.PendingCommandsRequest): unknown;
                fromPartial(object: {
                    chain?: string;
                }): _63.PendingCommandsRequest;
            };
            PendingCommandsResponse: {
                encode(message: _63.PendingCommandsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.PendingCommandsResponse;
                fromJSON(object: any): _63.PendingCommandsResponse;
                toJSON(message: _63.PendingCommandsResponse): unknown;
                fromPartial(object: {
                    commands?: {
                        id?: string;
                        type?: string;
                        params?: {
                            [x: string]: string;
                        };
                        keyId?: string;
                        maxGasCost?: number;
                    }[];
                }): _63.PendingCommandsResponse;
            };
            QueryCommandResponse_ParamsEntry: {
                encode(message: _63.QueryCommandResponse_ParamsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryCommandResponse_ParamsEntry;
                fromJSON(object: any): _63.QueryCommandResponse_ParamsEntry;
                toJSON(message: _63.QueryCommandResponse_ParamsEntry): unknown;
                fromPartial(object: {
                    key?: string;
                    value?: string;
                }): _63.QueryCommandResponse_ParamsEntry;
            };
            QueryCommandResponse: {
                encode(message: _63.QueryCommandResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryCommandResponse;
                fromJSON(object: any): _63.QueryCommandResponse;
                toJSON(message: _63.QueryCommandResponse): unknown;
                fromPartial(object: {
                    id?: string;
                    type?: string;
                    params?: {
                        [x: string]: string;
                    };
                    keyId?: string;
                    maxGasCost?: number;
                }): _63.QueryCommandResponse;
            };
            BurnerInfoRequest: {
                encode(message: _63.BurnerInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.BurnerInfoRequest;
                fromJSON(object: any): _63.BurnerInfoRequest;
                toJSON(message: _63.BurnerInfoRequest): unknown;
                fromPartial(object: {
                    address?: Uint8Array;
                }): _63.BurnerInfoRequest;
            };
            BurnerInfoResponse: {
                encode(message: _63.BurnerInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.BurnerInfoResponse;
                fromJSON(object: any): _63.BurnerInfoResponse;
                toJSON(message: _63.BurnerInfoResponse): unknown;
                fromPartial(object: {
                    chain?: string;
                    burnerInfo?: {
                        burnerAddress?: Uint8Array;
                        tokenAddress?: Uint8Array;
                        destinationChain?: string;
                        symbol?: string;
                        asset?: string;
                        salt?: Uint8Array;
                    };
                }): _63.BurnerInfoResponse;
            };
            ConfirmationHeightRequest: {
                encode(message: _63.ConfirmationHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.ConfirmationHeightRequest;
                fromJSON(object: any): _63.ConfirmationHeightRequest;
                toJSON(message: _63.ConfirmationHeightRequest): unknown;
                fromPartial(object: {
                    chain?: string;
                }): _63.ConfirmationHeightRequest;
            };
            ConfirmationHeightResponse: {
                encode(message: _63.ConfirmationHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.ConfirmationHeightResponse;
                fromJSON(object: any): _63.ConfirmationHeightResponse;
                toJSON(message: _63.ConfirmationHeightResponse): unknown;
                fromPartial(object: {
                    height?: any;
                }): _63.ConfirmationHeightResponse;
            };
            GatewayAddressRequest: {
                encode(message: _63.GatewayAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.GatewayAddressRequest;
                fromJSON(object: any): _63.GatewayAddressRequest;
                toJSON(message: _63.GatewayAddressRequest): unknown;
                fromPartial(object: {
                    chain?: string;
                }): _63.GatewayAddressRequest;
            };
            GatewayAddressResponse: {
                encode(message: _63.GatewayAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.GatewayAddressResponse;
                fromJSON(object: any): _63.GatewayAddressResponse;
                toJSON(message: _63.GatewayAddressResponse): unknown;
                fromPartial(object: {
                    address?: string;
                }): _63.GatewayAddressResponse;
            };
            BytecodeRequest: {
                encode(message: _63.BytecodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.BytecodeRequest;
                fromJSON(object: any): _63.BytecodeRequest;
                toJSON(message: _63.BytecodeRequest): unknown;
                fromPartial(object: {
                    chain?: string;
                    contract?: string;
                }): _63.BytecodeRequest;
            };
            BytecodeResponse: {
                encode(message: _63.BytecodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.BytecodeResponse;
                fromJSON(object: any): _63.BytecodeResponse;
                toJSON(message: _63.BytecodeResponse): unknown;
                fromPartial(object: {
                    bytecode?: string;
                }): _63.BytecodeResponse;
            };
            ERC20TokensRequest: {
                encode(message: _63.ERC20TokensRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.ERC20TokensRequest;
                fromJSON(object: any): _63.ERC20TokensRequest;
                toJSON(message: _63.ERC20TokensRequest): unknown;
                fromPartial(object: {
                    chain?: string;
                    type?: _63.TokenType;
                }): _63.ERC20TokensRequest;
            };
            ERC20TokensResponse: {
                encode(message: _63.ERC20TokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.ERC20TokensResponse;
                fromJSON(object: any): _63.ERC20TokensResponse;
                toJSON(message: _63.ERC20TokensResponse): unknown;
                fromPartial(object: {
                    tokens?: {
                        asset?: string;
                        symbol?: string;
                    }[];
                }): _63.ERC20TokensResponse;
            };
            ERC20TokensResponse_Token: {
                encode(message: _63.ERC20TokensResponse_Token, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.ERC20TokensResponse_Token;
                fromJSON(object: any): _63.ERC20TokensResponse_Token;
                toJSON(message: _63.ERC20TokensResponse_Token): unknown;
                fromPartial(object: {
                    asset?: string;
                    symbol?: string;
                }): _63.ERC20TokensResponse_Token;
            };
            TokenInfoRequest: {
                encode(message: _63.TokenInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.TokenInfoRequest;
                fromJSON(object: any): _63.TokenInfoRequest;
                toJSON(message: _63.TokenInfoRequest): unknown;
                fromPartial(object: {
                    chain?: string;
                    asset?: string;
                    symbol?: string;
                }): _63.TokenInfoRequest;
            };
            TokenInfoResponse: {
                encode(message: _63.TokenInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.TokenInfoResponse;
                fromJSON(object: any): _63.TokenInfoResponse;
                toJSON(message: _63.TokenInfoResponse): unknown;
                fromPartial(object: {
                    asset?: string;
                    details?: {
                        tokenName?: string;
                        symbol?: string;
                        decimals?: number;
                        capacity?: Uint8Array;
                    };
                    address?: string;
                    confirmed?: boolean;
                    isExternal?: boolean;
                    burnerCodeHash?: string;
                }): _63.TokenInfoResponse;
            };
            Proof: {
                encode(message: _63.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.Proof;
                fromJSON(object: any): _63.Proof;
                toJSON(message: _63.Proof): unknown;
                fromPartial(object: {
                    addresses?: string[];
                    weights?: string[];
                    threshold?: string;
                    signatures?: string[];
                }): _63.Proof;
            };
            Params: {
                encode(message: _62.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.Params;
                fromJSON(object: any): _62.Params;
                toJSON(message: _62.Params): unknown;
                fromPartial(object: {
                    chain?: string;
                    confirmationHeight?: any;
                    network?: string;
                    tokenCode?: Uint8Array;
                    burnable?: Uint8Array;
                    revoteLockingPeriod?: any;
                    networks?: {
                        name?: string;
                        id?: Uint8Array;
                    }[];
                    votingThreshold?: {
                        numerator?: any;
                        denominator?: any;
                    };
                    minVoterCount?: any;
                    commandsGasLimit?: number;
                    votingGracePeriod?: any;
                    endBlockerLimit?: any;
                    transferLimit?: any;
                }): _62.Params;
            };
            PendingChain: {
                encode(message: _62.PendingChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.PendingChain;
                fromJSON(object: any): _62.PendingChain;
                toJSON(message: _62.PendingChain): unknown;
                fromPartial(object: {
                    params?: {
                        chain?: string;
                        confirmationHeight?: any;
                        network?: string;
                        tokenCode?: Uint8Array;
                        burnable?: Uint8Array;
                        revoteLockingPeriod?: any;
                        networks?: {
                            name?: string;
                            id?: Uint8Array;
                        }[];
                        votingThreshold?: {
                            numerator?: any;
                            denominator?: any;
                        };
                        minVoterCount?: any;
                        commandsGasLimit?: number;
                        votingGracePeriod?: any;
                        endBlockerLimit?: any;
                        transferLimit?: any;
                    };
                    chain?: {
                        name?: string;
                        supportsForeignAssets?: boolean;
                        keyType?: _102.KeyType;
                        module?: string;
                    };
                }): _62.PendingChain;
            };
            GenesisState: {
                encode(message: _61.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.GenesisState;
                fromJSON(object: any): _61.GenesisState;
                toJSON(message: _61.GenesisState): unknown;
                fromPartial(object: {
                    chains?: {
                        params?: {
                            chain?: string;
                            confirmationHeight?: any;
                            network?: string;
                            tokenCode?: Uint8Array;
                            burnable?: Uint8Array;
                            revoteLockingPeriod?: any;
                            networks?: {
                                name?: string;
                                id?: Uint8Array;
                            }[];
                            votingThreshold?: {
                                numerator?: any;
                                denominator?: any;
                            };
                            minVoterCount?: any;
                            commandsGasLimit?: number;
                            votingGracePeriod?: any;
                            endBlockerLimit?: any;
                            transferLimit?: any;
                        };
                        burnerInfos?: {
                            burnerAddress?: Uint8Array;
                            tokenAddress?: Uint8Array;
                            destinationChain?: string;
                            symbol?: string;
                            asset?: string;
                            salt?: Uint8Array;
                        }[];
                        commandQueue?: {
                            items?: {
                                [x: string]: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                };
                            };
                        };
                        confirmedDeposits?: {
                            txId?: Uint8Array;
                            amount?: Uint8Array;
                            asset?: string;
                            destinationChain?: string;
                            burnerAddress?: Uint8Array;
                        }[];
                        burnedDeposits?: {
                            txId?: Uint8Array;
                            amount?: Uint8Array;
                            asset?: string;
                            destinationChain?: string;
                            burnerAddress?: Uint8Array;
                        }[];
                        commandBatches?: {
                            id?: Uint8Array;
                            commandIds?: Uint8Array[];
                            data?: Uint8Array;
                            sigHash?: Uint8Array;
                            status?: _66.BatchedCommandsStatus;
                            keyId?: string;
                            prevBatchedCommandsId?: Uint8Array;
                            signature?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                        gateway?: {
                            address?: Uint8Array;
                            status?: _66.Gateway_Status;
                        };
                        tokens?: {
                            asset?: string;
                            chainId?: Uint8Array;
                            details?: {
                                tokenName?: string;
                                symbol?: string;
                                decimals?: number;
                                capacity?: Uint8Array;
                            };
                            tokenAddress?: string;
                            txHash?: string;
                            status?: _66.Status;
                            isExternal?: boolean;
                            burnerCode?: Uint8Array;
                        }[];
                        events?: {
                            chain?: string;
                            txId?: Uint8Array;
                            index?: any;
                            status?: _66.Event_Status;
                            tokenSent?: {
                                sender?: Uint8Array;
                                destinationChain?: string;
                                destinationAddress?: string;
                                symbol?: string;
                                amount?: Uint8Array;
                            };
                            contractCall?: {
                                sender?: Uint8Array;
                                destinationChain?: string;
                                contractAddress?: string;
                                payloadHash?: Uint8Array;
                            };
                            contractCallWithToken?: {
                                sender?: Uint8Array;
                                destinationChain?: string;
                                contractAddress?: string;
                                payloadHash?: Uint8Array;
                                symbol?: string;
                                amount?: Uint8Array;
                            };
                            transfer?: {
                                to?: Uint8Array;
                                amount?: Uint8Array;
                            };
                            tokenDeployed?: {
                                symbol?: string;
                                tokenAddress?: Uint8Array;
                            };
                            multisigOwnershipTransferred?: {
                                preOwners?: Uint8Array[];
                                prevThreshold?: Uint8Array;
                                newOwners?: Uint8Array[];
                                newThreshold?: Uint8Array;
                            };
                            multisigOperatorshipTransferred?: {
                                newOperators?: Uint8Array[];
                                newThreshold?: Uint8Array;
                                newWeights?: Uint8Array[];
                            };
                        }[];
                        confirmedEventQueue?: {
                            items?: {
                                [x: string]: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                };
                            };
                        };
                    }[];
                }): _61.GenesisState;
            };
            GenesisState_Chain: {
                encode(message: _61.GenesisState_Chain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.GenesisState_Chain;
                fromJSON(object: any): _61.GenesisState_Chain;
                toJSON(message: _61.GenesisState_Chain): unknown;
                fromPartial(object: {
                    params?: {
                        chain?: string;
                        confirmationHeight?: any;
                        network?: string;
                        tokenCode?: Uint8Array;
                        burnable?: Uint8Array;
                        revoteLockingPeriod?: any;
                        networks?: {
                            name?: string;
                            id?: Uint8Array;
                        }[];
                        votingThreshold?: {
                            numerator?: any;
                            denominator?: any;
                        };
                        minVoterCount?: any;
                        commandsGasLimit?: number;
                        votingGracePeriod?: any;
                        endBlockerLimit?: any;
                        transferLimit?: any;
                    };
                    burnerInfos?: {
                        burnerAddress?: Uint8Array;
                        tokenAddress?: Uint8Array;
                        destinationChain?: string;
                        symbol?: string;
                        asset?: string;
                        salt?: Uint8Array;
                    }[];
                    commandQueue?: {
                        items?: {
                            [x: string]: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                            };
                        };
                    };
                    confirmedDeposits?: {
                        txId?: Uint8Array;
                        amount?: Uint8Array;
                        asset?: string;
                        destinationChain?: string;
                        burnerAddress?: Uint8Array;
                    }[];
                    burnedDeposits?: {
                        txId?: Uint8Array;
                        amount?: Uint8Array;
                        asset?: string;
                        destinationChain?: string;
                        burnerAddress?: Uint8Array;
                    }[];
                    commandBatches?: {
                        id?: Uint8Array;
                        commandIds?: Uint8Array[];
                        data?: Uint8Array;
                        sigHash?: Uint8Array;
                        status?: _66.BatchedCommandsStatus;
                        keyId?: string;
                        prevBatchedCommandsId?: Uint8Array;
                        signature?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    gateway?: {
                        address?: Uint8Array;
                        status?: _66.Gateway_Status;
                    };
                    tokens?: {
                        asset?: string;
                        chainId?: Uint8Array;
                        details?: {
                            tokenName?: string;
                            symbol?: string;
                            decimals?: number;
                            capacity?: Uint8Array;
                        };
                        tokenAddress?: string;
                        txHash?: string;
                        status?: _66.Status;
                        isExternal?: boolean;
                        burnerCode?: Uint8Array;
                    }[];
                    events?: {
                        chain?: string;
                        txId?: Uint8Array;
                        index?: any;
                        status?: _66.Event_Status;
                        tokenSent?: {
                            sender?: Uint8Array;
                            destinationChain?: string;
                            destinationAddress?: string;
                            symbol?: string;
                            amount?: Uint8Array;
                        };
                        contractCall?: {
                            sender?: Uint8Array;
                            destinationChain?: string;
                            contractAddress?: string;
                            payloadHash?: Uint8Array;
                        };
                        contractCallWithToken?: {
                            sender?: Uint8Array;
                            destinationChain?: string;
                            contractAddress?: string;
                            payloadHash?: Uint8Array;
                            symbol?: string;
                            amount?: Uint8Array;
                        };
                        transfer?: {
                            to?: Uint8Array;
                            amount?: Uint8Array;
                        };
                        tokenDeployed?: {
                            symbol?: string;
                            tokenAddress?: Uint8Array;
                        };
                        multisigOwnershipTransferred?: {
                            preOwners?: Uint8Array[];
                            prevThreshold?: Uint8Array;
                            newOwners?: Uint8Array[];
                            newThreshold?: Uint8Array;
                        };
                        multisigOperatorshipTransferred?: {
                            newOperators?: Uint8Array[];
                            newThreshold?: Uint8Array;
                            newWeights?: Uint8Array[];
                        };
                    }[];
                    confirmedEventQueue?: {
                        items?: {
                            [x: string]: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                            };
                        };
                    };
                }): _61.GenesisState_Chain;
            };
            PollFailed: {
                encode(message: _60.PollFailed, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.PollFailed;
                fromJSON(object: any): _60.PollFailed;
                toJSON(message: _60.PollFailed): unknown;
                fromPartial(object: {
                    txId?: Uint8Array;
                    chain?: string;
                    pollId?: any;
                }): _60.PollFailed;
            };
            PollExpired: {
                encode(message: _60.PollExpired, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.PollExpired;
                fromJSON(object: any): _60.PollExpired;
                toJSON(message: _60.PollExpired): unknown;
                fromPartial(object: {
                    txId?: Uint8Array;
                    chain?: string;
                    pollId?: any;
                }): _60.PollExpired;
            };
            PollCompleted: {
                encode(message: _60.PollCompleted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.PollCompleted;
                fromJSON(object: any): _60.PollCompleted;
                toJSON(message: _60.PollCompleted): unknown;
                fromPartial(object: {
                    txId?: Uint8Array;
                    chain?: string;
                    pollId?: any;
                }): _60.PollCompleted;
            };
            NoEventsConfirmed: {
                encode(message: _60.NoEventsConfirmed, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.NoEventsConfirmed;
                fromJSON(object: any): _60.NoEventsConfirmed;
                toJSON(message: _60.NoEventsConfirmed): unknown;
                fromPartial(object: {
                    txId?: Uint8Array;
                    chain?: string;
                    pollId?: any;
                }): _60.NoEventsConfirmed;
            };
            ConfirmKeyTransferStarted: {
                encode(message: _60.ConfirmKeyTransferStarted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.ConfirmKeyTransferStarted;
                fromJSON(object: any): _60.ConfirmKeyTransferStarted;
                toJSON(message: _60.ConfirmKeyTransferStarted): unknown;
                fromPartial(object: {
                    chain?: string;
                    txId?: Uint8Array;
                    gatewayAddress?: Uint8Array;
                    confirmationHeight?: any;
                    participants?: {
                        pollId?: any;
                        participants?: Uint8Array[];
                    };
                }): _60.ConfirmKeyTransferStarted;
            };
            ConfirmGatewayTxStarted: {
                encode(message: _60.ConfirmGatewayTxStarted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.ConfirmGatewayTxStarted;
                fromJSON(object: any): _60.ConfirmGatewayTxStarted;
                toJSON(message: _60.ConfirmGatewayTxStarted): unknown;
                fromPartial(object: {
                    txId?: Uint8Array;
                    chain?: string;
                    gatewayAddress?: Uint8Array;
                    confirmationHeight?: any;
                    participants?: {
                        pollId?: any;
                        participants?: Uint8Array[];
                    };
                }): _60.ConfirmGatewayTxStarted;
            };
            ConfirmDepositStarted: {
                encode(message: _60.ConfirmDepositStarted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.ConfirmDepositStarted;
                fromJSON(object: any): _60.ConfirmDepositStarted;
                toJSON(message: _60.ConfirmDepositStarted): unknown;
                fromPartial(object: {
                    txId?: Uint8Array;
                    chain?: string;
                    depositAddress?: Uint8Array;
                    tokenAddress?: Uint8Array;
                    confirmationHeight?: any;
                    participants?: {
                        pollId?: any;
                        participants?: Uint8Array[];
                    };
                    asset?: string;
                }): _60.ConfirmDepositStarted;
            };
            ConfirmTokenStarted: {
                encode(message: _60.ConfirmTokenStarted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.ConfirmTokenStarted;
                fromJSON(object: any): _60.ConfirmTokenStarted;
                toJSON(message: _60.ConfirmTokenStarted): unknown;
                fromPartial(object: {
                    txId?: Uint8Array;
                    chain?: string;
                    gatewayAddress?: Uint8Array;
                    tokenAddress?: Uint8Array;
                    tokenDetails?: {
                        tokenName?: string;
                        symbol?: string;
                        decimals?: number;
                        capacity?: Uint8Array;
                    };
                    confirmationHeight?: any;
                    participants?: {
                        pollId?: any;
                        participants?: Uint8Array[];
                    };
                }): _60.ConfirmTokenStarted;
            };
            ChainAdded: {
                encode(message: _60.ChainAdded, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.ChainAdded;
                fromJSON(object: any): _60.ChainAdded;
                toJSON(message: _60.ChainAdded): unknown;
                fromPartial(object: {
                    chain?: string;
                }): _60.ChainAdded;
            };
            CommandBatchSigned: {
                encode(message: _60.CommandBatchSigned, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.CommandBatchSigned;
                fromJSON(object: any): _60.CommandBatchSigned;
                toJSON(message: _60.CommandBatchSigned): unknown;
                fromPartial(object: {
                    chain?: string;
                    commandBatchId?: Uint8Array;
                }): _60.CommandBatchSigned;
            };
            CommandBatchAborted: {
                encode(message: _60.CommandBatchAborted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.CommandBatchAborted;
                fromJSON(object: any): _60.CommandBatchAborted;
                toJSON(message: _60.CommandBatchAborted): unknown;
                fromPartial(object: {
                    chain?: string;
                    commandBatchId?: Uint8Array;
                }): _60.CommandBatchAborted;
            };
            EVMEventConfirmed: {
                encode(message: _60.EVMEventConfirmed, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.EVMEventConfirmed;
                fromJSON(object: any): _60.EVMEventConfirmed;
                toJSON(message: _60.EVMEventConfirmed): unknown;
                fromPartial(object: {
                    chain?: string;
                    eventId?: string;
                    type?: string;
                }): _60.EVMEventConfirmed;
            };
            EVMEventCompleted: {
                encode(message: _60.EVMEventCompleted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.EVMEventCompleted;
                fromJSON(object: any): _60.EVMEventCompleted;
                toJSON(message: _60.EVMEventCompleted): unknown;
                fromPartial(object: {
                    chain?: string;
                    eventId?: string;
                    type?: string;
                }): _60.EVMEventCompleted;
            };
            EVMEventFailed: {
                encode(message: _60.EVMEventFailed, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.EVMEventFailed;
                fromJSON(object: any): _60.EVMEventFailed;
                toJSON(message: _60.EVMEventFailed): unknown;
                fromPartial(object: {
                    chain?: string;
                    eventId?: string;
                    type?: string;
                }): _60.EVMEventFailed;
            };
            EVMEventRetryFailed: {
                encode(message: _60.EVMEventRetryFailed, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.EVMEventRetryFailed;
                fromJSON(object: any): _60.EVMEventRetryFailed;
                toJSON(message: _60.EVMEventRetryFailed): unknown;
                fromPartial(object: {
                    chain?: string;
                    eventId?: string;
                    type?: string;
                }): _60.EVMEventRetryFailed;
            };
            ContractCallApproved: {
                encode(message: _60.ContractCallApproved, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.ContractCallApproved;
                fromJSON(object: any): _60.ContractCallApproved;
                toJSON(message: _60.ContractCallApproved): unknown;
                fromPartial(object: {
                    chain?: string;
                    eventId?: string;
                    commandId?: Uint8Array;
                    sender?: string;
                    destinationChain?: string;
                    contractAddress?: string;
                    payloadHash?: Uint8Array;
                }): _60.ContractCallApproved;
            };
            ContractCallWithMintApproved: {
                encode(message: _60.ContractCallWithMintApproved, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.ContractCallWithMintApproved;
                fromJSON(object: any): _60.ContractCallWithMintApproved;
                toJSON(message: _60.ContractCallWithMintApproved): unknown;
                fromPartial(object: {
                    chain?: string;
                    eventId?: string;
                    commandId?: Uint8Array;
                    sender?: string;
                    destinationChain?: string;
                    contractAddress?: string;
                    payloadHash?: Uint8Array;
                    asset?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _60.ContractCallWithMintApproved;
            };
            TokenSent: {
                encode(message: _60.TokenSent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.TokenSent;
                fromJSON(object: any): _60.TokenSent;
                toJSON(message: _60.TokenSent): unknown;
                fromPartial(object: {
                    chain?: string;
                    eventId?: string;
                    transferId?: any;
                    sender?: string;
                    destinationChain?: string;
                    destinationAddress?: string;
                    asset?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _60.TokenSent;
            };
            MintCommand: {
                encode(message: _60.MintCommand, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.MintCommand;
                fromJSON(object: any): _60.MintCommand;
                toJSON(message: _60.MintCommand): unknown;
                fromPartial(object: {
                    chain?: string;
                    transferId?: any;
                    commandId?: Uint8Array;
                    destinationChain?: string;
                    destinationAddress?: string;
                    asset?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _60.MintCommand;
            };
            BurnCommand: {
                encode(message: _60.BurnCommand, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.BurnCommand;
                fromJSON(object: any): _60.BurnCommand;
                toJSON(message: _60.BurnCommand): unknown;
                fromPartial(object: {
                    chain?: string;
                    commandId?: Uint8Array;
                    destinationChain?: string;
                    depositAddress?: string;
                    asset?: string;
                }): _60.BurnCommand;
            };
        };
    }
    namespace multisig {
        namespace exported {
            const v1beta1: {
                multisigStateFromJSON(object: any): _67.MultisigState;
                multisigStateToJSON(object: _67.MultisigState): string;
                keyStateFromJSON(object: any): _67.KeyState;
                keyStateToJSON(object: _67.KeyState): string;
                MultisigState: typeof _67.MultisigState;
                KeyState: typeof _67.KeyState;
            };
        }
        const v1beta1: {
            Key_PubKeysEntry: {
                encode(message: _74.Key_PubKeysEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.Key_PubKeysEntry;
                fromJSON(object: any): _74.Key_PubKeysEntry;
                toJSON(message: _74.Key_PubKeysEntry): unknown;
                fromPartial(object: {
                    key?: string;
                    value?: Uint8Array;
                }): _74.Key_PubKeysEntry;
            };
            Key: {
                encode(message: _74.Key, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.Key;
                fromJSON(object: any): _74.Key;
                toJSON(message: _74.Key): unknown;
                fromPartial(object: {
                    id?: string;
                    snapshot?: {
                        timestamp?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        height?: any;
                        participants?: {
                            [x: string]: {
                                address?: Uint8Array;
                                weight?: Uint8Array;
                            };
                        };
                        bondedWeight?: Uint8Array;
                    };
                    pubKeys?: {
                        [x: string]: Uint8Array;
                    };
                    signingThreshold?: {
                        numerator?: any;
                        denominator?: any;
                    };
                    state?: _67.KeyState;
                }): _74.Key;
            };
            KeygenSession_IsPubKeyReceivedEntry: {
                encode(message: _74.KeygenSession_IsPubKeyReceivedEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.KeygenSession_IsPubKeyReceivedEntry;
                fromJSON(object: any): _74.KeygenSession_IsPubKeyReceivedEntry;
                toJSON(message: _74.KeygenSession_IsPubKeyReceivedEntry): unknown;
                fromPartial(object: {
                    key?: string;
                    value?: boolean;
                }): _74.KeygenSession_IsPubKeyReceivedEntry;
            };
            KeygenSession: {
                encode(message: _74.KeygenSession, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.KeygenSession;
                fromJSON(object: any): _74.KeygenSession;
                toJSON(message: _74.KeygenSession): unknown;
                fromPartial(object: {
                    key?: {
                        id?: string;
                        snapshot?: {
                            timestamp?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            height?: any;
                            participants?: {
                                [x: string]: {
                                    address?: Uint8Array;
                                    weight?: Uint8Array;
                                };
                            };
                            bondedWeight?: Uint8Array;
                        };
                        pubKeys?: {
                            [x: string]: Uint8Array;
                        };
                        signingThreshold?: {
                            numerator?: any;
                            denominator?: any;
                        };
                        state?: _67.KeyState;
                    };
                    state?: _67.MultisigState;
                    keygenThreshold?: {
                        numerator?: any;
                        denominator?: any;
                    };
                    expiresAt?: any;
                    completedAt?: any;
                    isPubKeyReceived?: {
                        [x: string]: boolean;
                    };
                    gracePeriod?: any;
                }): _74.KeygenSession;
            };
            MultiSig_SigsEntry: {
                encode(message: _74.MultiSig_SigsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.MultiSig_SigsEntry;
                fromJSON(object: any): _74.MultiSig_SigsEntry;
                toJSON(message: _74.MultiSig_SigsEntry): unknown;
                fromPartial(object: {
                    key?: string;
                    value?: Uint8Array;
                }): _74.MultiSig_SigsEntry;
            };
            MultiSig: {
                encode(message: _74.MultiSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.MultiSig;
                fromJSON(object: any): _74.MultiSig;
                toJSON(message: _74.MultiSig): unknown;
                fromPartial(object: {
                    keyId?: string;
                    payloadHash?: Uint8Array;
                    sigs?: {
                        [x: string]: Uint8Array;
                    };
                }): _74.MultiSig;
            };
            SigningSession: {
                encode(message: _74.SigningSession, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.SigningSession;
                fromJSON(object: any): _74.SigningSession;
                toJSON(message: _74.SigningSession): unknown;
                fromPartial(object: {
                    id?: any;
                    multiSig?: {
                        keyId?: string;
                        payloadHash?: Uint8Array;
                        sigs?: {
                            [x: string]: Uint8Array;
                        };
                    };
                    state?: _67.MultisigState;
                    key?: {
                        id?: string;
                        snapshot?: {
                            timestamp?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            height?: any;
                            participants?: {
                                [x: string]: {
                                    address?: Uint8Array;
                                    weight?: Uint8Array;
                                };
                            };
                            bondedWeight?: Uint8Array;
                        };
                        pubKeys?: {
                            [x: string]: Uint8Array;
                        };
                        signingThreshold?: {
                            numerator?: any;
                            denominator?: any;
                        };
                        state?: _67.KeyState;
                    };
                    expiresAt?: any;
                    completedAt?: any;
                    gracePeriod?: any;
                    module?: string;
                    moduleMetadata?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _74.SigningSession;
            };
            KeyEpoch: {
                encode(message: _74.KeyEpoch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.KeyEpoch;
                fromJSON(object: any): _74.KeyEpoch;
                toJSON(message: _74.KeyEpoch): unknown;
                fromPartial(object: {
                    epoch?: any;
                    chain?: string;
                    keyId?: string;
                }): _74.KeyEpoch;
            };
            StartKeygenRequest: {
                encode(message: _73.StartKeygenRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.StartKeygenRequest;
                fromJSON(object: any): _73.StartKeygenRequest;
                toJSON(message: _73.StartKeygenRequest): unknown;
                fromPartial(object: {
                    sender?: string;
                    keyId?: string;
                }): _73.StartKeygenRequest;
            };
            StartKeygenResponse: {
                encode(_: _73.StartKeygenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.StartKeygenResponse;
                fromJSON(_: any): _73.StartKeygenResponse;
                toJSON(_: _73.StartKeygenResponse): unknown;
                fromPartial(_: {}): _73.StartKeygenResponse;
            };
            SubmitPubKeyRequest: {
                encode(message: _73.SubmitPubKeyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.SubmitPubKeyRequest;
                fromJSON(object: any): _73.SubmitPubKeyRequest;
                toJSON(message: _73.SubmitPubKeyRequest): unknown;
                fromPartial(object: {
                    sender?: string;
                    keyId?: string;
                    pubKey?: Uint8Array;
                    signature?: Uint8Array;
                }): _73.SubmitPubKeyRequest;
            };
            SubmitPubKeyResponse: {
                encode(_: _73.SubmitPubKeyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.SubmitPubKeyResponse;
                fromJSON(_: any): _73.SubmitPubKeyResponse;
                toJSON(_: _73.SubmitPubKeyResponse): unknown;
                fromPartial(_: {}): _73.SubmitPubKeyResponse;
            };
            SubmitSignatureRequest: {
                encode(message: _73.SubmitSignatureRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.SubmitSignatureRequest;
                fromJSON(object: any): _73.SubmitSignatureRequest;
                toJSON(message: _73.SubmitSignatureRequest): unknown;
                fromPartial(object: {
                    sender?: string;
                    sigId?: any;
                    signature?: Uint8Array;
                }): _73.SubmitSignatureRequest;
            };
            SubmitSignatureResponse: {
                encode(_: _73.SubmitSignatureResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.SubmitSignatureResponse;
                fromJSON(_: any): _73.SubmitSignatureResponse;
                toJSON(_: _73.SubmitSignatureResponse): unknown;
                fromPartial(_: {}): _73.SubmitSignatureResponse;
            };
            RotateKeyRequest: {
                encode(message: _73.RotateKeyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.RotateKeyRequest;
                fromJSON(object: any): _73.RotateKeyRequest;
                toJSON(message: _73.RotateKeyRequest): unknown;
                fromPartial(object: {
                    sender?: Uint8Array;
                    chain?: string;
                    keyId?: string;
                }): _73.RotateKeyRequest;
            };
            RotateKeyResponse: {
                encode(_: _73.RotateKeyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.RotateKeyResponse;
                fromJSON(_: any): _73.RotateKeyResponse;
                toJSON(_: _73.RotateKeyResponse): unknown;
                fromPartial(_: {}): _73.RotateKeyResponse;
            };
            KeyIDRequest: {
                encode(message: _71.KeyIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.KeyIDRequest;
                fromJSON(object: any): _71.KeyIDRequest;
                toJSON(message: _71.KeyIDRequest): unknown;
                fromPartial(object: {
                    chain?: string;
                }): _71.KeyIDRequest;
            };
            KeyIDResponse: {
                encode(message: _71.KeyIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.KeyIDResponse;
                fromJSON(object: any): _71.KeyIDResponse;
                toJSON(message: _71.KeyIDResponse): unknown;
                fromPartial(object: {
                    keyId?: string;
                }): _71.KeyIDResponse;
            };
            NextKeyIDRequest: {
                encode(message: _71.NextKeyIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.NextKeyIDRequest;
                fromJSON(object: any): _71.NextKeyIDRequest;
                toJSON(message: _71.NextKeyIDRequest): unknown;
                fromPartial(object: {
                    chain?: string;
                }): _71.NextKeyIDRequest;
            };
            NextKeyIDResponse: {
                encode(message: _71.NextKeyIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.NextKeyIDResponse;
                fromJSON(object: any): _71.NextKeyIDResponse;
                toJSON(message: _71.NextKeyIDResponse): unknown;
                fromPartial(object: {
                    keyId?: string;
                }): _71.NextKeyIDResponse;
            };
            KeyRequest: {
                encode(message: _71.KeyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.KeyRequest;
                fromJSON(object: any): _71.KeyRequest;
                toJSON(message: _71.KeyRequest): unknown;
                fromPartial(object: {
                    keyId?: string;
                }): _71.KeyRequest;
            };
            KeygenParticipant: {
                encode(message: _71.KeygenParticipant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.KeygenParticipant;
                fromJSON(object: any): _71.KeygenParticipant;
                toJSON(message: _71.KeygenParticipant): unknown;
                fromPartial(object: {
                    address?: string;
                    weight?: Uint8Array;
                    pubKey?: string;
                }): _71.KeygenParticipant;
            };
            KeyResponse: {
                encode(message: _71.KeyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.KeyResponse;
                fromJSON(object: any): _71.KeyResponse;
                toJSON(message: _71.KeyResponse): unknown;
                fromPartial(object: {
                    keyId?: string;
                    state?: _67.KeyState;
                    startedAt?: any;
                    startedAtTimestamp?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    thresholdWeight?: Uint8Array;
                    bondedWeight?: Uint8Array;
                    participants?: {
                        address?: string;
                        weight?: Uint8Array;
                        pubKey?: string;
                    }[];
                }): _71.KeyResponse;
            };
            KeygenSessionRequest: {
                encode(message: _71.KeygenSessionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.KeygenSessionRequest;
                fromJSON(object: any): _71.KeygenSessionRequest;
                toJSON(message: _71.KeygenSessionRequest): unknown;
                fromPartial(object: {
                    keyId?: string;
                }): _71.KeygenSessionRequest;
            };
            KeygenSessionResponse: {
                encode(message: _71.KeygenSessionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.KeygenSessionResponse;
                fromJSON(object: any): _71.KeygenSessionResponse;
                toJSON(message: _71.KeygenSessionResponse): unknown;
                fromPartial(object: {
                    startedAt?: any;
                    startedAtTimestamp?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    expiresAt?: any;
                    completedAt?: any;
                    gracePeriod?: any;
                    state?: _67.MultisigState;
                    keygenThresholdWeight?: Uint8Array;
                    signingThresholdWeight?: Uint8Array;
                    bondedWeight?: Uint8Array;
                    participants?: {
                        address?: string;
                        weight?: Uint8Array;
                        pubKey?: string;
                    }[];
                }): _71.KeygenSessionResponse;
            };
            Params: {
                encode(message: _70.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.Params;
                fromJSON(object: any): _70.Params;
                toJSON(message: _70.Params): unknown;
                fromPartial(object: {
                    keygenThreshold?: {
                        numerator?: any;
                        denominator?: any;
                    };
                    signingThreshold?: {
                        numerator?: any;
                        denominator?: any;
                    };
                    keygenTimeout?: any;
                    keygenGracePeriod?: any;
                    signingTimeout?: any;
                    signingGracePeriod?: any;
                    activeEpochCount?: any;
                }): _70.Params;
            };
            GenesisState: {
                encode(message: _69.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.GenesisState;
                fromJSON(object: any): _69.GenesisState;
                toJSON(message: _69.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        keygenThreshold?: {
                            numerator?: any;
                            denominator?: any;
                        };
                        signingThreshold?: {
                            numerator?: any;
                            denominator?: any;
                        };
                        keygenTimeout?: any;
                        keygenGracePeriod?: any;
                        signingTimeout?: any;
                        signingGracePeriod?: any;
                        activeEpochCount?: any;
                    };
                    keygenSessions?: {
                        key?: {
                            id?: string;
                            snapshot?: {
                                timestamp?: {
                                    seconds?: any;
                                    nanos?: number;
                                };
                                height?: any;
                                participants?: {
                                    [x: string]: {
                                        address?: Uint8Array;
                                        weight?: Uint8Array;
                                    };
                                };
                                bondedWeight?: Uint8Array;
                            };
                            pubKeys?: {
                                [x: string]: Uint8Array;
                            };
                            signingThreshold?: {
                                numerator?: any;
                                denominator?: any;
                            };
                            state?: _67.KeyState;
                        };
                        state?: _67.MultisigState;
                        keygenThreshold?: {
                            numerator?: any;
                            denominator?: any;
                        };
                        expiresAt?: any;
                        completedAt?: any;
                        isPubKeyReceived?: {
                            [x: string]: boolean;
                        };
                        gracePeriod?: any;
                    }[];
                    signingSessions?: {
                        id?: any;
                        multiSig?: {
                            keyId?: string;
                            payloadHash?: Uint8Array;
                            sigs?: {
                                [x: string]: Uint8Array;
                            };
                        };
                        state?: _67.MultisigState;
                        key?: {
                            id?: string;
                            snapshot?: {
                                timestamp?: {
                                    seconds?: any;
                                    nanos?: number;
                                };
                                height?: any;
                                participants?: {
                                    [x: string]: {
                                        address?: Uint8Array;
                                        weight?: Uint8Array;
                                    };
                                };
                                bondedWeight?: Uint8Array;
                            };
                            pubKeys?: {
                                [x: string]: Uint8Array;
                            };
                            signingThreshold?: {
                                numerator?: any;
                                denominator?: any;
                            };
                            state?: _67.KeyState;
                        };
                        expiresAt?: any;
                        completedAt?: any;
                        gracePeriod?: any;
                        module?: string;
                        moduleMetadata?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    keys?: {
                        id?: string;
                        snapshot?: {
                            timestamp?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            height?: any;
                            participants?: {
                                [x: string]: {
                                    address?: Uint8Array;
                                    weight?: Uint8Array;
                                };
                            };
                            bondedWeight?: Uint8Array;
                        };
                        pubKeys?: {
                            [x: string]: Uint8Array;
                        };
                        signingThreshold?: {
                            numerator?: any;
                            denominator?: any;
                        };
                        state?: _67.KeyState;
                    }[];
                    keyEpochs?: {
                        epoch?: any;
                        chain?: string;
                        keyId?: string;
                    }[];
                }): _69.GenesisState;
            };
            KeygenStarted: {
                encode(message: _68.KeygenStarted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.KeygenStarted;
                fromJSON(object: any): _68.KeygenStarted;
                toJSON(message: _68.KeygenStarted): unknown;
                fromPartial(object: {
                    module?: string;
                    keyId?: string;
                    participants?: Uint8Array[];
                }): _68.KeygenStarted;
            };
            KeygenCompleted: {
                encode(message: _68.KeygenCompleted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.KeygenCompleted;
                fromJSON(object: any): _68.KeygenCompleted;
                toJSON(message: _68.KeygenCompleted): unknown;
                fromPartial(object: {
                    module?: string;
                    keyId?: string;
                }): _68.KeygenCompleted;
            };
            KeygenExpired: {
                encode(message: _68.KeygenExpired, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.KeygenExpired;
                fromJSON(object: any): _68.KeygenExpired;
                toJSON(message: _68.KeygenExpired): unknown;
                fromPartial(object: {
                    module?: string;
                    keyId?: string;
                }): _68.KeygenExpired;
            };
            PubKeySubmitted: {
                encode(message: _68.PubKeySubmitted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.PubKeySubmitted;
                fromJSON(object: any): _68.PubKeySubmitted;
                toJSON(message: _68.PubKeySubmitted): unknown;
                fromPartial(object: {
                    module?: string;
                    keyId?: string;
                    participant?: Uint8Array;
                    pubKey?: Uint8Array;
                }): _68.PubKeySubmitted;
            };
            SigningStarted_PubKeysEntry: {
                encode(message: _68.SigningStarted_PubKeysEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.SigningStarted_PubKeysEntry;
                fromJSON(object: any): _68.SigningStarted_PubKeysEntry;
                toJSON(message: _68.SigningStarted_PubKeysEntry): unknown;
                fromPartial(object: {
                    key?: string;
                    value?: Uint8Array;
                }): _68.SigningStarted_PubKeysEntry;
            };
            SigningStarted: {
                encode(message: _68.SigningStarted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.SigningStarted;
                fromJSON(object: any): _68.SigningStarted;
                toJSON(message: _68.SigningStarted): unknown;
                fromPartial(object: {
                    module?: string;
                    sigId?: any;
                    keyId?: string;
                    pubKeys?: {
                        [x: string]: Uint8Array;
                    };
                    payloadHash?: Uint8Array;
                    requestingModule?: string;
                }): _68.SigningStarted;
            };
            SigningCompleted: {
                encode(message: _68.SigningCompleted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.SigningCompleted;
                fromJSON(object: any): _68.SigningCompleted;
                toJSON(message: _68.SigningCompleted): unknown;
                fromPartial(object: {
                    module?: string;
                    sigId?: any;
                }): _68.SigningCompleted;
            };
            SigningExpired: {
                encode(message: _68.SigningExpired, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.SigningExpired;
                fromJSON(object: any): _68.SigningExpired;
                toJSON(message: _68.SigningExpired): unknown;
                fromPartial(object: {
                    module?: string;
                    sigId?: any;
                }): _68.SigningExpired;
            };
            SignatureSubmitted: {
                encode(message: _68.SignatureSubmitted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.SignatureSubmitted;
                fromJSON(object: any): _68.SignatureSubmitted;
                toJSON(message: _68.SignatureSubmitted): unknown;
                fromPartial(object: {
                    module?: string;
                    sigId?: any;
                    participant?: Uint8Array;
                    signature?: Uint8Array;
                }): _68.SignatureSubmitted;
            };
            KeyAssigned: {
                encode(message: _68.KeyAssigned, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.KeyAssigned;
                fromJSON(object: any): _68.KeyAssigned;
                toJSON(message: _68.KeyAssigned): unknown;
                fromPartial(object: {
                    module?: string;
                    chain?: string;
                    keyId?: string;
                }): _68.KeyAssigned;
            };
            KeyRotated: {
                encode(message: _68.KeyRotated, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.KeyRotated;
                fromJSON(object: any): _68.KeyRotated;
                toJSON(message: _68.KeyRotated): unknown;
                fromPartial(object: {
                    module?: string;
                    chain?: string;
                    keyId?: string;
                }): _68.KeyRotated;
            };
        };
    }
    namespace nexus {
        namespace exported {
            const v1beta1: {
                transferStateFromJSON(object: any): _75.TransferState;
                transferStateToJSON(object: _75.TransferState): string;
                TransferState: typeof _75.TransferState;
                Chain: {
                    encode(message: _75.Chain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.Chain;
                    fromJSON(object: any): _75.Chain;
                    toJSON(message: _75.Chain): unknown;
                    fromPartial(object: {
                        name?: string;
                        supportsForeignAssets?: boolean;
                        keyType?: _102.KeyType;
                        module?: string;
                    }): _75.Chain;
                };
                CrossChainAddress: {
                    encode(message: _75.CrossChainAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.CrossChainAddress;
                    fromJSON(object: any): _75.CrossChainAddress;
                    toJSON(message: _75.CrossChainAddress): unknown;
                    fromPartial(object: {
                        chain?: {
                            name?: string;
                            supportsForeignAssets?: boolean;
                            keyType?: _102.KeyType;
                            module?: string;
                        };
                        address?: string;
                    }): _75.CrossChainAddress;
                };
                CrossChainTransfer: {
                    encode(message: _75.CrossChainTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.CrossChainTransfer;
                    fromJSON(object: any): _75.CrossChainTransfer;
                    toJSON(message: _75.CrossChainTransfer): unknown;
                    fromPartial(object: {
                        recipient?: {
                            chain?: {
                                name?: string;
                                supportsForeignAssets?: boolean;
                                keyType?: _102.KeyType;
                                module?: string;
                            };
                            address?: string;
                        };
                        asset?: {
                            denom?: string;
                            amount?: string;
                        };
                        id?: any;
                        state?: _75.TransferState;
                    }): _75.CrossChainTransfer;
                };
                TransferFee: {
                    encode(message: _75.TransferFee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.TransferFee;
                    fromJSON(object: any): _75.TransferFee;
                    toJSON(message: _75.TransferFee): unknown;
                    fromPartial(object: {
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }): _75.TransferFee;
                };
                FeeInfo: {
                    encode(message: _75.FeeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.FeeInfo;
                    fromJSON(object: any): _75.FeeInfo;
                    toJSON(message: _75.FeeInfo): unknown;
                    fromPartial(object: {
                        chain?: string;
                        asset?: string;
                        feeRate?: Uint8Array;
                        minFee?: Uint8Array;
                        maxFee?: Uint8Array;
                    }): _75.FeeInfo;
                };
                Asset: {
                    encode(message: _75.Asset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.Asset;
                    fromJSON(object: any): _75.Asset;
                    toJSON(message: _75.Asset): unknown;
                    fromPartial(object: {
                        denom?: string;
                        isNativeAsset?: boolean;
                    }): _75.Asset;
                };
            };
        }
        const v1beta1: {
            MaintainerState: {
                encode(message: _82.MaintainerState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MaintainerState;
                fromJSON(object: any): _82.MaintainerState;
                toJSON(message: _82.MaintainerState): unknown;
                fromPartial(object: {
                    address?: Uint8Array;
                    missingVotes?: {
                        trueCountCache?: {
                            cumulativeValue?: any[];
                            index?: number;
                            maxSize?: number;
                        };
                    };
                    incorrectVotes?: {
                        trueCountCache?: {
                            cumulativeValue?: any[];
                            index?: number;
                            maxSize?: number;
                        };
                    };
                    chain?: string;
                }): _82.MaintainerState;
            };
            ChainState: {
                encode(message: _82.ChainState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ChainState;
                fromJSON(object: any): _82.ChainState;
                toJSON(message: _82.ChainState): unknown;
                fromPartial(object: {
                    chain?: {
                        name?: string;
                        supportsForeignAssets?: boolean;
                        keyType?: _102.KeyType;
                        module?: string;
                    };
                    activated?: boolean;
                    assets?: {
                        denom?: string;
                        isNativeAsset?: boolean;
                    }[];
                    maintainerStates?: {
                        address?: Uint8Array;
                        missingVotes?: {
                            trueCountCache?: {
                                cumulativeValue?: any[];
                                index?: number;
                                maxSize?: number;
                            };
                        };
                        incorrectVotes?: {
                            trueCountCache?: {
                                cumulativeValue?: any[];
                                index?: number;
                                maxSize?: number;
                            };
                        };
                        chain?: string;
                    }[];
                }): _82.ChainState;
            };
            LinkedAddresses: {
                encode(message: _82.LinkedAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.LinkedAddresses;
                fromJSON(object: any): _82.LinkedAddresses;
                toJSON(message: _82.LinkedAddresses): unknown;
                fromPartial(object: {
                    depositAddress?: {
                        chain?: {
                            name?: string;
                            supportsForeignAssets?: boolean;
                            keyType?: _102.KeyType;
                            module?: string;
                        };
                        address?: string;
                    };
                    recipientAddress?: {
                        chain?: {
                            name?: string;
                            supportsForeignAssets?: boolean;
                            keyType?: _102.KeyType;
                            module?: string;
                        };
                        address?: string;
                    };
                }): _82.LinkedAddresses;
            };
            RegisterChainMaintainerRequest: {
                encode(message: _81.RegisterChainMaintainerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.RegisterChainMaintainerRequest;
                fromJSON(object: any): _81.RegisterChainMaintainerRequest;
                toJSON(message: _81.RegisterChainMaintainerRequest): unknown;
                fromPartial(object: {
                    sender?: Uint8Array;
                    chains?: string[];
                }): _81.RegisterChainMaintainerRequest;
            };
            RegisterChainMaintainerResponse: {
                encode(_: _81.RegisterChainMaintainerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.RegisterChainMaintainerResponse;
                fromJSON(_: any): _81.RegisterChainMaintainerResponse;
                toJSON(_: _81.RegisterChainMaintainerResponse): unknown;
                fromPartial(_: {}): _81.RegisterChainMaintainerResponse;
            };
            DeregisterChainMaintainerRequest: {
                encode(message: _81.DeregisterChainMaintainerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.DeregisterChainMaintainerRequest;
                fromJSON(object: any): _81.DeregisterChainMaintainerRequest;
                toJSON(message: _81.DeregisterChainMaintainerRequest): unknown;
                fromPartial(object: {
                    sender?: Uint8Array;
                    chains?: string[];
                }): _81.DeregisterChainMaintainerRequest;
            };
            DeregisterChainMaintainerResponse: {
                encode(_: _81.DeregisterChainMaintainerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.DeregisterChainMaintainerResponse;
                fromJSON(_: any): _81.DeregisterChainMaintainerResponse;
                toJSON(_: _81.DeregisterChainMaintainerResponse): unknown;
                fromPartial(_: {}): _81.DeregisterChainMaintainerResponse;
            };
            ActivateChainRequest: {
                encode(message: _81.ActivateChainRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.ActivateChainRequest;
                fromJSON(object: any): _81.ActivateChainRequest;
                toJSON(message: _81.ActivateChainRequest): unknown;
                fromPartial(object: {
                    sender?: Uint8Array;
                    chains?: string[];
                }): _81.ActivateChainRequest;
            };
            ActivateChainResponse: {
                encode(_: _81.ActivateChainResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.ActivateChainResponse;
                fromJSON(_: any): _81.ActivateChainResponse;
                toJSON(_: _81.ActivateChainResponse): unknown;
                fromPartial(_: {}): _81.ActivateChainResponse;
            };
            DeactivateChainRequest: {
                encode(message: _81.DeactivateChainRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.DeactivateChainRequest;
                fromJSON(object: any): _81.DeactivateChainRequest;
                toJSON(message: _81.DeactivateChainRequest): unknown;
                fromPartial(object: {
                    sender?: Uint8Array;
                    chains?: string[];
                }): _81.DeactivateChainRequest;
            };
            DeactivateChainResponse: {
                encode(_: _81.DeactivateChainResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.DeactivateChainResponse;
                fromJSON(_: any): _81.DeactivateChainResponse;
                toJSON(_: _81.DeactivateChainResponse): unknown;
                fromPartial(_: {}): _81.DeactivateChainResponse;
            };
            RegisterAssetFeeRequest: {
                encode(message: _81.RegisterAssetFeeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.RegisterAssetFeeRequest;
                fromJSON(object: any): _81.RegisterAssetFeeRequest;
                toJSON(message: _81.RegisterAssetFeeRequest): unknown;
                fromPartial(object: {
                    sender?: Uint8Array;
                    feeInfo?: {
                        chain?: string;
                        asset?: string;
                        feeRate?: Uint8Array;
                        minFee?: Uint8Array;
                        maxFee?: Uint8Array;
                    };
                }): _81.RegisterAssetFeeRequest;
            };
            RegisterAssetFeeResponse: {
                encode(_: _81.RegisterAssetFeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.RegisterAssetFeeResponse;
                fromJSON(_: any): _81.RegisterAssetFeeResponse;
                toJSON(_: _81.RegisterAssetFeeResponse): unknown;
                fromPartial(_: {}): _81.RegisterAssetFeeResponse;
            };
            chainStatusFromJSON(object: any): _79.ChainStatus;
            chainStatusToJSON(object: _79.ChainStatus): string;
            ChainStatus: typeof _79.ChainStatus;
            QueryChainMaintainersResponse: {
                encode(message: _79.QueryChainMaintainersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryChainMaintainersResponse;
                fromJSON(object: any): _79.QueryChainMaintainersResponse;
                toJSON(message: _79.QueryChainMaintainersResponse): unknown;
                fromPartial(object: {
                    maintainers?: Uint8Array[];
                }): _79.QueryChainMaintainersResponse;
            };
            LatestDepositAddressRequest: {
                encode(message: _79.LatestDepositAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.LatestDepositAddressRequest;
                fromJSON(object: any): _79.LatestDepositAddressRequest;
                toJSON(message: _79.LatestDepositAddressRequest): unknown;
                fromPartial(object: {
                    recipientAddr?: string;
                    recipientChain?: string;
                    depositChain?: string;
                }): _79.LatestDepositAddressRequest;
            };
            LatestDepositAddressResponse: {
                encode(message: _79.LatestDepositAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.LatestDepositAddressResponse;
                fromJSON(object: any): _79.LatestDepositAddressResponse;
                toJSON(message: _79.LatestDepositAddressResponse): unknown;
                fromPartial(object: {
                    depositAddr?: string;
                }): _79.LatestDepositAddressResponse;
            };
            TransfersForChainRequest: {
                encode(message: _79.TransfersForChainRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.TransfersForChainRequest;
                fromJSON(object: any): _79.TransfersForChainRequest;
                toJSON(message: _79.TransfersForChainRequest): unknown;
                fromPartial(object: {
                    chain?: string;
                    state?: _75.TransferState;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _79.TransfersForChainRequest;
            };
            TransfersForChainResponse: {
                encode(message: _79.TransfersForChainResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.TransfersForChainResponse;
                fromJSON(object: any): _79.TransfersForChainResponse;
                toJSON(message: _79.TransfersForChainResponse): unknown;
                fromPartial(object: {
                    transfers?: {
                        recipient?: {
                            chain?: {
                                name?: string;
                                supportsForeignAssets?: boolean;
                                keyType?: _102.KeyType;
                                module?: string;
                            };
                            address?: string;
                        };
                        asset?: {
                            denom?: string;
                            amount?: string;
                        };
                        id?: any;
                        state?: _75.TransferState;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _79.TransfersForChainResponse;
            };
            FeeInfoRequest: {
                encode(message: _79.FeeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.FeeInfoRequest;
                fromJSON(object: any): _79.FeeInfoRequest;
                toJSON(message: _79.FeeInfoRequest): unknown;
                fromPartial(object: {
                    chain?: string;
                    asset?: string;
                }): _79.FeeInfoRequest;
            };
            FeeInfoResponse: {
                encode(message: _79.FeeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.FeeInfoResponse;
                fromJSON(object: any): _79.FeeInfoResponse;
                toJSON(message: _79.FeeInfoResponse): unknown;
                fromPartial(object: {
                    feeInfo?: {
                        chain?: string;
                        asset?: string;
                        feeRate?: Uint8Array;
                        minFee?: Uint8Array;
                        maxFee?: Uint8Array;
                    };
                }): _79.FeeInfoResponse;
            };
            TransferFeeRequest: {
                encode(message: _79.TransferFeeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.TransferFeeRequest;
                fromJSON(object: any): _79.TransferFeeRequest;
                toJSON(message: _79.TransferFeeRequest): unknown;
                fromPartial(object: {
                    sourceChain?: string;
                    destinationChain?: string;
                    amount?: string;
                }): _79.TransferFeeRequest;
            };
            TransferFeeResponse: {
                encode(message: _79.TransferFeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.TransferFeeResponse;
                fromJSON(object: any): _79.TransferFeeResponse;
                toJSON(message: _79.TransferFeeResponse): unknown;
                fromPartial(object: {
                    fee?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _79.TransferFeeResponse;
            };
            ChainsRequest: {
                encode(message: _79.ChainsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.ChainsRequest;
                fromJSON(object: any): _79.ChainsRequest;
                toJSON(message: _79.ChainsRequest): unknown;
                fromPartial(object: {
                    status?: _79.ChainStatus;
                }): _79.ChainsRequest;
            };
            ChainsResponse: {
                encode(message: _79.ChainsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.ChainsResponse;
                fromJSON(object: any): _79.ChainsResponse;
                toJSON(message: _79.ChainsResponse): unknown;
                fromPartial(object: {
                    chains?: string[];
                }): _79.ChainsResponse;
            };
            AssetsRequest: {
                encode(message: _79.AssetsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.AssetsRequest;
                fromJSON(object: any): _79.AssetsRequest;
                toJSON(message: _79.AssetsRequest): unknown;
                fromPartial(object: {
                    chain?: string;
                }): _79.AssetsRequest;
            };
            AssetsResponse: {
                encode(message: _79.AssetsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.AssetsResponse;
                fromJSON(object: any): _79.AssetsResponse;
                toJSON(message: _79.AssetsResponse): unknown;
                fromPartial(object: {
                    assets?: string[];
                }): _79.AssetsResponse;
            };
            ChainStateRequest: {
                encode(message: _79.ChainStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.ChainStateRequest;
                fromJSON(object: any): _79.ChainStateRequest;
                toJSON(message: _79.ChainStateRequest): unknown;
                fromPartial(object: {
                    chain?: string;
                }): _79.ChainStateRequest;
            };
            ChainStateResponse: {
                encode(message: _79.ChainStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.ChainStateResponse;
                fromJSON(object: any): _79.ChainStateResponse;
                toJSON(message: _79.ChainStateResponse): unknown;
                fromPartial(object: {
                    state?: {
                        chain?: {
                            name?: string;
                            supportsForeignAssets?: boolean;
                            keyType?: _102.KeyType;
                            module?: string;
                        };
                        activated?: boolean;
                        assets?: {
                            denom?: string;
                            isNativeAsset?: boolean;
                        }[];
                        maintainerStates?: {
                            address?: Uint8Array;
                            missingVotes?: {
                                trueCountCache?: {
                                    cumulativeValue?: any[];
                                    index?: number;
                                    maxSize?: number;
                                };
                            };
                            incorrectVotes?: {
                                trueCountCache?: {
                                    cumulativeValue?: any[];
                                    index?: number;
                                    maxSize?: number;
                                };
                            };
                            chain?: string;
                        }[];
                    };
                }): _79.ChainStateResponse;
            };
            ChainsByAssetRequest: {
                encode(message: _79.ChainsByAssetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.ChainsByAssetRequest;
                fromJSON(object: any): _79.ChainsByAssetRequest;
                toJSON(message: _79.ChainsByAssetRequest): unknown;
                fromPartial(object: {
                    asset?: string;
                }): _79.ChainsByAssetRequest;
            };
            ChainsByAssetResponse: {
                encode(message: _79.ChainsByAssetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.ChainsByAssetResponse;
                fromJSON(object: any): _79.ChainsByAssetResponse;
                toJSON(message: _79.ChainsByAssetResponse): unknown;
                fromPartial(object: {
                    chains?: string[];
                }): _79.ChainsByAssetResponse;
            };
            RecipientAddressRequest: {
                encode(message: _79.RecipientAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.RecipientAddressRequest;
                fromJSON(object: any): _79.RecipientAddressRequest;
                toJSON(message: _79.RecipientAddressRequest): unknown;
                fromPartial(object: {
                    depositAddr?: string;
                    depositChain?: string;
                }): _79.RecipientAddressRequest;
            };
            RecipientAddressResponse: {
                encode(message: _79.RecipientAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.RecipientAddressResponse;
                fromJSON(object: any): _79.RecipientAddressResponse;
                toJSON(message: _79.RecipientAddressResponse): unknown;
                fromPartial(object: {
                    recipientAddr?: string;
                    recipientChain?: string;
                }): _79.RecipientAddressResponse;
            };
            Params: {
                encode(message: _78.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.Params;
                fromJSON(object: any): _78.Params;
                toJSON(message: _78.Params): unknown;
                fromPartial(object: {
                    chainActivationThreshold?: {
                        numerator?: any;
                        denominator?: any;
                    };
                    chainMaintainerMissingVoteThreshold?: {
                        numerator?: any;
                        denominator?: any;
                    };
                    chainMaintainerIncorrectVoteThreshold?: {
                        numerator?: any;
                        denominator?: any;
                    };
                    chainMaintainerCheckWindow?: number;
                }): _78.Params;
            };
            GenesisState: {
                encode(message: _77.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.GenesisState;
                fromJSON(object: any): _77.GenesisState;
                toJSON(message: _77.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        chainActivationThreshold?: {
                            numerator?: any;
                            denominator?: any;
                        };
                        chainMaintainerMissingVoteThreshold?: {
                            numerator?: any;
                            denominator?: any;
                        };
                        chainMaintainerIncorrectVoteThreshold?: {
                            numerator?: any;
                            denominator?: any;
                        };
                        chainMaintainerCheckWindow?: number;
                    };
                    nonce?: any;
                    chains?: {
                        name?: string;
                        supportsForeignAssets?: boolean;
                        keyType?: _102.KeyType;
                        module?: string;
                    }[];
                    chainStates?: {
                        chain?: {
                            name?: string;
                            supportsForeignAssets?: boolean;
                            keyType?: _102.KeyType;
                            module?: string;
                        };
                        activated?: boolean;
                        assets?: {
                            denom?: string;
                            isNativeAsset?: boolean;
                        }[];
                        maintainerStates?: {
                            address?: Uint8Array;
                            missingVotes?: {
                                trueCountCache?: {
                                    cumulativeValue?: any[];
                                    index?: number;
                                    maxSize?: number;
                                };
                            };
                            incorrectVotes?: {
                                trueCountCache?: {
                                    cumulativeValue?: any[];
                                    index?: number;
                                    maxSize?: number;
                                };
                            };
                            chain?: string;
                        }[];
                    }[];
                    linkedAddresses?: {
                        depositAddress?: {
                            chain?: {
                                name?: string;
                                supportsForeignAssets?: boolean;
                                keyType?: _102.KeyType;
                                module?: string;
                            };
                            address?: string;
                        };
                        recipientAddress?: {
                            chain?: {
                                name?: string;
                                supportsForeignAssets?: boolean;
                                keyType?: _102.KeyType;
                                module?: string;
                            };
                            address?: string;
                        };
                    }[];
                    transfers?: {
                        recipient?: {
                            chain?: {
                                name?: string;
                                supportsForeignAssets?: boolean;
                                keyType?: _102.KeyType;
                                module?: string;
                            };
                            address?: string;
                        };
                        asset?: {
                            denom?: string;
                            amount?: string;
                        };
                        id?: any;
                        state?: _75.TransferState;
                    }[];
                    fee?: {
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                    feeInfos?: {
                        chain?: string;
                        asset?: string;
                        feeRate?: Uint8Array;
                        minFee?: Uint8Array;
                        maxFee?: Uint8Array;
                    }[];
                }): _77.GenesisState;
            };
            FeeDeducted: {
                encode(message: _76.FeeDeducted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.FeeDeducted;
                fromJSON(object: any): _76.FeeDeducted;
                toJSON(message: _76.FeeDeducted): unknown;
                fromPartial(object: {
                    transferId?: any;
                    recipientChain?: string;
                    recipientAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                    fee?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _76.FeeDeducted;
            };
            InsufficientFee: {
                encode(message: _76.InsufficientFee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.InsufficientFee;
                fromJSON(object: any): _76.InsufficientFee;
                toJSON(message: _76.InsufficientFee): unknown;
                fromPartial(object: {
                    transferId?: any;
                    recipientChain?: string;
                    recipientAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                    fee?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _76.InsufficientFee;
            };
        };
    }
    namespace permission {
        namespace exported {
            const v1beta1: {
                roleFromJSON(object: any): _83.Role;
                roleToJSON(object: _83.Role): string;
                Role: typeof _83.Role;
            };
        }
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    registerController(value: _88.RegisterControllerRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deregisterController(value: _88.DeregisterControllerRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGovernanceKey(value: _88.UpdateGovernanceKeyRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    registerController(value: _88.RegisterControllerRequest): {
                        typeUrl: string;
                        value: _88.RegisterControllerRequest;
                    };
                    deregisterController(value: _88.DeregisterControllerRequest): {
                        typeUrl: string;
                        value: _88.DeregisterControllerRequest;
                    };
                    updateGovernanceKey(value: _88.UpdateGovernanceKeyRequest): {
                        typeUrl: string;
                        value: _88.UpdateGovernanceKeyRequest;
                    };
                };
                toJSON: {
                    registerController(value: _88.RegisterControllerRequest): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deregisterController(value: _88.DeregisterControllerRequest): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGovernanceKey(value: _88.UpdateGovernanceKeyRequest): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    registerController(value: any): {
                        typeUrl: string;
                        value: _88.RegisterControllerRequest;
                    };
                    deregisterController(value: any): {
                        typeUrl: string;
                        value: _88.DeregisterControllerRequest;
                    };
                    updateGovernanceKey(value: any): {
                        typeUrl: string;
                        value: _88.UpdateGovernanceKeyRequest;
                    };
                };
                fromPartial: {
                    registerController(value: _88.RegisterControllerRequest): {
                        typeUrl: string;
                        value: _88.RegisterControllerRequest;
                    };
                    deregisterController(value: _88.DeregisterControllerRequest): {
                        typeUrl: string;
                        value: _88.DeregisterControllerRequest;
                    };
                    updateGovernanceKey(value: _88.UpdateGovernanceKeyRequest): {
                        typeUrl: string;
                        value: _88.UpdateGovernanceKeyRequest;
                    };
                };
            };
            AminoConverter: {
                "/axelar.permission.v1beta1.RegisterControllerRequest": {
                    aminoType: string;
                    toAmino: ({ sender, controller }: _88.RegisterControllerRequest) => {
                        sender: Uint8Array;
                        controller: Uint8Array;
                    };
                    fromAmino: ({ sender, controller }: {
                        sender: Uint8Array;
                        controller: Uint8Array;
                    }) => _88.RegisterControllerRequest;
                };
                "/axelar.permission.v1beta1.DeregisterControllerRequest": {
                    aminoType: string;
                    toAmino: ({ sender, controller }: _88.DeregisterControllerRequest) => {
                        sender: Uint8Array;
                        controller: Uint8Array;
                    };
                    fromAmino: ({ sender, controller }: {
                        sender: Uint8Array;
                        controller: Uint8Array;
                    }) => _88.DeregisterControllerRequest;
                };
                "/axelar.permission.v1beta1.UpdateGovernanceKeyRequest": {
                    aminoType: string;
                    toAmino: ({ sender, governanceKey }: _88.UpdateGovernanceKeyRequest) => {
                        sender: Uint8Array;
                        governance_key: {
                            threshold: number;
                            public_keys: {
                                type_url: string;
                                value: Uint8Array;
                            }[];
                        };
                    };
                    fromAmino: ({ sender, governance_key }: {
                        sender: Uint8Array;
                        governance_key: {
                            threshold: number;
                            public_keys: {
                                type_url: string;
                                value: Uint8Array;
                            }[];
                        };
                    }) => _88.UpdateGovernanceKeyRequest;
                };
            };
            GovAccount: {
                encode(message: _89.GovAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.GovAccount;
                fromJSON(object: any): _89.GovAccount;
                toJSON(message: _89.GovAccount): unknown;
                fromPartial(object: {
                    address?: Uint8Array;
                    role?: _83.Role;
                }): _89.GovAccount;
            };
            UpdateGovernanceKeyRequest: {
                encode(message: _88.UpdateGovernanceKeyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.UpdateGovernanceKeyRequest;
                fromJSON(object: any): _88.UpdateGovernanceKeyRequest;
                toJSON(message: _88.UpdateGovernanceKeyRequest): unknown;
                fromPartial(object: {
                    sender?: Uint8Array;
                    governanceKey?: {
                        threshold?: number;
                        publicKeys?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    };
                }): _88.UpdateGovernanceKeyRequest;
            };
            UpdateGovernanceKeyResponse: {
                encode(_: _88.UpdateGovernanceKeyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.UpdateGovernanceKeyResponse;
                fromJSON(_: any): _88.UpdateGovernanceKeyResponse;
                toJSON(_: _88.UpdateGovernanceKeyResponse): unknown;
                fromPartial(_: {}): _88.UpdateGovernanceKeyResponse;
            };
            RegisterControllerRequest: {
                encode(message: _88.RegisterControllerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.RegisterControllerRequest;
                fromJSON(object: any): _88.RegisterControllerRequest;
                toJSON(message: _88.RegisterControllerRequest): unknown;
                fromPartial(object: {
                    sender?: Uint8Array;
                    controller?: Uint8Array;
                }): _88.RegisterControllerRequest;
            };
            RegisterControllerResponse: {
                encode(_: _88.RegisterControllerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.RegisterControllerResponse;
                fromJSON(_: any): _88.RegisterControllerResponse;
                toJSON(_: _88.RegisterControllerResponse): unknown;
                fromPartial(_: {}): _88.RegisterControllerResponse;
            };
            DeregisterControllerRequest: {
                encode(message: _88.DeregisterControllerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.DeregisterControllerRequest;
                fromJSON(object: any): _88.DeregisterControllerRequest;
                toJSON(message: _88.DeregisterControllerRequest): unknown;
                fromPartial(object: {
                    sender?: Uint8Array;
                    controller?: Uint8Array;
                }): _88.DeregisterControllerRequest;
            };
            DeregisterControllerResponse: {
                encode(_: _88.DeregisterControllerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.DeregisterControllerResponse;
                fromJSON(_: any): _88.DeregisterControllerResponse;
                toJSON(_: _88.DeregisterControllerResponse): unknown;
                fromPartial(_: {}): _88.DeregisterControllerResponse;
            };
            QueryGovernanceKeyRequest: {
                encode(_: _86.QueryGovernanceKeyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryGovernanceKeyRequest;
                fromJSON(_: any): _86.QueryGovernanceKeyRequest;
                toJSON(_: _86.QueryGovernanceKeyRequest): unknown;
                fromPartial(_: {}): _86.QueryGovernanceKeyRequest;
            };
            QueryGovernanceKeyResponse: {
                encode(message: _86.QueryGovernanceKeyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryGovernanceKeyResponse;
                fromJSON(object: any): _86.QueryGovernanceKeyResponse;
                toJSON(message: _86.QueryGovernanceKeyResponse): unknown;
                fromPartial(object: {
                    governanceKey?: {
                        threshold?: number;
                        publicKeys?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    };
                }): _86.QueryGovernanceKeyResponse;
            };
            Params: {
                encode(_: _85.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Params;
                fromJSON(_: any): _85.Params;
                toJSON(_: _85.Params): unknown;
                fromPartial(_: {}): _85.Params;
            };
            GenesisState: {
                encode(message: _84.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.GenesisState;
                fromJSON(object: any): _84.GenesisState;
                toJSON(message: _84.GenesisState): unknown;
                fromPartial(object: {
                    params?: {};
                    governanceKey?: {
                        threshold?: number;
                        publicKeys?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    };
                    govAccounts?: {
                        address?: Uint8Array;
                        role?: _83.Role;
                    }[];
                }): _84.GenesisState;
            };
        };
    }
    namespace reward {
        const v1beta1: {
            Pool: {
                encode(message: _94.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.Pool;
                fromJSON(object: any): _94.Pool;
                toJSON(message: _94.Pool): unknown;
                fromPartial(object: {
                    name?: string;
                    rewards?: {
                        validator?: Uint8Array;
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _94.Pool;
            };
            Pool_Reward: {
                encode(message: _94.Pool_Reward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.Pool_Reward;
                fromJSON(object: any): _94.Pool_Reward;
                toJSON(message: _94.Pool_Reward): unknown;
                fromPartial(object: {
                    validator?: Uint8Array;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _94.Pool_Reward;
            };
            Refund: {
                encode(message: _94.Refund, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.Refund;
                fromJSON(object: any): _94.Refund;
                toJSON(message: _94.Refund): unknown;
                fromPartial(object: {
                    payer?: Uint8Array;
                    fees?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _94.Refund;
            };
            RefundMsgRequest: {
                encode(message: _93.RefundMsgRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.RefundMsgRequest;
                fromJSON(object: any): _93.RefundMsgRequest;
                toJSON(message: _93.RefundMsgRequest): unknown;
                fromPartial(object: {
                    sender?: Uint8Array;
                    innerMessage?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _93.RefundMsgRequest;
            };
            RefundMsgResponse: {
                encode(message: _93.RefundMsgResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.RefundMsgResponse;
                fromJSON(object: any): _93.RefundMsgResponse;
                toJSON(message: _93.RefundMsgResponse): unknown;
                fromPartial(object: {
                    data?: Uint8Array;
                    log?: string;
                }): _93.RefundMsgResponse;
            };
            Params: {
                encode(message: _91.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.Params;
                fromJSON(object: any): _91.Params;
                toJSON(message: _91.Params): unknown;
                fromPartial(object: {
                    externalChainVotingInflationRate?: Uint8Array;
                    keyMgmtRelativeInflationRate?: Uint8Array;
                }): _91.Params;
            };
            GenesisState: {
                encode(message: _90.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.GenesisState;
                fromJSON(object: any): _90.GenesisState;
                toJSON(message: _90.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        externalChainVotingInflationRate?: Uint8Array;
                        keyMgmtRelativeInflationRate?: Uint8Array;
                    };
                    pools?: {
                        name?: string;
                        rewards?: {
                            validator?: Uint8Array;
                            coins?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        }[];
                    }[];
                }): _90.GenesisState;
            };
        };
    }
    namespace snapshot {
        namespace exported {
            const v1beta1: {
                Participant: {
                    encode(message: _95.Participant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.Participant;
                    fromJSON(object: any): _95.Participant;
                    toJSON(message: _95.Participant): unknown;
                    fromPartial(object: {
                        address?: Uint8Array;
                        weight?: Uint8Array;
                    }): _95.Participant;
                };
                Snapshot_ParticipantsEntry: {
                    encode(message: _95.Snapshot_ParticipantsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.Snapshot_ParticipantsEntry;
                    fromJSON(object: any): _95.Snapshot_ParticipantsEntry;
                    toJSON(message: _95.Snapshot_ParticipantsEntry): unknown;
                    fromPartial(object: {
                        key?: string;
                        value?: {
                            address?: Uint8Array;
                            weight?: Uint8Array;
                        };
                    }): _95.Snapshot_ParticipantsEntry;
                };
                Snapshot: {
                    encode(message: _95.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.Snapshot;
                    fromJSON(object: any): _95.Snapshot;
                    toJSON(message: _95.Snapshot): unknown;
                    fromPartial(object: {
                        timestamp?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        height?: any;
                        participants?: {
                            [x: string]: {
                                address?: Uint8Array;
                                weight?: Uint8Array;
                            };
                        };
                        bondedWeight?: Uint8Array;
                    }): _95.Snapshot;
                };
            };
        }
        const v1beta1: {
            ProxiedValidator: {
                encode(message: _101.ProxiedValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.ProxiedValidator;
                fromJSON(object: any): _101.ProxiedValidator;
                toJSON(message: _101.ProxiedValidator): unknown;
                fromPartial(object: {
                    validator?: Uint8Array;
                    proxy?: Uint8Array;
                    active?: boolean;
                }): _101.ProxiedValidator;
            };
            RegisterProxyRequest: {
                encode(message: _100.RegisterProxyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.RegisterProxyRequest;
                fromJSON(object: any): _100.RegisterProxyRequest;
                toJSON(message: _100.RegisterProxyRequest): unknown;
                fromPartial(object: {
                    sender?: Uint8Array;
                    proxyAddr?: Uint8Array;
                }): _100.RegisterProxyRequest;
            };
            RegisterProxyResponse: {
                encode(_: _100.RegisterProxyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.RegisterProxyResponse;
                fromJSON(_: any): _100.RegisterProxyResponse;
                toJSON(_: _100.RegisterProxyResponse): unknown;
                fromPartial(_: {}): _100.RegisterProxyResponse;
            };
            DeactivateProxyRequest: {
                encode(message: _100.DeactivateProxyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.DeactivateProxyRequest;
                fromJSON(object: any): _100.DeactivateProxyRequest;
                toJSON(message: _100.DeactivateProxyRequest): unknown;
                fromPartial(object: {
                    sender?: Uint8Array;
                }): _100.DeactivateProxyRequest;
            };
            DeactivateProxyResponse: {
                encode(_: _100.DeactivateProxyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.DeactivateProxyResponse;
                fromJSON(_: any): _100.DeactivateProxyResponse;
                toJSON(_: _100.DeactivateProxyResponse): unknown;
                fromPartial(_: {}): _100.DeactivateProxyResponse;
            };
            QueryValidatorsResponse: {
                encode(message: _98.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryValidatorsResponse;
                fromJSON(object: any): _98.QueryValidatorsResponse;
                toJSON(message: _98.QueryValidatorsResponse): unknown;
                fromPartial(object: {
                    validators?: {
                        operatorAddress?: string;
                        moniker?: string;
                        tssIllegibilityInfo?: {
                            tombstoned?: boolean;
                            jailed?: boolean;
                            missedTooManyBlocks?: boolean;
                            noProxyRegistered?: boolean;
                            tssSuspended?: boolean;
                            proxyInsuficientFunds?: boolean;
                            staleTssHeartbeat?: boolean;
                        };
                    }[];
                }): _98.QueryValidatorsResponse;
            };
            QueryValidatorsResponse_TssIllegibilityInfo: {
                encode(message: _98.QueryValidatorsResponse_TssIllegibilityInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryValidatorsResponse_TssIllegibilityInfo;
                fromJSON(object: any): _98.QueryValidatorsResponse_TssIllegibilityInfo;
                toJSON(message: _98.QueryValidatorsResponse_TssIllegibilityInfo): unknown;
                fromPartial(object: {
                    tombstoned?: boolean;
                    jailed?: boolean;
                    missedTooManyBlocks?: boolean;
                    noProxyRegistered?: boolean;
                    tssSuspended?: boolean;
                    proxyInsuficientFunds?: boolean;
                    staleTssHeartbeat?: boolean;
                }): _98.QueryValidatorsResponse_TssIllegibilityInfo;
            };
            QueryValidatorsResponse_Validator: {
                encode(message: _98.QueryValidatorsResponse_Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryValidatorsResponse_Validator;
                fromJSON(object: any): _98.QueryValidatorsResponse_Validator;
                toJSON(message: _98.QueryValidatorsResponse_Validator): unknown;
                fromPartial(object: {
                    operatorAddress?: string;
                    moniker?: string;
                    tssIllegibilityInfo?: {
                        tombstoned?: boolean;
                        jailed?: boolean;
                        missedTooManyBlocks?: boolean;
                        noProxyRegistered?: boolean;
                        tssSuspended?: boolean;
                        proxyInsuficientFunds?: boolean;
                        staleTssHeartbeat?: boolean;
                    };
                }): _98.QueryValidatorsResponse_Validator;
            };
            Params: {
                encode(message: _97.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.Params;
                fromJSON(object: any): _97.Params;
                toJSON(message: _97.Params): unknown;
                fromPartial(object: {
                    minProxyBalance?: any;
                }): _97.Params;
            };
            GenesisState: {
                encode(message: _96.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.GenesisState;
                fromJSON(object: any): _96.GenesisState;
                toJSON(message: _96.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        minProxyBalance?: any;
                    };
                    proxiedValidators?: {
                        validator?: Uint8Array;
                        proxy?: Uint8Array;
                        active?: boolean;
                    }[];
                }): _96.GenesisState;
            };
        };
    }
    namespace tss {
        namespace exported {
            const v1beta1: {
                keyRoleFromJSON(object: any): _102.KeyRole;
                keyRoleToJSON(object: _102.KeyRole): string;
                keyTypeFromJSON(object: any): _102.KeyType;
                keyTypeToJSON(object: _102.KeyType): string;
                keyShareDistributionPolicyFromJSON(object: any): _102.KeyShareDistributionPolicy;
                keyShareDistributionPolicyToJSON(object: _102.KeyShareDistributionPolicy): string;
                KeyRole: typeof _102.KeyRole;
                KeyType: typeof _102.KeyType;
                KeyShareDistributionPolicy: typeof _102.KeyShareDistributionPolicy;
                KeyRequirement: {
                    encode(message: _102.KeyRequirement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.KeyRequirement;
                    fromJSON(object: any): _102.KeyRequirement;
                    toJSON(message: _102.KeyRequirement): unknown;
                    fromPartial(object: {
                        keyRole?: _102.KeyRole;
                        keyType?: _102.KeyType;
                        minKeygenThreshold?: {
                            numerator?: any;
                            denominator?: any;
                        };
                        safetyThreshold?: {
                            numerator?: any;
                            denominator?: any;
                        };
                        keyShareDistributionPolicy?: _102.KeyShareDistributionPolicy;
                        maxTotalShareCount?: any;
                        minTotalShareCount?: any;
                        keygenVotingThreshold?: {
                            numerator?: any;
                            denominator?: any;
                        };
                        signVotingThreshold?: {
                            numerator?: any;
                            denominator?: any;
                        };
                        keygenTimeout?: any;
                        signTimeout?: any;
                    }): _102.KeyRequirement;
                };
                SigKeyPair: {
                    encode(message: _102.SigKeyPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.SigKeyPair;
                    fromJSON(object: any): _102.SigKeyPair;
                    toJSON(message: _102.SigKeyPair): unknown;
                    fromPartial(object: {
                        pubKey?: Uint8Array;
                        signature?: Uint8Array;
                    }): _102.SigKeyPair;
                };
            };
        }
        namespace tofnd {
            const v1beta1: {
                recoverResponse_ResponseFromJSON(object: any): _105.RecoverResponse_Response;
                recoverResponse_ResponseToJSON(object: _105.RecoverResponse_Response): string;
                messageOut_CriminalList_Criminal_CrimeTypeFromJSON(object: any): _105.MessageOut_CriminalList_Criminal_CrimeType;
                messageOut_CriminalList_Criminal_CrimeTypeToJSON(object: _105.MessageOut_CriminalList_Criminal_CrimeType): string;
                RecoverResponse_Response: typeof _105.RecoverResponse_Response;
                MessageOut_CriminalList_Criminal_CrimeType: typeof _105.MessageOut_CriminalList_Criminal_CrimeType;
                RecoverRequest: {
                    encode(message: _105.RecoverRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.RecoverRequest;
                    fromJSON(object: any): _105.RecoverRequest;
                    toJSON(message: _105.RecoverRequest): unknown;
                    fromPartial(object: {
                        keygenInit?: {
                            newKeyUid?: string;
                            partyUids?: string[];
                            partyShareCounts?: number[];
                            myPartyIndex?: number;
                            threshold?: number;
                        };
                        keygenOutput?: {
                            pubKey?: Uint8Array;
                            groupRecoverInfo?: Uint8Array;
                            privateRecoverInfo?: Uint8Array;
                        };
                    }): _105.RecoverRequest;
                };
                RecoverResponse: {
                    encode(message: _105.RecoverResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.RecoverResponse;
                    fromJSON(object: any): _105.RecoverResponse;
                    toJSON(message: _105.RecoverResponse): unknown;
                    fromPartial(object: {
                        response?: _105.RecoverResponse_Response;
                    }): _105.RecoverResponse;
                };
                KeygenOutput: {
                    encode(message: _105.KeygenOutput, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.KeygenOutput;
                    fromJSON(object: any): _105.KeygenOutput;
                    toJSON(message: _105.KeygenOutput): unknown;
                    fromPartial(object: {
                        pubKey?: Uint8Array;
                        groupRecoverInfo?: Uint8Array;
                        privateRecoverInfo?: Uint8Array;
                    }): _105.KeygenOutput;
                };
                MessageIn: {
                    encode(message: _105.MessageIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.MessageIn;
                    fromJSON(object: any): _105.MessageIn;
                    toJSON(message: _105.MessageIn): unknown;
                    fromPartial(object: {
                        keygenInit?: {
                            newKeyUid?: string;
                            partyUids?: string[];
                            partyShareCounts?: number[];
                            myPartyIndex?: number;
                            threshold?: number;
                        };
                        signInit?: {
                            newSigUid?: string;
                            keyUid?: string;
                            partyUids?: string[];
                            messageToSign?: Uint8Array;
                        };
                        traffic?: {
                            fromPartyUid?: string;
                            payload?: Uint8Array;
                            isBroadcast?: boolean;
                        };
                        abort?: boolean;
                    }): _105.MessageIn;
                };
                MessageOut: {
                    encode(message: _105.MessageOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.MessageOut;
                    fromJSON(object: any): _105.MessageOut;
                    toJSON(message: _105.MessageOut): unknown;
                    fromPartial(object: {
                        traffic?: {
                            toPartyUid?: string;
                            payload?: Uint8Array;
                            isBroadcast?: boolean;
                        };
                        keygenResult?: {
                            data?: {
                                pubKey?: Uint8Array;
                                groupRecoverInfo?: Uint8Array;
                                privateRecoverInfo?: Uint8Array;
                            };
                            criminals?: {
                                criminals?: {
                                    partyUid?: string;
                                    crimeType?: _105.MessageOut_CriminalList_Criminal_CrimeType;
                                }[];
                            };
                        };
                        signResult?: {
                            signature?: Uint8Array;
                            criminals?: {
                                criminals?: {
                                    partyUid?: string;
                                    crimeType?: _105.MessageOut_CriminalList_Criminal_CrimeType;
                                }[];
                            };
                        };
                        needRecover?: boolean;
                    }): _105.MessageOut;
                };
                MessageOut_KeygenResult: {
                    encode(message: _105.MessageOut_KeygenResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.MessageOut_KeygenResult;
                    fromJSON(object: any): _105.MessageOut_KeygenResult;
                    toJSON(message: _105.MessageOut_KeygenResult): unknown;
                    fromPartial(object: {
                        data?: {
                            pubKey?: Uint8Array;
                            groupRecoverInfo?: Uint8Array;
                            privateRecoverInfo?: Uint8Array;
                        };
                        criminals?: {
                            criminals?: {
                                partyUid?: string;
                                crimeType?: _105.MessageOut_CriminalList_Criminal_CrimeType;
                            }[];
                        };
                    }): _105.MessageOut_KeygenResult;
                };
                MessageOut_SignResult: {
                    encode(message: _105.MessageOut_SignResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.MessageOut_SignResult;
                    fromJSON(object: any): _105.MessageOut_SignResult;
                    toJSON(message: _105.MessageOut_SignResult): unknown;
                    fromPartial(object: {
                        signature?: Uint8Array;
                        criminals?: {
                            criminals?: {
                                partyUid?: string;
                                crimeType?: _105.MessageOut_CriminalList_Criminal_CrimeType;
                            }[];
                        };
                    }): _105.MessageOut_SignResult;
                };
                MessageOut_CriminalList: {
                    encode(message: _105.MessageOut_CriminalList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.MessageOut_CriminalList;
                    fromJSON(object: any): _105.MessageOut_CriminalList;
                    toJSON(message: _105.MessageOut_CriminalList): unknown;
                    fromPartial(object: {
                        criminals?: {
                            partyUid?: string;
                            crimeType?: _105.MessageOut_CriminalList_Criminal_CrimeType;
                        }[];
                    }): _105.MessageOut_CriminalList;
                };
                MessageOut_CriminalList_Criminal: {
                    encode(message: _105.MessageOut_CriminalList_Criminal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.MessageOut_CriminalList_Criminal;
                    fromJSON(object: any): _105.MessageOut_CriminalList_Criminal;
                    toJSON(message: _105.MessageOut_CriminalList_Criminal): unknown;
                    fromPartial(object: {
                        partyUid?: string;
                        crimeType?: _105.MessageOut_CriminalList_Criminal_CrimeType;
                    }): _105.MessageOut_CriminalList_Criminal;
                };
                TrafficIn: {
                    encode(message: _105.TrafficIn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.TrafficIn;
                    fromJSON(object: any): _105.TrafficIn;
                    toJSON(message: _105.TrafficIn): unknown;
                    fromPartial(object: {
                        fromPartyUid?: string;
                        payload?: Uint8Array;
                        isBroadcast?: boolean;
                    }): _105.TrafficIn;
                };
                TrafficOut: {
                    encode(message: _105.TrafficOut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.TrafficOut;
                    fromJSON(object: any): _105.TrafficOut;
                    toJSON(message: _105.TrafficOut): unknown;
                    fromPartial(object: {
                        toPartyUid?: string;
                        payload?: Uint8Array;
                        isBroadcast?: boolean;
                    }): _105.TrafficOut;
                };
                KeygenInit: {
                    encode(message: _105.KeygenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.KeygenInit;
                    fromJSON(object: any): _105.KeygenInit;
                    toJSON(message: _105.KeygenInit): unknown;
                    fromPartial(object: {
                        newKeyUid?: string;
                        partyUids?: string[];
                        partyShareCounts?: number[];
                        myPartyIndex?: number;
                        threshold?: number;
                    }): _105.KeygenInit;
                };
                SignInit: {
                    encode(message: _105.SignInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.SignInit;
                    fromJSON(object: any): _105.SignInit;
                    toJSON(message: _105.SignInit): unknown;
                    fromPartial(object: {
                        newSigUid?: string;
                        keyUid?: string;
                        partyUids?: string[];
                        messageToSign?: Uint8Array;
                    }): _105.SignInit;
                };
                KeygenRequest: {
                    encode(message: _104.KeygenRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.KeygenRequest;
                    fromJSON(object: any): _104.KeygenRequest;
                    toJSON(message: _104.KeygenRequest): unknown;
                    fromPartial(object: {
                        keyUid?: string;
                        partyUid?: string;
                    }): _104.KeygenRequest;
                };
                KeygenResponse: {
                    encode(message: _104.KeygenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.KeygenResponse;
                    fromJSON(object: any): _104.KeygenResponse;
                    toJSON(message: _104.KeygenResponse): unknown;
                    fromPartial(object: {
                        pubKey?: Uint8Array;
                        error?: string;
                    }): _104.KeygenResponse;
                };
                SignRequest: {
                    encode(message: _104.SignRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.SignRequest;
                    fromJSON(object: any): _104.SignRequest;
                    toJSON(message: _104.SignRequest): unknown;
                    fromPartial(object: {
                        keyUid?: string;
                        msgToSign?: Uint8Array;
                        partyUid?: string;
                        pubKey?: Uint8Array;
                    }): _104.SignRequest;
                };
                SignResponse: {
                    encode(message: _104.SignResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.SignResponse;
                    fromJSON(object: any): _104.SignResponse;
                    toJSON(message: _104.SignResponse): unknown;
                    fromPartial(object: {
                        signature?: Uint8Array;
                        error?: string;
                    }): _104.SignResponse;
                };
                keyPresenceResponse_ResponseFromJSON(object: any): _103.KeyPresenceResponse_Response;
                keyPresenceResponse_ResponseToJSON(object: _103.KeyPresenceResponse_Response): string;
                KeyPresenceResponse_Response: typeof _103.KeyPresenceResponse_Response;
                KeyPresenceRequest: {
                    encode(message: _103.KeyPresenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.KeyPresenceRequest;
                    fromJSON(object: any): _103.KeyPresenceRequest;
                    toJSON(message: _103.KeyPresenceRequest): unknown;
                    fromPartial(object: {
                        keyUid?: string;
                        pubKey?: Uint8Array;
                    }): _103.KeyPresenceRequest;
                };
                KeyPresenceResponse: {
                    encode(message: _103.KeyPresenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.KeyPresenceResponse;
                    fromJSON(object: any): _103.KeyPresenceResponse;
                    toJSON(message: _103.KeyPresenceResponse): unknown;
                    fromPartial(object: {
                        response?: _103.KeyPresenceResponse_Response;
                    }): _103.KeyPresenceResponse;
                };
            };
        }
        const v1beta1: {
            KeygenVoteData: {
                encode(message: _110.KeygenVoteData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.KeygenVoteData;
                fromJSON(object: any): _110.KeygenVoteData;
                toJSON(message: _110.KeygenVoteData): unknown;
                fromPartial(object: {
                    pubKey?: Uint8Array;
                    groupRecoveryInfo?: Uint8Array;
                }): _110.KeygenVoteData;
            };
            KeyInfo: {
                encode(message: _110.KeyInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.KeyInfo;
                fromJSON(object: any): _110.KeyInfo;
                toJSON(message: _110.KeyInfo): unknown;
                fromPartial(object: {
                    keyId?: string;
                    keyRole?: _102.KeyRole;
                    keyType?: _102.KeyType;
                }): _110.KeyInfo;
            };
            MultisigInfo: {
                encode(message: _110.MultisigInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MultisigInfo;
                fromJSON(object: any): _110.MultisigInfo;
                toJSON(message: _110.MultisigInfo): unknown;
                fromPartial(object: {
                    id?: string;
                    timeout?: any;
                    targetNum?: any;
                    infos?: {
                        participant?: Uint8Array;
                        data?: Uint8Array[];
                    }[];
                }): _110.MultisigInfo;
            };
            MultisigInfo_Info: {
                encode(message: _110.MultisigInfo_Info, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MultisigInfo_Info;
                fromJSON(object: any): _110.MultisigInfo_Info;
                toJSON(message: _110.MultisigInfo_Info): unknown;
                fromPartial(object: {
                    participant?: Uint8Array;
                    data?: Uint8Array[];
                }): _110.MultisigInfo_Info;
            };
            KeyRecoveryInfo_PrivateEntry: {
                encode(message: _110.KeyRecoveryInfo_PrivateEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.KeyRecoveryInfo_PrivateEntry;
                fromJSON(object: any): _110.KeyRecoveryInfo_PrivateEntry;
                toJSON(message: _110.KeyRecoveryInfo_PrivateEntry): unknown;
                fromPartial(object: {
                    key?: string;
                    value?: Uint8Array;
                }): _110.KeyRecoveryInfo_PrivateEntry;
            };
            KeyRecoveryInfo: {
                encode(message: _110.KeyRecoveryInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.KeyRecoveryInfo;
                fromJSON(object: any): _110.KeyRecoveryInfo;
                toJSON(message: _110.KeyRecoveryInfo): unknown;
                fromPartial(object: {
                    keyId?: string;
                    public?: Uint8Array;
                    private?: {
                        [x: string]: Uint8Array;
                    };
                }): _110.KeyRecoveryInfo;
            };
            ExternalKeys: {
                encode(message: _110.ExternalKeys, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.ExternalKeys;
                fromJSON(object: any): _110.ExternalKeys;
                toJSON(message: _110.ExternalKeys): unknown;
                fromPartial(object: {
                    chain?: string;
                    keyIds?: string[];
                }): _110.ExternalKeys;
            };
            ValidatorStatus: {
                encode(message: _110.ValidatorStatus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.ValidatorStatus;
                fromJSON(object: any): _110.ValidatorStatus;
                toJSON(message: _110.ValidatorStatus): unknown;
                fromPartial(object: {
                    validator?: Uint8Array;
                    suspendedUntil?: any;
                }): _110.ValidatorStatus;
            };
            StartKeygenRequest: {
                encode(message: _109.StartKeygenRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.StartKeygenRequest;
                fromJSON(object: any): _109.StartKeygenRequest;
                toJSON(message: _109.StartKeygenRequest): unknown;
                fromPartial(object: {
                    sender?: string;
                    keyInfo?: {
                        keyId?: string;
                        keyRole?: _102.KeyRole;
                        keyType?: _102.KeyType;
                    };
                }): _109.StartKeygenRequest;
            };
            StartKeygenResponse: {
                encode(_: _109.StartKeygenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.StartKeygenResponse;
                fromJSON(_: any): _109.StartKeygenResponse;
                toJSON(_: _109.StartKeygenResponse): unknown;
                fromPartial(_: {}): _109.StartKeygenResponse;
            };
            RotateKeyRequest: {
                encode(message: _109.RotateKeyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.RotateKeyRequest;
                fromJSON(object: any): _109.RotateKeyRequest;
                toJSON(message: _109.RotateKeyRequest): unknown;
                fromPartial(object: {
                    sender?: Uint8Array;
                    chain?: string;
                    keyRole?: _102.KeyRole;
                    keyId?: string;
                }): _109.RotateKeyRequest;
            };
            RotateKeyResponse: {
                encode(_: _109.RotateKeyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.RotateKeyResponse;
                fromJSON(_: any): _109.RotateKeyResponse;
                toJSON(_: _109.RotateKeyResponse): unknown;
                fromPartial(_: {}): _109.RotateKeyResponse;
            };
            ProcessKeygenTrafficRequest: {
                encode(message: _109.ProcessKeygenTrafficRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.ProcessKeygenTrafficRequest;
                fromJSON(object: any): _109.ProcessKeygenTrafficRequest;
                toJSON(message: _109.ProcessKeygenTrafficRequest): unknown;
                fromPartial(object: {
                    sender?: Uint8Array;
                    sessionId?: string;
                    payload?: {
                        toPartyUid?: string;
                        payload?: Uint8Array;
                        isBroadcast?: boolean;
                    };
                }): _109.ProcessKeygenTrafficRequest;
            };
            ProcessKeygenTrafficResponse: {
                encode(_: _109.ProcessKeygenTrafficResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.ProcessKeygenTrafficResponse;
                fromJSON(_: any): _109.ProcessKeygenTrafficResponse;
                toJSON(_: _109.ProcessKeygenTrafficResponse): unknown;
                fromPartial(_: {}): _109.ProcessKeygenTrafficResponse;
            };
            ProcessSignTrafficRequest: {
                encode(message: _109.ProcessSignTrafficRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.ProcessSignTrafficRequest;
                fromJSON(object: any): _109.ProcessSignTrafficRequest;
                toJSON(message: _109.ProcessSignTrafficRequest): unknown;
                fromPartial(object: {
                    sender?: Uint8Array;
                    sessionId?: string;
                    payload?: {
                        toPartyUid?: string;
                        payload?: Uint8Array;
                        isBroadcast?: boolean;
                    };
                }): _109.ProcessSignTrafficRequest;
            };
            ProcessSignTrafficResponse: {
                encode(_: _109.ProcessSignTrafficResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.ProcessSignTrafficResponse;
                fromJSON(_: any): _109.ProcessSignTrafficResponse;
                toJSON(_: _109.ProcessSignTrafficResponse): unknown;
                fromPartial(_: {}): _109.ProcessSignTrafficResponse;
            };
            VotePubKeyRequest: {
                encode(message: _109.VotePubKeyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.VotePubKeyRequest;
                fromJSON(object: any): _109.VotePubKeyRequest;
                toJSON(message: _109.VotePubKeyRequest): unknown;
                fromPartial(object: {
                    sender?: Uint8Array;
                    pollKey?: {
                        module?: string;
                        id?: string;
                    };
                    result?: {
                        data?: {
                            pubKey?: Uint8Array;
                            groupRecoverInfo?: Uint8Array;
                            privateRecoverInfo?: Uint8Array;
                        };
                        criminals?: {
                            criminals?: {
                                partyUid?: string;
                                crimeType?: _105.MessageOut_CriminalList_Criminal_CrimeType;
                            }[];
                        };
                    };
                }): _109.VotePubKeyRequest;
            };
            VotePubKeyResponse: {
                encode(message: _109.VotePubKeyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.VotePubKeyResponse;
                fromJSON(object: any): _109.VotePubKeyResponse;
                toJSON(message: _109.VotePubKeyResponse): unknown;
                fromPartial(object: {
                    log?: string;
                }): _109.VotePubKeyResponse;
            };
            VoteSigRequest: {
                encode(message: _109.VoteSigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.VoteSigRequest;
                fromJSON(object: any): _109.VoteSigRequest;
                toJSON(message: _109.VoteSigRequest): unknown;
                fromPartial(object: {
                    sender?: Uint8Array;
                    pollKey?: {
                        module?: string;
                        id?: string;
                    };
                    result?: {
                        signature?: Uint8Array;
                        criminals?: {
                            criminals?: {
                                partyUid?: string;
                                crimeType?: _105.MessageOut_CriminalList_Criminal_CrimeType;
                            }[];
                        };
                    };
                }): _109.VoteSigRequest;
            };
            VoteSigResponse: {
                encode(message: _109.VoteSigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.VoteSigResponse;
                fromJSON(object: any): _109.VoteSigResponse;
                toJSON(message: _109.VoteSigResponse): unknown;
                fromPartial(object: {
                    log?: string;
                }): _109.VoteSigResponse;
            };
            HeartBeatRequest: {
                encode(message: _109.HeartBeatRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.HeartBeatRequest;
                fromJSON(object: any): _109.HeartBeatRequest;
                toJSON(message: _109.HeartBeatRequest): unknown;
                fromPartial(object: {
                    sender?: Uint8Array;
                    keyIds?: string[];
                }): _109.HeartBeatRequest;
            };
            HeartBeatResponse: {
                encode(_: _109.HeartBeatResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.HeartBeatResponse;
                fromJSON(_: any): _109.HeartBeatResponse;
                toJSON(_: _109.HeartBeatResponse): unknown;
                fromPartial(_: {}): _109.HeartBeatResponse;
            };
            RegisterExternalKeysRequest: {
                encode(message: _109.RegisterExternalKeysRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.RegisterExternalKeysRequest;
                fromJSON(object: any): _109.RegisterExternalKeysRequest;
                toJSON(message: _109.RegisterExternalKeysRequest): unknown;
                fromPartial(object: {
                    sender?: Uint8Array;
                    chain?: string;
                    externalKeys?: {
                        id?: string;
                        pubKey?: Uint8Array;
                    }[];
                }): _109.RegisterExternalKeysRequest;
            };
            RegisterExternalKeysRequest_ExternalKey: {
                encode(message: _109.RegisterExternalKeysRequest_ExternalKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.RegisterExternalKeysRequest_ExternalKey;
                fromJSON(object: any): _109.RegisterExternalKeysRequest_ExternalKey;
                toJSON(message: _109.RegisterExternalKeysRequest_ExternalKey): unknown;
                fromPartial(object: {
                    id?: string;
                    pubKey?: Uint8Array;
                }): _109.RegisterExternalKeysRequest_ExternalKey;
            };
            RegisterExternalKeysResponse: {
                encode(_: _109.RegisterExternalKeysResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.RegisterExternalKeysResponse;
                fromJSON(_: any): _109.RegisterExternalKeysResponse;
                toJSON(_: _109.RegisterExternalKeysResponse): unknown;
                fromPartial(_: {}): _109.RegisterExternalKeysResponse;
            };
            SubmitMultisigPubKeysRequest: {
                encode(message: _109.SubmitMultisigPubKeysRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.SubmitMultisigPubKeysRequest;
                fromJSON(object: any): _109.SubmitMultisigPubKeysRequest;
                toJSON(message: _109.SubmitMultisigPubKeysRequest): unknown;
                fromPartial(object: {
                    sender?: Uint8Array;
                    keyId?: string;
                    sigKeyPairs?: {
                        pubKey?: Uint8Array;
                        signature?: Uint8Array;
                    }[];
                }): _109.SubmitMultisigPubKeysRequest;
            };
            SubmitMultisigPubKeysResponse: {
                encode(_: _109.SubmitMultisigPubKeysResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.SubmitMultisigPubKeysResponse;
                fromJSON(_: any): _109.SubmitMultisigPubKeysResponse;
                toJSON(_: _109.SubmitMultisigPubKeysResponse): unknown;
                fromPartial(_: {}): _109.SubmitMultisigPubKeysResponse;
            };
            SubmitMultisigSignaturesRequest: {
                encode(message: _109.SubmitMultisigSignaturesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.SubmitMultisigSignaturesRequest;
                fromJSON(object: any): _109.SubmitMultisigSignaturesRequest;
                toJSON(message: _109.SubmitMultisigSignaturesRequest): unknown;
                fromPartial(object: {
                    sender?: Uint8Array;
                    sigId?: string;
                    signatures?: Uint8Array[];
                }): _109.SubmitMultisigSignaturesRequest;
            };
            SubmitMultisigSignaturesResponse: {
                encode(_: _109.SubmitMultisigSignaturesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.SubmitMultisigSignaturesResponse;
                fromJSON(_: any): _109.SubmitMultisigSignaturesResponse;
                toJSON(_: _109.SubmitMultisigSignaturesResponse): unknown;
                fromPartial(_: {}): _109.SubmitMultisigSignaturesResponse;
            };
            Params: {
                encode(message: _107.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Params;
                fromJSON(object: any): _107.Params;
                toJSON(message: _107.Params): unknown;
                fromPartial(object: {
                    keyRequirements?: {
                        keyRole?: _102.KeyRole;
                        keyType?: _102.KeyType;
                        minKeygenThreshold?: {
                            numerator?: any;
                            denominator?: any;
                        };
                        safetyThreshold?: {
                            numerator?: any;
                            denominator?: any;
                        };
                        keyShareDistributionPolicy?: _102.KeyShareDistributionPolicy;
                        maxTotalShareCount?: any;
                        minTotalShareCount?: any;
                        keygenVotingThreshold?: {
                            numerator?: any;
                            denominator?: any;
                        };
                        signVotingThreshold?: {
                            numerator?: any;
                            denominator?: any;
                        };
                        keygenTimeout?: any;
                        signTimeout?: any;
                    }[];
                    suspendDurationInBlocks?: any;
                    heartbeatPeriodInBlocks?: any;
                    maxMissedBlocksPerWindow?: {
                        numerator?: any;
                        denominator?: any;
                    };
                    unbondingLockingKeyRotationCount?: any;
                    externalMultisigThreshold?: {
                        numerator?: any;
                        denominator?: any;
                    };
                    maxSignQueueSize?: any;
                    maxSimultaneousSignShares?: any;
                    tssSignedBlocksWindow?: any;
                }): _107.Params;
            };
            GenesisState: {
                encode(message: _106.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.GenesisState;
                fromJSON(object: any): _106.GenesisState;
                toJSON(message: _106.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        keyRequirements?: {
                            keyRole?: _102.KeyRole;
                            keyType?: _102.KeyType;
                            minKeygenThreshold?: {
                                numerator?: any;
                                denominator?: any;
                            };
                            safetyThreshold?: {
                                numerator?: any;
                                denominator?: any;
                            };
                            keyShareDistributionPolicy?: _102.KeyShareDistributionPolicy;
                            maxTotalShareCount?: any;
                            minTotalShareCount?: any;
                            keygenVotingThreshold?: {
                                numerator?: any;
                                denominator?: any;
                            };
                            signVotingThreshold?: {
                                numerator?: any;
                                denominator?: any;
                            };
                            keygenTimeout?: any;
                            signTimeout?: any;
                        }[];
                        suspendDurationInBlocks?: any;
                        heartbeatPeriodInBlocks?: any;
                        maxMissedBlocksPerWindow?: {
                            numerator?: any;
                            denominator?: any;
                        };
                        unbondingLockingKeyRotationCount?: any;
                        externalMultisigThreshold?: {
                            numerator?: any;
                            denominator?: any;
                        };
                        maxSignQueueSize?: any;
                        maxSimultaneousSignShares?: any;
                        tssSignedBlocksWindow?: any;
                    };
                }): _106.GenesisState;
            };
        };
    }
    namespace utils {
        const v1beta1: {
            Threshold: {
                encode(message: _113.Threshold, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.Threshold;
                fromJSON(object: any): _113.Threshold;
                toJSON(message: _113.Threshold): unknown;
                fromPartial(object: {
                    numerator?: any;
                    denominator?: any;
                }): _113.Threshold;
            };
            QueueState_ItemsEntry: {
                encode(message: _112.QueueState_ItemsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.QueueState_ItemsEntry;
                fromJSON(object: any): _112.QueueState_ItemsEntry;
                toJSON(message: _112.QueueState_ItemsEntry): unknown;
                fromPartial(object: {
                    key?: string;
                    value?: any;
                }): _112.QueueState_ItemsEntry;
            };
            QueueState: {
                encode(message: _112.QueueState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.QueueState;
                fromJSON(object: any): _112.QueueState;
                toJSON(message: _112.QueueState): unknown;
                fromPartial(object: {
                    items?: {
                        [x: string]: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        };
                    };
                }): _112.QueueState;
            };
            QueueState_Item: {
                encode(message: _112.QueueState_Item, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.QueueState_Item;
                fromJSON(object: any): _112.QueueState_Item;
                toJSON(message: _112.QueueState_Item): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                }): _112.QueueState_Item;
            };
            Bitmap: {
                encode(message: _111.Bitmap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.Bitmap;
                fromJSON(object: any): _111.Bitmap;
                toJSON(message: _111.Bitmap): unknown;
                fromPartial(object: {
                    trueCountCache?: {
                        cumulativeValue?: any[];
                        index?: number;
                        maxSize?: number;
                    };
                }): _111.Bitmap;
            };
            CircularBuffer: {
                encode(message: _111.CircularBuffer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.CircularBuffer;
                fromJSON(object: any): _111.CircularBuffer;
                toJSON(message: _111.CircularBuffer): unknown;
                fromPartial(object: {
                    cumulativeValue?: any[];
                    index?: number;
                    maxSize?: number;
                }): _111.CircularBuffer;
            };
        };
    }
    namespace vote {
        namespace exported {
            const v1beta1: {
                pollStateFromJSON(object: any): _114.PollState;
                pollStateToJSON(object: _114.PollState): string;
                PollState: typeof _114.PollState;
                PollMetadata: {
                    encode(message: _114.PollMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.PollMetadata;
                    fromJSON(object: any): _114.PollMetadata;
                    toJSON(message: _114.PollMetadata): unknown;
                    fromPartial(object: {
                        expiresAt?: any;
                        result?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        votingThreshold?: {
                            numerator?: any;
                            denominator?: any;
                        };
                        state?: _114.PollState;
                        minVoterCount?: any;
                        rewardPoolName?: string;
                        gracePeriod?: any;
                        completedAt?: any;
                        id?: any;
                        snapshot?: {
                            timestamp?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            height?: any;
                            participants?: {
                                [x: string]: {
                                    address?: Uint8Array;
                                    weight?: Uint8Array;
                                };
                            };
                            bondedWeight?: Uint8Array;
                        };
                        module?: string;
                        moduleMetadata?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _114.PollMetadata;
                };
                PollKey: {
                    encode(message: _114.PollKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.PollKey;
                    fromJSON(object: any): _114.PollKey;
                    toJSON(message: _114.PollKey): unknown;
                    fromPartial(object: {
                        module?: string;
                        id?: string;
                    }): _114.PollKey;
                };
                PollParticipants: {
                    encode(message: _114.PollParticipants, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.PollParticipants;
                    fromJSON(object: any): _114.PollParticipants;
                    toJSON(message: _114.PollParticipants): unknown;
                    fromPartial(object: {
                        pollId?: any;
                        participants?: Uint8Array[];
                    }): _114.PollParticipants;
                };
            };
        }
        const v1beta1: {
            TalliedVote_IsVoterLateEntry: {
                encode(message: _120.TalliedVote_IsVoterLateEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.TalliedVote_IsVoterLateEntry;
                fromJSON(object: any): _120.TalliedVote_IsVoterLateEntry;
                toJSON(message: _120.TalliedVote_IsVoterLateEntry): unknown;
                fromPartial(object: {
                    key?: string;
                    value?: boolean;
                }): _120.TalliedVote_IsVoterLateEntry;
            };
            TalliedVote: {
                encode(message: _120.TalliedVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.TalliedVote;
                fromJSON(object: any): _120.TalliedVote;
                toJSON(message: _120.TalliedVote): unknown;
                fromPartial(object: {
                    tally?: Uint8Array;
                    data?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    pollId?: any;
                    isVoterLate?: {
                        [x: string]: boolean;
                    };
                }): _120.TalliedVote;
            };
            VoteRequest: {
                encode(message: _119.VoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.VoteRequest;
                fromJSON(object: any): _119.VoteRequest;
                toJSON(message: _119.VoteRequest): unknown;
                fromPartial(object: {
                    sender?: Uint8Array;
                    pollId?: any;
                    vote?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _119.VoteRequest;
            };
            VoteResponse: {
                encode(message: _119.VoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.VoteResponse;
                fromJSON(object: any): _119.VoteResponse;
                toJSON(message: _119.VoteResponse): unknown;
                fromPartial(object: {
                    log?: string;
                }): _119.VoteResponse;
            };
            Params: {
                encode(message: _117.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.Params;
                fromJSON(object: any): _117.Params;
                toJSON(message: _117.Params): unknown;
                fromPartial(object: {
                    defaultVotingThreshold?: {
                        numerator?: any;
                        denominator?: any;
                    };
                    endBlockerLimit?: any;
                }): _117.Params;
            };
            GenesisState: {
                encode(message: _116.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.GenesisState;
                fromJSON(object: any): _116.GenesisState;
                toJSON(message: _116.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        defaultVotingThreshold?: {
                            numerator?: any;
                            denominator?: any;
                        };
                        endBlockerLimit?: any;
                    };
                    pollMetadatas?: {
                        expiresAt?: any;
                        result?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        votingThreshold?: {
                            numerator?: any;
                            denominator?: any;
                        };
                        state?: _114.PollState;
                        minVoterCount?: any;
                        rewardPoolName?: string;
                        gracePeriod?: any;
                        completedAt?: any;
                        id?: any;
                        snapshot?: {
                            timestamp?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            height?: any;
                            participants?: {
                                [x: string]: {
                                    address?: Uint8Array;
                                    weight?: Uint8Array;
                                };
                            };
                            bondedWeight?: Uint8Array;
                        };
                        module?: string;
                        moduleMetadata?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                }): _116.GenesisState;
            };
            Voted: {
                encode(message: _115.Voted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.Voted;
                fromJSON(object: any): _115.Voted;
                toJSON(message: _115.Voted): unknown;
                fromPartial(object: {
                    module?: string;
                    action?: string;
                    poll?: string;
                    voter?: string;
                    state?: string;
                }): _115.Voted;
            };
        };
    }
}
