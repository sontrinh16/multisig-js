import { AminoMsg } from "@cosmjs/amino";
import { MsgValsetConfirm, MsgSendToEth, MsgRequestBatch, MsgConfirmBatch, MsgConfirmLogicCall, MsgSendToCosmosClaim, MsgExecuteIbcAutoForwards, MsgBatchSendToEthClaim, MsgValsetUpdatedClaim, MsgERC20DeployedClaim, MsgLogicCallExecutedClaim, MsgSetOrchestratorAddress, MsgCancelSendToEth, MsgSubmitBadSignatureEvidence } from "./msgs";
export interface AminoMsgValsetConfirm extends AminoMsg {
    type: "/gravity.v1.MsgValsetConfirm";
    value: {
        nonce: string;
        orchestrator: string;
        eth_address: string;
        signature: string;
    };
}
export interface AminoMsgSendToEth extends AminoMsg {
    type: "/gravity.v1.MsgSendToEth";
    value: {
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
}
export interface AminoMsgRequestBatch extends AminoMsg {
    type: "/gravity.v1.MsgRequestBatch";
    value: {
        sender: string;
        denom: string;
    };
}
export interface AminoMsgConfirmBatch extends AminoMsg {
    type: "/gravity.v1.MsgConfirmBatch";
    value: {
        nonce: string;
        token_contract: string;
        eth_signer: string;
        orchestrator: string;
        signature: string;
    };
}
export interface AminoMsgConfirmLogicCall extends AminoMsg {
    type: "/gravity.v1.MsgConfirmLogicCall";
    value: {
        invalidation_id: string;
        invalidation_nonce: string;
        eth_signer: string;
        orchestrator: string;
        signature: string;
    };
}
export interface AminoMsgSendToCosmosClaim extends AminoMsg {
    type: "/gravity.v1.MsgSendToCosmosClaim";
    value: {
        event_nonce: string;
        block_height: string;
        token_contract: string;
        amount: string;
        ethereum_sender: string;
        cosmos_receiver: string;
        orchestrator: string;
    };
}
export interface AminoMsgExecuteIbcAutoForwards extends AminoMsg {
    type: "/gravity.v1.MsgExecuteIbcAutoForwards";
    value: {
        forwards_to_clear: string;
        executor: string;
    };
}
export interface AminoMsgBatchSendToEthClaim extends AminoMsg {
    type: "/gravity.v1.MsgBatchSendToEthClaim";
    value: {
        event_nonce: string;
        block_height: string;
        batch_nonce: string;
        token_contract: string;
        orchestrator: string;
    };
}
export interface AminoMsgValsetUpdatedClaim extends AminoMsg {
    type: "/gravity.v1.MsgValsetUpdatedClaim";
    value: {
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
}
export interface AminoMsgERC20DeployedClaim extends AminoMsg {
    type: "/gravity.v1.MsgERC20DeployedClaim";
    value: {
        event_nonce: string;
        block_height: string;
        cosmos_denom: string;
        token_contract: string;
        name: string;
        symbol: string;
        decimals: string;
        orchestrator: string;
    };
}
export interface AminoMsgLogicCallExecutedClaim extends AminoMsg {
    type: "/gravity.v1.MsgLogicCallExecutedClaim";
    value: {
        event_nonce: string;
        block_height: string;
        invalidation_id: Uint8Array;
        invalidation_nonce: string;
        orchestrator: string;
    };
}
export interface AminoMsgSetOrchestratorAddress extends AminoMsg {
    type: "/gravity.v1.MsgSetOrchestratorAddress";
    value: {
        validator: string;
        orchestrator: string;
        eth_address: string;
    };
}
export interface AminoMsgCancelSendToEth extends AminoMsg {
    type: "/gravity.v1.MsgCancelSendToEth";
    value: {
        transaction_id: string;
        sender: string;
    };
}
export interface AminoMsgSubmitBadSignatureEvidence extends AminoMsg {
    type: "/gravity.v1.MsgSubmitBadSignatureEvidence";
    value: {
        subject: {
            type_url: string;
            value: Uint8Array;
        };
        signature: string;
        sender: string;
    };
}
export declare const AminoConverter: {
    "/gravity.v1.MsgValsetConfirm": {
        aminoType: string;
        toAmino: ({ nonce, orchestrator, ethAddress, signature }: MsgValsetConfirm) => AminoMsgValsetConfirm["value"];
        fromAmino: ({ nonce, orchestrator, eth_address, signature }: AminoMsgValsetConfirm["value"]) => MsgValsetConfirm;
    };
    "/gravity.v1.MsgSendToEth": {
        aminoType: string;
        toAmino: ({ sender, ethDest, amount, bridgeFee }: MsgSendToEth) => AminoMsgSendToEth["value"];
        fromAmino: ({ sender, eth_dest, amount, bridge_fee }: AminoMsgSendToEth["value"]) => MsgSendToEth;
    };
    "/gravity.v1.MsgRequestBatch": {
        aminoType: string;
        toAmino: ({ sender, denom }: MsgRequestBatch) => AminoMsgRequestBatch["value"];
        fromAmino: ({ sender, denom }: AminoMsgRequestBatch["value"]) => MsgRequestBatch;
    };
    "/gravity.v1.MsgConfirmBatch": {
        aminoType: string;
        toAmino: ({ nonce, tokenContract, ethSigner, orchestrator, signature }: MsgConfirmBatch) => AminoMsgConfirmBatch["value"];
        fromAmino: ({ nonce, token_contract, eth_signer, orchestrator, signature }: AminoMsgConfirmBatch["value"]) => MsgConfirmBatch;
    };
    "/gravity.v1.MsgConfirmLogicCall": {
        aminoType: string;
        toAmino: ({ invalidationId, invalidationNonce, ethSigner, orchestrator, signature }: MsgConfirmLogicCall) => AminoMsgConfirmLogicCall["value"];
        fromAmino: ({ invalidation_id, invalidation_nonce, eth_signer, orchestrator, signature }: AminoMsgConfirmLogicCall["value"]) => MsgConfirmLogicCall;
    };
    "/gravity.v1.MsgSendToCosmosClaim": {
        aminoType: string;
        toAmino: ({ eventNonce, blockHeight, tokenContract, amount, ethereumSender, cosmosReceiver, orchestrator }: MsgSendToCosmosClaim) => AminoMsgSendToCosmosClaim["value"];
        fromAmino: ({ event_nonce, block_height, token_contract, amount, ethereum_sender, cosmos_receiver, orchestrator }: AminoMsgSendToCosmosClaim["value"]) => MsgSendToCosmosClaim;
    };
    "/gravity.v1.MsgExecuteIbcAutoForwards": {
        aminoType: string;
        toAmino: ({ forwardsToClear, executor }: MsgExecuteIbcAutoForwards) => AminoMsgExecuteIbcAutoForwards["value"];
        fromAmino: ({ forwards_to_clear, executor }: AminoMsgExecuteIbcAutoForwards["value"]) => MsgExecuteIbcAutoForwards;
    };
    "/gravity.v1.MsgBatchSendToEthClaim": {
        aminoType: string;
        toAmino: ({ eventNonce, blockHeight, batchNonce, tokenContract, orchestrator }: MsgBatchSendToEthClaim) => AminoMsgBatchSendToEthClaim["value"];
        fromAmino: ({ event_nonce, block_height, batch_nonce, token_contract, orchestrator }: AminoMsgBatchSendToEthClaim["value"]) => MsgBatchSendToEthClaim;
    };
    "/gravity.v1.MsgValsetUpdatedClaim": {
        aminoType: string;
        toAmino: ({ eventNonce, valsetNonce, blockHeight, members, rewardAmount, rewardToken, orchestrator }: MsgValsetUpdatedClaim) => AminoMsgValsetUpdatedClaim["value"];
        fromAmino: ({ event_nonce, valset_nonce, block_height, members, reward_amount, reward_token, orchestrator }: AminoMsgValsetUpdatedClaim["value"]) => MsgValsetUpdatedClaim;
    };
    "/gravity.v1.MsgERC20DeployedClaim": {
        aminoType: string;
        toAmino: ({ eventNonce, blockHeight, cosmosDenom, tokenContract, name, symbol, decimals, orchestrator }: MsgERC20DeployedClaim) => AminoMsgERC20DeployedClaim["value"];
        fromAmino: ({ event_nonce, block_height, cosmos_denom, token_contract, name, symbol, decimals, orchestrator }: AminoMsgERC20DeployedClaim["value"]) => MsgERC20DeployedClaim;
    };
    "/gravity.v1.MsgLogicCallExecutedClaim": {
        aminoType: string;
        toAmino: ({ eventNonce, blockHeight, invalidationId, invalidationNonce, orchestrator }: MsgLogicCallExecutedClaim) => AminoMsgLogicCallExecutedClaim["value"];
        fromAmino: ({ event_nonce, block_height, invalidation_id, invalidation_nonce, orchestrator }: AminoMsgLogicCallExecutedClaim["value"]) => MsgLogicCallExecutedClaim;
    };
    "/gravity.v1.MsgSetOrchestratorAddress": {
        aminoType: string;
        toAmino: ({ validator, orchestrator, ethAddress }: MsgSetOrchestratorAddress) => AminoMsgSetOrchestratorAddress["value"];
        fromAmino: ({ validator, orchestrator, eth_address }: AminoMsgSetOrchestratorAddress["value"]) => MsgSetOrchestratorAddress;
    };
    "/gravity.v1.MsgCancelSendToEth": {
        aminoType: string;
        toAmino: ({ transactionId, sender }: MsgCancelSendToEth) => AminoMsgCancelSendToEth["value"];
        fromAmino: ({ transaction_id, sender }: AminoMsgCancelSendToEth["value"]) => MsgCancelSendToEth;
    };
    "/gravity.v1.MsgSubmitBadSignatureEvidence": {
        aminoType: string;
        toAmino: ({ subject, signature, sender }: MsgSubmitBadSignatureEvidence) => AminoMsgSubmitBadSignatureEvidence["value"];
        fromAmino: ({ subject, signature, sender }: AminoMsgSubmitBadSignatureEvidence["value"]) => MsgSubmitBadSignatureEvidence;
    };
};
