import type { IUserResponse } from '@zando-rdc/api-contracts';

export interface IAuthState {
  user: IUserResponse | null;
}
