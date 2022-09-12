import * as _600 from "./compute/v1beta1/genesis";
import * as _601 from "./compute/v1beta1/msg";
import * as _602 from "./compute/v1beta1/query";
import * as _603 from "./compute/v1beta1/types";
import * as _604 from "./intertx/v1beta1/query";
import * as _605 from "./intertx/v1beta1/tx";
import * as _606 from "./registration/v1beta1/genesis";
import * as _607 from "./registration/v1beta1/msg";
import * as _608 from "./registration/v1beta1/query";
import * as _609 from "./registration/v1beta1/types";
import * as _610 from "./registration/v1beta1/remote_attestation/types";
import * as _888 from "./intertx/v1beta1/tx.amino";
import * as _889 from "./intertx/v1beta1/tx.registry";
export namespace secret {
  export namespace compute {
    export const v1beta1 = { ..._600,
      ..._601,
      ..._602,
      ..._603
    };
  }
  export namespace intertx {
    export const v1beta1 = { ..._604,
      ..._605,
      ..._888,
      ..._889
    };
  }
  export namespace registration {
    export const v1beta1 = { ..._606,
      ..._607,
      ..._608,
      ..._609
    };
    export namespace remote_attestation {
      export const v1beta1 = { ..._610
      };
    }
  }
}