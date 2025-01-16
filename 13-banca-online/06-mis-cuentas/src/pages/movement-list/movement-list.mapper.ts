import * as apiModel from "./api";
import * as viewModel from "./movement-list.vm";

export const mapMovementListFromApiToVm = (
  movementList: apiModel.Movement[]
): viewModel.MovementVM[] =>
  movementList.map((movement) => ({
    ...movement,
    realTransaction: new Date(movement.realTransaction),
    transaction: new Date(movement.transaction)
  }));
