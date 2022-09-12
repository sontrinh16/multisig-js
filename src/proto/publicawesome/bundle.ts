import * as _686 from "../stargaze/alloc/v1beta1/genesis";
import * as _687 from "../stargaze/alloc/v1beta1/params";
import * as _688 from "../stargaze/alloc/v1beta1/query";
import * as _689 from "../stargaze/alloc/v1beta1/tx";
import * as _690 from "../stargaze/claim/v1beta1/claim_record";
import * as _691 from "../stargaze/claim/v1beta1/genesis";
import * as _692 from "../stargaze/claim/v1beta1/params";
import * as _693 from "../stargaze/claim/v1beta1/query";
import * as _694 from "../stargaze/claim/v1beta1/tx";
import * as _904 from "../stargaze/alloc/v1beta1/tx.amino";
import * as _905 from "../stargaze/claim/v1beta1/tx.amino";
import * as _906 from "../stargaze/alloc/v1beta1/tx.registry";
import * as _907 from "../stargaze/claim/v1beta1/tx.registry";
export namespace publicawesome {
  export namespace stargaze {
    export namespace alloc {
      export const v1beta1 = { ..._686,
        ..._687,
        ..._688,
        ..._689,
        ..._904,
        ..._906
      };
    }
    export namespace claim {
      export const v1beta1 = { ..._690,
        ..._691,
        ..._692,
        ..._693,
        ..._694,
        ..._905,
        ..._907
      };
    }
  }
}