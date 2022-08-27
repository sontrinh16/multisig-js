import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgAddDid, MsgAddCredential } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        addDid(value: MsgAddDid): {
            typeUrl: string;
            value: Uint8Array;
        };
        addCredential(value: MsgAddCredential): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        addDid(value: MsgAddDid): {
            typeUrl: string;
            value: MsgAddDid;
        };
        addCredential(value: MsgAddCredential): {
            typeUrl: string;
            value: MsgAddCredential;
        };
    };
    toJSON: {
        addDid(value: MsgAddDid): {
            typeUrl: string;
            value: unknown;
        };
        addCredential(value: MsgAddCredential): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        addDid(value: any): {
            typeUrl: string;
            value: MsgAddDid;
        };
        addCredential(value: any): {
            typeUrl: string;
            value: MsgAddCredential;
        };
    };
    fromPartial: {
        addDid(value: MsgAddDid): {
            typeUrl: string;
            value: MsgAddDid;
        };
        addCredential(value: MsgAddCredential): {
            typeUrl: string;
            value: MsgAddCredential;
        };
    };
};
