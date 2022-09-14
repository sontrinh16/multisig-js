import * as _399 from "./v1/attestation";
import * as _400 from "./v1/batch";
import * as _401 from "./v1/ethereum_signer";
import * as _402 from "./v1/genesis";
import * as _403 from "./v1/msgs";
import * as _404 from "./v1/pool";
import * as _405 from "./v1/query";
import * as _406 from "./v1/types";
export declare namespace gravity {
    const v1: {
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                valsetConfirm(value: _403.MsgValsetConfirm): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                sendToEth(value: _403.MsgSendToEth): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                requestBatch(value: _403.MsgRequestBatch): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmBatch(value: _403.MsgConfirmBatch): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmLogicCall(value: _403.MsgConfirmLogicCall): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                sendToCosmosClaim(value: _403.MsgSendToCosmosClaim): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                executeIbcAutoForwards(value: _403.MsgExecuteIbcAutoForwards): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                batchSendToEthClaim(value: _403.MsgBatchSendToEthClaim): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                valsetUpdateClaim(value: _403.MsgValsetUpdatedClaim): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                eRC20DeployedClaim(value: _403.MsgERC20DeployedClaim): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                logicCallExecutedClaim(value: _403.MsgLogicCallExecutedClaim): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                setOrchestratorAddress(value: _403.MsgSetOrchestratorAddress): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                cancelSendToEth(value: _403.MsgCancelSendToEth): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                submitBadSignatureEvidence(value: _403.MsgSubmitBadSignatureEvidence): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                valsetConfirm(value: _403.MsgValsetConfirm): {
                    typeUrl: string;
                    value: _403.MsgValsetConfirm;
                };
                sendToEth(value: _403.MsgSendToEth): {
                    typeUrl: string;
                    value: _403.MsgSendToEth;
                };
                requestBatch(value: _403.MsgRequestBatch): {
                    typeUrl: string;
                    value: _403.MsgRequestBatch;
                };
                confirmBatch(value: _403.MsgConfirmBatch): {
                    typeUrl: string;
                    value: _403.MsgConfirmBatch;
                };
                confirmLogicCall(value: _403.MsgConfirmLogicCall): {
                    typeUrl: string;
                    value: _403.MsgConfirmLogicCall;
                };
                sendToCosmosClaim(value: _403.MsgSendToCosmosClaim): {
                    typeUrl: string;
                    value: _403.MsgSendToCosmosClaim;
                };
                executeIbcAutoForwards(value: _403.MsgExecuteIbcAutoForwards): {
                    typeUrl: string;
                    value: _403.MsgExecuteIbcAutoForwards;
                };
                batchSendToEthClaim(value: _403.MsgBatchSendToEthClaim): {
                    typeUrl: string;
                    value: _403.MsgBatchSendToEthClaim;
                };
                valsetUpdateClaim(value: _403.MsgValsetUpdatedClaim): {
                    typeUrl: string;
                    value: _403.MsgValsetUpdatedClaim;
                };
                eRC20DeployedClaim(value: _403.MsgERC20DeployedClaim): {
                    typeUrl: string;
                    value: _403.MsgERC20DeployedClaim;
                };
                logicCallExecutedClaim(value: _403.MsgLogicCallExecutedClaim): {
                    typeUrl: string;
                    value: _403.MsgLogicCallExecutedClaim;
                };
                setOrchestratorAddress(value: _403.MsgSetOrchestratorAddress): {
                    typeUrl: string;
                    value: _403.MsgSetOrchestratorAddress;
                };
                cancelSendToEth(value: _403.MsgCancelSendToEth): {
                    typeUrl: string;
                    value: _403.MsgCancelSendToEth;
                };
                submitBadSignatureEvidence(value: _403.MsgSubmitBadSignatureEvidence): {
                    typeUrl: string;
                    value: _403.MsgSubmitBadSignatureEvidence;
                };
            };
            toJSON: {
                valsetConfirm(value: _403.MsgValsetConfirm): {
                    typeUrl: string;
                    value: unknown;
                };
                sendToEth(value: _403.MsgSendToEth): {
                    typeUrl: string;
                    value: unknown;
                };
                requestBatch(value: _403.MsgRequestBatch): {
                    typeUrl: string;
                    value: unknown;
                };
                confirmBatch(value: _403.MsgConfirmBatch): {
                    typeUrl: string;
                    value: unknown;
                };
                confirmLogicCall(value: _403.MsgConfirmLogicCall): {
                    typeUrl: string;
                    value: unknown;
                };
                sendToCosmosClaim(value: _403.MsgSendToCosmosClaim): {
                    typeUrl: string;
                    value: unknown;
                };
                executeIbcAutoForwards(value: _403.MsgExecuteIbcAutoForwards): {
                    typeUrl: string;
                    value: unknown;
                };
                batchSendToEthClaim(value: _403.MsgBatchSendToEthClaim): {
                    typeUrl: string;
                    value: unknown;
                };
                valsetUpdateClaim(value: _403.MsgValsetUpdatedClaim): {
                    typeUrl: string;
                    value: unknown;
                };
                eRC20DeployedClaim(value: _403.MsgERC20DeployedClaim): {
                    typeUrl: string;
                    value: unknown;
                };
                logicCallExecutedClaim(value: _403.MsgLogicCallExecutedClaim): {
                    typeUrl: string;
                    value: unknown;
                };
                setOrchestratorAddress(value: _403.MsgSetOrchestratorAddress): {
                    typeUrl: string;
                    value: unknown;
                };
                cancelSendToEth(value: _403.MsgCancelSendToEth): {
                    typeUrl: string;
                    value: unknown;
                };
                submitBadSignatureEvidence(value: _403.MsgSubmitBadSignatureEvidence): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                valsetConfirm(value: any): {
                    typeUrl: string;
                    value: _403.MsgValsetConfirm;
                };
                sendToEth(value: any): {
                    typeUrl: string;
                    value: _403.MsgSendToEth;
                };
                requestBatch(value: any): {
                    typeUrl: string;
                    value: _403.MsgRequestBatch;
                };
                confirmBatch(value: any): {
                    typeUrl: string;
                    value: _403.MsgConfirmBatch;
                };
                confirmLogicCall(value: any): {
                    typeUrl: string;
                    value: _403.MsgConfirmLogicCall;
                };
                sendToCosmosClaim(value: any): {
                    typeUrl: string;
                    value: _403.MsgSendToCosmosClaim;
                };
                executeIbcAutoForwards(value: any): {
                    typeUrl: string;
                    value: _403.MsgExecuteIbcAutoForwards;
                };
                batchSendToEthClaim(value: any): {
                    typeUrl: string;
                    value: _403.MsgBatchSendToEthClaim;
                };
                valsetUpdateClaim(value: any): {
                    typeUrl: string;
                    value: _403.MsgValsetUpdatedClaim;
                };
                eRC20DeployedClaim(value: any): {
                    typeUrl: string;
                    value: _403.MsgERC20DeployedClaim;
                };
                logicCallExecutedClaim(value: any): {
                    typeUrl: string;
                    value: _403.MsgLogicCallExecutedClaim;
                };
                setOrchestratorAddress(value: any): {
                    typeUrl: string;
                    value: _403.MsgSetOrchestratorAddress;
                };
                cancelSendToEth(value: any): {
                    typeUrl: string;
                    value: _403.MsgCancelSendToEth;
                };
                submitBadSignatureEvidence(value: any): {
                    typeUrl: string;
                    value: _403.MsgSubmitBadSignatureEvidence;
                };
            };
            fromPartial: {
                valsetConfirm(value: _403.MsgValsetConfirm): {
                    typeUrl: string;
                    value: _403.MsgValsetConfirm;
                };
                sendToEth(value: _403.MsgSendToEth): {
                    typeUrl: string;
                    value: _403.MsgSendToEth;
                };
                requestBatch(value: _403.MsgRequestBatch): {
                    typeUrl: string;
                    value: _403.MsgRequestBatch;
                };
                confirmBatch(value: _403.MsgConfirmBatch): {
                    typeUrl: string;
                    value: _403.MsgConfirmBatch;
                };
                confirmLogicCall(value: _403.MsgConfirmLogicCall): {
                    typeUrl: string;
                    value: _403.MsgConfirmLogicCall;
                };
                sendToCosmosClaim(value: _403.MsgSendToCosmosClaim): {
                    typeUrl: string;
                    value: _403.MsgSendToCosmosClaim;
                };
                executeIbcAutoForwards(value: _403.MsgExecuteIbcAutoForwards): {
                    typeUrl: string;
                    value: _403.MsgExecuteIbcAutoForwards;
                };
                batchSendToEthClaim(value: _403.MsgBatchSendToEthClaim): {
                    typeUrl: string;
                    value: _403.MsgBatchSendToEthClaim;
                };
                valsetUpdateClaim(value: _403.MsgValsetUpdatedClaim): {
                    typeUrl: string;
                    value: _403.MsgValsetUpdatedClaim;
                };
                eRC20DeployedClaim(value: _403.MsgERC20DeployedClaim): {
                    typeUrl: string;
                    value: _403.MsgERC20DeployedClaim;
                };
                logicCallExecutedClaim(value: _403.MsgLogicCallExecutedClaim): {
                    typeUrl: string;
                    value: _403.MsgLogicCallExecutedClaim;
                };
                setOrchestratorAddress(value: _403.MsgSetOrchestratorAddress): {
                    typeUrl: string;
                    value: _403.MsgSetOrchestratorAddress;
                };
                cancelSendToEth(value: _403.MsgCancelSendToEth): {
                    typeUrl: string;
                    value: _403.MsgCancelSendToEth;
                };
                submitBadSignatureEvidence(value: _403.MsgSubmitBadSignatureEvidence): {
                    typeUrl: string;
                    value: _403.MsgSubmitBadSignatureEvidence;
                };
            };
        };
        AminoConverter: {
            "/gravity.v1.MsgValsetConfirm": {
                aminoType: string;
                toAmino: ({ nonce, orchestrator, ethAddress, signature }: _403.MsgValsetConfirm) => {
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
                }) => _403.MsgValsetConfirm;
            };
            "/gravity.v1.MsgSendToEth": {
                aminoType: string;
                toAmino: ({ sender, ethDest, amount, bridgeFee }: _403.MsgSendToEth) => {
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
                }) => _403.MsgSendToEth;
            };
            "/gravity.v1.MsgRequestBatch": {
                aminoType: string;
                toAmino: ({ sender, denom }: _403.MsgRequestBatch) => {
                    sender: string;
                    denom: string;
                };
                fromAmino: ({ sender, denom }: {
                    sender: string;
                    denom: string;
                }) => _403.MsgRequestBatch;
            };
            "/gravity.v1.MsgConfirmBatch": {
                aminoType: string;
                toAmino: ({ nonce, tokenContract, ethSigner, orchestrator, signature }: _403.MsgConfirmBatch) => {
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
                }) => _403.MsgConfirmBatch;
            };
            "/gravity.v1.MsgConfirmLogicCall": {
                aminoType: string;
                toAmino: ({ invalidationId, invalidationNonce, ethSigner, orchestrator, signature }: _403.MsgConfirmLogicCall) => {
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
                }) => _403.MsgConfirmLogicCall;
            };
            "/gravity.v1.MsgSendToCosmosClaim": {
                aminoType: string;
                toAmino: ({ eventNonce, blockHeight, tokenContract, amount, ethereumSender, cosmosReceiver, orchestrator }: _403.MsgSendToCosmosClaim) => {
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
                }) => _403.MsgSendToCosmosClaim;
            };
            "/gravity.v1.MsgExecuteIbcAutoForwards": {
                aminoType: string;
                toAmino: ({ forwardsToClear, executor }: _403.MsgExecuteIbcAutoForwards) => {
                    forwards_to_clear: string;
                    executor: string;
                };
                fromAmino: ({ forwards_to_clear, executor }: {
                    forwards_to_clear: string;
                    executor: string;
                }) => _403.MsgExecuteIbcAutoForwards;
            };
            "/gravity.v1.MsgBatchSendToEthClaim": {
                aminoType: string;
                toAmino: ({ eventNonce, blockHeight, batchNonce, tokenContract, orchestrator }: _403.MsgBatchSendToEthClaim) => {
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
                }) => _403.MsgBatchSendToEthClaim;
            };
            "/gravity.v1.MsgValsetUpdatedClaim": {
                aminoType: string;
                toAmino: ({ eventNonce, valsetNonce, blockHeight, members, rewardAmount, rewardToken, orchestrator }: _403.MsgValsetUpdatedClaim) => {
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
                }) => _403.MsgValsetUpdatedClaim;
            };
            "/gravity.v1.MsgERC20DeployedClaim": {
                aminoType: string;
                toAmino: ({ eventNonce, blockHeight, cosmosDenom, tokenContract, name, symbol, decimals, orchestrator }: _403.MsgERC20DeployedClaim) => {
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
                }) => _403.MsgERC20DeployedClaim;
            };
            "/gravity.v1.MsgLogicCallExecutedClaim": {
                aminoType: string;
                toAmino: ({ eventNonce, blockHeight, invalidationId, invalidationNonce, orchestrator }: _403.MsgLogicCallExecutedClaim) => {
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
                }) => _403.MsgLogicCallExecutedClaim;
            };
            "/gravity.v1.MsgSetOrchestratorAddress": {
                aminoType: string;
                toAmino: ({ validator, orchestrator, ethAddress }: _403.MsgSetOrchestratorAddress) => {
                    validator: string;
                    orchestrator: string;
                    eth_address: string;
                };
                fromAmino: ({ validator, orchestrator, eth_address }: {
                    validator: string;
                    orchestrator: string;
                    eth_address: string;
                }) => _403.MsgSetOrchestratorAddress;
            };
            "/gravity.v1.MsgCancelSendToEth": {
                aminoType: string;
                toAmino: ({ transactionId, sender }: _403.MsgCancelSendToEth) => {
                    transaction_id: string;
                    sender: string;
                };
                fromAmino: ({ transaction_id, sender }: {
                    transaction_id: string;
                    sender: string;
                }) => _403.MsgCancelSendToEth;
            };
            "/gravity.v1.MsgSubmitBadSignatureEvidence": {
                aminoType: string;
                toAmino: ({ subject, signature, sender }: _403.MsgSubmitBadSignatureEvidence) => {
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
                }) => _403.MsgSubmitBadSignatureEvidence;
            };
        };
        BridgeValidator: {
            encode(message: _406.BridgeValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _406.BridgeValidator;
            fromJSON(object: any): _406.BridgeValidator;
            toJSON(message: _406.BridgeValidator): unknown;
            fromPartial(object: {
                power?: any;
                ethereumAddress?: string;
            }): _406.BridgeValidator;
        };
        Valset: {
            encode(message: _406.Valset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _406.Valset;
            fromJSON(object: any): _406.Valset;
            toJSON(message: _406.Valset): unknown;
            fromPartial(object: {
                nonce?: any;
                members?: {
                    power?: any;
                    ethereumAddress?: string;
                }[];
                height?: any;
                rewardAmount?: string;
                rewardToken?: string;
            }): _406.Valset;
        };
        LastObservedEthereumBlockHeight: {
            encode(message: _406.LastObservedEthereumBlockHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _406.LastObservedEthereumBlockHeight;
            fromJSON(object: any): _406.LastObservedEthereumBlockHeight;
            toJSON(message: _406.LastObservedEthereumBlockHeight): unknown;
            fromPartial(object: {
                cosmosBlockHeight?: any;
                ethereumBlockHeight?: any;
            }): _406.LastObservedEthereumBlockHeight;
        };
        ERC20ToDenom: {
            encode(message: _406.ERC20ToDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _406.ERC20ToDenom;
            fromJSON(object: any): _406.ERC20ToDenom;
            toJSON(message: _406.ERC20ToDenom): unknown;
            fromPartial(object: {
                erc20?: string;
                denom?: string;
            }): _406.ERC20ToDenom;
        };
        UnhaltBridgeProposal: {
            encode(message: _406.UnhaltBridgeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _406.UnhaltBridgeProposal;
            fromJSON(object: any): _406.UnhaltBridgeProposal;
            toJSON(message: _406.UnhaltBridgeProposal): unknown;
            fromPartial(object: {
                title?: string;
                description?: string;
                targetNonce?: any;
            }): _406.UnhaltBridgeProposal;
        };
        AirdropProposal: {
            encode(message: _406.AirdropProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _406.AirdropProposal;
            fromJSON(object: any): _406.AirdropProposal;
            toJSON(message: _406.AirdropProposal): unknown;
            fromPartial(object: {
                title?: string;
                description?: string;
                denom?: string;
                recipients?: Uint8Array;
                amounts?: any[];
            }): _406.AirdropProposal;
        };
        IBCMetadataProposal: {
            encode(message: _406.IBCMetadataProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _406.IBCMetadataProposal;
            fromJSON(object: any): _406.IBCMetadataProposal;
            toJSON(message: _406.IBCMetadataProposal): unknown;
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
            }): _406.IBCMetadataProposal;
        };
        PendingIbcAutoForward: {
            encode(message: _406.PendingIbcAutoForward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _406.PendingIbcAutoForward;
            fromJSON(object: any): _406.PendingIbcAutoForward;
            toJSON(message: _406.PendingIbcAutoForward): unknown;
            fromPartial(object: {
                foreignReceiver?: string;
                token?: {
                    denom?: string;
                    amount?: string;
                };
                ibcChannel?: string;
                eventNonce?: any;
            }): _406.PendingIbcAutoForward;
        };
        QueryParamsRequest: {
            encode(_: _405.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.QueryParamsRequest;
            fromJSON(_: any): _405.QueryParamsRequest;
            toJSON(_: _405.QueryParamsRequest): unknown;
            fromPartial(_: {}): _405.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _405.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.QueryParamsResponse;
            fromJSON(object: any): _405.QueryParamsResponse;
            toJSON(message: _405.QueryParamsResponse): unknown;
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
            }): _405.QueryParamsResponse;
        };
        QueryCurrentValsetRequest: {
            encode(_: _405.QueryCurrentValsetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.QueryCurrentValsetRequest;
            fromJSON(_: any): _405.QueryCurrentValsetRequest;
            toJSON(_: _405.QueryCurrentValsetRequest): unknown;
            fromPartial(_: {}): _405.QueryCurrentValsetRequest;
        };
        QueryCurrentValsetResponse: {
            encode(message: _405.QueryCurrentValsetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.QueryCurrentValsetResponse;
            fromJSON(object: any): _405.QueryCurrentValsetResponse;
            toJSON(message: _405.QueryCurrentValsetResponse): unknown;
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
            }): _405.QueryCurrentValsetResponse;
        };
        QueryValsetRequestRequest: {
            encode(message: _405.QueryValsetRequestRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.QueryValsetRequestRequest;
            fromJSON(object: any): _405.QueryValsetRequestRequest;
            toJSON(message: _405.QueryValsetRequestRequest): unknown;
            fromPartial(object: {
                nonce?: any;
            }): _405.QueryValsetRequestRequest;
        };
        QueryValsetRequestResponse: {
            encode(message: _405.QueryValsetRequestResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.QueryValsetRequestResponse;
            fromJSON(object: any): _405.QueryValsetRequestResponse;
            toJSON(message: _405.QueryValsetRequestResponse): unknown;
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
            }): _405.QueryValsetRequestResponse;
        };
        QueryValsetConfirmRequest: {
            encode(message: _405.QueryValsetConfirmRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.QueryValsetConfirmRequest;
            fromJSON(object: any): _405.QueryValsetConfirmRequest;
            toJSON(message: _405.QueryValsetConfirmRequest): unknown;
            fromPartial(object: {
                nonce?: any;
                address?: string;
            }): _405.QueryValsetConfirmRequest;
        };
        QueryValsetConfirmResponse: {
            encode(message: _405.QueryValsetConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.QueryValsetConfirmResponse;
            fromJSON(object: any): _405.QueryValsetConfirmResponse;
            toJSON(message: _405.QueryValsetConfirmResponse): unknown;
            fromPartial(object: {
                confirm?: {
                    nonce?: any;
                    orchestrator?: string;
                    ethAddress?: string;
                    signature?: string;
                };
            }): _405.QueryValsetConfirmResponse;
        };
        QueryValsetConfirmsByNonceRequest: {
            encode(message: _405.QueryValsetConfirmsByNonceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.QueryValsetConfirmsByNonceRequest;
            fromJSON(object: any): _405.QueryValsetConfirmsByNonceRequest;
            toJSON(message: _405.QueryValsetConfirmsByNonceRequest): unknown;
            fromPartial(object: {
                nonce?: any;
            }): _405.QueryValsetConfirmsByNonceRequest;
        };
        QueryValsetConfirmsByNonceResponse: {
            encode(message: _405.QueryValsetConfirmsByNonceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.QueryValsetConfirmsByNonceResponse;
            fromJSON(object: any): _405.QueryValsetConfirmsByNonceResponse;
            toJSON(message: _405.QueryValsetConfirmsByNonceResponse): unknown;
            fromPartial(object: {
                confirms?: {
                    nonce?: any;
                    orchestrator?: string;
                    ethAddress?: string;
                    signature?: string;
                }[];
            }): _405.QueryValsetConfirmsByNonceResponse;
        };
        QueryLastValsetRequestsRequest: {
            encode(_: _405.QueryLastValsetRequestsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.QueryLastValsetRequestsRequest;
            fromJSON(_: any): _405.QueryLastValsetRequestsRequest;
            toJSON(_: _405.QueryLastValsetRequestsRequest): unknown;
            fromPartial(_: {}): _405.QueryLastValsetRequestsRequest;
        };
        QueryLastValsetRequestsResponse: {
            encode(message: _405.QueryLastValsetRequestsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.QueryLastValsetRequestsResponse;
            fromJSON(object: any): _405.QueryLastValsetRequestsResponse;
            toJSON(message: _405.QueryLastValsetRequestsResponse): unknown;
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
            }): _405.QueryLastValsetRequestsResponse;
        };
        QueryLastPendingValsetRequestByAddrRequest: {
            encode(message: _405.QueryLastPendingValsetRequestByAddrRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.QueryLastPendingValsetRequestByAddrRequest;
            fromJSON(object: any): _405.QueryLastPendingValsetRequestByAddrRequest;
            toJSON(message: _405.QueryLastPendingValsetRequestByAddrRequest): unknown;
            fromPartial(object: {
                address?: string;
            }): _405.QueryLastPendingValsetRequestByAddrRequest;
        };
        QueryLastPendingValsetRequestByAddrResponse: {
            encode(message: _405.QueryLastPendingValsetRequestByAddrResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.QueryLastPendingValsetRequestByAddrResponse;
            fromJSON(object: any): _405.QueryLastPendingValsetRequestByAddrResponse;
            toJSON(message: _405.QueryLastPendingValsetRequestByAddrResponse): unknown;
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
            }): _405.QueryLastPendingValsetRequestByAddrResponse;
        };
        QueryBatchFeeRequest: {
            encode(_: _405.QueryBatchFeeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.QueryBatchFeeRequest;
            fromJSON(_: any): _405.QueryBatchFeeRequest;
            toJSON(_: _405.QueryBatchFeeRequest): unknown;
            fromPartial(_: {}): _405.QueryBatchFeeRequest;
        };
        QueryBatchFeeResponse: {
            encode(message: _405.QueryBatchFeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.QueryBatchFeeResponse;
            fromJSON(object: any): _405.QueryBatchFeeResponse;
            toJSON(message: _405.QueryBatchFeeResponse): unknown;
            fromPartial(object: {
                batchFees?: {
                    token?: string;
                    totalFees?: string;
                    txCount?: any;
                }[];
            }): _405.QueryBatchFeeResponse;
        };
        QueryLastPendingBatchRequestByAddrRequest: {
            encode(message: _405.QueryLastPendingBatchRequestByAddrRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.QueryLastPendingBatchRequestByAddrRequest;
            fromJSON(object: any): _405.QueryLastPendingBatchRequestByAddrRequest;
            toJSON(message: _405.QueryLastPendingBatchRequestByAddrRequest): unknown;
            fromPartial(object: {
                address?: string;
            }): _405.QueryLastPendingBatchRequestByAddrRequest;
        };
        QueryLastPendingBatchRequestByAddrResponse: {
            encode(message: _405.QueryLastPendingBatchRequestByAddrResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.QueryLastPendingBatchRequestByAddrResponse;
            fromJSON(object: any): _405.QueryLastPendingBatchRequestByAddrResponse;
            toJSON(message: _405.QueryLastPendingBatchRequestByAddrResponse): unknown;
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
            }): _405.QueryLastPendingBatchRequestByAddrResponse;
        };
        QueryLastPendingLogicCallByAddrRequest: {
            encode(message: _405.QueryLastPendingLogicCallByAddrRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.QueryLastPendingLogicCallByAddrRequest;
            fromJSON(object: any): _405.QueryLastPendingLogicCallByAddrRequest;
            toJSON(message: _405.QueryLastPendingLogicCallByAddrRequest): unknown;
            fromPartial(object: {
                address?: string;
            }): _405.QueryLastPendingLogicCallByAddrRequest;
        };
        QueryLastPendingLogicCallByAddrResponse: {
            encode(message: _405.QueryLastPendingLogicCallByAddrResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.QueryLastPendingLogicCallByAddrResponse;
            fromJSON(object: any): _405.QueryLastPendingLogicCallByAddrResponse;
            toJSON(message: _405.QueryLastPendingLogicCallByAddrResponse): unknown;
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
            }): _405.QueryLastPendingLogicCallByAddrResponse;
        };
        QueryOutgoingTxBatchesRequest: {
            encode(_: _405.QueryOutgoingTxBatchesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.QueryOutgoingTxBatchesRequest;
            fromJSON(_: any): _405.QueryOutgoingTxBatchesRequest;
            toJSON(_: _405.QueryOutgoingTxBatchesRequest): unknown;
            fromPartial(_: {}): _405.QueryOutgoingTxBatchesRequest;
        };
        QueryOutgoingTxBatchesResponse: {
            encode(message: _405.QueryOutgoingTxBatchesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.QueryOutgoingTxBatchesResponse;
            fromJSON(object: any): _405.QueryOutgoingTxBatchesResponse;
            toJSON(message: _405.QueryOutgoingTxBatchesResponse): unknown;
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
            }): _405.QueryOutgoingTxBatchesResponse;
        };
        QueryOutgoingLogicCallsRequest: {
            encode(_: _405.QueryOutgoingLogicCallsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.QueryOutgoingLogicCallsRequest;
            fromJSON(_: any): _405.QueryOutgoingLogicCallsRequest;
            toJSON(_: _405.QueryOutgoingLogicCallsRequest): unknown;
            fromPartial(_: {}): _405.QueryOutgoingLogicCallsRequest;
        };
        QueryOutgoingLogicCallsResponse: {
            encode(message: _405.QueryOutgoingLogicCallsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.QueryOutgoingLogicCallsResponse;
            fromJSON(object: any): _405.QueryOutgoingLogicCallsResponse;
            toJSON(message: _405.QueryOutgoingLogicCallsResponse): unknown;
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
            }): _405.QueryOutgoingLogicCallsResponse;
        };
        QueryBatchRequestByNonceRequest: {
            encode(message: _405.QueryBatchRequestByNonceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.QueryBatchRequestByNonceRequest;
            fromJSON(object: any): _405.QueryBatchRequestByNonceRequest;
            toJSON(message: _405.QueryBatchRequestByNonceRequest): unknown;
            fromPartial(object: {
                nonce?: any;
                contractAddress?: string;
            }): _405.QueryBatchRequestByNonceRequest;
        };
        QueryBatchRequestByNonceResponse: {
            encode(message: _405.QueryBatchRequestByNonceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.QueryBatchRequestByNonceResponse;
            fromJSON(object: any): _405.QueryBatchRequestByNonceResponse;
            toJSON(message: _405.QueryBatchRequestByNonceResponse): unknown;
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
            }): _405.QueryBatchRequestByNonceResponse;
        };
        QueryBatchConfirmsRequest: {
            encode(message: _405.QueryBatchConfirmsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.QueryBatchConfirmsRequest;
            fromJSON(object: any): _405.QueryBatchConfirmsRequest;
            toJSON(message: _405.QueryBatchConfirmsRequest): unknown;
            fromPartial(object: {
                nonce?: any;
                contractAddress?: string;
            }): _405.QueryBatchConfirmsRequest;
        };
        QueryBatchConfirmsResponse: {
            encode(message: _405.QueryBatchConfirmsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.QueryBatchConfirmsResponse;
            fromJSON(object: any): _405.QueryBatchConfirmsResponse;
            toJSON(message: _405.QueryBatchConfirmsResponse): unknown;
            fromPartial(object: {
                confirms?: {
                    nonce?: any;
                    tokenContract?: string;
                    ethSigner?: string;
                    orchestrator?: string;
                    signature?: string;
                }[];
            }): _405.QueryBatchConfirmsResponse;
        };
        QueryLogicConfirmsRequest: {
            encode(message: _405.QueryLogicConfirmsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.QueryLogicConfirmsRequest;
            fromJSON(object: any): _405.QueryLogicConfirmsRequest;
            toJSON(message: _405.QueryLogicConfirmsRequest): unknown;
            fromPartial(object: {
                invalidationId?: Uint8Array;
                invalidationNonce?: any;
            }): _405.QueryLogicConfirmsRequest;
        };
        QueryLogicConfirmsResponse: {
            encode(message: _405.QueryLogicConfirmsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.QueryLogicConfirmsResponse;
            fromJSON(object: any): _405.QueryLogicConfirmsResponse;
            toJSON(message: _405.QueryLogicConfirmsResponse): unknown;
            fromPartial(object: {
                confirms?: {
                    invalidationId?: string;
                    invalidationNonce?: any;
                    ethSigner?: string;
                    orchestrator?: string;
                    signature?: string;
                }[];
            }): _405.QueryLogicConfirmsResponse;
        };
        QueryLastEventNonceByAddrRequest: {
            encode(message: _405.QueryLastEventNonceByAddrRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.QueryLastEventNonceByAddrRequest;
            fromJSON(object: any): _405.QueryLastEventNonceByAddrRequest;
            toJSON(message: _405.QueryLastEventNonceByAddrRequest): unknown;
            fromPartial(object: {
                address?: string;
            }): _405.QueryLastEventNonceByAddrRequest;
        };
        QueryLastEventNonceByAddrResponse: {
            encode(message: _405.QueryLastEventNonceByAddrResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.QueryLastEventNonceByAddrResponse;
            fromJSON(object: any): _405.QueryLastEventNonceByAddrResponse;
            toJSON(message: _405.QueryLastEventNonceByAddrResponse): unknown;
            fromPartial(object: {
                eventNonce?: any;
            }): _405.QueryLastEventNonceByAddrResponse;
        };
        QueryERC20ToDenomRequest: {
            encode(message: _405.QueryERC20ToDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.QueryERC20ToDenomRequest;
            fromJSON(object: any): _405.QueryERC20ToDenomRequest;
            toJSON(message: _405.QueryERC20ToDenomRequest): unknown;
            fromPartial(object: {
                erc20?: string;
            }): _405.QueryERC20ToDenomRequest;
        };
        QueryERC20ToDenomResponse: {
            encode(message: _405.QueryERC20ToDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.QueryERC20ToDenomResponse;
            fromJSON(object: any): _405.QueryERC20ToDenomResponse;
            toJSON(message: _405.QueryERC20ToDenomResponse): unknown;
            fromPartial(object: {
                denom?: string;
                cosmosOriginated?: boolean;
            }): _405.QueryERC20ToDenomResponse;
        };
        QueryDenomToERC20Request: {
            encode(message: _405.QueryDenomToERC20Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.QueryDenomToERC20Request;
            fromJSON(object: any): _405.QueryDenomToERC20Request;
            toJSON(message: _405.QueryDenomToERC20Request): unknown;
            fromPartial(object: {
                denom?: string;
            }): _405.QueryDenomToERC20Request;
        };
        QueryDenomToERC20Response: {
            encode(message: _405.QueryDenomToERC20Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.QueryDenomToERC20Response;
            fromJSON(object: any): _405.QueryDenomToERC20Response;
            toJSON(message: _405.QueryDenomToERC20Response): unknown;
            fromPartial(object: {
                erc20?: string;
                cosmosOriginated?: boolean;
            }): _405.QueryDenomToERC20Response;
        };
        QueryLastObservedEthBlockRequest: {
            encode(message: _405.QueryLastObservedEthBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.QueryLastObservedEthBlockRequest;
            fromJSON(object: any): _405.QueryLastObservedEthBlockRequest;
            toJSON(message: _405.QueryLastObservedEthBlockRequest): unknown;
            fromPartial(object: {
                useV1Key?: boolean;
            }): _405.QueryLastObservedEthBlockRequest;
        };
        QueryLastObservedEthBlockResponse: {
            encode(message: _405.QueryLastObservedEthBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.QueryLastObservedEthBlockResponse;
            fromJSON(object: any): _405.QueryLastObservedEthBlockResponse;
            toJSON(message: _405.QueryLastObservedEthBlockResponse): unknown;
            fromPartial(object: {
                block?: any;
            }): _405.QueryLastObservedEthBlockResponse;
        };
        QueryLastObservedEthNonceRequest: {
            encode(message: _405.QueryLastObservedEthNonceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.QueryLastObservedEthNonceRequest;
            fromJSON(object: any): _405.QueryLastObservedEthNonceRequest;
            toJSON(message: _405.QueryLastObservedEthNonceRequest): unknown;
            fromPartial(object: {
                useV1Key?: boolean;
            }): _405.QueryLastObservedEthNonceRequest;
        };
        QueryLastObservedEthNonceResponse: {
            encode(message: _405.QueryLastObservedEthNonceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.QueryLastObservedEthNonceResponse;
            fromJSON(object: any): _405.QueryLastObservedEthNonceResponse;
            toJSON(message: _405.QueryLastObservedEthNonceResponse): unknown;
            fromPartial(object: {
                nonce?: any;
            }): _405.QueryLastObservedEthNonceResponse;
        };
        QueryAttestationsRequest: {
            encode(message: _405.QueryAttestationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.QueryAttestationsRequest;
            fromJSON(object: any): _405.QueryAttestationsRequest;
            toJSON(message: _405.QueryAttestationsRequest): unknown;
            fromPartial(object: {
                limit?: any;
                orderBy?: string;
                claimType?: string;
                nonce?: any;
                height?: any;
                useV1Key?: boolean;
            }): _405.QueryAttestationsRequest;
        };
        QueryAttestationsResponse: {
            encode(message: _405.QueryAttestationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.QueryAttestationsResponse;
            fromJSON(object: any): _405.QueryAttestationsResponse;
            toJSON(message: _405.QueryAttestationsResponse): unknown;
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
            }): _405.QueryAttestationsResponse;
        };
        QueryDelegateKeysByValidatorAddress: {
            encode(message: _405.QueryDelegateKeysByValidatorAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.QueryDelegateKeysByValidatorAddress;
            fromJSON(object: any): _405.QueryDelegateKeysByValidatorAddress;
            toJSON(message: _405.QueryDelegateKeysByValidatorAddress): unknown;
            fromPartial(object: {
                validatorAddress?: string;
            }): _405.QueryDelegateKeysByValidatorAddress;
        };
        QueryDelegateKeysByValidatorAddressResponse: {
            encode(message: _405.QueryDelegateKeysByValidatorAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.QueryDelegateKeysByValidatorAddressResponse;
            fromJSON(object: any): _405.QueryDelegateKeysByValidatorAddressResponse;
            toJSON(message: _405.QueryDelegateKeysByValidatorAddressResponse): unknown;
            fromPartial(object: {
                ethAddress?: string;
                orchestratorAddress?: string;
            }): _405.QueryDelegateKeysByValidatorAddressResponse;
        };
        QueryDelegateKeysByEthAddress: {
            encode(message: _405.QueryDelegateKeysByEthAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.QueryDelegateKeysByEthAddress;
            fromJSON(object: any): _405.QueryDelegateKeysByEthAddress;
            toJSON(message: _405.QueryDelegateKeysByEthAddress): unknown;
            fromPartial(object: {
                ethAddress?: string;
            }): _405.QueryDelegateKeysByEthAddress;
        };
        QueryDelegateKeysByEthAddressResponse: {
            encode(message: _405.QueryDelegateKeysByEthAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.QueryDelegateKeysByEthAddressResponse;
            fromJSON(object: any): _405.QueryDelegateKeysByEthAddressResponse;
            toJSON(message: _405.QueryDelegateKeysByEthAddressResponse): unknown;
            fromPartial(object: {
                validatorAddress?: string;
                orchestratorAddress?: string;
            }): _405.QueryDelegateKeysByEthAddressResponse;
        };
        QueryDelegateKeysByOrchestratorAddress: {
            encode(message: _405.QueryDelegateKeysByOrchestratorAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.QueryDelegateKeysByOrchestratorAddress;
            fromJSON(object: any): _405.QueryDelegateKeysByOrchestratorAddress;
            toJSON(message: _405.QueryDelegateKeysByOrchestratorAddress): unknown;
            fromPartial(object: {
                orchestratorAddress?: string;
            }): _405.QueryDelegateKeysByOrchestratorAddress;
        };
        QueryDelegateKeysByOrchestratorAddressResponse: {
            encode(message: _405.QueryDelegateKeysByOrchestratorAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.QueryDelegateKeysByOrchestratorAddressResponse;
            fromJSON(object: any): _405.QueryDelegateKeysByOrchestratorAddressResponse;
            toJSON(message: _405.QueryDelegateKeysByOrchestratorAddressResponse): unknown;
            fromPartial(object: {
                validatorAddress?: string;
                ethAddress?: string;
            }): _405.QueryDelegateKeysByOrchestratorAddressResponse;
        };
        QueryPendingSendToEth: {
            encode(message: _405.QueryPendingSendToEth, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.QueryPendingSendToEth;
            fromJSON(object: any): _405.QueryPendingSendToEth;
            toJSON(message: _405.QueryPendingSendToEth): unknown;
            fromPartial(object: {
                senderAddress?: string;
            }): _405.QueryPendingSendToEth;
        };
        QueryPendingSendToEthResponse: {
            encode(message: _405.QueryPendingSendToEthResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.QueryPendingSendToEthResponse;
            fromJSON(object: any): _405.QueryPendingSendToEthResponse;
            toJSON(message: _405.QueryPendingSendToEthResponse): unknown;
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
            }): _405.QueryPendingSendToEthResponse;
        };
        QueryPendingIbcAutoForwards: {
            encode(message: _405.QueryPendingIbcAutoForwards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.QueryPendingIbcAutoForwards;
            fromJSON(object: any): _405.QueryPendingIbcAutoForwards;
            toJSON(message: _405.QueryPendingIbcAutoForwards): unknown;
            fromPartial(object: {
                limit?: any;
            }): _405.QueryPendingIbcAutoForwards;
        };
        QueryPendingIbcAutoForwardsResponse: {
            encode(message: _405.QueryPendingIbcAutoForwardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _405.QueryPendingIbcAutoForwardsResponse;
            fromJSON(object: any): _405.QueryPendingIbcAutoForwardsResponse;
            toJSON(message: _405.QueryPendingIbcAutoForwardsResponse): unknown;
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
            }): _405.QueryPendingIbcAutoForwardsResponse;
        };
        IDSet: {
            encode(message: _404.IDSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _404.IDSet;
            fromJSON(object: any): _404.IDSet;
            toJSON(message: _404.IDSet): unknown;
            fromPartial(object: {
                ids?: any[];
            }): _404.IDSet;
        };
        BatchFees: {
            encode(message: _404.BatchFees, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _404.BatchFees;
            fromJSON(object: any): _404.BatchFees;
            toJSON(message: _404.BatchFees): unknown;
            fromPartial(object: {
                token?: string;
                totalFees?: string;
                txCount?: any;
            }): _404.BatchFees;
        };
        EventWithdrawalReceived: {
            encode(message: _404.EventWithdrawalReceived, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _404.EventWithdrawalReceived;
            fromJSON(object: any): _404.EventWithdrawalReceived;
            toJSON(message: _404.EventWithdrawalReceived): unknown;
            fromPartial(object: {
                bridgeContract?: string;
                bridgeChainId?: string;
                outgoingTxId?: string;
                nonce?: string;
            }): _404.EventWithdrawalReceived;
        };
        EventWithdrawCanceled: {
            encode(message: _404.EventWithdrawCanceled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _404.EventWithdrawCanceled;
            fromJSON(object: any): _404.EventWithdrawCanceled;
            toJSON(message: _404.EventWithdrawCanceled): unknown;
            fromPartial(object: {
                sender?: string;
                txId?: string;
                bridgeContract?: string;
                bridgeChainId?: string;
            }): _404.EventWithdrawCanceled;
        };
        MsgSetOrchestratorAddress: {
            encode(message: _403.MsgSetOrchestratorAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _403.MsgSetOrchestratorAddress;
            fromJSON(object: any): _403.MsgSetOrchestratorAddress;
            toJSON(message: _403.MsgSetOrchestratorAddress): unknown;
            fromPartial(object: {
                validator?: string;
                orchestrator?: string;
                ethAddress?: string;
            }): _403.MsgSetOrchestratorAddress;
        };
        MsgSetOrchestratorAddressResponse: {
            encode(_: _403.MsgSetOrchestratorAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _403.MsgSetOrchestratorAddressResponse;
            fromJSON(_: any): _403.MsgSetOrchestratorAddressResponse;
            toJSON(_: _403.MsgSetOrchestratorAddressResponse): unknown;
            fromPartial(_: {}): _403.MsgSetOrchestratorAddressResponse;
        };
        MsgValsetConfirm: {
            encode(message: _403.MsgValsetConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _403.MsgValsetConfirm;
            fromJSON(object: any): _403.MsgValsetConfirm;
            toJSON(message: _403.MsgValsetConfirm): unknown;
            fromPartial(object: {
                nonce?: any;
                orchestrator?: string;
                ethAddress?: string;
                signature?: string;
            }): _403.MsgValsetConfirm;
        };
        MsgValsetConfirmResponse: {
            encode(_: _403.MsgValsetConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _403.MsgValsetConfirmResponse;
            fromJSON(_: any): _403.MsgValsetConfirmResponse;
            toJSON(_: _403.MsgValsetConfirmResponse): unknown;
            fromPartial(_: {}): _403.MsgValsetConfirmResponse;
        };
        MsgSendToEth: {
            encode(message: _403.MsgSendToEth, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _403.MsgSendToEth;
            fromJSON(object: any): _403.MsgSendToEth;
            toJSON(message: _403.MsgSendToEth): unknown;
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
            }): _403.MsgSendToEth;
        };
        MsgSendToEthResponse: {
            encode(_: _403.MsgSendToEthResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _403.MsgSendToEthResponse;
            fromJSON(_: any): _403.MsgSendToEthResponse;
            toJSON(_: _403.MsgSendToEthResponse): unknown;
            fromPartial(_: {}): _403.MsgSendToEthResponse;
        };
        MsgRequestBatch: {
            encode(message: _403.MsgRequestBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _403.MsgRequestBatch;
            fromJSON(object: any): _403.MsgRequestBatch;
            toJSON(message: _403.MsgRequestBatch): unknown;
            fromPartial(object: {
                sender?: string;
                denom?: string;
            }): _403.MsgRequestBatch;
        };
        MsgRequestBatchResponse: {
            encode(_: _403.MsgRequestBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _403.MsgRequestBatchResponse;
            fromJSON(_: any): _403.MsgRequestBatchResponse;
            toJSON(_: _403.MsgRequestBatchResponse): unknown;
            fromPartial(_: {}): _403.MsgRequestBatchResponse;
        };
        MsgConfirmBatch: {
            encode(message: _403.MsgConfirmBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _403.MsgConfirmBatch;
            fromJSON(object: any): _403.MsgConfirmBatch;
            toJSON(message: _403.MsgConfirmBatch): unknown;
            fromPartial(object: {
                nonce?: any;
                tokenContract?: string;
                ethSigner?: string;
                orchestrator?: string;
                signature?: string;
            }): _403.MsgConfirmBatch;
        };
        MsgConfirmBatchResponse: {
            encode(_: _403.MsgConfirmBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _403.MsgConfirmBatchResponse;
            fromJSON(_: any): _403.MsgConfirmBatchResponse;
            toJSON(_: _403.MsgConfirmBatchResponse): unknown;
            fromPartial(_: {}): _403.MsgConfirmBatchResponse;
        };
        MsgConfirmLogicCall: {
            encode(message: _403.MsgConfirmLogicCall, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _403.MsgConfirmLogicCall;
            fromJSON(object: any): _403.MsgConfirmLogicCall;
            toJSON(message: _403.MsgConfirmLogicCall): unknown;
            fromPartial(object: {
                invalidationId?: string;
                invalidationNonce?: any;
                ethSigner?: string;
                orchestrator?: string;
                signature?: string;
            }): _403.MsgConfirmLogicCall;
        };
        MsgConfirmLogicCallResponse: {
            encode(_: _403.MsgConfirmLogicCallResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _403.MsgConfirmLogicCallResponse;
            fromJSON(_: any): _403.MsgConfirmLogicCallResponse;
            toJSON(_: _403.MsgConfirmLogicCallResponse): unknown;
            fromPartial(_: {}): _403.MsgConfirmLogicCallResponse;
        };
        MsgSendToCosmosClaim: {
            encode(message: _403.MsgSendToCosmosClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _403.MsgSendToCosmosClaim;
            fromJSON(object: any): _403.MsgSendToCosmosClaim;
            toJSON(message: _403.MsgSendToCosmosClaim): unknown;
            fromPartial(object: {
                eventNonce?: any;
                blockHeight?: any;
                tokenContract?: string;
                amount?: string;
                ethereumSender?: string;
                cosmosReceiver?: string;
                orchestrator?: string;
            }): _403.MsgSendToCosmosClaim;
        };
        MsgSendToCosmosClaimResponse: {
            encode(_: _403.MsgSendToCosmosClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _403.MsgSendToCosmosClaimResponse;
            fromJSON(_: any): _403.MsgSendToCosmosClaimResponse;
            toJSON(_: _403.MsgSendToCosmosClaimResponse): unknown;
            fromPartial(_: {}): _403.MsgSendToCosmosClaimResponse;
        };
        MsgExecuteIbcAutoForwards: {
            encode(message: _403.MsgExecuteIbcAutoForwards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _403.MsgExecuteIbcAutoForwards;
            fromJSON(object: any): _403.MsgExecuteIbcAutoForwards;
            toJSON(message: _403.MsgExecuteIbcAutoForwards): unknown;
            fromPartial(object: {
                forwardsToClear?: any;
                executor?: string;
            }): _403.MsgExecuteIbcAutoForwards;
        };
        MsgExecuteIbcAutoForwardsResponse: {
            encode(_: _403.MsgExecuteIbcAutoForwardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _403.MsgExecuteIbcAutoForwardsResponse;
            fromJSON(_: any): _403.MsgExecuteIbcAutoForwardsResponse;
            toJSON(_: _403.MsgExecuteIbcAutoForwardsResponse): unknown;
            fromPartial(_: {}): _403.MsgExecuteIbcAutoForwardsResponse;
        };
        MsgBatchSendToEthClaim: {
            encode(message: _403.MsgBatchSendToEthClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _403.MsgBatchSendToEthClaim;
            fromJSON(object: any): _403.MsgBatchSendToEthClaim;
            toJSON(message: _403.MsgBatchSendToEthClaim): unknown;
            fromPartial(object: {
                eventNonce?: any;
                blockHeight?: any;
                batchNonce?: any;
                tokenContract?: string;
                orchestrator?: string;
            }): _403.MsgBatchSendToEthClaim;
        };
        MsgBatchSendToEthClaimResponse: {
            encode(_: _403.MsgBatchSendToEthClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _403.MsgBatchSendToEthClaimResponse;
            fromJSON(_: any): _403.MsgBatchSendToEthClaimResponse;
            toJSON(_: _403.MsgBatchSendToEthClaimResponse): unknown;
            fromPartial(_: {}): _403.MsgBatchSendToEthClaimResponse;
        };
        MsgERC20DeployedClaim: {
            encode(message: _403.MsgERC20DeployedClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _403.MsgERC20DeployedClaim;
            fromJSON(object: any): _403.MsgERC20DeployedClaim;
            toJSON(message: _403.MsgERC20DeployedClaim): unknown;
            fromPartial(object: {
                eventNonce?: any;
                blockHeight?: any;
                cosmosDenom?: string;
                tokenContract?: string;
                name?: string;
                symbol?: string;
                decimals?: any;
                orchestrator?: string;
            }): _403.MsgERC20DeployedClaim;
        };
        MsgERC20DeployedClaimResponse: {
            encode(_: _403.MsgERC20DeployedClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _403.MsgERC20DeployedClaimResponse;
            fromJSON(_: any): _403.MsgERC20DeployedClaimResponse;
            toJSON(_: _403.MsgERC20DeployedClaimResponse): unknown;
            fromPartial(_: {}): _403.MsgERC20DeployedClaimResponse;
        };
        MsgLogicCallExecutedClaim: {
            encode(message: _403.MsgLogicCallExecutedClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _403.MsgLogicCallExecutedClaim;
            fromJSON(object: any): _403.MsgLogicCallExecutedClaim;
            toJSON(message: _403.MsgLogicCallExecutedClaim): unknown;
            fromPartial(object: {
                eventNonce?: any;
                blockHeight?: any;
                invalidationId?: Uint8Array;
                invalidationNonce?: any;
                orchestrator?: string;
            }): _403.MsgLogicCallExecutedClaim;
        };
        MsgLogicCallExecutedClaimResponse: {
            encode(_: _403.MsgLogicCallExecutedClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _403.MsgLogicCallExecutedClaimResponse;
            fromJSON(_: any): _403.MsgLogicCallExecutedClaimResponse;
            toJSON(_: _403.MsgLogicCallExecutedClaimResponse): unknown;
            fromPartial(_: {}): _403.MsgLogicCallExecutedClaimResponse;
        };
        MsgValsetUpdatedClaim: {
            encode(message: _403.MsgValsetUpdatedClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _403.MsgValsetUpdatedClaim;
            fromJSON(object: any): _403.MsgValsetUpdatedClaim;
            toJSON(message: _403.MsgValsetUpdatedClaim): unknown;
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
            }): _403.MsgValsetUpdatedClaim;
        };
        MsgValsetUpdatedClaimResponse: {
            encode(_: _403.MsgValsetUpdatedClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _403.MsgValsetUpdatedClaimResponse;
            fromJSON(_: any): _403.MsgValsetUpdatedClaimResponse;
            toJSON(_: _403.MsgValsetUpdatedClaimResponse): unknown;
            fromPartial(_: {}): _403.MsgValsetUpdatedClaimResponse;
        };
        MsgCancelSendToEth: {
            encode(message: _403.MsgCancelSendToEth, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _403.MsgCancelSendToEth;
            fromJSON(object: any): _403.MsgCancelSendToEth;
            toJSON(message: _403.MsgCancelSendToEth): unknown;
            fromPartial(object: {
                transactionId?: any;
                sender?: string;
            }): _403.MsgCancelSendToEth;
        };
        MsgCancelSendToEthResponse: {
            encode(_: _403.MsgCancelSendToEthResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _403.MsgCancelSendToEthResponse;
            fromJSON(_: any): _403.MsgCancelSendToEthResponse;
            toJSON(_: _403.MsgCancelSendToEthResponse): unknown;
            fromPartial(_: {}): _403.MsgCancelSendToEthResponse;
        };
        MsgSubmitBadSignatureEvidence: {
            encode(message: _403.MsgSubmitBadSignatureEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _403.MsgSubmitBadSignatureEvidence;
            fromJSON(object: any): _403.MsgSubmitBadSignatureEvidence;
            toJSON(message: _403.MsgSubmitBadSignatureEvidence): unknown;
            fromPartial(object: {
                subject?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
                signature?: string;
                sender?: string;
            }): _403.MsgSubmitBadSignatureEvidence;
        };
        MsgSubmitBadSignatureEvidenceResponse: {
            encode(_: _403.MsgSubmitBadSignatureEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _403.MsgSubmitBadSignatureEvidenceResponse;
            fromJSON(_: any): _403.MsgSubmitBadSignatureEvidenceResponse;
            toJSON(_: _403.MsgSubmitBadSignatureEvidenceResponse): unknown;
            fromPartial(_: {}): _403.MsgSubmitBadSignatureEvidenceResponse;
        };
        EventSetOperatorAddress: {
            encode(message: _403.EventSetOperatorAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _403.EventSetOperatorAddress;
            fromJSON(object: any): _403.EventSetOperatorAddress;
            toJSON(message: _403.EventSetOperatorAddress): unknown;
            fromPartial(object: {
                message?: string;
                address?: string;
            }): _403.EventSetOperatorAddress;
        };
        EventValsetConfirmKey: {
            encode(message: _403.EventValsetConfirmKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _403.EventValsetConfirmKey;
            fromJSON(object: any): _403.EventValsetConfirmKey;
            toJSON(message: _403.EventValsetConfirmKey): unknown;
            fromPartial(object: {
                message?: string;
                key?: string;
            }): _403.EventValsetConfirmKey;
        };
        EventBatchCreated: {
            encode(message: _403.EventBatchCreated, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _403.EventBatchCreated;
            fromJSON(object: any): _403.EventBatchCreated;
            toJSON(message: _403.EventBatchCreated): unknown;
            fromPartial(object: {
                message?: string;
                batchNonce?: string;
            }): _403.EventBatchCreated;
        };
        EventBatchConfirmKey: {
            encode(message: _403.EventBatchConfirmKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _403.EventBatchConfirmKey;
            fromJSON(object: any): _403.EventBatchConfirmKey;
            toJSON(message: _403.EventBatchConfirmKey): unknown;
            fromPartial(object: {
                message?: string;
                batchConfirmKey?: string;
            }): _403.EventBatchConfirmKey;
        };
        EventBatchSendToEthClaim: {
            encode(message: _403.EventBatchSendToEthClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _403.EventBatchSendToEthClaim;
            fromJSON(object: any): _403.EventBatchSendToEthClaim;
            toJSON(message: _403.EventBatchSendToEthClaim): unknown;
            fromPartial(object: {
                nonce?: string;
            }): _403.EventBatchSendToEthClaim;
        };
        EventClaim: {
            encode(message: _403.EventClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _403.EventClaim;
            fromJSON(object: any): _403.EventClaim;
            toJSON(message: _403.EventClaim): unknown;
            fromPartial(object: {
                message?: string;
                claimHash?: string;
                attestationId?: string;
            }): _403.EventClaim;
        };
        EventBadSignatureEvidence: {
            encode(message: _403.EventBadSignatureEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _403.EventBadSignatureEvidence;
            fromJSON(object: any): _403.EventBadSignatureEvidence;
            toJSON(message: _403.EventBadSignatureEvidence): unknown;
            fromPartial(object: {
                message?: string;
                badEthSignature?: string;
                badEthSignatureSubject?: string;
            }): _403.EventBadSignatureEvidence;
        };
        EventERC20DeployedClaim: {
            encode(message: _403.EventERC20DeployedClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _403.EventERC20DeployedClaim;
            fromJSON(object: any): _403.EventERC20DeployedClaim;
            toJSON(message: _403.EventERC20DeployedClaim): unknown;
            fromPartial(object: {
                token?: string;
                nonce?: string;
            }): _403.EventERC20DeployedClaim;
        };
        EventValsetUpdatedClaim: {
            encode(message: _403.EventValsetUpdatedClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _403.EventValsetUpdatedClaim;
            fromJSON(object: any): _403.EventValsetUpdatedClaim;
            toJSON(message: _403.EventValsetUpdatedClaim): unknown;
            fromPartial(object: {
                nonce?: string;
            }): _403.EventValsetUpdatedClaim;
        };
        EventMultisigUpdateRequest: {
            encode(message: _403.EventMultisigUpdateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _403.EventMultisigUpdateRequest;
            fromJSON(object: any): _403.EventMultisigUpdateRequest;
            toJSON(message: _403.EventMultisigUpdateRequest): unknown;
            fromPartial(object: {
                bridgeContract?: string;
                bridgeChainId?: string;
                multisigId?: string;
                nonce?: string;
            }): _403.EventMultisigUpdateRequest;
        };
        EventOutgoingLogicCallCanceled: {
            encode(message: _403.EventOutgoingLogicCallCanceled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _403.EventOutgoingLogicCallCanceled;
            fromJSON(object: any): _403.EventOutgoingLogicCallCanceled;
            toJSON(message: _403.EventOutgoingLogicCallCanceled): unknown;
            fromPartial(object: {
                logicCallInvalidationId?: string;
                logicCallInvalidationNonce?: string;
            }): _403.EventOutgoingLogicCallCanceled;
        };
        EventSignatureSlashing: {
            encode(message: _403.EventSignatureSlashing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _403.EventSignatureSlashing;
            fromJSON(object: any): _403.EventSignatureSlashing;
            toJSON(message: _403.EventSignatureSlashing): unknown;
            fromPartial(object: {
                type?: string;
                address?: string;
            }): _403.EventSignatureSlashing;
        };
        EventOutgoingTxId: {
            encode(message: _403.EventOutgoingTxId, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _403.EventOutgoingTxId;
            fromJSON(object: any): _403.EventOutgoingTxId;
            toJSON(message: _403.EventOutgoingTxId): unknown;
            fromPartial(object: {
                message?: string;
                txId?: string;
            }): _403.EventOutgoingTxId;
        };
        Params: {
            encode(message: _402.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _402.Params;
            fromJSON(object: any): _402.Params;
            toJSON(message: _402.Params): unknown;
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
            }): _402.Params;
        };
        GenesisState: {
            encode(message: _402.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _402.GenesisState;
            fromJSON(object: any): _402.GenesisState;
            toJSON(message: _402.GenesisState): unknown;
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
            }): _402.GenesisState;
        };
        GravityNonces: {
            encode(message: _402.GravityNonces, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _402.GravityNonces;
            fromJSON(object: any): _402.GravityNonces;
            toJSON(message: _402.GravityNonces): unknown;
            fromPartial(object: {
                latestValsetNonce?: any;
                lastObservedNonce?: any;
                lastSlashedValsetNonce?: any;
                lastSlashedBatchBlock?: any;
                lastSlashedLogicCallBlock?: any;
                lastTxPoolId?: any;
                lastBatchId?: any;
            }): _402.GravityNonces;
        };
        signTypeFromJSON(object: any): _401.SignType;
        signTypeToJSON(object: _401.SignType): string;
        SignType: typeof _401.SignType;
        OutgoingTxBatch: {
            encode(message: _400.OutgoingTxBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _400.OutgoingTxBatch;
            fromJSON(object: any): _400.OutgoingTxBatch;
            toJSON(message: _400.OutgoingTxBatch): unknown;
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
            }): _400.OutgoingTxBatch;
        };
        OutgoingTransferTx: {
            encode(message: _400.OutgoingTransferTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _400.OutgoingTransferTx;
            fromJSON(object: any): _400.OutgoingTransferTx;
            toJSON(message: _400.OutgoingTransferTx): unknown;
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
            }): _400.OutgoingTransferTx;
        };
        OutgoingLogicCall: {
            encode(message: _400.OutgoingLogicCall, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _400.OutgoingLogicCall;
            fromJSON(object: any): _400.OutgoingLogicCall;
            toJSON(message: _400.OutgoingLogicCall): unknown;
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
            }): _400.OutgoingLogicCall;
        };
        EventOutgoingBatchCanceled: {
            encode(message: _400.EventOutgoingBatchCanceled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _400.EventOutgoingBatchCanceled;
            fromJSON(object: any): _400.EventOutgoingBatchCanceled;
            toJSON(message: _400.EventOutgoingBatchCanceled): unknown;
            fromPartial(object: {
                bridgeContract?: string;
                bridgeChainId?: string;
                batchId?: string;
                nonce?: string;
            }): _400.EventOutgoingBatchCanceled;
        };
        EventOutgoingBatch: {
            encode(message: _400.EventOutgoingBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _400.EventOutgoingBatch;
            fromJSON(object: any): _400.EventOutgoingBatch;
            toJSON(message: _400.EventOutgoingBatch): unknown;
            fromPartial(object: {
                bridgeContract?: string;
                bridgeChainId?: string;
                batchId?: string;
                nonce?: string;
            }): _400.EventOutgoingBatch;
        };
        claimTypeFromJSON(object: any): _399.ClaimType;
        claimTypeToJSON(object: _399.ClaimType): string;
        ClaimType: typeof _399.ClaimType;
        Attestation: {
            encode(message: _399.Attestation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _399.Attestation;
            fromJSON(object: any): _399.Attestation;
            toJSON(message: _399.Attestation): unknown;
            fromPartial(object: {
                observed?: boolean;
                votes?: string[];
                height?: any;
                claim?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            }): _399.Attestation;
        };
        ERC20Token: {
            encode(message: _399.ERC20Token, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _399.ERC20Token;
            fromJSON(object: any): _399.ERC20Token;
            toJSON(message: _399.ERC20Token): unknown;
            fromPartial(object: {
                contract?: string;
                amount?: string;
            }): _399.ERC20Token;
        };
        EventObservation: {
            encode(message: _399.EventObservation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _399.EventObservation;
            fromJSON(object: any): _399.EventObservation;
            toJSON(message: _399.EventObservation): unknown;
            fromPartial(object: {
                attestationType?: string;
                bridgeContract?: string;
                bridgeChainId?: string;
                attestationId?: string;
                nonce?: string;
            }): _399.EventObservation;
        };
        EventInvalidSendToCosmosReceiver: {
            encode(message: _399.EventInvalidSendToCosmosReceiver, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _399.EventInvalidSendToCosmosReceiver;
            fromJSON(object: any): _399.EventInvalidSendToCosmosReceiver;
            toJSON(message: _399.EventInvalidSendToCosmosReceiver): unknown;
            fromPartial(object: {
                amount?: string;
                nonce?: string;
                token?: string;
                sender?: string;
            }): _399.EventInvalidSendToCosmosReceiver;
        };
        EventSendToCosmos: {
            encode(message: _399.EventSendToCosmos, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _399.EventSendToCosmos;
            fromJSON(object: any): _399.EventSendToCosmos;
            toJSON(message: _399.EventSendToCosmos): unknown;
            fromPartial(object: {
                amount?: string;
                nonce?: string;
                token?: string;
            }): _399.EventSendToCosmos;
        };
        EventSendToCosmosLocal: {
            encode(message: _399.EventSendToCosmosLocal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _399.EventSendToCosmosLocal;
            fromJSON(object: any): _399.EventSendToCosmosLocal;
            toJSON(message: _399.EventSendToCosmosLocal): unknown;
            fromPartial(object: {
                nonce?: string;
                receiver?: string;
                token?: string;
                amount?: string;
            }): _399.EventSendToCosmosLocal;
        };
        EventSendToCosmosPendingIbcAutoForward: {
            encode(message: _399.EventSendToCosmosPendingIbcAutoForward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _399.EventSendToCosmosPendingIbcAutoForward;
            fromJSON(object: any): _399.EventSendToCosmosPendingIbcAutoForward;
            toJSON(message: _399.EventSendToCosmosPendingIbcAutoForward): unknown;
            fromPartial(object: {
                nonce?: string;
                receiver?: string;
                token?: string;
                amount?: string;
                channel?: string;
            }): _399.EventSendToCosmosPendingIbcAutoForward;
        };
        EventSendToCosmosExecutedIbcAutoForward: {
            encode(message: _399.EventSendToCosmosExecutedIbcAutoForward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _399.EventSendToCosmosExecutedIbcAutoForward;
            fromJSON(object: any): _399.EventSendToCosmosExecutedIbcAutoForward;
            toJSON(message: _399.EventSendToCosmosExecutedIbcAutoForward): unknown;
            fromPartial(object: {
                nonce?: string;
                receiver?: string;
                token?: string;
                amount?: string;
                channel?: string;
                timeoutTime?: string;
                timeoutHeight?: string;
            }): _399.EventSendToCosmosExecutedIbcAutoForward;
        };
    };
}
