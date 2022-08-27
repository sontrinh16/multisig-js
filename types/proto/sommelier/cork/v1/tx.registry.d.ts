import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSubmitCorkRequest, MsgScheduleCorkRequest } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        submitCork(value: MsgSubmitCorkRequest): {
            typeUrl: string;
            value: Uint8Array;
        };
        scheduleCork(value: MsgScheduleCorkRequest): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        submitCork(value: MsgSubmitCorkRequest): {
            typeUrl: string;
            value: MsgSubmitCorkRequest;
        };
        scheduleCork(value: MsgScheduleCorkRequest): {
            typeUrl: string;
            value: MsgScheduleCorkRequest;
        };
    };
    toJSON: {
        submitCork(value: MsgSubmitCorkRequest): {
            typeUrl: string;
            value: unknown;
        };
        scheduleCork(value: MsgScheduleCorkRequest): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        submitCork(value: any): {
            typeUrl: string;
            value: MsgSubmitCorkRequest;
        };
        scheduleCork(value: any): {
            typeUrl: string;
            value: MsgScheduleCorkRequest;
        };
    };
    fromPartial: {
        submitCork(value: MsgSubmitCorkRequest): {
            typeUrl: string;
            value: MsgSubmitCorkRequest;
        };
        scheduleCork(value: MsgScheduleCorkRequest): {
            typeUrl: string;
            value: MsgScheduleCorkRequest;
        };
    };
};
