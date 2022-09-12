import * as _442 from "./iscn/genesis";
import * as _443 from "./iscn/iscnid";
import * as _444 from "./iscn/params";
import * as _445 from "./iscn/query";
import * as _446 from "./iscn/store";
import * as _447 from "./iscn/tx";
import * as _448 from "./likenft/v1/blind_box_content";
import * as _449 from "./likenft/v1/class_data";
import * as _450 from "./likenft/v1/class_input";
import * as _451 from "./likenft/v1/class_reveal_queue";
import * as _452 from "./likenft/v1/classes_by_account";
import * as _453 from "./likenft/v1/classes_by_iscn";
import * as _454 from "./likenft/v1/event";
import * as _455 from "./likenft/v1/genesis";
import * as _456 from "./likenft/v1/listing_expire_queue";
import * as _457 from "./likenft/v1/listing";
import * as _458 from "./likenft/v1/nft_data";
import * as _459 from "./likenft/v1/nft_input";
import * as _460 from "./likenft/v1/offer_expire_queue";
import * as _461 from "./likenft/v1/offer";
import * as _462 from "./likenft/v1/params";
import * as _463 from "./likenft/v1/query";
import * as _464 from "./likenft/v1/royalty_config";
import * as _465 from "./likenft/v1/tx";
import * as _852 from "./iscn/tx.amino";
import * as _853 from "./likenft/v1/tx.amino";
import * as _854 from "./iscn/tx.registry";
import * as _855 from "./likenft/v1/tx.registry";
export namespace likechain {
  export const iscn = { ..._442,
    ..._443,
    ..._444,
    ..._445,
    ..._446,
    ..._447,
    ..._852,
    ..._854
  };
  export namespace likenft {
    export const v1 = { ..._448,
      ..._449,
      ..._450,
      ..._451,
      ..._452,
      ..._453,
      ..._454,
      ..._455,
      ..._456,
      ..._457,
      ..._458,
      ..._459,
      ..._460,
      ..._461,
      ..._462,
      ..._463,
      ..._464,
      ..._465,
      ..._853,
      ..._855
    };
  }
}