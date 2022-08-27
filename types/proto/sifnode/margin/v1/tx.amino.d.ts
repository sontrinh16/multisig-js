import { AminoMsg } from "@cosmjs/amino";
import { MsgOpen, MsgClose, MsgForceClose, MsgUpdateParams, MsgUpdatePools, MsgWhitelist, MsgDewhitelist } from "./tx";
export interface AminoMsgOpen extends AminoMsg {
    type: "/sifnode.margin.v1.MsgOpen";
    value: {
        signer: string;
        collateral_asset: string;
        collateral_amount: string;
        borrow_asset: string;
        position: number;
        leverage: string;
    };
}
export interface AminoMsgClose extends AminoMsg {
    type: "/sifnode.margin.v1.MsgClose";
    value: {
        signer: string;
        id: string;
    };
}
export interface AminoMsgForceClose extends AminoMsg {
    type: "/sifnode.margin.v1.MsgForceClose";
    value: {
        signer: string;
        mtp_address: string;
        id: string;
    };
}
export interface AminoMsgUpdateParams extends AminoMsg {
    type: "/sifnode.margin.v1.MsgUpdateParams";
    value: {
        signer: string;
        params: {
            leverage_max: string;
            interest_rate_max: string;
            interest_rate_min: string;
            interest_rate_increase: string;
            interest_rate_decrease: string;
            health_gain_factor: string;
            epoch_length: string;
            pools: string[];
            force_close_threshold: string;
            removal_queue_threshold: string;
            max_open_positions: string;
            pool_open_threshold: string;
            force_close_fund_percentage: string;
            force_close_insurance_fund_address: string;
            incremental_interest_payment_fund_percentage: string;
            incremental_interest_payment_insurance_fund_address: string;
            sq_modifier: string;
            safety_factor: string;
            closed_pools: string[];
            incremental_interest_payment_enabled: boolean;
            whitelisting_enabled: boolean;
        };
    };
}
export interface AminoMsgUpdatePools extends AminoMsg {
    type: "/sifnode.margin.v1.MsgUpdatePools";
    value: {
        signer: string;
        pools: string[];
        closed_pools: string[];
    };
}
export interface AminoMsgWhitelist extends AminoMsg {
    type: "/sifnode.margin.v1.MsgWhitelist";
    value: {
        signer: string;
        whitelisted_address: string;
    };
}
export interface AminoMsgDewhitelist extends AminoMsg {
    type: "/sifnode.margin.v1.MsgDewhitelist";
    value: {
        signer: string;
        whitelisted_address: string;
    };
}
export declare const AminoConverter: {
    "/sifnode.margin.v1.MsgOpen": {
        aminoType: string;
        toAmino: ({ signer, collateralAsset, collateralAmount, borrowAsset, position, leverage }: MsgOpen) => AminoMsgOpen["value"];
        fromAmino: ({ signer, collateral_asset, collateral_amount, borrow_asset, position, leverage }: AminoMsgOpen["value"]) => MsgOpen;
    };
    "/sifnode.margin.v1.MsgClose": {
        aminoType: string;
        toAmino: ({ signer, id }: MsgClose) => AminoMsgClose["value"];
        fromAmino: ({ signer, id }: AminoMsgClose["value"]) => MsgClose;
    };
    "/sifnode.margin.v1.MsgForceClose": {
        aminoType: string;
        toAmino: ({ signer, mtpAddress, id }: MsgForceClose) => AminoMsgForceClose["value"];
        fromAmino: ({ signer, mtp_address, id }: AminoMsgForceClose["value"]) => MsgForceClose;
    };
    "/sifnode.margin.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ signer, params }: MsgUpdateParams) => AminoMsgUpdateParams["value"];
        fromAmino: ({ signer, params }: AminoMsgUpdateParams["value"]) => MsgUpdateParams;
    };
    "/sifnode.margin.v1.MsgUpdatePools": {
        aminoType: string;
        toAmino: ({ signer, pools, closedPools }: MsgUpdatePools) => AminoMsgUpdatePools["value"];
        fromAmino: ({ signer, pools, closed_pools }: AminoMsgUpdatePools["value"]) => MsgUpdatePools;
    };
    "/sifnode.margin.v1.MsgWhitelist": {
        aminoType: string;
        toAmino: ({ signer, whitelistedAddress }: MsgWhitelist) => AminoMsgWhitelist["value"];
        fromAmino: ({ signer, whitelisted_address }: AminoMsgWhitelist["value"]) => MsgWhitelist;
    };
    "/sifnode.margin.v1.MsgDewhitelist": {
        aminoType: string;
        toAmino: ({ signer, whitelistedAddress }: MsgDewhitelist) => AminoMsgDewhitelist["value"];
        fromAmino: ({ signer, whitelisted_address }: AminoMsgDewhitelist["value"]) => MsgDewhitelist;
    };
};
