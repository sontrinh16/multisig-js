import { AminoMsg } from "@cosmjs/amino";
import { MsgSubmitCorkRequest, MsgScheduleCorkRequest } from "./tx";
export interface AminoMsgSubmitCorkRequest extends AminoMsg {
    type: "/cork.v1.MsgSubmitCorkRequest";
    value: {
        cork: {
            encoded_contract_call: Uint8Array;
            target_contract_address: string;
        };
        signer: string;
    };
}
export interface AminoMsgScheduleCorkRequest extends AminoMsg {
    type: "/cork.v1.MsgScheduleCorkRequest";
    value: {
        cork: {
            encoded_contract_call: Uint8Array;
            target_contract_address: string;
        };
        block_height: string;
        signer: string;
    };
}
export declare const AminoConverter: {
    "/cork.v1.MsgSubmitCorkRequest": {
        aminoType: string;
        toAmino: ({ cork, signer }: MsgSubmitCorkRequest) => AminoMsgSubmitCorkRequest["value"];
        fromAmino: ({ cork, signer }: AminoMsgSubmitCorkRequest["value"]) => MsgSubmitCorkRequest;
    };
    "/cork.v1.MsgScheduleCorkRequest": {
        aminoType: string;
        toAmino: ({ cork, blockHeight, signer }: MsgScheduleCorkRequest) => AminoMsgScheduleCorkRequest["value"];
        fromAmino: ({ cork, block_height, signer }: AminoMsgScheduleCorkRequest["value"]) => MsgScheduleCorkRequest;
    };
};
