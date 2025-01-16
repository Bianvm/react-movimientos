import { Account } from "../api";
import classes from "./account-info.module.css";
interface Props {
  iban: Account["iban"];
  alias: Account["name"];
}
export const AccountInfo = ({ iban, alias }: Props) => (
  <div className={classes.root}>
    <span className={classes.alias}>Alias: {alias}</span>
    <span className={classes.iban}>IBAN: {iban} </span>
  </div>
);
