import { Any } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface VoteRequest {
    sender: Uint8Array;
    pollId: Long;
    vote: Any;
}
export interface VoteResponse {
    log: string;
}
export declare const VoteRequest: {
    encode(message: VoteRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VoteRequest;
    fromJSON(object: any): VoteRequest;
    toJSON(message: VoteRequest): unknown;
    fromPartial(object: DeepPartial<VoteRequest>): VoteRequest;
};
export declare const VoteResponse: {
    encode(message: VoteResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VoteResponse;
    fromJSON(object: any): VoteResponse;
    toJSON(message: VoteResponse): unknown;
    fromPartial(object: DeepPartial<VoteResponse>): VoteResponse;
};
