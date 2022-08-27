import { AminoMsg } from "@cosmjs/amino";
import { MsgRegisterFeeSplit, MsgUpdateFeeSplit, MsgCancelFeeSplit } from "./tx";
export interface AminoMsgRegisterFeeSplit extends AminoMsg {
  type: "/evmos.feesplit.v1.MsgRegisterFeeSplit";
  value: {
    contract_address: string;
    deployer_address: string;
    withdrawer_address: string;
    nonces: Long[];
  };
}
export interface AminoMsgUpdateFeeSplit extends AminoMsg {
  type: "/evmos.feesplit.v1.MsgUpdateFeeSplit";
  value: {
    contract_address: string;
    deployer_address: string;
    withdrawer_address: string;
  };
}
export interface AminoMsgCancelFeeSplit extends AminoMsg {
  type: "/evmos.feesplit.v1.MsgCancelFeeSplit";
  value: {
    contract_address: string;
    deployer_address: string;
  };
}
export const AminoConverter = {
  "/evmos.feesplit.v1.MsgRegisterFeeSplit": {
    aminoType: "/evmos.feesplit.v1.MsgRegisterFeeSplit",
    toAmino: ({
      contractAddress,
      deployerAddress,
      withdrawerAddress,
      nonces
    }: MsgRegisterFeeSplit): AminoMsgRegisterFeeSplit["value"] => {
      return {
        contract_address: contractAddress,
        deployer_address: deployerAddress,
        withdrawer_address: withdrawerAddress,
        nonces: nonces.map(el0 => el0.toString())
      };
    },
    fromAmino: ({
      contract_address,
      deployer_address,
      withdrawer_address,
      nonces
    }: AminoMsgRegisterFeeSplit["value"]): MsgRegisterFeeSplit => {
      return {
        contractAddress: contract_address,
        deployerAddress: deployer_address,
        withdrawerAddress: withdrawer_address,
        nonces: nonces.map(el0 => Long.fromString(el0))
      };
    }
  },
  "/evmos.feesplit.v1.MsgUpdateFeeSplit": {
    aminoType: "/evmos.feesplit.v1.MsgUpdateFeeSplit",
    toAmino: ({
      contractAddress,
      deployerAddress,
      withdrawerAddress
    }: MsgUpdateFeeSplit): AminoMsgUpdateFeeSplit["value"] => {
      return {
        contract_address: contractAddress,
        deployer_address: deployerAddress,
        withdrawer_address: withdrawerAddress
      };
    },
    fromAmino: ({
      contract_address,
      deployer_address,
      withdrawer_address
    }: AminoMsgUpdateFeeSplit["value"]): MsgUpdateFeeSplit => {
      return {
        contractAddress: contract_address,
        deployerAddress: deployer_address,
        withdrawerAddress: withdrawer_address
      };
    }
  },
  "/evmos.feesplit.v1.MsgCancelFeeSplit": {
    aminoType: "/evmos.feesplit.v1.MsgCancelFeeSplit",
    toAmino: ({
      contractAddress,
      deployerAddress
    }: MsgCancelFeeSplit): AminoMsgCancelFeeSplit["value"] => {
      return {
        contract_address: contractAddress,
        deployer_address: deployerAddress
      };
    },
    fromAmino: ({
      contract_address,
      deployer_address
    }: AminoMsgCancelFeeSplit["value"]): MsgCancelFeeSplit => {
      return {
        contractAddress: contract_address,
        deployerAddress: deployer_address
      };
    }
  }
};