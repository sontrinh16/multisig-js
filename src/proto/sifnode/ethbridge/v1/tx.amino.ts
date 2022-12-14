import { EthBridgeClaim, claimTypeFromJSON } from "./types";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "@osmonauts/helpers";
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
export const AminoConverter = {
  "/sifnode.ethbridge.v1.MsgLock": {
    aminoType: "/sifnode.ethbridge.v1.MsgLock",
    toAmino: ({
      cosmosSender,
      amount,
      symbol,
      ethereumChainId,
      ethereumReceiver,
      cethAmount
    }: MsgLock): AminoMsgLock["value"] => {
      return {
        cosmos_sender: cosmosSender,
        amount,
        symbol,
        ethereum_chain_id: ethereumChainId.toString(),
        ethereum_receiver: ethereumReceiver,
        ceth_amount: cethAmount
      };
    },
    fromAmino: ({
      cosmos_sender,
      amount,
      symbol,
      ethereum_chain_id,
      ethereum_receiver,
      ceth_amount
    }: AminoMsgLock["value"]): MsgLock => {
      return {
        cosmosSender: cosmos_sender,
        amount,
        symbol,
        ethereumChainId: Long.fromString(ethereum_chain_id),
        ethereumReceiver: ethereum_receiver,
        cethAmount: ceth_amount
      };
    }
  },
  "/sifnode.ethbridge.v1.MsgBurn": {
    aminoType: "/sifnode.ethbridge.v1.MsgBurn",
    toAmino: ({
      cosmosSender,
      amount,
      symbol,
      ethereumChainId,
      ethereumReceiver,
      cethAmount
    }: MsgBurn): AminoMsgBurn["value"] => {
      return {
        cosmos_sender: cosmosSender,
        amount,
        symbol,
        ethereum_chain_id: ethereumChainId.toString(),
        ethereum_receiver: ethereumReceiver,
        ceth_amount: cethAmount
      };
    },
    fromAmino: ({
      cosmos_sender,
      amount,
      symbol,
      ethereum_chain_id,
      ethereum_receiver,
      ceth_amount
    }: AminoMsgBurn["value"]): MsgBurn => {
      return {
        cosmosSender: cosmos_sender,
        amount,
        symbol,
        ethereumChainId: Long.fromString(ethereum_chain_id),
        ethereumReceiver: ethereum_receiver,
        cethAmount: ceth_amount
      };
    }
  },
  "/sifnode.ethbridge.v1.MsgCreateEthBridgeClaim": {
    aminoType: "/sifnode.ethbridge.v1.MsgCreateEthBridgeClaim",
    toAmino: ({
      ethBridgeClaim
    }: MsgCreateEthBridgeClaim): AminoMsgCreateEthBridgeClaim["value"] => {
      return {
        eth_bridge_claim: {
          ethereum_chain_id: ethBridgeClaim.ethereumChainId.toString(),
          bridge_contract_address: ethBridgeClaim.bridgeContractAddress,
          nonce: ethBridgeClaim.nonce.toString(),
          symbol: ethBridgeClaim.symbol,
          token_contract_address: ethBridgeClaim.tokenContractAddress,
          ethereum_sender: ethBridgeClaim.ethereumSender,
          cosmos_receiver: ethBridgeClaim.cosmosReceiver,
          validator_address: ethBridgeClaim.validatorAddress,
          amount: ethBridgeClaim.amount,
          claim_type: ethBridgeClaim.claimType
        }
      };
    },
    fromAmino: ({
      eth_bridge_claim
    }: AminoMsgCreateEthBridgeClaim["value"]): MsgCreateEthBridgeClaim => {
      return {
        ethBridgeClaim: {
          ethereumChainId: Long.fromString(eth_bridge_claim.ethereum_chain_id),
          bridgeContractAddress: eth_bridge_claim.bridge_contract_address,
          nonce: Long.fromString(eth_bridge_claim.nonce),
          symbol: eth_bridge_claim.symbol,
          tokenContractAddress: eth_bridge_claim.token_contract_address,
          ethereumSender: eth_bridge_claim.ethereum_sender,
          cosmosReceiver: eth_bridge_claim.cosmos_receiver,
          validatorAddress: eth_bridge_claim.validator_address,
          amount: eth_bridge_claim.amount,
          claimType: claimTypeFromJSON(eth_bridge_claim.claim_type)
        }
      };
    }
  },
  "/sifnode.ethbridge.v1.MsgUpdateWhiteListValidator": {
    aminoType: "/sifnode.ethbridge.v1.MsgUpdateWhiteListValidator",
    toAmino: ({
      cosmosSender,
      validator,
      operationType
    }: MsgUpdateWhiteListValidator): AminoMsgUpdateWhiteListValidator["value"] => {
      return {
        cosmos_sender: cosmosSender,
        validator,
        operation_type: operationType
      };
    },
    fromAmino: ({
      cosmos_sender,
      validator,
      operation_type
    }: AminoMsgUpdateWhiteListValidator["value"]): MsgUpdateWhiteListValidator => {
      return {
        cosmosSender: cosmos_sender,
        validator,
        operationType: operation_type
      };
    }
  },
  "/sifnode.ethbridge.v1.MsgUpdateCethReceiverAccount": {
    aminoType: "/sifnode.ethbridge.v1.MsgUpdateCethReceiverAccount",
    toAmino: ({
      cosmosSender,
      cethReceiverAccount
    }: MsgUpdateCethReceiverAccount): AminoMsgUpdateCethReceiverAccount["value"] => {
      return {
        cosmos_sender: cosmosSender,
        ceth_receiver_account: cethReceiverAccount
      };
    },
    fromAmino: ({
      cosmos_sender,
      ceth_receiver_account
    }: AminoMsgUpdateCethReceiverAccount["value"]): MsgUpdateCethReceiverAccount => {
      return {
        cosmosSender: cosmos_sender,
        cethReceiverAccount: ceth_receiver_account
      };
    }
  },
  "/sifnode.ethbridge.v1.MsgRescueCeth": {
    aminoType: "/sifnode.ethbridge.v1.MsgRescueCeth",
    toAmino: ({
      cosmosSender,
      cosmosReceiver,
      cethAmount
    }: MsgRescueCeth): AminoMsgRescueCeth["value"] => {
      return {
        cosmos_sender: cosmosSender,
        cosmos_receiver: cosmosReceiver,
        ceth_amount: cethAmount
      };
    },
    fromAmino: ({
      cosmos_sender,
      cosmos_receiver,
      ceth_amount
    }: AminoMsgRescueCeth["value"]): MsgRescueCeth => {
      return {
        cosmosSender: cosmos_sender,
        cosmosReceiver: cosmos_receiver,
        cethAmount: ceth_amount
      };
    }
  },
  "/sifnode.ethbridge.v1.MsgSetBlacklist": {
    aminoType: "/sifnode.ethbridge.v1.MsgSetBlacklist",
    toAmino: ({
      from,
      addresses
    }: MsgSetBlacklist): AminoMsgSetBlacklist["value"] => {
      return {
        from,
        addresses
      };
    },
    fromAmino: ({
      from,
      addresses
    }: AminoMsgSetBlacklist["value"]): MsgSetBlacklist => {
      return {
        from,
        addresses
      };
    }
  }
};