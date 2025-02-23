import {api} from '@api';

function updateToken(token: string) {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export const authService = {updateToken};
