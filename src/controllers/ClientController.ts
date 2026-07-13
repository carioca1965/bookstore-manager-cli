import { ClientService } from "../services/ClientService";
import { Client } from "../entities/Client";

export class ClientController {
  private service = new ClientService();

  async create(client: Client): Promise<void> {
    try {
      const createdClient = await this.service.create(client);

      console.log("\n✅ Cliente cadastrado com sucesso!");
      console.table(createdClient);
    } catch (error) {
      console.error("❌ Erro ao cadastrar cliente:", error);
    }
  }

  async findAll(): Promise<void> {
  try {
    const clients = await this.service.findAll();

    console.log("\n👥 Lista de clientes:");
    console.table(clients);
  } catch (error) {
    console.error("❌ Erro ao listar clientes:", error);
  }

 }
  async findById(id: number): Promise<void> {
  try {
    const client = await this.service.findById(id);

    if (!client) {
      console.log(`❌ Cliente com ID ${id} não encontrado.`);
      return;
    }

    console.log("\n👤 Cliente encontrado:");
    console.table(client);
  } catch (error) {
    console.error("❌ Erro ao buscar cliente:", error);
  }
 }

 async update(id: number, client: Client): Promise<void> {
  try {
    const updatedClient = await this.service.update(id, client);

    if (!updatedClient) {
      console.log(`❌ Cliente com ID ${id} não encontrado.`);
      return;
    }

    console.log("\n✅ Cliente atualizado com sucesso!");
    console.table(updatedClient);
  } catch (error) {
    console.error("❌ Erro ao atualizar cliente:", error);
  }


 }

 async delete(id: number): Promise<void> {
  try {
    const deleted = await this.service.delete(id);

    if (!deleted) {
      console.log(`❌ Cliente com ID ${id} não encontrado.`);
      return;
    }

    console.log(`✅ Cliente com ID ${id} excluído com sucesso!`);
  } catch (error) {
    console.error("❌ Erro ao excluir cliente:", error);
  }
 }


}
