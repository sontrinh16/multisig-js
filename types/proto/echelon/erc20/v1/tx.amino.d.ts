import { AminoMsg } from "@cosmjs/amino";
import { MsgConvertCoin, MsgConvertERC20 } from "./tx";
export interface AminoMsgConvertCoin extends AminoMsg {
    type: "/echelon.erc20.v1.MsgConvertCoin";
    value: {
        coin: {
            denom: string;
            amount: string;
        };
        receiver: string;
        sender: string;
    };
}
export interface AminoMsgConvertERC20 extends AminoMsg {
    type: "/echelon.erc20.v1.MsgConvertERC20";
    value: {
        contract_address: string;
        amount: string;
        receiver: string;
        sender: string;
    };
}
export declare const AminoConverter: {
    "/echelon.erc20.v1.MsgConvertCoin": {
        aminoType: string;
        toAmino: ({ coin, receiver, sender }: MsgConvertCoin) => AminoMsgConvertCoin["value"];
        fromAmino: ({ coin, receiver, sender }: AminoMsgConvertCoin["value"]) => MsgConvertCoin;
    };
    "/echelon.erc20.v1.MsgConvertERC20": {
        aminoType: string;
        toAmino: ({ contractAddress, amount, receiver, sender }: MsgConvertERC20) => AminoMsgConvertERC20["value"];
        fromAmino: ({ contract_address, amount, receiver, sender }: AminoMsgConvertERC20["value"]) => MsgConvertERC20;
    };
};
