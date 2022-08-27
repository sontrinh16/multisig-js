import { Any } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** CommitteeChangeProposal is a gov proposal for creating a new committee or modifying an existing one. */
export interface CommitteeChangeProposal {
    title: string;
    description: string;
    newCommittee: Any;
}
/** CommitteeDeleteProposal is a gov proposal for removing a committee. */
export interface CommitteeDeleteProposal {
    title: string;
    description: string;
    committeeId: Long;
}
export declare const CommitteeChangeProposal: {
    encode(message: CommitteeChangeProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CommitteeChangeProposal;
    fromJSON(object: any): CommitteeChangeProposal;
    toJSON(message: CommitteeChangeProposal): unknown;
    fromPartial(object: DeepPartial<CommitteeChangeProposal>): CommitteeChangeProposal;
};
export declare const CommitteeDeleteProposal: {
    encode(message: CommitteeDeleteProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CommitteeDeleteProposal;
    fromJSON(object: any): CommitteeDeleteProposal;
    toJSON(message: CommitteeDeleteProposal): unknown;
    fromPartial(object: DeepPartial<CommitteeDeleteProposal>): CommitteeDeleteProposal;
};
