import { Link } from "./types";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface MsgCyberlink {
    neuron: string;
    links: Link[];
}
export interface MsgCyberlinkResponse {
}
export declare const MsgCyberlink: {
    encode(message: MsgCyberlink, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCyberlink;
    fromJSON(object: any): MsgCyberlink;
    toJSON(message: MsgCyberlink): unknown;
    fromPartial(object: DeepPartial<MsgCyberlink>): MsgCyberlink;
};
export declare const MsgCyberlinkResponse: {
    encode(_: MsgCyberlinkResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCyberlinkResponse;
    fromJSON(_: any): MsgCyberlinkResponse;
    toJSON(_: MsgCyberlinkResponse): unknown;
    fromPartial(_: DeepPartial<MsgCyberlinkResponse>): MsgCyberlinkResponse;
};
