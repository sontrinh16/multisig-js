import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSaveProfile, MsgDeleteProfile } from "./msgs_profile";
import { MsgRequestDTagTransfer, MsgCancelDTagTransferRequest, MsgAcceptDTagTransferRequest, MsgRefuseDTagTransferRequest } from "./msgs_dtag_requests";
import { MsgLinkChainAccount, MsgUnlinkChainAccount, MsgSetDefaultExternalAddress } from "./msgs_chain_links";
import { MsgLinkApplication, MsgUnlinkApplication } from "./msgs_app_links";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        saveProfile(value: MsgSaveProfile): {
            typeUrl: string;
            value: Uint8Array;
        };
        deleteProfile(value: MsgDeleteProfile): {
            typeUrl: string;
            value: Uint8Array;
        };
        requestDTagTransfer(value: MsgRequestDTagTransfer): {
            typeUrl: string;
            value: Uint8Array;
        };
        cancelDTagTransferRequest(value: MsgCancelDTagTransferRequest): {
            typeUrl: string;
            value: Uint8Array;
        };
        acceptDTagTransferRequest(value: MsgAcceptDTagTransferRequest): {
            typeUrl: string;
            value: Uint8Array;
        };
        refuseDTagTransferRequest(value: MsgRefuseDTagTransferRequest): {
            typeUrl: string;
            value: Uint8Array;
        };
        linkChainAccount(value: MsgLinkChainAccount): {
            typeUrl: string;
            value: Uint8Array;
        };
        unlinkChainAccount(value: MsgUnlinkChainAccount): {
            typeUrl: string;
            value: Uint8Array;
        };
        setDefaultExternalAddress(value: MsgSetDefaultExternalAddress): {
            typeUrl: string;
            value: Uint8Array;
        };
        linkApplication(value: MsgLinkApplication): {
            typeUrl: string;
            value: Uint8Array;
        };
        unlinkApplication(value: MsgUnlinkApplication): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        saveProfile(value: MsgSaveProfile): {
            typeUrl: string;
            value: MsgSaveProfile;
        };
        deleteProfile(value: MsgDeleteProfile): {
            typeUrl: string;
            value: MsgDeleteProfile;
        };
        requestDTagTransfer(value: MsgRequestDTagTransfer): {
            typeUrl: string;
            value: MsgRequestDTagTransfer;
        };
        cancelDTagTransferRequest(value: MsgCancelDTagTransferRequest): {
            typeUrl: string;
            value: MsgCancelDTagTransferRequest;
        };
        acceptDTagTransferRequest(value: MsgAcceptDTagTransferRequest): {
            typeUrl: string;
            value: MsgAcceptDTagTransferRequest;
        };
        refuseDTagTransferRequest(value: MsgRefuseDTagTransferRequest): {
            typeUrl: string;
            value: MsgRefuseDTagTransferRequest;
        };
        linkChainAccount(value: MsgLinkChainAccount): {
            typeUrl: string;
            value: MsgLinkChainAccount;
        };
        unlinkChainAccount(value: MsgUnlinkChainAccount): {
            typeUrl: string;
            value: MsgUnlinkChainAccount;
        };
        setDefaultExternalAddress(value: MsgSetDefaultExternalAddress): {
            typeUrl: string;
            value: MsgSetDefaultExternalAddress;
        };
        linkApplication(value: MsgLinkApplication): {
            typeUrl: string;
            value: MsgLinkApplication;
        };
        unlinkApplication(value: MsgUnlinkApplication): {
            typeUrl: string;
            value: MsgUnlinkApplication;
        };
    };
    toJSON: {
        saveProfile(value: MsgSaveProfile): {
            typeUrl: string;
            value: unknown;
        };
        deleteProfile(value: MsgDeleteProfile): {
            typeUrl: string;
            value: unknown;
        };
        requestDTagTransfer(value: MsgRequestDTagTransfer): {
            typeUrl: string;
            value: unknown;
        };
        cancelDTagTransferRequest(value: MsgCancelDTagTransferRequest): {
            typeUrl: string;
            value: unknown;
        };
        acceptDTagTransferRequest(value: MsgAcceptDTagTransferRequest): {
            typeUrl: string;
            value: unknown;
        };
        refuseDTagTransferRequest(value: MsgRefuseDTagTransferRequest): {
            typeUrl: string;
            value: unknown;
        };
        linkChainAccount(value: MsgLinkChainAccount): {
            typeUrl: string;
            value: unknown;
        };
        unlinkChainAccount(value: MsgUnlinkChainAccount): {
            typeUrl: string;
            value: unknown;
        };
        setDefaultExternalAddress(value: MsgSetDefaultExternalAddress): {
            typeUrl: string;
            value: unknown;
        };
        linkApplication(value: MsgLinkApplication): {
            typeUrl: string;
            value: unknown;
        };
        unlinkApplication(value: MsgUnlinkApplication): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        saveProfile(value: any): {
            typeUrl: string;
            value: MsgSaveProfile;
        };
        deleteProfile(value: any): {
            typeUrl: string;
            value: MsgDeleteProfile;
        };
        requestDTagTransfer(value: any): {
            typeUrl: string;
            value: MsgRequestDTagTransfer;
        };
        cancelDTagTransferRequest(value: any): {
            typeUrl: string;
            value: MsgCancelDTagTransferRequest;
        };
        acceptDTagTransferRequest(value: any): {
            typeUrl: string;
            value: MsgAcceptDTagTransferRequest;
        };
        refuseDTagTransferRequest(value: any): {
            typeUrl: string;
            value: MsgRefuseDTagTransferRequest;
        };
        linkChainAccount(value: any): {
            typeUrl: string;
            value: MsgLinkChainAccount;
        };
        unlinkChainAccount(value: any): {
            typeUrl: string;
            value: MsgUnlinkChainAccount;
        };
        setDefaultExternalAddress(value: any): {
            typeUrl: string;
            value: MsgSetDefaultExternalAddress;
        };
        linkApplication(value: any): {
            typeUrl: string;
            value: MsgLinkApplication;
        };
        unlinkApplication(value: any): {
            typeUrl: string;
            value: MsgUnlinkApplication;
        };
    };
    fromPartial: {
        saveProfile(value: MsgSaveProfile): {
            typeUrl: string;
            value: MsgSaveProfile;
        };
        deleteProfile(value: MsgDeleteProfile): {
            typeUrl: string;
            value: MsgDeleteProfile;
        };
        requestDTagTransfer(value: MsgRequestDTagTransfer): {
            typeUrl: string;
            value: MsgRequestDTagTransfer;
        };
        cancelDTagTransferRequest(value: MsgCancelDTagTransferRequest): {
            typeUrl: string;
            value: MsgCancelDTagTransferRequest;
        };
        acceptDTagTransferRequest(value: MsgAcceptDTagTransferRequest): {
            typeUrl: string;
            value: MsgAcceptDTagTransferRequest;
        };
        refuseDTagTransferRequest(value: MsgRefuseDTagTransferRequest): {
            typeUrl: string;
            value: MsgRefuseDTagTransferRequest;
        };
        linkChainAccount(value: MsgLinkChainAccount): {
            typeUrl: string;
            value: MsgLinkChainAccount;
        };
        unlinkChainAccount(value: MsgUnlinkChainAccount): {
            typeUrl: string;
            value: MsgUnlinkChainAccount;
        };
        setDefaultExternalAddress(value: MsgSetDefaultExternalAddress): {
            typeUrl: string;
            value: MsgSetDefaultExternalAddress;
        };
        linkApplication(value: MsgLinkApplication): {
            typeUrl: string;
            value: MsgLinkApplication;
        };
        unlinkApplication(value: MsgUnlinkApplication): {
            typeUrl: string;
            value: MsgUnlinkApplication;
        };
    };
};
