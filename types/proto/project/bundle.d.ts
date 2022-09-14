import * as _451 from "../ixo/project/genesis";
import * as _452 from "../ixo/project/project";
import * as _453 from "../ixo/project/query";
import * as _454 from "../ixo/project/tx";
export declare const project: {
    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
    MessageComposer: {
        encoded: {
            createProject(value: _454.MsgCreateProject): {
                typeUrl: string;
                value: Uint8Array;
            };
            updateProjectStatus(value: _454.MsgUpdateProjectStatus): {
                typeUrl: string;
                value: Uint8Array;
            };
            createAgent(value: _454.MsgCreateAgent): {
                typeUrl: string;
                value: Uint8Array;
            };
            updateAgent(value: _454.MsgUpdateAgent): {
                typeUrl: string;
                value: Uint8Array;
            };
            createClaim(value: _454.MsgCreateClaim): {
                typeUrl: string;
                value: Uint8Array;
            };
            createEvaluation(value: _454.MsgCreateEvaluation): {
                typeUrl: string;
                value: Uint8Array;
            };
            withdrawFunds(value: _454.MsgWithdrawFunds): {
                typeUrl: string;
                value: Uint8Array;
            };
            updateProjectDoc(value: _454.MsgUpdateProjectDoc): {
                typeUrl: string;
                value: Uint8Array;
            };
        };
        withTypeUrl: {
            createProject(value: _454.MsgCreateProject): {
                typeUrl: string;
                value: _454.MsgCreateProject;
            };
            updateProjectStatus(value: _454.MsgUpdateProjectStatus): {
                typeUrl: string;
                value: _454.MsgUpdateProjectStatus;
            };
            createAgent(value: _454.MsgCreateAgent): {
                typeUrl: string;
                value: _454.MsgCreateAgent;
            };
            updateAgent(value: _454.MsgUpdateAgent): {
                typeUrl: string;
                value: _454.MsgUpdateAgent;
            };
            createClaim(value: _454.MsgCreateClaim): {
                typeUrl: string;
                value: _454.MsgCreateClaim;
            };
            createEvaluation(value: _454.MsgCreateEvaluation): {
                typeUrl: string;
                value: _454.MsgCreateEvaluation;
            };
            withdrawFunds(value: _454.MsgWithdrawFunds): {
                typeUrl: string;
                value: _454.MsgWithdrawFunds;
            };
            updateProjectDoc(value: _454.MsgUpdateProjectDoc): {
                typeUrl: string;
                value: _454.MsgUpdateProjectDoc;
            };
        };
        toJSON: {
            createProject(value: _454.MsgCreateProject): {
                typeUrl: string;
                value: unknown;
            };
            updateProjectStatus(value: _454.MsgUpdateProjectStatus): {
                typeUrl: string;
                value: unknown;
            };
            createAgent(value: _454.MsgCreateAgent): {
                typeUrl: string;
                value: unknown;
            };
            updateAgent(value: _454.MsgUpdateAgent): {
                typeUrl: string;
                value: unknown;
            };
            createClaim(value: _454.MsgCreateClaim): {
                typeUrl: string;
                value: unknown;
            };
            createEvaluation(value: _454.MsgCreateEvaluation): {
                typeUrl: string;
                value: unknown;
            };
            withdrawFunds(value: _454.MsgWithdrawFunds): {
                typeUrl: string;
                value: unknown;
            };
            updateProjectDoc(value: _454.MsgUpdateProjectDoc): {
                typeUrl: string;
                value: unknown;
            };
        };
        fromJSON: {
            createProject(value: any): {
                typeUrl: string;
                value: _454.MsgCreateProject;
            };
            updateProjectStatus(value: any): {
                typeUrl: string;
                value: _454.MsgUpdateProjectStatus;
            };
            createAgent(value: any): {
                typeUrl: string;
                value: _454.MsgCreateAgent;
            };
            updateAgent(value: any): {
                typeUrl: string;
                value: _454.MsgUpdateAgent;
            };
            createClaim(value: any): {
                typeUrl: string;
                value: _454.MsgCreateClaim;
            };
            createEvaluation(value: any): {
                typeUrl: string;
                value: _454.MsgCreateEvaluation;
            };
            withdrawFunds(value: any): {
                typeUrl: string;
                value: _454.MsgWithdrawFunds;
            };
            updateProjectDoc(value: any): {
                typeUrl: string;
                value: _454.MsgUpdateProjectDoc;
            };
        };
        fromPartial: {
            createProject(value: _454.MsgCreateProject): {
                typeUrl: string;
                value: _454.MsgCreateProject;
            };
            updateProjectStatus(value: _454.MsgUpdateProjectStatus): {
                typeUrl: string;
                value: _454.MsgUpdateProjectStatus;
            };
            createAgent(value: _454.MsgCreateAgent): {
                typeUrl: string;
                value: _454.MsgCreateAgent;
            };
            updateAgent(value: _454.MsgUpdateAgent): {
                typeUrl: string;
                value: _454.MsgUpdateAgent;
            };
            createClaim(value: _454.MsgCreateClaim): {
                typeUrl: string;
                value: _454.MsgCreateClaim;
            };
            createEvaluation(value: _454.MsgCreateEvaluation): {
                typeUrl: string;
                value: _454.MsgCreateEvaluation;
            };
            withdrawFunds(value: _454.MsgWithdrawFunds): {
                typeUrl: string;
                value: _454.MsgWithdrawFunds;
            };
            updateProjectDoc(value: _454.MsgUpdateProjectDoc): {
                typeUrl: string;
                value: _454.MsgUpdateProjectDoc;
            };
        };
    };
    AminoConverter: {
        "/project.MsgCreateProject": {
            aminoType: string;
            toAmino: ({ txHash, senderDid, projectDid, pubKey, data }: _454.MsgCreateProject) => {
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
            }) => _454.MsgCreateProject;
        };
        "/project.MsgUpdateProjectStatus": {
            aminoType: string;
            toAmino: ({ txHash, senderDid, projectDid, data }: _454.MsgUpdateProjectStatus) => {
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
            }) => _454.MsgUpdateProjectStatus;
        };
        "/project.MsgCreateAgent": {
            aminoType: string;
            toAmino: ({ txHash, senderDid, projectDid, data }: _454.MsgCreateAgent) => {
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
            }) => _454.MsgCreateAgent;
        };
        "/project.MsgUpdateAgent": {
            aminoType: string;
            toAmino: ({ txHash, senderDid, projectDid, data }: _454.MsgUpdateAgent) => {
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
            }) => _454.MsgUpdateAgent;
        };
        "/project.MsgCreateClaim": {
            aminoType: string;
            toAmino: ({ txHash, senderDid, projectDid, data }: _454.MsgCreateClaim) => {
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
            }) => _454.MsgCreateClaim;
        };
        "/project.MsgCreateEvaluation": {
            aminoType: string;
            toAmino: ({ txHash, senderDid, projectDid, data }: _454.MsgCreateEvaluation) => {
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
            }) => _454.MsgCreateEvaluation;
        };
        "/project.MsgWithdrawFunds": {
            aminoType: string;
            toAmino: ({ senderDid, data }: _454.MsgWithdrawFunds) => {
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
            }) => _454.MsgWithdrawFunds;
        };
        "/project.MsgUpdateProjectDoc": {
            aminoType: string;
            toAmino: ({ txHash, senderDid, projectDid, data }: _454.MsgUpdateProjectDoc) => {
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
            }) => _454.MsgUpdateProjectDoc;
        };
    };
    MsgCreateProject: {
        encode(message: _454.MsgCreateProject, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _454.MsgCreateProject;
        fromJSON(object: any): _454.MsgCreateProject;
        toJSON(message: _454.MsgCreateProject): unknown;
        fromPartial(object: {
            txHash?: string;
            senderDid?: string;
            projectDid?: string;
            pubKey?: string;
            data?: Uint8Array;
        }): _454.MsgCreateProject;
    };
    MsgCreateProjectResponse: {
        encode(_: _454.MsgCreateProjectResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _454.MsgCreateProjectResponse;
        fromJSON(_: any): _454.MsgCreateProjectResponse;
        toJSON(_: _454.MsgCreateProjectResponse): unknown;
        fromPartial(_: {}): _454.MsgCreateProjectResponse;
    };
    MsgUpdateProjectStatus: {
        encode(message: _454.MsgUpdateProjectStatus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _454.MsgUpdateProjectStatus;
        fromJSON(object: any): _454.MsgUpdateProjectStatus;
        toJSON(message: _454.MsgUpdateProjectStatus): unknown;
        fromPartial(object: {
            txHash?: string;
            senderDid?: string;
            projectDid?: string;
            data?: {
                status?: string;
                ethFundingTxnId?: string;
            };
        }): _454.MsgUpdateProjectStatus;
    };
    MsgUpdateProjectStatusResponse: {
        encode(_: _454.MsgUpdateProjectStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _454.MsgUpdateProjectStatusResponse;
        fromJSON(_: any): _454.MsgUpdateProjectStatusResponse;
        toJSON(_: _454.MsgUpdateProjectStatusResponse): unknown;
        fromPartial(_: {}): _454.MsgUpdateProjectStatusResponse;
    };
    MsgCreateAgent: {
        encode(message: _454.MsgCreateAgent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _454.MsgCreateAgent;
        fromJSON(object: any): _454.MsgCreateAgent;
        toJSON(message: _454.MsgCreateAgent): unknown;
        fromPartial(object: {
            txHash?: string;
            senderDid?: string;
            projectDid?: string;
            data?: {
                agentDid?: string;
                role?: string;
            };
        }): _454.MsgCreateAgent;
    };
    MsgCreateAgentResponse: {
        encode(_: _454.MsgCreateAgentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _454.MsgCreateAgentResponse;
        fromJSON(_: any): _454.MsgCreateAgentResponse;
        toJSON(_: _454.MsgCreateAgentResponse): unknown;
        fromPartial(_: {}): _454.MsgCreateAgentResponse;
    };
    MsgUpdateAgent: {
        encode(message: _454.MsgUpdateAgent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _454.MsgUpdateAgent;
        fromJSON(object: any): _454.MsgUpdateAgent;
        toJSON(message: _454.MsgUpdateAgent): unknown;
        fromPartial(object: {
            txHash?: string;
            senderDid?: string;
            projectDid?: string;
            data?: {
                did?: string;
                status?: string;
                role?: string;
            };
        }): _454.MsgUpdateAgent;
    };
    MsgUpdateAgentResponse: {
        encode(_: _454.MsgUpdateAgentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _454.MsgUpdateAgentResponse;
        fromJSON(_: any): _454.MsgUpdateAgentResponse;
        toJSON(_: _454.MsgUpdateAgentResponse): unknown;
        fromPartial(_: {}): _454.MsgUpdateAgentResponse;
    };
    MsgCreateClaim: {
        encode(message: _454.MsgCreateClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _454.MsgCreateClaim;
        fromJSON(object: any): _454.MsgCreateClaim;
        toJSON(message: _454.MsgCreateClaim): unknown;
        fromPartial(object: {
            txHash?: string;
            senderDid?: string;
            projectDid?: string;
            data?: {
                claimId?: string;
                claimTemplateId?: string;
            };
        }): _454.MsgCreateClaim;
    };
    MsgCreateClaimResponse: {
        encode(_: _454.MsgCreateClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _454.MsgCreateClaimResponse;
        fromJSON(_: any): _454.MsgCreateClaimResponse;
        toJSON(_: _454.MsgCreateClaimResponse): unknown;
        fromPartial(_: {}): _454.MsgCreateClaimResponse;
    };
    MsgCreateEvaluation: {
        encode(message: _454.MsgCreateEvaluation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _454.MsgCreateEvaluation;
        fromJSON(object: any): _454.MsgCreateEvaluation;
        toJSON(message: _454.MsgCreateEvaluation): unknown;
        fromPartial(object: {
            txHash?: string;
            senderDid?: string;
            projectDid?: string;
            data?: {
                claimId?: string;
                status?: string;
            };
        }): _454.MsgCreateEvaluation;
    };
    MsgCreateEvaluationResponse: {
        encode(_: _454.MsgCreateEvaluationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _454.MsgCreateEvaluationResponse;
        fromJSON(_: any): _454.MsgCreateEvaluationResponse;
        toJSON(_: _454.MsgCreateEvaluationResponse): unknown;
        fromPartial(_: {}): _454.MsgCreateEvaluationResponse;
    };
    MsgWithdrawFunds: {
        encode(message: _454.MsgWithdrawFunds, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _454.MsgWithdrawFunds;
        fromJSON(object: any): _454.MsgWithdrawFunds;
        toJSON(message: _454.MsgWithdrawFunds): unknown;
        fromPartial(object: {
            senderDid?: string;
            data?: {
                projectDid?: string;
                recipientDid?: string;
                amount?: string;
                isRefund?: boolean;
            };
        }): _454.MsgWithdrawFunds;
    };
    MsgWithdrawFundsResponse: {
        encode(_: _454.MsgWithdrawFundsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _454.MsgWithdrawFundsResponse;
        fromJSON(_: any): _454.MsgWithdrawFundsResponse;
        toJSON(_: _454.MsgWithdrawFundsResponse): unknown;
        fromPartial(_: {}): _454.MsgWithdrawFundsResponse;
    };
    MsgUpdateProjectDoc: {
        encode(message: _454.MsgUpdateProjectDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _454.MsgUpdateProjectDoc;
        fromJSON(object: any): _454.MsgUpdateProjectDoc;
        toJSON(message: _454.MsgUpdateProjectDoc): unknown;
        fromPartial(object: {
            txHash?: string;
            senderDid?: string;
            projectDid?: string;
            data?: Uint8Array;
        }): _454.MsgUpdateProjectDoc;
    };
    MsgUpdateProjectDocResponse: {
        encode(_: _454.MsgUpdateProjectDocResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _454.MsgUpdateProjectDocResponse;
        fromJSON(_: any): _454.MsgUpdateProjectDocResponse;
        toJSON(_: _454.MsgUpdateProjectDocResponse): unknown;
        fromPartial(_: {}): _454.MsgUpdateProjectDocResponse;
    };
    QueryProjectDocRequest: {
        encode(message: _453.QueryProjectDocRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _453.QueryProjectDocRequest;
        fromJSON(object: any): _453.QueryProjectDocRequest;
        toJSON(message: _453.QueryProjectDocRequest): unknown;
        fromPartial(object: {
            projectDid?: string;
        }): _453.QueryProjectDocRequest;
    };
    QueryProjectDocResponse: {
        encode(message: _453.QueryProjectDocResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _453.QueryProjectDocResponse;
        fromJSON(object: any): _453.QueryProjectDocResponse;
        toJSON(message: _453.QueryProjectDocResponse): unknown;
        fromPartial(object: {
            projectDoc?: {
                txHash?: string;
                projectDid?: string;
                senderDid?: string;
                pubKey?: string;
                status?: string;
                data?: Uint8Array;
            };
        }): _453.QueryProjectDocResponse;
    };
    QueryProjectAccountsRequest: {
        encode(message: _453.QueryProjectAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _453.QueryProjectAccountsRequest;
        fromJSON(object: any): _453.QueryProjectAccountsRequest;
        toJSON(message: _453.QueryProjectAccountsRequest): unknown;
        fromPartial(object: {
            projectDid?: string;
        }): _453.QueryProjectAccountsRequest;
    };
    QueryProjectAccountsResponse: {
        encode(message: _453.QueryProjectAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _453.QueryProjectAccountsResponse;
        fromJSON(object: any): _453.QueryProjectAccountsResponse;
        toJSON(message: _453.QueryProjectAccountsResponse): unknown;
        fromPartial(object: {
            accountMap?: {
                map?: {
                    [x: string]: string;
                };
            };
        }): _453.QueryProjectAccountsResponse;
    };
    QueryProjectTxRequest: {
        encode(message: _453.QueryProjectTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _453.QueryProjectTxRequest;
        fromJSON(object: any): _453.QueryProjectTxRequest;
        toJSON(message: _453.QueryProjectTxRequest): unknown;
        fromPartial(object: {
            projectDid?: string;
        }): _453.QueryProjectTxRequest;
    };
    QueryProjectTxResponse: {
        encode(message: _453.QueryProjectTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _453.QueryProjectTxResponse;
        fromJSON(object: any): _453.QueryProjectTxResponse;
        toJSON(message: _453.QueryProjectTxResponse): unknown;
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
        }): _453.QueryProjectTxResponse;
    };
    QueryParamsRequest: {
        encode(_: _453.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _453.QueryParamsRequest;
        fromJSON(_: any): _453.QueryParamsRequest;
        toJSON(_: _453.QueryParamsRequest): unknown;
        fromPartial(_: {}): _453.QueryParamsRequest;
    };
    QueryParamsResponse: {
        encode(message: _453.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _453.QueryParamsResponse;
        fromJSON(object: any): _453.QueryParamsResponse;
        toJSON(message: _453.QueryParamsResponse): unknown;
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
        }): _453.QueryParamsResponse;
    };
    UpdateProjectStatusDoc: {
        encode(message: _452.UpdateProjectStatusDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _452.UpdateProjectStatusDoc;
        fromJSON(object: any): _452.UpdateProjectStatusDoc;
        toJSON(message: _452.UpdateProjectStatusDoc): unknown;
        fromPartial(object: {
            status?: string;
            ethFundingTxnId?: string;
        }): _452.UpdateProjectStatusDoc;
    };
    CreateAgentDoc: {
        encode(message: _452.CreateAgentDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _452.CreateAgentDoc;
        fromJSON(object: any): _452.CreateAgentDoc;
        toJSON(message: _452.CreateAgentDoc): unknown;
        fromPartial(object: {
            agentDid?: string;
            role?: string;
        }): _452.CreateAgentDoc;
    };
    UpdateAgentDoc: {
        encode(message: _452.UpdateAgentDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _452.UpdateAgentDoc;
        fromJSON(object: any): _452.UpdateAgentDoc;
        toJSON(message: _452.UpdateAgentDoc): unknown;
        fromPartial(object: {
            did?: string;
            status?: string;
            role?: string;
        }): _452.UpdateAgentDoc;
    };
    CreateClaimDoc: {
        encode(message: _452.CreateClaimDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _452.CreateClaimDoc;
        fromJSON(object: any): _452.CreateClaimDoc;
        toJSON(message: _452.CreateClaimDoc): unknown;
        fromPartial(object: {
            claimId?: string;
            claimTemplateId?: string;
        }): _452.CreateClaimDoc;
    };
    CreateEvaluationDoc: {
        encode(message: _452.CreateEvaluationDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _452.CreateEvaluationDoc;
        fromJSON(object: any): _452.CreateEvaluationDoc;
        toJSON(message: _452.CreateEvaluationDoc): unknown;
        fromPartial(object: {
            claimId?: string;
            status?: string;
        }): _452.CreateEvaluationDoc;
    };
    WithdrawFundsDoc: {
        encode(message: _452.WithdrawFundsDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _452.WithdrawFundsDoc;
        fromJSON(object: any): _452.WithdrawFundsDoc;
        toJSON(message: _452.WithdrawFundsDoc): unknown;
        fromPartial(object: {
            projectDid?: string;
            recipientDid?: string;
            amount?: string;
            isRefund?: boolean;
        }): _452.WithdrawFundsDoc;
    };
    ProjectDoc: {
        encode(message: _452.ProjectDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _452.ProjectDoc;
        fromJSON(object: any): _452.ProjectDoc;
        toJSON(message: _452.ProjectDoc): unknown;
        fromPartial(object: {
            txHash?: string;
            projectDid?: string;
            senderDid?: string;
            pubKey?: string;
            status?: string;
            data?: Uint8Array;
        }): _452.ProjectDoc;
    };
    WithdrawalInfoDoc: {
        encode(message: _452.WithdrawalInfoDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _452.WithdrawalInfoDoc;
        fromJSON(object: any): _452.WithdrawalInfoDoc;
        toJSON(message: _452.WithdrawalInfoDoc): unknown;
        fromPartial(object: {
            projectDid?: string;
            recipientDid?: string;
            amount?: {
                denom?: string;
                amount?: string;
            };
        }): _452.WithdrawalInfoDoc;
    };
    Params: {
        encode(message: _452.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _452.Params;
        fromJSON(object: any): _452.Params;
        toJSON(message: _452.Params): unknown;
        fromPartial(object: {
            ixoDid?: string;
            projectMinimumInitialFunding?: {
                denom?: string;
                amount?: string;
            }[];
            oracleFeePercentage?: string;
            nodeFeePercentage?: string;
        }): _452.Params;
    };
    Claim: {
        encode(message: _452.Claim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _452.Claim;
        fromJSON(object: any): _452.Claim;
        toJSON(message: _452.Claim): unknown;
        fromPartial(object: {
            id?: string;
            templateId?: string;
            claimerDid?: string;
            status?: string;
        }): _452.Claim;
    };
    GenesisAccountMap_MapEntry: {
        encode(message: _452.GenesisAccountMap_MapEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _452.GenesisAccountMap_MapEntry;
        fromJSON(object: any): _452.GenesisAccountMap_MapEntry;
        toJSON(message: _452.GenesisAccountMap_MapEntry): unknown;
        fromPartial(object: {
            key?: string;
            value?: string;
        }): _452.GenesisAccountMap_MapEntry;
    };
    GenesisAccountMap: {
        encode(message: _452.GenesisAccountMap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _452.GenesisAccountMap;
        fromJSON(object: any): _452.GenesisAccountMap;
        toJSON(message: _452.GenesisAccountMap): unknown;
        fromPartial(object: {
            map?: {
                [x: string]: string;
            };
        }): _452.GenesisAccountMap;
    };
    AccountMap_MapEntry: {
        encode(message: _452.AccountMap_MapEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _452.AccountMap_MapEntry;
        fromJSON(object: any): _452.AccountMap_MapEntry;
        toJSON(message: _452.AccountMap_MapEntry): unknown;
        fromPartial(object: {
            key?: string;
            value?: string;
        }): _452.AccountMap_MapEntry;
    };
    AccountMap: {
        encode(message: _452.AccountMap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _452.AccountMap;
        fromJSON(object: any): _452.AccountMap;
        toJSON(message: _452.AccountMap): unknown;
        fromPartial(object: {
            map?: {
                [x: string]: string;
            };
        }): _452.AccountMap;
    };
    WithdrawalInfoDocs: {
        encode(message: _452.WithdrawalInfoDocs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _452.WithdrawalInfoDocs;
        fromJSON(object: any): _452.WithdrawalInfoDocs;
        toJSON(message: _452.WithdrawalInfoDocs): unknown;
        fromPartial(object: {
            docsList?: {
                projectDid?: string;
                recipientDid?: string;
                amount?: {
                    denom?: string;
                    amount?: string;
                };
            }[];
        }): _452.WithdrawalInfoDocs;
    };
    Claims: {
        encode(message: _452.Claims, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _452.Claims;
        fromJSON(object: any): _452.Claims;
        toJSON(message: _452.Claims): unknown;
        fromPartial(object: {
            claimsList?: {
                id?: string;
                templateId?: string;
                claimerDid?: string;
                status?: string;
            }[];
        }): _452.Claims;
    };
    GenesisState: {
        encode(message: _451.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _451.GenesisState;
        fromJSON(object: any): _451.GenesisState;
        toJSON(message: _451.GenesisState): unknown;
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
        }): _451.GenesisState;
    };
};
