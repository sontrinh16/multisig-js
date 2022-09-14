import * as _248 from "./wasm/v1/genesis";
import * as _249 from "./wasm/v1/ibc";
import * as _250 from "./wasm/v1/proposal";
import * as _251 from "./wasm/v1/query";
import * as _252 from "./wasm/v1/tx";
import * as _253 from "./wasm/v1/types";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _252.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract(value: _252.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContract(value: _252.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    migrateContract(value: _252.MsgMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateAdmin(value: _252.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clearAdmin(value: _252.MsgClearAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _252.MsgStoreCode): {
                        typeUrl: string;
                        value: _252.MsgStoreCode;
                    };
                    instantiateContract(value: _252.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _252.MsgInstantiateContract;
                    };
                    executeContract(value: _252.MsgExecuteContract): {
                        typeUrl: string;
                        value: _252.MsgExecuteContract;
                    };
                    migrateContract(value: _252.MsgMigrateContract): {
                        typeUrl: string;
                        value: _252.MsgMigrateContract;
                    };
                    updateAdmin(value: _252.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _252.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _252.MsgClearAdmin): {
                        typeUrl: string;
                        value: _252.MsgClearAdmin;
                    };
                };
                toJSON: {
                    storeCode(value: _252.MsgStoreCode): {
                        typeUrl: string;
                        value: unknown;
                    };
                    instantiateContract(value: _252.MsgInstantiateContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    executeContract(value: _252.MsgExecuteContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    migrateContract(value: _252.MsgMigrateContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateAdmin(value: _252.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    clearAdmin(value: _252.MsgClearAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    storeCode(value: any): {
                        typeUrl: string;
                        value: _252.MsgStoreCode;
                    };
                    instantiateContract(value: any): {
                        typeUrl: string;
                        value: _252.MsgInstantiateContract;
                    };
                    executeContract(value: any): {
                        typeUrl: string;
                        value: _252.MsgExecuteContract;
                    };
                    migrateContract(value: any): {
                        typeUrl: string;
                        value: _252.MsgMigrateContract;
                    };
                    updateAdmin(value: any): {
                        typeUrl: string;
                        value: _252.MsgUpdateAdmin;
                    };
                    clearAdmin(value: any): {
                        typeUrl: string;
                        value: _252.MsgClearAdmin;
                    };
                };
                fromPartial: {
                    storeCode(value: _252.MsgStoreCode): {
                        typeUrl: string;
                        value: _252.MsgStoreCode;
                    };
                    instantiateContract(value: _252.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _252.MsgInstantiateContract;
                    };
                    executeContract(value: _252.MsgExecuteContract): {
                        typeUrl: string;
                        value: _252.MsgExecuteContract;
                    };
                    migrateContract(value: _252.MsgMigrateContract): {
                        typeUrl: string;
                        value: _252.MsgMigrateContract;
                    };
                    updateAdmin(value: _252.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _252.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _252.MsgClearAdmin): {
                        typeUrl: string;
                        value: _252.MsgClearAdmin;
                    };
                };
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: ({ sender, wasmByteCode, instantiatePermission }: _252.MsgStoreCode) => {
                        sender: string;
                        wasm_byte_code: string;
                        instantiate_permission: {
                            permission: number;
                            address: string;
                        };
                    };
                    fromAmino: ({ sender, wasm_byte_code, instantiate_permission }: {
                        sender: string;
                        wasm_byte_code: string;
                        instantiate_permission: {
                            permission: number;
                            address: string;
                        };
                    }) => _252.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: ({ sender, admin, codeId, label, msg, funds }: _252.MsgInstantiateContract) => {
                        sender: string;
                        admin: string;
                        code_id: string;
                        label: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ sender, admin, code_id, label, msg, funds }: {
                        sender: string;
                        admin: string;
                        code_id: string;
                        label: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _252.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, msg, funds }: _252.MsgExecuteContract) => {
                        sender: string;
                        contract: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ sender, contract, msg, funds }: {
                        sender: string;
                        contract: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _252.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, codeId, msg }: _252.MsgMigrateContract) => {
                        sender: string;
                        contract: string;
                        code_id: string;
                        msg: Uint8Array;
                    };
                    fromAmino: ({ sender, contract, code_id, msg }: {
                        sender: string;
                        contract: string;
                        code_id: string;
                        msg: Uint8Array;
                    }) => _252.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, newAdmin, contract }: _252.MsgUpdateAdmin) => {
                        sender: string;
                        new_admin: string;
                        contract: string;
                    };
                    fromAmino: ({ sender, new_admin, contract }: {
                        sender: string;
                        new_admin: string;
                        contract: string;
                    }) => _252.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, contract }: _252.MsgClearAdmin) => {
                        sender: string;
                        contract: string;
                    };
                    fromAmino: ({ sender, contract }: {
                        sender: string;
                        contract: string;
                    }) => _252.MsgClearAdmin;
                };
            };
            accessTypeFromJSON(object: any): _253.AccessType;
            accessTypeToJSON(object: _253.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _253.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _253.ContractCodeHistoryOperationType): string;
            AccessType: typeof _253.AccessType;
            ContractCodeHistoryOperationType: typeof _253.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                encode(message: _253.AccessTypeParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.AccessTypeParam;
                fromJSON(object: any): _253.AccessTypeParam;
                toJSON(message: _253.AccessTypeParam): unknown;
                fromPartial(object: {
                    value?: _253.AccessType;
                }): _253.AccessTypeParam;
            };
            AccessConfig: {
                encode(message: _253.AccessConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.AccessConfig;
                fromJSON(object: any): _253.AccessConfig;
                toJSON(message: _253.AccessConfig): unknown;
                fromPartial(object: {
                    permission?: _253.AccessType;
                    address?: string;
                }): _253.AccessConfig;
            };
            Params: {
                encode(message: _253.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.Params;
                fromJSON(object: any): _253.Params;
                toJSON(message: _253.Params): unknown;
                fromPartial(object: {
                    codeUploadAccess?: {
                        permission?: _253.AccessType;
                        address?: string;
                    };
                    instantiateDefaultPermission?: _253.AccessType;
                    maxWasmCodeSize?: any;
                }): _253.Params;
            };
            CodeInfo: {
                encode(message: _253.CodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.CodeInfo;
                fromJSON(object: any): _253.CodeInfo;
                toJSON(message: _253.CodeInfo): unknown;
                fromPartial(object: {
                    codeHash?: Uint8Array;
                    creator?: string;
                    instantiateConfig?: {
                        permission?: _253.AccessType;
                        address?: string;
                    };
                }): _253.CodeInfo;
            };
            ContractInfo: {
                encode(message: _253.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.ContractInfo;
                fromJSON(object: any): _253.ContractInfo;
                toJSON(message: _253.ContractInfo): unknown;
                fromPartial(object: {
                    codeId?: any;
                    creator?: string;
                    admin?: string;
                    label?: string;
                    created?: {
                        blockHeight?: any;
                        txIndex?: any;
                    };
                    ibcPortId?: string;
                    extension?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _253.ContractInfo;
            };
            ContractCodeHistoryEntry: {
                encode(message: _253.ContractCodeHistoryEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.ContractCodeHistoryEntry;
                fromJSON(object: any): _253.ContractCodeHistoryEntry;
                toJSON(message: _253.ContractCodeHistoryEntry): unknown;
                fromPartial(object: {
                    operation?: _253.ContractCodeHistoryOperationType;
                    codeId?: any;
                    updated?: {
                        blockHeight?: any;
                        txIndex?: any;
                    };
                    msg?: Uint8Array;
                }): _253.ContractCodeHistoryEntry;
            };
            AbsoluteTxPosition: {
                encode(message: _253.AbsoluteTxPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.AbsoluteTxPosition;
                fromJSON(object: any): _253.AbsoluteTxPosition;
                toJSON(message: _253.AbsoluteTxPosition): unknown;
                fromPartial(object: {
                    blockHeight?: any;
                    txIndex?: any;
                }): _253.AbsoluteTxPosition;
            };
            Model: {
                encode(message: _253.Model, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.Model;
                fromJSON(object: any): _253.Model;
                toJSON(message: _253.Model): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                }): _253.Model;
            };
            MsgStoreCode: {
                encode(message: _252.MsgStoreCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _252.MsgStoreCode;
                fromJSON(object: any): _252.MsgStoreCode;
                toJSON(message: _252.MsgStoreCode): unknown;
                fromPartial(object: {
                    sender?: string;
                    wasmByteCode?: Uint8Array;
                    instantiatePermission?: {
                        permission?: _253.AccessType;
                        address?: string;
                    };
                }): _252.MsgStoreCode;
            };
            MsgStoreCodeResponse: {
                encode(message: _252.MsgStoreCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _252.MsgStoreCodeResponse;
                fromJSON(object: any): _252.MsgStoreCodeResponse;
                toJSON(message: _252.MsgStoreCodeResponse): unknown;
                fromPartial(object: {
                    codeId?: any;
                }): _252.MsgStoreCodeResponse;
            };
            MsgInstantiateContract: {
                encode(message: _252.MsgInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _252.MsgInstantiateContract;
                fromJSON(object: any): _252.MsgInstantiateContract;
                toJSON(message: _252.MsgInstantiateContract): unknown;
                fromPartial(object: {
                    sender?: string;
                    admin?: string;
                    codeId?: any;
                    label?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _252.MsgInstantiateContract;
            };
            MsgInstantiateContractResponse: {
                encode(message: _252.MsgInstantiateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _252.MsgInstantiateContractResponse;
                fromJSON(object: any): _252.MsgInstantiateContractResponse;
                toJSON(message: _252.MsgInstantiateContractResponse): unknown;
                fromPartial(object: {
                    address?: string;
                    data?: Uint8Array;
                }): _252.MsgInstantiateContractResponse;
            };
            MsgExecuteContract: {
                encode(message: _252.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _252.MsgExecuteContract;
                fromJSON(object: any): _252.MsgExecuteContract;
                toJSON(message: _252.MsgExecuteContract): unknown;
                fromPartial(object: {
                    sender?: string;
                    contract?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _252.MsgExecuteContract;
            };
            MsgExecuteContractResponse: {
                encode(message: _252.MsgExecuteContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _252.MsgExecuteContractResponse;
                fromJSON(object: any): _252.MsgExecuteContractResponse;
                toJSON(message: _252.MsgExecuteContractResponse): unknown;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _252.MsgExecuteContractResponse;
            };
            MsgMigrateContract: {
                encode(message: _252.MsgMigrateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _252.MsgMigrateContract;
                fromJSON(object: any): _252.MsgMigrateContract;
                toJSON(message: _252.MsgMigrateContract): unknown;
                fromPartial(object: {
                    sender?: string;
                    contract?: string;
                    codeId?: any;
                    msg?: Uint8Array;
                }): _252.MsgMigrateContract;
            };
            MsgMigrateContractResponse: {
                encode(message: _252.MsgMigrateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _252.MsgMigrateContractResponse;
                fromJSON(object: any): _252.MsgMigrateContractResponse;
                toJSON(message: _252.MsgMigrateContractResponse): unknown;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _252.MsgMigrateContractResponse;
            };
            MsgUpdateAdmin: {
                encode(message: _252.MsgUpdateAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _252.MsgUpdateAdmin;
                fromJSON(object: any): _252.MsgUpdateAdmin;
                toJSON(message: _252.MsgUpdateAdmin): unknown;
                fromPartial(object: {
                    sender?: string;
                    newAdmin?: string;
                    contract?: string;
                }): _252.MsgUpdateAdmin;
            };
            MsgUpdateAdminResponse: {
                encode(_: _252.MsgUpdateAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _252.MsgUpdateAdminResponse;
                fromJSON(_: any): _252.MsgUpdateAdminResponse;
                toJSON(_: _252.MsgUpdateAdminResponse): unknown;
                fromPartial(_: {}): _252.MsgUpdateAdminResponse;
            };
            MsgClearAdmin: {
                encode(message: _252.MsgClearAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _252.MsgClearAdmin;
                fromJSON(object: any): _252.MsgClearAdmin;
                toJSON(message: _252.MsgClearAdmin): unknown;
                fromPartial(object: {
                    sender?: string;
                    contract?: string;
                }): _252.MsgClearAdmin;
            };
            MsgClearAdminResponse: {
                encode(_: _252.MsgClearAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _252.MsgClearAdminResponse;
                fromJSON(_: any): _252.MsgClearAdminResponse;
                toJSON(_: _252.MsgClearAdminResponse): unknown;
                fromPartial(_: {}): _252.MsgClearAdminResponse;
            };
            QueryContractInfoRequest: {
                encode(message: _251.QueryContractInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _251.QueryContractInfoRequest;
                fromJSON(object: any): _251.QueryContractInfoRequest;
                toJSON(message: _251.QueryContractInfoRequest): unknown;
                fromPartial(object: {
                    address?: string;
                }): _251.QueryContractInfoRequest;
            };
            QueryContractInfoResponse: {
                encode(message: _251.QueryContractInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _251.QueryContractInfoResponse;
                fromJSON(object: any): _251.QueryContractInfoResponse;
                toJSON(message: _251.QueryContractInfoResponse): unknown;
                fromPartial(object: {
                    address?: string;
                    contractInfo?: {
                        codeId?: any;
                        creator?: string;
                        admin?: string;
                        label?: string;
                        created?: {
                            blockHeight?: any;
                            txIndex?: any;
                        };
                        ibcPortId?: string;
                        extension?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _251.QueryContractInfoResponse;
            };
            QueryContractHistoryRequest: {
                encode(message: _251.QueryContractHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _251.QueryContractHistoryRequest;
                fromJSON(object: any): _251.QueryContractHistoryRequest;
                toJSON(message: _251.QueryContractHistoryRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _251.QueryContractHistoryRequest;
            };
            QueryContractHistoryResponse: {
                encode(message: _251.QueryContractHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _251.QueryContractHistoryResponse;
                fromJSON(object: any): _251.QueryContractHistoryResponse;
                toJSON(message: _251.QueryContractHistoryResponse): unknown;
                fromPartial(object: {
                    entries?: {
                        operation?: _253.ContractCodeHistoryOperationType;
                        codeId?: any;
                        updated?: {
                            blockHeight?: any;
                            txIndex?: any;
                        };
                        msg?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _251.QueryContractHistoryResponse;
            };
            QueryContractsByCodeRequest: {
                encode(message: _251.QueryContractsByCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _251.QueryContractsByCodeRequest;
                fromJSON(object: any): _251.QueryContractsByCodeRequest;
                toJSON(message: _251.QueryContractsByCodeRequest): unknown;
                fromPartial(object: {
                    codeId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _251.QueryContractsByCodeRequest;
            };
            QueryContractsByCodeResponse: {
                encode(message: _251.QueryContractsByCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _251.QueryContractsByCodeResponse;
                fromJSON(object: any): _251.QueryContractsByCodeResponse;
                toJSON(message: _251.QueryContractsByCodeResponse): unknown;
                fromPartial(object: {
                    contracts?: string[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _251.QueryContractsByCodeResponse;
            };
            QueryAllContractStateRequest: {
                encode(message: _251.QueryAllContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _251.QueryAllContractStateRequest;
                fromJSON(object: any): _251.QueryAllContractStateRequest;
                toJSON(message: _251.QueryAllContractStateRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _251.QueryAllContractStateRequest;
            };
            QueryAllContractStateResponse: {
                encode(message: _251.QueryAllContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _251.QueryAllContractStateResponse;
                fromJSON(object: any): _251.QueryAllContractStateResponse;
                toJSON(message: _251.QueryAllContractStateResponse): unknown;
                fromPartial(object: {
                    models?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _251.QueryAllContractStateResponse;
            };
            QueryRawContractStateRequest: {
                encode(message: _251.QueryRawContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _251.QueryRawContractStateRequest;
                fromJSON(object: any): _251.QueryRawContractStateRequest;
                toJSON(message: _251.QueryRawContractStateRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    queryData?: Uint8Array;
                }): _251.QueryRawContractStateRequest;
            };
            QueryRawContractStateResponse: {
                encode(message: _251.QueryRawContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _251.QueryRawContractStateResponse;
                fromJSON(object: any): _251.QueryRawContractStateResponse;
                toJSON(message: _251.QueryRawContractStateResponse): unknown;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _251.QueryRawContractStateResponse;
            };
            QuerySmartContractStateRequest: {
                encode(message: _251.QuerySmartContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _251.QuerySmartContractStateRequest;
                fromJSON(object: any): _251.QuerySmartContractStateRequest;
                toJSON(message: _251.QuerySmartContractStateRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    queryData?: Uint8Array;
                }): _251.QuerySmartContractStateRequest;
            };
            QuerySmartContractStateResponse: {
                encode(message: _251.QuerySmartContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _251.QuerySmartContractStateResponse;
                fromJSON(object: any): _251.QuerySmartContractStateResponse;
                toJSON(message: _251.QuerySmartContractStateResponse): unknown;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _251.QuerySmartContractStateResponse;
            };
            QueryCodeRequest: {
                encode(message: _251.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _251.QueryCodeRequest;
                fromJSON(object: any): _251.QueryCodeRequest;
                toJSON(message: _251.QueryCodeRequest): unknown;
                fromPartial(object: {
                    codeId?: any;
                }): _251.QueryCodeRequest;
            };
            CodeInfoResponse: {
                encode(message: _251.CodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _251.CodeInfoResponse;
                fromJSON(object: any): _251.CodeInfoResponse;
                toJSON(message: _251.CodeInfoResponse): unknown;
                fromPartial(object: {
                    codeId?: any;
                    creator?: string;
                    dataHash?: Uint8Array;
                }): _251.CodeInfoResponse;
            };
            QueryCodeResponse: {
                encode(message: _251.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _251.QueryCodeResponse;
                fromJSON(object: any): _251.QueryCodeResponse;
                toJSON(message: _251.QueryCodeResponse): unknown;
                fromPartial(object: {
                    codeInfo?: {
                        codeId?: any;
                        creator?: string;
                        dataHash?: Uint8Array;
                    };
                    data?: Uint8Array;
                }): _251.QueryCodeResponse;
            };
            QueryCodesRequest: {
                encode(message: _251.QueryCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _251.QueryCodesRequest;
                fromJSON(object: any): _251.QueryCodesRequest;
                toJSON(message: _251.QueryCodesRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _251.QueryCodesRequest;
            };
            QueryCodesResponse: {
                encode(message: _251.QueryCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _251.QueryCodesResponse;
                fromJSON(object: any): _251.QueryCodesResponse;
                toJSON(message: _251.QueryCodesResponse): unknown;
                fromPartial(object: {
                    codeInfos?: {
                        codeId?: any;
                        creator?: string;
                        dataHash?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _251.QueryCodesResponse;
            };
            QueryPinnedCodesRequest: {
                encode(message: _251.QueryPinnedCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _251.QueryPinnedCodesRequest;
                fromJSON(object: any): _251.QueryPinnedCodesRequest;
                toJSON(message: _251.QueryPinnedCodesRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _251.QueryPinnedCodesRequest;
            };
            QueryPinnedCodesResponse: {
                encode(message: _251.QueryPinnedCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _251.QueryPinnedCodesResponse;
                fromJSON(object: any): _251.QueryPinnedCodesResponse;
                toJSON(message: _251.QueryPinnedCodesResponse): unknown;
                fromPartial(object: {
                    codeIds?: any[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _251.QueryPinnedCodesResponse;
            };
            StoreCodeProposal: {
                encode(message: _250.StoreCodeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _250.StoreCodeProposal;
                fromJSON(object: any): _250.StoreCodeProposal;
                toJSON(message: _250.StoreCodeProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    runAs?: string;
                    wasmByteCode?: Uint8Array;
                    instantiatePermission?: {
                        permission?: _253.AccessType;
                        address?: string;
                    };
                }): _250.StoreCodeProposal;
            };
            InstantiateContractProposal: {
                encode(message: _250.InstantiateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _250.InstantiateContractProposal;
                fromJSON(object: any): _250.InstantiateContractProposal;
                toJSON(message: _250.InstantiateContractProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    runAs?: string;
                    admin?: string;
                    codeId?: any;
                    label?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _250.InstantiateContractProposal;
            };
            MigrateContractProposal: {
                encode(message: _250.MigrateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _250.MigrateContractProposal;
                fromJSON(object: any): _250.MigrateContractProposal;
                toJSON(message: _250.MigrateContractProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                    codeId?: any;
                    msg?: Uint8Array;
                }): _250.MigrateContractProposal;
            };
            SudoContractProposal: {
                encode(message: _250.SudoContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _250.SudoContractProposal;
                fromJSON(object: any): _250.SudoContractProposal;
                toJSON(message: _250.SudoContractProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                    msg?: Uint8Array;
                }): _250.SudoContractProposal;
            };
            ExecuteContractProposal: {
                encode(message: _250.ExecuteContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _250.ExecuteContractProposal;
                fromJSON(object: any): _250.ExecuteContractProposal;
                toJSON(message: _250.ExecuteContractProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    runAs?: string;
                    contract?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _250.ExecuteContractProposal;
            };
            UpdateAdminProposal: {
                encode(message: _250.UpdateAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _250.UpdateAdminProposal;
                fromJSON(object: any): _250.UpdateAdminProposal;
                toJSON(message: _250.UpdateAdminProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    newAdmin?: string;
                    contract?: string;
                }): _250.UpdateAdminProposal;
            };
            ClearAdminProposal: {
                encode(message: _250.ClearAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _250.ClearAdminProposal;
                fromJSON(object: any): _250.ClearAdminProposal;
                toJSON(message: _250.ClearAdminProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                }): _250.ClearAdminProposal;
            };
            PinCodesProposal: {
                encode(message: _250.PinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _250.PinCodesProposal;
                fromJSON(object: any): _250.PinCodesProposal;
                toJSON(message: _250.PinCodesProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    codeIds?: any[];
                }): _250.PinCodesProposal;
            };
            UnpinCodesProposal: {
                encode(message: _250.UnpinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _250.UnpinCodesProposal;
                fromJSON(object: any): _250.UnpinCodesProposal;
                toJSON(message: _250.UnpinCodesProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    codeIds?: any[];
                }): _250.UnpinCodesProposal;
            };
            MsgIBCSend: {
                encode(message: _249.MsgIBCSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _249.MsgIBCSend;
                fromJSON(object: any): _249.MsgIBCSend;
                toJSON(message: _249.MsgIBCSend): unknown;
                fromPartial(object: {
                    channel?: string;
                    timeoutHeight?: any;
                    timeoutTimestamp?: any;
                    data?: Uint8Array;
                }): _249.MsgIBCSend;
            };
            MsgIBCCloseChannel: {
                encode(message: _249.MsgIBCCloseChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _249.MsgIBCCloseChannel;
                fromJSON(object: any): _249.MsgIBCCloseChannel;
                toJSON(message: _249.MsgIBCCloseChannel): unknown;
                fromPartial(object: {
                    channel?: string;
                }): _249.MsgIBCCloseChannel;
            };
            GenesisState: {
                encode(message: _248.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _248.GenesisState;
                fromJSON(object: any): _248.GenesisState;
                toJSON(message: _248.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        codeUploadAccess?: {
                            permission?: _253.AccessType;
                            address?: string;
                        };
                        instantiateDefaultPermission?: _253.AccessType;
                        maxWasmCodeSize?: any;
                    };
                    codes?: {
                        codeId?: any;
                        codeInfo?: {
                            codeHash?: Uint8Array;
                            creator?: string;
                            instantiateConfig?: {
                                permission?: _253.AccessType;
                                address?: string;
                            };
                        };
                        codeBytes?: Uint8Array;
                        pinned?: boolean;
                    }[];
                    contracts?: {
                        contractAddress?: string;
                        contractInfo?: {
                            codeId?: any;
                            creator?: string;
                            admin?: string;
                            label?: string;
                            created?: {
                                blockHeight?: any;
                                txIndex?: any;
                            };
                            ibcPortId?: string;
                            extension?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                        contractState?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[];
                    }[];
                    sequences?: {
                        idKey?: Uint8Array;
                        value?: any;
                    }[];
                    genMsgs?: {
                        storeCode?: {
                            sender?: string;
                            wasmByteCode?: Uint8Array;
                            instantiatePermission?: {
                                permission?: _253.AccessType;
                                address?: string;
                            };
                        };
                        instantiateContract?: {
                            sender?: string;
                            admin?: string;
                            codeId?: any;
                            label?: string;
                            msg?: Uint8Array;
                            funds?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                        executeContract?: {
                            sender?: string;
                            contract?: string;
                            msg?: Uint8Array;
                            funds?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                    }[];
                }): _248.GenesisState;
            };
            GenesisState_GenMsgs: {
                encode(message: _248.GenesisState_GenMsgs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _248.GenesisState_GenMsgs;
                fromJSON(object: any): _248.GenesisState_GenMsgs;
                toJSON(message: _248.GenesisState_GenMsgs): unknown;
                fromPartial(object: {
                    storeCode?: {
                        sender?: string;
                        wasmByteCode?: Uint8Array;
                        instantiatePermission?: {
                            permission?: _253.AccessType;
                            address?: string;
                        };
                    };
                    instantiateContract?: {
                        sender?: string;
                        admin?: string;
                        codeId?: any;
                        label?: string;
                        msg?: Uint8Array;
                        funds?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                    executeContract?: {
                        sender?: string;
                        contract?: string;
                        msg?: Uint8Array;
                        funds?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _248.GenesisState_GenMsgs;
            };
            Code: {
                encode(message: _248.Code, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _248.Code;
                fromJSON(object: any): _248.Code;
                toJSON(message: _248.Code): unknown;
                fromPartial(object: {
                    codeId?: any;
                    codeInfo?: {
                        codeHash?: Uint8Array;
                        creator?: string;
                        instantiateConfig?: {
                            permission?: _253.AccessType;
                            address?: string;
                        };
                    };
                    codeBytes?: Uint8Array;
                    pinned?: boolean;
                }): _248.Code;
            };
            Contract: {
                encode(message: _248.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _248.Contract;
                fromJSON(object: any): _248.Contract;
                toJSON(message: _248.Contract): unknown;
                fromPartial(object: {
                    contractAddress?: string;
                    contractInfo?: {
                        codeId?: any;
                        creator?: string;
                        admin?: string;
                        label?: string;
                        created?: {
                            blockHeight?: any;
                            txIndex?: any;
                        };
                        ibcPortId?: string;
                        extension?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                    contractState?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }[];
                }): _248.Contract;
            };
            Sequence: {
                encode(message: _248.Sequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _248.Sequence;
                fromJSON(object: any): _248.Sequence;
                toJSON(message: _248.Sequence): unknown;
                fromPartial(object: {
                    idKey?: Uint8Array;
                    value?: any;
                }): _248.Sequence;
            };
        };
    }
}
