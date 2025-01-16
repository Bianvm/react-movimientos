import * as apiModel from "./api";
import * as viewModel from "./account.vm";

export const mapAccountFromApiToVM = (
  account: apiModel.Account
): viewModel.AccountVM => ({
  balance: account.balance,
  iban: account.iban,
  name: account.name,
});
