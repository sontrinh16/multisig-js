import * as _363 from "../iris/guardian/genesis";
import * as _364 from "../iris/guardian/guardian";
import * as _365 from "../iris/guardian/query";
import * as _366 from "../iris/guardian/tx";
import * as _367 from "../iris/mint/genesis";
import * as _368 from "../iris/mint/mint";
import * as _369 from "../iris/mint/query";
import * as _820 from "../iris/guardian/tx.amino";
import * as _821 from "../iris/guardian/tx.registry";
export namespace irishub {
  export const guardian = { ..._363,
    ..._364,
    ..._365,
    ..._366,
    ..._820,
    ..._821
  };
  export const mint = { ..._367,
    ..._368,
    ..._369
  };
}