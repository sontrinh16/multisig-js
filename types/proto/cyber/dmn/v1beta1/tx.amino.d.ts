import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateThought, MsgForgetThought, MsgChangeThoughtParticle, MsgChangeThoughtName, MsgChangeThoughtInput, MsgChangeThoughtGasPrice, MsgChangeThoughtPeriod, MsgChangeThoughtBlock } from "./tx";
export interface AminoMsgCreateThought extends AminoMsg {
    type: "/cyber.dmn.v1beta1.MsgCreateThought";
    value: {
        program: string;
        trigger: {
            period: string;
            block: string;
        };
        load: {
            input: string;
            gas_price: {
                denom: string;
                amount: string;
            };
        };
        name: string;
        particle: string;
    };
}
export interface AminoMsgForgetThought extends AminoMsg {
    type: "/cyber.dmn.v1beta1.MsgForgetThought";
    value: {
        program: string;
        name: string;
    };
}
export interface AminoMsgChangeThoughtParticle extends AminoMsg {
    type: "/cyber.dmn.v1beta1.MsgChangeThoughtParticle";
    value: {
        program: string;
        name: string;
        particle: string;
    };
}
export interface AminoMsgChangeThoughtName extends AminoMsg {
    type: "/cyber.dmn.v1beta1.MsgChangeThoughtName";
    value: {
        program: string;
        name: string;
        new_name: string;
    };
}
export interface AminoMsgChangeThoughtInput extends AminoMsg {
    type: "/cyber.dmn.v1beta1.MsgChangeThoughtInput";
    value: {
        program: string;
        name: string;
        input: string;
    };
}
export interface AminoMsgChangeThoughtGasPrice extends AminoMsg {
    type: "/cyber.dmn.v1beta1.MsgChangeThoughtGasPrice";
    value: {
        program: string;
        name: string;
        gas_price: {
            denom: string;
            amount: string;
        };
    };
}
export interface AminoMsgChangeThoughtPeriod extends AminoMsg {
    type: "/cyber.dmn.v1beta1.MsgChangeThoughtPeriod";
    value: {
        program: string;
        name: string;
        period: string;
    };
}
export interface AminoMsgChangeThoughtBlock extends AminoMsg {
    type: "/cyber.dmn.v1beta1.MsgChangeThoughtBlock";
    value: {
        program: string;
        name: string;
        block: string;
    };
}
export declare const AminoConverter: {
    "/cyber.dmn.v1beta1.MsgCreateThought": {
        aminoType: string;
        toAmino: ({ program, trigger, load, name, particle }: MsgCreateThought) => AminoMsgCreateThought["value"];
        fromAmino: ({ program, trigger, load, name, particle }: AminoMsgCreateThought["value"]) => MsgCreateThought;
    };
    "/cyber.dmn.v1beta1.MsgForgetThought": {
        aminoType: string;
        toAmino: ({ program, name }: MsgForgetThought) => AminoMsgForgetThought["value"];
        fromAmino: ({ program, name }: AminoMsgForgetThought["value"]) => MsgForgetThought;
    };
    "/cyber.dmn.v1beta1.MsgChangeThoughtParticle": {
        aminoType: string;
        toAmino: ({ program, name, particle }: MsgChangeThoughtParticle) => AminoMsgChangeThoughtParticle["value"];
        fromAmino: ({ program, name, particle }: AminoMsgChangeThoughtParticle["value"]) => MsgChangeThoughtParticle;
    };
    "/cyber.dmn.v1beta1.MsgChangeThoughtName": {
        aminoType: string;
        toAmino: ({ program, name, newName }: MsgChangeThoughtName) => AminoMsgChangeThoughtName["value"];
        fromAmino: ({ program, name, new_name }: AminoMsgChangeThoughtName["value"]) => MsgChangeThoughtName;
    };
    "/cyber.dmn.v1beta1.MsgChangeThoughtInput": {
        aminoType: string;
        toAmino: ({ program, name, input }: MsgChangeThoughtInput) => AminoMsgChangeThoughtInput["value"];
        fromAmino: ({ program, name, input }: AminoMsgChangeThoughtInput["value"]) => MsgChangeThoughtInput;
    };
    "/cyber.dmn.v1beta1.MsgChangeThoughtGasPrice": {
        aminoType: string;
        toAmino: ({ program, name, gasPrice }: MsgChangeThoughtGasPrice) => AminoMsgChangeThoughtGasPrice["value"];
        fromAmino: ({ program, name, gas_price }: AminoMsgChangeThoughtGasPrice["value"]) => MsgChangeThoughtGasPrice;
    };
    "/cyber.dmn.v1beta1.MsgChangeThoughtPeriod": {
        aminoType: string;
        toAmino: ({ program, name, period }: MsgChangeThoughtPeriod) => AminoMsgChangeThoughtPeriod["value"];
        fromAmino: ({ program, name, period }: AminoMsgChangeThoughtPeriod["value"]) => MsgChangeThoughtPeriod;
    };
    "/cyber.dmn.v1beta1.MsgChangeThoughtBlock": {
        aminoType: string;
        toAmino: ({ program, name, block }: MsgChangeThoughtBlock) => AminoMsgChangeThoughtBlock["value"];
        fromAmino: ({ program, name, block }: AminoMsgChangeThoughtBlock["value"]) => MsgChangeThoughtBlock;
    };
};
