import { LoanService } from "../services/LoanService";
import { Loan } from "../entities/Loan";

export class LoanController {
  private service = new LoanService();

  async create(loan: Loan): Promise<void> {
    try {
      const createdLoan = await this.service.create(loan);

      console.log("\n📚 Empréstimo realizado com sucesso!");
      console.table(createdLoan);
    } catch (error) {
      console.error("❌ Erro ao realizar empréstimo:", error);
    }
  }
}
