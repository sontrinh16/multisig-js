import * as _656 from "./admin/v1/query";
import * as _657 from "./admin/v1/tx";
import * as _658 from "./admin/v1/types";
import * as _659 from "./clp/v1/genesis";
import * as _660 from "./clp/v1/params";
import * as _661 from "./clp/v1/pool";
import * as _662 from "./clp/v1/querier";
import * as _663 from "./clp/v1/tx";
import * as _664 from "./clp/v1/types";
import * as _665 from "./dispensation/v1/query";
import * as _666 from "./dispensation/v1/tx";
import * as _667 from "./dispensation/v1/types";
import * as _668 from "./ethbridge/v1/query";
import * as _669 from "./ethbridge/v1/tx";
import * as _670 from "./ethbridge/v1/types";
import * as _671 from "./margin/v1/query";
import * as _672 from "./margin/v1/tx";
import * as _673 from "./margin/v1/types";
import * as _674 from "./oracle/v1/types";
import * as _675 from "./tokenregistry/v1/query";
import * as _676 from "./tokenregistry/v1/tx";
import * as _677 from "./tokenregistry/v1/types";
import * as _890 from "./admin/v1/tx.amino";
import * as _891 from "./clp/v1/tx.amino";
import * as _892 from "./dispensation/v1/tx.amino";
import * as _893 from "./ethbridge/v1/tx.amino";
import * as _894 from "./margin/v1/tx.amino";
import * as _895 from "./tokenregistry/v1/tx.amino";
import * as _896 from "./admin/v1/tx.registry";
import * as _897 from "./clp/v1/tx.registry";
import * as _898 from "./dispensation/v1/tx.registry";
import * as _899 from "./ethbridge/v1/tx.registry";
import * as _900 from "./margin/v1/tx.registry";
import * as _901 from "./tokenregistry/v1/tx.registry";
export namespace sifnode {
  export namespace admin {
    export const v1 = { ..._656,
      ..._657,
      ..._658,
      ..._890,
      ..._896
    };
  }
  export namespace clp {
    export const v1 = { ..._659,
      ..._660,
      ..._661,
      ..._662,
      ..._663,
      ..._664,
      ..._891,
      ..._897
    };
  }
  export namespace dispensation {
    export const v1 = { ..._665,
      ..._666,
      ..._667,
      ..._892,
      ..._898
    };
  }
  export namespace ethbridge {
    export const v1 = { ..._668,
      ..._669,
      ..._670,
      ..._893,
      ..._899
    };
  }
  export namespace margin {
    export const v1 = { ..._671,
      ..._672,
      ..._673,
      ..._894,
      ..._900
    };
  }
  export namespace oracle {
    export const v1 = { ..._674
    };
  }
  export namespace tokenregistry {
    export const v1 = { ..._675,
      ..._676,
      ..._677,
      ..._895,
      ..._901
    };
  }
}