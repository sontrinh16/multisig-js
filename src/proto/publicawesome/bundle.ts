import * as _667 from "../stargaze/alloc/v1beta1/genesis";
import * as _668 from "../stargaze/alloc/v1beta1/params";
import * as _669 from "../stargaze/alloc/v1beta1/query";
import * as _670 from "../stargaze/alloc/v1beta1/tx";
import * as _671 from "../stargaze/claim/v1beta1/claim_record";
import * as _672 from "../stargaze/claim/v1beta1/genesis";
import * as _673 from "../stargaze/claim/v1beta1/params";
import * as _674 from "../stargaze/claim/v1beta1/query";
import * as _675 from "../stargaze/claim/v1beta1/tx";
import * as _883 from "../stargaze/alloc/v1beta1/tx.amino";
import * as _884 from "../stargaze/claim/v1beta1/tx.amino";
import * as _885 from "../stargaze/alloc/v1beta1/tx.registry";
import * as _886 from "../stargaze/claim/v1beta1/tx.registry";
export namespace publicawesome {
  export namespace stargaze {
    export namespace alloc {
      export const v1beta1 = { ..._667,
        ..._668,
        ..._669,
        ..._670,
        ..._883,
        ..._885
      };
    }
    export namespace claim {
      export const v1beta1 = { ..._671,
        ..._672,
        ..._673,
        ..._674,
        ..._675,
        ..._884,
        ..._886
      };
    }
  }
}