import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateClawbackVestingAccount, MsgClawback } from "./tx";
export interface AminoMsgCreateClawbackVestingAccount extends AminoMsg {
    type: "/echelon.vesting.v1.MsgCreateClawbackVestingAccount";
    value: {
        from_address: string;
        to_address: string;
        start_time: {
            seconds: string;
            nanos: number;
        };
        lockup_periods: {
            length: string;
            amount: {
                denom: string;
                amount: string;
            }[];
        }[];
        vesting_periods: {
            length: string;
            amount: {
                denom: string;
                amount: string;
            }[];
        }[];
        merge: boolean;
    };
}
export interface AminoMsgClawback extends AminoMsg {
    type: "/echelon.vesting.v1.MsgClawback";
    value: {
        funder_address: string;
        account_address: string;
        dest_address: string;
    };
}
export declare const AminoConverter: {
    "/echelon.vesting.v1.MsgCreateClawbackVestingAccount": {
        aminoType: string;
        toAmino: ({ fromAddress, toAddress, startTime, lockupPeriods, vestingPeriods, merge }: MsgCreateClawbackVestingAccount) => AminoMsgCreateClawbackVestingAccount["value"];
        fromAmino: ({ from_address, to_address, start_time, lockup_periods, vesting_periods, merge }: AminoMsgCreateClawbackVestingAccount["value"]) => MsgCreateClawbackVestingAccount;
    };
    "/echelon.vesting.v1.MsgClawback": {
        aminoType: string;
        toAmino: ({ funderAddress, accountAddress, destAddress }: MsgClawback) => AminoMsgClawback["value"];
        fromAmino: ({ funder_address, account_address, dest_address }: AminoMsgClawback["value"]) => MsgClawback;
    };
};
