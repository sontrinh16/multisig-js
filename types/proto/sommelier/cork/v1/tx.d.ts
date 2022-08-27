import { Cork } from "./cork";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** MsgSubmitCorkRequest - sdk.Msg for submitting calls to Ethereum through the gravity bridge contract */
export interface MsgSubmitCorkRequest {
    /** the cork to send across the bridge */
    cork: Cork;
    /** signer account address */
    signer: string;
}
export interface MsgSubmitCorkResponse {
}
/** MsgScheduleCorkRequest - sdk.Msg for scheduling a cork request for on or after a specific block height */
export interface MsgScheduleCorkRequest {
    /** the scheduled cork */
    cork: Cork;
    /** the block height that must be reached */
    blockHeight: Long;
    /** signer account address */
    signer: string;
}
export interface MsgScheduleCorkResponse {
}
export declare const MsgSubmitCorkRequest: {
    encode(message: MsgSubmitCorkRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitCorkRequest;
    fromJSON(object: any): MsgSubmitCorkRequest;
    toJSON(message: MsgSubmitCorkRequest): unknown;
    fromPartial(object: DeepPartial<MsgSubmitCorkRequest>): MsgSubmitCorkRequest;
};
export declare const MsgSubmitCorkResponse: {
    encode(_: MsgSubmitCorkResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitCorkResponse;
    fromJSON(_: any): MsgSubmitCorkResponse;
    toJSON(_: MsgSubmitCorkResponse): unknown;
    fromPartial(_: DeepPartial<MsgSubmitCorkResponse>): MsgSubmitCorkResponse;
};
export declare const MsgScheduleCorkRequest: {
    encode(message: MsgScheduleCorkRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgScheduleCorkRequest;
    fromJSON(object: any): MsgScheduleCorkRequest;
    toJSON(message: MsgScheduleCorkRequest): unknown;
    fromPartial(object: DeepPartial<MsgScheduleCorkRequest>): MsgScheduleCorkRequest;
};
export declare const MsgScheduleCorkResponse: {
    encode(_: MsgScheduleCorkResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgScheduleCorkResponse;
    fromJSON(_: any): MsgScheduleCorkResponse;
    toJSON(_: MsgScheduleCorkResponse): unknown;
    fromPartial(_: DeepPartial<MsgScheduleCorkResponse>): MsgScheduleCorkResponse;
};
