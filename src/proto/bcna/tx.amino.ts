import { AminoMsg } from "@cosmjs/amino";
import { Long } from "@osmonauts/helpers";
import { MsgCreateBitcannaid, MsgUpdateBitcannaid, MsgDeleteBitcannaid, MsgCreateSupplychain, MsgUpdateSupplychain, MsgDeleteSupplychain } from "./tx";
export interface AminoMsgCreateBitcannaid extends AminoMsg {
  type: "/BitCannaGlobal.bcna.bcna.MsgCreateBitcannaid";
  value: {
    creator: string;
    bcnaid: string;
    address: string;
  };
}
export interface AminoMsgUpdateBitcannaid extends AminoMsg {
  type: "/BitCannaGlobal.bcna.bcna.MsgUpdateBitcannaid";
  value: {
    creator: string;
    id: string;
    bcnaid: string;
    address: string;
  };
}
export interface AminoMsgDeleteBitcannaid extends AminoMsg {
  type: "/BitCannaGlobal.bcna.bcna.MsgDeleteBitcannaid";
  value: {
    creator: string;
    id: string;
  };
}
export interface AminoMsgCreateSupplychain extends AminoMsg {
  type: "/BitCannaGlobal.bcna.bcna.MsgCreateSupplychain";
  value: {
    creator: string;
    product: string;
    info: string;
    supplyinfo: string;
  };
}
export interface AminoMsgUpdateSupplychain extends AminoMsg {
  type: "/BitCannaGlobal.bcna.bcna.MsgUpdateSupplychain";
  value: {
    creator: string;
    id: string;
    product: string;
    info: string;
    supplyinfo: string;
  };
}
export interface AminoMsgDeleteSupplychain extends AminoMsg {
  type: "/BitCannaGlobal.bcna.bcna.MsgDeleteSupplychain";
  value: {
    creator: string;
    id: string;
  };
}
export const AminoConverter = {
  "/BitCannaGlobal.bcna.bcna.MsgCreateBitcannaid": {
    aminoType: "/BitCannaGlobal.bcna.bcna.MsgCreateBitcannaid",
    toAmino: ({
      creator,
      bcnaid,
      address
    }: MsgCreateBitcannaid): AminoMsgCreateBitcannaid["value"] => {
      return {
        creator,
        bcnaid,
        address
      };
    },
    fromAmino: ({
      creator,
      bcnaid,
      address
    }: AminoMsgCreateBitcannaid["value"]): MsgCreateBitcannaid => {
      return {
        creator,
        bcnaid,
        address
      };
    }
  },
  "/BitCannaGlobal.bcna.bcna.MsgUpdateBitcannaid": {
    aminoType: "/BitCannaGlobal.bcna.bcna.MsgUpdateBitcannaid",
    toAmino: ({
      creator,
      id,
      bcnaid,
      address
    }: MsgUpdateBitcannaid): AminoMsgUpdateBitcannaid["value"] => {
      return {
        creator,
        id: id.toString(),
        bcnaid,
        address
      };
    },
    fromAmino: ({
      creator,
      id,
      bcnaid,
      address
    }: AminoMsgUpdateBitcannaid["value"]): MsgUpdateBitcannaid => {
      return {
        creator,
        id: Long.fromString(id),
        bcnaid,
        address
      };
    }
  },
  "/BitCannaGlobal.bcna.bcna.MsgDeleteBitcannaid": {
    aminoType: "/BitCannaGlobal.bcna.bcna.MsgDeleteBitcannaid",
    toAmino: ({
      creator,
      id
    }: MsgDeleteBitcannaid): AminoMsgDeleteBitcannaid["value"] => {
      return {
        creator,
        id: id.toString()
      };
    },
    fromAmino: ({
      creator,
      id
    }: AminoMsgDeleteBitcannaid["value"]): MsgDeleteBitcannaid => {
      return {
        creator,
        id: Long.fromString(id)
      };
    }
  },
  "/BitCannaGlobal.bcna.bcna.MsgCreateSupplychain": {
    aminoType: "/BitCannaGlobal.bcna.bcna.MsgCreateSupplychain",
    toAmino: ({
      creator,
      product,
      info,
      supplyinfo
    }: MsgCreateSupplychain): AminoMsgCreateSupplychain["value"] => {
      return {
        creator,
        product,
        info,
        supplyinfo
      };
    },
    fromAmino: ({
      creator,
      product,
      info,
      supplyinfo
    }: AminoMsgCreateSupplychain["value"]): MsgCreateSupplychain => {
      return {
        creator,
        product,
        info,
        supplyinfo
      };
    }
  },
  "/BitCannaGlobal.bcna.bcna.MsgUpdateSupplychain": {
    aminoType: "/BitCannaGlobal.bcna.bcna.MsgUpdateSupplychain",
    toAmino: ({
      creator,
      id,
      product,
      info,
      supplyinfo
    }: MsgUpdateSupplychain): AminoMsgUpdateSupplychain["value"] => {
      return {
        creator,
        id: id.toString(),
        product,
        info,
        supplyinfo
      };
    },
    fromAmino: ({
      creator,
      id,
      product,
      info,
      supplyinfo
    }: AminoMsgUpdateSupplychain["value"]): MsgUpdateSupplychain => {
      return {
        creator,
        id: Long.fromString(id),
        product,
        info,
        supplyinfo
      };
    }
  },
  "/BitCannaGlobal.bcna.bcna.MsgDeleteSupplychain": {
    aminoType: "/BitCannaGlobal.bcna.bcna.MsgDeleteSupplychain",
    toAmino: ({
      creator,
      id
    }: MsgDeleteSupplychain): AminoMsgDeleteSupplychain["value"] => {
      return {
        creator,
        id: id.toString()
      };
    },
    fromAmino: ({
      creator,
      id
    }: AminoMsgDeleteSupplychain["value"]): MsgDeleteSupplychain => {
      return {
        creator,
        id: Long.fromString(id)
      };
    }
  }
};