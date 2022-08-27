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
export declare const AminoConverter: {
    "/sifnode.admin.v1.MsgAddAccount": {
        aminoType: string;
        toAmino: ({ signer, account }: MsgAddAccount) => AminoMsgAddAccount["value"];
        fromAmino: ({ signer, account }: AminoMsgAddAccount["value"]) => MsgAddAccount;
    };
    "/sifnode.admin.v1.MsgRemoveAccount": {
        aminoType: string;
        toAmino: ({ signer, account }: MsgRemoveAccount) => AminoMsgRemoveAccount["value"];
        fromAmino: ({ signer, account }: AminoMsgRemoveAccount["value"]) => MsgRemoveAccount;
    };
};
