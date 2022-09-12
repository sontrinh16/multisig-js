import { Timestamp } from "../../../../google/protobuf/timestamp";
import { Duration } from "../../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** BasketCredit represents the information for a credit batch inside a basket. */
export interface BasketCredit {
    /** batch_denom is the unique ID of the credit batch. */
    batchDenom: string;
    /**
     * amount is the number of credits being put into or taken out of the basket.
     * Decimal values are acceptable within the precision of the corresponding
     * credit type for this batch.
     */
    amount: string;
}
/**
 * DateCriteria represents the information for credit acceptance in a basket.
 * At most, only one of the values should be set.
 * NOTE: gogo proto `oneof` is not compatible with Amino signing, hence we
 * directly define both `start_date_window` and `min_start_date`. In the future,
 * with pulsar, this should change and we should use `oneof`.
 */
export interface DateCriteria {
    /**
     * min_start_date (optional) is the earliest start date for batches of credits
     * allowed into the basket. At most only one of `start_date_window`,
     * `min_start_date`, and `years_in_the_past` can be set for a basket.
     */
    minStartDate: Timestamp;
    /**
     * start_date_window (optional) is a duration of time measured into the past
     * which sets a cutoff for batch start dates when adding new credits to the
     * basket. Based on the current block timestamp, credits whose start date is
     * before `block_timestamp - start_date_window` will not be allowed into the
     * basket. At most only one of `start_date_window`, `min_start_date`, and
     * `years_in_the_past` can be set for a basket.
     */
    startDateWindow: Duration;
    /**
     * years_in_the_past (optional) is the number of years into the past which
     * sets a cutoff for the batch start dates when adding new credits to the
     * basket. Based on the current block timestamp, credits whose start date year
     * is less than `block_timestamp_year - years_in_the_past` will not be allowed
     * into the basket. At most only one of `start_date_window`, `min_start_date`,
     * and `years_in_the_past` can be set for a basket.
     *
     * Since Revision 1
     */
    yearsInThePast: number;
}
export declare const BasketCredit: {
    encode(message: BasketCredit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BasketCredit;
    fromJSON(object: any): BasketCredit;
    toJSON(message: BasketCredit): unknown;
    fromPartial(object: DeepPartial<BasketCredit>): BasketCredit;
};
export declare const DateCriteria: {
    encode(message: DateCriteria, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DateCriteria;
    fromJSON(object: any): DateCriteria;
    toJSON(message: DateCriteria): unknown;
    fromPartial(object: DeepPartial<DateCriteria>): DateCriteria;
};
