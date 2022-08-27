import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/**
 * CommunityPoolMultiSpendProposal spends from the community pool by sending to one or more
 * addresses
 */
export interface CommunityPoolMultiSpendProposal {
    title: string;
    description: string;
    recipientList: MultiSpendRecipient[];
}
/** CommunityPoolMultiSpendProposalJSON defines a CommunityPoolMultiSpendProposal with a deposit */
export interface CommunityPoolMultiSpendProposalJSON {
    title: string;
    description: string;
    recipientList: MultiSpendRecipient[];
    deposit: Coin[];
}
/** MultiSpendRecipient defines a recipient and the amount of coins they are receiving */
export interface MultiSpendRecipient {
    address: string;
    amount: Coin[];
}
export declare const CommunityPoolMultiSpendProposal: {
    encode(message: CommunityPoolMultiSpendProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CommunityPoolMultiSpendProposal;
    fromJSON(object: any): CommunityPoolMultiSpendProposal;
    toJSON(message: CommunityPoolMultiSpendProposal): unknown;
    fromPartial(object: DeepPartial<CommunityPoolMultiSpendProposal>): CommunityPoolMultiSpendProposal;
};
export declare const CommunityPoolMultiSpendProposalJSON: {
    encode(message: CommunityPoolMultiSpendProposalJSON, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CommunityPoolMultiSpendProposalJSON;
    fromJSON(object: any): CommunityPoolMultiSpendProposalJSON;
    toJSON(message: CommunityPoolMultiSpendProposalJSON): unknown;
    fromPartial(object: DeepPartial<CommunityPoolMultiSpendProposalJSON>): CommunityPoolMultiSpendProposalJSON;
};
export declare const MultiSpendRecipient: {
    encode(message: MultiSpendRecipient, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MultiSpendRecipient;
    fromJSON(object: any): MultiSpendRecipient;
    toJSON(message: MultiSpendRecipient): unknown;
    fromPartial(object: DeepPartial<MultiSpendRecipient>): MultiSpendRecipient;
};
