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

  async findAll(): Promise<Author[]> {
  return await this.repository.findAll();
 }

  async findById(id: number): Promise<Author | null> {
  return await this.repository.findById(id);
 }

 async update(id: number, author: Author): Promise<Author | null> {
  if (!author.name.trim()) {
    throw new Error("O nome do autor é obrigatório.");
  }

  if (!author.nationality.trim()) {
    throw new Error("A nacionalidade é obrigatória.");
  }

  return await this.repository.update(id, author);
}

 async delete(id: number): Promise<boolean> {
  return await this.repository.delete(id);
}

}