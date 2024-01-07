import { STATUS } from '@/helpers/enums';
import { IMeta, IMultiName } from '@/helpers/interfaces';

export declare namespace IApi {
  export namespace List {
    export interface Response {
      data: IEntity.Data[];
    }
  }

  export namespace Single {
    export interface Response {
      data: IEntity.Data;
    }
  }
}

export declare namespace IEntity {
  export interface Data extends IForm.Values {
    id: string;
    photoUrl: string;
  }
}

export declare namespace IQuery {
  export interface List {
    items: IEntity.Data[];
    meta: IMeta;
  }

  export interface Single {
    item: IEntity.Data;
  }

  export interface Delete {
    id: string;
  }
}

export declare namespace IForm {
  export interface Values {
    name: IMultiName;
    position: IMultiName;
    description: IMultiName;
    role: string;
    photoId: string;
    status: STATUS;
  }
}
