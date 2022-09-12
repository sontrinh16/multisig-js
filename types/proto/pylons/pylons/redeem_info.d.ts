import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface RedeemInfo {
    id: string;
    processorName: string;
    address: string;
    amount: string;
    signature: string;
}
export interface CreatePaymentAccount {
    address: string;
    token: string;
    signature: string;
}
export declare const RedeemInfo: {
    encode(message: RedeemInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RedeemInfo;
    fromJSON(object: any): RedeemInfo;
    toJSON(message: RedeemInfo): unknown;
    fromPartial(object: DeepPartial<RedeemInfo>): RedeemInfo;
};
export declare const CreatePaymentAccount: {
    encode(message: CreatePaymentAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreatePaymentAccount;
    fromJSON(object: any): CreatePaymentAccount;
    toJSON(message: CreatePaymentAccount): unknown;
    fromPartial(object: DeepPartial<CreatePaymentAccount>): CreatePaymentAccount;
};
