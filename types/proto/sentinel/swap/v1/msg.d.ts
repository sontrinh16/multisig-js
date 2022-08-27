import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/**
 * MsgSwapRequest defines the SDK message for swapping an ERC-20 token to the
 * native coin
 */
export interface MsgSwapRequest {
    from: string;
    txHash: Uint8Array;
    receiver: string;
    amount: string;
}
/** MsgSwapResponse defines the response of message MsgSwapRequest */
export interface MsgSwapResponse {
}
export declare const MsgSwapRequest: {
    encode(message: MsgSwapRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapRequest;
    fromJSON(object: any): MsgSwapRequest;
    toJSON(message: MsgSwapRequest): unknown;
    fromPartial(object: DeepPartial<MsgSwapRequest>): MsgSwapRequest;
};
export declare const MsgSwapResponse: {
    encode(_: MsgSwapResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapResponse;
    fromJSON(_: any): MsgSwapResponse;
    toJSON(_: MsgSwapResponse): unknown;
    fromPartial(_: DeepPartial<MsgSwapResponse>): MsgSwapResponse;
};
