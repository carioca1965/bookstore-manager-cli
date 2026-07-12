import { BookRepository } from "../repositories/BookRepository";
import { Book } from "../entities/Book";

export class BookService {
  private repository = new BookRepository();

  async create(book: Book): Promise<Book> {
    if (!book.title.trim()) {
      throw new Error("O título do livro é obrigatório.");
    }

    if (!book.isbn.trim()) {
      throw new Error("O ISBN é obrigatório.");
    }

    if (book.publication_year <= 0) {
      throw new Error("Ano de publicação inválido.");
    }

    return await this.repository.create(book);
  }
   async findAll(): Promise<Book[]> {
    return await this.repository.findAll();
 }


   async findById(id: number): Promise<Book | null> {
    return await this.repository.findById(id);
  }

  async update(id: number, book: Book): Promise<Book | null> {
  return await this.repository.update(id, book);
 }

 async delete(id: number): Promise<boolean> {
  return await this.repository.delete(id);
 }

}
