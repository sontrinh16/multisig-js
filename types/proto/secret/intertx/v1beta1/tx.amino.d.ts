import { AminoMsg } from "@cosmjs/amino";
import { MsgRegisterAccount, MsgSubmitTx } from "./tx";
export interface AminoMsgRegisterAccount extends AminoMsg {
    type: "/secret.intertx.v1beta1.MsgRegisterAccount";
    value: {
        owner: string;
        connection_id: string;
    };
}
export interface AminoMsgSubmitTx extends AminoMsg {
    type: "/secret.intertx.v1beta1.MsgSubmitTx";
    value: {
        owner: Uint8Array;
        connection_id: string;
        msg: {
            type_url: string;
            value: Uint8Array;
        };
    };
}
export declare const AminoConverter: {
    "/secret.intertx.v1beta1.MsgRegisterAccount": {
        aminoType: string;
        toAmino: ({ owner, connectionId }: MsgRegisterAccount) => AminoMsgRegisterAccount["value"];
        fromAmino: ({ owner, connection_id }: AminoMsgRegisterAccount["value"]) => MsgRegisterAccount;
    };
    "/secret.intertx.v1beta1.MsgSubmitTx": {
        aminoType: string;
        toAmino: ({ owner, connectionId, msg }: MsgSubmitTx) => AminoMsgSubmitTx["value"];
        fromAmino: ({ owner, connection_id, msg }: AminoMsgSubmitTx["value"]) => MsgSubmitTx;
    };
};
