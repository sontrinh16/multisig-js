import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface MsgInvestmint {
    neuron: string;
    amount: Coin;
    resource: string;
    length: Long;
}
export interface MsgInvestmintResponse {
}
export declare const MsgInvestmint: {
    encode(message: MsgInvestmint, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgInvestmint;
    fromJSON(object: any): MsgInvestmint;
    toJSON(message: MsgInvestmint): unknown;
    fromPartial(object: DeepPartial<MsgInvestmint>): MsgInvestmint;
};
export declare const MsgInvestmintResponse: {
    encode(_: MsgInvestmintResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgInvestmintResponse;
    fromJSON(_: any): MsgInvestmintResponse;
    toJSON(_: MsgInvestmintResponse): unknown;
    fromPartial(_: DeepPartial<MsgInvestmintResponse>): MsgInvestmintResponse;
};
