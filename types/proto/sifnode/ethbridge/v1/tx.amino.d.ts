import { AminoMsg } from "@cosmjs/amino";
import { MsgLock, MsgBurn, MsgCreateEthBridgeClaim, MsgUpdateWhiteListValidator, MsgUpdateCethReceiverAccount, MsgRescueCeth, MsgSetBlacklist } from "./tx";
export interface AminoMsgLock extends AminoMsg {
    type: "/sifnode.ethbridge.v1.MsgLock";
    value: {
        cosmos_sender: string;
        amount: string;
        symbol: string;
        ethereum_chain_id: string;
        ethereum_receiver: string;
        ceth_amount: string;
    };
}
export interface AminoMsgBurn extends AminoMsg {
    type: "/sifnode.ethbridge.v1.MsgBurn";
    value: {
        cosmos_sender: string;
        amount: string;
        symbol: string;
        ethereum_chain_id: string;
        ethereum_receiver: string;
        ceth_amount: string;
    };
}
export interface AminoMsgCreateEthBridgeClaim extends AminoMsg {
    type: "/sifnode.ethbridge.v1.MsgCreateEthBridgeClaim";
    value: {
        eth_bridge_claim: {
            ethereum_chain_id: string;
            bridge_contract_address: string;
            nonce: string;
            symbol: string;
            token_contract_address: string;
            ethereum_sender: string;
            cosmos_receiver: string;
            validator_address: string;
            amount: string;
            claim_type: number;
        };
    };
}
export interface AminoMsgUpdateWhiteListValidator extends AminoMsg {
    type: "/sifnode.ethbridge.v1.MsgUpdateWhiteListValidator";
    value: {
        cosmos_sender: string;
        validator: string;
        operation_type: string;
    };
}
export interface AminoMsgUpdateCethReceiverAccount extends AminoMsg {
    type: "/sifnode.ethbridge.v1.MsgUpdateCethReceiverAccount";
    value: {
        cosmos_sender: string;
        ceth_receiver_account: string;
    };
}
export interface AminoMsgRescueCeth extends AminoMsg {
    type: "/sifnode.ethbridge.v1.MsgRescueCeth";
    value: {
        cosmos_sender: string;
        cosmos_receiver: string;
        ceth_amount: string;
    };
}
export interface AminoMsgSetBlacklist extends AminoMsg {
    type: "/sifnode.ethbridge.v1.MsgSetBlacklist";
    value: {
        from: string;
        addresses: string[];
    };
}
export declare const AminoConverter: {
    "/sifnode.ethbridge.v1.MsgLock": {
        aminoType: string;
        toAmino: ({ cosmosSender, amount, symbol, ethereumChainId, ethereumReceiver, cethAmount }: MsgLock) => AminoMsgLock["value"];
        fromAmino: ({ cosmos_sender, amount, symbol, ethereum_chain_id, ethereum_receiver, ceth_amount }: AminoMsgLock["value"]) => MsgLock;
    };
    "/sifnode.ethbridge.v1.MsgBurn": {
        aminoType: string;
        toAmino: ({ cosmosSender, amount, symbol, ethereumChainId, ethereumReceiver, cethAmount }: MsgBurn) => AminoMsgBurn["value"];
        fromAmino: ({ cosmos_sender, amount, symbol, ethereum_chain_id, ethereum_receiver, ceth_amount }: AminoMsgBurn["value"]) => MsgBurn;
    };
    "/sifnode.ethbridge.v1.MsgCreateEthBridgeClaim": {
        aminoType: string;
        toAmino: ({ ethBridgeClaim }: MsgCreateEthBridgeClaim) => AminoMsgCreateEthBridgeClaim["value"];
        fromAmino: ({ eth_bridge_claim }: AminoMsgCreateEthBridgeClaim["value"]) => MsgCreateEthBridgeClaim;
    };
    "/sifnode.ethbridge.v1.MsgUpdateWhiteListValidator": {
        aminoType: string;
        toAmino: ({ cosmosSender, validator, operationType }: MsgUpdateWhiteListValidator) => AminoMsgUpdateWhiteListValidator["value"];
        fromAmino: ({ cosmos_sender, validator, operation_type }: AminoMsgUpdateWhiteListValidator["value"]) => MsgUpdateWhiteListValidator;
    };
    "/sifnode.ethbridge.v1.MsgUpdateCethReceiverAccount": {
        aminoType: string;
        toAmino: ({ cosmosSender, cethReceiverAccount }: MsgUpdateCethReceiverAccount) => AminoMsgUpdateCethReceiverAccount["value"];
        fromAmino: ({ cosmos_sender, ceth_receiver_account }: AminoMsgUpdateCethReceiverAccount["value"]) => MsgUpdateCethReceiverAccount;
    };
    "/sifnode.ethbridge.v1.MsgRescueCeth": {
        aminoType: string;
        toAmino: ({ cosmosSender, cosmosReceiver, cethAmount }: MsgRescueCeth) => AminoMsgRescueCeth["value"];
        fromAmino: ({ cosmos_sender, cosmos_receiver, ceth_amount }: AminoMsgRescueCeth["value"]) => MsgRescueCeth;
    };
    "/sifnode.ethbridge.v1.MsgSetBlacklist": {
        aminoType: string;
        toAmino: ({ from, addresses }: MsgSetBlacklist) => AminoMsgSetBlacklist["value"];
        fromAmino: ({ from, addresses }: AminoMsgSetBlacklist["value"]) => MsgSetBlacklist;
    };
};
