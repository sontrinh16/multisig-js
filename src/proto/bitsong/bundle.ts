import * as _59 from "./fantoken/v1beta1/tx";
import * as _60 from "./merkledrop/v1beta1/events";
import * as _61 from "./merkledrop/v1beta1/genesis";
import * as _62 from "./merkledrop/v1beta1/gov";
import * as _63 from "./merkledrop/v1beta1/merkledrop";
import * as _64 from "./merkledrop/v1beta1/params";
import * as _65 from "./merkledrop/v1beta1/query";
import * as _66 from "./merkledrop/v1beta1/tx";
import * as _740 from "./fantoken/v1beta1/tx.amino";
import * as _741 from "./merkledrop/v1beta1/tx.amino";
import * as _742 from "./fantoken/v1beta1/tx.registry";
import * as _743 from "./merkledrop/v1beta1/tx.registry";
export namespace bitsong {
  export const fantoken = { ..._59,
    ..._740,
    ..._742
  };
  export namespace merkledrop {
    export const v1beta1 = { ..._60,
      ..._61,
      ..._62,
      ..._63,
      ..._64,
      ..._65,
      ..._66,
      ..._741,
      ..._743
    };
  }
}