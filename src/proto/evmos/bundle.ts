import * as _296 from "./claims/v1/claims";
import * as _297 from "./claims/v1/genesis";
import * as _298 from "./claims/v1/query";
import * as _299 from "./epochs/v1/genesis";
import * as _300 from "./epochs/v1/query";
import * as _301 from "./erc20/v1/erc20";
import * as _302 from "./erc20/v1/genesis";
import * as _303 from "./erc20/v1/query";
import * as _304 from "./erc20/v1/tx";
import * as _305 from "./feesplit/v1/feesplit";
import * as _306 from "./feesplit/v1/genesis";
import * as _307 from "./feesplit/v1/query";
import * as _308 from "./feesplit/v1/tx";
import * as _309 from "./incentives/v1/genesis";
import * as _310 from "./incentives/v1/incentives";
import * as _311 from "./incentives/v1/query";
import * as _312 from "./inflation/v1/genesis";
import * as _313 from "./inflation/v1/inflation";
import * as _314 from "./inflation/v1/query";
import * as _315 from "./recovery/v1/genesis";
import * as _316 from "./recovery/v1/query";
import * as _317 from "./vesting/v1/query";
import * as _318 from "./vesting/v1/tx";
import * as _319 from "./vesting/v1/vesting";
import * as _785 from "./erc20/v1/tx.amino";
import * as _786 from "./feesplit/v1/tx.amino";
import * as _787 from "./vesting/v1/tx.amino";
import * as _788 from "./erc20/v1/tx.registry";
import * as _789 from "./feesplit/v1/tx.registry";
import * as _790 from "./vesting/v1/tx.registry";
export namespace evmos {
  export namespace claims {
    export const v1 = { ..._296,
      ..._297,
      ..._298
    };
  }
  export namespace epochs {
    export const v1 = { ..._299,
      ..._300
    };
  }
  export namespace erc20 {
    export const v1 = { ..._301,
      ..._302,
      ..._303,
      ..._304,
      ..._785,
      ..._788
    };
  }
  export namespace feesplit {
    export const v1 = { ..._305,
      ..._306,
      ..._307,
      ..._308,
      ..._786,
      ..._789
    };
  }
  export namespace incentives {
    export const v1 = { ..._309,
      ..._310,
      ..._311
    };
  }
  export namespace inflation {
    export const v1 = { ..._312,
      ..._313,
      ..._314
    };
  }
  export namespace recovery {
    export const v1 = { ..._315,
      ..._316
    };
  }
  export namespace vesting {
    export const v1 = { ..._317,
      ..._318,
      ..._319,
      ..._787,
      ..._790
    };
  }
}