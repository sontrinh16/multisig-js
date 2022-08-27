import { UpdateProjectStatusDoc, CreateAgentDoc, UpdateAgentDoc, CreateClaimDoc, CreateEvaluationDoc, WithdrawFundsDoc } from "./project";
import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateProject, MsgUpdateProjectStatus, MsgCreateAgent, MsgUpdateAgent, MsgCreateClaim, MsgCreateEvaluation, MsgWithdrawFunds, MsgUpdateProjectDoc } from "./tx";
export interface AminoMsgCreateProject extends AminoMsg {
  type: "/project.MsgCreateProject";
  value: {
    tx_hash: string;
    sender_did: string;
    project_did: string;
    pub_key: string;
    data: Uint8Array;
  };
}
export interface AminoMsgUpdateProjectStatus extends AminoMsg {
  type: "/project.MsgUpdateProjectStatus";
  value: {
    tx_hash: string;
    sender_did: string;
    project_did: string;
    data: {
      status: string;
      eth_funding_txn_id: string;
    };
  };
}
export interface AminoMsgCreateAgent extends AminoMsg {
  type: "/project.MsgCreateAgent";
  value: {
    tx_hash: string;
    sender_did: string;
    project_did: string;
    data: {
      agent_did: string;
      role: string;
    };
  };
}
export interface AminoMsgUpdateAgent extends AminoMsg {
  type: "/project.MsgUpdateAgent";
  value: {
    tx_hash: string;
    sender_did: string;
    project_did: string;
    data: {
      did: string;
      status: string;
      role: string;
    };
  };
}
export interface AminoMsgCreateClaim extends AminoMsg {
  type: "/project.MsgCreateClaim";
  value: {
    tx_hash: string;
    sender_did: string;
    project_did: string;
    data: {
      claim_id: string;
      claim_template_id: string;
    };
  };
}
export interface AminoMsgCreateEvaluation extends AminoMsg {
  type: "/project.MsgCreateEvaluation";
  value: {
    tx_hash: string;
    sender_did: string;
    project_did: string;
    data: {
      claim_id: string;
      status: string;
    };
  };
}
export interface AminoMsgWithdrawFunds extends AminoMsg {
  type: "/project.MsgWithdrawFunds";
  value: {
    sender_did: string;
    data: {
      project_did: string;
      recipient_did: string;
      amount: string;
      is_refund: boolean;
    };
  };
}
export interface AminoMsgUpdateProjectDoc extends AminoMsg {
  type: "/project.MsgUpdateProjectDoc";
  value: {
    tx_hash: string;
    sender_did: string;
    project_did: string;
    data: Uint8Array;
  };
}
export const AminoConverter = {
  "/project.MsgCreateProject": {
    aminoType: "/project.MsgCreateProject",
    toAmino: ({
      txHash,
      senderDid,
      projectDid,
      pubKey,
      data
    }: MsgCreateProject): AminoMsgCreateProject["value"] => {
      return {
        tx_hash: txHash,
        sender_did: senderDid,
        project_did: projectDid,
        pub_key: pubKey,
        data
      };
    },
    fromAmino: ({
      tx_hash,
      sender_did,
      project_did,
      pub_key,
      data
    }: AminoMsgCreateProject["value"]): MsgCreateProject => {
      return {
        txHash: tx_hash,
        senderDid: sender_did,
        projectDid: project_did,
        pubKey: pub_key,
        data
      };
    }
  },
  "/project.MsgUpdateProjectStatus": {
    aminoType: "/project.MsgUpdateProjectStatus",
    toAmino: ({
      txHash,
      senderDid,
      projectDid,
      data
    }: MsgUpdateProjectStatus): AminoMsgUpdateProjectStatus["value"] => {
      return {
        tx_hash: txHash,
        sender_did: senderDid,
        project_did: projectDid,
        data: {
          status: data.status,
          eth_funding_txn_id: data.ethFundingTxnId
        }
      };
    },
    fromAmino: ({
      tx_hash,
      sender_did,
      project_did,
      data
    }: AminoMsgUpdateProjectStatus["value"]): MsgUpdateProjectStatus => {
      return {
        txHash: tx_hash,
        senderDid: sender_did,
        projectDid: project_did,
        data: {
          status: data.status,
          ethFundingTxnId: data.eth_funding_txn_id
        }
      };
    }
  },
  "/project.MsgCreateAgent": {
    aminoType: "/project.MsgCreateAgent",
    toAmino: ({
      txHash,
      senderDid,
      projectDid,
      data
    }: MsgCreateAgent): AminoMsgCreateAgent["value"] => {
      return {
        tx_hash: txHash,
        sender_did: senderDid,
        project_did: projectDid,
        data: {
          agent_did: data.agentDid,
          role: data.role
        }
      };
    },
    fromAmino: ({
      tx_hash,
      sender_did,
      project_did,
      data
    }: AminoMsgCreateAgent["value"]): MsgCreateAgent => {
      return {
        txHash: tx_hash,
        senderDid: sender_did,
        projectDid: project_did,
        data: {
          agentDid: data.agent_did,
          role: data.role
        }
      };
    }
  },
  "/project.MsgUpdateAgent": {
    aminoType: "/project.MsgUpdateAgent",
    toAmino: ({
      txHash,
      senderDid,
      projectDid,
      data
    }: MsgUpdateAgent): AminoMsgUpdateAgent["value"] => {
      return {
        tx_hash: txHash,
        sender_did: senderDid,
        project_did: projectDid,
        data: {
          did: data.did,
          status: data.status,
          role: data.role
        }
      };
    },
    fromAmino: ({
      tx_hash,
      sender_did,
      project_did,
      data
    }: AminoMsgUpdateAgent["value"]): MsgUpdateAgent => {
      return {
        txHash: tx_hash,
        senderDid: sender_did,
        projectDid: project_did,
        data: {
          did: data.did,
          status: data.status,
          role: data.role
        }
      };
    }
  },
  "/project.MsgCreateClaim": {
    aminoType: "/project.MsgCreateClaim",
    toAmino: ({
      txHash,
      senderDid,
      projectDid,
      data
    }: MsgCreateClaim): AminoMsgCreateClaim["value"] => {
      return {
        tx_hash: txHash,
        sender_did: senderDid,
        project_did: projectDid,
        data: {
          claim_id: data.claimId,
          claim_template_id: data.claimTemplateId
        }
      };
    },
    fromAmino: ({
      tx_hash,
      sender_did,
      project_did,
      data
    }: AminoMsgCreateClaim["value"]): MsgCreateClaim => {
      return {
        txHash: tx_hash,
        senderDid: sender_did,
        projectDid: project_did,
        data: {
          claimId: data.claim_id,
          claimTemplateId: data.claim_template_id
        }
      };
    }
  },
  "/project.MsgCreateEvaluation": {
    aminoType: "/project.MsgCreateEvaluation",
    toAmino: ({
      txHash,
      senderDid,
      projectDid,
      data
    }: MsgCreateEvaluation): AminoMsgCreateEvaluation["value"] => {
      return {
        tx_hash: txHash,
        sender_did: senderDid,
        project_did: projectDid,
        data: {
          claim_id: data.claimId,
          status: data.status
        }
      };
    },
    fromAmino: ({
      tx_hash,
      sender_did,
      project_did,
      data
    }: AminoMsgCreateEvaluation["value"]): MsgCreateEvaluation => {
      return {
        txHash: tx_hash,
        senderDid: sender_did,
        projectDid: project_did,
        data: {
          claimId: data.claim_id,
          status: data.status
        }
      };
    }
  },
  "/project.MsgWithdrawFunds": {
    aminoType: "/project.MsgWithdrawFunds",
    toAmino: ({
      senderDid,
      data
    }: MsgWithdrawFunds): AminoMsgWithdrawFunds["value"] => {
      return {
        sender_did: senderDid,
        data: {
          project_did: data.projectDid,
          recipient_did: data.recipientDid,
          amount: data.amount,
          is_refund: data.isRefund
        }
      };
    },
    fromAmino: ({
      sender_did,
      data
    }: AminoMsgWithdrawFunds["value"]): MsgWithdrawFunds => {
      return {
        senderDid: sender_did,
        data: {
          projectDid: data.project_did,
          recipientDid: data.recipient_did,
          amount: data.amount,
          isRefund: data.is_refund
        }
      };
    }
  },
  "/project.MsgUpdateProjectDoc": {
    aminoType: "/project.MsgUpdateProjectDoc",
    toAmino: ({
      txHash,
      senderDid,
      projectDid,
      data
    }: MsgUpdateProjectDoc): AminoMsgUpdateProjectDoc["value"] => {
      return {
        tx_hash: txHash,
        sender_did: senderDid,
        project_did: projectDid,
        data
      };
    },
    fromAmino: ({
      tx_hash,
      sender_did,
      project_did,
      data
    }: AminoMsgUpdateProjectDoc["value"]): MsgUpdateProjectDoc => {
      return {
        txHash: tx_hash,
        senderDid: sender_did,
        projectDid: project_did,
        data
      };
    }
  }
};