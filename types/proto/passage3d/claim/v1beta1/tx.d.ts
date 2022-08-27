import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** MsgInitialClaim defines request message for InitialClaim RPC request */
export interface MsgClaim {
    sender: string;
    claimAction: string;
}
/** MsgInitialClaimResponse defines response for InitialClaim RPC request */
export interface MsgClaimResponse {
    /** total initial claimable amount for the user */
    claimedAmount: Coin;
}
export declare const MsgClaim: {
    encode(message: MsgClaim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaim;
    fromJSON(object: any): MsgClaim;
    toJSON(message: MsgClaim): unknown;
    fromPartial(object: DeepPartial<MsgClaim>): MsgClaim;
};
export declare const MsgClaimResponse: {
    encode(message: MsgClaimResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimResponse;
    fromJSON(object: any): MsgClaimResponse;
    toJSON(message: MsgClaimResponse): unknown;
    fromPartial(object: DeepPartial<MsgClaimResponse>): MsgClaimResponse;
};
