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
export declare const AminoConverter: {
    "/project.MsgCreateProject": {
        aminoType: string;
        toAmino: ({ txHash, senderDid, projectDid, pubKey, data }: MsgCreateProject) => AminoMsgCreateProject["value"];
        fromAmino: ({ tx_hash, sender_did, project_did, pub_key, data }: AminoMsgCreateProject["value"]) => MsgCreateProject;
    };
    "/project.MsgUpdateProjectStatus": {
        aminoType: string;
        toAmino: ({ txHash, senderDid, projectDid, data }: MsgUpdateProjectStatus) => AminoMsgUpdateProjectStatus["value"];
        fromAmino: ({ tx_hash, sender_did, project_did, data }: AminoMsgUpdateProjectStatus["value"]) => MsgUpdateProjectStatus;
    };
    "/project.MsgCreateAgent": {
        aminoType: string;
        toAmino: ({ txHash, senderDid, projectDid, data }: MsgCreateAgent) => AminoMsgCreateAgent["value"];
        fromAmino: ({ tx_hash, sender_did, project_did, data }: AminoMsgCreateAgent["value"]) => MsgCreateAgent;
    };
    "/project.MsgUpdateAgent": {
        aminoType: string;
        toAmino: ({ txHash, senderDid, projectDid, data }: MsgUpdateAgent) => AminoMsgUpdateAgent["value"];
        fromAmino: ({ tx_hash, sender_did, project_did, data }: AminoMsgUpdateAgent["value"]) => MsgUpdateAgent;
    };
    "/project.MsgCreateClaim": {
        aminoType: string;
        toAmino: ({ txHash, senderDid, projectDid, data }: MsgCreateClaim) => AminoMsgCreateClaim["value"];
        fromAmino: ({ tx_hash, sender_did, project_did, data }: AminoMsgCreateClaim["value"]) => MsgCreateClaim;
    };
    "/project.MsgCreateEvaluation": {
        aminoType: string;
        toAmino: ({ txHash, senderDid, projectDid, data }: MsgCreateEvaluation) => AminoMsgCreateEvaluation["value"];
        fromAmino: ({ tx_hash, sender_did, project_did, data }: AminoMsgCreateEvaluation["value"]) => MsgCreateEvaluation;
    };
    "/project.MsgWithdrawFunds": {
        aminoType: string;
        toAmino: ({ senderDid, data }: MsgWithdrawFunds) => AminoMsgWithdrawFunds["value"];
        fromAmino: ({ sender_did, data }: AminoMsgWithdrawFunds["value"]) => MsgWithdrawFunds;
    };
    "/project.MsgUpdateProjectDoc": {
        aminoType: string;
        toAmino: ({ txHash, senderDid, projectDid, data }: MsgUpdateProjectDoc) => AminoMsgUpdateProjectDoc["value"];
        fromAmino: ({ tx_hash, sender_did, project_did, data }: AminoMsgUpdateProjectDoc["value"]) => MsgUpdateProjectDoc;
    };
};
