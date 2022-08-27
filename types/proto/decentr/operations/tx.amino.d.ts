import { AminoMsg } from "@cosmjs/amino";
import { MsgDistributeRewards, MsgResetAccount, MsgMint, MsgBurn } from "./tx";
export interface AminoMsgDistributeRewards extends AminoMsg {
    type: "/operations.MsgDistributeRewards";
    value: {
        owner: string;
        rewards: {
            receiver: string;
            reward: {
                dec: string;
            };
        }[];
    };
}
export interface AminoMsgResetAccount extends AminoMsg {
    type: "/operations.MsgResetAccount";
    value: {
        owner: string;
        address: string;
    };
}
export interface AminoMsgMint extends AminoMsg {
    type: "/operations.MsgMint";
    value: {
        owner: string;
        coin: {
            denom: string;
            amount: string;
        };
    };
}
export interface AminoMsgBurn extends AminoMsg {
    type: "/operations.MsgBurn";
    value: {
        owner: string;
        coin: {
            denom: string;
            amount: string;
        };
    };
}
export declare const AminoConverter: {
    "/operations.MsgDistributeRewards": {
        aminoType: string;
        toAmino: ({ owner, rewards }: MsgDistributeRewards) => AminoMsgDistributeRewards["value"];
        fromAmino: ({ owner, rewards }: AminoMsgDistributeRewards["value"]) => MsgDistributeRewards;
    };
    "/operations.MsgResetAccount": {
        aminoType: string;
        toAmino: ({ owner, address }: MsgResetAccount) => AminoMsgResetAccount["value"];
        fromAmino: ({ owner, address }: AminoMsgResetAccount["value"]) => MsgResetAccount;
    };
    "/operations.MsgMint": {
        aminoType: string;
        toAmino: ({ owner, coin }: MsgMint) => AminoMsgMint["value"];
        fromAmino: ({ owner, coin }: AminoMsgMint["value"]) => MsgMint;
    };
    "/operations.MsgBurn": {
        aminoType: string;
        toAmino: ({ owner, coin }: MsgBurn) => AminoMsgBurn["value"];
        fromAmino: ({ owner, coin }: AminoMsgBurn["value"]) => MsgBurn;
    };
};
