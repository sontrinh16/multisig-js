import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateProject, MsgUpdateProjectStatus, MsgCreateAgent, MsgUpdateAgent, MsgCreateClaim, MsgCreateEvaluation, MsgWithdrawFunds, MsgUpdateProjectDoc } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createProject(value: MsgCreateProject): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateProjectStatus(value: MsgUpdateProjectStatus): {
            typeUrl: string;
            value: Uint8Array;
        };
        createAgent(value: MsgCreateAgent): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateAgent(value: MsgUpdateAgent): {
            typeUrl: string;
            value: Uint8Array;
        };
        createClaim(value: MsgCreateClaim): {
            typeUrl: string;
            value: Uint8Array;
        };
        createEvaluation(value: MsgCreateEvaluation): {
            typeUrl: string;
            value: Uint8Array;
        };
        withdrawFunds(value: MsgWithdrawFunds): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateProjectDoc(value: MsgUpdateProjectDoc): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createProject(value: MsgCreateProject): {
            typeUrl: string;
            value: MsgCreateProject;
        };
        updateProjectStatus(value: MsgUpdateProjectStatus): {
            typeUrl: string;
            value: MsgUpdateProjectStatus;
        };
        createAgent(value: MsgCreateAgent): {
            typeUrl: string;
            value: MsgCreateAgent;
        };
        updateAgent(value: MsgUpdateAgent): {
            typeUrl: string;
            value: MsgUpdateAgent;
        };
        createClaim(value: MsgCreateClaim): {
            typeUrl: string;
            value: MsgCreateClaim;
        };
        createEvaluation(value: MsgCreateEvaluation): {
            typeUrl: string;
            value: MsgCreateEvaluation;
        };
        withdrawFunds(value: MsgWithdrawFunds): {
            typeUrl: string;
            value: MsgWithdrawFunds;
        };
        updateProjectDoc(value: MsgUpdateProjectDoc): {
            typeUrl: string;
            value: MsgUpdateProjectDoc;
        };
    };
    toJSON: {
        createProject(value: MsgCreateProject): {
            typeUrl: string;
            value: unknown;
        };
        updateProjectStatus(value: MsgUpdateProjectStatus): {
            typeUrl: string;
            value: unknown;
        };
        createAgent(value: MsgCreateAgent): {
            typeUrl: string;
            value: unknown;
        };
        updateAgent(value: MsgUpdateAgent): {
            typeUrl: string;
            value: unknown;
        };
        createClaim(value: MsgCreateClaim): {
            typeUrl: string;
            value: unknown;
        };
        createEvaluation(value: MsgCreateEvaluation): {
            typeUrl: string;
            value: unknown;
        };
        withdrawFunds(value: MsgWithdrawFunds): {
            typeUrl: string;
            value: unknown;
        };
        updateProjectDoc(value: MsgUpdateProjectDoc): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        createProject(value: any): {
            typeUrl: string;
            value: MsgCreateProject;
        };
        updateProjectStatus(value: any): {
            typeUrl: string;
            value: MsgUpdateProjectStatus;
        };
        createAgent(value: any): {
            typeUrl: string;
            value: MsgCreateAgent;
        };
        updateAgent(value: any): {
            typeUrl: string;
            value: MsgUpdateAgent;
        };
        createClaim(value: any): {
            typeUrl: string;
            value: MsgCreateClaim;
        };
        createEvaluation(value: any): {
            typeUrl: string;
            value: MsgCreateEvaluation;
        };
        withdrawFunds(value: any): {
            typeUrl: string;
            value: MsgWithdrawFunds;
        };
        updateProjectDoc(value: any): {
            typeUrl: string;
            value: MsgUpdateProjectDoc;
        };
    };
    fromPartial: {
        createProject(value: MsgCreateProject): {
            typeUrl: string;
            value: MsgCreateProject;
        };
        updateProjectStatus(value: MsgUpdateProjectStatus): {
            typeUrl: string;
            value: MsgUpdateProjectStatus;
        };
        createAgent(value: MsgCreateAgent): {
            typeUrl: string;
            value: MsgCreateAgent;
        };
        updateAgent(value: MsgUpdateAgent): {
            typeUrl: string;
            value: MsgUpdateAgent;
        };
        createClaim(value: MsgCreateClaim): {
            typeUrl: string;
            value: MsgCreateClaim;
        };
        createEvaluation(value: MsgCreateEvaluation): {
            typeUrl: string;
            value: MsgCreateEvaluation;
        };
        withdrawFunds(value: MsgWithdrawFunds): {
            typeUrl: string;
            value: MsgWithdrawFunds;
        };
        updateProjectDoc(value: MsgUpdateProjectDoc): {
            typeUrl: string;
            value: MsgUpdateProjectDoc;
        };
    };
};
