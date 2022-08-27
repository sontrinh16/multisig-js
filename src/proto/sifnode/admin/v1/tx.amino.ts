import { AdminAccount, adminTypeFromJSON } from "./types";
import { AminoMsg } from "@cosmjs/amino";
import { MsgAddAccount, MsgRemoveAccount } from "./tx";
export interface AminoMsgAddAccount extends AminoMsg {
  type: "/sifnode.admin.v1.MsgAddAccount";
  value: {
    signer: string;
    account: {
      admin_type: number;
      admin_address: string;
    };
  };
}
export interface AminoMsgRemoveAccount extends AminoMsg {
  type: "/sifnode.admin.v1.MsgRemoveAccount";
  value: {
    signer: string;
    account: {
      admin_type: number;
      admin_address: string;
    };
  };
}
export const AminoConverter = {
  "/sifnode.admin.v1.MsgAddAccount": {
    aminoType: "/sifnode.admin.v1.MsgAddAccount",
    toAmino: ({
      signer,
      account
    }: MsgAddAccount): AminoMsgAddAccount["value"] => {
      return {
        signer,
        account: {
          admin_type: account.adminType,
          admin_address: account.adminAddress
        }
      };
    },
    fromAmino: ({
      signer,
      account
    }: AminoMsgAddAccount["value"]): MsgAddAccount => {
      return {
        signer,
        account: {
          adminType: adminTypeFromJSON(account.admin_type),
          adminAddress: account.admin_address
        }
      };
    }
  },
  "/sifnode.admin.v1.MsgRemoveAccount": {
    aminoType: "/sifnode.admin.v1.MsgRemoveAccount",
    toAmino: ({
      signer,
      account
    }: MsgRemoveAccount): AminoMsgRemoveAccount["value"] => {
      return {
        signer,
        account: {
          admin_type: account.adminType,
          admin_address: account.adminAddress
        }
      };
    },
    fromAmino: ({
      signer,
      account
    }: AminoMsgRemoveAccount["value"]): MsgRemoveAccount => {
      return {
        signer,
        account: {
          adminType: adminTypeFromJSON(account.admin_type),
          adminAddress: account.admin_address
        }
      };
    }
  }
};