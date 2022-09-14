import * as _364 from "./claims/v1/claims";
import * as _365 from "./claims/v1/genesis";
import * as _366 from "./claims/v1/query";
import * as _367 from "./epochs/v1/genesis";
import * as _368 from "./epochs/v1/query";
import * as _369 from "./erc20/v1/erc20";
import * as _370 from "./erc20/v1/genesis";
import * as _371 from "./erc20/v1/query";
import * as _372 from "./erc20/v1/tx";
import * as _373 from "./feesplit/v1/feesplit";
import * as _374 from "./feesplit/v1/genesis";
import * as _375 from "./feesplit/v1/query";
import * as _376 from "./feesplit/v1/tx";
import * as _377 from "./incentives/v1/genesis";
import * as _378 from "./incentives/v1/incentives";
import * as _379 from "./incentives/v1/query";
import * as _380 from "./inflation/v1/genesis";
import * as _381 from "./inflation/v1/inflation";
import * as _382 from "./inflation/v1/query";
import * as _383 from "./recovery/v1/genesis";
import * as _384 from "./recovery/v1/query";
import * as _385 from "./vesting/v1/query";
import * as _386 from "./vesting/v1/tx";
import * as _387 from "./vesting/v1/vesting";
import * as _874 from "./erc20/v1/tx.amino";
import * as _875 from "./feesplit/v1/tx.amino";
import * as _876 from "./vesting/v1/tx.amino";
import * as _877 from "./erc20/v1/tx.registry";
import * as _878 from "./feesplit/v1/tx.registry";
import * as _879 from "./vesting/v1/tx.registry";
export namespace evmos {
  export namespace claims {
    export const v1 = { ..._364,
      ..._365,
      ..._366
    };
  }
  export namespace epochs {
    export const v1 = { ..._367,
      ..._368
    };
  }
  export namespace erc20 {
    export const v1 = { ..._369,
      ..._370,
      ..._371,
      ..._372,
      ..._874,
      ..._877
    };
  }
  export namespace feesplit {
    export const v1 = { ..._373,
      ..._374,
      ..._375,
      ..._376,
      ..._875,
      ..._878
    };
  }
  export namespace incentives {
    export const v1 = { ..._377,
      ..._378,
      ..._379
    };
  }
  export namespace inflation {
    export const v1 = { ..._380,
      ..._381,
      ..._382
    };
  }
  export namespace recovery {
    export const v1 = { ..._383,
      ..._384
    };
  }
  export namespace vesting {
    export const v1 = { ..._385,
      ..._386,
      ..._387,
      ..._876,
      ..._879
    };
  }
}