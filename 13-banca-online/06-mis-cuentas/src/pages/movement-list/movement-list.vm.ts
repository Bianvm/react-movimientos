export interface MovementVM {
  id: string;
  description: string;
  amount: number;
  balance: number;
  transaction: Date;
  realTransaction: Date;
  accountId: string;
}