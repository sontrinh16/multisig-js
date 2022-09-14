import * as _248 from "./wasm/v1/genesis";
import * as _249 from "./wasm/v1/ibc";
import * as _250 from "./wasm/v1/proposal";
import * as _251 from "./wasm/v1/query";
import * as _252 from "./wasm/v1/tx";
import * as _253 from "./wasm/v1/types";
import * as _842 from "./wasm/v1/tx.amino";
import * as _843 from "./wasm/v1/tx.registry";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = { ..._248,
      ..._249,
      ..._250,
      ..._251,
      ..._252,
      ..._253,
      ..._842,
      ..._843
    };
  }
}