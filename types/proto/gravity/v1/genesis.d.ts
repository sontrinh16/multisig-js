import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Valset, ERC20ToDenom } from "./types";
import { MsgValsetConfirm, MsgConfirmBatch, MsgConfirmLogicCall, MsgSetOrchestratorAddress } from "./msgs";
import { OutgoingTxBatch, OutgoingLogicCall, OutgoingTransferTx } from "./batch";
import { Attestation } from "./attestation";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/**
 * The slashing fractions for the various gravity related slashing conditions. The first three
 * refer to not submitting a particular message, the third for submitting a different claim
 * for the same Ethereum event
 *
 * unbond_slashing_valsets_window
 *
 * The unbond slashing valsets window is used to determine how many blocks after starting to unbond
 * a validator needs to continue signing blocks. The goal of this paramater is that when a validator leaves
 * the set, if their leaving creates enough change in the validator set to justify an update they will sign
 * a validator set update for the Ethereum bridge that does not include themselves. Allowing us to remove them
 * from the Ethereum bridge and replace them with the new set gracefully.
 *
 * valset_reward
 *
 * These parameters allow for the bridge oracle to resolve a fork on the Ethereum chain without halting
 * the chain. Once set reset bridge state will roll back events to the nonce provided in reset_bridge_nonce
 * if and only if those events have not yet been observed (executed on the Cosmos chain). This allows for easy
 * handling of cases where for example an Ethereum hardfork has occured and more than 1/3 of the vlaidtor set
 * disagrees with the rest. Normally this would require a chain halt, manual genesis editing and restar to resolve
 * with this feature a governance proposal can be used instead
 *
 * bridge_active
 *
 * This boolean flag can be used by governance to temporarily halt the bridge due to a vulnerability or other issue
 * In this context halting the bridge means prevent the execution of any oracle events from Ethereum and preventing
 * the creation of new batches that may be relayed to Ethereum.
 * This does not prevent the creation of validator sets
 * or slashing for not submitting validator set signatures as either of these might allow key signers to leave the validator
 * set and steal funds on Ethereum without consequence.
 * The practical outcome of this flag being set to 'false' is that deposits from Ethereum will not show up and withdraws from
 * Cosmos will not execute on Ethereum.
 */
export interface Params {
    gravityId: string;
    contractSourceHash: string;
    bridgeEthereumAddress: string;
    bridgeChainId: Long;
    signedValsetsWindow: Long;
    signedBatchesWindow: Long;
    signedLogicCallsWindow: Long;
    targetBatchTimeout: Long;
    averageBlockTime: Long;
    averageEthereumBlockTime: Long;
    slashFractionValset: Uint8Array;
    slashFractionBatch: Uint8Array;
    slashFractionLogicCall: Uint8Array;
    unbondSlashingValsetsWindow: Long;
    slashFractionBadEthSignature: Uint8Array;
    valsetReward: Coin;
    bridgeActive: boolean;
    /**
     * addresses on this blacklist are forbidden from depositing or withdrawing
     * from Ethereum to the bridge
     */
    ethereumBlacklist: string[];
}
/** GenesisState struct, containing all persistant data required by the Gravity module */
export interface GenesisState {
    params: Params;
    gravityNonces: GravityNonces;
    valsets: Valset[];
    valsetConfirms: MsgValsetConfirm[];
    batches: OutgoingTxBatch[];
    batchConfirms: MsgConfirmBatch[];
    logicCalls: OutgoingLogicCall[];
    logicCallConfirms: MsgConfirmLogicCall[];
    attestations: Attestation[];
    delegateKeys: MsgSetOrchestratorAddress[];
    erc20ToDenoms: ERC20ToDenom[];
    unbatchedTransfers: OutgoingTransferTx[];
}
/** GravityCounters contains the many noces and counters required to maintain the bridge state in the genesis */
export interface GravityNonces {
    /** the nonce of the last generated validator set */
    latestValsetNonce: Long;
    /** the last observed Gravity.sol contract event nonce */
    lastObservedNonce: Long;
    /** the last valset nonce we have slashed, to prevent double slashing */
    lastSlashedValsetNonce: Long;
    /**
     * the last batch Cosmos chain block that batch slashing has completed for
     * there is an individual batch nonce for each token type so this removes
     * the need to store them all
     */
    lastSlashedBatchBlock: Long;
    /** the last cosmos block that logic call slashing has completed for */
    lastSlashedLogicCallBlock: Long;
    /**
     * the last transaction id from the Gravity TX pool, this prevents ID
     * duplication during chain upgrades
     */
    lastTxPoolId: Long;
    /**
     * the last batch id from the Gravity batch pool, this prevents ID duplication
     * during chain upgrades
     */
    lastBatchId: Long;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: DeepPartial<Params>): Params;
};
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
export declare const GravityNonces: {
    encode(message: GravityNonces, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GravityNonces;
    fromJSON(object: any): GravityNonces;
    toJSON(message: GravityNonces): unknown;
    fromPartial(object: DeepPartial<GravityNonces>): GravityNonces;
};
