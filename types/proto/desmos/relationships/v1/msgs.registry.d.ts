import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateRelationship, MsgDeleteRelationship, MsgBlockUser, MsgUnblockUser } from "./msgs";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createRelationship(value: MsgCreateRelationship): {
            typeUrl: string;
            value: Uint8Array;
        };
        deleteRelationship(value: MsgDeleteRelationship): {
            typeUrl: string;
            value: Uint8Array;
        };
        blockUser(value: MsgBlockUser): {
            typeUrl: string;
            value: Uint8Array;
        };
        unblockUser(value: MsgUnblockUser): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createRelationship(value: MsgCreateRelationship): {
            typeUrl: string;
            value: MsgCreateRelationship;
        };
        deleteRelationship(value: MsgDeleteRelationship): {
            typeUrl: string;
            value: MsgDeleteRelationship;
        };
        blockUser(value: MsgBlockUser): {
            typeUrl: string;
            value: MsgBlockUser;
        };
        unblockUser(value: MsgUnblockUser): {
            typeUrl: string;
            value: MsgUnblockUser;
        };
    };
    toJSON: {
        createRelationship(value: MsgCreateRelationship): {
            typeUrl: string;
            value: unknown;
        };
        deleteRelationship(value: MsgDeleteRelationship): {
            typeUrl: string;
            value: unknown;
        };
        blockUser(value: MsgBlockUser): {
            typeUrl: string;
            value: unknown;
        };
        unblockUser(value: MsgUnblockUser): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        createRelationship(value: any): {
            typeUrl: string;
            value: MsgCreateRelationship;
        };
        deleteRelationship(value: any): {
            typeUrl: string;
            value: MsgDeleteRelationship;
        };
        blockUser(value: any): {
            typeUrl: string;
            value: MsgBlockUser;
        };
        unblockUser(value: any): {
            typeUrl: string;
            value: MsgUnblockUser;
        };
    };
    fromPartial: {
        createRelationship(value: MsgCreateRelationship): {
            typeUrl: string;
            value: MsgCreateRelationship;
        };
        deleteRelationship(value: MsgDeleteRelationship): {
            typeUrl: string;
            value: MsgDeleteRelationship;
        };
        blockUser(value: MsgBlockUser): {
            typeUrl: string;
            value: MsgBlockUser;
        };
        unblockUser(value: MsgUnblockUser): {
            typeUrl: string;
            value: MsgUnblockUser;
        };
    };
};
