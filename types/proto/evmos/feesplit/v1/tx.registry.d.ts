import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRegisterFeeSplit, MsgUpdateFeeSplit, MsgCancelFeeSplit } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        registerFeeSplit(value: MsgRegisterFeeSplit): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateFeeSplit(value: MsgUpdateFeeSplit): {
            typeUrl: string;
            value: Uint8Array;
        };
        cancelFeeSplit(value: MsgCancelFeeSplit): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        registerFeeSplit(value: MsgRegisterFeeSplit): {
            typeUrl: string;
            value: MsgRegisterFeeSplit;
        };
        updateFeeSplit(value: MsgUpdateFeeSplit): {
            typeUrl: string;
            value: MsgUpdateFeeSplit;
        };
        cancelFeeSplit(value: MsgCancelFeeSplit): {
            typeUrl: string;
            value: MsgCancelFeeSplit;
        };
    };
    toJSON: {
        registerFeeSplit(value: MsgRegisterFeeSplit): {
            typeUrl: string;
            value: unknown;
        };
        updateFeeSplit(value: MsgUpdateFeeSplit): {
            typeUrl: string;
            value: unknown;
        };
        cancelFeeSplit(value: MsgCancelFeeSplit): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        registerFeeSplit(value: any): {
            typeUrl: string;
            value: MsgRegisterFeeSplit;
        };
        updateFeeSplit(value: any): {
            typeUrl: string;
            value: MsgUpdateFeeSplit;
        };
        cancelFeeSplit(value: any): {
            typeUrl: string;
            value: MsgCancelFeeSplit;
        };
    };
    fromPartial: {
        registerFeeSplit(value: MsgRegisterFeeSplit): {
            typeUrl: string;
            value: MsgRegisterFeeSplit;
        };
        updateFeeSplit(value: MsgUpdateFeeSplit): {
            typeUrl: string;
            value: MsgUpdateFeeSplit;
        };
        cancelFeeSplit(value: MsgCancelFeeSplit): {
            typeUrl: string;
            value: MsgCancelFeeSplit;
        };
    };
};
