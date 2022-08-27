import { AllowedDenom } from "./state";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/**
 * AllowDenomProposal is a gov Content type for approving a denom for use in the
 * marketplace.
 */
export interface AllowDenomProposal {
    /** title is the title of the proposal. */
    title: string;
    /** description is the description of the proposal. */
    description: string;
    /**
     * denom contains coin denom information that will be added to the
     * list of allowed denoms for use in the marketplace.
     */
    denom: AllowedDenom;
}
export declare const AllowDenomProposal: {
    encode(message: AllowDenomProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AllowDenomProposal;
    fromJSON(object: any): AllowDenomProposal;
    toJSON(message: AllowDenomProposal): unknown;
    fromPartial(object: DeepPartial<AllowDenomProposal>): AllowDenomProposal;
};
