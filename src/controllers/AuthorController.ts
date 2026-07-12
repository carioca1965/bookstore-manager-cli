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

  async findAll(): Promise<void> {
  try {
    const authors = await this.service.findAll();

    console.log("\n📚 Lista de autores:");

    console.table(authors);
  } catch (error) {
    console.error("❌ Erro ao listar autores:", error);
  }
}

  async findById(id: number): Promise<void> {
  try {
    const author = await this.service.findById(id);

    if (!author) {
      console.log(`❌ Autor com ID ${id} não encontrado.`);
      return;
    }

    console.log("\n📖 Autor encontrado:");
    console.table(author);
  } catch (error) {
    console.error("❌ Erro ao buscar autor:", error);
  }
}

   async update(id: number, author: Author): Promise<void> {
  try {
    const updatedAuthor = await this.service.update(id, author);

    if (!updatedAuthor) {
      console.log(`❌ Autor com ID ${id} não encontrado.`);
      return;
    }

    console.log("\n✅ Autor atualizado com sucesso!");
    console.table(updatedAuthor);
  } catch (error) {
    console.error("❌ Erro ao atualizar autor:", error);
  }
}

   async delete(id: number): Promise<void> {
  try {
    const deleted = await this.service.delete(id);

    if (!deleted) {
      console.log(`❌ Autor com ID ${id} não encontrado.`);
      return;
    }

    console.log(`✅ Autor com ID ${id} excluído com sucesso!`);
  } catch (error) {
    console.error("❌ Erro ao excluir autor:", error);
  }
}


}