import * as _156 from "./app/v1alpha1/config";
import * as _157 from "./app/v1alpha1/module";
import * as _158 from "./app/v1alpha1/query";
import * as _159 from "./auth/v1beta1/auth";
import * as _160 from "./auth/v1beta1/genesis";
import * as _161 from "./auth/v1beta1/query";
import * as _162 from "./authz/v1beta1/authz";
import * as _163 from "./authz/v1beta1/event";
import * as _164 from "./authz/v1beta1/genesis";
import * as _165 from "./authz/v1beta1/query";
import * as _166 from "./authz/v1beta1/tx";
import * as _167 from "./bank/v1beta1/authz";
import * as _168 from "./bank/v1beta1/bank";
import * as _169 from "./bank/v1beta1/genesis";
import * as _170 from "./bank/v1beta1/query";
import * as _171 from "./bank/v1beta1/tx";
import * as _172 from "./base/abci/v1beta1/abci";
import * as _173 from "./base/kv/v1beta1/kv";
import * as _174 from "./base/query/v1beta1/pagination";
import * as _175 from "./base/reflection/v1beta1/reflection";
import * as _176 from "./base/reflection/v2alpha1/reflection";
import * as _177 from "./base/snapshots/v1beta1/snapshot";
import * as _178 from "./base/store/v1beta1/commit_info";
import * as _179 from "./base/store/v1beta1/listening";
import * as _180 from "./base/tendermint/v1beta1/query";
import * as _181 from "./base/v1beta1/coin";
import * as _182 from "./capability/v1beta1/capability";
import * as _183 from "./capability/v1beta1/genesis";
import * as _184 from "./crisis/v1beta1/genesis";
import * as _185 from "./crisis/v1beta1/tx";
import * as _186 from "./crypto/ed25519/keys";
import * as _187 from "./crypto/hd/v1/hd";
import * as _188 from "./crypto/keyring/v1/record";
import * as _189 from "./crypto/multisig/keys";
import * as _190 from "./crypto/secp256k1/keys";
import * as _191 from "./crypto/secp256r1/keys";
import * as _192 from "./distribution/v1beta1/distribution";
import * as _193 from "./distribution/v1beta1/genesis";
import * as _194 from "./distribution/v1beta1/query";
import * as _195 from "./distribution/v1beta1/tx";
import * as _196 from "./evidence/v1beta1/evidence";
import * as _197 from "./evidence/v1beta1/genesis";
import * as _198 from "./evidence/v1beta1/query";
import * as _199 from "./evidence/v1beta1/tx";
import * as _200 from "./feegrant/v1beta1/feegrant";
import * as _201 from "./feegrant/v1beta1/genesis";
import * as _202 from "./feegrant/v1beta1/query";
import * as _203 from "./feegrant/v1beta1/tx";
import * as _204 from "./genutil/v1beta1/genesis";
import * as _205 from "./gov/v1/genesis";
import * as _206 from "./gov/v1/gov";
import * as _207 from "./gov/v1/query";
import * as _208 from "./gov/v1/tx";
import * as _209 from "./gov/v1beta1/genesis";
import * as _210 from "./gov/v1beta1/gov";
import * as _211 from "./gov/v1beta1/query";
import * as _212 from "./gov/v1beta1/tx";
import * as _213 from "./group/v1/events";
import * as _214 from "./group/v1/genesis";
import * as _215 from "./group/v1/query";
import * as _216 from "./group/v1/tx";
import * as _217 from "./group/v1/types";
import * as _218 from "./mint/v1beta1/genesis";
import * as _219 from "./mint/v1beta1/mint";
import * as _220 from "./mint/v1beta1/query";
import * as _222 from "./nft/v1beta1/event";
import * as _223 from "./nft/v1beta1/genesis";
import * as _224 from "./nft/v1beta1/nft";
import * as _225 from "./nft/v1beta1/query";
import * as _226 from "./nft/v1beta1/tx";
import * as _227 from "./orm/v1/orm";
import * as _228 from "./orm/v1alpha1/schema";
import * as _229 from "./params/v1beta1/params";
import * as _230 from "./params/v1beta1/query";
import * as _231 from "./slashing/v1beta1/genesis";
import * as _232 from "./slashing/v1beta1/query";
import * as _233 from "./slashing/v1beta1/slashing";
import * as _234 from "./slashing/v1beta1/tx";
import * as _235 from "./staking/v1beta1/authz";
import * as _236 from "./staking/v1beta1/genesis";
import * as _237 from "./staking/v1beta1/query";
import * as _238 from "./staking/v1beta1/staking";
import * as _239 from "./staking/v1beta1/tx";
import * as _240 from "./tx/signing/v1beta1/signing";
import * as _241 from "./tx/v1beta1/service";
import * as _242 from "./tx/v1beta1/tx";
import * as _243 from "./upgrade/v1beta1/query";
import * as _244 from "./upgrade/v1beta1/tx";
import * as _245 from "./upgrade/v1beta1/upgrade";
import * as _246 from "./vesting/v1beta1/tx";
import * as _247 from "./vesting/v1beta1/vesting";
export declare namespace cosmos {
    namespace app {
        const v1alpha1: {
            QueryConfigRequest: {
                encode(_: _158.QueryConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryConfigRequest;
                fromJSON(_: any): _158.QueryConfigRequest;
                toJSON(_: _158.QueryConfigRequest): unknown;
                fromPartial(_: {}): _158.QueryConfigRequest;
            };
            QueryConfigResponse: {
                encode(message: _158.QueryConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryConfigResponse;
                fromJSON(object: any): _158.QueryConfigResponse;
                toJSON(message: _158.QueryConfigResponse): unknown;
                fromPartial(object: {
                    config?: {
                        modules?: {
                            name?: string;
                            config?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                    };
                }): _158.QueryConfigResponse;
            };
            ModuleDescriptor: {
                encode(message: _157.ModuleDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.ModuleDescriptor;
                fromJSON(object: any): _157.ModuleDescriptor;
                toJSON(message: _157.ModuleDescriptor): unknown;
                fromPartial(object: {
                    goImport?: string;
                    usePackage?: {
                        name?: string;
                        revision?: number;
                    }[];
                    canMigrateFrom?: {
                        module?: string;
                    }[];
                }): _157.ModuleDescriptor;
            };
            PackageReference: {
                encode(message: _157.PackageReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.PackageReference;
                fromJSON(object: any): _157.PackageReference;
                toJSON(message: _157.PackageReference): unknown;
                fromPartial(object: {
                    name?: string;
                    revision?: number;
                }): _157.PackageReference;
            };
            MigrateFromInfo: {
                encode(message: _157.MigrateFromInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.MigrateFromInfo;
                fromJSON(object: any): _157.MigrateFromInfo;
                toJSON(message: _157.MigrateFromInfo): unknown;
                fromPartial(object: {
                    module?: string;
                }): _157.MigrateFromInfo;
            };
            Config: {
                encode(message: _156.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.Config;
                fromJSON(object: any): _156.Config;
                toJSON(message: _156.Config): unknown;
                fromPartial(object: {
                    modules?: {
                        name?: string;
                        config?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                }): _156.Config;
            };
            ModuleConfig: {
                encode(message: _156.ModuleConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.ModuleConfig;
                fromJSON(object: any): _156.ModuleConfig;
                toJSON(message: _156.ModuleConfig): unknown;
                fromPartial(object: {
                    name?: string;
                    config?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _156.ModuleConfig;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            QueryAccountsRequest: {
                encode(message: _161.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.QueryAccountsRequest;
                fromJSON(object: any): _161.QueryAccountsRequest;
                toJSON(message: _161.QueryAccountsRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _161.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _161.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.QueryAccountsResponse;
                fromJSON(object: any): _161.QueryAccountsResponse;
                toJSON(message: _161.QueryAccountsResponse): unknown;
                fromPartial(object: {
                    accounts?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _161.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _161.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.QueryAccountRequest;
                fromJSON(object: any): _161.QueryAccountRequest;
                toJSON(message: _161.QueryAccountRequest): unknown;
                fromPartial(object: {
                    address?: string;
                }): _161.QueryAccountRequest;
            };
            QueryModuleAccountsRequest: {
                encode(_: _161.QueryModuleAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.QueryModuleAccountsRequest;
                fromJSON(_: any): _161.QueryModuleAccountsRequest;
                toJSON(_: _161.QueryModuleAccountsRequest): unknown;
                fromPartial(_: {}): _161.QueryModuleAccountsRequest;
            };
            QueryParamsResponse: {
                encode(message: _161.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.QueryParamsResponse;
                fromJSON(object: any): _161.QueryParamsResponse;
                toJSON(message: _161.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        maxMemoCharacters?: any;
                        txSigLimit?: any;
                        txSizeCostPerByte?: any;
                        sigVerifyCostEd25519?: any;
                        sigVerifyCostSecp256k1?: any;
                    };
                }): _161.QueryParamsResponse;
            };
            QueryAccountResponse: {
                encode(message: _161.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.QueryAccountResponse;
                fromJSON(object: any): _161.QueryAccountResponse;
                toJSON(message: _161.QueryAccountResponse): unknown;
                fromPartial(object: {
                    account?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _161.QueryAccountResponse;
            };
            QueryParamsRequest: {
                encode(_: _161.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.QueryParamsRequest;
                fromJSON(_: any): _161.QueryParamsRequest;
                toJSON(_: _161.QueryParamsRequest): unknown;
                fromPartial(_: {}): _161.QueryParamsRequest;
            };
            QueryModuleAccountsResponse: {
                encode(message: _161.QueryModuleAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.QueryModuleAccountsResponse;
                fromJSON(object: any): _161.QueryModuleAccountsResponse;
                toJSON(message: _161.QueryModuleAccountsResponse): unknown;
                fromPartial(object: {
                    accounts?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _161.QueryModuleAccountsResponse;
            };
            Bech32PrefixRequest: {
                encode(_: _161.Bech32PrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.Bech32PrefixRequest;
                fromJSON(_: any): _161.Bech32PrefixRequest;
                toJSON(_: _161.Bech32PrefixRequest): unknown;
                fromPartial(_: {}): _161.Bech32PrefixRequest;
            };
            Bech32PrefixResponse: {
                encode(message: _161.Bech32PrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.Bech32PrefixResponse;
                fromJSON(object: any): _161.Bech32PrefixResponse;
                toJSON(message: _161.Bech32PrefixResponse): unknown;
                fromPartial(object: {
                    bech32Prefix?: string;
                }): _161.Bech32PrefixResponse;
            };
            AddressBytesToStringRequest: {
                encode(message: _161.AddressBytesToStringRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.AddressBytesToStringRequest;
                fromJSON(object: any): _161.AddressBytesToStringRequest;
                toJSON(message: _161.AddressBytesToStringRequest): unknown;
                fromPartial(object: {
                    addressBytes?: Uint8Array;
                }): _161.AddressBytesToStringRequest;
            };
            AddressBytesToStringResponse: {
                encode(message: _161.AddressBytesToStringResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.AddressBytesToStringResponse;
                fromJSON(object: any): _161.AddressBytesToStringResponse;
                toJSON(message: _161.AddressBytesToStringResponse): unknown;
                fromPartial(object: {
                    addressString?: string;
                }): _161.AddressBytesToStringResponse;
            };
            AddressStringToBytesRequest: {
                encode(message: _161.AddressStringToBytesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.AddressStringToBytesRequest;
                fromJSON(object: any): _161.AddressStringToBytesRequest;
                toJSON(message: _161.AddressStringToBytesRequest): unknown;
                fromPartial(object: {
                    addressString?: string;
                }): _161.AddressStringToBytesRequest;
            };
            AddressStringToBytesResponse: {
                encode(message: _161.AddressStringToBytesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.AddressStringToBytesResponse;
                fromJSON(object: any): _161.AddressStringToBytesResponse;
                toJSON(message: _161.AddressStringToBytesResponse): unknown;
                fromPartial(object: {
                    addressBytes?: Uint8Array;
                }): _161.AddressStringToBytesResponse;
            };
            GenesisState: {
                encode(message: _160.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.GenesisState;
                fromJSON(object: any): _160.GenesisState;
                toJSON(message: _160.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        maxMemoCharacters?: any;
                        txSigLimit?: any;
                        txSizeCostPerByte?: any;
                        sigVerifyCostEd25519?: any;
                        sigVerifyCostSecp256k1?: any;
                    };
                    accounts?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _160.GenesisState;
            };
            BaseAccount: {
                encode(message: _159.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.BaseAccount;
                fromJSON(object: any): _159.BaseAccount;
                toJSON(message: _159.BaseAccount): unknown;
                fromPartial(object: {
                    address?: string;
                    pubKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    accountNumber?: any;
                    sequence?: any;
                }): _159.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _159.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.ModuleAccount;
                fromJSON(object: any): _159.ModuleAccount;
                toJSON(message: _159.ModuleAccount): unknown;
                fromPartial(object: {
                    baseAccount?: {
                        address?: string;
                        pubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        accountNumber?: any;
                        sequence?: any;
                    };
                    name?: string;
                    permissions?: string[];
                }): _159.ModuleAccount;
            };
            Params: {
                encode(message: _159.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.Params;
                fromJSON(object: any): _159.Params;
                toJSON(message: _159.Params): unknown;
                fromPartial(object: {
                    maxMemoCharacters?: any;
                    txSigLimit?: any;
                    txSizeCostPerByte?: any;
                    sigVerifyCostEd25519?: any;
                    sigVerifyCostSecp256k1?: any;
                }): _159.Params;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _166.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _166.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _166.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _166.MsgGrant): {
                        typeUrl: string;
                        value: _166.MsgGrant;
                    };
                    exec(value: _166.MsgExec): {
                        typeUrl: string;
                        value: _166.MsgExec;
                    };
                    revoke(value: _166.MsgRevoke): {
                        typeUrl: string;
                        value: _166.MsgRevoke;
                    };
                };
                toJSON: {
                    grant(value: _166.MsgGrant): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exec(value: _166.MsgExec): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revoke(value: _166.MsgRevoke): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _166.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _166.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _166.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _166.MsgGrant): {
                        typeUrl: string;
                        value: _166.MsgGrant;
                    };
                    exec(value: _166.MsgExec): {
                        typeUrl: string;
                        value: _166.MsgExec;
                    };
                    revoke(value: _166.MsgRevoke): {
                        typeUrl: string;
                        value: _166.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, grant }: _166.MsgGrant) => {
                        granter: string;
                        grantee: string;
                        grant: {
                            authorization: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            expiration: {
                                seconds: string;
                                nanos: number;
                            };
                        };
                    };
                    fromAmino: ({ granter, grantee, grant }: {
                        granter: string;
                        grantee: string;
                        grant: {
                            authorization: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            expiration: {
                                seconds: string;
                                nanos: number;
                            };
                        };
                    }) => _166.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ grantee, msgs }: _166.MsgExec) => {
                        grantee: string;
                        msgs: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                    };
                    fromAmino: ({ grantee, msgs }: {
                        grantee: string;
                        msgs: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                    }) => _166.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, msgTypeUrl }: _166.MsgRevoke) => {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    };
                    fromAmino: ({ granter, grantee, msg_type_url }: {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    }) => _166.MsgRevoke;
                };
            };
            MsgGrant: {
                encode(message: _166.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgGrant;
                fromJSON(object: any): _166.MsgGrant;
                toJSON(message: _166.MsgGrant): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    grant?: {
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        expiration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                }): _166.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _166.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgExecResponse;
                fromJSON(object: any): _166.MsgExecResponse;
                toJSON(message: _166.MsgExecResponse): unknown;
                fromPartial(object: {
                    results?: Uint8Array[];
                }): _166.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _166.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgExec;
                fromJSON(object: any): _166.MsgExec;
                toJSON(message: _166.MsgExec): unknown;
                fromPartial(object: {
                    grantee?: string;
                    msgs?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _166.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _166.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgGrantResponse;
                fromJSON(_: any): _166.MsgGrantResponse;
                toJSON(_: _166.MsgGrantResponse): unknown;
                fromPartial(_: {}): _166.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _166.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgRevoke;
                fromJSON(object: any): _166.MsgRevoke;
                toJSON(message: _166.MsgRevoke): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    msgTypeUrl?: string;
                }): _166.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _166.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgRevokeResponse;
                fromJSON(_: any): _166.MsgRevokeResponse;
                toJSON(_: _166.MsgRevokeResponse): unknown;
                fromPartial(_: {}): _166.MsgRevokeResponse;
            };
            QueryGrantsRequest: {
                encode(message: _165.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.QueryGrantsRequest;
                fromJSON(object: any): _165.QueryGrantsRequest;
                toJSON(message: _165.QueryGrantsRequest): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    msgTypeUrl?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _165.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _165.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.QueryGrantsResponse;
                fromJSON(object: any): _165.QueryGrantsResponse;
                toJSON(message: _165.QueryGrantsResponse): unknown;
                fromPartial(object: {
                    grants?: {
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        expiration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _165.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _165.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.QueryGranterGrantsRequest;
                fromJSON(object: any): _165.QueryGranterGrantsRequest;
                toJSON(message: _165.QueryGranterGrantsRequest): unknown;
                fromPartial(object: {
                    granter?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _165.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _165.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.QueryGranterGrantsResponse;
                fromJSON(object: any): _165.QueryGranterGrantsResponse;
                toJSON(message: _165.QueryGranterGrantsResponse): unknown;
                fromPartial(object: {
                    grants?: {
                        granter?: string;
                        grantee?: string;
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        expiration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _165.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _165.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.QueryGranteeGrantsRequest;
                fromJSON(object: any): _165.QueryGranteeGrantsRequest;
                toJSON(message: _165.QueryGranteeGrantsRequest): unknown;
                fromPartial(object: {
                    grantee?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _165.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _165.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.QueryGranteeGrantsResponse;
                fromJSON(object: any): _165.QueryGranteeGrantsResponse;
                toJSON(message: _165.QueryGranteeGrantsResponse): unknown;
                fromPartial(object: {
                    grants?: {
                        granter?: string;
                        grantee?: string;
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        expiration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _165.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _164.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.GenesisState;
                fromJSON(object: any): _164.GenesisState;
                toJSON(message: _164.GenesisState): unknown;
                fromPartial(object: {
                    authorization?: {
                        granter?: string;
                        grantee?: string;
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        expiration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                }): _164.GenesisState;
            };
            EventGrant: {
                encode(message: _163.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.EventGrant;
                fromJSON(object: any): _163.EventGrant;
                toJSON(message: _163.EventGrant): unknown;
                fromPartial(object: {
                    msgTypeUrl?: string;
                    granter?: string;
                    grantee?: string;
                }): _163.EventGrant;
            };
            EventRevoke: {
                encode(message: _163.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.EventRevoke;
                fromJSON(object: any): _163.EventRevoke;
                toJSON(message: _163.EventRevoke): unknown;
                fromPartial(object: {
                    msgTypeUrl?: string;
                    granter?: string;
                    grantee?: string;
                }): _163.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _162.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.GenericAuthorization;
                fromJSON(object: any): _162.GenericAuthorization;
                toJSON(message: _162.GenericAuthorization): unknown;
                fromPartial(object: {
                    msg?: string;
                }): _162.GenericAuthorization;
            };
            Grant: {
                encode(message: _162.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.Grant;
                fromJSON(object: any): _162.Grant;
                toJSON(message: _162.Grant): unknown;
                fromPartial(object: {
                    authorization?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    expiration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _162.Grant;
            };
            GrantAuthorization: {
                encode(message: _162.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.GrantAuthorization;
                fromJSON(object: any): _162.GrantAuthorization;
                toJSON(message: _162.GrantAuthorization): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    authorization?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    expiration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _162.GrantAuthorization;
            };
            GrantQueueItem: {
                encode(message: _162.GrantQueueItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.GrantQueueItem;
                fromJSON(object: any): _162.GrantQueueItem;
                toJSON(message: _162.GrantQueueItem): unknown;
                fromPartial(object: {
                    msgTypeUrls?: string[];
                }): _162.GrantQueueItem;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _171.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _171.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _171.MsgSend): {
                        typeUrl: string;
                        value: _171.MsgSend;
                    };
                    multiSend(value: _171.MsgMultiSend): {
                        typeUrl: string;
                        value: _171.MsgMultiSend;
                    };
                };
                toJSON: {
                    send(value: _171.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    multiSend(value: _171.MsgMultiSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _171.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _171.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _171.MsgSend): {
                        typeUrl: string;
                        value: _171.MsgSend;
                    };
                    multiSend(value: _171.MsgMultiSend): {
                        typeUrl: string;
                        value: _171.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _171.MsgSend) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, amount }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _171.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _171.MsgMultiSend) => {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    };
                    fromAmino: ({ inputs, outputs }: {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    }) => _171.MsgMultiSend;
                };
            };
            MsgSend: {
                encode(message: _171.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.MsgSend;
                fromJSON(object: any): _171.MsgSend;
                toJSON(message: _171.MsgSend): unknown;
                fromPartial(object: {
                    fromAddress?: string;
                    toAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _171.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _171.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.MsgSendResponse;
                fromJSON(_: any): _171.MsgSendResponse;
                toJSON(_: _171.MsgSendResponse): unknown;
                fromPartial(_: {}): _171.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _171.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.MsgMultiSend;
                fromJSON(object: any): _171.MsgMultiSend;
                toJSON(message: _171.MsgMultiSend): unknown;
                fromPartial(object: {
                    inputs?: {
                        address?: string;
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    outputs?: {
                        address?: string;
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _171.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _171.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.MsgMultiSendResponse;
                fromJSON(_: any): _171.MsgMultiSendResponse;
                toJSON(_: _171.MsgMultiSendResponse): unknown;
                fromPartial(_: {}): _171.MsgMultiSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _170.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryBalanceRequest;
                fromJSON(object: any): _170.QueryBalanceRequest;
                toJSON(message: _170.QueryBalanceRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    denom?: string;
                }): _170.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _170.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryBalanceResponse;
                fromJSON(object: any): _170.QueryBalanceResponse;
                toJSON(message: _170.QueryBalanceResponse): unknown;
                fromPartial(object: {
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _170.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _170.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryAllBalancesRequest;
                fromJSON(object: any): _170.QueryAllBalancesRequest;
                toJSON(message: _170.QueryAllBalancesRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _170.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _170.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryAllBalancesResponse;
                fromJSON(object: any): _170.QueryAllBalancesResponse;
                toJSON(message: _170.QueryAllBalancesResponse): unknown;
                fromPartial(object: {
                    balances?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _170.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _170.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QuerySpendableBalancesRequest;
                fromJSON(object: any): _170.QuerySpendableBalancesRequest;
                toJSON(message: _170.QuerySpendableBalancesRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _170.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _170.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QuerySpendableBalancesResponse;
                fromJSON(object: any): _170.QuerySpendableBalancesResponse;
                toJSON(message: _170.QuerySpendableBalancesResponse): unknown;
                fromPartial(object: {
                    balances?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _170.QuerySpendableBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _170.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryTotalSupplyRequest;
                fromJSON(object: any): _170.QueryTotalSupplyRequest;
                toJSON(message: _170.QueryTotalSupplyRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _170.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _170.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryTotalSupplyResponse;
                fromJSON(object: any): _170.QueryTotalSupplyResponse;
                toJSON(message: _170.QueryTotalSupplyResponse): unknown;
                fromPartial(object: {
                    supply?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _170.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _170.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QuerySupplyOfRequest;
                fromJSON(object: any): _170.QuerySupplyOfRequest;
                toJSON(message: _170.QuerySupplyOfRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _170.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _170.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QuerySupplyOfResponse;
                fromJSON(object: any): _170.QuerySupplyOfResponse;
                toJSON(message: _170.QuerySupplyOfResponse): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _170.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _170.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryParamsRequest;
                fromJSON(_: any): _170.QueryParamsRequest;
                toJSON(_: _170.QueryParamsRequest): unknown;
                fromPartial(_: {}): _170.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _170.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryParamsResponse;
                fromJSON(object: any): _170.QueryParamsResponse;
                toJSON(message: _170.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        sendEnabled?: {
                            denom?: string;
                            enabled?: boolean;
                        }[];
                        defaultSendEnabled?: boolean;
                    };
                }): _170.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _170.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryDenomsMetadataRequest;
                fromJSON(object: any): _170.QueryDenomsMetadataRequest;
                toJSON(message: _170.QueryDenomsMetadataRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _170.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _170.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryDenomsMetadataResponse;
                fromJSON(object: any): _170.QueryDenomsMetadataResponse;
                toJSON(message: _170.QueryDenomsMetadataResponse): unknown;
                fromPartial(object: {
                    metadatas?: {
                        description?: string;
                        denomUnits?: {
                            denom?: string;
                            exponent?: number;
                            aliases?: string[];
                        }[];
                        base?: string;
                        display?: string;
                        name?: string;
                        symbol?: string;
                        uri?: string;
                        uriHash?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _170.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _170.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryDenomMetadataRequest;
                fromJSON(object: any): _170.QueryDenomMetadataRequest;
                toJSON(message: _170.QueryDenomMetadataRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _170.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _170.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryDenomMetadataResponse;
                fromJSON(object: any): _170.QueryDenomMetadataResponse;
                toJSON(message: _170.QueryDenomMetadataResponse): unknown;
                fromPartial(object: {
                    metadata?: {
                        description?: string;
                        denomUnits?: {
                            denom?: string;
                            exponent?: number;
                            aliases?: string[];
                        }[];
                        base?: string;
                        display?: string;
                        name?: string;
                        symbol?: string;
                        uri?: string;
                        uriHash?: string;
                    };
                }): _170.QueryDenomMetadataResponse;
            };
            QueryDenomOwnersRequest: {
                encode(message: _170.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryDenomOwnersRequest;
                fromJSON(object: any): _170.QueryDenomOwnersRequest;
                toJSON(message: _170.QueryDenomOwnersRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _170.QueryDenomOwnersRequest;
            };
            DenomOwner: {
                encode(message: _170.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.DenomOwner;
                fromJSON(object: any): _170.DenomOwner;
                toJSON(message: _170.DenomOwner): unknown;
                fromPartial(object: {
                    address?: string;
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _170.DenomOwner;
            };
            QueryDenomOwnersResponse: {
                encode(message: _170.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryDenomOwnersResponse;
                fromJSON(object: any): _170.QueryDenomOwnersResponse;
                toJSON(message: _170.QueryDenomOwnersResponse): unknown;
                fromPartial(object: {
                    denomOwners?: {
                        address?: string;
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _170.QueryDenomOwnersResponse;
            };
            GenesisState: {
                encode(message: _169.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.GenesisState;
                fromJSON(object: any): _169.GenesisState;
                toJSON(message: _169.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        sendEnabled?: {
                            denom?: string;
                            enabled?: boolean;
                        }[];
                        defaultSendEnabled?: boolean;
                    };
                    balances?: {
                        address?: string;
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    supply?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    denomMetadata?: {
                        description?: string;
                        denomUnits?: {
                            denom?: string;
                            exponent?: number;
                            aliases?: string[];
                        }[];
                        base?: string;
                        display?: string;
                        name?: string;
                        symbol?: string;
                        uri?: string;
                        uriHash?: string;
                    }[];
                }): _169.GenesisState;
            };
            Balance: {
                encode(message: _169.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.Balance;
                fromJSON(object: any): _169.Balance;
                toJSON(message: _169.Balance): unknown;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _169.Balance;
            };
            Params: {
                encode(message: _168.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.Params;
                fromJSON(object: any): _168.Params;
                toJSON(message: _168.Params): unknown;
                fromPartial(object: {
                    sendEnabled?: {
                        denom?: string;
                        enabled?: boolean;
                    }[];
                    defaultSendEnabled?: boolean;
                }): _168.Params;
            };
            SendEnabled: {
                encode(message: _168.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.SendEnabled;
                fromJSON(object: any): _168.SendEnabled;
                toJSON(message: _168.SendEnabled): unknown;
                fromPartial(object: {
                    denom?: string;
                    enabled?: boolean;
                }): _168.SendEnabled;
            };
            Input: {
                encode(message: _168.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.Input;
                fromJSON(object: any): _168.Input;
                toJSON(message: _168.Input): unknown;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _168.Input;
            };
            Output: {
                encode(message: _168.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.Output;
                fromJSON(object: any): _168.Output;
                toJSON(message: _168.Output): unknown;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _168.Output;
            };
            Supply: {
                encode(message: _168.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.Supply;
                fromJSON(object: any): _168.Supply;
                toJSON(message: _168.Supply): unknown;
                fromPartial(object: {
                    total?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _168.Supply;
            };
            DenomUnit: {
                encode(message: _168.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.DenomUnit;
                fromJSON(object: any): _168.DenomUnit;
                toJSON(message: _168.DenomUnit): unknown;
                fromPartial(object: {
                    denom?: string;
                    exponent?: number;
                    aliases?: string[];
                }): _168.DenomUnit;
            };
            Metadata: {
                encode(message: _168.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.Metadata;
                fromJSON(object: any): _168.Metadata;
                toJSON(message: _168.Metadata): unknown;
                fromPartial(object: {
                    description?: string;
                    denomUnits?: {
                        denom?: string;
                        exponent?: number;
                        aliases?: string[];
                    }[];
                    base?: string;
                    display?: string;
                    name?: string;
                    symbol?: string;
                    uri?: string;
                    uriHash?: string;
                }): _168.Metadata;
            };
            SendAuthorization: {
                encode(message: _167.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.SendAuthorization;
                fromJSON(object: any): _167.SendAuthorization;
                toJSON(message: _167.SendAuthorization): unknown;
                fromPartial(object: {
                    spendLimit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _167.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _172.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.TxResponse;
                    fromJSON(object: any): _172.TxResponse;
                    toJSON(message: _172.TxResponse): unknown;
                    fromPartial(object: {
                        height?: any;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        rawLog?: string;
                        logs?: {
                            msgIndex?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gasWanted?: any;
                        gasUsed?: any;
                        tx?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                    }): _172.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _172.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.ABCIMessageLog;
                    fromJSON(object: any): _172.ABCIMessageLog;
                    toJSON(message: _172.ABCIMessageLog): unknown;
                    fromPartial(object: {
                        msgIndex?: number;
                        log?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                        }[];
                    }): _172.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _172.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.StringEvent;
                    fromJSON(object: any): _172.StringEvent;
                    toJSON(message: _172.StringEvent): unknown;
                    fromPartial(object: {
                        type?: string;
                        attributes?: {
                            key?: string;
                            value?: string;
                        }[];
                    }): _172.StringEvent;
                };
                Attribute: {
                    encode(message: _172.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.Attribute;
                    fromJSON(object: any): _172.Attribute;
                    toJSON(message: _172.Attribute): unknown;
                    fromPartial(object: {
                        key?: string;
                        value?: string;
                    }): _172.Attribute;
                };
                GasInfo: {
                    encode(message: _172.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.GasInfo;
                    fromJSON(object: any): _172.GasInfo;
                    toJSON(message: _172.GasInfo): unknown;
                    fromPartial(object: {
                        gasWanted?: any;
                        gasUsed?: any;
                    }): _172.GasInfo;
                };
                Result: {
                    encode(message: _172.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.Result;
                    fromJSON(object: any): _172.Result;
                    toJSON(message: _172.Result): unknown;
                    fromPartial(object: {
                        data?: Uint8Array;
                        log?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                        msgResponses?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    }): _172.Result;
                };
                SimulationResponse: {
                    encode(message: _172.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.SimulationResponse;
                    fromJSON(object: any): _172.SimulationResponse;
                    toJSON(message: _172.SimulationResponse): unknown;
                    fromPartial(object: {
                        gasInfo?: {
                            gasWanted?: any;
                            gasUsed?: any;
                        };
                        result?: {
                            data?: Uint8Array;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    index?: boolean;
                                }[];
                            }[];
                            msgResponses?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                    }): _172.SimulationResponse;
                };
                MsgData: {
                    encode(message: _172.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.MsgData;
                    fromJSON(object: any): _172.MsgData;
                    toJSON(message: _172.MsgData): unknown;
                    fromPartial(object: {
                        msgType?: string;
                        data?: Uint8Array;
                    }): _172.MsgData;
                };
                TxMsgData: {
                    encode(message: _172.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.TxMsgData;
                    fromJSON(object: any): _172.TxMsgData;
                    toJSON(message: _172.TxMsgData): unknown;
                    fromPartial(object: {
                        data?: {
                            msgType?: string;
                            data?: Uint8Array;
                        }[];
                        msgResponses?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    }): _172.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _172.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.SearchTxsResult;
                    fromJSON(object: any): _172.SearchTxsResult;
                    toJSON(message: _172.SearchTxsResult): unknown;
                    fromPartial(object: {
                        totalCount?: any;
                        count?: any;
                        pageNumber?: any;
                        pageTotal?: any;
                        limit?: any;
                        txs?: {
                            height?: any;
                            txhash?: string;
                            codespace?: string;
                            code?: number;
                            data?: string;
                            rawLog?: string;
                            logs?: {
                                msgIndex?: number;
                                log?: string;
                                events?: {
                                    type?: string;
                                    attributes?: {
                                        key?: string;
                                        value?: string;
                                    }[];
                                }[];
                            }[];
                            info?: string;
                            gasWanted?: any;
                            gasUsed?: any;
                            tx?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            timestamp?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    index?: boolean;
                                }[];
                            }[];
                        }[];
                    }): _172.SearchTxsResult;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _173.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.Pairs;
                    fromJSON(object: any): _173.Pairs;
                    toJSON(message: _173.Pairs): unknown;
                    fromPartial(object: {
                        pairs?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[];
                    }): _173.Pairs;
                };
                Pair: {
                    encode(message: _173.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.Pair;
                    fromJSON(object: any): _173.Pair;
                    toJSON(message: _173.Pair): unknown;
                    fromPartial(object: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }): _173.Pair;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _174.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.PageRequest;
                    fromJSON(object: any): _174.PageRequest;
                    toJSON(message: _174.PageRequest): unknown;
                    fromPartial(object: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    }): _174.PageRequest;
                };
                PageResponse: {
                    encode(message: _174.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.PageResponse;
                    fromJSON(object: any): _174.PageResponse;
                    toJSON(message: _174.PageResponse): unknown;
                    fromPartial(object: {
                        nextKey?: Uint8Array;
                        total?: any;
                    }): _174.PageResponse;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _175.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.ListAllInterfacesRequest;
                    fromJSON(_: any): _175.ListAllInterfacesRequest;
                    toJSON(_: _175.ListAllInterfacesRequest): unknown;
                    fromPartial(_: {}): _175.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _175.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.ListAllInterfacesResponse;
                    fromJSON(object: any): _175.ListAllInterfacesResponse;
                    toJSON(message: _175.ListAllInterfacesResponse): unknown;
                    fromPartial(object: {
                        interfaceNames?: string[];
                    }): _175.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _175.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.ListImplementationsRequest;
                    fromJSON(object: any): _175.ListImplementationsRequest;
                    toJSON(message: _175.ListImplementationsRequest): unknown;
                    fromPartial(object: {
                        interfaceName?: string;
                    }): _175.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _175.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.ListImplementationsResponse;
                    fromJSON(object: any): _175.ListImplementationsResponse;
                    toJSON(message: _175.ListImplementationsResponse): unknown;
                    fromPartial(object: {
                        implementationMessageNames?: string[];
                    }): _175.ListImplementationsResponse;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _176.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.AppDescriptor;
                    fromJSON(object: any): _176.AppDescriptor;
                    toJSON(message: _176.AppDescriptor): unknown;
                    fromPartial(object: {
                        authn?: {
                            signModes?: {
                                name?: string;
                                number?: number;
                                authnInfoProviderMethodFullname?: string;
                            }[];
                        };
                        chain?: {
                            id?: string;
                        };
                        codec?: {
                            interfaces?: {
                                fullname?: string;
                                interfaceAcceptingMessages?: {
                                    fullname?: string;
                                    fieldDescriptorNames?: string[];
                                }[];
                                interfaceImplementers?: {
                                    fullname?: string;
                                    typeUrl?: string;
                                }[];
                            }[];
                        };
                        configuration?: {
                            bech32AccountAddressPrefix?: string;
                        };
                        queryServices?: {
                            queryServices?: {
                                fullname?: string;
                                isModule?: boolean;
                                methods?: {
                                    name?: string;
                                    fullQueryPath?: string;
                                }[];
                            }[];
                        };
                        tx?: {
                            fullname?: string;
                            msgs?: {
                                msgTypeUrl?: string;
                            }[];
                        };
                    }): _176.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _176.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.TxDescriptor;
                    fromJSON(object: any): _176.TxDescriptor;
                    toJSON(message: _176.TxDescriptor): unknown;
                    fromPartial(object: {
                        fullname?: string;
                        msgs?: {
                            msgTypeUrl?: string;
                        }[];
                    }): _176.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _176.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.AuthnDescriptor;
                    fromJSON(object: any): _176.AuthnDescriptor;
                    toJSON(message: _176.AuthnDescriptor): unknown;
                    fromPartial(object: {
                        signModes?: {
                            name?: string;
                            number?: number;
                            authnInfoProviderMethodFullname?: string;
                        }[];
                    }): _176.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _176.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.SigningModeDescriptor;
                    fromJSON(object: any): _176.SigningModeDescriptor;
                    toJSON(message: _176.SigningModeDescriptor): unknown;
                    fromPartial(object: {
                        name?: string;
                        number?: number;
                        authnInfoProviderMethodFullname?: string;
                    }): _176.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _176.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.ChainDescriptor;
                    fromJSON(object: any): _176.ChainDescriptor;
                    toJSON(message: _176.ChainDescriptor): unknown;
                    fromPartial(object: {
                        id?: string;
                    }): _176.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _176.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.CodecDescriptor;
                    fromJSON(object: any): _176.CodecDescriptor;
                    toJSON(message: _176.CodecDescriptor): unknown;
                    fromPartial(object: {
                        interfaces?: {
                            fullname?: string;
                            interfaceAcceptingMessages?: {
                                fullname?: string;
                                fieldDescriptorNames?: string[];
                            }[];
                            interfaceImplementers?: {
                                fullname?: string;
                                typeUrl?: string;
                            }[];
                        }[];
                    }): _176.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _176.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.InterfaceDescriptor;
                    fromJSON(object: any): _176.InterfaceDescriptor;
                    toJSON(message: _176.InterfaceDescriptor): unknown;
                    fromPartial(object: {
                        fullname?: string;
                        interfaceAcceptingMessages?: {
                            fullname?: string;
                            fieldDescriptorNames?: string[];
                        }[];
                        interfaceImplementers?: {
                            fullname?: string;
                            typeUrl?: string;
                        }[];
                    }): _176.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _176.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.InterfaceImplementerDescriptor;
                    fromJSON(object: any): _176.InterfaceImplementerDescriptor;
                    toJSON(message: _176.InterfaceImplementerDescriptor): unknown;
                    fromPartial(object: {
                        fullname?: string;
                        typeUrl?: string;
                    }): _176.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _176.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.InterfaceAcceptingMessageDescriptor;
                    fromJSON(object: any): _176.InterfaceAcceptingMessageDescriptor;
                    toJSON(message: _176.InterfaceAcceptingMessageDescriptor): unknown;
                    fromPartial(object: {
                        fullname?: string;
                        fieldDescriptorNames?: string[];
                    }): _176.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _176.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.ConfigurationDescriptor;
                    fromJSON(object: any): _176.ConfigurationDescriptor;
                    toJSON(message: _176.ConfigurationDescriptor): unknown;
                    fromPartial(object: {
                        bech32AccountAddressPrefix?: string;
                    }): _176.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _176.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.MsgDescriptor;
                    fromJSON(object: any): _176.MsgDescriptor;
                    toJSON(message: _176.MsgDescriptor): unknown;
                    fromPartial(object: {
                        msgTypeUrl?: string;
                    }): _176.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _176.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.GetAuthnDescriptorRequest;
                    fromJSON(_: any): _176.GetAuthnDescriptorRequest;
                    toJSON(_: _176.GetAuthnDescriptorRequest): unknown;
                    fromPartial(_: {}): _176.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _176.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.GetAuthnDescriptorResponse;
                    fromJSON(object: any): _176.GetAuthnDescriptorResponse;
                    toJSON(message: _176.GetAuthnDescriptorResponse): unknown;
                    fromPartial(object: {
                        authn?: {
                            signModes?: {
                                name?: string;
                                number?: number;
                                authnInfoProviderMethodFullname?: string;
                            }[];
                        };
                    }): _176.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _176.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.GetChainDescriptorRequest;
                    fromJSON(_: any): _176.GetChainDescriptorRequest;
                    toJSON(_: _176.GetChainDescriptorRequest): unknown;
                    fromPartial(_: {}): _176.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _176.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.GetChainDescriptorResponse;
                    fromJSON(object: any): _176.GetChainDescriptorResponse;
                    toJSON(message: _176.GetChainDescriptorResponse): unknown;
                    fromPartial(object: {
                        chain?: {
                            id?: string;
                        };
                    }): _176.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _176.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.GetCodecDescriptorRequest;
                    fromJSON(_: any): _176.GetCodecDescriptorRequest;
                    toJSON(_: _176.GetCodecDescriptorRequest): unknown;
                    fromPartial(_: {}): _176.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _176.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.GetCodecDescriptorResponse;
                    fromJSON(object: any): _176.GetCodecDescriptorResponse;
                    toJSON(message: _176.GetCodecDescriptorResponse): unknown;
                    fromPartial(object: {
                        codec?: {
                            interfaces?: {
                                fullname?: string;
                                interfaceAcceptingMessages?: {
                                    fullname?: string;
                                    fieldDescriptorNames?: string[];
                                }[];
                                interfaceImplementers?: {
                                    fullname?: string;
                                    typeUrl?: string;
                                }[];
                            }[];
                        };
                    }): _176.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _176.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.GetConfigurationDescriptorRequest;
                    fromJSON(_: any): _176.GetConfigurationDescriptorRequest;
                    toJSON(_: _176.GetConfigurationDescriptorRequest): unknown;
                    fromPartial(_: {}): _176.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _176.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.GetConfigurationDescriptorResponse;
                    fromJSON(object: any): _176.GetConfigurationDescriptorResponse;
                    toJSON(message: _176.GetConfigurationDescriptorResponse): unknown;
                    fromPartial(object: {
                        config?: {
                            bech32AccountAddressPrefix?: string;
                        };
                    }): _176.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _176.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.GetQueryServicesDescriptorRequest;
                    fromJSON(_: any): _176.GetQueryServicesDescriptorRequest;
                    toJSON(_: _176.GetQueryServicesDescriptorRequest): unknown;
                    fromPartial(_: {}): _176.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _176.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.GetQueryServicesDescriptorResponse;
                    fromJSON(object: any): _176.GetQueryServicesDescriptorResponse;
                    toJSON(message: _176.GetQueryServicesDescriptorResponse): unknown;
                    fromPartial(object: {
                        queries?: {
                            queryServices?: {
                                fullname?: string;
                                isModule?: boolean;
                                methods?: {
                                    name?: string;
                                    fullQueryPath?: string;
                                }[];
                            }[];
                        };
                    }): _176.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _176.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.GetTxDescriptorRequest;
                    fromJSON(_: any): _176.GetTxDescriptorRequest;
                    toJSON(_: _176.GetTxDescriptorRequest): unknown;
                    fromPartial(_: {}): _176.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _176.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.GetTxDescriptorResponse;
                    fromJSON(object: any): _176.GetTxDescriptorResponse;
                    toJSON(message: _176.GetTxDescriptorResponse): unknown;
                    fromPartial(object: {
                        tx?: {
                            fullname?: string;
                            msgs?: {
                                msgTypeUrl?: string;
                            }[];
                        };
                    }): _176.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _176.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.QueryServicesDescriptor;
                    fromJSON(object: any): _176.QueryServicesDescriptor;
                    toJSON(message: _176.QueryServicesDescriptor): unknown;
                    fromPartial(object: {
                        queryServices?: {
                            fullname?: string;
                            isModule?: boolean;
                            methods?: {
                                name?: string;
                                fullQueryPath?: string;
                            }[];
                        }[];
                    }): _176.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _176.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.QueryServiceDescriptor;
                    fromJSON(object: any): _176.QueryServiceDescriptor;
                    toJSON(message: _176.QueryServiceDescriptor): unknown;
                    fromPartial(object: {
                        fullname?: string;
                        isModule?: boolean;
                        methods?: {
                            name?: string;
                            fullQueryPath?: string;
                        }[];
                    }): _176.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _176.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.QueryMethodDescriptor;
                    fromJSON(object: any): _176.QueryMethodDescriptor;
                    toJSON(message: _176.QueryMethodDescriptor): unknown;
                    fromPartial(object: {
                        name?: string;
                        fullQueryPath?: string;
                    }): _176.QueryMethodDescriptor;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _177.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.Snapshot;
                    fromJSON(object: any): _177.Snapshot;
                    toJSON(message: _177.Snapshot): unknown;
                    fromPartial(object: {
                        height?: any;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: {
                            chunkHashes?: Uint8Array[];
                        };
                    }): _177.Snapshot;
                };
                Metadata: {
                    encode(message: _177.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.Metadata;
                    fromJSON(object: any): _177.Metadata;
                    toJSON(message: _177.Metadata): unknown;
                    fromPartial(object: {
                        chunkHashes?: Uint8Array[];
                    }): _177.Metadata;
                };
                SnapshotItem: {
                    encode(message: _177.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.SnapshotItem;
                    fromJSON(object: any): _177.SnapshotItem;
                    toJSON(message: _177.SnapshotItem): unknown;
                    fromPartial(object: {
                        store?: {
                            name?: string;
                        };
                        iavl?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            version?: any;
                            height?: number;
                        };
                        extension?: {
                            name?: string;
                            format?: number;
                        };
                        extensionPayload?: {
                            payload?: Uint8Array;
                        };
                        kv?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        };
                        schema?: {
                            keys?: Uint8Array[];
                        };
                    }): _177.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _177.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.SnapshotStoreItem;
                    fromJSON(object: any): _177.SnapshotStoreItem;
                    toJSON(message: _177.SnapshotStoreItem): unknown;
                    fromPartial(object: {
                        name?: string;
                    }): _177.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _177.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.SnapshotIAVLItem;
                    fromJSON(object: any): _177.SnapshotIAVLItem;
                    toJSON(message: _177.SnapshotIAVLItem): unknown;
                    fromPartial(object: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        version?: any;
                        height?: number;
                    }): _177.SnapshotIAVLItem;
                };
                SnapshotExtensionMeta: {
                    encode(message: _177.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.SnapshotExtensionMeta;
                    fromJSON(object: any): _177.SnapshotExtensionMeta;
                    toJSON(message: _177.SnapshotExtensionMeta): unknown;
                    fromPartial(object: {
                        name?: string;
                        format?: number;
                    }): _177.SnapshotExtensionMeta;
                };
                SnapshotExtensionPayload: {
                    encode(message: _177.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.SnapshotExtensionPayload;
                    fromJSON(object: any): _177.SnapshotExtensionPayload;
                    toJSON(message: _177.SnapshotExtensionPayload): unknown;
                    fromPartial(object: {
                        payload?: Uint8Array;
                    }): _177.SnapshotExtensionPayload;
                };
                SnapshotKVItem: {
                    encode(message: _177.SnapshotKVItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.SnapshotKVItem;
                    fromJSON(object: any): _177.SnapshotKVItem;
                    toJSON(message: _177.SnapshotKVItem): unknown;
                    fromPartial(object: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }): _177.SnapshotKVItem;
                };
                SnapshotSchema: {
                    encode(message: _177.SnapshotSchema, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.SnapshotSchema;
                    fromJSON(object: any): _177.SnapshotSchema;
                    toJSON(message: _177.SnapshotSchema): unknown;
                    fromPartial(object: {
                        keys?: Uint8Array[];
                    }): _177.SnapshotSchema;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    encode(message: _179.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.StoreKVPair;
                    fromJSON(object: any): _179.StoreKVPair;
                    toJSON(message: _179.StoreKVPair): unknown;
                    fromPartial(object: {
                        storeKey?: string;
                        delete?: boolean;
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }): _179.StoreKVPair;
                };
                CommitInfo: {
                    encode(message: _178.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.CommitInfo;
                    fromJSON(object: any): _178.CommitInfo;
                    toJSON(message: _178.CommitInfo): unknown;
                    fromPartial(object: {
                        version?: any;
                        storeInfos?: {
                            name?: string;
                            commitId?: {
                                version?: any;
                                hash?: Uint8Array;
                            };
                        }[];
                    }): _178.CommitInfo;
                };
                StoreInfo: {
                    encode(message: _178.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.StoreInfo;
                    fromJSON(object: any): _178.StoreInfo;
                    toJSON(message: _178.StoreInfo): unknown;
                    fromPartial(object: {
                        name?: string;
                        commitId?: {
                            version?: any;
                            hash?: Uint8Array;
                        };
                    }): _178.StoreInfo;
                };
                CommitID: {
                    encode(message: _178.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.CommitID;
                    fromJSON(object: any): _178.CommitID;
                    toJSON(message: _178.CommitID): unknown;
                    fromPartial(object: {
                        version?: any;
                        hash?: Uint8Array;
                    }): _178.CommitID;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                GetValidatorSetByHeightRequest: {
                    encode(message: _180.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.GetValidatorSetByHeightRequest;
                    fromJSON(object: any): _180.GetValidatorSetByHeightRequest;
                    toJSON(message: _180.GetValidatorSetByHeightRequest): unknown;
                    fromPartial(object: {
                        height?: any;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _180.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _180.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.GetValidatorSetByHeightResponse;
                    fromJSON(object: any): _180.GetValidatorSetByHeightResponse;
                    toJSON(message: _180.GetValidatorSetByHeightResponse): unknown;
                    fromPartial(object: {
                        blockHeight?: any;
                        validators?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                    }): _180.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _180.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.GetLatestValidatorSetRequest;
                    fromJSON(object: any): _180.GetLatestValidatorSetRequest;
                    toJSON(message: _180.GetLatestValidatorSetRequest): unknown;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _180.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _180.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.GetLatestValidatorSetResponse;
                    fromJSON(object: any): _180.GetLatestValidatorSetResponse;
                    toJSON(message: _180.GetLatestValidatorSetResponse): unknown;
                    fromPartial(object: {
                        blockHeight?: any;
                        validators?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                    }): _180.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _180.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.Validator;
                    fromJSON(object: any): _180.Validator;
                    toJSON(message: _180.Validator): unknown;
                    fromPartial(object: {
                        address?: string;
                        pubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        votingPower?: any;
                        proposerPriority?: any;
                    }): _180.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _180.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.GetBlockByHeightRequest;
                    fromJSON(object: any): _180.GetBlockByHeightRequest;
                    toJSON(message: _180.GetBlockByHeightRequest): unknown;
                    fromPartial(object: {
                        height?: any;
                    }): _180.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _180.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.GetBlockByHeightResponse;
                    fromJSON(object: any): _180.GetBlockByHeightResponse;
                    toJSON(message: _180.GetBlockByHeightResponse): unknown;
                    fromPartial(object: {
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        block?: {
                            header?: {
                                version?: {
                                    block?: any;
                                    app?: any;
                                };
                                chainId?: string;
                                height?: any;
                                time?: {
                                    seconds?: any;
                                    nanos?: number;
                                };
                                lastBlockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                lastCommitHash?: Uint8Array;
                                dataHash?: Uint8Array;
                                validatorsHash?: Uint8Array;
                                nextValidatorsHash?: Uint8Array;
                                consensusHash?: Uint8Array;
                                appHash?: Uint8Array;
                                lastResultsHash?: Uint8Array;
                                evidenceHash?: Uint8Array;
                                proposerAddress?: Uint8Array;
                            };
                            data?: {
                                txs?: Uint8Array[];
                            };
                            evidence?: {
                                evidence?: {
                                    duplicateVoteEvidence?: {
                                        voteA?: {
                                            type?: import("../tendermint/types/types").SignedMsgType;
                                            height?: any;
                                            round?: number;
                                            blockId?: {
                                                hash?: Uint8Array;
                                                partSetHeader?: {
                                                    total?: number;
                                                    hash?: Uint8Array;
                                                };
                                            };
                                            timestamp?: {
                                                seconds?: any;
                                                nanos?: number;
                                            };
                                            validatorAddress?: Uint8Array;
                                            validatorIndex?: number;
                                            signature?: Uint8Array;
                                        };
                                        voteB?: {
                                            type?: import("../tendermint/types/types").SignedMsgType;
                                            height?: any;
                                            round?: number;
                                            blockId?: {
                                                hash?: Uint8Array;
                                                partSetHeader?: {
                                                    total?: number;
                                                    hash?: Uint8Array;
                                                };
                                            };
                                            timestamp?: {
                                                seconds?: any;
                                                nanos?: number;
                                            };
                                            validatorAddress?: Uint8Array;
                                            validatorIndex?: number;
                                            signature?: Uint8Array;
                                        };
                                        totalVotingPower?: any;
                                        validatorPower?: any;
                                        timestamp?: {
                                            seconds?: any;
                                            nanos?: number;
                                        };
                                    };
                                    lightClientAttackEvidence?: {
                                        conflictingBlock?: {
                                            signedHeader?: {
                                                header?: {
                                                    version?: {
                                                        block?: any;
                                                        app?: any;
                                                    };
                                                    chainId?: string;
                                                    height?: any;
                                                    time?: {
                                                        seconds?: any;
                                                        nanos?: number;
                                                    };
                                                    lastBlockId?: {
                                                        hash?: Uint8Array;
                                                        partSetHeader?: {
                                                            total?: number;
                                                            hash?: Uint8Array;
                                                        };
                                                    };
                                                    lastCommitHash?: Uint8Array;
                                                    dataHash?: Uint8Array;
                                                    validatorsHash?: Uint8Array;
                                                    nextValidatorsHash?: Uint8Array;
                                                    consensusHash?: Uint8Array;
                                                    appHash?: Uint8Array;
                                                    lastResultsHash?: Uint8Array;
                                                    evidenceHash?: Uint8Array;
                                                    proposerAddress?: Uint8Array;
                                                };
                                                commit?: {
                                                    height?: any;
                                                    round?: number;
                                                    blockId?: {
                                                        hash?: Uint8Array;
                                                        partSetHeader?: {
                                                            total?: number;
                                                            hash?: Uint8Array;
                                                        };
                                                    };
                                                    signatures?: {
                                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                                        validatorAddress?: Uint8Array;
                                                        timestamp?: {
                                                            seconds?: any;
                                                            nanos?: number;
                                                        };
                                                        signature?: Uint8Array;
                                                    }[];
                                                };
                                            };
                                            validatorSet?: {
                                                validators?: {
                                                    address?: Uint8Array;
                                                    pubKey?: {
                                                        ed25519?: Uint8Array;
                                                        secp256k1?: Uint8Array;
                                                    };
                                                    votingPower?: any;
                                                    proposerPriority?: any;
                                                }[];
                                                proposer?: {
                                                    address?: Uint8Array;
                                                    pubKey?: {
                                                        ed25519?: Uint8Array;
                                                        secp256k1?: Uint8Array;
                                                    };
                                                    votingPower?: any;
                                                    proposerPriority?: any;
                                                };
                                                totalVotingPower?: any;
                                            };
                                        };
                                        commonHeight?: any;
                                        byzantineValidators?: {
                                            address?: Uint8Array;
                                            pubKey?: {
                                                ed25519?: Uint8Array;
                                                secp256k1?: Uint8Array;
                                            };
                                            votingPower?: any;
                                            proposerPriority?: any;
                                        }[];
                                        totalVotingPower?: any;
                                        timestamp?: {
                                            seconds?: any;
                                            nanos?: number;
                                        };
                                    };
                                }[];
                            };
                            lastCommit?: {
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: {
                                        seconds?: any;
                                        nanos?: number;
                                    };
                                    signature?: Uint8Array;
                                }[];
                            };
                        };
                    }): _180.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _180.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.GetLatestBlockRequest;
                    fromJSON(_: any): _180.GetLatestBlockRequest;
                    toJSON(_: _180.GetLatestBlockRequest): unknown;
                    fromPartial(_: {}): _180.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _180.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.GetLatestBlockResponse;
                    fromJSON(object: any): _180.GetLatestBlockResponse;
                    toJSON(message: _180.GetLatestBlockResponse): unknown;
                    fromPartial(object: {
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        block?: {
                            header?: {
                                version?: {
                                    block?: any;
                                    app?: any;
                                };
                                chainId?: string;
                                height?: any;
                                time?: {
                                    seconds?: any;
                                    nanos?: number;
                                };
                                lastBlockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                lastCommitHash?: Uint8Array;
                                dataHash?: Uint8Array;
                                validatorsHash?: Uint8Array;
                                nextValidatorsHash?: Uint8Array;
                                consensusHash?: Uint8Array;
                                appHash?: Uint8Array;
                                lastResultsHash?: Uint8Array;
                                evidenceHash?: Uint8Array;
                                proposerAddress?: Uint8Array;
                            };
                            data?: {
                                txs?: Uint8Array[];
                            };
                            evidence?: {
                                evidence?: {
                                    duplicateVoteEvidence?: {
                                        voteA?: {
                                            type?: import("../tendermint/types/types").SignedMsgType;
                                            height?: any;
                                            round?: number;
                                            blockId?: {
                                                hash?: Uint8Array;
                                                partSetHeader?: {
                                                    total?: number;
                                                    hash?: Uint8Array;
                                                };
                                            };
                                            timestamp?: {
                                                seconds?: any;
                                                nanos?: number;
                                            };
                                            validatorAddress?: Uint8Array;
                                            validatorIndex?: number;
                                            signature?: Uint8Array;
                                        };
                                        voteB?: {
                                            type?: import("../tendermint/types/types").SignedMsgType;
                                            height?: any;
                                            round?: number;
                                            blockId?: {
                                                hash?: Uint8Array;
                                                partSetHeader?: {
                                                    total?: number;
                                                    hash?: Uint8Array;
                                                };
                                            };
                                            timestamp?: {
                                                seconds?: any;
                                                nanos?: number;
                                            };
                                            validatorAddress?: Uint8Array;
                                            validatorIndex?: number;
                                            signature?: Uint8Array;
                                        };
                                        totalVotingPower?: any;
                                        validatorPower?: any;
                                        timestamp?: {
                                            seconds?: any;
                                            nanos?: number;
                                        };
                                    };
                                    lightClientAttackEvidence?: {
                                        conflictingBlock?: {
                                            signedHeader?: {
                                                header?: {
                                                    version?: {
                                                        block?: any;
                                                        app?: any;
                                                    };
                                                    chainId?: string;
                                                    height?: any;
                                                    time?: {
                                                        seconds?: any;
                                                        nanos?: number;
                                                    };
                                                    lastBlockId?: {
                                                        hash?: Uint8Array;
                                                        partSetHeader?: {
                                                            total?: number;
                                                            hash?: Uint8Array;
                                                        };
                                                    };
                                                    lastCommitHash?: Uint8Array;
                                                    dataHash?: Uint8Array;
                                                    validatorsHash?: Uint8Array;
                                                    nextValidatorsHash?: Uint8Array;
                                                    consensusHash?: Uint8Array;
                                                    appHash?: Uint8Array;
                                                    lastResultsHash?: Uint8Array;
                                                    evidenceHash?: Uint8Array;
                                                    proposerAddress?: Uint8Array;
                                                };
                                                commit?: {
                                                    height?: any;
                                                    round?: number;
                                                    blockId?: {
                                                        hash?: Uint8Array;
                                                        partSetHeader?: {
                                                            total?: number;
                                                            hash?: Uint8Array;
                                                        };
                                                    };
                                                    signatures?: {
                                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                                        validatorAddress?: Uint8Array;
                                                        timestamp?: {
                                                            seconds?: any;
                                                            nanos?: number;
                                                        };
                                                        signature?: Uint8Array;
                                                    }[];
                                                };
                                            };
                                            validatorSet?: {
                                                validators?: {
                                                    address?: Uint8Array;
                                                    pubKey?: {
                                                        ed25519?: Uint8Array;
                                                        secp256k1?: Uint8Array;
                                                    };
                                                    votingPower?: any;
                                                    proposerPriority?: any;
                                                }[];
                                                proposer?: {
                                                    address?: Uint8Array;
                                                    pubKey?: {
                                                        ed25519?: Uint8Array;
                                                        secp256k1?: Uint8Array;
                                                    };
                                                    votingPower?: any;
                                                    proposerPriority?: any;
                                                };
                                                totalVotingPower?: any;
                                            };
                                        };
                                        commonHeight?: any;
                                        byzantineValidators?: {
                                            address?: Uint8Array;
                                            pubKey?: {
                                                ed25519?: Uint8Array;
                                                secp256k1?: Uint8Array;
                                            };
                                            votingPower?: any;
                                            proposerPriority?: any;
                                        }[];
                                        totalVotingPower?: any;
                                        timestamp?: {
                                            seconds?: any;
                                            nanos?: number;
                                        };
                                    };
                                }[];
                            };
                            lastCommit?: {
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: {
                                        seconds?: any;
                                        nanos?: number;
                                    };
                                    signature?: Uint8Array;
                                }[];
                            };
                        };
                    }): _180.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _180.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.GetSyncingRequest;
                    fromJSON(_: any): _180.GetSyncingRequest;
                    toJSON(_: _180.GetSyncingRequest): unknown;
                    fromPartial(_: {}): _180.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _180.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.GetSyncingResponse;
                    fromJSON(object: any): _180.GetSyncingResponse;
                    toJSON(message: _180.GetSyncingResponse): unknown;
                    fromPartial(object: {
                        syncing?: boolean;
                    }): _180.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _180.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.GetNodeInfoRequest;
                    fromJSON(_: any): _180.GetNodeInfoRequest;
                    toJSON(_: _180.GetNodeInfoRequest): unknown;
                    fromPartial(_: {}): _180.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _180.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.GetNodeInfoResponse;
                    fromJSON(object: any): _180.GetNodeInfoResponse;
                    toJSON(message: _180.GetNodeInfoResponse): unknown;
                    fromPartial(object: {
                        nodeInfo?: {
                            protocolVersion?: {
                                p2p?: any;
                                block?: any;
                                app?: any;
                            };
                            nodeId?: string;
                            listenAddr?: string;
                            network?: string;
                            version?: string;
                            channels?: Uint8Array;
                            moniker?: string;
                            other?: {
                                txIndex?: string;
                                rpcAddress?: string;
                            };
                        };
                        applicationVersion?: {
                            name?: string;
                            appName?: string;
                            version?: string;
                            gitCommit?: string;
                            buildTags?: string;
                            goVersion?: string;
                            buildDeps?: {
                                path?: string;
                                version?: string;
                                sum?: string;
                            }[];
                            cosmosSdkVersion?: string;
                        };
                    }): _180.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _180.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.VersionInfo;
                    fromJSON(object: any): _180.VersionInfo;
                    toJSON(message: _180.VersionInfo): unknown;
                    fromPartial(object: {
                        name?: string;
                        appName?: string;
                        version?: string;
                        gitCommit?: string;
                        buildTags?: string;
                        goVersion?: string;
                        buildDeps?: {
                            path?: string;
                            version?: string;
                            sum?: string;
                        }[];
                        cosmosSdkVersion?: string;
                    }): _180.VersionInfo;
                };
                Module: {
                    encode(message: _180.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.Module;
                    fromJSON(object: any): _180.Module;
                    toJSON(message: _180.Module): unknown;
                    fromPartial(object: {
                        path?: string;
                        version?: string;
                        sum?: string;
                    }): _180.Module;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _181.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.Coin;
                fromJSON(object: any): _181.Coin;
                toJSON(message: _181.Coin): unknown;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _181.Coin;
            };
            DecCoin: {
                encode(message: _181.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.DecCoin;
                fromJSON(object: any): _181.DecCoin;
                toJSON(message: _181.DecCoin): unknown;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _181.DecCoin;
            };
            IntProto: {
                encode(message: _181.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.IntProto;
                fromJSON(object: any): _181.IntProto;
                toJSON(message: _181.IntProto): unknown;
                fromPartial(object: {
                    int?: string;
                }): _181.IntProto;
            };
            DecProto: {
                encode(message: _181.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.DecProto;
                fromJSON(object: any): _181.DecProto;
                toJSON(message: _181.DecProto): unknown;
                fromPartial(object: {
                    dec?: string;
                }): _181.DecProto;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                encode(message: _183.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.GenesisOwners;
                fromJSON(object: any): _183.GenesisOwners;
                toJSON(message: _183.GenesisOwners): unknown;
                fromPartial(object: {
                    index?: any;
                    indexOwners?: {
                        owners?: {
                            module?: string;
                            name?: string;
                        }[];
                    };
                }): _183.GenesisOwners;
            };
            GenesisState: {
                encode(message: _183.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.GenesisState;
                fromJSON(object: any): _183.GenesisState;
                toJSON(message: _183.GenesisState): unknown;
                fromPartial(object: {
                    index?: any;
                    owners?: {
                        index?: any;
                        indexOwners?: {
                            owners?: {
                                module?: string;
                                name?: string;
                            }[];
                        };
                    }[];
                }): _183.GenesisState;
            };
            Capability: {
                encode(message: _182.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.Capability;
                fromJSON(object: any): _182.Capability;
                toJSON(message: _182.Capability): unknown;
                fromPartial(object: {
                    index?: any;
                }): _182.Capability;
            };
            Owner: {
                encode(message: _182.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.Owner;
                fromJSON(object: any): _182.Owner;
                toJSON(message: _182.Owner): unknown;
                fromPartial(object: {
                    module?: string;
                    name?: string;
                }): _182.Owner;
            };
            CapabilityOwners: {
                encode(message: _182.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.CapabilityOwners;
                fromJSON(object: any): _182.CapabilityOwners;
                toJSON(message: _182.CapabilityOwners): unknown;
                fromPartial(object: {
                    owners?: {
                        module?: string;
                        name?: string;
                    }[];
                }): _182.CapabilityOwners;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _185.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _185.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _185.MsgVerifyInvariant;
                    };
                };
                toJSON: {
                    verifyInvariant(value: _185.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _185.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _185.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _185.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: ({ sender, invariantModuleName, invariantRoute }: _185.MsgVerifyInvariant) => {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    };
                    fromAmino: ({ sender, invariant_module_name, invariant_route }: {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    }) => _185.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                encode(message: _185.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.MsgVerifyInvariant;
                fromJSON(object: any): _185.MsgVerifyInvariant;
                toJSON(message: _185.MsgVerifyInvariant): unknown;
                fromPartial(object: {
                    sender?: string;
                    invariantModuleName?: string;
                    invariantRoute?: string;
                }): _185.MsgVerifyInvariant;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _185.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.MsgVerifyInvariantResponse;
                fromJSON(_: any): _185.MsgVerifyInvariantResponse;
                toJSON(_: _185.MsgVerifyInvariantResponse): unknown;
                fromPartial(_: {}): _185.MsgVerifyInvariantResponse;
            };
            GenesisState: {
                encode(message: _184.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.GenesisState;
                fromJSON(object: any): _184.GenesisState;
                toJSON(message: _184.GenesisState): unknown;
                fromPartial(object: {
                    constantFee?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _184.GenesisState;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _186.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.PubKey;
                fromJSON(object: any): _186.PubKey;
                toJSON(message: _186.PubKey): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _186.PubKey;
            };
            PrivKey: {
                encode(message: _186.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.PrivKey;
                fromJSON(object: any): _186.PrivKey;
                toJSON(message: _186.PrivKey): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _186.PrivKey;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _187.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.BIP44Params;
                    fromJSON(object: any): _187.BIP44Params;
                    toJSON(message: _187.BIP44Params): unknown;
                    fromPartial(object: {
                        purpose?: number;
                        coinType?: number;
                        account?: number;
                        change?: boolean;
                        addressIndex?: number;
                    }): _187.BIP44Params;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _188.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.Record;
                    fromJSON(object: any): _188.Record;
                    toJSON(message: _188.Record): unknown;
                    fromPartial(object: {
                        name?: string;
                        pubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        local?: {
                            privKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            privKeyType?: string;
                        };
                        ledger?: {
                            path?: {
                                purpose?: number;
                                coinType?: number;
                                account?: number;
                                change?: boolean;
                                addressIndex?: number;
                            };
                        };
                        multi?: {};
                        offline?: {};
                    }): _188.Record;
                };
                Record_Local: {
                    encode(message: _188.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.Record_Local;
                    fromJSON(object: any): _188.Record_Local;
                    toJSON(message: _188.Record_Local): unknown;
                    fromPartial(object: {
                        privKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        privKeyType?: string;
                    }): _188.Record_Local;
                };
                Record_Ledger: {
                    encode(message: _188.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.Record_Ledger;
                    fromJSON(object: any): _188.Record_Ledger;
                    toJSON(message: _188.Record_Ledger): unknown;
                    fromPartial(object: {
                        path?: {
                            purpose?: number;
                            coinType?: number;
                            account?: number;
                            change?: boolean;
                            addressIndex?: number;
                        };
                    }): _188.Record_Ledger;
                };
                Record_Multi: {
                    encode(_: _188.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.Record_Multi;
                    fromJSON(_: any): _188.Record_Multi;
                    toJSON(_: _188.Record_Multi): unknown;
                    fromPartial(_: {}): _188.Record_Multi;
                };
                Record_Offline: {
                    encode(_: _188.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.Record_Offline;
                    fromJSON(_: any): _188.Record_Offline;
                    toJSON(_: _188.Record_Offline): unknown;
                    fromPartial(_: {}): _188.Record_Offline;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _189.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.LegacyAminoPubKey;
                fromJSON(object: any): _189.LegacyAminoPubKey;
                toJSON(message: _189.LegacyAminoPubKey): unknown;
                fromPartial(object: {
                    threshold?: number;
                    publicKeys?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _189.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _190.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.PubKey;
                fromJSON(object: any): _190.PubKey;
                toJSON(message: _190.PubKey): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _190.PubKey;
            };
            PrivKey: {
                encode(message: _190.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.PrivKey;
                fromJSON(object: any): _190.PrivKey;
                toJSON(message: _190.PrivKey): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _190.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _191.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.PubKey;
                fromJSON(object: any): _191.PubKey;
                toJSON(message: _191.PubKey): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _191.PubKey;
            };
            PrivKey: {
                encode(message: _191.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.PrivKey;
                fromJSON(object: any): _191.PrivKey;
                toJSON(message: _191.PrivKey): unknown;
                fromPartial(object: {
                    secret?: Uint8Array;
                }): _191.PrivKey;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _195.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _195.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _195.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _195.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _195.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _195.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _195.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _195.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _195.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _195.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _195.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _195.MsgFundCommunityPool;
                    };
                };
                toJSON: {
                    setWithdrawAddress(value: _195.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawDelegatorReward(value: _195.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawValidatorCommission(value: _195.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: unknown;
                    };
                    fundCommunityPool(value: _195.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _195.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _195.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _195.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _195.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _195.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _195.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _195.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _195.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _195.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _195.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _195.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _195.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, withdrawAddress }: _195.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _195.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress }: _195.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _195.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validatorAddress }: _195.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _195.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _195.MsgFundCommunityPool) => {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    };
                    fromAmino: ({ amount, depositor }: {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    }) => _195.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _195.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.MsgSetWithdrawAddress;
                fromJSON(object: any): _195.MsgSetWithdrawAddress;
                toJSON(message: _195.MsgSetWithdrawAddress): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    withdrawAddress?: string;
                }): _195.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _195.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.MsgSetWithdrawAddressResponse;
                fromJSON(_: any): _195.MsgSetWithdrawAddressResponse;
                toJSON(_: _195.MsgSetWithdrawAddressResponse): unknown;
                fromPartial(_: {}): _195.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _195.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.MsgWithdrawDelegatorReward;
                fromJSON(object: any): _195.MsgWithdrawDelegatorReward;
                toJSON(message: _195.MsgWithdrawDelegatorReward): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                }): _195.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _195.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.MsgWithdrawDelegatorRewardResponse;
                fromJSON(object: any): _195.MsgWithdrawDelegatorRewardResponse;
                toJSON(message: _195.MsgWithdrawDelegatorRewardResponse): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _195.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _195.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.MsgWithdrawValidatorCommission;
                fromJSON(object: any): _195.MsgWithdrawValidatorCommission;
                toJSON(message: _195.MsgWithdrawValidatorCommission): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _195.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _195.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.MsgWithdrawValidatorCommissionResponse;
                fromJSON(object: any): _195.MsgWithdrawValidatorCommissionResponse;
                toJSON(message: _195.MsgWithdrawValidatorCommissionResponse): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _195.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _195.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.MsgFundCommunityPool;
                fromJSON(object: any): _195.MsgFundCommunityPool;
                toJSON(message: _195.MsgFundCommunityPool): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    depositor?: string;
                }): _195.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _195.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.MsgFundCommunityPoolResponse;
                fromJSON(_: any): _195.MsgFundCommunityPoolResponse;
                toJSON(_: _195.MsgFundCommunityPoolResponse): unknown;
                fromPartial(_: {}): _195.MsgFundCommunityPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _194.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.QueryParamsRequest;
                fromJSON(_: any): _194.QueryParamsRequest;
                toJSON(_: _194.QueryParamsRequest): unknown;
                fromPartial(_: {}): _194.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _194.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.QueryParamsResponse;
                fromJSON(object: any): _194.QueryParamsResponse;
                toJSON(message: _194.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        communityTax?: string;
                        baseProposerReward?: string;
                        bonusProposerReward?: string;
                        withdrawAddrEnabled?: boolean;
                    };
                }): _194.QueryParamsResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _194.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.QueryValidatorOutstandingRewardsRequest;
                fromJSON(object: any): _194.QueryValidatorOutstandingRewardsRequest;
                toJSON(message: _194.QueryValidatorOutstandingRewardsRequest): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _194.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _194.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.QueryValidatorOutstandingRewardsResponse;
                fromJSON(object: any): _194.QueryValidatorOutstandingRewardsResponse;
                toJSON(message: _194.QueryValidatorOutstandingRewardsResponse): unknown;
                fromPartial(object: {
                    rewards?: {
                        rewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _194.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _194.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.QueryValidatorCommissionRequest;
                fromJSON(object: any): _194.QueryValidatorCommissionRequest;
                toJSON(message: _194.QueryValidatorCommissionRequest): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _194.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _194.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.QueryValidatorCommissionResponse;
                fromJSON(object: any): _194.QueryValidatorCommissionResponse;
                toJSON(message: _194.QueryValidatorCommissionResponse): unknown;
                fromPartial(object: {
                    commission?: {
                        commission?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _194.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _194.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.QueryValidatorSlashesRequest;
                fromJSON(object: any): _194.QueryValidatorSlashesRequest;
                toJSON(message: _194.QueryValidatorSlashesRequest): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    startingHeight?: any;
                    endingHeight?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _194.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _194.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.QueryValidatorSlashesResponse;
                fromJSON(object: any): _194.QueryValidatorSlashesResponse;
                toJSON(message: _194.QueryValidatorSlashesResponse): unknown;
                fromPartial(object: {
                    slashes?: {
                        validatorPeriod?: any;
                        fraction?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _194.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _194.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.QueryDelegationRewardsRequest;
                fromJSON(object: any): _194.QueryDelegationRewardsRequest;
                toJSON(message: _194.QueryDelegationRewardsRequest): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                }): _194.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _194.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.QueryDelegationRewardsResponse;
                fromJSON(object: any): _194.QueryDelegationRewardsResponse;
                toJSON(message: _194.QueryDelegationRewardsResponse): unknown;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _194.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _194.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.QueryDelegationTotalRewardsRequest;
                fromJSON(object: any): _194.QueryDelegationTotalRewardsRequest;
                toJSON(message: _194.QueryDelegationTotalRewardsRequest): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                }): _194.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _194.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.QueryDelegationTotalRewardsResponse;
                fromJSON(object: any): _194.QueryDelegationTotalRewardsResponse;
                toJSON(message: _194.QueryDelegationTotalRewardsResponse): unknown;
                fromPartial(object: {
                    rewards?: {
                        validatorAddress?: string;
                        reward?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    total?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _194.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _194.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _194.QueryDelegatorValidatorsRequest;
                toJSON(message: _194.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                }): _194.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _194.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _194.QueryDelegatorValidatorsResponse;
                toJSON(message: _194.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: {
                    validators?: string[];
                }): _194.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _194.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.QueryDelegatorWithdrawAddressRequest;
                fromJSON(object: any): _194.QueryDelegatorWithdrawAddressRequest;
                toJSON(message: _194.QueryDelegatorWithdrawAddressRequest): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                }): _194.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _194.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.QueryDelegatorWithdrawAddressResponse;
                fromJSON(object: any): _194.QueryDelegatorWithdrawAddressResponse;
                toJSON(message: _194.QueryDelegatorWithdrawAddressResponse): unknown;
                fromPartial(object: {
                    withdrawAddress?: string;
                }): _194.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _194.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.QueryCommunityPoolRequest;
                fromJSON(_: any): _194.QueryCommunityPoolRequest;
                toJSON(_: _194.QueryCommunityPoolRequest): unknown;
                fromPartial(_: {}): _194.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _194.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.QueryCommunityPoolResponse;
                fromJSON(object: any): _194.QueryCommunityPoolResponse;
                toJSON(message: _194.QueryCommunityPoolResponse): unknown;
                fromPartial(object: {
                    pool?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _194.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _193.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.DelegatorWithdrawInfo;
                fromJSON(object: any): _193.DelegatorWithdrawInfo;
                toJSON(message: _193.DelegatorWithdrawInfo): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    withdrawAddress?: string;
                }): _193.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _193.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.ValidatorOutstandingRewardsRecord;
                fromJSON(object: any): _193.ValidatorOutstandingRewardsRecord;
                toJSON(message: _193.ValidatorOutstandingRewardsRecord): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    outstandingRewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _193.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _193.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.ValidatorAccumulatedCommissionRecord;
                fromJSON(object: any): _193.ValidatorAccumulatedCommissionRecord;
                toJSON(message: _193.ValidatorAccumulatedCommissionRecord): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    accumulated?: {
                        commission?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _193.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _193.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.ValidatorHistoricalRewardsRecord;
                fromJSON(object: any): _193.ValidatorHistoricalRewardsRecord;
                toJSON(message: _193.ValidatorHistoricalRewardsRecord): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    period?: any;
                    rewards?: {
                        cumulativeRewardRatio?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        referenceCount?: number;
                    };
                }): _193.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _193.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.ValidatorCurrentRewardsRecord;
                fromJSON(object: any): _193.ValidatorCurrentRewardsRecord;
                toJSON(message: _193.ValidatorCurrentRewardsRecord): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    rewards?: {
                        rewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        period?: any;
                    };
                }): _193.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _193.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.DelegatorStartingInfoRecord;
                fromJSON(object: any): _193.DelegatorStartingInfoRecord;
                toJSON(message: _193.DelegatorStartingInfoRecord): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    startingInfo?: {
                        previousPeriod?: any;
                        stake?: string;
                        height?: any;
                    };
                }): _193.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _193.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.ValidatorSlashEventRecord;
                fromJSON(object: any): _193.ValidatorSlashEventRecord;
                toJSON(message: _193.ValidatorSlashEventRecord): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    height?: any;
                    period?: any;
                    validatorSlashEvent?: {
                        validatorPeriod?: any;
                        fraction?: string;
                    };
                }): _193.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _193.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.GenesisState;
                fromJSON(object: any): _193.GenesisState;
                toJSON(message: _193.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        communityTax?: string;
                        baseProposerReward?: string;
                        bonusProposerReward?: string;
                        withdrawAddrEnabled?: boolean;
                    };
                    feePool?: {
                        communityPool?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                    delegatorWithdrawInfos?: {
                        delegatorAddress?: string;
                        withdrawAddress?: string;
                    }[];
                    previousProposer?: string;
                    outstandingRewards?: {
                        validatorAddress?: string;
                        outstandingRewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    validatorAccumulatedCommissions?: {
                        validatorAddress?: string;
                        accumulated?: {
                            commission?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                    }[];
                    validatorHistoricalRewards?: {
                        validatorAddress?: string;
                        period?: any;
                        rewards?: {
                            cumulativeRewardRatio?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            referenceCount?: number;
                        };
                    }[];
                    validatorCurrentRewards?: {
                        validatorAddress?: string;
                        rewards?: {
                            rewards?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            period?: any;
                        };
                    }[];
                    delegatorStartingInfos?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        startingInfo?: {
                            previousPeriod?: any;
                            stake?: string;
                            height?: any;
                        };
                    }[];
                    validatorSlashEvents?: {
                        validatorAddress?: string;
                        height?: any;
                        period?: any;
                        validatorSlashEvent?: {
                            validatorPeriod?: any;
                            fraction?: string;
                        };
                    }[];
                }): _193.GenesisState;
            };
            Params: {
                encode(message: _192.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.Params;
                fromJSON(object: any): _192.Params;
                toJSON(message: _192.Params): unknown;
                fromPartial(object: {
                    communityTax?: string;
                    baseProposerReward?: string;
                    bonusProposerReward?: string;
                    withdrawAddrEnabled?: boolean;
                }): _192.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _192.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.ValidatorHistoricalRewards;
                fromJSON(object: any): _192.ValidatorHistoricalRewards;
                toJSON(message: _192.ValidatorHistoricalRewards): unknown;
                fromPartial(object: {
                    cumulativeRewardRatio?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    referenceCount?: number;
                }): _192.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _192.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.ValidatorCurrentRewards;
                fromJSON(object: any): _192.ValidatorCurrentRewards;
                toJSON(message: _192.ValidatorCurrentRewards): unknown;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    period?: any;
                }): _192.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _192.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.ValidatorAccumulatedCommission;
                fromJSON(object: any): _192.ValidatorAccumulatedCommission;
                toJSON(message: _192.ValidatorAccumulatedCommission): unknown;
                fromPartial(object: {
                    commission?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _192.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _192.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.ValidatorOutstandingRewards;
                fromJSON(object: any): _192.ValidatorOutstandingRewards;
                toJSON(message: _192.ValidatorOutstandingRewards): unknown;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _192.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _192.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.ValidatorSlashEvent;
                fromJSON(object: any): _192.ValidatorSlashEvent;
                toJSON(message: _192.ValidatorSlashEvent): unknown;
                fromPartial(object: {
                    validatorPeriod?: any;
                    fraction?: string;
                }): _192.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _192.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.ValidatorSlashEvents;
                fromJSON(object: any): _192.ValidatorSlashEvents;
                toJSON(message: _192.ValidatorSlashEvents): unknown;
                fromPartial(object: {
                    validatorSlashEvents?: {
                        validatorPeriod?: any;
                        fraction?: string;
                    }[];
                }): _192.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _192.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.FeePool;
                fromJSON(object: any): _192.FeePool;
                toJSON(message: _192.FeePool): unknown;
                fromPartial(object: {
                    communityPool?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _192.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _192.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.CommunityPoolSpendProposal;
                fromJSON(object: any): _192.CommunityPoolSpendProposal;
                toJSON(message: _192.CommunityPoolSpendProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    recipient?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _192.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _192.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.DelegatorStartingInfo;
                fromJSON(object: any): _192.DelegatorStartingInfo;
                toJSON(message: _192.DelegatorStartingInfo): unknown;
                fromPartial(object: {
                    previousPeriod?: any;
                    stake?: string;
                    height?: any;
                }): _192.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _192.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.DelegationDelegatorReward;
                fromJSON(object: any): _192.DelegationDelegatorReward;
                toJSON(message: _192.DelegationDelegatorReward): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    reward?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _192.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _192.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.CommunityPoolSpendProposalWithDeposit;
                fromJSON(object: any): _192.CommunityPoolSpendProposalWithDeposit;
                toJSON(message: _192.CommunityPoolSpendProposalWithDeposit): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    recipient?: string;
                    amount?: string;
                    deposit?: string;
                }): _192.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _199.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _199.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _199.MsgSubmitEvidence;
                    };
                };
                toJSON: {
                    submitEvidence(value: _199.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _199.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _199.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _199.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: ({ submitter, evidence }: _199.MsgSubmitEvidence) => {
                        submitter: string;
                        evidence: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ submitter, evidence }: {
                        submitter: string;
                        evidence: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _199.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                encode(message: _199.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.MsgSubmitEvidence;
                fromJSON(object: any): _199.MsgSubmitEvidence;
                toJSON(message: _199.MsgSubmitEvidence): unknown;
                fromPartial(object: {
                    submitter?: string;
                    evidence?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _199.MsgSubmitEvidence;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _199.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.MsgSubmitEvidenceResponse;
                fromJSON(object: any): _199.MsgSubmitEvidenceResponse;
                toJSON(message: _199.MsgSubmitEvidenceResponse): unknown;
                fromPartial(object: {
                    hash?: Uint8Array;
                }): _199.MsgSubmitEvidenceResponse;
            };
            QueryEvidenceRequest: {
                encode(message: _198.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryEvidenceRequest;
                fromJSON(object: any): _198.QueryEvidenceRequest;
                toJSON(message: _198.QueryEvidenceRequest): unknown;
                fromPartial(object: {
                    evidenceHash?: Uint8Array;
                }): _198.QueryEvidenceRequest;
            };
            QueryEvidenceResponse: {
                encode(message: _198.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryEvidenceResponse;
                fromJSON(object: any): _198.QueryEvidenceResponse;
                toJSON(message: _198.QueryEvidenceResponse): unknown;
                fromPartial(object: {
                    evidence?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _198.QueryEvidenceResponse;
            };
            QueryAllEvidenceRequest: {
                encode(message: _198.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryAllEvidenceRequest;
                fromJSON(object: any): _198.QueryAllEvidenceRequest;
                toJSON(message: _198.QueryAllEvidenceRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _198.QueryAllEvidenceRequest;
            };
            QueryAllEvidenceResponse: {
                encode(message: _198.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryAllEvidenceResponse;
                fromJSON(object: any): _198.QueryAllEvidenceResponse;
                toJSON(message: _198.QueryAllEvidenceResponse): unknown;
                fromPartial(object: {
                    evidence?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _198.QueryAllEvidenceResponse;
            };
            GenesisState: {
                encode(message: _197.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.GenesisState;
                fromJSON(object: any): _197.GenesisState;
                toJSON(message: _197.GenesisState): unknown;
                fromPartial(object: {
                    evidence?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _197.GenesisState;
            };
            Equivocation: {
                encode(message: _196.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.Equivocation;
                fromJSON(object: any): _196.Equivocation;
                toJSON(message: _196.Equivocation): unknown;
                fromPartial(object: {
                    height?: any;
                    time?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    power?: any;
                    consensusAddress?: string;
                }): _196.Equivocation;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _203.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _203.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _203.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _203.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _203.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _203.MsgRevokeAllowance;
                    };
                };
                toJSON: {
                    grantAllowance(value: _203.MsgGrantAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revokeAllowance(value: _203.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _203.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _203.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _203.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _203.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _203.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _203.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, allowance }: _203.MsgGrantAllowance) => {
                        granter: string;
                        grantee: string;
                        allowance: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ granter, grantee, allowance }: {
                        granter: string;
                        grantee: string;
                        allowance: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _203.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee }: _203.MsgRevokeAllowance) => {
                        granter: string;
                        grantee: string;
                    };
                    fromAmino: ({ granter, grantee }: {
                        granter: string;
                        grantee: string;
                    }) => _203.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                encode(message: _203.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.MsgGrantAllowance;
                fromJSON(object: any): _203.MsgGrantAllowance;
                toJSON(message: _203.MsgGrantAllowance): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    allowance?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _203.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _203.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.MsgGrantAllowanceResponse;
                fromJSON(_: any): _203.MsgGrantAllowanceResponse;
                toJSON(_: _203.MsgGrantAllowanceResponse): unknown;
                fromPartial(_: {}): _203.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _203.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.MsgRevokeAllowance;
                fromJSON(object: any): _203.MsgRevokeAllowance;
                toJSON(message: _203.MsgRevokeAllowance): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                }): _203.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _203.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.MsgRevokeAllowanceResponse;
                fromJSON(_: any): _203.MsgRevokeAllowanceResponse;
                toJSON(_: _203.MsgRevokeAllowanceResponse): unknown;
                fromPartial(_: {}): _203.MsgRevokeAllowanceResponse;
            };
            QueryAllowanceRequest: {
                encode(message: _202.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.QueryAllowanceRequest;
                fromJSON(object: any): _202.QueryAllowanceRequest;
                toJSON(message: _202.QueryAllowanceRequest): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                }): _202.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _202.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.QueryAllowanceResponse;
                fromJSON(object: any): _202.QueryAllowanceResponse;
                toJSON(message: _202.QueryAllowanceResponse): unknown;
                fromPartial(object: {
                    allowance?: {
                        granter?: string;
                        grantee?: string;
                        allowance?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _202.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _202.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.QueryAllowancesRequest;
                fromJSON(object: any): _202.QueryAllowancesRequest;
                toJSON(message: _202.QueryAllowancesRequest): unknown;
                fromPartial(object: {
                    grantee?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _202.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _202.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.QueryAllowancesResponse;
                fromJSON(object: any): _202.QueryAllowancesResponse;
                toJSON(message: _202.QueryAllowancesResponse): unknown;
                fromPartial(object: {
                    allowances?: {
                        granter?: string;
                        grantee?: string;
                        allowance?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _202.QueryAllowancesResponse;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _202.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.QueryAllowancesByGranterRequest;
                fromJSON(object: any): _202.QueryAllowancesByGranterRequest;
                toJSON(message: _202.QueryAllowancesByGranterRequest): unknown;
                fromPartial(object: {
                    granter?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _202.QueryAllowancesByGranterRequest;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _202.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.QueryAllowancesByGranterResponse;
                fromJSON(object: any): _202.QueryAllowancesByGranterResponse;
                toJSON(message: _202.QueryAllowancesByGranterResponse): unknown;
                fromPartial(object: {
                    allowances?: {
                        granter?: string;
                        grantee?: string;
                        allowance?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _202.QueryAllowancesByGranterResponse;
            };
            GenesisState: {
                encode(message: _201.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.GenesisState;
                fromJSON(object: any): _201.GenesisState;
                toJSON(message: _201.GenesisState): unknown;
                fromPartial(object: {
                    allowances?: {
                        granter?: string;
                        grantee?: string;
                        allowance?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                }): _201.GenesisState;
            };
            BasicAllowance: {
                encode(message: _200.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.BasicAllowance;
                fromJSON(object: any): _200.BasicAllowance;
                toJSON(message: _200.BasicAllowance): unknown;
                fromPartial(object: {
                    spendLimit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    expiration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _200.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _200.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.PeriodicAllowance;
                fromJSON(object: any): _200.PeriodicAllowance;
                toJSON(message: _200.PeriodicAllowance): unknown;
                fromPartial(object: {
                    basic?: {
                        spendLimit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        expiration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    period?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    periodSpendLimit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    periodCanSpend?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    periodReset?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _200.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _200.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.AllowedMsgAllowance;
                fromJSON(object: any): _200.AllowedMsgAllowance;
                toJSON(message: _200.AllowedMsgAllowance): unknown;
                fromPartial(object: {
                    allowance?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    allowedMessages?: string[];
                }): _200.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _200.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.Grant;
                fromJSON(object: any): _200.Grant;
                toJSON(message: _200.Grant): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    allowance?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _200.Grant;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                encode(message: _204.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.GenesisState;
                fromJSON(object: any): _204.GenesisState;
                toJSON(message: _204.GenesisState): unknown;
                fromPartial(object: {
                    genTxs?: Uint8Array[];
                }): _204.GenesisState;
            };
        };
    }
    namespace gov {
        const v1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _208.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _208.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _208.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _208.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _208.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _208.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _208.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _208.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _208.MsgExecLegacyContent;
                    };
                    vote(value: _208.MsgVote): {
                        typeUrl: string;
                        value: _208.MsgVote;
                    };
                    voteWeighted(value: _208.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _208.MsgVoteWeighted;
                    };
                    deposit(value: _208.MsgDeposit): {
                        typeUrl: string;
                        value: _208.MsgDeposit;
                    };
                };
                toJSON: {
                    submitProposal(value: _208.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    execLegacyContent(value: _208.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _208.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _208.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _208.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _208.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _208.MsgExecLegacyContent;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _208.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _208.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _208.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _208.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _208.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _208.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _208.MsgExecLegacyContent;
                    };
                    vote(value: _208.MsgVote): {
                        typeUrl: string;
                        value: _208.MsgVote;
                    };
                    voteWeighted(value: _208.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _208.MsgVoteWeighted;
                    };
                    deposit(value: _208.MsgDeposit): {
                        typeUrl: string;
                        value: _208.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ messages, initialDeposit, proposer, metadata }: _208.MsgSubmitProposal) => {
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                        metadata: string;
                    };
                    fromAmino: ({ messages, initial_deposit, proposer, metadata }: {
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                        metadata: string;
                    }) => _208.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: ({ content, authority }: _208.MsgExecLegacyContent) => {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        authority: string;
                    };
                    fromAmino: ({ content, authority }: {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        authority: string;
                    }) => _208.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata }: _208.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                    };
                    fromAmino: ({ proposal_id, voter, option, metadata }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                    }) => _208.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options, metadata }: _208.MsgVoteWeighted) => {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                        metadata: string;
                    };
                    fromAmino: ({ proposal_id, voter, options, metadata }: {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                        metadata: string;
                    }) => _208.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _208.MsgDeposit) => {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, depositor, amount }: {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _208.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _208.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.MsgSubmitProposal;
                fromJSON(object: any): _208.MsgSubmitProposal;
                toJSON(message: _208.MsgSubmitProposal): unknown;
                fromPartial(object: {
                    messages?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    initialDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    proposer?: string;
                    metadata?: string;
                }): _208.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _208.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.MsgSubmitProposalResponse;
                fromJSON(object: any): _208.MsgSubmitProposalResponse;
                toJSON(message: _208.MsgSubmitProposalResponse): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _208.MsgSubmitProposalResponse;
            };
            MsgExecLegacyContent: {
                encode(message: _208.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.MsgExecLegacyContent;
                fromJSON(object: any): _208.MsgExecLegacyContent;
                toJSON(message: _208.MsgExecLegacyContent): unknown;
                fromPartial(object: {
                    content?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    authority?: string;
                }): _208.MsgExecLegacyContent;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _208.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.MsgExecLegacyContentResponse;
                fromJSON(_: any): _208.MsgExecLegacyContentResponse;
                toJSON(_: _208.MsgExecLegacyContentResponse): unknown;
                fromPartial(_: {}): _208.MsgExecLegacyContentResponse;
            };
            MsgVote: {
                encode(message: _208.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.MsgVote;
                fromJSON(object: any): _208.MsgVote;
                toJSON(message: _208.MsgVote): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    option?: _206.VoteOption;
                    metadata?: string;
                }): _208.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _208.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.MsgVoteResponse;
                fromJSON(_: any): _208.MsgVoteResponse;
                toJSON(_: _208.MsgVoteResponse): unknown;
                fromPartial(_: {}): _208.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _208.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.MsgVoteWeighted;
                fromJSON(object: any): _208.MsgVoteWeighted;
                toJSON(message: _208.MsgVoteWeighted): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    options?: {
                        option?: _206.VoteOption;
                        weight?: string;
                    }[];
                    metadata?: string;
                }): _208.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _208.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.MsgVoteWeightedResponse;
                fromJSON(_: any): _208.MsgVoteWeightedResponse;
                toJSON(_: _208.MsgVoteWeightedResponse): unknown;
                fromPartial(_: {}): _208.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _208.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.MsgDeposit;
                fromJSON(object: any): _208.MsgDeposit;
                toJSON(message: _208.MsgDeposit): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _208.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _208.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.MsgDepositResponse;
                fromJSON(_: any): _208.MsgDepositResponse;
                toJSON(_: _208.MsgDepositResponse): unknown;
                fromPartial(_: {}): _208.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _207.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.QueryProposalRequest;
                fromJSON(object: any): _207.QueryProposalRequest;
                toJSON(message: _207.QueryProposalRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _207.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _207.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.QueryProposalResponse;
                fromJSON(object: any): _207.QueryProposalResponse;
                toJSON(message: _207.QueryProposalResponse): unknown;
                fromPartial(object: {
                    proposal?: {
                        id?: any;
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        status?: _206.ProposalStatus;
                        finalTallyResult?: {
                            yesCount?: string;
                            abstainCount?: string;
                            noCount?: string;
                            noWithVetoCount?: string;
                        };
                        submitTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        depositEndTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        votingEndTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        metadata?: string;
                    };
                }): _207.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _207.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.QueryProposalsRequest;
                fromJSON(object: any): _207.QueryProposalsRequest;
                toJSON(message: _207.QueryProposalsRequest): unknown;
                fromPartial(object: {
                    proposalStatus?: _206.ProposalStatus;
                    voter?: string;
                    depositor?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _207.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _207.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.QueryProposalsResponse;
                fromJSON(object: any): _207.QueryProposalsResponse;
                toJSON(message: _207.QueryProposalsResponse): unknown;
                fromPartial(object: {
                    proposals?: {
                        id?: any;
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        status?: _206.ProposalStatus;
                        finalTallyResult?: {
                            yesCount?: string;
                            abstainCount?: string;
                            noCount?: string;
                            noWithVetoCount?: string;
                        };
                        submitTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        depositEndTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        votingEndTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        metadata?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _207.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _207.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.QueryVoteRequest;
                fromJSON(object: any): _207.QueryVoteRequest;
                toJSON(message: _207.QueryVoteRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                }): _207.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _207.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.QueryVoteResponse;
                fromJSON(object: any): _207.QueryVoteResponse;
                toJSON(message: _207.QueryVoteResponse): unknown;
                fromPartial(object: {
                    vote?: {
                        proposalId?: any;
                        voter?: string;
                        options?: {
                            option?: _206.VoteOption;
                            weight?: string;
                        }[];
                        metadata?: string;
                    };
                }): _207.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _207.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.QueryVotesRequest;
                fromJSON(object: any): _207.QueryVotesRequest;
                toJSON(message: _207.QueryVotesRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _207.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _207.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.QueryVotesResponse;
                fromJSON(object: any): _207.QueryVotesResponse;
                toJSON(message: _207.QueryVotesResponse): unknown;
                fromPartial(object: {
                    votes?: {
                        proposalId?: any;
                        voter?: string;
                        options?: {
                            option?: _206.VoteOption;
                            weight?: string;
                        }[];
                        metadata?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _207.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _207.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.QueryParamsRequest;
                fromJSON(object: any): _207.QueryParamsRequest;
                toJSON(message: _207.QueryParamsRequest): unknown;
                fromPartial(object: {
                    paramsType?: string;
                }): _207.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _207.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.QueryParamsResponse;
                fromJSON(object: any): _207.QueryParamsResponse;
                toJSON(message: _207.QueryParamsResponse): unknown;
                fromPartial(object: {
                    votingParams?: {
                        votingPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    depositParams?: {
                        minDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        maxDepositPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    tallyParams?: {
                        quorum?: string;
                        threshold?: string;
                        vetoThreshold?: string;
                    };
                }): _207.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _207.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.QueryDepositRequest;
                fromJSON(object: any): _207.QueryDepositRequest;
                toJSON(message: _207.QueryDepositRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    depositor?: string;
                }): _207.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _207.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.QueryDepositResponse;
                fromJSON(object: any): _207.QueryDepositResponse;
                toJSON(message: _207.QueryDepositResponse): unknown;
                fromPartial(object: {
                    deposit?: {
                        proposalId?: any;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _207.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _207.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.QueryDepositsRequest;
                fromJSON(object: any): _207.QueryDepositsRequest;
                toJSON(message: _207.QueryDepositsRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _207.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _207.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.QueryDepositsResponse;
                fromJSON(object: any): _207.QueryDepositsResponse;
                toJSON(message: _207.QueryDepositsResponse): unknown;
                fromPartial(object: {
                    deposits?: {
                        proposalId?: any;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _207.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _207.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.QueryTallyResultRequest;
                fromJSON(object: any): _207.QueryTallyResultRequest;
                toJSON(message: _207.QueryTallyResultRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _207.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _207.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.QueryTallyResultResponse;
                fromJSON(object: any): _207.QueryTallyResultResponse;
                toJSON(message: _207.QueryTallyResultResponse): unknown;
                fromPartial(object: {
                    tally?: {
                        yesCount?: string;
                        abstainCount?: string;
                        noCount?: string;
                        noWithVetoCount?: string;
                    };
                }): _207.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _206.VoteOption;
            voteOptionToJSON(object: _206.VoteOption): string;
            proposalStatusFromJSON(object: any): _206.ProposalStatus;
            proposalStatusToJSON(object: _206.ProposalStatus): string;
            VoteOption: typeof _206.VoteOption;
            ProposalStatus: typeof _206.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _206.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.WeightedVoteOption;
                fromJSON(object: any): _206.WeightedVoteOption;
                toJSON(message: _206.WeightedVoteOption): unknown;
                fromPartial(object: {
                    option?: _206.VoteOption;
                    weight?: string;
                }): _206.WeightedVoteOption;
            };
            Deposit: {
                encode(message: _206.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.Deposit;
                fromJSON(object: any): _206.Deposit;
                toJSON(message: _206.Deposit): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _206.Deposit;
            };
            Proposal: {
                encode(message: _206.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.Proposal;
                fromJSON(object: any): _206.Proposal;
                toJSON(message: _206.Proposal): unknown;
                fromPartial(object: {
                    id?: any;
                    messages?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    status?: _206.ProposalStatus;
                    finalTallyResult?: {
                        yesCount?: string;
                        abstainCount?: string;
                        noCount?: string;
                        noWithVetoCount?: string;
                    };
                    submitTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    depositEndTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    totalDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    votingStartTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    votingEndTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    metadata?: string;
                }): _206.Proposal;
            };
            TallyResult: {
                encode(message: _206.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.TallyResult;
                fromJSON(object: any): _206.TallyResult;
                toJSON(message: _206.TallyResult): unknown;
                fromPartial(object: {
                    yesCount?: string;
                    abstainCount?: string;
                    noCount?: string;
                    noWithVetoCount?: string;
                }): _206.TallyResult;
            };
            Vote: {
                encode(message: _206.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.Vote;
                fromJSON(object: any): _206.Vote;
                toJSON(message: _206.Vote): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    options?: {
                        option?: _206.VoteOption;
                        weight?: string;
                    }[];
                    metadata?: string;
                }): _206.Vote;
            };
            DepositParams: {
                encode(message: _206.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.DepositParams;
                fromJSON(object: any): _206.DepositParams;
                toJSON(message: _206.DepositParams): unknown;
                fromPartial(object: {
                    minDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    maxDepositPeriod?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _206.DepositParams;
            };
            VotingParams: {
                encode(message: _206.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.VotingParams;
                fromJSON(object: any): _206.VotingParams;
                toJSON(message: _206.VotingParams): unknown;
                fromPartial(object: {
                    votingPeriod?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _206.VotingParams;
            };
            TallyParams: {
                encode(message: _206.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.TallyParams;
                fromJSON(object: any): _206.TallyParams;
                toJSON(message: _206.TallyParams): unknown;
                fromPartial(object: {
                    quorum?: string;
                    threshold?: string;
                    vetoThreshold?: string;
                }): _206.TallyParams;
            };
            GenesisState: {
                encode(message: _205.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.GenesisState;
                fromJSON(object: any): _205.GenesisState;
                toJSON(message: _205.GenesisState): unknown;
                fromPartial(object: {
                    startingProposalId?: any;
                    deposits?: {
                        proposalId?: any;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    votes?: {
                        proposalId?: any;
                        voter?: string;
                        options?: {
                            option?: _206.VoteOption;
                            weight?: string;
                        }[];
                        metadata?: string;
                    }[];
                    proposals?: {
                        id?: any;
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        status?: _206.ProposalStatus;
                        finalTallyResult?: {
                            yesCount?: string;
                            abstainCount?: string;
                            noCount?: string;
                            noWithVetoCount?: string;
                        };
                        submitTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        depositEndTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        votingEndTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        metadata?: string;
                    }[];
                    depositParams?: {
                        minDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        maxDepositPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    votingParams?: {
                        votingPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    tallyParams?: {
                        quorum?: string;
                        threshold?: string;
                        vetoThreshold?: string;
                    };
                }): _205.GenesisState;
            };
        };
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _212.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _212.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _212.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _212.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _212.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _212.MsgSubmitProposal;
                    };
                    vote(value: _212.MsgVote): {
                        typeUrl: string;
                        value: _212.MsgVote;
                    };
                    voteWeighted(value: _212.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _212.MsgVoteWeighted;
                    };
                    deposit(value: _212.MsgDeposit): {
                        typeUrl: string;
                        value: _212.MsgDeposit;
                    };
                };
                toJSON: {
                    submitProposal(value: _212.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _212.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _212.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _212.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _212.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _212.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _212.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _212.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _212.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _212.MsgSubmitProposal;
                    };
                    vote(value: _212.MsgVote): {
                        typeUrl: string;
                        value: _212.MsgVote;
                    };
                    voteWeighted(value: _212.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _212.MsgVoteWeighted;
                    };
                    deposit(value: _212.MsgDeposit): {
                        typeUrl: string;
                        value: _212.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initialDeposit, proposer }: _212.MsgSubmitProposal) => {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    };
                    fromAmino: ({ content, initial_deposit, proposer }: {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    }) => _212.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option }: _212.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _212.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options }: _212.MsgVoteWeighted) => {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, voter, options }: {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    }) => _212.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _212.MsgDeposit) => {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, depositor, amount }: {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _212.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _212.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.MsgSubmitProposal;
                fromJSON(object: any): _212.MsgSubmitProposal;
                toJSON(message: _212.MsgSubmitProposal): unknown;
                fromPartial(object: {
                    content?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    initialDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    proposer?: string;
                }): _212.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _212.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.MsgSubmitProposalResponse;
                fromJSON(object: any): _212.MsgSubmitProposalResponse;
                toJSON(message: _212.MsgSubmitProposalResponse): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _212.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _212.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.MsgVote;
                fromJSON(object: any): _212.MsgVote;
                toJSON(message: _212.MsgVote): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    option?: _210.VoteOption;
                }): _212.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _212.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.MsgVoteResponse;
                fromJSON(_: any): _212.MsgVoteResponse;
                toJSON(_: _212.MsgVoteResponse): unknown;
                fromPartial(_: {}): _212.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _212.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.MsgVoteWeighted;
                fromJSON(object: any): _212.MsgVoteWeighted;
                toJSON(message: _212.MsgVoteWeighted): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    options?: {
                        option?: _210.VoteOption;
                        weight?: string;
                    }[];
                }): _212.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _212.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.MsgVoteWeightedResponse;
                fromJSON(_: any): _212.MsgVoteWeightedResponse;
                toJSON(_: _212.MsgVoteWeightedResponse): unknown;
                fromPartial(_: {}): _212.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _212.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.MsgDeposit;
                fromJSON(object: any): _212.MsgDeposit;
                toJSON(message: _212.MsgDeposit): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _212.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _212.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.MsgDepositResponse;
                fromJSON(_: any): _212.MsgDepositResponse;
                toJSON(_: _212.MsgDepositResponse): unknown;
                fromPartial(_: {}): _212.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _211.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.QueryProposalRequest;
                fromJSON(object: any): _211.QueryProposalRequest;
                toJSON(message: _211.QueryProposalRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _211.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _211.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.QueryProposalResponse;
                fromJSON(object: any): _211.QueryProposalResponse;
                toJSON(message: _211.QueryProposalResponse): unknown;
                fromPartial(object: {
                    proposal?: {
                        proposalId?: any;
                        content?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        status?: _210.ProposalStatus;
                        finalTallyResult?: {
                            yes?: string;
                            abstain?: string;
                            no?: string;
                            noWithVeto?: string;
                        };
                        submitTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        depositEndTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        votingEndTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                }): _211.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _211.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.QueryProposalsRequest;
                fromJSON(object: any): _211.QueryProposalsRequest;
                toJSON(message: _211.QueryProposalsRequest): unknown;
                fromPartial(object: {
                    proposalStatus?: _210.ProposalStatus;
                    voter?: string;
                    depositor?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _211.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _211.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.QueryProposalsResponse;
                fromJSON(object: any): _211.QueryProposalsResponse;
                toJSON(message: _211.QueryProposalsResponse): unknown;
                fromPartial(object: {
                    proposals?: {
                        proposalId?: any;
                        content?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        status?: _210.ProposalStatus;
                        finalTallyResult?: {
                            yes?: string;
                            abstain?: string;
                            no?: string;
                            noWithVeto?: string;
                        };
                        submitTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        depositEndTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        votingEndTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _211.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _211.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.QueryVoteRequest;
                fromJSON(object: any): _211.QueryVoteRequest;
                toJSON(message: _211.QueryVoteRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                }): _211.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _211.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.QueryVoteResponse;
                fromJSON(object: any): _211.QueryVoteResponse;
                toJSON(message: _211.QueryVoteResponse): unknown;
                fromPartial(object: {
                    vote?: {
                        proposalId?: any;
                        voter?: string;
                        option?: _210.VoteOption;
                        options?: {
                            option?: _210.VoteOption;
                            weight?: string;
                        }[];
                    };
                }): _211.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _211.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.QueryVotesRequest;
                fromJSON(object: any): _211.QueryVotesRequest;
                toJSON(message: _211.QueryVotesRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _211.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _211.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.QueryVotesResponse;
                fromJSON(object: any): _211.QueryVotesResponse;
                toJSON(message: _211.QueryVotesResponse): unknown;
                fromPartial(object: {
                    votes?: {
                        proposalId?: any;
                        voter?: string;
                        option?: _210.VoteOption;
                        options?: {
                            option?: _210.VoteOption;
                            weight?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _211.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _211.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.QueryParamsRequest;
                fromJSON(object: any): _211.QueryParamsRequest;
                toJSON(message: _211.QueryParamsRequest): unknown;
                fromPartial(object: {
                    paramsType?: string;
                }): _211.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _211.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.QueryParamsResponse;
                fromJSON(object: any): _211.QueryParamsResponse;
                toJSON(message: _211.QueryParamsResponse): unknown;
                fromPartial(object: {
                    votingParams?: {
                        votingPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    depositParams?: {
                        minDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        maxDepositPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    tallyParams?: {
                        quorum?: Uint8Array;
                        threshold?: Uint8Array;
                        vetoThreshold?: Uint8Array;
                    };
                }): _211.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _211.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.QueryDepositRequest;
                fromJSON(object: any): _211.QueryDepositRequest;
                toJSON(message: _211.QueryDepositRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    depositor?: string;
                }): _211.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _211.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.QueryDepositResponse;
                fromJSON(object: any): _211.QueryDepositResponse;
                toJSON(message: _211.QueryDepositResponse): unknown;
                fromPartial(object: {
                    deposit?: {
                        proposalId?: any;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _211.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _211.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.QueryDepositsRequest;
                fromJSON(object: any): _211.QueryDepositsRequest;
                toJSON(message: _211.QueryDepositsRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _211.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _211.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.QueryDepositsResponse;
                fromJSON(object: any): _211.QueryDepositsResponse;
                toJSON(message: _211.QueryDepositsResponse): unknown;
                fromPartial(object: {
                    deposits?: {
                        proposalId?: any;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _211.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _211.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.QueryTallyResultRequest;
                fromJSON(object: any): _211.QueryTallyResultRequest;
                toJSON(message: _211.QueryTallyResultRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _211.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _211.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.QueryTallyResultResponse;
                fromJSON(object: any): _211.QueryTallyResultResponse;
                toJSON(message: _211.QueryTallyResultResponse): unknown;
                fromPartial(object: {
                    tally?: {
                        yes?: string;
                        abstain?: string;
                        no?: string;
                        noWithVeto?: string;
                    };
                }): _211.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _210.VoteOption;
            voteOptionToJSON(object: _210.VoteOption): string;
            proposalStatusFromJSON(object: any): _210.ProposalStatus;
            proposalStatusToJSON(object: _210.ProposalStatus): string;
            VoteOption: typeof _210.VoteOption;
            ProposalStatus: typeof _210.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _210.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.WeightedVoteOption;
                fromJSON(object: any): _210.WeightedVoteOption;
                toJSON(message: _210.WeightedVoteOption): unknown;
                fromPartial(object: {
                    option?: _210.VoteOption;
                    weight?: string;
                }): _210.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _210.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.TextProposal;
                fromJSON(object: any): _210.TextProposal;
                toJSON(message: _210.TextProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                }): _210.TextProposal;
            };
            Deposit: {
                encode(message: _210.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.Deposit;
                fromJSON(object: any): _210.Deposit;
                toJSON(message: _210.Deposit): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _210.Deposit;
            };
            Proposal: {
                encode(message: _210.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.Proposal;
                fromJSON(object: any): _210.Proposal;
                toJSON(message: _210.Proposal): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    content?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    status?: _210.ProposalStatus;
                    finalTallyResult?: {
                        yes?: string;
                        abstain?: string;
                        no?: string;
                        noWithVeto?: string;
                    };
                    submitTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    depositEndTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    totalDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    votingStartTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    votingEndTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _210.Proposal;
            };
            TallyResult: {
                encode(message: _210.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.TallyResult;
                fromJSON(object: any): _210.TallyResult;
                toJSON(message: _210.TallyResult): unknown;
                fromPartial(object: {
                    yes?: string;
                    abstain?: string;
                    no?: string;
                    noWithVeto?: string;
                }): _210.TallyResult;
            };
            Vote: {
                encode(message: _210.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.Vote;
                fromJSON(object: any): _210.Vote;
                toJSON(message: _210.Vote): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    option?: _210.VoteOption;
                    options?: {
                        option?: _210.VoteOption;
                        weight?: string;
                    }[];
                }): _210.Vote;
            };
            DepositParams: {
                encode(message: _210.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.DepositParams;
                fromJSON(object: any): _210.DepositParams;
                toJSON(message: _210.DepositParams): unknown;
                fromPartial(object: {
                    minDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    maxDepositPeriod?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _210.DepositParams;
            };
            VotingParams: {
                encode(message: _210.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.VotingParams;
                fromJSON(object: any): _210.VotingParams;
                toJSON(message: _210.VotingParams): unknown;
                fromPartial(object: {
                    votingPeriod?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _210.VotingParams;
            };
            TallyParams: {
                encode(message: _210.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.TallyParams;
                fromJSON(object: any): _210.TallyParams;
                toJSON(message: _210.TallyParams): unknown;
                fromPartial(object: {
                    quorum?: Uint8Array;
                    threshold?: Uint8Array;
                    vetoThreshold?: Uint8Array;
                }): _210.TallyParams;
            };
            GenesisState: {
                encode(message: _209.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.GenesisState;
                fromJSON(object: any): _209.GenesisState;
                toJSON(message: _209.GenesisState): unknown;
                fromPartial(object: {
                    startingProposalId?: any;
                    deposits?: {
                        proposalId?: any;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    votes?: {
                        proposalId?: any;
                        voter?: string;
                        option?: _210.VoteOption;
                        options?: {
                            option?: _210.VoteOption;
                            weight?: string;
                        }[];
                    }[];
                    proposals?: {
                        proposalId?: any;
                        content?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        status?: _210.ProposalStatus;
                        finalTallyResult?: {
                            yes?: string;
                            abstain?: string;
                            no?: string;
                            noWithVeto?: string;
                        };
                        submitTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        depositEndTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        votingEndTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    depositParams?: {
                        minDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        maxDepositPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    votingParams?: {
                        votingPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    tallyParams?: {
                        quorum?: Uint8Array;
                        threshold?: Uint8Array;
                        vetoThreshold?: Uint8Array;
                    };
                }): _209.GenesisState;
            };
        };
    }
    namespace group {
        const v1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _216.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _216.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _216.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _216.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _216.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _216.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _216.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _216.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _216.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _216.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _216.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _216.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _216.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _216.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _216.MsgCreateGroup): {
                        typeUrl: string;
                        value: _216.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _216.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _216.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _216.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _216.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _216.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _216.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _216.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _216.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _216.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _216.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _216.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _216.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _216.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _216.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _216.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _216.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _216.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _216.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _216.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _216.MsgWithdrawProposal;
                    };
                    vote(value: _216.MsgVote): {
                        typeUrl: string;
                        value: _216.MsgVote;
                    };
                    exec(value: _216.MsgExec): {
                        typeUrl: string;
                        value: _216.MsgExec;
                    };
                    leaveGroup(value: _216.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _216.MsgLeaveGroup;
                    };
                };
                toJSON: {
                    createGroup(value: _216.MsgCreateGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupMembers(value: _216.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupAdmin(value: _216.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupMetadata(value: _216.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createGroupPolicy(value: _216.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createGroupWithPolicy(value: _216.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyAdmin(value: _216.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyDecisionPolicy(value: _216.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyMetadata(value: _216.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    submitProposal(value: _216.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawProposal(value: _216.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _216.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exec(value: _216.MsgExec): {
                        typeUrl: string;
                        value: unknown;
                    };
                    leaveGroup(value: _216.MsgLeaveGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _216.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _216.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _216.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _216.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _216.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _216.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _216.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _216.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _216.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _216.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _216.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _216.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _216.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _216.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _216.MsgCreateGroup): {
                        typeUrl: string;
                        value: _216.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _216.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _216.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _216.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _216.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _216.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _216.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _216.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _216.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _216.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _216.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _216.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _216.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _216.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _216.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _216.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _216.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _216.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _216.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _216.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _216.MsgWithdrawProposal;
                    };
                    vote(value: _216.MsgVote): {
                        typeUrl: string;
                        value: _216.MsgVote;
                    };
                    exec(value: _216.MsgExec): {
                        typeUrl: string;
                        value: _216.MsgExec;
                    };
                    leaveGroup(value: _216.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _216.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: ({ admin, members, metadata }: _216.MsgCreateGroup) => {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                        metadata: string;
                    };
                    fromAmino: ({ admin, members, metadata }: {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                        metadata: string;
                    }) => _216.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, memberUpdates }: _216.MsgUpdateGroupMembers) => {
                        admin: string;
                        group_id: string;
                        member_updates: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                    };
                    fromAmino: ({ admin, group_id, member_updates }: {
                        admin: string;
                        group_id: string;
                        member_updates: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                    }) => _216.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, newAdmin }: _216.MsgUpdateGroupAdmin) => {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, group_id, new_admin }: {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    }) => _216.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata }: _216.MsgUpdateGroupMetadata) => {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, group_id, metadata }: {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    }) => _216.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata, decisionPolicy }: _216.MsgCreateGroupPolicy) => {
                        admin: string;
                        group_id: string;
                        metadata: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ admin, group_id, metadata, decision_policy }: {
                        admin: string;
                        group_id: string;
                        metadata: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _216.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, members, groupMetadata, groupPolicyMetadata, groupPolicyAsAdmin, decisionPolicy }: _216.MsgCreateGroupWithPolicy) => {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                        group_metadata: string;
                        group_policy_metadata: string;
                        group_policy_as_admin: boolean;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ admin, members, group_metadata, group_policy_metadata, group_policy_as_admin, decision_policy }: {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                        group_metadata: string;
                        group_policy_metadata: string;
                        group_policy_as_admin: boolean;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _216.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, address, newAdmin }: _216.MsgUpdateGroupPolicyAdmin) => {
                        admin: string;
                        address: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, address, new_admin }: {
                        admin: string;
                        address: string;
                        new_admin: string;
                    }) => _216.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, address, decisionPolicy }: _216.MsgUpdateGroupPolicyDecisionPolicy) => {
                        admin: string;
                        address: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ admin, address, decision_policy }: {
                        admin: string;
                        address: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _216.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, address, metadata }: _216.MsgUpdateGroupPolicyMetadata) => {
                        admin: string;
                        address: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, address, metadata }: {
                        admin: string;
                        address: string;
                        metadata: string;
                    }) => _216.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ address, proposers, metadata, messages, exec }: _216.MsgSubmitProposal) => {
                        address: string;
                        proposers: string[];
                        metadata: string;
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        exec: number;
                    };
                    fromAmino: ({ address, proposers, metadata, messages, exec }: {
                        address: string;
                        proposers: string[];
                        metadata: string;
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        exec: number;
                    }) => _216.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: ({ proposalId, address }: _216.MsgWithdrawProposal) => {
                        proposal_id: string;
                        address: string;
                    };
                    fromAmino: ({ proposal_id, address }: {
                        proposal_id: string;
                        address: string;
                    }) => _216.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata, exec }: _216.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                        exec: number;
                    };
                    fromAmino: ({ proposal_id, voter, option, metadata, exec }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                        exec: number;
                    }) => _216.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ proposalId, signer }: _216.MsgExec) => {
                        proposal_id: string;
                        signer: string;
                    };
                    fromAmino: ({ proposal_id, signer }: {
                        proposal_id: string;
                        signer: string;
                    }) => _216.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: ({ address, groupId }: _216.MsgLeaveGroup) => {
                        address: string;
                        group_id: string;
                    };
                    fromAmino: ({ address, group_id }: {
                        address: string;
                        group_id: string;
                    }) => _216.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _217.VoteOption;
            voteOptionToJSON(object: _217.VoteOption): string;
            proposalStatusFromJSON(object: any): _217.ProposalStatus;
            proposalStatusToJSON(object: _217.ProposalStatus): string;
            proposalResultFromJSON(object: any): _217.ProposalResult;
            proposalResultToJSON(object: _217.ProposalResult): string;
            proposalExecutorResultFromJSON(object: any): _217.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _217.ProposalExecutorResult): string;
            VoteOption: typeof _217.VoteOption;
            ProposalStatus: typeof _217.ProposalStatus;
            ProposalResult: typeof _217.ProposalResult;
            ProposalExecutorResult: typeof _217.ProposalExecutorResult;
            Member: {
                encode(message: _217.Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.Member;
                fromJSON(object: any): _217.Member;
                toJSON(message: _217.Member): unknown;
                fromPartial(object: {
                    address?: string;
                    weight?: string;
                    metadata?: string;
                    addedAt?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _217.Member;
            };
            Members: {
                encode(message: _217.Members, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.Members;
                fromJSON(object: any): _217.Members;
                toJSON(message: _217.Members): unknown;
                fromPartial(object: {
                    members?: {
                        address?: string;
                        weight?: string;
                        metadata?: string;
                        addedAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                }): _217.Members;
            };
            ThresholdDecisionPolicy: {
                encode(message: _217.ThresholdDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.ThresholdDecisionPolicy;
                fromJSON(object: any): _217.ThresholdDecisionPolicy;
                toJSON(message: _217.ThresholdDecisionPolicy): unknown;
                fromPartial(object: {
                    threshold?: string;
                    windows?: {
                        votingPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        minExecutionPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                }): _217.ThresholdDecisionPolicy;
            };
            PercentageDecisionPolicy: {
                encode(message: _217.PercentageDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.PercentageDecisionPolicy;
                fromJSON(object: any): _217.PercentageDecisionPolicy;
                toJSON(message: _217.PercentageDecisionPolicy): unknown;
                fromPartial(object: {
                    percentage?: string;
                    windows?: {
                        votingPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        minExecutionPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                }): _217.PercentageDecisionPolicy;
            };
            DecisionPolicyWindows: {
                encode(message: _217.DecisionPolicyWindows, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.DecisionPolicyWindows;
                fromJSON(object: any): _217.DecisionPolicyWindows;
                toJSON(message: _217.DecisionPolicyWindows): unknown;
                fromPartial(object: {
                    votingPeriod?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    minExecutionPeriod?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _217.DecisionPolicyWindows;
            };
            GroupInfo: {
                encode(message: _217.GroupInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.GroupInfo;
                fromJSON(object: any): _217.GroupInfo;
                toJSON(message: _217.GroupInfo): unknown;
                fromPartial(object: {
                    id?: any;
                    admin?: string;
                    metadata?: string;
                    version?: any;
                    totalWeight?: string;
                    createdAt?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _217.GroupInfo;
            };
            GroupMember: {
                encode(message: _217.GroupMember, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.GroupMember;
                fromJSON(object: any): _217.GroupMember;
                toJSON(message: _217.GroupMember): unknown;
                fromPartial(object: {
                    groupId?: any;
                    member?: {
                        address?: string;
                        weight?: string;
                        metadata?: string;
                        addedAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                }): _217.GroupMember;
            };
            GroupPolicyInfo: {
                encode(message: _217.GroupPolicyInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.GroupPolicyInfo;
                fromJSON(object: any): _217.GroupPolicyInfo;
                toJSON(message: _217.GroupPolicyInfo): unknown;
                fromPartial(object: {
                    address?: string;
                    groupId?: any;
                    admin?: string;
                    metadata?: string;
                    version?: any;
                    decisionPolicy?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    createdAt?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _217.GroupPolicyInfo;
            };
            Proposal: {
                encode(message: _217.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.Proposal;
                fromJSON(object: any): _217.Proposal;
                toJSON(message: _217.Proposal): unknown;
                fromPartial(object: {
                    id?: any;
                    address?: string;
                    metadata?: string;
                    proposers?: string[];
                    submitTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    groupVersion?: any;
                    groupPolicyVersion?: any;
                    status?: _217.ProposalStatus;
                    result?: _217.ProposalResult;
                    finalTallyResult?: {
                        yesCount?: string;
                        abstainCount?: string;
                        noCount?: string;
                        noWithVetoCount?: string;
                    };
                    votingPeriodEnd?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    executorResult?: _217.ProposalExecutorResult;
                    messages?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _217.Proposal;
            };
            TallyResult: {
                encode(message: _217.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.TallyResult;
                fromJSON(object: any): _217.TallyResult;
                toJSON(message: _217.TallyResult): unknown;
                fromPartial(object: {
                    yesCount?: string;
                    abstainCount?: string;
                    noCount?: string;
                    noWithVetoCount?: string;
                }): _217.TallyResult;
            };
            Vote: {
                encode(message: _217.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.Vote;
                fromJSON(object: any): _217.Vote;
                toJSON(message: _217.Vote): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    option?: _217.VoteOption;
                    metadata?: string;
                    submitTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _217.Vote;
            };
            execFromJSON(object: any): _216.Exec;
            execToJSON(object: _216.Exec): string;
            Exec: typeof _216.Exec;
            MsgCreateGroup: {
                encode(message: _216.MsgCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.MsgCreateGroup;
                fromJSON(object: any): _216.MsgCreateGroup;
                toJSON(message: _216.MsgCreateGroup): unknown;
                fromPartial(object: {
                    admin?: string;
                    members?: {
                        address?: string;
                        weight?: string;
                        metadata?: string;
                        addedAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    metadata?: string;
                }): _216.MsgCreateGroup;
            };
            MsgCreateGroupResponse: {
                encode(message: _216.MsgCreateGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.MsgCreateGroupResponse;
                fromJSON(object: any): _216.MsgCreateGroupResponse;
                toJSON(message: _216.MsgCreateGroupResponse): unknown;
                fromPartial(object: {
                    groupId?: any;
                }): _216.MsgCreateGroupResponse;
            };
            MsgUpdateGroupMembers: {
                encode(message: _216.MsgUpdateGroupMembers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.MsgUpdateGroupMembers;
                fromJSON(object: any): _216.MsgUpdateGroupMembers;
                toJSON(message: _216.MsgUpdateGroupMembers): unknown;
                fromPartial(object: {
                    admin?: string;
                    groupId?: any;
                    memberUpdates?: {
                        address?: string;
                        weight?: string;
                        metadata?: string;
                        addedAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                }): _216.MsgUpdateGroupMembers;
            };
            MsgUpdateGroupMembersResponse: {
                encode(_: _216.MsgUpdateGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.MsgUpdateGroupMembersResponse;
                fromJSON(_: any): _216.MsgUpdateGroupMembersResponse;
                toJSON(_: _216.MsgUpdateGroupMembersResponse): unknown;
                fromPartial(_: {}): _216.MsgUpdateGroupMembersResponse;
            };
            MsgUpdateGroupAdmin: {
                encode(message: _216.MsgUpdateGroupAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.MsgUpdateGroupAdmin;
                fromJSON(object: any): _216.MsgUpdateGroupAdmin;
                toJSON(message: _216.MsgUpdateGroupAdmin): unknown;
                fromPartial(object: {
                    admin?: string;
                    groupId?: any;
                    newAdmin?: string;
                }): _216.MsgUpdateGroupAdmin;
            };
            MsgUpdateGroupAdminResponse: {
                encode(_: _216.MsgUpdateGroupAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.MsgUpdateGroupAdminResponse;
                fromJSON(_: any): _216.MsgUpdateGroupAdminResponse;
                toJSON(_: _216.MsgUpdateGroupAdminResponse): unknown;
                fromPartial(_: {}): _216.MsgUpdateGroupAdminResponse;
            };
            MsgUpdateGroupMetadata: {
                encode(message: _216.MsgUpdateGroupMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.MsgUpdateGroupMetadata;
                fromJSON(object: any): _216.MsgUpdateGroupMetadata;
                toJSON(message: _216.MsgUpdateGroupMetadata): unknown;
                fromPartial(object: {
                    admin?: string;
                    groupId?: any;
                    metadata?: string;
                }): _216.MsgUpdateGroupMetadata;
            };
            MsgUpdateGroupMetadataResponse: {
                encode(_: _216.MsgUpdateGroupMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.MsgUpdateGroupMetadataResponse;
                fromJSON(_: any): _216.MsgUpdateGroupMetadataResponse;
                toJSON(_: _216.MsgUpdateGroupMetadataResponse): unknown;
                fromPartial(_: {}): _216.MsgUpdateGroupMetadataResponse;
            };
            MsgCreateGroupPolicy: {
                encode(message: _216.MsgCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.MsgCreateGroupPolicy;
                fromJSON(object: any): _216.MsgCreateGroupPolicy;
                toJSON(message: _216.MsgCreateGroupPolicy): unknown;
                fromPartial(object: {
                    admin?: string;
                    groupId?: any;
                    metadata?: string;
                    decisionPolicy?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _216.MsgCreateGroupPolicy;
            };
            MsgCreateGroupPolicyResponse: {
                encode(message: _216.MsgCreateGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.MsgCreateGroupPolicyResponse;
                fromJSON(object: any): _216.MsgCreateGroupPolicyResponse;
                toJSON(message: _216.MsgCreateGroupPolicyResponse): unknown;
                fromPartial(object: {
                    address?: string;
                }): _216.MsgCreateGroupPolicyResponse;
            };
            MsgUpdateGroupPolicyAdmin: {
                encode(message: _216.MsgUpdateGroupPolicyAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.MsgUpdateGroupPolicyAdmin;
                fromJSON(object: any): _216.MsgUpdateGroupPolicyAdmin;
                toJSON(message: _216.MsgUpdateGroupPolicyAdmin): unknown;
                fromPartial(object: {
                    admin?: string;
                    address?: string;
                    newAdmin?: string;
                }): _216.MsgUpdateGroupPolicyAdmin;
            };
            MsgCreateGroupWithPolicy: {
                encode(message: _216.MsgCreateGroupWithPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.MsgCreateGroupWithPolicy;
                fromJSON(object: any): _216.MsgCreateGroupWithPolicy;
                toJSON(message: _216.MsgCreateGroupWithPolicy): unknown;
                fromPartial(object: {
                    admin?: string;
                    members?: {
                        address?: string;
                        weight?: string;
                        metadata?: string;
                        addedAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    groupMetadata?: string;
                    groupPolicyMetadata?: string;
                    groupPolicyAsAdmin?: boolean;
                    decisionPolicy?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _216.MsgCreateGroupWithPolicy;
            };
            MsgCreateGroupWithPolicyResponse: {
                encode(message: _216.MsgCreateGroupWithPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.MsgCreateGroupWithPolicyResponse;
                fromJSON(object: any): _216.MsgCreateGroupWithPolicyResponse;
                toJSON(message: _216.MsgCreateGroupWithPolicyResponse): unknown;
                fromPartial(object: {
                    groupId?: any;
                    groupPolicyAddress?: string;
                }): _216.MsgCreateGroupWithPolicyResponse;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                encode(_: _216.MsgUpdateGroupPolicyAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.MsgUpdateGroupPolicyAdminResponse;
                fromJSON(_: any): _216.MsgUpdateGroupPolicyAdminResponse;
                toJSON(_: _216.MsgUpdateGroupPolicyAdminResponse): unknown;
                fromPartial(_: {}): _216.MsgUpdateGroupPolicyAdminResponse;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                encode(message: _216.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.MsgUpdateGroupPolicyDecisionPolicy;
                fromJSON(object: any): _216.MsgUpdateGroupPolicyDecisionPolicy;
                toJSON(message: _216.MsgUpdateGroupPolicyDecisionPolicy): unknown;
                fromPartial(object: {
                    admin?: string;
                    address?: string;
                    decisionPolicy?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _216.MsgUpdateGroupPolicyDecisionPolicy;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                encode(_: _216.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromJSON(_: any): _216.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toJSON(_: _216.MsgUpdateGroupPolicyDecisionPolicyResponse): unknown;
                fromPartial(_: {}): _216.MsgUpdateGroupPolicyDecisionPolicyResponse;
            };
            MsgUpdateGroupPolicyMetadata: {
                encode(message: _216.MsgUpdateGroupPolicyMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.MsgUpdateGroupPolicyMetadata;
                fromJSON(object: any): _216.MsgUpdateGroupPolicyMetadata;
                toJSON(message: _216.MsgUpdateGroupPolicyMetadata): unknown;
                fromPartial(object: {
                    admin?: string;
                    address?: string;
                    metadata?: string;
                }): _216.MsgUpdateGroupPolicyMetadata;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                encode(_: _216.MsgUpdateGroupPolicyMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.MsgUpdateGroupPolicyMetadataResponse;
                fromJSON(_: any): _216.MsgUpdateGroupPolicyMetadataResponse;
                toJSON(_: _216.MsgUpdateGroupPolicyMetadataResponse): unknown;
                fromPartial(_: {}): _216.MsgUpdateGroupPolicyMetadataResponse;
            };
            MsgSubmitProposal: {
                encode(message: _216.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.MsgSubmitProposal;
                fromJSON(object: any): _216.MsgSubmitProposal;
                toJSON(message: _216.MsgSubmitProposal): unknown;
                fromPartial(object: {
                    address?: string;
                    proposers?: string[];
                    metadata?: string;
                    messages?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    exec?: _216.Exec;
                }): _216.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _216.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.MsgSubmitProposalResponse;
                fromJSON(object: any): _216.MsgSubmitProposalResponse;
                toJSON(message: _216.MsgSubmitProposalResponse): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _216.MsgSubmitProposalResponse;
            };
            MsgWithdrawProposal: {
                encode(message: _216.MsgWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.MsgWithdrawProposal;
                fromJSON(object: any): _216.MsgWithdrawProposal;
                toJSON(message: _216.MsgWithdrawProposal): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    address?: string;
                }): _216.MsgWithdrawProposal;
            };
            MsgWithdrawProposalResponse: {
                encode(_: _216.MsgWithdrawProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.MsgWithdrawProposalResponse;
                fromJSON(_: any): _216.MsgWithdrawProposalResponse;
                toJSON(_: _216.MsgWithdrawProposalResponse): unknown;
                fromPartial(_: {}): _216.MsgWithdrawProposalResponse;
            };
            MsgVote: {
                encode(message: _216.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.MsgVote;
                fromJSON(object: any): _216.MsgVote;
                toJSON(message: _216.MsgVote): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    option?: _217.VoteOption;
                    metadata?: string;
                    exec?: _216.Exec;
                }): _216.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _216.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.MsgVoteResponse;
                fromJSON(_: any): _216.MsgVoteResponse;
                toJSON(_: _216.MsgVoteResponse): unknown;
                fromPartial(_: {}): _216.MsgVoteResponse;
            };
            MsgExec: {
                encode(message: _216.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.MsgExec;
                fromJSON(object: any): _216.MsgExec;
                toJSON(message: _216.MsgExec): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    signer?: string;
                }): _216.MsgExec;
            };
            MsgExecResponse: {
                encode(_: _216.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.MsgExecResponse;
                fromJSON(_: any): _216.MsgExecResponse;
                toJSON(_: _216.MsgExecResponse): unknown;
                fromPartial(_: {}): _216.MsgExecResponse;
            };
            MsgLeaveGroup: {
                encode(message: _216.MsgLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.MsgLeaveGroup;
                fromJSON(object: any): _216.MsgLeaveGroup;
                toJSON(message: _216.MsgLeaveGroup): unknown;
                fromPartial(object: {
                    address?: string;
                    groupId?: any;
                }): _216.MsgLeaveGroup;
            };
            MsgLeaveGroupResponse: {
                encode(_: _216.MsgLeaveGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.MsgLeaveGroupResponse;
                fromJSON(_: any): _216.MsgLeaveGroupResponse;
                toJSON(_: _216.MsgLeaveGroupResponse): unknown;
                fromPartial(_: {}): _216.MsgLeaveGroupResponse;
            };
            QueryGroupInfoRequest: {
                encode(message: _215.QueryGroupInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.QueryGroupInfoRequest;
                fromJSON(object: any): _215.QueryGroupInfoRequest;
                toJSON(message: _215.QueryGroupInfoRequest): unknown;
                fromPartial(object: {
                    groupId?: any;
                }): _215.QueryGroupInfoRequest;
            };
            QueryGroupInfoResponse: {
                encode(message: _215.QueryGroupInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.QueryGroupInfoResponse;
                fromJSON(object: any): _215.QueryGroupInfoResponse;
                toJSON(message: _215.QueryGroupInfoResponse): unknown;
                fromPartial(object: {
                    info?: {
                        id?: any;
                        admin?: string;
                        metadata?: string;
                        version?: any;
                        totalWeight?: string;
                        createdAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                }): _215.QueryGroupInfoResponse;
            };
            QueryGroupPolicyInfoRequest: {
                encode(message: _215.QueryGroupPolicyInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.QueryGroupPolicyInfoRequest;
                fromJSON(object: any): _215.QueryGroupPolicyInfoRequest;
                toJSON(message: _215.QueryGroupPolicyInfoRequest): unknown;
                fromPartial(object: {
                    address?: string;
                }): _215.QueryGroupPolicyInfoRequest;
            };
            QueryGroupPolicyInfoResponse: {
                encode(message: _215.QueryGroupPolicyInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.QueryGroupPolicyInfoResponse;
                fromJSON(object: any): _215.QueryGroupPolicyInfoResponse;
                toJSON(message: _215.QueryGroupPolicyInfoResponse): unknown;
                fromPartial(object: {
                    info?: {
                        address?: string;
                        groupId?: any;
                        admin?: string;
                        metadata?: string;
                        version?: any;
                        decisionPolicy?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        createdAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                }): _215.QueryGroupPolicyInfoResponse;
            };
            QueryGroupMembersRequest: {
                encode(message: _215.QueryGroupMembersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.QueryGroupMembersRequest;
                fromJSON(object: any): _215.QueryGroupMembersRequest;
                toJSON(message: _215.QueryGroupMembersRequest): unknown;
                fromPartial(object: {
                    groupId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _215.QueryGroupMembersRequest;
            };
            QueryGroupMembersResponse: {
                encode(message: _215.QueryGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.QueryGroupMembersResponse;
                fromJSON(object: any): _215.QueryGroupMembersResponse;
                toJSON(message: _215.QueryGroupMembersResponse): unknown;
                fromPartial(object: {
                    members?: {
                        groupId?: any;
                        member?: {
                            address?: string;
                            weight?: string;
                            metadata?: string;
                            addedAt?: {
                                seconds?: any;
                                nanos?: number;
                            };
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _215.QueryGroupMembersResponse;
            };
            QueryGroupsByAdminRequest: {
                encode(message: _215.QueryGroupsByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.QueryGroupsByAdminRequest;
                fromJSON(object: any): _215.QueryGroupsByAdminRequest;
                toJSON(message: _215.QueryGroupsByAdminRequest): unknown;
                fromPartial(object: {
                    admin?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _215.QueryGroupsByAdminRequest;
            };
            QueryGroupsByAdminResponse: {
                encode(message: _215.QueryGroupsByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.QueryGroupsByAdminResponse;
                fromJSON(object: any): _215.QueryGroupsByAdminResponse;
                toJSON(message: _215.QueryGroupsByAdminResponse): unknown;
                fromPartial(object: {
                    groups?: {
                        id?: any;
                        admin?: string;
                        metadata?: string;
                        version?: any;
                        totalWeight?: string;
                        createdAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _215.QueryGroupsByAdminResponse;
            };
            QueryGroupPoliciesByGroupRequest: {
                encode(message: _215.QueryGroupPoliciesByGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.QueryGroupPoliciesByGroupRequest;
                fromJSON(object: any): _215.QueryGroupPoliciesByGroupRequest;
                toJSON(message: _215.QueryGroupPoliciesByGroupRequest): unknown;
                fromPartial(object: {
                    groupId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _215.QueryGroupPoliciesByGroupRequest;
            };
            QueryGroupPoliciesByGroupResponse: {
                encode(message: _215.QueryGroupPoliciesByGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.QueryGroupPoliciesByGroupResponse;
                fromJSON(object: any): _215.QueryGroupPoliciesByGroupResponse;
                toJSON(message: _215.QueryGroupPoliciesByGroupResponse): unknown;
                fromPartial(object: {
                    groupPolicies?: {
                        address?: string;
                        groupId?: any;
                        admin?: string;
                        metadata?: string;
                        version?: any;
                        decisionPolicy?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        createdAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _215.QueryGroupPoliciesByGroupResponse;
            };
            QueryGroupPoliciesByAdminRequest: {
                encode(message: _215.QueryGroupPoliciesByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.QueryGroupPoliciesByAdminRequest;
                fromJSON(object: any): _215.QueryGroupPoliciesByAdminRequest;
                toJSON(message: _215.QueryGroupPoliciesByAdminRequest): unknown;
                fromPartial(object: {
                    admin?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _215.QueryGroupPoliciesByAdminRequest;
            };
            QueryGroupPoliciesByAdminResponse: {
                encode(message: _215.QueryGroupPoliciesByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.QueryGroupPoliciesByAdminResponse;
                fromJSON(object: any): _215.QueryGroupPoliciesByAdminResponse;
                toJSON(message: _215.QueryGroupPoliciesByAdminResponse): unknown;
                fromPartial(object: {
                    groupPolicies?: {
                        address?: string;
                        groupId?: any;
                        admin?: string;
                        metadata?: string;
                        version?: any;
                        decisionPolicy?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        createdAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _215.QueryGroupPoliciesByAdminResponse;
            };
            QueryProposalRequest: {
                encode(message: _215.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.QueryProposalRequest;
                fromJSON(object: any): _215.QueryProposalRequest;
                toJSON(message: _215.QueryProposalRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _215.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _215.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.QueryProposalResponse;
                fromJSON(object: any): _215.QueryProposalResponse;
                toJSON(message: _215.QueryProposalResponse): unknown;
                fromPartial(object: {
                    proposal?: {
                        id?: any;
                        address?: string;
                        metadata?: string;
                        proposers?: string[];
                        submitTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        groupVersion?: any;
                        groupPolicyVersion?: any;
                        status?: _217.ProposalStatus;
                        result?: _217.ProposalResult;
                        finalTallyResult?: {
                            yesCount?: string;
                            abstainCount?: string;
                            noCount?: string;
                            noWithVetoCount?: string;
                        };
                        votingPeriodEnd?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        executorResult?: _217.ProposalExecutorResult;
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    };
                }): _215.QueryProposalResponse;
            };
            QueryProposalsByGroupPolicyRequest: {
                encode(message: _215.QueryProposalsByGroupPolicyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.QueryProposalsByGroupPolicyRequest;
                fromJSON(object: any): _215.QueryProposalsByGroupPolicyRequest;
                toJSON(message: _215.QueryProposalsByGroupPolicyRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _215.QueryProposalsByGroupPolicyRequest;
            };
            QueryProposalsByGroupPolicyResponse: {
                encode(message: _215.QueryProposalsByGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.QueryProposalsByGroupPolicyResponse;
                fromJSON(object: any): _215.QueryProposalsByGroupPolicyResponse;
                toJSON(message: _215.QueryProposalsByGroupPolicyResponse): unknown;
                fromPartial(object: {
                    proposals?: {
                        id?: any;
                        address?: string;
                        metadata?: string;
                        proposers?: string[];
                        submitTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        groupVersion?: any;
                        groupPolicyVersion?: any;
                        status?: _217.ProposalStatus;
                        result?: _217.ProposalResult;
                        finalTallyResult?: {
                            yesCount?: string;
                            abstainCount?: string;
                            noCount?: string;
                            noWithVetoCount?: string;
                        };
                        votingPeriodEnd?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        executorResult?: _217.ProposalExecutorResult;
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _215.QueryProposalsByGroupPolicyResponse;
            };
            QueryVoteByProposalVoterRequest: {
                encode(message: _215.QueryVoteByProposalVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.QueryVoteByProposalVoterRequest;
                fromJSON(object: any): _215.QueryVoteByProposalVoterRequest;
                toJSON(message: _215.QueryVoteByProposalVoterRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                }): _215.QueryVoteByProposalVoterRequest;
            };
            QueryVoteByProposalVoterResponse: {
                encode(message: _215.QueryVoteByProposalVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.QueryVoteByProposalVoterResponse;
                fromJSON(object: any): _215.QueryVoteByProposalVoterResponse;
                toJSON(message: _215.QueryVoteByProposalVoterResponse): unknown;
                fromPartial(object: {
                    vote?: {
                        proposalId?: any;
                        voter?: string;
                        option?: _217.VoteOption;
                        metadata?: string;
                        submitTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                }): _215.QueryVoteByProposalVoterResponse;
            };
            QueryVotesByProposalRequest: {
                encode(message: _215.QueryVotesByProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.QueryVotesByProposalRequest;
                fromJSON(object: any): _215.QueryVotesByProposalRequest;
                toJSON(message: _215.QueryVotesByProposalRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _215.QueryVotesByProposalRequest;
            };
            QueryVotesByProposalResponse: {
                encode(message: _215.QueryVotesByProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.QueryVotesByProposalResponse;
                fromJSON(object: any): _215.QueryVotesByProposalResponse;
                toJSON(message: _215.QueryVotesByProposalResponse): unknown;
                fromPartial(object: {
                    votes?: {
                        proposalId?: any;
                        voter?: string;
                        option?: _217.VoteOption;
                        metadata?: string;
                        submitTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _215.QueryVotesByProposalResponse;
            };
            QueryVotesByVoterRequest: {
                encode(message: _215.QueryVotesByVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.QueryVotesByVoterRequest;
                fromJSON(object: any): _215.QueryVotesByVoterRequest;
                toJSON(message: _215.QueryVotesByVoterRequest): unknown;
                fromPartial(object: {
                    voter?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _215.QueryVotesByVoterRequest;
            };
            QueryVotesByVoterResponse: {
                encode(message: _215.QueryVotesByVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.QueryVotesByVoterResponse;
                fromJSON(object: any): _215.QueryVotesByVoterResponse;
                toJSON(message: _215.QueryVotesByVoterResponse): unknown;
                fromPartial(object: {
                    votes?: {
                        proposalId?: any;
                        voter?: string;
                        option?: _217.VoteOption;
                        metadata?: string;
                        submitTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _215.QueryVotesByVoterResponse;
            };
            QueryGroupsByMemberRequest: {
                encode(message: _215.QueryGroupsByMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.QueryGroupsByMemberRequest;
                fromJSON(object: any): _215.QueryGroupsByMemberRequest;
                toJSON(message: _215.QueryGroupsByMemberRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _215.QueryGroupsByMemberRequest;
            };
            QueryGroupsByMemberResponse: {
                encode(message: _215.QueryGroupsByMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.QueryGroupsByMemberResponse;
                fromJSON(object: any): _215.QueryGroupsByMemberResponse;
                toJSON(message: _215.QueryGroupsByMemberResponse): unknown;
                fromPartial(object: {
                    groups?: {
                        id?: any;
                        admin?: string;
                        metadata?: string;
                        version?: any;
                        totalWeight?: string;
                        createdAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _215.QueryGroupsByMemberResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _215.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.QueryTallyResultRequest;
                fromJSON(object: any): _215.QueryTallyResultRequest;
                toJSON(message: _215.QueryTallyResultRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _215.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _215.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.QueryTallyResultResponse;
                fromJSON(object: any): _215.QueryTallyResultResponse;
                toJSON(message: _215.QueryTallyResultResponse): unknown;
                fromPartial(object: {
                    tally?: {
                        yesCount?: string;
                        abstainCount?: string;
                        noCount?: string;
                        noWithVetoCount?: string;
                    };
                }): _215.QueryTallyResultResponse;
            };
            GenesisState: {
                encode(message: _214.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.GenesisState;
                fromJSON(object: any): _214.GenesisState;
                toJSON(message: _214.GenesisState): unknown;
                fromPartial(object: {
                    groupSeq?: any;
                    groups?: {
                        id?: any;
                        admin?: string;
                        metadata?: string;
                        version?: any;
                        totalWeight?: string;
                        createdAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    groupMembers?: {
                        groupId?: any;
                        member?: {
                            address?: string;
                            weight?: string;
                            metadata?: string;
                            addedAt?: {
                                seconds?: any;
                                nanos?: number;
                            };
                        };
                    }[];
                    groupPolicySeq?: any;
                    groupPolicies?: {
                        address?: string;
                        groupId?: any;
                        admin?: string;
                        metadata?: string;
                        version?: any;
                        decisionPolicy?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        createdAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    proposalSeq?: any;
                    proposals?: {
                        id?: any;
                        address?: string;
                        metadata?: string;
                        proposers?: string[];
                        submitTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        groupVersion?: any;
                        groupPolicyVersion?: any;
                        status?: _217.ProposalStatus;
                        result?: _217.ProposalResult;
                        finalTallyResult?: {
                            yesCount?: string;
                            abstainCount?: string;
                            noCount?: string;
                            noWithVetoCount?: string;
                        };
                        votingPeriodEnd?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        executorResult?: _217.ProposalExecutorResult;
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    }[];
                    votes?: {
                        proposalId?: any;
                        voter?: string;
                        option?: _217.VoteOption;
                        metadata?: string;
                        submitTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                }): _214.GenesisState;
            };
            EventCreateGroup: {
                encode(message: _213.EventCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.EventCreateGroup;
                fromJSON(object: any): _213.EventCreateGroup;
                toJSON(message: _213.EventCreateGroup): unknown;
                fromPartial(object: {
                    groupId?: any;
                }): _213.EventCreateGroup;
            };
            EventUpdateGroup: {
                encode(message: _213.EventUpdateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.EventUpdateGroup;
                fromJSON(object: any): _213.EventUpdateGroup;
                toJSON(message: _213.EventUpdateGroup): unknown;
                fromPartial(object: {
                    groupId?: any;
                }): _213.EventUpdateGroup;
            };
            EventCreateGroupPolicy: {
                encode(message: _213.EventCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.EventCreateGroupPolicy;
                fromJSON(object: any): _213.EventCreateGroupPolicy;
                toJSON(message: _213.EventCreateGroupPolicy): unknown;
                fromPartial(object: {
                    address?: string;
                }): _213.EventCreateGroupPolicy;
            };
            EventUpdateGroupPolicy: {
                encode(message: _213.EventUpdateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.EventUpdateGroupPolicy;
                fromJSON(object: any): _213.EventUpdateGroupPolicy;
                toJSON(message: _213.EventUpdateGroupPolicy): unknown;
                fromPartial(object: {
                    address?: string;
                }): _213.EventUpdateGroupPolicy;
            };
            EventSubmitProposal: {
                encode(message: _213.EventSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.EventSubmitProposal;
                fromJSON(object: any): _213.EventSubmitProposal;
                toJSON(message: _213.EventSubmitProposal): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _213.EventSubmitProposal;
            };
            EventWithdrawProposal: {
                encode(message: _213.EventWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.EventWithdrawProposal;
                fromJSON(object: any): _213.EventWithdrawProposal;
                toJSON(message: _213.EventWithdrawProposal): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _213.EventWithdrawProposal;
            };
            EventVote: {
                encode(message: _213.EventVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.EventVote;
                fromJSON(object: any): _213.EventVote;
                toJSON(message: _213.EventVote): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _213.EventVote;
            };
            EventExec: {
                encode(message: _213.EventExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.EventExec;
                fromJSON(object: any): _213.EventExec;
                toJSON(message: _213.EventExec): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    result?: _217.ProposalExecutorResult;
                }): _213.EventExec;
            };
            EventLeaveGroup: {
                encode(message: _213.EventLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.EventLeaveGroup;
                fromJSON(object: any): _213.EventLeaveGroup;
                toJSON(message: _213.EventLeaveGroup): unknown;
                fromPartial(object: {
                    groupId?: any;
                    address?: string;
                }): _213.EventLeaveGroup;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryParamsRequest: {
                encode(_: _220.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _220.QueryParamsRequest;
                fromJSON(_: any): _220.QueryParamsRequest;
                toJSON(_: _220.QueryParamsRequest): unknown;
                fromPartial(_: {}): _220.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _220.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _220.QueryParamsResponse;
                fromJSON(object: any): _220.QueryParamsResponse;
                toJSON(message: _220.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        mintDenom?: string;
                        inflationRateChange?: string;
                        inflationMax?: string;
                        inflationMin?: string;
                        goalBonded?: string;
                        blocksPerYear?: any;
                    };
                }): _220.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _220.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _220.QueryInflationRequest;
                fromJSON(_: any): _220.QueryInflationRequest;
                toJSON(_: _220.QueryInflationRequest): unknown;
                fromPartial(_: {}): _220.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _220.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _220.QueryInflationResponse;
                fromJSON(object: any): _220.QueryInflationResponse;
                toJSON(message: _220.QueryInflationResponse): unknown;
                fromPartial(object: {
                    inflation?: Uint8Array;
                }): _220.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _220.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _220.QueryAnnualProvisionsRequest;
                fromJSON(_: any): _220.QueryAnnualProvisionsRequest;
                toJSON(_: _220.QueryAnnualProvisionsRequest): unknown;
                fromPartial(_: {}): _220.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _220.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _220.QueryAnnualProvisionsResponse;
                fromJSON(object: any): _220.QueryAnnualProvisionsResponse;
                toJSON(message: _220.QueryAnnualProvisionsResponse): unknown;
                fromPartial(object: {
                    annualProvisions?: Uint8Array;
                }): _220.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _219.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.Minter;
                fromJSON(object: any): _219.Minter;
                toJSON(message: _219.Minter): unknown;
                fromPartial(object: {
                    inflation?: string;
                    annualProvisions?: string;
                }): _219.Minter;
            };
            Params: {
                encode(message: _219.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.Params;
                fromJSON(object: any): _219.Params;
                toJSON(message: _219.Params): unknown;
                fromPartial(object: {
                    mintDenom?: string;
                    inflationRateChange?: string;
                    inflationMax?: string;
                    inflationMin?: string;
                    goalBonded?: string;
                    blocksPerYear?: any;
                }): _219.Params;
            };
            GenesisState: {
                encode(message: _218.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.GenesisState;
                fromJSON(object: any): _218.GenesisState;
                toJSON(message: _218.GenesisState): unknown;
                fromPartial(object: {
                    minter?: {
                        inflation?: string;
                        annualProvisions?: string;
                    };
                    params?: {
                        mintDenom?: string;
                        inflationRateChange?: string;
                        inflationMax?: string;
                        inflationMin?: string;
                        goalBonded?: string;
                        blocksPerYear?: any;
                    };
                }): _218.GenesisState;
            };
        };
    }
    namespace msg {
        const v1: {};
    }
    namespace nft {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _226.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _226.MsgSend): {
                        typeUrl: string;
                        value: _226.MsgSend;
                    };
                };
                toJSON: {
                    send(value: _226.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _226.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _226.MsgSend): {
                        typeUrl: string;
                        value: _226.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ classId, id, sender, receiver }: _226.MsgSend) => {
                        class_id: string;
                        id: string;
                        sender: string;
                        receiver: string;
                    };
                    fromAmino: ({ class_id, id, sender, receiver }: {
                        class_id: string;
                        id: string;
                        sender: string;
                        receiver: string;
                    }) => _226.MsgSend;
                };
            };
            MsgSend: {
                encode(message: _226.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _226.MsgSend;
                fromJSON(object: any): _226.MsgSend;
                toJSON(message: _226.MsgSend): unknown;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                    sender?: string;
                    receiver?: string;
                }): _226.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _226.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _226.MsgSendResponse;
                fromJSON(_: any): _226.MsgSendResponse;
                toJSON(_: _226.MsgSendResponse): unknown;
                fromPartial(_: {}): _226.MsgSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _225.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _225.QueryBalanceRequest;
                fromJSON(object: any): _225.QueryBalanceRequest;
                toJSON(message: _225.QueryBalanceRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                    owner?: string;
                }): _225.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _225.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _225.QueryBalanceResponse;
                fromJSON(object: any): _225.QueryBalanceResponse;
                toJSON(message: _225.QueryBalanceResponse): unknown;
                fromPartial(object: {
                    amount?: any;
                }): _225.QueryBalanceResponse;
            };
            QueryOwnerRequest: {
                encode(message: _225.QueryOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _225.QueryOwnerRequest;
                fromJSON(object: any): _225.QueryOwnerRequest;
                toJSON(message: _225.QueryOwnerRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                }): _225.QueryOwnerRequest;
            };
            QueryOwnerResponse: {
                encode(message: _225.QueryOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _225.QueryOwnerResponse;
                fromJSON(object: any): _225.QueryOwnerResponse;
                toJSON(message: _225.QueryOwnerResponse): unknown;
                fromPartial(object: {
                    owner?: string;
                }): _225.QueryOwnerResponse;
            };
            QuerySupplyRequest: {
                encode(message: _225.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _225.QuerySupplyRequest;
                fromJSON(object: any): _225.QuerySupplyRequest;
                toJSON(message: _225.QuerySupplyRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                }): _225.QuerySupplyRequest;
            };
            QuerySupplyResponse: {
                encode(message: _225.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _225.QuerySupplyResponse;
                fromJSON(object: any): _225.QuerySupplyResponse;
                toJSON(message: _225.QuerySupplyResponse): unknown;
                fromPartial(object: {
                    amount?: any;
                }): _225.QuerySupplyResponse;
            };
            QueryNFTsRequest: {
                encode(message: _225.QueryNFTsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _225.QueryNFTsRequest;
                fromJSON(object: any): _225.QueryNFTsRequest;
                toJSON(message: _225.QueryNFTsRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                    owner?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _225.QueryNFTsRequest;
            };
            QueryNFTsResponse: {
                encode(message: _225.QueryNFTsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _225.QueryNFTsResponse;
                fromJSON(object: any): _225.QueryNFTsResponse;
                toJSON(message: _225.QueryNFTsResponse): unknown;
                fromPartial(object: {
                    nfts?: {
                        classId?: string;
                        id?: string;
                        uri?: string;
                        uriHash?: string;
                        data?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _225.QueryNFTsResponse;
            };
            QueryNFTRequest: {
                encode(message: _225.QueryNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _225.QueryNFTRequest;
                fromJSON(object: any): _225.QueryNFTRequest;
                toJSON(message: _225.QueryNFTRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                }): _225.QueryNFTRequest;
            };
            QueryNFTResponse: {
                encode(message: _225.QueryNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _225.QueryNFTResponse;
                fromJSON(object: any): _225.QueryNFTResponse;
                toJSON(message: _225.QueryNFTResponse): unknown;
                fromPartial(object: {
                    nft?: {
                        classId?: string;
                        id?: string;
                        uri?: string;
                        uriHash?: string;
                        data?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _225.QueryNFTResponse;
            };
            QueryClassRequest: {
                encode(message: _225.QueryClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _225.QueryClassRequest;
                fromJSON(object: any): _225.QueryClassRequest;
                toJSON(message: _225.QueryClassRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                }): _225.QueryClassRequest;
            };
            QueryClassResponse: {
                encode(message: _225.QueryClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _225.QueryClassResponse;
                fromJSON(object: any): _225.QueryClassResponse;
                toJSON(message: _225.QueryClassResponse): unknown;
                fromPartial(object: {
                    class?: {
                        id?: string;
                        name?: string;
                        symbol?: string;
                        description?: string;
                        uri?: string;
                        uriHash?: string;
                        data?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _225.QueryClassResponse;
            };
            QueryClassesRequest: {
                encode(message: _225.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _225.QueryClassesRequest;
                fromJSON(object: any): _225.QueryClassesRequest;
                toJSON(message: _225.QueryClassesRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _225.QueryClassesRequest;
            };
            QueryClassesResponse: {
                encode(message: _225.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _225.QueryClassesResponse;
                fromJSON(object: any): _225.QueryClassesResponse;
                toJSON(message: _225.QueryClassesResponse): unknown;
                fromPartial(object: {
                    classes?: {
                        id?: string;
                        name?: string;
                        symbol?: string;
                        description?: string;
                        uri?: string;
                        uriHash?: string;
                        data?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _225.QueryClassesResponse;
            };
            Class: {
                encode(message: _224.Class, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _224.Class;
                fromJSON(object: any): _224.Class;
                toJSON(message: _224.Class): unknown;
                fromPartial(object: {
                    id?: string;
                    name?: string;
                    symbol?: string;
                    description?: string;
                    uri?: string;
                    uriHash?: string;
                    data?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _224.Class;
            };
            NFT: {
                encode(message: _224.NFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _224.NFT;
                fromJSON(object: any): _224.NFT;
                toJSON(message: _224.NFT): unknown;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                    uri?: string;
                    uriHash?: string;
                    data?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _224.NFT;
            };
            GenesisState: {
                encode(message: _223.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.GenesisState;
                fromJSON(object: any): _223.GenesisState;
                toJSON(message: _223.GenesisState): unknown;
                fromPartial(object: {
                    classes?: {
                        id?: string;
                        name?: string;
                        symbol?: string;
                        description?: string;
                        uri?: string;
                        uriHash?: string;
                        data?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    entries?: {
                        owner?: string;
                        nfts?: {
                            classId?: string;
                            id?: string;
                            uri?: string;
                            uriHash?: string;
                            data?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                    }[];
                }): _223.GenesisState;
            };
            Entry: {
                encode(message: _223.Entry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.Entry;
                fromJSON(object: any): _223.Entry;
                toJSON(message: _223.Entry): unknown;
                fromPartial(object: {
                    owner?: string;
                    nfts?: {
                        classId?: string;
                        id?: string;
                        uri?: string;
                        uriHash?: string;
                        data?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                }): _223.Entry;
            };
            EventSend: {
                encode(message: _222.EventSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.EventSend;
                fromJSON(object: any): _222.EventSend;
                toJSON(message: _222.EventSend): unknown;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                    sender?: string;
                    receiver?: string;
                }): _222.EventSend;
            };
            EventMint: {
                encode(message: _222.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.EventMint;
                fromJSON(object: any): _222.EventMint;
                toJSON(message: _222.EventMint): unknown;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                    owner?: string;
                }): _222.EventMint;
            };
            EventBurn: {
                encode(message: _222.EventBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.EventBurn;
                fromJSON(object: any): _222.EventBurn;
                toJSON(message: _222.EventBurn): unknown;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                    owner?: string;
                }): _222.EventBurn;
            };
        };
    }
    namespace orm {
        const v1: {
            TableDescriptor: {
                encode(message: _227.TableDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _227.TableDescriptor;
                fromJSON(object: any): _227.TableDescriptor;
                toJSON(message: _227.TableDescriptor): unknown;
                fromPartial(object: {
                    primaryKey?: {
                        fields?: string;
                        autoIncrement?: boolean;
                    };
                    index?: {
                        fields?: string;
                        id?: number;
                        unique?: boolean;
                    }[];
                    id?: number;
                }): _227.TableDescriptor;
            };
            PrimaryKeyDescriptor: {
                encode(message: _227.PrimaryKeyDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _227.PrimaryKeyDescriptor;
                fromJSON(object: any): _227.PrimaryKeyDescriptor;
                toJSON(message: _227.PrimaryKeyDescriptor): unknown;
                fromPartial(object: {
                    fields?: string;
                    autoIncrement?: boolean;
                }): _227.PrimaryKeyDescriptor;
            };
            SecondaryIndexDescriptor: {
                encode(message: _227.SecondaryIndexDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _227.SecondaryIndexDescriptor;
                fromJSON(object: any): _227.SecondaryIndexDescriptor;
                toJSON(message: _227.SecondaryIndexDescriptor): unknown;
                fromPartial(object: {
                    fields?: string;
                    id?: number;
                    unique?: boolean;
                }): _227.SecondaryIndexDescriptor;
            };
            SingletonDescriptor: {
                encode(message: _227.SingletonDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _227.SingletonDescriptor;
                fromJSON(object: any): _227.SingletonDescriptor;
                toJSON(message: _227.SingletonDescriptor): unknown;
                fromPartial(object: {
                    id?: number;
                }): _227.SingletonDescriptor;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _228.StorageType;
            storageTypeToJSON(object: _228.StorageType): string;
            StorageType: typeof _228.StorageType;
            ModuleSchemaDescriptor: {
                encode(message: _228.ModuleSchemaDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _228.ModuleSchemaDescriptor;
                fromJSON(object: any): _228.ModuleSchemaDescriptor;
                toJSON(message: _228.ModuleSchemaDescriptor): unknown;
                fromPartial(object: {
                    schemaFile?: {
                        id?: number;
                        protoFileName?: string;
                        storageType?: _228.StorageType;
                    }[];
                    prefix?: Uint8Array;
                }): _228.ModuleSchemaDescriptor;
            };
            ModuleSchemaDescriptor_FileEntry: {
                encode(message: _228.ModuleSchemaDescriptor_FileEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _228.ModuleSchemaDescriptor_FileEntry;
                fromJSON(object: any): _228.ModuleSchemaDescriptor_FileEntry;
                toJSON(message: _228.ModuleSchemaDescriptor_FileEntry): unknown;
                fromPartial(object: {
                    id?: number;
                    protoFileName?: string;
                    storageType?: _228.StorageType;
                }): _228.ModuleSchemaDescriptor_FileEntry;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryParamsRequest: {
                encode(message: _230.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.QueryParamsRequest;
                fromJSON(object: any): _230.QueryParamsRequest;
                toJSON(message: _230.QueryParamsRequest): unknown;
                fromPartial(object: {
                    subspace?: string;
                    key?: string;
                }): _230.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _230.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.QueryParamsResponse;
                fromJSON(object: any): _230.QueryParamsResponse;
                toJSON(message: _230.QueryParamsResponse): unknown;
                fromPartial(object: {
                    param?: {
                        subspace?: string;
                        key?: string;
                        value?: string;
                    };
                }): _230.QueryParamsResponse;
            };
            QuerySubspacesRequest: {
                encode(_: _230.QuerySubspacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.QuerySubspacesRequest;
                fromJSON(_: any): _230.QuerySubspacesRequest;
                toJSON(_: _230.QuerySubspacesRequest): unknown;
                fromPartial(_: {}): _230.QuerySubspacesRequest;
            };
            QuerySubspacesResponse: {
                encode(message: _230.QuerySubspacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.QuerySubspacesResponse;
                fromJSON(object: any): _230.QuerySubspacesResponse;
                toJSON(message: _230.QuerySubspacesResponse): unknown;
                fromPartial(object: {
                    subspaces?: {
                        subspace?: string;
                        keys?: string[];
                    }[];
                }): _230.QuerySubspacesResponse;
            };
            Subspace: {
                encode(message: _230.Subspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.Subspace;
                fromJSON(object: any): _230.Subspace;
                toJSON(message: _230.Subspace): unknown;
                fromPartial(object: {
                    subspace?: string;
                    keys?: string[];
                }): _230.Subspace;
            };
            ParameterChangeProposal: {
                encode(message: _229.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _229.ParameterChangeProposal;
                fromJSON(object: any): _229.ParameterChangeProposal;
                toJSON(message: _229.ParameterChangeProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    changes?: {
                        subspace?: string;
                        key?: string;
                        value?: string;
                    }[];
                }): _229.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _229.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _229.ParamChange;
                fromJSON(object: any): _229.ParamChange;
                toJSON(message: _229.ParamChange): unknown;
                fromPartial(object: {
                    subspace?: string;
                    key?: string;
                    value?: string;
                }): _229.ParamChange;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _234.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _234.MsgUnjail): {
                        typeUrl: string;
                        value: _234.MsgUnjail;
                    };
                };
                toJSON: {
                    unjail(value: _234.MsgUnjail): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _234.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _234.MsgUnjail): {
                        typeUrl: string;
                        value: _234.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: ({ validatorAddr }: _234.MsgUnjail) => {
                        validator_addr: string;
                    };
                    fromAmino: ({ validator_addr }: {
                        validator_addr: string;
                    }) => _234.MsgUnjail;
                };
            };
            MsgUnjail: {
                encode(message: _234.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _234.MsgUnjail;
                fromJSON(object: any): _234.MsgUnjail;
                toJSON(message: _234.MsgUnjail): unknown;
                fromPartial(object: {
                    validatorAddr?: string;
                }): _234.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _234.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _234.MsgUnjailResponse;
                fromJSON(_: any): _234.MsgUnjailResponse;
                toJSON(_: _234.MsgUnjailResponse): unknown;
                fromPartial(_: {}): _234.MsgUnjailResponse;
            };
            ValidatorSigningInfo: {
                encode(message: _233.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _233.ValidatorSigningInfo;
                fromJSON(object: any): _233.ValidatorSigningInfo;
                toJSON(message: _233.ValidatorSigningInfo): unknown;
                fromPartial(object: {
                    address?: string;
                    startHeight?: any;
                    indexOffset?: any;
                    jailedUntil?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    tombstoned?: boolean;
                    missedBlocksCounter?: any;
                }): _233.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _233.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _233.Params;
                fromJSON(object: any): _233.Params;
                toJSON(message: _233.Params): unknown;
                fromPartial(object: {
                    signedBlocksWindow?: any;
                    minSignedPerWindow?: Uint8Array;
                    downtimeJailDuration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    slashFractionDoubleSign?: Uint8Array;
                    slashFractionDowntime?: Uint8Array;
                }): _233.Params;
            };
            QueryParamsRequest: {
                encode(_: _232.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.QueryParamsRequest;
                fromJSON(_: any): _232.QueryParamsRequest;
                toJSON(_: _232.QueryParamsRequest): unknown;
                fromPartial(_: {}): _232.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _232.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.QueryParamsResponse;
                fromJSON(object: any): _232.QueryParamsResponse;
                toJSON(message: _232.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        signedBlocksWindow?: any;
                        minSignedPerWindow?: Uint8Array;
                        downtimeJailDuration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        slashFractionDoubleSign?: Uint8Array;
                        slashFractionDowntime?: Uint8Array;
                    };
                }): _232.QueryParamsResponse;
            };
            QuerySigningInfoRequest: {
                encode(message: _232.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.QuerySigningInfoRequest;
                fromJSON(object: any): _232.QuerySigningInfoRequest;
                toJSON(message: _232.QuerySigningInfoRequest): unknown;
                fromPartial(object: {
                    consAddress?: string;
                }): _232.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _232.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.QuerySigningInfoResponse;
                fromJSON(object: any): _232.QuerySigningInfoResponse;
                toJSON(message: _232.QuerySigningInfoResponse): unknown;
                fromPartial(object: {
                    valSigningInfo?: {
                        address?: string;
                        startHeight?: any;
                        indexOffset?: any;
                        jailedUntil?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        tombstoned?: boolean;
                        missedBlocksCounter?: any;
                    };
                }): _232.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _232.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.QuerySigningInfosRequest;
                fromJSON(object: any): _232.QuerySigningInfosRequest;
                toJSON(message: _232.QuerySigningInfosRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _232.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _232.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.QuerySigningInfosResponse;
                fromJSON(object: any): _232.QuerySigningInfosResponse;
                toJSON(message: _232.QuerySigningInfosResponse): unknown;
                fromPartial(object: {
                    info?: {
                        address?: string;
                        startHeight?: any;
                        indexOffset?: any;
                        jailedUntil?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        tombstoned?: boolean;
                        missedBlocksCounter?: any;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _232.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _231.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _231.GenesisState;
                fromJSON(object: any): _231.GenesisState;
                toJSON(message: _231.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        signedBlocksWindow?: any;
                        minSignedPerWindow?: Uint8Array;
                        downtimeJailDuration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        slashFractionDoubleSign?: Uint8Array;
                        slashFractionDowntime?: Uint8Array;
                    };
                    signingInfos?: {
                        address?: string;
                        validatorSigningInfo?: {
                            address?: string;
                            startHeight?: any;
                            indexOffset?: any;
                            jailedUntil?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            tombstoned?: boolean;
                            missedBlocksCounter?: any;
                        };
                    }[];
                    missedBlocks?: {
                        address?: string;
                        missedBlocks?: {
                            index?: any;
                            missed?: boolean;
                        }[];
                    }[];
                }): _231.GenesisState;
            };
            SigningInfo: {
                encode(message: _231.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _231.SigningInfo;
                fromJSON(object: any): _231.SigningInfo;
                toJSON(message: _231.SigningInfo): unknown;
                fromPartial(object: {
                    address?: string;
                    validatorSigningInfo?: {
                        address?: string;
                        startHeight?: any;
                        indexOffset?: any;
                        jailedUntil?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        tombstoned?: boolean;
                        missedBlocksCounter?: any;
                    };
                }): _231.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _231.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _231.ValidatorMissedBlocks;
                fromJSON(object: any): _231.ValidatorMissedBlocks;
                toJSON(message: _231.ValidatorMissedBlocks): unknown;
                fromPartial(object: {
                    address?: string;
                    missedBlocks?: {
                        index?: any;
                        missed?: boolean;
                    }[];
                }): _231.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _231.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _231.MissedBlock;
                fromJSON(object: any): _231.MissedBlock;
                toJSON(message: _231.MissedBlock): unknown;
                fromPartial(object: {
                    index?: any;
                    missed?: boolean;
                }): _231.MissedBlock;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _239.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _239.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _239.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _239.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _239.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _239.MsgCreateValidator): {
                        typeUrl: string;
                        value: _239.MsgCreateValidator;
                    };
                    editValidator(value: _239.MsgEditValidator): {
                        typeUrl: string;
                        value: _239.MsgEditValidator;
                    };
                    delegate(value: _239.MsgDelegate): {
                        typeUrl: string;
                        value: _239.MsgDelegate;
                    };
                    beginRedelegate(value: _239.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _239.MsgBeginRedelegate;
                    };
                    undelegate(value: _239.MsgUndelegate): {
                        typeUrl: string;
                        value: _239.MsgUndelegate;
                    };
                };
                toJSON: {
                    createValidator(value: _239.MsgCreateValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    editValidator(value: _239.MsgEditValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    delegate(value: _239.MsgDelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    beginRedelegate(value: _239.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    undelegate(value: _239.MsgUndelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _239.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _239.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _239.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _239.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _239.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _239.MsgCreateValidator): {
                        typeUrl: string;
                        value: _239.MsgCreateValidator;
                    };
                    editValidator(value: _239.MsgEditValidator): {
                        typeUrl: string;
                        value: _239.MsgEditValidator;
                    };
                    delegate(value: _239.MsgDelegate): {
                        typeUrl: string;
                        value: _239.MsgDelegate;
                    };
                    beginRedelegate(value: _239.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _239.MsgBeginRedelegate;
                    };
                    undelegate(value: _239.MsgUndelegate): {
                        typeUrl: string;
                        value: _239.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _239.MsgCreateValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        value: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ description, commission, min_self_delegation, delegator_address, validator_address, pubkey, value }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        value: {
                            denom: string;
                            amount: string;
                        };
                    }) => _239.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _239.MsgEditValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    };
                    fromAmino: ({ description, validator_address, commission_rate, min_self_delegation }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    }) => _239.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _239.MsgDelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _239.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _239.MsgBeginRedelegate) => {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_src_address, validator_dst_address, amount }: {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _239.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _239.MsgUndelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _239.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                encode(message: _239.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _239.MsgCreateValidator;
                fromJSON(object: any): _239.MsgCreateValidator;
                toJSON(message: _239.MsgCreateValidator): unknown;
                fromPartial(object: {
                    description?: {
                        moniker?: string;
                        identity?: string;
                        website?: string;
                        securityContact?: string;
                        details?: string;
                    };
                    commission?: {
                        rate?: string;
                        maxRate?: string;
                        maxChangeRate?: string;
                    };
                    minSelfDelegation?: string;
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    pubkey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    value?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _239.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _239.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _239.MsgCreateValidatorResponse;
                fromJSON(_: any): _239.MsgCreateValidatorResponse;
                toJSON(_: _239.MsgCreateValidatorResponse): unknown;
                fromPartial(_: {}): _239.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _239.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _239.MsgEditValidator;
                fromJSON(object: any): _239.MsgEditValidator;
                toJSON(message: _239.MsgEditValidator): unknown;
                fromPartial(object: {
                    description?: {
                        moniker?: string;
                        identity?: string;
                        website?: string;
                        securityContact?: string;
                        details?: string;
                    };
                    validatorAddress?: string;
                    commissionRate?: string;
                    minSelfDelegation?: string;
                }): _239.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _239.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _239.MsgEditValidatorResponse;
                fromJSON(_: any): _239.MsgEditValidatorResponse;
                toJSON(_: _239.MsgEditValidatorResponse): unknown;
                fromPartial(_: {}): _239.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _239.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _239.MsgDelegate;
                fromJSON(object: any): _239.MsgDelegate;
                toJSON(message: _239.MsgDelegate): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _239.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _239.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _239.MsgDelegateResponse;
                fromJSON(_: any): _239.MsgDelegateResponse;
                toJSON(_: _239.MsgDelegateResponse): unknown;
                fromPartial(_: {}): _239.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _239.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _239.MsgBeginRedelegate;
                fromJSON(object: any): _239.MsgBeginRedelegate;
                toJSON(message: _239.MsgBeginRedelegate): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorSrcAddress?: string;
                    validatorDstAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _239.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _239.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _239.MsgBeginRedelegateResponse;
                fromJSON(object: any): _239.MsgBeginRedelegateResponse;
                toJSON(message: _239.MsgBeginRedelegateResponse): unknown;
                fromPartial(object: {
                    completionTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _239.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _239.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _239.MsgUndelegate;
                fromJSON(object: any): _239.MsgUndelegate;
                toJSON(message: _239.MsgUndelegate): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _239.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _239.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _239.MsgUndelegateResponse;
                fromJSON(object: any): _239.MsgUndelegateResponse;
                toJSON(message: _239.MsgUndelegateResponse): unknown;
                fromPartial(object: {
                    completionTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _239.MsgUndelegateResponse;
            };
            bondStatusFromJSON(object: any): _238.BondStatus;
            bondStatusToJSON(object: _238.BondStatus): string;
            BondStatus: typeof _238.BondStatus;
            HistoricalInfo: {
                encode(message: _238.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.HistoricalInfo;
                fromJSON(object: any): _238.HistoricalInfo;
                toJSON(message: _238.HistoricalInfo): unknown;
                fromPartial(object: {
                    header?: {
                        version?: {
                            block?: any;
                            app?: any;
                        };
                        chainId?: string;
                        height?: any;
                        time?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        lastBlockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        lastCommitHash?: Uint8Array;
                        dataHash?: Uint8Array;
                        validatorsHash?: Uint8Array;
                        nextValidatorsHash?: Uint8Array;
                        consensusHash?: Uint8Array;
                        appHash?: Uint8Array;
                        lastResultsHash?: Uint8Array;
                        evidenceHash?: Uint8Array;
                        proposerAddress?: Uint8Array;
                    };
                    valset?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _238.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: any;
                        unbondingTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: {
                                seconds?: any;
                                nanos?: number;
                            };
                        };
                        minSelfDelegation?: string;
                    }[];
                }): _238.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _238.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.CommissionRates;
                fromJSON(object: any): _238.CommissionRates;
                toJSON(message: _238.CommissionRates): unknown;
                fromPartial(object: {
                    rate?: string;
                    maxRate?: string;
                    maxChangeRate?: string;
                }): _238.CommissionRates;
            };
            Commission: {
                encode(message: _238.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.Commission;
                fromJSON(object: any): _238.Commission;
                toJSON(message: _238.Commission): unknown;
                fromPartial(object: {
                    commissionRates?: {
                        rate?: string;
                        maxRate?: string;
                        maxChangeRate?: string;
                    };
                    updateTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _238.Commission;
            };
            Description: {
                encode(message: _238.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.Description;
                fromJSON(object: any): _238.Description;
                toJSON(message: _238.Description): unknown;
                fromPartial(object: {
                    moniker?: string;
                    identity?: string;
                    website?: string;
                    securityContact?: string;
                    details?: string;
                }): _238.Description;
            };
            Validator: {
                encode(message: _238.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.Validator;
                fromJSON(object: any): _238.Validator;
                toJSON(message: _238.Validator): unknown;
                fromPartial(object: {
                    operatorAddress?: string;
                    consensusPubkey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    jailed?: boolean;
                    status?: _238.BondStatus;
                    tokens?: string;
                    delegatorShares?: string;
                    description?: {
                        moniker?: string;
                        identity?: string;
                        website?: string;
                        securityContact?: string;
                        details?: string;
                    };
                    unbondingHeight?: any;
                    unbondingTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    commission?: {
                        commissionRates?: {
                            rate?: string;
                            maxRate?: string;
                            maxChangeRate?: string;
                        };
                        updateTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    minSelfDelegation?: string;
                }): _238.Validator;
            };
            ValAddresses: {
                encode(message: _238.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.ValAddresses;
                fromJSON(object: any): _238.ValAddresses;
                toJSON(message: _238.ValAddresses): unknown;
                fromPartial(object: {
                    addresses?: string[];
                }): _238.ValAddresses;
            };
            DVPair: {
                encode(message: _238.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.DVPair;
                fromJSON(object: any): _238.DVPair;
                toJSON(message: _238.DVPair): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                }): _238.DVPair;
            };
            DVPairs: {
                encode(message: _238.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.DVPairs;
                fromJSON(object: any): _238.DVPairs;
                toJSON(message: _238.DVPairs): unknown;
                fromPartial(object: {
                    pairs?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                    }[];
                }): _238.DVPairs;
            };
            DVVTriplet: {
                encode(message: _238.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.DVVTriplet;
                fromJSON(object: any): _238.DVVTriplet;
                toJSON(message: _238.DVVTriplet): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorSrcAddress?: string;
                    validatorDstAddress?: string;
                }): _238.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _238.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.DVVTriplets;
                fromJSON(object: any): _238.DVVTriplets;
                toJSON(message: _238.DVVTriplets): unknown;
                fromPartial(object: {
                    triplets?: {
                        delegatorAddress?: string;
                        validatorSrcAddress?: string;
                        validatorDstAddress?: string;
                    }[];
                }): _238.DVVTriplets;
            };
            Delegation: {
                encode(message: _238.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.Delegation;
                fromJSON(object: any): _238.Delegation;
                toJSON(message: _238.Delegation): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    shares?: string;
                }): _238.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _238.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.UnbondingDelegation;
                fromJSON(object: any): _238.UnbondingDelegation;
                toJSON(message: _238.UnbondingDelegation): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    entries?: {
                        creationHeight?: any;
                        completionTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        initialBalance?: string;
                        balance?: string;
                    }[];
                }): _238.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _238.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.UnbondingDelegationEntry;
                fromJSON(object: any): _238.UnbondingDelegationEntry;
                toJSON(message: _238.UnbondingDelegationEntry): unknown;
                fromPartial(object: {
                    creationHeight?: any;
                    completionTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    initialBalance?: string;
                    balance?: string;
                }): _238.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _238.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.RedelegationEntry;
                fromJSON(object: any): _238.RedelegationEntry;
                toJSON(message: _238.RedelegationEntry): unknown;
                fromPartial(object: {
                    creationHeight?: any;
                    completionTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    initialBalance?: string;
                    sharesDst?: string;
                }): _238.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _238.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.Redelegation;
                fromJSON(object: any): _238.Redelegation;
                toJSON(message: _238.Redelegation): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorSrcAddress?: string;
                    validatorDstAddress?: string;
                    entries?: {
                        creationHeight?: any;
                        completionTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        initialBalance?: string;
                        sharesDst?: string;
                    }[];
                }): _238.Redelegation;
            };
            Params: {
                encode(message: _238.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.Params;
                fromJSON(object: any): _238.Params;
                toJSON(message: _238.Params): unknown;
                fromPartial(object: {
                    unbondingTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    maxValidators?: number;
                    maxEntries?: number;
                    historicalEntries?: number;
                    bondDenom?: string;
                    minCommissionRate?: string;
                }): _238.Params;
            };
            DelegationResponse: {
                encode(message: _238.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.DelegationResponse;
                fromJSON(object: any): _238.DelegationResponse;
                toJSON(message: _238.DelegationResponse): unknown;
                fromPartial(object: {
                    delegation?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        shares?: string;
                    };
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _238.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _238.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.RedelegationEntryResponse;
                fromJSON(object: any): _238.RedelegationEntryResponse;
                toJSON(message: _238.RedelegationEntryResponse): unknown;
                fromPartial(object: {
                    redelegationEntry?: {
                        creationHeight?: any;
                        completionTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        initialBalance?: string;
                        sharesDst?: string;
                    };
                    balance?: string;
                }): _238.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _238.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.RedelegationResponse;
                fromJSON(object: any): _238.RedelegationResponse;
                toJSON(message: _238.RedelegationResponse): unknown;
                fromPartial(object: {
                    redelegation?: {
                        delegatorAddress?: string;
                        validatorSrcAddress?: string;
                        validatorDstAddress?: string;
                        entries?: {
                            creationHeight?: any;
                            completionTime?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            initialBalance?: string;
                            sharesDst?: string;
                        }[];
                    };
                    entries?: {
                        redelegationEntry?: {
                            creationHeight?: any;
                            completionTime?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            initialBalance?: string;
                            sharesDst?: string;
                        };
                        balance?: string;
                    }[];
                }): _238.RedelegationResponse;
            };
            Pool: {
                encode(message: _238.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.Pool;
                fromJSON(object: any): _238.Pool;
                toJSON(message: _238.Pool): unknown;
                fromPartial(object: {
                    notBondedTokens?: string;
                    bondedTokens?: string;
                }): _238.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _237.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _237.QueryValidatorsRequest;
                fromJSON(object: any): _237.QueryValidatorsRequest;
                toJSON(message: _237.QueryValidatorsRequest): unknown;
                fromPartial(object: {
                    status?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _237.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _237.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _237.QueryValidatorsResponse;
                fromJSON(object: any): _237.QueryValidatorsResponse;
                toJSON(message: _237.QueryValidatorsResponse): unknown;
                fromPartial(object: {
                    validators?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _238.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: any;
                        unbondingTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: {
                                seconds?: any;
                                nanos?: number;
                            };
                        };
                        minSelfDelegation?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _237.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _237.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _237.QueryValidatorRequest;
                fromJSON(object: any): _237.QueryValidatorRequest;
                toJSON(message: _237.QueryValidatorRequest): unknown;
                fromPartial(object: {
                    validatorAddr?: string;
                }): _237.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _237.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _237.QueryValidatorResponse;
                fromJSON(object: any): _237.QueryValidatorResponse;
                toJSON(message: _237.QueryValidatorResponse): unknown;
                fromPartial(object: {
                    validator?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _238.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: any;
                        unbondingTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: {
                                seconds?: any;
                                nanos?: number;
                            };
                        };
                        minSelfDelegation?: string;
                    };
                }): _237.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _237.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _237.QueryValidatorDelegationsRequest;
                fromJSON(object: any): _237.QueryValidatorDelegationsRequest;
                toJSON(message: _237.QueryValidatorDelegationsRequest): unknown;
                fromPartial(object: {
                    validatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _237.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _237.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _237.QueryValidatorDelegationsResponse;
                fromJSON(object: any): _237.QueryValidatorDelegationsResponse;
                toJSON(message: _237.QueryValidatorDelegationsResponse): unknown;
                fromPartial(object: {
                    delegationResponses?: {
                        delegation?: {
                            delegatorAddress?: string;
                            validatorAddress?: string;
                            shares?: string;
                        };
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _237.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _237.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _237.QueryValidatorUnbondingDelegationsRequest;
                fromJSON(object: any): _237.QueryValidatorUnbondingDelegationsRequest;
                toJSON(message: _237.QueryValidatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: {
                    validatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _237.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _237.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _237.QueryValidatorUnbondingDelegationsResponse;
                fromJSON(object: any): _237.QueryValidatorUnbondingDelegationsResponse;
                toJSON(message: _237.QueryValidatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: {
                    unbondingResponses?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: any;
                            completionTime?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            initialBalance?: string;
                            balance?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _237.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _237.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _237.QueryDelegationRequest;
                fromJSON(object: any): _237.QueryDelegationRequest;
                toJSON(message: _237.QueryDelegationRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    validatorAddr?: string;
                }): _237.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _237.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _237.QueryDelegationResponse;
                fromJSON(object: any): _237.QueryDelegationResponse;
                toJSON(message: _237.QueryDelegationResponse): unknown;
                fromPartial(object: {
                    delegationResponse?: {
                        delegation?: {
                            delegatorAddress?: string;
                            validatorAddress?: string;
                            shares?: string;
                        };
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    };
                }): _237.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _237.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _237.QueryUnbondingDelegationRequest;
                fromJSON(object: any): _237.QueryUnbondingDelegationRequest;
                toJSON(message: _237.QueryUnbondingDelegationRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    validatorAddr?: string;
                }): _237.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _237.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _237.QueryUnbondingDelegationResponse;
                fromJSON(object: any): _237.QueryUnbondingDelegationResponse;
                toJSON(message: _237.QueryUnbondingDelegationResponse): unknown;
                fromPartial(object: {
                    unbond?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: any;
                            completionTime?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            initialBalance?: string;
                            balance?: string;
                        }[];
                    };
                }): _237.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _237.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _237.QueryDelegatorDelegationsRequest;
                fromJSON(object: any): _237.QueryDelegatorDelegationsRequest;
                toJSON(message: _237.QueryDelegatorDelegationsRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _237.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _237.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _237.QueryDelegatorDelegationsResponse;
                fromJSON(object: any): _237.QueryDelegatorDelegationsResponse;
                toJSON(message: _237.QueryDelegatorDelegationsResponse): unknown;
                fromPartial(object: {
                    delegationResponses?: {
                        delegation?: {
                            delegatorAddress?: string;
                            validatorAddress?: string;
                            shares?: string;
                        };
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _237.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _237.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _237.QueryDelegatorUnbondingDelegationsRequest;
                fromJSON(object: any): _237.QueryDelegatorUnbondingDelegationsRequest;
                toJSON(message: _237.QueryDelegatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _237.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _237.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _237.QueryDelegatorUnbondingDelegationsResponse;
                fromJSON(object: any): _237.QueryDelegatorUnbondingDelegationsResponse;
                toJSON(message: _237.QueryDelegatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: {
                    unbondingResponses?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: any;
                            completionTime?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            initialBalance?: string;
                            balance?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _237.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _237.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _237.QueryRedelegationsRequest;
                fromJSON(object: any): _237.QueryRedelegationsRequest;
                toJSON(message: _237.QueryRedelegationsRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    srcValidatorAddr?: string;
                    dstValidatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _237.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _237.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _237.QueryRedelegationsResponse;
                fromJSON(object: any): _237.QueryRedelegationsResponse;
                toJSON(message: _237.QueryRedelegationsResponse): unknown;
                fromPartial(object: {
                    redelegationResponses?: {
                        redelegation?: {
                            delegatorAddress?: string;
                            validatorSrcAddress?: string;
                            validatorDstAddress?: string;
                            entries?: {
                                creationHeight?: any;
                                completionTime?: {
                                    seconds?: any;
                                    nanos?: number;
                                };
                                initialBalance?: string;
                                sharesDst?: string;
                            }[];
                        };
                        entries?: {
                            redelegationEntry?: {
                                creationHeight?: any;
                                completionTime?: {
                                    seconds?: any;
                                    nanos?: number;
                                };
                                initialBalance?: string;
                                sharesDst?: string;
                            };
                            balance?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _237.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _237.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _237.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _237.QueryDelegatorValidatorsRequest;
                toJSON(message: _237.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _237.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _237.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _237.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _237.QueryDelegatorValidatorsResponse;
                toJSON(message: _237.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: {
                    validators?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _238.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: any;
                        unbondingTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: {
                                seconds?: any;
                                nanos?: number;
                            };
                        };
                        minSelfDelegation?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _237.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _237.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _237.QueryDelegatorValidatorRequest;
                fromJSON(object: any): _237.QueryDelegatorValidatorRequest;
                toJSON(message: _237.QueryDelegatorValidatorRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    validatorAddr?: string;
                }): _237.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _237.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _237.QueryDelegatorValidatorResponse;
                fromJSON(object: any): _237.QueryDelegatorValidatorResponse;
                toJSON(message: _237.QueryDelegatorValidatorResponse): unknown;
                fromPartial(object: {
                    validator?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _238.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: any;
                        unbondingTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: {
                                seconds?: any;
                                nanos?: number;
                            };
                        };
                        minSelfDelegation?: string;
                    };
                }): _237.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _237.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _237.QueryHistoricalInfoRequest;
                fromJSON(object: any): _237.QueryHistoricalInfoRequest;
                toJSON(message: _237.QueryHistoricalInfoRequest): unknown;
                fromPartial(object: {
                    height?: any;
                }): _237.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _237.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _237.QueryHistoricalInfoResponse;
                fromJSON(object: any): _237.QueryHistoricalInfoResponse;
                toJSON(message: _237.QueryHistoricalInfoResponse): unknown;
                fromPartial(object: {
                    hist?: {
                        header?: {
                            version?: {
                                block?: any;
                                app?: any;
                            };
                            chainId?: string;
                            height?: any;
                            time?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            lastBlockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            lastCommitHash?: Uint8Array;
                            dataHash?: Uint8Array;
                            validatorsHash?: Uint8Array;
                            nextValidatorsHash?: Uint8Array;
                            consensusHash?: Uint8Array;
                            appHash?: Uint8Array;
                            lastResultsHash?: Uint8Array;
                            evidenceHash?: Uint8Array;
                            proposerAddress?: Uint8Array;
                        };
                        valset?: {
                            operatorAddress?: string;
                            consensusPubkey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            jailed?: boolean;
                            status?: _238.BondStatus;
                            tokens?: string;
                            delegatorShares?: string;
                            description?: {
                                moniker?: string;
                                identity?: string;
                                website?: string;
                                securityContact?: string;
                                details?: string;
                            };
                            unbondingHeight?: any;
                            unbondingTime?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            commission?: {
                                commissionRates?: {
                                    rate?: string;
                                    maxRate?: string;
                                    maxChangeRate?: string;
                                };
                                updateTime?: {
                                    seconds?: any;
                                    nanos?: number;
                                };
                            };
                            minSelfDelegation?: string;
                        }[];
                    };
                }): _237.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _237.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _237.QueryPoolRequest;
                fromJSON(_: any): _237.QueryPoolRequest;
                toJSON(_: _237.QueryPoolRequest): unknown;
                fromPartial(_: {}): _237.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _237.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _237.QueryPoolResponse;
                fromJSON(object: any): _237.QueryPoolResponse;
                toJSON(message: _237.QueryPoolResponse): unknown;
                fromPartial(object: {
                    pool?: {
                        notBondedTokens?: string;
                        bondedTokens?: string;
                    };
                }): _237.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _237.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _237.QueryParamsRequest;
                fromJSON(_: any): _237.QueryParamsRequest;
                toJSON(_: _237.QueryParamsRequest): unknown;
                fromPartial(_: {}): _237.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _237.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _237.QueryParamsResponse;
                fromJSON(object: any): _237.QueryParamsResponse;
                toJSON(message: _237.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        unbondingTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        maxValidators?: number;
                        maxEntries?: number;
                        historicalEntries?: number;
                        bondDenom?: string;
                        minCommissionRate?: string;
                    };
                }): _237.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _236.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.GenesisState;
                fromJSON(object: any): _236.GenesisState;
                toJSON(message: _236.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        unbondingTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        maxValidators?: number;
                        maxEntries?: number;
                        historicalEntries?: number;
                        bondDenom?: string;
                        minCommissionRate?: string;
                    };
                    lastTotalPower?: Uint8Array;
                    lastValidatorPowers?: {
                        address?: string;
                        power?: any;
                    }[];
                    validators?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _238.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: any;
                        unbondingTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: {
                                seconds?: any;
                                nanos?: number;
                            };
                        };
                        minSelfDelegation?: string;
                    }[];
                    delegations?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        shares?: string;
                    }[];
                    unbondingDelegations?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: any;
                            completionTime?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            initialBalance?: string;
                            balance?: string;
                        }[];
                    }[];
                    redelegations?: {
                        delegatorAddress?: string;
                        validatorSrcAddress?: string;
                        validatorDstAddress?: string;
                        entries?: {
                            creationHeight?: any;
                            completionTime?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            initialBalance?: string;
                            sharesDst?: string;
                        }[];
                    }[];
                    exported?: boolean;
                }): _236.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _236.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.LastValidatorPower;
                fromJSON(object: any): _236.LastValidatorPower;
                toJSON(message: _236.LastValidatorPower): unknown;
                fromPartial(object: {
                    address?: string;
                    power?: any;
                }): _236.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _235.AuthorizationType;
            authorizationTypeToJSON(object: _235.AuthorizationType): string;
            AuthorizationType: typeof _235.AuthorizationType;
            StakeAuthorization: {
                encode(message: _235.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.StakeAuthorization;
                fromJSON(object: any): _235.StakeAuthorization;
                toJSON(message: _235.StakeAuthorization): unknown;
                fromPartial(object: {
                    maxTokens?: {
                        denom?: string;
                        amount?: string;
                    };
                    allowList?: {
                        address?: string[];
                    };
                    denyList?: {
                        address?: string[];
                    };
                    authorizationType?: _235.AuthorizationType;
                }): _235.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _235.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.StakeAuthorization_Validators;
                fromJSON(object: any): _235.StakeAuthorization_Validators;
                toJSON(message: _235.StakeAuthorization_Validators): unknown;
                fromPartial(object: {
                    address?: string[];
                }): _235.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _240.SignMode;
                signModeToJSON(object: _240.SignMode): string;
                SignMode: typeof _240.SignMode;
                SignatureDescriptors: {
                    encode(message: _240.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.SignatureDescriptors;
                    fromJSON(object: any): _240.SignatureDescriptors;
                    toJSON(message: _240.SignatureDescriptors): unknown;
                    fromPartial(object: {
                        signatures?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            data?: {
                                single?: {
                                    mode?: _240.SignMode;
                                    signature?: Uint8Array;
                                };
                                multi?: {
                                    bitarray?: {
                                        extraBitsStored?: number;
                                        elems?: Uint8Array;
                                    };
                                    signatures?: any[];
                                };
                            };
                            sequence?: any;
                        }[];
                    }): _240.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _240.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.SignatureDescriptor;
                    fromJSON(object: any): _240.SignatureDescriptor;
                    toJSON(message: _240.SignatureDescriptor): unknown;
                    fromPartial(object: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        data?: {
                            single?: {
                                mode?: _240.SignMode;
                                signature?: Uint8Array;
                            };
                            multi?: {
                                bitarray?: {
                                    extraBitsStored?: number;
                                    elems?: Uint8Array;
                                };
                                signatures?: any[];
                            };
                        };
                        sequence?: any;
                    }): _240.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _240.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.SignatureDescriptor_Data;
                    fromJSON(object: any): _240.SignatureDescriptor_Data;
                    toJSON(message: _240.SignatureDescriptor_Data): unknown;
                    fromPartial(object: {
                        single?: {
                            mode?: _240.SignMode;
                            signature?: Uint8Array;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            signatures?: any[];
                        };
                    }): _240.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _240.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.SignatureDescriptor_Data_Single;
                    fromJSON(object: any): _240.SignatureDescriptor_Data_Single;
                    toJSON(message: _240.SignatureDescriptor_Data_Single): unknown;
                    fromPartial(object: {
                        mode?: _240.SignMode;
                        signature?: Uint8Array;
                    }): _240.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _240.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.SignatureDescriptor_Data_Multi;
                    fromJSON(object: any): _240.SignatureDescriptor_Data_Multi;
                    toJSON(message: _240.SignatureDescriptor_Data_Multi): unknown;
                    fromPartial(object: {
                        bitarray?: {
                            extraBitsStored?: number;
                            elems?: Uint8Array;
                        };
                        signatures?: any[];
                    }): _240.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            Tx: {
                encode(message: _242.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.Tx;
                fromJSON(object: any): _242.Tx;
                toJSON(message: _242.Tx): unknown;
                fromPartial(object: {
                    body?: {
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        memo?: string;
                        timeoutHeight?: any;
                        extensionOptions?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        nonCriticalExtensionOptions?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    };
                    authInfo?: {
                        signerInfos?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            modeInfo?: {
                                single?: {
                                    mode?: _240.SignMode;
                                };
                                multi?: {
                                    bitarray?: {
                                        extraBitsStored?: number;
                                        elems?: Uint8Array;
                                    };
                                    modeInfos?: any[];
                                };
                            };
                            sequence?: any;
                        }[];
                        fee?: {
                            amount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            gasLimit?: any;
                            payer?: string;
                            granter?: string;
                        };
                        tip?: {
                            amount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            tipper?: string;
                        };
                    };
                    signatures?: Uint8Array[];
                }): _242.Tx;
            };
            TxRaw: {
                encode(message: _242.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.TxRaw;
                fromJSON(object: any): _242.TxRaw;
                toJSON(message: _242.TxRaw): unknown;
                fromPartial(object: {
                    bodyBytes?: Uint8Array;
                    authInfoBytes?: Uint8Array;
                    signatures?: Uint8Array[];
                }): _242.TxRaw;
            };
            SignDoc: {
                encode(message: _242.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.SignDoc;
                fromJSON(object: any): _242.SignDoc;
                toJSON(message: _242.SignDoc): unknown;
                fromPartial(object: {
                    bodyBytes?: Uint8Array;
                    authInfoBytes?: Uint8Array;
                    chainId?: string;
                    accountNumber?: any;
                }): _242.SignDoc;
            };
            SignDocDirectAux: {
                encode(message: _242.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.SignDocDirectAux;
                fromJSON(object: any): _242.SignDocDirectAux;
                toJSON(message: _242.SignDocDirectAux): unknown;
                fromPartial(object: {
                    bodyBytes?: Uint8Array;
                    publicKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    chainId?: string;
                    accountNumber?: any;
                    sequence?: any;
                    tip?: {
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        tipper?: string;
                    };
                }): _242.SignDocDirectAux;
            };
            TxBody: {
                encode(message: _242.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.TxBody;
                fromJSON(object: any): _242.TxBody;
                toJSON(message: _242.TxBody): unknown;
                fromPartial(object: {
                    messages?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    memo?: string;
                    timeoutHeight?: any;
                    extensionOptions?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    nonCriticalExtensionOptions?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _242.TxBody;
            };
            AuthInfo: {
                encode(message: _242.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.AuthInfo;
                fromJSON(object: any): _242.AuthInfo;
                toJSON(message: _242.AuthInfo): unknown;
                fromPartial(object: {
                    signerInfos?: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        modeInfo?: {
                            single?: {
                                mode?: _240.SignMode;
                            };
                            multi?: {
                                bitarray?: {
                                    extraBitsStored?: number;
                                    elems?: Uint8Array;
                                };
                                modeInfos?: any[];
                            };
                        };
                        sequence?: any;
                    }[];
                    fee?: {
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        gasLimit?: any;
                        payer?: string;
                        granter?: string;
                    };
                    tip?: {
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        tipper?: string;
                    };
                }): _242.AuthInfo;
            };
            SignerInfo: {
                encode(message: _242.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.SignerInfo;
                fromJSON(object: any): _242.SignerInfo;
                toJSON(message: _242.SignerInfo): unknown;
                fromPartial(object: {
                    publicKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    modeInfo?: {
                        single?: {
                            mode?: _240.SignMode;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            modeInfos?: any[];
                        };
                    };
                    sequence?: any;
                }): _242.SignerInfo;
            };
            ModeInfo: {
                encode(message: _242.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.ModeInfo;
                fromJSON(object: any): _242.ModeInfo;
                toJSON(message: _242.ModeInfo): unknown;
                fromPartial(object: {
                    single?: {
                        mode?: _240.SignMode;
                    };
                    multi?: {
                        bitarray?: {
                            extraBitsStored?: number;
                            elems?: Uint8Array;
                        };
                        modeInfos?: any[];
                    };
                }): _242.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _242.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.ModeInfo_Single;
                fromJSON(object: any): _242.ModeInfo_Single;
                toJSON(message: _242.ModeInfo_Single): unknown;
                fromPartial(object: {
                    mode?: _240.SignMode;
                }): _242.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _242.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.ModeInfo_Multi;
                fromJSON(object: any): _242.ModeInfo_Multi;
                toJSON(message: _242.ModeInfo_Multi): unknown;
                fromPartial(object: {
                    bitarray?: {
                        extraBitsStored?: number;
                        elems?: Uint8Array;
                    };
                    modeInfos?: any[];
                }): _242.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _242.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.Fee;
                fromJSON(object: any): _242.Fee;
                toJSON(message: _242.Fee): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    gasLimit?: any;
                    payer?: string;
                    granter?: string;
                }): _242.Fee;
            };
            Tip: {
                encode(message: _242.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.Tip;
                fromJSON(object: any): _242.Tip;
                toJSON(message: _242.Tip): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    tipper?: string;
                }): _242.Tip;
            };
            AuxSignerData: {
                encode(message: _242.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.AuxSignerData;
                fromJSON(object: any): _242.AuxSignerData;
                toJSON(message: _242.AuxSignerData): unknown;
                fromPartial(object: {
                    address?: string;
                    signDoc?: {
                        bodyBytes?: Uint8Array;
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        chainId?: string;
                        accountNumber?: any;
                        sequence?: any;
                        tip?: {
                            amount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            tipper?: string;
                        };
                    };
                    mode?: _240.SignMode;
                    sig?: Uint8Array;
                }): _242.AuxSignerData;
            };
            orderByFromJSON(object: any): _241.OrderBy;
            orderByToJSON(object: _241.OrderBy): string;
            broadcastModeFromJSON(object: any): _241.BroadcastMode;
            broadcastModeToJSON(object: _241.BroadcastMode): string;
            OrderBy: typeof _241.OrderBy;
            BroadcastMode: typeof _241.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _241.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.GetTxsEventRequest;
                fromJSON(object: any): _241.GetTxsEventRequest;
                toJSON(message: _241.GetTxsEventRequest): unknown;
                fromPartial(object: {
                    events?: string[];
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                    orderBy?: _241.OrderBy;
                }): _241.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _241.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.GetTxsEventResponse;
                fromJSON(object: any): _241.GetTxsEventResponse;
                toJSON(message: _241.GetTxsEventResponse): unknown;
                fromPartial(object: {
                    txs?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: any;
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _240.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: any;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gasLimit?: any;
                                payer?: string;
                                granter?: string;
                            };
                            tip?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                tipper?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    }[];
                    txResponses?: {
                        height?: any;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        rawLog?: string;
                        logs?: {
                            msgIndex?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gasWanted?: any;
                        gasUsed?: any;
                        tx?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _241.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _241.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.BroadcastTxRequest;
                fromJSON(object: any): _241.BroadcastTxRequest;
                toJSON(message: _241.BroadcastTxRequest): unknown;
                fromPartial(object: {
                    txBytes?: Uint8Array;
                    mode?: _241.BroadcastMode;
                }): _241.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _241.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.BroadcastTxResponse;
                fromJSON(object: any): _241.BroadcastTxResponse;
                toJSON(message: _241.BroadcastTxResponse): unknown;
                fromPartial(object: {
                    txResponse?: {
                        height?: any;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        rawLog?: string;
                        logs?: {
                            msgIndex?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gasWanted?: any;
                        gasUsed?: any;
                        tx?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                    };
                }): _241.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _241.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.SimulateRequest;
                fromJSON(object: any): _241.SimulateRequest;
                toJSON(message: _241.SimulateRequest): unknown;
                fromPartial(object: {
                    tx?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: any;
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _240.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: any;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gasLimit?: any;
                                payer?: string;
                                granter?: string;
                            };
                            tip?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                tipper?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    };
                    txBytes?: Uint8Array;
                }): _241.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _241.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.SimulateResponse;
                fromJSON(object: any): _241.SimulateResponse;
                toJSON(message: _241.SimulateResponse): unknown;
                fromPartial(object: {
                    gasInfo?: {
                        gasWanted?: any;
                        gasUsed?: any;
                    };
                    result?: {
                        data?: Uint8Array;
                        log?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                        msgResponses?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    };
                }): _241.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _241.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.GetTxRequest;
                fromJSON(object: any): _241.GetTxRequest;
                toJSON(message: _241.GetTxRequest): unknown;
                fromPartial(object: {
                    hash?: string;
                }): _241.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _241.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.GetTxResponse;
                fromJSON(object: any): _241.GetTxResponse;
                toJSON(message: _241.GetTxResponse): unknown;
                fromPartial(object: {
                    tx?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: any;
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _240.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: any;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gasLimit?: any;
                                payer?: string;
                                granter?: string;
                            };
                            tip?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                tipper?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    };
                    txResponse?: {
                        height?: any;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        rawLog?: string;
                        logs?: {
                            msgIndex?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gasWanted?: any;
                        gasUsed?: any;
                        tx?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                    };
                }): _241.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _241.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.GetBlockWithTxsRequest;
                fromJSON(object: any): _241.GetBlockWithTxsRequest;
                toJSON(message: _241.GetBlockWithTxsRequest): unknown;
                fromPartial(object: {
                    height?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _241.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _241.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.GetBlockWithTxsResponse;
                fromJSON(object: any): _241.GetBlockWithTxsResponse;
                toJSON(message: _241.GetBlockWithTxsResponse): unknown;
                fromPartial(object: {
                    txs?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: any;
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _240.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: any;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gasLimit?: any;
                                payer?: string;
                                granter?: string;
                            };
                            tip?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                tipper?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    }[];
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    block?: {
                        header?: {
                            version?: {
                                block?: any;
                                app?: any;
                            };
                            chainId?: string;
                            height?: any;
                            time?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            lastBlockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            lastCommitHash?: Uint8Array;
                            dataHash?: Uint8Array;
                            validatorsHash?: Uint8Array;
                            nextValidatorsHash?: Uint8Array;
                            consensusHash?: Uint8Array;
                            appHash?: Uint8Array;
                            lastResultsHash?: Uint8Array;
                            evidenceHash?: Uint8Array;
                            proposerAddress?: Uint8Array;
                        };
                        data?: {
                            txs?: Uint8Array[];
                        };
                        evidence?: {
                            evidence?: {
                                duplicateVoteEvidence?: {
                                    voteA?: {
                                        type?: import("../tendermint/types/types").SignedMsgType;
                                        height?: any;
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        timestamp?: {
                                            seconds?: any;
                                            nanos?: number;
                                        };
                                        validatorAddress?: Uint8Array;
                                        validatorIndex?: number;
                                        signature?: Uint8Array;
                                    };
                                    voteB?: {
                                        type?: import("../tendermint/types/types").SignedMsgType;
                                        height?: any;
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        timestamp?: {
                                            seconds?: any;
                                            nanos?: number;
                                        };
                                        validatorAddress?: Uint8Array;
                                        validatorIndex?: number;
                                        signature?: Uint8Array;
                                    };
                                    totalVotingPower?: any;
                                    validatorPower?: any;
                                    timestamp?: {
                                        seconds?: any;
                                        nanos?: number;
                                    };
                                };
                                lightClientAttackEvidence?: {
                                    conflictingBlock?: {
                                        signedHeader?: {
                                            header?: {
                                                version?: {
                                                    block?: any;
                                                    app?: any;
                                                };
                                                chainId?: string;
                                                height?: any;
                                                time?: {
                                                    seconds?: any;
                                                    nanos?: number;
                                                };
                                                lastBlockId?: {
                                                    hash?: Uint8Array;
                                                    partSetHeader?: {
                                                        total?: number;
                                                        hash?: Uint8Array;
                                                    };
                                                };
                                                lastCommitHash?: Uint8Array;
                                                dataHash?: Uint8Array;
                                                validatorsHash?: Uint8Array;
                                                nextValidatorsHash?: Uint8Array;
                                                consensusHash?: Uint8Array;
                                                appHash?: Uint8Array;
                                                lastResultsHash?: Uint8Array;
                                                evidenceHash?: Uint8Array;
                                                proposerAddress?: Uint8Array;
                                            };
                                            commit?: {
                                                height?: any;
                                                round?: number;
                                                blockId?: {
                                                    hash?: Uint8Array;
                                                    partSetHeader?: {
                                                        total?: number;
                                                        hash?: Uint8Array;
                                                    };
                                                };
                                                signatures?: {
                                                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                                    validatorAddress?: Uint8Array;
                                                    timestamp?: {
                                                        seconds?: any;
                                                        nanos?: number;
                                                    };
                                                    signature?: Uint8Array;
                                                }[];
                                            };
                                        };
                                        validatorSet?: {
                                            validators?: {
                                                address?: Uint8Array;
                                                pubKey?: {
                                                    ed25519?: Uint8Array;
                                                    secp256k1?: Uint8Array;
                                                };
                                                votingPower?: any;
                                                proposerPriority?: any;
                                            }[];
                                            proposer?: {
                                                address?: Uint8Array;
                                                pubKey?: {
                                                    ed25519?: Uint8Array;
                                                    secp256k1?: Uint8Array;
                                                };
                                                votingPower?: any;
                                                proposerPriority?: any;
                                            };
                                            totalVotingPower?: any;
                                        };
                                    };
                                    commonHeight?: any;
                                    byzantineValidators?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    }[];
                                    totalVotingPower?: any;
                                    timestamp?: {
                                        seconds?: any;
                                        nanos?: number;
                                    };
                                };
                            }[];
                        };
                        lastCommit?: {
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            signatures?: {
                                blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                validatorAddress?: Uint8Array;
                                timestamp?: {
                                    seconds?: any;
                                    nanos?: number;
                                };
                                signature?: Uint8Array;
                            }[];
                        };
                    };
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _241.GetBlockWithTxsResponse;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _244.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _244.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _244.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _244.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _244.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _244.MsgCancelUpgrade;
                    };
                };
                toJSON: {
                    softwareUpgrade(value: _244.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelUpgrade(value: _244.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _244.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _244.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _244.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _244.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _244.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _244.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority, plan }: _244.MsgSoftwareUpgrade) => {
                        authority: string;
                        plan: {
                            name: string;
                            time: {
                                seconds: string;
                                nanos: number;
                            };
                            height: string;
                            info: string;
                            upgraded_client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                        };
                    };
                    fromAmino: ({ authority, plan }: {
                        authority: string;
                        plan: {
                            name: string;
                            time: {
                                seconds: string;
                                nanos: number;
                            };
                            height: string;
                            info: string;
                            upgraded_client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                        };
                    }) => _244.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority }: _244.MsgCancelUpgrade) => {
                        authority: string;
                    };
                    fromAmino: ({ authority }: {
                        authority: string;
                    }) => _244.MsgCancelUpgrade;
                };
            };
            Plan: {
                encode(message: _245.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.Plan;
                fromJSON(object: any): _245.Plan;
                toJSON(message: _245.Plan): unknown;
                fromPartial(object: {
                    name?: string;
                    time?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    height?: any;
                    info?: string;
                    upgradedClientState?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _245.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _245.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.SoftwareUpgradeProposal;
                fromJSON(object: any): _245.SoftwareUpgradeProposal;
                toJSON(message: _245.SoftwareUpgradeProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    plan?: {
                        name?: string;
                        time?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        height?: any;
                        info?: string;
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _245.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _245.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.CancelSoftwareUpgradeProposal;
                fromJSON(object: any): _245.CancelSoftwareUpgradeProposal;
                toJSON(message: _245.CancelSoftwareUpgradeProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                }): _245.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _245.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.ModuleVersion;
                fromJSON(object: any): _245.ModuleVersion;
                toJSON(message: _245.ModuleVersion): unknown;
                fromPartial(object: {
                    name?: string;
                    version?: any;
                }): _245.ModuleVersion;
            };
            MsgSoftwareUpgrade: {
                encode(message: _244.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.MsgSoftwareUpgrade;
                fromJSON(object: any): _244.MsgSoftwareUpgrade;
                toJSON(message: _244.MsgSoftwareUpgrade): unknown;
                fromPartial(object: {
                    authority?: string;
                    plan?: {
                        name?: string;
                        time?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        height?: any;
                        info?: string;
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _244.MsgSoftwareUpgrade;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _244.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.MsgSoftwareUpgradeResponse;
                fromJSON(_: any): _244.MsgSoftwareUpgradeResponse;
                toJSON(_: _244.MsgSoftwareUpgradeResponse): unknown;
                fromPartial(_: {}): _244.MsgSoftwareUpgradeResponse;
            };
            MsgCancelUpgrade: {
                encode(message: _244.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.MsgCancelUpgrade;
                fromJSON(object: any): _244.MsgCancelUpgrade;
                toJSON(message: _244.MsgCancelUpgrade): unknown;
                fromPartial(object: {
                    authority?: string;
                }): _244.MsgCancelUpgrade;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _244.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.MsgCancelUpgradeResponse;
                fromJSON(_: any): _244.MsgCancelUpgradeResponse;
                toJSON(_: _244.MsgCancelUpgradeResponse): unknown;
                fromPartial(_: {}): _244.MsgCancelUpgradeResponse;
            };
            QueryCurrentPlanRequest: {
                encode(_: _243.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _243.QueryCurrentPlanRequest;
                fromJSON(_: any): _243.QueryCurrentPlanRequest;
                toJSON(_: _243.QueryCurrentPlanRequest): unknown;
                fromPartial(_: {}): _243.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _243.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _243.QueryCurrentPlanResponse;
                fromJSON(object: any): _243.QueryCurrentPlanResponse;
                toJSON(message: _243.QueryCurrentPlanResponse): unknown;
                fromPartial(object: {
                    plan?: {
                        name?: string;
                        time?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        height?: any;
                        info?: string;
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _243.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _243.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _243.QueryAppliedPlanRequest;
                fromJSON(object: any): _243.QueryAppliedPlanRequest;
                toJSON(message: _243.QueryAppliedPlanRequest): unknown;
                fromPartial(object: {
                    name?: string;
                }): _243.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _243.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _243.QueryAppliedPlanResponse;
                fromJSON(object: any): _243.QueryAppliedPlanResponse;
                toJSON(message: _243.QueryAppliedPlanResponse): unknown;
                fromPartial(object: {
                    height?: any;
                }): _243.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _243.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _243.QueryUpgradedConsensusStateRequest;
                fromJSON(object: any): _243.QueryUpgradedConsensusStateRequest;
                toJSON(message: _243.QueryUpgradedConsensusStateRequest): unknown;
                fromPartial(object: {
                    lastHeight?: any;
                }): _243.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _243.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _243.QueryUpgradedConsensusStateResponse;
                fromJSON(object: any): _243.QueryUpgradedConsensusStateResponse;
                toJSON(message: _243.QueryUpgradedConsensusStateResponse): unknown;
                fromPartial(object: {
                    upgradedConsensusState?: Uint8Array;
                }): _243.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _243.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _243.QueryModuleVersionsRequest;
                fromJSON(object: any): _243.QueryModuleVersionsRequest;
                toJSON(message: _243.QueryModuleVersionsRequest): unknown;
                fromPartial(object: {
                    moduleName?: string;
                }): _243.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _243.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _243.QueryModuleVersionsResponse;
                fromJSON(object: any): _243.QueryModuleVersionsResponse;
                toJSON(message: _243.QueryModuleVersionsResponse): unknown;
                fromPartial(object: {
                    moduleVersions?: {
                        name?: string;
                        version?: any;
                    }[];
                }): _243.QueryModuleVersionsResponse;
            };
            QueryAuthorityRequest: {
                encode(_: _243.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _243.QueryAuthorityRequest;
                fromJSON(_: any): _243.QueryAuthorityRequest;
                toJSON(_: _243.QueryAuthorityRequest): unknown;
                fromPartial(_: {}): _243.QueryAuthorityRequest;
            };
            QueryAuthorityResponse: {
                encode(message: _243.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _243.QueryAuthorityResponse;
                fromJSON(object: any): _243.QueryAuthorityResponse;
                toJSON(message: _243.QueryAuthorityResponse): unknown;
                fromPartial(object: {
                    address?: string;
                }): _243.QueryAuthorityResponse;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _246.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _246.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _246.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _246.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _246.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _246.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _246.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _246.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _246.MsgCreatePeriodicVestingAccount;
                    };
                };
                toJSON: {
                    createVestingAccount(value: _246.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createPermanentLockedAccount(value: _246.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createPeriodicVestingAccount(value: _246.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _246.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _246.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _246.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _246.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _246.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _246.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _246.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _246.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _246.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount, endTime, delayed }: _246.MsgCreateVestingAccount) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        end_time: string;
                        delayed: boolean;
                    };
                    fromAmino: ({ from_address, to_address, amount, end_time, delayed }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        end_time: string;
                        delayed: boolean;
                    }) => _246.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _246.MsgCreatePermanentLockedAccount) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, amount }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _246.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, startTime, vestingPeriods }: _246.MsgCreatePeriodicVestingAccount) => {
                        from_address: string;
                        to_address: string;
                        start_time: string;
                        vesting_periods: {
                            length: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, start_time, vesting_periods }: {
                        from_address: string;
                        to_address: string;
                        start_time: string;
                        vesting_periods: {
                            length: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    }) => _246.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                encode(message: _247.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _247.BaseVestingAccount;
                fromJSON(object: any): _247.BaseVestingAccount;
                toJSON(message: _247.BaseVestingAccount): unknown;
                fromPartial(object: {
                    baseAccount?: {
                        address?: string;
                        pubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        accountNumber?: any;
                        sequence?: any;
                    };
                    originalVesting?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    delegatedFree?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    delegatedVesting?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    endTime?: any;
                }): _247.BaseVestingAccount;
            };
            ContinuousVestingAccount: {
                encode(message: _247.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _247.ContinuousVestingAccount;
                fromJSON(object: any): _247.ContinuousVestingAccount;
                toJSON(message: _247.ContinuousVestingAccount): unknown;
                fromPartial(object: {
                    baseVestingAccount?: {
                        baseAccount?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            accountNumber?: any;
                            sequence?: any;
                        };
                        originalVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedFree?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        endTime?: any;
                    };
                    startTime?: any;
                }): _247.ContinuousVestingAccount;
            };
            DelayedVestingAccount: {
                encode(message: _247.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _247.DelayedVestingAccount;
                fromJSON(object: any): _247.DelayedVestingAccount;
                toJSON(message: _247.DelayedVestingAccount): unknown;
                fromPartial(object: {
                    baseVestingAccount?: {
                        baseAccount?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            accountNumber?: any;
                            sequence?: any;
                        };
                        originalVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedFree?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        endTime?: any;
                    };
                }): _247.DelayedVestingAccount;
            };
            Period: {
                encode(message: _247.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _247.Period;
                fromJSON(object: any): _247.Period;
                toJSON(message: _247.Period): unknown;
                fromPartial(object: {
                    length?: any;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _247.Period;
            };
            PeriodicVestingAccount: {
                encode(message: _247.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _247.PeriodicVestingAccount;
                fromJSON(object: any): _247.PeriodicVestingAccount;
                toJSON(message: _247.PeriodicVestingAccount): unknown;
                fromPartial(object: {
                    baseVestingAccount?: {
                        baseAccount?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            accountNumber?: any;
                            sequence?: any;
                        };
                        originalVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedFree?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        endTime?: any;
                    };
                    startTime?: any;
                    vestingPeriods?: {
                        length?: any;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _247.PeriodicVestingAccount;
            };
            PermanentLockedAccount: {
                encode(message: _247.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _247.PermanentLockedAccount;
                fromJSON(object: any): _247.PermanentLockedAccount;
                toJSON(message: _247.PermanentLockedAccount): unknown;
                fromPartial(object: {
                    baseVestingAccount?: {
                        baseAccount?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            accountNumber?: any;
                            sequence?: any;
                        };
                        originalVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedFree?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        endTime?: any;
                    };
                }): _247.PermanentLockedAccount;
            };
            MsgCreateVestingAccount: {
                encode(message: _246.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.MsgCreateVestingAccount;
                fromJSON(object: any): _246.MsgCreateVestingAccount;
                toJSON(message: _246.MsgCreateVestingAccount): unknown;
                fromPartial(object: {
                    fromAddress?: string;
                    toAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    endTime?: any;
                    delayed?: boolean;
                }): _246.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _246.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.MsgCreateVestingAccountResponse;
                fromJSON(_: any): _246.MsgCreateVestingAccountResponse;
                toJSON(_: _246.MsgCreateVestingAccountResponse): unknown;
                fromPartial(_: {}): _246.MsgCreateVestingAccountResponse;
            };
            MsgCreatePermanentLockedAccount: {
                encode(message: _246.MsgCreatePermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.MsgCreatePermanentLockedAccount;
                fromJSON(object: any): _246.MsgCreatePermanentLockedAccount;
                toJSON(message: _246.MsgCreatePermanentLockedAccount): unknown;
                fromPartial(object: {
                    fromAddress?: string;
                    toAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _246.MsgCreatePermanentLockedAccount;
            };
            MsgCreatePermanentLockedAccountResponse: {
                encode(_: _246.MsgCreatePermanentLockedAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.MsgCreatePermanentLockedAccountResponse;
                fromJSON(_: any): _246.MsgCreatePermanentLockedAccountResponse;
                toJSON(_: _246.MsgCreatePermanentLockedAccountResponse): unknown;
                fromPartial(_: {}): _246.MsgCreatePermanentLockedAccountResponse;
            };
            MsgCreatePeriodicVestingAccount: {
                encode(message: _246.MsgCreatePeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.MsgCreatePeriodicVestingAccount;
                fromJSON(object: any): _246.MsgCreatePeriodicVestingAccount;
                toJSON(message: _246.MsgCreatePeriodicVestingAccount): unknown;
                fromPartial(object: {
                    fromAddress?: string;
                    toAddress?: string;
                    startTime?: any;
                    vestingPeriods?: {
                        length?: any;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _246.MsgCreatePeriodicVestingAccount;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                encode(_: _246.MsgCreatePeriodicVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.MsgCreatePeriodicVestingAccountResponse;
                fromJSON(_: any): _246.MsgCreatePeriodicVestingAccountResponse;
                toJSON(_: _246.MsgCreatePeriodicVestingAccountResponse): unknown;
                fromPartial(_: {}): _246.MsgCreatePeriodicVestingAccountResponse;
            };
        };
    }
}
