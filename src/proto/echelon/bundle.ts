import * as _342 from "./epochs/v1/genesis";
import * as _343 from "./epochs/v1/query";
import * as _344 from "./erc20/v1/erc20";
import * as _345 from "./erc20/v1/genesis";
import * as _346 from "./erc20/v1/query";
import * as _347 from "./erc20/v1/tx";
import * as _348 from "./incentives/v1/genesis";
import * as _349 from "./incentives/v1/incentives";
import * as _350 from "./incentives/v1/query";
import * as _351 from "./inflation/v1/genesis";
import * as _352 from "./inflation/v1/inflation";
import * as _353 from "./inflation/v1/query";
import * as _354 from "./recovery/v1/genesis";
import * as _355 from "./recovery/v1/query";
import * as _356 from "./vesting/v1/query";
import * as _357 from "./vesting/v1/tx";
import * as _358 from "./vesting/v1/vesting";
import * as _359 from "./vrf/v1/genesis";
import * as _360 from "./vrf/v1/query";
import * as _361 from "./vrf/v1/randomval";
import * as _362 from "./vrf/v1/tx";
import * as _363 from "./vrf/v1/userval";
import * as _868 from "./erc20/v1/tx.amino";
import * as _869 from "./vesting/v1/tx.amino";
import * as _870 from "./vrf/v1/tx.amino";
import * as _871 from "./erc20/v1/tx.registry";
import * as _872 from "./vesting/v1/tx.registry";
import * as _873 from "./vrf/v1/tx.registry";
export namespace echelon {
  export namespace epochs {
    export const v1 = { ..._342,
      ..._343
    };
  }
  export namespace erc20 {
    export const v1 = { ..._344,
      ..._345,
      ..._346,
      ..._347,
      ..._868,
      ..._871
    };
  }
  export namespace incentives {
    export const v1 = { ..._348,
      ..._349,
      ..._350
    };
  }
  export namespace inflation {
    export const v1 = { ..._351,
      ..._352,
      ..._353
    };
  }
  export namespace recovery {
    export const v1 = { ..._354,
      ..._355
    };
  }
  export namespace vesting {
    export const v1 = { ..._356,
      ..._357,
      ..._358,
      ..._869,
      ..._872
    };
  }
  export namespace vrf {
    export const v1 = { ..._359,
      ..._360,
      ..._361,
      ..._362,
      ..._363,
      ..._870,
      ..._873
    };
  }
}