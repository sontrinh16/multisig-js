import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgConvertCoin, MsgConvertERC20 } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        convertCoin(value: MsgConvertCoin): {
            typeUrl: string;
            value: Uint8Array;
        };
        convertERC20(value: MsgConvertERC20): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        convertCoin(value: MsgConvertCoin): {
            typeUrl: string;
            value: MsgConvertCoin;
        };
        convertERC20(value: MsgConvertERC20): {
            typeUrl: string;
            value: MsgConvertERC20;
        };
    };
    toJSON: {
        convertCoin(value: MsgConvertCoin): {
            typeUrl: string;
            value: unknown;
        };
        convertERC20(value: MsgConvertERC20): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        convertCoin(value: any): {
            typeUrl: string;
            value: MsgConvertCoin;
        };
        convertERC20(value: any): {
            typeUrl: string;
            value: MsgConvertERC20;
        };
    };
    fromPartial: {
        convertCoin(value: MsgConvertCoin): {
            typeUrl: string;
            value: MsgConvertCoin;
        };
        convertERC20(value: MsgConvertERC20): {
            typeUrl: string;
            value: MsgConvertERC20;
        };
    };
};
