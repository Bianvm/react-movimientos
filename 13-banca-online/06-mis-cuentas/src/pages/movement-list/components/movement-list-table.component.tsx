// import { AccountVm } from "../account-list.vm";
import classes from "./movement-list-table.component.module.css";
import { MovementListItem } from "./movement-list-item.component";
import { MovementVM } from "../movement-list.vm";

interface Props {
  movementList: MovementVM[];
}

export const MovementListTable = ({ movementList }: Props) => (
  <div className={classes.gridContainer}>
    <div className={classes.headerTable}>
      <span className={classes.headerCell}>FECHA</span>
      <span className={classes.headerCell}>FECHA VALOR</span>
      <span className={classes.headerCell}>DESCRIPCIÓN</span>
      <span className={classes.headerCell}>IMPORTE</span>
      <span className={classes.headerCell}>SALDO DISPONIBLE</span>
    </div>

    {movementList.map((account) => (
      <MovementListItem movement={account} key={`${account.accountId}-${account.id}`}/>
    ))}
  </div>
);
