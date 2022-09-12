import * as _709 from "../tgrade/confio/globalfee/v1beta1/genesis";
import * as _710 from "../tgrade/confio/globalfee/v1beta1/query";
import * as _711 from "../tgrade/confio/poe/v1beta1/genesis";
import * as _712 from "../tgrade/confio/poe/v1beta1/poe";
import * as _713 from "../tgrade/confio/poe/v1beta1/query";
import * as _714 from "../tgrade/confio/poe/v1beta1/tx";
import * as _715 from "../tgrade/confio/twasm/v1beta1/contract_extension";
import * as _716 from "../tgrade/confio/twasm/v1beta1/genesis";
import * as _717 from "../tgrade/confio/twasm/v1beta1/proposal";
import * as _718 from "../tgrade/confio/twasm/v1beta1/query";
import * as _908 from "../tgrade/confio/poe/v1beta1/tx.amino";
import * as _909 from "../tgrade/confio/poe/v1beta1/tx.registry";
export namespace confio {
  export namespace globalfee {
    export const v1beta1 = { ..._709,
      ..._710
    };
  }
  export namespace poe {
    export const v1beta1 = { ..._711,
      ..._712,
      ..._713,
      ..._714,
      ..._908,
      ..._909
    };
  }
  export namespace twasm {
    export const v1beta1 = { ..._715,
      ..._716,
      ..._717,
      ..._718
    };
  }
}