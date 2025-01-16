import { AppLayout } from "@/layouts";
import classes from "./movement-list.page.module.css";
import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { getAccount, getMovements } from "./api";
import { MovementsListHeader } from "./components/movements-list-header.component";
import { MovementListTable } from "./components/movement-list-table.component";
import { MovementVM } from "./movement-list.vm";
import { mapMovementListFromApiToVm } from "./movement-list.mapper";
import { AccountVM } from "./account.vm";
import { mapAccountFromApiToVM } from "./account.mapper";

export const MovementListPage: React.FC = () => {
  const [movements, setMovements] = useState<MovementVM[]>([]);
  const [account, setAccount] = useState<AccountVM>();
  const { id } = useParams();
  useEffect(() => {
    if (!id) {
      console.error("No account id provided");
      return;
    }
    getMovements(id).then((movements) => {
      setMovements(mapMovementListFromApiToVm(movements));
    });
    getAccount(id).then((account) => {
      setAccount(mapAccountFromApiToVM(account));
    });
  }, []);
  return (
    <AppLayout>
      <div className={classes.root}>
        {account && <MovementsListHeader account={account} />}
        <MovementListTable movementList={movements} />
      </div>
    </AppLayout>
  );
};
