import { Coin } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** UpdateProjectStatusDoc contains details required to update a project's status. */
export interface UpdateProjectStatusDoc {
    status: string;
    ethFundingTxnId: string;
}
/** CreateAgentDoc contains details required to create an agent. */
export interface CreateAgentDoc {
    agentDid: string;
    role: string;
}
/** UpdateAgentDoc contains details required to update an agent. */
export interface UpdateAgentDoc {
    did: string;
    status: string;
    role: string;
}
/** CreateClaimDoc contains details required to create a claim on a project. */
export interface CreateClaimDoc {
    claimId: string;
    claimTemplateId: string;
}
/** CreateEvaluationDoc contains details required to create an evaluation for a specific claim on a project. */
export interface CreateEvaluationDoc {
    claimId: string;
    status: string;
}
/** WithdrawFundsDoc contains details required to withdraw funds from a specific project. */
export interface WithdrawFundsDoc {
    projectDid: string;
    recipientDid: string;
    amount: string;
    isRefund: boolean;
}
/** ProjectDoc defines a project (or entity) type with all of its parameters. */
export interface ProjectDoc {
    txHash: string;
    projectDid: string;
    senderDid: string;
    pubKey: string;
    status: string;
    data: Uint8Array;
}
/** WithdrawalInfoDoc contains details required to withdraw from a specific project. */
export interface WithdrawalInfoDoc {
    projectDid: string;
    recipientDid: string;
    amount: Coin;
}
/** Params defines the parameters for the project module. */
export interface Params {
    ixoDid: string;
    projectMinimumInitialFunding: Coin[];
    oracleFeePercentage: string;
    nodeFeePercentage: string;
}
/** Claim contains details required to start a claim on a project. */
export interface Claim {
    id: string;
    templateId: string;
    claimerDid: string;
    status: string;
}
export interface GenesisAccountMap_MapEntry {
    key: string;
    value: string;
}
/** GenesisAccountMap is a type used at genesis that maps a specific project's account names to the accounts' addresses. */
export interface GenesisAccountMap {
    map: {
        [key: string]: string;
    };
}
export interface AccountMap_MapEntry {
    key: string;
    value: string;
}
/** AccountMap maps a specific project's account names to the accounts' addresses. */
export interface AccountMap {
    map: {
        [key: string]: string;
    };
}
/** WithdrawalInfoDocs contains a list of type WithdrawalInfoDoc. */
export interface WithdrawalInfoDocs {
    docsList: WithdrawalInfoDoc[];
}
/** Claims contains a list of type Claim. */
export interface Claims {
    claimsList: Claim[];
}
export declare const UpdateProjectStatusDoc: {
    encode(message: UpdateProjectStatusDoc, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateProjectStatusDoc;
    fromJSON(object: any): UpdateProjectStatusDoc;
    toJSON(message: UpdateProjectStatusDoc): unknown;
    fromPartial(object: DeepPartial<UpdateProjectStatusDoc>): UpdateProjectStatusDoc;
};
export declare const CreateAgentDoc: {
    encode(message: CreateAgentDoc, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateAgentDoc;
    fromJSON(object: any): CreateAgentDoc;
    toJSON(message: CreateAgentDoc): unknown;
    fromPartial(object: DeepPartial<CreateAgentDoc>): CreateAgentDoc;
};
export declare const UpdateAgentDoc: {
    encode(message: UpdateAgentDoc, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAgentDoc;
    fromJSON(object: any): UpdateAgentDoc;
    toJSON(message: UpdateAgentDoc): unknown;
    fromPartial(object: DeepPartial<UpdateAgentDoc>): UpdateAgentDoc;
};
export declare const CreateClaimDoc: {
    encode(message: CreateClaimDoc, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateClaimDoc;
    fromJSON(object: any): CreateClaimDoc;
    toJSON(message: CreateClaimDoc): unknown;
    fromPartial(object: DeepPartial<CreateClaimDoc>): CreateClaimDoc;
};
export declare const CreateEvaluationDoc: {
    encode(message: CreateEvaluationDoc, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateEvaluationDoc;
    fromJSON(object: any): CreateEvaluationDoc;
    toJSON(message: CreateEvaluationDoc): unknown;
    fromPartial(object: DeepPartial<CreateEvaluationDoc>): CreateEvaluationDoc;
};
export declare const WithdrawFundsDoc: {
    encode(message: WithdrawFundsDoc, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawFundsDoc;
    fromJSON(object: any): WithdrawFundsDoc;
    toJSON(message: WithdrawFundsDoc): unknown;
    fromPartial(object: DeepPartial<WithdrawFundsDoc>): WithdrawFundsDoc;
};
export declare const ProjectDoc: {
    encode(message: ProjectDoc, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProjectDoc;
    fromJSON(object: any): ProjectDoc;
    toJSON(message: ProjectDoc): unknown;
    fromPartial(object: DeepPartial<ProjectDoc>): ProjectDoc;
};
export declare const WithdrawalInfoDoc: {
    encode(message: WithdrawalInfoDoc, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawalInfoDoc;
    fromJSON(object: any): WithdrawalInfoDoc;
    toJSON(message: WithdrawalInfoDoc): unknown;
    fromPartial(object: DeepPartial<WithdrawalInfoDoc>): WithdrawalInfoDoc;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: DeepPartial<Params>): Params;
};
export declare const Claim: {
    encode(message: Claim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Claim;
    fromJSON(object: any): Claim;
    toJSON(message: Claim): unknown;
    fromPartial(object: DeepPartial<Claim>): Claim;
};
export declare const GenesisAccountMap_MapEntry: {
    encode(message: GenesisAccountMap_MapEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisAccountMap_MapEntry;
    fromJSON(object: any): GenesisAccountMap_MapEntry;
    toJSON(message: GenesisAccountMap_MapEntry): unknown;
    fromPartial(object: DeepPartial<GenesisAccountMap_MapEntry>): GenesisAccountMap_MapEntry;
};
export declare const GenesisAccountMap: {
    encode(message: GenesisAccountMap, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisAccountMap;
    fromJSON(object: any): GenesisAccountMap;
    toJSON(message: GenesisAccountMap): unknown;
    fromPartial(object: DeepPartial<GenesisAccountMap>): GenesisAccountMap;
};
export declare const AccountMap_MapEntry: {
    encode(message: AccountMap_MapEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccountMap_MapEntry;
    fromJSON(object: any): AccountMap_MapEntry;
    toJSON(message: AccountMap_MapEntry): unknown;
    fromPartial(object: DeepPartial<AccountMap_MapEntry>): AccountMap_MapEntry;
};
export declare const AccountMap: {
    encode(message: AccountMap, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccountMap;
    fromJSON(object: any): AccountMap;
    toJSON(message: AccountMap): unknown;
    fromPartial(object: DeepPartial<AccountMap>): AccountMap;
};
export declare const WithdrawalInfoDocs: {
    encode(message: WithdrawalInfoDocs, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawalInfoDocs;
    fromJSON(object: any): WithdrawalInfoDocs;
    toJSON(message: WithdrawalInfoDocs): unknown;
    fromPartial(object: DeepPartial<WithdrawalInfoDocs>): WithdrawalInfoDocs;
};
export declare const Claims: {
    encode(message: Claims, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Claims;
    fromJSON(object: any): Claims;
    toJSON(message: Claims): unknown;
    fromPartial(object: DeepPartial<Claims>): Claims;
};
