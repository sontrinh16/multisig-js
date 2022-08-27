import { UpdateProjectStatusDoc, CreateAgentDoc, UpdateAgentDoc, CreateClaimDoc, CreateEvaluationDoc, WithdrawFundsDoc } from "./project";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** MsgCreateProject defines a message for creating a project. */
export interface MsgCreateProject {
    txHash: string;
    senderDid: string;
    projectDid: string;
    pubKey: string;
    data: Uint8Array;
}
/** MsgCreateProjectResponse defines the Msg/CreateProject response type. */
export interface MsgCreateProjectResponse {
}
/** MsgUpdateProjectStatus defines a message for updating a project's current status. */
export interface MsgUpdateProjectStatus {
    txHash: string;
    senderDid: string;
    projectDid: string;
    data: UpdateProjectStatusDoc;
}
/** MsgUpdateProjectStatusResponse defines the Msg/UpdateProjectStatus response type. */
export interface MsgUpdateProjectStatusResponse {
}
/** MsgCreateAgent defines a message for creating an agent on a project. */
export interface MsgCreateAgent {
    txHash: string;
    senderDid: string;
    projectDid: string;
    data: CreateAgentDoc;
}
/** MsgCreateAgentResponse defines the Msg/CreateAgent response type. */
export interface MsgCreateAgentResponse {
}
/** MsgUpdateAgent defines a message for updating an agent on a project. */
export interface MsgUpdateAgent {
    txHash: string;
    senderDid: string;
    projectDid: string;
    data: UpdateAgentDoc;
}
/** MsgUpdateAgentResponse defines the Msg/UpdateAgent response type. */
export interface MsgUpdateAgentResponse {
}
/** MsgCreateClaim defines a message for creating a claim on a project. */
export interface MsgCreateClaim {
    txHash: string;
    senderDid: string;
    projectDid: string;
    data: CreateClaimDoc;
}
/** MsgCreateClaimResponse defines the Msg/CreateClaim response type. */
export interface MsgCreateClaimResponse {
}
/** MsgCreateEvaluation defines a message for creating an evaluation for a specific claim on a project. */
export interface MsgCreateEvaluation {
    txHash: string;
    senderDid: string;
    projectDid: string;
    data: CreateEvaluationDoc;
}
/** MsgCreateEvaluationResponse defines the Msg/CreateEvaluation response type. */
export interface MsgCreateEvaluationResponse {
}
/** MsgWithdrawFunds defines a message for project agents to withdraw their funds from a project. */
export interface MsgWithdrawFunds {
    senderDid: string;
    data: WithdrawFundsDoc;
}
/** MsgWithdrawFundsResponse defines the Msg/WithdrawFunds response type. */
export interface MsgWithdrawFundsResponse {
}
/** MsgUpdateProjectDoc defines a message for updating a project's data. */
export interface MsgUpdateProjectDoc {
    txHash: string;
    senderDid: string;
    projectDid: string;
    data: Uint8Array;
}
/** MsgUpdateProjectDocResponse defines the Msg/UpdateProjectDoc response type. */
export interface MsgUpdateProjectDocResponse {
}
export declare const MsgCreateProject: {
    encode(message: MsgCreateProject, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateProject;
    fromJSON(object: any): MsgCreateProject;
    toJSON(message: MsgCreateProject): unknown;
    fromPartial(object: DeepPartial<MsgCreateProject>): MsgCreateProject;
};
export declare const MsgCreateProjectResponse: {
    encode(_: MsgCreateProjectResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateProjectResponse;
    fromJSON(_: any): MsgCreateProjectResponse;
    toJSON(_: MsgCreateProjectResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateProjectResponse>): MsgCreateProjectResponse;
};
export declare const MsgUpdateProjectStatus: {
    encode(message: MsgUpdateProjectStatus, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateProjectStatus;
    fromJSON(object: any): MsgUpdateProjectStatus;
    toJSON(message: MsgUpdateProjectStatus): unknown;
    fromPartial(object: DeepPartial<MsgUpdateProjectStatus>): MsgUpdateProjectStatus;
};
export declare const MsgUpdateProjectStatusResponse: {
    encode(_: MsgUpdateProjectStatusResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateProjectStatusResponse;
    fromJSON(_: any): MsgUpdateProjectStatusResponse;
    toJSON(_: MsgUpdateProjectStatusResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateProjectStatusResponse>): MsgUpdateProjectStatusResponse;
};
export declare const MsgCreateAgent: {
    encode(message: MsgCreateAgent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateAgent;
    fromJSON(object: any): MsgCreateAgent;
    toJSON(message: MsgCreateAgent): unknown;
    fromPartial(object: DeepPartial<MsgCreateAgent>): MsgCreateAgent;
};
export declare const MsgCreateAgentResponse: {
    encode(_: MsgCreateAgentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateAgentResponse;
    fromJSON(_: any): MsgCreateAgentResponse;
    toJSON(_: MsgCreateAgentResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateAgentResponse>): MsgCreateAgentResponse;
};
export declare const MsgUpdateAgent: {
    encode(message: MsgUpdateAgent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateAgent;
    fromJSON(object: any): MsgUpdateAgent;
    toJSON(message: MsgUpdateAgent): unknown;
    fromPartial(object: DeepPartial<MsgUpdateAgent>): MsgUpdateAgent;
};
export declare const MsgUpdateAgentResponse: {
    encode(_: MsgUpdateAgentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateAgentResponse;
    fromJSON(_: any): MsgUpdateAgentResponse;
    toJSON(_: MsgUpdateAgentResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateAgentResponse>): MsgUpdateAgentResponse;
};
export declare const MsgCreateClaim: {
    encode(message: MsgCreateClaim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateClaim;
    fromJSON(object: any): MsgCreateClaim;
    toJSON(message: MsgCreateClaim): unknown;
    fromPartial(object: DeepPartial<MsgCreateClaim>): MsgCreateClaim;
};
export declare const MsgCreateClaimResponse: {
    encode(_: MsgCreateClaimResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateClaimResponse;
    fromJSON(_: any): MsgCreateClaimResponse;
    toJSON(_: MsgCreateClaimResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateClaimResponse>): MsgCreateClaimResponse;
};
export declare const MsgCreateEvaluation: {
    encode(message: MsgCreateEvaluation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateEvaluation;
    fromJSON(object: any): MsgCreateEvaluation;
    toJSON(message: MsgCreateEvaluation): unknown;
    fromPartial(object: DeepPartial<MsgCreateEvaluation>): MsgCreateEvaluation;
};
export declare const MsgCreateEvaluationResponse: {
    encode(_: MsgCreateEvaluationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateEvaluationResponse;
    fromJSON(_: any): MsgCreateEvaluationResponse;
    toJSON(_: MsgCreateEvaluationResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateEvaluationResponse>): MsgCreateEvaluationResponse;
};
export declare const MsgWithdrawFunds: {
    encode(message: MsgWithdrawFunds, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawFunds;
    fromJSON(object: any): MsgWithdrawFunds;
    toJSON(message: MsgWithdrawFunds): unknown;
    fromPartial(object: DeepPartial<MsgWithdrawFunds>): MsgWithdrawFunds;
};
export declare const MsgWithdrawFundsResponse: {
    encode(_: MsgWithdrawFundsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawFundsResponse;
    fromJSON(_: any): MsgWithdrawFundsResponse;
    toJSON(_: MsgWithdrawFundsResponse): unknown;
    fromPartial(_: DeepPartial<MsgWithdrawFundsResponse>): MsgWithdrawFundsResponse;
};
export declare const MsgUpdateProjectDoc: {
    encode(message: MsgUpdateProjectDoc, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateProjectDoc;
    fromJSON(object: any): MsgUpdateProjectDoc;
    toJSON(message: MsgUpdateProjectDoc): unknown;
    fromPartial(object: DeepPartial<MsgUpdateProjectDoc>): MsgUpdateProjectDoc;
};
export declare const MsgUpdateProjectDocResponse: {
    encode(_: MsgUpdateProjectDocResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateProjectDocResponse;
    fromJSON(_: any): MsgUpdateProjectDocResponse;
    toJSON(_: MsgUpdateProjectDocResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateProjectDocResponse>): MsgUpdateProjectDocResponse;
};
