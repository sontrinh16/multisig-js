import * as _724 from "./admin/v1/query";
import * as _725 from "./admin/v1/tx";
import * as _726 from "./admin/v1/types";
import * as _727 from "./clp/v1/genesis";
import * as _728 from "./clp/v1/params";
import * as _729 from "./clp/v1/pool";
import * as _730 from "./clp/v1/querier";
import * as _731 from "./clp/v1/tx";
import * as _732 from "./clp/v1/types";
import * as _733 from "./dispensation/v1/query";
import * as _734 from "./dispensation/v1/tx";
import * as _735 from "./dispensation/v1/types";
import * as _736 from "./ethbridge/v1/query";
import * as _737 from "./ethbridge/v1/tx";
import * as _738 from "./ethbridge/v1/types";
import * as _739 from "./margin/v1/query";
import * as _740 from "./margin/v1/tx";
import * as _741 from "./margin/v1/types";
import * as _742 from "./oracle/v1/types";
import * as _743 from "./tokenregistry/v1/query";
import * as _744 from "./tokenregistry/v1/tx";
import * as _745 from "./tokenregistry/v1/types";
export declare namespace sifnode {
    namespace admin {
        const v1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    addAccount(value: _725.MsgAddAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removeAccount(value: _725.MsgRemoveAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    addAccount(value: _725.MsgAddAccount): {
                        typeUrl: string;
                        value: _725.MsgAddAccount;
                    };
                    removeAccount(value: _725.MsgRemoveAccount): {
                        typeUrl: string;
                        value: _725.MsgRemoveAccount;
                    };
                };
                toJSON: {
                    addAccount(value: _725.MsgAddAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    removeAccount(value: _725.MsgRemoveAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    addAccount(value: any): {
                        typeUrl: string;
                        value: _725.MsgAddAccount;
                    };
                    removeAccount(value: any): {
                        typeUrl: string;
                        value: _725.MsgRemoveAccount;
                    };
                };
                fromPartial: {
                    addAccount(value: _725.MsgAddAccount): {
                        typeUrl: string;
                        value: _725.MsgAddAccount;
                    };
                    removeAccount(value: _725.MsgRemoveAccount): {
                        typeUrl: string;
                        value: _725.MsgRemoveAccount;
                    };
                };
            };
            AminoConverter: {
                "/sifnode.admin.v1.MsgAddAccount": {
                    aminoType: string;
                    toAmino: ({ signer, account }: _725.MsgAddAccount) => {
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
                    }) => _725.MsgAddAccount;
                };
                "/sifnode.admin.v1.MsgRemoveAccount": {
                    aminoType: string;
                    toAmino: ({ signer, account }: _725.MsgRemoveAccount) => {
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
                    }) => _725.MsgRemoveAccount;
                };
            };
            adminTypeFromJSON(object: any): _726.AdminType;
            adminTypeToJSON(object: _726.AdminType): string;
            AdminType: typeof _726.AdminType;
            GenesisState: {
                encode(message: _726.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _726.GenesisState;
                fromJSON(object: any): _726.GenesisState;
                toJSON(message: _726.GenesisState): unknown;
                fromPartial(object: {
                    adminAccounts?: {
                        adminType?: _726.AdminType;
                        adminAddress?: string;
                    }[];
                }): _726.GenesisState;
            };
            AdminAccount: {
                encode(message: _726.AdminAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _726.AdminAccount;
                fromJSON(object: any): _726.AdminAccount;
                toJSON(message: _726.AdminAccount): unknown;
                fromPartial(object: {
                    adminType?: _726.AdminType;
                    adminAddress?: string;
                }): _726.AdminAccount;
            };
            MsgAddAccount: {
                encode(message: _725.MsgAddAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _725.MsgAddAccount;
                fromJSON(object: any): _725.MsgAddAccount;
                toJSON(message: _725.MsgAddAccount): unknown;
                fromPartial(object: {
                    signer?: string;
                    account?: {
                        adminType?: _726.AdminType;
                        adminAddress?: string;
                    };
                }): _725.MsgAddAccount;
            };
            MsgAddAccountResponse: {
                encode(_: _725.MsgAddAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _725.MsgAddAccountResponse;
                fromJSON(_: any): _725.MsgAddAccountResponse;
                toJSON(_: _725.MsgAddAccountResponse): unknown;
                fromPartial(_: {}): _725.MsgAddAccountResponse;
            };
            MsgRemoveAccount: {
                encode(message: _725.MsgRemoveAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _725.MsgRemoveAccount;
                fromJSON(object: any): _725.MsgRemoveAccount;
                toJSON(message: _725.MsgRemoveAccount): unknown;
                fromPartial(object: {
                    signer?: string;
                    account?: {
                        adminType?: _726.AdminType;
                        adminAddress?: string;
                    };
                }): _725.MsgRemoveAccount;
            };
            MsgRemoveAccountResponse: {
                encode(_: _725.MsgRemoveAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _725.MsgRemoveAccountResponse;
                fromJSON(_: any): _725.MsgRemoveAccountResponse;
                toJSON(_: _725.MsgRemoveAccountResponse): unknown;
                fromPartial(_: {}): _725.MsgRemoveAccountResponse;
            };
            ListAccountsRequest: {
                encode(_: _724.ListAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _724.ListAccountsRequest;
                fromJSON(_: any): _724.ListAccountsRequest;
                toJSON(_: _724.ListAccountsRequest): unknown;
                fromPartial(_: {}): _724.ListAccountsRequest;
            };
            ListAccountsResponse: {
                encode(message: _724.ListAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _724.ListAccountsResponse;
                fromJSON(object: any): _724.ListAccountsResponse;
                toJSON(message: _724.ListAccountsResponse): unknown;
                fromPartial(object: {
                    keys?: {
                        adminType?: _726.AdminType;
                        adminAddress?: string;
                    }[];
                }): _724.ListAccountsResponse;
            };
        };
    }
    namespace clp {
        const v1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    removeLiquidity(value: _731.MsgRemoveLiquidity): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removeLiquidityUnits(value: _731.MsgRemoveLiquidityUnits): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPool(value: _731.MsgCreatePool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addLiquidity(value: _731.MsgAddLiquidity): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swap(value: _731.MsgSwap): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    decommissionPool(value: _731.MsgDecommissionPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unlockLiquidity(value: _731.MsgUnlockLiquidityRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateRewardsParams(value: _731.MsgUpdateRewardsParamsRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addRewardPeriod(value: _731.MsgAddRewardPeriodRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    modifyPmtpRates(value: _731.MsgModifyPmtpRates): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updatePmtpParams(value: _731.MsgUpdatePmtpParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateStakingRewardParams(value: _731.MsgUpdateStakingRewardParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setSymmetryThreshold(value: _731.MsgSetSymmetryThreshold): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnlockLiquidity(value: _731.MsgCancelUnlock): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateLiquidityProtectionParams(value: _731.MsgUpdateLiquidityProtectionParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    modifyLiquidityProtectionRates(value: _731.MsgModifyLiquidityProtectionRates): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addProviderDistributionPeriod(value: _731.MsgAddProviderDistributionPeriodRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    removeLiquidity(value: _731.MsgRemoveLiquidity): {
                        typeUrl: string;
                        value: _731.MsgRemoveLiquidity;
                    };
                    removeLiquidityUnits(value: _731.MsgRemoveLiquidityUnits): {
                        typeUrl: string;
                        value: _731.MsgRemoveLiquidityUnits;
                    };
                    createPool(value: _731.MsgCreatePool): {
                        typeUrl: string;
                        value: _731.MsgCreatePool;
                    };
                    addLiquidity(value: _731.MsgAddLiquidity): {
                        typeUrl: string;
                        value: _731.MsgAddLiquidity;
                    };
                    swap(value: _731.MsgSwap): {
                        typeUrl: string;
                        value: _731.MsgSwap;
                    };
                    decommissionPool(value: _731.MsgDecommissionPool): {
                        typeUrl: string;
                        value: _731.MsgDecommissionPool;
                    };
                    unlockLiquidity(value: _731.MsgUnlockLiquidityRequest): {
                        typeUrl: string;
                        value: _731.MsgUnlockLiquidityRequest;
                    };
                    updateRewardsParams(value: _731.MsgUpdateRewardsParamsRequest): {
                        typeUrl: string;
                        value: _731.MsgUpdateRewardsParamsRequest;
                    };
                    addRewardPeriod(value: _731.MsgAddRewardPeriodRequest): {
                        typeUrl: string;
                        value: _731.MsgAddRewardPeriodRequest;
                    };
                    modifyPmtpRates(value: _731.MsgModifyPmtpRates): {
                        typeUrl: string;
                        value: _731.MsgModifyPmtpRates;
                    };
                    updatePmtpParams(value: _731.MsgUpdatePmtpParams): {
                        typeUrl: string;
                        value: _731.MsgUpdatePmtpParams;
                    };
                    updateStakingRewardParams(value: _731.MsgUpdateStakingRewardParams): {
                        typeUrl: string;
                        value: _731.MsgUpdateStakingRewardParams;
                    };
                    setSymmetryThreshold(value: _731.MsgSetSymmetryThreshold): {
                        typeUrl: string;
                        value: _731.MsgSetSymmetryThreshold;
                    };
                    cancelUnlockLiquidity(value: _731.MsgCancelUnlock): {
                        typeUrl: string;
                        value: _731.MsgCancelUnlock;
                    };
                    updateLiquidityProtectionParams(value: _731.MsgUpdateLiquidityProtectionParams): {
                        typeUrl: string;
                        value: _731.MsgUpdateLiquidityProtectionParams;
                    };
                    modifyLiquidityProtectionRates(value: _731.MsgModifyLiquidityProtectionRates): {
                        typeUrl: string;
                        value: _731.MsgModifyLiquidityProtectionRates;
                    };
                    addProviderDistributionPeriod(value: _731.MsgAddProviderDistributionPeriodRequest): {
                        typeUrl: string;
                        value: _731.MsgAddProviderDistributionPeriodRequest;
                    };
                };
                toJSON: {
                    removeLiquidity(value: _731.MsgRemoveLiquidity): {
                        typeUrl: string;
                        value: unknown;
                    };
                    removeLiquidityUnits(value: _731.MsgRemoveLiquidityUnits): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createPool(value: _731.MsgCreatePool): {
                        typeUrl: string;
                        value: unknown;
                    };
                    addLiquidity(value: _731.MsgAddLiquidity): {
                        typeUrl: string;
                        value: unknown;
                    };
                    swap(value: _731.MsgSwap): {
                        typeUrl: string;
                        value: unknown;
                    };
                    decommissionPool(value: _731.MsgDecommissionPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                    unlockLiquidity(value: _731.MsgUnlockLiquidityRequest): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateRewardsParams(value: _731.MsgUpdateRewardsParamsRequest): {
                        typeUrl: string;
                        value: unknown;
                    };
                    addRewardPeriod(value: _731.MsgAddRewardPeriodRequest): {
                        typeUrl: string;
                        value: unknown;
                    };
                    modifyPmtpRates(value: _731.MsgModifyPmtpRates): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updatePmtpParams(value: _731.MsgUpdatePmtpParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateStakingRewardParams(value: _731.MsgUpdateStakingRewardParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                    setSymmetryThreshold(value: _731.MsgSetSymmetryThreshold): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelUnlockLiquidity(value: _731.MsgCancelUnlock): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateLiquidityProtectionParams(value: _731.MsgUpdateLiquidityProtectionParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                    modifyLiquidityProtectionRates(value: _731.MsgModifyLiquidityProtectionRates): {
                        typeUrl: string;
                        value: unknown;
                    };
                    addProviderDistributionPeriod(value: _731.MsgAddProviderDistributionPeriodRequest): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    removeLiquidity(value: any): {
                        typeUrl: string;
                        value: _731.MsgRemoveLiquidity;
                    };
                    removeLiquidityUnits(value: any): {
                        typeUrl: string;
                        value: _731.MsgRemoveLiquidityUnits;
                    };
                    createPool(value: any): {
                        typeUrl: string;
                        value: _731.MsgCreatePool;
                    };
                    addLiquidity(value: any): {
                        typeUrl: string;
                        value: _731.MsgAddLiquidity;
                    };
                    swap(value: any): {
                        typeUrl: string;
                        value: _731.MsgSwap;
                    };
                    decommissionPool(value: any): {
                        typeUrl: string;
                        value: _731.MsgDecommissionPool;
                    };
                    unlockLiquidity(value: any): {
                        typeUrl: string;
                        value: _731.MsgUnlockLiquidityRequest;
                    };
                    updateRewardsParams(value: any): {
                        typeUrl: string;
                        value: _731.MsgUpdateRewardsParamsRequest;
                    };
                    addRewardPeriod(value: any): {
                        typeUrl: string;
                        value: _731.MsgAddRewardPeriodRequest;
                    };
                    modifyPmtpRates(value: any): {
                        typeUrl: string;
                        value: _731.MsgModifyPmtpRates;
                    };
                    updatePmtpParams(value: any): {
                        typeUrl: string;
                        value: _731.MsgUpdatePmtpParams;
                    };
                    updateStakingRewardParams(value: any): {
                        typeUrl: string;
                        value: _731.MsgUpdateStakingRewardParams;
                    };
                    setSymmetryThreshold(value: any): {
                        typeUrl: string;
                        value: _731.MsgSetSymmetryThreshold;
                    };
                    cancelUnlockLiquidity(value: any): {
                        typeUrl: string;
                        value: _731.MsgCancelUnlock;
                    };
                    updateLiquidityProtectionParams(value: any): {
                        typeUrl: string;
                        value: _731.MsgUpdateLiquidityProtectionParams;
                    };
                    modifyLiquidityProtectionRates(value: any): {
                        typeUrl: string;
                        value: _731.MsgModifyLiquidityProtectionRates;
                    };
                    addProviderDistributionPeriod(value: any): {
                        typeUrl: string;
                        value: _731.MsgAddProviderDistributionPeriodRequest;
                    };
                };
                fromPartial: {
                    removeLiquidity(value: _731.MsgRemoveLiquidity): {
                        typeUrl: string;
                        value: _731.MsgRemoveLiquidity;
                    };
                    removeLiquidityUnits(value: _731.MsgRemoveLiquidityUnits): {
                        typeUrl: string;
                        value: _731.MsgRemoveLiquidityUnits;
                    };
                    createPool(value: _731.MsgCreatePool): {
                        typeUrl: string;
                        value: _731.MsgCreatePool;
                    };
                    addLiquidity(value: _731.MsgAddLiquidity): {
                        typeUrl: string;
                        value: _731.MsgAddLiquidity;
                    };
                    swap(value: _731.MsgSwap): {
                        typeUrl: string;
                        value: _731.MsgSwap;
                    };
                    decommissionPool(value: _731.MsgDecommissionPool): {
                        typeUrl: string;
                        value: _731.MsgDecommissionPool;
                    };
                    unlockLiquidity(value: _731.MsgUnlockLiquidityRequest): {
                        typeUrl: string;
                        value: _731.MsgUnlockLiquidityRequest;
                    };
                    updateRewardsParams(value: _731.MsgUpdateRewardsParamsRequest): {
                        typeUrl: string;
                        value: _731.MsgUpdateRewardsParamsRequest;
                    };
                    addRewardPeriod(value: _731.MsgAddRewardPeriodRequest): {
                        typeUrl: string;
                        value: _731.MsgAddRewardPeriodRequest;
                    };
                    modifyPmtpRates(value: _731.MsgModifyPmtpRates): {
                        typeUrl: string;
                        value: _731.MsgModifyPmtpRates;
                    };
                    updatePmtpParams(value: _731.MsgUpdatePmtpParams): {
                        typeUrl: string;
                        value: _731.MsgUpdatePmtpParams;
                    };
                    updateStakingRewardParams(value: _731.MsgUpdateStakingRewardParams): {
                        typeUrl: string;
                        value: _731.MsgUpdateStakingRewardParams;
                    };
                    setSymmetryThreshold(value: _731.MsgSetSymmetryThreshold): {
                        typeUrl: string;
                        value: _731.MsgSetSymmetryThreshold;
                    };
                    cancelUnlockLiquidity(value: _731.MsgCancelUnlock): {
                        typeUrl: string;
                        value: _731.MsgCancelUnlock;
                    };
                    updateLiquidityProtectionParams(value: _731.MsgUpdateLiquidityProtectionParams): {
                        typeUrl: string;
                        value: _731.MsgUpdateLiquidityProtectionParams;
                    };
                    modifyLiquidityProtectionRates(value: _731.MsgModifyLiquidityProtectionRates): {
                        typeUrl: string;
                        value: _731.MsgModifyLiquidityProtectionRates;
                    };
                    addProviderDistributionPeriod(value: _731.MsgAddProviderDistributionPeriodRequest): {
                        typeUrl: string;
                        value: _731.MsgAddProviderDistributionPeriodRequest;
                    };
                };
            };
            AminoConverter: {
                "/sifnode.clp.v1.MsgRemoveLiquidity": {
                    aminoType: string;
                    toAmino: ({ signer, externalAsset, wBasisPoints, asymmetry }: _731.MsgRemoveLiquidity) => {
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
                    }) => _731.MsgRemoveLiquidity;
                };
                "/sifnode.clp.v1.MsgRemoveLiquidityUnits": {
                    aminoType: string;
                    toAmino: ({ signer, externalAsset, withdrawUnits }: _731.MsgRemoveLiquidityUnits) => {
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
                    }) => _731.MsgRemoveLiquidityUnits;
                };
                "/sifnode.clp.v1.MsgCreatePool": {
                    aminoType: string;
                    toAmino: ({ signer, externalAsset, nativeAssetAmount, externalAssetAmount }: _731.MsgCreatePool) => {
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
                    }) => _731.MsgCreatePool;
                };
                "/sifnode.clp.v1.MsgAddLiquidity": {
                    aminoType: string;
                    toAmino: ({ signer, externalAsset, nativeAssetAmount, externalAssetAmount }: _731.MsgAddLiquidity) => {
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
                    }) => _731.MsgAddLiquidity;
                };
                "/sifnode.clp.v1.MsgSwap": {
                    aminoType: string;
                    toAmino: ({ signer, sentAsset, receivedAsset, sentAmount, minReceivingAmount }: _731.MsgSwap) => {
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
                    }) => _731.MsgSwap;
                };
                "/sifnode.clp.v1.MsgDecommissionPool": {
                    aminoType: string;
                    toAmino: ({ signer, symbol }: _731.MsgDecommissionPool) => {
                        signer: string;
                        symbol: string;
                    };
                    fromAmino: ({ signer, symbol }: {
                        signer: string;
                        symbol: string;
                    }) => _731.MsgDecommissionPool;
                };
                "/sifnode.clp.v1.MsgUnlockLiquidityRequest": {
                    aminoType: string;
                    toAmino: ({ signer, externalAsset, units }: _731.MsgUnlockLiquidityRequest) => {
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
                    }) => _731.MsgUnlockLiquidityRequest;
                };
                "/sifnode.clp.v1.MsgUpdateRewardsParamsRequest": {
                    aminoType: string;
                    toAmino: ({ signer, liquidityRemovalLockPeriod, liquidityRemovalCancelPeriod }: _731.MsgUpdateRewardsParamsRequest) => {
                        signer: string;
                        liquidity_removal_lock_period: string;
                        liquidity_removal_cancel_period: string;
                    };
                    fromAmino: ({ signer, liquidity_removal_lock_period, liquidity_removal_cancel_period }: {
                        signer: string;
                        liquidity_removal_lock_period: string;
                        liquidity_removal_cancel_period: string;
                    }) => _731.MsgUpdateRewardsParamsRequest;
                };
                "/sifnode.clp.v1.MsgAddRewardPeriodRequest": {
                    aminoType: string;
                    toAmino: ({ signer, rewardPeriods }: _731.MsgAddRewardPeriodRequest) => {
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
                    }) => _731.MsgAddRewardPeriodRequest;
                };
                "/sifnode.clp.v1.MsgModifyPmtpRates": {
                    aminoType: string;
                    toAmino: ({ signer, blockRate, runningRate, endPolicy }: _731.MsgModifyPmtpRates) => {
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
                    }) => _731.MsgModifyPmtpRates;
                };
                "/sifnode.clp.v1.MsgUpdatePmtpParams": {
                    aminoType: string;
                    toAmino: ({ signer, pmtpPeriodGovernanceRate, pmtpPeriodEpochLength, pmtpPeriodStartBlock, pmtpPeriodEndBlock }: _731.MsgUpdatePmtpParams) => {
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
                    }) => _731.MsgUpdatePmtpParams;
                };
                "/sifnode.clp.v1.MsgUpdateStakingRewardParams": {
                    aminoType: string;
                    toAmino: ({ signer, minter, params }: _731.MsgUpdateStakingRewardParams) => {
                        signer: string;
                        minter: string;
                        params: string;
                    };
                    fromAmino: ({ signer, minter, params }: {
                        signer: string;
                        minter: string;
                        params: string;
                    }) => _731.MsgUpdateStakingRewardParams;
                };
                "/sifnode.clp.v1.MsgSetSymmetryThreshold": {
                    aminoType: string;
                    toAmino: ({ signer, threshold, ratio }: _731.MsgSetSymmetryThreshold) => {
                        signer: string;
                        threshold: string;
                        ratio: string;
                    };
                    fromAmino: ({ signer, threshold, ratio }: {
                        signer: string;
                        threshold: string;
                        ratio: string;
                    }) => _731.MsgSetSymmetryThreshold;
                };
                "/sifnode.clp.v1.MsgCancelUnlock": {
                    aminoType: string;
                    toAmino: ({ signer, externalAsset, units }: _731.MsgCancelUnlock) => {
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
                    }) => _731.MsgCancelUnlock;
                };
                "/sifnode.clp.v1.MsgUpdateLiquidityProtectionParams": {
                    aminoType: string;
                    toAmino: ({ signer, maxRowanLiquidityThreshold, maxRowanLiquidityThresholdAsset, epochLength, isActive }: _731.MsgUpdateLiquidityProtectionParams) => {
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
                    }) => _731.MsgUpdateLiquidityProtectionParams;
                };
                "/sifnode.clp.v1.MsgModifyLiquidityProtectionRates": {
                    aminoType: string;
                    toAmino: ({ signer, currentRowanLiquidityThreshold }: _731.MsgModifyLiquidityProtectionRates) => {
                        signer: string;
                        current_rowan_liquidity_threshold: string;
                    };
                    fromAmino: ({ signer, current_rowan_liquidity_threshold }: {
                        signer: string;
                        current_rowan_liquidity_threshold: string;
                    }) => _731.MsgModifyLiquidityProtectionRates;
                };
                "/sifnode.clp.v1.MsgAddProviderDistributionPeriodRequest": {
                    aminoType: string;
                    toAmino: ({ signer, distributionPeriods }: _731.MsgAddProviderDistributionPeriodRequest) => {
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
                    }) => _731.MsgAddProviderDistributionPeriodRequest;
                };
            };
            Asset: {
                encode(message: _732.Asset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _732.Asset;
                fromJSON(object: any): _732.Asset;
                toJSON(message: _732.Asset): unknown;
                fromPartial(object: {
                    symbol?: string;
                }): _732.Asset;
            };
            LiquidityProvider: {
                encode(message: _732.LiquidityProvider, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _732.LiquidityProvider;
                fromJSON(object: any): _732.LiquidityProvider;
                toJSON(message: _732.LiquidityProvider): unknown;
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
                }): _732.LiquidityProvider;
            };
            LiquidityUnlock: {
                encode(message: _732.LiquidityUnlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _732.LiquidityUnlock;
                fromJSON(object: any): _732.LiquidityUnlock;
                toJSON(message: _732.LiquidityUnlock): unknown;
                fromPartial(object: {
                    requestHeight?: any;
                    units?: string;
                }): _732.LiquidityUnlock;
            };
            PmtpEpoch: {
                encode(message: _732.PmtpEpoch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _732.PmtpEpoch;
                fromJSON(object: any): _732.PmtpEpoch;
                toJSON(message: _732.PmtpEpoch): unknown;
                fromPartial(object: {
                    epochCounter?: any;
                    blockCounter?: any;
                }): _732.PmtpEpoch;
            };
            WhiteList: {
                encode(message: _732.WhiteList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _732.WhiteList;
                fromJSON(object: any): _732.WhiteList;
                toJSON(message: _732.WhiteList): unknown;
                fromPartial(object: {
                    validatorList?: string[];
                }): _732.WhiteList;
            };
            LiquidityProviderData: {
                encode(message: _732.LiquidityProviderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _732.LiquidityProviderData;
                fromJSON(object: any): _732.LiquidityProviderData;
                toJSON(message: _732.LiquidityProviderData): unknown;
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
                }): _732.LiquidityProviderData;
            };
            EventPolicy: {
                encode(message: _732.EventPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _732.EventPolicy;
                fromJSON(object: any): _732.EventPolicy;
                toJSON(message: _732.EventPolicy): unknown;
                fromPartial(object: {
                    eventType?: string;
                    pmtpPeriodStartBlock?: string;
                    pmtpPeriodEndBlock?: string;
                }): _732.EventPolicy;
            };
            RemovalQueue: {
                encode(message: _732.RemovalQueue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _732.RemovalQueue;
                fromJSON(object: any): _732.RemovalQueue;
                toJSON(message: _732.RemovalQueue): unknown;
                fromPartial(object: {
                    count?: any;
                    id?: any;
                    startHeight?: any;
                    totalValue?: string;
                }): _732.RemovalQueue;
            };
            MsgUpdateStakingRewardParams: {
                encode(message: _731.MsgUpdateStakingRewardParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _731.MsgUpdateStakingRewardParams;
                fromJSON(object: any): _731.MsgUpdateStakingRewardParams;
                toJSON(message: _731.MsgUpdateStakingRewardParams): unknown;
                fromPartial(object: {
                    signer?: string;
                    minter?: string;
                    params?: string;
                }): _731.MsgUpdateStakingRewardParams;
            };
            MsgUpdateStakingRewardParamsResponse: {
                encode(_: _731.MsgUpdateStakingRewardParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _731.MsgUpdateStakingRewardParamsResponse;
                fromJSON(_: any): _731.MsgUpdateStakingRewardParamsResponse;
                toJSON(_: _731.MsgUpdateStakingRewardParamsResponse): unknown;
                fromPartial(_: {}): _731.MsgUpdateStakingRewardParamsResponse;
            };
            MsgRemoveLiquidity: {
                encode(message: _731.MsgRemoveLiquidity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _731.MsgRemoveLiquidity;
                fromJSON(object: any): _731.MsgRemoveLiquidity;
                toJSON(message: _731.MsgRemoveLiquidity): unknown;
                fromPartial(object: {
                    signer?: string;
                    externalAsset?: {
                        symbol?: string;
                    };
                    wBasisPoints?: string;
                    asymmetry?: string;
                }): _731.MsgRemoveLiquidity;
            };
            MsgRemoveLiquidityResponse: {
                encode(_: _731.MsgRemoveLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _731.MsgRemoveLiquidityResponse;
                fromJSON(_: any): _731.MsgRemoveLiquidityResponse;
                toJSON(_: _731.MsgRemoveLiquidityResponse): unknown;
                fromPartial(_: {}): _731.MsgRemoveLiquidityResponse;
            };
            MsgRemoveLiquidityUnits: {
                encode(message: _731.MsgRemoveLiquidityUnits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _731.MsgRemoveLiquidityUnits;
                fromJSON(object: any): _731.MsgRemoveLiquidityUnits;
                toJSON(message: _731.MsgRemoveLiquidityUnits): unknown;
                fromPartial(object: {
                    signer?: string;
                    externalAsset?: {
                        symbol?: string;
                    };
                    withdrawUnits?: string;
                }): _731.MsgRemoveLiquidityUnits;
            };
            MsgRemoveLiquidityUnitsResponse: {
                encode(_: _731.MsgRemoveLiquidityUnitsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _731.MsgRemoveLiquidityUnitsResponse;
                fromJSON(_: any): _731.MsgRemoveLiquidityUnitsResponse;
                toJSON(_: _731.MsgRemoveLiquidityUnitsResponse): unknown;
                fromPartial(_: {}): _731.MsgRemoveLiquidityUnitsResponse;
            };
            MsgCreatePool: {
                encode(message: _731.MsgCreatePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _731.MsgCreatePool;
                fromJSON(object: any): _731.MsgCreatePool;
                toJSON(message: _731.MsgCreatePool): unknown;
                fromPartial(object: {
                    signer?: string;
                    externalAsset?: {
                        symbol?: string;
                    };
                    nativeAssetAmount?: string;
                    externalAssetAmount?: string;
                }): _731.MsgCreatePool;
            };
            MsgCreatePoolResponse: {
                encode(_: _731.MsgCreatePoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _731.MsgCreatePoolResponse;
                fromJSON(_: any): _731.MsgCreatePoolResponse;
                toJSON(_: _731.MsgCreatePoolResponse): unknown;
                fromPartial(_: {}): _731.MsgCreatePoolResponse;
            };
            MsgAddLiquidity: {
                encode(message: _731.MsgAddLiquidity, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _731.MsgAddLiquidity;
                fromJSON(object: any): _731.MsgAddLiquidity;
                toJSON(message: _731.MsgAddLiquidity): unknown;
                fromPartial(object: {
                    signer?: string;
                    externalAsset?: {
                        symbol?: string;
                    };
                    nativeAssetAmount?: string;
                    externalAssetAmount?: string;
                }): _731.MsgAddLiquidity;
            };
            MsgAddLiquidityResponse: {
                encode(_: _731.MsgAddLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _731.MsgAddLiquidityResponse;
                fromJSON(_: any): _731.MsgAddLiquidityResponse;
                toJSON(_: _731.MsgAddLiquidityResponse): unknown;
                fromPartial(_: {}): _731.MsgAddLiquidityResponse;
            };
            MsgModifyPmtpRates: {
                encode(message: _731.MsgModifyPmtpRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _731.MsgModifyPmtpRates;
                fromJSON(object: any): _731.MsgModifyPmtpRates;
                toJSON(message: _731.MsgModifyPmtpRates): unknown;
                fromPartial(object: {
                    signer?: string;
                    blockRate?: string;
                    runningRate?: string;
                    endPolicy?: boolean;
                }): _731.MsgModifyPmtpRates;
            };
            MsgModifyPmtpRatesResponse: {
                encode(_: _731.MsgModifyPmtpRatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _731.MsgModifyPmtpRatesResponse;
                fromJSON(_: any): _731.MsgModifyPmtpRatesResponse;
                toJSON(_: _731.MsgModifyPmtpRatesResponse): unknown;
                fromPartial(_: {}): _731.MsgModifyPmtpRatesResponse;
            };
            MsgUpdatePmtpParams: {
                encode(message: _731.MsgUpdatePmtpParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _731.MsgUpdatePmtpParams;
                fromJSON(object: any): _731.MsgUpdatePmtpParams;
                toJSON(message: _731.MsgUpdatePmtpParams): unknown;
                fromPartial(object: {
                    signer?: string;
                    pmtpPeriodGovernanceRate?: string;
                    pmtpPeriodEpochLength?: any;
                    pmtpPeriodStartBlock?: any;
                    pmtpPeriodEndBlock?: any;
                }): _731.MsgUpdatePmtpParams;
            };
            MsgUpdatePmtpParamsResponse: {
                encode(_: _731.MsgUpdatePmtpParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _731.MsgUpdatePmtpParamsResponse;
                fromJSON(_: any): _731.MsgUpdatePmtpParamsResponse;
                toJSON(_: _731.MsgUpdatePmtpParamsResponse): unknown;
                fromPartial(_: {}): _731.MsgUpdatePmtpParamsResponse;
            };
            MsgSwap: {
                encode(message: _731.MsgSwap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _731.MsgSwap;
                fromJSON(object: any): _731.MsgSwap;
                toJSON(message: _731.MsgSwap): unknown;
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
                }): _731.MsgSwap;
            };
            MsgSwapResponse: {
                encode(_: _731.MsgSwapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _731.MsgSwapResponse;
                fromJSON(_: any): _731.MsgSwapResponse;
                toJSON(_: _731.MsgSwapResponse): unknown;
                fromPartial(_: {}): _731.MsgSwapResponse;
            };
            MsgDecommissionPool: {
                encode(message: _731.MsgDecommissionPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _731.MsgDecommissionPool;
                fromJSON(object: any): _731.MsgDecommissionPool;
                toJSON(message: _731.MsgDecommissionPool): unknown;
                fromPartial(object: {
                    signer?: string;
                    symbol?: string;
                }): _731.MsgDecommissionPool;
            };
            MsgDecommissionPoolResponse: {
                encode(_: _731.MsgDecommissionPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _731.MsgDecommissionPoolResponse;
                fromJSON(_: any): _731.MsgDecommissionPoolResponse;
                toJSON(_: _731.MsgDecommissionPoolResponse): unknown;
                fromPartial(_: {}): _731.MsgDecommissionPoolResponse;
            };
            MsgUnlockLiquidityRequest: {
                encode(message: _731.MsgUnlockLiquidityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _731.MsgUnlockLiquidityRequest;
                fromJSON(object: any): _731.MsgUnlockLiquidityRequest;
                toJSON(message: _731.MsgUnlockLiquidityRequest): unknown;
                fromPartial(object: {
                    signer?: string;
                    externalAsset?: {
                        symbol?: string;
                    };
                    units?: string;
                }): _731.MsgUnlockLiquidityRequest;
            };
            MsgUnlockLiquidityResponse: {
                encode(_: _731.MsgUnlockLiquidityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _731.MsgUnlockLiquidityResponse;
                fromJSON(_: any): _731.MsgUnlockLiquidityResponse;
                toJSON(_: _731.MsgUnlockLiquidityResponse): unknown;
                fromPartial(_: {}): _731.MsgUnlockLiquidityResponse;
            };
            MsgUpdateRewardsParamsRequest: {
                encode(message: _731.MsgUpdateRewardsParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _731.MsgUpdateRewardsParamsRequest;
                fromJSON(object: any): _731.MsgUpdateRewardsParamsRequest;
                toJSON(message: _731.MsgUpdateRewardsParamsRequest): unknown;
                fromPartial(object: {
                    signer?: string;
                    liquidityRemovalLockPeriod?: any;
                    liquidityRemovalCancelPeriod?: any;
                }): _731.MsgUpdateRewardsParamsRequest;
            };
            MsgUpdateRewardsParamsResponse: {
                encode(_: _731.MsgUpdateRewardsParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _731.MsgUpdateRewardsParamsResponse;
                fromJSON(_: any): _731.MsgUpdateRewardsParamsResponse;
                toJSON(_: _731.MsgUpdateRewardsParamsResponse): unknown;
                fromPartial(_: {}): _731.MsgUpdateRewardsParamsResponse;
            };
            MsgAddRewardPeriodRequest: {
                encode(message: _731.MsgAddRewardPeriodRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _731.MsgAddRewardPeriodRequest;
                fromJSON(object: any): _731.MsgAddRewardPeriodRequest;
                toJSON(message: _731.MsgAddRewardPeriodRequest): unknown;
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
                }): _731.MsgAddRewardPeriodRequest;
            };
            MsgAddRewardPeriodResponse: {
                encode(_: _731.MsgAddRewardPeriodResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _731.MsgAddRewardPeriodResponse;
                fromJSON(_: any): _731.MsgAddRewardPeriodResponse;
                toJSON(_: _731.MsgAddRewardPeriodResponse): unknown;
                fromPartial(_: {}): _731.MsgAddRewardPeriodResponse;
            };
            MsgSetSymmetryThreshold: {
                encode(message: _731.MsgSetSymmetryThreshold, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _731.MsgSetSymmetryThreshold;
                fromJSON(object: any): _731.MsgSetSymmetryThreshold;
                toJSON(message: _731.MsgSetSymmetryThreshold): unknown;
                fromPartial(object: {
                    signer?: string;
                    threshold?: string;
                    ratio?: string;
                }): _731.MsgSetSymmetryThreshold;
            };
            MsgSetSymmetryThresholdResponse: {
                encode(_: _731.MsgSetSymmetryThresholdResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _731.MsgSetSymmetryThresholdResponse;
                fromJSON(_: any): _731.MsgSetSymmetryThresholdResponse;
                toJSON(_: _731.MsgSetSymmetryThresholdResponse): unknown;
                fromPartial(_: {}): _731.MsgSetSymmetryThresholdResponse;
            };
            MsgCancelUnlock: {
                encode(message: _731.MsgCancelUnlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _731.MsgCancelUnlock;
                fromJSON(object: any): _731.MsgCancelUnlock;
                toJSON(message: _731.MsgCancelUnlock): unknown;
                fromPartial(object: {
                    signer?: string;
                    externalAsset?: {
                        symbol?: string;
                    };
                    units?: string;
                }): _731.MsgCancelUnlock;
            };
            MsgCancelUnlockResponse: {
                encode(_: _731.MsgCancelUnlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _731.MsgCancelUnlockResponse;
                fromJSON(_: any): _731.MsgCancelUnlockResponse;
                toJSON(_: _731.MsgCancelUnlockResponse): unknown;
                fromPartial(_: {}): _731.MsgCancelUnlockResponse;
            };
            RemovalRequest: {
                encode(message: _731.RemovalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _731.RemovalRequest;
                fromJSON(object: any): _731.RemovalRequest;
                toJSON(message: _731.RemovalRequest): unknown;
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
                }): _731.RemovalRequest;
            };
            MsgModifyLiquidityProtectionRates: {
                encode(message: _731.MsgModifyLiquidityProtectionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _731.MsgModifyLiquidityProtectionRates;
                fromJSON(object: any): _731.MsgModifyLiquidityProtectionRates;
                toJSON(message: _731.MsgModifyLiquidityProtectionRates): unknown;
                fromPartial(object: {
                    signer?: string;
                    currentRowanLiquidityThreshold?: string;
                }): _731.MsgModifyLiquidityProtectionRates;
            };
            MsgModifyLiquidityProtectionRatesResponse: {
                encode(_: _731.MsgModifyLiquidityProtectionRatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _731.MsgModifyLiquidityProtectionRatesResponse;
                fromJSON(_: any): _731.MsgModifyLiquidityProtectionRatesResponse;
                toJSON(_: _731.MsgModifyLiquidityProtectionRatesResponse): unknown;
                fromPartial(_: {}): _731.MsgModifyLiquidityProtectionRatesResponse;
            };
            MsgUpdateLiquidityProtectionParams: {
                encode(message: _731.MsgUpdateLiquidityProtectionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _731.MsgUpdateLiquidityProtectionParams;
                fromJSON(object: any): _731.MsgUpdateLiquidityProtectionParams;
                toJSON(message: _731.MsgUpdateLiquidityProtectionParams): unknown;
                fromPartial(object: {
                    signer?: string;
                    maxRowanLiquidityThreshold?: string;
                    maxRowanLiquidityThresholdAsset?: string;
                    epochLength?: any;
                    isActive?: boolean;
                }): _731.MsgUpdateLiquidityProtectionParams;
            };
            MsgUpdateLiquidityProtectionParamsResponse: {
                encode(_: _731.MsgUpdateLiquidityProtectionParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _731.MsgUpdateLiquidityProtectionParamsResponse;
                fromJSON(_: any): _731.MsgUpdateLiquidityProtectionParamsResponse;
                toJSON(_: _731.MsgUpdateLiquidityProtectionParamsResponse): unknown;
                fromPartial(_: {}): _731.MsgUpdateLiquidityProtectionParamsResponse;
            };
            MsgAddProviderDistributionPeriodRequest: {
                encode(message: _731.MsgAddProviderDistributionPeriodRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _731.MsgAddProviderDistributionPeriodRequest;
                fromJSON(object: any): _731.MsgAddProviderDistributionPeriodRequest;
                toJSON(message: _731.MsgAddProviderDistributionPeriodRequest): unknown;
                fromPartial(object: {
                    signer?: string;
                    distributionPeriods?: {
                        distributionPeriodBlockRate?: string;
                        distributionPeriodStartBlock?: any;
                        distributionPeriodEndBlock?: any;
                        distributionPeriodMod?: any;
                    }[];
                }): _731.MsgAddProviderDistributionPeriodRequest;
            };
            MsgAddProviderDistributionPeriodResponse: {
                encode(_: _731.MsgAddProviderDistributionPeriodResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _731.MsgAddProviderDistributionPeriodResponse;
                fromJSON(_: any): _731.MsgAddProviderDistributionPeriodResponse;
                toJSON(_: _731.MsgAddProviderDistributionPeriodResponse): unknown;
                fromPartial(_: {}): _731.MsgAddProviderDistributionPeriodResponse;
            };
            PoolReq: {
                encode(message: _730.PoolReq, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _730.PoolReq;
                fromJSON(object: any): _730.PoolReq;
                toJSON(message: _730.PoolReq): unknown;
                fromPartial(object: {
                    symbol?: string;
                }): _730.PoolReq;
            };
            PoolRes: {
                encode(message: _730.PoolRes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _730.PoolRes;
                fromJSON(object: any): _730.PoolRes;
                toJSON(message: _730.PoolRes): unknown;
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
                }): _730.PoolRes;
            };
            PoolsReq: {
                encode(message: _730.PoolsReq, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _730.PoolsReq;
                fromJSON(object: any): _730.PoolsReq;
                toJSON(message: _730.PoolsReq): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _730.PoolsReq;
            };
            PoolsRes: {
                encode(message: _730.PoolsRes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _730.PoolsRes;
                fromJSON(object: any): _730.PoolsRes;
                toJSON(message: _730.PoolsRes): unknown;
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
                }): _730.PoolsRes;
            };
            LiquidityProviderReq: {
                encode(message: _730.LiquidityProviderReq, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _730.LiquidityProviderReq;
                fromJSON(object: any): _730.LiquidityProviderReq;
                toJSON(message: _730.LiquidityProviderReq): unknown;
                fromPartial(object: {
                    symbol?: string;
                    lpAddress?: string;
                }): _730.LiquidityProviderReq;
            };
            LiquidityProviderRes: {
                encode(message: _730.LiquidityProviderRes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _730.LiquidityProviderRes;
                fromJSON(object: any): _730.LiquidityProviderRes;
                toJSON(message: _730.LiquidityProviderRes): unknown;
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
                }): _730.LiquidityProviderRes;
            };
            AssetListReq: {
                encode(message: _730.AssetListReq, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _730.AssetListReq;
                fromJSON(object: any): _730.AssetListReq;
                toJSON(message: _730.AssetListReq): unknown;
                fromPartial(object: {
                    lpAddress?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _730.AssetListReq;
            };
            AssetListRes: {
                encode(message: _730.AssetListRes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _730.AssetListRes;
                fromJSON(object: any): _730.AssetListRes;
                toJSON(message: _730.AssetListRes): unknown;
                fromPartial(object: {
                    assets?: {
                        symbol?: string;
                    }[];
                    height?: any;
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _730.AssetListRes;
            };
            LiquidityProviderDataReq: {
                encode(message: _730.LiquidityProviderDataReq, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _730.LiquidityProviderDataReq;
                fromJSON(object: any): _730.LiquidityProviderDataReq;
                toJSON(message: _730.LiquidityProviderDataReq): unknown;
                fromPartial(object: {
                    lpAddress?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _730.LiquidityProviderDataReq;
            };
            LiquidityProviderDataRes: {
                encode(message: _730.LiquidityProviderDataRes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _730.LiquidityProviderDataRes;
                fromJSON(object: any): _730.LiquidityProviderDataRes;
                toJSON(message: _730.LiquidityProviderDataRes): unknown;
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
                }): _730.LiquidityProviderDataRes;
            };
            LiquidityProviderListReq: {
                encode(message: _730.LiquidityProviderListReq, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _730.LiquidityProviderListReq;
                fromJSON(object: any): _730.LiquidityProviderListReq;
                toJSON(message: _730.LiquidityProviderListReq): unknown;
                fromPartial(object: {
                    symbol?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _730.LiquidityProviderListReq;
            };
            LiquidityProviderListRes: {
                encode(message: _730.LiquidityProviderListRes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _730.LiquidityProviderListRes;
                fromJSON(object: any): _730.LiquidityProviderListRes;
                toJSON(message: _730.LiquidityProviderListRes): unknown;
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
                }): _730.LiquidityProviderListRes;
            };
            LiquidityProvidersReq: {
                encode(message: _730.LiquidityProvidersReq, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _730.LiquidityProvidersReq;
                fromJSON(object: any): _730.LiquidityProvidersReq;
                toJSON(message: _730.LiquidityProvidersReq): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _730.LiquidityProvidersReq;
            };
            LiquidityProvidersRes: {
                encode(message: _730.LiquidityProvidersRes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _730.LiquidityProvidersRes;
                fromJSON(object: any): _730.LiquidityProvidersRes;
                toJSON(message: _730.LiquidityProvidersRes): unknown;
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
                }): _730.LiquidityProvidersRes;
            };
            ParamsReq: {
                encode(_: _730.ParamsReq, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _730.ParamsReq;
                fromJSON(_: any): _730.ParamsReq;
                toJSON(_: _730.ParamsReq): unknown;
                fromPartial(_: {}): _730.ParamsReq;
            };
            ParamsRes: {
                encode(message: _730.ParamsRes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _730.ParamsRes;
                fromJSON(object: any): _730.ParamsRes;
                toJSON(message: _730.ParamsRes): unknown;
                fromPartial(object: {
                    params?: {
                        minCreatePoolThreshold?: any;
                        enableRemovalQueue?: boolean;
                    };
                    symmetryThreshold?: string;
                    symmetryRatioThreshold?: string;
                }): _730.ParamsRes;
            };
            RewardParamsReq: {
                encode(_: _730.RewardParamsReq, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _730.RewardParamsReq;
                fromJSON(_: any): _730.RewardParamsReq;
                toJSON(_: _730.RewardParamsReq): unknown;
                fromPartial(_: {}): _730.RewardParamsReq;
            };
            RewardParamsRes: {
                encode(message: _730.RewardParamsRes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _730.RewardParamsRes;
                fromJSON(object: any): _730.RewardParamsRes;
                toJSON(message: _730.RewardParamsRes): unknown;
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
                }): _730.RewardParamsRes;
            };
            PmtpParamsReq: {
                encode(_: _730.PmtpParamsReq, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _730.PmtpParamsReq;
                fromJSON(_: any): _730.PmtpParamsReq;
                toJSON(_: _730.PmtpParamsReq): unknown;
                fromPartial(_: {}): _730.PmtpParamsReq;
            };
            PmtpParamsRes: {
                encode(message: _730.PmtpParamsRes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _730.PmtpParamsRes;
                fromJSON(object: any): _730.PmtpParamsRes;
                toJSON(message: _730.PmtpParamsRes): unknown;
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
                }): _730.PmtpParamsRes;
            };
            LiquidityProtectionParamsReq: {
                encode(_: _730.LiquidityProtectionParamsReq, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _730.LiquidityProtectionParamsReq;
                fromJSON(_: any): _730.LiquidityProtectionParamsReq;
                toJSON(_: _730.LiquidityProtectionParamsReq): unknown;
                fromPartial(_: {}): _730.LiquidityProtectionParamsReq;
            };
            LiquidityProtectionParamsRes: {
                encode(message: _730.LiquidityProtectionParamsRes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _730.LiquidityProtectionParamsRes;
                fromJSON(object: any): _730.LiquidityProtectionParamsRes;
                toJSON(message: _730.LiquidityProtectionParamsRes): unknown;
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
                }): _730.LiquidityProtectionParamsRes;
            };
            ProviderDistributionParamsReq: {
                encode(_: _730.ProviderDistributionParamsReq, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _730.ProviderDistributionParamsReq;
                fromJSON(_: any): _730.ProviderDistributionParamsReq;
                toJSON(_: _730.ProviderDistributionParamsReq): unknown;
                fromPartial(_: {}): _730.ProviderDistributionParamsReq;
            };
            ProviderDistributionParamsRes: {
                encode(message: _730.ProviderDistributionParamsRes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _730.ProviderDistributionParamsRes;
                fromJSON(object: any): _730.ProviderDistributionParamsRes;
                toJSON(message: _730.ProviderDistributionParamsRes): unknown;
                fromPartial(object: {
                    params?: {
                        distributionPeriods?: {
                            distributionPeriodBlockRate?: string;
                            distributionPeriodStartBlock?: any;
                            distributionPeriodEndBlock?: any;
                            distributionPeriodMod?: any;
                        }[];
                    };
                }): _730.ProviderDistributionParamsRes;
            };
            Pool: {
                encode(message: _729.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _729.Pool;
                fromJSON(object: any): _729.Pool;
                toJSON(message: _729.Pool): unknown;
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
                }): _729.Pool;
            };
            Params: {
                encode(message: _728.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _728.Params;
                fromJSON(object: any): _728.Params;
                toJSON(message: _728.Params): unknown;
                fromPartial(object: {
                    minCreatePoolThreshold?: any;
                    enableRemovalQueue?: boolean;
                }): _728.Params;
            };
            RewardParams: {
                encode(message: _728.RewardParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _728.RewardParams;
                fromJSON(object: any): _728.RewardParams;
                toJSON(message: _728.RewardParams): unknown;
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
                }): _728.RewardParams;
            };
            PmtpRateParams: {
                encode(message: _728.PmtpRateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _728.PmtpRateParams;
                fromJSON(object: any): _728.PmtpRateParams;
                toJSON(message: _728.PmtpRateParams): unknown;
                fromPartial(object: {
                    pmtpPeriodBlockRate?: string;
                    pmtpCurrentRunningRate?: string;
                    pmtpInterPolicyRate?: string;
                }): _728.PmtpRateParams;
            };
            PmtpParams: {
                encode(message: _728.PmtpParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _728.PmtpParams;
                fromJSON(object: any): _728.PmtpParams;
                toJSON(message: _728.PmtpParams): unknown;
                fromPartial(object: {
                    pmtpPeriodGovernanceRate?: string;
                    pmtpPeriodEpochLength?: any;
                    pmtpPeriodStartBlock?: any;
                    pmtpPeriodEndBlock?: any;
                }): _728.PmtpParams;
            };
            RewardPeriod: {
                encode(message: _728.RewardPeriod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _728.RewardPeriod;
                fromJSON(object: any): _728.RewardPeriod;
                toJSON(message: _728.RewardPeriod): unknown;
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
                }): _728.RewardPeriod;
            };
            PoolMultiplier: {
                encode(message: _728.PoolMultiplier, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _728.PoolMultiplier;
                fromJSON(object: any): _728.PoolMultiplier;
                toJSON(message: _728.PoolMultiplier): unknown;
                fromPartial(object: {
                    poolMultiplierAsset?: string;
                    multiplier?: string;
                }): _728.PoolMultiplier;
            };
            LiquidityProtectionParams: {
                encode(message: _728.LiquidityProtectionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _728.LiquidityProtectionParams;
                fromJSON(object: any): _728.LiquidityProtectionParams;
                toJSON(message: _728.LiquidityProtectionParams): unknown;
                fromPartial(object: {
                    maxRowanLiquidityThreshold?: string;
                    maxRowanLiquidityThresholdAsset?: string;
                    epochLength?: any;
                    isActive?: boolean;
                }): _728.LiquidityProtectionParams;
            };
            LiquidityProtectionRateParams: {
                encode(message: _728.LiquidityProtectionRateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _728.LiquidityProtectionRateParams;
                fromJSON(object: any): _728.LiquidityProtectionRateParams;
                toJSON(message: _728.LiquidityProtectionRateParams): unknown;
                fromPartial(object: {
                    currentRowanLiquidityThreshold?: string;
                }): _728.LiquidityProtectionRateParams;
            };
            ProviderDistributionPeriod: {
                encode(message: _728.ProviderDistributionPeriod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _728.ProviderDistributionPeriod;
                fromJSON(object: any): _728.ProviderDistributionPeriod;
                toJSON(message: _728.ProviderDistributionPeriod): unknown;
                fromPartial(object: {
                    distributionPeriodBlockRate?: string;
                    distributionPeriodStartBlock?: any;
                    distributionPeriodEndBlock?: any;
                    distributionPeriodMod?: any;
                }): _728.ProviderDistributionPeriod;
            };
            ProviderDistributionParams: {
                encode(message: _728.ProviderDistributionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _728.ProviderDistributionParams;
                fromJSON(object: any): _728.ProviderDistributionParams;
                toJSON(message: _728.ProviderDistributionParams): unknown;
                fromPartial(object: {
                    distributionPeriods?: {
                        distributionPeriodBlockRate?: string;
                        distributionPeriodStartBlock?: any;
                        distributionPeriodEndBlock?: any;
                        distributionPeriodMod?: any;
                    }[];
                }): _728.ProviderDistributionParams;
            };
            GenesisState: {
                encode(message: _727.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _727.GenesisState;
                fromJSON(object: any): _727.GenesisState;
                toJSON(message: _727.GenesisState): unknown;
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
                }): _727.GenesisState;
            };
        };
    }
    namespace dispensation {
        const v1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createDistribution(value: _734.MsgCreateDistribution): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createUserClaim(value: _734.MsgCreateUserClaim): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    runDistribution(value: _734.MsgRunDistribution): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createDistribution(value: _734.MsgCreateDistribution): {
                        typeUrl: string;
                        value: _734.MsgCreateDistribution;
                    };
                    createUserClaim(value: _734.MsgCreateUserClaim): {
                        typeUrl: string;
                        value: _734.MsgCreateUserClaim;
                    };
                    runDistribution(value: _734.MsgRunDistribution): {
                        typeUrl: string;
                        value: _734.MsgRunDistribution;
                    };
                };
                toJSON: {
                    createDistribution(value: _734.MsgCreateDistribution): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createUserClaim(value: _734.MsgCreateUserClaim): {
                        typeUrl: string;
                        value: unknown;
                    };
                    runDistribution(value: _734.MsgRunDistribution): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createDistribution(value: any): {
                        typeUrl: string;
                        value: _734.MsgCreateDistribution;
                    };
                    createUserClaim(value: any): {
                        typeUrl: string;
                        value: _734.MsgCreateUserClaim;
                    };
                    runDistribution(value: any): {
                        typeUrl: string;
                        value: _734.MsgRunDistribution;
                    };
                };
                fromPartial: {
                    createDistribution(value: _734.MsgCreateDistribution): {
                        typeUrl: string;
                        value: _734.MsgCreateDistribution;
                    };
                    createUserClaim(value: _734.MsgCreateUserClaim): {
                        typeUrl: string;
                        value: _734.MsgCreateUserClaim;
                    };
                    runDistribution(value: _734.MsgRunDistribution): {
                        typeUrl: string;
                        value: _734.MsgRunDistribution;
                    };
                };
            };
            AminoConverter: {
                "/sifnode.dispensation.v1.MsgCreateDistribution": {
                    aminoType: string;
                    toAmino: ({ distributor, authorizedRunner, distributionType, output }: _734.MsgCreateDistribution) => {
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
                    }) => _734.MsgCreateDistribution;
                };
                "/sifnode.dispensation.v1.MsgCreateUserClaim": {
                    aminoType: string;
                    toAmino: ({ userClaimAddress, userClaimType }: _734.MsgCreateUserClaim) => {
                        user_claim_address: string;
                        user_claim_type: number;
                    };
                    fromAmino: ({ user_claim_address, user_claim_type }: {
                        user_claim_address: string;
                        user_claim_type: number;
                    }) => _734.MsgCreateUserClaim;
                };
                "/sifnode.dispensation.v1.MsgRunDistribution": {
                    aminoType: string;
                    toAmino: ({ authorizedRunner, distributionName, distributionType, distributionCount }: _734.MsgRunDistribution) => {
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
                    }) => _734.MsgRunDistribution;
                };
            };
            distributionTypeFromJSON(object: any): _735.DistributionType;
            distributionTypeToJSON(object: _735.DistributionType): string;
            distributionStatusFromJSON(object: any): _735.DistributionStatus;
            distributionStatusToJSON(object: _735.DistributionStatus): string;
            DistributionType: typeof _735.DistributionType;
            DistributionStatus: typeof _735.DistributionStatus;
            GenesisState: {
                encode(message: _735.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _735.GenesisState;
                fromJSON(object: any): _735.GenesisState;
                toJSON(message: _735.GenesisState): unknown;
                fromPartial(object: {
                    distributionRecords?: {
                        distributionRecords?: {
                            distributionStatus?: _735.DistributionStatus;
                            distributionType?: _735.DistributionType;
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
                            distributionType?: _735.DistributionType;
                            distributionName?: string;
                            runner?: string;
                        }[];
                    };
                    claims?: {
                        userClaims?: {
                            userAddress?: string;
                            userClaimType?: _735.DistributionType;
                            userClaimTime?: string;
                        }[];
                    };
                }): _735.GenesisState;
            };
            DistributionRecord: {
                encode(message: _735.DistributionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _735.DistributionRecord;
                fromJSON(object: any): _735.DistributionRecord;
                toJSON(message: _735.DistributionRecord): unknown;
                fromPartial(object: {
                    distributionStatus?: _735.DistributionStatus;
                    distributionType?: _735.DistributionType;
                    distributionName?: string;
                    recipientAddress?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    distributionStartHeight?: any;
                    distributionCompletedHeight?: any;
                    authorizedRunner?: string;
                }): _735.DistributionRecord;
            };
            DistributionRecords: {
                encode(message: _735.DistributionRecords, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _735.DistributionRecords;
                fromJSON(object: any): _735.DistributionRecords;
                toJSON(message: _735.DistributionRecords): unknown;
                fromPartial(object: {
                    distributionRecords?: {
                        distributionStatus?: _735.DistributionStatus;
                        distributionType?: _735.DistributionType;
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
                }): _735.DistributionRecords;
            };
            Distributions: {
                encode(message: _735.Distributions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _735.Distributions;
                fromJSON(object: any): _735.Distributions;
                toJSON(message: _735.Distributions): unknown;
                fromPartial(object: {
                    distributions?: {
                        distributionType?: _735.DistributionType;
                        distributionName?: string;
                        runner?: string;
                    }[];
                }): _735.Distributions;
            };
            Distribution: {
                encode(message: _735.Distribution, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _735.Distribution;
                fromJSON(object: any): _735.Distribution;
                toJSON(message: _735.Distribution): unknown;
                fromPartial(object: {
                    distributionType?: _735.DistributionType;
                    distributionName?: string;
                    runner?: string;
                }): _735.Distribution;
            };
            UserClaim: {
                encode(message: _735.UserClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _735.UserClaim;
                fromJSON(object: any): _735.UserClaim;
                toJSON(message: _735.UserClaim): unknown;
                fromPartial(object: {
                    userAddress?: string;
                    userClaimType?: _735.DistributionType;
                    userClaimTime?: string;
                }): _735.UserClaim;
            };
            UserClaims: {
                encode(message: _735.UserClaims, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _735.UserClaims;
                fromJSON(object: any): _735.UserClaims;
                toJSON(message: _735.UserClaims): unknown;
                fromPartial(object: {
                    userClaims?: {
                        userAddress?: string;
                        userClaimType?: _735.DistributionType;
                        userClaimTime?: string;
                    }[];
                }): _735.UserClaims;
            };
            MintController: {
                encode(message: _735.MintController, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _735.MintController;
                fromJSON(object: any): _735.MintController;
                toJSON(message: _735.MintController): unknown;
                fromPartial(object: {
                    totalCounter?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _735.MintController;
            };
            MsgCreateDistribution: {
                encode(message: _734.MsgCreateDistribution, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _734.MsgCreateDistribution;
                fromJSON(object: any): _734.MsgCreateDistribution;
                toJSON(message: _734.MsgCreateDistribution): unknown;
                fromPartial(object: {
                    distributor?: string;
                    authorizedRunner?: string;
                    distributionType?: _735.DistributionType;
                    output?: string[];
                }): _734.MsgCreateDistribution;
            };
            MsgCreateDistributionResponse: {
                encode(_: _734.MsgCreateDistributionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _734.MsgCreateDistributionResponse;
                fromJSON(_: any): _734.MsgCreateDistributionResponse;
                toJSON(_: _734.MsgCreateDistributionResponse): unknown;
                fromPartial(_: {}): _734.MsgCreateDistributionResponse;
            };
            MsgCreateClaimResponse: {
                encode(_: _734.MsgCreateClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _734.MsgCreateClaimResponse;
                fromJSON(_: any): _734.MsgCreateClaimResponse;
                toJSON(_: _734.MsgCreateClaimResponse): unknown;
                fromPartial(_: {}): _734.MsgCreateClaimResponse;
            };
            MsgRunDistributionResponse: {
                encode(_: _734.MsgRunDistributionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _734.MsgRunDistributionResponse;
                fromJSON(_: any): _734.MsgRunDistributionResponse;
                toJSON(_: _734.MsgRunDistributionResponse): unknown;
                fromPartial(_: {}): _734.MsgRunDistributionResponse;
            };
            MsgCreateUserClaim: {
                encode(message: _734.MsgCreateUserClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _734.MsgCreateUserClaim;
                fromJSON(object: any): _734.MsgCreateUserClaim;
                toJSON(message: _734.MsgCreateUserClaim): unknown;
                fromPartial(object: {
                    userClaimAddress?: string;
                    userClaimType?: _735.DistributionType;
                }): _734.MsgCreateUserClaim;
            };
            MsgRunDistribution: {
                encode(message: _734.MsgRunDistribution, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _734.MsgRunDistribution;
                fromJSON(object: any): _734.MsgRunDistribution;
                toJSON(message: _734.MsgRunDistribution): unknown;
                fromPartial(object: {
                    authorizedRunner?: string;
                    distributionName?: string;
                    distributionType?: _735.DistributionType;
                    distributionCount?: any;
                }): _734.MsgRunDistribution;
            };
            QueryAllDistributionsRequest: {
                encode(_: _733.QueryAllDistributionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _733.QueryAllDistributionsRequest;
                fromJSON(_: any): _733.QueryAllDistributionsRequest;
                toJSON(_: _733.QueryAllDistributionsRequest): unknown;
                fromPartial(_: {}): _733.QueryAllDistributionsRequest;
            };
            QueryAllDistributionsResponse: {
                encode(message: _733.QueryAllDistributionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _733.QueryAllDistributionsResponse;
                fromJSON(object: any): _733.QueryAllDistributionsResponse;
                toJSON(message: _733.QueryAllDistributionsResponse): unknown;
                fromPartial(object: {
                    distributions?: {
                        distributionType?: _735.DistributionType;
                        distributionName?: string;
                        runner?: string;
                    }[];
                    height?: any;
                }): _733.QueryAllDistributionsResponse;
            };
            QueryRecordsByDistributionNameRequest: {
                encode(message: _733.QueryRecordsByDistributionNameRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _733.QueryRecordsByDistributionNameRequest;
                fromJSON(object: any): _733.QueryRecordsByDistributionNameRequest;
                toJSON(message: _733.QueryRecordsByDistributionNameRequest): unknown;
                fromPartial(object: {
                    distributionName?: string;
                    status?: _735.DistributionStatus;
                }): _733.QueryRecordsByDistributionNameRequest;
            };
            QueryRecordsByDistributionNameResponse: {
                encode(message: _733.QueryRecordsByDistributionNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _733.QueryRecordsByDistributionNameResponse;
                fromJSON(object: any): _733.QueryRecordsByDistributionNameResponse;
                toJSON(message: _733.QueryRecordsByDistributionNameResponse): unknown;
                fromPartial(object: {
                    distributionRecords?: {
                        distributionRecords?: {
                            distributionStatus?: _735.DistributionStatus;
                            distributionType?: _735.DistributionType;
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
                }): _733.QueryRecordsByDistributionNameResponse;
            };
            QueryRecordsByRecipientAddrRequest: {
                encode(message: _733.QueryRecordsByRecipientAddrRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _733.QueryRecordsByRecipientAddrRequest;
                fromJSON(object: any): _733.QueryRecordsByRecipientAddrRequest;
                toJSON(message: _733.QueryRecordsByRecipientAddrRequest): unknown;
                fromPartial(object: {
                    address?: string;
                }): _733.QueryRecordsByRecipientAddrRequest;
            };
            QueryRecordsByRecipientAddrResponse: {
                encode(message: _733.QueryRecordsByRecipientAddrResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _733.QueryRecordsByRecipientAddrResponse;
                fromJSON(object: any): _733.QueryRecordsByRecipientAddrResponse;
                toJSON(message: _733.QueryRecordsByRecipientAddrResponse): unknown;
                fromPartial(object: {
                    distributionRecords?: {
                        distributionRecords?: {
                            distributionStatus?: _735.DistributionStatus;
                            distributionType?: _735.DistributionType;
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
                }): _733.QueryRecordsByRecipientAddrResponse;
            };
            QueryClaimsByTypeRequest: {
                encode(message: _733.QueryClaimsByTypeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _733.QueryClaimsByTypeRequest;
                fromJSON(object: any): _733.QueryClaimsByTypeRequest;
                toJSON(message: _733.QueryClaimsByTypeRequest): unknown;
                fromPartial(object: {
                    userClaimType?: _735.DistributionType;
                }): _733.QueryClaimsByTypeRequest;
            };
            QueryClaimsResponse: {
                encode(message: _733.QueryClaimsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _733.QueryClaimsResponse;
                fromJSON(object: any): _733.QueryClaimsResponse;
                toJSON(message: _733.QueryClaimsResponse): unknown;
                fromPartial(object: {
                    claims?: {
                        userAddress?: string;
                        userClaimType?: _735.DistributionType;
                        userClaimTime?: string;
                    }[];
                    height?: any;
                }): _733.QueryClaimsResponse;
            };
        };
    }
    namespace ethbridge {
        const v1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    lock(value: _737.MsgLock): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burn(value: _737.MsgBurn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createEthBridgeClaim(value: _737.MsgCreateEthBridgeClaim): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateWhiteListValidator(value: _737.MsgUpdateWhiteListValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateCethReceiverAccount(value: _737.MsgUpdateCethReceiverAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    rescueCeth(value: _737.MsgRescueCeth): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setBlacklist(value: _737.MsgSetBlacklist): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    lock(value: _737.MsgLock): {
                        typeUrl: string;
                        value: _737.MsgLock;
                    };
                    burn(value: _737.MsgBurn): {
                        typeUrl: string;
                        value: _737.MsgBurn;
                    };
                    createEthBridgeClaim(value: _737.MsgCreateEthBridgeClaim): {
                        typeUrl: string;
                        value: _737.MsgCreateEthBridgeClaim;
                    };
                    updateWhiteListValidator(value: _737.MsgUpdateWhiteListValidator): {
                        typeUrl: string;
                        value: _737.MsgUpdateWhiteListValidator;
                    };
                    updateCethReceiverAccount(value: _737.MsgUpdateCethReceiverAccount): {
                        typeUrl: string;
                        value: _737.MsgUpdateCethReceiverAccount;
                    };
                    rescueCeth(value: _737.MsgRescueCeth): {
                        typeUrl: string;
                        value: _737.MsgRescueCeth;
                    };
                    setBlacklist(value: _737.MsgSetBlacklist): {
                        typeUrl: string;
                        value: _737.MsgSetBlacklist;
                    };
                };
                toJSON: {
                    lock(value: _737.MsgLock): {
                        typeUrl: string;
                        value: unknown;
                    };
                    burn(value: _737.MsgBurn): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createEthBridgeClaim(value: _737.MsgCreateEthBridgeClaim): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateWhiteListValidator(value: _737.MsgUpdateWhiteListValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateCethReceiverAccount(value: _737.MsgUpdateCethReceiverAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    rescueCeth(value: _737.MsgRescueCeth): {
                        typeUrl: string;
                        value: unknown;
                    };
                    setBlacklist(value: _737.MsgSetBlacklist): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    lock(value: any): {
                        typeUrl: string;
                        value: _737.MsgLock;
                    };
                    burn(value: any): {
                        typeUrl: string;
                        value: _737.MsgBurn;
                    };
                    createEthBridgeClaim(value: any): {
                        typeUrl: string;
                        value: _737.MsgCreateEthBridgeClaim;
                    };
                    updateWhiteListValidator(value: any): {
                        typeUrl: string;
                        value: _737.MsgUpdateWhiteListValidator;
                    };
                    updateCethReceiverAccount(value: any): {
                        typeUrl: string;
                        value: _737.MsgUpdateCethReceiverAccount;
                    };
                    rescueCeth(value: any): {
                        typeUrl: string;
                        value: _737.MsgRescueCeth;
                    };
                    setBlacklist(value: any): {
                        typeUrl: string;
                        value: _737.MsgSetBlacklist;
                    };
                };
                fromPartial: {
                    lock(value: _737.MsgLock): {
                        typeUrl: string;
                        value: _737.MsgLock;
                    };
                    burn(value: _737.MsgBurn): {
                        typeUrl: string;
                        value: _737.MsgBurn;
                    };
                    createEthBridgeClaim(value: _737.MsgCreateEthBridgeClaim): {
                        typeUrl: string;
                        value: _737.MsgCreateEthBridgeClaim;
                    };
                    updateWhiteListValidator(value: _737.MsgUpdateWhiteListValidator): {
                        typeUrl: string;
                        value: _737.MsgUpdateWhiteListValidator;
                    };
                    updateCethReceiverAccount(value: _737.MsgUpdateCethReceiverAccount): {
                        typeUrl: string;
                        value: _737.MsgUpdateCethReceiverAccount;
                    };
                    rescueCeth(value: _737.MsgRescueCeth): {
                        typeUrl: string;
                        value: _737.MsgRescueCeth;
                    };
                    setBlacklist(value: _737.MsgSetBlacklist): {
                        typeUrl: string;
                        value: _737.MsgSetBlacklist;
                    };
                };
            };
            AminoConverter: {
                "/sifnode.ethbridge.v1.MsgLock": {
                    aminoType: string;
                    toAmino: ({ cosmosSender, amount, symbol, ethereumChainId, ethereumReceiver, cethAmount }: _737.MsgLock) => {
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
                    }) => _737.MsgLock;
                };
                "/sifnode.ethbridge.v1.MsgBurn": {
                    aminoType: string;
                    toAmino: ({ cosmosSender, amount, symbol, ethereumChainId, ethereumReceiver, cethAmount }: _737.MsgBurn) => {
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
                    }) => _737.MsgBurn;
                };
                "/sifnode.ethbridge.v1.MsgCreateEthBridgeClaim": {
                    aminoType: string;
                    toAmino: ({ ethBridgeClaim }: _737.MsgCreateEthBridgeClaim) => {
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
                    }) => _737.MsgCreateEthBridgeClaim;
                };
                "/sifnode.ethbridge.v1.MsgUpdateWhiteListValidator": {
                    aminoType: string;
                    toAmino: ({ cosmosSender, validator, operationType }: _737.MsgUpdateWhiteListValidator) => {
                        cosmos_sender: string;
                        validator: string;
                        operation_type: string;
                    };
                    fromAmino: ({ cosmos_sender, validator, operation_type }: {
                        cosmos_sender: string;
                        validator: string;
                        operation_type: string;
                    }) => _737.MsgUpdateWhiteListValidator;
                };
                "/sifnode.ethbridge.v1.MsgUpdateCethReceiverAccount": {
                    aminoType: string;
                    toAmino: ({ cosmosSender, cethReceiverAccount }: _737.MsgUpdateCethReceiverAccount) => {
                        cosmos_sender: string;
                        ceth_receiver_account: string;
                    };
                    fromAmino: ({ cosmos_sender, ceth_receiver_account }: {
                        cosmos_sender: string;
                        ceth_receiver_account: string;
                    }) => _737.MsgUpdateCethReceiverAccount;
                };
                "/sifnode.ethbridge.v1.MsgRescueCeth": {
                    aminoType: string;
                    toAmino: ({ cosmosSender, cosmosReceiver, cethAmount }: _737.MsgRescueCeth) => {
                        cosmos_sender: string;
                        cosmos_receiver: string;
                        ceth_amount: string;
                    };
                    fromAmino: ({ cosmos_sender, cosmos_receiver, ceth_amount }: {
                        cosmos_sender: string;
                        cosmos_receiver: string;
                        ceth_amount: string;
                    }) => _737.MsgRescueCeth;
                };
                "/sifnode.ethbridge.v1.MsgSetBlacklist": {
                    aminoType: string;
                    toAmino: ({ from, addresses }: _737.MsgSetBlacklist) => {
                        from: string;
                        addresses: string[];
                    };
                    fromAmino: ({ from, addresses }: {
                        from: string;
                        addresses: string[];
                    }) => _737.MsgSetBlacklist;
                };
            };
            claimTypeFromJSON(object: any): _738.ClaimType;
            claimTypeToJSON(object: _738.ClaimType): string;
            ClaimType: typeof _738.ClaimType;
            EthBridgeClaim: {
                encode(message: _738.EthBridgeClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _738.EthBridgeClaim;
                fromJSON(object: any): _738.EthBridgeClaim;
                toJSON(message: _738.EthBridgeClaim): unknown;
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
                    claimType?: _738.ClaimType;
                }): _738.EthBridgeClaim;
            };
            PeggyTokens: {
                encode(message: _738.PeggyTokens, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _738.PeggyTokens;
                fromJSON(object: any): _738.PeggyTokens;
                toJSON(message: _738.PeggyTokens): unknown;
                fromPartial(object: {
                    tokens?: string[];
                }): _738.PeggyTokens;
            };
            GenesisState: {
                encode(message: _738.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _738.GenesisState;
                fromJSON(object: any): _738.GenesisState;
                toJSON(message: _738.GenesisState): unknown;
                fromPartial(object: {
                    cethReceiveAccount?: string;
                    peggyTokens?: string[];
                }): _738.GenesisState;
            };
            MsgLock: {
                encode(message: _737.MsgLock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _737.MsgLock;
                fromJSON(object: any): _737.MsgLock;
                toJSON(message: _737.MsgLock): unknown;
                fromPartial(object: {
                    cosmosSender?: string;
                    amount?: string;
                    symbol?: string;
                    ethereumChainId?: any;
                    ethereumReceiver?: string;
                    cethAmount?: string;
                }): _737.MsgLock;
            };
            MsgLockResponse: {
                encode(_: _737.MsgLockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _737.MsgLockResponse;
                fromJSON(_: any): _737.MsgLockResponse;
                toJSON(_: _737.MsgLockResponse): unknown;
                fromPartial(_: {}): _737.MsgLockResponse;
            };
            MsgBurn: {
                encode(message: _737.MsgBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _737.MsgBurn;
                fromJSON(object: any): _737.MsgBurn;
                toJSON(message: _737.MsgBurn): unknown;
                fromPartial(object: {
                    cosmosSender?: string;
                    amount?: string;
                    symbol?: string;
                    ethereumChainId?: any;
                    ethereumReceiver?: string;
                    cethAmount?: string;
                }): _737.MsgBurn;
            };
            MsgBurnResponse: {
                encode(_: _737.MsgBurnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _737.MsgBurnResponse;
                fromJSON(_: any): _737.MsgBurnResponse;
                toJSON(_: _737.MsgBurnResponse): unknown;
                fromPartial(_: {}): _737.MsgBurnResponse;
            };
            MsgCreateEthBridgeClaim: {
                encode(message: _737.MsgCreateEthBridgeClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _737.MsgCreateEthBridgeClaim;
                fromJSON(object: any): _737.MsgCreateEthBridgeClaim;
                toJSON(message: _737.MsgCreateEthBridgeClaim): unknown;
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
                        claimType?: _738.ClaimType;
                    };
                }): _737.MsgCreateEthBridgeClaim;
            };
            MsgCreateEthBridgeClaimResponse: {
                encode(_: _737.MsgCreateEthBridgeClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _737.MsgCreateEthBridgeClaimResponse;
                fromJSON(_: any): _737.MsgCreateEthBridgeClaimResponse;
                toJSON(_: _737.MsgCreateEthBridgeClaimResponse): unknown;
                fromPartial(_: {}): _737.MsgCreateEthBridgeClaimResponse;
            };
            MsgUpdateWhiteListValidator: {
                encode(message: _737.MsgUpdateWhiteListValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _737.MsgUpdateWhiteListValidator;
                fromJSON(object: any): _737.MsgUpdateWhiteListValidator;
                toJSON(message: _737.MsgUpdateWhiteListValidator): unknown;
                fromPartial(object: {
                    cosmosSender?: string;
                    validator?: string;
                    operationType?: string;
                }): _737.MsgUpdateWhiteListValidator;
            };
            MsgUpdateWhiteListValidatorResponse: {
                encode(_: _737.MsgUpdateWhiteListValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _737.MsgUpdateWhiteListValidatorResponse;
                fromJSON(_: any): _737.MsgUpdateWhiteListValidatorResponse;
                toJSON(_: _737.MsgUpdateWhiteListValidatorResponse): unknown;
                fromPartial(_: {}): _737.MsgUpdateWhiteListValidatorResponse;
            };
            MsgUpdateCethReceiverAccount: {
                encode(message: _737.MsgUpdateCethReceiverAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _737.MsgUpdateCethReceiverAccount;
                fromJSON(object: any): _737.MsgUpdateCethReceiverAccount;
                toJSON(message: _737.MsgUpdateCethReceiverAccount): unknown;
                fromPartial(object: {
                    cosmosSender?: string;
                    cethReceiverAccount?: string;
                }): _737.MsgUpdateCethReceiverAccount;
            };
            MsgUpdateCethReceiverAccountResponse: {
                encode(_: _737.MsgUpdateCethReceiverAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _737.MsgUpdateCethReceiverAccountResponse;
                fromJSON(_: any): _737.MsgUpdateCethReceiverAccountResponse;
                toJSON(_: _737.MsgUpdateCethReceiverAccountResponse): unknown;
                fromPartial(_: {}): _737.MsgUpdateCethReceiverAccountResponse;
            };
            MsgRescueCeth: {
                encode(message: _737.MsgRescueCeth, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _737.MsgRescueCeth;
                fromJSON(object: any): _737.MsgRescueCeth;
                toJSON(message: _737.MsgRescueCeth): unknown;
                fromPartial(object: {
                    cosmosSender?: string;
                    cosmosReceiver?: string;
                    cethAmount?: string;
                }): _737.MsgRescueCeth;
            };
            MsgRescueCethResponse: {
                encode(_: _737.MsgRescueCethResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _737.MsgRescueCethResponse;
                fromJSON(_: any): _737.MsgRescueCethResponse;
                toJSON(_: _737.MsgRescueCethResponse): unknown;
                fromPartial(_: {}): _737.MsgRescueCethResponse;
            };
            MsgSetBlacklist: {
                encode(message: _737.MsgSetBlacklist, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _737.MsgSetBlacklist;
                fromJSON(object: any): _737.MsgSetBlacklist;
                toJSON(message: _737.MsgSetBlacklist): unknown;
                fromPartial(object: {
                    from?: string;
                    addresses?: string[];
                }): _737.MsgSetBlacklist;
            };
            MsgSetBlacklistResponse: {
                encode(_: _737.MsgSetBlacklistResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _737.MsgSetBlacklistResponse;
                fromJSON(_: any): _737.MsgSetBlacklistResponse;
                toJSON(_: _737.MsgSetBlacklistResponse): unknown;
                fromPartial(_: {}): _737.MsgSetBlacklistResponse;
            };
            QueryEthProphecyRequest: {
                encode(message: _736.QueryEthProphecyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _736.QueryEthProphecyRequest;
                fromJSON(object: any): _736.QueryEthProphecyRequest;
                toJSON(message: _736.QueryEthProphecyRequest): unknown;
                fromPartial(object: {
                    ethereumChainId?: any;
                    bridgeContractAddress?: string;
                    nonce?: any;
                    symbol?: string;
                    tokenContractAddress?: string;
                    ethereumSender?: string;
                }): _736.QueryEthProphecyRequest;
            };
            QueryEthProphecyResponse: {
                encode(message: _736.QueryEthProphecyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _736.QueryEthProphecyResponse;
                fromJSON(object: any): _736.QueryEthProphecyResponse;
                toJSON(message: _736.QueryEthProphecyResponse): unknown;
                fromPartial(object: {
                    id?: string;
                    status?: {
                        text?: _742.StatusText;
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
                        claimType?: _738.ClaimType;
                    }[];
                }): _736.QueryEthProphecyResponse;
            };
            QueryBlacklistRequest: {
                encode(_: _736.QueryBlacklistRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _736.QueryBlacklistRequest;
                fromJSON(_: any): _736.QueryBlacklistRequest;
                toJSON(_: _736.QueryBlacklistRequest): unknown;
                fromPartial(_: {}): _736.QueryBlacklistRequest;
            };
            QueryBlacklistResponse: {
                encode(message: _736.QueryBlacklistResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _736.QueryBlacklistResponse;
                fromJSON(object: any): _736.QueryBlacklistResponse;
                toJSON(message: _736.QueryBlacklistResponse): unknown;
                fromPartial(object: {
                    addresses?: string[];
                }): _736.QueryBlacklistResponse;
            };
        };
    }
    namespace margin {
        const v1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    open(value: _740.MsgOpen): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    close(value: _740.MsgClose): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    forceClose(value: _740.MsgForceClose): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _740.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updatePools(value: _740.MsgUpdatePools): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    whitelist(value: _740.MsgWhitelist): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    dewhitelist(value: _740.MsgDewhitelist): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    open(value: _740.MsgOpen): {
                        typeUrl: string;
                        value: _740.MsgOpen;
                    };
                    close(value: _740.MsgClose): {
                        typeUrl: string;
                        value: _740.MsgClose;
                    };
                    forceClose(value: _740.MsgForceClose): {
                        typeUrl: string;
                        value: _740.MsgForceClose;
                    };
                    updateParams(value: _740.MsgUpdateParams): {
                        typeUrl: string;
                        value: _740.MsgUpdateParams;
                    };
                    updatePools(value: _740.MsgUpdatePools): {
                        typeUrl: string;
                        value: _740.MsgUpdatePools;
                    };
                    whitelist(value: _740.MsgWhitelist): {
                        typeUrl: string;
                        value: _740.MsgWhitelist;
                    };
                    dewhitelist(value: _740.MsgDewhitelist): {
                        typeUrl: string;
                        value: _740.MsgDewhitelist;
                    };
                };
                toJSON: {
                    open(value: _740.MsgOpen): {
                        typeUrl: string;
                        value: unknown;
                    };
                    close(value: _740.MsgClose): {
                        typeUrl: string;
                        value: unknown;
                    };
                    forceClose(value: _740.MsgForceClose): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateParams(value: _740.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updatePools(value: _740.MsgUpdatePools): {
                        typeUrl: string;
                        value: unknown;
                    };
                    whitelist(value: _740.MsgWhitelist): {
                        typeUrl: string;
                        value: unknown;
                    };
                    dewhitelist(value: _740.MsgDewhitelist): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    open(value: any): {
                        typeUrl: string;
                        value: _740.MsgOpen;
                    };
                    close(value: any): {
                        typeUrl: string;
                        value: _740.MsgClose;
                    };
                    forceClose(value: any): {
                        typeUrl: string;
                        value: _740.MsgForceClose;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _740.MsgUpdateParams;
                    };
                    updatePools(value: any): {
                        typeUrl: string;
                        value: _740.MsgUpdatePools;
                    };
                    whitelist(value: any): {
                        typeUrl: string;
                        value: _740.MsgWhitelist;
                    };
                    dewhitelist(value: any): {
                        typeUrl: string;
                        value: _740.MsgDewhitelist;
                    };
                };
                fromPartial: {
                    open(value: _740.MsgOpen): {
                        typeUrl: string;
                        value: _740.MsgOpen;
                    };
                    close(value: _740.MsgClose): {
                        typeUrl: string;
                        value: _740.MsgClose;
                    };
                    forceClose(value: _740.MsgForceClose): {
                        typeUrl: string;
                        value: _740.MsgForceClose;
                    };
                    updateParams(value: _740.MsgUpdateParams): {
                        typeUrl: string;
                        value: _740.MsgUpdateParams;
                    };
                    updatePools(value: _740.MsgUpdatePools): {
                        typeUrl: string;
                        value: _740.MsgUpdatePools;
                    };
                    whitelist(value: _740.MsgWhitelist): {
                        typeUrl: string;
                        value: _740.MsgWhitelist;
                    };
                    dewhitelist(value: _740.MsgDewhitelist): {
                        typeUrl: string;
                        value: _740.MsgDewhitelist;
                    };
                };
            };
            AminoConverter: {
                "/sifnode.margin.v1.MsgOpen": {
                    aminoType: string;
                    toAmino: ({ signer, collateralAsset, collateralAmount, borrowAsset, position, leverage }: _740.MsgOpen) => {
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
                    }) => _740.MsgOpen;
                };
                "/sifnode.margin.v1.MsgClose": {
                    aminoType: string;
                    toAmino: ({ signer, id }: _740.MsgClose) => {
                        signer: string;
                        id: string;
                    };
                    fromAmino: ({ signer, id }: {
                        signer: string;
                        id: string;
                    }) => _740.MsgClose;
                };
                "/sifnode.margin.v1.MsgForceClose": {
                    aminoType: string;
                    toAmino: ({ signer, mtpAddress, id }: _740.MsgForceClose) => {
                        signer: string;
                        mtp_address: string;
                        id: string;
                    };
                    fromAmino: ({ signer, mtp_address, id }: {
                        signer: string;
                        mtp_address: string;
                        id: string;
                    }) => _740.MsgForceClose;
                };
                "/sifnode.margin.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ signer, params }: _740.MsgUpdateParams) => {
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
                    }) => _740.MsgUpdateParams;
                };
                "/sifnode.margin.v1.MsgUpdatePools": {
                    aminoType: string;
                    toAmino: ({ signer, pools, closedPools }: _740.MsgUpdatePools) => {
                        signer: string;
                        pools: string[];
                        closed_pools: string[];
                    };
                    fromAmino: ({ signer, pools, closed_pools }: {
                        signer: string;
                        pools: string[];
                        closed_pools: string[];
                    }) => _740.MsgUpdatePools;
                };
                "/sifnode.margin.v1.MsgWhitelist": {
                    aminoType: string;
                    toAmino: ({ signer, whitelistedAddress }: _740.MsgWhitelist) => {
                        signer: string;
                        whitelisted_address: string;
                    };
                    fromAmino: ({ signer, whitelisted_address }: {
                        signer: string;
                        whitelisted_address: string;
                    }) => _740.MsgWhitelist;
                };
                "/sifnode.margin.v1.MsgDewhitelist": {
                    aminoType: string;
                    toAmino: ({ signer, whitelistedAddress }: _740.MsgDewhitelist) => {
                        signer: string;
                        whitelisted_address: string;
                    };
                    fromAmino: ({ signer, whitelisted_address }: {
                        signer: string;
                        whitelisted_address: string;
                    }) => _740.MsgDewhitelist;
                };
            };
            positionFromJSON(object: any): _741.Position;
            positionToJSON(object: _741.Position): string;
            Position: typeof _741.Position;
            GenesisState: {
                encode(message: _741.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _741.GenesisState;
                fromJSON(object: any): _741.GenesisState;
                toJSON(message: _741.GenesisState): unknown;
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
                }): _741.GenesisState;
            };
            Params: {
                encode(message: _741.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _741.Params;
                fromJSON(object: any): _741.Params;
                toJSON(message: _741.Params): unknown;
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
                }): _741.Params;
            };
            MTP: {
                encode(message: _741.MTP, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _741.MTP;
                fromJSON(object: any): _741.MTP;
                toJSON(message: _741.MTP): unknown;
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
                    position?: _741.Position;
                    id?: any;
                }): _741.MTP;
            };
            MsgOpen: {
                encode(message: _740.MsgOpen, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _740.MsgOpen;
                fromJSON(object: any): _740.MsgOpen;
                toJSON(message: _740.MsgOpen): unknown;
                fromPartial(object: {
                    signer?: string;
                    collateralAsset?: string;
                    collateralAmount?: string;
                    borrowAsset?: string;
                    position?: _741.Position;
                    leverage?: string;
                }): _740.MsgOpen;
            };
            MsgOpenResponse: {
                encode(_: _740.MsgOpenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _740.MsgOpenResponse;
                fromJSON(_: any): _740.MsgOpenResponse;
                toJSON(_: _740.MsgOpenResponse): unknown;
                fromPartial(_: {}): _740.MsgOpenResponse;
            };
            MsgClose: {
                encode(message: _740.MsgClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _740.MsgClose;
                fromJSON(object: any): _740.MsgClose;
                toJSON(message: _740.MsgClose): unknown;
                fromPartial(object: {
                    signer?: string;
                    id?: any;
                }): _740.MsgClose;
            };
            MsgCloseResponse: {
                encode(_: _740.MsgCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _740.MsgCloseResponse;
                fromJSON(_: any): _740.MsgCloseResponse;
                toJSON(_: _740.MsgCloseResponse): unknown;
                fromPartial(_: {}): _740.MsgCloseResponse;
            };
            MsgForceClose: {
                encode(message: _740.MsgForceClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _740.MsgForceClose;
                fromJSON(object: any): _740.MsgForceClose;
                toJSON(message: _740.MsgForceClose): unknown;
                fromPartial(object: {
                    signer?: string;
                    mtpAddress?: string;
                    id?: any;
                }): _740.MsgForceClose;
            };
            MsgForceCloseResponse: {
                encode(_: _740.MsgForceCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _740.MsgForceCloseResponse;
                fromJSON(_: any): _740.MsgForceCloseResponse;
                toJSON(_: _740.MsgForceCloseResponse): unknown;
                fromPartial(_: {}): _740.MsgForceCloseResponse;
            };
            MsgUpdateParams: {
                encode(message: _740.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _740.MsgUpdateParams;
                fromJSON(object: any): _740.MsgUpdateParams;
                toJSON(message: _740.MsgUpdateParams): unknown;
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
                }): _740.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _740.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _740.MsgUpdateParamsResponse;
                fromJSON(_: any): _740.MsgUpdateParamsResponse;
                toJSON(_: _740.MsgUpdateParamsResponse): unknown;
                fromPartial(_: {}): _740.MsgUpdateParamsResponse;
            };
            MsgUpdatePools: {
                encode(message: _740.MsgUpdatePools, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _740.MsgUpdatePools;
                fromJSON(object: any): _740.MsgUpdatePools;
                toJSON(message: _740.MsgUpdatePools): unknown;
                fromPartial(object: {
                    signer?: string;
                    pools?: string[];
                    closedPools?: string[];
                }): _740.MsgUpdatePools;
            };
            MsgUpdatePoolsResponse: {
                encode(_: _740.MsgUpdatePoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _740.MsgUpdatePoolsResponse;
                fromJSON(_: any): _740.MsgUpdatePoolsResponse;
                toJSON(_: _740.MsgUpdatePoolsResponse): unknown;
                fromPartial(_: {}): _740.MsgUpdatePoolsResponse;
            };
            MsgWhitelist: {
                encode(message: _740.MsgWhitelist, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _740.MsgWhitelist;
                fromJSON(object: any): _740.MsgWhitelist;
                toJSON(message: _740.MsgWhitelist): unknown;
                fromPartial(object: {
                    signer?: string;
                    whitelistedAddress?: string;
                }): _740.MsgWhitelist;
            };
            MsgWhitelistResponse: {
                encode(_: _740.MsgWhitelistResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _740.MsgWhitelistResponse;
                fromJSON(_: any): _740.MsgWhitelistResponse;
                toJSON(_: _740.MsgWhitelistResponse): unknown;
                fromPartial(_: {}): _740.MsgWhitelistResponse;
            };
            MsgDewhitelist: {
                encode(message: _740.MsgDewhitelist, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _740.MsgDewhitelist;
                fromJSON(object: any): _740.MsgDewhitelist;
                toJSON(message: _740.MsgDewhitelist): unknown;
                fromPartial(object: {
                    signer?: string;
                    whitelistedAddress?: string;
                }): _740.MsgDewhitelist;
            };
            MsgDewhitelistResponse: {
                encode(_: _740.MsgDewhitelistResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _740.MsgDewhitelistResponse;
                fromJSON(_: any): _740.MsgDewhitelistResponse;
                toJSON(_: _740.MsgDewhitelistResponse): unknown;
                fromPartial(_: {}): _740.MsgDewhitelistResponse;
            };
            MTPRequest: {
                encode(message: _739.MTPRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _739.MTPRequest;
                fromJSON(object: any): _739.MTPRequest;
                toJSON(message: _739.MTPRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    id?: any;
                }): _739.MTPRequest;
            };
            MTPResponse: {
                encode(message: _739.MTPResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _739.MTPResponse;
                fromJSON(object: any): _739.MTPResponse;
                toJSON(message: _739.MTPResponse): unknown;
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
                        position?: _741.Position;
                        id?: any;
                    };
                }): _739.MTPResponse;
            };
            PositionsForAddressRequest: {
                encode(message: _739.PositionsForAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _739.PositionsForAddressRequest;
                fromJSON(object: any): _739.PositionsForAddressRequest;
                toJSON(message: _739.PositionsForAddressRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _739.PositionsForAddressRequest;
            };
            PositionsForAddressResponse: {
                encode(message: _739.PositionsForAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _739.PositionsForAddressResponse;
                fromJSON(object: any): _739.PositionsForAddressResponse;
                toJSON(message: _739.PositionsForAddressResponse): unknown;
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
                        position?: _741.Position;
                        id?: any;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _739.PositionsForAddressResponse;
            };
            PositionsByPoolRequest: {
                encode(message: _739.PositionsByPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _739.PositionsByPoolRequest;
                fromJSON(object: any): _739.PositionsByPoolRequest;
                toJSON(message: _739.PositionsByPoolRequest): unknown;
                fromPartial(object: {
                    asset?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _739.PositionsByPoolRequest;
            };
            PositionsByPoolResponse: {
                encode(message: _739.PositionsByPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _739.PositionsByPoolResponse;
                fromJSON(object: any): _739.PositionsByPoolResponse;
                toJSON(message: _739.PositionsByPoolResponse): unknown;
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
                        position?: _741.Position;
                        id?: any;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _739.PositionsByPoolResponse;
            };
            PositionsRequest: {
                encode(message: _739.PositionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _739.PositionsRequest;
                fromJSON(object: any): _739.PositionsRequest;
                toJSON(message: _739.PositionsRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _739.PositionsRequest;
            };
            PositionsResponse: {
                encode(message: _739.PositionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _739.PositionsResponse;
                fromJSON(object: any): _739.PositionsResponse;
                toJSON(message: _739.PositionsResponse): unknown;
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
                        position?: _741.Position;
                        id?: any;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _739.PositionsResponse;
            };
            ParamsRequest: {
                encode(_: _739.ParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _739.ParamsRequest;
                fromJSON(_: any): _739.ParamsRequest;
                toJSON(_: _739.ParamsRequest): unknown;
                fromPartial(_: {}): _739.ParamsRequest;
            };
            ParamsResponse: {
                encode(message: _739.ParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _739.ParamsResponse;
                fromJSON(object: any): _739.ParamsResponse;
                toJSON(message: _739.ParamsResponse): unknown;
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
                }): _739.ParamsResponse;
            };
            StatusRequest: {
                encode(_: _739.StatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _739.StatusRequest;
                fromJSON(_: any): _739.StatusRequest;
                toJSON(_: _739.StatusRequest): unknown;
                fromPartial(_: {}): _739.StatusRequest;
            };
            StatusResponse: {
                encode(message: _739.StatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _739.StatusResponse;
                fromJSON(object: any): _739.StatusResponse;
                toJSON(message: _739.StatusResponse): unknown;
                fromPartial(object: {
                    openMtpCount?: any;
                    lifetimeMtpCount?: any;
                }): _739.StatusResponse;
            };
            WhitelistRequest: {
                encode(message: _739.WhitelistRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _739.WhitelistRequest;
                fromJSON(object: any): _739.WhitelistRequest;
                toJSON(message: _739.WhitelistRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _739.WhitelistRequest;
            };
            WhitelistResponse: {
                encode(message: _739.WhitelistResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _739.WhitelistResponse;
                fromJSON(object: any): _739.WhitelistResponse;
                toJSON(message: _739.WhitelistResponse): unknown;
                fromPartial(object: {
                    whitelist?: string[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _739.WhitelistResponse;
            };
            GetSQParamsRequest: {
                encode(message: _739.GetSQParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _739.GetSQParamsRequest;
                fromJSON(object: any): _739.GetSQParamsRequest;
                toJSON(message: _739.GetSQParamsRequest): unknown;
                fromPartial(object: {
                    pool?: string;
                }): _739.GetSQParamsRequest;
            };
            GetSQParamsResponse: {
                encode(message: _739.GetSQParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _739.GetSQParamsResponse;
                fromJSON(object: any): _739.GetSQParamsResponse;
                toJSON(message: _739.GetSQParamsResponse): unknown;
                fromPartial(object: {
                    beginBlock?: any;
                }): _739.GetSQParamsResponse;
            };
            IsWhitelistedRequest: {
                encode(message: _739.IsWhitelistedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _739.IsWhitelistedRequest;
                fromJSON(object: any): _739.IsWhitelistedRequest;
                toJSON(message: _739.IsWhitelistedRequest): unknown;
                fromPartial(object: {
                    address?: string;
                }): _739.IsWhitelistedRequest;
            };
            IsWhitelistedResponse: {
                encode(message: _739.IsWhitelistedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _739.IsWhitelistedResponse;
                fromJSON(object: any): _739.IsWhitelistedResponse;
                toJSON(message: _739.IsWhitelistedResponse): unknown;
                fromPartial(object: {
                    address?: string;
                    isWhitelisted?: boolean;
                }): _739.IsWhitelistedResponse;
            };
        };
    }
    namespace oracle {
        const v1: {
            statusTextFromJSON(object: any): _742.StatusText;
            statusTextToJSON(object: _742.StatusText): string;
            StatusText: typeof _742.StatusText;
            GenesisState: {
                encode(message: _742.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _742.GenesisState;
                fromJSON(object: any): _742.GenesisState;
                toJSON(message: _742.GenesisState): unknown;
                fromPartial(object: {
                    addressWhitelist?: string[];
                    adminAddress?: string;
                    prophecies?: {
                        id?: string;
                        status?: {
                            text?: _742.StatusText;
                            finalClaim?: string;
                        };
                        claimValidators?: Uint8Array;
                        validatorClaims?: Uint8Array;
                    }[];
                }): _742.GenesisState;
            };
            Claim: {
                encode(message: _742.Claim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _742.Claim;
                fromJSON(object: any): _742.Claim;
                toJSON(message: _742.Claim): unknown;
                fromPartial(object: {
                    id?: string;
                    validatorAddress?: string;
                    content?: string;
                }): _742.Claim;
            };
            DBProphecy: {
                encode(message: _742.DBProphecy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _742.DBProphecy;
                fromJSON(object: any): _742.DBProphecy;
                toJSON(message: _742.DBProphecy): unknown;
                fromPartial(object: {
                    id?: string;
                    status?: {
                        text?: _742.StatusText;
                        finalClaim?: string;
                    };
                    claimValidators?: Uint8Array;
                    validatorClaims?: Uint8Array;
                }): _742.DBProphecy;
            };
            Status: {
                encode(message: _742.Status, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _742.Status;
                fromJSON(object: any): _742.Status;
                toJSON(message: _742.Status): unknown;
                fromPartial(object: {
                    text?: _742.StatusText;
                    finalClaim?: string;
                }): _742.Status;
            };
        };
    }
    namespace tokenregistry {
        const v1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    register(value: _744.MsgRegister): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deregister(value: _744.MsgDeregister): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setRegistry(value: _744.MsgSetRegistry): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    register(value: _744.MsgRegister): {
                        typeUrl: string;
                        value: _744.MsgRegister;
                    };
                    deregister(value: _744.MsgDeregister): {
                        typeUrl: string;
                        value: _744.MsgDeregister;
                    };
                    setRegistry(value: _744.MsgSetRegistry): {
                        typeUrl: string;
                        value: _744.MsgSetRegistry;
                    };
                };
                toJSON: {
                    register(value: _744.MsgRegister): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deregister(value: _744.MsgDeregister): {
                        typeUrl: string;
                        value: unknown;
                    };
                    setRegistry(value: _744.MsgSetRegistry): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    register(value: any): {
                        typeUrl: string;
                        value: _744.MsgRegister;
                    };
                    deregister(value: any): {
                        typeUrl: string;
                        value: _744.MsgDeregister;
                    };
                    setRegistry(value: any): {
                        typeUrl: string;
                        value: _744.MsgSetRegistry;
                    };
                };
                fromPartial: {
                    register(value: _744.MsgRegister): {
                        typeUrl: string;
                        value: _744.MsgRegister;
                    };
                    deregister(value: _744.MsgDeregister): {
                        typeUrl: string;
                        value: _744.MsgDeregister;
                    };
                    setRegistry(value: _744.MsgSetRegistry): {
                        typeUrl: string;
                        value: _744.MsgSetRegistry;
                    };
                };
            };
            AminoConverter: {
                "/sifnode.tokenregistry.v1.MsgRegister": {
                    aminoType: string;
                    toAmino: ({ from, entry }: _744.MsgRegister) => {
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
                    }) => _744.MsgRegister;
                };
                "/sifnode.tokenregistry.v1.MsgDeregister": {
                    aminoType: string;
                    toAmino: ({ from, denom }: _744.MsgDeregister) => {
                        from: string;
                        denom: string;
                    };
                    fromAmino: ({ from, denom }: {
                        from: string;
                        denom: string;
                    }) => _744.MsgDeregister;
                };
                "/sifnode.tokenregistry.v1.MsgSetRegistry": {
                    aminoType: string;
                    toAmino: ({ from, registry }: _744.MsgSetRegistry) => {
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
                    }) => _744.MsgSetRegistry;
                };
            };
            permissionFromJSON(object: any): _745.Permission;
            permissionToJSON(object: _745.Permission): string;
            Permission: typeof _745.Permission;
            GenesisState: {
                encode(message: _745.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _745.GenesisState;
                fromJSON(object: any): _745.GenesisState;
                toJSON(message: _745.GenesisState): unknown;
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
                            permissions?: _745.Permission[];
                            unitDenom?: string;
                            ibcCounterpartyDenom?: string;
                            ibcCounterpartyChainId?: string;
                        }[];
                    };
                }): _745.GenesisState;
            };
            Registry: {
                encode(message: _745.Registry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _745.Registry;
                fromJSON(object: any): _745.Registry;
                toJSON(message: _745.Registry): unknown;
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
                        permissions?: _745.Permission[];
                        unitDenom?: string;
                        ibcCounterpartyDenom?: string;
                        ibcCounterpartyChainId?: string;
                    }[];
                }): _745.Registry;
            };
            RegistryEntry: {
                encode(message: _745.RegistryEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _745.RegistryEntry;
                fromJSON(object: any): _745.RegistryEntry;
                toJSON(message: _745.RegistryEntry): unknown;
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
                    permissions?: _745.Permission[];
                    unitDenom?: string;
                    ibcCounterpartyDenom?: string;
                    ibcCounterpartyChainId?: string;
                }): _745.RegistryEntry;
            };
            MsgRegister: {
                encode(message: _744.MsgRegister, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _744.MsgRegister;
                fromJSON(object: any): _744.MsgRegister;
                toJSON(message: _744.MsgRegister): unknown;
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
                        permissions?: _745.Permission[];
                        unitDenom?: string;
                        ibcCounterpartyDenom?: string;
                        ibcCounterpartyChainId?: string;
                    };
                }): _744.MsgRegister;
            };
            MsgRegisterResponse: {
                encode(_: _744.MsgRegisterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _744.MsgRegisterResponse;
                fromJSON(_: any): _744.MsgRegisterResponse;
                toJSON(_: _744.MsgRegisterResponse): unknown;
                fromPartial(_: {}): _744.MsgRegisterResponse;
            };
            MsgSetRegistry: {
                encode(message: _744.MsgSetRegistry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _744.MsgSetRegistry;
                fromJSON(object: any): _744.MsgSetRegistry;
                toJSON(message: _744.MsgSetRegistry): unknown;
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
                            permissions?: _745.Permission[];
                            unitDenom?: string;
                            ibcCounterpartyDenom?: string;
                            ibcCounterpartyChainId?: string;
                        }[];
                    };
                }): _744.MsgSetRegistry;
            };
            MsgSetRegistryResponse: {
                encode(_: _744.MsgSetRegistryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _744.MsgSetRegistryResponse;
                fromJSON(_: any): _744.MsgSetRegistryResponse;
                toJSON(_: _744.MsgSetRegistryResponse): unknown;
                fromPartial(_: {}): _744.MsgSetRegistryResponse;
            };
            MsgDeregister: {
                encode(message: _744.MsgDeregister, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _744.MsgDeregister;
                fromJSON(object: any): _744.MsgDeregister;
                toJSON(message: _744.MsgDeregister): unknown;
                fromPartial(object: {
                    from?: string;
                    denom?: string;
                }): _744.MsgDeregister;
            };
            MsgDeregisterResponse: {
                encode(_: _744.MsgDeregisterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _744.MsgDeregisterResponse;
                fromJSON(_: any): _744.MsgDeregisterResponse;
                toJSON(_: _744.MsgDeregisterResponse): unknown;
                fromPartial(_: {}): _744.MsgDeregisterResponse;
            };
            QueryEntriesResponse: {
                encode(message: _743.QueryEntriesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _743.QueryEntriesResponse;
                fromJSON(object: any): _743.QueryEntriesResponse;
                toJSON(message: _743.QueryEntriesResponse): unknown;
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
                            permissions?: _745.Permission[];
                            unitDenom?: string;
                            ibcCounterpartyDenom?: string;
                            ibcCounterpartyChainId?: string;
                        }[];
                    };
                }): _743.QueryEntriesResponse;
            };
            QueryEntriesRequest: {
                encode(_: _743.QueryEntriesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _743.QueryEntriesRequest;
                fromJSON(_: any): _743.QueryEntriesRequest;
                toJSON(_: _743.QueryEntriesRequest): unknown;
                fromPartial(_: {}): _743.QueryEntriesRequest;
            };
        };
    }
}
