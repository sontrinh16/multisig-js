import * as _431 from "../iris/guardian/genesis";
import * as _432 from "../iris/guardian/guardian";
import * as _433 from "../iris/guardian/query";
import * as _434 from "../iris/guardian/tx";
import * as _435 from "../iris/mint/genesis";
import * as _436 from "../iris/mint/mint";
import * as _437 from "../iris/mint/query";
import * as _890 from "../iris/guardian/tx.amino";
import * as _891 from "../iris/guardian/tx.registry";
export namespace irishub {
  export const guardian = { ..._431,
    ..._432,
    ..._433,
    ..._434,
    ..._890,
    ..._891
  };
  export const mint = { ..._435,
    ..._436,
    ..._437
  };
}