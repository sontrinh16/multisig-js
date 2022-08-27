import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgDistributeRewards, MsgResetAccount, MsgMint, MsgBurn } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        distributeRewards(value: MsgDistributeRewards): {
            typeUrl: string;
            value: Uint8Array;
        };
        resetAccount(value: MsgResetAccount): {
            typeUrl: string;
            value: Uint8Array;
        };
        mint(value: MsgMint): {
            typeUrl: string;
            value: Uint8Array;
        };
        burn(value: MsgBurn): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        distributeRewards(value: MsgDistributeRewards): {
            typeUrl: string;
            value: MsgDistributeRewards;
        };
        resetAccount(value: MsgResetAccount): {
            typeUrl: string;
            value: MsgResetAccount;
        };
        mint(value: MsgMint): {
            typeUrl: string;
            value: MsgMint;
        };
        burn(value: MsgBurn): {
            typeUrl: string;
            value: MsgBurn;
        };
    };
    toJSON: {
        distributeRewards(value: MsgDistributeRewards): {
            typeUrl: string;
            value: unknown;
        };
        resetAccount(value: MsgResetAccount): {
            typeUrl: string;
            value: unknown;
        };
        mint(value: MsgMint): {
            typeUrl: string;
            value: unknown;
        };
        burn(value: MsgBurn): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        distributeRewards(value: any): {
            typeUrl: string;
            value: MsgDistributeRewards;
        };
        resetAccount(value: any): {
            typeUrl: string;
            value: MsgResetAccount;
        };
        mint(value: any): {
            typeUrl: string;
            value: MsgMint;
        };
        burn(value: any): {
            typeUrl: string;
            value: MsgBurn;
        };
    };
    fromPartial: {
        distributeRewards(value: MsgDistributeRewards): {
            typeUrl: string;
            value: MsgDistributeRewards;
        };
        resetAccount(value: MsgResetAccount): {
            typeUrl: string;
            value: MsgResetAccount;
        };
        mint(value: MsgMint): {
            typeUrl: string;
            value: MsgMint;
        };
        burn(value: MsgBurn): {
            typeUrl: string;
            value: MsgBurn;
        };
    };
};
