import { AccountVM } from "../account.vm";
import { AccountBalance } from "./account-balance.component";
import { AccountInfo } from "./account-info.component";
import classes from "./movements-list-header.component.module.css";

interface Props {
  account: AccountVM;
}
export const MovementsListHeader = ({ account }: Props) => (
  <div className={classes.root}>
    <AccountBalance balance={account.balance} />
    <AccountInfo alias={account.name} iban={account.iban} />
  </div>
);
