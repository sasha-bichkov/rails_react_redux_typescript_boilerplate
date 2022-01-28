import axios from 'axios';

import { IUserRegister } from "@Modules/User/types";
import getMetaValue from "@Root/utils/GetMetaValue/GetMetaValue";
import { convertToSnakeCase } from "@Root/utils/convertToSnakeCase/convertToSnakeCase";

const apiHeaders = {
  headers: {
    'X-CSRF-Token': getMetaValue('csrf-token'),
    'Content-Type': 'application/json',
  }
}

export function register(user: IUserRegister) {
  // @ts-ignore
  const resp = axios.post('/api/v1/users', convertToSnakeCase(user), apiHeaders);
  return resp
}
