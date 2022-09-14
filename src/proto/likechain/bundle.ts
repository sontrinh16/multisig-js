import * as _510 from "./iscn/genesis";
import * as _511 from "./iscn/iscnid";
import * as _512 from "./iscn/params";
import * as _513 from "./iscn/query";
import * as _514 from "./iscn/store";
import * as _515 from "./iscn/tx";
import * as _516 from "./likenft/v1/blind_box_content";
import * as _517 from "./likenft/v1/class_data";
import * as _518 from "./likenft/v1/class_input";
import * as _519 from "./likenft/v1/class_reveal_queue";
import * as _520 from "./likenft/v1/classes_by_account";
import * as _521 from "./likenft/v1/classes_by_iscn";
import * as _522 from "./likenft/v1/event";
import * as _523 from "./likenft/v1/genesis";
import * as _524 from "./likenft/v1/listing_expire_queue";
import * as _525 from "./likenft/v1/listing";
import * as _526 from "./likenft/v1/nft_data";
import * as _527 from "./likenft/v1/nft_input";
import * as _528 from "./likenft/v1/offer_expire_queue";
import * as _529 from "./likenft/v1/offer";
import * as _530 from "./likenft/v1/params";
import * as _531 from "./likenft/v1/query";
import * as _532 from "./likenft/v1/royalty_config";
import * as _533 from "./likenft/v1/tx";
import * as _922 from "./iscn/tx.amino";
import * as _923 from "./likenft/v1/tx.amino";
import * as _924 from "./iscn/tx.registry";
import * as _925 from "./likenft/v1/tx.registry";
export namespace likechain {
  export const iscn = { ..._510,
    ..._511,
    ..._512,
    ..._513,
    ..._514,
    ..._515,
    ..._922,
    ..._924
  };
  export namespace likenft {
    export const v1 = { ..._516,
      ..._517,
      ..._518,
      ..._519,
      ..._520,
      ..._521,
      ..._522,
      ..._523,
      ..._524,
      ..._525,
      ..._526,
      ..._527,
      ..._528,
      ..._529,
      ..._530,
      ..._531,
      ..._532,
      ..._533,
      ..._923,
      ..._925
    };
  }
}