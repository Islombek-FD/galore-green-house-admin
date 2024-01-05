import { IFile } from '@/helpers/interfaces';

export declare namespace IApi {
  export namespace Single {
    export interface Response {
      data: File;
    }
  }
}

export declare namespace IQuery {
  export interface Single {
    item: IFile;
  }

  export interface Delete {
    id: string;
  }
}

export declare namespace IForm {
  export interface Upload {
    file: File;
  }
}
