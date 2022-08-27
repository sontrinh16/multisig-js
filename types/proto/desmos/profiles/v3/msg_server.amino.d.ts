import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight } from "@osmonauts/helpers";
import { MsgSaveProfile, MsgDeleteProfile } from "./msgs_profile";
import { MsgRequestDTagTransfer, MsgCancelDTagTransferRequest, MsgAcceptDTagTransferRequest, MsgRefuseDTagTransferRequest } from "./msgs_dtag_requests";
import { MsgLinkChainAccount, MsgUnlinkChainAccount, MsgSetDefaultExternalAddress } from "./msgs_chain_links";
import { MsgLinkApplication, MsgUnlinkApplication } from "./msgs_app_links";
export interface AminoMsgSaveProfile extends AminoMsg {
    type: "/desmos.profiles.v3.MsgSaveProfile";
    value: {
        dtag: string;
        nickname: string;
        bio: string;
        profile_picture: string;
        cover_picture: string;
        creator: string;
    };
}
export interface AminoMsgDeleteProfile extends AminoMsg {
    type: "/desmos.profiles.v3.MsgDeleteProfile";
    value: {
        creator: string;
    };
}
export interface AminoMsgRequestDTagTransfer extends AminoMsg {
    type: "/desmos.profiles.v3.MsgRequestDTagTransfer";
    value: {
        receiver: string;
        sender: string;
    };
}
export interface AminoMsgCancelDTagTransferRequest extends AminoMsg {
    type: "/desmos.profiles.v3.MsgCancelDTagTransferRequest";
    value: {
        receiver: string;
        sender: string;
    };
}
export interface AminoMsgAcceptDTagTransferRequest extends AminoMsg {
    type: "/desmos.profiles.v3.MsgAcceptDTagTransferRequest";
    value: {
        new_dtag: string;
        sender: string;
        receiver: string;
    };
}
export interface AminoMsgRefuseDTagTransferRequest extends AminoMsg {
    type: "/desmos.profiles.v3.MsgRefuseDTagTransferRequest";
    value: {
        sender: string;
        receiver: string;
    };
}
export interface AminoMsgLinkChainAccount extends AminoMsg {
    type: "/desmos.profiles.v3.MsgLinkChainAccount";
    value: {
        chain_address: {
            type_url: string;
            value: Uint8Array;
        };
        proof: {
            pub_key: {
                type_url: string;
                value: Uint8Array;
            };
            signature: {
                type_url: string;
                value: Uint8Array;
            };
            plain_text: string;
        };
        chain_config: {
            name: string;
        };
        signer: string;
    };
}
export interface AminoMsgUnlinkChainAccount extends AminoMsg {
    type: "/desmos.profiles.v3.MsgUnlinkChainAccount";
    value: {
        owner: string;
        chain_name: string;
        target: string;
    };
}
export interface AminoMsgSetDefaultExternalAddress extends AminoMsg {
    type: "/desmos.profiles.v3.MsgSetDefaultExternalAddress";
    value: {
        chain_name: string;
        target: string;
        signer: string;
    };
}
export interface AminoMsgLinkApplication extends AminoMsg {
    type: "/desmos.profiles.v3.MsgLinkApplication";
    value: {
        sender: string;
        link_data: {
            application: string;
            username: string;
        };
        call_data: string;
        source_port: string;
        source_channel: string;
        timeout_height: AminoHeight;
        timeout_timestamp: string;
    };
}
export interface AminoMsgUnlinkApplication extends AminoMsg {
    type: "/desmos.profiles.v3.MsgUnlinkApplication";
    value: {
        application: string;
        username: string;
        signer: string;
    };
}
export declare const AminoConverter: {
    "/desmos.profiles.v3.MsgSaveProfile": {
        aminoType: string;
        toAmino: ({ dtag, nickname, bio, profilePicture, coverPicture, creator }: MsgSaveProfile) => AminoMsgSaveProfile["value"];
        fromAmino: ({ dtag, nickname, bio, profile_picture, cover_picture, creator }: AminoMsgSaveProfile["value"]) => MsgSaveProfile;
    };
    "/desmos.profiles.v3.MsgDeleteProfile": {
        aminoType: string;
        toAmino: ({ creator }: MsgDeleteProfile) => AminoMsgDeleteProfile["value"];
        fromAmino: ({ creator }: AminoMsgDeleteProfile["value"]) => MsgDeleteProfile;
    };
    "/desmos.profiles.v3.MsgRequestDTagTransfer": {
        aminoType: string;
        toAmino: ({ receiver, sender }: MsgRequestDTagTransfer) => AminoMsgRequestDTagTransfer["value"];
        fromAmino: ({ receiver, sender }: AminoMsgRequestDTagTransfer["value"]) => MsgRequestDTagTransfer;
    };
    "/desmos.profiles.v3.MsgCancelDTagTransferRequest": {
        aminoType: string;
        toAmino: ({ receiver, sender }: MsgCancelDTagTransferRequest) => AminoMsgCancelDTagTransferRequest["value"];
        fromAmino: ({ receiver, sender }: AminoMsgCancelDTagTransferRequest["value"]) => MsgCancelDTagTransferRequest;
    };
    "/desmos.profiles.v3.MsgAcceptDTagTransferRequest": {
        aminoType: string;
        toAmino: ({ newDtag, sender, receiver }: MsgAcceptDTagTransferRequest) => AminoMsgAcceptDTagTransferRequest["value"];
        fromAmino: ({ new_dtag, sender, receiver }: AminoMsgAcceptDTagTransferRequest["value"]) => MsgAcceptDTagTransferRequest;
    };
    "/desmos.profiles.v3.MsgRefuseDTagTransferRequest": {
        aminoType: string;
        toAmino: ({ sender, receiver }: MsgRefuseDTagTransferRequest) => AminoMsgRefuseDTagTransferRequest["value"];
        fromAmino: ({ sender, receiver }: AminoMsgRefuseDTagTransferRequest["value"]) => MsgRefuseDTagTransferRequest;
    };
    "/desmos.profiles.v3.MsgLinkChainAccount": {
        aminoType: string;
        toAmino: ({ chainAddress, proof, chainConfig, signer }: MsgLinkChainAccount) => AminoMsgLinkChainAccount["value"];
        fromAmino: ({ chain_address, proof, chain_config, signer }: AminoMsgLinkChainAccount["value"]) => MsgLinkChainAccount;
    };
    "/desmos.profiles.v3.MsgUnlinkChainAccount": {
        aminoType: string;
        toAmino: ({ owner, chainName, target }: MsgUnlinkChainAccount) => AminoMsgUnlinkChainAccount["value"];
        fromAmino: ({ owner, chain_name, target }: AminoMsgUnlinkChainAccount["value"]) => MsgUnlinkChainAccount;
    };
    "/desmos.profiles.v3.MsgSetDefaultExternalAddress": {
        aminoType: string;
        toAmino: ({ chainName, target, signer }: MsgSetDefaultExternalAddress) => AminoMsgSetDefaultExternalAddress["value"];
        fromAmino: ({ chain_name, target, signer }: AminoMsgSetDefaultExternalAddress["value"]) => MsgSetDefaultExternalAddress;
    };
    "/desmos.profiles.v3.MsgLinkApplication": {
        aminoType: string;
        toAmino: ({ sender, linkData, callData, sourcePort, sourceChannel, timeoutHeight, timeoutTimestamp }: MsgLinkApplication) => AminoMsgLinkApplication["value"];
        fromAmino: ({ sender, link_data, call_data, source_port, source_channel, timeout_height, timeout_timestamp }: AminoMsgLinkApplication["value"]) => MsgLinkApplication;
    };
    "/desmos.profiles.v3.MsgUnlinkApplication": {
        aminoType: string;
        toAmino: ({ application, username, signer }: MsgUnlinkApplication) => AminoMsgUnlinkApplication["value"];
        fromAmino: ({ application, username, signer }: AminoMsgUnlinkApplication["value"]) => MsgUnlinkApplication;
    };
};
