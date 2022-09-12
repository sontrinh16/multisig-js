import * as _180 from "./wasm/v1/genesis";
import * as _181 from "./wasm/v1/ibc";
import * as _182 from "./wasm/v1/proposal";
import * as _183 from "./wasm/v1/query";
import * as _184 from "./wasm/v1/tx";
import * as _185 from "./wasm/v1/types";
import * as _772 from "./wasm/v1/tx.amino";
import * as _773 from "./wasm/v1/tx.registry";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = { ..._180,
      ..._181,
      ..._182,
      ..._183,
      ..._184,
      ..._185,
      ..._772,
      ..._773
    };
  }
}