import * as _656 from "./admin/v1/query";
import * as _657 from "./admin/v1/tx";
import * as _658 from "./admin/v1/types";
import * as _659 from "./clp/v1/genesis";
import * as _660 from "./clp/v1/params";
import * as _661 from "./clp/v1/pool";
import * as _662 from "./clp/v1/querier";
import * as _663 from "./clp/v1/tx";
import * as _664 from "./clp/v1/types";
import * as _665 from "./dispensation/v1/query";
import * as _666 from "./dispensation/v1/tx";
import * as _667 from "./dispensation/v1/types";
import * as _668 from "./ethbridge/v1/query";
import * as _669 from "./ethbridge/v1/tx";
import * as _670 from "./ethbridge/v1/types";
import * as _671 from "./margin/v1/query";
import * as _672 from "./margin/v1/tx";
import * as _673 from "./margin/v1/types";
import * as _674 from "./oracle/v1/types";
import * as _675 from "./tokenregistry/v1/query";
import * as _676 from "./tokenregistry/v1/tx";
import * as _677 from "./tokenregistry/v1/types";
export declare namespace sifnode {
    namespace admin {
        const v1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    addAccount(value: _657.MsgAddAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removeAccount(value: _657.MsgRemoveAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    addAccount(value: _657.MsgAddAccount): {
                        typeUrl: string;
                        value: _657.MsgAddAccount;
                    };
                    removeAccount(value: _657.MsgRemoveAccount): {
                        typeUrl: string;
                        value: _657.MsgRemoveAccount;
                    };
                };
                toJSON: {
                    addAccount(value: _657.MsgAddAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    removeAccount(value: _657.MsgRemoveAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    addAccount(value: any): {
                        typeUrl: string;
                        value: _657.MsgAddAccount;
                    };
                    removeAccount(value: any): {
                        typeUrl: string;
                        value: _657.MsgRemoveAccount;
                    };
                };
                fromPartial: {
                    addAccount(value: _657.MsgAddAccount): {
                        typeUrl: string;
                        value: _657.MsgAddAccount;
                    };
                    removeAccount(value: _657.MsgRemoveAccount): {
                        typeUrl: string;
                        value: _657.MsgRemoveAccount;
                    };
                };
            };
            AminoConverter: {
                "/sifnode.admin.v1.MsgAddAccount": {
                    aminoType: string;
                    toAmino: ({ signer, account }: _657.MsgAddAccount) => {
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
                    }) => _657.MsgAddAccount;
                };
                "/sifnode.admin.v1.MsgRemoveAccount": {
                    aminoType: string;
                    toAmino: ({ signer, account }: _657.MsgRemoveAccount) => {
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
                    }) => _657.MsgRemoveAccount;
                };
            };
            adminTypeFromJSON(object: any): _658.AdminType;
            adminTypeToJSON(object: _658.AdminType): string;
            AdminType: typeof _658.AdminType;
            GenesisState: {
                encode(message: _658.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _658.GenesisState;
                fromJSON(object: any): _658.GenesisState;
                toJSON(message: _658.GenesisState): unknown;
                fromPartial(object: {
                    adminAccounts?: {
                        adminType?: _658.AdminType;
                        adminAddress?: string;
                    }[];
                }): _658.GenesisState;
            };
            AdminAccount: {
                encode(message: _658.AdminAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _658.AdminAccount;
                fromJSON(object: any): _658.AdminAccount;
                toJSON(message: _658.AdminAccount): unknown;
                fromPartial(object: {
                    adminType?: _658.AdminType;
                    adminAddress?: string;
                }): _658.AdminAccount;
            };
            MsgAddAccount: {
                encode(message: _657.MsgAddAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _657.MsgAddAccount;
                fromJSON(object: any): _657.MsgAddAccount;
                toJSON(message: _657.MsgAddAccount): unknown;
                fromPartial(object: {
                    signer?: string;
                    account?: {
                        adminType?: _658.AdminType;
                        adminAddress?: string;
                    };
                }): _657.MsgAddAccount;
            };
            MsgAddAccountResponse: {
                encode(_: _657.MsgAddAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _657.MsgAddAccountResponse;
                fromJSON(_: any): _657.MsgAddAccountResponse;
                toJSON(_: _657.MsgAddAccountResponse): unknown;
                fromPartial(_: {}): _657.MsgAddAccountResponse;
            };
            MsgRemoveAccount: {
                encode(message: _657.MsgRemoveAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _657.MsgRemoveAccount;
                fromJSON(object: any): _657.MsgRemoveAccount;
                toJSON(message: _657.MsgRemoveAccount): unknown;
                fromPartial(object: {
                    signer?: string;
                    account?: {
                        adminType?: _658.AdminType;
                        adminAddress?: string;
                    };
                }): _657.MsgRemoveAccount;
            };
            MsgRemoveAccountResponse: {
                encode(_: _657.MsgRemoveAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _657.MsgRemoveAccountResponse;
                fromJSON(_: any): _657.MsgRemoveAccountResponse;
                toJSON(_: _657.MsgRemoveAccountResponse): unknown;
                fromPartial(_: {}): _657.MsgRemoveAccountResponse;
            };
            ListAccountsRequest: {
                encode(_: _656.ListAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _656.ListAccountsRequest;
                fromJSON(_: any): _656.ListAccountsRequest;
                toJSON(_: _656.ListAccountsRequest): unknown;
                fromPartial(_: {}): _656.ListAccountsRequest;
            };
            ListAccountsResponse: {
                encode(message: _656.ListAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _656.ListAccountsResponse;
                fromJSON(object: any): _656.ListAccountsResponse;
                toJSON(message: _656.ListAccountsResponse): unknown;
                fromPartial(object: {
                    keys?: {
                        adminType?: _658.AdminType;
                        adminAddress?: string;
                    }[];
                }): _656.ListAccountsResponse;
            };
        };
    }
    namespace clp {
        const v1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    removeLiquidity(value: _663.MsgRemoveLiquidity): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removeLiquidityUnits(value: _663.MsgRemoveLiquidityUnits): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPool(value: _663.MsgCreatePool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addLiquidity(value: _663.MsgAddLiquidity): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swap(value: _663.MsgSwap): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    decommissionPool(value: _663.MsgDecommissionPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unlockLiquidity(value: _663.MsgUnlockLiquidityRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateRewardsParams(value: _663.MsgUpdateRewardsParamsRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addRewardPeriod(value: _663.MsgAddRewardPeriodRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    modifyPmtpRates(value: _663.MsgModifyPmtpRates): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updatePmtpParams(value: _663.MsgUpdatePmtpParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateStakingRewardParams(value: _663.MsgUpdateStakingRewardParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setSymmetryThreshold(value: _663.MsgSetSymmetryThreshold): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnlockLiquidity(value: _663.MsgCancelUnlock): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateLiquidityProtectionParams(value: _663.MsgUpdateLiquidityProtectionParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    modifyLiquidityProtectionRates(value: _663.MsgModifyLiquidityProtectionRates): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addProviderDistributionPeriod(value: _663.MsgAddProviderDistributionPeriodRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    removeLiquidity(value: _663.MsgRemoveLiquidity): {
                        typeUrl: string;
                        value: _663.MsgRemoveLiquidity;
                    };
                    removeLiquidityUnits(value: _663.MsgRemoveLiquidityUnits): {
                        typeUrl: string;
                        value: _663.MsgRemoveLiquidityUnits;
                    };
                    createPool(value: _663.MsgCreatePool): {
                        typeUrl: string;
                        value: _663.MsgCreatePool;
                    };
                    addLiquidity(value: _663.MsgAddLiquidity): {
                        typeUrl: string;
                        value: _663.MsgAddLiquidity;
                    };
                    swap(value: _663.MsgSwap): {
                        typeUrl: string;
                        value: _663.MsgSwap;
                    };
                    decommissionPool(value: _663.MsgDecommissionPool): {
                        typeUrl: string;
                        value: _663.MsgDecommissionPool;
                    };
                    unlockLiquidity(value: _663.MsgUnlockLiquidityRequest): {
                        typeUrl: string;
                        value: _663.MsgUnlockLiquidityRequest;
                    };
                    updateRewardsParams(value: _663.MsgUpdateRewardsParamsRequest): {
                        typeUrl: string;
                        value: _663.MsgUpdateRewardsParamsRequest;
                    };
                    addRewardPeriod(value: _663.MsgAddRewardPeriodRequest): {
                        typeUrl: string;
                        value: _663.MsgAddRewardPeriodRequest;
                    };
                    modifyPmtpRates(value: _663.MsgModifyPmtpRates): {
                        typeUrl: string;
                        value: _663.MsgModifyPmtpRates;
                    };
                    updatePmtpParams(value: _663.MsgUpdatePmtpParams): {
                        typeUrl: string;
                        value: _663.MsgUpdatePmtpParams;
                    };
                    updateStakingRewardParams(value: _663.MsgUpdateStakingRewardParams): {
                        typeUrl: string;
                        value: _663.MsgUpdateStakingRewardParams;
                    };
                    setSymmetryThreshold(value: _663.MsgSetSymmetryThreshold): {
                        typeUrl: string;
                        value: _663.MsgSetSymmetryThreshold;
                    };
                    cancelUnlockLiquidity(value: _663.MsgCancelUnlock): {
                        typeUrl: string;
                        value: _663.MsgCancelUnlock;
                    };
                    updateLiquidityProtectionParams(value: _663.MsgUpdateLiquidityProtectionParams): {
                        typeUrl: string;
                        value: _663.MsgUpdateLiquidityProtectionParams;
                    };
                    modifyLiquidityProtectionRates(value: _663.MsgModifyLiquidityProtectionRates): {
                        typeUrl: string;
                        value: _663.MsgModifyLiquidityProtectionRates;
                    };
                    addProviderDistributionPeriod(value: _663.MsgAddProviderDistributionPeriodRequest): {
                        typeUrl: string;
                        value: _663.MsgAddProviderDistributionPeriodRequest;
                    };
                };
                toJSON: {
                    removeLiquidity(value: _663.MsgRemoveLiquidity): {
                        typeUrl: string;
                        value: unknown;
                    };
                    removeLiquidityUnits(value: _663.MsgRemoveLiquidityUnits): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createPool(value: _663.MsgCreatePool): {
                        typeUrl: string;
                        value: unknown;
                    };
                    addLiquidity(value: _663.MsgAddLiquidity): {
                        typeUrl: string;
                        value: unknown;
                    };
                    swap(value: _663.MsgSwap): {
                        typeUrl: string;
                        value: unknown;
                    };
                    decommissionPool(value: _663.MsgDecommissionPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                    unlockLiquidity(value: _663.MsgUnlockLiquidityRequest): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateRewardsParams(value: _663.MsgUpdateRewardsParamsRequest): {
                        typeUrl: string;
                        value: unknown;
                    };
                    addRewardPeriod(value: _663.MsgAddRewardPeriodRequest): {
                        typeUrl: string;
                        value: unknown;
                    };
                    modifyPmtpRates(value: _663.MsgModifyPmtpRates): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updatePmtpParams(value: _663.MsgUpdatePmtpParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateStakingRewardParams(value: _663.MsgUpdateStakingRewardParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                    setSymmetryThreshold(value: _663.MsgSetSymmetryThreshold): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelUnlockLiquidity(value: _663.MsgCancelUnlock): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateLiquidityProtectionParams(value: _663.MsgUpdateLiquidityProtectionParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                    modifyLiquidityProtectionRates(value: _663.MsgModifyLiquidityProtectionRates): {
                        typeUrl: string;
                        value: unknown;
                    };
                    addProviderDistributionPeriod(value: _663.MsgAddProviderDistributionPeriodRequest): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    removeLiquidity(value: any): {
                        typeUrl: string;
                        value: _663.MsgRemoveLiquidity;
                    };
                    removeLiquidityUnits(value: any): {
                        typeUrl: string;
                        value: _663.MsgRemoveLiquidityUnits;
                    };
                    createPool(value: any): {
                        typeUrl: string;
                        value: _663.MsgCreatePool;
                    };
                    addLiquidity(value: any): {
                        typeUrl: string;
                        value: _663.MsgAddLiquidity;
                    };
                    swap(value: any): {
                        typeUrl: string;
                        value: _663.MsgSwap;
                    };
                    decommissionPool(value: any): {
                        typeUrl: string;
                        value: _663.MsgDecommissionPool;
                    };
                    unlockLiquidity(value: any): {
                        typeUrl: string;
                        value: _663.MsgUnlockLiquidityRequest;
                    };
                    updateRewardsParams(value: any): {
                        typeUrl: string;
                        value: _663.MsgUpdateRewardsParamsRequest;
                    };
                    addRewardPeriod(value: any): {
                        typeUrl: string;
                        value: _663.MsgAddRewardPeriodRequest;
                    };
                    modifyPmtpRates(value: any): {
                        typeUrl: string;
                        value: _663.MsgModifyPmtpRates;
                    };
                    updatePmtpParams(value: any): {
                        typeUrl: string;
                        value: _663.MsgUpdatePmtpParams;
                    };
                    updateStakingRewardParams(value: any): {
                        typeUrl: string;
                        value: _663.MsgUpdateStakingRewardParams;
                    };
                    setSymmetryThreshold(value: any): {
                        typeUrl: string;
                        value: _663.MsgSetSymmetryThreshold;
                    };
                    cancelUnlockLiquidity(value: any): {
                        typeUrl: string;
                        value: _663.MsgCancelUnlock;
                    };
                    updateLiquidityProtectionParams(value: any): {
                        typeUrl: string;
                        value: _663.MsgUpdateLiquidityProtectionParams;
                    };
                    modifyLiquidityProtectionRates(value: any): {
                        typeUrl: string;
                        value: _663.MsgModifyLiquidityProtectionRates;
                    };
                    addProviderDistributionPeriod(value: any): {
                        typeUrl: string;
                        value: _663.MsgAddProviderDistributionPeriodRequest;
                    };
                };
                fromPartial: {
                    removeLiquidity(value: _663.MsgRemoveLiquidity): {
                        typeUrl: string;
                        value: _663.MsgRemoveLiquidity;
                    };
                    removeLiquidityUnits(value: _663.MsgRemoveLiquidityUnits): {
                        typeUrl: string;
                        value: _663.MsgRemoveLiquidityUnits;
                    };
                    createPool(value: _663.MsgCreatePool): {
                        typeUrl: string;
                        value: _663.MsgCreatePool;
                    };
                    addLiquidity(value: _663.MsgAddLiquidity): {
                        typeUrl: string;
                        value: _663.MsgAddLiquidity;
                    };
                    swap(value: _663.MsgSwap): {
                        typeUrl: string;
                        value: _663.MsgSwap;
                    };
                    decommissionPool(value: _663.MsgDecommissionPool): {
                        typeUrl: string;
                        value: _663.MsgDecommissionPool;
                    };
                    unlockLiquidity(value: _663.MsgUnlockLiquidityRequest): {
                        typeUrl: string;
                        value: _663.MsgUnlockLiquidityRequest;
                    };
                    updateRewardsParams(value: _663.MsgUpdateRewardsParamsRequest): {
                        typeUrl: string;
                        value: _663.MsgUpdateRewardsParamsRequest;
                    };
                    addRewardPeriod(value: _663.MsgAddRewardPeriodRequest): {
                        typeUrl: string;
                        value: _663.MsgAddRewardPeriodRequest;
                    };
                    modifyPmtpRates(value: _663.MsgModifyPmtpRates): {
                        typeUrl: string;
                        value: _663.MsgModifyPmtpRates;
                    };
                    updatePmtpParams(value: _663.MsgUpdatePmtpParams): {
                        typeUrl: string;
                        value: _663.MsgUpdatePmtpParams;
                    };
                    updateStakingRewardParams(value: _663.MsgUpdateStakingRewardParams): {
                        typeUrl: string;
                        value: _663.MsgUpdateStakingRewardParams;
                    };
                    setSymmetryThreshold(value: _663.MsgSetSymmetryThreshold): {
                        typeUrl: string;
                        value: _663.MsgSetSymmetryThreshold;
                    };
                    cancelUnlockLiquidity(value: _663.MsgCancelUnlock): {
                        typeUrl: string;
                        value: _663.MsgCancelUnlock;
                    };
                    updateLiquidityProtectionParams(value: _663.MsgUpdateLiquidityProtectionParams): {
                        typeUrl: string;
                        value: _663.MsgUpdateLiquidityProtectionParams;
                    };
                    modifyLiquidityProtectionRates(value: _663.MsgModifyLiquidityProtectionRates): {
                        typeUrl: string;
                        value: _663.MsgModifyLiquidityProtectionRates;
                    };
                    addProviderDistributionPeriod(value: _663.MsgAddProviderDistributionPeriodRequest): {
                        typeUrl: string;
                        value: _663.MsgAddProviderDistributionPeriodRequest;
                    };
                };
            };
            AminoConverter: {
                "/sifnode.clp.v1.MsgRemoveLiquidity": {
                    aminoType: string;
                    toAmino: ({ signer, externalAsset, wBasisPoints, asymmetry }: _663.MsgRemoveLiquidity) => {
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
                    }) => _663.MsgRemoveLiquidity;
                };
                "/sifnode.clp.v1.MsgRemoveLiquidityUnits": {
                    aminoType: string;
                    toAmino: ({ signer, externalAsset, withdrawUnits }: _663.MsgRemoveLiquidityUnits) => {
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
                    }) => _663.MsgRemoveLiquidityUnits;
                };
                "/sifnode.clp.v1.MsgCreatePool": {
                    aminoType: string;
                    toAmino: ({ signer, externalAsset, nativeAssetAmount, externalAssetAmount }: _663.MsgCreatePool) => {
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
                    }) => _663.MsgCreatePool;
                };
                "/sifnode.clp.v1.MsgAddLiquidity": {
                    aminoType: string;
                    toAmino: ({ signer, externalAsset, nativeAssetAmount, externalAssetAmount }: _663.MsgAddLiquidity) => {
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
                    }) => _663.MsgAddLiquidity;
                };
                "/sifnode.clp.v1.MsgSwap": {
                    aminoType: string;
                    toAmino: ({ signer, sentAsset, receivedAsset, sentAmount, minReceivingAmount }: _663.MsgSwap) => {
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
                    }) => _663.MsgSwap;
                };
                "/sifnode.clp.v1.MsgDecommissionPool": {
                    aminoType: string;
                    toAmino: ({ signer, symbol }: _663.MsgDecommissionPool) => {
                        signer: string;
                        symbol: string;
                    };
                    fromAmino: ({ signer, symbol }: {
                        signer: string;
                        symbol: string;
                    }) => _663.MsgDecommissionPool;
                };
                "/sifnode.clp.v1.MsgUnlockLiquidityRequest": {
                    aminoType: string;
                    toAmino: ({ signer, externalAsset, units }: _663.MsgUnlockLiquidityRequest) => {
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
                    }) => _663.MsgUnlockLiquidityRequest;
                };
                "/sifnode.clp.v1.MsgUpdateRewardsParamsRequest": {
                    aminoType: string;
                    toAmino: ({ signer, liquidityRemovalLockPeriod, liquidityRemovalCancelPeriod }: _663.MsgUpdateRewardsParamsRequest) => {
                        signer: string;
                        liquidity_removal_lock_period: string;
                        liquidity_removal_cancel_period: string;
                    };
                    fromAmino: ({ signer, liquidity_removal_lock_period, liquidity_removal_cancel_period }: {
                        signer: string;
                        liquidity_removal_lock_period: string;
                        liquidity_removal_cancel_period: string;
                    }) => _663.MsgUpdateRewardsParamsRequest;
                };
                "/sifnode.clp.v1.MsgAddRewardPeriodRequest": {
                    aminoType: string;
                    toAmino: ({ signer, rewardPeriods }: _663.MsgAddRewardPeriodRequest) => {
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
                    }) => _663.MsgAddRewardPeriodRequest;
                };
                "/sifnode.clp.v1.MsgModifyPmtpRates": {
                    aminoType: string;
                    toAmino: ({ signer, blockRate, runningRate, endPolicy }: _663.MsgModifyPmtpRates) => {
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
                    }) => _663.MsgModifyPmtpRates;
                };
                "/sifnode.clp.v1.MsgUpdatePmtpParams": {
                    aminoType: string;
                    toAmino: ({ signer, pmtpPeriodGovernanceRate, pmtpPeriodEpochLength, pmtpPeriodStartBlock, pmtpPeriodEndBlock }: _663.MsgUpdatePmtpParams) => {
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
                    }) => _663.MsgUpdatePmtpParams;
                };
                "/sifnode.clp.v1.MsgUpdateStakingRewardParams": {
                    aminoType: string;
                    toAmino: ({ signer, minter, params }: _663.MsgUpdateStakingRewardParams) => {
                        signer: string;
                        minter: string;
                        params: string;
                    };
                    fromAmino: ({ signer, minter, params }: {
                        signer: string;
                        minter: string;
                        params: string;
                    }) => _663.MsgUpdateStakingRewardParams;
                };
                "/sifnode.clp.v1.MsgSetSymmetryThreshold": {
                    aminoType: string;
                    toAmino: ({ signer, threshold, ratio }: _663.MsgSetSymmetryThreshold) => {
                        signer: string;
                        threshold: string;
                        ratio: string;
                    };
                    fromAmino: ({ signer, threshold, ratio }: {
                        signer: string;
                        threshold: string;
                        ratio: string;
                    }) => _663.MsgSetSymmetryThreshold;
                };
                "/sifnode.clp.v1.MsgCancelUnlock": {
                    aminoType: string;
                    toAmino: ({ signer, externalAsset, units }: _663.MsgCancelUnlock) => {
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
                    }) => _663.MsgCancelUnlock;
                };
                "/sifnode.clp.v1.MsgUpdateLiquidityProtectionParams": {
                    aminoType: string;
                    toAmino: ({ signer, maxRowanLiquidityThreshold, maxRowanLiquidityThresholdAsset, epochLength, isActive }: _663.MsgUpdateLiquidityProtectionParams) => {
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
                    }) => _663.MsgUpdateLiquidityProtectionParams;
                };
                "/sifnode.clp.v1.MsgModifyLiquidityProtectionRates": {
                    aminoType: string;
                    toAmino: ({ signer, currentRowanLiquidityThreshold }: _663.MsgModifyLiquidityProtectionRates) => {
                        signer: string;
                        current_rowan_liquidity_threshold: string;
                    };
                    fromAmino: ({ signer, current_rowan_liquidity_threshold }: {
                        signer: string;
                        current_rowan_liquidity_threshold: string;
                    }) => _663.MsgModifyLiquidityProtectionRates;
                };
                "/sifnode.clp.v1.MsgAddProviderDistributionPeriodRequest": {
                    aminoType: string;
                    toAmino: ({ signer, distributionPeriods }: _663.MsgAddProviderDistributionPeriodRequest) => {
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
                    }) => _663.MsgAddProviderDistributionPeriodRequest;
                };
            };
            Asset: {
                encode(message: _664.Asset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _664.Asset;
                fromJSON(object: any): _664.Asset;
                toJSON(message: _664.Asset): unknown;
                fromPartial(object: {
                    symbol?: string;
                }): _664.Asset;
            };
            LiquidityProvider: {
                encode(message: _664.LiquidityProvider, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _664.LiquidityProvider;
                fromJSON(object: any): _664.LiquidityProvider;
                toJSON(message: _664.LiquidityProvider): unknown;
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
                }): _664.LiquidityProvider;
            };
            LiquidityUnlock: {
                encode(message: _664.LiquidityUnlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _664.LiquidityUnlock;
                fromJSON(object: any): _664.LiquidityUnlock;
                toJSON(message: _664.LiquidityUnlock): unknown;
                fromPartial(object: {
                    requestHeight?: any;
                    units?: string;
                }): _664.LiquidityUnlock;
            };
            PmtpEpoch: {
                encode(message: _664.PmtpEpoch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _664.PmtpEpoch;
                fromJSON(object: any): _664.PmtpEpoch;
                toJSON(message: _664.PmtpEpoch): unknown;
                fromPartial(object: {
                    epochCounter?: any;
                    blockCounter?: any;
                }): _664.PmtpEpoch;
            };
            WhiteList: {
                encode(message: _664.WhiteList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _664.WhiteList;
                fromJSON(object: any): _664.WhiteList;
                toJSON(message: _664.WhiteList): unknown;
                fromPartial(object: {
                    validatorList?: string[];
                }): _664.WhiteList;
            };
            LiquidityProviderData: {
                encode(message: _664.LiquidityProviderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _664.LiquidityProviderData;
                fromJSON(object: any): _664.LiquidityProviderData;
                toJSON(message: _664.LiquidityProviderData): unknown;
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
                }): _664.LiquidityProviderData;
            };
            EventPolicy: {
                encode(message: _664.EventPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _664.EventPolicy;
                fromJSON(object: any): _664.EventPolicy;
                toJSON(message: _664.EventPolicy): unknown;
                fromPartial(object: {
                    eventType?: string;
                    pmtpPeriodStartBlock?: string;
                    pmtpPeriodEndBlock?: string;
                }): _664.EventPolicy;
            };
            RemovalQueue: {
                encode(message: _664.RemovalQueue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _664.RemovalQueue;
                fromJSON(object: any): _664.RemovalQueue;
                toJSON(message: _664.RemovalQueue): unknown;
                fromPartial(object: {
                    count?: any;
                    id?: any;
                    startHeight?: any;
                    totalValue?: string;
                }): _664.RemovalQueue;
            };
            MsgUpdateStakingRewardParams: {
                encode(message: _663.MsgUpdateStakingRewardParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _663.MsgUpdateStakingRewardParams;
                fromJSON(object: any): _663.MsgUpdateStakingRewardParams;
                toJSON(message: _663.MsgUpdateStakingRewardParams): unknown;
                fromPartial(object: {
                    signer?: string;
                    minter?: string;
                    params?: string;
                }): _663.MsgUpdateStakingRewardParams;
            };
            MsgUpdateStakingRewardParamsResponse: {
                encode(_: _663.MsgUpdateStakingRewardParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _663.MsgUpdateStakingRewardParamsResponse;
                fromJSON(_: any): _663.MsgUpdateStakingRewardParamsResponse;
                toJSON(_: _663.MsgUpdateStakingRewardParamsResponse): unknown;
                fromPartial(_: {}): _663.MsgUpdateStakingRewardParamsResponse;
            };
            MsgRemoveLiquidity: {
                encode(message: _663.MsgRemoveLiquidity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _663.MsgRemoveLiquidity;
                fromJSON(object: any): _663.MsgRemoveLiquidity;
                toJSON(message: _663.MsgRemoveLiquidity): unknown;
                fromPartial(object: {
                    signer?: string;
                    externalAsset?: {
                        symbol?: string;
                    };
                    wBasisPoints?: string;
                    asymmetry?: string;
                }): _663.MsgRemoveLiquidity;
            };
            MsgRemoveLiquidityResponse: {
                encode(_: _663.MsgRemoveLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _663.MsgRemoveLiquidityResponse;
                fromJSON(_: any): _663.MsgRemoveLiquidityResponse;
                toJSON(_: _663.MsgRemoveLiquidityResponse): unknown;
                fromPartial(_: {}): _663.MsgRemoveLiquidityResponse;
            };
            MsgRemoveLiquidityUnits: {
                encode(message: _663.MsgRemoveLiquidityUnits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _663.MsgRemoveLiquidityUnits;
                fromJSON(object: any): _663.MsgRemoveLiquidityUnits;
                toJSON(message: _663.MsgRemoveLiquidityUnits): unknown;
                fromPartial(object: {
                    signer?: string;
                    externalAsset?: {
                        symbol?: string;
                    };
                    withdrawUnits?: string;
                }): _663.MsgRemoveLiquidityUnits;
            };
            MsgRemoveLiquidityUnitsResponse: {
                encode(_: _663.MsgRemoveLiquidityUnitsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _663.MsgRemoveLiquidityUnitsResponse;
                fromJSON(_: any): _663.MsgRemoveLiquidityUnitsResponse;
                toJSON(_: _663.MsgRemoveLiquidityUnitsResponse): unknown;
                fromPartial(_: {}): _663.MsgRemoveLiquidityUnitsResponse;
            };
            MsgCreatePool: {
                encode(message: _663.MsgCreatePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _663.MsgCreatePool;
                fromJSON(object: any): _663.MsgCreatePool;
                toJSON(message: _663.MsgCreatePool): unknown;
                fromPartial(object: {
                    signer?: string;
                    externalAsset?: {
                        symbol?: string;
                    };
                    nativeAssetAmount?: string;
                    externalAssetAmount?: string;
                }): _663.MsgCreatePool;
            };
            MsgCreatePoolResponse: {
                encode(_: _663.MsgCreatePoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _663.MsgCreatePoolResponse;
                fromJSON(_: any): _663.MsgCreatePoolResponse;
                toJSON(_: _663.MsgCreatePoolResponse): unknown;
                fromPartial(_: {}): _663.MsgCreatePoolResponse;
            };
            MsgAddLiquidity: {
                encode(message: _663.MsgAddLiquidity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _663.MsgAddLiquidity;
                fromJSON(object: any): _663.MsgAddLiquidity;
                toJSON(message: _663.MsgAddLiquidity): unknown;
                fromPartial(object: {
                    signer?: string;
                    externalAsset?: {
                        symbol?: string;
                    };
                    nativeAssetAmount?: string;
                    externalAssetAmount?: string;
                }): _663.MsgAddLiquidity;
            };
            MsgAddLiquidityResponse: {
                encode(_: _663.MsgAddLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _663.MsgAddLiquidityResponse;
                fromJSON(_: any): _663.MsgAddLiquidityResponse;
                toJSON(_: _663.MsgAddLiquidityResponse): unknown;
                fromPartial(_: {}): _663.MsgAddLiquidityResponse;
            };
            MsgModifyPmtpRates: {
                encode(message: _663.MsgModifyPmtpRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _663.MsgModifyPmtpRates;
                fromJSON(object: any): _663.MsgModifyPmtpRates;
                toJSON(message: _663.MsgModifyPmtpRates): unknown;
                fromPartial(object: {
                    signer?: string;
                    blockRate?: string;
                    runningRate?: string;
                    endPolicy?: boolean;
                }): _663.MsgModifyPmtpRates;
            };
            MsgModifyPmtpRatesResponse: {
                encode(_: _663.MsgModifyPmtpRatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _663.MsgModifyPmtpRatesResponse;
                fromJSON(_: any): _663.MsgModifyPmtpRatesResponse;
                toJSON(_: _663.MsgModifyPmtpRatesResponse): unknown;
                fromPartial(_: {}): _663.MsgModifyPmtpRatesResponse;
            };
            MsgUpdatePmtpParams: {
                encode(message: _663.MsgUpdatePmtpParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _663.MsgUpdatePmtpParams;
                fromJSON(object: any): _663.MsgUpdatePmtpParams;
                toJSON(message: _663.MsgUpdatePmtpParams): unknown;
                fromPartial(object: {
                    signer?: string;
                    pmtpPeriodGovernanceRate?: string;
                    pmtpPeriodEpochLength?: any;
                    pmtpPeriodStartBlock?: any;
                    pmtpPeriodEndBlock?: any;
                }): _663.MsgUpdatePmtpParams;
            };
            MsgUpdatePmtpParamsResponse: {
                encode(_: _663.MsgUpdatePmtpParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _663.MsgUpdatePmtpParamsResponse;
                fromJSON(_: any): _663.MsgUpdatePmtpParamsResponse;
                toJSON(_: _663.MsgUpdatePmtpParamsResponse): unknown;
                fromPartial(_: {}): _663.MsgUpdatePmtpParamsResponse;
            };
            MsgSwap: {
                encode(message: _663.MsgSwap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _663.MsgSwap;
                fromJSON(object: any): _663.MsgSwap;
                toJSON(message: _663.MsgSwap): unknown;
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
                }): _663.MsgSwap;
            };
            MsgSwapResponse: {
                encode(_: _663.MsgSwapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _663.MsgSwapResponse;
                fromJSON(_: any): _663.MsgSwapResponse;
                toJSON(_: _663.MsgSwapResponse): unknown;
                fromPartial(_: {}): _663.MsgSwapResponse;
            };
            MsgDecommissionPool: {
                encode(message: _663.MsgDecommissionPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _663.MsgDecommissionPool;
                fromJSON(object: any): _663.MsgDecommissionPool;
                toJSON(message: _663.MsgDecommissionPool): unknown;
                fromPartial(object: {
                    signer?: string;
                    symbol?: string;
                }): _663.MsgDecommissionPool;
            };
            MsgDecommissionPoolResponse: {
                encode(_: _663.MsgDecommissionPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _663.MsgDecommissionPoolResponse;
                fromJSON(_: any): _663.MsgDecommissionPoolResponse;
                toJSON(_: _663.MsgDecommissionPoolResponse): unknown;
                fromPartial(_: {}): _663.MsgDecommissionPoolResponse;
            };
            MsgUnlockLiquidityRequest: {
                encode(message: _663.MsgUnlockLiquidityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _663.MsgUnlockLiquidityRequest;
                fromJSON(object: any): _663.MsgUnlockLiquidityRequest;
                toJSON(message: _663.MsgUnlockLiquidityRequest): unknown;
                fromPartial(object: {
                    signer?: string;
                    externalAsset?: {
                        symbol?: string;
                    };
                    units?: string;
                }): _663.MsgUnlockLiquidityRequest;
            };
            MsgUnlockLiquidityResponse: {
                encode(_: _663.MsgUnlockLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _663.MsgUnlockLiquidityResponse;
                fromJSON(_: any): _663.MsgUnlockLiquidityResponse;
                toJSON(_: _663.MsgUnlockLiquidityResponse): unknown;
                fromPartial(_: {}): _663.MsgUnlockLiquidityResponse;
            };
            MsgUpdateRewardsParamsRequest: {
                encode(message: _663.MsgUpdateRewardsParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _663.MsgUpdateRewardsParamsRequest;
                fromJSON(object: any): _663.MsgUpdateRewardsParamsRequest;
                toJSON(message: _663.MsgUpdateRewardsParamsRequest): unknown;
                fromPartial(object: {
                    signer?: string;
                    liquidityRemovalLockPeriod?: any;
                    liquidityRemovalCancelPeriod?: any;
                }): _663.MsgUpdateRewardsParamsRequest;
            };
            MsgUpdateRewardsParamsResponse: {
                encode(_: _663.MsgUpdateRewardsParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _663.MsgUpdateRewardsParamsResponse;
                fromJSON(_: any): _663.MsgUpdateRewardsParamsResponse;
                toJSON(_: _663.MsgUpdateRewardsParamsResponse): unknown;
                fromPartial(_: {}): _663.MsgUpdateRewardsParamsResponse;
            };
            MsgAddRewardPeriodRequest: {
                encode(message: _663.MsgAddRewardPeriodRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _663.MsgAddRewardPeriodRequest;
                fromJSON(object: any): _663.MsgAddRewardPeriodRequest;
                toJSON(message: _663.MsgAddRewardPeriodRequest): unknown;
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
                }): _663.MsgAddRewardPeriodRequest;
            };
            MsgAddRewardPeriodResponse: {
                encode(_: _663.MsgAddRewardPeriodResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _663.MsgAddRewardPeriodResponse;
                fromJSON(_: any): _663.MsgAddRewardPeriodResponse;
                toJSON(_: _663.MsgAddRewardPeriodResponse): unknown;
                fromPartial(_: {}): _663.MsgAddRewardPeriodResponse;
            };
            MsgSetSymmetryThreshold: {
                encode(message: _663.MsgSetSymmetryThreshold, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _663.MsgSetSymmetryThreshold;
                fromJSON(object: any): _663.MsgSetSymmetryThreshold;
                toJSON(message: _663.MsgSetSymmetryThreshold): unknown;
                fromPartial(object: {
                    signer?: string;
                    threshold?: string;
                    ratio?: string;
                }): _663.MsgSetSymmetryThreshold;
            };
            MsgSetSymmetryThresholdResponse: {
                encode(_: _663.MsgSetSymmetryThresholdResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _663.MsgSetSymmetryThresholdResponse;
                fromJSON(_: any): _663.MsgSetSymmetryThresholdResponse;
                toJSON(_: _663.MsgSetSymmetryThresholdResponse): unknown;
                fromPartial(_: {}): _663.MsgSetSymmetryThresholdResponse;
            };
            MsgCancelUnlock: {
                encode(message: _663.MsgCancelUnlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _663.MsgCancelUnlock;
                fromJSON(object: any): _663.MsgCancelUnlock;
                toJSON(message: _663.MsgCancelUnlock): unknown;
                fromPartial(object: {
                    signer?: string;
                    externalAsset?: {
                        symbol?: string;
                    };
                    units?: string;
                }): _663.MsgCancelUnlock;
            };
            MsgCancelUnlockResponse: {
                encode(_: _663.MsgCancelUnlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _663.MsgCancelUnlockResponse;
                fromJSON(_: any): _663.MsgCancelUnlockResponse;
                toJSON(_: _663.MsgCancelUnlockResponse): unknown;
                fromPartial(_: {}): _663.MsgCancelUnlockResponse;
            };
            RemovalRequest: {
                encode(message: _663.RemovalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _663.RemovalRequest;
                fromJSON(object: any): _663.RemovalRequest;
                toJSON(message: _663.RemovalRequest): unknown;
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
                }): _663.RemovalRequest;
            };
            MsgModifyLiquidityProtectionRates: {
                encode(message: _663.MsgModifyLiquidityProtectionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _663.MsgModifyLiquidityProtectionRates;
                fromJSON(object: any): _663.MsgModifyLiquidityProtectionRates;
                toJSON(message: _663.MsgModifyLiquidityProtectionRates): unknown;
                fromPartial(object: {
                    signer?: string;
                    currentRowanLiquidityThreshold?: string;
                }): _663.MsgModifyLiquidityProtectionRates;
            };
            MsgModifyLiquidityProtectionRatesResponse: {
                encode(_: _663.MsgModifyLiquidityProtectionRatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _663.MsgModifyLiquidityProtectionRatesResponse;
                fromJSON(_: any): _663.MsgModifyLiquidityProtectionRatesResponse;
                toJSON(_: _663.MsgModifyLiquidityProtectionRatesResponse): unknown;
                fromPartial(_: {}): _663.MsgModifyLiquidityProtectionRatesResponse;
            };
            MsgUpdateLiquidityProtectionParams: {
                encode(message: _663.MsgUpdateLiquidityProtectionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _663.MsgUpdateLiquidityProtectionParams;
                fromJSON(object: any): _663.MsgUpdateLiquidityProtectionParams;
                toJSON(message: _663.MsgUpdateLiquidityProtectionParams): unknown;
                fromPartial(object: {
                    signer?: string;
                    maxRowanLiquidityThreshold?: string;
                    maxRowanLiquidityThresholdAsset?: string;
                    epochLength?: any;
                    isActive?: boolean;
                }): _663.MsgUpdateLiquidityProtectionParams;
            };
            MsgUpdateLiquidityProtectionParamsResponse: {
                encode(_: _663.MsgUpdateLiquidityProtectionParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _663.MsgUpdateLiquidityProtectionParamsResponse;
                fromJSON(_: any): _663.MsgUpdateLiquidityProtectionParamsResponse;
                toJSON(_: _663.MsgUpdateLiquidityProtectionParamsResponse): unknown;
                fromPartial(_: {}): _663.MsgUpdateLiquidityProtectionParamsResponse;
            };
            MsgAddProviderDistributionPeriodRequest: {
                encode(message: _663.MsgAddProviderDistributionPeriodRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _663.MsgAddProviderDistributionPeriodRequest;
                fromJSON(object: any): _663.MsgAddProviderDistributionPeriodRequest;
                toJSON(message: _663.MsgAddProviderDistributionPeriodRequest): unknown;
                fromPartial(object: {
                    signer?: string;
                    distributionPeriods?: {
                        distributionPeriodBlockRate?: string;
                        distributionPeriodStartBlock?: any;
                        distributionPeriodEndBlock?: any;
                        distributionPeriodMod?: any;
                    }[];
                }): _663.MsgAddProviderDistributionPeriodRequest;
            };
            MsgAddProviderDistributionPeriodResponse: {
                encode(_: _663.MsgAddProviderDistributionPeriodResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _663.MsgAddProviderDistributionPeriodResponse;
                fromJSON(_: any): _663.MsgAddProviderDistributionPeriodResponse;
                toJSON(_: _663.MsgAddProviderDistributionPeriodResponse): unknown;
                fromPartial(_: {}): _663.MsgAddProviderDistributionPeriodResponse;
            };
            PoolReq: {
                encode(message: _662.PoolReq, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.PoolReq;
                fromJSON(object: any): _662.PoolReq;
                toJSON(message: _662.PoolReq): unknown;
                fromPartial(object: {
                    symbol?: string;
                }): _662.PoolReq;
            };
            PoolRes: {
                encode(message: _662.PoolRes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.PoolRes;
                fromJSON(object: any): _662.PoolRes;
                toJSON(message: _662.PoolRes): unknown;
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
                }): _662.PoolRes;
            };
            PoolsReq: {
                encode(message: _662.PoolsReq, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.PoolsReq;
                fromJSON(object: any): _662.PoolsReq;
                toJSON(message: _662.PoolsReq): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _662.PoolsReq;
            };
            PoolsRes: {
                encode(message: _662.PoolsRes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.PoolsRes;
                fromJSON(object: any): _662.PoolsRes;
                toJSON(message: _662.PoolsRes): unknown;
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
                }): _662.PoolsRes;
            };
            LiquidityProviderReq: {
                encode(message: _662.LiquidityProviderReq, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.LiquidityProviderReq;
                fromJSON(object: any): _662.LiquidityProviderReq;
                toJSON(message: _662.LiquidityProviderReq): unknown;
                fromPartial(object: {
                    symbol?: string;
                    lpAddress?: string;
                }): _662.LiquidityProviderReq;
            };
            LiquidityProviderRes: {
                encode(message: _662.LiquidityProviderRes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.LiquidityProviderRes;
                fromJSON(object: any): _662.LiquidityProviderRes;
                toJSON(message: _662.LiquidityProviderRes): unknown;
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
                }): _662.LiquidityProviderRes;
            };
            AssetListReq: {
                encode(message: _662.AssetListReq, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.AssetListReq;
                fromJSON(object: any): _662.AssetListReq;
                toJSON(message: _662.AssetListReq): unknown;
                fromPartial(object: {
                    lpAddress?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _662.AssetListReq;
            };
            AssetListRes: {
                encode(message: _662.AssetListRes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.AssetListRes;
                fromJSON(object: any): _662.AssetListRes;
                toJSON(message: _662.AssetListRes): unknown;
                fromPartial(object: {
                    assets?: {
                        symbol?: string;
                    }[];
                    height?: any;
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _662.AssetListRes;
            };
            LiquidityProviderDataReq: {
                encode(message: _662.LiquidityProviderDataReq, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.LiquidityProviderDataReq;
                fromJSON(object: any): _662.LiquidityProviderDataReq;
                toJSON(message: _662.LiquidityProviderDataReq): unknown;
                fromPartial(object: {
                    lpAddress?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _662.LiquidityProviderDataReq;
            };
            LiquidityProviderDataRes: {
                encode(message: _662.LiquidityProviderDataRes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.LiquidityProviderDataRes;
                fromJSON(object: any): _662.LiquidityProviderDataRes;
                toJSON(message: _662.LiquidityProviderDataRes): unknown;
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
                }): _662.LiquidityProviderDataRes;
            };
            LiquidityProviderListReq: {
                encode(message: _662.LiquidityProviderListReq, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.LiquidityProviderListReq;
                fromJSON(object: any): _662.LiquidityProviderListReq;
                toJSON(message: _662.LiquidityProviderListReq): unknown;
                fromPartial(object: {
                    symbol?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _662.LiquidityProviderListReq;
            };
            LiquidityProviderListRes: {
                encode(message: _662.LiquidityProviderListRes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.LiquidityProviderListRes;
                fromJSON(object: any): _662.LiquidityProviderListRes;
                toJSON(message: _662.LiquidityProviderListRes): unknown;
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
                }): _662.LiquidityProviderListRes;
            };
            LiquidityProvidersReq: {
                encode(message: _662.LiquidityProvidersReq, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.LiquidityProvidersReq;
                fromJSON(object: any): _662.LiquidityProvidersReq;
                toJSON(message: _662.LiquidityProvidersReq): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _662.LiquidityProvidersReq;
            };
            LiquidityProvidersRes: {
                encode(message: _662.LiquidityProvidersRes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.LiquidityProvidersRes;
                fromJSON(object: any): _662.LiquidityProvidersRes;
                toJSON(message: _662.LiquidityProvidersRes): unknown;
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
                }): _662.LiquidityProvidersRes;
            };
            ParamsReq: {
                encode(_: _662.ParamsReq, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.ParamsReq;
                fromJSON(_: any): _662.ParamsReq;
                toJSON(_: _662.ParamsReq): unknown;
                fromPartial(_: {}): _662.ParamsReq;
            };
            ParamsRes: {
                encode(message: _662.ParamsRes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.ParamsRes;
                fromJSON(object: any): _662.ParamsRes;
                toJSON(message: _662.ParamsRes): unknown;
                fromPartial(object: {
                    params?: {
                        minCreatePoolThreshold?: any;
                        enableRemovalQueue?: boolean;
                    };
                    symmetryThreshold?: string;
                    symmetryRatioThreshold?: string;
                }): _662.ParamsRes;
            };
            RewardParamsReq: {
                encode(_: _662.RewardParamsReq, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.RewardParamsReq;
                fromJSON(_: any): _662.RewardParamsReq;
                toJSON(_: _662.RewardParamsReq): unknown;
                fromPartial(_: {}): _662.RewardParamsReq;
            };
            RewardParamsRes: {
                encode(message: _662.RewardParamsRes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.RewardParamsRes;
                fromJSON(object: any): _662.RewardParamsRes;
                toJSON(message: _662.RewardParamsRes): unknown;
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
                }): _662.RewardParamsRes;
            };
            PmtpParamsReq: {
                encode(_: _662.PmtpParamsReq, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.PmtpParamsReq;
                fromJSON(_: any): _662.PmtpParamsReq;
                toJSON(_: _662.PmtpParamsReq): unknown;
                fromPartial(_: {}): _662.PmtpParamsReq;
            };
            PmtpParamsRes: {
                encode(message: _662.PmtpParamsRes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.PmtpParamsRes;
                fromJSON(object: any): _662.PmtpParamsRes;
                toJSON(message: _662.PmtpParamsRes): unknown;
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
                }): _662.PmtpParamsRes;
            };
            LiquidityProtectionParamsReq: {
                encode(_: _662.LiquidityProtectionParamsReq, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.LiquidityProtectionParamsReq;
                fromJSON(_: any): _662.LiquidityProtectionParamsReq;
                toJSON(_: _662.LiquidityProtectionParamsReq): unknown;
                fromPartial(_: {}): _662.LiquidityProtectionParamsReq;
            };
            LiquidityProtectionParamsRes: {
                encode(message: _662.LiquidityProtectionParamsRes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.LiquidityProtectionParamsRes;
                fromJSON(object: any): _662.LiquidityProtectionParamsRes;
                toJSON(message: _662.LiquidityProtectionParamsRes): unknown;
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
                }): _662.LiquidityProtectionParamsRes;
            };
            ProviderDistributionParamsReq: {
                encode(_: _662.ProviderDistributionParamsReq, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.ProviderDistributionParamsReq;
                fromJSON(_: any): _662.ProviderDistributionParamsReq;
                toJSON(_: _662.ProviderDistributionParamsReq): unknown;
                fromPartial(_: {}): _662.ProviderDistributionParamsReq;
            };
            ProviderDistributionParamsRes: {
                encode(message: _662.ProviderDistributionParamsRes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.ProviderDistributionParamsRes;
                fromJSON(object: any): _662.ProviderDistributionParamsRes;
                toJSON(message: _662.ProviderDistributionParamsRes): unknown;
                fromPartial(object: {
                    params?: {
                        distributionPeriods?: {
                            distributionPeriodBlockRate?: string;
                            distributionPeriodStartBlock?: any;
                            distributionPeriodEndBlock?: any;
                            distributionPeriodMod?: any;
                        }[];
                    };
                }): _662.ProviderDistributionParamsRes;
            };
            Pool: {
                encode(message: _661.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _661.Pool;
                fromJSON(object: any): _661.Pool;
                toJSON(message: _661.Pool): unknown;
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
                }): _661.Pool;
            };
            Params: {
                encode(message: _660.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _660.Params;
                fromJSON(object: any): _660.Params;
                toJSON(message: _660.Params): unknown;
                fromPartial(object: {
                    minCreatePoolThreshold?: any;
                    enableRemovalQueue?: boolean;
                }): _660.Params;
            };
            RewardParams: {
                encode(message: _660.RewardParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _660.RewardParams;
                fromJSON(object: any): _660.RewardParams;
                toJSON(message: _660.RewardParams): unknown;
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
                }): _660.RewardParams;
            };
            PmtpRateParams: {
                encode(message: _660.PmtpRateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _660.PmtpRateParams;
                fromJSON(object: any): _660.PmtpRateParams;
                toJSON(message: _660.PmtpRateParams): unknown;
                fromPartial(object: {
                    pmtpPeriodBlockRate?: string;
                    pmtpCurrentRunningRate?: string;
                    pmtpInterPolicyRate?: string;
                }): _660.PmtpRateParams;
            };
            PmtpParams: {
                encode(message: _660.PmtpParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _660.PmtpParams;
                fromJSON(object: any): _660.PmtpParams;
                toJSON(message: _660.PmtpParams): unknown;
                fromPartial(object: {
                    pmtpPeriodGovernanceRate?: string;
                    pmtpPeriodEpochLength?: any;
                    pmtpPeriodStartBlock?: any;
                    pmtpPeriodEndBlock?: any;
                }): _660.PmtpParams;
            };
            RewardPeriod: {
                encode(message: _660.RewardPeriod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _660.RewardPeriod;
                fromJSON(object: any): _660.RewardPeriod;
                toJSON(message: _660.RewardPeriod): unknown;
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
                }): _660.RewardPeriod;
            };
            PoolMultiplier: {
                encode(message: _660.PoolMultiplier, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _660.PoolMultiplier;
                fromJSON(object: any): _660.PoolMultiplier;
                toJSON(message: _660.PoolMultiplier): unknown;
                fromPartial(object: {
                    poolMultiplierAsset?: string;
                    multiplier?: string;
                }): _660.PoolMultiplier;
            };
            LiquidityProtectionParams: {
                encode(message: _660.LiquidityProtectionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _660.LiquidityProtectionParams;
                fromJSON(object: any): _660.LiquidityProtectionParams;
                toJSON(message: _660.LiquidityProtectionParams): unknown;
                fromPartial(object: {
                    maxRowanLiquidityThreshold?: string;
                    maxRowanLiquidityThresholdAsset?: string;
                    epochLength?: any;
                    isActive?: boolean;
                }): _660.LiquidityProtectionParams;
            };
            LiquidityProtectionRateParams: {
                encode(message: _660.LiquidityProtectionRateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _660.LiquidityProtectionRateParams;
                fromJSON(object: any): _660.LiquidityProtectionRateParams;
                toJSON(message: _660.LiquidityProtectionRateParams): unknown;
                fromPartial(object: {
                    currentRowanLiquidityThreshold?: string;
                }): _660.LiquidityProtectionRateParams;
            };
            ProviderDistributionPeriod: {
                encode(message: _660.ProviderDistributionPeriod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _660.ProviderDistributionPeriod;
                fromJSON(object: any): _660.ProviderDistributionPeriod;
                toJSON(message: _660.ProviderDistributionPeriod): unknown;
                fromPartial(object: {
                    distributionPeriodBlockRate?: string;
                    distributionPeriodStartBlock?: any;
                    distributionPeriodEndBlock?: any;
                    distributionPeriodMod?: any;
                }): _660.ProviderDistributionPeriod;
            };
            ProviderDistributionParams: {
                encode(message: _660.ProviderDistributionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _660.ProviderDistributionParams;
                fromJSON(object: any): _660.ProviderDistributionParams;
                toJSON(message: _660.ProviderDistributionParams): unknown;
                fromPartial(object: {
                    distributionPeriods?: {
                        distributionPeriodBlockRate?: string;
                        distributionPeriodStartBlock?: any;
                        distributionPeriodEndBlock?: any;
                        distributionPeriodMod?: any;
                    }[];
                }): _660.ProviderDistributionParams;
            };
            GenesisState: {
                encode(message: _659.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _659.GenesisState;
                fromJSON(object: any): _659.GenesisState;
                toJSON(message: _659.GenesisState): unknown;
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
                }): _659.GenesisState;
            };
        };
    }
    namespace dispensation {
        const v1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createDistribution(value: _666.MsgCreateDistribution): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createUserClaim(value: _666.MsgCreateUserClaim): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    runDistribution(value: _666.MsgRunDistribution): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createDistribution(value: _666.MsgCreateDistribution): {
                        typeUrl: string;
                        value: _666.MsgCreateDistribution;
                    };
                    createUserClaim(value: _666.MsgCreateUserClaim): {
                        typeUrl: string;
                        value: _666.MsgCreateUserClaim;
                    };
                    runDistribution(value: _666.MsgRunDistribution): {
                        typeUrl: string;
                        value: _666.MsgRunDistribution;
                    };
                };
                toJSON: {
                    createDistribution(value: _666.MsgCreateDistribution): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createUserClaim(value: _666.MsgCreateUserClaim): {
                        typeUrl: string;
                        value: unknown;
                    };
                    runDistribution(value: _666.MsgRunDistribution): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createDistribution(value: any): {
                        typeUrl: string;
                        value: _666.MsgCreateDistribution;
                    };
                    createUserClaim(value: any): {
                        typeUrl: string;
                        value: _666.MsgCreateUserClaim;
                    };
                    runDistribution(value: any): {
                        typeUrl: string;
                        value: _666.MsgRunDistribution;
                    };
                };
                fromPartial: {
                    createDistribution(value: _666.MsgCreateDistribution): {
                        typeUrl: string;
                        value: _666.MsgCreateDistribution;
                    };
                    createUserClaim(value: _666.MsgCreateUserClaim): {
                        typeUrl: string;
                        value: _666.MsgCreateUserClaim;
                    };
                    runDistribution(value: _666.MsgRunDistribution): {
                        typeUrl: string;
                        value: _666.MsgRunDistribution;
                    };
                };
            };
            AminoConverter: {
                "/sifnode.dispensation.v1.MsgCreateDistribution": {
                    aminoType: string;
                    toAmino: ({ distributor, authorizedRunner, distributionType, output }: _666.MsgCreateDistribution) => {
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
                    }) => _666.MsgCreateDistribution;
                };
                "/sifnode.dispensation.v1.MsgCreateUserClaim": {
                    aminoType: string;
                    toAmino: ({ userClaimAddress, userClaimType }: _666.MsgCreateUserClaim) => {
                        user_claim_address: string;
                        user_claim_type: number;
                    };
                    fromAmino: ({ user_claim_address, user_claim_type }: {
                        user_claim_address: string;
                        user_claim_type: number;
                    }) => _666.MsgCreateUserClaim;
                };
                "/sifnode.dispensation.v1.MsgRunDistribution": {
                    aminoType: string;
                    toAmino: ({ authorizedRunner, distributionName, distributionType, distributionCount }: _666.MsgRunDistribution) => {
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
                    }) => _666.MsgRunDistribution;
                };
            };
            distributionTypeFromJSON(object: any): _667.DistributionType;
            distributionTypeToJSON(object: _667.DistributionType): string;
            distributionStatusFromJSON(object: any): _667.DistributionStatus;
            distributionStatusToJSON(object: _667.DistributionStatus): string;
            DistributionType: typeof _667.DistributionType;
            DistributionStatus: typeof _667.DistributionStatus;
            GenesisState: {
                encode(message: _667.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _667.GenesisState;
                fromJSON(object: any): _667.GenesisState;
                toJSON(message: _667.GenesisState): unknown;
                fromPartial(object: {
                    distributionRecords?: {
                        distributionRecords?: {
                            distributionStatus?: _667.DistributionStatus;
                            distributionType?: _667.DistributionType;
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
                            distributionType?: _667.DistributionType;
                            distributionName?: string;
                            runner?: string;
                        }[];
                    };
                    claims?: {
                        userClaims?: {
                            userAddress?: string;
                            userClaimType?: _667.DistributionType;
                            userClaimTime?: string;
                        }[];
                    };
                }): _667.GenesisState;
            };
            DistributionRecord: {
                encode(message: _667.DistributionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _667.DistributionRecord;
                fromJSON(object: any): _667.DistributionRecord;
                toJSON(message: _667.DistributionRecord): unknown;
                fromPartial(object: {
                    distributionStatus?: _667.DistributionStatus;
                    distributionType?: _667.DistributionType;
                    distributionName?: string;
                    recipientAddress?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    distributionStartHeight?: any;
                    distributionCompletedHeight?: any;
                    authorizedRunner?: string;
                }): _667.DistributionRecord;
            };
            DistributionRecords: {
                encode(message: _667.DistributionRecords, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _667.DistributionRecords;
                fromJSON(object: any): _667.DistributionRecords;
                toJSON(message: _667.DistributionRecords): unknown;
                fromPartial(object: {
                    distributionRecords?: {
                        distributionStatus?: _667.DistributionStatus;
                        distributionType?: _667.DistributionType;
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
                }): _667.DistributionRecords;
            };
            Distributions: {
                encode(message: _667.Distributions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _667.Distributions;
                fromJSON(object: any): _667.Distributions;
                toJSON(message: _667.Distributions): unknown;
                fromPartial(object: {
                    distributions?: {
                        distributionType?: _667.DistributionType;
                        distributionName?: string;
                        runner?: string;
                    }[];
                }): _667.Distributions;
            };
            Distribution: {
                encode(message: _667.Distribution, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _667.Distribution;
                fromJSON(object: any): _667.Distribution;
                toJSON(message: _667.Distribution): unknown;
                fromPartial(object: {
                    distributionType?: _667.DistributionType;
                    distributionName?: string;
                    runner?: string;
                }): _667.Distribution;
            };
            UserClaim: {
                encode(message: _667.UserClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _667.UserClaim;
                fromJSON(object: any): _667.UserClaim;
                toJSON(message: _667.UserClaim): unknown;
                fromPartial(object: {
                    userAddress?: string;
                    userClaimType?: _667.DistributionType;
                    userClaimTime?: string;
                }): _667.UserClaim;
            };
            UserClaims: {
                encode(message: _667.UserClaims, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _667.UserClaims;
                fromJSON(object: any): _667.UserClaims;
                toJSON(message: _667.UserClaims): unknown;
                fromPartial(object: {
                    userClaims?: {
                        userAddress?: string;
                        userClaimType?: _667.DistributionType;
                        userClaimTime?: string;
                    }[];
                }): _667.UserClaims;
            };
            MintController: {
                encode(message: _667.MintController, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _667.MintController;
                fromJSON(object: any): _667.MintController;
                toJSON(message: _667.MintController): unknown;
                fromPartial(object: {
                    totalCounter?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _667.MintController;
            };
            MsgCreateDistribution: {
                encode(message: _666.MsgCreateDistribution, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _666.MsgCreateDistribution;
                fromJSON(object: any): _666.MsgCreateDistribution;
                toJSON(message: _666.MsgCreateDistribution): unknown;
                fromPartial(object: {
                    distributor?: string;
                    authorizedRunner?: string;
                    distributionType?: _667.DistributionType;
                    output?: string[];
                }): _666.MsgCreateDistribution;
            };
            MsgCreateDistributionResponse: {
                encode(_: _666.MsgCreateDistributionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _666.MsgCreateDistributionResponse;
                fromJSON(_: any): _666.MsgCreateDistributionResponse;
                toJSON(_: _666.MsgCreateDistributionResponse): unknown;
                fromPartial(_: {}): _666.MsgCreateDistributionResponse;
            };
            MsgCreateClaimResponse: {
                encode(_: _666.MsgCreateClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _666.MsgCreateClaimResponse;
                fromJSON(_: any): _666.MsgCreateClaimResponse;
                toJSON(_: _666.MsgCreateClaimResponse): unknown;
                fromPartial(_: {}): _666.MsgCreateClaimResponse;
            };
            MsgRunDistributionResponse: {
                encode(_: _666.MsgRunDistributionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _666.MsgRunDistributionResponse;
                fromJSON(_: any): _666.MsgRunDistributionResponse;
                toJSON(_: _666.MsgRunDistributionResponse): unknown;
                fromPartial(_: {}): _666.MsgRunDistributionResponse;
            };
            MsgCreateUserClaim: {
                encode(message: _666.MsgCreateUserClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _666.MsgCreateUserClaim;
                fromJSON(object: any): _666.MsgCreateUserClaim;
                toJSON(message: _666.MsgCreateUserClaim): unknown;
                fromPartial(object: {
                    userClaimAddress?: string;
                    userClaimType?: _667.DistributionType;
                }): _666.MsgCreateUserClaim;
            };
            MsgRunDistribution: {
                encode(message: _666.MsgRunDistribution, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _666.MsgRunDistribution;
                fromJSON(object: any): _666.MsgRunDistribution;
                toJSON(message: _666.MsgRunDistribution): unknown;
                fromPartial(object: {
                    authorizedRunner?: string;
                    distributionName?: string;
                    distributionType?: _667.DistributionType;
                    distributionCount?: any;
                }): _666.MsgRunDistribution;
            };
            QueryAllDistributionsRequest: {
                encode(_: _665.QueryAllDistributionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _665.QueryAllDistributionsRequest;
                fromJSON(_: any): _665.QueryAllDistributionsRequest;
                toJSON(_: _665.QueryAllDistributionsRequest): unknown;
                fromPartial(_: {}): _665.QueryAllDistributionsRequest;
            };
            QueryAllDistributionsResponse: {
                encode(message: _665.QueryAllDistributionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _665.QueryAllDistributionsResponse;
                fromJSON(object: any): _665.QueryAllDistributionsResponse;
                toJSON(message: _665.QueryAllDistributionsResponse): unknown;
                fromPartial(object: {
                    distributions?: {
                        distributionType?: _667.DistributionType;
                        distributionName?: string;
                        runner?: string;
                    }[];
                    height?: any;
                }): _665.QueryAllDistributionsResponse;
            };
            QueryRecordsByDistributionNameRequest: {
                encode(message: _665.QueryRecordsByDistributionNameRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _665.QueryRecordsByDistributionNameRequest;
                fromJSON(object: any): _665.QueryRecordsByDistributionNameRequest;
                toJSON(message: _665.QueryRecordsByDistributionNameRequest): unknown;
                fromPartial(object: {
                    distributionName?: string;
                    status?: _667.DistributionStatus;
                }): _665.QueryRecordsByDistributionNameRequest;
            };
            QueryRecordsByDistributionNameResponse: {
                encode(message: _665.QueryRecordsByDistributionNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _665.QueryRecordsByDistributionNameResponse;
                fromJSON(object: any): _665.QueryRecordsByDistributionNameResponse;
                toJSON(message: _665.QueryRecordsByDistributionNameResponse): unknown;
                fromPartial(object: {
                    distributionRecords?: {
                        distributionRecords?: {
                            distributionStatus?: _667.DistributionStatus;
                            distributionType?: _667.DistributionType;
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
                }): _665.QueryRecordsByDistributionNameResponse;
            };
            QueryRecordsByRecipientAddrRequest: {
                encode(message: _665.QueryRecordsByRecipientAddrRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _665.QueryRecordsByRecipientAddrRequest;
                fromJSON(object: any): _665.QueryRecordsByRecipientAddrRequest;
                toJSON(message: _665.QueryRecordsByRecipientAddrRequest): unknown;
                fromPartial(object: {
                    address?: string;
                }): _665.QueryRecordsByRecipientAddrRequest;
            };
            QueryRecordsByRecipientAddrResponse: {
                encode(message: _665.QueryRecordsByRecipientAddrResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _665.QueryRecordsByRecipientAddrResponse;
                fromJSON(object: any): _665.QueryRecordsByRecipientAddrResponse;
                toJSON(message: _665.QueryRecordsByRecipientAddrResponse): unknown;
                fromPartial(object: {
                    distributionRecords?: {
                        distributionRecords?: {
                            distributionStatus?: _667.DistributionStatus;
                            distributionType?: _667.DistributionType;
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
                }): _665.QueryRecordsByRecipientAddrResponse;
            };
            QueryClaimsByTypeRequest: {
                encode(message: _665.QueryClaimsByTypeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _665.QueryClaimsByTypeRequest;
                fromJSON(object: any): _665.QueryClaimsByTypeRequest;
                toJSON(message: _665.QueryClaimsByTypeRequest): unknown;
                fromPartial(object: {
                    userClaimType?: _667.DistributionType;
                }): _665.QueryClaimsByTypeRequest;
            };
            QueryClaimsResponse: {
                encode(message: _665.QueryClaimsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _665.QueryClaimsResponse;
                fromJSON(object: any): _665.QueryClaimsResponse;
                toJSON(message: _665.QueryClaimsResponse): unknown;
                fromPartial(object: {
                    claims?: {
                        userAddress?: string;
                        userClaimType?: _667.DistributionType;
                        userClaimTime?: string;
                    }[];
                    height?: any;
                }): _665.QueryClaimsResponse;
            };
        };
    }
    namespace ethbridge {
        const v1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    lock(value: _669.MsgLock): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burn(value: _669.MsgBurn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createEthBridgeClaim(value: _669.MsgCreateEthBridgeClaim): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateWhiteListValidator(value: _669.MsgUpdateWhiteListValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateCethReceiverAccount(value: _669.MsgUpdateCethReceiverAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    rescueCeth(value: _669.MsgRescueCeth): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setBlacklist(value: _669.MsgSetBlacklist): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    lock(value: _669.MsgLock): {
                        typeUrl: string;
                        value: _669.MsgLock;
                    };
                    burn(value: _669.MsgBurn): {
                        typeUrl: string;
                        value: _669.MsgBurn;
                    };
                    createEthBridgeClaim(value: _669.MsgCreateEthBridgeClaim): {
                        typeUrl: string;
                        value: _669.MsgCreateEthBridgeClaim;
                    };
                    updateWhiteListValidator(value: _669.MsgUpdateWhiteListValidator): {
                        typeUrl: string;
                        value: _669.MsgUpdateWhiteListValidator;
                    };
                    updateCethReceiverAccount(value: _669.MsgUpdateCethReceiverAccount): {
                        typeUrl: string;
                        value: _669.MsgUpdateCethReceiverAccount;
                    };
                    rescueCeth(value: _669.MsgRescueCeth): {
                        typeUrl: string;
                        value: _669.MsgRescueCeth;
                    };
                    setBlacklist(value: _669.MsgSetBlacklist): {
                        typeUrl: string;
                        value: _669.MsgSetBlacklist;
                    };
                };
                toJSON: {
                    lock(value: _669.MsgLock): {
                        typeUrl: string;
                        value: unknown;
                    };
                    burn(value: _669.MsgBurn): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createEthBridgeClaim(value: _669.MsgCreateEthBridgeClaim): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateWhiteListValidator(value: _669.MsgUpdateWhiteListValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateCethReceiverAccount(value: _669.MsgUpdateCethReceiverAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    rescueCeth(value: _669.MsgRescueCeth): {
                        typeUrl: string;
                        value: unknown;
                    };
                    setBlacklist(value: _669.MsgSetBlacklist): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    lock(value: any): {
                        typeUrl: string;
                        value: _669.MsgLock;
                    };
                    burn(value: any): {
                        typeUrl: string;
                        value: _669.MsgBurn;
                    };
                    createEthBridgeClaim(value: any): {
                        typeUrl: string;
                        value: _669.MsgCreateEthBridgeClaim;
                    };
                    updateWhiteListValidator(value: any): {
                        typeUrl: string;
                        value: _669.MsgUpdateWhiteListValidator;
                    };
                    updateCethReceiverAccount(value: any): {
                        typeUrl: string;
                        value: _669.MsgUpdateCethReceiverAccount;
                    };
                    rescueCeth(value: any): {
                        typeUrl: string;
                        value: _669.MsgRescueCeth;
                    };
                    setBlacklist(value: any): {
                        typeUrl: string;
                        value: _669.MsgSetBlacklist;
                    };
                };
                fromPartial: {
                    lock(value: _669.MsgLock): {
                        typeUrl: string;
                        value: _669.MsgLock;
                    };
                    burn(value: _669.MsgBurn): {
                        typeUrl: string;
                        value: _669.MsgBurn;
                    };
                    createEthBridgeClaim(value: _669.MsgCreateEthBridgeClaim): {
                        typeUrl: string;
                        value: _669.MsgCreateEthBridgeClaim;
                    };
                    updateWhiteListValidator(value: _669.MsgUpdateWhiteListValidator): {
                        typeUrl: string;
                        value: _669.MsgUpdateWhiteListValidator;
                    };
                    updateCethReceiverAccount(value: _669.MsgUpdateCethReceiverAccount): {
                        typeUrl: string;
                        value: _669.MsgUpdateCethReceiverAccount;
                    };
                    rescueCeth(value: _669.MsgRescueCeth): {
                        typeUrl: string;
                        value: _669.MsgRescueCeth;
                    };
                    setBlacklist(value: _669.MsgSetBlacklist): {
                        typeUrl: string;
                        value: _669.MsgSetBlacklist;
                    };
                };
            };
            AminoConverter: {
                "/sifnode.ethbridge.v1.MsgLock": {
                    aminoType: string;
                    toAmino: ({ cosmosSender, amount, symbol, ethereumChainId, ethereumReceiver, cethAmount }: _669.MsgLock) => {
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
                    }) => _669.MsgLock;
                };
                "/sifnode.ethbridge.v1.MsgBurn": {
                    aminoType: string;
                    toAmino: ({ cosmosSender, amount, symbol, ethereumChainId, ethereumReceiver, cethAmount }: _669.MsgBurn) => {
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
                    }) => _669.MsgBurn;
                };
                "/sifnode.ethbridge.v1.MsgCreateEthBridgeClaim": {
                    aminoType: string;
                    toAmino: ({ ethBridgeClaim }: _669.MsgCreateEthBridgeClaim) => {
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
                    }) => _669.MsgCreateEthBridgeClaim;
                };
                "/sifnode.ethbridge.v1.MsgUpdateWhiteListValidator": {
                    aminoType: string;
                    toAmino: ({ cosmosSender, validator, operationType }: _669.MsgUpdateWhiteListValidator) => {
                        cosmos_sender: string;
                        validator: string;
                        operation_type: string;
                    };
                    fromAmino: ({ cosmos_sender, validator, operation_type }: {
                        cosmos_sender: string;
                        validator: string;
                        operation_type: string;
                    }) => _669.MsgUpdateWhiteListValidator;
                };
                "/sifnode.ethbridge.v1.MsgUpdateCethReceiverAccount": {
                    aminoType: string;
                    toAmino: ({ cosmosSender, cethReceiverAccount }: _669.MsgUpdateCethReceiverAccount) => {
                        cosmos_sender: string;
                        ceth_receiver_account: string;
                    };
                    fromAmino: ({ cosmos_sender, ceth_receiver_account }: {
                        cosmos_sender: string;
                        ceth_receiver_account: string;
                    }) => _669.MsgUpdateCethReceiverAccount;
                };
                "/sifnode.ethbridge.v1.MsgRescueCeth": {
                    aminoType: string;
                    toAmino: ({ cosmosSender, cosmosReceiver, cethAmount }: _669.MsgRescueCeth) => {
                        cosmos_sender: string;
                        cosmos_receiver: string;
                        ceth_amount: string;
                    };
                    fromAmino: ({ cosmos_sender, cosmos_receiver, ceth_amount }: {
                        cosmos_sender: string;
                        cosmos_receiver: string;
                        ceth_amount: string;
                    }) => _669.MsgRescueCeth;
                };
                "/sifnode.ethbridge.v1.MsgSetBlacklist": {
                    aminoType: string;
                    toAmino: ({ from, addresses }: _669.MsgSetBlacklist) => {
                        from: string;
                        addresses: string[];
                    };
                    fromAmino: ({ from, addresses }: {
                        from: string;
                        addresses: string[];
                    }) => _669.MsgSetBlacklist;
                };
            };
            claimTypeFromJSON(object: any): _670.ClaimType;
            claimTypeToJSON(object: _670.ClaimType): string;
            ClaimType: typeof _670.ClaimType;
            EthBridgeClaim: {
                encode(message: _670.EthBridgeClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _670.EthBridgeClaim;
                fromJSON(object: any): _670.EthBridgeClaim;
                toJSON(message: _670.EthBridgeClaim): unknown;
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
                    claimType?: _670.ClaimType;
                }): _670.EthBridgeClaim;
            };
            PeggyTokens: {
                encode(message: _670.PeggyTokens, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _670.PeggyTokens;
                fromJSON(object: any): _670.PeggyTokens;
                toJSON(message: _670.PeggyTokens): unknown;
                fromPartial(object: {
                    tokens?: string[];
                }): _670.PeggyTokens;
            };
            GenesisState: {
                encode(message: _670.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _670.GenesisState;
                fromJSON(object: any): _670.GenesisState;
                toJSON(message: _670.GenesisState): unknown;
                fromPartial(object: {
                    cethReceiveAccount?: string;
                    peggyTokens?: string[];
                }): _670.GenesisState;
            };
            MsgLock: {
                encode(message: _669.MsgLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _669.MsgLock;
                fromJSON(object: any): _669.MsgLock;
                toJSON(message: _669.MsgLock): unknown;
                fromPartial(object: {
                    cosmosSender?: string;
                    amount?: string;
                    symbol?: string;
                    ethereumChainId?: any;
                    ethereumReceiver?: string;
                    cethAmount?: string;
                }): _669.MsgLock;
            };
            MsgLockResponse: {
                encode(_: _669.MsgLockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _669.MsgLockResponse;
                fromJSON(_: any): _669.MsgLockResponse;
                toJSON(_: _669.MsgLockResponse): unknown;
                fromPartial(_: {}): _669.MsgLockResponse;
            };
            MsgBurn: {
                encode(message: _669.MsgBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _669.MsgBurn;
                fromJSON(object: any): _669.MsgBurn;
                toJSON(message: _669.MsgBurn): unknown;
                fromPartial(object: {
                    cosmosSender?: string;
                    amount?: string;
                    symbol?: string;
                    ethereumChainId?: any;
                    ethereumReceiver?: string;
                    cethAmount?: string;
                }): _669.MsgBurn;
            };
            MsgBurnResponse: {
                encode(_: _669.MsgBurnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _669.MsgBurnResponse;
                fromJSON(_: any): _669.MsgBurnResponse;
                toJSON(_: _669.MsgBurnResponse): unknown;
                fromPartial(_: {}): _669.MsgBurnResponse;
            };
            MsgCreateEthBridgeClaim: {
                encode(message: _669.MsgCreateEthBridgeClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _669.MsgCreateEthBridgeClaim;
                fromJSON(object: any): _669.MsgCreateEthBridgeClaim;
                toJSON(message: _669.MsgCreateEthBridgeClaim): unknown;
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
                        claimType?: _670.ClaimType;
                    };
                }): _669.MsgCreateEthBridgeClaim;
            };
            MsgCreateEthBridgeClaimResponse: {
                encode(_: _669.MsgCreateEthBridgeClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _669.MsgCreateEthBridgeClaimResponse;
                fromJSON(_: any): _669.MsgCreateEthBridgeClaimResponse;
                toJSON(_: _669.MsgCreateEthBridgeClaimResponse): unknown;
                fromPartial(_: {}): _669.MsgCreateEthBridgeClaimResponse;
            };
            MsgUpdateWhiteListValidator: {
                encode(message: _669.MsgUpdateWhiteListValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _669.MsgUpdateWhiteListValidator;
                fromJSON(object: any): _669.MsgUpdateWhiteListValidator;
                toJSON(message: _669.MsgUpdateWhiteListValidator): unknown;
                fromPartial(object: {
                    cosmosSender?: string;
                    validator?: string;
                    operationType?: string;
                }): _669.MsgUpdateWhiteListValidator;
            };
            MsgUpdateWhiteListValidatorResponse: {
                encode(_: _669.MsgUpdateWhiteListValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _669.MsgUpdateWhiteListValidatorResponse;
                fromJSON(_: any): _669.MsgUpdateWhiteListValidatorResponse;
                toJSON(_: _669.MsgUpdateWhiteListValidatorResponse): unknown;
                fromPartial(_: {}): _669.MsgUpdateWhiteListValidatorResponse;
            };
            MsgUpdateCethReceiverAccount: {
                encode(message: _669.MsgUpdateCethReceiverAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _669.MsgUpdateCethReceiverAccount;
                fromJSON(object: any): _669.MsgUpdateCethReceiverAccount;
                toJSON(message: _669.MsgUpdateCethReceiverAccount): unknown;
                fromPartial(object: {
                    cosmosSender?: string;
                    cethReceiverAccount?: string;
                }): _669.MsgUpdateCethReceiverAccount;
            };
            MsgUpdateCethReceiverAccountResponse: {
                encode(_: _669.MsgUpdateCethReceiverAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _669.MsgUpdateCethReceiverAccountResponse;
                fromJSON(_: any): _669.MsgUpdateCethReceiverAccountResponse;
                toJSON(_: _669.MsgUpdateCethReceiverAccountResponse): unknown;
                fromPartial(_: {}): _669.MsgUpdateCethReceiverAccountResponse;
            };
            MsgRescueCeth: {
                encode(message: _669.MsgRescueCeth, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _669.MsgRescueCeth;
                fromJSON(object: any): _669.MsgRescueCeth;
                toJSON(message: _669.MsgRescueCeth): unknown;
                fromPartial(object: {
                    cosmosSender?: string;
                    cosmosReceiver?: string;
                    cethAmount?: string;
                }): _669.MsgRescueCeth;
            };
            MsgRescueCethResponse: {
                encode(_: _669.MsgRescueCethResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _669.MsgRescueCethResponse;
                fromJSON(_: any): _669.MsgRescueCethResponse;
                toJSON(_: _669.MsgRescueCethResponse): unknown;
                fromPartial(_: {}): _669.MsgRescueCethResponse;
            };
            MsgSetBlacklist: {
                encode(message: _669.MsgSetBlacklist, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _669.MsgSetBlacklist;
                fromJSON(object: any): _669.MsgSetBlacklist;
                toJSON(message: _669.MsgSetBlacklist): unknown;
                fromPartial(object: {
                    from?: string;
                    addresses?: string[];
                }): _669.MsgSetBlacklist;
            };
            MsgSetBlacklistResponse: {
                encode(_: _669.MsgSetBlacklistResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _669.MsgSetBlacklistResponse;
                fromJSON(_: any): _669.MsgSetBlacklistResponse;
                toJSON(_: _669.MsgSetBlacklistResponse): unknown;
                fromPartial(_: {}): _669.MsgSetBlacklistResponse;
            };
            QueryEthProphecyRequest: {
                encode(message: _668.QueryEthProphecyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _668.QueryEthProphecyRequest;
                fromJSON(object: any): _668.QueryEthProphecyRequest;
                toJSON(message: _668.QueryEthProphecyRequest): unknown;
                fromPartial(object: {
                    ethereumChainId?: any;
                    bridgeContractAddress?: string;
                    nonce?: any;
                    symbol?: string;
                    tokenContractAddress?: string;
                    ethereumSender?: string;
                }): _668.QueryEthProphecyRequest;
            };
            QueryEthProphecyResponse: {
                encode(message: _668.QueryEthProphecyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _668.QueryEthProphecyResponse;
                fromJSON(object: any): _668.QueryEthProphecyResponse;
                toJSON(message: _668.QueryEthProphecyResponse): unknown;
                fromPartial(object: {
                    id?: string;
                    status?: {
                        text?: _674.StatusText;
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
                        claimType?: _670.ClaimType;
                    }[];
                }): _668.QueryEthProphecyResponse;
            };
            QueryBlacklistRequest: {
                encode(_: _668.QueryBlacklistRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _668.QueryBlacklistRequest;
                fromJSON(_: any): _668.QueryBlacklistRequest;
                toJSON(_: _668.QueryBlacklistRequest): unknown;
                fromPartial(_: {}): _668.QueryBlacklistRequest;
            };
            QueryBlacklistResponse: {
                encode(message: _668.QueryBlacklistResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _668.QueryBlacklistResponse;
                fromJSON(object: any): _668.QueryBlacklistResponse;
                toJSON(message: _668.QueryBlacklistResponse): unknown;
                fromPartial(object: {
                    addresses?: string[];
                }): _668.QueryBlacklistResponse;
            };
        };
    }
    namespace margin {
        const v1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    open(value: _672.MsgOpen): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    close(value: _672.MsgClose): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    forceClose(value: _672.MsgForceClose): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _672.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updatePools(value: _672.MsgUpdatePools): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    whitelist(value: _672.MsgWhitelist): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    dewhitelist(value: _672.MsgDewhitelist): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    open(value: _672.MsgOpen): {
                        typeUrl: string;
                        value: _672.MsgOpen;
                    };
                    close(value: _672.MsgClose): {
                        typeUrl: string;
                        value: _672.MsgClose;
                    };
                    forceClose(value: _672.MsgForceClose): {
                        typeUrl: string;
                        value: _672.MsgForceClose;
                    };
                    updateParams(value: _672.MsgUpdateParams): {
                        typeUrl: string;
                        value: _672.MsgUpdateParams;
                    };
                    updatePools(value: _672.MsgUpdatePools): {
                        typeUrl: string;
                        value: _672.MsgUpdatePools;
                    };
                    whitelist(value: _672.MsgWhitelist): {
                        typeUrl: string;
                        value: _672.MsgWhitelist;
                    };
                    dewhitelist(value: _672.MsgDewhitelist): {
                        typeUrl: string;
                        value: _672.MsgDewhitelist;
                    };
                };
                toJSON: {
                    open(value: _672.MsgOpen): {
                        typeUrl: string;
                        value: unknown;
                    };
                    close(value: _672.MsgClose): {
                        typeUrl: string;
                        value: unknown;
                    };
                    forceClose(value: _672.MsgForceClose): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateParams(value: _672.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updatePools(value: _672.MsgUpdatePools): {
                        typeUrl: string;
                        value: unknown;
                    };
                    whitelist(value: _672.MsgWhitelist): {
                        typeUrl: string;
                        value: unknown;
                    };
                    dewhitelist(value: _672.MsgDewhitelist): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    open(value: any): {
                        typeUrl: string;
                        value: _672.MsgOpen;
                    };
                    close(value: any): {
                        typeUrl: string;
                        value: _672.MsgClose;
                    };
                    forceClose(value: any): {
                        typeUrl: string;
                        value: _672.MsgForceClose;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _672.MsgUpdateParams;
                    };
                    updatePools(value: any): {
                        typeUrl: string;
                        value: _672.MsgUpdatePools;
                    };
                    whitelist(value: any): {
                        typeUrl: string;
                        value: _672.MsgWhitelist;
                    };
                    dewhitelist(value: any): {
                        typeUrl: string;
                        value: _672.MsgDewhitelist;
                    };
                };
                fromPartial: {
                    open(value: _672.MsgOpen): {
                        typeUrl: string;
                        value: _672.MsgOpen;
                    };
                    close(value: _672.MsgClose): {
                        typeUrl: string;
                        value: _672.MsgClose;
                    };
                    forceClose(value: _672.MsgForceClose): {
                        typeUrl: string;
                        value: _672.MsgForceClose;
                    };
                    updateParams(value: _672.MsgUpdateParams): {
                        typeUrl: string;
                        value: _672.MsgUpdateParams;
                    };
                    updatePools(value: _672.MsgUpdatePools): {
                        typeUrl: string;
                        value: _672.MsgUpdatePools;
                    };
                    whitelist(value: _672.MsgWhitelist): {
                        typeUrl: string;
                        value: _672.MsgWhitelist;
                    };
                    dewhitelist(value: _672.MsgDewhitelist): {
                        typeUrl: string;
                        value: _672.MsgDewhitelist;
                    };
                };
            };
            AminoConverter: {
                "/sifnode.margin.v1.MsgOpen": {
                    aminoType: string;
                    toAmino: ({ signer, collateralAsset, collateralAmount, borrowAsset, position, leverage }: _672.MsgOpen) => {
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
                    }) => _672.MsgOpen;
                };
                "/sifnode.margin.v1.MsgClose": {
                    aminoType: string;
                    toAmino: ({ signer, id }: _672.MsgClose) => {
                        signer: string;
                        id: string;
                    };
                    fromAmino: ({ signer, id }: {
                        signer: string;
                        id: string;
                    }) => _672.MsgClose;
                };
                "/sifnode.margin.v1.MsgForceClose": {
                    aminoType: string;
                    toAmino: ({ signer, mtpAddress, id }: _672.MsgForceClose) => {
                        signer: string;
                        mtp_address: string;
                        id: string;
                    };
                    fromAmino: ({ signer, mtp_address, id }: {
                        signer: string;
                        mtp_address: string;
                        id: string;
                    }) => _672.MsgForceClose;
                };
                "/sifnode.margin.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ signer, params }: _672.MsgUpdateParams) => {
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
                    }) => _672.MsgUpdateParams;
                };
                "/sifnode.margin.v1.MsgUpdatePools": {
                    aminoType: string;
                    toAmino: ({ signer, pools, closedPools }: _672.MsgUpdatePools) => {
                        signer: string;
                        pools: string[];
                        closed_pools: string[];
                    };
                    fromAmino: ({ signer, pools, closed_pools }: {
                        signer: string;
                        pools: string[];
                        closed_pools: string[];
                    }) => _672.MsgUpdatePools;
                };
                "/sifnode.margin.v1.MsgWhitelist": {
                    aminoType: string;
                    toAmino: ({ signer, whitelistedAddress }: _672.MsgWhitelist) => {
                        signer: string;
                        whitelisted_address: string;
                    };
                    fromAmino: ({ signer, whitelisted_address }: {
                        signer: string;
                        whitelisted_address: string;
                    }) => _672.MsgWhitelist;
                };
                "/sifnode.margin.v1.MsgDewhitelist": {
                    aminoType: string;
                    toAmino: ({ signer, whitelistedAddress }: _672.MsgDewhitelist) => {
                        signer: string;
                        whitelisted_address: string;
                    };
                    fromAmino: ({ signer, whitelisted_address }: {
                        signer: string;
                        whitelisted_address: string;
                    }) => _672.MsgDewhitelist;
                };
            };
            positionFromJSON(object: any): _673.Position;
            positionToJSON(object: _673.Position): string;
            Position: typeof _673.Position;
            GenesisState: {
                encode(message: _673.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _673.GenesisState;
                fromJSON(object: any): _673.GenesisState;
                toJSON(message: _673.GenesisState): unknown;
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
                }): _673.GenesisState;
            };
            Params: {
                encode(message: _673.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _673.Params;
                fromJSON(object: any): _673.Params;
                toJSON(message: _673.Params): unknown;
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
                }): _673.Params;
            };
            MTP: {
                encode(message: _673.MTP, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _673.MTP;
                fromJSON(object: any): _673.MTP;
                toJSON(message: _673.MTP): unknown;
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
                    position?: _673.Position;
                    id?: any;
                }): _673.MTP;
            };
            MsgOpen: {
                encode(message: _672.MsgOpen, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _672.MsgOpen;
                fromJSON(object: any): _672.MsgOpen;
                toJSON(message: _672.MsgOpen): unknown;
                fromPartial(object: {
                    signer?: string;
                    collateralAsset?: string;
                    collateralAmount?: string;
                    borrowAsset?: string;
                    position?: _673.Position;
                    leverage?: string;
                }): _672.MsgOpen;
            };
            MsgOpenResponse: {
                encode(_: _672.MsgOpenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _672.MsgOpenResponse;
                fromJSON(_: any): _672.MsgOpenResponse;
                toJSON(_: _672.MsgOpenResponse): unknown;
                fromPartial(_: {}): _672.MsgOpenResponse;
            };
            MsgClose: {
                encode(message: _672.MsgClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _672.MsgClose;
                fromJSON(object: any): _672.MsgClose;
                toJSON(message: _672.MsgClose): unknown;
                fromPartial(object: {
                    signer?: string;
                    id?: any;
                }): _672.MsgClose;
            };
            MsgCloseResponse: {
                encode(_: _672.MsgCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _672.MsgCloseResponse;
                fromJSON(_: any): _672.MsgCloseResponse;
                toJSON(_: _672.MsgCloseResponse): unknown;
                fromPartial(_: {}): _672.MsgCloseResponse;
            };
            MsgForceClose: {
                encode(message: _672.MsgForceClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _672.MsgForceClose;
                fromJSON(object: any): _672.MsgForceClose;
                toJSON(message: _672.MsgForceClose): unknown;
                fromPartial(object: {
                    signer?: string;
                    mtpAddress?: string;
                    id?: any;
                }): _672.MsgForceClose;
            };
            MsgForceCloseResponse: {
                encode(_: _672.MsgForceCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _672.MsgForceCloseResponse;
                fromJSON(_: any): _672.MsgForceCloseResponse;
                toJSON(_: _672.MsgForceCloseResponse): unknown;
                fromPartial(_: {}): _672.MsgForceCloseResponse;
            };
            MsgUpdateParams: {
                encode(message: _672.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _672.MsgUpdateParams;
                fromJSON(object: any): _672.MsgUpdateParams;
                toJSON(message: _672.MsgUpdateParams): unknown;
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
                }): _672.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _672.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _672.MsgUpdateParamsResponse;
                fromJSON(_: any): _672.MsgUpdateParamsResponse;
                toJSON(_: _672.MsgUpdateParamsResponse): unknown;
                fromPartial(_: {}): _672.MsgUpdateParamsResponse;
            };
            MsgUpdatePools: {
                encode(message: _672.MsgUpdatePools, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _672.MsgUpdatePools;
                fromJSON(object: any): _672.MsgUpdatePools;
                toJSON(message: _672.MsgUpdatePools): unknown;
                fromPartial(object: {
                    signer?: string;
                    pools?: string[];
                    closedPools?: string[];
                }): _672.MsgUpdatePools;
            };
            MsgUpdatePoolsResponse: {
                encode(_: _672.MsgUpdatePoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _672.MsgUpdatePoolsResponse;
                fromJSON(_: any): _672.MsgUpdatePoolsResponse;
                toJSON(_: _672.MsgUpdatePoolsResponse): unknown;
                fromPartial(_: {}): _672.MsgUpdatePoolsResponse;
            };
            MsgWhitelist: {
                encode(message: _672.MsgWhitelist, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _672.MsgWhitelist;
                fromJSON(object: any): _672.MsgWhitelist;
                toJSON(message: _672.MsgWhitelist): unknown;
                fromPartial(object: {
                    signer?: string;
                    whitelistedAddress?: string;
                }): _672.MsgWhitelist;
            };
            MsgWhitelistResponse: {
                encode(_: _672.MsgWhitelistResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _672.MsgWhitelistResponse;
                fromJSON(_: any): _672.MsgWhitelistResponse;
                toJSON(_: _672.MsgWhitelistResponse): unknown;
                fromPartial(_: {}): _672.MsgWhitelistResponse;
            };
            MsgDewhitelist: {
                encode(message: _672.MsgDewhitelist, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _672.MsgDewhitelist;
                fromJSON(object: any): _672.MsgDewhitelist;
                toJSON(message: _672.MsgDewhitelist): unknown;
                fromPartial(object: {
                    signer?: string;
                    whitelistedAddress?: string;
                }): _672.MsgDewhitelist;
            };
            MsgDewhitelistResponse: {
                encode(_: _672.MsgDewhitelistResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _672.MsgDewhitelistResponse;
                fromJSON(_: any): _672.MsgDewhitelistResponse;
                toJSON(_: _672.MsgDewhitelistResponse): unknown;
                fromPartial(_: {}): _672.MsgDewhitelistResponse;
            };
            MTPRequest: {
                encode(message: _671.MTPRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _671.MTPRequest;
                fromJSON(object: any): _671.MTPRequest;
                toJSON(message: _671.MTPRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    id?: any;
                }): _671.MTPRequest;
            };
            MTPResponse: {
                encode(message: _671.MTPResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _671.MTPResponse;
                fromJSON(object: any): _671.MTPResponse;
                toJSON(message: _671.MTPResponse): unknown;
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
                        position?: _673.Position;
                        id?: any;
                    };
                }): _671.MTPResponse;
            };
            PositionsForAddressRequest: {
                encode(message: _671.PositionsForAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _671.PositionsForAddressRequest;
                fromJSON(object: any): _671.PositionsForAddressRequest;
                toJSON(message: _671.PositionsForAddressRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _671.PositionsForAddressRequest;
            };
            PositionsForAddressResponse: {
                encode(message: _671.PositionsForAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _671.PositionsForAddressResponse;
                fromJSON(object: any): _671.PositionsForAddressResponse;
                toJSON(message: _671.PositionsForAddressResponse): unknown;
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
                        position?: _673.Position;
                        id?: any;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _671.PositionsForAddressResponse;
            };
            PositionsByPoolRequest: {
                encode(message: _671.PositionsByPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _671.PositionsByPoolRequest;
                fromJSON(object: any): _671.PositionsByPoolRequest;
                toJSON(message: _671.PositionsByPoolRequest): unknown;
                fromPartial(object: {
                    asset?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _671.PositionsByPoolRequest;
            };
            PositionsByPoolResponse: {
                encode(message: _671.PositionsByPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _671.PositionsByPoolResponse;
                fromJSON(object: any): _671.PositionsByPoolResponse;
                toJSON(message: _671.PositionsByPoolResponse): unknown;
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
                        position?: _673.Position;
                        id?: any;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _671.PositionsByPoolResponse;
            };
            PositionsRequest: {
                encode(message: _671.PositionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _671.PositionsRequest;
                fromJSON(object: any): _671.PositionsRequest;
                toJSON(message: _671.PositionsRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _671.PositionsRequest;
            };
            PositionsResponse: {
                encode(message: _671.PositionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _671.PositionsResponse;
                fromJSON(object: any): _671.PositionsResponse;
                toJSON(message: _671.PositionsResponse): unknown;
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
                        position?: _673.Position;
                        id?: any;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _671.PositionsResponse;
            };
            ParamsRequest: {
                encode(_: _671.ParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _671.ParamsRequest;
                fromJSON(_: any): _671.ParamsRequest;
                toJSON(_: _671.ParamsRequest): unknown;
                fromPartial(_: {}): _671.ParamsRequest;
            };
            ParamsResponse: {
                encode(message: _671.ParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _671.ParamsResponse;
                fromJSON(object: any): _671.ParamsResponse;
                toJSON(message: _671.ParamsResponse): unknown;
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
                }): _671.ParamsResponse;
            };
            StatusRequest: {
                encode(_: _671.StatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _671.StatusRequest;
                fromJSON(_: any): _671.StatusRequest;
                toJSON(_: _671.StatusRequest): unknown;
                fromPartial(_: {}): _671.StatusRequest;
            };
            StatusResponse: {
                encode(message: _671.StatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _671.StatusResponse;
                fromJSON(object: any): _671.StatusResponse;
                toJSON(message: _671.StatusResponse): unknown;
                fromPartial(object: {
                    openMtpCount?: any;
                    lifetimeMtpCount?: any;
                }): _671.StatusResponse;
            };
            WhitelistRequest: {
                encode(message: _671.WhitelistRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _671.WhitelistRequest;
                fromJSON(object: any): _671.WhitelistRequest;
                toJSON(message: _671.WhitelistRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _671.WhitelistRequest;
            };
            WhitelistResponse: {
                encode(message: _671.WhitelistResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _671.WhitelistResponse;
                fromJSON(object: any): _671.WhitelistResponse;
                toJSON(message: _671.WhitelistResponse): unknown;
                fromPartial(object: {
                    whitelist?: string[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _671.WhitelistResponse;
            };
            GetSQParamsRequest: {
                encode(message: _671.GetSQParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _671.GetSQParamsRequest;
                fromJSON(object: any): _671.GetSQParamsRequest;
                toJSON(message: _671.GetSQParamsRequest): unknown;
                fromPartial(object: {
                    pool?: string;
                }): _671.GetSQParamsRequest;
            };
            GetSQParamsResponse: {
                encode(message: _671.GetSQParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _671.GetSQParamsResponse;
                fromJSON(object: any): _671.GetSQParamsResponse;
                toJSON(message: _671.GetSQParamsResponse): unknown;
                fromPartial(object: {
                    beginBlock?: any;
                }): _671.GetSQParamsResponse;
            };
            IsWhitelistedRequest: {
                encode(message: _671.IsWhitelistedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _671.IsWhitelistedRequest;
                fromJSON(object: any): _671.IsWhitelistedRequest;
                toJSON(message: _671.IsWhitelistedRequest): unknown;
                fromPartial(object: {
                    address?: string;
                }): _671.IsWhitelistedRequest;
            };
            IsWhitelistedResponse: {
                encode(message: _671.IsWhitelistedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _671.IsWhitelistedResponse;
                fromJSON(object: any): _671.IsWhitelistedResponse;
                toJSON(message: _671.IsWhitelistedResponse): unknown;
                fromPartial(object: {
                    address?: string;
                    isWhitelisted?: boolean;
                }): _671.IsWhitelistedResponse;
            };
        };
    }
    namespace oracle {
        const v1: {
            statusTextFromJSON(object: any): _674.StatusText;
            statusTextToJSON(object: _674.StatusText): string;
            StatusText: typeof _674.StatusText;
            GenesisState: {
                encode(message: _674.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _674.GenesisState;
                fromJSON(object: any): _674.GenesisState;
                toJSON(message: _674.GenesisState): unknown;
                fromPartial(object: {
                    addressWhitelist?: string[];
                    adminAddress?: string;
                    prophecies?: {
                        id?: string;
                        status?: {
                            text?: _674.StatusText;
                            finalClaim?: string;
                        };
                        claimValidators?: Uint8Array;
                        validatorClaims?: Uint8Array;
                    }[];
                }): _674.GenesisState;
            };
            Claim: {
                encode(message: _674.Claim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _674.Claim;
                fromJSON(object: any): _674.Claim;
                toJSON(message: _674.Claim): unknown;
                fromPartial(object: {
                    id?: string;
                    validatorAddress?: string;
                    content?: string;
                }): _674.Claim;
            };
            DBProphecy: {
                encode(message: _674.DBProphecy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _674.DBProphecy;
                fromJSON(object: any): _674.DBProphecy;
                toJSON(message: _674.DBProphecy): unknown;
                fromPartial(object: {
                    id?: string;
                    status?: {
                        text?: _674.StatusText;
                        finalClaim?: string;
                    };
                    claimValidators?: Uint8Array;
                    validatorClaims?: Uint8Array;
                }): _674.DBProphecy;
            };
            Status: {
                encode(message: _674.Status, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _674.Status;
                fromJSON(object: any): _674.Status;
                toJSON(message: _674.Status): unknown;
                fromPartial(object: {
                    text?: _674.StatusText;
                    finalClaim?: string;
                }): _674.Status;
            };
        };
    }
    namespace tokenregistry {
        const v1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    register(value: _676.MsgRegister): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deregister(value: _676.MsgDeregister): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setRegistry(value: _676.MsgSetRegistry): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    register(value: _676.MsgRegister): {
                        typeUrl: string;
                        value: _676.MsgRegister;
                    };
                    deregister(value: _676.MsgDeregister): {
                        typeUrl: string;
                        value: _676.MsgDeregister;
                    };
                    setRegistry(value: _676.MsgSetRegistry): {
                        typeUrl: string;
                        value: _676.MsgSetRegistry;
                    };
                };
                toJSON: {
                    register(value: _676.MsgRegister): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deregister(value: _676.MsgDeregister): {
                        typeUrl: string;
                        value: unknown;
                    };
                    setRegistry(value: _676.MsgSetRegistry): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    register(value: any): {
                        typeUrl: string;
                        value: _676.MsgRegister;
                    };
                    deregister(value: any): {
                        typeUrl: string;
                        value: _676.MsgDeregister;
                    };
                    setRegistry(value: any): {
                        typeUrl: string;
                        value: _676.MsgSetRegistry;
                    };
                };
                fromPartial: {
                    register(value: _676.MsgRegister): {
                        typeUrl: string;
                        value: _676.MsgRegister;
                    };
                    deregister(value: _676.MsgDeregister): {
                        typeUrl: string;
                        value: _676.MsgDeregister;
                    };
                    setRegistry(value: _676.MsgSetRegistry): {
                        typeUrl: string;
                        value: _676.MsgSetRegistry;
                    };
                };
            };
            AminoConverter: {
                "/sifnode.tokenregistry.v1.MsgRegister": {
                    aminoType: string;
                    toAmino: ({ from, entry }: _676.MsgRegister) => {
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
                    }) => _676.MsgRegister;
                };
                "/sifnode.tokenregistry.v1.MsgDeregister": {
                    aminoType: string;
                    toAmino: ({ from, denom }: _676.MsgDeregister) => {
                        from: string;
                        denom: string;
                    };
                    fromAmino: ({ from, denom }: {
                        from: string;
                        denom: string;
                    }) => _676.MsgDeregister;
                };
                "/sifnode.tokenregistry.v1.MsgSetRegistry": {
                    aminoType: string;
                    toAmino: ({ from, registry }: _676.MsgSetRegistry) => {
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
                    }) => _676.MsgSetRegistry;
                };
            };
            permissionFromJSON(object: any): _677.Permission;
            permissionToJSON(object: _677.Permission): string;
            Permission: typeof _677.Permission;
            GenesisState: {
                encode(message: _677.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _677.GenesisState;
                fromJSON(object: any): _677.GenesisState;
                toJSON(message: _677.GenesisState): unknown;
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
                            permissions?: _677.Permission[];
                            unitDenom?: string;
                            ibcCounterpartyDenom?: string;
                            ibcCounterpartyChainId?: string;
                        }[];
                    };
                }): _677.GenesisState;
            };
            Registry: {
                encode(message: _677.Registry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _677.Registry;
                fromJSON(object: any): _677.Registry;
                toJSON(message: _677.Registry): unknown;
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
                        permissions?: _677.Permission[];
                        unitDenom?: string;
                        ibcCounterpartyDenom?: string;
                        ibcCounterpartyChainId?: string;
                    }[];
                }): _677.Registry;
            };
            RegistryEntry: {
                encode(message: _677.RegistryEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _677.RegistryEntry;
                fromJSON(object: any): _677.RegistryEntry;
                toJSON(message: _677.RegistryEntry): unknown;
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
                    permissions?: _677.Permission[];
                    unitDenom?: string;
                    ibcCounterpartyDenom?: string;
                    ibcCounterpartyChainId?: string;
                }): _677.RegistryEntry;
            };
            MsgRegister: {
                encode(message: _676.MsgRegister, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _676.MsgRegister;
                fromJSON(object: any): _676.MsgRegister;
                toJSON(message: _676.MsgRegister): unknown;
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
                        permissions?: _677.Permission[];
                        unitDenom?: string;
                        ibcCounterpartyDenom?: string;
                        ibcCounterpartyChainId?: string;
                    };
                }): _676.MsgRegister;
            };
            MsgRegisterResponse: {
                encode(_: _676.MsgRegisterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _676.MsgRegisterResponse;
                fromJSON(_: any): _676.MsgRegisterResponse;
                toJSON(_: _676.MsgRegisterResponse): unknown;
                fromPartial(_: {}): _676.MsgRegisterResponse;
            };
            MsgSetRegistry: {
                encode(message: _676.MsgSetRegistry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _676.MsgSetRegistry;
                fromJSON(object: any): _676.MsgSetRegistry;
                toJSON(message: _676.MsgSetRegistry): unknown;
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
                            permissions?: _677.Permission[];
                            unitDenom?: string;
                            ibcCounterpartyDenom?: string;
                            ibcCounterpartyChainId?: string;
                        }[];
                    };
                }): _676.MsgSetRegistry;
            };
            MsgSetRegistryResponse: {
                encode(_: _676.MsgSetRegistryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _676.MsgSetRegistryResponse;
                fromJSON(_: any): _676.MsgSetRegistryResponse;
                toJSON(_: _676.MsgSetRegistryResponse): unknown;
                fromPartial(_: {}): _676.MsgSetRegistryResponse;
            };
            MsgDeregister: {
                encode(message: _676.MsgDeregister, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _676.MsgDeregister;
                fromJSON(object: any): _676.MsgDeregister;
                toJSON(message: _676.MsgDeregister): unknown;
                fromPartial(object: {
                    from?: string;
                    denom?: string;
                }): _676.MsgDeregister;
            };
            MsgDeregisterResponse: {
                encode(_: _676.MsgDeregisterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _676.MsgDeregisterResponse;
                fromJSON(_: any): _676.MsgDeregisterResponse;
                toJSON(_: _676.MsgDeregisterResponse): unknown;
                fromPartial(_: {}): _676.MsgDeregisterResponse;
            };
            QueryEntriesResponse: {
                encode(message: _675.QueryEntriesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _675.QueryEntriesResponse;
                fromJSON(object: any): _675.QueryEntriesResponse;
                toJSON(message: _675.QueryEntriesResponse): unknown;
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
                            permissions?: _677.Permission[];
                            unitDenom?: string;
                            ibcCounterpartyDenom?: string;
                            ibcCounterpartyChainId?: string;
                        }[];
                    };
                }): _675.QueryEntriesResponse;
            };
            QueryEntriesRequest: {
                encode(_: _675.QueryEntriesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _675.QueryEntriesRequest;
                fromJSON(_: any): _675.QueryEntriesRequest;
                toJSON(_: _675.QueryEntriesRequest): unknown;
                fromPartial(_: {}): _675.QueryEntriesRequest;
            };
        };
    }
}
