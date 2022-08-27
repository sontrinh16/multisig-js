import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateValidator, MsgUpdateValidator, MsgDelegate, MsgUndelegate } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createValidator(value: MsgCreateValidator): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateValidator(value: MsgUpdateValidator): {
            typeUrl: string;
            value: Uint8Array;
        };
        delegate(value: MsgDelegate): {
            typeUrl: string;
            value: Uint8Array;
        };
        undelegate(value: MsgUndelegate): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createValidator(value: MsgCreateValidator): {
            typeUrl: string;
            value: MsgCreateValidator;
        };
        updateValidator(value: MsgUpdateValidator): {
            typeUrl: string;
            value: MsgUpdateValidator;
        };
        delegate(value: MsgDelegate): {
            typeUrl: string;
            value: MsgDelegate;
        };
        undelegate(value: MsgUndelegate): {
            typeUrl: string;
            value: MsgUndelegate;
        };
    };
    toJSON: {
        createValidator(value: MsgCreateValidator): {
            typeUrl: string;
            value: unknown;
        };
        updateValidator(value: MsgUpdateValidator): {
            typeUrl: string;
            value: unknown;
        };
        delegate(value: MsgDelegate): {
            typeUrl: string;
            value: unknown;
        };
        undelegate(value: MsgUndelegate): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        createValidator(value: any): {
            typeUrl: string;
            value: MsgCreateValidator;
        };
        updateValidator(value: any): {
            typeUrl: string;
            value: MsgUpdateValidator;
        };
        delegate(value: any): {
            typeUrl: string;
            value: MsgDelegate;
        };
        undelegate(value: any): {
            typeUrl: string;
            value: MsgUndelegate;
        };
    };
    fromPartial: {
        createValidator(value: MsgCreateValidator): {
            typeUrl: string;
            value: MsgCreateValidator;
        };
        updateValidator(value: MsgUpdateValidator): {
            typeUrl: string;
            value: MsgUpdateValidator;
        };
        delegate(value: MsgDelegate): {
            typeUrl: string;
            value: MsgDelegate;
        };
        undelegate(value: MsgUndelegate): {
            typeUrl: string;
            value: MsgUndelegate;
        };
    };
};
