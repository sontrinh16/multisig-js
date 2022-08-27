import * as _637 from "./admin/v1/query";
import * as _638 from "./admin/v1/tx";
import * as _639 from "./admin/v1/types";
import * as _640 from "./clp/v1/genesis";
import * as _641 from "./clp/v1/params";
import * as _642 from "./clp/v1/pool";
import * as _643 from "./clp/v1/querier";
import * as _644 from "./clp/v1/tx";
import * as _645 from "./clp/v1/types";
import * as _646 from "./dispensation/v1/query";
import * as _647 from "./dispensation/v1/tx";
import * as _648 from "./dispensation/v1/types";
import * as _649 from "./ethbridge/v1/query";
import * as _650 from "./ethbridge/v1/tx";
import * as _651 from "./ethbridge/v1/types";
import * as _652 from "./margin/v1/query";
import * as _653 from "./margin/v1/tx";
import * as _654 from "./margin/v1/types";
import * as _655 from "./oracle/v1/types";
import * as _656 from "./tokenregistry/v1/query";
import * as _657 from "./tokenregistry/v1/tx";
import * as _658 from "./tokenregistry/v1/types";
import * as _869 from "./admin/v1/tx.amino";
import * as _870 from "./clp/v1/tx.amino";
import * as _871 from "./dispensation/v1/tx.amino";
import * as _872 from "./ethbridge/v1/tx.amino";
import * as _873 from "./margin/v1/tx.amino";
import * as _874 from "./tokenregistry/v1/tx.amino";
import * as _875 from "./admin/v1/tx.registry";
import * as _876 from "./clp/v1/tx.registry";
import * as _877 from "./dispensation/v1/tx.registry";
import * as _878 from "./ethbridge/v1/tx.registry";
import * as _879 from "./margin/v1/tx.registry";
import * as _880 from "./tokenregistry/v1/tx.registry";
export namespace sifnode {
  export namespace admin {
    export const v1 = { ..._637,
      ..._638,
      ..._639,
      ..._869,
      ..._875
    };
  }
  export namespace clp {
    export const v1 = { ..._640,
      ..._641,
      ..._642,
      ..._643,
      ..._644,
      ..._645,
      ..._870,
      ..._876
    };
  }
  export namespace dispensation {
    export const v1 = { ..._646,
      ..._647,
      ..._648,
      ..._871,
      ..._877
    };
  }
  export namespace ethbridge {
    export const v1 = { ..._649,
      ..._650,
      ..._651,
      ..._872,
      ..._878
    };
  }
  export namespace margin {
    export const v1 = { ..._652,
      ..._653,
      ..._654,
      ..._873,
      ..._879
    };
  }
  export namespace oracle {
    export const v1 = { ..._655
    };
  }
  export namespace tokenregistry {
    export const v1 = { ..._656,
      ..._657,
      ..._658,
      ..._874,
      ..._880
    };
  }
}