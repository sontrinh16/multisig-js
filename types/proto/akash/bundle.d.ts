import * as _0 from "./audit/v1beta1/audit";
import * as _1 from "./audit/v1beta2/audit";
import * as _2 from "./audit/v1beta2/genesis";
import * as _3 from "./audit/v1beta2/query";
import * as _4 from "./base/v1beta1/attribute";
import * as _5 from "./base/v1beta1/endpoint";
import * as _6 from "./base/v1beta1/resource";
import * as _7 from "./base/v1beta1/resourcevalue";
import * as _8 from "./base/v1beta2/attribute";
import * as _9 from "./base/v1beta2/endpoint";
import * as _10 from "./base/v1beta2/resource";
import * as _11 from "./base/v1beta2/resourceunits";
import * as _12 from "./base/v1beta2/resourcevalue";
import * as _13 from "./cert/v1beta2/cert";
import * as _14 from "./cert/v1beta2/genesis";
import * as _15 from "./cert/v1beta2/query";
import * as _16 from "./deployment/v1beta1/authz";
import * as _17 from "./deployment/v1beta1/deployment";
import * as _18 from "./deployment/v1beta1/genesis";
import * as _19 from "./deployment/v1beta1/group";
import * as _20 from "./deployment/v1beta1/params";
import * as _21 from "./deployment/v1beta1/query";
import * as _22 from "./deployment/v1beta2/authz";
import * as _23 from "./deployment/v1beta2/deployment";
import * as _24 from "./deployment/v1beta2/deploymentmsg";
import * as _25 from "./deployment/v1beta2/genesis";
import * as _26 from "./deployment/v1beta2/group";
import * as _27 from "./deployment/v1beta2/groupid";
import * as _28 from "./deployment/v1beta2/groupmsg";
import * as _29 from "./deployment/v1beta2/groupspec";
import * as _30 from "./deployment/v1beta2/params";
import * as _31 from "./deployment/v1beta2/query";
import * as _32 from "./deployment/v1beta2/resource";
import * as _34 from "./escrow/v1beta1/genesis";
import * as _35 from "./escrow/v1beta1/query";
import * as _36 from "./escrow/v1beta1/types";
import * as _37 from "./escrow/v1beta2/genesis";
import * as _38 from "./escrow/v1beta2/query";
import * as _39 from "./escrow/v1beta2/types";
import * as _40 from "./inflation/v1beta2/genesis";
import * as _41 from "./inflation/v1beta2/params";
import * as _42 from "./market/v1beta2/bid";
import * as _43 from "./market/v1beta2/genesis";
import * as _44 from "./market/v1beta2/lease";
import * as _45 from "./market/v1beta2/order";
import * as _46 from "./market/v1beta2/params";
import * as _47 from "./market/v1beta2/query";
import * as _49 from "./provider/v1beta1/provider";
import * as _50 from "./provider/v1beta2/genesis";
import * as _51 from "./provider/v1beta2/provider";
import * as _52 from "./provider/v1beta2/query";
export declare namespace akash {
    namespace audit {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    signProviderAttributes(value: _0.MsgSignProviderAttributes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteProviderAttributes(value: _0.MsgDeleteProviderAttributes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    signProviderAttributes(value: _0.MsgSignProviderAttributes): {
                        typeUrl: string;
                        value: _0.MsgSignProviderAttributes;
                    };
                    deleteProviderAttributes(value: _0.MsgDeleteProviderAttributes): {
                        typeUrl: string;
                        value: _0.MsgDeleteProviderAttributes;
                    };
                };
                toJSON: {
                    signProviderAttributes(value: _0.MsgSignProviderAttributes): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deleteProviderAttributes(value: _0.MsgDeleteProviderAttributes): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    signProviderAttributes(value: any): {
                        typeUrl: string;
                        value: _0.MsgSignProviderAttributes;
                    };
                    deleteProviderAttributes(value: any): {
                        typeUrl: string;
                        value: _0.MsgDeleteProviderAttributes;
                    };
                };
                fromPartial: {
                    signProviderAttributes(value: _0.MsgSignProviderAttributes): {
                        typeUrl: string;
                        value: _0.MsgSignProviderAttributes;
                    };
                    deleteProviderAttributes(value: _0.MsgDeleteProviderAttributes): {
                        typeUrl: string;
                        value: _0.MsgDeleteProviderAttributes;
                    };
                };
            };
            AminoConverter: {
                "/akash.audit.v1beta1.MsgSignProviderAttributes": {
                    aminoType: string;
                    toAmino: ({ owner, auditor, attributes }: _0.MsgSignProviderAttributes) => {
                        owner: string;
                        auditor: string;
                        attributes: {
                            key: string;
                            value: string;
                        }[];
                    };
                    fromAmino: ({ owner, auditor, attributes }: {
                        owner: string;
                        auditor: string;
                        attributes: {
                            key: string;
                            value: string;
                        }[];
                    }) => _0.MsgSignProviderAttributes;
                };
                "/akash.audit.v1beta1.MsgDeleteProviderAttributes": {
                    aminoType: string;
                    toAmino: ({ owner, auditor, keys }: _0.MsgDeleteProviderAttributes) => {
                        owner: string;
                        auditor: string;
                        keys: string[];
                    };
                    fromAmino: ({ owner, auditor, keys }: {
                        owner: string;
                        auditor: string;
                        keys: string[];
                    }) => _0.MsgDeleteProviderAttributes;
                };
            };
            Provider: {
                encode(message: _0.Provider, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.Provider;
                fromJSON(object: any): _0.Provider;
                toJSON(message: _0.Provider): unknown;
                fromPartial(object: {
                    owner?: string;
                    auditor?: string;
                    attributes?: {
                        key?: string;
                        value?: string;
                    }[];
                }): _0.Provider;
            };
            AuditedAttributes: {
                encode(message: _0.AuditedAttributes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.AuditedAttributes;
                fromJSON(object: any): _0.AuditedAttributes;
                toJSON(message: _0.AuditedAttributes): unknown;
                fromPartial(object: {
                    owner?: string;
                    auditor?: string;
                    attributes?: {
                        key?: string;
                        value?: string;
                    }[];
                }): _0.AuditedAttributes;
            };
            AttributesResponse: {
                encode(message: _0.AttributesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.AttributesResponse;
                fromJSON(object: any): _0.AttributesResponse;
                toJSON(message: _0.AttributesResponse): unknown;
                fromPartial(object: {
                    attributes?: {
                        owner?: string;
                        auditor?: string;
                        attributes?: {
                            key?: string;
                            value?: string;
                        }[];
                    }[];
                }): _0.AttributesResponse;
            };
            AttributesFilters: {
                encode(message: _0.AttributesFilters, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.AttributesFilters;
                fromJSON(object: any): _0.AttributesFilters;
                toJSON(message: _0.AttributesFilters): unknown;
                fromPartial(object: {
                    auditors?: string[];
                    owners?: string[];
                }): _0.AttributesFilters;
            };
            MsgSignProviderAttributes: {
                encode(message: _0.MsgSignProviderAttributes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.MsgSignProviderAttributes;
                fromJSON(object: any): _0.MsgSignProviderAttributes;
                toJSON(message: _0.MsgSignProviderAttributes): unknown;
                fromPartial(object: {
                    owner?: string;
                    auditor?: string;
                    attributes?: {
                        key?: string;
                        value?: string;
                    }[];
                }): _0.MsgSignProviderAttributes;
            };
            MsgSignProviderAttributesResponse: {
                encode(_: _0.MsgSignProviderAttributesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.MsgSignProviderAttributesResponse;
                fromJSON(_: any): _0.MsgSignProviderAttributesResponse;
                toJSON(_: _0.MsgSignProviderAttributesResponse): unknown;
                fromPartial(_: {}): _0.MsgSignProviderAttributesResponse;
            };
            MsgDeleteProviderAttributes: {
                encode(message: _0.MsgDeleteProviderAttributes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.MsgDeleteProviderAttributes;
                fromJSON(object: any): _0.MsgDeleteProviderAttributes;
                toJSON(message: _0.MsgDeleteProviderAttributes): unknown;
                fromPartial(object: {
                    owner?: string;
                    auditor?: string;
                    keys?: string[];
                }): _0.MsgDeleteProviderAttributes;
            };
            MsgDeleteProviderAttributesResponse: {
                encode(_: _0.MsgDeleteProviderAttributesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.MsgDeleteProviderAttributesResponse;
                fromJSON(_: any): _0.MsgDeleteProviderAttributesResponse;
                toJSON(_: _0.MsgDeleteProviderAttributesResponse): unknown;
                fromPartial(_: {}): _0.MsgDeleteProviderAttributesResponse;
            };
        };
        const v1beta2: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    signProviderAttributes(value: _1.MsgSignProviderAttributes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteProviderAttributes(value: _1.MsgDeleteProviderAttributes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    signProviderAttributes(value: _1.MsgSignProviderAttributes): {
                        typeUrl: string;
                        value: _1.MsgSignProviderAttributes;
                    };
                    deleteProviderAttributes(value: _1.MsgDeleteProviderAttributes): {
                        typeUrl: string;
                        value: _1.MsgDeleteProviderAttributes;
                    };
                };
                toJSON: {
                    signProviderAttributes(value: _1.MsgSignProviderAttributes): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deleteProviderAttributes(value: _1.MsgDeleteProviderAttributes): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    signProviderAttributes(value: any): {
                        typeUrl: string;
                        value: _1.MsgSignProviderAttributes;
                    };
                    deleteProviderAttributes(value: any): {
                        typeUrl: string;
                        value: _1.MsgDeleteProviderAttributes;
                    };
                };
                fromPartial: {
                    signProviderAttributes(value: _1.MsgSignProviderAttributes): {
                        typeUrl: string;
                        value: _1.MsgSignProviderAttributes;
                    };
                    deleteProviderAttributes(value: _1.MsgDeleteProviderAttributes): {
                        typeUrl: string;
                        value: _1.MsgDeleteProviderAttributes;
                    };
                };
            };
            AminoConverter: {
                "/akash.audit.v1beta2.MsgSignProviderAttributes": {
                    aminoType: string;
                    toAmino: ({ owner, auditor, attributes }: _1.MsgSignProviderAttributes) => {
                        owner: string;
                        auditor: string;
                        attributes: {
                            key: string;
                            value: string;
                        }[];
                    };
                    fromAmino: ({ owner, auditor, attributes }: {
                        owner: string;
                        auditor: string;
                        attributes: {
                            key: string;
                            value: string;
                        }[];
                    }) => _1.MsgSignProviderAttributes;
                };
                "/akash.audit.v1beta2.MsgDeleteProviderAttributes": {
                    aminoType: string;
                    toAmino: ({ owner, auditor, keys }: _1.MsgDeleteProviderAttributes) => {
                        owner: string;
                        auditor: string;
                        keys: string[];
                    };
                    fromAmino: ({ owner, auditor, keys }: {
                        owner: string;
                        auditor: string;
                        keys: string[];
                    }) => _1.MsgDeleteProviderAttributes;
                };
            };
            QueryProvidersResponse: {
                encode(message: _3.QueryProvidersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryProvidersResponse;
                fromJSON(object: any): _3.QueryProvidersResponse;
                toJSON(message: _3.QueryProvidersResponse): unknown;
                fromPartial(object: {
                    providers?: {
                        owner?: string;
                        auditor?: string;
                        attributes?: {
                            key?: string;
                            value?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _3.QueryProvidersResponse;
            };
            QueryProviderRequest: {
                encode(message: _3.QueryProviderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryProviderRequest;
                fromJSON(object: any): _3.QueryProviderRequest;
                toJSON(message: _3.QueryProviderRequest): unknown;
                fromPartial(object: {
                    auditor?: string;
                    owner?: string;
                }): _3.QueryProviderRequest;
            };
            QueryAllProvidersAttributesRequest: {
                encode(message: _3.QueryAllProvidersAttributesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryAllProvidersAttributesRequest;
                fromJSON(object: any): _3.QueryAllProvidersAttributesRequest;
                toJSON(message: _3.QueryAllProvidersAttributesRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _3.QueryAllProvidersAttributesRequest;
            };
            QueryProviderAttributesRequest: {
                encode(message: _3.QueryProviderAttributesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryProviderAttributesRequest;
                fromJSON(object: any): _3.QueryProviderAttributesRequest;
                toJSON(message: _3.QueryProviderAttributesRequest): unknown;
                fromPartial(object: {
                    owner?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _3.QueryProviderAttributesRequest;
            };
            QueryProviderAuditorRequest: {
                encode(message: _3.QueryProviderAuditorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryProviderAuditorRequest;
                fromJSON(object: any): _3.QueryProviderAuditorRequest;
                toJSON(message: _3.QueryProviderAuditorRequest): unknown;
                fromPartial(object: {
                    auditor?: string;
                    owner?: string;
                }): _3.QueryProviderAuditorRequest;
            };
            QueryAuditorAttributesRequest: {
                encode(message: _3.QueryAuditorAttributesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryAuditorAttributesRequest;
                fromJSON(object: any): _3.QueryAuditorAttributesRequest;
                toJSON(message: _3.QueryAuditorAttributesRequest): unknown;
                fromPartial(object: {
                    auditor?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _3.QueryAuditorAttributesRequest;
            };
            GenesisState: {
                encode(message: _2.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.GenesisState;
                fromJSON(object: any): _2.GenesisState;
                toJSON(message: _2.GenesisState): unknown;
                fromPartial(object: {
                    attributes?: {
                        owner?: string;
                        auditor?: string;
                        attributes?: {
                            key?: string;
                            value?: string;
                        }[];
                    }[];
                }): _2.GenesisState;
            };
            Provider: {
                encode(message: _1.Provider, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.Provider;
                fromJSON(object: any): _1.Provider;
                toJSON(message: _1.Provider): unknown;
                fromPartial(object: {
                    owner?: string;
                    auditor?: string;
                    attributes?: {
                        key?: string;
                        value?: string;
                    }[];
                }): _1.Provider;
            };
            AuditedAttributes: {
                encode(message: _1.AuditedAttributes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.AuditedAttributes;
                fromJSON(object: any): _1.AuditedAttributes;
                toJSON(message: _1.AuditedAttributes): unknown;
                fromPartial(object: {
                    owner?: string;
                    auditor?: string;
                    attributes?: {
                        key?: string;
                        value?: string;
                    }[];
                }): _1.AuditedAttributes;
            };
            AttributesResponse: {
                encode(message: _1.AttributesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.AttributesResponse;
                fromJSON(object: any): _1.AttributesResponse;
                toJSON(message: _1.AttributesResponse): unknown;
                fromPartial(object: {
                    attributes?: {
                        owner?: string;
                        auditor?: string;
                        attributes?: {
                            key?: string;
                            value?: string;
                        }[];
                    }[];
                }): _1.AttributesResponse;
            };
            AttributesFilters: {
                encode(message: _1.AttributesFilters, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.AttributesFilters;
                fromJSON(object: any): _1.AttributesFilters;
                toJSON(message: _1.AttributesFilters): unknown;
                fromPartial(object: {
                    auditors?: string[];
                    owners?: string[];
                }): _1.AttributesFilters;
            };
            MsgSignProviderAttributes: {
                encode(message: _1.MsgSignProviderAttributes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.MsgSignProviderAttributes;
                fromJSON(object: any): _1.MsgSignProviderAttributes;
                toJSON(message: _1.MsgSignProviderAttributes): unknown;
                fromPartial(object: {
                    owner?: string;
                    auditor?: string;
                    attributes?: {
                        key?: string;
                        value?: string;
                    }[];
                }): _1.MsgSignProviderAttributes;
            };
            MsgSignProviderAttributesResponse: {
                encode(_: _1.MsgSignProviderAttributesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.MsgSignProviderAttributesResponse;
                fromJSON(_: any): _1.MsgSignProviderAttributesResponse;
                toJSON(_: _1.MsgSignProviderAttributesResponse): unknown;
                fromPartial(_: {}): _1.MsgSignProviderAttributesResponse;
            };
            MsgDeleteProviderAttributes: {
                encode(message: _1.MsgDeleteProviderAttributes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.MsgDeleteProviderAttributes;
                fromJSON(object: any): _1.MsgDeleteProviderAttributes;
                toJSON(message: _1.MsgDeleteProviderAttributes): unknown;
                fromPartial(object: {
                    owner?: string;
                    auditor?: string;
                    keys?: string[];
                }): _1.MsgDeleteProviderAttributes;
            };
            MsgDeleteProviderAttributesResponse: {
                encode(_: _1.MsgDeleteProviderAttributesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.MsgDeleteProviderAttributesResponse;
                fromJSON(_: any): _1.MsgDeleteProviderAttributesResponse;
                toJSON(_: _1.MsgDeleteProviderAttributesResponse): unknown;
                fromPartial(_: {}): _1.MsgDeleteProviderAttributesResponse;
            };
        };
    }
    namespace base {
        const v1beta1: {
            ResourceValue: {
                encode(message: _7.ResourceValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.ResourceValue;
                fromJSON(object: any): _7.ResourceValue;
                toJSON(message: _7.ResourceValue): unknown;
                fromPartial(object: {
                    val?: Uint8Array;
                }): _7.ResourceValue;
            };
            CPU: {
                encode(message: _6.CPU, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.CPU;
                fromJSON(object: any): _6.CPU;
                toJSON(message: _6.CPU): unknown;
                fromPartial(object: {
                    units?: {
                        val?: Uint8Array;
                    };
                    attributes?: {
                        key?: string;
                        value?: string;
                    }[];
                }): _6.CPU;
            };
            Memory: {
                encode(message: _6.Memory, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.Memory;
                fromJSON(object: any): _6.Memory;
                toJSON(message: _6.Memory): unknown;
                fromPartial(object: {
                    quantity?: {
                        val?: Uint8Array;
                    };
                    attributes?: {
                        key?: string;
                        value?: string;
                    }[];
                }): _6.Memory;
            };
            Storage: {
                encode(message: _6.Storage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.Storage;
                fromJSON(object: any): _6.Storage;
                toJSON(message: _6.Storage): unknown;
                fromPartial(object: {
                    quantity?: {
                        val?: Uint8Array;
                    };
                    attributes?: {
                        key?: string;
                        value?: string;
                    }[];
                }): _6.Storage;
            };
            ResourceUnits: {
                encode(message: _6.ResourceUnits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.ResourceUnits;
                fromJSON(object: any): _6.ResourceUnits;
                toJSON(message: _6.ResourceUnits): unknown;
                fromPartial(object: {
                    cpu?: {
                        units?: {
                            val?: Uint8Array;
                        };
                        attributes?: {
                            key?: string;
                            value?: string;
                        }[];
                    };
                    memory?: {
                        quantity?: {
                            val?: Uint8Array;
                        };
                        attributes?: {
                            key?: string;
                            value?: string;
                        }[];
                    };
                    storage?: {
                        quantity?: {
                            val?: Uint8Array;
                        };
                        attributes?: {
                            key?: string;
                            value?: string;
                        }[];
                    };
                    endpoints?: {
                        kind?: _5.Endpoint_Kind;
                    }[];
                }): _6.ResourceUnits;
            };
            endpoint_KindFromJSON(object: any): _5.Endpoint_Kind;
            endpoint_KindToJSON(object: _5.Endpoint_Kind): string;
            Endpoint_Kind: typeof _5.Endpoint_Kind;
            Endpoint: {
                encode(message: _5.Endpoint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.Endpoint;
                fromJSON(object: any): _5.Endpoint;
                toJSON(message: _5.Endpoint): unknown;
                fromPartial(object: {
                    kind?: _5.Endpoint_Kind;
                }): _5.Endpoint;
            };
            Attribute: {
                encode(message: _4.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.Attribute;
                fromJSON(object: any): _4.Attribute;
                toJSON(message: _4.Attribute): unknown;
                fromPartial(object: {
                    key?: string;
                    value?: string;
                }): _4.Attribute;
            };
            SignedBy: {
                encode(message: _4.SignedBy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.SignedBy;
                fromJSON(object: any): _4.SignedBy;
                toJSON(message: _4.SignedBy): unknown;
                fromPartial(object: {
                    allOf?: string[];
                    anyOf?: string[];
                }): _4.SignedBy;
            };
            PlacementRequirements: {
                encode(message: _4.PlacementRequirements, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.PlacementRequirements;
                fromJSON(object: any): _4.PlacementRequirements;
                toJSON(message: _4.PlacementRequirements): unknown;
                fromPartial(object: {
                    signedBy?: {
                        allOf?: string[];
                        anyOf?: string[];
                    };
                    attributes?: {
                        key?: string;
                        value?: string;
                    }[];
                }): _4.PlacementRequirements;
            };
        };
        const v1beta2: {
            ResourceValue: {
                encode(message: _12.ResourceValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.ResourceValue;
                fromJSON(object: any): _12.ResourceValue;
                toJSON(message: _12.ResourceValue): unknown;
                fromPartial(object: {
                    val?: Uint8Array;
                }): _12.ResourceValue;
            };
            ResourceUnits: {
                encode(message: _11.ResourceUnits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.ResourceUnits;
                fromJSON(object: any): _11.ResourceUnits;
                toJSON(message: _11.ResourceUnits): unknown;
                fromPartial(object: {
                    cpu?: {
                        units?: {
                            val?: Uint8Array;
                        };
                        attributes?: {
                            key?: string;
                            value?: string;
                        }[];
                    };
                    memory?: {
                        quantity?: {
                            val?: Uint8Array;
                        };
                        attributes?: {
                            key?: string;
                            value?: string;
                        }[];
                    };
                    storage?: {
                        name?: string;
                        quantity?: {
                            val?: Uint8Array;
                        };
                        attributes?: {
                            key?: string;
                            value?: string;
                        }[];
                    }[];
                    endpoints?: {
                        kind?: _9.Endpoint_Kind;
                        sequenceNumber?: number;
                    }[];
                }): _11.ResourceUnits;
            };
            CPU: {
                encode(message: _10.CPU, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.CPU;
                fromJSON(object: any): _10.CPU;
                toJSON(message: _10.CPU): unknown;
                fromPartial(object: {
                    units?: {
                        val?: Uint8Array;
                    };
                    attributes?: {
                        key?: string;
                        value?: string;
                    }[];
                }): _10.CPU;
            };
            Memory: {
                encode(message: _10.Memory, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.Memory;
                fromJSON(object: any): _10.Memory;
                toJSON(message: _10.Memory): unknown;
                fromPartial(object: {
                    quantity?: {
                        val?: Uint8Array;
                    };
                    attributes?: {
                        key?: string;
                        value?: string;
                    }[];
                }): _10.Memory;
            };
            Storage: {
                encode(message: _10.Storage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.Storage;
                fromJSON(object: any): _10.Storage;
                toJSON(message: _10.Storage): unknown;
                fromPartial(object: {
                    name?: string;
                    quantity?: {
                        val?: Uint8Array;
                    };
                    attributes?: {
                        key?: string;
                        value?: string;
                    }[];
                }): _10.Storage;
            };
            endpoint_KindFromJSON(object: any): _9.Endpoint_Kind;
            endpoint_KindToJSON(object: _9.Endpoint_Kind): string;
            Endpoint_Kind: typeof _9.Endpoint_Kind;
            Endpoint: {
                encode(message: _9.Endpoint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.Endpoint;
                fromJSON(object: any): _9.Endpoint;
                toJSON(message: _9.Endpoint): unknown;
                fromPartial(object: {
                    kind?: _9.Endpoint_Kind;
                    sequenceNumber?: number;
                }): _9.Endpoint;
            };
            Attribute: {
                encode(message: _8.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.Attribute;
                fromJSON(object: any): _8.Attribute;
                toJSON(message: _8.Attribute): unknown;
                fromPartial(object: {
                    key?: string;
                    value?: string;
                }): _8.Attribute;
            };
            SignedBy: {
                encode(message: _8.SignedBy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.SignedBy;
                fromJSON(object: any): _8.SignedBy;
                toJSON(message: _8.SignedBy): unknown;
                fromPartial(object: {
                    allOf?: string[];
                    anyOf?: string[];
                }): _8.SignedBy;
            };
            PlacementRequirements: {
                encode(message: _8.PlacementRequirements, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.PlacementRequirements;
                fromJSON(object: any): _8.PlacementRequirements;
                toJSON(message: _8.PlacementRequirements): unknown;
                fromPartial(object: {
                    signedBy?: {
                        allOf?: string[];
                        anyOf?: string[];
                    };
                    attributes?: {
                        key?: string;
                        value?: string;
                    }[];
                }): _8.PlacementRequirements;
            };
        };
    }
    namespace cert {
        const v1beta2: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createCertificate(value: _13.MsgCreateCertificate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeCertificate(value: _13.MsgRevokeCertificate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createCertificate(value: _13.MsgCreateCertificate): {
                        typeUrl: string;
                        value: _13.MsgCreateCertificate;
                    };
                    revokeCertificate(value: _13.MsgRevokeCertificate): {
                        typeUrl: string;
                        value: _13.MsgRevokeCertificate;
                    };
                };
                toJSON: {
                    createCertificate(value: _13.MsgCreateCertificate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revokeCertificate(value: _13.MsgRevokeCertificate): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createCertificate(value: any): {
                        typeUrl: string;
                        value: _13.MsgCreateCertificate;
                    };
                    revokeCertificate(value: any): {
                        typeUrl: string;
                        value: _13.MsgRevokeCertificate;
                    };
                };
                fromPartial: {
                    createCertificate(value: _13.MsgCreateCertificate): {
                        typeUrl: string;
                        value: _13.MsgCreateCertificate;
                    };
                    revokeCertificate(value: _13.MsgRevokeCertificate): {
                        typeUrl: string;
                        value: _13.MsgRevokeCertificate;
                    };
                };
            };
            AminoConverter: {
                "/akash.cert.v1beta2.MsgCreateCertificate": {
                    aminoType: string;
                    toAmino: ({ owner, cert, pubkey }: _13.MsgCreateCertificate) => {
                        owner: string;
                        cert: Uint8Array;
                        pubkey: Uint8Array;
                    };
                    fromAmino: ({ owner, cert, pubkey }: {
                        owner: string;
                        cert: Uint8Array;
                        pubkey: Uint8Array;
                    }) => _13.MsgCreateCertificate;
                };
                "/akash.cert.v1beta2.MsgRevokeCertificate": {
                    aminoType: string;
                    toAmino: ({ id }: _13.MsgRevokeCertificate) => {
                        id: {
                            owner: string;
                            serial: string;
                        };
                    };
                    fromAmino: ({ id }: {
                        id: {
                            owner: string;
                            serial: string;
                        };
                    }) => _13.MsgRevokeCertificate;
                };
            };
            CertificateResponse: {
                encode(message: _15.CertificateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.CertificateResponse;
                fromJSON(object: any): _15.CertificateResponse;
                toJSON(message: _15.CertificateResponse): unknown;
                fromPartial(object: {
                    certificate?: {
                        state?: _13.Certificate_State;
                        cert?: Uint8Array;
                        pubkey?: Uint8Array;
                    };
                    serial?: string;
                }): _15.CertificateResponse;
            };
            QueryCertificatesRequest: {
                encode(message: _15.QueryCertificatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QueryCertificatesRequest;
                fromJSON(object: any): _15.QueryCertificatesRequest;
                toJSON(message: _15.QueryCertificatesRequest): unknown;
                fromPartial(object: {
                    filter?: {
                        owner?: string;
                        serial?: string;
                        state?: string;
                    };
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _15.QueryCertificatesRequest;
            };
            QueryCertificatesResponse: {
                encode(message: _15.QueryCertificatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QueryCertificatesResponse;
                fromJSON(object: any): _15.QueryCertificatesResponse;
                toJSON(message: _15.QueryCertificatesResponse): unknown;
                fromPartial(object: {
                    certificates?: {
                        certificate?: {
                            state?: _13.Certificate_State;
                            cert?: Uint8Array;
                            pubkey?: Uint8Array;
                        };
                        serial?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _15.QueryCertificatesResponse;
            };
            GenesisCertificate: {
                encode(message: _14.GenesisCertificate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GenesisCertificate;
                fromJSON(object: any): _14.GenesisCertificate;
                toJSON(message: _14.GenesisCertificate): unknown;
                fromPartial(object: {
                    owner?: string;
                    certificate?: {
                        state?: _13.Certificate_State;
                        cert?: Uint8Array;
                        pubkey?: Uint8Array;
                    };
                }): _14.GenesisCertificate;
            };
            GenesisState: {
                encode(message: _14.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GenesisState;
                fromJSON(object: any): _14.GenesisState;
                toJSON(message: _14.GenesisState): unknown;
                fromPartial(object: {
                    certificates?: {
                        owner?: string;
                        certificate?: {
                            state?: _13.Certificate_State;
                            cert?: Uint8Array;
                            pubkey?: Uint8Array;
                        };
                    }[];
                }): _14.GenesisState;
            };
            certificate_StateFromJSON(object: any): _13.Certificate_State;
            certificate_StateToJSON(object: _13.Certificate_State): string;
            Certificate_State: typeof _13.Certificate_State;
            CertificateID: {
                encode(message: _13.CertificateID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.CertificateID;
                fromJSON(object: any): _13.CertificateID;
                toJSON(message: _13.CertificateID): unknown;
                fromPartial(object: {
                    owner?: string;
                    serial?: string;
                }): _13.CertificateID;
            };
            Certificate: {
                encode(message: _13.Certificate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.Certificate;
                fromJSON(object: any): _13.Certificate;
                toJSON(message: _13.Certificate): unknown;
                fromPartial(object: {
                    state?: _13.Certificate_State;
                    cert?: Uint8Array;
                    pubkey?: Uint8Array;
                }): _13.Certificate;
            };
            CertificateFilter: {
                encode(message: _13.CertificateFilter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.CertificateFilter;
                fromJSON(object: any): _13.CertificateFilter;
                toJSON(message: _13.CertificateFilter): unknown;
                fromPartial(object: {
                    owner?: string;
                    serial?: string;
                    state?: string;
                }): _13.CertificateFilter;
            };
            MsgCreateCertificate: {
                encode(message: _13.MsgCreateCertificate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.MsgCreateCertificate;
                fromJSON(object: any): _13.MsgCreateCertificate;
                toJSON(message: _13.MsgCreateCertificate): unknown;
                fromPartial(object: {
                    owner?: string;
                    cert?: Uint8Array;
                    pubkey?: Uint8Array;
                }): _13.MsgCreateCertificate;
            };
            MsgCreateCertificateResponse: {
                encode(_: _13.MsgCreateCertificateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.MsgCreateCertificateResponse;
                fromJSON(_: any): _13.MsgCreateCertificateResponse;
                toJSON(_: _13.MsgCreateCertificateResponse): unknown;
                fromPartial(_: {}): _13.MsgCreateCertificateResponse;
            };
            MsgRevokeCertificate: {
                encode(message: _13.MsgRevokeCertificate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.MsgRevokeCertificate;
                fromJSON(object: any): _13.MsgRevokeCertificate;
                toJSON(message: _13.MsgRevokeCertificate): unknown;
                fromPartial(object: {
                    id?: {
                        owner?: string;
                        serial?: string;
                    };
                }): _13.MsgRevokeCertificate;
            };
            MsgRevokeCertificateResponse: {
                encode(_: _13.MsgRevokeCertificateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.MsgRevokeCertificateResponse;
                fromJSON(_: any): _13.MsgRevokeCertificateResponse;
                toJSON(_: _13.MsgRevokeCertificateResponse): unknown;
                fromPartial(_: {}): _13.MsgRevokeCertificateResponse;
            };
        };
    }
    namespace deployment {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createDeployment(value: _17.MsgCreateDeployment): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    depositDeployment(value: _17.MsgDepositDeployment): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateDeployment(value: _17.MsgUpdateDeployment): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    closeDeployment(value: _17.MsgCloseDeployment): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    closeGroup(value: _19.MsgCloseGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    pauseGroup(value: _19.MsgPauseGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    startGroup(value: _19.MsgStartGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createDeployment(value: _17.MsgCreateDeployment): {
                        typeUrl: string;
                        value: _17.MsgCreateDeployment;
                    };
                    depositDeployment(value: _17.MsgDepositDeployment): {
                        typeUrl: string;
                        value: _17.MsgDepositDeployment;
                    };
                    updateDeployment(value: _17.MsgUpdateDeployment): {
                        typeUrl: string;
                        value: _17.MsgUpdateDeployment;
                    };
                    closeDeployment(value: _17.MsgCloseDeployment): {
                        typeUrl: string;
                        value: _17.MsgCloseDeployment;
                    };
                    closeGroup(value: _19.MsgCloseGroup): {
                        typeUrl: string;
                        value: _19.MsgCloseGroup;
                    };
                    pauseGroup(value: _19.MsgPauseGroup): {
                        typeUrl: string;
                        value: _19.MsgPauseGroup;
                    };
                    startGroup(value: _19.MsgStartGroup): {
                        typeUrl: string;
                        value: _19.MsgStartGroup;
                    };
                };
                toJSON: {
                    createDeployment(value: _17.MsgCreateDeployment): {
                        typeUrl: string;
                        value: unknown;
                    };
                    depositDeployment(value: _17.MsgDepositDeployment): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateDeployment(value: _17.MsgUpdateDeployment): {
                        typeUrl: string;
                        value: unknown;
                    };
                    closeDeployment(value: _17.MsgCloseDeployment): {
                        typeUrl: string;
                        value: unknown;
                    };
                    closeGroup(value: _19.MsgCloseGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                    pauseGroup(value: _19.MsgPauseGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                    startGroup(value: _19.MsgStartGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createDeployment(value: any): {
                        typeUrl: string;
                        value: _17.MsgCreateDeployment;
                    };
                    depositDeployment(value: any): {
                        typeUrl: string;
                        value: _17.MsgDepositDeployment;
                    };
                    updateDeployment(value: any): {
                        typeUrl: string;
                        value: _17.MsgUpdateDeployment;
                    };
                    closeDeployment(value: any): {
                        typeUrl: string;
                        value: _17.MsgCloseDeployment;
                    };
                    closeGroup(value: any): {
                        typeUrl: string;
                        value: _19.MsgCloseGroup;
                    };
                    pauseGroup(value: any): {
                        typeUrl: string;
                        value: _19.MsgPauseGroup;
                    };
                    startGroup(value: any): {
                        typeUrl: string;
                        value: _19.MsgStartGroup;
                    };
                };
                fromPartial: {
                    createDeployment(value: _17.MsgCreateDeployment): {
                        typeUrl: string;
                        value: _17.MsgCreateDeployment;
                    };
                    depositDeployment(value: _17.MsgDepositDeployment): {
                        typeUrl: string;
                        value: _17.MsgDepositDeployment;
                    };
                    updateDeployment(value: _17.MsgUpdateDeployment): {
                        typeUrl: string;
                        value: _17.MsgUpdateDeployment;
                    };
                    closeDeployment(value: _17.MsgCloseDeployment): {
                        typeUrl: string;
                        value: _17.MsgCloseDeployment;
                    };
                    closeGroup(value: _19.MsgCloseGroup): {
                        typeUrl: string;
                        value: _19.MsgCloseGroup;
                    };
                    pauseGroup(value: _19.MsgPauseGroup): {
                        typeUrl: string;
                        value: _19.MsgPauseGroup;
                    };
                    startGroup(value: _19.MsgStartGroup): {
                        typeUrl: string;
                        value: _19.MsgStartGroup;
                    };
                };
            };
            AminoConverter: {
                "/akash.deployment.v1beta1.MsgCreateDeployment": {
                    aminoType: string;
                    toAmino: ({ id, groups, version, deposit }: _17.MsgCreateDeployment) => {
                        id: {
                            owner: string;
                            dseq: string;
                        };
                        groups: {
                            name: string;
                            requirements: {
                                signed_by: {
                                    all_of: string[];
                                    any_of: string[];
                                };
                                attributes: {
                                    key: string;
                                    value: string;
                                }[];
                            };
                            resources: {
                                resources: {
                                    cpu: {
                                        units: {
                                            val: Uint8Array;
                                        };
                                        attributes: {
                                            key: string;
                                            value: string;
                                        }[];
                                    };
                                    memory: {
                                        quantity: {
                                            val: Uint8Array;
                                        };
                                        attributes: {
                                            key: string;
                                            value: string;
                                        }[];
                                    };
                                    storage: {
                                        quantity: {
                                            val: Uint8Array;
                                        };
                                        attributes: {
                                            key: string;
                                            value: string;
                                        }[];
                                    };
                                    endpoints: {
                                        kind: number;
                                    }[];
                                };
                                count: number;
                                price: {
                                    denom: string;
                                    amount: string;
                                };
                            }[];
                        }[];
                        version: Uint8Array;
                        deposit: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ id, groups, version, deposit }: {
                        id: {
                            owner: string;
                            dseq: string;
                        };
                        groups: {
                            name: string;
                            requirements: {
                                signed_by: {
                                    all_of: string[];
                                    any_of: string[];
                                };
                                attributes: {
                                    key: string;
                                    value: string;
                                }[];
                            };
                            resources: {
                                resources: {
                                    cpu: {
                                        units: {
                                            val: Uint8Array;
                                        };
                                        attributes: {
                                            key: string;
                                            value: string;
                                        }[];
                                    };
                                    memory: {
                                        quantity: {
                                            val: Uint8Array;
                                        };
                                        attributes: {
                                            key: string;
                                            value: string;
                                        }[];
                                    };
                                    storage: {
                                        quantity: {
                                            val: Uint8Array;
                                        };
                                        attributes: {
                                            key: string;
                                            value: string;
                                        }[];
                                    };
                                    endpoints: {
                                        kind: number;
                                    }[];
                                };
                                count: number;
                                price: {
                                    denom: string;
                                    amount: string;
                                };
                            }[];
                        }[];
                        version: Uint8Array;
                        deposit: {
                            denom: string;
                            amount: string;
                        };
                    }) => _17.MsgCreateDeployment;
                };
                "/akash.deployment.v1beta1.MsgDepositDeployment": {
                    aminoType: string;
                    toAmino: ({ id, amount }: _17.MsgDepositDeployment) => {
                        id: {
                            owner: string;
                            dseq: string;
                        };
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ id, amount }: {
                        id: {
                            owner: string;
                            dseq: string;
                        };
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _17.MsgDepositDeployment;
                };
                "/akash.deployment.v1beta1.MsgUpdateDeployment": {
                    aminoType: string;
                    toAmino: ({ id, groups, version }: _17.MsgUpdateDeployment) => {
                        id: {
                            owner: string;
                            dseq: string;
                        };
                        groups: {
                            name: string;
                            requirements: {
                                signed_by: {
                                    all_of: string[];
                                    any_of: string[];
                                };
                                attributes: {
                                    key: string;
                                    value: string;
                                }[];
                            };
                            resources: {
                                resources: {
                                    cpu: {
                                        units: {
                                            val: Uint8Array;
                                        };
                                        attributes: {
                                            key: string;
                                            value: string;
                                        }[];
                                    };
                                    memory: {
                                        quantity: {
                                            val: Uint8Array;
                                        };
                                        attributes: {
                                            key: string;
                                            value: string;
                                        }[];
                                    };
                                    storage: {
                                        quantity: {
                                            val: Uint8Array;
                                        };
                                        attributes: {
                                            key: string;
                                            value: string;
                                        }[];
                                    };
                                    endpoints: {
                                        kind: number;
                                    }[];
                                };
                                count: number;
                                price: {
                                    denom: string;
                                    amount: string;
                                };
                            }[];
                        }[];
                        version: Uint8Array;
                    };
                    fromAmino: ({ id, groups, version }: {
                        id: {
                            owner: string;
                            dseq: string;
                        };
                        groups: {
                            name: string;
                            requirements: {
                                signed_by: {
                                    all_of: string[];
                                    any_of: string[];
                                };
                                attributes: {
                                    key: string;
                                    value: string;
                                }[];
                            };
                            resources: {
                                resources: {
                                    cpu: {
                                        units: {
                                            val: Uint8Array;
                                        };
                                        attributes: {
                                            key: string;
                                            value: string;
                                        }[];
                                    };
                                    memory: {
                                        quantity: {
                                            val: Uint8Array;
                                        };
                                        attributes: {
                                            key: string;
                                            value: string;
                                        }[];
                                    };
                                    storage: {
                                        quantity: {
                                            val: Uint8Array;
                                        };
                                        attributes: {
                                            key: string;
                                            value: string;
                                        }[];
                                    };
                                    endpoints: {
                                        kind: number;
                                    }[];
                                };
                                count: number;
                                price: {
                                    denom: string;
                                    amount: string;
                                };
                            }[];
                        }[];
                        version: Uint8Array;
                    }) => _17.MsgUpdateDeployment;
                };
                "/akash.deployment.v1beta1.MsgCloseDeployment": {
                    aminoType: string;
                    toAmino: ({ id }: _17.MsgCloseDeployment) => {
                        id: {
                            owner: string;
                            dseq: string;
                        };
                    };
                    fromAmino: ({ id }: {
                        id: {
                            owner: string;
                            dseq: string;
                        };
                    }) => _17.MsgCloseDeployment;
                };
                "/akash.deployment.v1beta1.MsgCloseGroup": {
                    aminoType: string;
                    toAmino: ({ id }: _19.MsgCloseGroup) => {
                        id: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                        };
                    };
                    fromAmino: ({ id }: {
                        id: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                        };
                    }) => _19.MsgCloseGroup;
                };
                "/akash.deployment.v1beta1.MsgPauseGroup": {
                    aminoType: string;
                    toAmino: ({ id }: _19.MsgPauseGroup) => {
                        id: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                        };
                    };
                    fromAmino: ({ id }: {
                        id: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                        };
                    }) => _19.MsgPauseGroup;
                };
                "/akash.deployment.v1beta1.MsgStartGroup": {
                    aminoType: string;
                    toAmino: ({ id }: _19.MsgStartGroup) => {
                        id: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                        };
                    };
                    fromAmino: ({ id }: {
                        id: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                        };
                    }) => _19.MsgStartGroup;
                };
            };
            QueryDeploymentsRequest: {
                encode(message: _21.QueryDeploymentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.QueryDeploymentsRequest;
                fromJSON(object: any): _21.QueryDeploymentsRequest;
                toJSON(message: _21.QueryDeploymentsRequest): unknown;
                fromPartial(object: {
                    filters?: {
                        owner?: string;
                        dseq?: any;
                        state?: string;
                    };
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _21.QueryDeploymentsRequest;
            };
            QueryDeploymentsResponse: {
                encode(message: _21.QueryDeploymentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.QueryDeploymentsResponse;
                fromJSON(object: any): _21.QueryDeploymentsResponse;
                toJSON(message: _21.QueryDeploymentsResponse): unknown;
                fromPartial(object: {
                    deployments?: {
                        deployment?: {
                            deploymentId?: {
                                owner?: string;
                                dseq?: any;
                            };
                            state?: _17.Deployment_State;
                            version?: Uint8Array;
                            createdAt?: any;
                        };
                        groups?: {
                            groupId?: {
                                owner?: string;
                                dseq?: any;
                                gseq?: number;
                            };
                            state?: _19.Group_State;
                            groupSpec?: {
                                name?: string;
                                requirements?: {
                                    signedBy?: {
                                        allOf?: string[];
                                        anyOf?: string[];
                                    };
                                    attributes?: {
                                        key?: string;
                                        value?: string;
                                    }[];
                                };
                                resources?: {
                                    resources?: {
                                        cpu?: {
                                            units?: {
                                                val?: Uint8Array;
                                            };
                                            attributes?: {
                                                key?: string;
                                                value?: string;
                                            }[];
                                        };
                                        memory?: {
                                            quantity?: {
                                                val?: Uint8Array;
                                            };
                                            attributes?: {
                                                key?: string;
                                                value?: string;
                                            }[];
                                        };
                                        storage?: {
                                            quantity?: {
                                                val?: Uint8Array;
                                            };
                                            attributes?: {
                                                key?: string;
                                                value?: string;
                                            }[];
                                        };
                                        endpoints?: {
                                            kind?: _5.Endpoint_Kind;
                                        }[];
                                    };
                                    count?: number;
                                    price?: {
                                        denom?: string;
                                        amount?: string;
                                    };
                                }[];
                            };
                            createdAt?: any;
                        }[];
                        escrowAccount?: {
                            id?: {
                                scope?: string;
                                xid?: string;
                            };
                            owner?: string;
                            state?: _36.Account_State;
                            balance?: {
                                denom?: string;
                                amount?: string;
                            };
                            transferred?: {
                                denom?: string;
                                amount?: string;
                            };
                            settledAt?: any;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _21.QueryDeploymentsResponse;
            };
            QueryDeploymentRequest: {
                encode(message: _21.QueryDeploymentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.QueryDeploymentRequest;
                fromJSON(object: any): _21.QueryDeploymentRequest;
                toJSON(message: _21.QueryDeploymentRequest): unknown;
                fromPartial(object: {
                    id?: {
                        owner?: string;
                        dseq?: any;
                    };
                }): _21.QueryDeploymentRequest;
            };
            QueryDeploymentResponse: {
                encode(message: _21.QueryDeploymentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.QueryDeploymentResponse;
                fromJSON(object: any): _21.QueryDeploymentResponse;
                toJSON(message: _21.QueryDeploymentResponse): unknown;
                fromPartial(object: {
                    deployment?: {
                        deploymentId?: {
                            owner?: string;
                            dseq?: any;
                        };
                        state?: _17.Deployment_State;
                        version?: Uint8Array;
                        createdAt?: any;
                    };
                    groups?: {
                        groupId?: {
                            owner?: string;
                            dseq?: any;
                            gseq?: number;
                        };
                        state?: _19.Group_State;
                        groupSpec?: {
                            name?: string;
                            requirements?: {
                                signedBy?: {
                                    allOf?: string[];
                                    anyOf?: string[];
                                };
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            };
                            resources?: {
                                resources?: {
                                    cpu?: {
                                        units?: {
                                            val?: Uint8Array;
                                        };
                                        attributes?: {
                                            key?: string;
                                            value?: string;
                                        }[];
                                    };
                                    memory?: {
                                        quantity?: {
                                            val?: Uint8Array;
                                        };
                                        attributes?: {
                                            key?: string;
                                            value?: string;
                                        }[];
                                    };
                                    storage?: {
                                        quantity?: {
                                            val?: Uint8Array;
                                        };
                                        attributes?: {
                                            key?: string;
                                            value?: string;
                                        }[];
                                    };
                                    endpoints?: {
                                        kind?: _5.Endpoint_Kind;
                                    }[];
                                };
                                count?: number;
                                price?: {
                                    denom?: string;
                                    amount?: string;
                                };
                            }[];
                        };
                        createdAt?: any;
                    }[];
                    escrowAccount?: {
                        id?: {
                            scope?: string;
                            xid?: string;
                        };
                        owner?: string;
                        state?: _36.Account_State;
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                        transferred?: {
                            denom?: string;
                            amount?: string;
                        };
                        settledAt?: any;
                    };
                }): _21.QueryDeploymentResponse;
            };
            QueryGroupRequest: {
                encode(message: _21.QueryGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.QueryGroupRequest;
                fromJSON(object: any): _21.QueryGroupRequest;
                toJSON(message: _21.QueryGroupRequest): unknown;
                fromPartial(object: {
                    id?: {
                        owner?: string;
                        dseq?: any;
                        gseq?: number;
                    };
                }): _21.QueryGroupRequest;
            };
            QueryGroupResponse: {
                encode(message: _21.QueryGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.QueryGroupResponse;
                fromJSON(object: any): _21.QueryGroupResponse;
                toJSON(message: _21.QueryGroupResponse): unknown;
                fromPartial(object: {
                    group?: {
                        groupId?: {
                            owner?: string;
                            dseq?: any;
                            gseq?: number;
                        };
                        state?: _19.Group_State;
                        groupSpec?: {
                            name?: string;
                            requirements?: {
                                signedBy?: {
                                    allOf?: string[];
                                    anyOf?: string[];
                                };
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            };
                            resources?: {
                                resources?: {
                                    cpu?: {
                                        units?: {
                                            val?: Uint8Array;
                                        };
                                        attributes?: {
                                            key?: string;
                                            value?: string;
                                        }[];
                                    };
                                    memory?: {
                                        quantity?: {
                                            val?: Uint8Array;
                                        };
                                        attributes?: {
                                            key?: string;
                                            value?: string;
                                        }[];
                                    };
                                    storage?: {
                                        quantity?: {
                                            val?: Uint8Array;
                                        };
                                        attributes?: {
                                            key?: string;
                                            value?: string;
                                        }[];
                                    };
                                    endpoints?: {
                                        kind?: _5.Endpoint_Kind;
                                    }[];
                                };
                                count?: number;
                                price?: {
                                    denom?: string;
                                    amount?: string;
                                };
                            }[];
                        };
                        createdAt?: any;
                    };
                }): _21.QueryGroupResponse;
            };
            Params: {
                encode(message: _20.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.Params;
                fromJSON(object: any): _20.Params;
                toJSON(message: _20.Params): unknown;
                fromPartial(object: {
                    deploymentMinDeposit?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _20.Params;
            };
            group_StateFromJSON(object: any): _19.Group_State;
            group_StateToJSON(object: _19.Group_State): string;
            Group_State: typeof _19.Group_State;
            MsgCloseGroup: {
                encode(message: _19.MsgCloseGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.MsgCloseGroup;
                fromJSON(object: any): _19.MsgCloseGroup;
                toJSON(message: _19.MsgCloseGroup): unknown;
                fromPartial(object: {
                    id?: {
                        owner?: string;
                        dseq?: any;
                        gseq?: number;
                    };
                }): _19.MsgCloseGroup;
            };
            MsgCloseGroupResponse: {
                encode(_: _19.MsgCloseGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.MsgCloseGroupResponse;
                fromJSON(_: any): _19.MsgCloseGroupResponse;
                toJSON(_: _19.MsgCloseGroupResponse): unknown;
                fromPartial(_: {}): _19.MsgCloseGroupResponse;
            };
            MsgPauseGroup: {
                encode(message: _19.MsgPauseGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.MsgPauseGroup;
                fromJSON(object: any): _19.MsgPauseGroup;
                toJSON(message: _19.MsgPauseGroup): unknown;
                fromPartial(object: {
                    id?: {
                        owner?: string;
                        dseq?: any;
                        gseq?: number;
                    };
                }): _19.MsgPauseGroup;
            };
            MsgPauseGroupResponse: {
                encode(_: _19.MsgPauseGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.MsgPauseGroupResponse;
                fromJSON(_: any): _19.MsgPauseGroupResponse;
                toJSON(_: _19.MsgPauseGroupResponse): unknown;
                fromPartial(_: {}): _19.MsgPauseGroupResponse;
            };
            MsgStartGroup: {
                encode(message: _19.MsgStartGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.MsgStartGroup;
                fromJSON(object: any): _19.MsgStartGroup;
                toJSON(message: _19.MsgStartGroup): unknown;
                fromPartial(object: {
                    id?: {
                        owner?: string;
                        dseq?: any;
                        gseq?: number;
                    };
                }): _19.MsgStartGroup;
            };
            MsgStartGroupResponse: {
                encode(_: _19.MsgStartGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.MsgStartGroupResponse;
                fromJSON(_: any): _19.MsgStartGroupResponse;
                toJSON(_: _19.MsgStartGroupResponse): unknown;
                fromPartial(_: {}): _19.MsgStartGroupResponse;
            };
            GroupID: {
                encode(message: _19.GroupID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.GroupID;
                fromJSON(object: any): _19.GroupID;
                toJSON(message: _19.GroupID): unknown;
                fromPartial(object: {
                    owner?: string;
                    dseq?: any;
                    gseq?: number;
                }): _19.GroupID;
            };
            GroupSpec: {
                encode(message: _19.GroupSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.GroupSpec;
                fromJSON(object: any): _19.GroupSpec;
                toJSON(message: _19.GroupSpec): unknown;
                fromPartial(object: {
                    name?: string;
                    requirements?: {
                        signedBy?: {
                            allOf?: string[];
                            anyOf?: string[];
                        };
                        attributes?: {
                            key?: string;
                            value?: string;
                        }[];
                    };
                    resources?: {
                        resources?: {
                            cpu?: {
                                units?: {
                                    val?: Uint8Array;
                                };
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            };
                            memory?: {
                                quantity?: {
                                    val?: Uint8Array;
                                };
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            };
                            storage?: {
                                quantity?: {
                                    val?: Uint8Array;
                                };
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            };
                            endpoints?: {
                                kind?: _5.Endpoint_Kind;
                            }[];
                        };
                        count?: number;
                        price?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                }): _19.GroupSpec;
            };
            Group: {
                encode(message: _19.Group, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.Group;
                fromJSON(object: any): _19.Group;
                toJSON(message: _19.Group): unknown;
                fromPartial(object: {
                    groupId?: {
                        owner?: string;
                        dseq?: any;
                        gseq?: number;
                    };
                    state?: _19.Group_State;
                    groupSpec?: {
                        name?: string;
                        requirements?: {
                            signedBy?: {
                                allOf?: string[];
                                anyOf?: string[];
                            };
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                        };
                        resources?: {
                            resources?: {
                                cpu?: {
                                    units?: {
                                        val?: Uint8Array;
                                    };
                                    attributes?: {
                                        key?: string;
                                        value?: string;
                                    }[];
                                };
                                memory?: {
                                    quantity?: {
                                        val?: Uint8Array;
                                    };
                                    attributes?: {
                                        key?: string;
                                        value?: string;
                                    }[];
                                };
                                storage?: {
                                    quantity?: {
                                        val?: Uint8Array;
                                    };
                                    attributes?: {
                                        key?: string;
                                        value?: string;
                                    }[];
                                };
                                endpoints?: {
                                    kind?: _5.Endpoint_Kind;
                                }[];
                            };
                            count?: number;
                            price?: {
                                denom?: string;
                                amount?: string;
                            };
                        }[];
                    };
                    createdAt?: any;
                }): _19.Group;
            };
            Resource: {
                encode(message: _19.Resource, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.Resource;
                fromJSON(object: any): _19.Resource;
                toJSON(message: _19.Resource): unknown;
                fromPartial(object: {
                    resources?: {
                        cpu?: {
                            units?: {
                                val?: Uint8Array;
                            };
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                        };
                        memory?: {
                            quantity?: {
                                val?: Uint8Array;
                            };
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                        };
                        storage?: {
                            quantity?: {
                                val?: Uint8Array;
                            };
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                        };
                        endpoints?: {
                            kind?: _5.Endpoint_Kind;
                        }[];
                    };
                    count?: number;
                    price?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _19.Resource;
            };
            GenesisDeployment: {
                encode(message: _18.GenesisDeployment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.GenesisDeployment;
                fromJSON(object: any): _18.GenesisDeployment;
                toJSON(message: _18.GenesisDeployment): unknown;
                fromPartial(object: {
                    deployment?: {
                        deploymentId?: {
                            owner?: string;
                            dseq?: any;
                        };
                        state?: _17.Deployment_State;
                        version?: Uint8Array;
                        createdAt?: any;
                    };
                    groups?: {
                        groupId?: {
                            owner?: string;
                            dseq?: any;
                            gseq?: number;
                        };
                        state?: _19.Group_State;
                        groupSpec?: {
                            name?: string;
                            requirements?: {
                                signedBy?: {
                                    allOf?: string[];
                                    anyOf?: string[];
                                };
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            };
                            resources?: {
                                resources?: {
                                    cpu?: {
                                        units?: {
                                            val?: Uint8Array;
                                        };
                                        attributes?: {
                                            key?: string;
                                            value?: string;
                                        }[];
                                    };
                                    memory?: {
                                        quantity?: {
                                            val?: Uint8Array;
                                        };
                                        attributes?: {
                                            key?: string;
                                            value?: string;
                                        }[];
                                    };
                                    storage?: {
                                        quantity?: {
                                            val?: Uint8Array;
                                        };
                                        attributes?: {
                                            key?: string;
                                            value?: string;
                                        }[];
                                    };
                                    endpoints?: {
                                        kind?: _5.Endpoint_Kind;
                                    }[];
                                };
                                count?: number;
                                price?: {
                                    denom?: string;
                                    amount?: string;
                                };
                            }[];
                        };
                        createdAt?: any;
                    }[];
                }): _18.GenesisDeployment;
            };
            GenesisState: {
                encode(message: _18.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.GenesisState;
                fromJSON(object: any): _18.GenesisState;
                toJSON(message: _18.GenesisState): unknown;
                fromPartial(object: {
                    deployments?: {
                        deployment?: {
                            deploymentId?: {
                                owner?: string;
                                dseq?: any;
                            };
                            state?: _17.Deployment_State;
                            version?: Uint8Array;
                            createdAt?: any;
                        };
                        groups?: {
                            groupId?: {
                                owner?: string;
                                dseq?: any;
                                gseq?: number;
                            };
                            state?: _19.Group_State;
                            groupSpec?: {
                                name?: string;
                                requirements?: {
                                    signedBy?: {
                                        allOf?: string[];
                                        anyOf?: string[];
                                    };
                                    attributes?: {
                                        key?: string;
                                        value?: string;
                                    }[];
                                };
                                resources?: {
                                    resources?: {
                                        cpu?: {
                                            units?: {
                                                val?: Uint8Array;
                                            };
                                            attributes?: {
                                                key?: string;
                                                value?: string;
                                            }[];
                                        };
                                        memory?: {
                                            quantity?: {
                                                val?: Uint8Array;
                                            };
                                            attributes?: {
                                                key?: string;
                                                value?: string;
                                            }[];
                                        };
                                        storage?: {
                                            quantity?: {
                                                val?: Uint8Array;
                                            };
                                            attributes?: {
                                                key?: string;
                                                value?: string;
                                            }[];
                                        };
                                        endpoints?: {
                                            kind?: _5.Endpoint_Kind;
                                        }[];
                                    };
                                    count?: number;
                                    price?: {
                                        denom?: string;
                                        amount?: string;
                                    };
                                }[];
                            };
                            createdAt?: any;
                        }[];
                    }[];
                    params?: {
                        deploymentMinDeposit?: {
                            denom?: string;
                            amount?: string;
                        };
                    };
                }): _18.GenesisState;
            };
            deployment_StateFromJSON(object: any): _17.Deployment_State;
            deployment_StateToJSON(object: _17.Deployment_State): string;
            Deployment_State: typeof _17.Deployment_State;
            MsgCreateDeployment: {
                encode(message: _17.MsgCreateDeployment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.MsgCreateDeployment;
                fromJSON(object: any): _17.MsgCreateDeployment;
                toJSON(message: _17.MsgCreateDeployment): unknown;
                fromPartial(object: {
                    id?: {
                        owner?: string;
                        dseq?: any;
                    };
                    groups?: {
                        name?: string;
                        requirements?: {
                            signedBy?: {
                                allOf?: string[];
                                anyOf?: string[];
                            };
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                        };
                        resources?: {
                            resources?: {
                                cpu?: {
                                    units?: {
                                        val?: Uint8Array;
                                    };
                                    attributes?: {
                                        key?: string;
                                        value?: string;
                                    }[];
                                };
                                memory?: {
                                    quantity?: {
                                        val?: Uint8Array;
                                    };
                                    attributes?: {
                                        key?: string;
                                        value?: string;
                                    }[];
                                };
                                storage?: {
                                    quantity?: {
                                        val?: Uint8Array;
                                    };
                                    attributes?: {
                                        key?: string;
                                        value?: string;
                                    }[];
                                };
                                endpoints?: {
                                    kind?: _5.Endpoint_Kind;
                                }[];
                            };
                            count?: number;
                            price?: {
                                denom?: string;
                                amount?: string;
                            };
                        }[];
                    }[];
                    version?: Uint8Array;
                    deposit?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _17.MsgCreateDeployment;
            };
            MsgCreateDeploymentResponse: {
                encode(_: _17.MsgCreateDeploymentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.MsgCreateDeploymentResponse;
                fromJSON(_: any): _17.MsgCreateDeploymentResponse;
                toJSON(_: _17.MsgCreateDeploymentResponse): unknown;
                fromPartial(_: {}): _17.MsgCreateDeploymentResponse;
            };
            MsgDepositDeployment: {
                encode(message: _17.MsgDepositDeployment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.MsgDepositDeployment;
                fromJSON(object: any): _17.MsgDepositDeployment;
                toJSON(message: _17.MsgDepositDeployment): unknown;
                fromPartial(object: {
                    id?: {
                        owner?: string;
                        dseq?: any;
                    };
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _17.MsgDepositDeployment;
            };
            MsgDepositDeploymentResponse: {
                encode(_: _17.MsgDepositDeploymentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.MsgDepositDeploymentResponse;
                fromJSON(_: any): _17.MsgDepositDeploymentResponse;
                toJSON(_: _17.MsgDepositDeploymentResponse): unknown;
                fromPartial(_: {}): _17.MsgDepositDeploymentResponse;
            };
            MsgUpdateDeployment: {
                encode(message: _17.MsgUpdateDeployment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.MsgUpdateDeployment;
                fromJSON(object: any): _17.MsgUpdateDeployment;
                toJSON(message: _17.MsgUpdateDeployment): unknown;
                fromPartial(object: {
                    id?: {
                        owner?: string;
                        dseq?: any;
                    };
                    groups?: {
                        name?: string;
                        requirements?: {
                            signedBy?: {
                                allOf?: string[];
                                anyOf?: string[];
                            };
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                        };
                        resources?: {
                            resources?: {
                                cpu?: {
                                    units?: {
                                        val?: Uint8Array;
                                    };
                                    attributes?: {
                                        key?: string;
                                        value?: string;
                                    }[];
                                };
                                memory?: {
                                    quantity?: {
                                        val?: Uint8Array;
                                    };
                                    attributes?: {
                                        key?: string;
                                        value?: string;
                                    }[];
                                };
                                storage?: {
                                    quantity?: {
                                        val?: Uint8Array;
                                    };
                                    attributes?: {
                                        key?: string;
                                        value?: string;
                                    }[];
                                };
                                endpoints?: {
                                    kind?: _5.Endpoint_Kind;
                                }[];
                            };
                            count?: number;
                            price?: {
                                denom?: string;
                                amount?: string;
                            };
                        }[];
                    }[];
                    version?: Uint8Array;
                }): _17.MsgUpdateDeployment;
            };
            MsgUpdateDeploymentResponse: {
                encode(_: _17.MsgUpdateDeploymentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.MsgUpdateDeploymentResponse;
                fromJSON(_: any): _17.MsgUpdateDeploymentResponse;
                toJSON(_: _17.MsgUpdateDeploymentResponse): unknown;
                fromPartial(_: {}): _17.MsgUpdateDeploymentResponse;
            };
            MsgCloseDeployment: {
                encode(message: _17.MsgCloseDeployment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.MsgCloseDeployment;
                fromJSON(object: any): _17.MsgCloseDeployment;
                toJSON(message: _17.MsgCloseDeployment): unknown;
                fromPartial(object: {
                    id?: {
                        owner?: string;
                        dseq?: any;
                    };
                }): _17.MsgCloseDeployment;
            };
            MsgCloseDeploymentResponse: {
                encode(_: _17.MsgCloseDeploymentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.MsgCloseDeploymentResponse;
                fromJSON(_: any): _17.MsgCloseDeploymentResponse;
                toJSON(_: _17.MsgCloseDeploymentResponse): unknown;
                fromPartial(_: {}): _17.MsgCloseDeploymentResponse;
            };
            DeploymentID: {
                encode(message: _17.DeploymentID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.DeploymentID;
                fromJSON(object: any): _17.DeploymentID;
                toJSON(message: _17.DeploymentID): unknown;
                fromPartial(object: {
                    owner?: string;
                    dseq?: any;
                }): _17.DeploymentID;
            };
            Deployment: {
                encode(message: _17.Deployment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.Deployment;
                fromJSON(object: any): _17.Deployment;
                toJSON(message: _17.Deployment): unknown;
                fromPartial(object: {
                    deploymentId?: {
                        owner?: string;
                        dseq?: any;
                    };
                    state?: _17.Deployment_State;
                    version?: Uint8Array;
                    createdAt?: any;
                }): _17.Deployment;
            };
            DeploymentFilters: {
                encode(message: _17.DeploymentFilters, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.DeploymentFilters;
                fromJSON(object: any): _17.DeploymentFilters;
                toJSON(message: _17.DeploymentFilters): unknown;
                fromPartial(object: {
                    owner?: string;
                    dseq?: any;
                    state?: string;
                }): _17.DeploymentFilters;
            };
            DepositDeploymentAuthorization: {
                encode(message: _16.DepositDeploymentAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.DepositDeploymentAuthorization;
                fromJSON(object: any): _16.DepositDeploymentAuthorization;
                toJSON(message: _16.DepositDeploymentAuthorization): unknown;
                fromPartial(object: {
                    spendLimit?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _16.DepositDeploymentAuthorization;
            };
        };
        const v1beta2: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createDeployment(value: _24.MsgCreateDeployment): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    depositDeployment(value: _24.MsgDepositDeployment): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateDeployment(value: _24.MsgUpdateDeployment): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    closeDeployment(value: _24.MsgCloseDeployment): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    closeGroup(value: _28.MsgCloseGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    pauseGroup(value: _28.MsgPauseGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    startGroup(value: _28.MsgStartGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createDeployment(value: _24.MsgCreateDeployment): {
                        typeUrl: string;
                        value: _24.MsgCreateDeployment;
                    };
                    depositDeployment(value: _24.MsgDepositDeployment): {
                        typeUrl: string;
                        value: _24.MsgDepositDeployment;
                    };
                    updateDeployment(value: _24.MsgUpdateDeployment): {
                        typeUrl: string;
                        value: _24.MsgUpdateDeployment;
                    };
                    closeDeployment(value: _24.MsgCloseDeployment): {
                        typeUrl: string;
                        value: _24.MsgCloseDeployment;
                    };
                    closeGroup(value: _28.MsgCloseGroup): {
                        typeUrl: string;
                        value: _28.MsgCloseGroup;
                    };
                    pauseGroup(value: _28.MsgPauseGroup): {
                        typeUrl: string;
                        value: _28.MsgPauseGroup;
                    };
                    startGroup(value: _28.MsgStartGroup): {
                        typeUrl: string;
                        value: _28.MsgStartGroup;
                    };
                };
                toJSON: {
                    createDeployment(value: _24.MsgCreateDeployment): {
                        typeUrl: string;
                        value: unknown;
                    };
                    depositDeployment(value: _24.MsgDepositDeployment): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateDeployment(value: _24.MsgUpdateDeployment): {
                        typeUrl: string;
                        value: unknown;
                    };
                    closeDeployment(value: _24.MsgCloseDeployment): {
                        typeUrl: string;
                        value: unknown;
                    };
                    closeGroup(value: _28.MsgCloseGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                    pauseGroup(value: _28.MsgPauseGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                    startGroup(value: _28.MsgStartGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createDeployment(value: any): {
                        typeUrl: string;
                        value: _24.MsgCreateDeployment;
                    };
                    depositDeployment(value: any): {
                        typeUrl: string;
                        value: _24.MsgDepositDeployment;
                    };
                    updateDeployment(value: any): {
                        typeUrl: string;
                        value: _24.MsgUpdateDeployment;
                    };
                    closeDeployment(value: any): {
                        typeUrl: string;
                        value: _24.MsgCloseDeployment;
                    };
                    closeGroup(value: any): {
                        typeUrl: string;
                        value: _28.MsgCloseGroup;
                    };
                    pauseGroup(value: any): {
                        typeUrl: string;
                        value: _28.MsgPauseGroup;
                    };
                    startGroup(value: any): {
                        typeUrl: string;
                        value: _28.MsgStartGroup;
                    };
                };
                fromPartial: {
                    createDeployment(value: _24.MsgCreateDeployment): {
                        typeUrl: string;
                        value: _24.MsgCreateDeployment;
                    };
                    depositDeployment(value: _24.MsgDepositDeployment): {
                        typeUrl: string;
                        value: _24.MsgDepositDeployment;
                    };
                    updateDeployment(value: _24.MsgUpdateDeployment): {
                        typeUrl: string;
                        value: _24.MsgUpdateDeployment;
                    };
                    closeDeployment(value: _24.MsgCloseDeployment): {
                        typeUrl: string;
                        value: _24.MsgCloseDeployment;
                    };
                    closeGroup(value: _28.MsgCloseGroup): {
                        typeUrl: string;
                        value: _28.MsgCloseGroup;
                    };
                    pauseGroup(value: _28.MsgPauseGroup): {
                        typeUrl: string;
                        value: _28.MsgPauseGroup;
                    };
                    startGroup(value: _28.MsgStartGroup): {
                        typeUrl: string;
                        value: _28.MsgStartGroup;
                    };
                };
            };
            AminoConverter: {
                "/akash.deployment.v1beta2.MsgCreateDeployment": {
                    aminoType: string;
                    toAmino: ({ id, groups, version, deposit, depositor }: _24.MsgCreateDeployment) => {
                        id: {
                            owner: string;
                            dseq: string;
                        };
                        groups: {
                            name: string;
                            requirements: {
                                signed_by: {
                                    all_of: string[];
                                    any_of: string[];
                                };
                                attributes: {
                                    key: string;
                                    value: string;
                                }[];
                            };
                            resources: {
                                resources: {
                                    cpu: {
                                        units: {
                                            val: Uint8Array;
                                        };
                                        attributes: {
                                            key: string;
                                            value: string;
                                        }[];
                                    };
                                    memory: {
                                        quantity: {
                                            val: Uint8Array;
                                        };
                                        attributes: {
                                            key: string;
                                            value: string;
                                        }[];
                                    };
                                    storage: {
                                        name: string;
                                        quantity: {
                                            val: Uint8Array;
                                        };
                                        attributes: {
                                            key: string;
                                            value: string;
                                        }[];
                                    }[];
                                    endpoints: {
                                        kind: number;
                                        sequence_number: number;
                                    }[];
                                };
                                count: number;
                                price: {
                                    denom: string;
                                    amount: string;
                                };
                            }[];
                        }[];
                        version: Uint8Array;
                        deposit: {
                            denom: string;
                            amount: string;
                        };
                        depositor: string;
                    };
                    fromAmino: ({ id, groups, version, deposit, depositor }: {
                        id: {
                            owner: string;
                            dseq: string;
                        };
                        groups: {
                            name: string;
                            requirements: {
                                signed_by: {
                                    all_of: string[];
                                    any_of: string[];
                                };
                                attributes: {
                                    key: string;
                                    value: string;
                                }[];
                            };
                            resources: {
                                resources: {
                                    cpu: {
                                        units: {
                                            val: Uint8Array;
                                        };
                                        attributes: {
                                            key: string;
                                            value: string;
                                        }[];
                                    };
                                    memory: {
                                        quantity: {
                                            val: Uint8Array;
                                        };
                                        attributes: {
                                            key: string;
                                            value: string;
                                        }[];
                                    };
                                    storage: {
                                        name: string;
                                        quantity: {
                                            val: Uint8Array;
                                        };
                                        attributes: {
                                            key: string;
                                            value: string;
                                        }[];
                                    }[];
                                    endpoints: {
                                        kind: number;
                                        sequence_number: number;
                                    }[];
                                };
                                count: number;
                                price: {
                                    denom: string;
                                    amount: string;
                                };
                            }[];
                        }[];
                        version: Uint8Array;
                        deposit: {
                            denom: string;
                            amount: string;
                        };
                        depositor: string;
                    }) => _24.MsgCreateDeployment;
                };
                "/akash.deployment.v1beta2.MsgDepositDeployment": {
                    aminoType: string;
                    toAmino: ({ id, amount, depositor }: _24.MsgDepositDeployment) => {
                        id: {
                            owner: string;
                            dseq: string;
                        };
                        amount: {
                            denom: string;
                            amount: string;
                        };
                        depositor: string;
                    };
                    fromAmino: ({ id, amount, depositor }: {
                        id: {
                            owner: string;
                            dseq: string;
                        };
                        amount: {
                            denom: string;
                            amount: string;
                        };
                        depositor: string;
                    }) => _24.MsgDepositDeployment;
                };
                "/akash.deployment.v1beta2.MsgUpdateDeployment": {
                    aminoType: string;
                    toAmino: ({ id, version }: _24.MsgUpdateDeployment) => {
                        id: {
                            owner: string;
                            dseq: string;
                        };
                        version: Uint8Array;
                    };
                    fromAmino: ({ id, version }: {
                        id: {
                            owner: string;
                            dseq: string;
                        };
                        version: Uint8Array;
                    }) => _24.MsgUpdateDeployment;
                };
                "/akash.deployment.v1beta2.MsgCloseDeployment": {
                    aminoType: string;
                    toAmino: ({ id }: _24.MsgCloseDeployment) => {
                        id: {
                            owner: string;
                            dseq: string;
                        };
                    };
                    fromAmino: ({ id }: {
                        id: {
                            owner: string;
                            dseq: string;
                        };
                    }) => _24.MsgCloseDeployment;
                };
                "/akash.deployment.v1beta2.MsgCloseGroup": {
                    aminoType: string;
                    toAmino: ({ id }: _28.MsgCloseGroup) => {
                        id: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                        };
                    };
                    fromAmino: ({ id }: {
                        id: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                        };
                    }) => _28.MsgCloseGroup;
                };
                "/akash.deployment.v1beta2.MsgPauseGroup": {
                    aminoType: string;
                    toAmino: ({ id }: _28.MsgPauseGroup) => {
                        id: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                        };
                    };
                    fromAmino: ({ id }: {
                        id: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                        };
                    }) => _28.MsgPauseGroup;
                };
                "/akash.deployment.v1beta2.MsgStartGroup": {
                    aminoType: string;
                    toAmino: ({ id }: _28.MsgStartGroup) => {
                        id: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                        };
                    };
                    fromAmino: ({ id }: {
                        id: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                        };
                    }) => _28.MsgStartGroup;
                };
            };
            Resource: {
                encode(message: _32.Resource, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.Resource;
                fromJSON(object: any): _32.Resource;
                toJSON(message: _32.Resource): unknown;
                fromPartial(object: {
                    resources?: {
                        cpu?: {
                            units?: {
                                val?: Uint8Array;
                            };
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                        };
                        memory?: {
                            quantity?: {
                                val?: Uint8Array;
                            };
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                        };
                        storage?: {
                            name?: string;
                            quantity?: {
                                val?: Uint8Array;
                            };
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                        }[];
                        endpoints?: {
                            kind?: _9.Endpoint_Kind;
                            sequenceNumber?: number;
                        }[];
                    };
                    count?: number;
                    price?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _32.Resource;
            };
            QueryDeploymentsRequest: {
                encode(message: _31.QueryDeploymentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryDeploymentsRequest;
                fromJSON(object: any): _31.QueryDeploymentsRequest;
                toJSON(message: _31.QueryDeploymentsRequest): unknown;
                fromPartial(object: {
                    filters?: {
                        owner?: string;
                        dseq?: any;
                        state?: string;
                    };
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _31.QueryDeploymentsRequest;
            };
            QueryDeploymentsResponse: {
                encode(message: _31.QueryDeploymentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryDeploymentsResponse;
                fromJSON(object: any): _31.QueryDeploymentsResponse;
                toJSON(message: _31.QueryDeploymentsResponse): unknown;
                fromPartial(object: {
                    deployments?: {
                        deployment?: {
                            deploymentId?: {
                                owner?: string;
                                dseq?: any;
                            };
                            state?: _23.Deployment_State;
                            version?: Uint8Array;
                            createdAt?: any;
                        };
                        groups?: {
                            groupId?: {
                                owner?: string;
                                dseq?: any;
                                gseq?: number;
                            };
                            state?: _26.Group_State;
                            groupSpec?: {
                                name?: string;
                                requirements?: {
                                    signedBy?: {
                                        allOf?: string[];
                                        anyOf?: string[];
                                    };
                                    attributes?: {
                                        key?: string;
                                        value?: string;
                                    }[];
                                };
                                resources?: {
                                    resources?: {
                                        cpu?: {
                                            units?: {
                                                val?: Uint8Array;
                                            };
                                            attributes?: {
                                                key?: string;
                                                value?: string;
                                            }[];
                                        };
                                        memory?: {
                                            quantity?: {
                                                val?: Uint8Array;
                                            };
                                            attributes?: {
                                                key?: string;
                                                value?: string;
                                            }[];
                                        };
                                        storage?: {
                                            name?: string;
                                            quantity?: {
                                                val?: Uint8Array;
                                            };
                                            attributes?: {
                                                key?: string;
                                                value?: string;
                                            }[];
                                        }[];
                                        endpoints?: {
                                            kind?: _9.Endpoint_Kind;
                                            sequenceNumber?: number;
                                        }[];
                                    };
                                    count?: number;
                                    price?: {
                                        denom?: string;
                                        amount?: string;
                                    };
                                }[];
                            };
                            createdAt?: any;
                        }[];
                        escrowAccount?: {
                            id?: {
                                scope?: string;
                                xid?: string;
                            };
                            owner?: string;
                            state?: _39.Account_State;
                            balance?: {
                                denom?: string;
                                amount?: string;
                            };
                            transferred?: {
                                denom?: string;
                                amount?: string;
                            };
                            settledAt?: any;
                            depositor?: string;
                            funds?: {
                                denom?: string;
                                amount?: string;
                            };
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _31.QueryDeploymentsResponse;
            };
            QueryDeploymentRequest: {
                encode(message: _31.QueryDeploymentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryDeploymentRequest;
                fromJSON(object: any): _31.QueryDeploymentRequest;
                toJSON(message: _31.QueryDeploymentRequest): unknown;
                fromPartial(object: {
                    id?: {
                        owner?: string;
                        dseq?: any;
                    };
                }): _31.QueryDeploymentRequest;
            };
            QueryDeploymentResponse: {
                encode(message: _31.QueryDeploymentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryDeploymentResponse;
                fromJSON(object: any): _31.QueryDeploymentResponse;
                toJSON(message: _31.QueryDeploymentResponse): unknown;
                fromPartial(object: {
                    deployment?: {
                        deploymentId?: {
                            owner?: string;
                            dseq?: any;
                        };
                        state?: _23.Deployment_State;
                        version?: Uint8Array;
                        createdAt?: any;
                    };
                    groups?: {
                        groupId?: {
                            owner?: string;
                            dseq?: any;
                            gseq?: number;
                        };
                        state?: _26.Group_State;
                        groupSpec?: {
                            name?: string;
                            requirements?: {
                                signedBy?: {
                                    allOf?: string[];
                                    anyOf?: string[];
                                };
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            };
                            resources?: {
                                resources?: {
                                    cpu?: {
                                        units?: {
                                            val?: Uint8Array;
                                        };
                                        attributes?: {
                                            key?: string;
                                            value?: string;
                                        }[];
                                    };
                                    memory?: {
                                        quantity?: {
                                            val?: Uint8Array;
                                        };
                                        attributes?: {
                                            key?: string;
                                            value?: string;
                                        }[];
                                    };
                                    storage?: {
                                        name?: string;
                                        quantity?: {
                                            val?: Uint8Array;
                                        };
                                        attributes?: {
                                            key?: string;
                                            value?: string;
                                        }[];
                                    }[];
                                    endpoints?: {
                                        kind?: _9.Endpoint_Kind;
                                        sequenceNumber?: number;
                                    }[];
                                };
                                count?: number;
                                price?: {
                                    denom?: string;
                                    amount?: string;
                                };
                            }[];
                        };
                        createdAt?: any;
                    }[];
                    escrowAccount?: {
                        id?: {
                            scope?: string;
                            xid?: string;
                        };
                        owner?: string;
                        state?: _39.Account_State;
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                        transferred?: {
                            denom?: string;
                            amount?: string;
                        };
                        settledAt?: any;
                        depositor?: string;
                        funds?: {
                            denom?: string;
                            amount?: string;
                        };
                    };
                }): _31.QueryDeploymentResponse;
            };
            QueryGroupRequest: {
                encode(message: _31.QueryGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryGroupRequest;
                fromJSON(object: any): _31.QueryGroupRequest;
                toJSON(message: _31.QueryGroupRequest): unknown;
                fromPartial(object: {
                    id?: {
                        owner?: string;
                        dseq?: any;
                        gseq?: number;
                    };
                }): _31.QueryGroupRequest;
            };
            QueryGroupResponse: {
                encode(message: _31.QueryGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryGroupResponse;
                fromJSON(object: any): _31.QueryGroupResponse;
                toJSON(message: _31.QueryGroupResponse): unknown;
                fromPartial(object: {
                    group?: {
                        groupId?: {
                            owner?: string;
                            dseq?: any;
                            gseq?: number;
                        };
                        state?: _26.Group_State;
                        groupSpec?: {
                            name?: string;
                            requirements?: {
                                signedBy?: {
                                    allOf?: string[];
                                    anyOf?: string[];
                                };
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            };
                            resources?: {
                                resources?: {
                                    cpu?: {
                                        units?: {
                                            val?: Uint8Array;
                                        };
                                        attributes?: {
                                            key?: string;
                                            value?: string;
                                        }[];
                                    };
                                    memory?: {
                                        quantity?: {
                                            val?: Uint8Array;
                                        };
                                        attributes?: {
                                            key?: string;
                                            value?: string;
                                        }[];
                                    };
                                    storage?: {
                                        name?: string;
                                        quantity?: {
                                            val?: Uint8Array;
                                        };
                                        attributes?: {
                                            key?: string;
                                            value?: string;
                                        }[];
                                    }[];
                                    endpoints?: {
                                        kind?: _9.Endpoint_Kind;
                                        sequenceNumber?: number;
                                    }[];
                                };
                                count?: number;
                                price?: {
                                    denom?: string;
                                    amount?: string;
                                };
                            }[];
                        };
                        createdAt?: any;
                    };
                }): _31.QueryGroupResponse;
            };
            Params: {
                encode(message: _30.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.Params;
                fromJSON(object: any): _30.Params;
                toJSON(message: _30.Params): unknown;
                fromPartial(object: {
                    deploymentMinDeposit?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _30.Params;
            };
            GroupSpec: {
                encode(message: _29.GroupSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GroupSpec;
                fromJSON(object: any): _29.GroupSpec;
                toJSON(message: _29.GroupSpec): unknown;
                fromPartial(object: {
                    name?: string;
                    requirements?: {
                        signedBy?: {
                            allOf?: string[];
                            anyOf?: string[];
                        };
                        attributes?: {
                            key?: string;
                            value?: string;
                        }[];
                    };
                    resources?: {
                        resources?: {
                            cpu?: {
                                units?: {
                                    val?: Uint8Array;
                                };
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            };
                            memory?: {
                                quantity?: {
                                    val?: Uint8Array;
                                };
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            };
                            storage?: {
                                name?: string;
                                quantity?: {
                                    val?: Uint8Array;
                                };
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                            endpoints?: {
                                kind?: _9.Endpoint_Kind;
                                sequenceNumber?: number;
                            }[];
                        };
                        count?: number;
                        price?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                }): _29.GroupSpec;
            };
            MsgCloseGroup: {
                encode(message: _28.MsgCloseGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgCloseGroup;
                fromJSON(object: any): _28.MsgCloseGroup;
                toJSON(message: _28.MsgCloseGroup): unknown;
                fromPartial(object: {
                    id?: {
                        owner?: string;
                        dseq?: any;
                        gseq?: number;
                    };
                }): _28.MsgCloseGroup;
            };
            MsgCloseGroupResponse: {
                encode(_: _28.MsgCloseGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgCloseGroupResponse;
                fromJSON(_: any): _28.MsgCloseGroupResponse;
                toJSON(_: _28.MsgCloseGroupResponse): unknown;
                fromPartial(_: {}): _28.MsgCloseGroupResponse;
            };
            MsgPauseGroup: {
                encode(message: _28.MsgPauseGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgPauseGroup;
                fromJSON(object: any): _28.MsgPauseGroup;
                toJSON(message: _28.MsgPauseGroup): unknown;
                fromPartial(object: {
                    id?: {
                        owner?: string;
                        dseq?: any;
                        gseq?: number;
                    };
                }): _28.MsgPauseGroup;
            };
            MsgPauseGroupResponse: {
                encode(_: _28.MsgPauseGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgPauseGroupResponse;
                fromJSON(_: any): _28.MsgPauseGroupResponse;
                toJSON(_: _28.MsgPauseGroupResponse): unknown;
                fromPartial(_: {}): _28.MsgPauseGroupResponse;
            };
            MsgStartGroup: {
                encode(message: _28.MsgStartGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgStartGroup;
                fromJSON(object: any): _28.MsgStartGroup;
                toJSON(message: _28.MsgStartGroup): unknown;
                fromPartial(object: {
                    id?: {
                        owner?: string;
                        dseq?: any;
                        gseq?: number;
                    };
                }): _28.MsgStartGroup;
            };
            MsgStartGroupResponse: {
                encode(_: _28.MsgStartGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgStartGroupResponse;
                fromJSON(_: any): _28.MsgStartGroupResponse;
                toJSON(_: _28.MsgStartGroupResponse): unknown;
                fromPartial(_: {}): _28.MsgStartGroupResponse;
            };
            GroupID: {
                encode(message: _27.GroupID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.GroupID;
                fromJSON(object: any): _27.GroupID;
                toJSON(message: _27.GroupID): unknown;
                fromPartial(object: {
                    owner?: string;
                    dseq?: any;
                    gseq?: number;
                }): _27.GroupID;
            };
            group_StateFromJSON(object: any): _26.Group_State;
            group_StateToJSON(object: _26.Group_State): string;
            Group_State: typeof _26.Group_State;
            Group: {
                encode(message: _26.Group, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.Group;
                fromJSON(object: any): _26.Group;
                toJSON(message: _26.Group): unknown;
                fromPartial(object: {
                    groupId?: {
                        owner?: string;
                        dseq?: any;
                        gseq?: number;
                    };
                    state?: _26.Group_State;
                    groupSpec?: {
                        name?: string;
                        requirements?: {
                            signedBy?: {
                                allOf?: string[];
                                anyOf?: string[];
                            };
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                        };
                        resources?: {
                            resources?: {
                                cpu?: {
                                    units?: {
                                        val?: Uint8Array;
                                    };
                                    attributes?: {
                                        key?: string;
                                        value?: string;
                                    }[];
                                };
                                memory?: {
                                    quantity?: {
                                        val?: Uint8Array;
                                    };
                                    attributes?: {
                                        key?: string;
                                        value?: string;
                                    }[];
                                };
                                storage?: {
                                    name?: string;
                                    quantity?: {
                                        val?: Uint8Array;
                                    };
                                    attributes?: {
                                        key?: string;
                                        value?: string;
                                    }[];
                                }[];
                                endpoints?: {
                                    kind?: _9.Endpoint_Kind;
                                    sequenceNumber?: number;
                                }[];
                            };
                            count?: number;
                            price?: {
                                denom?: string;
                                amount?: string;
                            };
                        }[];
                    };
                    createdAt?: any;
                }): _26.Group;
            };
            GenesisDeployment: {
                encode(message: _25.GenesisDeployment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.GenesisDeployment;
                fromJSON(object: any): _25.GenesisDeployment;
                toJSON(message: _25.GenesisDeployment): unknown;
                fromPartial(object: {
                    deployment?: {
                        deploymentId?: {
                            owner?: string;
                            dseq?: any;
                        };
                        state?: _23.Deployment_State;
                        version?: Uint8Array;
                        createdAt?: any;
                    };
                    groups?: {
                        groupId?: {
                            owner?: string;
                            dseq?: any;
                            gseq?: number;
                        };
                        state?: _26.Group_State;
                        groupSpec?: {
                            name?: string;
                            requirements?: {
                                signedBy?: {
                                    allOf?: string[];
                                    anyOf?: string[];
                                };
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            };
                            resources?: {
                                resources?: {
                                    cpu?: {
                                        units?: {
                                            val?: Uint8Array;
                                        };
                                        attributes?: {
                                            key?: string;
                                            value?: string;
                                        }[];
                                    };
                                    memory?: {
                                        quantity?: {
                                            val?: Uint8Array;
                                        };
                                        attributes?: {
                                            key?: string;
                                            value?: string;
                                        }[];
                                    };
                                    storage?: {
                                        name?: string;
                                        quantity?: {
                                            val?: Uint8Array;
                                        };
                                        attributes?: {
                                            key?: string;
                                            value?: string;
                                        }[];
                                    }[];
                                    endpoints?: {
                                        kind?: _9.Endpoint_Kind;
                                        sequenceNumber?: number;
                                    }[];
                                };
                                count?: number;
                                price?: {
                                    denom?: string;
                                    amount?: string;
                                };
                            }[];
                        };
                        createdAt?: any;
                    }[];
                }): _25.GenesisDeployment;
            };
            GenesisState: {
                encode(message: _25.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.GenesisState;
                fromJSON(object: any): _25.GenesisState;
                toJSON(message: _25.GenesisState): unknown;
                fromPartial(object: {
                    deployments?: {
                        deployment?: {
                            deploymentId?: {
                                owner?: string;
                                dseq?: any;
                            };
                            state?: _23.Deployment_State;
                            version?: Uint8Array;
                            createdAt?: any;
                        };
                        groups?: {
                            groupId?: {
                                owner?: string;
                                dseq?: any;
                                gseq?: number;
                            };
                            state?: _26.Group_State;
                            groupSpec?: {
                                name?: string;
                                requirements?: {
                                    signedBy?: {
                                        allOf?: string[];
                                        anyOf?: string[];
                                    };
                                    attributes?: {
                                        key?: string;
                                        value?: string;
                                    }[];
                                };
                                resources?: {
                                    resources?: {
                                        cpu?: {
                                            units?: {
                                                val?: Uint8Array;
                                            };
                                            attributes?: {
                                                key?: string;
                                                value?: string;
                                            }[];
                                        };
                                        memory?: {
                                            quantity?: {
                                                val?: Uint8Array;
                                            };
                                            attributes?: {
                                                key?: string;
                                                value?: string;
                                            }[];
                                        };
                                        storage?: {
                                            name?: string;
                                            quantity?: {
                                                val?: Uint8Array;
                                            };
                                            attributes?: {
                                                key?: string;
                                                value?: string;
                                            }[];
                                        }[];
                                        endpoints?: {
                                            kind?: _9.Endpoint_Kind;
                                            sequenceNumber?: number;
                                        }[];
                                    };
                                    count?: number;
                                    price?: {
                                        denom?: string;
                                        amount?: string;
                                    };
                                }[];
                            };
                            createdAt?: any;
                        }[];
                    }[];
                    params?: {
                        deploymentMinDeposit?: {
                            denom?: string;
                            amount?: string;
                        };
                    };
                }): _25.GenesisState;
            };
            MsgCreateDeployment: {
                encode(message: _24.MsgCreateDeployment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.MsgCreateDeployment;
                fromJSON(object: any): _24.MsgCreateDeployment;
                toJSON(message: _24.MsgCreateDeployment): unknown;
                fromPartial(object: {
                    id?: {
                        owner?: string;
                        dseq?: any;
                    };
                    groups?: {
                        name?: string;
                        requirements?: {
                            signedBy?: {
                                allOf?: string[];
                                anyOf?: string[];
                            };
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                        };
                        resources?: {
                            resources?: {
                                cpu?: {
                                    units?: {
                                        val?: Uint8Array;
                                    };
                                    attributes?: {
                                        key?: string;
                                        value?: string;
                                    }[];
                                };
                                memory?: {
                                    quantity?: {
                                        val?: Uint8Array;
                                    };
                                    attributes?: {
                                        key?: string;
                                        value?: string;
                                    }[];
                                };
                                storage?: {
                                    name?: string;
                                    quantity?: {
                                        val?: Uint8Array;
                                    };
                                    attributes?: {
                                        key?: string;
                                        value?: string;
                                    }[];
                                }[];
                                endpoints?: {
                                    kind?: _9.Endpoint_Kind;
                                    sequenceNumber?: number;
                                }[];
                            };
                            count?: number;
                            price?: {
                                denom?: string;
                                amount?: string;
                            };
                        }[];
                    }[];
                    version?: Uint8Array;
                    deposit?: {
                        denom?: string;
                        amount?: string;
                    };
                    depositor?: string;
                }): _24.MsgCreateDeployment;
            };
            MsgCreateDeploymentResponse: {
                encode(_: _24.MsgCreateDeploymentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.MsgCreateDeploymentResponse;
                fromJSON(_: any): _24.MsgCreateDeploymentResponse;
                toJSON(_: _24.MsgCreateDeploymentResponse): unknown;
                fromPartial(_: {}): _24.MsgCreateDeploymentResponse;
            };
            MsgDepositDeployment: {
                encode(message: _24.MsgDepositDeployment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.MsgDepositDeployment;
                fromJSON(object: any): _24.MsgDepositDeployment;
                toJSON(message: _24.MsgDepositDeployment): unknown;
                fromPartial(object: {
                    id?: {
                        owner?: string;
                        dseq?: any;
                    };
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                    depositor?: string;
                }): _24.MsgDepositDeployment;
            };
            MsgDepositDeploymentResponse: {
                encode(_: _24.MsgDepositDeploymentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.MsgDepositDeploymentResponse;
                fromJSON(_: any): _24.MsgDepositDeploymentResponse;
                toJSON(_: _24.MsgDepositDeploymentResponse): unknown;
                fromPartial(_: {}): _24.MsgDepositDeploymentResponse;
            };
            MsgUpdateDeployment: {
                encode(message: _24.MsgUpdateDeployment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.MsgUpdateDeployment;
                fromJSON(object: any): _24.MsgUpdateDeployment;
                toJSON(message: _24.MsgUpdateDeployment): unknown;
                fromPartial(object: {
                    id?: {
                        owner?: string;
                        dseq?: any;
                    };
                    version?: Uint8Array;
                }): _24.MsgUpdateDeployment;
            };
            MsgUpdateDeploymentResponse: {
                encode(_: _24.MsgUpdateDeploymentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.MsgUpdateDeploymentResponse;
                fromJSON(_: any): _24.MsgUpdateDeploymentResponse;
                toJSON(_: _24.MsgUpdateDeploymentResponse): unknown;
                fromPartial(_: {}): _24.MsgUpdateDeploymentResponse;
            };
            MsgCloseDeployment: {
                encode(message: _24.MsgCloseDeployment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.MsgCloseDeployment;
                fromJSON(object: any): _24.MsgCloseDeployment;
                toJSON(message: _24.MsgCloseDeployment): unknown;
                fromPartial(object: {
                    id?: {
                        owner?: string;
                        dseq?: any;
                    };
                }): _24.MsgCloseDeployment;
            };
            MsgCloseDeploymentResponse: {
                encode(_: _24.MsgCloseDeploymentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.MsgCloseDeploymentResponse;
                fromJSON(_: any): _24.MsgCloseDeploymentResponse;
                toJSON(_: _24.MsgCloseDeploymentResponse): unknown;
                fromPartial(_: {}): _24.MsgCloseDeploymentResponse;
            };
            deployment_StateFromJSON(object: any): _23.Deployment_State;
            deployment_StateToJSON(object: _23.Deployment_State): string;
            Deployment_State: typeof _23.Deployment_State;
            DeploymentID: {
                encode(message: _23.DeploymentID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.DeploymentID;
                fromJSON(object: any): _23.DeploymentID;
                toJSON(message: _23.DeploymentID): unknown;
                fromPartial(object: {
                    owner?: string;
                    dseq?: any;
                }): _23.DeploymentID;
            };
            Deployment: {
                encode(message: _23.Deployment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.Deployment;
                fromJSON(object: any): _23.Deployment;
                toJSON(message: _23.Deployment): unknown;
                fromPartial(object: {
                    deploymentId?: {
                        owner?: string;
                        dseq?: any;
                    };
                    state?: _23.Deployment_State;
                    version?: Uint8Array;
                    createdAt?: any;
                }): _23.Deployment;
            };
            DeploymentFilters: {
                encode(message: _23.DeploymentFilters, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.DeploymentFilters;
                fromJSON(object: any): _23.DeploymentFilters;
                toJSON(message: _23.DeploymentFilters): unknown;
                fromPartial(object: {
                    owner?: string;
                    dseq?: any;
                    state?: string;
                }): _23.DeploymentFilters;
            };
            DepositDeploymentAuthorization: {
                encode(message: _22.DepositDeploymentAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.DepositDeploymentAuthorization;
                fromJSON(object: any): _22.DepositDeploymentAuthorization;
                toJSON(message: _22.DepositDeploymentAuthorization): unknown;
                fromPartial(object: {
                    spendLimit?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _22.DepositDeploymentAuthorization;
            };
        };
    }
    namespace escrow {
        const v1beta1: {
            account_StateFromJSON(object: any): _36.Account_State;
            account_StateToJSON(object: _36.Account_State): string;
            payment_StateFromJSON(object: any): _36.Payment_State;
            payment_StateToJSON(object: _36.Payment_State): string;
            Account_State: typeof _36.Account_State;
            Payment_State: typeof _36.Payment_State;
            AccountID: {
                encode(message: _36.AccountID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.AccountID;
                fromJSON(object: any): _36.AccountID;
                toJSON(message: _36.AccountID): unknown;
                fromPartial(object: {
                    scope?: string;
                    xid?: string;
                }): _36.AccountID;
            };
            Account: {
                encode(message: _36.Account, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.Account;
                fromJSON(object: any): _36.Account;
                toJSON(message: _36.Account): unknown;
                fromPartial(object: {
                    id?: {
                        scope?: string;
                        xid?: string;
                    };
                    owner?: string;
                    state?: _36.Account_State;
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                    transferred?: {
                        denom?: string;
                        amount?: string;
                    };
                    settledAt?: any;
                }): _36.Account;
            };
            Payment: {
                encode(message: _36.Payment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.Payment;
                fromJSON(object: any): _36.Payment;
                toJSON(message: _36.Payment): unknown;
                fromPartial(object: {
                    accountId?: {
                        scope?: string;
                        xid?: string;
                    };
                    paymentId?: string;
                    owner?: string;
                    state?: _36.Payment_State;
                    rate?: {
                        denom?: string;
                        amount?: string;
                    };
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                    withdrawn?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _36.Payment;
            };
            QueryAccountsRequest: {
                encode(message: _35.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryAccountsRequest;
                fromJSON(object: any): _35.QueryAccountsRequest;
                toJSON(message: _35.QueryAccountsRequest): unknown;
                fromPartial(object: {
                    scope?: string;
                    xid?: string;
                    owner?: string;
                    state?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _35.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _35.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryAccountsResponse;
                fromJSON(object: any): _35.QueryAccountsResponse;
                toJSON(message: _35.QueryAccountsResponse): unknown;
                fromPartial(object: {
                    accounts?: {
                        id?: {
                            scope?: string;
                            xid?: string;
                        };
                        owner?: string;
                        state?: _36.Account_State;
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                        transferred?: {
                            denom?: string;
                            amount?: string;
                        };
                        settledAt?: any;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _35.QueryAccountsResponse;
            };
            QueryPaymentsRequest: {
                encode(message: _35.QueryPaymentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryPaymentsRequest;
                fromJSON(object: any): _35.QueryPaymentsRequest;
                toJSON(message: _35.QueryPaymentsRequest): unknown;
                fromPartial(object: {
                    scope?: string;
                    xid?: string;
                    id?: string;
                    owner?: string;
                    state?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _35.QueryPaymentsRequest;
            };
            QueryPaymentsResponse: {
                encode(message: _35.QueryPaymentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryPaymentsResponse;
                fromJSON(object: any): _35.QueryPaymentsResponse;
                toJSON(message: _35.QueryPaymentsResponse): unknown;
                fromPartial(object: {
                    payments?: {
                        accountId?: {
                            scope?: string;
                            xid?: string;
                        };
                        paymentId?: string;
                        owner?: string;
                        state?: _36.Payment_State;
                        rate?: {
                            denom?: string;
                            amount?: string;
                        };
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                        withdrawn?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _35.QueryPaymentsResponse;
            };
            GenesisState: {
                encode(message: _34.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.GenesisState;
                fromJSON(object: any): _34.GenesisState;
                toJSON(message: _34.GenesisState): unknown;
                fromPartial(object: {
                    accounts?: {
                        id?: {
                            scope?: string;
                            xid?: string;
                        };
                        owner?: string;
                        state?: _36.Account_State;
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                        transferred?: {
                            denom?: string;
                            amount?: string;
                        };
                        settledAt?: any;
                    }[];
                    payments?: {
                        accountId?: {
                            scope?: string;
                            xid?: string;
                        };
                        paymentId?: string;
                        owner?: string;
                        state?: _36.Payment_State;
                        rate?: {
                            denom?: string;
                            amount?: string;
                        };
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                        withdrawn?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                }): _34.GenesisState;
            };
        };
        const v1beta2: {
            account_StateFromJSON(object: any): _39.Account_State;
            account_StateToJSON(object: _39.Account_State): string;
            fractionalPayment_StateFromJSON(object: any): _39.FractionalPayment_State;
            fractionalPayment_StateToJSON(object: _39.FractionalPayment_State): string;
            Account_State: typeof _39.Account_State;
            FractionalPayment_State: typeof _39.FractionalPayment_State;
            AccountID: {
                encode(message: _39.AccountID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.AccountID;
                fromJSON(object: any): _39.AccountID;
                toJSON(message: _39.AccountID): unknown;
                fromPartial(object: {
                    scope?: string;
                    xid?: string;
                }): _39.AccountID;
            };
            Account: {
                encode(message: _39.Account, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.Account;
                fromJSON(object: any): _39.Account;
                toJSON(message: _39.Account): unknown;
                fromPartial(object: {
                    id?: {
                        scope?: string;
                        xid?: string;
                    };
                    owner?: string;
                    state?: _39.Account_State;
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                    transferred?: {
                        denom?: string;
                        amount?: string;
                    };
                    settledAt?: any;
                    depositor?: string;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _39.Account;
            };
            FractionalPayment: {
                encode(message: _39.FractionalPayment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.FractionalPayment;
                fromJSON(object: any): _39.FractionalPayment;
                toJSON(message: _39.FractionalPayment): unknown;
                fromPartial(object: {
                    accountId?: {
                        scope?: string;
                        xid?: string;
                    };
                    paymentId?: string;
                    owner?: string;
                    state?: _39.FractionalPayment_State;
                    rate?: {
                        denom?: string;
                        amount?: string;
                    };
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                    withdrawn?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _39.FractionalPayment;
            };
            QueryAccountsRequest: {
                encode(message: _38.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryAccountsRequest;
                fromJSON(object: any): _38.QueryAccountsRequest;
                toJSON(message: _38.QueryAccountsRequest): unknown;
                fromPartial(object: {
                    scope?: string;
                    xid?: string;
                    owner?: string;
                    state?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _38.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _38.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryAccountsResponse;
                fromJSON(object: any): _38.QueryAccountsResponse;
                toJSON(message: _38.QueryAccountsResponse): unknown;
                fromPartial(object: {
                    accounts?: {
                        id?: {
                            scope?: string;
                            xid?: string;
                        };
                        owner?: string;
                        state?: _39.Account_State;
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                        transferred?: {
                            denom?: string;
                            amount?: string;
                        };
                        settledAt?: any;
                        depositor?: string;
                        funds?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _38.QueryAccountsResponse;
            };
            QueryPaymentsRequest: {
                encode(message: _38.QueryPaymentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryPaymentsRequest;
                fromJSON(object: any): _38.QueryPaymentsRequest;
                toJSON(message: _38.QueryPaymentsRequest): unknown;
                fromPartial(object: {
                    scope?: string;
                    xid?: string;
                    id?: string;
                    owner?: string;
                    state?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _38.QueryPaymentsRequest;
            };
            QueryPaymentsResponse: {
                encode(message: _38.QueryPaymentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryPaymentsResponse;
                fromJSON(object: any): _38.QueryPaymentsResponse;
                toJSON(message: _38.QueryPaymentsResponse): unknown;
                fromPartial(object: {
                    payments?: {
                        accountId?: {
                            scope?: string;
                            xid?: string;
                        };
                        paymentId?: string;
                        owner?: string;
                        state?: _39.FractionalPayment_State;
                        rate?: {
                            denom?: string;
                            amount?: string;
                        };
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                        withdrawn?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _38.QueryPaymentsResponse;
            };
            GenesisState: {
                encode(message: _37.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.GenesisState;
                fromJSON(object: any): _37.GenesisState;
                toJSON(message: _37.GenesisState): unknown;
                fromPartial(object: {
                    accounts?: {
                        id?: {
                            scope?: string;
                            xid?: string;
                        };
                        owner?: string;
                        state?: _39.Account_State;
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                        transferred?: {
                            denom?: string;
                            amount?: string;
                        };
                        settledAt?: any;
                        depositor?: string;
                        funds?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    payments?: {
                        accountId?: {
                            scope?: string;
                            xid?: string;
                        };
                        paymentId?: string;
                        owner?: string;
                        state?: _39.FractionalPayment_State;
                        rate?: {
                            denom?: string;
                            amount?: string;
                        };
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                        withdrawn?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                }): _37.GenesisState;
            };
        };
    }
    namespace inflation {
        const v1beta2: {
            Params: {
                encode(message: _41.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.Params;
                fromJSON(object: any): _41.Params;
                toJSON(message: _41.Params): unknown;
                fromPartial(object: {
                    inflationDecayFactor?: string;
                    initialInflation?: string;
                    variance?: string;
                }): _41.Params;
            };
            GenesisState: {
                encode(message: _40.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.GenesisState;
                fromJSON(object: any): _40.GenesisState;
                toJSON(message: _40.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        inflationDecayFactor?: string;
                        initialInflation?: string;
                        variance?: string;
                    };
                }): _40.GenesisState;
            };
        };
    }
    namespace market {
        const v1beta2: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createBid(value: _42.MsgCreateBid): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    closeBid(value: _42.MsgCloseBid): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawLease(value: _44.MsgWithdrawLease): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createLease(value: _44.MsgCreateLease): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    closeLease(value: _44.MsgCloseLease): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createBid(value: _42.MsgCreateBid): {
                        typeUrl: string;
                        value: _42.MsgCreateBid;
                    };
                    closeBid(value: _42.MsgCloseBid): {
                        typeUrl: string;
                        value: _42.MsgCloseBid;
                    };
                    withdrawLease(value: _44.MsgWithdrawLease): {
                        typeUrl: string;
                        value: _44.MsgWithdrawLease;
                    };
                    createLease(value: _44.MsgCreateLease): {
                        typeUrl: string;
                        value: _44.MsgCreateLease;
                    };
                    closeLease(value: _44.MsgCloseLease): {
                        typeUrl: string;
                        value: _44.MsgCloseLease;
                    };
                };
                toJSON: {
                    createBid(value: _42.MsgCreateBid): {
                        typeUrl: string;
                        value: unknown;
                    };
                    closeBid(value: _42.MsgCloseBid): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawLease(value: _44.MsgWithdrawLease): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createLease(value: _44.MsgCreateLease): {
                        typeUrl: string;
                        value: unknown;
                    };
                    closeLease(value: _44.MsgCloseLease): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createBid(value: any): {
                        typeUrl: string;
                        value: _42.MsgCreateBid;
                    };
                    closeBid(value: any): {
                        typeUrl: string;
                        value: _42.MsgCloseBid;
                    };
                    withdrawLease(value: any): {
                        typeUrl: string;
                        value: _44.MsgWithdrawLease;
                    };
                    createLease(value: any): {
                        typeUrl: string;
                        value: _44.MsgCreateLease;
                    };
                    closeLease(value: any): {
                        typeUrl: string;
                        value: _44.MsgCloseLease;
                    };
                };
                fromPartial: {
                    createBid(value: _42.MsgCreateBid): {
                        typeUrl: string;
                        value: _42.MsgCreateBid;
                    };
                    closeBid(value: _42.MsgCloseBid): {
                        typeUrl: string;
                        value: _42.MsgCloseBid;
                    };
                    withdrawLease(value: _44.MsgWithdrawLease): {
                        typeUrl: string;
                        value: _44.MsgWithdrawLease;
                    };
                    createLease(value: _44.MsgCreateLease): {
                        typeUrl: string;
                        value: _44.MsgCreateLease;
                    };
                    closeLease(value: _44.MsgCloseLease): {
                        typeUrl: string;
                        value: _44.MsgCloseLease;
                    };
                };
            };
            AminoConverter: {
                "/akash.market.v1beta2.MsgCreateBid": {
                    aminoType: string;
                    toAmino: ({ order, provider, price, deposit }: _42.MsgCreateBid) => {
                        order: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                            oseq: number;
                        };
                        provider: string;
                        price: {
                            denom: string;
                            amount: string;
                        };
                        deposit: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ order, provider, price, deposit }: {
                        order: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                            oseq: number;
                        };
                        provider: string;
                        price: {
                            denom: string;
                            amount: string;
                        };
                        deposit: {
                            denom: string;
                            amount: string;
                        };
                    }) => _42.MsgCreateBid;
                };
                "/akash.market.v1beta2.MsgCloseBid": {
                    aminoType: string;
                    toAmino: ({ bidId }: _42.MsgCloseBid) => {
                        bid_id: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                            oseq: number;
                            provider: string;
                        };
                    };
                    fromAmino: ({ bid_id }: {
                        bid_id: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                            oseq: number;
                            provider: string;
                        };
                    }) => _42.MsgCloseBid;
                };
                "/akash.market.v1beta2.MsgWithdrawLease": {
                    aminoType: string;
                    toAmino: ({ bidId }: _44.MsgWithdrawLease) => {
                        bid_id: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                            oseq: number;
                            provider: string;
                        };
                    };
                    fromAmino: ({ bid_id }: {
                        bid_id: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                            oseq: number;
                            provider: string;
                        };
                    }) => _44.MsgWithdrawLease;
                };
                "/akash.market.v1beta2.MsgCreateLease": {
                    aminoType: string;
                    toAmino: ({ bidId }: _44.MsgCreateLease) => {
                        bid_id: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                            oseq: number;
                            provider: string;
                        };
                    };
                    fromAmino: ({ bid_id }: {
                        bid_id: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                            oseq: number;
                            provider: string;
                        };
                    }) => _44.MsgCreateLease;
                };
                "/akash.market.v1beta2.MsgCloseLease": {
                    aminoType: string;
                    toAmino: ({ leaseId }: _44.MsgCloseLease) => {
                        lease_id: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                            oseq: number;
                            provider: string;
                        };
                    };
                    fromAmino: ({ lease_id }: {
                        lease_id: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                            oseq: number;
                            provider: string;
                        };
                    }) => _44.MsgCloseLease;
                };
            };
            QueryOrdersRequest: {
                encode(message: _47.QueryOrdersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryOrdersRequest;
                fromJSON(object: any): _47.QueryOrdersRequest;
                toJSON(message: _47.QueryOrdersRequest): unknown;
                fromPartial(object: {
                    filters?: {
                        owner?: string;
                        dseq?: any;
                        gseq?: number;
                        oseq?: number;
                        state?: string;
                    };
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _47.QueryOrdersRequest;
            };
            QueryOrdersResponse: {
                encode(message: _47.QueryOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryOrdersResponse;
                fromJSON(object: any): _47.QueryOrdersResponse;
                toJSON(message: _47.QueryOrdersResponse): unknown;
                fromPartial(object: {
                    orders?: {
                        orderId?: {
                            owner?: string;
                            dseq?: any;
                            gseq?: number;
                            oseq?: number;
                        };
                        state?: _45.Order_State;
                        spec?: {
                            name?: string;
                            requirements?: {
                                signedBy?: {
                                    allOf?: string[];
                                    anyOf?: string[];
                                };
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            };
                            resources?: {
                                resources?: {
                                    cpu?: {
                                        units?: {
                                            val?: Uint8Array;
                                        };
                                        attributes?: {
                                            key?: string;
                                            value?: string;
                                        }[];
                                    };
                                    memory?: {
                                        quantity?: {
                                            val?: Uint8Array;
                                        };
                                        attributes?: {
                                            key?: string;
                                            value?: string;
                                        }[];
                                    };
                                    storage?: {
                                        name?: string;
                                        quantity?: {
                                            val?: Uint8Array;
                                        };
                                        attributes?: {
                                            key?: string;
                                            value?: string;
                                        }[];
                                    }[];
                                    endpoints?: {
                                        kind?: _9.Endpoint_Kind;
                                        sequenceNumber?: number;
                                    }[];
                                };
                                count?: number;
                                price?: {
                                    denom?: string;
                                    amount?: string;
                                };
                            }[];
                        };
                        createdAt?: any;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _47.QueryOrdersResponse;
            };
            QueryOrderRequest: {
                encode(message: _47.QueryOrderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryOrderRequest;
                fromJSON(object: any): _47.QueryOrderRequest;
                toJSON(message: _47.QueryOrderRequest): unknown;
                fromPartial(object: {
                    id?: {
                        owner?: string;
                        dseq?: any;
                        gseq?: number;
                        oseq?: number;
                    };
                }): _47.QueryOrderRequest;
            };
            QueryOrderResponse: {
                encode(message: _47.QueryOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryOrderResponse;
                fromJSON(object: any): _47.QueryOrderResponse;
                toJSON(message: _47.QueryOrderResponse): unknown;
                fromPartial(object: {
                    order?: {
                        orderId?: {
                            owner?: string;
                            dseq?: any;
                            gseq?: number;
                            oseq?: number;
                        };
                        state?: _45.Order_State;
                        spec?: {
                            name?: string;
                            requirements?: {
                                signedBy?: {
                                    allOf?: string[];
                                    anyOf?: string[];
                                };
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            };
                            resources?: {
                                resources?: {
                                    cpu?: {
                                        units?: {
                                            val?: Uint8Array;
                                        };
                                        attributes?: {
                                            key?: string;
                                            value?: string;
                                        }[];
                                    };
                                    memory?: {
                                        quantity?: {
                                            val?: Uint8Array;
                                        };
                                        attributes?: {
                                            key?: string;
                                            value?: string;
                                        }[];
                                    };
                                    storage?: {
                                        name?: string;
                                        quantity?: {
                                            val?: Uint8Array;
                                        };
                                        attributes?: {
                                            key?: string;
                                            value?: string;
                                        }[];
                                    }[];
                                    endpoints?: {
                                        kind?: _9.Endpoint_Kind;
                                        sequenceNumber?: number;
                                    }[];
                                };
                                count?: number;
                                price?: {
                                    denom?: string;
                                    amount?: string;
                                };
                            }[];
                        };
                        createdAt?: any;
                    };
                }): _47.QueryOrderResponse;
            };
            QueryBidsRequest: {
                encode(message: _47.QueryBidsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryBidsRequest;
                fromJSON(object: any): _47.QueryBidsRequest;
                toJSON(message: _47.QueryBidsRequest): unknown;
                fromPartial(object: {
                    filters?: {
                        owner?: string;
                        dseq?: any;
                        gseq?: number;
                        oseq?: number;
                        provider?: string;
                        state?: string;
                    };
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _47.QueryBidsRequest;
            };
            QueryBidsResponse: {
                encode(message: _47.QueryBidsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryBidsResponse;
                fromJSON(object: any): _47.QueryBidsResponse;
                toJSON(message: _47.QueryBidsResponse): unknown;
                fromPartial(object: {
                    bids?: {
                        bid?: {
                            bidId?: {
                                owner?: string;
                                dseq?: any;
                                gseq?: number;
                                oseq?: number;
                                provider?: string;
                            };
                            state?: _42.Bid_State;
                            price?: {
                                denom?: string;
                                amount?: string;
                            };
                            createdAt?: any;
                        };
                        escrowAccount?: {
                            id?: {
                                scope?: string;
                                xid?: string;
                            };
                            owner?: string;
                            state?: _39.Account_State;
                            balance?: {
                                denom?: string;
                                amount?: string;
                            };
                            transferred?: {
                                denom?: string;
                                amount?: string;
                            };
                            settledAt?: any;
                            depositor?: string;
                            funds?: {
                                denom?: string;
                                amount?: string;
                            };
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _47.QueryBidsResponse;
            };
            QueryBidRequest: {
                encode(message: _47.QueryBidRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryBidRequest;
                fromJSON(object: any): _47.QueryBidRequest;
                toJSON(message: _47.QueryBidRequest): unknown;
                fromPartial(object: {
                    id?: {
                        owner?: string;
                        dseq?: any;
                        gseq?: number;
                        oseq?: number;
                        provider?: string;
                    };
                }): _47.QueryBidRequest;
            };
            QueryBidResponse: {
                encode(message: _47.QueryBidResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryBidResponse;
                fromJSON(object: any): _47.QueryBidResponse;
                toJSON(message: _47.QueryBidResponse): unknown;
                fromPartial(object: {
                    bid?: {
                        bidId?: {
                            owner?: string;
                            dseq?: any;
                            gseq?: number;
                            oseq?: number;
                            provider?: string;
                        };
                        state?: _42.Bid_State;
                        price?: {
                            denom?: string;
                            amount?: string;
                        };
                        createdAt?: any;
                    };
                    escrowAccount?: {
                        id?: {
                            scope?: string;
                            xid?: string;
                        };
                        owner?: string;
                        state?: _39.Account_State;
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                        transferred?: {
                            denom?: string;
                            amount?: string;
                        };
                        settledAt?: any;
                        depositor?: string;
                        funds?: {
                            denom?: string;
                            amount?: string;
                        };
                    };
                }): _47.QueryBidResponse;
            };
            QueryLeasesRequest: {
                encode(message: _47.QueryLeasesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryLeasesRequest;
                fromJSON(object: any): _47.QueryLeasesRequest;
                toJSON(message: _47.QueryLeasesRequest): unknown;
                fromPartial(object: {
                    filters?: {
                        owner?: string;
                        dseq?: any;
                        gseq?: number;
                        oseq?: number;
                        provider?: string;
                        state?: string;
                    };
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _47.QueryLeasesRequest;
            };
            QueryLeasesResponse: {
                encode(message: _47.QueryLeasesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryLeasesResponse;
                fromJSON(object: any): _47.QueryLeasesResponse;
                toJSON(message: _47.QueryLeasesResponse): unknown;
                fromPartial(object: {
                    leases?: {
                        lease?: {
                            leaseId?: {
                                owner?: string;
                                dseq?: any;
                                gseq?: number;
                                oseq?: number;
                                provider?: string;
                            };
                            state?: _44.Lease_State;
                            price?: {
                                denom?: string;
                                amount?: string;
                            };
                            createdAt?: any;
                            closedOn?: any;
                        };
                        escrowPayment?: {
                            accountId?: {
                                scope?: string;
                                xid?: string;
                            };
                            paymentId?: string;
                            owner?: string;
                            state?: _39.FractionalPayment_State;
                            rate?: {
                                denom?: string;
                                amount?: string;
                            };
                            balance?: {
                                denom?: string;
                                amount?: string;
                            };
                            withdrawn?: {
                                denom?: string;
                                amount?: string;
                            };
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _47.QueryLeasesResponse;
            };
            QueryLeaseRequest: {
                encode(message: _47.QueryLeaseRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryLeaseRequest;
                fromJSON(object: any): _47.QueryLeaseRequest;
                toJSON(message: _47.QueryLeaseRequest): unknown;
                fromPartial(object: {
                    id?: {
                        owner?: string;
                        dseq?: any;
                        gseq?: number;
                        oseq?: number;
                        provider?: string;
                    };
                }): _47.QueryLeaseRequest;
            };
            QueryLeaseResponse: {
                encode(message: _47.QueryLeaseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryLeaseResponse;
                fromJSON(object: any): _47.QueryLeaseResponse;
                toJSON(message: _47.QueryLeaseResponse): unknown;
                fromPartial(object: {
                    lease?: {
                        leaseId?: {
                            owner?: string;
                            dseq?: any;
                            gseq?: number;
                            oseq?: number;
                            provider?: string;
                        };
                        state?: _44.Lease_State;
                        price?: {
                            denom?: string;
                            amount?: string;
                        };
                        createdAt?: any;
                        closedOn?: any;
                    };
                    escrowPayment?: {
                        accountId?: {
                            scope?: string;
                            xid?: string;
                        };
                        paymentId?: string;
                        owner?: string;
                        state?: _39.FractionalPayment_State;
                        rate?: {
                            denom?: string;
                            amount?: string;
                        };
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                        withdrawn?: {
                            denom?: string;
                            amount?: string;
                        };
                    };
                }): _47.QueryLeaseResponse;
            };
            Params: {
                encode(message: _46.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.Params;
                fromJSON(object: any): _46.Params;
                toJSON(message: _46.Params): unknown;
                fromPartial(object: {
                    bidMinDeposit?: {
                        denom?: string;
                        amount?: string;
                    };
                    orderMaxBids?: number;
                }): _46.Params;
            };
            order_StateFromJSON(object: any): _45.Order_State;
            order_StateToJSON(object: _45.Order_State): string;
            Order_State: typeof _45.Order_State;
            OrderID: {
                encode(message: _45.OrderID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.OrderID;
                fromJSON(object: any): _45.OrderID;
                toJSON(message: _45.OrderID): unknown;
                fromPartial(object: {
                    owner?: string;
                    dseq?: any;
                    gseq?: number;
                    oseq?: number;
                }): _45.OrderID;
            };
            Order: {
                encode(message: _45.Order, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.Order;
                fromJSON(object: any): _45.Order;
                toJSON(message: _45.Order): unknown;
                fromPartial(object: {
                    orderId?: {
                        owner?: string;
                        dseq?: any;
                        gseq?: number;
                        oseq?: number;
                    };
                    state?: _45.Order_State;
                    spec?: {
                        name?: string;
                        requirements?: {
                            signedBy?: {
                                allOf?: string[];
                                anyOf?: string[];
                            };
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                        };
                        resources?: {
                            resources?: {
                                cpu?: {
                                    units?: {
                                        val?: Uint8Array;
                                    };
                                    attributes?: {
                                        key?: string;
                                        value?: string;
                                    }[];
                                };
                                memory?: {
                                    quantity?: {
                                        val?: Uint8Array;
                                    };
                                    attributes?: {
                                        key?: string;
                                        value?: string;
                                    }[];
                                };
                                storage?: {
                                    name?: string;
                                    quantity?: {
                                        val?: Uint8Array;
                                    };
                                    attributes?: {
                                        key?: string;
                                        value?: string;
                                    }[];
                                }[];
                                endpoints?: {
                                    kind?: _9.Endpoint_Kind;
                                    sequenceNumber?: number;
                                }[];
                            };
                            count?: number;
                            price?: {
                                denom?: string;
                                amount?: string;
                            };
                        }[];
                    };
                    createdAt?: any;
                }): _45.Order;
            };
            OrderFilters: {
                encode(message: _45.OrderFilters, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.OrderFilters;
                fromJSON(object: any): _45.OrderFilters;
                toJSON(message: _45.OrderFilters): unknown;
                fromPartial(object: {
                    owner?: string;
                    dseq?: any;
                    gseq?: number;
                    oseq?: number;
                    state?: string;
                }): _45.OrderFilters;
            };
            lease_StateFromJSON(object: any): _44.Lease_State;
            lease_StateToJSON(object: _44.Lease_State): string;
            Lease_State: typeof _44.Lease_State;
            LeaseID: {
                encode(message: _44.LeaseID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.LeaseID;
                fromJSON(object: any): _44.LeaseID;
                toJSON(message: _44.LeaseID): unknown;
                fromPartial(object: {
                    owner?: string;
                    dseq?: any;
                    gseq?: number;
                    oseq?: number;
                    provider?: string;
                }): _44.LeaseID;
            };
            Lease: {
                encode(message: _44.Lease, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.Lease;
                fromJSON(object: any): _44.Lease;
                toJSON(message: _44.Lease): unknown;
                fromPartial(object: {
                    leaseId?: {
                        owner?: string;
                        dseq?: any;
                        gseq?: number;
                        oseq?: number;
                        provider?: string;
                    };
                    state?: _44.Lease_State;
                    price?: {
                        denom?: string;
                        amount?: string;
                    };
                    createdAt?: any;
                    closedOn?: any;
                }): _44.Lease;
            };
            LeaseFilters: {
                encode(message: _44.LeaseFilters, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.LeaseFilters;
                fromJSON(object: any): _44.LeaseFilters;
                toJSON(message: _44.LeaseFilters): unknown;
                fromPartial(object: {
                    owner?: string;
                    dseq?: any;
                    gseq?: number;
                    oseq?: number;
                    provider?: string;
                    state?: string;
                }): _44.LeaseFilters;
            };
            MsgCreateLease: {
                encode(message: _44.MsgCreateLease, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgCreateLease;
                fromJSON(object: any): _44.MsgCreateLease;
                toJSON(message: _44.MsgCreateLease): unknown;
                fromPartial(object: {
                    bidId?: {
                        owner?: string;
                        dseq?: any;
                        gseq?: number;
                        oseq?: number;
                        provider?: string;
                    };
                }): _44.MsgCreateLease;
            };
            MsgCreateLeaseResponse: {
                encode(_: _44.MsgCreateLeaseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgCreateLeaseResponse;
                fromJSON(_: any): _44.MsgCreateLeaseResponse;
                toJSON(_: _44.MsgCreateLeaseResponse): unknown;
                fromPartial(_: {}): _44.MsgCreateLeaseResponse;
            };
            MsgWithdrawLease: {
                encode(message: _44.MsgWithdrawLease, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgWithdrawLease;
                fromJSON(object: any): _44.MsgWithdrawLease;
                toJSON(message: _44.MsgWithdrawLease): unknown;
                fromPartial(object: {
                    bidId?: {
                        owner?: string;
                        dseq?: any;
                        gseq?: number;
                        oseq?: number;
                        provider?: string;
                    };
                }): _44.MsgWithdrawLease;
            };
            MsgWithdrawLeaseResponse: {
                encode(_: _44.MsgWithdrawLeaseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgWithdrawLeaseResponse;
                fromJSON(_: any): _44.MsgWithdrawLeaseResponse;
                toJSON(_: _44.MsgWithdrawLeaseResponse): unknown;
                fromPartial(_: {}): _44.MsgWithdrawLeaseResponse;
            };
            MsgCloseLease: {
                encode(message: _44.MsgCloseLease, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgCloseLease;
                fromJSON(object: any): _44.MsgCloseLease;
                toJSON(message: _44.MsgCloseLease): unknown;
                fromPartial(object: {
                    leaseId?: {
                        owner?: string;
                        dseq?: any;
                        gseq?: number;
                        oseq?: number;
                        provider?: string;
                    };
                }): _44.MsgCloseLease;
            };
            MsgCloseLeaseResponse: {
                encode(_: _44.MsgCloseLeaseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgCloseLeaseResponse;
                fromJSON(_: any): _44.MsgCloseLeaseResponse;
                toJSON(_: _44.MsgCloseLeaseResponse): unknown;
                fromPartial(_: {}): _44.MsgCloseLeaseResponse;
            };
            GenesisState: {
                encode(message: _43.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.GenesisState;
                fromJSON(object: any): _43.GenesisState;
                toJSON(message: _43.GenesisState): unknown;
                fromPartial(object: {
                    orders?: {
                        orderId?: {
                            owner?: string;
                            dseq?: any;
                            gseq?: number;
                            oseq?: number;
                        };
                        state?: _45.Order_State;
                        spec?: {
                            name?: string;
                            requirements?: {
                                signedBy?: {
                                    allOf?: string[];
                                    anyOf?: string[];
                                };
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            };
                            resources?: {
                                resources?: {
                                    cpu?: {
                                        units?: {
                                            val?: Uint8Array;
                                        };
                                        attributes?: {
                                            key?: string;
                                            value?: string;
                                        }[];
                                    };
                                    memory?: {
                                        quantity?: {
                                            val?: Uint8Array;
                                        };
                                        attributes?: {
                                            key?: string;
                                            value?: string;
                                        }[];
                                    };
                                    storage?: {
                                        name?: string;
                                        quantity?: {
                                            val?: Uint8Array;
                                        };
                                        attributes?: {
                                            key?: string;
                                            value?: string;
                                        }[];
                                    }[];
                                    endpoints?: {
                                        kind?: _9.Endpoint_Kind;
                                        sequenceNumber?: number;
                                    }[];
                                };
                                count?: number;
                                price?: {
                                    denom?: string;
                                    amount?: string;
                                };
                            }[];
                        };
                        createdAt?: any;
                    }[];
                    leases?: {
                        leaseId?: {
                            owner?: string;
                            dseq?: any;
                            gseq?: number;
                            oseq?: number;
                            provider?: string;
                        };
                        state?: _44.Lease_State;
                        price?: {
                            denom?: string;
                            amount?: string;
                        };
                        createdAt?: any;
                        closedOn?: any;
                    }[];
                    params?: {
                        bidMinDeposit?: {
                            denom?: string;
                            amount?: string;
                        };
                        orderMaxBids?: number;
                    };
                }): _43.GenesisState;
            };
            bid_StateFromJSON(object: any): _42.Bid_State;
            bid_StateToJSON(object: _42.Bid_State): string;
            Bid_State: typeof _42.Bid_State;
            MsgCreateBid: {
                encode(message: _42.MsgCreateBid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.MsgCreateBid;
                fromJSON(object: any): _42.MsgCreateBid;
                toJSON(message: _42.MsgCreateBid): unknown;
                fromPartial(object: {
                    order?: {
                        owner?: string;
                        dseq?: any;
                        gseq?: number;
                        oseq?: number;
                    };
                    provider?: string;
                    price?: {
                        denom?: string;
                        amount?: string;
                    };
                    deposit?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _42.MsgCreateBid;
            };
            MsgCreateBidResponse: {
                encode(_: _42.MsgCreateBidResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.MsgCreateBidResponse;
                fromJSON(_: any): _42.MsgCreateBidResponse;
                toJSON(_: _42.MsgCreateBidResponse): unknown;
                fromPartial(_: {}): _42.MsgCreateBidResponse;
            };
            MsgCloseBid: {
                encode(message: _42.MsgCloseBid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.MsgCloseBid;
                fromJSON(object: any): _42.MsgCloseBid;
                toJSON(message: _42.MsgCloseBid): unknown;
                fromPartial(object: {
                    bidId?: {
                        owner?: string;
                        dseq?: any;
                        gseq?: number;
                        oseq?: number;
                        provider?: string;
                    };
                }): _42.MsgCloseBid;
            };
            MsgCloseBidResponse: {
                encode(_: _42.MsgCloseBidResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.MsgCloseBidResponse;
                fromJSON(_: any): _42.MsgCloseBidResponse;
                toJSON(_: _42.MsgCloseBidResponse): unknown;
                fromPartial(_: {}): _42.MsgCloseBidResponse;
            };
            BidID: {
                encode(message: _42.BidID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.BidID;
                fromJSON(object: any): _42.BidID;
                toJSON(message: _42.BidID): unknown;
                fromPartial(object: {
                    owner?: string;
                    dseq?: any;
                    gseq?: number;
                    oseq?: number;
                    provider?: string;
                }): _42.BidID;
            };
            Bid: {
                encode(message: _42.Bid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.Bid;
                fromJSON(object: any): _42.Bid;
                toJSON(message: _42.Bid): unknown;
                fromPartial(object: {
                    bidId?: {
                        owner?: string;
                        dseq?: any;
                        gseq?: number;
                        oseq?: number;
                        provider?: string;
                    };
                    state?: _42.Bid_State;
                    price?: {
                        denom?: string;
                        amount?: string;
                    };
                    createdAt?: any;
                }): _42.Bid;
            };
            BidFilters: {
                encode(message: _42.BidFilters, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.BidFilters;
                fromJSON(object: any): _42.BidFilters;
                toJSON(message: _42.BidFilters): unknown;
                fromPartial(object: {
                    owner?: string;
                    dseq?: any;
                    gseq?: number;
                    oseq?: number;
                    provider?: string;
                    state?: string;
                }): _42.BidFilters;
            };
        };
    }
    namespace provider {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createProvider(value: _49.MsgCreateProvider): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateProvider(value: _49.MsgUpdateProvider): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteProvider(value: _49.MsgDeleteProvider): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createProvider(value: _49.MsgCreateProvider): {
                        typeUrl: string;
                        value: _49.MsgCreateProvider;
                    };
                    updateProvider(value: _49.MsgUpdateProvider): {
                        typeUrl: string;
                        value: _49.MsgUpdateProvider;
                    };
                    deleteProvider(value: _49.MsgDeleteProvider): {
                        typeUrl: string;
                        value: _49.MsgDeleteProvider;
                    };
                };
                toJSON: {
                    createProvider(value: _49.MsgCreateProvider): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateProvider(value: _49.MsgUpdateProvider): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deleteProvider(value: _49.MsgDeleteProvider): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createProvider(value: any): {
                        typeUrl: string;
                        value: _49.MsgCreateProvider;
                    };
                    updateProvider(value: any): {
                        typeUrl: string;
                        value: _49.MsgUpdateProvider;
                    };
                    deleteProvider(value: any): {
                        typeUrl: string;
                        value: _49.MsgDeleteProvider;
                    };
                };
                fromPartial: {
                    createProvider(value: _49.MsgCreateProvider): {
                        typeUrl: string;
                        value: _49.MsgCreateProvider;
                    };
                    updateProvider(value: _49.MsgUpdateProvider): {
                        typeUrl: string;
                        value: _49.MsgUpdateProvider;
                    };
                    deleteProvider(value: _49.MsgDeleteProvider): {
                        typeUrl: string;
                        value: _49.MsgDeleteProvider;
                    };
                };
            };
            AminoConverter: {
                "/akash.provider.v1beta1.MsgCreateProvider": {
                    aminoType: string;
                    toAmino: ({ owner, hostUri, attributes, info }: _49.MsgCreateProvider) => {
                        owner: string;
                        host_uri: string;
                        attributes: {
                            key: string;
                            value: string;
                        }[];
                        info: {
                            email: string;
                            website: string;
                        };
                    };
                    fromAmino: ({ owner, host_uri, attributes, info }: {
                        owner: string;
                        host_uri: string;
                        attributes: {
                            key: string;
                            value: string;
                        }[];
                        info: {
                            email: string;
                            website: string;
                        };
                    }) => _49.MsgCreateProvider;
                };
                "/akash.provider.v1beta1.MsgUpdateProvider": {
                    aminoType: string;
                    toAmino: ({ owner, hostUri, attributes, info }: _49.MsgUpdateProvider) => {
                        owner: string;
                        host_uri: string;
                        attributes: {
                            key: string;
                            value: string;
                        }[];
                        info: {
                            email: string;
                            website: string;
                        };
                    };
                    fromAmino: ({ owner, host_uri, attributes, info }: {
                        owner: string;
                        host_uri: string;
                        attributes: {
                            key: string;
                            value: string;
                        }[];
                        info: {
                            email: string;
                            website: string;
                        };
                    }) => _49.MsgUpdateProvider;
                };
                "/akash.provider.v1beta1.MsgDeleteProvider": {
                    aminoType: string;
                    toAmino: ({ owner }: _49.MsgDeleteProvider) => {
                        owner: string;
                    };
                    fromAmino: ({ owner }: {
                        owner: string;
                    }) => _49.MsgDeleteProvider;
                };
            };
            ProviderInfo: {
                encode(message: _49.ProviderInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.ProviderInfo;
                fromJSON(object: any): _49.ProviderInfo;
                toJSON(message: _49.ProviderInfo): unknown;
                fromPartial(object: {
                    email?: string;
                    website?: string;
                }): _49.ProviderInfo;
            };
            MsgCreateProvider: {
                encode(message: _49.MsgCreateProvider, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgCreateProvider;
                fromJSON(object: any): _49.MsgCreateProvider;
                toJSON(message: _49.MsgCreateProvider): unknown;
                fromPartial(object: {
                    owner?: string;
                    hostUri?: string;
                    attributes?: {
                        key?: string;
                        value?: string;
                    }[];
                    info?: {
                        email?: string;
                        website?: string;
                    };
                }): _49.MsgCreateProvider;
            };
            MsgCreateProviderResponse: {
                encode(_: _49.MsgCreateProviderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgCreateProviderResponse;
                fromJSON(_: any): _49.MsgCreateProviderResponse;
                toJSON(_: _49.MsgCreateProviderResponse): unknown;
                fromPartial(_: {}): _49.MsgCreateProviderResponse;
            };
            MsgUpdateProvider: {
                encode(message: _49.MsgUpdateProvider, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgUpdateProvider;
                fromJSON(object: any): _49.MsgUpdateProvider;
                toJSON(message: _49.MsgUpdateProvider): unknown;
                fromPartial(object: {
                    owner?: string;
                    hostUri?: string;
                    attributes?: {
                        key?: string;
                        value?: string;
                    }[];
                    info?: {
                        email?: string;
                        website?: string;
                    };
                }): _49.MsgUpdateProvider;
            };
            MsgUpdateProviderResponse: {
                encode(_: _49.MsgUpdateProviderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgUpdateProviderResponse;
                fromJSON(_: any): _49.MsgUpdateProviderResponse;
                toJSON(_: _49.MsgUpdateProviderResponse): unknown;
                fromPartial(_: {}): _49.MsgUpdateProviderResponse;
            };
            MsgDeleteProvider: {
                encode(message: _49.MsgDeleteProvider, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgDeleteProvider;
                fromJSON(object: any): _49.MsgDeleteProvider;
                toJSON(message: _49.MsgDeleteProvider): unknown;
                fromPartial(object: {
                    owner?: string;
                }): _49.MsgDeleteProvider;
            };
            MsgDeleteProviderResponse: {
                encode(_: _49.MsgDeleteProviderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgDeleteProviderResponse;
                fromJSON(_: any): _49.MsgDeleteProviderResponse;
                toJSON(_: _49.MsgDeleteProviderResponse): unknown;
                fromPartial(_: {}): _49.MsgDeleteProviderResponse;
            };
            Provider: {
                encode(message: _49.Provider, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.Provider;
                fromJSON(object: any): _49.Provider;
                toJSON(message: _49.Provider): unknown;
                fromPartial(object: {
                    owner?: string;
                    hostUri?: string;
                    attributes?: {
                        key?: string;
                        value?: string;
                    }[];
                    info?: {
                        email?: string;
                        website?: string;
                    };
                }): _49.Provider;
            };
        };
        const v1beta2: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createProvider(value: _51.MsgCreateProvider): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateProvider(value: _51.MsgUpdateProvider): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteProvider(value: _51.MsgDeleteProvider): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createProvider(value: _51.MsgCreateProvider): {
                        typeUrl: string;
                        value: _51.MsgCreateProvider;
                    };
                    updateProvider(value: _51.MsgUpdateProvider): {
                        typeUrl: string;
                        value: _51.MsgUpdateProvider;
                    };
                    deleteProvider(value: _51.MsgDeleteProvider): {
                        typeUrl: string;
                        value: _51.MsgDeleteProvider;
                    };
                };
                toJSON: {
                    createProvider(value: _51.MsgCreateProvider): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateProvider(value: _51.MsgUpdateProvider): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deleteProvider(value: _51.MsgDeleteProvider): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createProvider(value: any): {
                        typeUrl: string;
                        value: _51.MsgCreateProvider;
                    };
                    updateProvider(value: any): {
                        typeUrl: string;
                        value: _51.MsgUpdateProvider;
                    };
                    deleteProvider(value: any): {
                        typeUrl: string;
                        value: _51.MsgDeleteProvider;
                    };
                };
                fromPartial: {
                    createProvider(value: _51.MsgCreateProvider): {
                        typeUrl: string;
                        value: _51.MsgCreateProvider;
                    };
                    updateProvider(value: _51.MsgUpdateProvider): {
                        typeUrl: string;
                        value: _51.MsgUpdateProvider;
                    };
                    deleteProvider(value: _51.MsgDeleteProvider): {
                        typeUrl: string;
                        value: _51.MsgDeleteProvider;
                    };
                };
            };
            AminoConverter: {
                "/akash.provider.v1beta2.MsgCreateProvider": {
                    aminoType: string;
                    toAmino: ({ owner, hostUri, attributes, info }: _51.MsgCreateProvider) => {
                        owner: string;
                        host_uri: string;
                        attributes: {
                            key: string;
                            value: string;
                        }[];
                        info: {
                            email: string;
                            website: string;
                        };
                    };
                    fromAmino: ({ owner, host_uri, attributes, info }: {
                        owner: string;
                        host_uri: string;
                        attributes: {
                            key: string;
                            value: string;
                        }[];
                        info: {
                            email: string;
                            website: string;
                        };
                    }) => _51.MsgCreateProvider;
                };
                "/akash.provider.v1beta2.MsgUpdateProvider": {
                    aminoType: string;
                    toAmino: ({ owner, hostUri, attributes, info }: _51.MsgUpdateProvider) => {
                        owner: string;
                        host_uri: string;
                        attributes: {
                            key: string;
                            value: string;
                        }[];
                        info: {
                            email: string;
                            website: string;
                        };
                    };
                    fromAmino: ({ owner, host_uri, attributes, info }: {
                        owner: string;
                        host_uri: string;
                        attributes: {
                            key: string;
                            value: string;
                        }[];
                        info: {
                            email: string;
                            website: string;
                        };
                    }) => _51.MsgUpdateProvider;
                };
                "/akash.provider.v1beta2.MsgDeleteProvider": {
                    aminoType: string;
                    toAmino: ({ owner }: _51.MsgDeleteProvider) => {
                        owner: string;
                    };
                    fromAmino: ({ owner }: {
                        owner: string;
                    }) => _51.MsgDeleteProvider;
                };
            };
            QueryProvidersRequest: {
                encode(message: _52.QueryProvidersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryProvidersRequest;
                fromJSON(object: any): _52.QueryProvidersRequest;
                toJSON(message: _52.QueryProvidersRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _52.QueryProvidersRequest;
            };
            QueryProvidersResponse: {
                encode(message: _52.QueryProvidersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryProvidersResponse;
                fromJSON(object: any): _52.QueryProvidersResponse;
                toJSON(message: _52.QueryProvidersResponse): unknown;
                fromPartial(object: {
                    providers?: {
                        owner?: string;
                        hostUri?: string;
                        attributes?: {
                            key?: string;
                            value?: string;
                        }[];
                        info?: {
                            email?: string;
                            website?: string;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _52.QueryProvidersResponse;
            };
            QueryProviderRequest: {
                encode(message: _52.QueryProviderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryProviderRequest;
                fromJSON(object: any): _52.QueryProviderRequest;
                toJSON(message: _52.QueryProviderRequest): unknown;
                fromPartial(object: {
                    owner?: string;
                }): _52.QueryProviderRequest;
            };
            QueryProviderResponse: {
                encode(message: _52.QueryProviderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryProviderResponse;
                fromJSON(object: any): _52.QueryProviderResponse;
                toJSON(message: _52.QueryProviderResponse): unknown;
                fromPartial(object: {
                    provider?: {
                        owner?: string;
                        hostUri?: string;
                        attributes?: {
                            key?: string;
                            value?: string;
                        }[];
                        info?: {
                            email?: string;
                            website?: string;
                        };
                    };
                }): _52.QueryProviderResponse;
            };
            ProviderInfo: {
                encode(message: _51.ProviderInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.ProviderInfo;
                fromJSON(object: any): _51.ProviderInfo;
                toJSON(message: _51.ProviderInfo): unknown;
                fromPartial(object: {
                    email?: string;
                    website?: string;
                }): _51.ProviderInfo;
            };
            MsgCreateProvider: {
                encode(message: _51.MsgCreateProvider, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.MsgCreateProvider;
                fromJSON(object: any): _51.MsgCreateProvider;
                toJSON(message: _51.MsgCreateProvider): unknown;
                fromPartial(object: {
                    owner?: string;
                    hostUri?: string;
                    attributes?: {
                        key?: string;
                        value?: string;
                    }[];
                    info?: {
                        email?: string;
                        website?: string;
                    };
                }): _51.MsgCreateProvider;
            };
            MsgCreateProviderResponse: {
                encode(_: _51.MsgCreateProviderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.MsgCreateProviderResponse;
                fromJSON(_: any): _51.MsgCreateProviderResponse;
                toJSON(_: _51.MsgCreateProviderResponse): unknown;
                fromPartial(_: {}): _51.MsgCreateProviderResponse;
            };
            MsgUpdateProvider: {
                encode(message: _51.MsgUpdateProvider, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.MsgUpdateProvider;
                fromJSON(object: any): _51.MsgUpdateProvider;
                toJSON(message: _51.MsgUpdateProvider): unknown;
                fromPartial(object: {
                    owner?: string;
                    hostUri?: string;
                    attributes?: {
                        key?: string;
                        value?: string;
                    }[];
                    info?: {
                        email?: string;
                        website?: string;
                    };
                }): _51.MsgUpdateProvider;
            };
            MsgUpdateProviderResponse: {
                encode(_: _51.MsgUpdateProviderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.MsgUpdateProviderResponse;
                fromJSON(_: any): _51.MsgUpdateProviderResponse;
                toJSON(_: _51.MsgUpdateProviderResponse): unknown;
                fromPartial(_: {}): _51.MsgUpdateProviderResponse;
            };
            MsgDeleteProvider: {
                encode(message: _51.MsgDeleteProvider, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.MsgDeleteProvider;
                fromJSON(object: any): _51.MsgDeleteProvider;
                toJSON(message: _51.MsgDeleteProvider): unknown;
                fromPartial(object: {
                    owner?: string;
                }): _51.MsgDeleteProvider;
            };
            MsgDeleteProviderResponse: {
                encode(_: _51.MsgDeleteProviderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.MsgDeleteProviderResponse;
                fromJSON(_: any): _51.MsgDeleteProviderResponse;
                toJSON(_: _51.MsgDeleteProviderResponse): unknown;
                fromPartial(_: {}): _51.MsgDeleteProviderResponse;
            };
            Provider: {
                encode(message: _51.Provider, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.Provider;
                fromJSON(object: any): _51.Provider;
                toJSON(message: _51.Provider): unknown;
                fromPartial(object: {
                    owner?: string;
                    hostUri?: string;
                    attributes?: {
                        key?: string;
                        value?: string;
                    }[];
                    info?: {
                        email?: string;
                        website?: string;
                    };
                }): _51.Provider;
            };
            GenesisState: {
                encode(message: _50.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.GenesisState;
                fromJSON(object: any): _50.GenesisState;
                toJSON(message: _50.GenesisState): unknown;
                fromPartial(object: {
                    providers?: {
                        owner?: string;
                        hostUri?: string;
                        attributes?: {
                            key?: string;
                            value?: string;
                        }[];
                        info?: {
                            email?: string;
                            website?: string;
                        };
                    }[];
                }): _50.GenesisState;
            };
        };
    }
}
