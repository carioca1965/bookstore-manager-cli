export interface Loan {
  id?: number;
  client_id: number;
  book_id: number;
  loan_date: Date;
  return_date?: Date | null;
}
