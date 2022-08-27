import * as _331 from "./v1/attestation";
import * as _332 from "./v1/batch";
import * as _333 from "./v1/ethereum_signer";
import * as _334 from "./v1/genesis";
import * as _335 from "./v1/msgs";
import * as _336 from "./v1/pool";
import * as _337 from "./v1/query";
import * as _338 from "./v1/types";
export declare namespace gravity {
    const v1: {
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                valsetConfirm(value: _335.MsgValsetConfirm): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                sendToEth(value: _335.MsgSendToEth): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                requestBatch(value: _335.MsgRequestBatch): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmBatch(value: _335.MsgConfirmBatch): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmLogicCall(value: _335.MsgConfirmLogicCall): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                sendToCosmosClaim(value: _335.MsgSendToCosmosClaim): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                executeIbcAutoForwards(value: _335.MsgExecuteIbcAutoForwards): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                batchSendToEthClaim(value: _335.MsgBatchSendToEthClaim): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                valsetUpdateClaim(value: _335.MsgValsetUpdatedClaim): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                eRC20DeployedClaim(value: _335.MsgERC20DeployedClaim): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                logicCallExecutedClaim(value: _335.MsgLogicCallExecutedClaim): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                setOrchestratorAddress(value: _335.MsgSetOrchestratorAddress): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                cancelSendToEth(value: _335.MsgCancelSendToEth): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                submitBadSignatureEvidence(value: _335.MsgSubmitBadSignatureEvidence): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                valsetConfirm(value: _335.MsgValsetConfirm): {
                    typeUrl: string;
                    value: _335.MsgValsetConfirm;
                };
                sendToEth(value: _335.MsgSendToEth): {
                    typeUrl: string;
                    value: _335.MsgSendToEth;
                };
                requestBatch(value: _335.MsgRequestBatch): {
                    typeUrl: string;
                    value: _335.MsgRequestBatch;
                };
                confirmBatch(value: _335.MsgConfirmBatch): {
                    typeUrl: string;
                    value: _335.MsgConfirmBatch;
                };
                confirmLogicCall(value: _335.MsgConfirmLogicCall): {
                    typeUrl: string;
                    value: _335.MsgConfirmLogicCall;
                };
                sendToCosmosClaim(value: _335.MsgSendToCosmosClaim): {
                    typeUrl: string;
                    value: _335.MsgSendToCosmosClaim;
                };
                executeIbcAutoForwards(value: _335.MsgExecuteIbcAutoForwards): {
                    typeUrl: string;
                    value: _335.MsgExecuteIbcAutoForwards;
                };
                batchSendToEthClaim(value: _335.MsgBatchSendToEthClaim): {
                    typeUrl: string;
                    value: _335.MsgBatchSendToEthClaim;
                };
                valsetUpdateClaim(value: _335.MsgValsetUpdatedClaim): {
                    typeUrl: string;
                    value: _335.MsgValsetUpdatedClaim;
                };
                eRC20DeployedClaim(value: _335.MsgERC20DeployedClaim): {
                    typeUrl: string;
                    value: _335.MsgERC20DeployedClaim;
                };
                logicCallExecutedClaim(value: _335.MsgLogicCallExecutedClaim): {
                    typeUrl: string;
                    value: _335.MsgLogicCallExecutedClaim;
                };
                setOrchestratorAddress(value: _335.MsgSetOrchestratorAddress): {
                    typeUrl: string;
                    value: _335.MsgSetOrchestratorAddress;
                };
                cancelSendToEth(value: _335.MsgCancelSendToEth): {
                    typeUrl: string;
                    value: _335.MsgCancelSendToEth;
                };
                submitBadSignatureEvidence(value: _335.MsgSubmitBadSignatureEvidence): {
                    typeUrl: string;
                    value: _335.MsgSubmitBadSignatureEvidence;
                };
            };
            toJSON: {
                valsetConfirm(value: _335.MsgValsetConfirm): {
                    typeUrl: string;
                    value: unknown;
                };
                sendToEth(value: _335.MsgSendToEth): {
                    typeUrl: string;
                    value: unknown;
                };
                requestBatch(value: _335.MsgRequestBatch): {
                    typeUrl: string;
                    value: unknown;
                };
                confirmBatch(value: _335.MsgConfirmBatch): {
                    typeUrl: string;
                    value: unknown;
                };
                confirmLogicCall(value: _335.MsgConfirmLogicCall): {
                    typeUrl: string;
                    value: unknown;
                };
                sendToCosmosClaim(value: _335.MsgSendToCosmosClaim): {
                    typeUrl: string;
                    value: unknown;
                };
                executeIbcAutoForwards(value: _335.MsgExecuteIbcAutoForwards): {
                    typeUrl: string;
                    value: unknown;
                };
                batchSendToEthClaim(value: _335.MsgBatchSendToEthClaim): {
                    typeUrl: string;
                    value: unknown;
                };
                valsetUpdateClaim(value: _335.MsgValsetUpdatedClaim): {
                    typeUrl: string;
                    value: unknown;
                };
                eRC20DeployedClaim(value: _335.MsgERC20DeployedClaim): {
                    typeUrl: string;
                    value: unknown;
                };
                logicCallExecutedClaim(value: _335.MsgLogicCallExecutedClaim): {
                    typeUrl: string;
                    value: unknown;
                };
                setOrchestratorAddress(value: _335.MsgSetOrchestratorAddress): {
                    typeUrl: string;
                    value: unknown;
                };
                cancelSendToEth(value: _335.MsgCancelSendToEth): {
                    typeUrl: string;
                    value: unknown;
                };
                submitBadSignatureEvidence(value: _335.MsgSubmitBadSignatureEvidence): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                valsetConfirm(value: any): {
                    typeUrl: string;
                    value: _335.MsgValsetConfirm;
                };
                sendToEth(value: any): {
                    typeUrl: string;
                    value: _335.MsgSendToEth;
                };
                requestBatch(value: any): {
                    typeUrl: string;
                    value: _335.MsgRequestBatch;
                };
                confirmBatch(value: any): {
                    typeUrl: string;
                    value: _335.MsgConfirmBatch;
                };
                confirmLogicCall(value: any): {
                    typeUrl: string;
                    value: _335.MsgConfirmLogicCall;
                };
                sendToCosmosClaim(value: any): {
                    typeUrl: string;
                    value: _335.MsgSendToCosmosClaim;
                };
                executeIbcAutoForwards(value: any): {
                    typeUrl: string;
                    value: _335.MsgExecuteIbcAutoForwards;
                };
                batchSendToEthClaim(value: any): {
                    typeUrl: string;
                    value: _335.MsgBatchSendToEthClaim;
                };
                valsetUpdateClaim(value: any): {
                    typeUrl: string;
                    value: _335.MsgValsetUpdatedClaim;
                };
                eRC20DeployedClaim(value: any): {
                    typeUrl: string;
                    value: _335.MsgERC20DeployedClaim;
                };
                logicCallExecutedClaim(value: any): {
                    typeUrl: string;
                    value: _335.MsgLogicCallExecutedClaim;
                };
                setOrchestratorAddress(value: any): {
                    typeUrl: string;
                    value: _335.MsgSetOrchestratorAddress;
                };
                cancelSendToEth(value: any): {
                    typeUrl: string;
                    value: _335.MsgCancelSendToEth;
                };
                submitBadSignatureEvidence(value: any): {
                    typeUrl: string;
                    value: _335.MsgSubmitBadSignatureEvidence;
                };
            };
            fromPartial: {
                valsetConfirm(value: _335.MsgValsetConfirm): {
                    typeUrl: string;
                    value: _335.MsgValsetConfirm;
                };
                sendToEth(value: _335.MsgSendToEth): {
                    typeUrl: string;
                    value: _335.MsgSendToEth;
                };
                requestBatch(value: _335.MsgRequestBatch): {
                    typeUrl: string;
                    value: _335.MsgRequestBatch;
                };
                confirmBatch(value: _335.MsgConfirmBatch): {
                    typeUrl: string;
                    value: _335.MsgConfirmBatch;
                };
                confirmLogicCall(value: _335.MsgConfirmLogicCall): {
                    typeUrl: string;
                    value: _335.MsgConfirmLogicCall;
                };
                sendToCosmosClaim(value: _335.MsgSendToCosmosClaim): {
                    typeUrl: string;
                    value: _335.MsgSendToCosmosClaim;
                };
                executeIbcAutoForwards(value: _335.MsgExecuteIbcAutoForwards): {
                    typeUrl: string;
                    value: _335.MsgExecuteIbcAutoForwards;
                };
                batchSendToEthClaim(value: _335.MsgBatchSendToEthClaim): {
                    typeUrl: string;
                    value: _335.MsgBatchSendToEthClaim;
                };
                valsetUpdateClaim(value: _335.MsgValsetUpdatedClaim): {
                    typeUrl: string;
                    value: _335.MsgValsetUpdatedClaim;
                };
                eRC20DeployedClaim(value: _335.MsgERC20DeployedClaim): {
                    typeUrl: string;
                    value: _335.MsgERC20DeployedClaim;
                };
                logicCallExecutedClaim(value: _335.MsgLogicCallExecutedClaim): {
                    typeUrl: string;
                    value: _335.MsgLogicCallExecutedClaim;
                };
                setOrchestratorAddress(value: _335.MsgSetOrchestratorAddress): {
                    typeUrl: string;
                    value: _335.MsgSetOrchestratorAddress;
                };
                cancelSendToEth(value: _335.MsgCancelSendToEth): {
                    typeUrl: string;
                    value: _335.MsgCancelSendToEth;
                };
                submitBadSignatureEvidence(value: _335.MsgSubmitBadSignatureEvidence): {
                    typeUrl: string;
                    value: _335.MsgSubmitBadSignatureEvidence;
                };
            };
        };
        AminoConverter: {
            "/gravity.v1.MsgValsetConfirm": {
                aminoType: string;
                toAmino: ({ nonce, orchestrator, ethAddress, signature }: _335.MsgValsetConfirm) => {
                    nonce: string;
                    orchestrator: string;
                    eth_address: string;
                    signature: string;
                };
                fromAmino: ({ nonce, orchestrator, eth_address, signature }: {
                    nonce: string;
                    orchestrator: string;
                    eth_address: string;
                    signature: string;
                }) => _335.MsgValsetConfirm;
            };
            "/gravity.v1.MsgSendToEth": {
                aminoType: string;
                toAmino: ({ sender, ethDest, amount, bridgeFee }: _335.MsgSendToEth) => {
                    sender: string;
                    eth_dest: string;
                    amount: {
                        denom: string;
                        amount: string;
                    };
                    bridge_fee: {
                        denom: string;
                        amount: string;
                    };
                };
                fromAmino: ({ sender, eth_dest, amount, bridge_fee }: {
                    sender: string;
                    eth_dest: string;
                    amount: {
                        denom: string;
                        amount: string;
                    };
                    bridge_fee: {
                        denom: string;
                        amount: string;
                    };
                }) => _335.MsgSendToEth;
            };
            "/gravity.v1.MsgRequestBatch": {
                aminoType: string;
                toAmino: ({ sender, denom }: _335.MsgRequestBatch) => {
                    sender: string;
                    denom: string;
                };
                fromAmino: ({ sender, denom }: {
                    sender: string;
                    denom: string;
                }) => _335.MsgRequestBatch;
            };
            "/gravity.v1.MsgConfirmBatch": {
                aminoType: string;
                toAmino: ({ nonce, tokenContract, ethSigner, orchestrator, signature }: _335.MsgConfirmBatch) => {
                    nonce: string;
                    token_contract: string;
                    eth_signer: string;
                    orchestrator: string;
                    signature: string;
                };
                fromAmino: ({ nonce, token_contract, eth_signer, orchestrator, signature }: {
                    nonce: string;
                    token_contract: string;
                    eth_signer: string;
                    orchestrator: string;
                    signature: string;
                }) => _335.MsgConfirmBatch;
            };
            "/gravity.v1.MsgConfirmLogicCall": {
                aminoType: string;
                toAmino: ({ invalidationId, invalidationNonce, ethSigner, orchestrator, signature }: _335.MsgConfirmLogicCall) => {
                    invalidation_id: string;
                    invalidation_nonce: string;
                    eth_signer: string;
                    orchestrator: string;
                    signature: string;
                };
                fromAmino: ({ invalidation_id, invalidation_nonce, eth_signer, orchestrator, signature }: {
                    invalidation_id: string;
                    invalidation_nonce: string;
                    eth_signer: string;
                    orchestrator: string;
                    signature: string;
                }) => _335.MsgConfirmLogicCall;
            };
            "/gravity.v1.MsgSendToCosmosClaim": {
                aminoType: string;
                toAmino: ({ eventNonce, blockHeight, tokenContract, amount, ethereumSender, cosmosReceiver, orchestrator }: _335.MsgSendToCosmosClaim) => {
                    event_nonce: string;
                    block_height: string;
                    token_contract: string;
                    amount: string;
                    ethereum_sender: string;
                    cosmos_receiver: string;
                    orchestrator: string;
                };
                fromAmino: ({ event_nonce, block_height, token_contract, amount, ethereum_sender, cosmos_receiver, orchestrator }: {
                    event_nonce: string;
                    block_height: string;
                    token_contract: string;
                    amount: string;
                    ethereum_sender: string;
                    cosmos_receiver: string;
                    orchestrator: string;
                }) => _335.MsgSendToCosmosClaim;
            };
            "/gravity.v1.MsgExecuteIbcAutoForwards": {
                aminoType: string;
                toAmino: ({ forwardsToClear, executor }: _335.MsgExecuteIbcAutoForwards) => {
                    forwards_to_clear: string;
                    executor: string;
                };
                fromAmino: ({ forwards_to_clear, executor }: {
                    forwards_to_clear: string;
                    executor: string;
                }) => _335.MsgExecuteIbcAutoForwards;
            };
            "/gravity.v1.MsgBatchSendToEthClaim": {
                aminoType: string;
                toAmino: ({ eventNonce, blockHeight, batchNonce, tokenContract, orchestrator }: _335.MsgBatchSendToEthClaim) => {
                    event_nonce: string;
                    block_height: string;
                    batch_nonce: string;
                    token_contract: string;
                    orchestrator: string;
                };
                fromAmino: ({ event_nonce, block_height, batch_nonce, token_contract, orchestrator }: {
                    event_nonce: string;
                    block_height: string;
                    batch_nonce: string;
                    token_contract: string;
                    orchestrator: string;
                }) => _335.MsgBatchSendToEthClaim;
            };
            "/gravity.v1.MsgValsetUpdatedClaim": {
                aminoType: string;
                toAmino: ({ eventNonce, valsetNonce, blockHeight, members, rewardAmount, rewardToken, orchestrator }: _335.MsgValsetUpdatedClaim) => {
                    event_nonce: string;
                    valset_nonce: string;
                    block_height: string;
                    members: {
                        power: string;
                        ethereum_address: string;
                    }[];
                    reward_amount: string;
                    reward_token: string;
                    orchestrator: string;
                };
                fromAmino: ({ event_nonce, valset_nonce, block_height, members, reward_amount, reward_token, orchestrator }: {
                    event_nonce: string;
                    valset_nonce: string;
                    block_height: string;
                    members: {
                        power: string;
                        ethereum_address: string;
                    }[];
                    reward_amount: string;
                    reward_token: string;
                    orchestrator: string;
                }) => _335.MsgValsetUpdatedClaim;
            };
            "/gravity.v1.MsgERC20DeployedClaim": {
                aminoType: string;
                toAmino: ({ eventNonce, blockHeight, cosmosDenom, tokenContract, name, symbol, decimals, orchestrator }: _335.MsgERC20DeployedClaim) => {
                    event_nonce: string;
                    block_height: string;
                    cosmos_denom: string;
                    token_contract: string;
                    name: string;
                    symbol: string;
                    decimals: string;
                    orchestrator: string;
                };
                fromAmino: ({ event_nonce, block_height, cosmos_denom, token_contract, name, symbol, decimals, orchestrator }: {
                    event_nonce: string;
                    block_height: string;
                    cosmos_denom: string;
                    token_contract: string;
                    name: string;
                    symbol: string;
                    decimals: string;
                    orchestrator: string;
                }) => _335.MsgERC20DeployedClaim;
            };
            "/gravity.v1.MsgLogicCallExecutedClaim": {
                aminoType: string;
                toAmino: ({ eventNonce, blockHeight, invalidationId, invalidationNonce, orchestrator }: _335.MsgLogicCallExecutedClaim) => {
                    event_nonce: string;
                    block_height: string;
                    invalidation_id: Uint8Array;
                    invalidation_nonce: string;
                    orchestrator: string;
                };
                fromAmino: ({ event_nonce, block_height, invalidation_id, invalidation_nonce, orchestrator }: {
                    event_nonce: string;
                    block_height: string;
                    invalidation_id: Uint8Array;
                    invalidation_nonce: string;
                    orchestrator: string;
                }) => _335.MsgLogicCallExecutedClaim;
            };
            "/gravity.v1.MsgSetOrchestratorAddress": {
                aminoType: string;
                toAmino: ({ validator, orchestrator, ethAddress }: _335.MsgSetOrchestratorAddress) => {
                    validator: string;
                    orchestrator: string;
                    eth_address: string;
                };
                fromAmino: ({ validator, orchestrator, eth_address }: {
                    validator: string;
                    orchestrator: string;
                    eth_address: string;
                }) => _335.MsgSetOrchestratorAddress;
            };
            "/gravity.v1.MsgCancelSendToEth": {
                aminoType: string;
                toAmino: ({ transactionId, sender }: _335.MsgCancelSendToEth) => {
                    transaction_id: string;
                    sender: string;
                };
                fromAmino: ({ transaction_id, sender }: {
                    transaction_id: string;
                    sender: string;
                }) => _335.MsgCancelSendToEth;
            };
            "/gravity.v1.MsgSubmitBadSignatureEvidence": {
                aminoType: string;
                toAmino: ({ subject, signature, sender }: _335.MsgSubmitBadSignatureEvidence) => {
                    subject: {
                        type_url: string;
                        value: Uint8Array;
                    };
                    signature: string;
                    sender: string;
                };
                fromAmino: ({ subject, signature, sender }: {
                    subject: {
                        type_url: string;
                        value: Uint8Array;
                    };
                    signature: string;
                    sender: string;
                }) => _335.MsgSubmitBadSignatureEvidence;
            };
        };
        BridgeValidator: {
            encode(message: _338.BridgeValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _338.BridgeValidator;
            fromJSON(object: any): _338.BridgeValidator;
            toJSON(message: _338.BridgeValidator): unknown;
            fromPartial(object: {
                power?: any;
                ethereumAddress?: string;
            }): _338.BridgeValidator;
        };
        Valset: {
            encode(message: _338.Valset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _338.Valset;
            fromJSON(object: any): _338.Valset;
            toJSON(message: _338.Valset): unknown;
            fromPartial(object: {
                nonce?: any;
                members?: {
                    power?: any;
                    ethereumAddress?: string;
                }[];
                height?: any;
                rewardAmount?: string;
                rewardToken?: string;
            }): _338.Valset;
        };
        LastObservedEthereumBlockHeight: {
            encode(message: _338.LastObservedEthereumBlockHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _338.LastObservedEthereumBlockHeight;
            fromJSON(object: any): _338.LastObservedEthereumBlockHeight;
            toJSON(message: _338.LastObservedEthereumBlockHeight): unknown;
            fromPartial(object: {
                cosmosBlockHeight?: any;
                ethereumBlockHeight?: any;
            }): _338.LastObservedEthereumBlockHeight;
        };
        ERC20ToDenom: {
            encode(message: _338.ERC20ToDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _338.ERC20ToDenom;
            fromJSON(object: any): _338.ERC20ToDenom;
            toJSON(message: _338.ERC20ToDenom): unknown;
            fromPartial(object: {
                erc20?: string;
                denom?: string;
            }): _338.ERC20ToDenom;
        };
        UnhaltBridgeProposal: {
            encode(message: _338.UnhaltBridgeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _338.UnhaltBridgeProposal;
            fromJSON(object: any): _338.UnhaltBridgeProposal;
            toJSON(message: _338.UnhaltBridgeProposal): unknown;
            fromPartial(object: {
                title?: string;
                description?: string;
                targetNonce?: any;
            }): _338.UnhaltBridgeProposal;
        };
        AirdropProposal: {
            encode(message: _338.AirdropProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _338.AirdropProposal;
            fromJSON(object: any): _338.AirdropProposal;
            toJSON(message: _338.AirdropProposal): unknown;
            fromPartial(object: {
                title?: string;
                description?: string;
                denom?: string;
                recipients?: Uint8Array;
                amounts?: any[];
            }): _338.AirdropProposal;
        };
        IBCMetadataProposal: {
            encode(message: _338.IBCMetadataProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _338.IBCMetadataProposal;
            fromJSON(object: any): _338.IBCMetadataProposal;
            toJSON(message: _338.IBCMetadataProposal): unknown;
            fromPartial(object: {
                title?: string;
                description?: string;
                metadata?: {
                    description?: string;
                    denomUnits?: {
                        denom?: string;
                        exponent?: number;
                        aliases?: string[];
                    }[];
                    base?: string;
                    display?: string;
                    name?: string;
                    symbol?: string;
                    uri?: string;
                    uriHash?: string;
                };
                ibcDenom?: string;
            }): _338.IBCMetadataProposal;
        };
        PendingIbcAutoForward: {
            encode(message: _338.PendingIbcAutoForward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _338.PendingIbcAutoForward;
            fromJSON(object: any): _338.PendingIbcAutoForward;
            toJSON(message: _338.PendingIbcAutoForward): unknown;
            fromPartial(object: {
                foreignReceiver?: string;
                token?: {
                    denom?: string;
                    amount?: string;
                };
                ibcChannel?: string;
                eventNonce?: any;
            }): _338.PendingIbcAutoForward;
        };
        QueryParamsRequest: {
            encode(_: _337.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _337.QueryParamsRequest;
            fromJSON(_: any): _337.QueryParamsRequest;
            toJSON(_: _337.QueryParamsRequest): unknown;
            fromPartial(_: {}): _337.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _337.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _337.QueryParamsResponse;
            fromJSON(object: any): _337.QueryParamsResponse;
            toJSON(message: _337.QueryParamsResponse): unknown;
            fromPartial(object: {
                params?: {
                    gravityId?: string;
                    contractSourceHash?: string;
                    bridgeEthereumAddress?: string;
                    bridgeChainId?: any;
                    signedValsetsWindow?: any;
                    signedBatchesWindow?: any;
                    signedLogicCallsWindow?: any;
                    targetBatchTimeout?: any;
                    averageBlockTime?: any;
                    averageEthereumBlockTime?: any;
                    slashFractionValset?: Uint8Array;
                    slashFractionBatch?: Uint8Array;
                    slashFractionLogicCall?: Uint8Array;
                    unbondSlashingValsetsWindow?: any;
                    slashFractionBadEthSignature?: Uint8Array;
                    valsetReward?: {
                        denom?: string;
                        amount?: string;
                    };
                    bridgeActive?: boolean;
                    ethereumBlacklist?: string[];
                };
            }): _337.QueryParamsResponse;
        };
        QueryCurrentValsetRequest: {
            encode(_: _337.QueryCurrentValsetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _337.QueryCurrentValsetRequest;
            fromJSON(_: any): _337.QueryCurrentValsetRequest;
            toJSON(_: _337.QueryCurrentValsetRequest): unknown;
            fromPartial(_: {}): _337.QueryCurrentValsetRequest;
        };
        QueryCurrentValsetResponse: {
            encode(message: _337.QueryCurrentValsetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _337.QueryCurrentValsetResponse;
            fromJSON(object: any): _337.QueryCurrentValsetResponse;
            toJSON(message: _337.QueryCurrentValsetResponse): unknown;
            fromPartial(object: {
                valset?: {
                    nonce?: any;
                    members?: {
                        power?: any;
                        ethereumAddress?: string;
                    }[];
                    height?: any;
                    rewardAmount?: string;
                    rewardToken?: string;
                };
            }): _337.QueryCurrentValsetResponse;
        };
        QueryValsetRequestRequest: {
            encode(message: _337.QueryValsetRequestRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _337.QueryValsetRequestRequest;
            fromJSON(object: any): _337.QueryValsetRequestRequest;
            toJSON(message: _337.QueryValsetRequestRequest): unknown;
            fromPartial(object: {
                nonce?: any;
            }): _337.QueryValsetRequestRequest;
        };
        QueryValsetRequestResponse: {
            encode(message: _337.QueryValsetRequestResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _337.QueryValsetRequestResponse;
            fromJSON(object: any): _337.QueryValsetRequestResponse;
            toJSON(message: _337.QueryValsetRequestResponse): unknown;
            fromPartial(object: {
                valset?: {
                    nonce?: any;
                    members?: {
                        power?: any;
                        ethereumAddress?: string;
                    }[];
                    height?: any;
                    rewardAmount?: string;
                    rewardToken?: string;
                };
            }): _337.QueryValsetRequestResponse;
        };
        QueryValsetConfirmRequest: {
            encode(message: _337.QueryValsetConfirmRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _337.QueryValsetConfirmRequest;
            fromJSON(object: any): _337.QueryValsetConfirmRequest;
            toJSON(message: _337.QueryValsetConfirmRequest): unknown;
            fromPartial(object: {
                nonce?: any;
                address?: string;
            }): _337.QueryValsetConfirmRequest;
        };
        QueryValsetConfirmResponse: {
            encode(message: _337.QueryValsetConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _337.QueryValsetConfirmResponse;
            fromJSON(object: any): _337.QueryValsetConfirmResponse;
            toJSON(message: _337.QueryValsetConfirmResponse): unknown;
            fromPartial(object: {
                confirm?: {
                    nonce?: any;
                    orchestrator?: string;
                    ethAddress?: string;
                    signature?: string;
                };
            }): _337.QueryValsetConfirmResponse;
        };
        QueryValsetConfirmsByNonceRequest: {
            encode(message: _337.QueryValsetConfirmsByNonceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _337.QueryValsetConfirmsByNonceRequest;
            fromJSON(object: any): _337.QueryValsetConfirmsByNonceRequest;
            toJSON(message: _337.QueryValsetConfirmsByNonceRequest): unknown;
            fromPartial(object: {
                nonce?: any;
            }): _337.QueryValsetConfirmsByNonceRequest;
        };
        QueryValsetConfirmsByNonceResponse: {
            encode(message: _337.QueryValsetConfirmsByNonceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _337.QueryValsetConfirmsByNonceResponse;
            fromJSON(object: any): _337.QueryValsetConfirmsByNonceResponse;
            toJSON(message: _337.QueryValsetConfirmsByNonceResponse): unknown;
            fromPartial(object: {
                confirms?: {
                    nonce?: any;
                    orchestrator?: string;
                    ethAddress?: string;
                    signature?: string;
                }[];
            }): _337.QueryValsetConfirmsByNonceResponse;
        };
        QueryLastValsetRequestsRequest: {
            encode(_: _337.QueryLastValsetRequestsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _337.QueryLastValsetRequestsRequest;
            fromJSON(_: any): _337.QueryLastValsetRequestsRequest;
            toJSON(_: _337.QueryLastValsetRequestsRequest): unknown;
            fromPartial(_: {}): _337.QueryLastValsetRequestsRequest;
        };
        QueryLastValsetRequestsResponse: {
            encode(message: _337.QueryLastValsetRequestsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _337.QueryLastValsetRequestsResponse;
            fromJSON(object: any): _337.QueryLastValsetRequestsResponse;
            toJSON(message: _337.QueryLastValsetRequestsResponse): unknown;
            fromPartial(object: {
                valsets?: {
                    nonce?: any;
                    members?: {
                        power?: any;
                        ethereumAddress?: string;
                    }[];
                    height?: any;
                    rewardAmount?: string;
                    rewardToken?: string;
                }[];
            }): _337.QueryLastValsetRequestsResponse;
        };
        QueryLastPendingValsetRequestByAddrRequest: {
            encode(message: _337.QueryLastPendingValsetRequestByAddrRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _337.QueryLastPendingValsetRequestByAddrRequest;
            fromJSON(object: any): _337.QueryLastPendingValsetRequestByAddrRequest;
            toJSON(message: _337.QueryLastPendingValsetRequestByAddrRequest): unknown;
            fromPartial(object: {
                address?: string;
            }): _337.QueryLastPendingValsetRequestByAddrRequest;
        };
        QueryLastPendingValsetRequestByAddrResponse: {
            encode(message: _337.QueryLastPendingValsetRequestByAddrResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _337.QueryLastPendingValsetRequestByAddrResponse;
            fromJSON(object: any): _337.QueryLastPendingValsetRequestByAddrResponse;
            toJSON(message: _337.QueryLastPendingValsetRequestByAddrResponse): unknown;
            fromPartial(object: {
                valsets?: {
                    nonce?: any;
                    members?: {
                        power?: any;
                        ethereumAddress?: string;
                    }[];
                    height?: any;
                    rewardAmount?: string;
                    rewardToken?: string;
                }[];
            }): _337.QueryLastPendingValsetRequestByAddrResponse;
        };
        QueryBatchFeeRequest: {
            encode(_: _337.QueryBatchFeeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _337.QueryBatchFeeRequest;
            fromJSON(_: any): _337.QueryBatchFeeRequest;
            toJSON(_: _337.QueryBatchFeeRequest): unknown;
            fromPartial(_: {}): _337.QueryBatchFeeRequest;
        };
        QueryBatchFeeResponse: {
            encode(message: _337.QueryBatchFeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _337.QueryBatchFeeResponse;
            fromJSON(object: any): _337.QueryBatchFeeResponse;
            toJSON(message: _337.QueryBatchFeeResponse): unknown;
            fromPartial(object: {
                batchFees?: {
                    token?: string;
                    totalFees?: string;
                    txCount?: any;
                }[];
            }): _337.QueryBatchFeeResponse;
        };
        QueryLastPendingBatchRequestByAddrRequest: {
            encode(message: _337.QueryLastPendingBatchRequestByAddrRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _337.QueryLastPendingBatchRequestByAddrRequest;
            fromJSON(object: any): _337.QueryLastPendingBatchRequestByAddrRequest;
            toJSON(message: _337.QueryLastPendingBatchRequestByAddrRequest): unknown;
            fromPartial(object: {
                address?: string;
            }): _337.QueryLastPendingBatchRequestByAddrRequest;
        };
        QueryLastPendingBatchRequestByAddrResponse: {
            encode(message: _337.QueryLastPendingBatchRequestByAddrResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _337.QueryLastPendingBatchRequestByAddrResponse;
            fromJSON(object: any): _337.QueryLastPendingBatchRequestByAddrResponse;
            toJSON(message: _337.QueryLastPendingBatchRequestByAddrResponse): unknown;
            fromPartial(object: {
                batch?: {
                    batchNonce?: any;
                    batchTimeout?: any;
                    transactions?: {
                        id?: any;
                        sender?: string;
                        destAddress?: string;
                        erc20Token?: {
                            contract?: string;
                            amount?: string;
                        };
                        erc20Fee?: {
                            contract?: string;
                            amount?: string;
                        };
                    }[];
                    tokenContract?: string;
                    block?: any;
                }[];
            }): _337.QueryLastPendingBatchRequestByAddrResponse;
        };
        QueryLastPendingLogicCallByAddrRequest: {
            encode(message: _337.QueryLastPendingLogicCallByAddrRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _337.QueryLastPendingLogicCallByAddrRequest;
            fromJSON(object: any): _337.QueryLastPendingLogicCallByAddrRequest;
            toJSON(message: _337.QueryLastPendingLogicCallByAddrRequest): unknown;
            fromPartial(object: {
                address?: string;
            }): _337.QueryLastPendingLogicCallByAddrRequest;
        };
        QueryLastPendingLogicCallByAddrResponse: {
            encode(message: _337.QueryLastPendingLogicCallByAddrResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _337.QueryLastPendingLogicCallByAddrResponse;
            fromJSON(object: any): _337.QueryLastPendingLogicCallByAddrResponse;
            toJSON(message: _337.QueryLastPendingLogicCallByAddrResponse): unknown;
            fromPartial(object: {
                call?: {
                    transfers?: {
                        contract?: string;
                        amount?: string;
                    }[];
                    fees?: {
                        contract?: string;
                        amount?: string;
                    }[];
                    logicContractAddress?: string;
                    payload?: Uint8Array;
                    timeout?: any;
                    invalidationId?: Uint8Array;
                    invalidationNonce?: any;
                    block?: any;
                }[];
            }): _337.QueryLastPendingLogicCallByAddrResponse;
        };
        QueryOutgoingTxBatchesRequest: {
            encode(_: _337.QueryOutgoingTxBatchesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _337.QueryOutgoingTxBatchesRequest;
            fromJSON(_: any): _337.QueryOutgoingTxBatchesRequest;
            toJSON(_: _337.QueryOutgoingTxBatchesRequest): unknown;
            fromPartial(_: {}): _337.QueryOutgoingTxBatchesRequest;
        };
        QueryOutgoingTxBatchesResponse: {
            encode(message: _337.QueryOutgoingTxBatchesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _337.QueryOutgoingTxBatchesResponse;
            fromJSON(object: any): _337.QueryOutgoingTxBatchesResponse;
            toJSON(message: _337.QueryOutgoingTxBatchesResponse): unknown;
            fromPartial(object: {
                batches?: {
                    batchNonce?: any;
                    batchTimeout?: any;
                    transactions?: {
                        id?: any;
                        sender?: string;
                        destAddress?: string;
                        erc20Token?: {
                            contract?: string;
                            amount?: string;
                        };
                        erc20Fee?: {
                            contract?: string;
                            amount?: string;
                        };
                    }[];
                    tokenContract?: string;
                    block?: any;
                }[];
            }): _337.QueryOutgoingTxBatchesResponse;
        };
        QueryOutgoingLogicCallsRequest: {
            encode(_: _337.QueryOutgoingLogicCallsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _337.QueryOutgoingLogicCallsRequest;
            fromJSON(_: any): _337.QueryOutgoingLogicCallsRequest;
            toJSON(_: _337.QueryOutgoingLogicCallsRequest): unknown;
            fromPartial(_: {}): _337.QueryOutgoingLogicCallsRequest;
        };
        QueryOutgoingLogicCallsResponse: {
            encode(message: _337.QueryOutgoingLogicCallsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _337.QueryOutgoingLogicCallsResponse;
            fromJSON(object: any): _337.QueryOutgoingLogicCallsResponse;
            toJSON(message: _337.QueryOutgoingLogicCallsResponse): unknown;
            fromPartial(object: {
                calls?: {
                    transfers?: {
                        contract?: string;
                        amount?: string;
                    }[];
                    fees?: {
                        contract?: string;
                        amount?: string;
                    }[];
                    logicContractAddress?: string;
                    payload?: Uint8Array;
                    timeout?: any;
                    invalidationId?: Uint8Array;
                    invalidationNonce?: any;
                    block?: any;
                }[];
            }): _337.QueryOutgoingLogicCallsResponse;
        };
        QueryBatchRequestByNonceRequest: {
            encode(message: _337.QueryBatchRequestByNonceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _337.QueryBatchRequestByNonceRequest;
            fromJSON(object: any): _337.QueryBatchRequestByNonceRequest;
            toJSON(message: _337.QueryBatchRequestByNonceRequest): unknown;
            fromPartial(object: {
                nonce?: any;
                contractAddress?: string;
            }): _337.QueryBatchRequestByNonceRequest;
        };
        QueryBatchRequestByNonceResponse: {
            encode(message: _337.QueryBatchRequestByNonceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _337.QueryBatchRequestByNonceResponse;
            fromJSON(object: any): _337.QueryBatchRequestByNonceResponse;
            toJSON(message: _337.QueryBatchRequestByNonceResponse): unknown;
            fromPartial(object: {
                batch?: {
                    batchNonce?: any;
                    batchTimeout?: any;
                    transactions?: {
                        id?: any;
                        sender?: string;
                        destAddress?: string;
                        erc20Token?: {
                            contract?: string;
                            amount?: string;
                        };
                        erc20Fee?: {
                            contract?: string;
                            amount?: string;
                        };
                    }[];
                    tokenContract?: string;
                    block?: any;
                };
            }): _337.QueryBatchRequestByNonceResponse;
        };
        QueryBatchConfirmsRequest: {
            encode(message: _337.QueryBatchConfirmsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _337.QueryBatchConfirmsRequest;
            fromJSON(object: any): _337.QueryBatchConfirmsRequest;
            toJSON(message: _337.QueryBatchConfirmsRequest): unknown;
            fromPartial(object: {
                nonce?: any;
                contractAddress?: string;
            }): _337.QueryBatchConfirmsRequest;
        };
        QueryBatchConfirmsResponse: {
            encode(message: _337.QueryBatchConfirmsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _337.QueryBatchConfirmsResponse;
            fromJSON(object: any): _337.QueryBatchConfirmsResponse;
            toJSON(message: _337.QueryBatchConfirmsResponse): unknown;
            fromPartial(object: {
                confirms?: {
                    nonce?: any;
                    tokenContract?: string;
                    ethSigner?: string;
                    orchestrator?: string;
                    signature?: string;
                }[];
            }): _337.QueryBatchConfirmsResponse;
        };
        QueryLogicConfirmsRequest: {
            encode(message: _337.QueryLogicConfirmsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _337.QueryLogicConfirmsRequest;
            fromJSON(object: any): _337.QueryLogicConfirmsRequest;
            toJSON(message: _337.QueryLogicConfirmsRequest): unknown;
            fromPartial(object: {
                invalidationId?: Uint8Array;
                invalidationNonce?: any;
            }): _337.QueryLogicConfirmsRequest;
        };
        QueryLogicConfirmsResponse: {
            encode(message: _337.QueryLogicConfirmsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _337.QueryLogicConfirmsResponse;
            fromJSON(object: any): _337.QueryLogicConfirmsResponse;
            toJSON(message: _337.QueryLogicConfirmsResponse): unknown;
            fromPartial(object: {
                confirms?: {
                    invalidationId?: string;
                    invalidationNonce?: any;
                    ethSigner?: string;
                    orchestrator?: string;
                    signature?: string;
                }[];
            }): _337.QueryLogicConfirmsResponse;
        };
        QueryLastEventNonceByAddrRequest: {
            encode(message: _337.QueryLastEventNonceByAddrRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _337.QueryLastEventNonceByAddrRequest;
            fromJSON(object: any): _337.QueryLastEventNonceByAddrRequest;
            toJSON(message: _337.QueryLastEventNonceByAddrRequest): unknown;
            fromPartial(object: {
                address?: string;
            }): _337.QueryLastEventNonceByAddrRequest;
        };
        QueryLastEventNonceByAddrResponse: {
            encode(message: _337.QueryLastEventNonceByAddrResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _337.QueryLastEventNonceByAddrResponse;
            fromJSON(object: any): _337.QueryLastEventNonceByAddrResponse;
            toJSON(message: _337.QueryLastEventNonceByAddrResponse): unknown;
            fromPartial(object: {
                eventNonce?: any;
            }): _337.QueryLastEventNonceByAddrResponse;
        };
        QueryERC20ToDenomRequest: {
            encode(message: _337.QueryERC20ToDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _337.QueryERC20ToDenomRequest;
            fromJSON(object: any): _337.QueryERC20ToDenomRequest;
            toJSON(message: _337.QueryERC20ToDenomRequest): unknown;
            fromPartial(object: {
                erc20?: string;
            }): _337.QueryERC20ToDenomRequest;
        };
        QueryERC20ToDenomResponse: {
            encode(message: _337.QueryERC20ToDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _337.QueryERC20ToDenomResponse;
            fromJSON(object: any): _337.QueryERC20ToDenomResponse;
            toJSON(message: _337.QueryERC20ToDenomResponse): unknown;
            fromPartial(object: {
                denom?: string;
                cosmosOriginated?: boolean;
            }): _337.QueryERC20ToDenomResponse;
        };
        QueryDenomToERC20Request: {
            encode(message: _337.QueryDenomToERC20Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _337.QueryDenomToERC20Request;
            fromJSON(object: any): _337.QueryDenomToERC20Request;
            toJSON(message: _337.QueryDenomToERC20Request): unknown;
            fromPartial(object: {
                denom?: string;
            }): _337.QueryDenomToERC20Request;
        };
        QueryDenomToERC20Response: {
            encode(message: _337.QueryDenomToERC20Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _337.QueryDenomToERC20Response;
            fromJSON(object: any): _337.QueryDenomToERC20Response;
            toJSON(message: _337.QueryDenomToERC20Response): unknown;
            fromPartial(object: {
                erc20?: string;
                cosmosOriginated?: boolean;
            }): _337.QueryDenomToERC20Response;
        };
        QueryLastObservedEthBlockRequest: {
            encode(message: _337.QueryLastObservedEthBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _337.QueryLastObservedEthBlockRequest;
            fromJSON(object: any): _337.QueryLastObservedEthBlockRequest;
            toJSON(message: _337.QueryLastObservedEthBlockRequest): unknown;
            fromPartial(object: {
                useV1Key?: boolean;
            }): _337.QueryLastObservedEthBlockRequest;
        };
        QueryLastObservedEthBlockResponse: {
            encode(message: _337.QueryLastObservedEthBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _337.QueryLastObservedEthBlockResponse;
            fromJSON(object: any): _337.QueryLastObservedEthBlockResponse;
            toJSON(message: _337.QueryLastObservedEthBlockResponse): unknown;
            fromPartial(object: {
                block?: any;
            }): _337.QueryLastObservedEthBlockResponse;
        };
        QueryLastObservedEthNonceRequest: {
            encode(message: _337.QueryLastObservedEthNonceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _337.QueryLastObservedEthNonceRequest;
            fromJSON(object: any): _337.QueryLastObservedEthNonceRequest;
            toJSON(message: _337.QueryLastObservedEthNonceRequest): unknown;
            fromPartial(object: {
                useV1Key?: boolean;
            }): _337.QueryLastObservedEthNonceRequest;
        };
        QueryLastObservedEthNonceResponse: {
            encode(message: _337.QueryLastObservedEthNonceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _337.QueryLastObservedEthNonceResponse;
            fromJSON(object: any): _337.QueryLastObservedEthNonceResponse;
            toJSON(message: _337.QueryLastObservedEthNonceResponse): unknown;
            fromPartial(object: {
                nonce?: any;
            }): _337.QueryLastObservedEthNonceResponse;
        };
        QueryAttestationsRequest: {
            encode(message: _337.QueryAttestationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _337.QueryAttestationsRequest;
            fromJSON(object: any): _337.QueryAttestationsRequest;
            toJSON(message: _337.QueryAttestationsRequest): unknown;
            fromPartial(object: {
                limit?: any;
                orderBy?: string;
                claimType?: string;
                nonce?: any;
                height?: any;
                useV1Key?: boolean;
            }): _337.QueryAttestationsRequest;
        };
        QueryAttestationsResponse: {
            encode(message: _337.QueryAttestationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _337.QueryAttestationsResponse;
            fromJSON(object: any): _337.QueryAttestationsResponse;
            toJSON(message: _337.QueryAttestationsResponse): unknown;
            fromPartial(object: {
                attestations?: {
                    observed?: boolean;
                    votes?: string[];
                    height?: any;
                    claim?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[];
            }): _337.QueryAttestationsResponse;
        };
        QueryDelegateKeysByValidatorAddress: {
            encode(message: _337.QueryDelegateKeysByValidatorAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _337.QueryDelegateKeysByValidatorAddress;
            fromJSON(object: any): _337.QueryDelegateKeysByValidatorAddress;
            toJSON(message: _337.QueryDelegateKeysByValidatorAddress): unknown;
            fromPartial(object: {
                validatorAddress?: string;
            }): _337.QueryDelegateKeysByValidatorAddress;
        };
        QueryDelegateKeysByValidatorAddressResponse: {
            encode(message: _337.QueryDelegateKeysByValidatorAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _337.QueryDelegateKeysByValidatorAddressResponse;
            fromJSON(object: any): _337.QueryDelegateKeysByValidatorAddressResponse;
            toJSON(message: _337.QueryDelegateKeysByValidatorAddressResponse): unknown;
            fromPartial(object: {
                ethAddress?: string;
                orchestratorAddress?: string;
            }): _337.QueryDelegateKeysByValidatorAddressResponse;
        };
        QueryDelegateKeysByEthAddress: {
            encode(message: _337.QueryDelegateKeysByEthAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _337.QueryDelegateKeysByEthAddress;
            fromJSON(object: any): _337.QueryDelegateKeysByEthAddress;
            toJSON(message: _337.QueryDelegateKeysByEthAddress): unknown;
            fromPartial(object: {
                ethAddress?: string;
            }): _337.QueryDelegateKeysByEthAddress;
        };
        QueryDelegateKeysByEthAddressResponse: {
            encode(message: _337.QueryDelegateKeysByEthAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _337.QueryDelegateKeysByEthAddressResponse;
            fromJSON(object: any): _337.QueryDelegateKeysByEthAddressResponse;
            toJSON(message: _337.QueryDelegateKeysByEthAddressResponse): unknown;
            fromPartial(object: {
                validatorAddress?: string;
                orchestratorAddress?: string;
            }): _337.QueryDelegateKeysByEthAddressResponse;
        };
        QueryDelegateKeysByOrchestratorAddress: {
            encode(message: _337.QueryDelegateKeysByOrchestratorAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _337.QueryDelegateKeysByOrchestratorAddress;
            fromJSON(object: any): _337.QueryDelegateKeysByOrchestratorAddress;
            toJSON(message: _337.QueryDelegateKeysByOrchestratorAddress): unknown;
            fromPartial(object: {
                orchestratorAddress?: string;
            }): _337.QueryDelegateKeysByOrchestratorAddress;
        };
        QueryDelegateKeysByOrchestratorAddressResponse: {
            encode(message: _337.QueryDelegateKeysByOrchestratorAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _337.QueryDelegateKeysByOrchestratorAddressResponse;
            fromJSON(object: any): _337.QueryDelegateKeysByOrchestratorAddressResponse;
            toJSON(message: _337.QueryDelegateKeysByOrchestratorAddressResponse): unknown;
            fromPartial(object: {
                validatorAddress?: string;
                ethAddress?: string;
            }): _337.QueryDelegateKeysByOrchestratorAddressResponse;
        };
        QueryPendingSendToEth: {
            encode(message: _337.QueryPendingSendToEth, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _337.QueryPendingSendToEth;
            fromJSON(object: any): _337.QueryPendingSendToEth;
            toJSON(message: _337.QueryPendingSendToEth): unknown;
            fromPartial(object: {
                senderAddress?: string;
            }): _337.QueryPendingSendToEth;
        };
        QueryPendingSendToEthResponse: {
            encode(message: _337.QueryPendingSendToEthResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _337.QueryPendingSendToEthResponse;
            fromJSON(object: any): _337.QueryPendingSendToEthResponse;
            toJSON(message: _337.QueryPendingSendToEthResponse): unknown;
            fromPartial(object: {
                transfersInBatches?: {
                    id?: any;
                    sender?: string;
                    destAddress?: string;
                    erc20Token?: {
                        contract?: string;
                        amount?: string;
                    };
                    erc20Fee?: {
                        contract?: string;
                        amount?: string;
                    };
                }[];
                unbatchedTransfers?: {
                    id?: any;
                    sender?: string;
                    destAddress?: string;
                    erc20Token?: {
                        contract?: string;
                        amount?: string;
                    };
                    erc20Fee?: {
                        contract?: string;
                        amount?: string;
                    };
                }[];
            }): _337.QueryPendingSendToEthResponse;
        };
        QueryPendingIbcAutoForwards: {
            encode(message: _337.QueryPendingIbcAutoForwards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _337.QueryPendingIbcAutoForwards;
            fromJSON(object: any): _337.QueryPendingIbcAutoForwards;
            toJSON(message: _337.QueryPendingIbcAutoForwards): unknown;
            fromPartial(object: {
                limit?: any;
            }): _337.QueryPendingIbcAutoForwards;
        };
        QueryPendingIbcAutoForwardsResponse: {
            encode(message: _337.QueryPendingIbcAutoForwardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _337.QueryPendingIbcAutoForwardsResponse;
            fromJSON(object: any): _337.QueryPendingIbcAutoForwardsResponse;
            toJSON(message: _337.QueryPendingIbcAutoForwardsResponse): unknown;
            fromPartial(object: {
                pendingIbcAutoForwards?: {
                    foreignReceiver?: string;
                    token?: {
                        denom?: string;
                        amount?: string;
                    };
                    ibcChannel?: string;
                    eventNonce?: any;
                }[];
            }): _337.QueryPendingIbcAutoForwardsResponse;
        };
        IDSet: {
            encode(message: _336.IDSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _336.IDSet;
            fromJSON(object: any): _336.IDSet;
            toJSON(message: _336.IDSet): unknown;
            fromPartial(object: {
                ids?: any[];
            }): _336.IDSet;
        };
        BatchFees: {
            encode(message: _336.BatchFees, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _336.BatchFees;
            fromJSON(object: any): _336.BatchFees;
            toJSON(message: _336.BatchFees): unknown;
            fromPartial(object: {
                token?: string;
                totalFees?: string;
                txCount?: any;
            }): _336.BatchFees;
        };
        EventWithdrawalReceived: {
            encode(message: _336.EventWithdrawalReceived, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _336.EventWithdrawalReceived;
            fromJSON(object: any): _336.EventWithdrawalReceived;
            toJSON(message: _336.EventWithdrawalReceived): unknown;
            fromPartial(object: {
                bridgeContract?: string;
                bridgeChainId?: string;
                outgoingTxId?: string;
                nonce?: string;
            }): _336.EventWithdrawalReceived;
        };
        EventWithdrawCanceled: {
            encode(message: _336.EventWithdrawCanceled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _336.EventWithdrawCanceled;
            fromJSON(object: any): _336.EventWithdrawCanceled;
            toJSON(message: _336.EventWithdrawCanceled): unknown;
            fromPartial(object: {
                sender?: string;
                txId?: string;
                bridgeContract?: string;
                bridgeChainId?: string;
            }): _336.EventWithdrawCanceled;
        };
        MsgSetOrchestratorAddress: {
            encode(message: _335.MsgSetOrchestratorAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _335.MsgSetOrchestratorAddress;
            fromJSON(object: any): _335.MsgSetOrchestratorAddress;
            toJSON(message: _335.MsgSetOrchestratorAddress): unknown;
            fromPartial(object: {
                validator?: string;
                orchestrator?: string;
                ethAddress?: string;
            }): _335.MsgSetOrchestratorAddress;
        };
        MsgSetOrchestratorAddressResponse: {
            encode(_: _335.MsgSetOrchestratorAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _335.MsgSetOrchestratorAddressResponse;
            fromJSON(_: any): _335.MsgSetOrchestratorAddressResponse;
            toJSON(_: _335.MsgSetOrchestratorAddressResponse): unknown;
            fromPartial(_: {}): _335.MsgSetOrchestratorAddressResponse;
        };
        MsgValsetConfirm: {
            encode(message: _335.MsgValsetConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _335.MsgValsetConfirm;
            fromJSON(object: any): _335.MsgValsetConfirm;
            toJSON(message: _335.MsgValsetConfirm): unknown;
            fromPartial(object: {
                nonce?: any;
                orchestrator?: string;
                ethAddress?: string;
                signature?: string;
            }): _335.MsgValsetConfirm;
        };
        MsgValsetConfirmResponse: {
            encode(_: _335.MsgValsetConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _335.MsgValsetConfirmResponse;
            fromJSON(_: any): _335.MsgValsetConfirmResponse;
            toJSON(_: _335.MsgValsetConfirmResponse): unknown;
            fromPartial(_: {}): _335.MsgValsetConfirmResponse;
        };
        MsgSendToEth: {
            encode(message: _335.MsgSendToEth, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _335.MsgSendToEth;
            fromJSON(object: any): _335.MsgSendToEth;
            toJSON(message: _335.MsgSendToEth): unknown;
            fromPartial(object: {
                sender?: string;
                ethDest?: string;
                amount?: {
                    denom?: string;
                    amount?: string;
                };
                bridgeFee?: {
                    denom?: string;
                    amount?: string;
                };
            }): _335.MsgSendToEth;
        };
        MsgSendToEthResponse: {
            encode(_: _335.MsgSendToEthResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _335.MsgSendToEthResponse;
            fromJSON(_: any): _335.MsgSendToEthResponse;
            toJSON(_: _335.MsgSendToEthResponse): unknown;
            fromPartial(_: {}): _335.MsgSendToEthResponse;
        };
        MsgRequestBatch: {
            encode(message: _335.MsgRequestBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _335.MsgRequestBatch;
            fromJSON(object: any): _335.MsgRequestBatch;
            toJSON(message: _335.MsgRequestBatch): unknown;
            fromPartial(object: {
                sender?: string;
                denom?: string;
            }): _335.MsgRequestBatch;
        };
        MsgRequestBatchResponse: {
            encode(_: _335.MsgRequestBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _335.MsgRequestBatchResponse;
            fromJSON(_: any): _335.MsgRequestBatchResponse;
            toJSON(_: _335.MsgRequestBatchResponse): unknown;
            fromPartial(_: {}): _335.MsgRequestBatchResponse;
        };
        MsgConfirmBatch: {
            encode(message: _335.MsgConfirmBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _335.MsgConfirmBatch;
            fromJSON(object: any): _335.MsgConfirmBatch;
            toJSON(message: _335.MsgConfirmBatch): unknown;
            fromPartial(object: {
                nonce?: any;
                tokenContract?: string;
                ethSigner?: string;
                orchestrator?: string;
                signature?: string;
            }): _335.MsgConfirmBatch;
        };
        MsgConfirmBatchResponse: {
            encode(_: _335.MsgConfirmBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _335.MsgConfirmBatchResponse;
            fromJSON(_: any): _335.MsgConfirmBatchResponse;
            toJSON(_: _335.MsgConfirmBatchResponse): unknown;
            fromPartial(_: {}): _335.MsgConfirmBatchResponse;
        };
        MsgConfirmLogicCall: {
            encode(message: _335.MsgConfirmLogicCall, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _335.MsgConfirmLogicCall;
            fromJSON(object: any): _335.MsgConfirmLogicCall;
            toJSON(message: _335.MsgConfirmLogicCall): unknown;
            fromPartial(object: {
                invalidationId?: string;
                invalidationNonce?: any;
                ethSigner?: string;
                orchestrator?: string;
                signature?: string;
            }): _335.MsgConfirmLogicCall;
        };
        MsgConfirmLogicCallResponse: {
            encode(_: _335.MsgConfirmLogicCallResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _335.MsgConfirmLogicCallResponse;
            fromJSON(_: any): _335.MsgConfirmLogicCallResponse;
            toJSON(_: _335.MsgConfirmLogicCallResponse): unknown;
            fromPartial(_: {}): _335.MsgConfirmLogicCallResponse;
        };
        MsgSendToCosmosClaim: {
            encode(message: _335.MsgSendToCosmosClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _335.MsgSendToCosmosClaim;
            fromJSON(object: any): _335.MsgSendToCosmosClaim;
            toJSON(message: _335.MsgSendToCosmosClaim): unknown;
            fromPartial(object: {
                eventNonce?: any;
                blockHeight?: any;
                tokenContract?: string;
                amount?: string;
                ethereumSender?: string;
                cosmosReceiver?: string;
                orchestrator?: string;
            }): _335.MsgSendToCosmosClaim;
        };
        MsgSendToCosmosClaimResponse: {
            encode(_: _335.MsgSendToCosmosClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _335.MsgSendToCosmosClaimResponse;
            fromJSON(_: any): _335.MsgSendToCosmosClaimResponse;
            toJSON(_: _335.MsgSendToCosmosClaimResponse): unknown;
            fromPartial(_: {}): _335.MsgSendToCosmosClaimResponse;
        };
        MsgExecuteIbcAutoForwards: {
            encode(message: _335.MsgExecuteIbcAutoForwards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _335.MsgExecuteIbcAutoForwards;
            fromJSON(object: any): _335.MsgExecuteIbcAutoForwards;
            toJSON(message: _335.MsgExecuteIbcAutoForwards): unknown;
            fromPartial(object: {
                forwardsToClear?: any;
                executor?: string;
            }): _335.MsgExecuteIbcAutoForwards;
        };
        MsgExecuteIbcAutoForwardsResponse: {
            encode(_: _335.MsgExecuteIbcAutoForwardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _335.MsgExecuteIbcAutoForwardsResponse;
            fromJSON(_: any): _335.MsgExecuteIbcAutoForwardsResponse;
            toJSON(_: _335.MsgExecuteIbcAutoForwardsResponse): unknown;
            fromPartial(_: {}): _335.MsgExecuteIbcAutoForwardsResponse;
        };
        MsgBatchSendToEthClaim: {
            encode(message: _335.MsgBatchSendToEthClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _335.MsgBatchSendToEthClaim;
            fromJSON(object: any): _335.MsgBatchSendToEthClaim;
            toJSON(message: _335.MsgBatchSendToEthClaim): unknown;
            fromPartial(object: {
                eventNonce?: any;
                blockHeight?: any;
                batchNonce?: any;
                tokenContract?: string;
                orchestrator?: string;
            }): _335.MsgBatchSendToEthClaim;
        };
        MsgBatchSendToEthClaimResponse: {
            encode(_: _335.MsgBatchSendToEthClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _335.MsgBatchSendToEthClaimResponse;
            fromJSON(_: any): _335.MsgBatchSendToEthClaimResponse;
            toJSON(_: _335.MsgBatchSendToEthClaimResponse): unknown;
            fromPartial(_: {}): _335.MsgBatchSendToEthClaimResponse;
        };
        MsgERC20DeployedClaim: {
            encode(message: _335.MsgERC20DeployedClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _335.MsgERC20DeployedClaim;
            fromJSON(object: any): _335.MsgERC20DeployedClaim;
            toJSON(message: _335.MsgERC20DeployedClaim): unknown;
            fromPartial(object: {
                eventNonce?: any;
                blockHeight?: any;
                cosmosDenom?: string;
                tokenContract?: string;
                name?: string;
                symbol?: string;
                decimals?: any;
                orchestrator?: string;
            }): _335.MsgERC20DeployedClaim;
        };
        MsgERC20DeployedClaimResponse: {
            encode(_: _335.MsgERC20DeployedClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _335.MsgERC20DeployedClaimResponse;
            fromJSON(_: any): _335.MsgERC20DeployedClaimResponse;
            toJSON(_: _335.MsgERC20DeployedClaimResponse): unknown;
            fromPartial(_: {}): _335.MsgERC20DeployedClaimResponse;
        };
        MsgLogicCallExecutedClaim: {
            encode(message: _335.MsgLogicCallExecutedClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _335.MsgLogicCallExecutedClaim;
            fromJSON(object: any): _335.MsgLogicCallExecutedClaim;
            toJSON(message: _335.MsgLogicCallExecutedClaim): unknown;
            fromPartial(object: {
                eventNonce?: any;
                blockHeight?: any;
                invalidationId?: Uint8Array;
                invalidationNonce?: any;
                orchestrator?: string;
            }): _335.MsgLogicCallExecutedClaim;
        };
        MsgLogicCallExecutedClaimResponse: {
            encode(_: _335.MsgLogicCallExecutedClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _335.MsgLogicCallExecutedClaimResponse;
            fromJSON(_: any): _335.MsgLogicCallExecutedClaimResponse;
            toJSON(_: _335.MsgLogicCallExecutedClaimResponse): unknown;
            fromPartial(_: {}): _335.MsgLogicCallExecutedClaimResponse;
        };
        MsgValsetUpdatedClaim: {
            encode(message: _335.MsgValsetUpdatedClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _335.MsgValsetUpdatedClaim;
            fromJSON(object: any): _335.MsgValsetUpdatedClaim;
            toJSON(message: _335.MsgValsetUpdatedClaim): unknown;
            fromPartial(object: {
                eventNonce?: any;
                valsetNonce?: any;
                blockHeight?: any;
                members?: {
                    power?: any;
                    ethereumAddress?: string;
                }[];
                rewardAmount?: string;
                rewardToken?: string;
                orchestrator?: string;
            }): _335.MsgValsetUpdatedClaim;
        };
        MsgValsetUpdatedClaimResponse: {
            encode(_: _335.MsgValsetUpdatedClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _335.MsgValsetUpdatedClaimResponse;
            fromJSON(_: any): _335.MsgValsetUpdatedClaimResponse;
            toJSON(_: _335.MsgValsetUpdatedClaimResponse): unknown;
            fromPartial(_: {}): _335.MsgValsetUpdatedClaimResponse;
        };
        MsgCancelSendToEth: {
            encode(message: _335.MsgCancelSendToEth, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _335.MsgCancelSendToEth;
            fromJSON(object: any): _335.MsgCancelSendToEth;
            toJSON(message: _335.MsgCancelSendToEth): unknown;
            fromPartial(object: {
                transactionId?: any;
                sender?: string;
            }): _335.MsgCancelSendToEth;
        };
        MsgCancelSendToEthResponse: {
            encode(_: _335.MsgCancelSendToEthResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _335.MsgCancelSendToEthResponse;
            fromJSON(_: any): _335.MsgCancelSendToEthResponse;
            toJSON(_: _335.MsgCancelSendToEthResponse): unknown;
            fromPartial(_: {}): _335.MsgCancelSendToEthResponse;
        };
        MsgSubmitBadSignatureEvidence: {
            encode(message: _335.MsgSubmitBadSignatureEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _335.MsgSubmitBadSignatureEvidence;
            fromJSON(object: any): _335.MsgSubmitBadSignatureEvidence;
            toJSON(message: _335.MsgSubmitBadSignatureEvidence): unknown;
            fromPartial(object: {
                subject?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
                signature?: string;
                sender?: string;
            }): _335.MsgSubmitBadSignatureEvidence;
        };
        MsgSubmitBadSignatureEvidenceResponse: {
            encode(_: _335.MsgSubmitBadSignatureEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _335.MsgSubmitBadSignatureEvidenceResponse;
            fromJSON(_: any): _335.MsgSubmitBadSignatureEvidenceResponse;
            toJSON(_: _335.MsgSubmitBadSignatureEvidenceResponse): unknown;
            fromPartial(_: {}): _335.MsgSubmitBadSignatureEvidenceResponse;
        };
        EventSetOperatorAddress: {
            encode(message: _335.EventSetOperatorAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _335.EventSetOperatorAddress;
            fromJSON(object: any): _335.EventSetOperatorAddress;
            toJSON(message: _335.EventSetOperatorAddress): unknown;
            fromPartial(object: {
                message?: string;
                address?: string;
            }): _335.EventSetOperatorAddress;
        };
        EventValsetConfirmKey: {
            encode(message: _335.EventValsetConfirmKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _335.EventValsetConfirmKey;
            fromJSON(object: any): _335.EventValsetConfirmKey;
            toJSON(message: _335.EventValsetConfirmKey): unknown;
            fromPartial(object: {
                message?: string;
                key?: string;
            }): _335.EventValsetConfirmKey;
        };
        EventBatchCreated: {
            encode(message: _335.EventBatchCreated, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _335.EventBatchCreated;
            fromJSON(object: any): _335.EventBatchCreated;
            toJSON(message: _335.EventBatchCreated): unknown;
            fromPartial(object: {
                message?: string;
                batchNonce?: string;
            }): _335.EventBatchCreated;
        };
        EventBatchConfirmKey: {
            encode(message: _335.EventBatchConfirmKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _335.EventBatchConfirmKey;
            fromJSON(object: any): _335.EventBatchConfirmKey;
            toJSON(message: _335.EventBatchConfirmKey): unknown;
            fromPartial(object: {
                message?: string;
                batchConfirmKey?: string;
            }): _335.EventBatchConfirmKey;
        };
        EventBatchSendToEthClaim: {
            encode(message: _335.EventBatchSendToEthClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _335.EventBatchSendToEthClaim;
            fromJSON(object: any): _335.EventBatchSendToEthClaim;
            toJSON(message: _335.EventBatchSendToEthClaim): unknown;
            fromPartial(object: {
                nonce?: string;
            }): _335.EventBatchSendToEthClaim;
        };
        EventClaim: {
            encode(message: _335.EventClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _335.EventClaim;
            fromJSON(object: any): _335.EventClaim;
            toJSON(message: _335.EventClaim): unknown;
            fromPartial(object: {
                message?: string;
                claimHash?: string;
                attestationId?: string;
            }): _335.EventClaim;
        };
        EventBadSignatureEvidence: {
            encode(message: _335.EventBadSignatureEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _335.EventBadSignatureEvidence;
            fromJSON(object: any): _335.EventBadSignatureEvidence;
            toJSON(message: _335.EventBadSignatureEvidence): unknown;
            fromPartial(object: {
                message?: string;
                badEthSignature?: string;
                badEthSignatureSubject?: string;
            }): _335.EventBadSignatureEvidence;
        };
        EventERC20DeployedClaim: {
            encode(message: _335.EventERC20DeployedClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _335.EventERC20DeployedClaim;
            fromJSON(object: any): _335.EventERC20DeployedClaim;
            toJSON(message: _335.EventERC20DeployedClaim): unknown;
            fromPartial(object: {
                token?: string;
                nonce?: string;
            }): _335.EventERC20DeployedClaim;
        };
        EventValsetUpdatedClaim: {
            encode(message: _335.EventValsetUpdatedClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _335.EventValsetUpdatedClaim;
            fromJSON(object: any): _335.EventValsetUpdatedClaim;
            toJSON(message: _335.EventValsetUpdatedClaim): unknown;
            fromPartial(object: {
                nonce?: string;
            }): _335.EventValsetUpdatedClaim;
        };
        EventMultisigUpdateRequest: {
            encode(message: _335.EventMultisigUpdateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _335.EventMultisigUpdateRequest;
            fromJSON(object: any): _335.EventMultisigUpdateRequest;
            toJSON(message: _335.EventMultisigUpdateRequest): unknown;
            fromPartial(object: {
                bridgeContract?: string;
                bridgeChainId?: string;
                multisigId?: string;
                nonce?: string;
            }): _335.EventMultisigUpdateRequest;
        };
        EventOutgoingLogicCallCanceled: {
            encode(message: _335.EventOutgoingLogicCallCanceled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _335.EventOutgoingLogicCallCanceled;
            fromJSON(object: any): _335.EventOutgoingLogicCallCanceled;
            toJSON(message: _335.EventOutgoingLogicCallCanceled): unknown;
            fromPartial(object: {
                logicCallInvalidationId?: string;
                logicCallInvalidationNonce?: string;
            }): _335.EventOutgoingLogicCallCanceled;
        };
        EventSignatureSlashing: {
            encode(message: _335.EventSignatureSlashing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _335.EventSignatureSlashing;
            fromJSON(object: any): _335.EventSignatureSlashing;
            toJSON(message: _335.EventSignatureSlashing): unknown;
            fromPartial(object: {
                type?: string;
                address?: string;
            }): _335.EventSignatureSlashing;
        };
        EventOutgoingTxId: {
            encode(message: _335.EventOutgoingTxId, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _335.EventOutgoingTxId;
            fromJSON(object: any): _335.EventOutgoingTxId;
            toJSON(message: _335.EventOutgoingTxId): unknown;
            fromPartial(object: {
                message?: string;
                txId?: string;
            }): _335.EventOutgoingTxId;
        };
        Params: {
            encode(message: _334.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _334.Params;
            fromJSON(object: any): _334.Params;
            toJSON(message: _334.Params): unknown;
            fromPartial(object: {
                gravityId?: string;
                contractSourceHash?: string;
                bridgeEthereumAddress?: string;
                bridgeChainId?: any;
                signedValsetsWindow?: any;
                signedBatchesWindow?: any;
                signedLogicCallsWindow?: any;
                targetBatchTimeout?: any;
                averageBlockTime?: any;
                averageEthereumBlockTime?: any;
                slashFractionValset?: Uint8Array;
                slashFractionBatch?: Uint8Array;
                slashFractionLogicCall?: Uint8Array;
                unbondSlashingValsetsWindow?: any;
                slashFractionBadEthSignature?: Uint8Array;
                valsetReward?: {
                    denom?: string;
                    amount?: string;
                };
                bridgeActive?: boolean;
                ethereumBlacklist?: string[];
            }): _334.Params;
        };
        GenesisState: {
            encode(message: _334.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _334.GenesisState;
            fromJSON(object: any): _334.GenesisState;
            toJSON(message: _334.GenesisState): unknown;
            fromPartial(object: {
                params?: {
                    gravityId?: string;
                    contractSourceHash?: string;
                    bridgeEthereumAddress?: string;
                    bridgeChainId?: any;
                    signedValsetsWindow?: any;
                    signedBatchesWindow?: any;
                    signedLogicCallsWindow?: any;
                    targetBatchTimeout?: any;
                    averageBlockTime?: any;
                    averageEthereumBlockTime?: any;
                    slashFractionValset?: Uint8Array;
                    slashFractionBatch?: Uint8Array;
                    slashFractionLogicCall?: Uint8Array;
                    unbondSlashingValsetsWindow?: any;
                    slashFractionBadEthSignature?: Uint8Array;
                    valsetReward?: {
                        denom?: string;
                        amount?: string;
                    };
                    bridgeActive?: boolean;
                    ethereumBlacklist?: string[];
                };
                gravityNonces?: {
                    latestValsetNonce?: any;
                    lastObservedNonce?: any;
                    lastSlashedValsetNonce?: any;
                    lastSlashedBatchBlock?: any;
                    lastSlashedLogicCallBlock?: any;
                    lastTxPoolId?: any;
                    lastBatchId?: any;
                };
                valsets?: {
                    nonce?: any;
                    members?: {
                        power?: any;
                        ethereumAddress?: string;
                    }[];
                    height?: any;
                    rewardAmount?: string;
                    rewardToken?: string;
                }[];
                valsetConfirms?: {
                    nonce?: any;
                    orchestrator?: string;
                    ethAddress?: string;
                    signature?: string;
                }[];
                batches?: {
                    batchNonce?: any;
                    batchTimeout?: any;
                    transactions?: {
                        id?: any;
                        sender?: string;
                        destAddress?: string;
                        erc20Token?: {
                            contract?: string;
                            amount?: string;
                        };
                        erc20Fee?: {
                            contract?: string;
                            amount?: string;
                        };
                    }[];
                    tokenContract?: string;
                    block?: any;
                }[];
                batchConfirms?: {
                    nonce?: any;
                    tokenContract?: string;
                    ethSigner?: string;
                    orchestrator?: string;
                    signature?: string;
                }[];
                logicCalls?: {
                    transfers?: {
                        contract?: string;
                        amount?: string;
                    }[];
                    fees?: {
                        contract?: string;
                        amount?: string;
                    }[];
                    logicContractAddress?: string;
                    payload?: Uint8Array;
                    timeout?: any;
                    invalidationId?: Uint8Array;
                    invalidationNonce?: any;
                    block?: any;
                }[];
                logicCallConfirms?: {
                    invalidationId?: string;
                    invalidationNonce?: any;
                    ethSigner?: string;
                    orchestrator?: string;
                    signature?: string;
                }[];
                attestations?: {
                    observed?: boolean;
                    votes?: string[];
                    height?: any;
                    claim?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[];
                delegateKeys?: {
                    validator?: string;
                    orchestrator?: string;
                    ethAddress?: string;
                }[];
                erc20ToDenoms?: {
                    erc20?: string;
                    denom?: string;
                }[];
                unbatchedTransfers?: {
                    id?: any;
                    sender?: string;
                    destAddress?: string;
                    erc20Token?: {
                        contract?: string;
                        amount?: string;
                    };
                    erc20Fee?: {
                        contract?: string;
                        amount?: string;
                    };
                }[];
            }): _334.GenesisState;
        };
        GravityNonces: {
            encode(message: _334.GravityNonces, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _334.GravityNonces;
            fromJSON(object: any): _334.GravityNonces;
            toJSON(message: _334.GravityNonces): unknown;
            fromPartial(object: {
                latestValsetNonce?: any;
                lastObservedNonce?: any;
                lastSlashedValsetNonce?: any;
                lastSlashedBatchBlock?: any;
                lastSlashedLogicCallBlock?: any;
                lastTxPoolId?: any;
                lastBatchId?: any;
            }): _334.GravityNonces;
        };
        signTypeFromJSON(object: any): _333.SignType;
        signTypeToJSON(object: _333.SignType): string;
        SignType: typeof _333.SignType;
        OutgoingTxBatch: {
            encode(message: _332.OutgoingTxBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _332.OutgoingTxBatch;
            fromJSON(object: any): _332.OutgoingTxBatch;
            toJSON(message: _332.OutgoingTxBatch): unknown;
            fromPartial(object: {
                batchNonce?: any;
                batchTimeout?: any;
                transactions?: {
                    id?: any;
                    sender?: string;
                    destAddress?: string;
                    erc20Token?: {
                        contract?: string;
                        amount?: string;
                    };
                    erc20Fee?: {
                        contract?: string;
                        amount?: string;
                    };
                }[];
                tokenContract?: string;
                block?: any;
            }): _332.OutgoingTxBatch;
        };
        OutgoingTransferTx: {
            encode(message: _332.OutgoingTransferTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _332.OutgoingTransferTx;
            fromJSON(object: any): _332.OutgoingTransferTx;
            toJSON(message: _332.OutgoingTransferTx): unknown;
            fromPartial(object: {
                id?: any;
                sender?: string;
                destAddress?: string;
                erc20Token?: {
                    contract?: string;
                    amount?: string;
                };
                erc20Fee?: {
                    contract?: string;
                    amount?: string;
                };
            }): _332.OutgoingTransferTx;
        };
        OutgoingLogicCall: {
            encode(message: _332.OutgoingLogicCall, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _332.OutgoingLogicCall;
            fromJSON(object: any): _332.OutgoingLogicCall;
            toJSON(message: _332.OutgoingLogicCall): unknown;
            fromPartial(object: {
                transfers?: {
                    contract?: string;
                    amount?: string;
                }[];
                fees?: {
                    contract?: string;
                    amount?: string;
                }[];
                logicContractAddress?: string;
                payload?: Uint8Array;
                timeout?: any;
                invalidationId?: Uint8Array;
                invalidationNonce?: any;
                block?: any;
            }): _332.OutgoingLogicCall;
        };
        EventOutgoingBatchCanceled: {
            encode(message: _332.EventOutgoingBatchCanceled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _332.EventOutgoingBatchCanceled;
            fromJSON(object: any): _332.EventOutgoingBatchCanceled;
            toJSON(message: _332.EventOutgoingBatchCanceled): unknown;
            fromPartial(object: {
                bridgeContract?: string;
                bridgeChainId?: string;
                batchId?: string;
                nonce?: string;
            }): _332.EventOutgoingBatchCanceled;
        };
        EventOutgoingBatch: {
            encode(message: _332.EventOutgoingBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _332.EventOutgoingBatch;
            fromJSON(object: any): _332.EventOutgoingBatch;
            toJSON(message: _332.EventOutgoingBatch): unknown;
            fromPartial(object: {
                bridgeContract?: string;
                bridgeChainId?: string;
                batchId?: string;
                nonce?: string;
            }): _332.EventOutgoingBatch;
        };
        claimTypeFromJSON(object: any): _331.ClaimType;
        claimTypeToJSON(object: _331.ClaimType): string;
        ClaimType: typeof _331.ClaimType;
        Attestation: {
            encode(message: _331.Attestation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _331.Attestation;
            fromJSON(object: any): _331.Attestation;
            toJSON(message: _331.Attestation): unknown;
            fromPartial(object: {
                observed?: boolean;
                votes?: string[];
                height?: any;
                claim?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            }): _331.Attestation;
        };
        ERC20Token: {
            encode(message: _331.ERC20Token, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _331.ERC20Token;
            fromJSON(object: any): _331.ERC20Token;
            toJSON(message: _331.ERC20Token): unknown;
            fromPartial(object: {
                contract?: string;
                amount?: string;
            }): _331.ERC20Token;
        };
        EventObservation: {
            encode(message: _331.EventObservation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _331.EventObservation;
            fromJSON(object: any): _331.EventObservation;
            toJSON(message: _331.EventObservation): unknown;
            fromPartial(object: {
                attestationType?: string;
                bridgeContract?: string;
                bridgeChainId?: string;
                attestationId?: string;
                nonce?: string;
            }): _331.EventObservation;
        };
        EventInvalidSendToCosmosReceiver: {
            encode(message: _331.EventInvalidSendToCosmosReceiver, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _331.EventInvalidSendToCosmosReceiver;
            fromJSON(object: any): _331.EventInvalidSendToCosmosReceiver;
            toJSON(message: _331.EventInvalidSendToCosmosReceiver): unknown;
            fromPartial(object: {
                amount?: string;
                nonce?: string;
                token?: string;
                sender?: string;
            }): _331.EventInvalidSendToCosmosReceiver;
        };
        EventSendToCosmos: {
            encode(message: _331.EventSendToCosmos, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _331.EventSendToCosmos;
            fromJSON(object: any): _331.EventSendToCosmos;
            toJSON(message: _331.EventSendToCosmos): unknown;
            fromPartial(object: {
                amount?: string;
                nonce?: string;
                token?: string;
            }): _331.EventSendToCosmos;
        };
        EventSendToCosmosLocal: {
            encode(message: _331.EventSendToCosmosLocal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _331.EventSendToCosmosLocal;
            fromJSON(object: any): _331.EventSendToCosmosLocal;
            toJSON(message: _331.EventSendToCosmosLocal): unknown;
            fromPartial(object: {
                nonce?: string;
                receiver?: string;
                token?: string;
                amount?: string;
            }): _331.EventSendToCosmosLocal;
        };
        EventSendToCosmosPendingIbcAutoForward: {
            encode(message: _331.EventSendToCosmosPendingIbcAutoForward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _331.EventSendToCosmosPendingIbcAutoForward;
            fromJSON(object: any): _331.EventSendToCosmosPendingIbcAutoForward;
            toJSON(message: _331.EventSendToCosmosPendingIbcAutoForward): unknown;
            fromPartial(object: {
                nonce?: string;
                receiver?: string;
                token?: string;
                amount?: string;
                channel?: string;
            }): _331.EventSendToCosmosPendingIbcAutoForward;
        };
        EventSendToCosmosExecutedIbcAutoForward: {
            encode(message: _331.EventSendToCosmosExecutedIbcAutoForward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _331.EventSendToCosmosExecutedIbcAutoForward;
            fromJSON(object: any): _331.EventSendToCosmosExecutedIbcAutoForward;
            toJSON(message: _331.EventSendToCosmosExecutedIbcAutoForward): unknown;
            fromPartial(object: {
                nonce?: string;
                receiver?: string;
                token?: string;
                amount?: string;
                channel?: string;
                timeoutTime?: string;
                timeoutHeight?: string;
            }): _331.EventSendToCosmosExecutedIbcAutoForward;
        };
    };
}
