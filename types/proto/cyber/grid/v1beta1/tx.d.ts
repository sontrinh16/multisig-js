import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface MsgCreateRoute {
    source: string;
    destination: string;
    name: string;
}
export interface MsgEditRoute {
    source: string;
    destination: string;
    value: Coin;
}
export interface MsgDeleteRoute {
    source: string;
    destination: string;
}
export interface MsgEditRouteName {
    source: string;
    destination: string;
    name: string;
}
export interface MsgCreateRouteResponse {
}
export interface MsgEditRouteResponse {
}
export interface MsgDeleteRouteResponse {
}
export interface MsgEditRouteNameResponse {
}
export declare const MsgCreateRoute: {
    encode(message: MsgCreateRoute, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateRoute;
    fromJSON(object: any): MsgCreateRoute;
    toJSON(message: MsgCreateRoute): unknown;
    fromPartial(object: DeepPartial<MsgCreateRoute>): MsgCreateRoute;
};
export declare const MsgEditRoute: {
    encode(message: MsgEditRoute, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditRoute;
    fromJSON(object: any): MsgEditRoute;
    toJSON(message: MsgEditRoute): unknown;
    fromPartial(object: DeepPartial<MsgEditRoute>): MsgEditRoute;
};
export declare const MsgDeleteRoute: {
    encode(message: MsgDeleteRoute, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteRoute;
    fromJSON(object: any): MsgDeleteRoute;
    toJSON(message: MsgDeleteRoute): unknown;
    fromPartial(object: DeepPartial<MsgDeleteRoute>): MsgDeleteRoute;
};
export declare const MsgEditRouteName: {
    encode(message: MsgEditRouteName, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditRouteName;
    fromJSON(object: any): MsgEditRouteName;
    toJSON(message: MsgEditRouteName): unknown;
    fromPartial(object: DeepPartial<MsgEditRouteName>): MsgEditRouteName;
};
export declare const MsgCreateRouteResponse: {
    encode(_: MsgCreateRouteResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateRouteResponse;
    fromJSON(_: any): MsgCreateRouteResponse;
    toJSON(_: MsgCreateRouteResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateRouteResponse>): MsgCreateRouteResponse;
};
export declare const MsgEditRouteResponse: {
    encode(_: MsgEditRouteResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditRouteResponse;
    fromJSON(_: any): MsgEditRouteResponse;
    toJSON(_: MsgEditRouteResponse): unknown;
    fromPartial(_: DeepPartial<MsgEditRouteResponse>): MsgEditRouteResponse;
};
export declare const MsgDeleteRouteResponse: {
    encode(_: MsgDeleteRouteResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteRouteResponse;
    fromJSON(_: any): MsgDeleteRouteResponse;
    toJSON(_: MsgDeleteRouteResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteRouteResponse>): MsgDeleteRouteResponse;
};
export declare const MsgEditRouteNameResponse: {
    encode(_: MsgEditRouteNameResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditRouteNameResponse;
    fromJSON(_: any): MsgEditRouteNameResponse;
    toJSON(_: MsgEditRouteNameResponse): unknown;
    fromPartial(_: DeepPartial<MsgEditRouteNameResponse>): MsgEditRouteNameResponse;
};
