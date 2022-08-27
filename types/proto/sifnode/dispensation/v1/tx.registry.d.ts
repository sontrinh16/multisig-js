import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateDistribution, MsgCreateUserClaim, MsgRunDistribution } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createDistribution(value: MsgCreateDistribution): {
            typeUrl: string;
            value: Uint8Array;
        };
        createUserClaim(value: MsgCreateUserClaim): {
            typeUrl: string;
            value: Uint8Array;
        };
        runDistribution(value: MsgRunDistribution): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createDistribution(value: MsgCreateDistribution): {
            typeUrl: string;
            value: MsgCreateDistribution;
        };
        createUserClaim(value: MsgCreateUserClaim): {
            typeUrl: string;
            value: MsgCreateUserClaim;
        };
        runDistribution(value: MsgRunDistribution): {
            typeUrl: string;
            value: MsgRunDistribution;
        };
    };
    toJSON: {
        createDistribution(value: MsgCreateDistribution): {
            typeUrl: string;
            value: unknown;
        };
        createUserClaim(value: MsgCreateUserClaim): {
            typeUrl: string;
            value: unknown;
        };
        runDistribution(value: MsgRunDistribution): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        createDistribution(value: any): {
            typeUrl: string;
            value: MsgCreateDistribution;
        };
        createUserClaim(value: any): {
            typeUrl: string;
            value: MsgCreateUserClaim;
        };
        runDistribution(value: any): {
            typeUrl: string;
            value: MsgRunDistribution;
        };
    };
    fromPartial: {
        createDistribution(value: MsgCreateDistribution): {
            typeUrl: string;
            value: MsgCreateDistribution;
        };
        createUserClaim(value: MsgCreateUserClaim): {
            typeUrl: string;
            value: MsgCreateUserClaim;
        };
        runDistribution(value: MsgRunDistribution): {
            typeUrl: string;
            value: MsgRunDistribution;
        };
    };
};
