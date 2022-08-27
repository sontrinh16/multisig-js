import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** MsgRegisterFeeSplit defines a message that registers a FeeSplit */
export interface MsgRegisterFeeSplit {
    /** contract hex address */
    contractAddress: string;
    /**
     * bech32 address of message sender, must be the same as the origin EOA
     * sending the transaction which deploys the contract
     */
    deployerAddress: string;
    /** bech32 address of account receiving the transaction fees */
    withdrawerAddress: string;
    /**
     * array of nonces from the address path, where the last nonce is the nonce
     * that determines the contract's address - it can be an EOA nonce or a
     * factory contract nonce
     */
    nonces: Long[];
}
/** MsgRegisterFeeSplitResponse defines the MsgRegisterFeeSplit response type */
export interface MsgRegisterFeeSplitResponse {
}
/**
 * MsgUpdateFeeSplit defines a message that updates the withdrawer address for a
 * registered FeeSplit
 */
export interface MsgUpdateFeeSplit {
    /** contract hex address */
    contractAddress: string;
    /** deployer bech32 address */
    deployerAddress: string;
    /** new withdrawer bech32 address for receiving the transaction fees */
    withdrawerAddress: string;
}
/** MsgUpdateFeeSplitResponse defines the MsgUpdateFeeSplit response type */
export interface MsgUpdateFeeSplitResponse {
}
/** MsgCancelFeeSplit defines a message that cancels a registered FeeSplit */
export interface MsgCancelFeeSplit {
    /** contract hex address */
    contractAddress: string;
    /** deployer bech32 address */
    deployerAddress: string;
}
/** MsgCancelFeeSplitResponse defines the MsgCancelFeeSplit response type */
export interface MsgCancelFeeSplitResponse {
}
export declare const MsgRegisterFeeSplit: {
    encode(message: MsgRegisterFeeSplit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterFeeSplit;
    fromJSON(object: any): MsgRegisterFeeSplit;
    toJSON(message: MsgRegisterFeeSplit): unknown;
    fromPartial(object: DeepPartial<MsgRegisterFeeSplit>): MsgRegisterFeeSplit;
};
export declare const MsgRegisterFeeSplitResponse: {
    encode(_: MsgRegisterFeeSplitResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterFeeSplitResponse;
    fromJSON(_: any): MsgRegisterFeeSplitResponse;
    toJSON(_: MsgRegisterFeeSplitResponse): unknown;
    fromPartial(_: DeepPartial<MsgRegisterFeeSplitResponse>): MsgRegisterFeeSplitResponse;
};
export declare const MsgUpdateFeeSplit: {
    encode(message: MsgUpdateFeeSplit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateFeeSplit;
    fromJSON(object: any): MsgUpdateFeeSplit;
    toJSON(message: MsgUpdateFeeSplit): unknown;
    fromPartial(object: DeepPartial<MsgUpdateFeeSplit>): MsgUpdateFeeSplit;
};
export declare const MsgUpdateFeeSplitResponse: {
    encode(_: MsgUpdateFeeSplitResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateFeeSplitResponse;
    fromJSON(_: any): MsgUpdateFeeSplitResponse;
    toJSON(_: MsgUpdateFeeSplitResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateFeeSplitResponse>): MsgUpdateFeeSplitResponse;
};
export declare const MsgCancelFeeSplit: {
    encode(message: MsgCancelFeeSplit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelFeeSplit;
    fromJSON(object: any): MsgCancelFeeSplit;
    toJSON(message: MsgCancelFeeSplit): unknown;
    fromPartial(object: DeepPartial<MsgCancelFeeSplit>): MsgCancelFeeSplit;
};
export declare const MsgCancelFeeSplitResponse: {
    encode(_: MsgCancelFeeSplitResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelFeeSplitResponse;
    fromJSON(_: any): MsgCancelFeeSplitResponse;
    toJSON(_: MsgCancelFeeSplitResponse): unknown;
    fromPartial(_: DeepPartial<MsgCancelFeeSplitResponse>): MsgCancelFeeSplitResponse;
};
