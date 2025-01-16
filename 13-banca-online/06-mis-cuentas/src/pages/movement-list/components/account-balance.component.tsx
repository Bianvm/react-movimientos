import { Account } from "../api";
import classes from "./accont-balance.component.module.css";
interface Props {
  balance: Account["balance"];
}
export const AccountBalance = ({ balance }: Props) => (
  <div className={classes.headerContainer}>
    <h1>Saldos y Últimos movimientos</h1>
    <div className={classes.root}>
      <span className={classes.title}>saldo disponible</span>
      <span className={classes.balance}>{balance} €</span>
    </div>
  </div>
);
