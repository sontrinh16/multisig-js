import { AminoMsg } from "@cosmjs/amino";
import { MsgRegister, MsgDeregister, MsgSetRegistry } from "./tx";
export interface AminoMsgRegister extends AminoMsg {
    type: "/sifnode.tokenregistry.v1.MsgRegister";
    value: {
        from: string;
        entry: {
            decimals: string;
            denom: string;
            base_denom: string;
            path: string;
            ibc_channel_id: string;
            ibc_counterparty_channel_id: string;
            display_name: string;
            display_symbol: string;
            network: string;
            address: string;
            external_symbol: string;
            transfer_limit: string;
            permissions: number[];
            unit_denom: string;
            ibc_counterparty_denom: string;
            ibc_counterparty_chain_id: string;
        };
    };
}
export interface AminoMsgDeregister extends AminoMsg {
    type: "/sifnode.tokenregistry.v1.MsgDeregister";
    value: {
        from: string;
        denom: string;
    };
}
export interface AminoMsgSetRegistry extends AminoMsg {
    type: "/sifnode.tokenregistry.v1.MsgSetRegistry";
    value: {
        from: string;
        registry: {
            entries: {
                decimals: string;
                denom: string;
                base_denom: string;
                path: string;
                ibc_channel_id: string;
                ibc_counterparty_channel_id: string;
                display_name: string;
                display_symbol: string;
                network: string;
                address: string;
                external_symbol: string;
                transfer_limit: string;
                permissions: number[];
                unit_denom: string;
                ibc_counterparty_denom: string;
                ibc_counterparty_chain_id: string;
            }[];
        };
    };
}
export declare const AminoConverter: {
    "/sifnode.tokenregistry.v1.MsgRegister": {
        aminoType: string;
        toAmino: ({ from, entry }: MsgRegister) => AminoMsgRegister["value"];
        fromAmino: ({ from, entry }: AminoMsgRegister["value"]) => MsgRegister;
    };
    "/sifnode.tokenregistry.v1.MsgDeregister": {
        aminoType: string;
        toAmino: ({ from, denom }: MsgDeregister) => AminoMsgDeregister["value"];
        fromAmino: ({ from, denom }: AminoMsgDeregister["value"]) => MsgDeregister;
    };
    "/sifnode.tokenregistry.v1.MsgSetRegistry": {
        aminoType: string;
        toAmino: ({ from, registry }: MsgSetRegistry) => AminoMsgSetRegistry["value"];
        fromAmino: ({ from, registry }: AminoMsgSetRegistry["value"]) => MsgSetRegistry;
    };
};
