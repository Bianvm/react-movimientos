import Axios from "axios";
import { Account, Movement } from "./movements.api-model";

const urlMovements = `${import.meta.env.VITE_BASE_API_URL}/movements`;
const account = `${import.meta.env.VITE_BASE_API_URL}/account`;

export const getMovements = (accountId: string): Promise<Movement[]> =>
  Axios.get<Movement[]>(urlMovements, { params: { accountId } }).then(
    ({ data }) => data
  );

export const getAccount = (accountId: string): Promise<Account> =>
  Axios.get<Account>(`${account}/${accountId}`,).then(
    ({ data }) => data
  );
