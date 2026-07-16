import { LoanRepository } from "../repositories/LoanRepository";
import { Loan } from "../entities/Loan";

export class LoanService {
  private repository = new LoanRepository();

  async create(loan: Loan): Promise<Loan> {
    if (!loan.client_id) {
      throw new Error("O cliente é obrigatório.");
    }

    if (!loan.book_id) {
      throw new Error("O livro é obrigatório.");
    }

    return await this.repository.create(loan);
  }
}
