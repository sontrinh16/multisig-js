import { Any } from "../../../google/protobuf/any";
import { Proof, ChainConfig } from "./models_chain_links";
import { Data } from "./models_app_links";
import { Height } from "../../../ibc/core/client/v1/client";
import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault, Long } from "@osmonauts/helpers";
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
export const AminoConverter = {
  "/desmos.profiles.v3.MsgSaveProfile": {
    aminoType: "/desmos.profiles.v3.MsgSaveProfile",
    toAmino: ({
      dtag,
      nickname,
      bio,
      profilePicture,
      coverPicture,
      creator
    }: MsgSaveProfile): AminoMsgSaveProfile["value"] => {
      return {
        dtag,
        nickname,
        bio,
        profile_picture: profilePicture,
        cover_picture: coverPicture,
        creator
      };
    },
    fromAmino: ({
      dtag,
      nickname,
      bio,
      profile_picture,
      cover_picture,
      creator
    }: AminoMsgSaveProfile["value"]): MsgSaveProfile => {
      return {
        dtag,
        nickname,
        bio,
        profilePicture: profile_picture,
        coverPicture: cover_picture,
        creator
      };
    }
  },
  "/desmos.profiles.v3.MsgDeleteProfile": {
    aminoType: "/desmos.profiles.v3.MsgDeleteProfile",
    toAmino: ({
      creator
    }: MsgDeleteProfile): AminoMsgDeleteProfile["value"] => {
      return {
        creator
      };
    },
    fromAmino: ({
      creator
    }: AminoMsgDeleteProfile["value"]): MsgDeleteProfile => {
      return {
        creator
      };
    }
  },
  "/desmos.profiles.v3.MsgRequestDTagTransfer": {
    aminoType: "/desmos.profiles.v3.MsgRequestDTagTransfer",
    toAmino: ({
      receiver,
      sender
    }: MsgRequestDTagTransfer): AminoMsgRequestDTagTransfer["value"] => {
      return {
        receiver,
        sender
      };
    },
    fromAmino: ({
      receiver,
      sender
    }: AminoMsgRequestDTagTransfer["value"]): MsgRequestDTagTransfer => {
      return {
        receiver,
        sender
      };
    }
  },
  "/desmos.profiles.v3.MsgCancelDTagTransferRequest": {
    aminoType: "/desmos.profiles.v3.MsgCancelDTagTransferRequest",
    toAmino: ({
      receiver,
      sender
    }: MsgCancelDTagTransferRequest): AminoMsgCancelDTagTransferRequest["value"] => {
      return {
        receiver,
        sender
      };
    },
    fromAmino: ({
      receiver,
      sender
    }: AminoMsgCancelDTagTransferRequest["value"]): MsgCancelDTagTransferRequest => {
      return {
        receiver,
        sender
      };
    }
  },
  "/desmos.profiles.v3.MsgAcceptDTagTransferRequest": {
    aminoType: "/desmos.profiles.v3.MsgAcceptDTagTransferRequest",
    toAmino: ({
      newDtag,
      sender,
      receiver
    }: MsgAcceptDTagTransferRequest): AminoMsgAcceptDTagTransferRequest["value"] => {
      return {
        new_dtag: newDtag,
        sender,
        receiver
      };
    },
    fromAmino: ({
      new_dtag,
      sender,
      receiver
    }: AminoMsgAcceptDTagTransferRequest["value"]): MsgAcceptDTagTransferRequest => {
      return {
        newDtag: new_dtag,
        sender,
        receiver
      };
    }
  },
  "/desmos.profiles.v3.MsgRefuseDTagTransferRequest": {
    aminoType: "/desmos.profiles.v3.MsgRefuseDTagTransferRequest",
    toAmino: ({
      sender,
      receiver
    }: MsgRefuseDTagTransferRequest): AminoMsgRefuseDTagTransferRequest["value"] => {
      return {
        sender,
        receiver
      };
    },
    fromAmino: ({
      sender,
      receiver
    }: AminoMsgRefuseDTagTransferRequest["value"]): MsgRefuseDTagTransferRequest => {
      return {
        sender,
        receiver
      };
    }
  },
  "/desmos.profiles.v3.MsgLinkChainAccount": {
    aminoType: "/desmos.profiles.v3.MsgLinkChainAccount",
    toAmino: ({
      chainAddress,
      proof,
      chainConfig,
      signer
    }: MsgLinkChainAccount): AminoMsgLinkChainAccount["value"] => {
      return {
        chain_address: {
          type_url: chainAddress.typeUrl,
          value: chainAddress.value
        },
        proof: {
          pub_key: {
            type_url: proof.pubKey.typeUrl,
            value: proof.pubKey.value
          },
          signature: {
            type_url: proof.signature.typeUrl,
            value: proof.signature.value
          },
          plain_text: proof.plainText
        },
        chain_config: {
          name: chainConfig.name
        },
        signer
      };
    },
    fromAmino: ({
      chain_address,
      proof,
      chain_config,
      signer
    }: AminoMsgLinkChainAccount["value"]): MsgLinkChainAccount => {
      return {
        chainAddress: {
          typeUrl: chain_address.type_url,
          value: chain_address.value
        },
        proof: {
          pubKey: {
            typeUrl: proof.pub_key.type_url,
            value: proof.pub_key.value
          },
          signature: {
            typeUrl: proof.signature.type_url,
            value: proof.signature.value
          },
          plainText: proof.plain_text
        },
        chainConfig: {
          name: chain_config.name
        },
        signer
      };
    }
  },
  "/desmos.profiles.v3.MsgUnlinkChainAccount": {
    aminoType: "/desmos.profiles.v3.MsgUnlinkChainAccount",
    toAmino: ({
      owner,
      chainName,
      target
    }: MsgUnlinkChainAccount): AminoMsgUnlinkChainAccount["value"] => {
      return {
        owner,
        chain_name: chainName,
        target
      };
    },
    fromAmino: ({
      owner,
      chain_name,
      target
    }: AminoMsgUnlinkChainAccount["value"]): MsgUnlinkChainAccount => {
      return {
        owner,
        chainName: chain_name,
        target
      };
    }
  },
  "/desmos.profiles.v3.MsgSetDefaultExternalAddress": {
    aminoType: "/desmos.profiles.v3.MsgSetDefaultExternalAddress",
    toAmino: ({
      chainName,
      target,
      signer
    }: MsgSetDefaultExternalAddress): AminoMsgSetDefaultExternalAddress["value"] => {
      return {
        chain_name: chainName,
        target,
        signer
      };
    },
    fromAmino: ({
      chain_name,
      target,
      signer
    }: AminoMsgSetDefaultExternalAddress["value"]): MsgSetDefaultExternalAddress => {
      return {
        chainName: chain_name,
        target,
        signer
      };
    }
  },
  "/desmos.profiles.v3.MsgLinkApplication": {
    aminoType: "/desmos.profiles.v3.MsgLinkApplication",
    toAmino: ({
      sender,
      linkData,
      callData,
      sourcePort,
      sourceChannel,
      timeoutHeight,
      timeoutTimestamp
    }: MsgLinkApplication): AminoMsgLinkApplication["value"] => {
      return {
        sender,
        link_data: {
          application: linkData.application,
          username: linkData.username
        },
        call_data: callData,
        source_port: sourcePort,
        source_channel: sourceChannel,
        timeout_height: timeoutHeight ? {
          revision_height: omitDefault(timeoutHeight.revisionHeight)?.toString(),
          revision_number: omitDefault(timeoutHeight.revisionNumber)?.toString()
        } : {},
        timeout_timestamp: timeoutTimestamp.toString()
      };
    },
    fromAmino: ({
      sender,
      link_data,
      call_data,
      source_port,
      source_channel,
      timeout_height,
      timeout_timestamp
    }: AminoMsgLinkApplication["value"]): MsgLinkApplication => {
      return {
        sender,
        linkData: {
          application: link_data.application,
          username: link_data.username
        },
        callData: call_data,
        sourcePort: source_port,
        sourceChannel: source_channel,
        timeoutHeight: timeout_height ? {
          revisionHeight: Long.fromString(timeout_height.revision_height || "0", true),
          revisionNumber: Long.fromString(timeout_height.revision_number || "0", true)
        } : undefined,
        timeoutTimestamp: Long.fromString(timeout_timestamp)
      };
    }
  },
  "/desmos.profiles.v3.MsgUnlinkApplication": {
    aminoType: "/desmos.profiles.v3.MsgUnlinkApplication",
    toAmino: ({
      application,
      username,
      signer
    }: MsgUnlinkApplication): AminoMsgUnlinkApplication["value"] => {
      return {
        application,
        username,
        signer
      };
    },
    fromAmino: ({
      application,
      username,
      signer
    }: AminoMsgUnlinkApplication["value"]): MsgUnlinkApplication => {
      return {
        application,
        username,
        signer
      };
    }
  }
};