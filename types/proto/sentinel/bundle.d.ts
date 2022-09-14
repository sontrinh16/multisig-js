import * as _679 from "./deposit/v1/deposit";
import * as _680 from "./deposit/v1/events";
import * as _681 from "./deposit/v1/querier";
import * as _682 from "./mint/v1/genesis";
import * as _683 from "./mint/v1/inflation";
import * as _684 from "./node/v1/events";
import * as _685 from "./node/v1/genesis";
import * as _686 from "./node/v1/msg";
import * as _687 from "./node/v1/node";
import * as _688 from "./node/v1/params";
import * as _689 from "./node/v1/querier";
import * as _690 from "./plan/v1/events";
import * as _691 from "./plan/v1/genesis";
import * as _692 from "./plan/v1/msg";
import * as _693 from "./plan/v1/plan";
import * as _694 from "./plan/v1/querier";
import * as _695 from "./provider/v1/events";
import * as _696 from "./provider/v1/genesis";
import * as _697 from "./provider/v1/msg";
import * as _698 from "./provider/v1/params";
import * as _699 from "./provider/v1/provider";
import * as _700 from "./provider/v1/querier";
import * as _701 from "./session/v1/events";
import * as _702 from "./session/v1/genesis";
import * as _703 from "./session/v1/msg";
import * as _704 from "./session/v1/params";
import * as _705 from "./session/v1/proof";
import * as _706 from "./session/v1/querier";
import * as _707 from "./session/v1/session";
import * as _708 from "./subscription/v1/events";
import * as _709 from "./subscription/v1/genesis";
import * as _710 from "./subscription/v1/msg";
import * as _711 from "./subscription/v1/params";
import * as _712 from "./subscription/v1/querier";
import * as _713 from "./subscription/v1/quota";
import * as _714 from "./subscription/v1/subscription";
import * as _715 from "./swap/v1/events";
import * as _716 from "./swap/v1/genesis";
import * as _717 from "./swap/v1/msg";
import * as _718 from "./swap/v1/params";
import * as _719 from "./swap/v1/querier";
import * as _720 from "./swap/v1/swap";
import * as _721 from "./types/v1/bandwidth";
import * as _722 from "./types/v1/status";
import * as _723 from "./vpn/v1/genesis";
export declare namespace sentinel {
    namespace deposit {
        const v1: {
            QueryDepositsRequest: {
                encode(message: _681.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _681.QueryDepositsRequest;
                fromJSON(object: any): _681.QueryDepositsRequest;
                toJSON(message: _681.QueryDepositsRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _681.QueryDepositsRequest;
            };
            QueryDepositRequest: {
                encode(message: _681.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _681.QueryDepositRequest;
                fromJSON(object: any): _681.QueryDepositRequest;
                toJSON(message: _681.QueryDepositRequest): unknown;
                fromPartial(object: {
                    address?: string;
                }): _681.QueryDepositRequest;
            };
            QueryDepositsResponse: {
                encode(message: _681.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _681.QueryDepositsResponse;
                fromJSON(object: any): _681.QueryDepositsResponse;
                toJSON(message: _681.QueryDepositsResponse): unknown;
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
                }): _681.QueryDepositsResponse;
            };
            QueryDepositResponse: {
                encode(message: _681.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _681.QueryDepositResponse;
                fromJSON(object: any): _681.QueryDepositResponse;
                toJSON(message: _681.QueryDepositResponse): unknown;
                fromPartial(object: {
                    deposit?: {
                        address?: string;
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _681.QueryDepositResponse;
            };
            EventAdd: {
                encode(message: _680.EventAdd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _680.EventAdd;
                fromJSON(object: any): _680.EventAdd;
                toJSON(message: _680.EventAdd): unknown;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _680.EventAdd;
            };
            EventSubtract: {
                encode(message: _680.EventSubtract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _680.EventSubtract;
                fromJSON(object: any): _680.EventSubtract;
                toJSON(message: _680.EventSubtract): unknown;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _680.EventSubtract;
            };
            Deposit: {
                encode(message: _679.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _679.Deposit;
                fromJSON(object: any): _679.Deposit;
                toJSON(message: _679.Deposit): unknown;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _679.Deposit;
            };
        };
    }
    namespace mint {
        const v1: {
            Inflation: {
                encode(message: _683.Inflation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _683.Inflation;
                fromJSON(object: any): _683.Inflation;
                toJSON(message: _683.Inflation): unknown;
                fromPartial(object: {
                    max?: string;
                    min?: string;
                    rateChange?: string;
                    timestamp?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _683.Inflation;
            };
            GenesisState: {
                encode(message: _682.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _682.GenesisState;
                fromJSON(object: any): _682.GenesisState;
                toJSON(message: _682.GenesisState): unknown;
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
                }): _682.GenesisState;
            };
        };
    }
    namespace node {
        const v1: {
            QueryNodesRequest: {
                encode(message: _689.QueryNodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _689.QueryNodesRequest;
                fromJSON(object: any): _689.QueryNodesRequest;
                toJSON(message: _689.QueryNodesRequest): unknown;
                fromPartial(object: {
                    status?: _722.Status;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _689.QueryNodesRequest;
            };
            QueryNodesForProviderRequest: {
                encode(message: _689.QueryNodesForProviderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _689.QueryNodesForProviderRequest;
                fromJSON(object: any): _689.QueryNodesForProviderRequest;
                toJSON(message: _689.QueryNodesForProviderRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    status?: _722.Status;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _689.QueryNodesForProviderRequest;
            };
            QueryNodeRequest: {
                encode(message: _689.QueryNodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _689.QueryNodeRequest;
                fromJSON(object: any): _689.QueryNodeRequest;
                toJSON(message: _689.QueryNodeRequest): unknown;
                fromPartial(object: {
                    address?: string;
                }): _689.QueryNodeRequest;
            };
            QueryParamsRequest: {
                encode(_: _689.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _689.QueryParamsRequest;
                fromJSON(_: any): _689.QueryParamsRequest;
                toJSON(_: _689.QueryParamsRequest): unknown;
                fromPartial(_: {}): _689.QueryParamsRequest;
            };
            QueryNodesResponse: {
                encode(message: _689.QueryNodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _689.QueryNodesResponse;
                fromJSON(object: any): _689.QueryNodesResponse;
                toJSON(message: _689.QueryNodesResponse): unknown;
                fromPartial(object: {
                    nodes?: {
                        address?: string;
                        provider?: string;
                        price?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        remoteUrl?: string;
                        status?: _722.Status;
                        statusAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _689.QueryNodesResponse;
            };
            QueryNodesForProviderResponse: {
                encode(message: _689.QueryNodesForProviderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _689.QueryNodesForProviderResponse;
                fromJSON(object: any): _689.QueryNodesForProviderResponse;
                toJSON(message: _689.QueryNodesForProviderResponse): unknown;
                fromPartial(object: {
                    nodes?: {
                        address?: string;
                        provider?: string;
                        price?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        remoteUrl?: string;
                        status?: _722.Status;
                        statusAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _689.QueryNodesForProviderResponse;
            };
            QueryNodeResponse: {
                encode(message: _689.QueryNodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _689.QueryNodeResponse;
                fromJSON(object: any): _689.QueryNodeResponse;
                toJSON(message: _689.QueryNodeResponse): unknown;
                fromPartial(object: {
                    node?: {
                        address?: string;
                        provider?: string;
                        price?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        remoteUrl?: string;
                        status?: _722.Status;
                        statusAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                }): _689.QueryNodeResponse;
            };
            QueryParamsResponse: {
                encode(message: _689.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _689.QueryParamsResponse;
                fromJSON(object: any): _689.QueryParamsResponse;
                toJSON(message: _689.QueryParamsResponse): unknown;
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
                }): _689.QueryParamsResponse;
            };
            Params: {
                encode(message: _688.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _688.Params;
                fromJSON(object: any): _688.Params;
                toJSON(message: _688.Params): unknown;
                fromPartial(object: {
                    deposit?: {
                        denom?: string;
                        amount?: string;
                    };
                    inactiveDuration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _688.Params;
            };
            Node: {
                encode(message: _687.Node, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _687.Node;
                fromJSON(object: any): _687.Node;
                toJSON(message: _687.Node): unknown;
                fromPartial(object: {
                    address?: string;
                    provider?: string;
                    price?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    remoteUrl?: string;
                    status?: _722.Status;
                    statusAt?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _687.Node;
            };
            MsgRegisterRequest: {
                encode(message: _686.MsgRegisterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _686.MsgRegisterRequest;
                fromJSON(object: any): _686.MsgRegisterRequest;
                toJSON(message: _686.MsgRegisterRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    provider?: string;
                    price?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    remoteUrl?: string;
                }): _686.MsgRegisterRequest;
            };
            MsgUpdateRequest: {
                encode(message: _686.MsgUpdateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _686.MsgUpdateRequest;
                fromJSON(object: any): _686.MsgUpdateRequest;
                toJSON(message: _686.MsgUpdateRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    provider?: string;
                    price?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    remoteUrl?: string;
                }): _686.MsgUpdateRequest;
            };
            MsgSetStatusRequest: {
                encode(message: _686.MsgSetStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _686.MsgSetStatusRequest;
                fromJSON(object: any): _686.MsgSetStatusRequest;
                toJSON(message: _686.MsgSetStatusRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    status?: _722.Status;
                }): _686.MsgSetStatusRequest;
            };
            MsgRegisterResponse: {
                encode(_: _686.MsgRegisterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _686.MsgRegisterResponse;
                fromJSON(_: any): _686.MsgRegisterResponse;
                toJSON(_: _686.MsgRegisterResponse): unknown;
                fromPartial(_: {}): _686.MsgRegisterResponse;
            };
            MsgUpdateResponse: {
                encode(_: _686.MsgUpdateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _686.MsgUpdateResponse;
                fromJSON(_: any): _686.MsgUpdateResponse;
                toJSON(_: _686.MsgUpdateResponse): unknown;
                fromPartial(_: {}): _686.MsgUpdateResponse;
            };
            MsgSetStatusResponse: {
                encode(_: _686.MsgSetStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _686.MsgSetStatusResponse;
                fromJSON(_: any): _686.MsgSetStatusResponse;
                toJSON(_: _686.MsgSetStatusResponse): unknown;
                fromPartial(_: {}): _686.MsgSetStatusResponse;
            };
            GenesisState: {
                encode(message: _685.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _685.GenesisState;
                fromJSON(object: any): _685.GenesisState;
                toJSON(message: _685.GenesisState): unknown;
                fromPartial(object: {
                    nodes?: {
                        address?: string;
                        provider?: string;
                        price?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        remoteUrl?: string;
                        status?: _722.Status;
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
                }): _685.GenesisState;
            };
            EventRegister: {
                encode(message: _684.EventRegister, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _684.EventRegister;
                fromJSON(object: any): _684.EventRegister;
                toJSON(message: _684.EventRegister): unknown;
                fromPartial(object: {
                    address?: string;
                    provider?: string;
                }): _684.EventRegister;
            };
            EventUpdate: {
                encode(message: _684.EventUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _684.EventUpdate;
                fromJSON(object: any): _684.EventUpdate;
                toJSON(message: _684.EventUpdate): unknown;
                fromPartial(object: {
                    address?: string;
                    provider?: string;
                }): _684.EventUpdate;
            };
            EventSetStatus: {
                encode(message: _684.EventSetStatus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _684.EventSetStatus;
                fromJSON(object: any): _684.EventSetStatus;
                toJSON(message: _684.EventSetStatus): unknown;
                fromPartial(object: {
                    address?: string;
                    status?: _722.Status;
                }): _684.EventSetStatus;
            };
        };
    }
    namespace plan {
        const v1: {
            QueryPlansRequest: {
                encode(message: _694.QueryPlansRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _694.QueryPlansRequest;
                fromJSON(object: any): _694.QueryPlansRequest;
                toJSON(message: _694.QueryPlansRequest): unknown;
                fromPartial(object: {
                    status?: _722.Status;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _694.QueryPlansRequest;
            };
            QueryPlansForProviderRequest: {
                encode(message: _694.QueryPlansForProviderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _694.QueryPlansForProviderRequest;
                fromJSON(object: any): _694.QueryPlansForProviderRequest;
                toJSON(message: _694.QueryPlansForProviderRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    status?: _722.Status;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _694.QueryPlansForProviderRequest;
            };
            QueryPlanRequest: {
                encode(message: _694.QueryPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _694.QueryPlanRequest;
                fromJSON(object: any): _694.QueryPlanRequest;
                toJSON(message: _694.QueryPlanRequest): unknown;
                fromPartial(object: {
                    id?: any;
                }): _694.QueryPlanRequest;
            };
            QueryNodesForPlanRequest: {
                encode(message: _694.QueryNodesForPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _694.QueryNodesForPlanRequest;
                fromJSON(object: any): _694.QueryNodesForPlanRequest;
                toJSON(message: _694.QueryNodesForPlanRequest): unknown;
                fromPartial(object: {
                    id?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _694.QueryNodesForPlanRequest;
            };
            QueryPlansResponse: {
                encode(message: _694.QueryPlansResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _694.QueryPlansResponse;
                fromJSON(object: any): _694.QueryPlansResponse;
                toJSON(message: _694.QueryPlansResponse): unknown;
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
                        status?: _722.Status;
                        statusAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _694.QueryPlansResponse;
            };
            QueryPlansForProviderResponse: {
                encode(message: _694.QueryPlansForProviderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _694.QueryPlansForProviderResponse;
                fromJSON(object: any): _694.QueryPlansForProviderResponse;
                toJSON(message: _694.QueryPlansForProviderResponse): unknown;
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
                        status?: _722.Status;
                        statusAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _694.QueryPlansForProviderResponse;
            };
            QueryPlanResponse: {
                encode(message: _694.QueryPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _694.QueryPlanResponse;
                fromJSON(object: any): _694.QueryPlanResponse;
                toJSON(message: _694.QueryPlanResponse): unknown;
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
                        status?: _722.Status;
                        statusAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                }): _694.QueryPlanResponse;
            };
            QueryNodesForPlanResponse: {
                encode(message: _694.QueryNodesForPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _694.QueryNodesForPlanResponse;
                fromJSON(object: any): _694.QueryNodesForPlanResponse;
                toJSON(message: _694.QueryNodesForPlanResponse): unknown;
                fromPartial(object: {
                    nodes?: {
                        address?: string;
                        provider?: string;
                        price?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        remoteUrl?: string;
                        status?: _722.Status;
                        statusAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _694.QueryNodesForPlanResponse;
            };
            Plan: {
                encode(message: _693.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _693.Plan;
                fromJSON(object: any): _693.Plan;
                toJSON(message: _693.Plan): unknown;
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
                    status?: _722.Status;
                    statusAt?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _693.Plan;
            };
            MsgAddRequest: {
                encode(message: _692.MsgAddRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _692.MsgAddRequest;
                fromJSON(object: any): _692.MsgAddRequest;
                toJSON(message: _692.MsgAddRequest): unknown;
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
                }): _692.MsgAddRequest;
            };
            MsgSetStatusRequest: {
                encode(message: _692.MsgSetStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _692.MsgSetStatusRequest;
                fromJSON(object: any): _692.MsgSetStatusRequest;
                toJSON(message: _692.MsgSetStatusRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    id?: any;
                    status?: _722.Status;
                }): _692.MsgSetStatusRequest;
            };
            MsgAddNodeRequest: {
                encode(message: _692.MsgAddNodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _692.MsgAddNodeRequest;
                fromJSON(object: any): _692.MsgAddNodeRequest;
                toJSON(message: _692.MsgAddNodeRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    id?: any;
                    address?: string;
                }): _692.MsgAddNodeRequest;
            };
            MsgRemoveNodeRequest: {
                encode(message: _692.MsgRemoveNodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _692.MsgRemoveNodeRequest;
                fromJSON(object: any): _692.MsgRemoveNodeRequest;
                toJSON(message: _692.MsgRemoveNodeRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    id?: any;
                    address?: string;
                }): _692.MsgRemoveNodeRequest;
            };
            MsgAddResponse: {
                encode(_: _692.MsgAddResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _692.MsgAddResponse;
                fromJSON(_: any): _692.MsgAddResponse;
                toJSON(_: _692.MsgAddResponse): unknown;
                fromPartial(_: {}): _692.MsgAddResponse;
            };
            MsgSetStatusResponse: {
                encode(_: _692.MsgSetStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _692.MsgSetStatusResponse;
                fromJSON(_: any): _692.MsgSetStatusResponse;
                toJSON(_: _692.MsgSetStatusResponse): unknown;
                fromPartial(_: {}): _692.MsgSetStatusResponse;
            };
            MsgAddNodeResponse: {
                encode(_: _692.MsgAddNodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _692.MsgAddNodeResponse;
                fromJSON(_: any): _692.MsgAddNodeResponse;
                toJSON(_: _692.MsgAddNodeResponse): unknown;
                fromPartial(_: {}): _692.MsgAddNodeResponse;
            };
            MsgRemoveNodeResponse: {
                encode(_: _692.MsgRemoveNodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _692.MsgRemoveNodeResponse;
                fromJSON(_: any): _692.MsgRemoveNodeResponse;
                toJSON(_: _692.MsgRemoveNodeResponse): unknown;
                fromPartial(_: {}): _692.MsgRemoveNodeResponse;
            };
            GenesisPlan: {
                encode(message: _691.GenesisPlan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _691.GenesisPlan;
                fromJSON(object: any): _691.GenesisPlan;
                toJSON(message: _691.GenesisPlan): unknown;
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
                        status?: _722.Status;
                        statusAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    nodes?: string[];
                }): _691.GenesisPlan;
            };
            EventAdd: {
                encode(message: _690.EventAdd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _690.EventAdd;
                fromJSON(object: any): _690.EventAdd;
                toJSON(message: _690.EventAdd): unknown;
                fromPartial(object: {
                    id?: any;
                    provider?: string;
                }): _690.EventAdd;
            };
            EventSetStatus: {
                encode(message: _690.EventSetStatus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _690.EventSetStatus;
                fromJSON(object: any): _690.EventSetStatus;
                toJSON(message: _690.EventSetStatus): unknown;
                fromPartial(object: {
                    id?: any;
                    provider?: string;
                    status?: _722.Status;
                }): _690.EventSetStatus;
            };
            EventAddNode: {
                encode(message: _690.EventAddNode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _690.EventAddNode;
                fromJSON(object: any): _690.EventAddNode;
                toJSON(message: _690.EventAddNode): unknown;
                fromPartial(object: {
                    id?: any;
                    node?: string;
                    provider?: string;
                }): _690.EventAddNode;
            };
            EventRemoveNode: {
                encode(message: _690.EventRemoveNode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _690.EventRemoveNode;
                fromJSON(object: any): _690.EventRemoveNode;
                toJSON(message: _690.EventRemoveNode): unknown;
                fromPartial(object: {
                    id?: any;
                    node?: string;
                    provider?: string;
                }): _690.EventRemoveNode;
            };
        };
    }
    namespace provider {
        const v1: {
            QueryProvidersRequest: {
                encode(message: _700.QueryProvidersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _700.QueryProvidersRequest;
                fromJSON(object: any): _700.QueryProvidersRequest;
                toJSON(message: _700.QueryProvidersRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _700.QueryProvidersRequest;
            };
            QueryProviderRequest: {
                encode(message: _700.QueryProviderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _700.QueryProviderRequest;
                fromJSON(object: any): _700.QueryProviderRequest;
                toJSON(message: _700.QueryProviderRequest): unknown;
                fromPartial(object: {
                    address?: string;
                }): _700.QueryProviderRequest;
            };
            QueryParamsRequest: {
                encode(_: _700.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _700.QueryParamsRequest;
                fromJSON(_: any): _700.QueryParamsRequest;
                toJSON(_: _700.QueryParamsRequest): unknown;
                fromPartial(_: {}): _700.QueryParamsRequest;
            };
            QueryProvidersResponse: {
                encode(message: _700.QueryProvidersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _700.QueryProvidersResponse;
                fromJSON(object: any): _700.QueryProvidersResponse;
                toJSON(message: _700.QueryProvidersResponse): unknown;
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
                }): _700.QueryProvidersResponse;
            };
            QueryProviderResponse: {
                encode(message: _700.QueryProviderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _700.QueryProviderResponse;
                fromJSON(object: any): _700.QueryProviderResponse;
                toJSON(message: _700.QueryProviderResponse): unknown;
                fromPartial(object: {
                    provider?: {
                        address?: string;
                        name?: string;
                        identity?: string;
                        website?: string;
                        description?: string;
                    };
                }): _700.QueryProviderResponse;
            };
            QueryParamsResponse: {
                encode(message: _700.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _700.QueryParamsResponse;
                fromJSON(object: any): _700.QueryParamsResponse;
                toJSON(message: _700.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        deposit?: {
                            denom?: string;
                            amount?: string;
                        };
                    };
                }): _700.QueryParamsResponse;
            };
            Provider: {
                encode(message: _699.Provider, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _699.Provider;
                fromJSON(object: any): _699.Provider;
                toJSON(message: _699.Provider): unknown;
                fromPartial(object: {
                    address?: string;
                    name?: string;
                    identity?: string;
                    website?: string;
                    description?: string;
                }): _699.Provider;
            };
            Params: {
                encode(message: _698.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _698.Params;
                fromJSON(object: any): _698.Params;
                toJSON(message: _698.Params): unknown;
                fromPartial(object: {
                    deposit?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _698.Params;
            };
            MsgRegisterRequest: {
                encode(message: _697.MsgRegisterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _697.MsgRegisterRequest;
                fromJSON(object: any): _697.MsgRegisterRequest;
                toJSON(message: _697.MsgRegisterRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    name?: string;
                    identity?: string;
                    website?: string;
                    description?: string;
                }): _697.MsgRegisterRequest;
            };
            MsgUpdateRequest: {
                encode(message: _697.MsgUpdateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _697.MsgUpdateRequest;
                fromJSON(object: any): _697.MsgUpdateRequest;
                toJSON(message: _697.MsgUpdateRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    name?: string;
                    identity?: string;
                    website?: string;
                    description?: string;
                }): _697.MsgUpdateRequest;
            };
            MsgRegisterResponse: {
                encode(_: _697.MsgRegisterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _697.MsgRegisterResponse;
                fromJSON(_: any): _697.MsgRegisterResponse;
                toJSON(_: _697.MsgRegisterResponse): unknown;
                fromPartial(_: {}): _697.MsgRegisterResponse;
            };
            MsgUpdateResponse: {
                encode(_: _697.MsgUpdateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _697.MsgUpdateResponse;
                fromJSON(_: any): _697.MsgUpdateResponse;
                toJSON(_: _697.MsgUpdateResponse): unknown;
                fromPartial(_: {}): _697.MsgUpdateResponse;
            };
            GenesisState: {
                encode(message: _696.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _696.GenesisState;
                fromJSON(object: any): _696.GenesisState;
                toJSON(message: _696.GenesisState): unknown;
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
                }): _696.GenesisState;
            };
            EventRegister: {
                encode(message: _695.EventRegister, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _695.EventRegister;
                fromJSON(object: any): _695.EventRegister;
                toJSON(message: _695.EventRegister): unknown;
                fromPartial(object: {
                    address?: string;
                }): _695.EventRegister;
            };
            EventUpdate: {
                encode(message: _695.EventUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _695.EventUpdate;
                fromJSON(object: any): _695.EventUpdate;
                toJSON(message: _695.EventUpdate): unknown;
                fromPartial(object: {
                    address?: string;
                }): _695.EventUpdate;
            };
        };
    }
    namespace session {
        const v1: {
            Session: {
                encode(message: _707.Session, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _707.Session;
                fromJSON(object: any): _707.Session;
                toJSON(message: _707.Session): unknown;
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
                    status?: _722.Status;
                    statusAt?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _707.Session;
            };
            QuerySessionsRequest: {
                encode(message: _706.QuerySessionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _706.QuerySessionsRequest;
                fromJSON(object: any): _706.QuerySessionsRequest;
                toJSON(message: _706.QuerySessionsRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _706.QuerySessionsRequest;
            };
            QuerySessionsForAddressRequest: {
                encode(message: _706.QuerySessionsForAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _706.QuerySessionsForAddressRequest;
                fromJSON(object: any): _706.QuerySessionsForAddressRequest;
                toJSON(message: _706.QuerySessionsForAddressRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    status?: _722.Status;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _706.QuerySessionsForAddressRequest;
            };
            QuerySessionRequest: {
                encode(message: _706.QuerySessionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _706.QuerySessionRequest;
                fromJSON(object: any): _706.QuerySessionRequest;
                toJSON(message: _706.QuerySessionRequest): unknown;
                fromPartial(object: {
                    id?: any;
                }): _706.QuerySessionRequest;
            };
            QueryParamsRequest: {
                encode(_: _706.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _706.QueryParamsRequest;
                fromJSON(_: any): _706.QueryParamsRequest;
                toJSON(_: _706.QueryParamsRequest): unknown;
                fromPartial(_: {}): _706.QueryParamsRequest;
            };
            QuerySessionsResponse: {
                encode(message: _706.QuerySessionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _706.QuerySessionsResponse;
                fromJSON(object: any): _706.QuerySessionsResponse;
                toJSON(message: _706.QuerySessionsResponse): unknown;
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
                        status?: _722.Status;
                        statusAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _706.QuerySessionsResponse;
            };
            QuerySessionsForAddressResponse: {
                encode(message: _706.QuerySessionsForAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _706.QuerySessionsForAddressResponse;
                fromJSON(object: any): _706.QuerySessionsForAddressResponse;
                toJSON(message: _706.QuerySessionsForAddressResponse): unknown;
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
                        status?: _722.Status;
                        statusAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _706.QuerySessionsForAddressResponse;
            };
            QuerySessionResponse: {
                encode(message: _706.QuerySessionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _706.QuerySessionResponse;
                fromJSON(object: any): _706.QuerySessionResponse;
                toJSON(message: _706.QuerySessionResponse): unknown;
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
                        status?: _722.Status;
                        statusAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                }): _706.QuerySessionResponse;
            };
            QueryParamsResponse: {
                encode(message: _706.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _706.QueryParamsResponse;
                fromJSON(object: any): _706.QueryParamsResponse;
                toJSON(message: _706.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        inactiveDuration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        proofVerificationEnabled?: boolean;
                    };
                }): _706.QueryParamsResponse;
            };
            Proof: {
                encode(message: _705.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _705.Proof;
                fromJSON(object: any): _705.Proof;
                toJSON(message: _705.Proof): unknown;
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
                }): _705.Proof;
            };
            Params: {
                encode(message: _704.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _704.Params;
                fromJSON(object: any): _704.Params;
                toJSON(message: _704.Params): unknown;
                fromPartial(object: {
                    inactiveDuration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    proofVerificationEnabled?: boolean;
                }): _704.Params;
            };
            MsgStartRequest: {
                encode(message: _703.MsgStartRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _703.MsgStartRequest;
                fromJSON(object: any): _703.MsgStartRequest;
                toJSON(message: _703.MsgStartRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    id?: any;
                    node?: string;
                }): _703.MsgStartRequest;
            };
            MsgUpdateRequest: {
                encode(message: _703.MsgUpdateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _703.MsgUpdateRequest;
                fromJSON(object: any): _703.MsgUpdateRequest;
                toJSON(message: _703.MsgUpdateRequest): unknown;
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
                }): _703.MsgUpdateRequest;
            };
            MsgEndRequest: {
                encode(message: _703.MsgEndRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _703.MsgEndRequest;
                fromJSON(object: any): _703.MsgEndRequest;
                toJSON(message: _703.MsgEndRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    id?: any;
                    rating?: any;
                }): _703.MsgEndRequest;
            };
            MsgStartResponse: {
                encode(_: _703.MsgStartResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _703.MsgStartResponse;
                fromJSON(_: any): _703.MsgStartResponse;
                toJSON(_: _703.MsgStartResponse): unknown;
                fromPartial(_: {}): _703.MsgStartResponse;
            };
            MsgUpdateResponse: {
                encode(_: _703.MsgUpdateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _703.MsgUpdateResponse;
                fromJSON(_: any): _703.MsgUpdateResponse;
                toJSON(_: _703.MsgUpdateResponse): unknown;
                fromPartial(_: {}): _703.MsgUpdateResponse;
            };
            MsgEndResponse: {
                encode(_: _703.MsgEndResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _703.MsgEndResponse;
                fromJSON(_: any): _703.MsgEndResponse;
                toJSON(_: _703.MsgEndResponse): unknown;
                fromPartial(_: {}): _703.MsgEndResponse;
            };
            GenesisState: {
                encode(message: _702.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _702.GenesisState;
                fromJSON(object: any): _702.GenesisState;
                toJSON(message: _702.GenesisState): unknown;
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
                        status?: _722.Status;
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
                }): _702.GenesisState;
            };
            EventStart: {
                encode(message: _701.EventStart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _701.EventStart;
                fromJSON(object: any): _701.EventStart;
                toJSON(message: _701.EventStart): unknown;
                fromPartial(object: {
                    id?: any;
                    node?: string;
                    subscription?: any;
                }): _701.EventStart;
            };
            EventUpdate: {
                encode(message: _701.EventUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _701.EventUpdate;
                fromJSON(object: any): _701.EventUpdate;
                toJSON(message: _701.EventUpdate): unknown;
                fromPartial(object: {
                    id?: any;
                    node?: string;
                    subscription?: any;
                }): _701.EventUpdate;
            };
            EventSetStatus: {
                encode(message: _701.EventSetStatus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _701.EventSetStatus;
                fromJSON(object: any): _701.EventSetStatus;
                toJSON(message: _701.EventSetStatus): unknown;
                fromPartial(object: {
                    id?: any;
                    node?: string;
                    subscription?: any;
                    status?: _722.Status;
                }): _701.EventSetStatus;
            };
            EventPay: {
                encode(message: _701.EventPay, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _701.EventPay;
                fromJSON(object: any): _701.EventPay;
                toJSON(message: _701.EventPay): unknown;
                fromPartial(object: {
                    id?: any;
                    node?: string;
                    subscription?: any;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _701.EventPay;
            };
        };
    }
    namespace subscription {
        const v1: {
            Subscription: {
                encode(message: _714.Subscription, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _714.Subscription;
                fromJSON(object: any): _714.Subscription;
                toJSON(message: _714.Subscription): unknown;
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
                    status?: _722.Status;
                    statusAt?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _714.Subscription;
            };
            Quota: {
                encode(message: _713.Quota, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _713.Quota;
                fromJSON(object: any): _713.Quota;
                toJSON(message: _713.Quota): unknown;
                fromPartial(object: {
                    address?: string;
                    allocated?: string;
                    consumed?: string;
                }): _713.Quota;
            };
            QuerySubscriptionsRequest: {
                encode(message: _712.QuerySubscriptionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _712.QuerySubscriptionsRequest;
                fromJSON(object: any): _712.QuerySubscriptionsRequest;
                toJSON(message: _712.QuerySubscriptionsRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _712.QuerySubscriptionsRequest;
            };
            QuerySubscriptionsForAddressRequest: {
                encode(message: _712.QuerySubscriptionsForAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _712.QuerySubscriptionsForAddressRequest;
                fromJSON(object: any): _712.QuerySubscriptionsForAddressRequest;
                toJSON(message: _712.QuerySubscriptionsForAddressRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    status?: _722.Status;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _712.QuerySubscriptionsForAddressRequest;
            };
            QuerySubscriptionRequest: {
                encode(message: _712.QuerySubscriptionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _712.QuerySubscriptionRequest;
                fromJSON(object: any): _712.QuerySubscriptionRequest;
                toJSON(message: _712.QuerySubscriptionRequest): unknown;
                fromPartial(object: {
                    id?: any;
                }): _712.QuerySubscriptionRequest;
            };
            QueryQuotaRequest: {
                encode(message: _712.QueryQuotaRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _712.QueryQuotaRequest;
                fromJSON(object: any): _712.QueryQuotaRequest;
                toJSON(message: _712.QueryQuotaRequest): unknown;
                fromPartial(object: {
                    id?: any;
                    address?: string;
                }): _712.QueryQuotaRequest;
            };
            QueryQuotasRequest: {
                encode(message: _712.QueryQuotasRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _712.QueryQuotasRequest;
                fromJSON(object: any): _712.QueryQuotasRequest;
                toJSON(message: _712.QueryQuotasRequest): unknown;
                fromPartial(object: {
                    id?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _712.QueryQuotasRequest;
            };
            QueryParamsRequest: {
                encode(_: _712.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _712.QueryParamsRequest;
                fromJSON(_: any): _712.QueryParamsRequest;
                toJSON(_: _712.QueryParamsRequest): unknown;
                fromPartial(_: {}): _712.QueryParamsRequest;
            };
            QuerySubscriptionsResponse: {
                encode(message: _712.QuerySubscriptionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _712.QuerySubscriptionsResponse;
                fromJSON(object: any): _712.QuerySubscriptionsResponse;
                toJSON(message: _712.QuerySubscriptionsResponse): unknown;
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
                        status?: _722.Status;
                        statusAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _712.QuerySubscriptionsResponse;
            };
            QuerySubscriptionsForAddressResponse: {
                encode(message: _712.QuerySubscriptionsForAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _712.QuerySubscriptionsForAddressResponse;
                fromJSON(object: any): _712.QuerySubscriptionsForAddressResponse;
                toJSON(message: _712.QuerySubscriptionsForAddressResponse): unknown;
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
                        status?: _722.Status;
                        statusAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _712.QuerySubscriptionsForAddressResponse;
            };
            QuerySubscriptionResponse: {
                encode(message: _712.QuerySubscriptionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _712.QuerySubscriptionResponse;
                fromJSON(object: any): _712.QuerySubscriptionResponse;
                toJSON(message: _712.QuerySubscriptionResponse): unknown;
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
                        status?: _722.Status;
                        statusAt?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                }): _712.QuerySubscriptionResponse;
            };
            QueryQuotaResponse: {
                encode(message: _712.QueryQuotaResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _712.QueryQuotaResponse;
                fromJSON(object: any): _712.QueryQuotaResponse;
                toJSON(message: _712.QueryQuotaResponse): unknown;
                fromPartial(object: {
                    quota?: {
                        address?: string;
                        allocated?: string;
                        consumed?: string;
                    };
                }): _712.QueryQuotaResponse;
            };
            QueryQuotasResponse: {
                encode(message: _712.QueryQuotasResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _712.QueryQuotasResponse;
                fromJSON(object: any): _712.QueryQuotasResponse;
                toJSON(message: _712.QueryQuotasResponse): unknown;
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
                }): _712.QueryQuotasResponse;
            };
            QueryParamsResponse: {
                encode(message: _712.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _712.QueryParamsResponse;
                fromJSON(object: any): _712.QueryParamsResponse;
                toJSON(message: _712.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        inactiveDuration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                }): _712.QueryParamsResponse;
            };
            Params: {
                encode(message: _711.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _711.Params;
                fromJSON(object: any): _711.Params;
                toJSON(message: _711.Params): unknown;
                fromPartial(object: {
                    inactiveDuration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _711.Params;
            };
            MsgSubscribeToNodeRequest: {
                encode(message: _710.MsgSubscribeToNodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _710.MsgSubscribeToNodeRequest;
                fromJSON(object: any): _710.MsgSubscribeToNodeRequest;
                toJSON(message: _710.MsgSubscribeToNodeRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    address?: string;
                    deposit?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _710.MsgSubscribeToNodeRequest;
            };
            MsgSubscribeToPlanRequest: {
                encode(message: _710.MsgSubscribeToPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _710.MsgSubscribeToPlanRequest;
                fromJSON(object: any): _710.MsgSubscribeToPlanRequest;
                toJSON(message: _710.MsgSubscribeToPlanRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    id?: any;
                    denom?: string;
                }): _710.MsgSubscribeToPlanRequest;
            };
            MsgCancelRequest: {
                encode(message: _710.MsgCancelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _710.MsgCancelRequest;
                fromJSON(object: any): _710.MsgCancelRequest;
                toJSON(message: _710.MsgCancelRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    id?: any;
                }): _710.MsgCancelRequest;
            };
            MsgAddQuotaRequest: {
                encode(message: _710.MsgAddQuotaRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _710.MsgAddQuotaRequest;
                fromJSON(object: any): _710.MsgAddQuotaRequest;
                toJSON(message: _710.MsgAddQuotaRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    id?: any;
                    address?: string;
                    bytes?: string;
                }): _710.MsgAddQuotaRequest;
            };
            MsgUpdateQuotaRequest: {
                encode(message: _710.MsgUpdateQuotaRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _710.MsgUpdateQuotaRequest;
                fromJSON(object: any): _710.MsgUpdateQuotaRequest;
                toJSON(message: _710.MsgUpdateQuotaRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    id?: any;
                    address?: string;
                    bytes?: string;
                }): _710.MsgUpdateQuotaRequest;
            };
            MsgSubscribeToNodeResponse: {
                encode(_: _710.MsgSubscribeToNodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _710.MsgSubscribeToNodeResponse;
                fromJSON(_: any): _710.MsgSubscribeToNodeResponse;
                toJSON(_: _710.MsgSubscribeToNodeResponse): unknown;
                fromPartial(_: {}): _710.MsgSubscribeToNodeResponse;
            };
            MsgSubscribeToPlanResponse: {
                encode(_: _710.MsgSubscribeToPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _710.MsgSubscribeToPlanResponse;
                fromJSON(_: any): _710.MsgSubscribeToPlanResponse;
                toJSON(_: _710.MsgSubscribeToPlanResponse): unknown;
                fromPartial(_: {}): _710.MsgSubscribeToPlanResponse;
            };
            MsgCancelResponse: {
                encode(_: _710.MsgCancelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _710.MsgCancelResponse;
                fromJSON(_: any): _710.MsgCancelResponse;
                toJSON(_: _710.MsgCancelResponse): unknown;
                fromPartial(_: {}): _710.MsgCancelResponse;
            };
            MsgAddQuotaResponse: {
                encode(_: _710.MsgAddQuotaResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _710.MsgAddQuotaResponse;
                fromJSON(_: any): _710.MsgAddQuotaResponse;
                toJSON(_: _710.MsgAddQuotaResponse): unknown;
                fromPartial(_: {}): _710.MsgAddQuotaResponse;
            };
            MsgUpdateQuotaResponse: {
                encode(_: _710.MsgUpdateQuotaResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _710.MsgUpdateQuotaResponse;
                fromJSON(_: any): _710.MsgUpdateQuotaResponse;
                toJSON(_: _710.MsgUpdateQuotaResponse): unknown;
                fromPartial(_: {}): _710.MsgUpdateQuotaResponse;
            };
            GenesisSubscription: {
                encode(message: _709.GenesisSubscription, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _709.GenesisSubscription;
                fromJSON(object: any): _709.GenesisSubscription;
                toJSON(message: _709.GenesisSubscription): unknown;
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
                        status?: _722.Status;
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
                }): _709.GenesisSubscription;
            };
            GenesisState: {
                encode(message: _709.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _709.GenesisState;
                fromJSON(object: any): _709.GenesisState;
                toJSON(message: _709.GenesisState): unknown;
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
                            status?: _722.Status;
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
                }): _709.GenesisState;
            };
            EventSubscribe: {
                encode(message: _708.EventSubscribe, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _708.EventSubscribe;
                fromJSON(object: any): _708.EventSubscribe;
                toJSON(message: _708.EventSubscribe): unknown;
                fromPartial(object: {
                    id?: any;
                    node?: string;
                    plan?: any;
                }): _708.EventSubscribe;
            };
            EventSetStatus: {
                encode(message: _708.EventSetStatus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _708.EventSetStatus;
                fromJSON(object: any): _708.EventSetStatus;
                toJSON(message: _708.EventSetStatus): unknown;
                fromPartial(object: {
                    id?: any;
                    status?: _722.Status;
                }): _708.EventSetStatus;
            };
            EventAddQuota: {
                encode(message: _708.EventAddQuota, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _708.EventAddQuota;
                fromJSON(object: any): _708.EventAddQuota;
                toJSON(message: _708.EventAddQuota): unknown;
                fromPartial(object: {
                    id?: any;
                    address?: string;
                }): _708.EventAddQuota;
            };
            EventUpdateQuota: {
                encode(message: _708.EventUpdateQuota, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _708.EventUpdateQuota;
                fromJSON(object: any): _708.EventUpdateQuota;
                toJSON(message: _708.EventUpdateQuota): unknown;
                fromPartial(object: {
                    id?: any;
                    address?: string;
                }): _708.EventUpdateQuota;
            };
        };
    }
    namespace swap {
        const v1: {
            Swap: {
                encode(message: _720.Swap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _720.Swap;
                fromJSON(object: any): _720.Swap;
                toJSON(message: _720.Swap): unknown;
                fromPartial(object: {
                    txHash?: Uint8Array;
                    receiver?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _720.Swap;
            };
            QuerySwapsRequest: {
                encode(message: _719.QuerySwapsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _719.QuerySwapsRequest;
                fromJSON(object: any): _719.QuerySwapsRequest;
                toJSON(message: _719.QuerySwapsRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _719.QuerySwapsRequest;
            };
            QuerySwapRequest: {
                encode(message: _719.QuerySwapRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _719.QuerySwapRequest;
                fromJSON(object: any): _719.QuerySwapRequest;
                toJSON(message: _719.QuerySwapRequest): unknown;
                fromPartial(object: {
                    txHash?: Uint8Array;
                }): _719.QuerySwapRequest;
            };
            QueryParamsRequest: {
                encode(_: _719.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _719.QueryParamsRequest;
                fromJSON(_: any): _719.QueryParamsRequest;
                toJSON(_: _719.QueryParamsRequest): unknown;
                fromPartial(_: {}): _719.QueryParamsRequest;
            };
            QuerySwapsResponse: {
                encode(message: _719.QuerySwapsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _719.QuerySwapsResponse;
                fromJSON(object: any): _719.QuerySwapsResponse;
                toJSON(message: _719.QuerySwapsResponse): unknown;
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
                }): _719.QuerySwapsResponse;
            };
            QuerySwapResponse: {
                encode(message: _719.QuerySwapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _719.QuerySwapResponse;
                fromJSON(object: any): _719.QuerySwapResponse;
                toJSON(message: _719.QuerySwapResponse): unknown;
                fromPartial(object: {
                    swap?: {
                        txHash?: Uint8Array;
                        receiver?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        };
                    };
                }): _719.QuerySwapResponse;
            };
            QueryParamsResponse: {
                encode(message: _719.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _719.QueryParamsResponse;
                fromJSON(object: any): _719.QueryParamsResponse;
                toJSON(message: _719.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        swapEnabled?: boolean;
                        swapDenom?: string;
                        approveBy?: string;
                    };
                }): _719.QueryParamsResponse;
            };
            Params: {
                encode(message: _718.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _718.Params;
                fromJSON(object: any): _718.Params;
                toJSON(message: _718.Params): unknown;
                fromPartial(object: {
                    swapEnabled?: boolean;
                    swapDenom?: string;
                    approveBy?: string;
                }): _718.Params;
            };
            MsgSwapRequest: {
                encode(message: _717.MsgSwapRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _717.MsgSwapRequest;
                fromJSON(object: any): _717.MsgSwapRequest;
                toJSON(message: _717.MsgSwapRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    txHash?: Uint8Array;
                    receiver?: string;
                    amount?: string;
                }): _717.MsgSwapRequest;
            };
            MsgSwapResponse: {
                encode(_: _717.MsgSwapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _717.MsgSwapResponse;
                fromJSON(_: any): _717.MsgSwapResponse;
                toJSON(_: _717.MsgSwapResponse): unknown;
                fromPartial(_: {}): _717.MsgSwapResponse;
            };
            GenesisState: {
                encode(message: _716.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _716.GenesisState;
                fromJSON(object: any): _716.GenesisState;
                toJSON(message: _716.GenesisState): unknown;
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
                }): _716.GenesisState;
            };
            EventSwap: {
                encode(message: _715.EventSwap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _715.EventSwap;
                fromJSON(object: any): _715.EventSwap;
                toJSON(message: _715.EventSwap): unknown;
                fromPartial(object: {
                    txHash?: Uint8Array;
                    receiver?: string;
                }): _715.EventSwap;
            };
        };
    }
    namespace types {
        const v1: {
            statusFromJSON(object: any): _722.Status;
            statusToJSON(object: _722.Status): string;
            Status: typeof _722.Status;
            Bandwidth: {
                encode(message: _721.Bandwidth, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _721.Bandwidth;
                fromJSON(object: any): _721.Bandwidth;
                toJSON(message: _721.Bandwidth): unknown;
                fromPartial(object: {
                    upload?: string;
                    download?: string;
                }): _721.Bandwidth;
            };
        };
    }
    namespace vpn {
        const v1: {
            GenesisState: {
                encode(message: _723.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _723.GenesisState;
                fromJSON(object: any): _723.GenesisState;
                toJSON(message: _723.GenesisState): unknown;
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
                            status?: _722.Status;
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
                            status?: _722.Status;
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
                            status?: _722.Status;
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
                                status?: _722.Status;
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
                }): _723.GenesisState;
            };
        };
    }
}
