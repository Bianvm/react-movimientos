import classes from "./movement-list-item.component.module.css";
import { MovementVM } from "../movement-list.vm";

interface Props {
  movement: MovementVM;
}

export const MovementListItem = ({ movement }: Props) => (
  <div className={classes.row}>
    <span className={`${classes.dataCell}`}>
      {movement.transaction.toLocaleDateString()}
    </span>
    <span className={classes.dataCell}>
      {movement.realTransaction.toLocaleDateString()}
    </span>
    <span className={`${classes.dataCell} ${classes.alignRight}`}>
      {movement.description}
    </span>
    <span
      className={`${classes.dataCell} ${classes.alignRight} ${
        movement.amount < 0 && classes.error
      }`}
    >
      {movement.amount} €
    </span>
    <span className={`${classes.dataCell} ${classes.alignRight}`}>
      {movement.balance} €
    </span>
  </div>
);
