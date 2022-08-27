import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/**
 * FeeSplit defines an instance that organizes fee distribution conditions for
 * the owner of a given smart contract
 */
export interface FeeSplit {
    /** hex address of registered contract */
    contractAddress: string;
    /** bech32 address of contract deployer */
    deployerAddress: string;
    /**
     * bech32 address of account receiving the transaction fees it defaults to
     * deployer_address
     */
    withdrawerAddress: string;
}
export declare const FeeSplit: {
    encode(message: FeeSplit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeeSplit;
    fromJSON(object: any): FeeSplit;
    toJSON(message: FeeSplit): unknown;
    fromPartial(object: DeepPartial<FeeSplit>): FeeSplit;
};
