import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** TgradeContractDetails is a custom extension to the wasmd ContractInfo */
export interface TgradeContractDetails {
    registeredPrivileges: RegisteredPrivilege[];
}
/** RegisteredPrivilege stores position and privilege name */
export interface RegisteredPrivilege {
    position: number;
    privilegeType: string;
}
export declare const TgradeContractDetails: {
    encode(message: TgradeContractDetails, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TgradeContractDetails;
    fromJSON(object: any): TgradeContractDetails;
    toJSON(message: TgradeContractDetails): unknown;
    fromPartial(object: DeepPartial<TgradeContractDetails>): TgradeContractDetails;
};
export declare const RegisteredPrivilege: {
    encode(message: RegisteredPrivilege, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisteredPrivilege;
    fromJSON(object: any): RegisteredPrivilege;
    toJSON(message: RegisteredPrivilege): unknown;
    fromPartial(object: DeepPartial<RegisteredPrivilege>): RegisteredPrivilege;
};
