import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "@osmonauts/helpers";
import { MsgCreateRoute, MsgEditRoute, MsgDeleteRoute, MsgEditRouteName } from "./tx";
export interface AminoMsgCreateRoute extends AminoMsg {
  type: "/cyber.grid.v1beta1.MsgCreateRoute";
  value: {
    source: string;
    destination: string;
    name: string;
  };
}
export interface AminoMsgEditRoute extends AminoMsg {
  type: "/cyber.grid.v1beta1.MsgEditRoute";
  value: {
    source: string;
    destination: string;
    value: {
      denom: string;
      amount: string;
    };
  };
}
export interface AminoMsgDeleteRoute extends AminoMsg {
  type: "/cyber.grid.v1beta1.MsgDeleteRoute";
  value: {
    source: string;
    destination: string;
  };
}
export interface AminoMsgEditRouteName extends AminoMsg {
  type: "/cyber.grid.v1beta1.MsgEditRouteName";
  value: {
    source: string;
    destination: string;
    name: string;
  };
}
export const AminoConverter = {
  "/cyber.grid.v1beta1.MsgCreateRoute": {
    aminoType: "/cyber.grid.v1beta1.MsgCreateRoute",
    toAmino: ({
      source,
      destination,
      name
    }: MsgCreateRoute): AminoMsgCreateRoute["value"] => {
      return {
        source,
        destination,
        name
      };
    },
    fromAmino: ({
      source,
      destination,
      name
    }: AminoMsgCreateRoute["value"]): MsgCreateRoute => {
      return {
        source,
        destination,
        name
      };
    }
  },
  "/cyber.grid.v1beta1.MsgEditRoute": {
    aminoType: "/cyber.grid.v1beta1.MsgEditRoute",
    toAmino: ({
      source,
      destination,
      value
    }: MsgEditRoute): AminoMsgEditRoute["value"] => {
      return {
        source,
        destination,
        value: {
          denom: value.denom,
          amount: Long.fromNumber(value.amount).toString()
        }
      };
    },
    fromAmino: ({
      source,
      destination,
      value
    }: AminoMsgEditRoute["value"]): MsgEditRoute => {
      return {
        source,
        destination,
        value: {
          denom: value.denom,
          amount: value.amount
        }
      };
    }
  },
  "/cyber.grid.v1beta1.MsgDeleteRoute": {
    aminoType: "/cyber.grid.v1beta1.MsgDeleteRoute",
    toAmino: ({
      source,
      destination
    }: MsgDeleteRoute): AminoMsgDeleteRoute["value"] => {
      return {
        source,
        destination
      };
    },
    fromAmino: ({
      source,
      destination
    }: AminoMsgDeleteRoute["value"]): MsgDeleteRoute => {
      return {
        source,
        destination
      };
    }
  },
  "/cyber.grid.v1beta1.MsgEditRouteName": {
    aminoType: "/cyber.grid.v1beta1.MsgEditRouteName",
    toAmino: ({
      source,
      destination,
      name
    }: MsgEditRouteName): AminoMsgEditRouteName["value"] => {
      return {
        source,
        destination,
        name
      };
    },
    fromAmino: ({
      source,
      destination,
      name
    }: AminoMsgEditRouteName["value"]): MsgEditRouteName => {
      return {
        source,
        destination,
        name
      };
    }
  }
};