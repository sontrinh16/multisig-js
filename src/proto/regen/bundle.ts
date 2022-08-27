import * as _545 from "./data/v1/events";
import * as _546 from "./data/v1/query";
import * as _547 from "./data/v1/state";
import * as _548 from "./data/v1/tx";
import * as _549 from "./data/v1/types";
import * as _550 from "./data/v1alpha2/events";
import * as _551 from "./data/v1alpha2/genesis";
import * as _552 from "./data/v1alpha2/query";
import * as _553 from "./data/v1alpha2/tx";
import * as _554 from "./data/v1alpha2/types";
import * as _555 from "./ecocredit/basket/v1/events";
import * as _556 from "./ecocredit/basket/v1/query";
import * as _557 from "./ecocredit/basket/v1/state";
import * as _558 from "./ecocredit/basket/v1/tx";
import * as _559 from "./ecocredit/basket/v1/types";
import * as _560 from "./ecocredit/marketplace/v1/events";
import * as _561 from "./ecocredit/marketplace/v1/query";
import * as _562 from "./ecocredit/marketplace/v1/state";
import * as _563 from "./ecocredit/marketplace/v1/tx";
import * as _564 from "./ecocredit/marketplace/v1/types";
import * as _565 from "./ecocredit/orderbook/v1alpha1/memory";
import * as _566 from "./ecocredit/v1/events";
import * as _567 from "./ecocredit/v1/query";
import * as _568 from "./ecocredit/v1/state";
import * as _569 from "./ecocredit/v1/tx";
import * as _570 from "./ecocredit/v1/types";
import * as _571 from "./ecocredit/v1alpha1/events";
import * as _572 from "./ecocredit/v1alpha1/genesis";
import * as _573 from "./ecocredit/v1alpha1/query";
import * as _574 from "./ecocredit/v1alpha1/tx";
import * as _575 from "./ecocredit/v1alpha1/types";
import * as _576 from "./group/v1alpha1/events";
import * as _577 from "./group/v1alpha1/genesis";
import * as _578 from "./group/v1alpha1/query";
import * as _579 from "./group/v1alpha1/tx";
import * as _580 from "./group/v1alpha1/types";
import * as _853 from "./data/v1/tx.amino";
import * as _854 from "./data/v1alpha2/tx.amino";
import * as _855 from "./ecocredit/basket/v1/tx.amino";
import * as _856 from "./ecocredit/marketplace/v1/tx.amino";
import * as _857 from "./ecocredit/v1/tx.amino";
import * as _858 from "./ecocredit/v1alpha1/tx.amino";
import * as _859 from "./group/v1alpha1/tx.amino";
import * as _860 from "./data/v1/tx.registry";
import * as _861 from "./data/v1alpha2/tx.registry";
import * as _862 from "./ecocredit/basket/v1/tx.registry";
import * as _863 from "./ecocredit/marketplace/v1/tx.registry";
import * as _864 from "./ecocredit/v1/tx.registry";
import * as _865 from "./ecocredit/v1alpha1/tx.registry";
import * as _866 from "./group/v1alpha1/tx.registry";
export namespace regen {
  export namespace data {
    export const v1 = { ..._545,
      ..._546,
      ..._547,
      ..._548,
      ..._549,
      ..._853,
      ..._860
    };
    export const v1alpha2 = { ..._550,
      ..._551,
      ..._552,
      ..._553,
      ..._554,
      ..._854,
      ..._861
    };
  }
  export namespace ecocredit {
    export namespace basket {
      export const v1 = { ..._555,
        ..._556,
        ..._557,
        ..._558,
        ..._559,
        ..._855,
        ..._862
      };
    }
    export namespace marketplace {
      export const v1 = { ..._560,
        ..._561,
        ..._562,
        ..._563,
        ..._564,
        ..._856,
        ..._863
      };
    }
    export namespace orderbook {
      export const v1alpha1 = { ..._565
      };
    }
    export const v1 = { ..._566,
      ..._567,
      ..._568,
      ..._569,
      ..._570,
      ..._857,
      ..._864
    };
    export const v1alpha1 = { ..._571,
      ..._572,
      ..._573,
      ..._574,
      ..._575,
      ..._858,
      ..._865
    };
  }
  export namespace group {
    export const v1alpha1 = { ..._576,
      ..._577,
      ..._578,
      ..._579,
      ..._580,
      ..._859,
      ..._866
    };
  }
}