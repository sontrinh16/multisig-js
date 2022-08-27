import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface UpdateFeesProposal {
    title: string;
    description: string;
    issueFee: Coin;
    mintFee: Coin;
    burnFee: Coin;
}
export interface UpdateFeesProposalWithDeposit {
    title: string;
    description: string;
    issueFee: string;
    mintFee: string;
    burnFee: string;
    deposit: string;
}
export declare const UpdateFeesProposal: {
    encode(message: UpdateFeesProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateFeesProposal;
    fromJSON(object: any): UpdateFeesProposal;
    toJSON(message: UpdateFeesProposal): unknown;
    fromPartial(object: DeepPartial<UpdateFeesProposal>): UpdateFeesProposal;
};
export declare const UpdateFeesProposalWithDeposit: {
    encode(message: UpdateFeesProposalWithDeposit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateFeesProposalWithDeposit;
    fromJSON(object: any): UpdateFeesProposalWithDeposit;
    toJSON(message: UpdateFeesProposalWithDeposit): unknown;
    fromPartial(object: DeepPartial<UpdateFeesProposalWithDeposit>): UpdateFeesProposalWithDeposit;
};
