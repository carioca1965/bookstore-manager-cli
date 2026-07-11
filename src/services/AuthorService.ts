import { Author } from "../entities/Author";
import { AuthorRepository } from "../repositories/AuthorRepository";

export class AuthorService {
  private repository = new AuthorRepository();

  async create(author: Author): Promise<Author> {
    if (!author.name.trim()) {
      throw new Error("O nome do autor é obrigatório.");
    }

    if (!author.nationality.trim()) {
      throw new Error("A nacionalidade é obrigatória.");
    }

    return await this.repository.create(author);
  }
}