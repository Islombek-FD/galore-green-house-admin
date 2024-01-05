export declare namespace IAction {
  export namespace Login {
    export interface Request {
      token: string;
    }
  }

  export namespace Profile {
    export interface Request {
      profile: IEntity.Profile;
    }
  }
}

export declare namespace IApi {
  export namespace Login {
    export interface Response {
      data: {
        accessToken: string;
      };
    }
  }

  export namespace Profile {
    export interface Response {
      data: IEntity.Profile;
    }
  }
}

export declare namespace IEntity {
  export interface Profile {
    id: string;
    username: string;
    role: string;
  }

  export interface Token {
    token: string;
  }
}

export declare namespace IQuery {
  export type Profile = IEntity.Profile;
}

export declare namespace IForm {
  export interface Login {
    username: string;
    password: string;
  }
}

export interface IState {
  isAuthenticated: boolean;
  isFetched: boolean;
  token: string;
  profile: IEntity.Profile;
}
