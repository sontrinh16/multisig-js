import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/**
 * PromoteToPrivilegedContractProposal gov proposal content type to add
 * "privileges" to a contract
 */
export interface PromoteToPrivilegedContractProposal {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** Contract is the address of the smart contract */
    contract: string;
}
/**
 * PromoteToPrivilegedContractProposal gov proposal content type to remove
 * "privileges" from a contract
 */
export interface DemotePrivilegedContractProposal {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** Contract is the address of the smart contract */
    contract: string;
}
export declare const PromoteToPrivilegedContractProposal: {
    encode(message: PromoteToPrivilegedContractProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PromoteToPrivilegedContractProposal;
    fromJSON(object: any): PromoteToPrivilegedContractProposal;
    toJSON(message: PromoteToPrivilegedContractProposal): unknown;
    fromPartial(object: DeepPartial<PromoteToPrivilegedContractProposal>): PromoteToPrivilegedContractProposal;
};
export declare const DemotePrivilegedContractProposal: {
    encode(message: DemotePrivilegedContractProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DemotePrivilegedContractProposal;
    fromJSON(object: any): DemotePrivilegedContractProposal;
    toJSON(message: DemotePrivilegedContractProposal): unknown;
    fromPartial(object: DeepPartial<DemotePrivilegedContractProposal>): DemotePrivilegedContractProposal;
};
