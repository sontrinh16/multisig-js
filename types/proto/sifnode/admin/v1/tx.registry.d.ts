import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgAddAccount, MsgRemoveAccount } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        addAccount(value: MsgAddAccount): {
            typeUrl: string;
            value: Uint8Array;
        };
        removeAccount(value: MsgRemoveAccount): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        addAccount(value: MsgAddAccount): {
            typeUrl: string;
            value: MsgAddAccount;
        };
        removeAccount(value: MsgRemoveAccount): {
            typeUrl: string;
            value: MsgRemoveAccount;
        };
    };
    toJSON: {
        addAccount(value: MsgAddAccount): {
            typeUrl: string;
            value: unknown;
        };
        removeAccount(value: MsgRemoveAccount): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        addAccount(value: any): {
            typeUrl: string;
            value: MsgAddAccount;
        };
        removeAccount(value: any): {
            typeUrl: string;
            value: MsgRemoveAccount;
        };
    };
    fromPartial: {
        addAccount(value: MsgAddAccount): {
            typeUrl: string;
            value: MsgAddAccount;
        };
        removeAccount(value: MsgRemoveAccount): {
            typeUrl: string;
            value: MsgRemoveAccount;
        };
    };
};
