import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgAddReaction, MsgRemoveReaction, MsgAddRegisteredReaction, MsgEditRegisteredReaction, MsgRemoveRegisteredReaction, MsgSetReactionsParams } from "./msgs";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        addReaction(value: MsgAddReaction): {
            typeUrl: string;
            value: Uint8Array;
        };
        removeReaction(value: MsgRemoveReaction): {
            typeUrl: string;
            value: Uint8Array;
        };
        addRegisteredReaction(value: MsgAddRegisteredReaction): {
            typeUrl: string;
            value: Uint8Array;
        };
        editRegisteredReaction(value: MsgEditRegisteredReaction): {
            typeUrl: string;
            value: Uint8Array;
        };
        removeRegisteredReaction(value: MsgRemoveRegisteredReaction): {
            typeUrl: string;
            value: Uint8Array;
        };
        setReactionsParams(value: MsgSetReactionsParams): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        addReaction(value: MsgAddReaction): {
            typeUrl: string;
            value: MsgAddReaction;
        };
        removeReaction(value: MsgRemoveReaction): {
            typeUrl: string;
            value: MsgRemoveReaction;
        };
        addRegisteredReaction(value: MsgAddRegisteredReaction): {
            typeUrl: string;
            value: MsgAddRegisteredReaction;
        };
        editRegisteredReaction(value: MsgEditRegisteredReaction): {
            typeUrl: string;
            value: MsgEditRegisteredReaction;
        };
        removeRegisteredReaction(value: MsgRemoveRegisteredReaction): {
            typeUrl: string;
            value: MsgRemoveRegisteredReaction;
        };
        setReactionsParams(value: MsgSetReactionsParams): {
            typeUrl: string;
            value: MsgSetReactionsParams;
        };
    };
    toJSON: {
        addReaction(value: MsgAddReaction): {
            typeUrl: string;
            value: unknown;
        };
        removeReaction(value: MsgRemoveReaction): {
            typeUrl: string;
            value: unknown;
        };
        addRegisteredReaction(value: MsgAddRegisteredReaction): {
            typeUrl: string;
            value: unknown;
        };
        editRegisteredReaction(value: MsgEditRegisteredReaction): {
            typeUrl: string;
            value: unknown;
        };
        removeRegisteredReaction(value: MsgRemoveRegisteredReaction): {
            typeUrl: string;
            value: unknown;
        };
        setReactionsParams(value: MsgSetReactionsParams): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        addReaction(value: any): {
            typeUrl: string;
            value: MsgAddReaction;
        };
        removeReaction(value: any): {
            typeUrl: string;
            value: MsgRemoveReaction;
        };
        addRegisteredReaction(value: any): {
            typeUrl: string;
            value: MsgAddRegisteredReaction;
        };
        editRegisteredReaction(value: any): {
            typeUrl: string;
            value: MsgEditRegisteredReaction;
        };
        removeRegisteredReaction(value: any): {
            typeUrl: string;
            value: MsgRemoveRegisteredReaction;
        };
        setReactionsParams(value: any): {
            typeUrl: string;
            value: MsgSetReactionsParams;
        };
    };
    fromPartial: {
        addReaction(value: MsgAddReaction): {
            typeUrl: string;
            value: MsgAddReaction;
        };
        removeReaction(value: MsgRemoveReaction): {
            typeUrl: string;
            value: MsgRemoveReaction;
        };
        addRegisteredReaction(value: MsgAddRegisteredReaction): {
            typeUrl: string;
            value: MsgAddRegisteredReaction;
        };
        editRegisteredReaction(value: MsgEditRegisteredReaction): {
            typeUrl: string;
            value: MsgEditRegisteredReaction;
        };
        removeRegisteredReaction(value: MsgRemoveRegisteredReaction): {
            typeUrl: string;
            value: MsgRemoveRegisteredReaction;
        };
        setReactionsParams(value: MsgSetReactionsParams): {
            typeUrl: string;
            value: MsgSetReactionsParams;
        };
    };
};
