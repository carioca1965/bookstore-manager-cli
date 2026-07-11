import { Author } from "../entities/Author";
import { AuthorService } from "../services/AuthorService";

export class AuthorController {
  private service = new AuthorService();

  async create(author: Author): Promise<void> {
    try {
      const newAuthor = await this.service.create(author);

      console.log("\n✅ Autor cadastrado com sucesso!");
      console.table(newAuthor);
    } catch (error) {
      console.error("❌ Erro ao cadastrar autor:", error);
    }
  }
}