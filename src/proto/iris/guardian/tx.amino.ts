import { AminoMsg } from "@cosmjs/amino";
import { MsgAddSuper, MsgDeleteSuper } from "./tx";
export interface AminoMsgAddSuper extends AminoMsg {
  type: "/irishub.guardian.MsgAddSuper";
  value: {
    description: string;
    address: string;
    added_by: string;
  };
}
export interface AminoMsgDeleteSuper extends AminoMsg {
  type: "/irishub.guardian.MsgDeleteSuper";
  value: {
    address: string;
    deleted_by: string;
  };
}
export const AminoConverter = {
  "/irishub.guardian.MsgAddSuper": {
    aminoType: "/irishub.guardian.MsgAddSuper",
    toAmino: ({
      description,
      address,
      addedBy
    }: MsgAddSuper): AminoMsgAddSuper["value"] => {
      return {
        description,
        address,
        added_by: addedBy
      };
    },
    fromAmino: ({
      description,
      address,
      added_by
    }: AminoMsgAddSuper["value"]): MsgAddSuper => {
      return {
        description,
        address,
        addedBy: added_by
      };
    }
  },
  "/irishub.guardian.MsgDeleteSuper": {
    aminoType: "/irishub.guardian.MsgDeleteSuper",
    toAmino: ({
      address,
      deletedBy
    }: MsgDeleteSuper): AminoMsgDeleteSuper["value"] => {
      return {
        address,
        deleted_by: deletedBy
      };
    },
    fromAmino: ({
      address,
      deleted_by
    }: AminoMsgDeleteSuper["value"]): MsgDeleteSuper => {
      return {
        address,
        deletedBy: deleted_by
      };
    }
  }
};