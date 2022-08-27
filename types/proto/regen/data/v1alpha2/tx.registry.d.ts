import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgAnchorData, MsgSignData, MsgStoreRawData } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        anchorData(value: MsgAnchorData): {
            typeUrl: string;
            value: Uint8Array;
        };
        signData(value: MsgSignData): {
            typeUrl: string;
            value: Uint8Array;
        };
        storeRawData(value: MsgStoreRawData): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        anchorData(value: MsgAnchorData): {
            typeUrl: string;
            value: MsgAnchorData;
        };
        signData(value: MsgSignData): {
            typeUrl: string;
            value: MsgSignData;
        };
        storeRawData(value: MsgStoreRawData): {
            typeUrl: string;
            value: MsgStoreRawData;
        };
    };
    toJSON: {
        anchorData(value: MsgAnchorData): {
            typeUrl: string;
            value: unknown;
        };
        signData(value: MsgSignData): {
            typeUrl: string;
            value: unknown;
        };
        storeRawData(value: MsgStoreRawData): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        anchorData(value: any): {
            typeUrl: string;
            value: MsgAnchorData;
        };
        signData(value: any): {
            typeUrl: string;
            value: MsgSignData;
        };
        storeRawData(value: any): {
            typeUrl: string;
            value: MsgStoreRawData;
        };
    };
    fromPartial: {
        anchorData(value: MsgAnchorData): {
            typeUrl: string;
            value: MsgAnchorData;
        };
        signData(value: MsgSignData): {
            typeUrl: string;
            value: MsgSignData;
        };
        storeRawData(value: MsgStoreRawData): {
            typeUrl: string;
            value: MsgStoreRawData;
        };
    };
};
