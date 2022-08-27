import * as _383 from "../ixo/project/genesis";
import * as _384 from "../ixo/project/project";
import * as _385 from "../ixo/project/query";
import * as _386 from "../ixo/project/tx";
export declare const project: {
    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
    MessageComposer: {
        encoded: {
            createProject(value: _386.MsgCreateProject): {
                typeUrl: string;
                value: Uint8Array;
            };
            updateProjectStatus(value: _386.MsgUpdateProjectStatus): {
                typeUrl: string;
                value: Uint8Array;
            };
            createAgent(value: _386.MsgCreateAgent): {
                typeUrl: string;
                value: Uint8Array;
            };
            updateAgent(value: _386.MsgUpdateAgent): {
                typeUrl: string;
                value: Uint8Array;
            };
            createClaim(value: _386.MsgCreateClaim): {
                typeUrl: string;
                value: Uint8Array;
            };
            createEvaluation(value: _386.MsgCreateEvaluation): {
                typeUrl: string;
                value: Uint8Array;
            };
            withdrawFunds(value: _386.MsgWithdrawFunds): {
                typeUrl: string;
                value: Uint8Array;
            };
            updateProjectDoc(value: _386.MsgUpdateProjectDoc): {
                typeUrl: string;
                value: Uint8Array;
            };
        };
        withTypeUrl: {
            createProject(value: _386.MsgCreateProject): {
                typeUrl: string;
                value: _386.MsgCreateProject;
            };
            updateProjectStatus(value: _386.MsgUpdateProjectStatus): {
                typeUrl: string;
                value: _386.MsgUpdateProjectStatus;
            };
            createAgent(value: _386.MsgCreateAgent): {
                typeUrl: string;
                value: _386.MsgCreateAgent;
            };
            updateAgent(value: _386.MsgUpdateAgent): {
                typeUrl: string;
                value: _386.MsgUpdateAgent;
            };
            createClaim(value: _386.MsgCreateClaim): {
                typeUrl: string;
                value: _386.MsgCreateClaim;
            };
            createEvaluation(value: _386.MsgCreateEvaluation): {
                typeUrl: string;
                value: _386.MsgCreateEvaluation;
            };
            withdrawFunds(value: _386.MsgWithdrawFunds): {
                typeUrl: string;
                value: _386.MsgWithdrawFunds;
            };
            updateProjectDoc(value: _386.MsgUpdateProjectDoc): {
                typeUrl: string;
                value: _386.MsgUpdateProjectDoc;
            };
        };
        toJSON: {
            createProject(value: _386.MsgCreateProject): {
                typeUrl: string;
                value: unknown;
            };
            updateProjectStatus(value: _386.MsgUpdateProjectStatus): {
                typeUrl: string;
                value: unknown;
            };
            createAgent(value: _386.MsgCreateAgent): {
                typeUrl: string;
                value: unknown;
            };
            updateAgent(value: _386.MsgUpdateAgent): {
                typeUrl: string;
                value: unknown;
            };
            createClaim(value: _386.MsgCreateClaim): {
                typeUrl: string;
                value: unknown;
            };
            createEvaluation(value: _386.MsgCreateEvaluation): {
                typeUrl: string;
                value: unknown;
            };
            withdrawFunds(value: _386.MsgWithdrawFunds): {
                typeUrl: string;
                value: unknown;
            };
            updateProjectDoc(value: _386.MsgUpdateProjectDoc): {
                typeUrl: string;
                value: unknown;
            };
        };
        fromJSON: {
            createProject(value: any): {
                typeUrl: string;
                value: _386.MsgCreateProject;
            };
            updateProjectStatus(value: any): {
                typeUrl: string;
                value: _386.MsgUpdateProjectStatus;
            };
            createAgent(value: any): {
                typeUrl: string;
                value: _386.MsgCreateAgent;
            };
            updateAgent(value: any): {
                typeUrl: string;
                value: _386.MsgUpdateAgent;
            };
            createClaim(value: any): {
                typeUrl: string;
                value: _386.MsgCreateClaim;
            };
            createEvaluation(value: any): {
                typeUrl: string;
                value: _386.MsgCreateEvaluation;
            };
            withdrawFunds(value: any): {
                typeUrl: string;
                value: _386.MsgWithdrawFunds;
            };
            updateProjectDoc(value: any): {
                typeUrl: string;
                value: _386.MsgUpdateProjectDoc;
            };
        };
        fromPartial: {
            createProject(value: _386.MsgCreateProject): {
                typeUrl: string;
                value: _386.MsgCreateProject;
            };
            updateProjectStatus(value: _386.MsgUpdateProjectStatus): {
                typeUrl: string;
                value: _386.MsgUpdateProjectStatus;
            };
            createAgent(value: _386.MsgCreateAgent): {
                typeUrl: string;
                value: _386.MsgCreateAgent;
            };
            updateAgent(value: _386.MsgUpdateAgent): {
                typeUrl: string;
                value: _386.MsgUpdateAgent;
            };
            createClaim(value: _386.MsgCreateClaim): {
                typeUrl: string;
                value: _386.MsgCreateClaim;
            };
            createEvaluation(value: _386.MsgCreateEvaluation): {
                typeUrl: string;
                value: _386.MsgCreateEvaluation;
            };
            withdrawFunds(value: _386.MsgWithdrawFunds): {
                typeUrl: string;
                value: _386.MsgWithdrawFunds;
            };
            updateProjectDoc(value: _386.MsgUpdateProjectDoc): {
                typeUrl: string;
                value: _386.MsgUpdateProjectDoc;
            };
        };
    };
    AminoConverter: {
        "/project.MsgCreateProject": {
            aminoType: string;
            toAmino: ({ txHash, senderDid, projectDid, pubKey, data }: _386.MsgCreateProject) => {
                tx_hash: string;
                sender_did: string;
                project_did: string;
                pub_key: string;
                data: Uint8Array;
            };
            fromAmino: ({ tx_hash, sender_did, project_did, pub_key, data }: {
                tx_hash: string;
                sender_did: string;
                project_did: string;
                pub_key: string;
                data: Uint8Array;
            }) => _386.MsgCreateProject;
        };
        "/project.MsgUpdateProjectStatus": {
            aminoType: string;
            toAmino: ({ txHash, senderDid, projectDid, data }: _386.MsgUpdateProjectStatus) => {
                tx_hash: string;
                sender_did: string;
                project_did: string;
                data: {
                    status: string;
                    eth_funding_txn_id: string;
                };
            };
            fromAmino: ({ tx_hash, sender_did, project_did, data }: {
                tx_hash: string;
                sender_did: string;
                project_did: string;
                data: {
                    status: string;
                    eth_funding_txn_id: string;
                };
            }) => _386.MsgUpdateProjectStatus;
        };
        "/project.MsgCreateAgent": {
            aminoType: string;
            toAmino: ({ txHash, senderDid, projectDid, data }: _386.MsgCreateAgent) => {
                tx_hash: string;
                sender_did: string;
                project_did: string;
                data: {
                    agent_did: string;
                    role: string;
                };
            };
            fromAmino: ({ tx_hash, sender_did, project_did, data }: {
                tx_hash: string;
                sender_did: string;
                project_did: string;
                data: {
                    agent_did: string;
                    role: string;
                };
            }) => _386.MsgCreateAgent;
        };
        "/project.MsgUpdateAgent": {
            aminoType: string;
            toAmino: ({ txHash, senderDid, projectDid, data }: _386.MsgUpdateAgent) => {
                tx_hash: string;
                sender_did: string;
                project_did: string;
                data: {
                    did: string;
                    status: string;
                    role: string;
                };
            };
            fromAmino: ({ tx_hash, sender_did, project_did, data }: {
                tx_hash: string;
                sender_did: string;
                project_did: string;
                data: {
                    did: string;
                    status: string;
                    role: string;
                };
            }) => _386.MsgUpdateAgent;
        };
        "/project.MsgCreateClaim": {
            aminoType: string;
            toAmino: ({ txHash, senderDid, projectDid, data }: _386.MsgCreateClaim) => {
                tx_hash: string;
                sender_did: string;
                project_did: string;
                data: {
                    claim_id: string;
                    claim_template_id: string;
                };
            };
            fromAmino: ({ tx_hash, sender_did, project_did, data }: {
                tx_hash: string;
                sender_did: string;
                project_did: string;
                data: {
                    claim_id: string;
                    claim_template_id: string;
                };
            }) => _386.MsgCreateClaim;
        };
        "/project.MsgCreateEvaluation": {
            aminoType: string;
            toAmino: ({ txHash, senderDid, projectDid, data }: _386.MsgCreateEvaluation) => {
                tx_hash: string;
                sender_did: string;
                project_did: string;
                data: {
                    claim_id: string;
                    status: string;
                };
            };
            fromAmino: ({ tx_hash, sender_did, project_did, data }: {
                tx_hash: string;
                sender_did: string;
                project_did: string;
                data: {
                    claim_id: string;
                    status: string;
                };
            }) => _386.MsgCreateEvaluation;
        };
        "/project.MsgWithdrawFunds": {
            aminoType: string;
            toAmino: ({ senderDid, data }: _386.MsgWithdrawFunds) => {
                sender_did: string;
                data: {
                    project_did: string;
                    recipient_did: string;
                    amount: string;
                    is_refund: boolean;
                };
            };
            fromAmino: ({ sender_did, data }: {
                sender_did: string;
                data: {
                    project_did: string;
                    recipient_did: string;
                    amount: string;
                    is_refund: boolean;
                };
            }) => _386.MsgWithdrawFunds;
        };
        "/project.MsgUpdateProjectDoc": {
            aminoType: string;
            toAmino: ({ txHash, senderDid, projectDid, data }: _386.MsgUpdateProjectDoc) => {
                tx_hash: string;
                sender_did: string;
                project_did: string;
                data: Uint8Array;
            };
            fromAmino: ({ tx_hash, sender_did, project_did, data }: {
                tx_hash: string;
                sender_did: string;
                project_did: string;
                data: Uint8Array;
            }) => _386.MsgUpdateProjectDoc;
        };
    };
    MsgCreateProject: {
        encode(message: _386.MsgCreateProject, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _386.MsgCreateProject;
        fromJSON(object: any): _386.MsgCreateProject;
        toJSON(message: _386.MsgCreateProject): unknown;
        fromPartial(object: {
            txHash?: string;
            senderDid?: string;
            projectDid?: string;
            pubKey?: string;
            data?: Uint8Array;
        }): _386.MsgCreateProject;
    };
    MsgCreateProjectResponse: {
        encode(_: _386.MsgCreateProjectResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _386.MsgCreateProjectResponse;
        fromJSON(_: any): _386.MsgCreateProjectResponse;
        toJSON(_: _386.MsgCreateProjectResponse): unknown;
        fromPartial(_: {}): _386.MsgCreateProjectResponse;
    };
    MsgUpdateProjectStatus: {
        encode(message: _386.MsgUpdateProjectStatus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _386.MsgUpdateProjectStatus;
        fromJSON(object: any): _386.MsgUpdateProjectStatus;
        toJSON(message: _386.MsgUpdateProjectStatus): unknown;
        fromPartial(object: {
            txHash?: string;
            senderDid?: string;
            projectDid?: string;
            data?: {
                status?: string;
                ethFundingTxnId?: string;
            };
        }): _386.MsgUpdateProjectStatus;
    };
    MsgUpdateProjectStatusResponse: {
        encode(_: _386.MsgUpdateProjectStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _386.MsgUpdateProjectStatusResponse;
        fromJSON(_: any): _386.MsgUpdateProjectStatusResponse;
        toJSON(_: _386.MsgUpdateProjectStatusResponse): unknown;
        fromPartial(_: {}): _386.MsgUpdateProjectStatusResponse;
    };
    MsgCreateAgent: {
        encode(message: _386.MsgCreateAgent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _386.MsgCreateAgent;
        fromJSON(object: any): _386.MsgCreateAgent;
        toJSON(message: _386.MsgCreateAgent): unknown;
        fromPartial(object: {
            txHash?: string;
            senderDid?: string;
            projectDid?: string;
            data?: {
                agentDid?: string;
                role?: string;
            };
        }): _386.MsgCreateAgent;
    };
    MsgCreateAgentResponse: {
        encode(_: _386.MsgCreateAgentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _386.MsgCreateAgentResponse;
        fromJSON(_: any): _386.MsgCreateAgentResponse;
        toJSON(_: _386.MsgCreateAgentResponse): unknown;
        fromPartial(_: {}): _386.MsgCreateAgentResponse;
    };
    MsgUpdateAgent: {
        encode(message: _386.MsgUpdateAgent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _386.MsgUpdateAgent;
        fromJSON(object: any): _386.MsgUpdateAgent;
        toJSON(message: _386.MsgUpdateAgent): unknown;
        fromPartial(object: {
            txHash?: string;
            senderDid?: string;
            projectDid?: string;
            data?: {
                did?: string;
                status?: string;
                role?: string;
            };
        }): _386.MsgUpdateAgent;
    };
    MsgUpdateAgentResponse: {
        encode(_: _386.MsgUpdateAgentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _386.MsgUpdateAgentResponse;
        fromJSON(_: any): _386.MsgUpdateAgentResponse;
        toJSON(_: _386.MsgUpdateAgentResponse): unknown;
        fromPartial(_: {}): _386.MsgUpdateAgentResponse;
    };
    MsgCreateClaim: {
        encode(message: _386.MsgCreateClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _386.MsgCreateClaim;
        fromJSON(object: any): _386.MsgCreateClaim;
        toJSON(message: _386.MsgCreateClaim): unknown;
        fromPartial(object: {
            txHash?: string;
            senderDid?: string;
            projectDid?: string;
            data?: {
                claimId?: string;
                claimTemplateId?: string;
            };
        }): _386.MsgCreateClaim;
    };
    MsgCreateClaimResponse: {
        encode(_: _386.MsgCreateClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _386.MsgCreateClaimResponse;
        fromJSON(_: any): _386.MsgCreateClaimResponse;
        toJSON(_: _386.MsgCreateClaimResponse): unknown;
        fromPartial(_: {}): _386.MsgCreateClaimResponse;
    };
    MsgCreateEvaluation: {
        encode(message: _386.MsgCreateEvaluation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _386.MsgCreateEvaluation;
        fromJSON(object: any): _386.MsgCreateEvaluation;
        toJSON(message: _386.MsgCreateEvaluation): unknown;
        fromPartial(object: {
            txHash?: string;
            senderDid?: string;
            projectDid?: string;
            data?: {
                claimId?: string;
                status?: string;
            };
        }): _386.MsgCreateEvaluation;
    };
    MsgCreateEvaluationResponse: {
        encode(_: _386.MsgCreateEvaluationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _386.MsgCreateEvaluationResponse;
        fromJSON(_: any): _386.MsgCreateEvaluationResponse;
        toJSON(_: _386.MsgCreateEvaluationResponse): unknown;
        fromPartial(_: {}): _386.MsgCreateEvaluationResponse;
    };
    MsgWithdrawFunds: {
        encode(message: _386.MsgWithdrawFunds, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _386.MsgWithdrawFunds;
        fromJSON(object: any): _386.MsgWithdrawFunds;
        toJSON(message: _386.MsgWithdrawFunds): unknown;
        fromPartial(object: {
            senderDid?: string;
            data?: {
                projectDid?: string;
                recipientDid?: string;
                amount?: string;
                isRefund?: boolean;
            };
        }): _386.MsgWithdrawFunds;
    };
    MsgWithdrawFundsResponse: {
        encode(_: _386.MsgWithdrawFundsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _386.MsgWithdrawFundsResponse;
        fromJSON(_: any): _386.MsgWithdrawFundsResponse;
        toJSON(_: _386.MsgWithdrawFundsResponse): unknown;
        fromPartial(_: {}): _386.MsgWithdrawFundsResponse;
    };
    MsgUpdateProjectDoc: {
        encode(message: _386.MsgUpdateProjectDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _386.MsgUpdateProjectDoc;
        fromJSON(object: any): _386.MsgUpdateProjectDoc;
        toJSON(message: _386.MsgUpdateProjectDoc): unknown;
        fromPartial(object: {
            txHash?: string;
            senderDid?: string;
            projectDid?: string;
            data?: Uint8Array;
        }): _386.MsgUpdateProjectDoc;
    };
    MsgUpdateProjectDocResponse: {
        encode(_: _386.MsgUpdateProjectDocResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _386.MsgUpdateProjectDocResponse;
        fromJSON(_: any): _386.MsgUpdateProjectDocResponse;
        toJSON(_: _386.MsgUpdateProjectDocResponse): unknown;
        fromPartial(_: {}): _386.MsgUpdateProjectDocResponse;
    };
    QueryProjectDocRequest: {
        encode(message: _385.QueryProjectDocRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _385.QueryProjectDocRequest;
        fromJSON(object: any): _385.QueryProjectDocRequest;
        toJSON(message: _385.QueryProjectDocRequest): unknown;
        fromPartial(object: {
            projectDid?: string;
        }): _385.QueryProjectDocRequest;
    };
    QueryProjectDocResponse: {
        encode(message: _385.QueryProjectDocResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _385.QueryProjectDocResponse;
        fromJSON(object: any): _385.QueryProjectDocResponse;
        toJSON(message: _385.QueryProjectDocResponse): unknown;
        fromPartial(object: {
            projectDoc?: {
                txHash?: string;
                projectDid?: string;
                senderDid?: string;
                pubKey?: string;
                status?: string;
                data?: Uint8Array;
            };
        }): _385.QueryProjectDocResponse;
    };
    QueryProjectAccountsRequest: {
        encode(message: _385.QueryProjectAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _385.QueryProjectAccountsRequest;
        fromJSON(object: any): _385.QueryProjectAccountsRequest;
        toJSON(message: _385.QueryProjectAccountsRequest): unknown;
        fromPartial(object: {
            projectDid?: string;
        }): _385.QueryProjectAccountsRequest;
    };
    QueryProjectAccountsResponse: {
        encode(message: _385.QueryProjectAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _385.QueryProjectAccountsResponse;
        fromJSON(object: any): _385.QueryProjectAccountsResponse;
        toJSON(message: _385.QueryProjectAccountsResponse): unknown;
        fromPartial(object: {
            accountMap?: {
                map?: {
                    [x: string]: string;
                };
            };
        }): _385.QueryProjectAccountsResponse;
    };
    QueryProjectTxRequest: {
        encode(message: _385.QueryProjectTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _385.QueryProjectTxRequest;
        fromJSON(object: any): _385.QueryProjectTxRequest;
        toJSON(message: _385.QueryProjectTxRequest): unknown;
        fromPartial(object: {
            projectDid?: string;
        }): _385.QueryProjectTxRequest;
    };
    QueryProjectTxResponse: {
        encode(message: _385.QueryProjectTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _385.QueryProjectTxResponse;
        fromJSON(object: any): _385.QueryProjectTxResponse;
        toJSON(message: _385.QueryProjectTxResponse): unknown;
        fromPartial(object: {
            txs?: {
                docsList?: {
                    projectDid?: string;
                    recipientDid?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }[];
            };
        }): _385.QueryProjectTxResponse;
    };
    QueryParamsRequest: {
        encode(_: _385.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _385.QueryParamsRequest;
        fromJSON(_: any): _385.QueryParamsRequest;
        toJSON(_: _385.QueryParamsRequest): unknown;
        fromPartial(_: {}): _385.QueryParamsRequest;
    };
    QueryParamsResponse: {
        encode(message: _385.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _385.QueryParamsResponse;
        fromJSON(object: any): _385.QueryParamsResponse;
        toJSON(message: _385.QueryParamsResponse): unknown;
        fromPartial(object: {
            params?: {
                ixoDid?: string;
                projectMinimumInitialFunding?: {
                    denom?: string;
                    amount?: string;
                }[];
                oracleFeePercentage?: string;
                nodeFeePercentage?: string;
            };
        }): _385.QueryParamsResponse;
    };
    UpdateProjectStatusDoc: {
        encode(message: _384.UpdateProjectStatusDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _384.UpdateProjectStatusDoc;
        fromJSON(object: any): _384.UpdateProjectStatusDoc;
        toJSON(message: _384.UpdateProjectStatusDoc): unknown;
        fromPartial(object: {
            status?: string;
            ethFundingTxnId?: string;
        }): _384.UpdateProjectStatusDoc;
    };
    CreateAgentDoc: {
        encode(message: _384.CreateAgentDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _384.CreateAgentDoc;
        fromJSON(object: any): _384.CreateAgentDoc;
        toJSON(message: _384.CreateAgentDoc): unknown;
        fromPartial(object: {
            agentDid?: string;
            role?: string;
        }): _384.CreateAgentDoc;
    };
    UpdateAgentDoc: {
        encode(message: _384.UpdateAgentDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _384.UpdateAgentDoc;
        fromJSON(object: any): _384.UpdateAgentDoc;
        toJSON(message: _384.UpdateAgentDoc): unknown;
        fromPartial(object: {
            did?: string;
            status?: string;
            role?: string;
        }): _384.UpdateAgentDoc;
    };
    CreateClaimDoc: {
        encode(message: _384.CreateClaimDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _384.CreateClaimDoc;
        fromJSON(object: any): _384.CreateClaimDoc;
        toJSON(message: _384.CreateClaimDoc): unknown;
        fromPartial(object: {
            claimId?: string;
            claimTemplateId?: string;
        }): _384.CreateClaimDoc;
    };
    CreateEvaluationDoc: {
        encode(message: _384.CreateEvaluationDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _384.CreateEvaluationDoc;
        fromJSON(object: any): _384.CreateEvaluationDoc;
        toJSON(message: _384.CreateEvaluationDoc): unknown;
        fromPartial(object: {
            claimId?: string;
            status?: string;
        }): _384.CreateEvaluationDoc;
    };
    WithdrawFundsDoc: {
        encode(message: _384.WithdrawFundsDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _384.WithdrawFundsDoc;
        fromJSON(object: any): _384.WithdrawFundsDoc;
        toJSON(message: _384.WithdrawFundsDoc): unknown;
        fromPartial(object: {
            projectDid?: string;
            recipientDid?: string;
            amount?: string;
            isRefund?: boolean;
        }): _384.WithdrawFundsDoc;
    };
    ProjectDoc: {
        encode(message: _384.ProjectDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _384.ProjectDoc;
        fromJSON(object: any): _384.ProjectDoc;
        toJSON(message: _384.ProjectDoc): unknown;
        fromPartial(object: {
            txHash?: string;
            projectDid?: string;
            senderDid?: string;
            pubKey?: string;
            status?: string;
            data?: Uint8Array;
        }): _384.ProjectDoc;
    };
    WithdrawalInfoDoc: {
        encode(message: _384.WithdrawalInfoDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _384.WithdrawalInfoDoc;
        fromJSON(object: any): _384.WithdrawalInfoDoc;
        toJSON(message: _384.WithdrawalInfoDoc): unknown;
        fromPartial(object: {
            projectDid?: string;
            recipientDid?: string;
            amount?: {
                denom?: string;
                amount?: string;
            };
        }): _384.WithdrawalInfoDoc;
    };
    Params: {
        encode(message: _384.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _384.Params;
        fromJSON(object: any): _384.Params;
        toJSON(message: _384.Params): unknown;
        fromPartial(object: {
            ixoDid?: string;
            projectMinimumInitialFunding?: {
                denom?: string;
                amount?: string;
            }[];
            oracleFeePercentage?: string;
            nodeFeePercentage?: string;
        }): _384.Params;
    };
    Claim: {
        encode(message: _384.Claim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _384.Claim;
        fromJSON(object: any): _384.Claim;
        toJSON(message: _384.Claim): unknown;
        fromPartial(object: {
            id?: string;
            templateId?: string;
            claimerDid?: string;
            status?: string;
        }): _384.Claim;
    };
    GenesisAccountMap_MapEntry: {
        encode(message: _384.GenesisAccountMap_MapEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _384.GenesisAccountMap_MapEntry;
        fromJSON(object: any): _384.GenesisAccountMap_MapEntry;
        toJSON(message: _384.GenesisAccountMap_MapEntry): unknown;
        fromPartial(object: {
            key?: string;
            value?: string;
        }): _384.GenesisAccountMap_MapEntry;
    };
    GenesisAccountMap: {
        encode(message: _384.GenesisAccountMap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _384.GenesisAccountMap;
        fromJSON(object: any): _384.GenesisAccountMap;
        toJSON(message: _384.GenesisAccountMap): unknown;
        fromPartial(object: {
            map?: {
                [x: string]: string;
            };
        }): _384.GenesisAccountMap;
    };
    AccountMap_MapEntry: {
        encode(message: _384.AccountMap_MapEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _384.AccountMap_MapEntry;
        fromJSON(object: any): _384.AccountMap_MapEntry;
        toJSON(message: _384.AccountMap_MapEntry): unknown;
        fromPartial(object: {
            key?: string;
            value?: string;
        }): _384.AccountMap_MapEntry;
    };
    AccountMap: {
        encode(message: _384.AccountMap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _384.AccountMap;
        fromJSON(object: any): _384.AccountMap;
        toJSON(message: _384.AccountMap): unknown;
        fromPartial(object: {
            map?: {
                [x: string]: string;
            };
        }): _384.AccountMap;
    };
    WithdrawalInfoDocs: {
        encode(message: _384.WithdrawalInfoDocs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _384.WithdrawalInfoDocs;
        fromJSON(object: any): _384.WithdrawalInfoDocs;
        toJSON(message: _384.WithdrawalInfoDocs): unknown;
        fromPartial(object: {
            docsList?: {
                projectDid?: string;
                recipientDid?: string;
                amount?: {
                    denom?: string;
                    amount?: string;
                };
            }[];
        }): _384.WithdrawalInfoDocs;
    };
    Claims: {
        encode(message: _384.Claims, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _384.Claims;
        fromJSON(object: any): _384.Claims;
        toJSON(message: _384.Claims): unknown;
        fromPartial(object: {
            claimsList?: {
                id?: string;
                templateId?: string;
                claimerDid?: string;
                status?: string;
            }[];
        }): _384.Claims;
    };
    GenesisState: {
        encode(message: _383.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _383.GenesisState;
        fromJSON(object: any): _383.GenesisState;
        toJSON(message: _383.GenesisState): unknown;
        fromPartial(object: {
            projectDocs?: {
                txHash?: string;
                projectDid?: string;
                senderDid?: string;
                pubKey?: string;
                status?: string;
                data?: Uint8Array;
            }[];
            accountMaps?: {
                map?: {
                    [x: string]: string;
                };
            }[];
            withdrawalsInfos?: {
                docsList?: {
                    projectDid?: string;
                    recipientDid?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }[];
            }[];
            claims?: {
                claimsList?: {
                    id?: string;
                    templateId?: string;
                    claimerDid?: string;
                    status?: string;
                }[];
            }[];
            params?: {
                ixoDid?: string;
                projectMinimumInitialFunding?: {
                    denom?: string;
                    amount?: string;
                }[];
                oracleFeePercentage?: string;
                nodeFeePercentage?: string;
            };
        }): _383.GenesisState;
    };
};
