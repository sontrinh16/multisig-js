import * as _565 from "./epochs/genesis";
import * as _566 from "./epochs/query";
import * as _567 from "./gamm/pool-models/balancer/balancerPool";
import * as _568 from "./gamm/v1beta1/genesis";
import * as _569 from "./gamm/v1beta1/query";
import * as _570 from "./gamm/v1beta1/tx";
import * as _571 from "./gamm/pool-models/balancer/tx";
import * as _572 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _573 from "./gamm/pool-models/stableswap/tx";
import * as _574 from "./incentives/gauge";
import * as _575 from "./incentives/genesis";
import * as _576 from "./incentives/params";
import * as _577 from "./incentives/query";
import * as _578 from "./incentives/tx";
import * as _579 from "./lockup/genesis";
import * as _580 from "./lockup/lock";
import * as _581 from "./lockup/query";
import * as _582 from "./lockup/tx";
import * as _583 from "./mint/v1beta1/genesis";
import * as _584 from "./mint/v1beta1/mint";
import * as _585 from "./mint/v1beta1/query";
import * as _586 from "./pool-incentives/v1beta1/genesis";
import * as _587 from "./pool-incentives/v1beta1/gov";
import * as _588 from "./pool-incentives/v1beta1/incentives";
import * as _589 from "./pool-incentives/v1beta1/query";
import * as _590 from "./store/v1beta1/tree";
import * as _591 from "./superfluid/genesis";
import * as _592 from "./superfluid/params";
import * as _593 from "./superfluid/query";
import * as _594 from "./superfluid/superfluid";
import * as _595 from "./superfluid/tx";
import * as _596 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _597 from "./tokenfactory/v1beta1/genesis";
import * as _598 from "./tokenfactory/v1beta1/params";
import * as _599 from "./tokenfactory/v1beta1/query";
import * as _600 from "./tokenfactory/v1beta1/tx";
import * as _601 from "./txfees/v1beta1/feetoken";
import * as _602 from "./txfees/v1beta1/genesis";
import * as _603 from "./txfees/v1beta1/gov";
import * as _604 from "./txfees/v1beta1/query";
import * as _926 from "./gamm/pool-models/balancer/tx.amino";
import * as _927 from "./gamm/pool-models/stableswap/tx.amino";
import * as _928 from "./gamm/v1beta1/tx.amino";
import * as _929 from "./incentives/tx.amino";
import * as _930 from "./lockup/tx.amino";
import * as _931 from "./superfluid/tx.amino";
import * as _932 from "./tokenfactory/v1beta1/tx.amino";
import * as _933 from "./gamm/pool-models/balancer/tx.registry";
import * as _934 from "./gamm/pool-models/stableswap/tx.registry";
import * as _935 from "./gamm/v1beta1/tx.registry";
import * as _936 from "./incentives/tx.registry";
import * as _937 from "./lockup/tx.registry";
import * as _938 from "./superfluid/tx.registry";
import * as _939 from "./tokenfactory/v1beta1/tx.registry";
export namespace osmosis {
  export namespace epochs {
    export const v1beta1 = { ..._565,
      ..._566
    };
  }
  export namespace gamm {
    export const v1beta1 = { ..._567,
      ..._568,
      ..._569,
      ..._570,
      ..._928,
      ..._935
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = { ..._571,
          ..._926,
          ..._933
        };
      }
      export namespace stableswap {
        export const v1beta1 = { ..._572,
          ..._573,
          ..._927,
          ..._934
        };
      }
    }
  }
  export const incentives = { ..._574,
    ..._575,
    ..._576,
    ..._577,
    ..._578,
    ..._929,
    ..._936
  };
  export const lockup = { ..._579,
    ..._580,
    ..._581,
    ..._582,
    ..._930,
    ..._937
  };
  export namespace mint {
    export const v1beta1 = { ..._583,
      ..._584,
      ..._585
    };
  }
  export namespace poolincentives {
    export const v1beta1 = { ..._586,
      ..._587,
      ..._588,
      ..._589
    };
  }
  export namespace store {
    export const v1beta1 = { ..._590
    };
  }
  export const superfluid = { ..._591,
    ..._592,
    ..._593,
    ..._594,
    ..._595,
    ..._931,
    ..._938
  };
  export namespace tokenfactory {
    export const v1beta1 = { ..._596,
      ..._597,
      ..._598,
      ..._599,
      ..._600,
      ..._932,
      ..._939
    };
  }
  export namespace txfees {
    export const v1beta1 = { ..._601,
      ..._602,
      ..._603,
      ..._604
    };
  }
}