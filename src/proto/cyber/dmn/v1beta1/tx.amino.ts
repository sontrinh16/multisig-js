import { Trigger, Load } from "./types";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "@osmonauts/helpers";
import { MsgCreateThought, MsgForgetThought, MsgChangeThoughtParticle, MsgChangeThoughtName, MsgChangeThoughtInput, MsgChangeThoughtGasPrice, MsgChangeThoughtPeriod, MsgChangeThoughtBlock } from "./tx";
export interface AminoMsgCreateThought extends AminoMsg {
  type: "/cyber.dmn.v1beta1.MsgCreateThought";
  value: {
    program: string;
    trigger: {
      period: string;
      block: string;
    };
    load: {
      input: string;
      gas_price: {
        denom: string;
        amount: string;
      };
    };
    name: string;
    particle: string;
  };
}
export interface AminoMsgForgetThought extends AminoMsg {
  type: "/cyber.dmn.v1beta1.MsgForgetThought";
  value: {
    program: string;
    name: string;
  };
}
export interface AminoMsgChangeThoughtParticle extends AminoMsg {
  type: "/cyber.dmn.v1beta1.MsgChangeThoughtParticle";
  value: {
    program: string;
    name: string;
    particle: string;
  };
}
export interface AminoMsgChangeThoughtName extends AminoMsg {
  type: "/cyber.dmn.v1beta1.MsgChangeThoughtName";
  value: {
    program: string;
    name: string;
    new_name: string;
  };
}
export interface AminoMsgChangeThoughtInput extends AminoMsg {
  type: "/cyber.dmn.v1beta1.MsgChangeThoughtInput";
  value: {
    program: string;
    name: string;
    input: string;
  };
}
export interface AminoMsgChangeThoughtGasPrice extends AminoMsg {
  type: "/cyber.dmn.v1beta1.MsgChangeThoughtGasPrice";
  value: {
    program: string;
    name: string;
    gas_price: {
      denom: string;
      amount: string;
    };
  };
}
export interface AminoMsgChangeThoughtPeriod extends AminoMsg {
  type: "/cyber.dmn.v1beta1.MsgChangeThoughtPeriod";
  value: {
    program: string;
    name: string;
    period: string;
  };
}
export interface AminoMsgChangeThoughtBlock extends AminoMsg {
  type: "/cyber.dmn.v1beta1.MsgChangeThoughtBlock";
  value: {
    program: string;
    name: string;
    block: string;
  };
}
export const AminoConverter = {
  "/cyber.dmn.v1beta1.MsgCreateThought": {
    aminoType: "/cyber.dmn.v1beta1.MsgCreateThought",
    toAmino: ({
      program,
      trigger,
      load,
      name,
      particle
    }: MsgCreateThought): AminoMsgCreateThought["value"] => {
      return {
        program,
        trigger: {
          period: trigger.period.toString(),
          block: trigger.block.toString()
        },
        load: {
          input: load.input,
          gas_price: {
            denom: load.gasPrice.denom,
            amount: Long.fromNumber(load.gasPrice.amount).toString()
          }
        },
        name,
        particle
      };
    },
    fromAmino: ({
      program,
      trigger,
      load,
      name,
      particle
    }: AminoMsgCreateThought["value"]): MsgCreateThought => {
      return {
        program,
        trigger: {
          period: Long.fromString(trigger.period),
          block: Long.fromString(trigger.block)
        },
        load: {
          input: load.input,
          gasPrice: {
            denom: load.gas_price.denom,
            amount: load.gas_price.amount
          }
        },
        name,
        particle
      };
    }
  },
  "/cyber.dmn.v1beta1.MsgForgetThought": {
    aminoType: "/cyber.dmn.v1beta1.MsgForgetThought",
    toAmino: ({
      program,
      name
    }: MsgForgetThought): AminoMsgForgetThought["value"] => {
      return {
        program,
        name
      };
    },
    fromAmino: ({
      program,
      name
    }: AminoMsgForgetThought["value"]): MsgForgetThought => {
      return {
        program,
        name
      };
    }
  },
  "/cyber.dmn.v1beta1.MsgChangeThoughtParticle": {
    aminoType: "/cyber.dmn.v1beta1.MsgChangeThoughtParticle",
    toAmino: ({
      program,
      name,
      particle
    }: MsgChangeThoughtParticle): AminoMsgChangeThoughtParticle["value"] => {
      return {
        program,
        name,
        particle
      };
    },
    fromAmino: ({
      program,
      name,
      particle
    }: AminoMsgChangeThoughtParticle["value"]): MsgChangeThoughtParticle => {
      return {
        program,
        name,
        particle
      };
    }
  },
  "/cyber.dmn.v1beta1.MsgChangeThoughtName": {
    aminoType: "/cyber.dmn.v1beta1.MsgChangeThoughtName",
    toAmino: ({
      program,
      name,
      newName
    }: MsgChangeThoughtName): AminoMsgChangeThoughtName["value"] => {
      return {
        program,
        name,
        new_name: newName
      };
    },
    fromAmino: ({
      program,
      name,
      new_name
    }: AminoMsgChangeThoughtName["value"]): MsgChangeThoughtName => {
      return {
        program,
        name,
        newName: new_name
      };
    }
  },
  "/cyber.dmn.v1beta1.MsgChangeThoughtInput": {
    aminoType: "/cyber.dmn.v1beta1.MsgChangeThoughtInput",
    toAmino: ({
      program,
      name,
      input
    }: MsgChangeThoughtInput): AminoMsgChangeThoughtInput["value"] => {
      return {
        program,
        name,
        input
      };
    },
    fromAmino: ({
      program,
      name,
      input
    }: AminoMsgChangeThoughtInput["value"]): MsgChangeThoughtInput => {
      return {
        program,
        name,
        input
      };
    }
  },
  "/cyber.dmn.v1beta1.MsgChangeThoughtGasPrice": {
    aminoType: "/cyber.dmn.v1beta1.MsgChangeThoughtGasPrice",
    toAmino: ({
      program,
      name,
      gasPrice
    }: MsgChangeThoughtGasPrice): AminoMsgChangeThoughtGasPrice["value"] => {
      return {
        program,
        name,
        gas_price: {
          denom: gasPrice.denom,
          amount: Long.fromNumber(gasPrice.amount).toString()
        }
      };
    },
    fromAmino: ({
      program,
      name,
      gas_price
    }: AminoMsgChangeThoughtGasPrice["value"]): MsgChangeThoughtGasPrice => {
      return {
        program,
        name,
        gasPrice: {
          denom: gas_price.denom,
          amount: gas_price.amount
        }
      };
    }
  },
  "/cyber.dmn.v1beta1.MsgChangeThoughtPeriod": {
    aminoType: "/cyber.dmn.v1beta1.MsgChangeThoughtPeriod",
    toAmino: ({
      program,
      name,
      period
    }: MsgChangeThoughtPeriod): AminoMsgChangeThoughtPeriod["value"] => {
      return {
        program,
        name,
        period: period.toString()
      };
    },
    fromAmino: ({
      program,
      name,
      period
    }: AminoMsgChangeThoughtPeriod["value"]): MsgChangeThoughtPeriod => {
      return {
        program,
        name,
        period: Long.fromString(period)
      };
    }
  },
  "/cyber.dmn.v1beta1.MsgChangeThoughtBlock": {
    aminoType: "/cyber.dmn.v1beta1.MsgChangeThoughtBlock",
    toAmino: ({
      program,
      name,
      block
    }: MsgChangeThoughtBlock): AminoMsgChangeThoughtBlock["value"] => {
      return {
        program,
        name,
        block: block.toString()
      };
    },
    fromAmino: ({
      program,
      name,
      block
    }: AminoMsgChangeThoughtBlock["value"]): MsgChangeThoughtBlock => {
      return {
        program,
        name,
        block: Long.fromString(block)
      };
    }
  }
};