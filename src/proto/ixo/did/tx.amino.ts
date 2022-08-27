import { DidCredential, Claim } from "./did";
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
export const AminoConverter = {
  "/did.MsgAddDid": {
    aminoType: "/did.MsgAddDid",
    toAmino: ({
      did,
      pubKey
    }: MsgAddDid): AminoMsgAddDid["value"] => {
      return {
        did,
        pubKey
      };
    },
    fromAmino: ({
      did,
      pubKey
    }: AminoMsgAddDid["value"]): MsgAddDid => {
      return {
        did,
        pubKey
      };
    }
  },
  "/did.MsgAddCredential": {
    aminoType: "/did.MsgAddCredential",
    toAmino: ({
      didCredential
    }: MsgAddCredential): AminoMsgAddCredential["value"] => {
      return {
        did_credential: {
          cred_type: didCredential.credType,
          issuer: didCredential.issuer,
          issued: didCredential.issued,
          claim: {
            id: didCredential.claim.id,
            KYC_validated: didCredential.claim.KYCValidated
          }
        }
      };
    },
    fromAmino: ({
      did_credential
    }: AminoMsgAddCredential["value"]): MsgAddCredential => {
      return {
        didCredential: {
          credType: did_credential.cred_type,
          issuer: did_credential.issuer,
          issued: did_credential.issued,
          claim: {
            id: did_credential.claim.id,
            KYCValidated: did_credential.claim.KYC_validated
          }
        }
      };
    }
  }
};