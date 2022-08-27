import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateThought, MsgForgetThought, MsgChangeThoughtParticle, MsgChangeThoughtName, MsgChangeThoughtInput, MsgChangeThoughtGasPrice, MsgChangeThoughtPeriod, MsgChangeThoughtBlock } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createThought(value: MsgCreateThought): {
            typeUrl: string;
            value: Uint8Array;
        };
        forgetThought(value: MsgForgetThought): {
            typeUrl: string;
            value: Uint8Array;
        };
        changeThoughtParticle(value: MsgChangeThoughtParticle): {
            typeUrl: string;
            value: Uint8Array;
        };
        changeThoughtName(value: MsgChangeThoughtName): {
            typeUrl: string;
            value: Uint8Array;
        };
        changeThoughtInput(value: MsgChangeThoughtInput): {
            typeUrl: string;
            value: Uint8Array;
        };
        changeThoughtGasPrice(value: MsgChangeThoughtGasPrice): {
            typeUrl: string;
            value: Uint8Array;
        };
        changeThoughtPeriod(value: MsgChangeThoughtPeriod): {
            typeUrl: string;
            value: Uint8Array;
        };
        changeThoughtBlock(value: MsgChangeThoughtBlock): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createThought(value: MsgCreateThought): {
            typeUrl: string;
            value: MsgCreateThought;
        };
        forgetThought(value: MsgForgetThought): {
            typeUrl: string;
            value: MsgForgetThought;
        };
        changeThoughtParticle(value: MsgChangeThoughtParticle): {
            typeUrl: string;
            value: MsgChangeThoughtParticle;
        };
        changeThoughtName(value: MsgChangeThoughtName): {
            typeUrl: string;
            value: MsgChangeThoughtName;
        };
        changeThoughtInput(value: MsgChangeThoughtInput): {
            typeUrl: string;
            value: MsgChangeThoughtInput;
        };
        changeThoughtGasPrice(value: MsgChangeThoughtGasPrice): {
            typeUrl: string;
            value: MsgChangeThoughtGasPrice;
        };
        changeThoughtPeriod(value: MsgChangeThoughtPeriod): {
            typeUrl: string;
            value: MsgChangeThoughtPeriod;
        };
        changeThoughtBlock(value: MsgChangeThoughtBlock): {
            typeUrl: string;
            value: MsgChangeThoughtBlock;
        };
    };
    toJSON: {
        createThought(value: MsgCreateThought): {
            typeUrl: string;
            value: unknown;
        };
        forgetThought(value: MsgForgetThought): {
            typeUrl: string;
            value: unknown;
        };
        changeThoughtParticle(value: MsgChangeThoughtParticle): {
            typeUrl: string;
            value: unknown;
        };
        changeThoughtName(value: MsgChangeThoughtName): {
            typeUrl: string;
            value: unknown;
        };
        changeThoughtInput(value: MsgChangeThoughtInput): {
            typeUrl: string;
            value: unknown;
        };
        changeThoughtGasPrice(value: MsgChangeThoughtGasPrice): {
            typeUrl: string;
            value: unknown;
        };
        changeThoughtPeriod(value: MsgChangeThoughtPeriod): {
            typeUrl: string;
            value: unknown;
        };
        changeThoughtBlock(value: MsgChangeThoughtBlock): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        createThought(value: any): {
            typeUrl: string;
            value: MsgCreateThought;
        };
        forgetThought(value: any): {
            typeUrl: string;
            value: MsgForgetThought;
        };
        changeThoughtParticle(value: any): {
            typeUrl: string;
            value: MsgChangeThoughtParticle;
        };
        changeThoughtName(value: any): {
            typeUrl: string;
            value: MsgChangeThoughtName;
        };
        changeThoughtInput(value: any): {
            typeUrl: string;
            value: MsgChangeThoughtInput;
        };
        changeThoughtGasPrice(value: any): {
            typeUrl: string;
            value: MsgChangeThoughtGasPrice;
        };
        changeThoughtPeriod(value: any): {
            typeUrl: string;
            value: MsgChangeThoughtPeriod;
        };
        changeThoughtBlock(value: any): {
            typeUrl: string;
            value: MsgChangeThoughtBlock;
        };
    };
    fromPartial: {
        createThought(value: MsgCreateThought): {
            typeUrl: string;
            value: MsgCreateThought;
        };
        forgetThought(value: MsgForgetThought): {
            typeUrl: string;
            value: MsgForgetThought;
        };
        changeThoughtParticle(value: MsgChangeThoughtParticle): {
            typeUrl: string;
            value: MsgChangeThoughtParticle;
        };
        changeThoughtName(value: MsgChangeThoughtName): {
            typeUrl: string;
            value: MsgChangeThoughtName;
        };
        changeThoughtInput(value: MsgChangeThoughtInput): {
            typeUrl: string;
            value: MsgChangeThoughtInput;
        };
        changeThoughtGasPrice(value: MsgChangeThoughtGasPrice): {
            typeUrl: string;
            value: MsgChangeThoughtGasPrice;
        };
        changeThoughtPeriod(value: MsgChangeThoughtPeriod): {
            typeUrl: string;
            value: MsgChangeThoughtPeriod;
        };
        changeThoughtBlock(value: MsgChangeThoughtBlock): {
            typeUrl: string;
            value: MsgChangeThoughtBlock;
        };
    };
};
