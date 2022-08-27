import { AminoMsg } from "@cosmjs/amino";
import { MsgInvestmint } from "./tx";
export interface AminoMsgInvestmint extends AminoMsg {
    type: "/cyber.resources.v1beta1.MsgInvestmint";
    value: {
        neuron: string;
        amount: {
            denom: string;
            amount: string;
        };
        resource: string;
        length: string;
    };
}
export declare const AminoConverter: {
    "/cyber.resources.v1beta1.MsgInvestmint": {
        aminoType: string;
        toAmino: ({ neuron, amount, resource, length }: MsgInvestmint) => AminoMsgInvestmint["value"];
        fromAmino: ({ neuron, amount, resource, length }: AminoMsgInvestmint["value"]) => MsgInvestmint;
    };
};
