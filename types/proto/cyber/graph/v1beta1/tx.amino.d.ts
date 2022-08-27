import { AminoMsg } from "@cosmjs/amino";
import { MsgCyberlink } from "./tx";
export interface AminoMsgCyberlink extends AminoMsg {
    type: "/cyber.graph.v1beta1.MsgCyberlink";
    value: {
        neuron: string;
        links: {
            from: string;
            to: string;
        }[];
    };
}
export declare const AminoConverter: {
    "/cyber.graph.v1beta1.MsgCyberlink": {
        aminoType: string;
        toAmino: ({ neuron, links }: MsgCyberlink) => AminoMsgCyberlink["value"];
        fromAmino: ({ neuron, links }: AminoMsgCyberlink["value"]) => MsgCyberlink;
    };
};
