import { StrategyType } from "./strategy";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/**
 * AllowedVault is a vault that is allowed to be created. These can be
 * modified via parameter governance.
 */
export interface AllowedVault {
    /** Denom is the only supported denomination of the vault for deposits and withdrawals. */
    denom: string;
    /** VaultStrategy is the strategy used for this vault. */
    vaultStrategy: StrategyType;
}
/**
 * VaultRecord is the state of a vault and is used to store the state of a
 * vault.
 */
export interface VaultRecord {
    /**
     * Denom is the only supported denomination of the vault for deposits and
     * withdrawals.
     */
    denom: string;
    /**
     * TotalSupply is the total supply of the vault, denominated **only** in the
     * user deposit/withdrawal denom, must be the same as the Denom field.
     */
    totalSupply: Coin;
}
/** VaultShareRecord defines the vault shares owned by a depositor. */
export interface VaultShareRecord {
    /** Depositor represents the owner of the shares */
    depositor: Uint8Array;
    /**
     * AmountSupplied represents the total amount a depositor has supplied to the
     * vault. The vault is determined by the coin denom.
     */
    amountSupplied: Coin[];
}
export declare const AllowedVault: {
    encode(message: AllowedVault, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AllowedVault;
    fromJSON(object: any): AllowedVault;
    toJSON(message: AllowedVault): unknown;
    fromPartial(object: DeepPartial<AllowedVault>): AllowedVault;
};
export declare const VaultRecord: {
    encode(message: VaultRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VaultRecord;
    fromJSON(object: any): VaultRecord;
    toJSON(message: VaultRecord): unknown;
    fromPartial(object: DeepPartial<VaultRecord>): VaultRecord;
};
export declare const VaultShareRecord: {
    encode(message: VaultShareRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VaultShareRecord;
    fromJSON(object: any): VaultShareRecord;
    toJSON(message: VaultShareRecord): unknown;
    fromPartial(object: DeepPartial<VaultShareRecord>): VaultShareRecord;
};
