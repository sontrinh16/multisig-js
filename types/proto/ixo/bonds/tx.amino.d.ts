import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateBond, MsgEditBond, MsgSetNextAlpha, MsgUpdateBondState, MsgBuy, MsgSell, MsgSwap, MsgMakeOutcomePayment, MsgWithdrawShare, MsgWithdrawReserve } from "./tx";
export interface AminoMsgCreateBond extends AminoMsg {
    type: "/bonds.MsgCreateBond";
    value: {
        bond_did: string;
        token: string;
        name: string;
        description: string;
        function_type: string;
        function_parameters: {
            param: string;
            value: string;
        }[];
        creator_did: string;
        controller_did: string;
        reserve_tokens: string[];
        tx_fee_percentage: string;
        exit_fee_percentage: string;
        fee_address: string;
        reserve_withdrawal_address: string;
        max_supply: {
            denom: string;
            amount: string;
        };
        order_quantity_limits: {
            denom: string;
            amount: string;
        }[];
        sanity_rate: string;
        sanity_margin_percentage: string;
        allow_sells: boolean;
        allow_reserve_withdrawals: boolean;
        alpha_bond: boolean;
        batch_blocks: string;
        outcome_payment: string;
    };
}
export interface AminoMsgEditBond extends AminoMsg {
    type: "/bonds.MsgEditBond";
    value: {
        bond_did: string;
        name: string;
        description: string;
        order_quantity_limits: string;
        sanity_rate: string;
        sanity_margin_percentage: string;
        editor_did: string;
    };
}
export interface AminoMsgSetNextAlpha extends AminoMsg {
    type: "/bonds.MsgSetNextAlpha";
    value: {
        bond_did: string;
        alpha: string;
        editor_did: string;
    };
}
export interface AminoMsgUpdateBondState extends AminoMsg {
    type: "/bonds.MsgUpdateBondState";
    value: {
        bond_did: string;
        state: string;
        editor_did: string;
    };
}
export interface AminoMsgBuy extends AminoMsg {
    type: "/bonds.MsgBuy";
    value: {
        buyer_did: string;
        amount: {
            denom: string;
            amount: string;
        };
        max_prices: {
            denom: string;
            amount: string;
        }[];
        bond_did: string;
    };
}
export interface AminoMsgSell extends AminoMsg {
    type: "/bonds.MsgSell";
    value: {
        seller_did: string;
        amount: {
            denom: string;
            amount: string;
        };
        bond_did: string;
    };
}
export interface AminoMsgSwap extends AminoMsg {
    type: "/bonds.MsgSwap";
    value: {
        swapper_did: string;
        bond_did: string;
        from: {
            denom: string;
            amount: string;
        };
        to_token: string;
    };
}
export interface AminoMsgMakeOutcomePayment extends AminoMsg {
    type: "/bonds.MsgMakeOutcomePayment";
    value: {
        sender_did: string;
        amount: string;
        bond_did: string;
    };
}
export interface AminoMsgWithdrawShare extends AminoMsg {
    type: "/bonds.MsgWithdrawShare";
    value: {
        recipient_did: string;
        bond_did: string;
    };
}
export interface AminoMsgWithdrawReserve extends AminoMsg {
    type: "/bonds.MsgWithdrawReserve";
    value: {
        withdrawer_did: string;
        amount: {
            denom: string;
            amount: string;
        }[];
        bond_did: string;
    };
}
export declare const AminoConverter: {
    "/bonds.MsgCreateBond": {
        aminoType: string;
        toAmino: ({ bondDid, token, name, description, functionType, functionParameters, creatorDid, controllerDid, reserveTokens, txFeePercentage, exitFeePercentage, feeAddress, reserveWithdrawalAddress, maxSupply, orderQuantityLimits, sanityRate, sanityMarginPercentage, allowSells, allowReserveWithdrawals, alphaBond, batchBlocks, outcomePayment }: MsgCreateBond) => AminoMsgCreateBond["value"];
        fromAmino: ({ bond_did, token, name, description, function_type, function_parameters, creator_did, controller_did, reserve_tokens, tx_fee_percentage, exit_fee_percentage, fee_address, reserve_withdrawal_address, max_supply, order_quantity_limits, sanity_rate, sanity_margin_percentage, allow_sells, allow_reserve_withdrawals, alpha_bond, batch_blocks, outcome_payment }: AminoMsgCreateBond["value"]) => MsgCreateBond;
    };
    "/bonds.MsgEditBond": {
        aminoType: string;
        toAmino: ({ bondDid, name, description, orderQuantityLimits, sanityRate, sanityMarginPercentage, editorDid }: MsgEditBond) => AminoMsgEditBond["value"];
        fromAmino: ({ bond_did, name, description, order_quantity_limits, sanity_rate, sanity_margin_percentage, editor_did }: AminoMsgEditBond["value"]) => MsgEditBond;
    };
    "/bonds.MsgSetNextAlpha": {
        aminoType: string;
        toAmino: ({ bondDid, alpha, editorDid }: MsgSetNextAlpha) => AminoMsgSetNextAlpha["value"];
        fromAmino: ({ bond_did, alpha, editor_did }: AminoMsgSetNextAlpha["value"]) => MsgSetNextAlpha;
    };
    "/bonds.MsgUpdateBondState": {
        aminoType: string;
        toAmino: ({ bondDid, state, editorDid }: MsgUpdateBondState) => AminoMsgUpdateBondState["value"];
        fromAmino: ({ bond_did, state, editor_did }: AminoMsgUpdateBondState["value"]) => MsgUpdateBondState;
    };
    "/bonds.MsgBuy": {
        aminoType: string;
        toAmino: ({ buyerDid, amount, maxPrices, bondDid }: MsgBuy) => AminoMsgBuy["value"];
        fromAmino: ({ buyer_did, amount, max_prices, bond_did }: AminoMsgBuy["value"]) => MsgBuy;
    };
    "/bonds.MsgSell": {
        aminoType: string;
        toAmino: ({ sellerDid, amount, bondDid }: MsgSell) => AminoMsgSell["value"];
        fromAmino: ({ seller_did, amount, bond_did }: AminoMsgSell["value"]) => MsgSell;
    };
    "/bonds.MsgSwap": {
        aminoType: string;
        toAmino: ({ swapperDid, bondDid, from, toToken }: MsgSwap) => AminoMsgSwap["value"];
        fromAmino: ({ swapper_did, bond_did, from, to_token }: AminoMsgSwap["value"]) => MsgSwap;
    };
    "/bonds.MsgMakeOutcomePayment": {
        aminoType: string;
        toAmino: ({ senderDid, amount, bondDid }: MsgMakeOutcomePayment) => AminoMsgMakeOutcomePayment["value"];
        fromAmino: ({ sender_did, amount, bond_did }: AminoMsgMakeOutcomePayment["value"]) => MsgMakeOutcomePayment;
    };
    "/bonds.MsgWithdrawShare": {
        aminoType: string;
        toAmino: ({ recipientDid, bondDid }: MsgWithdrawShare) => AminoMsgWithdrawShare["value"];
        fromAmino: ({ recipient_did, bond_did }: AminoMsgWithdrawShare["value"]) => MsgWithdrawShare;
    };
    "/bonds.MsgWithdrawReserve": {
        aminoType: string;
        toAmino: ({ withdrawerDid, amount, bondDid }: MsgWithdrawReserve) => AminoMsgWithdrawReserve["value"];
        fromAmino: ({ withdrawer_did, amount, bond_did }: AminoMsgWithdrawReserve["value"]) => MsgWithdrawReserve;
    };
};
