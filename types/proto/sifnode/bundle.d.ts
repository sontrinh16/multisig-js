import * as _637 from "./admin/v1/query";
import * as _638 from "./admin/v1/tx";
import * as _639 from "./admin/v1/types";
import * as _640 from "./clp/v1/genesis";
import * as _641 from "./clp/v1/params";
import * as _642 from "./clp/v1/pool";
import * as _643 from "./clp/v1/querier";
import * as _644 from "./clp/v1/tx";
import * as _645 from "./clp/v1/types";
import * as _646 from "./dispensation/v1/query";
import * as _647 from "./dispensation/v1/tx";
import * as _648 from "./dispensation/v1/types";
import * as _649 from "./ethbridge/v1/query";
import * as _650 from "./ethbridge/v1/tx";
import * as _651 from "./ethbridge/v1/types";
import * as _652 from "./margin/v1/query";
import * as _653 from "./margin/v1/tx";
import * as _654 from "./margin/v1/types";
import * as _655 from "./oracle/v1/types";
import * as _656 from "./tokenregistry/v1/query";
import * as _657 from "./tokenregistry/v1/tx";
import * as _658 from "./tokenregistry/v1/types";
export declare namespace sifnode {
    namespace admin {
        const v1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    addAccount(value: _638.MsgAddAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removeAccount(value: _638.MsgRemoveAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    addAccount(value: _638.MsgAddAccount): {
                        typeUrl: string;
                        value: _638.MsgAddAccount;
                    };
                    removeAccount(value: _638.MsgRemoveAccount): {
                        typeUrl: string;
                        value: _638.MsgRemoveAccount;
                    };
                };
                toJSON: {
                    addAccount(value: _638.MsgAddAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    removeAccount(value: _638.MsgRemoveAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    addAccount(value: any): {
                        typeUrl: string;
                        value: _638.MsgAddAccount;
                    };
                    removeAccount(value: any): {
                        typeUrl: string;
                        value: _638.MsgRemoveAccount;
                    };
                };
                fromPartial: {
                    addAccount(value: _638.MsgAddAccount): {
                        typeUrl: string;
                        value: _638.MsgAddAccount;
                    };
                    removeAccount(value: _638.MsgRemoveAccount): {
                        typeUrl: string;
                        value: _638.MsgRemoveAccount;
                    };
                };
            };
            AminoConverter: {
                "/sifnode.admin.v1.MsgAddAccount": {
                    aminoType: string;
                    toAmino: ({ signer, account }: _638.MsgAddAccount) => {
                        signer: string;
                        account: {
                            admin_type: number;
                            admin_address: string;
                        };
                    };
                    fromAmino: ({ signer, account }: {
                        signer: string;
                        account: {
                            admin_type: number;
                            admin_address: string;
                        };
                    }) => _638.MsgAddAccount;
                };
                "/sifnode.admin.v1.MsgRemoveAccount": {
                    aminoType: string;
                    toAmino: ({ signer, account }: _638.MsgRemoveAccount) => {
                        signer: string;
                        account: {
                            admin_type: number;
                            admin_address: string;
                        };
                    };
                    fromAmino: ({ signer, account }: {
                        signer: string;
                        account: {
                            admin_type: number;
                            admin_address: string;
                        };
                    }) => _638.MsgRemoveAccount;
                };
            };
            adminTypeFromJSON(object: any): _639.AdminType;
            adminTypeToJSON(object: _639.AdminType): string;
            AdminType: typeof _639.AdminType;
            GenesisState: {
                encode(message: _639.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _639.GenesisState;
                fromJSON(object: any): _639.GenesisState;
                toJSON(message: _639.GenesisState): unknown;
                fromPartial(object: {
                    adminAccounts?: {
                        adminType?: _639.AdminType;
                        adminAddress?: string;
                    }[];
                }): _639.GenesisState;
            };
            AdminAccount: {
                encode(message: _639.AdminAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _639.AdminAccount;
                fromJSON(object: any): _639.AdminAccount;
                toJSON(message: _639.AdminAccount): unknown;
                fromPartial(object: {
                    adminType?: _639.AdminType;
                    adminAddress?: string;
                }): _639.AdminAccount;
            };
            MsgAddAccount: {
                encode(message: _638.MsgAddAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _638.MsgAddAccount;
                fromJSON(object: any): _638.MsgAddAccount;
                toJSON(message: _638.MsgAddAccount): unknown;
                fromPartial(object: {
                    signer?: string;
                    account?: {
                        adminType?: _639.AdminType;
                        adminAddress?: string;
                    };
                }): _638.MsgAddAccount;
            };
            MsgAddAccountResponse: {
                encode(_: _638.MsgAddAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _638.MsgAddAccountResponse;
                fromJSON(_: any): _638.MsgAddAccountResponse;
                toJSON(_: _638.MsgAddAccountResponse): unknown;
                fromPartial(_: {}): _638.MsgAddAccountResponse;
            };
            MsgRemoveAccount: {
                encode(message: _638.MsgRemoveAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _638.MsgRemoveAccount;
                fromJSON(object: any): _638.MsgRemoveAccount;
                toJSON(message: _638.MsgRemoveAccount): unknown;
                fromPartial(object: {
                    signer?: string;
                    account?: {
                        adminType?: _639.AdminType;
                        adminAddress?: string;
                    };
                }): _638.MsgRemoveAccount;
            };
            MsgRemoveAccountResponse: {
                encode(_: _638.MsgRemoveAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _638.MsgRemoveAccountResponse;
                fromJSON(_: any): _638.MsgRemoveAccountResponse;
                toJSON(_: _638.MsgRemoveAccountResponse): unknown;
                fromPartial(_: {}): _638.MsgRemoveAccountResponse;
            };
            ListAccountsRequest: {
                encode(_: _637.ListAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _637.ListAccountsRequest;
                fromJSON(_: any): _637.ListAccountsRequest;
                toJSON(_: _637.ListAccountsRequest): unknown;
                fromPartial(_: {}): _637.ListAccountsRequest;
            };
            ListAccountsResponse: {
                encode(message: _637.ListAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _637.ListAccountsResponse;
                fromJSON(object: any): _637.ListAccountsResponse;
                toJSON(message: _637.ListAccountsResponse): unknown;
                fromPartial(object: {
                    keys?: {
                        adminType?: _639.AdminType;
                        adminAddress?: string;
                    }[];
                }): _637.ListAccountsResponse;
            };
        };
    }
    namespace clp {
        const v1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    removeLiquidity(value: _644.MsgRemoveLiquidity): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removeLiquidityUnits(value: _644.MsgRemoveLiquidityUnits): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPool(value: _644.MsgCreatePool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addLiquidity(value: _644.MsgAddLiquidity): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swap(value: _644.MsgSwap): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    decommissionPool(value: _644.MsgDecommissionPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unlockLiquidity(value: _644.MsgUnlockLiquidityRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateRewardsParams(value: _644.MsgUpdateRewardsParamsRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addRewardPeriod(value: _644.MsgAddRewardPeriodRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    modifyPmtpRates(value: _644.MsgModifyPmtpRates): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updatePmtpParams(value: _644.MsgUpdatePmtpParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateStakingRewardParams(value: _644.MsgUpdateStakingRewardParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setSymmetryThreshold(value: _644.MsgSetSymmetryThreshold): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnlockLiquidity(value: _644.MsgCancelUnlock): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateLiquidityProtectionParams(value: _644.MsgUpdateLiquidityProtectionParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    modifyLiquidityProtectionRates(value: _644.MsgModifyLiquidityProtectionRates): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addProviderDistributionPeriod(value: _644.MsgAddProviderDistributionPeriodRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    removeLiquidity(value: _644.MsgRemoveLiquidity): {
                        typeUrl: string;
                        value: _644.MsgRemoveLiquidity;
                    };
                    removeLiquidityUnits(value: _644.MsgRemoveLiquidityUnits): {
                        typeUrl: string;
                        value: _644.MsgRemoveLiquidityUnits;
                    };
                    createPool(value: _644.MsgCreatePool): {
                        typeUrl: string;
                        value: _644.MsgCreatePool;
                    };
                    addLiquidity(value: _644.MsgAddLiquidity): {
                        typeUrl: string;
                        value: _644.MsgAddLiquidity;
                    };
                    swap(value: _644.MsgSwap): {
                        typeUrl: string;
                        value: _644.MsgSwap;
                    };
                    decommissionPool(value: _644.MsgDecommissionPool): {
                        typeUrl: string;
                        value: _644.MsgDecommissionPool;
                    };
                    unlockLiquidity(value: _644.MsgUnlockLiquidityRequest): {
                        typeUrl: string;
                        value: _644.MsgUnlockLiquidityRequest;
                    };
                    updateRewardsParams(value: _644.MsgUpdateRewardsParamsRequest): {
                        typeUrl: string;
                        value: _644.MsgUpdateRewardsParamsRequest;
                    };
                    addRewardPeriod(value: _644.MsgAddRewardPeriodRequest): {
                        typeUrl: string;
                        value: _644.MsgAddRewardPeriodRequest;
                    };
                    modifyPmtpRates(value: _644.MsgModifyPmtpRates): {
                        typeUrl: string;
                        value: _644.MsgModifyPmtpRates;
                    };
                    updatePmtpParams(value: _644.MsgUpdatePmtpParams): {
                        typeUrl: string;
                        value: _644.MsgUpdatePmtpParams;
                    };
                    updateStakingRewardParams(value: _644.MsgUpdateStakingRewardParams): {
                        typeUrl: string;
                        value: _644.MsgUpdateStakingRewardParams;
                    };
                    setSymmetryThreshold(value: _644.MsgSetSymmetryThreshold): {
                        typeUrl: string;
                        value: _644.MsgSetSymmetryThreshold;
                    };
                    cancelUnlockLiquidity(value: _644.MsgCancelUnlock): {
                        typeUrl: string;
                        value: _644.MsgCancelUnlock;
                    };
                    updateLiquidityProtectionParams(value: _644.MsgUpdateLiquidityProtectionParams): {
                        typeUrl: string;
                        value: _644.MsgUpdateLiquidityProtectionParams;
                    };
                    modifyLiquidityProtectionRates(value: _644.MsgModifyLiquidityProtectionRates): {
                        typeUrl: string;
                        value: _644.MsgModifyLiquidityProtectionRates;
                    };
                    addProviderDistributionPeriod(value: _644.MsgAddProviderDistributionPeriodRequest): {
                        typeUrl: string;
                        value: _644.MsgAddProviderDistributionPeriodRequest;
                    };
                };
                toJSON: {
                    removeLiquidity(value: _644.MsgRemoveLiquidity): {
                        typeUrl: string;
                        value: unknown;
                    };
                    removeLiquidityUnits(value: _644.MsgRemoveLiquidityUnits): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createPool(value: _644.MsgCreatePool): {
                        typeUrl: string;
                        value: unknown;
                    };
                    addLiquidity(value: _644.MsgAddLiquidity): {
                        typeUrl: string;
                        value: unknown;
                    };
                    swap(value: _644.MsgSwap): {
                        typeUrl: string;
                        value: unknown;
                    };
                    decommissionPool(value: _644.MsgDecommissionPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                    unlockLiquidity(value: _644.MsgUnlockLiquidityRequest): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateRewardsParams(value: _644.MsgUpdateRewardsParamsRequest): {
                        typeUrl: string;
                        value: unknown;
                    };
                    addRewardPeriod(value: _644.MsgAddRewardPeriodRequest): {
                        typeUrl: string;
                        value: unknown;
                    };
                    modifyPmtpRates(value: _644.MsgModifyPmtpRates): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updatePmtpParams(value: _644.MsgUpdatePmtpParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateStakingRewardParams(value: _644.MsgUpdateStakingRewardParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                    setSymmetryThreshold(value: _644.MsgSetSymmetryThreshold): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelUnlockLiquidity(value: _644.MsgCancelUnlock): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateLiquidityProtectionParams(value: _644.MsgUpdateLiquidityProtectionParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                    modifyLiquidityProtectionRates(value: _644.MsgModifyLiquidityProtectionRates): {
                        typeUrl: string;
                        value: unknown;
                    };
                    addProviderDistributionPeriod(value: _644.MsgAddProviderDistributionPeriodRequest): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    removeLiquidity(value: any): {
                        typeUrl: string;
                        value: _644.MsgRemoveLiquidity;
                    };
                    removeLiquidityUnits(value: any): {
                        typeUrl: string;
                        value: _644.MsgRemoveLiquidityUnits;
                    };
                    createPool(value: any): {
                        typeUrl: string;
                        value: _644.MsgCreatePool;
                    };
                    addLiquidity(value: any): {
                        typeUrl: string;
                        value: _644.MsgAddLiquidity;
                    };
                    swap(value: any): {
                        typeUrl: string;
                        value: _644.MsgSwap;
                    };
                    decommissionPool(value: any): {
                        typeUrl: string;
                        value: _644.MsgDecommissionPool;
                    };
                    unlockLiquidity(value: any): {
                        typeUrl: string;
                        value: _644.MsgUnlockLiquidityRequest;
                    };
                    updateRewardsParams(value: any): {
                        typeUrl: string;
                        value: _644.MsgUpdateRewardsParamsRequest;
                    };
                    addRewardPeriod(value: any): {
                        typeUrl: string;
                        value: _644.MsgAddRewardPeriodRequest;
                    };
                    modifyPmtpRates(value: any): {
                        typeUrl: string;
                        value: _644.MsgModifyPmtpRates;
                    };
                    updatePmtpParams(value: any): {
                        typeUrl: string;
                        value: _644.MsgUpdatePmtpParams;
                    };
                    updateStakingRewardParams(value: any): {
                        typeUrl: string;
                        value: _644.MsgUpdateStakingRewardParams;
                    };
                    setSymmetryThreshold(value: any): {
                        typeUrl: string;
                        value: _644.MsgSetSymmetryThreshold;
                    };
                    cancelUnlockLiquidity(value: any): {
                        typeUrl: string;
                        value: _644.MsgCancelUnlock;
                    };
                    updateLiquidityProtectionParams(value: any): {
                        typeUrl: string;
                        value: _644.MsgUpdateLiquidityProtectionParams;
                    };
                    modifyLiquidityProtectionRates(value: any): {
                        typeUrl: string;
                        value: _644.MsgModifyLiquidityProtectionRates;
                    };
                    addProviderDistributionPeriod(value: any): {
                        typeUrl: string;
                        value: _644.MsgAddProviderDistributionPeriodRequest;
                    };
                };
                fromPartial: {
                    removeLiquidity(value: _644.MsgRemoveLiquidity): {
                        typeUrl: string;
                        value: _644.MsgRemoveLiquidity;
                    };
                    removeLiquidityUnits(value: _644.MsgRemoveLiquidityUnits): {
                        typeUrl: string;
                        value: _644.MsgRemoveLiquidityUnits;
                    };
                    createPool(value: _644.MsgCreatePool): {
                        typeUrl: string;
                        value: _644.MsgCreatePool;
                    };
                    addLiquidity(value: _644.MsgAddLiquidity): {
                        typeUrl: string;
                        value: _644.MsgAddLiquidity;
                    };
                    swap(value: _644.MsgSwap): {
                        typeUrl: string;
                        value: _644.MsgSwap;
                    };
                    decommissionPool(value: _644.MsgDecommissionPool): {
                        typeUrl: string;
                        value: _644.MsgDecommissionPool;
                    };
                    unlockLiquidity(value: _644.MsgUnlockLiquidityRequest): {
                        typeUrl: string;
                        value: _644.MsgUnlockLiquidityRequest;
                    };
                    updateRewardsParams(value: _644.MsgUpdateRewardsParamsRequest): {
                        typeUrl: string;
                        value: _644.MsgUpdateRewardsParamsRequest;
                    };
                    addRewardPeriod(value: _644.MsgAddRewardPeriodRequest): {
                        typeUrl: string;
                        value: _644.MsgAddRewardPeriodRequest;
                    };
                    modifyPmtpRates(value: _644.MsgModifyPmtpRates): {
                        typeUrl: string;
                        value: _644.MsgModifyPmtpRates;
                    };
                    updatePmtpParams(value: _644.MsgUpdatePmtpParams): {
                        typeUrl: string;
                        value: _644.MsgUpdatePmtpParams;
                    };
                    updateStakingRewardParams(value: _644.MsgUpdateStakingRewardParams): {
                        typeUrl: string;
                        value: _644.MsgUpdateStakingRewardParams;
                    };
                    setSymmetryThreshold(value: _644.MsgSetSymmetryThreshold): {
                        typeUrl: string;
                        value: _644.MsgSetSymmetryThreshold;
                    };
                    cancelUnlockLiquidity(value: _644.MsgCancelUnlock): {
                        typeUrl: string;
                        value: _644.MsgCancelUnlock;
                    };
                    updateLiquidityProtectionParams(value: _644.MsgUpdateLiquidityProtectionParams): {
                        typeUrl: string;
                        value: _644.MsgUpdateLiquidityProtectionParams;
                    };
                    modifyLiquidityProtectionRates(value: _644.MsgModifyLiquidityProtectionRates): {
                        typeUrl: string;
                        value: _644.MsgModifyLiquidityProtectionRates;
                    };
                    addProviderDistributionPeriod(value: _644.MsgAddProviderDistributionPeriodRequest): {
                        typeUrl: string;
                        value: _644.MsgAddProviderDistributionPeriodRequest;
                    };
                };
            };
            AminoConverter: {
                "/sifnode.clp.v1.MsgRemoveLiquidity": {
                    aminoType: string;
                    toAmino: ({ signer, externalAsset, wBasisPoints, asymmetry }: _644.MsgRemoveLiquidity) => {
                        signer: string;
                        external_asset: {
                            symbol: string;
                        };
                        w_basis_points: string;
                        asymmetry: string;
                    };
                    fromAmino: ({ signer, external_asset, w_basis_points, asymmetry }: {
                        signer: string;
                        external_asset: {
                            symbol: string;
                        };
                        w_basis_points: string;
                        asymmetry: string;
                    }) => _644.MsgRemoveLiquidity;
                };
                "/sifnode.clp.v1.MsgRemoveLiquidityUnits": {
                    aminoType: string;
                    toAmino: ({ signer, externalAsset, withdrawUnits }: _644.MsgRemoveLiquidityUnits) => {
                        signer: string;
                        external_asset: {
                            symbol: string;
                        };
                        withdraw_units: string;
                    };
                    fromAmino: ({ signer, external_asset, withdraw_units }: {
                        signer: string;
                        external_asset: {
                            symbol: string;
                        };
                        withdraw_units: string;
                    }) => _644.MsgRemoveLiquidityUnits;
                };
                "/sifnode.clp.v1.MsgCreatePool": {
                    aminoType: string;
                    toAmino: ({ signer, externalAsset, nativeAssetAmount, externalAssetAmount }: _644.MsgCreatePool) => {
                        signer: string;
                        external_asset: {
                            symbol: string;
                        };
                        native_asset_amount: string;
                        external_asset_amount: string;
                    };
                    fromAmino: ({ signer, external_asset, native_asset_amount, external_asset_amount }: {
                        signer: string;
                        external_asset: {
                            symbol: string;
                        };
                        native_asset_amount: string;
                        external_asset_amount: string;
                    }) => _644.MsgCreatePool;
                };
                "/sifnode.clp.v1.MsgAddLiquidity": {
                    aminoType: string;
                    toAmino: ({ signer, externalAsset, nativeAssetAmount, externalAssetAmount }: _644.MsgAddLiquidity) => {
                        signer: string;
                        external_asset: {
                            symbol: string;
                        };
                        native_asset_amount: string;
                        external_asset_amount: string;
                    };
                    fromAmino: ({ signer, external_asset, native_asset_amount, external_asset_amount }: {
                        signer: string;
                        external_asset: {
                            symbol: string;
                        };
                        native_asset_amount: string;
                        external_asset_amount: string;
                    }) => _644.MsgAddLiquidity;
                };
                "/sifnode.clp.v1.MsgSwap": {
                    aminoType: string;
                    toAmino: ({ signer, sentAsset, receivedAsset, sentAmount, minReceivingAmount }: _644.MsgSwap) => {
                        signer: string;
                        sent_asset: {
                            symbol: string;
                        };
                        received_asset: {
                            symbol: string;
                        };
                        sent_amount: string;
                        min_receiving_amount: string;
                    };
                    fromAmino: ({ signer, sent_asset, received_asset, sent_amount, min_receiving_amount }: {
                        signer: string;
                        sent_asset: {
                            symbol: string;
                        };
                        received_asset: {
                            symbol: string;
                        };
                        sent_amount: string;
                        min_receiving_amount: string;
                    }) => _644.MsgSwap;
                };
                "/sifnode.clp.v1.MsgDecommissionPool": {
                    aminoType: string;
                    toAmino: ({ signer, symbol }: _644.MsgDecommissionPool) => {
                        signer: string;
                        symbol: string;
                    };
                    fromAmino: ({ signer, symbol }: {
                        signer: string;
                        symbol: string;
                    }) => _644.MsgDecommissionPool;
                };
                "/sifnode.clp.v1.MsgUnlockLiquidityRequest": {
                    aminoType: string;
                    toAmino: ({ signer, externalAsset, units }: _644.MsgUnlockLiquidityRequest) => {
                        signer: string;
                        external_asset: {
                            symbol: string;
                        };
                        units: string;
                    };
                    fromAmino: ({ signer, external_asset, units }: {
                        signer: string;
                        external_asset: {
                            symbol: string;
                        };
                        units: string;
                    }) => _644.MsgUnlockLiquidityRequest;
                };
                "/sifnode.clp.v1.MsgUpdateRewardsParamsRequest": {
                    aminoType: string;
                    toAmino: ({ signer, liquidityRemovalLockPeriod, liquidityRemovalCancelPeriod }: _644.MsgUpdateRewardsParamsRequest) => {
                        signer: string;
                        liquidity_removal_lock_period: string;
                        liquidity_removal_cancel_period: string;
                    };
                    fromAmino: ({ signer, liquidity_removal_lock_period, liquidity_removal_cancel_period }: {
                        signer: string;
                        liquidity_removal_lock_period: string;
                        liquidity_removal_cancel_period: string;
                    }) => _644.MsgUpdateRewardsParamsRequest;
                };
                "/sifnode.clp.v1.MsgAddRewardPeriodRequest": {
                    aminoType: string;
                    toAmino: ({ signer, rewardPeriods }: _644.MsgAddRewardPeriodRequest) => {
                        signer: string;
                        reward_periods: {
                            reward_period_id: string;
                            reward_period_start_block: string;
                            reward_period_end_block: string;
                            reward_period_allocation: string;
                            reward_period_pool_multipliers: {
                                pool_multiplier_asset: string;
                                multiplier: string;
                            }[];
                            reward_period_default_multiplier: string;
                            reward_period_distribute: boolean;
                            reward_period_mod: string;
                        }[];
                    };
                    fromAmino: ({ signer, reward_periods }: {
                        signer: string;
                        reward_periods: {
                            reward_period_id: string;
                            reward_period_start_block: string;
                            reward_period_end_block: string;
                            reward_period_allocation: string;
                            reward_period_pool_multipliers: {
                                pool_multiplier_asset: string;
                                multiplier: string;
                            }[];
                            reward_period_default_multiplier: string;
                            reward_period_distribute: boolean;
                            reward_period_mod: string;
                        }[];
                    }) => _644.MsgAddRewardPeriodRequest;
                };
                "/sifnode.clp.v1.MsgModifyPmtpRates": {
                    aminoType: string;
                    toAmino: ({ signer, blockRate, runningRate, endPolicy }: _644.MsgModifyPmtpRates) => {
                        signer: string;
                        block_rate: string;
                        running_rate: string;
                        end_policy: boolean;
                    };
                    fromAmino: ({ signer, block_rate, running_rate, end_policy }: {
                        signer: string;
                        block_rate: string;
                        running_rate: string;
                        end_policy: boolean;
                    }) => _644.MsgModifyPmtpRates;
                };
                "/sifnode.clp.v1.MsgUpdatePmtpParams": {
                    aminoType: string;
                    toAmino: ({ signer, pmtpPeriodGovernanceRate, pmtpPeriodEpochLength, pmtpPeriodStartBlock, pmtpPeriodEndBlock }: _644.MsgUpdatePmtpParams) => {
                        signer: string;
                        pmtp_period_governance_rate: string;
                        pmtp_period_epoch_length: string;
                        pmtp_period_start_block: string;
                        pmtp_period_end_block: string;
                    };
                    fromAmino: ({ signer, pmtp_period_governance_rate, pmtp_period_epoch_length, pmtp_period_start_block, pmtp_period_end_block }: {
                        signer: string;
                        pmtp_period_governance_rate: string;
                        pmtp_period_epoch_length: string;
                        pmtp_period_start_block: string;
                        pmtp_period_end_block: string;
                    }) => _644.MsgUpdatePmtpParams;
                };
                "/sifnode.clp.v1.MsgUpdateStakingRewardParams": {
                    aminoType: string;
                    toAmino: ({ signer, minter, params }: _644.MsgUpdateStakingRewardParams) => {
                        signer: string;
                        minter: string;
                        params: string;
                    };
                    fromAmino: ({ signer, minter, params }: {
                        signer: string;
                        minter: string;
                        params: string;
                    }) => _644.MsgUpdateStakingRewardParams;
                };
                "/sifnode.clp.v1.MsgSetSymmetryThreshold": {
                    aminoType: string;
                    toAmino: ({ signer, threshold, ratio }: _644.MsgSetSymmetryThreshold) => {
                        signer: string;
                        threshold: string;
                        ratio: string;
                    };
                    fromAmino: ({ signer, threshold, ratio }: {
                        signer: string;
                        threshold: string;
                        ratio: string;
                    }) => _644.MsgSetSymmetryThreshold;
                };
                "/sifnode.clp.v1.MsgCancelUnlock": {
                    aminoType: string;
                    toAmino: ({ signer, externalAsset, units }: _644.MsgCancelUnlock) => {
                        signer: string;
                        external_asset: {
                            symbol: string;
                        };
                        units: string;
                    };
                    fromAmino: ({ signer, external_asset, units }: {
                        signer: string;
                        external_asset: {
                            symbol: string;
                        };
                        units: string;
                    }) => _644.MsgCancelUnlock;
                };
                "/sifnode.clp.v1.MsgUpdateLiquidityProtectionParams": {
                    aminoType: string;
                    toAmino: ({ signer, maxRowanLiquidityThreshold, maxRowanLiquidityThresholdAsset, epochLength, isActive }: _644.MsgUpdateLiquidityProtectionParams) => {
                        signer: string;
                        max_rowan_liquidity_threshold: string;
                        max_rowan_liquidity_threshold_asset: string;
                        epoch_length: string;
                        is_active: boolean;
                    };
                    fromAmino: ({ signer, max_rowan_liquidity_threshold, max_rowan_liquidity_threshold_asset, epoch_length, is_active }: {
                        signer: string;
                        max_rowan_liquidity_threshold: string;
                        max_rowan_liquidity_threshold_asset: string;
                        epoch_length: string;
                        is_active: boolean;
                    }) => _644.MsgUpdateLiquidityProtectionParams;
                };
                "/sifnode.clp.v1.MsgModifyLiquidityProtectionRates": {
                    aminoType: string;
                    toAmino: ({ signer, currentRowanLiquidityThreshold }: _644.MsgModifyLiquidityProtectionRates) => {
                        signer: string;
                        current_rowan_liquidity_threshold: string;
                    };
                    fromAmino: ({ signer, current_rowan_liquidity_threshold }: {
                        signer: string;
                        current_rowan_liquidity_threshold: string;
                    }) => _644.MsgModifyLiquidityProtectionRates;
                };
                "/sifnode.clp.v1.MsgAddProviderDistributionPeriodRequest": {
                    aminoType: string;
                    toAmino: ({ signer, distributionPeriods }: _644.MsgAddProviderDistributionPeriodRequest) => {
                        signer: string;
                        distribution_periods: {
                            distribution_period_block_rate: string;
                            distribution_period_start_block: string;
                            distribution_period_end_block: string;
                            distribution_period_mod: string;
                        }[];
                    };
                    fromAmino: ({ signer, distribution_periods }: {
                        signer: string;
                        distribution_periods: {
                            distribution_period_block_rate: string;
                            distribution_period_start_block: string;
                            distribution_period_end_block: string;
                            distribution_period_mod: string;
                        }[];
                    }) => _644.MsgAddProviderDistributionPeriodRequest;
                };
            };
            Asset: {
                encode(message: _645.Asset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _645.Asset;
                fromJSON(object: any): _645.Asset;
                toJSON(message: _645.Asset): unknown;
                fromPartial(object: {
                    symbol?: string;
                }): _645.Asset;
            };
            LiquidityProvider: {
                encode(message: _645.LiquidityProvider, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _645.LiquidityProvider;
                fromJSON(object: any): _645.LiquidityProvider;
                toJSON(message: _645.LiquidityProvider): unknown;
                fromPartial(object: {
                    asset?: {
                        symbol?: string;
                    };
                    liquidityProviderUnits?: string;
                    liquidityProviderAddress?: string;
                    unlocks?: {
                        requestHeight?: any;
                        units?: string;
                    }[];
                }): _645.LiquidityProvider;
            };
            LiquidityUnlock: {
                encode(message: _645.LiquidityUnlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _645.LiquidityUnlock;
                fromJSON(object: any): _645.LiquidityUnlock;
                toJSON(message: _645.LiquidityUnlock): unknown;
                fromPartial(object: {
                    requestHeight?: any;
                    units?: string;
                }): _645.LiquidityUnlock;
            };
            PmtpEpoch: {
                encode(message: _645.PmtpEpoch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _645.PmtpEpoch;
                fromJSON(object: any): _645.PmtpEpoch;
                toJSON(message: _645.PmtpEpoch): unknown;
                fromPartial(object: {
                    epochCounter?: any;
                    blockCounter?: any;
                }): _645.PmtpEpoch;
            };
            WhiteList: {
                encode(message: _645.WhiteList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _645.WhiteList;
                fromJSON(object: any): _645.WhiteList;
                toJSON(message: _645.WhiteList): unknown;
                fromPartial(object: {
                    validatorList?: string[];
                }): _645.WhiteList;
            };
            LiquidityProviderData: {
                encode(message: _645.LiquidityProviderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _645.LiquidityProviderData;
                fromJSON(object: any): _645.LiquidityProviderData;
                toJSON(message: _645.LiquidityProviderData): unknown;
                fromPartial(object: {
                    liquidityProvider?: {
                        asset?: {
                            symbol?: string;
                        };
                        liquidityProviderUnits?: string;
                        liquidityProviderAddress?: string;
                        unlocks?: {
                            requestHeight?: any;
                            units?: string;
                        }[];
                    };
                    nativeAssetBalance?: string;
                    externalAssetBalance?: string;
                }): _645.LiquidityProviderData;
            };
            EventPolicy: {
                encode(message: _645.EventPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _645.EventPolicy;
                fromJSON(object: any): _645.EventPolicy;
                toJSON(message: _645.EventPolicy): unknown;
                fromPartial(object: {
                    eventType?: string;
                    pmtpPeriodStartBlock?: string;
                    pmtpPeriodEndBlock?: string;
                }): _645.EventPolicy;
            };
            RemovalQueue: {
                encode(message: _645.RemovalQueue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _645.RemovalQueue;
                fromJSON(object: any): _645.RemovalQueue;
                toJSON(message: _645.RemovalQueue): unknown;
                fromPartial(object: {
                    count?: any;
                    id?: any;
                    startHeight?: any;
                    totalValue?: string;
                }): _645.RemovalQueue;
            };
            MsgUpdateStakingRewardParams: {
                encode(message: _644.MsgUpdateStakingRewardParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.MsgUpdateStakingRewardParams;
                fromJSON(object: any): _644.MsgUpdateStakingRewardParams;
                toJSON(message: _644.MsgUpdateStakingRewardParams): unknown;
                fromPartial(object: {
                    signer?: string;
                    minter?: string;
                    params?: string;
                }): _644.MsgUpdateStakingRewardParams;
            };
            MsgUpdateStakingRewardParamsResponse: {
                encode(_: _644.MsgUpdateStakingRewardParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.MsgUpdateStakingRewardParamsResponse;
                fromJSON(_: any): _644.MsgUpdateStakingRewardParamsResponse;
                toJSON(_: _644.MsgUpdateStakingRewardParamsResponse): unknown;
                fromPartial(_: {}): _644.MsgUpdateStakingRewardParamsResponse;
            };
            MsgRemoveLiquidity: {
                encode(message: _644.MsgRemoveLiquidity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.MsgRemoveLiquidity;
                fromJSON(object: any): _644.MsgRemoveLiquidity;
                toJSON(message: _644.MsgRemoveLiquidity): unknown;
                fromPartial(object: {
                    signer?: string;
                    externalAsset?: {
                        symbol?: string;
                    };
                    wBasisPoints?: string;
                    asymmetry?: string;
                }): _644.MsgRemoveLiquidity;
            };
            MsgRemoveLiquidityResponse: {
                encode(_: _644.MsgRemoveLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.MsgRemoveLiquidityResponse;
                fromJSON(_: any): _644.MsgRemoveLiquidityResponse;
                toJSON(_: _644.MsgRemoveLiquidityResponse): unknown;
                fromPartial(_: {}): _644.MsgRemoveLiquidityResponse;
            };
            MsgRemoveLiquidityUnits: {
                encode(message: _644.MsgRemoveLiquidityUnits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.MsgRemoveLiquidityUnits;
                fromJSON(object: any): _644.MsgRemoveLiquidityUnits;
                toJSON(message: _644.MsgRemoveLiquidityUnits): unknown;
                fromPartial(object: {
                    signer?: string;
                    externalAsset?: {
                        symbol?: string;
                    };
                    withdrawUnits?: string;
                }): _644.MsgRemoveLiquidityUnits;
            };
            MsgRemoveLiquidityUnitsResponse: {
                encode(_: _644.MsgRemoveLiquidityUnitsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.MsgRemoveLiquidityUnitsResponse;
                fromJSON(_: any): _644.MsgRemoveLiquidityUnitsResponse;
                toJSON(_: _644.MsgRemoveLiquidityUnitsResponse): unknown;
                fromPartial(_: {}): _644.MsgRemoveLiquidityUnitsResponse;
            };
            MsgCreatePool: {
                encode(message: _644.MsgCreatePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.MsgCreatePool;
                fromJSON(object: any): _644.MsgCreatePool;
                toJSON(message: _644.MsgCreatePool): unknown;
                fromPartial(object: {
                    signer?: string;
                    externalAsset?: {
                        symbol?: string;
                    };
                    nativeAssetAmount?: string;
                    externalAssetAmount?: string;
                }): _644.MsgCreatePool;
            };
            MsgCreatePoolResponse: {
                encode(_: _644.MsgCreatePoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.MsgCreatePoolResponse;
                fromJSON(_: any): _644.MsgCreatePoolResponse;
                toJSON(_: _644.MsgCreatePoolResponse): unknown;
                fromPartial(_: {}): _644.MsgCreatePoolResponse;
            };
            MsgAddLiquidity: {
                encode(message: _644.MsgAddLiquidity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.MsgAddLiquidity;
                fromJSON(object: any): _644.MsgAddLiquidity;
                toJSON(message: _644.MsgAddLiquidity): unknown;
                fromPartial(object: {
                    signer?: string;
                    externalAsset?: {
                        symbol?: string;
                    };
                    nativeAssetAmount?: string;
                    externalAssetAmount?: string;
                }): _644.MsgAddLiquidity;
            };
            MsgAddLiquidityResponse: {
                encode(_: _644.MsgAddLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.MsgAddLiquidityResponse;
                fromJSON(_: any): _644.MsgAddLiquidityResponse;
                toJSON(_: _644.MsgAddLiquidityResponse): unknown;
                fromPartial(_: {}): _644.MsgAddLiquidityResponse;
            };
            MsgModifyPmtpRates: {
                encode(message: _644.MsgModifyPmtpRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.MsgModifyPmtpRates;
                fromJSON(object: any): _644.MsgModifyPmtpRates;
                toJSON(message: _644.MsgModifyPmtpRates): unknown;
                fromPartial(object: {
                    signer?: string;
                    blockRate?: string;
                    runningRate?: string;
                    endPolicy?: boolean;
                }): _644.MsgModifyPmtpRates;
            };
            MsgModifyPmtpRatesResponse: {
                encode(_: _644.MsgModifyPmtpRatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.MsgModifyPmtpRatesResponse;
                fromJSON(_: any): _644.MsgModifyPmtpRatesResponse;
                toJSON(_: _644.MsgModifyPmtpRatesResponse): unknown;
                fromPartial(_: {}): _644.MsgModifyPmtpRatesResponse;
            };
            MsgUpdatePmtpParams: {
                encode(message: _644.MsgUpdatePmtpParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.MsgUpdatePmtpParams;
                fromJSON(object: any): _644.MsgUpdatePmtpParams;
                toJSON(message: _644.MsgUpdatePmtpParams): unknown;
                fromPartial(object: {
                    signer?: string;
                    pmtpPeriodGovernanceRate?: string;
                    pmtpPeriodEpochLength?: any;
                    pmtpPeriodStartBlock?: any;
                    pmtpPeriodEndBlock?: any;
                }): _644.MsgUpdatePmtpParams;
            };
            MsgUpdatePmtpParamsResponse: {
                encode(_: _644.MsgUpdatePmtpParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.MsgUpdatePmtpParamsResponse;
                fromJSON(_: any): _644.MsgUpdatePmtpParamsResponse;
                toJSON(_: _644.MsgUpdatePmtpParamsResponse): unknown;
                fromPartial(_: {}): _644.MsgUpdatePmtpParamsResponse;
            };
            MsgSwap: {
                encode(message: _644.MsgSwap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.MsgSwap;
                fromJSON(object: any): _644.MsgSwap;
                toJSON(message: _644.MsgSwap): unknown;
                fromPartial(object: {
                    signer?: string;
                    sentAsset?: {
                        symbol?: string;
                    };
                    receivedAsset?: {
                        symbol?: string;
                    };
                    sentAmount?: string;
                    minReceivingAmount?: string;
                }): _644.MsgSwap;
            };
            MsgSwapResponse: {
                encode(_: _644.MsgSwapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.MsgSwapResponse;
                fromJSON(_: any): _644.MsgSwapResponse;
                toJSON(_: _644.MsgSwapResponse): unknown;
                fromPartial(_: {}): _644.MsgSwapResponse;
            };
            MsgDecommissionPool: {
                encode(message: _644.MsgDecommissionPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.MsgDecommissionPool;
                fromJSON(object: any): _644.MsgDecommissionPool;
                toJSON(message: _644.MsgDecommissionPool): unknown;
                fromPartial(object: {
                    signer?: string;
                    symbol?: string;
                }): _644.MsgDecommissionPool;
            };
            MsgDecommissionPoolResponse: {
                encode(_: _644.MsgDecommissionPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.MsgDecommissionPoolResponse;
                fromJSON(_: any): _644.MsgDecommissionPoolResponse;
                toJSON(_: _644.MsgDecommissionPoolResponse): unknown;
                fromPartial(_: {}): _644.MsgDecommissionPoolResponse;
            };
            MsgUnlockLiquidityRequest: {
                encode(message: _644.MsgUnlockLiquidityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.MsgUnlockLiquidityRequest;
                fromJSON(object: any): _644.MsgUnlockLiquidityRequest;
                toJSON(message: _644.MsgUnlockLiquidityRequest): unknown;
                fromPartial(object: {
                    signer?: string;
                    externalAsset?: {
                        symbol?: string;
                    };
                    units?: string;
                }): _644.MsgUnlockLiquidityRequest;
            };
            MsgUnlockLiquidityResponse: {
                encode(_: _644.MsgUnlockLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.MsgUnlockLiquidityResponse;
                fromJSON(_: any): _644.MsgUnlockLiquidityResponse;
                toJSON(_: _644.MsgUnlockLiquidityResponse): unknown;
                fromPartial(_: {}): _644.MsgUnlockLiquidityResponse;
            };
            MsgUpdateRewardsParamsRequest: {
                encode(message: _644.MsgUpdateRewardsParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.MsgUpdateRewardsParamsRequest;
                fromJSON(object: any): _644.MsgUpdateRewardsParamsRequest;
                toJSON(message: _644.MsgUpdateRewardsParamsRequest): unknown;
                fromPartial(object: {
                    signer?: string;
                    liquidityRemovalLockPeriod?: any;
                    liquidityRemovalCancelPeriod?: any;
                }): _644.MsgUpdateRewardsParamsRequest;
            };
            MsgUpdateRewardsParamsResponse: {
                encode(_: _644.MsgUpdateRewardsParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.MsgUpdateRewardsParamsResponse;
                fromJSON(_: any): _644.MsgUpdateRewardsParamsResponse;
                toJSON(_: _644.MsgUpdateRewardsParamsResponse): unknown;
                fromPartial(_: {}): _644.MsgUpdateRewardsParamsResponse;
            };
            MsgAddRewardPeriodRequest: {
                encode(message: _644.MsgAddRewardPeriodRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.MsgAddRewardPeriodRequest;
                fromJSON(object: any): _644.MsgAddRewardPeriodRequest;
                toJSON(message: _644.MsgAddRewardPeriodRequest): unknown;
                fromPartial(object: {
                    signer?: string;
                    rewardPeriods?: {
                        rewardPeriodId?: string;
                        rewardPeriodStartBlock?: any;
                        rewardPeriodEndBlock?: any;
                        rewardPeriodAllocation?: string;
                        rewardPeriodPoolMultipliers?: {
                            poolMultiplierAsset?: string;
                            multiplier?: string;
                        }[];
                        rewardPeriodDefaultMultiplier?: string;
                        rewardPeriodDistribute?: boolean;
                        rewardPeriodMod?: any;
                    }[];
                }): _644.MsgAddRewardPeriodRequest;
            };
            MsgAddRewardPeriodResponse: {
                encode(_: _644.MsgAddRewardPeriodResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.MsgAddRewardPeriodResponse;
                fromJSON(_: any): _644.MsgAddRewardPeriodResponse;
                toJSON(_: _644.MsgAddRewardPeriodResponse): unknown;
                fromPartial(_: {}): _644.MsgAddRewardPeriodResponse;
            };
            MsgSetSymmetryThreshold: {
                encode(message: _644.MsgSetSymmetryThreshold, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.MsgSetSymmetryThreshold;
                fromJSON(object: any): _644.MsgSetSymmetryThreshold;
                toJSON(message: _644.MsgSetSymmetryThreshold): unknown;
                fromPartial(object: {
                    signer?: string;
                    threshold?: string;
                    ratio?: string;
                }): _644.MsgSetSymmetryThreshold;
            };
            MsgSetSymmetryThresholdResponse: {
                encode(_: _644.MsgSetSymmetryThresholdResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.MsgSetSymmetryThresholdResponse;
                fromJSON(_: any): _644.MsgSetSymmetryThresholdResponse;
                toJSON(_: _644.MsgSetSymmetryThresholdResponse): unknown;
                fromPartial(_: {}): _644.MsgSetSymmetryThresholdResponse;
            };
            MsgCancelUnlock: {
                encode(message: _644.MsgCancelUnlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.MsgCancelUnlock;
                fromJSON(object: any): _644.MsgCancelUnlock;
                toJSON(message: _644.MsgCancelUnlock): unknown;
                fromPartial(object: {
                    signer?: string;
                    externalAsset?: {
                        symbol?: string;
                    };
                    units?: string;
                }): _644.MsgCancelUnlock;
            };
            MsgCancelUnlockResponse: {
                encode(_: _644.MsgCancelUnlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.MsgCancelUnlockResponse;
                fromJSON(_: any): _644.MsgCancelUnlockResponse;
                toJSON(_: _644.MsgCancelUnlockResponse): unknown;
                fromPartial(_: {}): _644.MsgCancelUnlockResponse;
            };
            RemovalRequest: {
                encode(message: _644.RemovalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.RemovalRequest;
                fromJSON(object: any): _644.RemovalRequest;
                toJSON(message: _644.RemovalRequest): unknown;
                fromPartial(object: {
                    id?: any;
                    value?: string;
                    msg?: {
                        signer?: string;
                        externalAsset?: {
                            symbol?: string;
                        };
                        wBasisPoints?: string;
                        asymmetry?: string;
                    };
                }): _644.RemovalRequest;
            };
            MsgModifyLiquidityProtectionRates: {
                encode(message: _644.MsgModifyLiquidityProtectionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.MsgModifyLiquidityProtectionRates;
                fromJSON(object: any): _644.MsgModifyLiquidityProtectionRates;
                toJSON(message: _644.MsgModifyLiquidityProtectionRates): unknown;
                fromPartial(object: {
                    signer?: string;
                    currentRowanLiquidityThreshold?: string;
                }): _644.MsgModifyLiquidityProtectionRates;
            };
            MsgModifyLiquidityProtectionRatesResponse: {
                encode(_: _644.MsgModifyLiquidityProtectionRatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.MsgModifyLiquidityProtectionRatesResponse;
                fromJSON(_: any): _644.MsgModifyLiquidityProtectionRatesResponse;
                toJSON(_: _644.MsgModifyLiquidityProtectionRatesResponse): unknown;
                fromPartial(_: {}): _644.MsgModifyLiquidityProtectionRatesResponse;
            };
            MsgUpdateLiquidityProtectionParams: {
                encode(message: _644.MsgUpdateLiquidityProtectionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.MsgUpdateLiquidityProtectionParams;
                fromJSON(object: any): _644.MsgUpdateLiquidityProtectionParams;
                toJSON(message: _644.MsgUpdateLiquidityProtectionParams): unknown;
                fromPartial(object: {
                    signer?: string;
                    maxRowanLiquidityThreshold?: string;
                    maxRowanLiquidityThresholdAsset?: string;
                    epochLength?: any;
                    isActive?: boolean;
                }): _644.MsgUpdateLiquidityProtectionParams;
            };
            MsgUpdateLiquidityProtectionParamsResponse: {
                encode(_: _644.MsgUpdateLiquidityProtectionParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.MsgUpdateLiquidityProtectionParamsResponse;
                fromJSON(_: any): _644.MsgUpdateLiquidityProtectionParamsResponse;
                toJSON(_: _644.MsgUpdateLiquidityProtectionParamsResponse): unknown;
                fromPartial(_: {}): _644.MsgUpdateLiquidityProtectionParamsResponse;
            };
            MsgAddProviderDistributionPeriodRequest: {
                encode(message: _644.MsgAddProviderDistributionPeriodRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.MsgAddProviderDistributionPeriodRequest;
                fromJSON(object: any): _644.MsgAddProviderDistributionPeriodRequest;
                toJSON(message: _644.MsgAddProviderDistributionPeriodRequest): unknown;
                fromPartial(object: {
                    signer?: string;
                    distributionPeriods?: {
                        distributionPeriodBlockRate?: string;
                        distributionPeriodStartBlock?: any;
                        distributionPeriodEndBlock?: any;
                        distributionPeriodMod?: any;
                    }[];
                }): _644.MsgAddProviderDistributionPeriodRequest;
            };
            MsgAddProviderDistributionPeriodResponse: {
                encode(_: _644.MsgAddProviderDistributionPeriodResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.MsgAddProviderDistributionPeriodResponse;
                fromJSON(_: any): _644.MsgAddProviderDistributionPeriodResponse;
                toJSON(_: _644.MsgAddProviderDistributionPeriodResponse): unknown;
                fromPartial(_: {}): _644.MsgAddProviderDistributionPeriodResponse;
            };
            PoolReq: {
                encode(message: _643.PoolReq, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _643.PoolReq;
                fromJSON(object: any): _643.PoolReq;
                toJSON(message: _643.PoolReq): unknown;
                fromPartial(object: {
                    symbol?: string;
                }): _643.PoolReq;
            };
            PoolRes: {
                encode(message: _643.PoolRes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _643.PoolRes;
                fromJSON(object: any): _643.PoolRes;
                toJSON(message: _643.PoolRes): unknown;
                fromPartial(object: {
                    pool?: {
                        externalAsset?: {
                            symbol?: string;
                        };
                        nativeAssetBalance?: string;
                        externalAssetBalance?: string;
                        poolUnits?: string;
                        swapPriceNative?: string;
                        swapPriceExternal?: string;
                        rewardPeriodNativeDistributed?: string;
                        externalLiabilities?: string;
                        externalCustody?: string;
                        nativeLiabilities?: string;
                        nativeCustody?: string;
                        health?: string;
                        interestRate?: string;
                        lastHeightInterestRateComputed?: any;
                    };
                    clpModuleAddress?: string;
                    height?: any;
                }): _643.PoolRes;
            };
            PoolsReq: {
                encode(message: _643.PoolsReq, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _643.PoolsReq;
                fromJSON(object: any): _643.PoolsReq;
                toJSON(message: _643.PoolsReq): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _643.PoolsReq;
            };
            PoolsRes: {
                encode(message: _643.PoolsRes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _643.PoolsRes;
                fromJSON(object: any): _643.PoolsRes;
                toJSON(message: _643.PoolsRes): unknown;
                fromPartial(object: {
                    pools?: {
                        externalAsset?: {
                            symbol?: string;
                        };
                        nativeAssetBalance?: string;
                        externalAssetBalance?: string;
                        poolUnits?: string;
                        swapPriceNative?: string;
                        swapPriceExternal?: string;
                        rewardPeriodNativeDistributed?: string;
                        externalLiabilities?: string;
                        externalCustody?: string;
                        nativeLiabilities?: string;
                        nativeCustody?: string;
                        health?: string;
                        interestRate?: string;
                        lastHeightInterestRateComputed?: any;
                    }[];
                    clpModuleAddress?: string;
                    height?: any;
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _643.PoolsRes;
            };
            LiquidityProviderReq: {
                encode(message: _643.LiquidityProviderReq, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _643.LiquidityProviderReq;
                fromJSON(object: any): _643.LiquidityProviderReq;
                toJSON(message: _643.LiquidityProviderReq): unknown;
                fromPartial(object: {
                    symbol?: string;
                    lpAddress?: string;
                }): _643.LiquidityProviderReq;
            };
            LiquidityProviderRes: {
                encode(message: _643.LiquidityProviderRes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _643.LiquidityProviderRes;
                fromJSON(object: any): _643.LiquidityProviderRes;
                toJSON(message: _643.LiquidityProviderRes): unknown;
                fromPartial(object: {
                    liquidityProvider?: {
                        asset?: {
                            symbol?: string;
                        };
                        liquidityProviderUnits?: string;
                        liquidityProviderAddress?: string;
                        unlocks?: {
                            requestHeight?: any;
                            units?: string;
                        }[];
                    };
                    nativeAssetBalance?: string;
                    externalAssetBalance?: string;
                    height?: any;
                }): _643.LiquidityProviderRes;
            };
            AssetListReq: {
                encode(message: _643.AssetListReq, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _643.AssetListReq;
                fromJSON(object: any): _643.AssetListReq;
                toJSON(message: _643.AssetListReq): unknown;
                fromPartial(object: {
                    lpAddress?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _643.AssetListReq;
            };
            AssetListRes: {
                encode(message: _643.AssetListRes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _643.AssetListRes;
                fromJSON(object: any): _643.AssetListRes;
                toJSON(message: _643.AssetListRes): unknown;
                fromPartial(object: {
                    assets?: {
                        symbol?: string;
                    }[];
                    height?: any;
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _643.AssetListRes;
            };
            LiquidityProviderDataReq: {
                encode(message: _643.LiquidityProviderDataReq, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _643.LiquidityProviderDataReq;
                fromJSON(object: any): _643.LiquidityProviderDataReq;
                toJSON(message: _643.LiquidityProviderDataReq): unknown;
                fromPartial(object: {
                    lpAddress?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _643.LiquidityProviderDataReq;
            };
            LiquidityProviderDataRes: {
                encode(message: _643.LiquidityProviderDataRes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _643.LiquidityProviderDataRes;
                fromJSON(object: any): _643.LiquidityProviderDataRes;
                toJSON(message: _643.LiquidityProviderDataRes): unknown;
                fromPartial(object: {
                    liquidityProviderData?: {
                        liquidityProvider?: {
                            asset?: {
                                symbol?: string;
                            };
                            liquidityProviderUnits?: string;
                            liquidityProviderAddress?: string;
                            unlocks?: {
                                requestHeight?: any;
                                units?: string;
                            }[];
                        };
                        nativeAssetBalance?: string;
                        externalAssetBalance?: string;
                    }[];
                    height?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _643.LiquidityProviderDataRes;
            };
            LiquidityProviderListReq: {
                encode(message: _643.LiquidityProviderListReq, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _643.LiquidityProviderListReq;
                fromJSON(object: any): _643.LiquidityProviderListReq;
                toJSON(message: _643.LiquidityProviderListReq): unknown;
                fromPartial(object: {
                    symbol?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _643.LiquidityProviderListReq;
            };
            LiquidityProviderListRes: {
                encode(message: _643.LiquidityProviderListRes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _643.LiquidityProviderListRes;
                fromJSON(object: any): _643.LiquidityProviderListRes;
                toJSON(message: _643.LiquidityProviderListRes): unknown;
                fromPartial(object: {
                    liquidityProviders?: {
                        asset?: {
                            symbol?: string;
                        };
                        liquidityProviderUnits?: string;
                        liquidityProviderAddress?: string;
                        unlocks?: {
                            requestHeight?: any;
                            units?: string;
                        }[];
                    }[];
                    height?: any;
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _643.LiquidityProviderListRes;
            };
            LiquidityProvidersReq: {
                encode(message: _643.LiquidityProvidersReq, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _643.LiquidityProvidersReq;
                fromJSON(object: any): _643.LiquidityProvidersReq;
                toJSON(message: _643.LiquidityProvidersReq): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _643.LiquidityProvidersReq;
            };
            LiquidityProvidersRes: {
                encode(message: _643.LiquidityProvidersRes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _643.LiquidityProvidersRes;
                fromJSON(object: any): _643.LiquidityProvidersRes;
                toJSON(message: _643.LiquidityProvidersRes): unknown;
                fromPartial(object: {
                    liquidityProviders?: {
                        asset?: {
                            symbol?: string;
                        };
                        liquidityProviderUnits?: string;
                        liquidityProviderAddress?: string;
                        unlocks?: {
                            requestHeight?: any;
                            units?: string;
                        }[];
                    }[];
                    height?: any;
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _643.LiquidityProvidersRes;
            };
            ParamsReq: {
                encode(_: _643.ParamsReq, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _643.ParamsReq;
                fromJSON(_: any): _643.ParamsReq;
                toJSON(_: _643.ParamsReq): unknown;
                fromPartial(_: {}): _643.ParamsReq;
            };
            ParamsRes: {
                encode(message: _643.ParamsRes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _643.ParamsRes;
                fromJSON(object: any): _643.ParamsRes;
                toJSON(message: _643.ParamsRes): unknown;
                fromPartial(object: {
                    params?: {
                        minCreatePoolThreshold?: any;
                        enableRemovalQueue?: boolean;
                    };
                    symmetryThreshold?: string;
                    symmetryRatioThreshold?: string;
                }): _643.ParamsRes;
            };
            RewardParamsReq: {
                encode(_: _643.RewardParamsReq, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _643.RewardParamsReq;
                fromJSON(_: any): _643.RewardParamsReq;
                toJSON(_: _643.RewardParamsReq): unknown;
                fromPartial(_: {}): _643.RewardParamsReq;
            };
            RewardParamsRes: {
                encode(message: _643.RewardParamsRes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _643.RewardParamsRes;
                fromJSON(object: any): _643.RewardParamsRes;
                toJSON(message: _643.RewardParamsRes): unknown;
                fromPartial(object: {
                    params?: {
                        liquidityRemovalLockPeriod?: any;
                        liquidityRemovalCancelPeriod?: any;
                        rewardPeriods?: {
                            rewardPeriodId?: string;
                            rewardPeriodStartBlock?: any;
                            rewardPeriodEndBlock?: any;
                            rewardPeriodAllocation?: string;
                            rewardPeriodPoolMultipliers?: {
                                poolMultiplierAsset?: string;
                                multiplier?: string;
                            }[];
                            rewardPeriodDefaultMultiplier?: string;
                            rewardPeriodDistribute?: boolean;
                            rewardPeriodMod?: any;
                        }[];
                        rewardPeriodStartTime?: string;
                    };
                }): _643.RewardParamsRes;
            };
            PmtpParamsReq: {
                encode(_: _643.PmtpParamsReq, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _643.PmtpParamsReq;
                fromJSON(_: any): _643.PmtpParamsReq;
                toJSON(_: _643.PmtpParamsReq): unknown;
                fromPartial(_: {}): _643.PmtpParamsReq;
            };
            PmtpParamsRes: {
                encode(message: _643.PmtpParamsRes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _643.PmtpParamsRes;
                fromJSON(object: any): _643.PmtpParamsRes;
                toJSON(message: _643.PmtpParamsRes): unknown;
                fromPartial(object: {
                    params?: {
                        pmtpPeriodGovernanceRate?: string;
                        pmtpPeriodEpochLength?: any;
                        pmtpPeriodStartBlock?: any;
                        pmtpPeriodEndBlock?: any;
                    };
                    pmtpRateParams?: {
                        pmtpPeriodBlockRate?: string;
                        pmtpCurrentRunningRate?: string;
                        pmtpInterPolicyRate?: string;
                    };
                    pmtpEpoch?: {
                        epochCounter?: any;
                        blockCounter?: any;
                    };
                    height?: any;
                }): _643.PmtpParamsRes;
            };
            LiquidityProtectionParamsReq: {
                encode(_: _643.LiquidityProtectionParamsReq, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _643.LiquidityProtectionParamsReq;
                fromJSON(_: any): _643.LiquidityProtectionParamsReq;
                toJSON(_: _643.LiquidityProtectionParamsReq): unknown;
                fromPartial(_: {}): _643.LiquidityProtectionParamsReq;
            };
            LiquidityProtectionParamsRes: {
                encode(message: _643.LiquidityProtectionParamsRes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _643.LiquidityProtectionParamsRes;
                fromJSON(object: any): _643.LiquidityProtectionParamsRes;
                toJSON(message: _643.LiquidityProtectionParamsRes): unknown;
                fromPartial(object: {
                    params?: {
                        maxRowanLiquidityThreshold?: string;
                        maxRowanLiquidityThresholdAsset?: string;
                        epochLength?: any;
                        isActive?: boolean;
                    };
                    rateParams?: {
                        currentRowanLiquidityThreshold?: string;
                    };
                    height?: any;
                }): _643.LiquidityProtectionParamsRes;
            };
            ProviderDistributionParamsReq: {
                encode(_: _643.ProviderDistributionParamsReq, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _643.ProviderDistributionParamsReq;
                fromJSON(_: any): _643.ProviderDistributionParamsReq;
                toJSON(_: _643.ProviderDistributionParamsReq): unknown;
                fromPartial(_: {}): _643.ProviderDistributionParamsReq;
            };
            ProviderDistributionParamsRes: {
                encode(message: _643.ProviderDistributionParamsRes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _643.ProviderDistributionParamsRes;
                fromJSON(object: any): _643.ProviderDistributionParamsRes;
                toJSON(message: _643.ProviderDistributionParamsRes): unknown;
                fromPartial(object: {
                    params?: {
                        distributionPeriods?: {
                            distributionPeriodBlockRate?: string;
                            distributionPeriodStartBlock?: any;
                            distributionPeriodEndBlock?: any;
                            distributionPeriodMod?: any;
                        }[];
                    };
                }): _643.ProviderDistributionParamsRes;
            };
            Pool: {
                encode(message: _642.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _642.Pool;
                fromJSON(object: any): _642.Pool;
                toJSON(message: _642.Pool): unknown;
                fromPartial(object: {
                    externalAsset?: {
                        symbol?: string;
                    };
                    nativeAssetBalance?: string;
                    externalAssetBalance?: string;
                    poolUnits?: string;
                    swapPriceNative?: string;
                    swapPriceExternal?: string;
                    rewardPeriodNativeDistributed?: string;
                    externalLiabilities?: string;
                    externalCustody?: string;
                    nativeLiabilities?: string;
                    nativeCustody?: string;
                    health?: string;
                    interestRate?: string;
                    lastHeightInterestRateComputed?: any;
                }): _642.Pool;
            };
            Params: {
                encode(message: _641.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _641.Params;
                fromJSON(object: any): _641.Params;
                toJSON(message: _641.Params): unknown;
                fromPartial(object: {
                    minCreatePoolThreshold?: any;
                    enableRemovalQueue?: boolean;
                }): _641.Params;
            };
            RewardParams: {
                encode(message: _641.RewardParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _641.RewardParams;
                fromJSON(object: any): _641.RewardParams;
                toJSON(message: _641.RewardParams): unknown;
                fromPartial(object: {
                    liquidityRemovalLockPeriod?: any;
                    liquidityRemovalCancelPeriod?: any;
                    rewardPeriods?: {
                        rewardPeriodId?: string;
                        rewardPeriodStartBlock?: any;
                        rewardPeriodEndBlock?: any;
                        rewardPeriodAllocation?: string;
                        rewardPeriodPoolMultipliers?: {
                            poolMultiplierAsset?: string;
                            multiplier?: string;
                        }[];
                        rewardPeriodDefaultMultiplier?: string;
                        rewardPeriodDistribute?: boolean;
                        rewardPeriodMod?: any;
                    }[];
                    rewardPeriodStartTime?: string;
                }): _641.RewardParams;
            };
            PmtpRateParams: {
                encode(message: _641.PmtpRateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _641.PmtpRateParams;
                fromJSON(object: any): _641.PmtpRateParams;
                toJSON(message: _641.PmtpRateParams): unknown;
                fromPartial(object: {
                    pmtpPeriodBlockRate?: string;
                    pmtpCurrentRunningRate?: string;
                    pmtpInterPolicyRate?: string;
                }): _641.PmtpRateParams;
            };
            PmtpParams: {
                encode(message: _641.PmtpParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _641.PmtpParams;
                fromJSON(object: any): _641.PmtpParams;
                toJSON(message: _641.PmtpParams): unknown;
                fromPartial(object: {
                    pmtpPeriodGovernanceRate?: string;
                    pmtpPeriodEpochLength?: any;
                    pmtpPeriodStartBlock?: any;
                    pmtpPeriodEndBlock?: any;
                }): _641.PmtpParams;
            };
            RewardPeriod: {
                encode(message: _641.RewardPeriod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _641.RewardPeriod;
                fromJSON(object: any): _641.RewardPeriod;
                toJSON(message: _641.RewardPeriod): unknown;
                fromPartial(object: {
                    rewardPeriodId?: string;
                    rewardPeriodStartBlock?: any;
                    rewardPeriodEndBlock?: any;
                    rewardPeriodAllocation?: string;
                    rewardPeriodPoolMultipliers?: {
                        poolMultiplierAsset?: string;
                        multiplier?: string;
                    }[];
                    rewardPeriodDefaultMultiplier?: string;
                    rewardPeriodDistribute?: boolean;
                    rewardPeriodMod?: any;
                }): _641.RewardPeriod;
            };
            PoolMultiplier: {
                encode(message: _641.PoolMultiplier, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _641.PoolMultiplier;
                fromJSON(object: any): _641.PoolMultiplier;
                toJSON(message: _641.PoolMultiplier): unknown;
                fromPartial(object: {
                    poolMultiplierAsset?: string;
                    multiplier?: string;
                }): _641.PoolMultiplier;
            };
            LiquidityProtectionParams: {
                encode(message: _641.LiquidityProtectionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _641.LiquidityProtectionParams;
                fromJSON(object: any): _641.LiquidityProtectionParams;
                toJSON(message: _641.LiquidityProtectionParams): unknown;
                fromPartial(object: {
                    maxRowanLiquidityThreshold?: string;
                    maxRowanLiquidityThresholdAsset?: string;
                    epochLength?: any;
                    isActive?: boolean;
                }): _641.LiquidityProtectionParams;
            };
            LiquidityProtectionRateParams: {
                encode(message: _641.LiquidityProtectionRateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _641.LiquidityProtectionRateParams;
                fromJSON(object: any): _641.LiquidityProtectionRateParams;
                toJSON(message: _641.LiquidityProtectionRateParams): unknown;
                fromPartial(object: {
                    currentRowanLiquidityThreshold?: string;
                }): _641.LiquidityProtectionRateParams;
            };
            ProviderDistributionPeriod: {
                encode(message: _641.ProviderDistributionPeriod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _641.ProviderDistributionPeriod;
                fromJSON(object: any): _641.ProviderDistributionPeriod;
                toJSON(message: _641.ProviderDistributionPeriod): unknown;
                fromPartial(object: {
                    distributionPeriodBlockRate?: string;
                    distributionPeriodStartBlock?: any;
                    distributionPeriodEndBlock?: any;
                    distributionPeriodMod?: any;
                }): _641.ProviderDistributionPeriod;
            };
            ProviderDistributionParams: {
                encode(message: _641.ProviderDistributionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _641.ProviderDistributionParams;
                fromJSON(object: any): _641.ProviderDistributionParams;
                toJSON(message: _641.ProviderDistributionParams): unknown;
                fromPartial(object: {
                    distributionPeriods?: {
                        distributionPeriodBlockRate?: string;
                        distributionPeriodStartBlock?: any;
                        distributionPeriodEndBlock?: any;
                        distributionPeriodMod?: any;
                    }[];
                }): _641.ProviderDistributionParams;
            };
            GenesisState: {
                encode(message: _640.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _640.GenesisState;
                fromJSON(object: any): _640.GenesisState;
                toJSON(message: _640.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        minCreatePoolThreshold?: any;
                        enableRemovalQueue?: boolean;
                    };
                    addressWhitelist?: string[];
                    poolList?: {
                        externalAsset?: {
                            symbol?: string;
                        };
                        nativeAssetBalance?: string;
                        externalAssetBalance?: string;
                        poolUnits?: string;
                        swapPriceNative?: string;
                        swapPriceExternal?: string;
                        rewardPeriodNativeDistributed?: string;
                        externalLiabilities?: string;
                        externalCustody?: string;
                        nativeLiabilities?: string;
                        nativeCustody?: string;
                        health?: string;
                        interestRate?: string;
                        lastHeightInterestRateComputed?: any;
                    }[];
                    liquidityProviders?: {
                        asset?: {
                            symbol?: string;
                        };
                        liquidityProviderUnits?: string;
                        liquidityProviderAddress?: string;
                        unlocks?: {
                            requestHeight?: any;
                            units?: string;
                        }[];
                    }[];
                }): _640.GenesisState;
            };
        };
    }
    namespace dispensation {
        const v1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createDistribution(value: _647.MsgCreateDistribution): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createUserClaim(value: _647.MsgCreateUserClaim): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    runDistribution(value: _647.MsgRunDistribution): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createDistribution(value: _647.MsgCreateDistribution): {
                        typeUrl: string;
                        value: _647.MsgCreateDistribution;
                    };
                    createUserClaim(value: _647.MsgCreateUserClaim): {
                        typeUrl: string;
                        value: _647.MsgCreateUserClaim;
                    };
                    runDistribution(value: _647.MsgRunDistribution): {
                        typeUrl: string;
                        value: _647.MsgRunDistribution;
                    };
                };
                toJSON: {
                    createDistribution(value: _647.MsgCreateDistribution): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createUserClaim(value: _647.MsgCreateUserClaim): {
                        typeUrl: string;
                        value: unknown;
                    };
                    runDistribution(value: _647.MsgRunDistribution): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createDistribution(value: any): {
                        typeUrl: string;
                        value: _647.MsgCreateDistribution;
                    };
                    createUserClaim(value: any): {
                        typeUrl: string;
                        value: _647.MsgCreateUserClaim;
                    };
                    runDistribution(value: any): {
                        typeUrl: string;
                        value: _647.MsgRunDistribution;
                    };
                };
                fromPartial: {
                    createDistribution(value: _647.MsgCreateDistribution): {
                        typeUrl: string;
                        value: _647.MsgCreateDistribution;
                    };
                    createUserClaim(value: _647.MsgCreateUserClaim): {
                        typeUrl: string;
                        value: _647.MsgCreateUserClaim;
                    };
                    runDistribution(value: _647.MsgRunDistribution): {
                        typeUrl: string;
                        value: _647.MsgRunDistribution;
                    };
                };
            };
            AminoConverter: {
                "/sifnode.dispensation.v1.MsgCreateDistribution": {
                    aminoType: string;
                    toAmino: ({ distributor, authorizedRunner, distributionType, output }: _647.MsgCreateDistribution) => {
                        distributor: string;
                        authorized_runner: string;
                        distribution_type: number;
                        output: string[];
                    };
                    fromAmino: ({ distributor, authorized_runner, distribution_type, output }: {
                        distributor: string;
                        authorized_runner: string;
                        distribution_type: number;
                        output: string[];
                    }) => _647.MsgCreateDistribution;
                };
                "/sifnode.dispensation.v1.MsgCreateUserClaim": {
                    aminoType: string;
                    toAmino: ({ userClaimAddress, userClaimType }: _647.MsgCreateUserClaim) => {
                        user_claim_address: string;
                        user_claim_type: number;
                    };
                    fromAmino: ({ user_claim_address, user_claim_type }: {
                        user_claim_address: string;
                        user_claim_type: number;
                    }) => _647.MsgCreateUserClaim;
                };
                "/sifnode.dispensation.v1.MsgRunDistribution": {
                    aminoType: string;
                    toAmino: ({ authorizedRunner, distributionName, distributionType, distributionCount }: _647.MsgRunDistribution) => {
                        authorized_runner: string;
                        distribution_name: string;
                        distribution_type: number;
                        distribution_count: string;
                    };
                    fromAmino: ({ authorized_runner, distribution_name, distribution_type, distribution_count }: {
                        authorized_runner: string;
                        distribution_name: string;
                        distribution_type: number;
                        distribution_count: string;
                    }) => _647.MsgRunDistribution;
                };
            };
            distributionTypeFromJSON(object: any): _648.DistributionType;
            distributionTypeToJSON(object: _648.DistributionType): string;
            distributionStatusFromJSON(object: any): _648.DistributionStatus;
            distributionStatusToJSON(object: _648.DistributionStatus): string;
            DistributionType: typeof _648.DistributionType;
            DistributionStatus: typeof _648.DistributionStatus;
            GenesisState: {
                encode(message: _648.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _648.GenesisState;
                fromJSON(object: any): _648.GenesisState;
                toJSON(message: _648.GenesisState): unknown;
                fromPartial(object: {
                    distributionRecords?: {
                        distributionRecords?: {
                            distributionStatus?: _648.DistributionStatus;
                            distributionType?: _648.DistributionType;
                            distributionName?: string;
                            recipientAddress?: string;
                            coins?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            distributionStartHeight?: any;
                            distributionCompletedHeight?: any;
                            authorizedRunner?: string;
                        }[];
                    };
                    distributions?: {
                        distributions?: {
                            distributionType?: _648.DistributionType;
                            distributionName?: string;
                            runner?: string;
                        }[];
                    };
                    claims?: {
                        userClaims?: {
                            userAddress?: string;
                            userClaimType?: _648.DistributionType;
                            userClaimTime?: string;
                        }[];
                    };
                }): _648.GenesisState;
            };
            DistributionRecord: {
                encode(message: _648.DistributionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _648.DistributionRecord;
                fromJSON(object: any): _648.DistributionRecord;
                toJSON(message: _648.DistributionRecord): unknown;
                fromPartial(object: {
                    distributionStatus?: _648.DistributionStatus;
                    distributionType?: _648.DistributionType;
                    distributionName?: string;
                    recipientAddress?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    distributionStartHeight?: any;
                    distributionCompletedHeight?: any;
                    authorizedRunner?: string;
                }): _648.DistributionRecord;
            };
            DistributionRecords: {
                encode(message: _648.DistributionRecords, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _648.DistributionRecords;
                fromJSON(object: any): _648.DistributionRecords;
                toJSON(message: _648.DistributionRecords): unknown;
                fromPartial(object: {
                    distributionRecords?: {
                        distributionStatus?: _648.DistributionStatus;
                        distributionType?: _648.DistributionType;
                        distributionName?: string;
                        recipientAddress?: string;
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        distributionStartHeight?: any;
                        distributionCompletedHeight?: any;
                        authorizedRunner?: string;
                    }[];
                }): _648.DistributionRecords;
            };
            Distributions: {
                encode(message: _648.Distributions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _648.Distributions;
                fromJSON(object: any): _648.Distributions;
                toJSON(message: _648.Distributions): unknown;
                fromPartial(object: {
                    distributions?: {
                        distributionType?: _648.DistributionType;
                        distributionName?: string;
                        runner?: string;
                    }[];
                }): _648.Distributions;
            };
            Distribution: {
                encode(message: _648.Distribution, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _648.Distribution;
                fromJSON(object: any): _648.Distribution;
                toJSON(message: _648.Distribution): unknown;
                fromPartial(object: {
                    distributionType?: _648.DistributionType;
                    distributionName?: string;
                    runner?: string;
                }): _648.Distribution;
            };
            UserClaim: {
                encode(message: _648.UserClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _648.UserClaim;
                fromJSON(object: any): _648.UserClaim;
                toJSON(message: _648.UserClaim): unknown;
                fromPartial(object: {
                    userAddress?: string;
                    userClaimType?: _648.DistributionType;
                    userClaimTime?: string;
                }): _648.UserClaim;
            };
            UserClaims: {
                encode(message: _648.UserClaims, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _648.UserClaims;
                fromJSON(object: any): _648.UserClaims;
                toJSON(message: _648.UserClaims): unknown;
                fromPartial(object: {
                    userClaims?: {
                        userAddress?: string;
                        userClaimType?: _648.DistributionType;
                        userClaimTime?: string;
                    }[];
                }): _648.UserClaims;
            };
            MintController: {
                encode(message: _648.MintController, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _648.MintController;
                fromJSON(object: any): _648.MintController;
                toJSON(message: _648.MintController): unknown;
                fromPartial(object: {
                    totalCounter?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _648.MintController;
            };
            MsgCreateDistribution: {
                encode(message: _647.MsgCreateDistribution, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _647.MsgCreateDistribution;
                fromJSON(object: any): _647.MsgCreateDistribution;
                toJSON(message: _647.MsgCreateDistribution): unknown;
                fromPartial(object: {
                    distributor?: string;
                    authorizedRunner?: string;
                    distributionType?: _648.DistributionType;
                    output?: string[];
                }): _647.MsgCreateDistribution;
            };
            MsgCreateDistributionResponse: {
                encode(_: _647.MsgCreateDistributionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _647.MsgCreateDistributionResponse;
                fromJSON(_: any): _647.MsgCreateDistributionResponse;
                toJSON(_: _647.MsgCreateDistributionResponse): unknown;
                fromPartial(_: {}): _647.MsgCreateDistributionResponse;
            };
            MsgCreateClaimResponse: {
                encode(_: _647.MsgCreateClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _647.MsgCreateClaimResponse;
                fromJSON(_: any): _647.MsgCreateClaimResponse;
                toJSON(_: _647.MsgCreateClaimResponse): unknown;
                fromPartial(_: {}): _647.MsgCreateClaimResponse;
            };
            MsgRunDistributionResponse: {
                encode(_: _647.MsgRunDistributionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _647.MsgRunDistributionResponse;
                fromJSON(_: any): _647.MsgRunDistributionResponse;
                toJSON(_: _647.MsgRunDistributionResponse): unknown;
                fromPartial(_: {}): _647.MsgRunDistributionResponse;
            };
            MsgCreateUserClaim: {
                encode(message: _647.MsgCreateUserClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _647.MsgCreateUserClaim;
                fromJSON(object: any): _647.MsgCreateUserClaim;
                toJSON(message: _647.MsgCreateUserClaim): unknown;
                fromPartial(object: {
                    userClaimAddress?: string;
                    userClaimType?: _648.DistributionType;
                }): _647.MsgCreateUserClaim;
            };
            MsgRunDistribution: {
                encode(message: _647.MsgRunDistribution, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _647.MsgRunDistribution;
                fromJSON(object: any): _647.MsgRunDistribution;
                toJSON(message: _647.MsgRunDistribution): unknown;
                fromPartial(object: {
                    authorizedRunner?: string;
                    distributionName?: string;
                    distributionType?: _648.DistributionType;
                    distributionCount?: any;
                }): _647.MsgRunDistribution;
            };
            QueryAllDistributionsRequest: {
                encode(_: _646.QueryAllDistributionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _646.QueryAllDistributionsRequest;
                fromJSON(_: any): _646.QueryAllDistributionsRequest;
                toJSON(_: _646.QueryAllDistributionsRequest): unknown;
                fromPartial(_: {}): _646.QueryAllDistributionsRequest;
            };
            QueryAllDistributionsResponse: {
                encode(message: _646.QueryAllDistributionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _646.QueryAllDistributionsResponse;
                fromJSON(object: any): _646.QueryAllDistributionsResponse;
                toJSON(message: _646.QueryAllDistributionsResponse): unknown;
                fromPartial(object: {
                    distributions?: {
                        distributionType?: _648.DistributionType;
                        distributionName?: string;
                        runner?: string;
                    }[];
                    height?: any;
                }): _646.QueryAllDistributionsResponse;
            };
            QueryRecordsByDistributionNameRequest: {
                encode(message: _646.QueryRecordsByDistributionNameRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _646.QueryRecordsByDistributionNameRequest;
                fromJSON(object: any): _646.QueryRecordsByDistributionNameRequest;
                toJSON(message: _646.QueryRecordsByDistributionNameRequest): unknown;
                fromPartial(object: {
                    distributionName?: string;
                    status?: _648.DistributionStatus;
                }): _646.QueryRecordsByDistributionNameRequest;
            };
            QueryRecordsByDistributionNameResponse: {
                encode(message: _646.QueryRecordsByDistributionNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _646.QueryRecordsByDistributionNameResponse;
                fromJSON(object: any): _646.QueryRecordsByDistributionNameResponse;
                toJSON(message: _646.QueryRecordsByDistributionNameResponse): unknown;
                fromPartial(object: {
                    distributionRecords?: {
                        distributionRecords?: {
                            distributionStatus?: _648.DistributionStatus;
                            distributionType?: _648.DistributionType;
                            distributionName?: string;
                            recipientAddress?: string;
                            coins?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            distributionStartHeight?: any;
                            distributionCompletedHeight?: any;
                            authorizedRunner?: string;
                        }[];
                    };
                    height?: any;
                }): _646.QueryRecordsByDistributionNameResponse;
            };
            QueryRecordsByRecipientAddrRequest: {
                encode(message: _646.QueryRecordsByRecipientAddrRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _646.QueryRecordsByRecipientAddrRequest;
                fromJSON(object: any): _646.QueryRecordsByRecipientAddrRequest;
                toJSON(message: _646.QueryRecordsByRecipientAddrRequest): unknown;
                fromPartial(object: {
                    address?: string;
                }): _646.QueryRecordsByRecipientAddrRequest;
            };
            QueryRecordsByRecipientAddrResponse: {
                encode(message: _646.QueryRecordsByRecipientAddrResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _646.QueryRecordsByRecipientAddrResponse;
                fromJSON(object: any): _646.QueryRecordsByRecipientAddrResponse;
                toJSON(message: _646.QueryRecordsByRecipientAddrResponse): unknown;
                fromPartial(object: {
                    distributionRecords?: {
                        distributionRecords?: {
                            distributionStatus?: _648.DistributionStatus;
                            distributionType?: _648.DistributionType;
                            distributionName?: string;
                            recipientAddress?: string;
                            coins?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            distributionStartHeight?: any;
                            distributionCompletedHeight?: any;
                            authorizedRunner?: string;
                        }[];
                    };
                    height?: any;
                }): _646.QueryRecordsByRecipientAddrResponse;
            };
            QueryClaimsByTypeRequest: {
                encode(message: _646.QueryClaimsByTypeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _646.QueryClaimsByTypeRequest;
                fromJSON(object: any): _646.QueryClaimsByTypeRequest;
                toJSON(message: _646.QueryClaimsByTypeRequest): unknown;
                fromPartial(object: {
                    userClaimType?: _648.DistributionType;
                }): _646.QueryClaimsByTypeRequest;
            };
            QueryClaimsResponse: {
                encode(message: _646.QueryClaimsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _646.QueryClaimsResponse;
                fromJSON(object: any): _646.QueryClaimsResponse;
                toJSON(message: _646.QueryClaimsResponse): unknown;
                fromPartial(object: {
                    claims?: {
                        userAddress?: string;
                        userClaimType?: _648.DistributionType;
                        userClaimTime?: string;
                    }[];
                    height?: any;
                }): _646.QueryClaimsResponse;
            };
        };
    }
    namespace ethbridge {
        const v1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    lock(value: _650.MsgLock): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burn(value: _650.MsgBurn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createEthBridgeClaim(value: _650.MsgCreateEthBridgeClaim): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateWhiteListValidator(value: _650.MsgUpdateWhiteListValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateCethReceiverAccount(value: _650.MsgUpdateCethReceiverAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    rescueCeth(value: _650.MsgRescueCeth): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setBlacklist(value: _650.MsgSetBlacklist): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    lock(value: _650.MsgLock): {
                        typeUrl: string;
                        value: _650.MsgLock;
                    };
                    burn(value: _650.MsgBurn): {
                        typeUrl: string;
                        value: _650.MsgBurn;
                    };
                    createEthBridgeClaim(value: _650.MsgCreateEthBridgeClaim): {
                        typeUrl: string;
                        value: _650.MsgCreateEthBridgeClaim;
                    };
                    updateWhiteListValidator(value: _650.MsgUpdateWhiteListValidator): {
                        typeUrl: string;
                        value: _650.MsgUpdateWhiteListValidator;
                    };
                    updateCethReceiverAccount(value: _650.MsgUpdateCethReceiverAccount): {
                        typeUrl: string;
                        value: _650.MsgUpdateCethReceiverAccount;
                    };
                    rescueCeth(value: _650.MsgRescueCeth): {
                        typeUrl: string;
                        value: _650.MsgRescueCeth;
                    };
                    setBlacklist(value: _650.MsgSetBlacklist): {
                        typeUrl: string;
                        value: _650.MsgSetBlacklist;
                    };
                };
                toJSON: {
                    lock(value: _650.MsgLock): {
                        typeUrl: string;
                        value: unknown;
                    };
                    burn(value: _650.MsgBurn): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createEthBridgeClaim(value: _650.MsgCreateEthBridgeClaim): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateWhiteListValidator(value: _650.MsgUpdateWhiteListValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateCethReceiverAccount(value: _650.MsgUpdateCethReceiverAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    rescueCeth(value: _650.MsgRescueCeth): {
                        typeUrl: string;
                        value: unknown;
                    };
                    setBlacklist(value: _650.MsgSetBlacklist): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    lock(value: any): {
                        typeUrl: string;
                        value: _650.MsgLock;
                    };
                    burn(value: any): {
                        typeUrl: string;
                        value: _650.MsgBurn;
                    };
                    createEthBridgeClaim(value: any): {
                        typeUrl: string;
                        value: _650.MsgCreateEthBridgeClaim;
                    };
                    updateWhiteListValidator(value: any): {
                        typeUrl: string;
                        value: _650.MsgUpdateWhiteListValidator;
                    };
                    updateCethReceiverAccount(value: any): {
                        typeUrl: string;
                        value: _650.MsgUpdateCethReceiverAccount;
                    };
                    rescueCeth(value: any): {
                        typeUrl: string;
                        value: _650.MsgRescueCeth;
                    };
                    setBlacklist(value: any): {
                        typeUrl: string;
                        value: _650.MsgSetBlacklist;
                    };
                };
                fromPartial: {
                    lock(value: _650.MsgLock): {
                        typeUrl: string;
                        value: _650.MsgLock;
                    };
                    burn(value: _650.MsgBurn): {
                        typeUrl: string;
                        value: _650.MsgBurn;
                    };
                    createEthBridgeClaim(value: _650.MsgCreateEthBridgeClaim): {
                        typeUrl: string;
                        value: _650.MsgCreateEthBridgeClaim;
                    };
                    updateWhiteListValidator(value: _650.MsgUpdateWhiteListValidator): {
                        typeUrl: string;
                        value: _650.MsgUpdateWhiteListValidator;
                    };
                    updateCethReceiverAccount(value: _650.MsgUpdateCethReceiverAccount): {
                        typeUrl: string;
                        value: _650.MsgUpdateCethReceiverAccount;
                    };
                    rescueCeth(value: _650.MsgRescueCeth): {
                        typeUrl: string;
                        value: _650.MsgRescueCeth;
                    };
                    setBlacklist(value: _650.MsgSetBlacklist): {
                        typeUrl: string;
                        value: _650.MsgSetBlacklist;
                    };
                };
            };
            AminoConverter: {
                "/sifnode.ethbridge.v1.MsgLock": {
                    aminoType: string;
                    toAmino: ({ cosmosSender, amount, symbol, ethereumChainId, ethereumReceiver, cethAmount }: _650.MsgLock) => {
                        cosmos_sender: string;
                        amount: string;
                        symbol: string;
                        ethereum_chain_id: string;
                        ethereum_receiver: string;
                        ceth_amount: string;
                    };
                    fromAmino: ({ cosmos_sender, amount, symbol, ethereum_chain_id, ethereum_receiver, ceth_amount }: {
                        cosmos_sender: string;
                        amount: string;
                        symbol: string;
                        ethereum_chain_id: string;
                        ethereum_receiver: string;
                        ceth_amount: string;
                    }) => _650.MsgLock;
                };
                "/sifnode.ethbridge.v1.MsgBurn": {
                    aminoType: string;
                    toAmino: ({ cosmosSender, amount, symbol, ethereumChainId, ethereumReceiver, cethAmount }: _650.MsgBurn) => {
                        cosmos_sender: string;
                        amount: string;
                        symbol: string;
                        ethereum_chain_id: string;
                        ethereum_receiver: string;
                        ceth_amount: string;
                    };
                    fromAmino: ({ cosmos_sender, amount, symbol, ethereum_chain_id, ethereum_receiver, ceth_amount }: {
                        cosmos_sender: string;
                        amount: string;
                        symbol: string;
                        ethereum_chain_id: string;
                        ethereum_receiver: string;
                        ceth_amount: string;
                    }) => _650.MsgBurn;
                };
                "/sifnode.ethbridge.v1.MsgCreateEthBridgeClaim": {
                    aminoType: string;
                    toAmino: ({ ethBridgeClaim }: _650.MsgCreateEthBridgeClaim) => {
                        eth_bridge_claim: {
                            ethereum_chain_id: string;
                            bridge_contract_address: string;
                            nonce: string;
                            symbol: string;
                            token_contract_address: string;
                            ethereum_sender: string;
                            cosmos_receiver: string;
                            validator_address: string;
                            amount: string;
                            claim_type: number;
                        };
                    };
                    fromAmino: ({ eth_bridge_claim }: {
                        eth_bridge_claim: {
                            ethereum_chain_id: string;
                            bridge_contract_address: string;
                            nonce: string;
                            symbol: string;
                            token_contract_address: string;
                            ethereum_sender: string;
                            cosmos_receiver: string;
                            validator_address: string;
                            amount: string;
                            claim_type: number;
                        };
                    }) => _650.MsgCreateEthBridgeClaim;
                };
                "/sifnode.ethbridge.v1.MsgUpdateWhiteListValidator": {
                    aminoType: string;
                    toAmino: ({ cosmosSender, validator, operationType }: _650.MsgUpdateWhiteListValidator) => {
                        cosmos_sender: string;
                        validator: string;
                        operation_type: string;
                    };
                    fromAmino: ({ cosmos_sender, validator, operation_type }: {
                        cosmos_sender: string;
                        validator: string;
                        operation_type: string;
                    }) => _650.MsgUpdateWhiteListValidator;
                };
                "/sifnode.ethbridge.v1.MsgUpdateCethReceiverAccount": {
                    aminoType: string;
                    toAmino: ({ cosmosSender, cethReceiverAccount }: _650.MsgUpdateCethReceiverAccount) => {
                        cosmos_sender: string;
                        ceth_receiver_account: string;
                    };
                    fromAmino: ({ cosmos_sender, ceth_receiver_account }: {
                        cosmos_sender: string;
                        ceth_receiver_account: string;
                    }) => _650.MsgUpdateCethReceiverAccount;
                };
                "/sifnode.ethbridge.v1.MsgRescueCeth": {
                    aminoType: string;
                    toAmino: ({ cosmosSender, cosmosReceiver, cethAmount }: _650.MsgRescueCeth) => {
                        cosmos_sender: string;
                        cosmos_receiver: string;
                        ceth_amount: string;
                    };
                    fromAmino: ({ cosmos_sender, cosmos_receiver, ceth_amount }: {
                        cosmos_sender: string;
                        cosmos_receiver: string;
                        ceth_amount: string;
                    }) => _650.MsgRescueCeth;
                };
                "/sifnode.ethbridge.v1.MsgSetBlacklist": {
                    aminoType: string;
                    toAmino: ({ from, addresses }: _650.MsgSetBlacklist) => {
                        from: string;
                        addresses: string[];
                    };
                    fromAmino: ({ from, addresses }: {
                        from: string;
                        addresses: string[];
                    }) => _650.MsgSetBlacklist;
                };
            };
            claimTypeFromJSON(object: any): _651.ClaimType;
            claimTypeToJSON(object: _651.ClaimType): string;
            ClaimType: typeof _651.ClaimType;
            EthBridgeClaim: {
                encode(message: _651.EthBridgeClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _651.EthBridgeClaim;
                fromJSON(object: any): _651.EthBridgeClaim;
                toJSON(message: _651.EthBridgeClaim): unknown;
                fromPartial(object: {
                    ethereumChainId?: any;
                    bridgeContractAddress?: string;
                    nonce?: any;
                    symbol?: string;
                    tokenContractAddress?: string;
                    ethereumSender?: string;
                    cosmosReceiver?: string;
                    validatorAddress?: string;
                    amount?: string;
                    claimType?: _651.ClaimType;
                }): _651.EthBridgeClaim;
            };
            PeggyTokens: {
                encode(message: _651.PeggyTokens, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _651.PeggyTokens;
                fromJSON(object: any): _651.PeggyTokens;
                toJSON(message: _651.PeggyTokens): unknown;
                fromPartial(object: {
                    tokens?: string[];
                }): _651.PeggyTokens;
            };
            GenesisState: {
                encode(message: _651.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _651.GenesisState;
                fromJSON(object: any): _651.GenesisState;
                toJSON(message: _651.GenesisState): unknown;
                fromPartial(object: {
                    cethReceiveAccount?: string;
                    peggyTokens?: string[];
                }): _651.GenesisState;
            };
            MsgLock: {
                encode(message: _650.MsgLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _650.MsgLock;
                fromJSON(object: any): _650.MsgLock;
                toJSON(message: _650.MsgLock): unknown;
                fromPartial(object: {
                    cosmosSender?: string;
                    amount?: string;
                    symbol?: string;
                    ethereumChainId?: any;
                    ethereumReceiver?: string;
                    cethAmount?: string;
                }): _650.MsgLock;
            };
            MsgLockResponse: {
                encode(_: _650.MsgLockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _650.MsgLockResponse;
                fromJSON(_: any): _650.MsgLockResponse;
                toJSON(_: _650.MsgLockResponse): unknown;
                fromPartial(_: {}): _650.MsgLockResponse;
            };
            MsgBurn: {
                encode(message: _650.MsgBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _650.MsgBurn;
                fromJSON(object: any): _650.MsgBurn;
                toJSON(message: _650.MsgBurn): unknown;
                fromPartial(object: {
                    cosmosSender?: string;
                    amount?: string;
                    symbol?: string;
                    ethereumChainId?: any;
                    ethereumReceiver?: string;
                    cethAmount?: string;
                }): _650.MsgBurn;
            };
            MsgBurnResponse: {
                encode(_: _650.MsgBurnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _650.MsgBurnResponse;
                fromJSON(_: any): _650.MsgBurnResponse;
                toJSON(_: _650.MsgBurnResponse): unknown;
                fromPartial(_: {}): _650.MsgBurnResponse;
            };
            MsgCreateEthBridgeClaim: {
                encode(message: _650.MsgCreateEthBridgeClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _650.MsgCreateEthBridgeClaim;
                fromJSON(object: any): _650.MsgCreateEthBridgeClaim;
                toJSON(message: _650.MsgCreateEthBridgeClaim): unknown;
                fromPartial(object: {
                    ethBridgeClaim?: {
                        ethereumChainId?: any;
                        bridgeContractAddress?: string;
                        nonce?: any;
                        symbol?: string;
                        tokenContractAddress?: string;
                        ethereumSender?: string;
                        cosmosReceiver?: string;
                        validatorAddress?: string;
                        amount?: string;
                        claimType?: _651.ClaimType;
                    };
                }): _650.MsgCreateEthBridgeClaim;
            };
            MsgCreateEthBridgeClaimResponse: {
                encode(_: _650.MsgCreateEthBridgeClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _650.MsgCreateEthBridgeClaimResponse;
                fromJSON(_: any): _650.MsgCreateEthBridgeClaimResponse;
                toJSON(_: _650.MsgCreateEthBridgeClaimResponse): unknown;
                fromPartial(_: {}): _650.MsgCreateEthBridgeClaimResponse;
            };
            MsgUpdateWhiteListValidator: {
                encode(message: _650.MsgUpdateWhiteListValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _650.MsgUpdateWhiteListValidator;
                fromJSON(object: any): _650.MsgUpdateWhiteListValidator;
                toJSON(message: _650.MsgUpdateWhiteListValidator): unknown;
                fromPartial(object: {
                    cosmosSender?: string;
                    validator?: string;
                    operationType?: string;
                }): _650.MsgUpdateWhiteListValidator;
            };
            MsgUpdateWhiteListValidatorResponse: {
                encode(_: _650.MsgUpdateWhiteListValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _650.MsgUpdateWhiteListValidatorResponse;
                fromJSON(_: any): _650.MsgUpdateWhiteListValidatorResponse;
                toJSON(_: _650.MsgUpdateWhiteListValidatorResponse): unknown;
                fromPartial(_: {}): _650.MsgUpdateWhiteListValidatorResponse;
            };
            MsgUpdateCethReceiverAccount: {
                encode(message: _650.MsgUpdateCethReceiverAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _650.MsgUpdateCethReceiverAccount;
                fromJSON(object: any): _650.MsgUpdateCethReceiverAccount;
                toJSON(message: _650.MsgUpdateCethReceiverAccount): unknown;
                fromPartial(object: {
                    cosmosSender?: string;
                    cethReceiverAccount?: string;
                }): _650.MsgUpdateCethReceiverAccount;
            };
            MsgUpdateCethReceiverAccountResponse: {
                encode(_: _650.MsgUpdateCethReceiverAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _650.MsgUpdateCethReceiverAccountResponse;
                fromJSON(_: any): _650.MsgUpdateCethReceiverAccountResponse;
                toJSON(_: _650.MsgUpdateCethReceiverAccountResponse): unknown;
                fromPartial(_: {}): _650.MsgUpdateCethReceiverAccountResponse;
            };
            MsgRescueCeth: {
                encode(message: _650.MsgRescueCeth, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _650.MsgRescueCeth;
                fromJSON(object: any): _650.MsgRescueCeth;
                toJSON(message: _650.MsgRescueCeth): unknown;
                fromPartial(object: {
                    cosmosSender?: string;
                    cosmosReceiver?: string;
                    cethAmount?: string;
                }): _650.MsgRescueCeth;
            };
            MsgRescueCethResponse: {
                encode(_: _650.MsgRescueCethResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _650.MsgRescueCethResponse;
                fromJSON(_: any): _650.MsgRescueCethResponse;
                toJSON(_: _650.MsgRescueCethResponse): unknown;
                fromPartial(_: {}): _650.MsgRescueCethResponse;
            };
            MsgSetBlacklist: {
                encode(message: _650.MsgSetBlacklist, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _650.MsgSetBlacklist;
                fromJSON(object: any): _650.MsgSetBlacklist;
                toJSON(message: _650.MsgSetBlacklist): unknown;
                fromPartial(object: {
                    from?: string;
                    addresses?: string[];
                }): _650.MsgSetBlacklist;
            };
            MsgSetBlacklistResponse: {
                encode(_: _650.MsgSetBlacklistResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _650.MsgSetBlacklistResponse;
                fromJSON(_: any): _650.MsgSetBlacklistResponse;
                toJSON(_: _650.MsgSetBlacklistResponse): unknown;
                fromPartial(_: {}): _650.MsgSetBlacklistResponse;
            };
            QueryEthProphecyRequest: {
                encode(message: _649.QueryEthProphecyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _649.QueryEthProphecyRequest;
                fromJSON(object: any): _649.QueryEthProphecyRequest;
                toJSON(message: _649.QueryEthProphecyRequest): unknown;
                fromPartial(object: {
                    ethereumChainId?: any;
                    bridgeContractAddress?: string;
                    nonce?: any;
                    symbol?: string;
                    tokenContractAddress?: string;
                    ethereumSender?: string;
                }): _649.QueryEthProphecyRequest;
            };
            QueryEthProphecyResponse: {
                encode(message: _649.QueryEthProphecyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _649.QueryEthProphecyResponse;
                fromJSON(object: any): _649.QueryEthProphecyResponse;
                toJSON(message: _649.QueryEthProphecyResponse): unknown;
                fromPartial(object: {
                    id?: string;
                    status?: {
                        text?: _655.StatusText;
                        finalClaim?: string;
                    };
                    claims?: {
                        ethereumChainId?: any;
                        bridgeContractAddress?: string;
                        nonce?: any;
                        symbol?: string;
                        tokenContractAddress?: string;
                        ethereumSender?: string;
                        cosmosReceiver?: string;
                        validatorAddress?: string;
                        amount?: string;
                        claimType?: _651.ClaimType;
                    }[];
                }): _649.QueryEthProphecyResponse;
            };
            QueryBlacklistRequest: {
                encode(_: _649.QueryBlacklistRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _649.QueryBlacklistRequest;
                fromJSON(_: any): _649.QueryBlacklistRequest;
                toJSON(_: _649.QueryBlacklistRequest): unknown;
                fromPartial(_: {}): _649.QueryBlacklistRequest;
            };
            QueryBlacklistResponse: {
                encode(message: _649.QueryBlacklistResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _649.QueryBlacklistResponse;
                fromJSON(object: any): _649.QueryBlacklistResponse;
                toJSON(message: _649.QueryBlacklistResponse): unknown;
                fromPartial(object: {
                    addresses?: string[];
                }): _649.QueryBlacklistResponse;
            };
        };
    }
    namespace margin {
        const v1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    open(value: _653.MsgOpen): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    close(value: _653.MsgClose): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    forceClose(value: _653.MsgForceClose): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _653.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updatePools(value: _653.MsgUpdatePools): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    whitelist(value: _653.MsgWhitelist): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    dewhitelist(value: _653.MsgDewhitelist): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    open(value: _653.MsgOpen): {
                        typeUrl: string;
                        value: _653.MsgOpen;
                    };
                    close(value: _653.MsgClose): {
                        typeUrl: string;
                        value: _653.MsgClose;
                    };
                    forceClose(value: _653.MsgForceClose): {
                        typeUrl: string;
                        value: _653.MsgForceClose;
                    };
                    updateParams(value: _653.MsgUpdateParams): {
                        typeUrl: string;
                        value: _653.MsgUpdateParams;
                    };
                    updatePools(value: _653.MsgUpdatePools): {
                        typeUrl: string;
                        value: _653.MsgUpdatePools;
                    };
                    whitelist(value: _653.MsgWhitelist): {
                        typeUrl: string;
                        value: _653.MsgWhitelist;
                    };
                    dewhitelist(value: _653.MsgDewhitelist): {
                        typeUrl: string;
                        value: _653.MsgDewhitelist;
                    };
                };
                toJSON: {
                    open(value: _653.MsgOpen): {
                        typeUrl: string;
                        value: unknown;
                    };
                    close(value: _653.MsgClose): {
                        typeUrl: string;
                        value: unknown;
                    };
                    forceClose(value: _653.MsgForceClose): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateParams(value: _653.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updatePools(value: _653.MsgUpdatePools): {
                        typeUrl: string;
                        value: unknown;
                    };
                    whitelist(value: _653.MsgWhitelist): {
                        typeUrl: string;
                        value: unknown;
                    };
                    dewhitelist(value: _653.MsgDewhitelist): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    open(value: any): {
                        typeUrl: string;
                        value: _653.MsgOpen;
                    };
                    close(value: any): {
                        typeUrl: string;
                        value: _653.MsgClose;
                    };
                    forceClose(value: any): {
                        typeUrl: string;
                        value: _653.MsgForceClose;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _653.MsgUpdateParams;
                    };
                    updatePools(value: any): {
                        typeUrl: string;
                        value: _653.MsgUpdatePools;
                    };
                    whitelist(value: any): {
                        typeUrl: string;
                        value: _653.MsgWhitelist;
                    };
                    dewhitelist(value: any): {
                        typeUrl: string;
                        value: _653.MsgDewhitelist;
                    };
                };
                fromPartial: {
                    open(value: _653.MsgOpen): {
                        typeUrl: string;
                        value: _653.MsgOpen;
                    };
                    close(value: _653.MsgClose): {
                        typeUrl: string;
                        value: _653.MsgClose;
                    };
                    forceClose(value: _653.MsgForceClose): {
                        typeUrl: string;
                        value: _653.MsgForceClose;
                    };
                    updateParams(value: _653.MsgUpdateParams): {
                        typeUrl: string;
                        value: _653.MsgUpdateParams;
                    };
                    updatePools(value: _653.MsgUpdatePools): {
                        typeUrl: string;
                        value: _653.MsgUpdatePools;
                    };
                    whitelist(value: _653.MsgWhitelist): {
                        typeUrl: string;
                        value: _653.MsgWhitelist;
                    };
                    dewhitelist(value: _653.MsgDewhitelist): {
                        typeUrl: string;
                        value: _653.MsgDewhitelist;
                    };
                };
            };
            AminoConverter: {
                "/sifnode.margin.v1.MsgOpen": {
                    aminoType: string;
                    toAmino: ({ signer, collateralAsset, collateralAmount, borrowAsset, position, leverage }: _653.MsgOpen) => {
                        signer: string;
                        collateral_asset: string;
                        collateral_amount: string;
                        borrow_asset: string;
                        position: number;
                        leverage: string;
                    };
                    fromAmino: ({ signer, collateral_asset, collateral_amount, borrow_asset, position, leverage }: {
                        signer: string;
                        collateral_asset: string;
                        collateral_amount: string;
                        borrow_asset: string;
                        position: number;
                        leverage: string;
                    }) => _653.MsgOpen;
                };
                "/sifnode.margin.v1.MsgClose": {
                    aminoType: string;
                    toAmino: ({ signer, id }: _653.MsgClose) => {
                        signer: string;
                        id: string;
                    };
                    fromAmino: ({ signer, id }: {
                        signer: string;
                        id: string;
                    }) => _653.MsgClose;
                };
                "/sifnode.margin.v1.MsgForceClose": {
                    aminoType: string;
                    toAmino: ({ signer, mtpAddress, id }: _653.MsgForceClose) => {
                        signer: string;
                        mtp_address: string;
                        id: string;
                    };
                    fromAmino: ({ signer, mtp_address, id }: {
                        signer: string;
                        mtp_address: string;
                        id: string;
                    }) => _653.MsgForceClose;
                };
                "/sifnode.margin.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ signer, params }: _653.MsgUpdateParams) => {
                        signer: string;
                        params: {
                            leverage_max: string;
                            interest_rate_max: string;
                            interest_rate_min: string;
                            interest_rate_increase: string;
                            interest_rate_decrease: string;
                            health_gain_factor: string;
                            epoch_length: string;
                            pools: string[];
                            force_close_threshold: string;
                            removal_queue_threshold: string;
                            max_open_positions: string;
                            pool_open_threshold: string;
                            force_close_fund_percentage: string;
                            force_close_insurance_fund_address: string;
                            incremental_interest_payment_fund_percentage: string;
                            incremental_interest_payment_insurance_fund_address: string;
                            sq_modifier: string;
                            safety_factor: string;
                            closed_pools: string[];
                            incremental_interest_payment_enabled: boolean;
                            whitelisting_enabled: boolean;
                        };
                    };
                    fromAmino: ({ signer, params }: {
                        signer: string;
                        params: {
                            leverage_max: string;
                            interest_rate_max: string;
                            interest_rate_min: string;
                            interest_rate_increase: string;
                            interest_rate_decrease: string;
                            health_gain_factor: string;
                            epoch_length: string;
                            pools: string[];
                            force_close_threshold: string;
                            removal_queue_threshold: string;
                            max_open_positions: string;
                            pool_open_threshold: string;
                            force_close_fund_percentage: string;
                            force_close_insurance_fund_address: string;
                            incremental_interest_payment_fund_percentage: string;
                            incremental_interest_payment_insurance_fund_address: string;
                            sq_modifier: string;
                            safety_factor: string;
                            closed_pools: string[];
                            incremental_interest_payment_enabled: boolean;
                            whitelisting_enabled: boolean;
                        };
                    }) => _653.MsgUpdateParams;
                };
                "/sifnode.margin.v1.MsgUpdatePools": {
                    aminoType: string;
                    toAmino: ({ signer, pools, closedPools }: _653.MsgUpdatePools) => {
                        signer: string;
                        pools: string[];
                        closed_pools: string[];
                    };
                    fromAmino: ({ signer, pools, closed_pools }: {
                        signer: string;
                        pools: string[];
                        closed_pools: string[];
                    }) => _653.MsgUpdatePools;
                };
                "/sifnode.margin.v1.MsgWhitelist": {
                    aminoType: string;
                    toAmino: ({ signer, whitelistedAddress }: _653.MsgWhitelist) => {
                        signer: string;
                        whitelisted_address: string;
                    };
                    fromAmino: ({ signer, whitelisted_address }: {
                        signer: string;
                        whitelisted_address: string;
                    }) => _653.MsgWhitelist;
                };
                "/sifnode.margin.v1.MsgDewhitelist": {
                    aminoType: string;
                    toAmino: ({ signer, whitelistedAddress }: _653.MsgDewhitelist) => {
                        signer: string;
                        whitelisted_address: string;
                    };
                    fromAmino: ({ signer, whitelisted_address }: {
                        signer: string;
                        whitelisted_address: string;
                    }) => _653.MsgDewhitelist;
                };
            };
            positionFromJSON(object: any): _654.Position;
            positionToJSON(object: _654.Position): string;
            Position: typeof _654.Position;
            GenesisState: {
                encode(message: _654.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _654.GenesisState;
                fromJSON(object: any): _654.GenesisState;
                toJSON(message: _654.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        leverageMax?: string;
                        interestRateMax?: string;
                        interestRateMin?: string;
                        interestRateIncrease?: string;
                        interestRateDecrease?: string;
                        healthGainFactor?: string;
                        epochLength?: any;
                        pools?: string[];
                        forceCloseThreshold?: string;
                        removalQueueThreshold?: string;
                        maxOpenPositions?: any;
                        poolOpenThreshold?: string;
                        forceCloseFundPercentage?: string;
                        forceCloseInsuranceFundAddress?: string;
                        incrementalInterestPaymentFundPercentage?: string;
                        incrementalInterestPaymentInsuranceFundAddress?: string;
                        sqModifier?: string;
                        safetyFactor?: string;
                        closedPools?: string[];
                        incrementalInterestPaymentEnabled?: boolean;
                        whitelistingEnabled?: boolean;
                    };
                }): _654.GenesisState;
            };
            Params: {
                encode(message: _654.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _654.Params;
                fromJSON(object: any): _654.Params;
                toJSON(message: _654.Params): unknown;
                fromPartial(object: {
                    leverageMax?: string;
                    interestRateMax?: string;
                    interestRateMin?: string;
                    interestRateIncrease?: string;
                    interestRateDecrease?: string;
                    healthGainFactor?: string;
                    epochLength?: any;
                    pools?: string[];
                    forceCloseThreshold?: string;
                    removalQueueThreshold?: string;
                    maxOpenPositions?: any;
                    poolOpenThreshold?: string;
                    forceCloseFundPercentage?: string;
                    forceCloseInsuranceFundAddress?: string;
                    incrementalInterestPaymentFundPercentage?: string;
                    incrementalInterestPaymentInsuranceFundAddress?: string;
                    sqModifier?: string;
                    safetyFactor?: string;
                    closedPools?: string[];
                    incrementalInterestPaymentEnabled?: boolean;
                    whitelistingEnabled?: boolean;
                }): _654.Params;
            };
            MTP: {
                encode(message: _654.MTP, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _654.MTP;
                fromJSON(object: any): _654.MTP;
                toJSON(message: _654.MTP): unknown;
                fromPartial(object: {
                    address?: string;
                    collateralAsset?: string;
                    collateralAmount?: string;
                    liabilities?: string;
                    interestPaid?: string;
                    interestUnpaid?: string;
                    custodyAsset?: string;
                    custodyAmount?: string;
                    leverage?: string;
                    mtpHealth?: string;
                    position?: _654.Position;
                    id?: any;
                }): _654.MTP;
            };
            MsgOpen: {
                encode(message: _653.MsgOpen, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _653.MsgOpen;
                fromJSON(object: any): _653.MsgOpen;
                toJSON(message: _653.MsgOpen): unknown;
                fromPartial(object: {
                    signer?: string;
                    collateralAsset?: string;
                    collateralAmount?: string;
                    borrowAsset?: string;
                    position?: _654.Position;
                    leverage?: string;
                }): _653.MsgOpen;
            };
            MsgOpenResponse: {
                encode(_: _653.MsgOpenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _653.MsgOpenResponse;
                fromJSON(_: any): _653.MsgOpenResponse;
                toJSON(_: _653.MsgOpenResponse): unknown;
                fromPartial(_: {}): _653.MsgOpenResponse;
            };
            MsgClose: {
                encode(message: _653.MsgClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _653.MsgClose;
                fromJSON(object: any): _653.MsgClose;
                toJSON(message: _653.MsgClose): unknown;
                fromPartial(object: {
                    signer?: string;
                    id?: any;
                }): _653.MsgClose;
            };
            MsgCloseResponse: {
                encode(_: _653.MsgCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _653.MsgCloseResponse;
                fromJSON(_: any): _653.MsgCloseResponse;
                toJSON(_: _653.MsgCloseResponse): unknown;
                fromPartial(_: {}): _653.MsgCloseResponse;
            };
            MsgForceClose: {
                encode(message: _653.MsgForceClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _653.MsgForceClose;
                fromJSON(object: any): _653.MsgForceClose;
                toJSON(message: _653.MsgForceClose): unknown;
                fromPartial(object: {
                    signer?: string;
                    mtpAddress?: string;
                    id?: any;
                }): _653.MsgForceClose;
            };
            MsgForceCloseResponse: {
                encode(_: _653.MsgForceCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _653.MsgForceCloseResponse;
                fromJSON(_: any): _653.MsgForceCloseResponse;
                toJSON(_: _653.MsgForceCloseResponse): unknown;
                fromPartial(_: {}): _653.MsgForceCloseResponse;
            };
            MsgUpdateParams: {
                encode(message: _653.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _653.MsgUpdateParams;
                fromJSON(object: any): _653.MsgUpdateParams;
                toJSON(message: _653.MsgUpdateParams): unknown;
                fromPartial(object: {
                    signer?: string;
                    params?: {
                        leverageMax?: string;
                        interestRateMax?: string;
                        interestRateMin?: string;
                        interestRateIncrease?: string;
                        interestRateDecrease?: string;
                        healthGainFactor?: string;
                        epochLength?: any;
                        pools?: string[];
                        forceCloseThreshold?: string;
                        removalQueueThreshold?: string;
                        maxOpenPositions?: any;
                        poolOpenThreshold?: string;
                        forceCloseFundPercentage?: string;
                        forceCloseInsuranceFundAddress?: string;
                        incrementalInterestPaymentFundPercentage?: string;
                        incrementalInterestPaymentInsuranceFundAddress?: string;
                        sqModifier?: string;
                        safetyFactor?: string;
                        closedPools?: string[];
                        incrementalInterestPaymentEnabled?: boolean;
                        whitelistingEnabled?: boolean;
                    };
                }): _653.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _653.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _653.MsgUpdateParamsResponse;
                fromJSON(_: any): _653.MsgUpdateParamsResponse;
                toJSON(_: _653.MsgUpdateParamsResponse): unknown;
                fromPartial(_: {}): _653.MsgUpdateParamsResponse;
            };
            MsgUpdatePools: {
                encode(message: _653.MsgUpdatePools, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _653.MsgUpdatePools;
                fromJSON(object: any): _653.MsgUpdatePools;
                toJSON(message: _653.MsgUpdatePools): unknown;
                fromPartial(object: {
                    signer?: string;
                    pools?: string[];
                    closedPools?: string[];
                }): _653.MsgUpdatePools;
            };
            MsgUpdatePoolsResponse: {
                encode(_: _653.MsgUpdatePoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _653.MsgUpdatePoolsResponse;
                fromJSON(_: any): _653.MsgUpdatePoolsResponse;
                toJSON(_: _653.MsgUpdatePoolsResponse): unknown;
                fromPartial(_: {}): _653.MsgUpdatePoolsResponse;
            };
            MsgWhitelist: {
                encode(message: _653.MsgWhitelist, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _653.MsgWhitelist;
                fromJSON(object: any): _653.MsgWhitelist;
                toJSON(message: _653.MsgWhitelist): unknown;
                fromPartial(object: {
                    signer?: string;
                    whitelistedAddress?: string;
                }): _653.MsgWhitelist;
            };
            MsgWhitelistResponse: {
                encode(_: _653.MsgWhitelistResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _653.MsgWhitelistResponse;
                fromJSON(_: any): _653.MsgWhitelistResponse;
                toJSON(_: _653.MsgWhitelistResponse): unknown;
                fromPartial(_: {}): _653.MsgWhitelistResponse;
            };
            MsgDewhitelist: {
                encode(message: _653.MsgDewhitelist, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _653.MsgDewhitelist;
                fromJSON(object: any): _653.MsgDewhitelist;
                toJSON(message: _653.MsgDewhitelist): unknown;
                fromPartial(object: {
                    signer?: string;
                    whitelistedAddress?: string;
                }): _653.MsgDewhitelist;
            };
            MsgDewhitelistResponse: {
                encode(_: _653.MsgDewhitelistResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _653.MsgDewhitelistResponse;
                fromJSON(_: any): _653.MsgDewhitelistResponse;
                toJSON(_: _653.MsgDewhitelistResponse): unknown;
                fromPartial(_: {}): _653.MsgDewhitelistResponse;
            };
            MTPRequest: {
                encode(message: _652.MTPRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _652.MTPRequest;
                fromJSON(object: any): _652.MTPRequest;
                toJSON(message: _652.MTPRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    id?: any;
                }): _652.MTPRequest;
            };
            MTPResponse: {
                encode(message: _652.MTPResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _652.MTPResponse;
                fromJSON(object: any): _652.MTPResponse;
                toJSON(message: _652.MTPResponse): unknown;
                fromPartial(object: {
                    mtp?: {
                        address?: string;
                        collateralAsset?: string;
                        collateralAmount?: string;
                        liabilities?: string;
                        interestPaid?: string;
                        interestUnpaid?: string;
                        custodyAsset?: string;
                        custodyAmount?: string;
                        leverage?: string;
                        mtpHealth?: string;
                        position?: _654.Position;
                        id?: any;
                    };
                }): _652.MTPResponse;
            };
            PositionsForAddressRequest: {
                encode(message: _652.PositionsForAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _652.PositionsForAddressRequest;
                fromJSON(object: any): _652.PositionsForAddressRequest;
                toJSON(message: _652.PositionsForAddressRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _652.PositionsForAddressRequest;
            };
            PositionsForAddressResponse: {
                encode(message: _652.PositionsForAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _652.PositionsForAddressResponse;
                fromJSON(object: any): _652.PositionsForAddressResponse;
                toJSON(message: _652.PositionsForAddressResponse): unknown;
                fromPartial(object: {
                    mtps?: {
                        address?: string;
                        collateralAsset?: string;
                        collateralAmount?: string;
                        liabilities?: string;
                        interestPaid?: string;
                        interestUnpaid?: string;
                        custodyAsset?: string;
                        custodyAmount?: string;
                        leverage?: string;
                        mtpHealth?: string;
                        position?: _654.Position;
                        id?: any;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _652.PositionsForAddressResponse;
            };
            PositionsByPoolRequest: {
                encode(message: _652.PositionsByPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _652.PositionsByPoolRequest;
                fromJSON(object: any): _652.PositionsByPoolRequest;
                toJSON(message: _652.PositionsByPoolRequest): unknown;
                fromPartial(object: {
                    asset?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _652.PositionsByPoolRequest;
            };
            PositionsByPoolResponse: {
                encode(message: _652.PositionsByPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _652.PositionsByPoolResponse;
                fromJSON(object: any): _652.PositionsByPoolResponse;
                toJSON(message: _652.PositionsByPoolResponse): unknown;
                fromPartial(object: {
                    mtps?: {
                        address?: string;
                        collateralAsset?: string;
                        collateralAmount?: string;
                        liabilities?: string;
                        interestPaid?: string;
                        interestUnpaid?: string;
                        custodyAsset?: string;
                        custodyAmount?: string;
                        leverage?: string;
                        mtpHealth?: string;
                        position?: _654.Position;
                        id?: any;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _652.PositionsByPoolResponse;
            };
            PositionsRequest: {
                encode(message: _652.PositionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _652.PositionsRequest;
                fromJSON(object: any): _652.PositionsRequest;
                toJSON(message: _652.PositionsRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _652.PositionsRequest;
            };
            PositionsResponse: {
                encode(message: _652.PositionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _652.PositionsResponse;
                fromJSON(object: any): _652.PositionsResponse;
                toJSON(message: _652.PositionsResponse): unknown;
                fromPartial(object: {
                    mtps?: {
                        address?: string;
                        collateralAsset?: string;
                        collateralAmount?: string;
                        liabilities?: string;
                        interestPaid?: string;
                        interestUnpaid?: string;
                        custodyAsset?: string;
                        custodyAmount?: string;
                        leverage?: string;
                        mtpHealth?: string;
                        position?: _654.Position;
                        id?: any;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _652.PositionsResponse;
            };
            ParamsRequest: {
                encode(_: _652.ParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _652.ParamsRequest;
                fromJSON(_: any): _652.ParamsRequest;
                toJSON(_: _652.ParamsRequest): unknown;
                fromPartial(_: {}): _652.ParamsRequest;
            };
            ParamsResponse: {
                encode(message: _652.ParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _652.ParamsResponse;
                fromJSON(object: any): _652.ParamsResponse;
                toJSON(message: _652.ParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        leverageMax?: string;
                        interestRateMax?: string;
                        interestRateMin?: string;
                        interestRateIncrease?: string;
                        interestRateDecrease?: string;
                        healthGainFactor?: string;
                        epochLength?: any;
                        pools?: string[];
                        forceCloseThreshold?: string;
                        removalQueueThreshold?: string;
                        maxOpenPositions?: any;
                        poolOpenThreshold?: string;
                        forceCloseFundPercentage?: string;
                        forceCloseInsuranceFundAddress?: string;
                        incrementalInterestPaymentFundPercentage?: string;
                        incrementalInterestPaymentInsuranceFundAddress?: string;
                        sqModifier?: string;
                        safetyFactor?: string;
                        closedPools?: string[];
                        incrementalInterestPaymentEnabled?: boolean;
                        whitelistingEnabled?: boolean;
                    };
                }): _652.ParamsResponse;
            };
            StatusRequest: {
                encode(_: _652.StatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _652.StatusRequest;
                fromJSON(_: any): _652.StatusRequest;
                toJSON(_: _652.StatusRequest): unknown;
                fromPartial(_: {}): _652.StatusRequest;
            };
            StatusResponse: {
                encode(message: _652.StatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _652.StatusResponse;
                fromJSON(object: any): _652.StatusResponse;
                toJSON(message: _652.StatusResponse): unknown;
                fromPartial(object: {
                    openMtpCount?: any;
                    lifetimeMtpCount?: any;
                }): _652.StatusResponse;
            };
            WhitelistRequest: {
                encode(message: _652.WhitelistRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _652.WhitelistRequest;
                fromJSON(object: any): _652.WhitelistRequest;
                toJSON(message: _652.WhitelistRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _652.WhitelistRequest;
            };
            WhitelistResponse: {
                encode(message: _652.WhitelistResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _652.WhitelistResponse;
                fromJSON(object: any): _652.WhitelistResponse;
                toJSON(message: _652.WhitelistResponse): unknown;
                fromPartial(object: {
                    whitelist?: string[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _652.WhitelistResponse;
            };
            GetSQParamsRequest: {
                encode(message: _652.GetSQParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _652.GetSQParamsRequest;
                fromJSON(object: any): _652.GetSQParamsRequest;
                toJSON(message: _652.GetSQParamsRequest): unknown;
                fromPartial(object: {
                    pool?: string;
                }): _652.GetSQParamsRequest;
            };
            GetSQParamsResponse: {
                encode(message: _652.GetSQParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _652.GetSQParamsResponse;
                fromJSON(object: any): _652.GetSQParamsResponse;
                toJSON(message: _652.GetSQParamsResponse): unknown;
                fromPartial(object: {
                    beginBlock?: any;
                }): _652.GetSQParamsResponse;
            };
            IsWhitelistedRequest: {
                encode(message: _652.IsWhitelistedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _652.IsWhitelistedRequest;
                fromJSON(object: any): _652.IsWhitelistedRequest;
                toJSON(message: _652.IsWhitelistedRequest): unknown;
                fromPartial(object: {
                    address?: string;
                }): _652.IsWhitelistedRequest;
            };
            IsWhitelistedResponse: {
                encode(message: _652.IsWhitelistedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _652.IsWhitelistedResponse;
                fromJSON(object: any): _652.IsWhitelistedResponse;
                toJSON(message: _652.IsWhitelistedResponse): unknown;
                fromPartial(object: {
                    address?: string;
                    isWhitelisted?: boolean;
                }): _652.IsWhitelistedResponse;
            };
        };
    }
    namespace oracle {
        const v1: {
            statusTextFromJSON(object: any): _655.StatusText;
            statusTextToJSON(object: _655.StatusText): string;
            StatusText: typeof _655.StatusText;
            GenesisState: {
                encode(message: _655.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _655.GenesisState;
                fromJSON(object: any): _655.GenesisState;
                toJSON(message: _655.GenesisState): unknown;
                fromPartial(object: {
                    addressWhitelist?: string[];
                    adminAddress?: string;
                    prophecies?: {
                        id?: string;
                        status?: {
                            text?: _655.StatusText;
                            finalClaim?: string;
                        };
                        claimValidators?: Uint8Array;
                        validatorClaims?: Uint8Array;
                    }[];
                }): _655.GenesisState;
            };
            Claim: {
                encode(message: _655.Claim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _655.Claim;
                fromJSON(object: any): _655.Claim;
                toJSON(message: _655.Claim): unknown;
                fromPartial(object: {
                    id?: string;
                    validatorAddress?: string;
                    content?: string;
                }): _655.Claim;
            };
            DBProphecy: {
                encode(message: _655.DBProphecy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _655.DBProphecy;
                fromJSON(object: any): _655.DBProphecy;
                toJSON(message: _655.DBProphecy): unknown;
                fromPartial(object: {
                    id?: string;
                    status?: {
                        text?: _655.StatusText;
                        finalClaim?: string;
                    };
                    claimValidators?: Uint8Array;
                    validatorClaims?: Uint8Array;
                }): _655.DBProphecy;
            };
            Status: {
                encode(message: _655.Status, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _655.Status;
                fromJSON(object: any): _655.Status;
                toJSON(message: _655.Status): unknown;
                fromPartial(object: {
                    text?: _655.StatusText;
                    finalClaim?: string;
                }): _655.Status;
            };
        };
    }
    namespace tokenregistry {
        const v1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    register(value: _657.MsgRegister): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deregister(value: _657.MsgDeregister): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setRegistry(value: _657.MsgSetRegistry): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    register(value: _657.MsgRegister): {
                        typeUrl: string;
                        value: _657.MsgRegister;
                    };
                    deregister(value: _657.MsgDeregister): {
                        typeUrl: string;
                        value: _657.MsgDeregister;
                    };
                    setRegistry(value: _657.MsgSetRegistry): {
                        typeUrl: string;
                        value: _657.MsgSetRegistry;
                    };
                };
                toJSON: {
                    register(value: _657.MsgRegister): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deregister(value: _657.MsgDeregister): {
                        typeUrl: string;
                        value: unknown;
                    };
                    setRegistry(value: _657.MsgSetRegistry): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    register(value: any): {
                        typeUrl: string;
                        value: _657.MsgRegister;
                    };
                    deregister(value: any): {
                        typeUrl: string;
                        value: _657.MsgDeregister;
                    };
                    setRegistry(value: any): {
                        typeUrl: string;
                        value: _657.MsgSetRegistry;
                    };
                };
                fromPartial: {
                    register(value: _657.MsgRegister): {
                        typeUrl: string;
                        value: _657.MsgRegister;
                    };
                    deregister(value: _657.MsgDeregister): {
                        typeUrl: string;
                        value: _657.MsgDeregister;
                    };
                    setRegistry(value: _657.MsgSetRegistry): {
                        typeUrl: string;
                        value: _657.MsgSetRegistry;
                    };
                };
            };
            AminoConverter: {
                "/sifnode.tokenregistry.v1.MsgRegister": {
                    aminoType: string;
                    toAmino: ({ from, entry }: _657.MsgRegister) => {
                        from: string;
                        entry: {
                            decimals: string;
                            denom: string;
                            base_denom: string;
                            path: string;
                            ibc_channel_id: string;
                            ibc_counterparty_channel_id: string;
                            display_name: string;
                            display_symbol: string;
                            network: string;
                            address: string;
                            external_symbol: string;
                            transfer_limit: string;
                            permissions: number[];
                            unit_denom: string;
                            ibc_counterparty_denom: string;
                            ibc_counterparty_chain_id: string;
                        };
                    };
                    fromAmino: ({ from, entry }: {
                        from: string;
                        entry: {
                            decimals: string;
                            denom: string;
                            base_denom: string;
                            path: string;
                            ibc_channel_id: string;
                            ibc_counterparty_channel_id: string;
                            display_name: string;
                            display_symbol: string;
                            network: string;
                            address: string;
                            external_symbol: string;
                            transfer_limit: string;
                            permissions: number[];
                            unit_denom: string;
                            ibc_counterparty_denom: string;
                            ibc_counterparty_chain_id: string;
                        };
                    }) => _657.MsgRegister;
                };
                "/sifnode.tokenregistry.v1.MsgDeregister": {
                    aminoType: string;
                    toAmino: ({ from, denom }: _657.MsgDeregister) => {
                        from: string;
                        denom: string;
                    };
                    fromAmino: ({ from, denom }: {
                        from: string;
                        denom: string;
                    }) => _657.MsgDeregister;
                };
                "/sifnode.tokenregistry.v1.MsgSetRegistry": {
                    aminoType: string;
                    toAmino: ({ from, registry }: _657.MsgSetRegistry) => {
                        from: string;
                        registry: {
                            entries: {
                                decimals: string;
                                denom: string;
                                base_denom: string;
                                path: string;
                                ibc_channel_id: string;
                                ibc_counterparty_channel_id: string;
                                display_name: string;
                                display_symbol: string;
                                network: string;
                                address: string;
                                external_symbol: string;
                                transfer_limit: string;
                                permissions: number[];
                                unit_denom: string;
                                ibc_counterparty_denom: string;
                                ibc_counterparty_chain_id: string;
                            }[];
                        };
                    };
                    fromAmino: ({ from, registry }: {
                        from: string;
                        registry: {
                            entries: {
                                decimals: string;
                                denom: string;
                                base_denom: string;
                                path: string;
                                ibc_channel_id: string;
                                ibc_counterparty_channel_id: string;
                                display_name: string;
                                display_symbol: string;
                                network: string;
                                address: string;
                                external_symbol: string;
                                transfer_limit: string;
                                permissions: number[];
                                unit_denom: string;
                                ibc_counterparty_denom: string;
                                ibc_counterparty_chain_id: string;
                            }[];
                        };
                    }) => _657.MsgSetRegistry;
                };
            };
            permissionFromJSON(object: any): _658.Permission;
            permissionToJSON(object: _658.Permission): string;
            Permission: typeof _658.Permission;
            GenesisState: {
                encode(message: _658.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _658.GenesisState;
                fromJSON(object: any): _658.GenesisState;
                toJSON(message: _658.GenesisState): unknown;
                fromPartial(object: {
                    registry?: {
                        entries?: {
                            decimals?: any;
                            denom?: string;
                            baseDenom?: string;
                            path?: string;
                            ibcChannelId?: string;
                            ibcCounterpartyChannelId?: string;
                            displayName?: string;
                            displaySymbol?: string;
                            network?: string;
                            address?: string;
                            externalSymbol?: string;
                            transferLimit?: string;
                            permissions?: _658.Permission[];
                            unitDenom?: string;
                            ibcCounterpartyDenom?: string;
                            ibcCounterpartyChainId?: string;
                        }[];
                    };
                }): _658.GenesisState;
            };
            Registry: {
                encode(message: _658.Registry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _658.Registry;
                fromJSON(object: any): _658.Registry;
                toJSON(message: _658.Registry): unknown;
                fromPartial(object: {
                    entries?: {
                        decimals?: any;
                        denom?: string;
                        baseDenom?: string;
                        path?: string;
                        ibcChannelId?: string;
                        ibcCounterpartyChannelId?: string;
                        displayName?: string;
                        displaySymbol?: string;
                        network?: string;
                        address?: string;
                        externalSymbol?: string;
                        transferLimit?: string;
                        permissions?: _658.Permission[];
                        unitDenom?: string;
                        ibcCounterpartyDenom?: string;
                        ibcCounterpartyChainId?: string;
                    }[];
                }): _658.Registry;
            };
            RegistryEntry: {
                encode(message: _658.RegistryEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _658.RegistryEntry;
                fromJSON(object: any): _658.RegistryEntry;
                toJSON(message: _658.RegistryEntry): unknown;
                fromPartial(object: {
                    decimals?: any;
                    denom?: string;
                    baseDenom?: string;
                    path?: string;
                    ibcChannelId?: string;
                    ibcCounterpartyChannelId?: string;
                    displayName?: string;
                    displaySymbol?: string;
                    network?: string;
                    address?: string;
                    externalSymbol?: string;
                    transferLimit?: string;
                    permissions?: _658.Permission[];
                    unitDenom?: string;
                    ibcCounterpartyDenom?: string;
                    ibcCounterpartyChainId?: string;
                }): _658.RegistryEntry;
            };
            MsgRegister: {
                encode(message: _657.MsgRegister, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _657.MsgRegister;
                fromJSON(object: any): _657.MsgRegister;
                toJSON(message: _657.MsgRegister): unknown;
                fromPartial(object: {
                    from?: string;
                    entry?: {
                        decimals?: any;
                        denom?: string;
                        baseDenom?: string;
                        path?: string;
                        ibcChannelId?: string;
                        ibcCounterpartyChannelId?: string;
                        displayName?: string;
                        displaySymbol?: string;
                        network?: string;
                        address?: string;
                        externalSymbol?: string;
                        transferLimit?: string;
                        permissions?: _658.Permission[];
                        unitDenom?: string;
                        ibcCounterpartyDenom?: string;
                        ibcCounterpartyChainId?: string;
                    };
                }): _657.MsgRegister;
            };
            MsgRegisterResponse: {
                encode(_: _657.MsgRegisterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _657.MsgRegisterResponse;
                fromJSON(_: any): _657.MsgRegisterResponse;
                toJSON(_: _657.MsgRegisterResponse): unknown;
                fromPartial(_: {}): _657.MsgRegisterResponse;
            };
            MsgSetRegistry: {
                encode(message: _657.MsgSetRegistry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _657.MsgSetRegistry;
                fromJSON(object: any): _657.MsgSetRegistry;
                toJSON(message: _657.MsgSetRegistry): unknown;
                fromPartial(object: {
                    from?: string;
                    registry?: {
                        entries?: {
                            decimals?: any;
                            denom?: string;
                            baseDenom?: string;
                            path?: string;
                            ibcChannelId?: string;
                            ibcCounterpartyChannelId?: string;
                            displayName?: string;
                            displaySymbol?: string;
                            network?: string;
                            address?: string;
                            externalSymbol?: string;
                            transferLimit?: string;
                            permissions?: _658.Permission[];
                            unitDenom?: string;
                            ibcCounterpartyDenom?: string;
                            ibcCounterpartyChainId?: string;
                        }[];
                    };
                }): _657.MsgSetRegistry;
            };
            MsgSetRegistryResponse: {
                encode(_: _657.MsgSetRegistryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _657.MsgSetRegistryResponse;
                fromJSON(_: any): _657.MsgSetRegistryResponse;
                toJSON(_: _657.MsgSetRegistryResponse): unknown;
                fromPartial(_: {}): _657.MsgSetRegistryResponse;
            };
            MsgDeregister: {
                encode(message: _657.MsgDeregister, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _657.MsgDeregister;
                fromJSON(object: any): _657.MsgDeregister;
                toJSON(message: _657.MsgDeregister): unknown;
                fromPartial(object: {
                    from?: string;
                    denom?: string;
                }): _657.MsgDeregister;
            };
            MsgDeregisterResponse: {
                encode(_: _657.MsgDeregisterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _657.MsgDeregisterResponse;
                fromJSON(_: any): _657.MsgDeregisterResponse;
                toJSON(_: _657.MsgDeregisterResponse): unknown;
                fromPartial(_: {}): _657.MsgDeregisterResponse;
            };
            QueryEntriesResponse: {
                encode(message: _656.QueryEntriesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _656.QueryEntriesResponse;
                fromJSON(object: any): _656.QueryEntriesResponse;
                toJSON(message: _656.QueryEntriesResponse): unknown;
                fromPartial(object: {
                    registry?: {
                        entries?: {
                            decimals?: any;
                            denom?: string;
                            baseDenom?: string;
                            path?: string;
                            ibcChannelId?: string;
                            ibcCounterpartyChannelId?: string;
                            displayName?: string;
                            displaySymbol?: string;
                            network?: string;
                            address?: string;
                            externalSymbol?: string;
                            transferLimit?: string;
                            permissions?: _658.Permission[];
                            unitDenom?: string;
                            ibcCounterpartyDenom?: string;
                            ibcCounterpartyChainId?: string;
                        }[];
                    };
                }): _656.QueryEntriesResponse;
            };
            QueryEntriesRequest: {
                encode(_: _656.QueryEntriesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _656.QueryEntriesRequest;
                fromJSON(_: any): _656.QueryEntriesRequest;
                toJSON(_: _656.QueryEntriesRequest): unknown;
                fromPartial(_: {}): _656.QueryEntriesRequest;
            };
        };
    }
}
