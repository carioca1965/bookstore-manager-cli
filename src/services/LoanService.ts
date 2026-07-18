import { BookRepository } from "../repositories/BookRepository";

import { LoanRepository } from "../repositories/LoanRepository";
import { Loan } from "../entities/Loan";

export class LoanService {
  private repository = new LoanRepository();
  private bookRepository = new BookRepository();

  async create(loan: Loan): Promise<Loan> {
  if (!loan.client_id) {
    throw new Error("O cliente é obrigatório.");
  }

  if (!loan.book_id) {
    throw new Error("O livro é obrigatório.");
  }

  const book = await this.bookRepository.findById(loan.book_id);

  if (!book) {
    throw new Error("Livro não encontrado.");
  }

  if (book.quantity <= 0) {
    throw new Error("Livro indisponível para empréstimo.");
  }

  const createdLoan = await this.repository.create(loan);

  await this.bookRepository.decreaseStock(loan.book_id);

  return createdLoan;
 }

 async returnLoan(id: number): Promise<Loan> {
  const returnedLoan = await this.repository.returnLoan(id);

  if (!returnedLoan) {
    throw new Error("Empréstimo não encontrado ou já devolvido.");
  }

  await this.bookRepository.increaseStock(returnedLoan.book_id);

  return returnedLoan;
 }

}
