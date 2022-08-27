import { Link } from "./types";
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
export const AminoConverter = {
  "/cyber.graph.v1beta1.MsgCyberlink": {
    aminoType: "/cyber.graph.v1beta1.MsgCyberlink",
    toAmino: ({
      neuron,
      links
    }: MsgCyberlink): AminoMsgCyberlink["value"] => {
      return {
        neuron,
        links: links.map(el0 => ({
          from: el0.from,
          to: el0.to
        }))
      };
    },
    fromAmino: ({
      neuron,
      links
    }: AminoMsgCyberlink["value"]): MsgCyberlink => {
      return {
        neuron,
        links: links.map(el0 => ({
          from: el0.from,
          to: el0.to
        }))
      };
    }
  }
};