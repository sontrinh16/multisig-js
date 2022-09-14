import * as _127 from "./fantoken/v1beta1/tx";
import * as _128 from "./merkledrop/v1beta1/events";
import * as _129 from "./merkledrop/v1beta1/genesis";
import * as _130 from "./merkledrop/v1beta1/gov";
import * as _131 from "./merkledrop/v1beta1/merkledrop";
import * as _132 from "./merkledrop/v1beta1/params";
import * as _133 from "./merkledrop/v1beta1/query";
import * as _134 from "./merkledrop/v1beta1/tx";
import * as _810 from "./fantoken/v1beta1/tx.amino";
import * as _811 from "./merkledrop/v1beta1/tx.amino";
import * as _812 from "./fantoken/v1beta1/tx.registry";
import * as _813 from "./merkledrop/v1beta1/tx.registry";
export namespace bitsong {
  export const fantoken = { ..._127,
    ..._810,
    ..._812
  };
  export namespace merkledrop {
    export const v1beta1 = { ..._128,
      ..._129,
      ..._130,
      ..._131,
      ..._132,
      ..._133,
      ..._134,
      ..._811,
      ..._813
    };
  }
}