import * as _611 from "./deposit/v1/deposit";
import * as _612 from "./deposit/v1/events";
import * as _613 from "./deposit/v1/querier";
import * as _614 from "./mint/v1/genesis";
import * as _615 from "./mint/v1/inflation";
import * as _616 from "./node/v1/events";
import * as _617 from "./node/v1/genesis";
import * as _618 from "./node/v1/msg";
import * as _619 from "./node/v1/node";
import * as _620 from "./node/v1/params";
import * as _621 from "./node/v1/querier";
import * as _622 from "./plan/v1/events";
import * as _623 from "./plan/v1/genesis";
import * as _624 from "./plan/v1/msg";
import * as _625 from "./plan/v1/plan";
import * as _626 from "./plan/v1/querier";
import * as _627 from "./provider/v1/events";
import * as _628 from "./provider/v1/genesis";
import * as _629 from "./provider/v1/msg";
import * as _630 from "./provider/v1/params";
import * as _631 from "./provider/v1/provider";
import * as _632 from "./provider/v1/querier";
import * as _633 from "./session/v1/events";
import * as _634 from "./session/v1/genesis";
import * as _635 from "./session/v1/msg";
import * as _636 from "./session/v1/params";
import * as _637 from "./session/v1/proof";
import * as _638 from "./session/v1/querier";
import * as _639 from "./session/v1/session";
import * as _640 from "./subscription/v1/events";
import * as _641 from "./subscription/v1/genesis";
import * as _642 from "./subscription/v1/msg";
import * as _643 from "./subscription/v1/params";
import * as _644 from "./subscription/v1/querier";
import * as _645 from "./subscription/v1/quota";
import * as _646 from "./subscription/v1/subscription";
import * as _647 from "./swap/v1/events";
import * as _648 from "./swap/v1/genesis";
import * as _649 from "./swap/v1/msg";
import * as _650 from "./swap/v1/params";
import * as _651 from "./swap/v1/querier";
import * as _652 from "./swap/v1/swap";
import * as _653 from "./types/v1/bandwidth";
import * as _654 from "./types/v1/status";
import * as _655 from "./vpn/v1/genesis";
export declare namespace sentinel {
    namespace deposit {
        const v1: {
            QueryDepositsRequest: {
                encode(message: _613.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _613.QueryDepositsRequest;
                fromJSON(object: any): _613.QueryDepositsRequest;
                toJSON(message: _613.QueryDepositsRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _613.QueryDepositsRequest;
            };
            QueryDepositRequest: {
                encode(message: _613.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _613.QueryDepositRequest;
                fromJSON(object: any): _613.QueryDepositRequest;
                toJSON(message: _613.QueryDepositRequest): unknown;
                fromPartial(object: {
                    address?: string;
                }): _613.QueryDepositRequest;
            };
            QueryDepositsResponse: {
                encode(message: _613.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _613.QueryDepositsResponse;
                fromJSON(object: any): _613.QueryDepositsResponse;
                toJSON(message: _613.QueryDepositsResponse): unknown;
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
                }): _613.QueryDepositsResponse;
            };
            QueryDepositResponse: {
                encode(message: _613.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _613.QueryDepositResponse;
                fromJSON(object: any): _613.QueryDepositResponse;
                toJSON(message: _613.QueryDepositResponse): unknown;
                fromPartial(object: {
                    deposit?: {
                        address?: string;
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _613.QueryDepositResponse;
            };
            EventAdd: {
                encode(message: _612.EventAdd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _612.EventAdd;
                fromJSON(object: any): _612.EventAdd;
                toJSON(message: _612.EventAdd): unknown;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _612.EventAdd;
            };
            EventSubtract: {
                encode(message: _612.EventSubtract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _612.EventSubtract;
                fromJSON(object: any): _612.EventSubtract;
                toJSON(message: _612.EventSubtract): unknown;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _612.EventSubtract;
            };
            Deposit: {
                encode(message: _611.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _611.Deposit;
                fromJSON(object: any): _611.Deposit;
                toJSON(message: _611.Deposit): unknown;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _611.Deposit;
            };
        };
    }
    namespace mint {
        const v1: {
            Inflation: {
                encode(message: _615.Inflation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _615.Inflation;
                fromJSON(object: any): _615.Inflation;
                toJSON(message: _615.Inflation): unknown;
                fromPartial(object: {
                    max?: string;
                    min?: string;
                    rateChange?: string;
                    timestamp?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _615.Inflation;
            };
            GenesisState: {
                encode(message: _614.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _614.GenesisState;
                fromJSON(object: any): _614.GenesisState;
                toJSON(message: _614.GenesisState): unknown;
                fromPartial(object: {
                    inflations?: {
                        max?: string;
                        min?: string;
                        rateChange?: string;
                        timestamp?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                }): _614.GenesisState;
            };
        };
    }
    namespace node {
        const v1: {
            QueryNodesRequest: {
                encode(message: _621.QueryNodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _621.QueryNodesRequest;
                fromJSON(object: any): _621.QueryNodesRequest;
                toJSON(message: _621.QueryNodesRequest): unknown;
                fromPartial(object: {
                    status?: _654.Status;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _621.QueryNodesRequest;
            };
            QueryNodesForProviderRequest: {
                encode(message: _621.QueryNodesForProviderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _621.QueryNodesForProviderRequest;
                fromJSON(object: any): _621.QueryNodesForProviderRequest;
                toJSON(message: _621.QueryNodesForProviderRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    status?: _654.Status;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _621.QueryNodesForProviderRequest;
            };
            QueryNodeRequest: {
                encode(message: _621.QueryNodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _621.QueryNodeRequest;
                fromJSON(object: any): _621.QueryNodeRequest;
                toJSON(message: _621.QueryNodeRequest): unknown;
                fromPartial(object: {
                    address?: string;
                }): _621.QueryNodeRequest;
            };
            QueryParamsRequest: {
                encode(_: _621.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _621.QueryParamsRequest;
                fromJSON(_: any): _621.QueryParamsRequest;
                toJSON(_: _621.QueryParamsRequest): unknown;
                fromPartial(_: {}): _621.QueryParamsRequest;
            };
            QueryNodesResponse: {
                encode(message: _621.QueryNodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _621.QueryNodesResponse;
                fromJSON(object: any): _621.QueryNodesResponse;
                toJSON(message: _621.QueryNodesResponse): unknown;
                fromPartial(object: {
                    nodes?: {
                        address?: string;
                        provider?: string;
                        price?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        remoteUrl?: string;
                        status?: _654.Status;
                        statusAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _621.QueryNodesResponse;
            };
            QueryNodesForProviderResponse: {
                encode(message: _621.QueryNodesForProviderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _621.QueryNodesForProviderResponse;
                fromJSON(object: any): _621.QueryNodesForProviderResponse;
                toJSON(message: _621.QueryNodesForProviderResponse): unknown;
                fromPartial(object: {
                    nodes?: {
                        address?: string;
                        provider?: string;
                        price?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        remoteUrl?: string;
                        status?: _654.Status;
                        statusAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _621.QueryNodesForProviderResponse;
            };
            QueryNodeResponse: {
                encode(message: _621.QueryNodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _621.QueryNodeResponse;
                fromJSON(object: any): _621.QueryNodeResponse;
                toJSON(message: _621.QueryNodeResponse): unknown;
                fromPartial(object: {
                    node?: {
                        address?: string;
                        provider?: string;
                        price?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        remoteUrl?: string;
                        status?: _654.Status;
                        statusAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                }): _621.QueryNodeResponse;
            };
            QueryParamsResponse: {
                encode(message: _621.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _621.QueryParamsResponse;
                fromJSON(object: any): _621.QueryParamsResponse;
                toJSON(message: _621.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        deposit?: {
                            denom?: string;
                            amount?: string;
                        };
                        inactiveDuration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                }): _621.QueryParamsResponse;
            };
            Params: {
                encode(message: _620.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _620.Params;
                fromJSON(object: any): _620.Params;
                toJSON(message: _620.Params): unknown;
                fromPartial(object: {
                    deposit?: {
                        denom?: string;
                        amount?: string;
                    };
                    inactiveDuration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _620.Params;
            };
            Node: {
                encode(message: _619.Node, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _619.Node;
                fromJSON(object: any): _619.Node;
                toJSON(message: _619.Node): unknown;
                fromPartial(object: {
                    address?: string;
                    provider?: string;
                    price?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    remoteUrl?: string;
                    status?: _654.Status;
                    statusAt?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _619.Node;
            };
            MsgRegisterRequest: {
                encode(message: _618.MsgRegisterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _618.MsgRegisterRequest;
                fromJSON(object: any): _618.MsgRegisterRequest;
                toJSON(message: _618.MsgRegisterRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    provider?: string;
                    price?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    remoteUrl?: string;
                }): _618.MsgRegisterRequest;
            };
            MsgUpdateRequest: {
                encode(message: _618.MsgUpdateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _618.MsgUpdateRequest;
                fromJSON(object: any): _618.MsgUpdateRequest;
                toJSON(message: _618.MsgUpdateRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    provider?: string;
                    price?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    remoteUrl?: string;
                }): _618.MsgUpdateRequest;
            };
            MsgSetStatusRequest: {
                encode(message: _618.MsgSetStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _618.MsgSetStatusRequest;
                fromJSON(object: any): _618.MsgSetStatusRequest;
                toJSON(message: _618.MsgSetStatusRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    status?: _654.Status;
                }): _618.MsgSetStatusRequest;
            };
            MsgRegisterResponse: {
                encode(_: _618.MsgRegisterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _618.MsgRegisterResponse;
                fromJSON(_: any): _618.MsgRegisterResponse;
                toJSON(_: _618.MsgRegisterResponse): unknown;
                fromPartial(_: {}): _618.MsgRegisterResponse;
            };
            MsgUpdateResponse: {
                encode(_: _618.MsgUpdateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _618.MsgUpdateResponse;
                fromJSON(_: any): _618.MsgUpdateResponse;
                toJSON(_: _618.MsgUpdateResponse): unknown;
                fromPartial(_: {}): _618.MsgUpdateResponse;
            };
            MsgSetStatusResponse: {
                encode(_: _618.MsgSetStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _618.MsgSetStatusResponse;
                fromJSON(_: any): _618.MsgSetStatusResponse;
                toJSON(_: _618.MsgSetStatusResponse): unknown;
                fromPartial(_: {}): _618.MsgSetStatusResponse;
            };
            GenesisState: {
                encode(message: _617.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _617.GenesisState;
                fromJSON(object: any): _617.GenesisState;
                toJSON(message: _617.GenesisState): unknown;
                fromPartial(object: {
                    nodes?: {
                        address?: string;
                        provider?: string;
                        price?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        remoteUrl?: string;
                        status?: _654.Status;
                        statusAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    params?: {
                        deposit?: {
                            denom?: string;
                            amount?: string;
                        };
                        inactiveDuration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                }): _617.GenesisState;
            };
            EventRegister: {
                encode(message: _616.EventRegister, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _616.EventRegister;
                fromJSON(object: any): _616.EventRegister;
                toJSON(message: _616.EventRegister): unknown;
                fromPartial(object: {
                    address?: string;
                    provider?: string;
                }): _616.EventRegister;
            };
            EventUpdate: {
                encode(message: _616.EventUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _616.EventUpdate;
                fromJSON(object: any): _616.EventUpdate;
                toJSON(message: _616.EventUpdate): unknown;
                fromPartial(object: {
                    address?: string;
                    provider?: string;
                }): _616.EventUpdate;
            };
            EventSetStatus: {
                encode(message: _616.EventSetStatus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _616.EventSetStatus;
                fromJSON(object: any): _616.EventSetStatus;
                toJSON(message: _616.EventSetStatus): unknown;
                fromPartial(object: {
                    address?: string;
                    status?: _654.Status;
                }): _616.EventSetStatus;
            };
        };
    }
    namespace plan {
        const v1: {
            QueryPlansRequest: {
                encode(message: _626.QueryPlansRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _626.QueryPlansRequest;
                fromJSON(object: any): _626.QueryPlansRequest;
                toJSON(message: _626.QueryPlansRequest): unknown;
                fromPartial(object: {
                    status?: _654.Status;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _626.QueryPlansRequest;
            };
            QueryPlansForProviderRequest: {
                encode(message: _626.QueryPlansForProviderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _626.QueryPlansForProviderRequest;
                fromJSON(object: any): _626.QueryPlansForProviderRequest;
                toJSON(message: _626.QueryPlansForProviderRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    status?: _654.Status;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _626.QueryPlansForProviderRequest;
            };
            QueryPlanRequest: {
                encode(message: _626.QueryPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _626.QueryPlanRequest;
                fromJSON(object: any): _626.QueryPlanRequest;
                toJSON(message: _626.QueryPlanRequest): unknown;
                fromPartial(object: {
                    id?: any;
                }): _626.QueryPlanRequest;
            };
            QueryNodesForPlanRequest: {
                encode(message: _626.QueryNodesForPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _626.QueryNodesForPlanRequest;
                fromJSON(object: any): _626.QueryNodesForPlanRequest;
                toJSON(message: _626.QueryNodesForPlanRequest): unknown;
                fromPartial(object: {
                    id?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _626.QueryNodesForPlanRequest;
            };
            QueryPlansResponse: {
                encode(message: _626.QueryPlansResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _626.QueryPlansResponse;
                fromJSON(object: any): _626.QueryPlansResponse;
                toJSON(message: _626.QueryPlansResponse): unknown;
                fromPartial(object: {
                    plans?: {
                        id?: any;
                        provider?: string;
                        price?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        validity?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        bytes?: string;
                        status?: _654.Status;
                        statusAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _626.QueryPlansResponse;
            };
            QueryPlansForProviderResponse: {
                encode(message: _626.QueryPlansForProviderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _626.QueryPlansForProviderResponse;
                fromJSON(object: any): _626.QueryPlansForProviderResponse;
                toJSON(message: _626.QueryPlansForProviderResponse): unknown;
                fromPartial(object: {
                    plans?: {
                        id?: any;
                        provider?: string;
                        price?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        validity?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        bytes?: string;
                        status?: _654.Status;
                        statusAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _626.QueryPlansForProviderResponse;
            };
            QueryPlanResponse: {
                encode(message: _626.QueryPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _626.QueryPlanResponse;
                fromJSON(object: any): _626.QueryPlanResponse;
                toJSON(message: _626.QueryPlanResponse): unknown;
                fromPartial(object: {
                    plan?: {
                        id?: any;
                        provider?: string;
                        price?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        validity?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        bytes?: string;
                        status?: _654.Status;
                        statusAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                }): _626.QueryPlanResponse;
            };
            QueryNodesForPlanResponse: {
                encode(message: _626.QueryNodesForPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _626.QueryNodesForPlanResponse;
                fromJSON(object: any): _626.QueryNodesForPlanResponse;
                toJSON(message: _626.QueryNodesForPlanResponse): unknown;
                fromPartial(object: {
                    nodes?: {
                        address?: string;
                        provider?: string;
                        price?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        remoteUrl?: string;
                        status?: _654.Status;
                        statusAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _626.QueryNodesForPlanResponse;
            };
            Plan: {
                encode(message: _625.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _625.Plan;
                fromJSON(object: any): _625.Plan;
                toJSON(message: _625.Plan): unknown;
                fromPartial(object: {
                    id?: any;
                    provider?: string;
                    price?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    validity?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    bytes?: string;
                    status?: _654.Status;
                    statusAt?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _625.Plan;
            };
            MsgAddRequest: {
                encode(message: _624.MsgAddRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _624.MsgAddRequest;
                fromJSON(object: any): _624.MsgAddRequest;
                toJSON(message: _624.MsgAddRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    price?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    validity?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    bytes?: string;
                }): _624.MsgAddRequest;
            };
            MsgSetStatusRequest: {
                encode(message: _624.MsgSetStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _624.MsgSetStatusRequest;
                fromJSON(object: any): _624.MsgSetStatusRequest;
                toJSON(message: _624.MsgSetStatusRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    id?: any;
                    status?: _654.Status;
                }): _624.MsgSetStatusRequest;
            };
            MsgAddNodeRequest: {
                encode(message: _624.MsgAddNodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _624.MsgAddNodeRequest;
                fromJSON(object: any): _624.MsgAddNodeRequest;
                toJSON(message: _624.MsgAddNodeRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    id?: any;
                    address?: string;
                }): _624.MsgAddNodeRequest;
            };
            MsgRemoveNodeRequest: {
                encode(message: _624.MsgRemoveNodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _624.MsgRemoveNodeRequest;
                fromJSON(object: any): _624.MsgRemoveNodeRequest;
                toJSON(message: _624.MsgRemoveNodeRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    id?: any;
                    address?: string;
                }): _624.MsgRemoveNodeRequest;
            };
            MsgAddResponse: {
                encode(_: _624.MsgAddResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _624.MsgAddResponse;
                fromJSON(_: any): _624.MsgAddResponse;
                toJSON(_: _624.MsgAddResponse): unknown;
                fromPartial(_: {}): _624.MsgAddResponse;
            };
            MsgSetStatusResponse: {
                encode(_: _624.MsgSetStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _624.MsgSetStatusResponse;
                fromJSON(_: any): _624.MsgSetStatusResponse;
                toJSON(_: _624.MsgSetStatusResponse): unknown;
                fromPartial(_: {}): _624.MsgSetStatusResponse;
            };
            MsgAddNodeResponse: {
                encode(_: _624.MsgAddNodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _624.MsgAddNodeResponse;
                fromJSON(_: any): _624.MsgAddNodeResponse;
                toJSON(_: _624.MsgAddNodeResponse): unknown;
                fromPartial(_: {}): _624.MsgAddNodeResponse;
            };
            MsgRemoveNodeResponse: {
                encode(_: _624.MsgRemoveNodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _624.MsgRemoveNodeResponse;
                fromJSON(_: any): _624.MsgRemoveNodeResponse;
                toJSON(_: _624.MsgRemoveNodeResponse): unknown;
                fromPartial(_: {}): _624.MsgRemoveNodeResponse;
            };
            GenesisPlan: {
                encode(message: _623.GenesisPlan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _623.GenesisPlan;
                fromJSON(object: any): _623.GenesisPlan;
                toJSON(message: _623.GenesisPlan): unknown;
                fromPartial(object: {
                    plan?: {
                        id?: any;
                        provider?: string;
                        price?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        validity?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        bytes?: string;
                        status?: _654.Status;
                        statusAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    nodes?: string[];
                }): _623.GenesisPlan;
            };
            EventAdd: {
                encode(message: _622.EventAdd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _622.EventAdd;
                fromJSON(object: any): _622.EventAdd;
                toJSON(message: _622.EventAdd): unknown;
                fromPartial(object: {
                    id?: any;
                    provider?: string;
                }): _622.EventAdd;
            };
            EventSetStatus: {
                encode(message: _622.EventSetStatus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _622.EventSetStatus;
                fromJSON(object: any): _622.EventSetStatus;
                toJSON(message: _622.EventSetStatus): unknown;
                fromPartial(object: {
                    id?: any;
                    provider?: string;
                    status?: _654.Status;
                }): _622.EventSetStatus;
            };
            EventAddNode: {
                encode(message: _622.EventAddNode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _622.EventAddNode;
                fromJSON(object: any): _622.EventAddNode;
                toJSON(message: _622.EventAddNode): unknown;
                fromPartial(object: {
                    id?: any;
                    node?: string;
                    provider?: string;
                }): _622.EventAddNode;
            };
            EventRemoveNode: {
                encode(message: _622.EventRemoveNode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _622.EventRemoveNode;
                fromJSON(object: any): _622.EventRemoveNode;
                toJSON(message: _622.EventRemoveNode): unknown;
                fromPartial(object: {
                    id?: any;
                    node?: string;
                    provider?: string;
                }): _622.EventRemoveNode;
            };
        };
    }
    namespace provider {
        const v1: {
            QueryProvidersRequest: {
                encode(message: _632.QueryProvidersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _632.QueryProvidersRequest;
                fromJSON(object: any): _632.QueryProvidersRequest;
                toJSON(message: _632.QueryProvidersRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _632.QueryProvidersRequest;
            };
            QueryProviderRequest: {
                encode(message: _632.QueryProviderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _632.QueryProviderRequest;
                fromJSON(object: any): _632.QueryProviderRequest;
                toJSON(message: _632.QueryProviderRequest): unknown;
                fromPartial(object: {
                    address?: string;
                }): _632.QueryProviderRequest;
            };
            QueryParamsRequest: {
                encode(_: _632.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _632.QueryParamsRequest;
                fromJSON(_: any): _632.QueryParamsRequest;
                toJSON(_: _632.QueryParamsRequest): unknown;
                fromPartial(_: {}): _632.QueryParamsRequest;
            };
            QueryProvidersResponse: {
                encode(message: _632.QueryProvidersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _632.QueryProvidersResponse;
                fromJSON(object: any): _632.QueryProvidersResponse;
                toJSON(message: _632.QueryProvidersResponse): unknown;
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
                }): _632.QueryProvidersResponse;
            };
            QueryProviderResponse: {
                encode(message: _632.QueryProviderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _632.QueryProviderResponse;
                fromJSON(object: any): _632.QueryProviderResponse;
                toJSON(message: _632.QueryProviderResponse): unknown;
                fromPartial(object: {
                    provider?: {
                        address?: string;
                        name?: string;
                        identity?: string;
                        website?: string;
                        description?: string;
                    };
                }): _632.QueryProviderResponse;
            };
            QueryParamsResponse: {
                encode(message: _632.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _632.QueryParamsResponse;
                fromJSON(object: any): _632.QueryParamsResponse;
                toJSON(message: _632.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        deposit?: {
                            denom?: string;
                            amount?: string;
                        };
                    };
                }): _632.QueryParamsResponse;
            };
            Provider: {
                encode(message: _631.Provider, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _631.Provider;
                fromJSON(object: any): _631.Provider;
                toJSON(message: _631.Provider): unknown;
                fromPartial(object: {
                    address?: string;
                    name?: string;
                    identity?: string;
                    website?: string;
                    description?: string;
                }): _631.Provider;
            };
            Params: {
                encode(message: _630.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _630.Params;
                fromJSON(object: any): _630.Params;
                toJSON(message: _630.Params): unknown;
                fromPartial(object: {
                    deposit?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _630.Params;
            };
            MsgRegisterRequest: {
                encode(message: _629.MsgRegisterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _629.MsgRegisterRequest;
                fromJSON(object: any): _629.MsgRegisterRequest;
                toJSON(message: _629.MsgRegisterRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    name?: string;
                    identity?: string;
                    website?: string;
                    description?: string;
                }): _629.MsgRegisterRequest;
            };
            MsgUpdateRequest: {
                encode(message: _629.MsgUpdateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _629.MsgUpdateRequest;
                fromJSON(object: any): _629.MsgUpdateRequest;
                toJSON(message: _629.MsgUpdateRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    name?: string;
                    identity?: string;
                    website?: string;
                    description?: string;
                }): _629.MsgUpdateRequest;
            };
            MsgRegisterResponse: {
                encode(_: _629.MsgRegisterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _629.MsgRegisterResponse;
                fromJSON(_: any): _629.MsgRegisterResponse;
                toJSON(_: _629.MsgRegisterResponse): unknown;
                fromPartial(_: {}): _629.MsgRegisterResponse;
            };
            MsgUpdateResponse: {
                encode(_: _629.MsgUpdateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _629.MsgUpdateResponse;
                fromJSON(_: any): _629.MsgUpdateResponse;
                toJSON(_: _629.MsgUpdateResponse): unknown;
                fromPartial(_: {}): _629.MsgUpdateResponse;
            };
            GenesisState: {
                encode(message: _628.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _628.GenesisState;
                fromJSON(object: any): _628.GenesisState;
                toJSON(message: _628.GenesisState): unknown;
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
                }): _628.GenesisState;
            };
            EventRegister: {
                encode(message: _627.EventRegister, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _627.EventRegister;
                fromJSON(object: any): _627.EventRegister;
                toJSON(message: _627.EventRegister): unknown;
                fromPartial(object: {
                    address?: string;
                }): _627.EventRegister;
            };
            EventUpdate: {
                encode(message: _627.EventUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _627.EventUpdate;
                fromJSON(object: any): _627.EventUpdate;
                toJSON(message: _627.EventUpdate): unknown;
                fromPartial(object: {
                    address?: string;
                }): _627.EventUpdate;
            };
        };
    }
    namespace session {
        const v1: {
            Session: {
                encode(message: _639.Session, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _639.Session;
                fromJSON(object: any): _639.Session;
                toJSON(message: _639.Session): unknown;
                fromPartial(object: {
                    id?: any;
                    subscription?: any;
                    node?: string;
                    address?: string;
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    bandwidth?: {
                        upload?: string;
                        download?: string;
                    };
                    status?: _654.Status;
                    statusAt?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _639.Session;
            };
            QuerySessionsRequest: {
                encode(message: _638.QuerySessionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _638.QuerySessionsRequest;
                fromJSON(object: any): _638.QuerySessionsRequest;
                toJSON(message: _638.QuerySessionsRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _638.QuerySessionsRequest;
            };
            QuerySessionsForAddressRequest: {
                encode(message: _638.QuerySessionsForAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _638.QuerySessionsForAddressRequest;
                fromJSON(object: any): _638.QuerySessionsForAddressRequest;
                toJSON(message: _638.QuerySessionsForAddressRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    status?: _654.Status;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _638.QuerySessionsForAddressRequest;
            };
            QuerySessionRequest: {
                encode(message: _638.QuerySessionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _638.QuerySessionRequest;
                fromJSON(object: any): _638.QuerySessionRequest;
                toJSON(message: _638.QuerySessionRequest): unknown;
                fromPartial(object: {
                    id?: any;
                }): _638.QuerySessionRequest;
            };
            QueryParamsRequest: {
                encode(_: _638.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _638.QueryParamsRequest;
                fromJSON(_: any): _638.QueryParamsRequest;
                toJSON(_: _638.QueryParamsRequest): unknown;
                fromPartial(_: {}): _638.QueryParamsRequest;
            };
            QuerySessionsResponse: {
                encode(message: _638.QuerySessionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _638.QuerySessionsResponse;
                fromJSON(object: any): _638.QuerySessionsResponse;
                toJSON(message: _638.QuerySessionsResponse): unknown;
                fromPartial(object: {
                    sessions?: {
                        id?: any;
                        subscription?: any;
                        node?: string;
                        address?: string;
                        duration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        bandwidth?: {
                            upload?: string;
                            download?: string;
                        };
                        status?: _654.Status;
                        statusAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _638.QuerySessionsResponse;
            };
            QuerySessionsForAddressResponse: {
                encode(message: _638.QuerySessionsForAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _638.QuerySessionsForAddressResponse;
                fromJSON(object: any): _638.QuerySessionsForAddressResponse;
                toJSON(message: _638.QuerySessionsForAddressResponse): unknown;
                fromPartial(object: {
                    sessions?: {
                        id?: any;
                        subscription?: any;
                        node?: string;
                        address?: string;
                        duration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        bandwidth?: {
                            upload?: string;
                            download?: string;
                        };
                        status?: _654.Status;
                        statusAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _638.QuerySessionsForAddressResponse;
            };
            QuerySessionResponse: {
                encode(message: _638.QuerySessionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _638.QuerySessionResponse;
                fromJSON(object: any): _638.QuerySessionResponse;
                toJSON(message: _638.QuerySessionResponse): unknown;
                fromPartial(object: {
                    session?: {
                        id?: any;
                        subscription?: any;
                        node?: string;
                        address?: string;
                        duration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        bandwidth?: {
                            upload?: string;
                            download?: string;
                        };
                        status?: _654.Status;
                        statusAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                }): _638.QuerySessionResponse;
            };
            QueryParamsResponse: {
                encode(message: _638.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _638.QueryParamsResponse;
                fromJSON(object: any): _638.QueryParamsResponse;
                toJSON(message: _638.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        inactiveDuration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        proofVerificationEnabled?: boolean;
                    };
                }): _638.QueryParamsResponse;
            };
            Proof: {
                encode(message: _637.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _637.Proof;
                fromJSON(object: any): _637.Proof;
                toJSON(message: _637.Proof): unknown;
                fromPartial(object: {
                    id?: any;
                    duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    bandwidth?: {
                        upload?: string;
                        download?: string;
                    };
                }): _637.Proof;
            };
            Params: {
                encode(message: _636.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _636.Params;
                fromJSON(object: any): _636.Params;
                toJSON(message: _636.Params): unknown;
                fromPartial(object: {
                    inactiveDuration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    proofVerificationEnabled?: boolean;
                }): _636.Params;
            };
            MsgStartRequest: {
                encode(message: _635.MsgStartRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _635.MsgStartRequest;
                fromJSON(object: any): _635.MsgStartRequest;
                toJSON(message: _635.MsgStartRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    id?: any;
                    node?: string;
                }): _635.MsgStartRequest;
            };
            MsgUpdateRequest: {
                encode(message: _635.MsgUpdateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _635.MsgUpdateRequest;
                fromJSON(object: any): _635.MsgUpdateRequest;
                toJSON(message: _635.MsgUpdateRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    proof?: {
                        id?: any;
                        duration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        bandwidth?: {
                            upload?: string;
                            download?: string;
                        };
                    };
                    signature?: Uint8Array;
                }): _635.MsgUpdateRequest;
            };
            MsgEndRequest: {
                encode(message: _635.MsgEndRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _635.MsgEndRequest;
                fromJSON(object: any): _635.MsgEndRequest;
                toJSON(message: _635.MsgEndRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    id?: any;
                    rating?: any;
                }): _635.MsgEndRequest;
            };
            MsgStartResponse: {
                encode(_: _635.MsgStartResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _635.MsgStartResponse;
                fromJSON(_: any): _635.MsgStartResponse;
                toJSON(_: _635.MsgStartResponse): unknown;
                fromPartial(_: {}): _635.MsgStartResponse;
            };
            MsgUpdateResponse: {
                encode(_: _635.MsgUpdateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _635.MsgUpdateResponse;
                fromJSON(_: any): _635.MsgUpdateResponse;
                toJSON(_: _635.MsgUpdateResponse): unknown;
                fromPartial(_: {}): _635.MsgUpdateResponse;
            };
            MsgEndResponse: {
                encode(_: _635.MsgEndResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _635.MsgEndResponse;
                fromJSON(_: any): _635.MsgEndResponse;
                toJSON(_: _635.MsgEndResponse): unknown;
                fromPartial(_: {}): _635.MsgEndResponse;
            };
            GenesisState: {
                encode(message: _634.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _634.GenesisState;
                fromJSON(object: any): _634.GenesisState;
                toJSON(message: _634.GenesisState): unknown;
                fromPartial(object: {
                    sessions?: {
                        id?: any;
                        subscription?: any;
                        node?: string;
                        address?: string;
                        duration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        bandwidth?: {
                            upload?: string;
                            download?: string;
                        };
                        status?: _654.Status;
                        statusAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    params?: {
                        inactiveDuration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        proofVerificationEnabled?: boolean;
                    };
                }): _634.GenesisState;
            };
            EventStart: {
                encode(message: _633.EventStart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _633.EventStart;
                fromJSON(object: any): _633.EventStart;
                toJSON(message: _633.EventStart): unknown;
                fromPartial(object: {
                    id?: any;
                    node?: string;
                    subscription?: any;
                }): _633.EventStart;
            };
            EventUpdate: {
                encode(message: _633.EventUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _633.EventUpdate;
                fromJSON(object: any): _633.EventUpdate;
                toJSON(message: _633.EventUpdate): unknown;
                fromPartial(object: {
                    id?: any;
                    node?: string;
                    subscription?: any;
                }): _633.EventUpdate;
            };
            EventSetStatus: {
                encode(message: _633.EventSetStatus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _633.EventSetStatus;
                fromJSON(object: any): _633.EventSetStatus;
                toJSON(message: _633.EventSetStatus): unknown;
                fromPartial(object: {
                    id?: any;
                    node?: string;
                    subscription?: any;
                    status?: _654.Status;
                }): _633.EventSetStatus;
            };
            EventPay: {
                encode(message: _633.EventPay, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _633.EventPay;
                fromJSON(object: any): _633.EventPay;
                toJSON(message: _633.EventPay): unknown;
                fromPartial(object: {
                    id?: any;
                    node?: string;
                    subscription?: any;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _633.EventPay;
            };
        };
    }
    namespace subscription {
        const v1: {
            Subscription: {
                encode(message: _646.Subscription, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _646.Subscription;
                fromJSON(object: any): _646.Subscription;
                toJSON(message: _646.Subscription): unknown;
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
                    expiry?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    free?: string;
                    status?: _654.Status;
                    statusAt?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _646.Subscription;
            };
            Quota: {
                encode(message: _645.Quota, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _645.Quota;
                fromJSON(object: any): _645.Quota;
                toJSON(message: _645.Quota): unknown;
                fromPartial(object: {
                    address?: string;
                    allocated?: string;
                    consumed?: string;
                }): _645.Quota;
            };
            QuerySubscriptionsRequest: {
                encode(message: _644.QuerySubscriptionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.QuerySubscriptionsRequest;
                fromJSON(object: any): _644.QuerySubscriptionsRequest;
                toJSON(message: _644.QuerySubscriptionsRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _644.QuerySubscriptionsRequest;
            };
            QuerySubscriptionsForAddressRequest: {
                encode(message: _644.QuerySubscriptionsForAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.QuerySubscriptionsForAddressRequest;
                fromJSON(object: any): _644.QuerySubscriptionsForAddressRequest;
                toJSON(message: _644.QuerySubscriptionsForAddressRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    status?: _654.Status;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _644.QuerySubscriptionsForAddressRequest;
            };
            QuerySubscriptionRequest: {
                encode(message: _644.QuerySubscriptionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.QuerySubscriptionRequest;
                fromJSON(object: any): _644.QuerySubscriptionRequest;
                toJSON(message: _644.QuerySubscriptionRequest): unknown;
                fromPartial(object: {
                    id?: any;
                }): _644.QuerySubscriptionRequest;
            };
            QueryQuotaRequest: {
                encode(message: _644.QueryQuotaRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.QueryQuotaRequest;
                fromJSON(object: any): _644.QueryQuotaRequest;
                toJSON(message: _644.QueryQuotaRequest): unknown;
                fromPartial(object: {
                    id?: any;
                    address?: string;
                }): _644.QueryQuotaRequest;
            };
            QueryQuotasRequest: {
                encode(message: _644.QueryQuotasRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.QueryQuotasRequest;
                fromJSON(object: any): _644.QueryQuotasRequest;
                toJSON(message: _644.QueryQuotasRequest): unknown;
                fromPartial(object: {
                    id?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _644.QueryQuotasRequest;
            };
            QueryParamsRequest: {
                encode(_: _644.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.QueryParamsRequest;
                fromJSON(_: any): _644.QueryParamsRequest;
                toJSON(_: _644.QueryParamsRequest): unknown;
                fromPartial(_: {}): _644.QueryParamsRequest;
            };
            QuerySubscriptionsResponse: {
                encode(message: _644.QuerySubscriptionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.QuerySubscriptionsResponse;
                fromJSON(object: any): _644.QuerySubscriptionsResponse;
                toJSON(message: _644.QuerySubscriptionsResponse): unknown;
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
                        expiry?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        free?: string;
                        status?: _654.Status;
                        statusAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _644.QuerySubscriptionsResponse;
            };
            QuerySubscriptionsForAddressResponse: {
                encode(message: _644.QuerySubscriptionsForAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.QuerySubscriptionsForAddressResponse;
                fromJSON(object: any): _644.QuerySubscriptionsForAddressResponse;
                toJSON(message: _644.QuerySubscriptionsForAddressResponse): unknown;
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
                        expiry?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        free?: string;
                        status?: _654.Status;
                        statusAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _644.QuerySubscriptionsForAddressResponse;
            };
            QuerySubscriptionResponse: {
                encode(message: _644.QuerySubscriptionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.QuerySubscriptionResponse;
                fromJSON(object: any): _644.QuerySubscriptionResponse;
                toJSON(message: _644.QuerySubscriptionResponse): unknown;
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
                        expiry?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        free?: string;
                        status?: _654.Status;
                        statusAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                }): _644.QuerySubscriptionResponse;
            };
            QueryQuotaResponse: {
                encode(message: _644.QueryQuotaResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.QueryQuotaResponse;
                fromJSON(object: any): _644.QueryQuotaResponse;
                toJSON(message: _644.QueryQuotaResponse): unknown;
                fromPartial(object: {
                    quota?: {
                        address?: string;
                        allocated?: string;
                        consumed?: string;
                    };
                }): _644.QueryQuotaResponse;
            };
            QueryQuotasResponse: {
                encode(message: _644.QueryQuotasResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.QueryQuotasResponse;
                fromJSON(object: any): _644.QueryQuotasResponse;
                toJSON(message: _644.QueryQuotasResponse): unknown;
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
                }): _644.QueryQuotasResponse;
            };
            QueryParamsResponse: {
                encode(message: _644.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.QueryParamsResponse;
                fromJSON(object: any): _644.QueryParamsResponse;
                toJSON(message: _644.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        inactiveDuration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                }): _644.QueryParamsResponse;
            };
            Params: {
                encode(message: _643.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _643.Params;
                fromJSON(object: any): _643.Params;
                toJSON(message: _643.Params): unknown;
                fromPartial(object: {
                    inactiveDuration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _643.Params;
            };
            MsgSubscribeToNodeRequest: {
                encode(message: _642.MsgSubscribeToNodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _642.MsgSubscribeToNodeRequest;
                fromJSON(object: any): _642.MsgSubscribeToNodeRequest;
                toJSON(message: _642.MsgSubscribeToNodeRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    address?: string;
                    deposit?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _642.MsgSubscribeToNodeRequest;
            };
            MsgSubscribeToPlanRequest: {
                encode(message: _642.MsgSubscribeToPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _642.MsgSubscribeToPlanRequest;
                fromJSON(object: any): _642.MsgSubscribeToPlanRequest;
                toJSON(message: _642.MsgSubscribeToPlanRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    id?: any;
                    denom?: string;
                }): _642.MsgSubscribeToPlanRequest;
            };
            MsgCancelRequest: {
                encode(message: _642.MsgCancelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _642.MsgCancelRequest;
                fromJSON(object: any): _642.MsgCancelRequest;
                toJSON(message: _642.MsgCancelRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    id?: any;
                }): _642.MsgCancelRequest;
            };
            MsgAddQuotaRequest: {
                encode(message: _642.MsgAddQuotaRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _642.MsgAddQuotaRequest;
                fromJSON(object: any): _642.MsgAddQuotaRequest;
                toJSON(message: _642.MsgAddQuotaRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    id?: any;
                    address?: string;
                    bytes?: string;
                }): _642.MsgAddQuotaRequest;
            };
            MsgUpdateQuotaRequest: {
                encode(message: _642.MsgUpdateQuotaRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _642.MsgUpdateQuotaRequest;
                fromJSON(object: any): _642.MsgUpdateQuotaRequest;
                toJSON(message: _642.MsgUpdateQuotaRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    id?: any;
                    address?: string;
                    bytes?: string;
                }): _642.MsgUpdateQuotaRequest;
            };
            MsgSubscribeToNodeResponse: {
                encode(_: _642.MsgSubscribeToNodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _642.MsgSubscribeToNodeResponse;
                fromJSON(_: any): _642.MsgSubscribeToNodeResponse;
                toJSON(_: _642.MsgSubscribeToNodeResponse): unknown;
                fromPartial(_: {}): _642.MsgSubscribeToNodeResponse;
            };
            MsgSubscribeToPlanResponse: {
                encode(_: _642.MsgSubscribeToPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _642.MsgSubscribeToPlanResponse;
                fromJSON(_: any): _642.MsgSubscribeToPlanResponse;
                toJSON(_: _642.MsgSubscribeToPlanResponse): unknown;
                fromPartial(_: {}): _642.MsgSubscribeToPlanResponse;
            };
            MsgCancelResponse: {
                encode(_: _642.MsgCancelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _642.MsgCancelResponse;
                fromJSON(_: any): _642.MsgCancelResponse;
                toJSON(_: _642.MsgCancelResponse): unknown;
                fromPartial(_: {}): _642.MsgCancelResponse;
            };
            MsgAddQuotaResponse: {
                encode(_: _642.MsgAddQuotaResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _642.MsgAddQuotaResponse;
                fromJSON(_: any): _642.MsgAddQuotaResponse;
                toJSON(_: _642.MsgAddQuotaResponse): unknown;
                fromPartial(_: {}): _642.MsgAddQuotaResponse;
            };
            MsgUpdateQuotaResponse: {
                encode(_: _642.MsgUpdateQuotaResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _642.MsgUpdateQuotaResponse;
                fromJSON(_: any): _642.MsgUpdateQuotaResponse;
                toJSON(_: _642.MsgUpdateQuotaResponse): unknown;
                fromPartial(_: {}): _642.MsgUpdateQuotaResponse;
            };
            GenesisSubscription: {
                encode(message: _641.GenesisSubscription, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _641.GenesisSubscription;
                fromJSON(object: any): _641.GenesisSubscription;
                toJSON(message: _641.GenesisSubscription): unknown;
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
                        expiry?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        free?: string;
                        status?: _654.Status;
                        statusAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    quotas?: {
                        address?: string;
                        allocated?: string;
                        consumed?: string;
                    }[];
                }): _641.GenesisSubscription;
            };
            GenesisState: {
                encode(message: _641.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _641.GenesisState;
                fromJSON(object: any): _641.GenesisState;
                toJSON(message: _641.GenesisState): unknown;
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
                            expiry?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            free?: string;
                            status?: _654.Status;
                            statusAt?: {
                                seconds?: any;
                                nanos?: number;
                            };
                        };
                        quotas?: {
                            address?: string;
                            allocated?: string;
                            consumed?: string;
                        }[];
                    }[];
                    params?: {
                        inactiveDuration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                }): _641.GenesisState;
            };
            EventSubscribe: {
                encode(message: _640.EventSubscribe, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _640.EventSubscribe;
                fromJSON(object: any): _640.EventSubscribe;
                toJSON(message: _640.EventSubscribe): unknown;
                fromPartial(object: {
                    id?: any;
                    node?: string;
                    plan?: any;
                }): _640.EventSubscribe;
            };
            EventSetStatus: {
                encode(message: _640.EventSetStatus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _640.EventSetStatus;
                fromJSON(object: any): _640.EventSetStatus;
                toJSON(message: _640.EventSetStatus): unknown;
                fromPartial(object: {
                    id?: any;
                    status?: _654.Status;
                }): _640.EventSetStatus;
            };
            EventAddQuota: {
                encode(message: _640.EventAddQuota, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _640.EventAddQuota;
                fromJSON(object: any): _640.EventAddQuota;
                toJSON(message: _640.EventAddQuota): unknown;
                fromPartial(object: {
                    id?: any;
                    address?: string;
                }): _640.EventAddQuota;
            };
            EventUpdateQuota: {
                encode(message: _640.EventUpdateQuota, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _640.EventUpdateQuota;
                fromJSON(object: any): _640.EventUpdateQuota;
                toJSON(message: _640.EventUpdateQuota): unknown;
                fromPartial(object: {
                    id?: any;
                    address?: string;
                }): _640.EventUpdateQuota;
            };
        };
    }
    namespace swap {
        const v1: {
            Swap: {
                encode(message: _652.Swap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _652.Swap;
                fromJSON(object: any): _652.Swap;
                toJSON(message: _652.Swap): unknown;
                fromPartial(object: {
                    txHash?: Uint8Array;
                    receiver?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _652.Swap;
            };
            QuerySwapsRequest: {
                encode(message: _651.QuerySwapsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _651.QuerySwapsRequest;
                fromJSON(object: any): _651.QuerySwapsRequest;
                toJSON(message: _651.QuerySwapsRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _651.QuerySwapsRequest;
            };
            QuerySwapRequest: {
                encode(message: _651.QuerySwapRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _651.QuerySwapRequest;
                fromJSON(object: any): _651.QuerySwapRequest;
                toJSON(message: _651.QuerySwapRequest): unknown;
                fromPartial(object: {
                    txHash?: Uint8Array;
                }): _651.QuerySwapRequest;
            };
            QueryParamsRequest: {
                encode(_: _651.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _651.QueryParamsRequest;
                fromJSON(_: any): _651.QueryParamsRequest;
                toJSON(_: _651.QueryParamsRequest): unknown;
                fromPartial(_: {}): _651.QueryParamsRequest;
            };
            QuerySwapsResponse: {
                encode(message: _651.QuerySwapsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _651.QuerySwapsResponse;
                fromJSON(object: any): _651.QuerySwapsResponse;
                toJSON(message: _651.QuerySwapsResponse): unknown;
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
                }): _651.QuerySwapsResponse;
            };
            QuerySwapResponse: {
                encode(message: _651.QuerySwapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _651.QuerySwapResponse;
                fromJSON(object: any): _651.QuerySwapResponse;
                toJSON(message: _651.QuerySwapResponse): unknown;
                fromPartial(object: {
                    swap?: {
                        txHash?: Uint8Array;
                        receiver?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        };
                    };
                }): _651.QuerySwapResponse;
            };
            QueryParamsResponse: {
                encode(message: _651.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _651.QueryParamsResponse;
                fromJSON(object: any): _651.QueryParamsResponse;
                toJSON(message: _651.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        swapEnabled?: boolean;
                        swapDenom?: string;
                        approveBy?: string;
                    };
                }): _651.QueryParamsResponse;
            };
            Params: {
                encode(message: _650.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _650.Params;
                fromJSON(object: any): _650.Params;
                toJSON(message: _650.Params): unknown;
                fromPartial(object: {
                    swapEnabled?: boolean;
                    swapDenom?: string;
                    approveBy?: string;
                }): _650.Params;
            };
            MsgSwapRequest: {
                encode(message: _649.MsgSwapRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _649.MsgSwapRequest;
                fromJSON(object: any): _649.MsgSwapRequest;
                toJSON(message: _649.MsgSwapRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    txHash?: Uint8Array;
                    receiver?: string;
                    amount?: string;
                }): _649.MsgSwapRequest;
            };
            MsgSwapResponse: {
                encode(_: _649.MsgSwapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _649.MsgSwapResponse;
                fromJSON(_: any): _649.MsgSwapResponse;
                toJSON(_: _649.MsgSwapResponse): unknown;
                fromPartial(_: {}): _649.MsgSwapResponse;
            };
            GenesisState: {
                encode(message: _648.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _648.GenesisState;
                fromJSON(object: any): _648.GenesisState;
                toJSON(message: _648.GenesisState): unknown;
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
                }): _648.GenesisState;
            };
            EventSwap: {
                encode(message: _647.EventSwap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _647.EventSwap;
                fromJSON(object: any): _647.EventSwap;
                toJSON(message: _647.EventSwap): unknown;
                fromPartial(object: {
                    txHash?: Uint8Array;
                    receiver?: string;
                }): _647.EventSwap;
            };
        };
    }
    namespace types {
        const v1: {
            statusFromJSON(object: any): _654.Status;
            statusToJSON(object: _654.Status): string;
            Status: typeof _654.Status;
            Bandwidth: {
                encode(message: _653.Bandwidth, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _653.Bandwidth;
                fromJSON(object: any): _653.Bandwidth;
                toJSON(message: _653.Bandwidth): unknown;
                fromPartial(object: {
                    upload?: string;
                    download?: string;
                }): _653.Bandwidth;
            };
        };
    }
    namespace vpn {
        const v1: {
            GenesisState: {
                encode(message: _655.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _655.GenesisState;
                fromJSON(object: any): _655.GenesisState;
                toJSON(message: _655.GenesisState): unknown;
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
                            status?: _654.Status;
                            statusAt?: {
                                seconds?: any;
                                nanos?: number;
                            };
                        }[];
                        params?: {
                            deposit?: {
                                denom?: string;
                                amount?: string;
                            };
                            inactiveDuration?: {
                                seconds?: any;
                                nanos?: number;
                            };
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
                            validity?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            bytes?: string;
                            status?: _654.Status;
                            statusAt?: {
                                seconds?: any;
                                nanos?: number;
                            };
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
                            duration?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            bandwidth?: {
                                upload?: string;
                                download?: string;
                            };
                            status?: _654.Status;
                            statusAt?: {
                                seconds?: any;
                                nanos?: number;
                            };
                        }[];
                        params?: {
                            inactiveDuration?: {
                                seconds?: any;
                                nanos?: number;
                            };
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
                                expiry?: {
                                    seconds?: any;
                                    nanos?: number;
                                };
                                free?: string;
                                status?: _654.Status;
                                statusAt?: {
                                    seconds?: any;
                                    nanos?: number;
                                };
                            };
                            quotas?: {
                                address?: string;
                                allocated?: string;
                                consumed?: string;
                            }[];
                        }[];
                        params?: {
                            inactiveDuration?: {
                                seconds?: any;
                                nanos?: number;
                            };
                        };
                    };
                }): _655.GenesisState;
            };
        };
    }
}
