import { AminoMsg } from "@cosmjs/amino";
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
export declare const AminoConverter: {
    "/cyber.grid.v1beta1.MsgCreateRoute": {
        aminoType: string;
        toAmino: ({ source, destination, name }: MsgCreateRoute) => AminoMsgCreateRoute["value"];
        fromAmino: ({ source, destination, name }: AminoMsgCreateRoute["value"]) => MsgCreateRoute;
    };
    "/cyber.grid.v1beta1.MsgEditRoute": {
        aminoType: string;
        toAmino: ({ source, destination, value }: MsgEditRoute) => AminoMsgEditRoute["value"];
        fromAmino: ({ source, destination, value }: AminoMsgEditRoute["value"]) => MsgEditRoute;
    };
    "/cyber.grid.v1beta1.MsgDeleteRoute": {
        aminoType: string;
        toAmino: ({ source, destination }: MsgDeleteRoute) => AminoMsgDeleteRoute["value"];
        fromAmino: ({ source, destination }: AminoMsgDeleteRoute["value"]) => MsgDeleteRoute;
    };
    "/cyber.grid.v1beta1.MsgEditRouteName": {
        aminoType: string;
        toAmino: ({ source, destination, name }: MsgEditRouteName) => AminoMsgEditRouteName["value"];
        fromAmino: ({ source, destination, name }: AminoMsgEditRouteName["value"]) => MsgEditRouteName;
    };
};
