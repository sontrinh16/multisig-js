import * as _668 from "./compute/v1beta1/genesis";
import * as _669 from "./compute/v1beta1/msg";
import * as _670 from "./compute/v1beta1/query";
import * as _671 from "./compute/v1beta1/types";
import * as _672 from "./intertx/v1beta1/query";
import * as _673 from "./intertx/v1beta1/tx";
import * as _674 from "./registration/v1beta1/genesis";
import * as _675 from "./registration/v1beta1/msg";
import * as _676 from "./registration/v1beta1/query";
import * as _677 from "./registration/v1beta1/types";
import * as _678 from "./registration/v1beta1/remote_attestation/types";
import * as _958 from "./intertx/v1beta1/tx.amino";
import * as _959 from "./intertx/v1beta1/tx.registry";
export namespace secret {
  export namespace compute {
    export const v1beta1 = { ..._668,
      ..._669,
      ..._670,
      ..._671
    };
  }
  export namespace intertx {
    export const v1beta1 = { ..._672,
      ..._673,
      ..._958,
      ..._959
    };
  }
  export namespace registration {
    export const v1beta1 = { ..._674,
      ..._675,
      ..._676,
      ..._677
    };
    export namespace remote_attestation {
      export const v1beta1 = { ..._678
      };
    }
  }
}