import * as _180 from "./wasm/v1/genesis";
import * as _181 from "./wasm/v1/ibc";
import * as _182 from "./wasm/v1/proposal";
import * as _183 from "./wasm/v1/query";
import * as _184 from "./wasm/v1/tx";
import * as _185 from "./wasm/v1/types";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _184.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract(value: _184.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContract(value: _184.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    migrateContract(value: _184.MsgMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateAdmin(value: _184.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clearAdmin(value: _184.MsgClearAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _184.MsgStoreCode): {
                        typeUrl: string;
                        value: _184.MsgStoreCode;
                    };
                    instantiateContract(value: _184.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _184.MsgInstantiateContract;
                    };
                    executeContract(value: _184.MsgExecuteContract): {
                        typeUrl: string;
                        value: _184.MsgExecuteContract;
                    };
                    migrateContract(value: _184.MsgMigrateContract): {
                        typeUrl: string;
                        value: _184.MsgMigrateContract;
                    };
                    updateAdmin(value: _184.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _184.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _184.MsgClearAdmin): {
                        typeUrl: string;
                        value: _184.MsgClearAdmin;
                    };
                };
                toJSON: {
                    storeCode(value: _184.MsgStoreCode): {
                        typeUrl: string;
                        value: unknown;
                    };
                    instantiateContract(value: _184.MsgInstantiateContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    executeContract(value: _184.MsgExecuteContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    migrateContract(value: _184.MsgMigrateContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateAdmin(value: _184.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    clearAdmin(value: _184.MsgClearAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    storeCode(value: any): {
                        typeUrl: string;
                        value: _184.MsgStoreCode;
                    };
                    instantiateContract(value: any): {
                        typeUrl: string;
                        value: _184.MsgInstantiateContract;
                    };
                    executeContract(value: any): {
                        typeUrl: string;
                        value: _184.MsgExecuteContract;
                    };
                    migrateContract(value: any): {
                        typeUrl: string;
                        value: _184.MsgMigrateContract;
                    };
                    updateAdmin(value: any): {
                        typeUrl: string;
                        value: _184.MsgUpdateAdmin;
                    };
                    clearAdmin(value: any): {
                        typeUrl: string;
                        value: _184.MsgClearAdmin;
                    };
                };
                fromPartial: {
                    storeCode(value: _184.MsgStoreCode): {
                        typeUrl: string;
                        value: _184.MsgStoreCode;
                    };
                    instantiateContract(value: _184.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _184.MsgInstantiateContract;
                    };
                    executeContract(value: _184.MsgExecuteContract): {
                        typeUrl: string;
                        value: _184.MsgExecuteContract;
                    };
                    migrateContract(value: _184.MsgMigrateContract): {
                        typeUrl: string;
                        value: _184.MsgMigrateContract;
                    };
                    updateAdmin(value: _184.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _184.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _184.MsgClearAdmin): {
                        typeUrl: string;
                        value: _184.MsgClearAdmin;
                    };
                };
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: ({ sender, wasmByteCode, instantiatePermission }: _184.MsgStoreCode) => {
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
                    }) => _184.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: ({ sender, admin, codeId, label, msg, funds }: _184.MsgInstantiateContract) => {
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
                    }) => _184.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, msg, funds }: _184.MsgExecuteContract) => {
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
                    }) => _184.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, codeId, msg }: _184.MsgMigrateContract) => {
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
                    }) => _184.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, newAdmin, contract }: _184.MsgUpdateAdmin) => {
                        sender: string;
                        new_admin: string;
                        contract: string;
                    };
                    fromAmino: ({ sender, new_admin, contract }: {
                        sender: string;
                        new_admin: string;
                        contract: string;
                    }) => _184.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, contract }: _184.MsgClearAdmin) => {
                        sender: string;
                        contract: string;
                    };
                    fromAmino: ({ sender, contract }: {
                        sender: string;
                        contract: string;
                    }) => _184.MsgClearAdmin;
                };
            };
            accessTypeFromJSON(object: any): _185.AccessType;
            accessTypeToJSON(object: _185.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _185.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _185.ContractCodeHistoryOperationType): string;
            AccessType: typeof _185.AccessType;
            ContractCodeHistoryOperationType: typeof _185.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                encode(message: _185.AccessTypeParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.AccessTypeParam;
                fromJSON(object: any): _185.AccessTypeParam;
                toJSON(message: _185.AccessTypeParam): unknown;
                fromPartial(object: {
                    value?: _185.AccessType;
                }): _185.AccessTypeParam;
            };
            AccessConfig: {
                encode(message: _185.AccessConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.AccessConfig;
                fromJSON(object: any): _185.AccessConfig;
                toJSON(message: _185.AccessConfig): unknown;
                fromPartial(object: {
                    permission?: _185.AccessType;
                    address?: string;
                }): _185.AccessConfig;
            };
            Params: {
                encode(message: _185.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.Params;
                fromJSON(object: any): _185.Params;
                toJSON(message: _185.Params): unknown;
                fromPartial(object: {
                    codeUploadAccess?: {
                        permission?: _185.AccessType;
                        address?: string;
                    };
                    instantiateDefaultPermission?: _185.AccessType;
                    maxWasmCodeSize?: any;
                }): _185.Params;
            };
            CodeInfo: {
                encode(message: _185.CodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.CodeInfo;
                fromJSON(object: any): _185.CodeInfo;
                toJSON(message: _185.CodeInfo): unknown;
                fromPartial(object: {
                    codeHash?: Uint8Array;
                    creator?: string;
                    instantiateConfig?: {
                        permission?: _185.AccessType;
                        address?: string;
                    };
                }): _185.CodeInfo;
            };
            ContractInfo: {
                encode(message: _185.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.ContractInfo;
                fromJSON(object: any): _185.ContractInfo;
                toJSON(message: _185.ContractInfo): unknown;
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
                }): _185.ContractInfo;
            };
            ContractCodeHistoryEntry: {
                encode(message: _185.ContractCodeHistoryEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.ContractCodeHistoryEntry;
                fromJSON(object: any): _185.ContractCodeHistoryEntry;
                toJSON(message: _185.ContractCodeHistoryEntry): unknown;
                fromPartial(object: {
                    operation?: _185.ContractCodeHistoryOperationType;
                    codeId?: any;
                    updated?: {
                        blockHeight?: any;
                        txIndex?: any;
                    };
                    msg?: Uint8Array;
                }): _185.ContractCodeHistoryEntry;
            };
            AbsoluteTxPosition: {
                encode(message: _185.AbsoluteTxPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.AbsoluteTxPosition;
                fromJSON(object: any): _185.AbsoluteTxPosition;
                toJSON(message: _185.AbsoluteTxPosition): unknown;
                fromPartial(object: {
                    blockHeight?: any;
                    txIndex?: any;
                }): _185.AbsoluteTxPosition;
            };
            Model: {
                encode(message: _185.Model, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.Model;
                fromJSON(object: any): _185.Model;
                toJSON(message: _185.Model): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                }): _185.Model;
            };
            MsgStoreCode: {
                encode(message: _184.MsgStoreCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.MsgStoreCode;
                fromJSON(object: any): _184.MsgStoreCode;
                toJSON(message: _184.MsgStoreCode): unknown;
                fromPartial(object: {
                    sender?: string;
                    wasmByteCode?: Uint8Array;
                    instantiatePermission?: {
                        permission?: _185.AccessType;
                        address?: string;
                    };
                }): _184.MsgStoreCode;
            };
            MsgStoreCodeResponse: {
                encode(message: _184.MsgStoreCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.MsgStoreCodeResponse;
                fromJSON(object: any): _184.MsgStoreCodeResponse;
                toJSON(message: _184.MsgStoreCodeResponse): unknown;
                fromPartial(object: {
                    codeId?: any;
                }): _184.MsgStoreCodeResponse;
            };
            MsgInstantiateContract: {
                encode(message: _184.MsgInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.MsgInstantiateContract;
                fromJSON(object: any): _184.MsgInstantiateContract;
                toJSON(message: _184.MsgInstantiateContract): unknown;
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
                }): _184.MsgInstantiateContract;
            };
            MsgInstantiateContractResponse: {
                encode(message: _184.MsgInstantiateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.MsgInstantiateContractResponse;
                fromJSON(object: any): _184.MsgInstantiateContractResponse;
                toJSON(message: _184.MsgInstantiateContractResponse): unknown;
                fromPartial(object: {
                    address?: string;
                    data?: Uint8Array;
                }): _184.MsgInstantiateContractResponse;
            };
            MsgExecuteContract: {
                encode(message: _184.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.MsgExecuteContract;
                fromJSON(object: any): _184.MsgExecuteContract;
                toJSON(message: _184.MsgExecuteContract): unknown;
                fromPartial(object: {
                    sender?: string;
                    contract?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _184.MsgExecuteContract;
            };
            MsgExecuteContractResponse: {
                encode(message: _184.MsgExecuteContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.MsgExecuteContractResponse;
                fromJSON(object: any): _184.MsgExecuteContractResponse;
                toJSON(message: _184.MsgExecuteContractResponse): unknown;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _184.MsgExecuteContractResponse;
            };
            MsgMigrateContract: {
                encode(message: _184.MsgMigrateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.MsgMigrateContract;
                fromJSON(object: any): _184.MsgMigrateContract;
                toJSON(message: _184.MsgMigrateContract): unknown;
                fromPartial(object: {
                    sender?: string;
                    contract?: string;
                    codeId?: any;
                    msg?: Uint8Array;
                }): _184.MsgMigrateContract;
            };
            MsgMigrateContractResponse: {
                encode(message: _184.MsgMigrateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.MsgMigrateContractResponse;
                fromJSON(object: any): _184.MsgMigrateContractResponse;
                toJSON(message: _184.MsgMigrateContractResponse): unknown;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _184.MsgMigrateContractResponse;
            };
            MsgUpdateAdmin: {
                encode(message: _184.MsgUpdateAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.MsgUpdateAdmin;
                fromJSON(object: any): _184.MsgUpdateAdmin;
                toJSON(message: _184.MsgUpdateAdmin): unknown;
                fromPartial(object: {
                    sender?: string;
                    newAdmin?: string;
                    contract?: string;
                }): _184.MsgUpdateAdmin;
            };
            MsgUpdateAdminResponse: {
                encode(_: _184.MsgUpdateAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.MsgUpdateAdminResponse;
                fromJSON(_: any): _184.MsgUpdateAdminResponse;
                toJSON(_: _184.MsgUpdateAdminResponse): unknown;
                fromPartial(_: {}): _184.MsgUpdateAdminResponse;
            };
            MsgClearAdmin: {
                encode(message: _184.MsgClearAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.MsgClearAdmin;
                fromJSON(object: any): _184.MsgClearAdmin;
                toJSON(message: _184.MsgClearAdmin): unknown;
                fromPartial(object: {
                    sender?: string;
                    contract?: string;
                }): _184.MsgClearAdmin;
            };
            MsgClearAdminResponse: {
                encode(_: _184.MsgClearAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.MsgClearAdminResponse;
                fromJSON(_: any): _184.MsgClearAdminResponse;
                toJSON(_: _184.MsgClearAdminResponse): unknown;
                fromPartial(_: {}): _184.MsgClearAdminResponse;
            };
            QueryContractInfoRequest: {
                encode(message: _183.QueryContractInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QueryContractInfoRequest;
                fromJSON(object: any): _183.QueryContractInfoRequest;
                toJSON(message: _183.QueryContractInfoRequest): unknown;
                fromPartial(object: {
                    address?: string;
                }): _183.QueryContractInfoRequest;
            };
            QueryContractInfoResponse: {
                encode(message: _183.QueryContractInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QueryContractInfoResponse;
                fromJSON(object: any): _183.QueryContractInfoResponse;
                toJSON(message: _183.QueryContractInfoResponse): unknown;
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
                }): _183.QueryContractInfoResponse;
            };
            QueryContractHistoryRequest: {
                encode(message: _183.QueryContractHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QueryContractHistoryRequest;
                fromJSON(object: any): _183.QueryContractHistoryRequest;
                toJSON(message: _183.QueryContractHistoryRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _183.QueryContractHistoryRequest;
            };
            QueryContractHistoryResponse: {
                encode(message: _183.QueryContractHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QueryContractHistoryResponse;
                fromJSON(object: any): _183.QueryContractHistoryResponse;
                toJSON(message: _183.QueryContractHistoryResponse): unknown;
                fromPartial(object: {
                    entries?: {
                        operation?: _185.ContractCodeHistoryOperationType;
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
                }): _183.QueryContractHistoryResponse;
            };
            QueryContractsByCodeRequest: {
                encode(message: _183.QueryContractsByCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QueryContractsByCodeRequest;
                fromJSON(object: any): _183.QueryContractsByCodeRequest;
                toJSON(message: _183.QueryContractsByCodeRequest): unknown;
                fromPartial(object: {
                    codeId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _183.QueryContractsByCodeRequest;
            };
            QueryContractsByCodeResponse: {
                encode(message: _183.QueryContractsByCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QueryContractsByCodeResponse;
                fromJSON(object: any): _183.QueryContractsByCodeResponse;
                toJSON(message: _183.QueryContractsByCodeResponse): unknown;
                fromPartial(object: {
                    contracts?: string[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _183.QueryContractsByCodeResponse;
            };
            QueryAllContractStateRequest: {
                encode(message: _183.QueryAllContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QueryAllContractStateRequest;
                fromJSON(object: any): _183.QueryAllContractStateRequest;
                toJSON(message: _183.QueryAllContractStateRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _183.QueryAllContractStateRequest;
            };
            QueryAllContractStateResponse: {
                encode(message: _183.QueryAllContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QueryAllContractStateResponse;
                fromJSON(object: any): _183.QueryAllContractStateResponse;
                toJSON(message: _183.QueryAllContractStateResponse): unknown;
                fromPartial(object: {
                    models?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _183.QueryAllContractStateResponse;
            };
            QueryRawContractStateRequest: {
                encode(message: _183.QueryRawContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QueryRawContractStateRequest;
                fromJSON(object: any): _183.QueryRawContractStateRequest;
                toJSON(message: _183.QueryRawContractStateRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    queryData?: Uint8Array;
                }): _183.QueryRawContractStateRequest;
            };
            QueryRawContractStateResponse: {
                encode(message: _183.QueryRawContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QueryRawContractStateResponse;
                fromJSON(object: any): _183.QueryRawContractStateResponse;
                toJSON(message: _183.QueryRawContractStateResponse): unknown;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _183.QueryRawContractStateResponse;
            };
            QuerySmartContractStateRequest: {
                encode(message: _183.QuerySmartContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QuerySmartContractStateRequest;
                fromJSON(object: any): _183.QuerySmartContractStateRequest;
                toJSON(message: _183.QuerySmartContractStateRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    queryData?: Uint8Array;
                }): _183.QuerySmartContractStateRequest;
            };
            QuerySmartContractStateResponse: {
                encode(message: _183.QuerySmartContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QuerySmartContractStateResponse;
                fromJSON(object: any): _183.QuerySmartContractStateResponse;
                toJSON(message: _183.QuerySmartContractStateResponse): unknown;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _183.QuerySmartContractStateResponse;
            };
            QueryCodeRequest: {
                encode(message: _183.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QueryCodeRequest;
                fromJSON(object: any): _183.QueryCodeRequest;
                toJSON(message: _183.QueryCodeRequest): unknown;
                fromPartial(object: {
                    codeId?: any;
                }): _183.QueryCodeRequest;
            };
            CodeInfoResponse: {
                encode(message: _183.CodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.CodeInfoResponse;
                fromJSON(object: any): _183.CodeInfoResponse;
                toJSON(message: _183.CodeInfoResponse): unknown;
                fromPartial(object: {
                    codeId?: any;
                    creator?: string;
                    dataHash?: Uint8Array;
                }): _183.CodeInfoResponse;
            };
            QueryCodeResponse: {
                encode(message: _183.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QueryCodeResponse;
                fromJSON(object: any): _183.QueryCodeResponse;
                toJSON(message: _183.QueryCodeResponse): unknown;
                fromPartial(object: {
                    codeInfo?: {
                        codeId?: any;
                        creator?: string;
                        dataHash?: Uint8Array;
                    };
                    data?: Uint8Array;
                }): _183.QueryCodeResponse;
            };
            QueryCodesRequest: {
                encode(message: _183.QueryCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QueryCodesRequest;
                fromJSON(object: any): _183.QueryCodesRequest;
                toJSON(message: _183.QueryCodesRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _183.QueryCodesRequest;
            };
            QueryCodesResponse: {
                encode(message: _183.QueryCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QueryCodesResponse;
                fromJSON(object: any): _183.QueryCodesResponse;
                toJSON(message: _183.QueryCodesResponse): unknown;
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
                }): _183.QueryCodesResponse;
            };
            QueryPinnedCodesRequest: {
                encode(message: _183.QueryPinnedCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QueryPinnedCodesRequest;
                fromJSON(object: any): _183.QueryPinnedCodesRequest;
                toJSON(message: _183.QueryPinnedCodesRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _183.QueryPinnedCodesRequest;
            };
            QueryPinnedCodesResponse: {
                encode(message: _183.QueryPinnedCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QueryPinnedCodesResponse;
                fromJSON(object: any): _183.QueryPinnedCodesResponse;
                toJSON(message: _183.QueryPinnedCodesResponse): unknown;
                fromPartial(object: {
                    codeIds?: any[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _183.QueryPinnedCodesResponse;
            };
            StoreCodeProposal: {
                encode(message: _182.StoreCodeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.StoreCodeProposal;
                fromJSON(object: any): _182.StoreCodeProposal;
                toJSON(message: _182.StoreCodeProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    runAs?: string;
                    wasmByteCode?: Uint8Array;
                    instantiatePermission?: {
                        permission?: _185.AccessType;
                        address?: string;
                    };
                }): _182.StoreCodeProposal;
            };
            InstantiateContractProposal: {
                encode(message: _182.InstantiateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.InstantiateContractProposal;
                fromJSON(object: any): _182.InstantiateContractProposal;
                toJSON(message: _182.InstantiateContractProposal): unknown;
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
                }): _182.InstantiateContractProposal;
            };
            MigrateContractProposal: {
                encode(message: _182.MigrateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.MigrateContractProposal;
                fromJSON(object: any): _182.MigrateContractProposal;
                toJSON(message: _182.MigrateContractProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                    codeId?: any;
                    msg?: Uint8Array;
                }): _182.MigrateContractProposal;
            };
            SudoContractProposal: {
                encode(message: _182.SudoContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.SudoContractProposal;
                fromJSON(object: any): _182.SudoContractProposal;
                toJSON(message: _182.SudoContractProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                    msg?: Uint8Array;
                }): _182.SudoContractProposal;
            };
            ExecuteContractProposal: {
                encode(message: _182.ExecuteContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.ExecuteContractProposal;
                fromJSON(object: any): _182.ExecuteContractProposal;
                toJSON(message: _182.ExecuteContractProposal): unknown;
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
                }): _182.ExecuteContractProposal;
            };
            UpdateAdminProposal: {
                encode(message: _182.UpdateAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.UpdateAdminProposal;
                fromJSON(object: any): _182.UpdateAdminProposal;
                toJSON(message: _182.UpdateAdminProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    newAdmin?: string;
                    contract?: string;
                }): _182.UpdateAdminProposal;
            };
            ClearAdminProposal: {
                encode(message: _182.ClearAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.ClearAdminProposal;
                fromJSON(object: any): _182.ClearAdminProposal;
                toJSON(message: _182.ClearAdminProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                }): _182.ClearAdminProposal;
            };
            PinCodesProposal: {
                encode(message: _182.PinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.PinCodesProposal;
                fromJSON(object: any): _182.PinCodesProposal;
                toJSON(message: _182.PinCodesProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    codeIds?: any[];
                }): _182.PinCodesProposal;
            };
            UnpinCodesProposal: {
                encode(message: _182.UnpinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.UnpinCodesProposal;
                fromJSON(object: any): _182.UnpinCodesProposal;
                toJSON(message: _182.UnpinCodesProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    codeIds?: any[];
                }): _182.UnpinCodesProposal;
            };
            MsgIBCSend: {
                encode(message: _181.MsgIBCSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.MsgIBCSend;
                fromJSON(object: any): _181.MsgIBCSend;
                toJSON(message: _181.MsgIBCSend): unknown;
                fromPartial(object: {
                    channel?: string;
                    timeoutHeight?: any;
                    timeoutTimestamp?: any;
                    data?: Uint8Array;
                }): _181.MsgIBCSend;
            };
            MsgIBCCloseChannel: {
                encode(message: _181.MsgIBCCloseChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.MsgIBCCloseChannel;
                fromJSON(object: any): _181.MsgIBCCloseChannel;
                toJSON(message: _181.MsgIBCCloseChannel): unknown;
                fromPartial(object: {
                    channel?: string;
                }): _181.MsgIBCCloseChannel;
            };
            GenesisState: {
                encode(message: _180.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.GenesisState;
                fromJSON(object: any): _180.GenesisState;
                toJSON(message: _180.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        codeUploadAccess?: {
                            permission?: _185.AccessType;
                            address?: string;
                        };
                        instantiateDefaultPermission?: _185.AccessType;
                        maxWasmCodeSize?: any;
                    };
                    codes?: {
                        codeId?: any;
                        codeInfo?: {
                            codeHash?: Uint8Array;
                            creator?: string;
                            instantiateConfig?: {
                                permission?: _185.AccessType;
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
                                permission?: _185.AccessType;
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
                }): _180.GenesisState;
            };
            GenesisState_GenMsgs: {
                encode(message: _180.GenesisState_GenMsgs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.GenesisState_GenMsgs;
                fromJSON(object: any): _180.GenesisState_GenMsgs;
                toJSON(message: _180.GenesisState_GenMsgs): unknown;
                fromPartial(object: {
                    storeCode?: {
                        sender?: string;
                        wasmByteCode?: Uint8Array;
                        instantiatePermission?: {
                            permission?: _185.AccessType;
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
                }): _180.GenesisState_GenMsgs;
            };
            Code: {
                encode(message: _180.Code, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.Code;
                fromJSON(object: any): _180.Code;
                toJSON(message: _180.Code): unknown;
                fromPartial(object: {
                    codeId?: any;
                    codeInfo?: {
                        codeHash?: Uint8Array;
                        creator?: string;
                        instantiateConfig?: {
                            permission?: _185.AccessType;
                            address?: string;
                        };
                    };
                    codeBytes?: Uint8Array;
                    pinned?: boolean;
                }): _180.Code;
            };
            Contract: {
                encode(message: _180.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.Contract;
                fromJSON(object: any): _180.Contract;
                toJSON(message: _180.Contract): unknown;
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
                }): _180.Contract;
            };
            Sequence: {
                encode(message: _180.Sequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.Sequence;
                fromJSON(object: any): _180.Sequence;
                toJSON(message: _180.Sequence): unknown;
                fromPartial(object: {
                    idKey?: Uint8Array;
                    value?: any;
                }): _180.Sequence;
            };
        };
    }
}
