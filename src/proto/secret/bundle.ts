import * as _581 from "./compute/v1beta1/genesis";
import * as _582 from "./compute/v1beta1/msg";
import * as _583 from "./compute/v1beta1/query";
import * as _584 from "./compute/v1beta1/types";
import * as _585 from "./intertx/v1beta1/query";
import * as _586 from "./intertx/v1beta1/tx";
import * as _587 from "./registration/v1beta1/genesis";
import * as _588 from "./registration/v1beta1/msg";
import * as _589 from "./registration/v1beta1/query";
import * as _590 from "./registration/v1beta1/types";
import * as _591 from "./registration/v1beta1/remote_attestation/types";
import * as _867 from "./intertx/v1beta1/tx.amino";
import * as _868 from "./intertx/v1beta1/tx.registry";
export namespace secret {
  export namespace compute {
    export const v1beta1 = { ..._581,
      ..._582,
      ..._583,
      ..._584
    };
  }
  export namespace intertx {
    export const v1beta1 = { ..._585,
      ..._586,
      ..._867,
      ..._868
    };
  }
  export namespace registration {
    export const v1beta1 = { ..._587,
      ..._588,
      ..._589,
      ..._590
    };
    export namespace remote_attestation {
      export const v1beta1 = { ..._591
      };
    }
  }
}