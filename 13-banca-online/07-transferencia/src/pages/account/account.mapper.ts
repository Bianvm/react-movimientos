import * as apiModel from "./api";
import * as viewModel from "./account.vm";

export const mapAccountVmToApi = (
  account: viewModel.AccountVm
): apiModel.Account => ({
  balance: 0,
  iban: '',
  id: '',
  lastTransaction: '',
  name: account.name,
  type: account.type
});
