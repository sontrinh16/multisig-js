import * as _592 from "./deposit/v1/deposit";
import * as _593 from "./deposit/v1/events";
import * as _594 from "./deposit/v1/querier";
import * as _595 from "./mint/v1/genesis";
import * as _596 from "./mint/v1/inflation";
import * as _597 from "./node/v1/events";
import * as _598 from "./node/v1/genesis";
import * as _599 from "./node/v1/msg";
import * as _600 from "./node/v1/node";
import * as _601 from "./node/v1/params";
import * as _602 from "./node/v1/querier";
import * as _603 from "./plan/v1/events";
import * as _604 from "./plan/v1/genesis";
import * as _605 from "./plan/v1/msg";
import * as _606 from "./plan/v1/plan";
import * as _607 from "./plan/v1/querier";
import * as _608 from "./provider/v1/events";
import * as _609 from "./provider/v1/genesis";
import * as _610 from "./provider/v1/msg";
import * as _611 from "./provider/v1/params";
import * as _612 from "./provider/v1/provider";
import * as _613 from "./provider/v1/querier";
import * as _614 from "./session/v1/events";
import * as _615 from "./session/v1/genesis";
import * as _616 from "./session/v1/msg";
import * as _617 from "./session/v1/params";
import * as _618 from "./session/v1/proof";
import * as _619 from "./session/v1/querier";
import * as _620 from "./session/v1/session";
import * as _621 from "./subscription/v1/events";
import * as _622 from "./subscription/v1/genesis";
import * as _623 from "./subscription/v1/msg";
import * as _624 from "./subscription/v1/params";
import * as _625 from "./subscription/v1/querier";
import * as _626 from "./subscription/v1/quota";
import * as _627 from "./subscription/v1/subscription";
import * as _628 from "./swap/v1/events";
import * as _629 from "./swap/v1/genesis";
import * as _630 from "./swap/v1/msg";
import * as _631 from "./swap/v1/params";
import * as _632 from "./swap/v1/querier";
import * as _633 from "./swap/v1/swap";
import * as _634 from "./types/v1/bandwidth";
import * as _635 from "./types/v1/status";
import * as _636 from "./vpn/v1/genesis";
export declare namespace sentinel {
    namespace deposit {
        const v1: {
            QueryDepositsRequest: {
                encode(message: _594.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _594.QueryDepositsRequest;
                fromJSON(object: any): _594.QueryDepositsRequest;
                toJSON(message: _594.QueryDepositsRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _594.QueryDepositsRequest;
            };
            QueryDepositRequest: {
                encode(message: _594.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _594.QueryDepositRequest;
                fromJSON(object: any): _594.QueryDepositRequest;
                toJSON(message: _594.QueryDepositRequest): unknown;
                fromPartial(object: {
                    address?: string;
                }): _594.QueryDepositRequest;
            };
            QueryDepositsResponse: {
                encode(message: _594.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _594.QueryDepositsResponse;
                fromJSON(object: any): _594.QueryDepositsResponse;
                toJSON(message: _594.QueryDepositsResponse): unknown;
                fromPartial(object: {
                    deposits?: {
                        address?: string;
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _594.QueryDepositsResponse;
            };
            QueryDepositResponse: {
                encode(message: _594.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _594.QueryDepositResponse;
                fromJSON(object: any): _594.QueryDepositResponse;
                toJSON(message: _594.QueryDepositResponse): unknown;
                fromPartial(object: {
                    deposit?: {
                        address?: string;
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _594.QueryDepositResponse;
            };
            EventAdd: {
                encode(message: _593.EventAdd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _593.EventAdd;
                fromJSON(object: any): _593.EventAdd;
                toJSON(message: _593.EventAdd): unknown;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _593.EventAdd;
            };
            EventSubtract: {
                encode(message: _593.EventSubtract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _593.EventSubtract;
                fromJSON(object: any): _593.EventSubtract;
                toJSON(message: _593.EventSubtract): unknown;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _593.EventSubtract;
            };
            Deposit: {
                encode(message: _592.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _592.Deposit;
                fromJSON(object: any): _592.Deposit;
                toJSON(message: _592.Deposit): unknown;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _592.Deposit;
            };
        };
    }
    namespace mint {
        const v1: {
            Inflation: {
                encode(message: _596.Inflation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _596.Inflation;
                fromJSON(object: any): _596.Inflation;
                toJSON(message: _596.Inflation): unknown;
                fromPartial(object: {
                    max?: string;
                    min?: string;
                    rateChange?: string;
                    timestamp?: Date;
                }): _596.Inflation;
            };
            GenesisState: {
                encode(message: _595.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _595.GenesisState;
                fromJSON(object: any): _595.GenesisState;
                toJSON(message: _595.GenesisState): unknown;
                fromPartial(object: {
                    inflations?: {
                        max?: string;
                        min?: string;
                        rateChange?: string;
                        timestamp?: Date;
                    }[];
                }): _595.GenesisState;
            };
        };
    }
    namespace node {
        const v1: {
            QueryNodesRequest: {
                encode(message: _602.QueryNodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _602.QueryNodesRequest;
                fromJSON(object: any): _602.QueryNodesRequest;
                toJSON(message: _602.QueryNodesRequest): unknown;
                fromPartial(object: {
                    status?: _635.Status;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _602.QueryNodesRequest;
            };
            QueryNodesForProviderRequest: {
                encode(message: _602.QueryNodesForProviderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _602.QueryNodesForProviderRequest;
                fromJSON(object: any): _602.QueryNodesForProviderRequest;
                toJSON(message: _602.QueryNodesForProviderRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    status?: _635.Status;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _602.QueryNodesForProviderRequest;
            };
            QueryNodeRequest: {
                encode(message: _602.QueryNodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _602.QueryNodeRequest;
                fromJSON(object: any): _602.QueryNodeRequest;
                toJSON(message: _602.QueryNodeRequest): unknown;
                fromPartial(object: {
                    address?: string;
                }): _602.QueryNodeRequest;
            };
            QueryParamsRequest: {
                encode(_: _602.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _602.QueryParamsRequest;
                fromJSON(_: any): _602.QueryParamsRequest;
                toJSON(_: _602.QueryParamsRequest): unknown;
                fromPartial(_: {}): _602.QueryParamsRequest;
            };
            QueryNodesResponse: {
                encode(message: _602.QueryNodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _602.QueryNodesResponse;
                fromJSON(object: any): _602.QueryNodesResponse;
                toJSON(message: _602.QueryNodesResponse): unknown;
                fromPartial(object: {
                    nodes?: {
                        address?: string;
                        provider?: string;
                        price?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        remoteUrl?: string;
                        status?: _635.Status;
                        statusAt?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _602.QueryNodesResponse;
            };
            QueryNodesForProviderResponse: {
                encode(message: _602.QueryNodesForProviderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _602.QueryNodesForProviderResponse;
                fromJSON(object: any): _602.QueryNodesForProviderResponse;
                toJSON(message: _602.QueryNodesForProviderResponse): unknown;
                fromPartial(object: {
                    nodes?: {
                        address?: string;
                        provider?: string;
                        price?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        remoteUrl?: string;
                        status?: _635.Status;
                        statusAt?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _602.QueryNodesForProviderResponse;
            };
            QueryNodeResponse: {
                encode(message: _602.QueryNodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _602.QueryNodeResponse;
                fromJSON(object: any): _602.QueryNodeResponse;
                toJSON(message: _602.QueryNodeResponse): unknown;
                fromPartial(object: {
                    node?: {
                        address?: string;
                        provider?: string;
                        price?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        remoteUrl?: string;
                        status?: _635.Status;
                        statusAt?: Date;
                    };
                }): _602.QueryNodeResponse;
            };
            QueryParamsResponse: {
                encode(message: _602.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _602.QueryParamsResponse;
                fromJSON(object: any): _602.QueryParamsResponse;
                toJSON(message: _602.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        deposit?: {
                            denom?: string;
                            amount?: string;
                        };
                        inactiveDuration?: string;
                    };
                }): _602.QueryParamsResponse;
            };
            Params: {
                encode(message: _601.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _601.Params;
                fromJSON(object: any): _601.Params;
                toJSON(message: _601.Params): unknown;
                fromPartial(object: {
                    deposit?: {
                        denom?: string;
                        amount?: string;
                    };
                    inactiveDuration?: string;
                }): _601.Params;
            };
            Node: {
                encode(message: _600.Node, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _600.Node;
                fromJSON(object: any): _600.Node;
                toJSON(message: _600.Node): unknown;
                fromPartial(object: {
                    address?: string;
                    provider?: string;
                    price?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    remoteUrl?: string;
                    status?: _635.Status;
                    statusAt?: Date;
                }): _600.Node;
            };
            MsgRegisterRequest: {
                encode(message: _599.MsgRegisterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _599.MsgRegisterRequest;
                fromJSON(object: any): _599.MsgRegisterRequest;
                toJSON(message: _599.MsgRegisterRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    provider?: string;
                    price?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    remoteUrl?: string;
                }): _599.MsgRegisterRequest;
            };
            MsgUpdateRequest: {
                encode(message: _599.MsgUpdateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _599.MsgUpdateRequest;
                fromJSON(object: any): _599.MsgUpdateRequest;
                toJSON(message: _599.MsgUpdateRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    provider?: string;
                    price?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    remoteUrl?: string;
                }): _599.MsgUpdateRequest;
            };
            MsgSetStatusRequest: {
                encode(message: _599.MsgSetStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _599.MsgSetStatusRequest;
                fromJSON(object: any): _599.MsgSetStatusRequest;
                toJSON(message: _599.MsgSetStatusRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    status?: _635.Status;
                }): _599.MsgSetStatusRequest;
            };
            MsgRegisterResponse: {
                encode(_: _599.MsgRegisterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _599.MsgRegisterResponse;
                fromJSON(_: any): _599.MsgRegisterResponse;
                toJSON(_: _599.MsgRegisterResponse): unknown;
                fromPartial(_: {}): _599.MsgRegisterResponse;
            };
            MsgUpdateResponse: {
                encode(_: _599.MsgUpdateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _599.MsgUpdateResponse;
                fromJSON(_: any): _599.MsgUpdateResponse;
                toJSON(_: _599.MsgUpdateResponse): unknown;
                fromPartial(_: {}): _599.MsgUpdateResponse;
            };
            MsgSetStatusResponse: {
                encode(_: _599.MsgSetStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _599.MsgSetStatusResponse;
                fromJSON(_: any): _599.MsgSetStatusResponse;
                toJSON(_: _599.MsgSetStatusResponse): unknown;
                fromPartial(_: {}): _599.MsgSetStatusResponse;
            };
            GenesisState: {
                encode(message: _598.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _598.GenesisState;
                fromJSON(object: any): _598.GenesisState;
                toJSON(message: _598.GenesisState): unknown;
                fromPartial(object: {
                    nodes?: {
                        address?: string;
                        provider?: string;
                        price?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        remoteUrl?: string;
                        status?: _635.Status;
                        statusAt?: Date;
                    }[];
                    params?: {
                        deposit?: {
                            denom?: string;
                            amount?: string;
                        };
                        inactiveDuration?: string;
                    };
                }): _598.GenesisState;
            };
            EventRegister: {
                encode(message: _597.EventRegister, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _597.EventRegister;
                fromJSON(object: any): _597.EventRegister;
                toJSON(message: _597.EventRegister): unknown;
                fromPartial(object: {
                    address?: string;
                    provider?: string;
                }): _597.EventRegister;
            };
            EventUpdate: {
                encode(message: _597.EventUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _597.EventUpdate;
                fromJSON(object: any): _597.EventUpdate;
                toJSON(message: _597.EventUpdate): unknown;
                fromPartial(object: {
                    address?: string;
                    provider?: string;
                }): _597.EventUpdate;
            };
            EventSetStatus: {
                encode(message: _597.EventSetStatus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _597.EventSetStatus;
                fromJSON(object: any): _597.EventSetStatus;
                toJSON(message: _597.EventSetStatus): unknown;
                fromPartial(object: {
                    address?: string;
                    status?: _635.Status;
                }): _597.EventSetStatus;
            };
        };
    }
    namespace plan {
        const v1: {
            QueryPlansRequest: {
                encode(message: _607.QueryPlansRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _607.QueryPlansRequest;
                fromJSON(object: any): _607.QueryPlansRequest;
                toJSON(message: _607.QueryPlansRequest): unknown;
                fromPartial(object: {
                    status?: _635.Status;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _607.QueryPlansRequest;
            };
            QueryPlansForProviderRequest: {
                encode(message: _607.QueryPlansForProviderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _607.QueryPlansForProviderRequest;
                fromJSON(object: any): _607.QueryPlansForProviderRequest;
                toJSON(message: _607.QueryPlansForProviderRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    status?: _635.Status;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _607.QueryPlansForProviderRequest;
            };
            QueryPlanRequest: {
                encode(message: _607.QueryPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _607.QueryPlanRequest;
                fromJSON(object: any): _607.QueryPlanRequest;
                toJSON(message: _607.QueryPlanRequest): unknown;
                fromPartial(object: {
                    id?: any;
                }): _607.QueryPlanRequest;
            };
            QueryNodesForPlanRequest: {
                encode(message: _607.QueryNodesForPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _607.QueryNodesForPlanRequest;
                fromJSON(object: any): _607.QueryNodesForPlanRequest;
                toJSON(message: _607.QueryNodesForPlanRequest): unknown;
                fromPartial(object: {
                    id?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _607.QueryNodesForPlanRequest;
            };
            QueryPlansResponse: {
                encode(message: _607.QueryPlansResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _607.QueryPlansResponse;
                fromJSON(object: any): _607.QueryPlansResponse;
                toJSON(message: _607.QueryPlansResponse): unknown;
                fromPartial(object: {
                    plans?: {
                        id?: any;
                        provider?: string;
                        price?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        validity?: string;
                        bytes?: string;
                        status?: _635.Status;
                        statusAt?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _607.QueryPlansResponse;
            };
            QueryPlansForProviderResponse: {
                encode(message: _607.QueryPlansForProviderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _607.QueryPlansForProviderResponse;
                fromJSON(object: any): _607.QueryPlansForProviderResponse;
                toJSON(message: _607.QueryPlansForProviderResponse): unknown;
                fromPartial(object: {
                    plans?: {
                        id?: any;
                        provider?: string;
                        price?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        validity?: string;
                        bytes?: string;
                        status?: _635.Status;
                        statusAt?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _607.QueryPlansForProviderResponse;
            };
            QueryPlanResponse: {
                encode(message: _607.QueryPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _607.QueryPlanResponse;
                fromJSON(object: any): _607.QueryPlanResponse;
                toJSON(message: _607.QueryPlanResponse): unknown;
                fromPartial(object: {
                    plan?: {
                        id?: any;
                        provider?: string;
                        price?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        validity?: string;
                        bytes?: string;
                        status?: _635.Status;
                        statusAt?: Date;
                    };
                }): _607.QueryPlanResponse;
            };
            QueryNodesForPlanResponse: {
                encode(message: _607.QueryNodesForPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _607.QueryNodesForPlanResponse;
                fromJSON(object: any): _607.QueryNodesForPlanResponse;
                toJSON(message: _607.QueryNodesForPlanResponse): unknown;
                fromPartial(object: {
                    nodes?: {
                        address?: string;
                        provider?: string;
                        price?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        remoteUrl?: string;
                        status?: _635.Status;
                        statusAt?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _607.QueryNodesForPlanResponse;
            };
            Plan: {
                encode(message: _606.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _606.Plan;
                fromJSON(object: any): _606.Plan;
                toJSON(message: _606.Plan): unknown;
                fromPartial(object: {
                    id?: any;
                    provider?: string;
                    price?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    validity?: string;
                    bytes?: string;
                    status?: _635.Status;
                    statusAt?: Date;
                }): _606.Plan;
            };
            MsgAddRequest: {
                encode(message: _605.MsgAddRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _605.MsgAddRequest;
                fromJSON(object: any): _605.MsgAddRequest;
                toJSON(message: _605.MsgAddRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    price?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    validity?: string;
                    bytes?: string;
                }): _605.MsgAddRequest;
            };
            MsgSetStatusRequest: {
                encode(message: _605.MsgSetStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _605.MsgSetStatusRequest;
                fromJSON(object: any): _605.MsgSetStatusRequest;
                toJSON(message: _605.MsgSetStatusRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    id?: any;
                    status?: _635.Status;
                }): _605.MsgSetStatusRequest;
            };
            MsgAddNodeRequest: {
                encode(message: _605.MsgAddNodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _605.MsgAddNodeRequest;
                fromJSON(object: any): _605.MsgAddNodeRequest;
                toJSON(message: _605.MsgAddNodeRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    id?: any;
                    address?: string;
                }): _605.MsgAddNodeRequest;
            };
            MsgRemoveNodeRequest: {
                encode(message: _605.MsgRemoveNodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _605.MsgRemoveNodeRequest;
                fromJSON(object: any): _605.MsgRemoveNodeRequest;
                toJSON(message: _605.MsgRemoveNodeRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    id?: any;
                    address?: string;
                }): _605.MsgRemoveNodeRequest;
            };
            MsgAddResponse: {
                encode(_: _605.MsgAddResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _605.MsgAddResponse;
                fromJSON(_: any): _605.MsgAddResponse;
                toJSON(_: _605.MsgAddResponse): unknown;
                fromPartial(_: {}): _605.MsgAddResponse;
            };
            MsgSetStatusResponse: {
                encode(_: _605.MsgSetStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _605.MsgSetStatusResponse;
                fromJSON(_: any): _605.MsgSetStatusResponse;
                toJSON(_: _605.MsgSetStatusResponse): unknown;
                fromPartial(_: {}): _605.MsgSetStatusResponse;
            };
            MsgAddNodeResponse: {
                encode(_: _605.MsgAddNodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _605.MsgAddNodeResponse;
                fromJSON(_: any): _605.MsgAddNodeResponse;
                toJSON(_: _605.MsgAddNodeResponse): unknown;
                fromPartial(_: {}): _605.MsgAddNodeResponse;
            };
            MsgRemoveNodeResponse: {
                encode(_: _605.MsgRemoveNodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _605.MsgRemoveNodeResponse;
                fromJSON(_: any): _605.MsgRemoveNodeResponse;
                toJSON(_: _605.MsgRemoveNodeResponse): unknown;
                fromPartial(_: {}): _605.MsgRemoveNodeResponse;
            };
            GenesisPlan: {
                encode(message: _604.GenesisPlan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _604.GenesisPlan;
                fromJSON(object: any): _604.GenesisPlan;
                toJSON(message: _604.GenesisPlan): unknown;
                fromPartial(object: {
                    plan?: {
                        id?: any;
                        provider?: string;
                        price?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        validity?: string;
                        bytes?: string;
                        status?: _635.Status;
                        statusAt?: Date;
                    };
                    nodes?: string[];
                }): _604.GenesisPlan;
            };
            EventAdd: {
                encode(message: _603.EventAdd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _603.EventAdd;
                fromJSON(object: any): _603.EventAdd;
                toJSON(message: _603.EventAdd): unknown;
                fromPartial(object: {
                    id?: any;
                    provider?: string;
                }): _603.EventAdd;
            };
            EventSetStatus: {
                encode(message: _603.EventSetStatus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _603.EventSetStatus;
                fromJSON(object: any): _603.EventSetStatus;
                toJSON(message: _603.EventSetStatus): unknown;
                fromPartial(object: {
                    id?: any;
                    provider?: string;
                    status?: _635.Status;
                }): _603.EventSetStatus;
            };
            EventAddNode: {
                encode(message: _603.EventAddNode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _603.EventAddNode;
                fromJSON(object: any): _603.EventAddNode;
                toJSON(message: _603.EventAddNode): unknown;
                fromPartial(object: {
                    id?: any;
                    node?: string;
                    provider?: string;
                }): _603.EventAddNode;
            };
            EventRemoveNode: {
                encode(message: _603.EventRemoveNode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _603.EventRemoveNode;
                fromJSON(object: any): _603.EventRemoveNode;
                toJSON(message: _603.EventRemoveNode): unknown;
                fromPartial(object: {
                    id?: any;
                    node?: string;
                    provider?: string;
                }): _603.EventRemoveNode;
            };
        };
    }
    namespace provider {
        const v1: {
            QueryProvidersRequest: {
                encode(message: _613.QueryProvidersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _613.QueryProvidersRequest;
                fromJSON(object: any): _613.QueryProvidersRequest;
                toJSON(message: _613.QueryProvidersRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _613.QueryProvidersRequest;
            };
            QueryProviderRequest: {
                encode(message: _613.QueryProviderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _613.QueryProviderRequest;
                fromJSON(object: any): _613.QueryProviderRequest;
                toJSON(message: _613.QueryProviderRequest): unknown;
                fromPartial(object: {
                    address?: string;
                }): _613.QueryProviderRequest;
            };
            QueryParamsRequest: {
                encode(_: _613.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _613.QueryParamsRequest;
                fromJSON(_: any): _613.QueryParamsRequest;
                toJSON(_: _613.QueryParamsRequest): unknown;
                fromPartial(_: {}): _613.QueryParamsRequest;
            };
            QueryProvidersResponse: {
                encode(message: _613.QueryProvidersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _613.QueryProvidersResponse;
                fromJSON(object: any): _613.QueryProvidersResponse;
                toJSON(message: _613.QueryProvidersResponse): unknown;
                fromPartial(object: {
                    providers?: {
                        address?: string;
                        name?: string;
                        identity?: string;
                        website?: string;
                        description?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _613.QueryProvidersResponse;
            };
            QueryProviderResponse: {
                encode(message: _613.QueryProviderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _613.QueryProviderResponse;
                fromJSON(object: any): _613.QueryProviderResponse;
                toJSON(message: _613.QueryProviderResponse): unknown;
                fromPartial(object: {
                    provider?: {
                        address?: string;
                        name?: string;
                        identity?: string;
                        website?: string;
                        description?: string;
                    };
                }): _613.QueryProviderResponse;
            };
            QueryParamsResponse: {
                encode(message: _613.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _613.QueryParamsResponse;
                fromJSON(object: any): _613.QueryParamsResponse;
                toJSON(message: _613.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        deposit?: {
                            denom?: string;
                            amount?: string;
                        };
                    };
                }): _613.QueryParamsResponse;
            };
            Provider: {
                encode(message: _612.Provider, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _612.Provider;
                fromJSON(object: any): _612.Provider;
                toJSON(message: _612.Provider): unknown;
                fromPartial(object: {
                    address?: string;
                    name?: string;
                    identity?: string;
                    website?: string;
                    description?: string;
                }): _612.Provider;
            };
            Params: {
                encode(message: _611.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _611.Params;
                fromJSON(object: any): _611.Params;
                toJSON(message: _611.Params): unknown;
                fromPartial(object: {
                    deposit?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _611.Params;
            };
            MsgRegisterRequest: {
                encode(message: _610.MsgRegisterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _610.MsgRegisterRequest;
                fromJSON(object: any): _610.MsgRegisterRequest;
                toJSON(message: _610.MsgRegisterRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    name?: string;
                    identity?: string;
                    website?: string;
                    description?: string;
                }): _610.MsgRegisterRequest;
            };
            MsgUpdateRequest: {
                encode(message: _610.MsgUpdateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _610.MsgUpdateRequest;
                fromJSON(object: any): _610.MsgUpdateRequest;
                toJSON(message: _610.MsgUpdateRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    name?: string;
                    identity?: string;
                    website?: string;
                    description?: string;
                }): _610.MsgUpdateRequest;
            };
            MsgRegisterResponse: {
                encode(_: _610.MsgRegisterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _610.MsgRegisterResponse;
                fromJSON(_: any): _610.MsgRegisterResponse;
                toJSON(_: _610.MsgRegisterResponse): unknown;
                fromPartial(_: {}): _610.MsgRegisterResponse;
            };
            MsgUpdateResponse: {
                encode(_: _610.MsgUpdateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _610.MsgUpdateResponse;
                fromJSON(_: any): _610.MsgUpdateResponse;
                toJSON(_: _610.MsgUpdateResponse): unknown;
                fromPartial(_: {}): _610.MsgUpdateResponse;
            };
            GenesisState: {
                encode(message: _609.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _609.GenesisState;
                fromJSON(object: any): _609.GenesisState;
                toJSON(message: _609.GenesisState): unknown;
                fromPartial(object: {
                    providers?: {
                        address?: string;
                        name?: string;
                        identity?: string;
                        website?: string;
                        description?: string;
                    }[];
                    params?: {
                        deposit?: {
                            denom?: string;
                            amount?: string;
                        };
                    };
                }): _609.GenesisState;
            };
            EventRegister: {
                encode(message: _608.EventRegister, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _608.EventRegister;
                fromJSON(object: any): _608.EventRegister;
                toJSON(message: _608.EventRegister): unknown;
                fromPartial(object: {
                    address?: string;
                }): _608.EventRegister;
            };
            EventUpdate: {
                encode(message: _608.EventUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _608.EventUpdate;
                fromJSON(object: any): _608.EventUpdate;
                toJSON(message: _608.EventUpdate): unknown;
                fromPartial(object: {
                    address?: string;
                }): _608.EventUpdate;
            };
        };
    }
    namespace session {
        const v1: {
            Session: {
                encode(message: _620.Session, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _620.Session;
                fromJSON(object: any): _620.Session;
                toJSON(message: _620.Session): unknown;
                fromPartial(object: {
                    id?: any;
                    subscription?: any;
                    node?: string;
                    address?: string;
                    duration?: string;
                    bandwidth?: {
                        upload?: string;
                        download?: string;
                    };
                    status?: _635.Status;
                    statusAt?: Date;
                }): _620.Session;
            };
            QuerySessionsRequest: {
                encode(message: _619.QuerySessionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _619.QuerySessionsRequest;
                fromJSON(object: any): _619.QuerySessionsRequest;
                toJSON(message: _619.QuerySessionsRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _619.QuerySessionsRequest;
            };
            QuerySessionsForAddressRequest: {
                encode(message: _619.QuerySessionsForAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _619.QuerySessionsForAddressRequest;
                fromJSON(object: any): _619.QuerySessionsForAddressRequest;
                toJSON(message: _619.QuerySessionsForAddressRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    status?: _635.Status;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _619.QuerySessionsForAddressRequest;
            };
            QuerySessionRequest: {
                encode(message: _619.QuerySessionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _619.QuerySessionRequest;
                fromJSON(object: any): _619.QuerySessionRequest;
                toJSON(message: _619.QuerySessionRequest): unknown;
                fromPartial(object: {
                    id?: any;
                }): _619.QuerySessionRequest;
            };
            QueryParamsRequest: {
                encode(_: _619.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _619.QueryParamsRequest;
                fromJSON(_: any): _619.QueryParamsRequest;
                toJSON(_: _619.QueryParamsRequest): unknown;
                fromPartial(_: {}): _619.QueryParamsRequest;
            };
            QuerySessionsResponse: {
                encode(message: _619.QuerySessionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _619.QuerySessionsResponse;
                fromJSON(object: any): _619.QuerySessionsResponse;
                toJSON(message: _619.QuerySessionsResponse): unknown;
                fromPartial(object: {
                    sessions?: {
                        id?: any;
                        subscription?: any;
                        node?: string;
                        address?: string;
                        duration?: string;
                        bandwidth?: {
                            upload?: string;
                            download?: string;
                        };
                        status?: _635.Status;
                        statusAt?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _619.QuerySessionsResponse;
            };
            QuerySessionsForAddressResponse: {
                encode(message: _619.QuerySessionsForAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _619.QuerySessionsForAddressResponse;
                fromJSON(object: any): _619.QuerySessionsForAddressResponse;
                toJSON(message: _619.QuerySessionsForAddressResponse): unknown;
                fromPartial(object: {
                    sessions?: {
                        id?: any;
                        subscription?: any;
                        node?: string;
                        address?: string;
                        duration?: string;
                        bandwidth?: {
                            upload?: string;
                            download?: string;
                        };
                        status?: _635.Status;
                        statusAt?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _619.QuerySessionsForAddressResponse;
            };
            QuerySessionResponse: {
                encode(message: _619.QuerySessionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _619.QuerySessionResponse;
                fromJSON(object: any): _619.QuerySessionResponse;
                toJSON(message: _619.QuerySessionResponse): unknown;
                fromPartial(object: {
                    session?: {
                        id?: any;
                        subscription?: any;
                        node?: string;
                        address?: string;
                        duration?: string;
                        bandwidth?: {
                            upload?: string;
                            download?: string;
                        };
                        status?: _635.Status;
                        statusAt?: Date;
                    };
                }): _619.QuerySessionResponse;
            };
            QueryParamsResponse: {
                encode(message: _619.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _619.QueryParamsResponse;
                fromJSON(object: any): _619.QueryParamsResponse;
                toJSON(message: _619.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        inactiveDuration?: string;
                        proofVerificationEnabled?: boolean;
                    };
                }): _619.QueryParamsResponse;
            };
            Proof: {
                encode(message: _618.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _618.Proof;
                fromJSON(object: any): _618.Proof;
                toJSON(message: _618.Proof): unknown;
                fromPartial(object: {
                    id?: any;
                    duration?: string;
                    bandwidth?: {
                        upload?: string;
                        download?: string;
                    };
                }): _618.Proof;
            };
            Params: {
                encode(message: _617.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _617.Params;
                fromJSON(object: any): _617.Params;
                toJSON(message: _617.Params): unknown;
                fromPartial(object: {
                    inactiveDuration?: string;
                    proofVerificationEnabled?: boolean;
                }): _617.Params;
            };
            MsgStartRequest: {
                encode(message: _616.MsgStartRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _616.MsgStartRequest;
                fromJSON(object: any): _616.MsgStartRequest;
                toJSON(message: _616.MsgStartRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    id?: any;
                    node?: string;
                }): _616.MsgStartRequest;
            };
            MsgUpdateRequest: {
                encode(message: _616.MsgUpdateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _616.MsgUpdateRequest;
                fromJSON(object: any): _616.MsgUpdateRequest;
                toJSON(message: _616.MsgUpdateRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    proof?: {
                        id?: any;
                        duration?: string;
                        bandwidth?: {
                            upload?: string;
                            download?: string;
                        };
                    };
                    signature?: Uint8Array;
                }): _616.MsgUpdateRequest;
            };
            MsgEndRequest: {
                encode(message: _616.MsgEndRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _616.MsgEndRequest;
                fromJSON(object: any): _616.MsgEndRequest;
                toJSON(message: _616.MsgEndRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    id?: any;
                    rating?: any;
                }): _616.MsgEndRequest;
            };
            MsgStartResponse: {
                encode(_: _616.MsgStartResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _616.MsgStartResponse;
                fromJSON(_: any): _616.MsgStartResponse;
                toJSON(_: _616.MsgStartResponse): unknown;
                fromPartial(_: {}): _616.MsgStartResponse;
            };
            MsgUpdateResponse: {
                encode(_: _616.MsgUpdateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _616.MsgUpdateResponse;
                fromJSON(_: any): _616.MsgUpdateResponse;
                toJSON(_: _616.MsgUpdateResponse): unknown;
                fromPartial(_: {}): _616.MsgUpdateResponse;
            };
            MsgEndResponse: {
                encode(_: _616.MsgEndResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _616.MsgEndResponse;
                fromJSON(_: any): _616.MsgEndResponse;
                toJSON(_: _616.MsgEndResponse): unknown;
                fromPartial(_: {}): _616.MsgEndResponse;
            };
            GenesisState: {
                encode(message: _615.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _615.GenesisState;
                fromJSON(object: any): _615.GenesisState;
                toJSON(message: _615.GenesisState): unknown;
                fromPartial(object: {
                    sessions?: {
                        id?: any;
                        subscription?: any;
                        node?: string;
                        address?: string;
                        duration?: string;
                        bandwidth?: {
                            upload?: string;
                            download?: string;
                        };
                        status?: _635.Status;
                        statusAt?: Date;
                    }[];
                    params?: {
                        inactiveDuration?: string;
                        proofVerificationEnabled?: boolean;
                    };
                }): _615.GenesisState;
            };
            EventStart: {
                encode(message: _614.EventStart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _614.EventStart;
                fromJSON(object: any): _614.EventStart;
                toJSON(message: _614.EventStart): unknown;
                fromPartial(object: {
                    id?: any;
                    node?: string;
                    subscription?: any;
                }): _614.EventStart;
            };
            EventUpdate: {
                encode(message: _614.EventUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _614.EventUpdate;
                fromJSON(object: any): _614.EventUpdate;
                toJSON(message: _614.EventUpdate): unknown;
                fromPartial(object: {
                    id?: any;
                    node?: string;
                    subscription?: any;
                }): _614.EventUpdate;
            };
            EventSetStatus: {
                encode(message: _614.EventSetStatus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _614.EventSetStatus;
                fromJSON(object: any): _614.EventSetStatus;
                toJSON(message: _614.EventSetStatus): unknown;
                fromPartial(object: {
                    id?: any;
                    node?: string;
                    subscription?: any;
                    status?: _635.Status;
                }): _614.EventSetStatus;
            };
            EventPay: {
                encode(message: _614.EventPay, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _614.EventPay;
                fromJSON(object: any): _614.EventPay;
                toJSON(message: _614.EventPay): unknown;
                fromPartial(object: {
                    id?: any;
                    node?: string;
                    subscription?: any;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _614.EventPay;
            };
        };
    }
    namespace subscription {
        const v1: {
            Subscription: {
                encode(message: _627.Subscription, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _627.Subscription;
                fromJSON(object: any): _627.Subscription;
                toJSON(message: _627.Subscription): unknown;
                fromPartial(object: {
                    id?: any;
                    owner?: string;
                    node?: string;
                    price?: {
                        denom?: string;
                        amount?: string;
                    };
                    deposit?: {
                        denom?: string;
                        amount?: string;
                    };
                    plan?: any;
                    denom?: string;
                    expiry?: Date;
                    free?: string;
                    status?: _635.Status;
                    statusAt?: Date;
                }): _627.Subscription;
            };
            Quota: {
                encode(message: _626.Quota, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _626.Quota;
                fromJSON(object: any): _626.Quota;
                toJSON(message: _626.Quota): unknown;
                fromPartial(object: {
                    address?: string;
                    allocated?: string;
                    consumed?: string;
                }): _626.Quota;
            };
            QuerySubscriptionsRequest: {
                encode(message: _625.QuerySubscriptionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _625.QuerySubscriptionsRequest;
                fromJSON(object: any): _625.QuerySubscriptionsRequest;
                toJSON(message: _625.QuerySubscriptionsRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _625.QuerySubscriptionsRequest;
            };
            QuerySubscriptionsForAddressRequest: {
                encode(message: _625.QuerySubscriptionsForAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _625.QuerySubscriptionsForAddressRequest;
                fromJSON(object: any): _625.QuerySubscriptionsForAddressRequest;
                toJSON(message: _625.QuerySubscriptionsForAddressRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    status?: _635.Status;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _625.QuerySubscriptionsForAddressRequest;
            };
            QuerySubscriptionRequest: {
                encode(message: _625.QuerySubscriptionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _625.QuerySubscriptionRequest;
                fromJSON(object: any): _625.QuerySubscriptionRequest;
                toJSON(message: _625.QuerySubscriptionRequest): unknown;
                fromPartial(object: {
                    id?: any;
                }): _625.QuerySubscriptionRequest;
            };
            QueryQuotaRequest: {
                encode(message: _625.QueryQuotaRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _625.QueryQuotaRequest;
                fromJSON(object: any): _625.QueryQuotaRequest;
                toJSON(message: _625.QueryQuotaRequest): unknown;
                fromPartial(object: {
                    id?: any;
                    address?: string;
                }): _625.QueryQuotaRequest;
            };
            QueryQuotasRequest: {
                encode(message: _625.QueryQuotasRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _625.QueryQuotasRequest;
                fromJSON(object: any): _625.QueryQuotasRequest;
                toJSON(message: _625.QueryQuotasRequest): unknown;
                fromPartial(object: {
                    id?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _625.QueryQuotasRequest;
            };
            QueryParamsRequest: {
                encode(_: _625.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _625.QueryParamsRequest;
                fromJSON(_: any): _625.QueryParamsRequest;
                toJSON(_: _625.QueryParamsRequest): unknown;
                fromPartial(_: {}): _625.QueryParamsRequest;
            };
            QuerySubscriptionsResponse: {
                encode(message: _625.QuerySubscriptionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _625.QuerySubscriptionsResponse;
                fromJSON(object: any): _625.QuerySubscriptionsResponse;
                toJSON(message: _625.QuerySubscriptionsResponse): unknown;
                fromPartial(object: {
                    subscriptions?: {
                        id?: any;
                        owner?: string;
                        node?: string;
                        price?: {
                            denom?: string;
                            amount?: string;
                        };
                        deposit?: {
                            denom?: string;
                            amount?: string;
                        };
                        plan?: any;
                        denom?: string;
                        expiry?: Date;
                        free?: string;
                        status?: _635.Status;
                        statusAt?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _625.QuerySubscriptionsResponse;
            };
            QuerySubscriptionsForAddressResponse: {
                encode(message: _625.QuerySubscriptionsForAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _625.QuerySubscriptionsForAddressResponse;
                fromJSON(object: any): _625.QuerySubscriptionsForAddressResponse;
                toJSON(message: _625.QuerySubscriptionsForAddressResponse): unknown;
                fromPartial(object: {
                    subscriptions?: {
                        id?: any;
                        owner?: string;
                        node?: string;
                        price?: {
                            denom?: string;
                            amount?: string;
                        };
                        deposit?: {
                            denom?: string;
                            amount?: string;
                        };
                        plan?: any;
                        denom?: string;
                        expiry?: Date;
                        free?: string;
                        status?: _635.Status;
                        statusAt?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _625.QuerySubscriptionsForAddressResponse;
            };
            QuerySubscriptionResponse: {
                encode(message: _625.QuerySubscriptionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _625.QuerySubscriptionResponse;
                fromJSON(object: any): _625.QuerySubscriptionResponse;
                toJSON(message: _625.QuerySubscriptionResponse): unknown;
                fromPartial(object: {
                    subscription?: {
                        id?: any;
                        owner?: string;
                        node?: string;
                        price?: {
                            denom?: string;
                            amount?: string;
                        };
                        deposit?: {
                            denom?: string;
                            amount?: string;
                        };
                        plan?: any;
                        denom?: string;
                        expiry?: Date;
                        free?: string;
                        status?: _635.Status;
                        statusAt?: Date;
                    };
                }): _625.QuerySubscriptionResponse;
            };
            QueryQuotaResponse: {
                encode(message: _625.QueryQuotaResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _625.QueryQuotaResponse;
                fromJSON(object: any): _625.QueryQuotaResponse;
                toJSON(message: _625.QueryQuotaResponse): unknown;
                fromPartial(object: {
                    quota?: {
                        address?: string;
                        allocated?: string;
                        consumed?: string;
                    };
                }): _625.QueryQuotaResponse;
            };
            QueryQuotasResponse: {
                encode(message: _625.QueryQuotasResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _625.QueryQuotasResponse;
                fromJSON(object: any): _625.QueryQuotasResponse;
                toJSON(message: _625.QueryQuotasResponse): unknown;
                fromPartial(object: {
                    quotas?: {
                        address?: string;
                        allocated?: string;
                        consumed?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _625.QueryQuotasResponse;
            };
            QueryParamsResponse: {
                encode(message: _625.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _625.QueryParamsResponse;
                fromJSON(object: any): _625.QueryParamsResponse;
                toJSON(message: _625.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        inactiveDuration?: string;
                    };
                }): _625.QueryParamsResponse;
            };
            Params: {
                encode(message: _624.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _624.Params;
                fromJSON(object: any): _624.Params;
                toJSON(message: _624.Params): unknown;
                fromPartial(object: {
                    inactiveDuration?: string;
                }): _624.Params;
            };
            MsgSubscribeToNodeRequest: {
                encode(message: _623.MsgSubscribeToNodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _623.MsgSubscribeToNodeRequest;
                fromJSON(object: any): _623.MsgSubscribeToNodeRequest;
                toJSON(message: _623.MsgSubscribeToNodeRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    address?: string;
                    deposit?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _623.MsgSubscribeToNodeRequest;
            };
            MsgSubscribeToPlanRequest: {
                encode(message: _623.MsgSubscribeToPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _623.MsgSubscribeToPlanRequest;
                fromJSON(object: any): _623.MsgSubscribeToPlanRequest;
                toJSON(message: _623.MsgSubscribeToPlanRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    id?: any;
                    denom?: string;
                }): _623.MsgSubscribeToPlanRequest;
            };
            MsgCancelRequest: {
                encode(message: _623.MsgCancelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _623.MsgCancelRequest;
                fromJSON(object: any): _623.MsgCancelRequest;
                toJSON(message: _623.MsgCancelRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    id?: any;
                }): _623.MsgCancelRequest;
            };
            MsgAddQuotaRequest: {
                encode(message: _623.MsgAddQuotaRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _623.MsgAddQuotaRequest;
                fromJSON(object: any): _623.MsgAddQuotaRequest;
                toJSON(message: _623.MsgAddQuotaRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    id?: any;
                    address?: string;
                    bytes?: string;
                }): _623.MsgAddQuotaRequest;
            };
            MsgUpdateQuotaRequest: {
                encode(message: _623.MsgUpdateQuotaRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _623.MsgUpdateQuotaRequest;
                fromJSON(object: any): _623.MsgUpdateQuotaRequest;
                toJSON(message: _623.MsgUpdateQuotaRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    id?: any;
                    address?: string;
                    bytes?: string;
                }): _623.MsgUpdateQuotaRequest;
            };
            MsgSubscribeToNodeResponse: {
                encode(_: _623.MsgSubscribeToNodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _623.MsgSubscribeToNodeResponse;
                fromJSON(_: any): _623.MsgSubscribeToNodeResponse;
                toJSON(_: _623.MsgSubscribeToNodeResponse): unknown;
                fromPartial(_: {}): _623.MsgSubscribeToNodeResponse;
            };
            MsgSubscribeToPlanResponse: {
                encode(_: _623.MsgSubscribeToPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _623.MsgSubscribeToPlanResponse;
                fromJSON(_: any): _623.MsgSubscribeToPlanResponse;
                toJSON(_: _623.MsgSubscribeToPlanResponse): unknown;
                fromPartial(_: {}): _623.MsgSubscribeToPlanResponse;
            };
            MsgCancelResponse: {
                encode(_: _623.MsgCancelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _623.MsgCancelResponse;
                fromJSON(_: any): _623.MsgCancelResponse;
                toJSON(_: _623.MsgCancelResponse): unknown;
                fromPartial(_: {}): _623.MsgCancelResponse;
            };
            MsgAddQuotaResponse: {
                encode(_: _623.MsgAddQuotaResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _623.MsgAddQuotaResponse;
                fromJSON(_: any): _623.MsgAddQuotaResponse;
                toJSON(_: _623.MsgAddQuotaResponse): unknown;
                fromPartial(_: {}): _623.MsgAddQuotaResponse;
            };
            MsgUpdateQuotaResponse: {
                encode(_: _623.MsgUpdateQuotaResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _623.MsgUpdateQuotaResponse;
                fromJSON(_: any): _623.MsgUpdateQuotaResponse;
                toJSON(_: _623.MsgUpdateQuotaResponse): unknown;
                fromPartial(_: {}): _623.MsgUpdateQuotaResponse;
            };
            GenesisSubscription: {
                encode(message: _622.GenesisSubscription, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _622.GenesisSubscription;
                fromJSON(object: any): _622.GenesisSubscription;
                toJSON(message: _622.GenesisSubscription): unknown;
                fromPartial(object: {
                    subscription?: {
                        id?: any;
                        owner?: string;
                        node?: string;
                        price?: {
                            denom?: string;
                            amount?: string;
                        };
                        deposit?: {
                            denom?: string;
                            amount?: string;
                        };
                        plan?: any;
                        denom?: string;
                        expiry?: Date;
                        free?: string;
                        status?: _635.Status;
                        statusAt?: Date;
                    };
                    quotas?: {
                        address?: string;
                        allocated?: string;
                        consumed?: string;
                    }[];
                }): _622.GenesisSubscription;
            };
            GenesisState: {
                encode(message: _622.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _622.GenesisState;
                fromJSON(object: any): _622.GenesisState;
                toJSON(message: _622.GenesisState): unknown;
                fromPartial(object: {
                    subscriptions?: {
                        subscription?: {
                            id?: any;
                            owner?: string;
                            node?: string;
                            price?: {
                                denom?: string;
                                amount?: string;
                            };
                            deposit?: {
                                denom?: string;
                                amount?: string;
                            };
                            plan?: any;
                            denom?: string;
                            expiry?: Date;
                            free?: string;
                            status?: _635.Status;
                            statusAt?: Date;
                        };
                        quotas?: {
                            address?: string;
                            allocated?: string;
                            consumed?: string;
                        }[];
                    }[];
                    params?: {
                        inactiveDuration?: string;
                    };
                }): _622.GenesisState;
            };
            EventSubscribe: {
                encode(message: _621.EventSubscribe, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _621.EventSubscribe;
                fromJSON(object: any): _621.EventSubscribe;
                toJSON(message: _621.EventSubscribe): unknown;
                fromPartial(object: {
                    id?: any;
                    node?: string;
                    plan?: any;
                }): _621.EventSubscribe;
            };
            EventSetStatus: {
                encode(message: _621.EventSetStatus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _621.EventSetStatus;
                fromJSON(object: any): _621.EventSetStatus;
                toJSON(message: _621.EventSetStatus): unknown;
                fromPartial(object: {
                    id?: any;
                    status?: _635.Status;
                }): _621.EventSetStatus;
            };
            EventAddQuota: {
                encode(message: _621.EventAddQuota, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _621.EventAddQuota;
                fromJSON(object: any): _621.EventAddQuota;
                toJSON(message: _621.EventAddQuota): unknown;
                fromPartial(object: {
                    id?: any;
                    address?: string;
                }): _621.EventAddQuota;
            };
            EventUpdateQuota: {
                encode(message: _621.EventUpdateQuota, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _621.EventUpdateQuota;
                fromJSON(object: any): _621.EventUpdateQuota;
                toJSON(message: _621.EventUpdateQuota): unknown;
                fromPartial(object: {
                    id?: any;
                    address?: string;
                }): _621.EventUpdateQuota;
            };
        };
    }
    namespace swap {
        const v1: {
            Swap: {
                encode(message: _633.Swap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _633.Swap;
                fromJSON(object: any): _633.Swap;
                toJSON(message: _633.Swap): unknown;
                fromPartial(object: {
                    txHash?: Uint8Array;
                    receiver?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _633.Swap;
            };
            QuerySwapsRequest: {
                encode(message: _632.QuerySwapsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _632.QuerySwapsRequest;
                fromJSON(object: any): _632.QuerySwapsRequest;
                toJSON(message: _632.QuerySwapsRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _632.QuerySwapsRequest;
            };
            QuerySwapRequest: {
                encode(message: _632.QuerySwapRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _632.QuerySwapRequest;
                fromJSON(object: any): _632.QuerySwapRequest;
                toJSON(message: _632.QuerySwapRequest): unknown;
                fromPartial(object: {
                    txHash?: Uint8Array;
                }): _632.QuerySwapRequest;
            };
            QueryParamsRequest: {
                encode(_: _632.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _632.QueryParamsRequest;
                fromJSON(_: any): _632.QueryParamsRequest;
                toJSON(_: _632.QueryParamsRequest): unknown;
                fromPartial(_: {}): _632.QueryParamsRequest;
            };
            QuerySwapsResponse: {
                encode(message: _632.QuerySwapsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _632.QuerySwapsResponse;
                fromJSON(object: any): _632.QuerySwapsResponse;
                toJSON(message: _632.QuerySwapsResponse): unknown;
                fromPartial(object: {
                    swaps?: {
                        txHash?: Uint8Array;
                        receiver?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _632.QuerySwapsResponse;
            };
            QuerySwapResponse: {
                encode(message: _632.QuerySwapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _632.QuerySwapResponse;
                fromJSON(object: any): _632.QuerySwapResponse;
                toJSON(message: _632.QuerySwapResponse): unknown;
                fromPartial(object: {
                    swap?: {
                        txHash?: Uint8Array;
                        receiver?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        };
                    };
                }): _632.QuerySwapResponse;
            };
            QueryParamsResponse: {
                encode(message: _632.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _632.QueryParamsResponse;
                fromJSON(object: any): _632.QueryParamsResponse;
                toJSON(message: _632.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        swapEnabled?: boolean;
                        swapDenom?: string;
                        approveBy?: string;
                    };
                }): _632.QueryParamsResponse;
            };
            Params: {
                encode(message: _631.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _631.Params;
                fromJSON(object: any): _631.Params;
                toJSON(message: _631.Params): unknown;
                fromPartial(object: {
                    swapEnabled?: boolean;
                    swapDenom?: string;
                    approveBy?: string;
                }): _631.Params;
            };
            MsgSwapRequest: {
                encode(message: _630.MsgSwapRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _630.MsgSwapRequest;
                fromJSON(object: any): _630.MsgSwapRequest;
                toJSON(message: _630.MsgSwapRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    txHash?: Uint8Array;
                    receiver?: string;
                    amount?: string;
                }): _630.MsgSwapRequest;
            };
            MsgSwapResponse: {
                encode(_: _630.MsgSwapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _630.MsgSwapResponse;
                fromJSON(_: any): _630.MsgSwapResponse;
                toJSON(_: _630.MsgSwapResponse): unknown;
                fromPartial(_: {}): _630.MsgSwapResponse;
            };
            GenesisState: {
                encode(message: _629.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _629.GenesisState;
                fromJSON(object: any): _629.GenesisState;
                toJSON(message: _629.GenesisState): unknown;
                fromPartial(object: {
                    swaps?: {
                        txHash?: Uint8Array;
                        receiver?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    params?: {
                        swapEnabled?: boolean;
                        swapDenom?: string;
                        approveBy?: string;
                    };
                }): _629.GenesisState;
            };
            EventSwap: {
                encode(message: _628.EventSwap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _628.EventSwap;
                fromJSON(object: any): _628.EventSwap;
                toJSON(message: _628.EventSwap): unknown;
                fromPartial(object: {
                    txHash?: Uint8Array;
                    receiver?: string;
                }): _628.EventSwap;
            };
        };
    }
    namespace types {
        const v1: {
            statusFromJSON(object: any): _635.Status;
            statusToJSON(object: _635.Status): string;
            Status: typeof _635.Status;
            Bandwidth: {
                encode(message: _634.Bandwidth, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _634.Bandwidth;
                fromJSON(object: any): _634.Bandwidth;
                toJSON(message: _634.Bandwidth): unknown;
                fromPartial(object: {
                    upload?: string;
                    download?: string;
                }): _634.Bandwidth;
            };
        };
    }
    namespace vpn {
        const v1: {
            GenesisState: {
                encode(message: _636.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _636.GenesisState;
                fromJSON(object: any): _636.GenesisState;
                toJSON(message: _636.GenesisState): unknown;
                fromPartial(object: {
                    deposits?: {
                        address?: string;
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    nodes?: {
                        nodes?: {
                            address?: string;
                            provider?: string;
                            price?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            remoteUrl?: string;
                            status?: _635.Status;
                            statusAt?: Date;
                        }[];
                        params?: {
                            deposit?: {
                                denom?: string;
                                amount?: string;
                            };
                            inactiveDuration?: string;
                        };
                    };
                    plans?: {
                        plan?: {
                            id?: any;
                            provider?: string;
                            price?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            validity?: string;
                            bytes?: string;
                            status?: _635.Status;
                            statusAt?: Date;
                        };
                        nodes?: string[];
                    }[];
                    providers?: {
                        providers?: {
                            address?: string;
                            name?: string;
                            identity?: string;
                            website?: string;
                            description?: string;
                        }[];
                        params?: {
                            deposit?: {
                                denom?: string;
                                amount?: string;
                            };
                        };
                    };
                    sessions?: {
                        sessions?: {
                            id?: any;
                            subscription?: any;
                            node?: string;
                            address?: string;
                            duration?: string;
                            bandwidth?: {
                                upload?: string;
                                download?: string;
                            };
                            status?: _635.Status;
                            statusAt?: Date;
                        }[];
                        params?: {
                            inactiveDuration?: string;
                            proofVerificationEnabled?: boolean;
                        };
                    };
                    subscriptions?: {
                        subscriptions?: {
                            subscription?: {
                                id?: any;
                                owner?: string;
                                node?: string;
                                price?: {
                                    denom?: string;
                                    amount?: string;
                                };
                                deposit?: {
                                    denom?: string;
                                    amount?: string;
                                };
                                plan?: any;
                                denom?: string;
                                expiry?: Date;
                                free?: string;
                                status?: _635.Status;
                                statusAt?: Date;
                            };
                            quotas?: {
                                address?: string;
                                allocated?: string;
                                consumed?: string;
                            }[];
                        }[];
                        params?: {
                            inactiveDuration?: string;
                        };
                    };
                }): _636.GenesisState;
            };
        };
    }
}
