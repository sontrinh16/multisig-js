import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgOpen, MsgClose, MsgForceClose, MsgUpdateParams, MsgUpdatePools, MsgWhitelist, MsgDewhitelist } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        open(value: MsgOpen): {
            typeUrl: string;
            value: Uint8Array;
        };
        close(value: MsgClose): {
            typeUrl: string;
            value: Uint8Array;
        };
        forceClose(value: MsgForceClose): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array;
        };
        updatePools(value: MsgUpdatePools): {
            typeUrl: string;
            value: Uint8Array;
        };
        whitelist(value: MsgWhitelist): {
            typeUrl: string;
            value: Uint8Array;
        };
        dewhitelist(value: MsgDewhitelist): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        open(value: MsgOpen): {
            typeUrl: string;
            value: MsgOpen;
        };
        close(value: MsgClose): {
            typeUrl: string;
            value: MsgClose;
        };
        forceClose(value: MsgForceClose): {
            typeUrl: string;
            value: MsgForceClose;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        updatePools(value: MsgUpdatePools): {
            typeUrl: string;
            value: MsgUpdatePools;
        };
        whitelist(value: MsgWhitelist): {
            typeUrl: string;
            value: MsgWhitelist;
        };
        dewhitelist(value: MsgDewhitelist): {
            typeUrl: string;
            value: MsgDewhitelist;
        };
    };
    toJSON: {
        open(value: MsgOpen): {
            typeUrl: string;
            value: unknown;
        };
        close(value: MsgClose): {
            typeUrl: string;
            value: unknown;
        };
        forceClose(value: MsgForceClose): {
            typeUrl: string;
            value: unknown;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: unknown;
        };
        updatePools(value: MsgUpdatePools): {
            typeUrl: string;
            value: unknown;
        };
        whitelist(value: MsgWhitelist): {
            typeUrl: string;
            value: unknown;
        };
        dewhitelist(value: MsgDewhitelist): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        open(value: any): {
            typeUrl: string;
            value: MsgOpen;
        };
        close(value: any): {
            typeUrl: string;
            value: MsgClose;
        };
        forceClose(value: any): {
            typeUrl: string;
            value: MsgForceClose;
        };
        updateParams(value: any): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        updatePools(value: any): {
            typeUrl: string;
            value: MsgUpdatePools;
        };
        whitelist(value: any): {
            typeUrl: string;
            value: MsgWhitelist;
        };
        dewhitelist(value: any): {
            typeUrl: string;
            value: MsgDewhitelist;
        };
    };
    fromPartial: {
        open(value: MsgOpen): {
            typeUrl: string;
            value: MsgOpen;
        };
        close(value: MsgClose): {
            typeUrl: string;
            value: MsgClose;
        };
        forceClose(value: MsgForceClose): {
            typeUrl: string;
            value: MsgForceClose;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        updatePools(value: MsgUpdatePools): {
            typeUrl: string;
            value: MsgUpdatePools;
        };
        whitelist(value: MsgWhitelist): {
            typeUrl: string;
            value: MsgWhitelist;
        };
        dewhitelist(value: MsgDewhitelist): {
            typeUrl: string;
            value: MsgDewhitelist;
        };
    };
};
