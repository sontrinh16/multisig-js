import * as _497 from "./epochs/genesis";
import * as _498 from "./epochs/query";
import * as _499 from "./gamm/pool-models/balancer/balancerPool";
import * as _500 from "./gamm/v1beta1/genesis";
import * as _501 from "./gamm/v1beta1/query";
import * as _502 from "./gamm/v1beta1/tx";
import * as _503 from "./gamm/pool-models/balancer/tx";
import * as _504 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _505 from "./gamm/pool-models/stableswap/tx";
import * as _506 from "./incentives/gauge";
import * as _507 from "./incentives/genesis";
import * as _508 from "./incentives/params";
import * as _509 from "./incentives/query";
import * as _510 from "./incentives/tx";
import * as _511 from "./lockup/genesis";
import * as _512 from "./lockup/lock";
import * as _513 from "./lockup/query";
import * as _514 from "./lockup/tx";
import * as _515 from "./mint/v1beta1/genesis";
import * as _516 from "./mint/v1beta1/mint";
import * as _517 from "./mint/v1beta1/query";
import * as _518 from "./pool-incentives/v1beta1/genesis";
import * as _519 from "./pool-incentives/v1beta1/gov";
import * as _520 from "./pool-incentives/v1beta1/incentives";
import * as _521 from "./pool-incentives/v1beta1/query";
import * as _522 from "./store/v1beta1/tree";
import * as _523 from "./superfluid/genesis";
import * as _524 from "./superfluid/params";
import * as _525 from "./superfluid/query";
import * as _526 from "./superfluid/superfluid";
import * as _527 from "./superfluid/tx";
import * as _528 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _529 from "./tokenfactory/v1beta1/genesis";
import * as _530 from "./tokenfactory/v1beta1/params";
import * as _531 from "./tokenfactory/v1beta1/query";
import * as _532 from "./tokenfactory/v1beta1/tx";
import * as _533 from "./txfees/v1beta1/feetoken";
import * as _534 from "./txfees/v1beta1/genesis";
import * as _535 from "./txfees/v1beta1/gov";
import * as _536 from "./txfees/v1beta1/query";
import * as _837 from "./gamm/pool-models/balancer/tx.amino";
import * as _838 from "./gamm/pool-models/stableswap/tx.amino";
import * as _839 from "./gamm/v1beta1/tx.amino";
import * as _840 from "./incentives/tx.amino";
import * as _841 from "./lockup/tx.amino";
import * as _842 from "./superfluid/tx.amino";
import * as _843 from "./tokenfactory/v1beta1/tx.amino";
import * as _844 from "./gamm/pool-models/balancer/tx.registry";
import * as _845 from "./gamm/pool-models/stableswap/tx.registry";
import * as _846 from "./gamm/v1beta1/tx.registry";
import * as _847 from "./incentives/tx.registry";
import * as _848 from "./lockup/tx.registry";
import * as _849 from "./superfluid/tx.registry";
import * as _850 from "./tokenfactory/v1beta1/tx.registry";
export namespace osmosis {
  export namespace epochs {
    export const v1beta1 = { ..._497,
      ..._498
    };
  }
  export namespace gamm {
    export const v1beta1 = { ..._499,
      ..._500,
      ..._501,
      ..._502,
      ..._839,
      ..._846
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = { ..._503,
          ..._837,
          ..._844
        };
      }
      export namespace stableswap {
        export const v1beta1 = { ..._504,
          ..._505,
          ..._838,
          ..._845
        };
      }
    }
  }
  export const incentives = { ..._506,
    ..._507,
    ..._508,
    ..._509,
    ..._510,
    ..._840,
    ..._847
  };
  export const lockup = { ..._511,
    ..._512,
    ..._513,
    ..._514,
    ..._841,
    ..._848
  };
  export namespace mint {
    export const v1beta1 = { ..._515,
      ..._516,
      ..._517
    };
  }
  export namespace poolincentives {
    export const v1beta1 = { ..._518,
      ..._519,
      ..._520,
      ..._521
    };
  }
  export namespace store {
    export const v1beta1 = { ..._522
    };
  }
  export const superfluid = { ..._523,
    ..._524,
    ..._525,
    ..._526,
    ..._527,
    ..._842,
    ..._849
  };
  export namespace tokenfactory {
    export const v1beta1 = { ..._528,
      ..._529,
      ..._530,
      ..._531,
      ..._532,
      ..._843,
      ..._850
    };
  }
  export namespace txfees {
    export const v1beta1 = { ..._533,
      ..._534,
      ..._535,
      ..._536
    };
  }
}