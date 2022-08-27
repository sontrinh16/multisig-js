import { ContentHash, ContentHash_Graph, ContentHash_Raw, Raw, Graph, digestAlgorithmFromJSON, mediaTypeFromJSON, graphCanonicalizationAlgorithmFromJSON, graphMerkleTreeFromJSON } from "./types";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { AminoMsg } from "@cosmjs/amino";
import { MsgAnchorData, MsgSignData, MsgStoreRawData } from "./tx";
export interface AminoMsgAnchorData extends AminoMsg {
  type: "/regen.data.v1alpha2.MsgAnchorData";
  value: {
    sender: string;
    hash: {
      raw: {
        hash: Uint8Array;
        digest_algorithm: number;
        media_type: number;
      };
      graph: {
        hash: Uint8Array;
        digest_algorithm: number;
        canonicalization_algorithm: number;
        merkle_tree: number;
      };
    };
  };
}
export interface AminoMsgSignData extends AminoMsg {
  type: "/regen.data.v1alpha2.MsgSignData";
  value: {
    signers: string[];
    hash: {
      hash: Uint8Array;
      digest_algorithm: number;
      canonicalization_algorithm: number;
      merkle_tree: number;
    };
  };
}
export interface AminoMsgStoreRawData extends AminoMsg {
  type: "/regen.data.v1alpha2.MsgStoreRawData";
  value: {
    sender: string;
    content_hash: {
      hash: Uint8Array;
      digest_algorithm: number;
      media_type: number;
    };
    content: Uint8Array;
  };
}
export const AminoConverter = {
  "/regen.data.v1alpha2.MsgAnchorData": {
    aminoType: "/regen.data.v1alpha2.MsgAnchorData",
    toAmino: ({
      sender,
      hash
    }: MsgAnchorData): AminoMsgAnchorData["value"] => {
      return {
        sender,
        hash: {
          raw: {
            hash: hash.raw.hash,
            digest_algorithm: hash.raw.digestAlgorithm,
            media_type: hash.raw.mediaType
          },
          graph: {
            hash: hash.graph.hash,
            digest_algorithm: hash.graph.digestAlgorithm,
            canonicalization_algorithm: hash.graph.canonicalizationAlgorithm,
            merkle_tree: hash.graph.merkleTree
          }
        }
      };
    },
    fromAmino: ({
      sender,
      hash
    }: AminoMsgAnchorData["value"]): MsgAnchorData => {
      return {
        sender,
        hash: {
          raw: {
            hash: hash.raw.hash,
            digestAlgorithm: digestAlgorithmFromJSON(hash.raw.digest_algorithm),
            mediaType: mediaTypeFromJSON(hash.raw.media_type)
          },
          graph: {
            hash: hash.graph.hash,
            digestAlgorithm: digestAlgorithmFromJSON(hash.graph.digest_algorithm),
            canonicalizationAlgorithm: graphCanonicalizationAlgorithmFromJSON(hash.graph.canonicalization_algorithm),
            merkleTree: graphMerkleTreeFromJSON(hash.graph.merkle_tree)
          }
        }
      };
    }
  },
  "/regen.data.v1alpha2.MsgSignData": {
    aminoType: "/regen.data.v1alpha2.MsgSignData",
    toAmino: ({
      signers,
      hash
    }: MsgSignData): AminoMsgSignData["value"] => {
      return {
        signers,
        hash: {
          hash: hash.hash,
          digest_algorithm: hash.digestAlgorithm,
          canonicalization_algorithm: hash.canonicalizationAlgorithm,
          merkle_tree: hash.merkleTree
        }
      };
    },
    fromAmino: ({
      signers,
      hash
    }: AminoMsgSignData["value"]): MsgSignData => {
      return {
        signers,
        hash: {
          hash: hash.hash,
          digestAlgorithm: digestAlgorithmFromJSON(hash.digest_algorithm),
          canonicalizationAlgorithm: graphCanonicalizationAlgorithmFromJSON(hash.canonicalization_algorithm),
          merkleTree: graphMerkleTreeFromJSON(hash.merkle_tree)
        }
      };
    }
  },
  "/regen.data.v1alpha2.MsgStoreRawData": {
    aminoType: "/regen.data.v1alpha2.MsgStoreRawData",
    toAmino: ({
      sender,
      contentHash,
      content
    }: MsgStoreRawData): AminoMsgStoreRawData["value"] => {
      return {
        sender,
        content_hash: {
          hash: contentHash.hash,
          digest_algorithm: contentHash.digestAlgorithm,
          media_type: contentHash.mediaType
        },
        content
      };
    },
    fromAmino: ({
      sender,
      content_hash,
      content
    }: AminoMsgStoreRawData["value"]): MsgStoreRawData => {
      return {
        sender,
        contentHash: {
          hash: content_hash.hash,
          digestAlgorithm: digestAlgorithmFromJSON(content_hash.digest_algorithm),
          mediaType: mediaTypeFromJSON(content_hash.media_type)
        },
        content
      };
    }
  }
};