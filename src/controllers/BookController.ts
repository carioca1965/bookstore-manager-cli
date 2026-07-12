import { BookService } from "../services/BookService";
import { Book } from "../entities/Book";

export class BookController {
  private service = new BookService();

  async create(book: Book): Promise<void> {
    try {
      const createdBook = await this.service.create(book);

      console.log("\n✅ Livro cadastrado com sucesso!");
      console.table(createdBook);
    } catch (error) {
      console.error("❌ Erro ao cadastrar livro:", error);
    }
  }
    async findAll(): Promise<void> {
     try {
    const books = await this.service.findAll();

    console.log("\n📚 Lista de livros:");
    console.table(books);
  } catch (error) {
    console.error("❌ Erro ao listar livros:", error);
  }
  }

  async findById(id: number): Promise<void> {
  try {
    const book = await this.service.findById(id);

    if (!book) {
      console.log(`❌ Livro com ID ${id} não encontrado.`);
      return;
    }

    console.log("\n📖 Livro encontrado:");
    console.table(book);
  } catch (error) {
    console.error("❌ Erro ao buscar livro:", error);
  }
 }

 async update(id: number, book: Book): Promise<void> {
  try {
    const updatedBook = await this.service.update(id, book);

    if (!updatedBook) {
      console.log(`❌ Livro com ID ${id} não encontrado.`);
      return;
    }

    console.log("\n✅ Livro atualizado com sucesso!");
    console.table(updatedBook);
  } catch (error) {
    console.error("❌ Erro ao atualizar livro:", error);
  }
 }


 async delete(id: number): Promise<void> {
  try {
    const deleted = await this.service.delete(id);

    if (!deleted) {
      console.log(`❌ Livro com ID ${id} não encontrado.`);
      return;
    }

    console.log(`✅ Livro com ID ${id} excluído com sucesso!`);
  } catch (error) {
    console.error("❌ Erro ao excluir livro:", error);
  }
 }

}
