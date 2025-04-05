import { AppLayout } from "@/layouts";
import classes from './account.page.module.css';
import React from "react";
import { CreateAccountForm } from "./components/create-account-form.component";
import { AccountVm } from "./account.vm";
import { mapAccountVmToApi } from "./account.mapper";
import { saveAccount } from "./api";


export const AccountPage: React.FC = () => {
  const onCreate = (accountInfo: AccountVm) => {
    const account = mapAccountVmToApi(accountInfo);
    saveAccount(account).then((result) => {
      if (result) {
        alert("Cuenta creada con éxito");
      } else {
        alert("Error al crear la cuenta");
      }
    });
  }
  return <AppLayout>
    <div className={classes.root}>
      <div className={classes.headerContainer}>
        <h1>Cuenta bancaria</h1>
      </div>
      <CreateAccountForm onCreate={onCreate} />
    </div>
  </AppLayout>;
};
