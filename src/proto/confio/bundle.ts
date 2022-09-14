import * as _777 from "../tgrade/confio/globalfee/v1beta1/genesis";
import * as _778 from "../tgrade/confio/globalfee/v1beta1/query";
import * as _779 from "../tgrade/confio/poe/v1beta1/genesis";
import * as _780 from "../tgrade/confio/poe/v1beta1/poe";
import * as _781 from "../tgrade/confio/poe/v1beta1/query";
import * as _782 from "../tgrade/confio/poe/v1beta1/tx";
import * as _783 from "../tgrade/confio/twasm/v1beta1/contract_extension";
import * as _784 from "../tgrade/confio/twasm/v1beta1/genesis";
import * as _785 from "../tgrade/confio/twasm/v1beta1/proposal";
import * as _786 from "../tgrade/confio/twasm/v1beta1/query";
import * as _978 from "../tgrade/confio/poe/v1beta1/tx.amino";
import * as _979 from "../tgrade/confio/poe/v1beta1/tx.registry";
export namespace confio {
  export namespace globalfee {
    export const v1beta1 = { ..._777,
      ..._778
    };
  }
  export namespace poe {
    export const v1beta1 = { ..._779,
      ..._780,
      ..._781,
      ..._782,
      ..._978,
      ..._979
    };
  }
  export namespace twasm {
    export const v1beta1 = { ..._783,
      ..._784,
      ..._785,
      ..._786
    };
  }
}