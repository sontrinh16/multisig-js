import { CellarIDSet } from "./cork";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface AddManagedCellarIDsProposal {
    title: string;
    description: string;
    cellarIds: CellarIDSet;
}
/** AddManagedCellarIDsProposalWithDeposit is a specific definition for CLI commands */
export interface AddManagedCellarIDsProposalWithDeposit {
    title: string;
    description: string;
    cellarIds: string[];
    deposit: string;
}
export interface RemoveManagedCellarIDsProposal {
    title: string;
    description: string;
    cellarIds: CellarIDSet;
}
/** RemoveManagedCellarIDsProposalWithDeposit is a specific definition for CLI commands */
export interface RemoveManagedCellarIDsProposalWithDeposit {
    title: string;
    description: string;
    cellarIds: string[];
    deposit: string;
}
export declare const AddManagedCellarIDsProposal: {
    encode(message: AddManagedCellarIDsProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddManagedCellarIDsProposal;
    fromJSON(object: any): AddManagedCellarIDsProposal;
    toJSON(message: AddManagedCellarIDsProposal): unknown;
    fromPartial(object: DeepPartial<AddManagedCellarIDsProposal>): AddManagedCellarIDsProposal;
};
export declare const AddManagedCellarIDsProposalWithDeposit: {
    encode(message: AddManagedCellarIDsProposalWithDeposit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddManagedCellarIDsProposalWithDeposit;
    fromJSON(object: any): AddManagedCellarIDsProposalWithDeposit;
    toJSON(message: AddManagedCellarIDsProposalWithDeposit): unknown;
    fromPartial(object: DeepPartial<AddManagedCellarIDsProposalWithDeposit>): AddManagedCellarIDsProposalWithDeposit;
};
export declare const RemoveManagedCellarIDsProposal: {
    encode(message: RemoveManagedCellarIDsProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveManagedCellarIDsProposal;
    fromJSON(object: any): RemoveManagedCellarIDsProposal;
    toJSON(message: RemoveManagedCellarIDsProposal): unknown;
    fromPartial(object: DeepPartial<RemoveManagedCellarIDsProposal>): RemoveManagedCellarIDsProposal;
};
export declare const RemoveManagedCellarIDsProposalWithDeposit: {
    encode(message: RemoveManagedCellarIDsProposalWithDeposit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveManagedCellarIDsProposalWithDeposit;
    fromJSON(object: any): RemoveManagedCellarIDsProposalWithDeposit;
    toJSON(message: RemoveManagedCellarIDsProposalWithDeposit): unknown;
    fromPartial(object: DeepPartial<RemoveManagedCellarIDsProposalWithDeposit>): RemoveManagedCellarIDsProposalWithDeposit;
};
