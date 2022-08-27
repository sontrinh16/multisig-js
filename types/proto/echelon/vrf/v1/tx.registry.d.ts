import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateRandom } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createRandom(value: MsgCreateRandom): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createRandom(value: MsgCreateRandom): {
            typeUrl: string;
            value: MsgCreateRandom;
        };
    };
    toJSON: {
        createRandom(value: MsgCreateRandom): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        createRandom(value: any): {
            typeUrl: string;
            value: MsgCreateRandom;
        };
    };
    fromPartial: {
        createRandom(value: MsgCreateRandom): {
            typeUrl: string;
            value: MsgCreateRandom;
        };
    };
};
