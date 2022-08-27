import { Any } from "../../../google/protobuf/any";
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
export const AminoConverter = {
  "/secret.intertx.v1beta1.MsgRegisterAccount": {
    aminoType: "/secret.intertx.v1beta1.MsgRegisterAccount",
    toAmino: ({
      owner,
      connectionId
    }: MsgRegisterAccount): AminoMsgRegisterAccount["value"] => {
      return {
        owner,
        connection_id: connectionId
      };
    },
    fromAmino: ({
      owner,
      connection_id
    }: AminoMsgRegisterAccount["value"]): MsgRegisterAccount => {
      return {
        owner,
        connectionId: connection_id
      };
    }
  },
  "/secret.intertx.v1beta1.MsgSubmitTx": {
    aminoType: "/secret.intertx.v1beta1.MsgSubmitTx",
    toAmino: ({
      owner,
      connectionId,
      msg
    }: MsgSubmitTx): AminoMsgSubmitTx["value"] => {
      return {
        owner,
        connection_id: connectionId,
        msg: {
          type_url: msg.typeUrl,
          value: msg.value
        }
      };
    },
    fromAmino: ({
      owner,
      connection_id,
      msg
    }: AminoMsgSubmitTx["value"]): MsgSubmitTx => {
      return {
        owner,
        connectionId: connection_id,
        msg: {
          typeUrl: msg.type_url,
          value: msg.value
        }
      };
    }
  }
};