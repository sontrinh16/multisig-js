import * as _690 from "../tgrade/confio/globalfee/v1beta1/genesis";
import * as _691 from "../tgrade/confio/globalfee/v1beta1/query";
import * as _692 from "../tgrade/confio/poe/v1beta1/genesis";
import * as _693 from "../tgrade/confio/poe/v1beta1/poe";
import * as _694 from "../tgrade/confio/poe/v1beta1/query";
import * as _695 from "../tgrade/confio/poe/v1beta1/tx";
import * as _696 from "../tgrade/confio/twasm/v1beta1/contract_extension";
import * as _697 from "../tgrade/confio/twasm/v1beta1/genesis";
import * as _698 from "../tgrade/confio/twasm/v1beta1/proposal";
import * as _699 from "../tgrade/confio/twasm/v1beta1/query";
import * as _887 from "../tgrade/confio/poe/v1beta1/tx.amino";
import * as _888 from "../tgrade/confio/poe/v1beta1/tx.registry";
export namespace confio {
  export namespace globalfee {
    export const v1beta1 = { ..._690,
      ..._691
    };
  }
  export namespace poe {
    export const v1beta1 = { ..._692,
      ..._693,
      ..._694,
      ..._695,
      ..._887,
      ..._888
    };
  }
  export namespace twasm {
    export const v1beta1 = { ..._696,
      ..._697,
      ..._698,
      ..._699
    };
  }
}