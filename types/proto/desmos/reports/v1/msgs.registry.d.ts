import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateReport, MsgDeleteReport, MsgSupportStandardReason, MsgAddReason, MsgRemoveReason } from "./msgs";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createReport(value: MsgCreateReport): {
            typeUrl: string;
            value: Uint8Array;
        };
        deleteReport(value: MsgDeleteReport): {
            typeUrl: string;
            value: Uint8Array;
        };
        supportStandardReason(value: MsgSupportStandardReason): {
            typeUrl: string;
            value: Uint8Array;
        };
        addReason(value: MsgAddReason): {
            typeUrl: string;
            value: Uint8Array;
        };
        removeReason(value: MsgRemoveReason): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createReport(value: MsgCreateReport): {
            typeUrl: string;
            value: MsgCreateReport;
        };
        deleteReport(value: MsgDeleteReport): {
            typeUrl: string;
            value: MsgDeleteReport;
        };
        supportStandardReason(value: MsgSupportStandardReason): {
            typeUrl: string;
            value: MsgSupportStandardReason;
        };
        addReason(value: MsgAddReason): {
            typeUrl: string;
            value: MsgAddReason;
        };
        removeReason(value: MsgRemoveReason): {
            typeUrl: string;
            value: MsgRemoveReason;
        };
    };
    toJSON: {
        createReport(value: MsgCreateReport): {
            typeUrl: string;
            value: unknown;
        };
        deleteReport(value: MsgDeleteReport): {
            typeUrl: string;
            value: unknown;
        };
        supportStandardReason(value: MsgSupportStandardReason): {
            typeUrl: string;
            value: unknown;
        };
        addReason(value: MsgAddReason): {
            typeUrl: string;
            value: unknown;
        };
        removeReason(value: MsgRemoveReason): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        createReport(value: any): {
            typeUrl: string;
            value: MsgCreateReport;
        };
        deleteReport(value: any): {
            typeUrl: string;
            value: MsgDeleteReport;
        };
        supportStandardReason(value: any): {
            typeUrl: string;
            value: MsgSupportStandardReason;
        };
        addReason(value: any): {
            typeUrl: string;
            value: MsgAddReason;
        };
        removeReason(value: any): {
            typeUrl: string;
            value: MsgRemoveReason;
        };
    };
    fromPartial: {
        createReport(value: MsgCreateReport): {
            typeUrl: string;
            value: MsgCreateReport;
        };
        deleteReport(value: MsgDeleteReport): {
            typeUrl: string;
            value: MsgDeleteReport;
        };
        supportStandardReason(value: MsgSupportStandardReason): {
            typeUrl: string;
            value: MsgSupportStandardReason;
        };
        addReason(value: MsgAddReason): {
            typeUrl: string;
            value: MsgAddReason;
        };
        removeReason(value: MsgRemoveReason): {
            typeUrl: string;
            value: MsgRemoveReason;
        };
    };
};
