import { AminoMsg } from "@cosmjs/amino";
import { MsgAddDid, MsgAddCredential } from "./tx";
export interface AminoMsgAddDid extends AminoMsg {
    type: "/did.MsgAddDid";
    value: {
        did: string;
        pubKey: string;
    };
}
export interface AminoMsgAddCredential extends AminoMsg {
    type: "/did.MsgAddCredential";
    value: {
        did_credential: {
            cred_type: string[];
            issuer: string;
            issued: string;
            claim: {
                id: string;
                KYC_validated: boolean;
            };
        };
    };
}
export declare const AminoConverter: {
    "/did.MsgAddDid": {
        aminoType: string;
        toAmino: ({ did, pubKey }: MsgAddDid) => AminoMsgAddDid["value"];
        fromAmino: ({ did, pubKey }: AminoMsgAddDid["value"]) => MsgAddDid;
    };
    "/did.MsgAddCredential": {
        aminoType: string;
        toAmino: ({ didCredential }: MsgAddCredential) => AminoMsgAddCredential["value"];
        fromAmino: ({ did_credential }: AminoMsgAddCredential["value"]) => MsgAddCredential;
    };
};
