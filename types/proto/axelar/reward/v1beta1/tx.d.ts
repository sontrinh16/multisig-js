import { Any } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface RefundMsgRequest {
    sender: Uint8Array;
    innerMessage: Any;
}
export interface RefundMsgResponse {
    data: Uint8Array;
    log: string;
}
export declare const RefundMsgRequest: {
    encode(message: RefundMsgRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RefundMsgRequest;
    fromJSON(object: any): RefundMsgRequest;
    toJSON(message: RefundMsgRequest): unknown;
    fromPartial(object: DeepPartial<RefundMsgRequest>): RefundMsgRequest;
};
export declare const RefundMsgResponse: {
    encode(message: RefundMsgResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RefundMsgResponse;
    fromJSON(object: any): RefundMsgResponse;
    toJSON(message: RefundMsgResponse): unknown;
    fromPartial(object: DeepPartial<RefundMsgResponse>): RefundMsgResponse;
};
