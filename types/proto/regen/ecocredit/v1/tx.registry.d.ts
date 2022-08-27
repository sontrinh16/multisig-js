import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateClass, MsgCreateProject, MsgCreateBatch, MsgMintBatchCredits, MsgSealBatch, MsgSend, MsgRetire, MsgCancel, MsgUpdateClassAdmin, MsgUpdateClassIssuers, MsgUpdateClassMetadata, MsgUpdateProjectAdmin, MsgUpdateProjectMetadata } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createClass(value: MsgCreateClass): {
            typeUrl: string;
            value: Uint8Array;
        };
        createProject(value: MsgCreateProject): {
            typeUrl: string;
            value: Uint8Array;
        };
        createBatch(value: MsgCreateBatch): {
            typeUrl: string;
            value: Uint8Array;
        };
        mintBatchCredits(value: MsgMintBatchCredits): {
            typeUrl: string;
            value: Uint8Array;
        };
        sealBatch(value: MsgSealBatch): {
            typeUrl: string;
            value: Uint8Array;
        };
        send(value: MsgSend): {
            typeUrl: string;
            value: Uint8Array;
        };
        retire(value: MsgRetire): {
            typeUrl: string;
            value: Uint8Array;
        };
        cancel(value: MsgCancel): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateClassAdmin(value: MsgUpdateClassAdmin): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateClassIssuers(value: MsgUpdateClassIssuers): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateClassMetadata(value: MsgUpdateClassMetadata): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateProjectAdmin(value: MsgUpdateProjectAdmin): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateProjectMetadata(value: MsgUpdateProjectMetadata): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createClass(value: MsgCreateClass): {
            typeUrl: string;
            value: MsgCreateClass;
        };
        createProject(value: MsgCreateProject): {
            typeUrl: string;
            value: MsgCreateProject;
        };
        createBatch(value: MsgCreateBatch): {
            typeUrl: string;
            value: MsgCreateBatch;
        };
        mintBatchCredits(value: MsgMintBatchCredits): {
            typeUrl: string;
            value: MsgMintBatchCredits;
        };
        sealBatch(value: MsgSealBatch): {
            typeUrl: string;
            value: MsgSealBatch;
        };
        send(value: MsgSend): {
            typeUrl: string;
            value: MsgSend;
        };
        retire(value: MsgRetire): {
            typeUrl: string;
            value: MsgRetire;
        };
        cancel(value: MsgCancel): {
            typeUrl: string;
            value: MsgCancel;
        };
        updateClassAdmin(value: MsgUpdateClassAdmin): {
            typeUrl: string;
            value: MsgUpdateClassAdmin;
        };
        updateClassIssuers(value: MsgUpdateClassIssuers): {
            typeUrl: string;
            value: MsgUpdateClassIssuers;
        };
        updateClassMetadata(value: MsgUpdateClassMetadata): {
            typeUrl: string;
            value: MsgUpdateClassMetadata;
        };
        updateProjectAdmin(value: MsgUpdateProjectAdmin): {
            typeUrl: string;
            value: MsgUpdateProjectAdmin;
        };
        updateProjectMetadata(value: MsgUpdateProjectMetadata): {
            typeUrl: string;
            value: MsgUpdateProjectMetadata;
        };
    };
    toJSON: {
        createClass(value: MsgCreateClass): {
            typeUrl: string;
            value: unknown;
        };
        createProject(value: MsgCreateProject): {
            typeUrl: string;
            value: unknown;
        };
        createBatch(value: MsgCreateBatch): {
            typeUrl: string;
            value: unknown;
        };
        mintBatchCredits(value: MsgMintBatchCredits): {
            typeUrl: string;
            value: unknown;
        };
        sealBatch(value: MsgSealBatch): {
            typeUrl: string;
            value: unknown;
        };
        send(value: MsgSend): {
            typeUrl: string;
            value: unknown;
        };
        retire(value: MsgRetire): {
            typeUrl: string;
            value: unknown;
        };
        cancel(value: MsgCancel): {
            typeUrl: string;
            value: unknown;
        };
        updateClassAdmin(value: MsgUpdateClassAdmin): {
            typeUrl: string;
            value: unknown;
        };
        updateClassIssuers(value: MsgUpdateClassIssuers): {
            typeUrl: string;
            value: unknown;
        };
        updateClassMetadata(value: MsgUpdateClassMetadata): {
            typeUrl: string;
            value: unknown;
        };
        updateProjectAdmin(value: MsgUpdateProjectAdmin): {
            typeUrl: string;
            value: unknown;
        };
        updateProjectMetadata(value: MsgUpdateProjectMetadata): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        createClass(value: any): {
            typeUrl: string;
            value: MsgCreateClass;
        };
        createProject(value: any): {
            typeUrl: string;
            value: MsgCreateProject;
        };
        createBatch(value: any): {
            typeUrl: string;
            value: MsgCreateBatch;
        };
        mintBatchCredits(value: any): {
            typeUrl: string;
            value: MsgMintBatchCredits;
        };
        sealBatch(value: any): {
            typeUrl: string;
            value: MsgSealBatch;
        };
        send(value: any): {
            typeUrl: string;
            value: MsgSend;
        };
        retire(value: any): {
            typeUrl: string;
            value: MsgRetire;
        };
        cancel(value: any): {
            typeUrl: string;
            value: MsgCancel;
        };
        updateClassAdmin(value: any): {
            typeUrl: string;
            value: MsgUpdateClassAdmin;
        };
        updateClassIssuers(value: any): {
            typeUrl: string;
            value: MsgUpdateClassIssuers;
        };
        updateClassMetadata(value: any): {
            typeUrl: string;
            value: MsgUpdateClassMetadata;
        };
        updateProjectAdmin(value: any): {
            typeUrl: string;
            value: MsgUpdateProjectAdmin;
        };
        updateProjectMetadata(value: any): {
            typeUrl: string;
            value: MsgUpdateProjectMetadata;
        };
    };
    fromPartial: {
        createClass(value: MsgCreateClass): {
            typeUrl: string;
            value: MsgCreateClass;
        };
        createProject(value: MsgCreateProject): {
            typeUrl: string;
            value: MsgCreateProject;
        };
        createBatch(value: MsgCreateBatch): {
            typeUrl: string;
            value: MsgCreateBatch;
        };
        mintBatchCredits(value: MsgMintBatchCredits): {
            typeUrl: string;
            value: MsgMintBatchCredits;
        };
        sealBatch(value: MsgSealBatch): {
            typeUrl: string;
            value: MsgSealBatch;
        };
        send(value: MsgSend): {
            typeUrl: string;
            value: MsgSend;
        };
        retire(value: MsgRetire): {
            typeUrl: string;
            value: MsgRetire;
        };
        cancel(value: MsgCancel): {
            typeUrl: string;
            value: MsgCancel;
        };
        updateClassAdmin(value: MsgUpdateClassAdmin): {
            typeUrl: string;
            value: MsgUpdateClassAdmin;
        };
        updateClassIssuers(value: MsgUpdateClassIssuers): {
            typeUrl: string;
            value: MsgUpdateClassIssuers;
        };
        updateClassMetadata(value: MsgUpdateClassMetadata): {
            typeUrl: string;
            value: MsgUpdateClassMetadata;
        };
        updateProjectAdmin(value: MsgUpdateProjectAdmin): {
            typeUrl: string;
            value: MsgUpdateProjectAdmin;
        };
        updateProjectMetadata(value: MsgUpdateProjectMetadata): {
            typeUrl: string;
            value: MsgUpdateProjectMetadata;
        };
    };
};
