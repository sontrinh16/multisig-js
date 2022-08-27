/// <reference types="long" />
import { AminoMsg } from "@cosmjs/amino";
import { MsgRegisterFeeSplit, MsgUpdateFeeSplit, MsgCancelFeeSplit } from "./tx";
export interface AminoMsgRegisterFeeSplit extends AminoMsg {
    type: "/evmos.feesplit.v1.MsgRegisterFeeSplit";
    value: {
        contract_address: string;
        deployer_address: string;
        withdrawer_address: string;
        nonces: Long[];
    };
}
export interface AminoMsgUpdateFeeSplit extends AminoMsg {
    type: "/evmos.feesplit.v1.MsgUpdateFeeSplit";
    value: {
        contract_address: string;
        deployer_address: string;
        withdrawer_address: string;
    };
}
export interface AminoMsgCancelFeeSplit extends AminoMsg {
    type: "/evmos.feesplit.v1.MsgCancelFeeSplit";
    value: {
        contract_address: string;
        deployer_address: string;
    };
}
export declare const AminoConverter: {
    "/evmos.feesplit.v1.MsgRegisterFeeSplit": {
        aminoType: string;
        toAmino: ({ contractAddress, deployerAddress, withdrawerAddress, nonces }: MsgRegisterFeeSplit) => AminoMsgRegisterFeeSplit["value"];
        fromAmino: ({ contract_address, deployer_address, withdrawer_address, nonces }: AminoMsgRegisterFeeSplit["value"]) => MsgRegisterFeeSplit;
    };
    "/evmos.feesplit.v1.MsgUpdateFeeSplit": {
        aminoType: string;
        toAmino: ({ contractAddress, deployerAddress, withdrawerAddress }: MsgUpdateFeeSplit) => AminoMsgUpdateFeeSplit["value"];
        fromAmino: ({ contract_address, deployer_address, withdrawer_address }: AminoMsgUpdateFeeSplit["value"]) => MsgUpdateFeeSplit;
    };
    "/evmos.feesplit.v1.MsgCancelFeeSplit": {
        aminoType: string;
        toAmino: ({ contractAddress, deployerAddress }: MsgCancelFeeSplit) => AminoMsgCancelFeeSplit["value"];
        fromAmino: ({ contract_address, deployer_address }: AminoMsgCancelFeeSplit["value"]) => MsgCancelFeeSplit;
    };
};
