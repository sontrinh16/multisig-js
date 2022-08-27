import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreate, MsgPut, MsgTake } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        create(value: MsgCreate): {
            typeUrl: string;
            value: Uint8Array;
        };
        put(value: MsgPut): {
            typeUrl: string;
            value: Uint8Array;
        };
        take(value: MsgTake): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        create(value: MsgCreate): {
            typeUrl: string;
            value: MsgCreate;
        };
        put(value: MsgPut): {
            typeUrl: string;
            value: MsgPut;
        };
        take(value: MsgTake): {
            typeUrl: string;
            value: MsgTake;
        };
    };
    toJSON: {
        create(value: MsgCreate): {
            typeUrl: string;
            value: unknown;
        };
        put(value: MsgPut): {
            typeUrl: string;
            value: unknown;
        };
        take(value: MsgTake): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        create(value: any): {
            typeUrl: string;
            value: MsgCreate;
        };
        put(value: any): {
            typeUrl: string;
            value: MsgPut;
        };
        take(value: any): {
            typeUrl: string;
            value: MsgTake;
        };
    };
    fromPartial: {
        create(value: MsgCreate): {
            typeUrl: string;
            value: MsgCreate;
        };
        put(value: MsgPut): {
            typeUrl: string;
            value: MsgPut;
        };
        take(value: MsgTake): {
            typeUrl: string;
            value: MsgTake;
        };
    };
};
