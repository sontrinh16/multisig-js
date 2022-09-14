import * as _632 from "./data/v1/events";
import * as _633 from "./data/v1/query";
import * as _634 from "./data/v1/state";
import * as _635 from "./data/v1/tx";
import * as _636 from "./data/v1/types";
import * as _637 from "./data/v1alpha2/events";
import * as _638 from "./data/v1alpha2/genesis";
import * as _639 from "./data/v1alpha2/query";
import * as _640 from "./data/v1alpha2/tx";
import * as _641 from "./data/v1alpha2/types";
import * as _642 from "./ecocredit/basket/v1/events";
import * as _643 from "./ecocredit/basket/v1/query";
import * as _644 from "./ecocredit/basket/v1/state";
import * as _645 from "./ecocredit/basket/v1/tx";
import * as _646 from "./ecocredit/basket/v1/types";
import * as _647 from "./ecocredit/marketplace/v1/events";
import * as _648 from "./ecocredit/marketplace/v1/query";
import * as _649 from "./ecocredit/marketplace/v1/state";
import * as _650 from "./ecocredit/marketplace/v1/tx";
import * as _651 from "./ecocredit/marketplace/v1/types";
import * as _652 from "./ecocredit/orderbook/v1alpha1/memory";
import * as _653 from "./ecocredit/v1/events";
import * as _654 from "./ecocredit/v1/query";
import * as _655 from "./ecocredit/v1/state";
import * as _656 from "./ecocredit/v1/tx";
import * as _657 from "./ecocredit/v1/types";
import * as _658 from "./ecocredit/v1alpha1/events";
import * as _659 from "./ecocredit/v1alpha1/genesis";
import * as _660 from "./ecocredit/v1alpha1/query";
import * as _661 from "./ecocredit/v1alpha1/tx";
import * as _662 from "./ecocredit/v1alpha1/types";
import * as _663 from "./group/v1alpha1/events";
import * as _664 from "./group/v1alpha1/genesis";
import * as _665 from "./group/v1alpha1/query";
import * as _666 from "./group/v1alpha1/tx";
import * as _667 from "./group/v1alpha1/types";
import * as _944 from "./data/v1/tx.amino";
import * as _945 from "./data/v1alpha2/tx.amino";
import * as _946 from "./ecocredit/basket/v1/tx.amino";
import * as _947 from "./ecocredit/marketplace/v1/tx.amino";
import * as _948 from "./ecocredit/v1/tx.amino";
import * as _949 from "./ecocredit/v1alpha1/tx.amino";
import * as _950 from "./group/v1alpha1/tx.amino";
import * as _951 from "./data/v1/tx.registry";
import * as _952 from "./data/v1alpha2/tx.registry";
import * as _953 from "./ecocredit/basket/v1/tx.registry";
import * as _954 from "./ecocredit/marketplace/v1/tx.registry";
import * as _955 from "./ecocredit/v1/tx.registry";
import * as _956 from "./ecocredit/v1alpha1/tx.registry";
import * as _957 from "./group/v1alpha1/tx.registry";
export namespace regen {
  export namespace data {
    export const v1 = { ..._632,
      ..._633,
      ..._634,
      ..._635,
      ..._636,
      ..._944,
      ..._951
    };
    export const v1alpha2 = { ..._637,
      ..._638,
      ..._639,
      ..._640,
      ..._641,
      ..._945,
      ..._952
    };
  }
  export namespace ecocredit {
    export namespace basket {
      export const v1 = { ..._642,
        ..._643,
        ..._644,
        ..._645,
        ..._646,
        ..._946,
        ..._953
      };
    }
    export namespace marketplace {
      export const v1 = { ..._647,
        ..._648,
        ..._649,
        ..._650,
        ..._651,
        ..._947,
        ..._954
      };
    }
    export namespace orderbook {
      export const v1alpha1 = { ..._652
      };
    }
    export const v1 = { ..._653,
      ..._654,
      ..._655,
      ..._656,
      ..._657,
      ..._948,
      ..._955
    };
    export const v1alpha1 = { ..._658,
      ..._659,
      ..._660,
      ..._661,
      ..._662,
      ..._949,
      ..._956
    };
  }
  export namespace group {
    export const v1alpha1 = { ..._663,
      ..._664,
      ..._665,
      ..._666,
      ..._667,
      ..._950,
      ..._957
    };
  }
}