import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateClawbackVestingAccount, MsgClawback } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createClawbackVestingAccount(value: MsgCreateClawbackVestingAccount): {
            typeUrl: string;
            value: Uint8Array;
        };
        clawback(value: MsgClawback): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createClawbackVestingAccount(value: MsgCreateClawbackVestingAccount): {
            typeUrl: string;
            value: MsgCreateClawbackVestingAccount;
        };
        clawback(value: MsgClawback): {
            typeUrl: string;
            value: MsgClawback;
        };
    };
    toJSON: {
        createClawbackVestingAccount(value: MsgCreateClawbackVestingAccount): {
            typeUrl: string;
            value: unknown;
        };
        clawback(value: MsgClawback): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        createClawbackVestingAccount(value: any): {
            typeUrl: string;
            value: MsgCreateClawbackVestingAccount;
        };
        clawback(value: any): {
            typeUrl: string;
            value: MsgClawback;
        };
    };
    fromPartial: {
        createClawbackVestingAccount(value: MsgCreateClawbackVestingAccount): {
            typeUrl: string;
            value: MsgCreateClawbackVestingAccount;
        };
        clawback(value: MsgClawback): {
            typeUrl: string;
            value: MsgClawback;
        };
    };
};
