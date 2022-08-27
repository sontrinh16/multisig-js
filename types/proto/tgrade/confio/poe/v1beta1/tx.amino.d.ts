import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateValidator, MsgUpdateValidator, MsgDelegate, MsgUndelegate } from "./tx";
export interface AminoMsgCreateValidator extends AminoMsg {
    type: "/confio.poe.v1beta1.MsgCreateValidator";
    value: {
        description: {
            moniker: string;
            identity: string;
            website: string;
            security_contact: string;
            details: string;
        };
        operator_address: string;
        pubkey: {
            type_url: string;
            value: Uint8Array;
        };
        amount: {
            denom: string;
            amount: string;
        };
        vesting_amount: {
            denom: string;
            amount: string;
        };
    };
}
export interface AminoMsgUpdateValidator extends AminoMsg {
    type: "/confio.poe.v1beta1.MsgUpdateValidator";
    value: {
        description: {
            moniker: string;
            identity: string;
            website: string;
            security_contact: string;
            details: string;
        };
        operator_address: string;
    };
}
export interface AminoMsgDelegate extends AminoMsg {
    type: "/confio.poe.v1beta1.MsgDelegate";
    value: {
        operator_address: string;
        amount: {
            denom: string;
            amount: string;
        };
        vesting_amount: {
            denom: string;
            amount: string;
        };
    };
}
export interface AminoMsgUndelegate extends AminoMsg {
    type: "/confio.poe.v1beta1.MsgUndelegate";
    value: {
        operator_address: string;
        amount: {
            denom: string;
            amount: string;
        };
    };
}
export declare const AminoConverter: {
    "/confio.poe.v1beta1.MsgCreateValidator": {
        aminoType: string;
        toAmino: ({ description, operatorAddress, pubkey, amount, vestingAmount }: MsgCreateValidator) => AminoMsgCreateValidator["value"];
        fromAmino: ({ description, operator_address, pubkey, amount, vesting_amount }: AminoMsgCreateValidator["value"]) => MsgCreateValidator;
    };
    "/confio.poe.v1beta1.MsgUpdateValidator": {
        aminoType: string;
        toAmino: ({ description, operatorAddress }: MsgUpdateValidator) => AminoMsgUpdateValidator["value"];
        fromAmino: ({ description, operator_address }: AminoMsgUpdateValidator["value"]) => MsgUpdateValidator;
    };
    "/confio.poe.v1beta1.MsgDelegate": {
        aminoType: string;
        toAmino: ({ operatorAddress, amount, vestingAmount }: MsgDelegate) => AminoMsgDelegate["value"];
        fromAmino: ({ operator_address, amount, vesting_amount }: AminoMsgDelegate["value"]) => MsgDelegate;
    };
    "/confio.poe.v1beta1.MsgUndelegate": {
        aminoType: string;
        toAmino: ({ operatorAddress, amount }: MsgUndelegate) => AminoMsgUndelegate["value"];
        fromAmino: ({ operator_address, amount }: AminoMsgUndelegate["value"]) => MsgUndelegate;
    };
};
