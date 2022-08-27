import { AminoMsg } from "@cosmjs/amino";
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
export declare const AminoConverter: {
    "/BitCannaGlobal.bcna.bcna.MsgCreateBitcannaid": {
        aminoType: string;
        toAmino: ({ creator, bcnaid, address }: MsgCreateBitcannaid) => AminoMsgCreateBitcannaid["value"];
        fromAmino: ({ creator, bcnaid, address }: AminoMsgCreateBitcannaid["value"]) => MsgCreateBitcannaid;
    };
    "/BitCannaGlobal.bcna.bcna.MsgUpdateBitcannaid": {
        aminoType: string;
        toAmino: ({ creator, id, bcnaid, address }: MsgUpdateBitcannaid) => AminoMsgUpdateBitcannaid["value"];
        fromAmino: ({ creator, id, bcnaid, address }: AminoMsgUpdateBitcannaid["value"]) => MsgUpdateBitcannaid;
    };
    "/BitCannaGlobal.bcna.bcna.MsgDeleteBitcannaid": {
        aminoType: string;
        toAmino: ({ creator, id }: MsgDeleteBitcannaid) => AminoMsgDeleteBitcannaid["value"];
        fromAmino: ({ creator, id }: AminoMsgDeleteBitcannaid["value"]) => MsgDeleteBitcannaid;
    };
    "/BitCannaGlobal.bcna.bcna.MsgCreateSupplychain": {
        aminoType: string;
        toAmino: ({ creator, product, info, supplyinfo }: MsgCreateSupplychain) => AminoMsgCreateSupplychain["value"];
        fromAmino: ({ creator, product, info, supplyinfo }: AminoMsgCreateSupplychain["value"]) => MsgCreateSupplychain;
    };
    "/BitCannaGlobal.bcna.bcna.MsgUpdateSupplychain": {
        aminoType: string;
        toAmino: ({ creator, id, product, info, supplyinfo }: MsgUpdateSupplychain) => AminoMsgUpdateSupplychain["value"];
        fromAmino: ({ creator, id, product, info, supplyinfo }: AminoMsgUpdateSupplychain["value"]) => MsgUpdateSupplychain;
    };
    "/BitCannaGlobal.bcna.bcna.MsgDeleteSupplychain": {
        aminoType: string;
        toAmino: ({ creator, id }: MsgDeleteSupplychain) => AminoMsgDeleteSupplychain["value"];
        fromAmino: ({ creator, id }: AminoMsgDeleteSupplychain["value"]) => MsgDeleteSupplychain;
    };
};
