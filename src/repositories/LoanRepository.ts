import { pool } from "../config/database";
import { Loan } from "../entities/Loan";

export class LoanRepository {

  async create(loan: Loan): Promise<Loan> {
    const query = `
      INSERT INTO loans (
        client_id,
        book_id,
        loan_date,
        return_date
      )
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;

    const values = [
      loan.client_id,
      loan.book_id,
      loan.loan_date,
      loan.return_date
    ];

    const result = await pool.query(query, values);

    return result.rows[0];
  }
  async returnLoan(id: number): Promise<Loan | null> {
  const query = `
    UPDATE loans
    SET
      status = 'DEVOLVIDO',
      return_date = NOW()
    WHERE id = $1
      AND status = 'EMPRESTADO'
    RETURNING *;
  `;

  const result = await pool.query(query, [id]);

  if (result.rows.length === 0) {
    return null;
  }

  return result.rows[0];
}

}
