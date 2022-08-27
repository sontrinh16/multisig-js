import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** Params contains the parameters for the profiles module */
export interface Params {
    nickname: NicknameParams;
    dtag: DTagParams;
    bio: BioParams;
    oracle: OracleParams;
}
/** NicknameParams defines the parameters related to the profiles nicknames */
export interface NicknameParams {
    minLength: Uint8Array;
    maxLength: Uint8Array;
}
/** DTagParams defines the parameters related to profile DTags */
export interface DTagParams {
    regEx: string;
    minLength: Uint8Array;
    maxLength: Uint8Array;
}
/** BioParams defines the parameters related to profile biography */
export interface BioParams {
    maxLength: Uint8Array;
}
/**
 * OracleParams defines the parameters related to the oracle
 * that will be used to verify the ownership of a centralized
 * application account by a Desmos profile
 */
export interface OracleParams {
    /**
     * ScriptID represents the ID of the oracle script to be called to verify the
     * data
     */
    scriptId: Long;
    /** AskCount represents the number of oracles to which ask to verify the data */
    askCount: Long;
    /**
     * MinCount represents the minimum count of oracles that should complete the
     * verification successfully
     */
    minCount: Long;
    /**
     * PrepareGas represents the amount of gas to be used during the preparation
     * stage of the oracle script
     */
    prepareGas: Long;
    /**
     * ExecuteGas represents the amount of gas to be used during the execution of
     * the oracle script
     */
    executeGas: Long;
    /**
     * FeeAmount represents the amount of fees to be payed in order to execute the
     * oracle script
     */
    feeAmount: Coin[];
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: DeepPartial<Params>): Params;
};
export declare const NicknameParams: {
    encode(message: NicknameParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NicknameParams;
    fromJSON(object: any): NicknameParams;
    toJSON(message: NicknameParams): unknown;
    fromPartial(object: DeepPartial<NicknameParams>): NicknameParams;
};
export declare const DTagParams: {
    encode(message: DTagParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DTagParams;
    fromJSON(object: any): DTagParams;
    toJSON(message: DTagParams): unknown;
    fromPartial(object: DeepPartial<DTagParams>): DTagParams;
};
export declare const BioParams: {
    encode(message: BioParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BioParams;
    fromJSON(object: any): BioParams;
    toJSON(message: BioParams): unknown;
    fromPartial(object: DeepPartial<BioParams>): BioParams;
};
export declare const OracleParams: {
    encode(message: OracleParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OracleParams;
    fromJSON(object: any): OracleParams;
    toJSON(message: OracleParams): unknown;
    fromPartial(object: DeepPartial<OracleParams>): OracleParams;
};
