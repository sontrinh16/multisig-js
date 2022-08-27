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
export declare const AminoConverter: {
    "/regen.data.v1alpha2.MsgAnchorData": {
        aminoType: string;
        toAmino: ({ sender, hash }: MsgAnchorData) => AminoMsgAnchorData["value"];
        fromAmino: ({ sender, hash }: AminoMsgAnchorData["value"]) => MsgAnchorData;
    };
    "/regen.data.v1alpha2.MsgSignData": {
        aminoType: string;
        toAmino: ({ signers, hash }: MsgSignData) => AminoMsgSignData["value"];
        fromAmino: ({ signers, hash }: AminoMsgSignData["value"]) => MsgSignData;
    };
    "/regen.data.v1alpha2.MsgStoreRawData": {
        aminoType: string;
        toAmino: ({ sender, contentHash, content }: MsgStoreRawData) => AminoMsgStoreRawData["value"];
        fromAmino: ({ sender, content_hash, content }: AminoMsgStoreRawData["value"]) => MsgStoreRawData;
    };
};
