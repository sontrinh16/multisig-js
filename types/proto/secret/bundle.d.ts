import * as _668 from "./compute/v1beta1/genesis";
import * as _669 from "./compute/v1beta1/msg";
import * as _670 from "./compute/v1beta1/query";
import * as _671 from "./compute/v1beta1/types";
import * as _672 from "./intertx/v1beta1/query";
import * as _673 from "./intertx/v1beta1/tx";
import * as _674 from "./registration/v1beta1/genesis";
import * as _675 from "./registration/v1beta1/msg";
import * as _676 from "./registration/v1beta1/query";
import * as _677 from "./registration/v1beta1/types";
import * as _678 from "./registration/v1beta1/remote_attestation/types";
export declare namespace secret {
    namespace compute {
        const v1beta1: {
            accessTypeFromJSON(object: any): _671.AccessType;
            accessTypeToJSON(object: _671.AccessType): string;
            AccessType: typeof _671.AccessType;
            AccessTypeParam: {
                encode(message: _671.AccessTypeParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _671.AccessTypeParam;
                fromJSON(object: any): _671.AccessTypeParam;
                toJSON(message: _671.AccessTypeParam): unknown;
                fromPartial(object: {
                    value?: _671.AccessType;
                }): _671.AccessTypeParam;
            };
            CodeInfo: {
                encode(message: _671.CodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _671.CodeInfo;
                fromJSON(object: any): _671.CodeInfo;
                toJSON(message: _671.CodeInfo): unknown;
                fromPartial(object: {
                    codeHash?: Uint8Array;
                    creator?: Uint8Array;
                    source?: string;
                    builder?: string;
                }): _671.CodeInfo;
            };
            ContractCustomInfo: {
                encode(message: _671.ContractCustomInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _671.ContractCustomInfo;
                fromJSON(object: any): _671.ContractCustomInfo;
                toJSON(message: _671.ContractCustomInfo): unknown;
                fromPartial(object: {
                    enclaveKey?: Uint8Array;
                    label?: string;
                }): _671.ContractCustomInfo;
            };
            ContractInfo: {
                encode(message: _671.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _671.ContractInfo;
                fromJSON(object: any): _671.ContractInfo;
                toJSON(message: _671.ContractInfo): unknown;
                fromPartial(object: {
                    codeId?: any;
                    creator?: Uint8Array;
                    label?: string;
                    created?: {
                        blockHeight?: any;
                        txIndex?: any;
                    };
                }): _671.ContractInfo;
            };
            AbsoluteTxPosition: {
                encode(message: _671.AbsoluteTxPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _671.AbsoluteTxPosition;
                fromJSON(object: any): _671.AbsoluteTxPosition;
                toJSON(message: _671.AbsoluteTxPosition): unknown;
                fromPartial(object: {
                    blockHeight?: any;
                    txIndex?: any;
                }): _671.AbsoluteTxPosition;
            };
            Model: {
                encode(message: _671.Model, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _671.Model;
                fromJSON(object: any): _671.Model;
                toJSON(message: _671.Model): unknown;
                fromPartial(object: {
                    Key?: Uint8Array;
                    Value?: Uint8Array;
                }): _671.Model;
            };
            QueryContractInfoRequest: {
                encode(message: _670.QueryContractInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _670.QueryContractInfoRequest;
                fromJSON(object: any): _670.QueryContractInfoRequest;
                toJSON(message: _670.QueryContractInfoRequest): unknown;
                fromPartial(object: {
                    address?: Uint8Array;
                }): _670.QueryContractInfoRequest;
            };
            QueryContractInfoResponse: {
                encode(message: _670.QueryContractInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _670.QueryContractInfoResponse;
                fromJSON(object: any): _670.QueryContractInfoResponse;
                toJSON(message: _670.QueryContractInfoResponse): unknown;
                fromPartial(object: {
                    address?: Uint8Array;
                    ContractInfo?: {
                        codeId?: any;
                        creator?: Uint8Array;
                        label?: string;
                        created?: {
                            blockHeight?: any;
                            txIndex?: any;
                        };
                    };
                }): _670.QueryContractInfoResponse;
            };
            QueryContractHistoryRequest: {
                encode(message: _670.QueryContractHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _670.QueryContractHistoryRequest;
                fromJSON(object: any): _670.QueryContractHistoryRequest;
                toJSON(message: _670.QueryContractHistoryRequest): unknown;
                fromPartial(object: {
                    address?: Uint8Array;
                }): _670.QueryContractHistoryRequest;
            };
            QueryContractsByCodeRequest: {
                encode(message: _670.QueryContractsByCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _670.QueryContractsByCodeRequest;
                fromJSON(object: any): _670.QueryContractsByCodeRequest;
                toJSON(message: _670.QueryContractsByCodeRequest): unknown;
                fromPartial(object: {
                    codeId?: any;
                }): _670.QueryContractsByCodeRequest;
            };
            ContractInfoWithAddress: {
                encode(message: _670.ContractInfoWithAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _670.ContractInfoWithAddress;
                fromJSON(object: any): _670.ContractInfoWithAddress;
                toJSON(message: _670.ContractInfoWithAddress): unknown;
                fromPartial(object: {
                    address?: Uint8Array;
                    ContractInfo?: {
                        codeId?: any;
                        creator?: Uint8Array;
                        label?: string;
                        created?: {
                            blockHeight?: any;
                            txIndex?: any;
                        };
                    };
                }): _670.ContractInfoWithAddress;
            };
            QueryContractsByCodeResponse: {
                encode(message: _670.QueryContractsByCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _670.QueryContractsByCodeResponse;
                fromJSON(object: any): _670.QueryContractsByCodeResponse;
                toJSON(message: _670.QueryContractsByCodeResponse): unknown;
                fromPartial(object: {
                    contractInfos?: {
                        address?: Uint8Array;
                        ContractInfo?: {
                            codeId?: any;
                            creator?: Uint8Array;
                            label?: string;
                            created?: {
                                blockHeight?: any;
                                txIndex?: any;
                            };
                        };
                    }[];
                }): _670.QueryContractsByCodeResponse;
            };
            QuerySmartContractStateRequest: {
                encode(message: _670.QuerySmartContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _670.QuerySmartContractStateRequest;
                fromJSON(object: any): _670.QuerySmartContractStateRequest;
                toJSON(message: _670.QuerySmartContractStateRequest): unknown;
                fromPartial(object: {
                    address?: Uint8Array;
                    queryData?: Uint8Array;
                }): _670.QuerySmartContractStateRequest;
            };
            QueryContractAddressByLabelRequest: {
                encode(message: _670.QueryContractAddressByLabelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _670.QueryContractAddressByLabelRequest;
                fromJSON(object: any): _670.QueryContractAddressByLabelRequest;
                toJSON(message: _670.QueryContractAddressByLabelRequest): unknown;
                fromPartial(object: {
                    label?: string;
                }): _670.QueryContractAddressByLabelRequest;
            };
            QueryContractKeyRequest: {
                encode(message: _670.QueryContractKeyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _670.QueryContractKeyRequest;
                fromJSON(object: any): _670.QueryContractKeyRequest;
                toJSON(message: _670.QueryContractKeyRequest): unknown;
                fromPartial(object: {
                    address?: Uint8Array;
                }): _670.QueryContractKeyRequest;
            };
            QueryContractHashRequest: {
                encode(message: _670.QueryContractHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _670.QueryContractHashRequest;
                fromJSON(object: any): _670.QueryContractHashRequest;
                toJSON(message: _670.QueryContractHashRequest): unknown;
                fromPartial(object: {
                    address?: Uint8Array;
                }): _670.QueryContractHashRequest;
            };
            QuerySmartContractStateResponse: {
                encode(message: _670.QuerySmartContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _670.QuerySmartContractStateResponse;
                fromJSON(object: any): _670.QuerySmartContractStateResponse;
                toJSON(message: _670.QuerySmartContractStateResponse): unknown;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _670.QuerySmartContractStateResponse;
            };
            QueryCodeRequest: {
                encode(message: _670.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _670.QueryCodeRequest;
                fromJSON(object: any): _670.QueryCodeRequest;
                toJSON(message: _670.QueryCodeRequest): unknown;
                fromPartial(object: {
                    codeId?: any;
                }): _670.QueryCodeRequest;
            };
            CodeInfoResponse: {
                encode(message: _670.CodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _670.CodeInfoResponse;
                fromJSON(object: any): _670.CodeInfoResponse;
                toJSON(message: _670.CodeInfoResponse): unknown;
                fromPartial(object: {
                    codeId?: any;
                    creator?: Uint8Array;
                    dataHash?: Uint8Array;
                    source?: string;
                    builder?: string;
                }): _670.CodeInfoResponse;
            };
            QueryCodeResponse: {
                encode(message: _670.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _670.QueryCodeResponse;
                fromJSON(object: any): _670.QueryCodeResponse;
                toJSON(message: _670.QueryCodeResponse): unknown;
                fromPartial(object: {
                    codeInfo?: {
                        codeId?: any;
                        creator?: Uint8Array;
                        dataHash?: Uint8Array;
                        source?: string;
                        builder?: string;
                    };
                    data?: Uint8Array;
                }): _670.QueryCodeResponse;
            };
            QueryCodesResponse: {
                encode(message: _670.QueryCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _670.QueryCodesResponse;
                fromJSON(object: any): _670.QueryCodesResponse;
                toJSON(message: _670.QueryCodesResponse): unknown;
                fromPartial(object: {
                    codeInfos?: {
                        codeId?: any;
                        creator?: Uint8Array;
                        dataHash?: Uint8Array;
                        source?: string;
                        builder?: string;
                    }[];
                }): _670.QueryCodesResponse;
            };
            QueryContractAddressByLabelResponse: {
                encode(message: _670.QueryContractAddressByLabelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _670.QueryContractAddressByLabelResponse;
                fromJSON(object: any): _670.QueryContractAddressByLabelResponse;
                toJSON(message: _670.QueryContractAddressByLabelResponse): unknown;
                fromPartial(object: {
                    address?: Uint8Array;
                }): _670.QueryContractAddressByLabelResponse;
            };
            QueryContractKeyResponse: {
                encode(message: _670.QueryContractKeyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _670.QueryContractKeyResponse;
                fromJSON(object: any): _670.QueryContractKeyResponse;
                toJSON(message: _670.QueryContractKeyResponse): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _670.QueryContractKeyResponse;
            };
            QueryContractHashResponse: {
                encode(message: _670.QueryContractHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _670.QueryContractHashResponse;
                fromJSON(object: any): _670.QueryContractHashResponse;
                toJSON(message: _670.QueryContractHashResponse): unknown;
                fromPartial(object: {
                    codeHash?: Uint8Array;
                }): _670.QueryContractHashResponse;
            };
            DecryptedAnswer: {
                encode(message: _670.DecryptedAnswer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _670.DecryptedAnswer;
                fromJSON(object: any): _670.DecryptedAnswer;
                toJSON(message: _670.DecryptedAnswer): unknown;
                fromPartial(object: {
                    type?: string;
                    input?: string;
                    outputData?: string;
                    outputDataAsString?: string;
                    outputLogs?: {
                        type?: string;
                        attributes?: {
                            key?: string;
                            value?: string;
                        }[];
                    }[];
                    outputError?: Uint8Array;
                    plaintextError?: string;
                }): _670.DecryptedAnswer;
            };
            MsgStoreCode: {
                encode(message: _669.MsgStoreCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _669.MsgStoreCode;
                fromJSON(object: any): _669.MsgStoreCode;
                toJSON(message: _669.MsgStoreCode): unknown;
                fromPartial(object: {
                    sender?: Uint8Array;
                    wasmByteCode?: Uint8Array;
                    source?: string;
                    builder?: string;
                }): _669.MsgStoreCode;
            };
            MsgInstantiateContract: {
                encode(message: _669.MsgInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _669.MsgInstantiateContract;
                fromJSON(object: any): _669.MsgInstantiateContract;
                toJSON(message: _669.MsgInstantiateContract): unknown;
                fromPartial(object: {
                    sender?: Uint8Array;
                    callbackCodeHash?: string;
                    codeId?: any;
                    label?: string;
                    initMsg?: Uint8Array;
                    initFunds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    callbackSig?: Uint8Array;
                }): _669.MsgInstantiateContract;
            };
            MsgExecuteContract: {
                encode(message: _669.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _669.MsgExecuteContract;
                fromJSON(object: any): _669.MsgExecuteContract;
                toJSON(message: _669.MsgExecuteContract): unknown;
                fromPartial(object: {
                    sender?: Uint8Array;
                    contract?: Uint8Array;
                    msg?: Uint8Array;
                    callbackCodeHash?: string;
                    sentFunds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    callbackSig?: Uint8Array;
                }): _669.MsgExecuteContract;
            };
            GenesisState: {
                encode(message: _668.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _668.GenesisState;
                fromJSON(object: any): _668.GenesisState;
                toJSON(message: _668.GenesisState): unknown;
                fromPartial(object: {
                    codes?: {
                        codeId?: any;
                        codeInfo?: {
                            codeHash?: Uint8Array;
                            creator?: Uint8Array;
                            source?: string;
                            builder?: string;
                        };
                        codeBytes?: Uint8Array;
                    }[];
                    contracts?: {
                        contractAddress?: Uint8Array;
                        contractInfo?: {
                            codeId?: any;
                            creator?: Uint8Array;
                            label?: string;
                            created?: {
                                blockHeight?: any;
                                txIndex?: any;
                            };
                        };
                        contractState?: {
                            Key?: Uint8Array;
                            Value?: Uint8Array;
                        }[];
                        contractCustomInfo?: {
                            enclaveKey?: Uint8Array;
                            label?: string;
                        };
                    }[];
                    sequences?: {
                        idKey?: Uint8Array;
                        value?: any;
                    }[];
                }): _668.GenesisState;
            };
            Code: {
                encode(message: _668.Code, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _668.Code;
                fromJSON(object: any): _668.Code;
                toJSON(message: _668.Code): unknown;
                fromPartial(object: {
                    codeId?: any;
                    codeInfo?: {
                        codeHash?: Uint8Array;
                        creator?: Uint8Array;
                        source?: string;
                        builder?: string;
                    };
                    codeBytes?: Uint8Array;
                }): _668.Code;
            };
            Contract: {
                encode(message: _668.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _668.Contract;
                fromJSON(object: any): _668.Contract;
                toJSON(message: _668.Contract): unknown;
                fromPartial(object: {
                    contractAddress?: Uint8Array;
                    contractInfo?: {
                        codeId?: any;
                        creator?: Uint8Array;
                        label?: string;
                        created?: {
                            blockHeight?: any;
                            txIndex?: any;
                        };
                    };
                    contractState?: {
                        Key?: Uint8Array;
                        Value?: Uint8Array;
                    }[];
                    contractCustomInfo?: {
                        enclaveKey?: Uint8Array;
                        label?: string;
                    };
                }): _668.Contract;
            };
            Sequence: {
                encode(message: _668.Sequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _668.Sequence;
                fromJSON(object: any): _668.Sequence;
                toJSON(message: _668.Sequence): unknown;
                fromPartial(object: {
                    idKey?: Uint8Array;
                    value?: any;
                }): _668.Sequence;
            };
        };
    }
    namespace intertx {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    registerAccount(value: _673.MsgRegisterAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitTx(value: _673.MsgSubmitTx): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    registerAccount(value: _673.MsgRegisterAccount): {
                        typeUrl: string;
                        value: _673.MsgRegisterAccount;
                    };
                    submitTx(value: _673.MsgSubmitTx): {
                        typeUrl: string;
                        value: _673.MsgSubmitTx;
                    };
                };
                toJSON: {
                    registerAccount(value: _673.MsgRegisterAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    submitTx(value: _673.MsgSubmitTx): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    registerAccount(value: any): {
                        typeUrl: string;
                        value: _673.MsgRegisterAccount;
                    };
                    submitTx(value: any): {
                        typeUrl: string;
                        value: _673.MsgSubmitTx;
                    };
                };
                fromPartial: {
                    registerAccount(value: _673.MsgRegisterAccount): {
                        typeUrl: string;
                        value: _673.MsgRegisterAccount;
                    };
                    submitTx(value: _673.MsgSubmitTx): {
                        typeUrl: string;
                        value: _673.MsgSubmitTx;
                    };
                };
            };
            AminoConverter: {
                "/secret.intertx.v1beta1.MsgRegisterAccount": {
                    aminoType: string;
                    toAmino: ({ owner, connectionId }: _673.MsgRegisterAccount) => {
                        owner: string;
                        connection_id: string;
                    };
                    fromAmino: ({ owner, connection_id }: {
                        owner: string;
                        connection_id: string;
                    }) => _673.MsgRegisterAccount;
                };
                "/secret.intertx.v1beta1.MsgSubmitTx": {
                    aminoType: string;
                    toAmino: ({ owner, connectionId, msg }: _673.MsgSubmitTx) => {
                        owner: Uint8Array;
                        connection_id: string;
                        msg: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ owner, connection_id, msg }: {
                        owner: Uint8Array;
                        connection_id: string;
                        msg: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _673.MsgSubmitTx;
                };
            };
            MsgRegisterAccount: {
                encode(message: _673.MsgRegisterAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _673.MsgRegisterAccount;
                fromJSON(object: any): _673.MsgRegisterAccount;
                toJSON(message: _673.MsgRegisterAccount): unknown;
                fromPartial(object: {
                    owner?: string;
                    connectionId?: string;
                }): _673.MsgRegisterAccount;
            };
            MsgRegisterAccountResponse: {
                encode(_: _673.MsgRegisterAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _673.MsgRegisterAccountResponse;
                fromJSON(_: any): _673.MsgRegisterAccountResponse;
                toJSON(_: _673.MsgRegisterAccountResponse): unknown;
                fromPartial(_: {}): _673.MsgRegisterAccountResponse;
            };
            MsgSubmitTx: {
                encode(message: _673.MsgSubmitTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _673.MsgSubmitTx;
                fromJSON(object: any): _673.MsgSubmitTx;
                toJSON(message: _673.MsgSubmitTx): unknown;
                fromPartial(object: {
                    owner?: Uint8Array;
                    connectionId?: string;
                    msg?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _673.MsgSubmitTx;
            };
            MsgSubmitTxResponse: {
                encode(_: _673.MsgSubmitTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _673.MsgSubmitTxResponse;
                fromJSON(_: any): _673.MsgSubmitTxResponse;
                toJSON(_: _673.MsgSubmitTxResponse): unknown;
                fromPartial(_: {}): _673.MsgSubmitTxResponse;
            };
            QueryInterchainAccountFromAddressRequest: {
                encode(message: _672.QueryInterchainAccountFromAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _672.QueryInterchainAccountFromAddressRequest;
                fromJSON(object: any): _672.QueryInterchainAccountFromAddressRequest;
                toJSON(message: _672.QueryInterchainAccountFromAddressRequest): unknown;
                fromPartial(object: {
                    owner?: string;
                    connectionId?: string;
                }): _672.QueryInterchainAccountFromAddressRequest;
            };
            QueryInterchainAccountFromAddressResponse: {
                encode(message: _672.QueryInterchainAccountFromAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _672.QueryInterchainAccountFromAddressResponse;
                fromJSON(object: any): _672.QueryInterchainAccountFromAddressResponse;
                toJSON(message: _672.QueryInterchainAccountFromAddressResponse): unknown;
                fromPartial(object: {
                    interchainAccountAddress?: string;
                }): _672.QueryInterchainAccountFromAddressResponse;
            };
        };
    }
    namespace registration {
        const v1beta1: {
            SeedConfig: {
                encode(message: _677.SeedConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _677.SeedConfig;
                fromJSON(object: any): _677.SeedConfig;
                toJSON(message: _677.SeedConfig): unknown;
                fromPartial(object: {
                    masterCert?: string;
                    encryptedKey?: string;
                }): _677.SeedConfig;
            };
            RegistrationNodeInfo: {
                encode(message: _677.RegistrationNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _677.RegistrationNodeInfo;
                fromJSON(object: any): _677.RegistrationNodeInfo;
                toJSON(message: _677.RegistrationNodeInfo): unknown;
                fromPartial(object: {
                    certificate?: Uint8Array;
                    encryptedSeed?: Uint8Array;
                }): _677.RegistrationNodeInfo;
            };
            QueryEncryptedSeedRequest: {
                encode(message: _676.QueryEncryptedSeedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _676.QueryEncryptedSeedRequest;
                fromJSON(object: any): _676.QueryEncryptedSeedRequest;
                toJSON(message: _676.QueryEncryptedSeedRequest): unknown;
                fromPartial(object: {
                    pubKey?: Uint8Array;
                }): _676.QueryEncryptedSeedRequest;
            };
            QueryEncryptedSeedResponse: {
                encode(message: _676.QueryEncryptedSeedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _676.QueryEncryptedSeedResponse;
                fromJSON(object: any): _676.QueryEncryptedSeedResponse;
                toJSON(message: _676.QueryEncryptedSeedResponse): unknown;
                fromPartial(object: {
                    encryptedSeed?: Uint8Array;
                }): _676.QueryEncryptedSeedResponse;
            };
            RaAuthenticate: {
                encode(message: _675.RaAuthenticate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _675.RaAuthenticate;
                fromJSON(object: any): _675.RaAuthenticate;
                toJSON(message: _675.RaAuthenticate): unknown;
                fromPartial(object: {
                    sender?: Uint8Array;
                    certificate?: Uint8Array;
                }): _675.RaAuthenticate;
            };
            MasterCertificate: {
                encode(message: _675.MasterCertificate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _675.MasterCertificate;
                fromJSON(object: any): _675.MasterCertificate;
                toJSON(message: _675.MasterCertificate): unknown;
                fromPartial(object: {
                    bytes?: Uint8Array;
                }): _675.MasterCertificate;
            };
            Key: {
                encode(message: _675.Key, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _675.Key;
                fromJSON(object: any): _675.Key;
                toJSON(message: _675.Key): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _675.Key;
            };
            GenesisState: {
                encode(message: _674.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _674.GenesisState;
                fromJSON(object: any): _674.GenesisState;
                toJSON(message: _674.GenesisState): unknown;
                fromPartial(object: {
                    registration?: {
                        certificate?: Uint8Array;
                        encryptedSeed?: Uint8Array;
                    }[];
                    nodeExchMasterCertificate?: {
                        bytes?: Uint8Array;
                    };
                    ioMasterCertificate?: {
                        bytes?: Uint8Array;
                    };
                }): _674.GenesisState;
            };
        };
        namespace remote_attestation {
            const v1beta1: {
                QuoteReport: {
                    encode(message: _678.QuoteReport, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _678.QuoteReport;
                    fromJSON(object: any): _678.QuoteReport;
                    toJSON(message: _678.QuoteReport): unknown;
                    fromPartial(object: {
                        id?: string;
                        timestamp?: string;
                        version?: any;
                        isvEnclaveQuoteStatus?: string;
                        platformInfoBlob?: string;
                        isvEnclaveQuoteBody?: string;
                        advisoryIds?: string[];
                    }): _678.QuoteReport;
                };
                QuoteReportBody: {
                    encode(message: _678.QuoteReportBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _678.QuoteReportBody;
                    fromJSON(object: any): _678.QuoteReportBody;
                    toJSON(message: _678.QuoteReportBody): unknown;
                    fromPartial(object: {
                        mrEnclave?: string;
                        mrSigner?: string;
                        reportData?: string;
                    }): _678.QuoteReportBody;
                };
                QuoteReportData: {
                    encode(message: _678.QuoteReportData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _678.QuoteReportData;
                    fromJSON(object: any): _678.QuoteReportData;
                    toJSON(message: _678.QuoteReportData): unknown;
                    fromPartial(object: {
                        version?: any;
                        signType?: any;
                        reportBody?: {
                            mrEnclave?: string;
                            mrSigner?: string;
                            reportData?: string;
                        };
                    }): _678.QuoteReportData;
                };
                EndorsedAttestationReport: {
                    encode(message: _678.EndorsedAttestationReport, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _678.EndorsedAttestationReport;
                    fromJSON(object: any): _678.EndorsedAttestationReport;
                    toJSON(message: _678.EndorsedAttestationReport): unknown;
                    fromPartial(object: {
                        report?: Uint8Array;
                        signature?: Uint8Array;
                        signingCert?: Uint8Array;
                    }): _678.EndorsedAttestationReport;
                };
                SGXEC256Signature: {
                    encode(message: _678.SGXEC256Signature, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _678.SGXEC256Signature;
                    fromJSON(object: any): _678.SGXEC256Signature;
                    toJSON(message: _678.SGXEC256Signature): unknown;
                    fromPartial(object: {
                        gx?: string;
                        gy?: string;
                    }): _678.SGXEC256Signature;
                };
                PlatformInfoBlob: {
                    encode(message: _678.PlatformInfoBlob, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _678.PlatformInfoBlob;
                    fromJSON(object: any): _678.PlatformInfoBlob;
                    toJSON(message: _678.PlatformInfoBlob): unknown;
                    fromPartial(object: {
                        sgxEpidGroupFlags?: number;
                        sgxTcbEvaluationFlags?: number;
                        pseEvaluationFlags?: number;
                        latestEquivalentTcbPsvn?: string;
                        latestPseIsvsvn?: string;
                        latestPsdaSvn?: string;
                        xeid?: number;
                        gid?: number;
                        sgxEc256SignatureT?: {
                            gx?: string;
                            gy?: string;
                        };
                    }): _678.PlatformInfoBlob;
                };
            };
        }
    }
}
