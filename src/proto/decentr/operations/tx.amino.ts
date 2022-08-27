import { Coin, DecProto } from "../../cosmos/base/v1beta1/coin";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "@osmonauts/helpers";
import { Reward, MsgDistributeRewards, MsgResetAccount, MsgMint, MsgBurn } from "./tx";
export interface AminoMsgDistributeRewards extends AminoMsg {
  type: "/operations.MsgDistributeRewards";
  value: {
    owner: string;
    rewards: {
      receiver: string;
      reward: {
        dec: string;
      };
    }[];
  };
}
export interface AminoMsgResetAccount extends AminoMsg {
  type: "/operations.MsgResetAccount";
  value: {
    owner: string;
    address: string;
  };
}
export interface AminoMsgMint extends AminoMsg {
  type: "/operations.MsgMint";
  value: {
    owner: string;
    coin: {
      denom: string;
      amount: string;
    };
  };
}
export interface AminoMsgBurn extends AminoMsg {
  type: "/operations.MsgBurn";
  value: {
    owner: string;
    coin: {
      denom: string;
      amount: string;
    };
  };
}
export const AminoConverter = {
  "/operations.MsgDistributeRewards": {
    aminoType: "/operations.MsgDistributeRewards",
    toAmino: ({
      owner,
      rewards
    }: MsgDistributeRewards): AminoMsgDistributeRewards["value"] => {
      return {
        owner,
        rewards: rewards.map(el0 => ({
          receiver: el0.receiver,
          reward: {
            dec: el0.reward.dec
          }
        }))
      };
    },
    fromAmino: ({
      owner,
      rewards
    }: AminoMsgDistributeRewards["value"]): MsgDistributeRewards => {
      return {
        owner,
        rewards: rewards.map(el0 => ({
          receiver: el0.receiver,
          reward: {
            dec: el0.reward.dec
          }
        }))
      };
    }
  },
  "/operations.MsgResetAccount": {
    aminoType: "/operations.MsgResetAccount",
    toAmino: ({
      owner,
      address
    }: MsgResetAccount): AminoMsgResetAccount["value"] => {
      return {
        owner,
        address
      };
    },
    fromAmino: ({
      owner,
      address
    }: AminoMsgResetAccount["value"]): MsgResetAccount => {
      return {
        owner,
        address
      };
    }
  },
  "/operations.MsgMint": {
    aminoType: "/operations.MsgMint",
    toAmino: ({
      owner,
      coin
    }: MsgMint): AminoMsgMint["value"] => {
      return {
        owner,
        coin: {
          denom: coin.denom,
          amount: Long.fromNumber(coin.amount).toString()
        }
      };
    },
    fromAmino: ({
      owner,
      coin
    }: AminoMsgMint["value"]): MsgMint => {
      return {
        owner,
        coin: {
          denom: coin.denom,
          amount: coin.amount
        }
      };
    }
  },
  "/operations.MsgBurn": {
    aminoType: "/operations.MsgBurn",
    toAmino: ({
      owner,
      coin
    }: MsgBurn): AminoMsgBurn["value"] => {
      return {
        owner,
        coin: {
          denom: coin.denom,
          amount: Long.fromNumber(coin.amount).toString()
        }
      };
    },
    fromAmino: ({
      owner,
      coin
    }: AminoMsgBurn["value"]): MsgBurn => {
      return {
        owner,
        coin: {
          denom: coin.denom,
          amount: coin.amount
        }
      };
    }
  }
};