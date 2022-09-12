import * as _564 from "./data/v1/events";
import * as _565 from "./data/v1/query";
import * as _566 from "./data/v1/state";
import * as _567 from "./data/v1/tx";
import * as _568 from "./data/v1/types";
import * as _569 from "./data/v1alpha2/events";
import * as _570 from "./data/v1alpha2/genesis";
import * as _571 from "./data/v1alpha2/query";
import * as _572 from "./data/v1alpha2/tx";
import * as _573 from "./data/v1alpha2/types";
import * as _574 from "./ecocredit/basket/v1/events";
import * as _575 from "./ecocredit/basket/v1/query";
import * as _576 from "./ecocredit/basket/v1/state";
import * as _577 from "./ecocredit/basket/v1/tx";
import * as _578 from "./ecocredit/basket/v1/types";
import * as _579 from "./ecocredit/marketplace/v1/events";
import * as _580 from "./ecocredit/marketplace/v1/query";
import * as _581 from "./ecocredit/marketplace/v1/state";
import * as _582 from "./ecocredit/marketplace/v1/tx";
import * as _583 from "./ecocredit/marketplace/v1/types";
import * as _584 from "./ecocredit/orderbook/v1alpha1/memory";
import * as _585 from "./ecocredit/v1/events";
import * as _586 from "./ecocredit/v1/query";
import * as _587 from "./ecocredit/v1/state";
import * as _588 from "./ecocredit/v1/tx";
import * as _589 from "./ecocredit/v1/types";
import * as _590 from "./ecocredit/v1alpha1/events";
import * as _591 from "./ecocredit/v1alpha1/genesis";
import * as _592 from "./ecocredit/v1alpha1/query";
import * as _593 from "./ecocredit/v1alpha1/tx";
import * as _594 from "./ecocredit/v1alpha1/types";
import * as _595 from "./group/v1alpha1/events";
import * as _596 from "./group/v1alpha1/genesis";
import * as _597 from "./group/v1alpha1/query";
import * as _598 from "./group/v1alpha1/tx";
import * as _599 from "./group/v1alpha1/types";
import * as _874 from "./data/v1/tx.amino";
import * as _875 from "./data/v1alpha2/tx.amino";
import * as _876 from "./ecocredit/basket/v1/tx.amino";
import * as _877 from "./ecocredit/marketplace/v1/tx.amino";
import * as _878 from "./ecocredit/v1/tx.amino";
import * as _879 from "./ecocredit/v1alpha1/tx.amino";
import * as _880 from "./group/v1alpha1/tx.amino";
import * as _881 from "./data/v1/tx.registry";
import * as _882 from "./data/v1alpha2/tx.registry";
import * as _883 from "./ecocredit/basket/v1/tx.registry";
import * as _884 from "./ecocredit/marketplace/v1/tx.registry";
import * as _885 from "./ecocredit/v1/tx.registry";
import * as _886 from "./ecocredit/v1alpha1/tx.registry";
import * as _887 from "./group/v1alpha1/tx.registry";
export namespace regen {
  export namespace data {
    export const v1 = { ..._564,
      ..._565,
      ..._566,
      ..._567,
      ..._568,
      ..._874,
      ..._881
    };
    export const v1alpha2 = { ..._569,
      ..._570,
      ..._571,
      ..._572,
      ..._573,
      ..._875,
      ..._882
    };
  }
  export namespace ecocredit {
    export namespace basket {
      export const v1 = { ..._574,
        ..._575,
        ..._576,
        ..._577,
        ..._578,
        ..._876,
        ..._883
      };
    }
    export namespace marketplace {
      export const v1 = { ..._579,
        ..._580,
        ..._581,
        ..._582,
        ..._583,
        ..._877,
        ..._884
      };
    }
    export namespace orderbook {
      export const v1alpha1 = { ..._584
      };
    }
    export const v1 = { ..._585,
      ..._586,
      ..._587,
      ..._588,
      ..._589,
      ..._878,
      ..._885
    };
    export const v1alpha1 = { ..._590,
      ..._591,
      ..._592,
      ..._593,
      ..._594,
      ..._879,
      ..._886
    };
  }
  export namespace group {
    export const v1alpha1 = { ..._595,
      ..._596,
      ..._597,
      ..._598,
      ..._599,
      ..._880,
      ..._887
    };
  }
}