import { FunctionParam } from "./bonds";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "@osmonauts/helpers";
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
export const AminoConverter = {
  "/bonds.MsgCreateBond": {
    aminoType: "/bonds.MsgCreateBond",
    toAmino: ({
      bondDid,
      token,
      name,
      description,
      functionType,
      functionParameters,
      creatorDid,
      controllerDid,
      reserveTokens,
      txFeePercentage,
      exitFeePercentage,
      feeAddress,
      reserveWithdrawalAddress,
      maxSupply,
      orderQuantityLimits,
      sanityRate,
      sanityMarginPercentage,
      allowSells,
      allowReserveWithdrawals,
      alphaBond,
      batchBlocks,
      outcomePayment
    }: MsgCreateBond): AminoMsgCreateBond["value"] => {
      return {
        bond_did: bondDid,
        token,
        name,
        description,
        function_type: functionType,
        function_parameters: functionParameters.map(el0 => ({
          param: el0.param,
          value: el0.value
        })),
        creator_did: creatorDid,
        controller_did: controllerDid,
        reserve_tokens: reserveTokens,
        tx_fee_percentage: txFeePercentage,
        exit_fee_percentage: exitFeePercentage,
        fee_address: feeAddress,
        reserve_withdrawal_address: reserveWithdrawalAddress,
        max_supply: {
          denom: maxSupply.denom,
          amount: Long.fromNumber(maxSupply.amount).toString()
        },
        order_quantity_limits: orderQuantityLimits.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        sanity_rate: sanityRate,
        sanity_margin_percentage: sanityMarginPercentage,
        allow_sells: allowSells,
        allow_reserve_withdrawals: allowReserveWithdrawals,
        alpha_bond: alphaBond,
        batch_blocks: batchBlocks,
        outcome_payment: outcomePayment
      };
    },
    fromAmino: ({
      bond_did,
      token,
      name,
      description,
      function_type,
      function_parameters,
      creator_did,
      controller_did,
      reserve_tokens,
      tx_fee_percentage,
      exit_fee_percentage,
      fee_address,
      reserve_withdrawal_address,
      max_supply,
      order_quantity_limits,
      sanity_rate,
      sanity_margin_percentage,
      allow_sells,
      allow_reserve_withdrawals,
      alpha_bond,
      batch_blocks,
      outcome_payment
    }: AminoMsgCreateBond["value"]): MsgCreateBond => {
      return {
        bondDid: bond_did,
        token,
        name,
        description,
        functionType: function_type,
        functionParameters: function_parameters.map(el0 => ({
          param: el0.param,
          value: el0.value
        })),
        creatorDid: creator_did,
        controllerDid: controller_did,
        reserveTokens: reserve_tokens,
        txFeePercentage: tx_fee_percentage,
        exitFeePercentage: exit_fee_percentage,
        feeAddress: fee_address,
        reserveWithdrawalAddress: reserve_withdrawal_address,
        maxSupply: {
          denom: max_supply.denom,
          amount: max_supply.amount
        },
        orderQuantityLimits: order_quantity_limits.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        sanityRate: sanity_rate,
        sanityMarginPercentage: sanity_margin_percentage,
        allowSells: allow_sells,
        allowReserveWithdrawals: allow_reserve_withdrawals,
        alphaBond: alpha_bond,
        batchBlocks: batch_blocks,
        outcomePayment: outcome_payment
      };
    }
  },
  "/bonds.MsgEditBond": {
    aminoType: "/bonds.MsgEditBond",
    toAmino: ({
      bondDid,
      name,
      description,
      orderQuantityLimits,
      sanityRate,
      sanityMarginPercentage,
      editorDid
    }: MsgEditBond): AminoMsgEditBond["value"] => {
      return {
        bond_did: bondDid,
        name,
        description,
        order_quantity_limits: orderQuantityLimits,
        sanity_rate: sanityRate,
        sanity_margin_percentage: sanityMarginPercentage,
        editor_did: editorDid
      };
    },
    fromAmino: ({
      bond_did,
      name,
      description,
      order_quantity_limits,
      sanity_rate,
      sanity_margin_percentage,
      editor_did
    }: AminoMsgEditBond["value"]): MsgEditBond => {
      return {
        bondDid: bond_did,
        name,
        description,
        orderQuantityLimits: order_quantity_limits,
        sanityRate: sanity_rate,
        sanityMarginPercentage: sanity_margin_percentage,
        editorDid: editor_did
      };
    }
  },
  "/bonds.MsgSetNextAlpha": {
    aminoType: "/bonds.MsgSetNextAlpha",
    toAmino: ({
      bondDid,
      alpha,
      editorDid
    }: MsgSetNextAlpha): AminoMsgSetNextAlpha["value"] => {
      return {
        bond_did: bondDid,
        alpha,
        editor_did: editorDid
      };
    },
    fromAmino: ({
      bond_did,
      alpha,
      editor_did
    }: AminoMsgSetNextAlpha["value"]): MsgSetNextAlpha => {
      return {
        bondDid: bond_did,
        alpha,
        editorDid: editor_did
      };
    }
  },
  "/bonds.MsgUpdateBondState": {
    aminoType: "/bonds.MsgUpdateBondState",
    toAmino: ({
      bondDid,
      state,
      editorDid
    }: MsgUpdateBondState): AminoMsgUpdateBondState["value"] => {
      return {
        bond_did: bondDid,
        state,
        editor_did: editorDid
      };
    },
    fromAmino: ({
      bond_did,
      state,
      editor_did
    }: AminoMsgUpdateBondState["value"]): MsgUpdateBondState => {
      return {
        bondDid: bond_did,
        state,
        editorDid: editor_did
      };
    }
  },
  "/bonds.MsgBuy": {
    aminoType: "/bonds.MsgBuy",
    toAmino: ({
      buyerDid,
      amount,
      maxPrices,
      bondDid
    }: MsgBuy): AminoMsgBuy["value"] => {
      return {
        buyer_did: buyerDid,
        amount: {
          denom: amount.denom,
          amount: Long.fromNumber(amount.amount).toString()
        },
        max_prices: maxPrices.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        bond_did: bondDid
      };
    },
    fromAmino: ({
      buyer_did,
      amount,
      max_prices,
      bond_did
    }: AminoMsgBuy["value"]): MsgBuy => {
      return {
        buyerDid: buyer_did,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        },
        maxPrices: max_prices.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        bondDid: bond_did
      };
    }
  },
  "/bonds.MsgSell": {
    aminoType: "/bonds.MsgSell",
    toAmino: ({
      sellerDid,
      amount,
      bondDid
    }: MsgSell): AminoMsgSell["value"] => {
      return {
        seller_did: sellerDid,
        amount: {
          denom: amount.denom,
          amount: Long.fromNumber(amount.amount).toString()
        },
        bond_did: bondDid
      };
    },
    fromAmino: ({
      seller_did,
      amount,
      bond_did
    }: AminoMsgSell["value"]): MsgSell => {
      return {
        sellerDid: seller_did,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        },
        bondDid: bond_did
      };
    }
  },
  "/bonds.MsgSwap": {
    aminoType: "/bonds.MsgSwap",
    toAmino: ({
      swapperDid,
      bondDid,
      from,
      toToken
    }: MsgSwap): AminoMsgSwap["value"] => {
      return {
        swapper_did: swapperDid,
        bond_did: bondDid,
        from: {
          denom: from.denom,
          amount: Long.fromNumber(from.amount).toString()
        },
        to_token: toToken
      };
    },
    fromAmino: ({
      swapper_did,
      bond_did,
      from,
      to_token
    }: AminoMsgSwap["value"]): MsgSwap => {
      return {
        swapperDid: swapper_did,
        bondDid: bond_did,
        from: {
          denom: from.denom,
          amount: from.amount
        },
        toToken: to_token
      };
    }
  },
  "/bonds.MsgMakeOutcomePayment": {
    aminoType: "/bonds.MsgMakeOutcomePayment",
    toAmino: ({
      senderDid,
      amount,
      bondDid
    }: MsgMakeOutcomePayment): AminoMsgMakeOutcomePayment["value"] => {
      return {
        sender_did: senderDid,
        amount,
        bond_did: bondDid
      };
    },
    fromAmino: ({
      sender_did,
      amount,
      bond_did
    }: AminoMsgMakeOutcomePayment["value"]): MsgMakeOutcomePayment => {
      return {
        senderDid: sender_did,
        amount,
        bondDid: bond_did
      };
    }
  },
  "/bonds.MsgWithdrawShare": {
    aminoType: "/bonds.MsgWithdrawShare",
    toAmino: ({
      recipientDid,
      bondDid
    }: MsgWithdrawShare): AminoMsgWithdrawShare["value"] => {
      return {
        recipient_did: recipientDid,
        bond_did: bondDid
      };
    },
    fromAmino: ({
      recipient_did,
      bond_did
    }: AminoMsgWithdrawShare["value"]): MsgWithdrawShare => {
      return {
        recipientDid: recipient_did,
        bondDid: bond_did
      };
    }
  },
  "/bonds.MsgWithdrawReserve": {
    aminoType: "/bonds.MsgWithdrawReserve",
    toAmino: ({
      withdrawerDid,
      amount,
      bondDid
    }: MsgWithdrawReserve): AminoMsgWithdrawReserve["value"] => {
      return {
        withdrawer_did: withdrawerDid,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        bond_did: bondDid
      };
    },
    fromAmino: ({
      withdrawer_did,
      amount,
      bond_did
    }: AminoMsgWithdrawReserve["value"]): MsgWithdrawReserve => {
      return {
        withdrawerDid: withdrawer_did,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        bondDid: bond_did
      };
    }
  }
};