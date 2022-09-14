import * as _458 from "./auction/v1beta1/auction";
import * as _459 from "./auction/v1beta1/genesis";
import * as _460 from "./auction/v1beta1/query";
import * as _461 from "./auction/v1beta1/tx";
import * as _462 from "./bep3/v1beta1/bep3";
import * as _463 from "./bep3/v1beta1/genesis";
import * as _464 from "./bep3/v1beta1/query";
import * as _465 from "./bep3/v1beta1/tx";
import * as _466 from "./cdp/v1beta1/cdp";
import * as _467 from "./cdp/v1beta1/genesis";
import * as _468 from "./cdp/v1beta1/query";
import * as _469 from "./cdp/v1beta1/tx";
import * as _470 from "./committee/v1beta1/committee";
import * as _471 from "./committee/v1beta1/genesis";
import * as _472 from "./committee/v1beta1/permissions";
import * as _473 from "./committee/v1beta1/proposal";
import * as _474 from "./committee/v1beta1/query";
import * as _475 from "./committee/v1beta1/tx";
import * as _476 from "./earn/v1beta1/genesis";
import * as _477 from "./earn/v1beta1/params";
import * as _478 from "./earn/v1beta1/query";
import * as _479 from "./earn/v1beta1/strategy";
import * as _480 from "./earn/v1beta1/tx";
import * as _481 from "./earn/v1beta1/vault";
import * as _482 from "./evmutil/v1beta1/genesis";
import * as _483 from "./hard/v1beta1/genesis";
import * as _484 from "./hard/v1beta1/hard";
import * as _485 from "./hard/v1beta1/query";
import * as _486 from "./hard/v1beta1/tx";
import * as _487 from "./incentive/v1beta1/claims";
import * as _488 from "./incentive/v1beta1/genesis";
import * as _489 from "./incentive/v1beta1/params";
import * as _490 from "./incentive/v1beta1/tx";
import * as _491 from "./issuance/v1beta1/genesis";
import * as _492 from "./issuance/v1beta1/query";
import * as _493 from "./issuance/v1beta1/tx";
import * as _494 from "./kavadist/v1beta1/genesis";
import * as _495 from "./kavadist/v1beta1/params";
import * as _496 from "./kavadist/v1beta1/proposal";
import * as _497 from "./kavadist/v1beta1/query";
import * as _498 from "./pricefeed/v1beta1/genesis";
import * as _499 from "./pricefeed/v1beta1/query";
import * as _500 from "./pricefeed/v1beta1/store";
import * as _501 from "./pricefeed/v1beta1/tx";
import * as _502 from "./savings/v1beta1/genesis";
import * as _503 from "./savings/v1beta1/query";
import * as _504 from "./savings/v1beta1/store";
import * as _505 from "./savings/v1beta1/tx";
import * as _506 from "./swap/v1beta1/genesis";
import * as _507 from "./swap/v1beta1/query";
import * as _508 from "./swap/v1beta1/swap";
import * as _509 from "./swap/v1beta1/tx";
import * as _900 from "./auction/v1beta1/tx.amino";
import * as _901 from "./bep3/v1beta1/tx.amino";
import * as _902 from "./cdp/v1beta1/tx.amino";
import * as _903 from "./committee/v1beta1/tx.amino";
import * as _904 from "./earn/v1beta1/tx.amino";
import * as _905 from "./hard/v1beta1/tx.amino";
import * as _906 from "./incentive/v1beta1/tx.amino";
import * as _907 from "./issuance/v1beta1/tx.amino";
import * as _908 from "./pricefeed/v1beta1/tx.amino";
import * as _909 from "./savings/v1beta1/tx.amino";
import * as _910 from "./swap/v1beta1/tx.amino";
import * as _911 from "./auction/v1beta1/tx.registry";
import * as _912 from "./bep3/v1beta1/tx.registry";
import * as _913 from "./cdp/v1beta1/tx.registry";
import * as _914 from "./committee/v1beta1/tx.registry";
import * as _915 from "./earn/v1beta1/tx.registry";
import * as _916 from "./hard/v1beta1/tx.registry";
import * as _917 from "./incentive/v1beta1/tx.registry";
import * as _918 from "./issuance/v1beta1/tx.registry";
import * as _919 from "./pricefeed/v1beta1/tx.registry";
import * as _920 from "./savings/v1beta1/tx.registry";
import * as _921 from "./swap/v1beta1/tx.registry";
export namespace kava {
  export namespace auction {
    export const v1beta1 = { ..._458,
      ..._459,
      ..._460,
      ..._461,
      ..._900,
      ..._911
    };
  }
  export namespace bep3 {
    export const v1beta1 = { ..._462,
      ..._463,
      ..._464,
      ..._465,
      ..._901,
      ..._912
    };
  }
  export namespace cdp {
    export const v1beta1 = { ..._466,
      ..._467,
      ..._468,
      ..._469,
      ..._902,
      ..._913
    };
  }
  export namespace committee {
    export const v1beta1 = { ..._470,
      ..._471,
      ..._472,
      ..._473,
      ..._474,
      ..._475,
      ..._903,
      ..._914
    };
  }
  export namespace earn {
    export const v1beta1 = { ..._476,
      ..._477,
      ..._478,
      ..._479,
      ..._480,
      ..._481,
      ..._904,
      ..._915
    };
  }
  export namespace evmutil {
    export const v1beta1 = { ..._482
    };
  }
  export namespace hard {
    export const v1beta1 = { ..._483,
      ..._484,
      ..._485,
      ..._486,
      ..._905,
      ..._916
    };
  }
  export namespace incentive {
    export const v1beta1 = { ..._487,
      ..._488,
      ..._489,
      ..._490,
      ..._906,
      ..._917
    };
  }
  export namespace issuance {
    export const v1beta1 = { ..._491,
      ..._492,
      ..._493,
      ..._907,
      ..._918
    };
  }
  export namespace kavadist {
    export const v1beta1 = { ..._494,
      ..._495,
      ..._496,
      ..._497
    };
  }
  export namespace pricefeed {
    export const v1beta1 = { ..._498,
      ..._499,
      ..._500,
      ..._501,
      ..._908,
      ..._919
    };
  }
  export namespace savings {
    export const v1beta1 = { ..._502,
      ..._503,
      ..._504,
      ..._505,
      ..._909,
      ..._920
    };
  }
  export namespace swap {
    export const v1beta1 = { ..._506,
      ..._507,
      ..._508,
      ..._509,
      ..._910,
      ..._921
    };
  }
}