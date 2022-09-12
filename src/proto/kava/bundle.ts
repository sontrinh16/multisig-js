import * as _390 from "./auction/v1beta1/auction";
import * as _391 from "./auction/v1beta1/genesis";
import * as _392 from "./auction/v1beta1/query";
import * as _393 from "./auction/v1beta1/tx";
import * as _394 from "./bep3/v1beta1/bep3";
import * as _395 from "./bep3/v1beta1/genesis";
import * as _396 from "./bep3/v1beta1/query";
import * as _397 from "./bep3/v1beta1/tx";
import * as _398 from "./cdp/v1beta1/cdp";
import * as _399 from "./cdp/v1beta1/genesis";
import * as _400 from "./cdp/v1beta1/query";
import * as _401 from "./cdp/v1beta1/tx";
import * as _402 from "./committee/v1beta1/committee";
import * as _403 from "./committee/v1beta1/genesis";
import * as _404 from "./committee/v1beta1/permissions";
import * as _405 from "./committee/v1beta1/proposal";
import * as _406 from "./committee/v1beta1/query";
import * as _407 from "./committee/v1beta1/tx";
import * as _408 from "./earn/v1beta1/genesis";
import * as _409 from "./earn/v1beta1/params";
import * as _410 from "./earn/v1beta1/query";
import * as _411 from "./earn/v1beta1/strategy";
import * as _412 from "./earn/v1beta1/tx";
import * as _413 from "./earn/v1beta1/vault";
import * as _414 from "./evmutil/v1beta1/genesis";
import * as _415 from "./hard/v1beta1/genesis";
import * as _416 from "./hard/v1beta1/hard";
import * as _417 from "./hard/v1beta1/query";
import * as _418 from "./hard/v1beta1/tx";
import * as _419 from "./incentive/v1beta1/claims";
import * as _420 from "./incentive/v1beta1/genesis";
import * as _421 from "./incentive/v1beta1/params";
import * as _422 from "./incentive/v1beta1/tx";
import * as _423 from "./issuance/v1beta1/genesis";
import * as _424 from "./issuance/v1beta1/query";
import * as _425 from "./issuance/v1beta1/tx";
import * as _426 from "./kavadist/v1beta1/genesis";
import * as _427 from "./kavadist/v1beta1/params";
import * as _428 from "./kavadist/v1beta1/proposal";
import * as _429 from "./kavadist/v1beta1/query";
import * as _430 from "./pricefeed/v1beta1/genesis";
import * as _431 from "./pricefeed/v1beta1/query";
import * as _432 from "./pricefeed/v1beta1/store";
import * as _433 from "./pricefeed/v1beta1/tx";
import * as _434 from "./savings/v1beta1/genesis";
import * as _435 from "./savings/v1beta1/query";
import * as _436 from "./savings/v1beta1/store";
import * as _437 from "./savings/v1beta1/tx";
import * as _438 from "./swap/v1beta1/genesis";
import * as _439 from "./swap/v1beta1/query";
import * as _440 from "./swap/v1beta1/swap";
import * as _441 from "./swap/v1beta1/tx";
import * as _830 from "./auction/v1beta1/tx.amino";
import * as _831 from "./bep3/v1beta1/tx.amino";
import * as _832 from "./cdp/v1beta1/tx.amino";
import * as _833 from "./committee/v1beta1/tx.amino";
import * as _834 from "./earn/v1beta1/tx.amino";
import * as _835 from "./hard/v1beta1/tx.amino";
import * as _836 from "./incentive/v1beta1/tx.amino";
import * as _837 from "./issuance/v1beta1/tx.amino";
import * as _838 from "./pricefeed/v1beta1/tx.amino";
import * as _839 from "./savings/v1beta1/tx.amino";
import * as _840 from "./swap/v1beta1/tx.amino";
import * as _841 from "./auction/v1beta1/tx.registry";
import * as _842 from "./bep3/v1beta1/tx.registry";
import * as _843 from "./cdp/v1beta1/tx.registry";
import * as _844 from "./committee/v1beta1/tx.registry";
import * as _845 from "./earn/v1beta1/tx.registry";
import * as _846 from "./hard/v1beta1/tx.registry";
import * as _847 from "./incentive/v1beta1/tx.registry";
import * as _848 from "./issuance/v1beta1/tx.registry";
import * as _849 from "./pricefeed/v1beta1/tx.registry";
import * as _850 from "./savings/v1beta1/tx.registry";
import * as _851 from "./swap/v1beta1/tx.registry";
export namespace kava {
  export namespace auction {
    export const v1beta1 = { ..._390,
      ..._391,
      ..._392,
      ..._393,
      ..._830,
      ..._841
    };
  }
  export namespace bep3 {
    export const v1beta1 = { ..._394,
      ..._395,
      ..._396,
      ..._397,
      ..._831,
      ..._842
    };
  }
  export namespace cdp {
    export const v1beta1 = { ..._398,
      ..._399,
      ..._400,
      ..._401,
      ..._832,
      ..._843
    };
  }
  export namespace committee {
    export const v1beta1 = { ..._402,
      ..._403,
      ..._404,
      ..._405,
      ..._406,
      ..._407,
      ..._833,
      ..._844
    };
  }
  export namespace earn {
    export const v1beta1 = { ..._408,
      ..._409,
      ..._410,
      ..._411,
      ..._412,
      ..._413,
      ..._834,
      ..._845
    };
  }
  export namespace evmutil {
    export const v1beta1 = { ..._414
    };
  }
  export namespace hard {
    export const v1beta1 = { ..._415,
      ..._416,
      ..._417,
      ..._418,
      ..._835,
      ..._846
    };
  }
  export namespace incentive {
    export const v1beta1 = { ..._419,
      ..._420,
      ..._421,
      ..._422,
      ..._836,
      ..._847
    };
  }
  export namespace issuance {
    export const v1beta1 = { ..._423,
      ..._424,
      ..._425,
      ..._837,
      ..._848
    };
  }
  export namespace kavadist {
    export const v1beta1 = { ..._426,
      ..._427,
      ..._428,
      ..._429
    };
  }
  export namespace pricefeed {
    export const v1beta1 = { ..._430,
      ..._431,
      ..._432,
      ..._433,
      ..._838,
      ..._849
    };
  }
  export namespace savings {
    export const v1beta1 = { ..._434,
      ..._435,
      ..._436,
      ..._437,
      ..._839,
      ..._850
    };
  }
  export namespace swap {
    export const v1beta1 = { ..._438,
      ..._439,
      ..._440,
      ..._441,
      ..._840,
      ..._851
    };
  }
}