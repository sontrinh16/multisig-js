import * as _754 from "../stargaze/alloc/v1beta1/genesis";
import * as _755 from "../stargaze/alloc/v1beta1/params";
import * as _756 from "../stargaze/alloc/v1beta1/query";
import * as _757 from "../stargaze/alloc/v1beta1/tx";
import * as _758 from "../stargaze/claim/v1beta1/claim_record";
import * as _759 from "../stargaze/claim/v1beta1/genesis";
import * as _760 from "../stargaze/claim/v1beta1/params";
import * as _761 from "../stargaze/claim/v1beta1/query";
import * as _762 from "../stargaze/claim/v1beta1/tx";
import * as _974 from "../stargaze/alloc/v1beta1/tx.amino";
import * as _975 from "../stargaze/claim/v1beta1/tx.amino";
import * as _976 from "../stargaze/alloc/v1beta1/tx.registry";
import * as _977 from "../stargaze/claim/v1beta1/tx.registry";
export namespace publicawesome {
  export namespace stargaze {
    export namespace alloc {
      export const v1beta1 = { ..._754,
        ..._755,
        ..._756,
        ..._757,
        ..._974,
        ..._976
      };
    }
    export namespace claim {
      export const v1beta1 = { ..._758,
        ..._759,
        ..._760,
        ..._761,
        ..._762,
        ..._975,
        ..._977
      };
    }
  }
}