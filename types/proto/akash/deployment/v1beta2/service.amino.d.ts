import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateDeployment, MsgDepositDeployment, MsgUpdateDeployment, MsgCloseDeployment } from "./deploymentmsg";
import { MsgCloseGroup, MsgPauseGroup, MsgStartGroup } from "./groupmsg";
export interface AminoMsgCreateDeployment extends AminoMsg {
    type: "/akash.deployment.v1beta2.MsgCreateDeployment";
    value: {
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
}
export interface AminoMsgDepositDeployment extends AminoMsg {
    type: "/akash.deployment.v1beta2.MsgDepositDeployment";
    value: {
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
}
export interface AminoMsgUpdateDeployment extends AminoMsg {
    type: "/akash.deployment.v1beta2.MsgUpdateDeployment";
    value: {
        id: {
            owner: string;
            dseq: string;
        };
        version: Uint8Array;
    };
}
export interface AminoMsgCloseDeployment extends AminoMsg {
    type: "/akash.deployment.v1beta2.MsgCloseDeployment";
    value: {
        id: {
            owner: string;
            dseq: string;
        };
    };
}
export interface AminoMsgCloseGroup extends AminoMsg {
    type: "/akash.deployment.v1beta2.MsgCloseGroup";
    value: {
        id: {
            owner: string;
            dseq: string;
            gseq: number;
        };
    };
}
export interface AminoMsgPauseGroup extends AminoMsg {
    type: "/akash.deployment.v1beta2.MsgPauseGroup";
    value: {
        id: {
            owner: string;
            dseq: string;
            gseq: number;
        };
    };
}
export interface AminoMsgStartGroup extends AminoMsg {
    type: "/akash.deployment.v1beta2.MsgStartGroup";
    value: {
        id: {
            owner: string;
            dseq: string;
            gseq: number;
        };
    };
}
export declare const AminoConverter: {
    "/akash.deployment.v1beta2.MsgCreateDeployment": {
        aminoType: string;
        toAmino: ({ id, groups, version, deposit, depositor }: MsgCreateDeployment) => AminoMsgCreateDeployment["value"];
        fromAmino: ({ id, groups, version, deposit, depositor }: AminoMsgCreateDeployment["value"]) => MsgCreateDeployment;
    };
    "/akash.deployment.v1beta2.MsgDepositDeployment": {
        aminoType: string;
        toAmino: ({ id, amount, depositor }: MsgDepositDeployment) => AminoMsgDepositDeployment["value"];
        fromAmino: ({ id, amount, depositor }: AminoMsgDepositDeployment["value"]) => MsgDepositDeployment;
    };
    "/akash.deployment.v1beta2.MsgUpdateDeployment": {
        aminoType: string;
        toAmino: ({ id, version }: MsgUpdateDeployment) => AminoMsgUpdateDeployment["value"];
        fromAmino: ({ id, version }: AminoMsgUpdateDeployment["value"]) => MsgUpdateDeployment;
    };
    "/akash.deployment.v1beta2.MsgCloseDeployment": {
        aminoType: string;
        toAmino: ({ id }: MsgCloseDeployment) => AminoMsgCloseDeployment["value"];
        fromAmino: ({ id }: AminoMsgCloseDeployment["value"]) => MsgCloseDeployment;
    };
    "/akash.deployment.v1beta2.MsgCloseGroup": {
        aminoType: string;
        toAmino: ({ id }: MsgCloseGroup) => AminoMsgCloseGroup["value"];
        fromAmino: ({ id }: AminoMsgCloseGroup["value"]) => MsgCloseGroup;
    };
    "/akash.deployment.v1beta2.MsgPauseGroup": {
        aminoType: string;
        toAmino: ({ id }: MsgPauseGroup) => AminoMsgPauseGroup["value"];
        fromAmino: ({ id }: AminoMsgPauseGroup["value"]) => MsgPauseGroup;
    };
    "/akash.deployment.v1beta2.MsgStartGroup": {
        aminoType: string;
        toAmino: ({ id }: MsgStartGroup) => AminoMsgStartGroup["value"];
        fromAmino: ({ id }: AminoMsgStartGroup["value"]) => MsgStartGroup;
    };
};
